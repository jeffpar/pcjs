---
layout: page
title: "PC-SIG Diskette Library (Disk #2465)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2465/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2465"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TIME MASTER AND SECURITY"

    Have you ever wondered how much your computer is used?  Or what it is
    used for?  TIME MASTER answers those questions.
    
    Simply start TIME MASTER each time you start using your computer and
    "log-in."  Then exit TIME MASTER and start using your other application
    programs.  Do your word processing, accounting, etc.  Each time you exit
    an application, enter TIME MASTER and "log-off."  Tell TIME MASTER your
    name, what program you used, and how much time was used for business and
    personal reasons.
    
    At the end of any period (day, week, year, etc.); TIME MASTER will
    display or print out reports that tell you who used what program, how
    long they used it, and how much time was used for business and personal
    reasons.
    
    This program is perfect for any individual who needs to track, for
    taxation puposes, the time their computer is used for business and
    personal tasks.  Also for the company or government department seeking
    management information on the use of their computers.
    
    Now you can protect your computer from unauthorized use.  With SECURITY,
    only you know the password and only you can change it.
    
    SECURITY lets you add password security to your computer through your
    CONFIG.SYS file.  While this is safer than programs that use your
    AUTOEXEC.BAT to add password protection, it will not keep the
    sophisticated hacker out.  However, it is a quick and easy way to keep
    most people off your computer.  Assembly language source code is
    included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2465.TXT

{% raw %}
```
Disk No: 2465                                                           
Disk Title: Time Master and Security                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Time Master                                              
Author Version: 1.1                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
Have you ever wondered how much your computer is used?  Or what it is   
used for?  TIME MASTER answers those questions.                         
                                                                        
Simply start TIME MASTER each time you start using your computer and    
"log-in."  Then exit TIME MASTER and start using your other application 
programs.  Do your word processing, accounting, etc.  Each time you exit
an application, enter TIME MASTER and "log-off."  Tell TIME MASTER your 
name, what program you used, and how much time was used for business and
personal reasons.                                                       
                                                                        
At the end of any period (day, week, year, etc.); TIME MASTER will      
display or print out reports that tell you who used what program, how   
long they used it, and much was used for business and personal reasons. 
                                                                        
This program is perfect for any individual who needs to keep track of   
the time their computer is used for business and personal tasks for     
taxation purposes and the company or government department seeking      
management information on the use of their computers.                   
Program Title: Security                                                 
Author Version: 1.0                                                     
Author Registration: $7.00                                              
Special Requirements: None.                                             
                                                                        
Now you can protect your computer from unauthorized use.  With SECURITY,
only you know the password and only you can change it.                  
                                                                        
SECURITY lets you add password security to your computer through your   
CONFIG.SYS file.  While this is safer than programs that use your       
AUTOEXEC.BAT to add password protection, it will not keep the           
sophisticated hacker out.  However, it is a quick and easy way to keep  
most people off your computer.  Assembly language source code included. 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NEWWORD.ASM

{% raw %}
```
               ORG 0100
               JMP MAIN
FILENAME       DB "SECURITY.SYS",0
FILENAME2      DB "NEWWORD.COM",0
HANDLE         DW ?                     ;for SECURITY.SYS
NUMBER         DB 08,0                  ;number of characters
NEW_WORD       DB "SeCuRiTy        ",0  ;password
MSG1           DB "Requires at least DOS 2.00$"
MSG2           DB "New PASSWORD not found.",0D,0A
               DB "Syntax:   NEWWORD [new password]"
               DB 0D,0A,"          Then Press ENTER."
               DB 0D,0A,"$"
MSG3           DB "This password has too many characters."
               DB 0D,0A,"$"
MSG4           DB "SECURITY.SYS not found in default directory."
               DB 0D,0A,"$"
MSG5           DB "SECURITY.SYS may be corrupted.",0D,0A,"$"
MSG6           DB "NEWWORD.COM is not hidden.",0D,0A,"$"
MSG6A          DB "NEWWORD.COM has been hidden.",0D,0A,"$"
MSG7           DB "The New Password has been installed.",0A
               DB 0D,0A,"Be sure that this modified SECURITY.SYS"
               DB 0D,0A,"is on the path defined in your"
               DB 0D,0A,"CONFIG.SYS file.",0D,0A,0A
               DB "Copyright 1990, by Robert Wallingford, P.E."
               DB 0D,0A,0A,"$"
TESTBUFF1:     DB 0FF,0FF,0FF,0FF,00,080,0A,00,013,00
TESTBUFF2:     DB 0B DUP 0
EXIT:          MOV AH,09                ;message with exit
               INT 021
               INT 020
EXT:           MOV AH,09                ;message with return
               INT 021
               RET
EXIT1:         MOV DX,OFFSET MSG1
               JMP EXIT
EXIT2:         MOV DX,OFFSET MSG2
               JMP EXIT
EXIT3:         MOV DX,OFFSET MSG3
               JMP EXIT
EXIT4:         MOV DX,OFFSET MSG4
               JMP EXIT
EXIT5:         MOV DX,OFFSET MSG5
               JMP EXIT
EXIT6:         MOV DX,OFFSET MSG6
               JMP EXT
EXIT7:         MOV DX,OFFSET MSG7
               JMP EXIT
MAIN:          CLD                      ;forward
               MOV AH,030               ;check DOS
               INT 021
               CMP AL,02
               JL EXIT1
               MOV NUMBER,0
               MOV SI,081               ;Point to command line parameter.
FIND_BYTE:     LODSB                    ;Get a byte.
               CMP AL,020
               JE FIND_BYTE             ;skip spaces before name
               CMP AL,0D                ;Carriage return marks end.
               JE EXIT2                 ;If end, done here.
               DEC SI
               PUSH SI
GET_NUMB:      LODSB                    ;count characters
               CMP AL,0D
               JE GOT_NUMB
               INC NUMBER
               CMP NUMBER,0E
               JE EXIT3
               JMP GET_NUMB
EX5:           JMP EXIT5
EX7:           JMP EXIT7
GOT_NUMB:      MOV CX,W[NUMBER]         ;move password
               POP SI                   ;from PSP
               MOV DI,OFFSET NEW_WORD   ;to offset
               REPNE MOVSB
               MOV AL,00
               STOSB
               MOV AH,03D               ;open SECURITY.SYS
               MOV AL,11000010b
               MOV DX,OFFSET FILENAME
               INT 021
               JC EXIT4
               MOV HANDLE,AX            ;save handle
               MOV AH,03F               ;check to be sure
               MOV BX,HANDLE            ;that SECURITY.SYS
               MOV CX,0A                ;is not some other
               MOV DX,TESTBUFF2         ;file with the same
               INT 021                  ;name by reading
               MOV CX,0B                ;part of it to check
               MOV SI,TESTBUFF1         ;for a match.
               MOV DI,TESTBUFF2
               REPE CMPSB
               CMP CX,0
               JNE EX5
               MOV AX,04200             ;move pointer
               MOV BX,HANDLE
               MOV CX,00
               MOV DX,0102              ;to byte # 102h
               INT 021
               MOV AH,040               ;write number and
               MOV BX,HANDLE            ;password into the
               MOV CX,W[NUMBER]         ;file
               MOV DX,OFFSET NUMBER
               ADD CX,02
               INT 021
               MOV AH,03E               ;close file
               MOV BX,HANDLE
               INT 021
               MOV AX,04301             ;hide NEWWORD.COM
               MOV CX,022
               MOV DX,OFFSET FILENAME2
               INT 021
               JAE NXT1
               CALL EXIT6
               JMP NXT1A
