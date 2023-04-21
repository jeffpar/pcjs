---
layout: page
title: "PC-SIG Diskette Library (Disk #249)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0249/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0249"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EQUATOR AND PC-TOUCH"

    EQUATOR's purpose is to help you learn the function, use, and
    application of various general purpose formulas used in the fields of
    finance, math and science.  It consists of 63 equations divided equally
    among the three subjects.  Each equation appears on its own menu-driven
    screen or worksheet.  EQUATOR is designed to let you experiment with
    each equation as much as you like.  The more you work with an equation,
    the easier it is for you to understand it, remember it, and use it at
    home or at school.
    
    The following are some of the equations in the math menu of EQUATOR:
    
    ~ Area of a square, rectangle, circle, and triangle
    
    ~ Hypotenuse of a right triangle
    
    ~ Circumference of a circle
    
    ~ Volume and surface area of a cylinder
    
    ~ Volume and surface area of a cone
    
    ~ Volume and surface area of a sphere
    
    ~ Distance between two points
    
    The following are some of the equations in the finance menu of EQUATOR:
    
    ~ Simple and compound interest
    
    ~ Years to 2X investment and return needed to keep up with inflation
    
    ~ Equivalent taxable return of a non-taxed investment
    
    ~ Monthly mortgage payments and annual simple interest rate on loans
    
    ~ Payoff balance on a loan
    
    ~ Gross and net profit margins
    
    ~ Earnings per share
    
    ~ Price/earnings ratio
    
    The following are some of the equations in the science menu of EQUATOR:
    
    ~ Celsius to Fahrenheit; Fahrenheit to Celsius
    
    ~ Density ratio
    
    ~ Average velocity
    
    ~ Metric to English; English to metric
    
    ~ Acceleration
    
    ~ Force
    
    ~ Work
    
    ~ Power
    
    ~ Pressure
    
    PC-TOUCH is a typing tutor with varying levels of difficulty ranging
    from the very easy, for the beginner, to the difficult, for the expert
    who wants to brush up his or her typing skills. The program gives you
    the line to type into the system, and all your statistics -- typing
    speed, errors, and test-adjusted scores -- are maintained along the
    bottom of the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EQUATOR.TXT

