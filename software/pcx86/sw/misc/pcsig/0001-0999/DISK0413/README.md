---
layout: page
title: "PC-SIG Diskette Library (Disk #413)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0413/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0413"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES #19"

    This disk is chock full of very useful sets of utility programs and
    systems that enhance and simplify the sometimes obscure MS/PC-DOS oper-
    ating system command structure. There are also utility programs that
    provide functions that are not available in 'plain vanilla' DOS.
    
    System Requirements: 64K memory and one disk drive (some programs
    require color graphics).
    
    How to Start: Type: FILENAME (press enter) to start a program. FILENAME
    is equal to the name of the program that you want to run, for
    example: to start the program 1DIR, type: 1DIR (press enter).
    
    Suggested Registration: Various amounts.
    
    File Descriptions:
    
    1DIR     COM  A sample of this 'Wonder' DOS shell program
    BWVID    ASM  Source code of the BWVID.COM program
    BWVID    COM  A program that stops a composite monitor from putting out
    colors, displaying shades of grey instead
    BWVID    DOC  Documentation of the BWVID.COM program
    CED      COM  Command EDitor (expanded DOSEDIT) - command line editing
    facility - many useful functions
    CED      DOC  Documentation for the CED.COM program
    COMMENT  DOC  Documentation for the COMMENT.SYS device driver
    COMMENT  SYS  An MS/PC-DOS 2.0(+) device driver whose function is simply
    to echo strings to the standard output device
    DW       COM  DiskWipe - totally erases a diskette to its virgin state
    DW       DOC  Documentation for DW.COM program
    FASTFMT  LBR  Fast format utility system - formats diskettes using both
    disk drives; has safety features; auto labelling sequence
    FASTFMT  TXT  Text file explaining how to unscramble FASTFMT.LBR into a
    usable system - the process is completely automated
    LU       EXE  A Library unscramble program - used by the FASTFMT and
    SCREN2 systems
    MEMINIT  EXE  Sets memory switches; speed up power on
    PARTNER  COM  RAM resident utility program which provides a set of disk
    and directory maintenance facilities available from inside
    running application programs at the touch of a key.
    Requires a color graphics adapter.
    PARTNER  DOC  Documentation for the PARTNER.COM program
    PC-STAT  COM  Diplays system status - both hardware & software config.
    PCPF     COM  A session manager - replaces bare DOS prompt with a
    friendly display panel
    PCPF     DOC  Documentation for the PCPF.COM program
    SCREN2   LBR  Screen Image Editor and utility; program DOS menus;
    graphics control
    SCREN2   TXT  Text file explaining how to unscramble SCREN2.LBR into a
    usable system - the process is completely automated
    SETBW40  COM  Used with BWVID.COM-does the same thing as DOS's MODE BW40
    SETBW80  COM  Used with BWVID.COM-does the same thing as DOS's MODE BW80
    UNSQ     COM  Unsqeeze utility.  Restores sqeezed files.  Used by SCREN2
    and FASTFMT systems above
    
    Please note: the POPALARM program, which is listed as being on this
    disk in the 4th edition of the PC-SIG Library Directory, has been
    withdrawn from the author.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BWVID.ASM

{% raw %}
```
;**************************************************************************
; The following is an Interrupt/Stay resident program that intercepts all
; BIOS video calls involving color and maps them to black and white calls.
; It will eliminate many of the fuzzy screens that arise from having
; a BW monitor hooked up to a color graphics board.
; THIS PROGRAM IS ONLY USEFUL IF YOU HAVE A BLACK AND WHITE HIGH RESOLUTION
; MONITOR CONNECTED TO YOUR GRAPHICS CARD.
;
; PROBLEMS THAT THIS ROUTINE SOLVES:
;    This program, when installed will remove all the fuzzy displays that
;    result when color display instructions are sent to BW monitor through
;    the BIOS system.  The VAST MAJORITY of available code does go through
;    BIOS so this will catch most of those problems.  This program works
;    as follows:
;    Force mode to 40x25 BW if BIOS call is for 40x25 color
;    Force mode to 80x25 BW if BIOS call is for 80x25 color
;    Force mode to 320x200 BW if BIOS call is for 320x200 color
;    Intercepts BIOS calls to write attributes and characters and changes
;       them in such a way that:
;       *  If forground is any color except black then it is forced to white
;       *  If background is any color except white then it is forced to black
;    Intercepts BIOS graphic calls to set the palette and changes them such that:
;       *  Background is always black
;       *  Forground is always white
;    The "Write Dot" and "Write Teletype" intercept functions both map fore-
;       ground to white, regardless of the intended color.
;
; PROBLEMS THAT THIS ROUTINE CREATES:
;    When information is transmitted to the view SOLELY through color
;    information, then that information is lost in this transformation.
;    (naturally!).  So if, for example, a game has a color bar that switches
;    from green to red to signify danger, that information will be lost.
;    This is because generally all forground colors are forced to white and
;    all background colors are forced to black.  This is not so much a
;    problem created by this program as it is a problem with Black and White
;    monitors not conveying as much information as Color Monitors.
;
; PROBLEMS THAT THIS ROUTINE DOES NOTHING ABOUT:
;    Any video calls that go straight to the hardware instead of going
;    through BIOS.  It is unfortunately the case that some VERY sophisticated
;    programs that really have snazzy graphics do go to the hardware directly
;    because of the speed benefits.
;
; After installing this program, all of the IBM Diagnostic tests look
; reasonable.
;
; When loaded this program uses 226 Decimal bytes of memory (It relocates
;    itself down into the unused portion of the Program Segment Prefix
;    to save memory)
;
; Written 5/02/85 by:
;    Scott W. Killen
;    P.O Box 27012
;    Austin Texas  78705
;    CIS ID: 76703,734
;
; This program is GiveAware!  The only payment I ask is your comments and
; bug reports.
;**************************************************************************
white      MACRO   reg            ; Force register to have white color code
           LOCAL   continue       ;    if not backgound.
           MOV     AH,0FCH        ; Get ready for masking high bits
           AND     AH,reg         ; Save High order bits
           AND     reg,03H        ; test for foreground or background
           JZ      continue       ; If background then we are finished
           OR      reg,03H        ; Force to white forground
continue:  OR      reg,AH         ; Recombine the two parts
           ENDM

CSEG    SEGMENT
        ASSUME CS:CSEG
        ORG 100H

CODESTART   EQU  5CH

BWVID  PROC NEAR

          JMP     initialize

entry_point:
test0:      CMP     AH,00H         ; Is this set mode?
            JNE     test11         ; If not then try other test
            CMP     AL, 03H        ; Check if Alpha Mode
            JG      test0a         ; Jump if not Alpha mode
            AND     AL, 02H        ; Force black and white display
            JMP     continue0      ;
test0a:     CMP     AL, 05H        ; Check for Medium Res Graphics
            JG      continue0      ; Jump if not Medium Res Graphics
            MOV     AL, 05H        ; Force black and white graphics
            EXTRN   DOS_RETURN:FAR
continue0:  JMP     DOS_RETURN     ; This code is modified in line!
                                   ;    Go to normal bios handling.

test11:     CMP     AH,0BH         ; Is this the Set Palatte instruction
            JNE     test9          ; if not, then continue
            CMP     BH, 0          ; Is background color being set?
            JNZ     test11a        ; if not go to set forground color set
            MOV     BL, 0          ; Background color is always black
            JMP     continue11
test11a:    MOV     BL,01H         ; Foreground color should include set with White
continue11: JMP     DOS_RETURN     ; This code is modified in line!

test9:      CMP     AH,09H         ; Is this a Write Character and Attribute
            JNE     test14         ; if not then try next test
            MOV     AH,BL          ; Use the AH register for a minute
            AND     BL,07H         ; Test for some foreground color
            JZ      test9a         ; Jump if foreground is black
            OR      AH,07H         ; Force foreground to white
test9a:     MOV     BL,AH          ; Restore BL to old value with appropriate foreground
            AND     BL,70H         ; Test for background color
            XOR     BL,70H         ; Is it white?
            JZ      test9b         ; Jump if background color is white
            AND     AH,8FH         ; Force background to black
test9b:     MOV     BL,AH          ; Ok set BL to corrected value
            MOV     AH,09H         ; Restore AH and return to BIOS
continue9:  JMP     DOS_RETURN     ; This code is modified in line!

test14:     CMP     AH,0EH         ; Test for write teletype routine
            JNE     test12         ; Ok, proceed
            WHITE   BL             ; Force forground (if any) to white
            MOV     AH,0EH         ; Restore function code
continue14: JMP     DOS_RETURN

test12:     CMP     AH,0CH         ; Is this the write dot routine?
            JNE     continue12     ; if not then continue
            WHITE   AL             ; Force the color (if any) to white
            MOV     AH,0CH         ; Now restore function code
continue12: JMP     DOS_RETURN

initialize:
        PUSH    DS                          ; Save DS for later use
        XOR     AX,AX                       ; Clear AX
        MOV     DS,AX                       ; Prepare to save original interrupt
        MOV     AX,40H
;
        MOV     SI,AX                       ; Source for INT 10h as provided for in the interrupt table
        MOV     DI, offset [continue0+1]    ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
        MOV     SI,AX                       ; Source for INT 10h as provided for in the interrupt table
        MOV     DI, offset [continue9+1]    ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
        MOV     SI,AX                       ; Source for INT 10h as provided for in the interrupt table
        MOV     DI, offset [continue11+1]   ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
        MOV     SI,AX                       ; Source for INT 10h as provided for in the interrupt table
        MOV     DI, offset [continue12+1]   ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
        MOV     SI,AX                       ; Source for INT 10h as provided for in the interrupt table
        MOV     DI, offset [continue14+1]   ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
;
        MOV     AX,CODESTART           ; Fill AX with starting point
        MOV     [SI-04H],AX            ; Move offset in line
        MOV     [SI-02H],CS            ; Move segment value in line
;
        POP     DS                     ; Restore the data segment
        MOV     CX, offset initialize  ; These lines relocate the interrupt
        SUB     CX, offset entry_point ;   handler down into the unused
        MOV     DI, CODESTART          ;   portion of the Program Segment
        MOV     SI, offset entry_point ;   Prefix (to save memory)!
 REP    MOVSB                          ;
;
        MOV     DX, offset initialize  ; Top of code address
        SUB     DX, offset entry_point ; Width of code
        ADD     DX, CODESTART          ; Bias by starting address
        INT     27H                    ; Terminate but stay resident

BWVID  ENDP
CSEG    ENDS
        END  BWVID
```
{% endraw %}

## BWVID.DOC

