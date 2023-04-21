---
layout: page
title: "PC-SIG Diskette Library (Disk #172)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0172/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0172"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "STEVE'S UTILITIES"

    This is a very nice collection of utilities that would make a
    worthwhile addition to almost anyone's system.  Included are routines
    to: let you change the beep tone of your PC to suit yourself, clear
    your display screen, several different programs to let you determine
    status of your machines ports, rework your keyboard arrangement, and
    much more.  The source code is included along with most of these
    programs.  Those of you so inclined may use this to make changes, or
    simply examine it to find out how other programmers do things.  This
    is an excellent way to enhance your machines capabilities, as well as
    your own.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    consult your DIS maunala.  For instructions on ASM or PAS listings,
    refer to your Assembler or Pascal manual.  To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    BEEP     ASM  Source code for BEEP.EXE
    BEEP     DOC  Documentation for BEEP program
    BEEP     COM  Program to produce "tone" on speaker
    DSKTEST  BAS  Examines the status byte from the floppy controller
    CLS      DOC  Documentation for CLS.ASM
    CLS      ASM  Source code for routine to clear screen
    BEEP     EXE  Program to produce "tone" on speaker
    EDIT-MOD PAS  Source code for part of editor
    DSKTEST  DOC  Documentation for DSKTEST.BAS
    EDT-MAIN PAS  Source code for main editor module
    EDITOR   DOC  Documentation for editor written in Pascal
    INPORT   DOC  Documentation for INPORT.ASM
    INPORT   ASM  Routine to interrogate requested port
    PAS-BEEP DOC  How to create a beep in Pascal
    MSBEDIT  EXE  Compiled version of editor written in Pascal
    LOCATE   DOC  Documentation for LOCATE.ASM
    LOCATE   ASM  Routine to locate curser position
    PORTS    DOC  Documentation for PORTS.EXE
    PORTS    EXE  Program to examine I/O ports
    PORTS    PAS  Source code for PORTS.EXE
    PRNSTATS DOC  Documentation for PRNSTATS.BAS
    PRNSTATS BAS  Program to examine status of lineprinter port
    RAMDISK  COM  Virtual disk driver from DOS 2.0 manual
    SETKEY   DOC  Documentation for SETKEY.BAS
    SETKEY   BAS  Keyboard reassignment program  (Requires DOS 2.0 up)
    RAMDISK  DOC  Documentation for RAMDISK.COM
    DIRECT   BAT  Prints out directory listing
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BEEP.ASM

{% raw %}
```
                TITLE SNDCLR : CALLER (SOUND.ASM)
                PAGE,132
                NAME MAIN_AEM
                ;
                ;here is the code for the calling program
                ;
                cseg    segment para    public  'code'
                beep  proc    far
                        assume  cs:cseg
                ;fixup the stack to return to dos or debug
                ;
                begin:
                        push    ds
                        sub     ax,ax
                        push    ax
                        mov     ax,cseg         ;get the return program return segment
                        mov     ds,ax
                        mov     bx,25
                        mov     di,1000         ;the clock interval divisor
                        mov     al,0b6h         ;write timer mode register
                        out     43h,al          ;load the port
                        mov     dx,14h
                        mov     ax,4f38h        ;1331000/frequency pulse
                        div     di
                        out     42h,al          ;write timer low byte
                        mov     al,ah
                        out     42h,al
                        in      al,61h          ;get current port b setting
                        mov     ah,al           ;and move it to ah
                        or      al,3            ;switch speaker on
                        out     61h,al
                wait:   mov     cx,2801         ;wait 10 milliseconds
                spk_on: loop    spk_on
                        dec     bx              ;speaker on time expired?
                        jnz     wait            ;if not keep speaker on
                        mov     al,ah
                        out     61h,al          ;port value recovered..continue
                        ret
;
                        db      'written:  23-MAY-1984:  steve leoce'
                        db      'public domain -- code reproducable'
                        db      'speaker beep procedure'
;
                beep    endp
                cseg    ends
                        end     begin
```
{% endraw %}

## BEEP.DOC

{% raw %}
```
BEEP:   
	This procedure is used from dos to beep the speaker in the
	same fashion as BIOS error beep.  It is 1000Hz for the duration
	of 0.1 seconds.  You may create any tone you prefer by modifing
	the value of DI (1000) now, in the range 0 .. 65527 this deter-
	mines the frequency of the sound (really the interval divisor.
	
	The duration may be from 0.01 seconds (bx=1) to 655.36 seconds
	(BX=0).
 
	Written:  23-May-1984
 
	Steve Leoce
	201 Delaware Avenue
	Kingston, New York  12401
	
	
	NOTE:  If BEEP.COM will not properly function on your
	machine, and you desire that BEEP be converted to a .COM file
	so that you can load faster and save space on disk then do the
	following:   Note, also  BEEP.EXE will ALWAYS work because
	.EXE files are DOS relocatable,  .COM files are not.  For this
	reason .EXE files contain extra code to tell DOS loader how to
	relocate the procedure.  .COM files contain only the memory
	binary image with no extra code except how to execute and how to
	return.

	(Type all things written in lower case the system responses are
	 shown in upper case)

	debug beep.exe<cr>
	-r ds
	DS : ####        <-- #### is the hex value in DS Prefix area
	:<hit return>    <-- hit return at the : prompt
	-q

	You MUST remember the hex number #### displayed when the
	display register command (R ds).

	Then, load with the DOS disk with EXE2BIN type
	exe2bin beep beep.com
	The system will respond:  Segment Fix-ups required.
	At this prompt type the hex number in DS  #### from debug.
	This tells the conversion program where to put the absolute
	return address so that control can return to DOS.

```
{% endraw %}

## CLS.ASM

{% raw %}
```
         PAGE,132
         TITLE CLS.ASM -- SYS$SCRATCH
         NAME  CLS_CODE
         DB	    'WRITTEN:   STEVE LEOCE:  05-MAY-1984   <MSB>'
CLS_CODE SEGMENT  'CODE'
         PUBLIC    CLS
CLS      PROC      FAR
         PUSH      BP             ;SAVE THE BASE POINTER
         MOV       CX,0           ;UPPER LEFT COORD (0,0)
         MOV       DX,2479H       ;LOWER RIGHT COORD
         MOV       BH,7           ;NORMAL ATTRIBUTE
         MOV       AX,600H        ;ENTIRE DISPLAY
         INT       10H            ;CALL INTO BIOS
         POP       BP             ;RESTORE THE BASE POINTER
         RET       FAR            ;FAR RETURN, NO PARMS TO RETURN
CLS      ENDP
CLS_CODE ENDS
         END
```
{% endraw %}

