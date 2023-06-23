---
layout: page
title: "PC-SIG Diskette Library (Disk #1509)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1509/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1509"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZYAC CALCULATOR"

    ZYAC will turn your IBM-PC or compatible into programmable scientific
    calculators.
    
    ZYAC performs all common arithmetic functions from addition and
    subtraction to exponentials, square roots and logarithms. Other
    features range from trigonometric functions, including hyperbolics in
    radians or degrees, to statistical functions such as mean, standard
    deviation, population variance, etc., and metric-to-English
    conversions.
    
    ZYAC uses the entire 80x25 computer screen, has online help and a menu.
    It's much easier to read and use than a normal hand-held
    calculator. Two memory registers and two programmable function keys,
    make it one of the most comprehensive calculator programs available.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1509.TXT

{% raw %}
```
Disk No: 1509
Program Title:  ZYAC Calculator
PC-SIG version: 1.0

ZYAC will turn your IBM-PC or Zenith Z-100 into programmable scientific
calculators.

ZYAC performs all common math functions from addition and subtraction to
exponentials, square roots and logarithms to trigonometric functions,
including hyperbolics, in radians or degrees.  Statistical functions
(mean, standard deviation, population variance, etc.) and
Metric-to-English conversions are also part of it's functionality.

ZYAC uses the entire 80x25 computer screen, has online help and a menu
so it is much easier to read and use than a normal hand-held calculator.
The system has two memory registers and two programmable function keys
making it one of the most comprehensive calculator programs available.

Synopsis: Turn your IBM or Z-100 PC into a programmable, menu-driven
scientific calculator.

Usage:  Scientific Calculator.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

Author:  Gregory D. Elder

File Descriptions:

README   DOC  Information about changes since last version of ZYAC.
ZYAC     DOC  Complete manual describing how to use ZYAC.
SAMP     ZYC  Sample ZYAC initialization file.
ZYACIBM  COM  IBM-PC version of ZYAC.
ZYACZ100 COM  Zenith Z-100 version of ZYAC.

The PC-SIG Library
1030D E. Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1509 ZYAC CALCULATOR  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type ZYACIBM (press enter)                        ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INFO.TXT

{% raw %}
```
ZYAC (Yet Another Calculator) program is a scientific, algebraic
operating system calculator for IBM-PCs and Zenith Z-100 computers.
In addition to basic math functions, features of ZYAC include:
trigonometric functions (to include hyperbolic), log (natural and
common), exponential function, power function, factorial, square root,
English-to-metric conversions, statistics (summation, mean, variance,
and standard deviation), and others.  ZYAC also contains two memory
registers and two programmable function keys.  The values stored in the
memory registers and the equations programmed in the function keys may
be saved to disk files for use in initializing ZYAC.


Files contained on the ZYAC disk:

README.DOC   - Information about changes since last version of ZYAC.
SAMP.ZYC     - Sample ZYAC initialization file.
ZYACIBM.COM  - IBM-PC version of ZYAC.
ZYACZ100.COM - Zenith Z-100 version of ZYAC.
ZYAC.DOC     - Complete manual describing how to use ZYAC.
```
{% endraw %}

## README.DOC

{% raw %}
```
    This archive of ZYAC (ZYAC20A.ARC) is exactly the same as ZYAC20.ARC
except the address in the documentation has changed (I've moved
from Nebraska to Colorado).
-----------------------------------------------------------------------------

    Version 2.0 of ZYAC is not in the public domain--it is now
distributed under the Shareware concept.  See ZYAC.DOC for information
about registering your copy of ZYAC.  The following files are
distributed with ZYAC:

    * README.DOC      - This file.
    * ZYAC.DOC        - User's guide for ZYAC.
    * ZYACZ100.COM    - Version of ZYAC for Zenith Z100 computers.
    * ZYACIBM.COM     - Version of ZYAC for IBM-PC's and compatibles.
    * SAMP.ZYC        - Sample initialization file.

    The following are some of the changes which have been made under
version 2.0:

    1.  Added color capability.
    2.  Option for fast screen I/O for IBM-PC's.
    3.  Hyperbolic functions.
    4.  Built-in metric to English measurement conversions.
    5.  Statistical functions (sum, mean, standard deviation, and
          variance).
    6.  Use radians or degrees for trig functions.

    I hope you find this new version of ZYAC useful.  I'm always
