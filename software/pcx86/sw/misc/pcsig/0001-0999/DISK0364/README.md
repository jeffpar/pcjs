---
layout: page
title: "PC-SIG Diskette Library (Disk #364)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0364/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0364"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #4"

    This disk of Turbo Pascal files has some good tutorial
    information.  The programs on this disk do a variety of tasks,
    such as, window management utilities, a Pascal listing formatter,
    and eight chapters worth of source code from the book "Software
    Tools in Pascal".
    
    System Requirements: Turbo Pascal
    
    How to Start:  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    CHAPTER3 PAS  CHAPTER6.PAS ,CHAPTER7.PAS TURBOFIX.PAS, won't compile.
    CHAPTER5 PAS  Source code "Software Tools in Pascal", Ch. 5
    CHAPTER6 PAS  BAD FILE
    CHAPTER4 PAS  Source code "Software Tools in Pascal", Ch. 4
    CHAPTER2 PAS  Source code "Software Tools in Pascal", Ch. 2
    CHAPTER1 PAS  Source code "Software Tools in Pascal", Ch. 1
    LASTCOM  PAS  Resident program to bring back last ten DOS commands
    TURBTOOL DOC  Documentation -- READ IT
    INITCMD  PAS  Included by SHELL.PAS
    SHELL    PAS  Program for using the routines in "CHAPTER#" above
    TOOLU    PAS  Included by each CHAPTER#.PAS file
    CHAPTER8 PAS  Source code "Software Tools in Pascal", Ch. 8
    CHAPTER7 PAS  BAD FILE
    CHAPTER6 PAS  BAD FILE
    WINDOW   INC  Window handler used by LASTCOM.PAS
    REGRSTOR INC  INLINE code to restore registers
    REGSAVE  INC  INLINE code to save registers
    TADFORM  INC  Included time and date format routines
    TADBB    INC  Included time and date for "BigBoard II"
    TADPC    INC  Included time and date routines for PC
    PLIST    PAS  Program Lister -- lists $Include files, too.
    PFORMAT  DOC  Documentation
    PFORMAT  PAS  Pretty FORMATter for printing TURBO programs
    VARS     INC  Included by DEMO.PAS
    DEMO     PAS  Demonstration of the above two
    WRITE    DOC  Documentation for WRITELIN.INC & WRITEXY.INC
    WRITEXY  INC  Write at location X,Y
    WRITELIN INC  Replaces TURBO "WriteLn" procedure -- faster.
    WINDDEMO PAS  Demonstration program
    STRNGLIB INC  Library of additional STRING routines -- comprehensive
    GROWDEMO PAS  Demonstration program
    DEFDEMO  PAS  Demonstration program
    WINDODEF PAS  Associated file
    DEMODEFS INC  Associated file
    THELP    COM  Resident HELP WINDOW for TURBO Pascal
    STRNGLIB DOC  Documentation
    GROWWIN  INC  Associated file
    PRINTMAN BAT  Prints documentation for WINDMNGR.INC
    VAR      INC  Associated file --> change here for monochrome <--
    WINDMNGR TXT  How to print documentation WINDNGR.INC
    WINDMNGR DOC  Documentation
    WINDMNGR INC  Window Manager routines
    NOBAK    PAS  Patcher to stop TURBO from creating .BAK files
    THELP    DOC  Documentation
    TURBOFIX PAS  Auto-patch to remove certain terminal control codes
    TURBOCLR ZAP  Applies the above patch w/ PC-ZAP (Vol. 70)
    TURBOCLR DOC  How to stop TURBO progs clearing screen at start
    TURBO20  BUG  DEBUG script for floating-point bug in TURBO.COM, v2.0
    TURBO    PAT  How to patch Z80 TURBO programs for your terminal
    TPATCH   DAT  Data for four patches -- serves as documentation
    TPATCH   PAS  Patcher for PROGRAMS compiled under TURBO
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 157:  TURBO PASCAL/3   (programs and utilities -- various authors)

This is a DOUBLE-SIDED diskette.

Index   Name           Description

