---
layout: page
title: "PC-SIG Diskette Library (Disk #1404)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1404/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1404"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXT/FILE HANDLING UTILITY"

    You've just finished the Great American Novel only to discover
    you've mispelled the name of a key historical figure.  You can ask for
    your old job back or you can use HUNTMOD!  Coming to your rescue,
    HUNTMOD searches out every mispelled name and replaces it with the
    correct one!
    
    Or have you forgotten in which file(s) you wrote about a particular
    subject, or placed a valuable snippet of data?  Let a companion program,
    HUNSTR, sniff them out.  This program looks for phrases or names
    you indicate (up to 10 at a time), and tirelessly searches through all
    your files.  When a match turns up, it records the names of specific
    file(s), and where in them it discovered which items of interest.
    
    Other utilities in this set are small improvements to the DOS commands
    DEL and TYPE.  QDEL deletes filenames listed on the command line from
    the specified directory or drive, but stops and queries first, ``Do you
    really want to do this?'' This gives you one last chance to avoid
    disaster.  FVIEW lets you read text files the same way as TYPE, but also
    lets you view a screen at a time, automatically, without having to play
    rapid fire with the CONTROL-S command.
    File Descriptions:
    
    HUNTSTR  EXE  Program to search files for text strings.
    HUNTMOD  EXE  Program to change phrases in files.
    FVIEW    EXE  Program to display files.
    QDEL     EXE  Program to delete files.
    MANUAL   USR  User Guide.
    HUNTSTR  DOC  Program description.
    HUNTMOD  DOC  Program description.
    FVIEW    DOC  Program description.
    QDEL     DOC  Program description.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1404.TXT

{% raw %}
```
Disk No: 1404
Program Title:  TEXT/FILE HANDLING UTILITIES
PC-SIG version 1

You've just finished the Great American Novel only to discover that
you've mispelled the name of a key historical figure.  You can ask for
your old job back or you can use HUNTMOD!  Coming to your rescue,
HUNTMOD will search out every mispelled name and replace it with the
correct one!

Or have you forgotten in which file(s) you wrote about a particular
subject, or placed a valuable snippet of data?  Let a companion program,
called HUNSTR, sniff them out.  This program looks for phrases or names
you indicate (up to ten at a time), and tirelessly searches through all
your files.  When a match turns up, it records the names of specific
file(s), and where in them it discovered which items of interest.

Other utilities in this set are small improvements to the DOS commands
DEL and TYPE.  QDEL deletes filenames listed on the command line from
the specified directory or drive but stops and queries first, "Do you
really want to do this?"---to give you one last chance to avoid
disaster.  FVIEW lets you read text files in the same manner as TYPE,
but also allows you view a screen at a time, automatically, without
having to play rapid fire with the CONTROL S command.

Synopsis: A set of four text/file utilities with word search and file
edit capabilities.

Usage:  Text and File Utilities/Search/Find & Replace.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

HUNTSTR  EXE  Program to search files for text strings.
HUNTMOD  EXE  Program to change phrases in files.
FVIEW    EXE  Program to display files.
QDEL     EXE  Program to delete files.
MANUAL   USR  User Guide.
HUNTSTR  DOC  Program description.
HUNTMOD  DOC  Program description.
FVIEW    DOC  Program description.
QDEL     DOC  Program description.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FVIEW.DOC

{% raw %}
```
FVIEW - view a file

    This program will display the text found in any file on the
screen in the same manner as the MS-DOS command TYPE.  Similar
to the MS-DOS command TYPE, this program requires one command
line argument which is the name of the file to be displayed on
the screen.  Another argument may be supplied which will cause
the screen to pause (temporarily stop) when the screen is full.
The file name may be any standard MS-DOS file name.

```
{% endraw %}

## HUNTMOD.DOC

{% raw %}
```
HUNTMOD - Search files for text and modify the text.

    The text modify program, HUNTMOD, will search the list of
files specified on the command line for the first phrase
specified on the command line.  Each time the first phrase is
encountered in a file specified on the command line, it will be
changed to the second phrase specified on the command line.  The
file name of each file searched will be displayed.  If there are
matches to the phrase in the file, the line number and the line
containing the match will be displayed.  Also the new line with
the first phrase replaced by the second phrase will be
displayed.  The user may also select a mode which will request
confirmation before each change.  If there is at least one match
in the file, the number of lines containing a match will also be
displayed.  The orginial file will be renamed using the original
file name plus a .BAK extension.


```
{% endraw %}

## HUNTSTR.DOC

{% raw %}
```
HUNTSTR - Search files for text strings

    The text search program, HUNTSTR, will search the list of
files specified on the command line or in the /i argument of the
command line for the phrases which are also specified on the
comand line.  There may be up to 10 phrases specified on the
command line.  The search can be conducted using AND or OR
conditions. 

    The file name of each file searched will be displayed.  If
there are matches to the phrase(s) in the file, the line number
and the line containing the match will be displayed along with
any lines required by the window argument,  which is also
specified on the command line.  If there is at least one match
in the file, the number of lines containing the match will also
be displayed.  The screen display may be temporarily stopped
(paused) either when the screen is full or between windows.


```
{% endraw %}

## QDEL.DOC

{% raw %}
```
QDEL - Delete files with confirmation

    This program deletes the file names listed on the command
line from the specified directory and drive.  If no drive is
specified, the default drive is assumed.  If no path  is
entered, the current directory is assumed.  The names of the
files are standard MS-DOS file names including any MS-DOS global
characters.  If the file name is "*.*", the user will be queried
with "ARE YOU SURE (Y/N)?".  If the response is a "Y" (either
upper or lower case) followed by a carriage return, then all
files will be deleted from the specified directory and drive.
If the response is anything else (including a carriage return
only), no files will be deleted.  The following example deletes
the file smith.let
    The user can be queried for confirmation on each file
deletion by placing the argument /q on the command line before
the list of file names.  The user response must be a "Y" (either
upper or lower case) followed by a carriage return, for the file
to be deleted, otherwise the file won't be deleted.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1404

     Volume in drive A has no label
     Directory of A:\

    FILE1404 TXT      2025   5-31-89   9:46a
    FVIEW    DOC       462   9-07-88   5:34p
    FVIEW    EXE     21401   6-01-88   9:00p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT      1002   5-31-89  10:30a
    HUNTMOD  DOC       922   9-07-88   5:33p
    HUNTMOD  EXE     13825   4-24-88   9:36a
    HUNTSTR  DOC       879   9-07-88   5:31p
    HUNTSTR  EXE     28073   6-01-88   9:06p
    MANUAL   USR     67742   4-27-88   8:10p
    QDEL     DOC      1066   9-07-88   5:09p
    QDEL     EXE      9005   4-27-88   9:16p
           12 file(s)     146440 bytes
                           11264 bytes free
