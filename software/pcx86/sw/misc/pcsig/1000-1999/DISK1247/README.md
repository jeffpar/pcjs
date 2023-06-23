---
layout: page
title: "PC-SIG Diskette Library (Disk #1247)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1247/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1247"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CH0-1.DOC

{% raw %}
```







       ========================================================
       =                                                      =
       =           TURBO ENHANCEMENT TOOLKIT                  =
       =                                                      =
       =                  User's Guide                        =
       =                                                      =
       =                  Version 3.0                         =
       =                                                      =
       = (C) Copyright 1986, 1987, 1988 - All Rights Reserved =
       =                                                      =
       ========================================================
















                           SimpleSoft Inc.
                           922 Green Bay St
                         Onalaska, WI  54650
                            (608) 783-6807





                          Licence Agreement


The material described herein is copyrighted LICENSED MATERIAL and
the property of SimpleSoft Inc.

This material is being distributed as a Shareware product.  You are
encouraged to copy and distribute this product with your friends and
associates, provided you do not charge any fee.  If you decide to
use this product, you are urged to become a registered user.

Under no circumstances may this product be sold without the express
written permission of SimpleSoft Inc.

The material is being provided "AS IS" without warranty of any kind,
either expressed or implied.  The entire risk as to quality and
performance of this material with you.  In no event shall SimpleSoft
Inc be liable to you for any damages including any lost profits, lost
savings or other incidental or consequential damages arising out of
the use of this material even if we have have been advised of the
possibility of such damages or any claim by any other party.

Use of this product indicates your acceptance of these terms and
conditions.


                        Registration Benefits

1. Receive a printed manual

2. Receive a new distribution diskette with your registration number

3. One free major update

4. Registered users can purchase source code for $25.00

5. A $5.00 commission for each new registered user that provides
   us with your registration number.

Turbo Pascal is a trademark of Borland International

                      Turbo Enhancement Toolkit
                          Registration Form


Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Turbo Enhancement ToolKit Version 3.01 - U-30010004

Payment for Registered Turbo Enhancement Tookit manual, software and
distribution diskette:


Send _______ copies at $30.00 each ___________._______


                             TOTAL ___________._______


[ ] Check enclosed   [ ] Money order enclosed





                            SimpleSoft Inc
                           922 Green Bay St
                         Onalaska, WI  54560
                            (608) 783-6807

                            SimpleSoft Inc
                           922 Green Bay St
                         Onalaska, WI  54560
                            (608) 783-6807
                           PRODUCT FEEDBACK

Help us make our product better by completing and returning this form.
Your feedback will help us to improve future releases of this product.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Turbo Enhancement ToolKit Version 3.00
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Please rate the usefullness (U) and ease of use (E) for each routine
on a scale of 1 to 10 where 1 is poor, 5 is average and 10 is
excellent.

                                VIDEO

 U   E                                     Comments
___ ___  BorderColor        _____________________________________
___ ___  ClrWin             _____________________________________
___ ___  ColorMsg           _____________________________________
___ ___  DspMsg             _____________________________________
___ ___  EditSt             _____________________________________
___ ___  FillColAttr        _____________________________________
___ ___  FillColCell        _____________________________________
___ ___  FillColChar        _____________________________________
___ ___  FillFrameAttr      _____________________________________
___ ___  FillFrameCell      _____________________________________
___ ___  FillFrameChar      _____________________________________
___ ___  FillRowAttr        _____________________________________
___ ___  FillRowCell        _____________________________________
___ ___  FillRowChar        _____________________________________
___ ___  FrameWin           _____________________________________
___ ___  GetCursorSize      _____________________________________
___ ___  GetFrameAttr       _____________________________________
___ ___  GetFrameCell       _____________________________________
___ ___  GetFrameChar       _____________________________________
___ ___  GetScrn            _____________________________________
___ ___  GetVideoCols       _____________________________________
___ ___  GetVideoInfo       _____________________________________
___ ___  GetVideoMode       _____________________________________
___ ___  GetVideoPage       _____________________________________
___ ___  GotoxyAbs          _____________________________________
___ ___  InitVideo          _____________________________________
___ ___  PutFrameAttr       _____________________________________
___ ___  PutFrameCell       _____________________________________
___ ___  PutFrameChar       _____________________________________
___ ___  PutScrn            _____________________________________
___ ___  RvsAttr            _____________________________________
___ ___  ScrollDown         _____________________________________
___ ___  ScrollLeft         _____________________________________
___ ___  ScrollRight        _____________________________________
___ ___  ScrollUp           _____________________________________
___ ___  SetCursorSize      _____________________________________
___ ___  SetVideoPage       _____________________________________
___ ___  VioInit            _____________________________________
___ ___  WhereXAbs          _____________________________________
___ ___  WhereYAbs          _____________________________________
___ ___  WriteSt            _____________________________________
___ ___  WriteStLn          _____________________________________


                               KEYBOARD

___ ___  BiosKbdClr         _____________________________________
___ ___  BiosKbdGetElmt     _____________________________________
___ ___  BiosKbdHit         _____________________________________
___ ___  BiosKbdRead        _____________________________________
___ ___  BiosKbdStat        _____________________________________
___ ___  DosKbdClr          _____________________________________
___ ___  DosKbdGetElmt      _____________________________________
___ ___  DosKbdHit          _____________________________________
___ ___  DosKbdRead         _____________________________________


                               PRINTER

___ ___  BiosPrtChar        _____________________________________
___ ___  BiosPrtInit        _____________________________________
___ ___  BiosPrtStat        _____________________________________
___ ___  DosPrtChar         _____________________________________

                                 DISK

___ ___  CloseFile          _____________________________________
___ ___  CreateFile         _____________________________________
___ ___  DosFindFirst       _____________________________________
___ ___  DosFindNext        _____________________________________
___ ___  FSeek              _____________________________________
___ ___  GetDrive           _____________________________________
___ ___  GetDTA             _____________________________________
___ ___  GetFileSize        _____________________________________
___ ___  GetNDrvs           _____________________________________
___ ___  OpenFile           _____________________________________
___ ___  ReadFile           _____________________________________
___ ___  ResetDisk          _____________________________________
___ ___  ResetErrCodes      _____________________________________
___ ___  RestInt24          _____________________________________
___ ___  SetDTA             _____________________________________
___ ___  SetInt24           _____________________________________
___ ___  WriteFile          _____________________________________

                               MOUSE

___ ___  MButtonPress       _____________________________________
___ ___  MButtonRel         _____________________________________
___ ___  MGetPos            _____________________________________
___ ___  MGetSpeed          _____________________________________
___ ___  MGraphCursor       _____________________________________
___ ___  MHideCursor        _____________________________________
___ ___  MInitEventHandler  _____________________________________
___ ___  MResetMouse        _____________________________________
___ ___  MRetQue            _____________________________________
___ ___  MSetPos            _____________________________________
___ ___  MSetSpeed          _____________________________________
___ ___  MSetXRange         _____________________________________
___ ___  MSetYRange         _____________________________________
___ ___  MShowCursor        _____________________________________
___ ___  MTextCursor        _____________________________________

List additional procedures and functions you would like to see.  (Use
the back or another sheet of paper if necessary.)








Comments and suggestions:














                 DOCUMENTATIN FEEDBACK

Help us make our documentation better by completing and returning this
form.  Your feedback will help us improve future products.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Turbo Enhancement ToolKit Version 3.00
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Please rate the documentation on a scale of 1 to 10 where 1 is poor, 5
is average and 10 is excellent.

___  Completeness        ___  Usability
___  Accuracy            ___  Readability
___  Organization        ___  Understandability


Was the demo program useful? ___ Yes  ___ No
Is information easy to find? ___ Yes  ___ No
Were errors found in the documentation? ___ Yes ___ No
If yes, please give page number and description of the error.


Is the manual ____ too long?
              ____ too short?
              ____ about right?

Please write other suggestions or comments on the back of this form.


                   Table of Contents

    CHAPTER 1
       Introduction .............................  1-1

    CHAPTER 2 - VIDEO PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  2-1
       Global Variables..........................  2-1
       BorderColor...............................  2-2
       ClrWin....................................  2-3
       ColorMsg..................................  2-4
       DspMsg....................................  2-5
       EditSt....................................  2-6
       FillColAttr...............................  2-11
       FillColCell...............................  2-12
       FillColChar...............................  2-13
       FillFrameAttr.............................  2-14
       FillFrameCell.............................  2-15
       FillFrameChar.............................  2-16
       FillRowAttr...............................  2-17
       FillRowCell...............................  2-18
       FillRowChar...............................  2-19
       FrameWin..................................  2-20
       GetCursorSize.............................  2-22
       GetFrameAttr..............................  2-23
       GetFrameCell..............................  2-24
       GetFrameChar..............................  2-25
       GetScrn...................................  2-26
       GetVideoCols..............................  2-28
       GetVideoInfo..............................  2-29
       GetVideoMode..............................  2-30
       GetVideoPage..............................  2-31
       GotoxyAbs.................................  2-32
       InitVideo.................................  2-33
       PutFrameAttr..............................  2-34
       PutFrameCell..............................  2-36
       PutFrameChar..............................  2-37
       PutScrn...................................  2-39
       RvsAttr...................................  2-41
       ScrollDown................................  2-42
       ScrollLeft................................  2-44
       ScrollRight...............................  2-46
       ScrollUp..................................  2-48
       SetCursorSize.............................  2-50
       SetVideoPage..............................  2-52
       VioInit...................................  2-53
       WhereXAbs.................................  2-54
       WhereYAbs.................................  2-55
       WriteSt...................................  2-56
       WriteStLn.................................  2-57

    CHAPTER 3 - KEYBOARD PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  3-1
       BiosKbdClr................................  3-2
       BiosKbdGetElmt............................  3-3
       BiosKbdHit................................  3-4
       BiosKbdRead...............................  3-5
       BiosKbdStat...............................  3-7
       DosKbdClr.................................  3-9
       DosKbdGetElmt.............................  3-10
       DosKbdHit.................................  3-11
       DosKbdRead................................  3-12
       GetKeyU...................................  3-14
       GetKey....................................  3-15

    CHAPTER 4 - PRINTER PROCEDURES AND FUNCTIONS
       BiosPrtChar...............................  4-1
       BiosPrtInit...............................  4-2
       BiosPrtStat...............................  4-3
       DosPrtChar................................  4-4

    CHAPTER 5 - DISK PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  5-1
       Global Varibles...........................  5-1
       CloseFile.................................  5-2
       CreateFile................................  5-3
       DosFindFirst..............................  5-5
       DosFindNext...............................  5-7
       FSeek.....................................  5-8
       GetDrive..................................  5-10
       GetDTA....................................  5-11
       GetFileSize...............................  5-12
       GetNDrvs..................................  5-13
       OpenFile..................................  5-14
       ReadFile..................................  5-16
       ResetDisk.................................  5-18
       ResetErrCodes.............................  5-19
       RestInt24.................................  5-20
       SetDTA....................................  5-21
       SetInt24..................................  5-22
       WriteFile.................................  5-24

    CHAPTER 6 - MOUSE PROCEDURES AND FUNCTIONS
       Global Varibles...........................  6-1
       MButtonPress..............................  6-2
       MButtonRel................................  6-3
       MGetPos...................................  6-4
       MGetSpeed.................................  6-5
       MGraphCursor..............................  6-6
       MHideCursor...............................  6-8
       MInitEventHandler.........................  6-9
       MResetMouse...............................  6-10
       MRetQue...................................  6-11
       MSetPos...................................  6-12
       MSetSpeed.................................  6-13
       MSetXRange................................  6-14
       MSetYRange................................  6-15
       MShowCursor...............................  6-16
       MTextCursor...............................  6-17

    APPENDIX A
       Summary of Procedures and Functions ......  A-1

    APPENDIX B
       Keyboard codes ...........................  B-1

    APPENDIX C
       Keyboard element codes ...................  C-1

    APPENDIX D
       Keyboard return codes ....................  D-1

    APPENDIX E
       Keyboard scan codes ......................  E-1

```
{% endraw %}

## CH1-1.DOC

{% raw %}
```
INTRODUCTION

   This is a reference manual for the Turbo Enhancement Toolkit
   library unit.  This implementation is for use with Turbo Pascal in
   the PC-DOS operating system.  A working knowledge of Turbo Pascal
   and personal computers is assumed.

   The routines that are included here were created to provide a
   programmer with low level routines that access the video display,
   keyboard, printer, disk, and mouse devices.  These routines are not
   intended to replace the standard features of Turbo Pascal.  They
   were created to enhance and extend the versatility of the Turbo
   Pascal programming language.

   In order to keep the confusion of using these routines down the
   number of global type and variable declarations needed for use
   with these Turbo Pascal Units (TPUs) have been kept to a minimum.

   These units are assembly language object modules that have been
   converted into Turbo Pascal Units.  If you want to use any routine
   from any of these library units you only need to include the
   "USES SSxxxxx" clause at the beginning of your module.  There are
   a total of seven units available.

   SSDISK     Supports several DOS function calls that use byte
              streams when accessing disk files.

   SSDOS      A function to Beep the speaker. (Need more ideas for
              this unit).

   SSGETKEY   Required for EditSt in the SSVIDEO unit.

   SSKBD      Supports BIOS and DOS keyboard function calls.

   SSMOUSE    Supports basic mouse functions, including a mouse
              event handler.

   SSPRT      Support BIOS printer functions.

   SSVIDEO    Several video routines that provide direct access
              the video display.  Routines include saving and
              restoring the screen, framing windows, setting the
              absolute position of the cursor, etc.


----------------------------------------------------------------------
Sample                                              Procedure/Function
----------------------------------------------------------------------

Purpose        What the procedure/function does

Declaration    Procedure/Funciton declaration with parameter list.

Parameters     Parm1         Parm1 description.

               Parm2         Parm2 description

Remarks        General comments.

See Also       Related procedures/functions etc

Example        Sample program or code fragment.

```
{% endraw %}

## CH2-1.DOC

