---
layout: page
title: "PC-SIG Diskette Library (Disk #534)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0534/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0534"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER HANDBAG #1"

    This disk contains several powerful DOS utilities, a background
    dialer, a text file lister, and a multi-tasking operating
    environment.  It also contains a communications program, some
    printer utilities, and a small memory resident program to
    automatically disable Caps Lock when an alphabetic key is
    pressed.  All but one of the programs are fully documented, and
    most have Assembly source code or BASIC listings.
    
    System Requirements:  128k, 1 disk drive, monochrome
    monitor.
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>. For instructions on ASM listings, refer to your
    Assembler manual.
    
    Suggested Registration:  SDIR50 $10.00
    
    File Descriptions:
    
    The First Disk Contains:
    CAPSUNLK COM  Memory resident utility to unlock the caps-lock
    CAPSUNLK ASM  ASSEMBLY Source Listing for CAPSUNLK.COM
    INT13    COM  Copy Protection Breaker DOS Utility
    INT13    ASM  ASSEMBLY Source Listing for Copy Protection Breaker
    ERRMON   DOC  Documentation for Disk I/O Error Monitor
    ERRMON   COM  Disk I/O Error Monitor for the AT
    DISKIDX  DOC  Documentation for disk organizer
    DISKIDX  BAS  BASIC source code listing for disk organizer utility
    DIALER95 DOC  Background dialer documentation
    DIALER95 COM  Background dialer program
    TMODEM32 COM  Program thats transmit data in several protocols.
    TMODEM   KEY  Auxiliary Communications utility
    TMODEM   CNF  Configuration file for communications program
    TFL      EXE  ASCII File Transfer Utility - Compiled
    TFL      DOC  ASCII File Transfer Utility - Documentation
    TFL      BAS  ASCII File Transfer Utility - BASIC source listing
    SDIR50   DOC  Documentation for all purpose directory utility
    SDIR50   COM  All purpose directory utility  and command shell
    LPTX     DOC  Documentation for above
    LPTX     COM  Allow capture of printer output to disk.
    INT13    DOC  Documentation for Copy Protection Breaker
    
    The Second Disk Contains:
    QWIKLABL KEY  Key assignments file for QWIKLABL
    QWIKLABL EXE  Computer-assisted typing of gummed labels
    PCDISK   COM  Disk cataloging program.
    COPYQ    EXE  Wildcard selective y/n copy, such as used in VDEL.
    LOAD     ASM  ASSEMBLY Source for LOAD.COM
    LOAD     COM  Loads COM file larger than 64KB.
    SUPEREN  COM  Renames files, subdirectories, volume labels.
    PUSH     COM  Save CRT image to a file.
    PUSH-POP DOC  Documentation for PUSH & POP.COM.
    POP      COM  Restore CRT image from a file.
    INDEXER  DOC  Documentation for use of INDEXER
    INDEXER  PAS  Microsoft PASCAL Source Code of INDEXER
    TRIVIA   C    A chuckle for C programmers.
    SUPEREN  ASM  ASSEMBLY Source for SUPEREN.COM
    INDEXER  EXE  Computer-aid for book indexing
    SHOW     COM  Like TYPE with MORE built in.
    FLIP     ASM  ASSEMBLY Source for FLIP.COM.
    FLIP     COM  Flips between page 0 & 1 of graphics text screens.
    CED1_03B COM  DOS Multiple Command Line Editor-create new DOS commands
    CED1_03B DOC  Documentation for CED1_03B.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAPSUNLK.ASM

{% raw %}
```
        name    capslk
        page    55,96
        title   'CAPSLK - a CapsLock unlatcher'

; This install and stay resident program releases the keyboard from
; the CapsLock state whenever a letter key is pressed while a shift
; key also depressed.  tHIS ELIMINATES A WELL KNOWN ANNOYANCE.
;
; Note that keyboards with CapsLock indicator lights may get out of
; synchronization since they have no way of knowing when the caplock bit
; in KB_FLAG is changed.
;
; This source based on a disassembly of CAPSLOCK.BAS in the Oct 15 '85
; issue of PC Magazine.  Annotation and some minor changes in code to
; shorten program and reduce the number of execution clocks, implementation
; of function call 31h vs INT 27h by Herb Shear, SVCS Librarian.

cseg    segment         para public 'CODE'

        assume          cs:cseg, ds:cseg, es:cseg

        org     100h                ;start of com program


begin:  jmp     short sta_res       ;proceed to stay resident code
vector: dd      ?                   ;storage for next code in daisychain

start   proc near
        sti                         ;enable interrupts
        push    ax                  ;save registers
        push    cx
        push    di
        push    es
        pushf
        xor     ax,ax               ;clear ax register
        mov     es,ax               ;ES =  seg 0
        mov     di,417h             ;set a pointer to KB_FLAG
        mov     ah,es:[di]          ;load KB_FLAG
        test    ah,03h              ;see if a shift key is pressed
        jz      exit                ;exit if not pressed
        in      al,60h              ;get keyboard scan code from port
        cmp     al,10h              ;compare to Q key position
        jb      exit                ;lower numbered position than Q key
        cmp     al,19h              ;compare to P key position
        jna     unlock              ;key in Q..P range
        cmp     al,1eh              ;compare to A key position
        jb      exit                ;non-alpha key position
        cmp     al,26h              ;compare to L key position
        jna     unlock              ;key in A..L range
        cmp     al,2ch              ;compare to Z key position
        jb      exit                ;non-alpha key position
        cmp     al,32h              ;compare to M key position
        ja      exit                ;key not in Z..M range
unlock: and     ah,0bfh             ;clear CapsLock bit
        mov     es:[di],ah          ;reset KB_FLAG
exit:   popf                        ;restore registers
        pop     es
        pop     di
        pop     cx
        pop     ax
        jmp     dword ptr cs:[vector]  ;follow the INT 9 daisychain

sta_res:
        xor     ax,ax               ;zero ax register
        mov     es,ax               ;zero es register
        mov     di,9h * 4h          ;interrupt 9 address
        mov     ax,es:[di]          ;get the interrupt vector
        mov     bx,es:[di+2]
        mov     si, offset vector   ;pointer to vector storage
        mov     [si],ax             ;save the interrupt vector
        mov     [si+2],bx
        mov     bx,ds               ;get seg of resident code
        cli                         ;turn off interrupts
        mov     ax,offset start     ;get offset of resident code
        mov     es:[di],ax          ;store as new INT 9 vector
        mov     es:[di+2],bx
        sti                         ;turn interrupts back on
        mov     dx,offset sta_res   ;end of resident code + 1
        mov     cl,4                ;prepare for shift
        shr     dx,cl               ;convert to paragraphs
        inc     dx                  ;roundup to full paragraph
        mov     ax,3100h            ;set exit code = zero
        int     21h                 ;terminate & stay resident
start   endp
cseg    ends
        end    begin
```
{% endraw %}

## DIALER95.DOC

{% raw %}
```
DIALER95.DOC

         DIALER is a background dialer program. Once dialer is initiated,
 you can run other applications on your PC while DIALER is redialing as a
 BACKGROUND task. 

	When DIALER gets a connect with a remote system you will get an 
 alarm while in your wordprocessor, data base, spreadsheet or wherever
 you happen to be. Just save your work, exit, and start your communication
 program. 

	To activate DIALER, just type DIALER at the DOS prompt, choose
 up to five numbers, including a prefix (and or) suffix. A prefix character
 may also be placed anywhere in a phone number within the dialing directory.


	 To create a customized version, type DIALER INSTALL at the DOS
 prompt. DIALER always recreates itself as DIALER.COM.  

	 DIALER requires DOS 2.x or later, an autodial modem which sets
 pin 8 of the RS232 port high with a Carrier Detect. If DIALER refuses to
 send the dialing string, be sure the proper switch is set on your modem
 to allow the CD line to go high and low with a carrier. If DIALER continues
 to dial after a carrier, check if your modem uses pin 8 for the CD and that
 it is properly cabled. 

	Try DIALER with Memory Shift. Load DIALER first, using no phone
 number(s). Load Memory Shift, in one partition load your communication
 package, in another run DIALER. When you hear the alarm, switch partitions
 and your online.

		      Mike Nagel Jr.
                      Cincinnati, OH 

	 If you have any questions or comments, please leave a message on
 Allen's Fido Net 108/85, (513)579-2587. 


```
{% endraw %}

## DISKIDX.BAS

