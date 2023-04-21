---
layout: page
title: "PC-SIG Diskette Library (Disk #919)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0919/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0919"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POTPOURRI MENUING PROGRAM"

    POTPOURRI is a menuing system with several built-in programs.  Add
    applications to the menu and execute them from within the system.  A DOS
    gateway is provided so you can do housekeeping functions without leaving
    the main system.
    
    Programs executable from the main menu include a programming calculator
    for binary, hexagonal, and bit manipulation functions; a standard
    four-function calculator; and an appointment calendar that can arrange
    and print appointment schedules for up to 12 months.  Included in
    POTPOURRI is a routine to describe system hardware configuration, a
    drawing program for sketching and a music program to create and playback
    music files.  All the programs described have documentation screens
    accessible from the main menu.
    File Descriptions:
    
    AUTOEXEC BAT  Automatic execution file.
    INSTALL  BAT  Automatic installation batch file.
    INSTALL  TXT  Installation explanation text file.
    OGHAM    <DIR>Subdirectory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES919.TXT

{% raw %}
```
Disk No  919
Program Title: POTPOURRI version 1.00
PC SIG version 1
 
    POTPOURRI is a menuing program that also has several sub-programs. The
user can add programs to the POTPOURRI menu and execute them from within
the program. A DOS gateway is provided so housekeeping functions can be
done without leaving the main program. Programs executable from the main
menu include a computer science calculator for binary, hexagonal and bit
manipulation functions together with a standard four-function calculator.
An appointment calendar program can arrange and print out appointment
schedules for periods of up to 12 months. Also included: a routine that
describes current system hardware configuration, a drawing program for
sketching or doodling and a music program that lets you create and playback
music files. All of the programs described have documentation screens
accessible from the main menu.
 
Usage: Menuing
 
System Requirements: 256K memory, one disk drive and a hard disk.
 
How to start: Type: INSTALL (press enter).
 
Suggested Registration: $34.00
 
File Descriptions:
 
AUTOEXEC  BAT   Automatic execution file.
INSTALL   TXT   Installation explanation text file.
INSTALL   BAT   Automatic installation batch file.
OGHSHELL  EXE   Menu shell: used by main program.
OGHAM     EXE   POTPOURRI main program.
PC_EQUIP  EXE   POTPOURRI sub-routine.
DOODLE    EXE   POTPOURRI sub-routine.
CAL       EXE   POTPOURRI sub-routine.
BRUN10    EXE   POTPOURRI sub-routine.
MAZE      EXE   POTPOURRI sub-routine.
OGHAM     TXT   Menu choice descriptions: used by main program.
OGH_1-8   TXT   8 text files used by main program.
OGH       FIL   Main program data file.
OGH       DIR   Main program data file.
OGH       PRE   Main program data file.
OGH       SGS   Main program data file.
LIBERTY   1-3   Main program data file.
MICHAEL   SNG   Sample song: executed from menu.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                        INSTALLING POTPOURRI


PC Requirements

Your PC must have a color monitor and a hard disk.


Backing Up Potpourri Master Disk

Before starting the installation of Potpourri, make a working copy
of the master by using the DOS DISKCOPY command.  Type:

      DISKCOPY A: A:

Put the original disk in a safe place and use the working copy for
installing Potpourri. 


Installation Procedure

Insert the working copy into disk drive A.  Type:

      A:INSTALL

Potpourri is now installed.  Place the working copy in a safe place.

The INSTALL.BAT file created the \OGHAM directory on disk drive C
and loaded all of the Potpourri files into the \OGHAM directory.
If you did not have an AUTOEXEC.BAT file, INSTALL created one for 
you.  If there was an AUTOEXEC.BAT file,  please edit the file and
add ;\OGHAM to the PATH line or if a PATH line does not exist, enter
a new line PATH C:\;\OGHAM. Add a last line to the file and type in
OGHAM as this is the executable name for Potpourri.

If you are not familiar with AUTOEXEC.BAT, this is a special file
that is executed when the power switch is turned on or when you  
hold down the three keys Ctrl Alt Del.  

You are ready to enter Potpourri.  Type:
      
      AUTOEXEC


The first menu you should use is the Explain Menu.  All of the 
documentation for Potpourri resides within this menu screen.
```
{% endraw %}

## OGH_1.TXT

