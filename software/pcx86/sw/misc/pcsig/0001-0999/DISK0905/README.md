---
layout: page
title: "PC-SIG Diskette Library (Disk #905)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0905/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0905/DISK0905.jpg
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0905"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DROEGE 2 OF 2 (ALSO 904)"

    DROEGE (Design Robot for Origination of Exacting Graphic Engineering)
    was created for designing printed circuit photomasters.
    
    DROEGE is a manual CAD system, which means it has no automatic
    functions such as schematic capture, wire listing, routing, parts
    lists, etc. It does provide the computer-aided equivalent of a taped
    master or drawing board with the advantage of always having things in
    perfect registration and the ability to work on selected layers.
    
    General features include a 65" x 65" working area, twelve layers deep,
    with a resolution of 0.001". The output can be scaled, however, so
    what is actually provided is a 65,000 X 65,000 point working space.
    Layers can be turned on and off and assigned any available color.
    Lines, pads, symbols, arcs and labels can be entered. The symbol
    feature is particularly powerful since symbols can be nested up to
    twenty levels deep, allowing the construction of very complex objects
    with a few keystrokes.
    
    Note: This program has a limited documentation file, so it will be
    very helpful if you have prior experience with CAD systems and with
    designing printed circuit boards.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABOUTPC.DOC

{% raw %}
```


ABOUTPC.DOC

This section has been written in response to requests by many users who just 
don't quite see how to get started.  It's OK to be confused.  We originally 
wrote this program for printed circuit experts who were also quite familiar 
with programming and IBM DOS.   Most of our first users liked the idea of a 
new cave to explore, and took it as a challenge to figure out how to do 
everything.  

We would now like to be a little more friendly.  So this section will tell you 
something about how printed circuits are made, then LEARNSYM.DOC will lead you 
step by step through a simple circuit.  

When I first started making printed circuit boards in a large government 
laboratory, we used paint pencils and fresh copper clad board.  It was awful.  
With great care, lines could be made 1/8" wide, but they always had bad spots. 
Then again, almost anything would work with tube circuits, and parts were so 
large that the wide traces were not much of a problem.  When the industry 
started using photographic techniques, things got better fast.   The process 
was to make a drawing of the desired circuit at a large scale, reduce it to 
the correct size by photography, and use it to expose a photoresist film on a 
copper clad board.  The layout was made on large sheets of poster board, later 
grided drawing paper, finally ghost gird polyester.  We used strips of black 
drafting tape and pre-cut doughnut shapes for the pads.  Much later we could 
get whole shapes, like multi-pin ic packages as a single stick on unit.  

For a while we dipped or sprayed on the photoresist.  It was really hard to 
get a uniform coat and much material was wasted.  Photoresist is a material 
that hardens under exposure to ultra-violet light.  By using a negative of the 
desired circuit, the clear lines caused the photoresist to harden where the 
board traces were to go.  Next a solvent was used to strip off the unhardened 
resist.  Now the board could be dipped in a solution of ferric chloride which 
disolves the copper where it is exposed.  Pads were made with an open spot in 
the center which was later used as a center spot for a drill.  

Things have progressed a lot since the early days.  We will attempt to 
describe current small shop practice, realizing that there are simpler and 
more exotic techniques in use.  

We assume that you send your printed circuit vendor 1 to 1 positive art work.  
That is, the film is black where you want copper.  We further assume that you 
are requesting a double sided plated through board, i.e., traces on both sides 
of the board, with holes through the board that have plating inside them to 
connect the two sides of the board.  If you send the vendor something 
different, say a 4 to 1 taped master, he will first photographically reduce 
the art work.  Not long ago the vendors insisted on "right reading, emulsion 
side down" film.  I find that today they are not so fussy and will figure out 
how to do your job given any reasonable chance.  When film is exposed with 
light from a photoplotter and then developed, the exposed area shows up as a 
blackened area on the emulsion side of the film which is the up facing side 
when plotted.  "Right reading emulsion side down" means that when the film is 
placed emulsion side down on the surface of the final board that any legend 
will be readable, and the circuit will be as you want it.  Note that if you 
use a CAD system like ours (or most other systems) that view all layers from 
the same side, then when the film is plotted, one side will need to be 
mirrored in order for the emulsion side of the film to be on the surface of 
the board.  Further, writing on the side that is not mirrored will need to be 
placed on the job mirrored.  Confused?  We will go through this again with an 
example.  

Suppose we follow our standard and make a two sided board where we define 
level one to be the parts side, and level two to be the solder or wire side.  
These are old names, these days boards are made that have traces on both sides 
and even in the middle and can have parts on both sides of the board.  The 
names carry over from single sided board days.  When we lay out the board, we 
look at it from the parts side.  If we visualize the traces, with the final 
film emulsion side down on the board, we note that we are looking at the 
emulsion side of level two, the bottom side of the board.  Thus the plotter 
should plot level two just the way we look at it when we lay it out.  Note 
however, that writing on level two must be mirrored in x if it is to appear 
correctly when we look at it from the top (the only way we can) when it is 
laying against the printed circuit board in its final position.  

Level one, the parts side, is just the opposite.  It is created with normal 
writing.  Since film is plotted with the film emulsion face up, it must be 
plotted mirrored in x.  Thus, the writing comes out correctly when the 
emulsion side of the film is placed face down against the board. 

Any hand writing that you place on the art work to guide the vendor should 
follow these conventions or confusion will result.  Or follow your vendors 
guide lines.  Most vendors have unintentionally made many boards backwards 
from their customer's desire, so they are quite specific as to what they want.  
The vendor will likely follow your writing, even if the emulsion is on the 
wrong side.  Except for very fine line high precision work, the emulsion side 
makes little difference.  

The vendor will normally make a 1 to 1 contact print of your film or the film 
reduction he makes from your art work.  This will then be inspected carefully.  
At this point you get phone calls from the vendor when lines are found that go 
nowhere or if lines almost touch something.  Most vendors expect to make small 
corrections.  Small line breaks caused by hair line faults in the photography 
will normally be fixed without question or additional cost.    

For plated through holes, the vendor expects to get art work with solid pads. 
That is, there should be no holes in the doughnut.  So how does the vendor 
figure out where to drill the holes?  He expects another piece of film called 
a drill schedule.  This is a precision film, just like the art work layers, 
with an appropriate mark and legend where each hole is to be drilled.  
Normally most holes are the same size so that it is appropriate to mark the 
film "drill all holes 0.031 except A=0.125, B=0.100."  Penned  circles or 
triangles, etc. around the exceptions with a legend will be good enough.  If 
you follow our recommendation and make your pads as symbols, then you can draw 
suitable marks on the drill schedule layer to show the exceptionally sized 
holes.  If you do not send a drill schedule, most vendors will make one from 
your layout.  Problems arise when you do not put an obvious pad at every 
location you expect to be drilled.  Good practice these days is to put a pad 
on every layer, even if there is no connection.  If you have some pads on one 
side, some on the other, and some on both sides and don't send a drill 
schedule, don't expect the vendor to figure out what you want.  There is 
little chance that he will do the correct thing.    

Now comes the ludicrous part.  You have used a computer to generate the art 
work.  The coordinates of every drill hole are known to the computer to great 
precision.  All this information is thrown away and the vendor remeasures your 
film to determine the drill hole location.  Some day we will all get together 
on standards.  A lot of work is done direct machine to machine, but if you are 
a small guy, today in 1988, trying to get a dozen boards made by the lowest 
cost vendor, this is the most likely way your boards will be done.  The vendor 
also needs a final board outline.  A good place to put this is on the drill 
drawing.  The same operator will trace the board outline for use in a final 
routing operation which will cut the board to size.  

The vendor makes a copy of your drill schedule or uses your layout if you 
don't send one.  The vendor prepares a layout where a continuous line is drawn 
with a colored pen through all the holes of a single size.  A second color is 
used for the next size and the process is continued until all the holes are 
marked.  Locations for alignment holes are also marked at this time.  Next the 
artwork is placed on a motor driven table which is controlled by a joy stick 
with a TV camera looking down on the work.  The operator guides the work under 
the camera with the joy stick and hits the trigger each time a drill spot is 
centered on the cross hair.  When he hits the trigger, a paper tape record of 
the coordinate and hole size is punched.  Paper tape you say?  In 1988?  Well, 
possibly it goes to floppy disk in more modern plants.  

Now a suitable material size is selected for your job.  This is most commonly 
1/16" epoxy fiber glass laminate, commonly called G-10 or some other similar 
designation.  It will likely be 1 oz. copper clad on both sides.  This means 
that there is one ounce of copper per square foot of board area on each side 
of the board.  This is roughly 0.001" thick.  If the board size is small, the 
vendor may elect to place several copies on a single work piece, or he may 
combine several small jobs.  If there are a lot of boards, the boards may be 
stacked several deep for some operations, like drilling and routing.  

  
The drill tape is now used to control a drilling machine.  These machines can 
change drills automatically so they have no problem with a variety of drill 
sizes.  They also keep track of drill wear and change drills as needed to make 
clean holes.  The boards are now removed from the drill machine and some 
complicated cleaning operations take place.  The holes have to be clean, and 
their surface prepared in just the right way if the plated through hole 
operation is to be successful.   

The board is now put in a special plating tank.  This tank contains a contact 
plate which attaches one molecule thick to any exposed surface.  When this 
process is complete, there is just enough of a conduction path through each 
hole to allow standard electro-plating.  There may be some additional plating 
to assure that the plated through hole is strongly bonded at this time.       

Now the boards have a special plastic film laminated on each side of the 
board.  This film is again about 0.001" thick and comes in large rolls of 
various widths.  It is laminated to the boards between heated pressure rollers 
so that the final product is very tightly bonded to the board.  Film positives 
of the circuit (dark where there are to be circuit traces) are now aligned to 
the copper board.  Some vendors do this by eye, others use alignment holes 
punched to match the board alignment holes.  The board is exposed to ultra-
violet light for a few minutes.  The plastic is hardened where it is exposed 
to the light, and stays soft where it is shielded by the dark conductor paths.  
The boards are now "developed".  This means that they are put in a washing 
machine which contains a solvent which disolves the soft plastic.  

The boards are now moved to a copper plating tank and another ounce of copper 
is plated to the exposed surfaces.  At this point for the final traces we have 
one ounce of original copper, one ounce added, and one ounce thickness through 
the holes.  We also have one ounce of copper everywhere else with a plastic 
film covering it.  Next the board is moved to a tin-lead plating tank and a 
thin layer of "solder" is added to the exposed conductor.  

Now the board is placed in a second solvent tank and the hardened film is 
washed away.  When we look at the board we see solder where the traces are to 
be, copper everywhere else, and solder plated copper through the holes.  

Next comes an etch bath.  The etchant disolves copper, but leaves solder 
alone.  Now what is left is solder plated traces where we want them.  This is 
pretty much what is needed electronically, but there are a few more steps.  
One is to pass the board under a heat lamp.  This causes the solder plating to 
"reflow" to make a coating that is easy to solder (for a while).  Most boards 
made today have a solder mask added.  This is a plastic film (often green or 
blue) placed on each side of the board which masks everything but the pads 
from the soldering operation.  This reduces the chance of solder bridging 
between two circuits when the board is passed through a flow soldering 
machine.  Last the board is silk screened with a legend to show the location 
of each part, and possibly a part identifier or value.  Note that you will 
need to supply artwork if you want the vendor to perform these last two 
silk screen operations.  

We have not mentioned inspection.  Most vendors inspect the work at many 
stages in the process.  A typical process will have twenty to thirty steps in 
the process counting inspections.  This is why the normal turn around for a 
two sided plated through board is about two weeks.  Yes, an automated plant 
will be faster, and a ma and pa operation will do fewer steps, but two weeks 
turn around, $100 for setup charges and say $10 each for ten small boards is 
about the norm (August, 1988). 

Part of the reason for going through the above steps is to help you understand 
what art work the vendor will need.  For a two sided board he will need art 
work for the two sides.  By our convention, these will be drawn on level 1 for 
the parts side, and level 2 for the solder side.  A drill layout is prepared 
on layer 3.  We use layer 4 for the parts outline, which the vendor uses to 
prepare the parts location silk screen, and layer 5 for the solder mask.  

Many of you want to do baord fabrication work at home, or in a small shop.  
You can do fair single or two sided board work at home using the kits 
available from Kepro.  See the Newark Electonics catalog (Newark Electronics, 
4801 N. Ravenswood Street, Chicago, IL 60640 Tel. (312) 941-7200) for the 
materials.  They will supply pre-coated material which makes it relatively 
easy to make boards.  Plated through hole boards are another matter.  
Electroplating is still pretty much a black art.  Plating solutions do not 
always work.  Your commercial vendor will probably throw away a few hundred 
boards when he starts up his process, and he keeps it going by making 
continuous performance tests and corrections.  Further, the plating operations 
tend to involve rather nasty chemicals, like cyanides which are lethal if 
handled improperly and lots of acid.  The ferric chloride used to etch the 
pre-coated boards in the Kepro kits is relatively benign, but must be 
discarded properly or the EPA will get you.   

In LEARNSYM.DOC we will start the step by step production of a sample piece 
of artwork for a two sided plated through board. 

```
{% endraw %}

## COMMANDS.DOC

