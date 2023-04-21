---
layout: page
title: "PC-SIG Diskette Library (Disk #301)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0301/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0301"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #2"

    A broad-ranging collection of Lotus 1-2-3 technical notes, utility
    programs, operation hints and templates for both the power user and the
    novice.
    
    Features:
    ~ Create address labels
    
    ~ A for-next loop
    
    ~ Make menu macros
    
    ~ Learn to document formulas
    
    ~ Import files
    
    ~ Build a table for range names
    
    ~ Learn about /XI macros
    
    ~ Understand the /datafill Function
    
    ~ Construct a macro library
    
    ~ Tech notes on many Lotus capabilities
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

## 123DOC.DOC

{% raw %}
```

                       123DOC
                       ------

              123DOC is a program to document a Lotus 123
         spread-sheet as a spread sheet in human readably form.
         The program is written in compiled BasicA for a 320k
         machine with 2 drives and a color board.  This is a
         LOTUS type configuration and the program probably does
         not run without the color board. Its speed is print
         limited.

              To use the program on a spread sheet file say
         TEST.WKS, first prepare a report file say TEST.PRN of
         the spread sheet in formula mode.  ie in 123 use the
         command.

              /PFOOC for "Print File Options Other
         Cell-Formulas", with the range pre-specified to be the
         whole spread-sheet of interest. ( Thus this file is
         actually one form of the output.  What 123DOC does is
         put this into a matrix format.)

              Then run the program with the default set to drive
         A and the disk with the TEST.PRN file in drive B

              A>123doc

              The program requires the following information in
         order to layout the page and cater to long formulae
         which it attempts to squeeze into a cell so many
         characters wide and an indefinite number of characters
         deep, unless the ajacent cell is free.  (Try it)

              Cell width--which defaults to 15 characters.

              Page width--which defaults to 132 characters.

              Rows per page--which defaults to 40.

              The program lists all of the .PRN files on drive B
         and then requests a file name b:....PRN, for which in
         this case the correct answer is

              TEST

              Given this it reads the spread-sheet file 40 rows
         at a time, displaying the cell structure on the screen,
         and then prints a series of pages that paste together to
         form the 40 rows, going accross the rows.  This repeats
         untill the whole report is complete when all rows have
         been read.


              I find it pretty usefull although there are a few
         obvious improvements.  Good-luck, address all
         suggestions to John Pearson on (703) 241-8621, or the
         C-UNIX BBS, if you think I should change it.


         COMMENTS ADDED BY J.R.,9-5-84:

         1.   When responding with .prn filename, do not enter
         filename extension.  .PRN is entered automatically.

         2.   Formulas containing commas, such as @IF statements,
         will be truncated at the comma.

         3.   Printout format leaves a left margin of 10-12
         spaces, presumably for taping sheets together.

         4.   The number of worksheet lines per analysis page
         varies  from that specified on the upward side 20-30%.

         5.   The maximum number of printer spaces accepted is
         219.  When dividing maximum printer spaces by number of
         worksheet columns to determine printout column-width,
         the width entry should be at least 1 space less than the
         calculated value.  E.g., if the calculated spaces per
         column allows 13.5,enter 12. This probably allows for
         the colon used to delimit columns.

```
{% endraw %}

## 123MAIL.TXT

