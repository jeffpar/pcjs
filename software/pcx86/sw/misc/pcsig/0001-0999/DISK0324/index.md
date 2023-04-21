---
layout: page
title: "PC-SIG Diskette Library (Disk #324)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0324/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0324"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #1"

    Useful subroutine collections, hi-resolution graphics demonstrations,
    a calculator and even a game or two make this collection of source
    programs very worthwhile.  The code can be used as is in your
    programs, modified for your special purpose, or just used as a model
    for learning.
    
    System Requirements: 2 disk drives, color graphics, Turbo Pascal
    
    How to Start: Bring up Turbo Pascal, then load desired Pascal
    program into the work file area, compile and run.  To view the
    .DOC files, enter TYPE filename.DOC <ENTER>.
    
    File Descriptions:
    
    -------- ---  Graphics programs
    LINE     INV  Required by PLOT3D, PLOTFUNC, SPIN, SPOKES, WORLDMAP
    CLS      INV  Required by PLOT3D, GALEXY
    CUBE     3D   Data file for PLOT3D
    PLOT3DD  PAS  3D object display, rotation and scaling by user
    PLOT3D   PAS  3D object display, rotation and scaling demo
    POINT    INV  Required by GALEXY, RANDDOT
    SPOKES   PAS  Polyhedron ("spoke-connected wheel") hi-res graphics demo
    SPIN     PAS  Spinning box hi-res graphics demo
    RANDDOT  PAS  Graphics screen hi-speed random dot display
    PLOTFUNC PAS  Hi-res graphics 2 function plot with hidden line features
    STARS    DAT  Data file for GALEXY
    GALEXY   PAS  Travel thru the Milky Way! Best with 8087 chip.
    PYRAMID  3D   Data file for PLOT3D
    DIAMOND  3D   Data file for PLOT3D
    WORLDMAP PAS  Draws continents on hi-res graphics screen
    WORLDMAP DAT  Data file for WORLDMAP
    PTOOLENT INC  Routines to display, edit and validate data entry fields
    PTOOLDAT PAS  Demo of PTOOLDAT routines
    PTOOLDAT INC  Convert and manipulate Gregorian and Julian dates
    -------- ---  PASCAL tools
    PTOOLTIM INC  Routines to read and interpret system clock
    PDEMOENT PAS  Demo of PTOOLENT routines
    PTOOLWIN INC  Routines to create and manipulate text windows
    PTOOLTIM PAS  Demo of PTOOLTIM routines
    PTOOLWIN DOC  How to use the windowing routines in PTOOLWIN.INC
    PTOOLWIN PAS  Demo of PTOOLWIN routines
    LOADER   INC  Required by CONVRT - include in calling program
    CONVRT   PAS  Convert TURBO PASCAL chain files to callable COM pgms
    CALL     PAS  Garbage
    -------- ---  Miscellaneous
    FASTPRNT INV  TURBO PASCAL external routine
    HAL-PC   DOC  HAL-PC PASCAL disk library information
    HAT      PAS  Draw the "hat" mathematical function. Best with 8087 chip.
    INPUT2   PAS  Routines to display, edit and validate data entry fields
    HEXDUMP  PAS  HEX/ASCII listing of any disk file - continuous display
    TENKEY   PAS  4-function algebraic-notation calculator
    SIEVE    PAS  Counts primes between 1 and a max number
    SHOWCHRS PAS  Display all 256 characters on monitor
    PRINTDIR PAS  Print directory listings
    PFORMAT  DOC  How to use PFORMAT
    LIFE     PAS  Conway's game of LIFE - user defines cell coords
    PFORMAT  PAS  Change case of PASCAL source code - NO INDENTING - v1.01
    LIFETRBO PAS  Conway's game of LIFE - define cell coordinates
    TSTATTR  PAS  Display combinations of color monitor display attributes
    TEST     PAS  Garbage
    TYPEFILE PAS  Do line-oriented file I/O in TURBO PASCAL (same as NEW)
    NEW      PAS  How to do line-oriented file I/O in TURBO PASCAL
    TURBOTST PAS  Test TURBO PASCAL version 2.0 for math errors
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES324.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 324   Turbo Pascal Programs                             v1   DS
------------------------------------------------------------------------
 
