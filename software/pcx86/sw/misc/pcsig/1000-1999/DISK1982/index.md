---
layout: page
title: "PC-SIG Diskette Library (Disk #1982)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1982/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1982"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHPAC PASCAL LIB 1 OF 2 (2093 ALSO)"

    These low level Turbo Pascal routines access the video display,
    keyboard, printer, disk, mouse devices, and a couple of DOS functions.
    These routines are not intended to replace the standard features of
    Turbo Pascal, but add to and extend the Turbo Pascal programming
    environment for the MS-DOS operating system.
    
    To simplify the use of these routines, the number of global variables
    needed for this library has been kept to a minimum.  All functions in
    the library were written in Assembly language using the Pascal
    parameter passing conventions.
    
    FPDISK supports several DOS function calls that use byte streams when
    accessing disk files.  FPKBD supports BIOS and DOS keyboard function
    calls.  FPMOUSE supports basic mouse functions, including a mouse event
    handler.  FPPRT supports BIOS printer functions.  FPVIDEO consists of
    several video routines that provide direct access to the video display.
    Routines include saving and restoring the screen, framing windows,
    setting the absolute position of the cursor, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CH0_1.DOC

{% raw %}
```







       ========================================================
       =                                                      =
       =               FLASHPAC Pascal Library                =
       =                                                      =
       =                     User's Guide                     =
       =                                                      =
       =                     Version 3.21                     =
       =                                                      =
       =    (C) Copyright 1986-1990 - All Rights Reserved     =
       =                                                      =
       ========================================================
















                            SimpleSoft Inc
                            1209 Poplar St
                        La Crescent, MN 55947
                            (507) 895-8237
..page
                          Licence Agreement


The material described herein is copyrighted LICENSED MATERIAL and the
property of SimpleSoft Inc.

This material is being distributed as a Shareware product.  You are
encouraged to copy and distribute this product with your friends and
associates, provided you do not charge any fee.  If you decide to use
this product, you are urged to become a registered user.

Under no circumstances may this product be sold without the express
written permission of SimpleSoft Inc.

The material is being provided "AS IS" without warranty of any kind,
either expressed or implied.  The entire risk as to quality and
performance of this material lies with you.  In no event shall
SimpleSoft Inc be liable to you for any damages including any lost
profits, lost savings or other incidental or consequential damages
arising out of the use of this material even if we have been advised
of the possibility of such damages or any claim by any other party.

Use of this product indicates your acceptance of these terms and
conditions.


                        Registration Benefits

1. Receive a new distribution diskette with your registration number

2. One free major update  ( diskette with manual on disk ).

3. Documented source code.


Turbo Pascal is a trademark of Borland International
..page
                       FlashPac Pascal Library
                          Registration Form


Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

FlashPac Version 3.21 - D-3001004

Payment for Registered FlashPac software and distribution diskette:


Registration for FlashPac Pascal Library $50.00 ___________._______

                                          TOTAL ___________._______


[ ] Check enclosed   [ ] Money order enclosed





                            SimpleSoft Inc
                            1209 Poplar St
                        La Crescent, MN 55947
                            (507) 895-8237
..page
                            SimpleSoft Inc
                            1209 Poplar St
                        La Crescent, MN 55947
                            (507) 895-8237



                           PRODUCT FEEDBACK

Help us make our product better by completing and returning this form.
Your feedback will help us to improve future releases of this product.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

FlashPac Version 3.21
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Please rate the usefullness (U) and ease of use (E) for each routine
on a scale of 1 to 5 where 1 is poor, 3 is average and 5 is excellent.


                                VIDEO

 U   E                                     Comments
___ ___  BorderColor        _____________________________________
___ ___  ClrWin             _____________________________________
___ ___  ColorMsg           _____________________________________
___ ___  DspMsg             _____________________________________
___ ___  EditSt             _____________________________________
___ ___  FillColAttr        _____________________________________
___ ___  FillColCell        _____________________________________
___ ___  FillColChar        _____________________________________
___ ___  FillFrameAttr      _____________________________________
___ ___  FillFrameCell      _____________________________________
___ ___  FillFrameChar      _____________________________________
___ ___  FillRowAttr        _____________________________________
___ ___  FillRowCell        _____________________________________
___ ___  FillRowChar        _____________________________________
___ ___  FrameWin           _____________________________________
___ ___  GetCursorSize      _____________________________________
___ ___  GetFrameAttr       _____________________________________
___ ___  GetFrameCell       _____________________________________
___ ___  GetFrameChar       _____________________________________
___ ___  GetScrn            _____________________________________
..page
___ ___  GetVideoCols       _____________________________________
___ ___  GetVideoInfo       _____________________________________
___ ___  GetVideoMode       _____________________________________
___ ___  GetVideoPage       _____________________________________
___ ___  GotoxyAbs          _____________________________________
___ ___  HideCursor         _____________________________________
___ ___  InitVideo          _____________________________________
___ ___  PutFrameAttr       _____________________________________
___ ___  PutFrameCell       _____________________________________
___ ___  PutFrameChar       _____________________________________
___ ___  PutScrn            _____________________________________
___ ___  RvsAttr            _____________________________________
___ ___  ScrollDown         _____________________________________
___ ___  ScrollLeft         _____________________________________
___ ___  ScrollRight        _____________________________________
___ ___  ScrollUp           _____________________________________
___ ___  SetCursorSize      _____________________________________
___ ___  SetVideoPage       _____________________________________
___ ___  ShowCursor         _____________________________________
___ ___  VioInit            _____________________________________
___ ___  WhereXAbs          _____________________________________
___ ___  WhereYAbs          _____________________________________
___ ___  WriteSt            _____________________________________
___ ___  WriteStLn          _____________________________________



                               KEYBOARD

___ ___  BiosKbdClr         _____________________________________
___ ___  BiosKbdGetElmt     _____________________________________
___ ___  BiosKbdHit         _____________________________________
___ ___  BiosKbdRead        _____________________________________
___ ___  BiosKbdStat        _____________________________________
___ ___  DosKbdClr          _____________________________________
___ ___  DosKbdGetElmt      _____________________________________
___ ___  DosKbdHit          _____________________________________
___ ___  DosKbdRead         _____________________________________



                               PRINTER

___ ___  BiosPrtChar        _____________________________________
___ ___  BiosPrtInit        _____________________________________
___ ___  BiosPrtStat        _____________________________________
___ ___  DosPrtChar         _____________________________________
..page
                                 DISK

___ ___  CloseFile          _____________________________________
___ ___  CreateFile         _____________________________________
___ ___  DosFindFirst       _____________________________________
___ ___  DosFindNext        _____________________________________
___ ___  FSeek              _____________________________________
___ ___  GetDrive           _____________________________________
___ ___  GetDTA             _____________________________________
___ ___  GetFileSize        _____________________________________
___ ___  GetNDrvs           _____________________________________
___ ___  OpenFile           _____________________________________
___ ___  ReadFile           _____________________________________
___ ___  ResetDisk          _____________________________________
___ ___  ResetErrCodes      _____________________________________
___ ___  RestInt24          _____________________________________
___ ___  SetDTA             _____________________________________
___ ___  SetInt24           _____________________________________
___ ___  WriteFile          _____________________________________



                                MOUSE

___ ___  MButtonPress       _____________________________________
___ ___  MButtonRel         _____________________________________
___ ___  MGetPos            _____________________________________
___ ___  MGetSpeed          _____________________________________
___ ___  MGraphCursor       _____________________________________
___ ___  MHideCursor        _____________________________________
___ ___  MInitEventHandler  _____________________________________
___ ___  MResetMouse        _____________________________________
___ ___  MRetQue            _____________________________________
___ ___  MSetPos            _____________________________________
___ ___  MSetSpeed          _____________________________________
___ ___  MSetXRange         _____________________________________
___ ___  MSetYRange         _____________________________________
___ ___  MShowCursor        _____________________________________
___ ___  MTextCursor        _____________________________________

List additional procedures and functions you would like to see.  (Use
the back or another sheet of paper if necessary.)








Comments and suggestions:
..page
                           DOCUMENTATIN FEEDBACK

Help us make our documentation better by completing and returning this
form.  Your feedback will help us improve future products.

Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

FlashPac Version 3.21
Operating system: ____________________________________
Computer: ________________________ Memory(k): ________
Programming experience: ____ years;

Please rate the documentation on a scale of 1 to 5 where 1 is poor, 3
is average and 5 is excellent.

___  Completeness        ___  Usability
___  Accuracy            ___  Readability
___  Organization        ___  Understandability


Was the demo program useful? ___ Yes  ___ No
Is information easy to find? ___ Yes  ___ No
Were errors found in the documentation? ___ Yes ___ No
If yes, please give page number and description of the error.


Is the manual ____ too long?
              ____ too short?
              ____ about right?

Please write other suggestions or comments on the back of this form.
..page
                             Table of Contents

    CHAPTER 1
       Introduction .............................  1-1

    CHAPTER 2 - VIDEO PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  2-1
       Global Variables..........................  2-1
       BorderColor...............................  2-2
       ClrWin....................................  2-3
       ColorMsg..................................  2-4
       DspMsg....................................  2-5
       EditSt....................................  2-6
       FillColAttr...............................  2-11
       FillColCell...............................  2-12
       FillColChar...............................  2-13
       FillFrameAttr.............................  2-14
       FillFrameCell.............................  2-15
       FillFrameChar.............................  2-16
       FillRowAttr...............................  2-17
       FillRowCell...............................  2-18
       FillRowChar...............................  2-19
       FrameWin..................................  2-20
       GetCursorSize.............................  2-22
       GetFrameAttr..............................  2-23
       GetFrameCell..............................  2-24
       GetFrameChar..............................  2-25
       GetScrn...................................  2-27
       GetVideoCols..............................  2-29
       GetVideoInfo..............................  2-30
       GetVideoMode..............................  2-31
       GetVideoPage..............................  2-32
       GotoxyAbs.................................  2-33
       HideCursor................................  2-34
       InitVideo.................................  2-35
       PutFrameAttr..............................  2-36
       PutFrameCell..............................  2-38
       PutFrameChar..............................  2-40
       PutScrn...................................  2-41
       RvsAttr...................................  2-43
       ScrollDown................................  2-44
       ScrollLeft................................  2-46
       ScrollRight...............................  2-48
       ScrollUp..................................  2-50
       SetCursorSize.............................  2-52
       SetVideoPage..............................  2-54
       VioInit...................................  2-55
       WhereXAbs.................................  2-56
       WhereYAbs.................................  2-57
       WriteSt...................................  2-58
       WriteStLn.................................  2-59
..page
    CHAPTER 3 - KEYBOARD PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  3-1
       BiosKbdClr................................  3-2
       BiosKbdGetElmt............................  3-3
       BiosKbdHit................................  3-4
       BiosKbdRead...............................  3-5
       BiosKbdStat...............................  3-7
       DosKbdClr.................................  3-9
       DosKbdGetElmt.............................  3-10
       DosKbdHit.................................  3-11
       DosKbdRead................................  3-12
       GetKeyU...................................  3-14
       GetKey....................................  3-15

    CHAPTER 4 - PRINTER PROCEDURES AND FUNCTIONS
       BiosPrtChar...............................  4-1
       BiosPrtInit...............................  4-2
       BiosPrtStat...............................  4-3
       DosPrtChar................................  4-4

    CHAPTER 5 - DISK PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  5-1
       Global Varibles...........................  5-1
       CloseFile.................................  5-2
       CreateFile................................  5-3
       DosFindFirst..............................  5-5
       DosFindNext...............................  5-8
       FSeek.....................................  5-9
       GetDrive..................................  5-11
       GetDTA....................................  5-12
       GetFileSize...............................  5-13
       GetNDrvs..................................  5-14
       OpenFile..................................  5-15
       ReadFile..................................  5-17
       ResetDisk.................................  5-19
       ResetErrCodes.............................  5-20
       RestInt24.................................  5-21
       SetDTA....................................  5-22
       SetInt24..................................  5-23
       WriteFile.................................  5-25

    CHAPTER 6 - MOUSE PROCEDURES AND FUNCTIONS
       Global Varibles...........................  6-1
       MButtonPress..............................  6-2
       MButtonRel................................  6-3
       MGetPos...................................  6-4
       MGetSpeed.................................  6-5
       MGraphCursor..............................  6-6
       MHideCursor...............................  6-8
       MInitEventHandler.........................  6-9
       MResetMouse...............................  6-10
       MRetQue...................................  6-11
       MSetPos...................................  6-12
       MSetSpeed.................................  6-13
       MSetXRange................................  6-14
..page
       MSetYRange................................  6-15
       MShowCursor...............................  6-16
       MTextCursor...............................  6-17

    CHAPTER 7 - MISCELLANEOUS DOS PROCEDURES AND FUNCTIONS
       Beep......................................  7-1
       DosExec...................................  7-2

    APPENDIX A
       Summary of Procedures and Functions ......  A-1

    APPENDIX B
       Keyboard codes ...........................  B-1

    APPENDIX C
       Keyboard element codes ...................  C-1

    APPENDIX D
       Keyboard return codes ....................  D-1

    APPENDIX E
       Keyboard scan codes ......................  E-1
..page

```
{% endraw %}

