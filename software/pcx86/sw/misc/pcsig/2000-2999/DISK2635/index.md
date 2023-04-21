---
layout: page
title: "PC-SIG Diskette Library (Disk #2635)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2635/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2635"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BAR3OF9.BAS

{% raw %}
```bas
 $compile EXE
 $ERROR ALL OFF
$OPTION CNTLBREAK OFF
$SOUND 0
 $LIB ALL OFF
 $LIB LPT ON
 ' barcode printing
 ' losely based on a program in another language by an unknown author

 '-=-=-                      -  SPECIFICATIONS -                       -=-=-
 '-=                                                                      =-
 '-=                         W                                 N          =-
 '-=                |  Nominal Width  | Nominal Width  | Nominal Ratio    =-
 '-=     Density    |       of        |      of        |      of          =-
 '-=   (Characters/ | Narrow Bars and | Wide Bars and  | Wide to Narrow   =-
 '-=      Inch)     | Spaces (Inches) | Spaces (Inches)| Element Width    =-
 '-=   -------------+-----------------+----------------+----------------  =-
 '-=      5.730     |     0.0125      |     0.0315     |      2.52        =-
 '-=   -------------+-----------------+----------------+----------------  =-
 '-=                                                                      =-
 '-=-=-                 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-                -=-=-
 '-=-=-  Code 3-of-9 was developed in 1974 by Dr. David C. Allais of   -=-=-
 '-=-=-  Interface Mechanisms, Inc.  It is the most widely used        -=-=-
 '-=-=-  alphanumeric bar code in use. Code 3 of 9 is called this      -=-=-
 '-=-=-  because the original concept provided for 39 data characters. -=-=-
 '-=-=-  The name also describes what has become the general meaning   -=-=-
 '-=-=-  of the phrase, the structure of the code which has 3 wide     -=-=-
 '-=-=-  elements out of a total of 9.                                 -=-=-
 '-=-=-                                                                -=-=-
 '-=-=-  The height should be an exen number and approx 15% of the     -=-=-
 '-=-=-  total code length       -=-=-
 '-=-=-                                                                -=-=-
 '-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 DEFINT a-z
$INCLUDE "pbwindow.inc"

 Bar0to2Off% = 0
 Public frc,brc,NarrowSpace$,WideSpace$,NarrowBar$,WideBar$,PrintHead$()
 DIM PrintHead$(30)

 '*====================*

SUB MakeBlankScreen
 ' this makes the blank window that all others will print in
 IF IsColr THEN
    frc = 7
    brc = 1
 ELSE
    frc = 7
    brc = 0
 END IF
 CALL makeBox(1,27,6,27,frc,brc,2,0,0,-1,-1)
 CALL BoxTitle(2,"3 of 9",-1,-1)
 CALL BoxTitle(5,"Bar Codes",-1,-1)
END SUB

 '*====================*


SUB MainMenu(lastItm)
SHARED itm
 mList$(1) = "Print Data from CONSOLE"
 mlist$(2) = "Print Data from FILE"
 mlist$(3) = "ADD Data to FILE"
 mlist$(4) = "Quit"
 mlist$(5) = ""
 IF IsColr THEN
    CALL BuildMenu(itm,LastItm,0,0,-1,-1,14,4,2,mlist$(),0,4)
 ELSE
    CALL BuildMenu(itm,LastItm,0,0,7,0,15,7,2,mlist$(),0,-1)
 END IF
END SUB

 '*====================*


SUB ClearWindow
 FOR x = 1 TO 4
     CALL PrtEol(x,1)
 NEXT
END SUB

SUB  EnterData
SHARED msg$,hmsg$

 msg$=""
 hmsg$=""
 CALL ClearWindow
 CALL CtrBox(1,"Enter Message")
 CALL PrtBox(2,1,STRING$(25,CHR$(219)))
 FOR x = 1 TO  25
     CALL PrtAttrBox(2,x,CHR$(219),15+16,7)
     WHILE NOT INSTAT:WEND
     ms$ = INKEY$
     IF ms$=CHR$(13) THEN EXIT FOR
     CALL PrtBox(2,x,ms$)
     msg$=msg$+UCASE$(ms$)
 NEXT
 msg$ = "*"+msg$+"*"
 CALL ClearWindow
 hmsg$=GetHeight$
 CALL ClearWindow
END SUB

 '*====================*


SUB InitializePrintHead
 WideSpace$ = CHR$(0,0,0,0)
 NarrowSpace$ = CHR$(0,0)
 WideBar$ = CHR$(255,255,255)
 NarrowBar$ = CHR$(255)
END SUB


 '*====================*

SUB  FillPrintHead(message$)

 'send in message
 FOR x = 1 TO LEN(message$)
     SELECT CASE MID$(message$,x,1)
            CASE "1"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "2"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "3"
                 Bar$=WideBar$+NarrowSpace$+WideBar$+WideSpace$+NarrowBar$+_
                      NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "4"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "5"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+WideBar$+_
                      NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "6"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+WideBar$+_
                      NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "7"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+WideBar$
            CASE "8"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "9"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "0"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      WideBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "A"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "B"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "C"
                 Bar$=WideBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "D"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "E"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "F"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "G"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+WideBar$
            CASE "H"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "I"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "J"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+WideSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "K"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+WideBar$
            CASE "L"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+WideBar$
            CASE "M"
                 Bar$=WideBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+NarrowBar$
            CASE "N"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+WideBar$
            CASE "O"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+NarrowBar$
            CASE "P"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+WideSpace$+NarrowBar$
            CASE "Q"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+WideBar$
            CASE "R"
                 Bar$=WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+NarrowBar$
            CASE "S"
                 Bar$=NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+WideSpace$+NarrowBar$
            CASE "T"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+WideBar$+WideSpace$+NarrowBar$
            CASE "U"
                 Bar$=WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "V"
                 Bar$=NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "W"
                 Bar$=WideBar$+WideSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "X"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+WideBar$
            CASE "Y"
                 Bar$=WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "Z"
                 Bar$=NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "-"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+WideBar$
            CASE "."
                 Bar$=WideBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE " "
                 Bar$=NarrowBar$+WideSpace$+WideBar$+NarrowSpace$+_
                      NarrowBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$
            CASE "*"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      WideBar$+NarrowSpace$+WideBar$+NarrowSpace$+NarrowBar$

            CASE "$"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+NarrowBar$
            CASE "/"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+NarrowBar$
            CASE "+"
                 Bar$=NarrowBar$+WideSpace$+NarrowBar$+NarrowSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+WideSpace$+NarrowBar$
            CASE "%"
                 Bar$=NarrowBar$+NarrowSpace$+NarrowBar$+WideSpace$+_
                      NarrowBar$+WideSpace$+NarrowBar$+WideSpace$+NarrowBar$
     END SELECT
     PrintHead$(x)=Bar$
 NEXT
END SUB


 '*====================*

SUB PrintData
SHARED hmsg$,msg$
LOCAL Temp$(),English$()
 DIM DYNAMIC English$(30)
 FOR x = 1 TO LEN(msg$)
     English$(x) = MID$(msg$,x,1)
     IF (x <> 15) AND (x <> 25)  THEN
        IF x>2 AND (x MOD 2) > 0 THEN English$=English$+" "
     END IF
 NEXT

 WIDTH "LPT1:",255'disable line feeds
 LPRINT CHR$(27,51,2);

 'get vals for dot graphics command
 Columns = 21
 n1 = columns MOD 256
 n2 = columns\256

 CALL ClearWindow
 CALL PrtBox(1,1,"Printing ")
 height = ABS(VAL(hmsg$))
 IF height <2 THEN height =2
 FOR h = 1 TO height
     FOR n = LEN(msg$) TO 1 STEP -1
         CALL prtBox(2,1+n," ")
     NEXT
     FOR m = 1 TO LEN(msg$)
         CALL PrtBox(2,m,English$(m))
         LPRINT CHR$(27,76,n1,n2);printhead$(m);narrowspace$;
     NEXT

     IF (h MOD 2) = 0 THEN LPRINT CHR$(27,74,19);
     LPRINT
     CALL PrtBox(3,1,"Pass" + STR$(h) + " complete")
 NEXT h

 'reset printer
 LPRINT CHR$(27);"@"
 LPRINT English$;msg$
 LPRINT

 ERASE English$

END SUB


 '*====================*

SUB LoadFromDisk
SHARED message$,hmsg$
 CALL ClearWindow
 hmsg$=GetHeight$
 CALL ClearWindow
 OPEN "BarCode.Dat" FOR INPUT AS # 1
 WHILE NOT EOF(1)
     INPUT #1,msg$
     msg$="*"+msg$+"*"
 WEND
 CLOSE #1
END SUB

 '*====================*


SUB WriteToDisk
SHARED msg$
 OPEN "BarCode.dat" FOR APPEND AS #1
 DO
     msg$=""
     CALL ClearWindow
     CALL CtrBox(1,"Enter Message")
     CALL PrtBox(2,1,STRING$(25,CHR$(219)))
     FOR x = 1 TO  25
         CALL PrtAttrBox(2,x,CHR$(219),15+16,7)
         WHILE NOT INSTAT:WEND
         ms$ = INKEY$
         IF ms$=CHR$(13) THEN EXIT FOR
         CALL PrtBox(2,x,ms$)
         msg$=msg$+UCASE$(ms$)
     NEXT
     IF msg$="" THEN EXIT LOOP
     msg$ = "*"+msg$+"*"
     PRINT #1,msg$
     CALL ClearWindow
 LOOP
 CALL ClearWindow
 CLOSE 1
END SUB

 '*====================*


 FUNCTION GetHeight$
 CALL CtrBox(1,"Enter Height")
 Spot = (PBWW(1)/2) -1
 CALL PrtBox(2,Spot+1,STRING$(2,CHR$(219)))
 FOR x = 1 TO  2
     CALL PrtAttrBox(2,Spot+x,CHR$(219),15+16,7)
     WHILE NOT INSTAT:WEND
     ms$ = INKEY$
     IF ms$=CHR$(13) THEN EXIT FOR
     CALL PrtBox(2,spot+x,ms$)
     hmsg$=hmsg$+ms$
 NEXT
 ' make it an even number
 ht = VAL(hmsg$)
 IF ht MOD 2 <> 0 THEN INCR ht
 GETHEIGHT$ = MID$(STR$(ht),2)

 END Function

 '*====================*




 CLS'later change to a save the entire window and then cls and restore at end

 CALL MakeBlankScreen
 CALL InitializePrintHead
 ItmNum = 1
 DO
     CALL MainMenu(itmNum)
     SELECT CASE itm
            CASE 1
                 CALL EnterData
                 CALL FillPrintHead(msg$)
                 CALL PrintData
            CASE 2
                 CALL LoadFromDisk
                 CALL FillPrintHead(msg$)
                 CALL PrintData
            CASE 3
                 CALL WriteToDisk
            CASE 4
                 CLS
                 END (0)
                 CALL ClearWindow
                 CALL removeBox
     END SELECT
     ItmNum = Itm
     Itm = 0
 LOOP
```
{% endraw %}