{% raw %}
```
(C) Copyright Ogham 1987
 
                            Potpourri Menu Program

                                 Introduction

The Potpourri install feature established a \OGHAM directory and loaded all
of the files into this directory.  An additional requirement was the entry 
of \OGHAM on the PATH line of the AUTOEXEC.BAT file.  The minimum of the 
PATH line would be   PATH C:\;\OGHAM  .  Entry of OGHAM on the last line  
of the AUTOEXEC.BAT file allows for the automatic execution of Potpourri at
startup.  If this line was not entered, execution of Potpourri can be done
by typing OGHAM.

Do not turn the computer off while in Potpourri, as the program is controlling 
the environment.  Exit Potpourri with the Esc key and the required data will  
be contained on disk files.  

Use of the special keys for selection of an item: 
      1)  The menu screen request - select action by function key - requires
          the pressing of the F1 through F10 keys.  In some cases, the select- 
          ion requires holding the Alt key down and pressing a function key.
      2)  To move to a different menu screen or to exit from the program - Use
          Esc key - press the Esc key.
      3)  Sub-menus have - select with cursor keys - and requires the use of
          the up arrow, left arrow, down arrow and right arrow keys for 
          selecting an item.
      4)  The <cr> is the carriage return (enter) key which is the bold left
          arrow with the short vertical line attached on the tail of the
          arrow.
      5)  In some cases, the message - press any key to continue - will 
          appear and is used for error messages and return from an idle   
          state.  Press any key and the program will continue.


Entering a response to a prompt requires the use of <cr> when more than one 
keystroke is required such as in responding to Enter date (1-31).  A <cr> is
not required if the prompt request that you press a key such as in Press Y
for Yes or N for No.  The prompt will guide you by the keyword:
         Enter ( requires a <cr> )
         Press ( does not require a <cr> ).

You may type alphabetic uppercase or lowercase in all of your responses to 
the prompts. 

If a typing mistake is made prior to <cr>, use the Backspace key to make the  
correction.  The Backspace key is the bold left arrow located on the top row
of the keyboard next to NumLock.

To print the screen contents to the printer, hold the Shift key down and 
press the PrtSc key.  There are two Shift keys, one is located to the right 
of the / key and the other is located to the left of the \ key.  To print a
graphic screen such as in Doodle, the system GRAPHICS program must be loaded.
This program will be loaded at start up if the Potpourri Install program 
created the AUTOEXEC.BAT file.

                                Potpourri Menu

The Potpourri menu itemizes all of the menus that can be selected by pressing
of a function key and allows you to navigate among the various menus.  Each
of these menus returns to the Potpourri menu by pressing the Esc key.  The 
Esc key on the Potpourri menu is used to exit from the Potpourri program.
 
You can also add four additional menus to the Potpourri menu screen and 
function keys 7 through 10 will be assigned to these specialized menus.  The
documentation for adding menus and items on a menu screen is covered under
the Explain Menu.

Potpourri Menu   F1 - - Explain Menu
In most cases, documentation is not required as the selection and subsequent 
prompts will guide you.  There are various parts of the program that do 
require additional information and to that extent, the Explain menu can be 
called upon to furnish the documentation.  You should list the documentation
for Doodle, as the various keys required for the manipulation of Doodle is
difficult to memorize and the use of the keys only appears in the documem-
tation.

The Explain menu has disk files associated with each function key.  These files
contain the documentation that you can select either to be displayed on the  
screen or printed.   

Potpourri Menu   F2 - - Menu Changes
You have complete control over four menus.  Each of these menus can have up to
twenty items.  Documentation for menu changes is contained within the Explain 
menu.

Potpourri Menu   F3 - - DOS Commands
Listed on the DOS Commands menu are the various commands for control of the
operating system.  Selection of a directory or a file is by use of a secondary
screen that list the directories or the files contained within the selected
directory.  Selection on the secondary screen is made by placing the cursor at 
the required directory/file and pressing <cr>.  The current directory and
selected file is displayed on the bottom line of the DOS Command menu screen.

The first selection of the F1 key of the  DOS Commands menu (Change directory
/display directories), creates a file for all directories.  Use F2 key and
F3 key of the DOS Commands menu for creating and removing directories.  Do not
make changes to the directories outside of the Potpourri program.

Potpourri Menu   F4 - - Personal Secretary
To avoid a burn in of a menu screen image, the screen will blank out if the
program is idle for a period exceeding five minutes and every five minutes a
clock will appear on the screen.  Every half hour chimes will play and on the
hour the hour will sound.  The F1 key on the Personal Secretary Menu can be
toggled to turn chimes off or on.  Pressing any key while in the idle stage
(screen is blank or with a clock) will return the screen back to the menu.

Potpourri Menu   F5 - - Relaxation
You can place popular songs into files and play these songs.  Three octaves are
used and you can select the tempo for playing a song.
The F3 key -Relax and enjoy - plays background classical music (1812 Overture 
and the William Tell Overture) while graphics are drawn on the screen.

Potpourri Menu   F6 - - Execute Programs
Programs have a file extension of .EXE or .COM.  In addition, the file 
extension of .BAT can also be used for the file (program) being displayed on
the bottom line of the screen.



                               Disclaimer
All effort has been made to ensure that the program will be trouble free.
However, the program is provided "as is" without any kind of warranty.  The
entire risk of running the program is assumed by you.


                           Shareware Agreement
If you find Potpourri useful and you intend to use the program, please
remember the time and effort that I put into writing Potpourri and send
$34 to:

             OGHAM
             Bill Vann
             908 Providence Ct
             Cupertino, CA 95014


                           Copy Permission

Please feel free to copy this program for personal use only.  Companies must
pay $34 for each copy of Potpourri.  
```
{% endraw %}

## OGH_2.TXT

{% raw %}
```
(C) Copyright Ogham 1987
                                Menu Udating
                        
The menus supplied with the system cannot be altered.  You have the capability
to add four new menus.  Each of your menus can have up to twenty item lines.
Maximun length of entry for menu and item is 60 characters.
 
The F1 key is used for adding a new menu.  The name that you type will appear
on the Potpourri menu and will also be the title of the menu screen.
  
After the assignment of a menu, use the F3 key for adding items.  These items 
can be a command i.e. COPY *.BAS \NEWDIR, an execution EDLIN MYFILE.TXT or the
use of a .BAT file i.e. EDIT MYFILE.TXT.  The item must be a complete statement
and contained on one line. 

While in the Menu Changes menu,  you will be prompted to supply the required 
data.

Again, a reminder, do not turn the computer off when in Potpourri.   Exit 
from Potpourri with the Esc key then turn power off. If you don't, all of 
the additions/changes you made will not be recorded.
```
{% endraw %}

## OGH_3.TXT