{% raw %}
```
----------------------------------------------------------------------
Global Type Declarations
----------------------------------------------------------------------

Type
   TSet   = Set Of 0..255;

----------------------------------------------------------------------
Global Variable Declarations
----------------------------------------------------------------------

Var
   VioMode    : Word;        contains the current video mode.

   VioPage    : Word;        contains the active video page in use.
                             The value should always be zero for a
                             monochrome adapter.

   VioCols    : Word;        contains the screen width which is the
                             total number of characters per line.

   VioCursor  : Word;        contains the size of the cursor with the
                             starting scan line in the high byte and
                             the ending scan line in the low byte.

   VioBaseSeg : Word;        contains the base segment address of the
                             current video page.

   InsMode    : Word;        global variable used by EditSt indicating
                             if the cursor is in insert or overwrite
                             mode.

----------------------------------------------------------------------
BorderColor                                                  Procedure
----------------------------------------------------------------------

Purpose        Sets the color for the border screen.

Declaration    Procedure BorderColor(Color : Integer);

Parameters     Color         integer defining the color of the border
                             screen.

Remarks        The following colors are allowed for the border color if
               you have a Color/Graphics Monitor Adapter.  BorderColor
               does not have any effect on a monochrome display.

               0  Black         8  Gray
               1  Blue          9  Light Blue
               2  Green        10  Light Green
               3  Cyan         11  Light Cyan
               4  Red          12  Light Red
               5  Magenta      13  Light Magenta
               6  Brown        14  Yellow
               7  White        15  High-intensity White

Example        Program DisplayBorder;
               Uses SSVideo;
               Var
                  i : Integer;
               Begin
                  For i := 0 To 15 Do Begin
                     BorderColor(i);
                     Readln;
                  End;
               End.

               In this example the sixteen available colors for the
               border will be displayed.  A new color will be displayed
               each time the enter key is pressed.

----------------------------------------------------------------------
ClrWin                                                       Procedure
----------------------------------------------------------------------

Purpose       Clear window area with the specified color.

Declaration   Procedure ClrWin(X1,Y1,X2,Y2,Attr : Integer);

Parameters     X1            integer expression defining the left
                             column of the window area to be cleared.

               Y1            integer expression defining the top row
                             of the window area oto be cleared.

               X2            integer expression defining the right
                             column of the window area to be cleared.

               Y2            integer expression defining the bottom
                             row of the window area to be cleared.

               Attr          integer expression in the range 0-255
                             defining the foreground and background
                             byte combination for the color of the
                             window.

Remarks        This procedure will blank the window area for the
               window coordinates that are passed.  ClrWin does not
               move the cursor from its current position.

Example        Program ClearWindow;
               Uses SSVideo;
               Begin
                  ClrWin(5,5,40,20,7)
               End.

               When ClrWin is called in this example the window area
               (5,5,40,20) will be cleared with a the attribute value
               of 7.

----------------------------------------------------------------------
ColorMsg                                                     Procedure
----------------------------------------------------------------------

Purpose        Display string on the screen using the color attribute
               specified.

Declaration    Procedure ColorMsg(X,Y,Attr  : Integer;
                                  Message   : String);

Parameters     X             integer expression defining the column to
                             begin display of the message.

               Y             integer expression defining the row to
                             begin display of the message.

               Attr          integer expression in the range 0-255.
                             It is the color to use for displaying the
                             message.

               Message       any valid string expression.

Remarks        ColorMsg is NOT sensitive to Turbo's currently defined
               window and will wrap around to column one on the next
               line of the screen when necessary. ColorMsg will not
               scroll the screen if the data to be displayed is to
               extend beyond the last row of the screen.

Example        Program DisplayColorMessage;
               Uses SSVideo;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 0 To 8 Do Begin
                     ColorMsg(1,i+1,1+i,'Color-line '+ Chr(i+49));
                     ColorMsg(1,i+10,48+i,'Color-Line ' + Chr(i+49));
                  End;
               End.

               This program example will display nine lines on the
               upper and lower half of the screen.  The upper half of
               the screen will display black as the background color.
               The lower half will use cyan as the background color.

----------------------------------------------------------------------
DspMsg                                                       Procedure
----------------------------------------------------------------------

Purpose        Display string on the screen without changing the color
               attribute that is currently on the display screen.

Declaration    Procedure ColorMsg(X,Y     : Integer;
                                  Message : String);

Parameters     X             integer expression defining the column to
                             begin display of the message.

               Y             integer expression defining the row to
                             begin display of the message.

               Message       any valid string expression.

Remarks        DspMsg is NOT sensitive to Turbo's currently defined
               window and will wrap around to column one on the next
               line of the screen when necessary. DspMsg will not
               scroll the screen if the data to be displayed is to
               extend beyond the last row of the screen.

Example        Program DisplayMessage;
               Uses SSVideo;
               Var
                  i : Integer;
               Begin
                  ClrWin(1,1,80,25,7);
                  For i := 1 To 25 Do
                     FillRowAttr(1,i,80,i);
                  For i := 1 To 25 Do
                     DspMsg(1,i,'This is a test message');
               End.

               This program example will display a different attribute
               color to each row of the display, then a message will
               be displayed on each line without changing the
               attribute bytes that already exist on the screen.

----------------------------------------------------------------------
EditSt                                                       Procedure
----------------------------------------------------------------------

Purpose        Edit an existing or null string from the keyboard.

Declaration    Procedure EditSt(    Row,
                                    StCol,
                                    SpCol,
                                    Len,
                                    CharCase,
                                    FillCh,
                                    AutoSkip,
                                    ErrTone,
                                    ErrDur    : Integer;
                                    VCSet,
                                    TCSet     : TSet;
                                Var ChOfs,TE  : Integer;
                                Var St        : String );

Parameters     Row           integer expression defining the row to
                             edit the string on.

               StCol         integer expression defining the left or
                             start column of the field to edit.  This
                             value must be less that or equal to
                             SpCol.

               SpCol         integer expression defining the right or
                             stop column of the field to edit.  This
                             value must be greater that or equal to
                             StCol.

               Len           integer expression in the range of 1-255.
                             It is the maximum length of the string to
                             be edited from the keyboard.

               CharCase      integer in the range 1-3. The Case Mode
                             indicator defines how a character is
                             displayed on the screen and stored in the
                             string variable being edited.

                                1 = Do nothing to character
                                2 = All characters to upper case
                                3 = All characters to lower case
               FillCh        integer expression in the range of 0-255.
                             This defines the ascii character that is
                             displayed in the field for undefined
                             character positions in the field being
                             edited.

               AutoSkip      integer expression indicating if an auto
                             exit is desired when the last character
                             in the field has been typed.
                                0 - No auto exit
                                1 - Auto exit after last character in
                                    field is entered.

               ErrTone       integer expression in units giving the
                             frequency for beeping the speaker.

               ErrDur        integer expression in units giving the
                             length of time the speaker is to beep.

               VCSet         is the set of valid characters, [0..255],
                             that will be accepted for data entry.

               TCSet         is the set of extended keyboard
                             characters, [0..255], that are allowed to
                             terminate this procedure. (Refer to
                             appendix C for a listing of these codes.)

               CharOfs       is an integer expression that indicates
                             the beginning curosr position within the
                             string.  If CharOfs is a 1 then editing
                             will begin in the first column of the
                             field input area.  If CharOfs is 256 or
                             greater than the length of the string to
                             be edited the cursor will be positioned
                             after the last character in the string.
                             On exit from EditSt CharOfs will contain
                             the cursor position within the string.

               TE            is the terminating element number that
                             terminated the string input procedure.
                             TE will be in the range of 0-255 which
                             corresponds to the element number in
                             appendix C.

               St            the string to receive data entered from
                             the keyboard.

Remarks        The maximum length of the string to edit is 255
               characters.  The data will be entered on one line. If
               the maximum length of the string exceeds the number of
               display columns, SpCol - StCol + 1, the string will
               scroll horizontally on the screen within the StCol and
               SpCol columns.


Editing Keys   The following gives an explanation of the editing keys
               that may be used with EditSt, provided the key pressed
               is not defined in the terminating character set. EditSt
               calls the function GetKey, in the unit SSGetKey, which
               returns an integer.  This integer is a value from 0-384
               which corresponds to an element number that is defined
               in Appendix C.  The function GetKey is provided with a
               table that maps the key element numbers to the index
               number.  Example, If the cursor is to move right one
               character position using the Ctrl-D key combination the
               value for Ctrl-D index key (element number 136) must
               map to the right arrow key (element number 77). The
               initialization of the Ctrl-D key for KeyTable[136]
               would be 77.

               LeftArr       will move the cursor left one character
                             position on the screen until the StCol
                             is reached.  If the beginning of the
                             string has not been reached the string
                             will be scrolled on the screen within the
                             StCol and SpCol boundaries.

               RightArr      will move the cursor right one character
                             position on the screen until the end of
                             the string is reached.  If the cursor is
                             in the SpCol and there is still more in
                             the string that can be displayed the
                             string will then be scrolled within the
                             StCol and SpCol boundaries.

               Home          will place the cursor in the StCol on the
                             screen and positioned under the first
                             character in the edit string.

               End           will position the cursor after the last
                             character in the edit string.

               BackSpace     If the StCol is displaying the first
                             character in the string being edited
                             the cursor will move to the left one
                             column and delete the character in that
                             column. If the character being displayed
                             in the StCol is not the first character
                             in the string being edited the cursor
                             will remain in the same column position
                             and delete the character to the left of
                             the cursor and pull the string towards
                             the cursor.

               Esc           will blank the string currently in the
                             field.  If the field is already blank
                             the procedure will restore the string
                             that was passed to this procedure.

               Tab or        will move the cursor to the right five
               Ctrl          column positions if the SpCol has not
               RightArr      been reached.  If the StCol has been
                             reached then the string display will be
                             shifted right.

               Ctrl          will move the cursor to the left five
               LeftArr       column positions if the StCol has not
               or            been reached.  If the cursor is in the
               ShftTab       StCol then only the display string will
                             be adjusted to reflect the movement of
                             the cursor.

               Del           removes the character the cursor is under
                             and decrements the string length by one.
                             All the characters to the right of the
                             cursor position are moved left one
                             position within the string and display
                             area.

               Ctrl-X        will delete all characters from the
                             current string position to the end of the
                             string.  All deleted characters will be
                             replaced with the FillCh that was
                             specified when calling this procedure.
Example        Program TestEditSt;
               Uses SSVideo;
               Var
                  St          : String;
                  CharOfs,TE  : Integer;
                  VCSet,TCSet : TSet;    {- TSet type is defined -}
               Begin                     {- within the VIDEO.TPU -}
                  CharOfs := 1;
                  VCSet := [32..126];
                  TCSet := [1,13,72,80];
                  EditSt(5,10,20,30,2,7,0,5000,5000,
                          VCSet,TCSet,CharOfs,TE,St);
               End;

               This example will edit a string of up to thirty
               characters into St.  The screen will display each
               character as entered starting in column ten on row
               five.  The display area of the screen goes from columns
               ten to twenty and will do a horizontal scroll in that
               area when the eleventh character is entered.

               All alphabetic characters, ['a'..'z'], will
               automatically be converted to upper case.

               The keys that will terminate this procedure are the
               Esc, Enter, Up and Down Arrow keys.  TE will return the
               proper terminating element number as given in appendix
               C.

----------------------------------------------------------------------
FillColAttr                                                  Procedure
----------------------------------------------------------------------

Purpose        Display a column of attribute bytes on the screen.

Declaration    Procedure FillColAttr(X,Y,NRows,Attr : Integer);

Parameters     X             integer expression defining the column to
                             begin display of the attribute.

               Y             integer expression defining the row to
                             begin display of the attribute.

               NRows         integer expression in the range 1-25 for
                             the number of rows to display the
                             attribute byte on.

               Attr          integer expression in the range 0-255. It
                             is the attribute byte to be displayed on
                             the screen.

Remarks        FillColAttr always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillColCell,FillColChar

Example        Program TestFillColAttr;
               Uses SSVideo;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 To 80 Do
                     FillColAttr(i,1,20,48+i);
                  Readln;
               End.

               In this example the attribute 48+i will be displayed
               twenty times in each column of the display starting on
               row one of the screen.

----------------------------------------------------------------------
FillColCell                                                  Procedure
----------------------------------------------------------------------

Purpose        Fill a column on the screen with a character.

Declaration    Procedure FillColCell(X,Y,NRows,Cell : Word);

Parameters     X             integer expression defining the column to
                             begin display of the character attribute.


               Y             integer expression defining the row to
                             begin display of the character attribute.

               NRows         integer expression in the range 1-25 for
                             the number of rows to display the
                             character and attribute bytes on the
                             screen.

               Cell          integer expression in the range 0-255.
                             This is the character and attribute byte
                             combination where the high order byte is
                             the character and the low order byte is
                             the attribute to be displayed Num times
                             in the column on the screen.

Remarks        FillColCell always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillColAttr,FillColChar

Example        For i := 1 To 80 Do
                  FillColCell(i,1,20,((65+i) * 256) + 48+i);

               In this example the character is ordinal value of 'A'
               plus i and attribute value is 48+i.  The character
               attribute cell combination will be displayed twenty
               times in each column of the display starting on row one
               of the screen.

----------------------------------------------------------------------
FillColChar                                                  Procedure
----------------------------------------------------------------------

Purpose        Fill a column on the screen with a character.

Declaration    Procedure FillColChar(X,Y,NRows : Integer; Ch : Char);

Parameters     X             integer expression defining the column to
                             begin display of the character.

               Y             integer expression defining the row to
                             begin display of the character.

               NRows         integer expression in the range 1-25 for
                             the number of rows to display the
                             character on.

               Ch            integer expression in the range 0-255. It
                             is the character to be displayed on the
                             screen.

Remarks        FillColChar always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillColAttr,FillColCell

Example        Program TestFillColChar;
               Uses SSVideo;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 To 80 Do
                     FillColChar(i,1,20,Chr(64+i));
                  Readln;
               End.

               In this example the character '@'+i will be displayed
               twenty times in each column of the display starting on
               row one of the screen.

----------------------------------------------------------------------
FillFrameAttr                                                Procedure
----------------------------------------------------------------------

Purpose        Fill the frame area defined by X1,Y1,X2,Y2 coordinates
               with the attribute byte defined.

Declaration    Procedure FillFrameAttr(X1,Y1,X2,Y2,Attr : Integer);

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area.
                             X1 must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area.  Y1 be
                             less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen.  X2 must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen.  Y2 must be greater
                             than or equal to Y1.

               Attr          integer expression in the range 0-255.
                             It is the attribute to be displayed on
                             the screen in the specified frame area.

See also       FillFrameCell,FillFrameChar

Example        Program TestFillFrameAttr;
               Uses SSVideo;
               Begin
                  FillFrameAttr(1,1,80,25,48);
               End.

               FillFrameAttr in this example will, on a color display,
               make the background color cyan and all display
               characters black for the foreground color.

----------------------------------------------------------------------
FillFrameCell                                                Procedure
----------------------------------------------------------------------

Purpose        Fill the frame area defined by X1,Y1,X2,Y2 coordinates
               with the cell defined.

Declaration    Procedure FillFrameCell(X1,Y1,X2,Y2 : Integer;
                                       Cell        : Word   );

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area.
                             X1 must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area.  Y1 be
                             less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen.  X2 must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen.  Y2 must be greater
                             than or equal to Y1.

               Cell          integer expression in the range 0-255.
                             This is the character and attribute byte
                             combination where the high byte is the
                             character and the low byte is the
                             attribute for the cell to be displayed on
                             the screen in the specified frame area.

See also       FillFrameAttr,FillFrameChar

Example        Program TestFillFrameCell;
               Uses SSVideo;
               Begin
                  FillFrameCell(1,1,80,25,$2007);
               End.

               FillFrameCell in this example will move spaces to every
               character byte on the screen and the attribute
               byte will get the decimal character 07.  This call will
               have the same effect as a cls from DOS.

----------------------------------------------------------------------
FillFrameChar                                                Procedure
----------------------------------------------------------------------

Purpose        Fill the frame area defined by X1,Y1,X2,Y2 coordinates
               with the character byte defined.

Declaration    Procedure FillFrameChar(X1,Y1,X2,Y2 : Integer;
                                       Ch          : Char    );

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area.
                             X1 must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area.  Y1 be
                             less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen.  X2 must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen.  Y2 must be greater
                             than or equal to Y1.

               Ch            the character that will be displayed on
                             the screen in the specified frame area.

See also       FillFrameAttr,FillFrameCell

Example        Program TestFillFrameChar;
               Uses SSVideo;
               Begin
                  FillFrameChar(1,1,80,25,' ');
               End.

               FillFrameChar in this example will move spaces to every
               character byte on the screen.  It will have
               almost the same effect as a ClrScr call.

----------------------------------------------------------------------
FillRowAttr                                                  Procedure
----------------------------------------------------------------------

Purpose        Write N copies of the attribute byte on the screen
               starting at the specified X,Y coordinates.

Declaration    Procedure FillRowAttr(X,Y,NBytes,Attr : Integer);

Parameters     X             integer expression defining the column to
                             begin display of the attribute byte.

               Y             integer expression defining the row to
                             begin display of the attribute byte.

               NBytes        integer expression giving the number of
                             times to display the attribute byte on
                             the screen.

               Attr          integer expression in the range 0-255.
                             It is the attribute byte to be displayed
                             on the screen.

Remarks        FillRowAttr always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillRowCell,FillRowChar

Example        Program TestFillRowAttr;
               Uses SSVideo;
               Begin
                  FillRowAttr(1,1,80,48);
               End;

               In this example, starting at row one, column one of the
               screen the color attribute byte 48 will be used.

----------------------------------------------------------------------
FillRowCell                                                  Procedure
----------------------------------------------------------------------

Purpose        Write N copies of the character and attribute byte on
               the screen starting at the specified X,Y coordinates.

Declaration    Procedure FillRowCell(X,Y,NWords : Integer;
                                     Cell       : Word   );

Parameters     X             integer expression defining the column to
                             begin display of the cell word.

               Y             integer expression defining the row to
                             begin display of the cell word.

               NWords        integer expression giving the number of
                             times to display the character and
                             attribute bytes on the screen.

               Cell          the character and attribute bytes to be
                             displayed on the screen.

Remarks        FillRowCell always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillRowAttr,FillRowChar

Example        Program TestFillRowCell;
               Uses SSVideo;
               Begin
                  FillRowCell(1,1,80,(Ord('-') * 256) + 7);
               End.

               In this example eighty minus sign characters will be
               displayed starting on row one, column one of the
               screen.  The attribute value is 7.

----------------------------------------------------------------------
FillRowChar                                                  Procedure
----------------------------------------------------------------------

Purpose        Write N copies of the character byte on the screen
               starting at the specified X,Y coordinates.

Declaration    Procedure FillRowChar(X,Y,NBytes : Integer; Ch : Char);

Parameters     X             integer expression defining the column to
                             begin display of the character.

               Y             integer expression defining the row to
                             begin display of the character.

               NBytes        integer expression giving the number of
                             times to display the character on the
                             screen.

               Ch            the character to be displayed on the
                             screen.

Remarks        FillRowChar always acts on the entire screen and is NOT
               sensitive to Turbo's currently defined window.

See also       FillRowAttr,FillRowCell

Example        Program TestFillRowChar;
               Uses SSVideo;
               Begin
                  FillRowChar(1,1,80,'-');
               End.

               In this example eighty minus sign characters will be
               displayed starting on row one, column one of the
               screen.

----------------------------------------------------------------------
FrameWin                                                     Procedure
----------------------------------------------------------------------

Purpose        Frames the window currently defined by the global
               variables WindMax and WindMin with the specified
               characters.

Declaration    Procedure FrameWin(UL,UR,LL,LR,Hor,Ver : Char
                                  Attr                : Integer);

Parameters     UL            the character in the upper left corner of
                             the window.

               UR            character in the upper right corner of
                             the window.

               LL            the character in the lower left corner of
                             the window.

               LR            the character in the lower right corner
                             of the window.

               Hor           the horizontal character for the top and
                             bottom rows of the window.

               Ver           the vertical character for the left and
                             right columns of the window.

               Attr          the attribute color to use for the window
                             frame display.

Remarks        FrameWin will outline the window that is currently
               defined by the global variables WindMin and WindMax
               with the characters passed.  The coordinates given by
               WindMin and WindMax are used to frame the window area.

               Once the window frame has been displayed WindMin and
               WindMax will be adjusted so the window will fit within
               the framed area.

               For example if the current window is defined as
               1,1,80,25 then after FrameWin the current window will
               be 2,2,79,24.

Example        Program TestFrameWin;
               Uses SSVideo;
               Begin
                  FrameWin('-','-','-','-','-','|',7);
               End;

               The above statement will use minus signs for the top
               and bottom lines and the single bar for the two sides.
               The frame will be normal color.


               Program TestFrameWin1;
               Uses SSVideo;
               Begin
                  FrameWin('L','R','l','r','H','V',48);
               End;

               The frame this statement will draw is shown below,
               the color for the frame of the window is attribute
               value 48.


                  LHHHHHHHHHHHHHHHHHHHHHHHHHHR
                  V                          V
                  V                          V
                  V                          V
                  V                          V
                  V                          V
                  V                          V
                  V                          V
                  lHHHHHHHHHHHHHHHHHHHHHHHHHHr

----------------------------------------------------------------------
GetCursorSize                                                 Function
----------------------------------------------------------------------

Purpose        Get the cursor size.

Declaration    Function GetCursorSize : Word;

Remarks        Gets the cursor size by reporting the starting scan
               line in the high byte and the ending scan line in the
               low byte of the word.

                  High byte -- starting scan line
                  Low byte  -- ending scan line

See also       GetVideoInfo,SetCursorSize

Example        Write(Hi(GetCursorSize),Lo(GetCursorSize));

               This example will print on one line the current
               starting scan line and ending scan line respectively.

               j := GetCursorSize;

               In this example j will receive the starting and ending
               scan line of the cursor where:
                  hi byte is starting scan line
                  lo byte is ending scan line

----------------------------------------------------------------------
GetFrameAttr                                                 Procedure
----------------------------------------------------------------------

Purpose        Read the attribute bytes for the specified area on the
               screen into the buffer area.

Declaration    Procedure GetFrameAttr(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                 );

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area.
                             X1 must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area.  Y1 be
                             less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen.  X2 must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen.  Y2 must be greater
                             than or equal to Y1.

               Buffer        untype data area where the data from the
                             screen will be placed.

Example        Program TestGetFrameAttr;
               Uses SSVideo;
               Var
                  i      : Integer;
                  Buffer : Array[1..2000] Of Byte;
               Begin
                  GetFrameAttr(1,1,80,25,Buffer);
               End.

               This example will read the 2000 attributes from the
               screen and place every byte that is read into
               its corresponding byte position in the buffer array.

----------------------------------------------------------------------
GetFrameCell                                                 Procedure
----------------------------------------------------------------------

Purpose        Read the character and attributes bytes for the
               specified area on the screen into the buffer area.

Declaration    Procedure GetFrameCell(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                );

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area.
                             X1 must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area.  Y1 be
                             less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen.  X2 must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen.  Y2 must be greater
                             than or equal to Y1.

               Buffer        untype data area where the data from the
                             screen will be placed.

Example        Program TestGetFrameCell;
               Uses SSVideo;
               Var
                  i      : Integer;
                  Buffer : Array[1..4000] Of Byte;
               Begin
                  GetFrameChar(1,1,80,25,Buffer);
               End.

               This example will read the 4000 character and attribute
               bytes from the screen and place every byte that
               is read into its corresponding character attribute byte
               position in the buffer array.

----------------------------------------------------------------------
GetFrameChar                                                 Procedure
----------------------------------------------------------------------

Purpose        Read the character bytes for the specified area on the
               screen into the buffer area.

Declaration    Procedure GetFrameChar(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                );

Parmaeters     X1            integer expression defining the left
                             column on the screen of the frame area,
                             and must be less than or equal to X2.

               Y1            integer expression defining the top row
                             on the screen of the frame area, and
                             must be less than or equal to Y2.

               X2            integer expression defining the right
                             column on the screen and must be greater
                             than or equal to X1.

               Y2            integer expression defining the bottom
                             row on the screen, and must be greater
                             than or equal to Y1.

               Buffer        untype data area where the data from the
                             screen will be placed.

Example        Program TestGetFrameChar;
               Uses SSVideo;
               Var
                  i      : Integer;
                  Buffer : Array[1..2000] Of Byte;
               Begin
                  GetFrameChar(1,1,80,25,Buffer);
               End.

               This example will read the 2000 characters from the
               screen and place every character that is read
               into its corresponding character position in the buffer
               array.

```
{% endraw %}

