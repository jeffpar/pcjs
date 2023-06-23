---
layout: page
title: "PC-SIG Diskette Library (Disk #3241)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3241/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3241"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## 4F-REGST.TXT

{% raw %}
```

                           4FILES REGISTRATION FORM
                           ========================

                    Larry Edwards // Hand-Crafted Software
                Box 6001 // Sitka, Ak 99835 USA // (907)-747-8996

            Your signature here signifies acceptance of the agreement
                   contained near the end of the documentation.


PLEASE PRINT CLEARLY!                              4FILES VERSION #____
====================

Your name: ______________________________________  Position:_________________

Company: ________________________________________  Phone: (W) ________________

Street or Box: ____________________________________       (H) ________________

City/State/Zip: ___________________________________  Country: ________________

I got 4FILES from (which BBS/vendor/etc):_________________, ____________ Forum

E-Mail UIDs:  CIS ___________.   Genie ___________.   BIX ____________.

CHECK ONE:                       INTERNET addr: ______________________.
==========

__  Our (my) operation cannot possibly use more than one copy of 4FILES simult-
    aneously, and I am registering one copy via the enclosed $20 payment.

__  Our (my) operation hereby applies for a site license to install 4FILES for
    use on up to _____ computers, workstations or terminals.  Payment according
    to the schedule in the file 4F-SITE.TXT is enclosed (call if file is lost).

--  Send ___ printed manuals for $3.50 each.

Signature: ________________________________________      Date: _______________

Send upgrade by US Mail on: __ 5.25" disk  __ 3.5" disk.

CHECK ONE EACH> Using:  __ MSDOS  __ DRDOS   Version ____
                With:   __ 4DOS   __ NDOS    Version ____      __ Neither
                CPU: __ 8086  __ 8088  __80286  __80386  __80486

==================================================================
COMMENTS / PROBLEMS / & CHANGES or ADDITIONS YOU DESIRE IN 4FILES:
==================================================================

```
{% endraw %}

## 4F-SITE.TXT

{% raw %}
```
                             SITE LICENSES FOR 4FILES
                             ========================

                      Larry Edwards // Hand-Crafted Software
                Box 6001 // Sitka, Ak 99835 USA // (907)-747-8996

   A site license is required if installation or distribution of 4FILES within
your company, institution, organization, government agency, or etc. can result
in more than one simultaneous use of 4FILES.  To apply for a Site License, 
please submit a registration form (see the file 4F_REGIS.TER) along with the 
appropriate fee.

   License fees are based on the number of installations of the program, with
a discount on the $20 registration fee per installation as follows:

   Total # of
   Terminals    Discount
   ---------    --------
     2 -   5    10%
     6 -  10    15%
    11 -  25    20%
    26 -  50    25%
    51 -  75    30%
    76 - 100    35%
   101 - 200    40%
   200 - 500    45%
         500+   50%

  A SAMPLE SITE LICENSE
  =====================

  This is a perpetual license for installation of 4FILES V-??.? for use on not
  more than _______ computers, terminals or workstations, by <company name>
  in pursuit of its business, and is non-transferable.  It is also valid for
  the same installed base for the V-3.0 upgrade, when available.  If at any
  time the installed base becomes larger than the above number, the licensee
  shall immediately apply for an amended license, including the appropriate
  incremental payment from the above table.

  Licensee shall assure that all use, handling and distribution of 4FILES
  complies with the agreement contained in the program registration, and shall
  make clear to all personnel who use 4FILES that it is a commercial,
  copyrighted program which is NOT in the public domain, and that separate
  registration or licensing is required for any use outside the scope of this
  license.

  The appropriate license fee of $______ has been paid.

 << Appropriate signatures will follow >>
```
{% endraw %}

## 4F-VEND.TXT

{% raw %}
```

       Information for BBS SYSOPS & Disk Vendors on 4FILES
       ===================================================

    To see the agreement for use and distribution, please seach 4F.DOC for the
string "AGREEMENT --".

------------------------------------------------------------------------------
 NOTE TO OTHER USERS: Please retain this file for inclusion with any copy of
                      4FILES which you might distribute to someone else.
------------------------------------------------------------------------------

CONTENTS OF THIS FILE:
----------------------
  1) Naming convention.
  2) Keywords.
  3) Category for placement.
  4) Descriptions (various lengths) for use on BBSs and in vendor catalogs.
  5) Kudos
  6) Brief registration information and benefits of registration.
  7) Author information.


NAMING CONVENTIONS:
-------------------   Archives of 4FILES should be named 4FILES??.xxx or
4FILE???.xxx (where xxx is the archive extension), showing all characters in
the version number.  The exception is CIS for which names will always be
4FILES.ZIP.  The program is usually accompanied by a 4FILES.INF info file.

KEYWORDS:
---------
DESCRIPTION EDITOR FILE MANAGER 4DOS NDOS 4FILES

CATEGORY:
---------  4FILES is hard to classify because it fits several categories well.  
It could be listed as a file-management utility, 4DOS-support utility or shell 
(I prefer one of the first two).  Listing 4FILES in more than one of the above 
classifications or directories would be much appreciated, and is credible since 
the file is small.

SHORT DESCRIPTIONS:
-------------------
    (40):  File manager, annotator & more! For 4DOS.

    (55):  File manager, annotator & utility front-end.  For 4DOS.


45 COLUMN BBS DESCRIPTIONS (See also FILE_ID.DIZ, enclosed.)
------------------------------------------------------------

  (1x45):  4DOS File Manager/Annotator/Utility Front-End

  (2x45):  Multi-purpose file manager, utility front-end
           and file note editor for 4DOS & NDOS.  Nice.

  (4x45):  MULTI-PURPOSE FILE MANAGEMENT TOOL, also
           serves as a utility front-end and a nice
           editor for 4DOS & NDOS file notes.  Does
           single or marked files.  Good interface.

  (6x45):  A MULTI-PURPOSE FILE MANAGER and front-end
           for your favorite utilities.  Includes a nice
           editor for 4DOS/NDOS file notes, which stay
           with their files during copy, move, etc.
           Works on single or marked files.  Compatible
           with DOS, Windows, OS/2, & DV.   ASP author.

  (8x45):  A MULTI-PURPOSE FILE & DISK MANAGER for 4DOS.
           Does single & marked files. Also edits 4DOS &
           NDOS "file notes", putting *full* power into
           this feature.  Point-&-shoot loading of files
           into your favorite utilities via configurable
           utility ports.  Fast disk navigation!  Works
           with DOS, Windows, OS/2 & DV.  Easy interface
           makes this a true power tool.  ASP author.

 (10x45):  A MULTI-PURPOSE FILE & DISK MANAGER FOR 4DOS.
           Does single & marked files. Also edits 4DOS &
           NDOS "file notes", putting _full_ power into
           this feature.  Point-&-shoot loading of files
           into your favorite utilities via configurable
           utility ports.  Fast disk navigation! On-the-
           fly directory list sorting & program config-
           uration.  Use with DOS, Windows, OS/2, or DV.
           A clean, easy interface makes this a true
           power tool.  Shareware, $20.  ASP author.

LONG DESCRIPTION:
-----------------  4FILES is a multi-purpose file management tool which
smoothly integrates 4DOS & NDOS "file notes" and up to seven of your favorite
utilities into the work at hand.  File management operations may be done on
single files or marked groups of files.  File notes provide ready information
to aid in the use or management of files.  4FILES displays them along with the
file name and full file statistics in a sortable directory listing.  Special
attention has been given to providing the most efficient rapid-fire, point-and-
shoot browsing of files possible, as an aid to composing notes about one or a
succession of files.  The built-in note editor is well adapted to its task.

    Special attention has also been given to efficient navigation of drives and
directories, and the method developed may well be the best you have tried.
Besides innovative features to accomplish this, change-directory utilities such
as LCD and ACD are used to their best advantage if available on your system.

    The utility ports and program options may be configured on-the-fly.  Seven
ports are provided, of which some are specialized for file browsing,
several archive functions, and text editing.  Other ports are suitable for a
word processor or any utility or application.  It addition to this utility
support, any program in the directory listing or any data file with a
"executable extension" may be executed directly.  A DOS command line is also
available.


KUDOS:
======

 "Previously I avoided file descriptions w/ 4DOS, a really useful feature.
  Now I love them.  The integration of LIST, FV, EDIT, etc. is excellent.
  Easy to (configure).  Nice utility!"  (San Pedro, Ca)

 "One of my handiest utilities.  I use it every day."  (USAF programmer)

 "I find it (4FILES) an extremely useful program.  I've set my word
  processor to shell out to 4FILES by punching the F12 key.  This allows me
  to quickly refer back to something I want to check out in a previous
  chapter or to identify the chapter I need to review with a minimum of
  hassle.  Congratulations, and thanks."  (Professional writer, Moscow, Id)

 "From the moment I began to read your very complete and accurate document-
  ation, I was certain this software package was something I would find
  useful and worth supporting.  Pleasingly, I was not disappointed.  Your
  effort is a shining example of that which is worthy.  Please accept not
  only my registration, but my thanks and congratulations for having
  produced such a fine addition to one of my favorite shareware programs
  (4DOS)."  (Marysville, Oh)


REGISTRATION INFO:
------------------  4FILES is shareware.  Registration is $20, and licensing
can be arranged for multiple installations.  Registered owners are entitled to:
1) a personalized copy of the latest version, 2) a free upgrade to Version 3.0, 
3) free technical support, & 4) early notification of V-3.0 and subsequent 
releases.  See 4F.DOC for particulars.  Tech Support is via phone, E-Maiil 
(CIS, BIX, & GEnie), or letter.

AUTHOR INFORMATION:
-------------------  The author (Larry Edwards) is an ASP member and may be 
contacted at: Box 6001  Sitka, Ak  99835, 907-747-8996, CIS:72037,3607, BIX 
as L.T.EDWARDS, and GEnie as L.EDWARDS10.
```
{% endraw %}

