---
layout: page
title: "PC-SIG Diskette Library (Disk #568)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0568/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0568"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS UTILITIES"

    Lotus Utilities (not affiliated with LOTUS Corp.) is a mixed-bag
    selection of worksheets and utilities.  OPTIONZ.WKS is a useful
    stock option program, with tables for calculating profit by option,
    buying/selling long or short, and more.  NEWCOLOR.IN is a utility
    to enhance the color performance of LOTUS 1-2-3.  Also included
    are utilities for archiving and unarchiving 1-2-3 worksheets, a
    program that sets up a 640k RAM disk, and a program for adding
    text to numeric cells.  Another utility (123DOC.WKS) prints out
    worksheets with readable formulas.  Finally, there is a 1985 Federal
    Tax template, complete with documentation.
    
    System Requirements:  256K, two disk drives, monochrome display,
    LOTUS 1-2-3 v2.0
    
    How to Start:   Access through LOTUS 1-2-3
    
    File Descriptions:
    
    123DOC   ARC  Archived file - Documentation Utility
    ARC      EXE  Archive Utility Program
    123RANGE EXE  Spreadssheet file print Utility Program
    123PREP  ARC  Archived file - Text file to Lotus Prep Utility
    123EGA   ARC  Archived file - Extended Graphics Adapter Utility
    TRYVM123 COM  Virtual memory system for 1-2-3 Release 2.0
    UNARC    TXT  Directions on expanding archived files on disk
    OPTIONZ  WKS  LOTUS worksheet - Stock Options
    NEWCOLOR IN   Program to change display colors for LOTUS 1-2-3
    NEWCOLOR DOC  Text file - Documentation for NEWCOLOR.IN
    FEDTAX85 WKS  LOTUS worksheet - Federal Income Tax for 1985
    FEDTAX85 DOC  Text file - Documentation for FEDTAX85.WKS
    CLRJET   ARC  Archived file - IBM Color Jet Printer Drivers
    TRYVM123 DOC  Documentation for  TRYVM123
    WKS-FRMT TXT  Worksheet files format
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 123DOC.BAS

{% raw %}
```bas
 105    ' ********* BASIC version of RatBas program ********** 
 110     DefInt i-n 
 115   'basica defs
 120   defint a-z
 125   dim cols$(110),rows$(60),table(60,100),cells$(1010)
 130   dim cols.w(110)
 135   '
 140   '
 145    GO TO 25000 ' jump to program 
 200    '----------------------- PROCEDURE SET.SCREEN
 205   cls
 210   locate 25,5:print "Press [esc] to terminate run"
 215   locate 1,1: print "Documentation of ";infile$
 220   locate 05,5:print "cells present for rows";rp*ipc+1;" to";rp*ipc+rp
 225   pset (33,49): draw "r530d110l530u110"
 230    RETURN ' ------------------------------------------
 235   '
 240   '
 300    '----------------------- PROCEDURE FILLER
 305   '
 310   'fills in the column letters A thru CZ
 315   for i=1 to 26: cols$(i	 )=  chr$(64+i): next i
 320   for i=1 to 26: cols$(i+26)="A"+cols$(i): next i
 325   for i=1 to 26: cols$(i+52)="B"+cols$(i): next i
 330   for i=1 to 26: cols$(i+78)="C"+cols$(i): next i
 335   nc=4*26
 340    RETURN ' ------------------------------------------
 345   '
 350   '
 355   '
 360   '
 400    '----------------------- PROCEDURE READ.LINE
 405   '
 410   'this procedure reads one lin from the lotus doc file and decodes
 415   'it to address and contents
 420   '
 425   IF NR=0 AND LIN<>0  THEN ELSE GO TO  445
 430       lin$=old.lin$			    'restore last line from old page
 435       lin=lin-1
 440    GO TO   465
 445    ' ELSE] 
 450       input #1, lin$			    'get new line
 455       old.lin$=lin$			    'save last line for next page
 460       lin=lin+1
 465    ' IFEnd] 
 470   '
 475   ic=instr(lin$,":")
 480   IF IC<>0  THEN ELSE GO TO  550
 485   				       'remove row/col chars and store
 490       row$="": col$=""
 495       for i=1 to ic-1
 500   	c$=mid$(lin$,i,1): ichar=asc(c$)
 505   	IF ICHAR>64 AND ICHAR<91  THEN ELSE GO TO  520
 510   	    col$=col$+c$		'alphabetic
 515    GO TO   530
 520    ' ELSE] 
 525   	    row$=row$+c$		'numeric
 530   	 ' IFEnd] 
 535       next i
 540   				       'remove cell contents always getting at least a :
 545       cell$=mid$(lin$,ic)
 550    ' IFEnd] 
 555    RETURN ' ------------------------------------------
 560   '
 565   '
 570   '
 575   '
 600    '----------------------- PROCEDURE STORE.CELL
 605   '
 610   'this procedure stores the row/col/cell info in table/list
 615   'constructing a row/col index as it goes to fill a 55 by 100 matrix
 620   '
 625   'find the row and col
 630   '
 635   ir=0
 640   for i=1 to nr
 645       if row$=rows$(i) then ir=i
 650   next i
 655   if ir=0 then nr=nr+1:rows$(nr)=row$:ir=nr
 660   jc=0
 665   for j=1 to nc				'fixed column letters
 670       if col$=cols$(j) then jc=j
 675   next j
 680   '
 685   'store the cell
 690   if max.cols<jc then max.cols=jc
 695   ncell=ncell+1
 700   table(ir,jc)=ncell
 705   cells$(ncell)=cell$
 710   colw=len(cell$): if colw>cols.w(jc) then cols.w(jc)=colw
 715   '
 720   pset(33+5*jc,49+2*ir)
 725   locate 1,35: print "Page..";ipc+1;" Rows..";ir;" Cols..";Max.cols;" cells..";ncell
 730   '
 735    RETURN ' ------------------------------------------
 740   '
 745   '
 750   '
 755   '
 760   '
 800    '----------------------- PROCEDURE PRINT.TABLE
 805   '
 810   '
 815   'this procedure prints the table in pages accross the table 100 cols/page
 820   ' with ncell.colw cols/cell, overlapping
 825   '
 830   'compute np the # of pages accross the table, and ncols/page
 835   ncols=int(max.chars/ncell.colw)-1      '# of columns this page
 840   if ncols=0 then ncols=1
 845   np=int(max.cols/ncols+1)
 850   '
 855   nr=nr-1 			       'drop last line for next page
 860   				       'page loop
 865   ipc=ipc+1			       'overall page count
 870   for ip=1 to np			       'slice count
 875   '
 880       lprint chr$(12),chr$(15)	       'compressed characters
 885   '
 890       lprint tab(15);"Date: ";date$;tab(max.chars-15);"Page:";ipc;"/";ip
 895       lprint chr$(14),tab(5+max.chars/8);"Documentation for ";infile$
 900       lprint tab(15);string$(max.chars,"-")
 905   					    'col headers
 910       lin$=string$(max.chars," ")
 915       for jj=1 to ncols
 920   	j=(ip-1)*ncols+jj
 925   	mid$(lin$,jj*ncell.colw)=cols$(j)+"["+str$(cols.w(j))+"]"
 930   	cols.w(j)=0
 935       next jj
 940       mid$(lin$,1)="Col[width]"
 945       lprint tab(15);lin$
 950       lprint tab(15);string$(max.chars,"-")
 955   				       'row loop
 960       for i=1 to nr
 965   	multiple.row=true
 970   	while multiple.row
 975   	    multiple.row=false
 980   	    lin$=string$(max.chars," ")
 985   	    mid$(lin$,4)="&"+rows$(i)
 990   	    ib=1		       'normal no. of blank cells
 995   	    for jj=ncols to 1 step -1
 1000   		j=(ip-1)*ncols+jj
 1005   		k=table(i,j)
 1010   		IF K<>0  THEN ELSE GO TO  1035
 1015   		    mid$(lin$,jj*ncell.colw,ib*ncell.colw)=cells$(k)
 1020   		    cells$(k)="&  "+mid$(cells$(k),ib*ncell.colw+1)
 1025   		    ib=1
 1030    GO TO   1045
 1035    ' ELSE] 
 1040   		    ib=ib+1	       'multiple cell possible
 1045   		 ' IFEnd] 
 1050   		if len(cells$(k))<4 then table(i,j)=0 else multiple.row=true
 1055   	    next jj
 1060   	    if not multiple.row then mid$(lin$,4)=" "
 1065   	    lprint tab(15);lin$
 1070   	wend
 1075       next i
 1080       lprint
 1085       status$=inkey$
 1090       IF STATUS$=CHR$(27)  THEN ELSE GO TO  1100
 1095       end
 1100        ' IFEnd] 
 1105   next ip
 1110    RETURN ' ------------------------------------------
 1115   '
 1120   '
 1125   '
 1130   '
 1135   '
 25000    ' =================== PROCEDURE LOCATIONS ===========
 25005    '  200 SET.SCREEN
 25010    '  300 FILLER
 25015    '  400 READ.LINE
 25020    '  600 STORE.CELL
 25025    '  800 PRINT.TABLE
 25030    ' ================== PROGRAM ======================== 
 25035    false = 0: true = not false 
 25040   '
 25045   cls: width "lpt1:",255
 25050   screen 2				'use hi res graphics 200 x 640
 25055   locate 2,1
 25060   '
 25065   print tab(5);"123-DOC: version 1.0"
 25070   print tab(5);"A program to list a 123 documentation file as cells"
 25075   '
 25080   pset(1,1):draw "R500D30L500U30"
 25085   pset(9,1):draw "R500D30L500U30"
 25090   '
 25095   locate 6,1
 25100   print tab(5);"Cell width for print-out 5-100 (15)....";:input ncell.colw
 25105   if ncell.colw=0 then ncell.colw=15
 25110   if ncell.colw<5 then ncell.colw= 5
 25115   if ncell.colw>100 then ncell.colw=100
 25120   print tab(5);"Page width for print-out (132).........";:input max.chars
 25125   if max.chars=0 then max.chars=132
 25130   print tab(5);"Rows per page for printout (40)........";:input rp
 25135   if rp=0 then rp=40
 25140   '
 25145   locate 20,1:files "b:*.prn"
 25150   infile$=""
 25155   while infile$=""
 25160       locate 15,5
 25165       input "Name of lotus file (b:........prn).....";infile$
 25170   wend
 25175   '
 25180   if instr(infile$,":")=0 then infile$=left$("b:"+infile$,11)
 25185   if instr(infile$,".")=0 then infile$=left$(infile$+".prn",14)
 25190   '
 25195   close
 25200   open infile$ for input as #1
 25205   lin=0: ipc=0: nr=0: nc=104: max.cols=0:ncell=0
 25210   '
 25215   					'load column tags
 25220   GOSUB  300 ' FILLER
 25225   					'set up the screen display
 25230   GOSUB  200 ' SET.SCREEN
 25235   '
 25240   while not eof(1)
 25245    GOSUB  400 ' READ.LINE
 25250       status$=inkey$
 25255       if status$=chr$(27) then end
 25260   					'ic=0 implies blank line
 25265   IF IC<>0 THEN GOSUB  600 ' STORE.CELL
 25270   					'assume 50 lines/page+1
 25275       IF NR=RP+1 OR NCELL>1000  THEN ELSE GO TO  25295
 25280   	GOSUB  800 ' PRINT.TABLE
 25285   	nr=0:ncell=0			'clear table
 25290   	GOSUB  200 ' SET.SCREEN
 25295        ' IFEnd] 
 25300   wend
 25305       beep
 25310       print"end of file found"
 25315    GOSUB  800 ' PRINT.TABLE
 25320   close
 25325   '
 25330   end
```
{% endraw %}

