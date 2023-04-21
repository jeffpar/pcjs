---
layout: page
title: "PC-SIG Diskette Library (Disk #1697)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1697/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1697"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DML & XREF"

    Turbo Pascal programmers, take note!  Here are 87 Turbo Pascal
    routines not found in the standard version 4.0 or 5.0 library.  Full
    source code and documentation is included for each routine.
    
    The library is divided into four functional modules containing:
    
    ~ 42 general purpose procedures for such things as system programming
    extensions, file I/O and protection, text encryption, general purpose
    video and video messages, disk and memory sizes, instruction timing,
    general purpose file, math, DOS and version control
    
    ~ 18 numeric procedures for handling general numeric formatting and
    conversion, and date and time formatting and conversion
    
    ~ 14 string procedures to handle general purpose string functions and
    conversion
    
    ~ 13 keyboard procedures for controlling and accessing the keyboard and
    keyboard buffer.
    
    The entire library can be accessed by a single statement or the four
    unit modules can be accessed individually.  A demonstration is
    included that shows the action of each routine.
    
    An additional utility included is XREF, a Pascal source code
    cross-reference and formatting program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DML.DOC

{% raw %}
```
.R:E
.W:96
.H:...DML UNIT Version 1.00...
.H:...$$Day Mon D, YEAR$$  $$Z:MI A.M.$$     Page $$$...
.H:
.F:
.F:... Copyright (c) 1989, by DML Software Inc. ...
.X:8

DML is a collection of 87 useful routines not found in the standard Turbo 
Pascal Version 5.0 Library.  Full source code and documentation is included 
for the entire library.  

The entire library can be accessed by a single USE DML statement, or the four 
unit modules can be accessed indiviadually by a USE GEN, NUM, STRG, KBD
statement.  Because of Turbo Pascal's smart linking, the distrinction is moot. 
Because the individual UNITs take advantage of circular references, they 
are NOT immediately source level compatible with Turbo Pascal 4.0, but the 
overall DML UNIT is Turbo Pascal 4.0 source level compatible. 

The demo program DMLTEST exercises every unit call.


This overall documentation is in three sections:

A) UNIT INTERFACES
B) PROCEDURE ALPHABETICAL LISTING
C) FILES ON DISK 



A) UNIT INTERFACES

---------------------------------------------------------------------------
I) GEN.TPU - GENERAL PURPOSE PROCEDURES (42)
---------------------------------------------------------------------------

1)   System programming extensions (5)

PROCEDURE Abend(ExitCode : BYTE; ProcAddr : POINTER);
PROCEDURE CallProcedure(ProcAddr : POINTER);
PROCEDURE CallProcedureX(    ProcAddr : POINTER; 
                             I1       : INTEGER;
                         VAR S1       : STRING;
                         VAR I2       : INTEGER);
FUNCTION LongAddr(Seg, Ofs : WORD) : LONGINT;
FUNCTION Same (VAR Var1, Var2; Len : WORD) : BOOLEAN;

2)   File I/O and Protection (5)

FUNCTION ReadOnlyExist(FileName : STRING) : BOOLEAN;
FUNCTION ReadOnlyGetAttr(FileName : STRING) : BOOLEAN;
FUNCTION ReadOnlySetAttr(FileName : STRING ; Flag : BOOLEAN) : INTEGER;
FUNCTION FileOpen(VAR GenFileDummy; 
                      GenFileRecLen   : WORD; 
                      GenFileOpenMode : WORD) : INTEGER; 
FUNCTION FileAssignAndOpen(    GenFileName     : STRING; 
                           VAR GenFileDummy; 
                               GenFileRecLen   : WORD; 
                               GenFileOpenMode : WORD) : BOOLEAN; 

3)   Text Encryption (2)

FUNCTION EnCrypt (Orig : STRING) : STRING;
FUNCTION DeCrypt (Orig : STRING) : STRING;

4)   General Purpose Video (7)

PROCEDURE GenBeep (Frequency, Duration : WORD);
FUNCTION ColorMonitorInstalled : BOOLEAN;
PROCEDURE Cursor (Visible : BOOLEAN);
PROCEDURE CursorInsertSize;
PROCEDURE CursorOverwriteSize;
FUNCTION ScrBackCursorColor : WORD;
FUNCTION ScrForeCursorColor : WORD;



5)   Video Messages (6)

PROCEDURE Pause;
PROCEDURE ScrErrMsg (Message : STRING );
PROCEDURE ScrStatMsg (Message : STRING);
FUNCTION ScrYN (Message : STRING) : BOOLEAN;
FUNCTION ScrYouAreSure (Message : STRING ) : BOOLEAN;
PROCEDURE Wait (DispWait : BOOLEAN);

6)   Disk and Memory Sizes (4)

FUNCTION BytesOnDiskFree(Drive : CHAR) : LONGINT;
FUNCTION FreeDOSMem : LONGINT;
FUNCTION SizeOfMem : LONGINT;
FUNCTION StackAvail : WORD;

7)   Instruction Timing (2)

FUNCTION TimeElapsed : REAL;
FUNCTION TimeTotal(Start , Stop : REAL) : STRING;

8)   General Purpose File (4)

FUNCTION Exist (FileName: STRING) : BOOLEAN;
FUNCTION LinesInFile (FileName : STRING) : INTEGER;
FUNCTION GetFileDateAndTimeString  (FileName : STRING) : STRING;
FUNCTION GetFileDateAndTimeLongInt (FileName : STRING) : LONGINT;

9)   Math (2)

FUNCTION Power (X, Y : REAL) : REAL;
FUNCTION Log (x : REAL) : REAL;

10)  DOS and Environment (3)

FUNCTION DOSVersionR : REAL;
FUNCTION WhoAmI : STRING;
FUNCTION GetEnvString(EnvVar : STRING) : STRING;

11)  Version Control (2)

FUNCTION GetDMLVersion(Module : WORD) : STRING;
FUNCTION GetDMLVersions : STRING;



---------------------------------------------------------------------------
II) NUM.TPU - NUMERIC PROCEDURES (18)
---------------------------------------------------------------------------

1)  General Numeric Formatting And Conversion (12)

FUNCTION B2S (Flag : BOOLEAN) : STRING;

FUNCTION W2S (Num : WORD;    Mask : STRING) : STRING;
FUNCTION I2S (Num : INTEGER; Mask : STRING) : STRING;
FUNCTION L2S (Num : LONGINT; Mask : STRING) : STRING;

FUNCTION R2S (Num : REAL;   Mask : STRING) : STRING;
FUNCTION D2S (Num : DOUBLE; Mask : STRING) : STRING;

FUNCTION S2R (Source : STRING) : REAL;
FUNCTION S2D (Source : STRING) : DOUBLE;

FUNCTION StrNumTest (Fld : STRING) : StrNumType;

FUNCTION S2L (Source : STRING) : LONGINT;
FUNCTION S2I (Source : STRING) : INTEGER;
FUNCTION S2W (Source : STRING) : WORD;

2)  Date and Time Formatting And Conversion (6)

FUNCTION NumTh (Num : INTEGER) : STRING;
PROCEDURE Date2R (VAR JulSec : REAL; DateTime : T_DateTime);
PROCEDURE R2Date (JulSec : REAL; VAR DateTime : T_DateTime);
FUNCTION Date2S (DateTime : T_DateTime; Mask : STRING) : STRING;
PROCEDURE GetDOSDateAndTime (VAR JulSec : REAL; VAR DateTime : T_DateTime);
PROCEDURE SetDOSDateAndTime (DateTime : T_DateTime);



---------------------------------------------------------------------------
III) STRG - STRING PROCEDURES (14)
---------------------------------------------------------------------------

1)  General Purpose String (10)

FUNCTION RJS      (Source : STRING; Size : BYTE) : STRING;
FUNCTION LJS      (Source : STRING; Size : BYTE) : STRING;
FUNCTION CJS      (Source : STRING; Size : BYTE) : STRING;
FUNCTION Strip    (Source : STRING; Code : BYTE) : STRING;
FUNCTION StrCase  (Source : STRING; Code : BYTE) : STRING;
FUNCTION StrField (Source : STRING; Delimiter : CHAR; Num : BYTE) : STRING;
FUNCTION StrFill  (FillCh : CHAR; Num : BYTE) : STRING;
FUNCTION StrPad   (Source : STRING) : STRING;
FUNCTION StrShiftLeft  (Fld : STRING; Posit : BYTE) : STRING;
FUNCTION StrShiftRight (Fld : STRING; Posit : BYTE; Fill : CHAR) : STRING;

2)  String Conversion (4)

PROCEDURE S2C     (Strg : STRING ; VAR CharA ; Len : BYTE);
FUNCTION C2S      (VAR CharA ; BYTE : WORD) : STRING;
PROCEDURE S2Z     (Strg : STRING ; VAR CharA);
FUNCTION Z2S      (VAR CharA) : STRING;



---------------------------------------------------------------------------
IV) KBD - KEYBOARD PROCEDURES (13)
---------------------------------------------------------------------------

1)  General Purpose Keyboard (9)

FUNCTION KbdGetStatus : WORD;
PROCEDURE KbdSetInsMode (InsMode : BOOLEAN);
PROCEDURE KbdSetCapsLock (CapsLock : BOOLEAN);
PROCEDURE KbdSetNumLock (NumLock : BOOLEAN);
PROCEDURE KbdSetScrollLock (ScrollLock : BOOLEAN);
FUNCTION KbdInsModeStatus : BOOLEAN;
FUNCTION KbdCapsLockStatus : BOOLEAN;
FUNCTION KbdNumLockStatus : BOOLEAN;
FUNCTION KbdScrollLockStatus : BOOLEAN;

2)  Keyboard Buffer (4)

PROCEDURE KbdClear;
FUNCTION KbdNumValuesWaiting : WORD;
FUNCTION KbdInputValue : WORD;
FUNCTION KbdKeyWaiting : BOOLEAN;



B) PROCEDURE ALPHABETICAL LISTING

Procedure Name                             UNIT

Abend                                      GEN
B2S                                        NUM
BytesOnDiskFree                            GEN
C2S                                        STRG
CallProcedure                              GEN
CallProcedureX                             GEN
CJS                                        STRG
ColorMonitorInstalled                      GEN
Cursor                                     GEN
CursorInsertSize                           GEN
CursorOverwriteSize                        GEN
D2S                                        NUM
Date2R                                     NUM
Date2S                                     NUM
DeCrypt                                    GEN
DOSVersionR                                GEN
EnCrypt                                    GEN
Exist                                      GEN
FileAssignAndOpen                          GEN
FileOpen                                   GEN
FreeDOSMem                                 GEN
GenBeep                                    GEN
GetDMLVersion                              GEN
GetDMLVersions                             GEN
GetDOSDateAndTime                          NUM
GetEnvString                               GEN
GetFileDateAndTimeLongInt                  GEN
GetFileDateAndTimeString                   GEN
I2S                                        NUM
KbdCapsLockStatus                          KBD
KbdClear                                   KBD
KbdGetStatus                               KBD
KbdInputValue                              KBD
KbdInsModeStatus                           KBD
KbdKeyWaiting                              KBD
KbdNumLockStatus                           KBD
KbdNumValuesWaiting                        KBD
KbdScrollLockStatus                        KBD
KbdSetCapsLock                             KBD
KbdSetInsMode                              KBD
KbdSetNumLock                              KBD
KbdSetScrollLock                           KBD
L2S                                        NUM
LJS                                        STRG
LinesInFile                                GEN
LongAddr                                   GEN
Log                                        GEN
NumTh                                      NUM
Pause                                      GEN
Power                                      GEN
R2Date                                     NUM
R2S                                        NUM
ReadOnlyExist                              GEN
ReadOnlyGetAttr                            GEN
ReadOnlySetAttr                            GEN
RJS                                        STRG
S2C                                        STRG
S2D                                        NUM
S2I                                        NUM
S2L                                        NUM
S2R                                        NUM
S2W                                        NUM
S2Z                                        STRG
Same                                       GEN
ScrBackCursorColor                         GEN
ScrErrMsg                                  GEN
ScrForeCursorColor                         GEN
ScrStatMsg                                 GEN
ScrYN                                      GEN
ScrYouAreSure                              GEN
SetDOSDateAndTime                          NUM
SizeOfMem                                  GEN
StackAvail                                 GEN
StrCase                                    STRG
StrField                                   STRG
StrFill                                    STRG
Strip                                      STRG
StrNumTest                                 NUM
StrPad                                     STRG
StrShiftLeft                               STRG
StrShiftRight                              STRG
TimeElapsed                                GEN
TimeTotal                                  GEN
W2S                                        NUM
Wait                                       GEN
WhoAmI                                     GEN
Z2S                                        STRG



C) FILES ON DISK (35)

1) SOURCE FILES: *.PAS, INT, IMP, INC (16)

  DML.PAS       - Unit
  DMLINIT.INC   - Unit Initialization

  GEN.PAS       - Unit
  GEN.INT       - Unit Interface
  GEN.IMP       - Unit Implementation
  
  NUM.PAS       - Unit
  NUM.INT       - Unit Interface
  NUM.IMP       - Unit Implementation

  STRG.PAS      - Unit
  STRG.INT      - Unit Interface
  STRG.IMP      - Unit Implementation

  KBD.PAS       - Unit
  KBD.INT       - Unit Interface
  KBD.IMP       - Unit Implementation

  DMLTEST.PAS   - Unit test program
  XREF.PAS      - Cross reference program

2) UNIT FILES: *.TPU (6)

  DML.TPU
  GEN.TPU
  NUM.TPU
  STRG.TPU
  KBD.TPU
  HEAPTREE.TPU  - Quasi B-Tree for Xref program

3) PROGRAM FILES: *.EXE (2)

  DMLTEST.EXE
  XREF.EXE



4) DOCUEMENTATION FILES: *.DOC, TBL (PC-WRITE Format) (11)

  DML.DOC       - This file
  GEN.DOC
  NUM.DOC
  STRG.DOC
  KBD.DOC
  GEN.TBL       - Table of Contents files
  NUM.TBL
  STRG.TBL
  KBD.TBL
  XREF.DOC
  README.DOC    - Read me first

```
{% endraw %}

