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

{% raw %}
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
{% endraw %}

## COCOTRAN.BAS

{% raw %}
```bas
defint a-z
dim tok$(128:224)
dim extok$(128:167)
tok$(128)=" FOR "
tok$(129)=" GO"
tok$(130)=" REM "
tok$(131)=" '"
tok$(132)=" ELSE "
tok$(133)=" IF "
tok$(134)=" DATA "
tok$(135)=" PRINT "
tok$(136)=" ON "
tok$(137)=" INPUT "
tok$(138)=" END "
tok$(139)=" NEXT "
tok$(140)=" DIM "
tok$(141)=" READ "
tok$(142)=" RUN "
tok$(143)=" RESTORE "
tok$(144)=" RETURN "
tok$(145)=" STOP "
tok$(146)=" POKE "
tok$(147)=" CONT "
tok$(148)=" LIST "
tok$(149)=" CLEAR "
tok$(150)=" NEW "
tok$(151)=" CLOAD "
tok$(152)=" CSAVE "
tok$(153)=" OPEN "
tok$(154)=" CLOSE "
tok$(155)=" LLIST "
tok$(156)=" SET "
tok$(157)=" RESET "
tok$(158)=" CLS "
tok$(159)=" MOTOR "
tok$(160)=" SOUND "
tok$(161)=" AUDIO "
tok$(162)=" EXEC "
tok$(163)=" SKIPF "
tok$(164)=" TAB("
tok$(165)=" TO "
tok$(166)="SUB "
tok$(167)=" THEN "
tok$(168)=" NOT "
tok$(169)=" STEP "
tok$(170)=" OFF "
tok$(171)="+"
tok$(172)="-"
tok$(173)="*"
tok$(174)="/"
tok$(175)="^"
tok$(176)=" AND "
tok$(177)=" OR "
tok$(178)=">"
tok$(179)="="
tok$(180)="<"
tok$(181)=" DEL "
tok$(182)=" EDIT "
tok$(183)=" TRON "
tok$(184)=" TROFF "
tok$(185)=" DEF"
tok$(186)=" LET "
tok$(187)=" LINE "
tok$(188)=" PCLS "
tok$(189)=" PSET "
tok$(190)=" PRESET "
tok$(191)=" SCREEN "
tok$(192)=" PCLEAR "
tok$(193)=" COLOR "
tok$(194)=" CIRCLE"
tok$(195)=" PAINT"
tok$(196)=" GET "
tok$(197)=" PUT "
tok$(198)=" DRAW "
tok$(199)=" PCOPY "
tok$(200)=" PMODE "
tok$(201)=" PLAY "
tok$(202)=" DLOAD "
tok$(203)=" RENUM "
tok$(204)=" FN "
tok$(205)=" USING "
tok$(206)=" DIR "
tok$(207)=" DRIVE "
tok$(208)=" FIELD "
tok$(209)=" FILES "
tok$(210)=" KILL "
tok$(211)=" LOAD"
tok$(212)=" LSET "
tok$(213)=" MERGE "
tok$(214)=" RENAME "
tok$(215)=" RSET"
tok$(216)=" SAVE"
tok$(217)=" WRITE "
tok$(218)=" VERIFY "
tok$(219)=" UNLOAD "
tok$(220)=" DSKINI "
tok$(221)=" BACKUP "
tok$(222)=" COPY "
tok$(223)=" DSKI$ "
tok$(224)=" DSKO$ "

extok$(128)=" SGN"
extok$(129)=" INT"
extok$(130)=" ABS"
extok$(131)=" USR"
extok$(132)=" RND"
extok$(133)=" SIN"
extok$(134)=" PEEK"
extok$(135)=" LEN"
extok$(136)=" STR$"
extok$(137)=" VAL"
extok$(138)=" ASC"
extok$(139)=" CHR$"
extok$(140)=" EOF"
extok$(141)=" JOYSTK"
extok$(142)=" LEFT$"
extok$(143)=" RIGHT$"
extok$(144)=" MID$"
extok$(145)=" POINT"
extok$(146)=" INKEY$"
extok$(147)=" MEM"
extok$(148)=" ATN"
extok$(149)=" COS"
extok$(150)=" TAN"
extok$(151)=" EXP"
extok$(152)=" FIX"
extok$(152)=" LOG"
extok$(154)=" POS"
extok$(155)=" SQR"
extok$(156)=" HEX$"
extok$(157)=" VARPTR"
extok$(158)=" INSTR"
extok$(159)=" TIMER"
extok$(160)=" PPOINT"
extok$(161)=" STRING$"
extok$(162)=" CVN "
extok$(163)=" FREE "
extok$(164)=" LOC "
extok$(165)=" LOF "
extok$(166)=" MKN$ "
extok$(167)=" AS "

if command$="" then
  input "File to translate: ";inf$
else
  sploc = instr(command$," ")
  if sploc > 0 then
    inf$ = left$(command$, sploc -1)
    outf$ = mid$(command$,sploc + 1, len(command$) - sploc)
  else
    inf$ = command$
    dot = instr(inf$,".")
    outf$ = left$(inf$,dot)
    outf$ = outf$ + "trn"
  end if
end if
'input "Output file name: ";outf$
open inf$ for binary as 1
get$ #1, 1, x$
if ascii(x$) <> 255 then
  print "'";inf$;"' is not a binary Color Computer BASIC file"
  close
  end
end if
cls
print "Translating '";inf$;"' to ASCII.  Output will be in '";outf$;"'"
open outf$ for output as 2
'open "c:\tmp\ok.txt" for append as 3
'print #3, inf$
'close 3
get$ #1, 1, x$
bytecount = 256 * ascii(x$)
get$ #1, 1, x$
bytecount = bytecount + ascii(x$)
print "Approximate source file size is";bytecount;"bytes."
bytesread = 0
while not eof(1)
  if csrlin > 22 then
    cls
    print "Translating '";inf$;"' to ASCII.  Output will be in '";outf$;"'"
  end if
  tline$ = ""
  call getline
  print tline$
  print #2, tline$
wend
close
end


SUB getline
  SHARED tok$(), extok$(), tline$, bytecount, inf$
  STATIC oldline&, linenum&, bytesread
  if linenum& > oldline& then oldline& = linenum&
  get$ #1, 1, x$                     'get hi byte of load address
  incr bytesread
  if bytesread > bytecount then end
  startaddr& = 256 * ascii(x$)        'compute
  get$ #1, 1, x$                     'get lo byte
  incr bytesread
  if bytesread > bytecount then end
  startaddr& = startaddr& + ascii(x$)  'compute
  get$ #1, 1, x$                     'get hi byte of line number
  incr bytesread
  if bytesread > bytecount then end
  linenum& = 256 * ascii(x$)         'compute
  get$ #1, 1, x$                     'get lo byte
  incr bytesread
  if bytesread > bytecount then end
  linenum& = linenum& + ascii(x$)    'compute
  if linenum& < oldline& then        'binary data at end of file
    print
    print "Found unknown bytes in '";inf$;"' at location";bytesread -2
    print
    close
    end
  end if
  tline$ = str$(linenum&) + " "      'start building string
  while 1 > 0                        'do forever
    get$ #1, 1, x$                   'read byte
    incr bytesread
    if bytesread > bytecount then exit loop
    x = ascii(x$)                    'get value
    if x = 0 then exit loop          'exit on null (end of line)
    if x < 128 then                  'if not a token
      tline$ = tline$ + x$           'append to string
    else                             'otherwise process token
      if x = 255 then                'if two byte token
	get$ #1, 1, x$               'get next byte
	incr bytesread
	if bytesread > bytecount then exit loop
	x = ascii(x$)                'convert
	tline$ = tline$ + extok$(x)  'get string equivalent and add it
      else                           'otherwise
	tline$ = tline$ + tok$(x)    'get string equivalent and add it
      end if
    end if
  wend                               'end of loop
END SUB 'getline
```
{% endraw %}

