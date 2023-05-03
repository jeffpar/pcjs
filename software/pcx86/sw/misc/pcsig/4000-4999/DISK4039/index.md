---
layout: page
title: "PC-SIG Diskette Library (Disk #4039)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4039/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4039"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #4039 HOME PLAN  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Start, type:  HOMEPLN  (press Enter)                                ║
║                                                                         ║
║  To Print the documentation, type:  COPY HOME25.DOC PRN  (press Enter)  ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HOME25.DOC

{% raw %}
```
	18494 Jesus Maria Rd.
	Mokelumne Hill, CA 95245           (209) 754-4891    CIS 71321,167
	          _______                     
	     ____|__     |               (R)  
	  --|       |    |------------------- 
	    |   ____|__  |  Association of    
	    |  |       |_|  Shareware         
	    |__|   o   |    Professionals     
	  -----|   |   |--------------------- 
	       |___|___|    MEMBER            
	                                      
	"The author of Home Plan is a member of the Association of
	Shareware Professionals (ASP).  ASP wants to make sure that the
	shareware principle works for you. If you are unable to resolve
	a shareware-related problem with an ASP member by contacting the
	member directly, ASP may be able to help. The ASP Ombudsman
	can help you resolve a dispute or problem with an ASP member,
	but does not provide technical support for members' products.
	Please write to the ASP Ombudsman at 545 Grover Road,
	Muskegon, MI 49442 or send a CompuServe message via
	CompuServe Mail to ASP Ombudsman 70007,3536."         
	
      DEFINITION OF SHAREWARE                           
	Shareware distribution gives users a chance to try software before
	buying it. If you try a Shareware program and continue using it, 
	you are expected to register. 
	Copyright laws apply to both Shareware and commercial software.
	Because the overhead is low, prices are low also. Shareware has 
	the ultimate money-back guarantee -- if you don't use the product, 
	you don't pay for it.
	**************************************************
	Home Plan was written on an IBM compatible in Turbo Pascal 6.0
	to draw and print  floor plan type drawings on  9 & 24 PIN dot 
	matrix or HP Laser compatible printers.
	This  program requires a VGA monitor.
	**************************************************
	
      FEATURES INCLUDE:
	Quick and Easy to learn & use
	Automatic dimensioning
	On screen 'odometer' to show horizontal & vertical measurements
	Insertion of pre-drawn furniture & appliances into your drawing
	Undo of the last action 
	Square Ft. Calculation
	Optional showing of framing  (studs, joists etc.)
	Rectangles & circles, Arcs, parallel lines etc.
	Clone previous action
	Deletion of user defined screen portions
	Selectable line styles
	User defined drawing size
	Save & load plans to & from disk
	Adjustable width walls, Automatic Door insertion
	Print at Screen size, or 1/8" per ft. 
	Viewing & Deleting Elements from Plans
	Metric or Ft/Inch drawing modes
	***************************************************
                                              Page 1


                            INDEX



           INSTALLATION ......................  Pg. 3
           SOME HINTS ........................  Pg. 3

           PLAN SIZE ADJUSTMENT...............  Pg. 5
           UNDO...............................  Pg. 5
           CURSOR MOVEMENT....................  Pg. 5
           CURSOR SPEED.......................  Pg. 5
           CURSOR CROSS HAIRS.................  Pg. 5
           DRAW an ARC........................  Pg. 6
           LINE DRAWING.......................  Pg. 6
           LINE ERASING.......................  Pg. 6
           LINE TYPE..........................  Pg. 6
           DRAW RECTANGLE.....................  Pg. 7
           DRAW RECTANGLE with DOUBLE WALL....  Pg. 7
           DRAW RECTANGLE with FRAMING........  Pg. 7
           DRAW CIRCLE........................  Pg. 7
           DRAW CIRCLE with DOUBLE WALL.......  Pg. 7
           DRAW WALLS.........................  Pg. 8
           INSERT TEXT........................  Pg. 8
           CLONE the PREVIOUS COMMAND.........  Pg. 8
           INSERT FIGURES.....................  Pg. 8
           INSERT a DOOR......................  Pg. 9
           DELETE SCREEN PORTION..............  Pg. 9
           AUTOMATIC DIMENSIONING.............  Pg. 9
           SQUARE FOOTAGE CALCULATION.........  Pg. 10
           METRIC MODE Vs USA MODE............  Pg. 10
           TOGGLE AUTO-DIMENSIONS.............  Pg. 11
           ABANDON the CURRENT PLAN...........  Pg. 11
           SAVE a PLAN to DISK................  Pg. 11
           LOAD a PLAN from Disk..............  Pg. 11
           DELETE a FILE from DISK............  Pg. 11
           PRINT the CURRENT PLAN.............  Pg. 12
           PRINT to SCALE ....................  Pg. 12
           VIEWING & PURGING the Plan.........  Pg. 12
           REMOVING ON-SCREEN PROMPTS.........  Pg. 13
           RETURN to OPENING MENU.............  Pg. 13
           LICENSE AGREEMENT..................  Pg. 13
           REGISTRATION INFORMATION...........  Pg. 14
	   INFO on HOME PLAN PRO..............  Pg. 15
           LIST of COMMAND KEYS...............  Pg. 16











                                              Page 2

  HOME PLAN INSTALLATION:
      HARD DISK:
	To install Home Plan to your Hard disk, you should make a 
	HomePlan directory and copy the program files to it.
	Suggested Commands:   
	MD C:\HOME    (This makes a new directory on Drive C )
	COPY A:HOMEPLN.*    C:\HOME
	COPY A:*.PLN     C:\HOME
	(The above two commands will copy the files from drive A to your 
	new directory )
	C:  and then CD\HOME     will move to the new directory.
	HOMEPLN    will run the program.   Substitute drive letters as needed
	
      FLOPPY:
	Home Plan will run from your floppy, if you have enough room
	on it for the printer driver to make a temporary file.
	Some Vendors (to their credit) pack many different programs on their 
	disks. If you see a message "Disk Full" when trying to print, you will
	have to either remove some other files, or copy the Home Plan files to 
	another disk.               I recommend the hard disk, if you have one.
	
	**************************************************
	This was written because I couldn't find a way to do these things
	without using a huge program and two hours of manual reading .
	**************************************************
	
	THIS MANUAL is meant to be a reference manual not a constant
	companion.  Use the Manual if a command gives you trouble.

	I ADVISE you to load the program & start to draw a plan.
	Select the first option from the main menu, press F1 to see a list of
	commands; 'Esc' to make the list go away.
	Just start drawing & using the commands listed while following the
	prompts where applicable.
	FREQUENT use of F1, Undo & Del will fix any mistakes.
	Load one of the sample .PLN files which came with this program and
	modify it. Insert some furniture or appliances into it. 
		
	             See below for some hints then:
	JUST type "HOMEPLN".                              F1 for help.
	( there is a Demonstration Screen option on the Main Menu. This 
	walks you through the line drawing process only.)
	*****************************************************
	

      SOME HINTS:                  F1 = Help:
         To see how a Plan may be formed,   
    TRY THE f10 VIEW/PURGE feature with one of the sample plans loaded. 
	Press <Home> to go to the first drawing element. Then, press <+> 
	to see the plan  re-created one element at a time. 
	(End, PgUp, & PgDn will speed up the process.
   
    The Option Menu allows you to configure the program. Don't be 
        afraid to experiment. Anything changed can be changed back easily.

                                                     Page 3
	COLORS:
	If you have trouble reading the screen on your monitor, try 
	changing the colors. Select the Option Menu from the 
	Opening Menu. Then, select Color Menu from the Option 
	Menu. The Color Menu will let you see the changes as you 
	make them, so try for the best combination.
	

	GET USED to using the '+' & '-' keys to adjust cursor speed. 
        Zipping around your plan sometimes requires speed and sometimes, 
        precision.
	A  'speedometer'  in the lower right corner will tell you how far 
        the cursor will go with each press of the NumberPad keys.
	Watch this change when the + or - keys are pressed.
	Using SHIFT with the NumberPad Keys will slow the cursor to the 
	minimum speed for precision placement.
	The four Arrow keys on 101 keyboards also will move at the 
	minimum speed.
	Move quickly using the NumberPad Keys, adjusted at a brisk pace, and
        hold down the SHIFT key at the end, to place the cursor precisely.
	
        The AUTO-Dimension may appear somewhat less than intuitive. 
        Just try it a few times. (there is always Undo.)
	
	AUTO-DIMENSION will not work on distances less than two ft.(default
	scale) because of inadequate room. You can draw the lines, & use
	Insert Text ('Ins') to enter the appropriate numbers.
	
	SOME operations will cause lines to be partially erased and other
	distortions which will be rectified when the plan is redrawn.
	The plan is frequently redrawn in the normal course of events. If you
	want to force a redrawing, press F1 to bring the command list down,
	then 'Esc' to make it go away & redraw the plan.
	
	When you start serious plan drawing, draw a basic structural outline &
	save it under 'Basic' or some such.
	Now, you can load 'Basic' and do all sorts of things with it, saving
	new versions under new names.
	Many versions can be saved under many names all starting with 
	'Basic' until you settle on one approach.
	
	The PRE-DRAWN furniture & appliances are sized for average sizes 
	of the items depicted. We can't guarantee that your stuff is the same 
	size.

	At scales more than two or at most three times the default, the pre-
	drawn stuff is just too small to use. (it's still available if you
	want to insert a dot in your drawing.)
	

	*******************************************************
	IF you use this SHAREWARE program, please use the "Print 
        Registration Information" option at the Opening Menu. The 
        registration fee is   ($20.00 + 4.00 s&h) .... Credit Cards accepted.
	(THE ADDRESS IS ALSO ON THE  OPENING SCREEN
	******************************************************* 
                                                    Page 4     
     COMMANDS: ( For a Command List & a brief description, press F1 )

                       EDIT Commands:
	
     PLAN SIZE ADJUSTMENT:
	You may adjust the Plan Size when starting a new Plan.
	The on-screen prompts will tell you to press '-' or '+' to adjust the
	size of your new drawing.
	The maximum horizontal & vertical screen dimensions will be shown 
	as you select the optimum scale.
	Once a plan has been started, or retrieved from disk, the Size can
	not be changed.  'Esc' cancels & invokes the Default size
	


     UNDO             'Alt U'
       Mistakes are easy to fix!
       Pressing 'Alt U' will cancel the most recent command and redraw your
       plan without it.
       Successive presses of 'Alt U' will continue to delete the previous
       commands in reverse of the order they were made.
       Caution: Undo cannot be Undone!
       COMMANDS DELETED by Undo must be redone manually as those commands 
       are no longer in memory.


      CURSOR MOVEMENT:
	The cursor is moved by the Numberpad Keys. (if the NumLock is off,
	the program will turn it on while you are drawing)
	Or The Four Arrow keys will move the cursor one pixel at a time.
	The Numberpad keys can move the cursor in 8 directions. in addition,
	Alt-5 or <*> will center the cursor.

	
      CURSOR SPEED:       '+' ... '-'
	The cursor speed is adjusted  with the '+' or '-' keys while in the
	Drawing Mode. Use of SHIFT with the NumberPad keys slows the 
	cursor to the minimum speed for precision placement.
	The distance that the cursor moves each time is shown at the lower
	right corner of the screen.
	Using the Default Scale, the minimum cursor movement is one inch.
	The next press of '+' increases it to 6 inches.
	Subsequent presses of '+' increases movement by 1/2 foot with each
	press.        (The Metric Drawing Mode uses 25mm increments)
	Pressing  '-' reverses the process.
	Selecting a larger scale will cause the cursor movement to increase
	proportionately. (actually, the cursor moves the same, but the
	odometers show larger measurements)


      CURSOR CROSS HAIRS:
	On Start-Up, the Cursor is accompanied by  full-Screen
	Cross Hairs.
	These Cross Hairs may prove very useful. If not, press F5
	to Toggle them on and off.

                                                        Page 5
       DRAW an ARC        'Alt ) or ( '
       Hold down the Alt key & Press one of the Parentheses Keys to draw an
       Arc.
       Follow the prompts to place the cursor at the center of a circle that
       the Arc will come from. Next, place the cursor on one end of the 
       proposed Arc. The arc will come from the circle you see. Follow the 
       prompt to Select the other end of the arc. As soon as you move the 
       cursor, dotted lines will be drawn to show the arc's radii. The cursor
       will continue to move the second  Radius. The closer you get to the 
       Arc's rim, the more precise the movement will be (holding down Shift
       will slow the cursor)  When the Arc is complete, press Enter.
      
       When you select the second end of your Arc, it isn't necessary to put
       the Cursor exactly on the rim. Just run it past the rim & press Enter.
       
       Home Plan doesn't know which of the possible two circle segments you
       want.
       If the Arc shown isn't the one you want, just press TAB to toggle
       between the two arcs & press ENTER when the correct one is showing.

       You now are given a chance to move the Arc with the Cursor Keys, 
       and to rotate either Radius with the F5 thru F8 keys. (Shift will 
       slow F5 thru F8 Also)
       
       Just try it. It's easy. When everything is to your satisfaction, press
       Enter to complete the process.
       'Esc' cancels;   'Alt U' will Undo mistakes.


      LINE DRAWING:          'L'
	Press  'L' to start the drawing process.
	No line is drawn yet, but two 'odometers' will appear at the lower
	left corner of your screen.
	These 'odometers' will show the cursor movement (one vertical; one
	horizontal) in feet & inches.   ( Millimeters in Metric Mode )

	The Absolute line length is shown to the right of the Odometers.

	Press 'L' again, to draw a line between the two points.
	Press 'Esc' to cancel the process without drawing the line. (this
	is a handy way to move to a measured point without drawing a line)
	'Esc' cancels;  'Alt U' will Undo any unwanted lines.
	
	This version supports the use of the 'Enter' key interchangeably 
        with the 'L' key.
	'Esc' cancels;   'Alt U' will Undo mistakes.

      LINE ERASING:         'E'
	The Line Erase command works exactly like the Line Draw command, 
	but you must use the 'E' key to terminate the command.
	

      LINE TYPE:            'space'
	Three types of line are  available for most operations.
	At the bottom center of your screen, is a sample of the current line
	type. Pressing the Space Bar will toggle between these line types.

                                                   Page 6
     DRAW RECTANGLES:       'Alt R'...'R'
       'Alt R' brings an on-screen prompt to place the cursor at one corner
       of the proposed rectangle & then to press 'Enter'.
       When you move the cursor, a rectangle is shown in a dotted line.
       When you have the desired rectangle, press 'R' to permanently draw
       the rectangle. ( 'Enter' works also )
       Rectangles of the appropriate width make nice walls. (see Show
       Framing below)

    DRAW RECTANGLES with DOUBLE WALLS:        'Alt R'...'='
       Terminate the Rectangle Command ('Alt R') with an ' = ' sign instead
       of an 'R" to create a rectangle with a double wall. 

       The "Wall Thickness Menu" appears. Use the Up/Dn Keys to adjust the
       Thickness. Press ENTER to accept the Thickness.

       This can be useful for drawing the exterior perimeter. 
       'Esc' cancels;   'Alt U' will Undo mistakes.


     DRAW RECTANGLES with FRAMING:         'Alt R'... 'F'
       Terminate the Rectangle Command ('Alt R') with an 'F' instead
       of an 'R' to create a Rectangle with two inch framing members 
       spaced on 16" centers.
        In the case of narrow rectangles, such as walls, the end view of
       the wall studs will be shown. In the case of broader rectangles, perhaps
       floors or roofs, the joists or rafters will be shown across the
       shortest dimension of the rectangle.
       This version has no provision to vary the spacing.
       'Esc' cancels;   'Alt U' will Undo mistakes.


     DRAW CIRCLE:              'Alt C'
       'Alt C' brings an on-screen prompt to place the cursor at the center
       of the proposed circle & then to press 'Enter'.
       A small circle will be shown with a prompt to move the rim with the
       cursor.
       Actually, this command draws an Ellipse.
       Moving the cursor vertically and horizontally will vary the ellipse
       radii.
       To draw a circle rather than an oval, keep the two radii equal.
       The NumberPad diagonal keys work fine for that purpose. Also, the
       'odometers' will show both dimensions as you change them.

    DRAW CIRCLE with DOUBLE WALL:     'Alt C'...'='
       Terminate the Circle Command with an ' = ' sign to create a double
       walled circle.
       The "Wall Thickness Menu appears. Use the Up/Dn Arrows to adjust, 
       Press ENTER to draw the circle. 

       'Esc' cancels;   'Alt U' will Undo mistakes.





                                                  Page 7
     DRAW WALLS:           'Alt W'
       This version draws Walls of level or plumb parallel lines.
       The Parallel Line Process is started by pressing Alt W.

       The "Wall Thickness Menu" appears. Use the Up/Dn Keys to adjust the
       Thickness. Press ENTER to accept the Thickness.

       A prompt will appear telling you to move the cursor with the
       NumberPad keys.   (Only the Vertical & Horizontal keys will work)

       Press Enter to draw the lines. Then, move the cursor in a Right Angle
       to the first line. Press Enter again to draw the second Line. The
       Intersection will clean up for a nice corner.
       This function is nice for drawing walls of varying thickness around
       irregular shapes.

       Press Esc to quit the process.
       (It is possible to draw parallel lines at angles other than level &
       plumb, but the corners will not clean up and the thickness may vary.)


      INSERT TEXT:          'Ins'     
	Text may be inserted into the plan by pressing the 'Ins' key, Typing
	the desired text & pressing 'Enter'.
	The text will start at the cursor position and the BackSpace key is
	functional to make corrections before pressing 'Enter'.
	Text entries are limited to 70 characters each entry.
	'Esc' cancels; 'Alt U' will Undo unwanted entries.


    CLONE the PREVIOUS COMMAND:    ' = '
       This POWERFUL command is new to ver 2.5
       Press the '=' Key to Clone.
       The Cursor will jump to the beginning of the previous operation.
       A Prompt asks you to move the Cursor to a new place & press ENTER
       to draw a clone of the previous operation.
       'Esc' cancels; 'Undo' will Undo any mistakes. 


      INSERT FIGURES:       'Alt F'
	'Alt F' will bring up a menu of Pre-Drawn figures of furniture &
	appliances to insert into your plan.
	Select the figure with the NumberPad keys & press enter.
	The selected Figure will appear on your plan at the last cursor
	position.
	You may move the figure using the NumberPad keys & the 'Tab' key 
	will rotate the figure in 90 deg increments.
        Press 'Enter when you have the figure where you want it.
       'Esc' cancels. 'Alt U' will Undo mistakes.







                                                Page 8
     INSERT a DOOR in a Wall:   '/'
       Press the '/' Slash Key to Open the Door.
       The Prompt will ask you to move the cursor to where you want the
       Door HINGE to be. Press Enter.
       
       The next prompt asks you to move the cursor to other edge of
       the Doorway. Press Enter.
       
       Finally, the prompt will ask you to press the ARROW key that 
       points to the direction you want the Door to OPEN.

       The Door will open. 
       Home Plan will show the dimension of the door if there's room.
       The numbers may appear small, but should be readable on printout.
       ESC Cancels. 'ALT U' will undo mistakes.


     DELETE SCREEN PORTION    'Del'
       Move the cursor to one corner of the screen area that you want to
       delete.
       Then press the '"Del" Key.
       A small dotted rectangle will appear with a prompt to size the
       rectangle to cover the area that you want to delete & to press 
       enter. 
       The drawing within the area you defined, will disappear.
       'Esc' cancels;  'Alt U' will Undo mistakes.


     AUTOMATIC DIMENSIONING:  'Alt D'
       Press 'Alt D'. The on-screen prompts will direct you to place the
       cursor where you want the dimension to start & press 'Enter'.

       To find the place where you want the dimension to start, place the
       cursor on one edge of the thing that you want to measure. Then, move
       the cursor to a clear area while keeping it in line with the starting
       point.

       Press 'Enter' and you will be prompted to move the cursor to the other
       end of the thing to be measured.

       The 'odometers' will show the distance moved, & preview the
       dimension that will be printed.
       It isn't necessary to keep the cursor level or plumb. In fact, it is
       easier to actually place the cursor on the line you want to measure to.
       The Dimension line will appear level or plumb depending on whether
       the cursor was moved MOSTLY horizontally or MOSTLY vertically.
       So moving the cursor a short distance at a right angle to the desired
       direction of measurement won't make any difference.
       'Esc' cancels;  'Alt U' will Undo mistakes.







                                                  Page 9

     SQUARE FOOTAGE CALCULATION   '[ or ]'
       Press one of the SQUARE BRACKETS to start the process. You will
       be prompted to place the Cursor at one corner of an area to be
       calculated. Then, press ENTER.

       Next, drag the dotted line with the NumberPad keys to cover the
       desired area, & press ENTER again. The area will be covered by a grid
       & the square footage will appear at the lower left corner of the screen.
       Do this as many times as you want, a running total is kept at the lower
       left corner of the screen.
       Press Esc to quit & make the grid go away. The running total will stay
       in the lower left corner until you start another operation.
       Use Insert Text if you want to get the total on the plan before it
       disappears.


     METRIC MODE Vs USA MODE:    'Item 2.' (Option Menu)
       This version supports the drawing of plans in either the Metric System
       (mm), or the USA System. (Ft/Inches)

       Item 2. on the Option Menu toggles between the two modes.

       Most people will probably draw in one mode or the other without
       changing this  option.

       If you do use both modes, you should know that each mode uses a 
       different scale.  In the Metric Mode, the cursor moves in multiples
       of 25 mm.
       In the USA mode, the cursor moves in multiples of 1 inch (25.4 mm).

       If you draw and save a plan in one mode, and load it in the other, any
       Auto Dimensions in the plan will differ from what they were
       originally.

       This is the difference between 25mm and 25.4mm (1 Inch),  or 01.6%.

       1.6% might not seem like a huge difference, but it could make a big
       difference to your contractor when your plan changes by six inches
       or so.
       You will be warned if you try to load a plan into the wrong mode. If
       you don't care, you may go ahead and load it. (If you save it in the
       new mode, it will load without the warning from then on).

       Understand, that the drawing itself does not change, only the
       Auto-Dimensions change.
       Since the new Auto-Dimensions will be in a different format, one
       might not notice the difference...... UNLESS one used the F9
       function. (see below)







                                                     Page 10

     TOGGLE AUTO-DIMENSIONS        'F9'
       The Auto-Dimensions on a plan will switch between the USA system
       (Ft/Inch) and the Metric system (mm) when the F9 key is pressed.

       The Drawing Scale does not change, the Odometers & Cursor Speed
       do not change.
       Nothing changes except the numbers created by the Auto-Dimension
       process. They will change back with the next press of F9.

       This is an opportunity to compare Metric and USA equivalence.


    FILE COMMANDS:

     ABANDON the CURRENT PLAN         'Alt A'
       Pressing 'Alt A' will prompt you to save the current plan and then
       allow you to select a Scale for a new plan.
       'Esc' cancels.

     SAVE a PLAN to DISK             'Alt S'
       Pressing 'Alt S' will show you a list of .PLN files in the current
       directory, and ask you for a name for the file you want to save.
       If the name you type already exists, you will be asked if you want to
       overwrite it. If not, type in another name.
       It is not necessary to type the file name extension. If you type a
       period (.) or press 'Enter' it will be assumed the file name is
       complete.
       You will be returned to the current plan.
       ( This version  provides cursor selectable file names )

     LOAD a PLAN from Disk             'Alt L'
       If this command is invoked while a plan is current, you will be
       prompted to save it before loading another. Just follow the prompts.
       Pressing 'Alt L' will show you a list of .PLN files in the current
       directory, and ask you for the name of the file to load.
       If the name that you type doesn't exist, you will be so informed. Type
       in a name that does exist.
       It is not necessary to type the file name extension. If you type a
       period (.) or press 'Enter' it will be assumed the file name is
       complete.
       ( This version  provides cursor selectable file names )

     DELETE a FILE from DISK       'Ctrl D'
       Unused & unwanted .PLN files tend to pile up, wasting disk space and
       filling up the File List window.
       Pressing 'Ctrl D' will show you a list of .PLN files and ask for the
       name of the file to Delete from disk.
       If the name you type doesn't exist, you will be so notified. Re-type
       the name.
       You will be asked to verify the file to Delete. Answer Y or N.
       Caution: This program cannot bring back files deleted from disk!
       We recommend that you first load the file and make sure that you
       don't want it before deleting it.
       ( This version  provides cursor selectable file names )

                                                    Page 11
   PRINT the CURRENT PLAN           'Alt P'
         Press 'Alt P' to print the current plan.

     PRINT to SCALE:    
 
       Item 1. "FULL SIZE" is the default.

       Item 2. "1/8" per ft." (at the default size; Actual distance per ft 
       varies inversely  with the drawing size)
       Use Item 2.  when you want to be able to pull dimensions off the plan 
       with a rule.
       This scale is also handy for enlarging 100% to get a 1/4" per ft. scale
       (you will need a copier for that)
       "Full Size" fills the paper & looks like what you drew. APPROX
       1/5" per ft.       (Wide Carriage printers will print at 1/4" per Ft)

     PRINT the CURRENT PLAN:
      If your printer is off line, out of paper, turned off, or some other
       mysterious malady occurs, you will be so notified. Fix the problem &
       press 'Enter' as per the prompt, or press 'Esc' to cancel.
       
       This version supports 24 pin & 9 pin dot matrix & compatibles as well
       as  HP Laser Jet compatibles.

       After selecting the print scale, you will be shown the current selected
       printer configuration and asked to confirm it. Press 'N' to change the 
       printer options.  You should only have to do this once.
       Laser Jet compatibles can choose between 75 dpi and 150 dpi.

             All printers are not alike! If yours doesn't print to the proper
        scale, All is Not Lost!
      Item 3:  "Adjust the scale to your printer" allows you to print to scale.
        NOTE: In most cases, this will NOT be necessary.
        Unless your printouts are not to scale, or squares are not square, 
        you do NOT need this option.
        If you decide to adjust the print scales, then select this option & 
        follow the prompts carefully.


     VIEWING & PURGING the Plan:   'Ctrl F10'
       There may be reasons for you to delete elements from a plan.
       HomePlan supports a large number of elements in each plan, However,
        it is theoretically possible to exceed that limit in a complex plan, by
       many repeated overdrawings & erasures.
       Removal of duplications will reduce the size of a plan.
       Or, you may want to delete an element after it is too late to use Undo.

       Therefore:
       In the drawing screen & with a plan loaded, Press < Ctrl   F10 >
       to show the plan and list the number of plan elements in the lower
       left corner of the screen. ( where the "odometers" are normally shown )
       Press < Home > to show the first plan element.
       Press < End >  to again show the complete plan.
       Press < + > and < - >  to step through the plan element by
       element.


                                                     Page 12       
       Press <PgUp> and <PgDn> to step through the plan ten elements
       at a time.

       Press < Del > to delete the last element displayed.

       Press <Esc >  to terminate the process.
       *******************************************************
       CAUTION:  SAVE the Plan before deleting plan elements!
       *******************************************************

      PURGING HINTS:
       It is easy to ruin a plan by deleting the wrong elements by mistake, so
       Save the plan first.

       It is easier to determine the element that will be deleted, if you are
       stepping forward through the plan, rather that backwards.

       If you wish to delete an element which was later erased during
       drawing, find the erasing element first. Delete it. Then go back and
       delete the drawn element.
       It is hard to find an erasure when you have already deleted the element
       which was erased!


     REMOVING ON-SCREEN PROMPTS:      'Ctrl BkSpc'
       Usually, the On Screen prompts for drawing operations do not
       interfere unduly with the operation.
       Sometimes, however, a prompt will obscure the exact part of the plan
       that you want to alter.
       Press Esc to go back to the drawing board, Then press
       Ctrl-BackSpace to hide the On-Screen prompts until Ctrl-BackSpace
       is pressed once again.
       Ctrl-BackSpace only operates from the drawing board, and toggles the
       prompts on & off.
       NOTE: The On Screen prompts are useful. Even if you are an
       experienced user, it is sometimes difficult to remember what you are
       doing without the prompts
       I recommend leaving the prompts on unless absolutely necessary, and
       then turning them back on as soon as the operation is done.


    RETURN to OPENING MENU:      'Ctrl Home'
	From the Drawing Screen, Hold down the Ctrl key and press 'Home'
        to go to the Opening Menu.     You will be prompted to either 
        save or abandon the current screen.


     LICENSE AGREEMENT:
       Shareware distribution gives users a chance to try software before
       buying it. If you try a Shareware program and continue using it, you
       are expected to register. Copyright laws apply to both Shareware and
       commercial software.
       The main difference is in the method of distribution.
       This author specifically grants the right to copy and distribute the
       software to all and sundry.

                                                  Page 13
       DISCLAIMER - AGREEMENT
       Users of HOME PLAN must accept this disclaimer of warranty:
       "HOME PLAN is supplied as is.  The author disclaims all warranties,
       expressed or implied, including, without limitation, the warranties of
       merchantability and of fitness for any purpose. The author assumes no
       liability for damages, direct or consequential, which may result from
       the use of HOME PLAN."
       HOME PLAN is a "shareware program" and is provided at no charge
       to the user for evaluation. Feel free to share it with your friends, but
       please do not give it away altered or as part of another system.
       The essence of "user-supported" software is to provide personal
       computer users with quality software without high prices, and yet to
       provide incentive for programmers to continue to develop new
       products.

       IF you find that you are using HOME PLAN and continue to use it
       after a reasonable trial period, you must make a registration payment
       of $20.00 + 4.00 s&h to CHUCK HERNDON.

       The $20.00 registration fee will license one copy for use on any one
       computer at any one time.
       Anyone distributing HOME PLAN for any kind of remuneration must
       first contact CHUCK HERNDON at the address below for authorization.

       This authorization will be automatically granted to shareware
       distributors, and such distributors may begin offering HOME PLAN
       immediately.
       (However CHUCK HERNDON must still be advised so that the
       distributor can be kept up-to-date with the latest version of 
       HOME PLAN).

       You are encouraged to pass a copy of HOME PLAN along to your
       friends for evaluation.  Please encourage them to register their copy
       if they find that they can use it.  All registered users will receive
       a copy of the latest maintenance version of the HOME PLAN system.


     Use the "Print Registration Information option at the Opening Menu.
       Then send  $20.00 + 4.00 s&h to:
       CHUCK HERNDON
       18494 Jesus Maria Rd.
       Mokelumne Hill, CA 95245
       for:
             1. New Registered version,
             2. Printed manual
             3. FREE registered copy of AMORTIZE.EXE, a fast & easy way
              to calculate mortgage Balances, Payments, Loan duration, 
              Principal and Interest. 
             ( Amortize.Exe also prints amortization schedules )
             4. FREE utility to convert your Home Plan plans to a PCX file.
	(PCX files can be imported into many word processors, etc.
             5. CompuServe will send you a FREE sign up kit & $25.00 usage
	credit when you call them with your Home Plan authorization.



                                                  Page 14
                   Announcing the release of 
                       HOME PLAN PRO!

	The form produced by the "Print Registration Info"
	on the Main Menu will explain how to get Home Plan's
	new retail program Home Plan Pro.

	Home Plan Pro is a new entry in the "simplified CAD"
	market.
	Designed to retain the ease of use of its predecessors,
	Home Plan Pro adds powerful new features for drawing
	house plans.

	Home Plan Pro will work from the keyboard, from a
	Microsoft compatible mouse, or any combination.

	32 buttons on the Tool Bar bring commands a mouse click
        away, or can be accessed from the Keyboard.

	The 1" per pixel "default" drawing size is increased
	from 53' x 39' to 96' x 78'.
	This is accomplished by "sliding" the plan over four
	screens.

	The printout sizes are increased by sizing the actual
	drawing to the paper rather than the entire screen.
	Home Plan Pro also draws on multiple continuous 
	sheets of narrow or wide carriage paper.

	Home Plan Pro uses a graphic screen to let you click
	on the paper of your choice, select portrait or landscape
	modes, and select any scale just by clicking a mouse.

	Different text sizes, PCX file conversion, and many 
	other features are available from the Tool Bar.


	Final release is scheduled for June, 1993.

	Purchasers may now buy the Pre-Release version.
	You will receive the Pre-Release version, and a
	 prototype manual for $39.00 (+4.00 s&h)
	
	On final release, you will get the entire package 
	free.    (APPROX 6/15/93)


	The  Pre-Release  sells for $39.00 (+4.00 s&h)

	Home Plan ver 2.5 Registers for $20.00 (+4.00 s&h)

	See the Registration and order information by 
	selecting menu Item 5 from the Main Menu.


                                               Pg 15






     LIST of COMMAND KEYS:




       NUMBERPAD / ARROW KEYS............Move the Cursor:
       SHIFT ............................Slows the Cursor.
       'L' or ENTER .....................Toggle Line Draw.
       'E' ..............................Toggle Erase Line.
       '*' ............................. Center the Cursor.
       '=' ..............................Clone the last Command.
       '[' or ']' .......................Calculate Square Footage.
       '/' ..............................Insert a Door into a wall.
       ESC ..............................Cancel Drawing Modes.
       DEL ..............................Delete Screen Portion.
       INS ..............................Insert Text.
       ALT A ............................Abandon Current Plan
       ALT C ............................Circle Function.
       ALT D ............................Automatic Dimension.
       ALT F ............................Insert a Pre-Drawn Figure.
       ALT L ............................Load a Plan from Disk
       ALT P ............................Print the Current Plan
       ALT R + R.........................Rectangle Function.
       ALT R + = ........................Double Wall Rectangle
       ALT R + F ........................Rectangle w/ Framing
       ALT S ............................Save a Plan to Disk
       ALT U ............................UNDO last action
       ALT X ............................Exit the Drawiong Screen
       ALT W ............................Draw double line Walls.
       CTRL HOME ........................Go to Opening Menu
       CTRL BKSPC .......................Toggle Drawing Prompts
       CTRL F10 .........................View/Purge Current Plan
       SPACE BAR ........................Select Line Type
       F9  ..............................Toggle Metric/USA Dimensions


       Thank you for using Home Plan.











                                                 Page 16
```
{% endraw %}