Useful subroutine collections, hi-resolution graphics demonstrations, a
calculator and even a game or two make this collection of source programs
very worthwhile. The code can be used as is in your programs, modified
for your special purpose, or just used as models for learning.
 
Graphics programs
CLS      INV - required by PLOT3D, GALEXY
LINE     INV - required by PLOT3D, PLOTFUNC, SPIN, SPOKES, WORLDMAP
POINT    INV - required by GALEXY, RANDDOT
PLOT3D   PAS / 3D object display, rotation and scaling demo
PLOT3DD  PAS | 3D object display, rotation and scaling by user
CUBE     3D  | data file for PLOT3D
DIAMOND  3D  | data file for PLOT3D
PYRAMID  3D  \ data file for PLOT3D
GALEXY   PAS / travel thru the Milky Way! Best with 8087 chip.
STARS    DAT \ data file for GALEXY
PLOTFUNC PAS - hi-res graphics plot of 2 functions with hidden line features
RANDDOT  PAS - graphics screen hi-speed random dot display
SPIN     PAS - spinning box hi-res graphics demo
SPOKES   PAS - polyhedron ("spoke-connected wheel") hi-res graphics demo
WORLDMAP PAS / draws continents on hi-res graphics screen
WORLDMAP DAT \ data file for WORLDMAP
 
PASCAL tools (with demos) by R J Ostrander
PTOOLDAT INC / routines to convert and manipulate Gregorian and Julian dates
PTOOLDAT PAS \ demo of PTOOLDAT routines
PTOOLENT INC / routines to display, edit and validate data entry fields
PDEMOENT PAS \ demo of PTOOLENT routines
PTOOLTIM INC / routines to read and interpret system clock
PTOOLTIM PAS \ demo of PTOOLTIM routines
PTOOLWIN INC / routines to create and manipulate text windows
PTOOLWIN PAS | demo of PTOOLWIN routines
PTOOLWIN DOC \ how to use the windowing routines in PTOOLWIN.INC
 
Miscellaneous
CALL     PAS - garbage
CONVRT   PAS / convert TURBO PASCAL chain files to callable COM pgms
LOADER   INC \ required by CONVRT - include in calling program
FASTPRNT INV - TURBO PASCAL external routine
HAL-PC   DOC - HAL-PC PASCAL disk library information
HAT      PAS - draws the "hat" mathematical function. Best with 8087 chip.
HEXDUMP  PAS - HEX/ASCII listing of any disk file - continuous display
INPUT2   PAS - routines to display, edit and validate data entry fields
LIFE     PAS - Conway's game of LIFE - user defines cell coords
LIFETRBO PAS - Conway's game of LIFE - optional computer defines cell coords
PFORMAT  PAS / change case of PASCAL source code - NO INDENTING - v1.01
PFORMAT  DOC \ how to use PFORMAT
PRINTDIR PAS / print directory listings
BIOSREAD INC | required by PRINTDIR - ** MISSING **
GETDATE  INC | required by PRINTDIR - ** MISSING **
GETFREE  INC \ required by PRINTDIR - ** MISSING **
SHOWCHRS PAS - display all 256 characters on monitor
SIEVE    PAS - counts primes between 1 and a max number defined in program
TENKEY   PAS - 4-function algebraic-notation calculator
TEST     PAS - garbage
TSTATTR  PAS - display combinations of color monitor display attributes
TURBOTST PAS - test TURBO PASCAL version 2.0 for math errors
NEW      PAS - how to do line-oriented file I/O in TURBO PASCAL
TYPEFILE PAS - how to do line-oriented file I/O in TURBO PASCAL (same as NEW)
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## HAL-PC.DOC