## EMSFRM.BAS

{% raw %}
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
{% endraw %}

## EMSINFO.BAS

{% raw %}
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
{% endraw %}

## EQUIP.ASM

{% raw %}
```
Code Segment Byte		;Make it a code segment
public equipment		;MUST be PUBLIC for PB to see
; Call Equipment(ConvMem%,Printers%,ComPorts%,GameAdapters%)
;  offsets =         18       14         10        6
;     in hex         12h      0Eh        0Ah       6h
equipment	proc far	;MUST be a FAR Procedure
	PUSH	BP      	;save
	MOV	BP,SP
	INT	12h		;get conventional memory
	LDS	BX,[BP+18]	;point to ConvMem%
	MOV	DS:[BX],AX	;Place value in ConvMem%
	XOR	DX,DX		;clear DX for useage
	INT	11h		;Get Equipment
	MOV	AL,AH		;just look at top 8 bits
				;save them in AH
				;use AL to manipulate
	MOV	CL,06		;Dump bits 8-13,                              	
	SHR	AL,CL		; and move 14 & 15 to lower posn's
	AND	AL,03		;mask any other positions
	MOV	DL,AL		;Move Printers%
	LDS	BX,[BP+14]	;Point to Printers%
	MOV	DS:[BX],DX	;And store in Printers%
	MOV	AL,AH		;Get top 8 bits again
	SHR	AL,1		;This time look at bits 9,10&11
	AND	AL,07		; by masking for 3 bits
	MOV	DL,AL		;And move ComPorts to DL
	LDS	BX,[BP+10]	;Point to ComPorts%
	MOV	DS:[BX],DX	;and store in ComPorts%
	MOV	AL,AH		;Again, get top 8 bits (8 thru 15)
	MOV	CL,04		;And look at bit 12
	SHR	AL,CL		; by shifting to that posn
	AND	AL,01		;and masking for 1 bit
	MOV	DL,AL		;Now, move GamePorts% to DL
	LDS	BX,[BP+06h]	;point to GamePorts%
	MOV	DS:[BX],DX	;and store the value in GamePorts%
	POP	BP		;restore BP
	RETF	000Fh		;and fix stack.. we used 16 locations
				; with the values passed
equipment	endp		;End the proc
				;other procs can go here
				; and then,
	code	ends		;end the code seg
	end			;and the assembly

```
{% endraw %}

## EQUIP.BAS

{% raw %}
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
{% endraw %}

## RMEX079.BAS

{% raw %}
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
{% endraw %}

## RMEX085.BAS

{% raw %}
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
{% endraw %}

## RMEX106.BAS

{% raw %}
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
{% endraw %}

## RMEX122.BAS

{% raw %}
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
{% endraw %}

## RMEX145.BAS

{% raw %}
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
{% endraw %}

## RMEX160.BAS

{% raw %}
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
{% endraw %}

## RMEX173.BAS

{% raw %}
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
{% endraw %}

## RMEX174.BAS

{% raw %}
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
{% endraw %}

## RMEX175.BAS

{% raw %}
```bas
PRINT FRE(-1)
MEMSET ENDMEM - &H80
PRINT FRE(-1)
END
```
{% endraw %}

## RMEX182.BAS

{% raw %}
```bas
MTIMER
pi# = ATN(1) * 4
ElapsedTime! = MTIMER
PRINT USING "It took ##### microseconds to calculate the value of PI.";ElapsedTime!
END
```
{% endraw %}

## RMEX195.BAS

{% raw %}
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
{% endraw %}

## RMEX198.BAS

{% raw %}
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
{% endraw %}

## RMEX230.BAS

{% raw %}
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
{% endraw %}

