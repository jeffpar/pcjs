---
layout: page
title: "PC-SIG Diskette Library (Disk #2631)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2631/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2631"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BTRIEV.BAS

```bas
' This SUBprocedure provides the interface between Spectra Publishing's
' PowerBASIC 2.00 compiler and Novell's BTRIEVE file system on PCDOS/MSDOS
' machines.

' In order to use the SUB, include its source code in your program with the
' $INCLUDE metastatement:     $INCLUDE "POWERBBT.BAS"

' Each time you wish to perform a BTRIEVE operation, use the CALL statement
' to call the SUB with the following parameters:

' CALL BTRV(OPERATION%, RETSTATUS%, FCBPOSBLOCK$, DATABUFFER$, _
'           DATABUFLEN%, KEYBUFFER$, KEYNUMBER%)

' where:  OPERATION% is the BTRIEVE operation code for the desired function.
'         RETSTATUS% is a BTRIEVE status code returned after the desired
'            function is attempted.
'         FCBPOSBLOCK$ is a 128-byte data area containing file control block
'            (FCB) and position information which must not be changed by
'            your program.
'         DATABUFFER$ is a data buffer used to specify special information
'            such as file specifications, key characteristics, etc.  Its
'            structure will be defined by your program with a FIELD
'            statement.
'         DATABUFLEN% is the length of the data buffer, DATABUFFER$.
'         KEYBUFFER$ is the key buffer.
'         KEYNUMBER% is the key number to be processed.

' Important note: The BTRV routine resets the currently-active PowerBASIC
' data segment to the default data segment (by executing a DEF SEG state-
' ment with no argument).  If you set a different segment with DEF SEG in
' your main program and then call BTRV, you will need to execute your DEF
' SEG statement again (after the call), if you wish to continue using your
' segment as PowerBASIC's data segment; otherwise, the default data segment
' will be active when BTRV returns to your main program.


sub BTRV(Operation%, RetStatus%, FCBPosBlock$, DataBuffer$, DataBufLen%, _
	 KeyBuffer$, KeyNumber%)

static VersionDetermined%, BMULTIPresent%, BMULTIProcessID%
local CriticalErrorVec$		'holds critical error handler vector

dim ParamBlock%(0:13)		'local array holds 14-word parameter block

%AX = 1 : %BX = 2 : %DX = 4 : %DS = 8	'register equates for use with REG

'parameter positions within ParamBlock% array
%DBOfst = 0 : %DBSeg = 1 : %DBLength = 2 : %PosOfst = 3 : %PosSeg = 4
%FCBOfst = 5 : %FCBSeg = 6 : %OpCode = 7 : %KBOfst = 8 : %KBSeg = 9
%KeyInfo = 10: %StatOfst = 11 : %StatSeg = 12 : %IfaceID = 13

%FCBPosSize = 128		'128 = correct size for FCB + position info
%FCBPosLenErr = 23		'status code returned if size exceeded
%NoBTRIEVEErr = 20		'status code returned if BTRIEVE not loaded


'First, swap critical error handler and check for presence of BTRIEVE

def seg = 0			  'use segment zero (DOS INT vectors)
CriticalErrorVec$ = peek$(&h90,4) 'get critical error handler vector
poke$ &h90, peek$(&h51A,4)	  'tell DOS to handle errors

				'if INT 7B offset = 33 hex, BTRIEVE handler
if peeki(&h7B * 4) = &h33 then	   '  has been loaded
  if VersionDetermined% = 0 then   'DOS version has yet to be determined
    incr VersionDetermined%	   'set flag since we're determining now
    reg %AX, &h3000		   'use DOS function 30 hex to get the
    call interrupt &h21		   '  DOS version number in register AX
    if (reg(%AX) AND &h00FF) >= 3 then     'we have DOS 3.00 or above
      reg %AX, &hAB00                      'so check to see if BMULTI loaded
      call interrupt &h2F
      if (reg(%AX) AND &h00FF) = 77 then
	BMULTIPresent% = 1		   'it is loaded, so flag it
      else
	BMULTIPresent% = 0		   'otherwise set flag to zero
      end if
    end if
  end if
else				'BTRIEVE handler isn't loaded, so warn user
  RetStatus% = %NoBTRIEVEErr
  poke$ &h90, CriticalErrorVec$	'restore critical error handler
  def seg			'and PB default data segment
  exit sub			'then quit
end if

if len(FCBPosBlock$) < %FCBPosSize then	'make sure the passed FCBPosBlock$
  RetStatus% = %FCBPosLenErr		'  is long enough to hold FCB and
					'  position info -- quit if not
  poke$ &h90, CriticalErrorVec$		'restore critical error handler
  def seg				'and PB default data segment
  exit sub
end if


'Now set up 14-word parameter block for the BTRIEVE interrupt

ParamBlock%(%DBOfst) = cvi(mkl$(strptr(DataBuffer$)))	'offset and segment
ParamBlock%(%DBSeg) = cvi(mkl$(strseg(DataBuffer$)))	'of data buffer

ParamBlock%(%DBLength)  = DataBufLen%			'data buffer length

ParamBlock%(%FCBOfst) = cvi(mkl$(strptr(FCBPosBlock$))) 'offset and segment
ParamBlock%(%FCBSeg) = cvi(mkl$(strseg(FCBPosBlock$)))  'of FCB block

ParamBlock%(%PosOfst) = ParamBlock%(%FCBOfst) + 38	'offset and segment
ParamBlock%(%PosSeg) = ParamBlock%(%FCBSeg)		'of position block

ParamBlock%(%OpCode) = Operation%		'BTRIEVE operation code

ParamBlock%(%KBOfst) = cvi(mkl$(strptr(KeyBuffer$)))	'offset and segment
ParamBlock%(%KBSeg) = cvi(mkl$(strseg(KeyBuffer$)))	'of key buffer

ParamBlock%(%KeyInfo) = len(KeyBuffer$)+(KeyNumber%*256) 'key info word

ParamBlock%(%StatOfst) = cvi(mkl$(varptr(RetStatus%)))	'offset and segment
ParamBlock%(%StatSeg) = cvi(mkl$(varseg(RetStatus%)))	'of status variable

ParamBlock%(%IfaceID) = &h6176				'interface ID


'Now do the interrupt with DS:DX pointing to the parameter block

reg %DX, varptr(ParamBlock%(0))
reg %DS, varseg(ParamBlock%(0))

if BMULTIPresent% = 0 then		'BMULTI not present, so use INT 7B
  call interrupt &h7B
else
  do					'use BMULTI to do it
    if BMULTIProcessID% = 0 then	'get process ID if haven't yet
      reg %AX, &hAB01
    else
      reg %AX, &hAB02			'here if we have process ID -- need
      reg %BX, BMULTIProcessID%		'  to set it now
    end if
    call interrupt &h2F				  'invoke BMULTI
    if (reg(%AX) AND &h00FF) = 0 then exit loop   'go on if done processing
    reg %AX, &h0200				  'otherwise allow task
    call interrupt &h7F				  '  switch and try request
  loop						  '  again
  if BMULTIProcessID% = 0 then BMULTIProcessID% = reg(%BX)  'assign proc ID
end if

  DataBufLen% = ParamBlock%(%DBLength)	'pass new data buffer length back


'Now restore critical error handler vector and PB's default data segment

poke$ &h90, CriticalErrorVec$
def seg

end sub
```

## EMSFRM.BAS

```bas
'EMS analysis program for PowerBASIC #2.00

'This program determines whether Expanded Memory (EMS) is available on
'your system.  If so, it displays the segment of the "page frame".  The
'page frame is the 64K of real mode memory through which EMS is accessed.
'If your EMS driver locates the page frame below segment A000 (hex), the
'total memory available to PowerBASIC is actually reduced due to memory
'fragmentation.  It is best not to use such an EMS driver with PowerBASIC.

%AX = 1: %BX = 2: %ES = 9	'register equates for REG
memlimit& = 640 * 1024 / 16

def fndigs$(h%) = right$("000"+hex$(h%),4)

cls
print "EMSFRM: EMS Page Frame Analyzer for PowerBASIC #2.00": print

reg %AX, &h3567
call interrupt &h21		'check for EMS presence
def seg = reg(%ES)
if peek$(10,8)<>"EMMXXXX0" then goto NoEMS

reg %AX, &h4100
call interrupt &h67		'get EMS page frame in BX, status in AH
if (reg(%AX) AND &h0FF00) <> 0 then goto NoEMS

print "Your system contains EMS memory.  The page frame is located at"
print "segment ";fndigs$(reg(%BX));" (hex).  PowerBASIC will use this 64K ";
print "frame to store"
print "the source file that is being compiled.": print

				'here if we have EMS -- now check page frame
pframe& = cvl(mki$(reg(%BX))+chr$(0,0))
if pframe& < memlimit& then	'page frame in low memory -- useless
  print "Since the page frame is located in the main 640K of memory (below"
  print "segment A000 hex), using the EMS driver that is currently present in"
  print "your system will actually reduce the memory available to PowerBASIC"
  print "during compilation, due to memory fragmentation.  In order to make"
  print "better use of your resources, you should install an EMS driver which"
  print "places its page frame at or above segment A000."
else				'page frame in high memory -- okay
  print "You may wish to run DOS' CHKDSK program before and after loading"
  print "your EMS driver, in order to determine how much of your main 640K"
  print "memory the driver uses.  If your driver requires a large portion"
  print "of memory (48-64K for example), you may not gain much additional"
  print "compilation space by using your EMS with PowerBASIC."
end if

end

NoEMS:

print "Your system does not appear to contain any EMS memory."
end
```