NXT1:          MOV AH,09
               MOV DX,OFFSET MSG6A
               INT 021
NXT1A:         JMP EX7
```
{% endraw %}

## SECURITY.ASM

{% raw %}
```
               ORG 0
NXTDV          DD -1
ATTRIBUTE      DW 08000                 ;character driver
DV_STRATEGY    DW 000A                  ;strategy offset
DV_INTERRUPT   DW 0015                  ;interrupt offset
STRATEGY:      CS: MOV H_OFF,BX         ;save it
               CS: MOV H_SEG,ES         ;save it
               RETF                     ;function return
INTERRUPT:     PUSHF                    ;save everything
               PUSH AX
               PUSH BX
               PUSH CX
               PUSH DX
               PUSH SI
               PUSH DI
               PUSH BP
               PUSH DS
               PUSH ES
               PUSH CS
               POP DS                   ;make ds = cs
               LES DI,H_OFF
               ES CMP B[DI+2],0
               JNE EXIT1
               CALL LOCAL
               ES MOV B[DI+0D],0        ;no error status word
               ES MOV W[DI+0E],0
               ES MOV W[DI+010],CS
EXIT1:         ES MOV W[DI+3],0100      ;signals end
               POP ES                   ;restore everything
               POP DS
               POP BP
               POP DI
               POP SI
               POP DX
               POP CX
               POP BX
               POP AX
               POPF
               RETF                     ;function return
DATA_SEG       SEGMENT   PUBLIC
REQUEST        DB 07,0A,0D,"This System is protected by SECURITY.SYS"
               DB 0D,0A,"The Required Password is case-sensitive."
               DB 0D,0A,"It will not be displayed as you type it."
               DB 0D,0A,"Type your Password, then press ENTER."
               DB 0D,0A,"Password: "
COUNTER        DB 0                     ;character counter
NUMBER_0       DB 08,0                  ;chars. in password
PASSWD         DB "SeCuRiTy       ",0   ;password
PASSBUFF       DB "                 "   ;password buffer
COPYRIGHT      DB 07,0D,0A,"Copyright 1990, Robert Wallingford, P.E.",0D,0A
H_OFF          DW ?                     ;header offset
H_SEG          DW ?                     ;header segment
DATA_SEG       ENDS
LOCAL:         CLD                      ;forward
               MOV BX,0
               MOV AH,2
               MOV DX,0
               INT 010                  ;set cursor
               MOV SI,OFFSET REQUEST    ;set si
               MOV CX,0B2               ;message size.
MSGLP:         PUSH CX
               LODSB
               MOV AH,0E
               INT 010                  ;print request
               POP CX
               LOOP MSGLP
               PUSH DI                  ;save ES:DI
               PUSH ES
               PUSH CS
               POP ES                   ;make es = cs
               CLD                      ;forward
SETUP:         MOV SI,OFFSET PASSWD     ;initialize
               MOV DI,OFFSET PASSBUFF   ; everything
               MOV COUNTER,0            ; about password
PSWLP:         MOV AH,0
               INT 016                  ;get character
               CMP AL,08
               JNE BAKSP
               CMP COUNTER,0            ;service backspace
               JE PSWLP
               DEC COUNTER
               DEC DI
               JMP PSWLP
BAKSP:         CMP AL,0D
               JE CARRT
               CMP COUNTER,0E           ;service carriage ret.
               JE PSWLP
               INC COUNTER
               STOSB
               JMP PSWLP
CARRT:         MOV CX,W[NUMBER_0]
               JCXZ SETUP
               CMP CL,COUNTER           ;check char. count
               JNE SETUP
               MOV DI,OFFSET PASSBUFF
               REPE CMPSB               ;check characters
               JNE SETUP
               MOV SI,OFFSET COPYRIGHT
               MOV CX,02D
CPRLP:         PUSH CX
               LODSB
               MOV AH,0E
               INT 010
               POP CX
               LOOP CPRLP
               POP ES                   ;recover ES:DI
               POP DI
               RET                      ;normal return
```
{% endraw %}

## SECURITY.DOC

{% raw %}
```
                    SECURITY.DOC

This Security System consists of the following five files
    SECURITY.SYS    the Password device driver.
    SECURITY.ASM    the Assembly language file
                    for SECURITY.SYS, A86 code.
    NEWWORD.COM     a program for changing the
                    Password, and more.
    NEWWORD.ASM     the Assembly language file
                    for NEWWORD.COM, A86 code.
    SECURITY.DOC    this Documentation file.

                    BACKGROUND

In most security systems,  the AUTOEXEC.BAT program calls a
Password program  that  requires you to type in the correct
Password before you can continue.  This might be sufficient
to prevent  beginners  from using your computer and reading
all of your private files, but anyone with  more experience
with DOS can abort the whole BAT file with the BREAK key.

SECURITY  is one whole level of sophistication better since
it performs the  Password  request and  verification with a
device driver that cannot be aborted  and occurs before the
Computer calls the AUTOEXEC.BAT file. I don't claim that it
is foolproof. A determined intruder can still bring his own
operating system  on a bootable floppy disk and bypass your
whole system.

To make your Computer System  immune to this risk you would
have to install special  hardware that would only recognize
your special operating system, or some critical part of it.
If you need this much security you should  probably  hire a
Security Consultant  and install his collection of gadgets.
You still won't be really safe. If what you want to protect
is worth all that money, someone will find a more expensive
Security Consultant to bypass all of the gadgets.

                  INSTALLATION

To install this  SECURITY  system  you must add one line to
your CONFIG.SYS file so the Computer will call SECURITY.SYS
as the first device driver that it installs.  This line is;
           device = SECURITY.SYS
if you intend to keep the files in your  root directory, or
           device = [path]\SECURITY.SYS
if you prefer to keep the files in the directory associated
with [path]. This line should be above all other lines that
begin with the word device.

If you don't already have a  CONFIG.SYS  file, you can make
one with the ASCII mode of any  Word Processor.  Or you can
type   COPY CON CONFIG.SYS  then press ENTER, type the line
and at the end of the line  hold down the  CONTROL  key and
press  Z,  then release the  CONTROL  key and press  ENTER.
You should do all this in the  root directory of the  drive
on which you have installed your operating system. For hard
disk systems this is generally  C:\.

                  DESCRIPTION

