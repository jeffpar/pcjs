---
layout: page
title: "PC-SIG Library Disk #3007"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3007/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3007"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ERFIND.BAS

```bas

'          ╔═════════════════════════════════════════════════════╗
'          ║                E R F I N D . B A S                  ║
'          ║                                                     ║
'          ║    THE PROGRAMMER'S FRIEND ... FOR QEDIT USERS      ║
'          ╚═════════════════════════════════════════════════════╝

'  WAT ?? Well, here's the deal. I usually use PBC to complile my Power
'         Basic programs due to the file sizes involved, and edit them with
'         the very fine shareware editor QEdit. QEdit can jump on load to
'         a given file line -- but how could I get the error info from my
'         screen to the command line (other than manually, of course) ??
'         Well, PB can read the screen buffer just fine. But it took me a lot
'         of tinkering to create ERFIND.BAS, to take that info off the screen,
'         get the line #, make it into a batch file, and then stuff the
'         keyboard buffer with the batch file's name so that when ERFIND is
'         done, the batch file starts automatically !!

'     USAGE: START WITH A BATCH FILE LIKE  'qp.bat'. THIS CALLS FIRST THE
'            COMPILER, THEN IF ERRLEVEL > 0 ERFIND IS CALLED. THEN THE NEW
'            BATCH FILE, CREATED ON THE FLY, STARTS THE PROCESS ALL OVER AGAIN.

                            $OPTION CNTLBREAK ON
 DEFINT A-Z

''' dbg = -1 '                                if true, 'dbg' creates an output
'                                             file to help sort out the results.
 IF dbg THEN
   Debug = FREEFILE
   OPEN "READSCRN.DBG" FOR APPEND AS #Debug
   PRINT #Debug, "READSCRN -- "; TIME$; "  "; DATE$
   PRINT #Debug, "  COMMAND$ = <"; COMMAND$; ">"
 END IF

 DEFINT A-Z
 DIM STATIC DispLine$ (25)
 RD$ = ENVIRON$ ("RD") + ":" '              My environment contains the RamDisk
 '                                          designator, eg SET RD=D.

 IF dbg THEN
   PRINT #Debug, "  RD$ = "; RD$
 END IF

 '                                                        read the screen
 FOR L = 1 TO 25 '                                        into a string array
   DispLine$ (L) = SCRNLINE$ (L)
 NEXT

 LOCATE CSRLIN + 2, 1
 '                                                   find the last nonblank line
 FOR L = 25 TO 1 STEP -1 '                           (starting from the bottom)
  IF RTRIM$ (DispLine$ (L)) <> "" THEN
    A$ = DispLine$ (L)
    EXIT FOR
  END IF
 NEXT

'                                               if it doesn't say 'Error' or
'                                               'Target', check the next line up
'                                               (since a long error-description
'                                               may have caused the message to
'                                               wrap to a second line ...)

 IF INSTR (A$, "): Error ") + INSTR (A$, "): Target ")  = 0 THEN
   DECR L
   A$ = DispLine$ (L)
 END IF

 IF dbg THEN
   PRINT #Debug, "  A$ = "; RTRIM$ (A$)
 END IF

 IF INSTR (A$, "): Error ") + INSTR (A$, "): Target ")  = 0 THEN
   PLAY "O4 C32 P16 O0 F64"
   PRINT "NO ERROR FOUND. EXITING TO SYSTEM."
   IF dbg THEN
     PRINT #Debug, "          NO ERROR FOUND. EXITING TO SYSTEM."
     PRINT #Debug, ""
   END IF
   END 1
 END IF

'                            check whether we're dealing with the output of
'                            a 'PBC /REnnnn' command ... if so the screen reads
'                            "Target address found" rather than "Error". (This
'                            means a run-time error; it won't happen unless your
'                            main program has an error handler that makes it
'                            happen -- e.g. the upcoming Spring '91 revision of
'                            APLIB, the All-Purpose PowerBASIC Lirary.)
'

 UsingPBCREOutPut = (INSTR (A$, "Target") > 0)

 DO WHILE INSTR (A$, "\") '                           parse off the path string
   A$ = MID$ (A$, INSTR (A$,"\")+1)
 LOOP

 E$ = MID$ (A$, INSTR(A$, "Error") + 6) '                 get the error number
 ECode = VAL (E$)

 FileName$ = EXTRACT$ (A$, "(") '                             get the file name
 LineNum = VAL (EXTRACT$ (MID$ (A$, LEN(FileName$)+2), ")")) '    & line number
 Extension$ = MID$ (A$, INSTR (A$, ".") + 1, 3)
 FileName$ = EXTRACT$ (FileName$, ".") + "." + Extension$

 IF dbg THEN
   PRINT #Debug, "  ERROR "; ECode; " IN "; FileName$; " LINE "; LineNum
   PRINT #Debug, ""
 END IF

 IF NOT UsingPBCREOutPut THEN
   LOCATE 25,30: PRINT "PRESS  A KEY TO RETURN TO EDITOR ... ";
   DO: LOOP UNTIL INKEY$ <> ""
 END IF
 LOCATE 25,1: PRINT SPACE$ (80);
 LOCATE 25,1

 IF RD$ = ":" THEN
   CLS
   LOCATE 5, 1
   PRINT "         ====================================================="
   PRINT "         The drive letter for saving temporary files was not
   PRINT "         found in the DOS environment string. You can put it
   PRINT "         there later by typing 'SET RD=D' or E or whatever the
   PRINT "         drive letter of your RAM-Disk is. If you don't have a 
   PRINT "         RAM-Disk, a regular disk drive may be used instead; 
   PRINT "         you will want to delete the temporary .BAT files 
   PRINT "         later. For now, enter the drive letter to use.
   PRINT "               RAM DISK DRIVE IS: ";
   L = CSRLIN: C = POS
   PRINT "         ====================================================="
   LOCATE L,C: INPUT C$
   LOCATE L+1, 79: PRINT: PRINT
   C$ = UCASE$ (LEFT$ (C$, 1))
   IF C$ < "A" OR C$ > "Z" THEN
     BEEP: PRINT "ERROR!": END 1
   ELSE
     RD$ = C$ + ":"
   END IF
 END IF

 IF DIR$ (RD$ + "GO2ERR.&BA") <> "" THEN KILL RD$ + "GO2ERR.&BA"
 IF DIR$ (RD$ + "GO2ERR.BAT") <> "" THEN
   NAME RD$ + "GO2ERR.BAT" AS RD$ + "GO2ERR.&BA"
 END IF
 OPEN RD$ + "GO2ERR.BAT" FOR OUTPUT AS 1 '        create output batch-file
 A$ = "@echo off"
 PRINT #1, A$
 A$ = "Q " + FileName$ + " /n" + LTRIM$ (STR$ (LineNum))
 PRINT #1, A$
 A$ ="check keyboard"
 PRINT #1, A$
 A$ ="if errorlevel 1 quit"
 PRINT #1, A$
 IF DIR$ (RD$ + "colorcls.com") <> "" THEN '       My EGA machine has PC 
   A$ = RD$ + "colorcls 4E" '                      Magazine's COLORCLS.COM
 ELSE '                                            stored on the ramdisk
   A$ ="cls"
 END IF
 PRINT #1, A$

 IF COMMAND$ = "" THEN
   A$ = "pbc " + FileName$
 ELSE
   A$ ="pbc " + COMMAND$
 END IF
 PRINT #1, A$

 A$ ="if not errorlevel 1 goto OK"
 PRINT #1, A$
 A$ ="erfind " + COMMAND$
 PRINT #1, A$
 A$ ="quit"  '
 PRINT #1, A$
 A$ ="goto end"
 PRINT #1, A$
 A$ =":OK"
 PRINT #1, A$
 A$ = COMMAND$
 PRINT #1, A$
 A$ =":end"
 PRINT #1, A$

 CLOSE
 CALL BufferStuffer (RD$ + "GO2ERR" + CHR$(13))
 END

 FUNCTION SCRNLINE$ (L)
   LOCAL Ct
   LOCAL A$
   A$ = ""
   FOR Ct = 1 TO 80
     A$ = A$ + CHR$ (SCREEN (L, Ct))
   NEXT
   SCRNLINE$ = A$
   END FUNCTION

  SUB BufferStuffer (M$)
  IF LEN (M$) > 15 THEN PLAY "O2 E32 P8 O1 C4": M$ = "COMMAND"+CHR$(255)+"2 LONG"
  L = LEN (M$)
  DEF SEG = 0
  POKE 1050, 30
  POKE 1052, 30 + 2 * L
  FOR I = 1 TO L
    POKE 1052 + 2*I, ASCII (MID$ (M$,I,1))
  NEXT

  END SUB

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3007

     Volume in drive A has no label
     Directory of A:\

    2START   DOC      1988   4-22-92   9:24a
    APLIB    EXE    103749   4-30-92  12:57p
    APMENU   EXE     52772   3-03-92   6:47a
    DEMOS    EXE    180633   5-02-92   7:46a
    ERFIND   ZIP      5829   5-02-92   8:11a
    FILES-AP LST      1111   5-02-92   8:15a
    GO       BAT        33   4-22-92   9:24a
    FILE3007 TXT      1703   5-07-92  10:43a
            8 file(s)     347818 bytes
                           10240 bytes free