## CH2-2.DOC

{% raw %}
```
----------------------------------------------------------------------
GetScrn                                                      Procedure
----------------------------------------------------------------------

Purpose        Read the character and attribute bytes starting from
               specified position on the screen into the buffer.

Declaration    Procedure GetScrn(    X,Y,NWords : Integer;
                                 Var Buffer               );

Parmaeters     X             integer expression defining the column
                             to begin reading data from the screen.

               Y             integer expression defining the row to
                             begin reading data from the screen.

               NWords        integer expressing giving the number of
                             words to read from the display screen.

               Buffer        untype data area where the data from the
                             display screen will be placed.

Remarks        This procedure provides additional checks for vertical
               and horizontal retrace periods on a CGA video adapter
               to eliminate the snow effect that is produced from
               direct moves to or from the video display.  These
               checks may be turned off through the global variable
               CHECKSNOW.

See Also       PutScrn

Example        Program TestGetScrn;
               Uses Video;
               Var
                  Buffer : Array[1..160] Of Byte;
               Begin
                  GetScrn(1,1,80,Buffer[1]);
               End.

               In above example the size of Buffer must be at least
               160 bytes long.  A copy of row one on the screen will
               be placed in Buffer.  Buffer will contain both the
               character and attribute byte values for each cell on
               the video display.

               Program TestGetScrn2;
               Uses Video;
               Var
                  Buffer : Array[1..320] Of Byte;
               Begin
                  GetScrn(1,1,160,Buffer);
               End.

               In the above example the size of Buffer must be at
               least 320 bytes in size and the first two rows of the
               screen will be placed into area defined by the variable
               Buffer.  GetScrn will start retrieving its information
               beginning at the coordinates passed and will continue
               sequentially until the total number of words requested
               are read from the screen.

----------------------------------------------------------------------
GetVideoCols                                                 Procedure
----------------------------------------------------------------------

Purpose        Get the number of columns per line for the current
               display mode.

Declaration    Function GetVideoCols : Integer;

See also       GetVideoInfo

Example        Program GetCols;
               Uses Video;
               Begin
                  Writeln('Total number of columns = ',GetVideoCols:1);
               End.


               GetVidoCols should return either 40 or 80 depending on
               the video mode the system is in.

----------------------------------------------------------------------
GetVideoInfo                                                 Procedure
----------------------------------------------------------------------

Purpose        Gets general video display informtion.

Declaration    Procedure GetVideoInfo(Var BaseSeg,Cols,
                                          Pg,Mode      : Integer);

Parameters     BaseSeg       returns a word that is the base segment
                             address of the current video page.

               Cols          returns an integer that gives the number
                             of display columns available for the
                             current video mode.

               Pg            returns an integer indicating the active
                             display page for the video display.  This
                             will always be zero for the monochrome
                             display adapter.

               Mode          returns an integer to indicate the video
                             display mode the system is currently in.

Remarks
See also       GetVideoCols, GetVideoMode, GetVideoPage

Example        Program TestGetInfo;
               Uses Crt,Video;
               Var
                  BaseSeg,Mode,NCols,CPg : Integer;
               Begin
                  GetVideoInfo(BaseSeg,Cols,CPg,Mode);
                  ClrScr;
                  Writeln('BaseSeg             = ',BaseSeg:1);
                  Writeln('Number of columns   = ',NCols);
                  Writeln('Active display page = ',CPg);
                  Writeln('Current video mode  = ',Mode:1);
               End.

               This example will display the video information to the
               screen.  The current video mode should return a value
               from 0-15, the number of columns will be either 40 or
               80, and the active video display page will be a value
               from 0-7.
----------------------------------------------------------------------
GetVideoMode                                                  Function
----------------------------------------------------------------------

Purpose        Gets the current video mode.

Declaration    Function GetVideoMode : Integer;

Remarks        Returns an integer giving the current video mode the
               system is in.  Use the guide on video modes under
               InitVideo.

See also       GetVideoInfo

Example        Program Test;
               Uses Video;
               Begin
                  Writeln('Current mode = ',GetVideoMode:1);
               End.

               This example will display the current video mode the
               system is in.

----------------------------------------------------------------------
GetVideoPage                                                  Function
----------------------------------------------------------------------

Purpose        Gets the active display page currently in use.

Declaration    Function GetVideoPage : Integer;

Remarks        On monochrome displays GetVideoPage will always return
               a zero.

See also       GetVideoInfo

Example        Program Test;
               Uses Video;
               Begin
                  Writeln('Current video page = ',GetVideoPage:1);
               End.

               This example will display the current video page on the
               system.  It should be a value in the range of 0-7.

----------------------------------------------------------------------
GotoxyAbs                                                    Procedure
----------------------------------------------------------------------

Purpose        Position the cursor at the specified position on the
               screen without regards to the global variables WindMin
               and WindMax.

Declaration    Procedure GotoxyAbs(X,Y : Integer);

Parameters     X             integer expression defining the column
                             number to place the cursor.

               Y             integer expression defining the row
                             number to place the cursor.

Remarks        This procedure will place the cursor at the specified
               x,y coordinates on the screen. GotoxyAbs is NOT
               sensitive to the global variables WindMin and WindMax.

Example        Program ExGotoxyAbs;
               Uses Crt,Video;
               Begin
                  Window(10,10,50,24);
                  Gotoxy(1,1);
                  GotoxyAbs(1,1);
               End;

               Even though the upper left corner of the defined window
               is row 10, column 10, GotoxyAbs will still place the
               cursor in row 1 column 1 on the screen.  Gotoxy will
               place the cursor in row 10 column 10 on the screen.

----------------------------------------------------------------------
InitVideo                                                    Procedure
----------------------------------------------------------------------

Purpose        Initialize the video mode.

Declaration    Procedure InitVideo(Mode : Integer);

Parameters     Mode          is an integer expression that indicates
                             which video display mode to set.

Remarks        To set the screen to the appropriate video mode use the
               following table as a guide.

                  Mode           Type            Colors   Adapter
                ---------------------------------------------------
               |    0  |  Text - 40 x 25 B/W   |  b/w   |   CGA    |
               |    1  |  Text - 40 x 25 COLOR |  16    |   CGA    |
               |    2  |  Text - 80 x 25 B/W   |  b/w   |   CGA    |
               |    3  |  Text - 80 x 25 COLOR |  16    |   CGA    |
               |    4  |  Graphics - 320 x 200 |   4    |   CGA    |
               |    5  |  Graphics - 320 x 200 | 4 grey |   CGA    |
               |    6  |  Graphics - 640 x 200 |  b/w   |   CGA    |
               |    7  |  Text - 80 x 25       |  16    |   MDA    |
               |    8  |  Graphics - 160 x 200 |  16    |   PCjr   |
               |    9  |  Graphics - 320 x 200 |  4,64  |   PCjr   |
               |   10  |  Graphics - 640 x 200 |  16    | PCjr,EGA |
               |   13  |  Graphics - 320 x 200 |  16    |   EGA    |
               |   14  |  Graphics - 640 x 200 |  16    |   EGA    |
               |   15  |  Graphics - 640 x 350 |   4    |   EGA    |
                ---------------------------------------------------


Example        Program TestInitVideoMode;
               Uses Video;
               Begin
                  InitVideo(3);
               End.

               This example will initialize the video mode to 80 x 25
               color text.

----------------------------------------------------------------------
PutFrameAttr                                                 Procedure
----------------------------------------------------------------------

Purpose        Write the data in the buffer to the attribute byte in
               the specified area on the screen.

Declaration    Procedure PutFrameAttr(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                );


Parameters     X1            integer expression  defining the left
                             column number of the window frame area.

               Y1            integer expression defining the top row
                             number of the window frame area.

               X2            integer expression defining the right
                             column number of the window frame area.

               Y2            integer expression defining the bottom
                             row number of the window frame area.

               Buffer        untype variable that contains the data
                             information that will be displayed to the
                             specified area on the screen.

See also       GetFrameAttr, PutFrameCell, PutFrameChar

Example        Program TestPutFrameAttr;
               Uses Video;
               Var
                  i      : Integer;
                  Buffer : Array[1..2000] Of Byte;
               Begin
                  FillChar(Buffer,SizeOf(Buffer),7);
                  PutFrameAttr(1,1,80,25,Buffer);
               End.

               In this example the first statment fills the buffer
               array with the value of 7, this will be the attribute
               character placed on the screen for each attribute
               position.  Then the PutFrameAttr statement places each
               byte in the buffer on the display screen.

               Normally PutFrameAttr is used as the inverse or
               complement of the procedure GetFrameAttr.  Using
               GetFrameAttr would allow save the attribute bytes for
               a section of the screen to be later restored with
               PutFrameAttr.

----------------------------------------------------------------------
PutFrameCell                                                 Procedure
----------------------------------------------------------------------

Purpose        Write the data in the buffer to the character and
               attribute bytes in the specified area on the screen.

Declaration    Procedure PutFrameWord(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                );

Parameters     X1            integer expression  defining the left
                             column number of the window frame area.

               Y1            integer expression defining the top row
                             number of the window frame area.

               X2            integer expression defining the right
                             column number of the window frame area.

               Y2            integer expression defining the bottom
                             row number of the window frame area.

               Buffer        untype variable that contains the data
                             information that will be displayed to
                             the specified area on the screen.

See also       GetFrameCell, PutFrameAttr, PutFrameChar

Example        Program Example;
               Uses Video;
               Var
                  i      : Integer;
                  Buffer : Array[1..2100] Of Byte;
               Begin
                  GetFrameWord(10,10,80,25,Buffer);
                  ClrWin(1,1,80,25,7);
                  PutFrameWord(1,1,71,16,Buffer);
               End.

               In this example the first statment retrieves a section
               of the display screen and places 2100 bytes in the data
               variable Buffer.  The screen is then cleared to remove
               the display data from the screen.  PutFrameWord now
               restores the data saved from GetFrameWord and places
               the data onto another portion of the display screen.

----------------------------------------------------------------------
PutFrameChar                                                 Procedure
----------------------------------------------------------------------

Purpose        Write the data in the buffer to the character byte in
               the specified area on the screen.

Declaration    Procedure PutFrameChar(    X1,Y1,X2,Y2 : Integer;
                                      Var Buffer                );


Parameters     X1            integer expression  defining the left
                             column number of the window frame area.

               Y1            integer expression defining the top row
                             number of the window frame area.

               X2            integer expression defining the right
                             column number of the window frame area.

               Y2            integer expression defining the bottom
                             row number of the window frame area.

               Buffer        untype variable that contains the data
                             information that will be displayed to
                             the specified area on the screen.

See also       GetFrameChar, PutFrameAttr, PutFrameChar

Example        Program Example;
               Uses Video;
               Var
                  i      : Integer;
                  Buffer : Array[1..2000] Of Char;
               Begin
                  FillChar(Buffer,SizeOf(Buffer),'A');
                  PutFrameChar(1,1,80,25,Buffer);
               End.

               In this example the first statment fills the buffer
               array with the letter A, this will be the character
               to be placed on the screen for each character position.
               Then the PutFrameChar statement places each character
               from the buffer to the display screen.

               Normally PutFrameChar is used as the inverse of the
               GetFrameChar procedure.  Using GetFrameChar would allow
               the character bytes for a section of the screen to be
               saved and later restored with PutFrameChar.

----------------------------------------------------------------------
PutScrn                                                      Procedure
----------------------------------------------------------------------

Purpose        Write the data in the buffer starting at the specified
               position to the character and attribute bytes on the
               screen.

Declaration    Procedure PutScrn(    X,Y,NWords : Integer;
                                 Var Buffer               );


Parmaeters     X             integer expression defining the column
                             to begin reading data from the screen.

               Y             integer expression defining the row to
                             begin reading data from the screen.

               NWords        integer expressing giving the number of
                             words to read from the display screen.

               Buffer        untyped variable that contains the data
                             information to be displayed to the screen
                             starting at the specified position.

Remarks        This procedure provides additional checks for vertical
               and horizontal retrace periods on a CGA video adapter
               to eliminate the snow effect that is produced from
               direct moves to or from the video display.  These
               checks may be turned off through the global variable
               CHECKSNOW.

See also       GetScrn

Example        Program TestPutScrn;
               Uses Video;
               Var
                  Buffer : Array[1..160] Of Byte;
                  i      : Integer;
               Begin
                  i := 1;
                  While i < 160 Do Begin
                     Buffer[i]   := 65;  { Character 'A' }
                     Buffer[i+1] := 7;   { normal color  }
                     i := i + 2;
                  End;
                  PutScrn(1,1,80,Buffer);
               End;

               In this example the size of Buffer is 160 bytes long.
               The first 80 words or 160 bytes of Buffer will be
               placed on the screen starting at row one column one of
               the screen.  Both the attribute and character bytes
               will be written to the screen.  The Buffer variable may
               be subscripted to use a different starting point for
               the buffers contents.

----------------------------------------------------------------------
RvsAttr                                                       Function
----------------------------------------------------------------------

Purpose        Reverses the video attribute byte passed.

Declaration    Function RvsAttr(Attr : Byte) : Byte;

Parmaeters     Attr          byte value in the range 0-255 giving the
                             color to be reversed.

Remarks        RvsAttr exchanges the three foreground and background
               attribute bits of the parmaeter value passed in.  The
               blink and intensity bits of the byte remain unchanged.

Example        Foreground color --> white.
               Background color --> black.

               If the above is true for the foreground and background
               colors then after calling RvsAttr the foreground and
               background colors will be as follows:

               Foreground color --> black.
               background color --> white.

               Program TestRvs;
               Uses Crt,Video;
               Begin
                  Writeln(RvsAttr(7):1);
               End.

----------------------------------------------------------------------
ScrollDown                                                   Procedure
----------------------------------------------------------------------

Purpose        Scroll the specified portion of the screen down N lines
               filling in new lines with spaces and the specified
               attribute.

Declaration    Procedure ScrollDown(X1,Y1,X2,Y2,Attr,NRows : Integer);

Parmaeters     X1            integer expression defining the left
                             column of the window area to scroll.

               Y1            integer expression defining the top row
                             of the window area to scroll.

               X2            integer expression defining the right
                             column of the window area to scroll.

               Y2            integer expression defining the bottom
                             row of the window area to scroll.

               Attr          integer expression in the range 0-255.
                             It defines the display attribute to be
                             used when filling in the blank lines at
                             the top of the window.

               NRows         integer expression giving the number of
                             lines the specified portion of the screen
                             is to be scrolled.

Remarks        If you use a value of zero for the number of lines to
               scroll the window area defined by the X1,Y1,X2,Y2
               coordinates will be cleared to the color defined by
               the Attribute variable.

See also       ScrollLeft, ScrollRight, ScrollUp

Example        Program Scroll;
               Uses Video;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 to 24 Do
                     FillRowChar(1,i,80,Chr(i+64));
                  ScrollDown(4,5,15,20,48,1);
               End.

               In this example one line will be scrolled down in the
               window with the top row being filled in with cyan on a
               Color/Graphics Adapter.

----------------------------------------------------------------------
ScrollLeft                                                   Procedure
----------------------------------------------------------------------

Purpose        Scroll the specified portion of the screen left N
               columns filling in new columns with spaces and the
               specified attribute.

Declaration    Procedure ScrollLeft(X1,Y1,X2,Y2,Attr,NCols : Integer);

Parmaeters     X1            integer expression defining the left
                             column of the window area to scroll.

               Y1            integer expression defining the top row
                             of the window area to scroll.

               X2            integer expression defining the right
                             column of the window area to scroll.

               Y2            integer expression defining the bottom
                             row of the window area to scroll.

               Attr          integer expression in the range 0-255.
                             It defines the display attribute to be
                             used when filling in the blank spaces on
                             the left column the window.

               NCols         integer expression giving the number of
                             columns the specified portion of the
                             screen is to be scrolled.

Remarks        If you use a value of zero for the number of lines to
               scroll the window area defined by the X1,Y1,X2,Y2
               coordinates will be cleared to the color defined by
               the Attribute variable.

See also       ScrollDown, ScrollRight, ScrollUp

Example        Program Scroll;
               Uses Video;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 to 24 Do
                     FillRowChar(1,i,80,Chr(i+64));
                  ScrollLeft(4,5,15,20,48,1);
               End.

               In this example one column will be scrolled left in the
               window with the right column being filled in with cyan
               on a Color/Graphics Adapter.

----------------------------------------------------------------------
ScrollRight                                                  Procedure
----------------------------------------------------------------------

Purpose        Scroll the specified portion of the screen right N
               columns filling in new columns with spaces and the
               specified attribute.

Declaration    Procedure ScrollRight(X1,Y1,X2,Y2,Attr,NCols : Integer);

Parmaeters     X1            integer expression defining the left
                             column of the window area to scroll.

               Y1            integer expression defining the top row
                             of the window area to scroll.

               X2            integer expression defining the right
                             column of the window area to scroll.

               Y2            integer expression defining the bottom
                             row of the window area to scroll.

               Attr          integer expression in the range 0-255.
                             It defines the display attribute to be
                             used when filling in the blank spaces on
                             the left column of the window.

               NCols         integer expression giving the number of
                             columns the specified portion of the
                             screen is to be scrolled.

Remarks        If you use a value of zero for the number of lines to
               scroll the window area defined by the X1,Y1,X2,Y2
               coordinates will be cleared to the color defined by
               the Attribute variable.

See also       ScrollDown, ScrollLeft, ScrollUp

Example        Program Scroll;
               Uses Video;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 to 24 Do
                     FillRowChar(1,i,80,Chr(i+64));
                  ScrollRight(4,5,15,20,48,1);
               End.

               In this example one column will be scrolled right in
               the window with the left column being filled in with
               cyan on a Color/Graphics Adapter.

----------------------------------------------------------------------
ScrollUp                                                     Procedure
----------------------------------------------------------------------

Purpose        Scroll the specified portion of the screen up N lines
               filling in new lines with spaces and the specified
               attribute.

Declaration    Procedure ScrollUp(X1,Y1,X2,Y2,Attr,NRows : Integer;)

Parmaeters     X1            integer expression defining the left
                             column of the window area to scroll.

               Y1            integer expression defining the top row
                             of the window area to scroll.

               X2            integer expression defining the right
                             column of the window area to scroll.

               Y2            integer expression defining the bottom
                             row of the window area to scroll.

               Attr          integer expression in the range 0-255.
                             It defines the display attribute to be
                             used when filling in the blank lines at
                             the bottom of the window.

               NRows         integer expression giving the number of
                             lines the specified portion of the screen
                             is to be scrolled.

Remarks        If you use a value of zero for the number of lines to
               scroll the window area defined by the X1,Y1,X2,Y2
               coordinates will be cleared to the color defined by
               the Attribute variable.

See also       ScrollDown, ScrollLeft, ScrollRight

Example        Program Scroll;
               Uses Video;
               Var
                  i : Integer;
               Begin
                  ClrScr;
                  For i := 1 to 24 Do
                     FillRowChar(1,i,80,Chr(i+64));
                  ScrollUp(4,5,15,20,48,1);
               End.

               In this example one line will be scrolled up in the
               window with the bottom row being filled in with cyan
               on a Color/Graphics Adapter.

----------------------------------------------------------------------
SetCursorSize                                                Procedure
----------------------------------------------------------------------

Purpose        Set the size of the cursor.

Declaration    Procedure SetCursorSize(StScan,SpScan : Integer);

Parameters     StScan        integer expression indicating the
                             starting scan line to be used for the
                             cursor.

               SpScan        integer expression indicating the ending
                             scan line to be used for the cursor.

Remarks        The scan lines are numbered from zero at the top
               (StScan) to N at the bottom (SpScan) where N applies
               to the following video adapters.

                7 - Color/Graphics Adapter
               14 - Monochrome Adapter

               - 0 --
               - 1   |
               - 2   |
               - 3   |---> Scan lines for a Color/Graphics
               - 4   |     display adapter.
               - 5   |
               - 6   |
               - 7 --

See also       GetCursorSize

Example        The following examples are for the Color/Graphics Adapter:

               Program Example;
               Uses Video;
               Begin
                  SetCursorSize(32,32);   { hides the cursor          }
                  SetCursorSize(0,7);     { cursor covers entire cell }
                  SetCursorSize(6,7);     { cursor size normal        }
               End.

               The first SetCursorSize statment makes the cursor
               invisible on the screen.  The second SetCursorSize
               will cover the entire character cell on a color/graphic
               display and will cover half of the cell on a monochrome
               display.  If the display was a monochrome display an
               the entire character cell was to be covered by the
               cursor then the parameters should be (0,13).

----------------------------------------------------------------------
SetVideoPage                                                 Procedure
----------------------------------------------------------------------

Purpose        Set the active display page.

Declaration    Procedure SetVideoPage(PageNo : Integer);

Parameters     PageNo        integer expression that is the active
                             display page to use.

Remarks        Active display pages available for the various display cards.

               0    - Monochrome
               0-7  - Color/Graphics 40 column text mode
               0-3  - Color/Graphics 80 column text mode
               0    - Color/Graphics Hi Resolution
                      Graphics mode

               *** Turbo Pascal only recognizes the default page
                   (page 0) with its Crt unit.

Example        The following examples are for the Color/Graphics
               Adapter because the monochrome display only has one
               page available.

               Program Example;
               Uses Video;
               Begin
                  SetVideoPage(0);  { default video page - page 1 }
                  SetVideoPage(1);  { another page       - page 2 }
               End.

               The first statement will set the video page to the
               default display page and the second page will switch
               to the next page.

----------------------------------------------------------------------
VioInit                                                      Procedure
----------------------------------------------------------------------

Purpose        Initializes the Video units global variables.

Declaration    Procedure VioInit;

Remarks        This procedure is executed once automatically anytime
               the video unit is used.  If at some time you wish to
               reset the global variables to their default settings
               you may use this procedure to complete that task.

Example        Procedure Test;
               Uses Video;
               Begin
                  CheckSnow := False;
                  VioInit;
               End.

               In this example we set the global variable CheckSnow to
               false turning the checks for snow on a CGA off.  If a
               CGA display is being used setting CheckSnow to true
               could be done or the call to VioInit will set CheckSnow
               to true also.

----------------------------------------------------------------------
WhereXAbs                                                     Function
----------------------------------------------------------------------

Purpose        Gets the column the cursor is on.

Declaration    Function WhereXAbs : Integer;

Remarks        This function will return an integer giving the column
               number the cursor is on.  This routine is not sensitive
               to the currently defined window.

See also       GotoxyAbs, WhereYAbs

Example        Program Example;
               Uses Video;
               Begin
                  Writeln(WhereXAbs:1);
               End.

               The column number of the cursor when WhereXAbs was
               called will be displayed to the screen.

----------------------------------------------------------------------
WhereYAbs                                                     Function
----------------------------------------------------------------------

Purpose        Gets the row the cursor is on.

Declaration    Function WhereYAbs : Integer;

Remarks        This function will return an integer giving the row
               number the cursor is on.  This routine is not sensitive
               to the currently defined window.

See also       GotoxyXAbs, WhereXAbs

Example        Program Example;
               Uses Video;
               Begin
                  Writeln(WhereYAbs:1);
               End.

               The row number of of the cursor when WhereYAbs was
               called will be displayed to the screen.

----------------------------------------------------------------------
WriteSt                                                      Procedure
----------------------------------------------------------------------

Purpose        Display a string on the screen

Declaration    Procedure WriteSt(St : String);

Parameters     St            is any string expression.

Remarks        WriteSt positions the cursor after the newly displayed
               string.  WriteSt is NOT sensitive to the currently
               defined window and will wrap around to the next row of
               column one of the physical screen when necessary.
               WriteSt will not scroll the screen if the data to be
               displayed is to extend beyond the last row of the
               screen.  WriteSt uses the attribute byte defined by the
               global variable TextAttr.

See also       WriteStLn

Example        Program TestWriteSt;
               Uses Video;
               Var
                  i  : Integer;
               Begin
                  GotoxyAbs(1,1);
                  For i := 1 To 50 Do
                     WriteSt('test string ');
               End;

               This example will position the cursor in the upper left
               corner of the display screen and then will proceed to
               display the string "test string " fifty times.  Example
               of the intented output follows:

               test string test string test string test string ...


----------------------------------------------------------------------
WriteStln                                                    Procedure
----------------------------------------------------------------------

Purpose        Display a string on the screen

Declaration    Procedure WriteStln(St : String);

Parameters     St            is any string expression.

Remarks        WriteSt positions the cursor in column one on the next
               line of the display screen after the data has been
               displayed.  WriteSt is NOT sensitive to the currently
               defined window and will wrap around to the next row of
               column one of the physical screen when necessary.
               WriteSt will not scroll the screen if the data to be
               displayed is to extend beyond the last row of the
               screen.  WriteSt uses the attribute byte defined by the
               global variable TextAttr.

See also       WriteSt

Example        Program TestWriteStln;
               Uses Video;
               Var
                  i  : Integer;
                  St : String[2];
               Begin
                  GotoxyAbs(1,1);
                  For i := 1 To 24 Do Begin
                     Str(i:2,St);
                     WriteStln('string on line ' + St);
                  End;
               End;

               This example will position the cursor in the upper left
               corner of the display screen and then on each line will
               display the string "string on line NN" where NN is the
               line number the string is displayed on.

```
{% endraw %}

