---
layout: page
title: "PC-SIG Diskette Library (Disk #34)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0034/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0034"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SORTED DIRECTORY"

    This collection includes a program to redefine your keyboard, one to
    let you add volume labels to disks without reformatting, two RAM-disk
    programs, and a very nice directory display, SDIR.COM, that is a vast
    improvement over DOS's "DIR" command.  Assembly source code is included
    for these last two.  Also included are two routines meant to be merged
    with the PC-TALK/III program.  One adds split-screen capabilities to
    the program, and the other adds the X-modem protocol.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on ASM listings, refer to your
    Assembler manual.  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.
    
    File Descriptions:
    
    VOLSER   DOC  Documentation file
    XOFF     MRG  Adds XMODEM protocol to PC-Talk 2.0
    DEFKEY   COM  Keyboard reassignment program; DOS 1.1 and 2.0
    XOFF     DOC  Documentation file
    DEFCOPY  BAT  Copies distribution disk
    DEFMAIL  EXE  Mail/donation assistance
    BSLASH   KEY  Backslash keyboard configuration file
    ORIGINAL KEY  Original keyboard configuration file
    DEFKEY   DOC  Documentation file
    PC3SC    DOC  Documentation file
    SDIR22   COM  Executable program file
    SDIR22   ASM  Sorted directory program for DOS 2.0
    VDISK    ASM  Sample RAM disk program from DOS 2.0 manual
    VDISK2   ASM  Same as VDISK.COM modified for double-sided disk
    VDISK    COM  Executable program file
    VDISK2   COM  Executable program file
    VOLSER   COM  Program to write 2.0 volume labels on diskettes
    PC3SC    MRG  Adds split screen capability to PC-Talk III
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #34, version V1_2 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  SDIR22  .ASM         CRC = F6 2F

--> FILE:  SDIR22  .COM         CRC = 8E B8

--> FILE:  VDISK   .ASM         CRC = E2 FD

--> FILE:  VDISK   .COM         CRC = 89 42

--> FILE:  VDISK2  .ASM         CRC = 53 2B

--> FILE:  VDISK2  .COM         CRC = E6 AA

--> FILE:  XOFF    .DOC         CRC = F0 61

--> FILE:  XOFF    .MRG         CRC = 9E 10

--> FILE:  PC3SC   .DOC         CRC = AF 46

--> FILE:  PC3SC   .MRG         CRC = BC DA

--> FILE:  DEFKEY  .COM         CRC = 21 14

--> FILE:  ORIGINAL.KEY         CRC = 00 00

--> FILE:  BSLASH  .KEY         CRC = 00 00

--> FILE:  DEFMAIL .EXE         CRC = EB 42

--> FILE:  DEFCOPY .BAT         CRC = 01 EE

--> FILE:  DEFKEY  .DOC         CRC = A9 F6

--> FILE:  DIR     .            CRC = 40 FD

--> FILE:  VOLSER  .COM         CRC = F0 61

--> FILE:  VOLSER  .DOC         CRC = 52 96

 ---------------------> SUM OF CRCS = 61 BA

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DEFKEY.DOC

