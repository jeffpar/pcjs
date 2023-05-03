---
layout: page
title: "PC-SIG Diskette Library (Disk #1473)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1473/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1473"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HYPERSKETCH"

    HYPERSKETCH is a program that helps you to create "layered" diagrams
    which can include boxes, lines and/or text.  Create colorful diagrams
    with text for explaining a concept, giving instructions or documenting
    a program.  The layered diagrams can be used as a menu system to execute
    your programs or perform DOS functions.  HYPERSKETCH can be used for
    educational purposes, dataflow diagrams, and screen prototyping.
    
    Each diagram occupies a full screen.  Boxes can be drawn in any
    combination of color, size and position.  Text can be displayed in
    different colors and the lines can turn corners and have arrow heads.
    Any object of the diagram can contain a layered diagram beneath it on a
    totally separate screen.  Layered diagrams can be accessed by pressing
    a key while the cursor is on the object which has the diagram beneath
    it.  A maximum of 99 levels of diagrams may be created per file,
    depending upon available computer memory.
    
    Any diagram on the screen can be printed, or written to an ASCII file
    for later use with a wordprocessor.  The program has extensive editing
    features: objects can be moved, cut and pasted, edited, saved and read
    from a disk file into memory.  You have two independent working areas
    allowing you to work with two diagrams at the same time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOX.DOC