{% raw %}
```
          
COMMANDS.DOC

The keys are listed in alphabetical order with their key number.  All key name
and number combinations are unique.  You should use this listing as the 
primary reference document.  

5ALL

Resets the screen parameters so that subsequent redraws will display all (well
most) of the work area.  The cursor moves to its present x,y position in the
new space.  If data is entered before a redraw, it is entered in the new space
so beware!  Best to redraw immediately after a change of screen area.  We don't
immediately redraw because redraw takes a long time and you might change your
mind.

2ARC

Arc requests entry of three points counter clockwise.  An arc is generated
which starts at the first point, passes counterclockwise through the second
point, and ends at the third point.  The algorithm used is to draw
perpendiculars to chords between point 1 and 2 and between 2 and 3.  The center
is placed at the intersection and the arc starts at point 1 and ends at point
3.  The center is placed on the current grid at the expense of having the arc
pass through the points.  This is because the find operation searches only on
the current grid.  If the center was placed exactly, you would need to search
on a one-mil grid to find arcs and circles.  If you want to place an accurate
arc, place it on a one-mil grid.  But be warned, it could take thirty years to
find a worst placed object searching on a one-mil grid.  So get very close
before starting such a search.  Arc line width is determined by the current
setup.

3AUTO

Auto allows setting up the window seen by the screen of the whole working
space.  It is usually used to go from a big view of the job to select a smaller
area.  For use the cursor is placed at the upper left hand corner of the
desired viewing area.  When AUTO is pressed, the screen prompt asks for a
screen width.  When entered, The cursor immediately moves to its new position
in the altered view, but the screen is not redrawn.  Beware! Data entered after
a view change and before a redraw will be entered in its position on the new
screen view.  It probably will not be where you want it.  We do not redraw
automatically to give you a chance to change your mind.

9BACK

The F9 key backs up one menu.  It is one of the primary means of getting around
the menus.  Except for two places where it produces a prompt, it terminates
the present operation and backs up one menu.  In the two cases, leaving a
symbol and leaving a job, where work or time would be lost a prompt asks "are
you sure?".  Answering anything but "y" will stop the backup.  Backup (F9)
stops most long operations.  In particular it stops a search operation and a
redraw.  If a line has been started but not ended it ends the line.

4CENTER

Select lines drawn in the dot - long dash format used by draftsman to indicate
center lines.  Centerlines are not presently supported on anything but the
screen and the DOS screen dump.  No effect on pads, symbols, lettering, or
arcs.

5CHANGE

Change the entry in the redraw menu.  When change is pressed, the current
screen view parameters are loaded into the redraw table at the currently
selected number.  A prompt asks for the name for this screen view which it
enters.  F10 will cause redraw at the just entered view, or UP DWN may be used
to select another view.  4SETUP can be used to get to the area selection menu
without redrawing each time if you can use the cursor position to select views.

1CIRCLE

The prompt asks for a radius.  After the radius is entered, the FIND, DELETE,
Circles can also now be found, deleted, etc..  When a circle is found with a
different radius, the radius is changed to the found radius.  The last radius
is remembered until arc entry is left.  Circle line width, color, and level are
determined by the current setup.

3CREATE

Do something creative to a symbol.  This path takes you to the creation of a
new symbol or the the addition or deletion of material from an old one.  This
is also the path to kill (delete) a symbol and the path to make a symbol a
library.

3DASH

Select lines drawn dashed.  Dashed lines are not supported presently on
anything but the screen and the DOS screen dump.  No effect on pads, symbols,
lettering, or arcs.

2DELETE

Deletes a found object.  No effect if nothing is currently found.  The entire
object is redrawn in the background color.  Note that this may black out data
that is still retained if two objects intersect.

2DOT

Lines are drawn dotted.  No effect on pads, symbols, lettering, or arcs.

2DOWN

Decrements to the next lower numbered selection.  Numbers wrap around after
reaching one.  The selected number is displayed on the UP and DWN keys.

KP2 DOWN ARROW

Moves the cursor toward the bottom of the screen.  When the cursor reaches the
screen bottom, it hangs there although the virtual cursor position as indicated
by the X= and Y= indications at the top of the screen continues to move.  Data
is entered and found based on the X= , Y= cursor positions.  Thus it is
possible, and sometimes desirable to enter items off the screen.  This is
particularly handy for long interconnections where the position of the remote
end is known.

1DR@L
1DR@W

        Pressing this key causes it to alternate between DR@W and DR@L. DR@L
causes all lines to be drawn at the minimum width regardless of the specified
line width.  This results in a significantly faster redraw particularly when at
high magnification.  DR@W causes the lines to be drawn at the specified width.

3EDARC

Moves immediately to the menu:

1FIND   2DELETE 3*MODFY 4SETUP  5REJECT

without selection of CIRCLE or ARC.  This allows find and delete operations on
arcs without setting up one.

4EDAPER

Selecting 4EDAPER displays the following menu:

        1 UP    2 DWN   3       4       5*APER

        The key 2EDAPER gets an UP DOWN menu with key 5 showing *APER to
indicate that aperture is being selected.  As the aperture is cycled it
changes the table entry on the selected setup and level.  See 1EDSET.

Pushing the UP and DWN keys causes the aperture to cycle through the available
selection.  The selection wraps around.  The top of the screen displays the
current SETUP, LEVEL, COLOR, and APER; and their current values.  Note that
SETUP and LEVEL only select table entry positions while COLOR and APER change
them.  Since this table has so many entries, it is too big to allow full
disclosure of the present entry status without filling the screen and needing
constant redraws.  We recommend that you list the setup table with the LSTSET
command and post it near your terminal.  Most of the entries should be reserved
for frequently used operations.  We recommend that you reserve one for special
purposes and never count on it being set for any particular combination.

A photoplotter can contain multiple apertures.  An example might be a square
62 mil pad with rounded corners and a 15 mil drill spot in its center.  This
item can be drawn all at once by positioning the aperture at a selected
location and flashing a light behind it.  We call such an operation a Pad.  The
same object might be moved while the light is on, causing a line to be drawn on
the film.  We provide a selection of fifteen apertures most of which can be
used as either lines or pads.  We would not recommend drawing a line with the
target aperture which is intended for registration marks, but we allow it.  For
those not having access to our (or someone else's) photoplotter, one can think
of aperture changes as pen changes on a pen plotter.  Since there is access to
the plot files it should be easy to write editing programs to edit the
aperture changes to whatever commands the available plotting device requires.
As inspiration and information is made available these conversion programs will
be included.  The present aperture list includes round apertures from 5 mils
to 125 mils, several square apertures and a target.  Subsequent plotting
programs allow one for one exchange of apertures so we would have no problem
(except cost) changing apertures if requested at plot time.  Write us if you
have a special problem (like surface mount devices) and need custom apertures.


3EDCOLR

Selecting 4EDCOLR displays the following menu:

        1 UP    2 DWN   3       4       5*EDCOLR

        The key 2EDCOLR gets an UP DOWN menu with key 5 showing *COLOR to
indicate that color is being selected.  As it is cycled, color changes the
table entry.  Color is changed only on the selected setup and level.  See
1EDSET.

Pushing the UP and DWN keys causes the color to cycle through the available
selection.  The selection wraps around.  The top of the screen displays the
current SETUP, LEVEL, COLOR, and APER; and their current values.  Note that
SETUP and LEVEL only select table entry positions while COLOR and APER change
them.  Since this table has so many entries, it is too big to allow full
disclosure of the present entry status without filling the screen and needing
constant redraws.  We recommend that you list the setup table with the LSTSET
command and post it near your terminal.  Most of the entries should be reserved
for frequently used operations.  We recommend that you reserve one for special
purposes and never count on it being set for any particular combination.

1EDLAB

Go to the enter data menu to enter the label that has been set up.

2EDLEVL

Selecting 4EDLEVL displays the following menu:

        1 UP    2 DWN   3       4       5*LEVEL

        The key 2EDLEVL gets an UP DOWN menu with key 5 showing *LEVEL to
indicate that level is being selected.  Level does not change the setup.  It
only selects the level on the selected setup which will be changed by the color
and aperture selection.  See 1EDSET.

Pushing the UP and DWN keys causes the level to cycle through the available
selection.  The selection wraps around.  The top of the screen displays the
current SETUP, LEVEL, COLOR, and APER; and their current values.  Note that
SETUP and LEVEL only select table entry positions while COLOR and APER change
them.  Since this table has so many entries, it is too big to allow full
disclosure of the present entry status without filling the screen and needing
constant redraws.  We recomment that you list the setup table with the LSTSET
command and post it near your terminal.  Most of the entries should be reserved
for frequently used operations.  We recommend that you reserve one for special
purposes and never count on it being set for any particular combination.

        It is convenient to think of this system as consisting of 12
transparent layers each 65536 points square stacked on a drawing board.  A
point could mean anything, but in the USA it is convenient to think of points as
thousandths, at least for printed circuit layout purposes.  Since scale factors
can be applied during the plotting process it is easy to consider the points as
fractional millimeters feet or even light years.  The system allows display of
as few or as many layers as desired.  In addition, one can draw objects on any
number of selected layers at once.  Drawn objects can be different sizes on
different layers.  One of the available colors can be attached to a layer
causing it to be shown.  Drawing and showing a layer are independent
operations.  We can draw on a layer that is not shown and vise versa.  For
example we could draw a red 10 mil line on layer one and a green 15 mil line on
layer two at the same time.  The result will be a white 15 mil line on the
display, however later redraws of single layers would show the lines in their
proper widths and colors.

1EDSET

Selecting 4EDSET displays the following menu:

        1 UP    2 DWN   3       4       5*SETUP

        The key 2EDSET gets an UP DOWN menu with key 5 showing *SETUP to
indicate that setup is being selected.  Setup does not change anything.  It
only selects the setup that will have its entries changed by subsequent level,
color, and aperture selections.

Pushing the UP and DWN keys causes the setup to cycle through the available
selection.  The selection wraps around.  The top of the screen displays the
current SETUP, LEVEL, COLOR, and APER; and their current values.  Note that
SETUP and LEVEL only select table entry positions while COLOR and APER change
them.  Since this table has so many entries, it is too big to allow full
disclosure of the present entry status without filling the screen and needing
constant redraws.  We recommend that you list the setup table with the LSTSET
command and post it near your terminal.  Most of the entries should be reserved
for frequently used operations.  We recommend that you reserve one for special
purposes and never count on it being set for any particular combination.

8END

Ends the current operation.  Usually a line.  A number of other operations do
the equivalent of a line end if their operation would result in some confusion
about the data.

1ENTER

Go toward entering data.  This is on the first menu and is the choice between
non data entering operations and data creation operations.

3ESPLOT

Prints a selected area of the job on an Epson printer.  The Epson or 
compatible must support graphics mode 5.  The program asks for location of the 
upper left and lower right corners of the job area to be plotted and a scale 
factor.  The program uses the screen buffer and successive redraws to print 
the job in vertical strips.  Everything not in background is printed.  Be sure 
that the setup has the proper levels showing.  The only limit on scale factor 
is at 1 mil per dot at the low end.  There is no limit at the high end so you 
can plot as big as a house if you have the patience to wait for the Epson. 

2FILE

Go toward some file operation.  This is on the first menu and selects the file
system to load or to store data.

1FIND

Find the current object type.  Only lines are found in line mode, pads in pad
mode, etc..  A square search is performed on the current grid, starting with
the present location of the cursor.  Lines are found by any point on the line.
When a point on a line is found, the cursor moves to the line starting  point
and the message displays "line found at " current x,y.  The line is drawn
dashed.  Pads are found by their center.  Symbols are found by their tag.  The
tag is the position of the cursor when the symbol origin was located when the
symbol was created.  Symbol data is located relative to the tag position.
Labels are located at the lower left hand corner of their first letter.  Arcs
are located at their center.

The search for an object starts at the current cursor location and continues in
a square search on the current grid.  Note the difference between the current
grid and the M indication at the top of the screen.  The M indication shows the
current step taken by the cursor when an arrow key is pressed or held.  M is
always some multiple of the grid as selected by the 6SPEED and KP5 SPEED SHIFT
keys.  If an object is not on the current grid it will not be found.

When an object is found you may then 2DELETE it or 5REJECT it to continue the
search.   9BACK will abort the search next time the search reaches the upper
left hand corner of its square search pattern.

2GETFIL

Get a file from the file system.  You may load a job or a library.  The major
difference between jobs and libraries is that the job carries with it all the
screen setup parameters, and data located in the job area.  Libraries are
single symbols or collections of symbols.  Note that it is usually advisable to
put your entire job in a symbol sine it is then more portable.

5GRID

Selects the current grid.  Any integral grid is allowed.  How about a 
sixteenth (.0625) you ask?  Sorry, to get a sixteenth you need to multiply 
everything by two in your head or something.  Nice for laying out connectors 
with 0.156" spacing.  But WARNING, CAUTION, LOOK OUT!!!!!  Search only finds 
things on the current grid.  If you have used a funny grid and can't find 
something, look for it on a 1 mil grid.  Better get close to it.  A search on 
a 1 mil grid to find an object in the least fortunate position could take 
thirteen years if the data base is not too full. 

4HRPLOT

This does the best job we can of making a nice dark copy of the job for 
photographic purposes.  Prints 144 by 216 dots per inch in Epson mode 7.  
Things come out scaled the way you request, there is no practical scale limit.  
You are instructed to place the cursor to the upper left and the lower right 
corner of the desired area of the job.  You are then prompted for a scale 
factor.  Since everything is printed three times, this mode is really slow.  
You should use ESPLOT until you get things the way you want and then go to 
lunch while this prints.  

4JOBFIL

Lists on the screen the job files on the default disk.

4KILL

Removes a symbol from the data base.  When a symbol kill is attempted, the
system searches through the entire data base for uses of the symbol.  This may
take a while.  If any uses are found you are told which symbol they are used in
so that you can find and delete their use.  If any symbol uses are found, kill
is not performed.  You must go through and delete every use before a kill is
executed.  This is necessary because nesting is allowed and deleting a symbol
which calls other symbols would create a mess.

4LABEL

Go to enter lettering.  Be sure to see NOLAB/SHOLAB.  You must have loaded an
alphabet library.  If you don't have the alphabet library in place lettering
will be drawn as dots.  If you have only a partial library in place,
unavailable letters will be drawn as a dot.  If you are not going to do
lettering everything goes faster without the alphabet library in place,
particularly loads and saves.  It is best to save the lettering for the end of
the job.  Labels are also drawn slowly.  This is because they are drawn line
segment by line segment.  While this is slow, it has some advantages.  See the
3MAKLAB command for some astounding things that can be done with labels.

KP4 LEFT ARROW

Moves the cursor toward the left of the screen.  When the cursor reaches the
screen left side, it hangs there although the virtual cursor position as
indicated by the X= and Y= indications at the top of the screen continues to
move.  Data is entered and found based on the X= , Y= cursor positions.  Thus
it is possible, and sometimes desirable to enter items off the screen.  This is
particularly handy for long interconnections where the position of the remote
end is known.

1LINE

Select line entry and edit.

3LIBFIL

Lists on the screen the library files available on the default disk.

2LIBSYM

Make a library from the open symbol.  This is actually a very complicated
process.  The symbol may call other symbols, and they in turn still others.
When 3OPRSYM is selected a redraw of the symbol is initiated, during which a
list is kept of all the symbols used in the open symbol.  This enables creation
of a library containing all the symbols used in the open symbol.

1LIST

Lists the symbols used in a symbol.  The symbol itself is included and is
considered to be on level zero.  All the symbols used are named and the number
of times they are used at level one, level two, and levels greater than two are
listed in a table.  If you use distinctive symbols for each type of part this
is a good way to get a parts count.  Likewise if you use a symbol for component
pads, you will also be able to get a hole count.

If, as we do, you use many layers of symbols; it is easy to loose track of
where symbols are.  Since you can only find symbols that are one level down
from the present, a table like this is useful for complicated jobs.

7LOCATE

Enter the currently selected type of object into the data base at the current
cursor position.  For a line this produces a line start if none has been
started, or a line mid point otherwise.  Line starts only generate a tick sound
to indicate that the line has started.  Lines are not drawn until two points
are accumulated.  For other objects the entry is made and the object is drawn.
Locate does nothing if you are not properly set up to make an entry.  You are
not always told that nothing has happened though if nothing is drawn you might
suspect a problem.

1LOCLIN

Select entry of lines.  This gets the menu that allows find, delete, etc..

2LOCPT

Select point mode.  This gets the menu that allows find, delete, etc.. For the
time being this is only useful for the deletion of single points from an
existing line.  Later we will make this menu more useful by allowing the
insertion of points in an existing line.  Users will quickly discover why we
want to be able to do this.

1LOCSYM

Select entry of symbols.  This gets the menu that allows find, delete, etc..
If nothing happens when you locate a symbol you have probably forgotten to name
one.

1LODJOB

Load a job from the default disk.  This can take a while.  About 3 minutes for
a full sized job with this demo program on a PC, much less with an AT as the
loading process is mostly compute limited.  If you plan to work with really big
jobs on our full sized program you will want an AT.  During the loading process
the job is assembled from scratch and everything is linked and relocated.
After a load operation "what you see is what you have".  If the job loads
without complaint you can be pretty sure that everything is OK.  Only one job
can be loaded and it must be loaded first.  The setup files on the job
overwrite those of the setup files.  This means that the aperture and view
tables on the saved job are restored with it, as well as the cursor position
and a few other things.  If you want to preserve the setup parameters, save
your entire job as a symbol (you can only do this if you have created it as a
symbol - which we recommend) and load it as a library.

2LODLIB

Load a symbol from a library.  If you are going to load a job you must do that
first.  There is no limit to the number of libraries that can be loaded except
by the length of the symbol table which is 300 symbols in this demonstration
version.  The first symbol in memory wins, and other symbols with the same name
are ignored.  See "HOW TO REPLACE A JOB SYMBOL WITH A LIBRARY SYMBOL" in the
HOW TO  section for a way around this.  The system ignores duplicate names
since otherwise many replications of common symbols would occur.

2LROT=

Rotates individual letters in a string.  Each time hit it steps by one wrapping
around to zero and rotates the letters 90 degrees counter-clockwise.  By using
LROT=1 and SROT=3  you can produce an "hotel" sign type label.

5LSTKEY

Lists the labels assigned to the keyboard along with their sequential and hash
positions.  Nothing prevents you from editing the keyboard labels.  If you
don't like the way we draw a "G" for example then just open the symbol G$BOLD
and have it your way.

We hope to get wonderful alphabets to distribute to our users.  How about
something in Gothic?

4LSTLAB

Lists the labels that you have created.  These all start with the entered
string and end with $LABEL.

4LSTSET

Lists the sixteen setups.  It takes two pages but we find it necessary to print
this and post it by our terminal.   We can never remember if we have used odd
or even setups for level 1 or where we put the green 15 mil lines.

3LSTSYM

Lists the symbols.  The labels and keyboard symbols are listed separately, see
above.  You are given a rough measure of their size and their sequential and
hash positions.

3MAKLAB

When 3MAKLAB is pressed you are asked to enter a label.  You may then type an
arbitrary string from the keyboard.  This string is then taken apart character
by character and a search is made of the symbol table for (character)$BOLD.  If
such a symbol is found, it is scaled and rotated according to the parameters
set by 2SETLAB and assembled into a new symbol named (arbitrary string)$LABEL
which is again rotated and assigned color and level from the current setup.  If
some of the keystrokes in the arbitrary string entry are not found in the
symbol table, they are replaced by a dot.  After this process is complete your
are put into the  1FIND  2DELETE ... menu where you can locate the string as
often as you want.  A future entry of the same string will find it in the
symbol table and thus conserve space.

This scheme allows interesting translation possibilities.  When "A" is entered
in a string, the system looks for the symbol A$BOLD.  The system has no way of
knowing that A$BOLD represents an "A".  There is nothing to prevent you from
editing the A$BOLD symbol to make it, for example, a Chinese character.  Or a
small circuit board, or the drawing of a house or ...

We will welcome font libraries of other designs.

1MIR=

Mirrors labels.  Cycles between MIR X, MIR Y, and MIROFF.  You want to mirror
some of the labels so that when you plot the back side of the board with the
emulsion side up, the labels will be "right reading" when viewed through the
emulsion from the back side.  STANDARD.DOC lists one way to do everything so it
will come out right.  It is easy to find a combination which gets you a mirror
image of the board you want.

2NAME

Accepts a symbol name for later symbol entry.  The name stays in memory as the
current symbol unless some other symbol is found.  Then the found symbol
becomes the current symbol for entry.  This is so a symbol can be moved by the
find, delete, locate sequence.

1NEW

Initiates creation of a new symbol.  You will be asked for a symbol name.
Because of the lettering features, symbol names are different if the case of
any of their letters is different.  If a symbol with the same name (and
identical case) is found in memory you get the "symbol already created must
open to edit" message.

2NOLAB
2SHOLAB

Since labels are drawn out of individual lines they can take a long time to
draw.  Usually the labeling is not interesting on a drawing except when being
modified.  This key alternates as pressed an causes subsequent redraws to show
or not show the labels as indicated.

5OPEN

Prompt asks for the symbol name.  Remember case must match.  If the symbol is
found in the symbol table, it is drown on a scale that attempts to fill the
screen.  You may now select the type of entry to be made.

3OPRSYM

Redraws the open symbol while keeping track of the nested symbols used in the
open symbol.  You are then given the opportunity to make a library of the
symbol, to list the symbol and its nestlings, or to change its name or replace
it with another symbol.  Note that while you are allowed to abort the OPRSYM
redraw, the only way that you can get to the next menu is to allow the redraw
to run to completion.  This is necessary to allow proper generation of the
symbol lists.

3ORIGIN

When a new symbol is named, you are asked to locate the origin.  The origin can
be located anywhere in the work space.  Data entered into a symbol is located
relative to the origin.

5OTHER

Select arc entry and edit.  Later we will add other things through this menu,
thus the name.

2PAD

Select pad entry and edit.

5PALET

Pushing this key causes the display to alternate between the two available
medium resolution palettes.

3PLOT

Select creation of plotter output.

2PLTFIL

Create a plotter output file.

1PUTFIL

Select creation of a job or library save file.

3PRTSC

Prints the screen on a late model Epson or compatible printer.  Must support 
graphics mode 5.  

10REDRAW

        Function key 10 always initiates a redraw sequence.  It always destroys
the current screen display, first by writing a menu over it, and then by the
redraw operation.  Redraw causes the key display below and puts up on the
screen 15 preselected display areas.  The distribution copy has some of these
labeled while others are blank.  You will want to customize this menu to suit
your style and your job.  The storage area contains +- 32,768 data points in X
and Y.  It is usually desirable to display only a fraction of this space.  By
using the SETUP key, which shows up on many of the menus, it is possible to
specify the x and y coordinates of the upper left hand screen corner and the
screen width.  See "HOW TO SET UP REDRAWS" in the "HOW TO" section.  Once you
have done this, REDRAW allows saving this setup with the name of your selection
- like "memory section".  It is then possible to quickly switch from one
section of your layout to another by pushing redraw (F10) using the UP - DWN
keys to select a pre-stored selection then pushing SELECT (F3) to initiate a
redraw of the selected area.

        Pushing redraw a second time after the selection menu is presented
causes a redraw at the current screen layout.

        Redraw can take a long time.

4REGION

        This key allows setting up the area of the 65536 x 65536 space that
will be displayed.  Region allows selection of x and y offsets and the screen
width.  ALL selects nearly the entire screen.  AUTO asks for a screen width,
then scales the display for the entered width with the present cursor position
at the top left corner.  SPACE asks you to specify the top left hand corner and
a screen width.

5REJECT

Rejects the result of a search operation.  The search continues from the point
of the found object.  F9 will stop the search and back up the menu.

4RENAME

Renames a symbol.  See "HOW TO REPLACE A JOB SYMBOL WITH A LIBRARY SYMBOL" in
the HOW TO section.

3REPLAC

Replace a symbol with a different symbol.  This is a global edit so be careful.
Remember "replace A with B whoops-replace B with A" can create an unsolvable
mess.  See HOW TO above.

KP6 RIGHT ARROW

Moves the cursor toward the right of the screen.  When the cursor reaches the
screen right side, it hangs there although the virtual cursor position as
indicated by the X= and Y= indications at the top of the screen continues to
move.  Data is entered and found based on the X= , Y= cursor positions.  Thus
it is possible, and sometimes desirable to enter items off the screen.  This is
particularly handy for long interconnections where the position of the remote
end is known.

5ROT=

Pushing this key causes it to gain a label of 0 to 3.  It is at zero initially.
Symbols entered with ROT= other than zero will be rotated in 90 degree
increments with 1 being 90 degrees counterclockwise.

5RVPLOT

See 4HRPLOT.  This reverses the screen image.  Because of the way the system 
draws circles, there tends to be open spaces in the fill.  This will relly 
mess up a reverse plot unless you fill in the open spots with lines.  Not much 
of a job if a symbol is used for all the round pads, since you only have to do 
it once.  

1SAVJOB

Saves the entire data base as a job.  You are asked to enter a job name.  Two
files are created.  (Jobname).PCD and (Jobname).PCS.  Names are restricted to 8
characters per DOS rules.  (Jobname).PCD contains all the setup parameters.
(Jobname).PCS contains all the job symbols, and one special symbol which is the
data in the job itself.

This is the normal way to save your work when you wish to continue and restore
everything like it was when you discontinued work.  Everything is saved, all
the job date, the current screen layout, and even the cursor position.

2SAVLIB

Saves all the job symbols as a library.  Note the difference between SAVLIB and
LIBSYM.  SAVLIB saves all the symbols on the job as a library.  Even unused and
abandoned ones.  LIBSYM saves all the symbols in one given symbol as a library.
Only those used are saved.  If you make the whole working job a symbol, LIBSYM
provides a nice way to condense the job removing all the accumulated junk.

5SCALE

Provides for scaling labels variable symbols.  The alphabet we provide has been
drawn 0.125 high.  SCALE allows multiplying this size over a range of 100 to
0.01.

4SCREN

        SCREN is accessible through SETUP which appears many places on the key
tree.  It provides a means for setting how and where items are displayed on the
screen.  It introduces two layers of menus.

3SELECT

        Causes a redraw with the area parameters that were in place when the
numbered selection was stored.  When the redraw is complete, the menu is
restored to the menu in place when redraw was pressed.

2SETLAB

Accesses a menu which allows rotating letters, rotating an mirroring strings,
and scaling labels.

4SETUP

SETUP appears many places on the screen.  It provides access to menues which
control data level entry, object display color and size, and screen size and
position in the data space.

1SET=
2SET=
3SET=
4SET=

Display the four preset SETUPs when in the STITCH mode.  The keys display the
preset SETUPs.  After a line is started in stitch mode, pushing a SET= key
which has a setup different from the current one will cause the via symbol to
be located and the line continued with the new setup parameters.

2SHOLAB
2NOLAB

Since labels are drawn out of individual lines they can take a long time to
draw.  Usually the labeling is not interesting on a drawing except when being
modified.  This key alternates as pressed an causes subsequent redraws to show
or not show the labels as indicated.

1SOLID
        Pressing this key produces a beep to indicate something has happened
and subsequent lines are drawn solid.

1SPACE

Allows selection of the redraw display by manual input of the x,y coordinates
of the upper left hand screen corner and the screen width.

6SPEED

Selects cursor movement as the number of times the grid spacing that it moves
for each key press.  The speed cycles in a 1,2,4,5,10,20,40,1... sequence.

KP5 SPEED SHIFT

Speed shift multiplies the current speed by 10.  We operate with the SPEED set
to the current grid we are using for locating objects.  Usually this is 0.025
or 0.100.  This works well in a small area.  When we have to move a big
distance we hit SPEED SHIFT and move until we get close, then we shift back.
We find it convenient to operate  with one hand on the function keys for
operation selection, and one hand on the keypad for movement.   Caps lock must
be on and num lock and scroll lock off for SPEED SHIFT to work.  We have
resisted making monitor calls to find the state of these keys till they are
provided by the system.

3SROT=

Rotates an entire string (or variable symbol).  When the key is pressed it
displays its value from an initial value of zero.  Rotations are in 90 degree
steps from horizontal to the right.

5STITCH

Move to stitch mode.  Stitch allows the entry of printed circuit traces while
moving between layers of a multi-layer board without the need to switch between
lines on different layers and pads.  You are allowed to preset four setups and
a via symbol which are presumably used to switch between traces on a four
level board.  These setups appear on function keys 1-4.  Pushing any of these
four keys instantly switches to the indicated setup.  You may now start and end
a line in the conventional way.  In addition, pushing a setup key that is not
the currently active one, ends the current line, locates the via symbol at the
current cursor location, switches the setup to that of the key pressed, and
starts a line with the new setup.   Note that in the usual generality of
symbols in this program, anything is allowed as a via symbol.

This allows fast insertion of traces which must move from layer to layer over
their length.

Note that there is no rule that stitch must be used to stitch.  The via symbol
is only inserted if a setup is changed while a line is in progress.  Thus
stitch can also be used for four quick setup changes while in line entry mode
if care is taken to only change setups when a line is not in progress.

5STSET

Switch to stitch setup mode.  Tells you that pushing function keys 1-4 will
allow assigning setups to those keys.  Push as many as you will need and enter
a setup.  Then push VIASYM to assign a symbol to the via between board layers.
When you have things the way you want them use back (F9) to go back to the menu
where stitch is active.  Stitch stays setup until you change it, though
presently the stitch setups are not saved from session to session.

3STYLE

        Style presents a menu which allows selection of the way in which an
entered line is shown.  This is intended for mechanical drawings reproduced on
the dot matrix printer.  All photo and pen plotters may not respond to this
option.

3SYMBOL

Select entry of symbols or other symbol operations.  Symbols may be entered
into symbols, but not into themselves.  We do not yet protect for all possible
loop conditions, i.e. A calls B which calls C which calls A, but we do protect
for the more common cases.  If you do succeed in creating such a loop we die
gracefully at level 20 and put you back into the main menu, where you should be
able to rescue your work.

1UP

Advances to the next higher numbered selection.  Numbers wrap around on
reaching maximum.  The selected position is displayed on the UP and DWN keys.

KP8 UP ARROW

Moves the cursor toward the top of the screen.  When the cursor reaches the
screen top, it hangs there although the virtual cursor position as indicated by
the X= and Y= indications at the top of the screen continues to move.  Data is
entered and found based on the X= , Y= cursor positions.  Thus it is possible,
and sometimes desirable to enter items off the screen.  This is particularly
handy for long interconnections where the position of the remote end is known.

5VARSYM

VARSYM asks for a symbol name then gives you the edit menu.  Note that variable
symbols are "labels" and are found as such.

Variable symbols are an essentially useless but fun adjunct to the way we do
labels in this program.  Keyboard label characters used to make labels are just
symbols, with all the characteristics of regular symbols.  When you enter a
label, you are allowed to assign an arbitrary level, color, scale, and aperture
to it.  The way we handle this is to separate the form of the label symbol from
the level, scale, aperture, and color that happened to be assigned to it when
it was created.

Any symbol can be used as a variable symbol.  When entered, the symbol form is
scaled, rotated, colored, and drawn with the assigned apertures on the assigned
levels.  Note that only its form is used.  If the original symbol was a printed
circuit with different apertures on different levels, all this is ignored.

Obviously this is nonsense for printed circuits.  It would, for example, allow
scaling a standard screw drawing which could then be placed on the desired
level in the desired color.  We have used this for mechanical assembly drawings
where the ability to change a symbol's color allows distinguishing it for study
of clearances.

5VIASYM

Pushing this key allows entry of the name of the symbol to be used as a via
when in stitch mode.

5*APER
5*COLOR
5*LEVEL
5*SETUP

These labels appear in the setup menu to indicate the item that is being
changed.

2*MAKE

Nothing implemented.  Here we plan to allow making some area of a job into a 
symbol. 

3*MODFY

Nothing implemented.  This appears on the edit menu.  We plan to allow 
insertion of line points and move and copy of lines and symbols. 

1*PLOT

Nothing implemented.  Provision for direct output to a plotter.



```
{% endraw %}

## DEMO.DOC

