---
layout: page
title: "PC-SIG Diskette Library (Disk #205)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0205/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0205"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 13"

    DOS Utilities No 13 is a collection of miscellaneous programs for
    serious computer users.  NDOSEDIT is a fine DOS command editor.
    BROWSE lets you view files (better than TYPE).  Other utilities
    allow you to change cursor shape, enhance your COMMAND.COM, and
    more.
    
    System Requirements: Some programs require BASIC, color graphics.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>
    
    File Descriptions:
    
    CGCLOCK2 DOC  Documentation
    CGCLOCK2 COM  Color display clock, beeps every 15 minutes
    BROWSE   DOC  Documentation
    BROWSE   COM  View file contents - similar to CMS BROWSE command
    CMD185   DOC  Documentation
    CMD185   COM  Creates resident COMMAND.COM with good internal commands
    CV2      COM  Changes diskette labels under DOS 2.0
    CURSOR   COM  Changes cursor shape - enter "cursor8" for block shape
    FILELIST BAS  Displays text files with pause for each full screen
    EDLIN    BAS  Better documentation for EDLIN  (Mel Rothman)
    NDOSEDIT DOC  Documentation
    NDOSEDIT COM  VM style editor for DOS commands, with command stack
    KEY      BAS  Something like simple Prokey for DOS 2.0
    BAT2DEMO BAT  Extended Batch Language demo program
    BAT      COM  Extended Batch Language program
    CAT      DOC  Documentation for CAT.COM
    CAT      COM  Directory maintenance program
    BAT2DOC  BAT  Extended Batch Language documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BROWSE.DOC

{% raw %}
```
                           BROWSE.COM

     Usage: At the DOS prompt, type BROWSE filespec.

     Browse is very similar to the VM/CMS browse command.  It 
allows full screen viewing of any file.  Use the arrow keys to 
scroll up, down, left and right.  Home takes you to the top left 
corner of the file, End goes to the bottom left.  Press Esc to 
exit browse.

     Note: Browse is not an editor.  It can only be used to VIEW 
a file, not change it.

```
{% endraw %}

## CMD185.DOC