{% raw %}
```
HYPERSKETCH: The Hypertext Diagramming System










 Copyright 1988 Nat Eastham

 All Rights Reserved




 Eastham Software
 3600 Smokey Hollow Road
 Edmond, OK 73013



WARRANTY
With respect to the physical diskette and physical documentation
enclosed herein, Eastham Software warrants the same to be free of
defects in materials and workmanship for a period of 30 days from
the date of purchase. In the event of notification within the
warranty period of defects in material or workmanship, Eastham
Software will replace the defective diskette or documentation, or
at the purchaser's request, refund the purchase price of the
software.  The remedy for breach of this warranty shall be
limited to replacement or refund and shall not encompass any
other damages, including but not limited to loss of profit,
special, incidental, consequential, or other similar claims.

Eastham Software specifically disclaims all other warranties,
expressed or implied, including but not limited to, implied
warranties of merchantability or fitness for a particular
purpose.


Introduction

HyperSketch was written for the specific purpose of making
diagrams using only a few simple shapes.  It allows the diagrams
to be created in "layers" so that a particular object on a screen
may have further diagrams "attached" beneath it, and so on to any
arbitrary depth.  This lets the user draw a high level diagram of
a system and add successive detail on layers that are attached
below the higher-level shapes.  The strength of HyperSketch is in
the speed that comes with the simplicity of having only a few
shapes to work with, and in the layered concept.  By not
including such features as curve drawing and similar things
normally found in CAD packages, HyperSketch can do its job
quickly and with a faster user-interface.  Printing diagrams on
HyperSketch is easily done with a printer that supports the IBM
line drawing character set; each layer fits on one screen and all
shapes are drawn using the character set in text mode.  No
graphics modes are used.

HyperSketch is distributed under the widely known "ShareWare"
concept, meaning that if you find the program useful and continue
to use it, you are requested to register it with the author.  If
you register, you will receive a laser printed manual, the most
current version of the software, and any additional items that
the author may wish to send.  Your comments and suggestions are
always welcome, whether or not you register.  Almost all of the
features added in the last two years have been as a direct result
of user feedback.

A Quick Tour of HyperSketch

As mentioned above, HyperSketch allows the creation of layered
diagrams that include Boxes, Lines, and Text.  Each layer of a
diagram occupies the full screen.  Any or all objects on your
screen can have additional layers beneath them, up to a depth of
about 99 levels, depending on available memory.  To access the
layer beneath a given object, simply place the cursor on that
object and press <PgDn>.  Moving back upward through the layers
is done by pressing <PgUp>.  The objects on your screen can be
any combination of 16 foreground colors and 8 background colors,
and it is easy to change the colors of an object at any time.
Objects are easily moved, changed, or deleted.  The objects on
each screen and the layers below form a tree-structured
hierarchy, allowing you to use HyperSketch as a CASE tool to draw
leveled dataflow diagrams.  HyperSketch takes full advantage of
the 50 line text mode of a VGA to allow you to get twice as much
information on a screen as a 25 line display.  Because of the
hierarchical nature of a diagram drawn with HyperSketch, it is
easy to save all or part of a diagram, as well as to append parts
of diagrams to others.  You also have two totally independent
work areas to allow you to work on two diagrams at the same time.
Help is available from the main drawing screen by pressing <F1>.

HyperSketch contains other useful features that go beyond merely
drawing.  You can place commands into text objects and execute
them from HyperSketch.  You can run a predetermined program at
the touch of a key, with or without command line parameters.  A
DOS gateway is also provided for your convenience.  All or part
of a diagram can be sent to a printer or to a file for editing by
your favorite word processor.

Here are some of the intended uses for HyperSketch:

Creation of "Top-Down" leveled dataflow diagrams.

Full color, interactive documentation or for teaching purposes.

Screen prototyping, or for creating a series of screens for use
in slide shows and presentations.

As a "Front End" to launch other programs, since commands can be
placed into various parts of a diagram.  This might be useful in
expert systems applications.


Setting Up

The HyperSketch diagramming system consists of the following
files:

BOX.EXE       this is the full blown developer's version
BOXPARMS.DAT  the configuration file
RBOX.EXE      the run-time version for completed work

You will also have one or more files ending with the extension
".BOX", which are the data files read and written by HyperSketch.

The HyperSketch program needs to have access to the BOXPARMS.DAT
file to load its default colors and sizes, but aside from this
can be placed in any convenient subdirectory.

If you get an error message immediately after starting the
program, chances are that the program cannot find the
BOXPARMS.DAT file.  Another common problem is having your <Num
Lock> key ON when trying to use your <Ins> and <Del> keys on the
numeric keypad; it must be OFF.

Users that have upgraded from a previous version of
HyperSketch should note that you no longer need the
MS-DOS device-driver, BoxDrivr.Sys, and may remove it
from your Config.Sys file.  This will save you a small
amount of memory and make it easier to install
HyperSketch on different machines. In changing the
program to eliminate the device-driver, it was also
made smaller and faster than the previous version.


Using HyperSketch

You start the program by typing BOX and pressing the ENTER key.
You will be greeted by an opening screen and can press any key to
continue.  At this point the screen will be blank except for the
status line at the top.  To receive a help screen of the
allowable commands, press <F1>, "H", or "?".  A general
discussion of how to use HyperSketch follows, accompanied by an
explanation of each command.

There are three types of "objects" that can be placed on a
diagram.  For the purposes of discussion here, screen and diagram
are used somewhat interchangeably.  These object types are BOXES,
LINES, and TEXT.  Any object may have another screen or "layer"
beneath it, allowing you to nest your drawings to any depth you
choose.  The only restriction is available memory or 99 levels
deep, whichever comes first.

Inserting Objects into the Diagram

The status line at the top of your screen tells you what the
current object is by pointing to it with an arrowhead.  When you
press the <INSERT> key, it is the CURRENT object type that will
be placed on your screen.  If the current object type is a Box,
then the box will immediately appear on the screen.  If the
current type is Text, you must then type the text you want,
ending with the <ENTER> key.  If the object type is Line, you use
the cursor keys to move the cursor either vertically or
horizontally, ending with the <ENTER> key.  You may not draw
diagonal lines.  To change the current object type, type "B",
"L", or "T" to select Box, Line, or Text types respectively.  The
arrowhead on the status line will always point to the current
object type.  If you are following the above instructions and
cannot see anything on the screen other than your status line,
you probably do not have the BOXDRIVR.SYS file installed properly
in your CONFIG.SYS file.

Deleting an Object from the Diagram

To delete an object from the screen, move the cursor to the
object and press <DELETE>.  The object will be removed and the
screen redrawn.  It is only necessary to place the cursor on any
part of a Text or Line object to specify that object for
deletion.  To delete a box, you may place the cursor inside or on
the edge of the box, then press <DELETE>.  If you have drawn
overlapping objects, read the section about "Pointing at Objects"
in this document for useful information.

Workspace

HyperSketch gives you two TOTALLY separate areas or workspaces on
which to create your diagrams.  All commands apply to the current
workspace and do not affect the other one in any way.  The
selection of the workspace is done by pressing the "1" or "2"
keys of the keyboard.  You can work on two completely separate
diagrams at the same time by using both workspaces.  These
workspaces are also useful for cut-and-paste type operations.
Remember that all the commands below that deal with saving
diagrams, reading diagrams, deleting layers, and so on, apply to
the current workspace only.  This means that when you save your
work on workspace #1, the work you've done (if any) on workspace
#2 is not saved, you must switch to that workspace and save your
work there also, using a different filename.

Altering Colors, Line types, and Sizes

To change the current characteristics of an object, type <ALT B>
for Boxes, <ALT L> for Lines, or <ALT T> for Text objects.  This
will give you a screen that allows you to change the various
features of that object.  Note that this will change any
subsequent objects of that type that you draw, it will not cause
a change in any objects already drawn.  You can, however, do this
with another command discussed later, the <ALT C> command.  Once
you are viewing the screen to change the features of an object,
read the bottom line for instructions.  You may press <ESC> to
exit a particular option, and press <ESC> again to return to your
drawing.

Copy attributes of an existing object

A shortcut method for setting the current attributes of an object
is available if you have already drawn an object of the desired
color, line-type, and size (in the case of boxes) on your screen.
Place the cursor on the object whose attributes you wish to copy
and press <F10>.  This will copy that object's attributes into
the current attributes for that object type and update the status
line to reflect the new values.  This is very useful if you have
several styles of boxes on the screen and want to switch back and
forth between them easily without ever going to the <ALT B>
screen.  It is also very useful to change the color of text if
you have several text colors on the screen.

Traversing a diagram

Since a diagram can be drawn in layers, you must have a way to
easily move up and down the layers, adding new layers beneath an
object, and so on.  The <PgDn> key takes you to the next layer
beneath the object that you are pointing to with the cursor.  If
there are no objects drawn on that layer, you will see a blank
screen, ready to be drawn on.  If you are not pointing to an
object when you press <PgDn>, there will be no effect.  To return
to the previous layer 'above' the one you are on, press the
<PgUp> key.  Pressing this key when on the highest layer has no
effect.  When you are several layers deep and want to go all the
way to the top layer, press <HOME>.  You can tell how many layers
deep you are by looking at the Level indicator on the Status
line.

Moving an object

To move an object, point to it with the cursor and press <ALT M>.
The cursor will jump to the starting point of that object.  You
may then move the cursor to the point on the screen where you
want the object moved, and press <ENTER>.  The object will be
redrawn in the new position, and all layers attached below it
will remain attached to the object in its new position.  The <ALT
M> form of the "move" command is used to move an object from one
position to another on the same screen.  If you need to move an
object to an entirely different screen (layer), refer to the <F6>
and <F8> commands.

Moving a group of objects at the same time

You may wish to move several lines of text that occur within a
box or even several boxes at the same time.  You may move
anything that is enclosed in a box with the <ALT G> command.  The
move will take the enclosing box with it.  Suppose you have two
lines of text inside a box.  To move this entire group, place the
cursor on the box, press <ALT G>, move the cursor to the new
position for the group and press <ENTER>.

Hint: If you need to move a group of objects that are not
enclosed in a box,  draw a large box around them, do the group
move, then delete the large box.

Changing attributes of an object

You may wish to change the size, color, or line type of an object
after it has been drawn.  To do this, use the <ALT B>, <ALT L>,
or <ALT T> command to change the current attributes of the object
type that you are going to change.  When you are done, return to
the drawing, point to the object and press <ALT C>.  This object
will now take on the attributes that are reflected in the status
line.  Using this command, it is easy to change text colors after
the fact, or to turn the arrowheads on or off for a line.  Also
note that the <ALT C> command changes a box's height and width.

Re-Sizing a BOX on the screen

You may wish to change the size of a box on-screen while viewing
the results.  To do this, press the <Space Bar> while the cursor
is pointing to the box you wish to re-size.  A prompt line will
appear that instructs you to use the Arrow Keys to change the
height and width of the box.  The <Down> arrow will increase the
height of the box, the <Up> arrow will decrease the height, the
<Right> arrow will increase the width, and the <Left> arrow will
decrease the width.  When done, press <Enter> to keep your
changes or <ESC> to restore the box to its original size.  Note
that this function does not change the attributes of the current
box size.  That is easily done with the <F10> key, discussed
earlier in this manual.

Saving a diagram

Saving your diagrams is the most important part of the program.
You have two options on saving your work.  <ALT H> saves
everything from the HOME screen downward, in other words, your
entire diagram.  <ALT S> saves your diagram from the CURRENT
screen downward.  Exercise care when using <ALT S>, since if you
are not at the topmost layer when saving your work, it will not
be written to the file.  Saving from the current level downward
is a powerful feature that allows you to save portions of your
diagrams into separate files, append them to other diagrams, and
so on.  It can be used as a cut-and-paste function and to
rearrange your diagrams easily.  The pop-up window for saving a
diagram can be exited prematurely with the <ESC> key.  Once a
choice is made, the pop-up window will remember your last choice,
making it very easy to do subsequent saves of your work.  If you
wish to use the filename already present in the prompt, simply
press <ENTER>, or type in a new one and press <ENTER>.

Reading a diagram

<ALT R> is the command to read a diagram from disk.  Reading a
diagram from disk into memory works in a similar manner to the
Save function.  The diagram that is read in will be appended to
the object that is on the layer 'above' it.  This enables you to
add diagrams from one file into your current diagram and to
duplicate parts of diagrams easily.  To see this in action, try
reading in a diagram from a totally empty drawing,  then go to an
object with no layers beneath it, press <PgDn>, and read in a
diagram from there.  You will see how it is attached to your
diagram.

It is also possible to read in a diagram on top of an already
existing screen, effectively merging two diagrams.  To do this,
go to the screen desired and place the cursor where you want the
diagram to be read.  This cursor position will be used as the
upper left corner for the diagram you will read in.  This is
useful if you made some drawings in 25 line mode and wish to
combine two screens into a 50 line mode drawing, or if you have a
pattern of shapes written to a file that you wish to duplicate in
several places on a single screen.

You can exit the pop-up window by pressing the <ESC> key.  The
pop-up window comes pre-loaded with a filename.  You may accept
it by pressing <ENTER> or by typing in a new one and pressing
<ENTER>.

Printing/Exporting your diagram

You may print a single screen or any portion of your diagram to a
file or device. Print to a file name when you wish to use your
diagrams with a word processor or do not want them to go directly
to a printer. The <F5> key will print the current screen only.
It will clear the status line from the top of the screen and send
each line to the destination you specified. If your printer does
not give you satisfactory results, make sure the printer is in
the proper mode.  You may need to send some special codes to your
printer prior to printing any diagrams that use the special
characters from the PC character set. To print more than one
screen,  use the <ALT P> command.  This will print all screens
from the current screen downward, with a form-feed between each
screen.  Note that the <F5> command does not send a form-feed to
the printer.  This is for those cases where you may want to print
several screens edge to edge.  The <ALT P> command also puts page
numbers on the upper right part of each page.  This can be
disabled in your BOXPARMS.DAT file.

Deleting all screens below an object

This command <ALT D>, deletes all the 'layers' beneath the object
that you are pointing to with the cursor.  Be careful with this
command, since you may be deleting hundreds of objects on the
layers below an object.  It is useful when you have saved all
screens beneath an object into a file ( for later use ) and wish
to remove those layers from the object.

Erasing an entire diagram

The <ALT F1> command deletes everything in your current
workspace, and resets all important variables back to default
values.  When it is finished, you will have an empty diagram to
work with.  It only affects your current workspace, the alternate
one is unchanged as is always the case with these commands.

Searching for text in a diagram

Large and multilayered diagrams may be hard to traverse when
searching for some piece of text that occurred on one of the
layers.  Use the <ALT F> command to search for a string of text
in text type objects.  The command will prompt you for the
necessary information and will recursively traverse the diagram
until it finds the information you want.  Some diagrams may be so
deep and contain so many objects that the search will run out of
stack space (the memory used for searching).  If this happens,
you will see a message flash at the top of your screen, letting
you know that some of the the objects were skipped in the search.
The search will continue however, in an attempt to find the text
string you are looking for.  The <ALT F> command starts at the
CURRENT screen and works downward.  Screens above the current
screen are not searched.

Editing a text object

You may wish to change the contents of a text object after it has
been created.  Use the <ALT E> command for this.  The old text
will remain on the screen and you will be allowed to use the
editing keys to change the text.  You may use the <INS>, <DEL>,
<HOME>, <END>, and "arrow" keys, as well as the regular keys.
The text edit operates in overstrike mode, you must explicitly
use the <INS> key to insert characters in the middle of other
text.  Prompts will be presented at the top of the screen to
guide you.  To abandon the edit, press the <ESC> key.  To
complete the edit, press the <ENTER> key.

Importing an ASCII file

It can be very convenient to make up files of text with your
favorite editor or use existing files from other sources, then
import them into your diagram with the <ALT I> command.  The text
will be read from the file a line at a time and each LINE will
become a TEXT object in your diagram.  Lines must be no longer
than 80 characters.  If the number of lines exceeds one screen,
an object will be created at the bottom of the screen and
subsequent lines will be attached below it.  This will simulate
paging through the text on your diagram, and allows you to read
in a file with no restrictions on the number of lines, other than
available memory.

Finding objects with layers beneath them

The <F2> key is provided to display which objects on the screen
have other layers attached.  Press <F2> and all objects will
blink that have objects attached.  This prevents you from having
to guess which objects have attached diagrams, which could be a
very tiresome process on a screen that contains many objects.

Smoothing Corners where Lines Touch

When drawing a series of lines, you may want the intersections of
these lines to be sharp corners.  To get this effect, make sure
that you start each new line exactly on the endpoint of the
connecting line.  When drawing, the corners will appear very
rough, but when you are finished, you can use the <F4> key to
invoke the corner smoothing algorithm.  This routine is also
called anytime the screen is redrawn.  The routine requires that
the lines be the same color, both foreground and background.  It
is assumed that if they are different colors, they do not
logically need to be joined.  Only lines get their corners and
intersections smoothed, boxes are not affected.

Marking an Object

Use the <F6> key to mark an object.  When an object is marked,
you will hear a short beep (if your Boxparms.dat file allows
sound effects) to indicate it is marked.  You must mark an object
before you can use the <F7> and <F8> functions described below.
Marking an object does not change it in any way, HyperSketch
simply makes note of where it is for subsequent commands that
require a marked object.

Copy a Marked Object

Use the <F7> function key to copy a marked object to a new
location, whether it is on the same screen or on a different
level.  Note that only the object is copied, none of its
subsequent layers are copied.  This is very useful to duplicate
strings of text.

Move a Marked Object

Use the <F8> function key to move a marked object to a new
location, whether it is on the same screen or to a different
level.  Note that this function moves the object and all of its
subsequent layers.  This is NOT a copy, the actual object is
moved to the new location and is DELETED from the old location.

Executing a program from HyperSketch

You can execute a program directly from HyperSketch if the
program name and any optional parameters are stored in a text
object.  You invoke the command by placing the cursor on the text
object whose text you wish to execute and pressing <ALT F10>.
The text will be treated as if you had typed it from the DOS
command line.  As soon as the executing program is finished, you
will see a prompt at the bottom of your screen, telling you to
press any key to continue.  This will return you to HyperSketch
and redraw your screen.  This can be used to invoke an expert
system on a particular filename, run a file browser on a file, or
to run any program that you wish.

Executing a Predetermined Program

You can execute the program that is given in your Boxparms.Dat
file by pressing the <F9> key.  If the cursor is on a text
object, then that text will be passed to the program as its
command line; if you are not pointing to a text object, the
program will be invoked with no parameters.  This is useful if
you place a "file browser" as your "F9" program into the
Boxparms.Dat file and have various filenames mentioned in a
diagram.

DOS gateway

You may wish to use another program while using HyperSketch, or
to use some function in DOS.  To exit to DOS, use <F3>.  This
will suspend HyperSketch and give you full use of DOS.  Remember
to type EXIT to return to HyperSketch.  This command will fail if
you do not have enough free memory to load the command
interpreter.

Disk Directory

Press the <ENTER> key or the 'D' key to get the prompt window for
a directory.  This is helpful when trying to remember file names.
The directory window pops up pre-loaded with a file search mask.
If you want to use this default mask, simply press <ENTER>; if
you want to change it, type in the new mask.  The directory
window will retain the last mask you used after any changes.  Use
the <ESC> key to prematurely exit the directory window.  You may
use the arrow keys to move the bounce bar to a particular file
name and press <ENTER> to select it.  Doing this causes the
file's complete name to be pre-loaded into the file name that is
used in the next READ ( <ALT R> ) command.  It will also be
loaded into the <ALT S> command, and if you are at level one, the
<ALT H> command.  Use the <ESC> key if you do not wish to select
a file name.

Exit from the program

You may exit HyperSketch by pressing the <ESC> key from the
normal drawing screen.  You will be given a chance to verify
whether you really want to exit or not.  The default answer is
"N".  Be sure you have saved your work before you exit if you
wish to keep it.  If you were using both workspaces, make sure
you have saved your work on both of them.

The Status Line

The status line gives you quick information on the current object
type, the color of foreground and background colors, which
arrowheads are active on a line, how many layers deep you are,
and the row and column coordinates of the cursor.

Changing the default setup

The file BOXPARMS.DAT contains the default setup values that are
used for the program.  It is an ASCII file and can be edited as
you choose.  DO NOT omit any lines.  Each of your workspaces ( 1
and 2 ) has its own set of values.  When you save a diagram, the
current color and shape settings are written to that file along
with the data, so that when you later read in that diagram to
resume working, you will have the same settings in use when you
last saved it.  The BOXPARMS.DAT file contains the option to use
50 line mode if you have a VGA card.

Additional Information

Pointing at objects

HyperSketch uses the following rules to determine what object you
are pointing at on the screen.  You may need to know this
whenever you have overlapping objects in order to prevent
accidents.  You may point to a box several ways:

Inside it but not touching it.
On one of the sides but not the upper left corner.
On the upper left corner (the origin of the object).

These are listed in increasing order of specificity.  The most
unambiguous way to point to an object of any type is to place the
cursor on its leftmost corner, the corner where the cursor was
when the object was originally drawn.  Thus, to point at some
text that has been placed over a line, place the cursor on its
leftmost character.  HyperSketch will scan all objects on the
screen and determine that you are touching a line and a text
object, but that the cursor is on the origin of the text object.
Since the origin of an object takes precedence, it determines
that you are pointing to the text.  In the event of any ties, the
object that was drawn most recently is chosen.  Be careful, the
safest way to point to a box is to always point to the origin
point, or to at least touch one of its sides.  If your screen is
uncluttered you may point to a box anywhere within its sides
without running into any problems.

Overlapping objects

Suppose you want to overlap some text on a line, but the line was
drawn more recently than the text, thus covering the text. You
can use the following technique to make the text show on top of
the line:

Place the cursor on the origin point of the text.
Use <F6> to mark the text object.
Use <F8> to create a new object, deleting the old one.

What this accomplishes is to place the newly created text object
at the end of the object list, so that it is drawn last, giving
you the overlap you desired.


Applications and User Notes

There are many applications for which you can use HyperSketch:

Full color, interactive documentation
You can document a system and distribute the diagram to your
audience along with the RUN-TIME version of HyperSketch.  You may
distribute ONLY the run-time version of HyperSketch freely, the
regular version should be purchased by each user, consistent with
the guidelines of other ShareWare packages.  The run-time version
is named RBOX.EXE and to use it you must pass the full
filename(s) on the command line.  You may pass one or two
filenames, passing two will load the first file into workspace
#1, and the second into workspace #2.  For example:

RBOX  boxfil1.box  boxfil2.box

Loads boxfil1.box into workspace #1, and boxfil2.box into
workspace #2.  You may switch between diagrams with the "1" and
"2" keys of the keyboard.  Be sure to use the full filename and
extension of files passed to RBOX.  Also note that you cannot
read in a file from within the run-time version, it must be
passed on the command line.

You will probably want to place the command in a batch file for
your users, so they will not have to know the filenames of your
diagrams.  Once running, the user can traverse the diagram but
cannot change it in any way.  Please refer to the sample files on
your disk ( extension of ".box" ) and the demo batch files (
extension of ".bat" ) for examples of what can be done in the
area of interactive documentation.

Games for children
You could draw math problems on a screen with the answers hidden
below them on screens below.  You could do a similar thing with
vocabulary words, placing their definitions on screens below.
The "Flash cards" concept would be very easy to implement.

Screen Prototyping
You can use HyperSketch to prototype data entry screens for
users.  The object-oriented nature of the program makes it easy
to rearrange fields on the screen, and to change their sizes.
The clever use of color can further enhance your prototype,
drawing attention to the right places at the right time.  You can
use layers to create a "slide show" that demonstrates how certain
fields would look after data input and so on.  HyperSketch can
make certain tasks like this easier than some "block oriented"
prototyping programs that sell for much more.

Front End to Access other Programs
By utilizing the <ALT F10> function that executes any command in
a text object, you can create diagrams with the ability to run
other programs from within HyperSketch.  You might build a
diagram with several layers, each layer could have various
commands to be executed by the user.  This would allow you to
greatly extend the power and usefulness of HyperSketch.

 Command Summary for HyperSketch

B, L, T       : Change current object type to BOX, LINE, or TEXT
<INS>         : INSERT current object into diagram
<DEL>         : DELETE object at cursor from diagram
<Home>        : Go to top of the diagram
<PgUp PgDn>   : Go up or down one level
<Esc>         : EXIT from the program

<Alt B>       : Change color and line type of BOX
<Alt L>       : Change color, arrowheads, and line type of LINEs
<Alt T>       : Change color of TEXT
<SpaceBar>    : Re-Size a BOX on-screen using the Arrow Keys

<Alt M>       : MOVE the object pointed to with cursor keys
<Alt G>       : GROUP MOVE all objects within a given BOX
<Alt C>       : Change color and line type of this object

<Alt H>       : SAVE ENTIRE diagram to a disk file
<Alt S>       : SAVE starting at CURRENT LEVEL to a disk file
<Alt R>       : READ a diagram from a disk file
<Alt P>       : PRINT/Export all screens from the Current level
<F5>          : PRINT/Export the current screen only

<Alt D>       : Delete ALL screens attached BELOW an object
<Alt F1>      : Delete EVERYTHING on the current drawing
<Alt F>       : Find a string of text somewhere in the diagram
<Alt E>       : Edit an existing text object
<Alt I>       : IMPORT text from an ASCII file
<F4>          : Smooth corners where similar line segments touch
<F2>          : Blink any objects with screens attached
<F3>          : DOS gateway...use EXIT to return to program
<F6>          : MARK an object for later copy or move operation
<F7>          : COPY a marked object, does NOT copy any layers
<F8>          : MOVE a marked object and ALL its layers
<F9>          : Execute program given in the Boxparms.dat file
<ALT F10>     : Execute the command given in the text object
<F10>         : Copy attributes of object pointed at to CURRENT
1 or 2        : SWITCH between TOTALLY separate diagrams
<F1>          : Display the HELP screen
<Enter> or D  : Gives DISK DIRECTORY window with bounce-bar

```
{% endraw %}

