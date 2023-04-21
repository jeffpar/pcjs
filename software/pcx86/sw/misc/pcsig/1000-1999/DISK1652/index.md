---
layout: page
title: "PC-SIG Diskette Library (Disk #1652)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1652/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1652"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TECHNOJOCK'S TURBO TOOLKIT (1651 ALSO)"

    TechnoJock's Turbo Toolkit (TTT) is a comprehensive set of procedures
    and functions for Turbo Pascal and Quick Pascal programmers.  The
    Toolkit is designed for professional programmers, as well as newcomers
    to the Pascal programming environment.
    
    The main focus of the Toolkit is to give programs a polished and
    professional appearance.  There are routines providing:  formatted
    screen output, windows, many menu routines including pop-up and pull-
    down, form input procedures, string formatting, a Sidekick Plus style
    directory lister, and much more.  These units are compact and very easy
    to manipulate and implement.  The manual is clear and instructive.  All
    source is included.
    
    The abbreviated manual is included on disk (over 100 pages).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FASTTTT5.ASM

{% raw %}
```
;{--------------------------------------------------------------------------}
;{                         TechnoJock's Turbo Toolkit                       }
;{                                                                          }
;{                              Version   5.00                              }
;{                                                                          }
;{                                                                          }
;{              Copyright 1986, 1989 TechnoJock Software, Inc.              }
;{                           All Rights Reserved                            }
;{                          Restricted by License                           }
;{--------------------------------------------------------------------------}
;                     {--------------------------------}                                       
;                     {       OBJ:   FastTTT5          }
;                     {--------------------------------}
;
;

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                +
;+          This asm file contains 3 pascal procedures for        +
;+          linking with TTT version 5.0. The procedures are:     +
;+                                                                +
;+                  Fastwrite(X,Y,A,String)                       +
;+                  PlainWrite(X,Y,String)                        +
;+                  Attribute(X,Y,X,HowMany)                      +
;+                                                                + 
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                +
;+    The main pascal unit includes three global variables. The   +
;+    VSeg and Vofs indicate the active screen buffer - this may  +
;+    or may not be the visible screen buffer so "snow" checking  +
;+    is always performed.                                        +
;+                                                                +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

DATA    SEGMENT BYTE PUBLIC

        EXTRN   VSeg : WORD     
 	EXTRN   Vofs : WORD
        EXTRN   SnowProne : BYTE

DATA    ENDS


CODE    SEGMENT BYTE PUBLIC

        ASSUME  CS:CODE,DS:DATA

        PUBLIC  FastWrite, PlainWrite, Attribute

;++++++++++++++++++++++++++++++++++++
;+     C A L M E M P O I N T E R    +
;++++++++++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                +
;+    CALCMEMPOINTER is a local procedure that is called by       +
;+    Fastwrite, PlainWrite and Attribute. It places the segment  +
;+    and offset of the first attribute, in ES:DI ready for an    +
;+    LDS. Vseg and Vofs point to the first attribute of the      +
;+    screen, the final location is computed by adding Row*160    +
;+    (80 attribs and 80 chars per row) and then adding 2*Col.    +
;+    The passed Row and Column are decremented by one to fit     +
;+    with DOS's 0..79, 0..24 coordinate system.                  + 
;+                                                                +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Calcmempointer      PROC NEAR

        XOR     AX,AX                   ;AX = 0
        MOV     CL,AL                   ;CL = 0
        MOV     BH,AL                   ;BH = 0
        DEC     CH                      ;convert to DOS 0..24 coords
        SHR     CX,1                    ;CX = Row * 128
        MOV     DI,CX                   ;Store in DI
        SHR     DI,1                    ;DI = Row * 64
        SHR     DI,1                    ;DI = Row * 32
        ADD     DI,CX                   ;DI = (Row * 160)
        DEC     BX                      ;convert to DOS 0..79 coords
        SHL     BX,1                    ;Account for attribute bytes
        ADD     DI,BX                   ;DI = (Row * 160) + (Col * 2)
	ADD     DI,Vofs                 ;Add base address
        MOV     ES,Vseg                 ;ES:DI points to first Row,Col attribute
        RET                             ;Return

Calcmempointer      ENDP


;++++++++++++++++++++++++++++
;+     F A S T W R I T E    +
;++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                  +
;+   Why fastwrite. Normal BIOS services are too slow writing       +
;+   to the screen. Even Turbo  write procs are not as fast as      +
;+   we need - especially on snow-prone systems.                    +
;+                                                                  +
;+   Basic Process:    Save stack state                             +
;+                     Repeat                                       +         
;+                        Set ES:DI with target memory address      +
;+                        Load source with LODSB                    +
;+                        Check for vertical retrace if necessary   +    
;+                           and store the character in target      +
;+                           with STOSW                             +
;+                     Until no more chracters                      +
;+                                                                  +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

;  Turbo passed parameters

FWSt            EQU     DWORD PTR [BP+6]
FWAttr          EQU     BYTE PTR [BP+10]
FWRow           EQU     BYTE PTR [BP+12]
FWCol           EQU     BYTE PTR [BP+14]

FastWrite       PROC FAR

        PUSH    BP                      ;Save BP
        MOV     BP,SP                   ;Set up stack frame
        PUSH    DS                      ;Save DS
        MOV     CH,FWRow                ;CH = Row
        MOV     BL,FWCol                ;BL = Column
        CALL    Calcmempointer          ;Set up ES:DI for LDS
        MOV     CL,SnowProne            ;Need to wait?
        LDS     SI,FWSt                 ;DS:SI points to St[0]
        CLD                             ;Set direction to forward
        LODSB                           ;AX = Length(St); DS:SI -> St[1]
        XCHG    AX,CX                   ;CX = Length; AL = WaitForRetrace
        JCXZ    FWExit                  ;exit if string empty
        MOV     AH,FWAttr               ;AH = display attribute
        RCR     AL,1                    ;If WaitForRetrace is False...
        JNC     FWMono                  ; use "FWMono" routine
        MOV     DX,03DAh                ;Point DX to CGA status port
FWGetNext:
        LODSB                           ;Load next character into AL
        MOV     BX,AX                   ;Store video word in BX
        CLI                             ;hold interrupts
FWWaitNoH:
        IN      AL,DX                   ;get retrace situation
        TEST    AL,8                    ;retracing?
        JNZ     FWStore                 ;If so, go
        RCR     AL,1                    ;Else, wait for end of
        JC      FWWaitNoH               ; horizontal retrace
FWWaitH:
        IN      AL,DX                   ;get retrace situation
        RCR     AL,1                    ;Wait for horizontal
        JNC     FWWaitH                 ; retrace
FWStore:
        MOV     AX,BX                   ;Move word back to AX...
        STOSW                           ; and then to screen
        STI                             ;OK to interrupt now
        LOOP    FWGetNext               ;Get next character
        JMP     FWExit                  ;wind up
FWMono:
        LODSB                           ;Load next character into AL
        STOSW                           ;Move video word into place
        LOOP    FWMono                  ;Get next character
FWExit:
        POP     DS                      ;clean up and go home
        MOV     SP,BP                   ;
        POP     BP                      ;
        RET     10                      ;

FastWrite       ENDP


;+++++++++++++++++++++++++++++++
;+     P L A I N W R I T E     +
;+++++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                  +
;+   Uses same concept as Fastwrite but doesn't affect current      +
;+   display attribute.                                             +
;+                                                                  +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

;  Turbo passed parameters

PWSt            EQU     DWORD PTR [BP+6]
PWRow           EQU     BYTE PTR [BP+10]
PWCol           EQU     BYTE PTR [BP+12]

PlainWrite      PROC FAR

        PUSH    BP                      ;Save BP
        MOV     BP,SP                   ;Set up stack frame
        PUSH    DS                      ;Save DS
        MOV     CH,PWRow                ;CH = Row
        MOV     BL,PWCol                ;BL = Column
        CALL    Calcmempointer          ;Set up ES:DI for LDS
        MOV     CL,Snowprone            ;Need to wait?               
        LDS     SI,PWSt                 ;DS:SI points to St[0]
        CLD                             ;Set direction to forward
        LODSB                           ;AX = Length(St); DS:SI -> St[1]
        XCHG    AX,CX                   ;CX = Length; AL = Wait
        JCXZ    PWExit                  ;exit if string empty
        RCR     AL,1                    ;If WaitForRetrace is False...
        JNC     PWNoWait                ; use PWNoWait routine
        MOV     DX,03DAh                ;Point DX to CGA status port
PWGetNext:
        LODSB                           ;Load next character into AL
        MOV     AH,AL                   ;Store char in AH
        CLI                             ;hold interrupts
PWWaitNoH:
        IN      AL,DX                   ; get retrace situation
        TEST    AL,8                    ;Check for vertical retrace
        JNZ     PWStore                 ; In progress? go
        RCR     AL,1                    ;Else, wait for end of
        JC      PWWaitNoH               ; horizontal retrace
PWWaitH:
        IN      AL,DX                   ;Get 6845 status again
        RCR     AL,1                    ;Wait for horizontal
        JNC     PWWaitH                 ; retrace
PWStore:
        MOV     AL,AH                   ;Move char back to AL...
        STOSB                           ; and then to screen
        STI                             ;OK to interrupt now
        INC     DI                      ;Skip attribute bytes
        LOOP    PWGetNext               ;Get next character
        JMP     PWExit                  ;Done
PWNoWait:
        MOVSB                           ;Move character to screen
        INC     DI                      ;Skip attribute bytes
        LOOP    PWNoWait                ;Get next character
PWExit:
        POP     DS                      ;Clean up and go home
        MOV     SP,BP                   ;
        POP     BP                      ;
        RET     8                       ;

PlainWrite      ENDP

;+++++++++++++++++++++++++++++++
;+     A T T R I B U T E       +
;+++++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++
;+                                    +
;+   Changes the display attribute    +
;+                                    +
;++++++++++++++++++++++++++++++++++++++

;  Turbo passed parameters

ANumber        EQU     WORD PTR [BP+6]
AAttr          EQU     BYTE PTR [BP+8]
ARow           EQU     BYTE PTR [BP+10]
ACol           EQU     BYTE PTR [BP+12]

Attribute PROC FAR

        PUSH    BP                      ;Save BP
        MOV     BP,SP                   ;Set up stack frame
        MOV     CH,ARow                 ;CH = Row
        MOV     BL,ACol                 ;BL = Column
        CALL    Calcmempointer          ;Call routine to calculate offset
        INC     DI                      ;Skip character
        CLD                             ;Set direction to forward
        MOV     CX,ANumber              ;CX = Number to change
        JCXZ    AExit                   ;If zero, exit
        MOV     AL,AAttr                ;AL = Attribute
        CMP     SnowProne,1             ;Get wait state
        JNE     ANoWait                 ;If WaitForRetrace is False
                                        ; use ANoWait routine
        MOV     AH,AL                   ;Store attribute in AH
        MOV     DX,03DAh                ;Point DX to CGA status port
AGetNext:
        CLI                             ;No interrupts now
AWaitNoH:
        IN      AL,DX                   ;get retrace situation
        TEST    AL,8                    ;check for vertical retrace
        JNZ     AGo                     ;In progress? Go
        RCR     AL,1                    ;Wait for end of horizontal
        JC      AWaitNoH                ; retrace
AWaitH:
        IN      AL,DX                   ; get retrace situation
        RCR     AL,1                    ;Wait for horizontal
        JNC     AWaitH                  ; retrace
AGo:
        MOV     AL,AH                   ;Move Attr back to AL...
        STOSB                           ; and then to screen
        STI                             ;Allow interrupts
        INC     DI                      ;Skip characters
        LOOP    AGetNext                ;Look for next opportunity
        JMP     AExit                   ;Done
ANoWait:
        STOSB                           ;Change the attribute
        INC     DI                      ;Skip characters
        LOOP    ANoWait                 ;Get next character
AExit:                                  ;
        MOV     SP,BP                   ;Clean up and go home
        POP     BP                      ;
        RET     8                       ;

Attribute ENDP

CODE    ENDS

        END
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
TECHNOJOCK'S TURBO TOOLKIT v5.0



Copyright 1986, 1989 TechnoJock Software, Inc.
All Rights Reserved
Restricted by License




The software described in this manual is protected by copyright laws. 
Information in this manual is subject to change without notice and does not
represent any commitment on the part of TechnoJock Software, Inc.

Thank-you for reviewing TechnoJock's Turbo Toolkit v5.0. This file is an 
abridged version of the user guide, but does contain approximately 100
pages of information about the Toolkit, including a comprehensive procedure
reference in alphabetic order. The on-disk version of the manual excludes
the illustrations and formatting niceties that are included in the printed
manual.

If you register the Toolkit, you will receive a 300 page typeset manual,
including a pull-out quick reference. Refer to the file Register.Doc for
registration information.







CHAPTER 1 - TOOLKIT BASICS
==========================

What is the Toolkit?

  TechnoJock's Turbo Toolkit software is a collection of procedures and
  functions for Turbo Pascal programmers. The Toolkit will reduce the time
  taken to write applications and is designed for novice and expert
  programmer alike.

  The real purpose of the Toolkit is to provide easy-to-implement procedures
  that free the programmer from the more tedious and repetitive programming
  chores, such as windows, menus, user input, string formatting, directory
  listing etc. The programmer (or software engineer if you are from
  California!) can concentrate on the main purpose of the program. The full
  value of the Toolkit is not limited to saving the programmer time. The
  final program will have a consistent easy-to-use interface that will impart
  a professional quality to the program.

  The Toolkit is designed specifically to operate with Turbo Pascal v5.0 and
  v4.0 from Borland International. The full source code for all of the
  Toolkit is included so that the code may be reviewed and modified.

  The quickest way of gaining an appreciation of the capabilities of the
  Toolkit is to execute the program DemoTTT.exe. This program demonstrates
  most of the procedures and functions available. The demo itself was, of
  course, written with the Toolkit. If you haven't run it yet, run it now!



How To Use The Toolkit

  The manual assumes that the reader has a basic knowledge of Borland's Turbo
  Pascal and understands the concepts of units. If you are new to Turbo
  Pascal, read the Chapter "Units and Related Mysteries" in the compiler's
  user's guide (page 65 v5.0, page 61 v4.0).

  It is not necessary to understand the internal workings of any of the
  Toolkit units in order to use them - all you need to know is how to call
  the procedures and functions.


Example 1

  The technique is best illustrated with an example. In the unit FastTTT5
  there is a procedure for drawing boxes called BOX. A somewhat primitive
  program to draw a box on the screen would be as follows:

  PROGRAM TOOLKIT_DEMO;
  USES FASTTTT5;
  
  BEGIN
      BOX(1,1,80,25,15,4,1);

  END.
  
  All you need to know is the unit that contains the procedure Box and the
  syntax of the Box procedure. (If you must, take a peek at page 16-14 to see
  the detailed documentation for the BOX procedure!) That's all there is to
  it - no need to worry about drawing horizontal and vertical lines, or what
  the ASCII codes are for the box corners etc.


Example 2

  The above example is useful to illustrate the most basic concept of the
  toolkit but how often will you write five line programs?!! More typically,
  you will want to use procedures and functions from a variety of the Toolkit
  units. All you need to do is "use" all the units that contain the relevant
  procedures. For example, let's say we want to expand the above program to
  draw a filled box and write the date in a neat (!) format at the top of the
  screen:

  

  PROGRAM IMPROVED_TOOLKIT_DEMO;
  USES FASTTTT5, MISCTTT5;
  
  BEGIN
      FBOX(1,1,80,25,15,4,1);
      WRITECENTER(2,14,4,DATE);
  END.
  
  The FBox and WriteCenter procedures are in the FastTTT5 unit and the Date
  function is in the MiscTTT5 unit.



Required Software & HARDWARE

  The Toolkit is designed to work with v5.0 or v4.0 of Borland
  International's Turbo Pascal compiler for the IBM PC. To compile programs
  developed using the Toolkit, you will need Turbo Pascal (version 4.0 or
  greater), as well as MS-DOS or PC-DOS (version 2.0 or greater).

  Programs developed with the Toolkit will function on the same hardware as
  specified in the Turbo Pascal compiler documentation, i.e. IBM PC, XT, AT,
  PS/2 and true compatibles. Any of the standard display adapters are
  supported, including the monochrome, CGA, EGA and VGA. The Toolkit
  automatically supports a Microsoft (or true compatible) mouse. If the
  system does not have a mouse, no problem, the mouse features are ignored.
  In other words, if you develop a program using the Toolkit, it can be run
  on machines with or without a mouse.



ROYALTIES

  Many Toolkit users develop commercial programs specifically to sell for

  profit. TechnoJock Software Inc. neither expects nor requires a royalty fee
  on such programs. The major restriction is that you may not develop a
  program that is itself a toolkit, i.e. a library of programmer's utilities.

  The Toolkit TPU's and source code may not be sold or distributed as part of
  another program.

  Refer to the License Agreement at the front of the manual for more
  information.



SUPPORT

  TechnoJock Software Inc. strives to support its users. If you have a
  problem that you are unable to resolve:

  -    send a diskette containing the problematic software, together with
       details of the problem and instructions on how to generate the problem
       to:

            TechnoJock Software Inc.
            PO Box 820927
            Houston
            TX 77282-0927

  -    leave an electronic message on Compuserve by typing GO EMAIL at a
       CompuServe menu prompt. The userid for TechnoJock Software Inc. is
       74017,227.

  -    call TechnoJock Software at (713) 493-6354.

  Identify the following: the version of the Toolkit, the DOS version, the
  contents of the CONFIG.SYS file, the contents of the AUTOEXEC.BAT file, and
  the type of hardware that the software is executed on.



ACKNOWLEDGEMENTS

In this manual, references are made to several products:
Turbo Pascal, Sidekick and Sprint are registered trademarks of Borland
International.
IBM is a registered trademark and PC, XT, AT, PS/2 and PC-DOS are trademarks of
International Business Machines Corporation.
MS-DOS and Microsoft Word are trademarks of Microsoft Corporation.
Pagemaker is a registered trademark of Aldus Corporation.
rporation.
CompuServe is a registered trademark of CompuServe Information Service, Inc.
Pizazz +Plus is a trademark of Application Techniques, Inc.




This User Manual was prepared using Microsoft Word, Aldus Pagemaker and Pizazz
+Plus.

     




CHAPTER 2 - GETTING STARTED
===========================

INTRODUCTION

  This chapter includes instructions on how to install the disks, together
  with a description of the Toolkit design concepts and how to get the most
  out of the User Manual.

  Make sure you read the diskette READ.ME file. It will contain any last
  minute information that was not included in this User Manual.



WHAT'S ON THE DISKS

  The Toolkit is shipped in one of three formats: two 360k diskettes, a
  single 1.2 Mb diskette or a single 3.5 inch diskette. The manual assumes
  that the user is working with the two 360k diskettes option.

  Source Disk

  Diskette 1 is the SOURCE diskette and includes the following files:

  FastTTT5.pas             the pascal source for the FastTTT5 unit
  FastTTT5.obj             the assembler object file for the FastTTT5 unit
  WinTTT5.pas              the pascal source for the WinTTT5 unit
  WinTTT5.obj              the assembler object file for the WinTTT5 unit
  KeyTTT5.pas              the pascal source for the KeyTTT5 unit
  MenuTTT5.pas             the pascal source for the MenuTTT5 unit
  PullTTT5.pas             the pascal source for the PullTTT5 unit
  NestTTT5.pas             the pascal source for the NestTTT5 unit
  ListTTT5.pas             the pascal source for the ListTTT5 unit
  DirTTT5.pas              the pascal source for the DirTTT5 unit
  ReadTTT5.pas             the pascal source for the ReadTTT5 unit
  IOTTT5.pas               the pascal source for the IOTTT5 unit
  StrnTTT5.pas             the pascal source for the StrnTTT5 unit
  MiscTTT5.pas             the pascal source for the MiscTTT5 unit
  Register.doc             an ASCII order form for the Toolkit
  Read.Me                  latest information about the Toolkit.
  TTT.Mak                  a make file for all the units in the Toolkit.
  
  
  Demo Disk

  Diskette 2 is the DEMO disk, although it does also contain the assembler
  source for the OBJ files on diskette 1 and the on-disk manual. The DEMO
  disk includes the following files:

  FastTTT5.asm   assembler source for the FastTTT5.obj file
  WinTTT5.asm    assembler source for the WinTTT5.obj file
  Demo5.ARC      demonstration files for Turbo 5.0 Users
  Demo4.ARC      demonstration files for Turbo 4.0 Users

  Manual.ARC     an abridged version of this manual to help others evaluate
                 the Toolkit.
  ArcX.COM       a utility file to de-archive the ARC files
  Register.doc   an ASCII order form for the Toolkit
  Upgrade.doc    special information for users of earlier versions of the
  Toolkit
  BuildTTT.pas   a program to build the TPU files


  The files with an extension of ARC are archived files which contain files
  in a compressed format.



INSTALLATION

  The first thing to do is create a subdirectory called TTT (or whatever you
  choose) below the compiler directory. Assuming your compiler is in a
  directory called TURBO, the commands would be:

       C:
       MD\TURBO\TTT
       CD\TURBO\TTT

  Now place each of the disks into drive A and type the following command:

       COPY A:*.* C:\TURBO\TTT

  Put the master diskettes away in a safe place.

  There are two sets of demonstration files; one for Turbo 5 users, and one
  for Turbo 4 users. The sets are very similar and differ only in minor ways.
  The next task is to extract the source code from the relevant ARC file,
  i.e. DEMO5.ARC or DEMO4.ARC, by using the ARCX.COM program that is included
  on the disk, e.g.

       ARCX TURBO4
  or
       ARCX TURBO5

  The Manual.Arc file contains an abridged version of this User Manual and is
  included on the diskette so that non-registered users can evaluate the
  Toolkit. You will not need to keep the manual file on the hard disk since
  you already have this wonderful masterpiece! Therefore, all the arc files
  can be deleted from the fixed disk, e.g.

       DEL *.ARC

  
  To save space, the Toolkit does not include the compiled TPU files. The
  compiler will automatically compile any required units when you build your
  first program. However, all the units can be recompiled using one of the
  following methods:

  1    If you are familiar with the MAKE utility, execute the TTT.MAK file:


       MAKE -fTTT.MAK

  2    Compile the program BUILDTTT.PAS or use the BUILD compiler option.
       This program forces the compiler to build all the TPU's. Some of the
       units are available in two versions; a compact unit that doesn't
       contain all the features but has a reduced program size, and a full
       featured unit. The desired version is controlled through the use of
       compiler directives. (Refer to the section Minimizing Program Size for
       more information on conditional compiler directives.) Instructions are
       included at the top of the BuildTTT.pas file.



USING THE MANUAL

  The User Manual is organized into two main sections.

  Chapters 1 to 15 discuss the features and options of each individual unit.
  It is recommended that you read the appropriate chapter before using a unit
  for the first time. Each chapter includes a description of each procedure,
  how it should be used in a program, the unit organization, and how to
  modify the characteristics of the units by assigning new values to global
  variables.

  Chapter 16 is the main reference section and contains a full alphabetic
  listing of all the procedures and functions in the Toolkit. It includes a
  description of each procedure, the declaration syntax, a cross reference to
  other related procedures and an example of the procedure in use.



TOOLKIT CONCEPTS

  The Toolkit has been designed to be both flexible and easy to use.

  One of the major design critera was to minimize the complexity of the
  Toolkit. The number of parameters passed to each procedure has been kept to
  a minimum. We didn't want you to learn a whole new philosophy just to use
  the Toolkit in your programs!

  Part of the flexibility has been attained through the use of global
  variables which control the look and feel of many of the units. For
  example, the ReadTTT5 unit includes a global variable RTTT that controls
  the display colors, whether the user can escape, if the user is initially
  in input mode or overtype mode, etc. The Toolkit sets RTTT to some default
  values. If you prefer to use alternate settings, just change the relevant
  element of RTTT, e.g.

       VAR
         NAME : STRING;
       BEGIN
           WITH RTTT DO
           BEGIN
               INSERT := FALSE;

               WHITESPACE := ' ';
               RIGHTJUSTIFY := TRUE;
           END;
           READ_STRING(10,5,30,'ENTER YOUR NAME ',2,NAME);
       END;

  The Toolkit default settings can be automatically restored by executing the
  unit's Default_Settings procedure, e.g.

       READTTT5.DEFAULT_SETTINGS;

  The following units include global variables:

       DirTTT5             DTTT
       ListTTT5            LTTT
       NestTTT5            NTTT
       PullTTT5            PTTT
       ReadTTT5            RTTT
       
  These variables are discussed fully in the User Manual.

  Many of the procedures are designed to write text to the screen. The
  FastTTT5 unit includes a string type of StrScreen which is set to an 80
  character string. The Turbo Pascal compiler expects these procedures to be
  passed only strings of exactly the same type. Sometimes, when a different
  string type is used, the compiler will halt and issue the message "Error
  26: Type Mismatch". You do not need to change all the string types in your
  program to type StrScreen. Just place the following compiler directive at
  the top of your program:

                           {$V-}

  This directive turns off string type checking.



USER HOOKS

  The Toolkit provides User Hooks to allow the programmer to hook into the
  heart of the Toolkit units and customize the program.

  A User Hook is basically a programmer defined procedure that is called by a
  Toolkit unit every time a particular event occurs. For example, a
  programmer's procedure can be called every time a key is pressed. This
  hooked procedure is passed the character pressed by the user. The hooked
  procedure can call other procedures and can even modify the key that was
  pressed before returning control back to the Toolkit.

  The hooks provide a mechanism to customize the Toolkit functionality
  without modifying the Toolkit source code.

  The following units include user hooks:

                 KeyTTT5
                 MenuTTT5

                 PullTTT5
                 NestTTT5
                 ListTTT5
                 IOTTT5
  
  Full details on the hooks are contained in the unit chapters.



CONDITIONAL COMPILATION

  Some of the units can be used in one of two modes; full featured or fewer
  features with smaller program size. The three units that provide the two
  modes are KeyTTT5, DirTTT5 and IOTTT5.

  The programmer can control the mode through the use of compiler directives.
  Turbo Pascal's conditional compiler directives allow you to produce
  different code from the same source text, based on conditional symbols.The
  three conditional symbols are K_FULL, DIRFULL and IOFULL, respectively.

  By default, the Toolkit uses these units in their slim form. To recompile
  the units in their full form, use the /D switch on the command-line
  compiler or the menu command O/C/Conditional Defines in the integrated
  environment. Figure 2.1 (below) illustrates the integrated environment
  option.

  Once the appropriate conditional defines have been set, BUILD the program.
  This will force the TPUs to be recompiled. The compiler directives do not
  need to be set every time you compile your program, only when you want to
  change the units from their current state.






CHAPTER 16 - REFERENCE LOOKUP
=============================

This chapter is an aplhabetical listing of all the procedures and functions 
in the Toolkit.



___________________________________________________________________________

Activate_Table                                                       IOTTT5


Purpose   Redirects all IOTTT5 activity to the assigned table.

Decln.    Activate_Table(Table_No:byte);

Remarks   Table_No is the number of the table to activate. It must be in
          the range 1 to Max_Tables. The default active table is table 1.


See Also  Create_Tables, Dispose_Tables

Example   

BEGIN
    CREATE_TABLES(3);
    ACTIVATE_TABLE(1);
    CREATE_FIELDS(20);
    ACTIVATE_TABLE(2);
    CREATE_FIELDS(5);
    ACTIVATE_TABLE(3);
    CREATE_FIELDS(10);
END;

Three tables are created and then 20, 5 and 10 fields are created for each
table.

___________________________________________________________________________

Activate_Virtual_Screen                                             WinTTT5


Purpose   Redirects all subsequent screen writing activity to a virtual
          screen.

Decln.    Activate_Virtual_Screen(Page:byte);

Remarks   Page is the number of the virtual screen to activate. It must be
          in the range 1 to Max_Screens and must have been created with
          CreateScreen or SaveScreen.

See Also  CreateScreen, SaveScreen, Activate_Visible_Screen

Example   

BEGIN
    CREATESCREEN(3,25);
    ACTIVATE_VIRTUAL_SCREEN(3);
    CLEARTEXT(1,1,80,25,WHITE,BLUE);
    WRITECENTER(1,YELLOW,BLUE,'HELP SYSTEM');
    ......
    SLIDERESTORESCREEN(3,DOWN);
    ACTIVATE_VISIBLE_SCREEN;
END;

Virtual screen number 3 is created and all screen writes are redirected to
it with the Activate_Virtual_Screen procedure. The virtual screen is
displayed to the user by sliding it down onto the display.

___________________________________________________________________________

Activate_Visible_Screen                                             WinTTT5



Purpose   Redirects all subsequent screen writing activity back to the
          visible screen.

Decln.    Activate_Visible_Screen;

Remarks   The visible screen is effectively screen 0. This command is the
          equivalent of Activate_Virtual_Screen(0);

See Also  Activate_Virtual_Screen

Example   

BEGIN
    CREATESCREEN(3,25);
    ACTIVATE_VIRTUAL_SCREEN(3);
    CLEARTEXT(1,1,80,25,WHITE,BLUE);
    WRITECENTER(1,YELLOW,BLUE,'HELP SYSTEM');
    ......
    SLIDERESTORESCREEN(3,DOWN);
    ACTIVATE_VISIBLE_SCREEN;
    WRITE(1,25,WHITE,RED,'PRESS ANY KEY TO CONTINUE');
END;

___________________________________________________________________________

Add_Field                                                            IOTTT5


Purpose   Creates an input field for full screen editing.

Decln.    Add_Field(ID,U,D,L,R,X,Y)

Remarks   ID is the field ID number of the field being added. It must be
          within the range of fields that were created with the
          Create_Fields procedure
          U, D, L and R are the fields to jump to when the user presses the
          Up, Down, Left and Right movement keys.
          X Y are the coordinates of the first character of the field.

See Also  Create_Fields, String_Field, Byte_Field, etc.

Example   

BEGIN
    CREATE_FIELDS(5);
    ADD_FIELD(1, 5,2,5,2, 5,10);
    ADD_FIELD(2, 1,3,1,3, 5,12);
    ADD_FIELD(3, 2,4,2,4, 5,14);
    ADD_FIELD(4, 3,5,3,5, 5,16);
    ADD_FIELD(5, 4,1,4,1, 5,18);
END;


___________________________________________________________________________

Add_Message                                                          IOTTT5


Purpose   Assigns a message to a specific input field.

Decln.    Add_Message(ID,X,Y:byte;Msg:string);

Remarks   ID is the field ID number. The field must have previously been
          added with the Add_Field procedure.
          X Y are the leftmost coordinates of the message. If X is set to
          zero, the Toolkit automatically centers the message on the
          screen. If Y is set to zero, the message is displayed on the line
          below the input field.
          Msg is the message text.
          
          Every time the user enters the input field, the message will be
          displayed. When the user leaves the field, the message will be
          removed and the original screen contents restored.

See Also  Add_Field

Example   

BEGIN
    CREATE_FIELDS(20);
    ADD_FIELD(1, 20,2,20,2, 40,5);
    ADD_MESSAGE(1, 1,5, 'CHECK THEIR CREDIT RATING!');
END;

___________________________________________________________________________

Add_Topic                                                          NestTTT5


Purpose   Adds a new topic to a menu.

Decln.    Add_Topic(var
          M:Nest_Menu;N:MenuStr;A:Boolean;Key:char;code:integer;Sub:MenuPtr
          );

Remarks   M is the name of the menu variable to which the topic will be
          added.
          N is the topic text, i.e. the string that will be displayed in
          the menu.
          A indicates if the topic is selectable or non-selectable. Set to
          true for normal selectable topics.
          Key is the character code of a hotkey that can be used to execute
          the topic. Set to #0 to disable the hotkey.
          Code is an integer code that will be passed to the despatcher
          procedure to indicate that the user selected this topic. Set the
          code to zero if a sub-menu is going to be called.
          Sub is the address of a sub-menu that is to be called if the

          topic is selected. Set to NIL if the topic executes a despatcher
          procedure rather than displaying a sub-menu.
          
          Add topics in the order that they are to appear. When a topic is
          added, the Toolkit assigns a topic number. This topic number is
          used to modify or delete topics.

See Also  Initialize_Menu, Modify_Topic, Delete_A_Topic

Example   

BEGIN
    ADD_TOPIC(PRINT,'RESET PRINTER',TRUE,#0,301,NIL);
    ADD_TOPIC(PRINT,'SET CONDENSED',TRUE,#0,302,NIL);
    ADD_TOPIC(PRINT,'REPORT MENU (ALT-R)',TRUE,#147,0,@REPORT);
END;

Three topics are added to the menu variable PRINT. When selected, the first
two topics call the despatcher with codes of 301 and 302, respectively. The
third topic calls the Report menu.

___________________________________________________________________________

Allow_Beep                                                           IOTTT5


Purpose   Indicates if the system will beep when the user presses an
          invalid key.

Decln.    Allow_Beep(On:boolean);

Remarks   Pass true to activate beeping and false to disable beeping.
          Default is true. The setting applies to the active table.

See Also  Activate_Table

Example   

BEGIN
    ALLOW_BEEP(FALSE);
END;

___________________________________________________________________________

Allow_Esc                                                            IOTTT5


Purpose   Indicates if the user can escape from the input session by
          pressing Esc.

Decln.    Allow_Esc(On:boolean);

Remarks   Pass true to allow the user to escape and false to disable the
          Esc key. Default is true. The setting applies to the active
          table.


See Also  Activate_Table

Example   

BEGIN
    ALLOW_ESC(FALSE);
END;

___________________________________________________________________________

Alt_Pressed                                                         KeyTTT5


Purpose   Indicates if the Alt key is depressed (i.e. held down - not
          melancholy!).

Decln.    Alt_Pressed:boolean

Returns   Boolean

See Also  Ctrl_Pressed, Shift_pressed

Example   

BEGIN
    ......
    IF ALT_PRESSED THEN
       WRITECENTER(25,YELLOW,RED,' LET GO OF THE ALT KEY! ');
END;

___________________________________________________________________________

Assign_CharHook                                                      IOTTT5


Purpose   Identifies a procedure that will be called every time the user
          presses a key during field input.

Decln.    Assign_CharHook(Proc:Char_Hook_Proc);

Remarks   Proc is the name of the procedure to Hook into the IO routines.
          The procedure must be declared far with 3 passed parameters; a
          variable type char, a variable type ID and a variable type byte.
          The procedure will be passed the character that was just pressed,
          the current field ID number and a refresh code.

See Also  Assign_InsHook, Assign_LeaveFieldHook, Assign_EnterFieldHook

Example   

    {$F+}
    PROCEDURE BOBS_HOOK(VAR C:CHAR;VAR ID:BYTE;VAR R:BYTE);
    BEGIN
        IF C = F2 THEN

           DISPLAY_USERID;
    END;
    {$F-}

BEGIN
    ASSIGN_CHARHOOK(BOBS_HOOK);
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     IO_CHARHOOK := @BOBS_HOOK;

___________________________________________________________________________

Assign_Despatcher                                                  NestTTT5


Purpose   Identifies the procedure that will be called when a user selects
          a menu topic.

Decln.    Assign_Despatcher(D:Despatcher_proc);

Remarks   D is the name of the procedure that will be executed when a user
          selects a menu topic. The procedure must be declared far with two
          passed parameters; a variable integer indicating the selected
          topic and a variable byte indicating the refresh code. The
          selected topic code is the code that was passed with the
          Add_Topic procedure.

See Also  Add_Topic

Example   

    {$F+}
    PROCEDURE TASK_MASTER(VAR CODE:INTEGER;VAR R:BYTE);
    BEGIN
        CASE CODE OF
        ....
        301 : BEGIN
                  RESET_PRINTER;
                  R := CLEARCURRENT;
              END;
        ....
        END; {CASE}
    END; {PROC}
    {$F-}

BEGIN
    ASSIGN_DESPATCHER(TASK_MASTER);
END;

The despatcher procedure Task_Master checks to see if the user selected the
topic with a code of 301. If so, the printer is reset, and control is
passed back to the nested menu, but the menu is removed and the parent menu
displayed.


___________________________________________________________________________

Assign_EnterFieldHook                                                IOTTT5


Purpose   Identifies a procedure that will be called every time the user
          enters a new field during field input.

Decln.    Assign_EnterFieldHook(Proc:Move_Field_proc);

Remarks   Proc is the name of the procedure to Hook into the IO routines.
          The procedure must be declared far with 2 passed parameters; a
          variable type byte and a variable type byte. The procedure will
          be passed the field ID number that the user is moving to and a
          refresh code.

See Also  Assign_InsHook, Assign_CharHook, Assign_LeaveFieldHook

Example   

    {$F+}
    PROCEDURE INTO_HOOK(VAR ID:BYTE;VAR R:BYTE);
    BEGIN
        IF ID = 21 THEN
           DISPLAY_COMPANY_INFO;
    END;
    {$F-}

BEGIN
    ASSIGN_ENTERFIELDHOOK(INTO_HOOK);
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     IO_ENTERHOOK := @INTO_HOOK;

___________________________________________________________________________

Assign_Finish_Char                                                   IOTTT5


Purpose   Indicates the character that the user can press to terminate
          input.

Decln.    Assign_Finish_Char(Ch:char)

Remarks   Ch is the end input character. The default is the F10 function
          key. The appendix includes a list of the Toolkit character codes.
          Remember to advise the user of the key so that he/she can exit!

See Also  Assign_LeaveFieldHook

Example   


BEGIN
    ASSIGN_FINISH_CHAR(#173);
END;

The input will be terminated when the user presses Alt-X.

___________________________________________________________________________

Assign_Idle_Hook                                                    KeyTTT5


Purpose   Identifies a procedure that will be continually called while the
          program is waiting for a key.

Decln.    Assign_Idle_Hook(Proc:Key_Idle_Type);

Remarks   Proc is the assigned procedure which must be declared far and
          must have no passed parameters. Keep the procedure fast and
          efficient to avoid a sluggish keyboard response. If the procedure
          is a background procedure (such as printing), be sure to check
          for KeyPressed, and exit if the user has pressed a key.

See Also  Assign_Pressed_Hook

Example   

    {$F+}
    PROCEDURE KEY_STATUS;
    BEGIN
        IF CAPSON THEN
           WRITEAT(65,25,WHITE,BLUE,'CAPS')
        ELSE
           WRITEAT(65,25,WHITE,BLUE,'   ');
    END;
    {$F-}

BEGIN
    ASSIGN_IDLE_HOOK(KEY_STATUS);
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     KTTT.IDLE_HOOK := @KEY_STATUS;

___________________________________________________________________________

Assign_InsHook                                                       IOTTT5


Purpose   Identifies a procedure which will be called every time the user
          presses the Ins key during field input.

Decln.    Assign_InsHook(Proc:Insert_proc);


Remarks   Proc is the name of the procedure to Hook into the IO routines.
          The procedure must be declared far with 1 passed parameter; a
          boolean. The procedure is passed the new state of the insert key.
          The default procedure sets the cursor to a full block in Overtype
          mode and an underscore cursor in Insert Mode.

See Also  Assign_CharHook, Assign_EnterFieldHook, Assign_LeaveFieldHook

Example   

    {$F+}
    PROCEDURE INS_HOOK(INSERTON:BOOLEAN);
    BEGIN
        IF INSERTON THEN
           WRITEAT(71,25,WHITE,RED,'INSERT  ')
        ELSE
           WRITEAT(71,25,WHITE,RED,'OVERTYPE');
    END;
    {$F-}

BEGIN
    ASSIGN_INSHOOK(INS_HOOK);
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     IO_INSERTHOOK:= @INS_HOOK;

___________________________________________________________________________

Assign_LeaveFieldHook                                                IOTTT5


Purpose   Identifies a procedure that will be called every time the user
          leaves a field during field input.

Decln.    Assign_LeaveFieldHook(Proc:Move_Field_proc);

Remarks   Proc is the name of the procedure to Hook into the IO routines.
          The procedure must be declared far with 2 passed parameters; a
          variable type byte and a variable type byte. The procedure will
          be passed the field ID number that the user is leaving and a
          refresh code.

See Also  Assign_InsHook, Assign_CharHook, Assign_EnterFieldHook

Example   

    {$F+}
    PROCEDURE LEAVE_HOOK(VAR ID:BYTE;VAR R:BYTE);
    BEGIN
        IF ID = 21 THEN
           R := END_INPUT;

    END;
    {$F-}

BEGIN
    ASSIGN_LEAVEFIELDHOOK(LEAVE_HOOK);
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     IO_LEAVEHOOK := @LEAVE_HOOK;

___________________________________________________________________________

Assign_Pressed_Hook                                                 KeyTTT5


Purpose   Assigns a procedure that will be called every time a key is
          pressed.

Decln.    Assign_Pressed_Hook(Proc: Key_Pressed_Type);

Remarks   Proc is the name of the procedure to Hook into the GetKey
          routine. The procedure must be declared far with 1 passed
          parameter; a variable character. The hooked procedure is passed
          the character that the user just pressed. The character can be
          modified to any value before being returned to GetKey.

See Also  GetKey, Assign_Idle_Hook

Example   

    {$F+}
    PROCEDURE GLOBAL_TASKS(VAR C : CHAR);
    BEGIN
        CASE C OF
        F1  : HELP_ROUTINES;
        ALTX: EXIT_ROUTINES;
        END; {CASE}
    END;
    {$F}

BEGIN
    ....
    ASSIGN_PRESSED_HOOK(GLOBAL_TASKS);
    ....
END;

This procedure is only available for Turbo 5.0 programmers. Turbo 4.0
programmers should replace the procedure with the statement:

     KTTT.PRESSEDHOOK := @GLOBAL_TASKS;


___________________________________________________________________________

Attrib                                                             FastTTT5


Purpose   Changes the display attributes of an area of the screen.

Decln.    Attrib(X1,Y1,X2,Y2,F,B:byte);

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be changed.
          X2, Y2 are the lower right corner coordinates.
          F, B are the foreground and background colors.

See Also  ClearText

Example   

BEGIN
    ATTRIB(20,5,60,15,WHITE,LIGHTGRAY,BLACK);
END;

___________________________________________________________________________

Attr                                                               FastTTT5


Purpose   Combines a foreground and a background color into an attribute
          byte.

Decln.    Attr(F,B:byte):byte;

Returns   Byte

Example   

BEGIN
    FASTWRITE(1,2,ATTR(YELLOW,RED),'HELLO');
END;

This command is the equivalent of:

    WRITEAT(1,1,YELLOW,RED,'HELLO');

___________________________________________________________________________

Beep                                                               MiscTTT5


Purpose   Emits a beep from the PC speaker.

Decln.    Beep;

Example   


BEGIN
    IF INVALID_CHAR(CH) THEN
       BEEP;
END;

___________________________________________________________________________

Box                                                                FastTTT5


Purpose   Draws a box on the screen.

Decln.    Box(X1,Y1,X2,Y2,F,B,BoxType:byte)

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be changed.
          X2, Y2 are the lower right corner coordinates.
          F, B are the foreground and background colors.
          BoxType is a code to indicate the box type: 0 no box, 1 single
          line box, 2 double line box, 3 single top/bottom and double
          sides, 4 double top/bottom and single sides. If a box type in the
          range 5..255 is used, the box is drawn using the ASCII character
          represented by that number.
          
          The area of the display inside the Box border is not cleared.

See Also  FBox, GrowFBox

Example   

BEGIN
    CLRSCR;
    BOX(1,1,80,20,LIGHTCYAN,RED,2);
END;

___________________________________________________________________________

Byte_Field                                                           IOTTT5


Purpose   Assigns a byte variable to an input field.

Decln.    Byte_Field(ID:byte;var BVar:byte;Fmt:Lstring;Min,Max:byte);

Remarks   ID is the field ID number.
          Bvar is the name of the byte variable that will be updated with
          the user's input.
          Fmt is the format of the input field. Pass a null string '' for
          the default.
          Min, Max are the minimum and maximum values for range check. Set
          to 0 to accept any byte value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.


See Also  Add_Field, Word_Field, Integer_Field, LongInt_Field, Real_Field,
          Date_Field, String_Field

Example   

BEGIN
    ACTIVATE_TABLE(3);
    BYTE_FIELD(1, AGE, '', 0,120);
    BYTE_FIELD(2, DAY, '', 1,31);
END;

___________________________________________________________________________

CapsOn                                                              KeyTTT5


Purpose   Indicates if the Caps Lock key is on.

Decln.    CapsOn:boolean;

Returns   Boolean

Remarks   Returns true if the CapsOn key is "illuminated".

See Also  Set_Caps, NumOn, ScrollOn

Example   

BEGIN
    IF CAPSON THEN
       WRITEAT(70,1,WHITE,BLACK,'CAPS')
    ELSE
       WRITEAT(70,1,WHITE,BLACK,'    ')
END;

___________________________________________________________________________

ClearLine                                                          FastTTT5


Purpose   Erases all the text on a line and sets the display attribute.

Decln.    ClearLine(Y,F,B);

Remarks   Y is the line number.
          F, B are the foreground and background colors to set the blank
          line with.

See Also  ClearText

Example   

BEGIN
    CLEARLINE(25,YELLOW,RED);

    PLAINWRITE(1,25,'FATAL ERROR - FILE SERVER EXPLODED');
END;

___________________________________________________________________________

ClearText                                                          FastTTT5


Purpose   Erases all the text on a rectangular area of the screen and sets
          the display attribute.

Decln.    ClearText(X1,Y1,X2,Y2,F,B:byte);

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be erased.
          X2, Y2 are the lower right corner coordinates.
          F, B are the foreground and background colors.

See Also  ClearLine, Attrib

Example   

BEGIN
    CLEARTEXT(1,1,80,13,WHITE,BLACK);
END;

___________________________________________________________________________

ClickWrite                                                         FastTTT5


Purpose   Writes text to the screen with a fancy ticker-tape effect.
          Strictly trivial!

Decln.    ClickWrite(X,Y,F,B:byte;St:strscreen);

Remarks   X, Y are the coordinates of the first character of the string.
          F, B are the foreground and background display colors.
          St is the text to be displayed.

See Also  WriteAT

Example   

BEGIN
    BOX(36,1,44,3,WHITE,BLUE,1);
    CLICKWRITE(35,2,LIGHTCYAN,BLUE,'MAIN MENU')
END;

___________________________________________________________________________

Clock                                                              MiscTTT5


Purpose   Displays the current time


Decln.    Clock;

Remarks   This procedure is designed to be used with the Assign_Idle_Hook
          to display a clock on the screen while the program is waiting for
          keyboard input.
          
          The MiscTTT5 unit includes 4 global byte variables that control
          the clock display:
          
          ClockX, ClockY are the clock display coordinates.
          
          ClockF, ClockB are the foreground and background display colors.

See Also  Assign_Idle_Hook

Example   

BEGIN
    CLOCKX := 68;
    CLOCKY := 1;
    CLOCKF := LIGHTCYAN;
    CLOCKB := BLACK;
    ASSIGN_IDLE_HOOK(CLOCK);
END;

___________________________________________________________________________

ColorScreen                                                        FastTTT5


Purpose   Indicates whether the program is running on a color display
          system.

Decln.    ColorScreen:boolean;

Returns   Boolean

Remarks   The Toolkit automatically determines if the program is running on
          a color or a monochrome system.

See Also  EGAVGASystem

Example   

BEGIN
    IF COLORSCREEN THEN
       WRITEAT(1,1,YELLOW,RED,'ERROR - PRINTER MELTED')
    ELSE
       WRITEAT(1,1,WHITE,BLACK,'ERROR - PRINTER MELTED')
END;


___________________________________________________________________________

ColWrite                                                           FastTTT5


Purpose   Displays a string on the screen using preset colors.

Decln.    ColWrite(X,Y:byte;St:strscreen);

Remarks   X, Y are the coordinates of the first character.
          St is the text to be displayed.
          
          The FastTTT5 unit includes two global variables FCol and BCol
          that Colwrite uses for the display colors.

See Also  WriteAT, FastWrite, PlainWrite, FWrite, FWriteLn

Example   

BEGIN
    FCOL := YELLOW;
    BCOL := BLUE;
    COLWRITE(1,1,'TECHNOJOCK');
    COLWRITE(1,2,'SOFTWARE');
    COLWRITE(1,3,'INC');
END;

___________________________________________________________________________

Confine_Mouse_Horiz                                                 KeyTTT5


Purpose   Restricts the screen position of the mouse cursor horizontally.

Decln.    Confine_Mouse_Horiz(X1,X2:byte);

Remarks   X1, X2 are the leftmost and rightmost X coordinates.
          
          If the mouse is outside the confined coordinates when the
          procedure is called, the mouse is repositioned inside the nearest
          boundary as soon as any mouse activity occurs.

See Also  Confine_Mouse_Vert

Example   

BEGIN
    HIDE_MOUSE_CURSOR;
    CONFINE_MOUSE_HORIZ(20,60);
    SHOW_MOUSE_CURSOR;
END;


___________________________________________________________________________

Confine_Mouse_Vert                                                  KeyTTT5


Purpose   Restricts the screen position of the mouse cursor vertically.

Decln.    Confine_Mouse_Vert(Y1,Y2:byte);

Remarks   Y1, Y2 are the leftmost and rightmost Y coordinates.
          
          If the mouse is outside the confined coordinates when the
          procedure is called, the mouse is repositioned inside the nearest
          boundary as soon as any mouse activity occurs.

See Also  Confine_Mouse_Horiz

Example   

BEGIN
    HIDE_MOUSE_CURSOR;
    CONFINE_MOUSE_HORIZ(20,60);
    CONFINE_MOUSE_VERT(5,15);
    SHOW_MOUSE_CURSOR;
END;

___________________________________________________________________________

CopyFile                                                           MiscTTT5


Purpose   Copies a DOS file.

Decln.    CopyFile(Source, Target:string):byte

Returns   Byte

Remarks   Source and Target are the filenames. They may optionally include
          the drive and/or path. If the Target file already exists, it is
          overwritten.
          
          The return codes are
          
          0    Copy successful
          1    Source and target are the same
          2    Source file not found
          3    Unable to create Target file
          4    Data copy failed

See Also  Exist

Example   

BEGIN

    IF COPYFILE('C:\AUTOEXEC.BAT','C:\AUTOEXEC.BAK') = 0 THEN
       WRITECENTER(1,WHITE,BLACK,'FILE SAVED')
    ELSE
       WRITECENTER(1,YELLOW,RED,'COPY FAILED');
END;

___________________________________________________________________________

CopyScreenBlock                                                     WinTTT5


Purpose   Copies one part of the screen to another part of the display.

Decln.    CopyScreenBlock(X1,Y1,X2,Y2,X,Y:byte);

Remarks   X1, Y1 are the coordinates of the top left corner of the source
          area.
          X2, Y2 are the coordinates of the bottom right corner of the
          source area.
          X, Y are the coordinates of the top left corner of the target
          area.

See Also  MoveScreenBlock

Example   

BEGIN
    COPYSCREENBLOCK(1,1,80,3,1,22)
END;

___________________________________________________________________________

CreateScreen                                                        WinTTT5


Purpose   Creates an empty virtual screen.

Decln.    CreateScreen(Page:byte;Lines:byte);

Remarks   Page is the screen number of the virtual screen.
          Lines is the number of lines (1..255) for the virtual screen. The
          Page number must be in the range 1 to Max_Screens.
          
          The virtual screen is created with a default display attribute of
          yellow on black. If the virtual screen already exists, the screen
          is cleared.

See Also  SaveScreen, RestoreScreen, DisposeScreen, Activate_Virtual_Screen

Example   

BEGIN
    CREATESCREEN(3,25);
    ACTIVATE_VIRTUAL_SCREEN(3);
    ....
END;


___________________________________________________________________________

Create_Fields                                                        IOTTT5


Purpose   Allocates the total number of input fields.

Decln.    Create_Fields(Count:byte);

Remarks   Count is the number of fields to create for the active table. The
          total number of fields must be in the range 2 to MaxInputFields.
          This procedure must be called before Add_Field.

See Also  Create_Tables, Add_Field, Dispose_Fields

Example   

BEGIN
    CREATE_FIELDS(5);
    ADD_FIELD(1, 5,2,5,2, 5,10);
    ADD_FIELD(2, 1,3,1,3, 5,12);
    ADD_FIELD(3, 2,4,2,4, 5,14);
    ADD_FIELD(4, 3,5,3,5, 5,16);
    ADD_FIELD(5, 4,1,4,1, 5,18);
END;

___________________________________________________________________________

Create_Tables                                                         IOTT5


Purpose   Allocates multiple tables for multi-screen input forms.

Decln.    Create_Tables(Count:byte);

Remarks   Count is the number of tables to create. If only one table is
          going to be used throughout the program, the procedure need not
          be called, i.e. the Toolkit initializes the unit with
          Create_Tables(1);

See Also  Create_Fields, Dispose_Tables

Example   

BEGIN
    CREATE_TABLES(3);
    ACTIVATE_TABLE(1);
    CREATE_FIELDS(20);
    ACTIVATE_TABLE(2);
    CREATE_FIELDS(5);
    ACTIVATE_TABLE(3);
    CREATE_FIELDS(10);
END;


___________________________________________________________________________

Ctrl_Pressed                                                        KeyTTT5


Purpose   Indicates whether Ctrl key is depressed.

Decln.    Ctrl_Pressed:boolean

Returns   Boolean

See Also  Alt_Pressed, Shift_pressed

Example   

BEGIN
    ......
    IF CTRL_PRESSED THEN
       WRITECENTER(25,YELLOW,RED,' LET GO OF THE CTRL KEY! ');
END;

___________________________________________________________________________

Date                                                               MiscTTT5


Purpose   Returns the system date nicely formatted.

Decln.    Date:string;

Returns   String

Remarks   The format of the returned string is the day followed by the
          month, day of month and year, e.g.
          
          Monday December 25, 1989

See Also  Time

Example   

BEGIN
    CLRSCR;
    WRITECENTER(1,YELLOW,BLACK,DATE);
END;

___________________________________________________________________________

Date_Field                                                           IOTTT5


Purpose   Assigns a dates variable to an input field.

Decln.    Date_Field(ID:byte;var
          DVar:dates;DateFmt:byte;DispFmt:string;Min,Max:dates);


Remarks   ID is the field ID number.
          Dvar is the name of the dates variable that will be updated with
          the user's input.
          DateFmt is the date format of the input field. The valid date
          formats are declared as constants in the IOTTT5 unit:
               DDMMYY
               MMDDYY
               MMYY
               MMYYYY
               DDMMYYYY
               MMDDYYYY
          DispFmt is the display format for the date. Enter a null string
          if the default is satisfactory, i.e. ##/##/##, ##/####,
          ##/##/####.
          Min, Max are the earliest and latest acceptable dates for range
          checking. Set to 0 to accept any byte value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.

See Also  Add_Field, Word_Field, Integer_Field, LongInt_Field, Real_Field,
          Byte_Field, String_Field

Example   

BEGIN
    DATE_FIELD(8, BIRTHMONTH,MMYYYY,'',0,0);
    DATE_FIELD(9, PARTYDATE,DDMMYY,'(## - ## - ##)',0,0);
END;

___________________________________________________________________________

Date_to_Julian                                                     MiscTTT5


Purpose   Converts a date string to a Julian dates form.

Decln.    Date_to_Julian(StrDate:string;Fmt:byte):dates;

Returns   Dates

Remarks   StrDate is the date in string format.
          Fmt is the date format code.

See Also  Julian_to_Date, Today_In_Julian, Valid_Date

Example   

BEGIN
    JULDATE := DATE_TO_JULIAN('2/20/56',MMDDYY);
END;


___________________________________________________________________________

Date_Within_Range                                                  MiscTTT5


Purpose   Returns true if one date falls between two other dates.

Decln.    Date_Within_Range(Min,Max,Test:dates):Boolean;

Returns   Boolean

Remarks   Min, Max are the beginning and ending dates in Julian form.
          Test is the date being evaluated.

See Also  Valid_Date

Example   

VAR
  THESTART,
  THEEND,
  TESTDATE: DATES
BEGIN
    THESTART := DATE_TO_JULIAN('07/01/89',MMDDYY);
    THEEND   := DATE_TO_JULIAN('10/01/89',MMDDYY);
    TESTDATE := TODAY_IN_JULIAN;
    IF DATE_WITHIN_RANGE(THESTART,THEEND,TESTDATE) THEN
       FWRITELN('IT''S YOUR TURN TO CLEAN THE TOILET!');
END;

___________________________________________________________________________

Define_Colors                                                        IOTTT5


Purpose   Modifies the default display colors for the input fields and
          messages.

Decln.    Define_Colors(HiF,HiB,LoF,LoB,MsgF,MsgB:byte);

Remarks   HiF, HiB are the foreground and background colors of the field
          being edited.
          LoF, LoB are the foreground and background colors of the other
          fields.
          MsgF, MsgB are the foreground and background colors of the
          optional field messages.
          
          The Toolkit will automatically default to one of two color sets,
          depending on whether the system is monochrome or color.

Example   

BEGIN
    IF COLORSCREEN THEN
       DEFINE_COLORS(YELLOW,RED,BLACK,LIGHTGRAY,CYAN,BLUE)
    ELSE
       DEFINE_COLORS(WHITE,BLACK,LIGHTGRAY,BLACK,WHITE,BLACK);
END;


___________________________________________________________________________

DelayKey                                                            KeyTTT5


Purpose   Pauses while the user presses a key or a specified time period
          elapses.

Decln.    DelayKey(Time:integer);

Remarks   Time is the maximum delay period in milliseconds, e.g. 1000 for a
          second.
          
          This procedure is very useful for temporarily displaying
          messages, copyright screens, etc. As soon as the user presses a
          key (or mouse activity occurs), the procedure ends.

See Also  GetKey

Example   

BEGIN
    DISPLAY_HELP;
    DELAYKEY(10000);
    CLRSCR;
END;

___________________________________________________________________________

Delete_All_Topics                                                  NestTTT5


Purpose   Removes menu topics and disposes of the associated memory.

Decln.    Delete_All_Topics(var Menu:Nest_menu);

Remarks   Menu is the name of the menu variable storing the topics.
          
          This procedure should be called if the menu will no longer be
          used during the program execution.

See Also  Delete_A_Topic

Example   

BEGIN
    DELETE_ALL_TOPICS(BOBS_MENU);
END;


___________________________________________________________________________

Delete_A_Topic                                                     NestTTT5


Purpose   Removes a menu topic and disposes of the associated memory.

Decln.    Delete_a_Topic(var Menu:Nest_menu; Topic:byte);

Remarks   Menu is the name of the menu variable storing the topic.
          Topic is the number of the topic which is being removed.

See Also  Delete_All_Topics

Example   

BEGIN
    DELETE_A_TOPICS(BOBS_MENU,12);
END;

___________________________________________________________________________

DisplayMenu                                                        MenuTTT5


Purpose   Displays a superb looking menu!

Decln.    DisplayMenu(MenuDef:Menu_Record;W:boolean;var Choice,
          ECode:integer);

Remarks   MenuDef is the name of the menu record variable.
          W indicates if the menu should be removed and the original screen
          contents restored upon menu completion.
          Choice is returned with the user's menu selection.
          ECode is set to 0 for successful menu selection and 1 if the user
          escaped.

See Also  Menu_Set

Example   

VAR
  MAIN_MENU : MENU_RECORD;
  CHOICE, ERROR : BYTE;
BEGIN
    MENU_SET(MAIN_MENU);
    WITH MAIN_MENU DO
    BEGIN
        HEADING1 := 'MAIN MENU';
        TOPIC[1] := ' LOAD ';
        TOPIC[2] := ' SAVE ';
        TOPIC[3] := ' PRINT ';
        TOPIC[4] := ' QUIT ';
        TOTALPICKS := 4;
    END;

    CHOICE := 1;
    REPEAT
         DISPLAYMENU(MAIN_MENU,FALSE,CHOICE,ERROR);
         CASE CHOICE OF
         1 : LOAD_STUFF;
         2 : SAVE_STUFF;
         3 : PRINT_STUFF;
         4 : EXIT_PROC;
         END;
    UNTIL TRUE=FALSE;
END;

___________________________________________________________________________

Display_All_Fields                                                   IOTTT5


Purpose   Displays the input fields.

Decln.    Display_All_Fields;

Remarks   Normally the input fields are not displayed on the screen until
          the Process_Input procedure is called. This procedure will
          display the fields without putting the user into input mode.

See Also  Process_Input;

Example   

BEGIN
    DISPLAY_ALL_FIELDS;
END;

___________________________________________________________________________

Display_Directory                                                   DirTTT5


Purpose   Displays a Sidekick Plus style directory and allows the user to
          select a file or change directories.

Decln.    Display_Directory(PathMask:StrScreen;var Ecode : integer):
          StrScreen;

Returns   StrScreen

Remarks   PathMask is a string containing a DOS compatible file mask. The
          string may include drive/path.
          Ecode is updated with the following possible values:
          
          0    Successful completion
          1    User escaped
          2    Not enough memory
          99   Unexpected error


Example   

VAR
   ECODE :INTEGER;
   FNAME : STRING;
BEGIN
    FNAME := DISPLAY_DIRECTORY('C:\TTT5\*.PAS',ECODE);
END;

___________________________________________________________________________

DisposeScreen                                                       WinTTT5


Purpose   Disposes of memory that was used to store a screen image.

Decln.    DisposeScreen(Page:byte);

Remarks   Page is the number of the screen to be disposed.
          
          If a saved/virtual screen has been restored and is no longer
          required, call this procedure to dispose of the saved image and
          free the associated memory.

See Also  CreateScreen, SaveScreen, RestoreScreen

Example   

BEGIN
    SAVESCREEN(1);
    ....
    {SOME STATEMENTS THAT MODIFY THE CODE}
    ....
    RESTORESCREEN(1);
    DISPOSESCREEN(1);
END;

___________________________________________________________________________

Dispose_Fields                                                       IOTTT5


Purpose   Disposes of the memory used by all the input fields in the active
          table.

Decln.    Dispose_Fields;

Remarks   This procedure removes all the field information for the active
          table. The variables assigned to the fields are not affected.
          This procedure should only be called after the last input session
          has been terminated.

See Also  Create_Fields, Dispose_Tables

Example   


BEGIN
    ....
    PROCESS_INPUT(1);
    DISPOSE_FIELDS;
END;

___________________________________________________________________________

Dispose_Tables                                                       IOTTT5


Purpose   Disposes of the memory used by all the input tables.

Decln.    Dispose_Tables;

Remarks   All the tables are initialized, and the memory they used is
          disposed of. Only call this procedure when all IO activity for
          the current session has ceased.

See Also  Create_Tables, Dispose_Fields

Example   

BEGIN
    ACTIVATE_TABLE(1);
    DISPOSE_FIELDS;
    ACTIVATE_TABLE(2);
    DISPOSE_FIELDS;
    ACTIVATE_TABLE(3);
    DISPOSE_FIELDS;
    DISPOSE_TABLES;

___________________________________________________________________________

EGAVGASystem                                                       FastTTT5


Purpose   Indicates if the system is equipped with an EGA or VGA display.

Decln.    EGAVGASystem:boolean

Returns   Boolean

Remarks   Returns true if the system is equipped with an EGA or VGA card
          and monitor.

See Also  ColorScreen

Example   

BEGIN
    IF EGAVGASYSTEM THEN
       SETCONDENSEDLINES
    ELSE
       FWRITELN('CANNOT DISPLAY MORE LINES - THE SYSTEM IS TOO CHEAP!');
END;


___________________________________________________________________________

Exist                                                              MiscTTT5


Purpose   Indicates whether a file exists.

Decln.    Exist(Filename:string):boolean;

Returns   Boolean

Remarks   FileName is the name of the file being checked. If may contain
          wild card characters, i.e. the function will return true if any
          file is found matching the wild card template. The function will
          find any file type including readonly, directory, hidden, system,
          etc.

Example   

BEGIN
    IF NOT EXIST('C:\AUTOEXEC.BAT') THEN
       BEEP;
END;

___________________________________________________________________________

ExtractWords                                                       StrnTTT5


Purpose   Returns a number of specified words from a string.

Decln.    ExtractWords(Start,Count:byte;Str:string):string;

Returns   String

Remarks   Start is the number of the first word to extract.
          Count is the number of words to extract.
          Str is the source string.

See Also  PosWord, WordCnt

Example   

VAR LASTBIT : STRING;
BEGIN
    LASTBIT := EXTRACTWORDS(4,3,'WHO THE HELL SAYS CENSORSHIP IS GOOD!');
END;

___________________________________________________________________________

FastWrite                                                          FastTTT5


Purpose   Writes a string to the screen very quickly.


Decln.    Fastwrite(X,Y,A:byte;St:StrScreen);

Remarks   X, Y are the coordinates of the first character.
          A is the display attribute.
          St is the text to display.
          
          WriteAT should be used in preference to Fastwrite because it is
          passed the foreground and background color attributes separately,
          rather than the combined attribute.

See Also  WriteAT, ColWrite, PlainWrite, FWrite, FwriteLN

Example   

BEGIN
    FASTWRITE(1,1,14,'TOP LEFT OF SCREEN');
    FASTWRITE(69,25,ATTR(15,4),'BOTTOM RIGHT');
END;

___________________________________________________________________________

FBox                                                               FastTTT5


Purpose   Draws a filled box on the screen.

Decln.    FBox(X1,Y1,X2,Y2,F,B,BoxType:byte)

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be changed.
          X2, Y2 are the lower right corner coordinates.
          F, B are the foreground and background colors.
          BoxType is a code to indicate the box type: 0 no box, 1 single
          line box, 2 double line box, 3 single top/bottom and double
          sides, 4 double top/bottom and single sides. If a box type in the
          range 5..255 is used, the box is drawn using the ASCII character
          represented by that number.
          
          The area of the display inside the Box border is cleared.

See Also  Box, GrowFBox

Example   

BEGIN
    CLRSCR;
    FBOX(1,1,80,20,LIGHTCYAN,RED,2);
END;


___________________________________________________________________________

Field_Rules                                                          IOTTT5


Purpose   Defines the input characteristics of a field.

Decln.    Field_Rules(ID:byte;Rules:word;AChar,DChar:IOCharSet);

Remarks   ID is the field ID number.
          Rules is a word that indicates the display characteristics of the
          field. There are 5 different field Rules:
               ALLOWNULL
               SUPPRESSZERO
               RIGHTJUSTIFY
               ERASEDEFAULT
               JUMPIFFULL
          The desired attributes are summed to give the combined field
          Rules.
          AChar is a set of allowable characters that the user will be able
          to input. Set it to [#0] for the default characters.
          DChar is a set of characters that the user will not be able to
          input. Set it to No_Char (defined as [#0]) for the default
          characters.

See Also  Set_Default_Rules

Example   

BEGIN
    FIELD_RULES(2,ALLOWNULL+SUPPRESSZERO,NO_CHAR,['*','?']);
    FIELD_RULES(3,RIGHTJUSTIFY,NO_CHAR,NO_CHAR);
END;

___________________________________________________________________________

File_Directory                                                     MiscTTT5


Purpose   Extracts the path section from a fully qualified filename.

Decln.    File_Directory(FullName:string):string;

Returns   String

Remarks   This function is only available to the Turbo 5.0 programmer.
          
          FullName is the source filename.
          
          If the path is not the root directory, the last backslash '\' is
          removed.

See Also  File_Drive, File_Ext, File_name

Example   


VAR
  F : STRING;
BEGIN
    F := FILE_DIRECTORY('C:\TURBO5\TTT5\MISCTTT5.PAS');
END;

F is assigned the value "\TURBO\TTT5".

___________________________________________________________________________

File_Drive                                                         MiscTTT5


Purpose   Extracts the drive from a fully qualified filename.

Decln.    File_Drive(FullName:string):string;

Returns   String

Remarks   This function is only available to the Turbo 5.0 programmer.
          
          FullName is the source filename.
          
          If the filename does not include a drive, a null string '' is
          returned. The colon ':' is removed (sorry Ronnie).

See Also  File_Directory, File_Ext, File_Name

Example   

VAR
  F : STRING;
BEGIN
    F := FILE_DRIVE('C:\TURBO5\TTT5\MISCTTT5.PAS');
END;

F is assigned the value "C".

___________________________________________________________________________

File_Ext                                                           MiscTTT5


Purpose   Extracts the file extension from a fully qualified filename.

Decln.    File_Ext(FullName:string):string;

Returns   String

Remarks   This function is only available to the Turbo 5.0 programmer.
          
          FullName is the source filename.
          
          The period is removed.


See Also  File_Drive, File_Directory, File_Name

Example   

VAR
  F : STRING;
BEGIN
    F := FILE_EXT('C:\TURBO5\TTT5\MISCTTT5.PAS');
END;

F is assigned the value "PAS".

___________________________________________________________________________

File_Name                                                          MiscTTT5


Purpose   Extracts the file name, excluding the extension, from a fully
          qualified filename.

Decln.    File_Name(FullName:string):string;

Returns   String

Remarks   This function is only available to the Turbo 5.0 programmer.
          
          FullName is the source filename.

See Also  File_Drive, File_Directory, File_Ext

Example   

VAR
  F : STRING;
BEGIN
    F := FILE_NAME('C:\TURBO5\TTT5\MISCTTT5.PAS');
END;

F is assigned the value "MISCTTT5".

___________________________________________________________________________

File_Size                                                          MiscTTT5


Purpose   Returns the size of a file in bytes.

Decln.    File_Size(Filename:string):LongInt

Returns   Longint

Remarks   FileName is the source filename.
          
          If the file is not found, a file size of -1 is returned.


See Also  Exist

Example   

VAR
  S : LONGINT;
BEGIN
    S := FILE_SIZE('C:\COMMAND.COM');
END;

___________________________________________________________________________

FillScreen                                                          WinTTT5


Purpose   Fills part or all of the screen with a specific character.

Decln.    FillScreen(X1,Y1,X2,Y2,F,B:byte;Chr:char);

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be filled.
          X2, Y2 are the coordinates of the lower right corner.
          F, B are the foreground and background display colors.
          Chr is the character to fill the screen.

See Also  ClearText, Attrib

Example   

BEGIN
    FILLSCREEN(1,1,80,25,CYAN,BLACK,CHR(177));
END;

___________________________________________________________________________

FindCursor                                                          WinTTT5


Purpose   Determines the size and location of the cursor.

Decln.    FindCursor(var X,Y,Top,Bot:byte);

Remarks   The four parameters must be variables.
          
          X, Y are updated with the coordinates of the cursor.
          Top, Bot are updated with the top and bottom cursor scan lines.
          
          The scan codes refer to the actual location of the top and bottom
          of the cursor within a character field, where 0 is the top of the
          field (such as the top stroke of the letter T), and either 12 or
          7 is the bottom of the field, on monochrome and color displays
          respectively.

See Also  SizeCursor, OnCursor, OffCursor, HalfCursor, FullCursor


Example   

VAR
  COL,ROW,T,B : BYTE;
BEGIN
    FINDCURSOR(COL,ROW,T,B);
END;

___________________________________________________________________________

First                                                              StrnTTT5


Purpose   Extracts the first part of a string.

Decln.    First(N:byte;Str:string):string;

Returns   String

Remarks   N is the number of leftmost characters to extract.
          Str is the source string.

See Also  Last

Example   

VAR
  F : STRING;
BEGIN
    F := FIRST(25,'ALL GOOD THINGS WILL COME TO PASS');
END;

The string F is assigned the value "All good things will come".

___________________________________________________________________________

First_Capital                                                      StrnTTT5


Purpose   Returns the first capital letter in a string.

Decln.    First_Capital(Str:string):char;

Returns   Char

Remarks   Str is the source string.
          
          The function returns a null #0 if the string does not contain any
          capital letters.

See Also  First_Capital_Pos

Example   


VAR
  CAP : CHAR;
BEGIN
    CAP := FIRST_CAPITAL('3 LOAD');
END;

The variable Cap is updated with the value 'L'.

___________________________________________________________________________

First_Capital_Pos                                                  StrnTTT5


Purpose   Returns the character positon of the first capital letter.

Decln.    First_Capital_Pos(Str:string):byte;

Returns   Byte

Remarks   Str is the source string.
          
          0 is returned if the string does not contain a capital letter.

See Also  First_Capital

Example   

VAR
  P : BYTE;
BEGIN
    P := FIRST_CAPITAL_POS('3 LOAD');
END;

The variable P is assigned the value 3.

___________________________________________________________________________

FlushKeyBuffer                                                     MiscTTT5


Purpose   Removes all keystrokes from the keyboard buffer.

Decln.    FlushKeyBuffer;

Remarks   Use this procedure to stop the type ahead effect.

See Also  GetKey

Example   

VAR
  ANS : CHAR;
BEGIN
    FWRITE(1,1,WHITE,RED,'YOU REALLY WANT TO FORMAT THE SERVER? (Y/N)');
    FLUSHKEYBUFFER;

    ANS := GETKEY;
    IF UPCASE(ANS) = 'Y' THEN
       FORMATSERVER;
END;

The keyboard is flushed in case the user had previously typed a Y in
anticipation of a different question.

___________________________________________________________________________

FullCursor                                                          WinTTT5


Purpose   Changes the text cursor to a full block.

Decln.    FullCursor;

Remarks   Sets the cursor on monochrome and color systems.

See Also  SizeCursor, HalfCursor, OnCursor, OffCursor.

Example   

BEGIN
    IF OVERTYPEMODE THEN
       FULLCURSOR;
END;

___________________________________________________________________________

Future_date                                                        MiscTTT5


Purpose   Returns the date string by adding a specified number of days to a
          start date.

Decln.    Future_date(BaseDate:string; Fmt:byte;Days:word):string;

Returns   String

Remarks   BaseDate is the start date in string form.
          Fmt is the date format code of the date. The valid date formats
          are declared as constants in the MiscTTT5 unit:
               DDMMYY
               MMDDYY
               MMYY
               MMYYYY
               DDMMYYYY
               MMDDYYYY
          Days is the number of days from the BaseDate to the computed
          date.

See Also  Date_Within_Range, Valid_date, Date_to_Julian

Example   


BEGIN
    WRITEAT(1,1,14,0,'THE BILL IS DUE
'+FUTURE_DATE('07/06/89',MMDDYY,60)+'.');
END;

 The function computes the date that is 60 days after 07/06/89.

___________________________________________________________________________

FWriteLn                                                           FastTTT5


Purpose   Writes text at current cursor location and moves cursor to
          beginning of next line.

Decln.    FWriteLn(Str:strScreen);

Remarks   Str is the text to be displayed.
          
          The text is displayed in the FCol and Bcol colors, the same as
          ColWrite.

See Also  ColWrite, FWrite

Example   

BEGIN
    CLRSCR;
    FCOL := YELLOW;
    BCOL := BLACK;
    FWRITELN('REMEMBER TO TYPE EXIT TO RETURN');
    FWRITELN('TO THE SPREADSHEET.');
END;

___________________________________________________________________________

FWrite                                                             FastTTT5


Purpose   Writes text at current cursor location and moves cursor to the
          end of the text.

Decln.    FWrite(Str:strscreen);

Remarks   Str is the text to be displayed.
          
          The text is displayed in the FCol and Bcol colors, the same as
          ColWrite.

See Also  ColWrite, FWriteLn

Example   

VAR

  CH : CHAR;
BEGIN
    FWRITE('DELETE THE FILE? (Y/N)');
    CH := GETKEY;
    .....
END;

___________________________________________________________________________

GetKey                                                              KeyTTT5


Purpose   Reads a character from the keyboard or mouse.

Decln.    GetKey:char;

Returns   Char

Remarks   This is the main function in the KeyTTT5 unit and is used
          throughout the Toolkit.
          
          This is a fully functional replacement for Turbo's internal
          ReadKey command. Both typed characters and mouse activity are
          returned. Refer to the appendix for a full list of all the
          character codes that are returned.

See Also  DelayKey, FlushKeyBuffer

Example   

VAR
  CH : CHAR;
BEGIN
    WRITECENTER(25,LIGHTCYAN,BLUE,'PRESS F10 TO CONTINUE');
    CH := GETKEY;
    IF CH <> #196 THEN
       HALT;
END;

The character code for F10 is #196. (See Appendix.)

___________________________________________________________________________

GetScreenAttr                                                       WinTTT5


Purpose   Returns the display attribute (colors) at a specific location on
          the screen.

Decln.    GetScreenAttr(X,Y:byte):byte;

Returns   Byte

Remarks   X, Y are the screen coordinates.
          

          The display color is returned as a combined foreground/background
          attribute.

See Also  GetScreenChar

Example   

VAR
  OLDATT:BYTE
BEGIN
    OLDATT := GETSCREENATTR(1,1);
END;

The variable OldAtt is assigned the color attribute of the top left corner
of the display.

___________________________________________________________________________

GetScreenChar                                                       WinTTT5


Purpose   Returns the display character at a specific location on the
          display.

Decln.    GetScreenChar(X,Y:byte):char;

Returns   Char

Remarks   X, Y are the screen coordinates.

See Also  GetScreenAttr, GetScreenStr

Example   

VAR
  OLDCHAR;
BEGIN
    OLDCHAR := GETSCREENCHAR(20,5);
END;

The variable OldChar is assign the character that is displayed in column 20
on line 5.

___________________________________________________________________________

GetScreenStr                                                        WinTTT5


Purpose   Updates a string with the characters displayed at a specific
          location on the monitor.

Decln.    GetScreenStr(X1,X2,Y:byte;var Str:StrScreen);

Remarks   X1, X2 are the leftmost and rightmost X coordinates.
          Y is the line number.

          Str is the string variable that will be updated with the screen
          string.

See Also  GetScreenAttr, GetScreenChar

Example   

VAR
  S : STRING;
BEGIN
    GETSCREENSTR(30,48,1,S);
    IF S <> 'TECHNOJOCK SOFTWARE' THEN
    BEGIN
        FWRITELN('ILLEGAL COPYRIGHT NOTICE - ABORTING');
        HALT;
    END;
END;

___________________________________________________________________________

Get_Mouse_Action                                                    KeyTTT5


Purpose   Determines mouse activity, i.e. movement and button presses.

Decln.    Get_Mouse_Action(var But:button;var Hor,Ver:integer);

Remarks   But is updated with one of the following constants: NoB, LeftB,
          RightB, BothB.
          Hor, Ver are updated with the mouse movement in columns and rows
          (not pixels). The movement is returned relative to the last time
          the procedure was called.

See Also  Mouse_Installed

Example   

VAR
  B : BUTTON;
  X,Y : BYTE;
BEGIN
    REPEAT
         GET_MOUSE_ACTION(B,X,Y);
    UNTIL B = LEFTB;
END;

The program continues looping until the left button is pressed.

___________________________________________________________________________

GrowFBox                                                           FastTTT5


Purpose   Draws an exploding box.


Decln.    GrowFBox(X1,Y1,X2,Y2,F,B,BoxType:Byte);

Remarks   X1, Y1 are the coordinates of the top left corner of the area to
          be changed.
          X2, Y2 are the lower right corner coordinates.
          F, B are the foreground and background colors.
          BoxType is a code to indicate the box type: 0 no box, 1 single
          line box, 2 double line box, 3 single top/bottom and double
          sides, 4 double top/bottom and single sides. If a box type in the
          range 5..255 is used, the box is drawn using the ASCII character
          represented by that number.
          
          The area of the display inside the Box border is cleared.
          
          If the box grows too quickly or too slowly, alter the global
          variable Speed. The default value is 200; increase the value to
          slow the speed (ugh!) or decrease it to speed the box up.

See Also  Box, FBox

Example   

BEGIN
    SPEED := 400;
    GROWFBOX(1,1,80,12,WHITE,RED,1);
    GROWFBOX(1,13,80,25,BLUE,LIGHTGRAY,2);
END;

___________________________________________________________________________

GrowMkWin                                                           WinTTT5


Purpose   Creates a text window on the screen and saves the screen contents
          that have been overlayed. This procedure is the functional
          equivalent of MkWin, except that the window box explodes onto the
          screen.

Decln.    GrowMkWin(X1,Y1,X2,Y2,F,B,BoxType:byte);

Remarks   X1, Y1 are the top left coordinates of the window.
          X2, Y2 are the bottom right coordinates of the window.
          F, B are the foreground and background display colors.
          BoxType is the box code. The normal box codes are:
               0    Box
               1    Single line
               2    Double Line
               3    Single top/bottom and double sides
               4    Double top/bottom and double sides
               5    Same as code 0 plus a box shadow
               6    Same as code 1 plus a box shadow
               7    Same as code 2 plus a box shadow
               8    Same as code 3 plus a box shadow
               9    Same as code 4 plus a box shadow
          If any other code (i.e. 10..255) is used, the box is drawn using

          the ASCII character represented by the number.
          
          If the box grows too quickly or too slowly, alter the global
          variable Speed. The default value is 200; increase the value to
          slow the speed or decrease it to speed the box up.

See Also  MkWin, RmWin

Example   

BEGIN
    SPEED := 400;
    GROWMKWIN(1,1,80,12,WHITE,RED,1);
END;

___________________________________________________________________________

HalfCursor                                                          WinTTT5


Purpose   Changes the cursor to a half block.

Decln.    HalfCursor;

Remarks   Sets the cursor on monochrome and color systems.

See Also  SizeCursor, FullCursor, OnCursor, OffCursor.

Example   

BEGIN
    IF INSERTMODE THEN
       HALFCURSOR;
END;

___________________________________________________________________________

Hide_Mouse_Cursor                                                   KeyTTT5


Purpose   Makes the mouse cursor invisible.

Decln.    Hide_Mouse_Cursor;

Remarks   The mouse is still active, but will not be visible. The text
          cursor is not affected by this procedure.

See Also  Show_Mouse_Cursor;

Example   

BEGIN
    HIDE_MOUSE_CURSOR;
END;


___________________________________________________________________________

HorizLine                                                          FastTTT5


Purpose   Draws a horizontal line on the screen.

Decln.    HorizLine(X1,X2,Y,F,B,LineType:byte);

Remarks   X1, X2 are the leftmost and rightmost X coordinates of the line.
          Y is the Y coordinate.
          F, B are the foreground and background display colors.
          LineType is 1 for a single line and 2 for a double line.

See Also  VertLine, Box

Example   

BEGIN
    HORIZLINE(10,70,13,LIGHTCYAN,BLUE,1);
END;

Draws a single line across the center of the display.

___________________________________________________________________________

Initialize_Menu                                                    NestTTT5


Purpose   Initializes a menu variable in preparation for the addition of
          topics.

Decln.    Initialize_Menu(var M:Nest_menu;Tit:MenuStr;W:byte;L:word);

Remarks   M is the menu variable being initialized.
          Tit is an optional title for the menu.
          W is the width of the menu box. If a width 0 is used, the Toolkit
          will determine a suitable width.
          L is the number of visible menu lines (or topics) to display in
          the menu window. If L is set to 0, the Toolkit will determine a
          suitable value.

See Also  Add_Topic

Example   

VAR
  MAIN_MENU,
  FILE_MENU,
  MISC_MENU: NEST_MENU
BEGIN
    INITIALIZE_MENU(MAIN_MENU,'MAIN MENU',15,5);
    INITIALIZE_MENU(FILE_MENU,'FILE COMMANDS',0,0);
    INITIALIZE_MENU(MISC_MENU,'POT POURRI',0,20);
END;


___________________________________________________________________________

Integer_Field                                                        IOTTT5


Purpose   Assigns an integer variable to an input field.

Decln.    Integer_Field(ID:byte;var
          IVar:integer;Fmt:string;Min,Max:integer);

Remarks   ID is the field ID number.
          Ivar is the name of the integer variable that will be updated
          with the user's input.
          Fmt is the format of the input field. Pass a null string '' for
          the default.
          Min, Max are the minimum and maximum values for range check. Set
          to 0 to accept any integer value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.

See Also  Add_Field, Word_Field, Byte_Field, LongInt_Field, Real_Field,
          Date_Field, String_Field

Example   

BEGIN
    ACTIVATE_TABLE(3);
    INTEGER_FIELD(3, LENGTH, '', 0,0);
    INTEGER_FIELD(4, WIDTH, '', 1,5000);
END;

___________________________________________________________________________

Int_to_Str                                                         StrnTTT5


Purpose   Converts a byte, word, integer or longint to a string.

Decln.    Int_to_Str(Number:longint):string;

Returns   String

Remarks   Number is the value to be converted.

See Also  Real_to_Str, Str_to_Int

Example   


VAR
  SALARY : STRING;
BEGIN
    SALARY := INT_TO_STR(50000);
END;


___________________________________________________________________________

Julian_to_Date                                                     MiscTTT5


Purpose   Converts a Julian date into a string.

Decln.    Julian_to_Date(J:dates;Fmt:byte):string;

Returns   String

Remarks   J is the date in Julian form.
          Fmt is the date format code of the date. The valid date formats
          are declared as constants in the MISCTTT5 unit:
               DDMMYY
               MMDDYY
               MMYY
               MMYYYY
               DDMMYYYY
               MMDDYYYY

See Also  Date_to_Julian

Example   

BEGIN
    FWRITE(JULIAN_TO_DATE(TODAY_IN_JULIAN,MMDDYYYY));
END;

___________________________________________________________________________

LastPos                                                            StrnTTT5


Purpose   Finds the last occurence of a character in a string.

Decln.    LastPos(C:char;Str:string):byte;

Returns   Byte

Remarks   C is the character.
          Str is the source string.

See Also  Pos (Internal Turbo function)

Example   

VAR
  B : BYTE;
BEGIN
    B := LASTPOS('J','TECHNOJOCK SOFTWARE!');
END;

The variable B is assigned the value 12.


___________________________________________________________________________

Last                                                               StrnTTT5


Purpose   Extracts the last part of a string.

Decln.    Last(Count:byte; Str:string):string;

Returns   String

Remarks   Count is the number of characters to extract.
          Str is the source string.

See Also  First

Example   

VAR
  TTT : STRING;
BEGIN
    TTT := LAST(11,'NEVER TAKE DRUGS!');
END;

 The string TTT is assigned the value "Take Drugs!".

___________________________________________________________________________

LeftShift_Pressed                                                   KeyTTT5


Purpose   Determines whether the Left shift key is being depressed.

Decln.    LeftShift_Pressed:boolean;

Returns   Boolean

Remarks   Returns true if the left shift key is being depressed.

See Also  RightShift_Pressed, Shift_Pressed

Example   

BEGIN
    IF LEFTSHIFT_PRESSED THEN
       WRITEAT(1,25,YELLOW,BLACK,CHR(24));
END;

___________________________________________________________________________

LongInt_Field                                                        IOTTT5


Purpose   Assigns a longint variable to an input field.


Decln.    LongInt_Field(ID:byte;var
          LVar:longint;Fmt:string;Min,Max:longint);

Remarks   ID is the field ID number.
          Lvar is the name of the longint variable that will be updated
          with the user's input.
          Fmt is the format of the input field. Pass a null string '' for
          the default.
          Min, Max are the minimum and maximum values for range check. Set
          to 0 to accept any longint value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.

See Also  Add_Field, Word_Field, Byte_Field, Integer_Field, Real_Field,
          Date_Field, String_Field

Example   

BEGIN
    ACTIVATE_TABLE(3);
    LONGINT_FIELD(5, AREA, '', 1000,60000);
    LONGINT_FIELD(6, VOLUME, '', 0,0);
END;

___________________________________________________________________________

Lower                                                              StrnTTT5


Purpose   Converts a string to lower case.

Decln.    Lower(Str:string):string;

Returns   String

Remarks   Str is the source string.
          
          Only the upper case alphabet A to Z is affected.

See Also  Upper, Proper

Example   

VAR
  TTT : STRING
BEGIN
    TTT := LOWER('LEARNING TO TYPE');
END;

The variable TTT is assigned the value "learning to type".


___________________________________________________________________________

Menu_Set                                                           MenuTTT5


Purpose   Sets a menu variable with the Toolkit default values.

Decln.    Menu_Set(var M:Menu_Record);

Remarks   M is the Menu_Record variable that will define the menu display
          characteristics.

See Also  DisplayMenu

Example   

VAR
  MAIN ; MENU_RECORD;
BEGIN
    MENU_SET(MAIN);
END;

The variable Main is set with the default menu settings.

___________________________________________________________________________

MkWin                                                               WinTTT5


Purpose   Creates a text window on the screen and saves the screen contents
          that have been overlayed.

Decln.    MkWin(X1,Y1,X2,Y2,F,B,BoxType:byte);

Remarks   X1, Y1 are the top left coordinates of the window.
          X2, Y2 are the bottom right coordinates of the window.
          F, B are the foreground and background display colors.
          BoxType is the box code. The normal box codes are:
               0    Box
               1    Single line
               2    Double Line
               3    Single top/bottom and double sides
               4    Double top/bottom and double sides
               5    Same as code 0 plus a box shadow
               6    Same as code 1 plus a box shadow
               7    Same as code 2 plus a box shadow
               8    Same as code 3 plus a box shadow
               9    Same as code 4 plus a box shadow
          If any other code (i.e. 10..255) is used, the box is drawn using
          the ASCII character represented by the number.

See Also  GrowMkWin, RmWin

Example   


BEGIN
    MKWIN(1,1,40,7,WHITE,BLUE,4);
END;

A white on blue window is displayed in the top left area of the display.

___________________________________________________________________________

Modify_Topic                                                       NestTTT5


Purpose   To change all the settings of a menu topic.

Decln.    Modify_Topic(var
          M:Nest_Menu;TopicNo:word;N:MenuStr;A:Boolean;Key:char;code:intege
          r;Sub:MenuPtr);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          N is the topic text, i.e. the string that will be displayed in
          the menu.
          A indicates if the topic is selectable or non-selectable. Set to
          true for normal selectable topics.
          Key is the character code of a hotkey that can be used to execute
          the topic. Set to #0 to disable the hotkey.
          Code is an integer code that will be passed to the despatcher
          procedure to indicate that the user selected this topic. Set the
          code to zero if a sub-menu is going to be called.
          Sub is the address of a sub-menu that is to be called if the
          topic is selected. Set to NIL if the topic executes a despatcher
          procedure rather than displaying a sub-menu.

See Also  Add_Topic, Modify_Topic_Name, Modify_Topic_Active,
          Modify_Topic_Hotkey, Modify_Topic_Retcode, Modify_Topic_Submenu

Example   

BEGIN
    MODIFY_TOPIC(BOBS_MENU,3,'FILE LOAD',TRUE,#166,300,NIL);
END;

___________________________________________________________________________

Modify_Topic_Active                                                NestTTT5


Purpose   Modifies the activity status of a topic.

Decln.    Modify_Topic_Active(var M:Nest_Menu;TopicNo:word;Active:Boolean);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          Active indicates if the topic is selectable or non-selectable.
          Set to true for normal selectable topics.
          


See Also  Add_Topic, Modify_Topic_Name, Modify_Topic, Modify_Topic_Hotkey,
          Modify_Topic_Retcode, Modify_Topic_Submenu

Example   

BEGIN
    MODIFY_TOPIC_ACTIVE(BOBS_MENU,7,TRUE);
END;

___________________________________________________________________________

Modify_Topic_HotKey                                                NestTTT5


Purpose   Modifies the hotkey selection code of a topic.

Decln.    Modify_Topic_Hotkey(var M:Nest_Menu;TopicNo:word;Key:char);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          Key is the character code of a hotkey that can be used to execute
          the topic. Set to #0 to disable the hotkey.

See Also  Add_Topic, Modify_Topic_Name, Modify_Topic_Active, Modify_Topic,
          Modify_Topic_Retcode, Modify_Topic_Submenu

Example   

BEGIN
    MODIFY_TOPIC_HOTKEY(BOBS_MENU,1,#146);
END;

___________________________________________________________________________

Modify_Topic_Name                                                  NestTTT5


Purpose   Modifies the topic description.

Decln.    Modify_Topic_Name(var M:Nest_Menu;TopicNo:word;Txt:MenuStr);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          Txt is the topic text, i.e. the string that will be displayed in
          the menu.

See Also  Add_Topic, Modify_Topic, Modify_Topic_Active,
          Modify_Topic_HotKey, Modify_Topic_Retcode, Modify_Topic_Submenu

Example   

BEGIN
    MODIFY_TOPIC_NAME(BOBS_MENU,3,'INSERT OFF');
END;


___________________________________________________________________________

Modify_Topic_Retcode                                               NestTTT5


Purpose   Modifies the topic code that is passed to the despatcher when the
          topic is selected.

Decln.    Modify_Topic_Retcode(var M:Nest_Menu;TopicNo:word;Retcode:char);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          RetCode is an integer code that will be passed to the despatcher
          procedure to indicate that the user selected this topic. Set the
          code to zero if a sub-menu is going to be called.

See Also  Add_Topic, Modify_Topic, Modify_Topic_Active,
          Modify_Topic_HotKey, Modify_Topic_Name, Modify_Topic_Submenu

Example   

BEGIN
    MODIFY_TOPIC_RETCODE(BOBS_MENU,11,400);
END;

___________________________________________________________________________

Modify_Topic_Submenu                                               NestTTT5


Purpose   Modifies the Topic pointer to a sub-menu.

Decln.    Modify_Topic_SubMenu(var M:Nest_Menu;TopicNo:word;Sub:MenuPtr);

Remarks   M is the name of the menu variable that contains the topic.
          TopicNo is the number of the topic to be modified.
          Sub is the address of a sub-menu that is to be called if the
          topic is selected.  Use the '@' argument to pass the address of a
          menu, e.g. @Print_menu. Set to NIL if the topic executes a
          despatcher procedure rather than displaying a sub-menu.

See Also  Add_Topic, Modify_Topic, Modify_Topic_Active,
          Modify_Topic_HotKey, Modify_Topic_Retcode, Modify_Topic_Name

Example   

BEGIN
    MODIFY_TOPIC_SUBMENU(BOBS_MENU,3,@FILE_MENU);
END;


___________________________________________________________________________

Mouse_Installed                                                     KeyTTT5


Purpose   Indicates if a Microsoft compatible mouse is installed.

Decln.    Mouse_Installed:boolean;

Returns   Boolean

Remarks   This procedure is automatically called when the program is loaded
          and updates the global boolean variable Moused. Check the
          variable Moused in preference to calling this procedure.

___________________________________________________________________________

MoveScreenBlock                                                     WinTTT5


Purpose   Moves one part of the screen to another part of the display.

Decln.    MoveScreenBlock(X1,Y1,X2,Y2,X,Y:byte);

Remarks   X1, Y1 are the coordinates of the top left corner of the source
          area.
          X2, Y2 are the coordinates of the bottom right corner of the
          source area.
          X, Y are the coordinates of the top left corner of the target
          area.
          
          The source area of the screen is replaced with spaces, i.e.
          blanked out.

See Also  CopyScreenBlock

Example   

BEGIN
    MOVESCREENBLOCK(1,1,80,3,1,22)
END;

___________________________________________________________________________

Move_Mouse                                                          KeyTTT5


Purpose   Repositions the mouse cursor.

Decln.    Move_Mouse(X,Y:byte);

Remarks   X, Y are the new mouse coordinates.
          
          This procedure is the functional equivalent of GotoXY for the
          text cursor.


See Also  Confine_Mouse_Horiz, Confine_Mouse_Vert

Example   

BEGIN
    MOVE_MOUSE(40,10);
END;

___________________________________________________________________________

NumOn                                                               KeyTTT5


Purpose   Indicates if the Num Lock key is on.

Decln.    NumOn:boolean;

Returns   Boolean

Remarks   Returns true if the Num Lock key is "illuminated".

See Also  Set_Num, CapsOn, ScrollOn

Example   

BEGIN
    IF NUMON THEN
       WRITEAT(70,1,WHITE,BLACK,'NUM')
    ELSE
       WRITEAT(70,1,WHITE,BLACK,'   ')
END;

___________________________________________________________________________

OffCursor                                                           WinTTT5


Purpose   Makes the text cursor disappear.

Decln.    OffCursor;

Remarks   This procedure turns the cursor off on monochrome and color
          systems.

See Also  SizeCursor, HalfCursor, OnCursor, FullCursor

Example   

BEGIN
    OFFCURSOR;
END;


___________________________________________________________________________

OnCursor                                                            WinTTT5 


Purpose   Makes the text cursor appear in the default DOS shape, i.e. an
          underscore.

Decln.    OnCursor;

Remarks   This procedure resets the cursor on monochrome and color systems.

See Also  SizeCursor, HalfCursor, OffCursor, FullCursor

Example   

BEGIN
    ONCURSOR;
END;

___________________________________________________________________________

OverType                                                           StrnTTT5


Purpose   Combines two overlapping strings.

Decln.    OverType(N:byte;Source,Target:string):string;

Returns   String

Remarks   N is the character position that string Source will be overlayed
          on string Target.
          
          Any characters after the Nth position in string Target will be
          overwritten by the characters in string Source.

Example   

VAR
   TTT:STRING
BEGIN
    TTT := OVERTYPE(5,'TECHNOJOCK','BOB AINSBURY');
END;

The string TTT is assigned the value "Bob TechnoJock".

___________________________________________________________________________

PadCenter                                                          StrnTTT5


Purpose   Expands and centers a string.

Decln.    PadCenter(Str:String;Size:byte;Pad:Char);string;


Returns   String

Remarks   Str is the source string.
          Size is the new string length.
          Pad is the character to expand the string with.

See Also  PadLeft, PadRight

Example   

VAR
  TTT:STRING;
BEGIN
    TTT := PADCENTER(' ASTERISK ',20,'*');
END;

The string TTT is assigned the value "***** ASTERISK *****".

___________________________________________________________________________

Padleft                                                            StrnTTT5


Purpose   Expands and left justifies a string.

Decln.    PadLeft(Str:String;Size:byte;Pad:Char);string;

Returns   String

Remarks   Str is the source string.
          Size is the new string length.
          Pad is the character to expand the string with.

See Also  PadCenter, PadRight

Example   

VAR
  TTT:STRING;
BEGIN
    TTT := PADLEFT(' ASTERISK ',20,'*');
END;

The string TTT is assigned the value " ASTERISK **********".

___________________________________________________________________________

PadRight                                                           StrnTTT5


Purpose   Expands and right justifies a string.

Decln.    PadRight(Str:String;Size:byte;Pad:Char);string;


Returns   String

Remarks   Str is the source string.
          Size is the new string length.
          Pad is the character to expand the string with.

See Also  PadCenter, PadLeft

Example   

VAR
  TTT:STRING;
BEGIN
    TTT := PADRIGHT(' ASTERISK ',20,'*');
END;

The string TTT is assigned the value "********** ASTERISK ".

___________________________________________________________________________

PartRestoreScreen                                                   WinTTT5


Purpose   Restores a portion of a saved/virtual screen to the display.

Decln.    PartRestoreScreen(Page,X1,Y1,X2,Y2,X,Y:byte);

Remarks   Page is the saved/virtual screen number of the stored image.
          X1, Y1 are the top left coordinates of the area to be restored.
          X2, Y2 are the lower right coordinates of the area to be
          restored.
          X, Y are the top left coordinates of the target location on the
          visible screen.
          
          The screen can either be a saved screen created with SaveScreen
          or a virtual screen created with CreateScreen.

See Also  RestoreScreen, PartSlideRestoreScreen, SlideRestoreScreen

Example   

BEGIN
    SAVESCREEN(3);
    ....
    ..   {SCREEN MODIFYING PROCEDURES}
    ....
    PARTRESTORESCREEN(3,1,1,80,12,1,13);
    DISPOSESCREEN(3);
END;

The screen is saved to page 3 and then some other procedures modify the
display. Finally, the top half of the saved screen is restored to the lower
half of the screen display.


___________________________________________________________________________

PartSlideRestoreScreen                                              WinTTT5


Purpose   Restores a portion of a saved/virtual screen to the display with
          a sliding effect.

Decln.    PartSlideRestoreScreen(Page:byte;Way:direction;X1,Y1,X2,Y2:byte);

Remarks   Page is the saved/virtual screen number of the stored image.
          Way is the direction to slide the restored image. Valid
          directions are Up, Down, Left, Right.
          X1, Y1 are the top left coordinates of the area to be restored.
          X2, Y2 are the lower right coordinates of the area to be
          restored.
          
          The screen can either be a saved screen created with SaveScreen
          or a virtual screen created with CreateScreen.



See Also  SlideRestoreScreen, RestoreScreen, PartRestoreScreen

Example   

BEGIN
    SAVESCREEN(3);
    ....
    ..   {SCREEN MODIFYING PROCEDURES}
    ....
    PARTSLIDERESTORESCREEN(3,UP,1,1,40,25);
    DISPOSESCREEN(3);
END;

The screen is saved to page 3 and then some other procedures modify the
display. Finally, the left half of the saved screen is restored by sliding
it up the display.

___________________________________________________________________________

PlainWrite                                                         FastTTT5


Purpose   To write text to the screen very quickly in the default color
          attribute.

Decln.    PlainWrite(X,Y:byte;Str:string);

Remarks   X, Y are the coordinates of the first character.
          Str is the text to display.
          

See Also  WriteAt, ColWrite, Fwrite, FwriteLn


Example   

BEGIN
    CLEARTEXT(1,1,80,25,WHITE,BLUE);
    PLAINWRITE(1,1,'TOP LEFT OF SCREEN');
    PLAINWRITE(59,25,'LOWER RIGHT OF SCREEN');
END;

___________________________________________________________________________

PosCursor                                                           WinTTT5


Purpose   Moves text cursor.

Decln.    PosCursor(X,Y:byte);

Remarks   X, Y are the new cursor coordinates.
          
          This is similar to Turbo's GotoXY procedure, except the Turbo
          "window" coordinates are ignored.

See Also  OffCursor, OnCursor, SizeCursor, FindCursor

Example   

BEGIN
    POSCURSOR(10,15);
END;

___________________________________________________________________________

PosWord                                                            StrnTTT5


Purpose   Determines the starting character position of a word.

Decln.    PosWord(WordNo:byte;Str:string):byte;

Returns   Byte

Remarks   WordNo is the number of the word to check.
          Str is the source string.
          
          If there are too few words in the source string, a 0 is returned.

See Also  WordCnt, ExtractWords

Example   

VAR
  B:BYTE;
BEGIN
    B := POSWORD(3,'THE QUICK BROWN LINEBACKER');
END;

The variable B is assigned the value 11.


___________________________________________________________________________

Printer_Ready                                                      MiscTTT5


Purpose   Indicates if the printer is connected and online.

Decln.    Printer_Ready:boolean;

Returns   Boolean

Remarks   This function only returns true if the printer is fully operative
          and in the Ready state. If the printer is not ready, use the
          procedure Printer_Status to determine the cause of the problem.

See Also  

Example   

BEGIN
    IF PRINTER_READY THEN
       PRINTSCREEN;
END;

___________________________________________________________________________

Printer_Status                                                     MiscTTT5


Purpose   Returns the detailed status of the printer.

Decln.    Printer_Status:byte;

Returns   Byte

Remarks   The values returned by this function are:
          
          0    All is well!
          1    No paper
          2    Off Line
          3    Busy
          4    Unknown problem

See Also  Printer_Ready

Example   

BEGIN
    CASE PRINTER_STATUS OF
    0 : PRINT_REPORT;
    1 : FWRITELN('ADD PAPER TO THE PRINTER, IDIOT');
    2 : FWRITELN('PRESS THE ONLINE BUTTON ON THE PRINTER');
    3 : FWRITELN('PRINTER IS BUSY, PLEASE WAIT');
    4 : FWRITELN('PRINTER ERROR. CHECK IT OUT!');
    END;


___________________________________________________________________________

PrintScreen                                                        MiscTTT5


Purpose   Emulates the Print Scrn key.

Decln.    PrintScreen;

Example   

BEGIN
    IF PRINTER_READY THEN
       PRINTSCREEN;
END;

___________________________________________________________________________

Process_Input                                                        IOTTT5


Purpose   Initiates the user's full screen edit session.

Decln.    Process_Input(StartField:byte);

Remarks   StartField is the field ID number of the field that should be
          highlighted at the start of the edit session.
          
          This procedure must only be called after all the fields have been
          defined. The procedure controls the user's edit session.
          
          Control is returned to the calling program when the user ends the
          update session. The session is ended by the user pressing the end
          key (default F10), the Esc key (if escape is enabled), a Hooked
          procedure that returns a refresh code of End_Input or trying to
          move to the next field when the next field has been defined as
          zero.
          
          The global variable I_Char is updated with the last key pressed
          by the user.

See Also  Display_All_Fields

Example   

BEGIN
    PROCESS_INPUT(1);
END;

___________________________________________________________________________

Proper                                                             StrnTTT5


Purpose   Converts a string to proper case, i.e. the first character of
          each word is capitalized.


Decln.    Proper(Str:string):string;

Returns   String

Remarks   Str is the source string.

See Also  Upper, Lower

Example   

VAR
  TTT : STRING
BEGIN
    TTT := PROPER('TECHNOJOCK SOFTWARE INC.');
END;

The variable TTT is assigned the value "Technojock Software, Inc.".

___________________________________________________________________________

Pull_Menu                                                          PullTTT5


Purpose   Displays a pull down menu.

Decln.    Pull_menu(Def:Pull_array;var PickM, PickS:byte);

Remarks   Def is the string array containing the menu description, i.e. all
          the topics.
          PickM is the main menu topic that should be highlighted
          initially. It is returned with the main menu of the user's
          selection. If the user ESCapes, PickM is set to 0.
          PickS is the sub menu topic that should be highlighted initially.
          It is returned with the sub-topic selected by the user.
          
          The global variable PTTT controls the display characteristics of
          the menu. Modify this variable to alter the look and feel of the
          menu.

Example   

VAR
  MAJOR,MINOR : BYTE;
BEGIN
    MAJOR := 1;
    MINOR := 1;
    PULL_MENU(MYMENU,MAJOR,MINOR);
END;


___________________________________________________________________________

Read_Alpha                                                         ReadTTT5


Purpose   Provides single line input of alpha characters, offering full
          line editing features, optional prompt display and optional box
          drawing.

Decln.    Read_Alpha(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Str:strscreen);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Str is the string that will be updated with the user's input.
          
          The user will only be able to input normal alphabetic characters
          and spaces.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_String, Read_String_Upper, Read_YN

Example   

VAR
  TTT : STRSCREEN;
BEGIN
    TTT := '';
    READ_ALPHA(5,10,40,'ENTER YOUR NAME > ',1,TTT);
END;

___________________________________________________________________________

Read_Byte                                                          ReadTTT5


Purpose   Provides single line input of a number of type byte.

Decln.    Read_Byte(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Bvar:byte;Min,Max:byte);


Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Bvar is the byte variable that will be updated with the user's
          input.
          Min, Max are the minimum and maximum acceptable values for
          automatic range checking. Set the values to 0 to accept any byte
          value.
          
          The user will only be able to input number characters, and the
          value will be automatically validated to ensure it lies within
          the Min, Max range.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Int, Read_Word, Read_LongInt, Read_Real.

Example   

VAR
  B : BYTE;
BEGIN
    READ_BYTE(1,10,3,'HOW OLD ARE YOU',0,B,1,120);
END;

___________________________________________________________________________

Read_Int                                                           ReadTTT5


Purpose   Provides single line input of a number of type integer.

Decln.    Read_Int(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Ivar:integer;Min,Max:integer);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper

          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Ivar is the integer variable that will be updated with the user's
          input.
          Min, Max are the minimum and maximum acceptable values for
          automatic range checking. Set the values to 0 to accept any
          integer value.
          
          The user will only be able to input number characters, and the
          value will be automatically validated to ensure it lies within
          the Min Max range.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Byte, Read_Word, Read_LongInt, Read_Real.

Example   

VAR
  I: INTEGER;
BEGIN
    READ_INT(1,10,6,'',2,I,0,0);
END;

___________________________________________________________________________

Read_Longint                                                       ReadTTT5


Purpose   Provides single line input of a number of type longint.

Decln.    Read_LongInt(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Lvar:longint;Min,Max:longint);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Lvar is the longint variable that will be updated with the user's
          input.

          Min, Max are the minimum and maximum acceptable values for
          automatic range checking. Set the values to 0 to accept any
          longint value.
          
          The user will only be able to input number characters, and the
          value will be automatically validated to ensure it lies within
          the Min, Max range.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Byte, Read_Word, Read_Int, Read_Int, Read_Real.

Example   

VAR
  LONGI: LONGINT;
BEGIN
    READ_LONG(1,10,9,'PICK A NUMBER ',1,LONGI,0,0);
END;

___________________________________________________________________________

Read_Password                                                      ReadTTT5


Purpose   Provides single line input of alpha characters without echoing
          the user's characters on the screen.

Decln.    Read_Password(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Str:strScreen);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Str is the string that will be updated with the user's input.
          
          Every time a character is input, a '#' character is echoed on the
          screen. This procedure is designed for password input.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          

          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_String, Read_Alpha

Example   

VAR
  PSW : STRING;
BEGIN
    READ_PASSWORD(20,25,20,'^ ENTER YOUR PASSWORD ',1,PSW');
END;

___________________________________________________________________________

Read_Real                                                          ReadTTT5


Purpose   Provides single line input of a number of type real.

Decln.    Read_Real(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Rvar:real;Min,Max:real);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Rvar is the real variable that will be updated with the user's
          input.
          Min, Max are the minimum and maximum acceptable values for
          automatic range checking. Set the values to 0 to accept any real
          value.
          
          The user will only be able to input number characters, and the
          value will be automatically validated to ensure it lies within
          the Min, Max range.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Byte, Read_Word, Read_Int, Read_Int, Read_LongInt.

Example   


VAR
  R: REAL;
BEGIN
    READ_REAL(1,10,9,'TICKET PRICE',1,R,0,1199.99);
END;

___________________________________________________________________________

Read_Select                                                        ReadTTT5


Purpose   Displays a horizontal or vertical list of choices.

Decln.    Read_Select(X,Y:byte;Prompt,Txt:StrScreen;var Choice:byte);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Txt is a string containing the list of choices. Each choice is
          separated by a space. If a choice is composed of more than one
          word, the words must be connected with the underscore '_'
          character. By default, the choices list is displayed horizontally
          across the screen. However, if the first character in the choices
          string is a carat '^', the list is displayed vertically.
          Choice is a byte variable that is updated with the value of the
          user's selected choice.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

Example   

VAR
   VAR PICK : BYTE;
BEGIN
    READ_SELECT(10,5,'HOW YA DOIN','COOL OK BAD WILD FOXY',PICK);
END;

___________________________________________________________________________

Read_String                                                        ReadTTT5


Purpose   Provides single line input of any characters, offering full line
          editing features, optional prompt display and optional box

          drawing.

Decln.    Read_String(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Str:strscreen);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Str is the string that will be updated with the user's input.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Alpha, Read_String_Upper, Read_YN

Example   

VAR
  TTT : STRSCREEN;
BEGIN
    TTT := '';
    READ_STRING(5,10,40,'STREET ADDRESS ===> ',1,TTT);
END;

___________________________________________________________________________

Read_String_Upper                                                  ReadTTT5


Purpose   This procedure is the functional equivalent of Read_String,
          except all the alpha characters are converted to upper case.
          Refer to the Read_String procedure for further information.

___________________________________________________________________________

Read_Word                                                          ReadTTT5


Purpose   Provides single line input of a number of type word.

Decln.    Read_Word(X,Y,L:byte;Prompt:strScreen;Box:byte;Var
          Wvar:word;Min,Max:word);


Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          L is the length of the input line.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.
          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Wvar is the word variable that will be updated with the user's
          input.
          Min, Max are the minimum and maximum acceptable values for
          automatic range checking. Set the values to 0 to accept any word
          value.
          
          The user will only be able to input number characters, and the
          value will be automatically validated to ensure it lies within
          the Min, Max range.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

See Also  Read_Byte, Read_Real, Read_Int, Read_Int, Read_LongInt.

Example   

VAR
  W:WORD;
BEGIN
    READ_WORD(1,10,9,'ENTER THE VOLUME ===> ',1,W,0,0);
END;

___________________________________________________________________________

Read_YN                                                            ReadTTT5


Purpose   Prompts user for 'Y' or 'N' response.

Decln.    Read_YN(X,Y:byte;Prompt:strscreen;Box:byte;var Yes:boolean);

Remarks   X, Y are the coordinates of the first character of the prompt or
          the first character of the input field if the prompt is null.
          Prompt is an optional prompt. The prompt is normally displayed to
          the left of the input field. If the prompt begins with a carat
          '^' and the box border is on, the prompt is drawn in the upper
          box border. If the prompt begins with an underscore '_' and the
          box border is on, the prompt is drawn in the lower box border.
          Set the prompt to a null '' if no prompt is required.

          Box is a box code. The codes are the same as for the Box
          procedure in FastTTT5. To suppress the box, use a code of zero.
          Yes is the boolean variable that will be updated with the user's
          input.
          
          Only a Y or N response is accepted.
          
          The display characteristics of the input line are contained in
          the global variable RTTT.
          
          The global variable R_Char is updated with the last character
          pressed by the user. This can be checked to see how the user
          terminated input, e.g. Esc, Up Arrow, etc.

Example   

VAR
  OK : BOOLEAN;
BEGIN
    OK := FALSE;
    READ_YN(45,15,'DELETE THE FILE?',1,OK);
END;

___________________________________________________________________________

ReadLine                                                           ReadTTT5


Purpose   Provides single line input facility with full editing.

Decln.    ReadLine(X,Y,L,F,B:byte;var Txt:string;var retcode:integer);

Remarks   X, Y are the coordinates of the first input character.
          L is the length of the input field.
          F, B are the foreground and background display colors.
          Txt is returned with the user's input.
          Retcode is returned with a 1 if the user ESCaped or 0 for
          successful completion.
          
          This procedure is included for compatibility with version 4.0 of
          the Toolkit. Read_String now offers more features.

See Also  Read_String

Example   

VAR
  THEFILE : STRING;
  CODE : INTEGER;
BEGIN
    THEFILE := '';
    WRITEAT(10,5,WHITE,BLACK,'ENTER FILENAME ===> ');
    REPEAT
         READLINE(33,5,12,BLACK,LIGHTGRAY,THEFILE,CODE);
    UNTIL CODE = 0;
END;


___________________________________________________________________________

Real_Field                                                           IOTTT5


Purpose   Assigns a real variable to an input field.

Decln.    Real_Field(ID:byte;var RVar:real;Fmt:string;Min,Max:real);

Remarks   ID is the field ID number.
          Rvar is the name of the real variable that will be updated with
          the user's input.
          Fmt is the format of the input field. Pass a null string '' for
          the default.
          Min, Max are the minimum and maximum values for range check. Set
          to 0 to accept any real value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.

See Also  Add_Field, Word_Field, Byte_Field, LongInt_Field, Integer_Field,
          Date_Field, String_Field

Example   

VAR
  PRICE, DISCOUNT:REAL;
BEGIN
    PRICE := 49.99;
    DISCOUNT := 9.5;
    REAL_FIELD(3, PRICE, '', 0,79.99);
    REAL_FIELD(4, DISCOUNT, '', 0,50);
END;

___________________________________________________________________________

Real_to_SciStr                                                     StrnTTT5


Purpose   Converts a real to a string using scientific notation.

Decln.    Real_to_SciStr(Number:real;D:byte):string;

Returns   String

Remarks   Number is the real value to be converted.
          D is the number of decimal places.

See Also  Real_to_Str

Example   

BEGIN
    FWRITELN(REAL_TO_SCISTR(3.54609,2));
END;


___________________________________________________________________________

Real_to_Str                                                        StrnTTT5


Purpose   Converts a real number to a string.

Decln.    Real_to_Str(Number:real;D:byte):string;

Returns   String

Remarks   Number is the real to be converted.
          
          D is the number of decimal places. If D is set to Floating (a
          constant in the Toolkit), then the actual number of significant
          decimal places will be used.

See Also  Real_to_SciStr, Str_to_Real

Example   

VAR
  TTT : STRING;
BEGIN
    TTT := REAL_TO_STR(12345.789990,2);
END;

The variable TTT is assigned the value "12345.79".

___________________________________________________________________________

Replicate                                                          FastTTT5


Purpose   Constructs a string of repeated characters.

Decln.    Replicate(N:byte; Ch:char):string;

Returns   String

Remarks   N is the length of the returned string.
          Ch is the character to repeat.
          
          This procedure uses memory moves and is much faster than a for
          loop.

Example   

BEGIN
    FWRITE(REPLICATE(80,'*'));
END;

A line of 80 asterisks is written to the display.


___________________________________________________________________________

Reset_Printer                                                      MiscTTT5


Purpose   Clears a printer back to the default settings.

Decln.    Reset_Printer;

Remarks   This procedure uses a unique technique that will reset most
          contemporary PC printers.

Example   

BEGIN
    RESET_PRINTER;
END;

___________________________________________________________________________

Reset_StartUp_Mode                                                  WinTTT5


Purpose   Resets the display mode and cursor style to the state they were
          in when the program started.

Decln.    Reset_StartUp_Mode;

Remarks   It is good practice to call this procedure at the end of a
          program. The user will get the same cursor shape and screen mode
          that he/she was using before he/she ran the program.

Example   

BEGIN
    RESET_STARTUP_MODE;
    HALT;
END;

________________________________________________________

RestoreScreen                                                       WinTTT5


Purpose   Restores a virtual/saved screen to the visible display.

Decln.    RestoreScreen(Page:byte);

Remarks   Page is the saved/virtual screen number of the stored image.
          
          The screen can either be a saved screen created with SaveScreen
          or a virtual screen created with CreateScreen.

See Also  PartRestoreScreen, PartSlideRestoreScreen, SlideRestoreScreen


Example   

BEGIN
    SAVESCREEN(3);
    ....
    ..   {SCREEN MODIFYING PROCEDURES}
    ....
    RESTORESCREEN(3);
    DISPOSESCREEN(3);
END;

The screen is saved to page 3, and some other procedures modify the
display. The saved screen is then restored and the saved image is disposed.

___________________________________________________________________________

RightShift_Pressed                                                  KeyTTT5


Purpose   Determines whether the Right shift key is being depressed.

Decln.    RightShift_Pressed:boolean;

Returns   Boolean

Remarks   Returns true if the right shift key is being depressed.

See Also  LeftShift_Pressed, Shift_Pressed

Example   

BEGIN
    IF RIGHTSHIFT_PRESSED THEN
       WRITEAT(80,25,YELLOW,BLACK,CHR(24));
END;

___________________________________________________________________________

Rmwin                                                               WinTTT5


Purpose   Removes a window and restores the original screen contents.

Decln.    Rmwin;

Remarks   The RmWin procedure removes the last displayed window. Successive
          RmWin statements will remove the windows displayed earlier. If
          RmWin is called when there are no windows, no action is taken.
          
          The windows are always removed in reverse order, e.g. you cannot
          create three windows in succession and then try to remove the
          second window without first removing the third one.

See Also  MkWin


Example   

VAR
  CH : CHAR;
BEGIN
    MKWIN(25,20,65,25,WHITE,RED,1);
    WRITEBETWEEN(25,65,23,WHITE,RED,'END THE PROGRAM?');
    CH := GETKEY;
    IF UPCASE(CH) = 'Y' THEN
       HALT(0)
    ELSE
       RMWIN;
END;

The above program paints a red window with a white single line border on
the last five lines of the screen and displays a message in the center of
the box. If the user responds Y, the program terminates, otherwise the
window is removed and the program continues.

___________________________________________________________________________

SaveScreen                                                          WinTTT5


Purpose   Saves the current display image.

Decln.    SaveScreen(Page:byte);

Remarks   Page is the number that the saved screen will be referenced by.
          The number must be in the range 1..Max_Screens. If a screen is
          already saved to that page, it will be overwritten. Up to
          Max_Screens screens can be saved for subsequent restoration.
          
          The Toolkit accommodates text screens of 25, 43 and 50 lines,
          i.e. the screen can be saved even if the display is in condensed
          mode.
          
          The cursor size and location is also saved with the saved image.
          The screen image can be restored with the RestoreScreen
          procedure.

See Also  CreateScreen, RestoreScreen, SlideRestoreScreen,
          PartSlideRestoreScreen, DisposeScreen

Example   

BEGIN
    SAVESCREEN(6);
    ....
    {SOME STATEMENTS THAT MODIFY THE CODE}
    ....
    RESTORESCREEN(6);
    DISPOSESCREEN(6);
END;


___________________________________________________________________________

ScrollOn                                                            KeyTTT5


Purpose   Indicates whether the Scroll Lock key is on.

Decln.    ScrollOn:boolean;

Returns   Boolean

Remarks   Returns true if the Scroll Lock key is "illuminated".

See Also  CapsOn, NumOn, Set_Scroll

Example   

BEGIN
    IF SCROLLON THEN
       WRITEAT(70,1,WHITE,BLACK,'SCR')
    ELSE
       WRITEAT(70,1,WHITE,BLACK,'   ')
END;
___________________________________________________________________________

Scroll                                                              WinTTT5


Purpose   Scrolls text on the screen in any of the four directions.

Decln.    Scroll(Way:direction;X1,Y1,X2,Y2:byte);

Remarks   Way is the direction to scroll the text. The valid directions are
          Up, Down, Left and Right.
          X1, Y1 are the coordinates of the top left corner of the region
          to be scrolled.
          X2, Y2 are the coordinates of the lower right corner of the
          region to be scrolled.
          
          One line or column of text is removed, and a new blank line is
          inserted.

See Also  MoveScreenBlock, CopyScreenBlock

Example   

BEGIN
    SCROLL(UP,1,1,40,25);
END;

The left side of the display screen is scrolled up one line. The top line
of the text disappears, and a new blank line is added at the bottom of the
screen.


___________________________________________________________________________

Set25Lines                                                          WinTTT5


Purpose   Sets the screen into the normal 25 line textmode display.

Decln.    Set25Lines;

Remarks   Use this procedure to switch from a condensed line display (only
          available on systems equipped with EGA/VGA displays) to a 25 line
          display.
          
          The top 25 lines of the screen will remain on display.
          
          A global variable DisplayLines is automatically updated with the
          current number of display lines.

See Also  SetCondensedLines

Example   

BEGIN
    IF DISPLAYLINES <> 25 THEN
       SET25LINES.
END;

___________________________________________________________________________

SetCondensedLines                                                   WinTTT5


Purpose   Sets the text display into 43/50 line mode on EGA/VGA systems.

Decln.    SetCondensedLines;

Remarks   Systems equipped with EGA/VGA displays can support the display of
          up to 43 or 50 lines of text. This procedure switches the display
          into the condensed mode.
          
          If the procedure is called on non EGA/VGA equipment, W_Error is
          set to 12, but it is a non-fatal error. The screen simply remains
          in 25 line mode.
          
          A global variable DisplayLines is automatically updated with the
          current number of display lines.

See Also  Set25Lines

Example   

BEGIN
    IF EGAVGASYSTEM AND (DISPLAYLINES = 25) THEN
       SETCONDENSEDLINES.
END;


___________________________________________________________________________

Set_Caps                                                            WinTTT5


Purpose   Forces the Caps Lock key on or off.

Decln.    Set_Caps(On:Boolean);

Remarks   On is a boolean to indicate if the Caps lock should be set to on,
          i.e. pass true to set it on and false to set it off.
          
          This procedure will only function on IBM (Compaq!) machines and
          100% compatibles. Clone machines that have cheap keyboards or
          non-standard BIOS will not properly illuminate the Caps Lock key
          - some clones use a mechanical trigger to change the Caps Lock
          light and do not detect a software change.

See Also  CapsOn, Set_Num, Set_Scroll

Example   

BEGIN
    IF CAPSON THEN
    BEGIN
        FWRITE('TURNING OFF THE CAPS LOCK KEY');
        SET_CAPS(FALSE);
    END;
END;

___________________________________________________________________________

Set_Default_Rules                                                    IOTTT5


Purpose   Changes the default display rules for input fields, e.g.
          rightjustified, suppresszero, etc.

Decln.    Set_Default_Rules(Rules:word);

Remarks   Rules is a word that indicates the display characteristics of the
          input fields. All subsequent fields created with Add_Field will
          be initialized with these rules.
          
          There are 5 different field Rules:
               ALLOWNULL
               SUPPRESSZERO
               RIGHTJUSTIFY
               ERASEDEFAULT
               JUMPIFFULL
          The desired attributes are summed to give the combined field
          Rules.
          

See Also  Field_Rules, Add_Field


Example   

BEGIN
    SET_DEFAULT_RULES(ALLOWNULL+SUPPRESSZERO);
END;

___________________________________________________________________________

Set_Mouse_Cursor_Style                                              KeyTTT5


Purpose   Changes the appearance of the mouse cursor.

Decln.    Set_Mouse_Cursor_Style(ordChar:byte);

Remarks   OrdChar is the ASCII code for the desired character.
          
          In textmode, the shape of the mouse cursor can be any of the
          displayable ASCII characters.
          
          The default cursor is a small rectangle. Once the cursor style
          has been modified, it will assume the new style until the mouse
          is re-installed (usually from a reboot), or until this procedure
          changes it again.

See Also  Show_Mouse_Cursor

Example   

BEGIN
    SET_MOUSE_CURSOR_STYLE(29);
END;

___________________________________________________________________________

Set_Num                                                             WinTTT5


Purpose   Forces the Num Lock key on or off.

Decln.    Set_Num(On:Boolean);

Remarks   On is a boolean to indicate if the Num lock should be set to on,
          i.e. true to set it on and false to set it off.
          
          This procedure will only function on IBM machines and 100%
          compatibles. Clone machines that have cheap keyboards or non-
          standard BIOS will not properly illuminate the Num Lock key -
          some clones use a mechanical trigger to change the Num Lock light
          and do not detect a software change.

See Also  NumOn, Set_Caps, Set_Scroll

Example   


BEGIN
    IF NUMON THEN
    BEGIN
        FWRITE('TURNING OFF THE NUM LOCK KEY');
        SET_NUM(FALSE);
    END;
END;

___________________________________________________________________________

Set_Scroll                                                          WinTTT5


Purpose   Forces the Scroll Lock key on or off.

Decln.    Set_Scroll(On:Boolean);

Remarks   On is a boolean to indicate if the Scroll lock should be set to
          on, i.e. true to set it on and false to set it off.
          
          This procedure will only function on IBM  machines and 100%
          compatibles. Clone machines that have cheap keyboards or non-
          standard BIOS will not properly illuminate the Scroll Lock key -
          some clones use a mechanical trigger to change the Num Lock light
          and do not detect a software change.

See Also  ScrollOn, Set_Caps, Set_Num

Example   

BEGIN
    IF NOT SCROLLON THEN
    BEGIN
        FWRITE('TURNING ON THE SCROLL LOCK KEY');
        SET_SCROLL(TRUE);
    END;
END;

___________________________________________________________________________

Shift_Pressed                                                       KeyTTT5


Purpose   Determines if either the Left or Right shift key is being
          depressed.

Decln.    Shift_Pressed:boolean;

Returns   Boolean

Remarks   Returns true if the left shift key is being depressed.

See Also  RightShift_Pressed, LeftShift_Pressed


Example   

BEGIN
    IF SHIFT_PRESSED THEN
       WRITEAT(40,25,YELLOW,BLACK,CHR(24));
END;

___________________________________________________________________________

Show_List                                                          ListTTT5


Purpose   Displays a list of choices in a scrollable window.

Decln.    Show_List(var StrArray;Strlength:byte;TotalPicks:byte);

Remarks   StrArray is a variable that is defined as an array of strings.
          This array contains a list of all the topics that the user can
          select.
          Strlength is the maximum string length of each element of the
          array.
          TotalPicks is the total number of elements in the array.
          
          The global byte variable L_Pick is updated with the chosen topic.
          If multiple selections are allowed, the boolean array L_Picks
          indicates the user's selections.
          
          The LTTT variable controls the display characteristics of the
          list.

Example   

VAR
  NAME_ARRAY : ARRAY[1..5] OF STRING[20];
BEGIN
    NAME_ARRAY[1] := 'ROBERT';
    NAME_ARRAY[2] := 'DAVID';
    NAME_ARRAY[3] := 'MICHAEL';
    NAME_ARRAY[4] := 'JONATHAN';
    NAME_ARRAY[5] := 'DESMOND';
    SHOW_LIST(NAME_ARRAY,20,5);
END;

___________________________________________________________________________

Show_Mouse_Cursor                                                   KeyTTT5


Purpose   Makes the mouse cursor visible.

Decln.    Show_Mouse_Cursor;

Remarks   The mouse cursor is not normally displayed. Use this procedure to
          display the mouse and Hide_Mouse_Cursor to turn it off.


See Also  Hide_Mouse_Cursor

Example   

BEGIN
    SHOW_MOUSE_CURSOR;
END;

___________________________________________________________________________

Show_Nest                                                          NestTTT5


Purpose   Displays a NEST menu.

Decln.    Show_Nest(var menu:Nest_menu);

Remarks   Menu is the name of the menu variable that defines all the
          topics.
          
          This is the main procedure in the NestTTT5 unit.

See Also  Initialize_Menu

Example   

VAR
  MY_MENU : NEST_MENU;
BEGIN
    INITIALIZE_MENU(MY_MENU);
    ......
    ...    {MENU BUILDING PROCS ADD_TOPIC, ASSIGN_DESPATCHER ETC}
    ......
    SHOW_NEST(MY_MENU);
END;

___________________________________________________________________________

SizeCursor                                                          WinTTT5


Purpose   Sets the cursor to any acceptable size.

Decln.    SizeCursor(Top,Bot:byte);

Remarks   Top, Bot are the top and bottom scan lines of the cursor.
          
          The top scan line is 0. The bottom scan line is 12 on monochrome
          systems and 7 on color systems.

See Also  OffCursor, OnCursor, HalfCursor, FullCursor

Example   

BEGIN

    IF COLORSCREEN
       SIZECURSOR(0,3)
    ELSE
       SIZECURSOR(0,6);
END;

___________________________________________________________________________

SlideRestoreScreen                                                  WinTTT5


Purpose   Restores a previously saved screen. This procedure is the
          functional equivalent of RestoreScreen except that the text
          s.l..i...d....e.....s onto the screen.

Decln.    SlideRestoreScreen(Page:byte; Way:direction);

Remarks   Page is the screen number of the saved/virtual screen.
          Way is the direction to slide the screen. The valid directions
          are Up, Down, Left, Right.
          
          The cursor is returned to the exact positon it was in when the
          screen was saved.
          
          If the saved screen will no longer be needed, free up the memory
          with DisposeScreen.

See Also  SaveScreen, CreateScreen, RestoreScreen, PartSlideRestoreScreen

Example   

BEGIN
    SAVESCREEN(6);
    ....
    {SOME STATEMENTS THAT MODIFY THE CODE}
    ....
    SLIDERESTORESCREEN(6,DOWN);
    DISPOSESCREEN(6);
END;

___________________________________________________________________________

Squeeze                                                            StrnTTT5


Purpose   Truncates a string and inserts a symbol in the string.

Decln.    Squeeze(LR:Char;Str:string;width:byte):string;

Returns   String

Remarks   LR is a character to indicate whether the left or the right of
          the string should be retained. 'L' for left and 'R' for right.
          Str is the source string.
          Width is the length of the returned string.

          
          An arrow is forced into the first or last character position to
          indicate that the string has been truncated.

See Also  Last, First

Example   

VAR
  TTT : STRING;
BEGIN
    TTT := SQUEEZE('R','C:\TURBO\WILLY.PAS',14);
END;

The string TTT will be assigned the value "->rbo\willy.pas".

___________________________________________________________________________

String_Field                                                         IOTTT5


Purpose   Assigns a string variable to an input field.

Decln.    String_Field(ID:byte;var Svar:string;Fmt:string);

Remarks   ID is the field ID number.
          Save is the name of the string variable that will be updated with
          the user's input.
          Fmt is the format of the Input string. The following characters
          denote input characters:
          
          #    allow 0..9,'.',,'-', and 'e' for scientific.
          @    only letters of the alphabet and punctuation.
          *    any damn character the user can find.
          
          !    all letters converted to upper case.
          
          For example, a format for a telephone number might be "(###) ###-
          ####".
          
          The length of the field is dictated by the Fmt string.

See Also  Add_Field, Byte_Field, Word_Field, Integer_Field, LongInt_Field,
          Real_Field, Date_Field

Example   

VAR
  NAME, TEL : STRING;
  ZIP : LONGINT;
BEGIN
    NAME := '';
    TEL := '';
    ZIP := 0;
    STRING_FIELD(1,NAME,'!!!!!!!!!!!!!!!!!!!!');

    STRING_FIELD(2,TEL,'(###) ###-####');
    LONGINT_FIELD(3,ZIP,'',0,99999);
END;

The Name field will force all the user's input to upper case. The Telephone
field will only accept numbers and the cursor will jump between the #
characters (although they won't show as #'s on the display!!). The Zip
field will accept any number in the range 0 to 99999.

___________________________________________________________________________

Strip                                                              StrnTTT5


Purpose   Removes a character from a string.

Decln.    Strip(L,C:char;Str:string):string;

Returns   String

Remarks   L is a character indicating which part of the string to strip:
          'L'  strip all leading characters
          'R'  strip all trailing characters
          'B'  strip both leading and trailing characters
          'A'  strip all occurrences of the character
          C    is the character to strip
          Str  is the source string

Example   

VAR
   TTT1, TTT2, TTT3, TTT4 : STRING;
BEGIN
    TTT1 := STRIP('L',' ','   THIS IS NEAT   ');
    TTT2 := STRIP('R',' ','   THIS IS NEAT   ');
    TTT3 := STRIP('B',' ','   THIS IS NEAT   ');
    TTT4 := STRIP('A',' ','   THIS IS NEAT   ');
END;

The strings will be assigned the following characters:
TTT1 "This is neat    "
TTT2 "    This is neat"
TTT3 "This is neat"
TTT4 "Thisisneat"

___________________________________________________________________________

Str_to_Int                                                         StrnTTT5


Purpose   Converts a string to an integer.

Decln.    Str_to_Int(Str:string):integer;

Returns   Integer


Remarks   Str is the source string.
          
          If the string is null or cannot be successfully converted to an
          integer, the function returns a zero.

See Also  Int_to_Str, Str_to_Real, Str_to_Long

Example   

VAR
  I : INTEGER;
BEGIN
    I := STR_TO_INT('165');
END;

The variable I is assigned the value 165.

___________________________________________________________________________

Str_to_Long                                                        StrnTTT5


Purpose   Converts a string to a longint.

Decln.    Str_to_Long(Str:string):longint;

Returns   Longint

Remarks   Str is the source string.
          
          If the string is null or cannot be successfully converted to a
          longint, the function returns a zero.

See Also  Int_to_Str, Str_to_Real, Str_to_Int

Example   

VAR
  L : LONGINT;
BEGIN
    L := STR_TO_LONG('99165');
END;

The variable L is assigned the value 99165.

___________________________________________________________________________

Str_to_Real                                                        StrnTTT5


Purpose   Converts a string to a real.

Decln.    Str_to_Real(Str:string):real;


Returns   Real

Remarks   Str is the source string.
          
          If the string is null or cannot be successfully converted to a
          real, the function returns a zero.

See Also  Int_to_Str, Str_to_Long, Str_to_Int

Example   

VAR
  R : REAL;
BEGIN
    R := STR_TO_REAL('59.99');
END;

The variable R is assigned the value 59.99.

___________________________________________________________________________

TempMessage                                                         WinTTT5


Purpose   Displays a message on the screen, waits for a keypress (or mouse
          activity), and then restores the original screen contents.

Decln.    TempMessage(X,Y,F,B:byte;Str:StrScreen);

Remarks   X, Y are the coordinates of the first character of the message.
          F, B are the foreground and background display colors.
          Str is the message to display.

See Also  TempMessageCh, TempMessageBox, TempMessageBoxCh

Example   

BEGIN
    TEMPMESSAGE(1,1,YELLOW,RED,'YOU CANNOT REFORMAT THE FILESERVER');
END;

___________________________________________________________________________

TempMessageBox                                                      WinTTT5


Purpose   Displays a temporary message on the screen inside a box.

Decln.    TempMessageBox(X,Y,F,B,BoxType:byte;Str:StrScreen);

Remarks   X, Y are the coordinates of the first character of the message.
          F, B are the foreground and background display colors.
          BoxType is the box border code. Use the same codes as for Box in
          FastTTT5.
          Str is the message to display.


See Also  TempMessageCh, TempMessage, TempMessageBoxCh

Example   

BEGIN
    TEMPMESSAGEBOX(10,13,YELLOW,RED,2,'REMOVE THE DISKETTE FROM DRIVE A');
END;

___________________________________________________________________________

TempMessageBoxCh                                                    WinTTT5


Purpose   Displays a temporary message in a box screen and returns the
          character pressed by the user. This procedure is a combination of
          TempMessageCh and TempMessageBox.

Decln.    TempMessageBoxCh(X,Y,F,B,Boxtype:byte;Str:StrScreen;var Ch:char);

Remarks   X, Y are the coordinates of the first character of the message.
          F, B are the foreground and background display colors.
          BoxType is the box border code. Use the same codes as for Box in
          FastTTT5.
          Str is the message to display.
          Ch is a character variable that will be updated with the
          character pressed by the user.

See Also  TempMessage, TempMessageBox, TempMessageBoxCh

Example   

VAR
  CH : CHAR;
BEGIN
    TEMPMESSAGEBOXCH(1,1,YELLOW,RED,1,'REFORMAT THE FILESERVER? (Y/N)',CH);
END;

___________________________________________________________________________

TempMessageCh                                                       WinTTT5


Purpose   Displays a temporary message on the screen. This procedure is the
          functional equivalent of the TempMessage procedure, except that
          it identifies the character pressed by the user.

Decln.    TempMessageCh(X,Y,F,B:byte;Str:StrScreen;var Ch:char);

Remarks   X, Y are the coordinates of the first character of the message.
          F, B are the foreground and background display colors.
          Str is the message to display.
          Ch is a character variable that will be updated with the
          character the user pressed.


See Also  TempMessage, TempMessageBox, TempMessageBoxCh

Example   

VAR
  CH : CHAR;
BEGIN
    TEMPMESSAGECH(1,1,YELLOW,RED,'REFORMAT THE FILESERVER? (Y/N)',CH);
    IF UPCASE(CH) = 'Y' THEN
    TEMPMESSAGE(1,1,WHITE,BLUE,'DO I LOOK STUPID?');
END;

___________________________________________________________________________

Time                                                               MiscTTT5


Purpose   Returns the system time nicely formatted.

Decln.    Time:string;

Returns   String

Remarks   The format of the returned string is hour:min:sec a.m.
          
          The same format is used in the Clock procedure.

See Also  Clock, Date

Example   

BEGIN
    FWRITELN(TIME);
END;

___________________________________________________________________________

Today_In_Julian                                                    MiscTTT5


Purpose   Returns the current system date in Julian form.

Decln.    Today_in_Julian:dates;

Returns   Dates

See Also  Date_To_Julian, Julian_to_Date

Example   

VAR
  NOW : DATES;
BEGIN
    NOW := TODAY_IN_JULIAN;
END;


___________________________________________________________________________

Upper                                                              StrnTTT5


Purpose   Converts a string to upper case.

Decln.    Upper(Str:string):string;

Returns   String

Remarks   Str is the source string.
          
          Only the upper case alphabet A to Z is affected.

See Also  Lower, Proper

Example   

VAR
  TTT : STRING
BEGIN
    TTT := UPPER('TECHNOJOCK SOFTWARE');
END;

The variable TTT is assigned the value "TECHNOJOCK SOFTWARE".

___________________________________________________________________________

Valid_Date                                                         MiscTTT5


Purpose   Validates a date string.

Decln.    Valid_date(Indate:string;format:byte):boolean;

Returns   Boolean

Remarks   Indate is the string to be validated.
          Format is the format code to indicate the format of the string.
          The valid date formats are declared as constants in the MiscTTT5
          unit:
               DDMMYY
               MMDDYY
               MMYY
               MMYYYY
               DDMMYYYY
               MMDDYYYY
          
          The procedure checks that the month is valid (i.e. in the range
          1..12) and that the day is within the valid range for the month.
          Leap years are accounted for.

See Also  Date_to_Julian


Example   

VAR
  OK : BOOLEAN;
BEGIN
    OK := VALID_DATE('02/31/90',MMDDYY);
END;

The variable OK is assigned the value FALSE because there are not 31 days
in February 1990.

___________________________________________________________________________

VertLine                                                           FastTTT5


Purpose   Draws a vertical line on the screen.

Decln.    VertLine(X,Y1,Y2,F,B,LineType:integer);

Remarks   X is the X coordinate of the line.
          Y1, Y2 are the upper and lower Y coordinates of the line.
          F, B are the foreground and background display colors.
          LineType is a code to indicate the linestyle - 1 for a single
          line and 2 for a double line.

See Also  HorizLine, Box

Example   

BEGIN
    VERTLINE(40,1,25,WHITE,BLACK,2);
END;

A double white line is drawn down the center of the screen.

___________________________________________________________________________

WordCnt                                                            StrnTTT5


Purpose   Counts the number of words in a string.

Decln.    WordCnt(Str:string):string;

Returns   String

Remarks   Str is the source string.

See Also  ExtractWords, PosWord

Example   

VAR
  B : BYTE;

BEGIN
    B := WORDCNT('WHAT A SUPERB PRODUCT, REGARDS PHILLIPE');
END;

The variable B is assigned the value 6.

___________________________________________________________________________

Word_Field                                                           IOTTT5


Purpose   Assigns a word variable to an input field.

Decln.    Word_Field(ID:byte;var WVar:word;Fmt:Lstring;Min,Max:word);

Remarks   ID is the field ID number.
          Wvar is the name of the word variable that will be updated with
          the user's input.
          Fmt is the format of the input field. Pass a null string '' for
          the default.
          Min, Max are the minimum and maximum values for range check. Set
          to 0 to accept any word value.
          
          The field must be declared with Add_Field prior to calling this
          procedure.

See Also  Add_Field, Byte_Field, Integer_Field, LongInt_Field, Real_Field,
          Date_Field, String_Field

Example   

BEGIN
    ACTIVATE_TABLE(3);
    WORD_FIELD(1, AREA, '', 0,120);
    WORD_FIELD(2, VOLUME, '', 1,31);
END;

___________________________________________________________________________

WriteAT                                                            FastTTT5


Purpose   Writes to the screen el quicko.

Decln.    WriteAT(X,Y,F,B:byte;Str:StrScreen);

Remarks   X, Y are the coordinates of the first character.
          F, B are the foreground and background display colors.
          Str is the string to be written.

See Also  Fastwrite, Plainwrite, Colwrite

Example   

CONST

    HEADING = 'TOOLKIT';
VAR
  NAME : STRING;
BEGIN
    NAME := "BOBBO";
    WRITEAT(1,1,WHITE,BLACK,'WELCOME');
    WRITEAT(10,10,CYAN,RED,HEADING');
    WRITEAT(40,3,LIGHTCYAN,LIGHTGRAY,'TO'+'THE SHOW');
    WRITEAT(70,20,GREEN,BLACK,NAME);
END;

The example writes various strings to the screen and illustrates that
strings, constants, variables and concatenated strings are valid.

___________________________________________________________________________

WriteBetween                                                       FastTTT5


Purpose   Writes text centered between two points.

Decln.    WriteBetween(X1,X2,Y,F,B:byte;Str:strscreen);

Remarks   X1, X2 are the two X coordinates that the string will be centered
          between.
          Y is the Y coordinate.
          F, B are the foreground and background display colors.
          Str is the display string.

See Also  WriteAt, WriteCenter

Example   

BEGIN
    WRITEBETWEEN(1,40,15,WHITE,BLACK,'LEFT SIDE');
    WRITEBETWEEN(41,80,15,WHITE,BLACK,'RIGHT SIDE');
END;

___________________________________________________________________________

WriteCenter                                                        FastTTT5


Purpose   Writes text on the center of a line.

Decln.    WriteCenter(Y,F,B:byte;Str:string);

Remarks   Y is the Y coordinate or line number.
          F, B are the foreground and background display colors.
          Str is the display string.

See Also  WriteBetween, WriteAt

Example   


BEGIN
    WRITECENTER(1,YELLOW,BLACK,'MAJOR HEADING');
END;

___________________________________________________________________________

WriteVert                                                          FastTTT5


Purpose   Writes text in a vertical column.

Decln.    WriteVert(X,Y,F,B:byte;Str:string);

Remarks   X, Y are the coordinates of the top character.
          F, B are the foreground and background display colors.
          Str is the display string.

See Also  WriteAt

Example   

BEGIN
    WRITEVERT(20,5,WHITE,BLUE,'Y AXIS');
END;


```
{% endraw %}

