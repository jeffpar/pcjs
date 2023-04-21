---
layout: page
title: "PC-SIG Diskette Library (Disk #1268)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1268/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1268"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CH0-1.DOC

{% raw %}
```







         ========================================================
         =                                                      =
         =              TURBO ENHANCEMENT TOOLKIT               =
         =                                                      =
         =                         For                          =
         =                                                      =
         =                          C                           =
         =                                                      =
         =                     User's Guide                     =
         =                                                      =
         =                     Version 3.0                      =
         =                                                      =
         = (C) Copyright 1986, 1987, 1988 - All Rights Reserved =
         =                                                      =
         ========================================================













                              SimpleSoft Inc.
                             922 Green Bay St
                            Onalaska, WI  54650
                              (608) 783-6807





                             Licence Agreement


The material described herein is copyrighted LICENSED MATERIAL and the
property of SimpleSoft Inc.

This material is being distributed as a Shareware product.  You are
encouraged to copy and distribute the product, except assembly language
source code, with your friends and associates, provided you do not charge
any fee.  If you decide to use this product, you are urged to become a
registered user.

Under no circumstances may this product be sold without the express written
permission of SimpleSoft Inc. The material is being provided "AS IS"
without warranty of any kind, either expressed or implied. The entire risk
as to quality and performance of this material with you.  In no event shall
SimpleSoft Inc be liable to you for any damages including any lost profits,
lost savings or other incidental or consequential damages arising out of
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








Microsoft C is a trademark of Microsoft Corporation
Turbo C is a trademark of Borland International

                      Turbo Enhancement Toolkit
                          Registration Form
                                For C



Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

Turbo Enhancement ToolKit Version 3.00 - U-30010004-C

Payment for Registered Turbo Enhancement Tookit manual, software and
distribution diskette:


Send _______ copies at $25.00 each ___________._______


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

Turbo Enhancement ToolKit Version 3.00 For C
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

Turbo Enhancement ToolKit Version 3.00 For C
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
       Global Variables..........................  2-1
       BorderColor...............................  2-2
       ClrWin....................................  2-3
       ColorMsg..................................  2-4
       DspMsg....................................  2-6
       EditSt....................................  2-7
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
       GetVideoCols..............................  2-27
       GetVideoInfo..............................  2-28
       GetVideoMode..............................  2-29
       GetVideoPage..............................  2-30
       GotoxyAbs.................................  2-31
       InitVideo.................................  2-32
       PutFrameAttr..............................  2-33
       PutFrameCell..............................  2-34
       PutFrameChar..............................  2-35
       PutScrn...................................  2-36
       RvsAttr...................................  2-38
       ScrollDown................................  2-39
       ScrollLeft................................  2-41
       ScrollRight...............................  2-43
       ScrollUp..................................  2-45
       SetCursorSize.............................  2-47
       SetVideoPage..............................  2-49
       VioInit...................................  2-50
       WhereXAbs.................................  2-51
       WhereYAbs.................................  2-52
       Window....................................  2-53
       WriteSt...................................  2-54
       WriteStLn.................................  2-55

    CHAPTER 3 - KEYBOARD PROCEDURES AND FUNCTIONS
       BiosKbdClr................................  3-1
       BiosKbdGetElmt............................  3-2
       BiosKbdHit................................  3-3
       BiosKbdRead...............................  3-4
       BiosKbdStat...............................  3-6
       DosKbdClr.................................  3-8
       DosKbdGetElmt.............................  3-9
       DosKbdHit.................................  3-10
       DosKbdRead................................  3-11
       GetKey....................................  3-13

    CHAPTER 4 - PRINTER PROCEDURES AND FUNCTIONS
       BiosPrtChar...............................  4-1
       BiosPrtInit...............................  4-2
       BiosPrtStat...............................  4-3
       DosPrtChar................................  4-4

    CHAPTER 5 - DISK PROCEDURES AND FUNCTIONS
       Global Structures.........................  5-1
       Global Varibles...........................  5-1
       CloseFile.................................  5-2
       CreateFile................................  5-3
       DosFindFirst..............................  5-5
       DosFindNext...............................  5-6
       FSeek.....................................  5-7
       GetDrive..................................  5-9
       GetDTA....................................  5-10
       GetFileSize...............................  5-11
       GetNDrvs..................................  5-12
       OpenFile..................................  5-13
       ReadFile..................................  5-15
       ResetDisk.................................  5-16
       ResetErrCodes.............................  5-17
       RestInt24.................................  5-18
       SetDTA....................................  5-19
       SetInt24..................................  5-20
       WriteFile.................................  5-22

    CHAPTER 6 - MOUSE PROCEDURES AND FUNCTIONS
       Global Varibles...........................  6-1
       MButtonPress..............................  6-2
       MButtonRel................................  6-4
       MGetPos...................................  6-6
       MGetSpeed.................................  6-7
       MGraphCursor..............................  6-8
       MHideCursor...............................  6-9
       MInitEventHandler.........................  6-10
       MPollQue..................................  6-11
       MResetMouse...............................  6-12
       MRetQue...................................  6-13
       MSetEvent.................................  6-14
       MSetPos...................................  6-15
       MSetSpeed.................................  6-16
       MSetXRange................................  6-17
       MSetYRange................................  6-18
       MShowCursor...............................  6-19
       MTextCursor...............................  6-20

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

## FILE1268.TXT

{% raw %}
```
Disk No: 1268
Program Title: TURBO ENHANCEMENT TOOLKIT FOR C
PC-SIG version: 1

