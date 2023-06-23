---
layout: page
title: "PC-SIG Diskette Library (Disk #170)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0170/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0170"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPREADSHEETS"

    Spreadsheets is actually FreeCalc version 1.01, which is a reasonably
    good Lotus clone.  However, many of the bugs and limitations present
    in this program are removed in version 2.0, which is available on Disk
    #574.  The Pad (PC-PAD) is an interesting calculator and spreadsheet
    that can be used with FreeCalc worksheets.  Both FreeCalc and The Pad
    are menu driven and fairly easy to use, but the documentation
    (provided) is important to read.  The spreadsheet itself is 100 rows
    by 25 columns wide.  Another odd utility program is Minicalc, which is
    a small compiled spreadsheet.  Minicalc is interesting to look at, but
    not very useful.
    
    System Requirements: Two disk drives, BASIC
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    -------- ---  FreeCalc
    FC       HLP  FreeCalc Version 1.01 - help files used by FC.EXE
    FC       EXE  FreeCalc Version 1.01 - main FREECALC spreadsheet program
    -------- ---  PC-PAD
    DEMO?    FC   FreeCalc Version 1.01 - sample spreadsheet  (3 files)
    READ     ME   FreeCalc Version 1.01 - how to print FC.DOC
    FC       DOC  FreeCalc Version 1.01 - documentation for FC.EXE
    TEMPLE   KEY  Part of PC-PAD
    ROWCOL   BAS  Part of PC-PAD - instruction for row/column totaling
    PC-PAD   LST  Part of PC-PAD - commented source & 20 add-on functions
    PC-PAD   DOC  Part of PC-PAD - documentation
    PC-PAD   BAT  Part of PC-PAD - start PC-PAD spreadsheet
    PC-PAD   BAS  PC-PAD Version 1.3 text oriented spreadsheet main program
    PC-PAD   ABS  Part of PC-PAD - abstract of PC-PAD
    AUTOEXEC BAT  Part of PC-PAD - boot start up file
    VOLKSWTR KEY  Part of PC-PAD
    BASIC    KEY  Part of PC-PAD
    -------- ---  MINICALC
    EW       KEY  Part of PC-PAD
    DEMOPAD       Part of PC-PAD
    COPYPAD  BAT  Part of PC-PAD
    MINICALC DOC  Documentation for MINICALC.EXE
    MINICALC EXE  Small compiled spreadsheet
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES170.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 170   Spreadsheets (DOS 2.0 or later required)   v1
------------------------------------------------------------------------
DEMO1    FC   FreeCalc V 1.0 - Sample spreadsheet - home budget
DEMO2    FC   FreeCalc V 1.0 - Sample spreadsheet - home budget
DEMO3    FC   FreeCalc V 1.0 - Sample spreadsheet - home budget
FC       DOC  FreeCalc V 1.0 - Documentation for FC.EXE
FC       EXE  FreeCalc V 1.0 - Main FREECALC spreadsheet program
FC       HLP  FreeCalc V 1.0 - Help files used by FC.EXE
READ     ME   FreeCalc V 1.0 - How to print FC.DOC
AUTOEXEC BAT  Part of PC\PAD - Boot start up file
BASIC    KEY  Part of PC\PAD
COPYPAD  BAT  Part of PC\PAD
DEMOPAD       Part of PC\PAD
EW       KEY  Part of PC\PAD
PC-PAD   ABS  Part of PC\PAD - Abstract of PC-PAD
PC-PAD   BAS  PC\PAD Version 1.3 text oriented spreadsheet main program
PC-PAD   BAT  Part of PC\PAD - Start PC-PAD spreadsheet
PC-PAD   DOC  Part of PC\PAD - documentation
PC-PAD   LST  Part of PC\PAD - Commented source & 20 add-on functions
ROWCOL   BAS  Part of PC\PAD - Instruction for row/column totalling
TEMPLE   KEY  Part of PC\PAD
VOLKSWTR KEY  Part of PC\PAD
MINICALC DOC  Documentation for MINICALC.EXE
MINICALC EXE  Small compiled spreadsheet
 
 
```
{% endraw %}

## MINICALC.DOC

{% raw %}
```
DOCUMENTATION FOR MINICALC.BAS

