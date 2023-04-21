---
layout: page
title: "PC-SIG Diskette Library (Disk #525)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0525/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0525"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXPRESSCALC 2 OF 2 (ALSO 524)"

    EXPRESSCALC is a spreadsheet with a wide variety of applications ranging
    from business forecasts to mortgage calculations.
    
    It does not require programming background to be able to use it, and
    will interface with other files and databases -- allowing an exchange
    of information.  Included is a tutorial, good documentation and the
    option to configure the package to specific systems.  EXPRESSCALC
    supports spreadsheets up to 64 columns by 256 lines.  Each column can
    be up to 75 characters long.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CALC1.DOC

{% raw %}
```
-










 




                              EXPRESSCALC 

                             USER'S  GUIDE









                                 by 

                             Bill Willis 

                                and

                             Ralph Osness 









                           EXPRESSWARE
                           P.O. Box 1800
                         Duvall, WA 98019

                     Copyright 1986, 1987, 1988

















-













Changes are periodically made to the information contained herein. 
These changes will be incorporated into future editions of this 
publication.


A User Response Form is provided at the back of this publication.  
If this form has been removed, please address your comments to:


                       E X P R E S S W A R E
                           P.O. Box 1800
                         Duvall, WA 98019














                         Proprietary Notice

ExpressCalc is a proprietary product written by Bill Willis and 
Ralph Osness, and is published by Expressware, Redmond, Washington.


All rights reserved except those expressly granted to the user by 
this document.


















-







                                                        Contents



      1          Introduction
      3          System Requirements
      4          Getting Started
      6          A Brief Tutorial
      11         General Information
      16         Keyboard Conventions

      23         ALPHABETIC REFERENCE
      25         ABS Function
      26         ARRANGE Command        (/A)
      31         ATN Function
      32         AVERAGE Function
      33         BLANK Command          (/B)
      35         CONFIGURE Command      (/C)
      42         COS Function
      43         COUNT Function
      44         CPI Function
      46         DELETE Command         (/D)
      48         EDIT Command           (/E)
      50         EXP Function
      51         FIX Function
      52         FORMAT Command         (/F)
      60         GLOBAL Command         (/G)
      64         IF Function
      69         INSERT Command         (/I)
      71         INT Function
      72         KEYWORD Function
      75         LOAD Command           (/L)
      79         LOG Function
      80         LOOKUP Function
      84         LPI Function
      85         MAX Function






















-







Contents



      86         MIN Function
      87         MOVE Command           (/M)
      89         NOLF Function
      91         NOPRINT Function
      94         NPV Function
      96         PAGE Function
      99         PAYMENT Function
      101        PERIODS Function
      103        PRINCIPAL Function
      105        PRINT Command          (/P)
      111        QUIT Command           (/Q)
      112        RANDOM Function
      114        RATE Function
      116        REPLICATE Command      (/R)
      121        ROUND Function
      122        SAVE Command           (/S)
      126        SGN Function
      127        SIN Function
      128        SQR Function
      129        STDEV Function
      130        SUM Function
      131        TAN Function
      132        TITLE Command          (/T)
      134        UTILITY Command        (/U)
      135        WINDOW Command         (/W)
      136        XTERNAL Command        (/X)
      142        ZAP Command            (/Z)
      143        Customizing CALC
      158        CALC File Format
      165        Version Numbers & Major Enhancements
      168        The Files On The CALC Disks
      169        Some Frequently Asked Questions






















-







                                                        Contents



      170        Distribution Notice
      171        User Response Form
      175        Order Form
      177        Index


















































-







PREFACE



PREFACE TO USERS OF EARLIER VERSIONS 



ExpressCalc Version 4 is faster than earlier versions, supports 
subdirectories, and has several other new features, including /Move 
and /Window commands. For a complete list of the latest 
improvements, see the chapter titled "Version Numbers and Major 
Enhancements" at the back of this manual. 

ExpressCalc Version 4 consists of one program, called CALC.EXE. 
Earlier versions had five separate programs, which loaded as each 
command was used, causing a pause when using /Print, /Load, etc. 
as the program was loaded into memory. The new version runs 
commands much faster (almost instantly), and uses less space on 
disk. However, it requires a PC with at least 512K RAM memory to 
run. 

ExpressCalc Version 4 automatically includes the extension .CAL on 
spreadsheets unless you specify a different extension when entering 
a file name. If you have spreadsheets with different extensions, or 
with no extensions, you might consider changing them all to .CAL to 
prevent confusion. Or you can override the default extension with 
the DEFAULT EXTENSION profile option. 

ExpressCalc Version 4 no longer supports 40-column displays, but 
support has been added for EGA and VGA boards, allowing more 
lines to be displayed on the screen.

No file conversion is required to use Version 4. Just load your 
Version 3 spreadsheets and run. Spreadsheets created with Version 
4 can even be used with the Version 3 programs. 

After you have used Version 4 for awhile, let us know what you 
think. There is a new User Response Form in the back of this 
manual, and also one on the Calc disk. We look forward to hearing 
from you.

















-







                                                     INTRODUCTION



                            INTRODUCTION 


ExpressCalc is an easy-to-use "Visible Spreadsheet" program. 
If you work with numbers, at home, on the job or at school, CALC 
is for you. Whether the task is simple or complex, CALC can help. By 
using its powerful commands, reports can be produced in minutes that 
would take hours to do manually, or days to write in BASIC. 

Here are some examples of how people are using CALC: 

   * Computing interest and principal on loans, mortgages, savings 
     accounts.

   * Preparing payroll journals, sales journals, accounts receivable 
     journals.

   * Doing income tax computations, computing depreciation, 
     accumulating income and expenses. 

   * Preparing business forecasts, P&L's, ten-year projections, 
     etc. and then playing "what if..." to see the impact of 
     changing one or more numbers.

   * Analyzing investments, balancing checkbooks, keeping budgets. 

   * Preparing homework assignments for classes in bookkeeping, 
     accounting, math, etc.


Spreadsheets created with CALC can be displayed and altered on 
the screen, printed out, saved on disk and reloaded for further 
changes or review. If you create a really wide spreadsheet that 
won't fit on one page, no problem. CALC will print two pages 
that can be attached to make one wide spreadsheet. 

And spreadsheets are not limited to the size of your computer 
screen. CALC will scroll up, down and sideways to give you a 
spreadsheet up to 64 columns wide and 256 lines long. For large 


                                                                    1












-







INTRODUCTION


spreadsheets, columns or rows can be increased with the "Configure" 
command. Numbers and words can be placed anywhere on the 
spreadsheet. The width of each column of your spreadsheet can be any 
size from 1 character to 75 characters wide, or it can be "zero" 
characters wide, which means it exists and contains data, but is 
hidden from view. A number can have from one to twelve decimals, or 
no decimals at all. 

Spreadsheets can link to other spreadsheets to extract data, 
providing a "3-dimensional" capability. And if you are a File 
Express or PC-File database user, CALC can reach into your 
databases and extract data or add up numbers. And there is no 
limit to the number of databases that can be accessed by a single 
spreadsheet. These are just a few of the features that CALC 
provides. 

This manual describes all the features of CALC in detail. It is 
recommended that the manual be read completely before using 
CALC, but you will find that it is so easy to use, many of its 
features can be mastered even without the documentation. For that 
reason, this manual has been organized as a reference document 
rather than a tutorial. There is a tutorial section at the 
beginning, titled "A Brief Tutorial", but the rest of the manual is 
designed for quickly finding information about specific commands 
and functions.

















2












-







                                           SYSTEM REQUIREMENTS  



                SYSTEM REQUIREMENTS


CALC runs on the IBM PC or compatible systems with this 
minimum configuration: 

     * 512K computer memory. 

     * An MSDOS or PCDOS operating system version 2.0 or later.

     * A monochrome or color monitor with an 80 column display.
       A color graphics board is not necessary, but if you have 
       one, CALC formats its screens in your choice of colors. 
       If your computer has less than 25 lines, CALC can be 
       configured for a shorter screen (8 lines minimum). With  
       an EGA adapter, CALC can display 43 lines instead of 25. 
       With a VGA adapter, several screen sizes may be chosen.

     * Two double sided diskette drives. CALC is also compatible 
       with hard disks and electronic disks.

     * A printer is optional. CALC runs on most printers. 



















                                                                    3












-







GETTING STARTED




                   GETTING STARTED


The following information is provided to get you up and running with 
CALC as quickly as possible. We recognize that most people will try 
running a program before they read the User's Guide. This section 
will give you enough information to make a backup copy of CALC and 
to get the program started. If you have any further questions, refer 
to the manual. 

1. Turn on your computer and load the DOS operating system. The 
   CALC diskette does not have DOS on it, so use a diskette that 
   does.
 
2. FORMAT two blank diskettes using the DOS FORMAT command. 
   (See your DOS manual if needed.)

3. Copy COMMAND.COM from your DOS diskette onto one of the blank 
   diskettes and label it "Program Disk". Copy all the program files 
   from the original CALC Program Disk onto this diskette. 

4. Label the second formatted diskette "Supplemental Disk" and copy 
   all the files from the CALC Supplemental Disk onto it. This 
   diskette can also be used as a data disk for storing spreadsheet 
   files. 

5. At this point, most users will simply type:

                              CALC 

   and press ENTER, which will load and run the program. However, 
   there are some special cases when CALC cannot automatically 
   configure itself, and an extra code must be entered, as follows:

   Computers with a color board, but a monochrome monitor:

                             CALC BW



4












-







                                               GETTING STARTED


   Non-IBM computers which do not have IBM-compatible video 
   memory mapping (such as the Tandy 2000):

                             CALC SL

6. There is a pause for a few seconds as the CALC program loads 
   into memory. Then the CALC banner screen is displayed. Press 
   any key.

7. Check the screen. If it doesn't look right, or if it doesn't 
   show A1 > in the lower left corner, read the Configure (/C) 
   section before proceeding. Otherwise, CALC is ready to use!


CALC may also be used on a hard disk. It is suggested that you 
create a separate subdirectory, then copy the programs and data 
from both diskettes to it. 

























                                                                    5












-







A BRIEF TUTORIAL



                         A BRIEF TUTORIAL


Now that you have CALC loaded in your computer, note that across 
the top of the screen are letters: A, B, C, etc. These letters 
identify the columns of the spreadsheet. Down the left side are 
numbers. These numbers identify each row of the spreadsheet. Each 
coordinate in this grid is called a "cell". For example, the cell 
where the cursor is currently located is called "A1"; to its right 
is "B1"; below it is "A2"; at the end of the spreadsheet (not 
currently on the screen) is "BL256".

Press the arrow keys and you will find that you can move the large 
cursor (called the "cell cursor") around on the screen. When moving 
left and right, it moves one column at a time. Up and down it moves 
one row at a time. In the lower left corner of the screen is an 
indicator called the "cursor coordinate", which shows the cell 
currently occupied. As the cursor is moved about the screen, this 
cursor coordinate will rapidly change to the new cell address.

Press the right-arrow several times and you will see the screen 
"scroll sideways". In other words, column A will disappear on the 
left, and all the other columns will shift to the left, making room 
for a new column on the right. If you keep pressing the right-arrow 
key, eventually you will come to column Z. Then the columns will be 
labelled AA, AB, AC, etc. When the cursor reaches column BL it will 
no longer move. You have reached the edge of the spreadsheet. Using 
the down arrow key you can make the screen "scroll up" until the 
last row of the screen, row 256, is displayed.

When pressing the arrow keys to scroll, if you hold down the arrow 
key, causing it to rapidly repeat, you will notice something a bit 
different. The cursor coordinate in the lower left corner of the 
screen starts advancing rapidly, but the screen is not redisplayed 
until you let up on the arrow key. This allows you to scroll 
quickly to any position in the spreadsheet without waiting for the 
screen to be refreshed.   




6












-







                                                A BRIEF TUTORIAL


Now let's try putting some data on the spreadsheet. Move the cursor 
to coordinate B4, and type 12345 then press the ENTER key. As you 
type the number, you will notice that it is displayed on the bottom 
line of the screen. This line is called the "entry line". When you 
press ENTER, the number on the entry line disappears, and is 
redisplayed up in the spreadsheet at coordinate B4. But it is 
slightly different. Instead of being simply the 12345 you typed, it 
is 12,345.00 and it is shifted to the right of the column. The 
number is displayed this way because of certain "defaults" in 
CALC for displaying numbers. Unless otherwise specified, all 
numbers will have two decimal places, will have commas between the 
thousands, and will be "right-justified" in the column. Of course 
it is possible to change these defaults, for specific cells or for 
the whole screen, and this will be discussed later in the "Format 
Command" section.

Now press the up-arrow and move the cell cursor to B2. Type the 
following: 
                    This is a test of CALC.

and press the ENTER key. As you are typing, if you make an error, 
you can use the backspace key to move the cursor back, or the tab 
key to move forward across the entry line, then make typing 
corrections. After pressing ENTER, look at cell B2. It will now 
contain the text you typed, and the text will overlap into cells 
C2 and D2. Text is allowed to overlap cells in CALC, 
provided the cells to the right have nothing in them. 

Now move the cursor to B6 and type: 

                                B4+B4  

then press the ENTER key. Cell B6 should display the number 
24,690.00 which is the sum of 12345 plus 12345. Let's examine what 
happened. By moving the cursor to B6, you told CALC to put the 
result of the formula into B6. The formula B4+B4 told CALC to 
get the number at B4, add it to itself, and put the result in B6. 
The formula could have been simpler or more complex and CALC 
would have immediately gathered up all the numbers needed, computed 
the new value, and displayed the result at B6. 


                                                                    7












-







A BRIEF TUTORIAL


Looking at the screen, you have now entered all three types of data 
that can go on a CALC spreadsheet:

 At B2 you entered the  "text"        This is a test of CALC.
 At B4 you entered the  "value"       12345
 At B6 you entered the  "formula"     B4+B4

Any cell on the spreadsheet can contain text, a value or a formula. 
Now move the cell cursor to each of the three cells with data in 
them. As the cell cursor moves into a cell, notice that the "cell 
contents" are displayed at the bottom of the screen on the "message 
line". The cell contents are the actual letters or numbers you typed
when entering data into the cell. 

As a final exercise in this tutorial, type  /Z Y to clear
the worksheet (a complete explanation of the Zap (/Z) command 
appears later in the manual). Move the cursor to each cell listed 
below, and enter the data exactly as shown. If you get an error 
message on a line, press the ESC key to clear the entry line, then 
type it again. All lines should go in as shown without errors. 

          At Coordinate:          Enter this data:
               B2            Compute Annual Interest
               B4            Rate: 
               C4            5.5 
               B6            Year
               C6              Balance
               D6             Interest
               B7            "1983
               C7            5000
               D7            C7*C4/100 
               B8            "1984
               C8            C7+D7
               D8            C8*C4/100 
               B9            "1985
               C9            C8+D8
               D9            C9*C4/100 
               B11           Totals
               C11           C9+D9  
               D11           SUM(D7:D9) 


8












-







                                                A BRIEF TUTORIAL



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


This simple spreadsheet computes the interest on a savings account 
at a specified annual interest rate. Since this is a sample 
exercise, the spreadsheet has been kept small, but later you will 
learn how to use the "Replicate" command to extend a spreadsheet 
like this one to fifty years or more, in a matter of seconds. The 
"SUM" function in cell D11 is simply adding up the numbers in D7 
through D9, so you can see the accumulated interest for three years.

Now let's try some "what if" experiments. What if the interest rate 
were seven percent instead of 5.5? To see the result, simply move 
to cell C4, type 7 and press ENTER. All the figures on the screen 
are immediately updated with the new interest computation. Or what 
if the interest were 18%? Try it. What if there were only $850.25 
instead of $5000? Move the cursor to C7 and enter 850.25 and the 
spreadsheet will immediately be recalculated. 

A printed report of the spreadsheet is often desirable.  Ready your 
printer, then type the command /P which invokes the Print routine. 
You will then be prompted for several options. For this simple 
spreadsheet, just press ENTER for each of the options. The 
spreadsheet will print, and CALC will return to its original 
state, waiting for another command. 


                                                                    9












-







A BRIEF TUTORIAL



Finally, before exiting from CALC, let's save the spreadsheet on 
disk. Type /S to invoke the Save routine. You will be asked to 
enter the name of the spreadsheet; type TEST and press ENTER. 
CALC will say Saving file. Stand by . . . and the file will be 
written to your CALC disk. It can later be loaded using the /L 
command. (Note: If you get a message saying File Exists. Overwrite 
or Backup?, it only means that someone before you saved a file 
called TEST. Reply O to the message, and your TEST file will 
overwrite the one already on the disk.)

This concludes the brief tutorial. The remainder of this manual is 
organized for reference. It is a good idea to read through it to 
familiarize yourself with some of the more sophisticated commands. 
But the best way to learn CALC is to use it. 



























10












-







                                           GENERAL INFORMATION




               GENERAL INFORMATION


The maximum size of a CALC spreadsheet is 64 columns by 
256 rows. The maximum content of a cell is 74 characters, and the 
maximum column width is 75 characters. The amount of memory 
available for your spreadsheet is displayed at all times in the 
lower left corner of the screen. It is a number followed by the 
letter "K". If it says 16K, for example, you still have 16K of 
memory available for typing text and formulas. If it says 1K, be 
careful. Your spreadsheet is getting too big and may fill memory, 
causing the MEMORY FULL message.

Three types of data may be entered into a cell: 

TEXT:       Column headings, item descriptions and so forth, are 
            text data. Normally you can just type the text and 
            press ENTER, causing it to appear in a cell. However, 
            if the text data is all numeric, or looks like a 
            formula, enter a quotation mark or apostrophe to tell 
            CALC that it's text. For example, in the tutorial 
            above, when we entered the year 1984, we entered it as 
            "1984. If we had entered it without the quotation mark, 
            CALC would have processed it as a value and 
            displayed it as 1,984.00. Any character may be typed in 
            a text entry. If the text data is wider than the 
            column, and there is nothing in the cell to its right, 
            it will overlap into subsequent cells. If there is 
            something in the cell to its right, the text data will 
            be truncated on the screen. The entire text entry is 
            retained in the cell, even if it does not all display. 
            Text can be left- or right-justified in the column by 
            using the Format (/F) command. Text entries can be 
            from 1 to 74 characters in length.






                                                                   11












-







GENERAL INFORMATION


VALUE:      A value is a number. When a value is entered into a 
            cell, it is displayed according to current defaults. 
            For example, you enter 12345 and it is displayed as 
            12,345.00. Each value is displayed according to the 
            display attributes of the cell.  These attributes can 
            be changed using the Format (/F) command. CALC 
            will accept values of any size. However, values which 
            have more than 14 decimal places to the left or right 
            of the decimal will appear in scientific notation. 
FORMULA:    A formula is one or more cell coordinates and/or one or 
            more values, combined using arithmetic operators. For 
            example, a formula might simply add together several 
            numbers: A1 + B1 + C1 + D1 or it might perform a 
            more complex task:  A1*2.5+(SUM(A1:D1)-.00005)
            Formulas can be up to 74 characters in length.

A formula can have any combination of cell coordinates, values, 
math functions, statistical functions and IF functions, each 
separated by an operator. An operator is a symbol or word which 
combines two numbers mathematically. For example, the plus sign is 
the operator for adding numbers together. CALC has many 
operators that can be used in formulas. They are:

      Operator        Purpose                  Example

          +     Addition                     A1 + 12345
          -     Subtraction                  A1 - 44.6
          *     Multiplication               A1 * 2 
          /     Division                     A1 / .003322
          ^     Exponentiation               2 ^ 8
          %     Percentage                   A1 % A5
         AND    Logical And (complement)     A1 AND A2
         OR     Logical Or (conjunction)     A1 OR A2
         NOT    Logical Not (disjunction)    NOT A5
          \     Modulo (remainder)           A1 \ 10







12












-







                                           GENERAL INFORMATION


When CALC processes a formula, it follows standard mathematical 
rules of precedence: 

     * Exponentiation (^) is done first  
     * multiplication (*), division (/) and percentage (%) are next  
     * then modulo (\) 
     * then addition (+) and subtraction (-) 
     * then relational operators (=, >, etc.)
     * and finally, logical operators (AND, OR, NOT)

Some of these operators are well-known and require no further 
explanation. Others are less common, and will be recognized only by 
those with a mathematics background. The following paragraphs give 
further explanation of the less common operators. 

The Percentage operator (%) means "as a percent of". For example, 
the formula 3 % 5 can be read "3 as a percent of 5", and returns 60 
(3 is 60% of 5). 3 % 5 is the same as 3 * 100 / 5.

The Modulo operator (\) does division, then returns the remainder 
instead of the quotient. For example, 10 \ 3 returns 1. Instead of 
the backslash character, the word MOD may also be used in formulas 
to designate modulo. MOD must have a space on the left and right. 
10 MOD 3 is the same as 10 \ 3. 

Relational operators are normally used in IF functions to compare 
two numbers. They are discussed in the Alphabetical Reference 
section of this manual, under IF function. However, relational 
operators may be used in formulas without IF, to return the truth 
value of a relation.

Logical, or Boolean, operators (AND, OR, NOT) are also usually 
used in conjunction with the IF function, but can be used in any 
formula. When two numbers are compared with a logical operator, 
a non-zero number is considered true, while zero is false. After 
logically combining the two numbers, if the result is true, a 1 is 
returned. If false, a zero is returned. The symbols &, | and ~ can 
be used for AND, OR and NOT if preferred. For example, 
5 & 1 is the same as 5 AND 1, and returns a value of 1 (true). 



                                                                   13












-







GENERAL INFORMATION


Parts of a formula may be nested in parentheses, up to thirty 
levels. The following rules apply to formulas with parentheses:

     * Every left parenthesis must have a matching right 
       parenthesis, or else a formula error occurs.

     * Parenthesized expressions are always evaluated from the 
       inner-most to the outer-most. Using parentheses, the 
       precedence of the arithmetic operators can be overridden. 
       For example, A1+5*C1 will do the multiplication first, then 
       the addition. (A1+5)*C1 will do the addition first.

     * Use parentheses to separate two operators in a row. For 
       example, to multiply A1 times -5, the formula A1*-5 is not 
       valid because the * and - are together. Instead use this 
       format: A1*(-5) to accomplish the arithmetic.

A formula may also include a function, or consist solely of a 
function. For specific information on each function, see the 
alphabetical reference section. Some spreadsheet users are 
accustomed to prefixing a function name with an @ sign. For 
example, instead of TAN(A1) they might prefer to enter 
@TAN(A1). To accommodate these users, CALC accepts @ 
signs anywhere in a formula, and ignores them. 

Some spreadsheet users are also accustomed to entering a period 
instead of a colon between cells in a range. For example, instead 
of SUM(A1:A20) they are accustomed to entering SUM(A1.A20) or
maybe even @SUM(A1.A20). To accommodate these users, CALC 
accepts a period instead of a colon in a range, and ignores @ 
signs. 

Spaces may also be used freely in formulas. Lower-case characters 
may also be used, but they will be translated to upper-case 
(capital) letters. Spaces may not be used in the middle of function 
names or cell references. For example, AVE RAGE and A 12 are not 
acceptable in a formula.

Values and formulas may contain numbers in exponential form 
(similar to scientific notation). The mantissa and exponent are 


14












-







                                           GENERAL INFORMATION


separated by the letter E (or e). A plus or minus sign is optional 
on the exponent. The E is effectively the same as *10^. Here are 
some examples of exponential numbers and formulas with exponential 
numbers:

                           3E10
                           5e-2
                           -5E+2
                           A1+3E10
                           -5E-2 + A1 - 3E10
































                                                                   15












-







KEYBOARD CONVENTIONS



                        KEYBOARD CONVENTIONS 

Certain keys perform special functions in CALC. These keys fall 
into two categories; cell cursor keys and entry line keys. Once you 
start entering data, CALC goes into data entry mode, and only 
entry line keys will be recognized from the keyboard until the line 
is entered or cancelled. 

                        CELL CURSOR KEYS

Special Key      Alternate              Purpose of key

UP ARROW         CONTROL-E      Moves the cell cursor up one row.  

DOWN ARROW       CONTROL-X      Moves the cell cursor down one row. 

LEFT ARROW       CONTROL-S      Moves the cell cursor left one 
BACKSPACE                       column.
BACKTAB

RIGHT ARROW      CONTROL-D      Moves the cell cursor right one 
TAB                             column.

HOME                            Moves the cell cursor to the upper 
                                left corner of the screen.

END                             Moves the cell cursor to the lower 
                                right corner of the screen.

PAGE UP          CONTROL-R      Moves the cell cursor back (up) 
                                one screen. (to center row)

PAGE DOWN        CONTROL-C      Moves the cell cursor forward (down)
                                one screen. (to center row)

                 CONTROL-W      Moves the screen down one row  
                                without moving the cell cursor.




16












-







                                          KEYBOARD CONVENTIONS


                        CELL CURSOR KEYS

Special Key      Alternate              Purpose of key
                 CONTROL-Z      Moves the screen up one row  
                                without moving the cell cursor.

                 CONTROL-N      Inserts a row above the row where
                                the cell cursor is located.

                 CONTROL-Y      Deletes the row where the cell
                                cursor is located.

=                CONTROL-Q      Prompts for a cell, and jumps to it.

!                               Recalculates all the formulas in 
                                the spreadsheet.

/                               Prompts for a command code. 

                         ENTRY LINE KEYS

Special Key      Alternate              Purpose of key

BACKSPACE        CONTROL-S      Moves data cursor left one space.

TAB              CONTROL-D      Moves data cursor right one space.

ESCAPE           CONTROL-C      Cancels the current command or 
                                entry, and erases the entry line.
 
INSERT           CONTROL-V      Toggles on/off insert mode. 

DELETE           CONTROL-G      Deletes the character of input 
                                data at the cursor. 

HOME                            Moves the data cursor to the first
                                character.

END                             Moves the data cursor to the end 
                                of the formula or text.


                                                                   17












-







KEYBOARD CONVENTIONS


                         ENTRY LINE KEYS

Special Key      Alternate              Purpose of key

ENTER or         COMMA          Enters a command and processes it.
RETURN

                 CONTROL-T      Erases input data from the cursor 
                                to the end of the entry line.

UP ARROW                        Enters a command, then moves the  
                                cell cursor up one row.  

DOWN ARROW                      Enters a command, then moves the 
                                cell cursor down one row. 

LEFT ARROW                      Enters a command, then moves the  
                                cell cursor left one column. 
          
RIGHT ARROW                     Enters a command, then moves the  
                                cell cursor right one column.

UP ARROW and DOWN ARROW move the cell cursor up and down a 
line at a time. When data or a command is being entered on the entry 
line, these keys operate like the ENTER key, followed by the arrow 
key. When the cell cursor reaches the top or bottom line, it stops 
moving. When these keys are held down, causing them to repeat, and 
they move off the current screen, CALC goes into a high-speed 
mode. The screen is not updated until the key is let up. However, 
the coordinate is displayed in the lower left corner of the screen. 
   
LEFT ARROW and RIGHT ARROW move the cell cursor to the left 
and right, one column at a time. If the column being moved into is 
not currently on the screen, the screen will be "scrolled" left or 
right to display it. When the cursor reaches the left or right edge 
of the spreadsheet (column A or column BL), it stops moving. When 
these keys are held down, causing them to repeat, CALC goes into 
high-speed mode, described in the previous paragraph. When moving 
the cell cursor around, BACKSPACE works exactly like the LEFT 
ARROW key and TAB works exactly like the RIGHT ARROW key.


18












-







                                          KEYBOARD CONVENTIONS


When data is being entered on the entry line, the TAB key and 
BACKSPACE key serve a different purpose. Instead of moving the 
cell cursor, they move the small data cursor. BACKSPACE is 
non-destructive, so you can move back to a previous point in the 
entry line without erasing any of the right-most characters. 
Pressing BACKSPACE while on the first position of a command 
entry will cause the command to be terminated and erased. 

Pressing HOME moves the cursor to the cell in the upper left corner 
of the screen. Pressing END moves the cursor to the cell in the 
lower right corner of the screen. Pressing HOME twice moves the 
cursor to cell A1. Pressing END twice moves the cursor to the 
highest cell in the spreadsheet. If the cursor is already there, 
pressing it has no effect. 

The ESCAPE key, and its alternate, CONTROL-C, are popular keys 
for cancelling a command. These keys are only effective when 
something has been typed on the entry line. Pressing one of them 
will erase everything on the entry line, and move the cursor to the 
beginning of the line. If a command is cancelled with one of these 
keys, it is erased and has no effect. If text, a value or a formula 
are cancelled, the entry line is erased, and the contents of the 
current cell are unaltered.

Pressing the PAGE DOWN key advances the display so that the new 
screen contains the bottom three rows from the previous screen at 
the top of the new screen. The cell cursor is positioned on the 
middle row of the new screen. PAGE UP works just like PAGE 
DOWN, except that it moves backward instead of forward. 

Pressing CONTROL-W causes the screen to shift up one row, and a 
new row to be displayed at the bottom. Use it when you want to see 
some data that is just beyond the bottom of the screen. Note that 
CONTROL-W does not usually cause the cell cursor to move. The one 
exception is when the cell cursor is on the top line. Since the top 
line is being shifted off the screen, the cell cursor must move 
down one line to remain on the screen. CONTROL-Z works essentially 
the opposite of CONTROL-W: it causes the screen to shift down one 
row, and a new row to be displayed at the top.



                                                                   19












-







KEYBOARD CONVENTIONS


CONTROL-N is a quick method to insert a row. Using this key 
combination will cause a row to be inserted above the row the cell 
cursor is on. The same result may be accomplished with the Insert 
(/I) command (see Insert command in the Alphabetical Reference).

CONTROL-Y is a quick method to delete a row. Using this key 
combination causes the row at the cell cursor location to be 
deleted. The same result may be accomplished with the Delete (/D) 
command (see Delete command in the Alphabetical Reference section 
for details).

The INSERT key is used to add characters in the middle of the entry 
line such as a formula or text. Use the tab key to move the data 
cursor to the spot where the insertion is to be done. Press the 
INSERT key to toggle on the insert mode. The data cursor becomes 
enlarged, indicating that insert mode is toggled on. Now type the 
characters to be inserted. They will be inserted at the cursor 
position, and the data from the cursor to the end of the entry will 
be shifted right. When data being shifted reaches the right edge of 
the entry line, it disappears and is dropped. The INSERT key is 
only effective when there is data in the entry line. Other editing 
keys, such as BACKSPACE and DELETE can be used freely while 
Insert Mode is toggled on. To toggle off Insert Mode, press INSERT 
a second time. Pressing ENTER also automatically turns off Insert 
Mode. Note: There is a configuration option to make the INSERT 
key insert a single blank when it is pressed. See the section 
on Customizing CALC.

The DELETE key is only effective when entering data on the entry 
line. It causes the character at the data cursor to be erased, and 
all the characters to the right of it to be shifted left. To erase 
several characters, press DELETE multiple times. 

CONTROL-T is only effective when entering data on the entry line. 
It causes the character at the cursor and all data to the right of 
the cursor to be erased. 

The ENTER key (RETURN key) is used to enter a line of data. 
COMMA (,) can also be used to enter data. The one exception for 
the comma is when entering text. Since the comma is a valid text 


20












-







                                          KEYBOARD CONVENTIONS


character, only the ENTER key or arrow keys terminate a text field. 

The EQUAL SIGN (=) invokes CALC's "Go To Coordinate" routine. 
To jump to a specific cell, type = followed by the cell coordinate. 
For example, =Z99 will move the cell cursor immediately to Z99. 

CONTROL-Q is the same as the equal sign, and can be followed by one 
of six control keys, to move the cursor around on the spreadsheet: 

     CONTROL-Q CONTROL-R             Move cell cursor to cell A1.
     (or HOME HOME)

     CONTROL-Q CONTROL-C             Move cell cursor to highest cell 
     (or END END)                    with data in it. (For example, if 
                                     the spreadsheet extends from row  
                                     1 to 20, and column A to K, this 
                                     will go to cell K20.)

     CONTROL-Q CONTROL-E             Move cell cursor to top row 
     (or = UP ARROW)                 on screen (same column).

     CONTROL-Q CONTROL-X             Move cell cursor to bottom row 
     (or = DOWN ARROW)               on screen (same column).

     CONTROL-Q CONTROL-S             Move cell cursor to left-most 
     (or = LEFT ARROW)               column on screen (same row).

     CONTROL-Q CONTROL-D             Move cell cursor to right-most 
     (or = RIGHT-ARROW)              column on screen (same row).

Users of popular software programs will recognize these as common 
control key sequences for moving the cursor around the screen. 

The EXCLAMATION POINT (!) causes "recalculation"; i.e. all the 
formulas in the spreadsheet are re-computed. This command is 
normally used when automatic recalculation has been turned off.
At startup, automatic recalculation is set on. Each time a number
or formula is entered, the message "CALCULATING" appears, 
and the cursor ripples through all the formulas. As your 
spreadsheet gets larger, the pause required to recalculate may grow 


                                                                   21












-







KEYBOARD CONVENTIONS


annoyingly long. Turn off auto recalculation using the Global, 
Manual (/GM) command, then when all your data is entered, type ! 
to recalculate. As each cell is recalculated, the cursor "ripples" 
across the screen, showing its progress. Normally recalculation 
proceeds across rows, but it can be set to go column-by-column 
using the /Global, Column/Row command.

The SLASH character (/) initiates a "command". You will be 
prompted with a list of valid commands such as Print, Format, etc.  
To invoke a command, key the first letter of the command. Most 
commands prompt for more information. Each command is described 
in detail in the "Alphabetical Reference" section.

When typing a command or data, it is not necessary to wait for the 
prompt message to be displayed. If you know what to enter, just 
type it. CALC pauses briefly before displaying a message, 
anticipating that you might already know what it is going to ask. 
If you press a key while the message is displaying, you may only 
get part of the message. CALC stops immediately when a key is 
pressed, and processes that key. During operations that take 
several seconds, such as saving files, recalculating or 
replicating, it is best not to enter data; some of the keystrokes 
might be ignored.



















22












-







                                       ALPHABETICAL REFERENCE




                        Alphabetical Reference

Name           Type      Purpose

ABS          Function    Absolute value 
ARRANGE      Command     Arrange (sort) columns or rows 
ATN          Function    Arctangent
AVERAGE      Function    Average of a range of numbers 
BLANK        Command     Blank out one or more cells 
CONFIGURE    Command     Reconfigure screen, keyboard, printer
COS          Function    Trigonometric Cosine
COUNT        Function    Count of a range of numbers
CPI          Function    Change characters per inch on printer
DELETE       Command     Delete a row or column
EDIT         Command     Edit the contents of a cell
EXP          Function    Mathematical number e raised to the x power 
FIX          Function    Integer (ignores sign)
FORMAT       Command     Change display characteristics of cell(s)
GLOBAL       Command     Change various spreadsheet settings
IF           Function    Conditional test; If...Then...Else
INSERT       Command     Insert a row or column
INT          Function    Integer (true integer; i.e. INT(-2.5) = -3)
KEYWORD      Function    Display current date, time, page number
LOAD         Command     Load a file into spreadsheet area from disk
LOG          Function    Natural logarithm
LOOKUP       Function    Table lookup based on key value
LPI          Function    Change lines per inch on printer
MAX          Function    Maximum value in a range of numbers
MIN          Function    Minimum value in a range of numbers
MOVE         Command     Move cells, columns, rows or blocks of cells
NOLF         Function    No line feed on this print line
NOPRINT      Function    Don't print this line 
NPV          Function    Net present value of a range of numbers
PAGE         Function    Page break or conditional page break on printer
PAYMENT      Function    Compute payment, given principal, rate, periods
PERIODS      Function    Compute periods, given principal, payment, rate
PRINCIPAL    Function    Compute principal, given payment, rate, periods



                                                                   23












-







ALPHABETICAL REFERENCE


                       Alphabetical Reference

Name           Type      Purpose

PRINT        Command     Print spreadsheet 
QUIT         Command     Exit from CALC
RANDOM       Function    Random number
RATE         Function    Compute rate, given principal, payment, periods
REPLICATE    Command     Copy cells, and optionally adjust
ROUND        Function    Round a number to specified decimals
SAVE         Command     Save a spreadsheet onto disk
SGN          Function    Sign of a number 
SIN          Function    Trigonometric sine function
SQR          Function    Square root 
STDEV        Function    Compute standard deviation of a range
SUM          Function    Sum a range of numbers
TAN          Function    Trigonometric tangent
TITLE        Command     Lock titles horizontally and/or vertically
UTILITY      Command     Delete and rename files; shell to DOS
WINDOW       Command     Split the screen into two windows
XTERNAL      Command     Retrieve data from other files or databases
ZAP          Command     Clear the spreadsheet area  




















24












-







                                                               ABS



                           ABS Function


Purpose:  Computes the absolute value of a cell or formula, and 
          returns the value to the current cell or formula. 


Format:   ABS(-35)       Returns 35. 
         
          ABS(A1)        If A1 = 35,  then ABS(A1) = 35.
                         If A1 = 0,   then ABS(A1) = 0.
                         If A1 = -35, then ABS(A1) = 35.
         
          ABS(A1*2/B5)   Resolves formula, then computes absolute 
                         value of the result.


Remarks:  ABS(x) can be entered into a cell, causing a negative 
          number to be converted to a positive number, and used as 
          the cell value. Or the ABS function can be used in a 
          formula, and/or may have a formula as its argument.
           

Example:  A spreadsheet compares two months' expenses (In 
          columns B and C), and prints a third column (D), called 
          "variance". The variance column is used in some later 
          computations which require all the numbers to be 
          positive. In cell D1 we want the difference between B1 
          and C1, with the sign removed if it is negative. We 
          enter:

                              ABS(B1-C1)

          The Replicate command can then be used to copy the 
          formula down the column. 






                                                                   25












-







ARRANGE



                        ARRANGE Command (/A)


Purpose:  Sorts a range of rows or columns into ascending or 
          descending sequence. 


Prompts:  After entering /A you are prompted: 

                       Column sort or Row sort?

          Respond C to sort cells which run down a column, or
          R to sort cells which run across a row. The default is 
          C, since most sorts are done on a column of names or 
          numbers. The remaining prompts shown here refer to 
          Column sorts. Row sorts have similar prompts. Entering 
          C, the next prompt is:

          Column letter to be sorted (or range if partial column)

          To sort all the cells in a column, just enter the column 
          letter, such as G, and press ENTER. To sort only a 
          partial range in the column, enter the from and to cells 
          separated by a colon. 

          The third prompt is: 

                       Ascending or Descending?

          To sort the lines in normal (ascending) sequence, type A, 
          or press ENTER. To sort them in reverse (descending) 
          sequence, type D. The next prompt is:

          Second column letter to be sorted (press ENTER if none)

          If only one column is being sorted, press ENTER. If there 
          is a second column to be sorted, enter its letter and 
          CALC will ask if it is to be sorted ascending or 
          descending. The next prompt is: 


26












-







                                                       ARRANGE



            Third column letter to be sorted (press ENTER if none)

          Press ENTER if there is no third column. If a letter is 
          entered, CALC asks if it is to be sorted ascending or 
          descending. CALC now sorts the specified lines into 
          sequence, redisplays them, and adjusts formulas. 

Remarks:          Minimal input is required to do most sorts. For example, 
          to sort an entire spreadsheet in customer name sequence, 
          if the names are in column B, type: 

                      /ACB (ENTER) (ENTER) (ENTER)

          If there are headings on the spreadsheet, you do not want 
          them sorted with the detail lines. Enter a range of cells 
          that excludes the headings: 

                   /AC B5:B80 (ENTER) (ENTER) (ENTER)

          The sort precedence used by CALC is as follows:

                1. Text spaces
                2. Text special characters ($, %, &, etc.)
                3. Text lower/upper case letters
                   (a, A, b, B, c, C, etc.)
                4. Text numerals ("0", "1", "2", etc.)
                5. Negative values/formulas (-3, -2, -1)
                6. Zero values/formulas
                7. Positive values/formulas (1, 2, 3) 
                8. Empty cells

          This precedence is not ASCII sequence; it is a popular 
          collating sequence for reports. But what if your sort 
          requires precise ASCII sequence? Or you need to ignore 
          upper/lower case. Or ignore the sign of a number.  Or 
          sort numbers ahead of text. In those cases, the standard 
          precedence of the /Arrange command can be changed with 
          configuration options in the .PRO file. See the section 
          titled Customizing CALC for more information.


                                                                   27











-







ARRANGE



          The precedence for descending sorts is essentially the 
          same, except text is sorted z, Z, y, Y, x, X, etc., text 
          numerals are sorted 9, 8, 7, etc. and positive values are 
          sorted before zero, then negative values. 

          Note that values and formulas are sorted by their numeric 
          value, not by their contents. In other words, the number 
          is sorted, not the formula text. Formatting options are 
          also not included in the sort. For example, if a value 
          has a floating dollar sign, the dollar sign is not part 
          of the sorted data. If text is right-justified in the 
          cell, leaving spaces on the left, the spaces are not part 
          of the sort unless they were input as part of the text 
          string.

          If two cells have the same value, the one which comes 
          first remains first after sorting. Because of this, it is 
          possible to sort on more than three keys, even though 
          CALC allows for only a three key sort. Suppose you 
          want to sort a spreadsheet on five columns: A through E, 
          with A being the primary key, B the secondary, and so 
          forth. To accomplish this, start by sorting column E, 
          then sort column D, then C, then B, and finally A. At any 
          point in the sort, the sequence of your data may look a 
          bit strange, but when it is done, it will be in sequence 
          by columns A, B, C, D, then E. If this is a sort you do 
          regularly, you may want to set up a Smart Key to 
          automatically go through all the steps. 

          /Arrange can also be used to rearrange the columns of a 
          spreadsheet. On an empty row, put a number in each column 
          indicating where the column will appear in the new 
          report. Then sort on that row. The columns will be 
          rearranged in the new sequence, and formulas will be 
          adjusted accordingly.

          One word of caution: /Arrange can scramble a spreadsheet 
          into uselessness with just a few wrong keystrokes. It is 
          advisable to /Save your spreadsheet before experimenting 


28












-







                                                       ARRANGE


          with a new sort. 

          To exit from /A without sorting, press ESCAPE or 
          BACKSPACE. 


Example:           EXAMPLE #1: A list of students and their test scores 
          has been entered into a spreadsheet. Student names (last 
          name then first name) are in column A. Scores are in 
          column B: 
                              A                    B
                    1   Smith, John                79
                    2   Jones, Sally              100
                    3   Doe, John                  55
                    4   Doaks, Joe                 79
 
          To sort the spreadsheet alphabetically by student name, 
          type /ACA (ENTER) (ENTER) (ENTER). The revised spread-
          sheet looks like this:

                              A                    B
                    1   Doaks, Joe                 79
                    2   Doe, John                  55
                    3   Jones, Sally              100
                    4   Smith, John                79   


          EXAMPLE #2: Using the same spreadsheet described in 
          example 1, sort it by test score, with the highest scores 
          at the top. If two or more students have the same score, 
          they should appear alphabetically. 

          Column B is the primary sort column, because we want to 
          sort by test score first. Column A is the secondary sort 
          column, because we want to sort any students with the 
          same test scores alphabetically by name. Type:

               /ACB (ENTER) D A (ENTER) (ENTER) (ENTER) 

          to sort on column B descending then column A ascending. 


                                                                   29











-







ARRANGE



          After a pause, during which CALC loads the sort 
          program and sorts the data, the spreadsheet is displayed:

                              A                    B
                    1   Jones, Sally              100
                    2   Doaks, Joe                 79
                    3   Smith, John                79
                    4   Doe, John                  55


          The students with the highest test scores appear first. 
          Since Doaks and Smith both have the same score of 79, 
          they appear alphabetically. If Jones' score had also been 
          79, she would have appeared alphabetically between Doaks 
          and Smith. 

          If the alphabetical sort in example 1 had been done just 
          prior to this sort, it would not have been necessary to 
          specify student names as a secondary sort field, since 
          they would have already been in alphabetic sequence. 





















30












-







                                                               ATN



                             ATN Function


Purpose:  Computes the arctangent of a cell or formula (in 
          radians), and returns the value to the current cell or 
          formula. 


Format:   ATN(3)           Returns 1.249045772
         
          ATN(A1)          If A1 = 3, and cell has 2 decimal 
                           places, returns 1.25 

          ATN(A1*2/B5)     Resolves formula, then computes 
                           arctangent 


Remarks:  ATN(x) can be entered into a cell, causing the arctangent 
          of a number to be computed, and used as the cell value. 
          Or the ATN function can be used in a formula, and/or may 
          have a formula as its argument.
           

Example:  Set up a simple spreadsheet which allows a tangent value 
          to be entered, and returns the arctangent in radians and 
          degrees. Enter the following:

                           A1:   Tangent:            
                           A2:   Radians:
                           A3:   Degrees:
                           B1:   1
                           B2:   ATN(B1)
                           B3:   B2*180/3.14159

          When a value is typed into B1, the angle, in radians, 
          displays in B2. The angle in degrees displays in B3.





                                                                   31












-







AVERAGE



                          AVERAGE Function


Purpose:  Computes the mean average of a range of numbers and 
          returns the result to the current cell or formula.

Format:   AVERAGE(A1:A20)      Averages a column of numbers

          AVERAGE(A5:E5)       Averages a row of numbers

          AVERAGE(A1:D20)      Averages a block of numbers

Remarks:  AVERAGE(m:n) can be entered into a cell, causing the 
          specified range to be averaged, and used as the cell 
          value. Or the AVERAGE function can be used in a formula. 
           
          The AVERAGE function is actually a combination of two 
          other functions: SUM and COUNT. AVERAGE(A1:A20) is the 
          same as:
                       SUM(A1:A20)/COUNT(A1:A20)

          The coordinate range specified in an AVERAGE function 
          may be down a column, such as AVERAGE(A1:A20), it may 
          be across a row, such as AVERAGE(A1:E1), or it may 
          be a block of cells (designated by the upper-left and 
          lower-right coordinates), such as AVERAGE(A1:D20).

          If the specified range of cells contains any empty cells, 
          they are ignored both in sum and count. If the range 
          contains any cells with text, ERROR is returned. 

Example:  Column B has a string of numbers from B7 to B26 which 
          are to be averaged. The result is to be placed in B27. At 
          B27 enter:

                          AVERAGE(B7:B26)

          After recalculation, B27 contains the mean average.



32












-







                                                           BLANK



                          BLANK Command (/B)


Purpose:  Removes the contents from a cell or range of cells, 
          leaving them blank.

Prompts:  After entering /B you are prompted for the cell or cell 
          range. The default, if ENTER is pressed, is to blank the 
          current cell (the one where the cell cursor is located). 

Remarks:  The cell range may be a "block" of cells. For example the 
          range A1:C2 blanks A1, B1, C1, A2, B2 and C2. 

          The cell range may be the word ALL, in which case all the 
          cells in the spreadsheet are blanked. 

          The cell range may also be the word VALUES, in which case 
          all the cells which contain values are blanked, but the 
          cells with text and formulas remain intact.

          /B frees the memory the blanked cells are occupying. This 
          can be useful if you have a large spreadsheet that has 
          filled available memory. 

          /B does not clear protected cells. A protected cell is 
          one which has been marked by the /Format,Protect 
          command as a cell that cannot be changed. To /Blank 
          protected cells, they first must be unprotected using the 
          /Format,Unprotect command. If a range of cells is 
          /Blanked and some of them are protected, the protected 
          ones are ignored (left unchanged). This is actually a 
          handy feature in disguise. By selectively protecting 
          cells on your spreadsheet, you can do a /Blank,ALL and 
          have it clear only cells with unprotected data. For an 
          example of this, see the NOPRINT function example. 
          /Blank,VALUES clears only unprotected values, 
          leaving protected values intact. 

          To exit from /B without blanking any cells, press ESCAPE 


                                                                   33












-







BLANK


          or BACKSPACE. 

Example:  EXAMPLE #1: A number has accidentally been entered into 
          cell D5, and it needs to be removed. If the cell cursor 
          is located at D5, enter:

                            /B (ENTER) 

          If the cursor is not at D5, enter:

                           /B D5 (ENTER)

          EXAMPLE #2: A spreadsheet is being modified to do a 
          slightly different application. The last ten rows of the 
          spreadsheet (rows 25 to 34) are to be deleted. Enter: 
         
                         /B A25:BL34 (ENTER)

























34












-







                                                    CONFIGURE 



                      CONFIGURE Command (/C)


Purpose:  Configures the CALC display, keyboard and printer. The
          width, height, layout, and color of the screen display 
          can be set, the spreadsheet matrix can be changed, and 
          the printer can be selected. Configuration changes can 
          be made temporarily or permanently. 


Prompts:  Enter /C and you will be prompted:

          Video, Layout, Color, Matrix, Keys, Printer, Save

          Enter the first letter of the desired option. The next 
          prompt is one of the following:

          Video
          Type of Display: Mono, CGA, EGA, VGA or Other.
          Press the letter corresponding to the type of display 
          adapter in your computer. If you choose a display type 
          other than the one your computer has, the screen may go 
          blank, or characters may appear fuzzy. If this happens, 
          press <Ctrl-Alt-Del> to reboot your computer. 

          Some of the display types allow more than 25 lines on the 
          screen. In those cases, you are prompted for the number of 
          display lines. 

          For users with custom video boards other than those 
          listed, selecting "Other" tells CALC not to reset the 
          video display each time it starts. Some custom video 
          boards come with a utility program that allows the screen 
          size to be changed to a variety of widths and heights. By 
          running your custom video utility before starting CALC, 
          then starting CALC with "Other" video specified, you can 
          use such special features as 132-column-wide screens. 
         



                                                                   35












-







CONFIGURE 


          Layout
          Select screen layout: DME, DEM, MDE, MED, EDM, EMD.
          DME is an abbreviation for: Display/Message/Entry
          DEM is an abbreviation for: Display/Entry/Message
          MDE is an abbreviation for: Message/Display/Entry
          MED is an abbreviation for: Message/Entry/Display
          EDM is an abbreviation for: Entry/Display/Message
          EMD is an abbreviation for: Entry/Message/Display

          CALC comes configured as "DME"; i.e. the spreadsheet 
          display area is at the top of the screen, the two message 
          lines come below it, and the entry line is at the bottom. 
          Several popular spreadsheet programs use this layout, but 
          others use the "EMD" layout, with the entry line and 
          message lines at the top. (Note: If you are new to 
          CALC, it's best to use DME until you become familiar 
          with it because this manual assumes a setting of DME.)
         
          Color
          Border, Display, Message, Entry, Cursor,
          Protected, 1Bargraph, 2Bargraph, 3Bargraph, Window
          If your computer has a color board and a color monitor, 
          this option allows you to reset the screen colors. Enter 
          the first letter of one of the words above, and you are 
          prompted:

          B to advance background color, F to advance foreground
          color. When you find the colors you want, press ENTER.

          As you press B or F, the colors change on the screen. 
          Keep pressing the keys until you find the colors you 
          like. There are eight background colors, and sixteen 
          foreground colors. Press ENTER, to lock in the color for 
          the current area, and you are prompted to select another 
          area. Press BACKSPACE or ESCAPE to exit.

          Users with monochrome boards may want to experiment with 
          this option too. By rotating "colors" on a monochrome 
          board, inverse video, underlining and brightness can be 
          changed. 


36












-







                                                    CONFIGURE 



          It is possible to make text "disappear" by making the 
          foreground and background color similar. If you have 
          missing data after configuring colors, restore from your 
          master copy of CALC, and start over.

          Matrix
          Enter the number of columns (1 to 255).
          CALC is configured for 64 columns by 256 lines. You 
          can change the dimensions of the spreadsheet workarea, 
          within certain limits. First of all, the total number of 
          cells cannot exceed 16,384. So if you specify 256 columns 
          wide, there will only be 64 lines in the matrix. On the 
          other hand, if you specify only ten columns, the number 
          of lines increase to 1,638. 

          After you enter the number of columns, CALC prompts 
          for the number of lines. The maximum number you may 
          enter has been calculated, and is displayed on the entry 
          line. If you want the maximum, just press ENTER. 

          The matrix size is not saved with each spreadsheet. It is 
          a startup option, which must be specified in a .PRO file, 
          or must be /Configured each time. 

          The Matrix option should only be used when the spreadsheet 
          area is empty. If it is not empty, a warning message is 
          given. You can either continue, and lose the current 
          contents of the spreadsheet area, or ESCAPE, save the 
          spreadsheet, then come back and reconfigure the matrix. 

          Keys
          Which Smart Key to define?
          Smart keys allow a sequence of keystrokes to be assigned 
          to a special key. When the key is pressed, the sequence is 
          sent to CALC as if it had been typed by the operator. 
          For example, if smart key 1 is set up as:

                             /L,EXAMPLE,,/GF 
          


                                                                   37












-







CONFIGURE 


          then whenever Alt-1 is pressed (Hold down Alt key and 
          press the 1 key at the top of the keyboard), the string 
          is sent to CALC. If CALC is awaiting a command 
          at the time, it will load the file named EXAMPLE, then 
          switch to Global Formula mode. 

          Up to twelve smart keys can be set up on the smart key 
          screen. They can later be invoked by holding down the ALT 
          key and pressing one of the keys on the top row of the 
          keyboard: 1-9, 0, - or =. Additional smart keys can be 
          defined for other keys, such as the ten Function keys on 
          the left, using the TRANSLATE x TO yyy option in 
          the .PRO file. TRANSLATE is discussed in the section 
          titled "Customizing CALC". 

          Smart key definitions are not saved with the spreadsheet. 
          To save them, use the /Configure,Save option and put them 
          into a .PRO file. If they are in the .PRO file named 
          CALC.PRO, they are automatically loaded when 
          CALC is started. If they are in a different .PRO file, 
          its name must be entered on the command line when 
          starting CALC. .PRO files are discussed in detail in 
          the section titled "Customizing CALC". 

          Most of CALC's prompts can be terminated with a comma, 
          so long strings of commands can usually be typed into a 
          smart key without requiring special characters. However, 
          if a special character such as a carriage return or 
          backspace must be imbedded in a smart key string, it must 
          be entered in a special format: square brackets enclosing 
          the ASCII value; i.e. carriage return is [13] and 
          backspace is [8]. In an earlier example we used commas to 
          terminate the fields on /LEXAMPLE,, but to terminate 
          the fields with carriage returns instead, the smart key 
          definition is /LEXAMPLE[13][13]. 

          The section titled "Customizing CALC" gives more 
          information on smart key strings with imbedded special 
          characters, and it includes a table of special keys and 
          their equivalent ASCII values. 


38












-







                                                    CONFIGURE 



          Printer
          IBM Graphics, Epson, Proprinter, Okidata, Toshiba, 
          MPI or Comrex.
          This prompt lists a few brands of printers. If your 
          printer appears in the list, or if it is compatible with 
          one in the list, enter the first letter of the printer 
          name, and CALC will be custom configured for it. 
         
          CALC works with almost any printer, so don't despair 
          if yours isn't in the list. Only two things happen when 
          you configure for a specific printer:

               1. the CPI and LPI functions can be used 
                  to change characters per inch within a 
                  spreadsheet; and 

               2. when using the "setup" command while printing, 
                  you can press a single key to change character 
                  spacing, rather than type the printer control 
                  characters. 

          Both of these capabilities can be achieved for any 
          printer by using an only slightly more complex technique. 
          So no features are really "lost" if your printer is not 
          in the list; you just need to define your printer codes 
          in a .PRO file. For more information, see the section 
          titled Customizing CALC. 

          Save
          Enter the name of the .PRO file. The current system
          options will be written to the file. 
          Enter a file name. If the .PRO extension is left off, 
          it will be added. All of the Configuration, Global and 
          Print option settings are saved as they are currently 
          configured. The various options are written to the .PRO 
          file as keywords, which you can later change with a text 
          editor if you want. Press ESCAPE to exit without 
          saving.



                                                                   39












-







CONFIGURE 


          If a file named CALC.PRO exists, it is automatically 
          read when CALC is started. You can specify that a 
          second .PRO file be loaded after CALC.PRO by typing 
          the file name on the command line when starting 
          CALC. For example, if you type CALC BW from DOS, 
          CALC first loads CALC.PRO (if it exists), 
          then loads BW.PRO. 

Remarks:  If you are using CALC on an IBM PC with a standard 
          80-column color monitor, or on an IBM PC with a 
          monochrome board and monitor, CALC does not need 
          to be reconfigured unless you want to change the color or 
          layout of the screen. 

          If you have a computer or video monitor which requires 
          you to type BW or SL on the command line at startup, 
          you are actually telling CALC to read a profile file 
          of the name BW.PRO or SL.PRO. To eliminate typing 
          these codes each time, go to the DOS prompt and type:

                     RENAME BW.PRO CALC.PRO

          and the options will be automatically loaded each time 
          CALC is started. 

          The "Slow" screen refresh must be specified on some 
          brands of computers whose video RAM memory is not 
          compatible with that of the IBM PC. If you try running 
          CALC on your computer and it appears to load, but 
          nothing displays on the screen, try the SL profile,
          which uses standard BIOS calls for video display. 
         
          Some video boards cause excessive "flicker" on the screen 
          in "fast" mode. If this flicker is annoying, specifying 
          SL at startup will eliminate it. However, the trade-off 
          is slower display of data on the screen.
         
          If the height of your display is less than 25 lines, 
          perform the "Getting Started" procedure, then enter /C H 
          followed by the number of lines on your display. 


40












-







                                                    CONFIGURE 



          For more details on customizing and personalizing your 
          version of CALC, see the section titled "Customizing 
          CALC."






































                                                                   41












-







COS



                            COS Function


Purpose:  Computes the trigonometric cosine of a cell or formula 
          and returns the value to the current cell or formula. 
         
         
Format:   COS(3.14159)     Returns -1 
         
          COS(A1)          If A1 = 3.14159, returns -1 
         
          COS(A1*2/B5)     Resolves formula, then computes cosine 
       
  
Remarks:  COS(x) can be entered into a cell, causing the cosine of 
          a number to be computed, and used as the cell value. Or 
          the COS function can be used in a formula, and/or may 
          have a formula as its argument.
           

Example:  Set up a simple spreadsheet which allows a value in 
          radians to be entered, and returns the cosine: 

                         A1:  Radians:
                         A2:  Cosine: 
                         B1:  3.14159
                         B2:  COS(B1)

          When a value is typed into B1, the cosine is displayed in 
          B2. Enter 3.14159 in B1, and -1 is returned in B2. Now 
          change the spreadsheet so degrees can be entered instead 
          of radians:

                         A1:  Degrees:
                         A2:  Cosine: 
                         B1:  180 
                         B2:  COS(B1*3.14159/180)              




42












-







                                                           COUNT



                          COUNT Function


Purpose:  Counts the number of non-empty cells in a range of 
          numbers and returns the resulting count to the current 
          cell or formula.


Format:   COUNT(A1:A20)       Counts a column of numbers

          COUNT(A1:E1)        Counts a row of numbers

          COUNT(A1:D20)       Counts a block of numbers


Remarks:  COUNT(m:n) can be entered into a cell, causing the 
          specified range to be counted, and the count used as the 
          cell value. Or the COUNT function can be used in a 
          formula. 
           
          The coordinate range specified in a COUNT function may 
          be down a column, such as COUNT(A1:A20), it may be 
          across a row, such as COUNT(A1:E1), or it may be a 
          block of cells (designated by the upper-left and lower-
          right coordinates), such as COUNT(A1:D20).

          If the specified range of cells contains any empty cells, 
          they are ignored by COUNT. If the range contains any 
          cells with text, ERROR is returned. 


Example:  Column B has a string of numbers from B7 to B26 which 
          are to be counted. The result is to be placed in B27. 
          At B27 enter:

                            COUNT(B7:B26)

          After recalculation, B27 contains the count.



                                                                   43













```
{% endraw %}