## PROCLIST.TXT

{% raw %}
```
FASTTTT5 (22)

ColorScreen:boolean;
Attr(F,B:byte):byte;
FastWrite(Col,Row,Attr:byte; St:StrScreen);
PlainWrite(Col,Row:byte; St:StrScreen);
ColWrite(Col,Row:byte; St:StrScreen);
FWrite(St:StrScreen);
FWriteLN(St:StrScreen);
Attrib(X1,Y1,X2,Y2,F,B:byte);
Clickwrite(Col,Row,F,B:byte; St:StrScreen);
Replicate(N:byte; Character:char):StrScreen;
Box(X1,Y1,X2,Y2,F,B,boxtype:integer);
FBox(X1,Y1,X2,Y2,F,B,boxtype:integer);
GrowFBox(X1,Y1,X2,Y2,F,B,boxtype:integer);
HorizLine(X1,X2,Y,F,B,lineType:byte);
VertLine(X,Y1,Y2,F,B,lineType:byte);
ClearText(x1,y1,x2,y2,F,B:integer);
ClearLine(Y,F,B:integer);
WriteAT(X,Y,F,B:integer; St:StrScreen);
WriteBetween(X1,X2,Y,F,B:byte; St:StrScreen);
WriteCenter(LineNO,F,B:integer; St:StrScreen);
WriteVert(X,Y,F,B:integer; St:StrScreen);
EGAVGASystem: boolean;

WINTTT5  (33)

SizeCursor(Top,Bot:byte);
FindCursor(var X,Y,Top,Bot:byte);
PosCursor(X,Y: integer);
Fullcursor;
HalfCursor;
OnCursor;
OffCursor;
GetScreenChar(X,Y:byte):char;
GetScreenAttr(X,Y:byte):byte;
GetScreenStr(X1,X2,Y:byte;var  St:StrScreen);
CreateScreen(Page:byte;Lines:byte);
SaveScreen(Page:byte);
RestoreScreen(Page:byte);
PartRestoreScreen(Page,X1,Y1,X2,Y2,X,Y:byte);
SlideRestoreScreen(Page:byte;Way:Direction);
PartSlideRestoreScreen(Page:byte;Way:Direction;X1,Y1,X2,Y2:byte);
DisposeScreen(Page:byte);
SetCondensedLines;
Set25Lines;
CopyScreenBlock(X1,Y1,X2,Y2,X,Y:byte);
MoveScreenBlock(X1,Y1,X2,Y2,X,Y:byte);
Scroll(Way:direction;X1,Y1,X2,Y2:byte);
Mkwin(x1,y1,x2,y2,F,B,boxtype:integer);
GrowMkwin(x1,y1,x2,y2,F,B,boxtype:integer);
Rmwin;
FillScreen(X1,Y1,X2,Y2:byte; F,B:byte; C:char);
TempMessageCh(X,Y,F,B:integer;St:strscreen;var Ch : char);
TempMessage(X,Y,F,B:integer;St:strscreen);
TempMessageBoxCh(X1,Y1,F,B,BoxType:integer;St:strscreen;var Ch : char);
TempMessageBox(X1,Y1,F,B,BoxType:integer;St:strscreen);
Activate_Visible_Screen;
Activate_Virtual_Screen(Page:byte);
Reset_StartUp_Mode;

KEYTTT5  (23)

Assign_Pressed_Hook(PassedProc : Key_pressed_Type);
Assign_Idle_Hook(PassedProc : Key_Idle_Type);
Mouse_Installed:Boolean;
Show_Mouse_Cursor;
Hide_Mouse_Cursor;
Get_Mouse_Action(var But: button; var Hor,Ver: integer);
Move_Mouse(Hor,Ver: integer);
Confine_Mouse_Horiz(Left,Right:integer);
Confine_Mouse_Vert(Top,Bot:integer);
Set_Mouse_Cursor_Style(OrdChar: integer);
Alt_Pressed:Boolean;
Ctrl_Pressed:Boolean;
LeftShift_Pressed: Boolean;
RightShift_Pressed: Boolean;
Shift_Pressed: Boolean;
CapsOn: Boolean;
NumOn: Boolean;
ScrollOn: Boolean;
Set_Caps(On : boolean);
Set_Num(On : boolean);
Set_Scroll(On : boolean);
GetKey : Char;
DelayKey(Time : integer);

MENUTTT5 (3)

No_Hook(var Ch:char; Choice:integer; var Ecode : integer);
Menu_Set(var M : Menu_record);
DisplayMenu(MenuDef: Menu_record;Window:Boolean;var Choice,Ecode:integer);

PULLTTT5 (2)

No_Hook(var Ch: char; Main, Sub :byte);
Pull_Menu( Definition:Pull_Array; var PickM, PickS:byte);

NESTTTT5 (12)

Assign_Despatcher(D:Despatcher_Proc);
Initialize_Menu(var Menu:Nest_Menu;Tit: menuStr;Width: byte;Display_Lines: word);
Add_Topic(var Menu:Nest_Menu;Nam:MenuStr;Activ:boolean;HKey:char;Code:integer;Sub: MenuPtr);
Modify_Topic(var Menu:Nest_Menu;TopicNo:word;Nam:MenuStr;Activ:boolean;HKey :char;Code:integer;Sub: MenuPtr);
Modify_Topic_Name(var Menu:Nest_Menu;TopicNo:word;Nam:MenuStr);
Modify_Topic_Active(var Menu:Nest_Menu;TopicNo:word;Activ:Boolean);
Modify_Topic_HotKey(var Menu:Nest_Menu;TopicNo:word;HKey:char);
Modify_Topic_RetCode(var Menu:Nest_Menu;TopicNo:word;Code:integer);
Modify_Topic_SubMenu(var Menu:Nest_Menu;TopicNo:word;Sub:MenuPtr);
Delete_A_Topic(var Menu:Nest_Menu;TopicNo: word);
Delete_All_Topics(var Menu:Nest_Menu);
Show_Nest(var Menu:Nest_Menu);

LISTTTT5 (1)

Show_List(var StrArray;StrLength:Byte;TotalPicks:byte);

DIRTTT5 (1)

Display_Directory(DirFullFileName: StrScreen;var Retcode:integer): StrScreen;

READTTT5 (11)

Read_String(X,Y,L:byte;Prompt:StrScreen; BoxType: byte;Var Txt:StrScreen);
Read_String_Upper(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var Txt:StrScreen);
Read_Password(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var Txt:StrScreen);
Read_Alpha(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var Txt:StrScreen);
Read_YN(X,Y:byte;Prompt:StrScreen;BoxType: byte;Var Yes:Boolean);
Read_Byte(X,Y,L:byte; Prompt:StrScreen;BoxType: byte;Var B : Byte;Min, Max : Byte);
Read_Word(X,Y,L:byte; Prompt:StrScreen;BoxType: byte;Var W : word;Min, Max : word);
Read_Int(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var W : integer;Min, Max : integer);
Read_LongInt(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var W : longint;Min, Max : longint);
Read_Real(X,Y,L:byte;Prompt:StrScreen;BoxType: byte;Var W : real;Min, Max : real);
Read_Select(X,Y:byte;Pmt,Txt:StrScreen;var Choice:byte);

IOTTT5 (26)

Create_Tables(No_Of_Tables:byte);
Activate_Table(Table_no:byte);
Assign_LeaveFieldHook(Proc:Move_Field_Proc);
Assign_EnterFieldHook(Proc:Move_Field_Proc);
Assign_CharHook(Proc:Char_Hook_Proc);
Assign_InsHook(Proc:Insert_Proc);
Create_Fields(No_of_fields:byte);
Define_Colors(HiF,HiB,LoF,LoB,MsgF,MsgB:byte);
Add_Message(DefID,DefX,DefY : byte; DefString : string);
Add_Field(DefID,DefU,DefD,DefL,DefR,DefX,DefY:byte);
String_Field(DefID:byte;var Strvar:String;DefFormat:string);
Assign_Finish_Char(Ch : char);
Byte_Field(DefID:byte;var ByteVar:Byte;DefFormat:string;Min,Max:byte);
Word_Field(DefID:byte;var Wordvar:Word;DefFormat:string;Min,Max:word);
Integer_Field(DefID:byte;var Integervar:Integer;DefFormat:string;Min,Max:integer);
LongInt_Field(DefID:byte;var LongIntvar:LongInt;DefFormat:string;Min,Max:LongInt);
Date_Field(DefID:byte;var Datevar:Dates;DateFormat:byte;DefFormat:string;Min,Max : Dates);
Real_Field(DefID:byte;var Realvar:Real;DefFormat:string;Min,Max:real);
Set_Default_Rules(Rules:word);
Field_Rules(DefID:byte;Rules:word;AChar:IOcharset;DChar:IOcharset);
Display_All_Fields;
Allow_Esc(OK:boolean);
Allow_Beep(OK:boolean);
Dispose_Fields;
Dispose_Tables;
Process_Input(StartField:byte);

STRNTTT5  (23)

Squeeze(L:char;Str:string;Width:byte): string;
First_Capital_Pos(Str:string): byte;
First_Capital(Str:string): char;
PadLeft(Str:string;Size:byte;Pad:char):string;
PadCenter(Str:string;Size:byte;Pad:char):string;
PadRight(Str:string;Size:byte;Pad:char):string;
Last(N:byte;Str:string):string;
First(N:byte;Str:string):string;
Upper(Str:string):string;
Lower(Str:string):string;
Proper(Str:string):string;
OverType(N:byte;StrS,StrT:string):string;
Strip(L,C:char;Str:string):string;
LastPos(C:Char;Str:string):byte;
PosWord(Wordno:byte;Str:string):byte;
WordCnt(Str:string):byte;
ExtractWords(StartWord,NoWords:byte;Str:string):string;
Str_to_Int(Str:string):integer;
Str_to_Long(Str:string):Longint;
Str_to_Real(Str:string):real;
Real_to_str(Number:real;Decimals:byte):string;
Int_to_Str(Number:longint):string;
Real_to_SciStr(Number:real; D:byte):string;

MISCTTT5 (22)

Exist(Filename:string):boolean;
CopyFile(SourceFile, TargetFile:string): byte;
File_Size(Filename:string): longint;
File_Drive(Full:string): string;
File_Directory(Full:string): string;
File_Name(Full:string): string;
File_Ext(Full:string): String;
Time: string;
Clock;
Date: String;
PrintScreen;
Beep;
Printer_Status:byte;
Printer_ready:boolean;
FlushKeyBuffer;
Reset_Printer;
Date_To_Julian(InDate:string;format:byte): dates;
Julian_to_Date(J:dates;format:byte):string;
Today_in_Julian: dates;
Date_Within_Range(Min,Max,Test:dates):boolean;
Valid_Date(Indate:string;format:byte): boolean;
Future_Date(InDate:string;format:byte;Days:word): string;


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                           TECHNOJOCK'S TURBO TOOLKIT                   (REG902)
                                  REGISTRATION

                Copyright 1986, 1989 TechnoJock Software, Inc.

Name      ___________________________________________________

Address   ___________________________________________________

          ___________________________________________________

City      ____________________   State _____  Zip   _________

Country   ___________________________

Telephone ___________________________

Where did you obtain the Toolkit?

MEDIA:  ( ) 360k 5 1/4 disks    ( ) 1.2 Mb 5 1/4 disk    ( ) 3 1/2 disk

COMMENTS:





Prices are effective Jan 25 1989 and are subject to change withour notice.
The price includes a 300 page typeset manual, the complete program disk(s),
and a pull out quick reference.

No of copies required:              _____   @ $49.95   =  $ _____

                       Shipping (per copy)
                          USA      + $5.00
                          Canada   + $10.00            =  $ _____
                          Overseas + $15.00 

                    Texas Residents add 8% Sales Tax   =  $ _____

                                        Total Enclosed =  $ _____

( ) MasterCard    ( ) Visa      ( ) *Check/Money Order

* Checks must be in US Dollars from a US account, payable to 
  TechnoJock Software, Inc.

Card Number  ____________________________________________________

Expiration Date ___________ Signature  __________________________

Thank-you for your support of the Toolkit,

                    TechnoJock Software, Inc.
                    PO Box 820927
                    Houston TX 77282
                    (713) 493-6354       
                    Compuserve ID: 74017,227

```
{% endraw %}

