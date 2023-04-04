---
layout: page
title: "PC-SIG Library Disk #907"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0907/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0907"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FUNKYTOOLBOX - MISC. UTILITIES"

    FUNKY TOOLBOX (function key toolbox) contains a large number of
    utilities for the programmer in you.  Along with the utilities are a
    lot of miscellaneous BASIC programs and text files, to be used as
    examples for doing a specific programming procedure, or even used as
    subroutines within a program you are creating.  See file descriptions
    for explanations of individual programs.
    File Descriptions:
    
    AINK$    TBX  Controls KYBD for opening files correctly.
    ANYKEY   TBX  Advanced routine for any key to continue.
    ARAYCOMP TBX  Compute ARRAY size overhead in DEFSNG-DEFDBL-DEFSTR.
    ALLCHARS TBX  Displays a hexadecimal table of all screen characters.
    ASCKEY$  TBX  ASCII Numbers for all keys.
    AUREVOIR TBX  Flashing panels say a big good-bye.
    BLACKOUT TBX  Example of a screen black-out.
    SOUNDZ   TBX  Unusual sounds and musical effects.
    SONGRITR TBX  Easy music from score to CPU.
    NICELEGS TBX  How to make legs for your printer.
    BANANA2  TBX  Error-trapping alternative.
    BANANA1  TBX  Error-trapping ON-OFF routine.
    ERROR2   TBX  Tough tests CPU for accuracy.
    ERROR1   TBX  Fun tests the IBM-PC CPU for accuracy.
    TESTEROR TBX  Error-trapping demo.
    COLRTOGL TBX  Switches between mono and color.
    LOKATE   TBX  Flashes screen address and points location.
    SCRNMAP  TBX  Creates a map of the computer screen.
    MARKSCRN TBX  Roadmap your display for convenience.
    FLIPPIES TBX  How to use both sides of your disks.
    INDEX1   BAS  Index on the files on this disk.
    ABSECTOR TBX  Converts track-sector to absolute sector for DEBUG use.
    DEBUG    DOC  How to use DEBUG and error trapping.
    GSBMUSIC TBX  Background music for your programs.
    GOBANANA DOC  How to error-trap your programs.
    PEEKFILE DOC  How to peek into files and ROM with DEBUG.
    HORNBOOK DOC  Information on DOS for programmers.
    ERORNUM  DAT  Data file for ERRMESAG.TBX.
    ERRMESAG TBX  Shows ERROR messages.
    CURSER   TBX  Demo of CRSLIN and POS(0) for bookmarking.
    INDEX2   BAS  Index of the files on this disk.
    LETTER   BAS  A letter from PeopleSystems.
    TALKPAGE BAS  Why talking pages make reading easier.
    BROWSE   COM  Utility for viewing text files.
    STUFCHIP DOC  How to protect your chips.
    DOLABEL  TBX  Self-producing label program. Uses printer, but no labels.
    DISKLABL TBX  Label your disks with wide Directory.  No labels needed.
    PEOPLSYS TBX  Big screen opening and closing.  Chains to AUREVOIR.TBX.
    INPUTEST TBX  Trap KYBD entry with easy INSTR routine.
    NOTENUMB TBX  Makes octave shifts easy.
    F5ERRMSG TBX  Print out error messages by pressing F5.
    README        How to get started.
    WHATISPS DOC  Information on PeopleSystems.
    SOFTKEYS TBX  Loads new F keys for color/mono then erases program.
    WPROT    TBX  How to unprotect a file to list and save it.
    MACHLANG TBX  Using poke and machine language complete easy computation.
    HEXSCALE TBX  Graphics for addressing-nibbles-bytes-segment:  offset.
    FUNCTKEY TBX  How to use your function keys.
    MEMTEST1 TBX  Tests your computer memory.
    COLORBOX TBX  Displays various colored boxes.
    MONO     BAS  Separate subroutine to run mono.
    COLOR    BAS  Separate subroutine to run color.
    COMO     TBX  Merge this color/mono subroutine into your program.
    IBMKEYS  TBX  Reloads the F1 to F10 keys the way they were.
    README2  DOC  Information on PeopleSystems.
    HEX2DEC  TBX  Automatically convert any HEX address to decimal numbers.
    SCRNCHRS TBX  Now see all screen chars, some unmentionables.
    BASUNPRO TBX  Create machine language to unprotect files.
    SAVEDLIN TBX  Recovers lost EDLIN file when disk is full.
    PROTECTD TBX  A protected file for you to practice on.
    PEPLSYST BAS  The system of people and computers.
    DAMNTRIV DOC  Information on PeopleSystems.
    FRIENDLY TBX  How to be friendly.
    CLUSECTR TBX  DOS 2.0 conversion of start cluster to absolute sector.
    SENSITIV DOC  How to work with people.
    DISKMOD  DOC  How to modify a disk with DEBUG.
    BOOBOO   DOC  Improvement for the IBM-PC.
    XMASTREE TBX  Mono graphics and music for the season.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLOR.BAS

```bas
30000 REM---~COLOR~----goto color
30010 KEY OFF
30020 WIDTH 80: DEF SEG=0: A=PEEK(&H410):  POKE &H410,(A AND &HCF) OR &H20
30030 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE 1,2,1,6,7
30040 KEY ON
30050 NEW
```

## INDEX1.BAS