## CH3-1.DOC

{% raw %}
```
----------------------------------------------------------------------
Global Type Declarations
----------------------------------------------------------------------

Type
   Str2 = String[2];

----------------------------------------------------------------------
BiosKbdClr                                                   Procedure
----------------------------------------------------------------------

Purpose        Clear the keyboard buffer.

Declaration    Procedure BiosKbdClr;

Remarks        BiosKbdClr uses the BIOS to clear any characters in
               the keyboard buffer waiting to be read.

See also       DosKbdClr

Example        Program Example;
               Uses KeyBoard;
               Var
                  Ch : Char;
               Begin
                  BiosKbdClr;
                  Read(Kbd,Ch);
                  .
                  .
                  .
               End.

               In this example the keyboard buffer is flushed before
               reading a keystroke from the keyboard.

----------------------------------------------------------------------
BiosKbdGetElmt                                                Function
----------------------------------------------------------------------

Purpose        Get an integer value for the key pressed on the
               keyboard.

Declaration    Function BiosKbdGetElmt : Integer;

Remarks        BiosKbdGetElmt will return an integer in the range of
               0-388.  Use Appendix C as a guide to find the keyboard
               element code this function returns for a particular key
               pressed on the keyboard.  Using DOS function calls
               there is not any method available to distinguish
               the difference between some keystokes and key
               combinations.  An example of this is the Enter key and
               the Ctrl-M keys both return a value of 145.

               Key combinations using the control key with an alpha
               character and all other ascii characters will be
               offset by 132.

See also       BiosKbdRead, DosKbdGetElmt, DosKbdRead

Example        Program Example;
               Uses KeyBoard;
               Begin
                  Writeln('Value of keypressed = ',BiosKbdGetElmt:1);
               End.

               If Control-Break were pressed then zero would be
               displayed.  If the 'A' were pressed then 197 would be
               displayed:
                          (197 - 132 = 65).

----------------------------------------------------------------------
BiosKbdHit                                                    Function
----------------------------------------------------------------------

Purpose        Reports if a keystroke is waiting to be read from the
               keyboard buffer.

Declaration    Funciton BiosKbdHit : Boolean;

Remarks        Using the BIOS services BiosKbdHit checks the keyboard
               status to determine if a key is waiting to be read
               from the keyboard buffer.

See also       DosKbdHit

Example        Program TestHit;
               Uses KeyBoard;
               Begin
                  While Not BiosKbdHit Do
                     Writeln('Keyboard buffer empty...'):
               End.

               This program will display the keyboard buffer empty
               phrase on a new line until a key is pressed on the
               keyboard.

----------------------------------------------------------------------
BiosKbdRead                                                  Procedure
----------------------------------------------------------------------

Purpose        Read a character from the keyboard.

Declaration    Procedure BiosKbdRead(Var Ch : Str2);

Parameters     Ch            returns a string of length zero, one, or
                             two bytes long defining the key or key
                             combination pressed from the keyboard.

Remarks        BiosKbdRead reads a single character from the keyboard
               buffer.   BiosKbdRead will return a zero, one, or two
               character string.  A null string indicates that Ctrl-
               Break was pressed.  A one-character string indicates a
               normal ascii character was read from the keyboard.  A
               two-character string indicates a special extended
               keyboard code.  Refer to appendix B for a list of the
               extended keyboard codes.  The data type definition for
               BiosKbdRead is an untyped variable using a minimum of
               three bytes.

See also       BiosKbdGetElmt, DosKbdGetElmt, DosKbdRead

Example        Program TestBiosKbdRead;
               Uses KeyBoard;
               Var
                  Ch : Str2;
               Begin
                  BiosKbdRead(Ch);
                  Case Ch[1] Of
                     #00 : Writeln('Ctrl char pressed');
                     #27 : Writeln('Other key comb used');
                     #32..#127 : Writeln('Ascii pressed');
                  End;
               End.

               In this example any key or key combination that is read
               from the keyboard will be grouped into one of three
               categories.

               If Ch[1] is equal to the null byte and the length byte
               is equal to two, then one of the control characters
               (0-31) was pressed.  This includes the enter key,
               backspace, tab, and key combinations that use the
               control and an ACSII character A-Z.  If Ch[1] is equal
               to #27 then some other key combination was used,
               generally involving the alt key or control key with one
               of the function keys or cursor movement keys.  The
               string length will be two.  If Ch[1] is in the range
               #32..#127 then an ASCII character was pressed.  The
               length will also be one, where as in the other two
               possibilites the length will be two.

----------------------------------------------------------------------
BiosKbdStat                                                   Function
----------------------------------------------------------------------

Purpose        Get the keyboard status byte

Declaration    Function BiosKbdStat : Integer;

Remarks        BiosKbdStat returns the keyboard status byte as
               follows:

                            BITS

               ---------------------------------
               | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
               ---------------------------------

               Bit   Bit Value    Key Pressed
               ---   ---------    -----------
                0  -      1    -  Right Shift
                1  -      2       Left Shift
                2  -      4       Control
                3  -      8       Alternate

                                  Key Mode
                                  -----------
                4  -     16       Scroll Lock
                5  -     32       Num Lock
                6  -     64       Caps Lock
                7  -    128       Insert

               A one in the bit position means the condition is true
               and a zero in the bit position means the condition is
               false.

Example        Program Example;
               Uses KeyBoard;
               Var
                  i    : Integer;
                  Done : Boolean;
               Begin
                  Done := False;
                  While Not Done Do Begin
                     i := BiosKbdStat;
                     If Keypressed Then Begin
                        If (i And 2) <> 0 Then
                           Done := True;
                        ClrScr;

                        If (i And 16) <> 0 Then
                           Writeln('Scroll Lock ON')
                        Else
                           Writeln('Scroll Lock OFF');

                        If (i And 32)  <> 0 Then
                           Writeln('Num Lock ON')
                        Else
                           Writeln('Num Lock OFF');

                        If (i And 64)  <> 0 Then
                           Writeln('Caps Lock ON')
                        Else
                           Writeln('Caps Lock OFF');

                        If (i And 128) <> 0 Then
                           Writeln('Insert ON')
                        Else
                           Writeln('Insert OFF');
                     End;
                  End;
               End.

               In this example everytime a key is pressed the screen
               is cleared and the status for the Scroll Lock, Insert,
               Caps Lock and Num Lock keys are displayed in the upper
               left corner.  This routine will not terminate until a
               key is pressed with the left shift key held down.

----------------------------------------------------------------------
DosKbdClr                                                    Procedure
----------------------------------------------------------------------

Purpose        Clear the keyboard buffer.

Declaration    Procedure DosKbdClr;

Remarks        DosKbdClr uses DOS to clear any characters in the
               keyboard buffer waiting to be read.

See also       BiosKbdClr

Example        Program Example;
               Uses KeyBoard;
               Var
                  Ch : Char;
               Begin
                  DosKbdClr;
                  Read(Kbd,Ch);
                  .
                  .
                  .
               End.

               In this example the keyboard buffer is flushed before
               reading a keystroke from the keyboard.

----------------------------------------------------------------------
DosKbdGetElmt                                                 Function
----------------------------------------------------------------------

Purpose        Get an integer value for the key pressed on the
               keyboard.

Declaration    Function DosKbdGetElmt : Integer;

Remarks        DosKbdGetElmt will return an integer in the range of
               0-388.  Use Appendix C to find the keyboard element
               code this function returns for a particular key
               pressed on the keyboard.

               Key combinations using the control key with an alpha
               character and all other ascii characters will be
               offset by 132.

See also       BiosKbdGetElmt, BiosKbdRead, DosKbdRead

Example        Program Example;
               Uses KeyBoard;
               Begin
                  Writeln('Value of keypressed = ',DosKbdGetElmt:1);
               End.

               If Control-Break were pressed then zero would be
               displayed.  If the 'A' were pressed then 197 would be
               displayed:
                         (197 - 132 = 65).

----------------------------------------------------------------------
DosKbdHit                                                    Function
----------------------------------------------------------------------

Purpose        Reports if a keystroke is waiting to be read from the
               keyboard buffer.

Declaration    Funciton DosKbdHit : Boolean;

Remarks        Using the DOS services DosKbdHit checks the keyboard
               status to determine if a key is waiting to be read
               from the keyboard buffer.

See also       BiosKbdHit

Example        Program TestHit;
               Uses KeyBoard;
               Begin
                  While Not DosKbdHit Do
                     Writeln('Keyboard buffer empty...'):
               End;

               This program will display the keyboard buffer empty
               phrase on a new line until a key is pressed on the
               keyboard.

----------------------------------------------------------------------
DosKbdRead                                                  Procedure
----------------------------------------------------------------------

Purpose        Read a character from the keyboard.

Declaration    Procedure DosKbdRead(Var Ch : Str2);

Parameters     Ch            returns a string of length zero, one, or
                             two bytes long defining the key or key
                             combination pressed from the keyboard.

Remarks        DosKbdRead reads a single character from the keyboard
               buffer.   DosKbdRead will return a zero, one, or two
               character string.  A null string indicates that Ctrl-
               Break was pressed.  A one-character string indicates a
               normal ascii character was read from the keyboard.  A
               two-character string indicates a special extended
               keyboard code.  Refer to appendix B for a list of the
               extended keyboard codes.  The data type definition for
               DosKbdRead is an untyped variable using a minimum of
               three bytes.

See also       BiosKbdGetElmt, BiosKbdRead, DosKbdGetElmt

Example        Program TestDosKbdRead;
               Uses KeyBoard;
               Var
                  Ch : String;
               Begin
                  DosKbdRead(Ch);
                  Case Ch[1] Of
                     #00       : Writeln('Ctrl char pressed');
                     #27       : Writeln('Other key comb used');
                     #32..#127 : Writeln('Ascii pressed');
                  End;
               End.

               In this example any key or key combination that is read
               from the keyboard will be grouped into one of three
               categories.

               If Ch[1] is equal to the null byte and the length byte
               is equal to two, then one of the control characters
               (0-31) was pressed.  This includes the enter key,
               backspace, tab, and key combinations that use the
               control and an ACSII character A-Z.  If Ch[1] is equal
               to #27 then some other key combination was used,
               generally involving the alt key or control key with one
               of the function keys or cursor movement keys.  The
               string length will be two.  If Ch[1] is in the range
               #32..#127 then an ASCII character was pressed.  The
               length will also be one, where as in the other two
               possibilites the length will be two.

----------------------------------------------------------------------
SSGetKey                                                          Unit
----------------------------------------------------------------------

This unit contains one required function called GetKey.  The function
GetKey must return an integer that maps to an element number in
Appendix C.  The function GetKey is required for the video procedure
EditSt.  EditSt calls GetKey and expects a keyboard element number
to be returned in the ax register.  This function may do anything it
desires as long as the element number is returned.  A sample unit with
a core function called GetKey has been provided.

----------------------------------------------------------------------
GetKey                                                        Function
----------------------------------------------------------------------

Purpose        get a keystroke and map it into a keyboard element
               number for EditSt.

Delcaration    Function GetKey : Integer;

Remarks        This function may call other functions and procedures
               if it so desires.

Example        Unit GetKeyU;
               Interface
               uses Video,KeyBoard;

               Function GetKey : Integer;
               Var
                  i : Integer;
               Begin
                  While Not DosKbdHit Do Begin
                     i := BiosKbdStat;
                     FillRowChar(1,25,80,' ');
                     If (i And 16) <> 0 Then
                        ColorMsg(1,25,7,'Scroll');
                     If (i And 32) <> 0 Then
                        ColorMsg(8,25,7,'Num');
                     If (i And 64) <> 0 Then
                        ColorMsg(12,25,7,'Caps');
                     If (i And 128) <> 0 Then
                        ColorMsg(17,25,7,'Insert');
                  End;
                  GetKey := BiosKbdGetElmt;
               End;

               Begin
               end.

               This example polls the keyboard, gets the keyboard
               status byte and displays the status for four keys while
               a key has not been pressed.  Once a key has been
               pressed on the keyboard the BiosKbdGetElmt function is
               called to get the keyboard element number.

```
{% endraw %}