{% raw %}
```









                             Define Keyboard  (DEFKEY)






                                    Version 1.2


























                                Proprietary Notice

     DEFKEY is a proprietary product developed by SofTool Systems and
     distributed by Computerenergy Corporation, Denver, Colorado.  

     (c)Copyright 1983 by SofTool Systems.  All rights reserved except those
     expressly granted to the user within this document.  

     Computerenergy Corporation, PO Box 6267, Denver, CO 80206 (303) 233-9118
     Source: ST6070 







                                        - i -
                                  TABLE OF CONTENTS

     Section                                                              Page



     CHAPTER 1  DEFKEY DISTRIBUTION NOTICE ...............................   1

     CHAPTER 2  INTRODUCTION .............................................   2
        2.1  Hardware and Software Requirements ..........................   2
        2.2  Memory Usage ................................................   2
        2.3  Technical Considerations ....................................   2

     CHAPTER 3  INSTALLATION PROCEDURES ..................................   3

     CHAPTER 4  PROGRAM OPERATION ........................................   4
        4.1  An Example ..................................................   5

     CHAPTER 5  SOME SUGGESTIONS .........................................   7

     CHAPTER 6  OTHER INFORMATION ........................................   8
        6.1  Distribution Disk Contents ..................................   8
        6.2  Maillist/Contribution Assistance ............................   8
        6.3  Disclaimer ..................................................   8

     CHAPTER 7  SUGGESTIONS, FEEDBACK, AND BUG REPORTS ...................   9

































     DEFKEY - (c)SofTool Systems 1983   - ii -      Computerenergy Corporation
                                      CHAPTER 1

                             DEFKEY DISTRIBUTION NOTICE

     DEFKEY is being distributed using the "Freeware"* approach.  To those of
     you unfamiliar with this approach, it works like this.  You may send
     either a preformatted single-sided disk (or a prepaid contribution for
     our disk and mailer) to us with a prepaid return mailer and we will send
     a complete copy of the product.  If the product does not meet your needs,
     please pay nothing.  If the product does meet your needs, and you can use
     it, then we would appreciate a contribution of whatever you feel is
     appropriate.  Naturally, we have probably given you a clue in several
     places as to what is our "completely unprejudiced opinion" of an
     appropriate contribution amount.  Contributions are completely voluntary
     and much encouraged.  

     Even if you do not contribute, you are encouraged to copy and distribute
     the product freely subject to the following restrictions: 

          1. Do not distribute altered copies.  Note: You may distribute a
             separate set of modifications to merge in if you wish but they
             must be clearly identified as not originating from Computerenergy
             or its Authors.  If you do make modifications, we would like to
             see what you've done, if possible, for future versions.  

          2. The product is to be distributed as a complete "distribution
             copy" produced by the copy utility provided with the product for
             this purpose.  

          3. No fee is to be charged for copying or distributing the program
             without an express written agreement with Computerenergy
             Corporation and or its contributing authors.  

          4. Commercial sale of this product in any manner is prohibited
             without Computerenergy's and/or its contributing author's written
             permission.  Some products will be released with this permission
             automatically given and expressly stated.  

     User Groups/Clubs: Computerenergy's freeware products may be distributed
     by Clubs and User Groups subject to the same restrictions.  We would ask
     only that contributions to our continuing efforts be encouraged by those
     performing such distribution.  

     Computer Bulletin Boards: Computerenergy's freeware products may be
     distributed by BBS's subject to the same restrictions and contribution
     encouragement.  However, as the products tend to be large and consist of
     several files, we have some concern as to the reliability of
     transmissions and length of connect time.  Perhaps disks could be mailed
     or just the documentation placed on the board for browsers.  


     * The Freeware concept was initially developed by Andrew Fluegelman and
     the term "FREEWARE" is a trademark of The Headlands Press, Inc.  The
     Headlands Press provides a catalog of information about Freeware products
     available from multiple sources.  They may be contacted at PO Box 862,
     Tiburon, CA 94920 or Source: TCP204 or Compuserve: 71435,1235.  



     DEFKEY - (c)SofTool Systems 1983   - 1 -       Computerenergy Corporation
                                      CHAPTER 2

                                    INTRODUCTION


     Have you ever wanted to:

          *  Make that misplaced backslash key act like a shift key?
          *  Re-arrange your function keys?
          *  Experiment with a Dvorak or other non-standard keyboard layout?
          *  Permanently set the Caps Lock or Num Lock status ON or OFF?

     DEFKEY lets you do all these things and more.  It gives you complete
     flexibility to define the IBM PC keyboard the way YOU prefer.  


     2.1  Hardware and Software Requirements

     DEFKEY requires an IBM PC with an 80 column display, a minimum of 32K
     memory and one disk drive.  It operates under DOS 1.1 or 2.0 and uses the
     function "Terminate but stay resident" to attach itself to the DOS.
     Since it works as a resident add-on to DOS, DEFKEY is completely
     transparent to all of your application programs!  


     2.2  Memory Usage

     The resident portion of DEFKEY occupies only 240 bytes of memory
     under DOS 1.1 or 304 bytes under DOS 2.0.  When you change between
     alternate keyboard definitions, the program checks to see if the DEFKEY
     module is already resident.  If so, the existing memory space is reused
     for the new keyboard definition.


     2.3  Technical Considerations

     DEFKEY operates by intercepting the Keyboard Interrupt (#9) and
     translating the Keyboard Scan Code to the value you have specified.  The
     modified Scan Code is then passed to the ROM BIOS keyboard decoding
     routine for normal processing.  The Lock key status bits are set or reset
     on each Keyboard Interrupt to force the Caps Lock, Num Lock, and Scroll
     Lock status to the mode you have selected.  

     This version of DEFKEY will not work with any other application or
     utility program which also intercepts the Keyboard Interrupt.  We are
     not aware of any currently available programs that conflict with DEFKEY
     in this manner; but if you do find such a problem, please contact us
     with the details and we will endeavor to resolve the conflict as quickly
     as possible.











     DEFKEY - (c)SofTool Systems 1983   - 2 -       Computerenergy Corporation
                                      CHAPTER 3

                               INSTALLATION PROCEDURES


     Installing DEFKEY is simply a matter of copying files from the
     distribution diskette to your working PC-DOS System disk.  A brief
     description of the major files contained on the distribution diskette: 

     DEFKEY.COM     The program which allows you to establish alternate
                    keyboard configurations.

     BSLASH.KEY     A keyboard definition file that makes the backslash key
                    act like the left shift key and sets the Num Lock status
                    OFF.

     ORIGINAL.KEY   A keyboard definition file that resets the keyboard to
                    its original configuration.


     To copy these files, place the target PC-DOS disk in Drive A and specify
     A as the default drive.  Then place the distribution diskette in Drive B
     and type the commands: 

               COPY B:DEFKEY.COM A:
               COPY B:BSLASH.KEY A:
               COPY B:ORIGINAL.KEY A:

     Note: Normal DEFKEY operation requires only the DEFKEY.COM command file
     and your own customized keyboard definition files to be resident on the
     system.  The two keyboard definition files listed above are not required,
     but may be handy.



























     DEFKEY - (c)SofTool Systems 1983   - 3 -       Computerenergy Corporation
                                      CHAPTER 4

                                  PROGRAM OPERATION


     Each of the keys on the PC keyboard is assigned a number from 01 to 83.
     This is the Scan Code that is passed to the main processor whenever the
     keyboard processor determines that a key has been pressed or released.
     Those of you who have the IBM Technical Reference manual can refer to
     page 2-16 for a keyboard diagram that shows the number assigned to each
     key.  The DEFKEY program will display a similar keyboard layout that
     shows the Scan Code assigned to each key.  We will refer to this Scan
     Code as the physical key number.  To see what this keyboard display looks
     like, type the following two commands: 

               DEFKEY BSLASH.KEY
               DEFKEY

     The physical key number is displayed on each key in normal video format
     (white character on black background).  DEFKEY achieves its flexibility
     by allowing you to specify a logical key number for any physical key.
     When DEFKEY is enabled, it will return the logical key number you have
     specified instead of the physical key number.  This logical number will
     appear in reverse video format under the physical number for those keys
     where the two numbers differ.  In the keyboard display created by the
     above commands, the only key that shows this reverse video display is the
     backslash key (physical key #43).  It has been assigned a logical key
     number of 42 which means that whenever the backslash key is pressed, it
     will return the Scan Code of the left shift key.  All the remaining keys
     have a logical key number equal to the physical key number, so they will
     return their original Scan Codes.  

     DEFKEY also lets you permanently set the Caps Lock, Num Lock, and Scroll
     Lock status.  These settings may be overridden with the use of the shift
     key.  The current status of these Lock key settings is shown on the top
     line of the keyboard display.  


     The format for the Define Keyboard command is:

     DEFKEY [filespec [BUILD]] 

       Where: 

         filespec    is the file specification for a keyboard definition file.
                     You can create any number of these definition files and
                     switch between them at any time.  In our examples, we use
                     the extension .KEY for these files; but you may use any
                     other extension, or no extension, if you so choose.

         BUILD       is an optional parameter that allows you to establish new
                     keyboard definition files by either creating an entirely
                     new file or editing an existing definition file.






     DEFKEY - (c)SofTool Systems 1983   - 4 -       Computerenergy Corporation
                                                  CHAPTER 4: PROGRAM OPERATION


     DEFKEY will perform several different functions, depending on the
     parameters that are entered on the command line: 

          1. With no parameters, the current DEFKEY status is displayed.  This
             will consist of the keyboard layout display if DEFKEY is enabled,
             or the message "DEFKEY is not enabled".  

          2. With only the filespec parameter, DEFKEY enables the keyboard
             definition that was previously saved in the specified file.  

          3. With both filespec and BUILD parameters, DEFKEY gives you the
             ability to establish new keyboard definition files.  If filespec
             already exists, you can modify the keyboard definition contained
             in that file.  If filespec does not exist, it will be created
             with the keyboard definition changes that you enter.  


     4.1  An Example

     To illustrate the DEFKEY operation, let's go through a simple example
     step-by-step.  Perhaps you have come across the situation while entering
     a BASIC program where there is a long list of numeric DATA items or line
     numbers separated by commas.  In this case, it would be convenient to
     redefine the plus sign key as a comma so that you can concentrate your
     typing on the numeric keypad.  Naturally, you would also want to set the
     Num Lock status ON.  We'll further assume that you would like to retain
     the backslash key redefined as a shift key.  The file BSLASH.KEY already
     accomplishes this redefinition, so we can use it as a starting point.
     Since we don't want to change that file, however, the first step would
     be: 

                    COPY BSLASH.KEY PLUS.KEY

     Now we have a keyboard definition file PLUS.KEY that we can modify for
     our new application.  

     Type the following command to edit this new definition file: 

                    DEFKEY PLUS.KEY BUILD

     When you get to the keyboard layout display, you will notice, as before,
     that the backslash key is redefined as a left shift key.  The first
     prompt is: 

                    Finished with key assignments? (Y/N)

     We want to change the plus key assignment, so now we'll press the N key.
     This will give the prompt: 

                    Physical key number? (01-83)

     This requires a two-digit response with leading zero if necessary.  For
     our example, we want to redefine the plus key so we would type 78.  The
     key number you have entered will blink at this point so you can verify
     that you have specified the right key.  If you find that you did type the

     DEFKEY - (c)SofTool Systems 1983   - 5 -       Computerenergy Corporation
                                                  CHAPTER 4: PROGRAM OPERATION


     wrong key number here, just enter a logical number the same as the
     incorrect physical number and go through the prompt sequence again to get
     the proper key.  In any case, the next prompt is: 

                    Logical key number? (00-83)

     This also requires a two digit response with a leading zero if necessary.
     A response of 00 will disable the associated physical key.  A key that
     has been disabled will not return a Scan Code, but will cause a beep on
     the speaker similar to the keyboard buffer overflow indicator.  In our
     example, we want the plus key to act like a comma key, so we type 51 (the
     physical key number for the comma).  Notice that a reverse video 51 is
     now displayed under the 78 of the plus key.  After this keyboard
     definition is enabled, the plus key will return the Scan Code of 51 which
     makes it appear to be a comma key!  Be aware that the new key definitions
     you enter in this edit mode are not enabled until you complete all the
     desired changes and exit the program.  This can be done in response to
     the prompt: 

                    Finished with key assignments? (Y/N)

     We are now finished with the redefinition we set out to accomplish, so we
     can respond with a Y.  You will now be given the opportunity to change
     the Lock key settings, beginning with the prompt: 

                    0 = No Change, 1 = NOT SET, 2 = SET ON, 3 = SET OFF
                    Caps Lock setting? (0-3)

     We don't want to change this setting, so respond with a 0.  

                    Num Lock setting? (0-3)

     Since the purpose of this keyboard definition is to use the numeric
     keypad for entering a long series of numbers, we want to set the Num Lock
     status ON and respond with a 2 to accomplish that.  The final prompt is: 

                    Scroll Lock setting? (0-3)

     Type a 0 for No Change.  

     This terminates the non-resident portion of the DEFKEY program, saves the
     new keyboard definition in the file PLUS.KEY, and enables the definition
     as shown on the keyboard layout display.  













     DEFKEY - (c)SofTool Systems 1983   - 6 -       Computerenergy Corporation
                                      CHAPTER 5

                                  SOME SUGGESTIONS


         1.  The DEFKEY resident code is erased whenever DOS is started (power
             on) or restarted (system reset via <Ctrl><Alt><Del>).  If you
             have established a relatively permanent alternate keyboard
             configuration, you may want to execute DEFKEY automatically each
             time DOS is started by using the AUTOEXEC DOS feature.  The Batch
             Processing section of your DOS manual provides a complete
             description of this Automatic Program Execution feature.  

         2.  Keys that are the same size can be physically exchanged.  You can
             use a device such as a bent paper clip to hook under the key cap
             and gently pull up to remove a key.  Then just re-insert it at
             the new location.  This technique could be used to re-arrange the
             function keys or set up a Dvorak keyboard layout.

         3.  The two keys that most people would like to exchange, the left
             shift and backslash keys, are unfortunately different sizes.  For
             this case, we recommend just redefining the backslash key to act
             like the left shift key.  The Technical Reference manual outlines
             another way to enter any character code: hold down the ALT key,
             then type the decimal number of the desired character on the
             numeric keypad.  Appendix G in the BASIC manual lists the
             character codes and their associated decimal numbers.  From this
             list, we can find the decimal value for the backslash character
             (92) and the shifted backslash (124).  Since these two characters
             are rarely used, most people will not find this ALTernate method
             too inconvenient.  




























     DEFKEY - (c)SofTool Systems 1983   - 7 -       Computerenergy Corporation
                                      CHAPTER 6

                                  OTHER INFORMATION

     6.1  Distribution Disk Contents


               File Name       Description
               ------------    --------------------------------------

               DEFKEY.COM      DEFKEY command
               ORIGINAL.KEY    Original configuration keyboard definition file
               BSLASH.KEY      Backslash keyboard definition file
               DEFKEY.DOC      Documentation
               DEFMAIL.EXE     Maillist/Donation Assistance
               DEFCOPY.BAT     Copies Distribution Disk


     6.2  Maillist/Contribution Assistance

     There is a standalone program on the distribution disk that will print a
     letter for you that can be sent to us to be sure that you are placed on
     our maillist - particularly important if you did not receive your copy
     directly from us.  Amazingly enough, the letter will even assist you in
     making a contribution but that is not required (nice though).  

     To print the letter, place the distribution disk in the default drive
     (usually A:) and type: 

                    DEFMAIL

     The program will ask for some information, print the letter, and return
     to DOS.  


     6.3  Disclaimer

          All Computerenergy computer programs are distributed on an "as is"
          basis without warranty.  

          Computerenergy Corporation and/or any of its program authors shall
          have no liability or responsibility to customer or any other person
          or entity with respect to any liability, loss or damage caused or
          alleged to be caused directly or indirectly by programs distributed
          in any manner by Computerenergy Corporation, including but not
          limited to any interruption of service, loss of business or
          anticipatory profits or consequential damages resulting from the use
          or operation of such computer programs.  

          Note: Good data processing procedure dictates that the user test the
          program, run and test sample sets of data, and run the system in
          parallel with the system previously in use for a period of time
          adequate to insure that results of operation of the computer program
          are satisfactory.  





     DEFKEY - (c)SofTool Systems 1983   - 8 -       Computerenergy Corporation
                                      CHAPTER 7

                       SUGGESTIONS, FEEDBACK, AND BUG REPORTS

          If you can spare the time, we would appreciate your feedback and
          suggestions to help us to improve DEFKEY.  As an added inducement,
          we will also send a free DEFKEY (corrected) to the first person
          reporting each bug.  Immediate family members of Computerenergy or
          SofTool employees are NOT eligible.  If possible, each bug reported
          should include a short-as-possible printout of the reference
          situation with explanatory notes.  Our unprejudiced judging panel
          will make "Bug Awards" when the spirit moves them and, of course,
          their decisions are final.  


          We are also very interested in learning of the uses that you find
          for DEFKEY.  Your feedback on new ways to use DEFKEY will be added
          to this documentation to provide ideas for future users.


          Please address correspondence to the address on the title page.  (If
          you've lost your title page, just send us a note and we'll send you
          a new one.) 




































     DEFKEY - (c)SofTool Systems 1983   - 9 -       Computerenergy Corporation

```
{% endraw %}