## CALC2.DOC

{% raw %}
```
-







CPI


                             CPI Function


Purpose:  Changes the character spacing on the printer to 10, 12 or 
          17 characters per inch. 

Format:   CPI(10)             Changes to 10 characters per inch

          CPI(12)             Changes to 12 characters per inch

          CPI(17)             Changes to 17 characters per inch

Remarks:  When CPI(n) is entered into a cell, it displays as 
          [CPI(n)] on the screen. When the cell is printed, control 
          characters are sent to the printer which change the 
          character spacing, then the cell is printed as if it were 
          empty. CPI can be an operand in an IF function, but 
          cannot be used in a formula. 
           
          If your printer is not an IBM, Epson, or Epson 
          compatible, then CALC must be configured for your 
          printer before using the CPI function. See the section 
          titled "Customizing CALC" for more information.

          Some printers move the carriage to the left of the page 
          when characters per inch are changed, so different 
          character sizes cannot be printed on the same line. If 
          your printer does this, it may take some experimenting 
          with the CPI function and the NOLF (no line feed) 
          functions to print two character widths on the same line. 

Example:  Monthly sales detail is entered into CALC, and it is a 
          wide report which requires compressed print to fit on one 
          page. The last page, however, is a sales summary, and is 
          to be printed ten characters per inch. In cell A1 (or 
          anywhere above the first line) type CPI(17) (ENTER) and 
          [CPI(17)] displays on the screen. Enter the monthly
          sales detail to be printed in compressed mode.  

          Let's say the sales detail ends on line 48. Go to A49 


44












-







                                                                CPI


          and enter PAGE then go to B49 and enter CPI(10). Both of 
          these functions appear on the screen enclosed in [square 
          brackets]. The PAGE function causes a form feed to be 
          sent to the printer, and the CPI(10) function resets the 
          characters per inch back to ten. 





































                                                                   45












-







DELETE 



                        DELETE Command (/D)


Purpose:  Deletes a row or column from the spreadsheet. 


Prompts:  Enter /D and you are asked:

                       Delete Row or Column?

          to which you must reply either R or C. The next prompt 
          is either:

          Enter row number to be deleted, or a range of rows.
                                or
          Enter column letter to be deleted, or a range of columns.

          The default, if ENTER is pressed, is to use the row 
          number or column letter of the current cell (the one 
          where the cell cursor is currently located).         


Remarks:  If a column is deleted, all the columns to the right of 
          it shift left. Likewise, if a row is deleted, all the 
          rows below it shift up to fill the blank space. Any 
          formulas referring to the shifted cells have their 
          coordinates adjusted so they are still pointing at the 
          same data. 
         
          /Delete frees the memory the deleted cells are occupying. 
          This can be useful if you have a large spreadsheet that 
          has filled available memory. 

          When a column is deleted, the column widths are adjusted 
          to the left along with the data. 

          To exit from /D without deleting any rows or columns, 
          press ESCAPE or BACKSPACE. 
         


46












-







                                                         DELETE 


          Another way to delete a row is to move the cell cursor to 
          the row to be deleted and press CONTROL-Y.  
          

Example:  A spreadsheet lists all customers and their aged accounts 
          receivable. Row 22 has a former customer who can be 
          deleted. To delete the row, either move the cursor to row 
          22 and enter:
         
                              /D R (ENTER)
         
          or if you are not at row 22, enter:

                             /D R 22 (ENTER)

          Row 22 disappears, and the data that was in row 23 
          moves to 22, 24 moves to 23, and so forth. 

























                                                                   47












-







EDIT 



                         EDIT Command (/E)


Purpose:  Displays the contents of a cell on the entry line, so it 
          does not have to be re-typed. 


Prompts:  Enter /E and you will be prompted for the cell to be 
          edited. The default, if ENTER is pressed, is to edit the 
          contents of the current cell (the one where the cell 
          cursor is currently located). 


Remarks:  The contents of the specified cell are displayed on the 
          entry line, and the cursor is positioned at the first 
          character. By moving the cursor to the right, using the 
          tab key, changes can be made to any character in the 
          cell. When all the editing changes have been made, press 
          ENTER to post the edited data to the new cell. 

          Characters on the entry line can be deleted using the 
          DELETE key. Insert mode can be toggled on and off using 
          the INSERT key. To erase from the cursor to the end of 
          the field, use the CONTROL-T key. When editing a 
          formula, pressing the space bar erases from the cursor to 
          end-of-line. 

          To exit from /E without editing any cell, press ESCAPE 
          or BACKSPACE. 


Example:  A lengthy heading has been typed into cell A5. An 
          identical heading needs to go into A40. Move the cursor 
          to A40 and enter:

                           /E A5 (ENTER)

          The heading appears on the entry line. Since it is to be 
          copied identically, just press ENTER a second time to 


48












-







                                                              EDIT 


          place the heading in A40. If changes had been necessary 
          to the heading, the backspace or tab key could have been 
          used to move through the entry, and corrections made as 
          required.






































                                                                   49












-







EXP



                             EXP Function


Purpose:  Computes the mathematical number e raised to a specified 
          power. e is the base for natural logarithms. Returns the 
          resulting value to the current cell or formula.


Format:   EXP(1)              Returns e, which is 2.718282

          EXP(A1)             Returns e raised to the value in A1.

          EXP(A1*2/A5)        Resolves the formula, then returns e
                              raised to the resolved value.


Remarks:  EXP(x) can be entered into a cell, causing the specified 
          computation, or the EXP function can be used in a 
          formula. 
           

Example:  Calculate e raised to the 4th power. Put the result in 
          B27. At B27 enter:

                              EXP(4)

          After recalculation, B27 contains e to the 4th power, 
          or 54.59815.













50












-







                                                                FIX



                             FIX Function


Purpose:  Converts a number or formula to an integer, and returns 
          the resulting value to the current cell or formula. Does 
          not return the next lower number when negative, as does 
          the INT function.


Format:   FIX(-2.5)           Returns -2  

          FIX(A1)             If A1 contains -2.5, returns -2. 

          FIX(A1*2/A5)        Resolves the formula, then returns the
                              fixed decimal portion of the result 


Remarks:  FIX(x) can be entered into a cell, or the FIX function 
          can be used in a formula. 
           
          All digits to the right of the decimal are removed, and 
          the ones to the left of the decimal become the returned 
          value. This differs from the INT function, which returns 
          the next lower negative number.


Example:  Enter the following formulas into the specified cells. 
          The resulting values are shown: 

                   Cell        Formula         Result

                    A1:       FIX(23.999)         23  
                    A2:       FIX(-1.567)         -1
                    A3:       INT(23.999)         23
                    A4:       INT(-1.567)         -2






                                                                   51












-







FORMAT 



                      FORMAT Command (/F)


Purpose:  Sets the formatting options for a cell, a range of cells 
          or the entire spreadsheet.


Prompts:  Enter /F and you will be prompted: 

                  Enter range to be formatted (or ALL).

          Enter a single cell, a range of cells (which may be a 
          block), or ALL. To format only the current cell, press 
          ENTER or comma. The next prompt is: 

          Decimals  Width      Justify  Commas     $     (     %
          Protect   Unprotect  Hide     Bargraph   Zero-blank
 
          Enter D, W, J, C, $, (, %, P, U, H, B or Z to indicate 
          which type of formatting you want to do. The next prompt 
          depends on which option you select: 

          Decimals
          Number of decimal places (0 to 12), Floating, Scientific.
          The number of places to the right of the decimal can be 
          changed using this command. This number of decimals is 
          used on the screen display, on printed output, and in 
          computations. 

          "Floating" works like the F setting on a calculator. All 
          significant decimals to the right of the decimal are used 
          in computations. If the column is wide enough, all 
          significant decimals are displayed and printed. If the 
          column is not wide enough, CALC drops enough decimals 
          on the right so the number fits in the column. For 
          example, if the formula 2000/3 is entered in a column 
          that is ten characters wide, the number 666.666667 is 
          displayed. If the column is narrowed to five characters, 
          the number 666.7 is displayed. Reducing the column width 


52












-







                                                        FORMAT 


          to four or three characters displays the number as 667 
          (with no decimal point). If the column width is narrowed 
          to two, the << symbols print, indicating the number will 
          not fit in the cell. 

          "Scientific" format displays the number in exponential 
          form, similar to scientific notation. The mantissa and 
          exponent are separated by the letter E. For example, 
          3E-5 is the same as .00003 and -3E+10 is the same as 
          -30,000,000,000. 

          Width
          Enter column width (0 to 75).
          The width of a column or range of columns can be changed 
          using this command. A column width of zero causes the 
          column to be "hidden", allowing data to be stored without 
          being seen.

          Justify
          Right-justify, Left-justify or Center.
          Specify "L" to have numbers shifted to the left side of 
          the column. Specify "R" to have text shifted to the right 
          side of the column. "C" centers the cell's contents. 
          CALC defaults to right-justify for numbers and left-
          justify for text unless overridden by this command.

          Commas
          Commas between thousands (Y or N).
          To have 12345.00 print as 12,345.00 specify "Y" to this 
          prompt. To remove the commas from a number, specify 
          "N". For example, if the number is a year such as 1985 
          you would not want it to print as 1,985.

          $
          Print leading dollar sign ($) on numbers (Y or N).
          If you specify Y, a dollar sign will be printed 
          immediately to the left of the most significant digit. 





                                                                   53












-







FORMAT 


          (
          Enclose negative numbers in parentheses (Y or N).
          If Y is specified, a negative number will have 
          parentheses around it, rather than a minus sign. To 
          switch back to minus sign, specify N. Note: When this 
          format option is specified, positive numbers have one 
          blank space to the right. This is necessary so a column 
          of positive and negative numbers line up properly. 

          %
          Print a percent sign (%) to the right of numbers (Y or N).
          If Y is specified, a percent sign is printed on the right 
          of the number. This option does not affect computation. 

          Protect
          F = protect formulas, V = protect values, T = protect text,
          N = protect non-blank cells, A = protect all cells in range
          When a cell is protected, nothing can be entered into it. 
          This keeps formulas and headings from accidentally being 
          destroyed by overtyping. When a cell is protected, the 
          word PROTECTED appears on the message line when the 
          cursor moves to that cell. Also, if you have configured 
          CALC accordingly, protected fields can be displayed 
          in a different color than the display area (or in inverse 
          video on a monochrome monitor). Once a cell is protected, 
          it can be unprotected using the Unprotect format option, 
          discussed next. 

          From the message, you can see there are several options 
          for protecting ranges of cells. The Protect Option has no 
          global setting. All cells are unprotected at startup, and 
          if you protect ALL, every cell in the spreadsheet is 
          individually protected. 

          Unprotect
          F=unprotect formulas, V=unprotect values, T=unprotect text,
          N=unprotect non-blank cells, A=unprotect all cells in range
          When a cell has been protected, nothing can be entered 
          into it. To remove the protection so the cell's contents 
          can be changed, use the Unprotect option. 


54












-







                                                        FORMAT 


          From the message, you can see there are several options 
          for unprotecting ranges of cells. The Unprotect Option 
          has no global setting. All cells are unprotected at 
          startup. 

          Hide
          P=hide cells on printer only, S=hide cells on screen only,
          B=hide cells on printer and screen, N=Don't hide cells.
          A hidden cell is one which has something in it, but its 
          contents are not displayed on reports and/or the screen. 
          Sometimes it is useful to hide some cells such as those 
          containing lookup tables. Sometimes there is confidential 
          data used in calculations which should not be included on 
          hard copy reports. Once a cell is hidden, you can still 
          see its contents by either moving the cursor to the cell 
          and looking at the message line, or by using the /GF 
          command to display formulas on the screen. /GF ignores 
          the hidden cell flag. 

          There are several options for hiding/unhiding ranges of 
          cells. The Hide Option has no global setting. All cells 
          are unhidden at startup. 

          Bargraph
          Print numbers in bar graph format 1, 2 or 3 (N=no graph).
          If a cell contains a value or formula, the result will be 
          displayed as a string of bar graph characters. By 
          entering a 1, 2 or 3, up to three different bar graph 
          patterns/colors can be displayed. 

          If the bar graph exceeds the width of the cell, the last 
          character displays a > character, indicating the bar 
          continues beyond the column. If the bar graph is in a 
          right-justified cell, the bar graph is right-justified, 
          and the > sign becomes a < sign on the left.

          When a bar graph cell is printed, one of three characters 
          is printed. CALC's default characters for printed bar 
          graphs are ****, //// and ]]]], which are not nearly as 
          attractive as the patterns on the screen. If your printer 


                                                                   55












-







FORMAT 


          has a graphics character set, it is possible to configure 
          CALC to print the same patterns as appear on the 
          screen, or others if you prefer. See the section titled 
          Customizing CALC for information on changing printed 
          bar graph characters, screen bar graph characters and 
          screen bar graph colors. 

          Zero-blank
          Display zeros as blanks (spaces) (Y or N).
          If this option has been set for a cell, and the cell 
          contains a value or formula which resolves to zero, the 
          cell will appear empty. At startup, the default is to 
          display zeros (0, .0, .00, etc.) in all cells. CALC 
          has always had a global option to not display zeros. The 
          /G,Z command still exists, and is effectively the same as 
          /F,ALL,Z. 

Remarks:  Each of the formatting options which have responses of 
          "Y" or "N" will also accept a response of ENTER. If you 
          press the ENTER key instead of Y or N, the formatting 
          options for the specified cell(s) clear the format 
          option, so the cell's format reverts to the default 
          (global) setting.

          After responding to one of the formatting options, 
          CALC repeats the prior prompt, allowing you to specify 
          more than one formatting option for a cell or range.

          A cell can be formatted before it has data put in it, and 
          the format options take effect as soon as data is put in 
          it. However, empty cells' formats are not saved when a 
          spreadsheet is /Saved. 

          When individual cells are formatted, two characters of 
          memory are used per cell. But when ALL is specified, a 
          "global default" code is changed in CALC. Specifying 
          ALL uses none of the spreadsheet memory. Specifying a 
          range of cells causes two bytes of memory to be used for 




56












-







                                                        FORMAT 


          every cell in the range. So for example, this statement:
                         
                            /F A1:Z99,D,3

          uses 5K of memory, while this statement:

                              /F ALL,D,3

          uses no memory at all. So on large spreadsheets it is a 
          good idea to determine the most common default values 
          first, and set them with the "ALL" global format option.  
          Then the cells that vary from the default can be changed 
          individually. This not only saves memory, it usually 
          saves typing as well.

          The global format defaults are as follows:  

                  Decimals:    2
                  Width:       11 (all columns)
                  Justify:     Left for text, Right for numbers
                  Commas:      Yes
                  Protected:   No
                  Bargraph:    No
                  Hidden:      No
                  Zero-blank:  No
                  $, (, %:     No
                  
          These global defaults can be permanently changed by 
          specifying ALL, then using the /Configure,Save command 
          to permanently save them in CALC.PRO. See the section 
          titled Customizing CALC for more information.

Example:  EXAMPLE #1: A series of year numbers have been entered 
          into column B, starting with 1983. The problem is that 
          the standard defaults cause the years to print as 
          1,983.00 instead of 1983. Use the /F command first to 
          turn off the decimals, then to turn off the commas: 

                 First enter:   /F B1:B50,D,0   
                 then enter:              C,N 


                                                                   57












-







FORMAT 


          The years will now print as four-digit numbers without 
          commas and decimals. To also left-justify the years, and 
          their heading which is a text field: "Years", within 
          column B, enter:

                            /F B1:B50,J,L


          EXAMPLE #2: We want to prepare a spreadsheet to produce 
          the following report:

                  Period   ------- Sales -------
                    1/85   $50,000  *****
                    2/85   $59,000  ******
                    3/85   $42,400  ****
                    4/85   $92,800  *********
                    5/85  $121,000  ************

          Begin by entering the numbers and text. This is what they 
          look like before formatting:

                  A         B         C         D         E     
           1 Period                         ------- Sales -------
           2      1.00 /              85.00  50,000.00       5.00
           3      2.00 /              85.00  59,000.00       6.00
           4      3.00 /              85.00  42,400.00       4.00
           5      4.00 /              85.00  92,800.00       9.00
           6      5.00 /              85.00 121,000.00      12.00

          Note that we could have entered the month/year as text 
          fields. But by making them numeric we can use the 
          Replicate command to enter them, saving considerable 
          typing on large spreadsheets. (See /Replicate for an 
          example of how to use it on columns A and B above.) To 
          get the formatting right on the spreadsheet above, start 
          by specifying a global default of no decimals:

                         /F ALL D 0 (ENTER) 




58












-







                                                        FORMAT 


          Next, change the column widths. Columns A and C need to 
          be two characters wide. Column B needs to be one 
          character wide. Column D, no change, and column E should 
          be wide enough to handle a lengthy graph, say forty 
          characters:

                   /F A1:C20 W 2 (ENTER) (ENTER)
                   /F B1:B20 W 1 (ENTER) (ENTER)
                   /F E1:E20 W 40 (ENTER)

          Next specify Bargraph format for column E. Notice that 
          you didn't hit ENTER twice on the previous command, so 
          you need not retype /F E1:E20. Just type: 

                      B 1 Y (ENTER) (ENTER)

          And finally, put floating dollar signs on column D: 

                   /F D1:D20 $ Y (ENTER) (ENTER)

          On the screen, the bargraphs do not appear as asterisks; 
          they are shaded bars. When printed, they will appear as 
          asterisks. If your printer has graphic characters, it is 
          possible to print special characters like the ones on the 
          screen. See the section titled Customizing CALC
          for more information.

          One suggestion on the graphic display in column E: use 
          formulas based on column D. For example, in cell E2, 
          instead of entering "5", enter "D2/10000". In that way, 
          if column D's figures are changed, the graphs are 
          immediately updated. Also, it makes the graph column easy 
          to replicate. 









                                                                   59












-







GLOBAL 



                        GLOBAL Command (/G)


Purpose:  Sets various system options of CALC, including border 
          display, row/column calculation sequence, automatic 
          recalculation, and printing zeros as blanks.


Prompts:  Enter /G and you will be prompted: 

                   Border, Row, Column, Manual, Auto, 
                   Formula, Zero-blank, Smart-cursor

          To select a global option, enter the first letter of the 
          option. It is not necessary to press ENTER. 


Remarks:  Border
          The BORDER option turns the screen borders on and off. 
          If your screen has borders on the top and left edge, use 
          this option to turn them off. To turn them back on, use 
          this option a second time. Note: this option has no 
          effect on printed reports. There is a special option in 
          the /P command for printing borders.

          Row and Column
          The ROW and COLUMN options indicate whether calculation 
          should proceed row-by-row, or column-by-column. Each time 
          a calculation is done, you can watch the cursor "ripple" 
          down the screen, recalculating each of the formulas in 
          your spreadsheet. In many cases, a formula will refer to 
          a cell that contains another formula. When this happens, 
          the formulas must be evaluated in the proper sequence, or 
          you will not get the answer you were expecting. Most 
          spreadsheets are designed for row-by-row calculation, so 
          ROW is the default at startup time. If you design a 
          spreadsheet that requires calculation to be done down the 
          columns instead of across the rows, specify the COLUMN 
          option. 


60












-







                                                         GLOBAL 



          If your spreadsheet has forward references (references to 
          formulas which have not been recalculated yet), and 
          neither ROW or COLUMN will work properly, you may 
          need to use iterative calculation. See the ITERATIONS 
          option in the section titled "Customizing CALC" 
          for more information. 

          Warning: Be careful to not create spreadsheets with 
          "circular references": two formulas refer to each other, 
          or "A" refers to "B" refers to "C" refers to "A". When 
          you suspect a circular reference, press ! to recalculate. 
          If one or more of the numbers on your spreadsheet keep 
          changing each time you recalculate, your spreadsheet 
          probably has a circular reference, and may need to be 
          restructured to eliminate the problem. 

          Manual and Auto
          The MANUAL and AUTO options tell CALC whether 
          to automatically recalculate each time a number or 
          formula is entered, or whether to wait and not calculate 
          until the ! is pressed. At startup, the AUTO option is 
          set. As numbers and formulas are entered, the message 
          "CALCULATING" will appear, and the cursor will "ripple" 
          down the screen each time before the next field can be 
          entered. As the spreadsheet gets larger, this pause can 
          become annoying. To turn off automatic recalculation, 
          select the MANUAL option.

          Formula
          The FORMULA option tells CALC to display cells' 
          contents on the screen instead of the cells' values. For 
          example, if cell A5 contains A1+A1 and displays 12.34 
          on the screen, /GF causes A1+A1 to be displayed on the 
          screen, in the cell. Typing /GF a second time returns the 
          display to its normal mode. 

          In Formula mode, text is displayed left-justified in its 
          cell, with a leading quotation mark. Values and formulas 
          are displayed exactly as they were entered. Any text, 


                                                                   61












-







GLOBAL 


          formulas or values which do not fit in the column overlap 
          into adjacent empty columns on the right. 

          In Formula mode, Protected fields have a leading "P" on 
          the left in inverse video. Hidden fields' contents are 
          not hidden in Formula mode. 

          Zero-Blank
          The ZERO-BLANK option tells CALC to display all 
          cells whose contents are zero as blank cells. At startup, 
          the default is to display zeros (0, .0, .00, etc.) in the 
          cell. Select this option to display them as blanks. To 
          restore the original default of displaying zeros as 0, 
          .0, etc. use /Global, Zero-blank a second time. See also 
          /Format, Zero-blank.

          Cursor
          The Smart-cursor option changes the way the ENTER key 
          works. If the Smart Cursor has been turned on, 
          CALC "remembers" the direction the arrow key moved 
          previously. When the ENTER key is pressed, the cell 
          cursor automatically moves in the remembered direction. 

          When the Smart Cursor is turned on, an arrow appears in 
          the lower left corner of the screen, indicating the 
          direction the cursor will move next. When ENTER is 
          pressed, the cell cursor moves in that direction. 

          Accountants and others who are accustomed to ten-key 
          entry of columns of numbers will find Smart Cursor 
          especially useful. To enter a column of numbers with 
          Smart Cursor, enter the first number and move the cursor 
          downward. Then type /GS to turn on the Smart Cursor. 
          A tiny down-arrow appears in the lower-left corner of the 
          screen. Put your ten-key pad in numeric lock, enter the 
          next number on it ten-key style, and then press the ENTER 
          key with your forefinger. The number is entered and the 
          cursor automatically advances downward. For experienced 
          ten-key operators, this is a very fast way to enter 
          numbers. 


62












-







                                                         GLOBAL 




Example:  A spreadsheet is getting large, and every time a number 
          is typed in, a recalculation is done which takes several 
          seconds to complete. Turn off automatic recalculation 
          with this command:

                                /G M

          Later when recalculation is desired, you can type ! to 
          force recalculation. If you get to the point of fine-           
          tuning the spreadsheet and would like to have 
          recalculation turned back on, enter:

                                /G A



























                                                                   63












-







IF



                         IF Function


Purpose:  Evaluates an expression as true or false, and returns the 
          "then" argument if true, or the "else" argument if false. 


Format:   IF(A1=5,1,0)        If A1 contains a 5, a 1 is returned. 
                              Otherwise a 0 is returned. 

          IF(A1>B5,D3,99)     If the number in A1 is greater than 
                              the number in B5, the contents of D3 
                              are returned. Otherwise the number
                              99 is returned.

          Alternate form:

          IF A1=5 THEN 1 ELSE 0  (Same as first example above) 

          IF A1 > B5 THEN D3 ELSE 99 (Same as second example)


        
Remarks:  The three operands of the IF function can best be 
          described as follows:

               IF(this expression is true,then return this
                  expression,otherwise return this expression)

          If the first operand contains two expressions separated 
          by a relational operator, the expressions are resolved, 
          then compared. If the resulting comparison is true, the 
          second operand is used. If the comparison is false, the 








64












-







                                                                  IF


          third operand is used. Valid relational operators are:

          Operator         Meaning                Example

             =          Equal                    A1 = 0 
          <> or ><      Not equal                A1 <> B1
             <          Less than                A1 < B1+3
             >          Greater than             A1 > .0987
          <= or =<      Less than or equal to    .987 <= A1
          >= or =>      Greater than or          B1*3 >= 5-A1
                        equal to 


          If the first operand contains no relational operator, it 
          is resolved and compared to zero. If it is not zero, the 
          second operand is used. If it is zero, the third operand 
          is used. For example, enter IF(5,3,2) in a cell, and the 
          number 3 will appear, since 5 is non-zero. 

          Multiple comparisons may be done in the first operand, 
          using Boolean (logical) operators. For example, if a 
          number being tested can be either 1 or 2, the IF function 
          could be written like this:

                  IF A1=1 OR A1=2 THEN ... ELSE ...


          The second and third operands of the IF function may be 
          any valid value, cell reference or formula. They may not 
          be text. However, text may be displayed by putting it in 
          another cell and referring to that cell in an IF operand. 
          For example, if A5 contains the text "Out of stock", and 
          at A8 we entered IF(1=1,A5) then cell A8 would display 
          the text "Out of stock". Another example of this feature 
          is shown below, in the example section.

          There is an alternate form of the IF function which some 
          people find easier to read. The parentheses are optional, 
          and the words THEN and ELSE can be used instead of 
          commas. THEN and ELSE must have at least one space to 


                                                                   65












-







IF


          the left and right. Spaces can be used freely in any of 
          the operands, except that cell references cannot have 
          spaces in them; i.e. A11 can't be A 11. For example: 

                      IF A1 = 5 THEN 1 ELSE 0
                      IF A1 > B5 THEN D3 

          The IF function may be used in formulas. For example, 
          this is a valid expression: 

                          1000+A1*IF(B1,C1,0)

          The IF function may also be nested. For example, this is 
          a valid expression:

                       IF(A1>0,B5,IF(A1=0,B6,B7))

          The expression tests A1 to see if it is greater than 
          zero. If it is, the contents of B5 are returned. But if 
          the number in A1 is not greater than zero, another test 
          is done. Is it equal to zero? If so, return B6, otherwise 
          return B7. 

          An IF statement may be nested in the second and third 
          operands, but may not appear in the first operand of 
          another IF statement. The nesting of IF statements can be 
          as many levels as you want, but the real restriction is 
          the size of the formula that can be entered (currently 74 
          characters). By breaking them up into multiple cells that 
          refer to one another, very complex relational expressions 
          can be generated. Keep in mind, however, that evaluating 
          complex expressions can slow down recalculation 
          considerably. 


Example:  EXAMPLE #1: A salesman's commission is 12% of gross 
          sales, but the salesman is always guaranteed to make at 
          least a minimum of $1500. Gross sales are in cell B5. 
          Compute his commission in C5, using the IF function. Move 



66












-







                                                                  IF


          the cursor to C5, and enter:

                    IF(B5*.12>1500,B5*.12,1500)

          If gross sales times .12 are greater than $1500, pay the 
          salesman that amount. But if gross sales times .12 are 
          less than or equal to $1500, pay him a flat $1500. 

          If the spreadsheet listed several salesmen down the 
          columns, this formula could be copied to all of them, 
          using the /Replicate command. 

          EXAMPLE #2: A spreadsheet contains the payroll for an 
          employee. The pay periods are numbered 1 through 24, in 
          cells A3 through A26. The columns look like this:

                         A        B       C       D      
                   1    Pay     Gross    YTD             
                   2   Period   Wage    Gross    FICA    
                                       
          The employee's gross pay for each period is in column B. 
          Year-to-date gross pay is in column C, which is simply 
          the running total of column B. FICA for each period is in 
          column D. 

          The FICA computation can normally be done with a simple 
          multiplication: gross wage times .067. But if the 
          employee makes more than $37,800 his FICA deduction 
          should stop. Assume that all the other numbers and 
          formulas have been filled in for the 24 pay periods, and 
          use the IF function to compute FICA in D3 through D26. In 
          D3, put the following formula:

          IF(C3<37800,B3,IF(C3-B3>37800,0,37800-C3+B3))*.067

          The formula says: If YTD gross wage is less than 37800, 
          then use the current gross wage, times .067. But if last 
          period's YTD gross (C3-B3) was over 37800, then the 
          ceiling has been reached, so FICA is zero. Finally, if we 
          are in the period where only part of the wage is subject 


                                                                   67












-







IF


          to FICA, compute that amount (37800-C3+B3) and multiply 
          it times .067. 

          Now use the /Replicate command to copy D3 to cells D4 
          through D26. When it asks Adjust - Y/N? (or A), reply A. 


          EXAMPLE #3: A spreadsheet contains student names in A5 
          through A30, and test scores in B5 through B30. We want 
          to show each student's grade in column C, using the 
          following table: 

                    Score of 90 to 100 - grade is A
                    Score of 80 to  89 -          B
                    Score of 55 to  79 -          C
                    Score of 40 to  54 -          D
                    Score of  0 to  39 -          F

          Out to the right of the spreadsheet, in cells G1 to G5, 
          enter the text data: 

                              G1:  A
                              G2:  B
                              G3:  C             
                              G4:  D
                              G5:  F

          At cell C5, enter this expression:

          IF(B5>89,G1,IF(B5>79,G2,IF(B5>54,G3,IF(B5>39,G4,G5))))

          Then use the /Replicate command to copy the cell to C6 
          through C30. When /R asks Adjust - Y/N? (or A) reply 
          Y to the cells in column B, and N to the cells in column 
          G, which are constant data.

          The table in column G can be hidden from view on a 
          printed report or on the screen by setting the column 
          width to zero, or by using the /Format, Hide command.



68












-







                                                          INSERT



                        INSERT Command (/I)

Purpose:  Inserts a row or column in the spreadsheet. 

Prompts:  Enter /I and you will be asked:
         
                         Insert Row or Column?
         
          to which you reply either R or C. The next prompt is:
         
          Enter row number. New row will be inserted above it.
                                or
          Enter Column letter. New column will be inserted to left.
                  
          The default, if ENTER is pressed, is to use the row 
          number or column letter of the current cell (the one 
          where the cell cursor is currently located).  

          Finally, you are asked: 

          How many new rows (columns) are to be inserted?

          If you press ENTER, only one row or column is inserted. 
          If you enter a larger number, such as 15, then fifteen 
          blank rows or columns are inserted.


Remarks:           When columns are inserted, all the columns to the right of 
          them shift right. Likewise, when a row is inserted, all 
          the rows below them shift down to make room. Any formulas 
          referring to the shifted cells have their coordinates 
          adjusted so they point at the same data.

          When a column is inserted, the column widths are shifted 
          to the right with their data. The new column retains the 
          same column width it originally had. 


          Another way to insert a row is to move the cell cursor           


                                                                   69











-







INSERT


          one row below where the new row is desired and press           
          CONTROL-N.

Example:  A spreadsheet lists all customers and their aged accounts 
          receivable. A new customer needs to be added between rows 
          21 and 22. To insert the row, either move the cursor to 
          row 22 and enter:

                             /I R (ENTER)

          or if you are not at row 22, enter:
         
                            /I R 22 (ENTER)
         
          Row 22 becomes blank, and the data that was on row 22 
          moves to 23, 23 moves to 24, etc. 


























70












-







                                                                INT



                             INT Function


Purpose:  Converts a number or formula to an integer, and returns 
          the resulting value to the current cell or formula. 
          Returns the next lower number when negative. (See also 
          FIX function.)
         
         
Format:   INT(5.1)          Returns 5   

          INT(A1)           If A1 contains -2.5, returns -3 

          INT(A1*2/A5)      Resolves the formula, then returns the 
                            fixed decimal portion of the result 


Remarks:  INT(x) can be entered into a cell, or the INT function 
          can be used in a formula. 
           
          All digits to the right of the decimal are removed. If 
          the number is negative, INT returns the next lower
          negative number. This differs from the FIX function, 
          which returns the integer portion of a number, regardless 
          of sign. 


Example:  Enter the following formulas into the specified cells. 
          The resulting values are shown: 


                 Cell       Formula         Result

                  A1:      INT(23.999)        23
                  A2:      INT(-1.567)        -2
                  A3:      FIX(23.999)        23
                  A4:      FIX(-1.567)        -1   




                                                                   71












-







KEYWORD



                            KEYWORD Function


Purpose:  Displays date, time and page number information. The 
          format is user-defined. 
         
Format:   KEYWORD(keywords)                              

          KEYWORD(DATE)       Displays today's date in the cell 
                              Example: October 9, 1985

          KEYWORD(TIME)       Displays the current time of day in 
                              the cell:  8:30:10 PM 

          KEYWORD(DA-MO-YR  HO:MI  page #)

                              Displays the day number, month number 
                              and year separated by dashes, then 
                              the hour and minute separated by a 
                              colon, then the word "page" followed 
                              by the currently printing page 
                              number. On the screen it looks like: 
                              9-10-85  20:30  page 1

Remarks:  KEYWORD can be entered into a cell with any length of 
          keyword argument enclosed in parentheses. KEYWORD 
          cannot be used in an IF statement or formula.            

          The text string enclosed in parentheses is scanned for 
          several valid keywords (listed below) and substitutions 
          are made. Characters which are not keywords are left in 
          the string. In the example above, the keywords used are 
          DA, MO, YR, HO, MI and #. The dashes, colon, spaces, 
          and the word "page" are not keywords, so they remain 
          where they are in the text string.

          The keyword function is handled internally as a formula, 
          but its contents are displayed as text. Text is left-
          justified unless overridden by /Format. Text will overlap 


72











-







                                                      KEYWORD


          into an adjacent empty cell. 

          The date and time displayed are MSDOS system date and 
          time. If your computer does not have a battery backup 
          clock/calendar, you will need to enter the system date 
          and time using the DOS commands DATE and TIME each 
          time you turn on your computer. 

Keyword    Sample Result          Explanation

DATE or    May 9, 1985  Month name, day number and year number.
TODAY                   Same as KEYWORD(Month DA, YEAR)

TIME       8:30:10 PM   Current hour, minute and second. The time 
                        is updated each time a recalculation is 
                        done, or when the cursor moves to the cell. 
                    
Month      June         Current month name 
                    
MONTH      JUNE         Current month name, all capital letters
                    
Mon        Jun          First three letters of month name 
                    
MON        JUN          First three letters of month name, all caps
                    
MO         9            Month number. If less than 10, only one digit
                    
MZ         09           Month number. If less than 10, leading zero.

DA         3            Day number. If less than 10, only one digit

DZ         03           Day number. If less than 10, leading zero.

YEAR       1985         Four digit year number.

YE         85           Two digit year number. YR and yr also valid.

HO         8            Current hour. No leading zero. Displayed in 
                        military time if no AM/PM keyword is in 
                        the string (see below). If AM/PM appears, 


                                                                   73











-







KEYWORD


                        display will be twelve-hour clock, and the 
                        AM/PM string will be changed accordingly.

HZ         08           Current hour. Same as HO, but if less than 
                        ten, leading zero is printed. 

MI         30           Current minute. Two digits. 

SE         10           Current second. Two digits.

AM, PM     AM           Variants: AM PM am pm A.M. P.M. a.m. p.m.  
                        If one of these strings appear, time is 
                        displayed in twelve-hour format.

#          1            When printing, displays current page number. 



























74












-







                                                             LOAD



                          LOAD Command (/L)


Purpose:  Loads a spreadsheet file into memory so it can be altered 
          or printed. /Load can also be used to read DIF files, 
          ASCII Mail-merge files, File Express databases, or PC-File 
          databases. There is also a Consolidate option, which 
          allows spreadsheets with the same format to be 
          consolidated. 


Prompts:  Enter /L. The first prompt is:

                  Enter the drive and path (optional).

          If the file you are loading is in the default drive and 
          path, press ENTER. Otherwise, enter any valid drive and 
          path, then press ENTER. There is a brief pause as the
          directory is read and sorted, then a window appears 
          listing all the files with an extension of CAL. The 
          second prompt is displayed:

                         Enter the file name.

          At this point, you can either enter then name of a file or 
          you can used the down arrow and up arrow to select one of 
          the files in the window. If you enter a file name, CALC 
          loads that file. The file must be one of the following:

          * A CALC spreadsheet file created with the /Save 
            command

          * A DIF format file (data interchange format) with an 
            extension of .DIF

          * A sequential ASCII file with fields comma-delimited, 
            text in quotation marks, records ending with carriage 
            return/line feed, and a file extension of .WS
          * A File Express or PC-File database. Specify the database 


                                                                   75












-







LOAD


            name with an extension of .HDR (the header file for the 
            database)

          The file name can be any valid MS-DOS file name; i.e. 
          eight characters or less, optional extension, optional 
          drive designation. DIF files must have an extension of 
          .DIF; comma-delimited ASCII files must have an extension 
          of .WS; databases must have an extension of .HDR. If the 
          file name has no extension, the default extension of .CAL 
          is added automatically. To load a file that has no exten-
          sion, enter the file name with a period and no extension.

          Some examples of valid file names are:
         
               LOAN.CAL            CALC file  
               TEST.DIF            DIF format file
               ADDRESS.WS          ASCII comma-delimited file
               CUSTOMER.HDR        File Express database


          Spreadsheet files
          If the file being loaded is a CALC spreadsheet file, 
          the next prompt is:

                    All, Part or Consolidate?

          If you press "A" (All) the entire spreadsheet is loaded. 
          If you press "P" (Part) a prompt is given to enter the 
          range of cells; only those cells are loaded into the 
          spreadsheet area. On either of these options, if the 
          spreadsheet area has data in it, a warning message is 
          given and the area can be cleared by pressing Z, or left 
          intact by pressing ENTER. 

          If you select "C" (Consolidate) only the cells with 
          values are input from the spreadsheet files. But instead 
          of replacing the value in the cell, it is added to the 
          current value of the cell. Formulas and text are not read 
          when Consolidate is selected. So if you have three 
          spreadsheets to combine, load the first one normally, 


76












-







                                                             LOAD


          specifying All, then load the second and third specifying 
          Consolidate. The formulas and text from the first one 
          will remain untouched. When you are done, press ! and the 
          formulas will recalculate using consolidated values. 


          DIF, WS, HDR Files
          When loading a DIF, WS or HDR file, different prompts 
          are given. First, you are asked:

               Enter the starting cell or cell range. 

          The default is cell A1. To start the load at C11, enter 
          C11. To confine the data loaded to three columns wide and 
          fifty records long, starting at C11, enter C11:E60. 
          The second prompt asks: 

          Enter R to load by rows, C to load by columns.

          The default is R, since this will put one record on each 
          line, which is the most common method. If you specify C, 
          the file will be read into the spreadsheet area one 
          record per column, effectively rotating it a quarter 
          turn. 

          DIF, HDR and WS files all have means of differentiating 
          text from numbers. None of these file types accomodate
          formulas. The /Save command can save files in DIF and 
          WS format, but they are not usually good formats for 
          saving spreadsheets because formulas and formatting info 
          are not saved. Use the CALC format for saving 
          CALC spreadsheets. 


Remarks:           When the file is opened, if it does not exist, or if it 
          is not a file that can be read by CALC, an error 
          message is given, and you are prompted to try again. 

          As the file is loading, the cursor coordinate in the 
          lower left corner of the screen displays the progress of 


                                                                   77











-







LOAD


          the load. When the load is completed, the spreadsheet 
          is displayed. 

          CALC does not clear the spreadsheet area before 
          loading a file. This allows two or more spreadsheets to 
          be loaded and combined. However, if the spreadsheet area 
          contains data, a warning message is given. You may press 
          ENTER to keep the data in the spreadsheet area, or press 
          Z to clear the area before loading. 

          When loading a CALC spreadsheet, more than just the 
          data in the cells is loaded. All global settings, printer 
          settings, column widths and the current cell position are 
          loaded as well. So if you save a spreadsheet at the end 
          of the day, then reload it the next morning, everything 
          will be back the way it was. 

          To exit from /L without loading a file, press ESCAPE. 

          If your computer has only one diskette drive, do not 
          attempt to /Load or /Save to drive B:. CALC requires 
          that the program diskette remain in the drive at all 
          times. The message file and the file overlay program are 
          both on drive A:, and are needed continually during the 
          loading process. 

















78












-







                                                               LOG



                             LOG Function


Purpose:  Computes the natural logarithm of a number, and returns 
          the resulting value to the current cell or formula. 
         
         
Format:   LOG(2.718282)       Returns 1   

          LOG(A1)             If A1 contains e, returns 1  

          LOG(A1*2/A5)        Resolves the formula, then returns 
                              the natural log of the result 


Remarks:  LOG(x) can be entered into a cell, or the LOG function 
          can be used in a formula. 
           
          The natural logarithm is the logarithm to the base e.


Example:  Enter the following formulas into the specified cells. 
          The resulting values are shown: 


                  Cell        Formula              Result

                  A1:      LOG(2.718282)               1
                  A2:      LOG(2.718282*2.718282)      2
                  A3:      LOG(45/7)                1.86











                                                                   79












-







LOOKUP



                          LOOKUP Function


Purpose:  Searches a table of ascending numbers, finds the closest 
          matching entry, and returns a value from an adjacent 
          cell. 


Format:   LOOKUP(A1,J1:J20)        Searches J1:J20 comparing them 
                                   to A1. First cell greater than A1 
                                   returns previous value in column K. 

          LOOKUP(A1,J1:J20,3)      Same as above, but returns the 
                                   value in column M. 


Remarks:  This function is useful for tax table lookups, price 
          table lookups, etc. where the table is small enough to be 
          entered as part of the spreadsheet. 

          The first argument is the "search key". For a tax table 
          lookup, it's taxable income. In a price table lookup, 
          it's the part number to be found. The search key can be a 
          number, or a formula, or a cell reference. 

          The second argument is the "search table". It is a range 
          of cells (two cell references separated by a colon), 
          running down a column or across a row. These cells 
          contain the table lookup values. In a tax table lookup, 
          these cells contain the income thresholds for each tax 
          bracket. In a price table lookup, these cells might 
          contain part numbers. 

          The LOOKUP function looks through the "search table" 
          until it finds a number that is greater than the "search 
          key". When it finds the number, it returns the value in 
          the previous cell to the right (if the search table is a 
          partial column) or the previous cell below (if the search 
          table is a partial row). 


80












-







                                                         LOOKUP



          The values in the search table must be in ascending 
          order, and no two cells in the search table can contain 
          the same value. 

          There is an optional third argument on the LOOKUP 
          function, called "offset". Offset defaults to 1 if it is 
          not present. Entering 2 in the third argument tells 
          LOOKUP to go two columns to the right of (or two rows 
          below) the search table to get its result. If offset is 
          zero, the search table argument itself is returned. If 
          offset is negative, LOOKUP moves to the other side of 
          the search table for its result. Offset can be a number, 
          or a formula, or a cell that contains a number. 


Example:  EXAMPLE #1: A tax table set for LOOKUP might look 
          like this: 

                              A          B          C   
                    1       Over        Tax        + %
                    2
                    3          0          0        .00
                    4      2,300          0        .11
                    5      3,400        121        .12
                    6      4,400        241        .14
                    7      6,500        535        .15
                    8      8,500        835        .16
                    9     10,800      1,203        .18
                    10    12,900      1,581        .20
                    11    15,000      2,001        .23

          The tax thresholds are listed in column A, the base tax 
          in B and the percent to be applied to excess in C. 
          Further down the spreadsheet we enter:







                                                                   81












-







LOOKUP



                        A          B          C          
               15  Taxable Income:         $9,000.00
               16
               17  Tax bracket:            LOOKUP(C15,A3:A11,0)
               18  Base tax amount:        LOOKUP(C15,A3:A11,1)
               19  % to apply to excess:   LOOKUP(C15,A3:A11,2)
               20  Excess tax amount:      (C15-C17)*C19
               21
               22  Total tax:              C18+C20

          Which yields the following results: 

                        A          B          C          
               15  Taxable Income:         $9,000.00
               16
               17  Tax threshold:          $8,500.00
               18  Base tax amount:          $835.00 
               19  % to apply to excess:         .16 
               20  Excess tax amount:         $80.00 
               21
               22  Total tax:                $915.00   
          The example was broken up into pieces for demonstration 
          purposes. More likely, the spreadsheet would simply 
          contain a cell with "Total tax", using this formula:

 LOOKUP(C15,A3:A11)+(C15-LOOKUP(C15,A3:A11,0))*LOOKUP(C15,A3:A11,2)


          EXAMPLE #2: A lookup table is set up which contains a 
          list of item numbers in column A, their description in 
          item B, and their list price in column C: 

                   A          B                C
              50 Part  Description       List Price
              51 1001  Printer Stand          95.00
              52 1002  Paper Tray             40.00 
              53 1003  Tractor Feed Option   125.00 
              54 1004  Ribbon Cartridge        9.95
              55 (etc.)


82












-







                                                         LOOKUP



          At the top of the spreadsheet is an invoice, as follows:

               A          B                  C           D     E
          1                       INVOICE
          2
          3  Part    Description       List Price       Qty   Ext.
          4          
          5      LOOKUP(A5,A51:A99) LOOKUP(A5,A51:A99,2)    C5*D5
          6      LOOKUP(A6,A51:A99) LOOKUP(A6,A51:A99,2)    C6*D6
          7      LOOKUP(A7,A51:A99) LOOKUP(A7,A51:A99,2)    C7*D7
          8      LOOKUP(A8,A51:A99) LOOKUP(A8,A51:A99,2)    C8*D8
          ...    (etc.)
          20                           INVOICE TOTAL    SUM(E5:E19)
          21                           SALES TAX        E20*.078
          22                           AMOUNT DUE       E20+E21

          To produce an invoice, load the invoice spreadsheet from 
          disk, enter the part numbers and quantities, then press ! 
          to calculate. The descriptions and prices are looked up, 
          the invoice is extended, sales tax is computed, and the 
          invoice is totalled. When /Printing the invoice, specify 
          a cell range of A1:E22, so the price table doesn't print. 

          There is an alternate method for preparing invoices with 
          CALC described in the examples of the NOPRINT 
          function.















                                                                   83












-







LPI



                             LPI Function


Purpose:  Changes the line spacing on the printer to 6 or 8 lines 
          per inch. 

Format:   LPI(6)              Changes to 6 lines per inch

          LPI(8)              Changes to 8 lines per inch

Remarks:  When LPI(n) is entered into a cell, it displays as 
          [LPI(n)] on the screen. When the cell is printed, control 
          characters are sent to the printer which change the line 
          spacing, then the cell is printed as if it were empty. 
          LPI can be an operand in an IF, but cannot be used in a 
          formula. 
           
          If your printer is not an IBM, Epson, or Epson 
          compatible, then CALC must be configured for your 
          printer before using the LPI function. See the section 
          titled "Customizing CALC" for more information.

          CALC defaults to six lines per inch, and 58 printed 
          lines per page. When using LPI(8), you will probably want 
          to increase the number of lines per page (one of the 
          /Print prompts) to 75 or 80. 

Example:           A report lists all 70 of a company's locations, and they 
          won't all fit on one page with headings and totals. We 
          want the report on a single sheet of paper, and it 
          doesn't matter if the lines are "crunched" tightly 
          together. 

          At the top of the report, in any cell, type LPI(8) and 
          press ENTER. At the bottom of the report, in any cell, 
          type LPI(6) to reset your printer for future printing at 
          six lines per inch. Now /Print the report, and specify a 
          "page length" of 80. The report is printed on one page. 



84











-







                                                               MAX



                            MAX Function


Purpose:  Finds the largest number in a range of numbers and 
          returns it to the current cell or formula.

Format:   MAX(A1:A20)    Searches a column of numbers

          MAX(A1:E1)     Searches a row of numbers

          MAX(A1:D20)    Searches a block of numbers

Remarks:  MAX(m:n) can be entered into a cell, causing the largest 
          number in the range to appear as the cell value. Or the 
          MAX function can be used in a formula. 
           
          The coordinate range specified in a MAX function may be 
          down a column, such as MAX(A1:A20), it may be across a 
          row, such as MAX(A1:E1), or it may be a block of cells 
          (designated by the upper-left and lower-right 
          coordinates), such as MAX(A1:D20).

          Negative numbers are considered smaller than zero; i.e. 
          the MAX of 1, 0 and -5, is 1.

          If the specified range contains any empty cells, they are 
          ignored. If the range contains any cells with text, 
          ERROR is returned. 

Example:  Column B has a column of monthly sales from B7 to B26. 
          The highest monthly sales figure is to be shown in B28. 
          Move the cell cursor to B28, and enter:

                             MAX(B7:B26)

          After recalculation, B28 contains the highest number in 
          the column. 




                                                                   85












-







MIN



                             MIN Function


Purpose:  Finds the smallest number in a range of numbers and 
          returns it to the current cell or formula.

Format:   MIN(A1:A20)    Searches a column of numbers

          MIN(A1:E1)     Searches a row of numbers

          MIN(A1:D20)    Searches a block of numbers

Remarks:  MIN(m:n) can be entered into a cell, causing the smallest 
          number in the range to appear as the cell value. Or the 
          MIN function can be used in a formula. 
           
          The coordinate range specified in a MIN function may be 
          down a column, such as MIN(A1:A20), it may be across a 
          row, such as MIN(A1:E1), or it may be a block of cells 
          (designated by the upper-left and lower-right 
          coordinates), such as MIN(A1:D20).

          Negative numbers are considered smaller than zero; i.e. 
          the MIN of 1, 0 and -1, is -1.

          If the specified range contains any empty cells, they are 
          ignored. If the range contains any cells with text, 
          ERROR is returned. 

Example:  Column B has a column of monthly sales from B7 to B26. 
          The lowest monthly sales figure is to be shown in B27. 
          Move the cell cursor to B27, and enter:

                             MIN(B7:B26)

          After recalculation, B27 contains the lowest number in 
          the column. 




86












-







                                                              MOVE



                             MOVE Command


Purpose:  Moves a cell or a range of cells to another area of the 
          spreadsheet. When the range is one or more entire rows or 
          one or more entire columns, the original rows/columns are 
          removed after copying. (To copy cells without erasing the 
          "from" range, use the /Replicate command.)


Purpose:  Enter /M and you are prompted:

              Enter the "from" range.
              Examples: A5   G   22   B:J   5:12   A2:J20

          As the examples show, you may enter a single cell, a 
          single column, a range of columns, a single line, a range 
          of lines, or a block of cells. The next prompt is:

                      Enter the "to" range.

          Once again, enter a single cell, a single column, a range 
          of columns, a single line, a range of lines, or a block of 
          cells. If your ranges are valid, the data is moved from 
          the "from" range to the "to" range. If a formula is 
          encountered in the "from" range, an adjustment message is 
          given for each of the variables in the formula. For 
          example:

          Replicating cell A5. Adjust A3  Y or N? (or A for all)

          This sample message says that in the "from" cell A5 it 
          found a formula. That formula contained a reference to 
          A3. If you reply Y to this message, each replication is 
          adjusted so A3 becomes A4, then A5, then A6, etc. If you 
          reply N to this message, all replications refer to A3, 
          unchanged. 




                                                                   87












-







MOVE


Remarks:  When entire lines or columns are moved, the "from" lines 
          or columns are erased after the move. Specifically, the 
          move command performs the following steps:

            1. Blank rows or columns are inserted at the "to" range, 
               opening up space to receive the moved cells.
            2. The "from" cells are then moved to the "to" range. 
               If a "from" cell contains a formula with a cell 
               reference, an adjustment prompt is given. 

            3. Finally, the original "from" rows or columns are 
               deleted. 

          In other words, using the /Move command is the same as 
          using /Insert, then /Replicate, then /Delete. 

Example:  After creating the following spreadsheet, it is discovered 
          that the lines are not alphabetical. 

                             A            B         
                        1             
                        2 Alabama        540
                        3 Arkansas       441
                        4 Alaska         662
                        5 Colorado       293
                          (etc.)

          One way to put it back in sequence would be to sort the 
          spreadsheet on column A. Another way is to use the 
          following command:

                              /M 4,3

          which moves the contents of line 4 to line 3, placing 
          Alaska between Alabama and Arkansas. If the line contains 
          any formulas, adjustment prompts are given. 






88











-







                                                             NOLF



                              NOLF Function


Purpose:  Causes the current line to be printed with only a 
          carriage return, and no line feed. On many printers, this 
          allows two or more lines to be printed "on top of" one 
          another. This is useful for boldfacing, underlining and 
          overstriking. 

Format:   NOLF           Suppresses line feed when line is printed


Remarks:  NOLF can be entered into a cell, or can be the second or 
          third operand in an IF function. It cannot be used in a 
          formula. NOLF displays as [NOLF] on the screen. 

          Regardless of which column NOLF is in, it takes effect at 
          the time its line is printed. The cell with NOLF is 
          treated as if it were empty when the print line is built, 
          then when the line is printed, a carriage return is 
          sent to the printer without a line feed character. 

          On most printers, NOLF keeps the paper from advancing so 
          the next line overprints the NOLF line. However, some 
          brands of printers advance the paper anyway when a 
          carriage return is received, so NOLF has no effect on 
          those printers. 


Example:  EXAMPLE #1: At the end of a report we want to underline 
          the columns of numbers. In the past, we have always moved 
          down one line and typed underscores, leaving a blank line 
          above the underscores: 

                               992.00         4.01     7,122.50   
                           __________   __________   __________
                 TOTAL      $4,305.00      $132.22   $92,122.50   

          This is acceptable, but we would prefer the underscores 


                                                                   89












-







NOLF


          to be immediately under the last line of numbers. So on 
          the line immediately above the underscore line, we enter 
          NOLF into any cell on that line. Now the line prints: 

                               992.00         4.01     7,122.50   
                           __________   __________   __________
                 TOTAL      $4,305.00      $132.22   $92,122.50   


          EXAMPLE #2: On the same report described in example 1, 
          we want the grand total line to print in "boldface"; i.e. 
          darker than the rest of the report. Some printers may 
          have a boldface font option, in which case the 
          appropriate control codes could be typed into the 
          "TOTAL text field. Most printers can print boldface by 
          "overstriking" -- printing the same text two or three 
          times, to make the characters darker.

          To boldface the total line, start by reproducing the line 
          a second time, exactly as it appears. Use the /Replicate 
          command to copy it to the line below it (with no 
          adjustment). 

          In any empty cell on the first total line, enter NOLF. 
          When the first total line is printed, the printer returns 
          the carriage but does not advance the paper. Then it 
          prints the second total line over the first, making it 
          darker. If a double-strike does not make the line dark 
          enough, it may be necessary to print it three times, with 
          NOLF in the first two lines. 












90












-







                                                        NOPRINT



                             NOPRINT Function


Purpose:  Causes the line where it appears to not be printed. Using 
          NOPRINT and IF together allows selective printing. 


Format:   NOPRINT              Suppresses printing 


Remarks:  NOPRINT can be entered into a cell, or can be the second 
          or third operand in an IF function. It cannot be used in 
          a formula. NOPRINT displays as [NOPRINT] on the screen. 
          Any line with [NOPRINT] in one of its cells is not 
          printed. 

          Selective printing based on data values can be done by 
          specifying NOPRINT in an IF function. For example: 
          IF A5=0 THEN NOPRINT does not print if A5 is zero, and 
          prints if A5 is non-zero. 


Example:  A company has invoices which can include any of 80 line 
          items. However, a typical invoice only has a few items on 
          it. Every time we print an invoice, we don't want all 80 
          items printing; they take up two pages, and the extra 
          lines with zero quantities are superfluous. 

          Start by setting up a "skeleton" or "master" spreadsheet 
          that has all 80 items, one per line, with descriptions 
          and prices, but with no quantities. The first few lines 
          of the master invoice might look like this:









                                                                   91












-







NOPRINT



                  A          B         C         D         E
          1                         INVOICE
          2  Date:               
          3  Sold to:
          4  
          5       
          6   Qty  Part#  Description           Price    Extended
          7        1001  Printer Stand          95.00    A7*D7
          8        1002  Paper Tray             40.00    A8*D8
          9        1003  Tractor Feed Option   125.00    A9*D9
          10       1004  Ribbon Cartridge        9.95    A10*D10
                   (etc.)                             

          The invoice spreadsheet contains a line for each of 
          eighty products, with their descriptions, prices, part 
          number, and any other information we want. The quantities 
          are empty, so they can be filled in later. Column E has 
          the extended amount; it is a formula with the quantity 
          times the price. 

          In a real invoice application, there is usually quite a 
          bit more other info at the top, such as sold to, ship to, 
          PO number, date, invoice number, etc. At the bottom there 
          are invoice totals, sales tax, shipping charges, invoice 
          discounts, etc. most of which can be computed by CALC. 

          Now, back to the NOPRINT function. How do we keep lines 
          from printing that have no quantities? It's easy. Go to 
          cell F7 and enter:

                           IF(A7=0,NOPRINT)

          Or you may prefer the alternate form of the IF function:

                        IF A7 = 0 THEN NOPRINT

          Now use the /Replicate command to copy the formulas in 
          E7 and F7 all the way down to the last product in line 
          86. Note that [NOPRINT] appears in all the cells in 


92












-







                                                        NOPRINT


          column F, because all the quantities are zero. As soon as 
          a quantity is entered into column A (and recalculation is 
          done), the [NOPRINT] on that line becomes .00 and the 
          line now prints. Since we don't want .00's printing on 
          our invoice, use the /Format, Zero-blank command to hide 
          them. Or change the width of column F to zero, which also 
          hides them. 

          Before entering any quantities, set recalculation to 
          manual with /GM and save the spreadsheet, giving it a 
          name like INVOICE.MAS. It is now the master invoice 
          spreadsheet. Later, to prepare an invoice, load the 
          master spreadsheet, type in the quantities, and /Print. 
          If you want to save the new invoice, give it a unique 
          name (such as the invoice number, or customer name) 

          As an added sophistication, you may want to protect all 
          the fields on the spreadsheet except the quantity 
          column and shipping info, so only they can be entered. It 
          keeps other fields from being accidentally altered, and 
          it also allows you to clear all the unprotected fields 
          with the /Blank,ALL command, which does not clear 
          protected fields. 



















                                                                   93









 



```
{% endraw %}