## CH4-1.DOC

{% raw %}
```
----------------------------------------------------------------------
BiosPrtChar                                                  Procedure
----------------------------------------------------------------------

Purpose        Send a character to the printer.

Declaration    Procedure BiosPrtChar(Ch : Char; PrtNo : Integer);

Parameters     Ch            is the character to be printed.

               PrtNo         integer expression representing the
                             number of the printer to print the
                             character to.

See also       BiosPrtStat, DosPrtChar

Example        Program PrtTest;
               Uses Prt;
               Var
                  i : Integer;
               Begin
                  For i := 1 To 80 Do
                     BiosPrtChar('A',1);
               End.

               Here PrtChar will print the letter A out to printer
               one 80 times.

----------------------------------------------------------------------
BiosPrtInit                                                   Function
----------------------------------------------------------------------

Purpose        Initialize the printer

Declaration    Function BiosPrtInit(PrtNo : Integer) : Integer;

Parameters     PrtNo         is an integer representing the number of
                             the printer to initialize.

Example        Program ExPrt;
               Uses Prt;
               Begin
                  If (BiosPrtInit(1) And 16) <> 0 Then
                     Writeln('Printer initialized');
               End.

               The printer that is hooked up to the first parallel port
               will be initialized.  (Refer to BiosPrtStatus for a
               description of the printer status byte).

----------------------------------------------------------------------
BiosPrtStatus                                                 Function
----------------------------------------------------------------------

Purpose        Returns the current status of the printer.

Declaration    Function BiosPrtStat(PrtNo : Integer) : Integer;

Parameters     PrtNo         is an integer representing the number of
                             the printer to check the status for.

Remarks        PrtStatus will return an integer giving the status of
               the printer using the following bit values.

               Bit     Value            Meaning
               ---   ---------   --------------------------
                0  -     1     - Time-out
                1  -     2     - Not used
                2  -     4     - Not used
                3  -     8     - I/O error
                4  -    16     - Printer selected
                5  -    32     - Out-of-paper signal
                6  -    64     - Acknowledgment from printer
                7  -   128     - Printer not busy

Example        If (BiosPrtStatus(1) And 128 Then
                  BiosPrtChar(1,'A');

               If printer one is not busy then the letter A will be
               sent out to printer one.

----------------------------------------------------------------------
DosPrtChar                                                   Procedure
----------------------------------------------------------------------

Purpose        Send a character to the printer.

Declaration    Procedure DosPrtChar(Ch : Char);

Parameters     Ch            is the character to be printed.

See also       BiosPrtChar, BiosPrtStat

Example        Program PrtTest;
               Uses Prt;
               Var
                  i : Integer;
               Begin
                  For i := 1 To 80 Do
                     DosPrtChar('A');
               End.

               Here PrtChar will print the letter A out to printer
               one 80 times.

```
{% endraw %}

## CH5-1.DOC

{% raw %}
```
----------------------------------------------------------------------
Global Type Declarations
----------------------------------------------------------------------

Type
   TFindRec = Record
                 Attr : Word;
                 Time : Word;
                 Date : Word;
                 Size : LongInt;
                 Name : String[12];
              End;

----------------------------------------------------------------------
Global Variable Declarations
----------------------------------------------------------------------
Var
   DosErrNo   : Integer;     receives the error code when an error has
                             occurred with one of routines in this
                             unit.

   CErrCode   : Integer;     the error code for critical errors.

   CErrType   : Integer1;    contains the type of device for the
                             critical error.
                             0 = Block device
                             1 = Character device

   CErrDrive  : Integer1;    contains the number of the disk drive
                             where the critical error occurred.  If
                             the critical error is not a disk drive
                             the value will then remain as -1.

   CErrDevice : String[8];   contains the name of the device in error.

----------------------------------------------------------------------
CloseFile                                                    Procedure
----------------------------------------------------------------------

Purpose        Closes a file and flush all file buffers for a file.

Declaration    Procedure CloseFile(Handle : Integer);

Parameters     Handle        integer expression that gives the handle
                             number of a file that was opened using
                             the OpenFile operation.

Remarks        If an error occurred DosErrNo will contain one of the
               following error codes.

               DosErrNo    Description
               -------- -------------------
                   6    Invalid file handle

Example        CloseFile(5);

               This example will close the file that is associate
               with handle number five.  If the close operation was
               successful DosErrNo will contain a zero, provided the
               variable was reset to zero after the last I/O error.
               If an error occurred DosErrNo should contain the value
               six.

----------------------------------------------------------------------
CreateFile                                                   Procedure
----------------------------------------------------------------------

Purpose        Opens an existing file or creates a new file if it does
               not exist.

Declaration    Procedure CreateFile(    Path   : String;
                                        Attr   : Integer;
                                    Var Handle : Integer);

Parameters     Path          is a string that contains the path and
                             filename of the file to be opened or
                             created.

               Attr          mode to set the file's attribute to.

               Handle        returns an integer that this file is
                             assoicated with for access.


Remarks        This operation will open a new or existing file for
               read/write access. CreateFile assumes that the file is
               opened as an output file and will set the length of any
               existing file to zero.  If any errors occur DosErrNo
               will have the error code.

               DosErrNo    Description
               -------- -------------------
                   3    Path not found
                   4    No handle available
                   5    Access denied
                   6    Invalid file handle

See also       OpenFile

Example        Program TestCreate;
               Uses Disk;
               Var
                  Handle : Integer;
               Begin
                  CreateFile('Newfile',32,Handle);
               End.

               If 'Newfile' exists in the current directory then
               CreateFile will open the file for output and assign a
               length of zero to the file.  If 'Newfile' does not
               exist then a new file will be created.  The variable
               handle will return an integer that is associated with
               the file 'Newfile'.  IOStatus will return a zero if the
               CreateFile operation was successful.

----------------------------------------------------------------------
DosFindFirst                                                 Procedure
----------------------------------------------------------------------

Purpose        Find the first file that matches the given filespec
               and attributes.

Declaration    Procedure DosFindFirst(    Path    : String;
                                          Attr    : Integer;
                                      Var FindRec : TFindRec);

Parameters     Path          is a string that contains the path and
                             filename of the file to be searched for.

               Attr          attributes of the files to include in the
                             file search

               FindRec       the result of the search is returned in
                             the variable of TFindRec.

                             TFindRec = Record
                                           Attr : Word;
                                           Time : Word;
                                           Date : Word;
                                           Size : LongInt;
                                           Name : String[12];
                                        End;

Remarks        This operation will search for the specified file.  The
               characters * and ? may be used for the filespec.  If
               any errors occur DosErrNo will have the error code.

               DosErrNo    Description
               -------- -------------------
                   2    Directory not found
                   3    Path not found
                  18    No more files

See also       DosFindNext

Example        Program TestDosFindFirst;
               Uses Disk;
               Var
                  Handle : Integer;
                  Rec    : TFindRec;
               Begin
                  DosFindFirst('*.PAS',32,Rec);
               End.

               This example will find the first occurrance of a file
               in the current directory that has the extension of
               "PAS".

----------------------------------------------------------------------
DosFindNext                                                  Procedure
----------------------------------------------------------------------

Purpose        Returns the next file entry that matches the filespec
               and attributes used in a previous call to DosFindFirst.

Declaration    Procedure DosFindNext(Var FindRec : TFindRec);

Parameters     FindRec       the result of the search is returned in
                             the variable of TFindRec.

                             TFindRec = Record
                                           Attr : Word;
                                           Time : Word;
                                           Date : Word;
                                           Size : LongInt;
                                           Name : String[12];
                                        End;

Remarks        DosFindNext must be called after DosFindFirst and before
               any other calls that transfer data into the DTA at the
               time of the call to DosFindFirst.

               DosErrNo    Description
               -------- -------------------
                  18    No more files

See also       DosFindFirst

Example        Program TestDosFindNext;
               Uses Disk;
               Var
                  Handle : Integer;
                  Rec    : TFindRec;
               Begin
                  DosFindFirst('*.PAS',32,Rec);
                  While DosErrorNo = 0 Do Begin
                     Writeln(Rec.Name);
                     DosFindNext(Rec);
                  End;
               End.

               This example will find the all occurrances of files in
               the current directory that have the extension of "PAS".

----------------------------------------------------------------------
FSeek                                                         Function
----------------------------------------------------------------------

Purpose        Change the logical read/write position of the file
               pointer.

Declaration    Function FSeek(Handle,
                              Orgin  : Integer;
                              Offset : LongInt) : LongInt;

Parameters     Handle        integer expression for any files handle
                             that was assigned to a file using the
                             OpenFile or CreateFile operaton.

               Orgin         integer expression that tells the starting
                             location to use when moving the file
                             pointer.

                             Method           Description
                             ------ --------------------------------
                              0     Start from the beginning of file
                              1     Start from current location of
                                    file pointer
                              2     Start from current EOF location

               Offset         gives the number of bytes to move the
                              file pointer.

Remarks        This operation will move the file pointer for the
               specified number of bytes given.  On return this
               function reports the number of bytes the file pointer
               is from the beginning of the file.  If any errors occur
               DosErrNo will have the error code.

               DosErrNo Description
               -------- -------------------
                   1    Invalid method code
                   6    Invalid file handle

Example        Program TestFSeek;
               Uses Disk;
               Var
                  Handle,Orgin : Integer;
                  Offset       : LongInt;
               Begin
                  Offset := 0;
                  OpenFile('File1.Dat',2,Handle);
                  If DosErrNo = 0 Then
                     FSeek(Handle,2,Offset);
               End.

               After executing FSeek zero bytes from the end of the
               file, which positions the file pointer at the end of
               the file, the variable Offset now contains a long
               integer of the file size in bytes.  On return from
               FSeek, the variable Offset will always contain the
               number of bytes the file pointer is offset from the
               beginning of the file.

----------------------------------------------------------------------
GetDrive                                                      Function
----------------------------------------------------------------------

Purpose        Reports the current default disk drive

Declaration    Function  GetDrive : Integer;

Remarks        Getdrive returns an integer to indicate which disk
               drive is the current default drive where:

                  Drive A = 1
                  Drive B = 2
                  Drive C = 3

Example        Writeln(GetDrive);

               The write statement will display the drive number of
               the current default disk drive.

----------------------------------------------------------------------
GetDTA                                                       Procedure
----------------------------------------------------------------------

Purpose        Returns the current disk transfer area

Declaration    Procedure GetDTA(Var Segment,Offset : Word);

Parameters     Segment       contains an integer that gives the
                             segment of the current DTA.

               Offset        contains an integer that gives the offset
                             of the current DTA.

Example        Program Example;
               Var
                  Segment,Offset,i : Integer;
               Begin
                  GetDTA(Segment,Offset);
                  For i := 0 To 127 Do
                     Write(Mem[Segment:Offset+i]);
               End.

               After the call to GetDTA the integer variables segment
               and offset will contain the Segment:Offset address for
               the current disk transfer area.  These values can be
               used to access the DTA information directly with the
               Mem array variable.

----------------------------------------------------------------------
GetFileSize                                                   Function
----------------------------------------------------------------------

Purpose        Report the number of bytes in a disk file.

Declaration    Function  GetFileSize(Handle : Integer) : LongInt;

Parameters     Handle        integer expression giving a file handle
                             that was assigned to a file using the
                             OpenFile or CreateFile operaton.

Remarks        GetNDrvs reports the total number of diskette and fixed
               disk drives installed for the current system.

Example        Writeln(GetNDrvs);

               In this example the write statement will display the
               numeric value for the current number of disk drives
               currently installed on the system.

----------------------------------------------------------------------
GetNDrvs                                                      Function
----------------------------------------------------------------------

Purpose        Report the number of disk drives.

Declaration    Function  GetNDrvs : Integer;

Remarks        GetNDrvs reports the total number of diskette and fixed
               disk drives installed for the current system.

Example        Program NDrives;
               Uses Disk;
               Begin
                  Writeln(GetNDrvs);
               End.

               In this example the write statement will display the
               numeric value for the current number of disk drives
               currently installed on the system.

----------------------------------------------------------------------
OpenFile                                                     Procedure
----------------------------------------------------------------------

Purpose        Open the file given in the string passed.

Declaration    Procedure OpenFile(    Path   : String;
                                      Attr   : Integer;
                                  Var Handle : Integer);

Parameters     Path          is a string that contains the path and
                             filename of the file to open.

               Attr          is an integer that defines the type of
                             access to be allowed for this file.

                             Access Code Description
                             ----------- ------------------
                                  0      Read Only access
                                  1      Write Only access
                                  2      Read/write access

               Handle        returns an integer that represents the
                             file handle that is associated with the
                             file given in Path.  The file handle is
                             to be used when any operations on the
                             file is to take place.

Remarks        If an error occurred DosErrNo will contain one of the
               following error codes.

               DosErrNo Description
               -------- -------------------
                   2    File not found
                   4    No handle available
                   5    access denied
                  12    invalid access code

See also       CreateFile

Example        Program Example;
               Uses Disk;
                  OpenFile('File.dat',0,Handle);
               End.

               On return from opening the file, if DosErrNo contains a
               zero, handle will contain the integer of the file
               handle for the file 'File.dat'.  The file is opened for
               read only access.

----------------------------------------------------------------------
ReadFile                                                     Procedure
----------------------------------------------------------------------

Purpose        Read a file or device for a specified number of bytes.

Declaration    Procedure ReadFile(    Handle,NBytes : Integer;
                                  Var Buffer                 ;
                                  Var RBytes        : Integer);

Parameters     Handle        integer expression that gives the file
                             handle assoicated with the appropriate
                             file or device for the read operation to
                             act on.

               NBytes        number of bytes to read from the file or
                             device.

               Buffer        untyped variable of the destination data
                             area.

               RBytes        returns the number of bytes actually read
                             from the file or device.  If RBytes is
                             zero then an attempt was made to read
                             from the end of a file.

Remarks        If an error occurred DosErrNo will contain one of the
               following error codes.

               DosErrNo Description
               -------- -------------------
                   5    Access denied
                   6    Invalid handle

Example        Program Test;
               Uses Disk;
               Var
                  Handle,
                  NBytes,RBytes,
                  Orgin,Offset  : Integer;
                  Buffer        : Array[1..128] Of Byte;
               Begin
                  Offset  := 0;
                  RBytes  := 0;
                  OpenFile('File.dat',0,Handle);
                  FSeek(Handle,0,Offset);
                  ReadFile(Handle,128,Buffer,RBytes);
               End.

               Assuming no errors occurred, 128 bytes will be read
               from the file and placed into the variable Buffer.  On
               return from ReadFile the variable RBytes will contain
               the actual number of bytes that were read from the file
               'File.dat'.  If RBytes is zero then an attempt to read
               past the end of the file occurred.

----------------------------------------------------------------------
ResetDisk                                                    Procedure
----------------------------------------------------------------------

Purpose        Resets the disk and flushes all file buffers.

Declaration    Procedure ResetDisk;

Remarks        This routine does not close any files.  To ensure that
               the length of a file is recorded properly in the file
               directory you should first close the file before using
               this routine.

----------------------------------------------------------------------
ResetErrCodes                                                Procedure
----------------------------------------------------------------------

Purpose        Resets global variables that indicate device errors to
               their initial settings.

Declaration    Procedure ResetErrCodes;

Remarks        The following variables are set as followings:
                  DosErrNo   =  0
                  CErrCode   =  0
                  CErrType   = -1
                  CErrDrive  = -1
                  CErrDevice = ''

See also       SetInt24

----------------------------------------------------------------------
RestInt24                                                    Procedure
----------------------------------------------------------------------

Purpose        Uninstalls this disk units critical interrupt error
               handler.

Declaration    Procedure RestInt24;

See also       SetInt24

Remarks        This procedure will uninstall the critical interrupt
               error handler that was installed with the SetInt24
               procedure.  This procedure uses the SegInt24 and
               OfsInt24 variables to restore the interrupt handler
               in use before the interrupt handler in this unit was
               installed.

----------------------------------------------------------------------
SetDTA                                                       Procedure
----------------------------------------------------------------------

Purpose        Set the file attribute for the file specified.

Declaration    Procedure SetDTA(Segment,Offset : Integer);

Parameters     Segment     is the segment address for the new DTA.

               Offset      is the offset within the segment of the new
                           DTA address.

Example        Program Example;
               Var
                  Buffer : Array[1..4096] Of Byte;
               Begin
                  SetDTA(Seg(Buffer),Ofs(Buffer));
               End.

               The new DTA will point to the data variable Buffer and
               all the information associated with the Disk Transfer
               Area will be placed in the data variable Buffer until
               the DTA is changed.

----------------------------------------------------------------------
SetInt24                                                     Procedure
----------------------------------------------------------------------

Purpose        Initializes the critical error handler routine and its
               global variables for use with your system.

Declaration    Procedure SetInt24;

Remarks        Only one call needs to made to this routine for a
               program that wants to use the critical error handler
               routine.  In the event of a critical error the
               variables DosErrNo, CErrCode, CErrType, CErrDrive and
               CErrDevice are set to the appropiate values.  Refer to
               the global variable section at the beginning of this
               chapter for a description of each variable name.

               The following are the I/O error values that are set in
               the CErrCode global variable.  These codes match the
               same codes DOS function 59h (Get Extended Error Code)
               return.  Notice that all values are hexadecimal.

               Error
               Code        Description
               ----- -------------------------------
                13   Write-protect error
                14   Unknown unit
                15   Disk drive not ready
                16   Unknown command
                17   Data error (bad CRC)
                18   A bad request structure length
                19   Data seek error
                1A   Unknown media type
                1B   Disk sector not found
                1C   Printer is out of paper
                1D   Write fault
                1E   Read fault
                1F   General failure

See also       ResetErrCodes, RestInt24

Example        Program Test;
               Uses Disk;
               Var
                  Handle : Integer;
               Begin
                  SetInt24;
                  CreateFile('A:File.dat',0,Handle);
                  If DosErrNo <> 0 Then Begin
                        Writeln('DosErrNo   = ',DosErrNo:1);
                        Writeln('CErrCode   = ',CErrCode:1);
                        Writeln('CErrType   = ',CErrType:1);
                        Writeln('CErrDrive  = ',CErrDrive:1);
                        Writeln('CErrDevice = ',CErrDevice:1);
                        ResetErrCodes;
                     End
                  Else Begin
                     Writeln('File Opened ok...');
                     Close(Handle);
                  End;
               End.

               If this program was executed with the A: drive door
               open, a critical error would occur.  On return from
               CreateFile the critical error variables should be
               set to the following values:

                  DosErrNo   = 3             Path not found
                  CErrCode   = 21            Disk drive not ready
                  CErrType   = 0             0=Block    1=Character
                  CErrDrive  = 0             Drive A=0, B=1, C=2, etc
                  CErrDevice = DISKETTE      Device name

----------------------------------------------------------------------
WriteFile                                                    Procedure
----------------------------------------------------------------------

Purpose        Write to a file or device for a specified number of
               bytes.

Declaration    Procedure WriteFile(    Handle,NBytes : Integer;
                                   Var Buffer                 ;
                                   Var WBytes        : Integer);

Parameters     Handle        is an integer that gives the file handle
                             that is assoicated with the appropriate
                             file or device for the read operation to
                             act on.

               NBytes        is the number of bytes to write to the
                             file or device.

               Buffer        is an untype variable that defines the
                             data area where the data is stored that
                             is to be written to a file or device.

               WBytes        returns the actual number of bytes that
                             were written out to the file or device.

Remarks        If an error occurred DosErrNo will contain one of the
               following error codes.

               DosErrNo    Description
               -------- -------------------
                   5    Access denied
                   6    Invalid handle
                  20    insufficent disk space


Example        WriteFile(Handle,NBytes,Buffer,WBytes);

               The file's handle that is associated with the value in
               the variable Handle is the file the contents of the
               variable Buffer will be written to.  The number of
               bytes written to the file is contained in NBytes.  The
               number of bytes actually written to the file will be
               returned in WBytes.

```
{% endraw %}