{% raw %}
```


DEMO.DOC

DEMONSTRATION

First be sure you have made a backup of the distribution disks.  If you are not
familiar with backup procedures, then this program may have less documentation
than you will require, still why not try.

        To make a backup:

        1. Boot the system.  The system disk will be in drive A
        2. Type DISKCOPY A: B:
        3. In answer to the prompt load the distribution copies of DROEGE one
           at a time in drive A and new disks in drive B and hit any key as
           instructed.  It is always good practice to write protect the disk
           you are copying from by covering the notch in the side of the disk
           with a protection tape.

The copy process should end with the A prompt after you have answered N to the
copy another? prompt.  Replace the system disk in drive A and switch to the B
disk by typing B: (Return).  Leave the new copy in drive B which contains the
files listed below and you are ready to start.  You can check the directory by
dir(return) when you have the B: prompt.

This session is designed to give an overview of the design capacity of the
DROEGE program.  You will need the disk with the following files:

                DROEGE.EXE
                SETUP.PCD
                SETUP.PCS
                DEMO.PCD
                DEMO.PCS

Besides DROEGE you will always need SETUP.PCD, and SETUP.PCS to run.  The disk 
containing these files can be removed after the program puts up its first 
menu.  You would normally change to your job storage disk at this point.  For 
this demo, you can run with the disk (disk 1) which contains the above files. 

First some conventions.  In general, the line editing functions work in the
standard way.  That is you can use the back arrow to delete mistyped characters
etc..  Most operations with DROEGE are done using the Function keys at the left
of the IBM PC keyboard, which are designated F1 - F10.  Cursor movement is
controlled by the number keypad arrow keys at the right of the keyboard.  We
designate these KP1-KP9.  We will indicate a particular keypress by *** Key in
this demonstration, followed by the function menu that appears at the bottom of
the screen after the keypress.  Some items will be entered from the keyboard.
We will indicate this by xxxxxx (ENTER), to indicate some keyboard entry
followed by a carriage return.

We suggest that you operate with a system disk in drive A and the DROEGE disk
in drive B, with B the default drive.  Hard disk owners have a number of
options.  Place the above disk in the default drive and type:

DROEGE (ENTER).       
The disk will whir for a few seconds and a copyright notice and the registered
owners name will appear.  After you have seen the notice, hit any key and in a
few seconds more the screen will turn blue(if you have a color monitor - you
must at least have a color adapter).  The bottom line will now read:

                1ENTER  2FILE   3PLOT   4SETUP  5PATH
                      
You will see a status line at the top of the screen and a command line at the
bottom of the screen.  Since we want a demonstration file ask for the file
system by pressing the 2FILE function key:

*** F2          1PUTFIL 2GETFIL 3LIBFIL 4JOBFIL 5LSTSET

This causes presentation of a new command line and a change in the status line
to show that we are now at level 2 of the command tree.  Since we want to get 
a demonstration file we press the 2GETFIL function key: 

*** F2          1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY

We want to load a job (more about jobs and libraries later) so we press the
1LODJOB function key:

*** F1

We now get a message on the second screen line asking us to enter the requested
file name.  We want the file DEMO so type:

DEMO (ENTER)   1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY

The disk will spin for about 3 minutes (40 seconds if you have an AT) and then 
there will be a ten second pause while the program links the loaded symbols.  
A circuit will now start to draw at high magnification.  We start with this 
display because it looks nice.  You can see most of one IC and a few other 
components.  We would normally only work at this magniffication to check for 
clearances. 

We can draw our layout on the screen with arbitrary scale.  Select redraw by
pushing  F10.

*** F10         1UP 7   2DWN 7  3SELECT 4SETUP  5ENTER

A menu of previously set up layout views appears.  We can set up 15 such views.

Now let us look at the big picture.  To select the big picture we use F1 and F2
to move up and down the display menu.  We have preset and named various areas
of the circuit area.  Later we will tell you how to set up display areas to
suit your design preferences.  The closest rout to the big picture is to hit F2
once.  14 F1's would also get you there.  Note that the number on the key
changes to indicate the layout we have selected.

*** F2          1UP 6   2DWN 6  3SELECT 4SETUP  5ENTER

We now have the number of the item we want so we select it:

*** F3          1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY

The screen now clears and the entire circuit is drawn.  This scale is too small
for data entry purposes but is a good scale for planning the layout.  Later we
will show you how to turn off some of the levels to reduce the clutter.  For
now we see a small circuit with 14 IC's, 10 resistors, 10 capacitors and a
connector.    You will see funny lines hanging off the bottom of the layout.
This is because it interconnects with another part of the circuit and these
components were entered with the two parts put together.

For practical work we use an intermediate scale between the two shown so far.
We will look at the upper left hand corner.

*** F10         1UP 6   2DWN 6  3SELECT 4SETUP  5ENTER
*** F2
*** F2
*** F2
*** F2          1UP 2   2DWN 2  3SELECT 4SETUP  5ENTER
*** F3          1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY

This layout is a good working size.  If we have a larger job, we tend to break
it up into working units of this size.  Larger units take too long to redraw
(we are working on that) and smaller units require too much work to connect
them to their neighbors.  With more resolution we would put more parts on the
screen.  The upcomming licensed version will support the EGA which provides
four times the number of pixcells.    This layout is part of a larger layout
which we will now examine.  This in turn is part of a still larger board which
is too large to fit in the memory of this free version.  We will now travel
some distance through the key tree.  In case you get lost, keep hitting F9
until the machine beeps, then answer anything but yes and you will be at the
menu:

                1ENTER  2FILE   3PLOT   4SETUP  5SYMLST

You should then be able to pick up the trail through the demonstration.  When
it seems obvious we will now omit the command line.

*** F9
*** F9          1ENTER  2FILE   3PLOT   4SETUP  5SYMLST

You may recognize this at the entry command menu.  We will move into the menu
structure to look at a symbol.

*** F1
*** F3
*** F3
*** F5

After F5 the machine beeps and we are asked to enter a symbol name.  Upper and
lower case are distinguished in symbol names so be sure to type in upper case:

STRIP (ENTER)

The screen clears. You may recognize the first part of the circuit drawn as the
previous layout.  You will notice that it is rotated by 90 degrees.  This
circuit is a mixture on a number of different techniques.  It includes CMOS,
LSTTL, VMOS, Bipolar, discrete components, a transformer, and even a relay.
The left end is a digital bus with D/A converters.  The middle section contains
operational amplifies which control the high voltage power supply at the right
hand end of the board.  (Sorry, we ran out of space on the distribution disk 
and removed the center symbol which had been HVSTRIP.)  The circuit produces 8 
killovolts at 2 ma.  and is stable to 100 mv. RMS.  Twelve different voltages 
are read back through an analog bus to a 16 bid A/D converter where signals 
are measured to 100 microvolt precision.  The output voltage is controlled to 
within 100 millivolts of the selected value. 

The layout contains 25 integrated circuits, 110 other components and 600 holes.  
Since the circuit takes two minutes to redraw on an XT you may wish to use the 
F9 key to abort a redraw while exploring.  This layout is composed of 28 
different symbols which are nested to level 4.  That is some symbols call 
other symbols to level four.  This layout contains only the symbols: 

                HVBOTTOM
                HVSTRIP
                DIG-DAC

These symbols are in turn composed of other symbols.  Let us explore back to
see how this is done.

*** F9
*** F9 ... Enough times until the machine beeps and asks if you want to exit
           the symbol.  Answer y.  The machine beeps again and tells you it has
           closed the symbol.

*** F9          1NEW    2*MAKE  3ORIGIN 4KILL   5OPEN

*** F5

In answer to the question enter "PAD62S"

PAD62S (ENTER)

A square pad appears at the center of the screen.  It is quite large.  When we
open a symbol we automatically scale it to fill the screen.  While it looks
like a simple square if we used the machine facilities to examine it we would
find that it actually consists of four objects.  It is a 62 mil square pad on
layer one, which we arbitrarily define as the top side of the board.  It is
also a 62 mil pad on side 2, which we call the board bottom.  It is a 15 mil
drill spot of layer 3 which contains the drill information.  Lastly it is an
eighty mil pad on level 5 which we define as the solder mask.  If it could, it
would have  an outline on level 4.  These are strictly our internal
conventions.  As a user you are free to use the 12 layers any way you want.

Now we will see how this is used in another symbol.

*** F9 ... y to question

*** F5

In answer to question enter "IC14U"

IC14U (ENTER)

Now we get a 14 pin IC outline.  This was constructed from 14 of the previous
symbols and a line on level 5 to show the package outline.

*** F9 ... y to question

*** F5

In answer to question enter "IC4073"

IC4073 (ENTER)

Now we see a new symbol made from the previous symbol.  IC14U is our general
purpose 14 pin circuit.  It is sort of like the old printed symbols use for
tape layout.  Now we have customized this one to parallel it's three internal
gates to drive a high power VMOS transistor.  We did this because we were not
quite sure where we were going to place it and we wanted to drag around its
interconnections with it.

*** F9 ... y to question

*** F5

In answer to question enter "HVBOTTOM"

HVBOTTOM (ENTER)

The high voltage section of the board now appears.  You can find IC4073 at the
lower left of this circuit.

This is the end of this demonstration.  You may hit F9 enough times, answering
y to the questions to get back to the system.

The next section, TUTOR.DOC, will lead you through entering lines and creating
symbols.


```
{% endraw %}

## ERRORS.DOC

{% raw %}
```

ERRORS.DOC

This is a listing of all the error messages generated by DROEGE.  In case of
emergency, we have built in a restart procedure which will get you out of most
loops.  If the keyboard shift keys still respond, then pressing KP9 with Caps
Lock and Num Lock on will break out of most DROEGE problems and put you back
into the main menu.  One problem this does not seem to cure is overfilling a
disk.  While we close the file, the system does not at present recover.  Until
we fix this be cautious on a save.  Be sure you have enough space left on the
disk.

"CAUTION - OPERATION DANGEROUS"

You are replacing one symbol by another.  This is a global edit and if you
replace A by B then realize that you did not want to replace all A by B and
attempt to get back by replacing B by A you can get into big trouble quickly.

"DISK PROBLEM"

As below except the error occurred while attempting to write a file.  The most
common problem is not enough space left on the disk.  We are not always
successful in closing the files to give you another chance so be sure you have
enough disk space before saving the job.  Best to keep several fresh disks on
hand and grandfather, father, son them.

"DISK PROBLEM DURING LOAD"

The system encountered some disk problem while attempting to load a PCD file.
Make sure you gave a file name that exists on the default disk.  Make sure the
disk is ready, etc..  You also get the ERROR NO m AT LINE n message to give you
a clue.

"DISK PROBLEM LOADING SYMBOLS"

See DISK PROBLEM DURING LOAD.  Problems were encountered while loading a .LIB
or .PCS file.

"ERROR NUMBER m AT LINE n"

Basic has detected one of the errors in Appendix A of the Basic manual.  See
this appendix to interpret these errors.  Yes, we must confess this is written
in BASIC, with some assembly code.

"FATAL ERROR"

An unexpected error was found.  We scare you to make sure that you are
cautious.  Best not to overwrite the last job save with this, but it might
still be useable.  After this you get the ERROR NUMBER m AT LINE n error
message.

"HASH ENTRY < 0 ERROR"

This should never happen.  We hope we have fixed all the reasons for this.  You
might be able to recover with the KP9 procedure.

"HASH TABLE IS FULL -FATAL"

You have used up all the available space.  A save and reload might give you a
few spaces.  If you have made the entire job a symbol, saving it as a library 
will clear away all the unused stuff and might gain some space, particularly 
if you have symbols you don't use.  Time to send money for the bigger version. 

"INVALID SETUP.PCD FILE"

This error dumps you back into the system.  We make checks to insure that the
licensee identification has not been modified.  It is possible that your
SETUP.PCD file has an error that was not detected by the system.  If so, your
backup copy should work.  More likely you have tried to change the name and
address or other items which we do not want you to change.  True hackers should
be able to break our code scheme.  You could probably more easily hold us up at
gun point.  Either way, you are doing something amoral, if not illegal by
attempting to use the program in a way we have not authorized.   While we are
not copy protected, we want to be able to identify where you got your copy.

"JOB DATA NOT FOUND"

When loading the initial files, the job symbol was not found.  This indicates
that the file SETUP.PCS is faulty.  Obtain a backup set of SETUP.PCD and
SETUP.PCS and try loading again.  If this error occurs when loading a job, it
means that the file "JOBNAME".PCS is faulty.  Try to use a backup.  It is
difficult for either of these errors to occur unless you have been editing the
job disk files, or there is an undetected disk error.

"JOB SYMBOL NOT FOUND"

Same as JOB DATA NOT FOUND.

"LOADED SYMBOL REFERENCES AN UNAVAILABLE SYMBOL - SYMBOL PARTS WILL BE LOST"

Something is wrong with the symbol library being loaded.  Try saving each
symbol separately as a library if you are about to loose a lot of work.  You
may be able to identify the sick symbol this way.  The problem is that the
symbols do not call each other properly.  You can almost surely save all the
lowest level symbols,  and probably all but one of the higher level ones.  It
is probably worth trying if you don't have a good backup.

"MUST NAME SYMBOL  HIT KEY F01 TO NAME"

The origin key was hit before the symbol was named.

"NOTHING ENTERED"

You attempted to enter a nul label.  Try again.

"OVERFLOW-DATA BASE MAY BE FAULTY"

An overflow or division by zero has been detected.  Usually this does not hurt
the data base, but the item just entered is probably nonsense.  Delete it if
you can and reinsert the item with better parameters.  Can be caused by
defining an arc with three points in a straight line.

"PLEASE CONSIDER JOB BACKUP"

The program has completed a full survey of the data base and has just updated
the %L indication.  You will have less than the indicated %L if you have been
doing any work.

"PLEASE NAME A SYMBOL"

Symbol locate was attempted when no symbol was named.

"STRING SPACE FULL-DELETE STRINGS"

Basic has run out of string space.  Not very likely if you have a full memory
complement, but possible on a small machine.  There is probably not much you
can do, but deleting things that use string space, like symbols and labels
might help.

"SYMBOL ALREADY CREATED MUST OPEN TO EDIT"

The symbol named as a new symbol was found on the symbol list.

"SYMBOL CLOSED"

Symbol operations have been terminated and you are now back in the job.
Anything entered will go into the job area even though the symbol data still
appears on the screen.

"SYMBOL CONNECTS TO SELF - FATAL"

You have succeeded in locating a symbol in itself.  This is a naughty thing to
do as the system would not know when to stop.  We have put in a number of
checks to prevent this and they all seem to work, still you might succeed.  If
this happens, you are put back in the initial menu and we preserve most work we
hope.  If you attempt to do this indirectly, i.e. A includes B which includes C
which includes A, the results are somewhat unpredictable, but we think we do the
right thing.  We wrote a scheme to prevent this in our spec., but we got tired
of coding.

"SYMBOL DOES NOT EXIST TO KILL"

See SYMBOL NOT FOUND.  An attempt was made to kill a symbol which was not
found.

"SYMBOL LEVEL EXCEEDS 20"

Symbols are calling symbols at level 20 or beyond.  We will make this number
larger for anyone who can think up a reasonable use for nesting this deep.  We
have never gone beyond 6 on a real job.  It is still possible that you have
found a way for a symbol to call itself.  We try to back you out gracefully.

"SYMBOL NOT AVAILABLE"

A symbol was not found when requested for placement in another symbol.  See
SYMBOL NOT FOUND.

"SYMBOL NOT FOUND"

Usually you have just entered a symbol name.  Remember the symbol names know
about upper and lower case so be sure to type a symbol name the way you entered
it.  The program has searched the symbol table and the entered symbol has not
been found.  If confused, list the symbols.  You may have forgotten your
symbol's name or made a typo while entering it.  See LSTSYM in COMMANDS.DOC and
QUICK.DOC.

"SYMBOL REQUIRES REPAIR"

When symbols are closed they are tested for consistency.  The symbol just 
closed has a problem which will cause trouble if used.  You may be able to use 
it as the last symbol loaded if you are desperate.  Beware of loading it ahead 
of many other symbols as there is an increasing possibility that they will be 
mixed up.  We believe the error for which this test was inserted has been 
repaired,  but it is a very complex part of the symbol process.  Be warned.  
If you get this error it is best to make a symbol library out of it and remake 
it from scratch.  We suggest putting it on a job by itself, then opening a 
replacement symbol and duplicating its data by overlaying replacement data 
over it.  This works well if you don't have to do a redraw.  You may be able 
to localize the offending party by opening and closing each sub symbol.  You 
could also look for a symbol repairman in the yellow pages. 

"SYM TABLE FULL-NEXT SYM DELETES THIS ONE"

You are at the last place on the symbol list.  Write for a version where you
are allowed to name a longer symbol list (The purchased version).  You might
try to kill a few unused symbols.  Or load the program without the labels which
take up a lot of list positions - but you can't do this if they are used.


```
{% endraw %}

## FILES905.TXT

{% raw %}
```
Disk No  905
Program Title: DROEGE version 1.86 (Disk 2 of 2)
PC-SIG version 1.1
 
This is the second disk of a two-disk set.  Please refer to disk #904
for full information.
 
Usage:  Manual PC Board Layout
 
System Requirements:  320K memory, one disk drive, and color graphics.
 
How to Start:  Do not attempt to use this program without reading at least
some of the documentation. To get started, print the file called FIRST.DOC
as follows: type COPY FIRST.DOC PRN (press enter) follow the instructions
given in this document to print the manual.
 
Suggested Registration:  $25.00 initial fee then $25.00 per plot.
 
File Descriptions:
 
READ2    ME   Brief Program Description
FIRST    DOC  Summary and Index of the Documentation
INTRO    DOC  Introduction and design philosophy.
DEMO     DOC  Demonstration of features.
TUTOR    DOC  Step by step instruction in use.
ABOUTPC  DOC  How printed circuit boards are made.
LEARNSYM DOC  Step by stem instruction in use of symbols.
QUICK    DOC  Quick command summaries.
HOWTO    DOC  How to do some more complex operations.
MANUAL   BAT  Prints the primary manual - or print separately.
APPENDIX BAT  Prints the appendices below - or print separately.
COMMANDS DOC  Complete command reference.
KEYTREE  DOC  Map of the key sequences.
ERRORS   DOC  Listing of the errors and their meaning.
STANDARD DOC  A set of standards to get you started.
PLOTOUT  DOC  The output plot file format.
MISC     BAT  Prints the following miscellaneous documents.
PHOTOOL  DOC  How to Get a Phototooling Set
PRICE    DOC  Price list for photoplotting service.
PROD     DOC  Product specifications summary.
USERS    DOC  Form for User Submissions.
REGISTER DOC  Registration form (Free).
UPDATE   DOC  Calender list of Bug Fixes
PRINTALL BAT  A batch job to print everything
ORDER    DOC  Order form for photoplotting service.
ROLAND   BAS  A BASIC program to print on Roland D x-y 100
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## FIRST.DOC

{% raw %}
```


FIRST.DOC

Copyright 1986, 1987, 1988  by Thomas F. Droege, All Rights Reserved.
Version 1.86 21 August, 1988

                   *******************************
                   *  BE SURE TO READ UPDATE.DOC *
                   *******************************

                               DROEGE

      Design Robot for Origination of Exacting Graphic Engineering

DROEGE is a general purpose program for the design of printed circuit 
photomasters.  Is was created as a demonstration program for our low cost 
precision photoplotter.  As it was developed it became more and more useful as 
a design tool, so eventually the circuit boards and the mechanical drawings 
for our photoplotter were done using this program.  

This is a manual CAD system.  That is, it does nothing automatically like 
schematic capture, wire listing, routing, parts lists, etc..  It does provide 
a computer aided equivalent of a taped master or drawing board with the 
advantage that things are always in perfect registration and one can work on 
selected layers.  

General features are a 65 x 65 inch working area 12 layers deep.  Resolution 
over this area is 0.001 inch.  At least this is the way it is labeled - the 
output can be scaled to anything so what is really provided is a 65000 X 65000 
point working space.  The layers can be turned on and off and assigned to any 
available color.  Lines, Pads (something a photoplotter can do - a small 
object drawn all at once), Symbols (a named collection of other objects), 
Arcs, and Labels can be entered.  The Symbol feature is particularly powerful 
since Symbols can be nested within Symbols to many levels (20) allowing 
construction of very complex objects with a few keystrokes.  

The program being distributed through free channels is very powerful, but is 
missing some of the convenience features of the commercial version.  The main 
differences are lower display resolution, CGA versus EGA; reduced editing 
commands; and less available memory.  We have been able to create very large 
boards with this program, even in its limited form.  If you end up using it a 
for professional work you will want the commercial version as it will pay for 
itself in reduced labor costs.  
  
Depending on how clever one is in conserving space, circuits can be designed 
with ten to twenty chips or about 100 components.  As can be seen from the 
demonstration files,  fairly elaborate designs can be created with the "free" 
version.  The program with full storage allocation will accommodate designs of 
about 300 chip equivalents.  It also allows you to view more of a circuit at a 
time through use of the EGA.  Also supported in the pay version is cursor 
movement by a mouse, and much improved object editing with move, copy, insert 
and move point, and change. 

You will find no appeal to guilt to get you to buy the registered version.  If 
you really use it, it will be in your interest to buy a license.  If you try 
this demonstration version  on something small to test its features you are 
earning what you get by your work,  and helping us sell the product - a fair 
exchange we think.  Print PROD.SUM for details of the advanced software and 
the photoplotter.  Print PRICE.DOC for a price list for preparation of plots 
from the output of this program.  

Print DEMO.DOC for instructions for a quick tour around the facilities.  
TUTOR.DOC directs you through a few simple tasks.  LEARNSYM.DOC works through 
the steps needed to prepare simple printed circuit boards in great detail.  Do 
not underestimate the effort required to learn to use this or any other CAD 
system.  As a member of a CAD selection committee for a large laboratory the 
author has reviewed many systems, it is an awful job.  My current view is that 
one just begins to know the features needed after six months use. 

Note in editing: This above was written in 1986.  My group in the laboratory 
where I work is currently (1988) attempting to purchase a new CAD system.  I 
am mercifully not involved, since I like what I have.  But some who work for 
me are.  While standing around the water cooler yesterday, we added up $10,000 
worth of my group's time just visiting vendors and trying to understand their 
systems.  We are planning to spend about $250,000.  We realize that both the 
evaluation time and the cost of the system are small compared to the cost of 
using it.    My group has been brain washed by using my system so they want 
the powerful symbol features of this $10 program to be available in the 
$250,000 system.   These are really capable people, several have PhD's.  But 
after spending all that time they just don't know what the systems will do.  
The marketing people are really clever.  Their demonstration programs are 
designed to make it look like the programs can do anything.  It is only after 
you come back with your problem job to try to do it yourself that the 
limitations are uncovered.  Use this "free" system a while and you will be a 
lot more expert at finding the limitations of the fancy systems.  These big 
commercial systems are really difficult to learn.  We expect that a good 
designer (some of our designers hold PhD degrees in physics) will just start 
to be able to be facile with the system after six months of 12 hour days.  
While they auto-route, auto-place, schematic capture, rubber band, and 
simulate the circuit; they may not be able to do symbols as this program can.  
The big expensive systems come with a wall full of manuals.  More is better - 
right?  One system we like because it is powerful, requires that you talk to 
it in Unix macro language.  If you know what that means you know what it 
means.  If you don't, then it is worse than your most imaginative nightmare.  

So when you write me letters complaining about how hard this system is to 
learn, and that I don't provide enough documentation, be thankful that you 
have not spent $250,000 for it, that most people can get it running without 
spending two weeks at the factory, and that it did now come with 50 manuals 
that you must read. 

                       ***** SPECIAL OFFER ***** 

For a limited time, if you follow the procedure in PHOTOOL.DOC we will produce 
a phototooling set for your job.  We will plot anything you can get on an 8" x 
10" area of 10" by 12" film, for $25.00 per layer (Since we don't know when 
you will read this, this offer is subject to confirmation, see PHOTOOL.DOC for 
the procedure).  

The following lists the documentation on this disk with a brief description of 
what each file contains.  We suggest you do DEMO.DOC and TUTOR.DOC and don't 
bother to look at much else until you have tried to do a few things.  
ABOUTPC.DOC tells how printed circuits are made.  LEARNSYM.DOC works through 
the symbol process in great detail.  KEYTREE.DOC will help show you where you 
are going in the program: 

The last distribution contained PC-Write page breaks.  We removed them in this 
version so run your printer with whatever page break feature you like.  
Otherwise you will get continuous listings.  It is enough for us to try to 
write this stuff without writing a print program to make it look pretty.  

FIRST.DOC 

This document.  

MANUAL.BAT - PRINTS A MANUAL CONSISTING OF THE FOLLOWING SECTIONS: 
             (You may print individual sections if you wish)

INTRO.DOC 

Introduction and design philosophy.

DEMO.DOC

This leads you through a demonstration of what the system will do.  You 
do not get to do anything, just look.  This is our "gee whiz" demo.  

TUTOR.DOC

This leads you step by step through a few simple tasks.  We have tried 
to start with excruciating detail and gradually tell you less and less 
as you become familiar with our general approach.  

ABOUTPC.DOC

This section tell how printed circuit boards are made.  Please, those of you 
who are experts, don't write me letters telling me the procedure is not up to 
date.  It was written to give the novice some idea of why the various photo 
tooling items are needed.  

LEARNSYM.DOC

This section is for real beginners.  If you are an old hand at printed circuit 
layout and are used to computers, the DEMO and TUTOR sections and the COMMANDS 
appendix may be enough for you.  You can operate on the assumption that the 
program will do what you want it to do and just look up the desired operation 
in the COMMANDS section.  

QUICK.DOC

Quick summaries of how to perform the most common tasks.

HOWTO.DOC

How to do some more complex operations.

APPENDIX.BAT - PRINTS AN APPENDIX TO THE MANUAL CONSISTING OF THE FOLLOWING 
               SECTIONS (Or you can print them separately): 

COMMANDS.DOC

An alphabetical listing of the command keys.  This is the primary reference 
document for all the operations that are available. 

KEYTREE.DOC

Operation of this program is by use of the function keys.  Each key press 
typically reassigns the keys to a new set of values.  KEYTREE.DOC is a "map of 
the cave" showing the route through the menu keys with very brief summaries of 
key operation.  The key menu is presently fourteen layers deep and has 
hundreds of entries, many of them repeated.  A number of the key operations 
are reentrant so that much deeper entry is possible.  The design allows quick 
movement to a menu that will do what you want.  It may be useful to print this 
out and hang it on the wall when you first start using this program to remind 
you of what is available and as an index for COMMANDS.DOC.  We thought this 
would be very useful.  We find it almost impossible to read, but we include it 
because we went to the work to prepare it and it might fit someone's taste.  

ERRORS.DOC

Error messages and their meaning.

STANDARD.DOC

This document suggests a set of standards to get you started.  It pays to 
approach a job in a consistent manner.  This file gives a set of standard 
procedures for producing a design for a two sided plated through hole board.  
If you follow this standard we will be able to plot your job for you with 
minimal hassle.  

PLOTOUT.DOC

How to generate a plot output file with sample file output.

THE FOLLOWING MISCELLANEOUS DOCUMENTS CAN ALL BE PRINTED WITH MISC.BAT 
OR THEY MAY BE PRINTED SEPARATELY:

PHOTOOL.DOC

How to get a set of phototooling prepared from your design.  Read this before 
you prepare a job for us to plot.  

PRICE.DOC

We can prepare phototooling sets from the output of this program.  This list 
allows you to estimate the cost.  We can charge a Visa or Master Card.  

PROD.DOC

A summary of the Environmental Optics products.  Specifications are included 
for our photoplotter, and the the two current versions of the program.  We 
also include some of our future software plans. 

USERS.DOC

We will collect and distribute useful libraries.  This is a form to 
make a submission.

REGISTER.DOC

We do not expect a registration fee.  If you find this program to be useful, 
and feel guilty, then buy the commercial version, $100 post paid.  You will 
enjoy the additional features more than the loss of guilt.  Send this form 
without money and we will keep you advised of new versions.

UPDATE.DOC

Changes and bug fixes by date.  *********Be sure to read this file.*********  
New goodies are described here.  

PRINTALL.BAT

Prints everything.

ORDER.DOC

Order form for photoplotting.

Please forgive inconsistency in this documentation.  It is a big job to edit 
all these words when we make an improvement.  So if words point to something 
that you cannot find, perhaps it was there once.  

                            

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   Disk No 905  DROEGE (Disk 2 of 2)                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation for DROEGE, type                           ║
║             COPY FIRST.DOC LPT1: <enter>                                ║
║                                                                         ║
║      Do not attempt to use this program without reading at least        ║
║                       some of the documentation.                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HOWTO.DOC