## GEN.DOC

{% raw %}
```
.KF:Gen.toc
.R:E
.W:96
.H:...DML GEN UNIT Version 1.00...
.H:...$$Day Mon D, YEAR$$  $$Z:MI A.M.$$     Page $$$...
.H:
.F:
.F:... Copyright (c) 1989, by DML Software Inc. ...
.X:8

.K:GENERAL ROUTINES - CHANGES HIGHLIGHTS (VERSION 1.00)
GENERAL ROUTINES - CHANGES HIGHLIGHTS  (VERSION 1.00)

1/1/89 Initial Release

  

.K:1) SYSTEM PROGRAMMING EXTENSIONS
1) SYSTEM PROGRAMMING EXTENSIONS

  NAME
.K:Abend - Terminate a Program.
     Abend - Terminate a Program.

  SYNOPSIS
     PROCEDURE Abend (ExitCode : BYTE; ProcAddr : POINTER);

     Abend(250,NIL);
 
  DESCRIPTION
     This procedure halts execution of a program, and pinpoints the run time 
     address of the source line causing the abend in much the same way as 
     actual Turbo run time errors.  The procedure displays the segmented 
     hexidecimal address of the line containing the Abend statement if the 
     ProcAddr parameter is NIL, otherwise the address displayed is the value 
     passed in this parameter.  The ExitCode parameter is passed directly to 
     the Turbo Halt Procedure.  Note that ExitCode is a byte and not a word, 
     because the DOS batch file statement IF ERRORLEVEL only looks at the 
     lower byte of a word value set by the Turbo HALT.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     Since only 255 possible exit codes can be set, it is the users 
     responsibility to pick values not used by standard Turbo run time errors.

  PARTIALLY OBSOLETED BY 
     RunError - Actually totally obsolete but Abend is such a 'nice' piece of 
     code it remains for at least eductaional purposes.

  UPDATE HISTORY

  

  NAME
.K:CallProcedure - Invoke a simple procedure indirectly.
     CallProcedure - Invoke a simple procedure indirectly.

  SYNOPSIS
     PROCEDURE CallProcedure (ProcAddr : POINTER);

     {$F+} PROCEDURE Indirect; {$F-}

     CallProcedure(@Indirect);
 
  DESCRIPTION
     This procedure invokes another procedure indirectly.  The parameter is 
     the address of another procedure.  This is very useful in setting up 
     'jump tables' of procedures. 

  SEE ALSO
     CallProcedureX

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     The invoked procedure must have no parameters, and must be compiled with 
     the FAR model compiler directive.

  PARTIALLY OBSOLETED BY 
     Generalized Procedure Variables and Parameters

  UPDATE HISTORY

  

  NAME
.K:CallProcedureX - Invoke a complex procedure indirectly.
     CallProcedureX - Invoke a complex procedure indirectly.

  SYNOPSIS
     PROCEDURE CallProcedureX (    ProcAddr : POINTER;
                                   I1       : INTEGER;
                               VAR S1       : STRING;
                               VAR I2       : INTEGER);
                              
     {$F+} PROCEDURE Indirect (    ProcAddr : POINTER;
                                   I1       : INTEGER;
                               VAR S1       : STRING;
                               VAR I2       : INTEGER); {$F-}
                               

     CallProcedure(@Indirect,23,MyStr,MyInt);
 
  DESCRIPTION
     This procedure invokes another procedure indirectly.  The parameter is 
     the address of another procedure.  This procedure allows passing of
     parameters unlike CallProcedure, but the number and type of parameters is 
     'locked in'; to invoke another type of procedure, another procedure 
     similar to this one must be set up using the provided source code for 
     inspiration. 

  SEE ALSO
     CallProcedure

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     The invoked procedure must match the number and type of parameters 
     in the invoking call exactly, and must be compiled with the FAR model 
     compiler directive. 

  PARTIALLY OBSOLETED BY 
     Generalized Procedure Variables and Parameters

  UPDATE HISTORY

  

  NAME
.K:LongAddr - Returns the full twenty bit address of any memory location.
     LongAddr - Returns the full twenty bit address of any memory location.

  SYNOPSIS
     FUNCTION LongAddr (Seg, Ofs : WORD ): LONGINT;

     WRITELN ('The memory location of DataVar is: ',
               LongAddr(SEG(DataVar),OFS(DataVar)));

  DESCRIPTION
     LongAddr combines the Segment and Offset 16 bit values for any memory 
     location into a single twenty bit value, and returns this value as a 
     real number.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:Same - Performs byte by byte comparison of two blocks of data.
     Same - Performs byte by byte comparison of two blocks of data.

  SYNOPSIS
     FUNCTION Same (VAR Var1, Var2 ;
                        Len        : WORD) : BOOLEAN;

     IF Same(Var1,Var2,128) THEN ...

  DESCRIPTION
     This routine compares two untyped variables byte by byte for a 
     explicit length defined by the third parameter.  If the blocks are 
     identical, Same returns TRUE, otherwise Same returns FALSE. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY



.K:2) FILE I/O AND PROTECTION
2) FILE I/O AND PROTECTION

  NAME
.K:ReadOnlyExist - Determine if a file exists.
     ReadOnlyExist - Determine if a file exists.

  SYNOPSIS
     FUNCTION ReadOnlyExist (FileName : STRING) : BOOLEAN;

     IF ReadOnlyExist('RECA.DAT') THEN DoIt;

  DESCRIPTION
     This routine determines if a file exists, in a similar manner to the 
     routine Exist.  The difference is that if a file is set to read only 
     access, the routine Exist will erroneously report the file doesn't 
     exist because Exist uses a Turbo Reset, which assumes DOS read/write 
     access. ReadOnlyExist checks for the existance of a file by doing a 
     DOS level file open with read only access. 

  SEE ALSO
     Exist

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 
     FileMode 

  UPDATE HISTORY



  NAME
.K:ReadOnlyGetAttr - Return the current access mode of a DOS file.
     ReadOnlyGetAttr - Return the current access mode of a DOS file.

  SYNOPSIS
     FUNCTION ReadOnlyGetAttr (FileName : STRING) : BOOLEAN;

     IF ReadOnlyGetAttr('RECA.DAT') THEN Doit;

  DESCRIPTION     
     This routine returns TRUE if the specified file has read only access, 
     and FALSE if the file has read/write access, or the DOS call to get 
     the attribute failed. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:ReadOnlySetAttr - Set the access mode of a DOS file.
     ReadOnlySetAttr - Set the access mode of a DOS file.

  SYNOPSIS
     FUNCTION ReadOnlySetAttr (FileName : STRING ; Flag : BOOLEAN) : INTEGER; 

     IF ReadOnlySetAttr('RECA.DAT',TRUE) <> 0 THEN Doit;

  DESCRIPTION
     This routine sets or clears read only access for the specified file.  
     The routine first gets the current file attributes, so the archive 
     bit, used for file backups, isn't cleared. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS
     If the set attribute fails, the DOS error number is returned in the 
     function result, otherwise zero is returned. 

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:FileOpen - Open a DOS file.
     FileOpen - Open a DOS file.

  SYNOPSIS 
     FUNCTION FileOpen (VAR GenFileDummy;
                            GenFileRecLen   : WORD
                            GenFileOpenMode : WORD) : INTEGER; 

     ASSIGN(MyFile,'MYDATA.DAT');
     IF FileOpen(MyFile,SIZEOF(MyFileBuf),Read_Only) <> 0 THEN DoIt;

  DESCRIPTION 
     This routine 'replaces' the Turbo Reset and Rewrite commands and uses DOS 
     level commands to open a file for processing.  The record length for the 
     file to be processed must be explicitly passed as a parameter, so the 
     Turbo FileRec block can be set up correctly.  This routine will work for 
     any type of Turbo file other than text files.  This routine is handy for 
     a variety of purposes, mainly opening read-only files and/or files of any 
     length.

  SEE ALSO 
     FileAssignAndOpen 

  DEPENDS ON

  DIAGNOSTICS
     If the file open fails, the DOS error number is returned in the 
     function result, otherwise zero is returned. 
     Formatted error message displayed if reclen of 0 passed.

  KNOWN RESTRICTIONS 
     Doesn't work with text files.

  PARTIALLY OBSOLETED BY 
     FileMode 

  UPDATE HISTORY

  

  NAME
.K:FileAssignAndOpen - Assign and Open a DOS file.
     FileAssignAndOpen - Assign and Open a DOS file.

  SYNOPSIS 
     FUNCTION FileAssignAndOpen (    GenFileName     : STRING;
                                 VAR GenFileDummy;
                                     GenFileRecLen   : WORD
                                     GenFileOpenMode : WORD) : BOOLEAN; 

     IF FileAssignAndOpen
       ('MYDATA.DAT',MyFile,SIZEOF(MyFileBuf),Read_Only) THEN DoIt;

  DESCRIPTION
     This routine is identical to FileOpen, except that it works at a slightly 
     higher level.  This routine does the file assign internally, instead of 
     having to complete the assign before invoking the function.  This routine 
     also returns a Boolean value rather than an Integer error code. 

  SEE ALSO 
     FileOpen

  DEPENDS ON

  DIAGNOSTICS
     If the file open fails, the function result is False, otherwise TRUE is 
     returned. 
     Formatted error message displayed if reclen of 0 passed.

  KNOWN RESTRICTIONS 
     Doesn't work with text files.

  PARTIALLY OBSOLETED BY 
     FileMode 

  UPDATE HISTORY



.K:3) TEXT ENCRYPTION
3) TEXT ENCRYPTION

  NAME
.K:EnCrypt - Encrypt a Text String.
     EnCrypt - Encrypt a Text String.

  SYNOPSIS
     FUNCTION EnCrypt (Orig : STRING) : STRING;

     Password := EnCrypt('Shhhh');
 
  DESCRIPTION
     This function provides a quick and dirty way of encrypting text; its 
     primary purpose is for generation of simple passwords. The encryption 
     algorithm is as follows: 
       a) Binary one is added to the ASCII value of the last character in 
          the string.
       b) Binary two is subtracted from the ASCII value of the second to last 
          character in the string. 
       c) Binary three is added to the ASCII value of the third to last 
          character in the string. 
       d) This add/subtract pattern is continued through the first 
          character in the string.
     For the above example the string 'Shhhh' encrypts to 'Xdkfi'.
     Because Encrypt is used primarily for keyboard input of passwords, the 
     encrypted characters must be typable from the keyboard, i.e. in the ASCII 
     range of 33 to 126 ('!' to '~').  Note that the space character (ASCII 
     32) is also not a valid encrypted character because it would split 
     passwords in two.  If a non typable character is generated, the resultant
     function value is set to the null string.  Note that the likelyhood of 
     generating a non typable character increases as the length of the input 
     string increases.  There are currently no plans to await DOD sponsorship 
     of this algorithm. 

  SEE ALSO
     DeCrypt

  DEPENDS ON
     Odd

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     Restrict string to typable characters, see description above. 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:Decrypt - Decrypt a Text String.
     DeCrypt - Decrypt a Text String.

  SYNOPSIS
     FUNCTION DeCrypt (Orig : STRING) : STRING;

     OriginalValue := DeCrypt(Password);
 
  DESCRIPTION
     This function provides a quick and dirty way of decrypting text 
     encrypted by the function Encrypt.  It runs the encryption algorithm 
     backwards, to generate the original value passed to the Encrypt 
     routine.  For the above example the string 'Xdkfi' decrypts to 
     'Shhhh'.

  SEE ALSO
     Encrypt

  DEPENDS ON
     Odd

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     Restrict string to typable characters, see Encrypt.

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY



.K:4) GENERAL PURPOSE VIDEO
4) GENERAL PURPOSE VIDEO

  NAME
.K:GenBeep - Sounds the PC speaker.
     GenBeep - Sounds the PC speaker.

  SYNOPSIS
     PROCEDURE GenBeep (Frequency, Duration : WORD);

     GenBeep (0,0);        - produces the default beep;
     GenBeep (1600, 20);   - produces high pitch shorter beep;

  DESCRIPTION
     GenBeep will provide a default beep if a zero is passed as both 
     parameters. If a different frequency is desired only the frequency needs 
     to be specified, with a zero for the duration.  The same is true for 
     duration. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:ColorMonitorInstalled - Test if a color monitor is installed.
     ColorMonitorInstalled - Test if a color monitor is installed.

  SYNOPSIS
     FUNCTION  ColorMonitorInstalled : BOOLEAN;

     IF ColorMonitorInstalled THEN TextColor (Blue);

  DESCRIPTION
     The function ColorMonitorInstalled will return a true value if the
     display card is set for color mode.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     ColorMonitorInstalled will only work for IBM cards.  It will work for
     a Hercules card if the base of the card is set for $b000 - Monochrome.
     (The hercules card can be set several ways.)  The procedure is
     actually misnamed since there is no software command to check that
     the monitor is actually color!  (You can hook a b/w monitor to a color
     card.)

  PARTIALLY OBSOLETED BY
     DetectGraph 

  UPDATE HISTORY



  NAME
.K:Cursor - Turns the cursor on or off.
     Cursor - Turns the cursor on or off.

  SYNOPSIS
     PROCEDURE Cursor (Visible : BOOLEAN);

     Cursor (off);
     Cursor (on);

  DESCRIPTION
     If the parameter is false, then the cursor will be turned off, if the
     parameter is true then the cursor will be turned back on.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     This routine may not work with all manufactures of the display card.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:CursorInsertSize - Changes to cursor to a fat line.
      CursorInsertSize - Changes to cursor to a fat line.


  SYNOPSIS
      PROCEDURE CursorInsertSize;

      CursorInsertSize;

  DESCRIPTION
      This routine changes the cursor to a fat line.  This is typically used 
      in screen oriented programs to select insert versus overwrite mode.

  SEE ALSO
      CursorOverwriteMode

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:CursorOverwriteSize - Changes the cursor to a normal line.
      CursorOverwriteSize - Changes the cursor to a normal line.

  SYNOPSIS
      PROCEDURE CursorOverwriteSize;

      CursorOverwriteSize;

  DESCRIPTION
      Changes the cursor to the normal size underline.  This is typically used 
      in screen oriented programs to select overwrite versus insert mode.

  SEE ALSO
      CursorInsertMode

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:ScrBackCursorColor - Return the background color of cursor.
     ScrBackCursorColor - Return the background color of cursor.

  SYNOPSIS
     FUNCTION  ScrBackCursorColor : INTEGER;

     FColor := ScrBackCursorColor;

  DESCRIPTION
     ScrBackCursorColor returns the color value (0 - 7) of the on screen 
     cursor.  

  SEE ALSO 
     ScrForeCursorColor.

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:ScrForeCursorColor - Return the foreground color of cursor.
     ScrForeCursorColor - Return the foreground color of cursor.

  SYNOPSIS
     FUNCTION  ScrForeCursorColor : WORD;

     FColor := ScrForeCursorColor;

  DESCRIPTION
     ScrForeCursorColor returns the color value (0 - 15) of the on screen 
     cursor.  

  SEE ALSO
     ScrBackCursorColor

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



.K:5) VIDEO MESSAGES
5) VIDEO MESSAGES

  NAME
.K:Pause - Debugging aid whichs waits for a key to be pressed.
     Pause - Debugging aid whichs waits for a key to be pressed.

  SYNOPSIS
     PROCEDURE Pause;

     WRITELN ('Starting calculations');
     Pause;

  DESCRIPTION
     This routine will print a flashing character in the lower left corner
     of the screen and wait for a key to be pressed.  Once a key has been
     pressed the flashing character will be removed, and the character that
     was there originally will be restored.  The routine works with either
     the monochrome or the color monitor.    

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     If Sidekick is invoked while on a screen with flashing characters, the 
     characters will not flash upon exit of sidekick.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:Wait - Displays a flashing WAIT message in the lower right of screen.
     Wait - Displays a flashing WAIT message in the lower right of screen.

  SYNOPSIS
     PROCEDURE Wait (DispWait : BOOLEAN);

     Wait (On);
     Wait (Off);

  DESCRIPTION
     When called with a TRUE value, or On, the contents on the last four 
     spaces of the screen are saved and a flashing WAIT message appears.  When 
     called with the value FALSE, or Off, the WAIT message is removed and the 
     orginal contents restored. The routine works with either the monochrome or 
     the color monitor.    

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     If Sidekick is invoked while on a screen with flashing characters, the 
     characters will not flash upon exit of sidekick.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:ScrErrMsg - Prints an error message on the 25th line.
     ScrErrMsg - Prints an error message on the 25th line.

  SYNOPSIS
     PROCEDURE ScrErrMsg (Message : MaxStr);

     ScrErrMsg ('You must enter a value between 1 and 12');

  DESCRIPTION
     This procedure will print the string message (the first 64 characters 
     only) on the 25th line of the screen.  It will then sound the beep, 
     and then print '  Press <Enter> '.  It then waits for the user to press 
     the enter key after which the 25th line is cleared and control 
     returns to the program.  

     The message is displayed in the D_ErrColor, which has a default color
     of light (bright) red.

  SEE ALSO
     ScrStatMsg

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:ScrStatMsg - Prints a status message on the 25th line.
     ScrStatMsg - Prints a status message on the 25th line.

  SYNOPSIS
     PROCEDURE ScrStatMsg (Message : STRING);

     ScrStatMsg ('Record deleted, file will be updated.');

  DESCRIPTION
     This procedure prints out the Message string on the 25th line of the 
     screen.  Only the first 76 characters of the string are printed.  
     There is no delay and no bell.  Control is returned to the program and 
     the message remains on the 25th line.

     The message is displayed in the D_StatColor which has a default color 
     of green.

  SEE ALSO
     ScrErrMsg

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:ScrYouAreSure - Asks user to verify operation.
     ScrYouAreSure - Asks user to verify operation.

  SYNOPSIS
     FUNCTION ScrYouAreSure (Message : STRING) : BOOLEAN;
 
     IF ScrYouAreSure ('Delete this record') THEN Delete;

  DESCRIPTION
     This procedure prints the message at the bottom of the current screen 
     and waits for a key press.  The message is inserted into the text:
     'Hit any key to '+message+' or hit <Enter> to CANCEL.'  A message of 
     null string will cause the message to be replaced with the word 
     'CONTINUE'.  If the user presses the ESC key then the function returns 
     the value FALSE, while any other key returns the value TRUE. 

     The message is displayed in the D_StatColor which has a default color of 
     green. 

  SEE ALSO
     ScrYN

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     If your message is longer than 60 characters, part of it will be lost 
     off the right side of the screen.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:ScrYN - Asks user to verify operation
     ScrYN - Asks user to verify operation

  SYNOPSIS
     FUNCTION ScrYN (Message : STRING) : BOOLEAN;
 
     IF ScrYN ('Delete this record') THEN Delete;

  DESCRIPTION
     This procedure prints the message at the bottom of the current screen 
     and waits for a key press.  The message is inserted into the text: 
     Message + ' (Y/N)? '  A message of null string will cause the message 
     to be replaced with the words 'Are You Sure'.  If the user presses the 
     'N' or 'n' key then the function returns the value FALSE, if the user 
     pressed the 'Y' or 'y' key then the function returns the value TRUE.   
     Any other keystroke will be ignored.

     The message is displayed in the D_StatColor which has a default color of 
     green.

  SEE ALSO
     ScrYouAreSure

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     If your message is longer than 66 characters, part of it will be lost 
     off the right side of the screen.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

.K:6) DISK AND MEMORY SIZES
6) DISK AND MEMORY SIZES

  NAME
.K:BytesOnDiskFree - Calculate number of bytes remaining on a disk drive. 
     BytesOnDiskFree - Calculate number of bytes remaining on a disk drive. 

  SYNOPSIS
     FUNCTION BytesOnDiskFree (Drive : CHAR) : LONGINT;

     WRITELN(BytesOnDiskFree('C'));

  DESCRIPTION
     This routine returns the number of bytes remaining on the specified 
     drive, just the DOS CHKDSK command.  If the parameter supplied is a 
     blank, the default drive is used. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS
     If the drive specified isn't in the range of A to Z, or blank, then 
     this routine returns -1. 

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY
     DiskFree

  UPDATE HISTORY

  

  NAME
.K:FreeDOSMem  - Returns the amount of currently unused RAM memory.
     FreeDOSMem  - Returns the amount of currently unused RAM memory.

  SYNOPSIS
     FUNCTION FreeDOSMem  : LONGINT;

     WRITELN ('You have this much RAM free: ', FreeDOSMem);

  DESCRIPTION
     FreeDOSMem returns the amount of RAM memory installed currently
     unsed.  This avoids a length invokation of CHKDSK to return this 
     information.  This routine is handy for checking how much space is left 
     before spawning a child process.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:SizeOfMem  - Returns the amount of RAM memory installed.
     SizeOfMem  - Returns the amount of RAM memory installed.

  SYNOPSIS
     FUNCTION SizeOfMem  : LONGINT;

     WRITELN ('You have Installed: ', SizeOfMem);

  DESCRIPTION
     SizeOfMem returns the amount of RAM memory installed using the
     BIOS call to report this information.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
      This routine may not work if your DIP switchs are set improperly
      (like they are when you are running a more-ram-than-switches program
      on the old style PC's)

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:StackAvail - Returns the amount of stack space remaining in bytes.
     StackAvail - Returns the amount of stack space remaining in bytes.


  SYNOPSIS
     FUNCTION StackAvail : WORD;

     WRITELN ('Stack left: StackAvail);

  DESCRIPTION
     StackAvail reports the amount of free stack space remaining.  The
     maximum stack space is 64K.

  SEE ALSO

  DEPENDS ON
     LongAddr

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



.K:7) INSTRUCTION TIMING
7) INSTRUCTION TIMING

  NAME
.K:TimeElapsed - Returns the number of seconds elapsed since genesis.
     TimeElapsed - Returns the number of seconds elapsed since genesis.

  SYNOPSIS
     FUNCTION TimeElapsed : REAL;

     StartTime := TimeElapsed;

  DESCRIPTION
     This routine reads the low level DOS timer of seconds elapsed since 
     1/1/80.  It returns a real number value in seconds with a decimal 
     portion for centiseconds.  Since the internal clock tick is 18.2 times 
     a second, there is no loss of precision in the value returned.  
     TimeElapsed is used primarily for setting up timing tests. 

  SEE ALSO

  DEPENDS ON
 
  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:TimeTotal - Returns the value of a timing test as a formatted string.
     TimeTotal - Returns the value of a timing test as a formatted string.


  SYNOPSIS
     FUNCTION TimeTotal (StartTime, StopTime : REAL) : STRING;

     StartTime := TimeElapsed;
     FOR Ctr := 1 TO MAXINT DO ...
     StopTime := TimeElapsed;

     WRITELN(TimeTotal(StartTime,StopTime));


  DESCRIPTION
     This routine takes two real numbers and subtracts them to return a 
     timing loop value. 

  SEE ALSO
     TimeElapsed

  DEPENDS ON
     Strip
     R2S

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY



.K:8) GENERAL PURPOSE FILE
8) GENERAL PURPOSE FILE

  NAME
.K:Exist - Test if a file exists (R/W access).
     Exist - Test if a file exists (R/W access).

  SYNOPSIS
     FUNCTION Exist (FileName: STRING) : BOOLEAN;

     IF NOT Exist ('\COMMAND.COM') THEN HALT;

  DESCRIPTION
     This is the 'classic' exist function found as found in various Turbo 
     Manuals.

  SEE ALSO
     ReadOnlyExist

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     Assumes Read/Write access to the file; if the file is marked Read Only, 
     this routine will incorrectly report the file as non-existant.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:LinesInFile - Returns the number of lines in a text file.
     LinesInFile - Returns the number of lines in a text file.

  SYNOPSIS
     FUNCTION LinesInFile (FileName : STRING) : INTEGER;

     WRITELN (LinesInFile ('YourFile.TXT'));

  DESCRIPTION
     Returns an integer number of lines in a text file.  The text file is 
     opened for reading (RESET), the entire file is scanned and the 
     number of lines within the file is returned. 

  SEE ALSO

  DEPENDS ON
     Exist

  DIAGNOSTICS
     If the file does not exist, then the number of lines returned 
     will be -1. 

  KNOWN RESTRICTIONS
     This routine will report read-only files as non-existant.

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:GetFileDateAndTimeString - Get file directory date and time.
     GetFileDateAndTimeString - Get file directory date and time.

  SYNOPSIS
     FUNCTION GetFileDateAndTimeString (FileName : STRING) : STRING;

     WRITELN (GetFileDateAndTimeString ('\COMMAND.COM'));

  DESCRIPTION
     Returns a string with the date and time assigned by DOS to the file
     passed as the parameter.  Full path and file names are allowed.  The file 
     does not have to open.

  SEE ALSO  
     GetFileDateAndTimeLongInt

  DEPENDS ON
     I2S

  DIAGNOSTICS
     If the name passed does not exist, an error message is passed back
     instead of the date and time.

  KNOWN RESTRICTIONS
     This routine will report read-only files as non-existant.

  PARTIALLY OBSOLETED BY
     GetFTime and UnPackTime

  UPDATE HISTORY



  NAME
.K:GetFileDateAndTimeLongInt - Get file directory date and time.
     GetFileDateAndTimeLongInt - Get file directory date and time.

  SYNOPSIS
     FUNCTION GetFileDateAndTimeLongInt (FileName : STRING) : LONGINT;

     IF GetFileDateAndTimeLongInt ('C:\PROGRAM.EXE') > 
        GetFileDateAndTimeLongInt ('D:\PROGRAM.EXE') THEN ... 

  DESCRIPTION
     Returns a long integer with the date and time assigned by DOS to the file 
     passed as the parameter.  Full path and file names are allowed.  The 
     numeric value returned by this routine make timestamp comparisons between 
     files easy.  The file does not have to be open.

  SEE ALSO  
     GetFileDateAndTimeString

  DEPENDS ON

  DIAGNOSTICS
     If the name passed does not exist, -1 is returned.

  KNOWN RESTRICTIONS
     This routine will report read-only files as non-existant.

  PARTIALLY OBSOLETED BY
     GetFTime 

  UPDATE HISTORY



.K:9) MATH
9) MATH

  NAME
.K:Power - Raise a Real number to a Real exponent.
     Power - Raise a Real number to a Real exponent.
.K:Log - Return the base 10 log of a real number.
     Log - Return the base 10 log of a real number.

  SYNOPSIS
     FUNCTION Power (X, Y : REAL) : REAL;
     FUNCTION Log (X : REAL) : REAL;

     WRITELN (Power (2,3):3);
     WRITELN (Log (100));

  DESCRIPTION
     Power will raise the first parameter to the power of the second.  In
     the above example 2 raised 3 is 8.

     Log returns the log base 10 of the number. In the above example, the
     log base 10 of 100 is 2.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     These routines will not work with the turbo BCD compiler since the BCD

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

.K:10) DOS AND ENVIRONMENT
10) DOS AND ENVIRONMENT

  NAME
.K:DOSVersionR - Returns the DOS version number.
     DOSVersionR - Returns the DOS version number.

  SYNOPSIS
     FUNCTION DOSVersionR : REAL;

     IF DOSVersionR < 3.1 THEN HALT;

  DESCRIPTION
     Returns a real number containing the DOS version number.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
    If the DOS version number is less than DOS 2.0, the routine will return 
    DOS 1.1 even if the version is DOS 1.0 

  PARTIALLY OBSOLETED BY
    DosVersion

  UPDATE HISTORY

  

  NAME
.K:WhoAmI - Return the name of the currently executing program
     WhoAmI - Return the name of the currently executing program

  SYNOPSIS
     FUNCTION WhoAmI : STRING;

     WRITELN(WhoAmI)

  DESCRIPTION
     This routine returns the full path name of the currently executing 
     program.  If this program has been chained, the immediate parent, as 
     opposed to the original parent, is returned.

  SEE ALSO

  DEPENDS ON
     DosVersionR, DOS 3.X and higher.
 
  DIAGNOSTICS
     This routine will return the null string if the currently used version 
     of DOS is lower than 3.X. 

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 
     ParamStr(0) 

  UPDATE HISTORY

  

  NAME
.K:GetEnvString - Return the value of an environment variable.
     GetEnvString - Return the value of an environment variable.

  SYNOPSIS
     FUNCTION GenEnvString (EnvVar : STRING) : STRING;

     WRITELN(GenEnvString('PATH = ');
 
  DESCRIPTION
     This function returns the value of the specified environment string.  The 
     equal sign must be included.  The parameter need not be upper case, or 
     have blanks striped out.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 
     EnvStr - Actually totally obsolete but GetEnvString is such a 'nice' 
     piece of code it remains for at least eductaional purposes. 

  UPDATE HISTORY

  

.K:11) VERSION CONTROL
11) VERSION CONTROL

  NAME
.K:GetDMLVersion - Get individual module version number.
     GetDMLVersion - Get individual module version number.

  SYNOPSIS
     FUNCTION GetDMLVersion(Module : WORD) : STRING;

     WRITELN(GetDMLVersion(1));

  DESCRIPTION
     Returns a string of version number of an individual DML UNIT.  The string 
     is formatted as a real number 'xx.xx'.  The module numbers are:
        0) DML (overall library)
        1) GEN
        2) NUM
        3) STRG
        4) KBD
     Any parameter value larger than 4 returns the overall version number.

  SEE ALSO
     GetDMLVersions 

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY



  NAME
.K:GetDMLVersions - Get all module version numbers.
     GetDMLVersions - Get all module version numbers.

  SYNOPSIS
     FUNCTION GetDMLVersions : STRING;

     WRITELN(GetDMLVersions);

  DESCRIPTION
     Returns a string of all the version numbers for the DML UNITs.  
     The module versions returned are for:
        0) DML (overall library)
        1) GEN
        2) NUM
        3) STRG
        4) KBD

  SEE ALSO
     GetDMLVersion

  DEPENDS ON
     GetDMLVersion

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY


```
{% endraw %}