{% raw %}
```bas


2  '
4  '
6  'INDEX  (ver. 3.20)
8  '
10 'by Alan Centa
12 '   504 Ethan Allen Ave.
14 '   Takoma Park, MD  20912
26 '
28 '
30 '***************************  NOTICE  ***************************
31 '*  A limited license is granted to all users of this program,  *
32 '*  to make copies of this program and distribute them to other *
33 '*  users, on the following conditions:                         *
34 '*     1. The notices contained in lines 2 through 50  of the   *
35 '*        program are not to be altered or removed.             *
36 '*     2. The program is not to be distributed to others in     *
37 '*        modified form.                                        *
38 '*     3. No fee is to be charged for copying or distributing   *
39 '*        the program without an express written agreement with *
40 '*        the holder of the copyright.                          *
41 '*                                                              *
42 '*                 Copyright (c) 1983 Alan Centa                *
43 '****************************************************************
44 '
45 '
46 '
47 '
48 '
49 '
100 KEY OFF: WIDTH 80: WIDTH "LPT1:",132: SCREEN 0,0,0,0: CLS
110 ' MENU for indexing program
120 FILE$="INDEX32" :FALSE=0 :TRUE=NOT FALSE :QT$=CHR$(34): DRIVE$="A"
130  DIM D$(80), AC$(1000), AD$(20)
140  ACCFLAG=0: ADSFLAG=0: NAD=1: NAC=0
150 '
160 ' SET UP FUNCTION KEYS TO NUMBERS
170 KEY 1,"": KEY 2,"": KEY 3,"": KEY 4,"": KEY 5,""
180 KEY 6,"": KEY 7,"": KEY 8,"": KEY 9,"": KEY 10,"": KEY OFF
190 '
200 CLS
210 COLOR 4:LOCATE 2,6:PRINT "US NEWS - Disk indexing program - VERSION 3.2"
220 COLOR 7:LOCATE 4,12:PRINT "INDEXING FUNCTIONS AVAILIBLE"
230 LOCATE 6,3:PRINT "UNSHIFTED": LOCATE 6,35: PRINT "SHIFTED"
240 LOCATE 7,3,0 :PRINT "1. INDEX NEW DISK"
250 LOCATE 7,35,0 :PRINT "1. TURN ACCUMULATION ";
260 IF ACCFLAG=0 THEN PRINT "OFF" ELSE PRINT "ON"
270 LOCATE 8,3,0 :PRINT "2. RETITLE DISK"
280 LOCATE 8,35,0 :PRINT "2. TURN AUTO DISPLAY ";
290 IF ADSFLAG=0 THEN PRINT "OFF" ELSE PRINT "ON"
300 LOCATE 9,3,0 :PRINT "3. PRINT CURRENT INDEX"
310 LOCATE 9,35,0 :PRINT "3. PRINT ACCUMULATED INDEX"
320 LOCATE 10,3,0:PRINT "4. SPACE PRINT"
330 LOCATE 10,35,0:PRINT "4. SPACE PRINT"
340 LOCATE 11,3,0:PRINT "5. EJECT PRINT"
350 LOCATE 11,35,0:PRINT "5. EJECT PRINT"
360 LOCATE 12,3,0:PRINT "6. SELECT DRIVE"
370 LOCATE 12,35,0:PRINT "6. CLEAR ACCUMULATION"
380 'LOCATE 13,3,0:PRINT "7. SAVE INDEX TO A DOS FILE"
390 'LOCATE 13,35,0:PRINT "7. SAVE ACCUMULATION"
400 LOCATE 17,3,0:PRINT "ESC KEY - EXIT TO SYSTEM"
410 '
420 POKE 106,0 :'CLEAR KYBD BUFFER
430 K$ = INKEY$:IF K$ <> "" THEN GOTO 420
440 K$ = INKEY$:IF K$ = "" THEN GOTO 440
450 ON ERROR GOTO 0  : 'WAS 520
460 A$=MID$(K$,1,1) :'PRINT A$,ASC(A$)
470 IF ASC(A$)=0 THEN GOSUB 1470
480 IF A$="1" THEN GOSUB 760: GOTO 200: 'INDEX DISK
490 IF A$="!" THEN ACCFLAG=NOT ACCFLAG: GOTO 200 ; 'ACCUM ON/OFF
500 IF A$="2" THEN GOSUB 1100: GOTO 200: 'RENAME
510 IF A$="@" THEN ADSFLAG=NOT ADSFLAG: GOSUB 1130 :GOTO 200:  'AUTO DISPLAY
520 IF A$="3" THEN GOSUB 1260 : GOTO 420: 'PRINT CURRENT
530 IF A$="#" THEN GOSUB 1590 : GOTO 200: 'PRINT ACCUMULATED
540 IF A$="4" THEN GOSUB 1380: GOTO 420: 'SPACE PRINTER
550 IF A$="$" THEN GOSUB 1380: GOTO 420: 'SPACE PRINTER
560 IF A$="5" THEN GOSUB 1420: GOTO 420: 'EJECT
570 IF A$="%" THEN GOSUB 1420: GOTO 420: 'EJECT
580 IF A$="6" THEN GOSUB 1450: GOSUB 760: GOTO 200: 'CHANGE DRIVE
590 IF A$="^" THEN GOSUB 1940           : GOTO 200: 'CLEAR ACCUMULATION
600 IF A$="7" THEN
610 IF A$="&" THEN
620 IF A$="8" THEN
630 IF A$="*" THEN
640 IF A$="9" THEN
650 IF A$="(" THEN
660 IF A$="0" THEN
670 IF A$=")" THEN
680 IF A$=CHR$(13)THEN LOCATE 20,3,0:PRINT"                         ": GOTO 420
690 IF A$= CHR$(27) THEN GOTO 740
700 BEEP: LOCATE 20,3,0:COLOR 22: PRINT " FUNCTION NOT AVAILIBLE"
710 COLOR 7: GOTO 420
720 BEEP: LOCATE 20,3,0:COLOR 20: PRINT " DRIVE NOT READY"
730 COLOR 7: RESUME 210
740 ON ERROR GOTO 0: CLS: CHAIN "MENU": END
750 '
760 'NEW DISKETTE INDEX
770 PRINT "Enter title of diskette:"
780 ON ERROR GOTO 720
790 CLS: FILES DRIVE$+":*.*" :PRINT:PRINT
800 ON ERROR GOTO 0
810 I=1: J=1: N=0: A$="":
820 WHILE SCREEN(I,J)<>0 AND J<78 AND SCREEN(I,J)<>32
830   WHILE SCREEN(I,J)<>0 AND SCREEN(I,J)<>32
840      FOR K=9 TO 11
850        A$=A$+CHR$(SCREEN(I,J+K))
860      NEXT K
870      FOR K=0 TO 7
880        A$=A$+CHR$(SCREEN(I,J+K))
890      NEXT K
900      IF ACCFLAG=0 THEN NAC=NAC+1:AC$(NAC)=A$+STR$(NAD)
910      N=N+1: D$(N)=A$: A$="": I=I+1
920      WEND
930   I=1: J=J+13: WEND
940 PRINT "ENTER DISKETTE NAME:"
950 C=0 :S=0
960 ' START OF SHELL METZNER SORT
970 M=N
980 M=INT(M/2) :IF M=0 THEN 1090
990 J=1 :K=N-M
1000 I=J
1010 L=I+M :C=C+1
1020 IF D$(I) <=D$(L) THEN 1060
1030 SWAP D$(I),D$(L)
1040 I=I-M
1050 IF I>0 THEN 1010
1060 J=J+1
1070 IF J>K THEN 980
1080 GOTO 1000
1090 '
1100 CLS:BEEP: INPUT "Enter title of diskette:",TITLE$: B$="               "
1110 NEWNAME=1: AD$(NAD)=TITLE$: NAD=NAD+1
1120 '
1130 IF ADSFLAG<>0 THEN RETURN
1140 'SHOW NAMES ON CURRENT DISK
1150 CLS: PRINT "Enter title of diskette:";TITLE$+"     "+DATE$
1160 OLDEXT$=" ":J=0:A$=""
1170 FOR I=1 TO N
1180 IF J=INT(J/6)*6 THEN PRINT A$:A$=""
1190 IF MID$(D$(I),1,3)=OLDEXT$ THEN 1220
1200 OLDEXT$=MID$(D$(I),1,3):PRINT A$: PRINT
1210 PRINT "."+OLDEXT$+":": J=0: A$=""
1220 A$=A$+MID$(D$(I)+B$,4,12):J=J+1
1230 NEXT I: PRINT A$
1240 GOSUB 1520: RETURN
1250 '
1260 'PRINTING THE INDEX
1270 OLDEXT$=" ": LPRINT "Diskette: "+TITLE$+"    "+DATE$
1280 LPRINT:J=0:A$=""
1290 FOR I=1 TO N
1300 IF J=INT(J/6)*6 THEN LPRINT A$:A$=""
1310 IF MID$(D$(I),1,3)=OLDEXT$ THEN 1340
1320 OLDEXT$=MID$(D$(I),1,3):LPRINT A$: LPRINT:PRINT
1330 LPRINT "."+OLDEXT$+":": J=0: A$=""
1340 A$=A$+MID$(D$(I)+B$,4,12):J=J+1
1350 NEXT I:LPRINT A$
1360 RETURN
1370 '
1380 'SPACE PRINTER
1390 LPRINT : RETURN
1400 '
1410 'EJECT PRINTER
1420 LPRINT CHR$(12);: RETURN
1430 '
1440 'CHANGE DRIVE
1450 INPUT "ENTER DRIVE LETTER-",DRIVE$:NEWNAME=0:RETURN
1460 '
1470 ' INTERPRET FUNCTION KEYS
1480 A=ASC(MID$(K$,2,1))
1490 IF A>58 AND A<69 THEN A$=MID$("1234567890",A-58,1)
1500 IF A>83 AND A<94 THEN A$=MID$("!@#$%^&*()",A-83,1)
1510 RETURN
1520 ' ANY KEY TO END
1530 LOCATE 25,1: PRINT "PRESS ANY KEY TO CONTINUE";
1540 POKE 106,0 :'CLEAR KYBD BUFFER
1550 K$ = INKEY$:IF K$ <> "" THEN GOTO 1520
1560 K$ = INKEY$:IF K$ = "" THEN GOTO 1560
1570 ON ERROR GOTO 0  : RETURN
1580 '
1590 'PRINTING ACCUMULATED DATA
1600 PRINT "ENTER ACCUMULATION NAME:";
1610 C=0 :S=0
1620 ' START OF SHELL METZNER SORT
1630 M=NAC
1640 M=INT(M/2) :IF M=0 THEN 1740
1650 J=1 :K=NAC-M
1660 I=J
1670 L=I+M :C=C+1
1680 IF AC$(I) <=AC$(L) THEN 1720
1690 SWAP AC$(I),AC$(L)
1700 I=I-M
1710 IF I>0 THEN 1670
1720 J=J+1
1730 IF J>K THEN 1640 ELSE 1660
1740 ' ---- END OF S/M SORT
1750 '
1760 'PRINTING THE INDEX
1770 INPUT " ",TITLE$
1780 'PRINT DISK NAMES
1790 OLDEXT$=" ": LPRINT          TITLE$+"    "+DATE$
1800 FOR I=1 TO NAD-1: LPRINT I,AD$(I): NEXT I
1810 FOR I=1 TO 5 : LPRINT: NEXT I
1820 '
1830 OLDEXT$=" ": LPRINT CHR$(12)+TITLE$+"    "+DATE$
1840 LPRINT:J=0:A$="":B$="            "
1850 FOR I=1 TO NAC
1860 IF J=INT(J/6)*6 THEN LPRINT A$:A$=""
1870 IF MID$(AC$(I),1,3)=OLDEXT$ THEN 1900
1880 OLDEXT$=MID$(AC$(I),1,3):LPRINT A$: LPRINT:PRINT
1890 LPRINT "."+OLDEXT$+":": J=0: A$=""
1900 A$=A$+MID$(AC$(I)+B$,4,14):J=J+1
1910 NEXT I:LPRINT A$
1920 RETURN
1930 '
1940 ' CLEAR ACCUMULATION
1950 NAD=1: NAC=0: RETURN

```
{% endraw %}

