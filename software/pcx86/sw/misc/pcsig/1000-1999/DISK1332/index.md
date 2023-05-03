---
layout: page
title: "PC-SIG Diskette Library (Disk #1332)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1332/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1332"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HYPER HELPER"

    HYPERHELPER lets you make special "hypertext" pop-up windows or help
    screens from an ordinary ASCII file created by your wordprocessor.  Each
    window is linked together by highlighted words in the text with other
    windows, which users can pop up for even more detailed information.
    Windows may be positioned to any part of the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1332.TXT

{% raw %}
```
Disk No: 1332
Program Title:  HYPERHELPER version 1.5a
PC-SIG version:  1.1

HYPERHELPER lets you make special "hypertext" pop-up windows or help
screens from an ordinary ASCII file with simple embedded commands.  Each
window is linked together by highlighted words in the text with other
windows, which users can pop up for even more detailed information.
Windows may be positioned to any part of the screen.

Usage:  Viewing Help Text Screens.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00 for a memory resident version which
allows you to create systems of on-line help that may be viewed while
operating another program.

File Descriptions:

README        How to get started.
HYPERHLP HTX  HYPERHELPER text.
HC       EXE  HYPERHELPER compiler.
HH       EXE  HYPERHELPER browser.
SAMPLE   TXT  Sample ASCII file for compiling.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1332 HyperHelper  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy information about the program to your printer, type             ║
║                           MANUAL (press enter)                          ║
║                                                                         ║
║ To view the information about the program, type VIEW (press enter)      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SAMPLE.TXT

{% raw %}
```
#rem
#rem  This is a very simple .txt file that illustrates the
#rem  typical form of a hypertext file. You will need to compile
#rem  this file, using the HyperHelper compiler before you'll
#rem  be able to browse through this file. To compile this .txt
#rem  file use:
#rem
#rem                       C:> hc sample
#rem
#rem  Note that the .txt extension of the filename is not used.
#rem  The compiler will translate the .txt file into a special form
#rem  that is only readable by the HyperHelper browser. This compiled
#rem  file will be called sample.htx.
#rem
#rem  Once sample.txt is compiled, you can browse through the sample.htx
#rem  file using the HyperHelper browser by typing:
#rem
#rem                       C:> hh sample
#rem
#rem  This sample hypertext deck only contains a portion of the commands
#rem  that are available in HyperHelper. However, the commands used here
#rem  are probably the ones you'll use most often. In particular, note
#rem  the usage of:
#rem
#rem          #rem              -- a comment line.
#rem          #deck title       -- declares the title of the deck.
#rem          #size             -- defines the size of all cards;
#rem                               in this case, 40 columns by 9 rows.
#rem          #center text on   -- center all text in the cards that
#rem                               follow within the window size specified
#rem                               by the #size command.
#rem          #card             -- marks the beginning of a card. Note
#rem                               the first word after "#card" is the
#rem                               internal card name and any words
#rem                               after it are external card names which
#rem                               can be used to access the card from
#rem                               the command line (See card 2) or as
#rem                               a context sensitive link in the
#rem                               memory resident version of the
#rem                               HyperHelper browser.
#rem          #end              -- marks the end of a card (optional).
#rem          #center line      -- centers the next line to the text
#rem                               in the card.
#rem          !                 -- special character which is used
#rem                               to define the links between cards.
#rem
#rem  Now here are the cards in the sample.txt deck:
#rem  ------------------------------------------------------------------
#deck title Sample HyperHelper File
#size 40 9
#center text on
#card 1
This is the first card in the deck.
It is linked to the !2!second! and
!3!third! cards.
#end ------------------------------------------------------------------
#card 2 tryme
This is the second card. It is linked
to the !3!third! card.

Try accessing this card from the
DOS prompt by typing:

#center line
hh -ctryme sample
#end ------------------------------------------------------------------
#card 3
This is the third card which is linked
to card !1!one!.
#end ------------------------------------------------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1332

     Volume in drive A has no label
     Directory of A:\

    FILE1332 TXT      1019   9-08-89   9:18a
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       617   9-08-89   9:17a
    HC       EXE     48623   7-19-89   3:51p
    HH       EXE     33021   7-16-89   9:51p
    HYPERHLP HTX     22958   7-16-89  10:01p
    MANUAL   BAT       148   2-23-89   3:50p
    PAGE     COM       325   1-06-87   4:21p
    README            8562   8-21-89   1:22a
    SAMPLE   TXT      3185   1-09-89  12:05a
    VIEW     BAT        38   9-08-89   9:16a
           11 file(s)     118534 bytes
                           38912 bytes free