Enhance your C programming with TURBO ENHANCEMENT TOOLKIT FOR C. The
package includes BIOS level mouse, keyboard, printer, video, and disk
functions for Borland Turbo C or Microsoft C.

Few available libraries are as complete as TURBO ENHANCEMENT TOOLKIT;
none at even three times its price offer mouse utilities.  Video
functions are another strong point.  In addition to windowing and
scrolling are direct video memory access and extensive string I/O.  All
routines are compact (using the Pascal "far" calling convention to save
stack space), fast, and well documented for easy integration.  This
package will save a C programmer hours of coding and will help to
produce error-free output.

Usage:  C Programming Tools.

Special Requirements:  Microsoft or Turbo C.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 library, additional $25.00 for source
code.

File Descriptions:

DEMO     EXE  Demonstration program.
SSCTOOLS LIB  Toolkit Library.
CH0-1    DOC  Documentation.
CH1-1    DOC  Documentation.
CH2-1    DOC  Documentation.
CH2-2    DOC  Documentation.
CH3-1    DOC  Documentation.
CH4-1    DOC  Documentation.
CH5-1    DOC  Documentation.
CH6-1    DOC  Documentation.
CHA-1    DOC  Documentation.
CHB-1    DOC  Documentation.
CHC-1    DOC  Documentation.
CHD-1    DOC  Documentation.
CHE-1    DOC  Documentation.
DEMO     C    Sample source code.
KBDDEMO  C    Sample source code.
PRTDEMO  C    Sample source code.
SSGETKEY C    Sample source code.
VIODEMO  C    Sample source code.
SSCTOOLS H    Toolkit header file.
DEMO     PRJ  Sample Turbo C project file.
KBDDEMO  PRJ  Sample Turbo C project file.
PRTDEMO  PRJ  Sample Turbo C project file.
VIODEMO  PRJ  Sample Turbo C project file.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1268

     Volume in drive A has no label
     Directory of A:\

    SSGETKEY C          86   9-12-88  10:01p
    SSCTOOLS H        6910   9-12-88  10:01p
    SSCTOOLS LIB     31967   9-12-88  10:01p
    CH0-1    DOC     18806  11-15-88  11:33p
    CH1-1    DOC      3778  11-05-88  10:58p
    CH2-1    DOC     32018  11-05-88  10:58p
    CH2-2    DOC     26927  11-05-88  10:58p
    CH3-1    DOC     11567  11-05-88  10:58p
    CH4-1    DOC      2713  11-05-88  10:58p
    CH5-1    DOC     18905  11-05-88  10:58p
    CH6-1    DOC     16782  11-05-88  10:58p
    CHA-1    DOC      5229  11-05-88  10:58p
    CHB-1    DOC      8275  11-05-88  10:58p
    CHC-1    DOC     11941  11-05-88  10:58p
    CHD-1    DOC      6407  11-05-88  10:58p
    CHE-1    DOC      2492  11-05-88  10:58p
    VIODEMO  C       33783   9-12-88  10:00p
    VIODEMO  PRJ        56   9-12-88  10:00p
    KBDDEMO  C        4243   9-12-88  10:00p
    KBDDEMO  PRJ        56   9-12-88  10:00p
    PRTDEMO  C        2727   9-12-88  10:00p
    PRTDEMO  PRJ        36   9-12-88  10:00p
    DEMO     C       16440  11-04-88  10:47p
    DEMO     PRJ        59  11-02-88   9:26p
    DEMO     EXE     33052  11-04-88  10:48p
    FILE1268 TXT      1967   1-16-89  12:58p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-14-88  12:28p
    MANUAL   BAT       147   6-08-88   3:02p
           29 file(s)     298409 bytes
                            5120 bytes free
