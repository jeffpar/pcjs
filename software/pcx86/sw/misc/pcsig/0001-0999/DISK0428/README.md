---
layout: page
title: "PC-SIG Diskette Library (Disk #428)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0428/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0428"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #10"

    The Turbo Pascal routines on this diskette perform a wide variety
    of helpful functions ranging from string manipulation to playing
    music.  GETDIR and PATHS will scan and change the MS-DOS
    directory and could even have options added to read system and
    hidden files.  Included are communications support, a graphics
    library, a translator from 8088 Assembler source code to Pascal
    INLINE code, a very fast string writer to output to mono or color
    screens, screen scrolling and more.
    
    System Requirements:  128K, two disk drives, Turbo Pascal
    
    How to Start:  To read DOC or TXT files simply enter TYPE filename.ext
    and press <ENTER>.  For instructions on PAS listings, refer to your
    Pascal language manual.
    
    File Descriptions:
    
    GRAPHICS LBR  Pascal graphics library
    GETDIR   PAS  Scan MS-DOS directory
    FASTWRIT PAS  Very fast strings to mono or color screen
    DIR      PAS  Outputs MS-DOS directory entries
    COMMCALL PAS  COM1 support; interrupt handling; one port
    ARGLIST  PAS  Reads argument list, like argc/argv in C
    GRAPHSRC LBR  Pascal graphics library + demo
    GRAPHICS TXT  Installation instructions for GRAPHICS
    SAMPDIR  PAS  Example of how to use GETDIR.PAS
    PATHS    PAS  Get, create, delete, modify disk directories
    INLINER  PAS  Translates 8088 Assembler source to Pascal INLINE
    PIBMUSIC PAS  Play music like in BASIC PLAY statement
    STRNGLIB INC  String functions not provided in TURBO Pascal
    STRNGLIB DOC  Description of STRNGLIB.INC
    SCROLL   PAS  Scroll portion or all of screen up or down
    SAMPPATH PAS  Example of how to use PATHS.PAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES428.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 428   TURBO Pascal Routines #                           v1 DS2
-----------------------------------------------------------------------
The TURBO Pascal routines on this diskette perform a wide variety of
helpful functions ranging from string manipulation to playing music.
GETDIR and PATHS will scan and change the MS-DOS directory and could
even have options added to read system and hidden files.  There is
communications support, a graphics library, a translator from 8088
Assembler source code to Pascal INLINE code, a very fast string writer
to output to mono or color screens, screen scrolling and more...
 
ARGLIST  PAS  Reads argument list, like argc/argv in C
COMMCALL PAS  COM1 support; interrupt handling; one port
DIR      PAS  Outputs MS-DOS directory entries
FASTWRIT PAS  Very fast strings to mono or color screen
GETDIR   PAS  Scan MS-DOS directory
GRAPHICS LBR  Pascal graphics library
GRAPHICS TXT  Installation instructions for GRAPHICS
GRAPHSRC LBR  Pascal graphics library + demo
INLINER  PAS  Translates 8088 Assembler source to Pascal INLINE
PATHS    PAS  Get, create, delete, modify disk directories
SAMPDIR  PAS  Example of how to use GETDIR.PAS
SAMPPATH PAS  Example of how to use PATHS.PAS
SCROLL   PAS  Scroll portion or all of screen up or down
STRNGLIB DOC  Description of STRNGLIB.INC
STRNGLIB INC  String functions not provided in TURBO Pascal
PIBMUSIC PAS  Play music like in BASIC PLAY statement
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GRAPHICS.TXT

{% raw %}
```
Graphics & Graphsrc are provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use graphics you should:
  1) md\graphics             create a graphics subdirectory
  2) cd\graphics
  3) copy a:graphics.lbr     move in the graphics library
  4) copy a:graphsrc.lbr     move in the graphsrc library
  5) lu a graphics.lbr       disperse the files in the graphics library
  6) lu a graphsrd.lbr       disperse the files in the graphsrc library
```
{% endraw %}

## STRNGLIB.DOC