```bas
10 REM---~INDEX1~---Index for Programmer's Toolbox 1.1
15 CLS :KEY OFF
16 P=1
20 COLOR 0,7:LOCATE 4,20 :PRINT "  FUNKY PROGRAM TOOL BOX - INDEX SHEET 00  ":COLOR 7,0
30 COLOR 15: LOCATE  6,19 :PRINT "TO MAKE SUBROUTINES TO MERGE WITH PROGRAM":COLOR 7
35 LOCATE  8,10 :PRINT "1. Find location for subroutine in program, say 7000-8000
40 LOCATE 10,10 :PRINT "2. LOAD ~subrtn~ into memory.
50 LOCATE 12,10 :PRINT "3. Clean out extra lines, etc.
60 LOCATE 14,10 :PRINT "4. RENUM to fit into your program -- start 7000-8000
70 LOCATE 16,10 :PRINT "5. SAVE~Asubrtn~,A in ASCII to merge into program
75 LOCATE 18,10 :PRINT "6. LOAD your program again and recheck 7000- for subrtn
80 LOCATE 20,10 :PRINT "7. Enter MERGE ~Asubrtn~ in direct mode.
90 LOCATE 22,10 :PRINT "8. Check 7000- in your program -- ITS DONE.
92 LOCATE 24,10 :PRINT "9. Put in GOSUB 7000's where needed and check RETURN.
95 GOSUB 1000
100 PRINT "SOUNDZ.TBX"TAB(20)"Unusual sounds and musical effects
110 PRINT :PRINT "SONGRITR.TBX"TAB(20)"Easy music from score to CPU
120 PRINT :PRINT "GSBMUSIC.TBX"TAB(20)"Background music for your programs.
130 PRINT :PRINT "MARKSCRN.TBX"TAB(20)"Roadmap your display for convenience.
150 PRINT :PRINT "FLIPPIES.TBX"TAB(20)"Now you can use both sides of your disks
160 PRINT :PRINT "COLRTOGL.TBX"TAB(20)"MONO to COLOR and back is easy.
170 PRINT :PRINT "NICELEGS.TBX"TAB(20)"Does your printer have nice legs?
180 PRINT :PRINT "BLACKOUT.TBX"TAB(20)"Delays, time-out, black-out.
200 GOSUB 1000
210 PRINT :PRINT "PLEASE NOTE: THESE ARE .DOC PROGRAMS. THEY WILL RUN A>TYPE filename.DOC         AND IF YOU WANT A PRINT A COPY TO STUDY --PRESS Ctrl-PrtSc BEFORE YOU ENTER.
220 PRINT:COLOR 15:PRINT "GOBANANA.DOC";:COLOR 7:PRINT TAB(20)"This is easy reading; broad scale tutorial - ERROR Traps.":PRINT "It helps describe the simple steps to include error trapping in your programs.
230 PRINT :COLOR 15:PRINT "DEBUG.DOC";:COLOR 7:PRINT TAB(20)"Not the same as ERROR trapping DEBUG helps git them gremlins":PRINT "When should you trap errors and when do you debug? What is the difference?
240 PRINT :COLOR 15:PRINT "HORNBOOK.DOC";:COLOR 7:PRINT TAB(20)"A treasure house of programmers goodies reside in DOS.":PRINT "Access the super search and replace commands and learn some new EDLIN commands
250 PRINT :COLOR 15:PRINT "PEEKFILE.DOC";:COLOR 7:PRINT TAB(20)"Peek into files and ROM using powerful DOS utility DEBUG":PRINT "You can explore any memory address or any disk sector with this great tool.
300 GOSUB 1000
310 PRINT "ERROR1.TBX"TAB(20)"FUN tests the IBM-PC  CPU for accuracy.
320 PRINT:PRINT "ANYKEY.TBX"TAB(20)"Advanced routine for any key to continue.
330 PRINT:PRINT "SCRNMAP.TBX"TAB(20)"Never get lost again !
340 PRINT:PRINT "TESTEROR.TBX"TAB(20)"Error trapping demo.
350 PRINT:PRINT "LOKATE.TBX"TAB(20)"Flashes screen address and points location
360 PRINT:PRINT "BANANA1.TBX"TAB(20)"Error trapping  ON - OFF routine
370 PRINT:PRINT "BANANA2.TBX"TAB(20)"Error trapping alternative.
380 PRINT:PRINT "ERROR2.TBX"TAB(20)"Tough tests CPU for accuracy.
400 GOSUB 1000
405 LOCATE 10:COLOR 15:PRINT "PEPLSYST.BAS":COLOR 7:PRINT TAB(20)"When is a PERSONAL computer like a PEOPLE system ?" :PRINT :PRINT "Think of the software as a link between PEOPLE and the COMPUTER - a SYSTEM.
410 LOCATE 15:COLOR 15:PRINT "TALKPAGE.BAS":COLOR 7:PRINT TAB(20)"Why Talking Pages makes reading lots easier.":PRINT :PRINT "Better communications with a modern printing system and your great IBM-PC.
420 LOCATE 20:COLOR 15:PRINT "LETTER.BAS":COLOR 7:PRINT TAB(20)"A meesage to Friends of PeopleSystems.":PRINT :PRINT "We want our friends to be satisfied without any fine print standing in the way.
500 GOSUB 1110
999 END
1000 REM page routine
1010 GOSUB 1100
1030 CLS
1033 PRINT TAB(10)"JOT DOWN THE FILENAME YOU WANT -- NOTE EXTENSION .DOC or.TBX
1035 PRINT :PRINT TAB(10)"PRESS ESC TO GO BASICA - LOAD ~FILENAME.TBX~ AND LIST
1038 PRINT "IF YOU WANT TO VIEW filename.DOC THEN ENTER system -- FOLLOW DIRECTIONS SHOWN
1040 COLOR 15:PRINT :PRINT TAB(20)"FUNKY PROGRAM TOOLBOX INDEX SHEET ";P
1042 PRINT :PRINT "FILENAME                    DESCRIPTION OF PROGRAM
1043 P=P+1
1045 COLOR 7
1050 RETURN
1100 REM any key routine
1105 LOCATE 25,20 :PRINT "FOR NEXT PAGE OF INDEX PRESS ANY KEY";
1110 X$=INKEY$:IF X$="" THEN 1110
1115 IF X$=CHR$(27) THEN 2000
1117 FOR Q=1 TO 15:X$=INKEY$:NEXT
1120 SOUND 1500,2: SOUND 2000,3
1130 RETURN
2000 REM---EXIT ROUTINE
2005 PRINT
2008 FILES
2010 COLOR 15:PRINT "YOU ARE IN BASICA - LOAD ~filename.TBX~ <enter> and LIST
2020 PRINT :PRINT "OR FOR filename.DOC ENTER SYSTEM AND A>type filename.DOC <enter>
2025 PRINT :PRINT "to printout a copy in DOS -- press Ctrl-PrtSc before <enter>
2030 COLOR 7
2040 END
```

## INDEX2.BAS