## PC3SC.DOC

{% raw %}
```
This is a BASIC file intended to be merged into the VIRGIN PC-TALK/III.BAS
FILE distributed by Fluegelman. This code, after merging, will allow split
screen operation (Toggled by pressing Ctrl+Home). All keyboard input is
displayed on line 25 while all COMM input is on the top 24 lines. After
pressing ENTER, line 25 is transmitted. Pressing the Esc key will erase
line 25 without Xmission.

```
{% endraw %}

## SDIR22.ASM

{% raw %}
```
    TITLE   SDIR - SORTED DIRECTORY COMMAND, Version 2.1
    PAGE    64,132                            ; JAN 1983
COMMENT |
    SDIR [d:][filename[.ext]] [options]
     [filespec] same as for DIR command

     [options] * /A - List hidden files.
               * /E - Without screen erase.
               * /P - Pause when screen full.
                 /X - Sort by extension.
                 /S - Sort by size.
                 /D - Sort by date/time.
                 /N - Do not sort, original order.

       Default = *.* sorted by name.ext with screen erase.
       * - Option may be combined with other options.

   This source file was created from an object file obtained
 from Gene Plantz's BBS in Chicago. The original file name
 was SD.HEX.  I then used DEBUG and CAPTURE to get the first
 dis-assembly which  was then edited with WORDSTAR to create
 a source that when assembled using MASM would duplicate the
 original object file.
   Comments have been added and I do hope they are helpful.
 I have made several modifications to the first version and
 am continuing to add comments.  This source file is an
 excellent example for anyone wishing to learn 8086/8088
 assembly language.  Use at your own risk and feel free to
 share this file with your friends.
   I certainly wish that John Chapman would publish his
 source file.  His comments are sure to be more meaningful
 than mine could ever be.  Some of the conversion routines
 are very elegant, but difficult to understand.  As far as
 I'm concerned, PRINTDD is magic.
   Several modifications have been made.  They are:

        1. Filespecs are processed like DIR does.
        2. No sort option was added. /N
        3. Pause when screen full option added. /P
    4. Number of files found is printed.

                                    Ted Reuss
                                    Houston, TX

    SDIR Version 2.2  The GETFREE Subroutine was updated for DOS 2.0
    April 1, 1983   by   Jack Y. Fong
    Changes are denoted by "JYF" at the end of changed lines.
|

    SUBTTL  EQUATES & STRUCTURES
    PAGE
IF1
DOSCALL MACRO       FUNC,PARM1
.xcref
F_C =       FUNC
IFNB <PARM1>
IF F_C EQ 2 OR (F_C GE 4 AND F_C LE 6) OR F_C EQ 14 OR F_C EQ 46
    MOV     DL,PARM1
ELSE
    MOV     DX,OFFSET PARM1
ENDIF
ENDIF
        MOV     AH,FUNC
        INT     21H
.cref
        ENDM
ENDIF
.SALL   ;supress all macro expansions
;       PC-DOS INTERRUPT 21H FUNCTION CODES
;
@CHROUT EQU     2       ;display char in DL
@KEYIN  EQU     8       ;kybd input w/o echo
@STROUT EQU     9       ;print string terminated with $
@CKEYIN EQU     12      ;clr kybd bufr & do inp.func in AL
@SRCH1  EQU     17      ;search for first dir entry
@SRCH2  EQU     18      ;search for next dir entry
@GETDSK EQU     25      ;get default disk drive
@SETDTA EQU     26      ;set disk transfer addr
@FATAD2 EQU     28      ;get FAT of drive # in DL
@PARSEF EQU 41      ;parse filename
@GETDTE EQU 42      ;get system date
@GETTME EQU 44      ;get system time
@DSKFSP EQU 36H     ;get disk free space                            JYF
@GETVER EQU 30H     ;get version number                             JYF

CR  EQU     0DH     ;carriage return
LF  EQU     0AH     ;line feed
FCB_1       EQU     5CH     ;fcb for parameter 1
PARAM_L EQU 80H     ;# characters in PARAM_B
PARAM_B EQU 81H     ;DOS cmd parameter buffer.

; PC-DOS packed date   <yyyyyyym mmmddddd>
P_DTE       RECORD  P_YR:7,P_MO:4,P_DY:5
; PC-DOS packed time   <hhhhhmmm mmmsssss>
P_TME       RECORD  P_HR:5,P_MI:6,P_2S:5

DIRNTRY STRUC               ;directory entry structure
LNK DW      0       ;ptr to next entry
NAM DB      8 DUP(0),'.' ;filename
EXT DB      3 DUP(0) ;extension
TME DW      0       ;time
DTE     DW      0       ;date
SZL     DW      0       ;low word of size
SZH     DW      0       ;high word of size
DIRNTRY ENDS

        SUBTTL  DATA AREA & INITIALIZATION
        PAGE
SDIR    SEGMENT PUBLIC 'CODE'
        ASSUME  CS:SDIR,DS:SDIR,ES:SDIR
        ORG     100H
MAIN    PROC    FAR
        JMP     STARTS

DIRLNK  DW      DIRBUF  ;ptr to next opening in DIRBUF
C1LNK   DW      0       ;ptr to row 1, column 1
C2LNK   DW      0       ;ptr to row 1, column 2
NBRFILS DW      0       ;# of files or detail lines
SRTFLG  DB      0       ;if = 0 then sort else no sort
CLSFLG      DB      0       ;if = 0 then clear screen
EXTFLG      DB      0       ;if <> 0 then sort by ext
SIZFLG      DB      0       ;if <> 0 then sort by size
DTEFLG      DB      0       ;if <> 0 then sort by date/time
PSEFLG      DB      0       ;if <> 0 then pause if screen full
LPERSCR EQU 25      ;Lines per screen
LINCNT      DB      LPERSCR-4 ;Number of lines left
PSEMSG      DB      'Strike a key when ready . . . $'

HDNG1       DB      'Capital PC Software Exchange /AEPXSDN/ 2.2' ;   JYF
    DB      'DRIVE '
HDRVE       DB      '@:    Date '
D_MM        DW      '00'            ;Month
    DB      '/'
D_DD        DW      '00'            ;Day
    DB      '/'
D_YY        DW      '00'            ;Year
    DB      '  Time '
T_HH        DW      '00'            ;Hours
    DB      ':'
T_MM        DW      '00'            ;Minutes
    DB      CR,LF
CRLF    DB      CR,LF,'$'
HDNG2   DB      'FILESPEC.EXT  BYTES-  --LAST CHANGE--$'
        DB      8 DUP(' ')
SPACES  DB      '$'
HDNG3   DB      ' File(s)',CR,LF,'$'

        SUBTTL  DISK TRANSFER AREA & FREE SPACE ENTRY DEFS
        PAGE

XFCB    DB      -1,7 DUP(0),11 DUP('?'),25 DUP(0)
ATTRIB  EQU     XFCB+6          ;file attribute
DRVNBR  EQU     ATTRIB+1        ;drive # (1=A, 2=B, etc.)

DTA     DB      40 DUP(0)       ;Disk Transfer Area used
FILNAME EQU     DTA+8           ;by SRCHDIR for the
FILTIME EQU     DTA+30          ;directory search.
FILSIZE EQU     DTA+36

FREESPC DW      0               ;Free space entry.
        DB      '*FREE SPACE*',4 DUP(0)
LOSIZE  DW      0               ;of free space
HISIZE  DW      0               ;of free space

        SUBTTL  MAIN PROGRAM SECTION
        PAGE
STARTS:
        PUSH    DS              ;Set up the
        XOR     AX,AX           ; stack for a
        PUSH    AX              ; return to DOS.
        CALL    GETARGS         ;Process arguments
        CALL    SRCHDIR         ;Search directory
        CMP     SRTFLG,0        ;Check if any sort
        JZ      A1              ; option selected.
        CALL    LNKDIRB         ;Leave in original
        JMP     SHORT A2        ; directory order.
A1:     CALL    SRTDIRB         ;Sort by major key
A2:     CALL    GETFREE         ;Get free space
        CALL    SPLTLST         ;Set up for 2 columns
        CALL    PRTHDNG         ;Print headings
        CALL    PRTDRVR         ;Print detail lines
        CALL    PRTNFLS         ;Print # of files
        RET                     ;Return to DOS
MAIN    ENDP

        SUBTTL  GETARGS - PROCESS ARGUMENTS
        PAGE
GETARGS PROC    NEAR
        MOV     SI,PARAM_B      ;point to cmd buffer
        MOV     DI,OFFSET DRVNBR ;point to FCB
        MOV     AL, 1111B       ;Select parse options
        DOSCALL @PARSEF         ;Parse filename
        CMP     BYTE PTR [DI],0 ;If <> 0 then
        JNZ     B1              ; not default drive
        DOSCALL @GETDSK         ;AL <- default disk
        INC     AL              ;Increment drive #
        STOSB                   ;Save drive #
B1:     MOV     SI,PARAM_L      ;SI <- ptr cmd length
        MOV     CH,0
        MOV     CL,[SI]         ;CL <- # chars in cmd
        JCXZ    B10
B2:     INC     SI              ;Point to next char
        CMP     BYTE PTR [SI],'/'
        JNZ     B8              ;If not a slash
        MOV     AL,[SI+1]       ;AL <- option letter
        AND     AL,0DFH         ;Force to upper-case
        CMP     AL,'A'          ;Hidden & system files?
        JNZ     B3              ;Nope, try next one.
        MOV     BYTE PTR ATTRIB,2+6  ;Hidden & system
B3:     CMP     AL,'E'          ;Without screen erase?
        JNZ     B4              ;Nope, try next one.
        MOV     CLSFLG,AL
B4:     CMP     AL,'S'          ;Sort by size?
        JNZ     B5              ;Nope, try next one.
        MOV     SIZFLG,AL
B5:     CMP     AL,'D'          ;Sort by date/time?
        JNZ     B6              ;Nope, try next one.
        MOV     DTEFLG,AL
B6:     CMP     AL,'X'          ;Sort by extension?
        JNZ     B7              ;Nope, try next one.
        MOV     EXTFLG,AL
B7:     CMP     AL,'N'          ;Original order?
        JNZ     B8              ;Nope, try next one.
        MOV     SRTFLG,AL
B8:     CMP     AL,'P'          ;Pause when screen full?
        JNZ     B9              ;Nope, try next one.
        MOV     PSEFLG,AL
B9:     LOOP    B2              ;Test for another param.
B10:    RET
GETARGS ENDP

        SUBTTL  SRCHDIR - SEARCH DIRECTORY
        PAGE
SRCHDIR PROC    NEAR
        DOSCALL @SETDTA,DTA     ;Set DTA for dir. search
        DOSCALL @SRCH1,XFCB     ;First call to search dir.
C1:     OR      AL,AL
        JNZ     C2              ;Not found, quit looking.
        MOV     BX,DIRLNK       ;BX <- base of DIRBUF
        LEA     DI,[BX].NAM
        MOV     SI,OFFSET FILNAME
        MOV     CX,SIZE NAM
        CLD
        REPZ    MOVSB           ;Move filename to DIRBUF
        MOV     BYTE PTR [DI],'.' ; Store a period
        INC     DI
        MOV     CX,SIZE EXT
        REPZ    MOVSB           ;Move ext to DIRBUF
        MOV     SI,OFFSET FILTIME
        MOVSW                   ;Move time to DIRBUF
        MOVSW                   ;Move date to DIRBUF
        MOV     SI,OFFSET FILSIZE
        MOVSW                   ;Move size to DIRBUF
        MOVSW
        ADD     BX,SIZE DIRNTRY ;Point to next entry
        MOV     DIRLNK,BX       ;Save ptr
        INC     NBRFILS         ;Increment file count
        DOSCALL @SRCH2,XFCB     ;Search for next file
        JMP     C1              ;Loop for next one
C2:     RET
SRCHDIR ENDP

        SUBTTL  SRTDIRB - SORTS ENTRIES IN DIRBUF
        PAGE
SRTDIRB PROC    NEAR    ;Sorts directory entries in DIRBUF
        MOV     DI,OFFSET DIRBUF ;Point to DIRBUF
D1:     CMP     DI,DIRLNK       ;Are there anymore?
        JNC     D8              ;NO, exit
        MOV     SI,OFFSET C1LNK ;Start with column 1 ptr
D2:     MOV     BX,SI
        MOV     SI,[BX]         ;SI<-ptr to next entry
        OR      SI,SI
        JZ      D7              ;if link=0
        MOV     AX,SI
        MOV     DX,DI
        XOR     CL,CL           ;CL <- 0
        CMP     CL,SIZFLG
        JNZ     D5              ;If sort by size
        CMP     CL,DTEFLG
        JNZ     D4              ;If sort by date/time
        CMP     CL,EXTFLG
        JNZ     D3              ;If sort by ext
        LEA     SI,[SI].NAM
        LEA     DI,[DI].NAM
        MOV     CX,1+SIZE NAM+SIZE EXT  ;# of bytes
        JMP     SHORT D6
D3:     LEA     SI,[SI].EXT     ;Sort by extension
        LEA     DI,[DI].EXT
        MOV     CX,SIZE EXT     ;# of bytes
        JMP     SHORT D6
D4:     LEA     SI,[SI].DTE     ;Sort by date/time
        LEA     DI,[DI].DTE
        MOV     CX,2            ;# of words
        STD
        REPZ    CMPSW
        MOV     DI,DX
        MOV     SI,AX
        JBE     D2
        JMP     SHORT D7
D5:     LEA     SI,[SI].SZH     ;Sort by size
        LEA     DI,[DI].SZH
        MOV     CX,2            ;# of words
        STD
        REPZ    CMPSW
        MOV     DI,DX
        MOV     SI,AX
        JBE     D2
        JMP     SHORT D7
D6:     CLD                     ;Sort by name.ext
        REPZ    CMPSB
        MOV     DI,DX
        MOV     SI,AX
        JBE     D2
D7:     MOV     [DI],SI
        MOV     [BX],DI
        ADD     DI,SIZE DIRNTRY ;Point to next entry
        JMP     D1
D8:     RET
SRTDIRB ENDP

        SUBTTL
        PAGE
; LNKDIRB - LINKS ENTRIES IN DIRBUF

LNKDIRB PROC    NEAR            ;LINK ENTRIES IN DIRBUF
        MOV     DI,OFFSET DIRBUF
        MOV     C1LNK,DI       ;Point to 1st entry
        MOV     CX,NBRFILS      ;Set loop counter
        DEC     CX
LNK1:   MOV     BX,DI
        ADD     DI,SIZE DIRNTRY ;Offset to next entry
        MOV     [BX],DI         ;Store ptr
        LOOP    LNK1            ;Link next entry
        MOV     [DI],CX         ;Last ptr <- null
        RET
LNKDIRB ENDP

; SPLTLST - SPLITS LINKED LIST IN HALF

SPLTLST PROC    NEAR
        MOV     CX,NBRFILS      ;Get # of entries
        SAR     CX,1            ; and divide by 2
        JZ      F2              ;if NBRFILS < 2
        ADC     CL,0            ;Account for odd #
        MOV     BX,OFFSET C1LNK
F1:     MOV     BX,[BX]         ;Chain thru list to
        LOOP    F1              ; last row of column 1.
        MOV     AX,[BX]         ;Get ptr to 1st row of col 2
        MOV     C2LNK,AX        ; C2LNK <- R1,C2 ptr
        MOV     [BX],CX         ;Last row of col 1 <- null
F2:     RET
SPLTLST ENDP

        SUBTTL  GETFREE - GET DISK FREE SPACE
    PAGE
GETFREE PROC        NEAR            ;cluster = allocation unit
    MOV     DL,DRVNBR       ;Get drive #
    PUSH    DS              ;Save DS
    DOSCALL @GETVER         ;get DOS version number                    JYF
    CMP     AL,2            ;is this version 2.0 or higher?            JYF
    JGE     E4              ;yes                                       JYF
                            ;no                                        JYF
    DOSCALL @FATAD2         ;Get FAT info from DOS
    MOV     AH,0            ;AL = sector size
    XCHG    CX,DX           ;Sector size times the
    MUL     DX              ; # sectors/cluster
    PUSH    AX              ;Save cluster size
    XOR     AX,AX           ;Unused clusters = 0
    MOV     SI,2            ;Skip first 3 clusters
E1: MOV     DI,SI           ;DI <- cluster #
    SHR     DI,1            ;Divide cluster number
    ADD     DI,SI           ; by 1.5
    MOV     DI,[BX+DI]      ;Fetch from FAT
    TEST    SI,1            ;Test if even or odd
    JZ      E2              ;If even then skip
    SHR     DI,1            ; else if odd
    SHR     DI,1            ;  right justify the
    SHR     DI,1            ;  cluster number.
    SHR     DI,1
E2: AND     DI,0FFFH        ;Mask the low 12 bits
    JNZ     E3              ;If not 0 then skip, else
    INC     AX              ; increment counter.
E3: INC     SI              ;Point to next cluster
    LOOP    E1              ; and go check it.
    POP     CX              ;Get cluster size, times
    MUL     CX              ;  # of free clusters
    JMP     E5              ;skip processing for DOS 2.0                JYF
E4:                         ;processing for DOS 2.00                    JYF
    DOSCALL @DSKFSP         ;get disk free space                        JYF
    MUL     BX              ;AX (sectors/clustor) * BX (free clustors)  JYF
    MOV     DX,AX           ;                                           JYF
    MUL     CX              ;AX * CX (bytes/clustor)                    JYF
E5:                         ;                                           JYF
    POP     DS              ;Restore DS
    MOV     LOSIZE,AX       ;Save the 32 bit
    MOV     HISIZE,DX       ; binary free space
    MOV     BX,C1LNK        ;Insert FREESPC in
    MOV     DI,OFFSET FREESPC ;first position
    MOV     [DI],BX         ; of linked list of
    MOV     C1LNK,DI        ; directory entries.
    INC     NBRFILS         ;Bump # of entries
    RET
GETFREE ENDP

    SUBTTL  PRTHDNG - PRINT HEADINGS
    PAGE
PRTHDNG PROC        NEAR
        MOV     AL,CLSFLG
        OR      AL,AL
        JNZ     G1              ;If not erase screen
        SUB     CX,CX
        MOV     DX,24*256+79    ;row=24 col=79
        MOV     BH,7            ;Video mode
        MOV     AX,0600H
        INT     10H             ;BIOS video call
        SUB     DX,DX
        MOV     AH,2            ;Clear screen
        MOV     BH,0
        INT     10H             ;BIOS video call
G1:     MOV     AL,DRVNBR       ;Get drive #
        ADD     HDRVE,AL        ;Convert to ascii
        DOSCALL @GETDTE ; CX<-year, DH<-month, DL<-day
        MOV     AL,DH
        AAM
        XCHG    AL,AH
        OR      D_MM,AX         ;Fold into month
        MOV     AL,DL
        AAM
        XCHG    AL,AH
        OR      D_DD,AX         ;Fold into day
        MOV     AX,CX
        SUB     AX,1900
        AAM
        XCHG    AL,AH
        OR      D_YY,AX         ;Fold into year
        DOSCALL @GETTME ; CH<-hours, CL<-minutes
        MOV     AL,CH           ;AL<-binary hours
        AAM                     ;Convert AL to two
        XCHG    AL,AH           ; BCD digits in AX.
        OR      T_HH,AX         ;Fold into hours
        MOV     AL,CL           ;AL<-binary minutes
        AAM                     ;Convert AL to two
        XCHG    AL,AH           ; BCD digits in AX.
        OR      T_MM,AX         ;Fold into minutes
        DOSCALL @STROUT,HDNG1   ;Print main heading
        DOSCALL @STROUT,HDNG2   ;Print column 1 heading
        CMP     WORD PTR C2LNK,0
        JZ      G2              ;If not 2 columns
        DOSCALL @STROUT,SPACES-5 ;Print 5 spaces
        DOSCALL @STROUT,HDNG2   ;Print column 2 heading
G2:     DOSCALL @STROUT,CRLF    ;Start a new line
        RET
PRTHDNG ENDP

        SUBTTL  PRINT DETAIL LINES
        PAGE
PRTDRVR PROC    NEAR            ;Driver routine
        MOV     BX,C1LNK
        OR      BX,BX           ;more to print?
        JZ      H2              ; no, return
        MOV     AX,[BX]
        MOV     C1LNK,AX
        CALL    PRTDTL          ;print column one
        MOV     BX,C2LNK
        OR      BX,BX
        JZ      H1              ;If no column 2 entry
        DOSCALL @STROUT,SPACES-5 ;print 5 spaces
        MOV     AX,[BX]
        MOV     C2LNK,AX
        CALL    PRTDTL          ;print column two
H1:     DOSCALL @STROUT,CRLF
        CMP     PSEFLG,0        ;Check for pause option
        JZ      PRTDRVR         ;Nope, continue
        DEC     LINCNT          ;Decrement line counter
        JNZ     PRTDRVR         ;If page not full?
        MOV     LINCNT,LPERSCR-2 ;Reset to # lines/screen
        DOSCALL @STROUT,PSEMSG  ;Display pause message.
        MOV     AL,@KEYIN       ;Specify input function
        DOSCALL @CKEYIN         ;Wait for key press
        DOSCALL @STROUT,CRLF    ;Set to new line
        JMP     PRTDRVR         ;Go do the next line
H2:     RET
PRTDRVR ENDP

PRTDTL  PROC    NEAR    ;Prints file.ext, size, date & time
        MOV     CX,1+SIZE NAM+SIZE EXT
        SUB     DI,DI           ;DI <- 0
I1:     DOSCALL @CHROUT,[BX+DI].NAM
        INC     DI              ;point to next char.
        LOOP    I1              ;go do next char.
        PUSH    BX              ;save entry base
        MOV     SI,[BX].SZL     ;SI <- low size
        MOV     DI,[BX].SZH     ;DI <- high size
        CALL    PRINTDD         ;Print size
        POP     BX              ;restore entry base
        DOSCALL @STROUT,SPACES-2 ;print 2 spaces
        MOV     AX,[BX].DTE     ;AX <- packed date
        CALL    PRTDTE
        DOSCALL @STROUT,SPACES-2 ;print 2 spaces
        MOV     AX,[BX].TME     ;AX <- packed time
        CALL    PRTTME
        RET
PRTDTL  ENDP

        SUBTTL  PRINTDD - PRINT A DOUBLE WORD IN DI:SI
        PAGE
PRINTDD PROC    NEAR    ;Prints a 32 bit integer in DI:SI
        XOR     AX,AX           ;Zero out the
        MOV     BX,AX           ; working
        MOV     BP,AX           ; registers.
        MOV     CX,32           ;# bits of precision
J1:     SHL     SI,1
        RCL     DI,1
        XCHG    BP,AX
        CALL    J6
        XCHG    BP,AX
        XCHG    BX,AX
        CALL    J6
        XCHG    BX,AX
        ADC     AL,0
        LOOP    J1
        MOV     CX,1710H        ;5904 ?
        MOV     AX,BX
        CALL    J2
        MOV     AX,BP
J2:     PUSH    AX
        MOV     DL,AH
        CALL    J3
        POP     DX
J3:     MOV     DH,DL
        SHR     DL,1            ;Move high
        SHR     DL,1            ; nibble to
        SHR     DL,1            ; the low
        SHR     DL,1            ; position.
        CALL    J4
        MOV     DL,DH
J4:     AND     DL,0FH          ;Mask low nibble
        JZ      J5              ;If not zero
        MOV     CL,0
J5:     DEC     CH
        AND     CL,CH
        OR      DL,'0'          ;Fold in ASCII zero
        SUB     DL,CL
        DOSCALL @CHROUT         ;Print next digit
        RET                     ;Exit to caller
PRINTDD ENDP

J6      PROC    NEAR
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        RET
J6      ENDP

        SUBTTL  PRINT DATE, TIME & # FILES ROUTINES
        PAGE
PRTDTE  PROC    NEAR    ;Print packed date in AX as MM/DD/YY
        OR      AX,AX
        JNZ     K1              ;If date <> 0
        DOSCALL @STROUT,SPACES-8 ;Print 8 spaces
        RET
K1:     PUSH    AX
        AND     AX,MASK P_MO    ;Mask the month,
        MOV     CL,P_MO         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        DOSCALL @CHROUT,'/'
        POP     AX
        PUSH    AX
        AND     AX,MASK P_DY    ;Mask the day &
        CALL    PRTBCD          ; print it.
        DOSCALL @CHROUT,'/'
        POP     AX
        AND     AX,MASK P_YR    ;Mask the year,
        MOV     CL,P_YR         ; set shift count,
        SHR     AX,CL           ; right justify,
        ADD     AX,80           ; add in year bias, &
                                ; print it.
PRTBCD: AAM                     ;Convert AL to BCD
        OR      AX,'00'         ;Convert to ASCII
        PUSH    AX
        DOSCALL @CHROUT,AH      ;High order digit
        POP     AX
        DOSCALL @CHROUT,AL      ;Low order digit
        RET
PRTDTE  ENDP

PRTTME  PROC    NEAR    ;Print packed time in AX as HH:MM
        OR      AX,AX
        JNZ     L1
        DOSCALL @STROUT,SPACES-5 ;Print 5 spaces
        RET
L1:     PUSH    AX
        AND     AX,MASK P_HR    ;Mask the hours,
        MOV     CL,P_HR         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        DOSCALL @CHROUT,':'
        POP     AX
        AND     AX,MASK P_MI    ;Mask the minutes,
        MOV     CL,P_MI         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        RET
PRTTME  ENDP

PRTNFLS PROC    NEAR    ;print number of files
        MOV     SI,NBRFILS      ;get # of files
        DEC     SI              ;-1 for free space
        XOR     DI,DI           ;zero high order
        CALL    PRINTDD         ;Print # of files
        DOSCALL @STROUT,HDNG3
        RET
PRTNFLS ENDP
        EVEN
DIRBUF  DIRNTRY <>      ;Buffer for directory entries
SDIR    ENDS
        END     MAIN
```
{% endraw %}