{% raw %}
```
BWVID - See the Assembler program for detailed documentation.
SETBW40 - When executed this sets system in BW 40x25 mode
SETBW80 - When executed this sets system in BW 80x25 mode

SETBW40 does the same thing as MODE BW40
SETBW80 does the same thing as MODE BW80

If you are using a Black and White Monitor on a color graphics card,
your AUTOEXEC.BAT file should include either SETBW40 or SETBW80 followed
by BWVID.  Example:
   SETBW80
   BWVID
   DATE
   TIME

If you make changes to the assembler file and then try to reassemble and
relink the program,  your link and load sequence should look like:
   MASM bwvid;
   LINK bwvid;
   EXE2BIN bwvid.exe bwvid.com

Please note that you should expect a Stack error and an unsatisfied external
reference at the link stage.  The stack is not needed and the unsatisfied
external is resolved at install time.

```
{% endraw %}

## CED.DOC

{% raw %}
```

















                              ced 1.0 User's Guide
                                Table of Contents

                    Purpose  . . . . . . . . . . . . . .    1
                    System Requirements  . . . . . . . .    1
                    Terminology  . . . . . . . . . . . .    1
                    Installation . . . . . . . . . . . .    2
                    Command line editor  . . . . . . . .    2
                    DOS command stack  . . . . . . . . .    3
                    Application command stack  . . . . .    5
                    Pcall function . . . . . . . . . . .    5
                    Synonyms . . . . . . . . . . . . . .    6
                    Command chaining . . . . . . . . . .    7
                    Command parameters . . . . . . . . .    9
                    Ignoring commands  . . . . . . . . .   10
                    Ignoring individual commands . . . .   11
                    Clearing ced objects . . . . . . . .   11
                    Configuration files  . . . . . . . .   12
                    Changing default buffer sizes  . . .   13
                    Status display . . . . . . . . . . .   15
                    Multiple definitions . . . . . . . .   15
                    User Commands  . . . . . . . . . . .   16
                         Subfunction 0: Enqueue  . . . .   16
                         Subfunction 1: Dequeue  . . . .   17
                         Return registers  . . . . . . .   17
                         Command processor . . . . . . .   17
                    Problem reporting  . . . . . . . . .   18
                    Copyright and Disclaimer . . . . . .   19
                    Appendix A: Command summary  . . . .   20
                    Appendix B: Order of Processing  . .   22
                    Appendix C: Limitations  . . . . . .   23
                    Appendix D: User Command Demo  . . .   24






                                                                          1
                          === ced 1.0 User's Guide ===

          Purpose
          -------

          Ced  (which  stands  for  Command  EDitor) provides the following
          functions at the DOS prompt, or from within  certain applications
          programs:

               -- Complete command line editing facility.

               -- Recall of previously issued commands for re-entry.

               -- Command  synonyms, which may include "chaining" of a
               series of commands.

               -- Parameterization of synonym commands.

               -- Recall of parameters for previously issued commands.

               -- User-settable buffer sizes for all functions.

               -- For  programmers, a  facility to  add new "resident"
               commands to the DOS shell.

          Ced  is  an  evolutionary  development of two earlier programs by
          another  author: DOSEDIT,   and  RETRIEVE   (an  IBM  copyrighted
          product).  It performs all of the functions of both programs, and
          has a number of enhancements.   Both  DOSEDIT  and  RETRIEVE were
          written by Jack Gersbach.


          System Requirements
          -------------------

          Ced  was  written  for  an  IBM  PC/XT/AT  or compatible machine.
          However, it  uses  no  hardware-specific  functions,  so  it will
          probably work with any MS-DOS machine.

          Ced requires DOS Version 2.00 or later.  It increases the size of
          resident DOS by about 14K bytes  after installation  with default
          buffer sizes (this can be reduced).


          Terminology
          -----------

          This document  will usually refer to "commands" or "DOS commands"
          as ced targets; you should take  this to  mean either  (a) actual
          DOS  commands,  or  (b)  input  to  ced-compatible  programs (for
          example, DEBUG commands).

          Key names are as follows:






                                                                          2
                          === ced 1.0 User's Guide ===

          <Up>           The up-arrow key on the numeric keypad.
          <Down>         The down-arrow key on the numeric keypad.
          <Left>         The left-arrow key on the numeric keypad.
          <Right>        The right-arrow key on the numeric keypad.
          <Backspace>    The large left-arrow key, next to NumLock.

          A carat (^) means  to press  the Ctrl  key in  conjunction with a
          named key;  for example,  <^End> means  "press and  hold the Ctrl
          key, then press <End>".

          Words in CAPS are ced keywords and must be typed exactly as shown
          (they need not be capitalized when you use them).

          Words in [brackets] are optional elements of a command.


          Installation
          ------------

          Installation  (in  its  simplest  form) is accomplished by typing
          "ced" at the DOS prompt, or including the statement "ced" in your
          AUTOEXEC.BAT file.  There are optional parameters when installing
          ced; these will be covered later.

          After ced is installed, everything will appear to  be normal, but
          you now  have many  new features when entering DOS commands.  The
          remainder of this document will describe these features.

          Ced is active either at the  DOS prompt,  or when  an application
          program requests  buffered keyboard  input from DOS (DOS function
          0AH).  There are a few such programs (DEBUG  and EDLIN  are two);
          but the main use of ced is at the DOS prompt.  

          Once  ced  has  been  installed,  the  command  "CED"  becomes an
          internal DOS command.  Thus, when you want to  issue ced commands
          (as  explained  below),  you  will  type "CED <command>", but the
          program file  (CED.COM)  need  NOT  be  available  on  disk.  Ced
          becomes fully  memory resident  and is  an extension to DOS after
          installation.  In particular,  this  means  that  you  should NOT
          include a  drive or  path in  issuing CED  commands after initial
          installation.  A command like "C:CED SYN d dir"  will reload ced,
          which is probably not what you intend.


          Command line editor
          -------------------

          Ced provides  a new  "editor" for  DOS commands.  The DOS editing
          keys (F3 for  copy-to-end-of-line,  for  example)  are  no longer
          available.  Instead, the following keys may be used:

          <Home>              Cursor to home position (first character).





                                                                          3
                          === ced 1.0 User's Guide ===


          <End>               Cursor   to   end  position  (following  last
                              character displayed).

          <Left>              Cursor  left  one  character  position.  This
                              does  not  erase  any  characters,  it simply
                              moves the cursor.

          <Right>             Cursor right one position.

          <^Left>             Cursor left one word.

          <^Right>            Cursor right one word.

          <Ins>               Enter/exit Insert  mode.  When  Insert is on,
                              new  characters   will  be  inserted  at  the
                              current cursor position.  When Insert is off,
                              new characters  will type  over the character
                              at the cursor position.

          <Del>               Delete the character at the cursor position.

          <Backspace>         Delete  the  character  to  the  left  of the
                              cursor position (destructive backspace).

          <^End>              Delete all characters from cursor position to
                              end of line.

          <Esc>               Cancel: erase all data and start over.

          When you have completed entering and  editing the  command, press
          <Enter> as usual to execute.


          DOS command stack
          -----------------

          Ced keeps  a record  of each command you enter.  You can retrieve
          and re-enter these commands by using the <Up> and <Down>  keys to
          display the  old commands, then pressing <Enter> when the desired
          command is displayed (the command can be edited, of course).

          You can visualize the  stored  data  as  a  "stack"  of commands.
          Ced  keeps  a  pointer  to  somewhere in this stack.  The pointer
          always points to a  location  "between"  two  commands;  when you
          press <Up>,  ced displays  the command  "above" the pointer, then
          moves the  pointer up  one command.   When you  press <Down>, ced
          displays the  command "below" the pointer, then moves the pointer
          down one command.

          For example, suppose you have entered  commands A,  B, and C. The
          stack will appear as follows:





                                                                          4
                          === ced 1.0 User's Guide ===


                              +-------------+
                              |      A      |
                              +-------------+
                              |      B      |
                              +-------------+
                              |      C      |
                              +-------------+  <-- pointer

          The  stack  is  circular  in  nature; thus, if the pointer points
          "below" the last command in the stack (as  it does  above), it is
          actually  between  the  last  command  (C)  and the first command
          (A).  In the situation above, pressing <Up> will  display command
          C and  leave the  pointer between  B and C.  Pressing <Down> will
          display command A, and leave the pointer between A and B.

          When you recall an old command  and re-enter  it without editing,
          the re-entered command is not added to the stack, and the pointer
          will drop one level.  Suppose, for  example, that  you press <Up>
          twice from  the position above (pointer below C): B is displayed,
          and the stack looks like this:


                              +-------------+
                              |      A      |
                              +-------------+ <-- pointer
                              |      B      |
                              +-------------+
                              |      C      |
                              +-------------+

          If you now press <Enter> (without editing the command), command B
          will be sent to DOS, and the pointer will drop to point between B
          and C.  From there, <Up> will  display B  again, and  <Down> will
          display  C.   Thus  you  can  "recycle"  a  series of commands by
          pressing <Up> until you see the first command, <Enter> to execute
          it, then  a series  of <Down><Enter>  sequences to re-execute the
          commands in the original order.

          If you retrieve an old command and edit it before  execution, the
          newly edited command is added to the bottom of the stack, and the
          pointer will point just below it.

          Ced will not stack any commands  of two  characters or  less (the
          theory  being  that  it's  easier  to retype than to go searching
          through the stack).

          This is one of those computer gizmos that's easier to use than it
          is to  explain.  Just  play with  <Up> and <Down>; you'll get the
          idea.






                                                                          5
                          === ced 1.0 User's Guide ===

          You can remove a command from  the  stack  by  displaying  it and
          pressing <PgDn>,  and you  can clear the entire stack by pressing
          <PgUp>.

          The actual number of commands which will be held in  the stack is
          a function  of the  length of  the commands  and the  size of the
          stack (which can be increased; see below for details).

          Application command stack
          -------------------------

          Ced actually keeps two  complete command  stacks: one is  for DOS
          commands, the  other for  commands entered into compatible appli-
          cations programs (DEBUG, et al).   Thus,  DOS  commands  will not
          appear in the command stack while in DEBUG, and vice versa.


          Pcall function
          --------------

          "Pcall"  stands  for  parameter  recall;  this is a second way to
          quickly  retrieve  old  commands.   Pcall  simply  remembers  old
          parameters to  specific commands.   For example, suppose you have
          an editor called "edit", and the last time  you executed  it, you
          used "edit c:\util\foo.doc".  If you now enter "edit" without any
          parameters, ced will assume that you want to  edit the  same file
          and will supply the "c:\util\foo.doc" for you.

          You could,  of course,  scroll back through the command buffer to
          find the old command, but it might take a while  to find  it (and
          the command might be missing if it was too long ago).

          Because  many  commands  are  best  used WITHOUT parameter recall
          (FORMAT and ERASE are good examples), ced will only use  pcall on
          commands that you specify.   To make a command "pcallable", type

               CED PCALL <command>

          at the  DOS prompt.   For example,  if you  want to make "edit" a
          pcall command, type

               CED PCALL edit

          (Remember that the ced diskette need not be available).

          If you wish to issue a  command for  which pcall  is enabled, but
          you do  not want  it to  have parameters,  add a  space after the
          command.  For example, suppose you have issued a  "CED PCALL dir"
          command  and  your  last  dir  was a "dir *.exe". If you now type
          "dir", ced will add the "*.exe"  automatically.  However,  if you
          type "dir  " (note  the space), ced will not add the "*.exe", and
          you'll get a full directory. 





                                                                          6
                          === ced 1.0 User's Guide ===


          You may also bypass  pcall  processing  through  the  use  of the
          ignore   character;   see   below,   under  "Ignoring  Individual
          Commands".


          Synonyms
          --------

          The synonym function allows  you to  define brief  "synonyms" for
          frequently used  commands.  For  example, suppose you invoke your
          communications package  by typing  "talk rbbs  /c63".  Ced allows
          you  to  abbreviate  this  to  a  shorter  command, say, "bb", by
          typing at the DOS prompt:

               CED SYN bb talk rbbs /c63

          The exact syntax is:

               CED SYN <synonym> <command>

          The <synonym> is the command abbreviation (which you will type at
          the DOS  prompt), and  <command> is  the word or phrase which ced
          will substitute when it  sees <synonym>.   The synonym  is always
          the first  word after  the keyword "syn", and <command> is always
          all of the remaining words.

          For example, "ced syn d dir"  allows you  to type  "d" instead of
          "dir".  You  may add  parameters: "d *.exe" becomes equivalent to
          "dir *.exe".

          Many  people  define  very  short  synonyms  for  frequently used
          commands:

               CED SYN d dir
               CED SYN e edit
               CED SYN g debug
               CED SYN l link
               CED SYN rbbs talk rbbs /c63
               CED SYN cc1 cc1 -bpe

          Note in  the last  example that  you can  use a  synonym which is
          identical to its associated phrase and simply use  it to automat-
          ically add parameters.

          Also  note  that  synonym  processing  takes  place  AFTER  pcall
          processing; thus if  you  use  a  command  synonym  and  wish the
          command to be "pcallable", use the synonym in the pcall command.
          For example:

               CED SYN e edit
               CED PCALL e    (not PCALL edit)





                                                                          7
                          === ced 1.0 User's Guide ===



          User program synonyms
          ---------------------

          Because ced  "knows" whether it is being used from the DOS prompt
          or from an application program such as DEBUG,  it is  possible to
          define separate  sets of  synonyms for  DOS commands and for user
          programs.  The syntax for a "user synonym" is

               CED USERSYN <synonym> <command>

          This is identical to the SYN command except  for the  new keyword
          USERSYN.  For  example, if  you need to frequently type the DEBUG
          command "d ds:1010 1200", you might use

               CED USERSYN d1 d es:1010 1200

          (Remember that DEBUG is  a ced-compatible  program; thus  you can
          type ced  commands at  the DEBUG  prompt.)  Then you could simply
          type "d1"  to  dump  memory  from  the  specified  address.  Note
          that   a "d1"  USERSYN is  separate from  a "d1"  SYN; at the DOS
          prompt you'd get  the  SYN,  in  DEBUG  or  EDLIN  you'd  get the
          USERSYN.


          Command chaining
          ----------------

          The command  chaining feature  allows you  to place more than one
          command in a SYN or USERSYN.  These commands  would be  passed to
          DOS or  to the user program one at a time, as input is requested.
          Suppose, for example, that  in order  to run  your communications
          package, you always type:

               cd \talk
               talk cis /c63
               cd \

          You could put this sequence into one synonym by typing

               CED SYN cis cd \talk^talk cis /c63^cd \

          The ^ character serves as a command separator.  When you type CIS
          at the prompt, ced will output  everything up  to the  ^ (in this
          case, "cd  \talk") and  then simulate  an <Enter>.  The next time
          DOS requests input, it  will get  "talk cis  /c63<Enter>", and so
          on.

          Note  that  ced  will  not  pass  DOS-chained  commands  to  user
          programs; thus, in






                                                                          8
                          === ced 1.0 User's Guide ===

               CED SYN bug cd \util^debug^cd \

          DEBUG would not see  the trailing  "cd \",  which would  still be
          held up until you return to the DOS prompt.

          The first  of the chained commands (e.g., the first 'cd \' above)
          cannot itself be a synonym, but the remaining commands can.  That
          is, if 'f' and 'g' are synonyms, the command

               CED SYN h dir^f^g

          will work as you expect.  Be careful, though.  A command like

               CED syn f dir^f

          will put the computer into a loop from which there is no retreat.

          If one  of the chained commands is a synonym which itself defines
          more chain commands, the unused portions of the  first chain will
          be lost.  If, for example, you have defined:

               CED SYN f a^b^c
               CED SYN b x^y

          and you  then execute "f", the commands actually executed will be
          a, x, and y.  Command c will be not be executed.

          You may alter the chain character (command separator) via the ced
          command

               CED CHAINCH <char>

          So, for  example, "CED  CHAINCH &"  would replace ^ with & as the
          command separator.  The chain character can,  but probably should
          not,  be  a  control  character.   If  you are typing the command
          directly into ced, you can just type the control character:

               CED CHAINCH <Ctrl-A>

          However, if you are setting the chain character via configuration
          files  (below),  it  may  not  be possible to type in the control
          character directly.  For this  reason,  you  can  also  specify a
          control  character  by  typing  the  carat  (^) and a letter key.
          Thus, if you  wanted  to  use  ^Y  as  the  chain  character, you
          would use '^' and 'Y':

               CED CHAINCH ^Y

          Certain  control  characters  should  not  be  used  as  for this
          purpose, because they are used for other functions  by DOS; among
          these  are  ^C  (cancel),  ^G  (bell),  ^H (backspace), ^I (tab),





                                                                          9
                          === ced 1.0 User's Guide ===

          ^L (linefeed), ^M (carriage  return),  ^P  (printer  on),  and ^S
          (stop).

          The use  of control  characters as  described has more meaningful
          use in  setting  the  "ignore"  and  "status  request" characters
          (below).


          Command parameters
          ------------------

          This section describes how synonyms and command chaining interact
          with command line parameters.

          The simplest case is a single word synonym like

               CED SYN d dir

          which specifies no special parameter handling.  In this case, any
          command line  parameters are  simply tacked  on after the synonym
          substitution: "d *.exe /w" becomes "dir *.exe /w".

          If the synonym itself contains parameters:

               CED SYN dw dir /w

          a similar situation holds.  For example, "dw *.asm"  becomes "dir
          /w *.asm".   You might  think of these simple nonchained synonyms
          as just substitutions: when ced sees the synonym, it  will simply
          substitute the  replacement text, leaving the rest of the command
          line alone.

          This simple substitution, however,  means that  your command line
          parameters must  always be  the last  text of the synonym.  There
          would be no way, for example,  to  define  a  synonym  that would
          obtain a  directory of  <name>.exe, where <name> is some filename
          entered on the command line and  ".exe" is  part of  the synonym.
          That is,  it would  not be  possible to define a synonym "d" such
          that the command

               d foo

          would result in a "dir foo.exe" command.

          However, ced does provide a way to substitute parameters into the
          middle of a synonym.  Ced  recognizes  the  "%n"  dummy parameter
          format used  by DOS batch files.  %1 represents the first command
          line parameter, %2 is the second, and so on, up to %9.   Refer to
          your DOS documentation (batch file section) if this is unclear.

          Thus, a synonym which would provide the example function is:






                                                                         10
                          === ced 1.0 User's Guide ===

               CED SYN d dir %1.exe

          When  "d   foo"  is  executed,  "foo"  (the  first  command  line
          parameter) is substituted for  the %1,  resulting in  the desired
          command "dir foo.exe".

          When   a   synonym   contains  chained  commands,  all  parameter
          substitution is  performed  at  one  time,  before  the  chain is
          started.  Thus,

               CED SYN f a %1^b %2^c %3

          when executed "f one two three" will result in three commands:

               a one
               b two
               c three

          If a  chain-command synonym contains no dummy parameters (no %'s)
          the command line parameters will be  appended to  the end  of the
          chain, i.e., as parameters to the last command.  So,

               CED SYN f a^b^c

          when executed "f foo" will result in the three commands:

               a
               b
               c foo


          Ignoring commands
          -----------------

          There  may  be  certain  commands  that  you  do  not want ced to
          process; for  example,  you  might  not  want  the  ERASE command
          stacked.   To  instruct  ced  to  ignore  a  command, use the ced
          command

               CED IGNORE <command>

          For example:

               CED IGNORE erase

          When a command is set to  IGNORE, ced  will not  place it  in the
          command stack, check for aliases, or perform any pcall processing
          (even if you have set PCALL for that command).







                                                                         11
                          === ced 1.0 User's Guide ===

          Ignoring individual commands
          ----------------------------

          You may  sometimes want  ced to  ignore processing  of a specific
          command.  For  example, you  may have  "dir" defined as a synonym
          for an external program  which will  display a  sorted directory,
          but on  occasion want  to display  a standard  DOS directory.  To
          force ced to suspend all processing of a command, precede it with
          ^N (Ctrl-N).   If the  first character  of input  is ^N, ced will
          not stack the command,  check for  aliases, or  perform any pcall
          processing (just  as if it were IGNOREd).  The Ctrl-N, of course,
          is not passed to DOS or to the application program.  For example:

               ^Ndir

          If you find ^N inconvenient, you can change  the ignore character
          to a different character by using the IGNORECH command:

               CED IGNORECH ^T
               CED IGNORECH !

          See the  section on command chaining (above) for more information
          on how to enter control characters in this command.


          Clearing ced objects
          --------------------

          From time to time  it may  be useful  to clear  a ced "object": a
          pcall  command,  a  synonym,  or  an  ignore  command.  The CLEAR
          command allows you to do this.  The formal syntax is:

               CED CLEAR <function> [[FROM] <name>]

          This looks more complex  than it  is.  The  <function> is  one of
          SYN, USERSYN,  PCALL, and  IGNORE.  Since  the [[FROM] <name>] is
          optional, the simplest form of the  clear command  is exemplified
          by:

               CED CLEAR SYN

          which will clear all synonyms.  Similarly,

               CED CLEAR PCALL

          clears all pcall commands.

          You  may  clear  an  individual  item by including its name.  For
          example:

               CED CLEAR USERSYN foo






                                                                         12
                          === ced 1.0 User's Guide ===

          clears  the  user  synonym  "foo",  leaving  all  others synonyms
          undisturbed.

          Finally, you  can clear  all items  FROM a specified item through
          the end of the list with the FROM option.  For example:

               CED CLEAR USERSYN FROM foo

          would clear the user synonym "foo" and all  synonyms listed after
          "foo".  This  command is particularly useful if you have loaded a
          temporary set of synonyms for some special purpose.  Suppose, for
          example, that  you have a set of synonyms already in memory, then
          you load an additional set to be used temporarily.  When  you are
          done, the command

               CED CLEAR SYN FROM foo

          would delete  all of  the "temporary" synonyms, assuming that the
          first of these was "foo".

          Note  that  SYN  and  USERSYN  objects  share  storage.   Thus, a
          CLEAR SYN FROM <item> or CLEAR USERSYN FROM <item> will clear all
          synonyms (of either type) FROM the named item.   Similarly, CLEAR
          SYN and CLEAR USERSYN are functionally identical: all synonyms of
          either type will be cleared.


          Configuration files
          -------------------

          Obviously it would be inconvenient to  have  to  type  in  all of
          these commands  every time  you use  your computer.  However, you
          may put any ced  command into  a special  ced configuration file,
          and have them loaded all at once.

          The configuration  file is  simply an ASCII text file (created by
          your text editor, EDLIN, or word  processor in  nondocument mode)
          which  contains  a  series  of  ced commands.  Just leave out the
          keyword "CED", but include the rest of the command:

               Rem       Remarks are OK if preceded by "REM"
               Rem
               Rem       Set chain char to '&'
               Chainch &
               Rem       Set ignore char to '!'
               Ignorech !
               Rem       Set a few synonyms
               Syn d dir
               Syn e edit
               Syn cis cd \talk & talk cis & cd \
               Usersyn dd d ds:1017 L40
               Rem       And a few pcall commands





                                                                         13
                          === ced 1.0 User's Guide ===

               Pcall e
               Pcall debug
               Rem       Ignore all DEL, ERASE, and FORMAT commands
               Ignore erase
               Ignore format
               Ignore del

          To read in your file, use the CED -f command line switch:

               CED -F<filename>

          For example, if your  configuration file  is call  CED.CFG, you'd
          use

               CED -Fced.cfg

          If you  load new configuration files during one computer session,
          the PCALL, SYN, USERSYN, and IGNORE  commands are  added to those
          already  stored,  without  regard  to  duplication (see "Multiple
          definitions" below).

          Note that if you  have several  commands that  you want  to enter
          into ced (but don't have them in a file), you can use

               CED -Fcon

          (which specifies  CON: as the  configuration file  name) and then
          type a series of ced commands  from the  keyboard.  Type  ^Z when
          you are done.


          Changing default buffer sizes
          -----------------------------

          Ced maintains  six separate  internal buffers  (regions of memory
          where data is stored).  Each buffer is initially set to a default
          size.  The buffers and their default sizes are:

               1. DOS command stack (2048 bytes)
               2. Application program command stack (1024)
               3. Synonym list (2048)
               4. Pcall list (1024)
               5. Ignore command list (1024)
               6. User command list (described below) (1024)

          You may  make these buffers larger or smaller by including a list
          of buffer sizes the FIRST time  you  load  ced  during  a session
          (i.e., when  you turn  on the  computer, or  after a Ctrl-Alt-Del
          reboot).  Use a -B switch as the FIRST ced command:

               CED -Bn1,n2,n3,n4,n5,n6






                                                                         14
                          === ced 1.0 User's Guide ===

          where n1 is the desired size for buffer 1 (DOS command stack), n2
          is the  size for  buffer 2 (App program command stack), etc.  You
          need not specify all  sizes, but  if you  skip one  or more sizes
          (telling ced  to use the default) you must include the separating
          commas.  Examples:

               CED -B1000,2000,3000,4000,5000,6000  (Set all sizes)
               CED -B1000,,3000  (Set sizes 1 and 3)
               CED -B,,,,,6000 (Set size 6 only)

          You cannot set any individual size less than  128 bytes,  and the
          total of all sizes must be not exceed 52K (53248) bytes.

          Remember that  the -B  command must be the FIRST command used the
          FIRST time you run ced during each session.  It is  not valid any
          other time.   If you  wish to  set sizes and read a configuration
          file during autoexec, the syntax would be:

               CED -Bn1,n2,n3,n4,n5,n6 -F<filename>

          For your general information, here is what is  stored in  each of
          the buffers, and what happens when it fills:

          1. DOS  Command  stack: all  non-ignored  commands  of  3 or more
          characters entered at the  DOS  prompt.   The  command  is stored
          before alias  and pcall processing.  Each stored command requires
          one byte  more than  the length  of the  command. When the buffer
          fills, the oldest command is deleted.

          2. Application  program  command  stack: same  as  above,  except
          commands entered  at  participating  program  prompts  are stored
          here.

          3. Synonym  list: the  full  list  of synonyms (both DOS and user
          synonyms) plus their meanings.  Each entry  requires the combined
          length  of  the  synonym  and  its  associated command plus three
          bytes.  When the synonym list  fills,  no  new  synonyms  will be
          accepted unless a CLEAR is performed first.

          4. Pcall command  list: the list  of all  pcall commands plus the
          most recent parameter list for  each.   Each  entry  requires the
          combined  length  of  the  command  and its parameters (including
          leading separators) plus two bytes.  If the buffer is full when a
          "CED PCALL" command is entered, the new pcall command will not be
          accepted.  If the buffer is  full  when  a  pcallable  command is
          entered, its parameters will not be remembered.

          5. Ignore command  list: the list  of all  IGNORE commands.  Each
          entry requires the command length plus  one byte.   If the buffer
          is  full  when  a  new  "CED  IGNORE" command is entered, the new
          command will be rejected.






                                                                         15
                          === ced 1.0 User's Guide ===

          6. User command list: the list  of  all  user-installed commands.
          Requires the  command length  plus six bytes of storage for each.
          New commands will be rejected if the buffer is full.   Ced itself
          uses ten bytes of this buffer.


          Status display
          --------------

          You may  obtain a  partial display  of ced status any time CED is
          active (i.e., at  the  DOS  prompt  or  in  a  compatible program
          awaiting input).  Do this by hitting ^T (Ctrl-T).  Ced will first
          display  all  synonyms  (preceded  by  [S]  for  SYN  or  [U] for
          USERSYN), then  a list  of all buffers.  For each buffer ced will
          show the total bytes allocated and the number of bytes free.

          When the display is  complete,  ced  will  redisplay  any partial
          input that you typed before ^T, and you may continue data entry.

          If  ^T  is  not  convenient,  you  can  change the status request
          character by using the ced command

               CED STATCH <character>

          as in  "CED STATCH  ^A" or  "CED STATCH  %".  See  the section on
          command chaining for more information on using control characters
          in this command.


          Multiple definitions
          --------------------

          It is possible to duplicate a  definition within  one of  the ced
          lists (SYN, USERSYN, PCALL, IGNORE).  For example, you may create
          more  than  one  synonym  for  "d".   In  the  event  of multiple
          definitions, ced will always use the newest.

          Suppose,  for  example,  that  you  have "d" defined as a SYN for
          "dir".  If you subsequently issue the command "CED  SYN d debug",
          you will have two synonyms for "d".  When you enter "d", ced will
          use the latest definition: "debug".  If you  then issue  a "CLEAR
          SYN d",  ced will  again use  the latest definition and clear the
          "debug"  synonym,  at  which  point  the  "dir"  definition again
          becomes effective.

          Multiple definitions  have no  real meaning for PCALL and IGNORE,
          but they are supported nonetheless.







                                                                         16
                          === ced 1.0 User's Guide ===

          User Commands
          -------------

          This section describes how  to add  new resident  commands to DOS
          using  ced.   It  is  an  advanced  topic,  and  is  intended for
          programmers only; you don't need to read this section to use ced.

          Ced provides a means to enqueue new DOS commands, that is, to add
          internal commands to DOS.  Once enqueued, ced will call a routine
          that you specify whenever the  user  types  the  new  command (at
          the DOS prompt, or in a "participating" program).

          Access  to  ced  service  is  provided  via a bogus DOS function,
          0FFH.  This function behaves as a  normal DOS  function; that is,
          you must set up the registers as needed by the call, place a 0FFH
          in register AH, and execute an INT 21H.  The two subfunctions are
          described  below;  the  subfunction  code  is  placed in register
          AL.


          SUBFUNCTION 0: ENQUEUE

          This subfunction allows you  to  enqueue  a  new  command.  Input
          register use is as follows:

               AH = 0FFH (ced service)

               AL = 0 (ENQUEUE)

               BL = MODE
                    This is  a bit  flag which  tells ced when to call your
                    routine.  You have the option of  being called  if your
                    command is  typed at  the DOS prompt, at a user program
                    prompt, or both.  Bit 0, if set, specifies that you are
                    to  be  called  at  the  DOS  prompt;  Bit  1,  if set,
                    specifies that you are to be  called at  a user program
                    prompt.

               DS:SI = command name
                    This is  a dword pointer to your command (i.e., you are
                    to be called when the  user  types  this  string).  The
                    command   must   be   from  one  to  eight  characters,
                    terminated by  a  carriage  return.   Ced  is  not case
                    sensitive.

               ES:DI = command processor entry point
                    This is  a dword  pointer to the routine which is to be
                    executed when the new command is entered.







                                                                         17
                          === ced 1.0 User's Guide ===

          SUBFUNCTION 1: DEQUEUE

          This subfunction allows you  to dequeue  a user  command; after a
          command has  been dequeued,  ced will  no longer  call you if the
          user types your command.  Input register use is:

               AH = 0FFH (ced service)

               AL = 1 (DEQUEUE)

               DS:SI = command name
                    A dword pointer  to  the  name  of  the  command  to be
                    dequeued (i.e.,  the same  DS:SI as was used to enqueue
                    the command).


          RETURN REGISTERS

          On return from ced service (DOS function 0FFH), all registers are
          preserved except  AX.  The  carry flag, if set, indicates that an
          error occurred; AX has the error code, which will be one of:

               1:   Invalid  function.   At  present,  only  subfunctions 0
                    and 1 are supported.  Subfunction 2 is reserved.

               2:   Command not found (DEQUEUE only).

               8:   Insufficient memory (ENQUEUE only).

               13:  Invalid data. (ENQUEUE  only; bad MODE flag, or invalid
                    command length).

          NOTE: In current versions of DOS,  AH  returns  0FFH  if function
          0FFH  is  requested  and  ced  is not installed.  You may use the
          reserved subfunction (2), at  your  own  risk,  to  test  for ced
          installation.  If  AH returns  any value  other than 0FFH, ced is
          probably installed.


          COMMAND PROCESSOR

          Your command processor is entered via a far call from ced.  Entry
          registers are as follows:

               BL = MODE
                    This is  the same  bit flag  as is  used in the ENQUEUE
                    subfunction.  You may use it to test "where you are".

               CL = MAXLEN
                    This is the maximum  allowed length  of the  user input
                    string (i.e.,  the value  of byte 0 of the DOS function
                    0AH input buffer) less one.





                                                                         18
                          === ced 1.0 User's Guide ===


               DS:DX = Command tail pointer
                    This is a dword pointer  to  the  command  tail  of the
                    user's input.   For example, if your command is "hello"
                    and the user types "hello sam", DS:DX will point to the
                    space after "hello".

               DS:DI = Command pointer
                    This is a dword pointer to the first byte of the actual
                    user input.

          Note that DS:DI and DS:DX point to buffer  space within  ced, not
          to  the  actual  DOS  function  0AH  input  buffer.  There are no
          length attribute bytes preceding the buffer; DS:SI points  to the
          first byte of the buffer, not the third.  Ced will copy the final
          buffer, after all processing, to the actual input buffer.

          You may manipulate the buffer to your heart's content.  It is 255
          characters long,  but ced  will truncate  the string if necessary
          (if the final command is longer than the  maximum allowed  by the
          function 0AH  request).  In particular, note two things about the
          ced buffer:

               1.   The string MUST  be  terminated  by  a  carriage return
                    ASCII 13).

               2.   If  you  null  out  the  buffer  (by putting a carriage
                    return in relative  byte  0)  ced  will  return  a null
                    string to  DOS or  the user  program.  This is probably
                    what you will want to do.

          There are few restrictions on what you can do within your service
          routine.   You  may  request  other  DOS service (but you may NOT
          request more buffered input via function 0AH!!), and you need not
          preserve  any  registers  except  SS:SP.   The stack in effect on
          entry will have about 200 bytes free; switch to a larger internal
          stack if necessary.

          Return to ced via a far RET.

          Appendix D  contains a  sample MASM  program to enqueue a trivial
          command.


          Problem reporting
          -----------------

          If you find any problems with  ced,  please  report  them  to me,
          preferably  at   CompuServe  ID   76703,2002.   Before  reporting
          problems, however, please take the following steps:

               1. Reread the documentation!





                                                                         19
                          === ced 1.0 User's Guide ===


               2. Install ced in a  "clean" environment,  i.e., without any
               other   resident   utilities.    Temporarily   rename   your
               AUTOEXEC.BAT and CONFIG.SYS files  to  other  names; reboot,
               reinstall ced,  and test.  If it works correctly, there is a
               conflict with some other  program.  Isolate  the conflict by
               reinstalling your  other programs  one by one and by varying
               the load  order.  If  you locate  the conflict,  let me know
               about  it.   I  cannot  guarantee  that the conflict will be
               resolved, but I will make an attempt when time permits.

               It would not be  necessary to  rename CONFIG.SYS  if it only
               contains   FILE,   BUFFER,   COUNTRY,   FCBS,  and  ANSI.SYS
               statements.

          If the problem persists, please report the problem  as accurately
          and  completely  as  possible.   Include  the  ced version number
          (obtained  by  the  command  CED  VER),  and  a  listing  of your
          CONFIG.SYS and  AUTOEXEC.BAT files  if you  think that might have
          some bearing.


          Copyright and Disclaimer
          ------------------------
          Ced is hereby placed  in the  public domain.   Both ced  and this
          documentation are,  however, copyrighted  by the  author.  Ced is
          intended for your private, noncommercial use only.  You  may make
          copies of  the ced  program and  documentation files for your own
          use, and you  may  copy  the  files  for  others.   You  may not,
          however, charge  for such  copies, or  in any  other way sell the
          program or  otherwise  attempt  to  make  money  from  it  or any
          modified version of it.

          However, recognized user's groups are hereby authorized to charge
          an amount not more than $6.00 for materials, postage, etc.

          I do not warrant that the documentation is accurate, or  that the
          program  operates  as  designed.   I  will  not be liable for any
          damages of any kind sustained through the use of the program.  By
          using the program, you agree to this.

          IBM is  a registered trademark of International Business Machines
          Corporation.  MS-DOS is a trademark of Microsoft Corporation.

          Both ced and this document are:

                                Copyright (c) 1985 by
                               Christopher J. Dunford   
                              10057-2 Windstream Drive
                              Columbia, Maryland 21044
                              CompuServe ID 76703,2002





                                                                         20
                          === ced 1.0 User's Guide ===

                             Appendix A: Command summary
                             ---------------------------
          The following is a complete summary  of all  ced commands.  These
          commands may  be included  in a  ced configuration file (with the
          exception of  -F and  -B), or  they may  be typed  in directly by
          prefixing them with "CED ".

          -Bn1,n2,n3,n4,n5,n6      Sets  the  sizes  of  the  six  internal
                                   buffers.  Valid  ONLY  as  first command
                                   when   installing   ced  after  boot  or
                                   reboot.

          -F<Filename>             Loads a  ced configuration  file.  Not a
                                   valid command within a config file.

          SYN <synonym> <command>  Defines  a  synonym.   The first word is
                                   the  synonym,  all  remaining  words are
                                   substituted for the synonym.

          USERSYN <synonym>  <command>   Defines a user synonym.  Identical
                                   to  SYN,  except  that  the  synonym  is
                                   available  within  user  programs rather
                                   than at the DOS prompt.

          PCALL <command>          Defines  a  command  subject   to  pcall
                                   processing.

          IGNORE <command>         Defines  a  command  to  be ignored--ced
                                   will not perform any  processing on this
                                   command at all.

          CHAINCH <char>           Defines the  command chaining character,
                                   which is the character  used to separate
                                   commands in a multi-command synonym.

          IGNORECH <char>          Defines  the  keyboard-ignore character;
                                   when  this  character  is  typed  as the
                                   first  character  of keyboard input, ced
                                   will perform  no  further  processing on
                                   it.

          STATCH <char>            Defines  the  status  request character.
                                   When you  type this  character while ced
                                   is active, ced will display its status.

          CLEAR <function> [[FROM] <name>]   Clears all or part of a
                                   list of  ced objects.  <function> is one
                                   of  SYN,  USERSYN,  PCALL,   or  IGNORE.
                                   Without  arguments,  clears  all  of the
                                   specified list.  With  a  <name>, clears
                                   that  item  only.   With  a FROM <name>,





                                                                         21
                          === ced 1.0 User's Guide ===

                                   clears  that  item  and  all  subsequent
                                   items. 

          VER                      Display ced version number and copyright
                                   notice.


          Commands may be abbreviated as follows:

               USERSYN        USYN
               PCALL          PC       
               IGNORE         IG
               CHAINCH        CC
               IGNORECH       IC   
               STATCH         SC
               CLEAR          CL

          Note,  however,  that  the   arguments  to   CLEAR  may   NOT  be
          abbreviated; CLEAR USYN or CLEAR PC are not valid.







                                                                         22
                          === ced 1.0 User's Guide ===

                           Appendix B: Order of Processing
                           -------------------------------

          Ced performs its basic processing in the following order:

          1. Obtain input.   If there  is a chained command pending, obtain
          input from the chain; otherwise from keyboard.

          2. Check for "ignore".  If command is  an "ignore"  command or if
          the first character of input is the ignore character, suspend all
          further processing.

          3. Stack the command  (if  longer  than  two  characters)  in the
          appropriate command stack.

          4. Perform  pcall  (parameter  recall)  processing  and store the
          result  for  pcall  processing  next  time  the  same  command is
          entered.

          5. Perform synonym processing and parameter substitution.  If the
          synonym  contains  chained  commands,  set  up  for  chaining  of
          subsequent input requests.

          6. Examine the resulting command and see if it's a user-installed
          command or a CED  command.   If  so,  call  CED  or  user command
          processor.






                                                                         23
                          === ced 1.0 User's Guide ===

                               Appendix C: Limitations
                               -----------------------

          There is  a limit  of 255 characters on any input line from a ced
          configuration file.  DOS will limit you to 127  characters at the
          DOS prompt.

          For  PCALL,  SYN,  USERSYN,  and  IGNORE  to  be effective, their
          commands must begin in the first  column  of  input  and  must be
          separated from any parameters by one of the following characters:

               ; , < > | = + [ ] / <Tab> <Space>

          Thus, if  you have  "cd" defined for pcall processing, "cd\" will
          not work correctly.  However, "cd \"  will be  OK.  Similarly, if
          you have  a synonym "d" for "debug", the command "c:\util\d" will
          not work, nor will " d" (note leading space).

          Programs  which  allow  you  to  execute  DOS  commands  or other
          programs as  subtasks generally  do not  use DOS  function 0AH to
          input the name of  the  subtask  or  command;  thus,  ced  is not
          active, and synonyms are usually not effective.





                                                                         24
                          === ced 1.0 User's Guide ===


                            Appendix D: User Command Demo
                            -----------------------------

          Comment *

               userdemo.com - demo of ced user command enqueuing

               Assembly: (M)ASM userdemo;
                         LINK userdemo;   (ignore NO STACK message)
                         EXE2BIN userdemo userdemo.com

               Use:      Just type 'userdemo'.  You now have
                         a new DOS command, "hello"

               Author:   CJDunford
                         05/28/85

          *

          CED       equ 0FFH            ; Special "DOS" fn for CED service

          ENQUEUE   equ 0               ; Subfunction: enqueue
          DEQUEUE   equ 1               ; Subfunction: dequeue

          DOS       equ 1               ; Cmd to be active at DOS prompt
          USER      equ 2               ; Cmd to be active at user prompt

          CR        equ 13
          LF        equ 10

          code segment
          assume cs:code,ds:code
          org 100H
          main proc far
               jmp Install              ; Go to installation

          ; -----------------------------------------------------
          ; This is the command processor.  It will be called
          ; whenever the user types "hello" at the DOS prompt.
          ; The routine simply prints the string "Hi there, ace".
          ;
          ; On entry:
          ;    BL: mode flag
          ;       1 = at DOS prompt
          ;       2 = at user program prompt
          ;    CL: max length of input
          ;    DS:SI => user command
          ;    DS:DX => user command tail
          ;
          ; Remember to null out the user string so that
          ; it is not passed on to DOS, then exit via a far





                                                                         25
                          === ced 1.0 User's Guide ===

          ; return to ced.  Not necessary to preserve any
          ; registers.
          ; ------------------------------------------------------
          Hello proc far                ; Must be a far procedure
               mov byte ptr [si],CR     ; Null out the user's input

               mov ax,cs                ; Set up local addressing
               mov ds,ax

               mov dx,offset HiThere$   ; Display our message
               mov ah,9
               int 21H

               ret                      ; No need to restore any regs
          Hello endp

          HiThere$ db 'Hi there, ace',CR,LF,'$'   ; Message to be displayed


          ; -----------------------------------------------
          ; This is the installation routine.  It sets up
          ; the regs for a call to the ced command enqueing
          ; service, enqueues the command, and terminates,
          ; leaving the command service routine resident
          ; ------------------------------------------------
          Install:
               mov ah,CED               ; CED service request
               mov al,ENQUEUE           ; Enqueue a new command
               mov bl,DOS               ; To be active at DOS prompt
               mov si,offset Hello$     ; DS:SI => command ("Hello")
               mov di,offset Hello      ; ES:DI => service routine
               int 21H                  ; Enqueue new command
               jnc OK                   ; No carry, no error

               mov dx,offset Error$     ; Only 1 error possible here
               mov ah,9                 ; Print string
               int 21H
               int 20H                  ; Return to DOS

          OK:
               mov dx,offset Install    ; OK: terminate/resident
               int 27H
          main endp

          Hello$    db 'hello',CR        ; New command
          Error$    db 'ced user command list full',CR,LF,'$'

          code ends
          end main

```
{% endraw %}