## DEFSEG.BAS

{% raw %}
```bas
      goto EXAMPLE

function CurDefSeg%
'author......| Michael E. Flenniken
'version.....| 1.00  6/13/90     for PowerBASIC v2.00b
'parameters..| None
'success.....| Returns segment of the most recent DEF SEG
'notes.......| This is a two part function.  sub GetDefSeg() must be present.
'            | function CurDefSeg% must be initiallized.  The first call to
'            | CurDefSeg% intiallizes it and returns PB's data segment.
'            | Subsequent calls returns the current DEF SEG
'warnings....| Use at your own risk.
    local  CurDataSeg%
    static DefDataSeg%

if DefDataSeg% = 0 then        ' If this is the first time called
    def seg                    '   initiallize with PB data segment
    DefDataSeg% = peeki(26)
    CurDefSeg% = DefDataSeg%
else                           ' Otherwise get and return the current def seg
    call GetDefSeg (DefDataSeg%, CurDataSeg%)
    CurDefSeg% = CurDataSeg%
end if

end function


sub GetDefSeg inline   ' (PBDataSeg%, CurSeg%)

$inline &h55               ' PUSH BP           ; Save BP
$inline &h89, &hE5         ' MOV  BP, SP       ; Move SP to BP
$inline &h1E               ' PUSH DS           ; Save DS
$inline &hC4, &h7E, &h0A   ' LES  DI, [BP+0A]  ; ES:DI is ptr to PBDataSeg%
$inline &h26, &h8E, &h1D   ' MOV  DS, ES:[DI]  ; set DS to PB data segment
$inline &hBE, &h1A, &h00   ' MOV  SI, 1A       ; Current def seg @ offset 26
$inline &hAD               ' LODSW             ; Load current def seg to AX
$inline &hC4, &h7E, &h06   ' LES  DI, [BP+06]  ; ES:DI is ptr to CurSeg%
$inline &hAB               ' STOWSW            ; Store AX to CurSeg%
$inline &h1F               ' POP  DS           ; Restore DS
$inline &h5D               ' POP  BP           ; Restore BP

end sub




EXAMPLE:
cls
? "The PB data segment is"; CurDefSeg%     ' Initiallize function CurDefSeg%
def seg = 1000                             ' Change def seg for demo
? : ? "The `def seg' is"; CurDefSeg%       ' Show def seg
call CheckKeyboardStatus                   ' Call routine that changes def seg
?: ? "The `def seg' is still"; CurDefSeg%  ' Show that def seg was preserved

sub CheckKeyboardStatus

CurrentDefSeg% = CurDefSeg%                ' Preserve current def seg
def seg = &h40                             ' Change def seg to BIOS data seg
KeyStatus% = peek(&h17)                    ' Get the keyboard status byte
def seg = CurrentDefSeg%                   ' Reset def seg

?                                          ' Display status of keyboard
if (KeyStatus% and &b01000000) <> 0 then
    ? "CapsLock is on"
else
    ? "CapsLock is off"
end if
if (KeyStatus% and &b00100000) <> 0 then
    ? "NumLock is on"
else
    ? "NumLock is off"
end if
if (KeyStatus% and &b00010000) <> 0 then
    ? "ScrollLock is on"
else
    ? "ScrollLock is off"
end if

end sub
```
{% endraw %}

## DISK.BAS

{% raw %}
```bas
$link "disk.obj"			' external object file.
' ----------------------------------------------------------------------------
declare function backup%(string,string) ' Copy Files
declare function curdrv%()		' Get current drive
declare function exist%(string)		' check for file attributes
declare function find1$(string,integer)	' Find First
declare function find2$()		' Find Next
declare function freespace&(string)	' return free space on a drive
declare function iam$()			' return the current programs pathname
declare function isdir$()		' get the current directory
declare function size&(string)		' return the size of a file (bytes)
declare sub chdrv(string)		' Change Drive
declare sub flush()			' Flush File Buffers
' ----------------------------------------------------------------------------
Function Dir$(mask$,attr%)		' function to return the directory
  local a$,b$				' in a string.  mask$ is the search
					' mask (i.e. "*.BAS") and attr% are
  if mask$ = null$ then mask$ = "*.*"	' the file attributes to search for
  a$ = find1$(mask$,attr%) 		     ' 0 = normal files only
					     ' 2 = normal + hidden files
  if a$ = null$ then			     ' 4 = normal + system files
    Dir$ = null$			     '16 = volume label only
    exit function			' Dir$ will return as a string
  end if				' containing the matching files
					' seperated by spaces.
  b$ = a$

  a$ = find2$

  while a$ <> null$
    b$ = b$ + " " + a$
    a$ = find2$
  wend

  Dir$ = b$

End Function
' ----------------------------------------------------------------------------
Function DoBackup%(orig$,dest$)	' This function will backup files.

  orig$ = ucase$(orig$) + chr$(0)
  dest$ = ucase$(dest$) + chr$(0)

  DoBackup% = backup%(orig$,dest$)

End Function
' ----------------------------------------------------------------------------
' Sample Program to demonstrate Function Iam$, IsDir$, Size& and Exist%
' ----------------------------------------------------------------------------

print
print "The current directory is: ";isdir$	' test the function
print "The current program is: ";iam$
print
input "Enter a filename {no wildcards} for exist: ";filname$
a% = exist%(filname$)
if a% = -1 then
  print "Doesn't Exist"
  print "Size   = ";size&(ucase$(filname$))
else
  print "Exists = ";a%
  print "Size   = ";size&(ucase$(filname$))
end if

print

' ----------------------------------------------------------------------------
' Sample Program to Demonstrate DIR$, Curdrv%, Chdrv, Flush and Freespace&
' ----------------------------------------------------------------------------

cd$ = chr$(curdrv%)
print "The current drive is:   ";cd$
print "There are ";freespace&(chr$(curdrv%));" bytes available on this drive."
input "Enter the drive to log: ";drv$
call chdrv(ucase$(drv$))		' change drive
print "There are ";freespace&(chr$(curdrv%));" bytes available on this drive."

input "Enter the mask: ";msk$		' enter the search string
cur$ = dir$(msk$,&h00)			' find normal files only
if cur$ <> null$ then			' print the result
  cls
  print cur$
  print tally(cur$," ")+1;" Files."
else
  print "No Files."
end if

call flush				' flush all file buffers.
					' doesn't close files.
call chdrv(cd$)
' ----------------------------------------------------------------------------
' Sample Program to demonstrate Backup%
' ----------------------------------------------------------------------------
print
input "Enter Original File Name: ";source$
input "Enter Backup File Name:   ";destin$

a% = dobackup%(ucase$(source$),ucase$(destin$))

if a% <> -1 then
  select case a%
    case = 1
      print "Can't open original file."
    case = 2
      print "Can't open backup file."
    case = 3
      print "Disk Read Error."
    case = 4
      print "Disk write error."
    case = 5
      print "Disk full."
    case = 6
      print "Original file close error."
    case = 7
      print "Backup file close error."
    case else
      print "Unknown error."
  end select