## VDISK.ASM

{% raw %}
```
; This is the DOS 2.0 ELECTRONIC DISK from the example in the DOS 2.0
; manual. It is now set for 180K of space. Look for the ======> 2 locations
; to change the size.
;
; To include the drive into your system, edit a file called CONFIG.SYS. It
; does not exist on the system supplied by IBM. Create a new file, and type
; in   DEVICE=VDISK.COM
;  and save the file  (must be standard ASCII fornat!).
; make sure you copy VDISK.COM to your boot disk.
; When you boot, the number of disk drives will be determined from the
; switch setting and the ELECTRONIC DISK will be made the next drive letter.
;
; For example, if you have two floppies, the RAM DISK will be Drive C.
;
;
; Assemble this will MASM and link with LINK pgm.
; You must then use the EXE2BIN command,  type   EXE2BIN VDISK VDISK
; after that, you must rename the new file  RENAME VDISK.BIN VDISK.COM
;
cseg    segment para public 'code'
status  macro   state,err,rc
        ifidn   <state>,<done>
        or      es:word ptr srh_sta_fld[bx],0100h
        endif
        ifidn   <state>,<busy>
        or      es:word ptr srh_sta_fld[bx],0200h
        endif
        ifidn   <err>,<error>
        or      es:word ptr srh_sta_fld[bx],1000h
        endif
        ifnb    <rc>
        or      es:word ptr srh_sta_fld[bx],rc
        endif
        endm
;
;
;
srh     equ     0
srh_len equ     13
srh_len_fld     equ     srh
srh_ucd_fld     equ     srh+1
srh_ccd_fld     equ     srh+2
srh_sta_fld     equ     srh+3
srh_res_fld     equ     srh+5
;
md      equ     srh+srh_len
md_len  equ     1
dta     equ     md+md_len
dta_len equ     4
count   equ     dta+dta_len
count_len       equ     2
ssn     equ     count+count_len
ssn_len equ     2
;
ret_byte        equ     md+md_len
;
bpba_ptr        equ     dta+dta_len
bpda_ptr_len    equ     4
;
units   equ     srh+srh_len
units_len       equ     1
br_addr_0       equ     units+units_len
br_addr_1       equ     br_addr_0+2
br_addr_len     equ     4
bpb_ptr_off     equ     br_addr_0+br_addr_len
bpb_ptr_seg     equ     bpb_ptr_off+2
;
vdsk    proc    far
        assume  cs:cseg,es:cseg,ds:cseg
begin:
start   equ     $
;
next_dev        dd      -1
attribute       dw      2000h
strategy        dw      dev_strategy
interrupt       dw      dev_int
dev_name        db      1
        db      7 dup(?)
;
rh_off  dw      ?
rh_seg  dw      ?;
bpb     equ     $
        dw      512
        db      1
        dw      1
        db      2
        dw      64
        dw      360
        db      0fch
        dw      2
;
bpb_ptr dw      bpb
;
; current virtual disk information
;
total   dw      ?
verify  db      0
start_sec       dw      0
vdisk_ptr       dw      0
user_dta        dd      ?
boot_rec        equ     $
        db      3 dup(0)
        db      'IBM  2.0'
        dw      512
        db      1
        dw      1
        db      2
        dw      64
        dw      360
        db      0fch
        dw      2
;
;
funtab  label   byte
        dw      init
        dw      media_check
        dw      build_bpb
        dw      ioctl_in
        dw      input
        dw      nd_input
        dw      in_stat
        dw      in_flush
        dw      output
        dw      out_verify
        dw      out_stat
        dw      out_flush
        dw      ioctl_out
;
;
in_save proc    near
        mov     ax,es:word ptr dta[bx]
        mov     cs:user_dta,ax
        mov     ax,es:word ptr dta+2[bx]
        mov     cs:user_dta+2,ax
        mov     ax,es:word ptr count[bx]
        xor     ah,ah
        mov     cs:total,ax
        ret
in_save endp
;
calc_addr       proc    near
        mov     ax,cs:start_sec
        mov     cx,20h
        mul     cx
        mov     dx,cs:vdisk_ptr
        add     dx,ax
        mov     ds,dx
        xor     si,si
        mov     ax,cs:total
        mov     cx,512
        mul     cx
        or      ax,ax
        jnz     move_it
        mov     ax,0ffffh
move_it:
        xchg    cx,ax
        ret
calc_addr       endp
;
sector_read proc near
        call    calc_addr
        mov     es,cs:user_dta+2
        mov     di,cs:user_dta
;
        mov     ax,di
        add     ax,cx
        jnc     read_copy
        mov     ax,0ffffh
        sub     ax,di
        mov     cx,ax
read_copy:
rep     movsb
        ret
sector_read endp
;
sector_write proc near
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        mov     ds,cs:user_dta+2
        mov     si,cs:user_dta
;
;
        mov     ax,si
        add     ax,cx
        jnc     write_copy
        mov     ax,0ffffh
        sub     ax,si
        mov     cx,ax
write_copy:
rep     movsb
        ret
sector_write endp
;
dev_strategy:
        mov     cs:rh_seg,es
        mov     cs:rh_off,bx
        ret
;
;
;
dev_int:
        cld
        push    ds
        push    es
        push    ax
        push    bx
        push    cx
        push    dx
        push    di
        push    si
;
;
        mov     al,es:[bx]+2
        rol     al,1
        lea     di,funtab
        xor     ah,ah
        add     di,ax
        jmp     word ptr[di]
;
;
init:
        push    cs
        pop     dx
        lea     ax,cs:vdisk
        mov     cl,4
        ror     ax,cl
        add     dx,ax
        mov     cs:vdisk_ptr,dx
        mov     ax,2d00h
        add     dx,ax
        mov     es:word ptr br_addr_0[bx],0
        mov     es:br_addr_1[bx],dx
        mov     es:byte ptr units[bx],1
        lea     dx,bpb_ptr
        mov     es:bpb_ptr_off[bx],dx
        mov     es:bpb_ptr_seg[bx],cs
        mov     es,cs:vdisk_ptr
        xor     di,di
        lea     si,boot_rec
        mov     cx,24
rep     movsb
        mov     cs:word ptr start_sec,1
        mov     cs:word ptr total,2
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        xor     al,al
rep     stosb
        mov     ds:byte ptr [si],0fch
        mov     ds:byte ptr 1[si],0ffh
        mov     ds:byte ptr 2[si],0ffh
        push    ds
        push    si
        mov     cs:word ptr start_sec,3
        mov     cs:word ptr total,2
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        pop     si
        pop     ds
rep     movsb
        mov     cs:word ptr start_sec,5
        mov     cs:word ptr total,4
        call    calc_addr
        xor     al,al
        push    ds
        pop     es
        xor     di,di
rep     stosb
        mov     es,cs:rh_seg
        mov     bx,cs:rh_off
        status  done,moerror,0
        jmp     exit
;
;
media_check:
        mov     es:byte ptr ret_byte[bx],1
        status  done,moerror,0
        jmp     exit
;
;
;
build_bpb:
        push    es
        push    bx
        mov     cs:word ptr start_sec,0
        mov     cs:word ptr total,1
        call    calc_addr
        push    cs
        pop     es
        lea     di,bpb
        add     si,11
        mov     cx,13
rep     movsb
        pop     bx
        pop     es
        lea     dx,bpb
        mov     es:bpba_ptr[bx],dx
        mov     es:bpba_ptr+2[bx],cs
        mov     es:dta[bx],dx
        mov     es:dta+2[bx],cs
        status  done,moerror,0
        jmp     exit
;
;
ioctl_in:
ioctl_out:
nd_input:
in_stat:
in_flush:
out_stat:
out_flush:
;
input:
        call    in_save
        mov     ax,es:word ptr ssn[bx]
        mov     cs:start_sec,ax
        mov     ax,es:word ptr count[bx]
        mov     cs:total,ax
        call    sector_read
        mov     bx,cs:rh_off
        mov     es,cs:rh_seg
        status  done,moerror,0
        jmp     exit
;
;
output:
        call    in_save
        mov     ax,es:word ptr ssn[bx]
        mov     cs:start_sec,ax
        mov     ax,es:word ptr count[bx]
        mov     cs:total,ax
        call    sector_write
        mov     bx,cs:rh_off
        mov     es,cs:rh_seg
        cmp     cs:byte ptr verify,0
        jz      no_verify
        mov     cs:byte ptr verify,0
        jmp     input
no_verify:
        status  done,moerror,0
        jmp     exit
out_verify:
        mov     cs:byte ptr verify,1
        jmp     output
;
;
exit:
        pop     si
        pop     di
        pop     dx
        pop     cx
        pop     bx
        pop     ax
        pop     es
        pop     ds
        ret
e_q_p:
 if ($-start) mod 16
 org ($-start)+16-(($-start) mod 16)
 endif
vdisk   equ     $
vdsk    endp
cseg    ends
        end     begin
```
{% endraw %}