{% raw %}
```

COMMAND.COM 1.85
by AN IBMer who cared about us IBM-PCers

Run the BASIC program called CMD185.BAS and it will create you
a .COM program called CMD185.COM  then rename it COMMAND.COM
AND IT WILL BE YOUR NEW COMMAND.COM, COPY IT TO OTHER DISKS AND
YOU WILL BE AMAZED AT WHAT IT CAN DO FOR YOU. JUST TYPE THE WORD
COMMAND AND IT WILL BOOT ITSELF, IT WILL REMAIN RESIDENT AT ALL TIMES
AND HAS LOTS OF NEW COMMANDS IMBEDED IN IT.. GOOD LUCK......
P.S. You have to del your other COMMAND.COM for this to work
as it is a new replacement and is not an official DOS.

NEW OR MODIFIED INTERNAL COMMANDS

These are modifications made to COMMAND.COM 1.10.
Compatibility has been preserved with DOS and BIOS version 1.10.
Either version of COMMAND.COM is compatible with DOS and BIOS 1.10
and also 1.82 which supports 40 or 80 track single or double sided
drives in any combination, 1.84 which is an enhanced version of
1.82 that supports a simulated drive in memory and 1.85 which is an
enhanced version of 1.84 that supports a Winchester drive.
Unlike command 1.83, there is no transient version and the entire
program remains resident in low memory.
This eliminates the occasional prompts for a DOS disk in drive "A"
but some systems with very little memory might not run some large
programs and utilities such as DISKCOPY might not run very efficiently.

The principal enhancements of 1.85 over 1.84 are:

 1. User defined aliases.
 2. Keyboard stack.
 3. User code area.
 4. Hardware reset support.
 5. Date and time display.
 6. Form feed command for printer.
 7. Peek ahead on batch files (compatible with BAT.COM).
 8. A second alternate drive.
 9. Full screen pauses for the type command.
10. Switch to toggle the keyboard stack on and off.
       (compatible with FULISTPC.COM).


KEYBOARD STACK

A circular stack of 256 bytes stores all new or edited commands that
are entered from the keyboard. One or two character commands are not
saved.
See the stack command.
The up and down arrows are used to cycle through the stack in either
direction. The currently displayed command line is executed when enter
is pressed.
After executing a command, the stack pointer is set between the current
command and the next one. Therefore the previous command can always be
recalled by pressing the up arrow. If the current command is new, it
is placed at the end of the stack and the stack pointer points between
the last command and the first one entered. The 1st command may be lost
if the stack has filled up and wrapped around to the beginning.
At the DOS prompt, the input/browse mode (as opposed to the edit mode)
is active. When any non character key is pressed such as the F1 thru
F10 on the left or the horizontal arrow keys on the right, the edit
mode becomes active.
Once in the edit mode, the stack is not accessible until you hit enter.
A quick exit from the edit mode is ESC and enter. The stack is then
ready for cycling.


BAT.COM COMPATIBILITY

The batch variables have been moved to the lowest part of CMD185.
This provides continuous support for Frank Canova's batch processor
as they will remain in the same locations in subsequent releases of
CMD18X and will remain compatible with BAT.COM if it has been
patched for CMD185.
The incompatability that was introduced with the batch look ahead
feature of 1.84 has been resolved in 1.85.
My apologies to those who were inconvenienced.


ALIAS newname oldname

Any internal or external command name may be changed to an alias of
the user's choice. The newname may be 1 to 8 characters in length.
Any of the legal characters as defined for file names and extensions
may be used.
The old name may be any internal command or a file specification
which may include a drive designator and file extension.
Note that trailing parameters cannot be part of the new name.
Note also that some previous aliases have been retired and that
the standard DOS 1.1 aliases of DEL and REN are built in.

A few examples:
	    ALIAS DB DEBUG
	    ALIAS FORMAT FMT184.COM
	    ALIAS DC  B:DISKCOPY
	    ALIAS DBB B:DEBUG.COM
	    ALIAS D DIR
	    ALIAS H HELP
	    ALIAS AKA ALIAS

The alias list is built in memory just above command and
may be any length.
Because of this length flexibility, all aliases must be defined
prior to the installation of resident extensions. After a program
uses INT 27H to terminate but stay resident, the ALIAS command
is no longer available.
If ALIAS is not displayed by the HELP command, it is not available.
Once an alias has been defined, there is no quick way to cancel it.
It is convenient to define the aliases in an AUTOEXEC.BAT file.


ALT [d1:][,d2:]

A provision is made for defining 1 or 2 alternate default drives.
When this option is active, the alternate default drives are searched
for any command that DOS receives from either the keyboard or a batch
file, if it cannot be found on the current default drive.
The alternates are searched in the order in which they were specified.
Do not specify the same drive twice as either current or alternate.
This only applies to .COM, .EXE or .BAT files that are to be
executed and not to files that are included as parameters of a command.
The default is no alternate drives. The ALT command may be followed
by 0, 1 or 2 drive designators. If 0, the currently defined alternates
are nullified.


BOOT

This initiates the same function as CNTL-ALT-DEL except power-on
diagnostics are bypassed and date and time are retained.
If the date is found to be non zero, the DATE$ command is executed
instead of the DATE and TIME commands.
A hardware reset is also supported which senses the generation
of simultaneous parity checks for the I/O channel and the system
board. If either parity check is active by itself, the normal action
is taken, i.e. the system hangs with an error message on the screen.
If both are active together, the BOOT command is executed.
This is advantageous to programmers who often hang up their machines
while debugging new code. This reboot method will fail if the
non maskable interrupt enable latch at I/O port A0H has been reset.
The CNTL-ALT-DEL combination, on the other hand will fail whenever
the processor hangs in a loop with interrupts disabled.
The hardware modification will be published in a separate document.


COLOR [40]

Switches the display to the color graphics monitor if attached.
The display width defaults to 80 columns.


VM/CTS will shutdown at 1200 noon. They should be down no more than 15 minutes. CN(01)
CLS [any command]
Clears the display screen.
This can be issued as an independent command or as a prefix to any
other command. When used as a prefix, the screen is cleared prior to
the execution of the command. e.g. CLS DIR.


DATE$

This command displays the current date and time on the screen.
There is no pause for new information.


DIR [filespec]

Syntax is the same as the DOS 1.1 DIR command except
the /W and /P switches are not used. The display format is similar
to the SDIR directory display program by D. Dievendorf with 2
alphabetized columns showing the name, extension, size, date and time.
If a color graphics adapter card is installed and set for 40 columns,
a single column alphabetized list is produced. There is a pause when
the screen is filled and the display continues when any key is pressed.
Subsequent pauses leave 6 lines visible from the previous full screen
display.


HDIR [filespec]

Same as DIR but includes hidden files.


SDIR [filespec]

Same as DIR but files are listed in single column format.


DO BATCHNAME

When a file name is received as a command, 3 sequential searches are
conducted on the current drive, followed by 3 similar searches on the
alternate drives, if active. The order of the searches is for .COM,
.EXE and then .BAT type files. The delay preceeding the execution of
a batch file can be quite long if the current drive has space for a
large number of files, and about 2 or 3 times as long if the batch
file is on one of the alternate default drives.
The DO command bypasses the first 2 searches and reduces the initial
delay by a large factor.
The batch processor now peeks ahead 1 byte so that the batch disk need
not be reinserted in order to continue after the last batch command
has been processed just to read the end of file marker.


FF

A carriage return is sent to the printer followed by a form feed
to advance the paper to the next page boundary.


FILENAME.COM

When an .COM filename is specified with it's extension, the .EXE and
.BAT searches are bypassed and produces a speedup in those cases
where the subject file is on the alternate drive.


FILENAME.EXE

When an .EXE filename is specified with it's extension, the .COM
search is bypassed and produces a speedup similar to the DO command.
An abbreviated extension of .E has the same effect.


HELP

This command produces a horizontally alphabetized list of all internal
commands followed by a list of all aliases in the order in which
they were defined.


MONO

Switches the display to the monochrome monitor if attached.
The monochrome display width is always 80 columns.


NAME d:DISKETTE NAME

The diskette name is written on the diskette in
drive d:.
The drive must be designated.
The name includes all text following the colon, including leading
blanks and other separators.
The name appears at the top of the directory display produced by
the DIR command.
It can also be accessed by a short machine code routine that can
be included in basic and other high level languages that are
compatible with PCDOS.
The name is stored at the end of the file allocation table.
The maximum length of the name is determined by DOS and is
dependent on the drive capacity, the sector length and the
number of sectors per allocation unit (cluster).
The maximum for DOS 1.10 ,1.83, 1.84 and 1.85 is about 36
characters.


PRINT FILESPEC

This is the same as the TYPE command except the output is sent to
the printer. Tabs are intercepted by this routine and defined at
every 8th column. No output appears on the display screen.


STACK

Toggles the stack switch on and off. If the stack is disabled
before the command is issued, it is enabled and vice-versa.
If FULISTPC.COM is to be run, the stack must be disabled to
allow FULISTPC to intercept commands.
The status of the switch is displayed each time the command is
invoked.


TYPE [/P] FILESPEC

The TYPE command is enhanced to include the /P switch for pauses
when the screen is full. Six lines from the previous screen are
retained on the screen at the pause. No pauses occur if the /P
switch does not preceed the file specification.


USER ROUTINES

Space has been set aside so that users of CMD185 can insert there
own machine code routines. Two contiguous areas have been defined.
Their vectors can be found in the internal command list near 1800H.
The byte following the command name should be any non zero value if
you want the command interpreter to check for valid drive specifiers
following the command name otherwise zero. The next word is the vector
to the command code. The routine should end with a near return.
Each area has 128 bytes available. They may be used as 2
separate routines or combined into a single larger routine.
The vectors in the internal command table must be set appropriately.

Thanks to GENE PLANTZ for having this on his CHICAGO BBS and making
it available..
Capital PC User Group Software EXchange  (301) 949-8848 for IBMPC use only
4-22-83 RMS



BBS and making
it available..
Capital PC 
```
{% endraw %}

