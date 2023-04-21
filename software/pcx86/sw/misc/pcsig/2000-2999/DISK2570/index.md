---
layout: page
title: "PC-SIG Diskette Library (Disk #2570)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2570/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2570"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CALC.BAS

{% raw %}
```bas
1000 ' calc.bas - simple terminate and stay resident calculator
1010 '
1020 ' press esc to terminate and stay resident
1030 ' press control-shift-b from dos to resume calculator 
1040 ' press control-c to terminate calculator
1050 '
1060 on error goto 2660
1070 first_suspend = 1
1080 csroff
1090 foreground lookup ("white")
1100 background lookup ("black")
1110 intensity lookup ("high")
1120 wintop 0
1130 winleft 59
1140 winbottom 7
1150 winright 75
1160 border
1170 cls
1180 '
1190 ' the following line sets up a window for debug messages
1200 ' that can be displayed using print:
1210 '
1220 ' wintop 10 : winleft 0: winbottom 20 : winright 79 : border : cls
1230 '
1240 display 2, 60, copy (chr (196), 15)
1250 display 3, 60, " 7  8  9"
1260 display 4, 60, " 4  5  6"
1270 display 5, 60, " 1  2  3"
1280 display 6, 60, " 0  .  c"
1290 foreground lookup ("red")
1300 display 3, 70, "+  ^"
1310 display 4, 70, "-  ("
1320 display 5, 70, "*  )"
1330 display 6, 70, "/  ="
1340 this_key = ""
1350 expr = ""
1360 '
1370 ' main command loop, get a key-code and convert to character
1380 '
1390 gosub 2540 ' display expr
1400 last_key = this_key
1410 this_key = chr (getkey() mod 256)
1420 '
1430 ' if key is control-c then re-initialize and exit
1440 '
1450 if this_key = chr (3) ' control-c
1460    then
1470       init
1480       cls
1490       end
1500 end if
1510 '
1520 ' if key is escape then suspend to dos or application
1530 '
1540 if this_key = chr (27) ' escape
1550    then
1560       if first_suspend
1570          then
1580             first_suspend = 0
1590             blank
1600       end if
1610       suspend
1620       goto 1080
1630 end if
1640 ' 
1650 ' if key is backspace erase last character entered
1660 '
1670 if this_key = chr (8) ' backspace
1680    then
1690       expr_len = len (expr)
1700       if expr_len > 0
1710          then
1720             expr = left (expr, expr_len-1)
1730          else
1740             beep
1750    end if
1760    goto 1360
1770 end if
1780 '
1790 ' if key is a digit or decimal point then append to expression
1800 '
1810 if this_key >= "0" and this_key <= "9" or this_key = "."
1820    then
1830       if last_key = "=" or last_key = chr (13)
1840          then
1850             expr = this_key
1860          else
1870             expr = cat (expr, this_key)
1880       end if
1890       goto 1360
1900 end if
1910 '
1920 ' if input was an operator then append it to execute string
1930 '
1940 if instr ("+-*/^", this_key)
1950    then
1960	   '
1970       ' handle adjacent operators
1980       '
1990       if instr ("+-*/^", right (expr, 1))
2000          then
2010             expr = left (expr, len (expr) - 1)
2020       end if
2030       expr = cat (expr, this_key)
2040       goto 1360
2050 end if
2060 '
2070 ' if input was an equal sign then evaluate expression
2080 '
2090 if this_key = "="	or this_key = chr (13)
2100    then
2110       if expr <> ""
2120          then
2130             execute "expr = " + expr
2140       end if
2150       goto 1360
2160 end if
2170 '
2180 ' if input was the clear key then re-initialize everything
2190 '
2200 if this_key = "c"
2210    then
2220       expr = ""
2230       goto 1360
2240 end if
2250 '
2260 ' if input is a left paren and last char in execute
2270 ' string was an operator then append it to execute string
2280 '
2290 if this_key = "("
2300    then
2310	   if instr ("+-*/^(", right (expr, 1)) 
2320          then
2330             expr = expr + this_key
2340       end if
2350       goto 1360
2360 end if
2370 '
2380 ' if input is a right paren and last char in execute
2390 ' string was NOT an operator then append it to execute string
2400 '
2410 if this_key = ")"
2420    then
2430       if not instr ("+-*/^(", right (expr, 1)) 
2440          then
2450             expr = expr + this_key
2460       end if
2470       goto 1360
2480 end if
2490 '
2500 ' if key was not valid signal error and get next keystroke
2510 '
2520 beep
2530 goto 1360
2540 '
2550 ' subroutine to display expr 
2560 '
2570 if expr = ""
2580    then
2590       display_expr = 0
2600    else
2610       display_expr = right (expr, 14)
2620 end if
2630 display 1, 60, space (15)
2640 display 1, 74 - len (display_expr), display_expr
2650 return
2660 '
2670 ' error handler
2680 '
2690 expr = "Error"
2700 gosub 2540 ' display expr
2710 beep
2720 resume 1350
```
{% endraw %}

## CHANGES.DOC

{% raw %}
```

The following changes were made to TsrBasic, Version 1.0,
to arrive at TsrBasic, Version 2.0. See the documentation
for more information.


1) Graphics capabilities were added for CGA, EGA, VGA and
Hercules compatible graphics adapters. They use a dynamic
link library to conserve DOS memory when graphics functions
are not in use.

2) A new parameter was added to the SUSPEND statement to
recall the interpreter after a period of keyboard inactivity.
This can be used to implement screen savers in TsrBasic.

3) The text window operations that were grouped under the
SCREEN statement were broken out into separate statements and
new capabilities were added. This improves performance and makes
them easier to use. See the Text Windows section of the
documentation for more information.

4) The algorithm for drawing borders was changed so that
the border is now considered part of the text window and is
drawn inside the defined boundaries. As a result, it is now
saved and restored with the savescreen and restorescreen
statements.

5) The internal table search algorithm was improved for
faster compile times.

6) The SHIFT and SORT statements were added to shift or sort
one dimensional arrays.

7) Error handling was improved and several new error messages
were added. TsrBasic now issues a more informative error message
when it detects the use of a reserved word (keyword) as a variable.



The following bugs were fixed for TsrBasic, version 2:


1) Undefined line number errors now refer to the correct
source statement.

2) The renum command handles comma as well as space in 
the line number, increment specification.

3) An error is raised if a factor is missing in an
arithmetic expression.

4) The print statement positions the cursor correctly.

5) Error handler status is handled properly when an error
handler executes an END instead of a RESUME.

6) Executing a RUN command after a CLEAR command now works.

7) Integer conversion for addition and subtraction of medium
sized integers (larger than 65535) now works properly.

8) Floating point exceptions such as divide by zero now raise
a TsrBasic error.

9) Better error messages are printed if a multiline IF
statement is missing some of its keywords.

10) For loops with unique control variables that are nested
via subroutine calls now work.

11) Factors to negative powers (such as 2^-2) are supported.

12) Chained programs now make better use of the symbol
table by reusing space left by non-COMMON symbols.

13) Chained programs that had the "" string literal in common
no longer report an uninitialized variable.

14) The last immediate mode statement in files loaded
from the command line or with the load statement is
executed only once.

15) The "Cannot unload TSR" error is raised on QUIT if another
program has hooked into interrupts handled by TsrBasic.

16) The internal handling of symbol table and data area
overflows has been improved.


```
{% endraw %}

## CLOCK.BAS

{% raw %}
```bas
100 print "Press ctrl-shift-b to terminate clock."
110 suspend 0, 0x30, 0x06, 18, 0, timer
120 if not timer then cls : end
130 display 0, 72, time()
140 goto 110
```
{% endraw %}

## FILE2570.TXT