SECURITY.SYS  identifies  itself and gives the instructions
for entering the  Password.  The Password is case sensitive
and with the original system it is "SeCuRiTy" . As you type
the  Password,  it will  not appear  on the monitor screen.
A "friend"  watching you log on will find it more difficult
to read your keystrokes.  You may use any  ASCII  character
in your Password, including the extended  ASCII set, except
that you can't begin with a blank space.  If you  touch the
wrong key just press  ENTER  and do it again.  SECURITY.SYS
can process backspace  but you may find it difficult to use
this feature without the display.  The Password should have
no more than thirteen characters.  If nothing happens after
you press ENTER, try again. You may have hit a wrong key by
accident.

I suggest that you try  SECURITY  on a bootable floppy disk
before you install it on your hard disk, especially if your
Computer is marginally compatible with IBM BIOS. To do this
format a floppy with the /S option, copy command.com to it,
create the basic one line  CONFIG.SYS  file, and make a two
line AUTOEXEC.BAT file like this:

             c:\
             autoexec.bat
             
Also, copy SECURITY.SYS and NEWWORD.COM to this disk.

Now, with this floppy disk in drive  "A", and with the door
closed to activate this drive, reboot (restart) the system.
After several seconds you should see an announcement  about
SECURITY.SYS and request to enter the Password. If you have
not run NEWWORD.COM, the Password will be "SeCuRiTy".  Type
the Password, disregarding the fact that it does not appear
on the screen, and press ENTER. That should do it.

If it does not work, remove the floppy  disk with  SECURITY
and reboot  with the old system.  If it does work,  and you
want to change the Password, enter the directory containing
SECURITY.SYS and NEWWORD.COM and run  NEWWORD.COM  with the
following syntax:
               NEWWORD XXXXXXXXX
with your new Password in place of the series of Xs.

There can be more than one space between  NEWWORD  and your
new Password, and after the first Password character, space
is a valid  character.  When you press  ENTER,  NEWWORD.COM
will put the number of characters in the new  Password  and
the new Password itself into SECURITY.SYS, and then it will
do something totally unexpected.  It will make  NEWWORD.COM
invisible to commands like DIR, TYPE, COPY, etc.

If other people use your Computer and they don't know about
NEWWORD.COM, they won't accidentally find it and use it. If
anyone does run  NEWWORD  with any set of characters,  then
the next time you start your Computer, you will not use the
correct Password. That is why NEWWORD.COM hides itself each
time you use it.  If you don't want  this feature,  use the
REN  command to change NEWWORD.COM  to  PASSWORD.COM or any
other name that you want.

I have also included the  ASM files for generating the main
files of this  system.  I specifically  wrote  them for the
A86 Compiler, but if you use the other compiler, you should
be able to make the necessary modifications.  The  Compiler
generates SECURITY.BIN. You must rename it SECURITY.SYS.

If you try to  modify this file,  be very careful in making
any changes before the  DATA_SEGMENT.  Device  Drivers must
obey special rules. Also, you can't run them like COM files
and you can't use DEBUG to test them.

                COMMERCIAL

ROBERT WALLINGFORD, P.E. has copyrighted and owns the files
SECURITY.SYS and NEWWORD.COM and their associated ASM files. 
I hereby give you a limited license to use SECURITY.SYS and
NEWWORD.COM  and to copy them and distribute them, provided
that you meet the following conditions:
 
      1)  You may not charge a fee for such copying
          and distribution. 
           
      2)  You must distribute SECURITY as a complete
          set of all files.

      3)  You may ONLY distribute SECURITY in its
          original, unmodified state.   

This  program  is  being  distributed  under the  Shareware
concept,  which urges users to distribute these programs in
original form,  not modified in any way,  to their  friends
and other BBS.  The  author  claims  no  responsibility for
any damage, either accidental or otherwise, through the use
of these programs.  I am providing these programs  "AS  IS"
without warranty of any kind,  either expressed or implied.
The  entire  risk as to the  quality  and  compatibility of
these programs is with YOU.

If you use these  programs and find them of value,  I would
greatly appreciate any contributions ($7 suggested). I will
use it to further develop other useful  software.
         Send any contributions to:
                    ROBERT WALLINGFORD, P.E.
                    2338 N. McVicker Ave.
                    Chicago, IL  60639-2216

                    Ph. (312) 889-1115

Look for these other fine programs that I have written:

PROGRAM                DESCRIPTION                  REGISTRATION FEE
 
SUPERSPY.ZIP A File Viewing utility with a CLIPPER function
             for copying  pieces  from one  file to another
             file or to a printer and a  DIRECTORY function
             to help select the NEXT FILE to view and other
             useful functions.                                  $15.
 
BOOK.ZIP     Make & Read a "COMPUTER BOOK" on your monitor.
             Access any Chapter with one keystroke. Advance
             to next page with Spacebar or  PgDn.  Previous
             page with PgUp.  Return to Index or  Exit with
             "E"                                                 $7.
 
DISPLAY.ZIP Multi-screen  MESSAGE UTILITY. Make and display
            a multi-screen  message,  one screen at a time,
            with  control of the display  duration  and the
            attributes  of each  screen.  Makes  good  Xmas
            Cards, Birthday Greeting, etc.                       $7.
 
MEMO.ZIP    Like DISPLAY.ZIP with BIGGER screens.                $7.


If you register with a $10  contribution, I will send you a
5.25"  floppy  containing  all of them for your  evaluation
and possible future registration.
```
{% endraw %}

## NEWWORD.ASM

{% raw %}
```
               ORG 0100
               JMP MAIN
FILENAME       DB "SECURITY.SYS",0
FILENAME2      DB "NEWWORD.COM",0
HANDLE         DW ?                     ;for SECURITY.SYS
NUMBER         DB 08,0                  ;number of characters
NEW_WORD       DB "SeCuRiTy        ",0  ;password
MSG1           DB "Requires at least DOS 2.00$"
MSG2           DB "New PASSWORD not found.",0D,0A
               DB "Syntax:   NEWWORD [new password]"
               DB 0D,0A,"          Then Press ENTER."
               DB 0D,0A,"$"
MSG3           DB "This password has too many characters."
               DB 0D,0A,"$"
MSG4           DB "SECURITY.SYS not found in default directory."
               DB 0D,0A,"$"
MSG5           DB "SECURITY.SYS may be corrupted.",0D,0A,"$"
MSG6           DB "NEWWORD.COM is not hidden.",0D,0A,"$"
MSG6A          DB "NEWWORD.COM has been hidden.",0D,0A,"$"
MSG7           DB "The New Password has been installed.",0A
               DB 0D,0A,"Be sure that this modified SECURITY.SYS"
               DB 0D,0A,"is on the path defined in your"
               DB 0D,0A,"CONFIG.SYS file.",0D,0A,0A
               DB "Copyright 1990, by Robert Wallingford, P.E."
               DB 0D,0A,0A,"$"
