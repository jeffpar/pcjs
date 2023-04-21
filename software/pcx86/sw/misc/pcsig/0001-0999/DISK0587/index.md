---
layout: page
title: "PC-SIG Diskette Library (Disk #587)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0587/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0587"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYMPHONY MACROS AND WORDPROS. TIPS"

    This disk contains a variety of prize-winning tips and Macros for
    SYMPHONY, including tips on importing wordprocessor files, Multiplan
    files, using SIDEKICK with SYMPHONY, and much more.  In addition to
    great tips, there are also worksheets for creating a phone and address
    directory, creating and printing mailling labels, creating macros, and
    setting up multi-column documents.  Utilities perform hexadecimal to
    decimal conversions (and vice versa), simulation of 123 window
    sychronization capability, calculation of metric values of resistance
    and tolerance of resistors.  Also included is a macro demonstration and
    macro tips using the {get} function.  These utilities seem to solve
    many of the conversion problems for major programs (WordStar, etc.).
    
    System Requirements:  512K, two disk drives, monochrome display and
    Lotus SYMPHONY
    
    How to Start:  Access through Lotus Symphony
    
    File Descriptions:
    
    LABELS   WRK  Produces labels based upon a mailing list.
    FLIPPER  APP  Data mover extension.
    DEMO     WRK  Demonstration file.
    DUALDS   WRK  Install Symphony with two monitors
    APPTMENT WRK  An appointment and time management system.
    ADDRMAC  WRK  Create an address book.
    SKPROB   WRK  How to use SideKick with Symphony.
    SEARDOC  WRK  Worksheet format Search documentation.
    SEARCH   PRN  Printable documentation on search capability.
    SEARCH   WRK  Worksheet using search capability.
    MPLAN    APP  Imports Multiplan data into Symphony.
    RESICO   WRK  Metric values of resistance and tolerance of resistors.
    WNDWSY   WRK  Simulates 123 window synchronization capability.
    CALC2    WRK  Elapsed calendar and business days between two dates.
    HEX2DE   WRK  Converts hexadecimal to decimal numbers and vice versa.
    SEARCH   APP  Searches spreadsheet for specific character.
    WRDPRF   WRK  Use Word Proof in conjunction with Symphony.
    WORDST   CTF  Converts a WordStar document for Symphony.
    TWOCOL   WRK  Sets up a multi-column document.
    MACRO1   WRK  Demonstration macro.
    LEEVFORM WRK  Offers an important macro concept using {get}.
    USERTIPS DOC  Protocols for use of some of these capabilities.
    ORD_ENT  WRK  Uses almost all Symphony commands for order-entry program.
    MOVIE    WRK  Use Symphony to display moving graphics.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES587.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  587      SYMPHONY WORD PROCESSING TIPS & MACROS           v1 DS2
---------------------------------------------------------------------------
This disk contains a variety of prize-winning tips and Macros for SYMPHONY,
including tips on importing wordprocessor files, Multiplan files, using
SIDEKICK with SYMPHONY, and much more.
 
TWOCOL   WRK  Sets up a multi-column document.
WORDST   CTF  Converts a WordStar document for Symphony.
WRDPRF   WRK  Use Word Proof in conjunction with Symphony.
SEARCH   APP  Searches spreadsheet for specific character.
HEX2DE   WRK  Converts hexadecimal to decimal numbers and vice versa.
CALC2    WRK  Calculates elapsed calendar and business days between two dates.
WNDWSY   WRK  Simulates 123 window synchronization capability.
RESICO   WRK  Returns metric values of resistance and tolerance of resistors.
MPLAN    APP  Imports Multiplan data into Symphony.
SEARCH   WRK  Worksheet using search capability.
SEARCH   PRN  Printable documentation on search capability.
SEARDOC  WRK  Worksheet format Search documentation.
SKPROB   WRK  How to use SideKick with Symphony.
ADDRMAC  WRK  Create an address book.
APPTMENT WRK  An appointment and time management system.
DUALDS   WRK  Install Symphony with two monitors
DEMO     WRK  Demonstration file.
FLIPPER  APP  Data mover extension.
LABELS   WRK  Produces labels based upon a mailing list.
LEEVFORM WRK  Offers an important macro concept using {get}.
MACRO1   WRK  Demonstration macro.
MOVIE    WRK  Use Symphony to display moving graphics.
ORD_ENT  WRK  Uses almost all Symphony commands for order-entry program.
USERTIPS DOC  Protocols for use of some of these capabilities.
 
PC-SIG (SOFTWARE INTEREST GROUP)
1030 D DUANE AVE.
SUNNYVALE CA., 94086
PH# 408-730-9291
 
 
```
{% endraw %}

## NOTES587.TXT

{% raw %}
```
Program name: SYMPHONY WORD PROCESSING TIPS & MACROS      
 
Author name:  WORD OF LOTUS 
 
Program Description:

WORDST.CTF is a character translation file that converts Wordstar files by
importing them character by character using the Symphony File Import Text
command. 