{% raw %}
```
Disk No: 2570                                                           
Disk Title: TsrBasic Interpreter                                        
PC-SIG Version: S2                                                      
                                                                        
Program Title: TsrBasic Interpreter                                     
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
TsrBasic lets you write Terminate and Stay Resident (TSR) programs in   
BASIC. It supports both pop up applications that are recalled with a    
user defined hotkey sequence and background tasks that are recalled     
after a specified period of time has elapsed. The entire interpreter can
be recalled as well, giving you a powerful programmable calculator at   
your fingertips.                                                        
                                                                        
TsrBasic simplifies BASIC programming by relaxing data type checking    
restrictions. This means you do not have to use special suffixes like $ 
and # to specify the type of data a variable will hold. Any variable can
hold any type of data, either textual or numeric. Conversions are       
performed when necessary.                                               
                                                                        
Structured programming is a snap with TsrBasic's IF...THEN...ELSE...END 
IF statement, which supports multiline THEN and ELSE clauses and nested 
IF's. The conventional form of the IF...THEN...ELSE statement is        
supported as well.                                                      
                                                                        
TsrBasic's powerful screen handling functions let you select video      
attributes, define text windows for input and output, and save and      
restore portions of the screen. TsrBasic supports direct video access   
for speed or ROM-BIOS/DOS mode for compatibility with nonstandard video 
adapters.                                                               
                                                                        
TsrBasic lets you execute the contents of a character string so that    
you can evaluate arithmetic expressions on the fly. You can also use    
this feature to construct powerful user defined functions.              
                                                                        
TsrBasic compiles your program into intermediate code and interprets the
intermediate code. This results in fast and efficient program           
execution. You can display the intermediate code if you wish. TsrBasic  
also lets you convert your BASIC program into an executable (.exe) file 
that can be invoked from DOS.                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NOTEPAD.BAS

{% raw %}
```bas
1000 ' NotePad, Version 2.0
1010 '
1020 ' Press esc to terminate and stay resident
1030 ' Press control-shift-b from dos to resume notepad
1040 ' Press end to terminate notepad
1050 '
1060 on error goto 3670
1070 gosub 1150 ' initialize
1080 gosub 1570 ' display banner
1090 gosub 1800	' read file
1100 gosub 2200	' display command window
1110 gosub 2350	' display note window
1120 gosub 2450 ' display note
1130 gosub 2510 ' process command
1140 goto 1130
1150 '
1160 ' subroutine to initialize everything
1170 '
1180 dim notes (100)
1190 pathname = "notepad.dat"
1200 init
1210 cls
1220 csroff
1230 foreground lookup ("white")
1240 background lookup ("blue")
1250 intensity lookup ("high")
1260 '
1270 ' banner window
1280 '
1290 ban_top = 1
1300 ban_left = 1
1310 ban_bottom = 1
1320 ban_right = 40
1330 cnt_col = 23
1340 cnt_len = ban_right - cnt_col 
1350 '
1360 ' command window
1370 '
1380 cmd_top = 5
1390 cmd_left = 1
1400 cmd_bottom = 10
1410 cmd_right = 17
1420 '
1430 ' notepad text window
1440 '
1450 txt_top = 13
1460 txt_left = 0
1470 txt_bottom = 22
1480 txt_right = 78
1490 '
1500 ' message window
1510 '
1520 msg_top = 6
1530 msg_left = 30
1540 msg_bottom = 10
1550 msg_right = 70
1560 return
1570 '
1580 ' subroutine to display banner
1590 '
1600 wintop ban_top-1
1610 winleft ban_left-1
1620 winright ban_right+1
1630 winbottom ban_bottom+1
1640 border
1650 cls
1660 display ban_top, ban_left, "NotePad, Version 1.0, "
1670 return
1680 '
1690 ' subroutine to update record count
1700 '
1710 display ban_top, cnt_col, space (cnt_len)
1720 if rec = 0
1730    then
1740       msg = "Top of NotePad"
1750    else
1760       msg = "Note " + rec + " of " + tot
1770 end if
1780 display ban_top, cnt_col, msg
1790 return
1800 '
1810 ' subroutine to read file
1820 '
1830 rec = 0
1840 tot = 0
1850 temp = ""
1860 notes (0) = ""
1870 if not access (pathname) then return
1880 open #1, "r", pathname
1890 if not eof (1)
1900    then 
1910       line input #1, buf
1920       if buf = ".endnote"
1930          then
1940             tot = tot + 1
1950             notes(tot) = temp
1960             temp = ""
1970          else
1980             if temp = ""
1990                then
2000                   temp = buf
2010                else
2020                   temp = temp + chr(10) + buf
2030             end if
2040       end if   
2050       goto 1890
2060 end if
2070 close #1
2080 rec = tot
2090 return
2100 ' 
2110 ' subroutine to write file
2120 '
2130 open #1, "w", pathname
2140 for i = 1 to tot
2150    print #1, notes(i)
2160    print #1, ".endnote"
2170 next i
2180 close #1
2190 '
2200 ' subroutine to open command window
2210 '
2220 wintop cmd_top-1
2230 winleft cmd_left-1
2240 winbottom cmd_bottom+1
2250 winright cmd_right+1
2260 border
2270 cls
2280 display cmd_top,   cmd_left, "Ins - Insert Note"
2290 display cmd_top+1, cmd_left, "Del - Delete Note"
2300 display cmd_top+2, cmd_left, "End - Exit"
2310 display cmd_top+3, cmd_left, "Esc - Suspend"
2320 display cmd_top+4, cmd_left, chr(0x18) + "   - Move Up"
2330 display cmd_top+5, cmd_left, chr(0x19) + "   - Move Down"
2340 return
2350 '
2360 ' subroutine to open note window
2370 '
2380 wintop txt_top
2390 winleft txt_left
2400 winbottom txt_bottom
2410 winright txt_right
2420 border
2430 cls
2440 return
2450 '
2460 ' subroutine to display note
2470 '
2480 locate 0,0
2490 print notes(rec)
2500 return
2510 ' 
2520 ' subroutine to get and process command keys
2530 '
2540 gosub 1680 ' update record count
2550 row cmd_top
2560 column cmd_left
2570 key = getkey ()
2580 if key = 0x011b then gosub 2660 : return   ' escape
2590 if key = 0x4f00 then gosub 2780 : return   ' end
2600 if key = 0x4800 then gosub 2860 : return	' up
2610 if key = 0x5000 then gosub 2940 : return	' down
2620 if key = 0x5200 then gosub 3200 : return	' insert
2630 if key = 0x5300 then gosub 3550 : return	' delete
2640 beep
2650 return
2660 '
2670 ' subroutine to suspend
2680 '
2690 gosub 2100 ' write file
2700 csron
2710 init
2720 savescreen old_screen
2730 cls
2740 suspend
2750 restorescreen old_screen
2760 csroff
2770 return
2780 '
2790 ' subroutine to terminate
2800 '
2810 gosub 2100 ' write file
2820 csron
2830 init 
2840 cls 
2850 end
2860 '
2870 ' subroutine to move up
2880 '
2890 if rec = 0 then : beep : return
2900 rec = rec - 1
2910 gosub 2350 ' open note window
2920 gosub 2450 ' display note
2930 return
2940 '
2950 ' subroutine to move down
2960 '
2970 if rec >= tot then beep : return
2980 rec = rec + 1
2990 gosub 2350 ' open note window
3000 gosub 2450 ' display note
3010 return
3020 '
3030 ' subroutine to display a message
3040 '
3050 wintop msg_top
3060 winleft msg_left
3070 winbottom msg_bottom
3080 winright msg_right
3090 fore = foreground (lookup ("white"))
3100 back = background (lookup ("red"))
3110 brightness = intensity (lookup ("high"))
3120 border
3130 cls
3140 locate 0, 0
3150 print msg
3160 foreground fore
3170 background back
3180 intensity brightness
3190 return
3200 ' 
3210 ' subroutine to insert a note
3220 '
3230 msg = "Enter note, followed by extra return"
3240 gosub 3020 ' display message
3250 gosub 2350 ' open note window
3260 csron
3270 new_note = ""
3280 line input buf
3290 if buf <> ""
3300    then
3310       if new_note = ""
3320          then
3330             new_note = buf
3340          else
3350             new_note = new_note + chr (10) + buf
3360       end if
3370       goto 3280
3380 end if
3390 if new_note <> ""
3400    then
3410       rec = rec + 1
3420       tot = tot + 1
3430       for i = tot to rec+1 step -1
3440          notes (i) = notes (i-1)
3450       next i
3460       notes (rec) = new_note
3470       msg = "Note added"
3480    else
3490       gosub 2450 ' display note
3500       msg = "Note cancelled" 
3510 end if
3520 gosub 3020 ' display message
3530 csroff
3540 return
3550 '
3560 ' subroutine to delete a note
3570 '
3580 if rec = 0 or tot = 0 then beep : return
3590 tot = tot - 1
3600 for i = rec to tot
3610    notes (i) = notes (i+1)
3620 next i
3630 rec = rec - 1
3640 gosub 2350 ' open note window
3650 gosub 2450 ' display note
3660 return
3670 '
3680 ' error handler
3690 ' 
3700 init
3710 cls
3720 print "ERROR: "; erm(); " at "; erl()
3730 end
```
{% endraw %}

## README.DOC

{% raw %}
```


TsrBasic, a Terminate and Stay Resident BASIC Interpreter
Version 2.0, Copyright 1990-1991 Anthony F. Stuart


1.0   Files

The TsrBasic package consists of the following files:

  CALC.BAS     - a popup demo program
  CHANGES.DOC  - new features for version 2
  CLOCK.BAS    - an interval timer demo program
  GRAPH.DLL    - graphics dynamic link library
  MSHERC.COM   - hercules graphics support
  NOTEPAD.BAS  - another popup demo program		
  README.DOC   - this file
  SAVER.BAS    - a keyboard inactivity demo program
  TSRBASIC.DOC - the documentation
  TSRBASIC.EXE - the interpreter
  WEBB.BAS     - a graphics demo program


2.0   Running TsrBasic

Make sure TSRBASIC.EXE and GRAPH.DLL are in your current
directory or in a directory included in your DOS PATH.

If you have a Hercules compatible graphics adapter and 
would like to use TsrBasic graphics then run MSHERC.COM
before you start TsrBasic.

To start TsrBasic, just type TSRBASIC at the DOS prompt.
See the documentation for more information on command line
options.

To suspend from TsrBasic back to DOS, enter the SUSPEND
statement at the TsrBasic prompt. This makes TsrBasic
terminate and stay resident. To return to TsrBasic from
DOS or any other application, type control-shift-b.

To unload TsrBasic from memory, enter the QUIT command.


3.0   Demo Programs

To run a demo program, type the following, starting at
the DOS prompt:

  tsrbasic
  load notepad
  run

or

  tsrbasic
  load clock
  run

Look at the source to the demo programs for more information
on how they operate and the commands they can accept. Note that 
both CALC.BAS and NOTEPAD.BAS are popup programs that can be put
into the background by pressing the ESCAPE key and recalled
by pressing control-shift-b.

To terminate a TsrBasic program type control-c. To terminate
the interpreter, type QUIT.


4.0  Registration

TsrBasic is a shareware product. Registration costs $20.00. In
addition to supporting the development of TsrBasic and other quality
programs, this fee entitles you to a copy of the source to TsrBasic.
The source consists of about 10,000 lines of Microsoft C 5.1 and about
160 lines of Microsoft Assembler 5.1. It is available on 360 kb diskette.

Registration is easy. Just send a note saying that you wish to
register TsrBasic, Version 2.0, along with a check or money order
for $20.00 to:
     
  Anthony F. Stuart
  21042 Thoreau Court
  Sterling, VA 22170

The TsrBasic package, consisting of executable programs, demo
programs, and documentation may be copied and distributed, either
without charge or for a nominal fee, provided it is distributed
intact and without modification.

The source to TsrBasic may not be distributed in any form without
written permission from the author. 