{% raw %}
```
           Hotline Q & A

           SYMPHONY

           The following are answers to questions commonly asked by our
           dealers and test sites about Symphony's capabilities.

              FILE HANDLING

           Q. When I do a File Retrieve, the file name extensions are .WRK
              for both worksheet and document files.  Am I doing File Save
              correctly?

           A. Yes.  Symphony gives the .WRK file name extension to both
              spreadsheets and documents.  As does 1-2-3, Symphony uses .PIC
              and .PRN file name extensions to indicate graph-image and print
              files respectively.


           Q. When accessing a directory through File Retrieve or File Save,

          Key S or <ENTER> to continue[23;30H!s
          [23;1H[J    the ESC key does not erase the current directory.

           A. To erase the current directory name, simply press [ESC] twice.
              This allows you to type in the name of another sub-directory.


              WORD PROCESSING

           Q. In a DOC window, there are times when word wrap doesn't seem to
              work.  Why?

           A. Word wrap is disabled when overstrike INS is turned on, or when
              justification is set to NONE.  Press [INSERT] to turn off
              overstrike mode or change the justification in the format line.


           Q. Why are non-left aligned labels considered to be non-text,
              i.e., why can't they be edited in word processing?

















           A. Centered (^) and right-aligned labels (") use leading spaces.
              The Symphony program would need to be significantly larger to
              handle these labels as text.


           Q. Values entered in a SHEET window cannot be edited in a DOC
              window.

           A. True.  The worksheet values you entered in SHEET are protected.


              SPREADSHEET

           Q. When printing spreadsheets, long labels are truncated at the
              column width.

           A. True.  When defining an output range, the entire visible
              portion of the labels must be highlighted.


           Q. Where are the global options?

           A. Press [Menu] and select Settings to establish column width,
              recalculation mode, label prefix, etc.


           Q. How do I transfer a row to a column without using DIF?

           A. Use Symphony's new Range Transpose command.


           Q. Will there be a function for TIME calculation?

           A. There are several.  @TIME returns the serial value of a time of
              day.  @TIMEVALUE returns a serial value of a time entered as a
              string.  There are also @HOUR, @MINUTE, and @SECOND, which will
              accept a serial value, and return the corresponding time value.


           Q. I'm using the range name "1st" in my worksheet, but Symphony
              will not allow me to use @ functions involving that range.

           A. Correct.  For computational purposes, range names cannot begin
              with a number, but Symphony will accept a range name like "1st"
              for move, erase, and copy commands.


              GRAPHING

           Q. How do I explode the Pie Charts?

















           A. By assigning a B range for the graph settings, and giving a
              value of 100 to 107 to the section you want exploded.


           Q. How do I do a log/semi-log scale graph?

           A. By hitting the daily double at Aqueduct!  But
              seriously...Symphony has built this into its graph
              capabilities.  Select Graph 2nd Settings X-Axis Type
              Logarithmic.  Do the same for the Y-Axis if appropriate.


              FORMS/DATABASE

           Q. What is the parse review range?

           A. This is an area that Symphony uses to store any data that does
              not match the criteria established by a form definition.  An
              example of such data would be the salutation and login sequence
              which remains on the screen during a communications session
              with a mainframe.


           Q. Has the Data Distribution command been eliminated from
              Symphony?

           A. Not at all.  It can now be found under Range Distribution.


           Q. I'm creating a mailing list with Symphony, but it will not
              accept the part of the formula I've used to reference zip
              codes.

           A. Symphony's string handling capabilities are one of its nicest
              features, but it still sees numbers the same way as 1-2-3 does.
              To create a formula that involves columns of numbers as well as
              text, use the @STRING function for any numerical data.


              COMMUNICATIONS

           Q. Symphony's Settings Name Phone-and-Login sequence doesn't work
              with my Hayes Smartmodem 1200.

           A. Check to be sure that dip-switch number six is set to ON -- the
              up position.


           Q. Why does my monitor display two characters for every one I
















              strike?

           A. Check your COMM Settings Sheet to be sure that Echo is set to
              OFF.


           Q. When I dial a remote computer, I hear the phone ring, and I
              hear the high pitched sound that indicates that I've reached
              the computer, but I can't connect.

           A. You're transmitting at different baud rates.  Find out the baud
              rate of the computer you're trying to access and adjust your
              own baud rate accordingly -- probably downward.  The two most
              common baud rates between computers are 300 and 1200.


              SYMPHONY COMMAND LANGUAGE

           Q. Can I turn my screen off while the macro is executing?

           A. Yes.  The new {paneloff} command will surpress the display of
              the control panel, and the {windowsoff} command will supress
              the window displays.








                                      1-2-3 Macro Tips
                                   Printing Mailing Labels

          Printing mailing labels with 1-2-3 is simple if you prepare a worksheet on which
          each address is entered as three or more rows of long labels:

                              James Wildman
                              100 34th Street
                              Oneonta, IM   03312

          Unfortunately this does not allow you to exploit 1-2-3's /d commands (Data Sort
          and Data Query) to rearrange or extract addresses by last name, city, state, or
          other criteria.  Storing addresses in a 1-2-3 database is much more useful for
          reorganizing the information later:

              James    Wildman    100 34th Street  Oneonta    IM   03312
              Ted      Mayfair    RR 1, Box 22     Hickton    NN   77330
              William  Eggleston  PO Box 3443      Helmsford  FN   29214

          Consult the 1-2-3 manual for a discussion on the uses of /ds and /dq
          commands.  Assume that your database has been established correctly,
          with fields for first name, last name, street address, city, state, and zip
          code.  Unfortunately these addresses look nothing like mailing labels.  What
          comes next?  Retyping each row to look like the address in the first example
          comes to mind, but using the /c (Copy) command might require less effort.
          By positioning the cell pointer on the first field of a record and issuing
          the /c command, you can indicate a cell outside the database to be the
          target for the copy.

          To move each record using the Copy command, the following keystrokes would be
          required:


               /c <return><right arrow><right arrow><right arrow>
                  <right arrow><right arrow><right arrow>
                  <right arrow><return>

          Since 1-2-3 leaves the cell pointer on the cell copied from, copying the rest of
          the address requires moving the cell pointer to the next field (the `last name'
          column), issuing the /c command, and pointing to the cell into which you want
          that field copied.
          This method of pointing to a range is inefficient, as previously named ranges
          may be supplied to the /c command.  Using named ranges for operations such as
          copying take a bit more time to establish initially, but make automating routine
          tasks much simpler.

          Start by creating range names for each cell into which you are going to copy
          each field of an address.  Assign range names which represent the information in
          each area of cells.  The cell that will hold the first name in the formatted
          address might be named `first' or `firstname', the cell that will hold the last
















          name might be named `last' or `lastname', and so on.

          Use /rnc (Range Name Create) to name the cells in a block outside of your
          database.  Now when you issue the /c command and 1-2-3 prompts for the cell to
          copy to, instead of pointing, type the range name of the appropriate cell.

          Using range names is just one way of making 1-2-3 work harder for you.  Your
          work will be done faster if you put all of the previously discussed steps into a
          macro.  Here's a macro named \F which will format an address for you:

               \F      /c~FIRST~{right}
                       /c~LAST~{right}
                       /c~ADDRESS~{right}
                       /c~CITY~{right}
                       /c~STATE~{right}
                       /c~ZIP~

          To invoke the macro, put the cell pointer on the first field of a record, hold
          down the <Alt> key, and press the F key.

          When the macro has finished, you will have to move the cell pointer to be able
          to see the finished product. Use the goto <F5> key with the range name NAME.
          The formatted address will look like this:

                       James    Wildman
                       100 34th Street
                       Oneonta  IM       03312

          If the first name or the city name of the address are particularly long, they
          will run into the last name or state name when the address is formatted.  Choose
          the address with the longest first name or city name to format first, then use
          /wcs (Worksheet Column-width Set) to increase the size of the first column until
          everything fits.  This makes the column wide enough to fit each address
          formatted subsequently.

          Printing the Formatted Address

          Since 1-2-3 normally expects to be printing on eight and a half by eleven inch
          pages, it automatically spaces down five lines before printing the first line of
          text (unless you have changed the default settings or have already printed
          something during this session using different print options).  To print a label
          exactly where you want it, start by typing:

                /ppoouq   (Print Printer Options Other Unformatted Quit)

          This set of commands instructs 1-2-3 to print without page breaks, heading
          space, and footing space.  Your text will be printed beginning on the line where
          the print-head of your printer is when you later type g (Go).  The Print menu
          will still be displayed and you will want to type r (Range) and highlight the
          formatted address.  Make sure to cover all three columns and all three rows of
















          the address when marking the range to print.
          Check that the printing head of your printer is on the paper label on the line
          where you want the typed address to begin.  Finally, type g (Go).  1-2-3 will
          print the formatted address onto the address label.

          If you wish to format and print another address label, q (Quit) out of the print
          menu, position the cell pointer on the first field of a different record, invoke
          the macro, adjust the printer so the print head is on the next label, and type
          /ppg (Print Printer Go).  Since 1-2-3 remembers all the print settings, when you
          format a new label into the same cells as the first, you do not have to reset
          the print options.

          If you wish to print a number of labels, this procedure becomes tedious and time
          consuming.  The macro should be rewritten so that it automatically formats and
          prints every address in the address database, or so that it pauses after
          printing an address, allowing the user to select which address it will print
          next.

          Here is a macro which formats an address, prints it on a label, and pauses to
          select a new address for printing.  The cell pointer should be on the first
          field of a record when the macro is invoked, and the print-head should be at the
          very top of the address label:

              \P       /ppoouqrALL~q
              LOOP     /rncSTART~~
                       /c~FIRST~{right}
                       /c~LAST~{right}
                       /c~ADDRESS~{right}
                       /c~CITY~{right}
                       /c~STATE~{right}
                       /c~ZIP~
                       {goto}START~
                       /rndSTART~{down}
                       /ppgq
                       {?}
                       /xgLOOP~

          Before you invoke this macro, make sure you have used /rnc (Range Name Create)
          to name the cells you will be copying into.  Also, you might have noticed the
          range name ALL at the beginning of this macro.  This is very important.  It is a
          range of cells that contains exactly the number of lines which can be printed on
          each paper label, and which surrounds the cells into which you are formatting
          the address.

          The above example assumes that you will use tractor fed paper labels which fit
          nine lines of text from the beginning of one label to the beginning of the next.
           The range name ALL is assigned to a range covering nine rows of the worksheet
          with the formatted address embedded as follows:

                              A          B          C          D          E
















                   1
                   2
                   3
                   4                James      Wildman
                   5                100 34th Street
                   6                Oneonta    IM         03312
                   7
                   8
                   9
                  10
                  11
          \P is the range name of the macro.  A '\P is entered in the cell to the left of
          the macro's first cell (Without the single quote the cell would have been filled
          with p's.  See the label prefix section of the 1-2-3 manual for an explanation),
          then issued the /rnlr command (Range Name Labels Right) to assign this name.
          Invoke the macro by holding <Alt> and pressing p.

          Let's look at how the macro works:

                        /ppoouqrALL~q

          (Print Printer Options Other Unformatted Quit Range ALL <Return> Quit) Sets the
          print mode to unformatted and instructs 1-2-3 to print the range named ALL when
          it encounters a /ppg command (Print Printer Go).  This at the beginning of the
          macro to establish print settings for the rest of the session.  The macro will
          be faster if this step is taken only once.

          LOOP is the range name of the next line of the macro.  This range name was
          created in the same manner as the \P range name described above.  This is where
          the formatting and actual printing begins and the location to which the macro
          loops after a label is printed.

                        /rncSTART~~

          This assigns the range name START to the current cell (the `first name' cell of
          the address being formatted).  It is used by the macro as a place-holder.  When
          the address has been formatted, the cell pointer will be returned to this cell
          (using {goto}START~), the range name START will be deleted, the pointer will be
          moved down a cell, and the macro will pause until the <return> is pressed.

                         /c~FIRST~{right}
                         /c~LAST~{right}
                         /c~ADDRESS~{right}
                         /c~CITY~{right}
                         /c~STATE~{right}
                         /c~ZIP~

          This is the macro developed earlier which formats the address to be printed.

                        {goto}START~

















          This moves the cell pointer back to the first field of the address as explained
          above.


                        /rndSTART~{down}

          The range name START is deleted because the macro will reuse it. Remember that
          whenever a range name is used that has already been defined, 1-2-3 offers the
          old range as the default range to name. You can avoid having to "back up" when
          reusing a range name by deleting the old range name first.

          After the range name is deleted, the macro moves the cell pointer down to the
          next row.  This is for convenience.  The user will be able to choose this
          address to print next by hitting <return>, or will be able to select a different
          address by using the arrow keys.

                       /ppgq

          The macro is telling 1-2-3 to print (which it does using the range ALL as
          explained earlier).

                        {?}

          The macro pauses.  The user can stop the macro by pressing [BREAK], or move the
          cursor to a different first name cell, or print the new current address by
          pressing <return>.

                        /xgLOOP~

          When the user presses <return>, this line causes 1-2-3 to continue reading
          keystrokes in the cell named LOOP.  LOOP is the line of the macro in which the
          range name START is created.  You can see that the macro will repeat its entire
          routine, pausing again after it has printed the new address.

          Many 1-2-3 users need the ability to automate a mass-mailing, sending letters to
          every address in a database.  Obviously it is inconvenient to sit at your
          computer and press <return> after each address is printed.

          The \P macro will be automatic with only slight modification. These
          modifications assume that the user will position the cell pointer on the first
          cell of a database, invoke the macro, and ignore the computer until all labels
          are printed.  The automatic macro will look like this:

              \P       /ppoouqrALL~q
              LOOP     /rncSTART~~
                       /xi((START)=-1)~/xq
                       /c~FIRST~{right}
                       /c~LAST~{right}
                       /c~ADDRESS~{right}
















                       /c~CITY~{right}
                       /c~STATE~{right}
                       /c~ZIP~
                       {goto}START~
                       /rndSTART~{down}
                       /ppgq
                       /xgLOOP~

          This macro is different in only two ways: It does not contain the {?} command
          (Pause until <return> is pressed), and it has a line which checks to see if the
          value of the cell named START is -1:

                        /xi((START)=-1)~/xq

          This line (added right after the cell named LOOP) says, "If the value of START
          is -1, quit execution of the macro.  Otherwise continue reading keystrokes in
          the next cell."

          Before running this macro be sure to make one more change to your worksheet.  Go
          to the row below the last row of your database and enter a -1 in the first name
          field.  If you run the macro without having put a -1 at the end of your
          database, it will continue to run to the bottom of the worksheet, spewing blank
          address labels out of your printer until you stop it by pressing the <Ctrl> and
          <Break> keys.

          These macros should be useful to anyone who keeps a database of addresses.  With
          changes in the number of fields to be copied, you need only to add another range
          name for a cell within the range ALL and add another /c~ command to the macro.
          If your paper labels are larger or smaller than ours you can modify the printout
          by changing the number of rows included in the range ALL.
```
{% endraw %}

## 123PREP.DOC

{% raw %}
```
     
     
     123PREP File Formatting Program                          Release 2.2
     ====================================================================
     
     WHAT IT DOES:  123PREP is a compiled basic program designed to
     convert a simple text (ASCII) file of FIXED LENGTH records into
     columns directly usable by the LOTUS 1-2-3 FILE IMPORT NUMBERS
     command. 
     
     WHAT LOTUS LEFT OUT:  Although 1-2-3 is very flexible about reading
     in a text file (using  the FILE IMPORT TEXT command), it normally
     will read each line as one continuous line of text. That means that
     the spreadsheet can only be manipulated using complete lines: 
     sorting, column manipulation, database operations and many other
     useful features of Lotus are out of reach. Numeric fields, despite
     their initial appearance, are considered text, which means that no
     mathematical operations can be performed.  
     
     1-2-3 does provide for importing a column-oriented file with the FILE
     IMPORT NUMBERS command, but that requires all text fields to be
     delimited with quotation marks and all numeric fields to be delimited
     with spaces. Problem is, Lotus doesn't provide a way to insert these
     characters. 
     
     FOR EXAMPLE:  A file list from a bulletin board (a really great use
     for this program) may look like this:
     
     123PREP.EXE  05-27-84 REFORMATS TEXT FILES FOR LOTUS 130644
     123PREP.DOC  05-27-84 DOCFILE FOR 123PREP.EXE        1 5130
     
     What 1-2-3 will give you is normally all stuffed into column A:
     
     "123PREP.EXE  05-27-84 REFORMATS TEXT FILES FOR LOTUS 130644"
     "123PREP.DOC  05-27-84 DOCFILE FOR 123PREP.EXE        1 5130"
     
     What you want for your spreadsheet is a sortable database that you
     can mash around, probably requiring your file records to look like
     this, with column a containing "123prep.exe", and so on:
     
      a..........  b....  c.  d..............................  e f....
     "123PREP.EXE""05-27""84""REFORMATS TEXT FILES FOR LOTUS " 1 30644
     "123PREP.DOC""05-27""84""DOCFILE FOR 123PREP.EXE        " 1  5130
     
     
     That's what 123PREP does:  it allows you to vertically divide your
     file into fields and quickly create a properly formatted input file
     for 1-2-3's IMPORT feature, with numeric values preserved and fields
     correctly split into separate columns. 
     
     Since the file is sliced vertically into fields, records should line
     up vertically. But don't worry about a few lines of junk if most of
     the file is usable -- take what's available and edit the rest in
     LOTUS.  123PREP is pretty forgiving in this respect. 
     
     Page 2
     
     123PREP File Formatting Program
     ====================================================================
     
     PROGRAM LIMITS:  This release supports drives A through D and file
     sizes up to the capacity of your disk drives. The amount of memory
     you have in your PC determines how big a file can be read into LOTUS.
     Records can now be up to about 200 characters wide and split into as
     many as 26 columns.
     
     For best performance, use different drives for your input and output
     files.  A RAM disk makes this program really hum, because of all the
     disk activity implicit in the process (read a record, write a
     record).  
     
     
     HOW TO USE IT:  The program operates in 5 steps:
     
     1. Select a TEXT file from any drive. IRMA.TXT is assumed if you
     don't enter a filename, but you MUST specify a disk drive. Press 
     HOME for help or ESC to exit the program. At all subsequent screens,
     ESC "backs up" to the preceding screen to allow you to restart that
     section. For hard disk users:  path names are not supported.
     
     2. Select a disk drive and a file name to receive your formatted
     output. A disk drive must be specified. 123PREP.PRN is assumed  as a
     default filename if you just press enter. Since the file will only be
     used for a short time, any name will do, but it MUST have .PRN as a
     file type for LOTUS to recognize it from the FILE IMPORT menu.
     
     3. The first five records from your input file are then displayed on
     the screen. Each field you specify will become a separate column when
     you load the finished output file into LOTUS 1-2-3. A line of '^^^'
     (carat) characters is harmless and means that the record selected is
     blank; press PgDn to select another if you want.  
     
     Using the cursor control keys described below (all of which are
     located on the number pad on the right side of your IBM/Compaq
     keyboard), select a sample record to serve as a template and then
     divide the template into fields.  
     
     Press:          Operation:
     ------------    ---------------------------------------------------
     HOME         -- Redisplay the template marking HELP screen 
     ESC          -- Return to the output file selection screen 
     Cursor Right -- Include this character in the current field 
     Cursor Left  -- Back space one character
     PgDn         -- Select the next record as a template 
     PgUp         -- Select the previous record as a template 
     END          -- Restart the template marking screen 
     Grey+        -- Accept the current field and start the next field
     Grey-        -- Back up to the start of the previous field
     RETURN       -- ALL DONE. Proceed to the next screen
     
     Page 3
     
     123PREP File Formatting Program
     ====================================================================
     
     For example, pressing the Cursor Right key (the "6" key on the number
     pad on the right-hand side of your keyboard) moves the cursor to the
     right and adds the current character to the field you're creating at
     the moment. Cursor Left backs up a space and drops that character
     from the current field.
     
     Typically, you'll use PgDn to select  a record, Cursor Right to mark
     off the first field (you'll see small a's appear on the template),
     the Grey+ key to start the next field, and ENTER when you're all
     finished.  If your records contain unneeded columns, assign them to
     separate fields and delete the column during the next step.
     
     4. The next step looks at your template record and checks each field
     to see if it has a numeric value. If so, it is highlighted and will
     be output as a number surrounded by spaces in your file. If not, it
     will be output as text and surrounded with quote marks ("). If you
     may want an apparently numeric field to be treated as text, or vice
     versa, enter the field's letter to toggle it back and forth.  You can
     also exclude a field from your output by pressing either SHIFT key
     and entering its letter.  See ENHANCEMENTS below.
     
     5. Process your files.  Records from your input file are read in,
     processed and written to your output file, one at a time.  Any double
     quote characters found are replaced with single quote characters
     during processing.  If needed, you can append a record number at the
     end of each line to simplify editing in Lotus.  Operation is
     continuous until the last input record is handled.  Then start up
     LOTUS and enter /FIN, select your PRN file and press enter to import
     your new file. 
     
     
     ERROR HANDLING has been addressed as completely as possible, but
     nobody's perfect. These are the errors that are most likely to
     occur in 123PREP and their corresponding error codes from the IBM 
     Basic manual:
     
     53 The drive or filename you specified for input doesn't exist. 
     55 Input and Output files can't have the same name. The program
        reads from one file and writes to a second file.
     61 Your output disk is full. Try another one. 
     64 The filename is invalid. 
     70 Your diskette is write protected.
     71 The disk drive you want isn't ready. 
     76 The drive or filename you specified for input doesn't exist. 
     
     Page 4
     
     123PREP File Formatting Program
     ====================================================================
     
     PROBLEM REPORTING:  For reference and problem reporting (in case you
     see a program related error code), the error screen displays the
     error number that occurred and in which line of my source program the
     error occurred.  Nothing magic:  you can look up the error code in
     your IBM BASIC manual. Please call me at the number shown below if
     you find a program "bug" so I can repair it. If you don't call, it
     won't get fixed and others may have the same problem. I really will
     try to help you.  You can help both of us if you can show me how to
     duplicate the problem and provide the error message reported by the
     program.
     
     
     "ERRORS" IN YOUR FILE:  Two special data errors you should be aware 
     of when you use the Lotus IMPORT function -- 
     
     1.  If your input file contains double quotation marks, Lotus insists
     that a new column has been started, whether you use 123PREP or not.
     Since you often can't control what your input file contains, the
     result is extra columns you don't want.  This release of 123PREP
     arbitrarily deals with the problem by replacing any quote marks found
     in your input file with single quotes (apostrophes) during
     processing. Lotus sees single quotes as just an ordinary text
     character; most often, single quotes preserve the grammatical content
     of your records. 
     
     2.  If you specify a numeric field and an "empty" column occurs, you
     need a "place-marker" so that Lotus doesn't ignore the field. 
     Normally, spaces between numeric fields are ignored during IMPORT. 
     As a result, the line "collapses" toward the left margin, shifting
     all subsequent columns to the left.  This release looks for this
     condition during final processing and writes out zero to keep the
     columns lined up properly.
     
     Your INPUT file is never changed, so don't worry about damaging your
     original file. If either condition does occur, the exit screen will
     indicate it so you're aware that your output file has been modified.
     
     
     See your LOTUS documentation for a fuller discussion of the FILE
     IMPORT NUMBERS command.  LOTUS 1-2-3 is a copyrighted product of
     Lotus Development Corp.
     
     
     DISTRIBUTION:  123PREP.EXE AND ITS DOCUMENTATION MAY BE FREELY COPIED
     AND SHARED WITH OTHER USERS FOR ANY NON-COMMERCIAL PURPOSE, BUT ANY
     COMMERCIAL USE OR PUBLICATION IS PROHIBITED WITHOUT MY WRITTEN
     PERMISSION.  I will gladly supply the compiled program and this
     documentation file.  Send a blank diskette, a return mailing label,
     and return postage in a mailer to the address below.  To ensure that
     I can support you properly if you have problems, I will not
     distribute the source code.
     
     Page 5
     
     123PREP File Formatting Program
     ====================================================================
     
     ENHANCEMENTS IN RELEASE 2.2:  As use of a program spreads, user 
     suggestions surface that either directly or indirectly get plowed
     back into the next release.  For those who called, thanks.  New
     features built into this version of 123PREP include:
     
     1.  Quotation marks included in your INPUT file are automatically
     swapped out for apostrophes.  Lotus uses quote marks to separate
     columns during the FILE IMPORT process.  Similarly, if a numeric
     field evaluates to a zero value, a zero is written out to serve as a
     "place-marker" for Lotus.  Otherwise, Lotus would "collapse" the
     column during IMPORT.  The exit screen will tell you whether either 
     condition occurred so that you know your file content has been
     changed.  (Judy Epstein, Highland Park, Illinois.)
     
     2.  You can now exclude one or more columns from your OUTPUT file
     during final processing to squeeze the "air" out and simplify editing
     in LOTUS. Unneeded columns are selected during the TEXT/NUMERIC
     selection process by using either shift key and the letter that
     specifies the field.  SHIFT-A, for example, tells the program to
     drop column A during final processing.  It toggles, so doing it again
     restores the column.  (Mike Erdmann, Minneapolis, Minnesota.)
     
     3.  Records can now be numbered during output if desired.  No matter
     how you sort things around once you start up Lotus, you can always
     restore the original sequence of the file.  Serves as an automatic
     DATA FILL feature.  (Cheryl Wengroff, Skokie, Illinois.)
     
     4.  Fields I and Q no longer fail to clear the screen during the
     TEXT/NUMERIC selection process.  (Mike Erdmann.)
     
     5.  Two limits were raised.  You can now specify up to 26 fields 
     and handle wider records.  I have processed test records up to about
     200 characters wide; looks ugly, but it seems to work.
     
     6.  A fourth HELP screen has been added to the TEXT/NUMERIC screen to
     explain the expanded options available there.
      
     7.  After you have finished processing, you're now offered a loop
     back to the top of the program to work on another file, instead of
     automatically exiting to DOS.
     
     
         Suggestions are welcome. . . 
     
     ====================================================================
     Jon Sims                                                 123PREP.EXE
     600-C South Boulevard                                    Release 2.2
     Evanston, Illinois                                      May 27, 1984
     Telephone:  (312) 982-7312                        (c) Copyright 1984
     ====================================================================
     

```
{% endraw %}

## 123Q&A.TXT

{% raw %}
```








          Each week, Lotus's Product Support receives thousands of phone calls about
          1-2-3.  Many of these questions are asked frequently. The following is a list of
          the "Top Twenty" asked by Lotus dealers and Product Support's answers to these
          frequent questions.  We hope they will provide the timely and concise
          information that you need.


               Worksheet

            Q: What is the internal precision of 1-2-3?

            A: 1-2-3 has internal precision of 15 decimal places.


            Q: Sometimes when I use functions that compare or evaluate
               numbers, the comparison comes up false, even though the
               numbers on the screen are equal.  Why?

           A: This happens because 1-2-3 stores all numbers internally to 15 decimal
          places and rounds off only the displayed number.  Thus 2.00 on the screen
          could actually be 2.0001 internally; comparing this to 2.00 exactly will
          come up false.  The solution is to use the @ROUND function to round off
          numbers to exact amounts -- especially important if the numbers are a result
          of calculations using division, sine, cosine, square root, etc. which often
          change the very last decimal place by one digit or so.


            Q: I've followed your instructions exactly, but I still can't
               get my hard disk to go past the Access System Menu.

            A: The 1-2-3 System Disk is still copy protected.  Therefore,
               when you get to the Access System Menu, place the System Disk
               in the floppy drive and press [Return].


            Q: Please explain the benefits and limitations of
               subdirectories.  Release 1A documentation states "limited"
               use of DOS 2.0 tree directories.  What does this mean?

            A: Subdirectories are created in DOS 2.0 by the MAKE DIRECTORY
               command.  Subdirectories allow better organization and the
               ability to store a larger number of files on the hard disk.
               Their limitation in 1-2-3 is that you can't use the DOS PATH
               command to find files.


            Q: When I design a large worksheet, the constant recalculation
               slows me down considerably.  Is there anything I can do to
               speed things up?

















            A: Yes.  Switch to manual recalculation and your problem will be
               solved.  The correct keystrokes are /WGRM.  This will
               suppress recalculation until the user presses [CALC].


            Q: Does 1-2-3 support alpha character string functions?

            A: No, it does not.


            Q: When I attempt to retrieve a file, I get the error 'Range
               Name Already Exists.'

            A: This is caused by trying to retrieve, under Release 1, a
               Release 1A- created file containing graph names.  To solve
               the problem, go back to Release 1A, delete the graph names
               and resave the file.  Then retrieve it under Release 1.


            Q: Why is it that when retrieving a file, the number of bytes
               free found when executing /WS does not decrement by the same
               amount as the file?  I checked the size in the FILE MANAGER
               before retrieving it.

            A: Due to additional overhead, the size of a file once brought
               into RAM is larger than the size found when using the FILE
               MANAGER or DOS DIR command.


            Q: I have Release 1A with a Hercules card.  When I write a macro
               and access a graph via the /GNU command, I cannot return
               control to my macro without pressing another key.  What is
               the problem?

            A: When using the Hercules card, it is necessary to press a key
               in order to continue execution of a macro.  This is not the
               case, by the way, with a two-monitor system.


            Q: When using the financial functions @PMT, @NPV, @PV and @FV,
               are the payments based on beginning or end of period
               payments?

            A: The functions assume end of period payments.


               PrintGraph

            Q: After I have printed out my graph, I can't get it back up to
               modify it.  Why? I saved it?

















            A: In order to be able to modify a graph, one must use the
               /GRAPH NAME CREATE option.  This will save the coordinates of
               the graph within the worksheet.  One can create several
               graphs within one worksheet in this way.  You must do a /FILE
               SAVE in order to save these coordinates.  Separate from these
               options is /GRAPH SAVE.  This will create a picture file of
               the graph that is saved independent of the worksheet.  This
               picture file is the one you print with the Printgraph Disk.


            Q: When I use six legends on my graphs, why do they run off the
               page?

            A: When you have six legends, you can only make very small
               legend titles.  The solution is to decrease the length of the
               legends to a 1 or 2 letter key.


            Q: Can I blank out the Y-axis label that says "Thousands,"
               "Millions," etc.?

            A: No.  This scaling is done internally and cannot be overridden
               by the user.


               Translation

            Q: With Release 1A I tried to translate a 1-2-3 file to dBase
               II.  It seems to translate correctly, but the dBase file is
               all garbage.  What is wrong?

            A: When translating the entire .WKS file, the field headings
               must be in Row 1 of the spreadsheet.


            Q: What type of files will 1-2-3 accept?

            A: 1-2-3 will accept any one of the following data formats: WKS
               -- Standard 1-2-3 binary file DIF -- Data Interchange Format
               ASCII -- American Standard Interchange Format VC -- Visicalc
               file DBF -- dBase II files


               Installation

            Q: Do I have to put DOS on my disks?

            A: It is not necessary to put DOS on your 1-2-3 disks as long as
               you aren't using using the FILE MANAGER or DISK MANAGER
















               programs, both of which use DOS commands.  An example is the
               DISK MANAGER'S "Prepare" option which uses the DOS FORMAT
               command.  To use the FILE or DISK MANAGER, DOS must be copied
               via the installation procedure.


            Q: If I install my 1-2-3 disk for use with a Compaq, does that
               mean I cannot use it on the IBM?

            A: No.  It just means you must reinstall the disks for the IBM
               prior to reuse on the IBM.  There is no problem with
               reinstalling drivers as often as needed.


               Hardware

            Q: What are the correct HP 7470A pin settings?

            A: IBM 1 -- 1 HP 2 -- 3 3 -- 2 7 -- 7 5 -- 6 -- 20 Tie 5, 6
               together, connect to 20.


            Q: I have just bought Release 1A of 1-2-3.  My system has 128K
               of RAM.  The Tutor Disk is not working properly.  Halfway
               through I get an "Out of Memory" message.  What is wrong?

            A: Release 1A of 1-2-3 requires 192K of RAM to operate whereas
               Release 1 only required 128K.  The higher minimum memory
               requirement is a result of additional capability added to
               1-2-3 and support of DOS 2.0, an operating system
               substantially larger than DOS 1.1.


          Worksheet


            Q: Whenever I try to use data labels with my pie graph, the
               graph will not accept them.  What is wrong?

            A: Data labels per se are not supported with pie charts.  To
               achieve the same effect, select /Graph X. Then specify a
               range containing the labels you want for your pie slices.


           Q: Can I use the same field headings for more than one column when I am
          creating a data base?

            A: No.  1-2-3 uses field names to identify data in the Data
               Query command.  It cannot distinguish between duplicate
               headings.  Field names must be unique.


















            Q: Can 1-2-3 be displayed in 40 or 132 column modes?

            A: No.  1-2-3 runs only in standard 80 column mode.


            Q: Where does the "e" come from when doing an @EXP(X)?

            A: The letter "e" is a mathematical constant, 2.718, the base of
               the natural logarithm.  The function @EXP(X) will give the
               value of "e" raised to the exponent "X", that is, e x. If you
               simply want to raise a number to a given power, simply enter
               the number, a caret and then the power.  Three raised to the
               fourth power is expressed as 3^4.


               PrintGraph

            Q: Is it possible to print a graph even though I am not able to
               view it?

            A: Yes, provided you have a graph-supported printer or plotter.


            Q: How many graphs can be queued for printing?

            A: There is no known absolute limit.  Product Support has talked
               with individuals who have been able to queue over 25 graphs.


            Q: What graphics devices does 1-2-3 support?

            A: Here's the list of supported hard copy devices for Release
               1A.

               NOTES: The Graphics Printer Library (12/83) supports all
               devices shown below for the IBM PC and XT, COMPAQ, Texas
               Instruments PC and WANG PC.

               Devices preceded by an asterisk (*) are supported only by the
               Graphics Printer Library for the above-named computers; they
               are not supported by Release 1A's Device Library itself.

               Devices shown without an asterisk are supported by 1-2-3
               Release 1A's Device Library and, for the above-named PC's
               only, by the Graphics Printer Library.

                 *Amdek Amplot II Plotter
                  Anadex 9620A Silent Scribe Printer
















                 *C. Itoh Prowriter Printer - 8510 Series
                 *Calcomp Model 84 Plotter
                 *Canon A-1210 Color Ink Jet Printer
                 *DEC LA100 Printer
                 *Diablo Series C Color Ink Jet Printer
                  Enter Sweet P Plotter
                  Epson FX 80 & *FX 100 (4 densities)
                  Epson MX 80 and MX 100 with Graftrax Plus (3 densities)
                 *Genicom/GE 3000 Series Black & White and Color Printers
                  HP 7470 Plotter
                 *7475A Plotter (A & B size paper)
                 *Houston Instruments DMP-29 Plotter
                  IBM Matrix Graphics Printer (4 densities)
                 *IBM  XY/749 Plotter
                  IDS Prism 80 & 132 Color Printer
                 *Inforunner Riteman Printer (3 densities)
                 *Infoscribe 1200 Printer (2 densities)
                 *MPI PrintMate 150
                  NEC 8023 Printer
                  Okidata Microline Series Printers
                 *Printek 920 Printer
                 *Printronix MVP 150B Printer
                  Strobe Model 100 and *Model 200 Plotters *TI 850 Printer
                 *Toshiba P1350 Printer
                 *Transtar 315 Color Printer

                For the DEC RAINBOW 100 and 100+, the following devices
                only are currently supported:

                  DEC LA50 Printer
                  DEC LA100 Printer
                  HP7470A Plotter

            Q: I have an Okidata 84 running with Release 1A.  The worksheet
               prints fine, but I cannot get the graphs to work.

            A: You need a STEP 2 PROM upgrade.  Okidata 84's manufactured
               before February 1983 require the new PROM to function
               properly.


            Q: My PRINTGRAPH menu tells me I have an FX 80 printer.  I have
               configured the system for my printer, but it does not retain
               the information.

            A: FX 80 is the default entry for this item.  When you configure
               a device for PRINTGRAPH, move the cursor to highlight your
               printer choice and hit the [space bar].  Be certain that you
               see "#" just to the left of your choice.  Then confirm your
               choice by hitting [Enter].

















               If you wish to make this printer/plotter your new default
               graphics device, continue by choosing Configure, Save and
               Replace.


            Q: When I print a graph, my titles get truncated.  Is this
               normal?

            A: Yes.  The maximum number of characters that can be used in a
               title varies, though you can usually get 36 or 37 depending
               on the font and case.


            Q: I cannot seem to get my HP7470A Plotter to work with Serial
               Port 2.  What is my problem?

            A: THE HP7470A works only through Serial Port 1 with 1-2-3.


            Q: Why is it that the scaling of a graph is different when I
               print the graph from when I view the graph?

            A: The .PIC file created to print a graph is much more precise
               than the graph seen through /GV.  This may, at times, result
               in a slightly altered scale.

               Translation

            Q: Where can I get the standards for Data Interchange Format?

            A: DIF Clearing House, PO Box 638, Newton, MA 02162.  The
               approximate charge for technical specs is $6.


              Hardware

            Q: Does 1-2-3 need a double-sided drive with Release 1A?

            A: Yes, this drive capacity is needed for the 1-2-3 System Disk.

            Q: What machines will 1-2-3 run on?

            A: See 1-2-3 Release News in the World of Lotus

               Other


            Q: Do we sell parts of the 1-2-3 package separately?

















            A: As is common in the software industry, we do not offer parts
               of the product for sale.
```
{% endraw %}

## 123RANGE.BAS

{% raw %}
```bas
10    ' 123RANGE.BAS    List Lotus Range Names used in a spreadsheet file (.wks)20    '
20    ' Charles H. Greene dba ISM                           April 23, 1983
30    ' 150 West First Street                        Rev.1  May   20, 1983
40    ' New Richmond, Wi   54017     <715> 246-6690
50    '
60    ' Lotus v1.0 does not provide for listing Range Names that have been
70    ' assigned..this program provides a modest solution to that problem.
90    '
100   ' Range Name           FLD.CNT()
110   '  Specification       1...5...10....5...20....5.28
120   '                      AAAAAAAAAAAAAAABCCDDEEFFGGGG
130   '   where
140   '    A=range name            00h is used in place of space 20h
150   '    B=unknown               00h
160   '    C=begining column       low/high byte format value is 1 less
170   '    D=         row          than actual value ie.2048=FF07h
180   '    E=ending column
190   '    F=       row
200   '    G=seperators            0B 00 18 00h
210   '
220   '
1000   DEFINT A-Z
1010   DIM RANGE$(500)
1020   RCNT=0: RMAX=500
1030   BLACK=0: WHITE=7: BRIGHT=16: FG=WHITE: BG=BLACK
1040   FALSE=0: TRUE=NOT FALSE
1050   END.OF.FILE=FALSE
1060   FF$=CHR$(12)
1070   X=0: Y=0: Z=0
1080   X$=""
1090                                     'characters seperating range names
1100   LOTUS.CTL$(1)=CHR$(11)            'Range Name fields begin with this
1110   LOTUS.CTL$(2)=CHR$(0)             '  sequence of characters (1)-(4)
1120   LOTUS.CTL$(3)=CHR$(24)            'any break in this sequence ends
1130   LOTUS.CTL$(4)=CHR$(0)             '  the range names
5000  '
5010  ' Load table of column codes
5020  '
5030  DIM COL$(256)
5040  FOR X = 0 TO 255
5050     READ COL$(X)
5060  NEXT
5070  '
5080  ' Print Headings
5090  '
5100  PRINT
5110  KEY OFF: CLS: LOCATE ,,0
5120  HEAD1$="List Lotus(tm) Range Names                             123RANGE <ISM>": PRINT HEAD1$
5130  PRINT
5140  '
5150  ' Get Lotus filespec
5160  '
5170  ON ERROR GOTO 15000
5180  PRINT "Enter LOTUS spreadsheet filespec : ";
5190  INPUT "",FILE$
5200  Z=INSTR(FILE$,".")                'make sure it has .wks extension
5210  IF Z=0 THEN FILE$=FILE$+".WKS"
5220  OPEN FILE$ AS #1 LEN=1
5230  FIELD #1,1 AS X$
5240  FCB=VARPTR(#1)                    'address FCB
5250  Z=PEEK(FCB)                       'file type must be random
5260  IF Z<>4 THEN CLOSE #1: GOTO 5140
5270  RCDLIMIT!=((PEEK(FCB+19)*256)*256)+PEEK(FCB+17)+(256*PEEK(FCB+18))
5280  IF RCDLIMIT!=0 THEN CLOSE #1: PRINT: PRINT "**** File not found ****": GOTO 5140
5290  PRINT: PRINT: PRINT "File contains "RCDLIMIT!"bytes.": PRINT: PRINT
5300  HEAD2$="File: "+FILE$+SPACE$(49-LEN(FILE$))+DATE$+"  "+LEFT$(TIME$,5)
6000  '
6010  ' Process
6020  '
6030  GOSUB 8000                        'get byte
6040  FLD.CNT=1: RANGE.NAME$=""
6050  WHILE NOT END.OF.FILE
6060      ON MATCH.CNT+1 GOSUB 10000, 10060, 10100, 10140, 11000
6070      GOSUB 8000
6080  WEND
7000  '
7010  ' End of Input
7020  '
7030  PRINT: PRINT: PRINT "< END OF LIST >"
7040  PRINT: PRINT
7050  INPUT "Output to Printer (Y/N) ";ANS$
7060  IF ANS$="Y" OR ANS$="y" THEN GOSUB 16000
7070  END                               'done
8000  '
8010  ' Read file
8020  '
8030  RCDNO!=RCDNO!+1                   'set next random record(byte) no.
8040                                    'check for end of file
8050  IF RCDNO!>RCDLIMIT! THEN END.OF.FILE=TRUE: X$="": GOTO 8070
8060  GET #1,RCDNO!
8070  RETURN
10000 '
10010 ' Look for start of range names 0Bh 00h 18h 00h
10020 '
10030 IF X$<>CHR$(11) THEN MATCH.CNT = 0:RETURN
10040 MATCH.CNT=1
10050 RETURN
10060 '
10070 IF X$<>CHR$(0)  THEN MATCH.CNT = 0: GOTO 10000
10080 MATCH.CNT=2
10090 RETURN
10100 '
10110 IF X$<>CHR$(24) THEN MATCH.CNT = 0: GOTO 10000
10120 MATCH.CNT=3
10130 RETURN
10140 '
10150 IF X$<>CHR$(0)  THEN MATCH.CNT = 0: GOTO 10000
10160 MATCH.CNT=4
10170 RETURN
11000 '
11010 ' Range name fields found
11020 '
11030 IF FLD.CNT > 15 GOTO 11070
11040 IF X$<>CHR$(0) THEN RANGE.NAME$=RANGE.NAME$+X$
11050 FLD.CNT=FLD.CNT+1
11060 RETURN
11070 IF FLD.CNT > 18 GOTO 11110
11080 IF FLD.CNT = 17 THEN RANGE.BEG.COL=ASC(X$)
11090 FLD.CNT=FLD.CNT+1
11100 RETURN
11110 IF FLD.CNT > 20 GOTO 11170
11120 IF FLD.CNT = 19 THEN RANGE.BEG.ROW=ASC(X$): GOTO 11150
11130 R=ASC(X$): IF R>8 THEN R=8
11140 RANGE.BEG.ROW=RANGE.BEG.ROW+(R*256)
11150 FLD.CNT=FLD.CNT+1
11160 RETURN
11170 IF FLD.CNT > 22 GOTO 11210
11180 IF FLD.CNT = 21 THEN RANGE.END.COL=ASC(X$)
11190 FLD.CNT=FLD.CNT+1
11200 RETURN
11210 IF FLD.CNT > 24 GOTO 11400
11220 IF FLD.CNT = 23 THEN RANGE.END.ROW=ASC(X$): FLD.CNT=FLD.CNT+1: RETURN
11230 '       row must be 1-2048
11240 R=ASC(X$): IF R>8 THEN R=8
11250 RANGE.END.ROW=RANGE.END.ROW+(R*256)
11260 '
11270 ' Print range entry
11280 '
11290 IF RCNT=RMAX THEN PRINT "*** RANGE$ ARRAY EXCEEDED ***": END
11300 RCNT=RCNT+1
11310 PRINT USING "\              \";RANGE.NAME$;
11320 RANGE.BEG$=COL$(RANGE.BEG.COL)+MID$(STR$(RANGE.BEG.ROW+1),2)
11330 RANGE.END$=COL$(RANGE.END.COL)+MID$(STR$(RANGE.END.ROW+1),2)
11340 PRINT "   "RANGE.BEG$".."RANGE.END$"   ";
11350 IF RANGE.BEG.ROW>2047 OR RANGE.END.ROW>2047 THEN PRINT "*** Out of bounds ***" ELSE PRINT
11360 RANGE.NAME$=RANGE.NAME$+SPACE$(17-LEN(RANGE.NAME$))
11370 RANGE$(RCNT)=RANGE.NAME$+"  "+RANGE.BEG$+".."+RANGE.END$
11380 FLD.CNT=FLD.CNT+1: RANGE.NAME$=""
11390 RETURN
11400 IF X$<>LOTUS.CTL$(FLD.CNT-24) THEN END.OF.FILE=TRUE
11410 IF FLD.CNT < 28 THEN FLD.CNT=FLD.CNT+1 ELSE FLD.CNT=1
11420 RETURN
15000 '
15010 ' Error traps
15020 '
15030 IF ERR=57 THEN PRINT: PRINT "**** I/O Error         ****": END
15040 IF ERR<24 OR ERR>25 GOTO 15090
15050 IF ERL = 5210 THEN 15110
15060 IF ERL<>8060 GOTO 15140
15070 PRINT:PRINT "**** Check disk drive -- press any key to continue ****"
15080 CHAR$=INKEY$: IF CHAR$="" THEN 15070 ELSE RESUME
15090 '   Disk file open errors
15100 GOTO 15170
15110 '   Disk I/O errors
15120 IF ERR=62 OR ERR=63 THEN END.OF.FILE=TRUE: X$="": RESUME 8070
15130 GOTO 15170
15140 '
15150 PRINT:PRINT "**** Check printer -- press any key to continue ****"
15160 CHAR$=INKEY$: IF CHAR$="" THEN 15160 ELSE RESUME
15170 '
15180 IF ERR=6 THEN RESUME NEXT
15190 PRINT "ERROR #"ERR" IN LINE "ERL
15200 ON ERROR GOTO 0
16000 '
16010 ' List ranges to printer in columns
16020 '
16030 C1=1: C2=(RCNT+1)/2: RMAX=C2-1: LINE.CNT=99: PAGE.CNT=0
16040 IF LINE.CNT>56 THEN GOSUB 16150           ' Page heading
16050 LPRINT RANGE$(C1);
16060 X=LEN(RANGE$(C1)): LPRINT SPC(40-X);
16070 LPRINT RANGE$(C2)
16080 LINE.CNT=LINE.CNT+1
16090 IF C1<RMAX THEN C1=C1+1: C2=C2+1: GOTO 16040
16100 '                                           Finish report
16110 LPRINT:LPRINT
16120 LPRINT "< END OF LIST >"
16130 LPRINT CHR$(12)
16140 RETURN
16150 '
16160 ' Page overflow
16170 '
16180 LPRINT CHR$(12)                           ' top of form
16190 LINE.CNT=4: PAGE.CNT=PAGE.CNT+1
16200 LPRINT HEAD1$"  Page ";
16210 LPRINT USING "###";PAGE.CNT
16220 LPRINT HEAD2$
16230 LPRINT:LPRINT
16240 RETURN
60000 '
60010 ' Col Subscript
60020 '
60030 DATA A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
60040 DATA AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ
60050 DATA BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ
60060 DATA CA,CB,CC,CD,CE,CF,CG,CH,CI,CJ,CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ
60070 DATA DA,DB,DC,DD,DE,DF,DG,DH,DI,DJ,DK,DL,DM,DN,DO,DP,DQ,DR,DS,DT,DU,DV,DW,DX,DY,DZ
60080 DATA EA,EB,EC,ED,EE,EF,EG,EH,EI,EJ,EK,EL,EM,EN,EO,EP,EQ,ER,ES,ET,EU,EV,EW,EX,EY,EZ
60090 DATA FA,FB,FC,FD,FE,FF,FG,FH,FI,FJ,FK,FL,FM,FN,FO,FP,FQ,FR,FS,FT,FU,FV,FW,FX,FY,FZ
60100 DATA GA,GB,GC,GD,GE,GF,GG,GH,GI,GJ,GK,GL,GM,GN,GO,GP,GQ,GR,GS,GT,GU,GV,GW,GX,GY,GZ
60110 DATA HA,HB,HC,HD,HE,HF,HG,HH,HI,HJ,HK,HL,HM,HN,HO,HP,HQ,HR,HS,HT,HU,HV,HW,HX,HY,HZ
60120 DATA IA,IB,IC,ID,IE,IF,IG,IH,II,IJ,IK,IL,IM,IN,IO,IP,IQ,IR,IS,IT,IU,IV
```
{% endraw %}

## 123XIMAC.TXT

{% raw %}
```








                                   1-2-3 Macro Tips
                                    The /XI Command

          The following is a set of tips on the use of the 1-2-3 macro command /XI, and
          some hints on the practical application of conditional statements.  An example
          of a useful looping macro is explained that lets you use 1-2-3 as a simple word
          processor.

          Designing a Cleaner Printout

          An easy way to get cleaner looking printouts from spreadsheets is to cause all
          cells with a value of zero to appear blank.  To do this we can use the /XI or If
          command.  First we'll write a macro that checks to see if the value of a cell is
          zero, and, if it is, erases it.  Then we'll expand the macro to include a loop
          so that it checks a cell, blanks it if it`s zero, moves down and does the same
          thing to the next cell, and so on.  Finally, we'll make the macro stop itself.

          Introducing the If Command

          The format of the If command, /XI is:  
                        /XIcondition~action if condition is true

          This command lets the macro make a decision.  If a certain condition is true,
          then do a specified action.

          The condition is stated as an expression and written between the "/XI" and the
          tilde (~).  Because cells in 1-2-3 can have a true or false value, the condition
          is stated using the cell coordinates or, preferably, the name of a cell.
          Typically, the condition looks something like the following three examples:

                 NUMBER=5
                 @sum(AMOUNTS)>10000
                 @today>DUEDATE#and#AMOUNTDUE>0

          The action is defined by macro instructions written after the tilde.  If the
          condition is true, these instructions are executed. The macro then continues on
          to the next cell down, if there is one, unless the action includes an /XG,
          (goto), an /XM (menu), an /XC (subroutine call) or an /XQ (quit).  If the
          condition is false, the action is not executed, and the cell below is read.
          Creating the "Blank" Macro

          For our macro, the action is to make the current cell blank, so the instruction
          is /RE~ (/Range Erase [Return]) The condition is "the current cell equals zero."
          How do we find out the value of the current cell?  Give it a range name and
          proceed as shown in this \B (for Blank) macro:

                 \B  /rncHERE~~             Create the range HERE.
                     /xi(HERE=0)~/re~       If it's "0", make it blank.

          By the way, any text, i.e. alpha characters, in "HERE" will also be evaluated as
















          equal to zero and erased by this macro.  Make sure your spreadsheet is suitable
          for the \B macro.

          NOTE: (To help make macros easier to read, capitalize range names, leaving all
          other letters lower case and putting the conditions in parenthesis.)

          Notice the two tildes in the first line of this macro.  When you name a range,
          you press [Return] to end the name.  Then you specify the range.  Pressing
          [Return] again indicates the range is simply the current cell.  The tilde after
          the "/re" does the same thing.

          Adding the Loop

          Next, we want the macro to move down one cell and check again for a value of
          zero.  However, if we try to do this the way we did in the last "Tips" column,
          by adding {down}/xg\B~, there will be a problem: The next time we try to create
          the range name "HERE", it already will exist.  1-2-3 will show us where it is by
          moving the cell pointer back to its old location and we won`t go anywhere.
          Therefore, we need to delete the range name.  Add this line to the macro, and it
          will work:

                  /rndHERE~{down}/xg\B~       Delete "HERE", move down
                                              and run \B again.

          A word of caution: You might be tempted to try another approach, adding a {bs},
          (backspace) between the two tildes in /rncHERE~~. This puts the cell pointer
          back where it was when the command began.  Sometimes this won't affect your
          worksheet, but other times it can cause problems.

          Why? Because when you redefine a name, i.e, change the cells it refers to, all
          references to that cell are redefined as well. Let's say you have a formula that
          adds two entries in a row -- D5+E5 -- and that our macro "passes through" D5 on
          its way down to D6, D7, etc.  When the macro is on D5, the formula reads
          +HERE+E5. But when it moves on, the formula continues to read +HERE+E5, even
          when HERE is D2048.

              Moral:In macros, always delete range names before you move
                     them.

          Stopping the Loop

          The easiest way to stop a loop is to choose a number that you know isn't in the
          column and place that number in the cell where you want the macro to stop.
          Often any negative number will do; we've used "-1." And now, the completed
          macro:

                  \B   /rncHERE~~
                       /xi(HERE)=-1~/rndHERE~/re~/xq
                       /xi(HERE=0)~/re~
                       /rndHERE~{down}/xg\B~

















          Before testing for the zero value, our \B macro first checks for the last cell.
          If it finds "-1", the macro thoughtfully deletes HERE (so you can use the macro
          again), erases the -1, and stops. A bit more computer jargon: the "-1" (or any
          special value that a program looks for) is a "flag." In this case, it flags down
          the macro to stop the loop.

          Creating a Simple Word Processor

          This little gem uses /Range Justify, a handy command that rearranges a column of
          long labels so that they fit within a specified width.  See your manual or HELP
          screen if you're not familiar with /Range Justify.

          In /Range Justify you tell 1-2-3 how wide the text can be by pointing out a
          range.  The words stay in the first column, but they extend out to the column
          you point to.  In our example, the text will be two columns wide, though you can
          choose any number you like.

          By the way, don`t use this macro above tables.  If you do, you won't lose any
          data or change any values, but your columns will become misaligned because the
          justification affects everything, all the way down the columns in question.

          Here's the macro \E for edit:

                  \E   {edit}{?}~         Edit the cell until [Return]
                       /rj{right}~        Justify over two columns
                       {end}{down}        Go to the bottom of the column
                       /xg\E~             And start again

          The number of {right}s following the /rj determines how many columns wide the
          text will be.

          To use this macro, put the cell pointer where you want to type and press [Alt]
          [E].  Type away, occasionally pressing [Return] when you want to cause
          justification.  To stop, press [Ctrl-Break].

          By the way, if you press [Return] before you've typed enough to go over the end
          of the second column, you'll {end} up at the bottom of the worksheet.  Just
          press [Up] to get out of Edit Mode, [End][Up] to get back to the last line of
          the text, and [Edit] (F2) to put you back in Edit.  You will still be in the
          macro.

          While this macro alone is no match for the features of the modern word
          processor, it's handy for short memos and letters.  You can use it to create a
          "template" worksheet with a standard heading for your letters, another for your
          memos, including a cell with @today and a date format.

          In Closing

          We designed the \B macro to demonstrate general macro techniques. You can modify
















          it to do almost anything you want to a group of cells in the worksheet.  The \E
          macro is likely to be handier, and it suggests the potential of the {end} key.
          Experiment.
```
{% endraw %}

## ADDLABEL.DOC

{% raw %}
```
ADDLABL?.WKS are self explanatory Lotus 1-2-3 files which demonstrate how to 
produce one-up address labels, letting a macro do all the work. The principal 
menu also contains other useful macros, such as to save the file, print the 
database, and resort the data by different keys. 
    ADDLABL2.wks  is for 123 Rel 1 and 1A useage, whereas
    ADDLABL3.wk1  is for use with Rel.2 & 2.01, taking advantage of 
         the string function capability.

DO copy the .WKS file onto one of your working disks, least you accidently
destroy, in whole or in part, your only copy.

If the 1A file fails to load while you are operating under version 1, it 
probably is because someone forgot to delete the range \0 (zero). Find someone 
to perform that fix for you! 

Improvements to ADDLABEL.WKS will be gratefully received by the author, who 
places these worksheets in the public domaine.

WARNING: NO warranties whatsoever are provided ! But I hope you are happy
with it.

F. Charles Lippincott
% P.O. Box 3466
Houston, Texas 77253-3466


```
{% endraw %}

## DATAFILL.TXT

{% raw %}
```
           TIPS ON USING 1-2-3

           This time, our "Tips" column features the versatile /Data Fill
















           command and other helpful 1-2-3 pointers.  The /Data Fill command
           lives a double life.  As a regular 1-2-3 command, it comes in
           handy for putting sequences of numbers in ranges.  In macros, it
           becomes a powerful tool for putting numbers in cells anywhere in
           the worksheet, for performing calculations, and even for
           controlling loops.


           Reviewing the Command

           When you select /Data Fill, 1-2-3 asks you first to indicate a
           range to be filled, then for three values: the number with which
           to Start the sequence, the number to add to that number in each
           Step, and the value at which to Stop filling the range.

           Two facts about this command make it very useful in macros.  (1) When it
          asks for numbers, you can type formulas (including cell references),
          functions or range names.  When 1-2-3 fills the range, it evaluates the
          formulas and puts numbers, not formulas, in the cells in the range.  (2) If
          the fill range is just a single cell, it simply puts the value of the Start
          formula in that cell, and ignores the matter of Step and Stop values.

           In a macro to put the value of "FORMULA" in the cell named CELL,
           just type:

                   /dfCELL~FORMULA~~~

           Note the tildes -- one after the name of the range (CELL) to get
           the value, one after the formula, and two more for Start and Step.


           The Datestamp Macro (\D)

           The last "Tips" column suggested setting up standard worksheet
           templates for letters and memos, including a cell with @TODAY
           formatted to show the date.  If you then tell the computer the
           current date when you start it up, printed copies of these
           template-produced documents will always indicate the date of
           printing.

           But what happens if you save the newly written memo under a
           different name from that of the template?  No matter when you
           retrieve it, you see the date of the memo's creation.  However,
           the Datestamp macro offers the ability to automatically print the
           present date.  You still use a cell formatted to show Dates, only
           this time you put in the value @TODAY, not the formula.  Name the
           cell DATE.  Here's the macro:

                \D     /dfDATE~@TODAY~~~     Put the value of @TODAY in the cell
                                             named DATE.

















           Counting Loops

           In the last column, we wrote a macro that "looped" until it found
           a particular value in a cell.  Sometimes, however, you want to
           stop a macro from repeating after it has looped a particular
           number of times.  To enable 1-2-3 to count the number of loops,
           put the value for the maximum number of loops in a cell named
           LIMIT, and keep the count in a cell named COUNT.  Every time the
           macro repeats, you want 1-2-3 to add one to COUNT, i.e. increment
           the count.  Next, put an /xi (if) command in the macro to stop it
           when COUNT > LIMIT.

           Because range names can be used in formulas, /Data Fill can be
           useful in this counting macro.  To increment COUNT, just type:

                     /dfCOUNT~COUNT+1~~~       Compute the value of COUNT+1 and
                                               place it in the cell named COUNT.

           Here are the macro instructions that control the loop:

                    /dfCOUNT~1~~~                      Start the counter at one.
           LOOP     [whatever macro instructions       Cell named LOOP.
                    are to be repeated]
                    /dfCOUNT~COUNT+1~~~                Add one to the counter.
                    /xi(COUNT>LIMIT)~/xq               Stop when COUNT exceeds LIMIT.
                    /xgLOOP~                           Otherwise, repeat the LOOP.

           This is only one of many versions of a loop with a counter.  You
           could, for example, ask the user for the value to put in LIMIT
           (use the /xn command), or have loops within loops.  The /Data Fill
           command boosts the programming power of 1-2-3's macros.


           Non-Macro tips with [End]

           As you have probably learned, the [End] key is a great help in
           getting around the worksheet.  If you are at the top of a column
           of numbers, typing [End] [Down] takes you to the bottom of the
           column.  If you are in an empty cell, [End] followed by a
           cursor-motion key takes you to the first non-empty cell in that
           direction.  Here are two more uses of [End] that you may not have
           discovered: copying formulas in adjacent columns and finding the
           bottom of a range.

           In working with spreadsheets, it is common to have a formula that
           you want to copy adjacent to every cell in a column, or under
           every cell in a row.  To do so you put the cell pointer on the
           formula, select /Copy, and then press [Return] to indicate the
           formula to be copied.  Then you point out the range to which to
















           copy the formula.  The problem is that there's usually nothing in
           that range yet, so you can't use [End].  Or can you?

           To use [End] to copy formulas adjacent to a column, anchor the top
           of the new column of formulas with [.].  Then, using the
           cursor-motion keys, put the free end of the range in the column
           that already has values.  Press [End] [Down] to tack down the free
           end of that column, and use a cursor-motion key, usually [Right]),
           to bring the free end into the column you want to copy to.  Since
           that's the right range, press [Return] and you're done.

           Sounds complicated?  Actually it's harder to read about than to
           do.  Here's an example.  You have numbers in columns A and B, for
           a large number of rows.  You want to put a formula in every cell
           of column C, next to those numbers.  Give it a try.

           1) Go to the first row in column C and type the formula, say
           +A1+B1.  2) Select /Copy.  3) Press [Return] [.].  4) Press [Left]
           [End] [Down] [Right] [Return].

           You can also use [End] to find the bottom of a range.  Because the
           presence of blank cells can slow the process if you start from the
           top of the block of data, it's best to approach using [End] from
           the bottom up.  Like the above tip, this is easier to do than to
           read about.  Just try it.  To find the bottom of a column with
           blank cells in it simply

           Page down past the end and press [End] [Up].

           Or, if a nearby column is empty,

           1) Go to the end of the empty column.  2) Press [End] [Down] to
           get to the bottom of the worksheet.  3) Move back to the column
           whose end you want to locate.  4) Press [End] [Up].

           In Summary

           The [End] key techniques are very handy in day-to-day work with
           1-2-3.  What's more, you can use the very same tricks with
           Symphony.  The /Data Fill command is a great tool for macro
           writers.  By the way, when the 1-2-3 Manual was written, we hadn't
           discovered all the ways /Data Fill could be used.  It all points
           out one of the things I like about 1-2-3 -- it is always new ...
           there are still discoveries to be made.