157.01  CHAPTER1.PAS   Source code "Software Tools in Pascal", Ch. 1
157.02  CHAPTER2.PAS   Source code "Software Tools in Pascal", Ch. 2
157.03  CHAPTER3.PAS   Source code "Software Tools in Pascal", Ch. 3
157.04  CHAPTER4.PAS   Source code "Software Tools in Pascal", Ch. 4
157.05  CHAPTER5.PAS   Source code "Software Tools in Pascal", Ch. 5
157.06  CHAPTER6.PAS   Source code "Software Tools in Pascal", Ch. 6 incompl.
157.07  CHAPTER7.PAS   Source code "Software Tools in Pascal", Ch. 7
157.08  CHAPTER8.PAS   Source code "Software Tools in Pascal", Ch. 8
157.09  TOOLU   .PAS   ^$Included by each CHAPTER#.PAS file
157.10  SHELL   .PAS   Program for using the routines in "CHAPTER#" above
157.11  INITCMD .PAS   ^$Included by SHELL.PAS
157.12  TURBTOOL.DOC   ^Documentation -- READ IT
157.13  LASTCOM .PAS   Resident program to bring back last ten DOS commands
157.14  WINDOW  .INC   ^Window handler used by LASTCOM.PAS
157.15  PFORMAT .PAS   Pretty FORMATter for printing TURBO programs
157.16  PFORMAT .DOC   ^Documentation
157.17  PLIST   .PAS   Program Lister -- lists $Include files, too.
157.18  TADPC   .INC   ^$Included time and date routines for PC
157.19  TADBB   .INC   ^$Included time and date for "BigBoard II"
157.20  TADFORM .INC   ^$Included time and date format routines
157.21  REGSAVE .INC   INLINE code to save registers
157.22  REGRSTOR.INC   INLINE code to restore registers
157.23  STRNGLIB.INC   Library of additional STRING routines -- comprehensive
157.24  STRNGLIB.DOC   ^Documentation
157.25  THELP   .COM   Resident HELP WINDOW for TURBO Pascal
157.26  THELP   .DOC   ^Documentation
157.27  NOBAK   .PAS   Patcher to stop TURBO from creating .BAK files
157.28  TPATCH  .PAS   Patcher for PROGRAMS compiled under TURBO
157.29  TPATCH  .DAT   ^Data for four patches -- serves as documentation
157.30  TURBO   .PAT   How to patch Z80 TURBO programs for your terminal
157.31  TURBO20 .BUG   DEBUG script for floating-point bug in TURBO.COM, v2.0
157.32  TURBOCLR.DOC   How to stop TURBO progs clearing screen at start
157.33  TURBOCLR.ZAP   ^Applies the above patch w/ PC-ZAP (Vol. 70)
157.34  TURBOFIX.PAS   Auto-patch to remove certain terminal control codes
157.35  WINDMNGR.INC   Window Manager routines
157.36  WINDMNGR.DOC   ^Documentation
157.37  PRINTMAN.BAT   ^Prints documentation for WINDMNGR.INC
157.38  WINDMNGR.TXT   ^How to print documentation WINDNGR.INC
157.39  VAR     .INC   ^Associated file --> change here for monochrome <--
157.40  GROWWIN .INC   ^Associated file
157.41  DEMODEFS.INC   ^Associated file
157.42  WINDODEF.PAS   ^Associated file
157.43  DEFDEMO .PAS   ^Demonstration program
157.44  GROWDEMO.PAS   ^Demonstration program
157.45  WINDDEMO.PAS   ^Demonstration program
157.46  WRITELIN.INC   Replaces TURBO "WriteLn" procedure -- faster.
157.47  WRITEXY .INC   Write at location X,Y
157.48  WRITE   .DOC   ^Documentation for WRITELIN.INC & WRITEXY.INC
157.49  DEMO    .PAS   ^Demonstration of the above two
157.50  VARS    .INC   ^$Included by DEMO.PAS
157.51  README  .157   YOU ARE READING IT
```
{% endraw %}

## FILES364.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 364               Turbo Pascal #3                       v2   DS2
------------------------------------------------------------------------
 
Missing file FPRIMS.PAS. CHAPTER3.PAS, CHAPTER6.PAS ,CHAPTER7.PAS
TURBOFIX.PAS, won't compile.
 
CHAPTER1 PAS  Source code "Software Tools in Pascal", Ch. 1
CHAPTER2 PAS  Source code "Software Tools in Pascal", Ch. 2
CHAPTER3 PAS  BAD FILE
CHAPTER4 PAS  Source code "Software Tools in Pascal", Ch. 4
CHAPTER5 PAS  Source code "Software Tools in Pascal", Ch. 5
CHAPTER6 PAS  BAD FILE
CHAPTER7 PAS  BAD FILE
CHAPTER8 PAS  Source code "Software Tools in Pascal", Ch. 8
TOOLU    PAS  Included by each CHAPTER#.PAS file
SHELL    PAS  Program for using the routines in "CHAPTER#" above
INITCMD  PAS  Included by SHELL.PAS
TURBTOOL DOC  Documentation -- READ IT
LASTCOM  PAS  Resident program to bring back last ten DOS commands
WINDOW   INC  Window handler used by LASTCOM.PAS
PFORMAT  PAS  Pretty FORMATter for printing TURBO programs
PFORMAT  DOC  Documentation
PLIST    PAS  Program Lister -- lists $Include files, too.
TADPC    INC  Included time and date routines for PC
TADBB    INC  Included time and date for "BigBoard II"
TADFORM  INC  Included time and date format routines
REGSAVE  INC  INLINE code to save registers
REGRSTOR INC  INLINE code to restore registers
STRNGLIB INC  Library of additional STRING routines -- comprehensive
STRNGLIB DOC  Documentation
THELP    COM  Resident HELP WINDOW for TURBO Pascal
THELP    DOC  Documentation
NOBAK    PAS  Patcher to stop TURBO from creating .BAK files
TPATCH   PAS  Patcher for PROGRAMS compiled under TURBO
TPATCH   DAT  Data for four patches -- serves as documentation
TURBO    PAT  How to patch Z80 TURBO programs for your terminal
TURBO20  BUG  DEBUG script for floating-point bug in TURBO.COM, v2.0
TURBOCLR DOC  How to stop TURBO progs clearing screen at start
TURBOCLR ZAP  Applies the above patch w/ PC-ZAP (Vol. 70)
TURBOFIX PAS  Auto-patch to remove certain terminal control codes
WINDMNGR INC  Window Manager routines
WINDMNGR DOC  Documentation
PRINTMAN BAT  Prints documentation for WINDMNGR.INC
WINDMNGR TXT  How to print documentation WINDNGR.INC
VAR      INC  Associated file --> change here for monochrome <--
GROWWIN  INC  Associated file
DEMODEFS INC  Associated file
WINDODEF PAS  Associated file
DEFDEMO  PAS  Demonstration program
GROWDEMO PAS  Demonstration program
WINDDEMO PAS  Demonstration program
WRITELIN INC  Replaces TURBO "WriteLn" procedure -- faster.
WRITEXY  INC  Write at location X,Y
WRITE    DOC  Documentation for WRITELIN.INC & WRITEXY.INC
DEMO     PAS  Demonstration of the above two
VARS     INC  Included by DEMO.PAS
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
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

```
{% endraw %}