## KBD.DOC

{% raw %}
```
.KF:kbd.toc
.R:E
.W:96
.H:...DML KBD UNIT Version 1.00...
.H:...$$Day Mon D, YEAR$$  $$Z:MI A.M.$$     Page $$$...
.H:
.F:
.F:... Copyright (c) 1989, by DML Software Inc. ...
.X:8

.K:KEYBOARD ROUTINES - CHANGES HIGHLIGHTS (VERSION 1.00)
KEYBOARD ROUTINES - CHANGES HIGHLIGHTS (VERSION 1.00)

1/1/89 Initial Release



.K:1) GENERAL PURPOSE KEYBOARD
1) GENERAL PURPOSE KEYBOARD

  NAME
.K:KbdGetStatus - Gets the Keyboard status flags.
    KbdGetStatus - Gets the Keyboard status flags.

  SYNOPSIS
    FUNCTION KbdGetStatus : WORD;

    WRITELN('All the keyboard flags: ',W2S(KbdGetStatus,'HHHH'));
     
  DESCRIPTION
     This function returns the keyboard shift status in the record of
     booleans describing each status.  The record structure is defined in
     root.xxx. The value of the function is an integer, the 16 bits of
     which describe which status is TRUE.  The keyboard status is returned
     by accessing the two key-board flag bytes within the BIOS
     communication area. The possible bit settings are:

             Bit Position     Description
             ------------     --------------------------
                  15          Insert state is active
                  14          Caps Lock key toggled
                  13          Num Lock key toggled
                  12          Scroll Lock key toggled
                  11          Alt shift key depressed
                  10          Ctrl shift depressed
                  09          Left shift key depressed
                  08          Right shift depressed
                  07          Ins key depressed
                  06          Caps Lock key depressed
                  05          Num Lock key depressed
                  04          Scroll Lock depressed
                  03          Suspend state toggled
                  02          SysReq depressed & held (AT only)
                  01          Not Used
                  00          Not Used

  SEE ALSO
    KbdInsModeStatus, KbdCapsLockStatus, KbdNumLockStatus,
    KbdScrollLockStatus

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdSetInsMode - Sets the Insert Mode toggle.
     KbdSetInsMode - Sets the Insert Mode toggle.

  SYNOPSIS
     PROCEDURE KbdSetInsMode (InsMode : BOOLEAN);

     KbdSetInsMode (ON);

  DESCRIPTION
     Two Boolean constants are defined in GEN: ON = TRUE and OFF = FALSE.  This 
     routine is the equivalent of pressing the key manually on the keyboard. 

  SEE ALSO
     KbdInsModeStatus

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdSetCapsLock - Sets the Caps Lock toggle.
     KbdSetCapsLock - Sets the Caps Lock toggle.

  SYNOPSIS
     PROCEDURE KbdSetCapsLock (CapsLock : BOOLEAN);

     KbdSetCapsLock (ON);

  DESCRIPTION
     Two Boolean constants are defined in GEN: ON = TRUE and OFF = FALSE.  This 
     routine is the equivalent of pressing the key manually on the keyboard. 

  SEE ALSO
     KbdCapsLockStatus

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdSetNumLock - Sets the Number Lock toggle.
     KbdSetNumLock - Sets the Number Lock toggle.

  SYNOPSIS
     PROCEDURE KbdSetNumLock (NumLock : BOOLEAN);

     KbdSetNumLock (OFF);

  DESCRIPTION
     Two Boolean constants are defined in GEN: ON = TRUE and OFF = FALSE.  This 
     routine is the equivalent of pressing the key manually on the keyboard. 

  SEE ALSO
     KbdNumLockStatus

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdSetScrollLock - Sets the Scroll Lock toggle.
     KbdSetScrollLock - Sets the Scroll Lock toggle.

  SYNOPSIS
     PROCEDURE KbdSetScrollLock (ScrollLock : BOOLEAN);

     KbdSetScrollLock (OFF);

  DESCRIPTION
     Two Boolean constants are defined in GEN: ON = TRUE and OFF = FALSE.  This 
     routine is the equivalent of pressing the key manually on the keyboard. 

  SEE ALSO
    KbdScrollLockStatus

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdInsModeStatus - Returns the state of the Insert Mode toggle.
     KbdInsModeStatus - Returns the state of the Insert Mode toggle.

  SYNOPSIS
     FUNCTION KbdInsModeStatus : BOOLEAN;

     If KbdInsModeStatus THEN PrintMessage;

  DESCRIPTION
     KbdInsModeStatus will have the value TRUE if the Insert toggle is on.

  SEE ALSO
     KbdSetInsMode

  DEPENDS ON
     KbdGetStatus

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdCapsLockStatus - Returns the state of the keyboard Caps Lock flag.
    KbdCapsLockStatus - Returns the state of the keyboard Caps Lock flag.

  SYNOPSIS
    FUNCTION KbdCapsLockStatus : BOOLEAN;

    IF KbdCapsLockStatus THEN PrintMessage;

  DESCRIPTION
    KbdCapsLockStatus will have the value TRUE if the Caps Lock flag is on.

  SEE ALSO
    KbdSetCapsLock

  DEPENDS ON
    KbdGetStatus

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdNumLockStatus - Returns the state of the Number lock flag.
     KbdNumLockStatus - Returns the state of the Number lock flag.

  SYNOPSIS
     FUNCTION KbdNumLockStatus : BOOLEAN;

     IF KbdNumLockStatus THEN PrintMessage;


  DESCRIPTION
     KbdNumLockStatus will have the value TRUE if the Number Lock flag is on.

  SEE ALSO
     KbdSetNumLock

  DEPENDS ON
     KbdGetStatus

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdScrollLockStatus - Returns the state of the Scroll lock flag.
     KbdScrollLockStatus - Returns the state of the Scroll lock flag.

  SYNOPSIS
     FUNCTION KbdScrollLockStatus : BOOLEAN;

     If KbdScrollLockStatus THEN PrintMessage;

  DESCRIPTION
     KbdScrollLockStatus will have the value TRUE if Scroll lock is on.

  SEE ALSO
     KbdSetScrollLock

  DEPENDS ON
     KbdGetStatus

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

.K:2) KEYBOARD BUFFER
2) KEYBOARD BUFFER

  NAME
.K:KbdClear - Clears the keyboard buffer.
    KbdClear - Clears the keyboard buffer.

  SYNOPSIS
    PROCEDURE KbdClear;

    REPEAT
      UNTIL KeyPressed;
    KbdClear;

  DESCRIPTION
    This procedure flushes the keyboard buffer, that is, all remaining
    keystrokes are removed from the buffer.  It does no damage to flush an
    empty buffer.  The buffer is flushed by making a call to DOS function 0C
    (hex).

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdNumValuesWaiting - Returns the number of keys waiting in the keyboard.
     KbdNumValuesWaiting - Returns the number of keys waiting in the keyboard
                           buffer.

  SYNOPSIS
     FUNCTION KbdNumValuesWaiting : INTEGER;

     IF KbdNumValuesWaiting > 10 THEN ReadKeyboard;

  DESCRIPTION
     The BIOS does not support this function.  The data locations for the head
     and tail pointers for the keyboard buffer are known, and the number of keys
     in the buffer is calculated from them.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:KbdInputValue - Waits for and returns "scan code" of a key pressed.
    KbdInputValue - Waits for and returns "scan code" of a key pressed.

  SYNOPSIS
    FUNCTION KbdInputValue : WORD;
    VAR
      KbdLastChar : CHAR;

    CASE KbdInputValue OF
      K_Esc    : Abort;
      'A'..'Z' : WRITELN ('You pressed: ', KbdLastChar);
      END;

  DESCRIPTION
    KbdInputValue will wait for a key to be pressed.  If you don't want to
    wait it is suggested that you use KbdKeyWaiting in a repeat loop before
    you call this procedure.  The value returned will simply be the ASCII
    value unless a special key (Function keys, cursor, etc) was pressed in
    which case the returned value will be 256 plus the IBM extended code.
    Included in this file are constant values for all the unique special
    keys allowed by the BIOS.  In addition, there is a special initialized
    constant called KbdLastChar which contains the last normal key pressed.
    If the last key pressed was a special key then KbdLastChar will contain
    the value zero.

  SEE ALSO
    KbdKeyWaiting

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY
     ReadKey

  UPDATE HISTORY

  

  NAME
.K:KbdKeyWaiting - Returns TRUE if a key is in the keyboard buffer.
     KbdKeyWaiting - Returns TRUE if a key is in the keyboard buffer.

  SYNOPSIS
     FUNCTION KbdKeyWaiting : BOOLEAN;

     REPEAT
       ProcedureCalls;
       UNTIL KbdKeyWaiting;

  DESCRIPTION
      This routine uses the BIOS function call to determine if there are any
      keys waiting in the buffer.  It is very similar to the Turbo function
      KeyPressed.  

  SEE ALSO
     KbdInputValue

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS 

  PARTIALLY OBSOLETED BY
     KeyPressed

  UPDATE HISTORY




```
{% endraw %}