## 123EGA.DOC

{% raw %}
```
  INSTRUCTIONS FOR INSTALLING IBM ENHANCED GRAPHICS ADAPTER DRIVERS

 Before you can use the install program, you must run the E.BAT file.
 This will rename the files so that the install program will operate
 properly.

 Put your disk with the downloaded files into drive A.  Be certain that
 you have an A prompt. At the A prompt, type E and hit the RETURN key.
 When the batch file is complete, you may proceed with the following
 instructions.

 **********************************************************************

 What you will need

 You must have a Disk which contains the following files:

        EGA.BAT
        IBM0EGA.DRV
        IBM1EGA.DRV

 How to use

 To install the EGA drivers, perform the following steps:

 Two-Diskette System

 1. Start your computer with DOS.
 2. Put the Disk that contains the above files in drive A, and the 1-2-3
    Utility Disk in drive B.
 3. At a DOS A prompt, type COPY *.* B: and press RETURN.
 4. Remove the Disk from drive A, and replace it with the
    1-2-3 Utility Disk.
 5. At a DOS A prompt, type EGA B: and press RETURN.  Follow the screen
    prompts.
 6. At a DOS A prompt, start 1-2-3 as usual and enjoy your new colors
    with the IBM Enhanced Graphics Adapter.


 Hard-Disk System

 1. Start your computer with DOS.
 2. Put the Disk that contains the above files in drive A, and make drive
    A the current directory, type A: and press RETURN.
 3. Type COPY *.* pathname and press RETURN.

    For pathname, use the name of your hard disk and your 1-2-3
    directory.  For example, if you have a hard disk called drive C, and
    your 1-2-3 files are in a directory called LOTUS, type COPY *.*
    C:\LOTUS.
 4. Change the current drive to the drive that contains your 1-2-3
    directory, ie C: and RETURN.  Change to your 1-2-3 directory.  For
    example CD\LOTUS if your directory is LOTUS.
 5. At a DOS prompt within the directory of your 1-2-3 files, type EGA.
    Follow the screen prompts.
 6. At a DOS prompt, start 1-2-3 as usual and enjoy your new colors with
    the IBM Enhanced Graphics Adapter.

```
{% endraw %}

## FEDTAX85.DOC