{% raw %}
```

HOWTO.DOC

This section explains "how to" do some things that may not be obvious and that
we have found from experience that you may want to do.  We will respond to "How
can I" letters by adding sections here.  We have not filled in everything for
which we have made a heading.  We are tired of writing.  Your letters will
provide inspiration.


HOW TO REPLACE A JOB SYMBOL WITH A LIBRARY SYMBOL

Jobs must be loaded before libraries.  You can only load one job.  The first
symbol in memory wins, following symbols with the same name are ignored.  So,
here is how to replace a symbol with a new version in a library:

1. Load job with its old symbol.

2. Open the symbol and rename it to a different unused name.  This is done by
   the MODSYM key followed by the RENAME after the symbol redraws.

3. Now load the library with the new symbol.

4. Reopen the symbol as in 2. above and use REPLAC to replace the renamed
   symbol with the new version.  The old temporary symbol may now be KILLed.


HOW TO CUSTOMIZE THE SETUP ARRAY FILE

We all find it very tedious to work with the setup array file.  If you list it
(2,5), you will see that it fills two pages and contains 768 entries.  You will
really want to keep a listing nearby.  We plan someday to include an edit
procedure.  This will be reasonable to do when we support the EGA (soon in the
pay version).  Be comforted that while it is a pain to set up, you don't have
to do it very often.  Once you edit it, the setup data is saved with your job.
(you can read it if you want by listing JOBNAME.PCD)

You will find 4SETUP on many menus.  Pressing this key gives you the choice of
editing the setup, the level within that setup, and the color and aperture
attached to that level.  In general, once you select the type of object to work
on, you move through the table with the UP/DOWN keys.  Note that this menu
differs from others in that the position number is not shown on the keys,
however, the new table line is shown at the top of the screen.

It is important to remember that EDSET and EDLEVL only select a table line
while EDCOLR and EDAPER change it.  We cannot imagine changing this table
without a listing in front of us.  We find that we seldom work with more than
two or three line widths on a job.  We thus use a separate setup for each line
width and each level where we are entering data.  Sixteen has been more than
enough.  Sixteen was selected as the most we could get on two listing pages,
eight having been found to be too few.   This leaves us extra setups which we
preset to show only a single level at a time, reserving one for special work.


HOW TO USE VARSYM

Varsym treats any symbol you have created just like a label.  You can thus
rotate it, scale it, and draw it with any aperture and on any level.  Not much
use for printed circuits, but fine for mechanical drawings where you want to
create an item like a screw, then place it scaled.


HOW TO MOVE AROUND THE WORK SPACE
    ARROW, SPEED, FAST/SLOW

We provide a mouse input on the pay version.  But honestly, folks, we find we 
just don't need it.  We also wish to keep the hardware requirements to the 
absolute minimum.  We work with the left hand on the function keys, and the 
right hand on the keypad.  Normal movements are done with the arrow keys with 
occasional use of KP5 to get some place in a hurry.  This poses a problem for 
how to drink our coffee,  but leaning back and relaxing while we drink it gets 
the job done faster, we think.  We use F6 to set the cursor movement to match 
the particular data type.  We arrange our lines so they fit on the current 
grid, for digital this is often 15 mil lines on a 25 mil grid spacing which 
makes an easy board to etch.  This we would do with the movement set at 25 mil 
steps.  for laying out IC pads we would use F6 to set 100 mil steps. When it 
takes a while to get some place we often don't use the speed up key but just 
let our minds wander.  Some times we gain an insight which makes the job go 
faster.  All this is a personal viewpoint, but several of us have found that 
this system is less stressful than others we have used.  Of course we each can 
afford to have our own on our desk now, which beats signing up for the big 
system in the CAD room in the sky.  Still, having a slow moving cursor can be 
relaxing if you allow it. 


HOW TO WORK WITH SYMBOLS, OR WHERE IS THE JOB ANYWAY?

A symbol is a collection of work that can displayed, saved, etc..  We are
afraid that our experience with Gerber CAD systems shows.  In the Gerber system
we have used, most information was entered into something called the "job".
You could make symbols, but symbols could not be entered into symbols (at least
they did not maintain their identity).  We saw the symbols as potentially
powerful tools, but were frustrated by not being able to nest (call symbols
from symbols) them.  Thus when we wrote this program we carried over the
concept of a job, as being the place where data was stored.

We find that we do not put anything into the job until we have completed our
work.  We create our entire project as a symbol.  It of course, contains other
symbols which are job pieces.  See the various demos for examples.  Because of 
our earlier experience, we called the job the thing that you create a plot 
file from.  We could have as easily generated the plot file from a symbol, but 
that's not the way we did it. 

So when we have completed our work, we go to the nice clean unused job, and
locate one symbol (where we did all our work) so that it is centered in the 
film size we plan to use.  Then we go to the plot menu and create our output 
plot file. 


HOW TO BACKUP YOUR JOB

SAVJOB

SAVJOB saves everything just like it is.  You are asked for a name and two 
files are created, "NAME.PCD" and "NAME.PCS".  NAME.PCS contains all the 
working conditions, NAME.PCS contains all the symbols found in the job plus an 
special symbol which contains the job data.  Later when you load these files 
as a job you are restored to the same status as you left. 

SAVLIB

SAVLIB saves only the job symbols as "NAME.LIB".  If you make your job a symbol 
(as we recommend) then there is little difference between SAVJOB and SAVLIB 
except SAVJOB preserves your setup conditions where SAVLIB will take them from 
the SETUP file. 

LIBSYM

LIBSYM allows saving a single symbol as a library.  See the key sequence in 
QUICK and the LIBSYM command.  Note that this is a nice way to clean up your 
job.  If you have been working a while and have loaded a lot of symbol 
libraries with lots of stuff that was not really used, then the work space may 
fill up.  If you do your whole job in a symbol, then saving it with LIBSYM 
will result in a library which contains only the symbols actually used.  Now 
this library can be loaded into a fresh job and it will be compacted into 
minimum space.  The new version of this program (presently called DC3 - 
available about DEC 88) will do away with the job completely. with the job, so 
this process will be automatic.  


HOW TO CREATE A SPECIALIZED LIBRARY

To create a specialized library, like one of electronic symbols, we save each
symbol as a separate library using the LIBSYM command.  We then open a fresh
job and load each symbol that we want.  We then save this as a library with an
appropriate name.  Note that the system is smart enough to ignore repeated
symbols.  Thus if you load IC14 which contains PAD as a sub symbol, then load
IC16 which uses PAD, the second pad is not loaded.  You must thus be careful to
name symbols distinctly.  The first symbol in memory stays, subsequent calls to
the same symbol are ignored.  See HOW TO REPLACE A JOB SYMBOL ... above for a
way to update a symbol.


HOW TO START WITH YOUR OWN CUSTOM SETUP

First, make sure you have backup copies of SETUP.PCS, and SETUP.PCD.  Start
without loading a job.  You may then load as many symbol libraries as you wish.
Edit the setup arrays and the redraw tables as you wish.  Now save your work as
the job "SETUP".  Examination of the disk directory will reveal that there is a
new SETUP.PCS and SETUP.PCD pair replacing the old ones.  Be sure first that
you have kept a clean copy of the original SETUP files as it will be very hard
to clean out the junk you are about to add if you later decide that you don't
want it.  Now if you start DROEGE from a disk containing this new SETUP file
pair you will have all the symbols and setups that you have prepared.  You can
even save things like a drawing outline and title block if you enter them
before saving SETUP.


HOW TO PLOT SEVERAL LAYERS ON THE SAME PIECE OF FILM

Let us suppose you have a 2 by 3 inch board with four layers you want plotted.  
This will fit nicely in one-quarter of the 8 by 10 plotting area of a 10 by 12 
film.  Note we want you to keep a one inch border all around for us to put our 
greasy fingers.  

1.  On a job layer you are not using put some guide lines to show the edge of 
the film, and the useful plotting area offset one inch inside the film edge.  
It will be useful to add more lines to divide the plotting area in fourths.  
We expect the lower left corner of the film to be at 0,0, and the film is 
placed roughly there on the plotting table.  But this is not a precision 
operation, you can expect us to miss by 1/4 inch or so.  Another reason for 
the 1 inch border.  We expect the long dimension of the film to be x unless 
you tell us otherwise.  

2.  Now take your job symbol (you did make your whole job a symbol like we 
recommend didn't you?) and locate it in the center of the lower left square.  
Depending on where you put the symbol origin, you may have to delete it and 
relocate it a time or two to get it nicely centered.  The pay version lets you 
move symbols.  Be sure to put targets on all layers so the films can be 
alligned.  

3.  Now make a plot file for the first layer.  Answer "myplot1" or any valid 
DOS file name to the file name question, 1 for the layer (these answers assume 
that you have used layers 1,2,3, and 4 for your work), 1000 to the steps per 
inch question, 0 and 0 to the x and y offset questions.  Assuming that you put 
your film guide lines with the lower left hand corner at 0,0 this plot will 
come out on the film as shown on the screen. 

4.  Now make a plot file for the next layer.  Answer myplot2, 2, 1000, 0, 4000 
to the questions.  This will offset the layer 2 plot 4 inches in y to put it 
in the center of the upper left square.  This plot will come out on the film 
offset 4 inches in y from it's position on the screen. 

5.  Now make the next plot file.  Answer myplot3, 3, 1000, 5000, 0  to put the 
next plot file in the lower right square.  This plot will come out on the film 
offset 5 inches in x from its position on the screen. 

6.  Finally answer myplot4, 4, 1000, 5000, 4000 to put the last plot in the 
upper right quadrant.  This plot is displaced 5 inches in x and 4 inches in y 
from its position on the screen.  

7.  When you send us the job to plot, tell us to plot all four plot files on 
the same film.  You can plot any number of layers on the same piece of film 
this way.  The file names are not critical, but we like you to end them in the 
layer number so we can check them.  

This should work, but we will not be responsible for it to come out the way 
you want it to.  The problem is that you can not see what you are doing and if 
you make a dumb error like putting two layers in one quadrant and none in 
another you will not know you have done it until the work comes back.  We 
think we are experts and we are always making this kind of error.  Add to this 
the problem of mirroring a level and things never go where you want them.  

Count on a few failures before you get it right, even if you do as we do and 
plot one layer at a time in the center of large pieces of film.  Ain't 
automation wonderful?  The problem is that machines are stupid and they get 
you by doing exactly what you tell them to do.  


```
{% endraw %}

## INTRO.DOC

{% raw %}
```

INTRO.DOC

INTRODUCTION

This program is designed to aid the manual preparation of printed circuit
phototooling.

It runs on an IBM PC, XT, AT and anything else that runs PC DOS we think.  A
minimum configuration is one disk,  320k memory, and a color card.  The free
version uses 320 k memory.  The licensed version will make use of 640k on a 
PC.  While it will run with a mono monitor on a color card,  the program is not 
very useful without a color monitor.  An Epson compatible printer and an 
additional disk are useful. 

We describe this as a manual system because there are now many programs which
purport to automatically generate phototooling from circuit diagrams or logic
statements.  We have been designing mostly analog circuits for thirty years and
are yet to know enough about design to direct a skilled layout professional,
much less to design a computer program for the task.  We would not know where
to begin to set up design rules.  We often redesign the circuit during layout
to overcome a problem introduced by the topology of the corner we have worked
ourselves into.  We do not see how a program could be designed to make such
opportunistic decisions.

If you have not used a computer aided layout system before you have an
important decision to make.  Will such a system save you time (money) in the
long run?  There is no doubt that it will be more expensive at first to go to a
computer aided system.  Even one like this that is free! (Ha!).  Everyone
underestimates the effort it requires to become productive.  Your friendly
marketeer will talk about factors like 5 in productivity.  You will be lucky to
make .5 the first year.

In our design group, the engineers do their own layout.  We have watched some
of the fancy automatic systems in operation and we sometimes wonder why anyone
would want to work so hard to do a layout.  We watch with awe the problems
associated with the introduction of a new component into an automatic system.
I have completed an entire design while my neighbor in the CAD room was trying
for several weeks to properly specify a new component.  If you want a machine
to be really automatic you have to tell it everything about its components.
This is tough enough with digital chips, as my CAD neighbor discovered.  For
analog chips or for new concepts unanticipated by the CAD designers, it is very
difficult indeed.

We are not so reactionary as to think that computers will never be able to
perform this task.  We do feel that with the aid of a simple design tool like
this program that today we can outperform the computers on all but the most
routine digital layout tasks.  Marketeers extol the virtues of such features as
rubberbanding - yet try it on a reasonable sized circuit and it is almost
impossible to make any sense out of the jumble.

Computer aided systems win big if there is repetition.  Some of the boards we 
design contain 32 identical amplifiers, and some control circuitry.  Typically 
a thousand mixed analog and digital components.  These designs are very cost 
effective for this design system.  When the customer comes back for a 
different design we can produce a whole layout just by changing the amplifier 
symbol. (Horrors, we have just discovered (Sept, 1988) that the largest 
systems - big names, $100,000 up, cannot do this.  If you have 32 identical 
amplifiers they will be wired 32 different ways.  This is what auto-routing 
does for you.  Imagine trouble shooting such circuitry.  If you want to have 
the identical circuits wired alike, you get to do each one by hand yourself.) 

We have set out to design a program to aid us overcome the drudgery of the
layout task.  It has been written while under constant use by several very
senior designers.  The general plan has been to add the feature most griped
about next.  This will explain to CAD professionals the otherwise mysterious
selection of features.  For example, there is no mouse or joystick input
because we were able to work just fine without it.  There was no marketing
department to force us to add features for marketing purposes only.  Before you
decide to pass up this system because it does not have some favored feature,
give it a chance.  You may find it workable.  We have used the full version of
this program to produce 13" x 17" printed circuit boards containing over one
thousand components and 3500 holes.  The boards are mostly mixed analog-digital
designs where we are concerned with microvolt signal levels and nanosecond rise
times.

Some of the designs have been done on a team basis.  It is important to us to
be able to pass parts of a design between work stations with several designers
working at the same time.  This is accomplished by the extensive and flexible
symbol features of this program.  We have not yet networked our terminals but
only because it is still easier to walk across the hall with a floppy disk.

A symbol is anything that might be put down as part of a printed circuit
master.  A very simple symbol might be a pad for the location of a component.
This program allows nesting of symbols so that once, for example,  a symbol for
a printed circuit component pad is created it can be duplicated to form an
integrated circuit package outline.  At the next level a group of package
symbols might be combined with wiring to form a memory symbol.  Some examples
of this are included in the demonstrations.  We are gradually accumulating a
library of such symbols so that we can rapidly produce rather large designs.  
Designers who are used to working with pre-printed stick-ons for the layout of 
designs will find the concepts of this system familiar.  It is easy to create 
a new stick-on, we call such an item a symbol.  Since this system allows 
nesting of symbols (symbols can contain symbols) very powerful stick-ons can 
be easily created.  An example could be a nine chip memory block.  

The program allows entry of lines, pads, symbols, labels, and arcs on 12
different layers and on a 65000 x 65000 point grid.  Lines correspond to
printed circuit tape which is used to interconnect components.  Lines come in
fifteen widths.  Pads correspond to the doughnut shaped cutout used to indicate
that a drill hole was to be made to mount a component.  Symbols are arbitrary
collections of everything else which can be located and deleted as a single
object.  A familiar symbol would be a 14 pin IC layout stick-on.  But they 
can be much more complex, in fact it is recommended that the whole job be 
made a symbol so it can be manipulated as a single item.  Labels are 
lettering.  Arcs allow drawing circles and partial circles. 

While the program is labeled as a 65.000" square grid, there is nothing special
about the label and the output files can be scaled arbitrarily.

Data is entered by selecting an object type and locating it on the grid through
use of a screen display and the arrow keys.  We had planned for a mouse, 
(available in the pay version) but our users never complained.  A color display 
is provided so that objects can be distinguished on different levels ( our 
users absolutely demanded color) though the "free" version shows only the last 
color entered for intersecting objects. 

Three different colors can be assigned to the layers.  This is usually enough,
since more is just confusing.  The pay version supports the EGA with more 
colors but early work indicates that the resolution is more interesting than 
the additional colors.  We seldom work on more than two or three layers at 
once, even when doing boards with many more layers. 

Parameter sets can be stored for frequently used combinations of working
conditions.  One set allows instant redraw to any preselected part of the
layout.  Another set allows switching between entered object types.  For
example a few key strokes are all that is needed to switch between entering red
100 mil wide lines on level 3 to green 15 mil wide lines on level 7 if these
parameters have been preset.

Our goal has been a simple system that works on a minimum PC configuration.  We
have resisted making special monitor calls or doing anything that was not
available on any system with a color card and color monitor, even if it would 
make operation better.  This further explains why there is no mouse.  The 
program was written originally in compiled BASIC though we are gradually 
converting sections to assembly language.  We have run it on a variety of IBM 
PC, XT, and AT computers, and a number of clones.  Except for saving and 
loading jobs, and creating plot files, the program runs entirely in memory. 
When we started this development several years ago, we made the decision that 
by the time that we would get our program written, memory would be cheap 
enough to hold it.  It is almost an axiom that memory will be cheap enough to 
hold any program you can conceive of writing by the time you can get it 
written. 

This version is being distributed free, primarily to advertise our
photoplotter, which was the reason for it being written.  As distributed it has
restricted memory, enough for about a thirty chip circuit board.  One of the
demos, ALRM, is a 1000+ component board where advantage is taken of the
repetitive nature of the circuits to save memory.  (Sorry this design has 
been removed from v1.86 to allow room for additional documentation.  We 
include several large example designs on the commercial version.)  Print 
PROD.SUM for the specifications of the extended version of this program which 
is available for $100.00.  Work started on the free version of the program is 
transferable to the pay version which has a number of additional features 
which serious users will want.  We hope to get desperate letters asking us to 
rush the larger version as users run out of memory.  Plan ahead and buy now. 

```
{% endraw %}

## KEYTREE.DOC

{% raw %}
```

KEYTREE.DOC

This is an abbreviated version of the key documentation.  It is intended for
posting near your terminal as a guide to the DROEGE system.

 5000
1ENTER  2FILE   3PLOT   4SETUP  5PATH   6SPEED  7LOCATE 8END    9BACK   0REDRAW
*1*     1LINE   2PAD    3SYMBOL 4LABEL  5OTHER
22000   *1*     1LOCLIN 2LOCPT  3STYLE  4SETUP  5STITCH
        21000   *1*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
                21370   *1*     FINDS A LINE
                        *2*     DELETES A FOUND LINE
                        *3*     IN FUTURE WILL ALLOW LINE MOVE, COPY, ETC..
                        *4*     SEE SETUP IN COLUMN 1
                        *5*     REJECT FOUND LINE AND CONTINUE SEARCH
                *2*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
                21410   *1*     FINDS A LINE POINT
                        *2*     DELETES A FOUND LINE POINT
                        *3*     IN FUTURE WILL ALLOW LINE POINT MOVE, COPY, ETC.
                        *4*     SEE SETUP IN COLUMN 1
                        *5*     REJECT FOUND LINE PT AND CONTINUE SEARCH
                *3*     1SOLID  2DOT    3DASH   4CENTER 5
                *5*     1SET=   2SET=   3SET=   4SET=   5STSET
                        *5*     1SET=   2SET=   3SET=   4SET=   5VIASYM
                51000   *1*     DRAWS LINES AS SOLID
                        *2*     DRAWS LINES DOTTED
                        *3*     DRAWS LINES DASHED
                        *4*     DRAWS CENTER LINES
                *4*     SEE SETUP IN COLUMN 1
        *2*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
        22370   *1*     FINDS A PAD
                *2*     DELETES A FOUND PAD
                *3*     IN FUTURE WILL ALLOW PAD MOVE, COPY, ETC..
                *4*     SEE SETUP IN COLUMN 1
                *5*     REJECT FOUND PAD AND CONTINUE SEARCH
        *3*     1LOCSYM 2NAME   3CREATE 4SETUP  5ROT=N
        22320   *1*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
                54210   *1*     FINDS A SYMBOL
                        *2*     SELECTS SYMBOL TO BE LOCATED
                        *3*     IN FUTURE WILL ALLOW SYMBOL MOVE, COPY ETC..
                        *4*     SEE SETUP IN COLUMN 1
                        *5*     ROTATES SYMBOL IN 90 DEGREE STEPS
                *2*     ASKS FOR SYMBOL NAME
                55000
                *3*     1NEW    2*MAKE  3ORIGIN 4KILL   5OPEN
                39000   *1*     ASKS FOR NAME FOR NEW SYMBOL THEN
                        39790   ASKS FOR ORIGIN LOCATION
                        *2*     IN FUTURE WILL MAKE PART OF JOB A SYMBOL
                        *3*     LOCATES ORIGIN FOR SYMBOL DATA THEN GIVES MENU
                        39850   1LINE   2PAD    3SYMBOL 4LABEL  5OTHER
                                *1* SAME AS LINE ABOVE EXCEPT NOW LINE DATA IS
                                21000 ENTERED INTO A SYMBOL INSTEAD OF THE JOB
                                *2* SAME AS PAD ABOVE EXCEPT NOW PAD DATA IS
                                37380 ENTERED INTO A SYMBOL INSTEAD OF THE JOB
                                *3*     1LOCSYM 2NAME   3OPRSYM 4SETUP  5ROT=N
                                37340   *1* EXCEPT FOR OPRSYM THIS MENU IS THE
                                        *2* SAME AS THE EARLIER SYMBOL MENU
                                        *4* EXCEPT SYMBOLS ARE ENTERED INTO
                                        *5* THE OPEN SYMBOL INSTEAD OF THE JOB
                                        *3*     1LIST   2LIBSYM 3REPLAC 4RENAME
                                        54270   *1* LISTS SYMBOLS USED IN THE
                                                54400 OPEN SYMBOL BY NEST LEVEL
                                                *2* MAKES THE SYMBOL AND ALL
                                                54445 SYMBOLS IT USES INTO A
                                                      LIBRARY
                                                *3* REPLACES ALL USES OF ONE
                                                54650 SYMBOL BY ANOTHER
                                                *4* RENAMES A SYMBOL
                                                54395
                                *4* SAME AS LABEL ABOVE EXCEPT NOW LABEL DATA
                                37430 IS ENTERED INTO A SYMBOL INSTEAD OF JOB
                                *5* SAME AS OTHER ABOVE EXCEPT NOW ARC DATA IS
                                13000 ENTERED INTO A SYMBOL INSTEAD OF THE JOB
                        *4*     KILLS (DELETES) AN EXISTING SYMBOL IF POSSIBLE
                        39620
                        *5*     OPENS AN EXISTING SYMBOL FOR MORE DATA
                        39390
                *4*     SEE SETUP IN COLUMN 1
                *5*     CYCLES ROTATION 0,1,2,3,0,...
                54250
        *4*     1EDLAB  2SETLAB 3MAKLAB 4SETUP  5VARSYM
        52000   *1*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
                52670   *1* FINDS A LABEL
                        *2* DELETES A FOUND LABEL
                        *3* FUTURE MODIFICATION
                        *4* SEE SETUP IN COLUMN 1
                        *5* REJECTS A FOUND LABEL AND CONTINUES SEARCH
                *2*     1MIR=   2LROT=  3SROT=  4SCREN  5SCALE
                52745   *1* MIRROR IN X,Y OR OFF
                        *2* ROTATE LETTERS IN STRING IN 90 DEGREE STEPS
                        *3* ROTATE WHOLE STRING IN 90 DEGREE STEPS
                        *4* SEE SETUP IN COLUMN 1
                        *5* SCALES SIZE OF LETTERS
                *3* ASKS FOR STRING TO BE USED
                52405
                *4* SEE SETUP IN COLUMN 1
                *5*     1FIND   2DELETE 3*MODFY 4SETUP 5REJECT
                52880   VARSYM ALLOWS SYMBOLS TO BE ENTERED WITH ALL THE
                        FEATURES OF LABELS - LIKE SCALING, VARIABLE LINE
                        WIDTH ETC..  SEE INSTRUCTIONS
        *5*     1CIRCLE 2ARC    3EDARC  4SETUP  5
        13000   *1* ASKS FOR RADIUS THEN GOES TO ED-ARC MENU
                13150
                *2* ASKS FOR THREE POINT ENTRY THEN GOES TO ED-ARC MENU
                13210
                *3*     1FIND   2DELETE 3*MODFY 4SETUP  5REJECT
                13185   *1* FINDS AN ARC(CIRCLE) NOTE THAT ARCS AND CIRCLES
                            ARE FOUND AT THEIR CENTERS
                        *2* DELETES A FOUND ARC
                        *3* FUTURE MOVE, COPY, ETC..
                        *4* SEE SETUP IN COLUMN 1
                        *5* REJECTS A FOUND ARC AND CONTINUES SEARCH
                *4* SEE SETUP IN COLUMN 1
*2*     1PUTFIL 2GETFIL 3LIBFIL 4JOBFIL 5LSTSET
26000   *1*     1SAVJOB 2SAVLIB 3       4       5
        26495   *1* ASKS FOR FILE NAME THEN SAVES JOB
                *2* ASKS FOR FILE NAME THEN SAVES ALL JOB SYMBOLS AS A LIBRARY
        *2*     1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY
        26685   *1* ASKS FOR FILE NAME THEN LOADS JOB - JOB MUST BE LOADED
                26405 BEFORE LIBRARIES
                *2* ASKS FOR FILE NAME THEN LOADS LIBRARY - FIRST SYMBOL IN
                26585 MEMORY WINS
                *3* LISTS THE SYMBOLS IN MEMORY
                26930
                *4* LISTS THE LABELS IN MEMORY
                26950
                *5* LISTS THE KEYBOARD
                26940
        *3*     LISTS THE LIBRARIES ON THE DEFAULT DISK ON THE SCREEN
        *4*     LISTS THE JOBS ON THE DEFAULT DISK ON THE SCREEN
        *5*     LISTS THE COLOR AND APERTURES ASSIGNED TO EACH LEVEL BY SETUP
        26810
*3*     1*PLOT  2PLTFIL 3ESPLOT 4HRPLOT 5RVPLOT
27000   *1* FUTURE-WILL DRIVE A PLOTTER
        *2* PLOTS JOB ON A DOT MATRIX PRINTER
        *3* ASKS FOR FILE NAME, LEVEL, SCALE FACTOR, AND OFFSETS THEN CREATES
        11000 A DISK PLOT FILE
*4*     1EDSET  2EDLEVL 3EDCOLR 4EDAPER 5SCREN
34000   SETUPS ARE CREATED BY USING THE UP DOWN KEYS TO MOVE THROUGH THE LIST
        SETUP AND LEVEL ARE USED TO SELECT A PARTICULAR ENTRY THEY DO NOT
        CHANGE THE ENTRIES.  COLOR AND APER CHANGE THE ENTRY ON THE SELECTED
        SETUP AND LEVEL AS THEY ARE CYCLED.  THE KEY 5 * INDICATES THE ITEM
        BEING CHANGED.
        *1*     1UP     2DOWN   3       4       5*SETUP
        *2*     1UP     2DOWN   3       4       5*LEVEL
        *3*     1UP     2DOWN   3       4       5*COLOR
        *4*     1UP     2DOWN   3       4       5*APER
        *5*     1DR@W   2SHOLAB 3STYLE  4REGION 5GRID
        36000   *1*     ALTERNATES BETWEEN DR@W AND DR@L TO INDICATE THAT LINES
                36310   ARE DRAWN AT WIDTH OR AS LINES
                *2*     ALTERNATES BETWEEN SHOLAB AND NOLAB SHOLAB DRAWS LABELS
                36350   NOLAB SKIPS LABEL DRAWING TO SPEED REDRAW
                *3*     1SOLID  2DOT    3DASH   4CENTER 5PALET
                51000   AS DESCRIBED ABOVE SELECTS LINE STYLE AND COLOR SET
                *4*     1SPACE  2PRTSC  3AUTO   4       5ALL
                24000   *1* ASKS FOR POSITION OF UPPER LEFT HAND SCREEN CORNER
                        25550 AND SCREEN WIDTH - SCREEN SPACE IS REASSIGNED BUT
                            *BEWARE* SCREEN IS NOT REDRAWN SO OBJECTS PLACED
                            AFTER A REGION ASSIGNMENT WILL NOT GO WHERE THEY
                            APPEAR UNTIL A REDRAW
                        *2* STRAIGHT SCREEN DUMP
                        *3* ASKS FOR A SCREEN WIDTH.  SCREEN SPACE IS REASSIGNED
                        24400 WITH THE GIVEN WIDTH AND UPPER LEFT HAND CORNER
                            AT THE LOCATION OF THE CURSOR-SEE *BEWARE* ABOVE
                        *5* REASSIGNS THE SCREEN TO SHOW ALL SPACE-SEE *BEWARE*
                        24590
                *5* ASKS FOR A GRID SPACING-ANY GRID IS ALLOWED-BUT *BEWARE*
                36250 OBJECTS ARE ONLY FOUND IF THEY ARE ON THE CURRENT GRID.
                    IF YOU USE A FUNNY GRID AND FORGET IT YOU MAY NEED TO
                    SEARCH ON A ONE MIL GRID TO FIND AN OBJECT.
*5*     ASKS FOR PATH NAME FOR WORKING DISK -    C:\MYDIR\     OR     A:
 5560
*6*     CHANGES SPEED OF CURSOR MOVEMENT
*7*     LOCATE SOMETHING
*8*     END SOMETHING (A LINE)
*9*     GO BACK TO THE PREVIOUS MENU
*0*     1UP     2DWN    3SELECT 4SETUP  5CHANGE
        *1*     MOVE UP THE LIST
        *2*     MOVE DOWN THE LIST
        *3*     SELECT NAMED AREA FOR REDRAW
        *4*     SEE SETUP IN COLUMN 1
        *5*     CHANGE NAME AND REDRAW AREA


```
{% endraw %}