else
  print "Successful Completion! "
end if

stop

```
{% endraw %}

## DISK.DOC

{% raw %}
```
				CONTENTS OF DISK.OBJ
------------------------------------------------------------------------------
function backup%(string,string)		' Copy files
function curdrv%()			' Get current drive
function exst%(string)			' check for file attributes
function find1$(string,integer)		' Find First
function find2$()			' Find Next
function freespace&(string)		' return free space on a drive
function iam$()				' return the current program pathname
function isdir$()			' get the current directory
function size&(string)			' return the size of a file (bytes)
sub chdrv(string)			' Change Drive
sub flush()				' Flush File Buffers
------------------------------------------------------------------------------
Function Name:		Backup%
Calling Parameters:	Original ASCIIZ Filename, Backup ASCIIZ Filename
Return Value:		Returns:
				-1 - No Errors
				 1 - Can't open original file
				 2 - Can't open backup file
				 3 - Disk read error
				 4 - Disk write error
				 5 - Disk full
				 6 - Can't close original file
				 7 - Can't close backup file
Notes:			You can use the standard DOS handles,
			'PRN','CON','AUX' in place of either file name.
			Drives/Paths can also be specified in the file
			names.
Cautions:		I recieve spurious 'Disk Full' errors when copying
			a file to the 'PRN' device.  Since the file does
			print correctly, I can only assume that this may
			be a timeout error that can safely be ignored.
------------------------------------------------------------------------------
Function Name:		Curdrv%
Calling Parameters:	None
Return Value:		Returns the ascii value of the current drive
------------------------------------------------------------------------------
Function Name:		Exst%
Calling Parameters:	String containing a single filename, terminated
			with a chr$(0)
Return Value:		Returns the file's attributes if found, -1 if not
			found
------------------------------------------------------------------------------
Function Name:		Find1$
Calling Parameters:	1.  String containing a file mask {i.e. *.bas}
			2.  File attribute mask
Return Value:		Returns the first file found or a null string if
			there are no matches
Cautions:		The contents of the default DTA are destroyed
------------------------------------------------------------------------------
Function Name:		Find2$
Calling Parameters:	None
Return Value:		Returns the next file found after calling Find1$ or
			a null string if there are no more files that match
Cautions:		You MUST use Find1$ BEFORE using this function
			The contents of the default DTA are destroyed
------------------------------------------------------------------------------
Function Name:		FreeSpace&
Calling Parameters:	String containing the drive id {'A'..'Z'} or a
			chr$(0) {current drive}
Return Value:		Free space {in bytes} remaining on drive
------------------------------------------------------------------------------
Function Name:		Iam$
Calling Parameters:	None
Return Value:		Returns the drive, pathname and filename of the
			currently executing program.
------------------------------------------------------------------------------
Function Name:		IsDir$
Calling Parameters:	None
Return Value:		Returns the name of the current directory or
			sub directory including the 'dr:\'
------------------------------------------------------------------------------
Function Name:  	Size&
Calling Parameters:     String containing a single filename
Return Value:		Size of filename if found, -1 if not found
Cautions:		File must be in the current directory.  Path names
			are not valid as part of the filename, but drive
			id's are.
------------------------------------------------------------------------------
Subroutine Name:	Chdrv
Calling Parameters:     Drive id to log {'A'..'Z'}
Action:			Changes the active drive
------------------------------------------------------------------------------
Subroutine Name:        Flush
Calling Parameters:	None
Action:			Flushes all open file buffers.  Does not close files
------------------------------------------------------------------------------

```
{% endraw %}

## GETCWD.BAS

{% raw %}
```bas
REM If not useing PowerBasic Windows delete or change lines with ******

$Include "regnames.inc"
$Include "Pbwindow.inc"     '******
MAP DirString$$ * 50  'Allocate some space for string
REG %AX , &H4700
REG %DX , &H0000
REG %DS , StrSeg(DirString$$)
REG %SI , StrPtr(DirString$$)
Call Interrupt &H21
REG %AX , &H1900
call interrupt 33
drive% = (REG (1) and &H00FF)
'We have the info now process it and display it.
cls
DirString$ = rtrim$(Dirstring$$)    ' remove any extra spaces
Call MakeBox(1,1,5,80,7,0,2,0,0,-1,-1)  '******
Call Boxtitle(2,"Directory Info",7,-1)  '******
select case drive%
case 0
	Prnt$ = "Current Drive is A:\ " + "The current directory is: " + DirString$
case 1
	Prnt$ = "Current Drive is B:\ " + "The current directory is: " + DirString$
case 2
	Prnt$ = "Current Drive is C:\ " + "The current directory is: " + Dirstring$
case 3
	Prnt$ = "Current Drive is D:\ " + "The current directory is: " + DirString$
case 4
	Prnt$ = "Current Drive is E:\ " + "The current directory is: " + DirString$
case 5
	Prnt$ = "Current Drive is F:\ " + "The current directory is: " + Dirstring$
case else
	Prnt$ = "Current Drive is greater than program parameters."
end select
' This case statement can be expanded for more drives
Call CtrBox(2,Prnt$)    '******Use a regular print statement
delay 3
call removebox  '*****
end
```
{% endraw %}

## HUFFMAN.BAS

{% raw %}
```bas
CLS
InFile$="A SIMPLE STRING TO BE ENCODED USING A MINIMAL NUMBER OF BITS"
CALL Huffman(InFile$,OutFile$,NewFile$)
print:print:print
PRINT "In:  ";LEN(InFile$);InFile$
PRINT "Out: ";LEN(OutFile$)
PRINT "New: ";LEN(NewFile$);NewFile$
input,r
END
'*****************************************************************************
'   Huffman Encoding File Compression Technique
'
'   From: R Sedgwick.  Algorithms.  Reading, MA: Addison-Wesley.
'                      1984.  Second Ed.  pp  286 / 93.
'
'   Converted to Power Basic by M. Rosenberg CI$: [73707,2545]
'
SUB Huffman(InText$,OutText$,NewText$)
	SHARED N%,Heap%(),Count%()
	DIM Count%(1024),Heap%(1024),Dad%(1024),Code%(256),Leng%(256)

' Count the frequency of each character in the message to be encoded (P. 287)

	FOR I%=0 to 255 : Count%(I%)=0 : NEXT I%
	Csr%=0 :  DO : INCR Csr% : X%=ASC(MID$(InText$,Csr%,1)) : INCR Count%(X%)
			LOOP UNTIL Csr%=LEN(InText$)

' Initialize the heap array to point to non-zero frequency counts (P. 290)

	N%=0 : FOR I%=0 to 255 : IF Count%(I%)<>0 THEN INCR N% : Heap%(N%)=I%
		  NEXT I%
' Construct an indirect heap on the frequency values (P. 289)

	FOR K% = N% TO 1 STEP -1 : CALL PqDownHeap(K%) : NEXT K%

' Construct the trie (P. 290)
	DO : T%=Heap%(1) : Heap%(1)=Heap%(N%) : DECR N%
		CALL PqDownHeap(1)
		Count%(255+N%)=Count%(Heap%(1))+Count%(T%)
		Dad%(T%)=255+N% : Dad%(Heap%(1))=-255-N%
		Heap%(1)=255+N% : CALL PqDownHeap(1)
	LOOP UNTIL N%=1
	Dad%(255+N%)=0

' Reconstruct the information from the representation of the coding tree (P.291)
'    computed during the sifting process.

	FOR K% = 0 TO 255
	    IF Count%(K%)=0 THEN
			Code%(K%)=0 : Leng%(K%)=0
	    ELSE
			I%=0 : J&=1 : T%=Dad%(K%) : X%=0
			DO : IF T%<0 THEN X%=X%+J& : T%=0-T%
				T%=Dad%(T%) : J&=J&+J& : INCR I%
			LOOP UNTIL T%=0
			Code%(K%)=X% : Leng%(K%)=I%
	    END IF
	NEXT K%

' Use the computed representations of the code to encode the string (P. 292)

	J%=0 : OutText$="" : Hold$=""
	DO : INCR J%
		Char%=ASC(MID$(InText$,J%,1)) : Compr$=BIN$(Code%(Char%))
		DO WHILE LEN(Compr$)< Leng%(Char%) : Compr$="0"+Compr$ : LOOP
		Hold$=Hold$+Compr$
		IF LEN(Hold$)>8 THEN
			OutText$=OutText$+CHR$(Bin2Int(LEFT$(Hold$,8)))
			Hold$=RIGHT$(Hold$,LEN(Hold$)-8)
		END IF
	LOOP UNTIL J%=LEN(InText$)

' Add a byte at the end that contains any left-over bits

	IF LEN(Hold$)>0 THEN
		Hold$=Hold$+STRING$(8-LEN(Hold$),"0")
		OutText$=OutText$+CHR$(Bin2Int(LEFT$(Hold$,8)))
	END IF
