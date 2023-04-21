---
layout: page
title: "PC-SIG Diskette Library (Disk #1122)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1122/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1122"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BLACK MAGIC 3 OF 3 (ALSO 1120, 1121)"

    Wordprocessors, databases and spreadsheets all manipulate and structure
    information in specific, but different ways.  Hypertext systems, such as
    BLACK MAGIC, enable you to expand information in another way -- by
    dynamically linking keywords, graphics and blocks of information to one
    another.
    
    For example, you are creating a document and need to define a concept or
    word but the detail of the definition would distract the reader from the
    main text.  You can tag a keyword that will indicate that the definition
    is available.  An area of the screen opens and you type the definition
    or explanation.  To explore the definition, the user triggers the tag
    and the reference is displayed.  This is a simple illustration of
    hypertext.
    
    BLACK MAGIC can shell to DOS, and link and transfer information between
    hypertext and other applications.  Build context-sensitive help systems,
    link specific items in text documents to technical drawings or
    illustrations and expand obscure references with detailed explanations.
    A screen grabber has been added to integrate graphics into BLACK MAGIC.
    The extended ASCII character set is supported for the use of
    international characters.
    
    If you are currently using a document generator for live electronic
    documents such as:  computer-based training guides, foreign language
    tutorials, interactive catalogs, or educational courseware, then you
    should be moving over to BLACK MAGIC hypertext writing.  You will find
    BLACK MAGIC to be more than you ever imagined.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BITSTRIP.BAS

{% raw %}
```bas
100 PRINT CHR$(12)
110 PRINT"bitstrip"
120 INPUT "enter name of input file - ";F1$
130 INPUT "enter name of output file - ";F2$
140 OPEN F1$ FOR INPUT AS #1 LEN=512
150 OPEN F2$ FOR OUTPUT AS #2 LEN=512
160 IF EOF(1) THEN END
170 N=(ASC(INPUT$(1,#1)) AND 127)
180 IF N<10 OR (N>13 AND N<20) THEN 160
190 PRINT #2,CHR$(N);
200 PRINT CHR$(N);
210 GOTO 160
```
{% endraw %}

## FILE1122.TXT