TESTBUFF1:     DB 0FF,0FF,0FF,0FF,00,080,0A,00,013,00
TESTBUFF2:     DB 0B DUP 0
EXIT:          MOV AH,09                ;message with exit
               INT 021
               INT 020
EXT:           MOV AH,09                ;message with return
               INT 021
               RET
EXIT1:         MOV DX,OFFSET MSG1
               JMP EXIT
EXIT2:         MOV DX,OFFSET MSG2
               JMP EXIT
EXIT3:         MOV DX,OFFSET MSG3
               JMP EXIT
EXIT4:         MOV DX,OFFSET MSG4
               JMP EXIT
EXIT5:         MOV DX,OFFSET MSG5
               JMP EXIT
EXIT6:         MOV DX,OFFSET MSG6
               JMP EXT
EXIT7:         MOV DX,OFFSET MSG7
               JMP EXIT
MAIN:          CLD                      ;forward
               MOV AH,030               ;check DOS
               INT 021
               CMP AL,02
               JL EXIT1
               MOV NUMBER,0
               MOV SI,081               ;Point to command line parameter.
FIND_BYTE:     LODSB                    ;Get a byte.
               CMP AL,020
               JE FIND_BYTE             ;skip spaces before name
               CMP AL,0D                ;Carriage return marks end.
               JE EXIT2                 ;If end, done here.
               DEC SI
               PUSH SI
GET_NUMB:      LODSB                    ;count characters
               CMP AL,0D
               JE GOT_NUMB
               INC NUMBER
               CMP NUMBER,0E
               JE EXIT3
               JMP GET_NUMB
EX5:           JMP EXIT5
EX7:           JMP EXIT7
GOT_NUMB:      MOV CX,W[NUMBER]         ;move password
               POP SI                   ;from PSP
               MOV DI,OFFSET NEW_WORD   ;to offset
               REPNE MOVSB
               MOV AL,00
               STOSB
               MOV AH,03D               ;open SECURITY.SYS
               MOV AL,11000010b
               MOV DX,OFFSET FILENAME
               INT 021
               JC EXIT4
               MOV HANDLE,AX            ;save handle
               MOV AH,03F               ;check to be sure
               MOV BX,HANDLE            ;that SECURITY.SYS
               MOV CX,0A                ;is not some other
               MOV DX,TESTBUFF2         ;file with the same
               INT 021                  ;name by reading
               MOV CX,0B                ;part of it to check
               MOV SI,TESTBUFF1         ;for a match.
               MOV DI,TESTBUFF2
               REPE CMPSB
               CMP CX,0
               JNE EX5
               MOV AX,04200             ;move pointer
               MOV BX,HANDLE
               MOV CX,00
               MOV DX,0102              ;to byte # 102h
               INT 021
               MOV AH,040               ;write number and
               MOV BX,HANDLE            ;password into the
               MOV CX,W[NUMBER]         ;file
               MOV DX,OFFSET NUMBER
               ADD CX,02
               INT 021
               MOV AH,03E               ;close file
               MOV BX,HANDLE
               INT 021
               MOV AX,04301             ;hide NEWWORD.COM
               MOV CX,022
               MOV DX,OFFSET FILENAME2
               INT 021
               JAE NXT1
               CALL EXIT6
               JMP NXT1A
NXT1:          MOV AH,09
               MOV DX,OFFSET MSG6A
               INT 021
NXT1A:         JMP EX7
```
{% endraw %}

## SECURITY.ASM

{% raw %}
```
               ORG 0
NXTDV          DD -1
ATTRIBUTE      DW 08000                 ;character driver
DV_STRATEGY    DW 000A                  ;strategy offset
DV_INTERRUPT   DW 0015                  ;interrupt offset
STRATEGY:      CS: MOV H_OFF,BX         ;save it
               CS: MOV H_SEG,ES         ;save it
               RETF                     ;function return
INTERRUPT:     PUSHF                    ;save everything
               PUSH AX
               PUSH BX
               PUSH CX
               PUSH DX
               PUSH SI
               PUSH DI
               PUSH BP
               PUSH DS
               PUSH ES
               PUSH CS
               POP DS                   ;make ds = cs
               LES DI,H_OFF
               ES CMP B[DI+2],0
               JNE EXIT1
               CALL LOCAL
               ES MOV B[DI+0D],0        ;no error status word
               ES MOV W[DI+0E],0
               ES MOV W[DI+010],CS
EXIT1:         ES MOV W[DI+3],0100      ;signals end
               POP ES                   ;restore everything
               POP DS
               POP BP
               POP DI
               POP SI
               POP DX
               POP CX
               POP BX
               POP AX
               POPF
               RETF                     ;function return
DATA_SEG       SEGMENT   PUBLIC
REQUEST        DB 07,0A,0D,"This System is protected by SECURITY.SYS"
               DB 0D,0A,"The Required Password is case-sensitive."
               DB 0D,0A,"It will not be displayed as you type it."
               DB 0D,0A,"Type your Password, then press ENTER."
               DB 0D,0A,"Password: "
COUNTER        DB 0                     ;character counter
NUMBER_0       DB 08,0                  ;chars. in password
PASSWD         DB "SeCuRiTy       ",0   ;password
PASSBUFF       DB "                 "   ;password buffer
COPYRIGHT      DB 07,0D,0A,"Copyright 1990, Robert Wallingford, P.E.",0D,0A
H_OFF          DW ?                     ;header offset
H_SEG          DW ?                     ;header segment
DATA_SEG       ENDS
LOCAL:         CLD                      ;forward
               MOV BX,0
               MOV AH,2
               MOV DX,0
               INT 010                  ;set cursor
               MOV SI,OFFSET REQUEST    ;set si
               MOV CX,0B2               ;message size.
MSGLP:         PUSH CX
               LODSB
               MOV AH,0E
               INT 010                  ;print request
               POP CX
               LOOP MSGLP
               PUSH DI                  ;save ES:DI
               PUSH ES
               PUSH CS
               POP ES                   ;make es = cs
               CLD                      ;forward
SETUP:         MOV SI,OFFSET PASSWD     ;initialize
               MOV DI,OFFSET PASSBUFF   ; everything
               MOV COUNTER,0            ; about password
PSWLP:         MOV AH,0
               INT 016                  ;get character
               CMP AL,08
               JNE BAKSP
               CMP COUNTER,0            ;service backspace
               JE PSWLP
               DEC COUNTER
               DEC DI
               JMP PSWLP
BAKSP:         CMP AL,0D
               JE CARRT
               CMP COUNTER,0E           ;service carriage ret.
               JE PSWLP
               INC COUNTER
               STOSB
               JMP PSWLP