'*****************************************************************************
' Unpack compressed string into character representation of binary

	J%=0 : UnCompr$="" : NewText$=""
	DO : INCR J%
		Hold$=MID$(OutText$,J%,1) : Hold$=BIN$(ASC(Hold$))
		DO WHILE LEN(Hold$)<8 : Hold$="0"+Hold$ : LOOP
		UnCompr$=UnCompr$+Hold$
	LOOP UNTIL J%=LEN(OutText$)

' Decode compressed string

	DO : FOR  K%=1 TO 256
			IF K%=256 THEN EXIT LOOP 		'All done
			IF  Leng%(K%)>0 THEN
				IF Bin2Int(LEFT$(UnCompr$,Leng%(K%)))=Code%(K%) THEN
					UnCompr$=RIGHT$(UnCompr$,LEN(UnCompr$)-Leng%(K%))
					NewText$=NewText$+CHR$(K%) : EXIT FOR
				END IF
			END IF
		NEXT K%
	LOOP UNTIL LEN(UnCompr$) = 0


END SUB 'Huffman

SUB PqDownHeap(K%)
' Build and maintain an indirect heap on the frequency values (P. 139)
'     reversing the inequalities since we want the smallest values first.

	SHARED N%,Heap%(),Count%()
	LOCAL J%,V%,Limit%
	V%=Heap%(K%) : Limit% = N%/2
	DO WHILE K% <= Limit%
	   J%=K%+K%
	   IF J%<N% THEN IF Count%(Heap%(J%)) > Count%(Heap%(J%+1)) THEN INCR J%
	   IF Count%(V%)<=Count%(Heap%(J%)) THEN Heap%(K%)=V% : EXIT SUB
	   Heap%(K%)=Heap%(J%) : Heap%(J%)=V% : K%=J%
	LOOP
END SUB 'PqDownHeap

'*****************************************************************************
FUNCTION Bin2Int(X$)
	X$=RTRIM$(X$) :X$=LTRIM$(X$) : Ll%=LEN(X$) : Ex%=0 : Tot%=0 : I%=Ll%
	DO WHILE I% > 0
	    IF MID$(X$,I%,1)="1" THEN Tot&=Tot&+(2^Ex&)
	    INCR Ex& : DECR I% : WEND
	Bin2Int=Tot&
END FUNCTION 'Bin2Int
```
{% endraw %}

## INDENT.DOC

{% raw %}
```


				INDENT
				------
		   The Basic Programmers Best Friend


	INDENT will help basic programmers using either the Turbo
Basic(tm) language by Borland or Power Basic(tm) by Specta Publishing and
most likely any basic language source code stored in ascii format.

	What INDENT will do is properly indent the following:
	------------------------------------------------------	
		        FOR               NEXT  
		        DO                LOOP  
		  	WHILE             WEND  
	       IF       THEN     ELSE     ELSEIF     END IF
        ------------------------------------------------------
	INDENT  will detect the apostrophe REMark delimiter
	------------------------------------------------------
Good structured programming technique stresses the importance of
indentation within looping and conditional structures.  However,
remaining aware of the proper placement of indentations can be
time consuming as well as distracting.  INDENT will actually help
you find those errors in logic by better illustrating the more 
complex nested structures.

I use INDENT regularly and find it to be a great time saver. I'm sure
you will enjoy the same results.

INDENT is well error trapped and for the most part will display the
appropriate error messages.  However, neither the author, or KDS
Solutions will be held responsible for any damage arising out of the
use, non-use, misuse, or abuse of the product.

				USING INDENT	
				------------
To use indent simply type "indent" from the command line.  You will
be prompted for the source filename.  Any normal DOS path\filename
(and its extension,if there is one) will do.  The file must be in
ascii format.

Next you will be prompted to enter the destination filename.  You may
supply any valid Dos path\filename as before.  HOWEVER, you must
specify a different filename than the source.  By different, I mean
you can merely change the extender.  This is for your own piece of
mind.

The program indents three spaces for each level of nexting.  I choose
this number based on overall appearance, efficiency, and laziness.
The program will display the message "Working..." until such time
the new file is created.

If there is enough interest in this utility, I will supply a version
that allows you to pass command line parameters suitable for use in
batch files.

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

## LRWIND.DOC

{% raw %}
```
    LRWIND.PBU (Leithauser Research Windows) is a simple 
window function for PowerBASIC. The emphasis here is on 
SIMPLE. There are several more powerful wind functions 
available. However, they are more complicated to use. More 
important, they add up to 40 K to your program size, even if 
you don't use most of the features the function offers. 
LRWIND.PBU adds only 4 K.
    To use the window function, just put $LINK "LRWIND.PBU" 
in your program. To call the function, the command is
CALL Wind(XPosition%, YPosition%, BackgroundColor%, 
ForegroundColor%, MessageArray$(), MakeOrRemove%)
    In this command, you can (and probably should) replace 
all of these variables except MessageArray$() with constants. 
Thus, the actual command would look more like
CALL Wind(20,10,0,15,M$(),1)
The variables or constants have the following significance:
XPosition% is the column where the window border starts. That 
is, the left side of the window.
YPosition% is the position of the top of the window border.
BackgroundColor% and ForegroundColor% and the colors of the 
background and foreground of the text within the window.
MessageArray$() is the name of the array that contains the 
text you want to appear in the window. You must put this text 
into the array, starting at MessageArray$(1), before you call 
the window function. The array element after the last line of 
the message must contain an empty string. For example, your 
program might look like this:
M$(1)="First line":M$(2)="Second line":M$(3)="":CALL 
Wind(30,12,0,15,M$(),1)
MakeOrRemove% is either zero or any nonzero number. If the 
number is nonzero the function prints the window on the 
screen. If MakeOrRemove% equals zero, the function removes the 
existing window, restoring the original screen under it. In 
that case, all the other values are dummies, and have no 
effect. However, values of the proper type (integers and a 
string array) must be put in the proper places.
    This window function allows you to put only one window on 
the screen at a time. If you put more than one on the screen 
at once, the function can only remove the last one.
    This window function handles all of the windowing work 
automatically. It looks at the contents of the MessageArray$ 
array and determines how high and wide the window must be. It 
puts a border around the window, saves the screen, and prints 
the window. It then returns control to your program. Your 
program can then take the proper action while the window is on 
the screen. For example, if the contents of MessageArray$ list 
a numbered menu and then say "Press Number of your choice.", 
your program can then wait for a numbered key press. After the 
user presses a key, your program would call the window 
function again with a zero in the MakeOrRemove% position to 
remove the window. The window function restores all 


parameters, such as printing color and cursor location, 
after a window is either created or removed.
    Because of the border, the window is two lines higher 
than the number of lines in MessageArray$ and four characters 
wider than the longest line in MessageArray$. If you use a 
value for XPosition% or YPosition% that causes the window to 
run off the screen, the window function will move the window 
to avoid this.
    This package contains a BASIC demonstration program, 
WINDDEMO.BAS, to demonstrate how to use the window function. 
Any other questions you might have about using the window 
function should be answered by running and examining this demo 
program.

Shareware fee and related stuff

    This program is copyrighted. You may distribute the 
package containing LRWIND.PBU, WINDDEMO.BAS, and LRWIND.DOC, 
provided that all three files are kept in the package and you 
do not charge more than a token fee (no more than $10). If you 
use LRWIND.PBU in any of your programs, you are required to 
register the package by sending $5.00 to:

                         David Leithauser
                         Leithauser Research
                         4649 Van Kleeck Drive
                         New Smyrna Beach, FL 32169

    If you would like the source code for LRWIND.PBU, just 
include an extra $.50 for postage and handling when you 
register, and I will send you a printed listing of the source 
code.
    Once you have registered, you may use LRWIND.PBU in any 
and all of your programs. It is not necessary to pay 
separately each time you use LRWIND.PBU in a new program.
    This package is also a demonstration of the work done by 
Leithauser Research, a custom programming service. If you have 
a need for an unusual program that you cannot find 
commercially, send a description of the program and ask for an 
estimate. Rates are very reasonable.

```
{% endraw %}

## WINDDEMO.BAS

{% raw %}
```bas
$LINK "LRWIND.PBU"
DIM M$(10)
COLOR 11:CLS
FOR X=1 TO 350:PRINT X;:NEXT X:PRINT
M$(1)="This is a test."
M$(2)="This is line 2 of the window."
M$(3)="Press any key to erase the window."
M$(4)=""
CALL Wind(20,12,3,15,M$(),1)
A$=INPUT$(1)
CALL Wind(0,0,0,0,M$(),0)
COLOR 12
PRINT TAB(22);"Press any key to end the demo program."
A$=INPUT$(1)
```
{% endraw %}

## LSTRANGE.BAS