## LEARNSYM.DOC

{% raw %}
```

LEARNSYM.DOC

HOW TO WORK WITH SYMBOLS 

This exercise tells you a little about symbols, and how they are unique to 
this program.  We then lead you step by step in the creation of a symbol, 
which is the normal way to prepare a set of artwork.  We show you how to put a 
symbol on the job or in another symbol.  We show you how to get a plot on a 
printer, how to make plotter files, and how to save your work for later 
additions.    

The symbol feature of this program is very powerful.  We find that systems 
which cost $50,000 and up cannot nest symbols as we do.  This is because they 
have to do schematic capture, simulation, and other wonderful things that you 
may not need to do.  Keeping track of everything through layers of symbols is 
too tough a job for even the big systems.  We have just spent hundreds of 
group man hours reviewing systems from (July 1988) big names like Cadnetix, 
Hewlett Packard, Mentor Graphics, and others and none can nest symbols.  

We are presently involved in the design of a high voltage power supply system 
which has eight high voltage modules which plug into a VME mother board.  We 
designed the plug in board manually using this system as a two layer board.  
Another group designed the VME mother board.  It was done by a big design 
system and uses ten layers.  There are awful errors, like the power bus is 10 
mils wide in several spots, and even a moderately good layout designer would 
have done the job with four layers.  That is what happens when you turn a big 
design system loose with some rules.  When you see the result, you wish you 
had provided a different set of rules, but a live designer would have changed 
his rules when he saw something bad.  But the real problem is that the 8 
identical circuits are laid out eight different ways.  Now we have to test it 
and find that we have eight different sets of problems.  We have discovered 
that there is no real way, on even the largest systems, to duplicate part of a 
layout when it is repeated.  

My guess is that the other design group will do more work than I before the 
job is done.  The big systems do have some nice features.  They make you put 
all the wires in to match your schematic.  People like me that change their 
designs on the fly must keep going back to the schematic section of the 
program if they want to make a change, in the end you are absolutely forced to 
have a correct diagram.  Still, I would prefer the pain of having to keep 
track of which wires I have routed to the helplessness of having the machine 
put things where it wants to.  

For this system, a symbol is any collection of work.  This means lines, pads, 
lettering, arcs, and even other symbols.  The only limitation is that you 
cannot put a symbol in itself.  We sometimes allow ourselves to do this for 
test, the result is like standing between two mirrors, eventually the computer 
runs out of something and dies.  

We find it useful to make a symbol library of common things.  Not just the 
basic symbols for common sized R, C, and IC outlines found on the distribution 
disk as ELEC.LIB, but also common circuits we use, such as amplifiers, timing 
circuits, memory layouts, etc.  

We in fact recommend that you make your entire project a symbol.  

In order to locate a symbol on the job or in another symbol, it must be loaded 
into memory.  If in doubt, you can list the symbols in memory as we do in the 
following example.  You will need to have a printer. 

To start the program put distribution disk 1 in the default drive and type: 

DROEGE (ENTER)  That is type DROEGE followed by the ENTER key.

After you have read the sign on  message hitting any key should get a nice 
blue screen with function key labels across the bottom of the screen and other 
information (see DEMO.DOC) across the top, including the cursor position at 
the top right.  The cursor appears as a blinking square which can be moved by 
the arrow keys.  

Most operations are done by hitting function keys at the left of the keyboard.  
DEMO.DOC and TUTOR.DOC introduce these keys.  This exercise assumes you are 
now familiar with the general ideas.  

Now press the function keys as indicated.  We list here the entire label as it 
shows on the key.  You just have to push the numbered key at the left of the 
keyboard: 

F2FILE          Because that is where we happened to put the command to list 
                symbols. 

If you have not already done so, this is a good place to get a listing of the 
setups.  You will need a printer for the following step.  If you do not have a 
printer skip this step. 

F5LSTSET        A two page table is printed.  Hang this where it is available 
                for reference.  

F2GETFIL        We want to get something from a file
F3LSTSYM        To list the symbols in memory on the printer.

If you don't have a printer the system will say something awful.  Like fatal 
error and some other garbage.  But don't be concerned, it is hard to kill this 
program.  From a freshly started program you will find that you have no 
symbols.  The printer will list one funny symbol called JOB$$SAV.  This is 
where we store the work you do on the job.  We don't automatically load 
symbols because they use up space and we want to give you as much space as 
possible.  To load some representative symbols, for example the library 
ELEC.LIB push function key 2. 

F2LODLIB

To the question answer:

ELEC (ENTER)  

Do not type the extension .LIB or again you will get a nasty error message.  
Just follow the instructions and try again. 

If all goes well, the disk light will come on and symbols will be loaded.  

F3LSTSYM

Will now get a list of about 15 symbols on the printer.  If you don't have a 
printer, you can still do this exercise, but you will have to fly blind.  

Now use the F9 key to get back to the starting menu.

F9BACK
F9BACK  

The bottom menu line should now read:

1ENTER   2FILE   3PLOT   4SETUP   5PATH

If it does not read as above, hitting F9 enough times should get the above 
menu.  If you get lost you can always get to this menu by hitting F9 enough 
times.  Answer "y" when asked if you want to leave a symbol, but "n" when 
asked if you want to leave the job.  If against all our precautions, you 
manage to "break" the program, hitting key pad #9 with caps lock on and num 
lock on and the rest of the special keys off, will usually get you back to 
this starting position.  This is useful if you have done a lot of work without 
periodic saves and then produce a hang.  Honest folks, we have not seen a real 
hang in this version of the program in over a year.  Still, we provide a 
parachute when you fly with us.  

Now let us play with symbols.   

F1ENTER           To go towards entering data
F3SYMBOL          To do something with symbols
F3CREATE          To do something creative with symbols - I had to name it 
                  something.
F5OPEN            To open an existing symbol to change it.

In answer to the question:

IC14 (ENTER) - The name of the symbol we want to work on followed by the 
               ENTER key.  

Symbol names are case sensitive.  That is Ic14 is a different symbol from 
IC14.  If you type wrong you will get a symbol not available message.  Hit F5 
and try again.  We recommend that you run this exercise with the CAPS LOCK key 
on.  This will reduce the chance for a typing error.  In general, unless you 
like naming things in mixed upper and lower case we suggest you pick one case 
and stick to it.  We always run in upper case.  

The system will draw an IC outline at a scale which fills most of the screen.  
We try to follow a convention when we make symbols.  For the most part, the 
symbols in ELEC.LIB were made so they extend horizontally with pin one at the 
lower left, or 0,0 position.  

This symbol is more complicated than it looks.  It has information on five 
different layers.  By using the prepared setups, we can look at the layers 
(levels) one at a time.  Looking at the chart we printed, we see that setup 1 
contains a color assignment for only level 1.  The color assignment column 
indicates what will show when we redraw.  We are presently drawing with setup 
0 which contains color assignments for most layers, so nearly everything is 
showing.   To change the setup assignment we need to find a menu which has a 
4SETUP key label.  This is repeated many places, usually where needed.  But it 
is not on the current menu.  We hit a key to find it: 

1LINE

The new menu contains 4SETUP so: 

4SETUP

The top line now shows that we are in setup 0, and some information about 
setup 0.  There is not enough room on the top line for everything.  The 
advanced version uses the EGA features to display the entire setup table, but 
we will have to be content with our listing.  We want to change the setup so: 

1EDSET

We get a new menu which contains only UP and DOWN  and a key 5 label which 
reads 5*SETUP to indicate that we can change the setup.  Since we want to go 
to setup 1 we go up once.  Many downs would also get there. 

1UP

The second line now reads SETUP 1, LEVEL 1, COLOR GREEN, APER OFF.  This tells 
us that we are now in setup 1, that we are looking at level one of the setup 1 
table, that level one of setup one is displayed in green, and that if we 
attempt to draw a line or pad, nothing will happen as there is no aperture 
selected.  

We can redraw the screen at any time.  This is done with the F10 key.  The 
first press lists a table of previously selected places to look.  We can use 
the menu to select a new area or we can redraw the present area with a second 
F10.  We want to redraw the present area with the new setup so: 

F10REDRAW
F10REDRAW 

The IC is now drawn in green.  Just the pads are drawn.  And we notice they 
are smaller.  When the system last drew the IC it noticed that there were 
things on several layers.  To show this it drew in the "OR" of the colors and 
the size of the largest object.  Since this IC has an eighty mil solder mask 
on level 5, it drew the pads as eighty mils square.  Now it is only showing 
level 1 where the pads are sixty-two mils on a side.  Notice also that the 
package outline drawing disappeared.  It was on level 4.  STANDARD.DOC lists 
our standards for design.  It is not necessary that you follow them, but it 
helps avoid confusion if you send us work.  Otherwise, it is helpful to you to 
set up standard ways of doing a design.  

Let us look at another layer.  

F1UP

This time the second line shows:

SETUP 2, LEVEL 1, COLOR OFF, APER OFF

This is OK as far as it goes.  If we look at the print out we indeed see that 
level one does not have a color assigned to it.  But level 2 does and that 
does not show on the status line.  There is just not enough room to show 
everything.  By backing down one menu level and selecting level for edit, one 
can UP - DOWN through the levels for this setup.  The whole process is awkward 
but it is the best we can do.  Some day we will do this with pull down menus 
and a mouse.  The advanced version is better as you can see everything at 
once. 

F10REDRAW
F10REDRAW

And the pads redraw in red.  This is what is on level two.  Now go to setup 3 
and redraw: 

F1UP
F10REDRAW
F10REDRAW

Looking at the setup listing, we see that setup 3 draws level 3 and 4 at the 
same time.  We put drill spots on level 3 and the package outline on level 4.  
We can easily see both as the drill spots are slightly larger than the line 
used for the package outline.  The drill spots are displayed in green and the 
outline in brown according to the color selections for the two layers showing.  

F1UP
F10REDRAW
F10REDRAW

One more time gets us the outline only. 

F2DWN
F2DWN
F2DWN
F2DWN

Puts us back where we started, at setup 0, where all levels are showing.

Now that we have seen what this symbol looks like, we will close it and look 
at another symbol.  

F9BACK    -  four times.

To leave the symbol.  The system asks "enter y to exit symbol" answer:

Y (ENTER). 

The system tells us it has closed the symbol.  It also does a calculation of 
the size of the symbol at this time so that the next time the symbol is opened 
it can draw it to fill the screen.  

F5OPEN            To open another symbol.
 
answer C (ENTER) to look at the capacitor symbol.  
 
Again the system draws the capacitor symbol to fill the screen.  Again back 
out with an F9.  

F9BACK  answer Y (ENTER)

Now that we have seen what a couple of symbols look like, we will put several 
symbols in a symbol to simulate creating a full piece of work. 

F1NEW 

We are asked to enter a symbol name.  There is no real limit to the entry, but 
sticking to eight letters or less will facilitate later making a library  (DOS 
file) with the same name.  Being an old Smokey Stover fan we name the symbol: 

FOO (ENTER)

We are now asked to locate the symbol origin.  Wherever the cursor is when F3 
is hit will become the 0,0 reference point for this symbol.  When we locate 
the symbol we are creating in the job or another symbol, the work we enter now 
will appear in the same orientation to the point located as it does to the 
origin.  This may seem vague now but a few examples will demonstrate the 
process.  Symbols can be located rotated at 90 degree steps.  Symbols rotate 
around their origin.  So it it best design symbols so you can remember their 
origin and their original orientation.  Sorry, but we have not been consistent 
in the various examples.  ELEC.LIB is mostly done with pin one at the lower 
left for IC outlines, and R's and C's horizontal.  Other libraries we have 
done standing up.  You will develop your own preference.  It does not take 
long to make a library in a style that is pleasing to you.  

Move the cursor near the lower left corner of the screen.  

F3ORIGIN

Note that the value of the cursor position is now 0,0.  We notice that the 
capacitor symbol is still there.  The screen is normally erased only when you 
redraw.  We do that now, though sometimes it is useful to have an old symbol 
left on the screen.  For example, we sometimes make use of this feature when 
we want to make two symbols which connect to each other.  

F10REDRAW
F10REDRAW

We now have a nice clean space and a new symbol "FOO" to create.  We will put 
an IC outline, a bypass capacitor, and a couple of connection lines to make a 
bypassed IC symbol.  

First we get the IC14 symbol that we just looked at and locate it standing up 
at 0,0 where we can remember how it looks.  

We notice that we have the familiar line:

1LINE   2PAD   3SYMBOL   4LABEL   5OTHER

At the bottom of the screen.  When we are in the mode where we can add 
material to a symbol, we get this line just before we can back out of a 
symbol.  Again, if you get lost in the command tree you can always hit F9 
until you get the "enter y to exit symbol" message.  Then hit anything but a y 
and you will know where you are.  We are working on our new symbol "FOO" which 
is at present blank.  We want to add a symbol to it so we select symbol. 

3SYMBOL

We will have to tell the program what symbol we want to enter in our symbol.  
We also need to tell it how we want it oriented.  

F2NAME

We need to name a symbol.  We are asked to enter a symbol name.

IC14  (ENTER)

We notice the second line now reads "enter symbol IC14" to show that we have 
selected a symbol which can be entered into our new symbol FOO.  We could do 
some other things, like rotate our symbol.  For now we will try entering this 
symbol into the new symbol FOO. 

1LOCSYM

We now notice that the bottom line reads:

1FIND   2DELETE   3*MODFY  4SETUP   5REJECT

Whenever we are in a position to enter data, this line appears.  We also 
notice a 7, a triangle pointing to the right, and a happy face in the upper 
left hand corner of the screen.  The 7 is our level in the key tree.  The 
right pointing triangle indicates that the locate key is enabled to locate 
something, and the happy face indicates that we are locating work in a symbol. 

We will locate the library symbol IC14 in our new symbol FOO.  

F7LOCATE       

And the IC14 outline appears.  Depending on where the cursor was placed when 
the symbol origin was located, the outline may be partially off the screen.  
Do not worry, it is not located where we want it anyway. 

F1FIND

We need to find the object just entered to delete it.  With the advanced 
version objects can be moved and copied.  It is enough to do work to "find", 
"delete" and re "locate" objects.  The advanced version is just more 
convenient.  

The information line reads "symbol IC14 found @ above x,y".  The position x,y 
reads 0,0 which is where we just put the symbol so we have found the right 
one.  Later when you have a big job and don't remember where everything is, 
entered objects can be found by positioning the cursor near where the object 
is and noting if the right one is found.  If the wrong object is found, 
hitting the F5REJECT key will cause the search to continue until the desired 
object is found.  Note that sometimes there will be several objects located at 
the same position.  

This is the only object on the screen and it is in the wrong place so:

F2DELETE

And the IC14 symbol disappears.  Actually it is redrawn in background.  This 
means that if several objects were drawn on top of each other then part of 
some of the overlap might disappear.  Two F10REDRAW key hits will always 
redraw what is there.  At the moment our symbol FOO is empty so there is 
nothing to redraw.  

We want to draw our symbol standing up, so we need to get back to the menu 
which allows this. 

F9BACK

Now for our instructional purposes, we want to draw the IC symbol standing up 
with the notch at the top.   The 5ROT=  key allows the symbol to be entered 
rotated in 90 degree increments, starting from how it was created.  Since the 
notch was to the left in the symbol as it is stored, we want to rotate is 3 
steps of 90 degree counterclockwise.  Why counterclockwise?  I hear you ask.  
That is the way mathematicians think of angles.  It could have been done 
either way, but we followed normal math conventions.  

F5ROT=0
F5ROT=1
F5ROT=2

After pushing the F5 key the third time it ends up reading F5ROT=3 which is 
where we want it.  It is also necessary at this point to rename the symbol we 
want to enter.  Sorry, but a peculiarity of this system is that the current 
symbol name is canceled when a delete operation is performed.  We thought we 
had a good reason at the time, but now the logic is so imbeded that it would 
take a major rewrite (which is in progress) to change it.  

F2NAME

Answer IC14 

F1LOCSYM

We are now ready to locate the symbol.  Move the cursor to x=0.0, y=+0.6.  Why 
this location?   Because I am designing this symbol.  You get to design your 
symbols the way you want to.  I have thought out in my mind how I want it to 
look.   I am going to make an IC symbol with a bypass cap at the top and pin 7 
at the lower left hand corner, which will be at zero, zero.  At least the way 
I did it this location is off the screen.  Many systems do not let you locate 
items off the screen.  We often do.  It sometimes saves trying to reposition 
the work on the screen at just the right scale.  We now locate the IC outline. 

F7LOCATE

Part of the IC outline appears.   The rest is off the screen.  No matter.  
Move the cursor to 0,0 which should be the lower left hand pin or pin 7.  This 
is a mess.  We would like our work nicely centered on the screen.   We will 
now create a work area of a scale we like.  The 4SETUP key gets us to menus 
which allow changing all sorts of things about the screen setup.  

F4SETUP
F5SCREN         To work on the screen appearance.
F4REGION        To change the region of the screen we look at.
F3AUTO          To do it in automatic mode.

We have not done things in the right order but purposefully so to instruct 
you.  We are asked for a screen width in inches.  We will enter 2 

2 (ENTER)

The screen redraws.  We briefly see part of one of the pads drawn at the 
screen top before it is overwritten with the status lines.  The screen is now 
blank.  I guess we didn't do it right.  The way auto works, is to draw the 
screen at the entered width with the present cursor position at the upper left 
of the new screen.  We will try again.  We first move the cursor to x=-0.5, 
y=1.2.  Again, I am doing it the way I want to.  You might pick a different 
position for your work space.   

F3AUTO

1.8  (ENTER)

This puts things where I want them.  We might like to remember this location 
so we do not have to fuss the next time we work on this symbol.  We will use 
the memory feature of the redraw command to store this redraw area.  

F10REDRAW

We notice that some of the areas have names, and some are blank.  We could use 
any of them but we will use the up key to select 7 which is presently blank. 

F1UP 6

We note the key label changes to 1UP 7 so we are now selecting the space we 
want.  

F5CHANGE

This will store the present screen view in location 7.  We are asked to enter 
a label for this setup.  Enter anything that is descriptive to you that will 
fit on the screen.  We enter "Nice view of symbol FOO".  We notice that this 
label appears opposite the number 7.  To show how this works, we will redraw 
the screen using one of the old setups.  Use the 2DWN key to get to setup 5. 

F2DWN 7
F2DWN 6

And the key label reads 2DWN 5 to show that we are now pointing at the stored 
view 5.  We select this view by the select key. 

F3SELECT

The screen redraws with the indicated area of 22 by 17 inches.  This is much 
too large to do any work.  We can barely see our IC outline.  So let us go 
back to our stored view.  

F10REDRAW

This gets the list of redraw areas.  We again use the UP DOWN keys to pick the 
area we just made. 

F1UP 5
F1UP 6

And the key now reads F1UP 7 to show that we are pointing to the nice view of 
our symbol.  So we redraw this view.  

F3SELECT

And we are back to the "nice view".  In general this is the way this system is 
designed to move around the work area.  Use the AUTO feature when you want to 
generate a new work view.  Save it as above when you know that you will want 
to come back to it.  

Now we will add to our symbol.  It would be nice to have a bypass capacitor.  

F9BACK
F9BACK
F9BACK
F9BACK

Gets us to the menu that lets us select a symbol name.  We know the menus are 
a little hard to get around at first.  By the time you do a little real work 
you will find that you are moving around the keys with little effort.  If you 
think this system is hard to learn, try one of the big expensive systems where 
similar moves around the system are done with UNIX macro strings.  NO hope to 
learn without going to a school for a long time.  

F2NAME

C (ENTER)

We note that rotation is still at three which is a 270 degree rotation.  
Since this is not where we want it we rotate it one more time.  

5ROT=3

And note that it changes to 5ROT=0

In general, special conditions like rotate are reset to a standard initial 
mode when we leave an operation.  This has advantages and disadvantages.  
Sometimes the system does not remember the current symbol, rotation, etc. when 
we would like it to.  Sometimes it remembers an old condition when we would 
rather it would reset.  We will fix all thin in version 3.  But for now, and 
the free version probably forever, you will have to put up with strange 
behavior.  So if you go to enter a symbol and nothing happens, go back and 
rename the symbol.  We will now enter a bypass capacitor.  

F1LOCSYM

And we see that we have the standard data entry menu.   We move the cursor to 
x=0.050, y=0.8.  To do this we have to change the cursor movement speed.  It 
was moving 0.1 inch per step.  Since we want to move to a .050 step we need to 
change the movement.  

F6SPEED
F6SPEED
F6SPEED
F6SPEED
F6SPEED
F6SPEED

If we have both counted right, the entry ahead of the % sign on the top line 
now reads M  50 to show we are now moving in 50 mil steps.  Use the F6 key to 
go around again if you miss it the first time.  The smallest number in this 
sequence is set by the GRID key.  It can be set at any number.  The SPEED key 
then works on a 1,2,4,5,10,20 multiple of the grid.  The grid is presently set 
at 25 mils.  

Now that we are at the desired location we locate a capacitor.

F7LOCATE

And the capacitor symbol appears where we want it.  It happens to have been 
created lying horizontally so we do not need to rotate it.  

We will now connect the capacitor between pins 7 and 14 with wires on level 1 
and level 2.  Looking at our chart we see that setup 8 will enter 20 mil wires 
on level 1.  We change the setup to 8. 

4SETUP
1EDSET
1 UP  pushed 8 times gets us to setup 8 as shown on the second screen line.

F9BACK pushed 4 times gets us to the line, pad, symbol, label, other menu.

We want to enter lines so we pick:

1LINE         To enter lines.
1LOCLINE      To distinguish from entering points in existing lines

And we now have the familiar find, delete, modfy, setup, reject menu that 
tells us we can enter data.  

Move the cursor to the right end of the capacitor, x=.250, y=.8.  Hit locate
to start a line.  

F7LOCATE

A tick sound is heard to indicate a line has been started.  Now move to 
x=.3, y=.8 and locate an intermediate line point.

F7LOCATE

A green 20 mil line segment appears between the starting point and the current 
cursor position.  Now move to the IC pin 14 x=.3,y=.6 and end the line.  

F8END

A lower pitch sound distinguishes a line end from a line start.  We now have a 
line connecting the right end of the capacitor to the IC pin 14.  For fun, we 
will put the next wire on the other side.  We notice that setup 9 is setup for 
20 mil lines on level 2.  So we select setup 2.  Notice that if none of the 
setups had the line width and level combination that we want, we can edit any 
one of the setups for the desired combination.  We generally try to pre edit 
the setups so we have available the ones we usually want.  We save one, 
usually setup 0, for use when we want something special.  See documentation 
elsewhere for the edit procedure, or just muck around till you figure out how 
to do it.  

F4SETUP
F1EDSET
F1 UP

And we now have setup 9.

F9BACK  twice and we are back at the data entry menu.

Move the cursor to the left end of the capacitor.  x=.05, y=.8 and start a 
line.  

F7LOCATE

Again a tick is heard.  Move to x=.1, y=.8 and locate an intermediate point.  

F7LOCATE

A tick is heard and a red line appears indicating a line on level 2.  Now move 
to x=.1, y=0.0 and place another line segment.

F7LOCATE

Finally move to x=0, y=0 and end the line.  

F8END

A lower pitch sound again indicates a line end.  

This does not seem like a very complicated object but it illustrates most of 
the concepts needed to make very complex boards.  Back out of the symbol now 
by hitting F9 three times and answering y. 

F9BACK three times, y (ENTER)

The system says "symbol closed".  We can now use this symbol.  But first we 
will open it to see what we have made.  Note we created it with "new" but now 
that it is an existing symbol we have to open it. 

F5OPEN

FOO (ENTER) to the question.

Notice that it is now drawn in a scale that fits it to the available screen 
space as best the system can.  Use the redraw command and select "nice view" 
to observe that the system picked its own view of this symbol.  Now use F9 to 
back out of the symbol and answer y to close it.  You now have your very own 
original symbol.   Let us make something even more complicated.  

F1NEW
GOO (ENTER) to create the new symbol goo.
F3ORIGIN  at some convenient place.  

While the new GOO symbol space is empty, our old symbol is still visible.  We 
sometimes make use of this when we want to make two symbols that have to fit 
together.  For now we will clean up the space by hitting F10 twice to redraw 
the clear area.  The cursor is now sitting at 0,0. 

F10REDRAW
F10REDRAW

We will put several copies of the FOO symbol in the GOO symbol.  Suppose, for 
example, that the FOO symbol were all the lines necessary for a memory chip, 
as we indicated in the TUTOR exercise.  We could now make a multi chip memory 
section.  We will put down three of the FOO symbols since that is enough to 
illustrate the idea. 

F3SYMBOL
F2NAME       FOO (ENTER)
F1LOCSYM
F7LOCATE

The FOO symbol appears at 0,0.  Move to 0.5,0 and locate a second copy.

F7LOCATE

Again a third copy at 1.0, 0

F7LOCATE

This is enough for illustration.  Close the symbol by backing out with F9's 
and a y.

Now get a large working space.  

F10REDRAW
F2DWN    six times untli it reads 1
F3SELECT  to select the 10 by 8 inch work space

With this system, you can work with symbols until you have completed your 
task.  For output purposes, the work must be put on something called the 
"job".  The difference between a symbol and the job is that while a symbol can 
be moved, saved and deleted as a unit, the job is a special part of the work 
area which is used for the generation of output files.  The next version of 
this program will allow everything to be done from a symbol which will remove 
one level of confusion.  We just did not think to do it this way at first and 
it is now too hard to change without a complete rewrite.  

We will treat the symbol GOO like it is our complete task.  We will first 
locate it on the job area.  Then we will make a check plot of it and prepare 
files for photoplotting.  First use F9 to back out to the line, pad, symbol, 
label, other menu.  Note that when we do this we are at key tree level 2 as 
shown by the upper left hand corner screen number.  We are no longer working 
in a symbol, work we do now goes in the job.  Move the cursor to 0,0.  Select 
line.  We will first draw a line around the work area so that we can see where 
to put our work.   

F9BACK
F9BACK
F1LINE         To go to enter lines
F1LOCLIN       To locate a line
F4SETUP        We will make this line a different width for practice.
F1EDSET        To pick a different setup.

We note that setup 15 draws a line on four levels at once.  This will 
conveniently put a border on all the layers.  F1 UP six times gets us to setup 
15. 

F1 UP          Six times
F9BACK         Twice gets us to the find, delete, ... menu.

We are still at a move speed of 50 mils.  5 F6SPEED will get us to 1 inch 
moves.  We are already at 0,0.  Let us move to 1,1 and draw a border 1 inch 
inside a possible 10 by 8 inch piece of film.  

Move to x=1, y=1

F7LOCATE

A tick is heard indicating that a line has been started.  Move to x=1, y=7.

F7LOCATE

A tick is heard and a line appears between 1,1 and 1,7.  Continue the border.
Move to x=9, y=7.

F7LOCATE

Move to x=9, y=1

F7LOCATE

Move back to x=1, y=1

F8END

And the border is complete.  

F9BACK      twice to get to the menu which allows symbol selection.

F3SYMBOL    to select symbol entry

F2NAME      to choose a symbol

GOO (ENTER) to pick the symbol we made to simulate a real piece of work.

F1LOCSYM    to locate the selected symbol on the job.

Now we move to x=4, y=3 to locate the symbol GOO.

F7LOCATE    A tick sound is heard and the three chip outlines are drawn.  

We now have a job with some stuff on it.  It is not much, but does illustrate 
how a job might be made.  We can now make a check print to inspect our work.  
Three F9's will get us back to the very first menu where we can select the 
plot menu.  

F9BACK  three times.
F3PLOT  to select the plot menu.

We will first make a plot on the Epson printer.  Since this can take a long 
time, we will select only the part of the layout where there is something of 
interest.  This is the area of the three chips.  First use F6 to select .1 
inch steps so we can accurately bracket the area of interest.  Then move to 
x=3.8, y=4.1.  Now we select the Epson plot mode. 

F2ESPLOT

We are asked to place the cursor at the upper left hand corner and to hit F7.  

F7LOCATE

We are immediately asked to locate the lower right hand corner of the area to 
be plotted.  We move to x=5.5, y=2.8 and:

F7LOCATE

We are now asked for a scale factor.  Entry of 1 would print the design at 
labeled scale.  It would be hard to see the detail.  We pick 2 to get a 2 to 
one plot.  The part of the drawing selected is printed to a new scale on the 
screen and the printer and the printer starts (slowly) printing the screen.  
It there is no printer, or if the printer is not compatible with Epson 
graphics mode 5 there will be a nasty error message but no work will be lost.  
When the print out is complete we notice that the various levels are printed 
out on top of each other.  We can't tell which level is which.  To get 
separate levels, we need to select a setup which prints only one level at a 
time.  We note that Setup 1 is prepared to print only level 1, the parts side 
while Setup 2 is arranged to print only level 2, the wire side.  Setup 3 has 
been arranged to print level 3, the drill spots, and level 4 the parts 
outlines together.  This makes a useful combination.  Repeat the check print 
process with each of the setups selected to get a working set.  

The last thing we will do for this exercise is to make a set of plot files and 
save the work.

We should still be in the plot menu.  

F3PLTFIL

The system asks for a plot file name.  Our convention is that we name the 
files ending in 1,2,3,... to indicate the level we are plotting.  The normal 
procedure for a two sided plated through hole board would be to make 5 plots.  
They are: 

Level 1, the parts side.
Level 2, the wire or solder side.
Level 3, the drill spots.
Level 4, the parts outline, used for a silk screen and parts location.
Level 5, the solder mask.  

We answer

GOO1 (ENTER)

We are asked for a level - we answer

1 (ENTER)

We are asked for the plotter steps per inch.  For 1 to 1 scale on most 
plotters enter 1000.  Here is your chance to change the scale.  If your 
plotter makes 400 steps per inch as do some low cost pen plotters you would 
answer 400.  If you happen to know that your plotter has a scale factor error, 
then a correction could be made here.  We will assume you are sending work to 
us and enter 1000. 

1000 (ENTER)

Now we are asked for offsets in x and y.  You could enter values here in 
thousandths of an inch if you know that you want to relocate the drawing on 
the plotting table.  For example, by giving each plot level a different offset 
you can arrange to have all the levels plotted on a single piece of film.  
Before these last entries are made be sure you have enough room on the default 
disk to hold the plot files.  If in doubt, a fresh formatted disk is in order.  
The system can die a horrible death if it cannot find enough room.  Some 
versions of DOS die in a way that does not let you recover.  Best to be sure 
you have enough room.  

0 (ENTER)
0 (ENTER)

The disk whirrs and a file is created.  Later you will see that it is named 
FOO1.PLT.  Repeat the above process naming the files FOO2 for level 2, FOO3 
for level 3 etc.. 

Finally F9BACK get the menu with 2FILE.

F9BACK
F2FILE
F1PUTFIL
F1SAVJOB

And we are asked for a file name.  We will call this effort GOO.

GOO (ENTER)

The system advises us that it did not remember loading this job.  We are given 
a chance to change our mind.  Entering anything but c will cause the present 
work to be saved.  If we later reload this job we will be back where we are 
now.  Any symbol sets loaded are saved with this job.  Remember we loaded the 
library ELEC.  We will not have to reload it when we restart this job as it 
will be saved as a part of this job.  

(ENTER)

The disk whirrs and the job is saved.  Again, be sure there is room on the 
disk.  Late versions of DOS give you another chance on a full disk.  Earlier 
versions did sometimes.  

Now that the work is saved, three F9BACK will get the question "are you sure" 
We are, and enter y to quit.  

An examination of the disk directory should show 7 new files.  There will be 
five files with names like GOO1.PLT, GOO2.PLT,... These are the plot files.  
Send them and money to us if you want photoplots.  There will be a pair of 
files GOO.PCD, and GOO.PCS which are the files that save your work.  The PCD 
file save all the working conditions, like the redraw areas you have named.  
The PCS file contains all the data you have entered.  

It has taken a lot of words to describe this very simple operation.  But that 
is the way words work.  Most of you will get tired and quit following the step 
by step operations as you pick up on the general idea of this system.  The 
detail is here to help those that are lost . 

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

ORDER.DOC



ENVIRONMENTAL OPTICS CORP.    PHOTOPLOTTING ORDER FORM      JANUARY, 1987

                                      Reservation # _____________ 
                                      Good for $25.00 demonstration plots
                                      until _____________


BILL TO:                              SHIP TO:

__________________________________    _________________________________

__________________________________    _________________________________

__________________________________    _________________________________

Charge           Visa _____           Shipment by UPS unless otherwise 
          Master Card _____           instructed.
     Payment Enclosed _____

Card # __ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __

Expires __ __ - __ __

FILE NAME     FILM SIZE     BASE PRICE     ADDITIONAL       PLOT CHARGE
                                           KILLOBYTES

__________     __________     __________     __________     __________

__________     __________     __________     __________     __________

__________     __________     __________     __________     __________

__________     __________     __________     __________     __________

__________     __________     __________     __________     __________

__________     __________     __________     __________     __________


                                    SETUP AND DELIVERY          $25.00

                                    Total                   __________


```
{% endraw %}