## EMSINFO.BAS

```bas
'EMS analysis program for PowerBASIC #2.00

'This program determines whether Expanded Memory (EMS) is available on
'your system.  If so, it displays the segment of the "page frame".  The
'page frame is the 64K of real mode memory through which EMS is accessed.
'If your EMS driver locates the page frame below segment A000 (hex), the
'total memory available to PowerBASIC is actually reduced due to memory
'fragmentation.  It is best not to use such an EMS driver with PowerBASIC.


'Please note that I have modified the original version of EMSFRM and
'shown how to get some more EMS information.  I "lifted" the code from
'some assembly programs I has lying around.  -Rober Barrett

%AX = 1: %BX = 2: CX = 3: %DX = 4: %SI = 5: %DI = 6
%BP = 7: %DS = 8: %ES = 9% 'register equates for REG

memlimit& = 640 * 1024 / 16
def fndigs$(h%) = right$("000"+hex$(h%),4)

cls
print "EMSFRM: EMS Page Frame Analyzer for PowerBASIC #2.00": print

reg %AX, &h3567
call interrupt &h21		'check for EMS presence
def seg = reg(%ES)
if peek$(10,8)<>"EMMXXXX0" then goto NoEMS

reg %AX, &h4100
call interrupt &h67		'get EMS page frame in BX, status in AH
if (reg(%AX) AND &h0FF00) <> 0 then goto NoEMS

print "Your system contains EMS memory.  The page frame is located at"
print "segment ";fndigs$(reg(%BX));" (hex).  PowerBASIC will use this 64K ";
print "frame to store"
print "the source file that is being compiled."
				'here if we have EMS -- now check page frame
pframe& = cvl(mki$(reg(%BX))+chr$(0,0))
if pframe& < memlimit& then	'page frame in low memory -- useless
  print "Since the page frame is located in the main 640K of memory (below"
  print "segment A000 hex), using the EMS driver that is currently present in"
  print "your system will actually reduce the memory available to PowerBASIC"
  print "during compilation, due to memory fragmentation.  In order to make"
  print "better use of your resources, you should install an EMS driver which"
  print "places its page frame at or above segment A000."
else				'page frame in high memory -- okay
  print "You may wish to run DOS' CHKDSK program before and after loading"
  print "your EMS driver, in order to determine how much of your main 640K"
  print "memory the driver uses.  If your driver requires a large portion"
  print "of memory (48-64K for example), you may not gain much additional"
  print "compilation space by using your EMS with PowerBASIC."
end if
'***************************************************************************
'                             NEW CODE ADDED HERE
'***************************************************************************

reg %AX, &h4200                 'get available EMS pages
call interrupt &h67
NumberofPages = reg(%BX)        'available pages in BX
TotalPages = reg(%DX)           'total pages in DX

print "Your system has a total of";TotalPages;"EMS pages with";NumberOfPages
print "of them available at this moment"
print

'---------------------------------------------------------------------------

reg %AX, &h4000     'Check to see if EMS OK, if AL=0 then OK
call interrupt &h67
if (reg(%AX) AND &h0FF00) = 0 then
  print "EMS reports that it is OK"
else
  print "EMS does not report OK"
end if

'---------------------------------------------------------------------------

reg %AX, &h4600     'Get EMS version (returned in AX)
call interrupt &h67
EMSVersion$ = hex$(reg(%AX))
EMSVersion$ = left$(EmsVersion$,1) + "." + right$(EMSVersion$,1)
print "EMS version number is ";EMSVersion$

'---------------------------------------------------------------------------

reg %AX, &h4B00     'Get number of handles in use (from BX)
call interrupt &h67
NumberofHandles = reg(%BX)
print
print "There are currrently";NumberofHandles;"handles in use:"

for x% = 1 to NumberofHandles
  reg %AX, &h4C00
  reg %DX, x%
  call interrupt &h67
  HandleSize = reg(%BX)
  if x% = 1 then HandleSize = HandleSize + 1
  print using "Handle:##     Pages in use:###";x%,HandleSize
next x%

'As to why I add 1 to the size of the first handle, I can only say that
'other programs of this type always reported the first handle as being one
'larger than my program did until I added the part to add 1 to its size.
'Also, this makes the numbers of pages in use per handle add up to the
'total number of pages in use as reported by the EMS manager.  Given that
'I know little/nothing about EMS, it could very well be that the EMS manager
'uses 1 page (the page frame?) for overhead. -Robert Barrett

'***************************************************************************
'                           END OF ADDED CODE
'***************************************************************************
end

NoEMS:

print "Your system does not appear to contain any EMS memory."
end
```

## EQUIP.BAS

```bas
' An example of $LINK and OBJ code working with PowerBASIC
' by Barry Erick 75300,214

				'First a debugger note:

				' DO NOT F7 (step) OR F8 into the
				' $LINK or any Procs or functions in it.
				'Place the cursor on the line following
				' it and F4 to that spot.
				' Also... if you use the debugger, the
				' $LINK MUST be at the end of the code
 $COMPILE EXE			'Make a EXE file from this
 $LIB ALL OFF			'We are not going to use anything in
				' the LIB options we can turn off,
				' so turn them off. Also, I already
				' have this bug free, so turn off the
				' error checking code.
 $ERROR ALL OFF			'Also, we can trim it futher by not
				' allowing breaking out
 $OPTION CNTLBREAK OFF		' and we don;t need an Dimming, so
 $OPTION AUTODIM OFF		'This is not a Com program, so
 $COM 0				' nor will it play music so
 $SOUND 0                       'Since we don't use much string
				' space, we can make it rather small
 $STRING 1			' a 1060 byte string segment
 $FLOAT EMULATE			'And the smallest math package since
				'we don't need the best math
				'All of these Metastatements will
				' greatly reduce the size of the
				' .EXE file

 DEFINT a-z 			'Make Integers default
				'Since PB does not know the contents
				' of Equip.OBJ, we must tell it by:
 DECLARE SUB EQUIPMENT(INTEGER,INTEGER,INTEGER,INTEGER)
				'A Debugger Note: DO NOT F7 into this
				' call. Either F8 or place the cursor
				' on the PRINT line and use F4
				'Now we can call the Procedure
 CALL Equipment(a,b,c,d)	' with 4 integers.
				'Since we are only returning values
				' in a,b,c, and d, we don;t care what
				' they are on entry. On exit they will
				'hold ConvMem%,Printers%,ComPorts%,
				' and GameAdapters%
				'Now, print out the findings
 PRINT "I have detected that this computer has ";
 PRINT USING "###k ";a;
 PRINT "conventional memory."
 PRINT "You have";b;"printer";
 IF b <> 1 THEN PRINT "s";
 PRINT " attached and";c;"com port";
 IF c <> 1 THEN PRINT "s";
 PRINT
 PRINT "You have ";
 j$ = "game port"
 SELECT CASE d
        CASE 0
             PRINT "no ";
             PRINT j$;"s";
        CASE 1
             PRINT "one ";
             PRINT j$;
        CASE 2
             PRINT "two ";
             PRINT j$;"s";
        CASE 3
             PRINT "three ";
             PRINT j$;"s";
        CASE 4
             PRINT "four ";
             PRINT j$;"s";
        CASE ELSE
             PRINT d;
             PRINT j$;"s";
 END SELECT
 PRINT "."
 END				'Be sure to END so the debugger
				' won't touch the $LINK metastatement
 $LINK "equip.obj"		'be sure this is in the same
```

## RMEX079.BAS