```
{% endraw %}

## LOOPMAC.TXT

{% raw %}
```








                                    Looping Macros

          This short article outlines several practical uses for macros which loop, or
          repeat tasks, until the user chooses to stop performing an operation.

          Simplifying Use of Numeric Keypad

          This macro allows you to use the numeric keypad at the right side of the
          keyboard.  Of course, you can always use the keypad by pressing the [Num Lock]
          key, or by holding down the [Shift] key while typing the numbers on the pad.
          Unfortunately, the cursor motion keys are on the same pad, and you usually move
          the cell pointer after typing each number.  This macro takes care of moving the
          cell pointer, so it is named \M, for Move.  While using it, you should leave the
          [Num Lock] on.  The NUM indicator in the lower right-hand corner of the screen
          is displayed when the numeric keypad is set for the input of numbers only.

          The Move Macro takes advantage of the special macro instruction {?}.  This
          stops execution of the macro and gives control of 1-2-3 back to you.  The
          macro resumes when you press [Enter].  1-2-3 lets you know that you are















































          still in a macro by displaying the CMD indicator next to the Mode indicator
          in the upper right-hand corner of the screen.

          The Move Macro waits until you make an entry, and moves the cell pointer when
          you press [Enter].  For this example the macro will move the cell pointer down,
          but it could be written to move it laterally or diagonally.  Without looping, it
          consists of just two instructions:

            Range Name     Command     Comments
                 \M          {?}       Wait until [Enter].
                           {down}      Move the cell pointer down.

          When you press Alt-M, the CMD indicator is displayed, but nothing else happens
          because the first instruction is to wait.  Type an entry, press [Enter], and the
          cell pointer will move down.  Since you don't need a cursor key, you could leave
          the [Num Lock] on. So far, however, this is not very helpful since typing Alt-M
          before each entry is more bother than any of the alternatives.

          Creating a Looping Macro

          The solution is the loop.  To make the macro repeat itself, an "invisible" X
          command in the 1-2-3 top level command menu (the one that begins
          "Worksheet...Range...") must be used.  /X commands may only be used in macros.
          1-2-3 commands are written in macros as a slash (/) followed by one or more
          letters.  The /X commands consist of /X followed by one letter.  For example,
          /XQ quits a macro and /XM puts up the command menu.  /XG is the macro Goto
          command that may be used to make a macro loop.  (By the way, don't confuse /XG
          with the F5 {goto} key, which moves the cell pointer, and which can also be used
          in macros.)

          The /XG command tells 1-2-3 to get its next macro instruction from somewhere
          other than the rest of the label or the next label cell down, as it normally
          would.  After the G, enter a cell coordinate or range name, to tell 1-2-3 where
          to get its next set of instructions.  Enter a tilde (~) after the coordinate or
          range name.

          HINT: Using range names is better than using cell coordinates
                 because it will insure that the macro will function
                 correctly when you /Move cells, or /Worksheet Insert and
                 Delete Rows and Columns.  Assign range names to individual
                 cells containing macro commands.  To keep things clear,
                 place the range names as labels in the column to the left
                 of the macro instructions, and use the /Range Name Label
                 Right command to assign them to the first step of each
                 macro routine.  If a named range contains more than one
                 cell, the /XG command will begin execution at the top left
                 corner of the range.

          In this case, it would be preferable for the entire macro to repeat, and it
          already has a range name, \M.  To make the macro repeat, just type this label in
















          the cell below the cell containing {down}:


               /XG\M~     Go back to the beginning of the macro.

          After the macro has moved the cell pointer down, it performs the instruction in
          the next cell in the macro.  This instruction tells 1-2-3 to go back to the
          start of the macro, where it again waits until you press [Enter], moves the cell
          pointer down, repeating indefinitely.

          Stopping This Macro

          Now that an endless loop has been established, how can it be stopped? The best
          method is to hold down the [Ctrl] key and press [Scroll-Lock/Break].  When you
          see ERROR in the Mode Indicator, don't worry.  Press [Enter], [Esc], or
          [Ctrl-Break] again and everything will be fine.  This method can be used to stop
          execution of any macro, a printing operation, or a long /Data Table calculation.
          Before you [Ctrl-Break] out of this macro, however, consider entering another
          column of numbers.  While 1-2-3 is waiting (the CMD indicator is on), you may
          move the cell pointer.  Just turn off the [Num-Lock] or press shift while
          pressing the cursor keys. Otherwise, you'll get a string of digits typed in the
          current cell.

          Clarifying the Meaning of Tilde (~)

          You may have some lingering questions about the when's and why's of the tilde.
          To further illustrate its use, examine the following macro.  It moves down a
          column of labels, editing each one and stopping to allow you to add to the
          existing label.

            \E  {edit}{?}~    Edit the label and wait for [Enter].
                {down}        Move the cell pointer down.
                /XG\E~        Repeat the macro from the beginning.

          There are only two differences between this macro and the Move Macro.  The
          {edit} key is obvious.  But why the tilde after the {?}; you have to press
          [Enter] to resume the macro anyway.  The answer is that the {?} "swallows" the
          [Enter]; it is never sent to 1-2-3.  To exit Edit mode, you must press [Enter].
          This is done by the macro when it reads the tilde.  In the Move Macro, no
          [Enter] was needed and, just as none is needed when you are entering values or
          labels, no tilde is required after the {?}.

          {?} as a Breakpoint

          If you're setting out to do more extensive macro programming, one more hint is
          in order.  The {?} wait instruction is what programmers call a "breakpoint." It
          stops everything and lets you examine your work.  If you've written a large
          macro and it's not doing what you think it should, put breakpoints at the ends
          of several of your macro labels.  Then, when execution stops, you can look
          around the spreadsheet to see if, so far, things are as they should be.
















          In Summary

          The pointer movement was entered into three cells in a column, but could be
          stored in any number of ways.  If you use it a lot, you might want to put it in
          one line:

          \M  {?}{down}/XG\M~    Wait, move down and repeat.

          The Move Macro is handy; it could be tremendously helpful when entering a large
          amount of numeric data.