## CLS.DOC

{% raw %}
```
                           Procedure CLS.ASM
                           Written:  5-22-84

     Procedure to clear the screen and set the display to normal
attribute on the entire window.  Important:  The cursor is left at the
position @ 25,80.  Therefore, the next call to print or write will leave
the cursor at the bottom of the screen, hence the data will be printed
there.  To get around this use Locate (1,1) as the next instruction to
begin printing at the top of the display.

     This procedure requires no parameters.  Just use the word cls.

     Ex:  From Pascal:  cls;

            Pascal declaration:  procedure cls ;  external;

     The linker will expect CLS.OBJ to be included in the command line
to link the source program which uses this module.

     By:  Steve Leoce
          201 Delaware Avenue
          Kingston, New York 12401

```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #172, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  BEEP    .ASM         CRC = ED 56

--> FILE:  BEEP    .COM         CRC = 00 00

--> FILE:  BEEP    .DOC         CRC = D3 84

--> FILE:  BEEP    .EXE         CRC = D8 E4

--> FILE:  CLS     .ASM         CRC = ED BF

--> FILE:  CLS     .DOC         CRC = A5 30

--> FILE:  DIRECT  .BAT         CRC = 00 00

--> FILE:  DSKTEST .BAS         CRC = 2A 99

--> FILE:  DSKTEST .DOC         CRC = 46 F3

--> FILE:  EDIT-MOD.PAS         CRC = 64 62

--> FILE:  EDITOR  .DOC         CRC = 1D F7

--> FILE:  EDT-MAIN.PAS         CRC = 43 73

--> FILE:  INPORT  .ASM         CRC = BD FB

--> FILE:  INPORT  .DOC         CRC = D2 CA

--> FILE:  LOCATE  .ASM         CRC = 24 81

--> FILE:  LOCATE  .DOC         CRC = 5E 9F

--> FILE:  MSBEDIT .EXE         CRC = 31 3D

--> FILE:  PAS-BEEP.DOC         CRC = 65 B8

--> FILE:  PORTS   .DOC         CRC = FB 33

--> FILE:  PORTS   .EXE         CRC = 00 84

--> FILE:  PORTS   .PAS         CRC = 6E A9

--> FILE:  PRNSTATS.BAS         CRC = C5 EA

--> FILE:  PRNSTATS.DOC         CRC = 30 97

--> FILE:  RAMDISK .COM         CRC = 98 45

--> FILE:  RAMDISK .DOC         CRC = B6 7A

--> FILE:  SETKEY  .BAS         CRC = 6A D7

--> FILE:  SETKEY  .DOC         CRC = 4A 53

 ---------------------> SUM OF CRCS = 73 A9

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DSKTEST.BAS

{% raw %}
```bas
100 CLS:KEY OFF
110 KEY 15, CHR$(&H4)+CHR$(70)
120 TRUE=1:FALSE=NOT TRUE
130 ON KEY (10) GOSUB 690
140 KEY (10) ON
150 ON KEY (15) GOSUB 710:
160 KEY (15) ON
170 'Dynamic printer test procedure  status
180 '
190 DIM BIT(8):DIM PSB(8)           'number of bits in a byte
200 FOR I=0 TO 7:BIT(I+1)=2^(7-I):NEXT
210 LOCATE 23,1:PRINT "Interrogating FDC and FDD board";
220 LOCATE 24,1:COLOR 15:PRINT "F10  -> SYSTEM";:COLOR 7
230 LOCATE 1,1:PRINT "CTRLR:    Status on:  "; TIME$; "  ";DATE$;TAB(50);"Bytes Free =";FRE(0);"  (";HEX$(FRE(0));"H)";:PRINT:PRINT
240 PRINT "DEVICE:   : STATUS FROM PORT &H3F2  ";"=                     ":PRINT
250 PRINT "DRIVE--------------------->"
260 PRINT "SELECTED------------------>"
270 PRINT "NOT FDC RESET------------->"
280 PRINT "ENABLE INT & DMA REQUESTS->"
290 PRINT "DRIVE A MOTOR ENABLE------>"
300 PRINT "DRIVE B MOTOR ENABLE------>"
310 PRINT "DRIVE C MOTOR ENABLE------>"
320 PRINT "DRIVE D MOTOR ENABLE------>"
330 RAWSTATUS = INP(&H3F2)
340 '
350 ' invert lines for:  BUSY, ACKNOWLEGE and ERROR (fault)
360 '
370 STATUS=RAWSTATUS >= 213
380 '
390 'examine each bit and print the result
400 '
410 FOR I=1 TO 8
420 LOCATE 4+I,34:
430 IF (STATUS AND BIT(I)) <> 0 THEN PRINT "HIGH" ELSE PRINT "LOW "
440 NEXT
450 LOCATE 3,42:PRINT HEX$(RAWSTATUS); "H   (";RAWSTATUS")"
460 '
470 'wait for some change and recalc
480 '
490 FOR I=1 TO 8:PSB(I)=(BIT(I) AND STATUS):
500 IF PSB(I) > 0 THEN PSB(I)=1
510 NEXT
520 LOCATE 15,20:PRINT "Status byte= ";:FOR I=1 TO 8:PRINT HEX$(PSB(I));:NEXT
530 IF PSB(1)=0 AND PSB(2)=0 THEN LOCATE 5,45:PRINT "Drive A selected, active";:GOTO 560 ELSE IF PSB(1)=1 AND PSB(2)=0 THEN LOCATE 5,45:PRINT "Drive B selected, active";:GOTO 560
540 IF (PSB(1)=0 AND PSB(2)=1) THEN LOCATE 5,45:PRINT "Drive C selected, active";:GOTO 560
550 IF (PSB(1)=1 AND PSB(2)=1) THEN LOCATE 5,45:PRINT "Drive D selected, active";ELSE LOCATE 5,45:PRINT "Unknown device reports active on FDC";
560 IF PSB(3)=1 THEN LOCATE 7,45:PRINT "FDC reset affirmative"; ELSE LOCATE 7,45:PRINT "Drive not reset by FDC";
570 LOCATE 8,45:IF PSB(4)=1 THEN PRINT "INT & DMA requests enabled";ELSE PRINT "INT & DMA requests DISABLED";
580 LOCATE 9,45:IF PSB(5)=1 THEN PRINT "Drive A is active"; ELSE PRINT "Drive A not on line";
590 LOCATE 10,45:IF PSB(6)=1 THEN PRINT "Drive B is active"; ELSE PRINT "Drive B not on line";
600 LOCATE 11,45:IF PSB(7)=1 THEN PRINT "Drive C is active";ELSE PRINT "Drive C not on line";
610 LOCATE 12,45:IF PSB(8)=1 THEN PRINT "Drive D is active";ELSE PRINT "Drive D not on line";
620 COLOR 15
630 LOCATE 3,10:IF NOT PSB(1) AND NOT PSB(2) THEN PRINT "A" ELSE IF PSB(1) AND NOT PSB(2) THEN PRINT "B" ELSE IF NOT PSB(1) AND PSB(2) THEN PRINT "C" ELSE IF PSB(1) AND PSB(2) THEN PRINT  "D" ELSE PRINT "?"
640 COLOR 7
650 LOCATE 25,1:PRINT "Any key to rescan, or F10 to return to system";
660 ON KEY (15) GOSUB 710
670 A$=INKEY$:IF LEN(A$)=0 THEN 670
680 LOCATE 25,1:PRINT SPACE$(70);:GOTO 210
690 ' routine to return to system
700 CLS:SYSTEM:RETURN
710 FOR I=1 TO 3:LOCATE 23+I-1,1:PRINT SPACE$(70);:NEXT
720 LOCATE 23,1:PRINT "Ctrl-Break sequence trapped";
730 LOCATE 24,1:PRINT "Valid escape is System reset, or return to system";
740 LOCATE 25,1:PRINT "Strike any key to resume";
750 A$=INKEY$:IF A$="" THEN 750
760 FOR I=1 TO 3:LOCATE 23+I-1,1:PRINT SPACE$(70);:NEXT
770 RETURN
```
{% endraw %}