## PROINFO.TXT

{% raw %}
```
                   Announcing the release of 
                       HOME PLAN PRO!

Home Plan Pro is a new entry in the "simplified CAD" market.
Designed to retain the ease of use of its predecessors, 
Home Plan Pro adds powerful new features for drawing house 
plans.

MICROSOFT MOUSE COMPATIBLE:
Home Plan Pro will work from the keyboard, from a 
Microsoft compatible mouse, or any combination.

TOOL BAR:
32 buttons on the Tool Bar bring almost all commands a mouse 
click (or key click) away.

INCREASED DRAWING SIZE:
The 1" per pixel "default" drawing size is increased 
from 53' x 39' to 96' x 78'.
This is accomplished by "sliding" the plan over four screens.

LARGER PRINTOUT SCALES:
The printout sizes are increased by sizing the actual 
drawing to the paper rather than the entire screen.
Home Plan Pro also draws on multiple continuous sheets 
of narrow or wide carriage paper.

GRAPHIC PRINTER OPTION ROUTINE:
Home Plan Pro uses a graphic screen to let you click on the 
paper of your choice, select portrait or landscape modes, 
and select any scale just by clicking a mouse.

MANY ADDED FEATURES:
Different text sizes, PCX file conversion, and many other 
features are available from the Tool Bar.

Final release is scheduled for June, 1993.

PRE RELEASE AVAILABLE NOW:
Purchasers may now buy the Pre-Release version.
You will receive the Pre-Release version, and a prototype 
manual for $39.00 (+4.00 s&h)

On final release, you will get the entire package free.
(APPROX 6/15/93)


The  Pre-Release  sells for $39.00 (+4.00 s&h)

Home Plan ver 2.5 Registers for $20.00 (+4.00 s&h)


```
{% endraw %}