## CALC3.DOC

{% raw %}
```
-







NPV



                              NPV Function


Purpose:  Computes the net present value of a stream of flows, at a 
          specified discount rate, and returns the result to the 
          current cell or formula.

Format:   NPV(.12,A1:A20)          Rate specified as value

          NPV(A1,B1:E1)            Rate in another cell

          NPV(A1/100,B1:E1)        Rate specified as formula

Remarks:  The first operand of the NPV function is the discount 
          rate. It may be a value, a cell reference, or a formula. 
          The interval between the stream of flows must be 
          constant, and determined by the rate; i.e. if the flows 
          are annual, use an annual discount rate. If the flows are 
          monthly, use a monthly discount rate.

          The second operand of the NPV function is a range of 
          contiguous cells, which contains the stream of flows. 

Example:  A client has an annual income of $40,000 and he expects 
          it to increase 5% annually. Make a spreadsheet showing 
          his annual income for the next ten years, total income 
          for ten years, and net present value of the total income, 
          assuming an annual discount rate of 8%:

                    A1:          40000
                    A2:          A1*1.05
                    A3-A10:      /R A2 A3:A10  (adjust - Y)
                    A12:         SUM(A1:A10)
                    A13:         NPV(.08,A1:A10)

          Cell A13 will contain the net present value of the ten 
          years' income. For larger spreadsheets using NPV several 
          times, it is a good idea to put the discount in another 
          cell, so it can be easily changed without having to enter 


94












-







                                                               NPV


          the formulas again. In the example above, make these two 
          changes:

                    B1:       .08
                    A13:      NPV(B1,A1:A10)





































                                                                   95












-







PAGE



                            PAGE Function


Purpose:  Advances a printed spreadsheet to a new page. Optional 
          operand allows conditional page break. 


Format:   PAGE                     Advances to next page after 
                                   printing current line

          PAGE(3)                  Advances to next page if there 
                                   are fewer than three lines left 
                                   on the current page

Remarks:  When PAGE is entered into a cell, it displays as [PAGE] 
          on the screen. When PAGE(n) is entered, [PAGE(n)] is 
          displayed on the screen. The value n must be a positive 
          integer between 0 and 99. It cannot be a cell reference 
          or formula.

          When a spreadsheet is printed, a line count is kept 
          internally, to count the number of lines printed on a 
          page. When this line counter reaches its maximum (the 
          "lines per page" value specified in /Print), a "page 
          break" occurs. At page break time, the following things 
          happen:

          * If footings are specified, paper is advanced to the
            footing area, and footings are printed 

          * A form feed is sent to the printer, to advance to top 
            of page 

          * If Pause option is specified, a message is given to 
            press ENTER to print the next page

          * Line counter is reset to zero

          * If Border option is specified, top borders are printed


96












-







                                                             PAGE



          * If headings are specified, they are printed, and the 
            line counter is incremented accordingly

          When PAGE is encountered during printing, the line it 
          appears in is printed first, then the steps listed above 
          are followed. 

          When PAGE(n) is encountered during printing, the line it 
          appears in is printed first, then the current line count 
          is compared to n. If there is not enough room on the page 
          for n more lines, the page break steps listed above are 
          followed. If there is enough room, the PAGE(n) function 
          is ignored. 

          Note that PAGE(n) refers to the next n lines. The current
          line PAGE or PAGE(n) appears in is printed on the 
          current page. 

          PAGE and PAGE(n) can be the second or third operands in 
          an IF function, allowing page breaks to be even further 
          controlled by data in the spreadsheet. The PAGE function 
          cannot be used in a formula. 



















                                                                   97












-







PAGE


Example:  A spreadsheet lists an employee, then has five lines of 
          information about that employee. If the bottom of the 
          page is approaching, we don't want to print only one or 
          two lines of data on the current page, then print the 
          last four or five lines on the next page. By adding a 
          PAGE(5) function ahead of each employee, all five of 
          their lines will always appear on the same page. The 
          screen might look like this: 

                            A          B          C          
                       1  [PAGE(5)]
                       2  Employee A  - line 1
                       3                line 2
                       4                line 3 
                       5                line 4
                       6                line 5
                       7  [PAGE(5)]
                       8  Employee B  - line 1
                       9              - line 2 
                                        (etc.)






















98












-







                                                      PAYMENT



                         PAYMENT Function


Purpose:  Computes the payment amount per period for a given 
          principal amount, rate and number of periods. (See also 
          PRINCIPAL, RATE and PERIODS functions.)

         
Format:   PAYMENT(principal,rate,periods)

          PAYMENT(1000,.01,12)        Returns 88.85 

          PAYMENT(A1,.18/12,36)       If A1 is 1000, returns 36.16 

          PAYMENT(B1,100,A1*2/A5)     Resolves the formula, then 
                                      computes the payment


Remarks:  PAYMENT(x,y,z) can be entered into a cell, or the 
          PAYMENT function can be used in a formula. 
                     
          All three operands must be specified. The rate operand 
          is the rate per period. The period length needs to be 
          consistent; i.e. in the first example above, the term is 
          twelve months, so the rate is a monthly rate, and 
          the payment amount returned is the payment per month. 

          One note on amortizations: as the truth-in-lending laws 
          so vividly indicate, there are many ways to amortize. If 
          CALC comes up with a different answer than your bank, 
          it may be because of their compounding method, or because 
          of rounding. Generally, CALC's calculation method is 
          mathematically sound, and yields the same result as an 
          interest amortization table. 

Example:  A local used car dealer offers a time-payment plan. A 
          $5,000 car requires no down payment, and requires 36 
          monthly payments at 18% annual interest. Compute the 
          monthly payment. In any cell, enter:


                                                                   99












-







PAYMENT



                       PAYMENT(5000,.18/12,36) 

          The cell displays 180.77, which is the monthly payment. 
          The interest rate of .18 was an annual rate, so we used 
          .18/12 for the monthly rate. 




































100












-







                                                        PERIODS



                           PERIODS Function


Purpose:  Computes the term of a loan (number of periods) for a 
          given principal amount, payment and interest rate. (See 
          also PRINCIPAL, PAYMENT and RATE functions.)

         
Format:   PERIODS(principal,payment,rate)

          PERIODS(1000,88.85,.01)     Returns 12

          PERIODS(A1,36.16,.18/12)    If A1 is 1000, returns 36 

          PERIODS(B1,100,A1*2/A5)     Resolves the formula, then 
                                      computes the periods


Remarks:  PERIODS(x,y,z) can be entered into a cell, or the 
          PERIODS function can be used in a formula. TERM is an 
          alternate name for the PERIODS function.
                     
          All three operands must be specified. The rate operand 
          is the rate per period. The payment and rate need to be 
          consistent; i.e. in the first example above, the rate is 
          a monthly rate, and the payment amount is monthly, so the 
          number returned is the number of months.

          One note on amortizations: as the truth-in-lending laws 
          so vividly indicate, there are many ways to amortize. If 
          CALC comes up with a different answer than your bank, 
          it may be because of their compounding method, or because 
          of rounding. Generally, CALC's calculation method is 
          mathematically sound, and yields the same result as an 
          interest amortization table. 






                                                                  101












-







PERIODS


Example:  A local used car dealer offers a time-payment plan. A 
          $5,000 car requires no down payment, and has monthly 
          payments of 180.77 at 18% annual interest. Compute the 
          number of months of payments. In any cell, enter:

                     PERIODS(5000,180.77,.18/12) 

          The cell displays 36, which is the number of months. The 
          interest rate of .18 was an annual rate, so we used 
          .18/12 for the monthly rate. 
































102












-







                                                     PRINCIPAL



                          PRINCIPAL Function


Purpose:  Computes the principal amount for a given payment amount, 
          interest rate and number of periods. (See also PAYMENT, 
          RATE and PERIODS functions.)

         
Format:   PRINCIPAL(payment,rate,period)

          PRINCIPAL(88.85,.01,12)     Returns 1000 

          PRINCIPAL(A1,.18/12,36)     If A1 is 36.16, returns 1000

          PRINCIPAL(B1,100,A1*2/A5)   Resolves the formula, then 
                                      computes the principal


Remarks:  PRINCIPAL(x,y,z) can be entered into a cell, or the 
          PRINCIPAL function can be used in a formula. This 
          function can also be spelled PRINCIPLE.
                     
          All three operands must be specified. The payment, rate 
          and periods need to be consistent; i.e. in the first 
          example above, the rate is a monthly rate, the payment 
          amount is monthly, and the periods are months.

          One note on amortizations: as the truth-in-lending laws 
          so vividly indicate, there are many ways to amortize. If 
          CALC comes up with a different answer than your bank, 
          it may be because of their compounding method, or because 
          of rounding. Generally, CALC's calculation method is 
          mathematically sound, and yields the same result as an 
          interest amortization table. 

Example:  A local used car dealer offers a time-payment plan. A 
          car requires no down payment, and has monthly payments of 
          180.77 for 36 months at 18% annual interest. Compute the 
          purchase price of the car. In any cell, enter:


                                                                  103












-







PRINCIPAL



                     PRINCIPAL(180.77,.18/12,36)

          The cell displays 5000 which is the principal amount, or 
          purchase price of the car. Note that the interest rate of 
          .18 was annual, so we used .18/12 for the monthly rate. 




































104












-







                                                           PRINT



                         PRINT Command (/P)


Purpose:  Prints a hard copy of the spreadsheet on the printer.


Prompts:  Enter /P and you will be prompted:
         
          Enter range to be printed (or ENTER for all).

          The word ALL appears on the entry line. To print the 
          complete spreadsheet, press ENTER. To print only part of 
          the spreadsheet, type the coordinates as a range (for 
          example: A1:G15), then press ENTER or comma. The next 
          prompt is:

          Enter page width (number of columns across printer).

          The number 80 will appear on the entry line. If the 
          printer is set up to accomodate an eighty-character 
          printout, just press ENTER. Otherwise, enter the width of 
          the printer page. The next prompt is:

          Enter page length (number of lines per page).

          The number 58 will appear on the entry line. If you are 
          printing on normal eleven-inch paper, at six lines per 
          inch, press ENTER. Otherwise, figure out how many lines 
          will print on a page and enter it. The next prompt is:
         
          D=dbl space, S=setup, P=pause, C=contents, M=mult copies
          B=border, O=offset, T=top margin, H=headings, F=footings









                                                                  105












-







PRINT


          If no special options are desired, press ENTER. Otherwise 
          enter one or more option characters:

          D - Double space the printout. 
          S - Prompt for printer setup codes. (Details below.)
          P - Pause after printing each page. 
          C - Print contents and attributes of cells. 
          M - Print multiple copies of the report (default 1).
          B - Display row and column borders on the printed copy. 
          O - Override default left margin width (default 7).
          T - Override default top margin height (default 2). 
          H - Prompt for heading line range. 
          F - Prompt for footing line range. 

          The last prompt from the Print command is:

                          Printer or Disk.

          Specify P to send the output directly to the printer. If 
          D is specified, you are prompted:

                         Enter the file name.

          Enter a valid MSDOS file name, and the printed output 
          will be written to a file by that name. You can print it 
          later with the MSDOS "COPY filename PRN:" command, 
          or access it with your word processor for further 
          editing. 


Remarks:  CALC prints an output page only as wide as the 
          specified "page width". When the spreadsheet has been 
          completely printed for that width, CALC checks to 
          see if some of your spreadsheet was not printed. If so, 
          CALC makes a second pass, printing the right-hand 
          side of the spreadsheet. If it is extremely wide, then 
          CALC continues making passes through the spreadsheet 
          until it is all printed. These pages can then be attached 
          to produce a wide spreadsheet on a narrow printer.



106












-







                                                           PRINT


          When CALC asks for the "page width" (number of 
          columns across the printer), it is asking for a width 
          that: 

             1. your printer is physically capable of printing;
             2. won't run off the right edge of the paper; and
             3. takes character size into account.

          Since CALC has no way of determining any of these 
          three factors, it needs some help. If your printer is 
          capable of printing only 80 characters in 10 cpi mode, 
          and you specify a page width of 96, CALC sends  
          96 characters at a time to the printer. The effect is a 
          "double-spaced" report, with the data from the right side 
          of the report "wrapped around" onto a second line. If a 
          page width of 80 had been specified, CALC would print 
          the left 80 characters of the report, then skip to a new 
          page and print the rest of the characters. The two pages 
          can then be taped together as a wide report. 

          PRINTER SETUP
          There are hundreds of brands of printers, and most of 
          them have their own unique code structure for setting 
          options such as characters per inch, lines per inch, 
          double-wide, and so forth. The standard version of 
          CALC is configured for the IBM/Epson printer, because 
          more than 65% of the CALC users have an Epson or 
          compatible. The /Configure option supports three other 
          brands of printers, which account for another 20% of 
          CALC users. Generic support for other printers has 
          been provided in the .PRO configuration options of 
          CALC. The section titled Customizing CALC 
          gives more information. In addition, there is the "Setup" 
          option of the /Print command. If "S" was specified above, 
          the following prompt is given next:

               Enter printer setup codes, then ENTER.
         
          For some printers, the setup codes have been built into 
          CALC's /Configure routines. The standard diskette 


                                                                  107












-







PRINT


          comes configured for Epson (IBM) printers. The setup 
          prompt will have a second line saying: 

          Epson printers: "A"=10 cpi, "B"=12 cpi, "C"=17 cpi.

          If your CALC has been configured for another printer, 
          that printer's name will appear instead of Epson. If the 
          named printer matches your printer, you can alternately 
          enter the letters A, B or C to set your printer spacing 
          to 10, 12 or 17 characters per inch, respectively. 

          If CALC has not been configured for your printer, you 
          can still send setup codes to the printer. Just Press any 
          key (other than A, B or C) at this time, and its ASCII 
          value will be sent directly to the printer. For example, 
          if the sequence "ESC,M" sets your printer to twelve 
          characters per inch, press the Escape key, then the 
          capital M. When all the setup codes have been entered, 
          press ENTER. 

          Some printer setup codes are special ASCII characters. If 
          you need to send an ASCII 15 to your printer, for 
          example, there are two ways to do this:

          1. Hold down CTRL and press O (the letter). CTRL-O at 
             the keyboard generates ASCII 15. (O is the 15th letter 
             of the alphabet. CTRL-A generates ASCII 1, etc.)

          2. Hold down the ALT key, and type the number you want 
             sent on the numeric keypad. For example, to send an 
             ASCII 15, hold down ALT, press the one then the five 
             key, and let go of ALT. An ASCII 15 is sent. Be sure 
             to type the number on the numeric keypad, and not on 
             the numeric row across the top of the keyboard. 

          There are two other methods for getting setup codes to 
          your printer. The easiest way is to just type the special 
          codes into a text string at the beginning of your 
          spreadsheet. Type a quotation mark, then type the codes, 
          using either of the methods above (Ctrl key or Alt key). 


108












-







                                                           PRINT


          Another method is the TRANSLATE PRINT x TO yyy 
          configuration option in the .PRO file. See the section 
          titled Customizing CALC for more information. 

Example:  EXAMPLE #1: The spreadsheet is only four columns wide, 
          and 99 lines long. No options are required. Enter:

          /P (ENTER) (ENTER) (ENTER) (ENTER) (ENTER) (ENTER)

          By pressing ENTER on all six prompts, you tell 
          CALC to use its defaults for all prompts: 

              * The entire spreadsheet is printed.

              * The page width is 80 characters, which is adequate 
                for this narrow spreadsheet. 
         
              * The page length default is 58 lines printed per 
                page. 

              * Borders are not printed, because the B option was 
                not specified. 
         
              * The printout is single spaced.

              * There is a 7 character left margin (page offset).

              * There is a two space top margin (two blank lines 
                are printed at the top of each page).

              * One copy of the spreadsheet is printed.

              * No headings or footings are printed. 

              * The output goes directly to the printer.







                                                                  109












-







PRINT



          EXAMPLE #2: The spreadsheet is 230 characters wide. The 
          printer has wide paper in it, and with compressed print 
          can print 232 characters across. The report is to be 
          double-spaced. Enter:

                          /P 232,,DO (ENTER)

          Since you entered an option of "O", CALC prompts for 
          a page offset. Enter 2. Since the printer will only 
          handle 232 characters, and the spreadsheet is 230 
          characters wide, you can only afford a two character left 
          margin. If you didn't change the offset, the last five 
          characters of the spreadsheet would print on a second 
          page.



























110












-







                                                             QUIT



                          QUIT Command (/Q)


Purpose:  Exits from CALC to the operating system. 


Prompts:  If the spreadsheet currently in memory has not been 
          saved, it will be lost. Use the Save Command (/S) to save 
          the spreadsheet before exiting. To prevent accidental 
          loss of a spreadsheet, CALC asks for confirmation if 
          data has been altered in the spreadsheet area: 

          The current spreadsheet was changed but not saved.
          Enter Y to quit. Enter N to return to spreadsheet.
          Enter S to save spreadsheet. 

          If "S" is entered, control is passed to the /Save 
          command. 


Remarks:  Normally CALC returns to DOS after /Q. However, 
          there is a .PRO file option called ON EXIT RUN program
          which invokes an .EXE file on exit from CALC. See 
          the section titled "Customizing CALC" for more 
          information.


Example:  You have saved the current spreadsheet and want to exit 
          so you can run another program. Enter:

                                /Q 

          Since you just saved the spreadsheet, and have made no 
          further changes on it, CALC ends. The screen is 
          cleared, and at the top of the screen is the DOS 
          prompt:

                                A>



                                                                  111












-







RANDOM



                             RANDOM Function

Purpose:  Returns a random number between zero and one.  

         
Format:   RANDOM                 Returns a random number 
                                 between 0 and 1


Remarks:  This function is useful in some statistical applications 
          and in sequencing events randomly, such as in scheduling 
          sporting events. 

          To compute a random number in the range 0 to 25, put 25 
          into A1, then enter the following formula in another 
          cell:  

                        INT(RANDOM * (A1+1))

          To compute a random number between 0 and n (any positive 
          integer), enter n in A1 and use the formula above. 

                   
Example:  EXAMPLE #1: Compute a random number between 1 and 52. 
          This number might identify the week in a year, or it 
          might identify a card in a deck of cards. Enter the 
          following formula in any cell:

                       INT(RANDOM * (51+1)) + 1


          EXAMPLE #2: A spreadsheet contains a list of sporting 
          events, listed one per line in lines 5 to 50. We want to 
          randomly sort them. Start by entering:

                          RANDOM * 1000 
           
          in cell F5, then replicate the formula from F5 to F6:F50. 
          Now use the /Arrange command to sort F5:F50. It doesn't 


112












-







                                                         RANDOM


          matter if the sort is ascending or descending, and no 
          options are required, so just type:

                 /A C F5:F50 (ENTER) (ENTER)

          and the lines are sorted in a random sequence.




































                                                                  113












-







RATE



                               RATE Function

Purpose:  Computes an interest rate for a given principal amount, 
          payment and number of periods. (See also PRINCIPAL, 
          PAYMENT and PERIODS functions.)
         
Format:   RATE(principal,payment,term)

          RATE(1000,88.85,12)         Returns .01 (1% rate)

          RATE(A1,36.16,36) * 12      If A1 contains 1000, returns 
                                      .18 (18% rate)

          RATE(B1,100,A1*2/A5)        Resolves the formula, then 
                                      computes the rate

Remarks:  RATE(x,y,z) can be entered into a cell, or the RATE 
          function can be used in a formula. INTEREST is an 
          alternate name for the RATE function.
                                         
          All three operands must be specified. The payment operand 
          is the payment per period. The period length needs to be 
          consistent; i.e. in the first example above, the term is 
          twelve months, so the payment is a monthly payment, and 
          the interest rate returned is the rate per month, 
          compounded monthly. 

          One note on amortizations: as the truth-in-lending laws 
          so vividly indicate, there are many ways to compute 
          interest. If CALC comes up with a different answer 
          than your bank, it may be because of their compounding 
          method, or because of rounding. Generally, CALC's 
          calculation method is mathematically sound, and yields 
          the same result as an interest amortization table. 

Example:  A local used car dealer offers a time-payment plan. A 
          $5,000 car requires no down payment, and has monthly 
          payments of $180.77 per month for 36 months. Compute 
          the effective interest rate. In any cell, enter: 


114












-







                                                            RATE



                     RATE(5000,180.77,36) * 12 

          The cell displays .18, indicating the interest rate is 18 
          percent. Formatting the cell for three decimal places 
          shows the number as .180, so it is exactly 18%. 




































                                                                  115












-







REPLICATE 



                         REPLICATE Command (/R)


Purpose:  Copies data from a cell, a row, a column, a range of rows, 
          a range of columns, or a block of cells to another range 
          of cells, and optionally adjusts the cell coordinates in 
          formulas. The format attributes such as decimals, commas, 
          etc. are copied along with the data. This powerful 
          command allows cells to be replicated over and over, with 
          formulas adjusted, saving considerable data entry. 


Prompts:  Enter /R and you are prompted:

              Enter the "from" range.
              Examples: A5   G   22   B:J   5:12   A2:J20

          As the examples show, you may enter a single cell, a 
          single column, a range of columns, a single line, a range 
          of lines, or a block of cells. The next prompt is:

                      Enter the "to" range.

          Once again, enter a single cell, a single column, a range 
          of columns, a single line, a range of lines, or a block of 
          cells. If your ranges are valid, the data is moved from 
          the "from" range to the "to" range. If a formula is 
          encountered in the "from" range, an adjustment message is 
          given for each of the variables in the formula. For 
          example:

          Replicating cell A5. Adjust A3  Y or N? (or A for all)

          This sample message says that in the "from" cell A5 it 
          found a formula. That formula contained a reference to 
          A3. If you reply Y to this message, each replication is 
          adjusted so A3 becomes A4, then A5, then A6, etc. If you 




116












-







                                                  REPLICATE 


          reply N to this message, all replications refer to A3, 
          unchanged. See the examples below for more information.


Remarks:  A single cell may be replicated to a group of contiguous 
          cells, either across a row or down a column. Specify the 
          single cell as the "from" cell, then specify the range of 
          "to" cells, either across a row or down a column.

          A group of contiguous cells may be replicated to another 
          group of cells. If the "from" group are all in a row, 
          then the "to" group must either be all in a row, or they 
          must be a "block" of cells. To illustrate the latter 
          case, consider this example: 

                        A       B       C       D       E
                1             Qtr 1   Qtr 2   Qtr 3   Qtr 4
                2                                            
                3  Sales     (from)    (to)    (to)    (to) 
                4  CGS       (from)    (to)    (to)    (to)
                5  Gross     (from)    (to)    (to)    (to)

          Values or formulas have been entered into column B for 
          the first quarter, and now you want to replicate those 
          formulas to the next three quarters. To accomplish this, 
          enter: 
         
                         /R B3:B5,C3:E5 (ENTER)
         
          The "from" range, B3:B5 is replicated to each of the 
          columns C, D and E. In this example each of the values in 
          B3 through B5 are copied to the three adjacent columns. 
          If there are any formulas in B3:B5, CALC asks 
          for adjustment (see example below).

          The replicate command may be used to copy values, 
          formulas or text without adjustment. Just reply "N" to 
          any "adjust" messages. 




                                                                  117












-







REPLICATE 


Example:  EXAMPLE #1: Referring to the example above in the 
          Remarks section, let's look at the contents of each cell. 
          Suppose the contents prior to replicating are:

                        A       B       C       D       E
                1             Qtr 1   Qtr 2   Qtr 3   Qtr 4
                2                                            
                3  Sales     250000 
                4  CGS        B3*.7 
                5  Gross      B3-B4 

          Performing the replicate command discussed earlier:

                        /R B3:B5,C3:E5 (ENTER)

          causes the contents of B3, B4 and B5 to be copied to 
          the next three columns. But in the process of copying, 
          CALC issues three messages:

          Replicating cell B4. Adjust B3  Y or N? (or A for all)
          Replicating cell B5. Adjust B3  Y or N? (or A for all)
          Replicating cell B5. Adjust B4  Y or N? (or A for all)

          In this example, reply "Y" to all three of the messages. 
          (Or reply "A" to the first message, and the other two 
          messages will not be given.) The result is:

                        A       B       C       D       E
                1             Qtr 1   Qtr 2   Qtr 3   Qtr 4
                2                                            
                3  Sales     250000  250000  250000  250000
                4  CGS        B3*.7   C3*.7   D3*.7   E3*.7
                5  Gross      B3-B4   C3-C4   D3-D4   E3-E4


          Without the adjustment, the formulas in rows 4 and 5 
          would still be pointing at column B. By adjusting, they 
          now point to their respective columns.




118












-







                                                  REPLICATE 


          EXAMPLE #2: At the beginning of this manual in the 
          section titled "A Brief Tutorial" there was an exercise 
          which computed interest on a savings account for three 
          years. Now let's use the Replicate Command to carry the 
          computation out for twenty years. The original 
          spreadsheet looked like this:

                     A          B          C          D      
              1 
              2            Compute Annual Interest
              3
              4            Rate:             5.50
              5
              6            Year         Balance   Interest
              7            1983          5,000.00     275.00
              8            1984          5,275.00     290.13
              9            1985          5,565.13     306.08
              10                                             
              11           Totals        5,871.21     871.21

          This time, rather than type in all the data for every 
          year, let's set up the first and second detail lines:

                    B7   1983  (A value instead of text.)
                    C7   5000
                    D7   C7*C4/100
                    B8   B7+1  (A formula instead of text.)
                    C8   C7+D7
                    D8   C8*C4/100

          Notice that the year number is set up as a value instead 
          of text. This allows it to be incremented by one for the 
          next twenty years, rather than typing in the year numbers 
          twenty times. Of course the years will be right justified 
          and will contain commas and decimals, so use the /F 
          command to format column B as follows:

                    /F B1:B256,J,L    (left justify)
                    /F B1:B256,D,0    (no decimals)
                    /F B1:B256,C,N    (no commas)


                                                                  119












-







REPLICATE 



          Now replicate row 8. Twenty years will go all the way 
          down to line 26. The command looks like this:

                          /R B8:D8,B9:D26

          This Replicate Command takes a little longer, because of 
          its size. During the Replicate there are five "adjust" 
          messages:

          Replicating cell B8. Adjust B7  Y or N? (or A for all)
          Replicating cell C8. Adjust C7  Y or N? (or A for all)
          Replicating cell C8. Adjust D7  Y or N? (or A for all)
          Replicating cell D8. Adjust C8  Y or N? (or A for all)
          Replicating cell D8. Adjust C4  Y or N? (or A for all)

          Here is a case where adjustment is required on all but 
          one of the fields: the last one. If you responded "A" for 
          all, or "Y" to all these messages, you would get some 
          strange results. C4 is the interest rate field, which is 
          a fixed field at the top of the spreadsheet. The interest 
          rate is going to stay in C4 forever. So you must respond 
          "N" to the last "adjust" message, or the Replicate 
          command will use a different (and unpredictable) interest 
          for every year: C4, C5, C6, C7, etc. 

          So give it four Y's and an N. Now the replicate is 
          complete. In the tutorial there was a "Totals" line. So, 
          at B28 enter the text "Totals", at C28 enter the formula 
          C26+D26, and at D28 enter the formula SUM(D7:D26). The  
          spreadsheet recalculates and the interest for 20 years 
          is displayed.    










120












-







                                                           ROUND



                            ROUND Function


Purpose:  Rounds a formula or value to a specified number of 
          decimal places. 


Format:   ROUND(1.1234,2)       Returns 1.12
         
          ROUND(A1,2)           If A1 = 1.125, returns 1.13  
         
          ROUND(A1*2/B5,A6)     Resolves formula, then rounds its 
                                result

         
Remarks:  Rounding is automatically done by CALC, when 
          displaying a number in a cell. A more common means of 
          rounding is to use /Format and simply change the number 
          of decimals displayed on the screen. 

          However, there are occasional computations which require 
          rounding to be performed in-line. Or if your CALC 
          has been customized to default to floating decimals, the 
          ROUND function is useful for controlling the maximum 
          number of decimals displayed. 
           















                                                                  121












-







SAVE



                          SAVE Command (/S)


Purpose:  Saves a spreadsheet file on disk so it can be retrieved 
          later for altering or printing. Files are usually in 
          CALC spreadsheet format, but /Save can also write DIF 
          files and comma-delimited ASCII (Mail-merge) files.

Prompts:  Enter /S. The first prompt is:

                 Enter the drive and path (optional).

          If you are saving the spreadsheet to the default drive 
          and path, press ENTER. Otherwise, enter any valid drive 
          and path, then press ENTER. There is a brief pause, 
          then a window appears listing all the files with an 
          extension of CAL. The second prompt is displayed:

                         Enter the file name.

          If this spreadsheet had been loaded earlier, then its name 
          appears as the default. To save it with the same name, 
          just press ENTER. If you want to save the file with the 
          name of another existing spreadsheet, use the down arrow 
          or up arrow to select a file name. Or type the file name 
          instead, CALC saves the currently displayed spreadsheet 
          onto disk, giving it the name you specified. 

          If the file name has an extension of .DIF, the file is 
          saved in DIF (Data Interchange Format) format. 

          If the file name has an extension of .WS, the file is 
          saved in comma-delimited ASCII format, sometimes 
          called Mail-merge format. Each cell across the specified 
          cell range is written as either a comma (if it is empty), 
          a number followed by a comma (if it is a value or 
          formula), or a text string enclosed in quotation marks 
          (if it is text). At the end of each line, a carriage 
          return/line feed is written. Quotation marks are blanked 


122












-







                                                             SAVE


          in text fields. This is a standard technique for saving 
          sequential data. 

          Note that neither DIF nor WS format have a means of 
          handling formulas; they are strictly text and value 
          oriented. So if you save a spreadsheet in DIF or WS 
          format, it is a good idea to keep a backup copy of the 
          spreadsheet in CALC spreadsheet format, so formulas 
          and formatting options are saved. 

          Some examples of valid file names are:

                         LOAN1
                         B:WORKSHT5.OLD
                         X
                         A:HOMEWRK.A
                         ADDRESS.WS
                         TEST.DIF

          After entering the file name, press ENTER. The file is 
          opened. If a file with that name already exists on the 
          disk, you are prompted: 

                 File exists. Overwrite or Backup?

          If the file with the same name can be erased, and this 
          one written over it, reply "O". If you want to save the 
          old file as a backup, reply "B" and it is renamed with an 
          extension of .BAK, then the current file will be saved. 
          To enter a different file name, press BACKSPACE and 
          CALC prompts you for a different name.  

          If the file being saved is a DIF or WS file, two extra 
          prompts are given. The first is:

              Enter the cell range to be saved (or ALL). 

          The default is ALL, but a block of cells can be specified 
          instead. To confine the data saved to three columns wide 
          and fifty records long, starting at C11, enter the range 


                                                                  123












-







SAVE


          C11:E60. 

          The second prompt asks: 

            Enter R to save by rows, C to save by columns.

          The default is R, since this processes one line at a 
          time, moving left to right across the columns, which is 
          the most common method. If you specify C, the file is 
          written one column at a time, moving down the lines, 
          effectively rotating it a quarter turn. 


          As the file is being saved, the cursor coordinate in the 
          lower left corner of the screen displays the progress. A 
          message appears saying Saving file; stand by . . .. 
          When this message goes away, the save is completed. The 
          contents, value and attributes of each cell are saved, as 
          well as the column widths, current cell cursor position, 
          current settings of the global options, and current 
          settings of the print options.

          If your computer has only one diskette drive, do not 
          attempt to /Save or /Load to drive B:. CALC requires 
          that the program diskette remain in the drive at all 
          times. The message file and the file overlay program are 
          both on drive A:, and are needed continually during the 
          loading process. If your system has only one drive and no 
          hard disk, you will need to save your files directly onto 
          your CALC working diskette in drive A:. 












124












-







                                                             SAVE


Example:  A spreadsheet has been completed and printed. It is to be 
          saved on disk for future reference. It is to be called
          "PAYABLES". Type: 

                         /S PAYABLES (ENTER)

          A month ago a spreadsheet with the same name was saved 
          on this disk. The message: File Exists. Overwrite or 
          Backup? appears. Since the new spreadsheet is an 
          updated version of old PAYABLES file, reply B. Last 
          month's PAYABLES file is renamed PAYABLES.BAK, 
          and the new spreadsheet is saved with the name 
          PAYABLES.





























                                                                  125












-







SGN



                               SGN Function


Purpose:  Determines the sign of a number, and returns 1 if the 
          number is positive, 0 if the number is zero, or -1 if the 
          number is negative. The value is returned to the current 
          cell or formula. 


Format:   SGN(-35)            Returns -1. 
         
          SGN(A1)             If A1 = 35,  then SGN(A1) =  1  
                              If A1 = 0,   then SGN(A1) =  0 
                              If A1 = -35, then SGN(A1) = -1 
         
          SGN(A1*2/B5)        Resolves formula, then determines 
                              the sign of the result.

         
Remarks:  SGN(x) can be entered into a cell, and used as the cell 
          value; or the SGN function can be used in a formula, 
          and/or may have a formula as its argument.
           

Example:  A spreadsheet lists sales figures in column A. Then in 
          column B it assigns a value of 1 if the sales figure to 
          the left is below average, 2 if the figure equals the 
          average, and 3 if the figure is above the average. Enter 
          this formula into cell B1:
         
                       SGN(A1-AVERAGE(A1:A20))+2

          Use the Replicate command to copy the formula to cells 
          B1 through B20. 







126












-







                                                               SIN



                              SIN Function


Purpose:  Computes the trigonometric sine of a cell or formula and 
          returns the value to the current cell or formula. 
         
         
Format:   SIN(1.57079)        Returns 1 
         
          SIN(A1)             If A1 = 1.57079, returns 1 
         
          SIN(A1*2/B5)        Resolves formula, then computes sine 


Remarks:  SIN(x) can be entered into a cell, causing the sine of a 
          number to be computed, and used as the cell value. Or the 
          SIN function can be used in a formula, and/or may have a 
          formula as its argument.
           

Example:  Set up a simple spreadsheet which allows a value in 
          radians to be entered, and returns the sine:

                         A1:  Radians:
                         A2:  Sine: 
                         B1:  1.57079
                         B2:  SIN(B1)

          When a value is typed into B1, the sine is displayed in 
          B2. Enter 1.57079 in B1, and 1 is returned in B2. Now 
          change the spreadsheet so degrees can be entered instead 
          of radians:

                         A1:  Degrees:
                         A2:  Sine: 
                         B1:  90 
                         B2:  SIN(B1*3.14159/180)                    




                                                                  127












-







SQR



                              SQR Function


Purpose:  Computes the square root of a value, cell or formula and 
          returns the result to the current cell or formula. 


Format:   SQR(25)          Returns 5 
         
          SQR(A1)          If A1 = 25, returns 5 
         
          SQR(A1*2/B5)     Resolves formula, then computes 
                           the square root
         
         
Remarks:  SQR(x) can be entered into a cell, causing the square 
          root of a number to be computed, and used as the cell 
          value. Or the SQR function can be used in a formula, 
          and/or may have a formula as its argument.
           

Example:  Set up a spreadsheet that shows the square roots of all 
          numbers from 1 to 100. Start by entering:

                            A1:  1 
                            A2:  A1+1   
                            B1:  SQR(A1)
                            B2:  SQR(A2)

          So far we have the square roots of 1 and 2. To carry 
          the table out to 100, enter:

                         /R A2:B2 A3:B100
                    
          When asked to adjust A1 and A2, reply Y to both. When 
          replication and calcluation are done, the spreadsheet 
          contains the numbers 1 to 100 in column A, and the square 
          roots of 1 to 100 in column B.



128












-







                                                          STDEV



                            STDEV Function


Purpose:  Computes the standard deviation of a range of numbers. 


Format:   STDEV(A1:A20)       Computes standard deviation of a 
                              column of numbers

          STDEV(A1:E1)        Computes standard deviation of a 
                              row of numbers

          STDEV(A1:D20)       Computes standard deviation of a 
                              block of numbers

         
Remarks:  STDEV(m:n) can be entered into a cell, returning the 
          standard deviation of the specified range, and used as 
          the cell value. Or the STDEV function can be used in a 
          formula. 
           
          The coordinate range specified in a STDEV function may 
          be down a column, such as STDEV(A1:A20), it may be 
          across a row, such as STDEV(A1:E1), or it may be a block 
          of cells (designated by the upper-left and lower-right 
          coordinates), such as STDEV(A1:D20).


Example:  Column B has a string of numbers from B7 to B26 of which 
          we want to compute the standard deviation. The result is 
          to be placed in B27. At B27 enter:

                             STDEV(B7:B26)

          After recalculation, B27 contains the standard deviation 
          of the range.
 




                                                                  129












-







SUM



                              SUM Function


Purpose:  Sums a range of numbers and returns the result to the 
          current cell or formula.

Format:   SUM(A1:A20)      Sums a column of numbers

          SUM(A1:E1)       Sums a row of numbers

          SUM(A1:D20)      Sums a block of numbers

Remarks:  SUM(m:n) can be entered into a cell, causing the 
          specified range to be added up, and used as the cell 
          value. Or the SUM function can be used in a formula. 
           
          The coordinate range specified in a SUM function may be 
          down a column, such as SUM(A1:A20), it may be across a 
          row, such as SUM(A1:E1), or it may be a block of cells 
          (designated by the upper-left and lower-right 
          coordinates), such as SUM(A1:D20).

Example:  EXAMPLE #1: Column B has a string of numbers from B7 
          to B26 which are to be added up. The result is to be 
          placed in B27. At B27 enter:

                             SUM(B7:B26)

          After recalculation, B27 contains the sum. 

 
          EXAMPLE #2: A spreadsheet has a block of expense 
          dollar amounts, running from C8 to J15. These are to be 
          subtracted from the gross profit figure in C6, and the 
          result is to be printed in C17. Move the cell cursor to 
          C17 and enter:
         
                            C6-SUM(C8:J15)



130












-







                                                               TAN



                            TAN Function


Purpose:  Computes the trigonometric tangent of a value, cell or 
          formula and returns the result to the current cell or 
          formula. 


Format:   TAN(.7854)       Returns 1 
         
          TAN(A1)          If A1 = .7854, returns 1 
         
          TAN(A1*2/B5)     Resolves formula, then computes tangent
         
         
Remarks:  TAN(x) can be entered into a cell, causing the tangent of 
          a number to be computed, and used as the cell value. Or 
          the TAN function can be used in a formula, and/or may 
          have a formula as its argument.
           

Example:  Set up a simple spreadsheet which allows a value in 
          radians to be entered, and returns the tangent:

                         A1:  Radians:
                         A2:  Tangent:
                         B1:  .7854 
                         B2:  TAN(B1)

          When a value is typed into B1, the tangent is displayed 
          in B2. Enter .7854 in B1, and 1 is returned in B2. Now 
          change the spreadsheet so degrees can be entered instead 
          of radians:

                         A1:  Degrees:
                         A2:  Tangent:
                         B1:  45 
                         B2:  TAN(B1*3.14159/180)                    



                                                                  131












-







TITLE



                         TITLE Command (/T)


Purpose:  Locks spreadsheet titles along the top of the screen 
          and/or along the left side, so they remain in view.
         

Prompts:  Begin by moving the cell cursor to the line just below 
          and/or the column to the right of the titles to be 
          locked; i.e. the first "unlocked" cell. Then enter /T and 
          you are prompted:

                 Horizontal, Vertical, Both or None.

          To lock one or more title lines at the top of the screen, 
          enter "H". To lock one or more columns along the left 
          edge of the screen, enter "V". To lock titles both 
          vertically and horizontally, enter "B". 


Remarks:  Title locking may be turned off with the /TN command, 
          or it may be turned off by using the = (Goto) option to 
          jump to a cell above, or left of, the locked titles. 


Example:  The following spreadsheet fills up the screen and 
          overflows both to the right and the bottom: 

                 A         B         C         D         E    
           1             Jan 85    Feb 85    Mar 85    Apr 85 
           2 Oregon         540
           3 Florida                  441
           4 New York                                     662
           5 Illinois       293

          Whenever we scroll downward off the bottom of the screen, 
          the month names on line 1 disappear. Scrolling to the 
          right causes the state names to disappear. To lock both 
          the months and states so they always remain on the 


132












-







                                                           TITLE


          screen, move the cell cursor to B2, enter /T B 
          (/Title,Both). To lock only the months, move the cell 
          cursor anywhere on line 2 and enter /T H 
          (/Title,Horizontal). To lock only the state names, move 
          the cell cursor anywhere in column B and enter /T V 
          (/Title,Vertical).




































                                                                  133












-







UTILITY



                        UTILITY Command (/U)


Purpose:  Allows files to be deleted or renamed, and allows the user 
          to temporarily exit to DOS, then return to CALC, without 
          saving the current spreadsheet.



Prompts:  Enter /U and the following prompt is displayed: 

             Delete a file, Rename a file, or Shell to DOS.

          If you press D, you are prompted for the drive and path, 
          then a window lists all the files in the specified path. 
          Use the down arrow or up arrow to select a file, or type 
          the file name and press ENTER. The file is deleted. 

          If you press R, you are prompted for the drive and path, 
          and a window lists all the files. Use the down arrow or up 
          arrow to select one, or type the name of the file to be 
          renamed. The third prompt asks for the new name the file 
          is to be given.

          If you press S, the screen is cleared and the following is 
          displayed:
          
                      Type EXIT to return to CALC.

                      C:CALC>
          
          At this point you are back at DOS, although CALC is still 
          in memory. You can use any DOS command, and can even run 
          some small programs, provided they don't use much memory. 
          When you are finished, type EXIT to return to CALC.






134












-







                                                       WINDOW



                        WINDOW Command (/W)


Purpose:  Allows the spreadsheet screen to be split into two 
          "windows", either vertically or horizontally. This permits 
          you to look at two parts of a spreadsheet at the same 
          time. 

Prompts:  Enter /W and the following prompt is displayed:

          Horizontal, Vertical, Off, Synchronized, Unsynchronized

          Press H to split the screen horizontally into two windows. 
          The screen is split at the line the cursor is on. To make 
          the upper window larger, move the cursor further down the 
          screen first. The cell cursor remains in the lower window. 
          It can be moved to the upper window by pressing the semi-
          colon (;) key. Press ; a second time to return the cell 
          cursor to the lower window.

          Press V to split the screen vertically into two windows. 
          The screen is split at the column the cursor is on. To 
          make the left window larger, move the cursor further to 
          the right of the screen first. The semicolon key moves the 
          cursor between windows.

          Press O to turn off windowing and return to the normal 
          screen. 

          Press S to synchronize the windows. When horizontal 
          windows are synchronized, both windows always display the 
          same columns. When vertical windows are synchronized, both 
          windows always display the same lines. 

          Press U to unsynchronize the windows. When windows are 
          unsynchronized, scrolling around in one window leaves the 
          other window unchanged. Unsynchronized is the default. 




                                                                  135












-







XTERNAL



                        XTERNAL Command (/X)


Purpose:  Reads data from another CALC spreadsheet, or from a 
          File Express or PC-FILE database, and places the data into 
          the current cell. 

Prompts:  Position the cell cursor on the cell which will contain 
          the data, then enter /X. You are prompted:

                Enter C to get data from a spreadsheet. 
                Enter F to get data from a database. 

          The Xternal command can reach into a spreadsheet file, or 
          a database and extract data. Enter C or F to indicate the 
          type of file. Subsequent prompts are specific to either 
          spreadsheets or databases.

          CALC Spreadsheet
          If you replied "C" to the previous prompt, the next 
          prompt is: 

               Enter the drive and path name (optional).

          Specify the drive and path where the calc spreadsheet is 
          located, then press ENTER. There is a brief pause while 
          the directory is read, then a window appears displaying 
          spreadsheets with .CAL extensions. This prompt appears:

            Enter the name of the CALC spreadsheet to be read.

          Use the down arrow and up arrow to select a file, or type 
          the name of the file and press ENTER. The next prompt is:
         
                      Enter the cell to be read.

          Any cell coordinate from A1 to BL256 is valid. After 
          pressing ENTER, the message "Stand by. Search in 
          progress." is given, and CALC searches the file for the 


136












-







                                                      XTERNAL


          specified cell. When the cell is found, its data is placed 
          in the current cell of your spreadsheet. If the data is 
          text, it appears as text in your spreadsheet. If it is a 
          value or formula, it appears as a value in your spread-
          sheet. Format items, such as decimal places, justifica-
          tion, etc. are not copied. The data can be formatted as 
          desired using the /Format command.

          If the requested cell has no data, a warning message is 
          given. The ERROR designation is placed in the current 
          cell, and the cell's contents are the words NO DATA. 

          The Xternal command only goes one level deep in its search 
          for data. In other words, if the requested cell is also an 
          external reference to a third spreadsheet, CALC does not 
          access the third spreadsheet. It extracts the value of the 
          specified cell as of the last time it was saved. 

         
          Database
          If you replied F to the first prompt, the next prompt is: 

               Enter the drive and path name (optional).

          Specify the drive and path where the database is located, 
          then press ENTER. There is a brief pause while the 
          directory is read, then a window appears displaying all 
          the databases. The following prompt appears:

              Enter the name of the database to be accessed.

          If the database is on a disk other than the default 
          drive, its name may be prefixed by the drive letter and a 
          colon (for example, A:CUST). If the database cannot be 
          found, a message is given. Otherwise, this prompt appears: 

            Field to search?
            (Enter field name, or press TAB/BACKTAB to rotate
            through the field names.)



                                                                  137












-







XTERNAL


          You can enter a field name at this time, or press the TAB 
          key, which displays each of the field names in the 
          database consecutively. When you find the field name you 
          want, press ENTER to go on to the next prompt. Note: when 
          typing the field name, it is not necessary to type the 
          entire name. CALC will find the first field name that 
          matches the characters you entered. Also, CALC ignores 
          upper and lower case, converting everything to upper case 
          before comparison. Now the next prompt:

                              Look for?

          Enter the character string to be searched for. For 
          example, if you are searching a customer file and you 
          specified "customer number" as the "field to search", 
          then enter the customer number here. CALC compares 
          for the length of the data entered; i.e. if you enter 
          ABC, CALC finds the record whose search field 
          starts with ABC. 

          The next prompt is: 

          If there is more than one record which matches search
          data, which one should be used? (1 to 999, or ALL.)

          Normally the response to this prompt is 1, which tells 
          CALC to read the first matching record it finds. The 
          1 has already been filled in as the default, so just 
          press ENTER. However, if there are multiple matches in 
          your file, and you want to bypass the first two records, 
          enter 3, and CALC skips the first two records. 

          Or the word ALL can be entered in response to this 
          prompt, causing all matching records to be read, and 
          numeric fields totalled. If the retrieved field (next 
          prompt) is a numeric field, the total of that field from 
          all matching records is put into the current cell of your 
          spreadsheet. See the examples below for more discussion 
          of the "ALL" option.



138












-







                                                      XTERNAL


          The final prompt is:

                          Field to retrieve?

          This is the name of the database field whose contents are 
          to be placed in your spreadsheet's current cell. Just as 
          above, with the "field to search" prompt, you can use the 
          TAB and BACKTAB keys to rotate through the valid field 
          names. When you find the field name you want, press 
          ENTER to go on to the next prompt. Note: when typing the 
          field name, it is not necessary to type the entire name. 
          CALC finds the first field name that matches the 
          characters entered. Also, CALC ignores upper and 
          lower case, converting everything to upper case before 
          comparison. 
         
          If the retrieved field's name ends with a "#", the data 
          is placed in your spreadsheet cell as a value. Otherwise 
          it is placed in the cell as text. 
         
          If no record is found which matches the requested 
          search, a warning message is given, and the ERROR 
          condition is set for the cell. 

         
Remarks:  External references are not limited to just one 
          spreadsheet or database. Any number of external 
          spreadsheets and/or databases can be accessed from a 
          single spreadsheet. The speed of the accesses varies 
          depending on the number of different spreadsheets and 
          databases being accessed, and the sizes of those 
          spreadsheets and databases. 
         
          The fields entered in a /Xternal command are saved with 
          the cell contents, just as a formula is saved with its 
          cell. When the cell cursor is moved to a cell with an 
          external reference, the external reference parameters are 
          displayed beneath the cell contents. 
         
          To change one or more parameters in an external 


                                                                  139












-







XTERNAL


          reference, move the cell cursor to the cell to be 
          changed, and enter /X. The normal /X prompts are given, 
          but the parameter values are already filled in for you on 
          the command line. Just press ENTER until you come to the 
          parameter to be changed, then type the new value. 
         
          To delete an external reference, simply enter another 
          value in the cell, or use the /Blank command to clear the 
          cell's contents.
         
          Cells with external references can be referenced in 
          formulas and functions just like any other cells. 
          External references are saved with the cell's data at 
          /Save time, and reloaded at /Load time. One additional 
          step takes place at /Load time: each external reference 
          is re-resolved; i.e. the data is looked up again in the 
          referenced spreadsheet or database. If the data has 
          changed since the last /Save, the new data is 
          substituted. Of course, this means that a spreadsheet 
          with external references take longer to load. It also 
          means that the externally referenced files must be online 
          in order to load the spreadsheet.
       

Example:  EXAMPLE #1: Preparing a profit and loss statement using 
          CALC, we realize that the expense totals to be 
          displayed are already in another spreadsheet. They are 
          the total lines of the detail spreadsheet called 
          CHEKBOOK, and are in cells B65 through G65. Since 
          CHEKBOOK is updated every month, we can use external 
          references to pull the data into our monthly P & L, and 
          eliminate the need to re-key the data each month. 
          Starting with the first expense, wages and salaries, move 
          the cursor to C18 where the dollar amount is to be 
          displayed. If any extra formatting is to be done, such as 
          leading dollar signs, etc. it can be done now, or after 
          the data is retrieved. Now enter:

                          /X C CHEKBOOK B65
         


140












-







                                                      XTERNAL


          CALC finds the spreadsheet called CHEKBOOK, and 
          retrieves the contents of cell B65. Since B65 contains a 
          dollar amount, that amount is put into cell C18 of our P&L 
          spreadsheet as a value, rather than text. To retrieve the 
          remaining expense amounts into cells C19 through C23, we 
          repeat the /X command above, referencing cells C65 through 
          G65. The command must be retyped for each cell. There is 
          no Replicate command for external references (not yet, 
          anyway). When finished, we can show the total expenses 
          either by retrieving them from CHEKBOOK using /X, or we 
          can simply total up the numbers in C18 through C23 using 
          the SUM(C18:C23) command. 

          EXAMPLE #2: Working on the same P & L described in 
          example 1, we now want to show the total sales for the 
          month, in two categories: retail sales and wholesale 
          sales. All the sales invoices for the month have been 
          entered into a File Express database called MTDSALES, with 
          invoice number, date, customer number and amount. The 
          first three letters of the invoice number are "RTL" for 
          retail sales and "WHL" for wholesale sales. Start by 
          moving the cell cursor to the cell where the retail sales 
          amount is to be displayed. Now enter /X and respond to 
          the prompts as shown: 

                  CALC or FILE:          F
                  Name of database:      MTDSALES
                  Field to search:       Invoice number
                  Look for:              RTL
                  Which one:             ALL
                  Field to retrieve:     Amount#

          Now we wait for a few seconds while CALC reads 
          the database. Since we specified ALL, it will read every
          record whose invoice number starts with RTL, and total up 
          the Amount# field. When the search is done, the sum of 
          Amount# from all the RTL records appears on our 
          spreadsheet in the current cell. To print the total 
          wholesale sales, move down one cell and enter the same 
          /X command as above, but substituting WHL for RTL. 


                                                                  141












-







ZAP




                          ZAP Command (/Z)


Purpose:  Clears the spreadsheet area and resets all the system 
          defaults. 


Prompts:  Enter /Z and you will be prompted:

                     Clear contents? (Y or N).

          To clear the current contents of every cell, and reset 
          all the system defaults, enter "Y". To leave the current 
          spreadsheet as is, reply "N" or ESCAPE. 


Remarks:  If the spreadsheet currently in memory has not been 
          saved, it will be lost. Use the Save Command (/S) to save 
          the spreadsheet before exiting. To prevent accidental 
          loss of data, CALC asks for confirmation (Clear 
          contents?) before clearing.

          An alternate method of clearing memory is to use the /Q 
          command to exit to the operating system, then restart 
          CALC. 


Example:  The spreadsheet currently on the screen has been saved on 
          disk. The spreadsheet area is to be cleared. Enter:

                                /Z Y

          A message appears saying Clearing contents. Stand by... 
          and after a pause, a blank screen appears with the cursor 
          at A1 and the column widths reset to the default length. 





142









 



```
{% endraw %}