CARRT:         MOV CX,W[NUMBER_0]
               JCXZ SETUP
               CMP CL,COUNTER           ;check char. count
               JNE SETUP
               MOV DI,OFFSET PASSBUFF
               REPE CMPSB               ;check characters
               JNE SETUP
               MOV SI,OFFSET COPYRIGHT
               MOV CX,02D
CPRLP:         PUSH CX
               LODSB
               MOV AH,0E
               INT 010
               POP CX
               LOOP CPRLP
               POP ES                   ;recover ES:DI
               POP DI
               RET                      ;normal return
```
{% endraw %}

## SECURITY.DOC

{% raw %}
```
                    SECURITY.DOC

This Security System consists of the following five files
    SECURITY.SYS    the Password device driver.
    SECURITY.ASM    the Assembly language file
                    for SECURITY.SYS, A86 code.
    NEWWORD.COM     a program for changing the
                    Password, and more.
    NEWWORD.ASM     the Assembly language file
                    for NEWWORD.COM, A86 code.
    SECURITY.DOC    this Documentation file.

                    BACKGROUND

In most security systems,  the AUTOEXEC.BAT program calls a
Password program  that  requires you to type in the correct
Password before you can continue.  This might be sufficient
to prevent  beginners  from using your computer and reading
all of your private files, but anyone with  more experience
with DOS can abort the whole BAT file with the BREAK key.

SECURITY  is one whole level of sophistication better since
it performs the  Password  request and  verification with a
device driver that cannot be aborted  and occurs before the
Computer calls the AUTOEXEC.BAT file. I don't claim that it
is foolproof. A determined intruder can still bring his own
operating system  on a bootable floppy disk and bypass your
whole system.

To make your Computer System  immune to this risk you would
have to install special  hardware that would only recognize
your special operating system, or some critical part of it.
If you need this much security you should  probably  hire a
Security Consultant  and install his collection of gadgets.
You still won't be really safe. If what you want to protect
is worth all that money, someone will find a more expensive
Security Consultant to bypass all of the gadgets.

                  INSTALLATION

To install this  SECURITY  system  you must add one line to
your CONFIG.SYS file so the Computer will call SECURITY.SYS
as the first device driver that it installs.  This line is;
           device = SECURITY.SYS
if you intend to keep the files in your  root directory, or
           device = [path]\SECURITY.SYS
if you prefer to keep the files in the directory associated
with [path]. This line should be above all other lines that
begin with the word device.

If you don't already have a  CONFIG.SYS  file, you can make
one with the ASCII mode of any  Word Processor.  Or you can
type   COPY CON CONFIG.SYS  then press ENTER, type the line
and at the end of the line  hold down the  CONTROL  key and
press  Z,  then release the  CONTROL  key and press  ENTER.
You should do all this in the  root directory of the  drive
on which you have installed your operating system. For hard
disk systems this is generally  C:\.

                  DESCRIPTION

SECURITY.SYS  identifies  itself and gives the instructions
for entering the  Password.  The Password is case sensitive
and with the original system it is "SeCuRiTy" . As you type
the  Password,  it will  not appear  on the monitor screen.
A "friend"  watching you log on will find it more difficult
to read your keystrokes.  You may use any  ASCII  character
in your Password, including the extended  ASCII set, except
that you can't begin with a blank space.  If you  touch the
wrong key just press  ENTER  and do it again.  SECURITY.SYS
can process backspace  but you may find it difficult to use
this feature without the display.  The Password should have
no more than thirteen characters.  If nothing happens after
you press ENTER, try again. You may have hit a wrong key by
accident.

I suggest that you try  SECURITY  on a bootable floppy disk
before you install it on your hard disk, especially if your
Computer is marginally compatible with IBM BIOS. To do this
format a floppy with the /S option, copy command.com to it,
create the basic one line  CONFIG.SYS  file, and make a two
line AUTOEXEC.BAT file like this:

             c:\
             autoexec.bat
             
Also, copy SECURITY.SYS and NEWWORD.COM to this disk.

Now, with this floppy disk in drive  "A", and with the door
closed to activate this drive, reboot (restart) the system.
After several seconds you should see an announcement  about
SECURITY.SYS and request to enter the Password. If you have
not run NEWWORD.COM, the Password will be "SeCuRiTy".  Type
the Password, disregarding the fact that it does not appear
on the screen, and press ENTER. That should do it.

If it does not work, remove the floppy  disk with  SECURITY
and reboot  with the old system.  If it does work,  and you
want to change the Password, enter the directory containing
SECURITY.SYS and NEWWORD.COM and run  NEWWORD.COM  with the
following syntax:
               NEWWORD XXXXXXXXX
with your new Password in place of the series of Xs.

There can be more than one space between  NEWWORD  and your
new Password, and after the first Password character, space
is a valid  character.  When you press  ENTER,  NEWWORD.COM
will put the number of characters in the new  Password  and
the new Password itself into SECURITY.SYS, and then it will
do something totally unexpected.  It will make  NEWWORD.COM
invisible to commands like DIR, TYPE, COPY, etc.

If other people use your Computer and they don't know about
NEWWORD.COM, they won't accidentally find it and use it. If
anyone does run  NEWWORD  with any set of characters,  then
the next time you start your Computer, you will not use the
correct Password. That is why NEWWORD.COM hides itself each
time you use it.  If you don't want  this feature,  use the
REN  command to change NEWWORD.COM  to  PASSWORD.COM or any
other name that you want.

I have also included the  ASM files for generating the main
files of this  system.  I specifically  wrote  them for the
A86 Compiler, but if you use the other compiler, you should
be able to make the necessary modifications.  The  Compiler
generates SECURITY.BIN. You must rename it SECURITY.SYS.

If you try to  modify this file,  be very careful in making
any changes before the  DATA_SEGMENT.  Device  Drivers must
obey special rules. Also, you can't run them like COM files
and you can't use DEBUG to test them.

                COMMERCIAL

ROBERT WALLINGFORD, P.E. has copyrighted and owns the files
SECURITY.SYS and NEWWORD.COM and their associated ASM files. 
I hereby give you a limited license to use SECURITY.SYS and
NEWWORD.COM  and to copy them and distribute them, provided
that you meet the following conditions:
 
      1)  You may not charge a fee for such copying
          and distribution. 
           
      2)  You must distribute SECURITY as a complete
          set of all files.

      3)  You may ONLY distribute SECURITY in its
          original, unmodified state.   

This  program  is  being  distributed  under the  Shareware
concept,  which urges users to distribute these programs in
original form,  not modified in any way,  to their  friends
and other BBS.  The  author  claims  no  responsibility for
any damage, either accidental or otherwise, through the use
of these programs.  I am providing these programs  "AS  IS"
without warranty of any kind,  either expressed or implied.
The  entire  risk as to the  quality  and  compatibility of
these programs is with YOU.

If you use these  programs and find them of value,  I would
greatly appreciate any contributions ($7 suggested). I will
use it to further develop other useful  software.
         Send any contributions to:
                    ROBERT WALLINGFORD, P.E.
                    2338 N. McVicker Ave.
                    Chicago, IL  60639-2216

                    Ph. (312) 889-1115