## CH6-1.DOC

{% raw %}
```
----------------------------------------------------------------------
Global Varibles
----------------------------------------------------------------------

NEvents        an integer that contains the number of events waiting
               in the mouse event handler queue.

----------------------------------------------------------------------
MButtonPress                                                  Function
----------------------------------------------------------------------

Purpose        Returns the current button status information.

Declaration    Function MButtonPress(    Button   : Integer;
                                     Var ButPress,
                                         X,
                                         Y        : Integer):Integer;

Parameters     Button        specifies the button to check.
                                0 - left button
                                1 - right button
                                2 - middle button

               ButPress      number of button presses since the last
                             call to MButtonPress.

               X             the column the mouse cursor was in the
                             last time the button was pressed.

               Y             the row the mouse cursor was in the last
                             time the button was pressed.

Remarks        MButtonPress will return an integer indicating the
               current state of the mouse button requested.
                  0 - Button is released
                  1 - Button is pressed

Example        Write('Status for the left button is ');
               Case MButtonPress(0,ButPress,X,Y) Of
                  0 : Writeln('UP');
                  1 : Writeln('DOWN');
               End;

----------------------------------------------------------------------
MButtonRel                                                    Function
----------------------------------------------------------------------

Purpose        Returns the current button status information.

Declaration    Function MButtonRel(    Button   : Integer;
                                   Var ButPress,
                                       X,
                                       Y        : Integer) : Integer;

Parameters     Button        specifies the button to check.
                                0 - left button
                                1 - right button
                                2 - middle button

               ButPress      number of button releases since the last
                             call to MButtonRel.

               X             the column the mouse cursor was in the
                             last time the button was released.

               Y             the row the mouse cursor was in the last
                             time the button was released.

Remarks        MButtonReleased will return an integer indicating the
               current state of the mouse button requested.
                  0 - Button is released
                  1 - Button is pressed

Example        Write('Status for the left button is ');
               Case MButtonRel(0,ButPress,X,Y) Of
                  0 : Writeln('UP');
                  1 : Writeln('DOWN');
               End;

----------------------------------------------------------------------
MGetPos                                                      Procedure
----------------------------------------------------------------------

Purpose        Returns the current button status and the location of
               the mouse cursor.

Declaration    Procedure MGetPos( Var ButStat,X,Y : Integer );

Parameters     Button        an integer returning the status of each
                             button by its corresponding bit value.
                             If a bit is 0 then that button is up.  If
                             a bit is 1 then that button is pressed.

                               Bit  Value  Button
                               ---  -----  -------------
                                0     1    left button
                                1     2    right button
                                2     4    middle button

               X             the column the mouse cursor is in.

               Y             the row the mouse cursor is in.

Remarks        In 80 column text mode the upper left corner of the
               screen is 1,1 and the lower right corner is 80,25.

Example        MGetPos( ButStat,X,Y );
               If ( ButStat And $01 )
                  Writeln('Left button is pressed');
               If ( ButStat And $02 )
                  Writeln('Right button is pressed');
               If ( ButStat And $04 )
                  Writeln('Middle button is pressed');
               Writeln('The cursor is located at ',X:1,',',Y:1);

----------------------------------------------------------------------
MGetSpeed                                                    Procedure
----------------------------------------------------------------------

Purpose        Returns the distance the mouse has moved since the
               last call to this routine.

Declaration    Procedure MGetSpeed( VAR HorCnt,VerCnt : Integer );

Parameters     HorCnt        an integer returning the horizontal step
                             count since the last call.

               VerCnt        an integer returning the vertical step
                             count since the last call.

Remarks        The step count is always in the range -32768 to 32767.
               A positive value specifies movements to the right and
               down while negative values specify movements to the
               left and up.  After the call is completed the step
               counts are reset to zero.

Example        MGetSpeed( HorCnt,VerCnt );
               If ( HorCnt > 0 ) Then
                  Writeln('Mouse moved to the right')
               Else If ( HorCnt < 0 ) Then
                  Writeln('Mouse moved to the left')
               Else
                  Writeln('Mouse did not move horizontally');

               This example will report the horizontal direction the
               mouse has moved since the last call to this routine.

----------------------------------------------------------------------
MGraphCursor                                                 Procedure
----------------------------------------------------------------------

Purpose        Defines the shape and color of the mouse cursor in when
               in graphics mode.

Declaration    Procedure MGraphCursor( XHotSpot, YHotSpot,
                                       CMaskSeg, CMaskOfs : Integer );

Parameters     XHotSpot      an integer in the range -16 to 16 used to
                             define the X pixel within or outside the
                             cursor block.

               YHotSpot      an integer in the range -16 to 16 used to
                             define the Y pixel within or outside the
                             cursor block.

               CMaskSeg      a word that contains the segment of the
                             cursor mask description variable.

               CMaskOfs      a word that contains the offset of the
                             cursor mask description variable.

Remarks        The cursor mask variable is two arrays of 16 words
               each.  The first 16 words define the screen mask and
               the second 16 words define the cursor mask.  Each
               array of 16 words defines the set of pixels that are
               16 x 16.

               The screen mask is used to determine which pixels
               become part of the cursor shape while the cursor mask
               is used to determine the color/shape of the cursor.

Example        Const
                  CMask : Array[1..32] Of Word = (
                                $ffff,$ffff,$ffff,$ffff,
                                $ffff,$ffff,$ffff,$ffff,
                                $ffff,$ffff,$ffff,$ffff,
                                $ffff,$ffff,$ffff,$ffff,

                                $ffff,$ffff,$f00f,$f00f,
                                $f00f,$f00f,$f00f,$f00f,
                                $f00f,$f00f,$f00f,$f00f,
                                $f00f,$f00f,$ffff,$ffff );


               MGraphCursor( -5, 5, Seg(CMask), Ofs(CMask) );

               The cursor defined by CMask will be a solid block with
               a smaller block inside being a different color.

----------------------------------------------------------------------
MHideCursor                                                  Procedure
----------------------------------------------------------------------

Purpose        Removes the mouse cursor from the screen.

Declaration    Procedure MHideCursor;

Parmeteres     None

Remarks        Although the mouse cursor is hidden from view its
               motion is still tracked.

Example        MHideCursor;

----------------------------------------------------------------------
MInitEventHandler                                            Procedure
----------------------------------------------------------------------

Purpose        Initializes the mouse interrupt event handler.

Declaration    Procedure MInitEventHandler( EMask : Word );

Parameters     EMask         a word defining the event types the mouse
                             event handler will place in its queue.

Remarks        Each bit in the event mask corresponds to a specific
               event:

               Bit     Value   Event
               ---     -----   ----------------------------------------
                0         1    cursor position moved
                1         2    left button pressed
                2         4    left button released
                3         8    right button pressed
                4        16    right button released
                5        32    middle button pressed
                6        64    middle button released
                7-15


Example        MInitEventHandler( 4 );

               In this example the only time an event is recorded in
               the event handler queue is when the left button of the
               mouse is released.  When this happens the global
               variable NEvents will be incremented.  The maximum
               number of events that is kept in the event queue at one
               time is 20.  MRetQue must be used to empty the queue.
               DO NOT change the value of NEvents as this may cause
               severe problems.

               When you have finished using the event handler you
               must uninstall the event handler with:

                         MInitEventHandler( 0 );

----------------------------------------------------------------------
MPollQue                                                     Procedure
----------------------------------------------------------------------

Purpose        Returns the oldest event in the mouse event queue
               disturbing the event queue.

Declaration    Procedure MPollQue( Event,
                                   ButStat,
                                   x,
                                   y        : Integer ) : Integer;

Parameters     Event         an integer describing the event that
                             occurred ( see MInitEventHandler ).

               ButStat       the button status at the time of this
                             event.

               X             the column the mouse cursor was located
                             in at the time of this event.

               Y             the row the mouse cursor was located in
                             at the time of this event.

Remarks        If the number of events in the queue is zero when this
               procedure is called the values in the return variables
               will be -1.  Use the global variable NEvents to
               determine if an event is in the queue.

Example        MPollQue( Event,ButStat,X,Y );

               In this example MPollQue is called to get the oldest
               event information without disturbing the event queue.

----------------------------------------------------------------------
MResetMouse                                                   Function
----------------------------------------------------------------------

Purpose        Determines if the mouse hardware and software are
               installed.

Declaration    Function  MResetMouse( NBut : Integer ) : Integer;

Parameters     Button        an integer returning the number of
                             buttons on the installed mouse.

Remarks        MResetMouse will return:
                  0 - Mouse hardware and software are not installed.
                 -1 - Mouse hardware and software are installed.

               Every call to MResetMouse will also reset the position
               of the mouse cursor to the middle of the video dispaly.


Example        If MResetMouse( NBut ) = 0 Then
                  Writeln('Mouse NOT installed on your computer')
               Else Begin
                  Writeln('You have a mouse in your computer');
                  Writeln('Squeak Squeak Squeak...');
               End;

----------------------------------------------------------------------
MRetQue                                                      Procedure
----------------------------------------------------------------------

Purpose        Returns the oldest event in the mouse event queue and
               removes the event from the queue.

Declaration    Procedure MRetQue( Event,
                                  ButStat,
                                  x,
                                  y        : Integer ) : Integer;

Parameters     Event         an integer describing the event that
                             occurred ( see MInitEventHandler ).

               ButStat       the button status at the time of this
                             event.

               X             the column the mouse cursor was located
                             in at the time of this event.

               Y             the row the mouse cursor was located in
                             at the time of this event.

Remarks        If the number of events in the queue is zero when this
               procedure is called the values in the return variables
               will be -1.  Use the global variable NEvents to
               determine if an event is in the queue.

Example        While NEvents > 0 Do
                  MRetQue( Event,ButStat,X,Y );

               In this example MRetQue is called until the mouse event
               queue is empty.

----------------------------------------------------------------------
MSetEvent                                                    Procedure
----------------------------------------------------------------------

Purpose        Simulates a mouse event.

Declaration    Function  MRetQue( Event, ButStat, x, y : Integer );

Parameters     Event         an integer describing the event that
                             should occur (see MInitEventHandler).

               ButStat       an integer describing the button status
                             for this event.

               X             an integer describing the column of the
                             mouse cursor for this event.

               Y             an integer describing the row of the
                             mouse for this event.

Remarks        If the number of events in the queue is less than the
               maximum number of events allowed in the queue then the
               event will be placed as the newest or last mouse event
               to occur.  All global and local variables used for this
               procedure will be updated exactly the same as if an
               actual mouse event had occurred.

Example        MSetEvent( 1, 0, 80, 25 );

               In this example MSetEvent will place in the mouse event
               queue an event that says the left button was pressed
               with the position of the mouse cursor being (80,25).

----------------------------------------------------------------------
MSetPos                                                      Procedure
----------------------------------------------------------------------

Purpose        Set the position of the mouse cursor.

Declaration    Procedure MSetPos( X,Y, Integer );

Parameters     X             column to put mouse cursor in

               Y             row to put mouse cursor in

Remarks        Checks for valid X and Y values are NOT performed.  In
               80 column text mode the upper left corner of the screen
               is 1,1 and the lower right corner is 80,25.

Example        MSetPos( 1, 1 );

               Assuming text mode this example will place the mouse
               cursor in row one column one of the display screen.

----------------------------------------------------------------------
MSetSpeed                                                    Procedure
----------------------------------------------------------------------

Purpose        Sets mouse motion to screen pixel ratio.

Declaration    Procedure MSetSpeed( HorCnt,VerCnt : Integer );


Parameters     HorCnt        integer giving the horizontal step ratio.
                             The value is in the range of 1 to 32767
                             where the ratio will be HorCnt steps to 8
                             pixels horizontally.

               VerCnt        integer giving the vertical step ratio.
                             The value is in the range of 1 to 32767
                             where the ratio will be VerCnt steps to 8
                             pixels vertically.

Remarks        The step values refer to the amount of mouse movement.

Example        MSetSpeed( 16, 8 );

               This example sets the ratios as follows:
                    Horizontal - 16 steps to 8 pixels
                    Vertical   - 8 steps to 8 pixels

----------------------------------------------------------------------
MSetXRange                                                   Procedure
----------------------------------------------------------------------

Purpose        Sets the column boundaries the mouse cursor will be
               allowed to move within.

Declaration    Procedure MSetXRange( Min,Max : Integer );


Parameters     Min           integer giving the left column boundary
                             of the mouse cursor and is less than Max.

               Max           integer giving the right column boundary
                             of the mouse cursor and is greater than
                             Min.

Remarks        Range checks are not performed on the parameters.


Example        MSetXRange( 10, 20 );

               In this example the mouse cursor will not be allowed to
               move to the left of column 10 and to the right of
               column 20.

----------------------------------------------------------------------
MSetYRange                                                   Procedure
----------------------------------------------------------------------

Purpose        Sets the row boundaries the mouse cursor will be
               allowed to move within.

Declaration    Procedure MSetYRange( Min,Max : Integer );


Parameters     Min           integer giving the top row boundary of
                             mouse cursor and is less than Max.

               Max           integer giving the bottom row boundary of
                             the mouse cursor and is greater than Min.

Remarks        Range checks are not performed on the parameters.

Example        MSetYRange( 3, 20 );

               In this example the mouse cursor will not be allowed to
               move above row 3 and below row 20.

----------------------------------------------------------------------
MShowCursor                                                  Procedure
----------------------------------------------------------------------

Purpose        Display the mouse cursor on the screen

Declaration    Procedure MShowCursor;


Parameters     None

Example        MShowCursor;

----------------------------------------------------------------------
MTextCursor                                                  Procedure
----------------------------------------------------------------------

Purpose        Defines the mouse text cursor

Declaration    Procedure MTextCursor( CType,SMask,CMask : Integer );

Parameters     CType         an integer that selects the type of mouse
                             cursor to use.
                                0 - software cursor
                                1 - hardware cursor

               SMask        if the software cursor is selected the
                            screen mask is defined.  If the hardware
                            cursor is selected the starting scan line
                            is defined.

               CMask        if the software cursor is selected the
                            the cursor mask is defined.  If the
                            hardware cursor is selected the ending
                            scan line is defined.

Remarks        The screen mask is an integer that defines which of the
               character attributes are preserved.  The cursor mask is
               used to determine which of the characteristics are
               changed by the cursor.

               See SetCursor Size in chapter two for a description of
               the starting and ending scan lines.

Example        MTextCursor( CType, SMask, CMask );

```
{% endraw %}

