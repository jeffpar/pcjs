---
layout: page
title: "PC-SIG Diskette Library (Disk #89)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0089/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0089"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #3"

    Some interesting programs reside on this disk.  MINICALC is a small
    (11 x 22) spreadsheet, with graphing capabilities, and is useful for
    quick jobs.  MSPOOL is a quite flexible print spooler which allows you
    to print on three printers simultaneously. There are also programs to
    blank your monitor to prevent phosphor burn, a text-tool package that
    lets you catalog disks, generate mail- list mailings, and generate
    multi-column lists from single-column data.
    
    System Requirements:  BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  TEXTTOOL: $25
    
    File Descriptions:
    
    MONBLNK1 COM  Blanks monochrome display after 5 minutes
    MINICALC EXE  Single screen spreadsheet calculator - 11 columns, 22 rows
    MINICALC DOC  Documentation for MINICALC.EXE
    COLBLNK1 COM  Blanks color display after 5 minutes
    PC-LIB   BAS  Disk file library program
    MSPOOL   DOC  Documentation for SPOOL.COM
    MSPOOL   COM  Flexible spooler program
    MONBLNK1 DOC  Documentation for MONBLNK1.COM and COLBLNK.COM
    VOLSER   COM  Create/alter volume labels
    PC-LIB   DOC  Documentation for PC-LIB
    -------- ---  Text Tools programs
    VOLSER   DOC  Documentation for use of VOLSER.COM
    XUP      BAS  Prints textfiles in columnar tables
    PRNT2    BAS  Wild card print program
    MAIL     BAS  Mailmerge program
    MAIL     TXT  Sample input file for MAIL.BAS with instructions for use
    PR1      LET  Sample letter for MAIL.BAS
    TEXTTOOL DOC  Documentation for printer utilities
    PRNT3    BAS  Prints text files using wildcards
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #89, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PRNT2   .BAS         CRC = 12 01

--> FILE:  XUP     .BAS         CRC = D3 C9

--> FILE:  MAIL    .BAS         CRC = C3 4A

--> FILE:  MAIL    .TXT         CRC = 65 BC

--> FILE:  PR1     .LET         CRC = 69 29

--> FILE:  MINICALC.DOC         CRC = 6E F5

--> FILE:  PC-LIB  .BAS         CRC = 1D 6D

--> FILE:  PC-LIB  .DOC         CRC = 05 A9

--> FILE:  VOLSER  .DOC         CRC = 52 96

--> FILE:  VOLSER  .COM         CRC = 30 C1

--> FILE:  MSPOOL  .COM         CRC = 7A 77

--> FILE:  MSPOOL  .DOC         CRC = 8F 1E

--> FILE:  COLBLNK1.COM         CRC = 11 F6

--> FILE:  MONBLNK1.DOC         CRC = 7C 64

--> FILE:  MONBLNK1.COM         CRC = 7D 4E

--> FILE:  MINICALC.EXE         CRC = 15 77

--> FILE:  TEXTTOOL.DOC         CRC = 3B 2C

--> FILE:  PRNT3   .BAS         CRC = CD BF

 ---------------------> SUM OF CRCS = C0 FA

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MAIL.BAS

{% raw %}
```bas
1000 '  Program to create form letters and mailing lables
1010 CLS
1020 PRINT "----------------------------------------------"
1030 PRINT "    "
1040 PRINT "    MAIL - program to create form letters and mailing labels "
1050 PRINT "    "
1060 PRINT "    This program reads from a list of names, addresses and filenames"
1070 PRINT "    to produce form letters.  Alternately the program will read the"
1080 PRINT "    same input file to produce mailing labels to go with the letters."
1090 PRINT "    A sample input file, MAIL.TXT is included with the initial "
1100 PRINT "    release of this program."
1110 PRINT "    "
1120 PRINT "    If you find this program or other texttools from RPSoft"
1130 PRINT "    useful, a suggested donation of $25 to RPSoft, 1271 Palamos,"
1140 PRINT "    Sunnyvale, CA 94086 would be appreciated.  Permission is"
1150 PRINT "    granted to copy this program as long as this header is"
1160 PRINT "    not removed."
1170 PRINT "    "
1180 PRINT "    Copyright 1983 by RPSoft"
1190 PRINT "    "
1200 PRINT "----------------------------------------------"
1210 PRINT "     "
1220 INPUT "enter input filename - ";FIN$
1230 INPUT "select letter or mailing label mode (l or m) - ";MD$
1240 INPUT "enter column for margin - ";MAR:IF MAR=0 THEN MAR=1
1250 OPEN "I",#1,FIN$
1260 OPEN "O",#3,"lpt1:"
1270 '
1280 '   read input file
1290 '
1300 IF EOF(1) THEN STOP
1310 LL$=L$
1320 LINE INPUT #1,L$:GOSUB 1580
1330 IF MID$(L$,1,1)="." THEN 1380 ' command line found
1340 PRINT#3,TAB(MAR);L$:NL=NL+1:GOTO 1300
1350 '
1360 '   parce commands and process if necessary
1370 '
1380 IF MD$="m" THEN GOTO 1530 ' mailing label option selected
1390 IF MID$(L$,1,4)<>".use" THEN 1300
1400 FMRG$=MID$(L$,6,LEN(L$)-5)
1410 IF LEN(FMRG$)=0 THEN PRINT "error in specifing .use file":GOTO 1300
1420 IF MID$(FMRG$,1,1)=" " THEN FMRG$=MID$(FMRG$,2,LEN(FMRG$)-1):GOTO 1420
1430 CLOSE#2
1440 OPEN "I",#2,FMRG$
1450 IF EOF(2) THEN 1300
1460 LINE INPUT #2,L$:GOSUB 1580
1470 IF MID$(L$,1,3)=".bp" THEN PRINT #3,CHR$(12):GOTO 1450
1480 PRINT#3,TAB(MAR);L$
1490 GOTO 1450
1500 '
1510 '  put spaces between mailing addresses
1520 '
1530 IF MID$(LL$,1,1)=MID$(L$,1,1) THEN 1300 ' skip duplicate commands
1540 FOR J=NL+1 TO 6
1550 PRINT#3," ":NEXT J:NL=0:GOTO 1300
1560 '
1570 '   remove tabs
1580 P0=INSTR(1,L$,CHR$(9)) : IF P0=0 THEN RETURN
1590 NIN=9-(P0 MOD 8):L$=MID$(L$,1,P0-1)+STRING$(NIN," ")+MID$(L$,P0+1,LEN(L$))
1600 GOTO 1580 '  any more tabs ?
```
{% endraw %}

## MAIL.TXT

{% raw %}
```
. this is a sample input file to the program MAIL.BAS
. As with many text formatters lines beginning with a "." are
. interperted as commands.  They will not be printed on
. the final output but may be used to control processing of
. the program.
.
. The following is an example input file to MAIL.BAS.  In the letter
. mode it will generate inividual letters to each address listed.  Text
. in the file PR1.LET will be used for the body of the letter.	Text may
. be inserted into the body of the letter by dividing the "boiler plate"
. part into 2 files and including the unique part in this file. There
. are probably other uses for this program such a creating custom legal
. contracts.  This file provides a record of what has been sent without
. tying up a lot of storage. Non printing comments may also be inserted
. as you can see from this text.
.
PC Magazine
One Park Ave
New York, NY 10016
.use pr1.let
Softtalk for the IBM PC
11160 McCormick St
North Hollywood, CA 91601
.use pr1.let
Personal Computer Age
8138 Foothill Blvd.
Sunland, CA 91107
.use pr1.let
PC Tech Journal
The World Center Suite 212
Baltimore, MD 21202
.use pr1.let
PC World
555 DeHaro St.
San Francisco, CA 94107
.use pr1.let
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

## MONBLNK1.DOC

{% raw %}
```
I've noticed lately that many terminals and computers have the
ability to blank their screens after a period of inactivity
in order to keep the phosphor from being eaten away.  I thought
this was a silly frill until I blanked my monochrome display
in reverse video and looked closely.  And I've had it less
than a year!

The MONBLNK1.COM program disables the video on a monochrome display
The COLBLNK1.COM program disables the video on the Color Display

after five minutes of inactivity.  Everything disappears except the
flashing cursor.  The display is re-enabled when either a video I/O
or keyboard interrupt occur.  Note that some programs (for example
Wordstar 3.0, or Monoclok.com), access the video ram directly and
thus circumvent the video I/O interrupt.  If you are using such a
program and don't touch the keyboard for five minutes, the screen
will blank even if there is video I/O going on.  If this happens,
just press any key, even a shift key, and the display will return.

Run the program once in DOS and it will stay resident until power
down or re-boot.

To adjust the time delay, get into debug with the program and patch
the bytes at 0129H and 014AH with a new value.  The delay will be
about 14 seconds times the number at these locations.

Rich Winkel
*******************************************************************
Rich has uploaded New versions for the color and the mono which do
work . as of 07/17/83
CAPITAL PC Softsig. 301-949-8848 IBMPC
s uploaded New versions for 
```
{% endraw %}

## MSPOOL.DOC

{% raw %}
```

                          Multi Spooler

     So what does the world need another print spooler for?
     I've been dissatisfied with all the spoolers I've seen, for 
various reasons.  Some can't even drive an Epson at full speed, 
some interfere with interrupt handling (as when downloading over 
a COM port and printing at the same time), some spend more time 
in wait loops than they do printing, some have a set, unchangable 
buffer size, some are so inefficient that it's a wonder the 
computer gets anything else done, and most are insensitive to 
competing demands for CPU time, making the term 'background job' 
inapplicable.  
     I wrote this spooler with speed, flexibility and background 
