---
layout: page
title: "PC-SIG Diskette Library (Disk #611)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0611/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0611"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BLACKBEARD"

    Programmers -- here's an editor that can perform just about every task
    you'll need to have done.  This is due to its windowing capacity (13!),
    work-horse text formatter, macro capabilites, and integral mouse
    driver. It works well for source code editing in structured languages
    such as Pascal, C, Fortran, etc.
    
    While its primary use is for source code editing, it also has some
    wordprocessing features (reformats, centers, cut and paste, etc.) to
    ease your housekeeping/documentation chores.
    File Descriptions:
    
    READ     ME   Look here first (this file).
    README   TOO  Version specific information.
    PRESS    TXT  Press release info (good overall feature summary).
    FORM     TXT  Order form (edit and mail, we thank you).
    BB       EXE  The main program.
    BB       HLP  On-line help file accessed by BB (not for humans).
    BB       CFG  Data configuration file.
    BB       LOG  Log of previous versions, including change info.
    BBADA    LNG  Language sensitive editing templates for Ada.
    BBC      EXE  Key binding compiler (creates BB.KEY).
    BBC      DOC  Key binding compiler documentation.
    BBKEYS   TXT  Source for default BB Key Bindings.
    BB       KEY  Compiled key bindings (used by BB).
    BBMAN    EXE  BLACKBEARD manual generator.
    BB       MAN  Defines the BLACKBEARD manual. Customizable.
    BBMAN    DOC  Describes how to use BBMAN.
    BBF      DOC  BLACKBEARD text formatter Manual.
    BBF      EXE  BLACKBEARD text formatter.
    BB       FNT  Standard TTY type font (used by BBF formatter).
    HPLASER  FNT  HP Laser Jet fonts (bold, underline, etc.).
    TP351    FNT  Toshiba P351.
    EMX80    FNT  Epson MX-80.
    M_BB     MSC  Mouse systems movement definition file..
    M_BB     COM  Mouse systems compiled menu file.
    M_BB     COM  Mouse systems compiled menu file.
    M_BB     COM  Mouse systems compiled menu file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES611.TXT

{% raw %}
```
Disk No  611
Program Title: BLACKBEARD version 7.37
PC-SIG version 7.37
 
    BLACKBEARD is a programmer's editor that performs just about every task
a programmer needs. This is probably due to its windowing capacity
(13!), excellent text formatter, macro capabilites, and integral mouse
driver, to name a few features. Also, it works well for source code
editing in structured languages such as Pascal, C, Fortran, etc.
 
    While its primary use is for source code editing, it also has some
wordprocessing features (reformats, centers, cut & paste, etc.) to ease up
on your housekeeping/documentation chores.
 
Usage: Programmer's Editor
 
System Requirements: 128K memory and one disk drive.
 
How to Start: Consult the various .DOC and .TXT files for instructions.
Each part of BB can be started from DOS.
 
Suggested Donation: $20.00 covers: a distinctive "BLACKBEARD"
collectable, a registration sticker, and a copy of the latest version of
BLACKBEARD.
 
File Descriptions:
 
READ     ME   Look here first (this file).
README   TOO  Version specific information.
PRESS    TXT  Press release info (good overall feature summary).
FORM     TXT  Order form (edit and mail, we thank you).
BB       EXE  The main program..
BB       HLP  On-line help file accessed by BB (not for humans).
BB       CFG  Data configuration file..
BB       LOG  Log of previous versions, including change info.
BBADA    LNG  Language Sensitive Editing templates for Ada.
BBC      EXE  Key Binding Compiler (creates BB.KEY).
BBC      DOC  Key Binding Compiler documentation.
BBKEYS   TXT  Source for default BB Key Bindings.
BB       KEY  Compiled key bindings (used by BB).
BBMAN    EXE  Blackbeard Manual Generator.
BB       MAN  Defines the Blackbeard manual. Customizable.
BBMAN    DOC  Describes how to use BBMAN.
BBF      DOC  Blackbeard Text Formatter Manual.
BBF      EXE  Blackbeard Text Formatter.
BB       FNT  Standard TTY type font (used by BBF formatter).
HPLASER  FNT  HP Laser Jet fonts (bold, underline, etc.).
TP351    FNT  Toshiba P351.
EMX80    FNT  Epson MX-80.
M_BB     MSC  Mouse systems movement definition file..
M_BB     COM  Mouse systems compiled menu file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## FORM.TXT

{% raw %}
```




				 O R D E R   F O R M
								  Gen-7.37


           TO:  BLACKBEARD                              Date____/____/____
		PO Box 638
		San Bernardino, CA 92402




         From:  Name _______________________________________________________

                Address ____________________________________________________

                City __________________________ State ________ Zip _________

                Area Code (______)  Phone __________________________________



		     REGISTRATION FEE------   EACH-------   EXTENDED-

		     "BLACKBEARD"   editor      $   20.00       _______
		      includes free gift and
		      latest version

		     Foreign Postage                 5.00       _______                                          --------

		     Site License (right to copy only)
		       10 Copies                $  100.00
		       100 Copies               $  500.00
		       Unlimited Copies         $  900.00

                                                Total          $_______

		     ALLOW SIX TO EIGHT WEEKS FOR SHIPPING (worst case)


                --------------------- User comments ----------------------

                I learned about BLACKBEARD from
                   [ ] - Friend                    [ ] - Software product
                   [ ] - Computer Club             [ ] - Computer Store
		   [ ] - Data Base Service         [ ] - PC-SIG
		   [ ] - Source                    [ ] - IBM/NET
		   [ ] - Site license              [ ] - Other

                Comments or suggestions: ___________________________________
                ____________________________________________________________
                ____________________________________________________________
                ____________________________________________________________

                problems:___________________________________________________
                ____________________________________________________________
                ____________________________________________________________
                ____________________________________________________________