## EDLIN.BAS

{% raw %}
```bas
10  REM Program EDLIN. Describes functions of DOS's EDLIN program
20 REM save "edlin"
25 REM (C) Copyright 1982 - Mel Rothman
30 COMMON DRIVE$
40 KEY OFF
50 DIM KEYS$(99),MEANING$(99)
60 ON ERROR GOTO 510
70 CLS
80  DATA "EDLIN Parameters         "," "
90  DATA "----------------         "," "
100 DATA "line                     ","line number or '.' or '#'.  "
110 DATA "                         ","'.' = current line."
120 DATA "                         ","'#' = line after last one in memory"
130 DATA "n                        ","No. lines to read/write to/from dkt"
140 DATA "string                   ","Text to find/replace/delete etc."
150 DATA "                         "," "
160 DATA "EDLIN Commands"," "
170 DATA "--------------           "," "
180 DATA "DOS editing functions are all"," available during EDLIN"
190 DATA "The EDLIN prompt is an * "," "
200 DATA "                         "," "
210 DATA "n A                      ","Append lines"
220 DATA "[line] [,line] D         ","Delete lines"
230 DATA "line                     ","Edit the line number entered
240 DATA "E                        ","End EDLIN and save file"
250 DATA "[line] I                 ","Insert lines preceding [line]"
260 DATA "[line] [,line] L         ","List lines"
270 DATA "Q                        ","Quit and don't save changes"
280 DATA "[line] [,line] [?]       ","Replace any Rstring with string"
290 DATA "     Rstring[<F6>string] ","  ? = prompt. if no string, all"
300 DATA "                         ","  Rstrings are deleted"
310 DATA "[line] [,line] [?] Sstring","Search for Sstring. ? = prompt"
320 DATA "[n] W                    ","Write n lines to diskette"
330 ON ERROR GOTO 510
340 FOR I= 1 TO 99
350 READ KEYS$(I), MEANING$(I)
360 NEXT I
370 K=I-1
380 FOR I = 1 TO K
390 PRINT TAB(0);KEYS$(I);TAB(30);MEANING$(I)
400 IF I MOD 20 <> 0 THEN GOTO 450
410 'Page is full
420 PRINT : INPUT "Press enter to continue",X$ : CLS
430 PRINT "EDLIN Commands"
440 PRINT "--------------"
450 NEXT I
460 PRINT
470 INPUT "Press Enter.",ENTER$
480 KEY ON
490 CHAIN DRIVE$+"menu"
500 END
510 IF ERR=4  THEN GOTO 370
520 ON ERROR GOTO 0
530 RESUME
```
{% endraw %}