{% raw %}
```


  FEDTAX85.WKS is a Lotus 1-2-3 template that contains the following
               Federal tax forms and schedules:


              FORMS ------ 1040,2106,2441,5695,4562
              SCHEDULES -- A,B,C,D,E,W

  NOTE: This version (10/3/85) uses the 1984 tax forms, BUT is also
        uses the 1985 tax tables, so all computations are accurate
        for the 1985 tax year.


  This template requires 192k of memory and will run on any version
  of Lotus 1-2-3. If other spreadsheet programs can read and trans-
  late Lotus WKS files, then this template should work with them.

  To use the FEDTAX85 worksheet simply enter your tax information
  on the appropriate schedules and forms. The worksheet is protected
  so you need not worry about overlaying any formulas, etc. When
  all data is entered, simply press PF9 to do the final computation.

  FURTHER NOTES:

       1: Make sure you enter your salary information onto Schedule
          'W' if you need to use this schedule. This information is
          NOT picked up automatically from Form 1040.

       2. Enter the number of exemptions and your filing status in the
          areas provided at the top of Form 1040. All zero bracket 
          amounts, dividend exclusions, etc. will be automatically
          calculated with this data. Tax Rate schedules X (Single), Y
          (Married,etc) and Z (Unmarried Heads of Household) are pro-
          vided. If you file 'Married Filing Separate Returns', then
          you must override the tax computation formula on line 38 of
          Form 1040.

       3. The only difference between this early version of FEDTAX85
          and the one that will be available in early January of 1986
          is the detail of the forms themselves. Although FEDTAX85.WKS
          uses 1984 forms, it is unlikely that these forms will change
          greatly when the 1985 forms are available in late December.
          Therefore, FEDTAX85.WKS will still be useful to do monthly 
          or quarterly 1985 Federal tax liability analysis.

       4. Depreciation from Form 4562 for other than real estate will
          need to be entered on the appropriate tax form manually. All
          depreciation for rental housing or most other 15 year proper-
          ties will be automatically carried to Schedule E. However,the
          depreciation for 3 or 5 year capital properties will need to 
          be entered on your particular tax return wherever you deem
          appropriate. For example, the depreciation for your PC as 5
          year Capital Equipment could be carried forward to Schedule
          A, Line 24 and entered as a Miscellaneous Deduction.


```
{% endraw %}

## FILES568.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  568  LOTUS UTILITIES                                      v1  DS2
---------------------------------------------------------------------------
123DOC, 123EGA, 123PREP, and CLRJET have been provided on this disk in an
archived form in order to save space and to keep the files together.
 
This disk contains utitlites to print your spreadsheet formulas on paper in a
readable format.  You can also use and EGA card with your Lotus Programs.
You can even convert a text file into a format that can be read from the Lotus
program, great for combining numbers with text
 
TRYVM123.COM is a utility program that sets up a 640K virtual memory
system for 1-2-3 Release 2.0.
 
123DOC   ARC  Archived file - Documentation Utility
123EGA   ARC  Archived file - Extended Graphics Adapter Utility
123PREP  ARC  Archived file - Text file to Lotus Prep Utility
123RANGE EXE  Spreadssheet file print Utility Program
ARC      EXE  Archive Utility Program
CLRJET   ARC  Archived file - IBM Color Jet Printer Drivers
FEDTAX85 DOC  Text file - Documentation for FEDTAX85.WKS
FEDTAX85 WKS  LOTUS worksheet - Federal Income Tax for 1985
NEWCOLOR DOC  Text file - Documentation for NEWCOLOR.IN
NEWCOLOR IN   Program to change display colors for LOTUS 1-2-3
OPTIONZ  WKS  LOTUS worksheet - Stock Options
UNARC    TXT  Directions on expanding archived files on disk
TRYVM123 COM  Virtual memory system for 1-2-3 Release 2.0
TRYVM123 DOC  Documentation for  TRYVM123
WKS-FRMT TXT  Worksheet files format
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NEWCOLOR.DOC

{% raw %}
```
                            NEWCOLOR

                          Bob Mikkelsen

The file, "NEWCOLOR.IN", is used as a redirected input file for 
the DEBUG program.  It causes the creation of two new LOTUS 123 
text driver files that feature more imaginative use of color in 
123 for those using 123 with a color monitor.

To create these drivers, type: DEBUG <NEWCOLOR.IN.  This assumes 
that that you are using DOS 2.0 or higher and that the files, 
DEBUG.COM, NEWCOLOR.IN, and IBM0COLO.DRV reside on the default 
drive and default directory.  It creates two files, TDCOLOR1.DRV 
and TDCOLOR2.DRV, on the same drive and directory.

When you get your new files, you can try each out by copying it 
into TD.DRV on your 123 program directory.  I have only tested 
this with version 1a of 123.  I don't know the results when 
trying this with the earlier version.  As a word of caution I 
suggest that whenever you do any kind of program patching like 
that being done here, always have your files backed up!

```
{% endraw %}

## NOTES568.TXT

{% raw %}
```
 
Program name: LOTUS UTILITIES
 
Author name:  VARIOUS
Address:      VARIOUS
              VARIOUS
 
Suggested Donation: See documentation for individual programs
 
Program Description:
 
123DOC, 123EGA, 123PREP, and CLRJET have been provided on this disk in an
archived form in order to save space and to keep the files together.
123DOC Allows the user to print a 123 worksheet with the formulas in human-
readable form.  123EGA contains utilities to install an Extended Graphics
Adapter board.  123PREP allows the user to configure a standard text file into
columns that Lotus 123 can import into a worksheet.  CLRJET provides drivers
for IBM Colorjet Printers.
 
TRYVM123.COM is a utility program that sets up a 640K virtual memory
system for 1-2-3 Release 2.0.  It gives 640K of expanded
memory without the installation of an expanded memory board.  Instead, the
system's fixed disk (or RAM disk) is used for expanded memory data
storage.  Because TRYVM123 physically moves banks of data to and from the disk
(or RAM disk), 1-2-3 Release 2.0's operation will be slower under TRYVM123
than if an expanded memory board were installed.
 
Except where noted, system requirements for most of these programs is at least
256K on any IBM PC compatible.
```
{% endraw %}

## TRYVM123.DOC