## TURBOCLR.DOC

{% raw %}
```
                           TURBOCLR.DOC
                      12/31/84 - Loren Cook

The following procedure is how to remove the automatic screen
clearing of Turbo Pascal. This is compatible with version 2.0
of Turbo Pascal.

As you may or may not know Turbo Pascal compiled programs always
start with a clear screen function (whether you want them to or
not). To modify your COMPILED program so the screen DOES NOT
clear on program invocation enter the following patch using
DEBUG. (Remember to ALWAYS use a copy of a file NOT the master!).


B>debug filename.com
-u 2f5            <--- type "u 2f5"
28F2:02F5 883E6A01      MOV     [016A],BH
28F2:02F9 32E4          XOR     AH,AH
28F2:02FB 55            PUSH    BP
28F2:02FC CD10          INT     10  <--- This is what we want
28F2:02FE 5D            POP     BP
28F2:02FF 2E            CS:
28F2:0300 A06E01        MOV     AL,[016E]
28F2:0303 2E            CS:
28F2:0304 8A1E6F01      MOV     BL,[016F]
28F2:0308 2E            CS:
28F2:0309 8A0E7001      MOV     CL,[0170]
28F2:030D 803E5401FF    CMP     BYTE PTR [0154],FF
28F2:0312 7406          JZ      031A
28F2:0314 B0FF          MOV     AL,FF

-a 2fc            <--- type "a 2fc"
28F2:02FC nop     <--- type in "nop"
28F2:02FD nop     <--- type in "nop"
28F2:02FE         <--- press return

-u 2f5            <--- type "u 2f5"
28F2:02F5 883E6A01      MOV     [016A],BH
28F2:02F9 32E4          XOR     AH,AH
28F2:02FB 55            PUSH    BP
28F2:02FC 90            NOP        <--- Should now look like this
28F2:02FD 90            NOP        <--- and this
28F2:02FE 5D            POP     BP
28F2:02FF 2E            CS:
28F2:0300 A06E01        MOV     AL,[016E]
28F2:0303 2E            CS:
28F2:0304 8A1E6F01      MOV     BL,[016F]
28F2:0308 2E            CS:
28F2:0309 8A0E7001      MOV     CL,[0170]
28F2:030D 803E5401FF    CMP     BYTE PTR [0154],FF
28F2:0312 7406          JZ      031A
28F2:0314 B0FF          MOV     AL,FF

-w     <--- type "w" to save the new file
-q     <--- type "q" to exit DEBUG


If you wish to have your screen cleared now simply use Turbo Pascal's
"ClrScr" function. Good Luck.



```
{% endraw %}

