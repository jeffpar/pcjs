---
layout: page
title: "PC-SIG Diskette Library (Disk #2851)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2851/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2851"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ADDENDUM.DOC

{% raw %}
```
                       PC-Write Standard Level 2.00

                        Reference Manual Addendum

                            September 20, 1991

Installation

- "Formatted documents"

  During installation, you choose whether you want Document Formatting to be
  either 1) Automatic, or 2) Manual or unformatted. The first choice gives you
  automatic one-inch margins, and turns on automatic formatting (auto-repage
  and paragraph reformat). When the Getting Started booklet or the Reference
  Manual refer to choosing to "create mostly formatted documents", we mean the
  first choice.

  Generally if you're new to word processing, or like the computer to manage
  the details, pick Automatic. If you edit unformatted documents (like ASCII
  files), or prefer to control formatting yourself, pick Manual. If you'll be
  editing files created with earlier versions of PC-Write, pick Automatic if
  you always edited them with auto-reformat on, otherwise pick Manual.

  Don't worry too much about making the right choice;  you can easily set the
  margins and degree of automation you prefer later.


File Features

- Changing Directories in a File List

  Any time you're viewing a list of files (File, List & open; or typing *.* or
  F8 at a filename prompt) you can select any subdirectory name (they end with
  a \) and press Enter. Then PC-Write lists the files in that directory.


Margin Features

- Temporary Indents

  You can set temporary left, right, or paragraph indent positions. This is
  handy when editing files without formatting, or to try out an indent for a
  short time. Place the cursor at the indent position in a line, and press:

  Ctl-[  Sets or clears a temporary left indent (left side of paragraph).
  Ctl-]  Sets or clears a temporary right indent (right side of paragraph).
  Ctl-/  Sets or clears a temporary first line of paragraph left indent.

  The symbols "[", "]", and "\" appear on the Status line when the matching
  temporary indent is active.

- Long Dashes (M-Dash)

  You may want a long dash -- as in this example, to set off a phrase. The
  best way to do this is a Hard Hyphen followed by a normal hyphen, since
  two normal hyphens in a row can get divided at the end of a line. To get
  an M-dash that always remains intact, press Ctl-hyphen, then hyphen.


- Ruler Editing

  When you're editing the Ruler line (Layout, Margin, Use ruler, Edit ruler;
  or Ctl-F2) press the Shf-Grey- key to see the default Ruler line, or press
  the Shf-Grey+ key to see the last embedded Ruler line in the document.


Paging Features

- Setting a Lower Page Number

  You might set a page number (Layout, Paging, Page number; or .N) and give a
  number smaller than the page before. This works fine when printing the whole
  document (Print, All), but you can't print page-by-page (either Print, View
  or Print, Range) and move forward to the page with a smaller number. To do a
  Print View or Print Range in this case, place the cursor in the first part
  of the document and View or (Print Range) those pages, then move to the
  second part of the document and do the remaining pages.


Merge Features

- Place Holders with Names

  Place holders in a template document, such as {1} or {2}, show where input
  fields will be placed. You can make these place holders more meaningful by
  adding a dash and a name after the number, such as {1-Name} or {2-State}.

- Automatic Reformat with Merge

  The Reference Manual cautions you not to edit the merge input file with
  auto-reformat on, since each line in the input file contains exactly one
  record (if comma separated) or one field (if line separated). However, you
  may want to do the actual merge with auto-reformat on, since the resulting
  output documents may look better. Do this if you have a place holder inside
  a paragraph, and the field that replaces it could be short of long. For
  example, a last name field might be "Ng" or "Anderson-Jacobson".


Help Features

- New Help menu item, Context

  The Help pull-down menu has three items. They are:

  Index:     brings up the Help index page.
  Context:   brings help about the text or formatting at the cursor
               (the same as pressing F1 then F1).
  Tutorial:  brings up the Tutorial.


PC-Write Wizard's Book

  Note that the Wizard's book is available separately from Quicksoft.

Font Selector Program

  Note that this program is available separately from Quicksoft.
```
{% endraw %}

## ASPINFO.DOC