## COMMENT.DOC

{% raw %}
```
                       DOCUMENTATION FOR COMMENT.SYS
                                05/19/85

COMMENT.SYS is an MSDOS 2.0(+) device driver whose function is simply to echo
a string to the standard output device.  The driver code is not actually
installed by dos, so no memory is wasted, and the driver can be referenced
in CONFIG.SYS as often as desired.

COMMENT.SYS is invoked by including a line like the following in your
CONFIG.SYS file:

DEVICE=COMMENT.SYS T\his is a \COMMENT.SYS \comment using '\\' escapes.

Since DOS converts all characters on the CONFIG.SYS line to upper-case,
it's necessary to use a special 'escape' character to preserve lower-case
input, and the backslash ('\') character was chosen for this purpose.
When COMMENT.SYS sees a single backslash character, it starts converting
characters to lower-case; the conversion continues until another single
backslash character is encountered.  To make an actual '\' character appear
in the output without toggling the lower-case conversion, just use two
backslash characters together ('\\').

As an illustration, the CONFIG.SYS line above would be echoed as follows:

This is a COMMENT.SYS comment using '\' escapes.

The maximum length of the input string is 255 characters.  The count starts
immediately after the 'DEVICE=' string, and includes '\' escape characters,
so the actual maximum length of the echoed string will be somewhat shorter.

------------------------------------------------------------------------------

COMMENT.SYS can be used to send ANSI graphics commands to the console
(assuming, of course, that ANSI.SYS has been installed by a previous
CONFIG.SYS line).  The following line, for instance (adapted from an example
in the DOS 3.0 Technical Reference Manual), would reassign the F10 key to a
DIR command followed by a carriage return:

DEVICE=COMMENT.SYS <ESC>[0;68;"DIR";13\p

The '<ESC>' refers to an ASCII 'ESC' character (27 decimal, 1B hex), which
can be entered using many text editors.  The '\' preceeding the 'p' is
necessary since the 'p' must remain in lower-case for the command to
work.

I'll leave other potential uses for COMMENT.SYS to your imagination.

------------------------------------------------------------------------------

COMMENT.SYS has been tested under PC-DOS 2.0, 2.1, and 3.0.  It seems free
of bugs or side-effects, but while I would like to be informed of any problems
you may encounter, I can't be responsible for any possible damage and/or
loss of data that may result from the use of COMMENT.SYS.

The program was written at the suggestion of Walter Kennamer (CompuServe
74025,514).

Skip Gilbrech
90 Lexington Ave. #10-G
New York, NY 10016
CompuServe 71445,534
please leave messages on PCS-131)

```
{% endraw %}