{% raw %}
```
(C) Copyright Ogham 1987
                             Appointment Calendar

The program allows up to twelve months of appointment calendars by using a 
twelve month moving cycle.  The months for next year are less than the current
month and the months for the previous year are greater than than the current 
month i.e. if current month is June, next year months can be January through  
May and previous year months can be July through December.

Each month has a separate file with a file name APPOINT.  The file extension
is 1 for January and 12 for December.  June appointment calendar file would
be named APPOINT.6.  If a new month assignment is made and the file for that 
month already exists, the existing file is deleted.  If you wish to retain 
the existing file, use the DOS Command menu to select by the F1 key the OGHAM 
directory and copy the file by use of the F6 key.

Prompts will guide you in the operation of the Appointment Calendar program.  
When all the appointments are made for a particular day,  selecting by cursor
New Date or pressing the Esc key will cause the current day appointments to be
written to the APPOINT file.
```
{% endraw %}

## OGH_4.TXT

{% raw %}
```
 (C) Copyright Ogham 1987                                    


                         COMPUTER SCIENCE CALCULATOR
      
                                Introduction

The Computer Science Calculator is listed on the Personal Secretary Menu
screem.  From the Potpourri Menu, press F4 key to enter the Personal Secretary 
Menu.  Press F9 key to enter the Computer Science Calculator program.

The Computer Science Calulator has been designed for the student learning the 
microcomputer and for the professional programmer writing system or application
programs.  The unique features allows one to use the calulator without the 
constant referral to a User's Guide.
 
The Computer Science Calculator provides three modes of operation: 

    *  Integer

    *  Real (floating point) arithmetic  

    *  Keyboard interpretation

Integer mode has four number bases - decimal, binary, hexadecimal and 
octal  - with one's or two's complement and unsigned capability.  Logical, 
arithmetic and bit manipulations is provided in this mode.  The counter 
window is user controlled and can vary from four (4) positions to 52 positions.

Real mode allows decimal point and  single-precision decimal 
entries and stores the values in double-precision format.
Results can be displayed in binary representation.

Keyboard interpretation converts entered ASCII code to character or entered 
character to ASCII code and will display extended and control character 
information.

Error conditions are provided in all three modes.  The bottom line of the 
screen is used for the error message.  If an error occurs, the message will 
remain on the screen until a key is pressed.



GETTING STARTED
Enter the Computer Science Calculator by the Personal Secretary Menu function
key 9.

Take a few moments to look over the screen.   

The three blocks - Decimal, Integer and 2's - are in reversed color.  The 
reversed color is a reminder for the current mode of operation, number base 
and complement.

The top rectangular block is the window of the x register.  In integer mode 
the window size can vary from four (4) positions to 52 positions.  
Regardless of the number base in use, an error will result if the integer 
entered exceeds the window size of the binary representation of the integer.
The number 8 in brackets following the block labeled Length is the current 
window size.  The size is for both x and y registers.

Each word or character within a block is a function of the Computer Science 
Calculator.  Notice that the first character of a word within a block is either 
upper case (as in Decimal) or lower case (as in octal).  To select a function, 
you type the first character of the word as shown.

For blocks that are attached (rotate - left - right), you are required to 
enter two (2) keystrokes.  The first key will select the function and the 
second key is the action to be taken.

The bottom display line is used for reporting errors and action to be taken.
This line is also used for instructions to exit the program or to change to
a different mode.

One more bit of information before starting.  The carriage return bar on the 
keyboard has been labeled many different ways.  The Computer Science Calculator 
presents this bar as the back arrow with a half of a tail and the word enter.  
For the examples in the User's Guide the <enter> is used when the carriage 
return bar is to be pressed.



Get acquaninted session:
    Type 12
    Type B    (Binary)
    Type H    (Hexadecimal)

When in hexadecimal, lower case letters a through f are printed.  You must 
type lower case letters for hexadecimal numbers.
    Type o    (octal)
    Type L    (Length)

The Length of the window (x register) and the y register has been changed to 
12 and the registers have been set to zero.
    Type K    (Keyboard)
    Type 7
    Type A    (ASCII)

    Press Esc and then R 
    Type 12.25
    Type I    (Integer)

The Computer Science Calculator resets to the initial stage each time you
change mode of operation. 
    Type B    (Binary)
    Type 3
The error message will be erased after:
    Type 11
    Type <enter>                                                            
This is <enter> first role, the x register is transferred to the y register 
and the x register is set to zero.
    Type D    (Decimal)
    Type 24
    Type W    (Window)
    Type P    (Previous)
    Type <enter>

This is <enter> second role.  When two keystrokes are used for a function, the 
<enter> allows an exit from the function. Other keystrokes will also allow an 
escape, but to be consistent use <enter>.

    Type +    (addition)

The arithmetic result is placed in the x register.  More will be said  about 
reversed polish notation in the arithmetic operations section.   

    Type C    (Clear)                                                                                                              

The x register and y register have been cleared.



                       ARITHMETIC OPERATIONS

This is a general description that applies to both Integer and Real modes.
Arithmetic operations are performed by reversed polish notation.  The operands
(x and y) are separated by <enter> and then the operator key is pressed.

The x and y registers are used in the arithmetic operations as shown in the 
expressions of the following table.  The arithmetic operators are identified 
on the screen as: 

    OPERATION           OPERATOR             REGISTERS
    Multiplication         x (lower case)      X x Y
    Addition               +                   X + Y
    Subtration             -                   X - Y
    Division               /                   X / Y 

In addition to the above arithmetic operators, there are two operators that 
apply to Integer mode. 

    Exponentiation         ^ (shifted 6 key)   X ^ Y
    Remainder              Modulo              X MOD Y

The use of the x and y registers is shown in the following examples for 
integer mode.

Integer mode arithmetic requires that complement must be set to 2's.
    Type I            (Integer mode)
    Type s            (set complement)
    Type 2            (two's complement)

Division example:
To divide 34 by 5 in Integer mode:
    Type 5            (divisor)
    Type <enter>      (place divisor in y register)
    Type 34           (dividend in x register)
    Type /            (division  X/Y)

    Window (x register) displays the quotient.

In Integer mode, the quotient is 
truncated and you can use Modulo (type M) to obtain the remainder. 

Modulo example:
To obtain the remainder for the above example:
    Type C            (Clear)
    Type 5
    Type <enter>
    Type 34
    Type M            (Modulo  X MOD Y)

    Window displays the remainder.

The arithmetic operator is keyed in last in reversed polish notation.  This 
also allows repetitive arithmetic operations.  Using the result of the last 
example, the value 5 is in the y register and the value 4 is in the x register.

Multiplication example:
    Type x    (multiplication  X x Y)
    Type x    (multiplication  X x Y)

Sign change
To change the sign of the value in the window, type S.

Subtractation example:
    Type C            (Clear)
    Type 25
    Type S            (Sign change)
    Type <enter>
    Type 15
    Type -            (subtraction  X-Y)

Addition example:
    Type S            (Sign change)
    Type <enter>
    Type 15
    Type +            (addition  X+Y)

Exponentiation example:
Raise 2 to the power of 6
    Type C            (Clear)
    Type 6
    Type <enter>
    Type 2
    Type ^            (shifted 6 key  X^Y)


Following are examples in Real mode:

Division example:
To divide 34 by 5 in Real mode:
    Type R            (Real mode)
    Type 5
    Type <enter>
    Type 34
    Type /            (division  X/Y)

Multiplication example:
    Type C            (Clear)
    Type 12.25
    Type <enter>
    Type 2
    Type x            (multiplication  X x Y)
  or
    Type C            (Clear)
    Type 1225E-2
    Type <enter>
    Type 2
    Type x            (multiplication  X x Y)


                               INTEGER MODE

The Computer Science Calculator stores the integer in binary representation for
both the x and y registers.  This is the reason for the error of exceeding 
length of the window.  There is also a warning of positive to negative and this
occurs when keying in an integer and the high order position (bit) of the 
window becomes a one.

Number Bases
Select the number base by typing in the first character of the word as shown 
in the number base block. 

    Type D for decimal - accepts digits 0 through 9.
    Type B for binary  - accepts digits 0 and 1.
    Type H for hexadecimal - accepts digits 0 through 9 and
           lower case letters a through f.
    Type o for octal - accepts digits 0 through 7.


All of the number bases can be used for a function.  For two number operators,
such as arithmetic operations, you can type in an integer ,enter the value into
the y register and then change to another number base for the x register.  The 
only limitation is the value of a number cannot exceed the length of binary 
representation of that number.

    Type I    (Integer mode)
    Type 8
    Type L    (Length)
    Type H    (Hexadecimal)
    Type ad   (-83 in decimal)
    Type <enter>
    Type D    (Decimal)
    Type 15
    Type +    (addition)


Window control

The window control is used for displaying the previous entered integer (-83)
which is in the y register, the current integer (-68) which is the x register
and allows the interchange of registers by the use of swap.

Using the above example:
    Type W            (window control)
    Type P            (previous)
    Type S            (swap)
    Type <enter>      (escape from window control)
Window (x register) displays -83.

Clear
Type C to clear the x and y registers.

Sign change
Type S to change the sign of the value in the window (x register).  Set
compliment must be 1's or 2's or an error message will be displayed.

Length
Type in the length required for the x and y registers.  Type L and the window 
size will be changed and the size will print in brackets alongside of the 
Length block.  Size can vary from four (4) positions to 52 positions.
 
In binary, each position within the registers is called a bit.  And a byte is 
eight (8) bits.  One half of a byte (4 bits) is a nibble.  Two bytes (16 
bits) is a word.  Four bytes (32 bits) is a doubleword.  These four lengths 
are the various lengths for the microcomputers.  For the purist, there is 
also a length of 20 bits formed by combining a segment value (offset by 
hexadecimal 0) with an offset value to obtain the effective address of the 
microcomputer's memory.

set compliment
For this section, the window is eight (8) positions in length.
    Type I    (Integer mode)
    Type D    (Decimal)
    Type 8
    Type L    (Length)

In one's or two's complement, a negative integer is recognized by a one in 
the high order position of the binary representation of the integer displayed 
in the window.  In one's complement, a zero can also be a minus zero and this 
was the reason two's complement was invented.  When a negative number is used 
in one's complement, arithmetic results can be erroneous.

Positive integers are represented in the correct binary form.
    Type 3
    Type B    (Binary)

Negative integers are represented by complementing each bit.
    Type s    (set complement)
    Type 1
    Type S    (Sign change)
One's complement in binary form of -3.
    Type D    (Decimal)

There is a difference in representing negative integers in 
two's complement.
    Type C    (Clear)
    Type 3
    Type B    (Binary)
Negative integers are first complemented as in one's complement and then a 
one is added.
    Type s    (set complement)
    Type 2
    Type S    (Sign change)
Two's complement in binary form of -3.

Unsign is the absolute magnitude of an integer.  A one in the 
high order bit of the register does not represent a negative integer.
    Type C    (Clear)
    Type s    (set complement)
    Type u
    Type D    (Decimal)
    Type 255  (largest integer in a byte)
    Type B    (Binary)

For a byte (8 bits) in two's complement, the positive integer range is 0 to 127 
and the negative integer range is -1 to -128.  
    Type C    (Clear)
    Type s    (set complement)
    Type 2
    Type D    (Decimal)
    Type 127
    Type B    (Binary)
    Type C    (Clear)
    Type D    (Decimal)
    Type 128
    Type B    (Binary)


Bit manipulation
For this section, we will again set window size to a byte, use binary 
representation and set complement unsign.
    Type C    (Clear)
    Type D    (Decimal)
    Type 8
    Type L    (Length)
    Type s    (set complement)
    Type u    (unsign)
    Type B    (binary)

Shift left - Shift right
A shift left can cause an error message of exceeding length of the window.  
A binary base shift left is one position, but a hexadecimal base shift left 
is four positions.

The -- (key 4 on the numeric pad) is used to shift left and -- (key 6 on the 
numeric pad) is used to shift right.
    Type 1111
    Type --   (shift left)
    Type --   (shift left)
    Type --   (shift right)

In binary a shift left is multiplication and a shift right is division.
    Type C    (Clear)
    Type 1
    Type --   (shift left)
    Type D    (Decimal)
    Type B    (Binary)
    Type --   (shift left)
    Type D    (Decimal)
    Type B    (binary)
    Type --   (shift right)
    Type D    (Decimal)

Rotate
Unlike shifting, the rotated bit is placed in the carry.  When you type R, 
the carry is set to zero.  Rotate left shifts the bits one position to the 
left and the carry bit is placed in the low order of the window.  The bit 
shifted off of the high order position is placed in the carry.
    Type C            (Clear)
    Type s            (set complement)
    Type u            (unsign)
    Type B            (Binary)
    Type 11111111
    Type r            (rotate)
    Type l            (rotate left)
    Type l            (rotate left)
    Type <enter>      (escape from rotate)

Rotate right shifts the bits one position to the right.  The carry bit is 
placed in the high order bit of the window and the bit dropped from the low 
order position of the window is placed in the carry.
    Type C            (Clear)
    Type 11111111
    Type r            (rotate)
    Type r            (rotate right)
    Type r            (rotate right)
    Type <enter>      (escape from rotate)

All number bases can be used for bit manipulation,  experiment and see what 
happens.


Logical operators
As with arithmetic operations, the logical operators that required two 
operands are performed by reversed polish notation.  The operands are 
separated by <enter> and then the logical key is pressed.  Not is the only  
logical operator that has one operand.

For this section, set window size to a byte, set number base to binary and 
the set complement must be unsign.
    Type C    (Clear)
    Type D    (Decimal)
    Type 8
    Type L    (Length)
    Type s    (set complement)
    Type u    (unsign)
    Type B    (Binary)

And
And is the logical product.  The test reguires that the bit position of the x 
and y registers are 1 for the result of that bit position to be 1 else the 
bit position is 0.  This feature is called "masking" and is used to zero out 
unwanted one bits within a byte or whatever length is being tested.  
    Type 10101010
    Type <enter>
    Type 11110000     (mask)
    Type A            (And)

Or
Or is the logical sum.  If either of the bit position of the x and y 
registers is 1, the result for that bit position will be 1 else the bit 
position is 0.
    Type C            (Clear)
    Type 10101010
    Type <enter>
    Type 11110000
    Type O            (Or)

Xor
Xor is the logical difference.  Xor is "exclusive or"  and differs from the 
inclusive "or" described above in that only one of the bit position being tested 
can be 1 for the result to be 1 otherwise the result is 0.
    Type C            (Clear)
    Type 10101010
    Type <enter>
    Type 11110000
    Type X            (Xor)

Not
Not is the logical complement.  Not inverts the value of the x register and is 
equivalent to an integer multiplied by -1 in one's complement. 
    Type C            (Clear
    Type 10101010
    Type N            (Not)

All number bases may be used for logical operations.



                               REAL MODE

Real mode allows decimal point and scientific notation (floating point) entries. 
A floating point number is represented by an optionally signed integer, a 
fraction and an exponent.  A decimal point separates the integer from the 
fraction. The exponent is optional and is identified by the
digits following the letter E and its sign (+ or -).  The E means "times ten 
to the power of".  Absence of a sign or + sign means move the decimal point to 
the right and a - sign means move the decimal point to the left.
Any number from 2.9E-39 to 1.7E+38 (positive or negative) can be represented. 
See Arithmetic Operations Section for additional information.

When entering real mode, the window size will be expanded to 64 positions (eight
bytes).
The Computer Science Calculator stores the entered values and the arithmetic 
results in double-precision format.
    Type R
    Type 2
    Type S            (Sign change)
    Type <enter>      (place value in y register)
    Type .1245E+2
    Type /            (divide X/Y)
    Type B            (display result in binary)
    Type C            (Clear)

Use shift left (key 4 on the numeric pad) to correct an erroneous key entry.  
The use of this key will backspace and erase the last entry.

Follow instructions on bottom line of the monitor to exit from real mode.



                        KEYBOARD INTERPRETATION

Keyboard interpretation converts an ASCII code to the character 
representation.  ASCII codes are zero (0) to 255.
    Type K                (enter Keyboard interpretation)
    Type 13
    Type A                (convert ASCII code to character)

Convert character to ASCII code:
    Type <enter>
    Type C                (convert character to ASCII code)

    Type CTRL and BREAK   (press both keys)
    Type C

Follow instructions on bottom line of the monitor to exit from keyboard
interpretation.

```
{% endraw %}