## DISKIDX.DOC

{% raw %}
```
         Documentation for INDEX.BAS
     
     If you have more than two or three disks lying about, and are as
scatterbrained as I, there comes a time when it is difficult to
remember exactly where that last quarter data was placed in the ten
boxes on the desk.  At that moment a desire to be organized sweeps
over me, but it passes.  Anyway, occasionally I become  curious as to
what all those boxes contain and how many versions of P-C-MAN I really
have.  Toward this end this program is bent, perhaps you can use or
modify it to your needs.
     
     To use the program first take a little time to get ready.
Organize your diskettes into groups (say all the PC-Users group
software exchange, Budget Disks 1-80, Stolen Games, s.r.l.) and then
within each group in some order (alphabetic, numerical, random.)  Now
run the program under basica (I haven't tried it under basic, it might
work).  The program as it sits normally runs under another basic
program which is my system menu named (unremarkably) MENU.BAS.   
     
     The Program presents a menu of functions you can perform divided
into two columns and refer to the "current disk", the "accumulated
directory" and the printer.  The functions in the first column are
invoked by pressing the corresponding function code or number key.
The second column functions are via the shifted function keys or
shifted (top row only) number keys.
     
     Now, take the first disk and (in a one drive system) replace the
program disk with the data disk and press "1".  The drive whirrs, the
index shows on the screen (yuick, it's all mixed up) and the program
prompts for the name of the disk.  If you don't remember, it's
advisable to take it out and look. (Meanwhile the program is really
chugging away.)  Type in the name and if you're moderatly quick, it
won't show right away. Now the Index shows up on the screen sorted by
extension and name.  If that's not the way you want it, rewrite it.
If you don't  want to see these screens , press <Shift>2 and they
won't come up any more.
     
     If after seeing that on the disk labeled Fourth quarter sundries
you really have letters to customers, you may (1.) Relabel your disk or
(2.) Change the name of the disk for the indexing program by pressing
"2".  The program then will ask for a new name, which it ducks away
for  later.
     
     Now if you would like this layout of files on this disk on paper
to stuff into the disk protective sleeve, paper your room, or add to
some notebook, Press "3" and off it goes to the printer.  I assume you
have previously turned the printer on and aligned the paper.  No?
Well, you can take time now and press "3" until it comes out to your
liking.
     
     Speaking of aligning the paper, you can control the printer
directly from this program by pressing "4" with the result of that a
blank line.
     
     More useful to my way of thinking is bringing up a new page which
is controled by pressing "5".  Try it, it sure beats varying the
printer offline, pressing form feed, finding out it was offline and
you just put it online, pressing offline again, pressing form feed,
starting to print something to find out the printer is offline,
pressing online, missing, hitting form feed, waiting while the Epson
plays chinese water torture and finally with great care and
deliberation pressing the online key.  Ok, gloat you people with rapid
slewing it's at least another wasted sheet of paper.
     
     Now for those who have more than one drive a command "6" will
prompt you for the name of the drive containing the data you really
want to index.  Read that again, it means make sure the disk is
already  there before you answer the question or it goes spinning off
looking for it.  I forget whether or not the error is trapped, another
exercise  for the student.  With two drives, you can really make the
program work  by swapping the disks while the other is being
processed, but start simply.
     
     Index a few disks with the program before trying the shifted
commands or they'll be really boring.
     
     Actually I'm not sure why you would want to turn off the
accumulating function, unless there was a whole stack of unlabeled
disks and all you wanted was a sorted directory to go with each but
for  the sake of completness pressing <Shift>1 will turn the trick and
save the core.  Oh, yes if you have turned it off the menu shows it
and pressing <Shift>1 will turn it on again.
     
     I mentioned turning off the automatic display to the screen
before.  It got to be a bother to strike the return key so that
function got in.  If you run a lot of disks through this program you
might feel that way too.  Again pressing <Shift>2 turns this off and
on.
     
     Now for the good stuff, the raison d'etre.  With the group of
disks accumulated press <Shift>3 and the printer takes off, printing
first a list of the diskettes with a reference number beside each then
a directory sorted by  extension and entry for the whole magilla and
the disk reference number  beside each entry.
     
     For some reason I duplicated the printer control functions in the
upshift mode.  Suffice it that <Shift>4 will space the printer and
<Shift>5 will make it eject.  If you don't believe me try it.
     
     And on to the next group of disks.  Press <Shift>6 and the whole
accumulation goes to that great bit bucket in the sky and you start
reasonably fresh.
     
     When you're all done, press the Esc key and the program tries to
run a program called "MENU.BAS" (I told you about that earlier).
Anyhow, have fun using this thing or scrounging through the code.  
     
     Alan Centa, 504 Ethan Allen Ave, Takoma Pk, MD 20912
65399 '<*>End of file<*>,Type c/r to return to menu  A=ASC(MID$(K$,2,1))1490 IF A>58 
```
{% endraw %}

## ERRMON.DOC