## PHOTOOL.DOC

{% raw %}
```
PHOTOOL.DOC

We will make demonstration photoplots for you at the (good during 1988) 
introductory price of $25.00 per 10x12 inch plot.  We will plot anything you 
can get on this size film if you follow the procedure below.  

1) You must make a reservation.  We ask you to do this because you might be 
reading this in the year 2001 and we want to make sure that you understand our 
current terms and conditions before going to the effort of preparing a job.  
There is no cost for the reservation which will be good for long enough for you 
to prepare a job.  Use the form below.  

2) We prefer that you stick to two sided boards in the format of STANDARD.DOC 
but if you have compelling reasons for some other format please indicate on 
the reservation form and we will try to accommodate you.  

3) Allow a border of 1 inch all around the layout.  This will give you a 8" 
by 10" working area.  You will need registration targets inside this border.  

4) For this price you are limited to lines and spaces no smaller than 0.010".
Check with us for a price for finer lines.

5) We reserve the right to refund "funny" boards.  It is possible to design a 
useless board that takes forever to plot.  We reserve the right to refund such 
designs.  Some of you will be doing surface mount boards and may need to draw 
each pad instead of using the flash feature.  If you have a lot of such work to 
do it will pay to design an aperture plate for your designs.  Write us for 
information.    

6) This is intended to demonstrate our plotter and plotting service.  
Production customes should refer to the price list in PRICE.DOC.

7) We will assume no liability other than to attempt to plot your design on a 
best effort basis.  Our equipment may not be suitable for some applications.  
It is the customers responsibility to determine the suitability of our 
process to his designs.  If you are not pleased with the demonstration plot, 
you may return it for a full refund.  We hope that you can appreciate that we 
cannot be responsible for your expense in preparing work.   

8) Load the job APERDEF to see drawings of the apertures done 8x up.  Some have 
center holes to facilitate one sided hand drilled boards.  If you use these 
apertures, be sure to end the line short of the pad center or you will obscure 
the drill hole.  

9) The price includes return by mail.  Include cost if other delivery is 
required.  Include sales tax in Illinois.  

10) We request that you include your job on the disk(s).  While we will prepare 
plots without the job, we will use it to verify that we are doing the correct 
plot.  We will protect the job as confidential information and return the job 
disk with your plot.  

11) Please follow the file naming convention in PLOTOUT.DOC.

These are preliminary rules.  We will include our latest requirements with your 
reservation.











                                        From:   _______________________________

                                                _______________________________

                                                _______________________________

To:     Environmental Optics Corp.
        P.O. Box 296
        Batavia, IL 60510

Please reserve time for a photoplotting demonstration for my job.  I 
understand that work will be on a best efforts basis and that you will refund 
the plotting fee if I am not fully satisfied.  I further understand that you 
will not assume any liability for my time and effort in preparing the 
demonstration work,  and that work should not be started until confirmation is 
received.  I also understand that obtaining this reservation places me under no 
obligation to actually prepare a job.  Current demonstration prices will be 
returned with the reservation.


        Signed__________________________________


```
{% endraw %}

## PLOTOUT.DOC

{% raw %}
```

PLOTOUT.DOC

This describes the plot file output format.  The file is ASCII with letters to
indicate type of object or action and numbers for position or size.  All
entries are separated by commas.  Separate lines are used for each entry except
that x,y pairs for a line are continued on the same line until it ends.  See
below and the TUTOR demo for examples.  You can measure with the cursor to
verify items below.


A       Aperture.  The following number is the aperture number.  The selected
        aperture is moved to the plot position where it stays until changed.

C       Circle/Arc.  Draw an arc.  Format is x, y, radius, starting angle,
        ending angle.  The starting and ending angle are in radians x 500.  The
        arc is to be drawn counter clockwise.  The zero angle position is on
        the + x axis.

D       Draw.  Draw a line.  The last aperture named is used to draw the line.
        The line is started at the current plotting head position and draws are
        continued to the following x,y pairs.

H       Home.  Move the plotting head to the home position.

M       Move.  Move the plotting head to the following x,y location.  Do not
        draw while moving.

P       Pad.  Plot a pad at the following x,y location.  The last aperture
        named is used to draw the pad.

The data below is the ASCII file generated from the TUTOR demonstration by
selecting 3PLOT then 3FILE.  The plot file is that generated for level 1 only.
The questions were answered "FILENAME" (we add .PLT to your entered file name),
1 for level, 1000 for steps per inch, 0 and 0 for x and y offset.  The job was
edited to delete the bus symbol from the job to reduce its size so the plot
file below is that for the circuit you see on first loading TUTOR.  **** Note:
In order to create an output plot file, the level must be showing, i.e. there
must be a color assigned to the level that you have selected for the plot.
If you create plot files with a setup file that has a color assigned to only
the level that you are plotting then "what you see is what you get". ****

The first entry is A, 12 to indicate that we start out using aperture 12.  The
next entry P, 200 , 200 indicates that we are to draw a pad with aperture 12
(the last named aperture) at  x=200, y=200.   A number of pads are similarly
drawn.   Next we shift to aperture 4 and move to x=500, y=900 without drawing.
We now start drawing at x=500, y=900 a line to x=1200, y=900 and continue on to
x=1200, y=1000 where the line ends since the following entry is a move.  We
continue with more lines and several aperture changes ending with an arc.  The
arc has its center located at x=1900, y=400 and has a radius of 100
(thousandths).  It starts at 90 degrees (Pi/2 radians*500 = (3.14/2)*500 = 785)
and ends at 270 degrees.  The last entry H (go home) indicates that we are 
done. 

See the job APERDEF for drawings of the apertures done 8x up.   The program
ROLAND.BAS is included as an example to show how to read this file and drive a
standard plotter.

A, 12
P, 200 , 200
P, 600 , 200
P, 900 , 200
P, 1300 , 200
P, 200 , 1000
P, 200 , 900
P, 200 , 800
P, 200 , 700
P, 200 , 600
P, 200 , 500
P, 200 , 400
P, 500 , 400
P, 500 , 500
P, 500 , 600
P, 500 , 700
P, 500 , 800
P, 500 , 900
P, 500 , 1000
P, 1000 , 600
P, 1000 , 1000
P, 1200 , 600
P, 1200 , 1000
P, 800 , 1000
P, 800 , 800
A, 4
M, 500 , 900
D, 1200 , 900 , 1200 , 1000
M, 800 , 1000
D, 500 , 1000
A, 6
M, 200 , 200
D, 50 , 200 , 50 , 1000 , 200 , 1000
M, 200 , 200
D, 200 , 50 , 1450 , 50 , 1450 , 600 , 1200 , 600
A, 12
P, 1100 , 400
A, 8
P, 900 , 400
A, 3
C, 1900 , 400 , 100 , 785 , 2356
H


```
{% endraw %}

## PRICE.DOC

{% raw %}
```

PRICE.DOC

ENVIRONMENTAL OPTICS CORP., PHOTOPLOTTING SCHEDULE             August, 1988

There is a setup and delivery charge of $25.00 per order.  This includes next 
day air to US and other reasonable places.  Charges are based on film size and 
the size of the plot as determined by the file size in killobytes.  File size 
is measured by the results of a DIR of the plot disk.  Base killobytes are 
allowed as indicated for the film size.  Killobytes over this are charged at 
the additional killobyte rate.  Killobyte allowances are per plot and do not 
accumulate over the order.  These rates hold for lines no smaller than 0.010".  
Consult us for fine line work.   Film is sized to allow a 1" border on all 
sides.  We reserve the right to leave our fingerprints there as we do not 
always wear our gloves.  The 10x16 and 8x20 sizes are cut from 16x20 film (for 
a better form factor for long skinny boards - like IBM) and are not guaranteed 
to be square.  

We continue to offer a $25.00 per plot "special" for jobs created from the 
DROEGE program to introduce our service and our photoplotter.  This includes 
setup and delivery.  Note that in 1988 we have increased the boarder to 1" and 
the size to 10" by 12" so there is a 8x10" useful area.  There is no file size 
limit.  Lines smaller than 0.010" are not allowed.  If more than one plot is 
sent it may be less expensive at the regular rates.  We will bill you 
accordingly. 

Unless otherwise instructed we will roughly center the job on the film.  If 
the film size is not specified we will pick the smallest film size that allows 
a 1" border.  It is not necessary to offset the plot file which can be 
anywhere in the DROEGE work space.  Follow the rules in PHOTOOL.DOC.  If you 
want us to mirror a level, please specify.  This is often done so that two 
board sides face emulsion to emulsion. 

Unless credit is established, please remit with the order.  The order form 
should allow computation of charges.  We accept Visa and Master Card.  
 
The following are stock film sizes:

FILM      MAXIMUM       BASE        BASE         ADDITIONAL
SIZE      PLOT SIZE     PRICE       KILLOBYTES   KILLOBYTES
INCHES    INCHES

8x10      6x8           $10.00      30           $0.30
8x20      6x18          $25.00      75           $0.30
10x12     8x10          $16.00      48           $0.30
10x16     8x14          $25.00      75           $0.30
11x14     9x12          $20.00      60           $0.30
12x18     10x16         $32.00      96           $0.30
16x20     14x18         $50.00     150           $0.30

Average work runs 0.75 killobyte per square inch of printed circuit board.  
Plots are made on 0.004" polyester base litho film.  It is sometimes 
convenient for us to plot on larger film.  You will be charged for the 
smallest standard size that fits your job.  

Jobs are accepted on IBM PC-DOS floppy disks only.  360kb and 1.2 mb accepted.  
Above prices are for plot files in DROEGE format.  Disks will be returned with 
the plotted film.  Be sure to keep a backup.  If the JOB.PCD and JOB.PCS files 
are included we may be able to solve problems.  We are still adventuresome and 
will try to plot other formats if given enough information.  

Plotting is accepted on a best efforts basis.  If, for any reason, you do not 
like our work return the unused film within 5 days for a full refund.  Write 
for a sample of our plotte output.  Prices are subject to change without 
notice.  Write for latest rates.  The date of this price list is 3 August 
1988. 

```
{% endraw %}

## PROD.DOC