## CALC4.DOC

{% raw %}
```







                                                CUSTOMIZING CALC



                          Customizing CALC

One of the unique features of CALC is its ability to be tailored 
to individual preferences and environments.

Early versions of CALC were not very flexible. Like any good 
software authors, before we started, we discussed the merits and 
drawbacks of some other spreadsheet products. Then we borrowed 
some concepts here and there, added a bit of our own creativity, 
and started writing the programs.

But many early CALC users had already used other spreadsheet 
products. They were switching to CALC for many reasons: more 
features; easier to use; compatible with other software; etc. As 
letters and user response forms poured in, these early users quickly 
delivered their message: 

       "We sure wish CALC worked more like ________."

(Fill in the blank with just about every spreadsheet product that 
exists, and you begin to get the picture.)

But it wasn't the internal features of the other brands, or the way 
the manual was organized, or the names used for math functions. 
What people wanted was for CALC's "user interface" -- the 
keyboard and screen link to the user -- to look similar to other 
products they had seen or used. 


   "I think the message and entry line should be at the top of
    the screen, not the bottom." 

   "Sure wish the arrow keys worked like they do in KillerKalc."

   "How about letting us enter @SUM instead of SUM? It would 
    really cut down on my FORMULA ERROR messages."

   "Will it work on my BelchFire 3-PC? Its screen is 64 by 16."



                                                                  143




















CUSTOMIZING CALC


And the list goes on and on. So for the last two years we have 
continued to add features, and still the requests pour in. This 
version of CALC is so full of optional features and 
customization capabilities, we have devoted an entire section of 
the User Guide to it. This is it. 


Profile (.PRO) Files
There is a file on the CALC distribution diskette which 
demonstrates a profile in its simplest form. The file is called 
BW.PRO, and if you were to print it or type it, this is all you 
would see: 
                        BLACK AND WHITE

Users with black and white monitors have already discovered this 
file, or maybe have used it unwittingly. To start CALC for the 
first time on a computer with a black and white monitor it is 
necessary to type:

                             CALC BW

The BW on the DOS command line tells CALC to go find a file 
called BW.PRO, read all the commands in it (only one in this case), 
and change CALC's configuration accordingly. 

Another important step is performed before BW.PRO is read: 
CALC tries to find a file called CALC.PRO. If found, 
it is read first, and all the commands in it are processed, even if 
no profile name is typed on the DOS command line. So, hey, 
monochrome users: you don't have to remember to type BW everytime 
you start up CALC. In DOS, just:

                     RENAME BW.PRO CALC.PRO

Now when you start CALC it is not necessary to say BW; it is in 
CALC's "automatic" profile. 

What if you want to specify two or more different options in the 
profile? For an example of that, take a look at another file that 



144




















                                                CUSTOMIZING CALC


sets three profile options: 

                        BLACK AND WHITE
                        SCREEN LAYOUT EMD
                        COLUMN WIDTH 8

Any .PRO file can have any number of profile commands in it. Just 
put them each on a separate line, with a carriage return/line feed 
following them.

A CALC profile command can also start with a slash. The slash is 
optional when there is only one profile command per line. The 
following form is acceptable too:

     BLACK AND WHITE;/SCREEN LAYOUT EMD;/COLUMN WIDTH 8

In this mode, CALC looks for a semicolon/slash pair to mark the 
end of a command, so if you put multiple commands on the same line, 
put a semicolon and slash between them (with no space between the 
semicolon and slash). 

If CALC finds a profile command that it doesn't recognize or 
that has bad data,  the command is displayed on the screen and a 
message is given: 

The .PRO file contains a statement which is not valid. 
Press ENTER to ignore the statement and continue. Press Control-C
to return to DOS. Or re-type the statement and press ENTER. 

That about covers profile files. Now let's discuss the lines inside 
the profile -- profile commands.


Profile Command Summary
Let's start by listing all the valid commands that can go into a 
profile. They are listed in groups by function. Following this 
section is a detailed discussion of some of the more exotic and 
complex commands. 




                                                                  145




















CUSTOMIZING CALC


                          PROFILE COMMANDS 

Screen configuration
VIDEO TYPE xxx           Mono, CGA, EGA, VGA or Other.
MAXIMUM COLUMNS n        Overrides 64 columns 
MAXIMUM LINES n          Overrides 256 lines 
SCREEN WIDTH n           Overrides 80 column screen width
SCREEN LINES n           Overrides 25 lines on screen
COLUMN WIDTH n           Overrides 11 character column width default
SCREEN LAYOUT xxx        Overrides DME (Display, Message, Entry)
DISPLAY SLOW             Use ROM BIOS calls (for some compatibles)
ROMBIOS                  Use ROM BIOS calls (same as Display Slow)
GRAPH1 SCREEN x          Screen display character for bargraph 1
GRAPH2 SCREEN x          Screen display character for bargraph 2
GRAPH3 SCREEN x          Screen display character for bargraph 3
BRACKETS xy              Override () characters on negative numbers
                         
Keyboard interface
SMART CURSOR             Smart cursor on at startup
OLD CURSOR               Cursor keys work like version 2.0
QUOTE ON TEXT            Require quotation mark on text (like 2.0)
NO QUOTE ON TEXT         No " on text, but formula starts with 0-9,+
TRANSLATE x TO yyy       Translate keyboard character to string 
                         (This is how smart keys are stored)
KEYIN xxx...             Initialize keyboard buffer with this string
INSERT ONE SPACE         Insert key inserts one space; no toggle 

Screen colors
BLACK AND WHITE          Set colors to black/white and white/black
BORDER COLOR x ON y      Set border color
DISPLAY COLOR x ON y     Set display area color
MESSAGE COLOR x ON y     Set message area color
ENTRY COLOR x ON y       Set entry line color
CURSOR COLOR x ON y      Set cell cursor color
PROTECT COLOR x ON y     Set color of protected cells
GRAPH1 COLOR x ON y      Set color of bar graph 1
GRAPH2 COLOR x ON y      Set color of bar graph 2
GRAPH3 COLOR x ON y      Set color of bar graph 3
WINDOW COLOR x ON y      Set color of file name window



146




















                                                CUSTOMIZING CALC


                          PROFILE COMMANDS 

Global defaults
MANUAL CALCULATION       Set automatic recalculation off at startup
BORDER OFF               Turn off the screen border at startup
COLUMN CALCULATION       Calculate down columns, not across rows
DEFAULT DECIMALS n       Override default two decimal places
DEFAULT FLOATING         Default to floating decimal places
DEFAULT SCIENTIFIC       Default to scientific notation 
DEFAULT JUSTIFY x        Default to left, right or center justification
DEFAULT NO COMMAS        Default to no commas between thousands
DEFAULT GRAPHICS n       Default to graphic format n on numbers
DEFAULT $                Default to display floating dollar sign 
DEFAULT (                Default to parentheses on negative numbers
DEFAULT %                Default to percent sign on numbers
DEFAULT ZERO BLANK       Default to blanking out zero fields
GLOBAL FORMULAS          Default to display formulas in cells
                         

Print configuration
PRINTER WIDTH n          Override 80 char. wide default
LINES PER PAGE n         Override 58 line default
PRINTER OFFSET n         Override 7 character default
DOUBLE SPACE             Override single spacing default
TOP MARGIN n             Override 2 line default 
COPIES n                 Override single copy default
HEADING TOP n            Specify heading starting line 
HEADING BOTTOM n         Specify heading ending line
FOOTING TOP n            Specify footing starting line
FOOTING BOTTOM n         Specify footing ending line
PRINTER 10 CPI xx...     String to set printer to 10 char. per inch
PRINTER 12 CPI xx...     String to set printer to 12 char. per inch
PRINTER 17 CPI xx...     String to set printer to 17 char. per inch
PRINTER 6 LPI xx...      String to set printer to 6 lines per inch
PRINTER 8 LPI xx...      String to set printer to 8 lines per inch
PRINTER INIT xx...       String to send to printer before /Print
TRANSLATE PRINT TO       Translate a printed character to a string
GRAPH1 PRINT x           print character for bargraph 1
GRAPH2 PRINT x           print character for bargraph 2
GRAPH3 PRINT x           print character for bargraph 3


                                                                  147




















CUSTOMIZING CALC


                          PROFILE COMMANDS 

Sort commands
SORT SPACE               Sort sequence: text starting with space 
SORT SPECIAL CHAR n      Sort sequence: text starting with sp. char. 
SORT LOWER CASE n        Sort sequence: text starting with letter
SORT UPPER CASE n        Sort sequence: text starting with letter
SORT NUMERALS n          Sort sequence: text starting with numeral
SORT NEGATIVE n          Sort sequence: negative value or formula
SORT ZERO n              Sort sequence: zero value or formula
SORT POSITIVE n          Sort sequence: positive value or formula
SORT EMPTY n             Sort sequence: empty cells 
SORT Aa                  Sort upper case ahead of lower case
SORT IGNORE CASE         Sort lower case and upper case together


Other commands
PRINTER NAME             Brand of printer (used in some prompts)
ITERATIONS n             Repeat calculation n times
DEFAULT DRIVE            Default disk drive and path 
DEFAULT EXTENSION        Default file extension (such as .CAL)
PROMPT                   Prompt for entry of profile commands
ON EXIT RUN program      On /Quit, run a specified .EXE program
NO ROUND                 Don't round results after calculation
NO WINDOW                Don't display window with file names
 


SCREEN CONFIGURATION
If CALC is already running on your computer, the easiest way to 
configure the screen is to use the /Configure command. /Configure 
allows you to see the changes immediately on the screen. When you 
have it just the way you want it, do a /Configure, Save, which 
creates a .PRO file with a name you specify. 

But maybe you have a computer that CALC can't run on until it's 
configured. If that is the case, you can't run the /Configure 





148




















                                                CUSTOMIZING CALC


command. Two .PRO files are provided on the distribution diskette 
for just this occasion:

                          BW.PRO
                          SL.PRO

The purpose of each of these files is explained in the "Getting 
Started" section.
All the screen configuration options are discussed in the 
/Configure section of the Alphabetical Reference. It is a good idea 
to read that section even if you plan to use .PRO files rather than 
/Configure. The only screen command which can not be set with 
/Configure is the BRACKET xy command. This command allows you to 
specify different characters for enclosing negative numbers. The 
system default is BRACKET () but you might want to specify:

                          BRACKET <>
                          BRACKET []
                          BRACKET {}


SMART CURSOR/OLD CURSOR
SMART CURSOR is explained under /Global, Smart-cursor in the 
Alphabetical Reference section. 

OLD CURSOR causes the arrow keys to work as they did in versions 
1.0 and 2.0 of CALC: Only the ENTER key can terminate a field. 
Pressing left- or right-arrow while entering data does not move the 
cell cursor; it moves the data cursor one character to the left or 
right, like the backspace and tab keys. The up- and down-arrow keys 
have no effect during data entry. The old method is no longer the 
default, because most spreadsheet programs allow you to terminate a 
field and move the cell cursor with a single keystroke. 









                                                                  149




















CUSTOMIZING CALC


QUOTE/NO QUOTE
QUOTE ON TEXT requires that all text fields be started with a 
quotation mark. Anything without a quotation mark is considered to 
be a value or formula. This is the way version 1.0 and 2.0 worked.

NO QUOTE ON TEXT is a popular way to differentiate between 
text and formulas. No quotation mark is required on text unless the 
text starts with a numeric digit or a plus or minus sign. Any field 
that does not start with a numeric digit or plus or minus is 
assumed to be text. The drawback to this method is that a formula 
like A1+B1 will be taken as text, so it needs a plus sign at the 
front to identify it as a formula: +A1+B1.  

There are tradeoffs between QUOTE ON TEXT and NO QUOTE 
ON TEXT. Would you rather remember to put a quotation mark on 
your text, or a plus sign on formulas that start with a letter? 
With these .PRO options you can suit yourself.

The default method of differentiating text from formulas is 
preferred by many, but still has its drawbacks. If neither of the 
two options above are specified, and there is no " mark at the 
front, CALC takes your data string and runs it through the 
formula handler. If it comes back without a formula error, it is 
considered a formula (or value). If it comes back with a formula 
error it is considered text. There are two pitfalls here: 

(1) many text fields look suspiciously like formulas: 1985, for 
    example, or 8/24/85 will get processed as a formula unless you 
    remember to enter a quotation mark first. 

(2) If you make an error in your formula, such as mismatched 
    parentheses, the data is considered text, and placed in the 
    cell as such. So instead of a number, you may have a funny 
    looking formula in the middle of your balance sheet. It only 
    takes three strokes (/E (ENTER)) to get it back on the entry 
    line, assuming you notice it is wrong. 






150




















                                                CUSTOMIZING CALC


As you can see, there are no easy choices for differentiating text 
from formulas. If anybody out there knows of a better way (not just 
another way, please, but a better way) please advise. In the 
meantime, you have your choice of three popular methods. You pick. 


TRANSLATE
TRANSLATE x TO yyy... is a useful means of translating a 
keyboard character into another character or string. The most 
popular use of this command is for Smart Keys; see /Configure,Keys 
for a discussion of them. But TRANSLATE can serve other purposes: 

* If you use the greek alphabet characters, you might translate 
  Ctrl-a to an alpha symbol, Ctrl-b to beta, etc. so you don't have 
  to look up or remember the ASCII value for each of the symbols. 

* If you work with some of the foreign language characters, it may 
  be easier to remember Ctrl-e is an e with an acute accent; Alt-e 
  is an e with a grave accent, rather than ASCII 130 and 138.

The first parameter of TRANSLATE specifies the keyboard character 
to be translated. If it is more than one character long, only the 
first character is used. The second parameter can be any length, 
and is delimited by "TO" on the left and carriage return/line feed 
on the right. 

If a carriage return (ENTER key) character is part of the 
TRANSLATE string, use [13] to designate carriage return. Use 
[8] to designate backspace. The numbers enclosed in brackets are 
the ASCII values for carriage return and backspace. There are 
several characters which you may want to use, for either the first 
parameter or in the second parameter string, which cannot always be 
typed into a string. Some special keys return an "extended code" 
which is two characters long. For those keys, add the extended code 
to 256 and enclose the number in square brackets. A table of 
extended codes is in the back of the BASIC reference manual. A few 
of the popular key values are listed here. To duplicate the 
character shown on the left, use the ASCII sequence in square 
brackets shown on the right. Any character's ASCII value can be 
enclosed in square brackets, but these are some that 


                                                                  151




















CUSTOMIZING CALC


must be:

      Backspace         8           Up arrow        328
      Tab               9           Down arrow      336
      Line feed        10           Left arrow      331
      ENTER (CR)       13           Right arrow     333
      Backtab         271           Insert          338
      Home            327           Delete          339
      End             335


Here is an example of a translate statement which converts the 
ESCAPE key (ASCII 27) to the string /QY (ENTER): 

                  TRANSLATE [27] TO /QY[13]

Since ESCAPE already has a special meaning in CALC, you will 
need to use CONTROL-C to cancel commands. Or you could choose 
another key and have it generate an ESCAPE code. That may be 
getting a bit extreme, unless you are trying to duplicate a unique 
set of keyboard conventions. 

A maximum of fifty TRANSLATE strings can be specified. They 
can be any length, but if exceptionally long, they may cause an out 
of memory condition. 


KEYIN
The string following the KEYIN command is sent to the keyboard 
buffer when CALC is started. It works similar to a smart key, 
but doesn't require pressing a key at startup. Any string that is 
valid in the second parameter of TRANSLATE may be used in 
KEYIN. Special characters must have their ASCII value enclosed in 
square brackets (see TRANSLATE).








152




















                                                CUSTOMIZING CALC


SCREEN COLORS
The recommended way to configure screen colors is with the 
/Configure command. It allows you to see the colors as you 
configure them, and then you can save the color profile commands 
with /Configure,Save. It is possible, but cumbersome, to configure 
colors by typing profile commands. For example: 

             BORDER COLOR LIGHT MAGENTA ON CYAN

Any of the sixteen colors can be used for the first (foreground) 
color. Only the eight colors on the left can be used for the second 
(background) color:

                   Black          Gray         
                   Blue           Light Blue   
                   Green          Light Green  
                   Cyan           Light Cyan   
                   Red            Light Red    
                   Magenta        Light Magenta
                   Brown          Yellow       
                   White          Bright White 

                
GLOBAL DEFAULTS
Global defaults are described in detail in the /Global and /Format 
command sections. They can be configured by using /G and /F to set 
them, then doing a /Configure,Save or they can be typed directly 
into a .PRO file. 


PRINT CONFIGURATION
Most of the printer configuration options are explained in the 
/Print command section. They can be configured by using /Print 
to set them, then doing a /Configure,Save or they can be typed 
directly into a .PRO file. 
                     
The PRINTER CPI and LPI profile commands are followed by an 
ASCII string of any length. Rules for entering the ASCII string 
are the same as the rules for entering the TRANSLATE TO string 
(see above).


                                                                  153




















CUSTOMIZING CALC


TRANSLATE PRINT x TO y takes every character coming from 
a CALC spreadsheet and going to a printed report and compares it 
to the translate table. If a character matches, the translation is 
made. The same rules discussed above for the TRANSLATE command 
apply to the parameters of TRANSLATE PRINT. A maximum of fifty 
translate strings can be specified. Heavy use of this feature can 
slow down /Print noticeably. 


ITERATIONS
When CALC calculates, it makes only one pass through the 
formulas. For some applications, especially those with "forward 
references", it is necessary to make a second pass through the 
formulas, since they refer to formulas that were not calculated on 
the first pass. It is possible to set the ITERATIONS to a large 
number if there are computations which get increasingly accurate 
with each recalculation.


NO ROUND
When calculating a formula, CALC first computes the result to 
several decimal places, then rounds the result to the number of 
decimal places specified for the cell. This extra rounding step is a 
feature which most other spreadsheet programs do not offer. Many 
other spreadsheet programs, in order to improve their calculation 
speed, do not automatically round each formula to the specified 
number of decimal places. There is a profile option for CALC users 
who are willing to sacrifice some rounding accuracy in exchange for 
faster calculation. By including NO ROUND in the profile, 
calculation speed is improved by 20%, but accuracy may affected.


BARGRAPH CONFIGURATION
The /Format, Bargraph command allows cells to be displayed in 
horizontal bargraph format. Three aspects of bargraphs can be 
changed: the color, the screen character and the print character. 

The easiest way to change bargraph colors is with the /Configure 
command, so you can see the colors on the screen. It's a good idea 
to have a sample spreadsheet with bargraphs on the screen when 


154




















CUSTOMIZING CALC


/Configuring. Or the colors can be entered into a .PRO file 
directly. See "Screen Colors" above. 

To change a bargraph character, use the GRAPHn SCREEN x or 
GRAPHn PRINT x commands, where n is 1 to 3, and x is any 
displayable character; x may also be an ASCII value enclosed
in square brackets. The default bargraph characters on the 
CALC distribution diskette are: 

                         GRAPH1 SCREEN [178]
                         GRAPH2 SCREEN [219]
                         GRAPH3 SCREEN [176]
                         GRAPH1 PRINT *
                         GRAPH2 PRINT ]
                         GRAPH3 PRINT /

If your printer is capable of printing graphic symbols, you may 
want to use them instead of ****, ]]]] and ////. IBM graphics 
printers and compatibles can specify the same character as the 
screen character, so printed bargraphs will look similar to the 
ones on the screen. There are dozens of characters that can be 
used on the screen for bargraphs. The back of the BASIC manual 
has an ASCII table with a picture of each character. Your printer 
manual should have a similar table of printable characters. You 
might experiment with different characters. How about gross sales 
graphed in dollar sign characters (GRAPH1 SCREEN $). Or net 
profits graphed with happy faces (GRAPH2 SCREEN [1]). 


SORT CONFIGURATION
The /Arrange command has a sort precedence which you may want to 
override. Perhaps you want empty cells to sort at the end. Or you 
want special characters to all be at the beginning. While sorting, 
CALC puts a number at the front of each cell to indicate 
the type of data the cell contains. This number prefix is sorted 
with the data. The prefix number may be overridden with one of the 






155




















                                                CUSTOMIZING CALC


sort sequence profile commands. The defaults are:

                       SORT SPACES 20
                       SORT SPECIAL CHAR 30
                       SORT LOWER CASE 40
                       SORT UPPER CASE 40
                       SORT NUMERALS 50
                       SORT NEGATIVE 60
                       SORT ZERO 70
                       SORT POSITIVE 80
                       SORT EMPTY 90
                       SORT aA

The prefix numbers are assigned by tens so there is space between 
them for renumbering. For example, to sort values first, use: 

                       SORT NEGATIVE 1 
                       SORT ZERO 2 
                       SORT POSITIVE 3 

Note that upper-case (capital) letters and lower-case (small) 
letters are both assigned the same sort precedence. Specifying a 
lower number for upper-case will cause all upper-case letters to 
sort before all lower-case letters. If both have the same 
precedence, they will be sorted together like this: a, A, b, B, etc.
If you prefer: A, a, B, b, etc. use the SORT Aa profile command.
If lower case and upper case are to be sorted together as if they 
were not different, use the SORT IGNORE CASE command.

To ignore the sign on a value, (i.e. sort the absolute value), 
assign NEGATIVE and POSITIVE the same prefix numbers: 

                       SORT NEGATIVE 80
                       SORT ZERO 70
                       SORT POSITIVE 80

The prefix number can be any integer from 0 to 255. On text fields, 
sort precedence applies only to the first letter of text. After the 
prefix number, the text field is sorted in upper-case ASCII 
sequence. 


                                                                  156




















CUSTOMIZING CALC



If straight ASCII sequence is required on text fields, simply 
assign all text fields the same prefix:

                       SORT SPACES 20
                       SORT SPECIAL CHAR 20
                       SORT LOWER CASE 20 
                       SORT UPPER CASE 20 
                       SORT NUMERALS 20

































157




















                                                CALC FILE FORMAT



                          CALC FILE FORMAT

This section is intended for programmers whose programs access data 
in CALC files, or whose programs create CALC files. 

The file format is designed so user programs can access it easily. 
Numbers are stored in string format. Formulas are stored exactly as 
they are entered. Attributes are stored as a string of characters, 
rather than internal binary flags. On cells with formulas, both the 
formula and the computed value are stored, allowing other programs 
to access the result without having to go through any computations.


Reading The File
In Microsoft BASIC, use the LINE INPUT# command to read data 
from the file. All data fields are string format. Numeric data can 
be read into a string workarea, then converted to a double-
precision numeric value using the VAL function. See the sample at 
the end of this section for more details.


Header Record
The first record is the header record. It looks like this:

                          CALC 4.0
 
To verify that the input file is a CALC file, check the first 
four characters of this record for the letters "CALC". The 
"4.0" is the version number of CALC that produced the output. If 
you are creating a CALC file in your own program, it is 
recommended that you use "0.0" through "0.9" in this field, so it 
is evident that the file was not created by CALC, but by another 
program. You can also put descriptive info in the record, starting 
at column 20, to describe the source and/or contents of the file.







                                                                  158




















CALC FILE FORMAT


Cell Contents
Following the header record are the contents of each cell. Only 
those cells that have something in them are saved on disk. Each 
cell is saved as a series of five fields. They are:

     * Cell letter (expressed as a number from 1 to 255)
     * Cell row 
     * Cell attributes (such as left-adjust, decimals, etc.)
     * Cell value 
     * Formula (this field is null on text fields)

To read these fields, start by reading the cell letter. Check to 
see if it equals "END". If it does equal "END", you have reached 
the end of the cell contents fields. Otherwise, read the other four 
fields, using LINE INPUT# commands.


Cell Attributes
The "cell attributes" field is a variable-length field, one or more 
bytes in length. The first byte identifies the type of contents in 
the cell. The first byte may be any one of the following:

            T    = Cell contains text.
            V    = Cell contains a numeric value.
            F    = Cell contains a formula.
          space  = Cell is empty (except for attribute data).


Other bytes of the attribute field are as follows:

      Position 2: Justification 
                  L    = left-justify cell.
                  R    = right-justify cell.
                  C    = center-justify cell.
                space  = use system default.







159




















                                                CALC FILE FORMAT


      Position 3: Decimal positions
                0 to 9 = number of decimal places.
                  :    = 10 decimal places.
                  ;    = 11 decimal places.
                  <    = 12 decimal places.
                  F    = floating decimal places.
                  S    = scientific notation. 
                space  = use system default.

      Position 4: Commas on numbers
                  Y    = Print number with commas.
                  N    = Print number without commas.
                space  = Use system default.

      Position 5: Bargraph format 
                  1    = Print number as graphics string 1.
                  2    = Print number as graphics string 2.
                  3    = Print number as graphics string 3.
                  N    = Print number as a number. 
                space  = Use system default.

      Position 6: Floating dollar sign
                  Y    = Print dollar sign to left of number.
                  N    = Print number without dollar sign.
                space  = Use system default.

      Position 7: Parentheses around negative numbers
                  Y    = Print negative number with parentheses.
                  N    = Print negative number with minus sign.
                space  = Use system default.

      Position 8: Trailing percent sign
                  Y    = Print number with trailing percent sign.
                  N    = Print number without percent sign.
                space  = Use system default.

      Position 9: Cell contains an external reference (from 
                  another spreadsheet or from a database)
                  Y    = Cell contains an external reference.
                  N    = Cell does not contain external reference.


                                                                  160




















CALC FILE FORMAT



      Position 10: Hidden cell 
                  P    = Hidden on printer only.
                  S    = Hidden on screen only. 
                  B    = Hidden on printer and screen. 
                space  = Not hidden. 

      Position 11: Protected cell 
                  Y    = Cell is protected. 
                space  = Cell is not protected.

      Position 12: Print zeros as blanks (spaces)
                  Y    = Print zeros as blanks. 
                  N    = Print zeros as zeros. 
                space  = Use system default.

      Positions 13-20: For future use.


Note that the attribute field is variable length. If attributes on 
the right are blank, the field may be shortened.





















161




















                                                CALC FILE FORMAT


Sample File
For example, a small CALC file with only three cells might look 
like this:

                       CALC 3.0
                       1 
                       1
                       TL
                       Sample Spreadsheet
                  
                       2
                       3
                       V
                       123.00
                       123 
                       3
                       3
                       F
                       246.00
                       B3*2
                       END

In this example the spreadsheet has cells with data at A1, B3 and 
C3. At A1, the cell contains text, because the first letter of the 
attribute is "T". The second letter of the attribute is "L", which 
indicates that the data is to be left-justified in the cell. Cell 
B3 contains the value 123.00, and so its attribute is "V" for 
value. The field with "123" is the actual value that was entered in 
that cell; it may not always be a single number. For example, it 
could contain "100+23". But the field that contains "123.00" will 
always be a single numeric value. To use it in your program, 
convert it to a double-precision number:

                   LINE INPUT# DISKIN,VALUE$
                   VALUE# = VAL(VALUE$)

The formula at cell C3 has a value of 246.00 and a formula of B3*2. 
Since B3 contains the value 123.00, the formula was evaluated by 
CALC and came up with the value 246.00. Finally, the table ends 
with the word "END". 


                                                                  162




















CALC FILE FORMAT



Remaining Fields Optional
The fields explained below, which follow the "END" statement, are 
optional. If the file ends with "END", or with only some of the 
optional fields, CALC will load the fields that are present, and 
use system defaults for the rest.


Column Width
Immediately following the "END" statement are a series of column 
width fields. These fields are numeric integers, with values from 0 
to 75, and they are followed by another "END" statement. The reason 
for this second "END" statement is that the number of columns may 
change when the matrix dimension is reconfigured, and CALC 
needs to know when column width numbers stop.


Other Parameters
Following the column widths are the following parameters:

   * Letter number of cell cursor position (1 to 255)
   * Row number of cell cursor position (1 to 9999)
   * Row/col or col/row sequence setting (0=row, 1=col)
   * Border on/off setting (0=on, 1=off)
   * Default decimal places (0 to 12 or F or S)
   * Default justification (" "=none, L=left, R=right, C=center)
   * Default commas (" "=none, Y=yes, N=no)
   * Zeros as blanks (0=no, 1=yes)
   * Print width (1 to 999)
   * Print length (1 to 999)
   * Print options (D=double space, etc. See print command.)
   * Print page offset (0 to 99)
   * Default graphics (" "=none, Y=yes, N=no)
   * Default dollar sign (" "=none, Y=yes, N=no)
   * Default parentheses on negatives (" "=none, Y=yes, N=no)
   * Default percent sign (" "=none, Y=yes, N=no)
   * Manual calculation setting (1=manual, 0=automatic)
   * Global formula setting (1=formulas, 0=normal display)
   * Top margin (1 to 99)
   * Number of copies (1 to 999)


163




















                                                CALC FILE FORMAT


   * Heading top line
   * Heading bottom line
   * Footing top line
   * Footing bottom line
   * Title locking pointers

As this product is enhanced, more special parameters will be added 
at the end. The program checks for end-of-file as it loads, so if 
some new parameters are missing, the module will still load. It 
will use currently set defaults for the missing parameters. None of 
these parameters are required for the spreadsheet to display, and 
it is recommended that programs passing data to CALC not pass 
these parameters unless it is absolutely necessary. Bad data in one 
of the fields can cause unpredictable results. 


Sample BASIC Subroutine
This routine demonstrates how a program might read a CALC 
file. This routine puts the value of each numeric cell into a two-
dimensional array called TABLE#. The routine assumes that 
housekeeping functions such as opening files, dimensioning arrays, 
etc. have been performed earlier.

1000   LINE INPUT# DISKIN,LETTER$          'Read letter. 
       IF LETTER$ = "END" THEN RETURN      'If END, exit.
       LETTER = VAL(LETTER$)               'Convert to numeric.
       LINE INPUT# DISKIN,LINE$            'Input line number.
       ROW = VAL(LINE$)                    'Convert to numeric.
       LINE INPUT# DISKIN,ATTRIBUTES$      'Read attributes.
       LINE INPUT# DISKIN,VALUE$           'Read value of cell.
       LINE INPUT# DISKIN,FORMULA$         'Read formula.
       TYPE$ = LEFT$(ATTRIBUTES$,1)        'Extract type code.
       IF TYPE$ = "T" THEN RETURN          'Ignore text and
       IF TYPE$ = " " THEN RETURN          'null fields.
       TABLE#(LETTER,ROW) = VAL(VALUE$)    'Put number in table.
       GOTO 1000                           'Loop.






                                                                  164




















ENHANCEMENTS



                          VERSION NUMBERS 
                       AND MAJOR ENHANCEMENTS


CALC 1.0 (January 1984)
     * Enhanced /Print options: page length, titles, borders, 
       offset and setup. 
     * Added support for Home, End, Pg Up, Pg Down keys.
     * Added new global command: Zeros-as-blanks.
     * Added directory display to /Load and /Save commands.
     * Added /Edit command. 
     * Added /Configure command.

  
CALC 2.0 (November 1984)
     * Zero column width for "hidden" columns
     * Sheet-to-sheet linkage allows data to be retrieved into a 
       spreadsheet from another spreadsheet, providing a 
       "3-dimensional" capability.
     * Data in File Express or PC-File databases can be retrieved 
       directly into a cell. No limit to the number of databases 
       that can be accessed by a single spreadsheet. 
     * New formatting options:
         * Center-justify 
         * Floating dollar sign
         * Trailing percent sign
         * Negatives in parentheses or with minus sign
         * Horizontal bar graphs using ******
     * Title locking - vertical, horizontal or both
     * New print options:
         * Output to printer or disk
         * Dot commands for page breaks, conditional page breaks, 
           characters per inch (undocumented).
         * Printer setup strings
     * If...Then function (Nesting permitted)
     * Configure for popular brands of printers
     * Math functions: Absolute value, Arctangent, Cosine, e to 
       the power of x, Integer, True integer, Natural log, Sign, 
       Sine, Square root and Tangent 


165




















                                                    ENHANCEMENTS


     * Statistical functions: Average, Count, Minimum, Maximum
     * Net present value function
     * Column width from 0 to 75
     * Exponentiation in formulas 
     * 110 page reference manual

CALC 3.0 (September 1985)
     * Faster calculation
     * Faster screen display
     * Uses all available RAM memory
     * 64 columns by 256 lines
     * Variable matrix: 256 x 64 to 1 x 9999 
     * Quotation mark not required on text
     * Arrow keys terminate a field and move the cursor
     * ESCAPE key now works like CONTROL-C
     * Smart-cursor (automatic movement in previous direction)
     * AND, OR, NOT logical operators; Modulo operator; % operator
     * New functions: Random number, Lookup, Standard deviation, 
       Payment, Principal, Periods, Rate 
     * Alternate form of IF:  IF x THEN y ELSE z
     * Iterative recalculation option
     * New formatting options:
         * Horizontal bar graphs in three colors/characters
         * Protect/Unprotect cells 
         * Hide cells 
         * Zero-blank cells
         * Up to 12 decimals, or Floating, or Scientific (3E10)
     * Exponential form (3E10) acceptable in formulas
     * Smart keys
     * KEYIN xxx, ON EXIT RUN pgm, TRANSLATE options
     * /Global Formula option displays formulas on-screen
     * .PRO file support
     * /Arrange (Sort) command
     * /Delete, File command
     * /Load, Consolidate command







                                                                  166




















ENHANCEMENTS


     * New print options:
         * Multiple line headings 
         * Multiple line footings 
         * Multiple copies 
         * Specify top margin 
         * Optional printer INIT string 
         * Printer functions: char-per-inch, lines-per-inch, 
           page break, conditional page break, NOPRINT, NOLF,
           date/time/page number
     * /Replicate option: Adjust ALL
     * /Save files in DIF or MailMerge format
     * Optionally rename old copy to filename.BAK
     * /Load DIF files, MailMerge files, File Express databases or 
       PC-File databases
     * Default drive and/or extension option 


CALC 4.0 (September 1988)
     * Calculation speed twice as fast
     * /Move command 
     * Commands load faster 
     * Subdirectory support
     * /Window command for split screens
     * Home and End key support
     * Message file is resident for faster display
     * "No Round" option increases speed another 20%
     * Spreadsheet name may be entered on command line
     * Insert and Delete multiple lines
     * /Xternal support for File Express 4.0
     * 43 lines per screen for EGA/VGA users
     * Delete and Rename files
     * Shell to DOS










167




















                                            FILES ON CALC DISKS



                      FILES ON THE CALC DISKS

The following files are included on your CALC diskettes: 

1. CALC.EXE: The CALC program. 

2. CALC1.DOC, CALC2.DOC, etc.: The CALC User Guide in 
   four disk files. This is an evaluation copy of the guide, 
   provided so you can share the program with others. This file is 
   not needed to run CALC. 

3. PRINTDOC.BAT: This batch file is used to print the 
   evaluation copy of the User Guide. This file is not needed to 
   run CALC.

4. EXAMPLE: Sample interest computation spreadsheet. This same 
   spreadsheet is described in the "Brief Tutorial" and in the 
   section on the Replicate Command (/R). 
 
5. BW.PRO, SL.PRO: These are small profile files for running 
   CALC on a black-and-white monitor and non-compatible PC. 
   They are discussed in the "Getting Started" section.

6. RESPONSE: This is also a CALC worksheet, and it contains 
   a report similar to the User Response Form at the end of this 
   manual. You can either remove the pages from the manual, or 
   fill in the blanks on this spreadsheet and print it. 














                                                                  168




















FREQUENTLY ASKED QUESTIONS



                          SOME FREQUENTLY
                          ASKED QUESTIONS


Q: What is your update policy?  
A: All registered Expressware users will be notified by mail when 
   a new version of CALC becomes available. The cost of an update 
   is usually $20 (to registered users). 

Q: Do you have any other programs you are distributing?  
A: Yes. File Express, a powerful database management program, 
   ExpressGraph, a business graphics program, ExpressCheck, a 
   checkbook management program, and On-Side, a sideways printing 
   program. There is an order form at the end of this User's Guide.

Q: What else are you working on? 
A: As always, we are making improvements to our existing products, 
   with new versions of all of them currently in progress. In 
   addition, work is under way on two new products, to be announced 
   in the spring.

Q: In what language was CALC written?
A: It was written in BASIC, then compiled with the Microsoft 
   BASIC Version 6 Compiler. It also has some assembler subroutines.

Q: What computers does CALC run on?
A: If your computer is compatible with the IBM PC, then CALC will 
   run on it. Users have notified us of literally hundreds of brands 
   and models of computers which CALC runs on. We are not aware of 
   any PC-compatible which CALC does not run on. 











169




















                                              DISTRIBUTION NOTICE



                          DISTRIBUTION NOTICE 


All Expressware products are distributed as SHAREWARE. Users 
are welcome to copy the software and share it with their friends. 
After evaluating an Expressware product, if a person decides to use 
it, we trust them to buy the registered set. 

Anyone may obtain an evaluation copy of any Expressware product for 
$15 from a local software dealer or directly from Expressware. The 
$15 disk set contains a diskette with the complete software and the 
complete documentation, ready to be printed on your own printer. The 
disk set also contains a rebate coupon to be redeemed after 
purchasing the registered set. 

The complete registered sets are also available from dealers 
throughout the U.S. and Canada, or may be purchased directly from 
Expressware. The registered set includes a commercially printed copy 
of the User's Guide, diskettes and a user registration form. 
Registered owners receive phone support on Expressware products, 
newsletters, product announcements, and update service. 

End users, whether registered or not, are encouraged to copy the 
software and share it with their friends for evaluation. The 
following restrictions apply:

* No charge may be made for the copies. 

* No alteration may be made to the files on the diskettes. 

* The printed manual may not be reproduced in any way.

* The computer-printed manual may not be reproduced in any way.

* Commercial sale or use of the copies is prohibited. 

* Special rules apply for educational use. Contact Expressware. 




                                                                  170




















USER RESPONSE FORM




                         USER RESPONSE FORM


We are always interested in knowing more about our users. This 
information helps us to channel our efforts in the directions you 
want. Please help us by completing the questionaire on the 
following page and mailing it to:

                           Expressware
                          P. O. Box 1800
                         Duvall, WA 98019


If you do not want to remove these pages from your manual, and a 
copy machine is not readily available, there is a file on the 
CALC diskette called RESPONSE which is a copy of this form. 
The file is a CALC spreadsheet. Use the /Load command to load 
it into CALC, then enter the requested information in the 
appropriate cells. Use the /Print command to print the completed 
questionaire.


If you filled out a questionaire for CALC Version 3.0, we would 
appreciate hearing from you again, especially regarding the 
features you would like to see in Version 5.0. 















171




















                                              USER RESPONSE FORM


1. Have you sent a User Response Form in the past?  Yes:___  No: ___

2. Where did you hear about CALC?      _____________________________

3. System being used to run CALC:

   a) Computer brand/model?  _______________________________________

   b) Amount of computer memory?    ________________________________

   c) Type of disk? ________________________________________________

   d) Monochrome or color display? _________________________________

   e) 40 or 80 column display? _____________________________________

   f) Printer brand/model? _________________________________________

4. For what types of applications do you use CALC? 

    ________________________________________________________________

5. ____ Registered user                   ____ Non-registered user 

   (If you are a non-registered user, we are interested in knowing 
   why. Is the price too high? Is CALC missing features you need?) 

6. Which database manager do you use?  _____________________________

7. Which word processor do you use?  _______________________________

8. What other software would you like to see from Expressware?

    ________________________________________________________________

9. Name and address (optional): ____________________________________

                                ____________________________________

                                ____________________________________


                                                                  172




















                                              USER RESPONSE FORM


10.Here are some of possible enhancements to CALC. Help us determine
   what new features are most important for us to work on next. 
   Rate each of the following features from 0 to 10, where: 

                0 or blank - not a feature you would use
                2          - might be useful
                4          - definitely useful
                6          - important
                8          - very important
               10          - absolutely essential

   ___ Help screens.
   ___ Faster calculation.
   ___ Faster screen display.
   ___ Faster load/save.
   ___ Faster Xternal access.
   ___ Larger spreadsheet matrix.
   ___ Spreadsheet on disk if memory fills (virtual memory).
   ___ Formulas larger than 74 characters.
   ___ Command files or macros.
   ___ Internal rate of return function.
   ___ Calendar/time functions and arithmetic.
   ___ Password security/encryption.
   ___ Natural or topological recalculation. 
   ___ Graphics. 
   ___ 8087 support.
   ___ Global search; search and replace.
   ___ Cell-finding with arrows when entering formulas.
   ___ Future value function.
   ___ Depreciation functions.
   ___ Underline, boldface formatting options.
   ___ Cell naming, Range naming.
   ___ Median and modal average.
   ___ Word wrap.
   ___ Percentile ranking.
   ___ Undo command.
   ___ Calculator mode.
   ___ Sideways printing.
   ___ ____________________________________________
   ___ ____________________________________________


                                                                  173




















                                              USER RESPONSE FORM


11.If you find a bug in CALC, an error in the documentation, or 
   you just have a suggestion for doing it a better way, we would 
   like to hear from you. Please write your comments here, or 
   attach a separate sheet. 

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________




                                                                  174













 ORDER FORM          E X P R E S S W A R E           Orders(800)753-FILE
                          PO Box 1800                 Phone(206)788-0932 
                       Duvall, WA  98019                Fax(206)788-4493                                                       
                                                        BBS(206)788-4008
 
                                           QUANTITY    PRICE     PRICE
DESCRIPTION                                3.5"/5.25"   EACH    EXTENDED
------------------------------------------------------------------------
(Disk Sets are for evaluation only; Registered Copies include 
User's Guide, Program Diskette(s), Technical Support, and Newsletters)
   
FILE EXPRESS (V4.xx) Disk Set               ___/___    $15.00   $_______
  (Database Management)
              Registered Copy               ___/___    $69.95   $_______
   For a limited time only: BONUS DISK(includes six sample databases)

EXPRESSCALC (V4.xx)  Disk Set               ___/___    $15.00   $_______
  (Spreadsheet)
              Registered Copy               ___/___    $59.95   $_______
   For a limited time only: BONUS DISK(includes ten sample spreadsheets)

EXPRESSGRAPH (V1.xx) Disk Set               ___/___    $10.00   $_______
  (Business Graphics)
              Registered Copy               ___/___    $29.95   $_______

EXPRESSCHECK (V3.xx) Disk Set               ___/___    $10.00   $_______
  (Checkbook Management)
              Registered Copy               ___/___    $29.95   $_______

ONSIDE (V1.xx)       Disk Set               ___/___    $10.00   $_______
  (Sideways Printing)
              Registered Copy               ___/___    $19.95   $_______

                                                     SUBTOTAL:  $_______
                                                     SHIPPING:  $__3.50_
                      QUANTITY ______ 3.5" disks @ $1.00 each:  $_______
          COD: $3.00 * UPS 2-DAY AIR: $5.00 * FOREIGN: $15.00:  $_______
                      WASHINGTON RESIDENTS ADD 8.1% SALES TAX:  $_______

                                                         TOTAL  $_______
NAME_________________________________________DATE______________

COMPANY_____________________________________PHONE______________________

UPS ADDRESS__________________________MAILING ADDRESS___________________

CITY_______________________________________STATE_________ZIP___________

VISA or MC #:(or send check)___________________________________________

EXPIRATION DATE:______/_______     SIGNATURE___________________________
Please make checks payable to : EXPRESSWARE  (U.S. funds only)
(prices subject to change without notice)     





























                              NOTES



   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________

   ________________________________________________



176




















                                                               INDEX



                              INDEX

ABS Function  25                   background colors  36, 153          
absolute value  25                 bad file  77                        
accumulate numbers  130            bargraph  55, 58                    
add numbers  130                   bargraph configuration  154         
adding a line  69                  base e  79                          
addition  12                       BASIC routine  164                  
Alphabetical reference  23         black and white  144                
ALT key  108                       BLANK command  33                   
amortization                       blank screen  37                    
   PAYMENT  99                     blank zeros  62                     
   PERIODS  101                    block of cells, blanking  33        
   PRINCIPAL  103                  Boolean operator  12, 13            
   RATE  114                       border                              
AND operator  12                      color  36                        
angle                                 option  60                       
   arctangent  31                     printing  106                    
   cosine  42                      brackets  144                       
   sine  127                                                           
   tangent  131                                                        
arctangent function  31            
ARRANGE command  26                calculation  60                     
array size  37                        disabling  61                    
arrows  16                            sequence  60                     
ascending sequence  26             cell attributes  159                
ASCII                              cell                                
   codes to printer  108              block of  117                    
   file, reading  75                  contents  11                     
   sort  26                           cursor  6                        
asterisks, bar graph  55              definition  6                    
at sign  14                        center-justification  53            
ATN function  31                   centering  53                       
automatic calculation  61          changing configuration  35, 143     
automatic cursor  62               characters per inch                 
AVERAGE function  32                  39, 44, 108, 147, 153            
                                   circular reference  61              
                                   clear spreadsheet  142              



                                                                  177




















                                                             Index


color                              conditional testing  64               
   configuring  36                 CONFIGURE command  35                 
   graphics board  3               configuring 143                       
   monitor  3, 4                      global defaults  56                
   screen  144-146, 148-149           smart keys  37                     
column                                printer  38                        
   hidden  53                         save  38                           
   inserting  69                   conjunction  12                       
   size  53                        consolidate  76                       
   width  46, 53, 78, 163          Control keys  16                      
column-wise calculation  60        copy cells  87, 116                   
combine spreadsheets  76           copying CALC  170                     
comma, terminating field  20       correct formula  48                   
Command Processor  22              correct text  48                      
command                            COS function  42                      
   Arrange  26                     cosine function  42                   
   Blank  33                       COUNT function  43                    
   Configure  35                   CPI function  44                      
   Delete  46                      CPI  39, 44, 108, 147, 153            
   Edit  48                        Ctrl-C key  16                        
   Format  52                      cursor                                
   Global  60                         automatic  62                      
   Insert  69                         color  36                          
   Load  75                           movement  16                       
   Print  105                         smart  62                          
   Quit  111                       Customizing CALC  143                 
   Replicate  116                                                        
   Save  122                                                             
   Title  132                      Data Interchange  122                 
   Xternal  134                    database, reading  75, 136            
   Zap  142                        date and time  72                     
commas in numbers 53               decimal places  52                    
compatible computers  169          defaults                              
complement  12                        configuring  143                   
compressed print  44                  numbers  12                        
computers, runs on  169
conditional page  96





                                                                  178




















Index












































179




















                                                             Index


degrees                            e, natural logarithm  50, 79        
   arctangent  31                  EDIT command  48                    
   cosine  42                      end key  19                         
   sine  127                       end of spreadsheet  21              
   tangent  131                    end CALC  111                       
DELETE command  46                 enhancements  165                   
delete                             ENTER key  20                       
   column  46                      entering text  150                  
   contents of cell  33            entry line  7                       
   file  46, 134                      color  36                        
   key  20                         Epson printer  39, 107              
   line  20, 46                    equal sign  21                      
   row  46                         erase                               
   spreadsheet  46                    cell  33                         
descending sequence  26               column  46                       
descending sort  26                   row  46                          
deviation  129                        spreadsheet  142                 
DIF file                              to end of field  20              
   reading  75                     ERROR  85, 86, 137                  
   saving  122                     ESC key  8, 19, 152                 
directory display  75, 122         Escape key  8, 19, 152              
discount rate  94                  exclamation point  21               
disjunction  12                    exit  111                           
disk                               EXP function  50                    
   load spreadsheet  75            exponent  14, 53                    
   printed output  106             exponential form  14                
   save spreadsheet  122           exponential function  50            
diskette drive  3                  exponentiation  12, 13              
diskette files  168                external references  136            
display contents  48                                                   
display directory  75, 122                                             
division  12                       features, new  165                  
dollar sign  53                    FICA example  67                    
double spacing  106
double-sided diskette  3
down arrow  18






                                                                  180




















Index


file                               function                             
   format  158                        absolute value  25                
   loading  75                        arctangent  31                    
   names  75, 122, 168                average  32                       
   CALC  75, 122                      cosine  42                        
   saving  122                        COUNT  43                         
File Express database                 CPI  44                           
   reading  75, 137                   exponential  50                   
files on disk  168                    fixed  51                         
FIX function  51                      INT  71                           
flickering screen  40                 integer  51, 71                   
floating dollar sign  53              KEYWORD  72                       
foreground colors  36                 LOG  79                           
form advance  96                      LOOKUP  80                        
form feed  96                         LPI  84                           
FORMAT command  52                    MAX  85                           
format                                maximum number  85                
   bar graph  55                      MIN  86                           
   commas in numbers  53              minimum number  86                
   decimals  52                       net present value  94             
   dollar sign  53                    NOLF  89                          
   global default  57                 NOPRINT  91                       
   global settings  56                NPV  94                           
   justify  53                        PAGE  96                          
   memory usage  56                   PAYMENT  99                       
   percent sign  54                   PERIODS  101                      
format, file  156                     PRINCIPAL  103                    
formula  61                           RANDOM  112                       
   entering  7, 12                    RATE  114                         
forward reference  61                 sign  126                         
freeing memory, Blank  33             sine  127                         
frequent questions  169               square root  128                  
function keys  38                     STDEV  129                        
                                      SUM  130                          
                                      table lookup  80                  
                                      tangent  131                      
                                      trigonometric  31, 42, 127        





181




















                                                             Index


getting started  4                 jump to                            
GLOBAL command  22, 60                cell  17, 21                    
global                                end of spreadsheet  19          
   defaults  60                       top of spreadsheet  19          
   formula  61, 62                 justification, default  53         
   options  60                     justify  53                        
   settings  60                                                       
go to coordinate  21                                                  
graph, bar  55, 154                keyboard                           
                                      configuring  37, 146, 153       
                                      conventions  16                 
hard copy  105                        input  22                       
HDR files  75                         macros  37                      
header record  158                 KEYIN  152                         
height of screen  40               keys                               
hidden cells  53                      alternate  16                   
hidden column  2                      cell cursor  16                 
hide cells  53                        entry line  16                  
high-speed mode  18                keystrokes  22                     
home key  19                       KEYWORD function  72               
horizontal titles  132                                                
                                                                      
                                   language  169                      
IF command  64                     largest number  85                 
import database  75                learning  6                        
insert characters  20              leave CALC  111                    
INSERT command  20, 69             left margin, print  106            
insert key  20, 146                left-justify  53                   
insert line  20, 64                line spacing  84, 147              
installing CALC  4                 lines per inch  84, 147            
INT function  71                   LOAD command  75                   
integer function  71               loading a file  75                 
interest rate  116
interest, computing  8
invoice example  82, 91
iterations  148, 154
iterative calculation  154





                                                                  182




















Index


loan                               Microsoft BASIC  155, 169           
   amount, principal  103          military time  73                   
   payment  99                     MIN function  86                    
   periods  101                    minimum configuration  3            
   principal  103                  minimum value  86                   
   term  101                       mismatched parentheses  14          
lock/protect cells  54             modify cell contents  48            
locking titles  132                modulo  13                          
LOG function  79                   monitor                             
logarithm  79                         color  3                         
logged disk drive  75, 122            monochrome  3, 4                 
logical function  64               MOVE command  87                    
logical operator  12               MSDOS  3                            
longer spreadsheet  37             multiple copies  170                
LOOKUP function  80                multiple databases  139             
LPI function  84                   multiplication  12                  
LPI  84, 147                                                           
                                                                       
                                   natural logarithm  79               
macros, smart key  37              negative numbers  54, 126           
mail-merge file  75, 122           nested IF  64                       
major enhancements  165            net present value  94               
mantissa  14, 53                   new line  69                        
manual calculation  61             new spreadsheet  142                
mathematical number e  50, 79      no line feed  89                    
matrix, configuring  37            NOLF function  89                   
MAX function  85                   non-destructive cursor  19          
maximum columns  37                non-IBM computers  4, 169           
maximum value  85                  non-print zeros  62                 
maximums  11                       NOPRINT function  91                
mean average  32                   NOT operator  13                    
memory                             NPV function  94                    
   available  11                   numbers, entering  8                
   clearing  142                                                       
   format  56                                                          
   required  3                     offset  105                         
message line  8                    old cursor  149                     
   color  36                       on exit run  148                    
                                   operating system  3                 



183




















                                                             Index


operators                          precedence                        
   arithmetic  12                     arithmetic  13                 
   two in a row  14                   math  13                       
optimize memory  154                  overriding  13                 
optional fields  163                  sort  27                       
OR operator  13                    precision, decimals  52           
order form  175                    present value  94                 
output to disk  122                prices, software  175             
overprinting  89                   PRINCIPAL function  103           
                                   PRINT command  105                
                                   print                             
page down key  19                     double spacing  105            
PAGE function  96                     left margin  105               
page length  105                      offset  105                    
page number  72                       setup  106                     
page offset  105                      to disk  106                   
page up key  19                       wide reports  106              
page width  105                    printed output  105               
parentheses                        printer                           
   in formulas  14                    configuring  39, 108, 147      
   mismatched  14                     fonts  44                      
   nested  14                         spacing  84                    
   on negative numbers  54         printing border  105              
PAYMENT function  99               printing spreadsheet  105         
PC-File database  75, 137          profile commands  143             
PCDOS  3                           profile files  143                
percent sign  13, 54               programming language  169         
percentage operator  13            protect cells  54                 
PERIODS function  101                                                
permanent configuration  39                                          
permission to copy  170            question & answer  169            
pg dn key  16                      QUIT command  111                 
pg up key  16                      quote on text  150                
policy, updates  169
positive number  25







                                                                  184




















Index


radians                            row                                
   arctangent  31                     inserting  69                   
   cosine  42                         sort  29                        
   sine  127                       row-wise calculation  60           
   tangent  131                                                       
RANDOM function  112                                                  
random number  112                 Sample BASIC routine  164          
RATE function  114                 SAVE command  10, 122              
rate, interest  114                save configuration  39             
read database  136                 saving a file  122                 
rearranging screen  35             scientific notation  12, 52        
recalculation                      screen colors  146, 153            
   automatic  61                   screen configuration  146, 148     
   manual  61                      screen                             
reconfiguring CALC  35                blank  40                       
reference, alphabetic  23             flicker  40                     
relational operator  13, 64           height  35, 40                  
remainder  12                         layout  36                      
remove column  46                     width  35                       
remove data from cell  33          scrolling screen  18               
remove row  46                     secondary key  26                  
remove sign  25                    secondary sort  28                 
rename a file  134                 sequencing  26                     
REPLICATE command  116             setting decimals  52               
report to disk  106                setting colors  36                 
report, printed  105               setup, printer  39, 107            
requirements  3                    SGN function  126                  
resequencing  26                   shell to DOS  134                  
reset defaults  142                sign function  25                  
RETURN key  18                     SIN function  127                  
return to DOS  111                 sine function  127                 
retype  48                         skip print line  91                
right-justify  53                  skip to new page  96               
root, square  128                  slash character  22                
ROUND function  121                slow calculation  61               
rounding numbers  121              slow screen  40                    
                                   smallest number  86                
                                   smart cursor  62, 149              
                                   smart keys  37                     



185




















Index


sort 26                            trigonometric function          
   configuring  148, 155              arctangent  31               
   precedence  27                     cosine  42                   
   sequence  156                      sine  127                    
spreadsheet                        true integer  71                
   loading  75                     tutorial  6                     
   saving  122                                                     
SQR function  128                                                  
square root  128                   unlock/unprotect  54            
standard deviation  129            unprotect cells  54             
STDEV function  129                up arrow  18                    
stream of flows  94                update policy  169              
subtraction  12                                                    
SUM function  9, 130                                               
suppress line feed  89             valid file names  76, 123       
suppres print line  91             value, entering  8              
system options  60                 version numbers  165            
system requirements  3             vertical titles  132            
                                   video RAM  40                   
                                                                   
table lookup  80                                                   
TAN function  131                  what if  9                      
tangent function  131              whole number  71                
tax table lookup  81               wider spreadsheet  37           
term of loan  101                  width, column  53               
test scores  68                    WINDOW command  135             
text                               WS files  75, 122               
   entering  7, 8                                                  
   overlapping  7                                                  
time and date  72                  XTERNAL command  136            
TITLE command  132                                                 
title locking  132                                                 
toggle border on/off  60           ZAP command  8, 142             
toggling insert  20                zero-blank  56, 62              
Toshiba printer  39                zeros as spaces  56             
total numbers  130
trailing percent sign  54
translate  151




186














```
{% endraw %}