{% raw %}
```






                                    ERRMON

                              By Robert J. Newton

       After experiencing a variety of problems with the hard disk on
       my AT, I decided that I wanted a more informative report of disk
       I/O errors than that provided by DOS.  ERRMON is the result.

       ERRMON is a resident program which inserts itself in the INT 13
       chain.  It then sits quietly watching for any error condition
       returned by the disk driver.  When an error is detected, it
       springs to life and prints an error message on the screen.  This
       message is in most cases far more informative than that provided
       by DOS.  It then gracefully returns to the caller to let it do
       what it wishes with the error.

       Under the proper conditions ERRMON will let you know when DOS is
       making retries.  However, ERRMON does not scroll the screen. 
       This means that it is possible that a second message will overlay
       the first and you would not be aware of the retry unless the
       calling program causes a scroll.

       A word of caution.  ERRMON has been written to respond to the
       error codes returned by the IBM BIOS disk drivers on the PC, XT
       and AT as shown in the various BIOS listings.  Results with
       other drivers are totally unknown although it might be assumed
       that they map their error codes the same in order to achieve
       compatibility.  There are no checks for machine or drive type.

       In addition, the errors defined for the PC/XT and AT fixed disk
       drivers are not the same in all cases.  ERRMON responds to the
       codes for both.  It is possible, but not likely, that say the AT
       could through some glitch return an error code that is not
       defined on the AT, but is on the XT.  Instead of displaying an
       "Undefined error" message, ERRMON would display the message
       defined for the XT.  This possibility was considered so remote
       that it was not trapped.

       The only error that ERRMON does not respond to is applicable
       only to the AT.  Its floppy disk driver reports an error when a
       disk is changed.  This is not a true i/o error and is ignored by
       ERRMON.

       ERRMON's overhead is essentially nil, only four instructions
       when there is no error.  Approximately 1K of memory will be used,
       mostly for the message text.

       The video attribute for the error messages has been set to 0F,
       intense white.  The messages will print in the lower right
       corner of the screen.  You may change both of these by using
       DEBUG.  The attribute byte is at offset 02EE and the screen line
       is at offset 02E2.  Note that the screen line is relative to 0

                                       1





       so that the last line is hex 18, decimal 24.  For those with
       MASM, you may change the EQUATEs at the beginning.  You may also
       change the message text, perhaps to shorten it so that less
       memory will be needed.

       Installation is simple, just type errmon.  A successful
       installation will return ERRORLEVEL 0, unsuccessful will return
       255.  It can be installed by an AUTOEXEC.BAT, preferably after
       anything else which might place itself in the INT 13 chain.  You
       can use >nul to avoid the sign on message.



                                Error messages

       Sense failure (PC/XT only)

       Status error (AT only) - The controller status register returned
       an error condition, but the error register did not contain an
       error code.

       Write fault (AT only) - Indicates a hardware problem with the
       drive. 

       Undefined error - An error code was returned for which BIOS has
       not defined an error.

       Drive not ready (AT only)

       No response - What DOS calls Drive not ready.

       Seek failure - An attempt to seek to the requested track was
       unsuccessful.

       Controller failure - Probably indicates that the controller could
       not successfully complete the requested command within the
       alloted time.

       EEC corrected data error - An information report that the
       controller's EEC algorithm successfully corrected a soft data
       error.  You should copy the file and delete the original if this
       happens frequently.

       Bad CRC/EEC on read - The sector could not be successfully read. 
       Retries should be made and if successful the file should be
       rewritten or copied which will usually cure the situation. 
       Otherwise, use RECOVER.

       Bad track (PC/XT only) - An operation was attempted on a track
       flagged bad by the low level formatter.  Such areas should have
       been marked bad in the FAT.


                                       2





       Bad sector (AT only) - Similar to Bad track.

       Data crosses DMA boundary - This indicates a software problem;
       DMA cannot operate with more than 64K of data.

       DMA overrun - The controller could not get DMA access; a retry
       should succeed.

       Drive init failure - Probably indicates an attempt to initialize
       an invalid drive number.

       Drive reset failure - An attempt to reset the drive system
       failed.

       Sector not found - Bad news.  The requested sector could not be
       found.  Assuming the values were valid, this indicates a flawed
       disk.  Absent a very capable disk zapper and the knowledge of its
       use, the only cure is a low level format.  It is also possible
       that a disk made in one drive cannot be read in another because
       one of them is out of alignment.

       Diskette write protected - Take the tab off.  If there is no tab
       the drive's sensors are probably bad.

       Address mark not found - Very bad news.  See sector not found.

       Bad controller command - An invalid command was sent to the
       controller.


       ERRMON is (C) Copyright 1985 by Robert J. Newton, but hereby
       released to the public domain for private non-commercial use.  It
       may be freely copied and distributed, but no consideration may be
       requested other than any customary handling fees charged by
       recognized user's groups.  No warranties of any kind are provided
       and by using the program the user assumes all risk.

















                                       3

```
{% endraw %}

## FILES534.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 534   COMPUTER USER'S HANDBAG #1                           V1.1
---------------------------------------------------------------------------
This disk contains several powerful DOS utilities, a background dialer, a
text file lister, and a multi-tasking operating environment.  It also con-
tains a communications program, some printer utilities, and a small memory
resident program to automatically disable capslock when an alphabetic key is
pressed.  All but one of the programs are fully documented, and most have
ASSEMBLY source code or BASIC listings.
 
CAPSUNLK ASM  ASSEMBLY Source Listing for CAPSUNLK.COM
CAPSUNLK COM  Memory resident utility to automatically unlock caspslock key
DIALER95 COM  Background dialer program
DIALER95 DOC  Background dialer documentation
DISKIDX  BAS  BASIC source code listing for disk organizer utility
DISKIDX  DOC  Documentation for disk organizer
ERRMON   COM  Disk I/O Error Monitor for the AT
ERRMON   DOC  Documentation for Disk I/O Error Monitor
INT13    ASM  ASSEMBLY Source Listing for Copy Protection Breaker
INT13    COM  Copy Protection Breaker DOS Utility
INT13    DOC  Documentation for Copy Protection Breaker
LPTX     COM  Allow interrupt handlers to capture output to printer on disk
LPTX     DOC  Documentation for above
SDIR50   COM  All purpose directory utility  and command shell
SDIR50   DOC  Documentation for all purpose directory utility
TFL      BAS  ASCII File Transfer Utility - BASIC source listing
TFL      DOC  ASCII File Transfer Utility - Documentation
TFL      EXE  ASCII File Transfer Utility - Compiled
TMODEM   CNF  Configuration file for communications program
TMODEM   KEY  Auxiliary Communications utility
TMODEM32 COM  Communications program to transmit data in several protocols
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## INT13.ASM

