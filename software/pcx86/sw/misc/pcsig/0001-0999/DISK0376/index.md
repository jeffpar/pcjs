---
layout: page
title: "PC-SIG Diskette Library (Disk #376)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0376/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0376"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PATCHES"

    PATCHES is our mega-collection for unprotecting and patching specific
    programs.  The programs on this disk allow you to place the indicated
    programs on your hard disk or to make backup copies, inspect file
    descriptions, and includes a multitude of information on such subjects
    as BASIC patches, CLOCKS, VisiCalc back-up, WORDSTAR 3.3 PATCH FOR PC
    AT.  There is even a demonstration of building and searching a tree
    structure, and how to run a non-serialized program with PRO Basic.
    
    Check carefully to be sure your program's unprotect program is here by
    version.
    
    System Requirements: Some programs require BASIC
    
    How to Start: Except for three litte BASICs, these are all
    documentation files (suffix .UNP (for unprotect), .DOC (for DOCument),
    or .TXT (for TeXT) files.  Screen read with TYPE, then PRINT what you
    need.
    
    File Descriptions:
    
    123      UNP  How to make backup copy of 123 (& run without key disk)
    123A     UNP  How to make backup copy of 123 Ver A (& run w/o key disk)
    123-LOGO PAT  How to eliminate 123 logo page
    DB3ZAP   BAT  Batch file for unprotecting DBIII
    BASRUN   PAT  Latest BASRUN patches
    BASLIB   PAT  Latest BASLIB patches
    BASCOM   PAT  Latest BASCOM patches
    BASCOM   FIX  Documentation for patching bugs in Basic Compiler Ver 1.0
    NEWCOLOR 123  Changes colors displayed by original 123
    8088     TXT  How to identify defective 8088 chips which crash systems
    123STAR  UNP  How to make backup copy of 123 Ver A*
    EWBACKUP UNP  How to make backup copy of EasyWriter 1.0
    DSKCPY20 MOD  Modifies DISCOPY to eliminate messages to user
    DOS_ERR  DOC  How to fix 'C' programs to bypass DOS 2.0 redirection bug
    FRMWK1   DOC  How to make backup copy of Framework Ver 1.0
    DOSBUG   MOD  Fixes DOS 1.1 bug relating to random access I/O
    DB3-NEW  DOC  Documentation for DB3ZAP.UNP and DB3ZAP.BAT
    COMMOD   TXT  Adds resident commands to COMMAND.COM
    VCBACKUP DOC  How to backup VisiCalc disk (1982 version)
    COMMAND  MOD  Makes transient portion of COMMAND.COM be resident at IPL
    COMCOM20 PAT  DOS 2.0 patch parameters for COMMAND.MOD
    CLOCKFIX SYS  Installable driver to replace PC DOS2.0 CLOCK$
    CLOCKFIX DOC  Info on PC DOS 2.0 CLOCK$; not to change date at midnight
    XTALK    PAT  Bypass the sign-on screen on Crosstalk Rel 3.4
    FILECMD  PAT  Add color to IBM's FileCommand
    C86MOD   DOC  Enables C86 function MAIN to return error code to DOS 2.0
    DB3ZAP   UNP  Parameters needed by DB3ZAP.BAT
    FIND     MOD  Patch to eliminate header inserted by DOS 2.X FIND filter
    PROKEY   UNP  How to backup PROKEY V3.0
    PRINT20  DOC  Patch so DOS 2.0 PRINT.COM skip prompt for list device
    POOLCOPY DOC  Patch to fix POOLCOPY monitor bug and to make backup copy
    PE-LOGO  PAT  Patch to eliminate logo screen on IBM Personal Editor
    PE-COLR  MOD  Patch to set colors in IBM Personal Editor
    FRMWK1   UNP  Parameters needed by FRMWK1.BAT
    PCM      UNP  How to make copy of IBM Personal Comm. Manager V 1.0
    PATCHER  BAS  How to patch other programs using patch (.PAT) data file
    FRMWK1   BAT  Batch file to backup Framework (see FRMWK1.DOC)
    NORTONS  MOD  Patch to Norton Utilities V2.01: access tracks above #39
    MEMSHIFT UNP  How to make backup copy of MEMORY/SHIFT
    LAYOUT   UNP  How to make backup copy of PROKEY 3.0
    JRAM123  MOD  How to use 123 V1.0 with JRAM memory board in IBM-XT
    GENPATCH BAS  Generates patches for PATCHER.BAS
    FORMAT20 MOD  Patch to cause DOS 2.0 FORMAT to prompt for volume label
    FLT-SIM  MOD  Allows RGB monitor to show colors using Flight Simulator
    DB3      UNP  Used in conjunction with DB3ZAP.UNP
    SK100A   UNP  How to backup Side Kick 1.00A (another version)
    SK110A   UNP  How to backup Side Kick 1.10A (another version)
    NEWCOLOR IN   Unidentified color patches
    RESCMD   DOC  Documentation to RESCMD.BAS
    RESCMD   BAS  Program to make COMMAND.COM totally memory resident
    XTFORMAT DOC  Batch utility for PC XT allows user to format A: only
    TIME-MGR UNP  How to backup IBM Time Manager
    SAMNA    UNP  How to backup SAMNA WORD II Ver 1.1
    COPYWRIT UNP  How to backup Copywrit
    RB4000   UNP  How to backup RB4000 Ver 1.11
    TKSOLVER UNP  How to backup TK Solver Ver TK-1(2J)
    CLOUT384 UNP  How to backup Clout V1.0 384K Disk 1
    CLOUT256 UNP  How to backup Clout V1.0 256K Disk 1
    WS33-AT  PAT  Patch to allow Wordstar 3.3 to work properly on the PC AT
    MSWORD   UNP  How to backup Microsoft Word
    BASIC2   MOD  Patch to fix LOF bug in BASIC and BASICA 2.0
    ML28-30  UNP  How to backup MultiLink Ver 2.08,2.08c, and 3.00c
    --NOTICE ---  Information on copyright law and file extensions
    SYMPHONY UNP  Program to run Symphony Ver 1.0 without a key disk
    SYMPH    COM  Executable version of program given in SYMPHONY.UNP
    SYMPH    DOC  Explanation of the instructions for SYMPHONY.UNP
    TREE     BAS  Demonstrates building and searching a tree structure
    SARGON3  UNP  How to backup Sargon 3
    ZORK3    UNP  How to backup Zork III
    ZORK12   UNP  How to backup Zork I and Zork II
    FLGHTSIM UNP  How to backup Microsoft Flight Simulator Ver 1.00
    MLINK207 UNP  How to backup MultiLink Ver 2.07
    SK111A   UNP  How to backup Side Kick Ver 1.11A
    MULTILNK UNP  How to backup MultiLink Ver 2.06
    MLINK206 UNP  Notes to accompany MULTILNK.UNP
    TKNEW    UNP  How to backup TK Solver TK-1(2J)/PC-DOS/IBM5150
    SK       UNP  How to backup Side Kick Ver 1.00A
    XENOCOPY UNP  How to backup Xenocopy Plus Ver 1.09
    TIMEMGR  UNP  How to backup Time Manager Ver 1.00
    SK111C   UNP  How to backup Side Kick Ver 1.11C
    TANK     UNP  How to backup ThinkTank Ver 1.00 and Ver 1.001
    PFS-PROG UNP  How to backup PFS File/Report/Write
    HPMV116  UNP  How to backup Harvard Project Manager V1.16
    HARVARD  UNP  How to backup Harvard Project Manager V1.1
    PROBASIC UNP  Run a non-serialized program with Pro Basic by Morgan
    PCDRAW14 UNP  How to backup PC-Draw V1.4
    PCDRAW   UNP  How to backup PC-Draw V1.2
    MLINK    UNP  How to backup Multilink 2.07
    FLTSIM   UNP  How to backup Flight Simulator Ver 1.00
    EXECUVSN UNP  How to backup ExecuVision for Dos 1.1
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 8088.TXT

{% raw %}
```

     As many of you may be aware,  Intel's 8088 chip is available 
in two styles.  The original chip,  which Intel released up until 
1982,  and  a new chip since 1982.  The reason for the release of 
the new chip is apparent;  the original chip does not conform  to 
the  specifications  that  Intel printed in the  Intel  Handbook. 
     A detailed  discussion is given in an article by Will Fastie 
in PC Tech Journal vol 1:  no 2,  p 106. The older chip allows an 
interrupt before the SP register is updated,  which may push  the 
CS and IP flags into the wrong area of memory.  The result can be 
a  system lockup,  crash,  etc.  There are two ways to  determine 
which  chip is in your PC.  The older chip bears a copyright date 
of 78. The newer chip bears a copyright date of 78,81. The second 
way to check is to use DEBUG to step through increments and check 
the  registers.  The following steps were printed in the  article 
mentioned above.
In DOS 2.0: enter DEBUG
      what you enter                            response
     -A 100                                    XXXX:0100
(use the value XXXX your system returns)
     XXXX:0100 MOV ES,AX
     XXXX:0102 INC AX
     XXXX:0103 INC AX
     XXXX:0104   press enter
     -T                                     display of  all 
                                            registers

For DOS 1.0 or 1.1 :enter DEBUG
     -E  100                                XXXX:0100  xx:8E 
                                             xx.CO xx.40 xx.40
     -T

    If  the  value returned for AX is 0 then you've got  the  old 
chip. A value of 1 will be returned by the new chip.
     I spoke to IBM regarding this,  and they have stated that as 
far  as  they  are  concerned,   the  old  chip  satisfies  IBM's 
requirements.  IBM  will not replace the defective chips  (unless 
you  pay the $200+ for the 8088/8087 pair).  While many PC  users 
eagerly await full implementation of the 8087 chip,  I feel  that 
it  is  a  bit tacky for a company that is cornering the  16  bit 
arena to take such a position. IBM has at least given lip service 
to  large  user  groups such as the CPC.  I  think  it  would  be 
appropriate  for the CPC to voice an objection to IBM's policy on 
the recall of these chips.
```
{% endraw %}

## C86MOD.DOC

{% raw %}
```
Author:
-------
   Michael Evans   (312) 329-6302 days.

Summary:
--------
      The following patch to any EXE type file created by the C86 linker (cl)
   will allow the return code from function MAIN to be passed to DOS 2.0.
   Once applied, the ERRORLEVEL batch facility in DOS 2.0 may be used
   to evaluate the returned value from a C86 program.  One handy implementation
   is patching the EXE files provided with the C86 system so that a batch file
   can test for successful completion of the various C86 programs.

       Restrictions: a. DOS 2.0 only allows for an 8 bit return code, thus the
			16 bit result from C86 will be folded via OR to 8 bits.
		     b. Once patch is applied, modules are not downward
			compatible from DOS 2.0.

	      Notes: a. ALL values mentioned below are HEXADECIMAL.
		     b. When looking at a word in storage, remember that it
			is stored LEAST significant byte first.
		     c. ALWAYS assume SIGNED quantities unless otherwise noted.
		     d. This patch was tested on software supplied as
			version 1.33D from CI.
		     e. NEVER alter the original CI release diskettes.
		     f. Abort the procedure if any verifications do not match,
			the patch will only work if installed exactly as shown.

Procedure:
----------

   1. Copy filename with EXE extension to one with a ZAP extension.

   2. Load the filename.ZAP file under DEBUG.

   3. Locate the program entry point as follows:
      a. At offset 108 in the file is a word containing the header size
	 in paragraphs, multiply this value by 10.
      b. Perform an addition of the words at file offsets 114 and
	 116.
      c. The entry point of the program is 100 + (step 3.a) + (step 3.b).

   4. The byte at location (step 3.c) must be an E9, if not, recheck the
      preceding steps.

   5. The file offset to $MAIN is: 3 + (step 3.c) + the contents of the word
      at file offset ((step 3.c) + 1).

   6. Locate the following string within 8 bytes of (step 5) + 58:
      8A 1E nn nn 0A DB 74 35 78 04  (nn means don't care).

   7. Considering the file offset of the string in step 6 as BASE, make the
      following modifications:
      a. Move 2 bytes from BASE + 2 to BASE + 4.
      b. Change bytes starting at BASE to: 0A C4 D0 26
      c. Change bytes starting at BASE + 6 to: 72 06 74 31
      d. Verify at BASE + D: 2F, change to: 2D
      e. Verify at BASE + 35: 76 05 8B 6E 00 EB D3 58,
		   change to: 8B 6E 00 77 D5 58 B4 4C
      f. Verify at BASE + 3E: 20, change to: 21

   8. Update filename.ZAP with W subcommand of DEBUG, then exit via Q.

   9. Rename filename.ZAP to filename.EXE.

```
{% endraw %}

## CLOCKFIX.DOC

{% raw %}
```
A week or so ago, I appended a note to DOS2 BUGS about the fact that the
date in PCDOS 2.00 doesn't automatically increment at midnight. As a
bypass for this problem (until it's fixed), I dis-assembled the builtin
CLOCK$ device driver, fixed the "bug," assembled it, and re-installed it
as a replacement CLOCK$ device driver. The Yorktown IBMPC file is called
CLOCKFIX SYSTBH. To use it, you must first retrieve it using B3101 or
B3277 and name it CLOCKFIX.SYS. Then you must add the filename to your
CONFIG.SYS (or create a new CONFIG.SYS) in a line:  DEVICE=CLOCKFIX.SYS

This is pretty well described in the DOS 2.00 manual section on
"Installable Device Drivers." Except for the filename, the instructions
are the same as those for installing ANSI.SYS.

I have been using this driver for several days and have noticed no
problems. Yes, the system-date now changes at midnight.

 Larry Rosen	 HONE1(B007E)	  Chicago, IL	  TL 261-3959


```
{% endraw %}

## COMMOD.TXT

{% raw %}
```
a 1ed
;this file contains the code to modify command.com in several ways
; 1) increases command.com's size by 1k and intercepts the command processor
;               (see PC August 7,1984 "Get SET for Speed")
;
; 2) adds 4 Resident commands to command.com
;       these commands are:
;               i) a utility to switch from 80col. mono to 40
;                  col. color.  This command is invoked by
;                  type s <space> <return> at the Dos prompt.
;                  Note that there must be a space following
;                  the letter s.  After this command is entered
;                  the active screen will change over to the unactive
;                  one.
;
;              ii) a modified file deletion routine similar to
;                  VDEL.COM.  The command is invoked by typing
;                  d <space> drive id. (not neccessary) file
;                  deliminators <return> at the Dos prompt.
;                  For example d b:*.bas  Files which have the
;                  attribute Read Only will generate the error
;                  message 'Access Denied' and will not be deleted.
;
;             iii) a utility to change the attribute of files
;                  between Read/Write and Read Only, or Hidden
;                  and Unhidden, or System and Non-System.  The
;                  command is invoked by typing a <space> 'x' filespec
;                  at the Dos prompt.  The 'x' must be replaced by
;                  one of the following valid commands.
;                       c - current attributes of file
;                       r - toggle Read/Write / Read Only
;                       h - toggle Hidden/Unhidden
;                       s - toggle System/Non-System
;
;                  For example.  a c command.com
;                    will display the current attributes of command.com
;
;              iv) a utility to beep the speaker.  Invoked by typing
;                  b <space> <return>.  For use in batch files
;                  the b <space> must be followed by any character.
;                  This is to keep the <space> after the b from
;                  being truncated.
;
; ****  To add these commands to command.com type the following at the
;       Dos prompt
;                       DEBUG COMMAND.COM < COMMOD.TXT <return>
;
; At the current time I have not documented this modification.  If anyone
;has any questions drop me a message.  If anyone has any specs. on making
;this modification DOS 2.1 compatible please let me know!  This shouldn't
;be too hard - all that is required is the addresses for making command.com
;larger.
;
;NOTE: For anyone examining the code they will note that all references to
;data areas are smaller by hex 10C0.  This is not a bug - it is like this due
;the way command.com loads.
;
; Mike Cumming
; 94 Aldershot Blvd
; Wpg, Man.
; Compuserve 70376,466
;
add dx,3270  ; this set of code increases command.com's size
 
a 3ad
cmp bx,3b0
 
a 3cd
sub bx,390
 
a 691
mov cx,37be
 
a 6a9
cmp cx,37be
 
a c9d
sub ax,390
 
a 140b
call 4030
 
m 4030 4580 4430
f 4030 442f 0
r cx
4900
a 4030
MOV     SI,2B8B         ; This section of code intercepts the command
CLD                     ; processor and decides whether any action
LODSB                   ; should be taken
PUSH    AX
LODSB
CMP     AL,20
POP     AX
JNZ     405F
AND     AL,DF
CMP     AL,53
JZ      4077
CMP     AL,44
JZ      40A3
CMP     AL,41
JZ      4066
CMP     AL,42
JZ      4070
CMP     AL,FF
JZ      406D
CMP     AL,FF
JZ      4072
JMP     405E
MOV     DI,2B8B
MOV     AX,0D0D
STOSW
PUSH    CS
POP     ES
MOV     CX,0886
JMP     CX
JMP     4160
NOP
NOP
NOP
NOP
NOP
NOP
NOP
JMP     425E
NOP
NOP
NOP
NOP
 
a 4077
PUSH    DS              ; this section of code switches screens
MOV     AX,0040
MOV     DS,AX
MOV     AL,[0010]
PUSH    AX
AND     AL,30
CMP     AL,30
POP     AX
JZ      4094
OR      AL,30
MOV     [0010],AL
MOV     AX,0007
INT     10
JMP     40A0
AND     AL,CF
OR      AL,20
MOV     [0010],AL
MOV     AX,0001
INT     10
POP     DS
JMP     4058
 
a 40a3
MOV     DX,2C4F         ; this is the random delete code
MOV     AH,1A
INT     21
MOV     SI,2B8D
LODSB
CMP     AL,0D
JNZ     40AD
MOV     DI,SI
SUB     DI,01
MOV     AL,00
STOSB
MOV     DX,2B8D
MOV     AH,4E
INT     21
JB      40F1
MOV     DX,305B
MOV     AH,09
INT     21
MOV     SI,2C6D
LODSB
CMP     AL,00
JZ      40DA
MOV     DL,AL
MOV     AH,02
INT     21
JMP     40CD
MOV     DX,3066
MOV     AH,09
INT     21
MOV     AH,01
INT     21
AND     AL,DF
CMP     AL,59
JZ      40FB
MOV     AH,4F
INT     21
JMP     40C1
MOV     DX,3070
MOV     AH,09
INT     21
JMP     4058
MOV     SI,2C6D
MOV     DI,2B8F
LODSB
STOSB
CMP     AL,00
JNZ     4101
JMP     424E
MOV     AH,41
INT     21
JB      4112
JMP     40EB
MOV     AH,09
MOV     DX,308E
INT     21
JMP     40EB
 
a 4160
MOV     SI,2B8F         ; this code alters attribute bytes of files
LODSB
CMP     AL,0D
JNZ     4163
MOV     AL,00
MOV     [SI-01],AL
MOV     DX,2B8F
MOV     AH,43
INT     21
JB      41DE
MOV     AL,[2B8D]
AND     AL,DF
CMP     AL,43
JZ      419D
CMP     AL,52
JNZ     4187
XOR     CX,0001
CMP     AL,53
JNZ     418F
XOR     CX,0004
CMP     AL,48
JNZ     4197
XOR     CX,0002
MOV     AL,01
MOV     AH,43
INT     21
MOV     AH,09
MOV     BX,CX
AND     BX,00FE
CMP     BX,CX
JZ      41AE
MOV     DX,313E
JMP     41B1
MOV     DX,314B
INT     21
MOV     BX,CX
AND     BX,00FD
CMP     BX,CX
JZ      41C2
MOV     DX,315A
JMP     41C5
MOV     DX,3165
INT     21
MOV     BX,CX
AND     BX,00FB
CMP     BX,CX
JZ      41D6
MOV     DX,3172
JMP     41D9
MOV     DX,317E
INT     21
JMP     4058
MOV     DX,3128
MOV     AH,09
INT     21
JMP     4058
 
a 424e
MOV     DX,2B8D         ; these few lines are to fix a small bug that
MOV     AL,[2B8E]       ; was in the random delete.  It was placed here
CMP     AL,3A           ; because of the difficulty of moving all the
JZ      425B            ; code that was above it
MOV     DX,2B8F
JMP     410A
 
a 425e
MOV     BX,05DC         ; this code beeps the speaker
IN      AL,61
PUSH    AX
AND     AL,FC
OUT     61,AL
MOV     CX,0032
LOOP    426B
OR      AL,02
OUT     61,AL
MOV     CX,0032
LOOP    4274
DEC     BX
JNZ     4264
POP     AX
OUT     61,AL
JMP     4058
 
;the following data is for error messages etc.
 
e 411B
0D 0A 0A 44 65
e 4120
6C 65 74 65 20 24 20 28 79 2F 6E 29 20 3F 20 24
e 4130
0D 0A 0A 4E 6F 20 6D 6F 72 65 20 6D 61 74 63 68
e 4140
69 6E 67 20 66 69 6C 65 73 2E 0D 0A 0A 24 20 20
e 4150
07 41 63 63 65 73 73 20 44 65 6E 69 65 64 2E 24
e 41E8
0A 0A 0D 46 69 6C 65 20
e 41F0
6E 6F 74 20 66 6F 75 6E 64 0D 0A 0A 24 0D 0A 52
e 4200
65 61 64 20 4F 6E 6C 79 20 20 24 0D 0A 52 65 61
e 4210
64 2F 57 72 69 74 65 20 20 24 0D 0A 48 69 64 64
e 4220
65 6E 20 20 24 0D 0A 55 6E 48 69 64 64 65 6E 20
e 4230
20 24 0D 0A 53 79 73 74 65 6D 0D 0A 0A 24 0D 0A
e 4240
4E 6F 6E 2D 53 79 73 74 65 6D 0D 0A 0A 24
 
w
q
```
{% endraw %}

## DB3-NEW.DOC

{% raw %}
```
USING DB3ZAP.UNP AND DB3ZAP.BAT DBASEIII IS DEBUGGED. IT WILL RUN DOS
PROGRAMS. IT STILL LOOKS TO DRIVES A AND B, HOWEVER.

PLACE:

DBASE.EXE - A COPY, NEVER THE ORIGINAL
DEBUG.COM
DB3ZAP.UNP
DB3ZAP.BAT

ON A DISKETTE.

TYPE DB3ZAP <ENTER>

WHEN DONE, YOU HAVE DBASEIII WITHOUT PROLOK TO HINDER YOU!!!
```
{% endraw %}

## DOS_ERR.DOC

{% raw %}
```

	    DOS 2.0 HAS PROBLEMS WITH REDIRECTION OF I/O

     There  are  problems  in  DOS  2.0 with the redirection of I/O and
 piping for programs that use the original  DOS  1.1  INT  21  function
 calls	for  input.   This  problem  is  readily apparent to users of C
 language packages such as Computer  Innovation  C-86,	Lattice  C,  or
 Microsoft  C  (you'd  think  they  would  get it right!).  One problem
 is that all output to the screen is redirected,  even	keyboard  echo.
 Correct  operation  would  redirect  all program output for the screen
 (stdout) to the specified >file, but the echo of keyboard input  would
 still	be  sent  to  the  screen.  Instead, both the keyboard echo and
 the program output are sent to the redirected	>file.	 Thus,	if  you
 run  programs	such as the CAT.C (K&R,page 154) example that Microsoft
 distributes with their C; or COPYIO.C (K&R,page 15)  with  the  output
 redirected to a file, you will get the following results:

      1.   Under  DOS  1.1, keyboard input is echoed to the screen
      as you type and each line  appears  in  the  >file  once	as
      expected.

      2.   Under  DOS  2.0,  keyboard  input  is not echoed to the
      screen, but each line appears in the >file twice!

     This situation is handled correctly in DOS  2.0  if  the  new  INT
 21  function call 3F is used.	This can be demonstrated by redirecting
 output for the DOS 2.0 function MORE - it works as desired.

     The redirecting of input to these programs doesn't  work  properly
 either.   If  the  file  has  not been edited with debug to end with a
 control-Z, the program will hang up at the end  of  the  <input  file.
 You  must reboot the system to continue!  Also, if you pipe the output
 of the first program into a second  program,  the  final  output  will
 contain  each	line  four times, doubled spaced after the second line!
 These problems do not occur for programs that	use  the  new  DOS  2.0
 calls for I/O, such as SORT and MORE.

     The  question  now  is  how  do  you fixup C programs to run under
 DOS 2.0 and not redirect keyboard echo to the stdout file?  The easiest
 way for C compilers that include their  own  redirection  code  is  to
 change their redirection symbols from <, >, and >> to something else. Then
 DOS  2.0  won't  do  the redirection, so the C code will be able to do
 it correctly.	With the Microsoft C compiler, this is easily accomplished
 by modifying three lines of code in _MAIN.C.	A  good  choice  is  to
 modify  _MAIN.C  so  that  it	redirects  on the symbols {, }, and }}.
 The only restriction is that these symbols then  should  not  be  used
 in  filenames.   With these changes, the user can choose to let either
 DOS  <, >, >>	or C  {, },  }}   do  the  redirecting.   The  modified
 version  of  _MAIN.C  is compiled to obtain a new _MAIN.OBJ, which can
 either be put into the library MC.LIB to replace  the	original  _MAIN
 by  using  the  LIB.EXE  utility,  i.e.     LIB   MC.LIB  -_MAIN+_MAIN
 or it can be kept separate.  If kept  separate,  remember  to	include
 it  in  the  list  of	.OBJ  files  specified	in  the LINK call, i.e.
 LINK c _main myprogram.

     The three lines to change in Microsoft C's  _MAIN are:
	  case '{':
	  case '}':
	  if (*line == '}')

     Kludgy, yes, but it works better than before!!	 WHR	9-26-83
END OF TRANSFER - PRESS ENTER TO RETURN TO MENU
= '}
```
{% endraw %}

## FILES376.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 376   Patches                                           V1 DS
------------------------------------------------------------------------
The programs on this disk allow you to place the indicated programs on your
hard disk or to make backup copies.
 
123      UNP  How to make backup copy of 123 (& run without key disk)
123-LOGO PAT  How to eliminate 123 logo page
123A     UNP  How to make backup copy of 123 Ver A (& run without key disk)
123STAR  UNP  How to make backup copy of 123 Ver A*
8088     TXT  How to identify defective 8088 chips which crash systems
NEWCOLOR 123  Changes colors displayed by original 123
BASCOM   FIX  Documentation for patching bugs in Basic Compiler Ver 1.0
BASCOM   PAT  Latest BASCOM patches
BASLIB   PAT  Latest BASLIB patches
BASRUN   PAT  Latest BASRUN patches
DB3ZAP   BAT  Batch file for unprotecting DBIII
DB3ZAP   UNP  Parameters needed by DB3ZAP.BAT
C86MOD   DOC  Enables C86 function MAIN to return an error code to DOS 2.0
FILECMD  PAT  Add color to IBM's FileCommand
XTALK    PAT  Bypass the sign-on screen on Crosstalk Rel 3.4
CLOCKFIX DOC  Info on PC DOS 2.0 CLOCK$ that doesn't change date at midnight
CLOCKFIX SYS  Installable driver to replace PC DOS2.0 CLOCK$
COMCOM20 PAT  DOS 2.0 patch parameters for COMMAND.MOD
COMMAND  MOD  Makes transient portion of COMMAND.COM become resident at IPL
VCBACKUP DOC  How to backup VisiCalc disk (1982 version)
COMMOD   TXT  Adds resident commands to COMMAND.COM
DB3-NEW  DOC  Documentation for DB3ZAP.UNP and DB3ZAP.BAT
DOSBUG   MOD  Fixes DOS 1.1 bug relating to random access I/O
FRMWK1   DOC  How to make backup copy of Framework Ver 1.0
DOS_ERR  DOC  How to fix 'C' programs to get around DOS 2.0 redirection bug
DSKCPY20 MOD  Modifies DISCOPY to eliminate messages to user
EWBACKUP UNP  How to make backup copy of EasyWriter 1.0
FIND     MOD  Patch to eliminate header inserted by DOS 2.X FIND filter
FLT-SIM  MOD  Allows an RGB monitor to show colors using Flight Simulator
FORMAT20 MOD  Patch to cause DOS 2.0 FORMAT to prompt for volume label
GENPATCH BAS  Generates patches for PATCHER.BAS
JRAM123  MOD  How to use 123 V1.0 with JRAM memory board in IBM-XT
LAYOUT   UNP  How to make backup copy of PROKEY 3.0
MEMSHIFT UNP  How to make backup copy of MEMORY/SHIFT
NORTONS  MOD  Patch to Norton Utilities V2.01 to access tracks beyond #39
FRMWK1   BAT  Batch file to backup Framework (see FRMWK1.DOC)
PATCHER  BAS  Program to patch other programs using a patch (.PAT) data file
PCM      UNP  How to make backup copy of IBM Personal Comm. Manager V 1.0
FRMWK1   UNP  Parameters needed by FRMWK1.BAT
PE-COLR  MOD  Patch to set colors in IBM Personal Editor
PE-LOGO  PAT  Patch to eliminate logo screen on IBM Personal Editor
POOLCOPY DOC  Patch to fix POOLCOPY monitor bug and to make backup copy
PRINT20  DOC  Patch to have DOS 2.0 PRINT.COM skip prompt for list device
PROKEY   UNP  How to backup PROKEY V3.0
NEWCOLOR IN   Unidentified color patches
RESCMD   BAS  Program to make COMMAND.COM totally memory resident
RESCMD   DOC  Documentation to RESCMD.BAS
SAMNA    UNP  How to backup SAMNA WORD II Ver 1.1
TIME-MGR UNP  How to backup IBM Time Manager
XTFORMAT DOC  Batch utility for a PC XT that allows user to format A: only
BASIC2   MOD  Patch to fix LOF bug in BASIC and BASICA 2.0
MSWORD   UNP  How to backup Microsoft Word
WS33-AT  PAT  Patch to allow Wordstar 3.3 to work properly on the PC AT
CLOUT256 UNP  How to backup Clout V1.0 256K Disk 1
CLOUT384 UNP  How to backup Clout V1.0 384K Disk 1
TKSOLVER UNP  How to backup TK Solver Ver TK-1(2J)
RB4000   UNP  How to backup RB4000 Ver 1.11
COPYWRIT UNP  How to backup Copywrit
EXECUVSN UNP  How to backup ExecuVision for Dos 1.1
FLTSIM   UNP  How to backup Flight Simulator Ver 1.00
MLINK    UNP  How to backup Multilink 2.07
PCDRAW   UNP  How to backup PC-Draw V1.2
PCDRAW14 UNP  How to backup PC-Draw V1.4
PROBASIC UNP  How to run non-serialized program with Pro Basic by Morgan
HARVARD  UNP  How to backup Harvard Project Manager V1.1
HPMV116  UNP  How to backup Harvard Project Manager V1.16
PFS-PROG UNP  How to backup PFS File/Report/Write
TANK     UNP  How to backup ThinkTank Ver 1.00 and Ver 1.001
SK111C   UNP  How to backup Side Kick Ver 1.11C
TIMEMGR  UNP  How to backup Time Manager Ver 1.00
XENOCOPY UNP  How to backup Xenocopy Plus Ver 1.09
SK       UNP  How to backup Side Kick Ver 1.00A
TKNEW    UNP  How to backup TK Solver TK-1(2J)/PC-DOS/IBM5150
MLINK206 UNP  Notes to accompany MULTILNK.UNP
MULTILNK UNP  How to backup MultiLink Ver 2.06
SK111A   UNP  How to backup Side Kick Ver 1.11A
MLINK207 UNP  How to backup MultiLink Ver 2.07
FLGHTSIM UNP  How to backup Microsoft Flight Simulator Ver 1.00
ZORK12   UNP  How to backup Zork I and Zork II
ZORK3    UNP  How to backup Zork III
SARGON3  UNP  How to backup Sargon 3
TREE     BAS  Demonstrates building and searching a tree structure
SYMPH    DOC  Explanation of the instructions for SYMPHONY.UNP
SYMPH    COM  Executable version of program given in SYMPHONY.UNP
SYMPHONY UNP  Program to run Symphony Ver 1.0 without a key disk
--NOTICE ---  Information on copyright law and file extensions
ML28-30  UNP  How to backup MultiLink Ver 2.08,2.08c, and 3.00c
SK110A   UNP  How to backup Side Kick 1.10A (another version)
SK100A   UNP  How to backup Side Kick 1.00A (another version)
DB3      UNP  Used in conjunction with DB3ZAP.UNP
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GENPATCH.BAS

{% raw %}
```bas
10 'GENPATCH - generates patches for PATCHER.BAS
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
90 'If offset is greater than 32,767, BAIC 2.00 must be used.
100 'DOS 2.00 should be used. If this is not possible, use RAM disk.
120 CLS
130 DEFINT A-Z
140 CLEAR
150 ON ERROR GOTO 510
160 INPUT "Old version of file";OFIL$
170 OPEN "i",#1,OFIL$   'check it is there
180 CLOSE 1
190 OPEN "r",#1,OFIL$,1 'open as random
200 FIELD 1,1 AS O$
210 INPUT "New version of file";NFIL$
220 OPEN "i",#2,NFIL$   'check it is there
230 CLOSE 2
240 OPEN "r",#2,NFIL$,1 'open as random
250 FIELD 2,1 AS N$
260 INPUT "File in which to save patches";DIF$
270 TMP$="GENPATCH.TMP"
280 OPEN "o",#3,TMP$    'write to temp file
290 FOR BYTE!=1 TO LOF(1)       'compare the bytes
300 GET 1,BYTE!
310 GET 2,BYTE!
320 IF O$=N$ THEN PRINT "*";: GOTO 380   'they are equal
330 OLDVAL=ASC(O$)      'convert to ascii
340 NEWVAL=ASC(N$)
350 PRINT #3, BYTE! "," OLDVAL "," NEWVAL
360 NEWSUM!=NEWSUM!+BYTE!+OLDVAL+NEWVAL  'keep checksum
365 PRINT: PRINT BYTE!, OLDVAL, NEWVAL,"Checksum ",NEWSUM!
370 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 370
380 NEXT BYTE!
390 CLOSE
400 OPEN "i",#1,TMP$    'copy temp file to patch file
410 OPEN "o",#2,DIF$
420 PRINT "Comments to be put in " DIF$;: INPUT  ""; COMMENT$
430 PRINT #2,NFIL$ "," NEWSUM! "," CHR$(34) COMMENT$ CHR$(34)   'add record
440 IF EOF(1) THEN 480
450 LINE INPUT# 1, X$
460 PRINT #2, X$
470 GOTO 440    'copy another record across
480 CLOSE
490 KILL TMP$   'delete temp file
500 END
510 REM *** error handler ***
520 UNABLE$="Unable to "
530 IF ERL=170 OR ERL=190 OR ERL=300 THEN PRINT UNABLE$ "read " OFIL$
540 IF ERL=220 OR ERL=240 OR ERL=310 THEN PRINT UNABLE$ "read " NFIL$
550 IF ERL=280 OR ERL=350 THEN PRINT UNABLE$ "write " TMP$
560 IF ERL=400 OR ERL=450 THEN PRINT UNABLE$ "read " TMP$
570 IF ERL=410 OR ERL=460 THEN PRINT UNABLE$ "write " DIF$
580 IF ERL=490 THEN PRINT UNABLE$ "delete " TMP$
590 RESUME 130
```
{% endraw %}

## PATCHER.BAS

{% raw %}
```bas
10 'PATCHER - file patching program - PROGRAMMERS JOURNAL Vol 1, No 6, Pg. 21
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
30 'This program is used to patch other programs or files. It requires
40 'a data file containing the patches. The first three items in the
50 'patch file are the name of the file to be patched, a check sum, and
60 'comments. For each byte to be patched, there is one record containing
70 'the offset of the byte to be patched, the old value of the byte,
80 'and the new (patch) value.
90 'Patches are generated using program  GENPATCH.BAS
100 'Note: If the offset is greater than 32,767, BASIC 2.00 must be used.
110 CLS
120 DEFINT A-Z
130 CLEAR
140 ON ERROR GOTO 500
150 CLOSE
160 PRINT : INPUT "Name of file containing patches";PAT$
170 IF PAT$="" THEN  END
180 OPEN "i",#1,PAT$
190 INPUT #1,FIL$,CKSUM!,COMMENT$
200 OPEN "i",#2,FIL$    'is it there
210 PRINT "Patching: " FIL$
220 PRINT "Comments: " COMMENT$
230 CLOSE 2
240 OPEN "r",#2,FIL$,1  'reopen as random file
250 FIELD 2,1 AS R$
260 FILE.LEN = LOF(2)
270 IF EOF(1) THEN 450
280 INPUT# 1,BYTE!,OLDVAL,NEWVAL	'get patch
290 NEWSUM!=(NEWSUM!+BYTE!+OLDVAL!+NEWVAL!)
300 PRINT BYTE!,OLDVAL,NEWVAL, "Checksum " NEWSUM!
310 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 310
320 IF BYTE! > FILE.LEN THEN PRINT "Byte " BYTE! " is beyond end of file": GOTO 400
330 GET 2,BYTE!
340 R=ASC(R$)
350 IF R <> OLDVAL THEN PRINT "Old value for byte " BYTE! " is " R " not " OLDVAL: GOTO 400
360 LSET R$=CHR$(NEWVAL)
370 PUT 2,BYTE!
380 APPLIED=APPLIED+1
390 GOTO 270
400 REM *** invalid condition ***
410 BEEP:INPUT "Continue (y/n)";ANS$
420 IF ANS$="Y" OR ANS$="y" THEN 390
430 IF ANS$="N" OR ANS$="n" THEN 450
440 GOTO 400
450 REM *** wrap it up ***
460 IF CKSUM!=NEWSUM! THEN PRINT "Checksums match" ELSE PRINT "Checksums do not match -- input value is"CKSUM! " and calculated value is "NEWSUM!: BEEP
470 PRINT "Patches applied: " APPLIED
480 CLOSE
490 END
500 REM *** error handler ***
510 UNABLE$="Unable to "
520 IF ERL=180 OR ERL=280 THEN PRINT UNABLE$ "read " PAT$
530 IF ERL=200 OR ERL=240 OR ERL=330 THEN PRINT UNABLE$ "read " FIL$
540 IF ERL=370 THEN PRINT UNABLE$ "write " FIL$
550 RESUME 120
```
{% endraw %}

## POOLCOPY.DOC

{% raw %}
```
                   POOL 1.5 Backup and Bug Fix

             Put DOS disk in A: and a new disk in B:
                       Type the following.
FORMAT B:/1
DEBUG
        Remove DOS disk from A:, Put POOL 1.5 disk in A:
                       Type the following.
L 100 0 0 40
W 100 1 0 40
L 100 0 40 40
W 100 1 40 40
L 100 0 80 8
W 100 1 80 8
L 100 0 A0 30
W 100 1 A0 30
  Remove POOL 1.5 from A: and replace it in the original jacket.
                       Type the following.
L 100 1 0 1
E 19D 1E B8 40 00 8E D8 A1 10 00 24 CF 0C 20 A3 10 00 B8 04 00
E 1B0 CD 10 1F CB 90 90
W 100 1 0 1
                   Remove the new disk from B:
                   Label and write protect it.
                   Place it in A: and boot it.
  The patches removed the copy protection and fixed the program
     so that it now properly switches to the color monitor!
```
{% endraw %}

## PRINT20.DOC

{% raw %}
```

If you want the PRINT.COM program in dos 2.0 to skip
the prompt for the output list device, to allow for
automatic installation at boot-up,

A>debug print.com
-e c0d 90 90
-e c14 90 90

If your printer is the default, (LPT1:), that's all
there is to it.  Write the file to disk and quit.
If your printer is attached to some other port,
like LPT2:, you must make one more patch, to specify
the device.

-e 120d 5 "LPT2:"

The "5" in this case is the number of characters in
the name of the device.  Substitute for whatever port
your printer is attached to, then,

-w
Writing xx bytes
-q
A>

And thats all there is to it.

```
{% endraw %}

## RESCMD.BAS

{% raw %}
```bas
100 '
200 ' COMMAND.COM   MODIFICATION TRANSFER PROGRAM
300 '               "RESCMD.BAS"                   Last Update 11/26/82
400 '
350 '                                              John Chapman
351 '                                              CIS 70205,1217
500 'This program will read in an unmodified COMMAND.COM (Release 1.1)
600 '     and produce an output file called COMMAND.CMD.. which can be
700 '     renamed to COMMAND.COM.. This output file will contain all of 
800 '     the modifications to COMMAND.COM currently available from the
900 '     author. See COMMAND.DOC for complete list and limitations.
910 '
950 DEFINT A-Z
1000 BFIL$ = "COMMAND.COM"
1100 CFIL$ = "COMMAND.CMD"
1200 INPUT "Enter Drive where COMMAND.COM resides",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 '
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>6800 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "ORIGIN  FILE SIZE = ",T
3000 DIM BB%(6800)
3100 '
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE COMMAND.CMD UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO LIMIT
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to COMMAND.CMD"
4750 CLOSE #2
4760 '
4800 PRINT "File COMMAND.CMD Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 '
4999 DATA  4959,  34
5000 data  865, 70, 84, 868, 3, 79, 869, 1, 4
5010 DATA  870, 161, 5, 871, 2, 12, 872, 0, 1
5020 DATA  877, 163, 64, 878, 82, 163, 879, 4, 3
5030 DATA  880, 45, 1, 881, 12, 161, 882, 1, 2
5040 DATA  883, 144, 0, 885, 79, 82, 890, 232, 184
5050 DATA  1369, 140, 144, 1370, 200, 161, 1371, 43, 2
5060 DATA  1372, 6, 0, 1373, 159, 43, 1374, 15, 6
5070 DATA  1375, 186, 159, 1376, 16, 15, 1377, 0, 186
5080 DATA  1378, 247, 16, 1379, 226, 0, 1380, 11, 247
5090 DATA  1381, 210, 226, 1382, 116, 115, 4052, 140, 144
5100 DATA  4053, 200, 161, 4054, 5, 2, 4055, 192, 0
5110 DATA  4056, 0, 72
```
{% endraw %}

## RESCMD.DOC

{% raw %}
```

			  RESIDENT COMMAND INTERPRETER
				  John Chapman
			       844 S. Madison St.
			    Hinsdale, Illinois 60521
			     COMPUSERV ID 70205,1217
	DISCLAIMER
	This  modification is provided without warranty of any kind.  The
	author	assumes no liability for failure of this code to  perform
	in  any  environment.  The  user is  completely  responsible  for
	determining   the  applicability  of  this  modification   to	a
	particular environment.
	LIMITATIONS
	This modification causes the transient portion of COMMAND.COM  to
	be  made resident at system IPL.   Re-booting the system with  an
	unmodified   COMMAND.COM   is  the  only  way  to   remove   this
	modification.  This  modification  alters  the	starting  segment
	[paragraph] address available to programs, lowering the amount of
	storage  available  by 4288 bytes [for PC/DOS 1.1 with	a  normal
	load   segment	address  of  02C1].    The  starting  segment  of
	COMMAND.COM can be found at location 0000:9E,  and should display
	[debug] as	 0000:009E 2C 01
	CONTENTS
	This   modification,   supplied  as  a	BASIC	program    called
	"RESCMD.COM"  (Or  CLOCKCMD.BAS for realtime clock users)  which
	will read in an UNMODIFIED DOS 1.1 COMMAND.COM and produce a  new
	file, "COMMAND.CMD" which has all the mods installed. This set of
	modifications  alters  the  IBM  Personal  Computer  DOS  command
	interpreter  (COMMAND.COM)  to remain entirely	resident,  rather
	than  be half resident and half transient.  The whole purpose  of
	this  modification is to suppress 99% of the occurrances  of  the
	refresh   of  the  transient  portion.	 This  will  remove   the
	requirement  to  ALWAYS have a disk with a valid  COMMAND.COM  in
	drive  A.  This  change has been especially useful with  multiple
	DISKCOPY  type activities,  and with those  application  packages
	which  use all of memory,  including the top 4880 bytes where the
	transient COMMAND.COM resides.
	The  modification  merely omits the relocation of  the	transient
	portion of COMMAND.COM, and sets the first free paragraph address
	to  be	the area behind the transient routines,  rather than  the
	small "resident" portion.
					1

	PC/DOS Initialization Overview
	The  IBM  Personal  Computer DOS is brought in from disk  by  the
	bootstrap loader read from track 0 of drive A by the ROM routines
	after the initial hardware tests are performed at  power-on,  and
	subsequently  when  ALT-CTRL-DEL re-boot is  requested.  In  both
	cases, the following sequence occurs:
	     1) The "boot" program is read from track 0.
	     2) It reads IBMBIO.COM  from  a  specific location
	     3) IBMBIO is given control and builds the environmental
		control blocks, initializes peripherals, and then
		reads IBMDOS.COM from its specific location on disk
	     4) IBMDOS is passed control. After initializing the
		remainder of the operating system, IBMDOS loads
		the COMMAND.COM file [the command interpreter], and
		passes it control
	     5) The command interpreter immediately relocates all of the
		main line code for command prompting,  parsing,  and  the
		code which supports the resident commands to the high end
		of memory, where it can be more easily destroyed by
		wandering programs.
	     6) Resident COMMAND.COM will now [pretend to] detect a
		checksum error in the transient portion of itself,
		immediately causing a Re-load from disk, thus setting
		the tone for a long and tedious interaction, interrupted
		frequently by disk I/O and requests for a DOS disk
		in the default drive.
	REAL-TIME CLOCK VERSION
	An   alternate	version  of  the  modification	is  supplied   as
	"CLOCKCMD.BAS".   This version REQUIRES THE PRESENCE OF A  CLOCK.
	The  DOS  DATE	and TIME commands ARE DISABLED by  this  version,
	requiring the user to employ the software provided with the clock
	card  to access date and time.	 The space formerly used by  DATE
	and time is reused for three new RESIDENT commands,  BEEP,  PAGE,
	and CLS.  PAGE causes the printer (LPT1:) to skip to top-of form.
	CLS clears the active display.	BEEP causes a warbling tone to be
	produced.


```
{% endraw %}

## SYMPH.DOC

{% raw %}
```
Here is the "ENGLISH" version of the Symphony Unprotect procedure:
 
1. Rename the program
      REN SYMPHONY.CMP SYMPHONY.XXX

2. Type  DEBUG SYMPHONY.XXX

3. After the - prompt appears, type   R       and press Enter

   Look at the value displayed for the DS register (left hand, second line)
   Whatever the value is, add 1000 to it. For example, if the DS contains
   05DF, add 1000 to make it 15DF. I will refer to this new value as yyyy
   in the next step.

4. Type  E yyyy:3A05 75      press Enter

5. Type  W                   press Enter

6. Type  Q                   press Enter

7. Rename the program back to the original name

   REN SYMPHONY.XXX SYMPHONY.CMP


Now, BEFORE you run the SYMPHONY program, run the program in this Library
call SYMPH.COM. This need only be run ONCE after each boot. If you want,
you may place it in your AUTOEXEC.BAT file. It uses Interrupt 75H which
should not conflict with other programs (NOTE.. this may not be true on the
3270PC).

After running SYMPH.COM, you may run your patched version of SYMPHONY 
without the need for the master diskette.

The other files in this library are:

The original unprotection scheme which required you to assemble a  program.
The assembler SYMPH.COM.

Good Luck.

```
{% endraw %}

## TREE.BAS

{% raw %}
```bas
5 DEFINT A-Z
10 DIM RKEY(125),RLINK(125),LLINK(125)
12 FALSE=0:TRUE=1:N=0:ROOT=1:NIL=0
14 EMPTY=FALSE
16 REM
22 REM *** GENERATE DATA ***
24 CLS:FOR N=1 TO 100
26 INPUT"ENTER KEY : ",RKEY(N):IF RKEY(N)<=0 THEN N=N-1:GOTO 34
27 LLINK(N)=NIL
28 RLINK(N)=NIL
29 Q=N
30 GOSUB 580
32 NEXT N
34 CLS:PRINT:PRINT"ELEMENTS AS GENERATED :":PRINT
36 FOR I=1 TO N:PRINT RKEY(I),:NEXT I
38 GOTO 10000
100 CLS:PRINT:PRINT"SELECT OPTION :"
110 PRINT" 1 = ADD NEW NODE"
120 PRINT" 2 = DELETE A NODE"
130 PRINT" 3 = LIST TREE"
132 PRINT" 4 = INITIALIZE TREE"
136 PRINT" 5 = FIND A NODE"
137 PRINT" 6 = DUMP"
138 PRINT" 7 = END"
140 INPUT"SELECTION -> ",X
150 IF X<1 OR X>7 THEN 140
155 ON X GOTO 160,200,300,850,200,11000,9999
160 N=N+1
162 IF EMPTY=TRUE THEN 164
163 GOTO 170
164 FOR I=1 TO N
165 LLINK(I)=NIL
166 RLINK(I)=NIL
167 NEXT I
168 N=1
169 ROOT=1
170 INPUT"ENTER RKEY : ",RKEY(N)
175 Q=N
180 GOSUB 580
190 GOTO 10000
200 INPUT"ENTER RKEY : ",P
205 ALPHA=P
210 GOSUB 1390
212 P=SEARCH
214 IF P>0 THEN PRINT"KEY FOUND AT NODE # ";P ELSE PRINT"KEY NOT FOUND"
220 IF X=2 THEN GOSUB 3000
230 GOTO 10000
300 PRINT:PRINT" TREE FOLLOWS :":PRINT
310 GOSUB 980
320 GOTO 10000
580 REM *** SUBROUTINE BILDER ***
582 EMPTY=FALSE
600 IF N=1 THEN 830
630 P=ROOT
640 INSERT=FALSE
650 IF RKEY(Q)<=RKEY(P) THEN 740
660 IF RLINK(P)<=NIL THEN 690
670 P=RLINK(P)
680 GOTO 810
690 RLINK(Q)=RLINK(P)
700 RLINK(P)=Q
710 LLINK(Q)=NIL
720 INSERT=TRUE
730 GOTO 810
740 IF LLINK(P)<>NIL THEN 800
750 LLINK(P)=Q
760 LLINK(Q)=NIL
770 RLINK(Q)=(-P)
780 INSERT=TRUE
790 GOTO 810
800 P=LLINK(P)
810 IF INSERT=FALSE THEN 650
830 RETURN
850 REM *** SUBROUTINE FIX ***
890 I=1
900 IF I<=N THEN 920
910 GOTO 960
920 LLINK(I)=NIL
921 RLINK(I)=NIL
940 I=I+1
950 GOTO 900
960 RETURN
980 REM *** SUBROUTINE LIST ***
1000 PRINT
1020 IF EMPTY=FALSE THEN 1030
1022 PRINT"TREE EMPTY"
1023 GOTO 1220
1030 RET=FALSE
1040 R=ROOT
1050 PRINT" ELEMENTS IN ORDER :"
1070 IF LLINK(R)=NIL THEN 1115
1100 R=LLINK(R)
1110 GOTO 1070
1115 B=R
1120 IF ((RLINK(B)<>NIL) AND (RET=FALSE)) THEN 1140
1130 GOTO 1200
1140 PRINT RKEY(B),
1145 P=B
1150 GOSUB 1240
1151 B=SUC
1160 IF B<>NIL THEN 1120
1170 RET=TRUE
1180 GOTO 1120
1200 IF RET=TRUE THEN 1220
1210 PRINT RKEY(B)
1220 RETURN
1240 REM *** SUBROUTINE SUCCESSOR ***
1280 Q=RLINK(P)
1290 IF RLINK(P)>NIL THEN 1320
1300 Q=(-Q)
1310 GOTO 1360
1320 IF LLINK(Q)=NIL THEN 1360
1340 Q=LLINK(Q)
1350 GOTO 1320
1360 SUC=Q
1370 RETURN
1390 REM *** SUBROUTINE SEARCH ***
1450 P=ROOT
1460 F1=FALSE
1470 IF ((P<>NIL) AND (F1=FALSE)) THEN 1490
1480 GOTO 1600
1490 IF ALPHA=RKEY(P) THEN 1580
1500 IF ALPHA<RKEY(P) THEN 1560
1510 IF RLINK(P)<=NIL THEN 1540
1520 P=RLINK(P)
1530 GOTO 1470
1540 P=NIL
1550 GOTO 1470
1560 P=LLINK(P)
1570 GOTO 1470
1580 F1=TRUE
1590 GOTO 1470
1600 SEARCH=P
1610 RETURN
2480 REM *** SUBROUTINE PAR ***
2530 F1=FALSE
2540 R=ROOT
2550 IF P<>ROOT THEN 2560
2555 F1=TRUE:R=NIL
2560 IF ((LLINK(R)=P) OR (RLINK(R)=P) OR (F1=TRUE)) THEN 2630
2570 IF RKEY(R)<RKEY(P) THEN 2600
2580 R=LLINK(R)
2590 GOTO 2610
2600 R=RLINK(R)
2610 IF R=NIL THEN F1=TRUE
2620 GOTO 2560
2630 PAR=R
2640 REM
2650 RETURN
3000 REM *** SUBROUTINE DEL ***
3010 IF P=ROOT THEN 7000
3020 REM ---CASE II---
3030 GOSUB 2480
3035 Q=PAR
3040 IF LLINK(Q)=P THEN 6000
3050 REM ---CASE II - GROUP B---
3060 IF RLINK(P)>NIL THEN 3200
3070 IF LLINK(P)<>NIL THEN 3110
3080 REM ---SUBCASE 1---
3090 RLINK(Q)=NIL
3100 RETURN
3110 REM ---SUBCASE 3---
3120 RLINK(Q)=LLINK(P)
3130 R=LLINK(P)
3140 IF RLINK(R)=(-P) THEN 3150
3145 R=RLINK(R)
3147 GOTO 3140
3150 RLINK(R)=RLINK(P)
3160 RETURN
3200 IF LLINK(P)<>NIL THEN 3240
3210 REM ---SUBCASE 2---
3220 RLINK(Q)=RLINK(P)
3230 RETURN
3240 REM ---SUBCASE 4---
3250 RLINK(Q)=RLINK(P)
3260 R=RLINK(P)
3270 IF LLINK(R)=NIL THEN 3280
3275 R=LLINK(R)
3277 GOTO 3270
3280 LLINK(R)=LLINK(P)
3320 R1=LLINK(P)
3330 IF RLINK(R1)=(-P) THEN 3340
3335 R1=RLINK(R1)
3337 GOTO 3330
3340 RLINK(R1)=(-R)
3350 RETURN
6000 REM ---CASE II - GROUP A---
6010 IF RLINK(P)>NIL THEN 6150
6020 IF LLINK(P)<>NIL THEN 6060
6030 REM ---SUBCASE 1---
6040 LLINK(Q)=NIL
6050 RETURN
6060 REM ---SUBCASE 3---
6070 LLINK(Q)=LLINK(P)
6080 R=LLINK(P)
6090 IF RLINK(R)=(-P) THEN 6100
6095 R=RLINK(R)
6097 GOTO 6090
6100 RLINK(R)=(-Q)
6110 RETURN
6150 IF LLINK(P)<>NIL THEN 6190
6160 REM ---SUBCASE 2---
6170 LLINK(Q)=RLINK(P)
6180 RETURN
6190 REM ---SUBCASE 4---
6200 LLINK(Q)=RLINK(P)
6210 R=RLINK(P)
6220 IF LLINK(R)=NIL THEN 6230
6225 R=LLINK(R)
6227 GOTO 6220
6230 LLINK(R)=LLINK(P)
6270 R1=LLINK(P)
6280 IF RLINK(R1)=(-P) THEN 6290
6285 R1=RLINK(R1)
6287 GOTO 6280
6290 RLINK(R1)=(-R)
6300 RETURN
7000 REM ---CASE I---
7010 IF RLINK(P)>NIL THEN 7150
7020 IF LLINK(P)>NIL THEN 7070
7030 REM ---SUBCASE A---
7040 EMPTY=TRUE
7050 N=0
7060 RETURN
7070 REM ---SUBCASE C---
7080 ROOT=LLINK(P)
7090 R=LLINK(P)
7100 IF RLINK(R)=(-P) THEN 7130
7110 R=RLINK(R)
7120 GOTO 7100
7130 RLINK(R)=NIL
7140 RETURN
7150 IF LLINK(P)>NIL THEN 7190
7160 REM ---SUBCASE B---
7170 ROOT=RLINK(P)
7180 RETURN
7190 REM ---SUBCASE D---
7200 ROOT=RLINK(P)
7210 R=ROOT
7220 IF LLINK(R)=NIL THEN 7250
7230 R=LLINK(R)
7240 GOTO 7220
7250 LLINK(R)=LLINK(P)
7260 R1=LLINK(P)
7270 IF RLINK(R1)=(-P) THEN 7300
7280 R1=RLINK(R1)
7290 GOTO 7270
7300 RLINK(R1)=(-R)
9000 RETURN
9999 END
10000 LOCATE 23,1,0:PRINT"HIT ANY KEY WHEN READY TO CONTINUE....."
10010 DEF SEG:Z$=INKEY$:IF Z$="" THEN 10010
10020 POKE 106,0:GOTO 100
11000 FOR I=1 TO N:LPRINT RKEY(I);LLINK(I);RLINK(I):NEXT:GOTO 100
```
{% endraw %}

## VCBACKUP.DOC

{% raw %}
```
                How to Back-up your PC *VisiCalc disk                _____________________________________                How to Back-up your PC *VisiCalc disk

Dual drive disk copy procedure:

The  following  technique  will convert your Visicalc disk  to  a  normal, 
copyable disk.   But don't try to add other files to the disk as there are copyable
four  programs on the disk which do not appear in the directory.   Use  of 
this  procedure does not relieve you of your responsibilities under  copy-
right  laws  or licensing agreements.   Using a PCDOS disk  on  drive  A:, 
Format a new disk on B:, then type what is underlined:

  _____A>DEBUG

As  soon as DEBUG is loaded,  remove the PCDOS disk from A:.   Insert your 
write-protected,  "copy-protected"  VisiCalc Disk in A:   If you  have  at 
least 96kb of memory, type what is underlined:

 ____________-L 100 0 0 80                  (reads first 16 tracks from A:)
 _____________-L 100 0 80 80                 (reads next 16 tracks from A:)
 _____________-W 100 1 80 80                 (writes same on B:)
 ______________-L 100 0 100 3E                (copies the last 8 tracks except 
 ______________-W 100 1 100 3E                 for the "uncopyable" sector 13F)

If  you  have  less than 96KB,  you must take  smaller  bites.   Type  the 
following instead:

 ____________-L 100 0 0 40                  (read a 32KB "gulp", 8 tracks)
 ____________-W 100 1 0 40
 _____________-L 100 0 40 40
 _____________-W 100 1 40 40
 _____________-L 100 0 80 40
 _____________-W 100 1 80 40
 _____________-L 100 0 C0 40
 _____________-W 100 1 C0 40
 ______________-L 100 0 100 3E
 ______________-W 100 1 100 3E
 
Remove your old VisiCalc disk from A:.  You have now copied the disk,  but 
it  won't run yet.   First you must patch the 80-column  VisiCalc  program 
loader/decrypter  so that it will run correctly with sector 13F  formatted 
normally.  type:

 _____________-L 100 1 138 3            (load the invisible loader-decrypter)
 ___________-E 150 90 90              (first patch for 80-col.)
 ________-E 156 B0
 ___________-E 158 90 90
 ____________________-E 168 90 04 40 90 90
 ___________-E 16E C6 06
 ___________-E 173 90 90
 ____________________-E 179 90 04 20 90 90
 ___________-E 17F C6 06
 ___________-E 184 90 90
 ____________________-E 18A 90 04 00 90 90
 ___________-E 190 C6 06
 ________-E 195 EB                 
 ____________________-E 1B0 90 05 00 00 90     (last patch disables timer check)
 _____________-W 100 1 138 3            (save it back on new disk)

                  VisiCalc Backup  8-1-82   JEH  Page 1



                  
                  VisiCalc Backup  8-1-82   JEH  Page 2


Next,  you  must apply the following patches if you wish to be able to run 
VCONFIG to select the 40 column display, type:

 _____________-L 100 1 13B 3                 (load 40-col loader-decrypter)
 __________________________-E 14D 90 90 B4 10 90 90 90    (first patch)
 ___________-E 169 C6 06
 ___________-E 16E 90 90
 ____________________-E 174 90 2C 20 90 90
 ___________-E 17A C6 06
 ___________-E 17F 90 90                   
 ____________________-E 185 90 2C 00 90 90          
 ___________-E 18B C6 06
 ________-E 190 EB                      
 ____________________-E 1AB 90 04 00 90 90          (disable timer check here too)
 _____________-W 100 1 13B 3                 (save on new disk)
 _-Q                             (exit debug)

Remove  your new copyable VisiCalc disk from B:.   Write-protect  the  new 
copy,  place it in A:  and boot it.  After you have verified that the copy 
works correctly,  you may copy it using "DISKCOPY".  All copies of the new 
disk  should function exactly as the original "copy-protected" disk.   The 
serial number is unchanged.  You may not legally sell, give or loan either 
the original disks, copies, or documentation! 

Single drive note:

                                           _All  DEBUG  accesses  to  drive A:  (L 100 0 x x) refer  to  the  original 
                                              _VisiCalc disk.  References to drive B: (W 100 1 x x) refer to the new disk 
being prepared.   Make sure that you swap disks at the right time and that 
your original disk has the write-protect tab installed.

Conversion to .COM file - single drive, 48KB minimum:_____________________________________________________Conversion to .COM file - single drive, 48KB minimum:

The following procedure will read the 80-column VisiCalc program from your 
Visicalc  disk (original or copy) and write a standard .COM file which may 
be  loaded on a non-standard disk drive  (Winchester,  double-sided,   8", 
etc.).   You will need another formatted disk.   This disk should  contain 
the  DOS  system  files (format /s) and any .BAT file  (required  to  exit 
VisiCalc sometimes).  With a DOS disk in A:, type:

  _____A>DEBUG

Remove the DOS disk, insert your VisiCalc disk, then type:

 _____________-L 100 0 138 3            (load the VC80 loader/decrypter)
 ____________-M 0 3FF 7000             (duplicate it in higher memory)
 ____-R CS                     (inspect command segment register)

DEBUG will respond with the contents of the CS register (049F for DOS 1.0, 
4B5 FOR DOS 1.1) and prompt with a colon :.   Type the old contents +  700 
(hex).   That is,  0B9F or BB5.   Do the same with RS.   The screen should 
appear as on the next page.






                  VisiCalc Backup  8-1-82   JEH  Page 2




                  VisiCalc Backup  8-1-82   JEH  Page 3


A>DEBUG
 _____________-L 100 0 138 3
 ____________-M 0 3FF 7000
 ____-R CS
CS 049F                  or CS 04B5 for DOS 1.1
 ____                        ____:0B9F                    or :0BB5
 ____-R DS
DS 049F                  or DS 04B5
 ____                        ____:0B9F                    or :0BB5

Next, apply the following patches, type:

 ___________-E 107 9F 04              (byte-flipped 049f from CS if DOS 1.0)
   or
 ___________-E 107 B5 04              (if DOS 1.1, byte-flipped 04b5) 
 _________________-E 24D BB A8 00 90        (hard-wire the decryption key)

Now, to run the loader/decrypter, type:

 __________-G =1B8 26B               (execute from 1b8 to 26b)

The  entire program will now be loaded and decrypted and a  register  dump 
should  appear  on the screen.   Next restore CS and DS to their  previous 
values and set the file length in CX.  The screen image should appear as:

(register dump)
 ____-R CS
CS 0B9F                  or CS 0BB5 for DOS 1.1
 ____                        ____:049F                    or :04B5
 ____-R DS
DS 0B9F                  or DS 0BB5
 ____                        ____:049F                    or :04B5
 ____-R CX
CX 0000
 ____                                                ____:6B64               (length = 6B64 FOR VisiCalc 1.1, 6802 for VC 1.0)

All  that  is left is to name the file,  write it and  exit.   Remove  the 
VisiCalc disk, insert the new, formatted, empty disk in the same drive and 
type:

 ________-N VC.COM                 (or whatever you wish to name it)
 _-W                        (write the .COM file)
 _-Q                        (exit DEBUG)

THAT'S IT!

This document was placed in the public domain by me on August 1,  1982.  I 
do  not know how many different "copy-protection" methods might be in use, 
but this worked on my disk and should work on yours until VisiCorp changes 
their  recipe.   Please feel free to distribute this  information  without 
charge to any interested person.

                                                  John Hart     
                                                  Houston, Texas


*VisiCalc is a trademark of VisiCorp (formerly Personal Software).

                  VisiCalc Backup  8-1-82   JEH  Page 3


iCalc is a trademark of VisiCorp (formerly Personal
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0376

     Volume in drive A has no label
     Directory of A:\

    123      UNP       706   7-11-83   8:35a
    123-LOGO PAT       896   5-15-84   9:50p
    123A     UNP       520   7-12-83   8:17a
    123STAR  UNP      1024  11-01-83   7:20a
    8088     TXT      2432  10-18-83   6:21a
    NEWCOLOR 123      1152  11-21-84   2:38p
    BASCOM   FIX     20495  10-07-83   8:49a
    BASCOM   PAT       470  12-29-83   5:46p
    BASLIB   PAT       996  12-29-83   7:21p
    BASRUN   PAT      1648  12-29-83   5:46p
    DB3ZAP   BAT       256  11-23-84  12:36a
    DB3ZAP   UNP       256  11-23-84  12:36a
    C86MOD   DOC      2680   6-11-83  12:42a
    FILECMD  PAT      1941   9-16-84   9:27a
    XTALK    PAT      2048   5-18-84   8:30a
    CLOCKFIX DOC       958  12-12-83   9:44a
    CLOCKFIX SYS       384  11-30-83   7:49a
    COMCOM20 PAT       641  12-30-83   8:58a
    COMMAND  MOD      9984  10-28-82   7:14p
    VCBACKUP DOC      8064   8-01-82
    COMMOD   TXT      7196  11-09-84   7:00a
    DB3-NEW  DOC       384  11-23-84  12:36a
    DOSBUG   MOD      1502   7-02-83  10:32a
    FRMWK1   DOC      1792  12-02-84  11:58a
    DOS_ERR  DOC      3456  10-25-83   6:32a
    DSKCPY20 MOD      7168   1-16-84   7:14a
    EWBACKUP UNP      2304   8-01-82
    FIND     MOD      1024   2-16-84   6:48a
    FLT-SIM  MOD      1834   9-30-83   8:03a
    FORMAT20 MOD       765   2-05-84  10:14a
    GENPATCH BAS      2013   2-04-84   8:08p
    JRAM123  MOD      2307   9-10-83  11:25a
    LAYOUT   UNP       339   4-28-84   5:34a
    MEMSHIFT UNP       459   9-10-83  11:11a
    NORTONS  MOD      2048   1-02-84   1:02a
    FRMWK1   BAT       256  12-02-84  11:58a
    PATCHER  BAS      2244   2-04-84   8:09p
    PCM      UNP       512   2-16-84   6:48a
    FRMWK1   UNP       256  12-02-84  11:58a
    PE-COLR  MOD      9936   6-11-83  12:46a
    PE-LOGO  PAT      1323   8-24-83   7:55a
    POOLCOPY DOC       896  11-30-82   6:31p
    PRINT20  DOC       649   5-29-83   9:48a
    PROKEY   UNP      1060   4-28-84   5:29a
    NEWCOLOR IN        256  11-21-84   2:38p
    RESCMD   BAS      3072   8-11-83   7:16a
    RESCMD   DOC      4180   8-11-83   8:58a
    SAMNA    UNP      2560   3-02-84   6:38a
    TIME-MGR UNP      1104   5-20-84   7:27p
    XTFORMAT DOC      3456  10-18-83   5:42a
    BASIC2   MOD      1583   5-28-84   8:29p
    MSWORD   UNP      2176   1-01-80   2:04a
    WS33-AT  PAT      1536  11-17-84   2:17p
    CLOUT256 UNP      3328   7-02-84   6:58a
    CLOUT384 UNP      3456   7-02-84   7:00a
    TKSOLVER UNP      7168   7-02-84   7:02a
    RB4000   UNP      3200   7-02-84   7:04a
    COPYWRIT UNP      2304   4-24-84   5:58a
    EXECUVSN UNP      3072   4-28-84   5:24a
    FLTSIM   UNP      1152   7-02-84   7:09a
    MLINK    UNP      2048   7-02-84   7:11a
    PCDRAW   UNP      3072   4-24-84   5:52a
    PCDRAW14 UNP      2688   7-02-84   7:13a
    PROBASIC UNP      2048   6-29-84   6:18a
    HARVARD  UNP     10014   4-28-84   6:19a
    HPMV116  UNP      8320   7-02-84   7:35a
    PFS-PROG UNP      3200   7-02-84   7:36a
    TANK     UNP      4096  12-24-84   3:27p
    SK111C   UNP      1536  12-24-84   3:27p
    TIMEMGR  UNP      1280   7-02-84   7:40a
    XENOCOPY UNP      4864   7-02-84   7:42a
    SK       UNP      2048   7-09-84   7:10a
    TKNEW    UNP      5760   7-11-84   6:25a
    MLINK206 UNP      1942   4-24-84   6:00a
    MULTILNK UNP      2432   4-24-84   6:01a
    SK111A   UNP      2304  12-24-84   3:27p
    MLINK207 UNP      2048   6-29-84   6:12a
    FLGHTSIM UNP       972   2-14-84  11:05p
    ZORK12   UNP      1019   2-14-84  11:10p
    ZORK3    UNP       715   2-14-84  11:05p
    SARGON3  UNP      1152   4-27-84   6:46a
    TREE     BAS      4608  10-09-83  10:48a
    SYMPH    DOC      1408   8-19-84   2:56p
    SYMPH    COM       128   8-19-84   2:56p
    SYMPHONY UNP      2560   8-19-84   2:56p
    --NOTICE ---      1177  10-21-84  10:04a
    ML28-30  UNP      3328  12-24-84   3:27p
    SK110A   UNP       623  12-22-84   9:55a
    SK100A   UNP       629  12-22-84  10:11a
    DB3      UNP      2089  12-11-84   8:01p
    FILES376 TXT      5637   7-08-85   2:38p
           91 file(s)     238622 bytes
                           40960 bytes free