## UPGRADE.DOC

{% raw %}
```

        U P G R A D E   N O T E S   F O R   V E R S I O N   4   U S E R S
        -----------------------------------------------------------------

This file contains important information for programmers who are upgrading
an application from version 4.0 to version 5.0 of the Toolkit.

During development of the new Toolkit, every effort has been made to maintain
consistency with version 4.0, but in certain units this was not possible.
As a result, some programs that were written for version 4.0 will need to be
modified before they will function with the new version. This document does
not identify any of the new additions to the Toolkit, only changes to 
existing routines.

Listed below, in order of significance, are the details for each unit:

IOTTT5
------

This unit has undergone a very major rewrite with many new powerful features.
In order for the expanded IO routines to be consistent, all of the old
procedures have been renamed. The table below identifies the v4.0
procedure with the corresponding v5.0 procedure(s).

               Version 4.0               Version 5.0

              IO_SetFields              Create_Fields
              IO_SetColors              Define_Colors
              IO_DefineMsg              Add_Message
              IO_DefineStr              Add_Field + String_Field
              IO_DisplayFields          Display_All_Fields
              IO_SoundBeeper            Allow_Beep
              IO_ResetFields            Dispose_Fields
              IO_AllowEsc               Allow_Esc
              IO_Edit                   Process_Input

The Process_Input procedure is passed a parameter that identifies the field
number of the first field to highlight - not an error code. The variable
I_Char is updated with the character that the user pressed last. I_Char
will be set to #027 if the user escaped.

Listed below is a code fragment that has been converted from v4.0 to v5.0:


{Version 4.0 commands}
begin
    IO_SetFields(3);
    IO_SoundBeeper(False);
    IO_DefineStr(1,  3, 2, 3, 2, 25, 1, Str1, '!!!!!!!!!!!!!!!!!!!!!!');
    IO_DefineStr(2,  1, 3, 1, 3, 25, 3, Str2, '###');
    IO_DefineStr(3,  2, 1, 2, 1, 25, 5, Str3, '(##-###) ##');
    SaveScreen(1);                     {save previous input screen}
    Attrib(1,1,80,25,darkgray,black);  {darken the display but still visible}
    FBox(X1,Y1,X2,Y2,blue,lightgray,1);
    WriteAT(1,1,blue,lightgray,'Order description:');
    WriteAT(1,3,blue,lightgray,'Quantity:');
    WriteAT(1,5,blue,lightgray,'Part No:');
    IO_Edit(Retcode);
    IO_ResetFields;
    RestoreScreen(1);
    DisposeScreen(1);
end;


{equivalent version 5.0 commands}
begin
    Create_Fields(3);
    Allow_Beep(False);
    Add_Field(1,    3, 2, 3, 2, 25, 1);
    String_Field(1, Str1, '!!!!!!!!!!!!!!!!!!!!!!');
    Add_Field(2,  1, 3, 1, 3, 25, 3);
    String_Field(2, Str2, '###');
    Add_Field(3,  2, 1, 2, 1, 25, 5);
    String_Field(3, Str3, '(##-###) ##');
    SaveScreen(1);                     {save previous input screen}
    Attrib(1,1,80,25,darkgray,black);  {darken the display but still visible}
    FBox(X1,Y1,X2,Y2,blue,lightgray,1);
    WriteAT(1,1,blue,lightgray,'Order description:');
    WriteAT(1,3,blue,lightgray,'Quantity:');
    WriteAT(1,5,blue,lightgray,'Part No:');
    Process_Input(1);
    Dispose_Fields;
    RestoreScreen(1);
    DisposeScreen(1);
end;

Review the IODEM?.pas files for more further examples of the new commands.

Set a conditional define IOFULL to enable all of the new features.


MenuTTT5
--------

A new procedure Menu_Set has been added. This procedure automatically
sets a menu_record variable to its default values. You MUST call this 
procedure to initialize the menu_record variables, otherwise the system
will hang. 

The major change is that a user hook has been added to the menu_record, and
it needs to be set to nil or to a far procedure. Refer to menudem1.pas
for a simple example.


DirTTT5
-------

This unit has been completely rewritten. The Display_Directory procedure
is now passed the fully qualified file mask instead of the path and filemask 
separately.

The global variable "DTTT" (formerly "D") controls the look and feel of the
directory window.

Set a conditional define DIRFULL to enable all of the directory procedures.


WinTTT5
-------
A new global boolean variable W_Fatal is used to identify if the program will
halt when a window error occurs. Another global variable W_Error is updated
with the error codes after window operations.

The Screen_Size parameter is no longer needed. The Toolkit automatically
accommodates condensed screen displays.


MiscTTT5
--------
The function Exist can now be passed a file mask as well as a specific
filename.


FastTTT5
--------
The global variable WaitForRetrace has been renamed SnowProne.


PullTTT5
--------
The global variable PM has been renamed PTTT.


The v4.0 structure of the routines in KeyTTT5, readTTT5 and StrnTTT5 
have not been affected.


                               -- o --


```
{% endraw %}