{% raw %}
```
               Association of Shareware Professionals (ASP)

The ASP is an organization of software authors, shareware disk vendors, and 
bulletin board system (BBS) operators, devoted to the success of shareware.
One way ASP helps you, the user of shareware, is its Ombudsman service. 

We at Quicksoft hope you never have a problem with our software or service. 
If you do have a problem, please call us at 206-282-0452. But if you prefer 
to contact someone else, do try the ASP Ombudsman. 

Here is the Ombudsman's statement:

"Quicksoft is a member of the Association of Shareware Professionals (ASP). 
ASP wants to make sure that the shareware principle works for you. If you are 
unable to resolve a shareware-related problem with an ASP member by contacting 
the member directly, ASP may be able to help. The ASP Ombudsman can help you 
resolve a dispute or problem with an ASP member, but doesn't provide technical 
support for members' products. Please write to the ASP Ombudsman at 545 Grover 
Road, Muskegon, MI 49442-9427, or send a CompuServe Mail message to the ASP 
Ombudsman at 70007,3536, or send a FAX to (616) 788-2765. Please include a 
telephone or FAX number if possible when you contact the Ombudsman." 
```
{% endraw %}

## FILE2851.TXT

{% raw %}
```
Disk No: 2851                                                           
Disk Title: PC-Write Standard 1 of 4                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Write Standard Level                                  
Author Version: 2.0                                                     
Author Registration: $129.00                                            
Special Requirements: 384K RAM (640K recommended).                      
                                                                        
With PC-WRITE STANDARD LEVEL, Quicksoft introduces a new member of the  
PC-Write family of word processors.  Ease of use is stressed in this    
version without limiting its standard word processing options.          
                                                                        
Pull-down menus help to keep the learning curve short for the novice.   
The more experienced word processor may choose to bypass the pull-down  
menus in favor of the faster function key commands or use both.  Mouse  
support is offered, as is online context-sensitive Help.  Multiple      
windows allow you to edit up to ten windows or documents at one time.   
Also included is a conversion tool to import and export files to and    
from WordPerfect, ASCII, and DCA/RFT standards.                         
                                                                        
To complete the package, Quicksoft introduces the ``adaptable word      
processor'' which lets you customize it to your specific word processing
needs.  Control the look and feel of the program.  Customizing has never
been easier.  Set your preferences, or ``select your profile,'' from the
pull-down menu bar, the program's Customizer, or during installation.   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## OLDPCW.DOC

{% raw %}
```
                Earlier Versions of PC-Write and Standard Level

If you have used PC-Write before, welcome to Standard Level 2.0! Here we'll 
describe some of the changes since PC-Write 3.0 (and PC-Write Lite 1.0). Your 
main decision is whether to use your old print control file, or install a new 
one that handles margins and font sizes better. 


Command Key Changes

Most function key menus haven't changed. The Alt key brings up the new pull-
down menus. The Esc key does nothing, but you can use the Customizer to make 
Esc bring up these menus. This is handy if you find you're bringing up the 
menu when you try to insert a font character (but if you do bring up the menu 
by accident, press Alt again to remove it, or press the Alt-Letter you wanted 
and PC-Write will clear the menu and insert the font). 

Use Ctl-F2 (not F2) to edit the Ruler line. To embed a new Ruler, just press 
Ctl-F2, edit the Ruler, and press F4 to embed it; this no longer affects the 
prior Ruler line in the file. You can still modify the prior Ruler by 
pressing Ctl-F2, editing the Ruler, and pressing F2 to finish. 

The F2 key itself just handles windows. You can now have up to 10 windows! 
F2, F4 splits the current window; F2, F2 still un-splits. Use F2 then PgUp 
or PgDn to switch windows (F2 then Up or Down Arrow works, but is not 
recommended). Use Alt-F6, F6 to read an edit control file, or F1, F7, F6 to 
read a print control file (again, Ctl-F2, F6 works, but is not recommended). 

The Shf-F6 key gives a file conversion menu. WordPerfect and DCA conversion 
is built-in. Importing old PC-Write files (discussed below) and converting to 
ASCII is done here, not with the old Alt-F5 menu. Alt-F5 still does tab and 
line conversions. To remove extra spaces use Shf-Ctl-F8 (ASCII Ragged) and to 
remove page breaks use Alt-F7, F9. 