## FILELIST.BAS

{% raw %}
```bas


1 'IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMQMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
2 ':  A File Listing Program        3    FILELIST.BAS          Version 1.1   :
3 'GDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD6
4 ':  (C) Copyright 1982            3 CREATED 03/30/82     UPDATED 07/05/82  :
5 ':  Webb B. Blackman,Jr.          3 Written for the IBM Personal Computer  :
6 ':  10330 Qualla Road             3   with one disk drive/48K RAM/IBM PC   :
7 ':  Chesterfield, VA 23832        3   DOS                                  :
8 ':  (804) 790-1007                3 Author:  Webb B. Blackman,Jr.          :
9 'HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<
10  CLS:KEY OFF: GOTO 35
11  '**STRINGS
12  A% = 1:GOTO 15
13  '**NUMBERS
14 A%=0
15 Y% = CSRLIN:X%=1+POS(0):TT$="":TTA$="":I%=0
16 T$ = INKEY$:IF T$="" THEN 16
17 IF T$ =CHR$(13) THEN IF A%=0 THEN 27 ELSE 26
18 IF T$ =CHR$(8) THEN 23
19 IF T$ =CHR$(0)+CHR$(75) THEN 23
20 IF T$=CHR$(44) THEN TTA$=TTA$+T$:TT$=TT$+CHR$(32):GOTO 22
21 TT$ =TT$ + T$:TTA$=TTA$ + T$
22 I%=I%+1:LOCATE Y%,X%:PRINT TTA$:GOTO 16
23 I% = I% -1:IF I% < 0 THEN I%=1
24 TTA$ = MID$(TTA$,1,I%):TT$ = MID$(TT$,1,I%)
25 LOCATE Y%,(X%+I%):PRINT " ":GOTO 16
26 DAT0$ = TTA$:RETURN
27 DAT0# = VAL(TT$):RETURN
28 '*BOX SUB**
29 CLS:LOCATE 2,2,0:A$=CHR$(201)+STRING$(75,205)+CHR$(187):PRINT A$;
30 A$=CHR$(186):FOR I%=1 TO 20:LOCATE 2+I%,2:PRINT A$;:LOCATE 2+I%,78
31 PRINT A$;:   NEXT:LOCATE 23,2,0:A$=CHR$(200)+STRING$(75,205)+CHR$(188):PRINT    A$;:RETURN
32 '**CONT**
33 LOCATE 23,28,0:COLOR 16,7,0:PRINT"Press Space Bar To Continue";:COLOR 7,0,0
34 MT$=INKEY$:IF MT$="" THEN 34 ELSE IF MT$=" " THEN RETURN ELSE 34
35 '**TITLE
36 GOSUB 28:LOCATE 5,31:PRINT "<<< File List >>>":LOCATE 12,30:PRINT "Webb B. Blackman,Jr."
37 LOCATE 18,33:PRINT"July 5, 1982"
38 LOCATE 20,34:PRINT"Version 1.1":GOSUB 32:CLS
39 GOSUB 28:LOCATE 3,27,0:COLOR 16,7,0:PRINT "<<< Filecopy Selection >>>"
40 COLOR 7,0,0:LOCATE 6,5,0:PRINT "Selection:"
41 LOCATE 8,10,0:COLOR 16,7,0:PRINT "S";:COLOR 7,0,0:PRINT "elect File,";
42 COLOR 16,7,0:PRINT "L";:COLOR 7,0,0:PRINT "ist File,";:COLOR 16,7,0:PRINT "E ";:COLOR 7,0,0
43 PRINT"nd :  ";:COLOR 0,7,0:PRINT"   ";:LOCATE 8,39,0:SL$=INKEY$:COLOR 7,0,0
44 IF SL$<>"S" AND SL$<>"s" AND SL$<>"L" AND SL$<>"l" AND SL$<>"E" AND             SL$<>"e" THEN 41
45 IF SL$="S" OR SL$="s" THEN GOSUB 56:GOTO 39
46 IF SL$="E" OR SL$="e" THEN CLS:SYSTEM:END
47 '**Listing of File
48 CLS:LINENUM = 1
49 IF EOF(1) THEN 55 ELSE LINE INPUT #1,L$:PRINT L$
50 IF INKEY$ = CHR$(27) THEN 39 ELSE IF L$="" THEN LINENUM=LINENUM+1:GOTO 52
51 LINENUM = LINENUM + INT((LEN(L$)+79)/80)
52 IF LINENUM > 21 THEN LINENUM = 1 ELSE 49
53 LOCATE 25,21:COLOR 16,7:PRINT "Press Control Bar To Continue Listing";
54 T$=INKEY$:IF T$=""THEN 54 ELSE IF T$ = CHR$(32) THEN COLOR 7,0,0:CLS            :GOTO 49 ELSE 54
55 CLOSE #1:GOSUB 32:CLS:GOTO 39
56 'Select File
57 GOSUB 28:LOCATE 3,28,0:COLOR 16,7
58 PRINT"<<< File Entry Mode >>>":COLOR 7,0,0
59 LOCATE 6,5,0:PRINT "Drive (A or B)       :";:COLOR 0,7,0:PRINT "   ";
60 LOCATE 6,27,0:GOSUB 11:COLOR 7,0,0:DRV$=MID$(DAT0$,1,1)
61 IF DRV$ <> "A" AND DRV$ <>"B" AND DRV$<>"b" AND DRV$<>"a" THEN 59
62 LOCATE 8,5,0:PRINT "Enter File Name      :";:COLOR 0,7,0:PRINT "        ";
63 LOCATE 8,27,0:GOSUB 11:COLOR 7,0,0:FIL$ = DAT0$
64 LOCATE 10,5,0:PRINT "Enter File Extension :";:COLOR 0,7:PRINT "    ";
65 LOCATE 10,27,0:GOSUB 11:COLOR 7,0,0:EXT$ = DAT0$
66 OPEN "I",#1,DRV$+":"+FIL$+"."+EXT$:GOSUB 32:CLS:RETURN
67 END

```
{% endraw %}

