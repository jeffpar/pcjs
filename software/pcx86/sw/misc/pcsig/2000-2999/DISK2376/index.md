---
layout: page
title: "PC-SIG Diskette Library (Disk #2376)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2376/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2376"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOFTWARE SALES TRACKER"

    SOFTWARE SALES TRACKER is designed for software authors who sell and
    distribute their own products directly to the PC user. It assists by
    keeping track of the Who, What, Where, Why, and How Much involved in the
    sale of most products. Get the most mileage out of your
    program distribution dollar.
    
    If used properly, SOFTWARE SALES TRACKER can save you a great deal of
    time, effort, and money. Organize your sales and program distribution
    into an intelligent and productive tracking system. As well as
    keeping track of registered users, you will come to know "Who is"
    producing sales for you and "Who is not."
    
    SOFTWARE SALES TRACKER will organize your sales into a separate file
    for each different product. Switching files is fast and easy, through
    directory Pop-Up windows. As new entries are made, SOFTWARE SALES
    TRACKER will automatically issue a unique product serial number for
    each item sold. It will keep track of quantities sold, customer
    addresses, telephone numbers, product serial numbers, product
    versions or models, prices charged, shipping charges, sales tax, and
    the dates sold and paid (as well as Purchase Orders and check numbers).
    
    Automatically patch any of your .EXE files with your customer name,
    date of sale, and registered serial number. Print options include
    customer statements, customer information, disk and mailing labels, and
    income statements.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SAMPLE.BAS

```bas
DEFINT A-Z

	' Sample program on how to set up your code for using "SSTPATCH.EXE"
	' MicroSoft Quick Basic format

	'******************** YOUR BASIC PROGRAM **********************
	CLS
	PRINT "LET'S PRETEND THIS IS THE FIRST LINE OF YOUR MAIN SOURCE CODE"
	'
	' The 'body' of your main program's source code
	'           would be placed in here.
	'                Many, many
	'                     lines long.
	'
	PRINT "LET'S PRETEND THIS IS THE LAST LINE OF YOUR MAIN SOURCE CODE"
	GOSUB ShowPatch          'REM to display the new patch.
	CLOSE : END: SYSTEM
	'****************** END OF YOUR PROGRAM ***********************

	' Now, after the last line of code in your main program module,
	' insert the following "DATA" lines. No need to leave blank lines
	' between entries like we did (for clarity), but other than that
	' make the entries EXACTLY as we have them. When "messing" with
	' binary stuff, character counting is "everything".

	' Caution! NO TRAILING "SPACESBARS" OR CHARACTERS AFTER DATA ENTRIES!

	DATA "Customer_Name_And_Number"

	DATA "123456789012345678901234567890"
															'REM 30 Characters
	DATA "1234567890"
															'REM 10 Characters
	DATA "12345"
															'REM  5 Characters

	' That's all there is to it. Now compile and link your source code
	' into an "EXE" file, and then run "SSTPATCH.EXE". The entries in the
	' above "DATA" statements will be replaced with your customer's data.
	' You can then view the patch with any good binary editor, or simply
	' add something like the commands in "ShowPatch" to your source code
	' to display the patched variables on one of your program's screens.
	'
	' Once the above DATA lines are in place, you can patch the same EXE
	' file over and over again with different information as many times
	' as you wish. The System Date is always used, so set your calender.

ShowPatch:
	' To display the patched data on screen, you could do something like....
	READ X$, NAME$, DT$, SER$
	PRINT
	PRINT "'SAMPLE.EXE' - THE PATCHED ENTRIES ARE...."
	PRINT
	PRINT "Customer's Name: "; NAME$
	PRINT "Date Of Transaction: "; DT$
	PRINT "Product Serial #: "; SER$
	RETURN

'The file called "SAMPLE.EXE" is a compiled version of this source code.
'Try SSTPATCH to patch SAMPLE.EXE to see how all of this works.

'**********************************************************************
'
'Note: Common reasons why an EXE file won't work after a patch:
'
'  -  You used a punctuation mark in your "CUSTOMER NAME"  entry.
'           Some of these characters will cause problems,  others work
'           just fine. The first time you try to patch a program, don't
'           try  to  get fancy - Just enter  Alpha/Numeric  characters.
'
'  - You left trailing "spacebars" at the end of the "DATA" lines.
'          There must be NO other characters of any kind after the last
'          quote mark on any "DATA" line entry (not even a REMark).
'
'  - You didn't enter the "DATA" lines EXACTLY as we show them in
'          the examples in "SAMPLE.BAS". If you are using Quick Basic,
'          load "SAMPLE.BAS" along with your own program, and then
'          "copy" the data lines from Sample.Bas to your program with
'          Quick Basic's "Cut & Paste" feature.
'
'************************************************************************

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2376

     Volume in drive A has no label
     Directory of A:\

    TSST20   TXT      3089   3-10-90
    TSST20   REQ      1466   3-10-90
    TSST20   ZIP    171758   3-10-90
    UPDATE   DOC      3871   3-13-90   5:08p
    GO       BAT        24  10-03-90   1:40a
    GO       BAK      1116  10-03-90   1:00a
    FILE2376 TXT      3183  10-04-90  12:30p
    GO       TXT      1116  10-04-90   4:31a
            8 file(s)     185623 bytes
                          131072 bytes free
