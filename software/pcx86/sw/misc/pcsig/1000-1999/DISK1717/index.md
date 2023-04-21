---
layout: page
title: "PC-SIG Diskette Library (Disk #1717)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1717/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1717"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PANELS FOR C"

    Perform screen oriented input and output easily and quickly with PANELS
    FOR C.  PANELS FOR C is a set of routines which can be called by your C
    programs to do screen oriented input and output.  Screen layouts, or
    panels, are simple text files that you can create with any ordinary word
    processor.
    
    PANELS FOR C demonstrates the ease with which panels can be created and
    linked into your programs.  Included programs are sound generation, time
    display, screen attributes, personal telephone directory and auto
    dialer, a panel tutorial, and a panel display routine.
    
    The PANEL.OBJ set of routines have been compiled using the Microsoft C
    5.1 Optimizing Compiler under a small memory model.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1717.TXT

{% raw %}
```
Disk No: 1717                                                           
Disk Title: Panels For C                                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Panels For C                                             
Author Version: 2.1                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Perform screen oriented input and output easily and quickly with PANELS 
FOR C.  PANELS FOR C is a set of routines which can be called by your C 
programs to do screen oriented input and output.  Screen layouts, or    
panels, are simple text files that you can create with any ordinary word
processor.                                                              
                                                                        
PANELS FOR C demonstrates the ease with which panels can be created and 
linked into your programs.  Included programs are sound generation, time
display, screen attributes, personal telephone directory and auto       
dialer, a panel tutorial, and a panel display routine.                  
                                                                        
The PANEL.OBJ set of routines have been compiled using the Microsoft C  
5.1 Optimizing Compiler under a small memory model.                     
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP1.TXT

{% raw %}
```
+                            About Panels for C

    "Panels for C" is a set of routines which may be called by your
 Application program to do screen oriented input and output.  Screen layouts,
 or panels, are simple text files that you can create with an ordinary word
 processor.  Panels always have a file extension of PAN.  The format of a
 panel is covered in a later section.

    Panels for C is distributed in four ways:

    (1)  Demo disk   - contains this tutorial along with sample programs.

    (2)  Shareware   - Includes the Demo disk plus small object code.
                       Registration consists of purchasing the full Object
                       Package.  New versions and support will be available
                       to registered users only.

    (2)  Object disk - The Panels routines compiled under the small and large
                       memory models.  These routines may be linked with your
                       application program using the C calling convention.

    (3)  Source disk - All of the above plus the Panels routines source code
                       written in Microsoft C 5.1 and suitable for your
                       customization.

                         *** End of Help Text ***
```
{% endraw %}

## HELP2.TXT

{% raw %}
```
+                          Executing a Panels Program

    While a panel is active, during the execution of a panels program, the
 following keys are used for data input:

      <Right Tab>   - Moves cursor to the next unprotected screen field.

      <Left Tab>    - Moves cursor to the previous unprotected screen field.

      <Home>        - Moves cursor to the first unprotected screen field.

      <Ins>         - Toggles insert mode on and off.  The cursor is a little
                      larger when insert mode is on.

      <Del>         - Deletes the character under the cursor.

      <End>         - Erase to end of field.



      <Up Arrow>    - Moves the cursor in the appropriate direction,
      <Down Arrow>    possibly into a protected area.  A click will be heard,
      <Left Arrow>    if attempting to enter data into a protected area.
      <Right Arrow>

      <F1>          - When one of these keys is pressed execution returns to
      <F2>            the panels program (the program which called the panels
      <F3>            routine) and the appropriate action is taken
      <F4>            for the particular application.
      <F5>
      <F6>
      <F7>
      <F8>
      <F9>
      <F10>
      <Page Up>
      <Page Down>
      <Enter>
      <Esc>
                         *** End of Help Text ***
```
{% endraw %}

## HELP3.TXT

{% raw %}
```
+                         ════ Text File Format ════

    A panel text file begins with an optional size statement followed by an
 optional background statement.  One or more tag statements are used to relate
 field attributes and field names to special characters or symbols.  After the
 tag statements is the actual screen layout, which must begin with a tagged
 symbol.

+      size <ul_row> <ul_col> <lr_row> <lr_col>
+      background <color>
+      tag <symbol> <attributes> <variable>...<variable>
+         .
+         .
+         .
+      <symbol> ........................................
+      .................................................
+      .................................................
+         .
+         .
+         .
+                         ════ Size Statement ════

    This is an optional panel statement, and if present must precede the
 background statement or the first tag statement.  This statement simply
 sets the size of the window in which the panel will be constructed.

    Format:
+              size <ul_row> <ul_col> <lr_row> <lr_col>

    where:
               <ul_row> is the upper left row of the window
               <ul_col> is the upper left column of the window
               <lr_row> is the lower right row of the window
               <lr_col> is the lower right column of the window

    Example:
               size 0 0 13 39   Defines a panel to be 14 rows by 40 columns
                                located in the upper left part of the screen.


 If a size statement is not present within a panel definition, the default
 window coordinates are 0,0 and 24,79.  If a panel is defined to be smaller
 than the previous active panel, the previous panel will be partially visible
 behind the new panel.  However, the overlaid panel will not be active again
 until the new panel is destroyed (i.e. no I/O functions may be performed on
 the previous panel).














+                      ════ Background Statement ════

    This is an optional panel statement, and if present must precede the first
 tag statment.  This statement simply sets the screen background color when
 a CGA adapter is in use.  If a monochrome adapter is in use the background
 statement is ignored.

    Format:
+                background <color>

       where <color> is a digit 0 - 7

    Color codes:  0 = Black (Default)
                  1 = Blue
                  2 = Green
                  3 = Cyan
                  4 = Red
                  5 = Magenta
                  6 = Brown
                  7 = White
+                         ════ Tag Statement ════

    A tag statement allows you to relate a special character or symbol with
 a field definition.  This definition includes the field attributes as well
 as the field names.

    Format:
+                tag <symbol> <attributes> <variable list>

    <Attributes>:   P = Protected, U = Unprotected
                    H = High Intensity, L = Low Intensity
                    B = Blink
                    R = Reverse
                    _ = Underline
                    D = Dark
                    0    \
                    1     \
                    .      Foreground Color Code
                    .     /    (as defined for background)
                    7    /
    Some attributes may have no effect with certain monitor types (i.e. the
 color codes will have no effect using a monochrome display adapter).


    <variable list>:  one or more field names separated by at least
           one blank.  Valid names are no more than eight characters
           begining with a letter.  No special characters are allowed.

    Each variable or field name is matched to a field on the screen layout.
 If more fields are defined with the tag symbol than variables in the list,
 the last variable name in the list is used to name the remaining fields.
 In this case, a subscript other than 1 is used to access like named
 fields.







+                           ════ Examples ════


+   tag % p
+   tag & uh field
+   %         Example 1
+
+         Name:&               %
+
+         Addr:&               %


    In this example, there are two unprotected fields.  The first field would
    be accessed using the name  FIELD  subscripted by 1, and the second would
    be called  FIELD  with a subscript of 2.

+                    Press <F1> to activate this panel.

    Try moving the cursor from field to field with the tab key, and
    experiment with entering some actual data.
+   background 1
+   tag ! p4
+   tag @ pr7
+   tag * u_2 select
+   !         Example 2
+
+         @1.  Spreadsheet!
+         @2.  Word Processor!
+         @3.  Database!
+
+           Select-->* !


    The screen background color is defined to be blue.  The ! symbol defines
    protected red fields.  The @ symbol defines protected, reverse fields with
    white characters.  The asterisk tagged field is named  SELECT  and
    will be unprotected, underlined and green.

+                    Press <F2> to activate this panel.

+   size 10 30 16 56
+   background 7
+   tag ! p4
+   !╔══════ Example 3 ══════╗
+    ║ Here is a small panel ║
+    ║ sized down to appear  ║
+    ║ as a window on top of ║
+    ║ the previously active ║
+    ║ panel.                ║
+    ╚═══════════════════════╝


    The screen background color is defined to be white.  The ! symbol defines
    protected red fields.  This example demonstrates the use of the size
    statement.  The panel is defined as a 7 x 27 character box to be displayed
    in the lower right part of the screen.

+                   Press <F3> to activate this panel.


+                         ════ Panel Design ════


    Try your hand at designing your own panel!  Use any word processor to
    create the panel file.  Be sure your file has an extension of PAN.

    After your panel text file has been created, type:

+                            showpan <fn>

    where <fn> is your panel file name without the .PAN extension.

                         *** End of Help Text ***
```
{% endraw %}

## HELP4.TXT

{% raw %}
```
+                   ════ Programming with Panels ════

    Only a few Panel routines are needed to do complete screen level I/O
    with your application program.  What follows here and on subsequent pages
    is a description of each routine available to link with your program.

+   void panel_activate(char fn[]);

    This routine will paint the screen using the panel defined in the text
    file <fn>.pan.  Memory is allocated for a panel variable table.  If
    a panel was previously active it will exist behind the new panel.

+   int panel_execute(char name[], int sub, int alarm);

    Positions the cursor to the named field or first unprotected field if
    name is null.  Sub is the subscript of name field.  A bell will sound
    if alarm is true.  Control will return from this routine when a response
    key is pressed.  The response key code (as defined in panel.h ) is the
    return value.

+   void destroy_panel();

    This routine frees memory occupied by the panel variable table and
    restores the panel behind the active panel if present.