{% raw %}
```
PAGE 64,132
;
;         This program intercepts Int 13H calls and prints
;         the drive, side, track, sector, # of sectors, operation,
;         and return code.
; 
cseg    segment 
        org 100h
INT13   proc far
        assume cs:cseg,ds:cseg
;
        jmp install                    ;install and make routine resident
;
redef13      label      word
oldint13     dd         0              ;save area for old int13 vector
int13loc     equ        13h*4h         ;vector location for int13h
drive_a      equ         'A'
drive_b      equ         'B'
drive_c      equ         'C'
drive_d      equ         'D'
drive_x      equ         'X'
save_ip      dw         0              ;save area for calling pgm's IP
save_cs      dw         0              ;save area for calling pgm's CS
;
message      db 'Drv: '
drive        db ?
             db ' Side: '
side1        db ?
side2        db ?
             db '   Tr: '
track1       db ?
track2       db ?
             db ' Sec: '
sector1      db ?
sector2      db ?
             db '  # secs: '
sec_cnt1     db ?
sec_cnt2     db ?
             db ' Op: '
op_1         db ?
op_2         db ?
             db '   Retcd: '
status1      db ?
status2      db ?
             db '  Addr: '
cs_1         db ?
cs_2         db ?
cs_3         db ?
cs_4         db ?
             db ':'
ip_1         db ?
ip_2         db ?
ip_3         db ?
ip_4         db ?
             db 0ah,0dh
;------------------------------
inst_msg     db 'INT13 is now installed.......$'
;
newint13:
        sti
        push ax
        push bp
        mov bp,sp                      
        mov ax,[bp+4]                  ;Retrieve return IP value 
        mov cs:save_ip,ax              ;    from stack.
        mov ax,[bp+6]                  ;Retrieve return CS value
        mov cs:save_cs,ax              ;    from stack.
        pop bp                         ;Save anything which will be
        pop ax                         ;    be changed during
        pushf                          ;    processing.
        push di
        push si
        push ds
        push es
        push bx
        push cx
        push dx
        push ax
        mov ax,cs
        mov ds,ax
;---------------DRIVE------------------
        cmp dl,00h                     ;Drive A? (dl=00)
        jne chk1                       ; Note: processing is in place for
        mov drive,drive_a              ;    logging disk activity on all
        jmp drv_exit                   ;    drives, if desired.  See below
chk1:   cmp dl,01h                     ;Drive B?
        jne chk2
        mov drive,drive_b
        jmp drv_exit
chk2:   cmp dl,02h                     ;Drive C?
        jne chk3
        mov drive,drive_c
        jmp drv_exit
chk3:   cmp dl,03h
        jne chkx
        mov drive,drive_d
        jmp drv_exit
chkx:   mov drive,drive_x
drv_exit:
;---------------SIDE  (DH) ------------
        mov ah,dh                      ;record side being requested-left digit
        call leftdig                   ;convert to ASCII code for printing
        mov cs:side1,ah                ;move code to message area
        mov ah,dh                      ;same for right digit
        call rightdig
        mov cs:side2,ah
;---------------TRACK NO. (CH)----------
        mov ah,ch
        call leftdig
        mov cs:track1,ah
        mov ah,ch
        call rightdig
        mov cs:track2,ah
;----------------------------------------
;
;----------------SECTOR NO. (CL)---------
        mov ah,cl
        call leftdig
        mov cs:sector1,ah
        mov ah,cl
        call rightdig
        mov cs:sector2,ah
;------------------------------------------
;
;----------------NO. OF SECTORS (AL)-------
;
        pop ax      ;recall ax
        push ax     ;save it again
        mov ah,al
        call leftdig
        mov cs:sec_cnt1,ah
        pop ax
        push ax
        mov ah,al
        call rightdig
        mov cs:sec_cnt2,ah
;--------------------------------------------------
;
;--------------OPERATION TYPE (AH)-----------------
; 00:reset 01:read status 02:read sectors 03:write sec. 04:verify 05:format
;

        pop ax      ;recall ax
        push ax     ;save it again
        call leftdig
        mov cs:op_1,ah
        pop ax
        push ax
        call rightdig
        mov cs:op_2,ah
;-------------- RETURN ADDRESS CS:IP -------------------
;
        mov ax,cs:save_ip
        call leftdig
        mov cs:ip_1,ah
        mov ax,cs:save_ip
        call rightdig
        mov cs:ip_2,ah
        mov ax,cs:save_ip
        xchg ah,al
        call leftdig
        mov cs:ip_3,ah
        mov ax,cs:save_ip
        xchg ah,al
        call rightdig
        mov cs:ip_4,ah
;
        mov ax,cs:save_cs
        call leftdig
        mov cs:cs_1,ah
        mov ax,cs:save_cs
        call rightdig
        mov cs:cs_2,ah
        mov ax,cs:save_cs
        xchg ah,al
        call leftdig
        mov cs:cs_3,ah
        mov ax,cs:save_cs
        xchg ah,al
        call rightdig
        mov cs:cs_4,ah
;--------------------------------
             pop ax                    ;Restore the things which were
             pop dx                    ;    saved
             pop cx
             pop bx
             pop es
             pop ds
             pop si
             pop di
             popf
;--------------------
             pushf           ; Put flags, CS and IP onto stack for return to
             push cs         ;  routine below after standard int 13h processing
             call intcall    ; IP will point to next instruction
;
;---------------------------Report status of int 13h call----------
;
             pushf
             push ax                   ;Save it again
             call leftdig
             mov cs:status1,ah
             pop ax
             push ax
             call rightdig
             mov cs:status2,ah
             pop ax
;------------  PRINT THE MESSAGE --------------------------
             cmp dl,00h  ;******** REMOVE THESE TWO LINES IF YOU WISH
             jne goback  ;********   ALL DISK ACTIVITY TO BE LOGGED
             push ax
             push cx
             push dx
             push si
             mov cx,52h                ; Length of message
             mov si,offset message
             xor dx,dx
prnloop:     mov ah,00h
             mov al,cs:[si]  
             int 17h
             inc si
             loop prnloop
             pop si
             pop dx
             pop cx
             pop ax
goback:      popf
;-------------------------------------------------------
             ret  2          ; Go back to calling program.
                             ; Note:"iret" is not used because the flags
                             ;   would be popped (and we wish to pass back
                             ;   the changed set of flags).  The "2" ensures
                             ;   that the stack is restored by incrementing
                             ;   the stack pointer by two extra bytes.
;-----------------------
intcall      PROC near     ; get set to go to standard int 13h routine
             pushf
             push cs:[redef13 + 2]     ; "cs" of int 13h routine
             push cs:[redef13]         ; "ip" of int 13h routine
             iret                      ; Branch to normal int13h code in ROM
intcall      endp 
;--------------------------
;   Routine to convert high-order digit in AH to an ASCII character
;
leftdig      PROC
             and ah,11110000b ; Mask right 4 bits
             shr ah,1         ; Move high-order digit to low-order pos.
             shr ah,1
             shr ah,1
             shr ah,1
             cmp ah,0ah       ; Check for value 0 through 9
             jnb b37          ; If value hex A through F, jump 
             add ah,30h       ; Add 30h to make ASCII character
             jmp b2
       b37:  add ah,37h       ; If hex A-F, add 37h to make ASCII character
        b2:  ret
leftdig      endp
;-----------------------
;   Routine to convert low-order digit in AH to an ASCII character
;
rightdig     PROC near
             and ah,00001111b ; mask left 4 bits
             cmp ah,0ah
             jnb a37
             add ah,30h
             jmp a1
       a37:  add ah,37h
        a1:  ret
rightdig     endp
;-----------------------
install:
             mov ax,0
             mov es,ax
             mov di,int13loc           ;Save old 
             mov ax,es:[di]            ;   interrupt 13h
             mov bx,es:[di+2]          ;   vector
             mov si,offset oldint13    ;     "
             mov [si],ax               ;     "
             mov [si+2],bx             ;     "
             mov ax,0                  
             mov es,ax
             mov bx,ds
             cli                       ;Turn off interrupts
             mov di,int13loc           ;Change int13h ....
             mov ax,offset newint13    ;   vector to...
             mov es:[di],ax            ;   point to...
             mov es:[di+2],bx          ;   this program.
             sti                       ;Turn interrupts back on
             mov dx,offset inst_msg
             mov ah,09h                ;Print string function
             int 21h                   ;Print "install" message
             mov dx,offset install     ;Address of end of resident routine
             int 27h                   ;Terminate and stay resident
INT13        endp
;------------------------------
cseg         ends
end          INT13
```
{% endraw %}

## INT13.DOC

{% raw %}
```


P                               INT13 DOCUMENTATION

P     The file INT13.ARC contains the following:

P                       INT13.ASM - Source file for INT13.COM
P                       INT13.COM - Resident interrupt 13h handler
P                       INT13.DOC - This documentation file


P         I. Function of INT13.COM

P         INT13.COM is a resident "front-end" program which intercepts ROM
P     BIOS interrupt 13h calls to perform disk functions on specific sectors.
P     INT13.COM prints out the requested disk drive, side, track, sector,
P     number of sectors, and operation type contained in the registers.  After
P     the interrupt processing is completed, INT13.COM prints the status code
P     returned (which indicates whether an error has occured), and the address
P     in the calling program to which control will be returned.


P         II. Purpose of INT13.COM

P         INT13.COM was written as a tool to help unravel copy protection
P     schemes, virtually all of which use interrupt 13h to look for weirdly-
P     formatted tracks on the original "key" diskette.  This utility allows
P     you to find out - without searching through a disassembly of the program
P     - what the copy protection scheme is looking for on the key diskette.
P     The return address printed shows where (or, more accurately, the point
P     immediately after) the call to interrupt 13h was made.  This can be
P     especially useful where the copy protection scheme trys - as many do -
P     to disguise the interrupt call so as to thwart casual attempts to defeat
P     the protection.

P         I will not attempt to provide information on the various codes
P     associated with interrupt 13h processing since this information is
P     available in any book on IBM Assembly Language or in the IBM Technical
P     Reference manuals.  In general, however, a few things to look for in a
P     protection scheme are:

P            a.  Sector numbers greater than 9.

P            b.  Sectors deliberately formatted with CRC errors.  The pro-
P                tection scheme either "reads" (operation code 02) or "veri-
P                fies" (operation code 04) the sectors.  The program then
P                expects to get a return code of 10, indicating the sectors do
P                indeed contain CRC errors.

P            c.  Multiple calls for the same sector.  Some schemes format a
P                track with two sectors with the same number.


P         III. Using INT13.COM

P         Before executing the program to be examined, simply run INT13.  A
P     short message will be displayed indicating that the program has been
P     installed.  Be sure to reboot your computer after finishing your work
P     with INT13.  Also take care not to install INT13 more than once (between
P     reboots).  I haven't written in any safeguards against multiple in-
P     stalls, although a future version may have this feature.



P         If you are not using DEBUG, then simply execute your program.  A log
P     of the disk activity will then be printed.  Program loading and execu-
P     tion will be slowed due to the time required for printing.

P         If you are using DEBUG, then proceed as you would normally.  The
P     addresses reported on the disk activity log will correspond to the
P     locations in the program being debugged so you may immediately see where
P     the calls are being made.

P         It is advisable to run INT13 with your program more than one time
P     since some protection schemes select different tracks for checking on a
P     random basis.

P         Note: Since copy protection schemes rarely, if ever, check other
P     than the "A" diskette drive, INT13 is set up to log only calls to that
P     drive.  If you wish disk activity on all drives to be logged, remove the
P     instructions listed in the source code and reassemble the program.


P         IV.  Interpreting the results

P         This is the hardest part.  If you are going to become an accom-
P     plished "unprotector" you will have to have at least a passing knowledge
P     of assembly language.  INT13 will point you to the part(s) of the pro-
P     gram doing the protection verification and will show you what the pro-
P     gram expects to find.  It's up to you to figure out how to bypass the
P     protection.  This can be quite easy, sometimes only requiring a branch
P     around the code doing the protection verification, or it can involve
P     hours of single-stepping through the program for really devious
P     protection schemes.  Either way, INT13 should speed up things.


P         V.  Caveats

P         Since INT13 functions under DOS's control, this utility will not
P     always function with some game programs which have their own operating
P     system on the disk.

P         INT13 also doesn't work with PROLOK-protected diskettes.  Apparently
P     PROLOK assigns interrupt 13h to some other interrupt number (at least
P     this is my guess).


P         VI.  How INT13 works

P         When you run INT13, the vector in low memory which normally points
P     to the ROM BIOS routine for interrupt 13h is changed to point to the
P     front-end processing contained in INT13.  When your program issues an
P     interrupt 13h call, control goes first to INT13 and the required
P     information is stored for later printout.  Control is then passed to the
P     normal interrupt 13h routine.  When the I/O processing is finished,
P     INT13 regains control and prints the log data, including the return code
P     passed back.  Finally, control returns to the calling program.  If you
P     are interested in further details, examine the source code.








P         VII.  How some protection schemes attempt to disguise interrupt 13h
P               calls

P         If you are attempting to unprotect a program, the usual course of
P     action is to search for occurences of "CD13", which is machine language
P     for interrupt 13h.  One way or another, the protection scheme will have
P     to use this interrupt to check for the special sectors on the disk.  If
P     you examine a cross section of programs, however, you will find programs
P     which do not have "CD13" in their machine code, but which clearly are
P     checking the key diskette for weird sectors.  How is this being done?

P         There are several techniques which can be used to camouflage the
P     protection scheme from prying eyes.  I'll describe below two such
P     techniques I have come across:

P         a.  The following section of code is equivalent to issuing a INT 13
P             command to read one sector from: drive A, side 0, track 28h,
P             sector ffh, and then checking for a status code of 10h:

P             XXXX:1000 MOV AH,02                  ;read operation
P             XXXX:1002 MOV AL,01                  ;1 sector to read
P             XXXX:1004 MOV CH,28                  ;track 28h (40d)
P             XXXX:1006 MOV CL,FF                  ;sector ffh (255d)
P             XXXX:1008 MOV DX,0000                ;side 0, drive A
P             XXXX:100B XOR BX,BX                  ;move 0
P             XXXX:100D MOV DS,BX                  ;       to DS register
P             XXXX:100F PUSHF                      ;push the flags onto stack
P             XXXX:1010 PUSH CS                    ;push the CS register
P             XXXX:1011 CALL 1100                  ;push addr. of next instr.
P                                                  ; onto stack and branch
P             XXXX:1014 CMP AH,10                  ;check for CRC error
P             XXXX:1017 rest of verification code
P                  .
P                  .
P                  .
P             XXXX:1100 PUSHF                      ;push the flags onto stack
P             XXXX:1101 MOV BX,004C                ;addr. of int 13h vector
P             XXXX:1104 PUSH [BX+02]               ;push CS of int13h routine
P             XXXX:1107 PUSH [BX]                  ;push IP of int13h routine
P             XXXX:1109 IRET                       ;pop IP,CS and flags

P             Notice that there is no "INT 13" command in the source code, so
P             if you had simply used DEBUG to search for "CD13" in the machine
P             code, you would never have found the protection routine.


P         b.  Another technique is to put in a substitute interrupt instruc-
P             tion (such as INT 10, which looks harmless enough), and have the
P             program change the "10" to "13".  A search for "CD13" would turn
P             up nothing.











```
{% endraw %}