```
{% endraw %}

## PRESS.TXT

{% raw %}
```

		     BLACKBEARD -- THE PROGRAMMER'S EDITOR

    User supported software, free to use and distribute, $20.00 donation

    DOS, IBM-PC/clone, monochrome or color video adapter( user colors).

    Performs ALL the normal editing operations you would expect including
    cut/paste, block operations, etc.

    Designed for professional programmers to edit programs and documentation

    User configurable; re-define key bindings, set various editing options

    "On the fly" keystroke macros, can be saved and recalled

    Automatic indenting for block structured languages like C and Pascal

    Versatile cut and paste facility including column cut and paste

    Context sensitive help

    Windows
      windows can be individualy sized.
      can have up to ten windows , each can support the same or different file
      single keystroke moves you from window to window

    Window to DOS that can be edited

    Designed to be easy to use without the assistance of a manual

    High performance
      intelligent screen paging. ( i.e. pressing page down 3 times displays the
      third page without displaying the intervening pages.)

    Ability to edit large files

    Pop-up menus activate functions ( or direct execution )
    Menu selections can be activated by cursor movement, mouse, or first letter
    All menu entries have on-line help ( ALT-H )

    Supports mice using standard mouse menu drivers ( cursor control )

    Simple word processing features like word wrap, paragraph reformat, etc.

    Includes a text formating program simular to RUNOFF or SCRIPT/VS

    Line drawing using the IBM extended graphics character.

    Can be installed as a resident program, allowing you to pop in
    and out with the editor remembering where you were.

    BB can "remember" last files edited, and cursor location
    ( context SAVE/RESTORE )

    Address for ordering Blackbeard is:         Blackbeard
						PO Box 638
						San Bernardino, CA, 92402
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0611

     Volume in drive A has no label
     Directory of A:\

    BB       CFG       318   1-24-88  11:31a
    BB       EXE    105624   1-23-88  11:20a
    BB       FNT       366   1-30-86  10:01a
    BB       HLP     37812   1-24-88  11:22a
    BB       KEY       778   1-24-88  11:31a
    BB       LOG     13904   1-23-88  11:21a
    BB       MAN      7844  11-30-87   5:22a
    BBADA    LNG      5849   1-15-87   7:09a
    BBC      DOC      3004   5-27-87   9:48a
    BBC      EXE     29766   1-24-88  11:19a
    BBF      DOC     12446   6-11-87  12:31p
    BBF      EXE     41310  11-07-87   9:08a
    BBKEYS   TXT      5290   1-24-88  11:24a
    BBMAN    DOC      3451  11-30-87   5:31a
    BBMAN    EXE     30722   1-22-88   1:58a
    EMX80    FNT       356  12-25-84  12:03p
    FILES611 TXT      2327   3-03-88   9:17a
    FORM     TXT      2171   1-24-88  11:31a
    GO       BAT        38   2-22-88   4:04p
    GO       TXT       617   2-22-88   4:03p
    HPLASER  FNT       525   6-20-86   9:23a
    M_BB     COM      1531  10-31-85  12:00p
    M_BB     MSC       921  10-31-85  12:00p
    PRESS    TXT      2034  10-07-87   7:45p
    READ     ME       6758  11-11-87   5:13p
    README   TOO      1227  11-11-87   5:15p
    TP351    FNT       366  12-16-85  12:31p
           27 file(s)     317355 bytes
                           29696 bytes free