## DW.DOC

{% raw %}
```

                 DISKWIPE (DW.COM) PROGRAM INSTRUCTIONS


    To use DISKWIPE, type the following from the DOS prompt ( A> ).

    DISKWIPE [?:] [/B]

       ?: = The drive in which you will put the disk to be wiped.

       /B = If you wish to wipe both sides (preferable) enter this operand.
            The default is side 0 only. You will notice additional prompts
            when doing a two-sided wipe.

  WARNING: THIS PROCEDURE WILL TOTALLY ERASE THE DISK , INCLUDING FORMATTING.

    NOTE: DISKWIPE will work on an AT but only on the 320/360K disc drive.

```
{% endraw %}

## FASTFMT.TXT

{% raw %}
```
Fastfmt is provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use fastfmt you should:
  1) md\fastfmt             create a fastfmt subdirectory
  2) cd\fastfmt
  3) copy a:fastfmt.lbr     move in the fastfmt library
  4) lu a fastfmt.lbr       disperse the files in the fastfmt library
  5) type ff.doc            this file will tell you everything else
                            you need to know.
```
{% endraw %}

## FILES413.TXT

{% raw %}
```
Disk No  413
Program Title: DOS Utilities
PC-SIG version 1.2

    This disk is chock full of very useful sets of utility programs and
systems that enhance and simplify the sometimes obscure MS/PC-DOS oper-
ating system command structure. There are also utility programs that
provide functions that are not available in 'plain vanilla' DOS.

Usage: DOS Utilities

System Requirements: 64K memory and one disk drive (some programs require
color graphics).

How to Start: Type: FILENAME (press enter) to start a program. FILENAME is
equal to the name of the program that you want to run, for example: to
start the program 1DIR, type: 1DIR (press enter).

Suggested Registration: Various amounts.

File Descriptions:

1DIR     COM  A sample of this 'Wonder' DOS shell program
BWVID    ASM  Source code of the BWVID.COM program
BWVID    COM  A program that stops a composite monitor from putting out
              colors, displaying shades of grey instead
BWVID    DOC  Documentation of the BWVID.COM program
CED      COM  Command EDitor (expanded DOSEDIT) - command line editing
              facility - many useful functions
CED      DOC  Documentation for the CED.COM program
COMMENT  DOC  Documentation for the COMMENT.SYS device driver
COMMENT  SYS  An MS/PC-DOS 2.0(+) device driver whose function is simply
              to echo strings to the standard output device
DW       COM  DiskWipe - totally erases a diskette to its virgin state
DW       DOC  Documentation for DW.COM program
FASTFMT  LBR  Fast format utility system - formats diskettes using both
              disk drives; has safety features; auto labelling sequence
FASTFMT  TXT  Text file explaining how to unscramble FASTFMT.LBR into a
              usable system - the process is completely automated
LU       EXE  A Library unscramble program - used by the FASTFMT and
              SCREN2 systems
MEMINIT  EXE  Sets memory switches; speed up power on
PARTNER  COM  RAM resident utility program which provides a set of disk
              and directory maintenance facilities available from inside
              running application programs at the touch of a key.
              Requires a color graphics adapter.
PARTNER  DOC  Documentation for the PARTNER.COM program
PC-STAT  COM  Diplays system status - both hardware & software config.
PCPF     COM  A session manager - replaces bare DOS prompt with a
              friendly display panel
PCPF     DOC  Documentation for the PCPF.COM program
SCREN2   LBR  Screen Image Editor and utility; program DOS menus;
              graphics control
SCREN2   TXT  Text file explaining how to unscramble SCREN2.LBR into a
              usable system - the process is completely automated
SETBW40  COM  Used with BWVID.COM-does the same thing as DOS's MODE BW40
SETBW80  COM  Used with BWVID.COM-does the same thing as DOS's MODE BW80
UNSQ     COM  Unsqeeze utility.  Restores sqeezed files.  Used by SCREN2
              and FASTFMT systems above

Please note: the POPALARM program, which is listed as being on this disk in
the 4th edition of the PC-SIG Library Directory, has been withdrawn from
the author.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88 PC-SIG, Inc.

```
{% endraw %}