## FILE1473.TXT

{% raw %}
```
Disk No: 1473                                                           
Disk Title: Hypersketch                                                 
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Hypersketch                                              
Author Version: 1.05                                                    
Author Registration: $19.95                                             
Special Requirements: 384K memory.  Printer support of IBM line drawing 
                                                                        
HYPERSKETCH is a program that helps you to create ``layered'' diagrams  
which can include boxes, lines and/or text.  Create colorful diagrams   
with text for explaining a concept, giving instructions or documenting a
program.  The layered diagrams can be used as a menu system to execute  
your programs or perform DOS functions.  HYPERSKETCH can be used for    
educational purposes or to create a text adventure game.                
                                                                        
Each diagram occupies a full screen.  Boxes can be drawn in any         
combination of color, size and position.  Text can be displayed in      
different colors and the lines can turn corners and have arrow heads.   
Any object of the diagram can contain a layered diagram beneath it on a 
totally separate screen.  Layered diagrams can be accessed by pressing a
key while the cursor is on the object that has the diagram beneath it.  
A maximum of 99 levels of diagrams may be created per file, depending   
upon available computer memory.                                         
                                                                        
Any diagram on the screen can be printed on the printer or written to an
ASCII file, for later use with a wordprocessor.  The program has        
extensive editing features: objects can be moved, cut and pasted,       
edited, saved and read from a disk file into memory.  You have two      
independent working areas allowing you to work with two diagrams at the 
same time.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1473 HYPERSKETCH  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start the program, type: BOX (press enter)                           ║
║                                                                         ║
║ To print the documentation, type: COPY BOX.DOC PRN (press enter)        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
BOX.EXE        EXECUTABLE VERSION OF HYPERSKETCH
RBOX.EXE       RUN-TIME DISTRIBUTION VERSION OF HYPERSKETCH
BOX.DOC        DOCUMENTATION FILE FOR HYPERSKETCH IN ASCII FORMAT
BOXPARMS.DAT   CONFIGURATION FILE FOR HYPERSKETCH
SAMPLE1.BOX    SAMPLE DATA FILE FOR HYPERSKETCH
SAMPLE2.BOX    SAMPLE DATA FILE FOR HYPERSKETCH
BOXDEMO.BAT    BATCH FILE TO RUN THE SAMPLE DATA FILES
RBOXDEMO.BAT   BATCH FILE TO USE RUN-TIME VERSION ON SAMPLE FILES

******** HYPERSKETCH HARDWARE REQUIREMENTS *******
AT LEAST 384K OF MEMORY
COLOR MONITOR PREFERRED
```
{% endraw %}