## TURBTOOL.DOC

{% raw %}
```
TURBTOOL.LBR
This library contains the source from the book
"Software Tools in Pascal" by B. W. Kernighan and
P. J. Plauger, Addison-Wesley. It has been adapted
for TURBO Pascal.
How to implement.
Compile SHELL.COM with the Com option.
Compile CHAPTERX.CHN with the cHn option.
Execute SHELL.
Accepts redirection, but not pipes.
Bill McGee, 613-828-9130
Notes. The version using TURBO is fast enough to make this
a useful set of tools for file manipulation.
=======================================================================
NOTE:  These files contained a number of "BDOS(0,0)" calls, a CP/M item.
       I don't know what the BDOS call does, but IBM PC TURBO won't
       accept it.  I replaced them with "HALT" and marked them with my
       initials, {N.J.R}.
            Chapter6 $Includes a file, "FPRIMS.PAS", which is not found
       on this disk, so Chapter6 won't work.
            The program seems to work, but it's well-nigh impossible to
       tell what it DOES without the book.
                               -- Neil J. Rubenking

```
{% endraw %}

## WINDMNGR.TXT

{% raw %}
```
                        The Window Manager 1.0
              
                       
              To  print  out  the  manual  just  type  PRINTMAN.   It  is 
         formatted  for  an  IBM or caompatible printer.  If you find any 
         bugs in this program.  Please give ma a call. Thankyou.  

                                                  Jim Everingham
```
{% endraw %}

## WRITE.DOC