The Alt-F3 key-record menu has a few changes; use Alt-F3, F5 to both assign 
the current macro to a key and (optionally) save the definition in your edit 
control file. Alt-F3, F6 unassigns a key; Alt-F3, F7 (or Ctl-^) goes into 
Numbers mode. 

Find and Replace have some changes. A single space in the Find Text matches 
any number of spaces, fonts, line boundaries, Guide lines, or Break lines. 
To match just one space, press F4 (the "match exact" wild card) before the 
space. Multiple spaces match only that exact number of spaces. To replace 
within marked or boxed text, use Alt-F10, F7 (not Alt-F10, F9, F9). 

In the Repage menu, Alt-F7, F5 repages the whole file (not Alt-F7, F5, F5). 
And Alt-F7, F4 updates all the auto-number sequences (not Alt-F7, F5, F6). 
Auto-repage is new (Alt-F7, F3). 

There's no Alt-F6 formatting menu. The Layout pull-down menu replaces it. 



Font Changes

If you have a newer HP LaserJet or popular dot matrix printer, there's a 
better font system. With it, you can set the size of a font independently 
from the typeface. For example, you can make a word bigger by just changing 
the size, or use a bold typeface without changing the size. You also get many 
more typeface + size combinations. This is handy for new files. 

Converting old files takes some work, since every typeface (width) font must 
be replaced with two fonts. For .R and .Q Dot lines, just replace each with 
two new ones. For font characters, you should keep the fonts nested (if you 
don't, they look funny on the screen and reformat poorly, but print OK). Say 
M is the old 10pt boldface font, B is the new boldface, and E is the 10pt 
size font. You need to change "the MbrandM new party" to "the BEbrandEB new 
party". 

When you install a printer, pick one with the note "{new}" to get these new 
fonts. Or, pick the same printer but without {new} to keep the old fonts and 
still take advantage of the new margins (below). Or, you can use your old 
print control files, with old fonts and margins. 


Margin Changes 

Many printers (all laser printers) cannot print to the edges of the paper. 
PC-Write now knows about these unprintable areas and takes them into account 
when printing pages. If you set one-inch margins on all sides, that's what 
you get. For old files, if you set a zero top margin with .XT:0 (knowing your 
printer will skip the top half-inch anyway), PC-Write will warn you that a 
zero top margin is impossible and reset it to the minimum, say one-half inch. 
But it won't print this half-inch, since the printer will skip it anyway. 

All 2.0 print control files contain unprintable area information. You now set 
the page length to the actual paper length, such as .L:11i. The new system is 
simpler, and makes it easier to move between printers. To convert an old 
LaserJet print control file (such as a Font Selector file) to the new system, 
use the HPFIX batch file: enter HPFIX pr.def at the DOS prompt. 

A printer's unprintable area actually varies based on the feed mechanism. 
Tractor feeding on dot matrix printers has no unprintable top or bottom area, 
but bin or tray feeders on dot matrix or laser printers do. Single sheet 
feeders may even have a larger unprintable top area. This means you need to 
set the right feeder type in the menus (or F1, F7, F4). To use files with old 
margins, just specify Tractor feed; then these unprintable areas are ignored. 

Left and right margins work differently, too. The right shape letter in the 
Ruler line (like R or J) now sets the right side indent position. The right 
margin itself is set with a .W Dot line to set the paper width (say .W:8.5i), 
combined with .XI and .XJ Dot lines to set the left and right margins (say 
.XI:1.0i and .XJ:1.0i; .XI is the same as .X). It's easier to set a one-inch 
right margin than to figure out where the R goes in the Ruler! Printing takes 
unprintable left and right areas into account, so when you ask for a one-inch 
margin that's what you get. 


Paragraph reformat and justify go to the minimum of the right indent position 
(set by the R or other shape letter in the Ruler), and right margin position 
(set with .W less .XI and .XJ). When you're editing old files, press Ctl-F2 
to see where paragraphs will reformat. If the highlighting ends before your 
shape letter, the .XI/.XJ pair is making it smaller. During installation of 
PC-Write, it asks if you want automatic document formatting; if you say yes, 
you get one-inch margins all around, set in the edit control file. To fix 
this, use the new pull-down menus to make the left and right margins smaller, 
or remove the .XI and .XJ from ed.def. 

You can use the pull-down menus to set paragraph shape or indents. PC-Write 
then edits your Ruler lines as appropriate. It keeps existing tab stops and 
spacing commands. You may never have to edit a Ruler line again, except to 
set tab stops. 

During install, if you indicate you want automatic formatting, you also get 
auto-reformat, auto-repage, and Hide mode by default. Auto-reformat mode does 
more than it used to. Pressing the Enter key normally inserts a paragraph 
break (Alt-K) in this mode (unless you change this with the Customizer). And 
changing the left or right margin, either by editing the Ruler with Ctl-F2 or 
through the pull-down menus, automatically reformats to the next Ruler. You 
don't need K, M, or Q "change margin" letters in the Ruler anymore. 

Ruler lines now break paragraphs, unless you have an O letter somewhere in 
the Ruler line. For old files that change indent within paragraphs (say, for 
run-arounds) you must add this O. 

Finally, the F7 reformat key now reformats the entire paragraph containing 
the cursor, not just from the cursor to the end. Use marking or a paragraph 
break to limit reformat. 

Font and Margin Change Summary

             |  Old pr.def   |  New 2.0 pr.def  |  New 2.0 pr.def
             |               |  but not {new}   |  with {new}
-------------+---------------+------------------+------------------
 Old         |  Works O.K.   |   Fix margins    |  Fix margins
 Documents   |               |                  |  Fix fonts  
-------------+---------------+------------------+------------------
 New         |  Works, not   |  Use if not all  |  Best overall
 Documents   |  recommended  |  your printers   | 
             |               |  have {new} on   | 

You can use the Link file feature (.C:) to print existing documents with your 
old print control file, and make a new print control file for new documents. 
Control file lines that read print control files should end with /p (such as 
!pr.def/p or .C:!laser.def/p). And if you read control files from the command 
line with //, add a !, such as ED myfile //!laser.def. 



Header/footer Format 

All Header/footer margins, fonts, and spacing are now set from the margins 
(.W, .XI, .XJ), fonts (.R's), and spacing (.S, .ST) in effect at the first 
text line in the file. Ruler lines have no effect, nor do subsequent format 
commands active when headers or footers are defined. The .HW and .FW commands 
are no longer supported. Header/footer fonts can be changed with embedded 
fonts, or set with .RH/.RF Dot lines (and cleared with .QH/.QF Dot lines). 


Final notes on formatting 

Files with .- and .+ for reformat protection need to be changed to <Alt-G>N 
and <Alt-G>Y mini-rulers. If you use .R or .Q Dot lines with font characters 
instead of letters, you need to convert these as well. Import Old PC-Write 
(Shf-F6, F2) does this automatically. It also converts page break and Dot 
command format for PC-Write versions before 3.0. 

Printing is now fully integrated. There are no problems with incompatible 
Ruler lines or Dot lines between editing and printing. We suggest you place 
only printer-specific information in your print control files. Dot lines 
generally should go in edit control files. 

Dot lines not supported in PC-Write Standard Level, but expected in Advanced 
Level (and often in PC-Write 3.0) are ignored with no message, so you can 
edit these files with Standard Level. 


Other items 

Some old PC-Write macros may not work. Macros that use those menus which have 
changed won't work (but F2, Up Arrow/Down Arrow macros work). In general, 
operation numbers have not changed. If you're using macros, you may want to 
get the PC-Write Wizards Book, available separately from Quicksoft.

Mouse support is fully integrated; you don't need any special PC-Write mouse 
driver (just the standard mouse.com or mouse.sys system mouse driver). The 
DOS SHARE command is automatically detected; you don't need &F:2 (or &F:3). 

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
           To Shareware Vendors of PC-Write Standard Level 2.0

Distribution Rules:

1. Indicate in all promotional material that PC-Write is shareware.
     We encourage giving a longer description of the shareware process.
2. If you use our registered trademarks "PC-Write" and "Quicksoft",
     please mark the first use of each with the circle-R symbol or "(R)".
3. Limit shareware distribution to the following countries:
     United States, Canada, United Kingdom, Australia, New Zealand.
4. Do not distribute the Thesaurus, disk 5. It is not shareware.
     It contains Roget's Thesaurus, a product of Houghton Mifflin. 
5. Do not modify or delete files from any other disk.

You may distribute each disk separately, and/or compress files.
There are no restrictions on the price you charge per diskette.
We encourage you to become a member of ASP (see ASPINFO.DOC).


People who purchase a registration for PC-Write Standard Level receive:

1. The right to use PC-Write Standard Level 2.0.
2. Current PC-Write Standard Level software, including Roget's Thesaurus.
3. The 132-page Reference Manual and 60-page Getting Started booklet.
4. One year of Technical Support, including our quarterly newsletter, and
   a 20% discount on all Quicksoft products, including updates and support.


Price of PC-Write Standard Level registration:

$129 plus shipping ($5 contiguous U.S., $8 AK/HI/Canada, $35 other).
Additional user copies, without technical support, are $69 (plus shipping).
Washington state orders add 8.2% sales tax. Prices are subject to change. 
See also REGISTER.NOW for ordering information.


PC-Write Standard Level requires:

1. PC compatible computer with 384K of memory; 640K is recommended.
2. Print Preview requires a graphics adapter (CGA, MGA, EGA, or VGA).
3. One floppy disk drive; two floppy drives or hard disk recommended.
4. Supported printer; PC-Write supports over 900 printers.



Suggested descriptions for PC-Write Standard Level


40 characters:

Easy, powerful, adaptable word processor


57 words:

PC-Write Standard Level is the adaptable word processor from Quicksoft. 
Context-sensitive help, pull-down menus, mouse support, and auto-repage make 
it easy to use. New features include Roget's Thesaurus, up to 10 windows, and 
import/export from WordPerfect, DCA-RFT, and ASCII.  


189 words:

PC-Write Standard Level is the adaptable word processor from Quicksoft. 
Context-sensitive help, on-line tutorial, pull-down menus, mouse support, and 
auto-repage make it easy to use. The Adapt feature lets you add or remove 
feature sets depending on your needs; start with core features, then add more 
as needed. The pull-down menus changes as you adjust feature sets. Even read 
about features in Help and instantly adopt them. 

New features include Roget's Thesaurus, easier margin setting, up to 10 
windows, and import/export from WordPerfect, DCA-RFT, and ASCII. Supports 
microspace justify, auto-reformat, auto-0number, mail merge, spell check, and 
more. Great for both formatted documents and ASCII files. Supports over 900 
printers; tops for LaserJets. 

Set over 200 customization options with the Adapt feature and Customizer 
menus, in areas such as editing, keyboard use, screen display, and file 
handling. Easily tailor PC-Write to your preferences.

Runs on IBM PCs and compatibles with at least 384K. The $129 Registration 
includes disks, Getting Started booklet, Reference Manual, License to Use, 
technical support for one year, quarterly newsletter and 20% discount on 
Quicksoft products. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2851

     Volume in drive A has no label
     Directory of A:\

    GO       BAT      1516   9-20-91   2:00p
    ED       EXE    150401   9-20-91   2:00p
    ED       HNT     19692   9-20-91   2:00p
    ED       PIF       545   9-20-91   2:00p
    ED       TRS       844   9-20-91   2:00p
    INSTALL  EXE      3729   9-20-91   2:00p
    CUSTOM   EXE      7897   9-20-91   2:00p
    CUSTOM   OVL     81908   9-20-91   2:00p
    CUSTOM   HLP     29799   9-20-91   2:00p
    PRINT    TST      1972   9-20-91   2:00p
    OLDPCW   DOC     10693   9-20-91   2:00p
    ADDENDUM DOC      4571   9-20-91   2:00p
    VENDOR   DOC      3643   9-20-91   2:00p
    ASPINFO  DOC      1249   9-20-91   2:00p
    REGISTER NOW      2784   9-20-91   2:00p
    PCWRITE  DIR      3031   9-20-91   2:00p
    PCW1     DIR         2   9-20-91   2:00p
    FILE2851 TXT      2369  10-14-91   1:22p
           18 file(s)     326645 bytes
                           27648 bytes free