```bas
'Reference Manual Example Page 79
CLS
'Set up trap for processing COM input
ON COM(1) GOSUB GetComInput

'Allocate a 5K array to store input
DIM ComPortInput$( 5*1024 )

'Allocate head and tail pointers
HeadPtr% = 0 : TailPtr% = 0
COM(1) ON                       'turn COM input trapping on
$COM 1024                       'set up 1K input buffer
OPEN "COM1:" AS #1              'open COM1 with all default settings
PRINT "Press any key to terminate the program..."
WHILE NOT INSTAT                'if buffer isn't empty, display input
  IF TailPtr% <> HeadPtr% THEN
    PRINT "COM Port input: "; COMPortInput$( TailPtr% )
    TailPtr% = TailPtr% + 1     'step to next spot in buffer
  END IF
  LOCATE 2,1 : PRINT TIME$
WEND
CLOSE
END

'Routine to COM port interrupt
GetCOMInput:
  'Read a line of input from COM port buffer
  INPUT #1, COMPortInput$(HeadPtr%)
HeadPtr% = HeadPtr% + 1         'advance buffer pointer
RETURN
```

## RMEX085.BAS

```bas
OPEN "R", #1, "CVISLD1.DTA", 18
'Set up random-access file fields
MAP #1, 2 AS IntVar$$, 4 AS LongIntVar$$,_
	4 AS SinglePreVar$$, 8 AS DoublePreVar$$

'Write data to file, convert it, and assign it
'to the buffer before writing it to the data file
FOR I% = 1 TO 5
  IntVar$$ = MKI$(I%)
  LongIntVar$$ = MKL$(20^I%)
  SinglePreVar$$ = MKS$(COS(I%))
  DoublePreVar$$ = MKD$(COS(I%)^I%)
  PUT #1,I%
NEXT I%
FOR I% = 1 TO 5
  GET #1, I%
  PRINT CVI(IntVar$$);CVL(LongIntVar$$),_
	CVS(SinglePreVar$$), CVD(DoublePreVar$$)
NEXT I%
CLOSE #1
END
```

## RMEX106.BAS

```bas
'Switch into medium resolution graphics mode
SCREEN 1
House$ = "U20 G5 E20 F20 H5 D20 L30"
DRAW House$
DRAW "BE3"
DRAW "P1,3"
FOR I% = 1 TO 280 STEP 40
  DRAW "BM = " + VARPTR$(I%) + ",40"
  DRAW House$
NEXT I%
END
```

## RMEX122.BAS

```bas
'Reference Manual Example, Page 122.
'
'*************************************************************

$LIB ALL OFF
$ERROR ALL OFF
CLS

'open a random-access file
OPEN "R", #1,"CVISLD.DTA",18
'make two field defintions for each field
FIELD #1, 2 AS IntegerVar$,   4 AS LongIntVar$,_
	  4 AS SinglePreVar$, 8 AS DoublePreVar$
FIELD #1, 2 AS A$, 4 AS B$, 4 AS C$, 8 AS D$
MaxInt% = 32767
'write some data to the file
FOR I% = 1 TO 5
  'convert the data and assign it to the
  'buffer before writing it to the data file
  LSET IntegerVar$ = MKI$(I%)
  LSET LongIntVar$ = MKL$(I% + CLNG(MaxInt%))
  LSET SinglePreVar$ = MKS$(I% * CSNG(MaxInt%))
  LSET DoublePreVar$ = MKD$(MaxInt%^I%)
  PUT #1,I%
NEXT I%
FOR I% = 1 TO 5            'read data from file
  GET #1, I%               'display it onscreen
  PRINT CVI(A$); CVL(B$); CVS(C$); CVD(D$)
NEXT I%
CLOSE #1                   'close the file
END                        'end the program
```

## RMEX145.BAS

```bas

StatusReg% = INP( &H61 )             'read value in port 61H
StatusReg% = StatusReg% AND &H00FC
'mask value read in and make audible tone
FOR J = 1 TO 1000
  StatusReg% = StatusReg%  XOR 2     'toggle speaker
  OUT &H61,StatusReg%                'output new status
  DELAY .001
NEXT J
END
```

## RMEX160.BAS

```bas
' draw a diagonal line across the screen
SCREEN 1,0
LINE (0,0) - (319,199)
' draw a horizontal dashed line
LINE (0,100) - (319,100),,,&HCCCC
' draw a 50-pixel square filled with color 2
' with the upper left-hand corner at (10,20)
LINE (10,20) - (60,70), 2, BF
' draw a large "B"
READ x,y
PSET (x,y)             'set the LPR
FOR n = 1 TO 11
  READ x,y
  LINE - (x,y)
NEXT n
DELAY 2
END

DATA 10,20, 50,20, 55,25, 55,40, 50,45, 10,45
DATA 50,45, 55,50, 55,65, 50,70, 10,70, 10,20
```

## RMEX173.BAS

```bas
CLS
MAP PDATA$$*37, 10 AS NAMES$$, 10 AS ADDRESS$$,_
    10 AS CITY$$, 2 AS STATE$$, 5 AS ZIP$$
PDATA$$ = "Fred Jones12 34th StStockvilleIL90123"
PRINT PDATA$$: PRINT CITY$$
STATE$$ = "CA"
PRINT PDATA$$
END
```

## RMEX174.BAS

```bas
CLS
x = 10
DIM PDATA$$(x), NAMES$$(x), ADDRESS$$(x), CITY$$(x), STATE$$(x), ZIP$$(x)
MAP PDATA$$()*37, 10 AS NAMES$$(), 10 AS ADDRESS$$(),_
    10 AS CITY$$(), 2 AS STATE$$(), 5 AS ZIP$$()
PDATA$$(1) = "Fred Jones12 34th StStockvilleIL90123"
PRINT PDATA$$(1): PRINT CITY$$(1)
STATE$$(1) = "CA"
PRINT PDATA$$(1)
END
```

## RMEX175.BAS

```bas
PRINT FRE(-1)
MEMSET ENDMEM - &H80
PRINT FRE(-1)
END
```

## RMEX182.BAS

```bas
MTIMER
pi# = ATN(1) * 4
ElapsedTime! = MTIMER
PRINT USING "It took ##### microseconds to calculate the value of PI.";ElapsedTime!
END
```

## RMEX195.BAS

```bas
FUNCTION PForKey$(Msg$)
  'Waits for a keystroke and returns value to caller.
  PRINT Msg$, "Press any key to continue..."
  PRINT
  WHILE NOT INSTAT:WEND
  PForKey$ = INKEY$
END FUNCTION

SUB SequentialOutput
  'The file is opened for sequential output,
  'and some data is written to it.
  KeyP$ = PForKey$("Now for some sequetial output")
  OPEN "OPEN.DTA" FOR OUTPUT AS #1
  IntegerVar% = 12345
  TempStr$ = "History is made at night."
  WRITE #1, TempStr$, IntegerVar% * 2, TempStr$, IntegerVar% \ 2
  CLOSE 1
END SUB

SUB SequentialAppend
  'The file is opened for sequential output, and
  'data in this case is added to the end of file.
  KeyP$ = PForKey$("Now to append some more stuff")
  OPEN "OPEN.DTA" FOR APPEND AS #1
  IntegerVar% = 32123
  TempStr$ = "I am not a number!"
  WRITE #1, TempStr$, IntegerVar% * 0.2
  CLOSE 1
END SUB

SUB SequentialInput
  'The file is opened for sequential input,
  'and data read is displayed onscreen
  KeyP$ = PForKey$("Now to read it back" )
  OPEN "OPEN.DTA" FOR INPUT AS #1
  LINE INPUT #1, TempStr$
  PRINT TempStr$
  PRINT
  TempStr$ = ""
  WHILE NOT EOF(1)
    TempStr$ = TempStr$ + INPUT$(1,1)
  WEND
  PRINT TempStr$
  PRINT
  CLOSE 1
  KeyP$ = PForKey$("")
END SUB

SUB BinaryIO
  'The file is opened for Binary I/O.  Data is read using
  'GET$.  SEEK explicitly moves the file pointer to the end
  'of file, and the same data is written back to the file.
  KeyP$ = PForKey$("Now for Binary input and output" )
  OPEN "OPEN.DTA" FOR BINARY AS #1
  TempStr$ = ""
  WHILE NOT EOF(1)
    GET$ 1,1,Char$
    TempStr$ = TempStr$ + Char$
  WEND
  PRINT TempStr$
  PRINT
  SEEK 1, LOF(1)
  FOR I% = 1 TO LEN( TempStr$ )
    PUT$ 1, MID$( TempStr$, I%, 1 )
  NEXT I%
  CLOSE 1
  KeyP$ = PForKey$("")
END SUB

SUB RandomIO
  'Open file for random I/O.  Use MAP to declare a buffer to
  'hold the data that is written and read.  GET and PUT read
  'and write the data.  Note that before GET is performed, the
  'data to be stored in the file's buffer is assigned to the
  'MAPped flex string variable.
  KeyP$ = PForKey$("Now for some random I/O" )
  OPEN "OPEN.DTA" AS #1 LEN = 1
  MAP 1,1 AS Char$$
  TempStr$ = ""
  TempSize% = LOF(1)
  'using GET, read in the entire file
  FOR I% = 1 to TempSize%
    GET 1, I%
    TempStr$ = TempStr$ + Char$$
  NEXT I%
  'PUT copies the data in reverse into the random-access file.
  FOR I% = LEN( TempStr$ ) TO 1 STEP -1
    Char$$ = MID$(TempStr$, I%, 1 )
    PUT 1, LOF(1)
  NEXT I%
  CLOSE 1
END SUB

CLS
CALL SequentialOutput
CALL SequentialAppend
CALL SequentialInput
CALL BinaryIO
CALL RandomIO
END
```