5.0   Disclaimer

TsrBasic is distributed as-is with no warranties, for use at
your own risk. Every effort has been made to produce a robust
and reliable program, but there are undoubtedly some bugs left in
it. If you find a bug, try to reduce it to its simplest case and
send me a description. I would also like to hear general comments
or suggestions for new features.






```
{% endraw %}

## SAVER.BAS

{% raw %}
```bas
100 ' Screen Saver Demo Program, Version 1.0
110 ' 
120 ' The following line sets the saver delay interval,
130 ' in timer ticks, which are 18ths of a second. It
140 ' is set to 10 seconds for demo purposes.
150 '
160 saver_delay = 10 * 18
170 '
180 print "Press ctrl-shift-b to terminate saver."
190 '
200 ' The following statement does the actual terminate
210 ' and stay resident part. The parameters set up this
220 ' program to be recalled if a control-shift-b hotkey
230 ' sequence is entered or saver_delay ticks of keyboard
240 ' inactivity occur. 
250 '
260 suspend 0, 0x30, 0x06, 0, saver_delay, timer
270 '
280 ' The timer variable tells us why the suspend
290 ' statement returned. If it returned because the
300 ' hotkey sequence was entered then we terminate.
310 '
320 if not timer then cls : end
330 ' 
340 ' The following code is executed when the screen saver
350 ' kicks in. In this demo program it just saves the screen,
360 ' clears it and then waits for a keystroke. It could do
370 ' something much more elaborate, like the webb.bas
380 ' graphics display.
390 ' 
400 init
410 savescreen buf
420 blank
430 csroff
440 if inkey() = 0 then goto 440
450 restorescreen buf
460 goto 250
```
{% endraw %}

## TSRBASIC.DOC

{% raw %}
```





          TsrBasic, a Terminate and Stay Resident BASIC Interpreter
          Version 2.0, Copyright 1990-1991 Anthony F. Stuart


          1.   Introduction

          TsrBasic lets you write Terminate and Stay Resident (TSR)
          programs in BASIC. It supports:

               1) Pop up applications that are recalled with a
               user defined hotkey sequence.

               2) Background tasks that are recalled after a
               specified period of time has elapsed.

               3) Screen savers that are recalled after a specified
               period of keyboard inactivity.

          The entire interpreter can be recalled as well, giving you a
          powerful programmable calculator at your fingertips.

          TsrBasic simplifies BASIC programming by relaxing data type
          checking restrictions. This means you do not have to use special
          suffixes like $ and # to specify the type of data a variable will
          hold. Any variable can hold any type of data, either textual or
          numeric. Conversions are performed when necessary.

          Structured programming is a snap with TsrBasic's IF/THEN/ELSE/
          END IF statement, which supports multiline THEN and ELSE clauses
          and nested IF's. The conventional form of the IF/THEN/ELSE
          statement is supported as well.

          TsrBasic's powerful screen handling functions let you select
          video attributes, define text windows for input and output, and
          save and restore portions of the screen. TsrBasic supports direct
          video access for speed or ROM-BIOS/DOS mode for compatibility
          with nonstandard video adapters.

          TsrBasic lets you execute the contents of a character string so
          that you can evaluate arithmetic expressions on the fly. You can
          also use this feature to construct powerful user defined
          functions.

          TsrBasic compiles your program into intermediate code and
          interprets the intermediate code. This results in fast and
          efficient program execution. You can display the intermediate
          code if you wish. TsrBasic also lets you convert your BASIC
          program into an executable (.exe) file that can be invoked from
          DOS.

          Version 2.0 of TsrBasic features even better video support,
          including graphics, as well as many new and improved functions


          TsrBasic Reference Manual                                  Page 1










          and statements. If you are familiar with TsrBasic, version 1.0,
          see the file named changes.doc on the distribution disk for more
          information on the new features and bug fixes for version 2.0.


          2.   About this Document...

          The remainder of this document provides you with the information
          you need to know to take advantage of the special features of
          TsrBasic. It is intended for people who have some experience with
          the BASIC programming language. If you do not have any experience
          with BASIC, you may wish to consult a more detailed book on
          programming in BASIC before reading this document.


          3.   Variables and Arrays

          TsrBasic variables consist of a letter followed by zero or more
          letters, digits, underscores, periods, dollar signs, number
          signs, percent signs or exclamation marks. Variable names are
          case sensitive, e.g. LastName and lastname are two separate
          variables.

          Arrays must be declared using the DIM statement before they are
          referenced. Arrays may have an arbitrary number of dimensions.
          The extent of each dimension is from zero to the value(s)
          specified in the DIM statement.

          The TsrBasic SORT and SHIFT statements make working with arrays
          easier and more efficient. The SORT statement sorts a one
          dimensional array into ascending or descending order. The SHIFT
          statement shifts the elements of an array up or down one or more
          positions.

          Arrays and variables must be initialized before they are used,
          i.e. a value must be stored in the variable or array element
          before it is read. Failure to do so will generate an
          uninitialized variable error message. Note that PARSE,
          SCREENSAVE, SCREENRESTORE and SUSPEND do not support storing into
          an array.


          4.   Constants

          Numeric constants may be written using any of the following
          formats:









          Page 2                                  TsrBasic Reference Manual











               Format         Example
               ------         -------

               integer        42
               decimal        3.14
               exponential    314e-2
               hexadecimal    0x1b
               octal          033

          TsrBasic boolean logical operations use zero for false and
          nonzero (usually 1) for true.

          String constants are written as sequences of characters enclosed
          by double quotes. The closing double quote is required. A double
          quote may be included in a character string by concatenating the
          double quote character, chr(34), to it.


          5.   Operators

          TsrBasic supports the standard set of BASIC operators, plus some
          operators for doing bitwise operations on 16 bit quantities. The
          following list of operators is organized from lowest precedence
          to highest precedence. Operators of the same precedence are
          evaluated from left to right.

               Operator       Precedence     Description

               and            1              logical and
               or             1              logical or

               =              2              equal
               <>             2              not equal
               <              2              less than
               <=             2              less than or equal
               >              2              greater than
               >=             2              greater than or equal

               -              3              subtract
               +              3              add (or concatenate
                                                  if strings)

               *              4              multiply
               /              4              divide
               mod            4              modulo
               \              4              integer divide

               |              5              bitwise or     (16 bits)
               &              5              bitwise and    (16 bits)
               `              5              bitwise xor    (16 bits)




          TsrBasic Reference Manual                                  Page 3











               ~              6              bitwise negate (16 bits)
               -              6              arithmetic negate
               not            6              logical negate

               ^              7              power

          The plus operator (+) performs addition if both operands are
          numeric or concatenation if either operand is a string. This
          means that you cannot use the plus operator to concatenate two
          numbers. Use the CAT function for this purpose.


          6.   Editor and Environment

          TsrBasic provides a simple interactive command mode that allows
          you to enter and execute statements and commands. Program
          statements are entered with line numbers, which must be in the
          range 1-32767. Commands and immediate mode statements are entered
          without line numbers. The backspace key can be used to delete the
          last character entered. The escape key can be used to delete the
          entire line.

          Note: Type control-c to terminate a runaway TsrBasic program.

          For more complex editing needs, the TsrBasic EDIT command can be
          used to invoke an editor of your choice. The syntax of the EDIT
          command is as follows:

               edit [line-number-spec]

          The EDIT command lets you use your favorite DOS editor to edit
          the current program. Here's how it works:

          TsrBasic writes the current file, or the part specified by
          line-number-spec to a temporary file. It then invokes the editor
          specified by the EDITOR environment variable on the temporary
          file. After you exit the editor, TsrBasic loads (if no
          line-number-spec was used) or merges (if a line-number-spec was
          used) the temporary file. See your DOS reference manual for more
          information on environment variables.

          Because DOS is not reentrant, the EDIT command will not work when
          you have recalled a suspended TsrBasic from the DOS shell. In
          this case it will return a "DOS is busy" error. You can, however,
          use the EDIT command when you have recalled TsrBasic from most
          other applications, provided there is sufficient memory.

          Note that no default editor is supplied with TsrBasic.






          Page 4                                  TsrBasic Reference Manual











          7.   Suspend Statement

          The SUSPEND statement provides access to TsrBasic's terminate and
          stay resident capabilities. Executing the SUSPEND statement will
          cause TsrBasic to return to the environment from which it was
          invoked. TsrBasic can be recalled by hotkey sequence, timer
          expiration, or a period of keyboard inactivity, depending on
          parameters specified in the SUSPEND statement. After recall,
          TsrBasic executes the statement following the SUSPEND statement,
          if one exists, or returns to command level.

          The syntax for SUSPEND is:

          suspend screen, key-code, key-flags, interval, inactivity, status

          All parameters are optional. Parameters to the right of the one
          you wish to specify may be omitted. The parameters have the
          following functions and defaults:

               screen - boolean, if true (1) save the contents of the
               screen when the hotkey sequence is entered or the timer
               interval expires so that the screen may be restored by
               the next SUSPEND statement. The default is true.

               key-code - keyboard scan code that, when combined with
               the key-flags parameter, will recall the interpreter.
               This key-code should be selected from the list of
               keyboard scan codes in Appendix D. The default is 0x30
               (the b key).

               key-flags - keyboard flags for control, shift and alt
               keys that, when combined with the key-code parameter,
               will recall the interpreter. Possible values for the
               keyboard flags are:

                    0x80 = insert on
                    0x40 = caps lock on
                    0x20 = num lock on
                    0x10 = scroll lock on
                    0x08 = alt key down
                    0x04 = control key down
                    0x02 = left shift down
                    0x01 = right shift down

               These flags may be OR'd together, i.e. 0x02 | 0x04
               represents shift+control, so that shift and control and
               the key-code specified above must be held down 
               simultaneously to recall the interpreter. The default 
               is 0x06 (shift+control).

               interval - amount of time, in clock ticks, to wait 
               before recalling the interpreter. This is used for 


          TsrBasic Reference Manual                                  Page 5










               background tasks. Since there are approximately 18 
               clock ticks per second, multiply the number of seconds
               you want to wait by 18 to get the interval. A value of
               0 disables the interval timer and the interpreter is 
               recalled using the hotkey sequence (or keyboard timer,
               if specified). The default is zero (disabled).

               inactivity - amount of time, in clock ticks, to wait
               after last keystroke is entered before recalling the 
               interpreter. This is used for screen savers. The 
               default is zero (disabled).

               status - a variable which is used to hold an integer
               value returned by SUSPEND. This variable is set to 0 
               if the program was recalled by the hotkey sequence, 1 
               if recalled by the interval timer and 2 if recalled by 
               the keyboard inactivity timer.

          Note: the combined defaults for SUSPEND are:

               suspend 1, 0x30, 0x06, 0, 0

          So, if you enter SUSPEND without options, the interpreter will
          suspend and you can return to it by entering ctrl-shift-b.

          Here is a simple terminate and stay resident program that
          executes in the background to print the time in the upper right
          hand corner of the screen every second. Note how the status
          argument is used to distinguish between timer and hotkey events:

               100 print "Press ctrl-shift-b to terminate clock."
               110 suspend 0, 0x30, 0x06, 18, 0, timer
               120 if not timer then cls : end
               130 display 0, 72, time()
               140 goto 110


          8.   Lookup Function

          Sometimes it is useful to be able to specify things like colors
          by meaningful names, and other times it is useful to be able to
          specify them by numbers. TsrBasic avoids this conflict by
          providing a LOOKUP function to convert meaningful names to
          numbers.

          The LOOKUP function can be used in instances where names are more
          appropriate, such as:

               100 foreground lookup ("red")
               110 background lookup ("black")
               120 print "The time is "; time()




          Page 6                                  TsrBasic Reference Manual










          and numbers can be used when they are more appropriate:

               100 for i = 1 to 15
               110    foreground i
               120    print "This is color "; i
               130 next i

          The following table summarizes the names that LOOKUP can map to
          numbers.

               black     0         hres2     6         fill      3
               blue      1         text      7         or        0
               green     2         herc      8         and       1
               cyan      3         mres16    13        reset     2
               red       4         hres16    14        set       3
               magenta   5         eres2     15        xor       4
               yellow    6         eres16    16        mda       1
               white     7         vres2     17        cga       2
               low       0         vres16    18        ega       4
               high      8         mres256   19        vga       8
               bw40      0         default   -1        mga       16
               co40      1         direct    0         hgc       32
               bw80      2         bios      1
               co80      3         dos       2             
               mres4     4         graphics  3
               mres0     5         outline   2

          The LOOKUP function provides name to number mapping for the
          following statements:

               background          config              mode
               box                 foreground          put
               circle              get                 type
               color               intensity

          See the detailed description of the statement for more
          information on the LOOKUP mappings that can be used.


          9.   Text Windows

          The following TsrBasic statements and functions provide support
          for TsrBasic text windows:
                                 
               background          foreground          savescreen
               blank               getscreen           scroll
               border              init                type
               column              intensity           winbottom
               csroff              locate              winleft
               csron               page                winright
               csrbottom           refresh             wintop
               csrtop              restorescreen
               display             row


          TsrBasic Reference Manual                                  Page 7












          TsrBasic text windows are created using the WINBOTTOM, WINLEFT,
          WINRIGHT and WINTOP statements to define the edges of the window.
          Subsequent text input/output using the INPUT and PRINT statements
          is directed to the window. The DISPLAY statement is used as an
          alternative to PRINT to display text anywhere on the screen.

          The LOCATE statement positions the cursor relative to the top
          left corner of the current window. Absolute cursor positioning is
          accomplished using the COLUMN and ROW statements.

          The BORDER statement draws a border around the window.

          The FOREGROUND and BACKGROUND statements set the foreground and
          background colors for text output. Colors are represented by
          numbers in the range 0 to 7. The LOOKUP function can be used to
          convert the following color names into color numbers:

               0 - black      4 - red
               1 - blue       5 - magenta
               2 - green      6 - yellow
               3 - cyan       7 - white

          Note that the range of colors that can be displayed depends on
          the video adapter in your PC.

          The INTENSITY statement selects the brightness of text
          characters. Intensity is specified as either 0 or 1. The LOOKUP
          function can be used to convert the following intensity names
          into intensity numbers:

               0 - low
               8 - high

          The contents of the current text window are saved into a TsrBasic
          variable using the SAVESCREEN statement and restored using the
          RESTORESCREEN statement.

          The CSRBOTTOM and CSRTOP statements set the size and shape of the
          cursor. Each character position on the screen is composed of a
          number of video scan lines. The number of scan lines depends on
          the video adapter. The scan lines are numbered top down and range
          from 0 to 6 for cga adapters and from 0 to 13 for other adapters.
          If CSRTOP is set to 0 and CSRBOTTOM is set to the last scan line
          in the cell (say 13 for an ega adapter) then the cursor will
          occupy the whole cell. The CSROFF and CSRON statements can be
          used to turn the cursor off (i.e. hide it) or back on.

          The TYPE statement selects the output mode for text. It is 
          normally set to direct mode (0) for fast output. Other options
          are 1 for BIOS access, 2 for BIOS/DOS access, and 3 for text in
          graphics mode. The default is 0. Use 1 if you have any video


          Page 8                                  TsrBasic Reference Manual










          problems with 0, use 2 if you want to redirect output using DOS
          redirection capability. Use 3 for mixed text and graphics in
          graphics modes (see MODE). The LOOKUP function can be used to map
          the following type names to numbers:

               0 - direct
               1 - bios
               2 - dos
               3 - graphics


          10.  Graphics

          TsrBasic provides graphics support for CGA, EGA, VGA and Hercules
          compatible video adapters. The following statements and functions
          provide support for TsrBasic graphics:
                                 
               box            fill           mode
               circle         get            moveto
               clip           lineto         pixel
               color          mapload        put
               config         mapsave

          The MODE statement selects a graphics mode. The set of graphics
          modes you may use is dependent on the type of video adapter that
          is installed in your PC. The graphics mode is specified as an
          integer number in the range -1 to 19. The LOOKUP function can be
          used to convert a mode name into a mode number. The following
          modes are supported:

          Name      Number    Res       Type      Colors       Adapter

          bw40      0         40x25     text      16    gray   cga,ega,vga
          co40      1         40x25     text      16/8  color  cga,ega,vga
          bw80      2         80x25     text      16    gray   cga,ega,vga
          co80      3         80x25     text      16/8  color  cga,ega,vga
          mres4     4         320x200   graph     4     color  cga,ega,vga
          mres0     5         320x200   graph     4     gray   cga,ega,vga
          hres2     6         640x200   graph     2     bw     cga,ega,vga
          text      7         80x25     text      2     bw     mda,hgc
          hgc       8         720x348   graph     2     bw     hgc
          mres16    13        320x200   graph     16    color  ega,vga
          hres16    14        640x200   graph     16    color  ega,vga
          eres2     15        640x350   graph     2     bw     ega, vga
          eres16    16        640x350   graph     16    color  ega, vga
          vres2     17        640x480   graph     2     bw     vga
          vres16    18        640x480   graph     16    color  vga
          mres256   19        320x200   graph     256   color  vga

          In addition, the following mode is defined to let you exit
          graphics mode and return to the default mode:

          default   -1        n/a       n/a       n/a   n/a    all


          TsrBasic Reference Manual                                  Page 9











          You can determine the type of video adapter that is installed in
          your PC, along with the x and y resolution, the number of colors,
          and the current mode by using the CONFIG statement. The syntax
          is:

            config xpix, ypix, colors, adapter, mode

          where xpix, ypix, colors, adapter and mode are variables. Xpix,
          ypix and colors are the number of x pixels, y pixels and colors,
          respectively, for the current mode. Adapter is the type of video
          adapter and is one of the following:

               1    mda (monochrome display adapter)
               2    cga (color graphics adapter)
               4    ega (enhanced graphics adapter)
               8    vga (video gate array)
               16   mga (multicolor graphics array)
               32   hgc (hercules graphics card)

          The graphics coordinate system is layed out like the text
          coordinate system with the origin (0,0) at the top left corner of
          the screen. The bottom right corner varies, depending on the
          graphics mode. In mode 14, for example, the bottom right corner
          is 639, 199.

          If you want to display text and graphics on the same screen you
          must use the TYPE statement to select the text in graphics mode
          (type 3). After you exit graphics mode set the text type back to
          0 for improved performance.

          The foreground and background colors for TsrBasic graphics modes
          are specified using the COLOR statement.  Graphics colors are
          independent of text colors.  Colors are represented by numbers in
          the range 0 to 15. The LOOKUP function can be used to convert a
          color name into a color number as described in the section on
          text windows.

          The BOX and CIRCLE statements draw boxes and circles using a
          "bounding" rectangle which describes the top left and bottom
          right corners of the image. These statements also take an
          argument that controls whether the image is to be filled or not.
          The LOOKUP function can be used to map these control names to
          numbers. The following control names are supported by the lookup
          function:

               2 - outline
               3 - fill

          Graphics images can be transferred from the screen to memory
          using the GET statement and from memory to the screen using the
          PUT statement. They can also be transferred from memory to a file



          Page 10                                 TsrBasic Reference Manual










          in bitmap form using the MAPSAVE statement and transferred from a
          file to memory using the MAPLOAD statement.

          The PUT statement uses a control parameter to describe the method
          for adding the image to the screen. The lookup function can be
          used to map the following control names to numbers:

               name      number    effect

               or        0         superimpose image
               and       1         intersection of images
               reset     2         negative of image
               set       3         normal image
               xor       4         invert image

          The xor control value can be used twice in succession to add and
          remove objects without modifying the background. This is useful
          for animation.

          TsrBasic conserves DOS memory by using a graphics dynamic link
          library (DLL) for graphics operations. This library is loaded
          automatically when necessary and is freed when you exit graphics
          mode using the mode -1 (default) statement. The graphics library
          requires about 40 kb of memory. If you do not have at least 40 kb
          of free memory you will not be able to load the graphics library
          or do graphics operations.

          The image transfer statements allocate memory for the bitmap
          directly from DOS. Note that multi-color high resolution images
          produce large bitmaps and require larges amounts of memory. A
          320x200 16 color bitmap requires about 64 kb. A 640x486 16 color
          bitmap takes up more memory than you are likely to have in your
          PC and will therefore need to be transferred in pieces (to
          separate files), using multiple GET/MAPSAVE statements.

          The memory for image bitmaps is automatically freed when you exit
          graphics mode with the mode -1 (default) statement. It may also
          be explicitly freed by using PUT 0,0,0,0 to save a zero length
          bitmap.

          If you have a Hercules compatible video adapter you will need to
          execute MSHERC.EXE from DOS prior to entering graphics mode. 













          TsrBasic Reference Manual                                 Page 11











          11.  String Handling

          TsrBasic supports the usual set of BASIC string handling
          functions, as well as PARSE, STRINS and STROVR, which are
          specific to TsrBasic. The following list summarizes the string
          handling functions available with TsrBasic:

               asc            left           space
               cat            len            strins
               chr            mid            strovr
               copy           parse
               instr          right


          11.1      Parse Function

          The PARSE function breaks a string into pieces called tokens. The
          syntax of the PARSE function is as follows:

          parse (buffer,literals,connectors,discards,delimiters,specials)

               buffer         - string to parse
               literals       - grouping characters to discard
               connectors     - grouping characters to save   
               discards       - leading characters to discard
               delimiters     - delimiters to discard
               specials       - delimiters to save

          The buffer parameter is a variable containing the string to be
          parsed. The PARSE function splits a token off the front end of
          the buffer and returns it as the function value. The resulting
          string, less the first token, is returned via the buffer
          parameter. The returned buffer will be equal to the null string
          when all the tokens have been parsed from it. The buffer
          parameter should not be an array reference.

          The parameters represented by literals, connectors, discards,
          delimiters and specials control the way the parsing is performed.
          Each parameter is a character string or variable containing one
          or more characters.

          The default for literals is double and single quote. The default
          for discards is space and tab. The default for delimiters is
          comma. The default for all other parameters is the null string.
          These defaults give PARSE a default behavior equivalent to the
          processing done by the INPUT statement.

          All parameters except for buffer are optional. Parameters to the
          right of the one you wish to specify may be omitted. Here is an
          example:

               after executing the following:


          Page 12                                 TsrBasic Reference Manual











                    a = "one, two, three"
                    b = parse (a)
                    c = parse (a)
                    d = parse (a)

               a is equal to "one"
               b is equal to "two"
               c is equal to "three"

          Literals and connectors are used to quote sequences of characters
          so they are not affected by other parse actions. The difference
          between literals and connectors is that characters in the list of
          literals are not returned as part of the token whereas characters
          from the list of connectors are. Note the difference in the
          following example, where single quote is used first as a literal
          and then as a connector:

               after executing the following:

                    a = "'hello world'"
                    b = parse (a, "'")

                    a = "'hello world'"
                    c = parse (a, "", "'")

               b is equal to "hello world"
               c is equal to "'hello world'"

          Discards are a list of characters to strip from the beginning of
          the token. They are normally used to strip preceding spaces or
          tabs.

          Delimiters and Specials are characters that mark the end of a
          token. The difference between them is that delimiters are not
          returned as part of the token whereas specials are returned as
          the next token. Here is an example:

               after executing the following:

                    a = "execute 3 + 4 * 5"
                    b = parse (a, "", "", "", " ", "+*")
                    c = parse (a, "", "", "", " ", "+*")
                    d = parse (a, "", "", "", " ", "+*")
                    e = parse (a, "", "", "", " ", "+*")
                    f = parse (a, "", "", "", " ", "+*")
                    g = parse (a, "", "", "", " ", "+*")








          TsrBasic Reference Manual                                 Page 13











               b is equal to execute
               c is equal to 3
               d is equal to +
               e is equal to 4
               f is equal to *
               g is equal to 5

          The PARSE function is well suited to being used in a loop to
          initialize an array of tokens, as follows:

               100 tokcnt = 0
               110 dim token(30)
               120 print "enter text: ";
               130 line input text
               140 if text = "" then goto 180
               150    token(tokcnt) = parse (text)
               160    tokcnt = tokcnt + 1
               170 goto 140
               180 print "done"


          11.2      Strins Function

          The STRINS function inserts a string into the middle of another
          string. Here is its syntax:

          newstr = strins (oldstr, start, midstr)

          The string represented by midstr is inserted into oldstr starting
          at an offset of start into oldstr to produce newstr. For example:

               after executing the following:

                    oldstr = "advance"
                    midstr = "THANKS"
                    newstr = strins (oldstr, 4, midstr)

              newstr is equal to "advTHANKSance"


          11.3      Strovr Function

          The STROVR function overlays a string onto the middle of another
          string. Here is the syntax for STROVR:

          newstr = strovr (oldstr, start, midstr)

          The string represented by midstr is overlayed onto oldstr
          starting at an offset of start into oldstr to produce newstr, as
          follows:




          Page 14                                 TsrBasic Reference Manual











               after executing the following:

                    oldstr = "The quick fox jumps over the lazy dog"
                    midstr = "cat"
                    newstr = strovr (oldstr, 11, midstr)

               newstr is equal to "The quick cat jumps over the lazy dog"

          This function is roughly equivalent to the MID statement in other
          versions of BASIC.


          12.  File Operations

          TsrBasic supports simple file operations on standard ASCII files.
          The following operations are supported:

               access              input               print
               close               line input          tab
               eof                 open

          The OPEN statement opens a file. The mode parameter describes the
          access mode for the file. Possible values of mode are:

               "r"  open existing file for reading
               "w"  truncate or create for writing
               "a"  write to end of existing file
               "r+" open existing file for reading and writing
               "w+" truncate or create new file for reading and writing
               "a+" allow reading and writing at end of file

          Append "b" to any of the above modes to access the file in binary
          mode. This prevents carriage return/newline and control-z
          mapping. 

          13. Execute Statement

          The EXECUTE statement translates and executes its single string
          expression argument. This argument can be either a TsrBasic
          statement-list or a command. Here is an example of how it can be
          used to implement a simple calculator:

               100 print "enter expression: ";
               110 line input expression
               120 if expression = "quit" then end
               130 execute "print " + expression
               140 goto 100







          TsrBasic Reference Manual                                 Page 15











          14.  If Statement

          The TsrBasic IF statement takes two forms. One is the
          conventional:

          if expression then statement-list [else statement-list]

          where statement-list is a list of colon separated statements.

          The other form of the TsrBasic IF statement is designed to
          simplify structured programming. It is coded as follows:

              if expression
                 then
                    statement-list
                    ...
                [else
                    statement-list
                    ...]
              end if

          Any number of lines of statement-lists can appear in the THEN and
          ELSE clauses, and they may include nested IF statements. The only
          requirement for this form of the IF statement is that the THEN,
          ELSE and END IF keywords appear on separate lines. Note that the
          ELSE clause is optional.


          15.  Link Command

          The LINK command links the TsrBasic interpreter with the current
          program to create a DOS executable file. The TsrBasic program can
          then be invoked just like any other DOS program. It can even get
          access to command line arguments using the ARGC and ARGV
          functions. Here is an example of a simple program that will get
          the name of a file from the DOS command line and list it to the
          console. See the description of file operations in section 12 for
          more information.
















          Page 16                                 TsrBasic Reference Manual











               100 if argc() <> 1
               110    then
               120       print "usage: list <file>"
               130       end
               140 end if
               150 open #1, "r", argv (1)
               160 if not eof (1)
               170    then
               180       line input #1, buf
               190       print buf
               200       goto 160
               210 end if
               220 close #1

          This program can be converted into an executable file using the
          LINK command. The resulting .exe file can then be executed from
          the DOS command line with a single argument specifying a file to
          list.

          Note: the LINK command writes the current settings of the command
          line options for data area, program and symbol table size to the
          .exe file. These sizes do not need to be specified again when the
          resulting .exe file is executed.


          16.  Command Line Options

          TsrBasic supports the following command line options. Note that
          they are case sensitive and must be specified using lower case.

               tsrbasic [-d<n>] [-p<n>] [-s<n>] [files]

          The -d<n> option defines the amount of storage allocated for the
          data defined in DATA statements. The <n> parameter specifies the
          number of data elements that can be defined in your program. The
          default is -d100, which provides storage for 100 elements.
          Increase this parameter if you see a "Too many data items" error
          message.

          The -p<n> option defines the amount of storage allocated for the
          intermediate code program. The <n> parameter is specified in
          units of intermediate code instructions. The default is -p750
          which represents 750 intermediate code instructions and is
          roughly equivalent to 300 lines of TsrBasic source code. Increase
          this parameter if you see a "Program too long" error message.

          The -s<n> option defines the amount of storage allocated for the
          symbol table. The <n> parameter specifies the maximum number of
          symbols. A symbol table entry is required for each variable,
          array and literal, including those defined in immediate mode. The
          default is -s150. Increase this parameter if you see a "Too many
          symbols" error message.


          TsrBasic Reference Manual                                 Page 17











          One or more TsrBasic source files can be specified on the command
          line. These files are processed in the order they are specified.
          In order to be executed, a file must have a RUN command in it.
          The interactive command processor is entered after the last file
          is processed.


          17. Error Handling

          TsrBasic errors fall into two categories: compilation errors and
          runtime errors.

          Compilation errors reflect errors in your source code that must
          be corrected before the program can be executed. The most common
          compilation error is "syntax error." If you get a syntax error,
          and the cause of the error is not immediately obvious, look very
          carefully at the statement and compare the syntax you specified
          to that which is listed in the summary of statements and
          functions. Be especially careful to check for invalid or missing
          operators.

          Runtime errors are errors that could not be detected at
          compilation time, like "Cannot open file." They may be trapped
          using an ON ERROR GOTO statement. The ERL, ERR and ERM functions
          can be used within an error handler to identify the line number
          on which the error occured as well as the error code and the
          error message text. An error handler can use the RESUME statement
          to retry the statement that caused the error, return control to
          the statement following the line that caused the error, or return
          control to some other location.

          See Appendix C for a complete list of error codes and messages.


          18. Using Keyboard Scan Codes

          When you press a key on the keyboard, the keyboard sends a scan
          code to the CPU indicating the key that was pressed. These scan
          codes are usually translated into characters to be used by your
          program. Several TsrBasic statements deal directly with raw scan
          codes.

          The SUSPEND statement, for instance, uses a scan code value to
          specify the hotkey that is used to recall the interpreter. The
          scan code values are taken from the list in Appendix D.

          The GETKEY and INKEY functions both return combinations of
          scancodes and characters. The return value consists of two bytes.
          The high order byte is the scan code and the low order byte is
          the character value, or zero for keys that do not have character
          values, such as function keys. To get the high order byte, or



          Page 18                                 TsrBasic Reference Manual










          scan code, right shift the returned value by 8 bits. This is
          equivalent to integer division by 2^8 or 256:

               scan_code = inkey () \ 256

          To get the low order byte, or character value, zero the high
          order byte by ANDing with 0xff or 255:

               char_code = inkey () & 255

          The following TsrBasic program will tell you the scan code and
          character associated with any key:

               100 print "Enter key, or q to stop";
               110 key = getkey ()
               120 scan_code = key \ 256
               130 char_code = key & 0xff
               140 print
               150 print "scan code = "; scan_code
               160 print "char code = "; char_code;
               170 print " ("; chr (char_code); ")"
               180 if char_code <> asc ("q") then goto 100

          Note that control-c will not terminate a program that is using
          GETKEY to read a scancode. Instead, GETKEY will return the
          scancode for control-c.


          Appendix A.    Summary of Statements and Functions

          A TsrBasic program is made up of statements and functions. When
          the RUN command is entered, the statements and functions are
          compiled into intermediate code and then executed. Commands
          differ from statements in that they are not compiled into
          intermediate code.

          Statements can be entered without a line number, in which case
          they are executed immediately, or with a line number, in which
          case they are stored as part of the current program. Multiple
          statements can be entered on a single line, separated by colons.

          Functions return values. They are passed an argument list
          consisting of zero or more expressions, separated by commas.

          Statements, functions and commands in TsrBasic are not case
          sensitive. They may be entered in any combination of lower and
          upper case.

          In the following summary, functions are indicated by an equal
          sign:

               n = abs (m)



          TsrBasic Reference Manual                                 Page 19










          and statements are indicated merely by the presence of the
          statement name:

               beep

          Some TsrBasic keywords can be referenced as both statements and 
          functions to get and/or set values. Keywords that can be used as
          both statements and functions have syntax specifications for each
          form.

          The following summary uses the letter b to represent boolean
          values, the letters n and m to represent integers, the letters r,
          s and t to represent strings and the letters x and y to represent
          real numbers. Values are converted to the appropriate type when
          necessary.

          Note: The trigonometric functions expect arguments expressed in
          radians. To convert degrees to radians, multiply by pi/180.

          y = abs(x)
               Return absolute value of x.

          b = access(s)
               Return true if file s exists.

          n = argc()
               Return number of arguments on dos command line.

          s = argv(n)
               Return argument number n from dos command line.

          n = asc(s)
               Return ascii code of first character of s.

          y = atn(x)
               Return arctangent of x, where x is in radians.

          background n
               Set background color for subsequent text output to n. Use
               the lookup function to map color names to numbers. Use the
               refresh statement to make the color change occur
               immediately.

          s = background ([n])
               Return current text background color, optionally set new
               background color to n.

          beep
               Generate tone through speaker.

          blank
               Clear entire screen, differs from cls in that cls clears
               just the current text window.


          Page 20                                 TsrBasic Reference Manual











          border
               Shrink the text area of the window by one row or column on
               each side and draw a border around it.

          box x1, y1, x2, y2, f
               Draw a box with top left corner at x1, y1 and bottom right
               corner at x2, y2. Outline the box if f is 2 and fill the box
               if f is 3. The lookup function may be used to map "outline"
               and "fill" to 2 and 3. Available in graphics mode only.

          s = cat(t[,u...])
               Return the concatenation of strings t, u, etc, see also: +.

          chain s
               Load file specified by s and run it, see also: common.

          s = chr(n)
               Return the character equivalent for ascii code n.

          n = cint(x)
               Return x rounded up to next integer.

          circle x1, y1, x2, y2, f
               Draw a circle within the bounding rectangle specified by a
               top left corner at x1, y1 and a bottom right corner at x2,
               y2. Outline the circle if f is 2 and fill the circle if f is
               3. The lookup function may be used to map "outline" and
               "fill" to 2 and 3. Available in graphics mode only.

          clip x1, y1, x2, y2
               Define a graphics view port with a top left corner at x1, y1
               and a bottom right corner at x2, y2. Subsequent graphics
               output beyond this rectangle will be clipped. Available in
               graphics mode only.

          close #n
               Close file opened with file number n, see also: open, input,
               print.

          cls
               Clear current text window, see also: blank.

          color n, m
               Set graphics foreground color to n and background color to
               m. The graphics color is maintained independently of the
               text color. The lookup function may be used to map color
               names to color numbers. Available in graphics mode only.

          column n
               Move cursor to absolute column n, where the leftmost column
               is 0 and the rightmost column is usually 79. See also



          TsrBasic Reference Manual                                 Page 21










               locate, which positions the cursor relative to the origin of
               the current text window.

          n = column ([m])
               Return current cursor column, optionally moving cursor to
               column m.

          common variable [,variable]...
               Define common variables for chained programs, see also:
               chain.

          config xpix, ypix, colors, adapter, mode
               Get the current graphics configuration.

          cont
               Continue program execution after stop, see also: stop.

          s = copy(t,n)
               Return a string consisting of n copies of t.

          y = cos(x)
               Return the cosine of x, where x is in radians.

          csroff
               Turn the cursor off.

          csron
               Turn the cursor on and set it to a default size.

          csrbottom n
               Change the size of the cursor by setting the bottom of the
               cursor to scan line number n. Must be 0 to 6 for cga and 0
               to 12 for ega. The bottom scan line should be numerically
               greater than the top scan line.

          n = csrbottom ([m])
               Get the current bottom scan line of the cursor, and
               optionally set it to scan line m.

          csrtop n
               Change the size of the cursor by setting the top of the
               cursor to scan line number n. Must be 0 to 6 for cga and 0
               to 12 for ega. The top scan line should be numerically less
               than the top scan line.

          n = csrtop ([m])
               Get the current top scan line of the cursor, and optionally
               set it to scan line m.

          s = date()
               Return the current date in mm:dd:yy format.




          Page 22                                 TsrBasic Reference Manual











          data value [,value]...
               Define numeric and string values, see also: read.

          m = dec(n)
               Return the decimal equivalent of hex or octal n, see also:
               hex, oct.

          dim array(n[,n]...) [,array(n[,n]...)]...
               Define array with index zero to n, see also: erase, shift,
               sort.

          display n,m,s
               Display string s at absolute row n and column m, without 
               moving the cursor.

          end
               Terminate program execution.

          s = environ(t)
               Return value of environment variable t.

          b = eof(n)
               Return true if end of file reached on file n.

          erase array [,array]..
               Free array, see also: dim.

          n = erl()
               Return line number on which error occurred. Valid in error
               handler only. See also: erm, err, on error.

          s = erm()
               Return error message associated with error. Valid in error
               handler only. See also erl, err, on error.

          n = err()
               Return error number associated with error. Valid in error
               handler only. See also erl, erm, on error.

          error n
               Simulate occurrence of error n, see also: on error, resume.

          execute s
               Execute string expression s as a TsrBasic statement.

          y = exp(x)
               Return natural log (e) to the power of x.

          fill x1, y1, n
               Fill the graphics image that has border color n and
               surrounds the point x1, y1. Use lookup to map color names to
               numbers. Available in graphics mode only.


          TsrBasic Reference Manual                                 Page 23











          n = fix(x)
               Return x truncated to an integer.

          n = fre()
               Return amount of free TsrBasic memory in bytes.

          for variable = expression to expression [step expression]
               For...next loop, see also: next.

          foreground c
               Set foreground color for subsequent text output to n. Use
               the lookup function to map color names to numbers. Use the 
               refresh statement to make the color change occur
               immediately.

          d = foreground ([c])
               Return current text foreground color, optionally set new
               foreground color to c.

          get x1, y1, x2, y2
               Transfer a graphics image from the screen to memory. The
               image is bounded by a rectangle with a top left corner of
               x1, y1, and a bottom right corner of x2, y2. The image may
               then be transferred to a file using mapsave or back to the
               screen using put. Available in graphics mode only.

          n = getkey ()
               Wait for a key to be entered and return the scan code. See
               Appendix D for more information on scan codes.

          n = getscreen ()
               Return the attributes and ascii code of the character at the
               current cursor position. The attributes are returned in the
               high order byte and the ascii code is returned in the low
               order byte.

          goto n
               Goto line number n, also valid in immediate mode after run.

          gosub n
               Call subroutine at line number n, see also: return.

          m = hex(n)
               Return hexadecimal equivalent of decimal or octal n. See
               also: dec, oct.

          if expression then statement-list [else statement-list]
               If...then...else statement, see detailed description.

          init
               Set current text window and cursor to default size and
               color. In the normal text video mode there are 25 rows and


          Page 24                                 TsrBasic Reference Manual










               80 columns. The top-left corner is 0, 0 and the bottom right
               corner is 24, 79.

          n = inkey()
               Return scan code if key entered else zero, see detailed
               description of scan codes.

          m = inp(n)
               Return byte read from hardware port n.

          input [#file-number] variable [,variable]...
               Input one or more items into variables, see also: line
               input, parse.

          s = instr([n,]r,t)
               Return first occurrence of s in r optionally starting at n.

          n = int(x)
               Return x truncated to an integer and rounded down if
               negative.

          intensity n
               Set text intensity (brightness) attribute to n. Use lookup
               function to map intensity names "low" and "high" to
               intensity numbers 0 and 8.

          s = left(t,n)
               Return leftmost n characters of s.

          n = len(s)
               Return number of characters in s.

          [let] variable = expression
               Assign expression to variable or array.

          line input [#file-number] variable
               Input an entire line of text into a variable or array.

          lineto x1, y1
               Draw a line in the current graphics color to point x1, y1.
               Valid only in graphics mode. See also: mode, moveto.

          locate n, m
               Set cursor to row n and column m relative to the current
               text window (0,0 is top left). See also: screen.

          mapload n
               Load a graphics image bitmap, previously saved by mapsave,
               from file IMAGE.n where n is a number. The bitmap may then
               be transferred to the screen using put.





          TsrBasic Reference Manual                                 Page 25











          mapsave n
               Save a graphics image bitmap to file IMAGE.n where n is a
               number. The bitmap must have previously been transferred
               from the screen to memory using get.

          mode n
               Set video/graphics mode to n. See detailed description of
               graphics modes for more information.

          moveto x1, y1
               Move to point x1, y1 for subsequent graphics output. Valid
               only in graphics mode. See also: mode, lineto.

          next variable
               For...next loop, see also: for

          y = log(x)
               Return natural logarithm of x.

          s = mid(t,n[,m])
               Return m characters from t starting at n, return remainder
               of string t if m is omitted.

          m = oct(n)
               Return octal equivalent of decimal or hexadecimal n. See
               also: dec, hex.

          on error goto n
               Call error handler at line number n. Return from it with
               resume. See also: erl, erm, err.

          open #n, s, t
               Open file with access mode s and pathname t, and associate
               it with file number n. See detailed description for
               information on access modes.

          out port, expression
               Output integer byte value to port, see also: inp.

          page n
               Set current video text page for video adapters capable of
               supporting multiple text pages.

          n = page ([m])
               Get the current video text page and optionally set it to
               page m.

          s = parse(t[,v...])
               Return a token parsed from t, see detailed description.

          i = peek(j,k)
               Return byte located at segment j, offset k.


          Page 26                                 TsrBasic Reference Manual











          pixel x1, y1
               Turn on graphics pixel at point x1, y1. Available only in
               graphics mode.

          poke segment, offset, expression
               Set byte at segment and offset to integer value, see also:
               peek.

          print [#n] expression [, or ; expression]...
               Print to file number n or console, semicolon causes print
               items to be adjacent, comma causes them to be separated by
               tabs.

          put x1, y1, n
               Transfer a graphics image from memory to the screen. The
               image must have previously been captured using get, or read
               from a disk file using mapload. The top left corner is put
               at x1, y1 and the control argument n describes how the image
               is transferred to the screen. See the detailed description
               of graphics for more information.

          randomize
               Seed random number generator.

          read variable [,variable]...
               Read values into variables or arrays, see also: data,
               restore.

          refresh
               Refresh the text screen. This can be used after the
               foreground and background statements to change the color of
               text that is already on the screen.

          rem
               Remark, i.e. this line is a comment, equivalent to single
               quote.

          restore
               Restore data list to beginning, see also: data, read.

          restorescreen s
               Restore screen contents to previous value, see savescreen.
               In addition to restoring the contents of the screen, this
               statement also restores the text window dimensions that were
               in effect when the corresponding savescreen was executed.

          resume
               Return from error handler and retry statement that caused
               error. See also: on error.





          TsrBasic Reference Manual                                 Page 27











          resume n
               Return from error handler to line-number n. See also: on
               error.

          resume next
               Return from error handler to statement following the one
               that caused the error. See also: on error.

          return
               Return from subroutine entered via gosub.

          row n
               Move cursor to absolute row n, where the top row is 0 and
               the bottom row is usually 24. See also locate, which
               positions the cursor relative to the origin of the current
               text window.

          n = row ([m])
               Return current cursor row and optionally move cursor to row
               m.

          s = right(t,n)
               Return rightmost n characters of t.

          m = rnd([n])
               Return random number, optionally based on seed n.

          savescreen s
               Save screen contents in variable s for a subsequent
               restorescreen. This function saves the text window defined
               using the wintop, winleft, winbottom and winright
               statements. To save the entire screen, use the init
               statement first to set the text window size back to the
               entire screen.
                 
          screen "command", parameters
               Not supported in Version 2.0. See setailed description of
               text windows for alternate statements and functions.

          scroll n
               Scroll screen up n rows if n is positive or down n rows if
               rows is negative.

          m = sgn(x)
               Return -1 if x is negative, 0 if x is 0, +1 if x is
               positive.

          shell s
               Pass string expression s to DOS shell to execute as a
               command. Because DOS is not reentrant, this statement will
               not work when you have recalled a suspended TsrBasic session
               from the DOS shell. In this case it will return a "DOS is


          Page 28                                 TsrBasic Reference Manual










               busy" error. You can, however, use the SHELL statement when
               you have recalled TsrBasic from most other applications,
               provided there is sufficient memory.

          shift a, n
               Shift one dimensional array a by n elements. If n is
               negative elements are shifted down and extra elements are
               discarded from the low end. If n is positive then elements
               are shifted up and extra elements are discarded from the
               high end.

          y = sin(x)
               Return sine of x, where x is in radians.

          sort a, n
               Sort one dimensional array a into ascending order if n is
               positive and into descending order if n is negative.

          sound frequency, duration
               Generate tone, use a frequency of zero for a delay.

          s = space(n)
               Return string of n spaces, see also: copy

          y = sqr(x)
               Return square root of x.

          stop
               Stop execution. Useful for debugging. See also: cont.

          suspend screen, key-code, key-flags, interval, status
               Terminate and stay resident. See detailed description of
               suspend statement for more information.

          swap variable-a, variable-b
               Swap the contents of variable-a and variable-b.

          tab(n)
               Position cursor to column n (as print argument only).

          y = tan(x)
               Return tangent of x, where x is in radians.

          s = time()
               Return current time in hh:mm:ss format.

          troff
               Disable statement tracing.

          tron
               Enable statement tracing.




          TsrBasic Reference Manual                                 Page 29











          type n
               Set type of video access to n, where n is 0 for direct
               (fast) access, 1 for BIOS access, 2 for BIOS/DOS access, and
               3 for text in graphics mode. The default is 0. Use 1 if you
               have any video problems with 0, use 2 if you want to
               redirect output using DOS redirection capability. Use 3 for
               mixed text and graphics in graphics modes (see mode).

          winbottom n
               Set the bottom row of the text window to n, where n is in
               the range of 0 (top) to 24 (bottom). See detailed
               description of text windows for more information.

          n = winbottom ([m])
               Return the current bottom row of the text window and
               optionally set it to m.

          winleft n
               Set the left column of the text window to n, where n is in
               the range of 0 (left) to 79 (right). 

          n = winleft ([m])
               Return the current left column of the text window and
               optionally set it to m.

          winright n
               Set the right column of the text window to n, where n is in
               the range of 0 (left) to 79 (right). 

          n = winright ([m])
               Return the current right column of the text window and
               optionally set it to m.

          wintop n
               Set the top row of the text window to n, where n is in the
               range of 0 (top) to 24 (bottom). 

          n = wintop ([m])
               Return the current top row of the text window and optionally
               set it to m.


          Appendix B.    Summary of Commands


          Commands are usually entered without a line number and
          are executed immediately. They may, however, be included in
          programs if they are passed as arguments to the EXECUTE
          statement. In this case, they are processed when the EXECUTE
          statement is executed.




          Page 30                                 TsrBasic Reference Manual










          In the following list of commands, the phrase line-number-spec
          refers to an optional specification of line numbers. The
          specification may take the following forms:

               -    all lines
               n    line n
               n-   line n through end
               n-m  line n through m
               -n   beginning through n

          If the specification is omitted, all lines are processed.

          clear
               Free all variables.

          chdir pathname
               Make pathname the current directory.

          delete [line-number-spec]
               Delete lines from current program, use caution when entering
               this command without a line-number-spec,  because it will
               delete the entire program.

          dis [line-number-spec]
               Disassemble intermediate code.

          edit [line-number-spec]
               Invoke editor specified by EDITOR environment variable on
               line-number-spec.

          kill pathname
               Delete file specified by pathname.

          link pathname
               Translate current program into an executable called
               pathname.

          list [line-number-spec]
               List current program

          load pathname
               Clear current program and load new program, default
               extension is ".bas". Append a period if the filename does
               not have an extension.

          merge pathname
               Merge new program with current program.

          mkdir pathname
               Create a directory specified by pathname.

          new
               Erase the current program.


          TsrBasic Reference Manual                                 Page 31











          quit
               Terminate TsrBasic and unload from memory if resident.

          renum new-first-line line-increment
               Renumber current program.

          rmdir pathname
               Remove directory specified by pathname.

          run [line-number]
               Execute current program, optionally starting at line-number.

          save pathname
               Save current program to file specified by pathname, default
               extension is ".bas". Append a period if you do not want the
               filename to have an extension.


          Appendix C.   Error Codes and Messages


          The following list describes TsrBasic error codes and messages:

              Code  Message

               0    Internal error
               1    Syntax error
               2    Uninitialized variable
               3    Missing left paren
               4    Missing right paren
               5    Missing comma or right paren
               6    Missing factor
               7    Expression too complex
               8    Too many symbols
               9    Program too long
               10   Too many nested calls
               11   Too many nested GOSUB's
               12   RETURN without GOSUB
               13   Duplicate definition
               14   Invalid subscript
               15   Too many data items
               16   Out of data
               17   FOR loops nested too deep
               18   Missing NEXT
               19   Missing FOR
               20   Cannot open file
               21   File not open
               22   File in use
               23   Undefined line number
               24   Break
               25   Cannot continue
               26   File or dir not found


          Page 32                                 TsrBasic Reference Manual










               27   Assignment to constant
               28   Cannot locate tsrbasic
               29   i/o error
               30   DOS is busy
               31   Missing END IF
               32   Cannot load GRAPHICS.DLL
               33   Floating point exception
               34   Missing THEN
               35   Use of keyword as variable
               36   Graphics error
               37   Cannot terminate TSR


          Appendix D.   Keyboard Scan Codes

          The following table lists the key and the corresonding scan code,
          in decimal (and in parenthesis). Note that some keys, such as
          control and shift cannot be processed by getkey and inkey.


          Characters

               a (30)              k (37)              u (22)
               b (48)              l (38)              v (47)
               c (46)              m (50)              w (17)
               d (32)              n (49)              x (45)
               e (18)              o (24)              y (21)
               f (33)              p (25)              z (44)
               g (34)              q (16)
               h (35)              r (19)
               i (23)              s (31)
               j (36)              t (20)
                
                
          Digits
                
               1 (2)               5 (6)               9 (10)
               2 (3)               6 (7)               0 (11)
               3 (4)               7 (8)
               4 (5)               8 (9)
                

          Function Keys  
                
               f1 (59)             f5 (63)             f9 (67)
               f2 (60)             f6 (64)             f10 (68)
               f3 (61)             f7 (65)
               f4 (62)             f8 (66)







          TsrBasic Reference Manual                                 Page 33











          Special Keys

               alt (56)            equals (13)         page down (81)
               arrow down (80)     enter (28)          page up (73)
               arrow left (75)     escape (1)          period (52)
               arrow right (77)    home (71)           prt sc / * (55)
               arrow up (72)       insert (82)         right bracket (27)
               back quote (41)     keypad + (78)       right shift (54)
               back space (14)     keypad - (74)       semicolon (39)
               back slash (43)     keypad 5 (76)       scroll lock (70)
               caps lock (58)      keypad enter (78)   single quote (40)
               comma (51)          left bracket (26)   slash (53)
               control (29)        left shift (42)     space (57)
               delete (83)         minus (12)          tab (15)
               end (79)            num lock (69)







































          Page 34                                 TsrBasic Reference Manual






```
{% endraw %}