## FILE1982.TXT

{% raw %}
```
Disk No: 1982                                                           
Disk Title: FlashPac Pascal Lib 1 of 2 (2093 also)                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: FlashPac Pascal Library                                  
Author Version: 3.21                                                    
Author Registration: $50.00                                             
Special Requirements: A version of Turbo Pascal.                        
                                                                        
These low level Turbo Pascal routines access the video display,         
keyboard, printer, disk, mouse devices, and a couple of DOS functions.  
These routines are not intended to replace the standard features of     
Turbo Pascal, but add to and extend the Turbo Pascal programming        
environment for the MS-DOS operating system.                            
                                                                        
To simplify the use of these routines, the number of global variables   
needed for this library has been kept to a minimum.  All functions in   
the library were written in Assembly language using the Pascal          
parameter passing conventions.                                          
                                                                        
FPDISK supports several DOS function calls that use byte streams when   
accessing disk files.  FPKBD supports BIOS and DOS keyboard function    
calls.  FPMOUSE supports basic mouse functions, including a mouse event 
handler.  FPPRT supports BIOS printer functions.  FPVIDEO consists of   
several video routines that provide direct access to the video display. 
Routines include saving and restoring the screen, framing windows,      
setting the absolute position of the cursor, and more.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
Using prtdoc will print the file specified in the command line
out to the standard output device.  Prtdoc uses the file
prtdoc.pfd for printing out the documentation file.

initstring = \15\23         ;- initialization string
formfeed = 12               ;- form feed character for your printer
pagelen = 66                ;- number of lines per page
mt = 4                      ;- top margin
mb = 6                      ;- bottom margin
mr = 70                     ;- right margin
po = 5                      ;- position offset for left column
xl = 254,254                ;- translate character 254 to 254
xl = 20,0                   ;- translate character 20 to null

These are the only keywords the prtdoc program recognizes.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1982

     Volume in drive A has no label
     Directory of A:\

    CH0_1    DOC     18894   5-15-90   3:21a
    CH1_1    DOC      2423   5-15-90   3:21a
    CH2_1    DOC     29624   5-15-90   3:21a
    CH2_2    DOC     27662   5-15-90   3:21a
    CH3_1    DOC     12027   5-15-90   3:21a
    CH4_1    DOC      2986   5-15-90   3:21a
    CH5_1    DOC     19380   5-15-90   3:21a
    CH6_1    DOC     16269   5-15-90   3:21a
    CH7_1    DOC      1801   5-15-90   3:21a
    CHA_1    DOC      6466   5-15-90   3:21a
    CHB_1    DOC      8596   5-15-90   3:21a
    CHC_1    DOC     12404   5-15-90   3:21a
    CHD_1    DOC      6807   5-15-90   3:21a
    CHE_1    DOC      2693   5-15-90   3:21a
    README   DOC       746   5-15-90   3:21a
    CURSOR   EXE      3376   5-15-90   3:21a
    DOSMEM   EXE      4240   5-15-90   3:21a
    PRTDOC   EXE     18973   5-15-90   3:21a
    RENSUB   EXE      3024   5-15-90   3:21a
    TOUCH    EXE      9254   5-15-90   3:21a
    PRTDOC   HP       1035   5-15-90   3:21a
    PRTDOC   PFD       558   5-15-90   3:21a
    FPDISK   PAS      4415   5-15-90   3:21a
    FPDOS    PAS      6896   5-15-90   3:21a
    FPGETKEY PAS     11408   5-15-90   3:21a
    FPKBD    PAS      2634   5-15-90   3:21a
    FPMOUSE  PAS      4382   5-15-90   3:21a
    FPPRT    PAS      1570   5-15-90   3:21a
    FPVIDEO  PAS      7523   5-15-90   3:21a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       652   1-01-80  11:51a
    FILE1982 TXT      2443   7-13-90  11:44p
           32 file(s)     251199 bytes
                           54272 bytes free