## WINTTT5.ASM

{% raw %}
```
;{--------------------------------------------------------------------------}
;{                         TechnoJock's Turbo Toolkit                       }
;{                                                                          }
;{                              Version   5.00                              }
;{                                                                          }
;{                                                                          }
;{              Copyright 1986, 1989 TechnoJock Software, Inc.              }
;{                           All Rights Reserved                            }
;{                          Restricted by License                           }
;{--------------------------------------------------------------------------}
;
;                     {--------------------------------}                                       
;                     {        OBJ:   WinTTT5          }
;                     {--------------------------------}


;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                + 
;+          This asm file contains 2 pascal procedures for        +  
;+          linking with TTT version 5.0. The procedures are:     +
;+                                                                +
;+           MoveFromScreen(var Source, Dest; Length : Word);     +
;+           MoveToScreen(var Source, Dest; Length : Word);       +
;+                                                                + 
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


DATA    SEGMENT BYTE PUBLIC

        EXTRN   SnowProne : BYTE

DATA    ENDS


CODE    SEGMENT BYTE PUBLIC

        ASSUME  CS:CODE,DS:DATA

        PUBLIC  MoveFromScreen, MoveToScreen

;+++++++++++++++++++++++++++++++++++++++
;+     M O V E F R O M S C R E E N     +
;+++++++++++++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                +
;+    Move data from screen to DEST without snow. Note that       +
;+    the length is in WORDS not bytes.                           +
;+                                                                +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


MFLength        EQU     WORD PTR [BP+6]
MFDest          EQU     DWORD PTR [BP+8]
MFSource        EQU     DWORD PTR [BP+12]

MoveFromScreen  PROC FAR

        PUSH    BP                      ;Save BP
        MOV     BP,SP                   ;Set up stack frame
        MOV     BX,DS                   ;Save DS in BX
        MOV     AL,Snowprone            ;Grab before changing DS
        LES     DI,MFDest               ;ES:DI points to Dest
        LDS     SI,MFSource             ;DS:SI points to Source
        MOV     CX,MFLength             ;CX = Length
        CLD                             ;Set direction to forward
        RCR     AL,1                    ;Check WaitForRetrace
        JNC     MFNoWait                ;False? Use MFNoWait routine
        MOV     DX,03DAh                ;Point DX to CGA status port
MFNext:
        CLI                             ;No interrupts now
MFWaitNoH:
        IN      AL,DX                   ;Get 6845 status
        TEST    AL,8                    ;Check for vertical retrace
        JNZ     MFGo                    ;In progress? go
        RCR     AL,1                    ;Wait for end of horizontal
        JC      MFWaitNoH               ; retrace
MFWaitH:
        IN      AL,DX                   ;Get 6845 status again
        RCR     AL,1                    ;Wait for horizontal
        JNC     MFWaitH                 ; retrace
MFGo:
        LODSW                           ;Load next video word into AX
        STI                             ;Allow interrupts
        STOSW                           ;Store video word in Dest
        LOOP    MFNext                  ;Get next video word
        JMP     MFExit                  ;All Done
MFNoWait:
        REP     MOVSW                   ;That's it!
MFExit:
        MOV     DS,BX                   ;Restore DS
        MOV     SP,BP                   ;Restore SP
        POP     BP                      ;Restore BP
        RET     10                      ;Remove parameters and return

MoveFromScreen  ENDP

;+++++++++++++++++++++++++++++++++++
;+     M O V E T O S C R E E N     +
;+++++++++++++++++++++++++++++++++++

;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;+                                                                +
;+    Move data from SOURCE to DEST without snow. Note that       +
;+    the length is in WORDS not bytes.                           +
;+                                                                +
;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


;****************************************************** MoveToScreen

;procedure MoveToScreen(var Source, Dest; Length : Word);
;Move Length words from Source to Dest (video memory) without snow

;equates for parameters:
MTLength        EQU     WORD PTR [BP+6]
MTDest          EQU     DWORD PTR [BP+8]
MTSource        EQU     DWORD PTR [BP+12]

MoveToScreen    PROC FAR

        PUSH    BP                      ;Save BP
        MOV     BP,SP                   ;Set up stack frame
        PUSH    DS                      ;Save DS
        MOV     AL,SnowProne            ;Grab before changing DS
        LES     DI,MTDest               ;ES:DI points to Dest
        LDS     SI,MTSource             ;DS:SI points to Source
        MOV     CX,MTLength             ;CX = Length
        CLD                             ;Set direction to forward
        RCR     AL,1                    ;Check WaitForRetrace
        JNC     MTNoWait                ;False? Use MTNoWait routine
        MOV     DX,03DAh                ;Point DX to CGA status port
MTGetNext:
        LODSW                           ;Load next video word into AX
        MOV     BX,AX                   ;Store video word in BX
        CLI                             ;No interrupts now
MTWaitNoH:
        IN      AL,DX                   ;Get 6845 status
        TEST    AL,8                    ;Check for vertical retrace
        JNZ     MTGo                    ;In progress? Go
        RCR     AL,1                    ;Wait for end of horizontal
        JC      MTWaitNoH               ; retrace
MTWaitH:
        IN      AL,DX                   ;Get 6845 status again
        RCR     AL,1                    ;Wait for horizontal
        JNC     MTWaitH                 ; retrace
MTGo:
        MOV     AX,BX                   ;Move word back to AX...
        STOSW                           ; and then to screen
        STI                             ;Allow interrupts
        LOOP    MTGetNext               ;Get next video word
        JMP     MTExit                  ;All done
MTNoWait:
        REP     MOVSW                   ;That's all!
MTExit:
        POP     DS                      ;Restore DS
        MOV     SP,BP                   ;Restore SP
        POP     BP                      ;Restore BP
        RET     10                      ;Remove parameters and return

MoveToScreen    ENDP

CODE    ENDS

        END

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1652

     Volume in drive A has no label
     Directory of A:\

    ARCX     COM     14710   8-24-88   5:00a
    BUILDTTT PAS       792   1-31-89  12:00a
    DEMO4    ARC     70469   1-31-89  12:00a
    DEMO5    ARC     70480   1-31-89  12:00a
    FASTTTT5 ASM     14349   1-31-89  12:00a
    MANUAL   ARC     63124   1-31-89  12:00a
    PROCLIST TXT      7693   1-31-89  12:00a
    REGISTER DOC      1817   1-31-89
    TTTNG    ARC    100858   1-31-89  12:01a
    UPGRADE  DOC      5151   1-31-89  12:00a
    WINTTT5  ASM      7421   1-31-89  12:00a
           11 file(s)     356864 bytes
                               0 bytes free