+   void modify_field_attr(char *name, int sub, char attr[]);

    Changes the screen attributes of the named panel field after the
    panel has been activated.  Useful for indicating an error to the user
    by highlighting or blinking the contents of the erronious field.

+   void put_field(char *name, int sub, char value[]);

    This routine transfers value to the named panel field.


+   void get_field(char *name, int sub, char value[]);

    This routine transfers the named panel field to  value .

+   void sound(int freq, int dur);

    Produces a sound of freq frequency and at least dur duration on the
    speaker.  The duration is in hundreths of a second.

+   void delay(int dur);

    Wait for at least dur hundreths of a second to elapse.

+   int get_key();

    Wait for a keystroke from the user and return the key code as defined
    within the panel.h header file.

+   void set_idle_func(int (*func)());

    Sets up a user supplied function to be called while panel_execute or
    get_key is waiting for a keystroke from the user.  func is a pointer
    to a function which returns an integer value.  The NULLF value, defined
    within panel.h may be used to disable an idle function call.

+   void pan_error(16, int line, char *msg);

    Abort the application program by cleaning up any active panels.  This
    function then displays the msg parameter and line number if not zero.

                         *** End of Help Text ***
```
{% endraw %}

## HELP5.TXT

{% raw %}
```
+                   ════ Compilation and Linkage ════

    The PANELS.OBJ set of routines has been compiled using the Microsoft C
    5.1 Optimizing Compiler under a small memory model.  The PANELL.OBJ
    was compiled using a large memory model.

    To compile your program (assuming it was written in Microsoft C) and link
    it with the Panels routines, the Microsoft C commands are:

+                cl /F 2000 YourPgm.c panels.obj         Small model

+                cl /AL /F 2000 YourPgm.c panell.obj     Large model

    Two batch files are provided, called SCOMP.BAT  and LCOMP.BAT ,to issue
    this command. The /F option sets the size of the program stack for the
    executable file.  This must be set to an adequate value.  If another
    compiler is to be used, consult your user's guide for the command syntax.

    Be sure to include the file PANEL.H in your source code.
                         *** End of Help Text ***
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1717

     Volume in drive A has no label
     Directory of A:\

    ATTR     C         286  11-17-89  10:16a
    ATTR     EXE     17541   2-21-90  10:06a
    ATTR     PAN      1250  11-17-89  10:33a
    COLORS   C         184  11-10-89   8:51a
    COLORS   EXE     17483   2-21-90  10:06a
    COLORS   PAN       830  11-10-89   9:12a
    DIFFTIME C         745   2-01-90   5:01p
    DIFFTIME EXE     31938   2-21-90  10:04a
    DIFFTIME PAN       507   2-13-90   9:27a
    FILE1717 TXT      2221   3-22-90   3:30p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       386   1-01-80   5:42a
    HELP     C        4530   2-13-90   9:03a
    HELP     EXE     18757   2-21-90  10:09a
    HELP1    TXT      1274  11-28-89   4:40p
    HELP2    TXT      1377  11-28-89   4:40p
    HELP3    TXT      6247  11-28-89   4:43p
    HELP4    TXT      2604  11-28-89   4:40p
    HELP5    TXT       965  11-28-89   4:46p
    HELPEX1  PAN       206  11-28-89   2:19p
    HELPEX2  PAN       176  11-28-89   4:42p
    HELPEX3  PAN       239  11-28-89   1:58p
    HELPMENU PAN      2102  11-28-89  10:59a
    HELPSKEL PAN       106  11-21-89   4:43p
    LCOMP    BAT        45   2-21-90   9:57a
    ORDFORM  PAN      2061   2-13-90   9:06a
    PANEL    H        2900  11-20-89  11:36a
    PANELS   OBJ     11582   2-21-90  10:02a
    PTD      C       12311  11-21-89   8:27a
    PTD      DAT      6000   2-22-90   3:56p
    PTD      EXE     24151   2-21-90  10:08a
    PTD      PAN      2165  11-20-89  11:46a
    PTDA     PAN       484  11-20-89  11:45a
    PTDH     PAN      1996  11-21-89   1:10p
    PTDS     PAN      1215  11-16-89  11:39a
    README            3838   2-21-90  10:17a
    SCOMP    BAT        42   2-21-90   9:57a
    SHOWPAN  C         264   6-12-89   3:58p
    SHOWPAN  EXE     17591   2-21-90  10:07a
    SHOWTIME C         363  11-10-89   9:17a
    SHOWTIME EXE     19683   2-21-90  10:05a
    SHOWTIME PAN        93  11-10-89   9:19a
    SOUND    C         469  11-10-89   9:25a
    SOUND    EXE     17603   2-21-90  10:05a
    SOUND    PAN       427  11-17-89   9:57a
           45 file(s)     237275 bytes
                           54272 bytes free