```bas
10 REM---~INDEX2~---Index for Programmer's Toolbox 2.0
15 CLS :KEY OFF
16 P=1
20 COLOR 0,7:LOCATE 4,20 :PRINT "  FUNKY PROGRAM TOOLBOX INDEX2 SHEET 00  ":COLOR 7,0
30 COLOR 15: LOCATE  6,19 :PRINT "TO MAKE SUBROUTINES TO MERGE WITH PROGRAM":COLOR 7
35 LOCATE  8,10 :PRINT "1. Find location for subroutine in program, say 7000-8000
40 LOCATE 10,10 :PRINT "2. LOAD ~subrtn~ into memory.
50 LOCATE 12,10 :PRINT "3. Clean out extra lines, etc.
60 LOCATE 14,10 :PRINT "4. RENUM to fit into your program -- start 7000-8000
70 LOCATE 16,10 :PRINT "5. SAVE~Asubrtn~,A in ASCII to merge into program
75 LOCATE 18,10 :PRINT "6. LOAD your program again and recheck 7000- for subrtn
80 LOCATE 20,10 :PRINT "7. Enter MERGE ~Asubrtn~ in direct mode.
90 LOCATE 22,10 :PRINT "8. Check 7000- in your program -- ITS DONE.
92 LOCATE 24,10 :PRINT "9. Put in GOSUB 7000's where needed and check RETURN.
95 GOSUB 1000
100 PRINT :PRINT "HEXSCALE.TBX"TAB(20)"Graphics for Addressing-nibbles-bytes-segment:offset
110 PRINT :PRINT "XMASTREE.TBX"TAB(20)"Mono graphics and music for the season.
120 PRINT :PRINT "CURSER.TBX"TAB(20)"Interactive, demo of CRSLIN and POS(0) for bookmarking
130 PRINT :PRINT "PEOPLSYS.TBX"TAB(20)"Big screen opening and closing - chains to AU REVOIR
140 PRINT :PRINT "AUREVOIR.TBX"TAB(20)"Flashing panels say a big GOOD-BYE -see  above.
150 PRINT :PRINT "SCRNCHRS.TBX"TAB(20)"Now see all screen chars, some unmentionables
160 PRINT :PRINT "ERRMESAGE.TBX"TAB(20)"Shows ERROR messages - bookmarks place in ERORNUM.DAT
200 GOSUB 1000
210 PRINT :PRINT "PLEASE NOTE: THESE ARE .DOC PROGRAMS. THEY WILL RUN A>TYPE filename.doc          AND IF YOU WANT A PRINT A COPY TO STUDY --PRESS Ctrl-PrtSc BEFORE YOU ENTER.
220 PRINT :COLOR 15:PRINT "BOOBOO.DOC";:COLOR 7:PRINT TAB(20)"Will the real IBM-PC BooBoo please stand up! ":PRINT "As great as it is -- there is need for improvement in one important area.
230 PRINT :COLOR 15:PRINT "DISKMOD.DOC";:COLOR 7:PRINT TAB(20)"Modify a disk with the DEBUG powerhouse.":PRINT "How to recover one sector file and access Directory and FAT.":PRINT "SEE ABSECTOR.TBX and CLUSECTR.TBX for absolute sectors."
240 PRINT :COLOR 15:PRINT "SENSITIV.DOC";:COLOR 7:PRINT TAB(20)"Sensitive people and sensitive subjects":PRINT "How to work with and get the best out of people, without blowing the program.
250 PRINT :COLOR 15:PRINT "THE FOLLOWING ARE ~filename.TBX~ files in BASICA."
260 PRINT :PRINT "SAVEDLIN.TBX";:COLOR 7:PRINT TAB(20)"Recovers lost EDLIN file when Disk is Full.
270 PRINT :COLOR 15 :PRINT "FRIENDLY.TBX";:COLOR 7:PRINT TAB(20)"You can be friendly without being sticky.
300 GOSUB 1000
305 PRINT :PRINT "DISKLABL.TBX"TAB(20)"Label your disks with wide Directory -- No labels needed
308 PRINT :PRINT "DOLABLE.TBX"TAB(20)"Self producing lable program -- needs printer -- no lables
310 PRINT :PRINT "ABSECTOR.TBX"TAB(20)"Converts Track-Sector to Absolute sector for DEBUG use.
320 PRINT "CLUSECTR.TBX"TAB(20)"DOS 2.0 Conversion of start cluster to Abs. Sector
330 PRINT :PRINT "AINK$.TBX"TAB(20)"Controls KYBD for opening files correctly.
340 PRINT :PRINT "INPUTEST.TBX"TAB(20)"Trap KYBD entry with easy INSTR routine
350 PRINT :PRINT "F5ERRMSG.TBX"TAB(20)"Print out ERROR messages by pressing F5
360 PRINT :PRINT "NOTENUMB.TBX"TAB(20)"Makes Octave shifts easy -- Nn chart
370 GOSUB 1000
400 PRINT "MACHLANG.TBX"TAB(20)"Using POKE and Machine Language complete easy computation.
410 PRINT :PRINT "WPROT.TBX"TAB(20)"How to Unprotect a file to LIST and SAVE it
420 PRINT :PRINT "ASCKEY$.TBX"TAB(20)"ASCII Numbers for all keys -- learn about new F keys
430 PRINT :PRINT "SOFTKEYS.TBX"TAB(20)"Loads new F keys for Color/Mono then ERASES program
440 PRINT :PRINT "IBMKEYS.TBX"TAB(20)"Reloads the F1 to F10 keys the way they were
450 PRINT :PRINT "COMO.TBX"TAB(20)"Merge this color/mono subroutine into your program.
460 PRINT "COLOR.BAS"TAB(23)"These are separate subroutines to RUN~COLOR or RUN~MONO
470 PRINT "MONO.BAS"TAB(30)"When you get stuck and need it fast.
475 PRINT :PRINT "ALLCHARS.TBX"TAB(20)"Color or Mono -- charts all screen chars - unmentionables
490 GOSUB 1000
500 PRINT :PRINT "COLORBOX.TBX"TAB(20)"Demos Color combinations - copy down the ones you like.
510 PRINT :PRINT "MEMTEST1.TBX"TAB(20)"DANGER ** MEM WORKING ** tests memory for ERROR
520 PRINT :PRINT "ARAYCOMP.TBX"TAB(20)"Compute ARRAY size overhead in DEFSNG-DEFDBL-DEFSTR
530 PRINT :PRINT "FUNCTKEY.TBX"TAB(20)"Demos over 60 IBM function keys with a WILD WESTERN...drama?
540 PRINT :PRINT "HEX2DEC.TBX"TAB(20)"Automatically convert any HEX address to decimal numbers
550 PRINT :PRINT "BASUNPRO.TBX"TAB(20)"Create machine language to Unprot files.-LIST first.
560 PRINT :PRINT "PROTECTD.TBX"TAB(20)"A Protected file for you to practice on -NO write protect!
700 GOSUB 1110
999 END
1000 REM page routine
1010 GOSUB 1100
1030 CLS
1033 PRINT TAB(10)"SELECT THE filename YOU WANT -- NOTE EXTENSION .DOC or.TBX
1035 PRINT :PRINT TAB(10)"PRESS ESC TO GO BASICA - LOAD ~filename.TBX~ AND LIST
1038 PRINT "IF YOU WANT TO VIEW filename.DOC THEN ENTER system -- FOLLOW DIRECTIONS SHOWN
1040 COLOR 15:PRINT :PRINT TAB(20)"FUNKY PROGRAM TOOLBOX INDEX2 SHEET ";P
1042 PRINT :PRINT "FILENAME                    DESCRIPTION OF PROGRAM
1043 P=P+1
1045 COLOR 7
1050 RETURN
1100 REM any key routine
1105 LOCATE 25,20 :PRINT "FOR NEXT PAGE PRESS ANY KEY - ESC TO BASICA";
1110 X$=INKEY$:IF X$="" THEN 1110
1115 IF X$=CHR$(27) THEN 2000
1117 FOR Q=1 TO 15:X$=INKEY$:NEXT
1120 SOUND 1500,2: SOUND 2000,3
1130 RETURN
2000 REM---EXIT ROUTINE
2005 PRINT
2008 FILES
2010 COLOR 15:PRINT "YOU ARE IN BASICA - LOAD ~filename.TBX~ <enter> and LIST
2020 PRINT :PRINT "OR FOR ~filename.DOC~ ENTER SYSTEM AND A>type filename.DOC <enter>
2025 PRINT :PRINT "to printout a copy in DOS -- press Ctrl-PrtSc before <enter>
2030 COLOR 7
2040 END
```