## READ1ST.TXT

{% raw %}
```
If you are reading this, you have un-archived the
HOME PLAN archive.

The files included in that archive should be:
Read1st	.Txt	This file.
HomePln	.EXE	The executable file.
HomePln	.Doc	The program manual.
*	.Pln	Sample Plans.
Vendor	.Doc	Description & Authorization for vendors.
File_ID	.DIZ	Description for BBS's.

If you pass this program on to any one, (Please do!)
You must include ALL the above files! (the original
ZIP file would be nice)

If you are an end user, however, all you need on your
hard disk (or floppy), is HomePln.exe. & any .PLN files
that you create. (a sample ".PLN " file is included
to start on)

If you don't copy HomePln.Doc to your program
directory, then you should print that file. 
ie: copy HOMEPLN.DOC PRN

Use the "Print Registration Information" option at the Opening
Menu. For $20.00 + $4.00 s&h, you will receive a nice printed 
Manual. (along with tech support & removal of that
nice opening screen) & some other goodies.
CREDIT CARD ordering:  To order by MasterCard, Visa, American Express,
or Discover, call the Public (software) Library at:
1-800-2424-PsL. (No Tech support there)

Or, register via Compuserve's Shareware Registration Service.
(Registration ID: 388)

Thanks for your interest in HOME PLAN.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
HOME PLAN is by:          CHUCK HERNDON              
                       18494 Jesus Maria Rd.                          
                      Mokelumne Hill, CA 95245
                   (209) 754-4891  CIS 71321,167
          _______                      
     ____|__     |               (R)   
  --|       |    |-------------------  
    |   ____|__  |  Association of     
    |  |       |_|  Shareware          
    |__|   o   |    Professionals      
  -----|   |   |---------------------  
       |___|___|    MEMBER             
**********************************************************************
HOME PLAN was written on an IBM compatible in Turbo
Pascal 6.0 to draw and print floor plan type drawings on 9 pin, 
24 pin Dot Matrix & HP laser compatible printers.

In order to provide adequate resolution and aspect ratio, this program
requires a VGA monitor.

Shareware $ 20.00
*********************************************************************
v 2.5 Features include:
NEW: Metric or Ft/Inch Modes
NEW: CLONE the last Command
NEW: Arcs
NEW: Doors
NEW: Walls
NEW: Wide Carriage Printers

Quick and Easy to learn & use
Automatic dimensioning
On screen 'odometer' to show horizontal & vertical measurements
Insertion of pre-drawn furniture & appliances into your drawing
Adjustable cursor speed
Undo of the last action 
Square Ft. Calculation
Optional showing of framing  (studs, joists etc)
Rectangles & circles etc
Deletion of user defined screen portions
Selectable line styles
User defined scale
Saving & loading plans to & from disk
Deleting plans from disk
Print at Screen size, or 1/8" per ft. 
Viewing & Deleting Elements from Plans
*******************************************************
Short Description:
Draw & print house plans. Most printers, VGA.  Lots of features. A.S.P
*******************************************************
DISTRIBUTION AUTHORIZATION:
Home Plan has a simple distribution policy: You have permission to
distribute our shareware in its original form as long as you:
1.   identify it as shareware (with an appropriate definition)
2.   leave all intellectual property (copyright) notices in place
3.   and as long as we do not request that you stop.
4.   That's it.
We want the widest possible distribution, and don't want to stand 
in your way so long as you are honest with our mutual customer.

Individuals  are encouraged to pass a copy of HOMEPLAN along to
your friends for evaluation.  Please encourage them to register their
copy if they find that they can use it.
All registered users will receive a Laser printed Manual, Tech support
& latest maintenance Version

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4039

     Volume in drive A has no label
     Directory of A:\

    COTTAGE  PLN      8798   4-01-93   2:50a
    FILE_ID  DIZ       462   4-01-93   2:50a
    HOME25   DOC     39929   4-01-93   2:50a
    HOMEPLN  EXE     99207   4-01-93   2:50p
    PLAN1    PLN     17347   4-01-93   2:50a
    PLN2     PLN     18509   4-01-93   2:50a
    PROINFO  TXT      1651   4-01-93   2:50a
    RANCH    PLN     47310   4-01-93   2:50a
    RANCHREL PLN     23157   4-01-93   2:50a
    READ1ST  TXT      1284   4-01-93   2:50a
    REGISTER UK       2042   4-01-93   2:50a
    VENDOR   DOC      2688   4-01-93   2:50a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847   9-09-93  10:03a
           14 file(s)     263262 bytes
                           53248 bytes free