{% raw %}
```
Disk No: 1122
Disk Title: Black Magic 3 of 3 (1120 - 1121 also)
PC-SIG Version: S1.3

Program Title: Black Magic
Author Version: 1.5
Author Registration: $89.95.
Special Requirements: 384K RAM and CGA, HGA, EGA or VGA.

Wordprocessors, databases and spreadsheets all manipulate and structure
information in specific, but different ways.  Hypertext systems, such as
BLACK MAGIC, enable you to expand information in another way -- by
dynamically linking keywords, graphics and blocks of information to one
another.

For example, you are creating a document and need to define a concept or
word but the detail of the definition would distract the reader from the
main text.  You can tag a keyword that will indicate that the definition
is available.  An area of the screen opens and you type the definition
or explanation.  To explore the definition, the user triggers the tag
and the reference is displayed.  This is a simple illustration of
hypertext.

BLACK MAGIC can shell to DOS, and link and transfer information between
hypertext and other applications.  Build context-sensitive help systems,
link specific items in text documents to technical drawings or
illustrations and expand obscure references with detailed explanations.
A screen grabber has been added to integrate graphics into BLACK MAGIC.
The extended ASCII character set is supported for the use of
international characters.

If you are currently using a document generator for live electronic
documents such as:  computer-based training guides, foreign language
tutorials, interactive catalogs, or educational courseware, than you
should be moving over to BLACK MAGIC hypertext writing.  You will find
BLACK MAGIC to be more than you ever imagined.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FIXTABS.BAS

{% raw %}
```bas
110 PRINT "RemoveTab"
120 INPUT "enter name of input file - ";F1$
130 INPUT "enter name of output file - ";F2$
140 OPEN F1$ FOR INPUT AS #1 LEN=512
150 OPEN F2$ FOR OUTPUT AS #2 LEN=512
160 IF EOF(1) THEN END
170 N=(ASC(INPUT$(1,#1)) AND 127)
180 IF N=9 THEN N = 32          ' Replace Tabs with Spaces
190 PRINT #2,CHR$(N);
200 PRINT CHR$(N);
210 GOTO 160
```
{% endraw %}

## INTRO2.TXT

{% raw %}
```
                         A Brief Explanation

The document that you are about to read is a Black Magic created Hypertext
document.  The purpose of this short prelude is to introduce you to the
concepts of hypertext if you don't know them, and to teach you how to read
hypertext if you don't know.  If you do know this information, please go to
the end of this document and activate the Link there.

Hypertext is based on the concept of "Expanding Information".  With hypertext,
blocks of information (text or graphics) can be linked to other blocks of
information.  Once two blocks of information have been linked together, they
provide an instant "gateway" to the other.   This is the expanding information
nature of hypertext.  A single block of information can lead to another and so
on.  Information can literally expand at the user's request.  

     Black Magic
               
Black Magic is a product to create Hypertext documents similar to the above
description.  With Black Magic documents, information can be linked in three
different ways; with Note Links, Reference Links, and Replacement Links.  A
Note Link calls up a small window on screen that contains a "note" to the
user.  A Reference link is used to transport the reader to Another place in
the document.  Replacement Links are used to swap one block of information for
another.   Graphic Links are used to make a graphic image a Link Originator. 
Although Graphics can be any of the three types of Link, only the one symbol
below is used to indicate this.  All Links are indicated through the use of
colored symbols embedded in the text.  The symbols surround the Link
Originator (See Below).  Hypertext Links are indicated through the following
symbols:

          Note Link                Yellow Diamonds
          Reference Link           Green Triangle
          Replacement Link         Pink Square
          Graphic Link             Blue Circle with a "X" in the Center 
     

     Terminology 

Link Originator - The starting point to the link.  It is surrounded by the
               symbols to indicate that it is a hypertext link.
Link End - The other side to a Link originator, where reader is taken after a
               link is traversed. 
Traverse - The act of traveling from a Link originator to its associated Link
               End.

     Reading A Document  
          
A Black Magic document is read through the use of the reader programs.  Three
of these reader programs exist:READEGA.COM (For the Enhanced Graphics
Adaptor), READHGA.COM (For the Hercules Graphics Adaptor), AND READCGA.COM
(For the Color Graphics Adaptor).  To use one of the Reader program to read a
Black document, type the following from the DOS prompt:

     READXYZ filename.mag

Once the document is in the Reader program, it is read using the following
keys:

          Traverse Link            <F1>/Left Mouse Button pressed between the
                                             symbols
          Return from Link          <Esc>/Right Mouse Button  pressed anywhere
                                             in the Link
          Movement                  <ArrowKeys>, <PgUp> & <PgDn>/Mouse

When you are reading a document, and you come across a hypertext Link in the
text, move the cursor between the symbols and press <F1>.  This will activate
the Link, traversing you to the Link End.  To return from the Link End pres
<Esc>.  This will bring you one link back from your current position.    

When you come across a hypertext link in a Graphic, move the cursor over the
Graphic Link (Circle with an "X") and press <F1> to traverse the Link.

And that's about all you need to know to read a hypertext document.  Press
<F1> between the Symbols below to continue with the document.

               Press <F1> Here (Anywhere between the symbols)

```
{% endraw %}

## README.DOC

{% raw %}
```
Black Magic Addendum to the Manual - Version 1.2

Hardware Requirements

Black Magic will requires either an EGA graphics card, a CGA graphics card,
or a Hercules card, a hard disk, and 256K of memory for operation.  Mouse
support is included for Microsoft and compatible mice.  Black Magic may also
be used on VGA graphics systems, but it will operate the system in EGA mode.

The .INI File

Black Magic uses a initialization file generated by the install program to
define its initial configuration. This file is named MAGIC.INI and is simply
an ascii text file arranged in a certain fashion. The purpose of using an
ascii file is that it allows those with the desire to alter the .INI file to
their tastes.   This file can be altered with an ascii editor as desired.
The .INI file is updated each time the Configuration Screen is modified upon
exit from Black Magic.  Following is a listing of a complete MAGIC.INI file. 

NOTE - Not all of these may be present in your .INI file,  with the
exception of the paths any may be left out; however the order in which they
appear is important.

     A Complete MAGIC.INI File

     .INI File Listing                  Comment
     System Path= C:\MAGIC              The path with MAGIC.EXE
     Document Path = C:\MAGIC\FILES     Default Document Path
     Printer Driver = EPSON.DRV         Current Printer Driver installed
     BookMark = On                      Could be On/Off/Query
     Markers = On On                    First 'On' says Link Markers are in
                                        Color.  Second 'On' says Link
                                        Markers are Shown
     Colors = 0 0 0 0                   Acceptable Values are 0 - 15 for
                                        Each.  Text Color, Background Color,
                                        Block Color, Block Background Color
                                        Note: The Text & the background
                                        color can't be equal
                                        The 0 -15 Color Scheme is that of
                                        the EGA Card
     Margins = 10 70                    Left Margin, Right Margin 
                                        Values Between 1 - 79
     Tab Stops = 10                     Values Between 1 - 78
     Note Window = 40 05                Default Note Window Width, Height
                                        Values Between 10 - 78, 3 - 22

Note - As previously stated, not all of these items need be present in the
.INI file, but those that are there must be in the above order.  Also The
syntax shown here of lower case words with a capital first letter and a
space between everything is necessary.

Printouts & Files

In the manual, there are references to various files and printouts whose
location and names have since changed.  Current Information is as follows: 

On page 1-4, a reference is made to the "Addendum Sheets" and a listing of
the number of disks, the disk names, and the contents of each disk.  These
addendum sheets have been replaced with a file on Disk # 1 called
README.FIL.  

Command Line Options 

Black Magic will automatically configure itself for your computer graphics
card; however in some situations this is not desirable.  To circumvent this,
Command Line options may now be entered to force Black Magic into certain
graphics modes.  The available command line options are: 

     Command Line Option           Effect
     /EGA                          Forces Black Magic into EGA mode
     /HERC                         Forces Black Magic into Hercules mode
     /CGA                          Forces Black Magic into CGA mode 
     /EGAMONO                      Forces Black Magic into EGA mode with
                                        a monochrome screen

Command Line options are used by specifying them when Black Magic is run. 
To use them, you enter the following at the DOS prompt:

     MAGIC  /HERC               

This example would force Black Magic into Hercules graphics mode.  Any of
the command line options can be used in this fashion.

NOMOUSE

The other command line option available is that of NOMOUSE.  This option
will disable the mouse support in Black Magic automatically.  The purpose of
this is that on certain IBM compatibles and on Genuine IBM PCs with an
expansion chassis, there is conflict with our mouse driver and Black Magic
will not execute.  Therefore if you are having trouble executing Black
Magic, you may wish to try using the NOMOUSE option This option is specified
by entering the following at the DOS prompt:

     MAGIC /NOMOUSE

The NOMOUSE option may also be used in conjunction with the other command
line options by specifying them in the following fashion:

     MAGIC /HERC /NOMOUSE

The above example  would force Black Magic into running on a Hercules board
and disable the mouse support.  Again any of the other command line options
could have been used in place of the '/HERC'.  
Macros

The Define Macro command is on <Shift> <F7> as the template
says rather than <Alt> <F7> as the manual instructs.

GrabIt

The activation keystroke for GrabIt cannot be modified once
GrabIt has been loaded into memory.  It can be changed though
provided that it is done on the first time the GrabIt is
loaded into memory.

Readers

The manual states that there are three separate reader
programs called READEGA.COM, READCGA.COM, and READHGA.COM
that are in the public domain and used to read the .MAG
hypertext files.  To eliminate the inconvenience of three
separate programs, these have been combined into one called
MAGREAD.COM.  MAGREAD.COM is used in exactly the same fashion
as the previous reader programs, only it adapts automatically
to your graphics system.

The Map

The mouse may now be used to manipulate the map.  To scroll
the map with the mouse, merely move the mouse to the edge of
the screen and it will scroll automatically.  The mouse may
also be used to goto any map location by simply clicking the
mouse cursor on the node of the map that you wish to go to.

Additional Commands

The following commands have been added to Black Magic:

     <Alt> H             Show/Hide Link Markers
     <Ctrl> O            Search Options

Versioning

One of the chief problems with hypertext is that of
versioning.  For example, how do you distinguish between the
latest and next to latest versions of a hypertext document if
the differences are in the link structure and can't be easily
seen ?  The answer is by doing conscious versioning with your
file saves.  For example lets say that you are working on a
hypertext document called TIME.MAG.  After making some
revisions in this, save it as TIME1.MAG.  After the next set
of revisions, save it as TIME2.MAG.  And so on.  This will
allow you to keep a coherent record of all the versions of
document.  NTERGAID cannot stress the importance of this.

Markers as History Pointers

Although markers were covered in depth in the manual, their
uses as they relate to hypertext was not.  Simply put a
marker provides a instantaneous way to jump to any particular
"node" in a document from any other node.  For example lets
say that you are writing a document, and realize that you
will want to link to your current location in the future.
Simply set a marker to that location and then from anywhere
in the document, simply activate that particular marker and
you will be able to go back to that location instantly.

UnMagic and UnUnMagic

The UnMagic feature is used to remove existing links from a
document.  When either a Note Link or a Replacement Link is
removed the text in those links is lost.  In contrast, when a
Reference Link  is UnMagic'ed it's contents may be recovered.


To recover the contents of a Reference Link that has been
UnMagic'ed and link to them it is necessary to first go into
point mode (i.e. creating a Reference Link) Now call up the
map and press the <Tab> key.  This will bring up a window
into the existing UnMagic'ed nodes.  If there is more than
one UnMagic'ed node, they can be seen by pressing the Up and
Down Arrows to scroll through them.  When the node that you
wish to UnUnMagic (i.e. join your current point mode link to)
appears on screen press <Enter>.  This will then take you to
that node.  Once inside the node, simple mark the area that
you wish to link to as a block and press <Esc>.  This will
now have reconnected the UnMagic'ed node to the document as a
whole.

File Links

With Black Magic, Reference Link to other files can be
created.  These links will simply transfer the reader to
another .MAG file when activated.  THis effectively removes
the memory limitation of RAM from hypertext documents.

To create a File Link, you must first create a point mode
reference link.  Then you must call up the Map.  With the map
on screen, press the <Tab> key twice.  The screen will then
clear and you are able to enter the filename of the file that
you wish to link to.  After the filename is entered and
<Enter> is pressed, Black Magic will then save the current
file and load the file it is to link to.  When this file
comes up on screen, go to the spot in the file that you wish
to link to and mark it as a block.  After the block is
marked, press <Esc> to complete the link.  This will take you
back to the point that you started to make the link from
automatically.

Printing

Black Magic's basic printing capabilities have been greatly
enhanced since the manual was written.  SInce then the
following capabilities have been added:

     Top Margin Control
     Lines Per Page
     Number Of Text Lines
     Double/Single Spacing
     Page Numbering
     Configurable Printer Drivers
     Header
     Footers

These functions are accessed through the Print options menu,
which is accessed by pressing <F10> P O.  This pulls a window
up on screen with a menu inside it.  This menu has a
highlighting bar inside it that is scrolled to the option
that you wish to change.  With the bar at the option that you
wish to change, enter a new value or response.  Numeric
answers are entered by pressing the new number values, and
Off/On values are entered by pressing the Right and Left
<ArrowKeys>.

To enter a header or footer, some further explanation is
needed.  First the Header or Footer must be set to "On" then
the header or footer respectively can be entered on the line
below where the header or footer is set to on.


READERS

When Black Magic was originally released, there were three separate reader
programs; one for  the CGA, one for the HGA, and one for the EGA.  These
programs were called READEGA.COM, READCGA.COM and so on.  To make things
easier for our users, we have combined the three reader programs into one. 
This new program functions on EGA, CGA, and HGA systems automatically, and
is now in a file named MAGREAD.ARC.  

Memory Overlays

The use of Memory Overlays has been removed from the control of the user. 
Memory Overlay use is now limited only to those users with sufficient
expanded memory  to load them.  When sufficient expanded memory is present
in a system, the memory overlays are loaded automatically into it; otherwise
they are not used at all.  Your computer may require the installation of a
driver to take advantage of Expanded Memory.  See your hardware manual for
further details.

Temporary Mouse Shutdown

Occasionally people that use mice on their system want to turn them off for
one reason or another.  In Black Magic, this is implemented using the <Alt>
M key combination.  To turn off your mouse, press: <Alt> M.  To turn it on
again press: <Alt> M a second time. 

Hide Markers 

A new command not well detailed in the original manual is that of the <Alt>
H or Hide command.  When <Alt> H is pressed, all of the link markers are
automatically hidden from view.  Press it again and they reappear.  The
purpose of this command is to allow  you to 'zoom' in on a specific spot in
a document and not be distracted by the other links that are available to be
followed.   Note: This can also be accomplished using the Configuration
screen.  

Place Holders

Another feature whose documentation could use amplification is that of
PlaceHolders. In a paper book, you can have multiple pieces of paper holding
your place.  This allows you a tremendous amount of flexibility in 'jumping'
from spot to spot. Black Magic has this sort of flexibility also. Black
Magic supports up to 9 (1 - 9) electronic placeholders.  A Placeholder in
Black Magic allows you to assign a key combination of the form <alt>
<NumberKey> to a place in a document, then by pressing the <Alt> <NumberKey>
combination again, you can instantly leap to that spot in the document.  The
placeholders work across hypertext links also so this gives even more added
flexibility.  

Placeholders are extremely useful when creating a large hypertext document. 
By assigning them to the major links in the document, places can be reached
almost instantly, this makes the various editing operations that one goes
through in document revision very easy to accomplish.  
To assign a placeholder to a spot in a document, position the cursor where
you wish the placeholder to be assigned to and press:

     <Alt> - 
     <NumberKey> <Enter>

Where '-' is the minus key on the keyboard and <Numberkey> is any of the
number keys from 1 to 9.  As you can see a dialog box comes up when the
<Alt> - combination is pressed, and then the <NumberKey> for the placeholder
is entered and <Enter> is pressed.

To jump to a placeholder that has previously been defined, press <Alt>
<Numberkey> (for the placeholder), and you will be there instantly.

To eliminate a placeholder that already exists, simply define a new
placeholder with the same number key. Placeholders will also be eliminated
when the text that they point to has been deleted. 

Justification

Justification has now been implemented in this version of Black Magic, but
its implementation is inconsistent with what is described in the manual. 
The default for justification in Black Magic is that of left justified text. 
This is what is always shown on screen in editing mode.  The other options
for justification are Right Justify (<Ctrl> <F8>) and Full Justification
(<Alt> <F8>).  To change a window's justification, press one of the below
control keys:

     Key                                Effect
     <Shift> <F8>                       Left Justified
     <Alt> <F8>                         Full Justified
     <Ctrl> <F8>                        Right Justified

When one of the above keys is pressed, a dialog box  will come up and query
you as to whether or not the window's justification should be changed.  By
answering 'Y',  the window will be justified as per the key combination that
you pressed.  

Note: The effects of a justification command are not apparent on screen, the
justification only appears in reader mode (<Alt> <F2>).

Margins

The Margin commands in Black Magic have now been enhanced and changed from
what is stated in the manual.  There are three ways to change the margins in
Black Magic:  <Alt> L, <Alt> R, and The Configuration Screen.  
<ALT> L and <Alt> R are both used to change the margins in the current
window.  The current window is simply the active area that you are typing a
document in.  The advantage to being able to set margins on an individual
window basis is that in a large hypertext document, you may wish to use
various different ways of formatting the document.  The ability to change
margins on a per window basis allows you this flexibility. 

To change the margins for an individual window, press either <Alt> L or
<Alt> R.  A dialog box will then come up for you to enter the new margin
into.  After entering the new values and pressing <Enter>, the current
window will be reformatted to the new margins.

The other method of changing margins is through the use of the Configuration
screen.  When the margins are adjusted on the configuration screen, they are
adjusted for all windows yet to be created.  What this means is that when
you change a margin setting on the Configuration screen, it does not
reformat the entire document to those new margins; instead any new reference
links that you make will have the new margins automatically.  

The Convert Program

For people who have upgraded from previous versions of Black Magic, a note
about the CONVERT utility is necessary.  

NOTE  - ONLY those who have used previous versions of Black Magic and have
files with graphics in them need worry about the CONVERT utility.  Black
Magic version 1.20's screen grabber (GRABIT) automatically saves files in
the new format. 

Black Magic version 1.20 features a compressed graphics file format for
faster file loading of graphics files and more importantly for smaller
files.  However despite the use of this new file format, all old graphics
files are compatible with Black Magic. 
If you wish to get the speed and size benefits of the 1.20 format on your

old files, it is necessary to use the convert utility on the graphics files. 
Convert is a small program run at the DOS level that simply converts a
graphics file from the old format to the new format.  Typically a savings of
35 - 50 % is witnessed in file size.  

Using Convert
     
     Purpose:  Change a file from the Version 1.0 graphics file format to
                    the 1.20 file format.
     Format :  CONVERT [d:] [path] filename
     Switches: None; wildcards may be used however.
     Remarks:  

When the CONVERT command is entered, it takes the specified filename and
automatically converts it from the 1.0 file format to the 1.20 file format. 
Both path statements and wildcards may be used in the command parameter. 
This allows you to convert for than one graphics file at once, and also
specify its location remotely (I.e. CONVERT.COM need not be in the same
directory as the files).

Examples of CONVERT Syntax:

     CONVERT PICTURE.MGR
     CONVERT C:\MAGIC\FILES\PICTURE.MGR
     CONVERT  \MAGIC\FILES\*.MGR




```
{% endraw %}

## SAMPLE.TXT

{% raw %}
```
                      Detachment In American Literature
     In American literature a sense of physical wandering is used as a
metaphor for the central detachment of the hero. This sense of physical
wandering is used in many works of American literature including: The
Autobiography Of Benjamin Franklin, The Travels of William Bartram,
Huckleberry Finn, and The Deerslayer. In The Deerslayer, by James Fenimore
Cooper, this detachment theme reaches a zenith in its expression with the
character of Natty Bumppo, the Deerslayer.
     In The Deerslayer by James Fenimore Cooper, there is a definate sense of
physical wandering. As far as the actual reality of physical wandering goes
though there is little. The story takes place on and around the Lake
Glimmerglass in Upper New York State. And any actual physical wandering is
done within these limited confines. The sense of wandering that is given is
instead presented through the many actions that the hero Natty undergoes.
Through these actions he is witnessed as advancing from encounter to
encounter very quickly, thus giving a sense of varied wandering.
     The detachment of the American hero can be seen in a multitude of
totally different works ranging from autobiographies to fictional works. This
detachment is most easily observed by the hero's "outsideness" from society.
Typically the hero will lack close friends or associates who would pierce
their detachment. The primary reason that they are detached is generally tied
to their own value system or moral code. The hero's own values will diverge
from the societies as a whole, and this dichotomy does not let the hero merge
with society as a whole. The reason for the divergence of the hero's value
system can be traced to a disatisfaction with the morality that typically
prevailed in their time. The hero would then rectify this by creating a moral
code of his own. As a result of these individualistic value systems, the hero
is detached from society, and can be thought of as being in essence a hero
looking in at a society he will not let himself join.
     An additional way to define the detachment of the American hero, would
be to say that he is "one who is posessed of a questing spirit." This spirit
is what drives the hero through his various wanderings. This correlates with
what is discussed above in that it does not require the hero to actually
wander physically. Instead it again follows the notion that wandering for
these heroes is essentially confined to their own activities, physical
activity is not needed for the sense of wandering to be generated.
     As a example of a detachment that resulted from a hero's particular
moral code, consider The Autobiography Of Benjamin Franklin. In this work,
Franklin is isolated from society due to a rigid moral code of his own
devising. This code was consciously constructed due to his own dissatisfaction
with the religious morality that abounded in his day. Franklin's code was
what he termed "rational morality." Simply put this was just that, a rational
approach to the ever-present problem of morality. By rational morality
Franklin meant a continually thinking ongoing process of constantly
evaluating your morality so that it is appropriate for the situation at the
present. This code however curtailed his actions, particularly where it led
to conforming with typical recreational activities. An extreme phase that
Franklin went through at one point, even included a "moral checklist" that he
would fill out on a daily basis noting both his good works and his bad. While
this was a extreme case, that only persisted for a limited time, it shows how
these codes can detach one from society. With this code he also eliminated
such activities as drinking, and fraternizing on a unintellectual level with
comrades, thus accentuating his detachment.
     Deerslayer has a unique heritage that for the most part causes the
formation of such a moral code. He was raised by two different races: white
man, and red man. His original upbringing was among Moravian Christian
missionaries. This gave him a basis in Christianity and all its flaws. His
second upbringing was among the Delaware Indians. This gave him a second
basis for his beliefs. Through this unique dual upbringing, Deerslayer's
moral code was formed.
     Due to the dual nature of his upbringing, this code and hence Deerslayer
himself, will always be, to coin a phrase, "neither fish nor fowl, forever
betwixt and between." Or more simply, Deerslayer is trapped between two
cultures, never truly belonging to any one. This is a primary result of his
code, and what caused his detachment. This unification of two typically
incompatible codes only serves to further detach Deerslayer from society.
     This view is supported by Theodore L. Gross. He says "The hero of
American literature is the exceptional man who seeks to realize an ideal."1
From this quote the following conclusions can be reached. The hero must posess
some definate realized morals of his own, which is the ideal. These morals
will diverge from society as a whole, thus forming the basis for the hero's
seekings. For if they were compatible with society, no seeking would be
necessary, by merely existing he would be fulfilling his morals. While the
first two conclusions alone would be enough to detach one from society, the
matter of the hero being "the exceptional man" will also serve to detach him
from society.
     The moral code of the Deerslayer is a varied code that tended to focus
on two different though related concepts: the "nature" of a being, and his
"gifts". "Nature" in this context is used to describe the actual core of what
makes up a being. "Gifts" are used to define the skills and abilities that
result from one's nature. A crucial element in the nature of a being and his
gifts, is that the same thing can be both right and wrong at the same time for
two different people. The reason for this is due to the two people's different
origins, and hence their natures.
     The code of the Deerslayer although not clearly defined, was obviously
what set him apart from his fellow men. The elements of this code were diverse
and pertained to all parts of his existence. The must crucial element in it
though was to act according to his nature and his gifts. This included such
things as acting honorably, discretion from killing, and not yielding to
temptation where to do so would be to transgress against his gifts.
     The classic example of the conflict that existed between the gifts and
natures of two different beings is the scalping issue in The Deerslayer. In
this case the issue is not is it right or wrong to scalp, but is it right for
both Indians and White men to scalp? According to Deerslayer it is right for
the Indians to scalp, scalping being part of their cultural matrix. Despite
this it is wrong for white man to scalp, it not being a part of his cultural
matrix. Or as Deerslayer himself might have put it, "Tis wrong, wrong I say,
a white man must not scalp, for it goes against both his gifts and his
natur'." There were no exceptions made in Deerslayer's code, this being seen
in that even though Deerslayer himself was raised among the Indians, it is
still not right for him to scalp. Indeed "My gifts are not scalpers' gifts,
but such as belong to my religion and color,"2 is the Deerslayer's response
when invited to go on a scalping expedition.
     The code of the Deerslayer continually serves to detach the Deerslayer
from the mainstream of humanity. An excellent example of this is given by his
refusal to marry Judith Hutter. Judith is a beautiful young woman, who was
raised in the wilderness. Over the course of the narrative she falls
passionately in love with Deerslayer and eventually proposes to him. His
answer to her though is "No--no--Judith, 'twould be onginerous in me; what
you've offered can never come to pass!"3 This response is rooted in the
details of Judith's past. Judith had apparently morally "soiled" herself
somewhere in her past, and this makes her unsuitable for the Deerslayer.
Through this action of rejection, Deerslayer is denying the one thing that
could end his detachment, a companion.
     The reason that the detachment theme reaches a zenith in the character
of Deerslayer, is tied to Cooper's presentation of Deerslayer. Throughout the
work Deerslayer is portrayed as almost a elemental force posing as a
character. This is done by Deerslayer's powers of moral certainty. In short
Deerslayer is almost godlike in the correctness of actions. Even the one
mistake that he makes, which is predictably that of vanity, is mitigated by
his instant realization of it and subsequent deep sorrow. This particular
godlike nature of his accentuates his detachment, bringing it to an unheard
of zenith in its expression.
     The detachment of the hero is a constant all pervading theme in American
literature. This is observed in many diverse works ranging from Huckleberry
Finn to The Deerslayer. This central theme is observed in both fiction and
non-fiction works, with authors that vary widely in their geographical
location, level of education, and place in society, or in essence the various
factors that greatly influence what a writer writes about. Despite this
diversity, the detachment theme is still observed bringing to mind the
question of why? In short the reason can be found in the origins of America.
Due to its rebellious origin and long history of being a melting pot for
various peoples, ideas, and religions, America was founded by people who were
essentially outsiders or detached from their own culture. And despite coming
to a new land, much of America remained composed of outsiders who were
detached from the mainstream. Given this, is it any wonder that American
writers write about a detached hero, when they themselves were the product of
a detached people and culture.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1122

     Volume in drive A has no label
     Directory of A:\

    BITSTRIP BAS       367  11-02-89   1:14p
    COLLAT   MGR      7808  11-02-89   1:14p
    CONVERT  COM     15031  11-02-89   1:14p
    FILE1122 TXT      1859   3-26-90  11:44p
    FIXTABS  BAS       367  11-02-89   1:14p
    GO       BAT        38   7-25-88   9:04a
    GO       TXT       463   7-25-88  12:45p
    GRABIT   COM     26903  11-02-89   1:14p
    HOWTO    MAG     45440  11-02-89   1:14p
    INTRO2   TXT      3904  11-02-89   1:14p
    MAGIC    MGR     33920  11-02-89   1:14p
    MANUAL   ARC    127992  11-02-89   1:14p
    README   DOC     18416  11-02-89   1:14p
    SAMPLE   TXT     10037  11-02-89   1:14p
           14 file(s)     292545 bytes
                           23552 bytes free
