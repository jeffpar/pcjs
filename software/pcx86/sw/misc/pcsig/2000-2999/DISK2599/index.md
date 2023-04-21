---
layout: page
title: "PC-SIG Diskette Library (Disk #2599)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2599/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2599"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CHTREE.DOC

{% raw %}
```



       CHTREE documentation.

       EQUIPMENT REQUIRED TO USE CHTREE

       CHTREE is written for (R)MICROSOFT C  (see LIMITATIONS below).
       IBM or Compatible PC.
       CGA card or better.
       640k RAM
       Hard Disk desirable.
       IBM Compatible printer.
       DOS 2.1 or later.

       WHAT CHTREE CAN BE USED FOR

       CHTREE can be used to understand C source code that someone else
       coded. Another use is to use CHTREE as a help in documenting your
       program. CHTREE will find in what file(s) a particular function is
       defined, where it is used, and what other functions call it.
       CHTREE wil search for function names, strings and labels. CHTREE
       is useful for establishing prototypes when moving functions from
       one file to another. CHTREE will list the functions which are
       defined by file and the function calls by file or by nesting level.
       CHTREE can be used to find the most called functions so that you
       can maximize the speed of your code by optimizing the most called
       functions.

       CHTREE has line printer capability for printing parts or all of line
       numbered source files and selective parts of trees by nesting level.

       FOR HELP IN USING CHTREE

       Run chdoc.exe, use the F1 key in CHTREE (both require chtree.hlp
       to be in the same subdirectory), or see HOW TO USE CHTREE below.

       IN CASE OF TROUBLE (program hangs up)

       If CTRL-C is pressed while the LOGICAL start up file is being
       written to disk, DELETE the file ending with .dtp and the file
       ending with .dtl. CHTREE will hang up trying to use the incomplete
       file. Press CTRL-ALT-DEL to terminate CHTREE if it hangs up.

       BACKUP THE DISTRIBUTION DISK

       CHTREE was compiled on a (R)COMPAQ Portable with a 20M (R)HARDCARD, 
       640K of RAM, with CGA color text mode (8088). 





       TO RUN "GO.BAT"

       Make sure to enter the following in lower case.
       To run go.bat place a copy of the distribution disk in drive a:.
       Change to drive a: and at the prompt type    go <enter>

       TO EXIT CHTREE

       Press ESC until the exit message appears on line 23 followed by Y to
       exit CHTREE.

       THE ONLY FILES REQUIRED TO RUN CHTREE ARE CHTREE.EXE AND CHTREE.HLP.

       COMPAQ is a registered trademark of COMPAQ Computer Corporation.
       HARDCARD is a registered trademark of Plus Developement Corporation.
       MICROSOFT is a registered trademark of Microsoft Corporation.

       INSTALLATION/DISK CONTENTS

       Copy chtree.doc, go.bat, chdoc.exe, chtree.exe, chtree.hlp, sample.c
       to a hard disk subdirectory (i.e. \chtree\). To understand CHTREE key
       usage run chdoc.exe. It contains the help menu system.



       !!! COMMANDS MUST BE IN LOWER CASE !!!


       HOW TO RUN WITH MULTIPLE C FILES

       Command Line Method:
       Type chtree followed by the c source file names including their paths.
           Example: chtree \path1\file1.c \path2\file2.c \path3\file3.c <enter>
       Up to 128 characters including space characters may be used. If the total
       number of characters exceedes 128 use the command file method. The .c 
       extension must be included on source file names when entered on the 
       command line.

       Command File  Method:
       Create an ascii text file with one \path\filename per line. Type
       chtree followed by an @ symbol followed by the command file name.
       The command file name can be any valid MS-DOS file name. The .c
       extension must be included on source file names when used in the 
       command file.
 
       Example:    command:            chtree @\path\file.cmd <enter>
                   file.cmd contains:
                                       \path1\file1.c
                                       \path2\file2.c
                                       \path3\file3.c

       Up to 20 c source files can be used.





       THE INFORMATION LINE 

       The Shaded Video INFORMATION LINE contains information for the current 
       shaded video marked cursor line. 

       In the Tree displays, the information from left to right is: 
           1. The path and file name of the file where the function is called 
              or defined. 
           2. The call nesting level of the function call, a foward slash, and 
              the maximum nested level of all function calls in the Tree. 
           3. Whether the function is:  DEFN....a function definition 
                                        CALL....a function call 
                                        MACRO...a macro substitution 
                                        GOTO....a goto label construct 
                                        LABEL...the target of a GOTO 
           4. The Scroll status: S+....scroll by page one line at a time 
                                 S-....scroll by page 18 lines at a time 

       In the C Source displays, the information from left to right is: 
           1. The path and file name of the C source file being displayed. 
           2. The line number of the cursor marked line. 
           3. The Scroll status: S+....scroll by page one line at a time 
                                 S-....scroll by page 18 lines at a time 


       FILES CREATED BY CHTREE

       Two startup files are written to the disk in the same subdirectory
       as the chtree.exe file. These files are named by CHTREE by using
       the name of the source file containing main() and adding the
       extension .dtp for the physical tree and .dtl for the logical tree.
       These files are in binary. Do not try to read them with a word 
       processor. The .dtp and .dtl files are loaded by CHTREE if no C
       files have been modified since CHTREE was last run.





       CHTREE KNOWN LIMITATIONS

       1.  Commands to run CHTREE must be entered in lower case.

       2.  The total number of source lines is limited to the amount of
           available RAM space. About 8000 source lines sparsely commented
           can be used.  As the available RAM space approaches 0, the
           program initialization and source file loading will slow down.
           It is recommended that source files be kept small and use more
           of them. With a large number of small source files, CHTREE will
           except a greater number of total c source code lines.
     
       3.  CHTREE may not work if there are preprocessor directives in the
           source code other than #include and #define.

       4.  CHTREE will not recognize complicated function definitions. It will
           recognize filename(, filename (, *filename(, *filename (.

       5.  CHTREE is based on the (R)MICROSOFT C library (version 5.1). If
           other compilers have library functions not in the (R)MICROSOFT C
           library, they will not be screened out and will show up in the trees.

       6.  When the Scroll Lock key in the F1 Help Menu is pressed, the key is 
           toggled. After leaving the F1 Help Menu the Scroll key remains
           toggled. Note the INFORMATION LINE S+/S- state after leaving the
           F1 Help Menu.


       INPUT FROM YOU

       Suggestions are welcome. If you know of a simple way of getting around
       CHTREE's limitations or have suggestions for improvement, such as
       adding or deleting features, the Company would like to hear from you.
       Also if you find additional uses for CHTREE the Company would greatly
       appreciate hearing from you. It would be nice to have lists of Library
       functions, pragmas, and strange types for other compilers from you. I
       will provide a free update to anyone whose contributions are used.

       Send comments and questions to:
                         Comments
                         FOWLER SOFTWARE ENGINEERING Co.
                         P.O. BOX 41201
                         ROCHESTER, NY  14604





       COPYRIGHT

       CHTREE is copyrighted shareware. A fee of $25.00 is required if
       you find CHTREE useful. Additional copies can be obtained from
       PC-SIG in Sunnyvale, Calif., (800) 245-6717 or a registered copy
       from FOWLER SOFTWARE ENGINEERING Co.

       Send the $25.00 plus tax to: FOWLER SOFTWARE ENGINEERING Co.
                                    P.O. BOX 41201
                                    ROCHESTER, NY  14604

       Thank you for your support.

       DISCLAIMER: FOWLER SOFTWARE ENGINEERING Co. and it's personnel
       are not responsible for any unexpected or damaging results from 
       using CHTREE and it's supporting software. The Company and it's
       personnel are not responsible for documentation errors.
       Make backup copies of your source code before using CHTREE for
       the first time.

       BUGS

       If you find a bug please let the Company know. Please include a 
       source code example which when run will result in the bug. Also,
       if possible, the keys pressed up to and including the key press
       causing the bug.





       HOW TO USE CHTREE

       F1:HOW TO USE HELP 

       Press F1 to disply the Help Menu, then press the key prior to
       the colon. Example...Scroll Lock: means to press the SCROLL LOCK
       key for it's help screen. TO EXIT PROGRAM: Press ESC and Y.

       F2 OR SHIFT-F2: WINDOWS

       There are 4 different windows which have tree and source file 
       information. The windows are labeled as LOGICAL TREE, LOGICAL
       FILE, PHYSICAL TREE, PHYSICAL FILE. Switching between the
       windows is done with the F2 and SHIFT-F2 keys. The F2 key,
       with repeated presses, displays the windows in the following
       order: LOGICAL TREE, LOGICAL FILE, PHYSICAL TREE, PHYSICAL
       FILE. The SHIFT-F2 key displays the windows in the following
       order: PHYSICAL FILE, PHYSICAL TREE, LOGICAL FILE, LOGICAL
       TREE.

       1. PHYSICAL TREE WINDOW

       All function definitions and calls are displayed as they appear
       in the source files.

       The PHYSICAL TREE WINDOW displays function definitions and
       function calls. The function definitions are level 0 and function
       calls are level 1. The function definitions and function calls
       are listed one per line in the order they are found in the source
       files.  The source files are in the order as listed when CHTREE
       was executed from the command line or command file.

       The cursor (shaded line) marks the function definition or function
       call name which has its' information displayed in the  shaded
       information line. For information on how the cursor can be used see
       below.

       2. PHYSICAL FILE WINDOW

       The C file belonging to the cursor marked function in the Physical
       Tree is displayed.

       The PHYSICAL FILE WINDOW displays the source code file of the shaded
       cursor function name in the PHYSICAL TREE WINDOW. If the PHYSICAL
       TREE WINDOW shaded cursor is a function definition, then the first
       line of the function definition appears on the top line of the
       PHYSICAL FILE WINDOW followed by the function body. If the PHYSICAL
       TREE WINDOW shaded cursor is a function call, then the first line
       of the PHYSICAL FILE WINDOW is the source line containing the function
       call in the previous function definition.

       The cursor (shaded line) marks the function definition or function
       call source line matching the PHYSICAL TREE WINDOW function
       definition or function call which has its' information displayed
       on the information line. For information on how the cursor can be
       used see below.





       3. LOGICAL TREE WINDOW

       Functions calling other functions are shown as the program would
       call them.

       The LOGICAL TREE WINDOW displays nested function calls with
       the only function definition being main. Main is defined as
       nesting level 0. The function calls appear as they are called by
       the executing C source files. The nesting levels are represented
       by indentation with each nested call being indented from the 
       calling function.                        

       The cursor (shaded line) marks the main() function definition name
       or function call name which has its' information displayed in the
       shaded information line. For information on how the cursor can be
       used see below.

       4. LOGICAL FILE WINDOW

       The C file belonging to the cursor marked function in the Logical
       Tree is displayed.

       The LOGICAL FILE WINDOW displays the source code file of the shaded
       cursor function name in the LOGICAL TREE WINDOW. If the LOGICAL
       TREE WINDOW shaded cursor is a function call, then the first line
       of the LOGICAL FILE WINDOW is the source line containing the function
       call.

       The cursor (shaded line) marks the function call source line matching
       the LOGICAL TREE WINDOW function call which has its' information
       displayed on the information line. For information on how the cursor
       can be used see below.





       CURSOR TRACKING

       1. Repeated F2 presses.
       The cursor tracks from the LOGICAL TREE WINDOW to the LOGICAL FILE
       WINDOW, from the LOGICAL TREE WINDOW to the PHYSICAL TREE WINDOW,
       and from the PHYSICAL TREE WINDOW to the PHYSICAL SOURCE WINDOW.

       2. Repeated SHIFT-F2 presses.
       The cursor associated with a window does not change from the position
       previously established by repeated F2 presses, but the windows 
       appear in reverse order.

       This is useful to go between a source file and it's tree. As an 
       example: To review all function definitions independent of the
       file a particular definition is in: Press F2 to display the
       Physical Tree, select a function definition, and press F2 to
       display the Physical Source File. To view another function
       definition press SHIFT F2 to return to the Physical Tree and
       move the cursor to the desired function definition.  Then
       press F2 to display the Physical Source File.

       F3:LIST OF FUNCTION DEFINITIONS/LABELS, CALLS BY FILE,
       OR CALLS BY LEVEL

       Option 1: List of function definitions by file.
       Function names and labels are listed in the file where they are
       defined. Label names have the word :LABEL after them. This is
       useful as an index into the F2 displays using the F8 key.

       Option 2: List of function calls by file.
       Unique function calls are listed in the file where they are
       called. This is useful when function prototypes need to be
       coded. 

       Option 3: List of function calls by level.
       Unique function calls are listed by level. The number of times
       a particular function is called is displayed. If the function
       call does not have a function definition it is not displayed
       and a status message appears.

       F4:NESTED CALLED FROM TREE

       A trace is displayed from the current call level back to main()
       at level 0.  The main() function name to the current marked cursor
       function name calls are shown.  All C files are included in the
       search.





       F5:FUNCTION CALLED BY FUNCTIONS

       The program prompts for a function name.  All functions which
       call the entered function name are displayed.  This can be
       used to know what higher level functions are affected by changes
       in the entered function name.  All C files are included in the
       search.

       F6:STRING FOUND IN FUNCTIONS

       The program prompts for a string.  All functions in the displayed
       source file are searched for the entered string. All function
       names found to contain the string are displayed. This key only
       works in the Logical and Physical Source File displays.

       F7:SELECT CALL LEVEL(S)
       
            Option 1: View all occurrences of the entered level.
       The program prompts for the selection of a call level.  When
       the cursor is moved by F9 or F10, all levels not equal to the
       entered call level are skipped as the cursor moves..
            Option 2: View all levels less than or equal to the entered level.
       The program prompts for a new maximum current call level.  When
       the cursor is moved by F9 or F10, all levels more than the entered
       maximum call level are skipped as the cursor moves. The default
       maximum call level is the deepest nested call level.
            Option 3: View all levels greater than the entered level or equal
       to 0. The program prompts for a new minimum current call level.  When
       the cursor is moved by F9 or F10, all levels less than the entered
       minimum call level are skipped as the cursor moves. 

       The default Option is Option 2.

       F8:FIND A FUNCTION NAME, LABEL OR STRING

       The program prompts for a function name, label or string. When
       in the Logical or Physical Tree displays, the program searches
       for a function name or label.  When in the Logical or Physical
       Source displays, the program searches for a string.  This key
       is used together with the KEYPAD+ and KEYPAD- keys. The line
       where the entered function name, label or string is found is
       marked by the cursor. This key is affected by the SCROLL LOCK
       key.





       F9:MOVE CURSOR ONE LINE UP

       The cursor is moved one line up on the current display unless
       modified by F7.  If F7 sets a maximum current call level less
       than the maximum available call level, the F9 key will cause 
       the cursor to move up to the next allowable call level.  This
       key is affected by the SCROLL LOCK key.

       F10:MOVE CURSOR ONE LINE DOWN

       The cursor is moved one line down on the current display unless
       modified by F7.  If F7 sets a maximum current call level less
       than the maximum available call level, the F10 key will cause 
       the cursor to move down to the next allowable call level.  This
       key is affected by the SCROLL LOCK key.

       KEYPAD-:PREVIOUS FUNCTION NAME, LABEL OR STRING

       When in the Logical Tree or Physical Tree displays, this key
       finds the previous function name or label as entered by F8. 
       When in the Logical Source File or Physical Source File
       displays, this key finds the previous string as entered by
       F8.  This key is affected by the SCROLL LOCK key.

       KEYPAD+:NEXT FUNCTION NAME, LABEL OR STRING

       When in the Logical Tree or Physical Tree displays, this key
       finds the next function name or label as entered by F8.  When
       in the Logical Source File or Physical Source File displays,
       this key finds the next string as entered by F8.  This key is
       affected by the SCROLL LOCK key.

       SCROLL LOCK:TOGGLE PAGE(S-)/SCROLL(S+)

       Scrolling is either by page or by individual line.  The S- or
       S+ indicator on the right end of the information line indicates
       the current scroll state.  S+ indicates scrolling is done one
       line at a time.  S- indicates scrolling is done by page.  If
       in S+ and you are searching, scrolling can be temporarily 
       suspended by pressing the SPACE BAR.

       ALT+:DISPLAY FIRST PAGE

       Pressing the ALT key along with the + key (+= key) will display
       the first page of the tree or source file.





       ALT-:DISPLAY LAST PAGE

       Pressing the ALT key along with the - key (_- key) will display
       the last page of the tree or source file.

       SCROLLUP:SCROLL DISPLAY ONE LINE UP

       The UP ARROW will cause the display to move one line up towards
       the first page.

       SCROLLDN:SCROLL DISPLAY ONE LINE DOWN

       The DOWN ARROW will cause the display to move one line down towards
       the last page.

       PAGE UP:SCROLL UP ONE PAGE

       The PAGE UP key will cause the display to move one page up towards
       the first page.  This key is affected by the SCROLL LOCK key.

       PAGE DOWN:SCROLL DOWN ONE PAGE

       The PAGE DOWN key will cause the display to move one page down towards
       the last page.  This key is affected by the SCROLL LOCK key.

       HOME:DISPLAY PAGE WITH CURSOR

       Pressing the HOME key will return the display to the page containing
       the cursor.  The cursor will be on the top most line of the display.

       END:MOVE CURSOR TO DISPLAYED PAGE

       Pressing the END key will place the cursor on the top most line
       of the displayed page (moving the cursor from some other page).

       SET BOOKMARKS

       1. CONTROL HOME:mark current page number 1

       Pressing CONTROL HOME bookmarks the current display page so that
       it can be returned to by pressing the CONTROL END key.  This key 
       can be used to move around the current display tree or file and
       then return to the marked page.  There is a separate bookmark
       for each of the four displays.                        






       2. LETTER H:mark current page number 2

       Pressing LETTER H bookmarks the current display page so that
       it can be returned to by pressing the LETTER H key.  This key 
       can be used to move around the current display tree or file and
       then return to the marked page.  There is a separate bookmark
       for each of the four displays.                        

       RETURN TO BOOKMARKS

       1. CONTROL END:display marked page 1

       Pressing CONTROL END returns the current display page to the 
       bookmarked page.  This key can be used to move around the
       current display tree or file and then return to the marked
       page.  There is a separate bookmark for each of the four displays.

       2. LETTER E:display marked page 2

       Pressing LETTER E returns the current display page to the 
       bookmarked page.  This key can be used to move around the
       current display tree or file and then return to the marked
       page.  There is a separate bookmark for each of the four displays.

       PRTSC*:PRINTER OUTPUT MENU

       Use an IBM compatible printer in text mode.  Any one C source file
       can be printed or all C source files with one command. A starting
       and ending source file line number can be entered. The printer output
       includes line numbers.  The physical tree can be printed and/or the
       logical tree.  The tree output includes a sequential line number, the
       file the function is found in, the line number where the function is
       defined or called, the call level, the function's type, and the
       function name on each line.
      
       Before printing logical tree, a call level is requested (See Help F7).
       Option 1: Print all occurrences of the entered level.
       Option 2: Print all levels less than or equal to the entered level.
       Option 3: Print all levels greater than or equal to the entered level.

       Pressing the ESC key will stop the printing (you may need to wait
       until the print buffer is empty).

END OF DOCUMENT



```
{% endraw %}