## DSKTEST.DOC

{% raw %}
```

DSKTEST.BAS:   This procedure is similar to the PRNSTATS procedure.
It dynamically examines the status byte from the FDC (Port hex 3F2).
The floppy disk controller.   Information from this port does not 
change as regularly as the printer.  Eg:  The bit will always return
low for position 1, 2 (00) indicating that DOS wants to look at drive
A first.  So don't expect drive B to show as selected even if your 
current default is B or C.  In order for this to occur, you must send
the explicit re-enable instructions to port 34F with the correct
information in the expected registers.  See technical reference page
1-163 thru end of disk controller information.
 
If you modify this register, be careful.... damage can occur if not
properly set.  Use great care in selecting the values you send to this
port, and don't forget to save the entry conditions or DOS may or may
not be able to override your settings at next IPL.
 
I suggest you use this procedure just to inquire the status of the FDC
if your programs to any diskwork such as hiding files, reading direct-
ories, and similar things.  I wouldn't display any information other
than drive selected, and whether or not it is accepting INT and DMA 
processor requests.  If not you've done something terrible.   I used 
this format just to demonstrate the uses of the inp function for 
inquiring into certain status information.
 
Problems:   Contact me:		Steve Leoce
				201 Delaware Avenue
				Kingston, New York  12401
 
Version 1.0;  Set for following system:
	256kb 	ram
	IBM mono display;  2 ds,dd drives; lpt1:

// END

```
{% endraw %}

## EDITOR.DOC