## LETTER.BAS

```bas
10 REM---"LETTER.BAS"---
15 GOTO 110
100 CHAYNBAK$="YES"
110 CLS: KEY OFF
120 PRINT :PRINT "DEAR FRIENDS
130 PRINT :PRINT "Thank you for TRYING --PEOPLE SYSTEMS, LTD.  SOFTWARE FOR IBM-PC  
140 PRINT :PRINT "We hope you will be a regular user of PEOPLE SYSTEM'S, LTD. WARMWARE.           It is a new concept. If you haven't already done so, RUN ~TALKPAGE~             and~PEPLSYST~ to learn more of our philosophy.
150 PRINT :PRINT "As you can easily see we are working hard to produce a unique and               useful product, one that is ahead of it's time, low priced, but with            full service and support.
160 PRINT :PRINT "We believe that PEOPLE SYSTEMS, LTD. has a LOCK on the better interface         to WARMWARE without FLASH or FANFARE.
170 PRINT :PRINT "We want our customers to be happy with our products. We will appreciate         receiving your feed back, either good or bad, after you have used the           product and are familiar with it. (See below) If you send us a
180 PRINT "disk, with your comments and a post-paid return mailer, we will send you        any updates or other suggestions we receive from other users.
190 GOSUB 430: CLS
200 PRINT "BASIC LANGUAGE IS THE BEST MICRO LANGUAGE"
210 PRINT "We believe that regardless of the contradictory statements by the               special interest people, compiler salemen, high priests of DATA                 PROCESSING and well meaning editorial people who don't really
220 PRINT "investigate their recommendations (that they just read in another               magazine) we sincerely believe that BASIC is the BEST language                  for PERSONAL COMPUTERS.
230 PRINT :PRINT "BASIC is interactive and quick to correct-- BASIC is the most used              and best understood of them all -- BASIC is the most extensive and              growing every day. BASIC can be easily compiled and if loops are ";
240 PRINT "too slow, machine or assembler language subroutines may be substituted."
250 PRINT :PRINT "At one time BASIC was limited, unreliable and slow. BUT, not any more.          We made a comparative study in ~Practical BASIC Programs~ and sister book       ~Practical Pascal Programs~. These are well written programs but it takes
260 PRINT "almost 50 percent more programming keystrokes to do it in Pascal, not to        mention the lost time getting error reports deciphered and repairing the        code so that it will run. In IBM Pascal and others there is no graphics"
270 PRINT "no music, and many BASIC tools are missing like TRON and ON KEY."
280 GOSUB 430
290 PRINT : PRINT "Yes, Pascal is fast--when you get it all together.BUT, Compiled BASIC is        FAST and EASY. You don't need a degree in DATA PROCESSING to make it work.
300 PRINT "Colleges can't support BASIC because of its interactive demand for              processor run-time. But everyone in college can own a micro and enjoy           the tremendous benefits of BASIC.
310 PRINT :PRINT "Not all BASIC is good BASIC -- but then neither is ALL Pascal.
320 PRINT :PRINT "With my personal best wishes for your continued interest in PEOPLE SYSTEMS      in your daily experiences.
330 PRINT
340 PRINT "Yours sincerely,
350 PRINT :PRINT "LOU WARNER
360 PRINT
370 PRINT "POST SCRIPT
380 PRINT "After you have become familiar with the program and have used it enough         to form an intelligent opinion, and you are NOT satified, then please           write for a copy of our MERCHANDISE RETURN QUESTIONNAIRE -- fill it out
390 PRINT "completely, so that we may understand exactly why you were disappointed         in the WARMWARE. Then pack all the materials safely in their wrapper and        return it to us with the QUESTIONNAIRE for a full refund of your purchase.
400 GOSUB 430
425 GOTO 500
430 LOCATE 25,1 :PRINT TAB(20);"PRESS ANY KEY TO CONTINUE -- ESC FOR MENU";
440 FOR N=1 TO 15 : I$=INKEY$ : NEXT
450 I$=INKEY$: IF I$="" THEN 450
455 IF I$=CHR$(27) THEN 500
460 LOCATE 25,20 :PRINT "                                               "
470 SOUND 2000,2 : SOUND 2500,3
480 CLS
490 RETURN
500 IF CHAYNBAK$="YES" THEN 505
502 PRINT "YOU ARE IN BASICA" :END
505 CHAIN "MENU",325,ALL
```

## MONO.BAS

```bas
31000 REM---SAVE"MONO.BAS"   -----return to mono
31010 KEY OFF
31020 WIDTH 40: DEF SEG=0:A=PEEK(&H410):   POKE &H410,A OR &H30
31030 SCREEN 0:WIDTH  80:LOCATE 1,1,1,12,13
31040 NEW
```

## PEPLSYST.BAS