{% raw %}
```

TRYVM123 -- A virtual memory system for 1-2-3 Release 2.0
--------    - ------- ------ ------ --- ----- ------- ---

     TRYVM123.COM is a utility program that sets up a 640K virtual memory
system for 1-2-3 Release 2.0.  It gives 1-2-3 Release 2.0 640K of expanded
memory without the installation of an expanded memory board.  Instead, the
system's fixed disk (or RAM disk) is used for expanded memory data
storage.

     Because TRYVM123 physically moves banks of data to and from the disk
(or RAM disk), 1-2-3 Release 2.0's operation will be slower under TRYVM123
than if an expanded memory board were installed.

     TRYVM123.COM and this document file may be freely copied and
distributed, and are intended as a demonstration of a virtual memory
system.  If 1-2-3 runs your application under TRYVM123 with acceptable
speed, you may want to consider ordering Micro VMS, a full-featured
program with some advantages and enhancements over TRYVM123.  Ordering
information is included at the end of this document.



How to Get Going
--- -- --- -----

     To use TRYVM123, you will need 1-2-3 Release 2.0 and an IBM PC/XT/AT
(or compatible) computer with 640K of memory already installed, a fixed
disk, and DOS 2.1 or higher.  You can use TRYVM123 with a RAM disk, such
as the AST Advantage! board running under VDISK or the JRAM-2 board
running under JETDRIVE.  Operation of TRYVM123 with a RAM disk will be
much faster than with the fixed disk in your computer.

     To run TRYVM123:

  1) Copy the TRYVM123.COM file into the fixed disk subdirectory
     containing your 1-2-3 Release 2.0 program files.  The LOTUS.COM,
     123.COM, and 123.CMP files should be in this subdirectory.

  2) Make sure you have at least 640K of free space on your fixed disk, or
     RAM disk (if used).

  3) Put your 1-2-3 Release 2.0 key disk in Drive A: (if your system
     requires its use).

  4) Make current the subdirectory containing your 1-2-3 Release 2.0
     program files and TRYVM123.COM.

  5) Type in

               TRYVM123 [/d]

     (followed by a carriage return) at the DOS prompt, where "/d" is a
     slash followed by an optional drive letter indicating the disk drive
     or RAM disk "drive" that you would like TRYVM123 to use for its data
     storage.  Note that there must be at least 640K of free space on the
     specified drive.  If you would like TRYVM123 to use your default
     drive, do not enter anything after "TRYVM123".

     TRYVM123 will set up its required disk (or RAM disk) files, and will
load and run 1-2-3.  When you Exit 1-2-3, TRYVM123 will erase the files it
created for its own use and return control of the system to you.



The Interrupt 67H Problem
--- --------- --- -------

     TRYVM123 will check the contents of the INT 67H vector, which it needs
to use during its operation.  Hopefully, INT 67H will not be in use by
another driver or program in your system.  If it is, though, the following
message will be displayed:

     "The DOS software interrupt required by expanded memory managers
      (INT 67H) is already in use in this system.  TRYVM123 will take
      control of this interrupt whie you are running 1-2-3 with
      virtual memory, and will restore its original value when you
      exit 1-2-3."

You will then be asked if you wish to continue.  We have not yet identified
all of the software programs or hardware that use INT 67H, but it is
generally safe to proceed with TRYVM123 if you see this message.  If you
are running a RAM disk (which may use INT 67H), we recommend that you
transfer any important data back to disk before running TRYVM123.

     The Compaq -286 series computer places non-zero values at all unused
interrupt vectors, so this message will always appear, and can be ignored.



Some Background Information
---- ---------- -----------

     Because it supports the Lotus/Intel/Microsoft Expanded Memory
Specification, 1-2-3 Release 2.0 can address up to 4 Megabytes of
"expanded memory", over and above the 640K of conventional memory
available in the IBM PC/XT/AT line of computers.  A number of expanded
memory boards designed to this specification, such as the Intel Above
Board and the AST RAMpage board, have recently appeared on the market.

     SYSCOMP's Micro VMS program allows 1-2-3 Release 2.0 to address up to
4 Megabytes of "virtual memory" WITHOUT the use of expanded memory boards.
Instead, it uses the computer's fixed disk (or RAMdisk, if available) to
store data that would normally be stored in an expanded memory board.

     Virtual memory refers to memory that really isn't present, but is
simulated by a fixed disk or other device.  1-2-3 Release 2.0 allows only
64K of expanded memory to be "switched in" at any one time, the rest is
stored in deactivated banks on the expanded memory board(s).  Micro VMS
uses the fixed disk (or boards like the JRAM-2 or the Advantage!) to hold
the data that is not currently switched in.

     The actual bank switching process with an expanded memory board is
very fast.  The Intel Above board takes less than 1/2000 second to switch
in a new bank of memory.  The operation of Micro VMS is slower due to the
disk read and write operations.  Even using the JRAM-2 or the Advantage!
board, blocks of memory are moved from one location to another during a
bank switch, so more time is needed.

     Although the actual bank switching time using Micro VMS is much slower
than the switching time on expanded memory boards, 1-2-3 Release 2.0's
overall performance with virtual memory is better than might be expected,
because 1-2-3 Release 2.0 performs most operations with a minimal number
of bank switches.



The Conventional Memory Problem
--- ------------ ------ -------

     It is possible to get the 1-2-3 "Memory Full" error even if you have
lots of expanded memory still free.

     1-2-3 Release 2.0 uses the expanded memory for data and the
conventional memory for pointers to that data.  In some cases, the
"pointer memory" fills up before the "data memory" does.

     Loading any memory resident programs (like Sidekick or SuperKey)
before running TRYVM123 will aggravate the conventional memory problem.
If you run out of conventional memory, try temporarily removing any memory
resident programs that you are running.

     TRYVM123 itself requires about 70K of conventional memory.  The
full-featured Micro VMS program, although more powerful, actually uses a
bit LESS conventional memory.



Some Tips on Faster Operation with TRYVM123
---- ---- -- ------ --------- ---- --------

  1) Set your Recalculation Method to "Manual".  This is very important
     when running a large application under TRYVM123.  Any operation that
     requires a memory "bank switch" will be slower with TRYVM123 than it
     would be with an expanded memory board involved.  Keep your
     recalculations to a minimum.

  2) Keep your Recalculation Order set to "Natural".

  3) DON'T try to sort a large database while running under TRYVM123.
     Database sorts require a large number of "bank switches".  If you
     work much with databases, we suggest the use of our dB III Import/
     Export programs, which will allow your database processing to be done
     with the powerful dBASE III database program.

     A sample 8,000 record name and address database containing 9 fields
     required over 530,000 bank switches to sort.  The XT/Above Board
     performed this sort in about 12 minutes.  The same sort on the
     AT/Advantage! system (we didn't time it) would take about 2 days!

     Remember, ANY large spreadsheet will take a while to Recalculate.  If
you have an application that is particularly slow running under TRYVM123,
it may not be that much faster with an expanded memory board installed.

     If you are using a physical disk with TRYVM123, and if you see the
disk LED stay on or come on repeatedly during an operation, then you
probably CAN save some time by installing an expanded memory board.  On
the average, you will save about 1/2 second per disk access if you install
an expanded memory board.



Micro VMS -- Who Needs It?
----- ---    --- ----- --

Micro VMS will probably appeal to those who:

   1) have a little more time than money,

   2) don't have any free slots in their computer, but need some expanded
      memory for 1-2-3 Release 2.0,

   3) only have one or two applications that require more memory than
      1-2-3's conventional memory provides, or

   4) have already purchased the JRAM-2 or Advantage! board (or other
      board than can operate as a RAM disk outside the 640K of
      conventional memory), and would like to use this board for 1-2-3
      Release 2.0 expanded memory.



How to Order Micro VMS
--- -- ----- ----- ---

     If your application runs satisfactorily under TRYVM123 but you need
more expanded "memory", you may want to order Micro VMS.  Micro VMS is
SYSCOMP's full-featured virtual memory system.  It allows you to set up as
much as 4 Megabytes of virtual memory for 1-2-3 Release 2.0 or Symphony
Release 1.1.  It will also allow other programs which support the
Lotus/Intel/Microsoft Expanded Memory Specification to use its virtual
memory.

     Micro VMS uses less conventional memory than does TRYVM123, and is
installed slightly differently.  It also loads faster.

     As a registered user of Micro VMS, you will be eligible for technical
support and upgrades as we continue to improve Micro VMS's performance.

     To order Micro VMS, just call SYSCOMP at 619-277-0400.  Micro VMS is
normally in stock, and can be shipped the same day we receive your call.
The price is $75 plus shipping, and quantity discounts are available.  We
can charge your VISA or Master Card, or we can ship UPS C.O.D.



Feedback
--------

   We'd appreciate your comments and suggestions on TRYVM123.  Just call
SYSCOMP's technical support at 619-277-0400 or write us at:

          SYSCOMP
          Technical Support
          8825 Aero Drive (Suite 210)
          San Diego, CA 92123

```
{% endraw %}