## FILE2599.TXT

{% raw %}
```
Disk No: 2599                                                           
Disk Title: CHTREE C Program Flow Analyzer                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: CHTREE C Program Flow Analyzer                           
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: 640K RAM, CGA, Microsoft C. Hard drive recommended
                                                                        
CHTREE is a unique C program flow analyzer. It can be used to understand
C source code that someone else wrote, find in what file a function is  
defined and/or called, and to search for function names, strings and    
labels.                                                                 
                                                                        
The program has its own way of doing things, like only accepting input  
in lower case. But if you need to mazimize the speed of your program,   
CHTREE will find the functions that are called most often so can        
optimize your program code.                                             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2599

     Volume in drive A has no label
     Directory of A:\

    CHTREE   DOC     23872   1-08-91   1:32p
    GO       BAT       341   8-03-90  10:30p
    CHDOC    EXE     31873   8-06-90   7:34a
    CHTREE   EXE    126287   1-10-91   3:57p
    CHTREE   HLP     11559   1-05-91   3:20a
    SAMPLE   C       38907  10-01-90   2:54a
    SAMPLE   DTP      3164  10-01-90   3:08a
    SAMPLE   DTL      6772  10-01-90   3:08a
    FILE2599 TXT      1851   6-06-91  10:20a
            9 file(s)     244626 bytes
                           72704 bytes free