## RMEX198.BAS

```bas
'Reference Manual Example Page 198
CLS

$COM 1024                       'set up 1K input buffer
OPEN "COM1:300,n,8,1,DS,RS,CS,CD" AS #1 LEN = 1
PRINT "Press any key to terminate the program..."
'while a key hasn't been pressed
WHILE NOT INSTAT
  'if there is any input available
  IF LOC(1) <> 0 THEN
    'read any info available in the COM port buffer
    COMPortInput$ = INPUT$(LOC(1), #1)
    'display input
    PRINT "COM Port input: "; COMPortInput$
  END IF
WEND
CLOSE 1
END
```

## RMEX230.BAS

```bas
OPEN "RANDOM.DTA" FOR RANDOM AS #1 LEN = 12
MAP #1, 10 AS FInputName$$, 2 AS FLuckyNumber$$
FOR Record% = 1 TO 3
  INPUT "Name"; FInputName$$
  INPUT "Lucky Number"; Number%
  FLuckyNumber$$ = MKI$(Number%)
  PUT #1, Record%
NEXT Record%
PRINT:PRINT "THE DATA STORED WAS: "
FOR Record% = 1 TO 3
  GET #1, Record%
  PRINT FInputName$$; CVI(FLuckyNumber$$)
NEXT Record%
CLOSE #1
END
```

## RMEX232.BAS

```bas
CLS
SCREEN 2
CIRCLE (160,87), 86
PAINT (160,87), 2
'Create an array to store the screen data
'and GET a portion of the screen into it.
DIM Buffer%(0:3589)
GET (0,0) - (319,174), Buffer%

'Copy the array to a memory image file
DEF SEG = VARSEG(Buffer%(0))
BSAVE "SCREEN.FIL", VARPTR(Buffer%(0)), 7180
CLS

'Reload the buffer array with screen data
DEF SEG = VARSEG(Buffer%(0))
BLOAD "SCREEN.FIL", VARPTR(Buffer%(0))
'PUT the image somewhere else on the screen
PUT (320,0), Buffer%
WHILE NOT INSTAT:WEND
END
```

## RMEX282.BAS

```bas
' switch into medium-resolution graphics mode
SCREEN 1
House$ = "U20 G5 E20 F20 H5 D20 L30"
DRAW House$
DRAW "BE3"
DRAW "P1,3"
FOR I% = 1 TO 280 STEP 40
  DRAW "M = " + VARPTR$(I%) + ",40"
  DRAW House$
NEXT I%
END
```

## RMEX288.BAS

```bas
'set to medium-resolution graphics mode
SCREEN 1,0
PRINT " This is a sample of medium-res graphics mode."
DELAY 3
'using WIDTH, set to high-resolution graphics
WIDTH 80
PRINT " This is a sample of hi-res graphics mode."
DELAY 3
'set back to medium resolution graphics mode
WIDTH 40
PRINT " Note, the letters are bigger in medium graphics mode."
DELAY 3
SCREEN 0,1                  'text mode
WIDTH 80
PRINT " This is 80-character text mode."
DELAY 3
WIDTH 40                    '40-character text mode
PRINT " This is 40-character text mode."
DELAY 3                     'back to 80-character text mode
WIDTH 80
'Ask if user's printer can continue the example
INPUT " Are EPSON printer codes supported? (Y or N)"; ans$
IF UCASE$(ans$) <> "Y" THEN END
LPRINT CHR$(15)             'set compressed type
WIDTH "LPT1:",130           'set logical WIDTH
LPRINT "Testing in compressed mode set to 130 columns.";
LPRINT " The same line continued to the end of the page."
LPRINT CHR$(18)             'reset physical WIDTH
WIDTH "LPT1:",80            'and normal type
END
```

## RMEX290.BAS

```bas
SCREEN 1                     'set med-res graghics mode
pi = ATN(1) * 4              'calculate pi
VAL1 = 5
VAL2 = 6
steps = 400
WINDOW (-1,1) - (1,-1)        'orgin at middle
' go around the circle once
FOR theta = 0 TO 2 * pi STEP 2 * pi/steps
  'circles with unity radius
  radius = COS(2 * theta)
  'translate to Cartesian
  x = radius * COS(VAL1 * theta)
  'coordinates with a twist
  y = radius * SIN(VAL2 * theta)
  PSET(x,y)                  'set a pixel
NEXT theta
WHILE NOT INSTAT : WEND
END
```

## RMEX291.BAS

```bas
' This loop reads data and displays it using
' PRINT and WRITE
FOR I% = 1 TO 3
  READ words$, number%
  PRINT "With PRINT: "; words$; number%
  PRINT "With WRITE: ";
  WRITE words$, number%
  PRINT
NEXT I%
DATA " HELLO ",10 ," HOW ARE ",20 ," YOU ",30
END
```

## TWORD.BAS

```bas
'Test word
'Read a text file and count the number of words of length 1, 2,
'3, and so on.  This program contains intentional bugs.  Use it
'in conjunction with the PowerBasic User's Guide to learn
'the PowerBasic integrated debugger.
'
MaxWordLen = 16    'count words up to a length of 16 characters
			    'longer words will go into Overlong
DIM WordLength(MaxWordLen)  'the array used to hold the counts
Blank$ = CHR$(32)           'a space marks the end of a word.

PRINT "Warning: This is a program intended for use in a practice"
PRINT "session of the PowerBasic debugger.  If you are not"
PRINT "running this program in the integrated debugging
PRINT "environment, press Ctrl-Break now.  See the debugging"
PRINT "chapter in the PowerBasic User's Guide for details."
PRINT

WHILE InFile$ = ""
  LINE INPUT "Enter the name of the input file: ";InFile$
  IF InFile$ <= STRING$(LEN(InFile$),32) THEN InFile$=""
  IF InFile$ = "" THEN BEEP:PRINT "You must enter a file name!"
WEND

OPEN "FYLE",1,InFile$
'If the file can't be opened, the user will get an error message.

WHILE NOT(EOF(1))            'read the file until nothing is left
  LINE INPUT #1,FirstString$ 'get a line
  PRINT FirstString$         'display it
  WHILE FirstString$<>""
    GOSUB GetAWord           'pull a word for FirstString$ and
			     'put it in SecondString$
    Test = LEN(b$)
    IF Test <= 16 THEN
      WordLength(Test) = WordLength(Test) + 1
    ELSE
      Overlong = Overlong + 1
    END IF
  WEND
WEND

CLOSE 1

PRINT "Length Count"
FOR Count% = 1 TO 16
  PRINT Count%,WordLength(Count%)
NEXT Count%
PRINT "Greater";OverLong
END

GetAWord:
  position = INSTR(FirstString$,Blank$) 'a word is a sequence of
					'characters ended by a
					'blank or the end fo the line
  IF position = 0 THEN
    'the word is the remainder of the line
    SecondString$ = FirstString$:FirstString$ = ""
  ELSE
    'pull the word from the line
    SecondString$ = LEFT$(FirstString$,position-1)
  END IF
RETURN
```

## UMEX227.BAS

