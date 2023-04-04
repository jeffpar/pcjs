---
layout: page
title: "PC-SIG Library Disk #2092"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2092/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2092"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RBBS-PC 5 OF 5 (212,334,621,622)"

    The RBBS is the bulletin board system of choice for many IBM PC
    bulletin boards. It's a large system on four disks and supports the
    PC-SIG LIBRARY ON CD ROM.
    
    RBBS-PC's internal structure is modularized and structured. The
    program includes a File Management System for directories, additional
    file exchange protocols, support for managing subscriptions,
    configurable command letters, multiple uploads on a single command
    line, new A)nswer and V)erbose ARC list commands, and
    context-sensitive help. It also can run as a local application on a
    network, use any field or define a new field to identify callers, and
    individualize callers having the same ID. The source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MAKEFIDX.BAS

```bas
DECLARE SUB TRIM (TRIM.PARM$)
DECLARE SUB BRKFNAME (FILENAME$, DRVPATH$, PREFIX$, EXTENSION$, FOR.JOINING%)
DECLARE SUB TRIMTRAIL (TRIM.PARM$, TRIM.THIS$)
DECLARE SUB FINDLAST (LOOK.IN$, LOOK.FOR$, WHERE.FOUND%, NUM.FINDS%)
DEFINT A-Z
DIM FileSpec$(255)
DIM FileDir$(255)
DIM LocationIndex$(999)
TRUE = -1
FALSE = 0
WriteMode$ = "Replace"
NameFile$ = "FIDX.DEF"
LocationFile$ = "LIDX.DEF"
SHARING = FALSE
NumLocations = 0
NumFileSpecs = 0
NumFileDirs = 0
ConfigFile$ = "MAKEFIDX.CFG"
PassedArguments$ = COMMAND$
PassedArguments$ = UCASE$(PassedArguments$) 
X = INSTR(PassedArguments$,"/B")
RunBatch = (X > 0)
IF RunBatch THEN 
   PassedArguments$ = LEFT$(PassedArguments$, X-1) + RIGHT$(PassedArguments$,Len(PassedArguments$)-X-1)
END IF
IF PassedArguments$ <> "" THEN
   ConfigFile$ = PassedArguments$
END IF

ON ERROR GOTO 40000
IF SHARING THEN
   OPEN ConfigFile$ FOR INPUT SHARED AS #1
ELSE
   OPEN ConfigFile$ FOR INPUT AS #1
END IF
ON ERROR GOTO 0
WHILE NOT EOF(1)
   LINE INPUT #1, A$
   X$ = LEFT$(A$, 1)
   IF X$ <> "" AND X$ <> "*" THEN
      A$ = UCASE$(A$) 
      IF LEFT$(A$,11) = "/WRITEMODE=" THEN
         WriteMode$ = MID$(A$,12)
         CALL TRIM (WriteMode$)
      END IF
      IF LEFT$(A$, 10) = "/NAMEFILE=" THEN
         NameFile$ = MID$(A$, 11)
         CALL TRIM(NameFile$)
      END IF
      IF LEFT$(A$, 14) = "/LOCATIONFILE=" THEN
         LocationFile$ = MID$(A$, 15)
         CALL TRIM(LocationFile$)
      END IF
      IF LEFT$(A$, 10) = "/FILESPEC=" THEN
         X$ = MID$(A$, 11)
         CALL TRIM(X$)
         NumFileSpecs = NumFileSpecs + 1
         FileSpec$(NumFileSpecs) = X$
      END IF
      IF LEFT$(A$, 9) = "/FILEDIR=" THEN
         X$ = MID$(A$, 10)
         CALL TRIM(X$)
         NumFileDirs = NumFileDirs + 1
         FileDir$(NumFileDirs) = X$
      END IF
   END IF
WEND
CLOSE 1

Replacing = (LEFT$(WriteMode$, 1) = "R")

PRINT "MAKEFIDX version 1.0 copyright (c) 1989 by Ken Goosens"
PRINT "an RBBS utility to make files for fast directory searches"
PRINT
PRINT "On this run"
IF Replacing THEN
   PRINT "Overwriting data files"
ELSE
   PRINT "Adding to data files"
END IF
PRINT "Configuration file used ....... ";ConfigFile$
PRINT "Name of list of files ......... "; NameFile$
PRINT "Name of list of locations ..... "; LocationFile$
PRINT "# of DOS directories to process"; NumFileSpecs
PRINT "# of file lists to process ...."; NumFileDirs
PRINT
IF NOT RunBatch THEN
   INPUT "A to abort, anything else runs"; ANS$
   ANS$ = UCASE$(ANS$)
   IF ANS$ = "A" THEN END
END IF

'NumFileSpecs = 2
'FileSpec$(1) = "C:\TEMP\"
'FileSpec$(2) = "C:\UTILS\"
IF Replacing THEN
   ON ERROR GOTO 40100
   KILL NameFile$
   KILL LocationFile$
   ON ERROR GOTO 0
ELSE
   IF SHARING THEN
      OPEN LocationFile$ FOR INPUT SHARED AS #1
   ELSE
      OPEN LocationFile$ FOR INPUT AS #1
   END IF
   PRINT "Loading existing locations..."
   WHILE NOT EOF(1)
      LINE INPUT #1, A$
      CALL TRIM(A$)
      NumLocations = NumLocations + 1
      LocationIndex$(NumLocations) = A$
   WEND
   CLOSE 1
   PRINT STR$(NumLocations); " locations loaded"
END IF

IF SHARING THEN
   OPEN NameFile$ FOR RANDOM SHARED AS #2 LEN = 18
   OPEN LocationFile$ FOR RANDOM SHARED AS #3 LEN = 66
ELSE
   OPEN NameFile$ FOR RANDOM AS #2 LEN = 18
   OPEN LocationFile$ FOR RANDOM AS #3 LEN = 66
END IF
FIELD 2, 18 AS NameRec$
FIELD 3, 66 AS LocationRec$
MID$(NameRec$, 17, 2) = CHR$(13) + CHR$(10)
MID$(LocationRec$, 64, 3) = "." + CHR$(13) + CHR$(10)
NumRecsNameFile = LOF(2) / 18
NumRecsLocationFile = LOF(3) / 66

InFile$ = "IDX.$$$"
FOR ix = 1 TO NumFileSpecs
   SHELL "DIR " + FileSpec$(ix) + " > IDX.$$$"
   PRINT "Processing filespec "; FileSpec$(ix)
   GOSUB ProcessFile
NEXT

FOR ix = 1 TO NumFileDirs
   InFile$ = FileDir$(ix)
   PRINT "Processing file list "; FileDir$(ix)
   GOSUB ProcessFile
NEXT

END

ProcessFile:

   IF SHARING THEN
      OPEN InFile$ FOR INPUT SHARED AS #1
   ELSE
      OPEN InFile$ FOR INPUT AS #1
   END IF
   WHILE NOT EOF(1)
      LINE INPUT #1, A$
      X = INSTR(A$, "Directory of ")
      IF X > 0 THEN
         DrivePath$ = MID$(A$, X + 12)
         CALL TRIM(DrivePath$)
         IF INSTR(DrivePath$, "\") > 0 THEN
            IF RIGHT$(DrivePath$, 1) <> "\" THEN
               DrivePath$ = DrivePath$ + "\"
            END IF
         END IF
         CurrentDrivePath$ = DrivePath$
         GOSUB SetLocIndex
         GOTO DoneEntry
      END IF
      IF INSTR(" .", LEFT$(A$, 1)) > 0 THEN
         GOTO DoneEntry
      END IF
      X = INSTR(A$, " ")
      IF X < 13 THEN
         FILENAME$ = LEFT$(A$, 12)
         IF INSTR(FILENAME$, ".") = 0 AND MID$(FILENAME$, 9, 1) = " " AND MID$(FILENAME$, 10, 1) <> " " THEN
            MID$(FILENAME$, X) = "." + MID$(FILENAME$, 10) + SPACE$(9 - X)
         ELSE
            FILENAME$ = LEFT$(A$, X - 1)
         END IF
         GOSUB AddFileName
         GOTO DoneEntry
      END IF
      FILENAME$ = LEFT$(A$, X - 1)
      GOSUB AddFileName
DoneEntry:
   WEND
   CLOSE 1
RETURN

SetPathName:

   CALL BRKFNAME(FILENAME$, FileDrivePath$, FilePrefix$, FileExt$, TRUE)
   IF FileDrivePath$ <> "" THEN
      CurrentDrivePath$ = FileDrivePath$
      GOSUB SetLocIndex
      FILENAME$ = FilePrefix$ + FileExt$
   ELSE
      CurrentDrivePath$ = DrivePath$
   END IF

RETURN

AddFileName:

   GOSUB SetPathName
   MID$(NameRec$, 1, 16) = SPACE$(16)
   MID$(NameRec$, 1, 12) = FILENAME$
   X$ = MID$(STR$(Location), 2)
   X$ = SPACE$(4 - LEN(X$)) + X$
   MID$(NameRec$, 13, 4) = X$
   NumRecsNameFile = NumRecsNameFile + 1
   PUT 2, NumRecsNameFile

RETURN

SetLocIndex:

   IF CurrentDrivePath$ = LocationIndex$(Location) THEN RETURN
   LocationIndex$(NumRecsLocationFile + 1) = CurrentDrivePath$
   Location = 1
   WHILE CurrentDrivePath$ <> LocationIndex$(Location)
      Location = Location + 1
   WEND
   IF Location > NumRecsLocationFile THEN
      NumRecsLocationFile = Location
      MID$(LocationRec$, 1, 63) = SPACE$(63)
      MID$(LocationRec$, 1, 63) = CurrentDrivePath$
      PUT 3, NumRecsLocationFile
   END IF

RETURN

40000 PRINT "Missing configuration file "; ConfigFile$
      END

40100 RESUME NEXT

      SUB BRKFNAME (FILENAME$, DRVPATH$, PREFIX$, EXTENSION$, FOR.JOINING) STATIC
      FILENAME$ = UCASE$(FILENAME$)
      DRVPATH$ = ""
      PREFIX$ = ""
      EXTENSION$ = ""
      CALL TRIMTRAIL(FILENAME$, "\")
      L = LEN(FILENAME$)
      IF L < 1 THEN EXIT SUB
      CALL FINDLAST(FILENAME$, "\", X, Y)
      IF X < 1 THEN
         IF MID$(FILENAME$, 2, 1) = ":" THEN
            DRVPATH$ = LEFT$(FILENAME$, 1)
            S = 3
         ELSE
            S = 1
         END IF
      ELSE
         DRVPATH$ = LEFT$(FILENAME$, X - 1)
         S = X + 1
         IF Y = 1 THEN
            DRVPATH$ =  DRVPATH$ + "\"
         END IF
      END IF
      X = INSTR(FILENAME$ + ".", ".")
      IF X < L THEN
         EXTENSION$ = MID$(FILENAME$, X + 1, 3)
      END IF
      IF S <= L THEN
         IF X >= S THEN
            PREFIX$ = MID$(FILENAME$, S, X - S)
         END IF
      END IF
      IF NOT FOR.JOINING THEN EXIT SUB
      IF LEN(DRVPATH$) = 1 THEN
         IF DRVPATH$ <> "\" THEN
            DRVPATH$ = DRVPATH$ + ":"
         END IF
      END IF
      IF INSTR(DRVPATH$, "\") > 0 AND RIGHT$(DRVPATH$, 1) <> "\" THEN DRVPATH$ = DRVPATH$ + "\"
      IF LEN(EXTENSION$) > 0 THEN EXTENSION$ = "." + EXTENSION$
      END SUB

      SUB FINDLAST (LOOK.IN$, LOOK.FOR$, WHERE.FOUND, NUM.FINDS) STATIC
      WHERE.FOUND = INSTR(LOOK.IN$, LOOK.FOR$)
      NUM.FINDS = -(WHERE.FOUND > 0)
      NEXT.FOUND = INSTR(WHERE.FOUND + 1, LOOK.IN$, LOOK.FOR$)
      WHILE NEXT.FOUND > 0
         NUM.FINDS = NUM.FINDS + 1
         WHERE.FOUND = NEXT.FOUND
         NEXT.FOUND = INSTR(WHERE.FOUND + 1, LOOK.IN$, LOOK.FOR$)
      WEND
      END SUB

      SUB TRIM (TRIM.PARM$) STATIC
      L = INSTR(TRIM.PARM$, " ")
      IF L < 1 THEN EXIT SUB
      IF L = 1 THEN
         WHILE LEFT$(TRIM.PARM$, 1) = " "
            TRIM.PARM$ = RIGHT$(TRIM.PARM$, LEN(TRIM.PARM$) - 1)
         WEND
      END IF
      CALL TRIMTRAIL(TRIM.PARM$, " ")
      END SUB

      SUB TRIMTRAIL (TRIM.PARM$, TRIM.THIS$) STATIC
      IF RIGHT$(TRIM.PARM$, 1) <> TRIM.THIS$ THEN EXIT SUB                                                             ' KG081003
      J = LEN(TRIM.PARM$) - 1                                        ' KG081003
108   IF J > 0 THEN
         IF MID$(TRIM.PARM$, J, 1) = TRIM.THIS$ THEN
            J = J - 1
            GOTO 108
         END IF
      END IF
      TRIM.PARM$ = LEFT$(TRIM.PARM$, J)                              ' KG081003
      END SUB

```