WRDPRF.WRK is an add-in MACRO to be used with Symphony and Word Proof. The 
macro will invoke Word Proof to check the spelling of a portion or all of
a document. 

TWOCOL.WRK contains a two-column document example, where a newsletter-type
presentation is developed with two DOC windows side-by-side.  A print range is
included. 

SEARCH.APP demonstrates how to search a worksheet for a specified character
through the use of an Add-In. 

HEX2DE.WRK is a handy little utility which converts Hexadecimal values to
Decimal equivalents and vice versa.

CALC2.WRK calculates the elapsed calendar and business days between two dates
entered in Symphony @DATE format.  The worksheet computes the elpased business
days to the following Monday when the second date falls on a weekend.

WNDWSY.WRK simulates 1-2-3 window synchronization capability. Every time return
is pressed, the macro evaluates the cursor position. If there is no change,
nothing happens, if the row has changed, the cursor goes to the other window
and brings that row to the window.

RESICO.WRK will prompt the user for color codes found on resistors resistors 
and return resistance and tolerance in metric. 

MPLAN.APP is a Symphony Data Model Add-In that allows an unrefined transfer of
data from a Multiplan(tm) SYLK file directly to Symphony cells, and from a 
range of cells to a SYLK file.  Formula conversion is not done. 

ADDRMAC.WRK is an address book which makes extensive use of the Symphony
Command Language.

APPTMENT.WRK contains an appointment and time manager written in the Symphony 
Command Language.

DUALDS.WRK is a condensed version of a product support note which was mailed
to Symphony users who experienced difficulty using Symphony on an IBM PC with
two monitors.

LABELS.WRK manages a mailing list for intelligent printing of labels. It makes
extensive use of the Symphony Command Language.

LEEVFORM.WRK contains an example of how a user can exit a FORM without leaving
the macro by trapping keystrokes within a Symphony FORM window.

MOVIE.WRK generates moving graphics.

ORD_ENT.WRK is a prototype order entry system which makes use of menus, forms,
and multiple databases.  It is an excellent example of screen control and user 
management with the Symphony Command language.

System requirements are an IBM or compatible PC with 512K, a monochrome or
Color Board, two disk drives, the Symphony program disk, and an IBM compati-
ble 80 column printer.
```
{% endraw %}

## USERTIPS.DOC

{% raw %}
```

WORDST.CTF is a character translation file which converts Wordstar files by 
importing them character by character using the Symphony File Import Text
command.  To use, specify the use of the translation file by pressing 
{SERVICES}, select Configuration Other File-Translation Custom, and point to
the WORDST.CTF file.  Next use {SERVICES} File Import Text to import the 
Wordstar file.

TWOCOL.WRK contains a two-column document example, where a newsletter-type 
presentation is developed with two DOC windows side-by-side.  A print range is
included.  Press the window key (F6) three times to view all three windows.  
Hard spaces are included, which were produced with the {COMPOSE} key.

MPLAN.APP is a Symphony Data Model Add-In that allows an unrefined transfer of
data from a Multiplan(tm) SYLK file directly to Symphony cells,and from a range
of cells to a SYLK file.  Formula conversion is not done. Press {SERVICES}, 
select Application Attach MPLAN.APP,and then look at the File Import and Xtract
menus for proper use.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0587

     Volume in drive A has no label
     Directory of A:\

    ADDRMAC  WRK     39817  10-19-84  10:17p
    APPTMENT WRK     22627   8-01-84  12:42p
    CALC2    WRK      5376   1-01-80   4:33p
    DEMO     WRK      9418   7-30-84  11:05a
    DUALDS   WRK      2678   8-24-85  10:44p
    FILES587 TXT      1882   8-16-86   3:55p
    FLIPPER  APP     15104   9-05-84   9:38a
    GO       BAT       373   1-03-80   2:40a
    HEX2DE   WRK      1920  11-15-84   9:23p
    LABELS   WRK     10758   8-25-85   2:13p
    LEEVFORM WRK      2399   5-26-84   9:48a
    MACRO1   WRK     14016   7-31-84  11:47p
    MOVIE    WRK      2352   6-15-84   2:30p
    MPLAN    APP     14336   8-29-84   1:42p
    NOTES587 TXT      2786   1-03-80   1:36a
    ORD_ENT  WRK     33034   7-27-84  11:49a
    RESICO   WRK      4224   1-01-80   4:21a
    SEARCH   APP      9216   1-01-80   4:36a
    SEARCH   PRN      2688   1-01-80   4:41a
    SEARCH   WRK      1920   1-01-80   4:44a
    SEARDOC  WRK      3560   8-24-85   8:19p
    SKPROB   WRK      2369   8-24-85  10:21p
    TWOCOL   WRK      4096   2-14-85  12:12p
    USERTIPS DOC      1053   1-03-80   2:37a
    WNDWSY   WRK      3840  11-12-84  10:34p
    WORDST   CTF       512   2-14-85  12:09p
    WRDPRF   WRK      5371   8-25-85   3:07p
           27 file(s)     217725 bytes
                           92160 bytes free