```bas
10 REM---"APEPLSYS",A --- people systems dialogue
20 KEY OFF
30 CLS
90 GOTO 1000
100 CHAYNBAK$="YES"
1000 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1010 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1020 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1030 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s  ? " :COLOR 7
1040 PRINT :LOCATE ,6 : PRINT "While technology systems (THING-SYSTEMS) have made super progress,
1045 LOCATE ,6 : PRINT "have PeopleSystems really kept pace with society's urgent needs?
1050 LOCATE 9,6 : PRINT "In fact, THING-SYSTEMS can put a man on the moon; give him a vehicle
1055 LOCATE 10,6 :PRINT "to drive and then bring him safely back to his loved ones--BUT, using
1060 LOCATE 11,6 :PRINT "today's PeopleSystems we can't get kids through high school. They
1065 LOCATE 12,6 :PRINT "drop out and miss learning how to enjoy a full and happy life.
1070 LOCATE 14,6 : PRINT "Dialing a phone, we can talk with anyone in the free world, but we
1075 LOCATE 15,6 : PRINT "often can't communicate with our loved ones, even in the same room.
1080 LOCATE 17,6 :PRINT "PeopleSystems is a simple bridge between the problems of today,"
1085 LOCATE 18,6:PRINT "and the answers of tomorrow. Information especially designed for
1090 LOCATE 19,6:PRINT "easy reading, and dedicated to PROGRESS without FLASH or FANFARE.
1095 LOCATE 25,17 :PRINT "Press ANY KEY for next screen ";:
1098 X$=INKEY$: IF X$="" THEN 1098
1100 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1110 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1120 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1130 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s ? " :COLOR 7
1135 LOCATE 5 ,35:PRINT "(continued)"
1140 LOCATE 6,6 :PRINT "PeopleSystems are the regular, often daily patterns that guide,
1145 LOCATE 7,6:PRINT "control or play a part in our lives. PeopleSystems are made up of
1150 LOCATE  8,6:PRINT "the habits, the customs and the laws that affect people's behaviour
1155 LOCATE  9,6:PRINT "and society's progress or its stagnation. EXAMPLES of PeopleSystems:
1157 LOCATE 10,6:PRINT "Three meals a day; grammar, high school, college, job or marriage.
1160 LOCATE 12,6:PRINT "The progress of THING-SYSTEMS is centuries ahead of PeopleSystems.
1165 LOCATE 13,6:PRINT "In fact, during the last several decades our PeopleSystems seem
1170 LOCATE 14,6:PRINT "to be stumbling through all sorts of self-destructive patterns in
1175 LOCATE 15,6:PRINT "our families, our government, big business, the environment and many
1180 LOCATE 16,6:PRINT "other institutions that once were a model of progress for the world.
1190 LOCATE 18,6:PRINT "As Rousseau said -- Perhaps people have grown too smart, too soon ?
1195 LOCATE 19,6:PRINT "Or - Some people don't understand much of what they think they know!
1200 LOCATE 25,20 :PRINT "Press ANY KEY for next screen ";:
1210 X$=INKEY$: IF X$="" THEN 1210
1220 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1230 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1240 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1250 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s ? " :COLOR 7
1260 LOCATE 5 ,35:PRINT "(continued)"
1270 LOCATE 7,6:PRINT "You will hear the GURU's of people control, the psychologists claim
1275 LOCATE 8,6:PRINT "BUT, you can't control people ! HUH ? Perhaps what they mean is --
1280 LOCATE 9,6:PRINT "Try not to let people know you are trying to control them, otherwise
1285 LOCATE 10,6:PRINT "it may not succeed. Hog-wash from Sophomore Clinical Psychology 101A
1290 LOCATE 12,6:PRINT "Most people are quite systematic, and whether they know it or not,
1295 LOCATE 13,6:PRINT "they also want to use systems that work and succeed. They will rebel
1297 LOCATE 14,6:PRINT "however, if required to follow dumb systems that don't work.
1300 LOCATE 16,6:PRINT "Ask any dissenter how many ways he goes home from work?
1310 LOCATE 17,6:PRINT "Then ask-- Which way or which SYSTEM does he use most of the time?
1315 LOCATE 19,6:PRINT "HE DIDN'T KNOW THAT HIS PATTERN FOR GOING HOME WAS A SYSTEM!-- SHAME.
1320 LOCATE 20,6:PRINT "STUDY THE THREE KINDS OF PEOPLE SYSTEMS ON THE NEXT SCREEN -->>
1330 LOCATE 25,17 :PRINT "Press ANY KEY for next to last screen ";:
1332 X$=INKEY$: IF X$="" THEN 1332
1350 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1365 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1366 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1370 LOCATE 4,15 :COLOR 15: PRINT  "  W H A T  A R E   P E O P L E   S Y S T E M S  ? " :COLOR 7
1375 LOCATE 5 ,35:PRINT "(continued)"
1380 LOCATE 7,6:PRINT "     HABITS              CUSTOMS           GOVERNMENT OR LAWS
1385 LOCATE 9,6: PRINT "brush our teeth    watch our weight   follow traffic rules
1390 LOCATE 10,6:PRINT "wash our face      be kind to Ladies  marriage and divorce laws
1395 LOCATE 11,6:PRINT "wear shoes         holding a wake     funeral laws
1400 LOCATE 12,6:PRINT "speak clearly      talk English       pay judgments
1410 LOCATE 13,6:PRINT "chew mouth closed  eat three meals    ingredients on package
1415 LOCATE 14,6:PRINT "carry money        use U.S. money     don't deface money
1420 LOCATE 15,6:PRINT "date others        set up household   get married
1425 LOCATE 16,6:PRINT "buy things         earn a living      pay taxes
1500 LOCATE 25,10: PRINT "PRESS  ANY KEY  TO  RETURN TO BASIC -- ESC FOR MENU";
1505 X$=INKEY$ : IF X$="" THEN 1505
1510 IF X$=CHR$(27) THEN 1515
1515 IF CHAYNBAK$="YES" THEN 1520 ELSE 1525
1520 CHAIN "MENU.BAS",615,ALL
1525 CLS : PRINT "YOU ARE IN BASIC"
```

## TALKPAGE.BAS