{% raw %}
```

                     Editor version V1.1 Informtion for use.

                   A brief description of the files required:


          Volume in drive B is MSB-PASWRK
          Directory of  B:\

          NAME-OF  DSK       13   5-16-84  12:10a
          MSBEDIT  EXE    54784   5-19-84   1:02a
          EDIT-MOD PAS    21192   5-19-84  12:46a
          DIR      LST        0   5-19-84  10:14p
          EDT-MAIN PAS    24596   5-19-84
                  7 File(s)     60416 bytes free

              MSBEDIT.EXE is the editor, you may rename this to any file
         name you desire to call it.  EDIT-MOD.PAS is the source code of
         the module it contains approx 600 lines of source code.
         EDT-MAIN.PAS is the source code of the main module, also about
         600 lines long.  This if for some reason you modify it, you
         must recompile and link these modules together with the linker.
         You must also include CLS.OBJ in the link command or delete the
         line " Procedure cls;  external;  " from the source program so
         the linker does not expect to find it.  I included mine, as
         well as the .ASM source so you can decide.


                       *** SUMMARY OF EDITOR COMMANDS ***
                           --------------------------

              All editor commands are recognized by their first letter.
         Users have the choice of using the first letter, or by typing
         the entire command.  Commands will NOT be recognized by a
         partial command if more than the first letter is used.

              Ex:  f for find.  Commands currently must be typed in
         lower case, if you desire, change the table to uppercase and
         recompile.

                 *** COMMANDS WHICH ACT ON THE CURRENT LINE ***
                     --------------------------------------
B[OTTOM]        | Reset the current line pointer to point at the last li
                  line in the file.  The last line is printed.  The
                  message "EMPTY INPUT FILE" is printed if the file is
                  empty. |

                  EX:   > b
                        > bottom

F[IND][-]/string[/]     | Find the first occurrence of the string in the
                          edit file, starting the search at the line
                          following the current line.  If the string is
                          found, the line containing string is printed.
                          Otherwise, STRING NOT FOUND is printed, and
                          the pointer is not reset.  If the string is
                          preceded with a -, the search is performed
                          backward through the file.

                          Ex:  > f/this string/
                               > f-;strings may be any length;
                               > find/.

N[EXT][<NUMBER>] | The simplest form (just n), the line following the
                   current one is printed.  If there is a positive
                   number or negative integer in the command stream
                   the current line is moved forward or backward that
                   many, or as many to the end or top of file.  If there
                   is no next line then a message "END OF INPUT FILE" or
                   "TOP OF INPUT FILE" is printed and the pointer is not
                   moved. |

                   EX:  > n
                        > n3
                        > n-2

[T]OP   |  Make the first line the current one and print it.
           "EMPTY INPUT FILE " is printed if there are no lines
            in the buffer. |

                   EX:  > t
                        > top

                            *** EDITOR DIRECTIVES ***
                                -----------------

A[PPEND]/STRING/[<COLUMN NUMBER>]

                |  Append the string to the end of the current line
           (if no column number is specified) and print the
           new line.  If column number is specified, append
           the string to the line starting in that column.
           Any characters after the inserted string are lost. |

                   (assume current line = "MARY HAD A LITTLE")
           EX:          > a/la/
                          MARY HAD A LITTLE la
                        > a/mb/
                          MARY HAD A LITTLE lamb
                        > a/./5
                          MARY.

C[HANGE]/OLD STRING/NEW STRING/

                |  Change the first occurrance of old string to
                   new string.  If old string is not present in the
                   line an appropriate message is printed.  If the
                   new string is not specified the old string is
                   replaced with the null string.  Assume that a null
                   string precedes all lines.   |

          EX:
                  Jack be mimble, jack be quick
                  > c/mi/ni/
                  Jack be nimble, jack be quick
                  > c/jack/Jack/
                  Jack be nimble, Jack be quick
                  > c//Black/
                  BlackJack be nimble ....

D[ELETE][<STRING>|<NUMBER>]
                |  Delete the current line (if optional string or
                   number is not specified) and reset the current line
                   pointer to the line following the one deleted.
                   If the last line is deleted, the message "BOTTOM OF
                   "FILE" is printed.  If d{number} is used, that many
                   lines is deleted from the current line.  By using
                   d<string> will delete line, and all following lines
                   until string is found.  |

                EX:  > d    { delete only the current line }
                     > d2   { delete current line and one following }
                     > d-2  { delete current line and one previous  }
                     > d/it/ {delete current line and all following
                              until "it" is found               }
                     > ^d!  { delete all lines in buffer  }
                     > d!   { delete current and all following lines }

I[NSERT]        |  Enter the insert mode.  Lines are inserted after the
                   current line.  The input prompt is the * To exit the
                   insert mode type a backslash with nothing else on the
                   line (\).   |

                   EX:  > i   {  message displayed:  MODE> INSERT  }
                        * <type new text here><cr>
                        * \
                        MODE> COMMAND
                        >    {   back to command level  }
                        the last inserted line is the current line, and
                        is printed.

P[RINT][<STRING> | <NUMBER>]
                |  Print the current line.  If a number is specified
                   the current line plus that number is displayed.
                   The current line pointer not moved.
                   p<string> prints the first line containing string
                   if found.     |

                   EX:  > p
                        > p2
                        > p/THIS
                        > p-/THAT
                        > ^p!  { print whole buffer   }

R[EPLACE]       |  The current line is deleted and the editor enters
                   insert mode.  (See insert command for more
                   information on insert).  The last line entered is
                   the new current line.  It is printed.   |

                EX:         > r
                            * new line
                            * newer line
                            * \
                            MODE> COMMAND
                            newer line
                            >

                            *** SYSTEM DIRECTIVES ***
                                -----------------

A[BORT]        |   Cancel the current edit file.  Do NOT update the
                   external edit file.  This command must be spelled
                   out because of the append command.   |

                   EX:

                   > abort

S[TOP]         |   Stop the current session.  Write the internal buffer
                   out the external disk file, named on entry.    |

                   EX:
                   > s
                   > stop

                         *** ENVIRONMENT DIRECTIVES ***
                             ----------------------

H[EADER]<COLUMNS>   |  This procedure displays a column of numbers
                       1 .. <columns>; if columns is > 72 then only
                       72 are displayed.  This is useful for finding
                       which column characters should be aligned in.
                       this line is never inserted into the file.

V[ERIFY]    |   The verify flag is toggled on or off.  The verify flag
                is used by directives such as change or next to display
                their results.  The verify flag is initialized to on
                when the editor is first loaded.   |

                EX:  > v
                     > verify

              Any edit directive can be preceded by plus or minus some
         integer.  This will add (or subtract) that number to (or from)
         the current line pointer before applying the edit directive.
         For example:
      > +2p   :  prints the second line past the current line.
      > -1i   :  insertion mode is entered; insertion before the current
                 line.

              The editor places special significance on the following
         symbols:  ^ = reference to the TOF mark.  !  = process as
         infinity (maxint).  For delete, print and anywhere that a
         number may appear.

              The editor does not display any line numbers because line
         numbers are not an intrinsic part of the file.  However, you
         may still use line numbers to reference any line.  For example:
         > 10c/it/is will change it to is on line 10.  Delimiters at the
         end of a command are optional.

              Example:  f/this stiring/ is equivelent to f/this string
         if both delimiters are used they must be identical, and should
         not appear in the string.

              To start the editor:  at the DOS prompt type:  MSBEDIT
         <FILENAME>, if you enter MSBEDIT without the file name you will
         be prompted by system:  "EDFILE:", type the filename to be used
         here.  This is because DOS needs a default name in case the
         program passes a bad one.  You will be prompted by the PASCAL
         program to enter the filename again.  If you use the filename
         as a command parm then the system prompt will not appear.


              If you plan to do any work to the source code I suggest
         that you read and understand what the code is doing before you
         modify it.  I was unable to leave the comments in it I
         orignially planned on because I was running out of free space
         on disk and compilations, and .LST files were getting out of
         hand with it.  Sorry it is so bulky.

              I would not recommend it on very large files, say more
         that 600 lines unless you have more that 128 bytes of memory.
         I have 128Kb and under DOS 2.00 found operation fairly slow
         with large files.  Especially on find or change commands.
         However it works quite nicely on small to medium files.  I
         believe it is somewhat better that EDLIN at least.

```
{% endraw %}

## INPORT.ASM