## FILE0525.TXT

{% raw %}
```
Disk No:  525                                                           
Disk Title: ExpressCalc 2 of 2 (also 524)      
PC-SIG Version: S2.4                                                    
                                                                        
Program Title: ExpressCalc                                              
Author Version: 4.10                                                    
Author Registration: $59.95                                             
Special Requirements: 512K RAM.                                         
                                                                        
EXPRESSCALC is a spreadsheet with a wide variety of applications ranging
from business forecasts to mortgage calculations.                       
                                                                        
It does not require programming background to be able to use it, and    
will interface with other files and databases -- allowing an exchange   
of information.  Included is a tutorial, good documentation and the     
option to configure the package to specific systems.  EXPRESSCALC       
supports spreadsheets up to 64 columns by 256 lines.  Each column can   
be up to 75 characters long.                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
 ORDER FORM          E X P R E S S W A R E           Orders(800)753-FILE
                          PO Box 1800                 Phone(206)788-0932 
                       Duvall, WA  98019                Fax(206)788-4493                                                       
                                                        BBS(206)788-4008
 
                                           QUANTITY    PRICE     PRICE
DESCRIPTION                                3.5"/5.25"   EACH    EXTENDED
------------------------------------------------------------------------
(Disk Sets are for evaluation only; Registered Copies include 
User's Guide, Program Diskette(s), Technical Support, and Newsletters)
   
FILE EXPRESS (V4.xx) Disk Set               ___/___    $15.00   $_______
  (Database Management)
              Registered Copy               ___/___    $69.95   $_______

EXPRESSCALC (V4.xx)  Disk Set               ___/___    $15.00   $_______
  (Spreadsheet)
              Registered Copy               ___/___    $59.95   $_______

EXPRESSGRAPH (V1.xx) Disk Set               ___/___    $10.00   $_______
  (Business Graphics)
              Registered Copy               ___/___    $29.95   $_______

EXPRESSCHECK (V4.xx) Disk Set               ___/___    $15.00   $_______
  (Checkbook Management)
              Registered Copy               ___/___    $34.95   $_______

ONSIDE (V1.xx)       Disk Set               ___/___    $10.00   $_______
  (Sideways Printing)
              Registered Copy               ___/___    $19.95   $_______

                                                     SUBTOTAL:  $_______

                                                     SHIPPING:  $__3.50_

          COD: $3.50 * UPS 2-DAY AIR: $5.00 * Foreign: $15.00:  $_______

                      Washington residents add 8.1% Sales Tax:  $_______

                                                         TOTAL  $_______

NAME___________________________________________ DATE___________________

COMPANY_______________________________________ PHONE___________________

UPS ADDRESS__________________________MAILING ADDRESS___________________

CITY_______________________________________STATE_________ZIP___________

VISA or MC #:(or send check)___________________________________________

EXPIRATION DATE:______/_______     SIGNATURE___________________________

Please make checks payable to : EXPRESSWARE  (U.S. funds only)
(prices subject to change without notice)     















***********************************************************************

If you have received this program from a User's Group or a friend and
would like to be put on Expressware's mailing list so that you will
receive information on upcoming releases and notification of new
products, please fill in your name and address below and send to:

                     E X P R E S S W A R E
                     P.O. Box 1800   
                     Duvall, WA  98019

Name__________________________________________________________________

Address_______________________________________________________________

______________________________________________________________________

City___________________________________State________Zip_______________

Date________________________File Express version______________________

Other Expressware products used_______________________________________




**********************************************************************


We would also appreciate any input you would care to offer about
our programs.  If you have any ideas or comments that would make 
them better programs, please let us know.

We are working hard to make Expressware software the best, most 
useful, and affordable products of their kind on the market today.
With your input we will be well on our way to achieving that goal.

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________

______________________________________________________________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0525

     Volume in drive A has no label
     Directory of A:\

    CALC1    DOC     80640   2-17-90   4:10a
    CALC2    DOC     82746   2-17-90   4:10a
    CALC3    DOC     75102   2-17-90   4:10a
    CALC4    DOC     82176   2-17-90   4:10a
    FILE0525 TXT      1752   1-01-80   5:20a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       463   1-01-80   5:26a
    ORDER    BAT       640   2-17-90   4:10a
    ORDERFRM DOC      4528   2-17-90   4:10a
    PRINTDOC BAT       768   2-17-90   4:10a
           10 file(s)     328853 bytes
                           28672 bytes free