## PARTNER.DOC

{% raw %}
```
           ________________________________


             P A R T N E R    Version 1.1

           ________________________________



                   C o m p u C a m

                   45 Parklea Drive
                   Toronto, Ontario
                        Canada
                       M4G 2J7
                    (416)421-9430

              (evenings after 7:00 EDT)


PARTNER is distributed as a freeware program.  That is, you may use it,
copy it and distribute it.  You may not, however, sell it.  PARTNER, and
the original ideas behind it, remain the property of Jim Camelford and
CompuCam.  If you have found the program useful, we would appreciate a
donation of $15.00 us.  Please send us your personal cheque, a bank
draft or your VISA card number and card expiry date.

PARTNER's source code and documentation (in machine-readable form) are
available at a nominal cost to cover handling charges.  If you are
interested, please contact the author at the above address.  PARTNER
is written in TURBO (tm) Pascal.  You may wish to obtain the source code
if you want to see how it's done, modify the program's operation to add
features of your own or generate different versions that use less memory.

This version of Partner, (1.1), is available as FreeWare but the current
version (3.2) is available only as a commercial product directly from
CompuCam.  The total price of the package is $49.95 US + $3.00 S/H.  PC-Sig
users that have forwarded a $15.00 donation may acquire the package for
$34.95 + s/h.  Version 3.2 has many exciting new features, including:

    .  fixes to some bugs in this release - including some hang-up
       problems
    .  a ram-resident, ASCII file editor
    .  a ream-resident, file catalogging system
    .  ability to invoke DOS for commands from within most any application
    .  capability to interrupt graphics applications and properly restore
       their screens
    .  ability to 'un-load' Partner if you tire of having it ram-resident
    .  improved access to sub-directories
    .  double-protection to prevent accidentally erasing files
    .  2 diskettes of software, including object and full source code
    .  70-page user manual
    .  TIPS - Tehnical Information Points explaining how Partner is
       implemented, how to write ram-resident programs in Turbo Pascal
       and how to extend and modify Partner
    .  and because of the program's size, CompuCam's own program listing
       and cross-reference analysis tool is included free !


This on-line documentation, however, only describes release 1.1 of the
program.


CompuCam accepts phone orders with your VISA card (sorry, we are not setup
for either MasterCard or American Express).  Please leave your name,
address, phone number, VISA card number and your card's expiry date, and,
please mention PC-Sig when ordering.

Of course, we would be delighted to hear your comments and will attempt to
fix any reported bugs in either the documentation or the program.  English
isn't exactly free of glitches either!  Write us!

PARTNER is not, however, warranted in any way nor are any claims made as to
the suitability of the program for your application.


    PARTNER Copyright (c) 1985, 1986, 1987 James R. Camelford and CompuCam
   ________________________________________________________________________


PARTNER - What is It ?
======================
PARTNER is a useful utility program that resides permanently in your
system's memory yet is available at any time with the touch of a key.
It provides a set of useful diskette and directory maintenance facilities
that can enhance most programs running on your PC.

For example, it provides:

      o  multiple-window access to the directories on your diskettes or 
         hard disk;

      o  an ability to remove, copy and rename files;

      o  a technique to move files from one sub-directory to another on 
         the same volume without copying and removing;

      o  a capability for displaying (ie: typing) text files on your screen;

      o  reports of space usage for individual files and for the volume as 
         a whole;

What it Doesn't Do          
==================
Because PARTNER uses colour extensively, it requires a colour/graphics 
adapter.  In its conventional form, it requires about 52kb of permanent 
memory.  PARTNER could easily be modified to sense which type of display 
it's using and to use only monochrome.  It is not currently compatible 
with 40-column or graphics display modes.  It's been tested on true IBM PC's,
PC's with hard disks, AT's and the Advanced Colour/Graphics adapter and 
found to work well.

PARTNER works well with a variety of programs.  However, it is known to 
be incompatible with some.  A list and technical description is provided 
at the end of this document.

How you Start the Program          
=========================
You invoke PARTNER from the DOS command prompt using the following command.  
(The square brackets indicate optional parameters just like in the DOS 
manual.)

         PARTNER [/load]  [/nnn]

          /load    causes PARTNER to be permanently retained in memory as
                   an extension to DOS.  If you do not use the /load
                   option, then PARTNER runs as a utility program and
                   exits normally when you are done.  When PARTNER is run
                   as a utility, it waits for 5 seconds to display its
                   logo before allowing you to enter a command).

          /nnn     the scancode of the keystroke you want to use to invoke
                   PARTNER once it is loaded, either from the DOS command
                   prompt or from within a running program.  By default,
                   PARTNER uses shift-F9 (that is: 92).  You can set the
                   signalling keystroke to any convenient key.

PARTNER - How to Use it
=======================
PARTNER is pretty simple to use!  (Of course that may be construed as 
literary license on my part ... but the approach we will take for teaching 
you how to use it is by taking you through a step-by-step sequence ...)

Bring PARTNER up as a utility program first.  That is, just run it from 
the DOS command prompt using the command:

                        PARTNER

Do not specify any options.  PARTNER will display its logo, wait 5 seconds 
and then offer you a small window in the upper left corner of your screen.  
(Yes, you can change its shape and location but let's leave that until 
later ...)

PARTNER prompts you for a Directory Name.  Enter a directory name using 
the same syntax as you would for DOS' DIR command.  In this state, 
PARTNER understands drive letters, wildcard constructs using  * and ? 
and sub-directories  -- so use them if you like.  Alternatively, you can
simply strike the RETURN key (without typing anything) if you want a 
display of all filenames on the default directory on the default drive. 

PARTNER displays a list of filenames on the volume until either it fills 
the window (ie: runs out of space) or runs out of filenames.  At this point, 
it pauses and highlights the filename in the upper left corner of the 
window.  You can "operate" on this file using the features described below.

Now the fun starts, since now all the options are available to you ... and 
there are lots of them.  But first, look at the bottom line of the window.  
This is know as the Help line.  It lists some of the functions now 
available (eg: Remove, Rename, Change Directory ...).  Watch the help 
line from time to time as it will contain additional, explanatory 
information to assist you when entering a command.

The functions now available are briefly listed below; more detail follows 
later:

      Enter     Specify a different wildcard sequence, drive,
                filename or sub-directory

      F2        Remove this file

      F4        Copy this file somewhere

      F6        Rename this file

      F8        Change the default sub-directory for this window
                to something else

      F10       Display additional information about this file
                (ie: creation timestamp, file size, file attributes etc).

      F9        Display (ie: type) this file on the screen now

      F1, F3    Shrink or grow the window's horizontal size

      F5, F7    Shrink or grow the window's vertical size

You can move about the window, selecting different files, using the normal 
cursor movement keys.  That is:

      -> <-     Moves the "file pointer cursor" right or left

      ^ |       Moves up or down
      | v

      home      Moves to the upper left corner

      PgUp      Starts the display of filenames all over again
                from the first file in the directory (that is,
                it's a "start over" key rather than "display the
                previous page" key).

      PgDn      Displays the next window-full of file names

      End       Returns to the previous window or DOS.

Hold it ... !  What's that, returns to the previous window?  How did we 
get to another.  Ah Ah, you say!  Multiple windows?  Yes indeed ...

To bring up another window, strike shift-F9 again.  A second (third, 
fourth) window will spring up on the screen.  You can carry out all the 
same manoeuvres here that you did on the preceeding window and then, when 
you're done, depress End to return to the "invoking window".

The windows "stack" ... that is, when you invoke a new window and return, 
everything will be absolutely as you left it.

(Special note:  when shift-F9 is used as the invoking keystroke, the  \  
key carries out the same function for convenience allowing you to bring 
up subsequent windows with just 1 keystroke).

Accessing PARTNER from Within Another Program 
=============================================
First you must load PARTNER as a permanent part of DOS; you do this using 
the following DOS command.  (This command can be included in an AUTOEXEC 
batch file so that it is done each time you start your system.)

                   PARTNER/load

Then you can invoke PARTNER from within another program by just depressing 
shift + F9.  

PARTNER opens a window in the upper left corner of the screen and you 
carry on exactly as described before.  When you depress End for the last 
time, PARTNER returns to where you invoked it - leaving the screen and 
operating environment exactly as you left it.

There are, however, two known exceptions.  PARTNER does not work with:

      o  screens in graphics mode

      o  screens in 40-column text mode

The window position, size and sub-directory settings are remembered so you 
won't have to re-specify them the next time you enter PARTNER.

Moving the Windows About 
========================
Ctrl + one of the cursor movement keys (Home, End, left-arrow, right-arrow, 
PgUp or PgDn) causes the window to move about the screen in the direction 
you designate.

(Literary license again:  Ctrl+PgUp and Ctrl+PgDn are used in place of the 
more obvious Ctrl+up/down arrow because the keys in the middle, vertical 
row of the numeric keypad on this machine (@#$%^) don't register through 
the normal BIOS calls).

You can place the windows virtually anywhere on the screen and change their 
size using the F1, F3, F5 and F7 keys.  The settings are remembered from one 
use to the next.  You can overlap them ... or not ... as you desire.

By default, windows 1-3 don't overlap and windows 1-2 leave the bottom of 
the screen un-obstructed.  But, the choice is ultimately yours.

Just the Enter Key
==================
The Enter Key is powerful.  When the "file pointer cursor" is highlighting 
a filename, you indicate that you want to examine a new set of files by 
just depressing the Enter key.  The top of the window is opened, allowing 
you to type a new directory search specification.

You can enter a new drive, sub-directory or filename in conjunction with 
any wildcard pattern (ie: ? and *) and that will be used as the target for 
the next directory display.

If you have "logged" this window into a particular sub-directory using 
the F8-Change Directory key, then you may temporarily override this by 
specifying a different drive or sub-directory.  All actions like Removing, 
Displaying (ie: typing) and Renaming are now relevant to this directory 
and not the one you specified using the F8-Change Directory command.  
Of course, the default assigned to the window is used when you don't        
specify a "path" in the request line.

That's just like in DOS, where you can CD to a particular sub-directory, 
yet operate on files outside that directory by using the appropriate 
syntax on a Del command.  Here, the override "sticks" until you depress 
the Enter key again to request a new directory display.  The override 
most definitely "sticks" while using the PgUp, PgDn and "window 
invocation" keys (ie: Shift-F9) ... would you really want it to work any 
other way?

If you want to display the contents of a sub-directory, then the directory 
request must terminate with a \.  For example:

                   e:\wv\correspondance\

displays the contents of the files in that sub-directory (the trailing *.* 
is assumed), whereas 

                   e:\wv\correspondance

only tests   e:\wv   for the presence of the sub-directory "correspondance".

If you do not specify a drive or pathname then the search is assumed to 
occur in the current, default sub-directory on the default drive.

F2 - Remove a File  
==================
Touching F2 removes the file.  Be careful out there!  If you slip you'll 
need some assistance from Mr. Norton.

F4 - Copy a File
================
Touching F4 will copy the file.  You are prompted for the name of the 
destination -- enter a new filename.  The filename can contain a drive 
letter but no sub-directory or pathname.  You can specify a drive letter 
alone (leaving the filename blank) and the file will be copied to the 
destination drive retaining its name.

Now this copy isn't exactly the same as the DOS copy and there are some 
restrictions.

      o  the output filename cannot specify a sub-directory; you
         can only specify an optional drive letter (ie: A:, B: etc)

      o  you can specify a whole new filename or leave the filename
         blank.  You cannot use any form of DOS wildcard construct
         with * and ?.  If the filename is left blank, then of course 
         it is copied to the output drive using the same name.

If you want to copy a file from one sub-directory to another on the same 
drive then use F6-Rename, instead.  

If you want to copy a file from one sub-directory to another on different 
drives then use the following procedure.   

      o  "Log" this window onto the desired, destination drive
         and sub-directory using the F8-Change Directory function
         You will obtain a list of filenames on that drive.

      o  Now, strike the Enter key to request the display of a new directory.

      o  Enter the name of the directory containing your desired
         source file or the specific source filename.  Press    
         Enter to display the contents of that directory and    
         then move the cursor on top of the source filename.

      o  Press F4-copy.  Enter the drive letter and, optionally, 
         a new name for the file you want to copy.

         Because you have set the default directory on this
         window for the desired destination drive and sub-
         directory the output will be directed there.

If you are only working with drive names (that is, you don't use sub-
directories) then the above isn't necessary since you can use any drive 
letter in the destination filname and select any drive letter using the 
Enter key request display.  

Yes, this is a bit complicated!  A bit you say ... !!!  Well, we'll fix it 
when we receive the 3.0 version of Turbo.  In the meantime, think of all 
the fun you'll have moving files about from within 1-2-3 (tm) that you 
could never access before!

F6 - Rename a File 
==================
PARTNER makes it easy.  Touch F6, you will be prompted for a new name.  
Type any name you wish, including a sub-directory that may be different 
from the one you are displaying.  The file will be renamed and, possibly, 
moved from one sub-directory to another in the process.

You must type a full filename.  No wildcard constructs are allowed.

F8 - "Log into a new Sub-Directory" 
===================================
Each window refers to a default drive and sub-directory.  When you access 
a window for the first time, the directory and drive default to the one 
in use in the "invoking window".

This makes it easy for you to set up some defaults to quickly obtain 
directories and perform file maintenance work for sub-directories without 
having to type-in the whole tree-structured name for most accesses.

You change the default value for a window using the F8-Change Directory 
command.  When you press F8, PARTNER prompts you for the name of a new 
directory.  You enter a new directory and optional drive designator in 
the usual DOS format, eg:

                   d:\sub1\sub2\sub3

Now all directory requests made in this window will, by default, refer 
to this "path".  But, you can override this at any time when providing 
a new search request after striking the Enter key.          

For example, suppose you had entered this in response to the F8-Change 
Directory prompt:

                   d:\wv\correspondance

All further requests in this window that do not specify a drive-
letter and path will revert to  d:\wv\correspondance.   But, you
can enter any other drive, path and filename to temporarily
override this when requesting a directory display by striking
the Enter key.     

If you think about it, that's exactly the way DOS operates too.  You can 
specify a default path and drive and yet always override it on DIR requests.

Getting a bit technical, remember that if you specify

                   d:

and not

                   d:\

the d: request indicates the sub-directory now in default effect and not 
the root directory on the volume.      

Of course, if all this is complicated and you really don't use a lot of 
sub-directories you can ignore all of this and just stick to using drive 
letters.  Remember that a window can have a particular drive letter as 
its default if you just respond with d: to the F8-Change Directory prompt. 

The default directory and drive are always shown on the 25th line of the 
display.  You are referring to this when you do not specify an override.

F10 - More Information    
======================
F10 - More displays detailed information about the file's size, 
timestamp and attributes.

F9 - Display (Type) the File
============================
A handy feature ... a quick touch of the F9 key will open a window and 
display the ASCII contents on the screen.  If you use this on non-text 
files it could send your display awry.



PARTNER - Some Technical Notes
==============================
PARTNER was written to demonstrate how to use Turbo Pascal's interrupt, 
BIOS and MS-DOS access facilities.  Principally,

      o  PARTNER attaches the keyboard interrupt, when permanently
         loaded as part of DOS, and watches for the shift-F9 keystroke.

      o  It saves the registers and manipulates the stack so
         that the CPU can run in "Turbo space".

      o  It carefully ensures that the external environment
         including the registers, screen and Disk Transfer Area
         (DTA) are left un-altered when control is finally
         returned to the interrupted program.  Of course, files
         may have been removed, re-named or copied.

      o  PARTNER sometimes terminates if you get a device timeout on 
         a non-ready disk drive.  This can occur if you do a directory 
         on a drive letter that is defined but not ready (eg: 
         non-existant RamDisk).  If you reply "I" to ignore the 
         error several times you may clear it.  Responding "A" to abort 
         will return you to the DOS command prompt terminating your 
         application too!   We don't like it either but we thought 
         we'd be honest and warn you.  We'd welcome any thoughts on 
         how to easily improve this.

PARTNER intercepts the keyboard interrupt vector (vector[$09]).  However, 
it must "call" the BIOS keyboard handler each time a keystroke occurs 
so that the BIOS can decode the input ScanCodes and place the character 
into the DOS keyboard buffer.  To perform the "call", the original contents
of vector[$09] are stored in vector[111] and accessed via an Int 111 
instruction.  If the use of vector[111] conflicts with some hardware or 
other software you have installed, you can obtain the program source and 
change this to some other un-used location.

PARTNER could have a lot of extra bells and whistles.  In fact you might 
want to obtain the program's Turbo (tm) source code and try adding them 
yourself.  We kept it as small as we could since we wanted to run it most 
of the time yet not have PARTNER be the dominant application in the machine.

PARTNER requires some 52k of memory by default.  Actually, the maximum it 
can use for the time being is 64k since that is the limit imposed by the 
DOS $27 lock-program-in-core interrupt service.  Each window invocation 
requires about 5k (equivalent to $138, 16-byte paragraphs in 8088 
terminology).  Therefore, memory use can be summarized as follows:

      Turbo runtime routines        11k
      PARTNER program code          16k
      Stack / Heap space            25k
                                   -----
      Total                         52k  approx

You can reduce this by re-compiling the program using Borland's
version 2.0 Pascal compiler and specifying a smaller Stack /
Heap space.  That is, use the following series of keystrokes to
set the Options:

           Key Stroke         Means                     

              O           options
              C           COM file
              I0          Stack is minimum of 0 bytes
              A620        Stack is maximum of 25k bytes
              Q           Quit options
              C           Compile to floppy

By specifying the A option as a smaller multiple of $138, you can generate 
a system capable of displaying at most 1, 2 or 3 windows.  Remember that 
the F10-More and F9-Display commands require a full 5k stack-frame 
to operate within as well.

Techniques you might try to reduce memory, at the expense of execution 
speed, (if you're adventurous) would be to:

      o  write the screen images to a diskfile rather than hold
         them within the program stack (at a saving of 5000 bytes per panel)

      o  turn some of the procedures into overlays allowing you
         to write gallons more code at negligible memory cost

Both of these techniques would require you to ensure that the original 
disk was always available (ie: not a floppy) so that it would not 
overwrite data or load improperly.

For those interested in studying the interrupt invocation code: you will 
notice that Borland's Turbo manual leaves a bit to be desired in terms 
of completeness in this area.  In short, the instructions in Borland's 
manual flatly don't work!  Much more code is needed and the Inline 
statements incorporated within PARTNER provide a proper, "cookbook" 
solution.  See the March-June '85 issues of Tug Lines for a description 
or contact the author.

Incompatibilities          
=================
PARTNER was written as an educational exercise ... and that it was.  
We found lots of areas where additional sophisticated programming would 
be required to make it work perfectly in all cases.              

PARTNER works by replacing the DOS keyboard interrupt vector with the 
address of its own code.  Early during execution of the interrupt 
procedure, PARTNER calls the "original vector" to ensure that whatever 
was supposed to happen before happens too.  That's why keyboard I/O 
works at all with PARTNER running.  In this way, PARTNER acts as an 
interceder ... getting into the middle of the action but not taking 
part unless it specifically sees the shift-F9 sequence.

Consequently, it is comptatable with lots of programs.  However, we 
know of the following problems:

1.    Bruce and James' WordVision and SmartTerm 100 also choose 
      to execute when a keyboard interrupt occurs ... but they, 
      unlike PARTNER, don't act as interceders - they take the
      interrupt for keeps and do not pass control to other
      programs that may have intercepted the interrupt vector.
      Consequently PARTNER never gets a chance to see the
      interrupt and is locked out until the programs terminate
      and restore the vector's contents.

      You can use PARTNER with these programs but it won't be                
      accessible again until you terminate them.    

2.    Prokey(tm) (from RoseSoft) is a little more consistent in
      that it too acts as an interceder.  The two work together
      ... for a while.  Finally one or the other seems to mix up
      the "true" contents of the keyboard's interrupt vector,
      causing a loop and a re-boot is required.

      Don't use PARTNER in conjunction with ProKey.                

3.    SideKick from Borland is a truly interesting case.
      Sidekick handles the problem posed in case 1 since it
      periodically examines the contents of the keyboard vector
      (presumably from within the timer interrupt) and forcibly
      restores its own address over anything else that was there
      (in vector[$09]) if some other program has possessed the
      audaucity to change it !  Sidekick, having thus ensured it
      will always control the keyboard, kindly passes control   
      down the keyboard interrupt chain if it doesn't want to
      react to the keys pressed.  Great, SideKick works from
      within WordVision !  However the bad news is that the
      wholesale confusion over exactly who own the hardware
      vector address, what its contents really should be when
      various programs terminate and what to restore it to at
      any given time when returning from the interrupt handler
      causes the machine to lock up in a series of mysterious
      ways after operating for a while.

      Don't use PARTNER in conjunction with SideKick and  
      especially don't use it in conjuction with SideKick + 
      WordVision + ProKey.                

4.    PARTNER seems to work fine with DOSEDIT ... that little guy
      obeys the rules.  (DOSEDIT is a bulletin board program that
      provides enhanced editing capabilities on the DOS command
      prompt line).

      You can use PARTNER with DOSEDIT.

5.    No problems from within:

                   BASIC     watch out for 40-column screens

                   1-2-3     watch out for the graphics screen

                   Turbo     that's why we wrote it because Turbo,
                             excellent environment that it is, can't do
                             this stuff when you really, really need it.

```
{% endraw %}