{% raw %}
```
page,132
name inport_code
title inport.asm :  msb-work-2
;
;
COMMENT   *  PROCEDURE TO GET THE VALUE OF A REQUESTED PORT WHEN CALLED
             FROM PASCAL ROUTINE.  THE VALUE RETURNED IS RETURNED THRU
             AL DIRECTLY FROM STACK CONTENTS.
          *
;
inport_code   segment  para public 'code'
              assume    cs:inport_code
              public    inport
inport        proc      far                 ;all externals are far
              push      bp                  ;retain the old base pointer
              mov       bp,sp               ;get the stack address
              mov       dx,[bp]+6           ;get requested port number from stack
              in        al,dx               ;interrogate the port
              pop       bp                  ;restore the old base pointer
              ret       2                   ;clean up the stack
inport        endp
inport_code   ends
 end
```
{% endraw %}

## INPORT.DOC

{% raw %}
```
                          Procedure INPORT.ASM

     Procedure to interrogate a requested port.  It returns the byte in
the port through al register.  It requires 1 parmater.  Type Word.  Or
integer if not using Pascal.

ex:     X := inport (y);    { y is type word }
                    { x is type byte }

     Routine provides for the preservation of all affected registers
associated with the calling program.  Therefore, on return everything
will be as it was when the procedure was last called.

     Link with:  Object filenames [.OBJ]: <filename>+inport[+<fnam>+...]









```
{% endraw %}

## LOCATE.ASM

{% raw %}
```
         PAGE,132
         TITLE LOCATE.ASM
         NAME LOCATE_CODE
LOCATE_CODE  SEGMENT 'CODE'
         PUBLIC    LOCATE
LOCATE   PROC      FAR
         PUSH      BP             ;SAVE THE BASE POINTER TO RETURN
         MOV       BP,SP          ;GET THE STACK ADDRESS
         MOV       BH,0           ;SCREEN # TO USE
         MOV       DH,[BP]+8      ;GET THE ROW
         MOV       DL,[BP]+6      ;GET THE COL
         MOV       AH,2           ;SELECT BIOS CALL
         INT       10H            ;CALL INTO BIOS
         POP       BP             ;RESTORE BASE POINTER
         RET       4              ;CLEAR THE STACK
LOCATE   ENDP
LOCATE_CODE ENDS
         END
```
{% endraw %}

## LOCATE.DOC

{% raw %}
```
                         Procedure:  LOCATE.ASM
                           Written:  5-22-84

     Procedure to locate the cursor at a specified region on the
display.  Procedure requires the following parameters:
        ROW and COLUMN:    (both must be type integer)

     For Pascal:  Declaration as:
                PROCEDURE LOCATE ( X, Y : INTEGER); EXTERNAL;

     X & Y are both dummies, may be any name.  You may pass with
anything such as local variable names, constants, global identifiers or
anything which are type integer.

ex:     Locate (1, 16);   {  locate row 1, column 16  }
        Locate (row,column);   { row and column are type integer  }

      Link with:  Object filenames [.OBJ]:  <primary fname>+locate

                              Steve Leoce
                          201 Delaware Avenue
                       Kingston , New York 12401
                             (914) 338-4593

```
{% endraw %}

## PAS-BEEP.DOC

{% raw %}
```
BEEP:

        To produce a beep from Pascal or other source language, you
        must only write (chr(7)).   This will produce the same beep
        as does BEEP.COM.  Therefore, writing an external will only
        increase the size of the executable load module as written by
        the linker.  Only use externals when the source language you
        are using cannot support the operation you desire.



```
{% endraw %}

## PORTS.DOC

{% raw %}
```
                          Program:  PORTS.PAS
                                5-22-84

     Procedure examines every port by an interrogation procedure written
in assembler.  (INPORT.OBJ) This program is useful if you require to
know the values of a particular port number.  Such as printer status
through the printer adapter port.  All ports, including memory
addressing ports are examined and displayed.

     When using, the message :  "More..." is displayed on row 1, column
25.  This occurs when the display is full.  (Now set for a monochrome
display) from IBM.  At this prompt the program responds only to the
return key, or some char followed by a return.  This will display the
next screenful of data.

     If to be used, I recommend modifing to find out the port bytes
through specifing only the port(s) needed.  Don't go through all 65537
ports to determine if the value you desire is or is not present.  Don't
forget, port status is dynamic so a complete printout of the results
will probably be a waste.  Certain ports are fixed however, such as ROM
ports or PROM ports which are only periodically changed.  So a partial
print may be useful.

     If running for all the possible ports be patient, program run may
be up to 2 minutes to scan all 65537 ports available and to update the
profile and count.

     To preserve the output use :  A>ports>portvals.dat this will create
the data file portvals filled with the text of the output.  Then edit
this listing and print the useful part.  Or use Prnt-scrn when useful
data is on the screen.  The file will be pretty large, so use a disk
with plenty of space if the entire output is to be retained.

     No internal files are created with the program run.  Runtime
operations affect only input (read the CR) and output (display the
data).

```
{% endraw %}

## PRNSTATS.BAS