## UPDATE.TXT

{% raw %}
```
SUBMISSION/UPDATE Information Form

PROGRAM TITLE: HYPERSKETCH  (PCSIG disk #1473)

DESCRIPTION:
HyperSketch is a program that allows the creation of "layered" diagrams
that include Boxes, Lines, and Text.  Each layer of a diagram
occupies the full screen.  Any or all objects on your screen can
have additional layers beneath them, to a depth of about 99 levels,
depending on memory.  To access the layer beneath a given object,
simply place the cursor on that object and press <PgDn>.  Moving back
upward through the layers is done by pressing <PgUp>.  The objects on
your screen can be any combination of 16 foreground colors and 8 background
colors, and it is easy to change the colors of an object at any time.
Objects are easily moved, changed, or deleted.  The objects on each
screen and the layers below form a tree-structured hierarchy, allowing
you to use HyperSketch as a CASE tool to draw leveled DataFlow diagrams.
HyperSketch takes full advantage of the 50 line text mode of a VGA to
allow you to get twice as much information on a screen as a 25 line
display.  Because of the hierarchical nature of a diagram drawn with
HyperSketch, it is easy to save all or part of a diagram, as well as
to append parts of diagrams to others.  You also have two totally
independent work areas to allow you to work on two diagrams at the
same time.

HyperSketch contains other useful features that go beyond drawing.  You
can place commands into text objects, and execute them from Hypersketch.
You can run a predetermined program at the touch of a key, with or
without parameters.  A DOS gateway is also provided for convenience.
All or part of a diagram can be sent to the printer or to a file for
editing by your favorite word processor.

INTENDED USES:
HyperSketch is excellent for people who wish to create dataflow diagrams
of systems in a "top-down" fashion.

It is very useful for full-color, interactive documentation
or for teaching purposes.

It can be used as a "front-end" to launch other programs, such as
expert systems.  The commands to do this can be placed into various
parts of a diagram.

It is useful for screen prototyping, or for creating a series of
screens for use in slide shows and presentations.

IMPROVEMENTS OVER PREVIOUS VERSION:
Version 1.04 of HyperSketch has several useful improvements:

Support of the 50 line mode of the VGA, and the 43 line mode of EGA.

Improved flexibility in exporting diagrams; you can "print" to a
file or device, using all or a portion of your diagram.

You can read in a diagram onto a blank screen, or merge a diagram into
an existing one.  This gives increased flexibility and allows you to
reuse portions of diagrams easily.

Version 1.05 has additional improvements:

By popular demand, the need for the installable device-driver has
been eliminated, so you no longer need to alter your Config.Sys file
to use the program.  Users upgrading from a previous version can
remove DEVICE=Boxdrivr.Sys from their Config.Sys file.
This will free up additional memory.

The screen redraw is about 30% faster than before.

You may Re-Size a Box on-screen.  This is a very convenient feature
that was requested by one of HyperSketch's users.


UNIQUE FEATURES:
HyperSketch is fully character based (text mode).  This gives excellent
speed, along with crisp displays and perfect printing on any printer that
supports the line drawing characters of the PC character set.

Performance is excellent, even on a standard PC.

All functions of the program are listed on the Help screen, available
at the touch of a key.

PROGRAM CAPACITY or LIMITATIONS:
You should have at least 384k to fully utilize HyperSketch.  Larger
diagrams require more memory.  A color monitor is preferred to
enjoy the full range of colors, but the program also works well on a
monochrome system.  There is a 99 level limit on the number of screens
that can be placed below an object.  Few users ever have a need to
exceed this limit.

HOW to START the PROGRAM:
Create a subdirectory of your own choosing.
Copy all the files from the distribution disk into that subdirectory.

Once this is done, you simply change into the subdirectory where
the program files have been copied and type "BOX" <enter>.

REGISTRATION FEE:
$19.95 to:
Eastham Software
3600 Smokey Hollow Rd.
Edmond, OK 73013-6816

MATERIALS OR SERVICES WITH REGISTRATION:
A laser printed manual.
Written support.
Latest release of the program.

LIST of PROGRAM FILES: see PCSIG.TXT on the disk.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1473

     Volume in drive A has no label
     Directory of A:\

    BOX      DOC     33292   6-02-90   9:20p
    BOX      EXE     80368   5-31-90  10:38p
    BOXDEMO  BAT       140   1-18-89   6:28p
    BOXPARMS DAT       879   8-04-89   5:03p
    PCSIG    TXT       555   5-31-90  11:04p
    RBOX     EXE     46048   5-31-90  10:37p
    RBOXDEMO BAT       149   1-18-89   6:29p
    SAMPLE1  BOX      3500   1-18-89   4:27p
    SAMPLE2  BOX      5507   1-18-89   4:28p
    UPDATE   TXT      4589   6-01-90  10:51p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       729   7-16-90   3:44a
    FILE1473 TXT      2739   7-16-90   3:55p
           13 file(s)     178533 bytes
                          137216 bytes free