{% raw %}
```
                     H A L - P C   L I B R A R Y
                     ---------------------------
                           FEB 23, 1985


              PASCAL LIBRARY DISK UPDATE INFORMATION



========================================================================
                   P A S C A L # 1   D I S K
========================================================================


 The HAL-PC Library Disk "PASCAL #1" has been slightly modified.
 All changes to the disk are available from disk "PASUPD #1".

 The disk PASCAL #1 contains two major program groups. First, a
 group of about twenty programs and files that provide a wide
 range of functions. These are intended to help introduce a new
 user to the IBM Pascal Compilier.

 Two Programs PRINTER and XREF compile but do not produce completely
 working programs. However, both programs are large and contain a
 lot of usefull procedures. The Include file PARSE.P will extract
 a word out of a string, and INDEX.P will find the index of the first
 occurance of a character in a string.

 All the Pascal programs on this disk have compiled successfully with
 IBM PASCAL V1.00 and linked with MS-LINK V2.01 on an AT&T 6300.

 An assembled object module (Produced by IBM MACRO V1.00) for the
 module VIDEO.ASM has been provided.

 The second group of programs are provided to perform 64 bit integer
 math. See the file MATH.DOC on the disk for more information.

 The following files have been added:

    1) C.BAT         - Compile without change disk prompt or Listing
    2) CL.BAT        - Compile/link without prompts or listings
    3) C-LST.BAT     - Compile without prompts
    4) CL-LST.BAT    - Compile/link without prompts
    5) CLEAN.BAT     - Delete OBJ,LST,SYM, and BIN Extensions of filename
    6) VIDEO.OBJ     - Preassembled Object (V1.00) of VIDEO.ASM
    7) SCREENC.EXE   - Color/Graphic Card version of SCREEN
    8) CONTENTS.TXT  - Updated Contents Document
    9) HAL-PC.DOC    - This Document

========================================================================
                   P A S C A L # 2   D I S K
========================================================================


========================================================================
                   L I B R A R I A N   N O T E
========================================================================

 If you encounter problems with any PASCAL LANGUAGE Disk please
 let me know!

                        Chuck Thornton
                  Pascal Language Librarian
                     467 - 1651 (evenings)

                       P.O. Box 55085
                      Houston, Tx 77255
```
{% endraw %}

## PFORMAT.DOC

{% raw %}
```

                                   p F O R M A T
                                   ~~~~~~~~~~~~~
                                      rel 1.01                             
                                  16 November 1984

          ________________________________________________________________
                           Author:  Andy Decepida PC1171              
          ----------------------------------------------------------------

          Function  :  pFORMAT  reads in an ASCII text  file,  assumed  to 
                       contain   a  syntactically  correct  Turbo   Pascal 
                       program   (source),   and  generates  a  copy  with 
                       alterations  in  the  case  of  the  letters   that 
                       comprise both the contained reserved words and non-
                       reserved words as per the user's choice.

                       pFORMAT  will  NOT  (as  of  this  release)  indent 
                       logical and physical blocks in a proper hierarchy.  


          The  user is proffered several choices for the formatting of the 
          output file.  These are outlined below. 

              Options available for PASCAL reserved words (including Turbo 
              Intrinsics and extensions:

                  o   UPPER-CASE/Capitalize all reserved words;
                  o   LOWER-CASE all reserved words; or,
                  o   Keep  the reserved words in an AS-IS (read from  the 
                      original file) state.


              Options available for Turbo Pascal intrinsics and extensions 
              to Pascal:

                  o   UPPER-CASE/Capitalize all intrinsics & extensions;
                  o   LOWER-CASE all intrinsics and extensions;
                  o   Keep  the  intrinsics  and extensions  in  an  AS-IS 
                      state; or,
                  o   Use   the  BORLAND  manual  type  setting   of   the 
                      intrinsics and extensions (e.g., "TextColor" instead 
                      or "textcolor" or "TEXTCOLOR").


              Options  available for user-defined  identifiers  (excluding 
              text  enclosed in the string delimiter [the apostrophe]  and 
              text    enclosed   in   comment   delimiters   [either   the 
              opening/closing    brace   or    the    parentheses-asterisk 
              combination]):

                  o   UPPER-CASE;
                  o   LOWER-CASE; or
                  o   AS-IS.


          REMARKS:   This is a slow program, don't expect too much from it 
          in terms of speed.   However,  for what it will do for you it is 
          suitable.  

                     pFORMAT  was originally written by the author in UCSD 
          Pascal for the IBM implementation of the p-SYSTEM.  For those of 
          you who know what that means, this is an improvement in speed as 
          it is.  When & if the author manages to familiarize himself with 
          BLOCKREAD & BLOCKWRITE, we'll talk more speed then.  

                     pFORMAT  can  handle strings  and  comments  properly 
          (that  is,  the  program will leave them as  is!).   Single- and 
          multi-line comments are both accomodated.   Hint,  hint...if you 
          wish a portion of your code to be untouched by pFORMAT (say  you 
          want  to visually isolate/highlight some lines) comment them out 
          prior to submission to this program.

                     "pFORMAT" stands for p(retty)-FORMAT(ter.

                     Finally,  pFORMAT is being released by the author  to 
          the  public  domain  via  PCCanada  and  other  BBS's.    It  is 
          requested  by  the author that the ethics that have  applied  to 
          other  public domain  programs/utilities be applied to  pFORMAT.  
          Failing that, be guided by your conscience.

                                 andy j s decepida
                                    16 Nov 1984 
```
{% endraw %}