## RMEX232.BAS

{% raw %}
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
{% endraw %}

## RMEX282.BAS

{% raw %}
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
{% endraw %}

## RMEX288.BAS

{% raw %}
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
{% endraw %}

## RMEX290.BAS

{% raw %}
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
{% endraw %}

## RMEX291.BAS

{% raw %}
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
{% endraw %}

## TWORD.BAS

{% raw %}
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
{% endraw %}

## UMEX227.BAS

{% raw %}
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
{% endraw %}

## UMEX230.BAS

{% raw %}
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
{% endraw %}

## UMEX233.BAS

{% raw %}
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
{% endraw %}

## UMEX235.BAS

{% raw %}
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
{% endraw %}

## UMEX238.BAS

{% raw %}
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
{% endraw %}

## UMEX258.BAS

{% raw %}
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
{% endraw %}

## UMEX262.BAS

{% raw %}
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
{% endraw %}

## UMEX300.BAS

{% raw %}
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
{% endraw %}

## UMEX301.ASM

{% raw %}
```
; User's Manual Example, Page 301.
;
; Changed name from "sum.asm" to "umex301.asm"
; Relates to "umex300.bas".

code          segment byte
	      assume      cs:code

; si,di,ds,bp,sp,ss must be preserved
; long integer result is returned in dx:ax

suminteger    proc        far
	      public      suminteger

	      push bp                 ;bp must be preserved
	      mov  bp, sp             ;create a parameter stack frame
	      push ds                 ;ds must be preserved
	      xor  ax, ax             ;zero the low-order result
	      xor  dx, dx             ;zero the high-order result
	      lds  bx, [bp] [06]      ;get a pointer to the count
	      mov  cx, [bx]           ;cx = count of array elements
	      lds  bx, [bp] [10]      ;ds:[bx] = pointer to first element

	      jcxz sum2               ;in case of zero elements
sum1:
	      add  ax, ds:[bx]        ;add in one integer
	      adc  dx, 0              ;account for possible integer overflow

	      add  bx, 2              ;point to the next integer
	      loop sum1               ;repeat as necessary
sum2:
	      pop  ds                 ;restore the caller's registar
	      pop  bp
	      retf 8                  ;clear 8 bytes of parameters

suminteger    endp
code          ends
	      end
```
{% endraw %}

## DEMOEX.BAS

{% raw %}
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
{% endraw %}

## EXISTS.BAS

{% raw %}
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
{% endraw %}

## FF.BAS

{% raw %}
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
{% endraw %}

## FINDFILE.BAS

{% raw %}
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
{% endraw %}

## CLOCK.BAS

{% raw %}
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
{% endraw %}

## DOTDISP.BAS

{% raw %}
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
{% endraw %}

## GRAPHICS.DOC

{% raw %}
```
'Program Name    : Graphics.doc
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-20-90
'Compuserve #    : GO PCVENB, Vendor #12,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,n,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172 Voice


Enclosed in this zip file you will find the following files.

Dotdisp.bas:
This program reads a text line, and generates a left scrolling
sign of large dots.

Clock.bas:
Reads computer system clock and displays time in large numbers.

Mload.bas:
Graphics demo program, loads the printed circuit card image.  Shows how
completed Deluxe Paint graphic images can be captured and displayed for
use by Power Basic.

Save_EGA.exe:
Save_Ega.exe was written by Mike Warot of Blue Star Systems.  Save_ega is
a TSR written in Turbo Pascal.  Save_EGA captures 640 x 350 graphic screens
as four separate bit planes which can then be loaded by Power Basic.
To load Save_EGA type Save_ega & press enter.  It is now loaded as a TSR.
Use shift print screen to activate capture.  It saves all images as EGA.color.
Be sure to rename the captured screens after each save.  Save_ega resaves with
the save name each time you press shift+print screen.

'Screen bit plane files:
card.red   The card image was drawn using Deluxe Paint II
card.blu   and captured with save_ega.
card.grn
card.int

```
{% endraw %}

## MLOAD.BAS

{% raw %}
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
{% endraw %}

## LIBRARY.DOC