```bas
'User's Manual Example, Page 227.

' demo of use of multiple pages
SCREEN 0,0,0,0
PRINT "Start out on screen 0"
x$ = INPUT$(1)
SCREEN 0,0,1,1
LOCATE 1,1
PRINT "Now jump to screen 1"
CALL fillscreen
x$ = INPUT$(1)
SCREEN 0,0,0,0
PRINT "Just checking that screen 0's still OK"
x$ = INPUT$(1)
SCREEN 0,0,1,1
PRINT "Now fill screen 2 before switching to it"
SCREEN 0,0,2,1
LOCATE 1,1
CALL fillscreen
x$ = INPUT$(1)
SCREEN 0,0,2,2
PRINT "Now on screen 2"
s$ = INPUT$(1)
COLOR 14,4
FOR i = 0 TO 2
  SCREEN 0,0,i,i
  LOCATE 5,30 : PRINT "Reviewing screen"; i
  x$ = INPUT$(1)
NEXT i
END

SUB fillscreen
  FOR i = 1 to 10
    PRINT STRING$(i*4,15)
    DELAY .2 'PowerBASIC's too fast--slow it down so you can see it
  NEXT i
END SUB
```

## UMEX230.BAS

```bas
'User's Manual Reference, Page 230.

'CGADEMO--demo of cga color and palette range
'Cycles through possible colors for background and palette.
DEFINT a-z
%CX = 60                       'x location of circle
%CY = 30                       'y location of circle
%RADIUS = 30
%NCIRCLE = 3
backgrd = 1
palet = 0
SCREEN 1,0
COLOR backgrd,palet            'change colors and palette
CLS
CALL drawcircles(backgrd, palet)
Letter$ = INPUT$(1)
WHILE Letter$ <> " "
  SELECT CASE UCASE$(Letter$)
  CASE "P"
    palet = (palet + 1) MOD 2
  CASE "B"
    backgrd = backgrd + 1
    IF backgrd > 31 THEN backgrd = 0
  END SELECT
  CALL drawcircles(backgrd, palet)
  Letter$ = INPUT$(1)
WEND
SCREEN 0,0 : COLOR 15,0        'reset
END

SUB drawcircles(backgrd, palet)
  COLOR backgrd, palet
  FOR i = 1 to %NCIRCLE
    CIRCLE ((i + 1) * %CX, (i + 1) * %CY), %RADIUS, i
    PAINT  ((i + 1) * %CX, (i + 1) * %CY), i, i
  NEXT i
  LOCATE 22,1
  PRINT "Color";backgrd;",";palet
  LOCATE 23,1 : PRINT "B/ackground, P/alette, or <Spacebar>"
END SUB



```

## UMEX233.BAS

```bas
'User's Manual Example, Page 234.

DEFINT a-z
SCREEN 1

CALL backgrd
CALL drawcircles            'normal--no viewpoint
X$ = INPUT$(1)

CALL backgrd                'viewport set to middle, orginal at upper left
CALL drawcircles
VIEW SCREEN (75,60)-(220,140)
X$ = INPUT$(1)

CALL backgrd                'same viewport, but original reletive to viewport
VIEW SCREEN (75,60)-(220,140)
CALL drawcircles
X$ = INPUT$(1)
CLS                         'note that only viewport is cleared
X$ = INPUT$(1)

END

SUB backgrd                 'create a noisy background
  VIEW                      'reset to full screen
  CLS
  FOR i = 1 TO 20
    c = 1 + i MOD 3
    LINE(INT(RND*50)+10,INT(RND*90)+10)-(INT(RND*50)+250,INT(RND*100)+60),c
  NEXT i
END SUB

SUB drawcircles             'draw circles and fill them
  FOR i = 1 TO 30
    x = INT(RND*80) + 80
    y = INT(RND*80) + 40
    c = 1 + i MOD 3         'cycle through colors
    CIRCLE (x,y), INT(RND*15)+5,c
    PAINT (x,y),c
  NEXT i
END SUB

```

## UMEX235.BAS

```bas
'User's Manual Example, Page 235.

DEFINT A-Z
DEF SEG = &HB800
FOR COUNT = 1 TO 500
  ATTR   = INT( RND*255)
  CHAR   = INT( RND*32 )
  ROW    = INT( RND*25 )
  COL    = INT( RND*80 )
  OFFSET = (ROW * 160) + (COL * 2)
  POKE OFFSET, CHAR
  POKE OFFSET+1, ATTR
NEXT COUNT
LETTER$   = INPUT$(1)
FOR ROUND1 = 1 TO 50
  BACKGRD = INT( RND*8)
  NEWCHAR = INT( RND*31 )
  ROW     = INT( RND*15 )
  COL     = INT( RND*70 )
  FOR ROWCOUNT = ROW TO ROW + 10
    FOR COLCOUNT = COL TO COL + 10
      OFFSET = ROWCOUNT * 160 + COLCOUNT * 2
      ATTR   = PEEK(OFFSET + 1) MOD 16 + BACKGRD * 16
      POKE (OFFSET + 1), ATTR
      POKE (OFFSET), NEWCHAR
    NEXT COLCOUNT
  NEXT ROWCOUNT
NEXT ROUND1
```

## UMEX238.BAS

```bas
'User's Manual Example, Page 238.

'T4.BAS--T4 bacteripphage animation demonstration
DEFINT a-z                'all variables are integers by default
DIM T42!(244),T4!(424)    'dimension two arrays
SCREEN 1, 0               'select screen modes
COLOR 0, 0                'select colors
'T4 is a bacteriophage-- a tiny organism that attacks bacteria.
'It reporduces by attaching to a bacterium, injecting its DNA,
'and taking over the reproductive system of the bacterium.
'This animation demonstrates the sequence graphically.
'Draw a bacterium: a big ellipse at the bottom of the screen.
CIRCLE (160,180),160,1,,,4/30
PAINT (160,170),1,1       'fill it in
CALL drawT4               'bacteriophage definition
FOR I = 1 TO 40           'each pass, the image is lowered a little
  PUT (24 + I * 4, 22 + I * 2), T4!, XOR  'draw position 1
  DELAY 0.2                               'admire it
  PUT (24 + I * 4, 22 + I * 2), T4!, XOR  'XOR to erase it
  PUT (12 + I * 4, 37 + I * 2), T4!, XOR  'replace it with position 2
  DELAY 0.2                               'admire some more
  PUT (12 + I * 4, 37 + I * 2), T4!, XOR  'this too shall pass
NEXT I

' At end of loop, nothing is on the screen, so we need to show
' the first image one more time.
PUT (24 + I * 4, 22 + I * 2), T4!, XOR
I = I + 1
DELAY 1
PAINT (I * 4 + 34, I * 2 + 40), 0, 3
DELAY 0.4
CIRCLE (160,180), 160,3,,,4/30
PAINT (160,170),2,3       'Infection takes over
DELAY 1
END

SUB drawT4
  shared T4!(), T42!()
  '----- first position of T4
  DRAW "bm 20,50 c3"
  DRAW "m-5,-9 m+0,-9 m+7,-8 m+7,0 m+7,+8 m+0,+9 m-5,+9 m-11,+0"
  PAINT (24,40),2,3
  LINE (18,50)-(33,52),3,BF
  LINE (23,53)-(28,59),3,BF
  LINE (20,59)-(31,63),3,BF
  DRAW "bm 22,63 m-6,+12 bm 24,63 m-4,+12 bm 25,65 m+6,+12"
  DRAW "bm 26,63 m+4,+12 bm 29,63 m+6,+12"
  GET (14,20)-(42,80),T4!
  PUT (14,20),T4!,XOR
  '----- second position
  DRAW "bm 20,54 c3"
  DRAW "m-10,-7 m+0,-7 m+10,-4 m+12,0 m+10,+4 m+0,+7 m-10,+7 m-12,+0"
  PAINT (24,45),2,3
  LINE (18,54)-(33,56),3,BF
  LINE (23,57)-(28,59),3,BF
  LINE (20,59)-(31,63),3,BF
  DRAW "bm 22,63 m-19,+5 bm 24,63 m-14,+7"
  DRAW "bm 26,63 m+14,+7 bm 28,63 m+19,+5"
  GET (2,35)-(50,75),T42!
  PUT (2,35),T42!,XOR
END SUB
```

## UMEX258.BAS

```bas
'User's Manual Example, Page 258.
CLS

DEFINT a-z                        'integer variables are smaller and faster
$COM 1024
OPEN "COM1: 1200,N,8,1" AS #1 LEN = 1024
echo = 1
WHILE (1)                         'loop forever
  WHILE NOT INSTAT                'as long as no key has been pressed
    IF LOC(1) > 0 THEN
      stuff$ = INPUT$(LOC(1),#1)  'read incoming characters
      PRINT stuff$;               'no carriage returns unless sent by
    END IF                        'transmitter
  WEND
  WHILE INSTAT                    'while there are characters at the keyboard
    myinput$ = INKEY$             'get them
    PRINT #1, myinput$;           'send typed characters
    IF echo THEN PRINT myinput$   'display them--maybe unnecessary
  WEND
WEND                              'check for more incoming characters
END
```