{% raw %}
```


PROD.DOC

ENVIRONMENTAL OPTICS OFFERS A COMPLETE LOW COST CAD LINE FOR PRINTED CIRCUIT 
LAYOUT.  USE OUR FREE SOFTWARE TO TRY THE SYSTEM, WE WILL PHOTOPLOT YOUR 
DESIGN FOR A NOMINAL CHARGE.  USE THE PROFESSIONAL LEVEL SOFTWARE TO PREPARE 
SOPHISTICATED DESIGNS.  BUY THE COMPLETE SYSTEM, AND GET EVERYTHING NEEDED TO 
PREPARE PRECISION PHOTOTOOLING IN 3' OF LABORATORY BENCH SPACE.  



THE COMPLETE SYSTEM                                             $12,950

Everything needed to prepare precision photooling in 34 1/2" of bench space.  
Includes a 80286 based computer with high resolution color display and a hard 
disk.  The vector photoplotter produces high quality, high precision film and 
is more accurate at 1 to 1 than most pen plotters at 4 to one.  

System Includes:

Environmental Optics Mark VI Photoplotter
        Plots up to 17 1/4" by 23" with a single aperture or 16 1/2" by 22 1/4"
        with all apertures
        Holds film to 20" by 24"
        Size 34 1/2" by 25" by 10"
        No external power required, powered from computer.
        Plotting type, vector.
        Plotting speed, 2"/second, axially.
        Accuracy after shipping and calibration, 0.002" rms.
        16 Apertures range from 0.006" to 0.125", mix of round and square.
        Uses standard low cost litho film, or rapid access line film.
        Light tight box allows operation in lighted room, darkened only for 
        loading film.  Or operate in full daylight with optional film bag.

Computer, 8 MHz 80286 based, similar to IBM AT.
        1.2 MB Floppy Disk
        20 MB Hard Disk
        1 MB Memory
        Printer
        EGA Monitor and adapter
        Keyboard

Software
        DROEGE Manual layout software V 2.175.
        Plotter driver.
        Utility software.
        DOS


PHOTOPLOTTER                                                     $9,950.00

A stand alone photoplotter system to prepare photooling from floppy disks.

System Includes:

Environmental Optics Mark VI Photoplotter
        Specifications as above.
Computer, 8088 based, similar to IBM XT.
        360 KB Floppy Disk
        512 KB Memory
        Mono monitor and adapter. 
Software
        Plotter Driver
        Utility Software
        DOS

ENTRY LEVEL SOFTWARE        DROEGE VERSION 1.85           "FREE" OR $10.00

This is a manual printed circuit system.  It is just like using a layout grid 
and prepared stick-ons.  The advantage of this program is that you don't have 
to take a 2 week training course to learn to use it.  We find most computer 
wise electronic techs just start using it with little reference to the manual.  
Because the program does not do auto-routing, auto-placement, schematic 
capture, simulation, and all the other "wonderful" things available today; it 
doesn't need to know much about the components.  If you are doing high 
frequency work, or simple jobs, or anything else that your fancy CAD designer 
did not prepare for, then the automatic systems are much slower, harder to 
use, and make you do a lot of things that you don't really care to do.  This 
program has powerful symbol manipulation features that we find to be missing 
on programs which cost tens of thousands of dollars.  

This program can be obtained "free" from many bulletin boards.  We will send a 
copy post paid for a $10.00 mailing and duplication fee.  It is also available 
from PC-SIG as their disk numbers 904 and 905.


Features:

1) Multi-color multi-layer display.

2) Maximum layout size 64" x 64" to 0.001" precision.

3) User definable grid of any size from 0.001" to full size.

4) Runs on IBM PC, XT, AT, and anything else that is compatible - we think 
this means anything that will run Microsoft compiled Basic and Assembly code.  
Requires about 400k memory, CGA and adapter, optional Epson compatible 
printer. 

5) Features 12 layers, 15 line widths, entry and deletion of lines, pads, 
symbols, labels, and arcs.  

6) Very powerful symbol concept retains features of groups when nested to many 
levels.  The symbols are stored as master templates so an edit will update all 
the places it is used.  This greatly conserves storage space and is a feature 
found on only the most expensive systems (if at all). 

An item like an IC pad can be made into a first level symbol, then several can 
be grouped for a second level chip layout.  Buss lines added form a third 
level memory chip symbol.  A fourth level would allow a whole memory layout to 
be manipulated with a single edit.  Then a single edit to the basic pad symbol 
would allow changing from round to square pads to suit a vendor preference.  
This concept allows an unlimited number of custom layout patterns to be 
created with very efficient use of storage space. 

7) Symbols can be placed rotated in 90 degree steps, and will rotate in 
rotated symbols to level 20. 

8) Output of design data to any scale on Epson or compatible printers that 
support graphics mode 5 (72 by 72 dots per inch) for check plots. 

9) Easy to learn hierarchical menu structure puts commands within a few 
keystrokes and leaves most of the screen available for work.  Typical users 
never read the approximately 60 pages of documentation on disk. 

10) Zoom and pan to any part of the work area, to any scale from 0.001" per 
screen line to screen display of the full work space.  Fifteen screen views 
can be stored to allow fast switching between work areas. 

11) Stitch function allows moving between any four of the twelve available 
board layers with automatic insertion of vias which can be any user designed 
symbol. 

12) Sixteen user prepared setups allow quick change between layer and aperture 
assignments. 

13) Efficient editing technique quickly finds desired class of item from 
starting screen search point.  Found items are identified i.e. "Red 20 mil 
line on level 5 starting at x= 4.125, y=7.625".  This allows identifying a 
desired item for edit when many items overlap.  

14) Variable size type font for lettering.  Lettering can be drawn with any of 
the available apertures.

15) Complete job parameters are saved to disk so that the exact working space 
is restored when work is resumed.  

16) Summary feature allows counting the total number of symbols, their type and 
symbol level used to provide a parts count.

17) Defined output format matches Environmental Optics Photoplotter, and can be 
easily translated for most plotters.  One sample driver for a pen plotter is 
included. 

                                                                   
PROFESSIONAL LEVEL SOFTWARE   DROEGE VERSION 2.175 (pp Airmail)    $100.00

This version contains all the features listed above plus the following: 

A) Uses available memory up to the 640K DOS limit.  Effectively  10 times 
the available job size as the "freeware" version after loading the usual 
symbol library.  We have designed 16" by 12" boards with over 1000 components 
using less than half the storage space.  About 20,000 items can be handled 
with a 640K DOS machine.  A single line point uses an "item".  Use of a 1000 
component symbol also used one "item".  A scrambled logic board might run out 
of space at 100 chips or so.  A huge multi-layer memory board could be made 
with very little space if layers of symbols are used.  

B) Supports the EGA with a resolution of 640 by 350 lines.  Fifteen colors can 
be assigned to any of the twelve layers. 

C) Setup program allows allocation of memory for best utilization of 
resources. 

D) Powerful editing commands not included in the "freeware" version allow 
move, copy, change, and insert. 

E) Setups can be viewed on the screen without a redraw.  

F) Supports a Microsoft compatible mouse.  

G) Supports line (not drawn at width) drawings on the HP Draftpro.

H) Many small features, like PATH, are supported in this version which have 
not been implemented in the "freeware" version.  There are also additional bug 
fixes.  

I) Defined output format matches Environmental Optics Photoplotter.  Easy to 
translate to other formats, three sample formats provided, including one to 
HPGL. 

J) Indexed manual of about 130 pages.  Tutorial sections with example jobs 
demonstrate most features.  A number of sample jobs are provided.


DROEGE printed circuit design program Version 3.0  (under preparation)

This program now uses floating point arithmetic so there is no longer any 
limit to the size of the drawing.  Well, to be more precise you are limited to 
the known size of the universe after another 100 Billion years of expansion.  
Actually you are limited to about a half mile square to 0.001" precision.  
With this version a math co-processor will be helpful.  

This version does away with the concept of a job.  Everything is a symbol.  
This makes the key structure much easier to learn.  We now do everything the 
right way mathematically so mirror, rotate, and scale work to any level.  This 
will allow a flip redraw mode to make surface mount jobs easier.  Many small 
requested improvements are being added.  This version allows rotation to 
arbitrary angles.  Great for those of you laying out boards which must go in 
round missiles.  Key labels and error messages can be changed by the user 
which makes foreign language versions easy.


PHOTOPLOTTING SERVICE         (Minimum Charge)                      $25.00

Print PRICE.DOC for a price schedule.  A typical 5 film plot set for an IBM PC 
sized board would run a little over $100.    


SPECIAL SOFTWARE

We will attempt any plot file conversion for a nominal or exorbitant charge, 
it depends on how much we want to do it.  We have started conversions programs 
for most popular systems.  So it may not be too bad.  Write with details of 
your plot format.  


```
{% endraw %}

## QUICK.DOC

{% raw %}
```

QUICK.DOC

This document provides a quick summary of how to to do common operations with
the DROEGE system.  Most of the summaries give a list of keys starting with the
first menu presented on start up.  Normally it is not necessary to start from
the beginning since you will usually be part way through the key tree when you
want to do something.  It is usually only necessary to back up the tree to the
last branch which gets you where you want to go.  KEYTREE.DOC is useful to list
and hang on the wall so that you can see where you are.  When in doubt back
up to the starting menu.  This can always be done by hitting F9 enough.  If
you are in an open symbol you will have to answer "y" to close the symbol to
back up beyond the symbol entry.  After that be sure to answer anything but
"y" to the "enter y for sys" unless you are finished with the session.

The following summaries give the key sequences to hit to do the listed
operations.  For more information, look up each key in the key command
summary.  We will always start with the command line at start up.  You can
always get to the start up command line by hitting F9 enough and answering "y"
to everything but SURE?...  After that, function key presses are indicated by
(n,n,n...E...,n), where n represents one of the ten function keys at the left
of the keyboard, L indicates a locate, E an end, D entry of some data, and N a
name of something.  Either follow the number sequences from the first menu, or 
decode the key presses using KEYTREE.DOC.  

We have tried to be logical in the placement of commands in the tree.
Sometimes even we have trouble finding an operation.  The 5 key limit did not
always allow a good location.  We will use this notation here and on some of
the commands.doc keys to show you how to find your way to an operation.

ARC, ENTER AN                                   (1,5,2,L,L,L)

CIRCLE, ENTER A                                 (1,5,1,D,7)

JOB, LOAD A                                     (2,2,1,N)

LABEL, ENTER A                                  (1,4,3,N,7)
       ENTER ROTATED 180 DEGREES                (1,4,2,3,3,9,3,N,7)

LIBRARY, LOAD A                                 (2,2,2,N)

LINE, CHANGE CHARACTERISTICS (LEVEL, COLOR, WIDTH)  (1,1,1,4,....

LINE, DELETE A                                  (1,1,1,1,2)

LINE, ENTER A                                   (1,1,1,7,MOVE,7,MOVE,...8)

LINE, FIND A                                    (1,1,1,1)

LIST:

CAUTION: SYSTEM WILL HANG IF YOU DON'T HAVE A PRINTER

        JOBS            (LISTS TO SCREEN)       (2,4)
        KEYBOARD LABELS                         (2,2,5)
        LABELS                                  (2,2,4)
        LIBRARIES       (LISTS TO SCREEN)       (2,3)
        SETUPS                                  (2,5)
        SYMBOLS                                 (2,2,3)
        SYMBOLS USED IN SYMBOL N                (1,3,3,5,N,3,3,1)
        (Note: listing jobs or libraries to the)
        (screen also gets you available disk space)
PAD, ENTER A                                    (1,2,7)

PALETTE, SWITCH                                 (1,1,3,5)

REDRAW, ABORT                                   ...9)

REDRAW THE SCREEN (SAME AREA)                   (10,10)
REDRAW THE SCREEN (PRESET AREA)                 (10,UP/DOWN,3)
REDRAW THE SCREEN (NEW AREA)                    (10,4,5,4,[1,3,OR 5 -FOLLOW
                                                INSTRUCTIONS] 9,9,9,5[TO NAME
                                                IT],3)

STITCH, SETUP                                   (1,1,5,5,[1-4 FOR SETUPS,5
                                                FOR VIA SYMBOL],9 - THEN USE
                                                LOCATE/END AND 1-4 TO SWITCH

SYMBOL, CREATE A NEW                            (1,3,3,1,N,3,...DATA ENTRY)

SYMBOL, EDIT TO CHANGE                          (1,3,3,5,N,...DATA ENTRY)

SYMBOL, ENTER INTO JOB                          (1,3,2,N,1,7)

SYMBOL M, ENTER INTO SYMBOL N                   (1,3,3,5,N,3,2,M,1,7)

SYMBOL, KILL (DELETE)                           (1,3,3,4,N,"y")

SYMBOL, MAKE INTO A LIBRARY                     (1,3,3,5,N,3,3,2,N)


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
REGISTER.DOC

We are pleased to have you register even if you do not send money.  We will 
send mailings when we have new versions or new features if there is a chance 
we will break even on the process.  You should know it costs us about a dollar 
to send you a piece of mail so we need some registrations if we are to keep in 
contact.  We will at least keep your name on file.  With this version we have 
included a phone number and telephone hours. 

Please send advanced version, $100 post paid.

Your name and address will be included in the sign on message for your copy.  
So be sure to print it below as you want it to appear.  We allow four lines.  

Name:________________________________________________

Address:_____________________________________________

Address:_____________________________________________

Address:_____________________________________________

Check enclosed:

Charge card:    VISA         _______________________________

                MASTER CARD  _______________________________

                Expiration Date    Month______  Year _______



Please register me as a user:

Name:_______________________________________________

Address:____________________________________________

Address:____________________________________________

Address:____________________________________________

Version____________  Serial Number__________________
                     (From sign on screen)
```
{% endraw %}

## ROLAND.BAS

{% raw %}
```bas
100 REM
200 REM   October 20, 1986.
300 REM
400 REM -- first issue some resets and define screen color
500 REM ==================================================
600 ON ERROR GOTO 15500
700 SCREEN 0:COLOR 11,1,1:CLS
800 REM
900 REM -- declare var types and dimension arrays
1000 REM =========================================
1100 DEFINT I-N
1200 DIM B$(1000)
1300 REM
1400 REM -- This sections defines constants and default values.
1500 REM ======================================================
1600 TWOPI=6.283185
1700 ARCFACTOR=360!/(TWOPI*500!)
1800 NSTRINGMAX=1000
1900 REM
2000 REM
2100 REM
2200 REM -- parameter initialization --
2300 REM ==============================
2400 IAPERTURE=-1
2500 REM
2600 REM
2700 INPUT"Ready pen-plotter and enter name of plot file [.PLT]: ",FILENAME$
2800 IF FILENAME$="" THEN END
2900 IF INSTR(FILENAME$,".")=0 THEN FILENAME$=FILENAME$ + ".PLT"
3000 REM
3100 REM
3200 REM -- Enter main body of program. Open plot file and begin reading.
3300 REM ================================================================
3400 OPEN "I",#1,FILENAME$
3500 ISTR=NSTRINGMAX
3600 GOSUB 10200
3700 IF ITYPE = 1 THEN 4400 'VALID MODE FOUND
3800 IF ITYPE <> 3 THEN 3600
3900 PRINT "END OF INPUT FILE...PLOT DONE.":GOTO 9200
4000 REM
4100 REM -- Come here when valid mode found --
4200 REM =====================================
4300 REM -- test IMODE and jump to process command --
4400 IF A$="M" THEN 5600
4500 IF A$="D" THEN 5600
4600 IF A$="H" THEN LPRINT "H":GOTO 3600
4700 IF A$="A" THEN 6300
4800 IF A$="P" THEN 6800
4900 IF A$="C" THEN 7700
5000 PRINT "Plot file error -- command not recognized."
5100 PRINT "Plot terminated.":GOTO 9200
5200 REM
5300 REM
5400 REM -- Come here to process M and D modes --
5500 REM ========================================
5600 MD$=A$:GOSUB 10200:IX=IVALUE
5700 GOSUB 10200:IY=IVALUE:LPRINT MD$;IX;",";IY
5800 GOSUB 10200:IF ITYPE <> 2 THEN 3700 ELSE IX=IVALUE:GOTO 5700
5900 REM
6000 REM
6100 REM -- Come here to process aperture command --
6200 REM ===========================================
6300 GOSUB 10200:IAPERTURE=IVALUE:GOTO 3700
6400 REM
6500 REM
6600 REM -- Come here to expose a pad --
6700 REM ===============================
6800 GOSUB 10200:IX=IVALUE
6900 GOSUB 10200:IY=IVALUE
7000 LPRINT "M";IX;",";IY
7100 GOSUB 12400
7200 GOSUB 10200:IF ITYPE <> 2 THEN 3700 ELSE IX=IVALUE:GOTO 6900
7300 REM
7400 REM
7500 REM -- Come here to draw an arc or circle
7600 REM =====================================
7700 GOSUB 10200:IXCENTER=IVALUE
7800 GOSUB 10200:IYCENTER=IVALUE
7900 GOSUB 10200:IRADIUS=IVALUE
8000 GOSUB 10200:ITHETA1=VALUE*ARCFACTOR
8100 GOSUB 10200:ITHETA2=VALUE*ARCFACTOR
8200 IF ITHETA1>360! THEN ITHETA1=ITHETA1-360!
8300 IF ITHETA2>360! THEN ITHETA2=ITHETA2-360!
8400 IF ITHETA2>ITHETA1 THEN LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",";ITHETA1;",";ITHETA2:GOTO 8700
8500 LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",";ITHETA1;",360"
8600 LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",0,";ITHETA2
8700 GOSUB 10200:IF ITYPE=2 THEN IXCENTER=IVALUE:GOTO 7800 ELSE GOTO 3700
8800 REM
8900 REM
9000 REM -- Come here to close file, etc., at end of plot --
9100 REM ===================================================
9200 CLOSE #1:IAPERTURE=-1:LPRINT"H":GOTO 2400
9300 REM
9400 REM ========== END OF MAIN ROUTINE....MAJOR SUBROUTINES FOLLOW.
9500 REM ===========================================================
9600 REM ===========================================================
9700 REM ===========================================================
9800 REM
9900 REM
10000 REM This subroutine reads the plot file and classifies the data strings.
10100 REM ====================================================================
10200 IF ISTR < NSTRINGMAX THEN 10900
10300 FOR ISTR=1 TO NSTRINGMAX
10400 IF NOT EOF(1) THEN 10600
10500 B$(ISTR)="^Z":ISTR=NSTRINGMAX:GOTO 10700
10600 INPUT #1,B$(ISTR)
10700 NEXT ISTR
10800 ISTR=0
10900 ISTR=ISTR+1:A$=B$(ISTR):IF A$="" THEN 10200
11000 IF A$ = "^Z" THEN ITYPE=3:RETURN 'DECLARE END OF FILE
11100 REM
11200 REM now test first character for a numeral or + or - or decimal point.
11300 IASC=ASC(A$):IF IASC=43 OR IASC=45 OR IASC=46 OR (IASC>47 AND IASC<58) THEN 11900
11400 REM
11500 REM Come here if string seems to be a command letter.
11600 ITYPE=1:VALUE=0!:IVALUE=0:RETURN
11700 REM
11800 REM Come here if string seems to be numerical data.
11900 ITYPE=2:VALUE=VAL(A$):IVALUE=VALUE
12000 RETURN
12100 REM
12200 REM
12300 REM This routine draws pad outlines.
12400 LPRINT"A";IX;",";IY
12500 ON IAPERTURE GOTO 12800,12800,12900,13000,13100,13200,13300,13400,13500,13600,13700,13800,13900,14000,14100
12600 REM Draw an X if iaperture is not between 1 and 15 inclusive.
12700 LPRINT"R-15,-15":LPRINT"I30,30":LPRINT"R-30,0":LPRINT"I30,-30":RETURN
12800 IRADIUS=1:GOTO 14600
12900 IRADIUS=2:GOTO 14600
13000 IRADIUS=2:GOTO 14600
13100 IRADIUS=4:GOTO 14600
13200 IRADIUS=6:GOTO 14600
13300 IRADIUS=8:GOTO 14600
13400 IRADIUS=10:GOTO 14600
13500 IRADIUS=12:GOTO 14600
13600 IRADIUS=16:GOTO 14600
13700 ISIDE=13:GOTO 14900
13800 ISIDE=16:GOTO 14900
13900 ISIDE=20:GOTO 14900
14000 ISIDE=25:GOTO 14900
14100 IRADIUS=25:GOSUB 14600:ISIDE=2*IRADIUS
14200 LPRINT"I";-ISIDE;",0":LPRINT"R";IRADIUS;",";IRADIUS
14300 LPRINT"I0,";-ISIDE:RETURN
14400 REM
14500 REM This section draws a round pad outline of radius IRADIUS.
14600 LPRINT"G";IRADIUS;",0,360":RETURN
14700 REM
14800 REM This section draws a square pad outline of size ISIDE.
14900 IHALF=ISIDE\2
15000 LPRINT"R";IHALF;",";-IHALF
15100 LPRINT"I0,";ISIDE;",";-ISIDE;",0,0,";-ISIDE;",";ISIDE;",0"
15200 RETURN
15300 REM
15400 REM This code required to avoid timeout error with Roland pen plotter.
15500 IF ERR=24 THEN RESUME 0
15600 ON ERROR GOTO 0
```
{% endraw %}

## STANDARD.DOC

{% raw %}
```

STANDARD.DOC

This suggests a set of standards for a simple two sided board with plated 
through holes.  The symbols in ELEC.LIB follow this standard and will save 
some time in getting started. 

Level 1

Used for the component side of the board.  We look at the board from the 
component side and see through to the solder side.  We show this side in 
green/cyan depending on the Palette switch setting.  Label this level "Parts 
Side" or some such with normal lettering. 

Level 2

Used for the solder side of the board.  We show this side in red/magenta 
depending on the Palette switch setting.   Label this level "Solder Side" or 
some similar legand but enter the label mirrored in x.  

Level 3

Used to show drill spots.  We show the drill spots in green/cyan.  We suggest 
that a different sized spot be used for each drill size.  We normally use 15 
mil spots for most holes, which are actually drilled 0.031" for average work.  
Other sized spots and a legend on the border will allow the vendor to make a 
drill tape. 

Level 4

Used to show component outlines.  We show the components in brown/white.

Level 5

Used for the solder mask.  We show the solder mask in green/cyan. 

While you are free to set up your own standards, if you want us to plot a
demonstration file for you it will reduce the chance for confusion if you
follow the above.

We suggest that you name your plot files with names ending in 1,2,3,etc.. so
that they come out looking like MYPLOT1.PLT etc..  This way we will be less
likely to mirror the wrong plot if we plot for you.  We will normally plot side
1 mirrored, and side 2 direct.  This way the two sides will register emulsion
to emulsion for the least error.  This explains the mirroring of the labels.  
When side 1 is plotted, it will be plotted mirrored so that when it is turned 
over to put the emulsion which was plotted facing up, down against the board, 
then the lettering which we are now viewing through the board will look 
correct.  If you plot all the levels on one film, as described in the HOW TO 
section, then we will not be able to mirror side one.  We will just plot it as 
you send it.  This is OK unless you are trying to do very fine line work.  

If you have not sent work to us before, it pays to send the job (.PCD, .PCS 
files ) with the plot files.  Then we will probably be able to straighten out 
any problem.  

We find that everyone has different choices for colors.  There seems to be
great variations in the way each of us perceive color.  When we can, we will
allow  multi-color selection for the EGA version of this program.  If you
hate the IBM color set choices this is one more reason to buy the licensed
version.  Note that you can switch between the two IBM color choices (1,1,3,5).


```
{% endraw %}

## TUTOR.DOC