MiniCalc gives the user an 11 by 22 matrix of cells to work with.  
The layout of the matrix is similiar to that of the popular 
spreadsheet applications with the rows labeled 1-22 and the 
columns labeled A-K.  The program will work with one disk drive 
and 48K with no problem.  It will also work with either the 
monochrome adapter or the color monitor adapter.  It does need an 
80 column display.  This program was written for an Epson MX-80 
printer, although most printers should work.

When the program is run, it comes up with the matrix on the 
screen and the inverse video cursor in the top left corner, 
position A01.  The cursor keys at the right of the keyboard move 
the inverse video cursor through the matrix.  At the bottom of 
the screen are two status indicators.  The bottom left indicator 
tells the user whether the Caps Lock key is on or off.  This is 
handy as the matrix locations must be entered in Caps.  The 
bottom right indicator tells what mode the numeric keypad is 
currently in.  If the cursor mode is active, it will display 
Cursor.  If the number mode is active it will display Number.  
when the program is first run, it initializes the Caps indicator 
to Caps On and the Keypad indicator is set to Cursor.

At the top of the screen, the user will see the status line, 
indicating the current cursor location and the assignment for 
that cursor location.  At any particular cell in the matrix, you 
have the option of entering a number, entering a label or 
performing a command.  To enter a number, simply type in the 
number and press return.  To enter a label, type in the label and 
press return.  MiniCalc recognizes anything starting with a 
number as a number and anything starting with a letter as a 
label.  If you do not press return when entering a label, 
MiniCalc will make that label temporary.

To perform a command, press the "/" key.  Then the status line 
will show "Special Command (A,B,C,D,E,G,H,L,N,P,Q,R,S,T,>)?" 
indicating the command options available to the user.  Pressing a 
carriage return at this point will abort the special command 
procedure.  To perform a command, simply enter the appropriate 
command letter.  The commands are:

A - Average.  Allows the user to average a series of cells in a 
row or column and put the result in another cell.  The format for 
entering a cell location is "ann" where "a" is the column 
coordinate (in caps) and "nn" is the row coordinate (always two 
digits i.e. - A01).  In response to entering "/A" the status line 
will be cleared and filled with "AVERAGE. Enter coordinates:".  
This is the user's prompt to enter the range of coordinates for 
the average, and the cell where the result will be placed.  For 
example, say the values 1, 2 and 3 were in locations A01, B01 and 
C01, respectively, and that you wanted to put the results in 
location A03.  For the above prompt to enter the coordinates, the 
user would enter "A01" and the system would acknowledge that with 
".." indicating you should enter the next coordinate.  You would 
then enter "C01" and the third coordinate you would enter would 
be "A03".  After all of this was entered, MiniCalc would write 
the equation for this average at location A03, make that 
calculation and then move the cursor to that location.  The 
status line would read "A03 = 2  A01+B01+C01/3".  Thus the 
coordinates asked for are the beginning and ending range of 
numbers to be averaged in a row or column followed by the 
location where the result should be placed.

B - Blank.  This allows the user to erase whatever is in the 
current cursor location.  For example, if the current cursor 
location is A01 and has the value 250 in it and the user presses 
"/B", then A01 will be erased and the status line will show A01 
assigned a value of zero.

C - Compute.  This allows the user to make a computation between 
two numbers and store the result at a third location.  In 
response to "/C" the system will clear the status line and 
display "COMPUTE. Function (+,-,*,/) ?".  This is asking which 
operation is to be performed on the two locations.  After 
selecting one of the four operations, the system will display 
"Enter Coordinates:", asking for the two locations to perform the 
operation on and the location to store the result.  For example, 
if A01 had 1 in it and B01 had 2 in it and we wanted to add these 
two locations together and store the result in A03 then in 
response to the "Function" prompt, we would press "+" and then 
enter "A01", "B01" and "A03" in response to the MiniCalc prompts 
in the same manner the Average command worked.