## PTOOLWIN.DOC

{% raw %}
```
 PTOOLWIN.INC   Copyright 1984  R D Ostrander                   Version 1.0
                                Ostrander Data Services
                                5437 Honey Manor Dr
                                Indianapolis  IN  46241

 These Turbo Pascal procedures are text window manipulation tools used to ease
 the manipulation of Windows in an IBM PC environment. They are used to open
 and close windows while saving the data covered by the window. Borders around
 windows are also supported.

 This program has been placed in the Public Domain by the author and copies
 may be freely made for non-commercial, demonstration, or evaluation purposes.
 Use of these subroutines in a program for sale or for commercial purposes in
 a place of business requires a $20 fee be paid to the author at the address
 above.  Personal non-commercial users may also elect to pay the $20 fee to
 encourage further development of this and similar programs. With payment you
 will be able to receive update notices, diskettes and printed documentation
 of this and other PTOOLs from Ostrander Data Services.


 PTOOL, and PTOOLxxx are Copyright Trademarks of Ostrander Data Services

 Turbo Pascal is a Copyright of Borland International Inc.

Procedures available in PTOOLWIN.INC are:


 PTWSet  (Screen#, X1, Y1, X2, Y2,  - Sets up window coordinates so that later
         BorderSwitch,                references can be made by Mnemonic only.
         BackgroundColor,             PTWSet must be done once for each window
         ForegroundColor)             before it is Opened.
                                      The Screen# is a number between 1 and
                                      the maximum number of windows allowable
                                      set in the Constants Block below.
                                      The X and Y Coordinates are the same as
                                      for the Turbo Pascal Window procedure.
                                      A border may be placed around the window
                                      and the size of the window will be
                                      decreased to fit inside the border. The
                                      BorderSwitch functions are:
                                         0 - No border
                                         1 - Single line block graphics border
                                         2 - Double line block graphics border
                                        -1 - Single line Reversed color border
                                        -2 - Double line Reversed color border
                                      The BackgroundColor and ForegroundColor
                                      parameters are the same as for the Turbo
                                      Pascal TextColor and TextBackground
                                      procedures.

 PTWOpen (Screen#)                  - Activates a window (previously set by
                                      PTWSet) and saves the screen covered by
                                      the window.
                                      In the Constants Block following, there
                                      is a parameter that sets the maximum
                                      number of windows that may be open at
                                      any one time.

 PTWClose                           - De-activates the open window, activates
                                      the previous window and restores the
                                      screen covered by the closed window.
                                      Note that the PTWOpen & PTWClose have a
                                      "Push/Pop" type of action.



Constants in the PTOOLWIN.INC file that must be set by the programmer before
compilation are:


   PTOOLWIN_Number_of_Windows = 10;

        This determines the number of windows that may be set with the
        PTWSet procedure. This is easily determined when the calling
        program is designed.


   PTOOLWIN_Max_Number_Open = 10;

        This determines the number of windows that may be open at any one
        time. The programmer will want to set this accurately to the maximum
        number needed by the calling program since 4006 bytes of memory are
        taken for each window that may be opened. This memory is taken in the
        data area at compilation time. This was done in order to allow the
        calling program the widest possible latitude in design; the stack is
        not used for this since running out of memory at execution time would
        be very inconvenient.



There is a constant that must be set before the PTWOpen or PTWClose procedures
are called:


   PTOOLWIN_Screen_Type : Char = 'C';

        If the final program is going to be run on an IBM PC with a Monochrome
        video card then this parameter must be set to 'M'. If the PC has
        a Color/Graphics card then it must be set to 'C'. This setting may be
        done at run time rather than at compile time since the difference that
        this parameter makes is whether to store and recall the screen data at
        $B8000 (Color Graphics) or $B0000 (Monochrome) via the absolute
        variables :
                     PTOOLWIN_C_Screen   : Char absolute $B800:$0000;
                     PTOOLWIN_M_Screen   : Char absolute $B000:$0000;

        This may be found in the calling program by using either the
        PTEMonoAttached or PTEColorAttached functions found in the PTOOLENV
        Environment control.




        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0324

     Volume in drive A has no label
     Directory of A:\

    HAT      PAS      2517  10-02-84   2:14a
    SIEVE    PAS       773   5-02-84  12:51a
    HAL-PC   DOC      2720   2-23-85   4:27p
    RANDDOT  PAS      1752   5-16-84   9:28p
    CUBE     3D        120   5-10-84  11:04p
    DIAMOND  3D        417   5-11-84   8:57a
    PYRAMID  3D         79   5-10-84   1:17p
    STARS    DAT      3067   5-23-84   3:33a
    WORLDMAP DAT      2560   6-05-84   2:32p
    CLS      INV        17   5-11-84   8:46a
    FASTPRNT INV       364   9-09-84   5:46p
    LINE     INV       510   9-06-84   2:59p
    POINT    INV       263   9-06-84   2:56p
    GALEXY   PAS      3654   6-12-84   3:08p
    LIFE     PAS      3219   6-12-84  11:22a
    LIFETRBO PAS      3980   6-12-84  12:41p
    PLOT3D   PAS      7369   6-12-84   3:00p
    PLOT3DD  PAS      7292   6-12-84   3:04p
    PLOTFUNC PAS      3260   6-12-84   3:11p
    SPIN     PAS       890   6-12-84   3:14p
    SPOKES   PAS       911   6-12-84   3:16p
    TYPEFILE PAS      2508   6-12-84  11:27a
    WORLDMAP PAS      1350   6-12-84   3:30p
    TSTATTR  PAS      1376   6-09-84   9:03p
    NEW      PAS      2508   6-12-84   8:21p
    HEXDUMP  PAS      2039   6-22-84   1:39p
    TURBOTST PAS      1361   7-10-84   5:02p
    TENKEY   PAS      2893   7-10-84   3:55p
    SHOWCHRS PAS       388   7-10-84   3:57p
    INPUT2   PAS     10282   7-04-84   6:26p
    PRINTDIR PAS     20237  10-02-84   3:47a
    PFORMAT  DOC      4106   2-03-85   8:18a
    PFORMAT  PAS     26707   2-03-85   8:21a
    CONVRT   PAS     12544   1-06-85  10:19p
    LOADER   INC       512   1-06-85  10:19p
    CALL     PAS       512   1-06-85  10:19p
    TEST     PAS       768   1-06-85  10:19p
    PTOOLDAT PAS      6784   2-21-85   8:14p
    PTOOLDAT INC     36352   2-21-85   8:14p
    PTOOLTIM PAS      2816   2-21-85   8:14p
    PTOOLTIM INC     12672   2-21-85   8:14p
    PTOOLWIN DOC      6264   2-21-85   7:45p
    PTOOLWIN PAS      4352   2-21-85   8:14p
    PTOOLWIN INC     11392   2-21-85   8:15p
    PDEMOENT PAS      5511   2-21-85   8:15p
    PTOOLENT INC     19717   2-21-85   8:15p
    FILES324 TXT      3584   5-23-85   1:20p
           47 file(s)     245269 bytes
                           50176 bytes free