```
{% endraw %}

## LOT101.TXT

{% raw %}
```








                1-2-3 NOTES                                      All Versions
                Note 101                                        June 22, 1984


                             AUTOMATIC POINTER MOVEMENT MACROS
                             :::::::::::::::::::::::::::::::::



           SUMMARY       An automatic pointer movement macro automatically
                         moves the cell pointer each time you press the
                         Return key.  It is helpful if you need to make a
                         number of entries in a column or row.

                         This macro enables you to move the pointer while
                         using the numeric keypad to make entries.  It saves
                         you the trouble of having to turn the numeric keypad
                         on and off to move the pointer.  (Pressing the Num
                         Lock key so that you can use the numbers on the
          [23;1H[J
          Key S or <ENTER> to continue[23;30H!s
          [23;1H[J               numeric keypad disables the pointer movement, or
                         arrow, keys.)

                         This macro is also helpful if you have a long list
                         of labels to enter in a column or row.  It does not
                         save keystrokes per se, but it does allow you to
                         type the list without moving your hand off the
                         standard typewriter keys to press an arrow key.

                         Once an automatic pointer movement macro is written,
                         it is simple to use: activate the macro, type your
                         data, and press the Return key.


                         This note describes four macros, one for each
                         direction:

                           * the Up Macro             * the Left Macro
                           * the Down Macro           * the Right Macro

                    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::


           MACRO         An automatic pointer movement macro has the
           COMMANDS      following format (this is the Down Macro):

                                {?}{down}/xg\D~

                         The following macro commands are used:


















                    {?}    This symbol tells the macro program to pause until
                           you type in the necessary data.  After you type
                           the data and press the Return key, the program
                           reads the macro instructions that follow the {?}.


                   {up}    The pointer movement keys (or arrow keys) are
                 {down}    specified  in the macro by name.  The macro
                 {left}    moves the pointer in the direction indicated.
                {right}


           /xgLOCATION~    This command sends the macro program to another
                           cell or range location where it will continue to
                           read keystrokes.  The /xg command is used to
                           create the loop necessary to move the pointer
                           elsewhere in the same column or row; it actually
                           sends the program back to the beginning of the
                           macro, enabling the same macro instructions to be
                           used repeatedly.


                      \    A backslash followed by a single letter is a
                           "macro range name." Use the Range Name Create
                           command to name macro with the \ and any letter
                           of the alphabet.


                      ~    The tilde stands for the Return key in a macro.
                           It must be placed at any point in the macro se-
                           quence where you would normally press the Return
                           key if you were entering data and commands manu-
                           ally.

                        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::


           AUTOMATIC    The Down Macro
           POINTER      --------------
           MOVEMENT
           MACROS       This macro moves the pointer down one cell
                        after you press the Return key.

                       1.  Type the macro in one cell:

                                {?}{down}/xg\D~ (press RETURN)

                       2.  Give the macro the range name \D with the /Range
















                           Name Create Command.  Place the pointer on the
                           cell that contains the macro and type:

                                /rnc\D (press RETURN 2 times)


                        The Up Macro
                        ------------

                        This macro moves the pointer up one cell after you
                        press the Return key.

                        1.  Type the macro in one cell:

                                {?}{up}/xg\U~ (press RETURN)

                        2.  Name the macro \U.  Place the pointer on the cell
                            that contains the macro and type:

                                /rnc\U (press RETURN 2 times)


                        The Right Macro
                        ---------------

                        This macro moves the pointer one cell to the right
                        after you press the Return key.

                        1.  Type the macro in one cell:

                                {?}{right}/xg\R~ (press RETURN)

                        2.  Name the macro \R.  Place the pointer on the cell
                            that contains the macro and type:

                                /rnc\R (press RETURN 2 times)


                        The Left Macro
                        --------------

                        This macro moves the pointer one cell to the left
                        after you press the Return key.

                        1.  Type the macro in one cell:

                                {?}{left}/xg\L~ (press RETURN)

                        2.  Name the macro \L.  Place the pointer on the cell
                            that contains the macro and type:

















                               /rnc\L (press RETURN 2 times)


                        Note:    The macro is entered as a label.  As you
                        =====    type the macro it appears on the status line
                                 (in the upper left corner of the monitor).
                                 Notice that 1-2-3 automatically enters the
                                 apostrophe (') that denotes a label before
                                 the macro itself.  You don't have to type
                                 the ' character.

                        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::


           USING        To use one of the macros:
           THE
           MACROS      1.   Position the pointer in the cell in which you
                            want to enter data.

                       2.   Simultaneously press the Alt key and one macro
                            letter name: D, U, R, L.  (You do not have to
                            type a capital letter when using the macro).

                       3.   Type the data and press the Return key.

                       4.   To get out of the macro and return to the 1-2-3
                            Ready mode, simultaneously press the Ctrl and
                            Break (Scroll Lock) keys.  An automatic pointer
                            movement macro contains a continuous loop.  Thus,
                            this procedure is necessary to break out of the
                            loop and end the macro (i.e., turn it off).

                       To use a macro with the numeric keypad, simply press
                       the Num Lock key and then do the same as above.  The
                       pointer will move in the specified direction, and the
                       number keys can be used to enter values in the
                       worksheet.
```
{% endraw %}

## LOT102.TXT

{% raw %}
```
    1-2-3 Notes 
    All Versions 
    September 6, 1984 
    Lotus Development Corporation 

    NOTE 102 
    Memory Use 


    Introduction 

    A 1-2-3 worksheet has 256 columns and 2,048 rows (or 523,288
    cells), but the actual amount of information you can enter on one
    worksheet depends on the amount of available memory.  Available
    memory depends on four factors: 

    *  the amount of Random Access Memory (RAM) in the computer 
    *  the organization of the worksheet 
    *  the type of data you are entering 
    *  the amount of information you enter in each cell 

    This note examines some basic aspects of 1-2-3 and memory use. 



    Random Access Memory 

    Random Access Memory, or RAM, is the amount of temporary memory
    available in the computer.  The memory is temporary because
    information is stored in RAM only when the computer is turned on.
    If you turn the computer off, all the information in RAM is lost.
    (To permanently store information, you save it on a floppy disk or
    hard disk.) 

    RAM is measured in bytes.  One kilobyte, or 1K, is equal to 1,024
    bytes.  If a computer has 256K, it has 256 kilobytes (or 262,144
    bytes) of RAM. 

    Think of RAM as spaces in the computer for storing information
    while you are working.  The larger the RAM, the more bytes, or
    spaces, are available for use with a worksheet. 



    The /Worksheet Status Command 

    The /Worksheet Status command displays information about the
    worksheet settings and the amount of available memory on a
    worksheet.  Begin with a new 1-2-3 worksheet on the screen and
    select the /Worksheet Status command. 

    The headings for the worksheet settings and available memory
    appear at the top of the screen.  The third line displays the
    status of the settings and memory.  The number under Avail Memory
    is the amount of RAM (in bytes) available for use with the
    worksheet.  (This is not the available space on the disk.) 

    On a new worksheet, the Avail Memory status reflects the amount of
    RAM in the computer minus the memory used by 1-2-3 and the
    operating system.  The available memory will vary depending on
    which version of 1-2-3 you are using, the size of the operating
    system, and the particular drivers you have installed.  1-2-3
    requires approximately 100K, and the operating system may need
    from 12K to 30K depending on the system.  The remaining memory is
    available for a worksheet, and the amount of available memory will
    decrease as you enter information on the worksheet. 

    Note:  1-2-3 does not support the use of the Assign command in
           DOS.  If you have used DOS's Assign command, the available
           memory status may be over several megabytes. 

    If you add memory to the computer, the increase will automatically
    be reflected by an increased amount of memory available for the
    worksheet.  The amount of memory you can add varies from computer
    to computer. 



    Worksheet Organization and Memory Use 

    The way information is organized on a worksheet helps determine
    how much memory is needed.  1-2-3 defines the "active worksheet
    area" as a rectangle extending from cell A1 to the last column and
    row where information was entered or a cell was formatted.  You
    can identify this active area by pressing the End key followed by
    the Home key.  This moves the pointer to the cell in the
    lower-right corner of the active area. 

    It is important to know the size of the active area because 1-2-3
    allocates 4 bytes of memory for every blank cell that falls within
    the active area of the worksheet.  For example, if you entered
    information in cell T20, 1-2-3 would define the active area as the
    range from A1 to T20.  Memory would be allocated for that range
    even though you entered information in only one cell.  If you
    pressed the End key followed by the Home key, the pointer would go
    to cell T20. 

    Since blank cells in the active area take up memory, you should
    make the active area of the worksheet as compact and close to A1
    as possible. 

    Note:  If you are creating a worksheet containing a macro, keep in
           mind that blank rows and columns between the macro and the
           worksheet use up memory.  Although you should enter a macro
           in a blank area of the worksheet, choose a spot that will
           keep the active area of the worksheet as small as possible. 


    Using End-Home to Evaluate the Active Area 

    The following exercise uses the End and Home keys to examine the
    relationship between worksheet size, organization, and memory use. 

    1.  Start with an empty worksheet.  Move the pointer to any cell
        but do not enter any information.  To check the End-Home
        position, press the End key and then the Home key.  The
        pointer should move to cell A1 because you have not entered
        any information on the worksheet. 

    2.  Select /Worksheet Status.  Look under Avail Memory and write
        down the number of bytes available on the empty worksheet.
        Press the Return key to return to Ready Mode. 

    3.  Go to cell E1 and enter a single letter.  Move the pointer
        back to cell A1.  Now press the End and Home keys.  The
        pointer should move to cell E1 because 1-2-3 has defined the
        active area of the worksheet as the range from A1 to E1. 

    4.  Select /Worksheet Status again and look at the available
        memory.  1-2-3 has used 4 bytes for every empty cell in the
        active area between cells A1 and E1.  Write down how much
        memory is now available.  Press Return. 

    5.  Go to cell A10 and enter a single letter.  Press the End and
        Home keys, and the pointer should move to cell E10.  Remember,
        1-2-3 defines the active area as a rectangle extending from
        cell A1 to the last column and row where information was
        entered.  1-2-3 now defines the active area as the range from
        A1 to E10. 

    6.  Select /Worksheet Status again and look at the available
        memory.  Compare the number under Avail Memory to the other
        two numbers you wrote down.  1-2-3 has used 4 bytes for every
        blank cell in the active area between cells A1 and E10.  Press
        the Return key to return to Ready Mode. 


    Using /File Xtract to Adjust the Active Area 

    Sometimes the End-Home position is not where you expect it to be.
    If you have placed and then erased information or accidently typed
    a character in a remote cell, the End-Home position may be far
    from the worksheet data and you may get a Memory Full error
    message.  Memory Full means there is no more memory (RAM)
    available for use with the worksheet.  Erasing the contents of a
    cell does not change the active area of the worksheet, so erasing
    a cell or even deleting several rows will not increase the
    available memory. 

    To decrease the active area of a worksheet and regain memory, use
    the /File Xtract command.  /File Xtract copies all of the
    information in a specified range of the worksheet to a separate,
    new worksheet file.  The active area of this new worksheet file
    includes only the range of information you copied. 

    Note:  If you are doing a /File Xtract on a worksheet, be sure to
           include all the information you want copied into the new
           file.  Also, choose a new file name.  If you choose an
           existing file name, the worksheet you are extracting will
           replace the existing file.  See the 1-2-3 User's Manual for
           more information on /File Xtract. 

    1.  Start with a new worksheet and enter the following
        information, beginning in cell A1: 

                  A        B        C 
           1  1984     Jan.     Feb. 
           2  Rent         550     550 
           3  Food         400     350 
           4  Car          180      40 
           5  Medical       65       0 

    2.  Press the End and Home keys.  The pointer should move to cell
        C5.  Select /Worksheet Status and write down the amount of
        available memory. 

    3.  Go to cell E10 and enter a number or letter.  Go back to cell
        A1 and press the End and Home keys to identify the active area
        of the worksheet.  Select /Worksheet Status and write down the
        amount of available memory. 

    4.  Go to cell E10 and use the /Range Erase command to erase the
        information there.  Move back to cell A1 and press End and
        Home again.  Even though you erased the information in cell
        E10, 1-2-3 remembers that information was placed there and
        does not change the active area of the worksheet.  Select
        /Worksheet Status.  You will see you have not regained any
        memory by erasing cell E10. 

    5.  Move the pointer to cell A1 and select /File Xtract.  Select
        Formulas. 

    6.  Type in a new file name.  Name the new file Memory for this
        example.  Press Return. 

    7.  Now specify the worksheet range that you want to extract into
        the new file, Memory.  The range should include only cells
        with relevant information (A1 to C5 in this example).  Do not
        include the blank cells below or to the right of the worksheet
        data. 

    8.  Press Return, and 1-2-3 will extract the range you specified
        and make a new worksheet file. 

    9.  To see the new file, select /File Retrieve and choose the file
        named Memory.  Check the size of the active area of the new
        file by pressing End and Home.  The End-Home position should
        be cell C5.  Select /Worksheet Status and check the available
        memory.  It should be greater than the amount of memory you
        recorded before extracting the file. 


    Worksheet Content and Memory Use 

    The amount of information you can enter on a worksheet depends on
    the content of the cells as well as the organization of the data.
    The following information should help you evaluate memory use in a
    worksheet: 

    *  Blank cells use 4 bytes. 

    *  Integers (numbers between -32768 and 32768) use 4 bytes. 

    *  Real numbers use 12 bytes. 

    *  Labels up to 4 characters long use 6 bytes.  Longer labels use
       an additional byte for each additional character.  For example,
       a 3-character label would use 6 bytes, and a 10-character label
       would use 12 bytes. 

    *  Formulas use a minimum of 30 bytes.  The more complex a
       formula, the more memory it uses. 

    *  Range names use 32 bytes each, regardless of the length of the
       name. 

    *  Graph names use 461 bytes each, regardless of which options are
       used. 
```
{% endraw %}

## LOT103.TXT

{% raw %}
```
    1-2-3 NOTES 
    All Versions 
    September 20, 1984 
    Lotus Development Corporation 

    The @IF Function 

    NOTE 103 


    Introduction 

    The @IF function is one of 1-2-3's logical functions.  You use it
    to determine if a formula comparing two values is true or false.
    For example, @IF can compare the values in two cells; indicate if
    a formula produces a specified value; or determine if the value in
    a cell is greater than, less than, equal to, or not equal to
    another value.  When you enter an @IF function in a worksheet
    cell, 1-2-3 evaluates the formula and then displays a value in
    that cell, indicating if the formula is true or false. 

    Here is a simple example of an @IF function: 

           @IF(A1>B1,1,0) 

    The formula compares the values in cells A1 and B1.  If the value
    in cell A1 is greater than the value in cell B1, the formula is
    true and 1 will appear in the cell where you entered the @IF
    function.  If the formula is false, that is, the value in cell A1
    is not greater than the value in cell B1, 0 will appear in the
    cell. 


    Format 

    The @IF function consists of the function name and three
    arguments: the condition being tested, the value if true, and the
    value if false.  The arguments must be separated by commas with no
    intervening spaces, and all three must be enclosed in parentheses. 

    The following illustrates the four parts of the @IF function: 


                        @IF(A10=50,1,0) 

    1.@IF  2.Condition being tested  3.Value if true  4.Value if false


    1.  @IF is the function name. 


    2.  The condition being tested is a formula comparing two values
        that is either true or false.  In this example, A10=50 is a
        true condition if the value in cell A10 equals 50. 


    3.  The value if true is the value displayed in the cell
        containing the @IF function when the condition being tested is
        true.  In this example, 1 is displayed if the value in A10
        equals 50. 


    4.  The value if false is the value displayed in the cell
        containing the @IF function when the condition being tested is
        false.  In this example, 0 is displayed if the value in A10
        does not equal 50. 

    There are six ways to express the relationship between two values: 

         =      equal to 
         <>     not equal to 
         >      greater than 
         <      less than 
         >=     greater than or equal to 
         <=     less than or equal to 

    These are called logical operators. 

    You can enter values for the condition-being-tested,
    value-if-true, and value-if-false arguments in four formats: 

    *  actual numbers 
    *  cell addresses containing values 
    *  range names that refer to single cells containing values 
    *  valid formulas or functions that produce values 

    Although the values 1 and 0 are frequently used as the
    value-if-true and value-if-false arguments,any values will do.
    When evaluating many values on a large worksheet, you should use
    values that stand out when you look at the worksheet (for example,
    999 or -1). 

    Note:  You cannot use text or labels in an @IF function.  A label
           always has a value of 0. 


    Examples 

    The following examples show how values, cell references, and range
    names are used as the arguments in an @IF function.  They also
    show how the result of an @IF function changes when the values in
    the condition-being-tested argument are changed. 



    Example 1 

    @IF(A1>=500,1,0) means that if the value in cell A1 is greater
    than or equal to 500, the condition being tested is true and 1
    will be displayed.  If the value in cell A1 is not greater than or
    equal to 500, the condition being tested is false and 0 will be
    displayed. 

           Move:  to A1 
           Type:  500 [RETURN] 
           Move:  to C1 
           Type:  @IF(A1>=500,1,0) [RETURN] 

    Cell C1, where you wrote the @IF function, should contain 1
    because the condition being tested (A1>=500) is true. 

    Now change the value in cell A1 to 100.  Since the condition being
    tested is now false, cell C1 should contain a 0. 


    Example 2 

    @IF(B3>A3,B3,0) means that if the value in cell B3 is greater than
    the value in cell A3, the condition being tested is true and
    the value in cell B3 will be displayed.  If the value in cell B3
    is not greater than the value in cell A3, the condition being
    tested is false and 0 will be displayed. 

           Move:  to A3 
           Type:  100 [RETURN] 
           Move:  to B3 
           Type:  400 [RETURN] 
           Move:  to C3 
           Type:  @IF(B3>A3,B3,0) [RETURN] 

    Since the condition being tested is true, you will see 400 (the
    value in cell B3) displayed in cell C3. 

    Now change the value in cell A3 to 900. Since the condition being
    tested (B3>A3) is now false, 0 will replace 400 in cell C3. 


    Example 3 

    @IF(A5<=100,A5,999) means that if the value in cell A5 is less
    than or equal to 100, the condition being tested is true and the
    value in cell A5 will be displayed.  If the value in cell A5 is
    not less than or equal to 100, the condition being tested is false
    and 999 will be displayed. 

           Move:  to A5 
           Type:  75 [RETURN] 
           Move:  to C5 
           Type:  @IF(A5<=100,A5,999) [RETURN] 

    Since the condition being tested (A5<=100) is true, you will see
    75 in cell C5. 

    Now change the value in cell A5 to 200.  Since the condition being
    tested is now false, 999 will replace 75 in cell C5. 


    Example 4 

    This example uses range names to refer to cells containing values. 

    Note:  Type range names in capital letters when you use them in
           formulas to avoid confusing them with macro commands. 

    @IF(REVENUE>EXPENSES,1,-1) means that if the value in the cell
    named REVENUE is greater than the value in the cell named
    EXPENSES, 1 will be displayed.  If not, -1 will be displayed. 

           Move:  to A7 
           Type:  400 [RETURN] 
           Move:  to B7 
           Type:  100 [RETURN] 

    Using the /Range Name Create command, name cell A7 REVENUE and
    cell B7 EXPENSES. 

           Move:  to A7 
           Select:/rnc 
           Type:  REVENUE [RETURN] (two times) 
           Move:  to B7 
           Select:/rnc 
           Type:  EXPENSES [RETURN] (two times) 

    Now type the @IF function. 

           Move:  to C7 
           Type:  @IF(REVENUE>EXPENSES,1,-1) [RETURN] 

    Since the value in cell A7, REVENUE, is greater than the value in
    cell B7, EXPENSES, the condition being tested is true and 1 will
    be displayed in cell C7. 

    Now change the EXPENSES value to 500.  Since the condition being
    tested is now false, -1 will be displayed in cell C7.  


    Example 5 

    Assume you are the manager of a sales department and you want to
    give a 5 percent commission to every salesperson who recorded
    sales over $100.  Start with an empty worksheet and enter the
    following data, beginning in cell A1: 

                    A          B         C
           1   NAME        CURR. SALE   5% COMM.
           2   Jim              3000
           3   Mike              500
           4   Susan            2000
           5   Kate               84

    This example involves two new elements: using a formula as one of
    the @IF arguments and copying the @IF function into other cells in
    the column so that it can evaluate several entries.  First, write
    an @IF function that specifies that the commission will be 0 for
    sales of $100 or less and 5 percent for any amount over $100.  The
    function should look like this: 

           @IF(B2<=100,0,(B2-100)*0.05) 

    Enter this function in cell C2 and copy it into cells C3, C4, and
    C5.  When you copy the function down the column, all the cell
    references are relative.  This means the function uses the
    appropriate values for each row. 

    This @IF function means that if the current sales are $100 or
    less, 0 (no commission) will be displayed.  If the current sales
    are over $100, the value for 5 percent of the current sales over
    $100 will be displayed.  In this example, Jim, Mike, and Susan
    should get a 5 percent commission.  The worksheet should look like
    this: 

                    A          B         C 
           1   NAME        CURR. SALE   5% COMM. 
           2   Jim              3000      145 
           3   Mike              500       20 
           4   Susan            2000       95 
           5   Kate               84        0 


    Example 6 

    You can also use one @IF function nested inside another.  In this
    example, you will use a nested @IF function to change the
    commission structure set up in Example 5. 

    Assume that in addition to the 5 percent commission for sales
    over $100, you want to give your salespeople an extra 5 percent
    commission for sales over $500.  To do this, you nest an @IF
    function in the value-if-false argument of the original formula. 

    Put the label for column D in cell D1. 

           Move:  to D1 
           Type:  5% COMM + 5% 

    Enter the following formula in cell D2 and copy it into cells D3,
    D4, and D5: 

    @IF(B2<=100,0,@IF(B2<=500,(B2-100)*0.05,(B2-100)*0.05+(B2-500)*0.05))

     1.   2.    3. 4a.  4b.       4c.                4d.


    1.  @IF is the function name. 

    2.  B2<=100 is the condition being tested. 

    3.  0 is the value if true. 

    4.  This nested @IF function is the value if false: 

        a. @IF is the function name. 

        b. B2<=500 is the condition being tested. 

        c. (B2-100)*0.05 is the value if the nested condition is
           true.  If sales are less than or equal to $500 (B2<=500),
           the commission will be 5 percent of sales over $100. 

        d. (B2-100)*0.05+(B2-500)*0.05) is the value if the nested
           condition is false.  If sales are over $500, the commission
           will be 5 percent of sales over $100 plus 5 percent of
           sales over $500. 

    In this example, Jim and Susan should get an extra 5 percent
    commission for their sales over $500.  The worksheet should look
    like this: 

                    A          B         C               D 
           1   NAME        CURR. SALE   5% COMM.   5% COMM + 5% 
           2   Jim              3000      145             270
           3   Mike              500       20              20 
           4   Susan            2000       95             170 
           5   Kate               84        0               0 


    Compound Conditions 

    You can use compound conditions in @IF functions to evaluate two
    or more conditions at the same time.  Use the following logical
    operators to build compound conditions: 

           #AND#   Both conditions must be true for the result to be
                   true. 

           #OR#    If either condition is true, the result is true. 

           #NOT#   This logical operator uses only one condition.  If
                   the condition is true, the result will be false.
                   If the condition is false, the result will be true. 


    Examples Using Compound Conditions 

    Assume you own a small business and want to evaluate different
    accounts to identify those that have an outstanding balance and
    are overdue.  Start with an empty worksheet and enter the
    following information, beginning in cell A1: 

                    A          B          C         D      E      F 
           1    ACCOUNT   BALANCE     DAYS OVERD  #AND#   #OR#  #NOT# 
           2    Thomas           $300        30 
           3    Johnson          $400        80 
           4    Carter           $600        90 
           5    Bitler           $700        20 
           6    James            $300        50 


    Example 7: #AND# 

    You want to identify records in which the balance is greater than
    $500 and the payment is more than 60 days overdue. Use
    #AND# in an @IF function to test for both of these conditions.
    Enter the function in column D. 

           Move:  to D2 
           Type:  @IF(B2>500#AND#C2>60,999,0) [RETURN] 

    Now copy the function into cells D3, D4, D5, and D6. 

    This @IF function means that if the value in column B (BALANCE) is
    greater than $500 and the value in column C (DAYS OVERD) is
    greater than 60, the number 999 will be displayed in column D.
    Otherwise, 0 will be displayed. 


    Example 8: #OR# 

    You can use the same information to select all of the records in
    which the balance is greater than $500 or the payment is more than
    60 days overdue.  Enter the function in column E. 

           Move:   to E2 
           Type:   @IF(B2>500#OR#C2>60,-1,0) [RETURN] 

    Now copy the function into cells E3, E4, E5, and E6. 

    This @IF function means that if either condition is true, -1 will
    be displayed in column E.  If both conditions are false, 0 will be
    displayed. 


    Example 9: #NOT# 

    #NOT# tests for only one condition. You can use it to identify
    those records in which the balance is not less than or equal to 30
    days overdue. Enter the function in column F. 

           Move:   to F2 
           Type:   @IF(#NOT#C2<=30,1,0) [RETURN] 

    Now copy the function into cells F3, F4, F5, and F6. 

    This @IF function means that if this condition is true, that is,
    if the value in column C is not less than or equal to 30, 1 will
    be displayed.  If the condition is false, 0 will be displayed. 


    Now that you have completed examples 7, 8, and 9, your worksheet
    should look like this: 

                   A           B          C         D     E      F 
           1    ACCOUNT   BALANCE     DAYS OVERD  #AND#  #OR#  #NOT# 
           2    Thomas           $300        30        0     0      0 
           3    Johnson          $400        80        0    -1      1 
           4    Carter           $600        90      999    -1      1 
           5    Bitler           $700        20        0    -1      0 
           6    James            $300        50        0     0      1 


    Combining Compound Conditions 

    Example 10 

    You can combine compound conditions in one @IF function.  For this
    example, continue using the worksheet from Example 9.  You now
    want to identify the accounts that are both over $500 and 30 days
    overdue or that are more than 60 days overdue.  Enter the function
    in column G. 

           Move:   to G2 
           Type: @IF((B2>500#AND#C2>30)#OR#(B2<500#AND#C2>60),1,0)
                       [RETURN] 

    Now copy the function into cells G3, G4, G5, and G6. 

    If either of the conditions is true, 1 will be displayed in column
    G. If neither condition is true, 0 will be displayed.  Your
    worksheet should have 1 in cells G3 and G4 since both the Johnson
    and Carter accounts meet one of the conditions.  The Carter
    account is more than $500 and more than 30 days overdue, and the
    Johnson account is less than $500 and more than 60 days overdue. 
```
{% endraw %}

## LOT105.TXT

{% raw %}
```








              1-2-3 Notes
              All Versions
              October 30, 1984

              Lotus Development Corporation

              The Autoexec Batch File

              NOTE 105


              INTRODUCTION

              Batch files are an efficient way to store frequently used
              sequences of commands.  The operating system (DOS) automatically
              executes the sequence of commands whenever you execute the batch
              file.  All batch files are identified by a file name followed by
              the three letter extension .BAT.

              An autoexec batch file is a special type of batch file.  Whenever you
          start or restart the computer and load the operating system, DOS checks the
          disk for a file named AUTOEXEC.BAT.  When there is an AUTOEXEC.BAT file, DOS
          reads it first and follows its commands.

              The 1-2-3 System Disk comes with an AUTOEXEC.BAT file on it.  The
              file contains instructions to prompt for the date and time and to
              load the 1-2-3 program into the computer's memory.  You can modify
              1-2-3's AUTOEXEC.BAT file to do other chores, such as
              automatically change subdirectories on the hard disk or display a
              message to the user.  If there is a series of commands you use
              every time you start the computer, putting them into the
              AUTOEXEC.BAT file will save you time and keystrokes.

              This note explains how to change the AUTOEXEC.BAT file so that you
              enter the 1-2-3 worksheet without going through the Access System
              menu.


              LOOKING AT THE AUTOEXEC.BAT FILE

              You can examine the contents of the AUTOEXEC.BAT file by using
              DOS.  If you are using 1-2-3, exit from the 1-2-3 program by
              selecting Quit and Yes from the 1-2-3 Program menu.  When the
              Access System menu appears, select Exit and Yes to get into DOS.

              The DOS prompt should appear.  If you have a two-diskette system,
              the prompt should be A>, which represents the disk drive on the
              left, drive A.  If you have a hard disk system, the prompt may be
              another letter, such as C>, which represents the hard disk drive.
              For either system, if you do not have an A> prompt, type a: and
















              press the Return key.  You must have the A> prompt so DOS can read
              the AUTOEXEC.BAT file from the System Disk you will put in drive A.

              Note:  This note uses A> to represent the floppy disk drive and C>
                     to represent the hard disk drive.  Some computer systems
                     use different letters.  Check your system to determine how
                     the disk drives are defined, and substitute appropriate
                     letters for your system in the following exercises.

              Once you have the A> prompt, put the 1-2-3 System Disk in drive A.
              Use DOS's Type command followed by the file name to display the
              contents of the AUTOEXEC.BAT file:

                     Type:  type autoexec.bat [RETURN]

              The screen will look like this:

                     date
                     time
                     lotus

              The AUTOEXEC.BAT file supplied with 1-2-3 contains only three
              commands.  The Date and Time commands are the DOS commands that
              tell the computer to prompt for the date and time.  The Lotus
              command tells the computer to load the 1-2-3 files and display the
              1-2-3 Access System menu.

              Note:  To execute the AUTOEXEC.BAT file, the computer must be able
                     to find all the files listed in it.  If you have a two-
                     diskette system, all the files listed in the AUTOEXEC.BAT
                     file must be on the same disk as the AUTOEXEC.BAT file.  If
                     you have a hard disk system, the AUTOEXEC.BAT file and all
                     of the 1-2-3 files can be located in the root directory, or
                     the AUTOEXEC.BAT file can be in the root directory and the
                     1-2-3 files can be in a subdirectory.  If your 1-2-3 files
                     are in a subdirectory, there must be instructions in the
                     AUTOEXEC.BAT file that tell the computer where to locate
                     the 1-2-3 files.


              CHANGING THE AUTOEXEC.BAT FILE

              The following example changes the AUTOEXEC.BAT file so that
              you enter the 1-2-3 worksheet without going through the Access
              System menu.  This brings a worksheet to the screen quickly when
              you start 1-2-3.  Follow the directions appropriate to your
              system.


              Two-Diskette System

















              1.  Put the 1-2-3 System Disk in drive A.  Begin in DOS with the
                  A> prompt on the screen.  If you have another prompt, change
                  to the A> prompt:

                     Type:  a:[RETURN]

              2.  Using DOS's Copy command, tell the system to copy a new
                  AUTOEXEC.BAT file from the console (monitor):

                     Type:  copy con: autoexec.bat [RETURN]

              3.  The new AUTOEXEC.BAT file will still prompt you to enter the
                  date and time but it will bypass the Access System menu and go
                  directly to a worksheet:

                     Type:  date [RETURN]
                            time [RETURN
                            123 [RETURN]

              4.  Mark the end of the file with Control Z, the ASCII end-of-file
                  character.  Hold down the Ctrl key and press the Z key.  The
                  following appears on the screen:

                     ^Z

              5.  Press the Return key.  The drive A light will come on, and in
                  a few seconds, the following message will appear:

                     1 File(s) copied

                  You have created a new AUTOEXEC.BAT file and copied it over
                  the old one on the 1-2-3 System Disk.

              6.  To make sure you entered the commands correctly, use DOS's
                  Type command to see the contents of the new file:

                     Type:  type autoexec.bat [RETURN]

                  The file should look like this:

                     date
                     time
                     123

                  You will not see the ^Z because it is a hidden character.

              7.  Now warm boot (restart) the computer by pressing the
                  appropriate keys.  The drive A light will go on and the date
                  and time prompts will appear.  After you enter the date and
















                  time, the AUTOEXEC.BAT file will tell the computer to load the
                  1-2-3 program.  Soon, the 1-2-3 copyright screen will appear.
                  Press any key to get to a worksheet.

              Should you need to use the Access System menu after you have
              entered 1-2-3 using this new AUTOEXEC.BAT file, you must return to
              DOS and the A> prompt.  Put the 1-2-3 System Disk in drive A and
              type lotus.  The Access System menu will appear.

              If you want to go to the Access System menu rather than a 1-2-3
              worksheet each time you boot the system, follow the above
              procedure substituting the word lotus for 123 in the file.


              Hard Disk System

              To begin each computer session with 1-2-3, the AUTOEXEC.BAT file
              must be in the root directory on the hard disk, and it must
              contain directions to find and load the 1-2-3 files.  Although the
              1-2-3 files can be in the root directory, putting them in a
              subdirectory makes more efficient use of the hard disk.

              Note:  The root directory can contain only one AUTOEXEC.BAT file.
                     If there is already an AUTOEXEC.BAT file in the root
                     directory and you follow the directions in this example,
                     you will create a new AUTOEXEC.BAT file that will write
                     over the old one.

              1.  Begin in DOS with the C> prompt on the screen.  If you have
                  another prompt, change to the C> prompt (or the prompt that
                  represents the hard disk):

                     Type:  c: [RETURN]

              2.  Using DOS's Change Directory command, go to the root
                  directory:

                     Type:  chdir\ [RETURN]

              3.  Using DOS's Copy command, tell the system to copy a new
                  AUTOEXEC.BAT file from the console (monitor):

                     Type:  copy con: autoexec.bat [RETURN]

              4.  If the 1-2-3 files are in a subdirectory, enter the commands
                  that tell the system to prompt for the date and time, change
                  into the subdirectory containing 1-2-3, and automatically load
                  1-2-3:

                     Type:  date [RETURN]
















                            time [RETURN]
                            chdir c:\subdirectory name [RETURN]
                            123 [RETURN]

                  If the 1-2-3 files are in the root directory rather than a
                  subdirectory, type the following:

                     Type:  date [RETURN]
                            time [RETURN]
                            123 [RETURN]

              5.  Mark the end of the file with Control Z, the ASCII end-of-file
                  character.  Hold down the Ctrl key and press the Z key.  The
                  following appears on the screen:

                     ^Z

              6.  Press the Return key.  The hard disk drive light will come on,
                  and in a few seconds, the following message will appear on the
                  screen:

                     1 File(s) copied

                  You have created a new AUTOEXEC.BAT file and copied it into
                  the root directory on the hard disk.

              7.  To make sure you entered the commands correctly, use DOS's
                  Type command to see the contents of the new file:

                     Type:  type autoexec.bat [RETURN]

                  If the 1-2-3 files are in a subdirectory, the AUTOEXEC.BAT
                  file should look like this:

                     date
                     time
                     chdir c:\subdirectory name
                     123

                  If the 1-2-3 files are in the root directory, the AUTOEXEC.BAT
                  file should look like this:

                     date
                     time
                     123

                  You will not see the ^Z because it is a hidden character.

              8.  Open the drive A door.  Now warm boot (restart) the computer
                  by pressing the appropriate keys.  The drive A and C lights
















                  will go on and the date prompt will appear.  Make sure the
                  1-2-3 System Disk is in drive A.  Close the drive A door and
                  enter the date.  At the time prompt, enter the time.  The
                  AUTOEXEC.BAT file will tell the computer to load the 1-2-3
                  program, and soon, the 1-2-3 copyright screen will appear.
                  Press any key to get to a worksheet.

              Should you need to use the Access System menu after you have
              entered 1-2-3 using this new AUTOEXEC.BAT file, you must return to
              DOS and the C> prompt.  Make sure the 1-2-3 System Disk is in
              drive A and then type lotus. The Access System menu will
              appear.

              If you want to go to the Access System menu rather than a 1-2-3
              worksheet each time you boot the system, follow the above
              procedure substituting the word lotus for 123 in the file.

              DOS INFORMATION

              If you need more information about DOS, the root directory, or
              subdirectories, consult the DOS manual.

              Note:  Release 1A of 1-2-3 does not support all of the DOS 2.0 and
                     2.1 commands.  The Assign, Mode, and Path commands can
                     produce unpredictable results when used with 1-2-3.
```
{% endraw %}

## MACROLIB.TXT

{% raw %}
```








                                   1-2-3 Macro Tips
                          A Collection of Illustrative Macros

          The Macro facility (The Typing Alternative) is a powerful tool; it can allow you
          to get the most out of 1-2-3.  However, it can be a little intimidating.

          The basic concepts are simple.  When you use 1-2-3 without Macros, you press
          keys to enter numbers and labels, to move the cell pointer, and to issue
          commands.  Macros are labels containing just those keystrokes you would normally
          type into 1-2-3.  There are some keys that you can't type directly into a label,
          like the pointer movement keys and the function keys.  In Macros, these are
          represented by words in braces, like {left} or {graph}.

          Of course, it can get more complicated.  There are special 1-2-3 commands, the
          /X commands, that can only be used in Macros.  These determine which Macro
          instructions are actually executed; they allow you to write Macros that are
          computer programs.

          (If you haven't yet done so, read the 1-2-3 manual section on Macros before
          going on.)
          [23;1H[J
          Key S or <ENTER> to continue[23;30H!s
          [23;1H[JA good time to use a Macro is when you find yourself typing the same keystrok
          again and again.  Just remember what keys you are striking, and type the same
          strokes into a label, using the bracketed instructions when necessary.

          Macros are also problem-solvers.  One of the best times to write a Macro is when
          you are trying to perform some task, and none of the 1-2-3 commands seems to do
          exactly what you want.  Using a Macro, you can create your own commands!

          To help you get started, we've assembled some examples of Macros that we have
          found useful.  These examples are presented in terms of problems and solutions,
          because that's the way Macros tend to get developed.  However, even if you don't
          think you will ever face such a problem, it's probably worth reading the example
          anyway; they can teach you some useful general techniques.

          We've adopted a Macro-writing style that might be helpful.  The Macro name, and
          other cells with range names in the Macro, are labeled in the column to the left
          of the Macro.  This way, you can assign all the range names at one time, using
          /Range Name Label Right.  Also, we capitalize range names within Macros, and use
          lower case for the commands.  This makes the Macros easier to read.

          Here are some problems, and their Macro solutions.

                                    Editing Labels

          Problem:    To indent some labels.

               There are times when you've typed a column full of labels,
                and you want to indent some of them.  You could insert a
















                column, and move over the labels to be indented, but this
                might be easier.

          Solution:   The indent (\I) Macro.

               Place the cell pointer on the label cell you want indented.
                press ALT-I.

            Version 1:

                 \I    {edit}   Go into Edit Mode.
                       {home}   Put cursor at the beginning of Edit line.
                       {right}  Move past the Label-Prefix.
                         ~      Type two spaces and [Return] to leave Edit
                                Mode.

          This demonstrates the utility of using Macros to edit labels. With the {home},
          {end}, {right} and {left} notations in your Macro, you can move around on the
          edit line.  {del} and {bs} remove characters.  To insert characters, simply type
          them into the Macro string.  If you want to leave Edit Mode include a tilde (~)
          to represent an [Return].

          To use this Macro to indent a series of labels in a column, you must position
          the cell pointer, press ALT-I, move the cell pointer down, press Alt-I, and so
          on.  We can make the Macro more useful by adding the {down} key.


                 \I    {edit}{home}    | This is Version 1.
                       {right}  ~      |
                       {down}            Move the cell pointer to the
                                         next label.

          To use it, simply press ALT-I repeatedly.  You can manually skip over labels you
          don't want to indent.

          Adding the {down} keystroke to the Macro makes it a lot easier to use.  Whenever
          a Macro will be used repeatedly, on different cells in a particular order, it's
          a good idea to include arrow keys at the end of the Macro, to move the cell
          pointer to what will probably be the next cell.

          In fact, some useful Macros consist of just arrow keys.

                                    Movement Macros

          Problem: To move the cell pointer more than one cell at a time.

              You can create Macros that move the cell pointer in big
               jumps.  These can be for special purposes, as when working on
               data where corresponding numbers are six columns apart.

















              Or you can create a set of general purpose big step Macros.

          Solution: Big step Macros, Left (\L), Right (\R), Up (\U), Down
                    (\D)

          You could also choose to give these Macros names of keys that form a diamond
          pattern: Up (\I), Left (\J), Right (\K), and Down (\M).

                 \L {left}{left}{left}{left}

                 \R {right}{right}{right}{right}

                 \U {up}{up}{up}{up}

                 \D {down}{down}{down}{down}

          Now, to move in bigger steps, just press ALT-L, R, U or D.

          Here's one last motion-key Macro that lets you use the numeric keypad.

                                   Using the Keypad

          Problem:To use the numeric keypad without having to switch off
                   the Num-Lock to move the cell pointer.

                  The problem with the numeric keypad is that serves two
                   purposes: movement keys and numbers.  If you want to use
                   the keypad as numbers, you can use the [Shift] key to
                   temporarily turn them back into arrows.

                  This Macro, however, moves the cell pointer each time you
                   enter a number, so you don't have to use any keys except
                   the number and [Return] keys.

          Solution: The move Macro (\M).

          Use this when you want to enter a column or row of numbers using the keypad.
          This example moves the cell pointer down after you press [Return].

          Use the {?} to make the Macro stop to get input before moving down.

               \M {?}     Wait for input; resume when [Return] is pressed.
                  {down}  Move down.

          After you press ALT-M, 1-2-3 will wait until you press [Return] before
          continuing with the execution of the Macro.  You can tell that you are in a
          Macro by the little CMD indicator next to the Mode Indicator (upper right corner
          of the screen).  And you can tell that it's waiting for input because the Mode
          is READY.

















          So far, this isn't very useful.  It will move the cell pointer down, but to use
          it again, you must press ALT-M, which is about as much trouble as Shift-[Down
          arrow].

          What we can do is make the Macro "loop," repeat itself.  To do this, use the /XG
          command, which tells the Macro where to go to get its next instruction.  Note
          that this is different from the {goto} function keystroke, which moves the cell
          pointer, but does not affect the steps in the execution of the Macro.

          Place the cell pointer at the top of the column in which you want to type
          numbers.  Press Alt-M and press the Num Lock key (or vice versa).  Type the
          numbers you want to input, and press [Return] after each entry; the cell pointer
          will move down automatically. When you are finished, press Ctrl-Break to stop
          the Macro (and turn off the [Num Lock] so you can use the arrow keys).

          This Macro was discovered by Rich Landsman at Lotus.

                 \M    {?}       | This is version 1.
                       {down}    |
                       /xg\M~      Go back to the beginning of the Macro.

          This is an "infinite" loop; it keeps going around in circles until you stop it.
          After you have finished putting your numbers in the column, press Ctrl-Break to
          stop the Macro.

          Later we will see how to get a Macro loop to stop itself, but for now, let's
          look at a different type of problem.

                               Putting a Value in a Cell

          Problem: To record the date of the last update.

                  Many people have found the @today function and the
                   related Date formats to be a useful way of dating printed
                   material.  However, when you use @today to put the date
                   on a worksheet, and save it, the date will change when
                   you read in the worksheet and recalculate it.  This is
                   fine for some purposes, but doesn't give you a secure
                   record of the last day a worksheet was revised.

          Solution: The Update (\U) Macro.

          Name the cell in which you want the date "DATE," and give it a date format.
          After you have made your revisions, press ALT-U, and then save the file.


            Version 1:

                 \U    {goto}DATE~  Go to the date cell.
                       @today       Type in the function.
















                       {calc}~      Replace the function with its present value.

          This works, but it has one problem.  It takes you from wherever you are on the
          worksheet, and leaves you at "DATE."

            Version 2:

                 \U    /rncHERE~        Give the name "HERE"
                       ~                 to the current cell pointer cell.
                       {goto}DATE~    |
                       @today         | This is Version 1.
                       {calc}~        |
                       {goto}HERE~      Return to your original position.
                       /rndHERE~        Delete the name.

          Delete the name at the end of the Macro so that when you use it again, you don't
          end up the last place it was created.  Remember: when you try to create a named
          range for a name that already exists, the cell pointer goes back to the named
          range's last position.

          You could insert a {bs} to bring it back to the position when the Macro was
          invoked: /rncHERE~{bs}~, but DON'T.  If HERE's old position was referred to in a
          formula (e.g.  +C5+HERE+E5), then after you moved it, the formula would include
          HERE, meaning its new position.

          D5 the name HERE, the formula automatically became +C5+HERE+E5. And it would
          stay that way, wherever you put HERE, until you /Range Name Delete HERE.

          Later on, we'll demonstrate Macros that depend heavily on range names, names
          that are applied to first one cell, then another.  If you don't delete the range
          name before applying the old range name to a new range, you can end up with all
          your formulas and range names referring to the same cell.

          A good general rule is: whenever you create a range name within a Macro, delete
          it before you exit, or before you change the location(s) to be referred to by
          the name.

          Okay, one more version.  We don't really need it, but Version 2 does fail if
          you've created another range named HERE.  Anyway, this is a chance to introduce
          a nice technique (spelled "trick") that one of the Lotus staff discovered.


                 \U    /dfDATE~@today~~~  Put the value of today's date in the
                                           cell named "DATE."

          That's it!  For this gem, we can all thank Bill Liles, of Product Development
          (this isn't the kind of development we expected, but don't get in the way of the
          freight train of creativity).

          Bill found that you could use the /Data Fill command to plug values into cells.
















          In fact, in the next example, we'll see how it can be used to increment,
          decrement or otherwise operate on the value currently in a cell.

          Let's string that same Macro (Version 3) down a column so we can more easily
          explain what is happening.

                 \U    /df       Execute the /Data Fill command.
                       DATE~      on the range (one cell) named DATE.
                       @today~   Make the Start value @today.
                       ~~        Accept the defaults for Step and Stop
                                  (they won't be used in a one-cell range).

          What is now in DATE is the VALUE of @today, not the function.

          The next example will show how to use this technique to count how many times you
          loop, and stop you when you're done.  It also demonstrates how to use range
          names to find out something about the current cell.

                                    Stopping a Loop

          Problem: To make some cells blank.

                  When 1-2-3 evaluates a formula it treats empty cells as
                   having a value a value of zero.  This can create
                   confusion when you have missing data.  You can substitute
                   @NA for missing cells, but it doesn't look very neat.

                  Here is a listing of salaries for two years.  The user
                   wanted to create a column with the percent change in
                   salary, but some people weren't employed at this company
                   for both years.  For them, he wanted just blank cells.

                            Salary 81   Salary 82
                            $15,000     $16,500
                                        $36,000
                            $13,000     $14,500
                            $35,000
                            $19,500     $21,000

          Solution: A Macro and a formula.

          A standard formula for percent change in salary would be:

                   (Sal82-Sal81)/Sal81

          But this gives a value of @ERR when Salary 81 is missing, and a value of -1 when
          Salary 82 is missing.  Let's embed our standard formula in an @if function
          formula.

                  @IF((Sal81=0)#OR#(Sal82=0),999,(Sal82-Sal81)/Sal81)

















          This takes on a value of 999 when either figure is missing; otherwise it gives
          the correct value.  Here is how the figures look now.
                            Salary 81   Salary 82  Percent change
                            $15,000     $16,500         10.00%
                                        $36,000      99900.00%
                            $13,000     $14,500         11.54%
                            $35,000                  99900.00%
                            $19,500     $21,000          7.69%

          Version 1:

          Next, place the cell pointer at the top of the "Percent Change" column and press
          ALT-B.  Repeat this until the entire column is cleaned up.

                 \B    /rncHERE~            Create the one-cell range, HERE.
                       ~                     at the present position.
                       /xi(HERE=999)~/re~   If HERE equals 999, erase the cell.
                       /rndHERE~            Delete the cell name (!)
                       {down}               And move down.

          And this is the result:

                            Salary 81   Salary 82  Percent change
                            $15,000     $16,500         10.00%
                                        $36,000
                            $13,000     $14,500         11.54%
                            $35,000
                            $19,500     $21,000          7.69%

          Finally, we can put the above Macro in a loop that stops itself. To do this, we
          will create ahead of time two one- cell named ranges, NCELLS and CNUMBER.
          First, we'll count the number of cells in the column, and put the number in
          NCELLS.  Then, each time we check (and perhaps erase) a cell, we'll add one to
          CNUMBER.  When CNUMBER is greater than NCELLS, we're finished.

          Version 2:

                 \B    /rncHERE~             Create a range named HERE.
                       {end}{down}~          Make it the whole column.
                       /dfNCELLS~            Put in NCELLS the
                       @count(HERE)~~~       number of cells in the column.
                       /rndHERE~             Delete HERE.
                       /dfCNUMBER~0~~~       Start counting cells with 0.
                 LOOP  /rncHERE~           | ]<-- This cell is named "LOOP."
                       ~                   |
                       /xi(HERE=999)~/re~  | This is Version 1.
                       /rndHERE~           |
                       {down}              |
                       /dfCNUMBER~           Increase the number in CNUMBER
















                       CNUMBER+1~~~           by one (increment).
                       /xi(CNUMBER<=NCELLS)~/xgLOOP~
                                This last line has the Macro resume
                                 execution at the cell named LOOP, until the
                                 number in CNUMBER is equal to the number in
                                 NCELLS.

          One last example.  This one demonstrates how you can turn a number into a
          formula, and back to a number, using {Edit}.

                                 Accumulating Numbers

          Problem: To Update a value.

                   The user was maintaining a database of sales people and
                    their current monthly sales and sales year-to-date.  He
                    wanted to be able to enter the monthly figures and
                    update the year-to- date.

                         Salesperson       Year-to-date       Current
                         DiAngelo               $83,000        $6,000
                         Gottfried              $56,000        $8,000
                         Jones                  $48,000        $5,000
                         Washington             $77,000        $9,000
                  These were the figures after the previous month's
                   entries.  They are numbers, not formulas.

          Solution: The accumulate Macro (\A).

          This Macro takes advantage of the fact that while editing a formula, you can
          point to cells, just as when you are first entering formulas.  You must be at
          the end of the edit line and the last character must be one that could be
          followed by a cell or range such as an operator (e.g.  +, -, #AND#) or an open
          parenthesis.  To start pointing to cells, rather than move along the edit line,
          press the {edit} key again to put you in VALUE mode.  When you then press the
          pointer-movement key you will be in POINT mode, as when entering a formula.

          Place the cell pointer on the first "current" cell.  Press ALT-A. Type the new
          current value and press [Return].  Press ALT-A again to enter the value for the
          next salesperson.

          Version 1:

                 \A    /re~            Erase the old current value.
                       {?}~            Wait for user to put in new value.
                       {left}          Go to the year-to-date cell.
                       {edit}          Edit it.
                       +               Adding the plus turns it into a formula.
                       {edit}          The {edit} key puts you in VALUE Mode.
                       {right}~        Add the value in the "Current" cell.
















                       {edit}{calc}~   Turn the formula back into a number.
                       {right}{down}   Move to next current cell.
          Remember that when the Macro is waiting for input ({?}) the CMD indicator is
          next to the READY Mode indicator.

          Next, let's put the Macro in a loop, so that it will keep asking for this
          month's figures, and stop when it reaches the end of the column.  The only
          requirement is that there be no empty cells in the year-to-date column (except
          at the end), so put zeros in any empty cells.

          This version uses a different technique to stop at the end of the column; it
          checks to see if the next cell is blank, and if it is, it stops.

          Actually, there is a problem finding out if a single cell is blank.  Labels,
          blank cells and zeros all have the value of zero, so you can't use that.  And
          @count always has a value of one if its' argument is a one-cell range.

          This Macro uses @count and a two-cell range, named TEST.  The range consists of
          the potential next "Current" cell and the one cell above it.  The value of
          @count(TEST) will be 2, until it hits the end of the column, when it will be 1.

          Version 2:

                 \A    /re~            |
                       {?}~            |
                       {left}          |
                       {edit}          |
                       +               |  This is Version 1.
                       {edit}          |
                       {right}~        |
                       {edit}{calc}~   |
                       {right}{down}   |
                       /rncTEST~{up}~
                       /xi(@count(TEST)=2)~/rndTEST~/xg\A~
                       /rndTEST~

          It's hard to put comments next to those long Macro lines, so let's take the last
          three lines one at a time:

                      /rncTEST~{up}~

          Creates a two-cell range consisting of the potential next "Current" cell and the
          one above it.

                      /xi(@count(TEST)=2)~/rndTEST~/xg\A~

          This checks to see if the value of @count(TEST) is still 2.  If it is, it
          deletes TEST (important!) and tells the Macro to start again from the beginning.
           This Macro label had to be long, because the /xi command tells the Macro to do
          the rest of the Macro label, if the condition is true.

















                      /rndTEST~

          And finally, to clean things up, we delete TEST at the end of the whole Macro.
          We had to do this because when @count(TEST) is NOT 2, the rest of that line
          doesn't get executed, and TEST still exists.

          Well, that should be enough to help you get started with Macros. Give them a
          try, and write some of your own.
```
{% endraw %}

## PHOTOEST.DOC

{% raw %}
```
                 INSTRUCTIONS FOR PHOTOEST-123 WORKSHEET


                            By Steven Stone 



        This estimate form will allow you to do bids quicker and more
accurately than you have ever done before.  It is basically the standard
ASMP estimate/assignment/confirmation form transposed to a 123 worksheet.
Unlike the basic form however, this will do your math, and total
everything up for you as well. Feel free to modify it for your own
special needs.  All prices are just starting figures, add your own. 
You will find this program will allow you to quickly do what ifs,
and see what an extra day or another dollar per shot will do for the total
bill.  I have found, since I began using it, my bids are much more accurate,
and my clients more assured of just what they are getting for their money.

        If you find this template of value, a donation would be appreciated.
Please send a suggested donation of $15 to:


                        Steven Stone Photography
                        40 Rugg Road
                        The Albany Bldg
                        Allston, Ma. 02134



        Good Computing; Good Shooting; and of course Good Bidding!

If you have any questions, suggestions, or improvements,
give me a call at (617) 782-1247


```
{% endraw %}

## PICFIL.TXT

{% raw %}
```
	  LOTUS 1-2-3 (TM) .PIC FILE FORMAT DETAILS

	THIS IS A PARTIAL DECODING OF THE SAMPLE PIE-CHART FILE
FACILITY.PIC WHICH COMES ON THE PRINTGRAPH DISK (OR DID,ANY-
WAY, ON MINE). THE HEX LISTING IS THE DATA YOU WOULD SEE ON A
DEBUG DISPLAY OF THE FILE'S CONTENTS; THE REST OF EACH LINE IS
MY INTERPRETATION OF THE MEANING, VERIFIED IN MOST CASES BY
PATCHING OTHER DATA INTO THE FILE, MAKING A PLOT, AND SEEING
WHAT EFFECT THE CHANGES MADE.

HEX	MEANING OF DATA
------	-----------------------------------------------------
0100	HEADER WORD 1, VALUE 0001 (BYTES REVERSED IN FILE)
0000	HEADER WORD 2
0100	HEADER WORD 3
0800	HEADER WORD 4
4400	HEADER WORD 5
0000	HEADER WORD 6
	SIGNIFICANCE OF THESE 6 HEADER WORDS IS NOT KNOWN, BUT
	CHANGES TO THEM OFTEN RESULT IN DIVIDE OVERFLOW ERRORS
	WHEN PRINTGRAPH ATTEMPTS TO PLOT THE CHANGED FILE.
000C	X-COORDINATE SCALING FACTOR, DECIMAL 3072
7F09	Y-COORDINATE SCALING FACTOR, DECIMAL 2431
	CHANGES TO THESE SCALING FACTORS, WITHIN REASON, WILL
	CHANGE THE SIZE OF THE PLOTTED GRAPH ON THE PAGE
06	START OF PLOT DATA. FROM HERE ON, 16-BIT QUANTITIES
	ARE STORED IN THE FILE HIGH BYTE FIRST, THEN LOW -- THE
	EXACT REVERSE OF 8086/8088 STANDARD USED IN THE FIRST
	SIX WORDS.
A7	SELECT FONT...
  01	...NUMBER 2
B0	SELECT COLOR NUMBER 1 (B1=COLOR 2, ETC.)
A700	SELECT FONT 1
AC	SET CHARACTER SIZE TO...
  008C	...X=140 AND...
  0078	...Y=120. NOTE HI-LO BYTE REVERSAL.
A0	MOVE, WITH PEN UP, TO...
  063F	...X=1599 AND...
  0906	...Y=2310. COORDINATE 0,0 IS AT LOWER LEFT OF SCREEN.
A8	PRINT LABEL...
  02	...CENTERED HORIZONTALLY BELOW POINT 1599,2310...
    42	B	(ASCII CHARACTERS FOLLOW, FOR LABEL)
    55	U
    44	D
    47	G
    45	E
    54	T
    00	...END OF LABEL
AC	SET CHARACTER SIZE TO...
  0046	...X=70 AND...
  003C	...Y=60
A701	SELECT FONT NUMBER 2
A0	MOVE, WITH PEN UP, TO...
  063F	...X=1599...
  083E	...Y=2110
A8	PRINT LABEL...
  04	...CENTERED HORIZONTALLY ABOVE POINT 1599,2110...
    46 55 4E 43 54 49 4F 4E 00	"FUNCTION"
A0	MOVE, WITH PEN UP, TO...
  0907	...X=2311...
  040B	...Y=1035 (START TO DRAW PIE, AT RIGHTMOST EDGE)
A2	DRAW, WITH PEN DOWN, TO...
  0906	...X=2310...
  03F0	...Y=1008
A2	DRAW, WITH PEN DOWN, TO...
  0904	...X=2308...
  03D4	...Y=980
	...THIS GOES ON FOR MANY PAGES OF DEBUG LISTING, BUT
	IT ALL FOLLOWS THE ABOVE PATTERN. AT THE END...
60	END OF PLOT DATA
1A	DOS EOF MARKER BYTE

THE BYTE WHICH FOLLOWS THE A8 "LABEL" MARKER INDICATES LABEL
PLACEMENT WITH RESPECT TO THE MOST RECENTLY ESTABLISHED PEN
LOCATION, AND ORIENTATION OF THE LABEL ON THE PAGE. THE LOW
FOUR BITS, TAKEN MOD 9, INDICATE PLACEMENT:
	X0	LABEL CENTERED VERTICALLY AND HORIZONTALLY
			OVER THE POINT
	X1	LABEL CENTERED VERTICALLY, EXTENDING TO THE
			RIGHT OF THE POINT
	X2	LABEL CENTERED HORIZONTALLY BELOW THE POINT
	X3	LABEL CENTERED VERTICALLY, EXTENDING TO THE
			LEFT OF THE POINT
	X4	LABEL CENTERED HORIZONTALLY ABOVE THE POINT
	X5	LOWER RIGHT CORNER OF LABEL ON THE POINT
	X6	LOWER LEFT CORNER OF LABEL ON THE POINT
	X7	UPPER RIGHT CORNER OF LABEL ON THE POINT
	X8	UPPER LEFT CORNER OF LABEL ON THE POINT
THE NEXT HIGHER TWO BITS INDICATE ROTATION OF THE ENTIRE LABEL,
INCLUDING PLACEMENT, WITH RESPECT TO THE REST OF THE GRAPH:
	0X	NORMAL PLACEMENT (0-DEGREE ROTATION)
	1X	ROTATED 90 DEGREES CCW
	2X	ROTATED 180 DEGREES (UPSIDE DOWN)
	3X	ROTATED 270 DEGREES CCW (90 DEGREES CW)
NO "OPCODE" BYTES OTHER THAN THOSE LISTED ABOVE HAVE BEEN FOUND
IN ANY OF THE .PIC FILES I HAVE EXAMINED; OTHERS MAY BE USED,
HOWEVER. THIS INFORMATION SHOULD BE ENOUGH TO LET YOU CHANGE
FONTS OR LABEL PLACEMENT IN .PIC FILES, USING DEBUG TO DO THE
HEX PATCHING. MY SOFTWARE PUBLISHING ENTERPRISE, "THE SOFTWARE
FACTORY", IS DEVELOPING A USER-FRIENDLY EDITOR TO PERMIT YOU
TO EDIT .PIC FILES WITHOUT THE NEED FOR HEX PATCHES; IT WILL
ALLOW ADDITIONAL TEXT TO BE ADDED TO A GRAPH, OR ANY WORDING
TO BE CHANGED. LEAVE A MESSAGE TO 73105,1650 HERE OR ON SASIG,
OR USE EMAIL, IF YOU'RE INTERESTED IN GETTING AN ANNOUNCEMENT
WHEN IT IS READY.		JIM KYLE, 12 MARCH 1984
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0301

     Volume in drive A has no label
     Directory of A:\

    123PREP  DOC     14317   8-26-84  11:06a
    FOR_NEXT WKS      2560   1-01-80  12:03a
    MENU     WKS      8832   7-29-84   8:55a
    TEXTDEMO WKS      6016   1-01-80  12:02a
    123Q&A   TXT     14999  11-25-84   5:41p
    123DOC   DOC      3456  12-07-84   1:56p
    123DOC   EXE     24704  12-07-84   2:01p
    123DOC   BAS      8192  12-07-84   2:03p
    ADDLABEL DOC      1062   1-15-87   6:24p
    ADDLABL2 WKS      7808   1-25-85  11:18a
    PHOTOEST WKS      9984   7-04-84   5:51a
    123RANGE BAS      6912   7-17-83  11:24a
    PHOTOEST DOC      1408   7-04-84   5:52a
    123PREP  EXE     33792   8-26-84  11:06a
    PICFIL   TXT      4108   3-19-84  10:11p
    LOT102   TXT     11136  11-04-84  11:14p
    LOT103   TXT     15744  11-04-84  11:18p
    LOT101   TXT      8489  11-24-84   8:25p
    RATIO    WKS     24064   5-26-84   8:22p
    123XIMAC TXT      8608  11-24-84   8:04p
    123MAIL  TXT     21545  11-24-84   7:49p
    LOT105   TXT     13058  11-24-84   8:21p
    DATAFILL TXT      8067  11-24-84   8:14p
    MACROLIB TXT     23984  11-24-84   7:24p
    LOOPMAC  TXT      8015  11-24-84   8:09p
    FILES301 TXT      1572   1-29-87   8:34p
    ADDLABL3 WK1      8413   1-15-87   6:17p
           27 file(s)     300845 bytes
                            9216 bytes free