{% raw %}
```bas
100 KEY OFF
110 REM   PRNSTATS.BASTROFF
120 REM   PRNSTATS.BAS:
130 REM   Program to dynamically test the status port of the line printer.
140 REM   Accomplished throught the monochrome/printer adapter card.  If you
150 REM   use a TV or color/graphics monitor you will have to modify the port
160 REM   number. Look it up in the Technical reference manual under color/
170 REM   graphics adapter section.  Under I/O Ports.
180 REM
190 REM  Ctrl-break has been disabled, as well as Ctrl-Alt-Del system reset.
200 REM  Use this as an example, use only the examination code to determine
210 REM  whether or not the printer is ready for data before your program
220 REM  requests it.  This will prevent termination by BASIC or BASICA because
230 REM  a device time-out.   Otherwise, this code will poll the port infinitely.
240 REM  Use as a subroutine.  Display the produced screen only in the event
250 REM  that the program found something wrong with the printer.
260 REM
270 REM   Steve Leoce
280 REM   201 Delaware Avenue
290 REM   Kingston, New York  12401
300 REM   (914)-338-4593
310 REM
320 REM   Last update=21-may-1984
330 REM
340 REM
350 REM
360 KEY 15,CHR$(&H4)+CHR$(70)
370 KEY 16,CHR$(&H4+&H8)+CHR$(83)
380 ON KEY (16) GOSUB 950
390 ON KEY (10) GOSUB 1020
400 ON KEY (1) GOSUB 1070
410 KEY(10) ON:KEY(15) ON:KEY(16) ON:KEY (1) ON
420 'Dynamic printer test procedure  status
430 '
440 DIM BIT(8):DIM PSB(8)           'number of bits in a byte
450 FOR I=0 TO 7:BIT(I+1)=2^(7-I):NEXT
460 CLS:KEY(10) ON:KEY(15) ON:KEY (16) ON
470 KEY (1) ON:LOCATE 23,1:PRINT "F1   -> REFRESH";
480 LOCATE 24,1:PRINT "F10  -> SYSTEM";
490 LOCATE 1,1:PRINT "LPRINTER:   Status on:  "; TIME$; "  ";DATE$;TAB(50);"Bytes Free =";FRE(0);"  (";HEX$(FRE(0));"H)";:PRINT:PRINT
500 PRINT "LPT1:       STATUS FROM PORT 957 (";HEX$(957);"H)";" =                     ":PRINT
510 PRINT "BUSY--------------->"
520 PRINT "ACKNOWLEDGE-------->"
530 PRINT "OUT OF FORMS------->"
540 PRINT "SELECTED----------->"
550 PRINT "WRITE FAULT-------->"
560 PRINT "UNUSED------------->"
570 PRINT "UNUSED------------->"
580 PRINT "TIME OUT----------->"
590 RAWSTATUS = INP(957)
600 '
610 ' invert lines for:  BUSY, ACKNOWLEGE and ERROR (fault)
620 '
630 STATUS=RAWSTATUS >= 200
640 '
650 'examine each bit and print the result
660 '
670 FOR I=1 TO 8
680 LOCATE 4+I,24:
690 IF (STATUS AND BIT(I)) <> 0 THEN PRINT "HIGH" ELSE PRINT "LOW "
700 NEXT
710 LOCATE 3,42:PRINT HEX$(RAWSTATUS); "H   (";RAWSTATUS")"
720 '
730 'wait for some change and recalc
740 '
750 FOR I=1 TO 8:PSB(I)=(BIT(I) AND STATUS):
760 IF PSB(I) > 0 THEN PSB(I)=1
770 NEXT
780 LOCATE 14,20:PRINT "LPT1:   Status byte=";
790 FOR I=1 TO 8:PRINT HEX$(PSB(I));:NEXT
800 IF (PSB(1)+PSB(2)+PSB(3)+PSB(5))=0 THEN LOCATE 15,20:PRINT "LPT1:   WAITING FOR WORK           " ELSE COLOR 15:LOCATE 15,20:BEEP:PRINT "LPT1:   *INTERVENTION REQUIRED      ":COLOR 7
810 IF PSB(1)=1 AND PSB(5)=1 THEN LOCATE 5,40:PRINT "LPRINTER not communicating with system"; ELSE LOCATE 5,40:PRINT SPACE$(39);
820 IF PSB(4)=0  THEN LOCATE 8,40:PRINT "Electrical energy not applied"; ELSE LOCATE 8,40:PRINT SPACE$(39);
830 IF PSB(5)=1 THEN LOCATE 9,40:PRINT "LPT1:  Off line - Write fault";ELSE LOCATE 9,40:PRINT SPACE$(39);
840 IF PSB(3)=1 THEN LOCATE 7,40:PRINT "Printer out of forms"; ELSE LOCATE 7,40:PRINT SPACE$(39);
850 IF PSB(8)=0 THEN LOCATE 12,40:PRINT "Device (LPT1) time out; no retry"; ELSE LOCATE 12,40:PRINT SPACE$(39);
860 IF PSB(2)=1 OR  PSB(4)=0 OR PSB(1)=1 OR PSB(3)=1 OR PSB(8)=0 THEN LOCATE 6,40:PRINT "NAK from device LPT1:"; ELSE LOCATE 6,40:PRINT "ACK from device LPT1:";
870 IF RAWSTATUS=INP(957) GOTO 870
880 GOTO 490
890 LOCATE 24,1:PRINT "Ctrl-Break  Disabled";
900 LOCATE 25,1:PRINT "Strike any key to resume scan";
910 ZZ$=INKEY$:IF ZZ$="" THEN 910
920 LOCATE 24,1:PRINT SPACE$(79);:
930 LOCATE 25,1:PRINT SPACE$(79);:
940 KEY (15) ON:RETURN 470
950 LOCATE 24,1:PRINT "System reset DISABLED";
960 LOCATE 25,1:PRINT "Strike any key to resume scan";
970 ZZ$=INKEY$:IF ZZ$="" THEN 970
980 LOCATE 24,1:PRINT SPACE$(79);
990 LOCATE 25,1:PRINT SPACE$(79);
1000 KEY (16) ON
1010 RETURN 470
1020 ' return to system requested
1030 LOCATE 25,1 :PRINT "Strike any key when COMMAND.COM is in device A:";
1040 ZZ$=INKEY$:IF ZZ$="" THEN 1040
1050 CLS:SYSTEM:RETURN
1060 ' returned
1070 'routine to refresh screen with time and date
1080 CLS:GOTO 470:RETURN
1090 ' refreshed
1100 ON KEY(15) GOSUB 890
```
{% endraw %}

## PRNSTATS.DOC