## NUM.DOC

{% raw %}
```
.KF:Num.toc
.R:E
.W:96
.H:...DML NUM UNIT Version 1.00...
.H:...$$Day Mon D, YEAR$$  $$Z:MI A.M.$$     Page $$$...
.H:
.F:
.F:... Copyright (c) 1989, by DML Software Inc. ...
.X:8


.K:NUMERIC ROUTINES - CHANGES HIGHLIGHTS (VERSION 1.00)
NUMERIC ROUTINES - CHANGES HIGHLIGHTS  (VERSION 1.00)

1/1/89 Initial Release

  

.K:1) GENERAL NUMERIC FORMATTING AND CONVERSION
1) GENERAL NUMERIC FORMATTING AND CONVERSION

  NAME
.K:B2S - Boolean to String Conversion.
     B2S - Boolean to String Conversion.

  SYNOPSIS
     FUNCTION B2S (Flag : BOOLEAN) : STRING;

     WRITELN (B2S (123 = 123));

  DESCRIPTION
     Returns a string of TRUE or FALSE depending on th value of the Boolean 
     parameter.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:I2S - Integer to String Conversion
     I2S - Integer to String Conversion
.K:W2S - Word to String Conversion
     I2S - Word to String Conversion
.K:L2S - LongInt to String Conversion
     L2S - LongInt to String Conversion

  SYNOPSIS
     FUNCTION I2S (Num : INTEGER; Mask : STRING) : STRING;
     FUNCTION W2S (Num : WORD;    Mask : STRING) : STRING;
     FUNCTION L2S (Num : LONGINT; Mask : STRING) : STRING;

     WRITELN ('The meaning of everything: ', I2S (42, '##'));
     WRITELN ('Bit fields in hex: ', W2S (AX, 'HHHH'));
     WRITELN ('Big number: ', L2S (-12345678, '-###,###,##@'));

  DESCRIPTION
     Returns a string of the number passed.  The following characters can
     be used in the mask string.  Remember that the case of the character
     is important and that 'H' <> 'h'.

  sp   - The space character will be output in this position.

         # ###.## : 1234.56 = '1 234.56', 50.00 = '   50   ', 0 = '        '

  #    - Digit base 10, leading and trailing zero digits are blank.

         # ###.## : 1234.56 = '1 234.56', 50.00 = '   50   ', 0 = '        '

  H    - Digit base 16, leading and trailing zero digits are blank. (Int only)

         HHHH     : 43981   = 'ABCD'    , 50    = '  32'    , 0 = '    '

  B    - NOT IMPLEMENTED  (for binary)

         BBBB     : 10      = '1010'    ,  2    = '  10'   , 0 - '    '

  @    - Digit, from position to decimal point, zero digits are '0'.

         # #@#.#@ : 1234.56 = '1 234.56', 50.00 = '   50.00', 0 = '   00.00'

  *    - Digit, from position to decimal point, zero digits are '*'.

         # #*#.#* : 1234.56 = '1 234.56', 50.00 = '   50***', 0 = '   **.**'

  $    - Space before number is a dollar sign. NOT a digit position.
         Can also follow the number.

         $####.## : 1234.56 = '$1234.56', 50.00 = '  $50   ', 0 = '        '


  -    - If negative, space before number is '-', if positive then ' '.
         Can also follow the number.

         -####.## : 1234.56 = ' 1234.56', -5.00 = '   -5   ', 0 = '        '

  +    - If negative, space before number is '-', if positive then '+'.
         Can also follow the number.  The + will not be displayed if no
         digits in the number are displayed.

         +####.## : 1234.56 = '+1234.56', -5.00 = '   -5   ', 0 = '        '

  ( )  - If negative, parenthesis around number, else blanks around.

         (####.#) : 1234.5  = ' 1234.5 ', -5.00 = '   (5  )', 0 = '        '


  ,    - Thousands separator (comma).
  .    - Decimal   separator (period).

         #,###.## : 1234.56 = '1,234.56', 50.00 = '   50   ', 0 = '        '

  SEE ALSO
     S2I - String to Integer

  DEPENDS ON

  DIAGNOSTICS
     The mask must have the proper characters present or the resulting
     string will be invalid.  If the Mask is too small to hold the number
     all stars '*' will be returned. If the number is negative and a sign
     character has not been used then the result will also be all stars.
     If the mask is inconsistant, and cannot be decoded, then all questions
     '?' will be returned.

  KNOWN RESTRICTIONS
     THERE IS CURRENTLY NO CHECKING DONE OF THE MASK.  This means that a
     mask of $#$#$# is perfectly valid and will return a dollar sign
     between every digit.

     Will float either the sign (-,+), or the dollar sign (+), but will only 
     float both if the minus sign is used: (-$ or $-)

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:R2S - Real to String Conversion
     R2S - Real to String Conversion
.K:D2S - Double to String Conversion
     D2S - Double to String Conversion

  SYNOPSIS
     FUNCTION R2S (Num : REAL;   Mask : STRING) : STRING;
     FUNCTION D2S (Num : DOUBLE; Mask : STRING) : STRING;

     WRITELN ('Total Due: ', R2S (4356.50, '$(#####.##)');
     WRITELN ('Miles to Neptune: ', D2S (123456789.4356, '###,###,##,##@.##)');

  DESCRIPTION
     Returns a string of the real number passed.  The number of decimal
     places is calculated from the mask.  Therefore, the mask "##.###"
     specifies a field length of 6 and 3 decimal places.  The decimal
     places are rounded, but a .5 is rounded DOWN.  This is a function of
     the Turbo routine STR, and if you want to round up, you'll have to add
     some small fraction to your number.  Also remember that if you specify
     more than 24 decimal positions the result will be in scientific
     notation which is curently not supported very well.  See I2S for more
     info on the mask parameter, and the characters within the mask.

  SEE ALSO
     I2S - Integer to String, S2R - String to Real

  DEPENDS ON

  DIAGNOSTICS
     The mask must have the proper characters present or the resulting
     string will be invalid.  If the Mask is too small to hold the number
     all stars '*' will be returned. If the number is negative and a sign
     character has not been used then the result will also be all stars. If
     the mask is inconsistant, and cannot be decoded, then all questions
     '?' will be returned.

  KNOWN RESTRICTIONS
     THERE IS CURRENTLY NO CHECKING DONE OF THE MASK.  This means that a
     mask of $#$#$# is perfectly valid and will return a dollar sign
     between every digit.

     To print a phone number just make the 10 digit number negative and use
     the following mask '(###) ###-####'

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:S2R - String to Real Conversion
     S2R - String to Real Conversion
.K:S2D - String to Double Conversion
     S2D - String to Double Conversion

  SYNOPSIS
     FUNCTION S2R (Source : STRING) : REAL;
     FUNCTION S2D (Source : STRING) : DOUBLE;

     VAR
       Number : REAL:

     BEGIN
       Number := S2R ('$( 1,435.43)');
       WRITELN(S2D('12345.6789');
     END;

  DESCRIPTION
     Converts a string into a real number.  All characters that are not in
     the set ['0'..'9', '.'] are simply ignored.  However, parenthesis and
     minus signs are scanned for (sic) to determine the sign of the number.
     All real numbers are assumed to be base 10.

  SEE ALSO
     R2S - Real to String
     StrNumTest

  DEPENDS ON

  DIAGNOSTICS
     If the string contains no valid digits then the value zero will be 
     returned; test the string first with StrNumTest.  If the string contains 
     more digits than will fit into a real number then a run-time error will 
     occur halting the program. 

     If a conversion error can't be trapped before the string is actually 
     converted with the Turbo VAL proc, the string and the character 
     position of the failed conversion will be displayed, and zero will be 
     returned.

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrNumTest - Test Numeric String.
     StrNumTest - Test Numeric String.

  SYNOPSIS
     FUNCTION StrNumTest (Fld : STRING) : StrNumType;

     VAR
       StrNumOrd : StrNumType
       StrNum    : STRING;

     BEGIN
       StrNumOrd := StrNumTest(StrNum);
       CASE StrNumOrd OF
         StrNonNumeric : WRITELN('String has no numeric characters');
         StrZero       : WRITELN('String has numeric value of zero');
         StrNonZero    : WRITELN('String has numeric value of non zero');
         END;
       WRITELN(S2L(StrNum));
     END;

  DESCRIPTION
     Returns an ordinal value of NonNumeric, Zero, or NonZero for the string 
     parameter supplied.  If no numeric charcters 0..9 are found, then 
     NonNumeric is returned.  Otherwise If the string 'value' is zero, then 
     Zero is returned.  Otherwise NonZero is returned.  Since S2x returns zero 
     for nonnumerics and overflow, as well as legitimate zero, invoking this 
     function first is advised.

  SEE ALSO
     S2I

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY

  UPDATE HISTORY

  

  NAME
.K:S2I - String to Integer Conversion
     S2I - String to Integer Conversion
.K:S2W - String to WordConversion
     S2W - String to Word Conversion
.K:S2L - String to LongInt Conversion
     S2L - String to LongInt Conversion

  SYNOPSIS
     FUNCTION S2I (Source : STRING) : INTEGER;
     FUNCTION S2W (Source : STRING) : WORD;
     FUNCTION S2L (Source : STRING) : LONGINT;

     VAR
       HexNumber : INTEGER;

     BEGIN
       WRITELN(S2I('32,767'));
       HexNumber := S2W ('H4BAD');
       WRITELN(S2L('2,123,456,890'));
     END;

  DESCRIPTION
     Converts a string into an integer value.  If the string has the letter
     H before or after the number, the number is assumed to be in
     hexidecimal format and is coverted as such.  If the string has the
     letter B before or after the number it is assumed to be a binary
     number and converted as such.  All characters which cannot be digits
     are removed from the string. For example, all commas are removed.  In
     a binary number any character which is not a '0' or '1' is removed so
     that the number 1231 will have the binary string value '11' which
     equals 3.  The conversion will also stop after the first '.' found, i.e 
     '123.45' will convert to 123.   

   SEE ALSO
     I2S - Integer to String
     StrNumTest 

  DEPENDS ON

  DIAGNOSTICS
     If no numeric characters are found, or the numeric value overflows the 
     result type, zero will be returned; test the string first with 
     StrNumTest.  
  
     If a conversion error can't be trapped before the string is actually 
     converted with the Turbo VAL proc, the string and the character 
     position of the failed conversion will be displayed, and zero will be 
     returned.

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  


.K:2) DATE AND TIME FORMATTING AND CONVERSION
2) DATE AND TIME FORMATTING AND CONVERSION

  NAME
.K:Numth - Returns a string with the number followed by 'th'
     Numth - Returns a string with the number followed by 'th'

  SYNOPSIS
     FUNCTION NumTh (Num : INTEGER) : MaxStr;

     WRITELN ('Today is the ', Numth (5), ' day of the week.');

  DESCRIPTION
     Converts a decimal integer into a string with a following 'th' as in
     4th, 3rd, 2nd and 1st.  This routine is really for use with the date
     conversions, but it might be useful elsewhere.

  SEE ALSO
     Date2S - Date to String

  DEPENDS ON
     I2S

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:Date2R - Date to Real.
     Date2R - Date to Real.

  SYNOPSIS
     PROCEDURE Date2R (VAR JulSec : REAL; DateTime : T_DateTime);

     VAR
       NumberSeconds : REAL;

     BEGIN
       WITH DateTime DO BEGIN
         Month  := 6;
         Day    := 13;
         Year   := 1986;
         Hour   := 00;
         Minute := 23;
         Second := 44;
         END;

       Date2R (NumberSeconds, DateTime);
       WRITELN ('Seconds from 12/31/1840 midnight: ', NumberSeconds);
     END;

  DESCRIPTION
     Date to Real returns a real number which is the number of "Julian
     seconds" from some known point.  The variable DateTime contains the
     exact time in month day year hours minutes and seconds.  All these are
     multiplied (taking into account leap years properly) to arrive at the
     number of seconds.

  SEE ALSO
     R2Date - Real to Date, Date2S - Date to String, GetDOSDateAndTime

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS
     No testing is done for negative values.
     Leap years AND Leap centuries ARE correctly handled.

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:R2Date - Real to DateTime
     R2Date - Real to DateTime

  SYNOPSIS
     PROCEDURE R2Date (JulSec : REAL; VAR DateTime : T_DateTime);

     VAR
       DT : T_DateTime;

     BEGIN
       R2Date (8904534450.0, DT);
       WRITELN ('Today is: ', Date2S (DT, 'WWWW'));
     END;

  DESCRIPTION
     Converts the number of julian seconds to the DateTime record while
     properly converting leap years and leap centuries.

  SEE ALSO
      Date2S - Date to String, Date2R - Date to Real

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:Date2S - Date to String.
     Date2S - Date to String.

  SYNOPSIS
     FUNCTION Date2S (DateTime : T_DateTime; Mask : MaxStr) : MaxStr;

     WRITELN ('Today is: ', Date2S(DateTime, 'WWW MM/DD/YY hh:mm:ss pm'));

  DESCRIPTION
     Date to string returns a string with the correctly formatted date and
     time.  The mask can consist of any of the following characters:

     (The case of the below is significant!  e.g. 'W' <> 'w')

       WWW   - Three letter weekday name
       WWWW  - Full weekday name, variable length
       MM    - Numeric month
       MMM   - Three letter month name
       MMMM  - Full month name, variable length
       DD    - Numeric day of month, with leading zeros
       DDDD  - Day of month, leading spaces, followed by st, nd, rd or th
       YY    - Year in century, 20 could mean 1820, 1920, 2020, etc
       YYYY  - Full year
       hh    - Hours either in 24 or 12 format
       mm    - Minutes
       ss    - Seconds
       a     - Am indicator - changes to 12 hour format am and pm shown
       p     - Am indicator - changes to 12 hour format only pm is shown
       E     - European date expected, e.g. EYY/MM/DD

  SEE ALSO
     Date2R - Date to Real, R2Date - Real to Date, GetDOSDateAndTime

  DEPENDS ON

  DIAGNOSTICS
     If the mask passed is incorrect, parts of the mask will simply be
     returned unfilled.  If any the integer fields in the DateTime record
     are larger than 99 or less than 0 the mask may have stars in those
     fields indicating overflow.

  KNOWN RESTRICTIONS
     No parsing is performed on the mask.  The mask will not be filled
     properly unless the mask characters are in the correct order.
     Weekdays, Month, Day, Year followed by hour minute and second.  Any of
     them may be left out, but if they are out of order, it won't work.

  PARTIALLY OBSOLETED BY 
     UnPackTime

  UPDATE HISTORY

  

  NAME
.K:GetDOSDateAndTime - Returns both the number of seconds from 12/31/1840
     GetDOSDateAndTime - Returns both the number of seconds from 12/31/1840
                         midnight, and the DateTime record containing the
                         date, time and elapsed times from the DOS system
                         clock.

  SYNOPSIS
     PROCEDURE GetDOSDateAndTime (VAR JulSec   : REAL;
                                  VAR DateTime : T_DateTime);

     VAR
       Seconds     : REAL;
       DOSDateTime : T_DateTime;

     BEGIN
       GetDOSDateAndTime (Seconds, DOSDateTime);
       WRITELN ('Today is: ', D2S (DOSDateTime, 'MM/DD/YY');
     END;

  DESCRIPTION
     Both the number of seconds from 1840 and the DateTime record are
     returned by this routine.  The DOS values are retrieved using DOS
     calls.  This routine also calls both Date2R and R2Date to update the 
     variables in DateTime (the elapsed time vars). 

  SEE ALSO
     Date2R - Date to Real, R2Date - Real to Date, Date2S - Date to String

  DEPENDS ON
     Date2R
     R2Date

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 
     GetDate, GetTime

  UPDATE HISTORY

  

  NAME
.K:SetDOSDateAndTime - Sets both the DOS date and time
     SetDOSDateAndTime - Sets both the DOS date and time.

  SYNOPSIS
     PROCEDURE SetDOSDateAndTime (DateTime : T_DateTime);

     VAR
       JS : REAL;
       DT : T_DateTime;

     BEGIN
       GetDOSDateAndTime (JS, DT);
       DT.Month := 3;
       DT.Day   := 5;
       DT.Year  := 1986;
       SetDOSDateAndTime (DT);
     END;

  DESCRIPTION
     Both the date and time will be reset at the DOS level.  If you only 
     want to reset the date, you should call GetDOSDateAndTime first, 
     otherwise, the time that is set will be random.  Of course, you can 
     set both date and time to the correct values, or you could set the 
     time to zero.

  SEE ALSO
     Date2R, R2Date, Date2S, GetDOSDateAndTime

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 
     SetDate, SetTime

  UPDATE HISTORY




```
{% endraw %}