{% raw %}
```

     Welcome to the EQUATOR! The EQUATOR is an equation learning aid.                          
The purpose of this product is to help you the student learn the function,
use and application of various general purpose formulas used in the fields of 
Math, Finance, and Science.

     The EQUATOR is a user-supported program. User-supported software is 
based on the following concepts:
     1)  The value and usefulness of software is best determined by the
         user on his own system
     2)  The creation of software can and should be supported by the user
         community.
     3)  The copying of sofware should be encouraged and not restricted.
    
     Any user that finds this program useful is asked for a $20 donation.
This donation is strictly optional. All users are encouraged to copy and
distribute this program to other IBM PC users free of charge. Anyone sending
a blank formatted disk along with a stamped return envelope will recieve a
free copy of the EQUATOR and its documentaion. Remember, you the user will
determine how valuable this program is. You the user can contribute to the
quality of this program by offering suggestions for improvement. And you the
user will be the critic and advertiser we depend on.

     This product consists of 35 equations divided equally among the three 
subjects. Each equation appears on its own screen or worksheet. The EQUATOR 
is designed to allow you to experiment with each equation as much as you like.
The more you work with an equation, the easier it will be for you to under-
stand it, remember it, and use it at home or at school. As the actual equation
is shown on your screen, you can type in your numbers and let the EQUATOR 
compute the right answer. Entering the numbers is easy and telling the EQUATOR
to compute the answer is even easier. Everything you need to know about using
the EQUATOR is on the screen at all times.

     To use this manual with the EQUATOR do the following:
1) First spend some time reading it on your own. If you come to a part that 
   you can't understand, skip it. Just get a feel for what the EQUATOR can
   do for you.

2) Next start the EQUATOR as described below. Each time you see a new screen
   or menu, read the manual to see what you can do. You will find the manual
   easier to understand now that you are actually using the EQUATOR.

3) When you begin to feel comfortable with the EQUATOR, put down the manual 
   and try using the EQUATOR by itself. Keep the manual close by just in case.
   The EQUATOR is simple to use so take your time and enjoy.

     The requirements for using the EQUATOR Version 1.2 are:
 1) IBM PC (or compatible) with at least 64K of internal memory
 2) PC-DOS 2.0 (or later) operating system
 3) 1 disk drive
 4) A printer 
 
     The following files should be on your diskette when you buy the EQUATOR:
 1) EQ.EXE       (EQUATOR Main menu program file)
 2) MATH.EXE     (Math equations program file)
 3) SCIENCE.EXE  (Science equations program file)
 4) FINANCE.EXE  (Finance equations program file)
 5) EQUATOR.TXT  (EQUATOR manual)
 6) PRT.BAT      (Batch file to print EQUATOR.TXT)
 
     The first thing that you should do when you buy the EQUATOR is to make a
backup copy of it. The instructions on how to do this can be found in your DOS
2.0 manual starting on page 3-10.

     To start the EQUATOR, do the following: 
 1) Boot up Your IBM PC with DOS 2.0
 2) Insert your diskette containing the EQUATOR files into your default disk
    drive. This will usually be your "A:" disk drive.
 3) Type EQ after the "A>" prompt and press the RETURN key.

     The Equator is menu-driven. This means the screen you are working with    
will always contain information on what actions you can take next. These 
actions will include ending the program, computing the next answer, or going
to another screen. So there is no need for you, the user, to memorize a series
of long and confusing commands. There are three kinds of screens in this pro-
duct: the Main Menu, the Subject Menus, and the Equation Worksheets.

     The first screen that you will see is the Main Menu. This menu will list
for you the three subjects that are covered by this product. Your choices on
this menu can be typed in lower or upper case. If you type in a key that is
not a correct choice, you will hear a short beep noise from the computer. If
you type in a correct choice and the EQUATOR can't find one of the program
files then the error message:

       "You must have all your .EXE files on the default disk drive."
       "Bring all your .EXE files together and try again."

will tell you to check and make sure that all the EQUATOR files are together
on the default drive. Typing in a correct choice from this menu will bring you
to one of three Subject Menus. The EXIT choice on this Menu will end the pro-
gram and clear the screen.

     Each Subject Menu is handled in the same way as the Main Menu. A list of
all the equations available under the subject will be shown to you.  
Your choices on any menu can be typed in lower or upper case. If you type
in a key that is not a correct choice, you will hear a short beep noise from
the computer. if you type in a correct choice and the EQUATOR can't find one
of the program files then the error message:

       "You must have all your .EXE files on the default disk drive."
       "Bring all your .EXE files together and try again."

will tell you to check and make sure that all the EQUATOR files are together
on the default drive. Typing in a correct choice from any menu will bring you
to one of the Equation Worksheets. The EXIT choice on these Menus will bring
you back to the Main Menu.

     The following equations are in the Math Menu of the EQUATOR:
                                         
     1. Area of a square of rectangle.
     2. Area of a circle.
     3. Area of a triangle.
     4. Hypotenuse of a right triangle.
     5. Circumference of a circle.
     6. Volume of a cylinder.
     7. Surface area of a cylinder.
     8. Volume of a cone.
     9. Surface area of a cone.
    10. Surface area of a sphere.
    11. Volume of a sphere.
    12. Distance between two points.

     The following equations are in the Finance Menu of the EQUATOR:
                                         
     1. Simple interest.                
     2. Compound interest.
     3. Years to double investment.
     4. Return needed to keep up with inflation.
     5. Equivalent taxable return of a non-taxed investment.
     6. Monthly mortgage payments.
     7. Annual simple interest rate on loans.
     8. Payoff balance on a loan.
     9. Gross profit margin.    
    10. Net profit margin.           
    11. Earnings per share.   
    12. Price / Earnings ratio.         

     The following equations are in the Science Menu of the EQUATOR:
                                         
     1. Celsius to Farhrenheit.         
     2. Farhrenheit to Celsius.
     3. Density Ratio.                 
     4. Average velocity.
     5. Metric to English.
     6. English to Metric.
     7. Acceleration.
     8. Force.
     9. Work.
    10. Power.
    11. Pressure.

     The Escape(ESC) key used from the Main Menu or Subject Menus will 
immediately end the program and clear the screen. This key is good for anyone
who likes to finish up quickly no matter what menu or screen he is on.

     The screens that you will be working with most are the equation work-
sheets. These worksheets will consist of two parts. The upper portion of the
worksheet will describe the actual equation that you will be working with.
  
    For Example:    Area = Width * Length

This area of the worksheet will never contain a long desciption of an equation. 
But, the variables in each equation will be spelled out. This is a key aid in 
helping you learn to use each equation. The following math symbols will be 
used throughout the EQUATOR:

    *     multiplication               [ or (    left parenthesis
    /     division                     ] or )    right parenthesis
    +     addition                     ^         exponentiation 
    -     subtaction or minus sign     =         equal sign
    ?     square root                  %         percent sign
    $     dollars sign                 ?         PI constant
    .     decimal point                .XX       percent in decimal form

     The bottom portion of each equation worksheet is your work area. This area 
will contain the variable names of the equation and a place or field for you
to enter in your numbers. These fields are called value fields.
 
     For Example:   Width = __________

Your place in a value field will always be marked by the cursor. The cursor is
the moving(sometimes blinking) marker of light on the screen that indicates
your current position on the screen. Each time you come to a new equation
worksheet, the cursor will be in the first position of the first value field.

When you are at this point in the EQUATOR, there are only certain keys that you
can use. They are as follows.

The Escape(Esc) key:
     This key is found in the upper left hand area of the IBM PC keyboard.
This key will end the EQUATOR program immediately and clear the screen.
It doesnt matter what you are doing, even if you are in the middle of
entering a number, the Esc key will get you out of it.     

The Backspace key:
     This key is found in the upper right hand area of the IBM PC keyboard.
It looks like a large left arrow. This key  will move the screen cursor one
position to the left. It will not erase any numbers as it moves to the left.
If the cursor is already in the leftmost position of a field, the Backspace 
key will cause the cursor to appear in the rightmost position of the field.
This is called cursor wraparound.

The Space Bar:
     This key is found on the bottom of the IBM PC keyboard. It is a large 
key. This key  will move the screen cursor one position to the right. It will
not erase any numbers as it moves to the right. If the cursor is already in
the rightmost position of a field, the Space Bar will cause the cursor to
appear in the leftmost position of the field. This is called cursor wraparound.

The Insert(Ins) key:
     This key is found in the lower right hand area of the IBM PC key-
board. Its purpose is to allow you to insert numbers in between numbers
that you have already entered on a value field. To make room for a number
in this way you must do the following. First position the cursor exactly
where you want the new number to be in the field. Next, press the Ins key.
You will notice the cursor change shape. This means that you are in insert
mode and can now enter the new numbers. You will notice that as you enter a
number, all numbers to the right of the cursor will shift to the right.     
If you attempt to insert more numbers than there is room for, a short beep 
will sound telling you that no more numbers can be inserted. To get out of 
insert mode you must press the Ins key again. You will see the cursor change 
back to its original shape.

The Delete(Del) key:
     This key is found in the lower right hand area of the IBM PC keyboard.
This key will do the exact opposite of the Insert key. It will delete a  
number on a value field where the cursor is positioned at. When this 
happens, all numbers to the right of the cursor will shift to the left to
fill the gap. The cursor itself will not move.
 
The Enter key:
     This key is found on the right hand area of the IBM PC keyboard. It is
just under the Backspace key. The symbol on it looks almost like the backspace
symbol. This key is sometimes called the Return or Carraige Return key.
Pressing this key will move the screen cursor to the next value field.
The cursor will be on the first position of that field.

The Control-End Key:
     This key is actually two separate keys pressed together at the same 
time. The first is the Control(Ctrl) key which is on the lower left hand
area of the keyboard. The second is the End key which is on the lower right 
hand area of the keyboard. Pressing these keys together at the same time,
will cause all the numbers from the current position of the cursor to the
end of the value field to be erased. This key combination can be used
instead of pressing the Delete key many times. If the cursor is at the 
beginning of a value field, then pressing Control-End will cause the 
entire field to be erased.

The Print Screen(PrtSc) Key:
     This key is found in the lower right hand area of the keyboard. It is
upper case asterisk(*). To use Prt-Sc, press the upper case key and the 
asterisk(*) at the same time. Pressing this key will cause the entire screen to
be printed out on the printer. This key will allow you to save your work. if
your printer is not on or if you do not have a printer connected to your
IBM PC, pressing this key will stop the EQUATOR for a few seconds(its busy
looking for a printer that isnt there) and then let you continue. The PrtSc
key is of no use to you if you have no printer connected to your PC.

The Function Keys:
      There are 10 Function keys(F1 to F10) located on the left side of the
keyboard. The EQUATOR uses only F1, F2, and F3. 
      Pressing F1 will cause the EQUATOR to calculate or compute the answer 
to the equation you are currently working on using the values you have been
typing in. If you left any of the value fields blank, the EQUATOR will use
zero for that value. When the EQUATOR is finished with its calculations, it
will display you the answer near your value fields.

     For Example:     Length = 1_________

                       Width = 9_________

                        Area =  9

A number of the equations used by the EQUATOR use division. If you leave a
value field blank that will cause a division by zero, a short beep will
sound telling you that you must enter in a number in that value field.     
If the answer to the equation is very large or very small, it will be dis-    
played by the EQUATOR in scientific notation. For example, 23E-9 is equal to
.000000023 and 23E+9 is equal to 23000000000.
The F1 key will be your most often used key.    

     Pressing the F2 key will start you over on the equation worksheet. All
numbers in all the value fields will be erased. This will save you from using
the Control-End key many times to erase all value fields.

     Pressing the F3 key will exit you from the equation worksheet that you
are working on to its subject menu. For example, if you were working on the
Area equation, F3 will take you back to the Math Menu. From the Math Menu you
can go on to another equation. This key is similar to the Escape key.

     In the value fields themselves, any number from 0 to 9 can be typed in
from the keyboard. These keys are lined up across the top of the keyboard and
on the right hand side of the keyboard. In addition, you can use a decimal
point(.) and a minus sign(-) in any value field.

     Here is a quick reference guide to the above mentioned keys. Use this 
information while you are working with an equation worksheet.

     Press ESC to quit the program.
     Press ENTER to move to the next value field.
     Press BACKSPACE to move the cursor one position to the left.
     Press SPACE BAR to move the cursor one position to the right.
     Press DEL to delete a number.
     Press INS to insert a number.
     Press CNTL-END to delete the rest of the value field.
     Press 0 through 9, "-", or "." for the numbers.

    And now for some usage tips on the equation worksheets. Use these tips
while you are working with the equations themselves.

1. Area of a square of rectangle.

     Area is the amount of space inside the square or rectangle.
     It doesn't matter which side of the shape is used for width or length in
     this equation.
     This screen can also be used to learn and practice multiplication.
     
2. Area of a circle.

     The actual value of PI used in the computation is 3.141, not 3.1428571
     or 22/7.
     The radius is the distance between the center of the circle and the edge
     of the circle.

3. Area of a triangle.

     If the triangle shape was standing up, the base would be the bottom line.

4. Hypotenuse of a right triangle.

     A right triangle has one 90 degree corner.
     In a right triangle, the hypotenuse is the longest side and the side
     opposite the 90 degree corner.

5. Circumference of a circle.

     Circumference is the length around the edge of the circle.

6. Volume of a cylinder.
     
     Volume is the amount of space inside the solid shape.

7. Surface area of a cylinder.

     Surface area is the amount of space on the outside of the solid shape.
     You only have to type in the radius value once, not twice!

8. Volume of a cone.

9. Surface area of a cone.

     The slant height is the length of the crooked side of the cone.
     You only have to type in the radius value once, not twice!

10. Surface area of a sphere.

11. Volume of a sphere.

12. Distance between two points.

     If you leave any coordinate blank, a zero will be used for that coordi-
     nate during the calculations.

1. Simple interest.                

     Principal is the original amount, leave out the commas and dollar signs.
     Leave out the percent(%) symbol when typing in the interest rate.
     Years can be typed in whole or partial amounts.

2. Compound interest.

     The "Times per Year" value cannot be 0, and need only be typed in once
     not twice!
     This equation is what banks use on your savings account. 

3. Years to double investment.

     The Annual Rate of Return value cannot be 0. 
     This equation can also be called "How to Double your money!" 

4. Return needed to keep up with inflation.

     All values are shown as percent figures.
     The higher your tax bracket, the bigger return you need to keep up with
     inflation.

5. Equivalent taxable return of a non-taxed investment.

     This equation will answer the question: should you invest in Savings 
     Bonds or in a Money Market?
     The higher your tax bracket, the greater your taxable return.

6. Monthly mortgage payments.

     The Interest Rate value cannot be 0.
     The Number of Monthly Payments value cannot be 0.
     Balance Owed is the amount of money you currently owe the bank or 
     mortgage company.
     This equation can be used to calculate monthly payments on any kind of
     loan (student, car, etc.).
     This is a complex equation!

7. Annual simple interest rate on loans.

     The Principal value cannot be 0.
     This equation doesn't work for compound interest rate problems.

8. Payoff balance on a loan.

     The Interest Rate value cannot be 0.
     Use this equation to payoff that car or student loan!

9. Gross profit margin.    

     The Net Sales value cannot be 0.
     Cost of Goods Sold is the cost to make those goods you sold.
     Depreciation is how much the unsold goods lost in value by just sitting
     around.

10. Net profit margin.           
 
     The Net Sales value cannot be 0. 
     This equation can also be used to learn and practice division problems.

11. Earnings per share.   

     The Shares outstanding value cannot be 0.   
     Preferred Dividends is money given to preferred stockholders.

12. Price / Earnings ratio.         

     The Earnings per Share value cannot be 0.

1. Celsius to Farhrenheit.         

     If you add 273 degrees to the Celsius answer, you get the degrees in
     Kelvin.

2. Farhrenheit to Celsius.

3. Density Ratio.                 

     The Volume value cannot be 0.
     The unit of measure for most science equations is metric.

4. Average velocity.

     This equation is for average velocity, not instantaneous velocity.
     The Time value cannot be 0.

5. Metric to English.

     The first "Meters =" value field will give you Feet.
     The second "Meters =" value field will give you Yards.
     You don't have to fill in all the fields to get an answer.

6. English to Metric.

7. Acceleration.

     The Time value cannot be 0.
     Change in velocity is the difference between the starting velocity and
     the ending velocity.

8. Force.

     Newtons (after Isaac Newton) are the units of measure for Force.

9. Work.

     Joules (after James Prescott Joule) are the units of measure for Work.

10. Power.

     The Time value cannot be 0.
     Watts (after James Watt) are the units of measure for Power.

11. Pressure.

     The Area value cannot be 0.
     Pascals (after Blaise Pascal) are the units of measure for Pressure.

     Here are some final tips on using the EQUATOR:
 
1.   Save your work! Use the Prt-Sc key!
2.   Make sure all your .EXE files are on the default disk drive.
3.   The Esc key will get you out of the EQUATOR no matter where you are.
4.   Make a backup copy of the EQUATOR.
5.   Use the PRT.BAT file to print this user manual.
6.   Read the user manual!
7.   If we can be of any service to you concerning the EQUATOR, write:

                  Larry Fernandez
                  Fernandez Enterprises
                  3062 King Estates
                  San Jose, California   95135
```
{% endraw %}

