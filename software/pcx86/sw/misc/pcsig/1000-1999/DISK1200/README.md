---
layout: page
title: "PC-SIG Diskette Library (Disk #1200)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1200/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1200"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANYWORD"

    ANYWORD is a text indexing and retrieval program consisting of two
    parts: Indexer which produces an index, and Finder which locates words
    in text.  Like a book index, your text is untouched.  All of the
    indexing information is put in a separate file, and your text files are
    not modified or rearranged in any way.  This means you can experiment
    with ANYWORD as much as you want without the worry of making an
    inadvertent change to your text files.
    
    You supply information about your files through the profile file, used
    by both Indexer and Finder.  Some ANYWORD features:
    
    ~ Searching by any word or combination of words
    
    ~ Display of selected text
    
    ~ Extraction of selected text into new files
    
    ~ Searching with simple Boolean logic, AND - OR - NOT
    
    ~ Searching with ``wild cards'', e.g., comput? for reference to
    computers, computing and so on
    
    ~ Exit to DOS and return without disturbing selected text or search
    results
    
    ~ Review of previous search results within a session
    
    ~ View of all the words that have been indexed
    
    ~ Automatic file location via the DOS PATH operation
    
    ANYWORD is useful for locating simple information or combinations of
    text.  It also extracts chunks of text into new files and allows
    browsing through a collection of files from any point within any file.
    You can page backward, forward, across files, to the beginning, to the
    end, etc.
    File Descriptions:
    
    F-HELP        ANYWORD Instruction manual.
    INDEXER  EXE  Executable INDEXER program.
    CONVCRLF EXE  Executable CONVCRLF program.
    FINDER   EXE  Executable FINDER program.
    SFIND    EXE  Executable SFIND program.
    MAKEID   EXE  Executable MAKEID program.
    L*            Sample movie database files (3 files).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1200.TXT

{% raw %}
```
Disk No: 1200
Program Title:  ANYWORD version 1.06
PC-SIG version 1

ANYWORD is a text indexing and retrieval program consisting of two
parts: INDEXER which produces an index, and FINDER which locates words
in text.  Like a book index, your text is untouched.  All of the
indexing information is put in a separate file, and your text files are
not modified or rearranged in any way.  This means that you can
experiment with ANYWORD as much as you want without the worry of making
an inadvertent change to your text files.

You supply information about your files through the profile file, used
by both INDEXER and FINDER.  Some ANYWORD features:

        ~       searching by any word or combination of words

        ~       display of selected text

        ~       extraction of selected text into new files

        ~       searching with simple Boolean logic, AND - OR - NOT

        ~       searching with "wild cards", e.g., comput? for references
                to computers, computing and so on.

        ~       exit to DOS and return without disturbing selected text
                or search results

        ~       review of previous search results within a session

        ~       view of all of the words that have been indexed

        ~       automatic file location via the DOS PATH operation.

ANYWORD is useful for locating simple information or combinations of
text.  It will also extract chunks of text into new files and allow
browsing through a collection of files from any point within any file.
You can page backward, forward, across files, to the beginning, to the
end, etc.

Usage:  Text Indexing and Finding System.

Special Requirements:  Two floppy disk drives or a hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

F-HELP        ANYWORD Instruction manual.
INDEXER  EXE  Executable INDEXER program.
CONVCRLF EXE  Executable CONVCRLF program.
FINDER   EXE  Executable FINDER program.
SFIND    EXE  Executable SFIND program.
MAKEID   EXE  Executable MAKEID program.
L?            Sample movie database files (3 files).
???????? MOV  Files used with movie database files (8 files).
PROFILE  SMP  Sample ASCII text file.
PROFILE  HLP  Sample help file.
???????? AD   Advertisement files from Packet Press (6 files).
README   1ST  Introduction document.
SFIND    DOC  Documentation file for SFIND program.
SHOWID   BAT  File to show identification number of program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1200 ANYWORD  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start INDEXER, type INDEXER (press enter)                            ║
║                                                                         ║
║ To start CONVCRLF, type CONVCRLF (press enter)                          ║
║                                                                         ║
║ To start FINDER, type FINDER (press enter)                              ║
║                                                                         ║
║ To start SFIND, type SFIND (press enter)                                ║
║                                                                         ║
║ To start MAKEID, type MAKEID (press enter)                              ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SFIND.DOC

{% raw %}
```
Instructions for SFIND			Copyright 1987 Eric Balkan

    If you type in the name of the program, SFIND, without any parameters,
