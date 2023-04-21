---
layout: page
title: "PC-SIG Diskette Library (Disk #3244)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3244/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3244"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CG-MAN.DOC

{% raw %}
```
                       CONTENTS

                                                         Page

INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . .  1

USING THE MOUSE . . . . . . . . . . . . . . . . . . . . .  2

CHOOSING AN OPTION  . . . . . . . . . . . . . . . . . . .  2

CHOOSING A COLOR  . . . . . . . . . . . . . . . . . . . .  2
 
THE DRAW OPTIONS  . . . . . . . . . . . . . . . . . . . .  3
  LINE  . . . . . . . . . . . . . . . . . . . . . . . . .  3
  BOX   . . . . . . . . . . . . . . . . . . . . . . . . .  3
  CIRCLE  . . . . . . . . . . . . . . . . . . . . . . . .  4
  MACRO   . . . . . . . . . . . . . . . . . . . . . . . .  4
    CHOOSE A PROGRAMMED MACRO . . . . . . . . . . . . . .  4
    CHOOSE A USER-DEFINED MACRO . . . . . . . . . . . . .  5
    STORE EXISTING DRAWING AS MACRO . . . . . . . . . . .  5
  PAINT . . . . . . . . . . . . . . . . . . . . . . . . .  5
  TEXT  . . . . . . . . . . . . . . . . . . . . . . . . .  6
  CLOAK . . . . . . . . . . . . . . . . . . . . . . . . .  6

GRAPHICS FUNCTIONS  . . . . . . . . . . . . . . . . . . .  7
  CLEAR . . . . . . . . . . . . . . . . . . . . . . . . .  7
  DELETE  . . . . . . . . . . . . . . . . . . . . . . . .  7
  ANIMATE MARK  . . . . . . . . . . . . . . . . . . . . .  7
  ANIMATE . . . . . . . . . . . . . . . . . . . . . . . .  8
  FILE  . . . . . . . . . . . . . . . . . . . . . . . . .  8
    STORE . . . . . . . . . . . . . . . . . . . . . . . .  8
    GET . . . . . . . . . . . . . . . . . . . . . . . . .  8
    EXPORT  . . . . . . . . . . . . . . . . . . . . . . .  9
    SEE DIRECTORY . . . . . . . . . . . . . . . . . . . .  9
    CHANGE DIRECTORY  . . . . . . . . . . . . . . . . . .  9

CLOAKING AND ANIMATING  . . . . . . . . . . . . . . . . .  9

PRINTING  . . . . . . . . . . . . . . . . . . . . . . . . 10

DR. MOTES' COLORBOOK  . . . . . . . . . . . . . . . . . . 11

FINAL COMMENTS  . . . . . . . . . . . . . . . . . . . . . 12


                   
                   CHILDREN'S GRAPHICS
                       Version 4.0



INTRODUCTION
Although anyone may find it useful, this graphics program was
designed especially for children.  With this software your
child can draw lines, circles, boxes, text, or other figures
we call macros.  You can create your own macros or choose one
of the macros that is programmed or built into the software. 
The programmed macros can be drawn in one of four sizes --
small, medium, large, and extra large.  When the drawings are
complete your child can color-in the drawings by painting
them with a choice of 16 colors.

By placing animation marks in the drawings at strategic
locations you can also animate your drawings.  This is a
little more complicated and may require parent's assistance.

This software comes with some example drawings.  Some of
these drawings are already painted and animated for
demonstration purposes.  These are listed as DRAW1C.CGP,
DRAW2C.CGP, DRAW3C.CGP, and so on.  Others are just line
drawings which your child can paint.  These are listed as
DRAW1.CGP, DRAW2.CGP, etc.  Think of them as pages in a
coloring book.  You may load these files using the FILE
option.

DRAW2C.CGP is an animated cartoon that clearly demonstrates
the animation capabilities of this software.  To see this
file in action just load it using the FILE option then click
on the ANIMATE option. 

One of the most powerful features of this graphics package is
its macro capability.  You can make a drawing, store it as a
user-defined macro then recall it and place it in your
drawings anywhere you want and as many times as you want. 
You will find some user-defined macros on the disk that have
already been created for you.  These can be recalled through
the MACRO option.


                        -1-
                                 
All options are shown on the screen during operation.  The
top row contains what we call functions.  These are: CLEAR,
DELETE, MARK, ANIMATE, and FILE.  The second row contains the
draw options.  These are: LINE, BOX, CIRCLE, MACRO, PAINT,
TEXT and CLOAK.  The bottom row contains the color choices. 
To choose any function, draw option, or color simply place
the mouse cursor on it and click the left mouse button.

The following paragraphs describe the operation of this
program in detail.




USING THE MOUSE
You must use the mouse to select options and move the cursor. 
The left button is used in place of the return key to accept
or answer yes.  The right button is used in place of the ESC
key or to answer no.  You may use the right button or the ESC
key to escape from most options before completing them.  This
software requires a mouse.




CHOOSING AN OPTION
You must use the mouse to choose options.  To select an
option just move the mouse until the point of the cursor
arrow is on the option you want then press the left button.




CHOOSING A COLOR
We'll cover the options and functions in reverse order
starting from the bottom and working up.

At the bottom you'll see all the color choices.  You'll
notice that one has a check mark on it.  The check mark shows
you which color is currently chosen.  To select another color
move the mouse cursor to the color and press the left mouse
button.  The check mark will move to your new color choice
and will not change until you select another color.



                        -2-
                                 
All your drawings and paints use the color you select.  One
thing you must remember is that paint always flows until it
reaches black.  So, if you want to color a drawing you must
draw it with black paint.




THE DRAW OPTIONS
Now lets learn about the draw options such as LINE, BOX,
CIRCLE, MACRO, PAINT, TEXT and CLOAK.  To select one of these
options place the mouse cursor on one then press the left
mouse button.  When a draw option is selected it will change
to red so you'll always know which option is currently in
effect.  That option will stay in effect until you choose
another.


LINE
Use this draw option to draw a line between any two points in
the drawing box.  If LINE hasn't already been selected
(indicated by a red color) then select it using the mouse. 
Now, move the cursor to where you want the line to start and
press the left button.  Don't release it yet.  Now move to
where you want the end of the line and release the button. 
The line will be drawn using the color you selected earlier. 

Remember, if you want to paint your drawing you'll need to
draw it with the color black.

You'll find colored lines useful when you want to hide
unwanted lines.  For example, when you place a macro in an
existing drawing, the lines in the macro and existing drawing
will overlap.  You can remove these lines by drawing over
them with lines which are the same color as the background. 



BOX
Use this option to draw a box.  After you select BOX, move
the cursor to where you want one corner of the box then press
the left mouse button.  Without releasing the button move to



                        -3-
                                 
where you want the other corner of the box and release the
mouse button.  It doesn't matter which corner you start with.


CIRCLE
Use this option to draw circles.  Verify that CIRCLE has been
selected from the Draw Option line then move the mouse cursor
to where you want the center of the circle to be.  Press the
left mouse button.  While holding the button down, move the
mouse to enlarge the circle to your desired size then release
the mouse button.  The circle will be drawn in your selected
color.


MACRO
Macro refers to a command that draws a complex figure for you
automatically --- a house for example.  Choose this option
and you'll see a list of three Macro options to choose from. 
These options are CHOOSE A PROGRAMMED MACRO, CHOOSE A USER-
DEFINED MACRO, and STORE EXISTING DRAWING AS MACRO. 
Programmed macros are those that are programmed into the
software and cannot be changed.  The user-defined macros are
those that you can create and delete.  These are stored as
macro files on your disk.  The third option allows you to
store one of your drawings as a macro file.

Options can be selected from this Macro Menu by using either
the keyboard or the mouse.  To use the keyboard, use the up
and down arrow keys to highlight the options you want then
press ENTER.  To use a mouse, move the mouse up or down to
highlight the option you want then press the left button.

CHOOSE A PROGRAMMED MACRO
If you choose to select a programmed macro another menu will
be shown with a list of macros to choose from.  Select a
programmed macro by highlighting the desired macro using the
technique described above then press ENTER or the left mouse
button.  Next, you must choose a size from another list. 
Your choices are: SMALL, MED, LARGE, and EXTRA LARGE. 
Finally, move the cursor to where you want the macro drawn
then press the left mouse button.  The programmed macro will
be drawn with the size and location you have selected.  It
will also be drawn in your selected color.



                        -4-
                                 
CHOOSE A USER-DEFINED MACRO
The USER-DEFINED MACRO option allows you to place a
previously designed macro into your current drawing.  When
you choose this option, you'll be shown a list of these
macros to choose from.  Highlight the desired macro using the
arrow keys or the mouse then press ENTER or the left mouse
button.  Next, select a location for it to be drawn.  Do this
by placing the cursor over the desired location then pressing
the left mouse button.

The user-defined macro will be drawn exactly like it was
drawn when you stored it.  If it was black when it was stored
it will be black when it is drawn again regardless of which
color you have currently selected.

STORE EXISTING DRAWING AS MACRO
The STORE EXISTING DRAWING AS MACRO option allows you to
store your drawing as a macro file.  You must not have any
animation marks or other user-defined macros in this drawing. 
After you select this option, type a name for the macro file
but do not include an extension.  For example, suppose you
have a drawing of a dog.  Do not type DOG.MCR for the
filename.  Just type DOG.  A MCR extension will be
automatically added to the end.


PAINT
This option allows you to fill in an enclosed area with the
currently selected color.  The paint will fill all the area
surrounded by black lines.  If the area is not completely
surrounded by black, the paint will spill over outside the
area.  If the paint spills you can correct it by going to the
delete option and deleting it.

Verify that PAINT has been selected from the Draw Options
Line then move the mouse cursor to a point within the
boundary and press the left mouse button.  The area within
the black boundary will now be filled with the color
previously selected.

If you try to delete a border while it contains paint it will
make quite a mess when you redraw it; therefore, delete its



                        -5-
                                 
paint first.  If you want to paint your drawing it is best to
wait until all your drawing is finished.  This allows you to
make changes in lines, boxes, circles, and macros without
having to delete the paint first.


TEXT
Choose this draw option if you want to type some text in your
drawing.  This option supports most ASCII characters
including the number characters 0 through 9.  

Verify that TEXT has been selected from the Draw Options line
then move the cursor to where you want the text to start and
press the left mouse button.  Now you can start typing text. 
If you make a mistake you can use the backspace key to delete
previously typed text.  When you're done press ENTER on the
keyboard.  The text will be typed using the color you
previously selected.

Once you've entered text you can delete it using the DELETE
option from the function line.  We'll cover this in detail
later.


CLOAK
This option allows you to hide part of your drawing from view
without actually deleting components.  This is very useful
for creating animated drawings.  

Select the CLOAK draw option then locate the cursor at one
corner of the drawing that you want to hide.  Press the left
button then without releasing the button move the mouse to
the opposite corner of the area to be hidden.  Release the
button and the entire area within the box you just drew will
be hidden from view.  You may now repaint the hidden area
(assuming that area is also bounded by black at some point).



                        -6-
                                 
GRAPHICS FUNCTIONS
The following functions are selected from the top row of the
screen.  Select them by placing the mouse cursor on the one
you want then press the left mouse button.


CLEAR
Select this function if you want to clear or erase all
components on your drawing.  Be careful with this one!


DELETE
Use this option to delete individual elements in your
drawing.  The last thing drawn will begin to flash and you
must answer the question "Do you want to delete this?".  Use
the left button for yes and the right button for no.  Choose
yes and the drawing will be redrawn without that object. 
Choose no and the next object will flash.  This continues
until you either choose yes, press the ESC key to escape, or
all objects are flashed.

When deleting a painted area, the entire paint does not
flash.  Only a small circle located around one pixel in the
painted area will flash to indicate which painted area is
being referenced.  When deleting a user-defined macro, a
circle (larger than the one for a painted area) will flash
around the starting point of the macro.  


ANIMATE MARK
Choose this option if you want to store the current drawing
to be used later as an animation screen.  Whatever is in the
drawing at the time you click on this option will become a
screen in your animation.  After you mark a screen for
animation you can make changes to the drawing then mark it
again.  Don't forget to cloak or hide parts of the drawing
that you don't want to show in the next animation screens. 
Do not eliminate the pieces with the DELETE option if you're
animating.  Once they are deleted, they are gone forever. 
They will not show in the animation.  See the CLOAK and
CLOAKING AND ANIMATION sections for more details on cloaking.



                        -7-
                                 
You can put up to seven animation marks in one drawing. 
Also, these marks can be deleted just like any other drawing
element.


ANIMATE
Use this option to animate your drawing if you have placed
animate marks in the drawing as it was created.  The
animation screens will be shown sequentially.  

There are two animation speeds.  To slow the animation rate
to the slower speed press <.  To increase the rate back to
the faster speed press >.  To stop the animation press ESC or
press the right mouse button.

There are several drawings supplied on this disk that are
already animated.  Retrieve them using the FILE option and
try them.


FILE 
Select the FILE option from the function line when you need
to get an existing drawing, store a drawing for later use, or
change the directory.  Your options in the FILE menu are
STORE, GET, EXPORT, SEE DIRECTORY, and CHANGE DIRECTORY.

STORE
Use this option to store or save a drawing to a file.  After
choosing this option you must type the name of the file where
the drawing is to be stored.  Do not put an extension on the
file name.  For example, do not use something like
draw10.dat.  Just use draw10.  The extension is added
automatically.

GET
Use this option to retrieve a drawing you previously saved. 
You are shown a list of existing files to select from. 
Select by highlighting it then press ENTER or the left mouse
button.



                        -8-
                                 
EXPORT
Use this option if you want to export your drawing to my
colorbook program.  You will be asked to supply a filename
for the colorbook page without an extension.  Type the
filename then press ENTER.

Remember, the colorbook requires pictures that are drawn in
black.  So, make sure all your drawings you want to be
colored or painted are drawn using black.

SEE DIRECTORY
Choose this option if you just want to see all the graphics
files on the current directory.  Press the left mouse button
to return to FILE MENU.

CHANGE DIRECTORY
Use this option to change your home directory.  You may find
it useful to store some graphics files in a subdirectory.  In
this case you can use this option to change to that
subdirectory.  Once you choose this option you'll have to
type the name of the directory you want then press ENTER.


That's all the functions and options.  Now let talk
technique.



CLOAKING AND ANIMATING
The purpose of cloaking is to hide a piece of a drawing
without deleting it.  This is sometimes easier than going
through the delete process.  For creating an animated drawing
it is absolutely essential.  

If you're creating an animated drawing and you want to take
a piece of your drawing out for the next animation screen you
should not delete that part of the drawing.  If you do, that
piece of the drawing will be lost forever and will not show
in any animation screen.  To hide a section of your drawing
without deleting it you can cloak it.

Another way to hide a draw component is to draw over it with
another identical component in dark gray color.



                        -9-
                                 
Lets try an example.  Go to the FILE menu and get the
graphics file called DRAW2C.CGP.  There are two files with
similar names.  Make sure you get the one with the C after
the 2.  This is an animated drawing.

Now that you have the drawing select ANIMATE and give it a
try.  When you're ready to stop the animation press ESC or
the right mouse button.  Next, select the DELETE option. 
When it asks you if you want to delete animate mark # 7 press
the left mouse button for yes.

We want to make the man wink so lets cloak his right eye. 
Choose CLOAK and use it to draw a box around the right eye. 
His eye should now be covered with a gray patch.  

Now choose the skin color and the PAINT option.  Color in the
patch with this color.  It may take a couple of tries to get
it all colored in so be patient.  

Once you have the patch colored in choose LINE and the color 
BLACK.  Draw a horizontal line where the eye once was then 
select the MARK option.  This will mark the current screen 
as animation screen # 7.  Now try your animation by selecting 
ANIMATE.



PRINTING 
This program was not designed with its own print routine.  If
you want a hard copy of your drawing you must load your
favorite graphics screen dump memory resident program before
you load this program.  A program like this that supports
most printers, called GRAPHICS, usually comes with your
operating system.  If you have GRAPHICS loaded press the
SHIFT key then the PRINT key without releasing the SHIFT key
(if your computer has it, press the PRINT SCREEN key
instead).  Your drawing will now be printed on your printer. 


Read your DOS manual for more information about this graphics
utility.



                        -10-
                                 
If you have Word Perfect (tm) you can also use its screen
grabber, called GRAB, to save the screen image to a file then
print it from within a document.



DR. MOTES' COLORBOOK
This program is closely related to the Children's Graphics 
program; therefore, I've included it on the same disk.  With 
the graphics program's EXPORT command you can create pages
to be used with the colorbook program.

This program is very simple to use.  Use the mouse pointer to 
select a color then use the pointer to color the drawing.  You 
can save the drawing you've colored under a different name or 
you can get another drawing.

At the top of the screen you'll see 32 color choices.  Place the
mouse pointer on the color you desire then press the left mouse
button to select it.  The selected color will be displayed at 
the bottom of the screen.

After you've selected a color, place the mouse pointer on the
drawing where you want that color then press the left mouse
button.  Your selected color will stay in effect until you 
choose another.

Any of the colors can be covered over except black and 
black/gray checks.  Once you use these two colors they become 
permanent.  Therefore, I recommend you always store your page 
before using either of these colors just in case you decide 
it's not the color you want.  If so, you can recall the
page you stored previously.

Use the GET PAGE option to select a new colorbook page.  Use the
mouse to select the option similar to the way described above.
Or, you can press the "g" key on the keyboard.  You'll be shown 
a list of pages to choose from.  Use the mouse or arrow keys to
highlight the page you want then press the left mouse button or 
the ENTER key.  The page you selected will be displayed on your 
screen.



                        -11-
                                 
Use the STORE PAGE option to store pages you've already colored.  
You can't copy over one of the original pages.  If you try, the 
new page will be stored with the same name but with a "b" added 
to the end of the name.  Actually, this will happen to any page 
that has a title that starts with "page".  For this reason, you 
should name all your colored pages MYPAGExx where xx represents 
a number specified by you.  

Choose the STORE PAGE option using the mouse or the "s" key on 
the keyboard.  Once you do this you'll have to type a file name
or page name for your drawing. When you type a colorbook page 
name to store, do not use an extension.  For example, use 
something like mypage10 but not mypage10.gfl.  The gfl will be 
added to the end automatically.

The current page name will always be displayed at the bottom
right of the screen.  Instructions will always be displayed on 
the bottom row of the screen.

To escape from the program press the right mouse button or the
ESC key.  When you're asked if you really want to exit the 
program press either "y" for yes or "n" for no.




FINAL COMMENTS
I hope you and your children enjoy these programs.  A lot of
time went into designing them.  Hopefully they are much easier 
to use than the elaborate commercial products that require large
manuals. To run the programs just type go then press ENTER.

I'VE MADE EVERY EFFORT TO REMOVE ALL BUGS FROM THIS SOFTWARE;
HOWEVER,  I CAN'T GUARANTEE THAT NONE EXISTS.  NEITHER CAN I
GUARANTEE THAT A VIRUS HAS NOT BEEN ATTACHED TO THE PROGRAM
SINCE I'VE RELEASED IT.  THE RISK MUST BE ALL YOURS.  BY
USING THIS SOFTWARE YOU ARE EXPRESSING YOUR WILLINGNESS TO
ASSUME RESPONSIBILITY FOR THE RISKS.

If you're interested in educational software for children try
my program called SCHOOL-MOM.  It is a menu driven program
with modules for Music Composition, Art, English, Spelling,



                        -12-
                                 
Math, Time and Exams.  It's a complete educational tool for
kids age 4 to 14.  You can get it from your favorite
shareware dealer, from the IBMAPP forum on CompuServe, or
from me by specifying it on your registration form.


All rights reserved, 1992
Dr. Andrew Motes
MOTES EDUCATIONAL SOFTWARE
PO BOX 575
Siloam Springs, AR  72761




                
           _______
      ____|__     |               (R)
   --|       |    |-------------------
     |   ____|__  |  Association of
     |  |       |_|  Shareware
     |__|   o   |    Professionals
   -----|   |   |---------------------
        |___|___|    MEMBER



This software is produced by a member of the Association of
Shareware Professionals (ASP).  ASP wants to make sure that
the shareware principle works for you. If you are unable to
resolve a shareware-related problem with an ASP member by
contacting the member directly, ASP may be able to help. The
ASP Ombudsman can help you resolve a dispute or problem with
an ASP member, but does not provide technical support for
members' products. Please write to the ASP Ombudsman at 545
Grover Road, Muskegon, MI 49442-9427 or send a Compuserve
message via easyplex to ASP Ombudsman 70007,3536.





                        -13-
                                 
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Program Name:  Children's Graphics

Version: 4.0

Hardware Requirements: 640K RAM, Enhanced Graphics (EGA), and mouse

Software Requirements: DOS version 2.0 or higher

Author: Dr. Andrew Motes
        MOTES EDUCATIONAL SOFTWARE
        PO BOX 575
        Siloam Springs, AR  72761

Other software written by author: School-Mom, Mom's Math, Dr. Motes' 
    Colorbook

Description:
    This graphics program is simple enough for children to use.
    Your child can use it to draw lines, circles, boxes,
    text and macros.  These drawings can be painted, edited,
    saved, animated and printed to your printer with your screen 
    dump utility.  For ages 6 and up.  Requires 640K RAM, mouse, 
    and enhanced graphics (EGA). 

Registration Fee:
    $10.00.  Customer gets an evaluation copy of SCHOOL-MOM and
    is allowed to deduct the $10.00 from the SCHOOL-MOM registration
    price if he/she also registers it.

Files on disk:
    cg-go.exe - A program for starting the programs and installing on
                a hard drive.
    cg.exe - The Children's Graphics executable program.
    cb.exe - The Dr. Motes' Colorbook executable program.
    cg-read.me - ASCII file for the user to read.
    cg-man.doc - ASCII manual file (for both Children's Graphics & Colorbook).
    cg-reg.ltr - A letter that customers can use to register Children's Graphics.
    cb-reg.ltr - A letter that customers can use to register Dr. Motes' Colorbook
    XXXXX.cgp - These 8 files are drawing files that have already been created.  
                None have been painted.  The user can recall these from within 
                the program.
    
    XXXXXc.cgp - These 9 files are example drawings with color.  Some are also 
                 animated. 
              
    XXXXX.mcr - These 15 files are macro drawings that can be inserted into other 
                drawings.
        
    pageX.gfl - Two graphics pages for Dr. Motes' Colorbook.

    vendor.doc - This file.
    file_id.diz - Short description for BBS use.
    see.exe - A file viewing and printing utility produced by Pinnacle Software
              and used with their permission.
    amaze.txt - Pinnacle Software's text file.

There are 45 files on this disk.

Note to BBS operators - Please use filename CG40.ZIP for the final zipped file.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3244

     Volume in drive A has no label
     Directory of A:\

    CG       EXE     53133   8-15-92   6:23a
    CB       EXE     37245   8-15-92   6:23a
    CG-MAN   DOC     24891   8-15-92   6:23a
    VENDOR   DOC      2369   8-15-92   6:23a
    CB-REG   LTR       830   8-15-92   6:23a
    CG-REG   LTR      1202   8-15-92   6:23a
    DRAW1    CGP      2616   8-15-92   6:23a
    DRAW2    CGP      2507   8-15-92   6:23a
    DRAW3    CGP      1332   8-15-92   6:23a
    DRAW4    CGP      3472   8-15-92   6:23a
    DRAW5    CGP      3312   8-15-92   6:23a
    DRAW6    CGP      1929   8-15-92   6:23a
    DRAW7    CGP      1844   8-15-92   6:23a
    DRAW8    CGP      2848   8-15-92   6:23a
    DRAW1C   CGP      3097   8-15-92   6:23a
    DRAW2C   CGP      4075   8-15-92   6:23a
    DRAW3C   CGP      3000   8-15-92   6:23a
    DRAW4C   CGP      4676   8-15-92   6:23a
    DRAW5C   CGP      4285   8-15-92   6:23a
    DRAW6C   CGP      4866   8-15-92   6:23a
    DRAW7C   CGP      3269   8-15-92   6:23a
    DRAW8C   CGP      5941   8-15-92   6:23a
    DRAW8CC  CGP     10135   8-15-92   6:23a
    SML-PALM MCR      1497   8-15-92   6:23a
    BIRD     MCR      2679   8-15-92   6:23a
    PIZZA    MCR       876   8-15-92   6:23a
    PIZZA2   MCR      3013   8-15-92   6:23a
    PIE      MCR      1871   8-15-92   6:23a
    PIE2     MCR      3797   8-15-92   6:23a
    PALMTREE MCR      1565   8-15-92   6:23a
    CAKE     MCR      2688   8-15-92   6:23a
    CAKE2    MCR      3290   8-15-92   6:23a
    AIRPLANE MCR       727   8-15-92   6:23a
    TREE     MCR      1632   8-15-92   6:23a
    TREE2    MCR      2185   8-15-92   6:23a
    PLANE2   MCR      1005   8-15-92   6:23a
    MAN2     MCR      4230   8-15-92   6:23a
    MAN      MCR      3886   8-15-92   6:23a
    PAGE2    GFL     27008   8-15-92   6:29a
    PAGE1    GFL     27008   8-15-92   6:28a
    CG-GO    EXE     29629   8-15-92   6:23a
    CG-READ  ME        505   8-15-92   6:23a
    FILE_ID  DIZ       261   8-15-92   6:23a
    SEE      EXE     27285   6-09-92
    AMAZE    TXT      7471   6-09-92
    GO       TXT       693  12-22-92   5:20a
    GO       BAT        31   6-04-92   2:25a
           47 file(s)     337706 bytes
                            3072 bytes free