## FILES249.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No  249  Equator/PC-TOUCH Educational Programs                  v2.1
------------------------------------------------------------------------
There are some excellent educational programs on this disk.  Equator is
a user-supported educational system for teaching math, science, and
finance.  It uses a novel non-drill exploratory approach.  PC-TOUCH is a
typing tutor which lets you go at your own pace and keeps track of how
well you are doing.  UTMP is a math drill program.
 
------------  EQUATOR 1.1 (u-s)
EQ       EXE  Main program - start by typing "EQ"
SCIENCE  EXE  Science lessons
MATH     EXE  Math lessons
PRT      BAT  To print documentation type: "PRT"
EQUATOR  TXT  Documentation  (20K)
FINANCE  EXE  Finance lessons
------------  PC-TOUCH Touch typing tutor (u-s)
PC-TOUCH BAS  Source code for PC-TOUCH.EXE
PC-TOUCH FIL  Part of PC-TOUCH
PC-TOUCH EXE  Compiled version - type "PC-TOUCH" to start
PC-TOUCH DOC  Documentation  (4K)
------------
UTMP     BAS  Math drill program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## PC-TOUCH.BAS

{% raw %}
```bas
100 '
200 ' PC-TOUCH ---- Program to help you practice touch-typing,
300 '                     by Dean Hannotte (July, 1983).
400 '
500 '         This program has been given free of charge and "as is" to the
600 '    New York IBM Personal Computer User Group. Please share it with as
700 '    many people as you like. If you'd like to request enhancements, or
800 '    just want to talk about it, I can be reached at (212) 674-5848 be-
900 '    tween 9AM and 9PM.
1000 '
1100 '         I also play the violin.
1200 '
1300 ' Constants:
1400 '
1500 Y = -1 : N = 0                         'Logical variables
1600 ENTER$ = CHR$(17)+CHR$(196)+CHR$(217)  'Picture of ENTER key
1700 ESC$ = "ESC"                           'Picture of ESC key
1800 F1$ = "F1"                             'Picture of F1 key
1900 '
2000 CR$     = CHR$(13)                     'Carriage return character
2100 CURSOR$ = CHR$(95)                     'Cursor character
2200 '
2300 ' System Variables:
2400 '
2500 TRACE = N                             'Display critical variables?
2600 '
2700 ' Execution-time Parameters:
2800 '
2900 NO.SOUND = N                          'Silent operation?
3000 NO.MUSIC = Y                          'Musical keyboard?
3100 'COLOR Foreground/Background settings for all monitor types:
3200 WHITE = 7
3300 BLACK = 0
3400 HILIT = 8                             'Add this to foreground white only
3500 BLINK = 16                            'Add this to foreground white only
3600 GOTO 14600 'Branch around subroutines
3700 '
3800 ' Wait for Keystroke Subroutine:
3900 '
4000 INK$ = INKEY$
4100 IF INK$ <> "" GOTO 4600
4200 COLOR BLACK,WHITE
4300 LOCATE 22,37
4400 PRINT TIME$;
4500 GOTO 4000
4600 IF LEN(INK$) = 2 GOTO 5200                 'Special key hit
4700 IF INK$ = CR$ GOTO 5100                    'ENTER key hit
4800 IF ASC(INK$) = 27 GOTO 35300               'ESC key hit
4900 IF ASC(INK$) < 32 GOTO 4000                'Ignore control characters
5000 IF ASC(INK$) > 126 GOTO 4000               '
5100 RETURN
5200 IF ASC(RIGHT$(INK$,1)) = 59 GOTO 5400      'F1 key hit
5300 GOTO 4000
5400 IF NOT HALTABLE GOTO 4000
5500 HALT.HH = VAL(LEFT$(TIME$,2))
5600 HALT.MM = VAL(MID$(TIME$,4,2))
5700 HALT.SS = VAL(RIGHT$(TIME$,2))
5800 LOCATE 20,34
5900 COLOR BLACK+BLINK,WHITE
6000 PRINT F1$;
6100 IF NOT TRACE GOTO 6500
6200 LOCATE 21,52
6300 COLOR WHITE,BLACK
6400 PRINT "H:" HALT.HH HALT.MM HALT.SS;
6500 INK$ = INKEY$
6600 IF INK$ <> "" GOTO 7100
6700 LOCATE 22,37
6800 COLOR BLACK,WHITE
6900 PRINT TIME$;
7000 GOTO 6500
7100 IF LEN(INK$) <> 2 GOTO 6500
7200 IF ASC(RIGHT$(INK$,1)) <> 59 GOTO 6500
7300 RESTART.HH = VAL(LEFT$(TIME$,2))
7400 RESTART.MM = VAL(MID$(TIME$,4,2))
7500 RESTART.SS = VAL(RIGHT$(TIME$,2))
7600 IF NOT TRACE GOTO 8000
7700 LOCATE 21,67
7800 COLOR WHITE,BLACK
7900 PRINT "R:" RESTART.HH RESTART.MM RESTART.SS;
8000 CHANGE.HH = RESTART.HH-HALT.HH
8100 CHANGE.MM = RESTART.MM-HALT.MM
8200 CHANGE.SS = RESTART.SS-HALT.SS
8300 IF CHANGE.SS < 0 THEN CHANGE.SS = CHANGE.SS+60:CHANGE.MM = CHANGE.MM-1
8400 IF CHANGE.MM < 0 THEN CHANGE.MM = CHANGE.MM+60:CHANGE.HH = CHANGE.HH-1
8500 IF CHANGE.HH < 0 THEN CHANGE.HH = CHANGE.MM+24
8600 START.SS = START.SS+CHANGE.SS
8700 START.MM = START.MM+CHANGE.MM
8800 START.HH = START.HH+CHANGE.HH
8900 IF START.SS > 59 THEN START.SS = START.SS-60:START.MM = START.MM+1
9000 IF START.MM > 59 THEN START.MM = START.MM-60:START.HH = START.HH+1
9100 LOCATE 20,34
9200 COLOR BLACK,WHITE
9300 PRINT F1$;
9400 IF NOT TRACE GOTO 9800
9500 LOCATE 21,35
9600 COLOR WHITE,BLACK
9700 PRINT "S:" START.HH START.MM START.SS;
9800 GOTO 4000
9900 '
10000 ' Update Line Statistics Subroutine:
10100 '
10200 COLOR BLACK,WHITE
10300 LOCATE 23,36
10400 PRINT DATE$
10500 IF KEY.STROKES = 0 GOTO 10700
10600 ACCURACY = (KEY.STROKES-ERRORS)*100/KEY.STROKES
10700 LOCATE 22,72
10800 PRINT USING "###.##";ACCURACY
10900 HH = VAL(LEFT$(TIME$,2))
11000 MM = VAL(MID$(TIME$,4,2))
11100 SS = VAL(RIGHT$(TIME$,2))
11200 IF SS < START.SS THEN SS = SS+60:MM=MM-1
11300 IF MM < START.MM THEN MM = MM+60:HH=HH-1
11400 IF HH < START.HH THEN HH = HH+24
11500 TOTAL.SS = SS-START.SS
11600 TOTAL.SS = TOTAL.SS+60*(MM-START.MM)
11700 TOTAL.SS = TOTAL.SS+3600*(HH-START.HH)
11800 TOTAL.MM = TOTAL.SS/60
11900 TOTAL.HH = TOTAL.SS/3600
12000 WPM = WORDS/TOTAL.MM
12100 LOCATE 23,72
12200 PRINT USING "###.##";WPM
12300 IF NOT TRACE GOTO 12700
12400 LOCATE 21,12
12500 COLOR WHITE,BLACK
12600 PRINT USING "MINUTES: ###.##"; TOTAL.MM
12700 RETURN
12800 '
12900 ' Hit ENTER to go on Subroutine:
13000 '
13100 PRINT
13200 PRINT
13300 LOCATE ,33
13400 PRINT "Hit ";
13500 COLOR BLACK+BLINK,WHITE
13600 PRINT ENTER$;
13700 COLOR WHITE,BLACK
13800 PRINT " to go on";
13900 R = CSRLIN
14000 GOSUB 4000 'Wait for ENTER
14100 IF INK$ <> CR$ GOTO 14000
14200 COLOR WHITE,BLACK
14300 LOCATE R,1
14400 PRINT SPACE$(79)
14500 RETURN
14600 '
14700 ' Start doing things:
14800 '
14900 COLOR WHITE,BLACK
15000 CLS
15100 KEY OFF
15200 PLAY "mb ms l64"
15300 COLOR BLACK,WHITE
15400 LOCATE 1,1,0
15500 PRINT "PC-TOUCH " STRING$(28,"-");
15600 PRINT " Program to help you practice touch-typing"
15700 LOCATE 22,1
15800 PRINT "Keystrokes     0" SPACE$(42);
15900 PRINT "Accuracy     100.00 %"
16000 LOCATE 23,1
16100 PRINT "Errors         0" SPACE$(42);
16200 PRINT "Words/Minute   0.00  "
16300 LOCATE 22,37
16400 PRINT TIME$
16500 LOCATE 23,36
16600 PRINT DATE$
16700 R = 1
16800 COLOR WHITE,BLACK
16900 LOCATE 20,1
17000 PRINT "Hit ";
17100 COLOR BLACK,WHITE
17200 PRINT ENTER$;
17300 COLOR WHITE,BLACK
17400 PRINT " to go on";
17500 LOCATE ,30
17600 PRINT "Hit ";
17700 COLOR BLACK,WHITE
17800 PRINT F1$;
17900 COLOR WHITE,BLACK
18000 PRINT " to Halt/Restart";
18100 LOCATE ,65
18200 PRINT "Hit ";
18300 COLOR BLACK,WHITE
18400 PRINT ESC$;
18500 COLOR WHITE,BLACK
18600 PRINT " to stop"
18700 LOCATE R+3,6
18800 PRINT "This program  will display  on the screen  lines of";
18900 PRINT " text  for you to type."
19000 PRINT "You can't correct mistakes  as you go along,  because that";
19100 PRINT " won't help you learn"
19200 PRINT "how not to make them  in the first place.  Just do the best";
19300 PRINT " you can, and as you"
19400 PRINT "continue  you will find yourself  making fewer and  fewer";
19500 PRINT " errors.  And remember"
19600 PRINT "that when you are just learning to type, accuracy is more";
19700 PRINT " important than speed."
19800 FOR K = 1 TO 1
19900 KEY K,""
20000 NEXT K
20100 '
20200 ' FINDFILE -- Routine for dynamically allocating input files:
20300 '
20400 MAX.F = 0
20500 DIM FILENAME$(1),FILEID$(1)
20600 FILENAME$(0) = "pc-touch.fil"
20700 FOR F = 0 TO MAX.F
20800 FOR M = 0 TO 7
20900 MODE$ = CHR$(ASC("a")+M)
21000 FILEID$(F) = MODE$+":"+FILENAME$(F)
21100 ON ERROR GOTO 21500
21200 OPEN FILEID$(F) FOR INPUT AS #1
21300 ON ERROR GOTO 0
21400 GOTO 21900
21500 RESUME 21600
21600 NEXT M
21700 FILEID$(F) = ""
21800 GOTO 22000
21900 CLOSE #1
22000 NEXT F
22100 FOR F = 0 TO MAX.F
22200 IF FILEID$(F) <> "" GOTO 22700
22300 IF FINDFILE.FAILED GOTO 22600
22400 FINDFILE.FAILED = -1
22500 CLS
22600 PRINT "*** CAN'T FIND " FILENAME$(F) " FILE ***"
22700 NEXT F
22800 IF NOT FINDFILE.FAILED GOTO 23200
22900 PRINT
23000 PRINT "*** CHANGE DISKETTES AND TRY AGAIN ***"
23100 SYSTEM
23200 '
23300 ' End of FINDFILE Routine:
23400 '
23500 PRINT
23600 PRINT
23700 GOSUB 12800 'Hit ENTER to go on
23800 HALTABLE = Y
23900 COLOR WHITE,BLACK
24000 LOCATE 13,1
24100 PRINT SPACE$(79)
24200 LOCATE 12,21
24300 PRINT "TYPE THE FOLLOWING LINE EXACTLY AS SHOWN:"
24400 START.HH = VAL(LEFT$(TIME$,2))
24500 START.MM = VAL(MID$(TIME$,4,2))
24600 START.SS = VAL(RIGHT$(TIME$,2))
24700 IF NOT TRACE GOTO 25100
24800 LOCATE 21,35
24900 COLOR WHITE,BLACK
25000 PRINT "S:" START.HH START.MM START.SS
25100 '
25200 ' Open (or re-open) the input file:
25300 '
25400 OPEN FILEID$(0) FOR INPUT AS #1
25500 '
25600 ' Read the source file:
25700 '
25800 IF EOF(1) GOTO 34700
25900 LINE INPUT #1,RECORD$
26000 IF RECORD$ = "" GOTO 25800
26100 RC = 0                          'Define Record Column within buffer
26200 CC = 41 - LEN(RECORD$)/2        'Define Cursor Column within display area
26300 COLOR WHITE+HILIT,BLACK
26400 LOCATE 14,1
26500 PRINT SPACE$(79)
26600 LOCATE 14,CC
26700 PRINT RECORD$
26800 LOCATE 16,1
26900 PRINT SPACE$(79)
27000 LOCATE 16,CC
27100 PRINT CURSOR$         'Print a cursor
27200 IN.A.WORD = N
27300 CC = CC - 1
27400 '
27500 ' Wait for a keystroke:
27600 '
27700 RC = RC + 1
27800 CC = CC + 1
27900 GOSUB 4000 'Wait for keystroke
28000 IF INK$ = CR$ GOTO 34200               'ENTER key hit
28100 IF NO.MUSIC GOTO 28700
28200 IF INK$ < "A" OR  INK$ > "z" GOTO 28700
28300 IF INK$ > "Z" AND INK$ < "a" GOTO 28700
28400 N = ASC(INK$) - 65
28500 IF INK$ < "a" THEN N = N + 32
28600 PLAY "n=n;"
28700 '
28800 ' Display the character:
28900 '
29000 LOCATE 16,CC
29100 OUTK$ = MID$(RECORD$,RC,1)
29200 IF INK$ <> OUTK$ GOTO 29900
29300 COLOR WHITE+HILIT,BLACK
29400 PRINT INK$;
29500 GOTO 31000
29600 '
29700 ' Flag incorrect character:
29800 '
29900 COLOR BLACK+BLINK,WHITE
30000 PRINT INK$;
30100 ERRORS = ERRORS + 1
30200 COLOR BLACK,WHITE
30300 LOCATE 23,11
30400 PRINT USING "#####,";ERRORS
30500 IF NO.SOUND GOTO 31000
30600 BEEP
30700 '
30800 ' Update keystroke statistics:
30900 '
31000 COLOR WHITE+HILIT,BLACK
31100 LOCATE 16,CC+1
31200 PRINT CURSOR$        'Print a cursor
31300 KEY.STROKES = KEY.STROKES + 1
31400 COLOR BLACK,WHITE
31500 LOCATE 22,11
31600 PRINT USING "#####,";KEY.STROKES
31700 '
31800 ' See where we are syntactically:
31900 '
32000 IF OUTK$ >= "a" AND OUTK$ <= "z" GOTO 33100
32100 IF OUTK$ >= "A" AND OUTK$ <= "Z" GOTO 33100
32200 IF OUTK$ >= "0" AND OUTK$ <= "9" GOTO 33100
32300 '
32400 ' We're not in a word:
32500 '
32600 IN.A.WORD = N
32700 GOTO 34100
32800 '
32900 ' We're in a word:
33000 '
33100 IF IN.A.WORD GOTO 34100
33200 IN.A.WORD = Y
33300 WORDS = WORDS + 1
33400 IF NOT TRACE GOTO 34100
33500 LOCATE 21,1
33600 COLOR WHITE,BLACK
33700 PRINT "WORDS:" WORDS
33800 '
33900 ' Loop back to read next character:
34000 '
34100 GOTO 27700
34200 '
34300 ' End of line:
34400 '
34500 GOSUB 10200 'Update Line Statistics
34600 GOTO 25500 'Loop back to read next record
34700 '
34800 ' End of File Routine:
34900 '
35000 CLOSE #1
35100 FREE = FRE(" ")                   'Reorganize string space
35200 GOTO 25100                        'Loop back and re-open the file
35300 '
35400 ' User has hit the ESC key:
35500 '
35600 CLOSE #1
35700 '
35800 ' End of Program:
35900 '
36000 HALTABLE = N
36100 COLOR WHITE,BLACK
36200 FOR R = 2 TO 21
36300 LOCATE R,1
36400 PRINT SPACE$(79)
36500 NEXT R
36600 LOCATE 4,6
36700 PRINT "Thank you for using PC-TOUCH. Feel free to call me at ";
36800 PRINT "212/674-5848 any day"
36900 PRINT "between 9AM and 9PM to talk about:"
37000 PRINT ""
37100 PRINT ""
37200 PRINT TAB(11) "1) this program;"
37300 PRINT TAB(11) "2) the quotations I used;"
37400 PRINT TAB(11) "3) Bach's Chaconne in d-minor;"
37500 PRINT TAB(11) "4) dinosaurs in children's literature;"
37600 PRINT TAB(11) "5) anything that's made your life beautiful lately."
37700 PRINT
37800 PRINT
37900 PRINT TAB(21) "Sincerely,"
38000 PRINT
38100 PRINT TAB(21) "Dean Hannotte"
38200 PRINT TAB(21) "151 First Avenue"   TAB(55) "(To return to DOS,"
38300 PRINT TAB(21) "New York, NY 10003" TAB(57) "just hit ";
38400 LOCATE ,,0
38500 COLOR BLACK+BLINK,WHITE
38600 PRINT ENTER$;
38700 COLOR WHITE,BLACK
38800 PRINT ")"
38900 LOCATE 8,67:PRINT "\";:LOCATE ,69:PRINT "/"
39000 LOCATE 9,66:PRINT "-- --"
39100 LOCATE 10,67:PRINT "/";:LOCATE ,69:PRINT "\"
39200 COLOR WHITE+HILIT+BLINK,BLACK
39300 LOCATE 7,66:PRINT "*";:LOCATE ,70:PRINT "*"
39400 LOCATE 9,64:PRINT "*";:LOCATE ,72:PRINT "*"
39500 LOCATE 11,66:PRINT "*";:LOCATE ,70:PRINT "*"
39600 GOSUB 4000 'Wait for ENTER
39700 IF INK$ <> CR$ GOTO 39600
39800 COLOR WHITE,BLACK               'Scroll off the screen
39900 LOCATE 23,1                     'all but statistics lines.
40000 FOR X = 1 TO 21                 '(Must be 21 for BASCOM)
40100 PRINT
40200 NEXT X
40300 SYSTEM
```
{% endraw %}