{% raw %}
```

                                  PRNSTATS.BAS

PRNSTATS.BAS  is  a  BASICA program to dynamically examine the status of
the line printer through port 957.  The particular program I wrote  just
continues  polling  the  port  until  is finds a change at which time it
updates the screen with the new status.

However, it was written with the purpose of calling  this  routine  just
before  requesting  some printer function within the driver program.  If
bits 1, 2, 3 and 5 are set low (0) then the printer is ready to  perform
some  function.   Otherwise some fault has occurred with it.  I selected
the message "Intervention required." However, to determine what is wrong
with  is  examine  each  bit  position  in the array PSB (program status
byte):  If bit 1 is high (1) then the printer is currently busy.  If the
second bit is high (1) then it probably has no electrical energy supply.
If bit 3 is set then it is out of forms.  If Bit 4 is low (0)  then  the
printer  is  not  on line (depress button on printer);  if bit 5 is high
then a print fault occurred (no power or off line).  Bits 6 and  7  have
no  meaning  assigned  yet,  and  are always high (1);  a time out fault
occured if the printer returns status bit 8 low (0), otherwise  it  will
be high.

This  program  should be more informative in the application that having
BASIC terminate execution, or is better than playing with the  on  error
command and guessing which err will be returned.

If problems contact me:  201 Delaware Avenue
                         Kingston, New York 12401

Currently  working  on a similar program for Disk usage, if you have one
completed similar to this, please let me know.



```
{% endraw %}

## RAMDISK.DOC

{% raw %}
```
RAMDISK.COM:     This program is simply the virtual disk driver of 180kb
	capacity supplied by IBM in the DOS 2.00 Manual.  Just put it it
	your CONFIG.SYS like any other device driver.  It works fine.
	 
	Make sure you have adequate free memory for this to load or a
	message will appear at IPL time:  Bad or missing RAMDISK; where
	RAMDISK is any filename you have renamed to:
 
	Don't forget, you cannot use FORMAT,  DISKCOPY, or other hard-
	ware procedures on this, but copy works and similar disk oper-
	ations.  Read, write, error-handler.  It is nice if you have
	the space.   The actual space required is not mentioned in the
	manual, but I have 128Kb with DOS 2.00 and it seems to load ok.


```
{% endraw %}

## SETKEY.BAS

{% raw %}
```bas
190 Z$="["
200 BL!=190
210 KEY OFF:CLS
220 ON ERROR GOTO 360                   'the error routine
230 FOR I=4 TO 10 : KEY I, "":NEXT      'erase the existing keys, except edit
240 DIM A$(20)                  'name of redefinded key
250 DIM B$(20)                  'string to be assigned to key
260 DIM C$(20)                  'string written to dos file
270 DIM E$(132)                 'extended ascii code sequence identifier
280 GOSUB 1270                  'see if config.sys already present
290 GOSUB 920                  'load extended keys into e$
300 GOSUB 410                  'get filename and input assignments from it
310 GOSUB 490                  'display existing assignments
320 GOSUB 620                  'ask for new key assignment or exit
330 GOSUB 1120
340 LOCATE 23,1:PRINT "Finished.":END
350 '
360 'error handler
370 '
380 IF ERL=440 AND ERR=53 THEN RESUME 470
390 IF ERL=1320 AND ERR=53 THEN RESUME 1340 ELSE END
400 '
410 'open key file and ready to accept definitions
420 '
430 INPUT "Enter name of file: ",F$:CLS
440 OPEN "I",#1,F$
450 I=1:WHILE NOT EOF(1):LINE INPUT #1,C$(I):I=I+1:WEND
460 CLOSE
470 RETURN
480 '
490 'display current definitions
500 '
510 CLS:LOCATE 1,1:PRINT "Filename:  ";:COLOR 15:PRINT F$;TAB(30);:COLOR 7:PRINT"Carriage return = ";:COLOR 15:PRINT Z$;:COLOR 7
520 R=0:I=1:WHILE C$(I)<>""
530 GOSUB 800
540 R=R+LEN(B$(I))+L1
550 LOCATE I+2,5:PRINT A$(I),B$(I);
560 I=I+1:WEND
570 LOCATE 25,1:PRINT SPACE$(60);
580 LOCATE 25,1:PRINT "Press key to be redefined.  Or <ENTER> to QUIT";
590 LOCATE 1,60:PRINT "Bytes left: =";:COLOR 15:PRINT BL!-R-I+1;:COLOR 7
600 RETURN
610 '
620 'redefine the requested key
630 '
640 I$=INKEY$:IF I$="" THEN 640 ELSE IF I$=CHR$(13) THEN RETURN
650 IF LEN(I$)=1 THEN A$(I)=I$:M$=CHR$(27)+"["+MID$(STR$(ASC(A$(I))),2,3)
660 IF ASC(I$)=32 THEN A$(I)="Space bar"
670 IF LEN(I$)<>2 THEN 700
680 A$(I)=E$(ASC(RIGHT$(I$,1)))
690 M$=CHR$(27)+"[0;"+MID$(STR$(ASC(RIGHT$(I$,1))),2)
700 FOR J=1 TO 20:IF A$(J)=A$(I) THEN I=J: J=20
710 NEXT J
720 LOCATE 25,1:PRINT SPACE$(78);:LOCATE 25,1:N$="p"
730 PRINT "Enter new string for key ";A$(I);":  ";:LINE INPUT;B$(I)
740 IF B$(I)="" THEN GOSUB 1210:GOTO 770    ' kill a definition
750 IF INSTR(B$(I),Z$)<>0 THEN B$(I)=LEFT$(B$(I),INSTR(B$(I),Z$)-1):N$=";13p"
760 C$(I)=M$+";"+CHR$(34)+B$(I)+CHR$(34)+N$
770 GOSUB 490
780 RETURN 320
790 '
800 'get key name and previous definition
810 '
820 IF MID$(C$(I),3,1)="0" THEN L1=2:GOTO 860
830 L1=1:A$(I)=CHR$(VAL(MID$(C$(I),3,INSTR(C$(I),";")-3)))
840 IF MID$(C$(I),3,2)="32" THEN A$(I)="Space bar"
850 GOTO 870
860 A$(I)=E$(VAL(MID$(C$(I),5,INSTR(5,C$(I),";")-5)))     'extended key defn
870 B1=INSTR(C$(I),CHR$(34))+1       'first char after quote delimiter
880 B$(I)=MID$(C$(I),B1,INSTR(B1,C$(I),CHR$(34))-B1)
890 IF INSTR(C$(I),";13p")<>0 THEN B$(I)=B$(I)+Z$
900 RETURN
910 '
920 'fill e$ array with extended codes
930 '
940 E$(15)="Shift Tab"
950 GOSUB 1100:DATA 16,25, Alt-Q,Alt-W,Alt-E,Alt-R,Alt-T,Alt-Y,Alt-U,Alt-I
960 DATA Alt-O,Alt-P
970 GOSUB 1100:DATA 30,38, Alt-A,Alt-S,Alt-D,Alt-F,Alt-G,Alt-H,Alt-J,Alt-K,Alt-L
980 GOSUB 1100:DATA 44,50, Alt-Z,Alt-X,Alt-C,Alt-V,Alt-B,Alt-N,Alt-M
990 GOSUB 1100:DATA 59,68, F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
1000 GOSUB 1100:DATA 71,83, Home,CsrUp,PgUp,0,CsrLeft,0,CsrRt,0,End
1010 DATA CsrDn,PgDn,Ins,Del
1020 GOSUB 1100:DATA 84,93,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10
1030 GOSUB 1100:DATA 94,103, C1,C2,C3,C4,C5,C6,C7,C8,C9,C10
1040 GOSUB 1100:DATA 104,113, A1,A2,A3,A4,A5,A6,A7,A8,A9,A10
1050 GOSUB 1100:DATA 114,119, Ctrl-PrtSc,Ctrl-CsrLeft,Ctrl-CsrRt,Ctrl-End
1060 DATA Ctrl-PgDn,"Ctrl-Home"
1070 GOSUB 1100:DATA 120,132,"Alt-1","Alt-2","Alt-3","Alt-4","Alt-5","Alt-6"
1071 DATA "Alt-7","Alt-8"
1080 DATA "Alt-9","Alt-0","Alt-","Alt=","Ctrl-PgUp"
1090 RETURN
1100 READ J1,J2: FOR J=J1 TO J2:READ E$(J):NEXT:RETURN
1110 '
1120 'save to disk and close
1130 '
1140 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT "Writing to file "; F$;
1150 OPEN "O",#1,F$
1160 I=1:WHILE C$(I)<>""
1170 PRINT #1,C$(I)
1180 I=I+1:WEND
1190 CLOSE:RETURN
1200 '
1210 'delete a requested entry
1220 '
1230 A$(I)=""
1240 WHILE C$(I+1)<>"":C$(I)=C$(I+1):I=I+1:WEND
1250 C$(I)="":RETURN
1260 '
1270 'create file config.sys if necessary
1280 '
1290 CLS:PRINT"Insert disk to receive key reassignment file"
1300 PRINT "Strike any key to continue"
1310 I$=INKEY$:IF I$="" THEN 1310
1320 OPEN "I",#2,"CONFIG.SYS"           'write the file if required
1330 CLOSE 2 : GOTO 1370
1340 OPEN "O",#2,"CONFIG.SYS"
1350 PRINT #2,"DEVICE=ANSI.SYS";
1360 CLOSE 2
1370 RETURN
```
{% endraw %}