## LPTX.DOC

{% raw %}
```
LPTx : Line Printer Output Capture Routine

------------------------------------------------------------------------

 Version 6.0B

 (C)	Copyright 1987 by Mark DiVecchio, All Rights Reserved

BETA RELEASE: This is a Beta release only. Source is not included until I
get back some test reports. Please don't distribute it yet but refer all
requests for the program to me. I would appreciate any feed back which you
can give me about the circumstances under which the program works and which
the program fails.

DISCLAMER : This program tries to perform a function which is not supported
by DOS. It will work sometime and will not work other times. That kind of
explains why you don't see this type of program on the market. I have
tested it under DOS 2.x and 3.x. In particular, under 3.x, I used dBase-II.
I have not tested it with dBase-III or dBase-III+.

 Mark C. DiVecchio
 10435 Mountain Glen Terrace
 San Diego, CA 92131
 619-566-6810
------------------------------------------------------------------------

	First - some thanks...  I would like to thank all of the users who
have called me about the earlier versions of LPTx which has been floating
around for about a year. The program has met with mixed success. There
seems to be no pattern as to when the program works and when it doesn't. I
am still searching for the solution to this very difficult problem. This
version and versions 4.x and 5.x which preceeded it are attempts to perform
the same function with a different algorithm. Version 3.00, 4.00, 5.00 and
6.0B are not replacements or upgrades of each other but just alternative
implementations.

------------------------------------------------------------------------

	Have you ever wanted to get some data from your screen into a
program? Have you ever wanted to grab onto some printer data and put it
into a disk file but the program you are using does not have that as a
option? Well here is the answer to your problem. This program will grab
onto anything sent out of a line printer port as long as the program uses
the standard BIOS INT 17h call. This version works with Shift-PrtSc or
Ctrl-PrtSc but does not work with the DOS TYPE command.

	This program intercepts the BIOS interrupt 17h, the line printer
interrupt. It will redirect the output of LPT1, LPT2, or LPT3 to a disk
file. All three redirections may be active at the same time.

	This version of LPTx counts on the PC having some "free time" in
order to write the data to disk. The program gathers data into a large
buffer and during timer interrupts and keyboard idle periods, it writes it
to disk. DOS must not be in its critical section for the write to take
place. LPTx does not work with the DOS TYPE apparently because the critical
section flag is always set when the timer interrupts occur. It should work
with most user programs since the critical section flag is not set in user
programs and therefore will not be set when timer interrupts occur.

	Look at the Assembly Language Source which you should have received
with this documentation file. If you would like the other versions of LPTx,
I will be happy to send them to you. Just send me a formatted 360K DSDD
floppy (no DOS on diskette) along with a post-paid, self-addressed floppy
mailer. I will send you all current versions that are active. If you
received this disk directly from me, all of the different versions are
already on the diskette.

	LPTx requires DOS 2.0 or later. It has been tested on version 3.1
of DOS as well.

Calling sequence:
lptx [?] [-x] [-l] [-i] {-1,-2,-3} {-c -o <d:[pathname]filename>}

where -1 means redirect LPT1, -2 means redirect LPT2, -3 means redirect
	 LPT3
	 This option must appear first

      -o means start the redirection to file specified. If redirection
         is already in progress for the selected line printer,
	 the old file will be closed first.
	 (If you do not specify -o but you do specify a line printer,
	 LPTx will use either the last file name that you gave when
	 you loaded LPTx or will use the file named LPTXy.LST which it
	 will create in the root directory on the default drive - where
	 y is 1, 2, or 3.)

	 It is not necessary that you specify the complete path name
	 for the file. LPTx will create the file in the default 
	 directory if you don't specify a directory. LPTx will always
	 be able to find the file because it saves the complete path.

	-c means close the file and send all further output directly to the
	 line printer.

	 If neither the -o or the -c option is specified, LPTx just displays
	 the program status.


	-? displays a short help screen.

	-x tells LPTx to ignore the DOS Critical Section Flag. Use this
	 option only with great care. LPTx may do unusual things if the
	 flag is ignored.

	-l tells LPTx to strip linefeed characters from the data as it is
	 being redirected.

	-i removes LPTx from the interrupt chain. This effectively inactivates
	 the program. The memory which it occupies is not freed.
	
note: -1, -2, and -3 are mutually exclusive
  	-o and -c are mutually exclusive

examples:

lptx				Displays the program status

lptx ?				Displays a HELP screen

lptx -1				redirects LPT1 output to file named
				LPTX1.LST in the root directory
				on the default drive or the last
				named file.

lptx -o a:\able.xxx		redirects LPT1 output to file named
	or			a:\able.xxx. Any open redirection
lptx a:\able.xxx		disk file for LPT1 is closed.

lptx -2 b:xx.lst		redirects LPT2 output to file named
				XX.LST in the default directory
				on drive B:. Any open redirection
				disk file for LPT2 is closed.

lptx -3 d:\ab\cd\file.lst	redirects LPT3 output to the file named
				file.lst in the directory ab\cd on drive
				d:.

lptx -c				closes any disk files open for LPT1 and sends
	or			the output back to the line printer
lptx -1 -c			If no redirection is taking place to LPT1,
				this is	a NOP. LPT2 and LPT3 are not
				affected.

lptx -2 -c			closes any disk file open for LPT2 and
				sends the output back to line printer.
				if no redirection is taking place to LPT2,
				this is a NOP. LPT1 and LPT3 are not
				affected.

	By redirecting LPT2 or LPT3 to a disk file, you can in effect have
2 or 3 printers on your system. LPT1 can be your physical printer and you
can have LPT2 output going to disk. When you redirect LPT2 or LPT3, LPT1
works normally.

	If you are redirecting to a diskette file, do not remove the
diskette once the redirection starts. I recommend redirecting to a hard
disk or a RAM disk.

	If LPTx encounters any kind of error during the redirection, it
terminates operation and sends output back to the line printer. It does not
display anything but beeps the speaker. Four beeps indicates a DOS disk
access error. Two beeps indicates an internal buffer overflow error. This
prevents your currently running program from possibly getting destroyed. An
error with LPT1 redirection does not shut down LPT2 or LPT3 redirection.

	LPTx captures the int 17h interrupt vector. Problems may occur with
print spoolers which also take over the int 17h  vector. You can be sure
that LPTx works correctly by running LPTx before you run your print
spooler. LPTx will be transparent to the print spooler but your print
spooler may not be transparent to LPTx. LPTx works fine with IBM's PRINT
command.

	LPTx also captures the int 24h critical error interrupt vector.
This is done only for the period that LPTx is using the disk. This prevents
the generation of funny error messages in the middle of other programs that
you may be running. (LPTx just beeps 4 times and clears itself out of way
if a disk error occurs).

	This version of LPTx can redirect all three printers to three
different files with all 3 active at the same time.

	LPTx worked correctly when I tested it with:

	1. dBaseII,

	2. the ARC utility with the "p" option and output redirected to prn,

	3. shift PrtSc,

	4. DOS PRINT utility,

	5. Lotus 123,

	6. dir > prn,

	LPTx did not work with:

	1. The DOS TYPE command,

	2.

	Version 6.0B of LPTx uses about 20K of memory for the resident data
buffers and interrupt handler. This is greater than the previous versions
of LPTx because I made the disk buffers larger.

	If you modify or find any bugs in this program, I would appreciate
it if you would drop me a line with the changes. Use the address above. 

```
{% endraw %}