{% raw %}
```


TUTOR.DOC

        This leads you step by step through the use of a few of the most
important system features.  First be sure you have backed up the distribution
disks, see previous section.  Experts will want to start with a clean disk with
only the essential files, see the comment in DEMO.DOC.  These are:

        DROEGE.EXE
        SETUP.PCD
        SETUP.PCS
        ALPHAD.LIB  If you want to use letters and numbers
        TUTOR.PCD
        TUTOR.PCS

        As before, we will indicate actions you are to take by three asterisks
followed by text with Enter to indicate typing text followed by the Enter
(carriage return key), or Fn to indicate hitting function key n.

*** DROEGE (Enter)

        The disk should spin and after a while a copyright notice and the
registered owners name address and the serial number should appear.  After you
hit any key, the screen clears and you should now have a pretty blue screen.
You must at least have a color monitor adapter card, even if you don't have a
color monitor.  While it is possible to do some things without color - i.e.
mechanical drawing - the program does not achieve its purpose without color.
The top of the screen should read:

1 MAIN     M  25      %L99   X=  +0.575   Y= +0.575

With a blinking square near the center of the screen.

The bottom of the screen should read:

1ENTER 2FILE  3PLOT  4SETUP 5SYMLST

        The top line of the screen displays the level of the Key Tree - we are
at the entry level (1) which is called the MAIN program level.  Next is
displayed the status of the cursor movement control.  The arrow keys at the
right of the keyboard are used to move the cursor around the screen.  Each time
the arrow keys are pressed they move the cursor the number of steps indicated
by the number after the M.  We think of these as thousandths,  but there is
nothing inherent in this assignment.  If you want to think of them as feet then
you have a 12 by 12 mile work area.  Function key 6 cycles the cursor speed
through seven step sizes starting with the grid setting.  We have set up for a
.025 inch grid so F6 provides speed steps of 25,50,100,125,250,500, and 1000
thousandths.  KP5 provides a speed shift key to speed up movement by a factor
of ten.  We operate with the grid set at 25 thousandths, the speed step set to
the grid we are presently locating things on, usually 100 mills,our left hand
on the function keys and our right hand on the numeric key pad.  We move around
with the arrow keys, shifting to high speed when we need to move a large
distance.

        The next top line entry shows the available storage space as the
percentage left.  The program continuously searches through memory looking for
free space.  This number is updated every 10 minutes or so.  Don't worry, you
will have difficulty using up significant amounts of memory space between
updates though you should consider ending the job and ordering the full sized
version when down to a few percent.  The next numbers are the X and Y cursor
locations as they relate to the whole work space, which covers +- 32 inches in
X and Y.  It is possible for the cursor to be off the screen, so some times you
may have to move it some way to get it to move.  The cursor indicator always
hangs up at the edge of the screen in the direction it has gone.  The X,Y
indicators tell where it really is.  Data is entered at the real cursor
position.  It is possible to locate data off the screen.

        The bottom line of the screen gives us the current set of choices.
Here we can chose F1 to enter data, F2 to do something with files, F3 to plot
the output, and F4 to manipulate the screen display and F5 to list the symbols.
Since we at present have a blank screen we will use F2 to go to the file system
to get some stuff to work with.

*** F2

        We get a new menu at the bottom of the screen.  Our choices are:

1PUTFIL 2GETFIL 3LIBFIL 4JOBFIL 5LSTSET

        Since we want to get a demo program we:

*** F2

        And we get the menu:

1LODJOB 2LODLIB 3LSTSYM 4LSTLAB 5LSTKEY

        We select 1LODJOB to load a job:

*** F1

        A message appears with a beep asking the name of the job to load, or to
enter "c" to avoid loading a job if we do not want to destroy the present one.
We want the TUTOR job so we enter:

*** TUTOR (ENTER)

        The disk spins, after a short wait, a small circuit layout should
appear on the screen.  If you mistype you can correct in the usual way prior to
enter.  If you enter something not on the disk you will get a "DISK ERROR"
message.  In this case press F1 and try again.

        Please note that very few actions in this program are dangerous - i.e.
cause loss of a lot of work.  It is hard to delete a lot of data quickly.  One
way is by 1SAVJOB or 2SAVLIB with a name that exists on disk when that item has
not been loaded since the nothing stored in the computer will overwrite the
good job on the disk.  To help prevent this problem you are prompted if DROEGE
does not remember you loading the same job you are saving.  Moral: Always Keep
Disk Backups.  Otherwise feel free to push function keys and to explore.  Very
little can go wrong.  On the other hand, it will go wrong so back up your work
periodically with the 1SAVJOB.

        The %L at the top of the screen now reads 91 to indicate that some
space has been occupied by the demonstration program which also brings in a
small library of electronic symbols.

        You should be able to see a square cursor near the center by the round
pad.  Try moving the cursor around by pressing the arrow keys.  Change its
speed by:

*** F6

        -- Several times -- watch M at the top of the screen.  Note that the
cursor now moves in bigger jumps.  Push until M is back to 25 as this will
match up with the parts locations.

        The circuit displayed does nothing.  It represents an IC, and several
passive components.  As you move the cursor around you will note that you can
measure distances between components by watching the position display.

*** F9
*** F9

        The menu should now change back to the first menu and the top line
should read 1 MAIN.  F9 is an important key.  It backs up the menu and halts
most long operations.  Pushing F9 again will try to back you out of the program
but you are protected by a message.  Anything but a "y" (ENTER) will keep you
from the exit and possible work loss.  Thus you can generally hit F9 freely
waking up when you hear the message beep.  Try hitting F9 one more time.  But
remember what your mother says and don't say yes unless you want to lose your
v--alued data.

*** F1

        Selecting 1ENTER moves us toward entering data, but first we have to
make a few decisions.  Our first choice is between:

1LINE  2PAD   3SYMBOL 4LABEL 5OTHER

*** F1

        We choose lines.  And we get another choice:

1LOCLIN 2LOCPT  3STYLE 4SETUP  5STITCH

        Here we get to choose between editing whole lines or points within
lines.  We also get to set the line style - i.e. solid, dashed etc.. SETUP
appears on many menus and is used to choose screen parameters like which of 12
levels is to be edited, the color with which data on a level will displayed,
the width of entered lines, the grid spacing, and what part of the whole
working area is shown.  We  will choose to locate lines:

*** F1

        We are now four layers deep in the key tree and something new shows up
on the top line.  It now reads:  4>N EDLIN  The right arrow indicates that the
enter key F7 is now operational and that pressing it will cause data to be
added to the data base.  The N following the right arrow indicates that we are
in the normal (not the symbol) mode.  We have preset the screen parameters to
draw red 30 mil wide lines on level 2 and to show them drawn at full width.
The top of the screen reminds us of this by displaying "ENTER LINE ,L2-A RD30.
Lets try to enter a line.  Using the arrow keys move the cursor to the right
end of the left most resistor at the bottom of the screen.

*** F7

        A faint tick is heard, you have started a line.  Now move the cursor to
the left end of the right resistor at the screen bottom.

*** F8

        A lower pitch tick is heard.  A red 30 mil line appears between the two
circuit pads.  Our convention here is that green lines are on the board top
(level 1) or parts side and that red lines are on the board bottom (level 2) or
solder side.  We always view boards from the parts side.  I looked at boards
from the bottom side for 20 years and switched when we got our first CAD
machine to satisfy my colleagues even though I was the boss.  The most
important thing is to have a standard.  The color is not important, everyone
will have their own preference, the board view is.  There are more ways to make
boards wrong than right and consistency will help keep your board vendor from
doing something awful.

        Move the cursor to the right most of the two free pads at the bottom of
the screen.  By successive F7 make a line without crossing any red line to the
top pad at the top right resistor.  This pad also has a green line ending
there.  Note that you need press F7 only when direction is changed not
every time the cursor is moved.  End the line with an F8.  Note that the last
move should end with an F8.   An F7 and an F8 at the same point is OK but uses
an extra storage space.

*** F7
  "
  "
  "
*** F8

        Our cursor is now sitting on the top of the top right resistor where
two wires end.  Lets find the wire we just entered.

*** F1

        After a few seconds the old green wire is redrawn dashed.  We found the
wrong one.  We reject it:

*** F5

        We reject the green wire.  The red wire is now found and the cursor
moves to its starting point.  A line found message appears telling us that the
current cursor position shown at the top right is the line start.  We could hit
F2 and the line would disappear - try it later.  Instead:

*** F5

        It finds the same line again the way I drew it.  The search algorithm
locates objects by their ends or any intermediate point.  We reject again.  
The cursor continues diligently in a square search with steps equal to the 
grid size.  This time we found the green line again.  Note that if something 
is placed off the current grid it will never be found.  Note also that we 
search only for the current thing - i.e. lines when in line mode, symbols in 
symbol mode etc..  When you tire of searching and rejecting: 

*** F9

        The search stops when the cursor gets to the upper left hand corner of
its search pattern and the menu backs up one.  If we had waited a while another
line would have been found.  Again F9 would end the operation and back us up.
F9 will stop most long operations.

*** F1

        Lets go back to the line entry menu and enter a different width line in
a different color.  From the menu 1FIND 2DELETE 3*MODFY 4SETUP  5REJECT we will
pick 4SETUP:

*** F4          1EDSET 2EDLEVL 3EDCOLR 4EDAPER  5SCREN

        Setup 9, shown at the top of the screen tell us what we are now
entering.  Except that since there are 12 levels it can only show us one
without filling the screen.  It now reads:

        SETUP  9,LEVEL  1,COLOR OFF,APER OFF

        We want to change the setup so we select 1EDSET:

*** F1

        We get key 1 and 2 labeled "UP" and "DOWN" and key 5 labeled 5*SETUP to
remind us that we will change the setup.  We push key 1 to go up one setup:

*** F1

        We get an new line at the top of the screen:

        SETUP  10,LEVEL  1,COLOR GREEN,APER RD50

        This is a new color and a new width which should look different so lets
go back to the circuit and enter a new line:

*** F9
*** F9

        And we are back to the  1FIND   2DELETE 3*MODFY 4SETUP  5REJECT menu
which lets us enter lines.  Move the cursor to the top left pad of the IC and
start a power bus.  Run it up so that it clears the other objects the off to
the right edge of the screen.

*** F7
*** F7
*** F8

        Now lets try some fun with symbols.  First we will redraw the screen to
a larger scale.

*** F10
*** F2
*** F3

        This sequence redraws the screen with a preset view we have named the
"big picture" so we could remember it.  You can set up display areas like this
yourself.  See the 10REDRAW command.

*** F9
*** F9

        This should get us back to the  1LINE   2PAD    3SYMBOL 4LABEL  5OTHER
menu.

*** F3

        We choose symbols.  To enter a symbol we have to give DROEGE a name.
To do so we hit F2:

*** F2

        We get a beep and a prompt - "enter symbol name"

*** BUS (ENTER)

        If you typed correctly in upper case the entry should be accepted
quietly.  Otherwise you might get an error message "symbol not found".  In this
case, hit F2 and try again.  We are now ready to go to locate the symbol bus.
To do this we hit 1LOCSYM:

*** F1

        We get a familiar menu.  In fact all the data entry menus are the same
menu and we can do the same types of things with the same keystrokes.  We have
tried to maintain consistency.  Move the cursor to X=1.900, Y=1.600 and hit
locate.

*** F7

        A bus pattern just like the other two is drawn.  Not only is the chip a
symbol but the chip with the bus wires on it is also a symbol.  Further to
speed drawing the bus, we made the bus wires symbols.  There are two wire
symbols, one for the wires on the left pads and one for the wires on the right
pads.  But we see we have made a mistake.  We connected everything to a bus.
We probably want some power to the circuit.  So let us go and change the
symbol.

*** F9

        We now have the menu    1LOCSYM 2NAME   3CREATE 4SETUP  5ROT=.  Since
we want to be creative we select 3CREATE:

*** F3

        This gives us a menu where we can make a new symbol, kill an old one,
or modify an existing symbol.  We choose to modify the symbol BUS by:

*** F5
*** BUS (RETURN)  Remember symbol names distinguish case.

        The screen clears and the symbol BUS draws to fill the screen.  The
screen is oriented so that 0,0 is at the reference point of the symbol and the
cursor is placed at 0,0.  We want to add a ground bus to pin 7.  If we make it
on the green (level 1) side of the board it will interfere with the bus on pin
8.  Therefore we choose to make it in red on side 2.  We will also remove the
existing bus wire.  Remember I said I made it a symbol so we will look for the
symbol on pin 7.

*** F3   We want symbol mode.

*** F1   We want the menu with find.  Note the KEYTREE chart is useful when you
         can't remember how to get to some menu.
*** F1   To find a symbol.

        We get the message "SYMBOL LEFT FOUND @ ABOVE X,Y".  This is the
symbol we want so we delete it:

*** F2

        The symbol, which consists of a single bus line, is drawn in
background.  Note that this erased some of the remaining symbol.  You can get a
clean redraw by hitting F10 twice.

*** F10
*** F10

        The symbol is cleanly redrawn.  Now we will enter our bus wire.

*** F9
*** F9
*** F1
*** F1

        And we are back to our line entry menu.  The second screen line tells
us we will enter a line on level one.  We want a red line on level 2 so we go
to the setup menu.  I have a setup listing generated by hitting 4LSTSET from
the file menu.  See KEYTREE.DOC to find it.  So I can look at the listing and
see that I want setup 11.  I could also modify any of the setups to draw the
line I want.  Since I have a setup available:

*** F4
*** F1
*** F1
*** F9
*** F9

        And we now have setup 11.

*** F7          Starting a line at 0,0
*** F7          Moving to 0,-.2 locate a line mid point.
*** F8          Moving to 0.6,-.2 locate a line end.

        We have now modified our symbol so it has a power bus.  Now lets go
back and see what this did to the job.

*** F9
*** F9
*** F9

        We have finished our changes so we answer "y" to the exit symbol
question.

*** Y (ENTER)

        We get a symbol closed message and a beep.  We can now elect to redraw.
The old symbol stays until we redraw.

*** F10
*** F10

        The screen redraws the lower left corner of the job.  Unless we tell it
to, two redraws cause a redraw of the present screen window position.  We
really want the "big picture" so:

*** F10
*** F3          It happens to be sitting on the item we want so no up or down
                is needed.

        The screen redraws and we see the three circuits nicely connected with
a bus.

***F9   enough times until we are asked if we want to exit.  Then Y to end the 
session.
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```

UPDATE.DOC


UPDATE - WILL LIST CHANGES TO DROEGE

31 July 1988 Version 1.86

We keep saying we will not improve this but we do.  This version adds a PATH 
command so you can load the program from one disk and work on another.  We 
have added two new print out modes.  We also have added a phone number and 
phone hours as an experiment.  There are about 10,000 words of new 
documentation.  Mostly this is very detailed step by step stuff to help real 
beginners to get started.  

Because our users out there think they can make printed circuit art work with 
dot matrix printers they keep sending us awful examples.  This is why we 
started making a low cost photoplotter, folks.  Still we encourage masochism 
all we can so we have added a couple of plot modes that do a better job of 
printing the screen on the Epson printer.  Thes new plot modes use Epson mode 
7.  Be warned that these modes are really slow.  We presume you will use 
ESPLOT for check prints, then go off to dinner and a movie while you are 
waiting for your camera ready art work.  

Selecting PLOT from the first menu gets three modes of Epson print out.  
ESPLOT is the old mode, 72 by 72 dots per inch in one pass.  

HRPLOT gets a 144 dot horizontal by 216 vertical print out.  Further the 
output is tripple pass with slight horizontal and vertical movement to smear 
out the lines left by the ribbon threads and the allignment of the print bars.  
This prints lines slightly wider, so use somewhate narrower lines if you plan 
to make artwork this way.  You will need to experiment.  We find we need to go 
8x up before we get something we like.  We further warn you that this mode 
really beats up the paper.  This makes multi-layer boards very hard to 
register unless you really blow up the scale.  Then you get the problem of 
trying to line everything up.  

Becauuse of the peculiarities of the way circles are drawn, open spaces are 
left on the screen.  When the screen is printed, these show up as white spots.  
When you try to use your reducing xerox machine to make art work, that 
marvelous machine reproduces every dot, and they tend to grow with 
reproductions so soon the work is not dense enough for use.  By smearing out 
the reproduction, white dots tend to be covered up because printing is an "OR" 
process.  

RVPLOT is also 144 by 216 tripple strike, but it only has vertical movement to 
try to smear out the fabric lines.  It prints the reverse of the image on the 
screen.  Now we can't wipe over the circle dots so they remain.  You can cover 
these dots with extra lines.  This is a pain if you draw every line, but if 
round pads are made symbols, then you only have to do it once.  It does slow 
down the redraw.  

Since all the Epson print modes work by transferring the image from the screen 
to the printer, resolution is limited to 320 dots in one pass.  This means 
that only a 4.4 inch strip on the Epson can be used.  With the EGA version, 
you get 8.8 inch strips if you have a wide carriage printer.

PATH has been added so that the program can be operated from one  directory 
with the work in another.  For initial start up, DROEGE.EXE, SETUP.PCS, and 
SETUP.PCD must be on the default disk.  Selecting PATH from the first menu, 
asks for a path name.  Correct form includes the second back slash.  Some 
examples of what works:    A: (ENTER) to work on the A disk wherever you 
started.   C:\FOOFILE\  (ENTER) if you start on the A or B disk and want to 
work in the directory FOOFILE on the C disk.  Note that the second back slash 
is necessary.  You must have a version of DOS that accepts PATH.  

20 August 1987 Version 1.85 

Cosmetic changes.  The pay version now supports Microsoft compatible mice.  
The pay version also now contains a number of new editing features: move 
anything, copy anything, insert and move line points, and change the aperture 
used in a line, pad, label, and arc.  The pay version also has several more 
fixes to mirror.  If you spend much time using this program these features 
alone will justify investing in the pay version.  Again we threaten not to do 
any more work on this version.  We have fixed bugs in the pay version which 
have not been properly recorded for change to this version.  Sorry, it is just 
too much work keeping up two versions.  

28 July 1987  Version 1.84

Fixed bug which always drew a label in the same orientation that it was first 
drawn.  We were too cute in trying to save space.  Rodent rooters be aware 
that we are adding mouse input to the pay version. 

26 July 1987  Version 1.83

We have had pity on our "free" customers who may wonder what this program is 
good for if it doesn't support any real output device.  It supports our 
photoplotter very nicely thank you!  Buy one and see.  We have added two forms 
of print screen.  One, available from the PLOT menu, prints a designated area 
of the screen to a designated scale on a late model Epson printer (or equal - 
must support graphics mode 5).  This mode breaks the job into vertical strips 
which print 320 dots wide on the Epson.  You can print the job as big as a 
house if you are patient.  Note the pay version supports the EGA and wide and 
narrow printers so the strips are up to 640 dots wide if you have the EGA.  
This mode is available by selection of 3PLOT from the main menu, then 2ESPLOT.  
It is not necessary for everything that you want to dump to be visible.  If 
you know where the job is you can locate the cursor off the screen to get it.

The other mode is a simple screen dump.  This can also be done from DOS if 
you run GRAPHICS in the AUTOEXEC.BAT file, but not (at this writing) with an 
EGA.  The screen dump is available from any menu containing 4SETUP.  Select 
4SETUP then 5SCREN then 4REGION then 3PRTSC.  Note that the 3PRTSC key does 
not draw circles round.  2ESPLOT does. 

Note that the two screen dump modes print everything on the screen that is not 
plotted in background.  Even some invisible lines if they are black.  Best to 
set up the colors and levels so what you want is showing.  

Fixed labels so they draw the width determined by the aperture when scaled.  
Fixed an obscure bug caused by the sequence FIND (OBJECT FOUND), LOCATE, BACK.
Fixed bug which prevented apertures above #8 from being drawn on levels 4,8, 
and 12.  

The aperture list has been changed from previous versions.  No change is more 
than 5 mils so most jobs will plot equally well with the new or old list.  
Some of the spacings may seem close on some of the demonstration jobs as they 
were done with the old aperture list.

The pay version now supports changeable aperture lists so that it will be 
possible  to support special aperture plates for surface mount work.   

20 May 1987

Fixes for Version 1.82.  This will be the final "free" version unless a really 
bad bug turns up.  We will now turn all our energy to version 2+ which 
supports the EGA, flexibility in the screen setup, and multiple aperture 
plates among other features.  

We again fixed mirror.  We believe all combinations of mirror work, but you 
will have to experiment to see the order that results from combinations of 
LROT, SROT, and MIR=.  VARSYM can now be mirrored, but labels in a mirrored 
variable symbol will not be positioned correctly since mirror only works once.  
We found one bug caused by accidentally pressing F7 after a line has been 
found instead of F9 to end the search.  We found one more bug in the symbol 
creation process.  We have fixed the label dummy so that if a key is pressed 
when there is no symbol for it in memory, it will produce a blank instead of a 
dot.  Expect problems if you forget to load the keyboard library and have 
entered some text.  The system will make up a blank string for the text you 
entered then will return the blank text when you attempt to reenter it after 
the keyboard library has been loaded.  Solution is to kill symbols of the form 
"TEXT$LABL".

Fixed scaled arcs so they plot.  Fixed plot offset so it works.  Deleted the 
SYMLST key.  It was for specialists.  A change of area now results in an 
automatic redraw.  There was too much opportunity for error with the previous 
scheme.   

Fixed many of the menu headings so they read correctly as to what is currently 
being entered.  

15 October 1986

Fixed labels to remember their rotations and scale.  Mirror still can be used 
only once.  Fixed hang which caused subsequent entries to be arcs after 
leaving arc mode.  Fixed plot arc and offset scaling.  First setup now shows 
correctly.  With additions and revisions to documentation we will release as 
"free" version 1.81.  Good luck to our users.  

28 September 1986

Fixed bug which prevented last symbol opened from being drawn.  Fixed bug which 
prevented find of a line in a newly created symbol.

25 September 1986

Changed aperture list.  Cleaned up and spell checked documentation for release 
as "free" version 1.8.

15 August 1986

Changed arrays so that larger storage is possible with Quick Basic.  Encrypted 
heading and user ID.  Changed format of sign on to hold until any key is hit.

3 August 1986

Changed some key labels to allow consistant documentation.

30 July 1986

Changed the FRE reading on the KP3  flags dump to the -1 option which does 
garbage collection and lists all available memory.

Changed hash table search algorithm.  Now we hope no longer to get a hash table 
full error when there is still room.  Someday we should analyze this more 
carefully.  

27 July 1986

Fixed crash caused by deletion of everything from a symbol.  

Fixed stitch table entry for a via so it now finds the right name for the via 
symbol.  

Changed name of PUT and GET key to PUTFIL and GETFIL.

20 July 1986

Fixed, we hope, so that symbols rotate when you want them to.

Fix to line end.  Bug caused the last line point to be deleted when a line was 
ended at the same location as the last position entry.

Added STITCH as an alternative line entry mode.  Stitch is an alternative to 
the LOCLIN key.  It provides two additional menues.  The first level menu is 
blank except for key 5 (STSET) Stitch Set.  Pressing key 5 gets a second menu 
which allows selecting 4 preset setups for keys 1-4.  Key 5 on the second menu 
allows assigning a symbol (VIASYM) to a VIA.  After backing out of the second 
menu, lines can be entered in the usual way from the first menu.  Pressing one 
of the keys 1-4 changes the setup to the preselected one.  This is a fast way 
to switch between setups in line entry mode.  In additon, if a key is pressed 
that changes the setup while a line is open (started but not ended), the VIA 
symbol is inserted and the line can be continued with the new setup.  

This allows a line to be started and shifted from level to level with 
automatic insertion of VIA's.  


17 July 1986

Added NOLAB/SHOLAB key.  This key is on the menu with DR@W/DR@L key.  NOLAB 
causes redraw to skip all labels (including symbol labels).  Initial position 
is the SHOLAB position which shows labels.  Note that even entry of a new label 
is skipped in the NOLAB position.  

Fixed problem which caused objects to be drawn at incorrect width on opening a 
symbol.  Tall skinny objects had their lines and pads drawn too large.

16 July 1986

Added new keys in the load menu to list symbols in three catagories instead of 
the old single symbol list.  Separate listings can now be had for symbols, 
labels, and the keyboard symbols.  This saves having to wait for the same old 
keyboard listing each time the symbols are listed.

Changed the format of the symbol listing available from the OPRSYM key.  The 
list now includes the symbol name, number, hash, times used on the first nest 
level, times used on the second nest level, and times used at levels greater 
than two.  This is to aid in editing a symbol composed of many layers of nested 
symbols so the desired sub symbol can be located.  

Fixed problem which caused linked list to become disconnected when a point was 
deleated at the end of the last line entered.  

Fixed problem which prevented the last symbol created from being found.  

Fixed problem which caused bomb on entry of a single character label.

Changed format of KP9 listing so that symbols are no longer expanded.  Last 
version also had bug which ended listing after first symbol.

Added fast slow key.  KP5 now increases speed by X10.  Caps lock must be on and 
Num lock and Scroll lock must be off for this to work.  Old KP5 function (list 
the flags) is now performed by KP3.  For KP1,KP7, KP9, and KP3 to work for 
their diagnostic functions Caps lock must be on, Num lock must be on, and 
Scroll lock off.  

```
{% endraw %}

## USERS.DOC

{% raw %}
```
 

USERS.DOC

We are interested in collecting useful libraries.  We will distribute 
contributions with future releases of DROEGE.  How about a nice Gothic 
alphabet, or some drawing symbols?

Fill in and mail the form below with your contribution.

To:     Environmental Optics Corp.
        P. O. Box 296
        Batavia, IL 60510

This contributed files listed below are, to the best of my knowledge in the 
public domain or if I wrote them I hereby place them in the public domain.  
They may be freely distributed.

Library Names:

          _____________________________________

          _____________________________________


Signed:   _____________________________________

Name:     _____________________________________

Address:  _____________________________________
           
          _____________________________________

          _____________________________________





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0905

     Volume in drive A is #905 v1.1
     Directory of A:\

    ABOUTPC  DOC     15191   9-17-88   5:17p
    APPENDIX BAT        71  10-12-86   6:02p
    COMMANDS DOC     40149   8-21-88   8:56p
    DEMO     DOC     11216   9-05-88  11:42p
    ERRORS   DOC      8731   8-21-88   9:04p
    FIRST    DOC     11868   9-05-88  10:58p
    HOWTO    DOC     12257   8-21-88   8:52p
    INTRO    DOC      9983   9-05-88  11:01p
    KEYTREE  DOC     10613   9-07-88   8:31p
    LEARNSYM DOC     37768   9-07-88  10:25p
    MANUAL   BAT        84   9-05-88  11:48p
    MISC     BAT        97   9-05-88  11:53p
    ORDER    DOC      1547   9-07-88   9:01p
    PHOTOOL  DOC      3922   9-07-88   8:38p
    PLOTOUT  DOC      3746   8-21-88   8:11p
    PRICE    DOC      3611   9-07-88   8:40p
    PRINTALL BAT       283   9-06-88  12:12a
    PROD     DOC      9992   9-07-88   8:43p
    QUICK    DOC      4252   9-07-88   8:22p
    READ2    ME       4291   9-07-88  10:21p
    REGISTER DOC      1473   9-07-88   9:00p
    ROLAND   BAS      5875  10-20-86   9:54p
    STANDARD DOC      2835   8-21-88   8:07p
    TUTOR    DOC     16959   9-06-88   9:45p
    UPDATE   DOC     12960   9-07-88   9:08p
    USERS    DOC       935   9-07-88   8:44p
    FILES905 TXT      2072   9-28-88  11:20a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   9-26-88   3:51p
           29 file(s)     233667 bytes
                          114688 bytes free

![PC-SIG Library Disk #0905]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0905/DISK0905.jpg)