{% raw %}
```
 Suplementry String functions and procedures for Turbo Pascal


       Written by: Tryg Helseth
                   Minneapolis, Minnesota

    Last Revision: 1/4/85

USAGE NOTES:

  The following routines provide common string functions that are
  not supplied with Turbo Pascal.  Many are patterned (and named)
  after the General Electric Information Service COompany (GEISCO)
  FORTRAN 77 string routines; others mimic SNOBOL primatives.

  The general calling sequence is:

     OutString := Func(InpString[,Parms])

  where:

     OutString = the output or target string,
          Func = function name,
        InpStr = Input String,
       [Parms] = Additional parameter(s) used by some functions.

AVAILABLE FUNCTIONS:

    LoCase      Convert a single character to lower case.
    LowerCase   Convert a string to lower case.
    UpperCase   Convert a string to upper case.
    TrimL       Trim Left: remove leading spaces from a string.
    TrimR       Trim Right: remove trailing spaces from a string.
    PadL        Pad Left: Add leading spaces to give desired field length.
    PadR        Pad Right: Add trailing spaces to give desired field length.
    JustL       Left Justify a string within a desired field length.
    JustR       Right Justify a string within a desired field length.
    Center      Center a string within a desired field length.
    GetStr      Get String: Extracts a substring up to a specified delimiter.
    Break       Extracts a substring up to the first of several delimters.
    Span        Extracts a substring of delimiters up to a NON delimiter.

    Note: GetStr, Span, and Break, modify the input string.  The other
          functions do not modify any parameters.

AVAILABLE PROCEDURES:

    GString     Get String: Used by Span and Break functions.  It performs
                both functions and allows more control by the programmer.

    RealStr     Convert a value of type REAL to a string representation in
                any base from 2 to 36.

    RealVal     Convert a string representation of a number to a REAL value.
                The number may be in any base from 2 to 36.

TYPE DECLARATION:

  All strings are of the type, LString, which should be declared in the main
  program as:

      Type LString = string[n]

  where n is a constant in the range of 1 to 255.

  If you wish to use these functions with strings of different declared
  lengths, then you must use the compiler option, $V-.  If you choose
  to do this, be sure that the defined length of LString is greater than
  or equal to the longest string you will be using.

FUNCTION DECLARATIONS:   

===========================================
function LoCase(InChar: char): char;
===========================================

Purpose:        Convert a single character to lower case.

Parameters:
     Input:     InChar = character to be converted.
    Output:     none

Function Value: LoCase = converted character.


====================================================
function LowerCase(InpStr: LString): LString;
====================================================

Purpose:        Convert a string of characters to lower case.

Parameters:
     Input:     InpStr = string to be converted.
    Output:     none

Function Value: LowerCase = converted string.


====================================================
function UpperCase(InpStr: LString): LString;
====================================================

Purpose:        Convert a string of characters to upper case.

Parameters:
     Input:     InpStr = string to be converted.
    Output:     none

Function Value: UpperCase = converted string.


================================================
function TrimL(InpStr: LString): LString;
================================================

Purpose:        Trim Left: Remove leading spaces from a string.

Parameters:
     Input:     InpStr = string to be trimmed.
    Output:     none

Function Value: TrimL = trimmed string.


================================================
function TrimR(InpStr: LString): LString;
================================================

Purpose:        Trim Right: Remove trailing spaces from a string.

Parameters:
     Input:     InpStr = string to be trimmed.
    Output:     none

Function Value: TrimR = trimmed string.


==================================================================
function PadL(InpStr: LString; FieldLen: integer): LString;
==================================================================

Purpose:        Pad Left: Pad a string on the left with spaces to
                fill it to a desired field length.  Trailing spaces
                are not removed.
Parameters:
     Input:     InpStr = string to be padded.
    Output:     none

Function Value: PadL = padded string.


==================================================================
function PadR(InpStr: LString; FieldLen: integer): LString;
==================================================================

Purpose:        Pad Right: Pad a string on the right with spaces to
                fill it to a desired field length.  Leading spaces
                are not removed.
Parameters:
     Input:     InpStr = string to be padded.
    Output:     none

Function Value: PadR = padded string.


===================================================================
function JustL(InpStr: LString; FieldLen: integer): LString;
===================================================================

Purpose:        Left justify a string within a desired field length.
                First leading spaces are removed, then the string is
                padded with trailing spaces to the desired length.
Parameters:
     Input:     InpStr = string to be justified.
    Output:     none

Function Value: JustL = justified string.


===================================================================
function JustR(InpStr: LString; FieldLen: integer): LString;
===================================================================

Purpose:        Right justify a string within a desired field length.
                First trailing spaces are removed, then leading spaces
                are inserted fill to the desired length.
Parameters:
     Input:     InpStr = string to be justified.
    Output:     none

Function Value: JustR = justified string.


====================================================================
function Center(InpStr: LString; FieldLen: integer): LString;
====================================================================

Purpose:        Center a string within a desired field length.  First
                the string is stripped of leading and trailing spaces,
                then the resultant string is padded equally with
                leading and trailing spaces.
Parameters:
     Input:     InpStr = string to be justified.
    Output:     none

Function Value: Center = centered string.


==================================================================
function GetStr(InpStr: LString; Delim: Char): LString;
==================================================================

Purpose:       Strating at the first position of the input string,
               return a substring containing all characters up to
               (but not including) the fisrt occurence of the given
               delimiter.  If the delimiter is not found, then the
               entire input string is returned.  The substring and
               delimiter are then deleted from the input string.

Parameters:
     Input:     InpStr = string from which substring is removed.
                Delim  = delimiter to be used.
    Output:     InStr  = remainder of input string.

Function Value: GetStr = Extracted substring.


=====================================================================
function Break(InpStr: LString; DelStr: LString): LString;
=====================================================================

Purpose:       Emulates the SNOBOL BREAK function.  Operation is
               similar to GetStr except that several delimiters
               may be used.  The substring returns all characters
               up to the first of any delimiter in DelStr.  Unlike
               GetStr, the Delimiter found is NOT removed from
               the input string.

Parameters:
     Input:     InpStr = string from which substring is removed.
                DelStr = list of delimiters.
    Output:     InStr  = remainder of input string.

Function Value: Break  = Extracted substring (Break on delimiter).


====================================================================
function Span(InpStr: LString; DelStr: LString): LString;
====================================================================

Purpose:       Emulates the SNOBOL Span function.  Operation is
               is the reverse of Break; The input string is scanned
               for characters IN DelStr.  It returns a  substring
               containing ONLY delimiters found starting at the
               first position up the the first NON delimiter.  That
               character is NOT removed from the input string.

Parameters:
     Input:     InpStr = string from which substring is removed.
                DelStr = list of delimiters.
    Output:     InStr  = remainder of input string.

Function Value: Span   = Extracted substring (Span of delimiters).


=======================================================================
procedure GString(InpStr, DelStr: LString; span: boolean;
                  var cpos, dpos: integer; var OutStr: LString);
=======================================================================

Purpose:       Emulates both the SPAN and BREAK functions of SNOBOL.

               SPAN:  If span is true, then starting from position, cpos,
               the input string is scanned for characters in the string,
               DelStr.  These characters are copied to the output string
               until either a character NOT in DelStr is found or the end
               of the string is reached.  Position pointer, cpos, is reset
               to point at the break character.  If the end of the string
               is reached, cpos is set to zero.

               BREAK: If span is false, then the input string is scanned
               for characters NOT in the string, DelStr.  The output string
               contains all characters up to the first delimiter.  Position
               pointer, cpos, is set to point at the delimiter found.  If a
               delimiter was not found, cpos is set to zero.

               Dpos is set to position in DelStr of the delimiter found.  If
               none found, dpos is set to zero.

Parameters:
     Input:     InpStr = string from which subs9ring is Copied.
                DelStr = delimiters to be used.
                span   = true = span, false = break.
                cpos   = starting position in input string.

    Output:     cpos   = position past found delimiter.
                dpos   = which delimiter was found.
                OutStr = substring copied from the input string.


=================================================
Procedure RealStr(Valu: Real; Base, Trail: integer;
                  var OutStr: LString);
=================================================

Purpose:        Convert a real value to an equivalent string representation.
                The value can be represented in any base from 1 to 36 with
                a specified number of digits to the right of the radix point.
                Digits 10 thru 35 are represeted by the letters A thru Z.

Parameters:

     Input:     Valu   = Real value to be converted to a string.
                Base   = Desired base.
                Trail  = number of digits to the right of the radix point.

    Output:     OutStr = string representation.


===========================================================
Procedure RealVal(InpStr: LString; Base: integer;
                  Var Err: integer; Var Valu: real);
===========================================================

Purpose:        Convert a string representation of a number to a real value.
                The value can be represented in any base from 1 to 36 and
                can have a fractional part.  Digits 10 thru 35 are represeted
                by the letters A thru Z respectively.  If an illegial
                character is encounterd, conversion halts and the error
                postion is reported through the variable, Err.

Parameters:

     Input:     InpStr = String representation to be converted to a real value.
                Base   = Base the value is represented in.

    Output:     Err    = position of illegial character; set to zero
                         if no error is encountered.
                Valu   = converted value.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0428

     Volume in drive A has no label
     Directory of A:\

    ARGLIST  PAS      3712   5-15-85   2:39p
    COMMCALL PAS      6400   5-15-85   2:42p
    DIR      PAS      1024   5-15-85   2:40p
    FASTWRIT PAS      2944   5-15-85   2:41p
    FILES428 TXT      1642  11-05-85   2:50p
    GETDIR   PAS      5248   5-17-85   1:40a
    GRAPHICS LBR    180864   5-17-85   1:16a
    GRAPHICS TXT       544   5-17-85  11:26p
    GRAPHSRC LBR     28416   5-15-85   2:35p
    INLINER  PAS     52205   5-17-85   1:18a
    PATHS    PAS      9344   5-17-85   1:40a
    PIBMUSIC PAS     24704   6-04-85   8:00p
    SAMPDIR  PAS      1664   5-17-85   1:40a
    SAMPPATH PAS      3328   5-17-85   1:40a
    SCROLL   PAS       768   5-15-85   2:38p
    STRNGLIB DOC     13184   5-17-85   1:38a
    STRNGLIB INC      8448   5-17-85   1:38a
           17 file(s)     344439 bytes
                           10240 bytes free