## UMEX262.BAS

```bas
'User's Manual Example, Page 262.
CLS

DEFINT a-z                        'integer variables are smaller and faster
$COM 1024
OPEN "COM1: 1200,N,8,1" AS #1 LEN = 1024
echo = 1
WHILE (1)                         'loop forever
  WHILE NOT INSTAT                'as long as no key has been pressed
    IF LOC(1) > 0 THEN
      stuff$ = INPUT$(LOC(1),#1)  'read incoming characters
      PRINT stuff$;               'no carriage returns
				  'unless sent by transmitter
      If already THEN PRINT #3, stuff$;  'save to disk file
    END IF
  WEND
  WHILE INSTAT                    'while there are characters at the keyboard
    myinput$ = INKEY$             'get them
    IF myinput$ = CHR$(20) THEN GOSUB ReadDiskFile                '^T
    IF myinput$ = CHR$(18) THEN GOSUB WriteDiskFile               '^R
    IF myinput$ = CHR$(3)  THEN CLOSE : END                       '^C
    IF myinput$ = CHR$(5)  THEN echo = ABS(echo-1):myinput$ = ""  '^T
    PRINT #1, myinput$;           'send typed characters
    IF echo THEN PRINT myinput$;  'display them--maybe unnecessary
  WEND
WEND                              'check for more incoming characters

ReadDiskFile:
  'a subroutine to read a disk file and transmit it
  LINE INPUT "Name of the disk file: ";f$
  OPEN "r", 2, f$, 1024
  FIELD #2, 1024 AS disk$
  r& = LOC(2)
  rec = r&\1024

  FOR i = 1 to rec
    GET 2,i
    PRINT #1, disk$;
  NEXT i

  IF r& MOD 1024 <> 0 THEN
    GET 2, rec+1
    PRINT #1, LEFT$(disk$,r& MOD 1024 );
  END IF
  CLOSE 2
  myinput$ = ""
RETURN

WriteDiskFile:
  'subroutine to write received information to disk file
  'or stop that process
  myinput$ = ""
  IF already THEN
    already = 0
    CLOSE 3
    RETURN
  END IF

  already = 1
  LINE INPUT "Output file name: ";f$
  OPEN f$ FOR APPEND AS #3
RETURN
```

## UMEX300.BAS

```bas
'User's Manual Example, Page 300.
'
'Will not compile with DIM STATIC iarray%(1:n%).
'Changed $LINK "sum.obj" to $LINK "umex301.obj".
'Must compile "umex301.asm" to an .obj file.
'Added $LIB and $ERROR statements to reduce .EXE size.
'
'*************************************************************

$LIB ALL OFF
$ERROR ALL OFF

n% = 200                                    '200 elements in array
DIM iarray%(1:n%)
DECLARE FUNCTION suminteger&( INTEGER, INTEGER )
$LINK "umex301.obj"

FOR i% = 1 to n%                            'initialize iarray%()
 iarray%(i%) = i%
NEXT i%

thesum& = suminteger&( iarray%(1), n%)      'sum all 200 elements
PRINT "Array iarray%()'s sum = "; thesum&
END


```

## DEMOEX.BAS

```bas

 $compile EXE  ' says to compile this to a .exe file
 $LIB ALL OFF  ' no serial, print, or special graphic support
 $ERROR ALL OFF'no error checking

 $link "Exists.pbu" 'link in the previously created pbu
 PUBLIC MatchedFil$ 'not used in this demo, but is in the pbu
 DEFINT a-z
 CLS
 LINE INPUT "Which filename do you need to check ";filename$
   ' the next call is to the .pbu file, but no declare is
   ' needed except for your own reference.
 CALL FindVol(Filename$,FileErr%,CreateDate$,CreatTime$)
 SELECT CASE FileErr%
        CASE 0
             PRINT "I found ";UCASE$(filename$)
             PRINT "Created ";CreateDate$;
             PRINT " at ";CreatTime$
        CASE 2,18
             PRINT "No File Found."
 END SELECT
 END(FileErr%)   'pass errorlevel to a calling program if needed
```

## EXISTS.BAS

```bas
 $COMPILE UNIT  'make a unit
 ' TB - bug fixes 7/4/88 originally made 3-27-88
 ' PB Version 1/25/90 2/14/90
 ' To compile in the IDE, simply Alt-F9
 ' to compile from the command line,
 ' PBC EXISTS -CU
 ' note: to use the debugger, you must compile from the IDE
 ' as no debugging action is passed from the PBC.

 %False = 0
 %True = NOT %False

 EXTERNAL MatchedFil$'make it global

 ' the following sub, made PUBLIC, allows the main to access it

SUB FindVol(Filename$,FileErr%,CreateDate$,CreatTime$) PUBLIC
 MatchedFil$ = ""
 'set up DTA     'Barry Erick 75300,214   , B.ERICK

 REG 1, &H2F00         'get DOS's dta
 CALL INTERRUPT &H21   ' to find returned file info
 DTASegment& = REG(9)  'es
 DTAOffset&  = REG(2)  'bx
 FExist$  = Filename$+CHR$(0)     ' make it a ASCIIZ string for DOS

 ' Note the StrPtr and StrSeg. This is the major change
 ' from a TB program. In TB, we would :
 ' Def Seg
 ' StrSeg&  = PEEK(1)*256+PEEK(0)   ' Find TB's String Segment
 ' DEF SEG  = VARSEG(FExist$)       ' Look for pointer
 ' StringSegPtr&    = VARPTR(FExist$)' Point to TB's string Segment
 ' StringSegOffset& = PEEK(StringSegPtr&+2)+256 * PEEK(StringSegPtr&+3)
 ' DEF SEG              ' Restore Default Segment
 ' REG 8,StrSeg&        ' String Segment  to Reg DS
 ' REG 4,StringSegOffset&' String Seg Offset to Reg DX
 ' REG 3,&H7            ' Find all matching files Attribute
 ' REG 1,&H4E00         ' DOS Function Find First Match
 ' CALL INTERRUPT &H21  ' Just look for first matching file
 ' FileErr% = REG(1)     ' Reg AX.. 0 = no error
 ' DEF SEG  = DTASegment&

 ' But because of PB's unlimited string space, we do it this way:

 REG 8,StrSeg(FEXIST$)' String Segment  to Reg DS
 REG 4,StrPTR(FEXIST$)' String Seg Offset to Reg DX
 ' The rest is the same as a TB program, but MUCH faster
 REG 3,&H23            ' Find all matching files 'cept vol or dir
 REG 1,&H4E00         ' DOS Function Find First Match
 CALL INTERRUPT &H21  ' Just look for first matching file
 FileErr% = REG(1)     ' Reg AX.. 0 = no error
 DEF SEG  = DTASegment& 'point to the DTA
 ' Get the creation date that dos just stuck in the dta
 FOR X = 1 TO 11
     IF PEEK(DTAOffset&+x)=0 THEN EXIT FOR'none found
     MatchedFil$=Matchedfil$+CHR$(PEEK(dtaOffset& + x))
 NEXT
 IF LEFT$(MatchedFil$,1) <> CHR$(&H13) THEN
    MatchedFil$=LEFT$(MatchedFil$,8)+"."+RIGHT$(MatchedFil$,3)
 END IF
 d1! = PEEK(23+DTAOffset&)
 d2! = PEEK(22+DTAOffset&)
 CreateDate& = PEEK(25+DTAOffset&)*256+PEEK(24+DTAOffset&)
 creattime& = d1*256
 INCR creattime&,d2

 ' now start tearing apart the words returned
 hour%       = INT(CreatTime&/2048)
 hours%      = hour%
 IF hour% >12 THEN    'returned in 24 hour time, make 12 hour time
    DECR hours%,12
    pm% = %true
 ELSE
    pm% = %False
 END IF
 hour$ = MID$(STR$(hours%),2)'strip leading space
 minutes% = (CreatTime&-(CLNG(hour%)*2048))\32
 minutes$ = MID$(STR$(minutes%),2)' strip leading space
 IF LEN(minutes$)=1 THEN minutes$="0"+minutes$

 Year%       = CreateDate&\512
 Year$       = MID$(STR$(Year%+1980),2)' minimum dos date is 1/1/1980
 Month%      = (CreateDate&-(Year%*512))\32
 Month$      = MID$(STR$(Month%),2)
 Day$        = MID$(STR$(CreateDate& MOD 32),2)
 IF LEN(day$)= 1 THEN day$= "0"+day$
 IF FileErr% = 0 THEN
    CreateDate$   = Month$+"-"+Day$+"-"+Year$
    CreatTime$    = Hour$+":"+MINUTES$
    IF pm% THEN
       CreatTime$ = CreatTime$+" pm"
    ELSE
       CreatTime$ = CreatTime$+" am"
    END IF
 ELSE
    CreatTime$  = ""
    CreateDate$ = ""
 END IF
 DEF SEG
END SUB

 ' The next item is made available to outside the UNIT

 FUNCTION FileExist%(Filename$) PUBLIC
 CALL FINDVOL(FileName$,Ferr%,a$,b$)
 SELECT CASE Ferr%
        CASE 0
             FileExist% = %True
        CASE ELSE
             FILEEXIST% = 0
 END SELECT
 END FUNCTION

 ' The following is a demo
 ' The Sub does not require a DEFINT A-Z, as all variables are labeled.


 ' CLS
 ' LINE INPUT "Which filename do you need to check ";filename$
 ' CALL FindVol(Filename$,FileErr%,CreateDate$,CreatTime$)
 ' SELECT CASE FileErr%
 '	CASE 0
 '	     PRINT "I found ";UCASE$(filename$)
 '	     PRINT "Created ";CreateDate$;
 '	     PRINT " at ";CreatTime$
 '	CASE 2,18
 '	     PRINT "No File Found."
 ' END SELECT
 ' END (FileErr%)

 ' IF FileExist%(filename$)  then
    '  print "I found ";filename$
    ' END(0)
    '  else
    '  print "NotFound
    ' END(53)
    '  end if
```