## SETKEY.DOC

{% raw %}
```

                                SETKEY:
                                05/24/84

     NOTE:  Program results function only on DOS versions of 2.00 and
higher.  Otherwise, without ANSI.SYS driver the ESC codes sent to the
processor for the keyboard will be IGNORED.  And no changes can be made.

     Basic program to exploit the power of ANSI.SYS You must have done
IPL with "DEVICE=ANSI.SYS" in your CONFIG.SYS file.  The program will
build you a new one if it doesn't find it on the disk.

     What to do is load basica.  Run SETKEY, either use an existing file
or create a new one with alternate definitions.  The program will not
disturb the DOS editing function keys, unless you explicitily request it
to do so.  ANY key on the keyboard may be redefined with any string you
like.  You may also modify the CR (Carriage return char to anything you
like.  Modify Z$ in line 190, it is now set to "[" this char is seldom
used in DOS strings.

     When the program run is over and you exit back to DOS issue the
command TYPE <FNAM.EXT> ;  where FNAM.EXT is the key assignment file
written by SETKEY.  The file will appear blank because the entire file
is just ESC (escape) codes which ANSI.SYS interprets.  Therefore, before
the changes will be effective, ANSI.SYS must have been made resident at
IPL time.  If this is not so, re-boot after putting DEVICE=ANSI.SYS in
CONFIG.SYS on the system IPL disk volume.

     The most common assignments are for the function keys to:  dir b:[,
dir a:[, dir c:/p[, cls[ etc.  These functions come in very handy.

     It also makes excellent usage of the IBM supplied device driver
ANSI.SYS to make your keyboard very flexible.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0172

     Volume in drive A has no label
     Directory of A:\

    BEEP     ASM      2200   5-23-84  10:38p
    BEEP     COM        54   5-23-84   7:19p
    BEEP     DOC      1669   5-23-84   9:22p
    BEEP     EXE       768   5-23-84  10:40p
    CLS      ASM       720   5-21-84  11:43a
    CLS      DOC       878   5-22-84   6:47p
    DIRECT   BAT        35   5-23-84   9:02p
    DSKTEST  BAS      2742   5-21-84  12:30p
    DSKTEST  DOC      1618   5-21-84  11:36a
    EDIT-MOD PAS     21192   5-19-84  12:46a
    EDITOR   DOC     11813   5-23-84  10:14a
    EDT-MAIN PAS     24882   5-23-84   9:45p
    INPORT   ASM       936   5-22-84   4:14p
    INPORT   DOC       606   5-22-84   6:41p
    LOCATE   ASM       688   5-16-84   9:14a
    LOCATE   DOC       936   5-22-84   6:36p
    MSBEDIT  EXE     54784   5-19-84   1:02a
    PAS-BEEP DOC       422   5-23-84   8:46p
    PORTS    DOC      1840   5-22-84   8:00p
    PORTS    EXE     26112   5-22-84   6:07p
    PORTS    PAS      2634   5-22-84   6:24p
    PRNSTATS BAS      3770   5-21-84  12:43p
    PRNSTATS DOC      1717   5-20-84  12:35a
    RAMDISK  COM       672   5-18-84  11:31a
    RAMDISK  DOC       716   5-23-84  10:23a
    SETKEY   BAS      3911   5-23-84  12:40a
    SETKEY   DOC      1707   5-23-84  12:25a
    CRC      TXT      1828  11-15-84   6:46a
    CRCK4    COM      1536  10-21-82   7:54p
           29 file(s)     173386 bytes
                          137216 bytes free