execution in mind.  Unlike most other spoolers I've seen, it is 
not driven by the timer interrupt.  It's driven by an excellent 
indicator of free CPU time, the keyboard I/O interrupt.  Any time 
a program requests keyboard input, it can be assumed it has a 
little free time on it's hands, especially since the keyboard is 
the slowest I/O device on the computer; and since keyboard I/O 
gets high priority in any interactive program, it's assured that 
the spooler will be called often enough to drive a printer at a 
good clip, usually at top speed.
     As far as flexibilty, the size of the spooler buffer is 
specified in 8K increments at startup, as well as which printer 
(LPT1-LPT3) to spool for.  In fact, 3 printers can be spooled 
simultaneously by running the spooler 3 times, specifying each 
printer in turn.
     Once the spooler is installed, it's buffer can be purged in 
the middle of a print by running the spooler again, specifying 
the appropriate printer (if it's not LPT1).  If the program finds 
there is already a spooler for that printer installed, it will 
ask if you want to purge the buffer.  
     The spooler has 3 modes of operation.  In one mode, if the 
buffer gets filled, it will begin printing a character for each 
character it puts in the buffer, until things get caught up.  The 
second mode arises when a keyboard I/O call is made which 
requests that the keyboard routine return the next character in 
the keyboard buffer, or if there is none, wait until one is 
entered and then return it.  This is the optimum mode for the 
spooler.  If there is no character in the keyboard buffer, it 
will begin looping and printing until one is entered, and then 
release control (BASIC often makes I/O calls of this type).  The 
third mode is used when a keyboard I/O call is made which only 
requests the status of the buffer. (i.e. return a character if 
one is there, but don't wait for it.)  In this event, the spooler 
will print one character and exit. (WordStar makes use of this 
type of I/O call).  Depending on the activity of the program 
making the call, type three will drive a printer at a rate 
anywhere from tolerable to top speed.  Using WordStar, my 
Okidata 82A is run at full tilt.  The other two modes will drive 
a printer at full speed.
     Use the HEX2BIN program to convert MSPOOL.HEX to MSPOOL.COM.

SYNTAX:

     To install:
     A>mspool a b

     To purge buffer:
     A>mspool a

Where: a (= 1, 2 or 3) specifies the printer, and
       b (= 1 - 7) is the size of the buffer in 8K blocks.

Limitations:

     This program will not spool for a serial printer, even if 
          the MODE LPT#:=COMn command is in effect.
     Programs such as QSWAP, which switch the entries in the 
          printer table in the ROM bios data area, will not 
          affect this spooler once it is installed.  (In the 
          interest of speed, the appropriate entry in this table 
          is put into the spooler code itself at initialization)
     Programs which bypass INT 16 for keyboard I/O will stop the 
          spooler. (This is conceivable, although I've never seen 
          such a program.  The program would have to have very 
          specific I/O requirements, such as, perhaps, APL.)
     In order for the buffer purge routine to work, the spooler 
          should be the last resident routine loaded which 
          intercepts INT 17 (printer I/O).  This is because the 
          spooler looks at where the INT 17 vector is pointing to 
          determine whether it has already been installed.  If 
          more than one printer is being spooled, the spooler 
          will pick it's way though all the installed spoolers in 
          an attempt to find one configured for the printer 
          specified in the command.  When/if it finds one, it 
          asks whether you want to purge it.  If it lands in
          unfamiliar territory, it assumes there is not yet a 
          spooler installed for that printer, and proceeds 
          accordingly.  
     When more than one printer is being spooled, in some 
          circumstances (i.e. in mode 2 above), the last spooler 
          loaded will have priority, then the second to last.

Rich Winkel
Columbia, Mo.

```
{% endraw %}

## PC-LIB.BAS

{% raw %}
```bas
0 DIM DUPL$(20),PRO$(9),LIBFILE$(10),MUNIQUE(500),NUNIQUE(500),INF$(112)
1 DIM B$(10),A$(14),BIT(15)
2 VERSION$="2.1":DOT$="."
3 GOTO 20010
1000 '
1001 '
1002 ' menu processor
1003 ' input vars:NC # of menu choices, TITLE$- menu title,
1004 '           :PRO$(NC)- prompts for each menu choice
1005 '           :EXPERT-   0 (confirm reqd)  1(no confirm required)
1006 '      display program header, date and time-- then menu title
1007 '
1010 SCREEN 0:LN$="\"+SPACE$(SCWD-2)+"\":DEF FNA(X$)=SCWD/2-LEN(X$)/2
1015 KEY OFF :CHOICE=-1
1020 GOSUB 1510 'print program header
1025 LOCATE 4, FNA(TITLE$) : COLOR 15,0 : PRINT TITLE$ : COLOR 7,0 'print menu title
1030 GOSUB 1110  ' print selection prompts
1035 LOCATE 19, 1: IF EXPERT THEN PRINT "Expert mode    : Type a number to make your choice                         "
1038 IF EXPERT<>1 THEN LOCATE 19,1:PRINT"Beginner's mode: Type a number to light up your choice then press enter."
1040 COLOR 7,0: CM$="" : WHILE CM$="" : CM$=INKEY$ : WEND
1045 IF ASC(CM$)=27 THEN CHOICE = 69 : RETURN  'quit if ESC
1050 '
1055 ' check for input validity and if ok return  else try again
1060 '
1065 CM = ASC(CM$) - ASC("0") :IF CM >=0 AND CM <=NC THEN CHOICE = CM
1070 IF (CHOICE<>0) THEN GOTO 1099
1080 EXPERT=1-EXPERT
1085 GOTO 1030
1099 IF (EXPERT OR CM$=CHR$(13)) AND (CHOICE>=0) THEN RETURN ELSE 1030
1100 '
1105 ' print centered selection prompts
1109 '
1110 LONGEST = 0 : FOR I = 1 TO NC : IF LEN(PRO$(I))>LONGEST THEN LONGEST = LEN(PRO$(I))
1120 NEXT I : XP = (SCWD/2-2)-LONGEST/2
1125 LOCATE 6,XP:PRINT "0.                    ";:LOCATE 6,XP+3:IF EXPERT=0 THEN PRINT"Change to expert mode        ";
1130 IF EXPERT=1 THEN PRINT "Change to beginner's mode"
1135 FOR I=1 TO NC:LOCATE 6+I,XP:IF CHOICE=I THEN COLOR 31,0 ELSE COLOR 7,0
1199 PRINT CHR$(48+I);". "; PRO$(I) : NEXT I : COLOR 7,0:RETURN
1400 '
1401 ' pause routine
1402 '
1410 IF N<=0 OR N>1000 THEN N=5
1415 NN=N*10
1420 SOUND 32700,NN:SOUND 32700,2
1499 RETURN
1500 '
1502 ' title line  Input vars:PROGNAME$, SCWD(screen width), QUIET(1 suppresses
1504 ' Internal variables:none Output variables:none
1506 ' SBR function:  prints program name, date and time inverse at screen top
1508 '
1510 CLS:IF QUIET THEN RETURN ELSE COLOR 0,7 : PRINT
1515 LOCATE 1,1:PRINT "  "+PROGNAME$;TAB(SCWD-15);"Date:";DATE$
1520 LOCATE 2,1:PRINT"Store library file on drive ";DRLIB$;"     Read disks in drive ";DRCAT$
1525 LOCATE 2,SCWD-15:PRINT"Time:  ";TIME$
1599 PRINT: COLOR 7,0 : RETURN
1900 '
1902 ' Await key press to continue
1904 '
1910 LOCATE 22,15:PRINT"Press any key to continue"
1915 V$=INKEY$:IF V$="" THEN GOTO 1910
1999 RETURN
2000 '
2001 '  ERROR HANDLING ROUTINES
2002 '
2009 '               BAD FILE NAME
2010 ER=ERR:EL=ERL
2011 IF(ERR<>52) AND (ERR<>64) THEN 2012 ELSE LOCATE 24,1:PRINT"Invalid file name";:FOR I=1 TO 2000:NEXT I:LOCATE 24,1:PRINT SPACE$(80):RESUME
2012 IF(ERR<>58 AND ERL<>19010) THEN 2013 ELSE RESUME 19011
2013 IF(ERR<>53 AND ERL<>19010) THEN 2015 ELSE RESUME 19012
2015 IF ERR<>53 THEN 2020 ELSE LOCATE 24,1:PRINT"Do you have the right disk in the drive and the correct file name?";:FOR I=1 TO 2000:NEXT I:LOCATE 24,1:PRINT SPACE$(80):RESUME
2020 IF ERR<>61 THEN 2025 ELSE LOCATE 23,1:PRINT"The disk appears to be full."
2021 IF EL=5240 THEN PRINT"Please insert a non-full disk in the drive and press ENTER":INPUT AA$:CLS:RESUME 5210
2022 PRINT"You should start cataloging from the beginning on a fresh diskette":FOR I=1 TO 1000:NEXT I:END
2025 IF ERR<>70 THEN 2030 ELSE LOCATE 24,1:PRINT"The disk is write-protected. Please insert the correct diskette.":FOR I=1 TO 2000:NEXT I:LOCATE 24,1:PRINT SPACE$(80):RESUME
2030 IF ERR<>71 THEN 2040 ELSE LOCATE 22,1:PRINT"Check the drives to be sure the door is closed and a diskette is inside.":PRINT"Press ENTER to continue.";:INPUT AA$:LOCATE 22,1:PRINT SPACE$(75):PRINT SPACE$(75)
2031 IF EL=5220 THEN RESUME 5220 ELSE RESUME 6530
2040 PRINT"ERR=";ERR;" ERL=";EL
2042 END
2099 RETURN
2300 '
2301 '   TITLE PAGE SUBROUTINE
2302 '
2310 CLS
2315 LOCATE 2,40:PRINT"PC-LIB":LOCATE 4,25:PRINT"Copyright(c) 1983 by John Dannenfeldt"
2320 LOCATE 5,39:PRINT"Version ";VERSION$
2325 LOCATE 10,15:PRINT"If you are using this program and find it to be of value,":LOCATE 11,15:PRINT"suggestions would be appreciated."
2330 LOCATE 14,35:PRINT"John C. Dannenfeldt"
2335 LOCATE 15,35:PRINT"1240 10th Street"
2340 LOCATE 16,35:PRINT"Silvis, IL 61282"
2345 LOCATE 21,15:PRINT"You are encouraged to copy and share this program with others."
2347 LOCATE 18,15:PRINT"The latest version will always be available on the QCPC BBS":LOCATE 19,15:PRINT"at 1-319-332-7648 or 1-309-796-2214"
2349 GOSUB 19010
2350 GOSUB 1900
2399 RETURN
5000 '
5001 '  display disk libraries currently on disk
5002 '
5010 FI$=DRLIB$+":"+"***.dta"
5011 SCREEN ,,0,0:GOSUB 1510:PRINT" Current library files are:":SCR$="":I=1:LOCATE 6,1:FILES FI$
5099 GOSUB 1910:RETURN
5200 '
5201 ' Open new library .HDR file
5202 '
5210 C$=CHR$(13)+CHR$(10)
5216 S1$="NAME"+C$+" 8 "+C$+"EXT"+C$+" 3 "+C$+"MO#"+C$+" 2 "+C$+"DA#"+C$+" 2 "
5217 S2$=C$+"YEAR#"+C$+" 4 "+C$+"SIZE#"+C$+" 6 "+C$+"REQ"+C$+" 6 "+C$+"DOSV#"+C$+" 1 "+C$+"FN#"+C$+" 2 "+C$
5218 S3$="DESCRIPTION"+C$+" 21 "+C$+"VOL"+C$+" 6 "+C$+CHR$(26)+STRING$(38,0)
5219 S$=S1$+S2$+S3$
5220 OPEN LFD$+".HDR" FOR OUTPUT AS #1:PRINT #1,S$:CLOSE
5299 RETURN
6100 '
6101 ' create new library file
6102 '
6110 OP=0:R%=1
6120 GOSUB 1510:LOCATE 4,1:PRINT SPACE$(30)+"CREATE NEW LIBRARY FILE"
6125  PRINT:PRINT"You will be asked to insert each disk once for cataloging.":PRINT"Please be sure to only catalog the disks you want in this library file!"
6130 LOCATE 10,5:INPUT"What name would you like to give this library file";LFD$:IF LEN(LFD$) >8 OR LEN(LFD$)<1 OR LFD$="" THEN GOTO 6130
6135 FIDTA$=DRLIB$+":"+LFD$+".DTA"
6140 FL=0
6141 GOSUB 5210
6142 LOCATE 12,5
6145 IF FL=0 THEN PRINT"Would you like to start cataloging your disks";:ELSE GOSUB 1510:PRINT"Would you like to catalog another disk? (Y/N)";:
6150 INPUT I$
6155 IF ((I$="y") OR (I$="Y")) THEN GOTO 6170
6160 IF ((I$="n") OR (I$="N")) THEN 6195
6165 GOTO 6145
6170 FL=1
6175 LOCATE 16,5:PRINT "Insert disk in drive ";DRCAT$;" and press return";:INPUT I$
6180 GOSUB 6310  ' read files off one disk
6194 GOTO 6145
6195 GOSUB 6710  ' close new library file
6199 RETURN
6300 '
6301 '  read FAT from one disk
6302 '
6310 SCREEN 0:KEY OFF
6315 IF DRCAT$="A" THEN DISK%=1  '1 for drive A
6316 IF DRCAT$="B" THEN DISK%=2  '2 for drive B
6317 IF DRCAT$="C" THEN DISK%=3  '3 for drive C
6320 DEF SEG=&H2100  'Dependent upon your memory
6325 INIT%=2:GETNEXT%=5:FILENAME$="???????????"
6330 CALL INIT%(DISK%,FILENAME$):N=1
6335 FILENAME$=SPACE$(14):CALL GETNEXT%(FILENAME$,STATUS%)
6340 IF (( STATUS%<=0) AND (FILENAME$=SPACE$(14))) THEN GOTO 6390
6341 B%=PEEK(0)+PEEK(1)*256 ' get offset value
6342 FDATE=PEEK(B%+26)*256+PEEK(B%+25)
6343 FTIME=PEEK(B%+24)*256+PEEK(B%+23)
6344 FSIZE$=STR$(32768!*PEEK(B%+31)+256*PEEK(B%+30)+PEEK(B%+29))
6345 BIT(0)=(FDATE AND 1)/1:BIT(1)=(FDATE AND 2)/2:BIT(2)=(FDATE AND 4)/4:BIT(3)=(FDATE AND 8)/8:BIT(4)=(FDATE AND 16)/16:BIT(5)=(FDATE AND 32)/32:BIT(6)=(FDATE AND 64)/64:BIT(7)=(FDATE AND 128)/128:BIT(8)=(FDATE AND 256)/256
6346 BIT(9)=(FDATE AND 512)/512:BIT(10)=(FDATE AND 1024)/1024:BIT(11)=(FDATE AND 2048)/2048:BIT(12)=(FDATE AND 4096)/4096:BIT(13)=(FDATE AND 8192)/8192:BIT(14)=(FDATE AND 16384)/16384:BIT(15)=0
6347 DAY$=STR$(BIT(0)+2*BIT(1)+4*BIT(2)+8*BIT(3)+16*BIT(4))
6348 DAY$=RIGHT$(DAY$,2)
6350 MONTH$=STR$(BIT(5)+2*BIT(6)+4*BIT(7)+8*BIT(8))
6351 MONTH$=RIGHT$(MONTH$,2)
6352 YRS$=STR$(BIT(9)+2*BIT(10)+4*BIT(11)+8*BIT(12)+16*BIT(13)+32*BIT(14)+64*BIT(15)+1980):YEAR$=RIGHT$(YRS$,4)
6354 IF STATUS%=8 THEN VOL$=MID$(FILENAME$,3,6): GOTO 6335
6355 NME$=RIGHT$(FILENAME$,LEN(FILENAME$)-2)
6360 LOCA=INSTR(NME$,DOT$):EXT$=MID$(NME$,LOCA+1,3):NME$=LEFT$(NME$,LOCA-1)
6365 GOSUB 6610:IF DU=1 THEN GOTO 6335
6370 SIZE$=STR$(VAL(FSIZE$)):LOCATE 19,1:PRINT NME$;EXT$;DAY$;MONTH$;YEAR$;SIZE$
6375 INF$(N)=NME$+SPACE$(8-LEN(NME$))+EXT$+SPACE$(3-LEN(EXT$))+MONTH$+SPACE$(2-LEN(MONTH$))+DAY$+SPACE$(2-LEN(DAY$))+YEAR$+SPACE$(4-LEN(YEAR$))+SIZE$+SPACE$(6-LEN(SIZE$))
6380 N=N+1
6385 GOTO 6335
6390 CLOSE:FP$=FIDTA$
6391 PRINT"Is   ";VOL$;"   the correct volume name for this disk";:INPUT;ANS$
6392 IF((LEFT$(ANS$,1)="Y") OR (LEFT$(ANS$,1)="y")) THEN GOTO 6395
6393 PRINT:INPUT"Type in a volume name- 6 characters please";VOL$:IF VOL$="" THEN GOTO 6393
6395 FOR I=1 TO N-1:I$=INF$(I)+SPACE$(30)+VOL$+CHR$(13):GOSUB 6510:R%=R%+1:NEXT I
6396 CLOSE:O2=0
6399 RETURN
6500 '
6501 ' add program data to library file
6502 '
6510 IF O2=1 THEN GOTO 6520
6515 OPEN FP$ AS #2 LEN=62:O2=1
6520 FIELD #2,62 AS DT$:LSET DT$=I$:PUT #2,R%
6599 RETURN
6600 '
6601 ' check for duplicate files
6602 '
6610 DU=0
6623 STRI$=NME$+"."+EXT$
6625 FOR Q=1 TO ND
6626 IF (LEFT$(STRI$,LEN(DUPL$(Q)))=DUPL$(Q)) THEN DU=1
6629 NEXT Q
6699 RETURN
6700 '
6701 ' close new library file correctly
6702 '
6710 CLOSE
6715 OPEN FIDTA$ AS #1 LEN=62
6720 FIELD #1,1 AS F$,59 AS D$
6725 FA$=CHR$(92):DA$=SPACE$(61)
6730 LSET F$=FA$
6735 LSET D$=DA$
6740 PUT #1,R%
6745 CLOSE
6799 RETURN
6800 '
6801 ' Duplicate file definitions
6802 '
6810 GOSUB 1510:LOCATE 5,1:PRINT"Since some files like IBMDOS.COM are on many or most disks,":PRINT"we allow you to define 20 file names that you don't really care to catalog."
6812 ND=6
6815 PRINT"The current duplicate file names are:"
6820 FOR Q=1 TO 10:LOCATE 8+Q,10:PRINT DUPL$(Q) TAB(30) DUPL$(Q+10):NEXT Q
6825 PRINT"Would you like to add to the list";:INPUT AN$
6830 IF LEFT$(AN$,1)="Y" OR LEFT$(AN$,1)="y" THEN GOTO 6835
6831 RETURN
6835 LOCATE 20,10:INPUT"Additional file name";DUPL$(ND+1)
6840 LOCATE 21,10:INPUT"More additions?";AN$:ND=ND+1:IF AN$="y" OR AN$="Y" THEN 6845 ELSE GOTO 6899
6845 LOCATE 19,10:PRINT SPACE$(40):PRINT SPACE$(40):PRINT SPACE$(40):LOCATE 20,10:GOTO 6820
6899 RETURN
6900 '
6901 '  Change default drives
6902 '
6910 GOSUB 1510
6915 OLIB$=DRLIB$:OCAT$=DRCAT$
6920 INPUT "Do you want to change the drive functions noted above";AN$:IF LEFT$(AN$,1)="Y" OR LEFT$(AN$,1)="y" THEN 6925 ELSE RETURN
6925 PRINT:INPUT"Store library file on drive ";DRLIB$:IF DRLIB$="" THEN 6925
6930 PRINT:INPUT"Read disks in drive ";DRCAT$:IF DRCAT$="" THEN 6930
6935 IF DRLIB$=DRCAT$ THEN PRINT "You can't do both in one drive! Try again!":GOTO 6955 ELSE 6936
6936 UPLIB$=CHR$(ASC(DRLIB$)-32):UPCAT$=CHR$(ASC(DRCAT$)-32)
6938 IF (ASC(DRLIB$)>96) THEN DRLIB$=UPLIB$
6939 IF (ASC(DRCAT$)>96) THEN DRCAT$=UPCAT$
6950 IF((LEN(DRLIB$)<>1) OR(LEN(DRCAT$)<>1)) THEN 6955
6951 LIBA=ASC(DRLIB$):CATA=ASC(DRCAT$)
6953 IF((LIBA<65) OR (CATA<65)) THEN LOCATE 22,1:PRINT"Please use rational drive letters only!!":GOTO 6955
6954 RETURN
6955 GOSUB 1910:LOCATE 22,1:PRINT SPACE$(80):DRLIB$=OLIB$:DRCAT$=OCAT$:GOTO 6910
7000 '
7001 ' Program instructions
7002 '
7010 GOSUB 1510
7015 PRINT"PURPOSE--":PRINT"This program allows you to create a diskfile of all your programs":PRINT"by reading the directory off each disk you catalog, assigning a volume name":PRINT"and writing it to a file that may be manipulated by PC-FILE-- a"
7017 PRINT"public domain database program available from Jim Button"
7019 PRINT:PRINT"DEFAULT FILE NAMES--":PRINT"Since some file names like IBMDOS.COM are on":PRINT"many or most disks, we allow you to define 20 file names":PRINT"that you don't really care to catalog."
7020 PRINT:PRINT"After you create your library file you must use PC-FILE to sort":PRINT"it before PC-FILE can produce reports on your disk library."
7025 PRINT:PRINT"Remember to start BASIC/S:1024 so there is enough buffer space!!"
7030 GOSUB 1910
7099 RETURN
11000 '
11002 ' Compare and annotate files
11004 '
11010 O1=0:O2=0:O3=0:O4=0:GOTO 11240
11015 GOSUB 1510
11030 '
11035 IF O1=1 THEN GOTO 11045
11040 OPEN FG$ AS #1 LEN=26:O1=1
11045 IF EOF(1) THEN MDONE=1:GOTO 11055
11050 FIELD #1,2 AS MINAME$,20 AS REST$,4 AS MD$:GET #1,R%:MD=VAL(MD$)
11055 RETURN
11060 '
11065 IF O2=1 THEN GOTO 11075
11070 OPEN FG$ AS #2 LEN=26:O2=1
11075 IF EOF(2) THEN NDONE=1:GOTO 11085
11080 FIELD #2,2 AS NINAME$,20 AS REST$,4 AS ND$:GET #2,R%:ND=VAL(ND$)
11085 RETURN
11090 '
11095 IF O3=1 THEN GOTO 11105
11100 OPEN FG$ AS #3 LEN=62:O3=1
11105 FIELD #3,11 AS MNAME$,51 AS MREST$:GET #3,R%:RETURN
11110 '
11115 IF O4=1 THEN GOTO 11125
11120 OPEN FG$ AS #4 LEN=62:O4=1
11125 FIELD #4,11 AS NNAME$,51 AS NREST$:GET #4,R%:RETURN
11150 '
11155 IF O1=1 THEN GOTO 11165
11160 OPEN FG$ AS #1 LEN=62:O1=1
11165 FIELD #1,62 AS DTA$:GET #1,R%:RETURN
11170 '
11190 '
11195 GOSUB 1510:LOCATE 4,1:PRINT"This program will compare any two library files CAT1.DTA and CAT2.DTA":PRINT"created by this version of PC-LIB"
11200 PRINT:PRINT"It is suggested that you operate this program from electronic disk since":PRINT"it does a great deal of disk reading and writing and will run faster and":PRINT"cause less disk wear on an electronic disk."
11205 PRINT:PRINT"The disk (electronic or real) should contain these programs:":PRINT"   CAT1.DTA":PRINT"   CAT1.INX":PRINT"   CAT2.DTA":PRINT"   CAT2.INX":PRINT"   BASIC.COM"
11210 PRINT"   and this program- PC-LIB.BAS":PRINT:PRINT"These programs will take up about 100K of space so a  128K or 196K ":PRINT"electronic disk is suggested to allow adequate room for the resulting files":GOSUB 1910
11215 GOSUB 1510:PRINT"This program will create on the disk the program runs from two sets of PC-LIB":PRINT"formatted files:":PRINT:PRINT"UNIQUE1.DTA contains all the entries found only in the CAT1.DTA":PRINT"file on comparison."
11220 PRINT:PRINT"UNIQUE2.DTA contains all the programs found only in CAT2.DTA":PRINT:PRINT"You will need the accompanying header files CAT1.HDR and CAT2.HDR":PRINT"when you use PC-FILE to examine CAT1.DTA and CAT2.DTA":GOSUB 1910
11225 GOSUB 1510:PRINT"For your convenience, below is a BAT file listing that can be used to load":PRINT"the electronic disk with the necessary programs and start the program":PRINT"Please note the parameters needed when you use BASIC"
11230 PRINT:PRINT"It assumes that you use CAT1.DTA and CAT2.DTA as the names for your library files":PRINT"and that you use C: as your electronic disk":PRINT
11235 PRINT"       COPY A:CAT1.* C:":PRINT"       COPY A:CAT2.* C:":PRINT"       COPY A:BASIC.COM C:":PRINT"       COPY A:PC-LIB.BAS C:":PRINT"       BASIC C:COMPARE.BAS/S:1024/F:4":GOSUB 1910:RETURN
11240 'Setup
11255 GOSUB 1510:INPUT"Do you need instructions";AA$:IF LEFT$(AA$,1)="Y" OR LEFT$(AA$,1)="y" THEN GOSUB 11190
11260 CLOSE
11265 GOSUB 1510:LOCATE 3,1:PRINT"What is the name of the first library file to be compared":INPUT;CAT1$:X=INSTR(CAT1$,"."):IF X<>0 THEN GOTO 11280
11270 IF LEN(CAT1$)>8 THEN GOTO 11265
11275 CAT1ROOT$=CAT1$:GOTO 11285
11280 CAT1ROOT$=LEFT$(CAT1$,X-1)
11285 CAT1INX$=CAT1ROOT$+".inx":CAT1DTA$=CAT1ROOT$+".dta"
11290 LOCATE 5,1:PRINT"What is the name of the library file to be compared with ";CAT1DTA$;:INPUT;CAT2$:X=INSTR(CAT2$,"."):IF X<>0 THEN GOTO 11305
11295 IF LEN(CAT2$)>8 THEN GOTO 11290
11300 CAT2ROOT$=CAT2$:GOTO 11310
11305 CAT2ROOT$=LEFT$(CAT2$,X-1)
11310 CAT2INX$=CAT2ROOT$+".inx":CAT2DTA$=CAT2ROOT$+".dta":PRINT:PRINT"Would you like a file of all programs unique to ";CAT1DTA$;:INPUT;UN1$:PRINT:PRINT"Would you like a file of all programs unique to ";CAT2DTA$;:INPUT;UN2$
11315 PRINT:PRINT"Would you like to annotate ";CAT2DTA$;" with the descriptions from ";CAT1DTA$;:INPUT;ANNO$:GOSUB 1510:LOCATE 3,1:PRINT"To compare library files they must be sorted correctly first.":PRINT"the correct sort order is:":PRINT"  Name"
11317 PRINT"Ext"
11320 INPUT"Is the new file sorted in this order";ANS$:A$=LEFT$(ANS$,1):IF A$<>"n" OR A$<>"N" THEN GOTO 11330
11325 PRINT"Sort ";NEWROOT$;" correctly using PC-FILE and then run this program again":END
11330 PRINT"Preparing files....":LFD$="unique1":GOSUB 5210:LFD$="unique2":GOSUB 5210:M=1:N=1:MU=1:NU=1:PRINT"Comparing files...."
11335 R%=M:FG$=CAT1INX$:GOSUB 11030:R%=N:FG$=CAT2INX$:GOSUB 11060:IF MDONE AND NDONE THEN GOTO 11410
11340 IF MDONE THEN GOTO 11400
11345 IF NDONE THEN GOTO 11390
11350 IF(NINAME$>MINAME$) THEN GOTO 11390
11355 IF(MINAME$>NINAME$) THEN GOTO 11400
11360 IF LEFT$(MINAME$,1)="\" AND LEFT$(NINAME$,1)="\" THEN GOTO 11410
11365 R%=MD:FG$=CAT1DTA$:GOSUB 11090:R%=ND:FG$=CAT2DTA$:GOSUB 11110:LOCATE 18,1:PRINT MNAME$,NNAME$:IF(NNAME$>MNAME$) THEN GOTO 11390
11370 IF(MNAME$>NNAME$) THEN GOTO 11400
11375 IF ((ANNO$<>"Y") AND (ANNO$<>"y")) THEN GOTO 11385
11380 INFO$=MID$(MREST$,15,30):DN$=MID$(NREST$,1,14):DE$=MID$(NREST$,45,7):NE$=NNAME$+DN$+INFO$+DE$:PRINT NE$:FP$=CAT2DTA$:R%=ND:I$=NE$:CLOSE #2:O2=0:GOSUB 6510:CLOSE #2:O2=0
11385 M=M+1:N=N+1:GOTO 11335
11390 'master unique
11395 MUNIQUE(MU)=MD:MU=MU+1:M=M+1:GOTO 11335
11400 'new unique
11405 NUNIQUE(NU)=ND:NU=NU+1:N=N+1:GOTO 11335
11410 'create unique files
11415 CLOSE:O1=0:O2=0:O3=0:O4=0:IF ((UN1$<>"Y") AND (UN1$<>"y")) THEN GOTO 11425
11420 FG$=CAT1DTA$:FP$="unique1.dta":CLS:PRINT"Programs unique to ";CAT1DTA$:FOR N=1 TO MU-1:R%=MUNIQUE(N):GOSUB 11150:I$=DTA$:PRINT"M UNIQUE(";N;")= ";DTA$:R%=N:GOSUB 6510:NEXT N:R%=MU:I$="\"+SPACE$(61):GOSUB 6510:CLOSE:O1=0:O2=0
11425 ' create nunique
11427 GOSUB 1910
11430 IF ((UN2$<>"Y") AND (UN2$<>"y")) THEN GOTO 11440
11435 FG$=CAT2DTA$:FP$="unique2.dta":CLS:PRINT"Programs unique to ";CAT2DTA$:FOR N=1 TO NU-1:R%=NUNIQUE(N):GOSUB 11150:I$=DTA$:PRINT"N UNIQUE(";N;")= ";DTA$:R%=N:GOSUB 6510:NEXT N:R%=NU:I$="\"+SPACE$(61):GOSUB 6510
11440 GOSUB 1910:CLOSE:RETURN
19000 '
19002 'CREATE FAT READING PROGRAM
19004 '
19010 NAME "FATREAD.BIN" AS "FATREAD.BIN"
19011 DEF SEG=&H2100:BLOAD"FATREAD.BIN",0:RETURN
19012 OPEN "R", #1,"FATREAD.BIN",1
19013 FIELD #1, 1 AS N$
19014 READ N:LL=(N/28)+1
19016 FOR I = 1 TO N
19018 READ X$,CHECK:FOR C=1 TO LEN(X$) STEP 2:CC$="&H"+MID$(X$,C,2):IF CHECK=9999 THEN 19024
19020 LSET N$=CHR$(VAL(CC$)):PUT #1:CHECK=CHECK-VAL(CC$):NEXT C:IF CHECK<>0 THEN 19052
19022 NEXT I:CLOSE
19024 GOTO 19056
19026 DATA  292
19028 DATA FD001700001C012401EB3590EB6490FF00000000003F000000000000,1571
19030 DATA 00000000000000000000000000000000000000000000000000000000,0
19032 DATA 0000000000000000558BEC1E8CC88ED833F6268B5E06268B5F01268A,2211
19034 DATA 00888410004683FE0B7CF38B7608268B04A20F0032C0A238001F5DCA,2526
19036 DATA 0400558BEC1E8CC88ED8FA892636008C1634008ED0BCCC01FBBA1D01,3095
19038 DATA B41ACD21BA0800803E3800007508FE0ô3800B411EB02B412CD213C00,2255
19040 DATA 7560268B5E0826803F0E7551268B5F0133FF8BF78BCFB06002062401,2561
19042 DATA 2688014726C6013A478A8425013C20740626880147EB0C80F9007507,2128
19044 DATA FEC126C6012E474683FE08750C80F9007507FEC126C6012E4783FE0B,3091
19046 DATA 7CCFA0300132E4EB03B8FFFFEB03B8FEFF268B5E06268907FA8E1634,3606
19048 DATA 008B263600FB1F5DCA04001A,838
19050 DATA 000000,9999
19052 PRINT "* * ERROR VERIFY FOLLOWING DATA * * * "
19054 PRINT X$;",";CHECK
19056 CLOSE
19060 DEF SEG=&H2100:BLOAD"FATREAD.BIN",0
19099 RETURN
20000 '
20001 ' Initialization
20002 '
20010 DUPL$(1)="BASIC.COM":DUPL$(2)="BASICA.COM"
20032 DUPL$(3)="COMMAND.COM":DUPL$(4)="IBMBIO.COM"
20034 DUPL$(5)="IBMDOS.COM":DUPL$(6)="SD.COM"
20040 ND=6
20045 FAT=0
20050 DRLIB$="B":DRCAT$="A"
20060 DEF SEG=0:POKE &H417,PEEK(&H417) OR &H40
20085 ON ERROR GOTO 2010
21000 '
21001 'main program calling menu processor
21002 '
21010 SCREEN 0:KEY OFF
21017 GOSUB 2310
21020 SCWD=80:PROGNAME$="         PC-LIB   Multidisk Librarian"
21025 EXPERT=0:NC=7:TITLE$="Main Menu"
21030 PRO$(1) = "Create new library file"
21035 PRO$(2) = "Display current library files"
21040 PRO$(3) = "Redefine duplicate file list"
21045 PRO$(4)="Change default drives"
21050 PRO$(5)="Leave this program"
21053 PRO$(6)="Program instructions"
21054 PRO$(7)="Compare two library files and annotate"
21055 GOSUB 1010
21060 IF CHOICE=1 THEN GOSUB 6110
21065 IF CHOICE=2 THEN GOSUB 5010
21070 IF CHOICE=3 THEN GOSUB 6810
21075 IF CHOICE=4 THEN GOSUB 6910
21080 IF CHOICE=5 THEN 30000
21083 IF CHOICE=6 THEN GOSUB 7010
21084 IF CHOICE=7 THEN GOSUB 11010
21085 GOTO 21055
30000 CLS:GOSUB 1510:LOCATE 10,1:PRINT"Remember to sort your new disk library file:";LFNA$:LOCATE 11,1:PRINT"before using any other PC-File features":GOSUB 1910
30005 END
```
{% endraw %}

## PC-LIB.DOC

{% raw %}
```
        This file gives some of the suggested standard codes to be used in 
describing the programs you catalog using PC-LIB.  The program is best used for 
keeping track of extensive software libraries such as those of a user's group.
Of course it can be used for other purposes as you see fit.

Limitations:
        The program must be used with PC-FILE and follow its rules.
        It operates under DOS 2.0.
        It will read files from drive A,B or C but cannot handle subdirectories 
so its use with hard disks is limited.  This is a function of the machine 
language used to read the FAT and is not easily changed.  Any suggestions in 
that regard would be appreciated.
        It will not annotate your files for you unless you already have an
annotated MASTER.DTA library file such as that on our BBS(which only covers
the public domain programs we have on hand)

                            Public Domain Software 

                 Proposed classification for use with PC-LIB

     It will help if different users groups could use the same 
classification scheme so that they could more easily compare the public 
domain software they currently have in their group software library.  Here 
is the list of codes I used in making up the MASTER.DTA file for the QCPC 
User's Group as available on our BBS at 319-332-7648.
     It is also suggested that you use disk labels so that you can remember 
your VOL labels for later reference.  The best labels are those on disk 
which you can set up when formatting or using a Norton utility or 
VOLSER.COM.
     We'd be happy to receive NUNIQUE files from other users groups so that 
we can see what other interesting software we're missing. Hopefully a more 
unified public domain cataloging system may result in better dissemination 
of high quality author-donated software.  


Hardware requirements: REQ
--------------------------
     Display-  E-- Either display card
               G-- Color graphics card only
               M-- Monochrome card only

     Input     J-- Joystick 
     Device    L-- Lightpen
 
     System    1-- 64K
     Memory    2-- 128K
               3-- 192K
               4-- 256K
               5-- 320K
               6-- 384K
               7-- 446K
               8-- 510K
               9-- 574K

     Other     P-- Printer
     Devices   X-- Modem
               O-- Other

DOS version required: DOSV#
---------------------------
               1-- MSDOS 1.1 Only
               2-- MSDOS 1.1 or 2.0
               3-- MSDOS 2.0 Only
               6-- CP/M 86 
               7-- UCSD Pascal
               9-- Other

Software function: FN
---------------------
 0 GAMES
  00 Adventure- ADVENTURE, MAZE, NEWALIEN, PIRATE
  01 Arcade- PC-MAN, 747, PONG, STARTREK, METEOR, ARTILLERY, CANNON
  02 Board- CHESS, GOMOKU, MONOPOLY, CRIBBAGE, DOMINOES, OTHELLO
  03 Casino/card- BLACKJACK, YAHTZEE, KENO, SLOTMACH, POKER
  04 Logic- RUBIK, CRYPTO, WORDPUZL, T-T-TOE, BOGGLE, CIAGAME, BLACKBOX, HANOI
  05 Sport- GOLF
  06 Text- HANGMAN
  09 Miscellaneous-

 1 MUSIC/ SOUND
  10 Music demo- MAGDALEN, JUKEBOX, BALLAD, JOY-BACH, WILLTELL, MINUET, 
TUNES3, SOLFE
  11 Music utilities- MUSIC, SOUNDS
  19 Miscellaneous-

 2 GRAPHICS
  20 Graphic demo- KALEIDO, BALL, 3DHAT, USALIST, WORLDMAP, CLOCK, STAR3D, 
GLOBE, BUTTFLY, BLIMP, NUDES, 3DSURF, DARTH, SATURN, LIFE, BUCKY, COOKIES, 
FROGGY, CRZBAL, LINES
  21 Graphics utilities- TABLET, DRAW, 3DPLOT
  29 Miscellanous-

 3 PERSONAL
  30 Education- ARITHA, ALGEBRA, MATHTEST
  31 Finance- BUDGET
  32 Health-
  39 Misc- MPG, MORSE, CALCULAT, BOOKINV

 4 BUSINESS
  40 Accounting- 
  41 Application aids
         Wordstar- UNWS, DEBUGS, WSINDEX
         1,2,3- UNP123, RANGE123, TREND123
  42 Database- PCFILE, EFS, AUTOFILE, MAIL
  43 Financial- AMORT, FINANCE
  44 Graphics- BARCHART, BESTLINE
  45 Spreadsheet- MINICALC
  46 Wordprocessing- FRED, STOPGAP, EDIT, PC-PAD, ET4
  49 Miscellaneous-

 5 PROGRAMMING
  50 Assembler- PRIMER, COM2ASM2
  51 BASIC subroutines- sort, search, menus, data input, config, read DIR, 
curve fit, find/replace, day of week
  52 BASIC utilities- COMPACT, XREF, PROFILER, ASM>DATA, B-SIMPLE, BASICAID
  53 Languages- MVPFORTH, BASIC to FORTRAN converter
  54 Learning- ARCHIE, POKEPEEK, HELPCOMM
  59 Miscellaneous-

 6 UTILITIES
  60 Batch file aids- TUNE, ASK 
  61 Display- mono/color switch(in DOS), unused screen blank, screen clocks, 
redefine text characters
  62 DOS enhancers- SD, SYSTAT, VDEL(selective delete)
  63 File alteration- VOLSER, ALTER ,FILTER, un/hide, un/protect, un/delete
  64 File maintenance- PCLIB, ARCHIVE, DSAVER(bit copier)
  65 Keyboard- reset DOS fn keys, redefine all keys
  66 Printer- setup(from DOS/BASIC), listing formatters, graphics dumps
  67 System- soft resets, ramdisks, spoolers
  69 Miscellaneous- drive tester, diagnostic programs, head cleaner

 7 COMMUNICATIONS
  70 File modifiers- BIN2HEX/CVTHEX, ADDLF, UN/SQUISH
  71 Host programs- RBBS, HOST
  72      Utilities- DISKPGM2(file xfer time)
  73 Terminal programs- PCTALK III, MODEM, DUMTERM
  74      Enhanncements- PCTIII 450, SPLITSCREEN
  75      Utilities- TALKSORT, PCTDIR, PCTKEY
  79 Miscellaneous

 8 SPECIAL APPLICATIONS
  80 Education-
  81 Engineering-
  82 Health care-
  83 Legal-
  84 Membership organizations-

DESCRIPTIONS
        I propose using a leading * in the description field to mark programs 
that are the best or most recent for their function.  If this method is 
followed you can use PC-FILE to dump out a shorter list of the most desirable 
programs only.  Quality is in the eye of the user but we have marked our MASTER 
to reflect what we thought we the most useful programs we had on hand.

```
{% endraw %}

## PRNT2.BAS

{% raw %}
```bas
1000 '   Wild card print program
1010 CLS
1020 PRINT "----------------------------------------------"
1030 PRINT "    "
1040 PRINT "    PRNT2 - Wild card print program "
1050 PRINT "    "
1060 PRINT "    Prints listings of all files matching DOS type file "
1070 PRINT "    descriptions.  For example *.* would print all files on"
1080 PRINT "    disk.  .COM, .EXE and .OBJ files are ignored.  To use"
1090 PRINT "    this program just answer the questions.  Default values"
1100 PRINT "    are listed in [ ]'s."
1110 PRINT "    "
1120 PRINT "    If you find this program or other texttools from RPSoft"
1130 PRINT "    useful, a suggested donation of $25 to RPSoft, 1271 Palamos,"
1140 PRINT "    Sunnyvale, CA 94086 would be appreciated.  Permission is"
1150 PRINT "    granted to copy this program as long as this header is"
1160 PRINT "    not removed."
1170 PRINT "    "
1180 PRINT "    Copyright 1983 by RPSoft"
1190 PRINT "    "
1200 PRINT "----------------------------------------------"
1210 PRINT "     "
1220 DEFINT A-Z
1230 DIM FIN$(200),IPGN(200),ILIN(200)
1240 '
1250 PRINT "enter default drive [b] - ";
1260 K$=INKEY$:IF LEN(K$)<>1 THEN 1260
1270 IF K$=CHR$(13) THEN K$="b":GOTO 1340
1280 IF ASC(K$)<96 THEN K$=CHR$(ASC(K$)+32) ' to lower case
1290 PRINT K$
1300 IF K$<"a" OR K$>"d" THEN PRINT K$;" is an invalid drive name":GOTO 1250
1310 '
1320 '   get list of files
1330 '
1340 CLS:PRINT "files on drive: ";K$:PRINT:FILES K$+":*.*":PRINT
1350 INPUT "enter file description - /cr/ to end -";F$
1360 IF F$="" THEN 1610
1370 PR$=K$+":":IF LEN(F$)<=2 THEN 1390
1380 IF MID$(F$,2,1)<>":" THEN F$=PR$+F$ ELSE PR$=MID$(F$,1,2)
1390 SCREEN 0
1400 CLS:WIDTH 80:FILES F$
1410 PRINT :PRINT "pause while filenames are read ..."
1420 FOR DR=1 TO 24
1430 FOR DC=0 TO 65 STEP 13
1440 IF CHR$(SCREEN(DR,DC+1)) = " " THEN 1340
1450 AR=AR+1
1460 FIN$(AR)=PR$
1470 FOR L=1 TO 12
1480 C$=CHR$(SCREEN(DR,DC+L))
1490 IF L=9 THEN C$="."
1500 IF C$=" " THEN 1520
1510 FIN$(AR)=FIN$(AR)+C$
1520 NEXT L
1530 IF LEN(FIN$(AR))<4 THEN 1580
1540 L4$=RIGHT$(FIN$(AR),4)
1550 IF L4$=".COM" THEN AR=AR-1
1560 IF L4$=".EXE" THEN AR=AR-1
1570 IF L4$=".OBJ" THEN AR=AR-1
1580 NEXT DC
1590 NEXT DR
1600 GOTO 1350
1610 NIF=AR
1620 IF NIF=0 THEN PRINT "no files to list":GOTO 1340
1630 '
1640 PRINT "print first line of file on title page - [y] or n ? ";
1650 K$=INKEY$:IF LEN(K$)<>1 THEN 1650
1660 IF K$=CHR$(13) THEN K$="y":GOTO 1680
1670 IF ASC(K$)<96 THEN K$=CHR$(ASC(K$)+32) ' to lower case
1680 PRINT K$
1690 IF K$<>"y" AND K$<>"n" THEN PRINT K$;" is an invalid response ":GOTO 1640
1700 '
1710 '   sort list of filenames
1720 '
1730 PRINT :PRINT "pause while filenames are sorted ...":PRINT
1740 ISW=1
1750 WHILE ISW=1:ISW=0
1760  FOR I=2 TO NIF
1770   IF FIN$(I-1)>FIN$(I) THEN ISW=1:SWAP FIN$(I-1),FIN$(I)
1780  NEXT I
1790 WEND
1800 '
1810 '    printer setup
1820 '
1830 'LPRINT CHR$(29); ' set pitch to 12 on Okidata 84 printer
1840 LPI$="6"
1850 WIDTH "lpt1:",255
1860 IF LPI$="8" THEN LPRINT CHR$(27);"9";CHR$(18); ' 8 lines per inch
1870 NLS=66:LL=55
1880 IF LPI$="8" THEN NLS=88:LL=70
1890 '
1900 '
1910 '  print first page
1920 '
1930 FOR I=1 TO 5:LPRINT :NEXT I
1940 TD$=TIME$+" "+DATE$
1950 LPRINT TAB(10);TD$:LPRINT
1960 LPRINT TAB(10);"files contained in listing:":LPRINT
1970 FOR I=1 TO NIF
1980 LPRINT FIN$(I);:IF K$<>"y" THEN 2110
1990 '  print first line in file
2000 OPEN "I",#1,FIN$(I)
2010 IF EOF(1) THEN 2110
2020 LINE INPUT #1,L$:IF LEN(L$)=0 THEN 2110
2030 IF ASC(MID$(L$,1,1))=255 THEN 2110
2040 GOSUB 2710
2050 '  remove leading non-alpha characters
2060 FOR J=1 TO LEN(L$)-1
2070 C=ASC(MID$(L$,J,J)):IF C>64 AND C<123 THEN 2090
2080 NEXT J
2090 L=LEN(L$)-J+1:L1$=MID$(L$,J,L)
2100 LPRINT TAB(18);L1$;
2110 CLOSE #1
2120 '
2130 LPRINT "":NEXT I
2140 LN=8+NIF
2150 FMAX=NIF:NUMF=0
2160 '
2170 '   open next file and print it
2180 '
2190 NUMF=NUMF+1
2200 IF NUMF>1 THEN ILIN(NUMF-1)=LCNT ' save previous line count
2210 LCNT=0
2220 CLOSE #1
2230 IF NUMF>NIF THEN 2460
2240 OPEN "I",#1,FIN$(NUMF)
2250 PRINT "printing file ";FIN$(NUMF);" ..."
2260 GOSUB 2640:IPGN(NUMF)=PGNUM
2270 '
2280 '   read from file and print
2290 '
2300 IF EOF(1) THEN 2190
2310 LINE INPUT #1,L$
2320 IF LEN(L$)=0 THEN 2340
2330 IF ASC(MID$(L$,1,1))=255 THEN PRINT "invalid data in file":GOTO 2190
2340 IF MID$(L$,1,3)=".ej" THEN GOSUB 2640:GOTO 2300
2350 IF MID$(L$,1,1)=CHR$(12) THEN L$="<<line feed here>>"
2360 GOSUB 2710 '   remove tabs
2370 IF LEN(L$)=0 THEN L$="  "
2380 IF L$="  " AND LN>LL-10 THEN GOSUB 2640
2390 LCNT=LCNT+1
2400 LPRINT TAB(5);L$
2410 LN=LN+1:IF LN>LL THEN GOSUB 2640
2420 GOTO 2300
2430 '
2440 '  print index
2450 '
2460 GOSUB 2640
2470 LPRINT TAB(10);"Index to files";TAB(50);TD$
2480 LPRINT
2490 LPRINT TAB(10);"file";TAB(51);"page   #lines"
2500 FOR I=1 TO NIF
2510 LPRINT TAB(10);FIN$(I);"  ";STRING$(38-LEN(FIN$(I)),".");
2520 LPRINT USING "#####    ";IPGN(I),ILIN(I)
2530 LTOT=LTOT+ILIN(I)
2540 NEXT I
2550 LPRINT :LPRINT TAB(40);"   total lines - ";:LPRINT USING " ######";LTOT
2560 LN=4+NIF:GOSUB 2640
2570 LPRINT CHR$(27);"9";CHR$(0)
2580 STOP
2590 '
2600 '  subroutines
2610 '
2620 '  paging
2630 '
2640 PGNUM=PGNUM+1
2650 FOR I=LN TO NLS-3:LPRINT:NEXT I
2660 IF NUMF>NIF THEN RETURN
2670 LPRINT TAB(45);FIN$(NUMF);TAB(60);TD$;"  page";PGNUM
2680 LPRINT:LN=0:RETURN
2690 '
2700 '   remove tabs
2710 P0=INSTR(1,L$,CHR$(9)) : IF P0=0 THEN RETURN
2720 NIN=9-(P0 MOD 8):L$=MID$(L$,1,P0-1)+STRING$(NIN," ")+MID$(L$,P0+1,LEN(L$))
2730 GOTO 2710 '  any more tabs ?
```
{% endraw %}

## PRNT3.BAS

{% raw %}
```bas
1000 '   Wild card print program
1010 CLS
1020 PRINT "----------------------------------------------"
1030 PRINT "    "
1040 PRINT "    PRNT3 - Wild card print program (directorys present)"
1050 PRINT "    "
1060 PRINT "    Prints listings of all files matching DOS type file "
1070 PRINT "    descriptions.  For example *.* would print all files on"
1080 PRINT "    disk.  .COM, .EXE and .OBJ files are ignored.  To use"
1090 PRINT "    this program just answer the questions.  Default values"
1100 PRINT "    are listed in [ ]'s."
1110 PRINT "    "
1120 PRINT "    If you find this program or other texttools from RPSoft"
1130 PRINT "    useful, a suggested donation of $25 to RPSoft, 1271 Palamos,"
1140 PRINT "    Sunnyvale, CA 94086 would be appreciated.  Permission is"
1150 PRINT "    granted to copy this program as long as this header is"
1160 PRINT "    not removed."
1170 PRINT "    "
1180 PRINT "    Copyright 1984 by RPSoft"
1190 PRINT "    "
1200 PRINT "----------------------------------------------"
1210 PRINT "     "
1220 DEFINT A-Z
1230 DIM FIN$(200),IPGN(200),ILIN(200)
1240 '
1250 PRINT "enter default drive [b] - ";
1260 K$=INKEY$:IF LEN(K$)<>1 THEN 1260
1270 IF K$=CHR$(13) THEN K$="b":GOTO 1340
1280 IF ASC(K$)<96 THEN K$=CHR$(ASC(K$)+32) ' to lower case
1290 PRINT K$
1300 IF K$<"a" OR K$>"d" THEN PRINT K$;" is an invalid drive name":GOTO 1250
1310 '
1320 '   get list of files
1330 '
1350 INPUT "enter file description - /cr/ to end -";F$
1360 IF F$="" THEN 1610
1370 PR$=K$+":":IF LEN(F$)<=2 THEN 1390
1380 IF MID$(F$,2,1)<>":" THEN F$=PR$+F$ ELSE PR$=MID$(F$,1,2)
1390 SCREEN 0
1400 CLS:WIDTH 80:FILES F$
1410 PRINT :PRINT "pause while filenames are read ..."
1420 FOR DR=2 TO 24
1430 FOR DC=0 TO 54 STEP 18
1440 IF CHR$(SCREEN(DR,DC+1)) = " " THEN 1350
1450 AR=AR+1
1460 FIN$(AR)=PR$
1470 FOR L=1 TO 12
1480 C$=CHR$(SCREEN(DR,DC+L))
1490 IF L=9 THEN C$="."
1500 IF C$=" " THEN 1520
1510 FIN$(AR)=FIN$(AR)+C$
1520 NEXT L
1530 IF LEN(FIN$(AR))<4 THEN 1580
1540 L4$=RIGHT$(FIN$(AR),4)
1550 IF L4$=".COM" THEN AR=AR-1
1560 IF L4$=".EXE" THEN AR=AR-1
1570 IF L4$=".OBJ" THEN AR=AR-1
1580 NEXT DC
1590 NEXT DR
1600 GOTO 1350
1610 NIF=AR
1620 IF NIF=0 THEN PRINT "no files to list":GOTO 1340
1630 '
1640 PRINT "print first line of file on title page - [y] or n ? ";
1650 K$=INKEY$:IF LEN(K$)<>1 THEN 1650
1660 IF K$=CHR$(13) THEN K$="y":GOTO 1680
1670 IF ASC(K$)<96 THEN K$=CHR$(ASC(K$)+32) ' to lower case
1680 PRINT K$
1690 IF K$<>"y" AND K$<>"n" THEN PRINT K$;" is an invalid response ":GOTO 1640
1700 '
1710 '   sort list of filenames
1720 '
1730 PRINT :PRINT "pause while filenames are sorted ...":PRINT
1740 ISW=1
1750 WHILE ISW=1:ISW=0
1760  FOR I=2 TO NIF
1770   IF FIN$(I-1)>FIN$(I) THEN ISW=1:SWAP FIN$(I-1),FIN$(I)
1780  NEXT I
1790 WEND
1800 '
1810 '    printer setup
1820 '
1830 'LPRINT CHR$(29); ' set pitch to 12 on Okidata 84 printer
1840 LPI$="6"
1850 WIDTH "lpt1:",255
1860 IF LPI$="8" THEN LPRINT CHR$(27);"9";CHR$(18); ' 8 lines per inch
1870 NLS=66:LL=55
1880 IF LPI$="8" THEN NLS=88:LL=70
1890 '
1900 '
1910 '  print first page
1920 '
1930 FOR I=1 TO 5:LPRINT :NEXT I
1940 TD$=TIME$+" "+DATE$
1950 LPRINT TAB(10);TD$:LPRINT
1960 LPRINT TAB(10);"files contained in listing:":LPRINT
1970 FOR I=1 TO NIF
1980 LPRINT FIN$(I);:IF K$<>"y" THEN 2110
1990 '  print first line in file
2000 OPEN "I",#1,FIN$(I)
2010 IF EOF(1) THEN 2110
2020 LINE INPUT #1,L$:IF LEN(L$)=0 THEN 2110
2030 IF ASC(MID$(L$,1,1))=255 THEN 2110
2040 GOSUB 2710
2050 '  remove leading non-alpha characters
2060 FOR J=1 TO LEN(L$)-1
2070 C=ASC(MID$(L$,J,J)):IF C>64 AND C<123 THEN 2090
2080 NEXT J
2090 L=LEN(L$)-J+1:L1$=MID$(L$,J,L)
2100 LPRINT TAB(18);L1$;
2110 CLOSE #1
2120 '
2130 LPRINT "":NEXT I
2140 LN=8+NIF
2150 FMAX=NIF:NUMF=0
2160 '
2170 '   open next file and print it
2180 '
2190 NUMF=NUMF+1
2200 IF NUMF>1 THEN ILIN(NUMF-1)=LCNT ' save previous line count
2210 LCNT=0
2220 CLOSE #1
2230 IF NUMF>NIF THEN 2460
2240 OPEN "I",#1,FIN$(NUMF)
2250 PRINT "printing file ";FIN$(NUMF);" ..."
2260 GOSUB 2640:IPGN(NUMF)=PGNUM
2270 '
2280 '   read from file and print
2290 '
2300 IF EOF(1) THEN 2190
2310 LINE INPUT #1,L$
2320 IF LEN(L$)=0 THEN 2340
2330 IF ASC(MID$(L$,1,1))=255 THEN PRINT "invalid data in file":GOTO 2190
2340 IF MID$(L$,1,3)=".ej" THEN GOSUB 2640:GOTO 2300
2350 IF MID$(L$,1,1)=CHR$(12) THEN L$="<<line feed here>>"
2360 GOSUB 2710 '   remove tabs
2370 IF LEN(L$)=0 THEN L$="  "
2380 IF L$="  " AND LN>LL-10 THEN GOSUB 2640
2390 LCNT=LCNT+1
2400 LPRINT TAB(5);L$
2410 LN=LN+1:IF LN>LL THEN GOSUB 2640
2420 GOTO 2300
2430 '
2440 '  print index
2450 '
2460 GOSUB 2640
2470 LPRINT TAB(10);"Index to files";TAB(50);TD$
2480 LPRINT
2490 LPRINT TAB(10);"file";TAB(51);"page   #lines"
2500 FOR I=1 TO NIF
2510 LPRINT TAB(10);FIN$(I);"  ";STRING$(38-LEN(FIN$(I)),".");
2520 LPRINT USING "#####    ";IPGN(I),ILIN(I)
2530 LTOT=LTOT+ILIN(I)
2540 NEXT I
2550 LPRINT :LPRINT TAB(40);"   total lines - ";:LPRINT USING " ######";LTOT
2560 LN=4+NIF:GOSUB 2640
2570 LPRINT CHR$(27);"9";CHR$(0)
2580 STOP
2590 '
2600 '  subroutines
2610 '
2620 '  paging
2630 '
2640 PGNUM=PGNUM+1
2650 FOR I=LN TO NLS-3:LPRINT:NEXT I
2660 IF NUMF>NIF THEN RETURN
2670 LPRINT TAB(45);FIN$(NUMF);TAB(60);TD$;"  page";PGNUM
2680 LPRINT:LN=0:RETURN
2690 '
2700 '   remove tabs
2710 P0=INSTR(1,L$,CHR$(9)) : IF P0=0 THEN RETURN
2720 NIN=9-(P0 MOD 8):L$=MID$(L$,1,P0-1)+STRING$(NIN," ")+MID$(L$,P0+1,LEN(L$))
2730 GOTO 2710 '  any more tabs ?
```
{% endraw %}

## TEXTTOOL.DOC

{% raw %}
```

Texttools from RPSoft


Texttools is a set of three text processing tools for the IBM PC.

The first one, PRNT2, produces listings of all files matching one or more
file descriptors.  For example specifing "*.*" would produce a listing of
all files on a disk.  Pages are numbered and labeled with filename and
date.  An index is printed at the end to all files listed.  PRNT3 is a
version for PRNT2 which should be used when BASIC was loaded from a disk
containing directories.

The program MAIL.BAS allows custom letters to be generated from a file of
names and addresses.  Mailing labels may also be generated from the same
name and address file.

XUP creates multiple columns from a single column of data.  The user may
select the number of columns, width of columns and the number of lines per
page.

All programs are written in BASIC and require BASIC to be loaded.


Files contained on release disk
------------------------------------------------------------------------
MAIL	 BAS  Mailmerge program
MAIL	 TXT  Sample input file for MAIL.BAS with instructions for use
PR1	 LET  Sample letter for MAIL.BAS
PRNT2	 BAS  Wild card print program - prints all files *.* or other file spec
PRNT3	 BAS  Version of PRNT2 to use when running BASIC from a disk with
	      directories
XUP	 BAS  Prints textfiles in columnar tables
TEXTTOOL DOC  This file

If you find any texttools from RPSoft useful, a suggested donation of $25
(or whatever you think they are worth) to RPSoft, 1271 Palamos
Sunnyvale, CA 94086 would be appreciated.  If there is enough interest I
will develop more such tools and will notify contributors. Whether or not
you contribute please feel free to pass along copies of these programs to
your friends, but please do not remove the file headers and distribute all
files together.

```
{% endraw %}

## VOLSER.DOC

{% raw %}
```
                                               VOLSER
                                                   Command

            
    
    Purpose:    This command allows the user to alter/create
                volume labels.
            
    Format:     VOLSER [d:][/V]
            
    Type:       Internal        External
                                  ***
            
    Remarks:    This command is designed to be used 
                interactively. If a drive identifier is not
                specified, drive A: is assumed. The /V(ersion)
                parameter display the current version number.
                
    Example:    VOLSER

                This command line expects a disk to be labeled
                in drive A:
            
                VOLSER b:/v
            
                Displays the current version number at prompts
                the user for a volume label, and if one did not
                exist, creates it.
            
            C>VOLSER /V
            
            VOLSER Version X.XX (C)Copyright T A Davis, 1983
                
            Volume in drive B is not labeled
            
            Enter new label (11 chars) or ENTER ? AP783_
                
            Diskette label changed.

```
{% endraw %}

## XUP.BAS

{% raw %}
```bas
1000 '   program to print columns of text side by side
1010 CLS
1020 PRINT "----------------------------------------------"
1030 PRINT "    "
1040 PRINT "    XUP - prints columns of text side by side "
1050 PRINT "    "
1060 PRINT "    Prints text in a variable number of columns.  The program"
1070 PRINT "    prompts for input and output filenames, column width, number"
1080 PRINT "    of columns, and the number of lines per page."
1090 PRINT "    "
1100 PRINT "    If you find this program or other texttools from RPSoft"
1110 PRINT "    useful, a suggested donation of $25 to RPSoft, 1271 Palamos,"
1120 PRINT "    Sunnyvale, CA 94086 would be appreciated.  Permission is"
1130 PRINT "    granted to copy this program as long as this header is"
1140 PRINT "    not removed."
1150 PRINT "    "
1160 PRINT "    Copyright 1983 by RPSoft"
1170 PRINT "    "
1180 PRINT "----------------------------------------------"
1190 PRINT "     "
1200 DIM L$(500)
1210 WIDTH "lpt1:",180
1220 INPUT "enter input, output filenames - ";FIN$,FOUT$
1230 INPUT "enter #columns, col width, #lines - ";NCOLS,CWID,NPC
1240 OPEN "I",#1,FIN$
1250 OPEN "O",#2,FOUT$
1260 '
1270 '   read input file
1280 '
1290 IF EOF(1) THEN 1370
1300 NLS=NLS+1
1310 LINE INPUT #1,L$:GOSUB 1510:L$(NLS)=L$
1320 IF NLS=NCOLS*NPC THEN 1370
1330 GOTO 1290
1340 '
1350 '   write output file
1360 '
1370 NPGS=NPGS+1
1380 PRINT "writing page ";:PRINT USING "###";NPGS;:PRINT " ..."
1390 FOR LN=1 TO NPC
1400 FOR CNUM=0 TO NCOLS-1
1410 LP=LN+CNUM*NPC:IF LP>NLS THEN 1430
1420 PRINT #2,TAB(CNUM*CWID+1);L$(LP);
1430 NEXT CNUM:PRINT #2," "
1440 NEXT LN:PRINT #2,CHR$(12)
1450 IF EOF(1) THEN 1480
1460 NLS=0 : GOTO 1290
1470 '
1480 PRINT "normal end -";NPGS;" pages written":CLOSE #1:CLOSE#2:STOP
1490 '
1500 '   subroutine to remove tabs
1510 P0=INSTR(1,L$,CHR$(9)) : IF P0=0 THEN RETURN
1520 NIN=9-(P0 MOD 8):L$=MID$(L$,1,P0-1)+STRING$(NIN," ")+MID$(L$,P0+1,LEN(L$))
1530 GOTO 1510 '  any more tabs ?
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0089

     Volume in drive A has no label
     Directory of A:\

    PRNT2    BAS      5760  10-08-83   5:35p
    XUP      BAS      2048  10-08-83   5:32p
    MAIL     BAS      2560  10-08-83   5:31p
    MAIL     TXT      1242  10-08-83  11:18a
    PR1      LET      1073  10-08-83   5:29p
    MINICALC DOC     12166   7-10-83  11:12p
    PC-LIB   BAS     16897   9-27-83   2:10p
    PC-LIB   DOC      5848   9-27-83   3:01p
    VOLSER   DOC      1295   8-08-83   7:05p
    VOLSER   COM      1152   8-08-83   7:03p
    MSPOOL   COM       896   8-19-83   5:12p
    MSPOOL   DOC      5058   7-21-83   5:26a
    COLBLNK1 COM       256   7-26-83  11:05p
    MONBLNK1 DOC      1536   7-29-83  11:04p
    MONBLNK1 COM       200   7-31-83  10:00p
    MINICALC EXE     52864   1-01-80  12:25a
    TEXTTOOL DOC      1845   3-04-84  10:35a
    PRNT3    BAS      5608   3-04-84   9:37a
    CRC      TXT      1404  11-09-84   1:24p
    CRCK4    COM      1536  10-21-82   7:54p
           20 file(s)     121244 bytes
                           34816 bytes free
