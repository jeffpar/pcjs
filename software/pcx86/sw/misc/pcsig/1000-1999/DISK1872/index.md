---
layout: page
title: "PC-SIG Diskette Library (Disk #1872)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1872/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1872"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHPAC C LIBRARY 1 OF 2 (2306 ALSO)"

    Add blinding speed and style to your C programs with the FLASHPAC C
    LIBRARY.  Your programs will run faster and look better than anything
    you can buy.
    
    The FLASHPAC C LIBRARY provides C programmers with low level routines
    that access the video display, keyboard, printer, disk, and mouse
    devices.  These routines are not intended to replace the standard
    features of C.  They were created to add to and extend the C
    programming environment for MS-DOS and PC-DOS operating systems.  In
    keeping with good programming practice, global variables within the
    Library have been kept to a minimum.  All the functions in the Library
    are written in assembly language, for speed, using the Pascal
    parameter passing conventions.
    
    The FLASHPAC C LIBRARY contains routines for DISK -- many DOS
    functions that use byte STRAMS when accessing the disk files; VIDEO --
    direct access for saving and restoring the screen, framing windows,
    cursor control, etc.; MOUSE -- basic support plus an event handler;
    BIOS print functions; and both DOS and BIOS keyboard functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CH0_1.DOC

{% raw %}
```







       ========================================================
       =                                                      =
       =                  FLASHPAC C Library                  =
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


Turbo C is a trademark of Borland International
Microsoft C is a tradmark of Microsoft Corporation
..page
                         FlashPac C Library
                          Registration Form


Name:    ________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City:    ________________________________________________________

State:   ____________________  Zip Code: ______________

Telephone: (_________) _________ - ________________

FlashPac Version 3.21 - D3001004

Payment for Registered FlashPac software and distribution diskette:


Registration for FlashPac C Library $50.00 ___________._______

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
___ ___  GetVideoCols       _____________________________________
___ ___  GetVideoInfo       _____________________________________
..page
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



                                 DISK

___ ___  CloseFile          _____________________________________
___ ___  CreateFile         _____________________________________
___ ___  DosFindFirst       _____________________________________
___ ___  DosFindNext        _____________________________________
___ ___  FSeek              _____________________________________
___ ___  GetDrive           _____________________________________
___ ___  GetDTA             _____________________________________
..page
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
       DspMsg....................................  2-6
       EditSt....................................  2-7
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
       GetScrn...................................  2-26
       GetVideoCols..............................  2-27
       GetVideoInfo..............................  2-28
       GetVideoMode..............................  2-29
       GetVideoPage..............................  2-30
       GotoxyAbs.................................  2-31
       HideCursor................................  2-32
       InitVideo.................................  2-33
       PutFrameAttr..............................  2-34
       PutFrameCell..............................  2-35
       PutFrameChar..............................  2-36
       PutScrn...................................  2-37
       RvsAttr...................................  2-39
       ScrollDown................................  2-40
       ScrollLeft................................  2-42
       ScrollRight...............................  2-44
       ScrollUp..................................  2-46
       SetCursorSize.............................  2-48
       SetVideoPage..............................  2-50
       ShowCursor................................  2-51
       VioInit...................................  2-52
       WhereXAbs.................................  2-53
       WhereYAbs.................................  2-54
       WindowFP..................................  2-55
       WriteSt...................................  2-56
       WriteStLn.................................  2-57

    CHAPTER 3 - KEYBOARD PROCEDURES AND FUNCTIONS
       Global Type Declarations..................  3-1
..page
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
       MSetYRange................................  6-15
       MShowCursor...............................  6-16
       MTextCursor...............................  6-17
..page
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

## FILE1872.TXT

{% raw %}
```
Disk No: 1872                                                           
Disk Title: FlashPac C Library                                          
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: FlashPac C Library                                       
Author Version: 3.21                                                    
Author Registration: $50.00                                             
Special Requirements: None.                                             
                                                                        
Add blinding speed and style to your C programs with the FLASHPAC C     
Library.  Your programs will run faster and look better than anything   
you can buy.                                                            
                                                                        
The FLASHPAC C Library provides C programmers with low level routines   
that access the video display, keyboard, printer, disk, and mouse       
devices.  These routines are not intended to replace the standard       
features of C.  They were created to add to and extend the C programming
environment for MS-DOS and PC-DOS operating systems.  In keeping with   
good programming practice, global variables within the library have been
kept to a minimum.  All the functions in the library are written in     
assembly language, for speed, using the Pascal parameter passing        
conventions.                                                            
                                                                        
The FLASHPAC C Library contains routines for; DISK - many DOS functions 
that use byte streams when accessing the disk files, VIDEO - direct     
access for saving and restoring the screen, framing windows, cursor     
control, etc.  MOUSE - basic support plus an event handler, BIOS print  
functions, and both DOS and BIOS keyboard functions.                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #1872  FLASHPAC C LIRARY  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type: PRTDOC (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
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

### Directory of PC-SIG Library Disk #1872

     Volume in drive A has no label
     Directory of A:\

    CH0_1    DOC     18872   2-11-90   1:40p
    CH1_1    DOC      3838   2-11-90   1:40p
    CH2_1    DOC     30497   2-11-90   1:40p
    CH2_2    DOC     28288   2-11-90   1:40p
    CH3_1    DOC     11904   2-11-90   1:40p
    CH4_1    DOC      2944   2-11-90   1:40p
    CH5_1    DOC     19072   2-11-90   1:40p
    CH6_1    DOC     16256   2-11-90   1:40p
    CHA_1    DOC      5248   2-11-90   1:40p
    CHB_1    DOC      8596   2-11-90   1:40p
    CHC_1    DOC     12404   2-11-90   1:40p
    CHD_1    DOC      6807   2-11-90   1:40p
    CHE_1    DOC      2693   2-11-90   1:40p
    CURSOR   EXE      3376   2-11-90   1:40p
    DEMO     C       16635   2-11-90   1:40p
    DEMO     PRJ        55   2-11-90   1:40p
    DISKDEMO C        1745   2-11-90   1:40p
    DISKDEMO PRJ        65   2-11-90   1:40p
    DOSMEM   EXE      4240   2-11-90   1:40p
    FILE1872 TXT      2517   3-21-90  10:09a
    FPCLIB   H        7235   2-11-90   1:40p
    FPCLIB   LIB     31463   2-11-90   1:40p
    FPGETKEY C          86   2-11-90   1:40p
    GETVOL   C         380   2-11-90   1:40p
    GETVOL   PRJ        34   2-11-90   1:40p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       386  12-27-89   3:31p
    KBDDEMO  C        4285   2-11-90   1:40p
    KBDDEMO  PRJ        60   2-11-90   1:40p
    PRTDEMO  C        2738   2-11-90   1:40p
    PRTDEMO  PRJ        34   2-11-90   1:40p
    PRTDOC   EXE     18973   2-11-90   1:40p
    PRTDOC   HP       1106   2-11-90   1:40p
    PRTDOC   PFD       558   2-11-90   1:40p
    README   DOC       746   2-11-90   1:40p
    RENSUB   EXE      3024   2-11-90   1:40p
    TCSETS   PAS      1261   2-11-90   1:40p
    VIODEMO  C       34634   2-11-90   1:40p
    VIODEMO  PRJ        60   2-11-90   1:40p
           39 file(s)     303153 bytes
                           35840 bytes free
