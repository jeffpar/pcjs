---
layout: page
title: "PC-SIG Diskette Library (Disk #523)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0523/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0523"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIDE WRITER"

    Are your spreadsheets too wide to print in one piece?  Have you had to
    resort to cut-and-paste methods to tie your outline together?  Try
    SIDEWRITER.
    
    SIDEWRITER lets printers output sideways on paper.  This lets you print
    reports and other materials that do not fit across a page, because it
    prints down the length of the sheet instead of across the width.  It
    works much like SIDEWAYS.
    
    SIDEWRITER prints existing text sideways, allowing unlimited print
    width.  Spreadsheet columns can be printed on one continuous page.  The
    function keys and menus make it easy to learn and use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES523.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  523  SIDE WRITER version 3.01                               v1.5
---------------------------------------------------------------------------
SIDEWRITER is a program that allows printers to output sideways on paper.
This allows the printing of reports and other materials that do not fit
in the number of columns allowed across a page, because it prints down
the length of the sheet instead of across the width.  It works much like
the commercial program SIDEWAYS.  The program is written in PASCAL and
the source code is provided with the package.
 
SAMPLE   PRN  Sample 123 print file
SAMPLE   WKS  Sample 123 worksheet
SIDEWRIT COM  Sidewriter MAIN program.
SIDEWRIT DOC  Sidewriter Documentation file.
README        Instructions for getting started.
 
PC-SIG
1030D East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
(c) copyright 1986,87 PC-SIG
```
{% endraw %}

## NOTES523.TXT

{% raw %}
```
Program name:         SIDE WRITER
 
Author name:          Robert W. Dea
Address:              P O Box 968, Fremont, CA 94537
 
Suggested Donation:   $ 15.00
 
Program Description:  SIDE WRITER is a program designed to print a text file
                      sideways along a page so that a lot more columns than
                      normal can be accomodated. This program would be of
                      interest to people producing large reports or spread-
                      sheets that cannot fit into 80 or 132 columns (across).
 
                      The program will work on text files and the user can
                      configure the program to his system.
 
                      It requires 128 Kb of memory and a single or dual
                      sided floppy disk. Three printers which the author
                      mentions it is compatible with are the IBM, Epson
                      and Thinkjet.
 
```
{% endraw %}

## SIDEWRIT.DOC

{% raw %}
```




















                                               tm
                          S I D E  W R I T E R


















                 (C) Copyright 1985, 1986 DEA Software 




























GENERAL INFORMATION



                               DISCLAIMER

The  Author shall in no event be liable for incidental or  consequential  
damages  resulting  from the use or inability to use these  programs  or 
documentation.   Author  is  not responsible for errors  or  defects  in 
the  programs  or  documentation,  even  if Author have been notified of 
same. Users will use these programs at their own risk.  

                           PERMISSION TO COPY

The   Author   grants   permission for  clubs   and   other   non-profit 
organizations  to copy these programs and documentation subject to   the 
following conditions:

   1. No  price  is  to  be  charged  for  either  the  software  or 
      documentation.  However a distribution charge not to exceed $6 
      total may be imposed for covering the cost of the diskette.

   2. The software and documentation are not modified in anyway, and 
      both are always distributed together.

   3. Club members are encouraged to send donations to the Author.


                               DONATIONS

If  you find this program to be of value,  your donation to  the  Author 
will be greatly appreciated.  (Suggested donation is $15) 
 
Send checks to:

             DEA Software 
             P.O. Box 968 
             Fremont,  CA 94537  

Users   are encouraged to copy and share this  program.   In  situations 
where a copy cannot be made from other users, a user may request a  copy  
from the Author for a fee of $6 (check made payable  to DEA Software). 















Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 1








INTRODUCTION

Side  Writer  prints existing text sideways,  allowing  unlimited  print 
width.  Spreadsheet columns can be printed on one continuous  page.  The 
function keys and menus make it easy to learn and use.

MINIMUM SYSTEM REQUIREMENTS

  - IBM PC (MONO/COLOR)
  - single or dual floppy discs
  - 128 Kb memory
  - IBM printer / Epson printer / HP ThinkJet printer













































Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 2








USING SIDE WRITER

Before  using Side Writer make sure your printer is turned  on.  

PARAMETER COMMAND LINE

   >SIDEWRIT FILE1 FILE2 FILE3 ...

    The files FILE1, FILE2, FILE3, ... will be printed sideways on 
    your printer using the stored settings. 

INTERACTIVE COMMAND

   >SIDEWRIT 

    The following menu will be displayed 

-----------------------------------------------------------------------------
 Message line
-----------------------------------------------------------------------------


                                                  (tm)
                            S I D E   W R I T E R


   File Name ______________


   Printer mode (IBM/IBM2) IBM_            Start line  (1 - 999)  1___
           
   Printer device          PRN:            Page width  (1 - 750)  80__

   Line spacing  (1 - 8)   1___            Page length (1 -  70)  66__




_______  ________ ________ ________      ________ ________ ________ ________
1-Start  2-Load   3-Load   4-Save        5-       6-       7-Help   8-Exit
  Print   Config   Default  Config
-------  -------- -------- --------      -------- -------- -------- --------















Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 3








DEFINITIONS


The message line displays error messages.


