---
layout: page
title: "PC-SIG Library Disk #2636"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2636/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2636"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PARSECMD.BAS

```bas
$IF 0
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 This code is based on an example from Henry Piper's (72330,1721)
 posting in the Spectra area of the PCVenB forum on Compurserve of
 September 6, 1990

 Made into a sub 9/9/90 by Barry Erick 75300,214
 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 The code between the 'Here and 'ToHere should be included to use this.
 Two variables result. NumArgs% returns the number of parameters on
 the command line. The string array Args$() returns the actual arguments.

 Testing this demo can be done this way:  compile and run from
  the command line as
	ParseDemo First Second /another /stillanother andmore last

 The demo code will print the number of parameters and the actual
 parameters.

 This can also be run from within the IDE my using Alt/O/P and entering
 the parameters before running with F9

 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
$ENDIF

 DEFINT a-z
'Here
 %False = 0
 %True = -1

SUB ParseCmds
SHARED Args$(),NumArgs%
LOCAL Included%,StrLen%
 NumArgs% = 0
 Included% = %False
 REDIM  Args$(25)
 Cmd$ = COMMAND$
 StrLen% = LEN(cmd$)
 FOR I = 1 TO StrLen
     Temp$ = MID$(Cmd$,i,1)
     IF (Temp$ <> " " AND Temp$ <> CHR$(9) AND_
         Temp$ <> "/" AND Temp$<>"-") THEN
        IF NOT Included% THEN
           NumArgs% = NumArgs% + 1
           Included% = %True
        END IF
        Args$(NumArgs%) = Args$(NumArgs%) + Temp$
     ELSE
        Included% = %False
     END IF
 NEXT
END SUB
'ToHere

' Main Demo
 CALL ParseCmds



 PRINT "There are";numargs; "commands on the command line"
 FOR i = 1 TO numargs
     PRINT "Argument number";i;" is:  ";args$(i)
 NEXT
 END
```

## RATS.BAS