Look for these other fine programs that I have written:

PROGRAM                DESCRIPTION                  REGISTRATION FEE
 
SUPERSPY.ZIP A File Viewing utility with a CLIPPER function
             for copying  pieces  from one  file to another
             file or to a printer and a  DIRECTORY function
             to help select the NEXT FILE to view and other
             useful functions.                                  $15.
 
BOOK.ZIP     Make & Read a "COMPUTER BOOK" on your monitor.
             Access any Chapter with one keystroke. Advance
             to next page with Spacebar or  PgDn.  Previous
             page with PgUp.  Return to Index or  Exit with
             "E"                                                 $7.
 
DISPLAY.ZIP Multi-screen  MESSAGE UTILITY. Make and display
            a multi-screen  message,  one screen at a time,
            with  control of the display  duration  and the
            attributes  of each  screen.  Makes  good  Xmas
            Cards, Birthday Greeting, etc.                       $7.
 
MEMO.ZIP    Like DISPLAY.ZIP with BIGGER screens.                $7.


If you register with a $10  contribution, I will send you a
5.25"  floppy  containing  all of them for your  evaluation
and possible future registration.
```
{% endraw %}

## TIMEMAST.DOC

{% raw %}
```

        

        
        
        
        
        
        
        
        
        
                              T I M E  M A S T E R
        
                                  Version 1.1
        
        
        
        
                                 Copyright 1990
        
                                       By
        
                              Geoffrey Broadhurst
                                  P.O. Box 467
                                New Norfolk 7140
                                    Tasmania
                                   Australia
        
        



























        









        

        Disclaimer
        ----------
        
        
        
        The author makes no warranty, express or implied, as to the
        suitability of this program to perform any particular function.
        The author shall in no way be liable for any damages, including
        loss of profits, or any incidental or consequential damages
        resulting from the use of this program or the inability to use
        this program. Further, the author shall not be liable for any
        damage to data or property caused directly or indirectly from
        the use of this program. Whilst every effort has been made to
        ensure that this program performs correctly the user of this
        program assumes total risk for the use of the program.
        
        
        
        
        Licence Agreement
        -----------------
        
        This program is not a "public domain" or free program. It is
        distributed by the "Shareware" method. It is copyright and all
        rights are reserved by the author. Non-registered users are
        granted a limited licence to use the program on a trial basis for
        a period not exceeding one month for the sole purpose of
        ascertaining whether the program meets their requirements. At the
        end of this period registration is required or the person must
        cease to use the program. The address for registration is noted
        elsewhere in this documentation. Please note that the author
        reserves the right to vary the registration fee, without notice.
        
        You are encouraged to copy and distribute this version of the
        program, including placement on electronic bulletin boards. You
        may not, however, make any alterations or omissions to the
        program, support files or documentation. A nominal disk copying
        fee may be charged by persons/companies distributing the
        program.
        
        The program may not be distributed with any other product,
        program or service without the written permission of the author.
        











        









        

                              TABLE OF CONTENTS
        
        
        1 - Overview. . . . . . . . . . . . . . . . . . . . . . . . . 1
        
        2 - Program Files . . . . . . . . . . . . . . . . . . . . . . 1
        
        3 - Installing Time Master. . . . . . . . . . . . . . . . . . 2
        
        4 - Running Time Master . . . . . . . . . . . . . . . . . . . 3
        
        5 - Using Menus . . . . . . . . . . . . . . . . . . . . . . . 4
        
        6 - Logging On. . . . . . . . . . . . . . . . . . . . . . . . 4
        
        7 - Logging Off . . . . . . . . . . . . . . . . . . . . . . . 5
        
        8 - Reports . . . . . . . . . . . . . . . . . . . . . . . . . 6
        
        9 - New Period. . . . . . . . . . . . . . . . . . . . . . . . 7
        
        10- Modifying the Data File (log.dat) . . . . . . . . . . . . 8
        
        11- Registration. . . . . . . . . . . . . . . . . . . . . . . 9
        
        12- Registration Form . . . . . . . . . . . . . . . . . . . . 10
        
        13- Future Enhancements?  . . . . . . . . . . . . . . . . . . 11
        
        14- Note Regarding Memory Requirements. . . . . . . . . . . . 11
























        









        

        1. Overview
        -----------
        
        Time Master is designed to help you keep track of the usage of
        your computer. It helps you to answer the following questions:
        
        1)      How many hours a year is the computer being used?
        
        2)      How many hours is the computer being used for business
        
                purposes and how many for private purposes?
        
        3)      What programs am I using the most?
        
        4)      How many hours is each person with access to the computer
                 
                using the computer?
        
        The main users of this program will, therefore, be individuals
        who need to keep track of the proportion of business and private
        use of their computer for taxation purposes and the company or
        government department which seeks to provide management
        information of the usage of computers.
        
        The way in which this is achieved is by using a logging-on and
        logging-off process (which is like an electronic time sheet). At
        the start of the period in which you wish record your computer
        usage you run Time Master and log-on. This writes the date and
        time to a file on the disk. When you have finished the particular
        task you log-off. Here you enter details regarding the task just
        completed and all these details plus the time elapsed is written
        to a data file. This data file will progressively build up into a
        substantial database of information relating to the use of the
        computer and from this you can generate a number of different
        reports.
        
        
        2. Program Files
        ----------------
        
        The files comprising the "Shareware" version of Time Master are:
        
        
                README.         Short documentation file
        
                TIMEMAST.DOC    This full documentation file
        
                TIMEMAST.EXE    The main program
        
                LOG.DAT         Sample data file
        
                START.DAT       Log On data file


                                     -1-
        








        

        3. Installing Time Master
        -------------------------
        
        
        A. Hard Disk Users.
        
        Copy the program files from the disk you have received them on to
        a directory on the hard disk:
        
                        eg. COPY A:*.* C:\LOG\*.* <ENTER>
        
        I would suggest that you copy the files to a directory (such as
        \LOG) that is only used for Time Master.  (Refer to your DOS
        manual for information on creating directories if you are unsure
        on how to do this).
        
        
        B. Floppy Disk Users.
        
        Copy the program files from the disk you have received them on to
        the disk you wish to run Time Master from (eg. your backup boot
        disk):
        
                        eg. COPY A:*.* B:*.* <ENTER>
        
        (where A: is the disk Time Master is on and B: is the disk you
        want to copy the program to).
        


























                                     -2-
        








        

        4. Running Time Master
        ----------------------
        
        A. Hard Disk Users
        
                1.  Change to the directory in which Time Master is
                    located:
        
                                eg. CD \LOG <ENTER>
        
                2.  Type the following command (followed by the <ENTER>
                    key) at the DOS prompt:
        
                                TIMEMAST <ENTER>
        
        
        Please note that Time Master does not support DOS paths.  In
        other words you MUST have all the program files in the one
        directory and change to that directory before running the
        program. You can, of course, automate this process of changing
        directories by creating a short batch file (refer to your DOS
        manual for details). For example, your batch file could look like
        the following:
        
                                CD \LOG
                                TIMEMAST
        
        Users of Menu programs and DOS shells should refer to their
        program instructions for details on how to run another program
        from their menu program or DOS shell.
        
        
        B. Floppy Disk Users
        
                1.  Place the disc containing Time Master into the current
                    drive and type the following command (followed by the
                    <ENTER> key) at the DOS prompt:
        
                                TIMEMAST <ENTER>
        
        













                                    -3-
        








        

        5. Using Menus
        --------------
        
        Menu items can be selected in one of three ways:
        
        1. Using the cursor keys.
        
            Move the menu selection bar over the option/action you wish to
            select, using the cursor (arrow) keys, and press <ENTER>.
            Monochrome monitor users should note that the menu selection
            bars are not visible in the Shareware version - they should
            use method 2 or 3 for selecting menu items.
        
        2. Using the number keys.
        
            Press the number (key) which corresponds with the menu
            option/action you wish to select. It is not necessary to press
            <ENTER> using this method.
        
        3. Using the alphabet keys.
        
            Press the key which corresponds to the first letter of the
            option/action you wish to select. It is not necessary to press
            <ENTER> using this method. Please note that where there are
            two menu selections that start with the same letter (eg.
            Log On & Log Off) the selection closest to the top of the menu
            is always selected. Therefore, in our example, Log On will
            always be selected if you press "L" at the Main Menu (even if
            the menu bar is highlighting the Log Off action).
        
        
        6. Logging On
        -------------
        
        Simply select the Log On option from the main menu. A window will
        appear on the screen showing the date and time of logging on. The
        file "start.dat" is updated with this information.
        
        
        7. Logging Off
        --------------
        
        This is the most important procedure in using Time Master. In
        order to obtain maximum benefit from the reporting options it is
        important that you are consistent in your naming of the programs
        that you use and user names, ie. don't enter the name of the
        program or user more than one way. The reporting procedures will
        treat J. Brown & John Brown as two different people (ie. users).






                                     -4-
        








        

        To log off select this option from the main menu. A data entry
        screen will appear in which you can enter the required
        information. Note that the information relating to the program,
        user and a comment is optional, you don't have to enter anything
        in these fields, however, the more information you enter the more
        information your reports will give to you.
        
        The first field to enter data to is the "Program" field. Type in
        the name of the program that you were using and press <ENTER>. If
        you do not wish to keep records relating to the usage of
        particular programs, just press <ENTER>. Whichever way you choose
        to name your programs try to make sure that you are consistent in
        the naming of each program. You will note that when you press
        <ENTER> any lower case letters are converted to upper case
        letters (this is to help maintain consistency for the reporting
        procedures).
        
        The second field to enter data into is the "User" field. Type in
        the name of the user and press <ENTER>. Once again this
        information is optional and would be unnecessary for a computer
        only used by one person. In this situation just press <ENTER>.
        Most users will find the best procedure is to enter the initials
        of their name.
        
        The third field to enter data into is the "Comment" field. This
        is optional information you can enter to describe the task just
        completed. Type in the desired comment and press <ENTER>. If no
        comment is desired just press <ENTER>.
        
        The fourth field to enter data into is the "Business Use" field.
        Type in the amount of time for the preceding task which was for
        business use. This could be all of it, none of it (in which case
        you should enter '0' - without the quote), or some other number
        less than the time elapsed. If you enter a number less than zero,
        greater than the time elapsed (since logging on), or with a
        decimal point in it the data entry will abort and you return to
        the main menu. So type in an integer to describe the amount of
        business usage for the preceding task and press <ENTER>. 
        
        Once you have entered the amount of time for business use the
        time (if any) attributable to private use will be automatically
        calculated, from the time elapsed, and the result shown in the
        "Private Use" field.
        
        You can now choose to accept all this data or abort the data
        entry (and perhaps re-enter the correct information if you have
        made a mistake in one of the fields). Press the <ESC> to abort
        the data entry. Press any other key to accept the data. The
        information will be written to the data file "log.dat".
        




                                     -5-
        








        

        During any phase of data entry you can abort the process (for
        instance, if you have made a mistake) by pressing the <ESC> key.
        You will return to Main Menu and can immediately re-select the
        Log Off option if required (or any other option).
        
        Their are four important time constraints that you should be
        aware of:
        
        1.  The time elapsed for an individual task cannot exceed
            (approximately, depending on when you logged on) 24 hours (ie.
            1440 minutes). 
        
        2.  As Time Master uses the DOS system time to measure the time
            elapsed, if you log on and then immediately log off you may
            find that the time elapsed is 0 minutes. Time Master can
            handle such entries and these entries will even appear in your
            reports.
        
        3.  The maximum value for business use is 999 minutes for each
            entry.
        
        4.  The maximum value for private use is 999 minutes for each
            entry.
        
        
        Their are also constraints on the length of the information that
        you record in the program, user and comment fields. The width of
        the respective fields is the maximum amount of information that
        you can record in the field. If you type anything longer than the
        width of the field it will be truncated to the maximum length.
        
        
        8. Reports
        ----------
        
        Select this option to prepare the various reports. All reports
        can be shown on the screen, printed or sent to a disc file (for
        latter printing or incorporation into a word processor, etc.).
        Make sure when selecting the printing option that the printer is
        on and is on-line - if it is not Time Master will abort.
        
        1. Full Report Option
        
        This is the only option where the report shown on the screen
        differs from that sent to a file or the printer. The screen
        option only shows a summary of the total hours logged, hours for
        business and private use, and the total number of entries. When
        the file or printer options are selected this information is
        shown along with all the data entry information, ie. starting
        date and time, program, user, comment, time elapsed, etc. for
        each and every data entry made. When sent to a disc file the file
        is automatically named "fullrpt.txt".
        

                                     -6-
        








        

        2. Program Report Option
        
        Gives details on the use of each program recorded, ie. total time
        logged as being used and the proportion of business and private
        use. If you have not entered program names for some (or all) of
        the data entry procedures you will find that there is an unnamed
        line with information relating to time usage next to it. When
        sent to a disc file the file is automatically named
        "prgmrpt.txt".
        
        3. User Report Option
        
        Gives details on the logged usage by each user, ie. total time
        logged as being used and proportion of business and private use.
        Once again, if user names have not been entered an unnamed line
        will appear in the report with the relevant time data next to it.
        When sent to a disc file the file is automatically named
        "userrpt.txt"
        
        
        9. New Period
        -------------
        
        Most users will want to start a new reporting period, perhaps
        once a year. This option you should select if you wish to start a
        new "log.dat" data file for a new reporting period. When you
        select this option a warning message will appear on the screen to
        remind you that you are about to erase your data file. Press "Y"
        if you do wish to start a new data file for a new reporting
        period - press any other key to abort.
        
        In actual fact, when you do press "Y" your "old" data file is
        actually renamed to "log.sav" and a new blank "log.dat" file is
        created. So if you do accidentally start a new reporting period
        you can exit Time Master and delete the new "log.dat" and rename
        the "old" "log.sav" file to "log.dat" (refer to your DOS manual
        if your are unsure how to delete and rename files).
        
        YOU MUST USE THIS OPTION WHEN YOU WISH TO COMMENCE USING TIME
        MASTER IN EARNEST. If you fail to do this then the data contained
        in the sample data file supplied with the program will result in
        your reports containing both the data originally contained in the
        sample data file as well as any data that you have added to it.
        










                                     -7-
        








        

        11. Modifying the Data File (log.dat)
        -------------------------------------
        
        Version 1.1 (the "Shareware" version) contains no facilities for
        editing the data file. You can, however, edit the file using a
        text editor or wordprocessor that produces pure ASCII text. Be
        VERY careful in editing the data file in this manner. If you make
        a mistake the program may "hang" or you may subsequently corrupt
        the data file when entering data. This is another reason to
        register. Version 2.0 of the program (available to registered
        users) contains editing features.
        
        Please note that if you do make an error in recording the Log Off
        information and you realise this after you have returned to the
        Main Menu after logging off, there is an easy way to restore the
        data base to the state it was prior to the last entry. When you
        make an entry to the data base file (log.dat) the current log.dat
        is renamed to log.bak and the new entry is added to a new log.dat
        file. This means that you always have two versions of the data
        file. The only difference between the two is that log.dat
        has the most recent Log Off entry recorded in it - log.bak does
        not. So to delete the last entry exit Time Master, delete the
        log.dat file, and rename the log.bak file to log.dat (refer to
        your DOS manual if you are not sure how to delete and rename
        files).
        




























                                     -8-
        








        

        12. Registration
        ----------------
        
        As stated above, all users are required to register after
        examining the program and determining whether it meets their
        requirements, and in any case after one month of usage. The
        registration fee is currently very modest. At the time of
        writing $30.00 (AUS) is only about $24.00 (US). 
        
        On registration users will receive the latest program version,
        and have a choice of date formats for the program - an English
        date format (dd.mm.yy) or a U.S. date format (mm.dd.yy.). 
        
        Version 2.0 will be released in the last quarter of 1990 and will
        contain the following features:
        
        1.  Increased report options (monthly reports)
        
        2.  Editing features for the data file
        
        3.  A utility program to automate logging on without user input -
            useful for incorporation in batch files.

        4.  Other miscellaneous features, some "tidying-up" of the
            program and improved error handling.
        
        
        A registration form is included on the next page which you should
        forward along with your remittance. Funds should be made payable
        to the author in Australian dollars, ie. a foreign bank draft
        should be forwarded by non-Australian users.
        
        Each registered version can only be used on one computer,
        therefore, if you require more than one copy for more than one
        computer write to the author with details of the number of copies
        required for information on 'site' licenses.
        
        Registered users will receive major program revisions at a
        discount to persons registering for the first time. 















                                     -9-
        








        

        13. Registration Form
        ---------------------
        
        
        
                         TIME MASTER REGISTRATION FORM
                         _____________________________
        
        
        
        Name:____________________________________________
        
        Company:_________________________________________
        
        Address:_________________________________________
        
        City:________________________State:______________
        
        Postcode/Zip:________________Country:____________
        
        
        Please send me a registered version of Time Master.
        
        Enclosed is a cheque made payable to the author in 
        
        Australian dollars.
        
        
        1 registered copy of Time Master    (AUS) $30.00   ___________
        
        3.5" diskette (extra) - optional          $ 2.00   ___________
        
        Airmail delivery (extra) - optional       $ 5.00   ___________
        
        
        
        Total remittance:                   (AUS) $        ___________
        
        
        
        Date Format Required - [U.S.A. or English] 
        
        (if not specified the U.S.A. date format version (mm.dd.yy) will
        be supplied)
        
        
        Mail to:                 Geoffrey Broadhurst
                                 P.O. Box 467
                                 New Norfolk  7140
                                 Tasmania
                                 Australia
        


                                    -10-
        








        

        14. Future Enhancements?
        ------------------------
        
        The author's philosophy is to have the program reflect the needs
        of the users. Comments are welcomed from users when they are
        registering as well as at any time in the future. The author will
        answer the problems and questions of registered users as quickly
        as possible. Future program development will be guided by
        feedback from registered users.
        
        The following enhancements, above those forthcoming in version
        2.0, are currently being considered. Please send your comments on
        these and other possible features.
        
        1.  Multiple data files (for different logging purposes).
        
        2.  Optional disk, rather than RAM, based database for very large
            data files.
        
        3.  Optional memory residency.
        
        4.  More report types.
        
        5.  User supplied name for reports sent to a disc file.
        
        6.  Pre-input of authorised program and user names - to ensure
            consistency in logging off.
        
        7.  Mouse support.
        
        8.  Icon based menu system.
        

        15. Note Regarding Memory Requirements
        --------------------------------------
        
        The program is currently completely RAM based. This permits the
        fastest generation of reports, however, it does limit the maximum
        number of data file entries. The maximum number will, of course,
        vary depending on the amount of RAM you have available. As a very
        rough guide, for a PC with 512K of RAM, you will be limited to a
        data file of around 150K to 200K (around 2500 to 3000 entries).
        The smaller each data entry is the more entries your file will be
        able to contain. Therefore, make each data entry as small as
        possible, while still being sufficiently descriptive.

        If the program aborts while generating reports, the most likely
        cause is that the data file has become to large for the memory
        on your computer to process. In the not too distant future I
        anticipate implementing optional disk based data files, this will
        markedly slow down report generation, however it will allow data
        files to be very much larger.


                                    -11-
        







```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2465

     Volume in drive A has no label
     Directory of A:\

    FILE2465 TXT      3405  10-30-90   2:00p
    GO       TXT      1850   1-01-80   4:39a
    GO       BAT        40   1-01-80   6:00a
    NEWWORD  ASM      4714   7-11-90
    NEWWORD  COM       767   7-11-90
    SECURITY ZIP      8210   7-11-90   9:13a
    SECURITY ASM      4103   7-11-90
    SECURITY SYS       461   7-11-90
    SECURITY DOC      8999   7-11-90
    LOG      DAT      3937   7-07-90   6:56p
    README             654   7-14-90   5:38p
    START    DAT        28   7-07-90   1:39p
    TIMEMAST DOC     27529   9-01-90   6:41p
    TIMEMAST EXE     77510   8-29-90  10:17p
    GO~1     BAT        40   1-01-80   6:00a
    GO~1     TXT       694   1-01-80   6:42a
           16 file(s)     142941 bytes
                           12288 bytes free