## SCREN2.TXT

{% raw %}
```
Scren2 is provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use Scren2 you should:
  1) md\scren2             create a fastfmt subdirectory
  2) cd\scren2
  3) copy a:scren2.lbr     move in the fastfmt library
  4) lu a scren2.lbr       disperse the files in the fastfmt library
  5) unsq scr.tqt          unsqueeze the documentation
  6) type scr.txt          this file will tell you everything else
                           you need to know.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0413

     Volume in drive A has no label
     Directory of A:\

    1DIR     COM      9728   5-10-85   9:58p
    BWVID    ASM      9344   5-17-85   2:04a
    BWVID    COM       256   5-17-85   2:04a
    BWVID    DOC       896   5-17-85   2:04a
    CED      COM      6016   6-04-85   9:16p
    CED      DOC     58863   6-04-85   9:16p
    COMMENT  DOC      2816   5-24-85  10:28p
    COMMENT  SYS       384   5-24-85  10:28p
    DW       COM      3456   5-17-85  12:15a
    DW       DOC       640   5-17-85  12:15a
    FASTFMT  LBR     30720   5-16-85   8:46a
    FASTFMT  TXT       507   5-17-85  11:09p
    FILES413 TXT      3294   4-26-88   3:24p
    LU       EXE     22656   7-25-84   1:16p
    MEMINIT  EXE      1136   1-01-80  12:04a
    PARTNER  COM     26240   5-08-85   5:10p
    PARTNER  DOC     27771   1-15-87   2:30a
    PC-STAT  COM     16256   5-21-85  11:55a
    PCPF     COM     35456   6-04-85  11:00a
    PCPF     DOC     16896   6-04-85  11:03a
    SCREN2   LBR     45440   7-10-85   2:10p
    SCREN2   TXT       555   8-20-85  10:00p
    SETBW40  COM       128   5-17-85   2:04a
    SETBW80  COM       128   5-17-85   2:04a
    UNSQ     COM      8064   3-17-85   2:53p
           25 file(s)     327646 bytes
                           21504 bytes free