{% raw %}
```
12-04-90    Spectra Publishing - BBS & Compuserve Library

[74017,2570]
MASKIN.ZIP/binary         02-Dec-90 1792               Accesses: 1

    Title   : MASKINPUT.ZIP - masking entry routine / simple
    Keywords: ENTRY INPUT MASK POWERBASIC PUBLIC_DOMAIN

    Masked input for PowerBASIC 2.1 (should work w/2.0). Useful for entry of
    phone numbers, social sec #'s and dates. Generic enough to fold into most
    libraries. Not designed to replace regular text or unformatted entry.
    Dedicated to public domain.  --Tim

[72250,2551]
CRSBAS.ZIP/binary         01-Dec-90 76799              Accesses: 6

    Title   : crossbas version 1.00P
    Keywords: CROSS-REFERENCE TABLE LIST NON-RESERVED WORDS CREF XREF

    CrossBas will read a Power-BASIC source file and create an alphabetized
    cross-referenced listing of non-reserved words, i.e., variable,
    subprogram, function, and label-names, along with the physical line numbers
    where they appear.  The list is printed to file.  Handy for cleaning up
    unused variable names, labels, etc.  Un-archive with PKUNZIP.  Includes
    source, exe and doc files.

APLIB.ZIP/binary          24-Nov-90 73728              Accesses: 25

    Title   : HB's ALL-PURPOSE PB programmers' lib 11-90 version
    Keywords: MENUS WINDOWS MOUSE LIB

    Now for PBas, an ALL PURPOSE LIBRARY of programming tools. You can write
    complete pulldown menu interfaces, rodent-aware, just by copying demo. Also
    fancy entry routines for string or num data, phone #s, dates &c (never use
    INPUT again!), date arith., get file dirs & diskspace, open a data-entry
    window, dialog box, let users customize colors, push & pop screens, much
    more! All in PB units. Free for personal use. Update 11-90, MAKEDEMO.BAT
    added



[72540,2315]
TTDIR1.ZIP/binary         24-Nov-90 91008              Accesses: 7

    Title   : Version 1.05 - Addn. to DIR$ function of PowerBasi
    Keywords: DIRECTORY

    Version 1.05 of the additional directory function for PowerBasic 2.10. This
    fixes a few problems with the original sub-routine and changed to run
    somewhat faster.

[76467,3355]
SPOOLK.ZIP/binary         23-Nov-90 34048              Accesses: 11

    Title   : Print spooling toolbox for PowerBasic
    Keywords: PRINT SPOOL PRT SUBMIT QUEUE OUTPUT SYSTEM LISTING PRINTER
    PRINTING

    SPOOLKIT is a .PBU file that provides routines that interface with the DOS
    PRINT spooler.  With DOS PRINT installed and SPOOLKIT, your PowerBasic
    programs can create an output file, queue it for print, and continue to
    work while the file prints.  Queue management functions include start &
    stop, submit file, "unsubmit" file, get current queue list, etc. Requires
    PowerBasic 2.1 and the PowerPak.  Public Domain.  Nathan Durland, auth


[73300,2444]
RESWOR.ZIP/binary         22-Nov-90 33792              Accesses: 7

    Title   : Resword   Translating tool for PowerBasic 2.10 w/P
    Keywords: FIND RESERVED WORDS USED AS VARIABLES IN EARLIER BASIC SOURCE
    CODE.

    Finds reserved words for PowerBasic 2.10 w/PowerPak used in other Basics
    source code. Works with Turbo, Quick, Power 2.00 and interpreted (GW) code.
    Sends report to file,printer,sceen. free for personal use only. Enjoy !

[74365,1716]
OPSYS1.ZIP/binary         19-Nov-90 57670              Accesses: 10

    Title   : OPSYS 1.03 is a DOS Multi-Config Menu Utility
    Keywords: AUTOEXEC CONFIG BATCH DOS AUTOEXEC.BAT CONFIG.SYS CONFIGURATION
    WINDOWS

    OPSYS 1.03 is a DOS Multi-Configuration Menu Utility.  OPSYS will maintain
    up too 12 AUTOEXEC and CONFIG file sets for you.  OPSYS will allow you to
    use your own ASCII file editor.  OPSYS allows a custom batch file to be run
    at boot time.  Includes BOOT, a multi-option batch file reboot utility.
    OPSYS display system memory stats in the upper right hand corner.  OPSYS
    was written using PowerBASIC.  Shareware by mcTRONic Systems - Houston, TX

[72227,3201]
ARC2ZI.BAS                11-Nov-90 3648               Accesses: 11

    Title   : Archive to Zip file format converter
    Keywords: PB POWER BASIC ARC ZIP CONVERT DOS RECURSIVE SHELL SOURCE V2.1
    POWERPAK

    Source code for a program to convert .ARC files in current dir to .ZIP.
    Shells to DOS to run ARCE.COM, PKZIP.EXE and itself (ARC2ZIP.EXE!), so
    those must be available (and avail. thro PATH).  You can pass it something
    other than ARCE from cmmdline, if desired.  Not the prettiest display while
    running, but gets the job done.  Uses DOS shell recursively!  Too bad SHELL
    doesn't return DOS's exit-error level code.  Uploaded by author. Good luck!
    For PBv2.1

[71131,3256]
JGFRAC.ZIP/binary         07-Nov-90 145408             Accesses: 9

    Title   : Fractal generator using ega and vga graphics.
    Keywords: EGA VGA GRAPHICS FRACTAL MANDELBROT

    A fractal generator using ega and screen 12 vga modes. Includes zooming,
    saving and retrieving pictures, color cycleing, change single colors or
    most other parameters and replot.  Set up to create Mandelbrot fractal but
    easy to change.  Includes picture of the Mandelbrot fractal and 2 zoomed
    pictures from it.  Also a rock bottom description of what a fractal is and
    how to make them.


ERASCN.BAS  : Erase from cursor location to end of line.  Erase in middle
    Title   : of line.  Erase a vertical column.


PATCH4.ZIP  : PowerBasic 2.10a patch for serial port time out &
    Title   : chdrive (out of memory problem).


DIABLO.BAS  : Assembly Language TSR.  Provides X-ON, X-OFF support
    Title   : for com port.  Knowledge of assembly, a must.


READ123.BAS : Code to assist in reading Lotus files.
    Title   :


SCANP2.ZIP  : Scan your EGA screen 9 and print to Epson, Citizen
    Title   : compatible printer.  Program can be adapted for VGA.


PASSWORD.BAS:                       xxxxxk
    Title   : Insert a new Password, in to a compiled program with
            : provisions for a password without having to recompile.

BARCODE.BAS :                       XXXXK
    Title   :How to do Barcode printing from PB


CRSBAS.ARC  :                       108240k
    Title   : Cross reference program lister for Turbo Basic
            : source included, can be modified for PowerBasic


COMSET.ZIP
    Title   : Comset set com 3 & com 4 in memory for xt's & At's
            : Used with PB 2.1 allows access to ports 3 & 4
            : from Compuserve IBMHW forum

[73210,611]
Diablo.zip                20-Oct-90 6441               Accesses: 1
    Title   : Diablo.zip  X-On, O-off TSR Driver, works with PB
    KeyWords: XON XOFF, RS232, SERIAL

    Diablo.zip is a TSR driver that will provide X-On & X-Off support
    for your serial port.  Assembly language source included.



[75300,214]
PBWND2.EXE/binary         30-Sep-90 98947              Accesses: 11

    Title   : PBWindows 2.1 : Windows for PowerBASIC 2.10
    Keywords: WINDOWS MENUES TITLES POWERBASIC ASP CPU


     PBWindows 2.1 for PowerBASIC 2.10 only. PBWindows provides many routines
    to make and manage windows. Zoom windows, Titles, Borders, Time, Cpu type,
    and much more in this fully functional program.
     Free for indivual use. Print your own manual from the doc file included.
    Source and a printed manual is available as shareware. ASP Member.



[73077,1265]
PBERR.ZIP/binary          28-Sep-90 37912              Accesses: 12

    Title   : pberr.zip
    Keywords: ERROR UTIL POWERBASIC TURBO COMPILER

    Complete explaination of all errors documented in PowerBASIC.  Includes new
    errors from ver 2.1.  Access from DOS by typing PBERROR <number>.
    Especially handy when using the command-line compiler with your own text
    editor.  Uploaded by author.

[76114,637]
MAKE2.ZIP/binary          27-Sep-90 6868               Accesses: 12

    Title   : Make Utility - Upgrade
    Keywords: MAKE UTILITY FREE


       This is an upgrade to the MAKE Utility.  It fixes a small bug and adds a
    few enhancements (explained in the file).  This is the complete utility -
    you do not have to download MAKE.ZIP first!!!
       Make is a utility which checks the time of last compilation of a unit
    vs. time of last change of the unit file.  If it is outdated, it is
    automatically recompiled.


[75300,214]
WHACPU.ZIP/binary         23-Sep-90 941                Accesses: 20

    Title   : What Cpu Does this machine have
    Keywords: GETCPU CPU CPUTYPE WHACPU OBJ DEMO SHORT

    What Cpu is a object code function that reports the cpu in your machine.
    Unlike the one publiched in PC Magazine, this one does not cause an
    Exception 13 error if you have the QEMM-386 Memory Manager installed.
    Included is a huge, 3 line, demo program. The comments are bigger than the
    program.



[71530,2640]
GRAPH3.ZIP/binary         22-Sep-90 107526             Accesses: 7     01-Oct-90

    Title   : Graph3.zip
    Keywords: GRAPHICS FLASHCODE CHART ANALOG PCOPY

    More interesting graphics applications, alalog, pcopy replacement 8 day
    Industrial recording chart, how to load flash code screens.



[71530,2640]
GRAPH2.ZIP/binary         21-Sep-90 49484              Accesses: 11    29-Sep-90

    Title   : Graph2.zip
    Keywords: GRAPHICS ANIMATION

    Graphics animation using Power Basic.



[71530,2640]
GRAPH1.ZIP/binary         20-Sep-90 80533              Accesses: 14    03-Oct-90

    Title   : Graph1.zip
    Keywords: GRAPHICS SCROLL CLOCK PAINT

    Contins interesting graphic applications, display system clock in large sen
    numbers, scrolling sign, how to capture and display Deluxe Paint images.
    with example.



[75300,214]
PB210.ZIP/binary          20-Sep-90 1857               Accesses: 41

    Title   : Announcing PowerBASIC 2.10 - Archive of forum ann.
    Keywords: POWERBASIC 2.10 UPGRADE INFO ANNOUNCEMENT NEW FORUM MESSAGE
    THREAD

    Full propaganda from the official fourm messages on the release of
    PowerBASIC ver 2.10. This is the thread as in the message base and contains
    information on upgrading to PowerBASIC 2.10 from PB 2.0 or from TurboBasic.
    PowerBASIC is an excellent program. Read about it in this archive of the
    announcement.



[71121,776]
APLIB.ZIP/binary          16-Sep-90 69632              Accesses: 42

    Title   : "All-Purpose" programmers lib now for
    Keywords: PULLDOWN MENUS DATA WINDOWS NEW

    Now for PBas, an ALL PURPOSE LIBRARY of programming tools. You can write
    complete pulldown menu interfaces, rodent-aware, just by copying demo. Also
    fancy entry routines for string or num. data, phone #s, dates &c (never use
    INPUT again!), date arith., get file dirs & diskspace, open a data-entry
    window, dialog box, let users customize colors, push & pop screens, much
    more! All in PB units. Free! Updated 9-90; 22 prev accesses.





[73760,751]
RATS.ZIP/binary           15-Sep-90 4436               Accesses: 22

    Title   : TAMMING THE RATS
    Keywords: MOUSE MICE RATS SCREEN SCROLL

    This is the source code for a screen builder program that has mouse
    support. Shows how to make calls to the mouse driver. Has a screen saver &
    scroll routine/exit



[75300,214]
PRSCMD.ZIP/binary         09-Sep-90 1057               Accesses: 19

    Title   : Parse Command Line: Get parameters and the number
    Keywords: PARSE COMMAND PARSECOMMAND COMMAND$ DEMO

    This demo and sub will parse the command line parameters. The available
    switches on the command line are Space, Tab, "/" and "-". Returned are the
    number of parameters and the parameters. From a message and original code
    by Henry Piper, 72330,1721. Modified to its present state by Barry Erick,
    75300,214.



[72330,1721]
GETCWD.ZIP/binary         07-Sep-90 33792              Accesses: 13

    Title   : getcwd.zip
    Keywords: DIRECTORY DOS POWERWINDOWS

    This program will display the current drive and directory using Power
    Basic. The program uses Power Windows, but can easily be changed to work
    without. Demonstrates use of DOS calls, some string functions, and some
    Power Windows functions. The windows attributes may need to be changed for
    your display.



[75300,214]
INDENT.ZIP/binary         26-Aug-90 23552              Accesses: 10

    Title   : INDENT - Indents PB Source code
    Keywords: INDENT FORMATTING UTILITY

    Basic Code formatting utility. This indents only, does not change the case
    of reserved words, variables, etc. By K. Diggins of KGD Solutions. A $1
    contribution is asked if you like this work. Includes the DOC file and the
    EXE file.



[76114,637]
ZIP.ZIP/binary            22-Aug-90 3561               Accesses: 23

    Title   : Zip all include files together
    Keywords: PKZIP BACKUP


       This utility allows you to store all of the files required to compile a
    project into 1 zip file.

[76166,2542]
MICE.ZIP/binary           18-Aug-90 4992               Accesses: 47

    Title   : Use a mouse with your PowerBasic programs.
    Keywords: MOUSE MICE POWERBASIC

    Routines to enable mouse usage in PowerBasic progrms.



[76304,1303]
PBNEWS.ZIP/binary         17-Aug-90 9088               Accesses: 106

    Title   : PBNEWS: The PowerBASIC Newsletter - Issue #3
    Keywords: NEW INFORMATION POWER BASIC TIPS FIXES

    PowerBASIC News:  The latest information (plus a little propaganda) from
    the authors of PowerBASIC.  This file will be updated on a regular basis to
    provide PowerBASIC users with important news, error reports, programming
    tips, and other useful information.  Watch the library posting date to
    learn of each newly published issue.  While some important items will be
    repeated, we'll have new information whenever the date changes.



[76166,2542]
REBOOT.ZIP/binary         16-Aug-90 1408               Accesses: 24

    Title   : Routine to reboot your computer from a PB program.
    Keywords: REBOOT WARM BOOT

    Reboot your computer from within a PowerBasic program.



[74046,1556]
LRWIND.ZIP/binary         19-Jul-90 4608               Accesses: 39

    Title   : Window PBU for PowerBASIC
    Keywords: POWERBASIC WINDOW WINDOWS SMALL SIMPLE

    Small, simple, window routine (PBU) for PowerBASIC.



[75300,214]
BAR39.ZIP/binary          19-Jul-90 19972              Accesses: 11

    Title   : Print 3 of 9 Barcodes on an Epson type printer
    Keywords: BARCODES BARCODE 3OF9 BAR CODE PRINTER

    Bar3of9 prints the 3of9 type barcodes on a Epson compatible printer. A
    printer with a good ribbon and 9 or 24 pins prints best. Source code for
    the code driver, a pbu for the window routine. This is a replacement for a
    buggy version which has CASE 1 thru 4 repeated. The First CASE 1 thru 4 are
    deleted in this file.



[73707,2545]
HUFFMA.ZIP/binary         14-Jul-90 2048               Accesses: 32

    Title   : Huffman Encoding File Compression
    Keywords: COMPRESSION ARCHIVING ALGORITHMS HUFFMAN

    Huffman Encoding file compression technique from Sedgwick's "Algorithms"
       (pages 286 - 293).



[76304,1303]
PATCH3.ZIP/binary         18-Jun-90 2048               Accesses: 124

    Title   : PATCH3.ZIP:  to install fixes and enhancements
    Keywords: PATCH FIX CHAIN NUMERIC INP

    This is an official update, from the developers, for PowerBASIC #2.00b.
    This patch corrects reported problems with the CHAIN statement, erroneous
    floating point results when numeric error checking is disabled, and
    incorrect code generation when the INP() function is referenced in certain
    complex expressions.  It is recommended that this patch, as well as the
    first two, be implemented by all users of PowerBASIC version #2.00b.



[71521,1311]
DEFSEG.ZIP/binary         13-Jun-90 1284               Accesses: 33

    Title   : Get current DEF SEG
    Keywords: PRESERVE DEF SEG GET CURRENT DEF SEG

    function CurDefSeg% returns the most recent DEG SEG.  Use to preserve DEF
    SEG across functions and subroutines.  Example shows how to read keyboard
    status from BIOS data area.  Well commented.
        Michael Flenniken



[71521,1311]
LSTRAN.ZIP/binary         08-Jun-90 4911               Accesses: 14

    Title   : Read Lotus 123 named ranges
    Keywords: READ LOTUS 123 RANGE NAMES REDIRECT OUTPUT STDOUT

    LSTRANGE.BAS ver 1.0.  Display named ranges from a Lotus 1-2-3 file. Output
    can be redirected to the printer or to a file with standard DOS redirection
    symbols.  Requires PKZIP ver 1.02 to uncompress.
       Michael Flenniken



[76166,2542]
DISK.ZIP/binary           04-Jun-90 28672              Accesses: 72

    Title   : Disk routines for PowerBasic
    Keywords: DISK POWERBASIC

    Disk Routines for PowerBasic.



[71121,776]
LISVAR.ZIP/binary         13-May-90 4096               Accesses: 36

    Title   : PUBVARS.BAS
    Keywords: PUBLIC-EXTERNAL VARIABLES LISTING UTILITY

    When your POWER-BASIC units contain EXTERNAL variables, you have to declare
    them all PUBLIC in the main file. This utility does it for me! The output
    file is a tidy alphabetized list of these variables, to be $INCLUDE'ed in
    the main file. No more ERROR 503's !!
     5-12-90: Just as soon as I uploaded this, I knew I had to improve on it.
    Now it gets the name of your MAIN program file, searches it for the $LINK
    statements, converts the filenames from *.PBU

[75300,214]
PBWNDO.EXE/binary         13-May-90 93353              Accesses: 39

    Title   : PBWindows - Windows for PowerBasic
    Keywords: WINDOWS MENUES TITLES ZOOM POWERBASIC PBU INC BAS POPUP ASP


     PBWindows provides over 22 routines to make and manage windows. Windows,
    Zoom windows, Titles, menues, Time and Date, Horiz menues, and much more.
    The program is complete and fully functional.
     Free for individual use. Print your own manual from the doc file included.
     Source code to the .pbu and a printed manual is available  as Shareware.
     ASP Member. Only change is to the docs. Prev dl's = 22



[76304,1303]
PBPLUS.ZIP/binary         12-May-90 4864               Accesses: 76

    Title   : PBPLUS96.ZIP: 96k More Memory for Compilation
    Keywords: MEMORY ERROR 406

    Use PBPLUS96 to increase the capacity of PowerBASIC!  If you have an EGA or
    VGA video card, PBPLUS96 can be used with PowerBASIC to "steal" 96k of
    memory from the card, to be used during compilation, running, or debugging
    in the PowerBASIC environment.  Depending upon your programming style, the
    extra 96k of memory may increase your maximum program size by 35-120%.
    PBPLUS96 is free to all licensed users of PowerBASIC #2.00.



[76530,1452]
EMSINF.ZIP/binary         12-May-90 2191               Accesses: 30

    Title   : EMS information
    Keywords: EMS

    Update to EMSFRM.ZIP.  Includes a few new EMS informational items like
    version, number of pages, number of handles, etc.  I was just playing
    around with the original and found some old ASM code and wanted to see if I
    could make it work.



[76304,1303]
EMSFRM.ZIP/binary         10-May-90 1408               Accesses: 38

    Title   : EMSFRM.ZIP: EMS Analysis Program for PowerBASIC
    Keywords: EMS EXPANDED MEMORY PAGE FRAME

    This program, provided as PowerBASIC source code, will help you determine
    the usefulness of an Expanded Memory (EMS) driver when used with PowerBASIC
    #2.00.  It determines whether EMS is available, and if so, it displays the
    segment of the page frame and an analysis.



[76304,1303]
PATCH2.ZIP/binary         08-May-90 2048               Accesses: 136

    Title   : PATCH2.ZIP to install fixes and enhancements
    Keywords: PATCH MEMORY CORRUPT LINK RESUME OBJ 242

    This is the second in a series of patches to be applied to PowerBASIC
    version #2.00b.  It requires PBPATCH.EXE, which may be downloaded in
    PATCH1.ZIP.  This patch corrects incompatibilities linking certain
    OBJ files, problems with error addresses (ERADR/RESUME/NEXT) in emulated
    float mode, and incorrect generation of string/array memory corrupt errors
    (error #242).  It should be implemented by all users of PowerBASIC Rev.
    #2.00b.



[76304,1303]
BTRIEV.ZIP/binary         03-May-90 2688               Accesses: 39

    Title   : BTRIEV.ZIP: An interface to Novell's BTRIEVE
    Keywords: ISAM BTRIEVE BTRV KEY DATABASE

    Novell's BTRIEVE is an efficient and easy-to-use ISAM file manager, or
    indexed file system.  It may be directly interfaced to PowerBASIC programs
    to allow fast, database-style access to files via alphanumeric keywords
    rather than just record numbers.  This file contains a single PowerBASIC
    procedure, in source code format, which provides everything necessary to
    interface BTRIEVE to any PowerBASIC program.



[72236,154]
CCTRAN.ARC/binary         21-Apr-90 32768              Accesses: 6

    Title   : COCOTRAN - BASIC token to ASCII converter
    Keywords: BINARY FILE INDEXED DIM BASIC CONVERSION

    COCOTRAN reads tokenized Radio Shack Color Computer BASIC files which have
    been transferred to an MSDOS disk and converts them to ASCII BASIC suitable
    for editing or for transfer over a 7-bit transmission path. CCTRAN.ARC
    includes the source and the .exe file.  COCOTRAN uses the binary file and
    indexed DIM capabilities of Power Basic.  Conversion is FAST, with 130
    tokenized files converted to 960K bytes of ascii in 50 minutes.



[75300,214]
EQUIP.ZIP/binary          11-Apr-90 2757               Accesses: 74

    Title   : EQUIPment shows how to use OBJ files with PB
    Keywords: OBJ DEMO SOURCE ASM TUTOR DEBUGGER TINY

    EQUIP.ZIP consists of a OBJ file (with its ASM source) and a Basic program
    that will show your computers configuration. The main purpose of this very
    heavily commemted source code is to show you how to generate an OBJ file
    how to link it safely within a PowerBASIC program. This tells how to keep
    from bombing with the integrated debugger when $LINKing Obj code and
    tracing the code.



[73237,3114]
ERROR.ZIP/binary          09-Apr-90 21808              Accesses: 40

    Title   : ERROR v1.00 - Describes PB run-time error codes
    Keywords: ERROR DOS POWER BASIC JONES

    ERROR v1.00  by Rodney Jones.  This utility program prints the meaning of
    the run-time error codes produced by Power Basic.  It is particularly
    useful for tracking down program errors when outside the Power Basic
    environment.  The program requires the user to specify the error number,
    e.g. by typing ERROR 53 at the DOS prompt, the message 'File not found' is
    printed.



[76304,1303]
PWRBAS.ZIP/binary         09-Apr-90 3328               Accesses: 60

    Title   : PowerBASIC 2.0: Its history, features, advantages.
    Keywords: POWER BASIC UPGRADE FEATURES TURBO ORDER DEALER

    This file provides a description of PowerBASIC 2.0, its features and
    availability.  It is primarily directed towards the new prospective user of
    the product, who may wish to learn a little more about the history,
    features, and advantages of PowerBASIC.  Also included is ordering
    information for current users of Borland's Turbo Basic, who can upgrade for
    the special price of just $59.00.



[74776,1017]
JULIAN.BAS                08-Apr-90 430                Accesses: 40

    Title   : Short routine to calculate Julian date.
    Keywords: JULIAN DATE POWER BASIC

    Routine to calculate the Julian date. Used by database programmers and
    others to calculate the number of days between two dates.



[75300,214]
PTOUCH.ZIP/binary         08-Apr-90 5174               Accesses: 29

    Title   : PBTouch Touches a files Date and Time
    Keywords: TOUCH DATE TIME FILES SOURCE

    PBTouch will "touch" any specified file and update its timestamp, either
    from DOS or a passed date and time spec. Type PBTouch ? to see the options
    once compiled. Also, routines in the Touch.PBU allow you to get a files
    current timestamp, then alter the file and go back in to restore the
    timestamp to the orginal date and time.
    Full source is included in for the main program and the two pbu's used to
    make this program.



[75300,214]
TB2PB.INF/binary          08-Apr-90 1372               Accesses: 79

    Title   : Converting from TB to PB
    Keywords: CONVERSION TB2PB TIPS INFORMATION

    This is a message from the PBSection that has tips on converting from TB to
    PB by the author, Bob Zale



[75300,214]
UPGRAD.INF/binary         08-Apr-90 555                Accesses: 80

    Title   : Upgrade Info from PB 2.00a to PB 2.00b
    Keywords: UPGRADE LATEST INFO

    This contains information from the author of PowerBASIC on upgrading from
    PB version 2.00a to the current version, 2.00b. Basically, it's free!



[75300,214]
USING.FIX/binary          07-Apr-90 2131               Accesses: 65

    Title   : Print using explained and a Ref Manual correction
    Keywords: MANUAL PRINTUSING FIX REFERENCEGUIDE SPECTRA OFFICIAL NOTICE

    This official Spectra release explains Print Using and one difference in it
    from TB to PB. The bug is not in PB, but was in PB. Since you may have a
    workaround in TB, you may think PB is at fault. This also has a correction
    to the Reference Guide that is not covered in the ReadMe file on your
    PowerBASIC master disk.



[76164,3215]
LJLBAR.ZIP/binary         04-Apr-90 4239               Accesses: 23

    Title   : CODE39 Barcode LaserJet font print subroutines
    Keywords: BARCODE 3-OF-9 CODE39 LASER PRINT LANDSCAPE FONTS

    PowerBASIC subroutines for creating LaserJet-II fonts to print CODE39
    (3-of-9) barcode in landscape mode.  Source code.



[75300,214]
SPOOL.ZIP/binary          02-Apr-90 2304               Accesses: 45

    Title   : Use Dos's PRINT Spooler from within PowerBASIC
    Keywords: SPOOL DOS PRINT ASM PB SOURCE

    A ASM and PB Source file that will use DOS's PRINT from within a PB
    Program. The ASM file has to be assembled into object code, so this does
    require either MASM or TASM to compile. Program by Brett Jones.



[75300,214]
TOOLFX.ZIP/binary         31-Mar-90 3094               Accesses: 72

    Title   : FIX File to allow TB Toolboxes to run under PB
    Keywords:
     TOOLBOX TB TO PB DATABASE FIX PATCH

    Here are the changes that need to be made to the database toolbox files so
    that you may compile and run under PowerBASIC.  There are five "blocks" of
    changes that need to be made. The assembly routines that are commented in
    changes 2 and 4 need not be written into your code, but we suggest that you
    do so for future reference. Please call me if you have any questions or
    comments.  Good programming!
     Tim McFarland
     Technical Support
     (408) 730-9291



[76304,1303]
PATCH1.ZIP/binary         31-Mar-90 30464              Accesses: 149

    Title   : PBPATCH.EXE to install fixes and enhancements
    Keywords: PATCH MEMORY CVF CBCD REMOVE REPLACE FN FUNCTION

    This file contains PBPATCH.EXE, to allow you to install modifications, bug
    fixes, and enhancements to PowerBASIC.  This patch corrects problems with
    premature "out of memory" errors, CVF/CBCD/REMOVE$/REPLACE, public
    references from chained programs, single precision functions/fn's, and
    other fixes and enhancements.  It should be implemented by all users of
    PowerBASIC #2.00b, and is also available on disk from Spectra Tech Support.



[75300,214]
FNDFIL.ZIP/binary         28-Mar-90 4352               Accesses: 46

    Title   : Find First, Find All of the files.
    Keywords:
     FINDFILE DIRECTORY FILES DIR GET FILE PBU SOURCE DEMO UTILITY

    FindFile is a .pbu (with source included) that uses DOS functions to Find
    the first matching file to a filespec or filemask, and to find the next
    files until no more exist. A short demo, FF.Bas, is included along with a
    short README file.



[75300,214]
TODAY.ZIP/binary          28-Mar-90 19456              Accesses: 23

    Title   : Today, retreive todays date, weekday, month, year
    Keywords:
     DATE TODAY YEAR MONTH DAY UNIT SOURCE EXE

    This unit and demo will retrieve the time and date from DOS. While all
    source is provided, a EXE file is also proivided to let those without
    PowerBASIC to run this program.



[75300,214]
VPRNT.ZIP/binary          28-Mar-90 25367              Accesses: 26

    Title   : ViewPrint for PowerBASIC
    Keywords: VIEWPRINT COMMAND

    PowerBASIC 2.x does not have View Print command for Text modes as yet. Is
    it promissed for the next version? If so, until then this library of a demo
    and .pbu (along with an included .EXE file and .DOC) can be used.



[75300,214]
EXISTS.ZIP/binary         27-Mar-90 21381              Accesses: 51

    Title   : Exists, Findfile and see how to access strings.
    Keywords:
     STRINGSEGMENT STRINGPOINTER STRSEG STRPTR STRINGS


     This example includes the source code for a PBU file, and a demo with full
    remarks. Shown is how to access the new strings in PowerBASIC. These new
    ways are necessary because of the unlimited string space in PowerBASIC (no
    more 64k limit).
     Also shown is how this was accomplished in Turbo Basic.
     The demo, DemoEx.Bas (or DemoEx.EXE to see it run if you don't have
    PowerBASIC) is a simple sample to show how to access the unit.




```
{% endraw %}

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