interested in any comments about the program.

                                           Gregory Elder
                                           Qtrs 4301-A
                                           USAFA, CO 80840

P.S.  The IBM-PC version of ZYAC has been tested on a Z100 under
ZPC (IBM-PC emulator).  If anyone experiences problems on a real
IBM-PC, please let me know.


```
{% endraw %}

## ZYAC.DOC

{% raw %}
```



























                                      ZYAC

                               Calculator Utility
                                   Version 2.0

















        (c) COPYRIGHT 1988 by Gregory D. Elder;  ALL RIGHTS RESERVED





                                Gregory D. Elder
                                   Qtrs 4301-A
                                 USAFA, CO 80840




                                TABLE OF CONTENTS

                                                               Page

        INTRODUCTION............................................1
          Registration Notes....................................1
          What is ZYAC?.........................................1
          System Requirements...................................2
          Distribution Files....................................3 

        STARTING ZYAC...........................................4

        SCREEN LAYOUT...........................................5

        ENTERING NUMBERS........................................6

        USING ZYAC..............................................7
          ZYAC Commands.........................................7
          Conversions..........................................13
          Defining Functions...................................14
          Initialization Files.................................15

        PROGRAM HISTORY........................................17

        REGISTRATION FORM......................................18
































                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 1


                                  INTRODUCTION

        Registration Notes

             Version  2.0 of ZYAC,  and later versions,  are NOT  in  the 
        public  domain as earlier versions.   ZYAC is now available under 
        the  Shareware  concept.   This means you are free  to  copy  and 
        distribute the program.  The more people who try the program, the 
        better.   If after trying the program, you decide it is useful to 
        you  and you expect to be using it in the future,  then I ask you 
        to register your copy by sending $15.00 and the registration form 
        found  at the end of this manual.   By registering your  copy  of 
        ZYAC,  you  encourage the author to continue refining ZYAC and to 
        develop  other software.   Registered users will be  notified  of 
        updates  to  ZYAC,  as  well as other software developed  by  the 
        author.

             As  stated  above,  you may freely copy and  distribute  the 
        program to others; however, the following conditions must be met:

             1.   All  ZYAC files must be distributed in their  original, 
        unmodified state.

             2.   Individuals  may  copy  and distribute  the  files  for 
        evaluation so long as no price or other consideration is charged.

             3.   Non-profit  computer clubs may share the  program  with 
        their members.   A distribution fee of not more than $8.00 may be 
        charged for the program diskette.  All club members who intend to 
        continue  using  the program after evaluation,  are requested  to 
        send the $15.00 registration fee.

             The author of ZYAC makes no expressed or implied  warranties 
        to   licensees  with  regard  to  this  software  including   its 
        merchantability,  or its fitness for any purpose.   Neither shall 
        the  author have any liability or responsibility to licensees for 
        damages of any kind, including special, indirect or consequential 
        damages  arising  from use of this  program.

        What is ZYAC?

             ZYAC   is  not  "Yet  Another  Compiler"  but  "Yet  Another 
        Calculator" program!  I originally wrote ZYAC for the Zenith Z100 
        microcomputer.   With version 1.2 of ZYAC,  I created a copy  for 
        IBM-PCs  as  well.   Basically,  ZYAC  allows you  to  turn  your 
        microcomputer  into  a  scientific-like  calculator.    ZYAC  can 
        perform the following functions:

             1.    Standard   math  functions   (addition,   subtraction, 
        multiplication, and division).

             2.   Trigonometric functions (sine, cosine, tangent, inverse 
        sine,  inverse cosine,  and inverse tangent).   Also included are 
        hyperbolic  sine,  hyperbolic  cosine,  and  hyperbolic  tangent.  
        Radians or degrees may be used with these functions.


                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 2


             3.   Other  functions to include factorial,  square,  square 
        root,  power, reciprocal, exponential function, common logarithm, 
        and natural logarithm.

             4.   Statistical functions of  summation,  mean,  population 
        standard   deviation,   sample  standard  deviation,   population 
        variance, and sample variance.

             5.   Conversion functions to convert between certain  metric 
        and English measurements.

        ZYAC  also contains two memory registers for temporary storage of 
        values   and  two  programmable  function   keys.    Furthermore, 
        initialization  files may be used to automatically  load  certain 
        values  or functions into the memory registers and function  keys 
        at program start-up.

             I  wrote  ZYAC in C.   With version 2.0,  I switched to  the 
        Datalight Optimum-C compiler.  For Z100 users, you no longer have 
        to  boot  your  Z100  with the  graphics  character  set  in  the 
        ALTCHAR.SYS file.  The graphics characters are now built into the 
        ZYAC program.

        System Requirements

             Inorder to use ZYAC, you will need the following:

        *  A Heath/Zenith 100, 110, or 120 computer; or an IBM-PC or
             compatible computer

        *  At least one diskette drive

        *  MS-DOS version 2.0 or higher

        *  A color monitor is optional

             ZYAC was developed on a Z100 with 768K of memory running MS-
        DOS  version 2.18.   The IBM-PC version was developed on the same 
        Z100 under ZPC (IBM-PC emulator).


















                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 3


        Distribution Files

             ZYAC is distributed with the following files:

                  ZYAC.DOC     - Documentation file (this file).
                  ZYACZ100.COM - Version of ZYAC for Z100's.
                  ZYACIBM.COM  - Version of ZYAC for IBM-PC's
                  SAMP.ZYC     - Sample ZYAC initialization file.

        Before  using ZYAC,  copy the appropriate version to your working 
        disk  and rename the program to ZYAC.   For example,  if you  are 
        using  a Z100,  copy ZYACZ100.COM to your  working  disk.   Then,  
        rename the file with the DOS rename command as shown below:

                  REN ZYACZ100.COM ZYAC.COM










































                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 4


                                  STARTING ZYAC

             ZYAC is started with a command of the following format:

                  zyac [-c] [-f] [ifile]

        The items in square brackets are optional.   The meaning of  each 
        option is listed below.

             -c     =  Use color.  Without this option only black and 
                       white will be displayed.

             -f     =  Use fast video output (for IBM-PCs only).  Using
                       this option causes output to be written directly
                       to the IBM-PC's video memory.  Not using this
                       option causes output to be written using ROM
                       BIOS calls (useful if your microcomputer is
                       not totally IBM-PC compatible).

             ifile  =  This represents the name of an initialization
                       file for ZYAC to use.  Initialization files
                       are explained in more detail later in this
                       manual.

        For example, if you were using an IBM-PC with a color monitor and 
        wanted  to use fast screen I/O and an initialization file  called 
        SAMP.ZYC, you would invoke ZYAC with this command:

                  zyac -c -f samp.zyc




























                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 5


                                  SCREEN LAYOUT

             After  ZYAC starts operating,  various windows are drawn  on 
        the screen.  The middle of the screen will display the image of a 
        calculator.  At  the top of the calculator is a window called the 
        numeric window  (NW).  The numeric window  echoes the numbers you 
        type in,  as well as displaying the results of any operations you 
        perform.   To  the  lower right of the NW is displayed  "deg"  or 
        "rad".   This  indicates whether degrees of radians will be  used 
        for trigonometric functions.   For Z100 users,  the keys shown on 
        the calculator correspond to the keys on the Z100's keypad.   For 
        example,  pressing  the UP-ARROW key on the keypad causes ZYAC to 
        perform  a  multiplication  operation.   For  IBM-PC  users,  the  
        calculator  keys do NOT relate to any particular  keyboard/keypad 
        layout.   This is because of the different types of keypads found 
        on IBM-PC's and IBM clones.   The various key operations will  be 
        described later.  

             On the left hand side of the screen is the menu/help window.  
        This  window displays the various ZYAC  menus.   In  addition,  a 
        brief  description  of ZYAC is shown in this window whenever  the 
        <HELP> key is depressed on the Z100,  or the H key on the IBM-PC.  

             On the right hand side of the screen are five windows.   The 
        operator  window  at  top  displays  the  current  operator   key 
        depressed by the user.   The two memory windows located below the 
        operator  window  show the values saved in memory1  and  memory2.  
        Finally,  below  the memory windows are windows for function keys 
        F1 and F2.   These windows show the current calculator  functions 
        programmed for these two keys.  

             The  bottom  of  the  screen displays  a  menu  showing  the 
        operations for certain function keys.
























                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 6


                                ENTERING NUMBERS

             Numbers  may  be entered by typing the numeric keys  on  the 
        keypad  or  keyboard.   Real numbers as well as integers  may  be 
        typed  in.   Furthermore,  for very large or very small  numbers, 
        scientific notation is supported.

             When typing in numbers,  you may enter in as many digits  as 
        will fit in the numeric window  (16 characters).   ZYAC, however, 
        will  only display real numbers out to 8 decimal places with non-
        significant zeros dropped off.   For example,  if you entered the 
        number 9999.012345678 and then added 0 to it,  ZYAC would display 
        9999.01234568.  (Since it only displays out to the eighth decimal 
        place  it  rounded the 7 up to an  8.)   Furthermore,  ZYAC  will 
        display  results in scientific notation as needed.   A scientific 
        notation number is one in the form of [-]x.xxxxxxxxE[-]xxx.   The 
        x's  represent digits and the minus signs are optional  (if  they 
        aren't  there  then  the number  is  positive).   E,  of  course, 
        represents  power  of ten.   For example,  2.983E008 means  2.983 
        times  10  raised to the 8th power.   This would  be  the  number 
        298300000.

             Users  may  use  the 'E' key on the  keyboard  for  entering 
        numbers  in scientific notation if desired.   Simply type in  the 
        numeric  part  followed  by 'E'.   If the exponent  is  to  be  a 
        negative  value,  then hit the <+/-> key after the 'E' to  change 
        the sign.  Finally, type in the exponent part.  (The <+/-> key is 
        the  <HOME> key or the '~' key on Z100's.   On IBM-PC's,  the '~' 
        key  is the <+/-> key.)  Notice that hitting the <+/-> key  after 
        typing  the  exponent  will result in changing the  sign  of  the 
        number and not its exponent.  You can only change the sign of the 
        exponent after you have typed the 'E' and before you have entered 
        the  actual  exponent  part.   If you have  already  entered  the 
        exponent and wish to change its sign, simply use the BACKSPACE or 
        DELETE  key  to backup to the 'E'.   Then,  change the  sign  and 
        reenter the exponent part.





















                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 7


                                   USING ZYAC

             ZYAC  is  an  Algebraic Operating System  (AOS)  calculator, 
        i.e.,  it  operates similar to a Texas Instrument calculator  and 
        not a reverse polish notation system.   This means you enter  the 
        numbers  and operators the same as if they were written on paper.  
        For  example,  to do 10 - 5 + 3 = 8 you would enter 10,  hit  the 
        minus operator, enter 5, hit the plus operator, enter 3, and then 
        hit  the  equal  operator.   The  result,  8,  would  finally  be 
        displayed.   ZYAC  does not have any operator  precedence  rules.  
        All operations are performed left to right.   Therefore, 10 - 6 * 
        8 is processed like (10 - 6) * 8 and not 10 - (6 * 8).

        ZYAC Commands

             Each ZYAC command is shown and described below.

        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        UP-ARROW   *          Multiplication operator (*).  The UP-ARROW  
        *                     on the Z100 keypad and the '*' key on the 
                              keyboard may be used for multiplication
                              operations.  The '*' key on the IBM-PC is
                              the only valid key for multiplication.

        DOWN-ARROW +          Addition operator (+).  The DOWN-ARROW on 
        +                     the Z100 keypad and the '+' key on the
                              keyboard may be used for addition 
                              operations.  The '+' key on the IBM-PC is
                              the only valid key for addition.

        RIGHT-     /          Divison operator (/).  The RIGHT-ARROW on
        ARROW, /              the Z100 keypad and the '/' key on the
                              keyboard may be used for divide operations.
                              The '/' key on the IBM-PC is the only
                              valid key for division.  If a divide by
                              zero is attempted, a "DIVIDE BY 0"
                              message will be shown in the numeric
                              window.

        LEFT-      %          Percent operator (%). The LEFT-ARROW on 
        ARROW, %              the Z100 keypad and the '%' key on the
                              keyboard may be used for percent
                              operations.  The '%' key on the IBM-PC is
                              the only valid key for percent operations.
                              Percent simply divides the current number
                              by 100.

        -          -          Minus key (-) on the Z100 keypad or
                              keyboard performs a subtraction operation.





                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 8


        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        ENTER      RETURN     Equal operator (=).  The ENTER key on the
        RETURN     =          Z100 keypad, the RETURN key on the 
        =                     keyboard, and the '=' key may be used for
                              equal operations.  The RETURN key and '='
                              key on the IBM-PC are the only valid keys
                              for equal operations.  The equal operator
                              completes all processing for intermediate
                              and final results. 

        HOME       ~          Change sign operator (+/-).  The HOME key
        ~                     on the Z100 keypad and the '~' key on the
                              keyboard may be used for change sign
                              operations.  The '~' key on the IBM-PC is
                              the only valid key for change sign
                              operations.  This is used to change the
                              sign of a number or its exponent part.
                              When this key is hit a positive number will
                              be changed to negative, and a negative
                              number will be changed to positive.  If the
                              current number is positive and completely
                              fills the numeric window display (16 
                              characters long), the sign will not be
                              changed since the addition of the '-' would
                              overflow the numeric window.  To change the
                              sign of an exponent, 'E' or '-' must be the
                              last character shown in the numeric window.
                              Otherwise, the sign of the numeric part
                              will be changed.  To change the sign of an
                              existing exponent, delete the exponent up
                              to the 'E' or '-', change the sign, then
                              retype the exponent. 

        BACKSPC    BACKSPC    Deletes the last part of a number the user
        DELETE     DELETE     has entered.  Hitting the BACKSPACE key or
                              DELETE key for a result returned by ZYAC
                              will clear the numeric window and leave a
                              0 in the display.  For example, the user
                              could enter 23.5, hit the BACKSPACE or
                              DELETE twice and type 5 to change the
                              number to 235.  However, if the user
                              entered 200 + 35 =, ZYAC would return 235.
                              Hitting a BACKSPACE or DELETE here would
                              result in 0 being displayed.

        |          |          Reciprocal operator (1/x).  Takes the
                              number in the numeric window and divides
                              it into 1.  Returns the result to the
                              numeric window.





                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 9


        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        !          !          Factorial operator.  Returns the factorial
                              of the number in the numeric window.
                              Factorial is only valid for positive
                              integers.  Entering a negative number for
                              factorial will result in a 0.  If a
                              positive real number is entered, the
                              fractional part will be dropped and the
                              factorial operation will be applied to the
                              remaining integer part.  170! is about the
                              largest factorial that can be computed
                              before the values begin to overflow.  If
                              you attempt to find the factorial of a
                              number larger than 170, "TOO BIG" will be
                              displayed in the numeric window.

        >          >          Square operator.  Returns the square of the
                              number displayed in the numeric window.

        <          <          Square root operator.  Returns the square
                              root of the number displayed in the
                              numeric window.  If you try to find the
                              square root of a negative number, the
                              message "NEGATIVE SQRT" will be displayed
                              in the numeric window.

        ^          ^          Power operator (x raised to the y power).
                              Returns 0 if both x and y are 0 or if y
                              is negative and is not an integer.  Will
                              return 1E300 if the result would overflow. 

        L          L          Log base 10 operator.  Returns the
                              logarithm to the base 10 of the number
                              displayed in the numeric window.  Returns 0
                              if the number is 0 or negative.

        CTRL-L     CTRL-L     Natural log operator.  Returns the natural
                              logarithm for the number displayed in the
                              numeric window.  Returns 0 if the number is
                              0 or negative.

        R          R          Toggles between radians and degrees.
                              Allows you to choose radians or degrees
                              for trigonometric operations.

        C          C          Cosine operator.  Returns the cosine of
                              the number displayed in the numeric window.

        CTRL-C     CTRL-C     Arc cosine operator.  Returns the inverse
                              cosine of the number shown in the numeric
                              window. 



                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 10


        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        S          S          Sine operator.  Returns the sine of the
                              number displayed in the numeric window.

        CTRL-S     CTRL-S     Arc sine operator.  Returns the inverse
                              sine of the number shown in the numeric
                              window.

        T          T          Tangent operator.  Returns the tangent of
                              the number displayed in the numeric window.

        CTRL-T     CTRL-T     Arc tangent operator.  Returns the inverse
                              tangent of the number shown in the numeric
                              window.

        O          O          Hyperbolic cosine operator.  Returns the
                              hyperbolic cosine of the number shown in
                              the numeric window.

        I          I          Hyperbolic sine operator.  Returns the
                              hyperbolic sine of the number shown in
                              the numeric window.

        U          U          Hyperbolic tangent operator.  Returns
                              the hyperbolic tangent of the number
                              shown in the numeric window.

        CTRL-E     CTRL-E     Exponential  operator.  Returns the
                              exponential function of the number
                              displayed in the numeric window, i.e., e
                              raised to the power of the number being
                              displayed.

        P          P          Pi.  Returns the value of pi out to 8
                              decimal places (3.14159265).

        K          K          Conversions operator.  Displays the
                              conversions menu and allows you to
                              convert between certain metric and
                              English measurements.  (Additional
                              information about this function is
                              provided elsewhere in this manual.

        Z          Z          Summation operator.  This operator places
                              ZYAC into statistics mode.  This function
                              allows you to enter and sum data for
                              calculation of mean, variance, and 
                              standard deviation.  Pressing any non-
                              statistics operator key will remove ZYAC
                              from statistics mode.  Also, ZYAC will
                              only sum up to a maximum of 100 data
                              points (values).


                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 11


        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        M          M          Mean operator.  Returns the mean of the
                              data summed by the summation operator.

        D          D          Population standard deviation operator.
                              Returns the population standard deviation
                              of the data summed by the summation
                              operator.  Uses n weighting (for popula-
                              tion data), where n is the number of
                              data points summed.

        CTRL-D     CTRL-D     Sample standard deviation operator.
                              Returns the sample standard deviation of
                              the data summed by the summation operator.
                              Uses n - 1 weighting (for sample data),
                              where n is the number of data points
                              summed.

        V          V          Population variance operator.  Returns the
                              population variance of the data summed by
                              the summation operator.  Uses n weighting
                              (for population data), where n is the 
                              number of data points summed.

        CTRL-V     CTRL-V     Sample variance operator.  Returns the
                              sample variance of the data summed by the
                              summation operator.  Uses n - 1 weighting
                              (for sample data), where n is the number
                              of data points summed.

        NOTE:   A  population  is usually a large set of items,  while  a 
        sample  is a smaller portion selected from the  population.   The 
        difference  between sample and population calculations  is  small 
        for more than 30 data points (values).

        F0         F10        Clear all operator (CLR).  Function key F0
                              on the Z100 and F10 on the IBM-PC clears
                              the numeric display to 0, and also clears
                              the two memory registers (windows).

        F1         F1         Function 1 operator.  Function key F1
                              performs the operation currently defined
                              for F1.

        <SH>F1     <SH>F1     Define function 1 operator.  Shift
                              function key F1 allows the user to program
                              an operation for function key F1.  Use
                              CTRL-X to end the definition.

        F2         F2         Function 2 operator.  Function key F2
                              performs the operation currently defined
                              for F2.


                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 12


        Z100       IBM-PC
        KEY        KEY        FUNCTION
        ====       ======     ========

        <SH>F2     <SH>F2     Define function 2 operator.  Shift
                              function key F2 allows the user to program
                              an operation for function key F2.  Use
                              CTRL-X to end the definition.

        F3         F3         Store memory 1 operator.  Function key F3
                              stores the current number displayed in the
                              numeric window into memory register 1.
                              The stored value is shown in the memory 1
                              window.

        <SH>F3     <SH>F3     Recall memory 1 operator.  Shift function
                              key F3 recalls the value stored in memory
                              register 1.  The returned number is then
                              displayed in the numeric window.

        F4         F4         Store memory 2 operator.  Function key F4
                              stores the current number displayed in the
                              numeric window into memory register 2.
                              The stored value is shown in the memory 2
                              window.

        <SH>F4     <SH>F4     Recall memory 2 operator.  Shift function
                              key F4 recalls the value stored in memory
                              register 2.  The returned number is then
                              displayed in the numeric window.

        F5         F5         Clear numeric window only operator (CE).
                              Function key F5 clears the numeric window
                              only, and sets it to 0.  The memory
                              registers are left unchanged.

        ?          ?          Next menu operator.  Displays the next
                              menu in the menu window.

        HELP       H          Help operator.  Displays a brief message
                              about ZYAC in the menu window.  (Really
                              not much help, but it does refer the user
                              to this document.)  Use the HELP key on
                              the Z100 or the H key on an IBM-PC
                              for help.

        CTRL-X     CTRL-X     Exit operator.  Exits the ZYAC program.
                              If values are stored in the memory
                              registers, or functions defined for F1
                              and F2, ZYAC will ask if you want to save
                              the memory registers and functions in a
                              file before exiting.





                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 13


        Conversions

             The  K  key is the conversions operator.   It allows you  to 
        perform   conversions   between  certain   metric   and   English 
        measurements.   After  pressing K,  the conversions menu will  be 
        displayed.   At this point,  you may press the appropriate letter 
        to convert your data (the conversion affects the current value in 
        the  numeric window).   Listed below are the current  conversions 
        built  into  ZYAC.   Please note that  pressing  CONTROL-letter 
        performs the opposite conversion.  For example, A converts inches 
        to centimeters.  CONTROL-A converts centimeters to inches.

        LETTER     CONVERSION
        ======     ==========

        A          Inches to Centimeters
        B          Feet to Meters
        C          Yards to Meters
        D          Miles to Kilometers
        E          Ounces to Grams
        F          Pounds to Kilograms
        G          Gallons (US) to Liters
        H          Gallons (Imperial) to Liters
        I          Fluid Ounces to Milliliters
        J          Square Inches to Square Centimeters
        K          Square Feet to Square Meters
        L          Fahrenheit to Celsius






























                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 14


        Defining Functions

             ZYAC  allows  you to program functions for function keys  F1 
        and  F2.   You do this by typing shift F1 or shift F2.   At  that 
        point,  you  may  enter  ZYAC commands as  if  you  were  working 
        interactively.   The  key strokes will be displayed at the bottom 
        of  the screen.   When you have finished entering  the  function, 
        type  CTRL-X.   The  function  will  then  be  displayed  in  the 
        appropriate function window.

             Functions  are  only allowed to be 68 characters long  (this 
        includes  the space between operators and operands  automatically 
        supplied by ZYAC).   If you wish the value in the numeric  window 
        to  be  used in the function,  type 'N' at the appropriate  place 
        during the function definition.   'NW' will be displayed  (stands 
        for numeric window).   For example,  to define function F1 to add 
        100  to the numeric display and then divide by 7 you would  enter 
        shift F1, followed by 'N', '+', '10', '/', '7', '=', CTRL-X.  The 
        F1 window would display 'NW + 10 / 7 ='.  Then, each time you hit 
        the  F1 key,  the defined function would be applied on the  value 
        currently  in the numeric window.   By the way,  if your  defined 
        function  is too long for its display window,  only as much of it 
        as possible will be shown. 

             The  BACKSPACE and DELETE keys may be used  during  function 
        definitions  to  make  corrections before you  type  the  CTRL-X.  
        These  keys will either delete an entire operator or one digit at 
        a  time,  depending on the last entry in the definition  (whether 
        it's  a number or an operator).   To delete a  defined  function, 
        simply  begin  the  function definition and type  CTRL-X  (you're 
        defining nothing this way).

             One  final  note on functions,  they cannot  perform  memory 
        stores or other function calls.   They can,  however,  do  memory 
        recalls.






















                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 15


        Initialization Files

             If   you  have  a  specific  function  or  number  you   use 
        frequently,  you  can store it in an initialization file.   Then, 
        ZYAC will be able to initialize its memory registers and function 
        keys  (F1 and F2) to the information in that file the  next  time 
        you use ZYAC.

             To  create such a file,  simply use an editor like  WordStar 
        and create a file with a '.ZYC' extension.   To initialize memory 
        1 enter 'M1:  ' in the file, followed by the number to initialize 
        memory  1  by.   For example,  to initialize memory 1 to  2.88976 
        enter the following line in the file:

             M1: 2.88976

        Memory  2  may be initialized the same way,  except  use  'M2:  ' 
        instead of 'M1: '. 

             Defining function keys F1 and F2 is similar.   Start with  a 
        line containing 'F1:  ' or 'F2: '.  Then type in a function using 
        numbers and ZYAC commands.  When entering commands in a file this 
        way,  you  need  to  type in the corresponding  acronym  for  the 
        command.  These are listed below.

        OPERATION          ACRONYM
        =========          =======

        addition              +
        subtraction           -
        multiplication        *
        division              /
        sign change           ~
        equals                =
        reciprocal            |
        factorial             !
        percent               %
        square                >
        square root           <
        power                 ^
        pi                   PI
        numeric window       NW
        natural log          LN
        exponential func.    XP
        log base 10         LOG
        cosine              COS
        sine                SIN
        tangent             TAN
        inverse cosine     ACOS
        inverse sine       ASIN
        inverse tangent    ATAN






                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 16


        OPERATION          ACRONYM
        =========          =======

        hyperbolic cosine  HCOS
        hyperbolic sine    HSIN
        hyperbolic tangent HTAN
        recall memory 1     1RC
        recall memory 2     2RC

             For example, to define function key F1 to cube the number in 
        the numeric display,  divide the result by pi,  and then take the 
        natural  log,  you  would type a line like the following  in  the 
        file:

             F1: NW ^ 3 / PI = LN

        Notice  that  you must separate the numbers and operators  by  at 
        least  one  space.   If you want a certain number in  a  function 
        definition to be negative,  you must use the '~' operator.  A '-' 
        by itself will be taken as a subtraction operation.  For example, 
        to  multiply  -23.109 by the numeric window value,  the  function 
        defintion would look like

             F1:  NW * 23.109 ~ =

        The '~' will change the sign of 23.109 before the multiplication.  
        The  one  place where a negative sign is valid is  in  scientific 
        notatation.  You can enter a number like 2.88741E-5.  

             Once you have created your initialization file,  you can use 
        it  with ZYAC.   Typing ZYAC followed by a space and the filename 
        causes ZYAC to initialize the memory registers and function  keys 
        to the values/definitions in that file.   For example, to use the 
        information   supplied  with  the  sample  initialization   file, 
        SAMP.ZYC,  type ZYAC SAMP at  the DOS prompt.   You can type  out 
        the  SAMP.ZYC file to see an example of an  initialization  file.  

             If  you  have saved values in memory registers  and/or  have 
        defined functions F1 or F2 while using ZYAC, you will be asked if 
        you  want to save the memory contents and functions upon  exiting 
        ZYAC.   If  you answer yes,  ZYAC will prompt for a filename  and 
        save the memory values and functions in that file (thus  creating 
        another initialization file for future use).














                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 17


                                 PROGRAM HISTORY

        8 Sep 1985  - Version 1.0.   Initial release of ZYAC.   This 
                      version for the Z100 only.

        12 Sep 1985 - Version 1.1.   Corrected bug in factorial function.  
                      Earlier version would attempt to find factorial of
                      any number, even those larger than 170.

        17 Feb 1987 - Version 1.2.  Version for IBM-PC's created.  Writes
                      to the screen for the Z100 version now faster under
                      MS-DOS 2.x.

        12 Mar 1988 - Version 2.0.  Converted program to Datalight 
                      Optimum-C.  Added statistical operators, con-
                      versions, hyperbolic functions, and use of
                      degrees or radians for trigonometric functions.
                      Added option to use color.  Added option in IBM-PC
                      version for fast video I/O.  Program now available
                      under the Shareware concept.

                I  am  open to any comments or suggestions you  may  have 
        about ZYAC.  Please let me know what you think of the program.  I 
        am considering working on a memory resident version of ZYAC.  Any 
        interest for such a beast?
































                       Copyright (C) 1988 by Gregory D. Elder
        ZYAC Version 2.0 Users Guide                               Page 18


                                REGISTRATION FORM

             To  register your copy of ZYAC,  complete this form and mail 
        it with a check for $15.00 to the author:

                                Gregory D. Elder
                                   Qtrs 4301-A
                                 USAFA, CO 80840


        NAME_____________________________________________________

        STREET___________________________________________________

        CITY________________________  STATE_______  ZIP__________

        COMPUTER MODEL___________________________________________

        COLOR MONITOR (YES/NO)________  AMOUNT OF MEMORY_________

        OPERATING SYSTEM AND VERSION_____________________________

        HOW DID YOU FIND OUT ABOUT ZYAC?________________________________

        ________________________________________________________________

        COMMENTS/SUGGESTIONS/BUG REPORTS:_______________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

                Thank  you  for  registering your copy  of  ZYAC.   As  a 
        registered  user,  you are encouraging me to  continue  improving 
        ZYAC and to develop additional software.  You will be notified of 
        any updates or software I develop.


             







                       Copyright (C) 1988 by Gregory D. Elder

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1509

     Volume in drive A has no label
     Directory of A:\

    FILE1509 TXT      1463   8-02-89   3:14p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   8-02-89   3:18p
    INFO     TXT      1024  10-24-88  11:24p
    MANUAL   BAT       150   8-02-89   3:19p
    PAGE     COM       325   1-06-87   4:21p
    README   DOC      1664   7-18-88   2:16p
    SAMP     ZYC       128   9-08-85   8:11a
    VIEW     BAT        40   8-02-89   3:19p
    ZYAC     DOC     44544   7-18-88   1:35p
    ZYACIBM  COM     44220   3-12-88  10:46p
    ZYACZ100 COM     43986   3-12-88  10:58p
           12 file(s)     138276 bytes
                           18944 bytes free