D - Delete.  Allows the user to delete a series of locations in 
either a row or a column.  To use this command, you would enter 
"/D" and Minicalc would respond with "DELETE. Enter 
Coordinates:".  In this case, you would enter the starting and 
ending location in the series to be deleted and MiniCalc would 
then erase those locations.

E - Equation.  This command has two options.  The first allows 
the user to enter an equation for the current cursor location.  
The equation must be simple, allowing only the four operators to 
be used in the equation.  The equation will be evaluated from 
left to right.  The second option tells MiniCalc to compute all 
of the equations in the matrix.  This is the only method used by 
MiniCalc to make the calculations based on the equations in the 
current matrix.  An example of entering an equation for a 
particular location:  The cursor is at location A03 and we want 
to put the average of locations A01 and B01 plus whatever is in 
C01 at the current cursor location.  In response to the "Equation 
or Compute" prompt, we would press "E" and then enter 
"A01+B01/2+C01" and press return.  This would enter that equation 
for location A03, although it would not automatically compute the 
value.  The "Compute" option would perform that function.

G - Graph.  The graphing function allows the user to create a bar 
graph for a particular row or column.  This graph can then be 
dumped to the printer.  In response to "/G" the system would 
clear the screen and ask whether a column or a row was to be 
graphed (C or R).  If the user selected "R", for example, then 
MiniCalc would ask for the row (1-22) to be plotted.  For the 
first row, the user would enter "01".  Then the user would see 
the bar graph for row 01 and would be given the option of dumping 
the graph on the printer or going to the MiniPlot Menu.  The 
MiniPlot Menu gives the user the option of quitting, plotting 
another row or column or returning to MiniCalc.

H - Help.  The help function displays a brief one-line 
description of the command in question on the status line.  for 
example, in response to "/H" MiniCalc would prompt for the 
command in question.  If the user selected "A", MiniCalc would 
give a one-line description of the Average command.

L - Load.  This function allows the user to load a matrix from 
the diskette that has been saved with the Save command.  In 
response to "/L" MiniCalc will ask for the filespec of the file 
to be loaded.  At this point, pressing return will abort the load 
sequence and take the user back to MiniCalc.  If a drive is not 
specified, the MiniCalc will look for the file on the current 
drive.  For example, to load a file "SALES.DAT" from drive B, the 
user would enter "B:SALES.DAT" for the filespec.  Upon entering a 
filespec and pressing return, MiniCalc will prompt the user to 
ready the drive that is to contain "SALES.DAT" and press return.  
At this point MiniCalc will load the file, make the appropriate 
calculations and display them on the screen.

N - New.  Allows the user to start MiniCalc over, as in entering 
"RUN" in BASIC.  This clears the entire MiniCalc matrix, so any 
data worth saving should be saved prior to execution of this 
command.

P - Print.  Takes the current MiniCalc Matrix and dumps it to the 
printer.  The printer should be readied prior to executing this 
command.

Q - Quit.  Exits the MiniCalc program, giving appropriate 
credits.  Any data not saved from the MiniCalc matrix will be 
lost when this command is executed.

R - Replicate.  A function that allows the user to generate a 
series of numbers based on one of the locations in the MiniCalc 
matrix and a constant.  For example, if the user wanted the 
numbers 1 through 22 in locations A01 through A22 then the user 
would move to location A01, blank out the previous contents and 
enter the number 1 there.  Then use the "/R" command to create 
the rest of the numbers by adding one to to location A01.  In 
response to the "/R" command MiniCalc would respond with 
"REPLICATE.  Function (+,-,*,/) ?".  The user would enter the 
operation to be performed on each location ("+" in this case) and 
MiniCalc would respond with "Value?".  We are adding one, so "1" 
and return would be the appropriate response.  MiniCalc would 
then prompt with "Enter coordinates:" and the user would respond 
with "A01", "A02" and "A22", telling MiniCalc to use location A01 
as the source for the operation and to perform the operation on 
locations A02 through A22.  MiniCalc would perform the 
calculations and move the cursor down to A22, the status line 
showing "A22 = 22  A21+1".  In the equation shown on the status 
line, the location will always be the previous location, the 
operation will be the operation the user entered ("+" in this 
case), and the constant will be the value the user entered ("1" 
in this case).