## FF.BAS

```bas
     $COMPILE EXE
     $LIB ALL OFF
     $ERROR ALL OFF
     $link "FindFile.pbu"
     INPUT "File mask";mask$       'mask can be wildcards
     numfound% = 0
     a$=Findfirst$(mask$)
     IF a$="" THEN
        PRINT mask$ ;"Not found"
        END
     ELSE
        PRINT mask$;" found!"
        INCR numfound%
	PRINT USING "\               \";a$; 'print the first file
        DO
            a$=Findnext$
            IF a$="" THEN EXIT LOOP
            PRINT USING "\               \";a$;'print the rest
            INCR numfound%                  'note, you can save names
        LOOP                                'by sticking them in an
        PRINT                               'array, but for the demo, we
        PRINT numfound%-1 ;"Files found"    'just print them
     END IF
```

## FINDFILE.BAS

```bas
 ' SEE THE COMMENT BEFORE THE SAMPLE ABOUT COMPILING THIS
 ' Copr 1988, 1989 Barry Erick
 $COMPILE UNIT
 $LIB ALL OFF
 $ERROR ALL OFF

 FUNCTION Findfirst$(filn$)  public
 'Copr 1988,1989 Barry Erick
LOCAL stringsegptr&,ferr%
LOCAL DTAAtt&,DTAOff&,DTASeg&,FExist$,Fil,Fil$,Ptr

 '  Format of the DTA after a file has been found:
 '
 '      Offset      Size(bytes)    Description
 '     (D) (H)
 '       0  0       21  15       Used by DOS for find next
 '      21  15       1   1       Attribute of file found
 '      22  16       2   2       Time Stamp of file
 '      24  18       2   2       Date Stamp of file
 '      26  1A       4   4       File size in bytes
 '      30  1E      13   D       Filename and extension (asciiz)
 '
 '  Attributes:
 '     bit    0 - READ Only
 '            1 - Hidden
 '            2 - SYSTEM
 '            3 - Volume Label
 '            4 - Subdirectory
 '            5 - Archive

 ' The formats for Time and Date are:
 '  Time = Hour * 2048 + Minute * 32 + Second / 2)
 '  Date = (Year - 1980) * 512 + Month * 32 + Day)
 '
 ' see the file Exists.Bas for the routines to turn the time and date into
 ' their members

 fexist$          = filn$+CHR$(0)       ' make it a ASCIIZ string for DOS
 REG 8,strseg(fexist$)                  ' String Segment  to Reg DS
 REG 4,strptr(Fexist$)                  ' String Seg Offset to Reg DX
 REG 3,&H17                             ' Find all but vol label Attribute
 REG 1,&H4E00                           ' DOS Function Find First Match
 CALL INTERRUPT &H21                    ' Just look for first matching file
 ferr% = REG(1)                         ' Reg AX.. 0 = no error
 IF ferr% = 2 OR_
    ferr% = 18 OR_
    ferr% = 3 OR_
    ferr% = 15 THEN
    Findfirst$ = ""
    EXIT Function
 END IF
 ' Get the dta that has the filename & stuff
 REG 1,&H2F00                               ' ah = 2F (Get DTA)
 CALL INTERRUPT &h21                        ' perform dos call
 dtaseg& = REG(9)                           ' DTA segment = ES
 dtaatt& = REG(2)+&H15                      ' offset of attributes
 dtaoff& = REG(2)+&H1E                      ' offset of filename
 fil$ = ""                                  ' prepare to retrieve filename
 DEF SEG=dtaseg&                            ' set segment = DTA segment
 FOR ptr% = 0 TO 12                         ' retrieve filename
     fil% = PEEK(dtaoff& + ptr%)                  ' from DTA
     IF fil% = 0 THEN EXIT FOR
     fil$ = fil$ + CHR$(PEEK(dtaoff& + ptr%))
 NEXT ptr%
 IF (PEEK(dtaatt&) AND 16) = 16 THEN
    fil$ = "<"+fil$+">"' its a subdir ' look late to see if we really want it
 END IF
 DEF SEG                                    ' reset segment to default
 Findfirst$ = fil$
 END Function

 '[********************]

 FUNCTION Findnext$                public
 'Copr 1988,1989 Barry Erick
LOCAL fil$,dtaseg&,dtaoff&,dtaatt&,fil%,ptr%

 REG 1,&h4F00
 CALL INTERRUPT &h21
 ' return if errors and/or no files
 IF REG(1) = 18 THEN
    Findnext$ = ""
    EXIT Function
 END IF
 REG 1,&H2F00
 CALL INTERRUPT &H21
 dtaseg& = REG(9)   ' DTA segment = ES
 dtaatt& = REG(2) + 21' offset of attributes
 dtaoff& = REG(2) + 30' filename offset
 fil$ = ""          ' prepare to transfer filename
 DEF SEG=dtaseg&    ' set segment to DTA segment
 FOR ptr% = 0 TO 12
     fil% = PEEK(dtaoff& + ptr%)                    ' from DTA
     IF fil% = 0 THEN EXIT FOR
     fil$ = fil$ + CHR$(PEEK(dtaoff& + ptr%))
 NEXT ptr%
 IF (PEEK(dtaatt&) AND 16) = 16 THEN
    fil$ = "<"+fil$+">"' mark subdirs, mask later if need be
 END IF
 DEF SEG                                    ' restore default segment
 Findnext$ = fil$
 END FUNCTION

 '[********************]

 '**********************************************************************
 ' The following is a sample of how to use this                        *
 ' test findfile                                                       *
 ' This sample will not compile unless you change %NotComment to = -1  *
 '**********************************************************************

 %notcomment = 0
 $IF  %notcomment

     INPUT "mask";mask$       'mask can be wildcards
     numfound% = 0
     a$=Findfirst$(mask$)
     IF a$="" THEN
        PRINT mask$ ;"Not found"
        END
     ELSE
        PRINT mask$;" found!"
        INCR numfound%
        PRINT USING "\              \";a$; 'print the first file
        DO
            a$=Findnext$
            IF a$="" THEN EXIT LOOP
            PRINT USING "\               \";a$;'print the rest
            INCR numfound%                  'note, you can save names
        LOOP                                'by sticking them in an
        PRINT                               'array, but for the demo, we
        PRINT numfound%-1 ;"Files found"    'just print them
     END IF

 $ENDIF
```

## CLOCK.BAS