{% raw %}
```bas
$compile EXE
$error all off
$lib all off
$option autodim off
$option cntlbreak off
$float emulate
$stack 2048
$include "PBSTD.INC"         ' Standard named constants
$include "FILEUTIL.INC"      ' Some standard routines

Title$ = "    LstRange.EXE               Michael E. Flenniken               6-6-90"
if instr(command$, " ") then
    FileName$ = left$(command$, instr(command$, " "))
else
    FileName$ = command$
end if

WksHandle% = Open123% (FileName$)
if WksHandle% = %False then
    ? Title$
    ?
    ? "    Syntax:  LSTRANGE [<path>]<filespec>"
    ? "    where <filespec> is the file name of the spreadsheet to read.  If no"
    ? "             extension is specified, LSTRANGE will look for <filespec>.WKS "
    ? "             first, and if unseccessful, will look for <filespec>.WK1"
    ? "          <path> is an optional DOS path specification.
    ?
    ? "Unable to open file"
    END
end if

call StdOut (Title$, 13)
call StdOut ("", 13)
call StdOut ("    List of named ranges for " +ucase$(FileName$) +":", 13)

do
    call Read123Rec
    if cvi(RecType$$) = %RangeName1 _
      or cvi(RecType$$) = %RangeName2 then
        Col1% = cvi(mid$(RecData$$, 17, 2))
        Row1% = cvi(mid$(RecData$$, 19, 2))
        Col2% = cvi(mid$(RecData$$, 21, 2))
        Row2% = cvi(mid$(RecData$$, 23, 3))
        NameOut$ = using$("    \              \  ", extract$(RecData$$, chr$(0)))
        AddrOut$ = left$(CellAddress$ (Col1%, Row1%) +".." _
                        +CellAddress$ (Col2%, Row2%) +space$(16), 16)
        call StdOut (NameOut$, 0)
        call StdOut (AddrOut$, 0)
        if Column% = 2 then
            call StdOut ("", 13)
            Column% = 1
        else
            call StdOut (space$(2), 0)
            Column% = 2
        end if
    end if
loop until eof(1)
close WksHandle%

END

'************************************************************************
%Signature123 =  0
%RangeName1   = 11
%RangeName2   = 71

sub Read123Rec
    shared Record123$$, RecType$$, RecLength$$, RecData$$

get$ #1, 4, Record123$$
get$ #1, cvi(RecLength$$), RecData$$

end sub


function CellAddress$ (Col%, Row%)

if Col% > 25 then
    Cell$ = chr$(Col% \26 +64)
end if
CellAddress$ = Cell$ +chr$(Col% mod 26 +65) +mid$(str$(Row% +1), 2)

end function


function Open123% (FileToOpen$)
    local FileName$, WksHandle%
    shared Record123$$, RecType$$, RecLength$$, RecData$$

FileName$ = DefaultExt$ (FileToOpen$, "WKS")     ' Validate file name
if not Exists% (FileName$) then
    FileName$ = DefaultExt$ (FileToOpen$, "WK1")
    if not Exists% (FileName$) then
        Open123% = %False
    end if
end if
WksHandle% = GetHandle% (FileName$, "Binary")
if WksHandle% < 1 then
    Open123% = %False
    exit function
end if
map Record123$$ * 259, 2 as RecType$$, 2 as RecLength$$, 255 as RecData$$
call Read123Rec
if left$(Record123$$, 6) = chr$(%Signature123, 0, 2, 0, 4, 4) _
  or left$(Record123$$, 6) = chr$(%Signature123, 0, 2, 0, 6, 4) then
    Open123% = WksHandle%
else
    Open123% = %False
end if

end function
```
{% endraw %}

## LSTRANGE.DOC

{% raw %}
```


                              LSTRANGE.EXE
                             ver 1   6-7-90

                                   By

                          Michael E. Flenniken

                         Compuserve 71521,1311


LSTRANGE displays named ranges in Lotus 1-2-3 spreadsheet files.  Output 
can be viewed on the screen or redirected to the printer or to a file 
using standard DOS redirection symbols.



Syntax:  LSTRANGE [<path>]<filespec>"

where:  <filespec> is the file name of the spreadsheet to read.  If no
           extension is specified, LSTRANGE will look for <filespec>.WKS 
           first, and if unseccessful, will look for <filespec>.WK1.
        <path> is an optional DOS path specification.

if LSTRANGE is run without <filespec> or with an invalid <filespec>, it 
will display the correct syntax as shown above.  This will not be 
redirected.


You should be able to just load the source code into PowerBASIC and 
select Compile to create the EXE file.



I couldn't find a straight foward method of sending output to DOS 
stdout.  In Turbo Basic I could open "CON" for output, find the DOS file 
handle in the TB string segment, and change it &h01, which is the DOS 
file handle for stdout.  I want to do this with PB when I find out where 
PB stores the file buffer handles.  If anyone knows a better way than 
this or a better way than my StdOut() routine (in FILEUTIL.INC) please 
let me know.
```
{% endraw %}

## LIBMAKE.BAS