## NOTES534.TXT

{% raw %}
```
Program name: TEXT FILE LISTER    Version 1.02
Author name:  William D. Hileman
Address:      2262-3 Lucretia Ave.
              San Jose, CA  95122
Telephone Number: (408) 971-8416 (home)
Program Description:
TFL is a text file lister for ASCII files that works with most printers. It
produces a header line with the file name.
-----------------------------------------------------------------------------
Program name: DIALER95
Author name:  Mike Nagel Jr.
Address:      Cincinnati, OH
Telephone Number: Allen's Fido Net 108/85, (513)579-2587.
Program Description:
DIALER95 is a background dialer program.  Once initiated, other applications
can be run in the foreground.
-----------------------------------------------------------------------------
Program name: ERRMON
Author name:  Robert J. Newton
Program Description:
ERRMON is a memory resident program that monitors disk I/O errors on the AT.
It provides more informative reports of disk I/O errors than those provided by
DOS.
-----------------------------------------------------------------------------
Program name: DISKIDX
Author name:  Alan Centa
Address:      504 Ethan Allen Ave
              Takoma Pk, MD 20912
Program Description:
DISKIDX  helps organize multiple directories and files.
-----------------------------------------------------------------------------
Program name: SDIR50       Version  5.0
Author name:  W. Lawrence Hatt
Address:      76 Melville Drive
              Nepean, Ontario
              Canada, K2J 2E1
Telephone Number: PCANADA PC1269 (Modem)
Program Description:
SDIR50 is An All-purpose Directory Utility and Command Shell for the IBM PC
and compatibles.
-----------------------------------------------------------------------------
Program name: INT13
Program Description:
INT13 is a memory-resident front end program that intercepts ROM BIOS interrupt
calls to perform disk functions on specific sectors. It helps to unravel copy
protection schemes without searching through program disassemblies.
-----------------------------------------------------------------------------
Program name: LPTX   Version 6.0B
Author name:  Mark C. DiVecchio
Address:      9067 Hillery Drive
              San Diego, CA 92126
Telephone Number: 619-566-6810
Program Description:
LPTX is a program that allows interrupt handlers to call other DOS functions.
It can be used to capture output directed to the Line Printer port. It is com-
patible with several major software packages and utilities.
-----------------------------------------------------------------------------
Program name: TMODEM32   Version 3.2
Author name:  Paul Meiner
              P & M Software
Address:      9350 Country Creek #30
              Houston, Texas 77036
Suggested Donation: $20.00
Program Description:
TMODEM32 is a communications program that can transmit data in several diff-
erent protocols. It lacks documention but the signposts in the program are
easy to follow.
-----------------------------------------------------------------------------
Program name: CAPSUNLK
Author name: Herb Shear, SVCS Librarian  and PC Magazine, Oct 15, 85
Program Description:
CAPSUNLK is a memory resident CapsLock unlatcher program that releases the key-
board from the CapsLock state whenever a letter key is pressed at the same time
as a shift key.
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## TFL.BAS

{% raw %}
```bas
' TFL - Text File Lister
' Version 1.02  September 20,1985
'
' (C) Copright 1985 by William D. Hileman
'
10 ' For misc. error traps
'
defint a-z
'
on error goto TRAPPER
'
' Main Program
'
gosub INITIALIZE
gosub DISPLAY.TITLE
gosub GET.SOURCE
width "lpt1:",pgwid
if not done then _
  while inkey$<>"":wend: _
  if batch then _
    gosub LIST.BATCH _
  else _
    gosub LIST.ONE
  rem endif
rem endif
'
end
'
' Subroutines
'
' ***********
  INITIALIZE:
' ***********
'
false=0:true=(not false)
batch=false
done=false
abort=false
pglen=66:pgwid=80
version$="1.02"
versdate$="09/20/85"
'
return
'
' **************
  DISPLAY.TITLE:
' **************
'
print "┌──────────────────────────────────────────────┐"
print "│ TFL - Text File Lister Version ";version$;" ";versdate$;" │"
print "│    (C)opyright 1985 by William D. Hileman    │"
print "└──────────────────────────────────────────────┘"
'
return
'
' ***********
  GET.SOURCE:
' ***********
'
if command$="?" then _
  gosub DISPLAY.FORMAT: _
  done=true _
else _
  if command$="" then _
    gosub ASK.SOURCE _
  else _
    gosub PARSE.SOURCE
  rem endif
rem endif
if not done then _
  while right$(src.fil$,1)=" ": _
    src.fil$=left$(src.fil$,len(src.fil$)-1): _
  wend: _
  while left$(src.fil$,1)=" ": _
    src.fil$=mid$(src.fil$,2): _
  wend: _
  if len(src.fil$)>7 then _
    if right$(src.fil$,8)="TFL.DAT" then _
      batch=true
    rem endif
  rem endif
rem endif
'
return
'
' ************
  MAKE.UPCASE:
' ************
'
for cnt=1 to len(src.fil$)
  sub$=mid$(src.fil$,cnt,1)
  if sub$>="a" and sub$<="z" then _
    mid$(src.fil$,cnt,1)=chr$(asc(sub$) and 223)
  rem endif
next cnt
'
return
'
' ***********
  LIST.BATCH:
' ***********
'
gosub CHECK.FIL
'
if not exist then _
  print: _
  print "'";src.fil$;"' not found!";: _
  beep _
else _
  open "I",2,src.fil$: _
  while (not eof(2) and not abort): _
    line input #2, src.fil$: _
    gosub LIST.ONE: _
  wend: _
  close #2
rem endif
'
return
'
' *********
  LIST.ONE:
' *********
'
gosub CHECK.FIL
'
if not exist then _
  print: _
  print "'";src.fil$;"' not found!";: _
  beep _
else _
  gosub FILE.INTEGRITY: _
  if file.ok then _
    print: _
    print "Now listing '";src.fil$;"'";: _
    lincnt=pglen:page=1: _
    open "I",1,src.fil$: _
    while (not eof(1) and not abort): _
      line input #1, ps$: _
      gosub REPLACE.TABS: _
      firstcheck=true: _
      gosub MAKE.SUBSTRING: _
      firstcheck=false:
      while (ss$<>"" and not abort): _
        gosub HEADER.CHECK: _
        lprint ss$: _
        lincnt=lincnt+1: _
        gosub MAKE.SUBSTRING: _
        gosub KEYCHECK: _
      wend: _
    wend: _
    close #1: _
    gosub PAGE.EJECT: _
    if abort then _
      print " - print aborted";: _
      beep
    rem endif
  rem endif
rem endif
'
return
'
' *********
  KEYCHECK:
' *********
'
if inkey$=chr$(27) then _
  abort=true
rem endif
'
return
'
' **********
  CHECK.FIL:
' **********
'
100 '
'
exist=true
open "I",3,src.fil$
'
101 '
'
close #3
'
return
'
' ***************
  FILE.INTEGRITY:
' ***************
'
file.ok=false
open "R",4,src.fil$
field #4,1 as tst$
get #4,1
if lof(4)=0 or tst$=chr$(26) then _
  print: _
  print "'";src.fil$;"' is empty!";: _
  beep _
else if tst$=chr$(255) then _
  print: _
  print "'";src.fil$;"' is a binary file!";: _
  beep _
else if tst$=chr$(254) then _
  print: _
  print "'";src.fil$;"' is a protected file!";: _
  beep _
else _
  file.ok=true
rem endif
close #4
'
return
'
' *************
  REPLACE.TABS:
' *************
'
x=instr(ps$,chr$(9))
while (x<>0)
  ps$=left$(ps$,x-1)+space$(9-(x mod 8))+mid$(ps$,x+1)
  x=instr(ps$,chr$(9))
wend
'
return
'
' ***************
  MAKE.SUBSTRING:
' ***************
'
if len(ps$)>pgwid then _
  ss$=left$(ps$,pgwid): _
  ps$=right$(ps$,len(ps$)-pgwid) _
else _
  ss$=ps$: _
  ps$="": _
  if firstcheck and ss$="" then _
    gosub HEADER.CHECK: _
    lprint: _
    lincnt=lincnt+1: _
    gosub KEYCHECK
  rem endif
rem endif
'
return
'
' *************
  HEADER.CHECK:
' *************
'
if lincnt>pglen-3 then _
  for cnt=lincnt to pglen: _
    lprint: _
  next cnt: _
  lprint src.fil$;: _
  txt$=date$+"  "+time$: _
  lprint tab((pgwid-len(txt$))/2+1);txt$;: _
  lprint tab(pgwid-9);"Page ";using "###";page: _
  lprint: _
  page=page+1: _
  lincnt=3