## OGH_5.TXT

{% raw %}
```
(C) Copyright Ogham 1987

                             POCKET CALCULATOR         

                                Introduction
      
The Pocket Calculator is listed on the Personal Secretary Menu screen.  From
the Potpourri Menu, press F4 key to enter the menu for Personal Secretary.
Press F10 key to enter the Pocket Calculator program.

The program can generate a hard copy of the adding machine tape by creating
a disk file that will contain an exact copy of what appears on the screen
accounting tape.  This option is controlled by the user by answering the 
question "Do you want a file?  Press Y for Yes, N for NO".  The response
can be either upper or lower case.  If the user requires a hard copy, he can,
after the calculator session, list or display the hard copy file by selecting
the display or print selected file command under the DOS Commands Menu.

The user will also be requested to press the Num Lock key to activate the
numeric key pad located on the right side of the keyboard.

Certain liberties were taken as not all of the caculator symbols are 
represented on the keyboard.  A legend of keys to be used for these symbols
will always appear on the calculator screen. 

Pressing alphabetic keys can be in upper or lower case.

The screen accounting tape can list up to 25 entries.  After the last line is
used the next number will appear on the top of the tape.  The user can, at any 
time, clear the screen tape by pressing the T key.

Display, Overflow and Error Detection
An error message will appear on the first line of the screen if an error
condition occurs.  The errors can be:

          more than six (6) decimal places
          more than 14 positions in the display window
          division by zero
          square root of a negative number


Addition and Subtraction
     Pressing the + or - key places the calculator in the add/subtract mode.
     When in this mode, the last entry can be used for repeat operations.

     Example:  4 + 2 + 2 = 8
            Key Pressed   Display Window     Operation     Accounting Tape
               4                4                                 0
               +                4             add                 4
               2                2                                 
               +                6             add                 2  +
               +                8             add                 2  +
               =                8             equals              8  *
               C                0             clear               0

     Example:  10 - 4 - 4 = 2
            Key Pressed   Display Window     Operation     Accounting Tape
              10               10
               -               10             subtract           10
               4                4
               -                6             subtract            4  -
               -                2             subtract            4  -
               =                2             equals              2  *
               C                0             clear               0


Multiplication
     Pressing the * key places the calculator in the multiplication mode.
     In this mode, the first factor is retained as a constant multiplier.

     Example:  4 x 6 = 24    x 2 = 8
            Key Pressed   Display Window     Operation     Accounting Tape
               4                4                                 0
               *                4             multiply            4
               6                6                                 
               =               24             equals              6  x
                               24                                24  *
               2                2                                 
               =                8             equals              2  x
                                8                                 8  *
               C                0             clear               0



Power
     Raise x to the yth power

     Example 2 x 2 x 2 x 2 = 16
            Key Pressed   Display Window     Operation     Accounting Tape
               2                2                                 0
               *                2             multiply            2
               2                4                                 2  x
                                                                  4  *
               =                8                                 4  x
                                                                  8  *
               =               16                                 8  x
                                                                 16  *
Division
     Pressing the / key places the calculator in the division mode and the 
     second factor is retained as the constant divisor.

     Example:  24 / 3 = 8    / 12 = 4
            Key Pressed   Display Window     Operation     Accounting Tape
              24               24                                 0
               /               24            divide              24
               3                3
               =                8.00         equals               3  /
                                8.00                           8.00  *
              12               12
               =                4.00          equals              3  /
                                4.00                           4.00  *
               C                0             clear               0
Note: If no decimal place, the calculator will assign two decimal places to 
the quotient.


Percentage
     Pressing the % places the calculator in the division mode and the 
     quotient will be multiplied by 100.

Change Sign
     The ] key can be pressed at amytime and the sign of the number in the
     display window will be reversed.


Decimal Places
     The calculator retains the greatest number of decimal places entered
     (up to six places) until the C key is pressed.
     The exception is for squared root which will always have five (5)
     decimal places.

Squared Root
     Example:  squared root of 25 is 5.00000
            Key Pressed   Display Window     Operation     Accounting Tape
              25               25
               Q                5.00000       squared             25  
                                5.00000       root            5.0000  Q

Clear
     Pressing the C key will zero out the accumulator, factor (if any) and
     the number of decimal places.


Memory
     Decimal Places
     The calculator retains the greatest number of decimal places entered
     (up to six places) until the Z key is pressed.

     Add To Memory
     Press the M key and the number in the display window will be added to
     memory.

     Read Memory
     Press the R key and memory will be displayed.  This memory figure can
     be used for further calculations.

     Clear Memory
     Press Z key to clear memory.

     Example: 
            Key Pressed   Display Window     Operation     Accounting Tape
               5                5                                 0
               *                5             multiply            5
               6                6            
               =               30             equals              6  x
                               30                                30  *
               M               30             add to mem
               5                5
               +                5             add                 5  +
               7                7
               =               12             equals             12  +
               M               12
               R               42             read mem           42  M
               Z               30             clear mem
               C                0             clear               0


Pressing the Esc key will return you to the Personal Secretary Menu and you
will be requested to press the Num Lock key so that the cursor keys will be
activated.
```
{% endraw %}