{% raw %}
```bas

'Note: This is an Include File for MAKE.BAS
'To create MAKE.EXE, Compile MAKE.BAS
'------------------------------------------------------------------------
'File: LibMake.Bas
'Purpose: Library of functions needed for Make utility
'
'FUNCTION BINTODEC!(BinaryString$) 'RETURNS: Decimal equivelent of binary string
'SUB DTSTAMP$(FileName$,date$,time$)'RETURNS: Date and Time of last change
'FUNCTION FIGDATE&(DATE$)          'IN: DATE$ = mm/dd/yy RETURNS: Julian Date
'DEF FNFILEEXISTS (FileName$)      'RETURNS: True if file exists
'FUNCTION GETFILENAME$             'RETURNS:Project main file name
'FUNCTION JULIAN#(D$,T$)           'RETURNS: pseudo julian time/date stamp
'SUB NOISE                         'Makes noise
'SUB WAITING                       'Process hit any key to continue

'------------------------------------------------------------------------
DEFINT A-Z
'Define register constants
%AX=1 : %BX=2 : %CX=3 : %DX=4 : %SI=5 : %DI=6 : %BP=7 : %DS=8 : %ES=9: %FLAGS=0
SUB DTSTAMP(FL$,D$,T$)
   'This sub returns the date and time stamp
   'In: fl$ = file name
   'Out: d$=date as mm/dd/yy
	 't$ = time as hr:mn:sc
   '1st open file to get it's handle for next part
   MAP BinBuff$$*16   'This makes sure that binary string is 16 characters

   Buf$=FL$+CHR$(0)       'ASCIIZ String
   REG %AX,&H3D02    'DOS Open File Function
   REG %DS, STRSEG(Buf$)
   REG %DX, STRPTR(Buf$)
   CALL INTERRUPT &H21  'Call DOS
   'if not on file, assign a time of 0 so it gets recompilied
   IF (REG(%FLAGS) AND 1) <> 0 THEN D$="00/00/00" :T$="00:00:00":EXIT SUB
   HANDLE = REG(%AX)   'Now AX holds file handle

   'Get file date and time
   REG %AX,&H5700   'DOS Get time and date function
   REG %BX,HANDLE   'Handle to file Fl$
   CALL INTERRUPT &H21
   TM= REG(%CX)    'Time (encoded)
   DT = REG(%DX)  'Date (encoded)

   'Now close file
   REG %AX,&H3E00  'DOS Close file function
   REG %BX,HANDLE  'BX
   CALL INTERRUPT &H21

   'Now uncode date and time
   RSET BinBuff$$=BIN$(TM)   'This insures 16 digits

    Hours$ = BinBuff$$
    RSET BinBuff$$=BIN$(DT)
    Dt$ = BinBuff$$
    Hrs%=CINT(BINTODEC!(MID$(Hours$,1,5)))   'Hours
    Mns%=CINT(BINTODEC!(MID$(Hours$,6,6)))   'Minutes
    Scs%=CINT(BINTODEC!(MID$(Hours$,12)))*2  'Seconds were in 2 sec intervals

    Yr$ =MID$(Dt$,1,7)
    Yr% = CINT(BINTODEC!(Yr$))+80  'YEAR IS OFFSERT FORM 1980
    Mn$=MID$(Dt$,8,4)
    Mn% =CINT(BINTODEC!(Mn$))       'MONTH
    Dy$=MID$(Dt$,12,6)
    Dy% =CINT(BINTODEC!(Dy$))        'DAY

    'Make up date string as: MM/DD/Yr
    MAP DtString$$*8
    DtString$$ = "00/00/00"
    MID$(DtString$$,1,2)=RIGHT$("00"+REMOVE$(STR$(Mn%)," "),2)
    MID$(DtString$$,4,2)=RIGHT$("00"+REMOVE$(STR$(Dy%)," "),2)
    MID$(DtString$$,7,2)=RIGHT$("00"+REMOVE$(STR$(Yr%)," "),2)
    D$=DtString$$  'DATE

    'Reuse DtString to make time string
    DtString$$="00:00:00"
    MID$(DtString$$,1,2)=RIGHT$("00"+REMOVE$(STR$(Hrs%)," "),2)
    MID$(DtString$$,4,2)=RIGHT$("00"+REMOVE$(STR$(Mns%)," "),2)
    MID$(DtString$$,7,2)=RIGHT$("00"+REMOVE$(STR$(Scs%)," "),2)
    T$=DtString$$   'Time String
END SUB
'------------------------------------------------------------------------
FUNCTION FIGDATE&(A$)
   'This function was "appropriated" from Howard Balinger's HBLIB file
   'on Compuserve
  LOCAL A#, M%, D%, Y&, LpYrDys%, W&, A&, B%
  M% = VAL(LEFT$(A$,2))
  D% = VAL(MID$(A$,4,2))
  Y& = VAL(RIGHT$(A$,2))
SELECT CASE M%
    CASE <1, >12
      GOTO FIGDATEError
    CASE 1,3,5,7,8,10,12
      IF D% < 1 OR D > 31% THEN FIGDATEError
    CASE 4,6,9,11
      IF D% < 1 OR D% > 30 THEN FIGDATEError
    CASE 2
      IF Y&/4 = FIX(Y&/4) AND Y& <> 0 THEN
        IF D% < 1 OR D% > 29 THEN FIGDATEError
      ELSE
        IF D% < 1 OR D% > 28 THEN FIGDATEError
           END IF: END SELECT
  IF Y& = 0 AND M% < 3 THEN GOTO DateRealOld
  IF M% < 3 THEN DECR Y&
  A& = FIX(Y&/4): W& = 1461 * A&: A& = Y& - 4*A&
  W& = W& + 365 * A&
  SELECT CASE M%
    CASE 3
      B% = 0
    CASE 4
      B% = 31
    CASE 5
      B% = 61
    CASE 6
      B% = 92
    CASE 7
      B% = 122
    CASE 8
      B% = 153
    CASE 9
      B% = 184
    CASE 10
      B% = 214
    CASE 11
      B% = 245
    CASE 12
      B% = 275
    CASE 1
      B% = 306
    CASE 2
      B% = 337
 END SELECT
 FIGDATE& = W& + B% + D% + 59: EXIT FUNCTION
DateRealOld:
 IF M% = 2 THEN FIGDATE& = D%+31 ELSE FIGDATE& = D%
EXIT FUNCTION
 FIGDATEError:
   FIGDATE& = 0
END FUNCTION
'------------------------------------------------------------------------
FUNCTION BINTODEC!(B$)
  'returns decimal equivelent of binary string
   L = LEN(B$)
   Total = 0
   Pointer=L
   FOR I = 1 TO L
      DIGIT$=MID$(B$,I,1)
      DECR Pointer
      Total=Total+(VAL(DIGIT$)*2^Pointer)
   NEXT I
   BINTODEC!=Total
END FUNCTION
'------------------------------------------------------------------------
FUNCTION GETFILENAME$
    'Returns main project filename
    'Assumes .Bas if not specified
    '1st see if command line parameter was passed
    LOCAL F$  'Filename
    F$ = COMMAND$
    IF F$="" THEN  'GET A NAME
	PRINT
	PRINT "Enter Main File Filename (.BAS is assummed if not specified):";
	INPUT F$
    END IF
    'Check for extension
    Ext=INSTR(F$,".")
    IF Ext=0 THEN F$=F$+".BAS"
    GETFILENAME$=F$
END FUNCTION
'------------------------------------------------------------------------
DEF FNFILEEXISTS (FileSpec$)

  FileSpec1$ = FileSpec$ + CHR$(0)
  FileAttribute% = 0
  REG %AX, &H4E00
  REG %CX, FileAttribute%
  REG %DS, STRSEG(FILESPEC1$)
  REG %DX, STRPTR(FILESPEC1$)
  CALL INTERRUPT &H21
  IF (REG(%FLAGS) AND 1) = 0 THEN
    FNFILEEXISTS = -1
  ELSE
    FNFILEEXISTS = 0
  END IF
END DEF 'FILEEXISTS

'------------------------------------------------------------------------
FUNCTION JULIAN#(D$,T$)
  'Creates pseudo julian time/date stamp
  'used to compare creation times
  'IN: D$ = Date String, T$ = Time String
    J&=FIGDATE&(D$)  'Get Julian Date
    'Now get fraction of day
    'T$ is now in form of  HH:MM:SS
 Seconds# =(CDBL(VAL(LEFT$(T$,2)))*60*60)+(VAL(MID$(T$,4,2))*60)+(VAL(RIGHT$(T$,2)))
 'figure part of day that past
 PT#=Seconds#/(60*60*24)     'Divide seconds by # of seconds in a day
 'Add it up
  JULIAN#=J&+PT#
 END FUNCTION
'-------------------------------------------------------------------------
SUB WAITING
   BEEP
   A$ = INKEY$  'Clear previous keystrokes into dummy variable
   PRINT"    < < <    Hit any key to continue ! ! ! > > > "
   WHILE NOT INSTAT:WEND
   A$ = INKEY$  'Clear  keystrokes into dummy variable
END SUB
'-------------------------------------------------------------------------

SUB NOISE
 FOR I% = 1 TO 2
    FOR X% = 57 TO 59
    PLAY "L64 N="+VARPTR$(X%)
    NEXT X%
 NEXT I%
END SUB
```
{% endraw %}

## MAKE.BAS