{% raw %}
```
                      WRITELIN and WRITEXY

                               by

                      Jim Everingham 1984

    ***********************************************************
    *  These Procedures are Public Domain and are free to be  *
    *  copied, modified, and distributed.                     *
    ***********************************************************


VARS     - These variable must be Global and be used at the very top
           of your program.


WRITELIN - To call this procedure first initialize LINE_POS ar the beginning
           of your program to 0 by the statement LINE_POS:=0;. If this is not
           done, no telling what may happen. Next use the procedure by the
           following Syntax:

                   WRITELN(<Character String>,<Color -Integer between
                           0 and 255>);

           Example:

                   WRITELN('Hello',12);

WRITEXY -  It is not necessary to initialize LINE_POS or any other variables
           to use this procedure. Here is the Syntax:

                   WRITEXY(<Character String>,<X-Coordinate>,<Y-Coor-
                           dinate>,<Color -Integer between 0 and 255>);

           Example:

                   WRITEXY('Hello',40,20,(12+128));

                   Note: Adding 128 to color adds Blinking,
                   (ie, to add blinking to red (12), add 128
                   or 140 for blinking).

These Routines are generally more responsive than the regular Turbo Pascal
procedure and much faster.  If you have any questions about them, please
contact:
                   Jim Everingham
                   215 West Fairmount Avenue
                   Apt 306 Fairmount Hills
                   State College, Pa 16801
                   814-238-9655

                   Compuserve: 75116,433

NOTE:  Both of these files assume a color monitor.  To use with monochrome,
       you must change the screen address from $B800 to $B000.  The place
       to make the change is marked.  -- Neil J. Rubenking



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0364

     Volume in drive A has no label
     Directory of A:\

    CHAPTER1 PAS      2304   2-23-85   1:15p
    CHAPTER2 PAS      6520   3-09-85   7:23a
    CHAPTER3 PAS     11904   3-09-85   7:25a
    CHAPTER4 PAS      7998   3-09-85   7:26a
    CHAPTER5 PAS      8652   3-09-85   7:27a
    CHAPTER6 PAS     16896   2-23-85   1:16p
    CHAPTER7 PAS      8704   2-23-85   1:16p
    CHAPTER8 PAS     12288   2-23-85   1:16p
    DEFDEMO  PAS       948   2-23-85   1:28p
    DEMO     PAS      2143   3-11-85   9:02a
    DEMODEFS INC      1664   2-23-85   1:28p
    FILES    TXT      3456   3-25-85   4:14p
    FILES364 TXT      2944   5-23-85   4:04p
    GROWDEMO PAS       500   2-23-85   1:28p
    GROWWIN  INC      3328   2-23-85   1:28p
    INITCMD  PAS      1751   3-09-85   7:31a
    LASTCOM  PAS      7984   2-23-85   1:40p
    NOBAK    PAS      3914   3-11-85   9:03a
    PFORMAT  DOC      4106   2-23-85   1:36p
    PFORMAT  PAS     26707   2-23-85   1:36p
    PLIST    PAS      7740   3-09-85   7:13a
    PRINTMAN BAT       128   2-23-85   1:27p
    REGRSTOR INC      1024   2-23-85   1:40p
    REGSAVE  INC      1152   2-23-85   1:40p
    SHELL    PAS      1945   3-09-85   7:34a
    STRNGLIB DOC     13145   2-23-85   1:45p
    STRNGLIB INC      8333   2-23-85   1:45p
    TADBB    INC       384   2-23-85   1:37p
    TADFORM  INC      1792   2-23-85   1:38p
    TADPC    INC      1920   2-23-85   1:38p
    THELP    COM     30720   2-23-85   1:25p
    THELP    DOC       896   2-23-85   1:25p
    TOOLU    PAS     11670   3-09-85   7:21a
    TPATCH   DAT      1664   2-23-85   1:21p
    TPATCH   PAS      5760   2-23-85   1:22p
    TURBO    PAT      2176   2-23-85   1:22p
    TURBO20  BUG      6144   2-23-85   1:22p
    TURBOCLR DOC      2179   2-23-85  10:30a
    TURBOCLR ZAP       512   2-23-85  10:27a
    TURBOFIX PAS      3456   2-23-85   1:22p
    TURBTOOL DOC      1076   3-09-85   7:42a
    VAR      INC      1280   2-23-85   1:28p
    VARS     INC       128   2-23-85   1:32p
    WINDDEMO PAS      7984   2-23-85   1:28p
    WINDMNGR DOC     39296   2-23-85   1:29p
    WINDMNGR INC      9216   2-23-85   1:29p
    WINDMNGR TXT       384   2-23-85   1:27p
    WINDODEF PAS     19795   2-23-85   1:29p
    WINDOW   INC      2432   2-23-85   1:40p
    WRITE    DOC      2091   3-08-85   1:08p
    WRITELIN INC       898   3-08-85   1:02p
    WRITEXY  INC       802   3-08-85   1:03p
           52 file(s)     322833 bytes
                           14336 bytes free