## OGH_6.TXT

{% raw %}
```
(C) Copyright Ogham 1987
                         Create and Play Songs

Song files are created under the Relax menu F1 key.  The first prompt will 
request you to enter the name of the song.  As the name of the song is the
file name, you are restricted to eight characters.  You will be prompted to
enter the note, octave and note duration.  Upon completion of the entry for
the song, press <cr> and the song file will be created and the song file 
name will be entered into the song directory file. 

To play the song, press the F2 key.  Place the cursor by the song you want to
play and press <cr>.   Select the tempo by placing the cursor and press <cr>.
If, when playing the song, you discover that errors were made when entering
the notes, you can correct the song by editing the song file by use of an  
edit program such as EDLIN.  As explained above, the file name is the song 
name you entered and the file extension is .SNG.

Michael, Row The Boat Ashore is included in Potpourri under the name MICHAEL.
In the Relax menu, press the F2 key then select MICHAEL and select the tempo 
ADAGIO.  You then can experiment with the various other tempos.
```
{% endraw %}

## OGH_7.TXT

{% raw %}
```
(C) Copyright Ogham 1987
                                     Doodle

Esc key:  Return to Relax Menu              |
                                            |
  Function Keys:                            |     Alphabetic Keys:
F1  Paint object                            |   E   Easy speed (extra slow)
F2  Paint screen                            |   S   Slow speed
F3  Pattern                                 |   F   Fast speed
F4  Swatch                                  |   V   Very fast speed
F5  Circle                                  |   M   Medium resolution 
F6  Arc (angle +1 to +360 or -1 to -360)    |   H   High resolution
F7  Change background color (med res only)  |   P   Pen up / Pen down
F8  Change Palette/HiRes Color              |   C   Color of pen
F9  Increment NE SE SW NW by 15 degrees     |   O   Output (save screen) 
F10 Screen caption                          |   I   Input (load screen)
                                            |   A   Angle for Turn Left/Right
                                            |
                                            |
  Turtle Tab key:                           |      
Tab left     Turn Left                      |     Turtle Keys:
Tab right    Turn Right                     |   Up arrow     North 
                                            |   Down arrow   South
  Turtle Special Key:                       |   Right arrow  East
Ins          Homes the turtle.              |   Left arrow   West
                                            |   Home         Northwest
                                            |   PgUp         Northeast
                                            |   PgDn         Southeast
                                            |   End          Southwest
                                            |   Ins          Center

Note: Tab key is located on the second row to the left of the Q key.  Tab left 
      press and hold one of the Shift keys and press the tab key. 

      Uppercase or Lowercase can be used for the alphabetic keys.


                                     screen

                   NW-----------------North---------------NE
                   | (Home)         (up arrow)      (PgUp) |
                   |                                       |
                   |                                       |
                   |                                       |
     (left arrow) West               Center               East (right arrow)
                   |                  (Ins)                |
                   |                                       |
                   |                                       |
                   | (End)        (down arrow)      (PgDn) |
                   SW-----------------South---------------SE


The resolution of the screen can be either medium 320 x 200 pixels (dots) or
high 640 x 200 pixels.

When entering the doodle program, the screen is in medium resolution.  You  
can enter high resolution by pressing the H key and pressing the M key will 
return the screen to medium resolution.  Pressing either H or M will return
the screen to the initial state.

The information at the botttom of the screen normally shows: 
      pen position
      degrees of turn
      degrees of NW, NE, SW and SE.
The function selected, prompt and your reply will also be printed in this
area.

                        Color of pen and drawing
The color of the turtle is the color that will be drawn by moving of the 
turtle with the pen down.  Pressing the C key will change the color. 

Pressing the P key will change Pen to either up or down (dn).  Pen must be
down for drawing.

                          Drawing Direction
Direction of the turtle is by the use of the turtle keys and tab key.
The degrees of the Turn are added to the current direction i.e. if PgUp
was pressed with NE 45 and tab right is pressed with Turn 3, the pen will 
be positioned to write in a 48 degree line.

Pressing the F9 key will increment NW, NE, SW and SE by 15 degrees.  Values
for NE can be 15, 30, 45, 60 and 75.

Press the A key and you will be prompted to enter angle (1-14).  Type in the 
angle and <cr>.  Turn will display the new angle value. 

                           Drawing Speed 
There are four speeds that you can draw with by pressing the following keys:  
      E  Easy speed (one pixel at a time) 
      S  Slow speed
      F  Fast speed
      V  Very fast speed

                           Paint Object
First draw the object.  Make sure all of the object area is enclosed.  Leave
pen color the same as the color of the object outline.  Raise the pen by
pressing the P key.  Move the turtle into the area of the object.  Press the
F1 key and you will be prompted for the color to paint the area.  Press the
C key until the turtle is of the color you want the object to be then press
F1.

                            Fill Screen
Pressing the F2 will change the color of the foreground.  If you use this 
feature,  make your foreground color first as any drawing that is on the
screen will be erased.  The color of the foreground will be the same color
as that of the turtle.  Press the C key for color selection prior to pressing
the F2 key.

                          Drawing a Pattern
There are two patterns, one is for horizontal and one for vertical.  Position 
the turtle with the pen up at the start of where the pattern is to begin.
Press F3 key and use only the up arrow or down arrow for vertical pattern or
use the left arrow or right arrow for a horizontal pattern.  Press a speed key
to go to the desired end of the pattern then press F3 key.

                        Drawing with a Swatch 
Normal drawing is one pixel at a time.  You can draw a larger width with the
use of the F4 key.  The bottom of the turtle is 10 pixels wide.  If you Press 
F4 and enter a width of 10 <cr>, you will draw a width of 10 pixels.  You can  
also erase a large screen area by pressing the C key until the turtle is the
same color as the background.  Press the F4 key and enter the width you want
to erase and start erasing.  Return to normal drawing by pressing the F4 key. 

                                Circle
Position the turtle in the center of the area you wish to draw a circle.  
Press the F5 key.  Enter the radius and <cr>.  If you enter 5 <cr> for a
radius, the diameter will be the same size as the bottom of the turtle.

                                  Arc
Press the F6 key and the first prompt will request you to enter the angle
of the arc.  Enter a minus number <cr> and the arc will be drawn in a  
counterclockwise direction, enter a plus number and the arc will be drawn
in a clockwise direction.  After entering the angle, you will be requested
to enter the radius of the arc.  The arc is drawn from the position of the
turtle.


                       Background and Border Color
Pressing the F7 key in medium resolution will change the background and
border color.

                     Palette or High Resolution Color
For high resolution, the F8 key can be pressed to change the foreground
color.  The F8 key controls the palette color when in medium resolution. 

                               Slide Show
The drawings can be saved as files on the fixed disk and retrieved back
onto the screen.  The F10 key is used to allow a caption to be typed on
the bottom line.  After completing a drawing, press the F10 key and type 
in a caption and press <cr>.  The caption is stored for the subsequent
screen output file.  Press alphabetic O to start the output sequence.  You 
will be requested to enter a filename for your slide show drawings.  After
entering the name and <cr>, the request to enter a drawing number will
appear.  If this is not a continuation from a previuos session, enter the 
numeric 1 <cr>.  A file with your screen and caption will be created. On
saving of the next screen,  when you press the O key the drawing will be 
saved and the file extension will be .2 provided that you had entered a 
1 for the first number.  

Retrieval is started by pressing the I key.  After typing in the filename
and number, the screen is drawn by what is contained within the file.  To
retrieve subsequent screens, press the I key.

The input/output file names and the last input/output file extensions are
retained until the Esc key is pressed or if the resolution was changed (M or
H key).

An example of a slide show is contained within the Potpourri program.  The
three files have a filename of LIBERTY and file extensions of .1, .2 and .3.
Do the following sequence to see this slide show: 
      Press M
      Press I
      Enter liberty <cr>
      Enter 1 <cr>
      Press I
      Press I
```
{% endraw %}