{% raw %}
```bas
'############################################################################

'FILE: MAKE.BAS  : This is the main file
'PURPOSE: UTILITY TO COMPILE ALL .PBU FILES THAT ARE NOT CURRENT
'WARNING: 1. THIS ASSUMES A FILE EXTENSION OF .BAS FOR ALL SOURCE
'	     FILES: THAT IS EASILY CHANGED BELOW, IF NEED BE.
'         2. THIS DOESN'T TRAP ERRORS OCCURRING DURING COMPILING.
'         3. ALL FILES MUST BE IN CURRENT DIRECTORY.
'         4. THIS UTILITY CREATES A BATCH FILE NAMED TMP-MKE.BAT,
'            AND WILL OVERWRITE ANY OTHER FILE OF THAT NAME.
'
'
'Author: Al Musella
'Send comments (Good or Bad) to me at Compuserve: # 76114,637

'############################################################################


'--------------- INITIALIZE ------------------------------
DEFINT A-Z
COLOR 15,1:CLS
DIM L$(200,2)  'holds filenames for ,1-> .pbu  ,2 -> .bas
DIM Comp$(200)  'holds names of files to compile
CompCount=0  'Count of items in Comp$
BatchFile$="TMP-MKE.BAT"   'Name of batch file that will compie the ubits

'Erase previous batch file
OPEN BATCHFILE$ FOR OUTPUT AS #3  'have to create one to avoid error on
CLOSE #3                         'kill statement
KILL BATCHFILE$
OPEN BATCHFILE$ FOR OUTPUT AS #3  'create batch file with names of files to
				       'compile

'display title page
PRINT STRING$(79,"*")
PRINT"                               Make Utility"
PRINT"                               Version 1.0c"
PRINT"                        Programmed By : Al Musella"
PRINT STRING$(79,"*")
PRINT
'get name of main file and display it.
FileSpec$=UCASE$(GETFILENAME$)   'function getfilename returns name of project
PRINT
PRINT"             Main File: ";FileSpec$
PRINT
'Check if on file - abort if not on file
IF NOT FNFILEEXISTS(FileSpec$) THEN PRINT"This filename is not on file.":_
       PRINT"Try running this utility again with valid filename!!!":BEEP:END

'find all $link"*.pbu" files that are involved with this project
GOSUB  GETLINKS  '-------------------- Gets names of all Linked files into L$()

'check date and time of files
'if no links found, don't waste time checking their dates
IF LinkCount=0 THEN    'This is start of long If statement
       PRINT"THERE WERE NO $LINK STATEMENTS IN THIS PROJECT!"
ELSE     'only check dates and times if there are LINKS to compile.
      'NOW L$ (,1) HAS ALL FILES LINKED IN AS : *.PBU
      GOSUB GETSOURCE   'just changes .PBU to .BAS
      PRINT
      COLOR 15,1
      PRINT"----- UNITS ------------------------------- SOURCE FILES ----------------  ";
     'now get name of files that have to be compilied
     FOR I = 1 TO LinkCount
      IF L$(I,1)<>"" AND L$(I,2)<>"" THEN
	 COLOR 14,2
	 PRINT
	 'Get time and date stamp of files
	 CALL DTSTAMP$(L$(I,1),DPbu$,TPbu$)
	 CALL DTSTAMP$(L$(I,2),DBas$,TBas$)
	 'convert to pseudo julian to compare easier
	 JPbu#=JULIAN#(DPbu$,TPbu$)  'function julian returns julian date
	 JBas#=JULIAN#(DBas$,TBas$)
	IF JBas#>JPbu# THEN  'if not current, add names to Comp$()
	   COLOR 0,4
	   INCR CompCount
	   Comp$(CompCount)=L$(I,2)
	 END IF
	PRINT L$(I,1);tab(15);DPbu$;" ";TPbu$;tab(40);L$(I,2);tab(55);DBas$;" ";TBas$;
      END IF
    NEXT I
    COLOR 14,1  'yellow/blue
    LOCATE 24,1
    PRINT
    IF CompCount>0 THEN
     'add them to batch file
     FOR I = 1 TO CompCount
       Text$="PBC -CU "+Comp$(I)
       PRINT#3,Text$
       PRINT "Adding to list: ";Text$
     NEXT I
   ELSE
     PRINT
     PRINT"No .Pbu files need to be recompiled"
     BEEP
   END IF

END IF  'This is the end of IF statement on line  56

'Now add main file to batch file
Exe$=FileSpec$  'Convert filename to .exe extension
P = INSTR(Exe$,".")
MID$(Exe$,P+1,3) = "EXE"
CALL DTSTAMP$(Exe$,DExe$,TExe$)
CALL DTSTAMP$(FileSpec$,DBas$,TBas$)
Text$="PBC -CE "+FileSpec$
PRINT "Adding to list: ";Text$
PRINT CompCount+1 ;" Files will be compilied"
PRINT
PRINT"--------------------------------------------------------------------------"
PRINT
PRINT"MAIN PROJECT:" FileSpec$,DBas$,TBas$
PRINT"COMPILED    :" Exe$,DExe$,TExe$
PRINT
PRINT#3, Text$
CLOSE#3
PRINT:PRINT:PRINT"Executing ";BatchFile$
PRINT
EXECUTE BATCHFILE$  'do the compiling

END



GETSOURCE:  'Convert .Pbu extension to .Bas for array L$
	    'Array L$(1 to LinkCount,1) holds .Pbu Filenames
	    'convert these to .Bas and store in L$(,2)
     FOR I = 1 TO LinkCount
	FPbu$=L$(I,1)  '.Pbu file
	    'for now, assume .bas - but this can be changed.
	    'Remove .Pbu , add .bAS
	FBas$ =  REMOVE$(FPbu$,".PBU")+".BAS"
	IF FNFILEEXISTS(FBAS$) THEN
	   L$(I,2) = FBas$
	ELSE
	  L$(I,2) = ""
	  L$(I,1) = ""
	  PRINT"WARNING!!! The source file for ";FPbu$;" is not in"
	  PRINT"current directory, or doesn't have an extension of .BAS"
	  PRINT"This file will not be checked!!!"
	  CALL WAITING
	END IF
     NEXT I
RETURN


GETLINKS:  ' Find all .Pbu files mentioned in the project,
	    ' and store them in array L$(1->LinkCount,1)
	    'LinkCount is returned as # of files in the array

  DIM INCS$(200)  'Hold Included filenames - to search through later

   Pointer = 0  'Pointer to next filename in Inc$()
   IncCount=0  'Count of Included filenames
   LinkCount=0 'Count of Linked filenames
   NF$ = FileSpec$  'NF$ = Next filename to check for more Links
   DO WHILE FNFILEEXISTS(NF$)
      PRINT"SEARCHING: ";NF$
      OPEN NF$ FOR INPUT AS #1
	DO WHILE NOT EOF(1)
	   LINE INPUT #1,T$   '1 line of text from file
	   IF INSTR(T$,"$") THEN  'Use this to speed it up by only
		     'checking lines with a $ in them
	     T$=UCASE$(REMOVE$(T$,ANY CHR$(9,32)))  'Remove tabs and spaces
	     IF LEFT$(T$,5)="$LINK" AND INSTR(T$,".PBU") THEN
		F$=MID$(T$,7,12)  'Isolate filename
		QUOTE = INSTR(F$,CHR$(34))  'Remove quote
		IF QUOTE>0 THEN F$=LEFT$(F$,QUOTE-1)
		       PRINT TAB(10) "FOUND :";F$
		    INCR LinkCount
		    L$(LinkCount,1)=F$
	     END IF
	     IF LEFT$(T$,8) = "$INCLUDE" THEN
	       F$=MID$(T$,10,12)  'Isolate filename
	       QUOTE = INSTR(F$,CHR$(34))  'Remove quote
	       IF QUOTE>0 THEN F$=LEFT$(F$,QUOTE-1)
		 PRINT TAB(10) "FOUND :";F$
		  IF FNFILEEXISTS(F$) THEN
		     INCR IncCount
		     INCS$(IncCount)=F$
		  ELSE
		     PRINT"WARNING!! ";F$;" is not in current directory,"
		     PRINT "and will not be checked!!!":beep:CALL WAITING
		  END IF
	     END IF
	   END IF
       LOOP
      CLOSE #1
      INCR Pointer
      NF$=INCS$(Pointer)
   LOOP
   PRINT"--------------------------------------------------------------------------"
RETURN

$INCLUDE"LibMake.Bas"  'library of functions and subs

```
{% endraw %}

## MICE.BAS

{% raw %}
```bas
$LINK "MICE.OBJ"

DECLARE FUNCTION GetMickeys&()
DECLARE FUNCTION GetMousePage%()
DECLARE FUNCTION IsMouse%()
DECLARE FUNCTION MouseButtons%()
DECLARE FUNCTION MouseInfo&()
DECLARE FUNCTION WhereMouse&()
DECLARE FUNCTION MouseType%()

DECLARE SUB ExcludeMouse(integer,integer,integer,integer)
DECLARE SUB HideMouse()
DECLARE SUB MousePenOff()
DECLARE SUB MousePenOn()
DECLARE SUB MouseSpeed(integer)
DECLARE SUB MouseWindow(integer,integer,integer,integer)
DECLARE SUB MoveMouse(integer,integer)
DECLARE SUB ResetMouse()
DECLARE SUB RestoreMouse()
DECLARE SUB SetMickeys(integer,integer)
DECLARE SUB SaveMouse()
DECLARE SUB SetMouseSensitivity(integer,integer,integer)
DECLARE SUB SetMousePage(integer)
DECLARE SUB ShowMouse()


'-----------------------------------------------------------------------------
' Sample program to demonstrate some of the mouse routines
'-----------------------------------------------------------------------------

cls

a% = IsMouse%		' check to see if mouse is present

select case a%
  case = -1
    print "You have no mouse!"
    stop
  case else
    print using "Your Mouse has ### buttons.";a%
    a& = mouseinfo&
    major& = (a& / 65536) / 256
    minor& = (a& / 65536) mod 256
    type& = (a& mod 65536) / 256
    irq&  = (a& mod 65536) mod 256
    vers = major& + (minor& / 10)
    print using "Version ####.##  Type ####  IRQ ####";_
      vers,type&,irq&
    print "Mouse Type = ";
    mt% = mousetype%
    select case mt%
      case = 1
	print "  Bus Mouse"
      case = 2
	print "  Serial Mouse"
      case = 3
	print "  InPort Mouse"
      case = 4
	print "  PS/2 Mouse"
      case = 5
	print "  HP Mouse"
    end select
end select

call showmouse				' display the mouse cursor

print
print "Mouse is in page ";getmousepage%	' tell what screen page mouse is in
print
input "Move mouse to what page ";mpg%	' move the mouse to a new page

call setmousepage(mpg%)

print "Mouse is in page ";getmousepage%

screen ,,mpg%,mpg%                      ' change screen page to mouse page

call showmouse				' display the mouse cursor

while inkey$ = null$			' give info on where the mouse is
  b& = wheremouse&
  x& = (b& mod 65536)
  y& = (b& / 65536)
  locate 10,1
  print using "Mouse is at ##### #####     Press any key to exit.";x&,y&
wend

cls

while inkey$ = null$			' tell user about mouse buttons
  b% = mousebuttons%
  locate 1,1
  print "Mouse Buttons (Press any key to exit): ";
  select case b%
    case = 0
      print "None                      "
    case = 1
      print "Left Button               "
    case = 2
      print "Right Button              "
    case = 4
      print "Middle Button             "
    case = 3
      print "Left and Right Buttons    "
    case = 5
      print "Left and Middle Buttons   "
    case = 6
      print "Right and Middle Buttons  "
    case = 7
      print "All Buttons               "
  end select
wend

```
{% endraw %}

## MICE.DOC