```bas
' The following is a program I wrote to teach myself how to program the mouse.
' It doesn't use all of the mouse functions but I think the ones it does use
' will handle about any task you will need if kept simple.
'
' If you have any questions you can drop me a line.
' Not that I can answer them, but you can still ask.	John Watts
'											73760,751
' NOTE:										PCVENB LIB 12 Spectra
' Set TAB's to five (5) ... Alt-O E T 5 <Enter>

gosub setup					' Set up some variables

'──────────────────────────────────────────┐
mode% = fVideoMode%                       '│   This function & routine will
								  '│   determine whether you are
select case mode%                         '│   running a color or monochrome
	case 3                               '│   monitor and set the foreground
		foreground% = 14	'CGA/EGA/VGA │   color for the work area.
		videobufferabs& = &hb800 * 16   '│   The foreground color must be
	case 7                               '│   set   ──┐
		foreground% = 7	'MONO/HERC   │           │  NOTE: This is for
		videobufferabs& = &hb000 * 16   '│           │        monochrome
end select                                '│           │        compatibility
'──────────────────────────────────────────┘           │
call MainScreen							    '│
color foreground%,0 '──────────────────────────────────┴─before you initilize
locate 4,1                                            '  the mouse.──┐
													   '│
for x% = 1 to 13                                                    '│
		print scrn$(x%);                                          '│
next x%                                                             '│
													   '│
call rat.init(m%,b%) '───────────────────────────────────────────────┘
if not m% then print "Mouse not installed":end

call rat.min.max.vert(24,176)

call rat.show

first.loop:

call rat.min.max.vert(24,176)

call rat.min.max.horz(0,632)

do
	call rat.pos.but(but.status%,row%,col%)

	if (row% > 120) and (but.status% = 0) then goto skip
	locate 2,9

	r% = ((row% + l% ) / 8) + (tl% - 1)
	c% = (col% + 8 ) / 8
	print using "###";r%;
	locate ,21
	print using "###";c%;

	if but.status% then
		but% = -1
		select case but.status%

		case 1
			locate 2,75
			print chr$(219);
			gosub place.character
			goto skip
		case 2
			locate 2,79
			print chr$(219);
			gosub scroll.up
		case 4
			locate 2,77
			print chr$(219);
			gosub scroll.down
		case 3
			locate 2,75
			print chr$(219);
			locate ,79
			print chr$(219)
			gosub place.character
			gosub scroll.up
		case 5
			locate 2,75
			print chr$(219);
			locate ,77
			print chr$(219)
			gosub place.character
			gosub scroll.down

		end select

	elseif but% then
		locate 2,75
		print "L";
		locate ,77
		print "M";
		locate ,79
		print "R";
		but% = 0
	end if
skip:
	if row% > 120 then
		select case col%
		case 0 to 416
			if but% then exit if
			goto second.loop
		case 424 to 632
			if but% then exit if
			goto third.loop
		end select
	end if

loop while not instat

goto finish

second.loop:
locate 25,1
print "Select character";string$(40,32);
call rat.min.max.horz(0,416)

do

	call rat.pos.but(but.status%,row%,col%)


	if row% < 128 then
		locate 25,1
		print "Place character";string$(40,32);
		goto first.loop
	end if

	if but.status% and row% > 128 then
		char.selected% = screen((row%+8)/8,(col%+8)/8)
		select case char.selected%
		case 69,84,88
			gosub text
		case else
			locate 23,77
			print chr$(char.selected%);
		end select
	end if
loop while not instat

goto finish

third.loop:

call rat.min.max.vert(24,136)

call rat.min.max.horz(432,624)

		locate 25,1
		print "Select task";string$(40,32);

do

	call rat.pos.but(but.status%,row%,col%)

	if row% < 128 then
		locate 25,1
		print "Place character";string$(40,32);
		goto first.loop
	end if

	if but.status% then
		select case col%

		case 432 to 472				'Save screen
			open "o", 1, "tbscreen.fil"
			for x% = 1 to 25
				write #1,scrn$(x%)
			next x%
			close #1

		case 480 to 520				'Load screen
			open "i", 1, "tbscreen.fil"
			for x% = 1 to 25
				input #1,scrn$(x%)
			next x%
			close  #1
			locate 4,1
			for x% = 1 to 13
				print scrn$(x%);
			next x%

		case 528 to 568                    'View screen
			call rat.hide
			call SaveScreen
			cls
			for x% = 1 to 24
				print scrn$(x%);
			next x%
			locate 25,1
			print "Press any key to continue.";
			while not instat:wend
			cls
			call RestoreScreen
			call rat.show

		case 576 to 624				'Clear screen
			for x% = 1 to 25
				scrn$(x%) = string$(80,32)
			next x%
			locate 4,1
			for x% = 1 to 13
				print scrn$(x%);
			next x%

		end select
	end if
loop while not instat

goto finish

'********************************** sub-routines *****************************

place.character:
	if row% > 120 then return second.loop
	locate (row%+8)/8,c%
	call rat.hide
	print chr$(char.selected%);
	call rat.show
	mid$(scrn$(r%),c%,1) = chr$(char.selected%)
return

scroll.up:
	if bl% = 25 then beep:delay 1:return
	call rat.hide
	call scroll(1,4,1,16,80,7,-1)
	incr tl%
	incr bl%
	locate 16,1
	print scrn$(bl%);
	call rat.show
	delay .1						' You may want to change this delay
return							' or even remove it

scroll.down:
	if tl% = 1 then beep:delay 1:return
	call rat.hide
	call scroll(1,4,1,16,80,7,0)
	decr tl%
	decr bl%
	locate 4,1
	print scrn$(tl%);
	call rat.show
	delay .1						' Same here
return

text:
	locate 25,1
	print "Position cursor and type.   Press Esc to exit.";

	call rat.min.max.vert(24,120)
	call rat.min.max.horz( 0,632)

	do
		while not instat
			call rat.pos.but(b%,row%,col%)
			r% = ((row% + l% ) / 8) + (tl% - 1)
			c% = (col% + 8 ) / 8
			locate 2,9
			print using "###";r%;
			locate ,21
			print using "###";c%;
		wend
		txt$ = inkey$
		if txt$ = chr$(27) then
			char.selected% = 32
			call rat.min.max.vert(24,176)
			return
		end if
		locate (row% + 8) / 8,(col% + 8) / 8
		call rat.hide
		print txt$;
		mid$(scrn$(r%),c%,1) = txt$
		call rat.move(row%,col%+8)
		call rat.show
	loop
return

setup:
dim scrn$(1:25)
'─────────────────────────────────────────────────────────────┐ Set up a
screenbuffer$ = string$(4000,32)                             '│ string to
screenbufferseg& = strseg(screenbuffer$)                     '│hold the video
screenbufferofs& = strptr(screenbuffer$)                     '│buffer and get
screenbufferabs& = screenbufferseg& * 16 + screenbufferofs&  '│20 bit address
'─────────────────────────────────────────────────────────────┘ of string
for x% = 1 to 25
	scrn$(x%) = string$(80,32)
next x%

l% = -16
tl% = 1
bl% = 13
return

finish:
	while instat:ans$ = inkey$:wend
	select case ans$
		case chr$(27)				' If Esc key is pressed
			call rat.hide
			cls
			end
		case chr$(0)+chr$(59)		' If F1 key is pressed ( HELP )
			call rat.hide
			call SaveScreen
			call Help
			cls
			call RestoreScreen
			call rat.show
			goto skip
		case chr$(0)+chr$(72)		' Alternate scroll down
			gosub scroll.down
			goto skip
		case chr$(0)+chr$(80)		' Alternate scroll up
			gosub scroll.up
			goto skip
	end select
goto skip
'*****************************************************************************

sub MainScreen
cls
color 15,1,1

print "┌─────┬─────┬─────┬─────┬────────────────────────────────────────────────┬─┬─┬─┐";
print "│ Row │     │ Col │     │   SCREEN BUILDER                               │L│M│R│";
print "└─────┴─────┴─────┴─────┴────────────────────────────────────────────────┴─┴─┴─┘";
locate 17,1
color 0,7
print "┌────────────────────────────────────────────────────┬─────────────────────────┐";
print "│ ┌  ┬  ┐   ╒  ╤  ╕   ╓  ╥  ╖     ╔  ╦  ╗    ░  ▒  ▓ │ Save  Load  View  Clear │";
print "│                                                    ├─────────────────────────┤";
print "│ ├  ┼  ┤ │ ╞  ╪  ╡   ╟  ╫  ╢  ║  ╠  ╬  ╣    █  ▄  ▌ │ Written by:             │";
print "│         │                    ║                     │ John T. Watts           │";
print "│ └  ┴  ┘   ╘  ╧  ╛   ╙  ╨  ╜     ╚  ╩  ╝    ▐  ▀  ■ │ 2027 Saturn Dr.         │";
print "│   ───       ═══       TEXT        ═══              │ Bastrop, La. 71220      │";
print "└────────────────────────────────────────────────────┴─────────────────────────┘";
end sub

'rat.init(mouse%,button%)

'rat.show

'rat.hide

'rat.pos.but(but.status%,row%,col%)

'rat.move(row%,col%)

'rat.move(row%,col%)

'rat.min.max.horz(min%,max%)

'rat.min.max.vert(min%,max%)



sub rat.init(mouse%,button%)
	reg 1,&h3533					' Make DOS call to see if mouse driver
	call interrupt &h21				' is installed

	if reg(9) and reg(2) then		' YES
		mouse% = -1
	else							' NO
		mouse% = 0
		exit sub
	end if

	reg 1,0						' From now on you can talk to the mouse
	call interrupt &h33				' by loading reg 1 (REG AX) with the
	mouse% = reg(1)				' mouse function and making a call to
	button% = reg(2)				' the mouse driver (interrupt &h33).
end sub							' Function 0 initilizes and returns
								' the number of buttons on the mouse.

sub rat.show                            ' Function 1 unhides the cursor
	reg 1,1
	call interrupt &H33
end sub

sub rat.hide						' Function 2 hides the cursor
	reg 1,2
	call interrupt &h33
end sub

sub rat.pos.but(but.status%,row%,col%)	' Function 3 tells you if a button
	reg 1,3						' is down and where the cursor is
	call interrupt &h33
	but.status% = reg(2)
	col% = reg(3)
	row% = reg(4)
end sub

sub rat.move(row%,col%)				' Function 4 will relocate the cursor
	reg 1,4
	reg 3,col%
	reg 4,row%
	call interrupt &h33
end sub

sub rat.min.max.horz(hmin%,hmax%)		' Function 7 sets horizonal boundries.
	reg 1,7						' The cursor will be restricted to
	reg 3,hmin%					' the boundries set here. RIGHT/LEFT
	reg 4,hmax%
	call interrupt &h33
end sub

sub rat.min.max.vert(vmin%,vmax%)		' Function 8 sets vertical boundries.
	reg 1,8						' Same as above except UP/DOWN
	reg 3,vmin%
	reg 4,vmax%
	call interrupt &h33
end sub

'───────────────────────────────────────────────────────────────────────────┐
' The following routine allows you to scroll the screen up and down.		 │
' This is another example of the power of PowerBasic.  To easily make Dos   │
' calls gives the PowerBasic programer easy access to all DOS functions.	 │
'───────────────────────────────────────────────────────────────────────────┘


'L%  = Number of lines to scroll ( usually set to one )
'TR% = Top row of scrolling area
'LC% = Left column of scrolling area
'BR% = Bottom row of scrolling area
'RC% = Right column of scrolling area
'A%  = Attribute of characters on blank line
'UP% = -1 if you want to scroll up    0 to scroll down

SUB SCROLL (L%,TR%,LC%,BR%,RC%,A%,UP%)
LOCAL UD%
    %AX = 1
    %BX = 2
    %CX = 3
    %DX = 4
    %H  = 256

    IF UP% THEN UD% = 6 : ELSE UD% = 7

    REG %AX, L% + %H * UD%
    REG %BX, A% * %H
    REG %CX, (LC%-1) + %H * (TR%-1)
    REG %DX, (RC%-1) + %H * (BR%-1)

    CALL INTERRUPT &H10

    IF UD% = 6 THEN LOCATE BR%,LC% : ELSE LOCATE TR%,LC%

END SUB

function fVideoMode%
	reg 1,&h0f00
	call interrupt &h10
	fVideoMode% = reg(1) and &b0000000011111111
end function

'───────────────────────────────────────────────────────────────────────────┐
' The following two subs save and restore the screen.  In CGA/EGA/VGA we	 │
' could just change pages, but HERC boards have only one page in test mode. │
' Study these routines to see the power of PowerBasic 2.x.				 │
'───────────────────────────────────────────────────────────────────────────┘

sub SaveScreen
	shared videobufferabs&,screenbufferabs&
	def seg = 0
	poke$ screenbufferabs&, peek$(videobufferabs&,4000)
	def seg
end sub

sub RestoreScreen
	shared videobufferabs&,screenbufferabs&
	def seg = 0
	poke$ videobufferabs&, peek$(screenbufferabs&,4000)
	def seg
end sub

' The following sub displays help

sub Help
	locate 3,1
	Print "┌────────────────────────────────────────────────────────────────┐"
	print "│                             HELP                               │"
	print "│                                                                │"
	print "│ Left Button   - Select and place    Right Button - Scroll up   │"
	print "│ Middle Button - Scroll down(if you haven't up graded from the  │"
	print "│ Micro Soft two button mouse all is not lost, you can use the   │"
	print "│ up and down arrow keys.)                                       │"
	print "│ Button combinations are possible- Place character and scroll   │"
	print "│                                   at the same time-Left & Right│"
	print "│ F1 - gives you this page                                       │"
	print "│ Esc - to exit                                                  │"
	print "│                                                                │"
	print "│ To type text- place cursor on the word TEXT & press left button│"
	print "│               then position cursor where you want the text to  │"
	print "│               be and start typing.                             │"
	print "│                    PRESS ANY KEY TO CONTINUE                   │"
	print "└────────────────────────────────────────────────────────────────┘"
	while not instat:wend
	junk$ = inkey$
end sub
```

## REBOOT.BAS

```bas
$link "rebot.obj"

declare sub reboot()

call reboot

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2636

     Volume in drive A has no label
     Directory of A:\

    PKZ102   EXE    136192  11-14-89  11:07a
    PRSCMD   ZIP      1057   9-18-90   8:02a
    RATS     ZIP      4436   9-18-90   7:46a
    REBOOT   ZIP      1408   9-18-90   7:51a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT      1188   6-27-91   2:25p
    LIBRARY  DOC     30241   6-27-91  11:49a
            7 file(s)     174550 bytes
                          143360 bytes free