## OGH_8.TXT

{% raw %}
```
(C) Copyright Ogham 1987
                               Executing Programs

Potpourri is not a resident program (does not takeup any of the memory) when 
executing programs.  There is a small (approx. 1700 bytes) satellite program
that controls the execution of the selected program and returns control to 
Potpourri upon the completion of the selected program.

The Executing Programs menu allows a wide latitude of what you can type in.
For instance, if F6 - - Keyin program name - -  is selected and File is   
None, you could type program name a space and input file name.file extension.
This would be accepted as what you typed in as one variable.

```
{% endraw %}

## OGHAM.TXT

{% raw %}
```
0,0,"Potpourri"
0,1,"Explain"
0,2,"Menu updating (for adding, changing and deleting menu screens)"
0,3,"DOS Commands"
0,4,"Personal Secretary"
0,5,"Relaxation"
0,6,"Execute Programs"
1,0,"Explain"
1,1,"How menu program works"
1,2,"How to add menus or additional entries to a menu"
1,3,"Appointment Calendar"
1,4,"Computer Science Calculator"
1,5,"Pocket Calculator"
1,6,"Create and play songs"
1,7,"Doodle"
1,8,"Executing programs"
2,0,"Menu Changes"
2,1,"Add a menu line to main (Potpourri) menu"
2,2,"Change menu line on the main (Potpourri) menu"
2,3,"Add an entry to an existing menu"
2,4,"Change entry on existing menu"
2,5,"Delete entry from an existing menu"
3,0,"DOS Commands"
3,1,"Change directory/display directories (tree of all directories)"
3,2,"Create a directory"
3,3,"Remove a directory (files must be deleted prior to remove directory)"
3,4,"Select/display files from current directory (highlighted on screen)"
3,5,"Display or Print selected file"
3,6,"Copy selected file to different directory"
3,7,"Copy selected file to floppy disk"
3,8,"Delete selected file"
3,9,"Disk copy from current directory to floppy disk"
3,10,"Disk copy from floppy disk to hard disk (current directory)"
3,11,"Format floppy disk"
3,12,"Display system configuration and DOS version"
3,13,"Check disk"
4,0,"Personal Secretary"
4,1,"Turn clock chimes off"
4,2,"What's the time?"
4,3,"Display current month calendar"
4,4,"Display calendar other months"
4,5,"Need appointment calendar"
4,6,"Print current year calendar"
4,7,"Print next year calendar"
4,8,"List a file"
4,9,"Computer Science Calculator"
4,10,"Pocket Calculator"
5,0,"Relax"
5,1,"Create a song (place notes into a song file)"
5,2,"Play a song (uses the song file created by you)"
5,3,"Relax and enjoy"
5,4,"Maze & Blind Mouse"
5,5,"Doodle"
6,0,"Execute Programs"
6,1,"Change directory/display directories"
6,2,"Select/display files from current directory"
6,3,"Execute displayed program"
6,4,"Keyin input file - execute displayed program"
6,5,"Keyin input and output files - execute displayed program"
6,6,"Keyin program name - execute with displayed input file"
6,7,"Keyin program and output file - execute with displayed input"
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0919

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       127  12-27-86   6:08p
    FILES919 TXT      2031  12-10-87   8:38a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-09-87   9:11a
    INSTALL  BAT       759  12-27-86   9:16p
    INSTALL  TXT      1552   4-18-87   6:09p
    BRUN10   EXE     59117   1-24-86  12:22p
    CAL      EXE      7078  11-22-86   5:52p
    DOODLE   COM     24298   1-01-87  12:58a
    LIBERTY  1       17024   7-29-86  10:21p
    LIBERTY  2       17024   7-29-86  10:22p
    LIBERTY  3       17024   8-03-86  11:29p
    MAZE     COM     14524   8-15-86   5:33p
    MICHAEL  SNG       947   1-06-86   5:25p
    OGHAM    EXE    103569   8-30-87  11:01a
    OGHAM    TXT      2414  12-24-86   9:33p
    OGHSHELL EXE      1745  11-26-86  11:23a
    OGH_1    TXT      7321   8-30-87  12:03p
    OGH_2    TXT      1125   2-16-87   6:26p
    OGH_3    TXT      1254   2-16-87   6:27p
    OGH_4    TXT     20022   2-16-87   6:27p
    OGH_5    TXT      8604   2-16-87   6:27p
    OGH_6    TXT      1261   2-16-87   6:28p
    OGH_7    TXT      9263   4-11-87  10:42a
    OGH_8    TXT       737   4-04-87   5:18p
    OGH__    CAL       422   4-27-86  11:18p
    OGH__    DIR        55  12-27-86   3:56p
    OGH__    FIL        55  12-27-86   3:57p
    OGH__    PRE         9  11-23-86   9:45p
    OGH__    SGS        55  12-27-86   3:54p
    PC_EQUIP EXE      7880   4-12-86   3:44p
           31 file(s)     327874 bytes
                           16384 bytes free