## VDISK2.ASM

{% raw %}
```
; This is the DOS 2.0 ELECTRONIC DISK from the example in the DOS 2.0
; manual. It is now set for 180K of space. Look for the ======> 2 locations
; to change the size.
;
; To include the drive into your system, edit a file called CONFIG.SYS. It
; does not exist on the system supplied by IBM. Create a new file, and type
; in   DEVICE=VDISK.COM
;  and save the file  (must be standard ASCII fornat!).
; make sure you copy VDISK.COM to your boot disk.
; When you boot, the number of disk drives will be determined from the
; switch setting and the ELECTRONIC DISK will be made the next drive letter.
;
; For example, if you have two floppies, the RAM DISK will be Drive C.
;
;
; Assemble this will MASM and link with LINK pgm.
; You must then use the EXE2BIN command,  type   EXE2BIN VDISK VDISK
; after that, you must rename the new file  RENAME VDISK.BIN VDISK.COM
;
cseg    segment para public 'code'
status  macro   state,err,rc
        ifidn   <state>,<done>
        or      es:word ptr srh_sta_fld[bx],0100h
        endif
        ifidn   <state>,<busy>
        or      es:word ptr srh_sta_fld[bx],0200h
        endif
        ifidn   <err>,<error>
        or      es:word ptr srh_sta_fld[bx],1000h
        endif
        ifnb    <rc>
        or      es:word ptr srh_sta_fld[bx],rc
        endif
        endm
;
;
;
srh     equ     0
srh_len equ     13
srh_len_fld     equ     srh
srh_ucd_fld     equ     srh+1
srh_ccd_fld     equ     srh+2
srh_sta_fld     equ     srh+3
srh_res_fld     equ     srh+5
;
md      equ     srh+srh_len
md_len  equ     1
dta     equ     md+md_len
dta_len equ     4
count   equ     dta+dta_len
count_len       equ     2
ssn     equ     count+count_len
ssn_len equ     2
;
ret_byte        equ     md+md_len
;
bpba_ptr        equ     dta+dta_len
bpda_ptr_len    equ     4
;
units   equ     srh+srh_len
units_len       equ     1
br_addr_0       equ     units+units_len
br_addr_1       equ     br_addr_0+2
br_addr_len     equ     4
bpb_ptr_off     equ     br_addr_0+br_addr_len
bpb_ptr_seg     equ     bpb_ptr_off+2
;
vdsk    proc    far
        assume  cs:cseg,es:cseg,ds:cseg
begin:
start   equ     $
;
next_dev        dd      -1
attribute       dw      2000h
strategy        dw      dev_strategy
interrupt       dw      dev_int
dev_name        db      1
        db      7 dup(?)
;
rh_off  dw      ?
rh_seg  dw      ?;
bpb     equ     $
        dw      512
        db      2
        dw      1
        db      2
        dw      112
        dw      720
        db      0fdh
        dw      2
;
bpb_ptr dw      bpb
;
; current virtual disk information
;
total   dw      ?
verify  db      0
start_sec       dw      0
vdisk_ptr       dw      0
user_dta        dd      ?
boot_rec        equ     $
        db      3 dup(0)
        db      'IBM  2.0'
        dw      512
        db      2
        dw      1
        db      2
        dw      112
        dw      720
        db      0fdh
        dw      2
;
;
funtab  label   byte
        dw      init
        dw      media_check
        dw      build_bpb
        dw      ioctl_in
        dw      input
        dw      nd_input
        dw      in_stat
        dw      in_flush
        dw      output
        dw      out_verify
        dw      out_stat
        dw      out_flush
        dw      ioctl_out
;
;
in_save proc    near
        mov     ax,es:word ptr dta[bx]
        mov     cs:user_dta,ax
        mov     ax,es:word ptr dta+2[bx]
        mov     cs:user_dta+2,ax
        mov     ax,es:word ptr count[bx]
        xor     ah,ah
        mov     cs:total,ax
        ret
in_save endp
;
calc_addr       proc    near
        mov     ax,cs:start_sec
        mov     cx,20h
        mul     cx
        mov     dx,cs:vdisk_ptr
        add     dx,ax
        mov     ds,dx
        xor     si,si
        mov     ax,cs:total
        mov     cx,512
        mul     cx
        or      ax,ax
        jnz     move_it
        mov     ax,0ffffh
move_it:
        xchg    cx,ax
        ret
calc_addr       endp
;
sector_read proc near
        call    calc_addr
        mov     es,cs:user_dta+2
        mov     di,cs:user_dta
;
        mov     ax,di
        add     ax,cx
        jnc     read_copy
        mov     ax,0ffffh
        sub     ax,di
        mov     cx,ax
read_copy:
rep     movsb
        ret
sector_read endp
;
sector_write proc near
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        mov     ds,cs:user_dta+2
        mov     si,cs:user_dta
;
;
        mov     ax,si
        add     ax,cx
        jnc     write_copy
        mov     ax,0ffffh
        sub     ax,si
        mov     cx,ax
write_copy:
rep     movsb
        ret
sector_write endp
;
dev_strategy:
        mov     cs:rh_seg,es
        mov     cs:rh_off,bx
        ret
;
;
;
dev_int:
        cld
        push    ds
        push    es
        push    ax
        push    bx
        push    cx
        push    dx
        push    di
        push    si
;
;
        mov     al,es:[bx]+2
        rol     al,1
        lea     di,funtab
        xor     ah,ah
        add     di,ax
        jmp     word ptr[di]
;
;
init:
        push    cs
        pop     dx
        lea     ax,cs:vdisk
        mov     cl,4
        ror     ax,cl
        add     dx,ax
        mov     cs:vdisk_ptr,dx
        mov     ax,2d00h
        add     dx,ax
        mov     es:word ptr br_addr_0[bx],0
        mov     es:br_addr_1[bx],dx
        mov     es:byte ptr units[bx],1
        lea     dx,bpb_ptr
        mov     es:bpb_ptr_off[bx],dx
        mov     es:bpb_ptr_seg[bx],cs
        mov     es,cs:vdisk_ptr
        xor     di,di
        lea     si,boot_rec
        mov     cx,24
rep     movsb
        mov     cs:word ptr start_sec,1
        mov     cs:word ptr total,2
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        xor     al,al
rep     stosb
        mov     ds:byte ptr [si],0fch
        mov     ds:byte ptr 1[si],0ffh
        mov     ds:byte ptr 2[si],0ffh
        push    ds
        push    si
        mov     cs:word ptr start_sec,3
        mov     cs:word ptr total,2
        call    calc_addr
        push    ds
        pop     es
        mov     di,si
        pop     si
        pop     ds
rep     movsb
        mov     cs:word ptr start_sec,5
        mov     cs:word ptr total,4
        call    calc_addr
        xor     al,al
        push    ds
        pop     es
        xor     di,di
rep     stosb
        mov     es,cs:rh_seg
        mov     bx,cs:rh_off
        status  done,moerror,0
        jmp     exit
;
;
media_check:
        mov     es:byte ptr ret_byte[bx],1
        status  done,moerror,0
        jmp     exit
;
;
;
build_bpb:
        push    es
        push    bx
        mov     cs:word ptr start_sec,0
        mov     cs:word ptr total,1
        call    calc_addr
        push    cs
        pop     es
        lea     di,bpb
        add     si,11
        mov     cx,13
rep     movsb
        pop     bx
        pop     es
        lea     dx,bpb
        mov     es:bpba_ptr[bx],dx
        mov     es:bpba_ptr+2[bx],cs
        mov     es:dta[bx],dx
        mov     es:dta+2[bx],cs
        status  done,moerror,0
        jmp     exit
;
;
ioctl_in:
ioctl_out:
nd_input:
in_stat:
in_flush:
out_stat:
out_flush:
;
input:
        call    in_save
        mov     ax,es:word ptr ssn[bx]
        mov     cs:start_sec,ax
        mov     ax,es:word ptr count[bx]
        mov     cs:total,ax
        call    sector_read
        mov     bx,cs:rh_off
        mov     es,cs:rh_seg
        status  done,moerror,0
        jmp     exit
;
;
output:
        call    in_save
        mov     ax,es:word ptr ssn[bx]
        mov     cs:start_sec,ax
        mov     ax,es:word ptr count[bx]
        mov     cs:total,ax
        call    sector_write
        mov     bx,cs:rh_off
        mov     es,cs:rh_seg
        cmp     cs:byte ptr verify,0
        jz      no_verify
        mov     cs:byte ptr verify,0
        jmp     input
no_verify:
        status  done,moerror,0
        jmp     exit
out_verify:
        mov     cs:byte ptr verify,1
        jmp     output
;
;
exit:
        pop     si
        pop     di
        pop     dx
        pop     cx
        pop     bx
        pop     ax
        pop     es
        pop     ds
        ret
e_q_p:
 if ($-start) mod 16
 org ($-start)+16-(($-start) mod 16)
 endif
vdisk   equ     $
vdsk    endp
cseg    ends
        end     begin
```
{% endraw %}