## MAKETABS.BAS

```bas
DEFINT A-Z
PassedArguments$ = COMMAND$ + " "
X = INSTR(" H h ? ", PassedArguments$)
IF X > 0 THEN
   CLS
   PRINT "MAKETABS version 1.0 Copyright (c) 1989 by Ken Goosens"
   PRINT "an RBBS utility to make an index tab for sorted file list"
   PRINT
   PRINT "Format:      MAKETABS <options>    where options are:"
   PRINT
   PRINT "/IN=<input file>                       Default:  FIDX.DEF"
   PRINT "/OUT=<output file>                     Default:  LIDX.DEF"
   PRINT "/B  (run batch)                        Default:  (no)"
   PRINT "/INDEXPOS=<column position to index>   Default:  1"
   IF X > 1 THEN END
END IF

' Initialize

InFile$ = "FIDX.DEF"
OutFile$ = "FIDXT.DEF"
IndexPos = 1
TRUE = -1
FALSE = 0
RunBatch = FALSE

' Process Command Line

PassedArguments$ = UCASE$(PassedArguments$)
X = INSTR(PassedArguments$, "/INDEXPOS=")
IF X > 0 THEN
   IndexPos = VAL(MID$(PassedArguments$, X + 10))
END IF
X = INSTR(PassedArguments$, "/IN=")
IF X > 0 THEN
   Y = INSTR(X, PassedArguments$, " ")
   InFile$ = MID$(PassedArguments$, X + 4, Y - X - 4)
END IF
X = INSTR(PassedArguments$, "/OUT=")
IF X > 0 THEN
   Y = INSTR(X, PassedArguments$, " ")
   OutFile$ = MID$(PassedArguments$, X + 5, Y - X - 5)
END IF
RunBatch = (INSTR(PassedArguments$, "/B ") > 0)

PRINT
PRINT "File to Create Tabs for .. "; InFile$
PRINT "TAB file to make ......... "; OutFile$
PRINT "Position to index ........ "; IndexPos
PRINT
IF NOT RunBatch THEN
   INPUT "A to abort, anything else runs"; ANS$
   ANS$ = UCASE$(ANS$)
   IF ANS$ = "A" THEN END
END IF

DIM StartPos(36)
CharsCounted$ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
OPEN InFile$ FOR INPUT AS #1
FOR i = 1 TO 36
   StartPos(i) = 0
NEXT
LinesRead = 0
PRINT "Processing file "; InFile$; " ";
ColPos = POS(0)
WHILE NOT EOF(1)
   LINE INPUT #1, A$
   LinesRead = LinesRead + 1
   LOCATE , ColPos
   PRINT LinesRead;
   IndexChar$ = MID$(A$, IndexPos, 1)
   Position = INSTR(CharsCounted$, IndexChar$)
   IF Position > 0 THEN
      IF StartPos(Position) = 0 THEN
         StartPos(Position) = LinesRead
      END IF
   END IF
WEND
CLOSE 1

OPEN OutFile$ FOR RANDOM AS #1 LEN = 72
FIELD #1, 72 AS OutRec$
PrevValue = 0
' put 1 in for leading 0's
i = 1
WHILE i < 37 AND StartPos (i) = 0
   StartPos (i) = 1
   i = i + 1
WEND
' find last non-zero value
i = 36
WHILE i > 0 AND StartPos(i) = 0
   i = i - 1
WEND
StartPos(36) = StartPos(i)
' propagate high values to left over 0's
FOR i = 36 TO 1 STEP -1
   IF StartPos(i) = 0 THEN
      CurrentValue = 1
      IF PrevValue > CurrentValue THEN
         CurrentValue = PrevValue
      END IF
   ELSE
      CurrentValue = StartPos(i)
   END IF
   StartPos(i) = CurrentValue
   PrevValue = CurrentValue
NEXT
FOR i = 1 TO 36
   MID$(OutRec$, 1 + 2 * (i - 1), 2) = MKI$(StartPos(i))
NEXT
PUT 1, 1
CLOSE 1
PRINT
PRINT "Created TAB file "; OutFile$
'FOR i = 1 TO 36
'   PRINT MID$(CharsCounted$, i, 1); StartPos(i); ". ";
'NEXT
END

```

## RECONFIG.BAS