## CHA-1.DOC

{% raw %}
```
SUMMARY OF PROCEDURES AND FUNCTIONS

               SCREEN RELATED PROCEDURES AND FUNCTIONS

Global Types
   TSet = Set Of 0..255;

Global Variables
   VioMode    : Word;
   VioPage    : Word;
   VioCols    : Word;
   VioCursor  : Word;
   VioBaseSeg : Word;

Procedures
   Procedure BorderColor(Color : Integer);
   Procedure ClrWin(X1,Y1,X2,Y2,Attr : Integer);
   Procedure ColorMsg(X,Y,Attr : Integer; St : String);
   Procedure EditSt(    Row,
                        StCol,
                        SpCol,
                        Len,
                        CaseInd,
                        FillCh,
                        AutoSkipInd,
                        ErrTone,
                        ErrDur        : Integer;
                    Var VCSet,TCSet   : TSet;
                    Var ChOfs,TE      : Integer;
                    Var St            : String);

   Procedure FillColAttr(X,Y,NRows,Attr : Integer);
   Procedure FillColCell(X,Y,NRows : Integer; Cell : Word);
   Procedure FillColChar(X,Y,NRows : Integer; Ch : Char);
   Procedure FillFrameAttr(X1,Y1,X2,Y2,Attr : Integer);
   Procedure FillFrameCell(X1,Y1,X2,Y2 : Integer; Cell : Word);
   Procedure FillFrameChar(X1,Y1,X2,Y2 : Integer; Ch   : Char);
   Procedure FillRowAttr(X,Y,NBytes,Attr : Integer);
   Procedure FillRowCell(X,Y,NWords : Integer; Cell : Word);
   Procedure FillRowChar(X,Y,NBytes : Integer; Ch : Char);
   Procedure FrameWin(UL,UR,LL,LR,Hor,Ver : Char; Color : Integer);
   Procedure GetFrameAttr(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure GetFrameCell(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure GetFrameChar(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure GetScrn(X,Y,NWords : Integer;       Var Buffer );
   Procedure GetVideoInfo(Var Attr,BaseSeg,Cols,Pg,Mode : Word);
   Procedure GotoxyAbs(X,Y : Integer);
   Procedure InitVideo(Mode : Integer);
   Procedure PutFrameAttr(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure PutFrameCell(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure PutFrameChar(X1,Y1,X2,Y2 : Integer; Var Buffer );
   Procedure PutScrn(X,Y,NWords : Integer;       Var Buffer );
   Procedure RvsAttr;
   Procedure ScrollDown(X1,Y1,X2,Y2,Attr,NRows : Integer);
   Procedure ScrollLeft(X1,Y1,X2,Y2,Attr,NCols : Integer);
   Procedure ScrollRight(X1,Y1,X2,Y2,Attr,NCols : Integer);
   Procedure ScrollUp(X1,Y1,X2,Y2,Attr,NRows : Integer);
   Procedure SetCursorSize(StScan,SpScan : Integer);
   Procedure SetVideoPage(PageNo : Integer);
   Procedure VioInit;
   Procedure WriteSt(St : String);
   Procedure WriteStLn(St : String);

Functions
   Function  GetCursorSize : Word;
   Function  GetVideoCols  : Integer;
   Function  GetVideoMode  : Integer;
   Function  GetVideoPage  : Integer;
   Function  WhereXAbs     : Integer;
   Function  WhereYAbs     : Integer;



                  KEYBOARD PROCEDURES AND FUNCTIONS

Global Types
   Str2 = String[2];

Procedure
   Procedure BiosKbdClr;
   Procedure BiosKbdRead(Var St : Str2);
   Procedure DosKbdClr;
   Procedure DosKbdRead(Var St : Str2);

Function
   Function  BiosKbdGetElmt : Integer;
   Function  BiosKbdHit     : Boolean;
   Function  BiosKbdStat    : Integer;
   Function  DosKbdGetElmt  : Integer;
   Function  DosKbdHit      : Boolean;
                   PRINTER PROCEDURES AND FUNCTIONS

Procedure
   Procedure BiosPrtChar(Ch : Char; PrtNo : Integer);
   Procedure DosPrtChar(Ch : Char);

Function
   Function  BiosPrtInit(PrtNo : Integer) : Integer;
   Function  BiosPrtStat(PrtNo : Integer) : Integer;



                DISK AND FILE PROCEDURES AND FUNCTIONS

Global Variables
   DosErrNo   : Integer;
   CErrCode   : Integer;
   CErrType   : Integer;
   CErrDrive  : Integer;
   CErrDevice : String[8];

Procedure
   Procedure CloseFile(Handle : Integer);
   Procedure CreateFile(    Path   : String;
                            Attr   : Integer;
                        Var Handle : Integer);
   Procedure GetDTA(Var Segment,Offset : Word);
   Procedure OpenFile(    Path   : String;
                          Attr   : Integer;
                      Var Handle : Integer);
   Procedure ReadFile(    Handle,NBytes : Integer;
                      Var Buffer                 ;
                      Var RBytes        : Integer);
   Procedure ResetDisk;
   Procedure ResetErrCodes;
   Procedure RestInt24;
   Procedure SetDTA(Segment,Offset : Integer);
   Procedure SetInt24;
   Procedure WriteFile(    Handle,NBytes : Integer;
                       Var Buffer                 ;
                       Var WBytes        : Integer);

Function
   Function  FSeek(Handle,
                   Orgin  : Integer;
                   Offset : LongInt) : LongInt;
   Function  GetDrive : Integer;
   Function  GetNDrvs : Integer;
   Function  GetFileSize(Handle : Integer) : LongInt;



                       MOUSE PROCEDURES AND FUNCTIONS

Global Variables
   NEvents : Word;

Procedure
   Procedure MShowCursor;
   Procedure MHideCursor;
   Procedure MGetPos(Var ButStat,X,Y : Integer);
   Procedure MSetPos(X,Y : Integer);
   Procedure MSetXRange(Min,Max : Integer);
   Procedure MSetYRange(Min,Max : Integer);
   Procedure MGraphCursor(XHotSpot, YHotSpot,
                          CMaskSeg, CMaskOfs : Integer);
   Procedure MTextCursor(CType,SMask,CMask : Integer);
   Procedure MGetSpeed(Var HorCnt,VerCnt : Integer);
   Procedure MInitEventHandler(EMask : Word);
   Procedure MSetSpeed(HorCnt,VerCnt : Integer);
   Procedure MRetQue(Event,ButStat,x,y : Integer) : Integer;

Function
   Function  MResetMouse(NBut : Integer) : Integer;
   Function  MButtonPress(    Button       : Integer;
                          Var ButPress,X,Y : Integer) : Integer;
   Function  MButtonRel(    Button     : Integer;
                        Var ButRel,X,Y : Integer) : Integer;

```
{% endraw %}

## CHB-1.DOC

{% raw %}
```
                      KEYBOARD RETURN CODES

This appendix lists the keyboard codes for all the key combinations
for the entire keyboard, as they are seen by the procedure READKBD.
All keys are turned into either a one or two character code.

To understand the table below assume St is a two character string.
St[0] is the length of the character code returned.  If the length of
St is one then a normal ASCII character was pressed, otherwise an
extended code is generated.  Notice that some of the keyboard codes do
produce a two character code with the first character being null.

If the length of St is one then a normal ASCII character code was read
from the keyboard.  This basically covers the ASCII values 32-127.

If the length of St is two then one of the keys, that are usually used
for cursor control, was read from the keyboard.  If this is the case
then St[1] will be either a 0 or 27 depending on the key combination
read from the keyboard.

Use of the case statement works well with this type of setup to
determine which keyboard keys were read from the keyboard.

Case Ch[1] Of
   #00       : Writeln('Control code used.');
   #27       : Writeln('Control code used.');
   #32..#127 : Writeln('Printable code used.');
End;




Key                         Key
Pressed   CH[0] CH[1] CH[2] Pressed   CH[0] CH[1] CH[2]
--------- ----- ----- ----- --------- ----- ----- -----
(space)      1    32     0  &            1    38     0
!            1    33     0  '            1    39     0
"            1    34     0  (            1    40     0
#            1    35     0  )            1    41     0
$            1    36     0  *            1    42     0
%            1    37     0  +            1    43     0


Key                         Key
Pressed   CH[0] CH[1] CH[2] Pressed   CH[0] CH[1] CH[2]
--------- ----- ----- ----- --------- ----- ----- -----
,            1    44     0  S            1    83     0
-            1    45     0  T            1    84     0
.            1    46     0  U            1    85     0
/            1    47     0  V            1    86     0
0            1    48     0  W            1    87     0
1            1    49     0  X            1    88     0
2            1    50     0  Y            1    89     0
3            1    51     0  Z            1    90     0
4            1    52     0  [            1    91     0
5            1    53     0  \            1    92     0
6            1    54     0  ]            1    93     0
7            1    55     0  ^            1    94     0
8            1    56     0  _            1    95     0
9            1    57     0  `            1    96     0
:            1    58     0  a            1    97     0
;            1    59     0  b            1    98     0
<            1    60     0  c            1    99     0
=            1    61     0  d            1   100     0
>            1    62     0  e            1   101     0
?            1    63     0  f            1   102     0
@            1    64     0  g            1   103     0
A            1    65     0  h            1   104     0
B            1    66     0  i            1   105     0
C            1    67     0  j            1   106     0
D            1    68     0  k            1   107     0
E            1    69     0  l            1   108     0
F            1    70     0  m            1   109     0
G            1    71     0  n            1   110     0
H            1    72     0  o            1   111     0
I            1    73     0  p            1   112     0
J            1    74     0  q            1   113     0
K            1    75     0  r            1   114     0
L            1    76     0  s            1   115     0
M            1    77     0  t            1   116     0
N            1    78     0  u            1   117     0
O            1    79     0  v            1   118     0
P            1    80     0  w            1   119     0
Q            1    81     0  x            1   120     0
R            1    82     0  y            1   121     0



Key                         Key
Pressed   Ch[0] Ch[1] Ch[2] Pressed   Ch[0] Ch[1] Ch[2]
--------- ----- ----- ----- --------- ----- ----- -----
z            1   122     0  Alt-B        2    27    48
{            1   123     0  Alt-N        2    27    49
|            1   124     0  Alt-M        2    27    50
}            1   125     0  F1           2    27    59
~            1   126     0  F2           2    27    60
Ctrl-Break   2    27     0  F3           2    27    61
Esc          2    27     1  F4           2    27    62
Ctrl-2       2    27     3  F5           2    27    63
BackSp       2    27     8  F6           2    27    64
Tab          2    27     9  F7           2    27    65
Ctrl-Enter   2    27    10  F8           2    27    66
Enter        2    27    13  F9           2    27    67
Ctrl-BS      2    27    14  F10          2    27    68
Shft-Tab     2    27    15  Home         2    27    71
Alt-Q        2    27    16  UArr         2    27    72
Alt-W        2    27    17  PgUp         2    27    73
Alt-E        2    27    18  LArr         2    27    75
Alt-R        2    27    19  RArr         2    27    77
Alt-T        2    27    20  End          2    27    79
Alt-Y        2    27    21  DArr         2    27    80
Alt-U        2    27    22  PgDn         2    27    81
Alt-I        2    27    23  Ins          2    27    82
Alt-O        2    27    24  Del          2    27    83
Alt-P        2    27    25  Shft-F1      2    27    84
Alt-A        2    27    30  Shft-F2      2    27    85
Alt-S        2    27    31  Shft-F3      2    27    86
Alt-D        2    27    32  Shft-F4      2    27    87
Alt-F        2    27    33  Shft-F5      2    27    88
Alt-G        2    27    34  Shft-F6      2    27    89
Alt-H        2    27    35  Shft-F7      2    27    90
Alt-J        2    27    36  Shft-F8      2    27    91
Alt-K        2    27    37  Shft-F9      2    27    92
Alt-L        2    27    38  Shft-F10     2    27    93
Alt-Z        2    27    44  Ctrl-F1      2    27    94
Alt-X        2    27    45  Ctrl-F2      2    27    95
Alt-C        2    27    46  Ctrl-F3      2    27    96
Alt-V        2    27    47  Ctrl-F4      2    27    97



Key                         Key
Pressed   Ch[0] Ch[1] Ch[2] Pressed   Ch[0] Ch[1] Ch[2]
--------- ----- ----- ----- --------- ----- ----- -----
Ctrl-F5      2    27    98  Ctrl-F       2     0     6
Ctrl-F6      2    27    99  Ctrl-G       2     0     7
Ctrl-F7      2    27   100  Ctrl-H       2     0     8
Ctrl-F8      2    27   101  Ctrl-I       2     0     9
Ctrl-F9      2    27   102  Ctrl-J       2     0    10
Ctrl-F10     2    27   103  Ctrl-K       2     0    11
Alt-F1       2    27   104  Ctrl-L       2     0    12
Alt-F2       2    27   105  Ctrl-M       2     0    13
Alt-F3       2    27   106  Ctrl-N       2     0    14
Alt-F4       2    27   107  Ctrl-O       2     0    15
Alt-F5       2    27   108  Ctrl-P       2     0    16
Alt-F6       2    27   109  Ctrl-Q       2     0    17
Alt-F7       2    27   110  Ctrl-R       2     0    18
Alt-F8       2    27   111  Ctrl-S       2     0    19
Alt-F9       2    27   112  Ctrl-T       2     0    20
Alt-F10      2    27   113  Ctrl-U       2     0    21
Ctrl-LArr    2    27   115  Ctrl-V       2     0    22
Ctrl-RArr    2    27   116  Ctrl-W       2     0    23
Ctrl-End     2    27   117  Ctrl-X       2     0    24
Ctrl-PgDn    2    27   118  Ctrl-Y       2     0    25
Ctrl-Home    2    27   119  Ctrl-Z       2     0    26
Alt-1        2    27   120  Ctrl-[       2     0    27
Alt-2        2    27   121  Ctrl-\       2     0    28
Alt-3        2    27   122  Ctrl-]       2     0    29
Alt-4        2    27   123  Ctrl-6       2     0    30
Alt-5        2    27   124  Ctrl--       2     0    31
Alt-6        2    27   125
Alt-7        2    27   126
Alt-8        2    27   127
Alt-9        2    27   128
Alt-0        2    27   129
Alt--        2    27   130
Alt-=        2    27   131
Ctrl-PgUp    2    27   132
Ctrl-A       2     0     1
Ctrl-B       2     0     2
Ctrl-C       2     0     3
Ctrl-D       2     0     4
Ctrl-E       2     0     5

```
{% endraw %}

## CHC-1.DOC

{% raw %}
```
                      KEYBOARD ELEMENT CODES


This appendix lists the element codes for all the key combinations for
the entire keyboard, as they are seen by the procedures WAITMSG and
EDITST.  All keys are turned into an integer element code.

The Global type definition required for this table is:

    TSet = Set of 0..255;

The unit or element number in the set defines which key or key
combination was pressed.  This table was created for use as the
Terminating Character Set with the procedures EditSt and EditSt2.

Use the value in the column ELEMENT NUMBER to determine the element
number for a terminating key.


                   Element                    Element
Key code   AH   AL Number   Key code   AH  AL Number
--------- ---  --- -------  --------- --- --- -------
Ctrl-Break  0    0    0     Alt-K      37   0    37
Esc         1   27    1     Alt-L      38   0    38
                      2                          39
Ctrl-2      3    0    3                          40
                      4                          41
                      5                          42
                      6                          43
                      7     Alt-Z      44   0    44
BackSp     14    8    8     Alt-X      45   0    45
Tab        15    9    9     Alt-C      46   0    46
Ctrl-Enter 28   10   10     Alt-V      47   0    47
                     11     Alt-B      48   0    48
                     12     Alt-N      49   0    49
Enter      28   13   13     Alt-M      50   0    50
Ctrl-BS    14  127   14                          51
Shft-Tab   15    0   15                          52
Alt-Q      16    0   16                          53
Alt-W      17    0   17                          54
Alt-E      18    0   18                          55
Alt-R      19    0   19                          56
Alt-T      20    0   20                          57
Alt-Y      21    0   21                          58
Alt-U      22    0   22     F1         59   0    59
Alt-I      23    0   23     F2         60   0    60
Alt-O      24    0   24     F3         61   0    61
Alt-P      25    0   25     F4         62   0    62
                     26     F5         63   0    63
                     27     F6         64   0    64
                     28     F7         65   0    65
                     29     F8         66   0    66