{% raw %}
```
'  Contents of Mice.Obj
'
'    The following routines allow you to use a mouse with your PowerBasic
'  programs.  You can use event trapping with a mouse if you follow these
'  steps:
'
'	1.  The user Must press both the left and right mouse buttons.
'	2.  Use the 'On Pen' and  'Pen On' statements to control
'           the program flow when the user presses the buttons in step 1.
'
'  Perhaps some future release of PowerBasic will have an 'On Mouse'
'  statement.
'
'  These routines are distributed AS IS.  By using the routines, you agree
'  to accept full responsibility for any problems that may arise from said
'  use.
'
'  These routines are copyright 1990.  All rights are reserved.  You may
'  freely include and use these routines in your programs.  You may also
'  freely distribute these routines, as long as this file accompanies the
'  routines.
'
'  Have Fun,
'
'
'  Brett Jones
'  [76166,2542]  CompuServe
'  B-Jones       Genie



'-----------------------------------------------------------------------------
'declare function IsMouse%()
'-----------------------------------------------------------------------------
'  IsMouse%  Returns either a 0 (no mouse installed) or the number of buttons
'    available on the mouse.  If a mouse is installed, then the mouse pointer
'    is reset to the middle of the screen, the display page is set to 0,
'    the mouse pointer is hidden, user event handlers are disabled, light pen
'    emulation is enabled, horizontal mickeys to pixels are set at 8 to 8,
'    vertical mickeys to pixels are set to 16 to 8, double speed threshold is
'    set to 64 mickeys/second, cursor defaults to block (text mode) or arrow
'    (graphics mode) and the cursor limits are set to the entire screen.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub ShowMouse()
'-----------------------------------------------------------------------------
'  ShowMouse  Allows the mouse cursor to be displayed
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub HideMouse()
'-----------------------------------------------------------------------------
'  HideMouse  Hides the mouse cursor.  Cursor movement tracking is continued
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare function WhereMouse&()
'-----------------------------------------------------------------------------
'  WhereMouse&  Returns a value from which you can determine the x and y
'    coordinates (in pixels) of the mouse pointer.  Example:
'
'		b& = WhereMouse&
'		x% = cint(b& mod 65536)
'		y% = cint(b& / 65536)
'
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare function MouseButtons%()
'-----------------------------------------------------------------------------
'  MouseButtons%  Returns the status of the mouse buttons.  If MouseButtons%
'    equals 1, then the left button is down.  If it equals 2, then the right
'    button is down.  If it equals 4, then the middle button is down.  The
'    value returned can reflect buttons pressed simultaneously.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub MoveMouse(integer,integer)
'-----------------------------------------------------------------------------
'  MoveMouse(x,y)  Moves the mouse cursor to horizontal (x) and vertical (y)
'    pixel positions.  Displays the cursor unless the cursor is hidden, or the
'    new position lies within an excluded area.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub MouseWindow(integer,integer,integer,integer)
'-----------------------------------------------------------------------------
'  MouseWindow(x1,x2,y1,y2)  Sets the area in which the mouse cursor may be
'    displayed.  X1 and X2 are the minimum and maximum horizontal pixel
'    coordinates;  Y1 and Y2 are the minimum and maximum vertical pixel
'    coordinates.  The cursor will be moved into the area if necessary.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare function GetMickeys&()
'-----------------------------------------------------------------------------
'  GetMickeys&  Returns the number of mickeys since the last call to this
'    function.  See a reference manual for more information on this function
'    (Function 0BH, Interrupt 33H).
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub SetMickeys(integer,integer)
'-----------------------------------------------------------------------------
'  SetMickeys(x,y)  Allows you to set the mickey to pixel ratios.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub ExcludeMouse(integer,integer,integer,integer)
'-----------------------------------------------------------------------------
'  ExcludeMouse(x1,y1,x2,y2)  Sets aside an area where the mouse cursor will
'    not be displayed.  x1 is the upper left X pixel coordinate, y1 is the
'    upper left Y coordinate, x2 is the lower right X coordinate and y2 is the
'    lower right Y coordinate.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub MouseSpeed(integer)
'-----------------------------------------------------------------------------
'  MouseSpeed(speed)  Sets the threshold speed for doubling pointer motion
'    on the screen to the value specified in (speed).  The default is 64
'    mickeys per second.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub SaveMouse()
'-----------------------------------------------------------------------------
'  SaveMouse  Saves the mouse driver state.  This must be used before
'    executing a child program (Dos EXEC function).  Use RestoreMouse on
'    return.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub RestoreMouse()
'-----------------------------------------------------------------------------
'  RestoreMouse  Restores the mouse to the values set by SaveMouse.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub SetMouseSensitivity(integer,integer,integer)
'-----------------------------------------------------------------------------
'  SetMouseSensitivity(HMickeys,VMickeys,DSpeed)  Allows you to set the mickey
'    to pixel ratio and the double speed at the same time.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub SetMousePage(integer)
'-----------------------------------------------------------------------------
'  SetMousePage(pagenumber)  Informs the mouse which page is to be used to
'    display it's cursor.  Note that you should also call ShowMouse if you
'    change screen pages.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare function GetMousePage%()
'-----------------------------------------------------------------------------
'  GetMousePage%  Returns the page currently displaying the mouse cursor.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub ResetMouse()
'-----------------------------------------------------------------------------
'  ResetMouse  Acts exactly as IsMouse, except it does not return the number
'    of buttons available on the mouse.  All mouse info is reset to it's
'    default state.  (Note:  This is not Function 21H, Int 33H - I am using
'    Function 00 so the hardware is also initialized).
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare function MouseInfo&()
'-----------------------------------------------------------------------------
'  MouseInfo&  Returns information on the mouse.  Example:
'
'	a& = Mouseinfo&
'	major& = (a& / 65536) / 256	' Major version #
'	minor& = (a& / 65536) mod 256   ' Minor version #
'	type& = (a& mod 65536) / 256    ' Type of mouse:
'                                       	1 = bus mouse
'						2 = serial mouse
'						3 = InPort mouse
'						4 = PS/2 mouse
'						5 = HP mouse
'	irq&  = (a& mod 65536) mod 256  ' IRQ Number
'	vers = major& + (minor& / 10)
'	print using "Version ####.##  Type ####  IRQ ####";vers,type&,irq&
'-----------------------------------------------------------------------------


'-----------------------------------------------------------------------------
'declare sub MousePenOn()
'-----------------------------------------------------------------------------
'  MousePenOn  Allows the mouse to perform as a light pen in certain programs.
'    By Pressing the left and right buttons at the same time, the mouse will
'    emulate a light pen being triggered.  Please note that a ResetMouse or
'    an IsMouse% will also turn light pen emulation on.
'-----------------------------------------------------------------------------



'-----------------------------------------------------------------------------
'declare sub MousePenOff()
'-----------------------------------------------------------------------------
'  MousePenOff  Disables the ability to use the mouse as a light pen.
'    Light pen emulation will be turned on by calling MousePenOn, ResetMouse,
'    or IsMouse%
'-----------------------------------------------------------------------------


'-----------------------------------------------------------------------------
'declare function MouseType%()
'-----------------------------------------------------------------------------
'  MouseType% returns the type of mouse installed, where:
'      	1 = bus mouse
'	2 = serial mouse
'	3 = InPort mouse
'	4 = PS/2 mouse
'	5 = HP mouse
'-----------------------------------------------------------------------------

```
{% endraw %}

## PATCH3.DOC

{% raw %}
```

                  PowerBASIC Patch Documentation
                  ==============================

6/15/90  ---  PowerBASIC patch3 data file:  PB061590.PAT

This is the third in a series of patches which should be applied to all 
copies of PowerBASIC version #2.00b.  The three patches are:

        PATCH1.ZIP  -->  PB033090.PAT
        PATCH2.ZIP  -->  PB050790.PAT
        PATCH3.ZIP  -->  PB061590.PAT

This patch data file is to be used in conjunction with PBPATCH.EXE, to add
enhancements, or to correct error conditions, in PowerBASIC.  The executable
program (PBPATCH.EXE) is distributed with the first patch data file (PATCH1),
so it is not duplicated here.  Instructions for usage of PBPATCH.EXE are
also included in PATCH1.ZIP.  If you do not have the first patch data file,
it is available from Spectra Tech Support or may be downloaded (PATCH1.ZIP)
from the PowerBASIC forum on CompuServe or GENIE.

Be certain to install all three patches to your working copy of PowerBASIC.
If there is any question, do it again.  You can't install the patches
too many times.

**************************************************************************

This patch data file is designed to modify only Rev. #2.00b of PowerBASIC,
both PB.EXE and PBC.EXE.

It provides the following enhancements and/or corrects the following
error conditions:

1.  In certain cases, the CHAIN statement may execute incorrectly, generate
a "String/Array Memory Corrupt" error (#242), or even cause a system "hang".
This is particularly noticeable when the calling program contains numerous
string variables which were not declared as COMMON.  A "work-around" which
usually allowed correct operation in the past was to specify $LIB ALL ON, 
which forced the entire run-time library to be included.  This should no 
longer be necessary.

2.  When numeric error checking is disabled, an error may be introduced
when the result of a floating point operation is assigned to an integer
variable.

3.  PowerBASIC may generate incorrect executable code, when the INP()
function is referenced in certain complex numeric expressions.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2635

     Volume in drive A has no label
     Directory of A:\

    BAR39    ZIP     19972   9-18-90   7:53a
    DEFSEG   ZIP      1284   9-18-90   8:07a
    DISK     ZIP     28672   9-18-90   8:10a
    GETCWD   ZIP     33792   9-18-90   7:50a
    HUFFMA   ZIP      2048   9-18-90   7:54a
    INDENT   ZIP     23552   9-18-90   8:05a
    LIBRARY  DOC     30241   6-27-91  11:49a
    LRWIND   ZIP      4608   9-18-90   7:51a
    LSTRAN   ZIP      4911   9-18-90   8:07a
    MAKE     ZIP      5873   9-18-90   8:02a
    MICE     ZIP      4992   9-18-90   7:50a
    PATCH3   ZIP      2048   9-18-90   8:06a
    PBNEWS   ZIP      9088   9-18-90   8:06a
    PBWNDO   EXE     93353   9-18-90   8:18a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT       861   6-27-91   2:07p
           17 file(s)     287345 bytes
                           29696 bytes free
