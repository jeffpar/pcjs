---
layout: page
title: "PC-SIG Diskette Library (Disk #263)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0263/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0263"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORTH 1 OF 2 (ALSO 264)"

    A Forth Language system from Henry Laxon and Mike Perry.  A compiler,
    L&P FORTH is portable and convenient, and especially good for novice
    programmers.  This is a well-structured introduction to the Forth
    language and includes an introductory text file for beginners.
    Documentation is brief and recommended reading is ``Starting FORTH'', by
    Leo Brodie.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #263, version v1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  EXTEND86.BLK         CRC = CD 2E

--> FILE:  CPU8086 .BLK         CRC = DC 69

--> FILE:  UTILITY .BLK         CRC = AA 75

--> FILE:  HUFFMAN .BLK         CRC = B8 14

--> FILE:  CLOCK   .BLK         CRC = CE E9

--> FILE:  F83-FIXS.TXT         CRC = C9 64

--> FILE:  F83     .COM         CRC = 30 B7

--> FILE:  README  .PC          CRC = 19 DA

--> FILE:  KERNEL  .COM         CRC = A5 5A

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 51 7A

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## F83-FIXS.TXT

{% raw %}
```
This file describes most of the changes to F83 between versions
1.0 and 2.0.

	It is always difficult to follow a moving target. In the
six months since we released version 1.0 we have received so many
good suggestions that the temptation to use some of them was
impossible to resist. To all of you who contributed, thank you
again. We will try to avoid any further changes until 1985 at the
earliest. If there are bugs, we will report them separately.
Updating the various versions is a lot of work even without offering
any support, and we are tired. It is time to move on to applications,
and do something useful for a change.


	The changes were as follows:

General:

* Removed the superfluous NOOP from all self-defining words.
* Changed all instances of C; to END-CODE ( by request).
* Partitioned META into META.BLK ( the meta-compiler ) and
  KERNEL.BLK ( the source for the kernel ).


META:
* Fixed .SYMBOLS


KERNEL:

* Removed null from the system. Sealed search orders no longer
  require the old magic null word.
* Fixed PARSE and PARSE-WORD. They used to increment >IN past
  the end of source text.
* Changed CP/M to DOS.
* Moved kernel DOS words into DOS vocabulary.
* Added USER VARIABLE IN-FILE. All file operations read from IN-FILE
  and write to FILE. This allowed removing the confusing FILES
  vocabulary. User interface is unchanged: FROM <file> makes <file>
  the IN-FILE. OPEN <file> makes both the same. LOAD uses IN-FILE,
  then resets it to FILE. This is probably appropriate.
* FBLOCK and FBUFFER take an fcb address and a block number.
* SWITCH exchanges FILE and IN-FILE.
* ?UPPERCASE conditionally forces a string to upper case. Used by
  DEFINED and FORGET.
* EMIT primitives renamed: (CONSOLE) is console only, (EMIT) is
  for console and maybe also printer, depending on PRINTING.
* Fixed CONTROL.
* Made default (PRINT) not use LISTST, because it hangs on
  many systems. Optionally use LISTST if available for faster spooling.
* Renamed FORTH control character table from CC1 to CC-FORTH.
* Changed DO to ?DO in -TRAILING.
* Deleted HEADER from CREATE, made CREATE do it all.
* Changed ,VIEW to make file 0 if BLK is 0.
* Added \S for comment to end of screen.
* Added better error handling for disk reads and writes.
* Accessing a BLOCK which is Out of Range no longer leaves the
  buffer assigned to the non-existent block.
* Changed DISCARD to mark discarded buffer as empty.
* .FILE and FILE? added to display file names.


EXTEND:

* Split ONLY into the ONLY operator and the ROOT vocabulary.
* Removed OPEN-FILE from FILE: and added it to VIEW.
* Added VIEWS which installs files into VIEW-FILES table.
* Moved SET-DRIVE into EXTEND, changed it to use the BIOS
  to determine whether a drive is legal, and renamed it SELECT.
* DRIVE? prints the current drive.
* Added A: and B: which select drive A or B.
* Added error control into MAKE, CLOSE, READ, and WRITE.


CPU:
* Added three words for decompiling DOES> words.
* Renamed FIX to UNBUG.


UTILITY:
     FORTH:

* Added :: for immediate compilation.
* VIEW is now wordier. It prints the file name and screen number of 
  the source code for a word, then OPENs the file and LISTs the code.
* Made SEARCH much faster when CASE is significant ( false),
  by SCANning for the first character. Turn CAPS OFF for speed.
* Added .SCR which prints current screen number and file name.
It is used by LIST and EDITOR .ALL.
* Changed N and B to include DISK-ERROR OFF.

     EDITOR:

*  Changed  ?TEXT  to  use PARSE instead  of  WORD.  This  allows 
  commands like "F ^" to use the contents of the buffers.
* Modified  auto display updating to work  correctly  with  both 
  smart and dumb terminals.
* Added FIX which VIEWs and EDITs.
* Renamed JUST to J. I use it a LOT.
* Made ED smarter: it does not change context if already editing.
* ID field defaults to blanks, not nulls.
* GET-ID waits for an extra character to allow you to read  what 
  you typed before hitting return.

     Showing:

* SHOW now uses (SEMIT) which outputs to either the console
  or the printer, but not both, depending on PRINTING, which is
  reset by (ABORT").
* SHOW works for small files: PR replaces out-of-range blocks with
  LOGO.
* FOOTING is vectored.
* PAGE defaults to linefeeds. Many people did not have form-feed
  capability.

     Multitasker:

* Renamed BACKGROUND to BACKGROUND: because it compiles until
  a semi-colon.


NEW FILES:

* HUFFMAN.BLK contains the source for the Huffman encoding used
  on the files as shipped.
* CLOCK.BLK shows how to use a clock/calendar to automatically set
  the editor date stamp when you boot. The code is for a CompuPro
  System Support 1, but should give you some hints.
* HUNT.BLK has source for HUNT.
  HUNT <sub>  lists all words whose name contains the given substring.


Now what have I forgotten? I'm sure you will let me know.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0263

     Volume in drive A has no label
     Directory of A:\

    EXTEND86 BLK     30720   9-12-80  11:52a
    CPU8086  BLK     53248   9-12-80  12:16p
    UTILITY  BLK    112640   9-12-80   1:11p
    HUFFMAN  BLK     49152   9-12-80   1:32p
    CLOCK    BLK     12288   9-12-80   1:37p
    F83-FIXS TXT      5120   9-12-80   1:41p
    F83      COM     26368  12-28-84  11:12a
    README   PC      16180   1-07-85   2:54p
    KERNEL   COM     11904  12-28-84  11:09a
    CRC      TXT      1052   1-07-85   4:36p
    CRCK4    COM      1536  10-21-82   7:54p
           11 file(s)     320208 bytes
                               0 bytes free