Alt-A      30    0   30     F9         67   0    67
Alt-S      31    0   31     F10        68   0    68
Alt-D      32    0   32                          69
Alt-F      33    0   33                          70
Alt-G      34    0   34     Home       71   0    71
Alt-H      35    0   35     UArr       72   0    72
Alt-J      36    0   36     PgUp       73   0    73


                   Element                    Element
Key code   AH   AL Number   Key code   AH  AL Number
--------- ---  --- -------  --------- --- --- -------
                      74    Alt-F8    111   0   111
LArr       75    0    75    Alt-F9    112   0   112
                      76    Alt-F10   113   0   113
RArr       77    0    77                        114
                      78    Ctrl-LArr 115   0   115
End        79    0    79    Ctrl-RArr 116   0   116
DArr       80    0    80    Ctrl-End  117   0   117
PgDn       81    0    81    Ctrl-PgDn 118   0   118
Ins        82    0    82    Ctrl-Home 119   0   119
Del        83    0    83    Alt-1     120   0   120
Shft-F1    84    0    84    Alt-2     121   0   121
Shft-F2    85    0    85    Alt-3     122   0   122
Shft-F3    86    0    86    Alt-4     123   0   123
Shft-F4    87    0    87    Alt-5     124   0   124
Shft-F5    88    0    88    Alt-6     125   0   125
Shft-F6    89    0    89    Alt-7     126   0   126
Shft-F7    90    0    90    Alt-8     127   0   127
Shft-F8    91    0    91    Alt-9     128   0   128
Shft-F9    92    0    92    Alt-0     129   0   129
Shft-F10   93    0    93    Alt--     130   0   130
Ctrl-F1    94    0    94    Alt-=     131   0   131
Ctrl-F2    95    0    95    Ctrl-PgUp 132   0   132
Ctrl-F3    96    0    96
Ctrl-F4    97    0    97
Ctrl-F5    98    0    98
Ctrl-F6    99    0    99
Ctrl-F7   100    0   100
Ctrl-F8   101    0   101
Ctrl-F9   102    0   102
Ctrl-F10  103    0   103
Alt-F1    104    0   104
Alt-F2    105    0   105
Alt-F3    106    0   106
Alt-F4    107    0   107
Alt-F5    108    0   108
Alt-F6    109    0   109
Alt-F7    110    0   110


          AL+      Element            AL+     Element
Key code  132   AL Number   Key code  132  AL Number
--------- ---  --- -------  --------- --- --- -------
Ctrl-A    133    1   133    &         170  38    170
Ctrl-B    134    2   134    '         171  39    171
Ctrl-C    135    3   135    (         172  40    172
Ctrl-D    136    4   136    )         173  41    173
Ctrl-E    137    5   137    *         174  42    174
Ctrl-F    138    6   138    +         175  43    175
Ctrl-G    139    7   139    ,         176  44    176
Ctrl-H    140    8   140    -         177  45    177
Ctrl-I    141    9   141    .         178  46    178
Ctrl-J    142   10   142    /         179  47    179
Ctrl-K    143   11   143    0         180  48    180
Ctrl-L    144   12   144    1         181  49    181
Ctrl-M    145   13   145    2         182  50    182
Ctrl-N    146   14   146    3         183  51    183
Ctrl-O    147   15   147    4         184  52    184
Ctrl-P    148   16   148    5         185  53    185
Ctrl-Q    149   17   149    6         186  54    186
Ctrl-R    150   18   150    7         187  55    187
Ctrl-S    151   19   151    8         188  56    188
Ctrl-T    152   20   152    9         189  57    189
Ctrl-U    153   21   153    :         190  58    190
Ctrl-V    154   22   154    ;         191  59    191
Ctrl-W    155   23   155    <         192  60    192
Ctrl-X    156   24   156    =         193  61    193
Ctrl-Y    157   25   157    >         194  62    194
Ctrl-Z    158   26   158    ?         195  63    195
Ctrl-[    159   27   159    @         196  64    196
Ctrl-\    160   28   160    A         197  65    197
Ctrl-]    161   29   161    B         198  66    198
Ctrl-6    162   30   162    C         199  67    199
Ctrl--    163   31   163    D         200  68    200
(space)   164   32   164    E         201  69    201
!         165   33   165    F         202  70    202
"         166   34   166    G         203  71    203
#         167   35   167    H         204  72    204
$         168   36   168    I         205  73    205
%         169   37   169    J         206  74    206


          AL+      Element            AL+     Element
Key code  132   AL Number   Key code  132  AL Number
--------- ---  --- -------  --------- --- --- -------
K         207   75   207    p         244 112    244
L         208   76   208    q         245 113    245
M         209   77   209    r         246 114    246
N         210   78   210    s         247 115    247
O         211   79   211    t         248 116    248
P         212   80   212    u         249 117    249
Q         213   81   213    v         250 118    250
R         214   82   214    w         251 119    251
S         215   83   215    x         252 120    252
T         216   84   216    y         253 121    253
U         217   85   217    z         254 122    254
V         218   86   218    {         255 123    255
W         219   87   219
X         220   88   220
Y         221   89   221
Z         222   90   222
[         223   91   223
\         224   92   224
]         225   93   225
^         226   94   226
_         227   95   227
`         228   96   228
a         229   97   229
b         230   98   230
c         231   99   231
d         232  100   232
e         233  101   233
f         234  102   234
g         235  103   235
h         236  104   236
i         237  105   237
j         238  106   238
k         239  107   239
l         240  108   240
m         241  109   241
n         242  110   242
o         243  111   243

```
{% endraw %}

## CHD-1.DOC

{% raw %}
```
                       KEYBOARD CODES


This appendix lists the keyboard codes that are returned by the
computer system when a key or key combination is pressed.

The column headings AH and AL refer to the hi and lo registers within
the AX register.

These are the actual values returned by the BIOS interrupt 16H in
assemlby language.


Key                         Key
Pressed    AH    AL         Pressed    AH    AL
--------- ----- -----       --------- ----- -----
(space)     57    32        <           51    60
!            2    33        =           13    61
"           40    34        >           52    62
#            4    35        ?           53    63
$            5    36        @            3    64
%            6    37        A           30    65
&            8    38        B           48    66
'           40    39        C           46    67
(           10    40        D           32    68
)           11    41        E           18    69
*            9    42        F           33    70
+           13    43        G           34    71
,           51    44        H           35    72
-           12    45        I           23    73
.           52    46        J           36    74
/           53    47        K           37    75
0           11    48        L           38    76
1            2    49        M           50    77
2            3    50        N           49    78
3            4    51        O           24    79
4            5    52        P           25    80
5            6    53        Q           16    81
6            7    54        R           19    82
7            8    55        S           31    83
8            9    56        T           20    84
9           10    57        U           22    85
:           39    58        V           47    86
;           39    59        W           17    87

Key                         Key
Pressed    AH    AL         Pressed    AH    AL
--------- ----- -----       --------- ----- -----
X           48    88        Ctrl-2       3     0
Y           21    89        BackSp      14     8
Z           44    90        Tab         15     9
[           26    91        Ctrl-Enter  28    10
\           43    92        Enter       28    13
]           27    93        Shft-Tab    15     0
^            7    94        Alt-Q       16     0
_           12    95        Alt-W       17     0
`           41    96        Alt-E       18     0
a           30    97        Alt-R       19     0
b           48    98        Alt-T       20     0
c           46    99        Alt-Y       21     0
d           32   100        Alt-U       22     0
e           18   101        Alt-I       23     0
f           33   102        Alt-O       24     0
g           34   103        Alt-P       25     0
h           35   104        Esc          1    27
i           23   105        Alt-A       30     0
j           36   106        Alt-S       31     0
k           37   107        Alt-D       32     0
l           38   108        Alt-F       33     0
m           50   109        Alt-G       34     0
n           49   110        Alt-H       35     0
o           24   111        Alt-J       36     0
p           25   112        Alt-K       37     0
q           16   113        Alt-L       38     0
r           19   114        Alt-Z       44     0
s           31   115        Alt-X       45     0
t           20   116        Alt-C       46     0
u           22   117        Alt-V       47     0
v           47   118        Alt-B       48     0
w           17   119        Alt-N       49     0
x           48   120        Alt-M       50     0
y           21   121        F1          59     0
z           44   122        F2          60     0
{           26   123        F3          61     0
|           43   124        F4          62     0
}           27   125        F5          63     0
~           41   126        F6          64     0



Key                         Key
Pressed    AH    AL         Pressed    AH    AL
--------- ----- -----       --------- ----- -----
F7          65     0        Alt-F6     109     0
F8          66     0        Alt-F7     110     0
F9          67     0        Alt-F8     111     0
F10         68     0        Alt-F9     112     0
Home        71     0        Alt-F10    113     0
UArr        72     0        Ctrl-LArr  115     0
PgUp        73     0        Ctrl-RArr  116     0
LArr        75     0        Ctrl-End   117     0
RArr        77     0        Ctrl-PgDn  118     0
End         79     0        Ctrl-Home  119     0
DArr        80     0        Alt-1      120     0
PgDn        81     0        Alt-2      121     0
Ins         82     0        Alt-3      122     0
Del         83     0        Alt-4      123     0
Shft-F1     84     0        Alt-5      124     0
Shft-F2     85     0        Alt-6      125     0
Shft-F3     86     0        Alt-7      126     0
Shft-F4     87     0        Alt-8      127     0
Shft-F5     88     0        Alt-9      128     0
Shft-F6     89     0        Alt-0      129     0
Shft-F7     90     0        Alt--      130     0
Shft-F8     91     0        Alt-=      131     0
Shft-F9     92     0        Ctrl-PgUp  132     0
Shft-F10    93     0        Ctrl-A      30     1
Ctrl-F1     94     0        Ctrl-B      48     2
Ctrl-F2     95     0        Ctrl-C      46     3
Ctrl-F3     96     0        Ctrl-D      32     4
Ctrl-F4     97     0        Ctrl-E      18     5
Ctrl-F5     98     0        Ctrl-F      33     6
Ctrl-F6     99     0        Ctrl-G      34     7
Ctrl-F7    100     0        Ctrl-H      35     8
Ctrl-F8    101     0        Ctrl-I      23     9
Ctrl-F9    102     0        Ctrl-J      36    10
Ctrl-F10   103     0        Ctrl-K      37    11
Alt-F1     104     0        Ctrl-L      38    12
Alt-F2     105     0        Ctrl-M      50    13
Alt-F3     106     0        Ctrl-N      49    14
Alt-F4     107     0        Ctrl-O      24    15
Alt-F5     108     0        Ctrl-P      25    16



Key
Pressed    AH    AL
--------- ----- -----
Ctrl-Q      16    17
Ctrl-R      19    18
Ctrl-S      31    19
Ctrl-T      20    20
Ctrl-U      22    21
Ctrl-V      47    22
Ctrl-W      17    23
Ctrl-X      45    24
Ctrl-Y      21    25
Ctrl-Z      44    26
Ctrl-[      26    27
Ctrl-\      43    28
Ctrl-]      27    29
Ctrl-6       7    30
Ctrl--      12    31
Ctrl-BS     14   127
Ctrl-Break   0     0

```
{% endraw %}

## CHE-1.DOC

{% raw %}
```
                     KEYBOARD SCAN CODES


                     FUNCTION KEYS

         Scan |      Scan |      Scan |      Scan |
    Key  Code | Key  Code | Key  Code | Key  Code |
    ---  ---- | ---  ---- | ---  ---- | ---  ---- |
     F1    59 |  F4    62 |  F7    65 | F10   68  |
     F2    60 |  F5    63 |  F8    66 |           |
     F3    61 |  F6    64 |  F9    67 |           |


                    NUMERIC KEYPAD

         Scan |      Scan |      Scan |      Scan |
    Key  Code | Key  Code | Key  Code | Key  Code |
    ---  ---- | ---  ---- | ---  ---- | ---  ---- |
     7    71  |  4    76  |  1    79  |  .    83  |
     8    72  |  5    76  |  2    80  |           |
     9    73  |  6    77  |  3    81  |           |
     -    74  |  +    78  |  0    82  |           |


                     CONTROL KEYS

                      Scan |              Scan
         Key          Code | Key          Code
         ---          ---- | ---          ----
         Esc            1  | Ctrl          29
         Backspace     14  | Left Shft     42
         Num Lock      69  | Right Shft    54
         Scroll Lock   70  | Alt           56
         Tab           15  | Caps Lock     58
         Enter         28  |


         LETTER, NUMBER, AND PUNCTUATION KEYS

        Scan |      Scan |      Scan |         Scan
   Key  Code | Key  Code | Key  Code | Key     Code
   ---  ---- | ---  ---- | ---  ---- | ---     ----
    1     2  |  W    17  |  D    32  |  C       46
    2     3  |  E    18  |  F    33  |  V       47
    3     4  |  R    19  |  G    34  |  B       48
    4     5  |  T    20  |  H    35  |  N       49
    5     6  |  Y    21  |  J    36  |  M       50
    6     7  |  U    22  |  K    37  |  ,       51
    7     8  |  I    23  |  L    38  |  .       52
    8     9  |  O    24  |  ;    39  |  /       53
    9    10  |  P    25  |  '    40  |  (PrtSc) 55
    0    11  |  [    26  |  `    41  |  (Space) 57
    -    12  |  ]    27  |  \    43  |
    =    13  |  A    30  |  Z    44  |
    Q    16  |  S    31  |  X    45  |

```
{% endraw %}

## FILE1247.TXT

{% raw %}
```
Disk No: 1247
Program Title:  TURBO ENHANCEMENT TOOLKIT FOR PASCAL
PC-SIG version: 1.0

For programmers who like Turbo Pascal but avoid it because its difficult
to reach "the heart of the machine", here is an invaluable collection of
low-level procedures, including routines for video, printer, disk,
keyboard, and mouse control that are not included in the standard
library.

The TOOLKIT enables true BIOS access from video pages to printer status
bits, which is difficult to obtain in Turbo Pascal.  Best of all, this
library includes mouse functions for polling and controlling a mouse,
making professional, user-friendly programs a whole lot easier to
create.  Written in assembly language, it's fast and compact.

Usage:  Pascal Programming Tools.

Special Requirements:  Turbo Pascal Ver 4.0 & 5.0

How to Start:  Type GO (press ENTER).

Suggested Registration:  $30.00 library, additional $25.00 for source
code.

File Descriptions:

TP4      <DIR> Turbo 4.0 Units.
TP5      <DIR> Turbo 5.0 Units.
CH0-1    DOC   Documentation file.
CH1-1    DOC   Documentation file.
CH2-1    DOC   Documentation file.
CH2-2    DOC   Documentation file.
CH3-1    DOC   Documentation file.
CH4-1    DOC   Documentation file.
CH5-1    DOC   Documentation file.
CH6-1    DOC   Documentation file.
CHA-1    DOC   Documentation file.
CHB-1    DOC   Documentation file.
CHC-1    DOC   Documentation file.
CHD-1    DOC   Documentation file.
CHE-1    DOC   Documentation file.
DEMO     PAS   Pascal source code file.
KBDDEMO  PAS   Pascal source code file.
PRTDEMO  PAS   Pascal source code file.
SSGETKEY PAS   Pascal source code file.
VIODEMO  PAS   Pascal source code file.
DEMO     EXE   Demo program
MANUAL   BAT   Batch file to copy documentation to your printer.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk No 1247  TURBO ENHANCEMENT TOOLKIT FOR PASCAL  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press manual)                                       ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             DEMO (press enter)                                          ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1247

     Volume in drive A has no label
     Directory of A:\

    SSGETKEY PAS     10915   9-12-88  10:01p
    CH0-1    DOC     18341  11-15-88  11:33p
    CH1-1    DOC      2474  11-05-88  10:58p
    CH2-1    DOC     44746  11-05-88  10:58p
    CH2-2    DOC     39175  11-05-88  10:58p
    CH3-1    DOC     17240  11-05-88  10:58p
    CH4-1    DOC      3910  11-05-88  10:58p
    CH5-1    DOC     27662  11-05-88  10:58p
    CH6-1    DOC     22528  11-05-88  10:58p
    CHA-1    DOC      6016  11-05-88  10:58p
    CHB-1    DOC      8293  11-05-88  10:58p
    CHC-1    DOC      8124  11-05-88  10:58p
    CHD-1    DOC      6488  11-05-88  10:58p
    CHE-1    DOC      2118  11-05-88  10:58p
    VIODEMO  PAS     30993  11-05-88  10:12p
    KBDDEMO  PAS      3330   7-09-88  10:30a
    PRTDEMO  PAS      2356   7-09-88  10:30a
    DEMO     PAS     16156  11-03-88   8:35p
    DEMO     EXE     17504  11-05-88  10:17p
    FILE1247 TXT      1908   1-13-89  10:30a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-14-88   8:22a
    MANUAL   BAT       147   6-08-88   3:02p
    TP4          <DIR>    
    TP5          <DIR>    
           25 file(s)     291464 bytes

     Directory of A:\TP4

    .            <DIR>    
    ..           <DIR>    
    SSDISK   TPU      3120  11-05-88  10:18p
    SSDOS    TPU       400   9-12-88  10:01p
    SSGETKEY TPU      1232   9-12-88  10:01p
    SSKBD    TPU      1152   9-12-88  10:01p
    SSMOUSE  TPU      2784  11-03-88   7:28a
    SSPRT    TPU       640   9-12-88  10:01p
    SSVIDEO  TPU     11872   9-12-88  10:01p
            9 file(s)      21200 bytes

     Directory of A:\TP5

    .            <DIR>    
    ..           <DIR>    
    SSDISK   TPU      3296  11-02-88   9:56p
    SSDOS    TPU       400  11-02-88   9:56p
    SSGETKEY TPU      1312  11-02-88   9:56p
    SSKBD    TPU      1216  11-02-88   9:56p
    SSMOUSE  TPU      3680  11-03-88   8:33p
    SSPRT    TPU       672  11-02-88   9:56p
    SSVIDEO  TPU     12800  11-02-88   9:57p
            9 file(s)      23376 bytes

    Total files listed:
           43 file(s)     336040 bytes
                            4096 bytes free