## FILES205.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No  205   Batch and Misc DOS Utilities                     v1.1 DS2
------------------------------------------------------------------------
BAT      COM  V2.0 Extended Batch Language
BAT2DEMO BAT  BAT.COM demonstration
BAT2DOC  BAT  BAT.COM documentation and demonstrations
BROWSE   COM  View file contents - similar to CMS BROWSE command
BROWSE   DOC  Documentation
CGCLOCK2 COM  Color display clock, beeps every 15 minutes
CGCLOCK2 DOC  Documentation
CMD185   COM  Creates resident COMMAND.COM with good internal commands
CMD185   DOC  Documentation
CURSOR   COM  Changes cursor shape - enter "cursor8" for block shape
CV2      COM  Changes diskette labels under DOS2.0
EDLIN    BAS  Better documentation for EDLIN (Mel Rothman)
FILELIST BAS  Displays text files with pause for each full screen
KEY      BAS  Something like simple Prokey for DOS 2.0
NDOSEDIT COM  VM style editor for DOS commands, with command stack
NDOSEDIT DOC  Documentation
```
{% endraw %}

## KEY.BAS

{% raw %}
```bas
10 DEFINT A-Z:DIM CC$(31),EC$(132):REM CR$=CHR$(13)+CHR$(10)
20 ERA$=CHR$(29)+" "+CHR$(29):GOSUB 430
30 CLS:COLOR 9:PRINT "KEY ASSIGNMENT PROGRAM FOR DOS 2.0":PRINT:COLOR 7
40 PRINT"In order for this to work, you must have the ANSI.SYS file on your"
50 PRINT"boot disk, and the following statement in your CONFIG.SYS file:":PRINT:COLOR 15:PRINT"DEVICE=ANSI.SYS":COLOR 7
60 PRINT:INPUT "Enter filename to store assignments in: ",F$:PRINT:COLOR 7
70 PRINT"Enter a printable character to represent <return> in the following procedure,":INPUT "hit <return> for the default character (!): ",ESC$
80 IF ESC$="" THEN ESC$="!":OPEN F$ FOR APPEND AS #1:PRINT
90 INPUT "Do you wish to map all the DOS editing keys to the keypad? ",A$
100 IF (A$<>"y" AND A$<>"Y") THEN 190 ELSE COLOR 15
110 PRINT:K$="F2  ->  Crsr Up":PRINT K$
120 S$=K$+CHR$(27)+"[0;72;0;60p"+CR$:PRINT #1,S$
130 K$="F3  ->  End":PRINT K$
140 S$=K$+CHR$(27)+"[0;79;0;61p"+CR$:PRINT #1,S$
150 K$="F4  ->  Crsr Dn":PRINT K$
160 S$=K$+CHR$(27)+"[0;80;0;62p"+CR$:PRINT #1,S$
170 K$="F5  ->  Home":PRINT K$
180 S$=K$+CHR$(27)+"[0;71;0;63p"+CR$:PRINT #1,S$:COLOR 7
190 PRINT:PRINT "Hit the key or key combination to assign to, or ";ESC$;" to end: ";
200 B$=INKEY$:IF B$="" THEN 200 ELSE IF B$=ESC$ THEN 340
210 GOSUB 450:COLOR 15:PRINT K$:COLOR 7
220 PRINT "Enter the string to assign to this key; use ";ESC$;" for <return>:":COLOR 15:D$=""
230 LOCATE ,,1:A$=INKEY$:IF (A$="" OR LEN(A$)>1) THEN 230 ELSE IF A$=CHR$(13) THEN 260
240 IF A$<>CHR$(8) THEN D$=D$+A$:PRINT A$;:GOTO 230
250 IF LEN(D$)=0 THEN 230 ELSE D$=LEFT$(D$,LEN(D$)-1):PRINT ERA$;:GOTO 230
260 PRINT:PRINT:PRINT K$;"  =  ";D$:COLOR 7
270 INPUT "Is this ok? ",A$:A$=LEFT$(A$,1)
280 IF (A$<>"y" AND A$<>"Y") THEN PRINT "Discarded":GOTO 190 ELSE Z$=D$
290 Z=INSTR(Z$,ESC$):IF Z>0 THEN MID$(Z$,Z,1)=CHR$(13):GOTO 290
300 S$=CHR$(27)+"["
310 FOR I=1 TO LEN(B$):S$=S$+MID$(STR$(ASC(MID$(B$,I,1))),2,3)+";":NEXT
320 S$=K$+"  =  "+D$+S$+CHR$(34)+Z$+CHR$(34)+"p"+CR$ 'Final string
330 PRINT #1,S$:GOTO 190
340 CLS:CLOSE:PRINT "To assign the keys, simply TYPE ";F$;" once in DOS.":END
350 DATA Q,W,E,R,T,Y,U,I,O,P,,,,,A,S,D,F,G,H,J,K,L,,,,,,Z,X,C,V,B,N
360 DATA M,,,,,,,,,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,,,Home,Crsr Up
370 DATA Pg Up,,Crsr L,,Crsr R,,End,Crsr Dn,Pg Dn,Ins,Del
380 DATA F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
390 DATA F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
400 DATA F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
410 DATA PrtSc,Crsr L,Crsr R,End,Pg Dn,Home,1,2,3,4,5,6,7,8,9,0,-,=,Pg Up
420 DATA 2,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Esc,\,],6,-
430 KEY OFF:FOR I=1 TO 10:KEY I,"":NEXT:FOR I=16 TO 132:READ EC$(I):NEXT
440 FOR I=0 TO 31:READ CC$(I):NEXT:RETURN
450 IF LEN(B$)>1 THEN 490
460 IF B$>=" " THEN K$=B$:RETURN
470 IF B$=CHR$(27) THEN K$="Esc":RETURN
480 K$="Ctrl-"+CC$(ASC(B$)):RETURN
490 A=ASC(RIGHT$(B$,1))
500 IF A=3 THEN K$="Ctrl-2":RETURN
510 IF A=15 THEN K$="Shft Tab":RETURN
520 IF A=132 THEN K$="Ctrl-Pg Up":RETURN
530 IF A>119 THEN K$="Alt-"+EC$(A):RETURN
540 IF A>113 THEN K$="Ctrl-"+EC$(A):RETURN
550 IF A>103 THEN K$="Alt-"+EC$(A):RETURN
560 IF A>93 THEN K$="Ctrl-"+EC$(A):RETURN
570 IF A>83 THEN K$="Shft-"+EC$(A):RETURN
580 IF A>50 THEN K$=EC$(A):RETURN
590 K$="Alt-"+EC$(A):RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0205

     Volume in drive A has no label
     Directory of A:\

    BAT      COM      9728  11-07-83   4:28a
    BAT2DEMO BAT     10241   6-13-84  10:10p
    BAT2DOC  BAT     40167   6-13-84  10:08p
    BROWSE   COM      2848   4-09-84  10:11a
    BROWSE   DOC       466   1-01-80  12:20a
    CAT      COM      8591   4-14-84  11:15a
    CAT      DOC     14336   1-01-80  12:25a
    CGCLOCK2 COM      1024   9-30-83   3:45a
    CGCLOCK2 DOC      4096   9-30-83   3:44a
    CMD185   COM      7424   4-24-83  12:25a
    CMD185   DOC     11776   4-23-83  11:56p
    CURSOR   COM        24   1-01-84   2:57a
    CV2      COM       512   1-01-80  12:30a
    EDLIN    BAS      2048   1-01-80  12:07a
    FILELIST BAS      3712   1-01-80  12:40a
    FILES205 TXT      1046   1-04-80   2:59a
    KEY      BAS      2684   5-17-83  11:22p
    NDOSEDIT COM      2560   6-08-84   1:13p
    NDOSEDIT DOC      5632   6-08-84   1:12p
           19 file(s)     128915 bytes
                           28160 bytes free