rem endif
'
return
'
' ***********
  PAGE.EJECT:
' ***********
'
for cnt=lincnt to pglen-1
  lprint
next cnt
'
return
'
' ***************
  DISPLAY.FORMAT:
' ***************
'
print
print "Formats are: TFL                          - Prompts for filename"
print "             TFL drive:\path\filename.ext - Lists specific file"
print "             TFL drive:\path\TFL.DAT      - Lists files in TFL.DAT"
print "             TFL ?                        - Displays this message"
print
print "Optional command line switches:"
print
print "             /PWnnn - Width of page in characters - default is 80"
print "             /PLnnn - Length of page in lines - default is 66"
print
print "For example, TFL C:\SOURCE\MYPROG.BAS /PW132 /PL88 would list file"
print "'MYPROG.BAS' in subdirectory 'SOURCE' on drive 'C' with a page width"
print "of 132 characters per line, and a page length of 88 lines per page."
print
print "Notes:  Your printer must already be set-up for the correct vertical"
print "        and horozontal spacing before using the 'PW' and 'PL' switches."
print "        Pressing [ESC] during execution will cause printing to abort.";
'
return
'
' ***********
  ASK.SOURCE:
' ***********
'
print
print "List file name: ";
line input src.fil$
if src.fil$="" then _
  done=true _
else _
  gosub MAKE.UPCASE
rem endif
'
return
'
' *************
  PARSE.SOURCE:
' *************
'
pwv=0:plv=0
src.fil$=command$
gosub MAKE.UPCASE
pw=instr(src.fil$,"/PW")
if pw<>0 then _
  stp=instr(pw+1,src.fil$,"/"): _
  if stp=0 then _
    pwv=val(mid$(src.fil$,pw+3)): _
    src.fil$=left$(src.fil$,pw-1) _
  else _
    pwv=val(mid$(src.fil$,pw+3,stp-pw-3)): _
    src.fil$=left$(src.fil$,pw-1)+mid$(src.fil$,stp)
  rem endif
rem endif
if pwv>0 then _
  pgwid=pwv
rem endif
pl=instr(src.fil$,"/PL")
if pl<>0 then _
  stp=instr(pl+1,src.fil$,"/"): _
  if stp=0 then _
    plv=val(mid$(src.fil$,pl+3)): _
    src.fil$=left$(src.fil$,pl-1) _
  else _
    plv=val(mid$(src.fil$,pl+3,stp-pl-3)): _
    src.fil$=left$(src.fil$,pl-1)+mid$(src.fil$,stp)
  rem endif
rem endif
if plv>0 then _
  pglen=plv
rem endif
'
return
'
' ********
  TRAPPER:
' ********
'
if erl=100 then _
  exist=false: _
  resume 101 _
else _
  on error goto 0
rem endif
'
' End of Code
'
```
{% endraw %}

## TFL.DOC

{% raw %}
```

  -= TFL =- Text File Lister

  Version 1.02  09/20/85

  (C) Copyright 1985 by William D. Hileman
                        2262-3 Lucretia Ave.
                        San Jose, CA  95122
                        (408) 971-8416 (home)

     Released to the Public Domain for distribution free of charge.
  The user is welcome to freely distribute this software, provided it
  is distributed in its original form, and that there is no compensation
  for the distribution.

     TFL is a simple ASCII text file lister which provides a header line
  containing filename, system date and time, and page number at the top of
  each page.  It also provides a small margin at the top and bottom of each
  page.  TFL is very generic, and does not even issue a form-feed character
  to page, it instead counts lines.  TFL also expands TAB characters to
  white space so that all printers should handle it.  TFL does not strip-
  out any other characters, so files which contain form-feed characters, or
  other control characters, may produce undesireable results.

     TFL can be invoked in any one of several ways:

     Entering 'TFL ?' and pressing [ENTER] displays a short description of
  the program and proper command line syntax.

     Entering 'TFL' and pressing [ENTER] prompts the user for the filespec,
  and proceeds to send it to the printer.

     Entering 'TFL filespec' and pressing [ENTER] proceeds to send the
  selected file to the printer.  'filespec' is the optional drive i.d. with
  colon (i.e. 'C:'), and/or the optional path specifier (i.e. '\ROOT\FILES\'),
  and/or the required filename (i.e. 'TFL.DOC').

     Entering 'TFL d:\path\TFL.DAT' and pressing [ENTER] sequentially
  reads filespecs contained in the text file TFL.DAT on the optional drive
  and path specified and sends them, one after the other, to the printer.

     The last two invocations also have the option of passing page size
  definition switches on the command line.  TFL defaults to printing 66
  lines per page (six lines per inch on an eleven-inch long sheet), and 80
  characters across each page (ten characters per inch on an 8-1/2 inch
  wide sheet).  The program does not send control codes to the printer
  to set any desired print mode (unless they are contained in the text file
  itself), so the printer would need to be set-up appropriately before
  using TFL.  Refer to your printer manual for more information.

     To change the page length, use the `/PL' switch AFTER the filespec,
  i.e., 'TFL TFL.BAS /PL 88' to list file TFL.BAS at 88 lines per page.
  The spaces after the filespec are optional.

     To change the page width, use the '/PW' switch AFTER the filespec,
  i.e., 'TFL TFL.DAT /PL 88 /PW 132' to list the files contained in
  file TFL.DAT at 88 lines per page and 132 columns per page.

     There is minimal file integrity checking done.  The selected file(s)
  are checked to see if they exist.  If they do, they are checked to see
  if they are empty.  If they are not, they are check to see if they are
  BASIC 'protected' or 'binary' files.  If they are not, TFL will attempt
  to print them.  Otherwise, a corresponding error message will be displayed.

     When doing a batch listing ('TFL TFL.DAT'), any invalid files en-
  countered during the listing process will cause the appropriate error
  message to display, but TFL will not terminate execution unless the file
  was the last one in the list.

     TFL.DAT can be created with any word processor, DOS's EDLIN, DOS's
  'COPY CON filespec' feature, or with an edited 'DIR > TFL.DAT'.  Refer
  to your DOS manual for more information.  The file must contain ONLY a
  list of filespecs with no blank lines.

     Pressing [ESC] during printing will abort the current file, and ALL
  files if you are running a batch listing.

     Hope you can find as much use for this program as I have.  I've been
  using various versions of this utility over the years at work as I never
  liked the DOS 'PRINT' utility, and never cared for anything too fancy...

     I ask for no donations for my software, I write programs for a living
  eight hours (plus) a day, and do these because I enjoy it.  These are my
  small contributions to the public domain, mostly dedicated to the numerous
  sysops I've encountered who feel no sacrifice in donating their priceless
  time, effort, and equipment for our usage.  If you do find one of my
  programs interesting or useful, or have an objective criticism then by all
  means, please drop me a line.  I'd rather receive a compliment on my
  programming skills than a few dollars contribution any time!  I can be
  reached at any of the following BBS's in the Silicon Valley (CA) area:

                Big Foot         RBBS (408) 225-1845
                North San Jose   RBBS (408) 945-8358
                Sigma Designs    RBBS (408) 946-3269
                Animal House     RBBS (408) 374-0966
                P.D.S.E.         RBBS (408) 735-7190
                Logon Unlimited  RBBS (408) 735-7390
                General Electric RBBS (408) 925-2518
                Compushop        RBBS (408) 226-4277
                Crystal Castles       (408) 733-1364

     I am a SIG sysop on Crystal Castle BBS's SIG 6 - the Programming
  Techniques SIG.  Call my SIG sometime!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0534

     Volume in drive A has no label
     Directory of A:\

    CAPSUNLK ASM      3942   9-24-85  12:55p
    CAPSUNLK COM       118   9-21-85  12:42p
    DIALER95 COM     16384   9-21-85   4:11p
    DIALER95 DOC      1664   9-21-85   5:58p
    DISKIDX  BAS      7600   8-22-85  10:01p
    DISKIDX  DOC      5888   8-22-85  10:01p
    ERRMON   COM       719   7-14-85   7:32p
    ERRMON   DOC      6646   7-14-85   8:05p
    FILES534 TXT      1973   1-27-87   3:23p
    GO       BAT      1645   1-27-87   3:25p
    INT13    ASM      9744   8-17-85   9:49p
    INT13    COM       605   8-17-85   9:50p
    INT13    DOC      8951   8-17-85  10:13a
    LPTX     COM     18023   1-09-87   5:01p
    LPTX     DOC      8529   1-09-87   4:57p
    NOTES534 TXT      3474   1-27-87   3:27p
    SDIR50   COM      6656   9-16-85   5:54p
    SDIR50   DOC      8320   9-16-85   5:56p
    TFL      BAS      6893   9-20-85  11:34p
    TFL      DOC      5406   9-20-85  11:02p
    TFL      EXE     34530   9-20-85  11:53p
    TMODEM   CNF       158   5-20-86   4:28p
    TMODEM   KEY        80   5-20-86   4:28p
    TMODEM32 COM     52608   8-14-85  12:48a
           24 file(s)     210556 bytes
                          100352 bytes free
