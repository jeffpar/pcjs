---
layout: page
title: "PC-SIG Library Disk #2570"
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

## CLOCK.BAS

```bas
100 print "Press ctrl-shift-b to terminate clock."
110 suspend 0, 0x30, 0x06, 18, 0, timer
120 if not timer then cls : end
130 display 0, 72, time()
140 goto 110
```

## NOTEPAD.BAS

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

## SAVER.BAS

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

## WEBB.BAS

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