```bas
   DECLARE FUNCTION StrTok$(Source$,Delim$)
   DECLARE SUB box (ybox%, xbox%, boxrows%, boxcols%, style%)   'draw a box
   DECLARE SUB Line17 (HelpText$)
   DEFINT A-Z
   CLEAR
   CLS
   DIM FILES.FUNCTION(8)                         ' file menu security
   DIM GLOBAL.FUNCTION(4)                        ' Global commands security
   DIM HELP$(9)                                  ' Help file names
   DIM LIBRARY.FUNCTION(7)                       ' Library commands security
   DIM MAIN.FUNCTION(18)                         ' Main menu security
   DIM MENU$(6)                                  ' Menu file names
   DIM SYSOP.FUNCTION(7)                         ' Sysop menu security
   DIM DNLD$(99)                                 ' Download Sub-Dirs
   DIM UTILITY.FUNCTION(12)                      ' Utility menu security
   CONST FALSE = 0
   CONST TRUE = NOT FALSE
   KEY OFF
   LOCATE ,,0
   Parms = FALSE
   Ver$ = " 14.1D 15.1A 15.1B 15.1C 16.1A 17.1A 17.1B 17.1C 17.1D 17.2A 17.2B "

   IF COMMAND$ = "" THEN _
      GOTO CopyRight
   Parms = 1
   Delim$ = " "
   InputFileName$ = STRTOK$(COMMAND$,Delim$)
   IF InputFileName$ = "" THEN _
      GOTO CopyRight
   InputVersion$ = STRTOK$("",Delim$)
   IF LEN(InputVersion$) < 4 THEN GOTO CopyRight
   InputVersion$ = UCASE$ (InputVersion$)
   Version = INSTR(Ver$, " " + InputVersion$ + " ")
   IF Version = 0 THEN GOTO CopyRight
   Version = INT((Version-2)/6)+1
   OutputFileName$ = STRTOK$("",Delim$)
   IF OutputFileName$ = "" THEN _
      GOTO CopyRight
   Parms = TRUE
'
' ╔══════════════════════╗
' ║  COPYRIGHT GOES HERE ║
' ╚══════════════════════╝
'
CopyRight:
   CALL box(1,5,18,69,2)
   FOR I = 2 to 15
      LOCATE I,7
      READ Temp$
      PRINT Temp$
      NEXT
   IF Parms = FALSE THEN CALL Line17("Press any key to continue")
   IF Parms = 1 THEN
      Parms = FALSE
      CALL Line17("ERROR IN INPUT PARAMETERS -  Press any key to continue")
   END IF
120 REM
   IF Parms = FALSE THEN
      A$ = INKEY$
      IF A$="" GOTO 120 ELSE GOTO 130
   END IF
   TEMP = (VAL(RIGHT$(TIME$,2))+4) MOD 60
   WHILE VAL(RIGHT$(TIME$,2)) <> TEMP
   WEND
130 REM
   LOCATE 1,1
   FOR I = 3 to 17
      LOCATE I, 6
      PRINT SPACE$(67);
   NEXT I
   LOCATE 4,12
   PRINT "Name of INPUT FILE:"
   LOCATE 5,9
   PRINT "Version of INPUT FILE:"
   LOCATE 6,11
   PRINT "Name of OUTPUT file:"
   IF Parms = FALSE THEN GOTO 150
   LOCATE 4,32
   PRINT InputFileName$
   LOCATE 5,32
   PRINT InputVersion$
   LOCATE 6,32
   PRINT OutputFileName$
   GOTO 180
'
' ╔═════════════════════════════╗
' ║ GET THE INPUT FROM THE USER ║
' ╚═════════════════════════════╝
'
150 CALL Line17("Enter the name of your existing RBBS-PC CONFIGURATION FILE")
   LOCATE 4,32
   PRINT SPACE$(40);
   LOCATE 4,31
   INPUT " ", InputFileName$
   IF LEN(InputFileName$) < 1 THEN
      PRINT CHR$(7);
      GOTO 150
   END IF
160 CALL Line17("Valid versions: 14.1D, 15.1A/B/C, 16.1A, 17.1A/B/C/D 17.2A/B")
   LOCATE 5,32
   PRINT SPACE$(40);
   LOCATE 5,31
   INPUT " ", InputVersion$
   IF LEN(InputVersion$) <> 5 THEN
      PRINT CHR$(7);
      GOTO 160
   END IF
   InputVersion$ = UCASE$ (InputVersion$)
   Version = INSTR(Ver$, InputVersion$)
   IF Version = 0 THEN
      PRINT CHR$(7);
      GOTO 160
   END IF
   Version = INT((Version-1)/6)+1
170 CALL Line17("Enter the name of the output RBBS-PC version 17.3 FILE")
   LOCATE 6,32
   PRINT SPACE$(40);
   LOCATE 6,31
   INPUT " ", OutputFileName$
   IF LEN(OutputFileName$) < 1 THEN
      PRINT CHR$(7);
      GOTO 170
   END IF
   CALL Line17("")
180   LOCATE 8,9
   INPUT "Is everything correct (Y or N)";QUERY$
   IF UCASE$ (LEFT$(Query$,1)) <> "Y" THEN GOTO 150
   ON ERROR GOTO ErrorHandler
1000  OPEN "I",#1,InputFileName$
'
' ╔════════════════════════════════════════════════════════════╗
' ║ READ IN THE PARAMETERS FROM AN EXISTING "RBBS-PC.DEF" FILE ║
' ╚════════════════════════════════════════════════════════════╝
'
1010  LOCATE 10,9
      PRINT "READING DATA....";
'
' ╔═════════════════╗
' ║ READ INPUT FILE ║
' ╚═════════════════╝
'
ReadDef:
   IF Version >= 6 THEN INPUT #1,CONFIG.FILE.VER$
   INPUT #1,DOWNLOAD.DRIVES$, _
            SYSOP.PASSWORD.1$, _
            SYSOP.PASSWORD.2$, _
            SYSOP.FIRST.NAME$, _
            SYSOP.LAST.NAME$, _
            REQUIRED.RINGS, _
            START.OFFICE.HOURS, _
            END.OFFICE.HOURS, _
            MINUTES.PER.SESSION!, _
            MAX.ALLOWED.MSGS.FRM.DEF, _
            ACT.MNTHS.B4.DELETING, _
            UPLOAD.DIRECTORY$, _
            EXPERT.USER, _
            ACTIVE.BULLETINS, _
            PROMPT.BELL, _
            PCJR, _
            MENUS.CAN.PAUSE, _
            MENU$(1), _
            MENU$(2), _
            MENU$(3), _
            MENU$(4), _
            MENU$(5)

   IF Version >= 4 THEN INPUT #1,MENU$(6)

   INPUT #1,CONFERENCE.MENU$, _
            CONFERENCE.VIEWER.SEC.LVL, _
            WELCOME.INTERRUPTABLE, _
            REMIND.FILE.TRANSFERS, _
            PAGE.LENGTH, _
            MAX.MESSAGE.LINES, _
            DOORS.AVAILABLE, _
            MO$

   INPUT #1,MAIN.MESSAGE.FILE$, _
            MAIN.MESSAGE.BACKUP$, _
            CALLERS.FILE$, _
            COMMENTS.FILE$, _
            MAIN.USER.FILE$, _
            WELCOME.FILE$, _
            NEWUSER.FILE$, _
            DIRECTORY.EXTENTION$, _
            COM.PORT$, _
            BULLETINS.OPTIONAL, _
            USER.INIT.COMMAND$, _
            RTS$, _
            DOS.VERSION, _
            FG, _
            BG, _
            BORDER, _
            RBBS.BAT$, _
            RCTTY.BAT$

   INPUT #1,OMIT.MAIN.DIRECTORY$, _
            FIRST.NAME.PROMPT$

   IF Version = 1 THEN
      INPUT #1,HELP$(1), _
               HELP$(2), _
               HELP$(3), _
               HELP$(4), _
               HELP$(5), _
               HELP$(6), _
               HELP$(7), _
               HELP$(8), _
               HELP$(9)
   ELSE
      INPUT #1,HELP$(3), _
               HELP$(4), _
               HELP$(7), _
               HELP$(9)
   END IF

   INPUT #1,BULLETIN.MENU$, _
            BULLETIN.PREFIX$, _
            DRIVE.FOR.BULLETINS$, _
            MESSAGE.REMINDER, _
            REQUIRE.NON.ASCII, _
            ASK.EXTENDED.DESC, _
            MAXIMUM.NUMBER.OF.NODES, _
            NETWORK.TYPE, _
            RECYCLE.TO.DOS, _
            MAX.USR.FILE.SIZE.FRM.DEF, _
            MAX.MSG.FILE.SIZE.FRM.DEF!, _
            TRASHCAN.FILE$
   INPUT #1,MINIMUM.LOGON.SECURITY, _
            DEFAULT.SECURITY.LEVEL, _
            SYSOP.SECURITY.LEVEL, _
            FILESEC.FILE$, _
            SYSOP.MENU.SECURITY.LEVEL, _
            CONFMAIL.LIST$, _
            MAXIMUM.VIOLATIONS, _
            SYSOP.FUNCTION(1), _
            SYSOP.FUNCTION(2), _
            SYSOP.FUNCTION(3), _
            SYSOP.FUNCTION(4), _
            SYSOP.FUNCTION(5), _
            SYSOP.FUNCTION(6), _
            SYSOP.FUNCTION(7), _
            PASSWORD.FILE$, _
            MAXIMUM.PASSWORD.CHANGES, _
            MINIMUM.SECURITY.FOR.TEMP.PASSWORD, _
            OVERWRITE.SECURITY.LEVEL, _
            DOORS.TERMINAL.TYPE, _
            MAX.PER.DAY
   IF Version = 1 THEN GOTO READ.DEF.141D.ONLY

   INPUT #1,MAIN.FUNCTION(1), _
            MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17)

   IF Version >= 4 THEN INPUT #1,MAIN.FUNCTION(18)

   IF Version < 5 THEN
      INPUT #1,DUMMY$
   ELSE
      INPUT #1,MIN.NEWCALLER.BAUD
   END IF

   INPUT #1,WAIT.BEFORE.DISCONNECT, _
            FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4)
   IF Version >= 5 THEN INPUT #1,FILES.FUNCTION(5)

   INPUT #1,FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            FILES.FUNCTION(8), _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(2)
   IF Version >= 5 THEN INPUT #1,UTILITY.FUNCTION(3)

   INPUT #1,UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            UTILITY.FUNCTION(6), _
            UTILITY.FUNCTION(7), _
            UTILITY.FUNCTION(8), _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(12), _
            GLOBAL.FUNCTION(1), _
            GLOBAL.FUNCTION(2), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(4), _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$
   INPUT #1,TURN.PRINTER.OFF, _
            DIRECTORY.PATH$, _
            MIN.SEC.TO.VIEW, _
            LIMIT.SEARCH.TO.FMS, _
            DEFAULT.CATEGORY.CODE$, _
            DIR.CATEGORY.FILE$, _
            NEW.FILES.CHECK, _
            MAX.DESC.LEN, _
            SHOW.SECTION, _
            COMMANDS.IN.PROMPT, _
            NEWUSER.SETS.DEFAULTS, _
            HELP.PATH$, _
            HELP.EXTENSION$, _
            MAIN.COMMANDS$, _
            FILE.COMMANDS$, _
            UTIL.COMMANDS$, _
            GLOBAL.COMMANDS$, _
            SYSOP.COMMANDS$
   IF Version >= 4 THEN
      INPUT #1,RECYCLE.WAIT, _
            LIBRARY.FUNCTION(1), _
            LIBRARY.FUNCTION(2), _
            LIBRARY.FUNCTION(3), _
            LIBRARY.FUNCTION(4), _
            LIBRARY.FUNCTION(5), _
            LIBRARY.FUNCTION(6), _
            LIBRARY.FUNCTION(7), _
            LIBRARY.DRIVE$, _
            LIBRARY.DIRECTORY.PATH$, _
            LIBRARY.DIRECTORY.EXTENTION$, _
            LIBRARY.WORK.DISK.PATH$, _
            LIBRARY.MAX.DISK, _
            LIBRARY.MAX.DIRECTORY, _
            LIBRARY.MAX.SUBDIR, _
            LIBRARY.SUBDIR.PREFIX$, _
            LIBRARY.ARCHIVE.PATH$, _
            LIBRARY.ARCHIVE.PROGRAM$, _
            LIBRARY.COMMANDS$
   END IF

   INPUT #1,UPLOAD.PATH$, _
            FMS.DIRECTORY$, _
            ANS.MENU$,_
            REQUIRED.QUESTIONNAIRE$,_
            REMEMBER.NEW.USERS, _
            SURVIVE.NOUSER.ROOM, _
            PROMPT.HASH$, _
            START.HASH, _
            LEN.HASH, _
            PROMPT.INDIV$, _
            START.INDIV, _
            LEN.INDIV
   INPUT #1,BYPASS.MSGS, _
            MUSIC, _
            RESTRICT.BY.DATE, _
            DAYS.TO.WARN, _
            DAYS.IN.SUBSCRIPTION.PERIOD, _
            VOICE.TYPE, _                                            ' KG013101
            RESTRICT.VALID.CMDS, _
            NEW.USER.DEFAULT.MODE, _
            NEW.USER.LINE.FEEDS, _
            NEW.USER.NULLS, _                                        ' KG013101
            FAST.FILE.LIST$, _                                       ' KG013101
            FAST.FILE.LOCATOR$, _                                    ' KG013101
            MESSAGES.CAN.GROW, _                                     ' KG013101
            WRAP.CALLERS.FILE$, _
            REDIRECT.IO.METHOD, _
            AUTO.UPGRADE.SEC, _                                      ' KG013101
            HALT.ON.ERROR, _
            NEW.PUBLIC.MSGS.SECURITY, _
            NEW.PRIVATE.MSGS.SECURITY, _
            SECURITY.NEEDED.TO.CHANGE.MSGS, _
            SL.CATEGORIZE.UPLOADS, _
            BAUDOT, _
            TIME.TO.DROP.TO.DOS, _
            EXPIRED.SECURITY, _
            DTR.DROP.DELAY, _
            ASK.IDENTITY, _
            MAX.REG.SEC, _                                           ' KG013101
            BUFFER.SIZE, _
            MLCOM, _
            SHOOT.YOURSELF, _
            EXTENSION.LIST$, _
            NEW.USER.DEFAULT.PROTOCOL$, _
            NEW.USER.GRAPHICS$, _
            NET.MAIL$, _
            MASTER.DIRECTORY.NAME$, _
            PROTO.DEF$, _
            UPCAT.HELP$, _
            ALWAYS.STREW.TO$, _
            LAST.NAME.PROMPT$
   GOTO READ.DEF.ALL

READ.DEF.141D.ONLY:
   INPUT #1,MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(1), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            UTILITY.FUNCTION(6), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17), _
            GLOBAL.FUNCTION(4), _
            GLOBAL.FUNCTION(2), _
            DEFAULT.MACHINE.TYPE$, _
            WAIT.BEFORE.DISCONNECT

   INPUT #1,FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            DUMMY,             _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4), _
            DUMMY,             _
            FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            DUMMY,             _
            DUMMY,             _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            DUMMY,             _
            DUMMY,             _
            UTILITY.FUNCTION(7), _
            DUMMY,             _
            UTILITY.FUNCTION(8), _
            DUMMY,             _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(2), _
            UTILITY.FUNCTION(12), _
            DUMMY,             _
            DUMMY,             _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$

   INPUT #1,SYSOP.FUNCTION.KEY1$, _
            SYSOP.FUNCTION.KEY2$, _
            SYSOP.FUNCTION.KEY3$, _
            SYSOP.FUNCTION.KEY4$, _
            SYSOP.FUNCTION.KEY5$, _
            SYSOP.FUNCTION.KEY6$, _
            SYSOP.FUNCTION.KEY7$, _
            SYSOP.FUNCTION.KEY8$, _
            SYSOP.FUNCTION.KEY9$, _
            SYSOP.FUNCTION.KEY10$, _
            SYSOP.FUNCTION.KEY11$, _
            SYSOP.FUNCTION.KEY12$
READ.DEF.ALL:

   IF Version >= 5 THEN
   INPUT #1,PERSONAL.DRVPATH$, _
            PERSONAL.DIR$, _
            PERSONAL.BEGIN, _
            PERSONAL.LEN, _
            PERSONAL.PROTOCOL$, _
            PERSONAL.CONCAT, _
            PRIVATE.READ.SEC, _
            PUBLIC.READ.SEC, _
            SEC.CHANGE.MSG, _
            KEEP.INIT.BAUD, _
            MAIN.PUI$, _
            DEFAULT.ECHOER$, _
            HOST.ECHO.ON$, _
            HOST.ECHO.OFF$, _
            SWITCH.BACK, _
            DEFAULT.LINE.ACK$, _
            ALTDIR.EXTENSION$, _
            DIRECTORY.PREFIX$
   END IF

   INPUT #1,SEC.LVL.EXEMPT.FRM.PURGING, _
            MODEM.INIT.WAIT.TIME, _
            MODEM.COMMAND.DELAY.TIME, _
            TURBO.RBBS
   INPUT #1,DNLD.SUB, _
            WILL.SUBDIRS.B.USED, _
            UPLOAD.TO.SUBDIR, _
            DOWNLOAD.TO.SUBDIR, _
            UPLOAD.SUBDIR$

   IF Version < 5 THEN
   INPUT #1,RESTRICT.BAUD, _
            USE.COLOR
   ELSE
   INPUT #1,MIN.OLDCALLER.BAUD, _
            MAX.WORK.VAR                                             ' KG013101
   ENDIF

   INPUT #1,DISKFULL.GO.OFFLINE, _
            EXTENDED.LOGGING, _
            USER.RESET.COMMAND$, _
            USER.COUNT.RINGS.COMMAND$, _
            USER.ANSWER.COMMAND$, _
            USER.GO.OFFHOOK.COMMAND$, _
            DISK.FOR.DOS$, _
            DUMB.MODEM, _
            COMMENTS.AS.MESSAGES, _
            LSB, _
            MSB, _
            LINE.CONTROL.REGISTER, _
            MODEM.CONTROL.REGISTER, _
            LINE.STATUS.REGISTER, _
            MODEM.STATUS.REGISTER
   IF Version >= 5 THEN
   INPUT #1,KEEP.TIME.CREDITS, _
            XON.XOFF, _
            ALLOW.CALLER.TURBO, _
            USE.DEVICE.DRIVER$, _
            PRELOG$, _
            NEW.USER.QUESTIONNAIRE$, _
            EPILOG$, _
            REGISTRATION.PROGRAM$, _
            QUES.PATH$, _
            USER.LOCATION$, _
            USER.INITIALIZE.COMMAND$, _
            USER.FIRMWARE.CLEAR.CMND$, _
            USER.FIRMWARE.WRITE.CMND$, _
            ENFORCE.UPLOAD.DOWNLOAD.RATIOS, _
            SIZE.OF.STACK, _
            SECURITY.EXEMPT.FROM.EPILOG, _
            USE.BASIC.WRITES, _
            DOSANSI, _
            ESCAPE.INSECURE, _
            USE.DIR.ORDER, _
            ADD.DIR.SECURITY, _
            MAX.EXTENDED.LINES, _
            ORIG.COMMANDS$
   END IF

   IF Version >= 6 THEN
   INPUT #1,LOGON.MAIL.LEVEL$, _
               MACRO.DRVPATH$, _
               MACRO.EXTENSION$, _
               EMPHASIZE.ON.DEF$, _
               EMPHASIZE.OFF.DEF$, _
               FG.1.DEF$, _
               FG.2.DEF$, _
               FG.3.DEF$, _
               FG.4.DEF$, _
               SECVIO.HLP$, _
               FOSSIL, _
               MAX.CARRIER.WAIT, _
               CALLER.BKGRD, _
               SMART.TEXT, _
               TIME.LOCK, _
               WRITE.BUF.DEF, _
               SEC.KILL.ANY, _
               DOORS.DEF$, _
               SCREEN.OUT.MSG$, _
               AUTOPAGE.DEF$
   END IF
   IF DNLD.SUB < 1 OR DNLD.SUB > 99 THEN GOTO CLOSE.IN
   FOR I = 1 TO DNLD.SUB
       INPUT #1,DNLD$(I)
   NEXT
   GOTO CLOSE.IN

'
' ╔══════════════════╗
' ║ CLOSE INPUT FILE ║
' ╚══════════════════╝
'
CLOSE.IN:
      CLOSE #1
'
' ╔═════════════════════════════════════════════════╗
' ║ INITALIZE ALL VARIABLES THAT DON'T AREADY EXIST ║
' ╚═════════════════════════════════════════════════╝
'
1020  LOCATE 11,9
   PRINT "CONVERTING DATA...";
   IF INSTR(MAIN.MESSAGE.FILE$,":") THEN
      D$ = LEFT$(MAIN.MESSAGE.FILE$,INSTR(MAIN.MESSAGE.FILE$,":"))
   ELSE
      D$ = ""
   END IF

   ON Version GOTO 2000, 2100, 2200, 2300, 2400, 2500, 2500, 2500, 2500
   GOTO 2600
'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 14.1D ║
' ╚══════════════════════════════════╝
'
2000  FOR I = 1 TO 9
         IF INSTR(HELP$(I),":") THEN
            HELP$(I) = MID$(HELP$(I),INSTR(HELP$(I),":")+1)
         END IF
      NEXT
   ALWAYS.STREW.TO$           = ""
   ANS.MENU$                  = D$ + "MENUA"
   ASK.IDENTITY               = FALSE
   BAUDOT                     = 0
   BUFFER.SIZE                = 128
   BYPASS.MSGS                = FALSE                                ' KG013101
   COMMANDS.IN.PROMPT         = TRUE
   DEFAULT.CATEGORY.CODE$     = "UC "
   DAYS.IN.SUBSCRIPTION.PERIOD = 365
   DAYS.TO.WARN               = 60
   DIR.CATEGORY.FILE$         = D$ + "DIR.CAT"
   DIRECTORY.PATH$            = D$
   DTR.DROP.DELAY             = 3
   DUMMY$                     = " "
   EXPIRED.SECURITY           = DEFAULT.SECURITY.LEVEL
   FILE.COMMANDS$             = "DGLNPSUV"
   FILES.FUNCTION(8)          = FILES.FUNCTION(1)
   F7.MESSAGE$                = ""
   GLOBAL.COMMANDS$           = "H?QX"                               ' KG013101
   HELP.EXTENSION$            = "HLP"
   HELP.PATH$                 = D$
   LEN.HASH                   = 31
   LEN.INDIV                  = 0
   LIMIT.SEARCH.TO.FMS        = FALSE
   MAIN.COMMANDS$             = "ABCDEFIJKOPRSTUVW"
   MAIN.FUNCTION(1)           = DEFAULT.SECURITY.LEVEL
   MAIN.FUNCTION(18)          = 32767
   MASTER.DIRECTORY.NAME$     = ""
   MAX.DESC.LEN               = 40
   MIN.SEC.TO.VIEW            = DEFAULT.SECURITY.LEVEL
   MLCOM                      = FALSE
   MUSIC                      = FALSE
   NET.MAIL$                  = ""
   NEW.FILES.CHECK            = FALSE
   NEWUSER.SETS.DEFAULTS      = TRUE
   NEW.PUBLIC.MSGS.SECURITY   = DEFAULT.SECURITY.LEVEL
   NEW.PRIVATE.MSGS.SECURITY  = DEFAULT.SECURITY.LEVEL
   NEW.USER.DEFAULT.MODE      = 0
   NEW.USER.DEFAULT.PROTOCOL$ = ""
   NEW.USER.GRAPHICS$         = ""
   NEW.USER.LINE.FEEDS        = 0
   NEW.USER.NULLS             = 0
   NEW.USER.BELL              = 0
   NEW.USER.CASE              = 0
   NEW.USER.MARGINS           = 0
   PROMPT.HASH$               = "Name"
   PROMPT.INDIV$              = ""
   REDIRECT.IO.METHOD         = TRUE
   REMEMBER.NEW.USERS         = TRUE
   REQUIRED.QUESTIONNAIRE$    = "NONE"
   RESTRICT.BY.DATE           = FALSE
   RESTRICT.VALID.CMDS        = FALSE
   SECURITY.NEEDED.TO.CHANGE.MSGS = SYSOP.SECURITY.LEVEL
   SHOOT.YOURSELF             = FALSE
   SHOW.SECTION               = TRUE
   SL.CATEGORIZE.UPLOADS      = SYSOP.SECURITY.LEVEL
   START.HASH                 = 1
   START.INDIV                = 0
   SURVIVE.NOUSER.ROOM        = FALSE
   SYSOP.COMMANDS$            = "1234567"
   TIME.TO.DROP.TO.DOS        = 0
   TURN.PRINTER.OFF           = FALSE
   FMS.DIRECTORY$             = ""
   UPCAT.HELP$                = "UPCAT"                              ' KG013101
   UTIL.COMMANDS$             = "BCEFGLMPRSTU"
   WRAP.CALLERS.FILE$         = ""
   FOR I = 1 TO NUM.GLOBAL
     GLOBAL.FUNCTION(I) = MINIMUM.LOGON.SECURITY
   NEXT

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1A ║
' ╚══════════════════════════════════╝
'
2100  RTS$                       = "NO"

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1B ║
' ╚══════════════════════════════════╝
'

2200  LIBRARY.ARCHIVE.PATH$        = D$
   LIBRARY.ARCHIVE.PROGRAM$     = "ARCA "
   LIBRARY.COMMANDS$            = "ACDGLSV"
   LIBRARY.DIRECTORY.PATH$      = D$
   LIBRARY.DIRECTORY.EXTENTION$ = "CDR"
   LIBRARY.DRIVE$               = ""
   LIBRARY.MAX.DISK             = 705
   LIBRARY.MAX.DIRECTORY        = 7
   LIBRARY.MAX.SUBDIR           = 100
   LIBRARY.SUBDIR.PREFIX$       = "DISK"
   FOR I=1 TO 7
      LIBRARY.FUNCTION(I) = SYSOP.SECURITY.LEVEL
   NEXT
   LIBRARY.WORK.DISK.PATH$      = D$

   MAIN.COMMANDS$               = MAIN.COMMANDS$ + "@"
   MENU$(6)                   = D$ + "MENU6"
   RECYCLE.WAIT               = 0

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1C ║
' ╚══════════════════════════════════╝
'

2300  ALLOW.CALLER.TURBO         = SYSOP.SECURITY.LEVEL
   ALTDIR.EXTENSION$          = ""
   DEFAULT.ECHOER$            = "R"
   DEFAULT.LINE.ACK$          = ""
   DIRECTORY.PREFIX$          = "DIR"
   DOSANSI                    = USE.COLOR
   ENFORCE.UPLOAD.DOWNLOAD.RATIOS = FALSE
   EPILOG$                    = D$ + "EPILOG.DEF"
   IF LEN(FILE.COMMANDS$) < 8 THEN
      FILE.COMMANDS$ = LEFT$(FILE.COMMANDS$,4) + "P" + _
                       RIGHT$(FILE.COMMANDS$,3)
   END IF
   FILES.FUNCTION(5)          = SYSOP.SECRUITY.LEVEL
   FIRST.NAME.PROMPT$         = "FIRST name"
   HOST.ECHO.OFF$             = ""
   HOST.ECHO.ON$              = ""
   KEEP.INIT.BAUD             = FALSE
   KEEP.TIME.CREDITS          = FALSE
   LAST.NAME.PROMPT$          = "LAST name"
   MAIN.PUI$                  = D$ + "MAIN.PUI"
   MAX.PER.DAY                = 0
   MENUS.CAN.PAUSE            = TRUE
   MIN.NEWCALLER.BAUD         = 0
   IF RESTRICT.BAUD <> 0 THEN _
      MIN.NEWCALLER.BAUD      = 1200
   MIN.OLDCALLER.BAUD         = 0
   IF RESTRICT.BAUD =TRUE THEN _
      MIN.OLDCALLER.BAUD      = 1200
   NEW.USER.QUESTIONNAIRE$    = D$ + "RBBS-REG.DEF"
   PERSONAL.BEGIN             = 1
   PERSONAL.DIR$              = "PRIV"
   PERSONAL.DRVPATH$          = D$
   PERSONAL.LEN               = 31
   PERSONAL.CONCAT            = FALSE
   PERSONAL.PROTOCOL$         = "N"
   PRELOG$                    = D$ + "PRELOG"
   PRIVATE.READ.SEC           = DEFAULT.SECURITY.LEVEL
   PUBLIC.READ.SEC            = DEFAULT.SECURITY.LEVEL
   QUES.PATH$                 = ""
   REGISTRATION.PROGRAM$      = "NONE"
   SEC.CHANGE.MSG             = SYSOP.SECURITY.LEVEL
   SECURITY.EXEMPT.FROM.EPILOG= DEFAULT.SECURITY.LEVEL + 1
   SIZE.OF.STACK              = 1024
   SWITCH.BACK                = FALSE
   USE.BASIC.WRITES           = FALSE
   USE.DEVICE.DRIVER$         = ""
   USE.EXTERNAL.YMODEM        = FALSE
   USER.FIRMWARE.CLEAR.CMND$  = "AT&F"
   USER.FIRMWARE.WRITE.CMND$  = "&W"
   USER.INITIALIZE.COMMAND$   = "AT&C1&D3B1E0V1M0S0=0&T5"
   USER.LOCATION$             = "CITY and STATE"
   IF LEN(UTIL.COMMANDS$) < 12 THEN _
   UTIL.COMMANDS$ = LEFT$(UTIL.COMMANDS$,2) + "E" + _
                    RIGHT$(UTIL.COMMANDS$,9)
   UTILITY.FUNCTION(3)        = UTILITY.FUNCTION(4)
   XON.XOFF                   = FALSE

   MAIN.COMMANDS.DEFAULTS$    = "ABCDEFIJKOPRSTUVW@"
   FILE.COMMANDS.DEFAULTS$    = "DGLNPSUV"
   UTIL.COMMANDS.DEFAULTS$    = "BCEFGLMPRSTU"
   LIBRARY.COMMANDS.DEFAULTS$   = "ACDGLSV"
   GLOBAL.COMMANDS.DEFAULTS$  = "H?QX"
   SYSOP.COMMANDS.DEFAULTS$   = "1234567"

   ORIG.COMMANDS$ = MAIN.COMMANDS.DEFAULTS$ + _
                    FILE.COMMANDS.DEFAULTS$ + _
                    UTIL.COMMANDS.DEFAULTS$ + _
                    LIBRARY.COMMANDS.DEFAULTS$ + _
                    GLOBAL.COMMANDS.DEFAULTS$ + _
                    SYSOP.COMMANDS.DEFAULTS$

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 16.1A ║
' ╚══════════════════════════════════╝
'
2400 ADD.DIR.SECURITY           = SYSOP.SECURITY.LEVEL
   ASK.EXTENDED.DESC          = SYSOP.SECURITY.LEVEL
   AUTOPAGE.DEF$              = D$ + "AUTOPAGE.DEF"
   CALLER.BKGRD               = 0
   CONFMAIL.LIST$             = D$ + "CONFMAIL.DEF"
   EMPHASIZE.OFF.DEF$         = "[27]" + "[0;40;33m"
   EMPHASIZE.ON.DEF$          = "[27]" + "[1;41;37m"
   ESCAPE.INSECURE            = FALSE
   FG.1.DEF$                  = "[1;40;32m"
   FG.2.DEF$                  = "[1;40;33m"
   FG.3.DEF$                  = "[1;40;35m"
   FG.4.DEF$                  = "[1;40;36m"
   FOSSIL                     = 0
   LOGON.MAIL.LEVEL$          = "A"
   LSB                        = 1016
   MACRO.DRVPATH$             = D$
   MACRO.EXTENSION$           = "MCR"
   MAX.CARRIER.WAIT           = 30
   MAX.EXTENDED.LINES         = 2
   PROTO.DEF$                 = D$ + "PROTO.DEF"
   SECVIO.HLP$                = D$ + "SECVIO." + HELP.EXTENSION$
   SMART.TEXT                 = 123
   TIME.LOCK                  = 0
   USE.DIR.ORDER              = TRUE
   WRITE.BUF.DEF              = 1024
'
' ╔════════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 17.1A-D ║
' ╚════════════════════════════════════╝
'
2500 AUTO.UPGRADE.SEC         = 0
   EXTENSION.LIST$            = "ZIP"
   DOORS.DEF$                 = D$ + "DOORS.DEF"
   MAX.REG.SEC                = 0
   MAX.WORK.VAR               = 30
   MESSAGES.CAN.GROW          = 0
   SCREEN.OUT.MSG$            = "SEEN-BY:"
   SEC.KILL.ANY               = SYSOP.SECURITY.LEVEL
   VOICE.TYPE                 = 0
'
' ╔════════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 17.2A-B ║
' ╚════════════════════════════════════╝
'
2600 VERSION.NUMBER$          = "17.3"
     FAST.FILE.LIST$          = D$ + "FIDX.DEF"
     FAST.FILE.LOCATOR$       = D$ + "LIDX.DEF"
'
' ╔═══════════════════════════════════════════════════════════════════════════╗
' ║ WRITE OUT THE "RBBS-PC.DEF" FILE WITH THE SYSOP'S SPECIFIED CONFIGURATION ║
' ╚═══════════════════════════════════════════════════════════════════════════╝
'
3000  OPEN "O",#1,OutputFileName$
   LOCATE 12,9
   PRINT "WRITING DATA...";

4000  WRITE #1,VERSION.NUMBER$, _
            DOWNLOAD.DRIVES$, _
            SYSOP.PASSWORD.1$, _
            SYSOP.PASSWORD.2$, _
            SYSOP.FIRST.NAME$, _
            SYSOP.LAST.NAME$, _
            REQUIRED.RINGS, _
            START.OFFICE.HOURS, _
            END.OFFICE.HOURS, _
            MINUTES.PER.SESSION!, _
            MAX.ALLOWED.MSGS.FRM.DEF, _
            ACT.MNTHS.B4.DELETING, _
            UPLOAD.DIRECTORY$,_
            EXPERT.USER, _
            ACTIVE.BULLETINS, _
            PROMPT.BELL, _
            PCJR, _
            MENUS.CAN.PAUSE, _
            MENU$(1), _
            MENU$(2), _
            MENU$(3), _
            MENU$(4), _
            MENU$(5), _
            MENU$(6), _
            CONFERENCE.MENU$, _
            CONFERENCE.VIEWER.SEC.LVL, _
            WELCOME.INTERRUPTABLE, _
            REMIND.FILE.TRANSFERS, _
            PAGE.LENGTH, _
            MAX.MESSAGE.LINES, _
            DOORS.AVAILABLE, _
            MO$
   IF INSTR(BULLETIN.MENU$,":") < 1 THEN _
      BULLETIN.MENU$ = DRIVE.FOR.BULLETINS$ + _
                       BULLETIN.MENU$
   IF INSTR(BULLETIN.PREFIX$,":") < 1 THEN _
      BULLETIN.PREFIX$ = DRIVE.FOR.BULLETINS$ + _
                         BULLETIN.PREFIX$
   IF GLOBAL.FUNCTION(3) > MINIMUM.LOGON.SECURITY THEN _
      GLOBAL.FUNCTION(3) = MINIMUM.LOGON.SECURITY
   IF FILES.FUNCTION(2) > MINIMUM.LOGON.SECURITY THEN _
      FILES.FUNCTION(2) = MINIMUM.LOGON.SECURITY
   IF LIBRARY.FUNCTION(4) > MINIMUM.LOGON.SECURITY THEN _
      LIBRARY.FUNCTION(4) = MINIMUM.LOGON.SECURITY
   IF LIBRARY.DRIVE$ = "" THEN _
      MAIN.FUNCTION(18) = 32767
   WRITE #1,MAIN.MESSAGE.FILE$, _
            MAIN.MESSAGE.BACKUP$, _
            CALLERS.FILE$, _
            COMMENTS.FILE$, _
            MAIN.USER.FILE$, _
            WELCOME.FILE$, _
            NEWUSER.FILE$, _
            DIRECTORY.EXTENTION$, _
            COM.PORT$, _
            BULLETINS.OPTIONAL, _
            USER.INIT.COMMAND$, _
            RTS$, _
            DOS.VERSION, _
            FG, _
            BG, _
            BORDER, _
            RBBS.BAT$, _
            RCTTY.BAT$
4200  WRITE #1,OMIT.MAIN.DIRECTORY$, _
            FIRST.NAME.PROMPT$, _
            HELP$(3), _
            HELP$(4), _
            HELP$(7), _
            HELP$(9), _
            BULLETIN.MENU$, _
            BULLETIN.PREFIX$, _
            DRIVE.FOR.BULLETINS$, _
            MESSAGE.REMINDER, _
            REQUIRE.NON.ASCII, _
            ASK.EXTENDED.DESC, _
            MAXIMUM.NUMBER.OF.NODES, _
            NETWORK.TYPE, _
            RECYCLE.TO.DOS, _
            MAX.USR.FILE.SIZE.FRM.DEF, _
            MAX.MSG.FILE.SIZE.FRM.DEF!, _
            TRASHCAN.FILE$
4300  WRITE #1,MINIMUM.LOGON.SECURITY, _
            DEFAULT.SECURITY.LEVEL, _
            SYSOP.SECURITY.LEVEL, _
            FILESEC.FILE$, _
            SYSOP.MENU.SECURITY.LEVEL, _
            CONFMAIL.LIST$, _
            MAXIMUM.VIOLATIONS, _
            SYSOP.FUNCTION(1), _
            SYSOP.FUNCTION(2), _
            SYSOP.FUNCTION(3), _
            SYSOP.FUNCTION(4), _
            SYSOP.FUNCTION(5), _
            SYSOP.FUNCTION(6), _
            SYSOP.FUNCTION(7), _
            PASSWORD.FILE$, _
            MAXIMUM.PASSWORD.CHANGES, _
            MINIMUM.SECURITY.FOR.TEMP.PASSWORD, _
            OVERWRITE.SECURITY.LEVEL, _
            DOORS.TERMINAL.TYPE, _
            MAX.PER.DAY
4400  WRITE #1,MAIN.FUNCTION(1), _
            MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17), _
            MAIN.FUNCTION(18), _
            MIN.NEWCALLER.BAUD, _
            WAIT.BEFORE.DISCONNECT
4500  WRITE #1,FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4), _
            FILES.FUNCTION(5), _
            FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            FILES.FUNCTION(8), _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(2), _
            UTILITY.FUNCTION(3), _
            UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            UTILITY.FUNCTION(6), _
            UTILITY.FUNCTION(7), _
            UTILITY.FUNCTION(8), _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(12), _
            GLOBAL.FUNCTION(1), _
            GLOBAL.FUNCTION(2), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(4), _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$
4600  WRITE #1,TURN.PRINTER.OFF,_
            DIRECTORY.PATH$,_
            MIN.SEC.TO.VIEW, _
            LIMIT.SEARCH.TO.FMS, _
            DEFAULT.CATEGORY.CODE$, _
            DIR.CATEGORY.FILE$, _
            NEW.FILES.CHECK, _
            MAX.DESC.LEN, _
            SHOW.SECTION, _
            COMMANDS.IN.PROMPT, _
            NEWUSER.SETS.DEFAULTS, _
            HELP.PATH$, _
            HELP.EXTENSION$, _
            MAIN.COMMANDS$, _
            FILE.COMMANDS$, _
            UTIL.COMMANDS$, _
            GLOBAL.COMMANDS$, _
            SYSOP.COMMANDS$
4700  WRITE #1,RECYCLE.WAIT, _
            LIBRARY.FUNCTION(1), _
            LIBRARY.FUNCTION(2), _
            LIBRARY.FUNCTION(3), _
            LIBRARY.FUNCTION(4), _
            LIBRARY.FUNCTION(5), _
            LIBRARY.FUNCTION(6), _
            LIBRARY.FUNCTION(7), _
            LIBRARY.DRIVE$, _
            LIBRARY.DIRECTORY.PATH$, _
            LIBRARY.DIRECTORY.EXTENTION$, _
            LIBRARY.WORK.DISK.PATH$, _
            LIBRARY.MAX.DISK, _
            LIBRARY.MAX.DIRECTORY, _
            LIBRARY.MAX.SUBDIR, _
            LIBRARY.SUBDIR.PREFIX$, _
            LIBRARY.ARCHIVE.PATH$, _
            LIBRARY.ARCHIVE.PROGRAM$, _
            LIBRARY.COMMANDS$
4800  WRITE #1,UPLOAD.PATH$, _
            FMS.DIRECTORY$, _
            ANS.MENU$, _
            REQUIRED.QUESTIONNAIRE$, _
            REMEMBER.NEW.USERS, _
            SURVIVE.NOUSER.ROOM, _
            PROMPT.HASH$, _
            START.HASH, _
            LEN.HASH, _
            PROMPT.INDIV$, _
            START.INDIV, _
            LEN.INDIV
4850  WRITE #1,BYPASS.MSGS, _
            MUSIC, _
            RESTRICT.BY.DATE, _
            DAYS.TO.WARN, _
            DAYS.IN.SUBSCRIPTION.PERIOD, _
            VOICE.TYPE, _
            RESTRICT.VALID.CMDS, _
            NEW.USER.DEFAULT.MODE, _
            NEW.USER.LINE.FEEDS, _
            NEW.USER.NULLS, _
            FAST.FILE.LIST$, _
            FAST.FILE.LOCATOR$, _
            MESSAGES.CAN.GROW, _
            WRAP.CALLERS.FILE$, _
            REDIRECT.IO.METHOD, _
            AUTO.UPGRADE.SEC, _
            HALT.ON.ERROR, _
            NEW.PUBLIC.MSGS.SECURITY, _
            NEW.PRIVATE.MSGS.SECURITY, _
            SECURITY.NEEDED.TO.CHANGE.MSGS, _
            SL.CATEGORIZE.UPLOADS, _
            BAUDOT, _
            TIME.TO.DROP.TO.DOS, _
            EXPIRED.SECURITY, _
            DTR.DROP.DELAY, _
            ASK.IDENTITY, _
            MAX.REG.SEC, _
            BUFFER.SIZE, _
            MLCOM, _
            SHOOT.YOURSELF, _
            EXTENSION.LIST$, _
            NEW.USER.DEFAULT.PROTOCOL$, _
            NEW.USER.GRAPHICS$, _
            NET.MAIL$, _
            MASTER.DIRECTORY.NAME$, _
            PROTO.DEF$, _
            UPCAT.HELP$, _
            ALWAYS.STREW.TO$, _
            LAST.NAME.PROMPT$
      MSB = LSB + 1
      LINE.CONTROL.REGISTER = LSB + 3
      MODEM.CONTROL.REGISTER = LSB + 4
      LINE.STATUS.REGISTER = LSB + 5
      MODEM.STATUS.REGISTER = LSB + 6
4900  WRITE #1,PERSONAL.DRVPATH$, _
            PERSONAL.DIR$, _
            PERSONAL.BEGIN, _
            PERSONAL.LEN, _
            PERSONAL.PROTOCOL$, _
            PERSONAL.CONCAT, _
            PRIVATE.READ.SEC, _
            PUBLIC.READ.SEC, _
            SEC.CHANGE.MSG, _
            KEEP.INIT.BAUD, _
            MAIN.PUI$, _
            DEFAULT.ECHOER$, _
            HOST.ECHO.ON$, _
            HOST.ECHO.OFF$, _
            SWITCH.BACK, _
            DEFAULT.LINE.ACK$, _
            ALTDIR.EXTENSION$, _
            DIRECTORY.PREFIX$
4950  WRITE #1,SEC.LVL.EXEMPT.FRM.PURGING, _
            MODEM.INIT.WAIT.TIME, _
            MODEM.COMMAND.DELAY.TIME, _
            TURBO.RBBS, _
            DNLD.SUB, _
            WILL.SUBDIRS.B.USED, _
            UPLOAD.TO.SUBDIR, _
            DOWNLOAD.TO.SUBDIR, _
            UPLOAD.SUBDIR$, _
            MIN.OLDCALLER.BAUD, _
            MAX.WORK.VAR, _
            DISKFULL.GO.OFFLINE, _
            EXTENDED.LOGGING, _
            USER.RESET.COMMAND$, _
            USER.COUNT.RINGS.COMMAND$, _
            USER.ANSWER.COMMAND$, _
            USER.GO.OFFHOOK.COMMAND$, _
            DISK.FOR.DOS$, _
            DUMB.MODEM, _
            COMMENTS.AS.MESSAGES, _
            LSB, _
            MSB, _
            LINE.CONTROL.REGISTER, _
            MODEM.CONTROL.REGISTER, _
            LINE.STATUS.REGISTER, _
            MODEM.STATUS.REGISTER
4980  WRITE #1,KEEP.TIME.CREDITS, _
            XON.XOFF, _
            ALLOW.CALLER.TURBO, _
            USE.DEVICE.DRIVER$, _
            PRELOG$, _
            NEW.USER.QUESTIONNAIRE$, _
            EPILOG$, _
            REGISTRATION.PROGRAM$, _
            QUES.PATH$, _
            USER.LOCATION$, _
            USER.INITIALIZE.COMMAND$, _
            USER.FIRMWARE.CLEAR.CMND$, _
            USER.FIRMWARE.WRITE.CMND$, _
            ENFORCE.UPLOAD.DOWNLOAD.RATIOS, _
            SIZE.OF.STACK, _
            SECURITY.EXEMPT.FROM.EPILOG, _
            USE.BASIC.WRITES, _
            DOSANSI, _
            ESCAPE.INSECURE, _
            USE.DIR.ORDER, _
            ADD.DIR.SECURITY, _
            MAX.EXTENDED.LINES, _
            ORIG.COMMANDS$
      IF MACRO.EXTENSION$ <> "" AND _
         INSTR(MACRO.EXTENSION$,".") <> 1 THEN _
         MACRO.EXTENSION$ = "." + MACRO.EXTENSION$
      WRITE #1,LOGON.MAIL.LEVEL$, _
            MACRO.DRVPATH$, _
            MACRO.EXTENSION$, _
            EMPHASIZE.ON.DEF$, _
            EMPHASIZE.OFF.DEF$, _
            FG.1.DEF$, _
            FG.2.DEF$, _
            FG.3.DEF$, _
            FG.4.DEF$, _
            SECVIO.HLP$, _
            FOSSIL, _
            MAX.CARRIER.WAIT, _
            CALLER.BKGRD, _
            SMART.TEXT, _
            TIME.LOCK, _
            WRITE.BUF.DEF, _
            SEC.KILL.ANY, _
            DOORS.DEF$, _
            SCREEN.OUT.MSG$, _
            AUTOPAGE.DEF$
   IF DNLD.SUB <1 OR DNLD.SUB > 99 THEN _
      GOTO CLOSE.OUT
   FOR I = 1 TO DNLD.SUB
      WRITE #1,DNLD$(I)
   NEXT

CLOSE.OUT:
5000  CLOSE #1
   LOCATE 13,9
   PRINT "FINISHED."
   LOCATE 22,1
   END



'
' ╔══════════════════════════════════╗
' ║ ERROR EXIT - USER ABORTED PROGRAM║
' ╚══════════════════════════════════╝
'
USER.ABORT:
      LOCATE 23,1
      PRINT "User aborted program - EXECUTION CANCELLED"
      SYSTEM
'
' ╔══════════════════════════════════════════════╗
' ║ ERROR HANDLER FOR ANY OPEN/READ/WRITE ERRORS ║
' ╚══════════════════════════════════════════════╝
'
ErrorHandler:
   IF ERL = 1000 THEN
      CALL Line17("ERROR: COULD NOT OPEN INPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   IF ERL =  1010 THEN
      CALL Line17("ERROR READING FILE (Probably not version "+ MID$(Ver$,(Version-1)*6+1,5)+")")
      SYSTEM
   END IF
   IF ERL = 3000 THEN
      CALL Line17("ERROR: COULD NOT OPEN OUTPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   IF ERL >= 4000 AND ERL <= 5000 THEN
      CALL Line17("ERROR: COULD NOT WRITE OUTPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   CALL Line17("ERROR "+STR$(ERR)+" OCCURRED IN LINE "+STR$(ERL)+" - EXECUTION CANCELLED")
   SYSTEM

   DATA "           RBBS-PC VERSION 17.3 CONFIGURATION CONVERSION"
   DATA "Conceived and written by:"
   DATA "   Doug Azzarito"
   DATA "   TECHNOLOGY CONSULTANTS of the Palm Beaches, Inc."
   DATA "   VOICE: (407) 627-9767"
   DATA "    DATA: (407) 627-6969 627-6862"
   DATA ""
   DATA "A limited license is granted to all users of this program"
   DATA "to use and distribute this program, as long as:"
   DATA "   1) NO FEE is charged for copying or distributing this program."
   DATA "   2) This program is NOT distributed in modified form."
   DATA "   3) The code contained herein is NOT used for any other purpose"
   DATA "      without obtaining permission from the copyright owner of"
   DATA "      RBBS-PC"
'
' ╔═════════════════╗
' ║ STRTOK FUNCTION ║
' ╚═════════════════╝
'
FUNCTION StrTok$(Srce$,Delim$)
STATIC Start%, SaveStr$

   ' If first call, make a copy of the string.
   IF Srce$<>"" THEN
      Start%=1 : SaveStr$=Srce$
   END IF

   BegPos%=Start% : Ln%=LEN(SaveStr$)
   ' Look for start of a token (character that isn't delimiter).
   WHILE BegPos%<=Ln% AND INSTR(Delim$,MID$(SaveStr$,BegPos%,1))<>0
      BegPos%=BegPos%+1
   WEND
   ' Test for token start found.
   IF BegPos% > Ln% THEN
      StrTok$="" : EXIT FUNCTION
   END IF
   ' Find the end of the token.
   EndPos%=BegPos%
   WHILE EndPos% <= Ln% AND INSTR(Delim$,MID$(SaveStr$,EndPos%,1))=0
      EndPos%=EndPos%+1
   WEND
   StrTok$=MID$(SaveStr$,BegPos%,EndPos%-BegPos%)
   ' Set starting point for search for next token.
   Start%=EndPos%

END FUNCTION
'
' ╔═════════════════╗
' ║ BOX SUBROUTINE  ║
' ╚═════════════════╝
'
SUB box (ybox, xbox, boxrows, boxcols, style)
' ybox is the screen row of the upper left corner of the box
' xbox is the screen column of the upper left corner of the box
' boxrows is the number of rows (must be > 1) for the box
' boxcols is the number of cols (must be > 1) for the box
' style = 1  single line              2 double line
'         3  double top,single side   4  double side, single top
'
   IF style = 0 THEN EXIT SUB
   SELECT CASE style
      CASE 1
         tl$ = "┌": tr$ = "┐": bl$ = "└": br$ = "┘": hl$ = "─": vl$ = "│"
      CASE 2
         tl$ = "╔": tr$ = "╗": bl$ = "╚": br$ = "╝": hl$ = "═": vl$ = "║"
      CASE 3
         tl$ = "╒": tr$ = "╕": bl$ = "╘": br$ = "╛": hl$ = "═": vl$ = "│"
      CASE 4
         tl$ = "╓": tr$ = "╖": bl$ = "╙": br$ = "╜": hl$ = "─": vl$ = "║"
      CASE ELSE
         CLS
         PRINT "SYNTAX ERROR IN box FUNCTION: Invalid style"
         SYSTEM
      END SELECT
   LOCATE ybox, xbox, 0
   PRINT tl$ + STRING$(boxcols - 2, hl$) + tr$;
   FOR i! = ybox + 1 TO ybox + boxrows - 2
      LOCATE i!, xbox
      PRINT vl$;
      LOCATE , xbox + boxcols - 1
      PRINT vl$;
      NEXT i!
   LOCATE ybox + boxrows - 1, xbox, 0
   PRINT bl$ + STRING$(boxcols - 2, hl$) + br$;
END SUB
'
' ╔══════════════════════╗
' ║ Line 17 Help Display ║
' ╚══════════════════════╝
'
SUB Line17 (HelpText$)
   LOCATE 17,6
   PRINT SPACE$(67);
   IF LEN(HelpText$) > 67 THEN HelpText$ = LEFT$(HelpText$,67)
   LOCATE 17,40-INT((LEN(HelpText$)+1)/2)
   PRINT HelpText$;
   END SUB
```