## PC-TOUCH.DOC

{% raw %}
```

                                P C - T O U C H



            (C) Copyright 1983, 1984, 1985, 1986 by Dean Hannotte
                                                    318 East Sixth Street
                                                    New York, NY 10003

     PC-TOUCH is a simple program with  a simple purpose: to help you  practice
touch-typing.

     PC-TOUCH will display  on the screen  lines of text  for you to  type. You
can't correct mistakes as you go  along, because that won't help you  learn how
not to  make them  in the  first place.  Just do  the best  you can, and as you
continue you will find yourself making fewer and fewer errors.

     As you are  typing, PC-TOUCH will  update statistics along  the bottom two
rows of the screen. On the left you will see the total number of keystrokes and
the total number of erroneous keystrokes. On the right you will see your typing
accuracy as the percentage of keystrokes which have been correct, and your typ-
ing speed in words per minute. The statistics on the left are updated  whenever
you press any key, while those on the right are updated whenever you get to the
end of a line.  Remember that when you  are just learning to  type, accuracy is
more important than speed.


     To use PC-TOUCH, just key in:

          [d:]pc-touch<enter>

          where:  [d:]              is the optional drive specification,
                                    a single letter from a to h.

                  pc-touch          is the name of the program DOS will run.

                  <enter>           means press the ENTER key.


     PC-TOUCH starts  by giving  you instructions  on how  to use  the program.
Aside from the keys you will use to type the lines of text displayed, there are
only three special keys recognized:

          ENTER -- Press this key when you get to the end of each
                   line.

          ESC ---- Press this key when you are done with the program.

          F1 ----- Press this key when you want to stop typing for a
                   while (for example, to answer the phone) and don't
                   want to lose credit for the elapsed time during
                   which nothing will be typed.  (When you are ready
                   to restart, just press F1 a second time.)

     PC-TOUCH doesn't recognize any other special keys because the idea was  to
practice touch-typing in a way that would be valid for ANY keyboard,  including
ancient office typewriters you may be stranded with once in a while. (If enough
people ask for more  sensitivity to the special  keys on the IBM/PC  [like INS,
DEL and the cursor control keys], I'll be glad to include this in a future  re-
lease.) PC-TOUCH should  work with any  display device that  supports 80-column
output.


     PC-TOUCH is distributed as four files:

          PC-TOUCH.DOC -- this file, containing documentation. The
                          program doesn't need this file to operate, so
                          you can ERASE, RENAME, or archive it.

          PC-TOUCH.EXE -- the compiled version of the program. You will
                          need this because the interpreted version
                          (PC-TOUCH.BAS) is not fast enough.

          PC-TOUCH.FIL -- the lines of text that you will type. The
                          program needs this file to operate, so you must
                          leave it in a drive addressed by one of the
                          letters from A through H. PC-TOUCH will chose
                          the first copy it finds if you have more than
                          one. This file is an ordinary ASCII file, so
                          you can change the material I've selected or
                          replace it entirely using any ordinary text
                          editor. Don't make any line longer than 79
                          characters. After you've typed through the
                          entire file, PC-TOUCH goes back to the
                          beginning and you start over.

          PC-TOUCH.BAS -- the source program. You can use this to make
                          your own modifications to the program, or just
                          to get some ideas about how this kind of
                          program is written. It cannot be used by itself
                          (as an operand of BASICA), though, because it
                          isn't fast enough.


     Only the first three of these files are necessary. The source program  can
be used  to make  your own  modifications, but  you will  have to compile it in
order to get a version that's fast enough for typing. (If you got PC-TOUCH from
a bulletin board and they  gave you the .BAS file  but not the .EXE file,  just
let them know that they're packaging the program incorrectly.)

     PC-TOUCH has been  given free of  charge and "as  is" to the  New York IBM
Personal Computer User Group (NYPC). Please share it with as many people as you
like. If you'd like to suggest enhancements,  or just want to talk about it,  I
can be reached at  (212) 674-5848 between 9AM  and 9PM. I hope  you enjoy using
PC-TOUCH, and that it helps improve your typing speed.


                                        Sincerely,

                                        Dean Hannotte

```
{% endraw %}