## README.DOC

{% raw %}
```

        Welcome to release 1.00 of DML Library and XREF program!

        DML is a Turbo Pascal Version 5.0 add in library providing 87
        routines not available in the standard Turbo Libraries.

        XREF is a Turbo Pascal cross-reference listing program that
        provides many features not found in simple text listing programs.

        Full source and documentation (over 100 pages) is provided with the
        Unit and Program Files.  The documentation is in PC-WRITE format.

        The entire software release fits on a single 360K floppy when arced:
        There is a total of 35 files, taking 265K arced or 530K unarced.

        The best place to start exploring the DML library is by perusing 
        DML.DOC and running DMLTEST.EXE 

        The best place to start exploring the XREF program is by perusing
        XREF.DOC and running XREF.EXE

        If you find either DML Unit, or XREF, to be worthwhile utilities,
        a contribution of $10 would be appreciated.  Since the distributed
        software contains full source and documentation, there is no
        further registration process.  The most current version of the
        software will always be available from PC-SIG.  Please send
        contributions, comments, bug reports, or enhancement requests to:


        DML Software, Inc.
        P. O. Box 3583
        Skokie, IL 60076

```
{% endraw %}

## STRG.DOC

{% raw %}
```
.KF:strg.toc
.R:E
.W:96
.H:...DML STRG UNIT Version 1.00...
.H:...$$Day Mon D, YEAR$$  $$Z:MI A.M.$$     Page $$$...
.H:
.F:
.F:... Copyright (c) 1989, by DML Software Inc. ...
.X:8

.K:STRING ROUTINES - CHANGES HIGHLIGHTS (VERSION 1.00)
STRING ROUTINES - CHANGES HIGHLIGHTS  (VERSION 1.00)

1/1/89 Initial Release

  

.K:1) GENERAL PURPOSE STRING
1) GENERAL PURPOSE STRING

  NAME
.K:StrConstants
     StrConstants

  SYNOPSIS
     The constants defined here are for use with the string conversion
     routines.  Each constant has two names: a long, descriptive name and a 
     short name.

  DESCRIPTION

     Constant Name   Alt Name Meanings
     -------------   -------- ------------------------------------------------
     S_IgnoreQuoted     (S_I) Do not process characters within quotes (' or ")
     S_AllSpaces        (S_A) Strip all spaces and tabs
     S_Leading          (S_L) Strip all leading spaces and tabs
     S_Trailing         (S_T) Strip all trailing spaces and tabs
     S_ReduceToOneSpace (S_R) Reduce all spaces and tabs to one space
     S_ToUpper          (S_U) Convert lower case letters to upper case
     S_ToLower          (S_D) Convert upper case letters to lower case

  SEE ALSO
     Strip, StrCase

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:RJS - Right Justify String
     RJS - Right Justify String

  SYNOPSIS
     FUNCTION RJS (Source: STRING; Size : BYTE) : STRING;

     WRITELN (RJS ('Right', 40));


  DESCRIPTION
     Returns a string preceeded by enough spaces to pad the result to the
     size parameter.

  SEE ALSO
     CJS - Center Justify String, LJS - Left Justify String

  DEPENDS ON

  DIAGNOSTICS
     If the length of the source string is longer than the Size parameter a
     "^" will be added to the result indicating that the field has
     overflowed.

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:LJS - Left Justify String
     LJS - Left Justify String

  SYNOPSIS
     FUNCTION LJS (Source : STRING; Size : BYTE) : STRING;

     WRITELN (LJS ('Left', 40));

  DESCRIPTION
     Returns the Source string followed by spaces to pad the string to the
     Size parameter.

  SEE ALSO
     CJS - Center Justify String, RJS - Right Justify String

  DEPENDS ON

  DIAGNOSTICS
     If the Source string is longer than the Size parameter a "^" character
     will be returned indicating that the field has overflowed.

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:CJS - Center Justify String
     CJS - Center Justify String

  SYNOPSIS
     FUNCTION CJS (Source: STRING; Size : BYTE) : STRING;

     WRITELN (CJS ('Hello', 80));

  DESCRIPTION
     Places the Source string in the center of a string Size characters
     long.

  SEE ALSO
     RJS - Right Justify String, LJS - Left Justify String

  DEPENDS ON

  DIAGNOSTICS
     If the Source string is longer than the Size variable, as much of the
     source will be returned with a "^" character indicating field
     overflow.

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:Strip - Removes blanks and tabs from a string.
     Strip - Removes blanks and tabs from a string.

  SYNOPSIS
     FUNCTION Strip (Source : STRING; Code : BYTE) : STRING;

     WRITELN ('>'+Strip ('   Hello  this is    nice.   '),S_AllSpaces)+'<');
     displays: >Hellothisisnice.<

     WRITELN ('>'+Strip ('   Hello  this is    nice.   '),S_Leading)+'<');
     displays: >Hello  this is    nice.   <

     WRITELN ('>'+Strip ('   Hello  this is    nice.   '),
                                                  S_Leading+S_Trailing)+'<');
     displays: >Hello  this is    nice.<

     WRITELN ('>'+Strip ('   Hello  this is    nice.   '),
                                                  S_ReduceToOneSpace+'<');
     displays:  > Hello this is nice. <

     To remove the leading and trailing spaces from the last example, you
     must combine S_ReduceToOneSpace with S_Leading and S_Trailing.

  DESCRIPTION
     Removes blanks (i.e. space characters) and tab characters from a
     string and returns the result.  The original string is not altered.
     The second parameter, Code, determines the blanks to strip.  Constant
     values have been defined for the following functions.  Note that it is
     possible to combine several functions into the same call by adding the
     values of the constants together.  For example, S_Leading+S_Trailing
     will strip both leading and trailing blanks.  They are processed in
     the order shown below.

     Constant Name        Meanings
     -------------        ------------------------------------------------
     S_IgnoreQuoted       Do not process characters within quotes (' or ")
     S_AllSpaces          Strip all spaces and tabs
     S_Leading            Strip all leading spaces and tabs
     S_Trailing           Strip all trailing spaces and tabs
     S_ReduceToOneSpace   Reduce all spaces and tabs to one space

  SEE ALSO
     StrCase



  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrCase - Converts the case of all letters in a string.
    StrCase - Converts the case of all letters in a string.

  SYNOPSIS
     FUNCTION StrCase (Source : STRING; Code : BYTE) : STRING;

     WRITELN (StrCase ('uppercase', S_ToUpper));

  DESCRIPTION
     Conversion of case is done using the following codes.  Note that
     Constants are defined for S_IgnoreQuoted - 16, S_ToUpper - 32, and
     S_ToLower - 64.

     Code    String Conversion
     ----    -------------------------------------------
      16     Characters enclosed in quotes are not to be
             altered during string conversion.
      32     Convert all characters to upper case.
      64     Convert all characters to lower case.

     Code can be any combination of the above values, even though some
     combinations are logically inconsistent.  Any ambiguity is resolved by
     executing the conversion request codes in numerical order.  The only
     exception is that code 16 (do not alter quoted strings) is always
     checked.

  SEE ALSO
     Strip

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrField - Returns a field from a delimited string.
    StrField - Returns a field from a delimited string.

  SYNOPSIS
     FUNCTION StrField (Source : STRING; Delimiter : CHAR; Num : BYTE) : STRING;

     WRITELN ('>'+StrField ('NumOne,NumTwo,NumThree', ',', 2)+'<');
     displays: >NumTwo<

  DESCRIPTION
     Returns the string field (i.e. substring) between the delimiter
     characters.  Num is used to indicate that the substring starts after
     the Num-1 delimiter.  This routine will only return one field per
     call.  The delimiter characters are NOT returned.  If you ask for the
     first field and the delimiter is not found, the entire source string
     is returned.  If you ask for the second field and the delimiter is not
     found, then the null field is returned.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrFill - Fill a string with a character.
     StrFill - Fill a string with a character.

  SYNOPSIS
     FUNCTION StrFill (FillCh : CHAR; Num : BYTE) : STRING;

     WRITELN (StrFill ('*', 80);

  DESCRIPTION
     The first parameter specifies the character, and the second specifies
     the length of the returned string.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrPad - Blank pad a string.
     StrPad- Blank pad a string.

  SYNOPSIS
     FUNCTION StrPad (Source : STRING) : STRING;

     Str1 := StrPad(Str1);

  DESCRIPTION
     This function pads a string with blanks (spaces).  It is similar to right 
     justifying a string, except the length is implicit; the size of the 
     result field actually determines the number of blanks padded.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrShiftLeft - Shift a string left one character.
     StrShiftLeft - Shift a string left one character.

  SYNOPSIS
     FUNCTION StrShiftLeft (Fld : STRING; Posit : BYTE) : STRING;

     Str1 := StrShiftLeft('ABCDEFGHIJKLMNOPQRSTUVWXYZ',13);

  DESCRIPTION
     This function removes a single character, whose position is specified by 
     the second parameter from the string specified by the first parameter.  
     The resulting string is one character longer than the original string. 
     This function avoids having to code two COPY statements to achieve the 
     same result. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:StrShiftRight - Shift a string right one character.
     StrShiftRight - Shift a string right one character.

  SYNOPSIS
     FUNCTION StrShiftRight (Fld : STRING; Posit : BYTE; Fill : CHAR) : STRING;

     Str1 := StrShiftLeft(Str1,13,'M');

  DESCRIPTION
     This function inserts a single character into the 'middle' of a string.  
     The 'rest' of the string is shifted right one character position.  The 
     first parameter specifies the string, the second the position into which 
     the third parameter will be placed.  The resulting string is one 
     character longer than the original string. This function avoids having to 
     code two COPY statements to achieve the same result. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

.K:2) STRING CONVERSION
2) STRING CONVERSION

  NAME
.K:S2C - Convert a String into a Character Array.
     S2C - Convert a String into a Character Array.

  SYNOPSIS
     PROCEDURE S2C (Strg : STRING ; VAR CharA ; Len : BYTE);

     S2C (MyString,MyCharArray,LENGTH(MyCharArray));

  DESCRIPTION
     This routine strips out the length byte of a string, and transfers all 
     the remaining used bytes of the string to an array of characters.  The 
     character array is blank padded to the length specified by the length 
     parameter, up to 255 bytes.  If the length parameter specifies a length 
     greater than the actual character array, following bytes in memory will be
     clobbered.  This routine is useful for transfering Turbo strings to DBMSs, 
     etc., that only support character arrays. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:C2S - Coverts a character array to a string.
     C2S - Coverts a character array to a string.

  SYNOPSIS
     FUNCTION C2S (VAR CharA ; Len : BYTE) : STRING;

     MyString := C2S (MyCharArray,SIZEOF(MyCharArray));

  DESCRIPTION
     This routine transfers bytes from the character array to the string. The 
     number of bytes transfered is specified by the length parameter up to 255 
     bytes; the string length byte is set to this parameter.  This routine is 
     useful for reading text import files of fixed length character fields.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:S2Z - Convert a string in a DOS AsciiZ string.
    S2Z - Convert a string in a DOS AsciiZ string.

  SYNOPSIS
     PROCEDURE S2Z (Strg : STRING ; VAR CharA); 

     S2Z (MyString,MyCharArray); 

  DESCRIPTION
     This routine strips out the length byte of a string, transfers all the 
     remaining used bytes of the string to an array of characters, and 
     terminates the used portion of the character array with a zero byte.  If 
     the actual character array isn't large enough to hold the AsciiZ string, 
     following bytes in memory will be clobbered.  This routine is useful for 
     using DOS file handling routines directly. 

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY

  

  NAME
.K:Z2S - Convert an AsciiZ string to a string.
     Z2S - Convert an AsciiZ string to a string.

  SYNOPSIS
     FUNCTION Z2S (VAR CharA) : STRING; 

     MyString := Z2S (MyCharArray);

  DESCRIPTION
     This routine transfers bytes from the character array to the string. The 
     number of bytes transfered is determine by the zero byte terminating the 
     character array, or 255 bytes transfered, whichever occurs first.  the 
     string length byte is set to the number of bytes transfered.

  SEE ALSO

  DEPENDS ON

  DIAGNOSTICS

  KNOWN RESTRICTIONS

  PARTIALLY OBSOLETED BY 

  UPDATE HISTORY




```
{% endraw %}