```bas
'Program Name    : Clock.bas - Read Computer's Clock, Display in Graphics
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-19-90
'Compuserve #    : GO PCVENB, Vendor #12,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,n,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172


SCREEN 9
DIM Tm(10)

' Pattern used for seven segment display
'    2
'    --
'  1| 4|3
'    --
'  5| 7|6
'    --

idle:
x = 10: y = 15
fg = 12: bg = 0
'again:
k$ = INKEY$
IF k$ = CHR$(27) THEN SYSTEM
Tm$ = TIME$
'LOCATE 10, 1: PRINT Tm$
Tm(1) = VAL(MID$(Tm$, 1, 1))
Tm(2) = VAL(MID$(Tm$, 2, 1))
Tm(3) = 10 'VAL(MID$(Tm$, 3, 1))
Tm(4) = VAL(MID$(Tm$, 4, 1))
Tm(5) = VAL(MID$(Tm$, 5, 1))
Tm(6) = 10 'VAL(MID$(Tm$, 6, 1))
Tm(7) = VAL(MID$(Tm$, 7, 1))
Tm(8) = VAL(MID$(Tm$, 8, 1))
IF Tm(1) = 1 AND Tm(2) > 3 THEN Tm(1) = 10: Tm(2) = Tm(2) - 2
FOR i = 1 TO 8
a = Tm(i)
'                     1234567
IF a = 1 THEN pat$ = "0010010"
IF a = 2 THEN pat$ = "0111101"
IF a = 3 THEN pat$ = "0111011"
IF a = 4 THEN pat$ = "1011010"
IF a = 5 THEN pat$ = "1101011"
IF a = 6 THEN pat$ = "1001111"
IF a = 7 THEN pat$ = "0110010"
IF a = 8 THEN pat$ = "1111111"
IF a = 9 THEN pat$ = "1111011"
IF a = 0 THEN pat$ = "1110111"
IF a = 10 THEN pat$ = "0000000"

'left side of seven segment
IF MID$(pat$, 1, 1) = "1" THEN LINE (x, y)-(x + 1, y + 10), fg, BF ELSE LINE (x, y)-(x + 1, y + 10), bg, BF
IF MID$(pat$, 5, 1) = "1" THEN LINE (x, y + 12)-(x + 1, y + 22), fg, BF ELSE LINE (x, y + 12)-(x + 1, y + 22), bg, BF
'top line of seven segment display
IF MID$(pat$, 2, 1) = "1" THEN LINE (x + 3, y)-(x + 19, y), fg ELSE LINE (x + 3, y)-(x + 19, y), bg

'middle line of seven segment display
IF MID$(pat$, 4, 1) = "1" THEN LINE (x + 3, y + 11)-(x + 19, y + 11), fg ELSE LINE (x + 3, y + 11)-(x + 19, y + 11), bg
'bottom line of seven segement display
IF MID$(pat$, 7, 1) = "1" THEN LINE (x + 3, y + 22)-(x + 19, y + 22), fg ELSE LINE (x + 3, y + 22)-(x + 19, y + 22), bg
'right side of seven segment
IF MID$(pat$, 3, 1) = "1" THEN LINE (x + 21, y)-(x + 22, y + 10), fg, BF ELSE LINE (x + 21, y)-(x + 22, y + 10), bg, BF
IF MID$(pat$, 6, 1) = "1" THEN LINE (x + 21, y + 12)-(x + 22, y + 22), fg, BF ELSE LINE (x + 21, y + 12)-(x + 22, y + 22), bg, BF

 x = x + 30
 NEXT i
GOTO idle
```

## DOTDISP.BAS

```bas
'Program Name    : DotDisp - Moving Dot Display
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-19-90
'Compuserve #    : GO PCVENB, Vendor #12,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,n,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172

defint a-z

'message to be displayed
a$="POWER BASIC, Spectra Publishing - Tech Support"

SCREEN 9, , 0, 0
gosub ScreenPrep
SCREEN 9, , 1, 1
gosub ScreenPrep

dsp=0:screen 9,,0,0

'Main Program Loop
 FOR z = 1 TO 7*len(a$)
 K$ = INKEY$: IF K$ = CHR$(27) THEN screen 9,,0,0:SYSTEM
  gosub display
'Char Scan and Screen Illuminate Routines
x = 0: y = 254
OY = 0: OX = 0
FOR j = 0 TO 13
OX = 0
FOR i = 0 TO 57
a = POINT(x + i+xx, y + j)  'this examines pixels, if white then paint
IF a = 15 THEN PAINT (10 + OX, 10 + OY), 14, 8 ELSE PAINT (10 + OX, 10 + OY), 0, 8
OX = OX + 10
NEXT i
OY = OY + 9
NEXT j
xx=xx+1   'read offset variable
NEXT z

screen 9,,0,0:end

Display:
if dsp=0 then screen 9,,0,1:dsp=1:return
if dsp=1 then screen 9,,1,0:dsp=0:return
return

'Routine to set up dots across screen
ScreenPrep:
LOCATE 19, 1: PRINT a$;
OY = 0
FOR j = 1 TO 14
OX = 0
FOR i = 1 TO 60
CIRCLE (10 + OX, 10 + OY), 5, 8
OX = OX + 10
NEXT i
OY = OY + 9
NEXT j
return
```

## MLOAD.BAS

```bas
'Program Name    : Mload.bas   load graphics images into bitplanes
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            :
'Compuserve #    : GO PCVENB, Vendor #12,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,n,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172


path$=""

defint a-z

nam$="ega"
screen 9,,0,0
os = &h8000
call Mload(nam$,os)
screen 9,,0,1
os = 0
call Mload(nam$,os)
screen 9,,0,0

'circle(322,95),6,15
'circle(348,95),6,15
' circle(348,115),6,15
  pset(322,95),14


Idle:
k$=inkey$:if k$=chr$(27) then system
if k$="1" then gosub k1:gosub Scankey
if k$="2" then gosub k2:gosub Scankey
if k$="3" then gosub k3:gosub Scankey
if k$="4" then gosub k4:gosub Scankey
if k$="5" then gosub k5:gosub Scankey
if k$="6" then gosub k6:gosub Scankey
if k$="7" then gosub k7:gosub Scankey
if k$="8" then gosub k8:gosub Scankey
goto idle


k1:
if key1=1 then key1=0:return
if key1=0 then key1=1:return
k2:
if key2=1 then key2=0:return
if key2=0 then key2=1:return
k3:
if key3=1 then key3=0:return
if key3=0 then key3=1:return
k4:
if key4=1 then key4=0:return
if key4=0 then key4=1:return
k5:
if key5=1 then key5=0:return
if key5=0 then key5=1:return
k6:
if key6=1 then key6=0:return
if key6=0 then key6=1:return
k7:
if key7=1 then key7=0:return
if key7=0 then key7=1:return
k8:
if key8=1 then key8=0:return
if key8=0 then key8=1:return
return

Scankey:
if key1=1 then
paint(322,95),4,15
paint(348,95),4,15
else
paint(322,95),13,15
paint(348,95),13,15
end if
if key3=1 then
paint(322,95),4,15
paint(348,95),4,15
else
paint(322,95),13,15
paint(348,95),13,15
end if
if key3=1 then
paint(322,95),4,15
paint(348,95),4,15
else
paint(322,95),13,15
paint(348,95),13,15
end if
if key4=1 then
paint(322,95),4,15
paint(348,95),4,15
else
paint(322,95),13,15
paint(348,95),13,15
end if

return



ResetColor:
y=0
for j=1 to 2
x=0
for i=1 to 8
paint (322+y,95+x),4,15
'pset(322+y,95+x),15
x=x+20
next i
y=y+26
next j
return


SUB Mload (nam$,os) STATIC
'LOADS INTO AN OFFSET AREA OF MEMORY IN BACKGROUND
DEF SEG = &HA000
OUT &H3C4, 2: OUT &H3C5, 1: BLOAD Path$ + nam$ + ".BLU", os  'load bit plane 0
OUT &H3C4, 2: OUT &H3C5, 2: BLOAD Path$ + nam$ + ".GRN", os  'load bit plane 1
OUT &H3C4, 2: OUT &H3C5, 4: BLOAD Path$ + nam$ + ".RED", os  'load bit plane 2
OUT &H3C4, 2: OUT &H3C5, 8: BLOAD Path$ + nam$ + ".INT", os  'load bit plane 3
OUT &H3C4, 2: OUT &H3C5, &HF: DEF SEG
END SUB

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2631

     Volume in drive A has no label
     Directory of A:\

    LIBRARY  DOC     30241   6-27-91  11:49a
    BTRIEV   ZIP      2688   9-18-90   8:21a
    CCTRAN   ZIP     32768   9-18-90  10:30a
    GO       BAT        28  11-13-90   9:23a
    EMSFRM   ZIP      1408   9-18-90   8:20a
    EQUIP    ZIP      2757   9-18-90   8:22a
    ERROR    ZIP     21808   9-18-90   8:25a
    EXAMP1   ZIP     17364   9-26-90   1:39p
    EXAMP2   ZIP    115355   9-26-90   1:41p
    EXISTS   ZIP     21381   9-18-90   8:48a
    FNDFIL   ZIP      4352   9-18-90   8:42a
    GRAPH1   ZIP     78352   9-20-90   7:32p
    EMSINF   ZIP      2191   9-18-90   8:19a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       TXT       861   6-27-91   1:53p
           15 file(s)     353576 bytes
                            2048 bytes free
