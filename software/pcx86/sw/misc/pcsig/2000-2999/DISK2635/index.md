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

## DEFSEG.BAS

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

## DISK.BAS

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

## GETCWD.BAS

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

## HUFFMAN.BAS

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

## WINDDEMO.BAS

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

## LSTRANGE.BAS

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

## LIBMAKE.BAS

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

## MAKE.BAS

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

## MICE.BAS

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