## WEBB.BAS

{% raw %}
```bas
1000 ' Webb.bas, Version 2.0, Graphics Demo Program
1010 '
1020 print "Press ctrl-c to stop..."
1030 '
1040 ' Get graphics configuration and see if a
1050 ' graphics adapter is available
1060 '
1070 config xmax, ymax, colors, adapter, cmode
1080 if adapter = lookup ("mda")
1090    then
1100       print "No graphics adapter, or msherc not loaded."
1110       end
1120 end if
1130 '
1140 ' Select highest resolution graphics mode based 
1150 ' on type of graphics adapter
1160 '
1170 if adapter = lookup ("cga") then mode lookup ("hres2")
1180 if adapter = lookup ("ega") then mode lookup ("hres16")
1190 if adapter = lookup ("vga") then mode lookup ("vres16")
1200 if adapter = lookup ("hgc") then mode lookup ("herc")
1210 config xmax, ymax, colors, adapter, cmode
1220 type lookup ("graphics")
1230 on error goto 2710
1240 '
1250 ' Randomly generate coordinates of two points that will
1260 ' independently bounce around the screen. A line will
1270 ' be drawn between the two points to produce the desired
1280 ' visual effect.
1290 '
1300 randomize
1310 x1 = int (rnd () * xmax)
1320 x2 = int (rnd () * xmax)
1330 y1 = int (rnd () * ymax)
1340 y2 = int (rnd () * ymax)
1350 '
1360 ' Randomly generate deltas for subsequent points
1370 '
1380 dx1 = int (rnd () * 6) + 3
1390 dx2 = int (rnd () * 6) + 3
1400 dy1 = int (rnd () * 6) + 3
1410 dy2 = int (rnd () * 6) + 3
1420 '
1430 ' Initialize viewport so that min and max just
1440 ' barely fit inside screen
1450 '
1460 xmin1 = dx1
1470 xmin2 = dx2
1480 ymin1 = dy1
1490 ymin2 = dy2
1500 xmax1 = xmax - dx1
1510 xmax2 = xmax - dx2
1520 ymax1 = ymax - dy1
1530 ymax2 = ymax - dy2
1540 '
1550 ' Initialize two additional points based on the
1560 ' original points. These points will follow in the
1570 ' footsteps of the original points, erasing the lines
1580 ' between the original points.
1590 '
1600 x3 = x1
1610 x4 = x2
1620 y3 = y1
1630 y4 = y2
1640 '
1650 ' Initialize the deltas for the two points that
1660 ' will erase lines.
1670 '
1680 dx3 = dx1
1690 dx4 = dx2
1700 dy3 = dy1
1710 dy4 = dy2
1720 '
1730 ' Initialize cnt, which is used to select a new color,
1740 ' this_color, which keeps track of the current color, and
1750 ' countdown, which is the number of lines to draw before
1760 ' starting to erase any lines.
1770 '
1780 cnt = 0
1790 this_color = 1
1800 countdown = 100
1810 '
1820 ' If a point reaches a boundary then flip its delta. When
1830 ' looked at in one dimension at a time a point is just oscillating
1840 ' back and forth between its maxima and minima.
1850 '
1860 if x1 >= xmax1 or x1 <= xmin1
1870    then
1880       dx1 = -dx1
1890 end if
1900 if x2 >= xmax2 or x2 <= xmin2
1910    then
1920       dx2 = -dx2
1930 end if
1940 if y1 >= ymax1 or y1 <= ymin1
1950    then
1960       dy1 = -dy1
1970 end if
1980 if y2 >= ymax2 or y2 <= ymin2
1990    then
2000       dy2 = -dy2
2010 end if
2020 '
2030 ' Adjust a point by its delta, which is a signed
2040 ' number and may result in the point moving toward
2050 ' its maxima or toward its minima
2060 '
2070 x1 = x1 + dx1
2080 x2 = x2 + dx2
2090 y1 = y1 + dy1
2100 y2 = y2 + dy2
2110 '
2120 ' Connect the two points
2130 '
2140 moveto x1, y1
2150 lineto x2, y2
2160 '
2170 ' If the countdown timer has expired then start
2180 ' erasing lines. Otherwise jump back to beginning
2190 ' and draw the next line.
2200 '
2210 if countdown 
2220    then
2230       countdown = countdown - 1
2240       goto 1860
2250 end if
2260 '
2270 ' After the countdown timer expires, points 3
2280 ' and 4 follow exactly in the footsteps of points
2290 ' 1 and 2, erasing lines as they go.
2300 '
2310 if x3 >= xmax1 or x3 <= xmin1
2320    then
2330       dx3 = -dx3
2340 end if
2350 if x4 >= xmax2 or x4 <= xmin2
2360    then
2370       dx4 = -dx4
2380 end if
2390 if y3 >= ymax1 or y3 <= ymin1
2400    then
2410       dy3 = -dy3
2420 end if
2430 if y4 >= ymax2 or y4 <= ymin2
2440    then
2450       dy4 = -dy4
2460 end if
2470 x3 = x3 + dx3
2480 x4 = x4 + dx4
2490 y3 = y3 + dy3
2500 y4 = y4 + dy4
2510 color 0, 0
2520 moveto x3, y3
2530 lineto x4, y4
2540 '
2550 ' Select a new color, on devices capable of
2560 ' supporting multiple colors. Jump around this
2570 ' block of code if you do not want to change colors.
2580 '
2590 cnt = cnt + 1
2600 if cnt = 300
2610    then
2620       cnt = 0
2630       this_color = this_color + 1
2640       if this_color > colors
2650          then
2660             this_color = 1
2670       end if
2680 end if
2690 color this_color, 0
2700 goto 1860
2710 '
2720 ' Error Handler - This is designed to catch
2730 ' the control-c interrupt.
2740 '
2750 mode lookup ("default")
2760 type lookup ("direct")
2770 print erm()
2780 end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2570

     Volume in drive A has no label
     Directory of A:\

    README   DOC      3245   4-03-91   9:00p
    TSRBASIC DOC     75742   4-03-91   9:00p
    CHANGES  DOC      3014   4-03-91   9:00p
    TSRBASIC EXE     73754   4-03-91   9:00p
    MSHERC   COM      6749   4-03-91   9:00p
    GRAPH    DLL     24912   4-03-91   9:00p
    CALC     BAS      4532   4-03-91   9:00p
    CLOCK    BAS       167   4-03-91   9:00p
    NOTEPAD  BAS      6488   4-03-91   9:00p
    SAVER    BAS      1241   4-03-91   9:00p
    WEBB     BAS      4862   4-03-91   9:00p
    GO       BAT        58   4-27-91   9:42a
    LIST     COM     20951   9-05-90   8:04a
    FILE2570 TXT      3553   4-27-91  10:12a
           14 file(s)     229268 bytes
                           84992 bytes free