These are the definitions for the fields in the Side Writer menu:

  File Name ....... The text file you wish to print  (example "B:DUMMY.PRN")

  Printer mode .... For selecting the type of printer that you have
                       (IBM/IBM2 - IBM = Low density, IBM2 = High density)
                       (HP  - ThinkJet printer         )

  Printer device .. The printer device configuration (Example "LST")

  Line Spacing .... The spacing between lines measured in      (default =   1)
                    number of dots.                            (maximum =   8)

  Start line ...... The first line of your file to be printed  (default =   1)
                                                               (maximum = 999)

  Page width ...... The number of characters in page width     (default =  80)
                    is equal to maximum columns in your text.  (maximum = 750)

  Page length ..... The number of lines to print in one page.  (default =  66)
                    Used to detect next column in the overflow (maximum =  70)
                    page. 

SideWriter  is  not limited to a maximum print width of  750.  To  print 
wider than 750 columns you must put the excess columns on a new page.  A 
new page will start "Page length" lines down from the "Start line". When 
the columns overflow the margins,  it will print the next and succeeding 
pages  along  side one another making one continuous wide page.  You may 
need to adjust the "Page width" and "Page length" fields in Side  Writer 
menu to compensate for the column that caused the overflow.

These are the definitions of the function keys

  1-Start Print .... Starts printing the text file sideways

  2-Load Config .... Loads previously saved configuration file from disc

  3-Load Default ... Loads the default configuration

  4-Save Config .... Saves the current configuration to a disc file

  5 and 6 .......... Are not used

  7-Help ........... Displays Help menu

  8-Exit ........... Exits the Side Writer program and return to DOS





Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 4








Editing keys

  Return ........... Positions the cursor to the next menu field

  <- (left arrow) .. Moves the cursor left one character position

  -> (right arrow) . Moves the cursor right one character position

  Ins .............. Turns on/off insert mode for the current field,
                     characters are inserted before the cursor position.

  Del .............. The character to the right of the cursor is deleted.

  Back space ....... The character to the left of the cursor is deleted.











































Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 5








Example of a completed form


                                                  (tm)
                            S I D E   W R I T E R


   File Name SAMPLE.PRN____


   Printer mode (IBM/IBM2) IBM_            Start line  (1 - 999)  1___

   Printer device          LST:            Page width  (1 - 750)  240_

   Line spacing  (1 - 8)   1___            Page length (1 -  70)  66__




_______  ________ ________ ________      ________ ________ ________ ________
1-Start  2-Load   3-Load   4-Save        5-       6-       7-Help   8-Exit
  Print   Config   Default  Config
-------  -------- -------- --------      -------- -------- -------- --------

In  the above example the file SAMPLE.PRN will be printed sideways on  a  
IBM printer using low density,  for high density use IBM2. There will be 
only 1 dot spacing between  print lines. It will start printing starting 
in  the  1st   line  of the file.   The input files page  width  is  240 
characters and it will print 66 lines  per page.




























Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 6








PRINTING LOTUS 123 SPREEDSHEETS SIDEWAYS

Since  Side Writer can only print text files you must have a spreadsheet 
program,  such as Lotus 123,  to create a text file by using the  /Print 
File command.

Note!!  You  must  use the "Unformated" print option to make  Lotus  123 
adopt an infinite page length.
 
Lotus  123 will allow you to create a text file with a maximum width  of 
240  characters.  You can control this by setting the Left/Right margins 
using  the /Print Options Margins command. You can also control the page 
length  by using the /Print Options Page-Length command.

Side  Writer's default settings are a page width of 80 characters  and a 
page length of 66 characters.

With Side Writer you can print as many columns as you wish,  you are not  
limited  to a maximum width of 240 characters.  In Lotus  123,  if  your 
print range is too wide for the current margin settings,  two things can 
happen:

     1. If the column fits within the range but a long label spills over
        the margin, the label is truncated to fit within the margin.

     2. If the columns overflow the margins, Lotus 123 places the excess
        columns on a new page.

Side Writer handles situation 2.  When the columns overflow the margins, 
it  prints the next and succeeding pages along  side one another  making 
one continuous wide page. You may need to make adjustments to the "Left" 
and  "Right"  margins  in Lotus 123 and/or the "Page  width"  and  "Page 
length"  fields  in Side Writer menu to compensate for the  column  that 
caused the overflow.

You must take into account any /Print Options that affect the width   or 
length  of the text file.  These options must be taken into account when  
specifying the "Left" and "Right" margins in Lotus 123 and/or the  "Page 
width" and "Page length" fields on the Side Writer menu.

See  the Lotus 123 manual for complete instructions on specifing  /Print 
options.



OTHER SPREEDSHEETS

See  the section on printing to a text file in you  spreedsheet  manual. 

Note!!  Make  sure  that no control characters are included in the  text 
file.


 



Side Writer (tm)     (C) Copyright 1985, 1986 DEA Software   Page 7






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0523

     Volume in drive A has no label
     Directory of A:\

    FILES523 TXT       967   4-07-87   8:27a
    GO       BAT        14   4-07-87   8:28a
    NOTES523 TXT       955   4-07-87   8:30a
    README             446   3-25-87  11:01p
    SAMPLE   PRN      2048   1-01-80  12:02a
    SAMPLE   WKS      5248   4-30-85   1:34a
    SIDEWRIT COM     28733   3-23-87  11:34p
    SIDEWRIT DOC     10240   3-23-87  12:05a
            8 file(s)      48651 bytes
                          110080 bytes free