## XREF.DOC

{% raw %}
```
(********************  XREF PROGRAM USAGE DOCUMENTATION **************************

        RESTRICTIONS:
          1) Only one level of include nesting supported
          2) Insists on ^Z file text source file terminator

        USAGE:
          XREF  TextFileName  OutputFileName  PrinterType LangType

          * If any parameter is missing, or invalid, XREF will prompt for them 
          * If nothing is entered for a prompt (other than enter) the program 
            will exit 
          * If Scroll Lock is OFF, include files will not be processed
          * Supports Read Only Files
          * Exits if include files can't be found, or nested too deeply
          * Exits and closes output files on Ctrl-Break
          * Printer Type to set up compressed print (17 cpi)
          * Language Type for different reserved words and Include file 
            handling 

          PrinterType is:
            I  - IBM graphics
            L  - HP Laser
            D  - DataSouth

          LangType is:
            T  - Turbo Pascal
            M  - Micosoft Pascal

        EXAMPLES:
          XREF DML.PAS  OUT1.OUT I T
          XREF XREF.PAS OUT2.OUT L T

        DOT COMMANDS:
          {.xx} where xx is:
          PA     - Hard page break
          CP nn  - Conditional page break if < than nn lines remain on page
          PO nn  - Set Left margin ( for offsetting three hole punch paper )
          L-     - Turn listing off
          L+     - Turn listing on
          PL nn  - Set page length ( default is 52 )
          HE ss  - Header line string
          FO ss  - Footer line string

****************************************************************************)

```
{% endraw %}