## 4F.DOC

{% raw %}
```
                              -------------------
                         =====   4 - F I L E S   =====
                              -------------------

                        DOCUMENTATION  --  Version 2U.0
                                August 10, 1992

        -----------------------------------------------------------------
        Shareware by Larry Edwards, Copyright 1990-92 All Rights Reserved
                 REGISTRATION $20   Box 6001   Sitka, Ak   99835

                   TECH SUPPORT: <1> Call author at 907-747-8996; or
                   <2> Call MAS-BBS 718-444-4555 (8,N,1), select the
                   Customer Support Areas, then the 4FILES area; or
                   <3> by CompuServe E-mail to 72037,3607 or via INTER-
                   NET E-mail to 72037.3607@compuserve.com.
        _______
   ____|__     |
--|       |    |-------------------   |   ASP wants to make sure the shareware
  |   ____|__  |  Association of      |   principle works for you; its Ombuds-
  |  |       |_|  Shareware           |   man can help resolve any dispute with
  |__|   o   |    Professionals       |   an ASP member on a shareware related
-----|   |   |---------------------   |   problem.  Details on page 2.
(R)  |___|___|       MEMBER


==============================================================================
 CONTENTS OF MANUAL ...
=======================    File & Note Modes .... 7   OS/2 & DESQview...... 17

 Overview of 4FILES .. 1   Using FILE MODE ...... 8   Safety Features ..... 18

 About "File Notes"... 2   Sorting File Lists ... 9   Hot Tips on 4FILES... 19

 Shareware Notice .... 2   Utility Ports .... 10-11   Origin/Evolution .... 21

 QUICK START ......... 3   Using NOTE MODE ..... 11   Registration Benefits 22

 Special Keys ........ 4   Configuring 4FILES .. 13   Agreement for Use ... 22

 Drive:Dir Navigation  6   EMS & XMS Swaps .. 13,16   Packing List ........ 23

 Seeking a File ...... 7   Video & Screens ..... 16   Detail Installation . 24

 Mouse Use  6-7,10,14-16   MS-Windows .......... 16   Registration Form ... 25

==============================================================================

OVERVIEW OF 4FILES
==================  4FILES is a multi-purpose file management tool, and
includes a full-featured editor for 4DOS & NDOS "file notes".  The interface is
clean and convenient, and incorporates what may well be the easiest drive and
directory navigation method you have tried.

4FILES also serves as a well coordinated "front-end" for several of your
favorite utilities, providing rapid-fire, point-and-shoot loading of files

                                                                            2.

into the utilities.  There is a "utility port" for a file browser, two for
editors or word processsors, three specialized for archive programs or
viewers, and an extra port.  4FILES has a built-in configuration routine, so
changes to these utility ports and other program settings can easily be made
on-the-fly. Changes may be used "session-only" or be saved to a configuration
file.

The screen shows the current directory with subdirectories at the top followed
by files, each taking a full line.  The list may be sorted any way you like,
either on-the-fly or via command line switches.  Except for sorts by file
name (the default), the key field for the current sort is highlighted on
screen.  Any video mode over 80x25 is supported (see Quick Start on page 3).

File or subdirectory names are displayed on the left half of the screen, one
per line, with full statistics.  The right half is space for descriptive file
notes.  If you are using 4DOS or NDOS (superior COMMAND.COM substitutes), a
file note will remain associated with its file during copy, move and rename
operations.  You may also play with file notes under COMMAND.COM, but the
notes will be lost during the above file operations.  The new 4DOS-4.0
description "extensions" are detected if present, but no programs are using
them yet.

Any program file or batch file may be executed directly from the listing or be
put in an editable DOS command line.  Data files with "executable extensions"
may be loaded directly into their applications.  A real DOS command line (
secondary shell) is available too.

International keyboards and character code pages are fully supported.

Version 3.0 is in the works and will have several new features and
enhancements to several existing ones.


ABOUT FILE NOTES & 4DOS
=======================  Ability to annotate your files will revolutionize your
computer use, and this feature alone is ample reason to replace COMMAND.COM
with 4DOS.  But the powers of 4DOS do not end there, and you are really (!)
wasting time and energy if you aren't using it.  It makes the MSDOS command
line EASY and adds many features to MSDOS which should have been included all
along, but weren' t, even in MSDOS 5.0.  I can't recommend 4DOS highly enough!
It's shareware by JP Software, Box 1470, E. Arlington, Ma 02174, 617-646-3975.


SHAREWARE NOTICE
================  4FILES is a commercial, copyrighted program, and is
distributed as shareware.  Shareware is a marketing method which allows you to
eval- uate a fully functional program before deciding whether you want it.  You
may not continue use of 4FILES beyond a period of bona-fide evaluation of not
over 30-days unless the copy you are using has been properly registered for
your use, and your use complies with the agreement near the end of this manual.

If you decide not to register, a frank critique or trouble report would be
sincerely appreciated, via a collect phone call, E-mail, or a letter.

                                                                             3.

Your distribution of 4FILES to others is highly encouraged, provided that the
distribution complies with the agreement at the end of this manual. Permission
for commercial distribution may be withdrawn at any time for cause.

Larry Edwards is a member of the Association of Shareware Professionals (ASP).
ASP wants to make sure the shareware principle works for you.  If you are
unable to resolve a shareware-related dispute or problem with a member, ASP's
Ombudsman may be able to help resolve it.  ASP does not however provide
technical support for members' products.  Contact: ASP Ombudsman, 545 Grover
Rd, Muskegon, MI 49442 or (via CompuServe Mail) ASP Ombudsman 70007,3536.


QUICK START
===========   Capacity: 456 records per directory.    Requires: 64K and DOS 2+.

              SYNTAX:   4F [d:][\][subdir] [/+ /8] [/D] [/E /S /T /N]

Items in brackets are optional.  The current directory is the default..

** Installation: Either copy all files into a subdirectory which is in your
PATH or write a 4DOS alias to call 4FILES, preferably specifying its full
pathspec to speed loading.  Storing or accessing 4FILES in this way will allow
you to start it by typing just its name  or the alias name, regardless of which
drive or directory you  are logged onto at any time.  If  these instructions
are "Greek" to you, please read the more detailed instructions on page 24.

** Quitting: <@ESC> quits to the current directory, and  <ESC> or <^ESC> quit
to the original (startup) directory . Under Windows, only <ESC> gives a total
quit; the other keys have their  Windows  meanings.  (In key symbols, "@" means
the "Alt" key and "^" means the "Ctrl" key.)

** Configure 4FILES by typing <@F10>.  Screen colors & blinking, "utility
ports" and many program options are on this menu.  Your utilities must be
configured here for many 4FILES features to work.  For these, a pathspec is
unneeded if the utility is in the PATH, but gives best performance. Always give
the  extension of a utility's name.

** Replace the Old .CFG File:  The config- uration file format was changed in
version 2S.0.  If your .CFG file is from an earlier version, you must delete
it and configure the new version from scratch.

** Switches: /D /E /S /T and /N are command line switches for list sorting
(see P.9).   /D may be used alone or with any of the other four.  /8 is used to
force an 80x25 display, in case you want to switch automatically or in case of
an incompatibility with the video mode detection.  /+ must be used with HGC,
MDA or CGA for over 80x25.

** Operation: Use the menu line for guidance, and go with the flow!  <TAB>
toggles between File & Note Modes.  Some keys work in both modes, but are shown
only on the menu of one due to line length limits.  Navigate with the <G+> key
(Grey-plus), <G-> and <G*> (on 83-key keyboards use <SCL-LK> instead).  If
4FILES is properly configured, <F1> shows help and <^F1> shows this manual.
For a tour of a few features see #6 on page 24.  The tour assumes your bootup
directory is the current directory, and that it has a \UTIL subdirectory.

                                                                            4.

** 4FILES may be fully evaluated under COMMAND.COM, but for proper handling of
file notes during file copy, move, rename and delete, COMSPEC must be setup to
use 4DOS or NDOS as the secondary (if not also the primary) command
interpreter, instead of COMMAND.COM.

** For use under MS-Windows, see "Running Under Windows" below for mouse and
4FILES.PIF setup.  Again, for regular use (i.e. except perhaps during
evaluation) be sure COMSPEC is setup for 4DOS or NDOS.


=========================
DOCUMENTATION OF FEATURES
=========================

SPECIAL CONTROLS
================  Most keys act as expected, and the others (below) are laid
out logically.  A special keyboard handler allows nice, normally unavailable
key assignments.  Symbols:  "^" means the CTRL key and "@" means the ALT key.
"**" means 4FILES must be configured properly for the feature to work.

    <F1> -- Help. **                 <F2> -- Edit current file. **
    <F3> -- File Finder. **          <F4> -- Unzip current file, if archive. **
    <F5> -- Mark record.             <F6> -- Unmark record.
    <F9> -- Copy selected text.      <F0> -- Paste text (insert).

    <^F1> - View this manual **      <^F2> - Second editor or a utility. **
    <^F5> - Mark ALL file records.   <^F6> - Unmark ALL records.
    <^F9> - Cut selected text.

    <@F9> - Copy the whole note.     <@F10> - reconfigure 4FILES.

-------------------------------------------------------------------------------
NOTE:  <G*> is the "grey" star key on the keypad.  <G**> is a double hit of
this key.  Adjacent keys are called <G+> and <G->.  On laptops, use <Fn*>, etc.
-------------------------------------------------------------------------------
    <G*>   -- Change drives.  The change is instantaneous when a drive letter
              is typed.  ON 83-KEY KEYBOARDS, THE <SCL-LCK> KEY SERVES THIS
              FUNCTION; you can force the alternate key choice via the
              configuration menu

    <G**>  -- Change drive:directory via a text entry field.  LCD, ACD & NCD
              compatible.  On 83-key keyboards, use <SCL-LCK>.

    <G***> -- Change back to the previous directory.  Use <SCL-LCK> if 83 keys.

    <G->   -- Change to the parent directory (from any record).

    <G+>   -- IF RECORD IS:  1) a directory, change to it.
                             2) a file, browse it. **
                             3) an archive, list its constituent files. **

    <^G+>  -- Calls an archive-only utility. **

    <CR>   -- ENTER may be configured to duplicate <G+> in File Mode only.

                                                                             5.
    <@-F10>  -- Shows the configuration menu.

    <TAB>    -- Toggles between FILE MODE and NOTE MODE.
    <NUM-LK> -- Toggles between showing file attributes and file time.

    <@-Char> -- Fast scroll to next record starting with the character.

    <SCL-LK> or <Keypad-5> changes direction (BIOS dependent.)


 NOTE MODE COMMANDS:
 ------------------
    ^H          -- Destructive backspace (see also File Mode).
    ^Y          -- DELETE NOTE.

    <Ctrl-PgUp> -- Go to TOP of directory listing.
    <Ctrl-PgDn> --  "  " END  "     "        "

    <Ctrl-Up>   -- Go to TOP of page.
    <Ctrl_Dn>   --  "  " END  "   "

    <Sh-Up>     -- Scroll display to show record ABOVE TOP of page.
    <Sh-Dn>     --    "      "     "   "    "    BELOW END  "   "
    <Ctrl-Lf>   -- Shift cursor ONE WORD LEFT.
    <Ctrl-Rt>   --   "      "   ONE WORD RIGHT.

    <Sh-Rt>     -- 1) Bump any text to the right of the cursor to right margin.
                   2) If no text to the right, enter Flush-Right (FLR) mode.
    <Sh-Lf>     -- Exit FLR mode (or use <ESC>, <CR> or any bar movement keys).
    <Sh-BS>     -- Destructive "Fore-space", available in FLR mode only.

    <ESC>       -- Like <^ESC>. Can be disabled with a configuration switch.

    <^ESC> or <@ESC> -- Quit to original or current directory, respectively.
                        (If you use NEWKEY, see page 10.)


 FILE MODE COMMANDS:
 ------------------
    <^E> or
    <^E><^E> -- Presents a DOS command line with or without the current
                 file name.  (See also "configuration".)  Appending "++" to a
                 command freezes the screen temporarily after execution.

    <^H>      -- Shell to 4DOS & show the selectable command history window.
    <^X>      -- Instantly executes records which are .COM, .EXE, .BAT or .BTM
                 files; also acts on data files with "executable extensions".

    F5 /  F6  -- Mark / Unmark A record.
   ^F5 / ^F6  -- Mark / Unmark ALL records.

    A / ^A  -- Change attributes of current file or all marked files.
    C       -- Copy file.
    D / ^D  -- Delete current file or all marked files.
    M       -- Move file.
    R       -- Rename a file or directory.  (LCD 4.0B+ and ACD compatible.)

                                                                             6.
    N       -- Create a "New" Directory.  LCD/ACD/NCD compatible.
    K       -- "Kill" (remove) highlighted directory. LCD/ACD/NCD compatible.
    R       -- Rename a directory or file.  (LCD 4.0B+ and ACD compatible)
    S       -- Resort the listed files with a new sort type or order.

    -----------------------------------------------------------------------
    The Copy, Move, Rename functions are VERY rudimentary, and will be top
    notch in V-3.0.  Internal PKZip and Unzip support will also be included.
    ------------------------------------------------------------------------


DRIVE & DIRECTORY NAVIGATION
============================  4FILES has perhaps the most natural key mapping
yet devised for drive and directory navigation.  It employs a group of three
keys operated by your right hand in coordination with the cursor pad (arrow and
page keys), leaving your left hand free for other tasks.  A keyboard with
lefthand function keys will accentuate the efficiency of this layout, and
Northgate or Focus keyboard with this layout would be an excellent investment.
On laptop computers, the lack of a separate cursor pad and left function keys
sacrifices efficiency, but Genovation makes a handy separate keypad (714-833-
3355).  The functions of <G+> and <G-> are also available via mouse  buttons.
These are the keyboard (use <Fn> keys if you have a laptop) and mouse  layouts:

   KEYS HIT:  |  83 Keys Action           84+ Keys Action        NOTE
   =========  |  ====================     ===================    =============
   <Grey*>    |  (Use <SCL-LK> key) ----> Fast drive change      (Input field)
              |
   <Grey**>   |  (Use <SCL-LK> key) ----> Enter new drive:dir    (Input field)
              |
   <Grey***>  |  (Use <SCL-LK> key) ----> CD to previous dr:dir  (Instant CD)
              |
   <Grey->    |  CD to parent dir         CD to parent dir       (Instant)
              |
   <Grey+>    |  CD to highlighted dir    CD to highlighted dir  (Instant)
              |  or browse if a file.     or browse if a file.
   --------------------------------------------------------------------------
     Laptops:  Substitute <Fn*>, <Fn+> and <Fn-> key combinations above.


   MOUSE BUTTONS: |  L--    M--    R--     L-R     LM-      -MR      LMR
   ===============|========================================================
   3 Button Mouse | <G+>   <G->   <ESC>   <TAB>   <PgUp>   <PgDn>   <F9>
                  |
   2 Button Mouse | <G+>          <ESC>   <G->

4FILES automatically detects your mouse type and keyboard BIOS type, but it
can only assume the layout of your keyboard (based on  your BIOS).  If the
assumption is incorrect, you may force its reversal via the configuration menu'
s "Other Keyboard" switch.  What you want is three keys adjacent to one
another.  On the 83-key keyboard they should be in a vertical sequence of
<SCRL-LK>, <G-> and <G+>.  On other desktop keyboards they should form a dog-
leg at the upper right corner of the keypad, using <G*> instead of <SCRL-LK>.
On laptops the <Fn*> key combination should be used, and if it doesn't work,
reconfigure as above.  Proper setup is essential to maximum efficiency.

                                                                             7.

After hitting <G*> or <Scrl-Lck> you will be prompted to enter a drive letter.
A valid entry will cause an immediate change to the drive.  A double hit on
<G*>, rather than a drive letter, presents an input field for specifying the
new directory and/or drive.  This <G**> command is compatible with LCD, ACD and
NCD (directory changing utilities) if 4FILES has been configured for it,
allowing you to type only part of the path name.  4FILES will update the
database when directories are created, deleted or renamed ( added "REN" to the
config if your LCD/ACD version supports this feature).  <G***> makes an
immediate change to the previous directory.

Hitting <G+> while the cursor is on a subdirectory record will cause 4FILES to
change to that subdirectory.  If this is the ".." record, the change will be
to the parent of the current directory.  <G-> will change to the parent
directory from ANY record.

When changing to a parent directory, the cursor will quick-scroll from the top
of the listing down to the record of the subdirectory you just left.  This is
helpful when inspecting a succession of child directories, since you always
return to your last place in the parent, rather than its first record.  The
scrolling action gives a quick impression of your current location in the list.

During a drive change, 4FILES goes to the extra trouble of avoiding the
annoyance of the DOS message "Insert Disk for Drive A" overwriting the screen
on systems with only one floppy.  You will be seamlessly given an opportunity
to swap disks without messing up the screen.

If faster cursor bar movement is desired, 4FILES handles rates much faster
than "normal".  Higher settings can be made via software or hardware built
into some keyboards (i.e. Northgate Ultra).


SEEKING A FILE ON THE LIST
==========================  Scrolling to files in a directory listing is easy:
just hit an <@-char> key, where "char" is the alpha-numeric first character of
the file or directory name.  You will be delivered to the next occurrence of a
record starting with that character.  <SCL-LK> toggles the search direction at
any time, including in mid-search.  On 83-key keyboards, <Keypad-5> performs
this function instead since <SCL-LK> is used for directory navigation.


MOUSE USE
=========  See the button map on the previous page.  The mouse handler is setup
so that no action is taken until all depressed buttons have been released.  To
experiment, for a ' page-down' hold down the right button -- no rush -- and
hit the middle button at your leisure.  Then lift one finger -- again no rush
-- and when the second finger is lifted the action will be taken.

To use the mouse when running under MS-Windows, the mouse driver must be
loaded before loading Windows, otherwise the mouse will not function.


FILE MODE & NOTE MODE
=====================  4FILES starts in FILE MODE, in which the file management
functions are enabled.  <TAB> toggles between File Mode and Note Mode.  You

                                                                             8.

will notice that the menu changes with the mode, and you will find that while
every command on each menu will work in its mode, some will also work in the
other mode.  There is not a enough space on the single menu line to list all
commands for each mode, but they are logical and you'll catch on.


USING FILE MODE
===============  The file mode commands are mnemonic keys:

    <C>opy, <M>ove, <R>ename, <D>elete, and <A>ttributes for single files.

    <^D>elete  and <^A>ttributes for operation on marked files.

    <^C>opy, <^M>ove and <^R>ename marked file operations were not quite
    ready at the time of this release, but will be available on the registered
    version before the end of August.

    <N>ew-directory, <K>ill-directory,  <R>ename-directory.

    <^E>xecute-from-prompt, e<^X>ecute-now, and <^H>istory list execution.

Copy, move and rename rely directly on 4DOS resources, and keep the file notes
with their files.  As implemented here, these commands are very rudimentary
stop-gaps which shell to DOS.  They will serve until the truly exceptional
implementations planned for Version 3.0 are ready.  Ability to copy and move
marked files will also be included in V-3.0, as well as both zipping and
unzipping for single files or marked multiple files.

^E presents a DOS command line loaded with the name of the current record, and
the line editor is forced into insert mode.  The cursor controls are identical
to those for the note editor.  ^E^E provides a blank command line in which you 
may enter any command; just like the DOS command line. ^Y deletes the command.

The command typed-in is executed, and when it finishes the return to 4FILES is
automatic.  In many situations this is desirable, but in some cases (the DOS
SET command is an example) the information you want to see flashes off the
screen.  To prevent this there are two ways to cause 4FILES to delay clearing
the screen until a key is hit.  One is to set the configuration switch named "
Pause after DOS Command" to YES (NO is the factory default).  The other is to
append ++ to the ^E command line.  ++ is a 4FILES flag, and is not actually
part of the command.  Either <G+> or <Shift=> may be used to generate +.  If
the switch is set to YES, a "- -" appendage will force an immediate return.

If you wish to work directly from the DOS prompt for a while, type ^E^E <CR>.
Executing the blank command line will load a secondary DOS shell, and you will
remain in the shell until you type EXIT to return to 4FILES (see P.20).  Back
in 4FILES, you will be returned to the same drive:directory you were in before.

<N>ew-directory and <K>ill-directory are the commands to make and remove 
directories.  <R>ename works both for subdirectories and files.  If you use 
LCD, ACD or NCD, the 4FILES N, K & R commands update the directory database.

<F5> & <F6> mark and unmark records for such block operations.  <^F5> & <^F6>
mark and unmark all records.  A count of marked files and marked bytes is

                                                                             9.

shown on the second line in the "indicator" color.  Marking may be done in
both File & Note Modes.  Marked file operations automatically pass over
subdirectories, and marking of DESCRIPT.ION is blocked. Note however that UPON
EXIT OR DURING THE NEXT DIRECTORY CHANGE, if no file notes remain,
DESCRIPT.ION will be deleted for you automatically.  An empty DESCRIPT.ION may
also be deleted via the "D" single file command.

<NUM-LOCK>toggles between displaying file attributes and file creation time,
and is functional in both File and Note Mode.

A & D are the mnemonic commands to change file attributes and delete files.  ^A
and ^D act on all marked files.  D requires a double-tap of the "Y" key for
confirmation.  If plain A is hit, an editable image of the current file's
actual attributes is displayed for modification.  If ^A is hit to operate on
marked files, a template rather than an actual image is shown.  In the
template, each attribute letter is initially preceded by a "?" wildcard,
indicating that the existing attribute will be unchanged.  Repeatedly typing
an attribute character (R, A, S or H) will toggle the action on that attribute
through a cycle of, for example, ?R, +R, -R, and back to ?R.  + and - indicate
the attribute will be forced "ON" or "OFF" for each file.

When the <G+> browse key is hit on an .EXE file, 4FILES checks to see if it is
a self-extracting archive in the PKWare, LHARC or LHA format.  If so, FV (or
your substituted utility) will be called to list the contents of the file.


SORTING THE LIST OF FILES
=========================  While the subdirectory portion of the list is always
alphabetically sorted, the files-portion may be sorted in various ways either
on-the-fly or via command line switches.  The default sort is alphabetical, in
ascending order.  To change the sort on-the-fly, type S while in DOS mode.
After making a selection, which may involve making settings for both type of
sort and for ascending or descending order, a second tap on the last key hit
will exit the sort menu and cause the sort to be made.  <CR> will exit also.

    The command line sort switches are described below.  /D may be used by
itself or in combination with other switches, and affects only the primary
sort. The following sorts also apply to on-the-fly setting::

        SWITCH          PRIMARY SORT          SECONDARY SORT
        -------        -----------------     ------------------
        DEFAULT         FILENAME               .EXT
          /E            .EXT                   FILENAME
          /S            File Size              FILENAME.EXT
          /T            File Time/Date         FILENAME.EXT
          /N            File Note              FILENAME.EXT
          /D            (Descending Order)     (Descending Order)

Except when sorting by filename, the primary sort field is highlighted with a
color that is set on the configuration menu.  International code pages are used
for sorting as appropriate.  For more about sorts, see the section on "tips".

                                                                            10.
=============
UTILITY PORTS    FILE BROWSING, EDITING, UNZIPPING , DUPLICATE FINDING, etc.
=============    -----------------------------------------------------------

BROWSING FILES
==============  The <G+> key is overloaded in a sensible way.  Not only will it
allow you to " see" the contents of a subdirectory, if the highlighted record
is a file, it will call up your favorite file browser or archive viewer with
the file loaded.  In File Mode, <CR> may be configured to duplicate the
function of <G+>, although this is not recommended unless you really need it.

4FILES comes configured with the internal 4DOS LIST command as the browser,
but any browser can be used.  Shelling to DOS to run this internal command is
slow, but by using browse utilities like TV.COM, PC-Magaizine's free BROWSE.COM
or Vern Buerg's LIST.COM, your file will be displayed in a literal eye-blink.

If the record is a .ZIP, .ARC, .DWC, .LBR, .LZH, .PAK or .ZOO archive,  an
archive inspector such as ZR.COM or Buerg's FV.COM will be called.  FV shows a
table of what's in any of the above archive types, but ZR actually browses
files inside the archive (only for the .ZIP files, unfortunately).  Both can
be easily used since an alternate utility port for archives is mapped to <^G+>.
Packed .EXE files in the PK, LHARC and SFX formats are handled by FV.

While in these and other utilities, the mouse works "as initialized" by
4FILES, and provides scrolling and a quick return via the right button.  The
combination of <left-button>=<G+> and <right-button>=<ESC>, combined with
movement of the 4FILES cursor bar by the mouse, allows one handed "rapid-fire"
inspection of multiple files.  (Note that if you call 4FILES with SHROOM or
call a utility with SWAPDOS, the mouse will be automatically disabled,
temporarily.  This is necessary since the mouse handler gets overwritten.)

In the midst of your rapid firing though, you will sometimes inadvert-ently
exit from 4FILES (even without the mouse).  To avoid this, you can reconfigure
to disable quitting via the <ESC> key.  The <^ESC> and <@ESC>keys  still
function, and allow you to quit to the original or current directory
respectively.  Improper <ESC> use will then display a menu of the proper
keys.  If you use NEWKEY, to enable 4FILES to use the <^ESC> key, run
NEWKEYSP.EXE, pick "I" on the menu, and make an entry for <^ESC>.


EDITING FILES
=============  <F2> calls your editor, loading it with the filename of the
current record.  As supplied, editor access to .COM .EXE .BIN .OBJ .SYS .LIB
.WKS & .DB extensions and the seven above archive extensions is denied.  The
denied extensions may be reconfigured.  Denials protect the integrity of non-
text files.  A second editor or word processor (or any utility, such as a .GIF
viewer) may be mapped to <^F2>.  The denied extensions apply to this key as
well.  If a disk is write-protected, <F2> will give an error message.  If you
have no editor, pick up  PC-Mag's free TED.COM.

Note that an "R" switch is provided in the configuration listing for each
utility port.  It forces reloading the current directory upon return from the
utility, and should be "ON" for any editor or other utility which can change
file size or directory contents.  "W" (wait before redisplaying) should be off,
since you will want to return immediately to 4FILES from the editor.

                                                                            11.

To create a NEW file, hit <F2> while on a NON-FILE RECORD.  This will not work
if the "R" switch is off.  You will be prompted for names for the new files,
but may hit <CR> on the blank field blank if you wish.  Some editors may not be
able to utilize more than one filename from the command line.


FINDING DUPLICATE FILES
=======================  <F3> is initially set up to call a file finder utility
called WHERE.EXE, loaded with the current file name.  Bruce Gavin's utility
FIND.EXE is a good one to use here.  A utility of any type may be mapped to
this key.


UNZIPPING FILES
===============  <F4> is set up to call 4UNZIP, a shareware utility which in
turn calls PKUNZIP.  A list of the files archived in a .ZIP file is shown, and
files can deacrchived singly or in marked groups.  Note that the current 4UNZIP
version causes a crash (immediately or a soon after use,  with or without
4FILES) if certain keyboard buffer-expanders are used.  Test your setup!


====================
UTILITY PORTS IN USE
====================

One potential difficulty which 4FILES avoids is that some utilities and
editors you might like to call allow you to delete/rename files or change
drives/directories.  When the utility is exited, 4FILES by default explicitly
changes back to its last drive/directory and rereads the directory list.  The
bar is returned to the last record it was on, or if deleted, to the nearest
record number possible.  This process takes a little longer than assuming that
the directory structure is unchanged, and also destroys the "+/-"
note-modified indicators and any file marks, but is SAFE.

Alternatively, you may tell 4FILES not to reload the directory by setting the
"R" switch for the port.  Use this switch ONLY if you know the subject utility
is not capable of the operations mentioned in the previous paragraph. Note
that the switch for the browser is also operative when displaying Help or this
manual with <F1> or <^F1>, since the browser is used to display these files.


===============
USING NOTE MODE
===============

ANNOTATING FILES
================  4FILES supports file notes (or "descriptions" in 4DOS
parlance) up to 40-characters long, and each directory with annotated files
will contain a hidden file named DESCRIPT.ION, containing the note data for all
files in the directory.

Beginning with release 4.01, 4DOS can handle file notes up to 120-characters
long, but 4FILES will not be able to use the extra capacity until its next
major release.  For now though, 4FILES does detect notes of over 40-characters

                                                                            12.

and will warn you of the situation.  To limit creation of notes by 4DOS or
other utilities to 40 characters, in your 4DOS.INI file be sure the directive
DescriptionMax=040 is set, which is the default setting.

File copying, moving, or renaming will always work properly however, since
4FILES relies directly on 4DOS resources for these functions.  The only caveat
is, again, that if a note has been edited, 4FILES will eventually rewrite
DESCRIPT.ION, and only the first 40 characters of each note will be written.

To put the "*" character in a note, the SHIFT-8 key must be used since
<G*> has a special function.

Great attention has been devoted to making 4FILES a true power tool for
creating or modifying one or a multitude of notes.  These are the features:


CUT & PASTE & LINE DELETE
=========================  <F9> initiates the text-copying mode.  Highlight the
desired text by moving the cursor horizontally, and then hit <CR> to put it in
the paste buffer.  <^F9> cuts  (rather than copying) the text to the buffer,
and <@F9> copies the whole note.

<F10> pastes text in the buffer at the cursor position.  If a PASTE causes an
overflow of the 40-character note space, the note is moved to an 80-character
space at the bottom of the screen.  This expanded field is fully editable (see
following).  Captured text stays in the buffer when changing drives or
directories.  <F10> is inactive in FLR mode.

^Y deletes the entire line.  In earlier versions it cut the line to the cut-
buffer, but now the buffer is loaded only via the various <F9> keys. ^Y is
functional in notes and all text input fields and command lines.


EXPANDED EDIT FIELD
===================  Expanded Field Mode is triggered whenever typing or
pasting causes the length of the current note to exceed 40 characters, and
allows editing over a full 80-character field.  The note is moved to a
highlighted 80- character field at the bottom of the screen and the
40-character field is blotted out.  Two "eyebrows" of contrasting "blot"
characters, each 40-characters long, are placed above this field, and act as a
guide for where the over-long note will be truncated when <CR> or <ESC> is hit.
The effect of the blotted out 40- character field, eyebrows, and highlighted
bottom row is to draw your eyes down to the expanded field.

To return to the 40-character field, hit <ESC> or <CR>.  <ESC> will return to
the current record and <CR> moves the cursor to the next record.  In both cases
the note is truncated after the 40th character. 4FILES will not accept more
than 80 characters under any circumstances, and will block pasting or typing
which would exceed that size.  A 40- character long cut string can be pasted
into a full 40-character note.

                                                                            13.
FLUSH RIGHT (FLR) MODE
======================  To create notes which are easy to scan by eye, it is
sometimes useful to make part of a note left justified and part of it right
justified.  Hitting <Sh-Rt-Arrow> provides right justified text in either of
two ways:

1. If there is text to the right of the cursor, it is bumped over to the
right margin.  The cursor is not moved, and 4FILES remains in its
normal, left justified editing mode.

2. If there is no text to the right of the cursor, 4FILES enters Flush-
Right Mode (FLR).  The cursor is moved to the right margin, and
highlighted indicators are set-up to show the part of the note field
which is available for FLR text entry.  Text will grow leftward from the
cursor, which is initially outside the field.  Editing is forced into
insert mode.  All horizontal cursor movement keys are active.  ^Left &
^Right behave slightly different than in normal mode, putting the cursor
between words, and Shft-BS is enabled.  Collision of new FLR text with
any left-justified text is prevented.  Cut and paste are not allowed.


QUITTING FLR MODE
=================  There are three ways to leave FLR mode, with differing
effects on the text cursor and the cursor bar.  In all cases, the pre-existing
insert or overwrite mode will be restored.  The choices:

               <ESC>            Leaves the cursor where it is.
               <Sh-Left>        Sends the cursor home.
               (Record-change)  (All vertical cursor keys act normally.)


INSERT / OVERWRITE MODES
========================  The INSERT mode default may be changed from the
configuration menu.  The active mode may be toggled with <INS>.


FULL CURSOR CONTROL
===================  4FILES has nice cursor control key-combinations, several
of which are not more commonly available in programs because they are available
only by writing a special keyboard interrupt handler.  The cursor control keys
are listed above in "Note Mode Commands".


==============================
INTERNAL CONFIGURATION ROUTINE
==============================

CUSTOMIZING 4FILES
==================  You can change 4FILES' on-screen appearance, the INSERT /
OVERWRITE default, "utility port" setups, and a number of other features.
<Alt-F10> displays the configuration menu.  Move between fields with the <TAB>
or <CR> key.  The menu on the bottom row is context sensitive, and changes for
each section of the main menu.  Changes may be permanently saved in a 4F.CFG
configuration file or be  used "session-only" without being saved.  If 4FILES
is renamed, any .CFG  file which is created or saved will have a matching name.

                                                                            14.

For loading a directory larger than 4FILES' normal 415 record capacity, the
configuration code may be overwritten to increase capacity to 456 records.  A
switch on the configuration menu either allows this to happen automatically
(when needed) or will prompt you to OK an overwrite.  When the code is over-
written, you will not be able to reconfigure until your next 4FILES session.

Data for several "utility ports" is shown at the top of the screen.  The first
field of each line is the "utility field", and is for an alias name, file name,
or complete filespec of a utility or application.  A complete filespec may
speed loading, but is not necessary if the program is in your PATH.  A complete
filespec can however dramatically speed loading the utility, and is
recommended.  In all cases, a file extension MUST be given.  Valid extensions
include .BAT, .BTM and .ALS.  ".ALS" must be appended to aliases or internal
commands.  It is a flag for 4FILES, and is not included in the actual call.
All commands without extensions will fail to execute.

If you wish to swap 4FILES to EMS or XMS memory or a hard disk before executing
a utility or application, SWAPDOS.COM can be used.  Enter SWAPDOS in the
utility field.  The name of the program to be called then goes in the tail
("T=") field, preceded by any command line switches for SWAPDOS and followed by
any of its own switches.

Another swap program which can be used for this is SHROOM.  4FILES rather than
the utility is loaded via SHROOM, so SHROOM should not be placed in a port's
configuration.  With SWAPDOS, swapping only occurs for the selected utilities,
while SHROOM will swap for all utilities.  On the other hand, SHROOM does fast
executions via the DOS EXEC function, while SWAPDOS makes a slower shell to
DOS.  On any utility or DOS calls in which SHROOM or SWAPDOS is active, the
mouse will be disabled during the call.

Errors in calling .COM and .EXE programs from 4FILES (e.g. file not found) are
shown as "configuration incorrect", but execution errors for batch files and
aliases are not trapped.  If execution is a quick flash on the screen, you need
to repeat the operation with a "screen pause" to see what is happening. There
are two ways to do this; one global and one specific to the utility.  To pause
after execution of all utility, set the "Pause after DOS" configuration switch
to "Y".  This also affects ^E command line. To cause a particular utility to
pause after execution, set its  "W=" (wait) switch to "Y".

Displaying Help and this manual with <F1> and <^F1> (respectively) will work
only if the <G+> BROWSE key is configured correctly.

The next field in the utility-port block is the command line tail.  This sends
filenames, command line switches or other parameters to the utility. "$F"
inserts the current filename with extension, and may be  placed where needed
among the parameters.  No spaces are needed before or after $F, saving space.
$N works similarly for inserting the name of a file  without its extension.

The "W" field is a YES/NO field which determines whether or not 4FILES waits
for a keyhit after the utility has finished executing.  Set it to "Y" for
utilities which run straight through and exit without any user input.

                                                                            15.

The "R" field is also a YES/NO field which determines whether 4FILES reloads
the directory list and DESCRIPT.ION file after the utility exits.  It must be
set to "Y" if the utility is capable of managing files or changing drives and
directories.  It should for example be "Y" for an editor or word processor.

In the next configuration section, switches are provided for the following:

Keyboard Code  -- Two letter DOS keyboard-country-code.  LEAVE THIS BLANK
                  UNLESS YOU HAVE A PROBLEM.  Takes effect next session.

Typing Default -- The INSERT mode default can be changed to OVERTYPE.

Other Keyboard -- Set this to "Y" if 4FILES assumes the non-optimum
                  keyboard layout for your computer.  Selects <SCL-LCK>, <G*>
                  or (on laptops) <Fn*> as active for drive:dir changes.

Disable <ESC>  -- To avoid inadvertent exits via <ESC> set this to "Y"
                  and exit with <^ESC> or <@ESC>.  If you use NEWKEY, see P.10.
                  In MS-Windows this switch has no effect.

Enable Mouse   -- "N" leaves the mouse set up as-received by 4FILES.

Exit Colors    -- Selects the previous DOS colors or those set by 4FILES.

Exit Blinking  -- 4FILES disables blinking to allow all color choices.  To
                  restore blinking on exit & in utility calls, set to "Y".

Snow Prevention - Set to "Y" if your CGA monitor has a snow problem.

Sound On/Off   -- The beep is on by default, and may be turned off.

Config Overwriting -- Allows AUTOMATIC  overwrite of configuration code to
                      increase capacity from 415 to 456 records.

Pause After DOS -- If the result of an (^E)xecute flashes off screen, set
                   this to "Y", or alternatively enter "++" at the end of
                   the command line.  Both await a keyhit.

Last comes a section for selecting colors or monochrome highlights.  Navigate
this submenu with <TAB>, <G+> and horizontal arrows.  Separate data is kept for
colors and monochrome highlights, and the appropriate set is activated at
runtime, for clean running when moved to any machine.

Some color combinations may not work with some "ported utilities".  For
example, if a utility automatically sets up a black on white cursor bar without
clearing the screen to white on black text first, AND if you have 4FILES text
set to black on white, you won't see the cursor bar.   This occurs with 4UNZIP
& VDE.COM.  The only solution is to pick text colors for 4FILES which avoid the
conflict.  Please write to authors of such programs and request a "smarter" set
up of screen attributes in the next version.  Please notify me as well.

On exit from configuration, new and old data are compared, and you are prompted
to save the configuration only if there is a difference.

================                                                             16.
DISPLAY FEATURES
================
4FILES works with any video text mode of 80x25 or higher. Except for HGC, MDA
and CGA video cards, if a higher mode is used it will be automatically
implemented.  For HGC, MDA and CGA running higher modes (such as with
UltraVision), the /+ command line switch must be used. The reason is that not
all cards in this class are 100% BIOS compatible, in some cases defeating the
automatic detection, and this arrangement assures that all systems will run "
out of the box" in 80x25 mode.  When calling 4FILES from an application
running a higher mode, 80x25 mode may be forced with the /8 switch.  When
calling utilities or shelling, the screen may look its best (depending on your
color choice) if ANSI.SYS is not loaded.

If a CGA video card is detected a no-snow video writing method is used by
default.  For faster displays, this method may be configured "off".

"T" and "E" indicators near the top and bottom of the screen indicate that the
top or end of the listing is shown on screen.  Used disk bytes are shown in
File Mode, and the 4FILES version number is shown in Note Mode.  A file count
is displayed at all times.  An "S" indicator with an up arrow symbol on the top
row means the file search direction is upward.  "PROTECTED" and "ROOT FULL"
messages indicate that the full range of file management and note editing
features are not available for the current disk.

Records with altered notes are flagged with a "+/-" character at mid-line. A
different character is shown for unaltered notes.  A "delta" character next to
a file name indicates that the file is marked for group file management.


===================================
OPERATING WITH SPECIAL ENVIRONMENTS
===================================

RUNNING UNDER MS-WINDOWS
========================  4FILES runs well as a non-Windows application.
Windows is detected automatically, and regardless of the 4FILES configuration
setting for the ESC key, the CTRL-ESC and ALT-ESC keys will serve their Windows
functions.  ESC, unaugmented, is used to terminate 4FILES.

Use the Windows PIF Editor to setup for 4FILES.  On the PIF Editor screen,
enter the pathspec for 4FILES and "4FILES" for the "window title".  Set the
memory required and desired to 64K and 640K respectively.  Set "video memory"
and "display usage" for text and full-screen respectively.  (In use, ALT-ENTER
swaps between full-screen and a smaller window, but the mouse will not function
in the small window.)  When finished, save the PIF with the "File" "Save-As"
menu.  To edit the entry later, choose "File" "Open".

Next, highlight the 4FILES icon and choose "File" "Properties" from the Program
Manager menu.  Complete the setup on the menu which is displayed; and picking
the Swiss army knife Windows icon is suggested.

For regular 4FILES use (except during evaluation under COMMAND.COM) be sure
your COMSPEC environment variable specifies 4DOS or NDOS.  To use the mouse in
4FILES, your mouse driver MUST be loaded prior to loading Windows. Although
Windows does not need a pre-loaded driver, 4FILES does.

                                                                            17.

To use 4FILES to its best advantage in Windows, load it automatically for each
Windows session via the Windows Startup Group.  When you exit 4FILES with Alt-
ESC or Ctrl-ESC, this will put the 4FILES icon at the bottom of the screen
where it will be accessible from other programs you will be running.
Alternatively you can access 4FILES via the Task Manager (Ctrl-Alt). Having
4FILES readily available should prove very handy since the directory display of
Windows applications is typically very terse, and 4FILES allows use of file
notes while File Manager does not.


RUNNING UNDER OS/2
==================  Users report that 4FILES runs well in an OS/2 2.0 VDM. The
author does not yet have a copy of OS/2, and has not fine-tuned 4FILES for
operation under it.  Suggestions or identification of worthwhile improvements
in this regard will prompt me to get a copy of OS/2 and do some fine tuning.


RUNNING UNDER DESQVIEW
======================  4FILES is now DESQview (DV) aware, and may be used in
small or full windows.  Note that even though 4FILES is fully DV-aware, "Writes
directly to screen" must be set to "yes" since utilities you call from 4FILES
may not be DV-aware.  DV's Transfer and Learn functions are fully functional,
even though 4FILES does employ its own keyboard handler.  4FILES' time slice
will be released while 4FILES is idling.

Sufficient memory must be allotted to 4FILES for itself plus the largest
utility (or the DOS secondary shell) which will be called from within it.  You
may wish to have "Open" menu entries for a few copies of 4FILES, each with a
different name and its own .CFG file.  For example, one copy might be setup to
call TED (a small freeware text editor) as the editor so 4FILES can be fully
functional with minimal memory requirements; and another copy might call Multi-
Edit (a full featured editor) and be set up for 350+K of memory.  Due to
4FILES' small size it is realistic to use multiple copies (each with its own
.CFG file) to provide this flexibility.

When setting up for 4FILES it is suggested that the filename plus extension be
used, causing DV to load 4FILES directly itself rather than calling DOS to load
it.  This  saves  several K of memory and saves  much time during utility calls
since execution will be  direct.  On utility calls if  DOS loaded 4FILES, DV
will shell to DOS before the  utility is loaded.  Also, if a utility is called
while 4FILES is in a small window, the utility's screen may appear to be blank
and unscrollable, depending on the location of text on the page.  In this
situation just zoom the window to full size.

In the DV setup for 4FILES, set "Uses it's own colors" to yes, but don't use
colors which interfere with blinking.  For  example, when dark grey is used for
the 4FILES list background, 4FILES  will  display correctly but when you switch
to another window the whole 4FILES window will blink.  Some monochrome
highlight choices have this same effect.

Under DESQview the 4FILES CTRL-ESC and ALT-ESC keys loose their meaning since
4FILES will always load showing its home directory.  These keys can still be
useful though, allowing "plain" ESC to be deactivated as described herein.

                                                                            18.

I am not an "ace" DV user yet, and will make refinements as I learn more.
Suggestions from experienced DV users are welcome & encouraged!


===============
SAFETY FEATURES
===============

DISK OVERFLOW PREVENTION
========================  In DOS, a file write which exceeds disk capacity will
truncate the file, usually with no outward indication of a problem, at least
until later.  Any automatic protection against such data loss must be provided
by the program itself, and 4FILES has an excellent overflow prevention system.
Competing programs do not check for disk overflow; some truncate files to the
length written to disk at time of overflow, and some truncate files to zero.
Some give absolutely no warning, and others warn only after the damage is done.

Whenever you change records or directories, 4FILES checks for an over-
flow condition.  If your edits exceed disk capacity, you are immediately
alerted with a message giving the number of excess bytes.  At this point
the note file is still in memory, and operations which would cause a file
write are blocked.  These include drive or directory changes, calling
browse or edit utilities, and quitting.  Meanwhile, you have FULL editing
freedom, even text insertion and pasting(!).

The overflow bytes message is updated on each record change, and the
tally can run up as high as necessary.  When the message stops appearing, the
notes will then fit on disk and blocked-off functions are re-enabled.

Entirely deleting a note deducts more than the note size from the overflow; the
length of the "filename.ext" plus three delimiter bytes are also nixed.   If
you delete a file (as opposed to just its note) or subdirectory with the D or K
commands, the space freed up from the record and its note will be properly
accounted for.  Changes during ^E operations are accounted for also since the
directory is always reread afterward.

4FILES pinpoints available disk space down to the last byte.  In one
unusual circumstance the overflow detection behavior may seem strange,
although it is still working correctly.  Writing a  new file requires at least
one cluster of disk space (1024, 2048, or 4096 bytes, depending on the drive).
Writing the first note in a subdirectory requires one cluster
 of available space, but if the disk is already full, doing so will cause an
overflow condition.  You might try going to another subdirectory that has
notes and deleting a few notes, but this probably  will not work.  You may
appear to free up enough bytes, but unless this also frees up a cluster 4FILES
will still indicate an overflow since one does in fact exist.


READ ONLY "TRAP" AVOIDED
========================  4DOS and 4FILES can move and edit notes only if the
"attribute" of the DESCRIPT.ION file allows a file write.  Unfortunately, the
"READ-ONLY" attribute can be inadvertently set by some utilities, especially
those which can operate on blocks of files (such as XTREE Pro).  When loading a
directory, 4FILES checks ahead for the READ-ONLY attribute, and will prompt you

                                                                            19.

to clear it.  Competing programs aren't so nice.  They let you edit notes and
appear to save your notes to disk -- but ... uh, uh, surprise!  Your work is
gone.  4FILES won't let you waste effort making edits which can't be saved, nor
will it lose them under any circumstances.

If you say "NO" to clearing the attribute during a directory change, you return
to the old directory.  During 4FILES startup, picking "NO" terminates the
program. "YES" clears the bit, and operations are normal.  NEVER intentionally
mark a DESCRIPT.ION file "READ-ONLY" for any reason.  4FILES catches the error,
but 4DOS  doesn't check for it.  As a result,  a  file moved or copied TO the
affected  directory will lose its note.  A file in that directory would also
lose its note if it is renamed.

4FILES also will not allow you to use the A or ^A commands to
change the attributes of DESCRIPT.ION, nor will it allow you to copy or
rename it.  It may be deleted only if all notes have been erased.  Such
protections are essential to the safety of the description system.


TIMELY INACCESSIBLE-DISK DETECTION
==================================  Files on a write protected disk cannot be
altered, and if the root directory is full, files can't be added to it.  During
4FILES startup and all drive or directory changes an immediate check is made to
see if one of those conditions exists.  If so, you will be alerted with a
prominent "PROTECTED" or "ROOT FULL" message.  As appropriate, certain 4FILES
functions are  disabled, and you will get an error message if you try to use
them.  For example, in a full root you will not be able to edit notes unless
the DESCRIPT.ION file already exists.  You can view files on a protected disk,
but file management and note editing is impossible. No wasted time writing
notes you can't save!!


INTERNAL CRITICAL ERROR HANDLER
===============================  DOS handles some simple, common problems as
critical errors, and can disrupt execution of a program.  These problems
include leaving a drive door open or calling a drive with no disk inserted.
4FILES has its own INT24 handler to treat such problems seamlessly.  It also
goes to extra effort to handle use of drives A and B in single floppy systems
seamlessly.


===========
4FILES TIPS
===========

Here are some ideas for making the most of 4FILES in everyday use.

1) TEAMWORK WITH LARGE APPLICATIONS:  4FILES is a real time saver when used in
conjunction with some application programs.  For example, you can write a 4DOS
alias which loads 4FILES whenever you exit your communications program.  Using
Procom as an example, if you create this 4DOS/NDOS alias:

       ALIAS COM = C:\COM\PROCOM ^ 4FILES C:\COM\DOWN /T/D

                                                                            20.

the command "COM" will cause 4FILES to be load when Procom exits.  Your
download directory will be shown sorted in reverse order by file creation time,
placing new files at the top.  Using /E/D would put .ZIPS at the top. Then,
using <G+> you may view the contents of a new text or .ZIP file.

To unzip a file, type F4 to call PKUNZIP or 4UNZIP.  For added flexibil-
ity in unzipping, you can use the ^E command line.  For example, I
often send PKUNZIP output to an empty directory, so inconsistently named files
in the archive don't get lost in a lengthy directory, and so
READ.ME files don't get overwritten inadvertently.   I maintain several
directories for this purpose, named \DUMP1, \DUMP2, etc.  To get to one of
these directories quickly after unzipping, type <G**>, then the directory name;
or move through your directory tree with <G-> & <G+>.

2) MORE ROOM FOR BIG APPLICATIONS:  To make more room for big applications, you
can use SHROOM or SWAPDOS.  SHROOM will swap 4FILES to disk, and SWAPDOS will
swap it to EMS or XMS memory or to disk.  SHROOM may be faster for you since
4FILES is a small swap and the following execution is made via the DOS EXEC
function.  SWAPDOS shells to DOS to execute the program, and this takes
considerable time.  The freed-up memory may make the difference between your
application running or not running.

3) MULTIPLE 4FILES CONFIGURATIONS: You can write a variety of aliases to
quickly load 4FILES in specialized, frequently used configurations.  An alias
called 4FE might call 4FILES with the /E switch set.  Another called 4FT, might
make the call 4FILES C:\WP\TEXT.  In such aliases, giving the full pathspec to
4FILES may speed loading, or you may want to have the directory containing
4FILES listed early in your PATH statement.

4) TO SPEED YOUR RETURN AFTER SHELLING TO DOS: use this alias: ALIAS = E EXIT.
Then "E <CR>" gets you back to 4FILES (or other shelling program) fast from the
secondary shell.

5) REMEMBER THE "DOUBLE-TAP" KEYS:   ^E^E, < G**>, and the double strokes to
quit the Sort menu.  Also <G***> to return to the previous directory.
 6) FREEZING THE SCREEN (A): With the ^E command or when using a utility port
with a batch file or alias, a message might flash off screen too fast to read,
or it might appear that nothing happens at all.  Appending a "++" to the
command will freeze the screen after execution until a key is hit, allowing you
to see what happened.  Also, 4FILES can be configured to pause after every
execution.

7) FREEZING THE SCREEN (B): Some utilities you may like to use will scroll
several pages right off the screen.  The solution is to call an alias,
as in these examples calling Borland's TDUMP.  They are most conveniently
placed in an alias file, but can be entered on the command line if the alias
expansion is enclosed in single quotes (once entered they are in  memory, ready
for use).  "=" is not needed from the command line.


        ALIAS HEX=C:\PROG\TDUMP.EXE %1-h | MORE
    or
        ALIAS HEX=C:\PROG\TDUMP.EXE %1-h | C:\UTIL\LIST.COM /S

                                                                            21.

    The first example pipes to an MSDOS resource which pauses at the end of
each page.  The later pipes output into Vern Buerg's LIST program, which allows
back and forth scrolling through the output.  To put this to heavy use, map
"HEX.ALS" to the 4FILES F3 key.  (This is just an example; it is really more
efficient to use LIST.COM's ability to do a hex dump directly by configuring
<G+> or <F3> to call it with $F/h in the command tail.)

8) OPTIMUM KEYBOARD: We all get set in our ways so it may take some adjustment,
but if your function keys are across the top, getting a keyboard with F-keys on
the left will REALLY speed up your work in all programs and make it more
accurate.  In 4FILES the proximity of these keys to <ESC>, <TAB>, <CTRL> and
<ALT> is handy, especially when marking/unmarking all files with ^F5 and ^F6.
My switch to such a keyboard was VERY rewarding!

9) FAST CHANGE TO ROOT DIRECTORY:  ON 101-key keyboards, you can make a quick,
one-handed change to the root directory since 4DOS will recognize  either "\"
or "/" during a directory change.  There is a "/" key next to <G*>.  So ...
just hit:  <G**> / <CR> and you're there.  Of course,  repeated hits on <G->
will be faster if you aren't too many levels down.

10) COLOR SUGGESTION FOR COLOR MONITORS:  As supplied 4FILES displays black,
grey & white tones which work well universally.  Through experimentation I have
come up with color schemes which I feel are easiest on the eyes, as well as
being functional.  In particular, they give a good balance between the color of
the cursor bar and the colors of both normal text and sorted fields.  One
relies on a dark grey background, the other black.

                            COLOR SET #1               COLOR SET #2
                     -------------------------    -----------------------
     FIELD         || BACKGROUND   CHARACTER   || BACKGROUND   CHARACTER
     ------------- || ----------   ----------- || ----------   ----------
     NORMAL TEXT   || Dark  Grey   Dark Green  || Black        Dark Cyan
     SORTED FIELD  || Dark  Grey   Light Yell  || Black        Light Yell
     CURSOR BAR    || Light Grey   Black       || Light Grey   Black
     CUT HI-LIGHT  || Dark  Red    Black       || Dark  Grey   Light Red
     FUNCTION KEY  || Dark  Grey   Light Grey  || Light Grey   Black
     MENU TEXT     || Dark  Grey   Dark  Cyan  || Black        Rust
     INDICATORS    || Dark  Red    Light White || Dark  Red    Light Grey


====================================
4FILES ... ORIGIN & FUTURE EVOLUTION
====================================

4FILES is coded entirely in assembly language for high speed and small
size, and the work involved has been considerable (and the job isn't done). The
concept arose from the lack in 4DOS of two things.  First, 4DOS has no good
means to create or edit the file notes it otherwise handles so well.  The 4DOS
internal note editor is basic and frustrating to use.

Second, while 4DOS has its own internal transfer commands (COPY, MOVE and
RENAME) which automatically assure that notes stay with their files, it does
not have a good way to perform these operations on marked groups of files. 4DOS
unaware utilities capable of block operations (such as XTREE-PRO) are

                                                                            22.

unsatisfactory since they are oblivious to file notes and will trash them.
4FILES' many file management features do not yet include functions for copying,
moving or renaming marked groups of files.  This is coming though!

Also, the present implementations of Copy, Move and Rename for single files are
very rudimentary, but V-3.0 will have ones which are truly exceptional. V-3.0
will also have nice internal facilities to ZIP and UNZIP files and browse files
within ZIP files, and 120-character file descriptions will be supported.  Built-
in swapping to EMS/XMS is planned, as are several other new features.

ACKNOWLEDGMENTS:  My deepest thanks go out to John Fox, Tom Schulte, Mike
Bessy, Pierre Jelenc, Ward Yelverton, Mack Tanner, Roland Friedrich, and Ralf
Berg who have all been of great help to me in refining 4FILES, finding bugs,
and identifying system dependent conflicts.


===============================================================================
  AGREEMENT -- USE / REGISTRATION / DISTRIBUTION / & LICENSING OF "4FILES"
===============================================================================

WHAT YOU GET FOR REGISTRATION
=============================  Registration is $20 and entitles you to:  1)
Free technical support; 2) A copy of the latest version, with personalized exit
message, and a free registered copy of V-3.0 by mail immediately upon release.
Timely notification of releases beyond V-3.0 will be sent; 3) a nice, printed
manual for $3.50 at time of registration, or $5.00 if ordered later;  4) I have
also been very liberal about providing free incremental registered upgrades as
major features are added on the way to what is promised for V-3.0.

4FILES has been a very time consuming project because I have gone to great
pains both to maximize its convenience and power and to assure protection of
your data.  I regret that V-3.0 is not yet available, but even so, the existing
power and convenience is, I believe, considerable.  Please recognize this
effort by registering your copy promptly if you put it to useful work, and by
passing 4FILES on to others who might enjoy it.

AGREEMENT FOR USE AND DISTRIBUTION
==================================  4FILES and its documentation are
copyrighted intellectual property which are distributed as shareware, and may
be used or distributed only in compliance with the terms and conditions which
follow.  4FILES is neither free nor in the public domain.  All rights are
reserved worldwide by the author.  Any use of 4FILES constitutes your agreement
to all provisions herein.

USE & REGISTRATION FOR A SINGLE COMPUTER
========================================  Use of 4FILES is free during your
evaluation period.  This period ends when you begin to use 4FILES for any
useful work which is not incidental to exploring its capabilities, and may not
exceed 30-days beyond your acquisition date.  When you use 4FILES for the
primary purpose of accomplishing useful work (as contrasted to a genuine
evaluation) you are obligated to do your "share" of the shareware arrangement
by registering your copy promptly.  Registration is only $20, and a form is
provided in the file 4F-REGST.TXT

                                                                            23.

MULTIPLE USE & SITE LICENSING
=============================  A site license is required if 4FILES can
potentially be used simultaneously on more than one computer, terminal or
workstation in a business, institution, organization, government agency, home,
etc.   To apply for a license, please fill out the registration form in
4F_REG.TXT.  A sample site license and rates are contained in the file
4F-SITE.TXT

DISTRIBUTION OF 4FILES
======================
Distribution by any means is encouraged, provided that:

1) The distribution includes all original files (see Packing List, below)
in their unaltered forms and with unaltered filenames.  If the package
is incomplete its distribution is prohibited; please contact me for a
complete package.  Do not include a configuration file in the distrib-
ution.  A BBS may add a tag file listing it as the source, and disk
vendors may add introductory or installation batch files.

2) A distribution fee does not exceed $8 if 4FILES is distributed alone or $12
(in 1991 dollars) if it is packed on-disk with other programs, UNLESS a higher
figure has been approved in writing.  Commercial vendors who are not members of
ASP must have written permission to distribute.  Please inquire as necessary.

3) In any vendor catalog or other publication, it is clearly stated that this
is shareware and that $20 must be paid to Hand-Crafted Software if the program
is useful, in addition to the distribution fee (if any).

4) 4FILES may not be included or bundled with other goods or services
without express written permission of the author.

WARRANTY & DISCLAIMER
=====================  Any use of 4FILES constitutes your agreement that it is
provided "as-is" with no express or implied warranty (other than free technical
support), that you assume full responsibility for assuring that it performs
acceptably on your system, and that in no event shall Larry Edwards,
Hand-Crafted Software or their successors be held liable for any damages
arising from use of the program.

 ------------------------------------------------------------------------------
 I hope you think my soft "wares" are terrific; much extra effort has been
 expended toward that end.  Your registration will be (or is) much appreciated.
 Please let me know of any improvements you would like.
 ------------------------------------------------------------------------------

============
PACKING LIST   (All files except 4F.COM & TV.COM are readable text files.)
============

    4F      .COM   4FILES Program file.
    4F      .DOC   Full documentation.
    4F      .HLP   HELP text file.
    4F      .VER   Version update details and history.
    4F-READ .ME    Introductory information, and a word on compatibility.

                                                                            24.
    4F-REG  .TXT   Registration form.
    4F-SITE .TXT   Sample site license & rates.
    4F-VEND .TXT   Info for SYSOPs & disk vendors.
    FILE_ID .DIZ   Description for BBSs.
    TV      .COM   Public domain file browser. (May be omitted for distrib.)
    TV      .DOC   (May be omitted for distribution)

===========================================
DETAILED INSTRUCTIONS FOR INSTALLING 4FILES
===========================================  For simple instructions see
Quick Start on page 3.  The following assumes you do not have a text editor,
and it will take but a few  minutes.  "< >" means a keyboard key.

1)  The PATH is an internal list of specified drives and subdirectories where
DOS will look for a program you are trying to execute, if the program cannot be
found on the current drive and directory.  To see if you have a PATH set up,
type "PATH" on the DOS command line.  If the message given is "No PATH", goto
step 2.  Otherwise, write down  one of the paths (there is a ";" separating
them) which is listed and in which you wish to store 4FILES.  Go to step 3.

2. Change to your "boot" drive and directory by typing C: (or A: if you booted
from a floppy) and typing <Enter>.  Then type CD \<Enter> to get to the "root"
directory.  Type DIR<Enter> and look to see if you have the file AUTOEXEC.BAT.
If so, go to step 3.

We will create an AUTOEXEC.BAT file now.  It will be called everytime you boot
your computer, setting your PATH and making a nicer DOS prompt.  Type:
COPY CON AUTOEXEC.BAT <Enter>.  Then, substituting your drive for "d", type:
PATH=d:\UTIL<Enter>PROMPT=$P$G<Enter><Ctrl-Z><Enter>     Then go to step 4.

3.  Add a PATH statement to your existing AUTOEXEC.BAT file by typing: COPY
AUTOEXEC.BAT + CON AUTOEXEC.BAT<Enter>.  What you type on the "console" is now
appended to the file.  Type: PATH=d:\UTIL<Enter><Ctrl-Z><Enter>, where "d" is
the letter of your boot drive.

4.  Put the 4FILES disk in drive A: and type: COPY A:4F*.* \UTIL<Enter> to copy
all 4FILES files to the directory.  (Substitute a different directory for \UTIL
as necessary.)  Also type: COPY A:TV.* \UTIL .

5.  4FILES is now installed.  Since 4FILES is in your PATH now, typing 4F will
start it up no matter what drive or directory you are currently in.

6.  Start 4FILES by typing 4F.  Then hit the <Alt-F10> key. The bar will be on
the line for the <G+> key (the "grey-plus" key).  It is set to LIST.ALS if the
program has its factory settings, allowing file viewing if you have 4DOS
installed.  We'll change it; type-in d:\UTIL\TV.COM if TV.COM was included with
your 4FILES, and type <ESC>P.  Move the highlight bar to any file, press <G+>,
and TV will display the file and let you browse it.  <ESC> quits to 4FILES.

Move the bar to the UTIL directory  and then press <G+>.  You are now in that
directory  (if this fails, use <Scroll-Lock>).  Move down to the 4F-READ.ME
file and hit <G+> to browse it.  When done, hit <TAB> and type (or modify) a
file note. Then hit <G-> to return to the parent directory.  Move elswhere in
that list and hit <G*> 3 times.  Your're back to the previous directory.  Quit
with <ESC> or <Alt-ESC>.  More in the manual.

=========================================================================== 25.

                           4FILES REGISTRATION FORM
                           ========================

                   Larry Edwards // Hand-Crafted Software
              Box 6001 // Sitka, Ak 99835 USA // (907)-747-8996

            Your signature here signifies acceptance of the agreement
                   contained near the end of the documentation.

PLEASE PRINT CLEARLY!
=====================                             4FILES VERSION #____

Your name: ______________________________________ Position:_________________

Company: ________________________________________  Phone: (W) ________________

Street or Box: ____________________________________       (H) ________________

City/State/Zip: ___________________________________  Country: ________________

I got 4FILES from (which BBS/vendor/etc):_________________, ____________ Forum

E-Mail UIDs:  CIS ___________.   Genie ___________.   BIX ____________.

CHECK ONE:                       INTERNET addr: ______________________________
==========

__  Our (my) operation cannot possibly use more than one copy of 4FILES simult-
    aneously, and I am registering one copy via the enclosed $20 payment.

__  Our (my) operation hereby applies for a site license to install 4FILES for
    use on up to _____ computers, workstations or terminals.  Payment according
    to the schedule in the file 4F-SITE.TXT is enclosed (call if file is lost).

__  Send ___ printed manuals for $3.50 each.

Signature: ________________________________________      Date: _______________

Send upgrade by US Mail on: __ 5.25" disk  __ 3.5" disk.

CHECK ONE EACH> Using:  __ MSDOS  __ DRDOS   Version ____
                With:   __ 4DOS   __ NDOS    Version ____      __ Neither
                CPU: __ 8086  __ 8088  __80286  __80386 __80486

================================================================
COMMENTS / PROBLEMS / CHANGES OR ADDITIONS YOU DESIRE IN 4FILES:
================================================================
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3241

     Volume in drive A has no label
     Directory of A:\

    CDROM    TXT      3972   6-24-92   1:25p
    4FILES2U ZIP     73527  11-11-92  11:04a
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      3109   6-29-92   3:26p
    PCSIG    TXT      2335   1-21-92   6:09a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    SIGORDER TXT      3332   6-25-92   2:28p
    GO-STRT  DAT       535  12-29-92   7:31a
            9 file(s)     138197 bytes
                           19968 bytes free