it'll tell you what you need to use it.  Basically, though, here is what
you do:

1 - Decide what directories/disks you want to search and enter them
using the DOS SET command, e.g.:
	  C> set DIRS=C:\dir1;c:\dir2;.;d:\
    Each directory name is separated by a semi-colon (;).  A period means
to search the current directory, whatever that happens to be.  The word
DIRS is used only by SFIND; otherwise the syntax is mostly similar to that
of the DOS PATH command.  (The SET command allows an easy way for users to
tell programs about things that don't change very often.) If you want to
get rid of directories that have been previously specified, just key in:
	     set DIRS=
    With no directories specified, SFIND will only search one directory --
the one implied or specified with the filename.  Examples below.

2 - Having set the directories to be searched, you can now execute SFIND:
	  C> sfind -u "hello" filepattern outputfilename
    The "-u" option means to ignore case (i.e., treat everything as uppercase).
    The characters between the "" is the string to search for.
    The filepattern is the file or path/file template to search.
    The outputfilename is where the found text records will go.

    Another option is "-m" which means suppress the messages that will come
out to the screen.

    The following are examples:

sfind "555-1212" april.* out.apr
sfind -u "tomorrow is another day." g?.???  script.out
sfind -um "grapefruits, apples" \dir1\file??.* trash

    If the specified output file already exists, SFIND will ask if you want
to re-use it.  If no output file name is specified, the output records will
go to the screen.

    One other thing worth noting:  multiple spaces are treated as 1 space
for comparision purposes.  That is, "tomorrow   is" compares the same as
"tomorrow is".

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1200

     Volume in drive A has no label
     Directory of A:\

    F-HELP           78297   5-05-88   3:57p
    INDEXER  EXE     44544   5-05-88  11:40a
    CONVCRLF EXE     10752  10-03-87   8:27p
    FINDER   EXE     77312   5-05-88  11:15a
    SFIND    EXE     15360   9-26-87  11:14a
    MAKEID   EXE     18805   2-14-88   3:57a
    LF                6255   1-28-88   3:14a
    LZ                6834   1-28-88   3:40a
    LN                5356   1-28-88   3:41a
    PROFILE  MOV      5093   5-03-88   4:07a
    F-IK     MOV     15239   1-28-88   7:26a
    F-IX     MOV     10396   1-28-88   7:26a
    F-FENCE1 MOV      2599   1-28-88   7:26a
    F-DLMLOC MOV       756   1-28-88   7:15a
    F-STATS  MOV      5197   1-28-88   7:26a
    F-FILES  MOV        12   1-28-88   7:26a
    F-TAB    MOV      4096   1-28-88   7:26a
    PROFILE  SMP      4820   5-03-88   4:07a
    PROFILE  HLP      4603   5-03-88   4:07a
    TR       AD       3094   1-28-88   5:20a
    LABELS   AD       1562   1-28-88   5:23a
    MOVIES   AD       2600   2-14-88   5:04a
    DOSCARD  AD       2195   1-13-88   5:46a
    PRLIST   AD       1674   3-13-88  10:09p
    386      AD       1348   4-05-88   2:51a
    README   1ST      7511   5-06-88   5:50a
    SFIND    DOC      1991   9-26-87  11:17a
    SHOWID   BAT        11   2-13-88   5:58p
    FILE1200 TXT      2623  10-26-88   6:02p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT      1156  10-26-88   8:47a
    MANUAL   BAT       169  10-26-88   8:48a
           32 file(s)     342298 bytes
                            2048 bytes free