## VOLSER.DOC

{% raw %}
```
                                               VOLSER
                                                   Command

            
    
    Purpose:    This command allows the user to alter/create
                volume labels.
            
    Format:     VOLSER [d:][/V]
            
    Type:       Internal        External
                                  ***
            
    Remarks:    This command is designed to be used 
                interactively. If a drive identifier is not
                specified, drive A: is assumed. The /V(ersion)
                parameter display the current version number.
                
    Example:    VOLSER

                This command line expects a disk to be labeled
                in drive A:
            
                VOLSER b:/v
            
                Displays the current version number at prompts
                the user for a volume label, and if one did not
                exist, creates it.
            
            C>VOLSER /V
            
            VOLSER Version X.XX (C)Copyright T A Davis, 1983
                
            Volume in drive B is not labeled
            
            Enter new label (11 chars) or ENTER ? AP783_
                
            Diskette label changed.

```
{% endraw %}

## XOFF.DOC

{% raw %}
```
PC-TALK XMODEM TRANSFER PROTOCOL  (XOFF.BAS)

THIS MOD WILL ALLOW DOWNLOAD OF FILES REQUIRING XMODEM PROTOCOL.

TO  USE THIS MOD,  BE SURE THAT IT IS SAVED IN ASCII.   THEN  YOU
SHOULD  LOAD PC-TALK.BAS THEN MERGE"B:XOFF.BAS" THIS MOD INTO THE
ORIGINAL PC-TALK CODE.  NOW SAVE THE NEW PROGRAM PREFERABLY USING
A  NEW NAME.   USING ANOTHER NAME WILL KEEP YOUR ORIGINAL PROGRAM
INTACT....JUST IN CASE....

UNDER  ACTUAL OPERATION YOUR COMMUNICATION PARAMETERS  SHOULD  BE
SET AS FOLLOWS:

BAUD RATE:     300
   PARITY:      N
DATA BITS:      8
STOP BITS:      1

YOU  WILL  HAVE  TO  SET  THESE  PARAMETERS  BEFORE  ESTABLISHING
COMMUNICATIONS,  SINCE  USING  ALT-P  TO DO SO  WILL  BREAK  YOUR
CONNECTION.   I  FOUND THAT CREATING ANOTHER PHONE NUMBER IN  THE
DIRECTORY  WITH THESE PARAMETERS FOR XMODEM TRANSFERS WORKS BEST.
HOWEVER,  RESPONSES  FROM THE HAYES SMARTMODEM  IE:  CONNECT,  NO
CARRIER WILL APPEAR AS GARBAGE.

AFTER KEYING ALT-R AND THE FILE NAME,  YOU WILL BE PRESENTED  THE
OPTION OF 1 (NO PROTOCOL) OR 2 (XMODEM).

I FOUND THIS MOD ON THE WASHINGTON D.C.  HOSTCOMM SYSTEM OPERATED
BY LARRY JORDAN.   THERE IS ONE CAUTION!   I UNDERSTAND THAT THIS
MOD  WAS WRITTEN FOR THE VERSION OF PC-TALK WHERE LINE 9999  ENDS
IN  /705.   USING  IT  WITH ANOTHER VERSION  MAY  CAUSE  UNWANTED
RESULTS.

ELMER HILL

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0034

     Volume in drive A has no label
     Directory of A:\

    BSLASH   KEY        86  11-10-83   5:38p
    CRC      TXT      1476   2-05-85   8:49a
    CRCK4    COM      1536  10-21-82   5:50p
    DEFCOPY  BAT       604   2-14-83   8:08a
    DEFKEY   COM      4421   5-01-83   1:21a
    DEFKEY   DOC     23207   5-02-83  11:11a
    DEFMAIL  EXE     30208   2-14-83   7:58a
    DIR                837   4-24-83   5:39p
    ORIGINAL KEY        86   2-01-83  12:16a
    PC3SC    DOC       399   4-24-83   9:45a
    PC3SC    MRG      1222   4-24-83   9:42a
    SDIR22   ASM     23429   4-17-83   6:09p
    SDIR22   COM      1312   4-17-83   6:24p
    VDISK    ASM      8724   4-03-83  11:12a
    VDISK    COM       672   4-05-83  12:46p
    VDISK2   ASM      8726   4-05-83   2:05p
    VDISK2   COM       672   4-05-83   2:08p
    VOLSER   COM      1152   3-23-83  12:01a
    VOLSER   DOC      1295   8-08-83   7:05p
    XOFF     DOC      1353   4-24-83   9:47a
    XOFF     MRG      4448   4-24-83   9:53a
           21 file(s)     115865 bytes
                           38912 bytes free