## FILE1697.TXT

{% raw %}
```
Disk No: 1697                                                           
Disk Title: DML                                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: DML disk                                                 
Author Registration: $10.00                                             
Special Requirements: Turbo Pascal version 4.0 or 5.0, and hard disk.
                                                                        
Turbo Pascal programmers, take note!  Here are 87 Turbo Pascal          
routines not found in the standard version 4.0 or 5.0 library.  Full    
source code and documentation is included for each routine.             
                                                                        
The library is divided into four functional modules containing:         
                                                                        
42 general purpose procedures for such things as, system programming    
extensions, file I/O and protection, text encryption, general purpose   
video and video messages, disk and memory sizes, instruction timing,    
general purpose file, math, DOS and version control.                    
                                                                        
18 numeric procedures for handling general numeric formatting and       
conversion, and date and time formatting and conversion.                
                                                                        
14 string procedures to handle general purpose string functions and     
conversion.                                                             
                                                                        
13 keyboard procedures for controlling and accessing the keyboard and   
keyboard buffer.                                                        
                                                                        
The entire library can be accessed by a single statement or the four    
unit modules can be accessed individually.  A demonstration is          
included that shows the action of each routine.                         
                                                                        
An additional utility included is XREF, a Pascal source code            
cross-reference and formatting program.                                 
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1697

     Volume in drive A has no label
     Directory of A:\

    DMLXREF  ARC    265175   1-23-89   9:26a
    FILE1697 TXT      3108  12-11-89   6:10p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848  12-12-89   1:34p
    INSTALLH BAT       364   3-07-89  12:30p
    PKXARC   COM     11482  12-15-86
            6 file(s)     281015 bytes
                           37888 bytes free