S - Save.  This function allows the user to save a MiniCalc 
matrix to diskette.  In response to "/S" MiniCalc will ask for 
the filespec of the file to be saved.  At this point, pressing 
return will abort the save sequence and take the user back to 
MiniCalc.  If a drive is not specified, the MiniCalc will put the 
file on the current drive.  For example, to save the current 
matrix to a file "SALES.DAT" on drive B, the user would enter 
"B:SALES.DAT" for the filespec.  Upon entering a filespec and 
pressing return, MiniCalc will prompt the user to ready the drive 
that is to contain "SALES.DAT" and press return.  At this point 
MiniCalc will save the file to the appropriate drive and return 
to MiniCalc.  The Load command is used to load a file from 
diskette.

T - Total.  The Total command allows the user to sum a series of 
locations in a row or column and store the result in a particular 
location.  In response to "/T" MiniCalc will display "TOTAL.  
Enter Coordinates:".  MiniCalc is looking for the start of the 
range to be summed, to end of the range to be summed and the 
location to store the results.  For example, if the user had 
sales figures in positions A02 through A11 and wanted to put the 
sum of those sales figures in position K03, the user would enter 
the locations "A02", "A11" and K03.  MiniCalc would move to 
location K03 and display the sum and the equation to create that 
sum.

> - Goto.  Allows the user to jump to any location on the 
MiniCalc matrix.  This command can be executed directly from the 
MiniCalc matrix by entering ">" or can be executed with the slash 
command by entering "/>".  MiniCalc will respond by prompting for 
the location to move to.  The format for the location is "ann" 
where "a" is a letter between "A" and "K" and "nn" is a number 
between "01" and "22".  This allows the user quick access to any 
location on the MiniCalc matrix.

MiniCalc recognizes equations and labels.  When a matrix is saved 
to diskette, all the values, equations and labels are stored as 
well.  For a label to be a "permanent" label, the carriage return 
must be pressed after entering the label.  Otherwise the label is 
temporary and will not be stored.

In the listing, the lowercase i with an arrow over the top of it 
has a decimal value of 140.  This functions as a form feed for 
the Epson MX80 when the program is listed on the printer.


```
{% endraw %}

## ROWCOL.BAS

{% raw %}
```bas
10000   '----------ROWCOL.BAS - sample row-column sum instructions-----------
10010   ON ERROR GOTO 5000 'this prevents disabling of error trapping
10020   NROW0=FNV(2,6):NCOL0=FNV(3,6):NROW=FNV(4,6):NCOL=FNV(5,6)  'read table
10030   GOSUB 9630                                                 'form sums
10040   I=NROW0+NROW: J=NCOL0-1: X$="Column Totals"   : GOSUB 9920 'label row
10050   I=NROW0-2: J=NCOL0+NCOL: X$="Row Totals"      : GOSUB 9920 'label col
10060   GOTO 450           'this exits to the View Function
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0170

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       128   3-11-83  10:33p
    BASIC    KEY       162   3-31-83   8:48p
    COPYPAD  BAT       256   3-19-83   8:36p
    DEMO1    FC       1536   3-09-84  11:23p
    DEMO2    FC       7936   3-09-84  11:06p
    DEMO3    FC       2560   3-09-84  11:47a
    DEMOPAD          15232   4-09-83   5:37a
    DISK0170 TXT    148453   3-20-90  12:03a
    EW       KEY       245   4-18-83   7:13p
    FC       DOC     73600   4-20-84   1:11p
    FC       EXE    111360   1-01-80  12:34a
    FC       HLP      1280   3-12-84   6:20p
    FILES170 TXT      1330   4-06-87   9:09a
    MINICALC DOC     12166   7-10-83  11:12p
    MINICALC EXE     52864   1-01-80  12:25a
    READ     ME        768   4-20-84   1:13p
    ROWCOL   BAS       640   3-13-83  11:45a
    TEMPLE   KEY       290   4-18-83   7:14p
    VOLKSWTR KEY       256   1-01-80  12:12a
           19 file(s)     431062 bytes
                          778752 bytes free