## RVAR0227.BAS

```bas
' $SUBTITLE: 'Arrays passed between various components of RBBS-PC'
' $PAGE
   DEFINT A-Z
'
' The following static arrays are passed between the various subroutines
' within RBBS-PC.
'
    DIM ZHelp$(9)                      ' Help file names
    DIM ZWasLG$(12)                    ' Holds message strings
    DIM ZMenu$(7)                      ' Menu file names
    DIM ZSubDir$(99)                   ' Download Sub-Dirs
' $SUBTITLE: 'Variables passed between various components of RBBS-PC'
' $PAGE
'
' The following variables are passed between the various and
' seperately compiled subroutines used by RBBS-PC.
'
   COMMON SHARED _
          ZAbort, _
          ZAckChar$, _
          ZAcknowledge$, _
          ZActiveBulletins, _
          ZActiveFMSDir$, _
          ZActiveMenu$, _
          ZActiveMessage$, _
          ZActiveMessageFile$, _
          ZActiveUserFile$, _
          ZActiveUserName$, _
          ZAddDirSecurity, _
          ZAdjustedSecurity, _
          ZAdvanceProtoWrite, _
          ZAllOpts$, _
          ZAllowCallerTurbo, _
          ZAllwaysStrewTo$, _
          ZAltdirExtension$, _
          ZAnsIndex, _
          ZAnsMenu$, _
          ZArcWork$, _
          ZAskExtendedDesc, _
          ZAskID, _
          ZAttemptsAllowed, _
          ZAutoDownDesired, _
          ZAutoDownInProgress, _
          ZAutoDownVerified, _
          ZAutoDownYes, _
          ZAutoLogoff!, _
          ZAutoLogoffReq, _
          ZAutoPageDef$, _
          ZAutoUpgradeSec, _
          ZBackArrow$, _
          ZBackSpace$, _
          ZBatchProto, _
          ZBatchTransfer, _
          ZBaudot, _
          ZBaudParity$, _
          ZBaudRateDivisor, _
          ZBaudRates$, _
          ZBaudTest!, _
          ZBegFile, _
          ZBegLibrary, _
          ZBegMain, _
          ZBegUtil, _
          ZBellRinger$, _
          ZBG, _
          ZBlk, _
          ZBlocksInFile#, _
          ZBlockSize, _
          ZBoldText$, _
          ZBorder, _
          ZBPS, _
          ZBufferSize, _
          ZBulletinMenu$, _
          ZBulletinPrefix$, _
          ZBulletinSave$, _
          ZBulletinsOptional, _
          ZBypassMsgs, _
          ZBypassTimeCheck, _
          ZByteMethod, _
          ZBytesInFile#, _
          ZBytesToday!, _
          ZCallersFile$, _
          ZCallersFileIndex!, _
          ZCallersFilePrefix$, _
          ZCallersRecord$, _
          ZCancel$, _
          ZCanDnldFromUp, _
          ZCarriageReturn$, _
          ZCategoryCode$(1), _
          ZCategoryDesc$(1), _
          ZCategoryName$(1), _
          ZChainedDir$, _
          ZChatAvail, _
          ZCheckBulletLogon, _
          ZCheckSum, _
          ZCityState$, _
          ZCmdPrompt$, _
          ZCmdsBetweenRings, _
          ZCmdTransfer$, _
          ZCmndsInPrompt, _
          ZCmntsAsMsgs, _
          ZCmntsFile$, _
          ZColorReset$, _
          ZCommPortStack$, _
          ZComPort$, _
          ZComPort, _
          ZCompressedExt$, _
          ZComProgram, _
          ZComputerType, _
          ZConcatFIles, _
          ZConfigFileName$, _
          ZConfMailList$, _
          ZConfMenu$, _
          ZConfMode, _
          ZConfName$, _
          ZCR, _
          ZCrLf$, _
          ZCurDate$, _
          ZCurDef$, _
          ZCurDirPath$, _
          ZCurPUI$, _
          ZCursorLine, _
          ZCursorRow, _
          ZCustomPUI, _
          ZDateOrderedFMS, _
          ZDaysInRegPeriod, _
          ZDaysToWarn, _
          ZDebug, _
          ZDefaultCatCode$, _
          ZDefaultEchoer$, _
          ZDefaultExtension$, _
          ZDefaultLineACK$, _
          ZDefaultSecLevel, _
          ZDefaultXfer$, _
          ZDelay!, _
          ZDeletedMsg$, _
          ZDeleteInvalid, _
          ZDenyAccess, _
          ZDirCatFile$, _
          ZDirExtension$, _
          ZDirFile$, _
          ZDirPath$, _
          ZDirPrefix$, _
          ZDirPrompt$, _
          ZDiskForDos$, _
          ZDiskFullGoOffline, _
          ZDisplayAsUnit, _
          ZDistantTGet, _
          ZDistriHelp$, _                                            ' nc022101
          ZDistriPath$, _                                            ' nc022101
          ZDLBytes!, _
          ZDlBytes$, _
          ZDLToday!, _
          ZDnldDrives$, _
          ZDnldRecord$, _
          ZDnlds, _
          ZDoorDisplay$, _
          ZDooredTo$, _
          ZDoorsAvail, _
          ZDoorsDef$, _
          ZDoorSkipsPswd, _
          ZDoorsTermType, _
          ZDosANSI, _
          ZDosVersion, _
          ZDotFlag, _
          ZDownFiles, _
          ZDownTemplate$, _
          ZDR1$, _
          ZDR2$, _
          ZDR3$, _
          ZDR4$, _
          ZDTRDropDelay, _
          ZDumbModem, _
          ZDwnIndex, _
          ZEchoer$, _
          ZEightBit, _
          ZElapsedTime$, _
          ZElapsedTime, _
          ZEmphasizeOff$, _
          ZEmphasizeOffDef$, _
          ZEmphasizeOn$, _
          ZEmphasizeOnDef$, _
          ZEndOfficeHours, _
          ZEndTime, _
          ZEndTransmission$, _
          ZEnforceRatios, _
          ZEOL, _
          ZEpilog$, _
          ZErrCode, _
          ZEscape$, _
          ZEscapeInsecure, _
          ZExitToDoors, _
          ZExpectActiveModem, _
          ZExpertUser, _
          ZExpertUserDef, _
          ZExpirationDate$, _
          ZExpiredSec, _
          ZExtendedLogging, _
          ZExtendedOff, _
          ZF10Key, _
          ZF1Key, _
          ZF7Msg$, _
          ZFailureParm, _
          ZFailureString$, _
          ZFakeXRpt, _
          ZFalse, _
          ZFastFileList$, _
          ZFastFileLocator$, _
          ZFastFileSearch, _
          ZFastTabs$, _
          ZFF, _
          ZFG, _
          ZFG1$, _
          ZFG1Def$, _
          ZFG2$, _
          ZFG2Def$, _
          ZFG3$, _
          ZFG3Def$, _
          ZFG4$, _
          ZFG4Def$, _
          ZFileCmd$, _
          ZFileLocation$, _                                          ' KG022301
          ZFileName$, _
          ZFileNameHold$, _
          ZFileOpts$, _
          ZFileSecFile$, _
          ZFileSysParm, _
          ZFirstName$, _
          ZFirstNameEnd, _
          ZFirstNamePrompt$, _
          ZFLen, _
          ZFlowControl, _
          ZFMSDirectory$, _
          ZForceKeyboard, _
          ZFossil, _
          ZFreeSpace$, _
          ZFreeSpaceUpldFile$, _
          ZFunctionKey
COMMON SHARED _
          ZGetExtDesc, _
          ZGlobalBytesToday!, _
          ZGlobalCmnds$, _
          ZGlobalDLBytes!, _
          ZGlobalDLToday!, _
          ZGlobalDnlds, _
          ZGlobalSysop, _
          ZGlobalULBytes!, _
          ZGlobalUplds, _
          ZGSRAra$(1), _
          ZHaltOnError, _
          ZHasDoored, _
          ZHasPrivDoor, _
          ZHelp$(), _
          ZHelpExtension$, _
          ZHelpPath$, _
          ZHidden, _
          ZHiLiteOff, _
          ZHomeConf$, _
          ZHostEchoOff$, _
          ZHostEchoOn$, _
          ZHourMinToDropToDos, _
          ZInConfMenu, _
          ZInitialCredit#, _
          ZInternalEquiv$, _
          ZInternalProt$, _
          ZInterrupOn$, _
          ZInvalidFileOpts$, _
          ZInvalidLibraryOpts$, _
          ZInvalidMainOpts$, _
          ZInvalidOpts$, _
          ZInvalidSysOpts$, _
          ZInvalidUtilOpts$, _
          ZJumpLast$, _
          ZJumpSearching, _
          ZJumpSupported, _
          ZJumpTo$, _
          ZKeepInitBaud, _
          ZKeepTimeCredits, _
          ZKermitExeFile$, _
          ZKermitSupport, _
          ZKeyboardStack$, _
          ZKeyPressed$, _
          ZKeyPressed, _
          ZKillMessage, _
          ZLastCommand$, _
          ZLastDateTimeOn$, _
          ZLastDateTimeOnSave$, _
          ZLastIndex, _
          ZLastMsgRead, _
          ZLastName$, _
          ZLastNameEnd, _
          ZLastNamePrompt$, _
          ZLastSmartColor$, _
          ZLenHash, _
          ZLenIndiv, _
          ZLibArcPath$, _
          ZLibArcProgram$, _
          ZLibCmds$, _
          ZLibDir$, _
          ZLibDirExtension$, _
          ZLibDirPath$, _
          ZLibDiskChar$, _
          ZLibDrive$, _
          ZLibMaxDir, _
          ZLibMaxDisk, _
          ZLibMaxSubdir, _
          ZLibNodeID$, _
          ZLibOpts$, _
          ZLibSubdirPrefix$, _
          ZLibType, _
          ZLibWorkDiskPath$, _
          ZLimitMinsPerSession, _
          ZLimitSearchToFMS, _
          ZLine25$, _
          ZLine25Hold$, _
          ZLineCntlReg, _
          ZLineEditChk$, _
          ZLineFeed$, _
          ZLineFeeds, _
          ZLineMes$, _
          ZLinesInMsg, _
          ZLinesInMsgSave, _
          ZLinesPrinted, _
          ZLineStatusReg, _
          ZListDir, _
          ZListIndex, _
          ZListNewDate$, _
          ZLocalBksp$, _
          ZLocalUser, _
          ZLocalUserMode, _
          ZLockDrive, _
          ZLockFileName$, _
          ZLockStatus$, _
          ZLogonActive, _
          ZLogonErrorIndex, _
          ZLogonMailLevel$, _
          ZLSB
COMMON SHARED _
          ZMacroActive, _
          ZMacroDrvPath$, _
          ZMacroEcho, _
          ZMacroExtension$, _
          ZMacroMin, _
          ZMacroSave, _
          ZMacroTemplate$, _
          ZMailWaiting, _
          ZMainCmds$, _
          ZMainDirExtension$, _
          ZMainFMSDir$, _
          ZMainMsgBackup$, _
          ZMainMsgFile$, _
          ZMainOpts$, _
          ZMainPUI$, _
          ZMainUserFile$, _
          ZMainUserFileIndex, _
          ZMasterDirName$, _
          ZMaxCarrierWait, _
          ZMaxDescLen, _
          ZMaxExtendedLines, _
          ZMaxMsgLines, _
          ZMaxMsgLinesDef, _
          ZMaxNodes, _
          ZMaxPerDay,_
          ZMaxPswdChanges, _
          ZMaxRegSec, _
          ZMaxViolations, _
          ZMaxWorkVar, _
          ZMenu$(), _
          ZMenuIndex, _
          ZMenusCanPause, _
          ZMinLogonSec, _
          ZMinNewCallerBaud, _
          ZMinOldCallerBaud, _
          ZMinSecForTempPswd, _
          ZMinSecToView, _
          ZMinsPerSession, _
          ZMLCom, _
          ZMNPSupport, _
          ZModemAnswerCmd$, _
          ZModemCmdDelayTime, _
          ZModemCntlReg, _
          ZModemCountRingsCmd$, _
          ZModemGoOffHookCmd$, _
          ZModemInitBaud$, _
          ZModemInitCmd$, _
          ZModemInitWaitTime, _
          ZModemOffHook, _
          ZModemResetCmd$, _
          ZModemStatusReg, _
          ZMorePrompt$, _
          ZMSB, _
          ZMsgDim, _
          ZMsgDimIndex, _
          ZMsgDimIndexSave, _
          ZMsgFileLock, _
          ZMsgHeader$, _
          ZMsgPswd, _
          ZMsgPtr(2), _
          ZMsgRec$, _
          ZMsgReminder, _
          ZMsgsCanGrow, _
          ZMultiLinkPresent, _
          ZMusic, _
          ZNAK$, _
          ZNetBaud$, _
          ZNetMail$, _
          ZNetReliable$, _
          ZNetworkType, _
          ZNewFilesCheck, _
          ZNewMsgs, _
          ZNewPrivateMsgsSec, _
          ZNewPublicMsgsSec, _
          ZNewsFileName$, _
          ZNewUser, _
          ZNewUserDefaultMode, _
          ZNewUserDefaultProtocol$, _
          ZNewUserFile$, _
          ZNewUserGraphics$, _                                       ' nc022101
          ZNewUserMargins, _                                         ' nc022101
          ZNewUserQuestionnaire$, _
          ZNewUserSetsDefaults, _
          ZNextMsgRec, _
          ZNo, _
          ZNoAdvance, _
          ZNodeFileID$, _
          ZNodeID$, _
          ZNodeRecIndex, _
          ZNodeWorkDrvPath$, _
          ZNodeWorkFile$, _
          ZNoDoorProtect, _
          ZNonStop, _
          ZNonStopSave, _
          ZNotCTS, _
          ZNul$, _
          ZNulls, _
          ZNumCategories, _
          ZNumDnldBytes!, _
          ZNumHeaders, _
          ZOK, _
          ZOldDate$, _
          ZOmitMainDir$, _
          ZOneStop, _
          ZOptionEnd$, _
          ZOptSec(1), _
          ZOrigCallers$, _
          ZOrigCnfg$, _
          ZOrigCommands$, _
          ZOrigMsgFile$, _
          ZOrigSec, _
          ZOrigSysopFN$, _
          ZOrigSysopLN$, _
          ZOrigUserFile$, _
          ZOrigUserFileIndex, _
          ZOrigUserName$, _
          ZOutTxt$(1), _
          ZOutTxt$, _
          ZOverWriteSecLevel, _
          ZPageLength, _
          ZPageLengthDef, _
          ZPageStatus$, _
          ZPagingPtrSupport$, _
          ZParseOff, _
          ZPersonalBegin, _
          ZPersonalConcat, _
          ZPersonalDir$, _
          ZPersonalDrvPath$, _
          ZPersonalLen, _
          ZPersonalProtocol$, _
          ZPossibleMacro, _
          ZPreLog$, _
          ZPressEnter$, _
          ZPressEnterExpert$, _
          ZPressEnterNovice$, _
          ZPrevBase$, _
          ZPrevPrefix$, _
          ZPrevPUI$, _
          ZPrinter, _
          ZPrivateDoor, _
          ZPrivateReadSec, _
          ZPromptBell, _
          ZPromptBellDef, _
          ZPromptHash$, _
          ZPromptIndiv$, _
          ZProtoDef$, _
          ZProtoMacro$, _
          ZProtoMethod$, _
          ZProtoPrompt$, _
          ZPswd$, _
          ZPswdFailed, _
          ZPswdFile$, _
          ZPswdSave$, _
          ZPublicReadSec, _
          ZQuesPath$, _
          ZQuestAborted, _
          ZQuestChainStarted, _
          ZQuitList$, _
          ZQuitPromptExpert$, _
          ZQuitPromptNovice$
COMMON SHARED _
          ZRatioRestrict#, _
          ZRBBSBat$, _
          ZRBBSName$, _
          ZRCTTYBat$, _
          ZRecycleToDos, _
          ZRecycleWait, _
          ZRedirectIOMethod, _
          ZRegDate$, _
          ZRegDaysRemaining, _
          ZRegProgram$, _
          ZReliableMode, _
          ZRememberNewUsers, _
          ZRemindFileXfers, _
          ZRemindProfile, _
          ZRemoteEcho, _
          ZReply, _
          ZReq8Bit, _
          ZReqQues$, _
          ZReqQuesAnswered, _
          ZRequiredRings, _
          ZRequireNonASCII, _
          ZRestrictByDate, _
          ZRestrictValidCmds, _
          ZRet, _
          ZRetERL, _
          ZReturnLineFeed$, _
          ZRightMargin, _
          ZRTS$, _
          ZScreenOutMsg$, _
          ZSearchingAll, _
          ZSecChangeMsg, _
          ZSecExemptFromEpilog, _
          ZSecKillAny, _
          ZSecLevel$, _
          ZSecsPerSession!, _
          ZSecsUsedSession!, _
          ZSection$, _
          ZSectionOpts$, _
          ZSectionPrompt$, _
          ZSecVioHelp$, _
          ZSessionHour, _
          ZSessionMin, _
          ZSessionSec, _
          ZShareIt, _
          ZShowSection, _
          ZSizeOfStack, _
          ZSkipFilesLogon, _
          ZSLCategorizeUplds, _
          ZSleepDisconnect, _
          ZSmartTable$, _
          ZSmartTextCode$, _
          ZSmartTextCode, _
          ZSnoop, _
          ZSpeedFactor!, _
          ZStackC, _
          ZStartHash, _
          ZStartIndiv, _
          ZStartOfficeHours, _
          ZStartOfHeader$, _
          ZStartTime, _
          ZStopInterrupts, _
          ZStoreParseAt, _
          ZSubDir$(), _
          ZSubDirCount, _
          ZSubDirIndex, _
          ZSubParm, _
          ZSubSection, _
          ZSurviveNoUserRoom, _
          ZSuspendAutoLogoff, _
          ZSwitchBack, _
          ZSysop, _
          ZSysopAnnoy, _
          ZSysopAvail, _
          ZSysopCmds$, _
          ZSysopComment, _
          ZSysopFirstName$, _
          ZSysopLastName$, _
          ZSysopMenuSecLevel, _
          ZSysopNext, _
          ZSysopPswd1$, _
          ZSysopPswd2$, _
          ZSysopSecLevel, _
          ZSystemOpts$, _
          ZTalkAll, _
          ZTalkToModemAt$, _
          ZTempMaxPerDay, _
          ZTempPassword$, _
          ZTempRegPeriod, _
          ZTempSecLevel, _
          ZTempTimeAllowed, _
          ZTempTimeLock, _
          ZTestedIntValue, _
          ZTestParity, _
          ZTime$, _
          ZTimeCredits!, _
          ZTimeLock, _
          ZTimeLockSet, _
          ZTimeLoggedOn$, _
          ZTimesLoggedOn, _
          ZTimeToDropToDos!, _
          ZTodayBytes$, _
          ZTodayDl$, _
          ZToggleOnly, _
          ZTransferFunction, _
          ZTransferOption$, _
          ZTrashcanFile$, _
          ZTrue, _
          ZTurboKey, _
          ZTurboKeyUser, _
          ZTurboRBBS, _
          ZTurnPrinterOff, _
          ZULBytes!, _
          ZULBytes$, _
          ZUnitCount, _
          ZUpcatHelp$, _
          ZUpInc, _
          ZUpldDir$, _
          ZUpldDirCheck$, _
          ZUpldDriveFile$, _
          ZUpldPath$, _
          ZUpldRec$, _
          ZUplds, _
          ZUpldSubdir$, _
          ZUpldTimeFactor!, _
          ZUpldToSubdir, _
          ZUpperCase, _
          ZUpTemplate$, _
          ZUseBASICWrites, _
          ZUseDeviceDriver$, _
          ZUseDirOrder, _
          ZUseExternalXmodem, _
          ZUseExternalYmodem, _
          ZUserBlockLock, _
          ZUserDnlds$, _
          ZUserFileIndex, _
          ZUserFileLock, _
          ZUserGraphicDefault$, _
          ZUserIn$(1), _
          ZUserIn$, _
          ZUserLocation$, _
          ZUserLogonTime!, _
          ZUserName$, _
          ZUserOption$, _
          ZUserRecord$, _
          ZUserSecLevel, _
          ZUserSecSave, _
          ZUserTextColor, _
          ZUserUplds$, _
          ZUserXferDefault$, _
          ZUseTPut, _
          ZUtilCmds$, _
          ZUtilOpts$, _
          ZVerifyHigh$, _
          ZVerifying, _
          ZVerifyList$, _
          ZVerifyLow$, _
          ZVerifyNumeric, _
          ZVersionID$, _
          ZViolation$, _
          ZViolationsThisSession, _
          ZVoiceType, _
          ZWaitBeforeDisconnect, _
          ZWaitExpired, _
          ZWasA, _
          ZWasB, _
          ZWasC, _
          ZWasCC, _
          ZWasCI$, _
          ZWasCL, _
          ZWasCM, _
          ZWasCN$, _
          ZWasDF$, _
          ZWasDF, _
          ZWasEL, _
          ZWasEN$, _
          ZWasFT$, _
          ZWasGR, _
          ZWasHH, _
          ZWasLG$(), _
          ZWasLM$, _
          ZWasN$, _
          ZWasNG$, _
          ZWasQ!, _
          ZWasQ, _
          ZWasS, _
          ZWasSL, _
          ZWasSQ, _
          ZWasY$, _
          ZWasZ$, _
          ZWelcomeFile$, _
          ZWelcomeFileDrvPath$, _
          ZWelcomeInterruptable, _
          ZWorkAra$(1), _
          ZWrapCallersFile$, _
          ZWriteBufDef, _
          ZXferSupport, _
          ZXOff$, _
          ZXOffEd, _
          ZXOn$, _
          ZXOnXOff, _
          ZYes
' $SUBTITLE: 'Functions common to all components of RBBS-PC'
' $PAGE
'
' The following functions may be used by any routine in RBBS-PC
'
' FNOffOn$ returns "Off" if switch is 0, and returns "On" if
' switch is non-zero.

DEF FNOffOn$ (Switch) = MID$("OffOn", 1 - 3 * (Switch <> 0), 3)
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2092

     Volume in drive A has no label
     Directory of A:\

    RBBS-UTL ZIP    249891   2-13-90  11:30p
    RBBS-LIT ZIP     75421   3-02-90  10:59p
    RFIX0227 ZIP     35460   2-28-90   8:29p
            3 file(s)     360772 bytes
                               0 bytes free