## UNARC.TXT

{% raw %}
```
123DOC, 123EGA, 123PREP, and CLRJET have been provided on this disk in an
archived form in order to save space and to keep the files together.
In order to retrieve the files:
 
1) put a blank disk in the B: drive
2) issue the command    B:
3) issue the command    A:ARC X A:123DOC.ARC
 
Repeat for 123EGA.ARC, 123EGA.ARC, 123PREP.ARC, and CLRJET.ARC
 
```
{% endraw %}

## WKS-FRMT.TXT

{% raw %}
```
                           WORKSHEET FILE FORMAT
                                 FROM LOTUS

                      INTRODUCTION AND QUICK REFERENCE

              Copyright(c) 1984, Lotus Development Corporation
                              161 First Street
                       Cambridge, Massachusetts 02142
                               (617) 492-7171
                     Electronic Edition, December, 1984
                            All Rights Reserved























































PREFACE

Lotus Development Corporation's 1-2-3(TM) and Symphony(TM) perform user
selected operations upon a data matrix that is termed a "worksheet".

Worksheet files are such matrices stored on disk.

A worksheet file is an unbroken sequence of binary coded records defining a
single worksheet.

Both 1-2-3 and Symphony accept externally created data files if the files
are in the worksheet file format.  Other programs can decode and process
worksheet files created by 1-2-3 or Symphony.

The following document provides information required to create or access a
worksheet file by describing the records used to create a worksheet file.
It is assumed that the reader is familiar with Lotus products and has ready
access to 1-2-3 or Symphony documentation.

Note that the worksheet files for 1-2-3 and Symphony are similar, but not
necessarily interchangeable.  1-2-3 and Symphony share some record types,
but also have record types unique to that product.  Symphony can read 1-2-3
records, but 1-2-3 cannot read Symphony records.

The information contained in this document has been released into the
public domain and is not considered to be confidential or proprietary
although still the copyright and property of Lotus Development Corporation.
All efforts have been made to ensure that this information is clear and
useful since Lotus will not be providing customer assistance with this
booklet.  Lotus will, however, incorporate any necessary corrections if
they are reported in writing to:

                       Lotus Development Corporation
                       Worksheet File Format
                       161 First Street
                       Cambridge, MA 02142


WORKSHEET FILE FORMAT

Worksheet files are organized as an unbroken sequence of variable length
binary records.  Each record consists of a 4-byte header followed by the
record body. The header defines the record's type and length, as the
example below shows.

The header's composition is as follows:



Byte Number               Byte Description
0,1                       Record type code
2,3                       Record body length (bytes)


Example: Record Header

                              Record Header

                          Record         Record
                           Type          Length

         Byte Number      0    1         2    3
            Hex Code     1C   00        20   00
  Decimal Equivalent       28             32


The record body can be of many different types; most have predetermined
length, but some vary in length.

The record type code is 28.

In a hex dump of the file, the record type appears as 1C 00h, noting that
the 8086/88 stores the most significant byte of word in the higher memory
address.

The record length is 32 bytes.
In a hex dump of the file, the record length appears as 20 00h.


Record types with Column/Row Coordinates

Some record types contain column/row coordinates to identify a cell, or one
of the two points that define a range.  Numbering starts at zero in the
upper left corner of the worksheet.
For example:

                            Cell A1 = column 0, row 0





SUMMARY OF RECORD TYPES

This section describes the different record types found in 1-2-3 and
Symphony.

There are to Quick Reference tables ordered by Opcode and by Product,
followed by a detailed reference section ordered by Opcode.  In the
reference section, there are examples for the more commonly used records.

It is assumed that the reader is familiar with 1-2-3 or Symphony and has
access to Lotus' documentation.

Quick Reference by Opcode

Type       Code (hex)        Length (bytes)         Description

BOF            0                2                   Beginning of file
EOF            1                0                   End of file
CALCMODE       2                1                   Calculation mode
CALCORDER      3                1                   Calculation order
SPLIT          4                1                   Split window type
SYNC           5                1                   Split window sync
RANGE          6                8                   Active worksheet range
WINDOW1        7                31                  Window 1 record
COLW1          8                3                   Column width,
                                                      window 1
WINTWO         9                31                  Window 2 record
COLW2          A                3                   Column width,
                                                      window 2
NAME           B                24                  Named range
BLANK          C                5                   Blank cell
INTEGER        D                7                   Integer number cell
NUMBER         E                13                  Floating point number
LABEL          F                variable            Label cell
FORMULA        10               variable            Formula cell
TABLE          18               25                  Data table range
ORANGE         19               25                  Query range
PRANGE         1A               8                   Print range
SRANGE         1B               8                   Sort range
FRANGE         1C               8                   Fill range
KRANGE1        1D               9                   Primary sort key range
HRANGE         20               16                  Distribution range
KRANGE2        23               9                   Secondary sort key
                                                      range
PROTEC         24               1                   Global protection
FOOTER         25               242                 Print footer
HEADER         26               242                 Print header
SETUP          27               40                  Print setup
MARGINS        28               10                  Print margins code



Quick Reference by Opcode (continued)

Type         code (hex)       Length (bytes)        Description

LABELFMT        29                  1               Label alignment
TITLES          2A                  16              Print borders
GRAPH           2D                  437             Current graph settings
NGRAPH          2E                  453             Named graph settings
CALCCOUNT       2F                  1               Iteration count
UNFORMATTED     30                  1               Formatted/unformatted
                                                      print
CURSORW12       31                  1               Cursor location
WINDOW          32                  144             Symphony window
                                                      settings
STRING          33                  variable        Value of string
                                                      formula
PASSWORD        37                  4               File lockout (CHKSUM)
LOCKED          38                  1               Lock flag
QUERY           3C                  127             Symphony query
                                                      settings
QUERYNAME       3D                  16              Query name
PRINT           3E                  679             Symphony print record
PRINTNAME       3F                  16              Print record name
GRAPH2          40                  499             Symphony graph
                                                      record
GRAPHNAME       41                  16              Graph record name
ZOOM            42                  9               Orig coordinates
                                                      expanded window
SYMSPLIT        43                  2               Nos. of split windows
NSROWS          44                  2               Nos. of screen rows
NSCOLS          45                  2               Nos. of screen columns
RULER           46                  25              Named ruler range
NNAME           47                  25              Named sheet range
ACOMM           48                  65              Autoload.comm code
AMACRO          49                  8               Autoexecute macro
                                                      address
PARSE           4A                  16              Query parse
                                                      information




Quick Reference by Product: 1-2-3 only

Type          Code (hex)         Length (bytes)     Description

SPLIT            4                    1             Split window type
SYNC             5                    1             Split window sync
WINDOW 1         7                    31            Window 1 record
WINTWO           9                    31            Window 2 record
COLW2            A                    3             Column width,
                                                      window 2
NAME             B                    24            Named range
QRANGE           19                   25            Query range
PRANGE           1A                   8             Print range
SRANGE           1B                   8             Sort range
KRANGE1          1D                   9             Primary sort key range
KRANGE2          23                   9             Secondary sort key
                                                      range
FOOTER           25                   242           Print footer
HEADER           26                   242           Print header
SETUP            27                   40            Print setup
MARGINS          28                   10            Print margins code
TITLES           2A                   16            Print borders
GRAPH            2D                   437           Current graph settings
NGRAPH           2E                   453           Named graph settings




Quick Reference by Product: 1-2-3 and Symphony

Type          Code (hex)         Length (bytes)     Description

BOF               0                   2             Beginning of file
EOF               1                   0             End of file
CALCMODE          2                   1             Calculation mode
CALCORDER         3                   1             Calculation order
RANGE             6                   8             Active worksheet range
COLW1             8                   3             Column width
BLANK             C                   5             Blank cell
INTEGER           D                   7             Integer number cell
NUMBER            E                   13            Floating point number
LABEL             F                   variable      Label cell
FORMULA           10                  variable      Formula cell
TABLE             18                  25            Data table range
FRANGE            1C                  8             Fill range
HRANGE            20                  16            Distribution range
PROTEC            24                  1             Global protection
LABELFMT          29                  1             Label alignment
CALCCOUNT         2F                  1             Iteration count
UNFORMATTED       30                  1             Formatted/unformatted
                                                      print
CURSORW12         31                  1             Cursor location




Quick Reference by Product: Symphony only

Type          Code (hex)        Length (bytes)      Description

WINDOW           32                 144             Symphony window
                                                      settings
STRING           33                 variable        Value of string
                                                      formula
PASSWORD         37                 4               File lockout (CHKSUM)
LOCKED           38                 1               Lock flag
QUERY            3C                 127             Symphony query
                                                      settings
QUERYNAME        3D                 16              Query name
PRINT            3E                 679             Symphony print record
PRINTNAME        3F                 16              Print record name
GRAPH2           40                 499             Symphony graph
                                                      record
GRAPHNAME        41                 16              Graph rocord name
ZOOM             42                 9               Orig coordinates
                                                      expanded window
SYMSPLIT         43                 2               Nos. of split windows
NSROWS           44                 2               Nos. of screen rows
NSCOLS           45                 2               Nos. of screen columns
RULER            46                 25              Named ruler range
NNAME            47                 25              Named sheet range
ACOMM            48                 65              Autoload. comm code
AMACRO           49                 8               Autoexecute macro
                                                      address
PARSE            4A                 16              Query parse
                                                      information





                           WORKSHEET FILE FORMAT
                                 FROM LOTUS

                     APPENDIX A - CELL FORMAT ENCODING

              Copyright(c) 1984, Lotus Development Corporation
                              161 First Street
                       Cambridge, Massachusetts 02142
                               (617) 492-7171
                     Electronic Edition, December, 1984
                            All Rights Reserved























































                     APPENDIX A:  Cell Format Encoding


The first byte of a content-related record contains a cell format code.

Format is determined at the bit level.


Table 8   Cell Format Encoding

Bit number     Description               Code             Meaning
7              protection                1                protected
                                         0                unprotected

4,5,6          format type               0                fixed
                                         1                scientific
                                                            notation
                                         2                currency
                                         3                percent
                                         4                comma
                                         5                unused
                                         6                unused
                                         7                special
0,1,2,3        number of decimal         0-15
                places decoded
                (if format type = 0-6)

               special format type       0                +/-
               (if format type = 7)      1                general
                                         2                day-month-year
                                         3                day-month
                                         4                month-year
                                         5                text
               (Symphony only)           6                hidden
               (Symphony only)           7                date;hour-min-sec
               (Symphony only)           8                date;hour-min
               (Symphony only)           9                date;intnt'l1
               (Symphony only)           10               date;intnt'l1
               (Symphony only)           11               time;intnt'l1
               (Symphony only)           12               time;intnt'l2
                                         13-14            unused
                                         15               default







EXAMPLE

Currency format, two decimal places, unprotected cell


Bit Number    7   6   5   4   3   2   1   0
Binary Code   0   0   1   0   0   0   1   0
                  ---------
                 Format Type ---------------
              Protection     Number of Decimal Places
                                 or Special Format

The byte number is 0.
The hex code is 22.


Example

Special format, month-year, protected cell


Bit Number     7   6   5   4   3   2   1   0
Binary Code    1   1   1   1   0   1   0   0
                   ---------
                  Format Type  -------------
                Protection    Number of Decimal Places
                                 or Special Format


The byte number is 0.
The hex code is F4.





                           WORKSHEET FILE FORMAT
                                 FROM LOTUS

                     APPENDIX B - THE FORMULA COMPILER

              Copyright(c) 1984, Lotus Development Corporation
                              161 First Street
                       Cambridge, Massachusetts 02142
                               (617) 492-7171
                     Electronic Edition, December, 1984
                            All Rights Reserved
























































                     APPENDIX B:  The Formula Compiler

This appendix describes the internal workings of the formula compiler.  The
compiler transforms an ASCII string of characters representing a formula to
its Reverse Polish code.  The basic algorithm utilizes and SR parser (SR =
shift and reduce).  The aim of the parser is to apply a set of reduction
rules which embody the syntax of the compiler to an input string.  Formula
code is compiled to a temporary buffer.

Lexicon Analysis

A lexical analyzer breaks up the input string into lexical units called
tokens.  A token is a substring of the original input string operand,
operator, or special symbol (such as comma, parentheses, etc.) In addition,
the lexical analyser supplies two special tokens, "beginning of formula"
(boform) and "end of formula" (eoform), to facilitate the compilation
process.  The lexical analyzer identifies and processes literals (both
number and string), cell and range references, operators, and function
calls.  It assigns a unique code to each distinct operator, function, or
type of operand.

A function with no arguments is treated like a number.

Syntax Analysis

The syntactical analysis of a formula is accomplished by processing a list
of tokens in left-to-right order.  A stack called the syntax is also used
during the syntactical scan.  The basic algorithm is as follows:

Repeat the following steps:

1) Get the next token

2) If the token is a literal or cell reference:
      a) Push the number code on the syntax stack
      b) Push the number code on the syntax stack

3) If the token is a range reference:
      a) Compile code to push the range reference
      b) Push the range code on the syntax stack

4) Otherwise push the token code for the token on the syntax stack.

For each syntax rule, if the pattern on the top of the  syntax matches the
rule pattern take the action associated with the rule and start scanning
from the beginning for any additional rules which may apply.

When a token code is pushed on the syntax stack, an additional word of
zeros is also pushed on the stack.  This is used when compiling function
calls to hold the function's argument count.





Rule Matching

A relatively small number of rules are used to process formulas of arbitrary
complexity.  If a rule matches the top of the syntax stack, then the
compiler takes a specific action and rule scanning starts again with the
first rule.  Each rule matches certain patterns on the syntax stack.  A
typical rule might be: if the top of the stack is the token for right
parenthesis, and the next-to-top is a number, and the second form the top
is a left parenthesis, then pop the top three items from the syntax stack
and push the number on the syntax stack.

This rule can be more succinctly represented as:

                       Stack

         Before                      After                 Action
         )
         number
         (                           number                none



The Rules


The following are the syntax rules used to process formulas.  Note that the
order of the rules is important.  The rules for compilation of operators
used additional tables which assign a precedence number and opcode to each
legal unary and binary operator.  Thus, for example, there is a single
token code for minus sign (-), but there are two opcodes one for unary
minus and one for binary minus.  In addition, these two operators, while
lexically identical, also have different precedence.  In general, operators
of higher precedence will be performed before operators of lower precedence
are performed left-to-right.  All special operators (boform, eoform,
parentheses, comma, etc.) are implicitly assigned a precedence of zero.

Rule 1  Termination test

                 Stack

        Before           After       Action
        eoform                       Output a return code to compile buffer
        number                       Return, indicating successful compile
        boform

Rule 2  Function argument processing

                Stack
        Before          After       Action
        '                           Error if range argument illegal for
        number or range             function.
        (               (           Increment argument count on stack
        function        function

Rule 3  Process final function argument

                Stack
        Before         After        Action
        )                           Error if range argument illegal for
        number or range             function.
        (                           Increment argument count on stack
        function       number       Compile function opcode
                                    If list function, compile argument
                                    count; otherwise error is wrong
                                    argument count.




Rule 4  Parenthesis removal

               Stack
       Before         After        Action
       )                           Compile parenthesis opcode
       number
       (              number
       operator       operator



Rule 5  Binary operators

              Stack
       Before         After        Action
       op2                         If binary op<binary op, rule does
       number                      not match.  Otherwise, compile opcode
       op1            op2          for operator op1.


Rule 6  Unary operators

              Stack
       Before      After           Action
       op2                         I unary op<binary op, rule does
       number      op2             not match.  Otherwise, compile opcode.
       op1         number          for operator op 1.


Rule 7  Error detection

             Stack
      Before       After          Action
      eoform                      Return indicating unsuccessful compile





Table 9   Operator Precedence Table

Operator              Unary Precedence       Binary Precedence
+                             6                      4
-                             6                      4
*                            na                      5
/                            na                      7
^                            na                      3
=                            na                      3
< >                          na                      3
< =                          na                      3
> =                          na                      3
<                            na                      3
>                            na                      3
#and#                        na                      1
#or#                         na                      1
#not#                        2                      na











Example:

Using the above rules, we can now see how a particular formula is
compiled.  Let us consider the following formula:

                 3+5*6

This is broken up by the lexical analyzer into seven tokens.

                 boform
                 3
                 +
                 5
                 *
                 6
                 eoform

The syntax scans proceed as follows until a matching rule is found:

Stack

boform           number         +            number
                 boform         number       +
                                boform       number
                                             boform

Compile buffer

                 push 3         push 3       push 3
                                             push 5

At this point, rule 5 is invoked, but since the precedence of boform is
zero, no action is taken.

Stack

*                number
number           *
+                number
number           +
boform           number
                 boform

Compile buffer

push 3           push 3
push 5           push 5
                 push 6







At this  point, since the binary precedence of + is lower than the binary
precedence of *, rule 5 does apply, and the opcode for * is compiled.  The
stack is reduced by replacing number * number by number and scan is made,
but no further rule applies.


Stack

number          eoform
+               number
number          +
boform          number
                boform

Compile buffer

push 3          push 3
push 5          push 5
push 6          push 6



Rule 5 applies again, and the opcode for + is compiled, reducing the stack
to boform, number, eoform.  Rescanning finds a match on rule 1 which
compiles a return opcode and terminates.  The final compiled code is thus:

push 3
push 5
push 6
*
+
return

A Note on the Decompiler

The algorithm for the formula decompiler was taken verbatim from:

Writing Interactive Compilers and Interpreters, P.J. Brown, John Wiley and
Sons, 1979.  See chapter 6.2.  The algorithm itself is described on pages
216 and 217.

This algorithm is also described in the following article.

More on the Re-creation of Source Code from Reverse Polish, P.J. Brown,
Software Practice and Experience, Vol 7, 545-551 (1977).










WORKSHEET COLUMN DESIGNATORS

Most records within the 1-2-3 Condensed Worksheet format are specified
with column/row designators (for example, column 0, row 0 equals A1).  When
determining the column designator, the table below will help make
conversion easier.


Column   Hex   Dec        Column   Hex   Dec        Column   Hex   Dec
  A       0     1           BA     34     52          DA     68    104
  B       1     1           BB     35     53          DB     69    105
  C       2     2           BC     36     54          DC     6A    106
  D       3     3           BD     37     55          DD     6B    107
  E       4     4           BE     38     56          DE     6C    108
  F       5     5           BF     39     57          DF     6D    109
  G       6     6           BG     3A     58          DG     6E    110
  H       7     7           BH     3B     59          DH     6F    111
  I       8     8           BI     3C     60          DI     70    112
  J       9     9           BJ     3D     61          DJ     71    113
  K       A    10           BK     3E     62          DK     72    114
  L       B    11           BL     3F     63          DL     73    115
  M       C    12           BM     40     64          DM     74    116
  N       D    13           BN     41     65          DN     75    117
  O       E    14           BO     42     66          DO     76    118
  P       F    15           BP     43     67          DP     77    119
  Q      10    16           BQ     44     68          DQ     78    120
  R      11    17           BR     45     69          DR     79    121
  S      12    18           BS     46     70          DS     7A    122
  T      13    19           BT     47     71          DT     7B    123
  U      14    20           BU     48     72          DU     7C    124
  V      15    21           BV     49     73          DV     7D    125
  W      16    22           BW     4A     74          DW     7E    126
  X      17    23           BX     4B     75          DX     7F    127
  Y      18    24           BY     4C     76          DY     80    128
  Z      19    25           BZ     4D     77          DZ     81    129
 AA      1A    26           CA     4E     78          EA     82    130
 AB      1B    27           CB     4F     79          EB     83    131
 AC      1C    28           CC     50     80          EC     84    132
 AD      1D    29           CD     51     81          ED     85    133
 AE      1E    30           CE     52     82          EE     86    134
 AF      1F    31           CF     53     83          EF     87    135
 AG      20    32           CG     54     84          EG     88    136
 AH      21    33           CH     55     85          EH     89    137
 AI      22    34           CI     56     86          EI     8A    138
 AJ      23    35           CJ     57     87          EJ     8B    139
 AK      24    36           CK     58     88          EK     8C    140
 AL      25    37           CL     59     89          EL     8D    141
 AM      26    38           CM     5A     90          EM     8E    142
 AN      27    39           CN     5B     91          EN     8F    143
 AO      28    40           CO     5C     92          EO     90    144
 AP      29    41           CP     5D     93          EP     91    145
 AQ      2A    42           CQ     5E     94          EQ     92    146
 AR      2B    43           CR     5F     95          ER     93    147
 AS      2C    44           CS     60     96          ES     94    148
 AT      2D    45           CT     61     97          ET     95    149
 AU      2E    46           CU     62     98          EU     96    150
 AV      2F    47           CV     63     99          EV     97    151
 AW      30    48           CW     64    100          EW     98    152
 AX      31    49           CX     65    101          EX     99    153
 AY      32    50           CY     66    102          EY     9A    154
 AZ      33    51           CZ     67    103          EZ     9B    155








(CONTINUED)




              Column   Hex    Dec         Column    Hex    Dec

                FA     9C     156           HA      DO     208
                FB     9D     157           HB      D1     209
                FC     9E     158           HC      D2     210
                FD     9F     159           HD      D3     211
                FE     AO     160           HE      D4     212
                FF     A1     161           HF      D5     213
                FG     A2     162           HG      D6     214
                FH     A3     163           HH      D7     215
                FI     A4     164           HI      D8     216
                FJ     A5     165           HJ      D9     217
                FK     A6     166           HK      DA     218
                FL     A7     167           HL      DB     219
                FM     A8     168           HM      DC     220
                FN     A9     169           HN      DD     221
                FO     AA     170           HO      DE     222
                FP     AB     171           HP      DF     223
                FQ     AC     172           HQ      EO     224
                FR     AD     173           HR      E1     225
                FS     AE     174           HS      E2     226
                FT     AF     175           HT      E3     227
                FU     BO     176           HU      E4     228
                FV     B1     177           HV      E5     229
                FW     B2     178           HW      E6     230
                FX     B3     179           HX      E7     231
                FY     B4     180           HY      E8     232
                FZ     B5     181           HZ      E9     233
                GA     B6     182           IA      EA     234
                GB     B7     183           IB      EB     235
                GC     B8     184           IC      EC     236
                GD     B9     185           ID      ED     237
                GE     BA     186           IE      EE     238
                GF     BB     187           IF      EF     239
                GG     BC     188           IG      FO     240
                GH     BD     189           IH      F1     241
                GI     BE     190           II      F2     242
                GJ     BF     191           IJ      F3     243
                GK     CO     192           IK      F4     244
                GL     C1     193           IL      F5     245
                GM     C2     195           IM      F6     246
                GN     C3     195           IN      F7     247
                GO     C4     196           IO      F8     248
                GP     C5     197           IP      F9     249
                GQ     C6     198           IQ      FA     250
                GR     C7     199           IR      FB     251
                GS     C8     200           IS      FC     252
                GT     C9     201           IT      FD     253
                GU     CA     202           IU      FE     254
                GV     CB     203           IV      FF     255
                GW     CC     204
                GX     CD     205
                GY     CE     206
                GZ     CF     207




ANALYSIS OF 1-2-3  WORKSHEET FILE

The worksheet shown below was created in 1-2-3 and saved to disk.



                                             Key:

                                             A2..A5 Named Range (code 11)
         EXAMPLE                                 A2: Label (code 15)
            100                                  A3: Integer (code 13)
           12.5                                  A4: Number (code 14)
           87.5                                  A5: Formula (+A3-A4)
                                                     (code 16)


The example shown below is a partial hex dump of this worksheet file.  By
reading each record header, you can determine the type of record you are
encountering.  The record header will also tell you the length of that
follows the header.  By analyzing the record header, you can read the
records you want and skip unrelated records.


   362B:0100                           06 00 08 00 00 00 00 00 00 00
   362B:0110        04 00 2F 00 01 00  01 02 00 01 00 FF 03 00 01 00
   362B:0120        00 04 00 01 00 00  05 00 01 00 FF 07 00 1F 00 00
   362B:0130        00 01 00 71 00 09  00 08 00 14 00 00 00 00 00 00
   362B:0140        00 00 00 00 00 00  00 04 00 04 00 48 00 00 0B 00
   362B:0150        18 00 54 45 53 54  00 00 00 00 00 00 00 00 00 00
   362B:0160        00 00 00 00 01 00  00 00 04 00 18 00 19 00 00 FF
   362B:0170        FF 00 00 FF FF 00  00 FF FF 00 00 FF FF 00 00 FF
   362B:0180


   362B:05C0
   362B:05D0        00 00 00 00 00 00  00 00 00 00 00 00 00 00 00 00
   362B:05E0        00 00 00 00 00 00  00 00 00 00 00 00 00 00 00 00
   362B:05F0        00 00 00 00 71 71  01 00 0F 00 0E 00 FF 00 00 01
   362B:0600        00 27 45 58 41 4D  50 4C 45 00 0D 00 07 00 FF 00
   362B:0610        00 02 00 64 00
   362B:0620                           10 00 1B 00 FF 00 00 04 00 00
   362B:0630        00 00 00 00 E0 55  40 0C 00 01 00 80 FE BF 01 00
   362B:0640        80 FF BF 0A 03
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0568

     Volume in drive A has no label
     Directory of A:\

    123DOC   ARC     28124   4-03-85   9:23p
    123EGA   ARC      9021  10-20-85   9:12a
    123PREP  ARC     36752   4-11-85   7:32p
    123RANGE EXE     25088   6-08-84   4:02p
    ARC      EXE     29824   8-22-85  12:50a
    CLRJET   ARC     39510   8-18-85   3:46p
    FEDTAX85 DOC      2739  10-06-85   8:20a
    FEDTAX85 WKS     82048  10-06-85   7:42a
    NEWCOLOR DOC      1152   5-17-85   7:37p
    NEWCOLOR IN        256   5-17-85   7:38p
    OPTIONZ  WKS     21376   7-29-84   8:55a
    TRYVM123 COM     23229  10-16-85   9:38a
    TRYVM123 DOC     10250  12-11-85   4:36p
    UNARC    TXT       363   6-20-86   1:08p
    WKS-FRMT TXT     36830  10-29-85   4:05p
    GO       BAT      1131   6-20-86   1:12p
    NOTES568 TXT      1280   6-20-86   1:08p
    FILES568 TXT      1701   6-20-86   1:08p
           18 file(s)     350674 bytes
                            2048 bytes free
