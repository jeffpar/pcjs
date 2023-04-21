---
layout: page
title: "PC-SIG Diskette Library (Disk #1121)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1121/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1121"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BLACK MAGIC 2 OF 3 (ALSO 1120, 1122)"

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

## FILE1121.TXT

{% raw %}
```
Disk No: 1121
Disk Title: Black Magic 2 of 3 (1120 - 1122 also)
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

## MAGREAD.DOC

{% raw %}
```
Greetings,

The arc'ed group of files that you have here compromises the Reader
Utilities for Black Magic and some demo files (.MAG Extension). The actual
files in this are listed below:

  All the Files on this disk are in the Public Domain, and you are
  free to distribute them, provided no charge is made for distribution.

     MAGREAD .EXE           A utility to read Black Magic hypertext files.
                              Operates on systems with EGA, CGA, or HGA
                              graphics support.
     MAGREAD .OVR           Overlay File for low memory overhead

     HOWTO   .MAG           An example Hypertext file for general reading

For additional demo files the MAGDEMO.ARC file contains the following files.
If you received this on a disk it is likely that you already have MAGDEMO.ARC
and these files have been placed on your hard disk.

     TIME    .MAG           A hypertext timeline for the history of the
                              world.
     TIME-1  .MGR           Graphics files for TIME.MAG.
     TIME-2  .MGR            .
     AMER-1  .MGR            .
     AMER-2  .MGR            .
     AMER-3  .MGR            .
     ROME-1  .MGR            .

     USA     .MAG           A Graphic Based Almanac of the United States
     USA     .MGR            Graphic of USA
     NEVADA  .MGR            State of Nevada
     NE      .MGR            New England States
     CONN    .MGR            State of Connecticut
     ADVER   .MGR            Advertisment for Black Magic

     CHEM    .MAG           Elements of the Periodic Table organized with
                              hypertext.
     TABLE6  .MGR            Graphic of Periodic Table


                     Hypertext - A Brief Introduction

Hypertext is based on the concept of "Expanding Information".  With
hypertext, blocks of information (text or graphics) can be linked to other
blocks of information.  Once two blocks of information have been linked
together, they provide an instant "gateway" to the other.   This is the
expanding information nature of hypertext.  A single block of information
can lead to another and so on.  Information can literally expand at the
user's request.

     Black Magic

Black Magic is a product to create Hypertext documents similar to the above
description.  With Black Magic documents, information can be linked in
three different ways; with Note Links, Reference Links, and Replacement
Links.

     Links

A Note Link calls up a small window on screen that contains a
"note" to the user.  A Reference link is used to transport the reader to
Another place in the document.  Replacement Links are used to swap one
block of information for another.   Graphic Links are used to make a
graphic image a Link Originator.

Although Graphics can be any of the three types of Link, only one symbol
below is used to indicate this, a light blue circle with an X through the
center.

All Links are indicated through the use of colored symbols embedded in the
text.  The symbols surround the Link Originator (See Below).  Hypertext
Links are indicated through the following symbols:             

          Note Link                Yellow Diamonds
          Reference Link           Green Triangle              
          Replacement Link         Pink Square                 
          Graphic Link             Blue Circle with a "X" in the Center     
                              
     Terminology               
                               
Link Originator - The starting point to the link.  It is surrounded by the
               symbols to indicate that it is a hypertext link.             
Link End - The other side to a Link originator, where reader is taken       
               after a link is traversed.
Traverse - The act of traveling from a Link originator to its associated
               Link End.            
                               
     Reading A Document        
                               
A Black Magic document is read through the use of the reader program.

To Start the Reader, type

    MAGREAD filename

at the DOS Prompt, or Load a file after entering the Reader with

    <F10> F L
    or
    <Shift><F9>

Once the document is in the Reader program, it is read using the following
keys:

     Traverse Link            <F1>/Left Mouse Button pressed between the
                                  symbols
     Return from Link          <Esc>/Right Mouse Button  pressed anywhere
                                  in the Link
     Movement                  <ArrowKeys>, <PgUp> & <PgDn>/Mouse

When you are reading a document, and you come across a hypertext Link in
the text, move the cursor between the symbols and press <F1>.  This will
activate the Link, traversing you to the Link End.  To return from the
Link End press <Esc>.  This will bring you one link back from your current
position.

When you come across a hypertext link in a Graphic, move the cursor over
the Graphic Link (Circle with an "X") and press <F1> to traverse the Link.

And that's about all you need to know to read a hypertext document.

     Advanced Features

Among the advanced features that compromise the Black MAgic Reader utilities
are mapping of documents, ASCII cut of text, collapsing of documents, and
bookmarks.  The below keys indicate what controls what.

     Map Document             <Ctrl> F2
     Collapse Document        <Alt> <F1>
     ASCII Cut                <Shift> <Arrowkey> + <F9>
     Bookmarks                Query upon exit - <Alt> <F10>
     Hide Markers             <Alt> H
     Jump to Link             <Ctrl> <LeftArrow> or <RightArrow>

     Mapping

The mapping command is used to generate a "map" of the document.  This
depicts a document as a collection of linked nodes.  Once the map is
displayed, it can be used to travel to any point in the document by using
the arrow keys to move the location, and pressing <Enter> to go to that
spot.

     Collapse

The collapse command is used to "Fold" a document back into its original
state.  This puts the user back at the beginning of the document. To use it,
simply press <Alt> <F1>.  This will commence the folding operation.

     ASCII Cut

The ASCII cut capabilities in Black Magic are used give the reader of
hypertext documents the ability to export ASCII text from documents.  To
export ASCII text, it must be first marked as a block.  This is done using
<Shift> <ArrowKey> to highlight the desired text.  Then the save key, <F9>,
is pressed.  This will prompt the user for a filename for the block, and
then write the marked block to disk as an ASCII text file.

     Bookmarks

Bookmarks are a way to enter a hypertext file at exactly the same point that
you left it.  To place a bookmark in a file, it is necessary to press the
Exit key, <Alt> <F10>.  This will prompt the user as to whether or not a
bookmark is desired.  By answering "Y" or "N" to this question, a bookmark
will either be placed or not be placed onto disk, and then Black Magic
exited.  If a bookmark is specified ("Y") then when the file is next read,
the user will be automatically taken to that location.

     Hide Markers

The Link Markers that appear on screen may be distracting to some people.
Link Markers can be hidden off the configuration screen or directly by
pressing <Alt> H.

     Jump To Link

In MAGREAD the normal Jump to next Word has been replaced with a Jump to the
next link.  It will take the cursor to beginning of the next link.  To jump
forward press <Ctrl> <RightArrow>.  To jump backward press <Ctrl> <LeftArrow>.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1121

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      5120  11-02-89   1:14p
    FILE1121 TXT      1859   3-26-90  11:45p
    FLOPPY   BAT      2100  11-02-89   1:14p
    GO       BAT        38   7-25-88   9:04a
    GO       TXT       463   7-25-88  12:30p
    INSTALLM BAT      1167  11-02-89   1:14p
    MAGDEMO  ARC    166073  11-02-89   1:14p
    MAGREAD  ARC    156293  11-02-89   1:14p
    README            1304  11-02-89   1:14p
            9 file(s)     334417 bytes
                           22528 bytes free