```bas
10 REM --- The IBM Personal Computer  "TALKPAGE"
12 REM --- Licensed Material -- Program property of Louis A. Warner, P. E.
20 KEY OFF : CLS
90 GOTO 150
100 CHAYNBAK$="YES"
150 REM
160 REM
180 CLS
190 PRINT  "            W H Y   ~ T A L K I N G   P A G E S  ~"
200 PRINT
210 PRINT "*******************************************************************"
220 PRINT :PRINT "THIS IS STANDARD COMPUTER PRINTING -- TOUGH TO READ !"
230 PRINT "Year after year, more  and more people appear to be reading fewer and fewer"
240 PRINT"books. Television and several other forms of communication like radio and tele-"
250 PRINT "phone also have helped to eliminate many newspapers and magazines. A strange"
260 PRINT "thing is happening here. There are fewer and fewer readers but more and more "
270 PRINT "books of a non-fiction type being printed  and looked at. Many advertisers "
280 PRINT "wonder--how many of these tons of non-fiction printing are read?
290 PRINT "Remember back in college, when the sharp guys picked out the second-hand books"
300 PRINT "that were all marked up by the previous owner. It was worth a lot of hard"
310 PRINT "studying to find someone elses discard that had been well highlited. It helped"
320 PRINT "you understand the monotonous black ribbons of type that stretched across the"
330 PRINT "the clean white paper, page after page. Today, there are highliting pens, made"
340 PRINT "just for that special purpose. Then, we must ask, why aren't all books hilited"
350 PRINT "when they are printed ? Why must everyone do it, over and over again,for them-"
360 PRINT "selves?  This is the age of efficiency." :GOSUB 2800   'SPACBAR
370 COLOR 15:PRINT :PRINT "NOW READ THE SAME WORDS--TALKING PAGES STYLE":COLOR 7:PRINT :PRINT
380 PRINT
390 PRINT"Year after year, MORE and more people appear to be reading FEWER and"
400 PRINT
410 PRINT "FEWER books.  Television and several OTHER forms of communication "
420 PRINT
430 PRINT"like radio and telephone have also helped ELIMINATE many newspapers."
440 PRINT
450 PRINT"A STRANGE thing is happening here. There are FEWER and fewer readers"
460 PRINT
470 PRINT "but MORE and more books and magazines of a NON-fiction type  being"
480 PRINT
490 PRINT "printed and looked at. Many advertisers WONDER--how much is READ? "
500 PRINT
510 GOSUB 2800
520 PRINT
530 PRINT "Remember back in COLLEGE, when the sharp guys PICKED out the"
540 PRINT
550 PRINT "SECOND-hand books that were all MARKED up by the previous OWNER."
560 PRINT
570 PRINT "It was WORTH a lot of hard studying to FIND someones DISCARD that "
580 PRINT
590 PRINT "had been HIGHLIGHTED well. It HELPED you understand the MONOTONOUS"
600 PRINT
610 PRINT "black ribbons of type that STRETCHED across the CLEAN white paper,"
620 PRINT
630 PRINT "page after page. Today, there are super highlighting PENS made"
640 PRINT
650 PRINT "for that SPECIAL purpose. Then, we must ask, W H Y aren't ALL books"
660 PRINT
670 PRINT "highlighted WHEN they are printed ? Why must EVERYONE do it, over"
680 PRINT
690 PRINT "and over AGAIN for themselves ? This is the AGE of efficiency. "
700 PRINT
710 GOSUB 2800
720 PRINT
730 PRINT "What's that you say; you were taught NOT to mark up your books, in"
740 PRINT
750 PRINT "GRAMMAR school. But later you had to LEARN it yourself in COLLEGE."
760 PRINT
770 PRINT "Oh, yes the difference was that YOU didn't OWN the books when you"
780 PRINT
790 PRINT "were YOUNG, and may not have known HOW to mark them up effectively."
800 PRINT
810 PRINT "In fact, it might be one more PROBLEM for a CHILD to understand IF"
820 PRINT
830 PRINT "BEGINNERS reading books were highlited, unless GIFTED students were"
840 PRINT
850 PRINT "using them.
860 PRINT
870 GOSUB 2800
880 PRINT
890 PRINT "Advertisers discovered the VALUE of highliting by capitalizing the"
900 PRINT
910 PRINT "IMPORTANT words and phrases. They also know the EASE of reading "
920 PRINT
930 PRINT "SHORTER lines like the ones NEWSPAPERS use in their COLUMNS. There"
940 PRINT
950 PRINT "is one more ADDITION we can make to our IMPROVED printing system,"
960 PRINT
970 PRINT "NONE of which is UNIQUE, having been TRIED and PROVEN many times."
980 PRINT
990 PRINT "In fact, the author WROTE a paper on it back in 1952, long before "
1000 PRINT
1010 PRINT "the COMING of highliter pens. The last feature comes from the "
1020 PRINT
1030 PRINT "LAWYERS and the other WORD people, the WRITERS, who also KNOW that"
1040 PRINT
1050 PRINT "comprehension is IMPROVED and marking up is EASED by DOUBLE spacing"
1060 PRINT
1070 PRINT"or spacing one and one-half lines, as SOME typewriters do."
1080 PRINT
1090 GOSUB 2800
1100 PRINT
1110 PRINT "Oh yes, TALKING PAGES uses up more paper, and ISN'T this is the age"
1120 PRINT
1130 PRINT "of efficiency. But of course, the FIRST priority for efficiency is "
1140 PRINT
1150 PRINT "the purpose of printed matter -- COMMUNICATION. And the efficiency"
1160 PRINT
1170 PRINT "of UNDERSTANDING what you are READING is IMPROVED considerably."
1180 PRINT
1190 PRINT "Its GAIN far out strips the ADDITIONAL COST of PAPER, and MAKES it"
1200 PRINT
1210 PRINT "FUN to read, even for THOSE who often CLAIM they are POOR readers."
1220 PRINT
1230 GOSUB 2800
1240 PRINT
1250 PRINT "For many centuries there were only TWO major METHODS of gaining new"
1260 PRINT
1270 PRINT "INFORMATION. Method one was BEING there yourself to HEAR and SEE"
1280 PRINT
1290 PRINT "what went on and what was said. The OTHER method was the IMPORTED"
1300 PRINT
1310 PRINT "word/message, either written or verbal. This was ALL there was in"
1320 PRINT
1330 PRINT "COMMUNICATION for many centuries. Then along came the PRINTED word,"
1340 PRINT
1350 PRINT "greatly ENABLED by Gutenberg's MOVABLE type. But it wasn't UNTIL the
1360 PRINT
1370 PRINT "telegraph and telephone ARRIVED in the 19th century that a  really"
1380 PRINT
1390 PRINT "NEW communications MEDIUM became available to the PEOPLE."
1400 PRINT
1410 GOSUB 2800
1420 PRINT
1430 PRINT "Today television is the MOST liesurely way of RECEIVING information"
1440 PRINT
1450 PRINT "et al . We can get VARYING enlightenment and entertainment with"
1460 PRINT
1470 PRINT "LITTLE effort on our part EXCEPT to RECEIVE it attentively, if we"
1480 PRINT
1490 PRINT "desire to ENJOY its benefits."
1500 GOSUB 2800
1510 PRINT
1520 PRINT "Did you ever NOTICE that when YOU are discussing the SAME paragraph"
1530 PRINT
1540 PRINT "or article that SOMEONE else has READ, you may have DIFFERING opin-"
1550 PRINT
1560 PRINT "ions on its MEANING, and a rereading may ELIMINATE its ambiguity."
1570 PRINT
1580 PRINT "Somebody may have MISSED a `REVERSIBLE' word or phrase, that MADE "
1590 PRINT
1600 PRINT "all the difference. In the same vein of INTERPERSONAL communication"
1610 PRINT
1620 PRINT "when someone READS a paragraph to you its often much CLEARER than"
1630 PRINT
1640 PRINT "when YOU had READ it yourself. Why ? Probably because they ADDED"
1650 PRINT
1660 PRINT "inflection and emphasis to the monotonous RIBBONS of type and LENT"
1670 PRINT
1680 PRINT "their OWN interpretative information to its context. Just as if YOU"
1690 PRINT
1700 PRINT "had been READING highlited copy.
1710 PRINT
1720 GOSUB 2800
1730 PRINT
1740 PRINT "TALKING PAGES does this by EMPHASIZING or `hilite-ing' KEY words or"
1750 PRINT
1760 PRINT "phrases in CAPS like the copy writers do. You may RIGHTLY ask,"
1770 PRINT
1780 PRINT "What words SHOULD be hilited ? The rules are NOT HARD and fast for"
1790 PRINT
1800 PRINT "TALKING PAGES but experience has shown that THERE are some general-"
1810 PRINT
1820 PRINT "izations that CAN BE applied to MAKE the work more EFFECTIVE. But "
1830 PRINT
1840 PRINT "they are ALL subject to the writer's JUDGEMENT. Experiments have"
1850 PRINT
1860 PRINT "shown that the MORE you do hilite-ing the EASIER it becomes. And if"
1870 PRINT
1880 PRINT "the SAME paragraph is hilited on TWO separate occasions, a compar-"
1890 PRINT
1900 PRINT "ison will SHOW a very SIMILIAR pattern of hilite-ing EVEN if its"
1910 PRINT
1920 PRINT "done by TWO individuals who DON'T know what the OTHER has done."
1930 PRINT
1940 GOSUB 2800
1950 PRINT
1960 PRINT "First, there is automatic POSITION hilite-ing. The first and last"
1970 PRINT
1980 PRINT "words of a sentence are emphasized by  their LOCATION. The first"
1990 PRINT
2000 PRINT "BEGINS with a capital letter, the last, ENDS with a period.It may "
2010 PRINT
2020 PRINT "NOT be necessary to hilite these WORDS unless they  could be MIS-"
2030 PRINT
2040 PRINT "READ or are a NEW, or strange topic or expression.
2050 PRINT
2060 GOSUB 2800
2070 PRINT
2080 PRINT "When  NEW jargon is explained  it is a good time to hilite it and"
2090 PRINT
2100 PRINT "then to OMIT its hilite-ing later UNLESS it is necessary in the "
2110 PRINT
2120 PRINT "judgement of the writer. Modifiers and CONDITION words like yes,"
2130 PRINT
2140 PRINT "no, up, down, big, little, strong, weak usually NEED hiliting,but"
2150 PRINT
2160 PRINT "NOT always.Sometimes hiliting ONCE is enough to call the READERS "
2170 PRINT
2180 PRINT "attention to the WORD or phrase being REPEATED in a paragraph. But"
2190 PRINT
2200 PRINT "PERHAPS in a paragraph FURTHER along it MIGHT be worth repeating "
2210 PRINT
2220 PRINT "the hilite AGAIN.
2230 PRINT
2240 GOSUB 2800
2250 PRINT
2260 PRINT "Keywords that could REVERSE the TONE or position of the statement"
2270 PRINT
2280 PRINT "are LIKELY candidates for hiliting. There are MANY variations and"
2290 PRINT
2300 PRINT "RULES, at best, should be guidelines rather than iron bound. It is"
2310 PRINT
2320 PRINT "SUGGESTED however, that the writing be COMPLETELY finished before"
2330 PRINT
2340 PRINT "ANY attempt to do hiliting. Then the author or a proof-reader,
2350 PRINT
2360 PRINT "who is FAMILIAR with the work, should TAKE a hiliter and add JUST"
2370 PRINT
2380 PRINT "enough EMPHASIS to clarify and FACILITATE its READING. It's pref-"
2390 PRINT
2400 PRINT "erable NOT to write and hilite at the SAME time unless the AUTHOR "
2410 PRINT
2420 PRINT "wants a PARTICULAR word or phrase hilited in a particular way."
2430 PRINT
2440 GOSUB 2800
2450 PRINT
2460 PRINT "Try a TEST for your OWN information. Take a newspaper COLUMN and"
2470 PRINT
2480 PRINT "Xerox 4 copies and GIVE it to a friend to hilite WHILE you do it"
2490 PRINT
2500 PRINT "also. Save TWO copies to do LATER, WITHOUT looking at your FIRST"
2510 PRINT
2520 PRINT "set AGAIN. Mark them so that you KNOW which is FIRST and which "
2530 PRINT
2540 PRINT "is SECOND. Then COMPARE them in DETAIL with your friend. Read them"
2550 PRINT
2560 PRINT "ALOUD and look over your hilites. You'll be AMAZED at the similiar"
2570 PRINT
2580 PRINT "RESULTS you'll have and the LEARNING experience will be BENEFICIAL.
2590 PRINT
2600 COLOR 31
2610 PRINT :PRINT "REMEMBER, NO TWO PEOPLE HAVE THE SAME VERBAL INFLECTION --   AND THATS GOOD!"
2620 COLOR 7
2630 GOSUB 2800
2635 IF CHAYNBAK$="YES" THEN 2900
2640 PRINT "YOU ARE BACK IN BASIC"
2650 END
2660 REM ----SAVE"AMUSIC"-----SHORT SELECTIONS FOR GOSUBS
2670 PLAY "MSMBO2T240L8CFAO3C4O2AO3C2"             'CHARGE
2680 GOSUB 2770
2690 PLAY "MLMBT120O2L6GBDBB"                      'AOOGHA
2700 GOSUB 2770
2710 PLAY "MSMBT120O2L8GGGE-1FFFD1"                'FIFTH SYMPHONY
2720 GOSUB 2770
2730 PLAY "MNMBO2T210L8GFE2O1GO2E2O1GO2E2P4FED2O1AO2D2O1AO2D2" 'MERRY OLDSMOBL"
2740 GOSUB 2780
2750 PLAY "MSMBT180O2L8FFGAFAG4P16FFGAF4EP8FFGAB-AGFECDEF4F"  'YANKEE DOODLE
2760 END
2770 FOR DELAY = 1 TO 5000 :NEXT : RETURN
2780 FOR DELAY = 1 TO 10000:NEXT :RETURN
2790 STOP
2800 REM----SAVE"ASPACBAR----press space bar to continue subroutine
2810 DEF SEG=0:POKE 1052,PEEK(1050)      'REM flush kybdbuffer
2820 PRINT :PRINT TAB(10)"PRESS SPACE BAR TO CONTINUE--ESC FOR MENU"
2830 PLAY "MLMBT120O2L6GBDBB"                      'AOOGHA
2840 K$=INKEY$:IF K$="" THEN 2840
2850 IF K$=" " THEN 2870
2860 IF K$=CHR$(27) THEN 2890 ELSE 2820      'exit to MENU
2870 SOUND 1000,5
2880 RETURN
2890 IF CHAYNBAK$="YES" THEN 2900 ELSE RETURN
2900 CHAIN "MENU.BAS",615,ALL
2910 REM---SAVE"TALKPAGE"
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0907

     Volume in drive A has no label
     Directory of A:\

    ANYKEY   TBX       896   4-17-83   6:03a
    AINK$    TBX      1408   4-17-83   8:43a
    AUREVOIR TBX      3328   4-16-83  10:15a
    ASCKEY$  TBX      1152   4-17-83   9:12a
    ALLCHARS TBX       896   4-17-83   4:38a
    ARAYCOMP TBX       613   1-01-80  12:07a
    ABSECTOR TBX      1152   4-28-83   4:41p
    INDEX1   BAS      4022  10-26-87   7:29a
    FLIPPIES TBX      6656   3-15-83   6:59p
    MARKSCRN TBX      1024   2-21-83  11:50a
    SCRNMAP  TBX       384   2-21-83  11:53a
    LOKATE   TBX       482   1-01-80  12:21a
    COLRTOGL TBX      1110   1-01-80  12:25a
    TESTEROR TBX       640   4-15-83   4:13p
    BANANA1  TBX      1152   4-16-83  12:25p
    ERROR1   TBX      1664   4-15-83   5:50p
    ERROR2   TBX      1536   4-15-83   7:20p
    BANANA2  TBX       512   4-16-83  12:38p
    NICELEGS TBX      1664   4-16-83  12:45p
    SONGRITR TBX      5504   4-17-83  11:08a
    SOUNDZ   TBX      7424   4-17-83  11:22a
    BLACKOUT TBX      1920   4-17-83   4:26a
    GSBMUSIC TBX      1536   4-18-83   3:58a
    DEBUG    DOC     11507   4-01-83   8:18a
    GOBANANA DOC     12252   4-01-83   8:40a
    HORNBOOK DOC     15646   4-11-83   6:58p
    PEEKFILE DOC     17407   5-02-83   4:40p
    STUFCHIP DOC     14790   5-03-83  12:33p
    BROWSE   COM       960   2-26-86   3:31a
    TALKPAGE BAS     10752   1-01-80  12:19a
    LETTER   BAS      3968   5-06-83  10:16a
    -------              2   1-01-80  12:07a
    INDEX2   BAS      5026  10-26-87   7:46a
    CURSER   TBX       733   1-01-80  12:06a
    ERRMESAG TBX      1280   5-04-83   7:40p
    ERORNUM  DAT       128   1-01-80  12:09a
    INPUTEST TBX       768   4-16-83   9:56a
    PEOPLSYS TBX      3200   4-16-83  10:31a
    DISKLABL TBX      2304   4-16-83  10:40a
    DOLABEL  TBX       512   4-16-83  10:41a
    F5ERRMSG TBX       256   4-16-83  11:07a
    NOTENUMB TBX      1024   4-16-83  12:51p
    HEXSCALE TBX     10752   4-16-83  12:59p
    MACHLANG TBX      1152   4-16-83   1:23p
    WPROT    TBX      1024   4-17-83   8:02a
    SOFTKEYS TBX      1792   4-17-83  10:22a
    IBMKEYS  TBX      1024   4-17-83  10:55a
    COMO     TBX       768   4-17-83  11:46a
    COLOR    BAS       256   4-17-83  11:51a
    MONO     BAS       256   4-17-83  11:53a
    COLORBOX TBX      1408   4-17-83   6:58a
    MEMTEST1 TBX       896   4-18-83   4:15a
    FUNCTKEY TBX      2048   4-18-83   4:48p
    HEX2DEC  TBX       768   4-18-83   6:54p
    BASUNPRO TBX       512   4-18-83   7:13p
    PROTECTD TBX       128   4-18-83   7:22p
    SAVEDLIN TBX      6656   4-18-83   7:37p
    SCRNCHRS TBX       384   4-18-83   7:58p
    XMASTREE TBX       896   4-18-83   2:40p
    BOOBOO   DOC     10749   5-03-83  11:54a
    DISKMOD  DOC      6953   5-02-83  12:33p
    SENSITIV DOC      8801   4-26-83  11:13a
    CLUSECTR TBX      1280   5-01-83   8:22p
    FRIENDLY TBX      9856   4-25-83   4:33p
    DAMNTRIV DOC     50890  11-01-87   3:43p
    PEPLSYST BAS      4835  10-25-87   9:20p
    README2  DOC      5375  10-30-87   9:22a
    WHATISPS DOC      5492  10-30-87   8:08a
    README            1542   1-01-80  12:09a
    FILES907 TXT      4119  12-08-87   1:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-07-87   3:16p
           72 file(s)     290457 bytes
                           36864 bytes free