## UTMP.BAS

{% raw %}
```bas
1 KEY OFF
10 WIDTH 40
15 CLS
100 PRINT"*GUESS THE MISSING PROBLEM*"
105 PRINT
110 PRINT"THIS IS A MATH GAME IN WHICH"
115 PRINT"YOU GUESS THE PROBLEM.YOU   "
120 PRINT"HAVE A CHOICE OF ADDING,SUB-"
125 PRINT"TRACTING,OR MULTIPLYING.THE"
130 PRINT"PROBLEM IS GIVEN IN X FORM. "
140 PRINT"THE PROBLEMS CAN BE UP TO 4 "
145 PRINT"NUMBERS. THE GAME IS PLAYED AS"
150 PRINT"FOLLOWS:"
152 PRINT" 1)ENTER THE TYPE OF PROBLEM"
155 PRINT" 2)ENTER GUESS            "
160 PRINT" 3)ENTER COLUMN YOU THINK"
170 PRINT" GUESS IS IN"
175 PRINT" 4) CONTINUE TILL DONE  "
200 PRINT"       *GOOD LUCK*   "
205 PRINT :PRINT :PRINT
210 PRINT" PUSH SPACE BAR WHEN DONE"
220 LL$=INPUT$(1)
225 IF LL$=" " GOTO 300 ELSE 220
300 PRINT :PRINT :PRINT :PRINT :PRINT
600 DIM C(20)
700 DIM B(20)
800 DIM A(20)
900 DIM Y(5,5)
920 WIDTH 40
950 W=0
970 RANDOMIZE VAL(RIGHT$(TIME$,2))
990 GOSUB 14000
992 CLS
1000 PRINT "WHAT KIND OF PROBLEM DO YOU  WANT TO DO"
1001 PRINT
1002 PRINT TAB(25)"ADDING(P)"
1004 PRINT
1006 PRINT TAB(25)"SUBTRACTING(S)"
1008 PRINT
1010 PRINT TAB(25)"MULTIPLYING(M)"
1012 F$=INPUT$(1)
1014 IF F$="P" THEN GOTO 2300
1015 IF F$="p" THEN GOTO 2300
1016 IF F$="M" THEN GOTO 1800
1017 IF F$="m" THEN GOTO 1800
1118 IF F$="S" THEN GOTO 1400
1119 IF F$="s" THEN GOTO 1400
1200 CLS
1400 GOSUB 20000
1500 F$="-"
1600 C=A-B
1700 GOTO 5050
1800 A=INT(RND*(10000))
1810 B=INT(RND*(10)+1)
1900 F$="*"
2000 C=A*B
2100 GOTO 5050
2300 GOSUB 20001
2400 C=A+B
2450 F$="+"
2500 GOTO 5050
2600 PRINT "YOU HAVE"W"WRONG ANSWERS"
2700 PRINT
3000 INPUT "WHAT NUMBER DO YOU WANT AND PUSH RETURN WHEN DONE";G
3004 PRINT :PRINT :PRINT :PRINT
4150 INPUT "WHAT COLUMN DO YOU WANT AND PUSH RETURN WHEN DONE";N
4175 PRINT :PRINT :PRINT
4205 CLS
4210 R=0
4220 S=0
4230 T=0
4300 IF G=Y(1,N) THEN A$(N)=STR$(G) ELSE R=R+1
4400 IF G=Y(2,N),THEN B$(N)=STR$(G) ELSE S=S+1
4500 IF G=Y(3,N) THEN C$(N)=STR$(G) ELSE T=T+1
4600 GOTO 10456
5050 A(1)=0
5100 A$(1)="  "
5150 Y(1,1)=A(1)
5500 A(2)=INT(A/1000)
5600 IF A(2)=O THEN A$(2)="  "ELSE A$(2)=" X"
5700 Y(1,2)=A(2)
5800 A(13)=A-(A(2)*1000)
5900 A(3)=INT(A(13)/100)
6000 IF A(2)+A(3)=0 THEN A$(3)="  "ELSE A$(3)=" X"
6100 Y(1,3)=A(3)
6200 A(14)=A(13)-(A(3)*100)
6300 A(4)=INT(A(14)/10)
6400 IF A(2)+A(3)+A(4)=0 THEN A$(4)="  "ELSE A$(4)=" X"
6500 Y(1,4)=A(4)
6600 A(15)=A(14)-(A(4)*10)
6700 A(5)=A(15)
6800 Y(1,5)=A(5)
6850 A$(5)=" X"
7000 B$(1)="  "
7100 Y(2,1)=B(1)
7300 B(2)=INT(B/1000)
7400 IF B(2)=0 THEN B$(2)="  "ELSE B$(2)=" X"
7500 Y(2,2)=B(2)
7600 B(13)=B-(B(2)*1000)
7700 B(3)=INT(B(13)/100)
7800 IF B(2)+B(3)=0 THEN B$(3)="  "ELSE B$(3)=" X"
7900 Y(2,3)=B(3)
8000 B(14)=B(13)-(B(3)*100)
8100 B(4)=INT(B(14)/10)
8200 IF B(2)+B(3)+B(4)=0 THEN B$(4)="  " ELSE B$(4)=" X"
8300 Y(2,4)=B(4)
8400 B(15)=B(14)-(B(4)*10)
8500 B(5)=B(15)
8600 Y(2,5)= B(5)
8650 B$(5)=" X"
8700 C(1)=INT(C/10000)
8800 IF C(1)=0 THEN C$(1)="  " ELSE C$(1)=" X"
8900 Y(3,1)=C(1)
9000 C(12)=C-(C(1)*10000)
9100 C(2)=INT(C(12)/1000)
9200 IF C(1)+C(2)=0 THEN C$(2)="  " ELSE C$(2)=" X"
9300 Y(3,2)=C(2)
9400 C(13)=C(12)-(C(2)*1000)
9500 C(3)=INT(C(13)/100)
9600 IF C(1)+C(2)+C(3)=O THEN C$(3)="  " ELSE C$(3)=" X"
9700 Y(3,3)=C(3)
9800 C(14)=C(13)-(C(3)*100)
9900 C(4)=INT(C(14)/10)
10000 IF C(1)+C(2)+C(3)+C(4)=0 THEN C$(4)="  " ELSE C$(4)=" X"
10100 Y(3,4)=C(4)
10200 C(15)=C(14)-(C(4)*10)
10300 C(5)=C(15)
10400 Y(3,5)=C(5)
10450 C$(5)=" X"
10452 CLS
10455 PRINT :PRINT :PRINT :PRINT
10456 PRINT TAB(29) "1 2 3 4 5"
10457 PRINT TAB(29) "- - - - -"
10458 PRINT
11000 PRINT TAB(30) A$(2);A$(3);A$(4);A$(5)
11200 PRINT TAB(28) F$;" ";B$(2);B$(3);B$(4);B$(5)
11300 PRINT TAB(28)"___________"
11400 PRINT TAB(28) C$(1);C$(2);C$(3);C$(4);C$(5)
11405 PRINT :PRINT :PRINT :PRINT :PRINT
11410 IF R=0 GOTO 14450
11420 IF S=0 GOTO 14450
11430 IF T=0 GOTO 14450
11440 W=W+1
11450 PRINT "YOU GOT A WRONG ANSWER"
11455 PRINT
11460  IF W<15 GOTO 2600
12200 PRINT TAB(27)Y(1,2);Y(1,3);Y(1,4);Y(1,5)
12300 PRINT TAB(25)F$;" ";Y(2,2);Y(2,3);Y(2,4);Y(2,5)
12400 PRINT TAB(25)"____________"
12500 PRINT TAB(24)Y(3,1);Y(3,2);Y(3,3);Y(3,4);Y(3,5)
12510 FOR TYR=1 TO 1000:NEXT
12550 PRINT :PRINT :PRINT
12630 PRINT :PRINT :PRINT
13000 END
14000 RANDOMIZE VAL(RIGHT$(TIME$,2))
14100 A=INT(RND*(9999)+1)
14200 B=INT(RND*(9999)+1)
14300 RETURN
14450 FOR V=2 TO 5
14460 IF A$(V)=" X" GOTO 2600
14470 NEXT V
14480 FOR Q=2 TO 5
14490 IF B$(Q)=" X" GOTO 2600
14500 NEXT Q
14520 FOR AA=1 TO 5
14530 IF C$(AA)=" X" GOTO 2600
14540 NEXT AA
14545 PRINT TAB(15)"*CONGRAGULATIONS*              
15051 PRINT
15052 PRINT TAB(10)"YOU GOT MY NUMBER!"
20000 RANDOMIZE VAL(RIGHT$(TIME$,2))
20001 A=INT(RND*(9999)+1)
20002 B=INT(RND*(9999)+1)
20003 IF B>A GOTO 20001 ELSE RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0249

     Volume in drive A has no label
     Directory of A:\

    EQ       EXE     22272   1-14-86  12:10a
    SCIENCE  EXE     39808   1-18-86   2:10a
    MATH     EXE     38784   1-18-86   2:19a
    PRT      BAT       256   1-21-85  12:53a
    EQUATOR  TXT     21760   1-13-87  12:07a
    FINANCE  EXE     42880   1-18-86   2:15a
    PC-TOUCH EXE     33968  11-30-85  12:12a
    PC-TOUCH DOC      5449  11-30-85  12:05a
    PC-TOUCH FIL      7899  11-30-85  12:09a
    PC-TOUCH BAS     12389  11-30-85  12:04a
    UTMP     BAS      3840  11-18-84  11:26p
    FILES249 TXT      1191   1-04-80   1:11a
    GO       BAT       400   1-04-80   1:10a
           13 file(s)     230896 bytes
                           84992 bytes free
