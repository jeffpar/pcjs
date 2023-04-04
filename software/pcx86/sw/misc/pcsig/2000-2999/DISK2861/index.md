---
layout: page
title: "PC-SIG Library Disk #2861"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2861/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2861"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EXAMP1.BAS

```bas
$LINK "EXAMP1.OBJ"
DECLARE FUNCTION MyInstr%(STRING, STRING)

cls
line input "Enter main string: ";main$
line input "Enter 1-character string to search for: ";match$
position% = MyInstr%(main$, match$)
if position% = 0 then
  print "'";left$(match$,1);"' not found in '";main$;"'"
else
  print "'";left$(match$,1);"' found in '";main$;"' at position";position%
end if
```

## EXAMP2.BAS

```bas
$LINK "EXAMP2.OBJ"
DECLARE FUNCTION MyCat$(STRING, STRING, STRING)

cls
line input "Enter string 1: ";string1$
line input "Enter string 2: ";string2$
line input "Enter string to return if error: ";anerror$
print "Combined string: ";MyCat$(string1$, string2$, anerror$)
```

## EXAMP3.BAS

```bas
$LINK "EXAMP3.OBJ"
DECLARE SUB UpperCase(STRING)

cls
line input "Enter string: ";astring$
call UpperCase(astring$)
print "Uppercase: ";astring$

```

## EXAMP4.BAS

```bas
$LINK "EXAMP4.OBJ"
DECLARE FUNCTION DoubleMult#(DOUBLE, DOUBLE)

cls
input "Enter a double-precision floating-point number: ",num1#
input "Enter another double-precision floating-point number: ",num2#
print num1#;"*";num2#;"=";DoubleMult#(num1#, num2#)

```

## EXAMP5.BAS

```bas
$LINK "EXAMP5.OBJ"
DECLARE FUNCTION Largest%(INTEGER, INTEGER)

dim TheArray%(1:20)	'array of 1..20 of 20 elements
for x% = 1 to 20	'fill array from DATA statements
  read TheArray%(x%)
next x%
data 5,23,9,650,72,1234,18,623,584,344,24,992,441,536,4,868,2336,624,20,1

'next line searches 8 elements starting at element 5 for largest value
bigindex% = Largest%(TheArray%(5), 8)  'should return relative index 1
bigvalue% = TheArray%(bigindex%+5)     'now use index to get value (1234)

cls
print "Of the given array, the largest value is";bigvalue%
print "This value is stored at relative index";bigindex%
print "which is actually absolute index";bigindex%+5
```

## EXAMP6.BAS

```bas
$LINK "EXAMP6.OBJ"
DECLARE SUB AddThem()
PUBLIC MyVar1%, MyVar2%, MyResult%

input "Enter integer value: ",MyVar1%
input "Enter another integer value: ",MyVar2%
call AddThem
print MyVar1%;"+";MyVar2%;"=";MyResult%
```

## KEYCREAT.BAS

```bas
'Create BTRIEVE file for KEY DEMO

                        '******Master File*******
OPEN "NUL" AS #1 LEN = 185
FIELD #1, 185 AS btfil$
FIELD #1, 2 AS recl$, 2 AS pgsz$, 2 AS nkey$, 4 AS nused$, 2 AS fflag$,_
          2 AS rsvr$, 2 AS pral$, 2 AS k1pos$, 2 AS k1len$, 2 AS k1flag$,_
          4 AS n2used$, 1 AS k1typ$, 5 AS k1res$, 2 AS k2pos$, 2 AS k2len$,_
          2 AS k2flag$, 4 AS n3used$, 1 AS k2typ$, 5 AS k2res$,_
          137 AS filr$

LSET recl$=MKI$(48)               'record length = 48
LSET pgsz$=MKI$(1536)             'page size = 1536
LSET nkey$=MKI$(1)                'number of keys = 1
LSET nused$=MKI$(0)               'reserved
LSET fflag$=MKI$(0)               'file flags - normal
LSET rsvr$=MKI$(0)                'reserved
LSET pral$=MKI$(0)                'preallocate = no
LSET k1pos$=MKI$(1)               'start position key 1 = 1
LSET k1len$=MKI$(30)              'length of key 1 = 10
LSET k1flag$=MKI$(2)              'key 1 type - modifiable
LSET n2used$=MKI$(0)              'reserved
LSET k1typ$=MKI$(0)               'key 1 data type - string
LSET k1res$=MKI$(0)               'reserved

btop%=14                          'op code - create
btstat%=0                         'init stat to 0
btpos$=SPACE$(128)                'init position indicator
btdlen%=185                       'data buffer length
btkeyb$="CUSTOMER.MAS"            'key buffer = file name
btkeyn%=-1                        'abort if file exist
                                  'call btrieve
CALL btrv(btop%, btstat%, btpos$, btfil$, btdlen%, btkeyb$, btkeyn%)

GOSUB btcs                        'perform error routine
IF btstat%=59 THEN
  PRINT "CUSTOMER.MAS File already exist....operation aborted."
  ELSE
    PRINT "CUSTOMER.MAS file has been successfully created.
END IF
CLOSE
END

$INCLUDE "SUBbtrv.INC"
$INCLUDE "btcs.INC"
```

## KEYDEMO.BAS

```bas
'  KEYDEMO - DEMO of Include files by Rusty KEY
'    Compiled using Power Basic 2.1
'    Written By Rusty Key / Key Systems

$INCLUDE "DIMpopup.INC"                          'pop up arrays
$INCLUDE "DIMpuldn.INC"                          'pull down arrays
$INCLUDE "DIMdes.INC"                            'data entry arrays

   '********Initialization**********
CLS
numf$="####,###,###.##"                          'display number format
GOTO begin

title:
  COLOR 2,0                                      'correct colors
	CLS                                            'clear
	COLOR 10, 0                                    'set high
	LOCATE 2, 35: PRINT "Key Systems"
	COLOR 2, 0                                     'set low
	LOCATE 3, 32: PRINT "Include File Demo"
	PRINT
	RETURN

  '***********Main system Loop - Menu ***********
begin:
	GOSUB title
	LOCATE 4, 37: PRINT "Main Menu"
	lx% = 9: ly% = 28: vwid% = 8:hwid% = 25:m%=1   'setup window
	CALL drpop: COLOR 10, 0                        'open window
	LOCATE 10, 30: PRINT "V";                      'show menu
	COLOR 2, 0: PRINT "alidate Date": lch$(1) = "V": COLOR 10, 0
	LOCATE 11, 30: PRINT "T";
	COLOR 2, 0: PRINT "ime ValiDate": lch$(2) = "T": COLOR 10, 0
	LOCATE 12, 30: PRINT "P";
	COLOR 2, 0: PRINT "assword Demo": lch$(3) = "P": COLOR 10, 0
	LOCATE 13, 30: PRINT "D";
	COLOR 2, 0: PRINT "ata Entry Screen": lch$(4) = "D":COLOR 10, 0
	LOCATE 14, 30:PRINT "R";
  COLOR 2, 0: PRINT "eport Routines": lch$(5) = "R": COLOR 10, 0
	LOCATE 15, 30: PRINT "E";
	COLOR 2, 0: PRINT "xit to DOS": lch$(6) = "E"
	selm% = 0

makesel:
		sx% = 10: sy%= 29:ls%=23:ex%=15:hfc%=14      'setup pull down
		CALL puldn
		px% = rx% - 9: selm% = 1                     'set px% to choice
		IF px% = 6 THEN GOSUB fini: GOTO makesel     'exit to DOS?
		ON px% GOSUB vdte, vtim, pwr, btt, rept      'do choice
    LOCATE ,,0                                   'turn off cursor
    IF px%<4 THEN makesel                        'select again
		GOTO begin                                   'redraw menu

							'***** DATE VALIDATE *****
vdte:
		LOCATE 17,10: Print "Enter Date as mm/dd/yyyy:  ";
		iln%=17:icn%=37:ityp%=1:ilen%=10             'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    td%=1:dt$=irt$                               'set up date
    CALL valdt                                   'validate date
    IF bd%=1 THEN BEEP:GOTO vdte                 'bad date?
    LOCATE 18,10:PRINT "Very good...Date is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** TIME VALIDATE *****
vtim:
		LOCATE 17,10: Print "Enter Time as HH:MM:          (Military)"
		iln%=17:icn%=31:ityp%=1:ilen%=5              'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    tt%=1:tm$=irt$                               'set up time
    CALL valti                                   'validate time
    IF bt%=1 THEN BEEP:GOTO vtim                 'bad date?
    LOCATE 18,10:PRINT "Very good...Time is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** PASSWORD ENTRY *****
pwr:
		LOCATE 17,10: Print "Enter Your Password:  ";
    px%=17:py%=32                                'set up password area
    pwrd$=FNpaswrd$(" ")                         'get password
    LOCATE 18,10: PRINT "Your Password is:  ";pwrd$
    DELAY .5
    GOTO clrarea

              '***** Common Clear *****
clrarea:
	LOCATE 17, 10                                  'locate at display area
	PRINT SPACE$(50);                              'now clear it
  LOCATE 18,10
  PRINT SPACE$(50);
  RETURN

              '***** DES Example *****
btt:
	GOSUB title                                    'display customer data
	LOCATE 5, 9: PRINT "Your Name:  "; comp$
	LOCATE 7, 14: PRINT "Daytime Phone:  ("; LEFT$(cfon$, 3);
  LOCATE 7, 34: PRINT ")"; MID$(cfon$, 4, 3);
  LOCATE 7, 38: PRINT "-"; RIGHT$(cfon$, 4)
  LOCATE 9, 25: PRINT "Reference Number:  ";
	LOCATE 11, 30: PRINT "Press F10 to Accept Data"
	LOCATE 12, 36: PRINT "ESC to Abort"
	RESTORE cfgdta                                 'reset DATA
	maxdes% = 5                                    'set up DES
	FOR dx% = 1 TO maxdes%
		READ des%(dx%, 1), des%(dx%, 2), des%(dx%, 3), des%(dx%, 4), des%(dx%, 5), des%(dx%, 6)
	NEXT dx%

cfgdta:
	DATA 5,21,30,1,12,2                            'your Name
	DATA 7,31,3,3,8,12                             'Area Code
	DATA 7,35,3,3,8,12                             'Prefix
	DATA 7,39,4,3,8,12                             'Phone
  DATA 9,44,8,3,9,1                              'refen number

  desx% = 1
	GOSUB des1                                     'go DES
	IF desr% = 2 THEN RETURN                       'ESC pressed
	chgcfg% = 1                                    'flip changed
	nam$ = des$(1)                                 'pull name
  fon$ = des$(2)+des$(3)+des$(4)                 'pull phone
  refn$=des$(5)                                  'pull reference
  refn%=VAL(refn$)                               'convert ref.
  DELAY .25
	RETURN                                         'we done!

              '***** Report Area *****
rept:
  GOSUB title
	LOCATE 5, 27: PRINT "Report Options Menu"      'draw menu
	PRINT : PRINT TAB(22); "Press         Description"
	PRINT : PRINT TAB(24); "1           Display Date as Julian"
  PRINT : PRINT TAB(24); "2           Print the test file"
	PRINT : PRINT TAB(24); "0           Return to Main Menu"

here:
	LOCATE 15, 28: lc% = 0: hc% = 2                'setup your choice
	CALL urchc
  IF yc% = 0 THEN RETURN                         'return?
	ON yc% GOSUB juld, prtfil, juld                'do choice
	LOCATE , , 0                                   'turn off cursor
	IF yc% = 1 THEN                                'need to clear?
    LOCATE 15,48:PRINT " "                         'no-Clear choice
    GOTO here                                      'get next choice
    ELSE
      GOTO rept                                      'yes-redisplay
  END IF

juld:
  lx%=7:ly%=30:vwid%=4:hwid%=25:m%=1             'set up window
  CALL drpop                                     'draw window
  LOCATE 8,32:PRINT "Regular:  ";DATE$           'display date
  dte&=VAL(RIGHT$(DATE$,4)+LEFT$(DATE$,2)+MID$(DATE$,4,2))
  LOCATE 9,32:PRINT "Julian:  ";FNjulan&(dte&)   'display julian
  ak$=FNanykey$(" ")                             'wait for key
  CALL clpop                                     'close window
  RETURN                                         'go back

prtfil:
  LOCATE 20,20:prnt$="LPT1:"                     'set print device
  spf$=FNoutpt$(" ")                             'select output
  OPEN "I",#1,"KEYDEMO.BAS"                      'get file to print
  ON ERROR GOTO perr                             'enable error trap
  WHILE NOT EOF(1)                               'loop through file
    LINE INPUT#1, a$                               'read a line
    PRINT #8, a$                                   'output a line
  WEND
  PRINT "File has been printed!"
  CLOSE #1                                       'close input file
  CLOSE #8                                       'close output file
  DELAY .5
  RETURN                                         'go back

fini:
		LOCATE 23, 35: PRINT "EXIT?";
		yn$ = FNgetyn$(" ")
		IF yn$ = "N" THEN LOCATE 23, 35: PRINT "               "; : RETURN
		CLS : LOCATE 11, 25
		PRINT "Another fine product from...."
		LOCATE 14, 31
		COLOR 10, 0
		PRINT "KEY SYSTEMS"
		COLOR 2, 0
		PRINT
		END

$INCLUDE "SUBdes.INC"                            'date entry screen
$INCLUDE "inpt.INC"                              'input routine
$INCLUDE "SUBdrpop.INC"                          'draw window
$INCLUDE "SUBclpop.INC"                          'clear window
$INCLUDE "SUBpuldn.INC"                          'pull down routine
$INCLUDE "FNanykey.INC"                          'get any key press
$INCLUDE "FNgetyn.INC"                           'get Yes or No
$INCLUDE "FNoutpt.INC"                           'get output type
$INCLUDE "FNpaswrd.INC"                          'get password
$INCLUDE "FNjulan.INC"                           'Julian Convert.
$INCLUDE "SUBurchc.INC"                          'numbered menu
$INCLUDE "SUBvaldt.INC"                          'date validation
$INCLUDE "SUBvalti.INC"                          'time validation
$INCLUDE "SUBperr.INC"                           'printer error
```

## KEYDEMO1.BAS

```bas
'  KEYDEMO - DEMO of Include files by Rusty KEY
'    Compiled using Power Basic 2.1
'    Written By Rusty Key / Key Systems

$INCLUDE "DIMpopup.INC"                          'pop up arrays
$INCLUDE "DIMpuldn.INC"                          'pull down arrays
$INCLUDE "DIMdes.INC"                            'data entry arrays

   '********Initialization**********
CLS
numf$="####,###,###.##"                          'display number format
btpos$=SPACE$(128)                               'init position for BT
maspos$=btpos$                                   'init pos for master
btkeyb$=SPACE$(50)                               'init key buffer

  '*** This is the simplest BTrieve call to validate that
  '  BTrieve is actually loaded and resident.
btop%=26                                         'version request
CALL btrv(btop%, btstat%, btpos$, btfil$, btdlen%, btkeyb$, btkeyn%)
GOSUB btcs                                       'perform error routine
GOTO begin

title:
  COLOR 6,0                                      'correct colors
	CLS                                            'clear
	COLOR 10, 0                                    'set high
	LOCATE 2, 35: PRINT "Key Systems"
	COLOR 2, 0                                     'set low
	LOCATE 3, 32: PRINT "Include File Demo"
	PRINT
	RETURN

  '***********Main system Loop - Menu ***********
begin:
	GOSUB title
	LOCATE 4, 37: PRINT "Main Menu"
	lx% = 9: ly% = 28: vwid% = 8:hwid% = 25:m%=1   'setup window
	CALL drpop: COLOR 10, 0                        'open window
	LOCATE 10, 30: PRINT "D";                      'show menu
	COLOR 2, 0: PRINT "ate Validate": lch$(1) = "D": COLOR 10, 0
	LOCATE 11, 30: PRINT "T";
	COLOR 2, 0: PRINT "ime ValiDate": lch$(2) = "T": COLOR 10, 0
	LOCATE 12, 30: PRINT "P";
	COLOR 2, 0: PRINT "assword Demo": lch$(3) = "P": COLOR 10, 0
	LOCATE 13, 30: PRINT "B";
	COLOR 2, 0: PRINT "Trieve Test": lch$(4) = "B":COLOR 10, 0
	LOCATE 14, 30:PRINT "R";
  COLOR 2, 0: PRINT "eport Routines": lch$(5) = "R": COLOR 10, 0
	LOCATE 15, 30: PRINT "E";
	COLOR 2, 0: PRINT "xit to DOS": lch$(6) = "E"
	selm% = 0

makesel:
		sx% = 10: sy%= 29:ls%=23:ex%=15:hfc%=14      'setup pull down
		CALL puldn
		px% = rx% - 9: selm% = 1                     'set px% to choice
		IF px% = 6 THEN GOSUB fini: GOTO makesel     'exit to DOS?
		ON px% GOSUB vdte, vtim, pwr, btt, rept      'do choice
    LOCATE ,,0                                   'turn off cursor
    IF px%<4 THEN makesel                        'select again
		GOTO begin                                   'redraw menu

							'***** DATE VALIDATE *****
vdte:
		LOCATE 17,10: Print "Enter Date as mm/dd/yyyy:  ";
		iln%=17:icn%=37:ityp%=1:ilen%=10             'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    td%=1:dt$=irt$                               'set up date
    CALL valdt                                   'validate date
    IF bd%=1 THEN BEEP:GOTO vdte                 'bad date?
    LOCATE 18,10:PRINT "Very good...Date is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** TIME VALIDATE *****
vtim:
		LOCATE 17,10: Print "Enter Time as HH:MM:          (Military)"
		iln%=17:icn%=31:ityp%=1:ilen%=5              'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    tt%=1:tm$=irt$                               'set up time
    CALL valti                                   'validate time
    IF bt%=1 THEN BEEP:GOTO vtim                 'bad date?
    LOCATE 18,10:PRINT "Very good...Time is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** PASSWORD ENTRY *****
pwr:
		LOCATE 17,10: Print "Enter Your Password:  ";
    px%=17:py%=32                                'set up password area
    pwrd$=FNpaswrd$(" ")                         'get password
    LOCATE 18,10: PRINT "Your Password is:  ";pwrd$
    DELAY .5
    GOTO clrarea

              '***** Common Clear *****
clrarea:
	LOCATE 17, 10                                  'locate at display area
	PRINT SPACE$(50);                              'now clear it
  LOCATE 18,10
  PRINT SPACE$(50);
  RETURN

              '***** Btrieve & DES Example *****
btt:
	GOSUB title                                    'display customer data
	LOCATE 5, 9: PRINT "Your Name:  "; comp$
	LOCATE 7, 14: PRINT "Daytime Phone:  ("; LEFT$(cfon$, 3);
  LOCATE 7, 34: PRINT ")"; MID$(cfon$, 4, 3);
  LOCATE 7, 38: PRINT "-"; RIGHT$(cfon$, 4)
  LOCATE 9, 25: PRINT "Reference Number:  ";
	LOCATE 11, 30: PRINT "Press F10 to Accept Data"
	LOCATE 12, 36: PRINT "ESC to Abort"
	RESTORE cfgdta                                 'reset DATA
	maxdes% = 5                                    'set up DES
	FOR dx% = 1 TO maxdes%
		READ des%(dx%, 1), des%(dx%, 2), des%(dx%, 3), des%(dx%, 4), des%(dx%, 5), des%(dx%, 6)
	NEXT dx%

cfgdta:
	DATA 5,21,30,1,12,2                            'your Name
	DATA 7,31,3,3,8,12                             'Area Code
	DATA 7,35,3,3,8,12                             'Prefix
	DATA 7,39,4,3,8,12                             'Phone
  DATA 9,44,8,3,9,1                              'refen number

  desx% = 1
	GOSUB des1                                     'go DES
	IF desr% = 2 THEN RETURN                       'ESC pressed
	chgcfg% = 1                                    'flip changed
	nam$ = des$(1)                                 'pull name
  fon$ = des$(2)+des$(3)+des$(4)                 'pull phone
  refn$=des$(5)                                  'pull reference
  refn%=VAL(refn$)                               'convert ref.
  OPEN "NUL" AS #1 LEN = 185                     'open BASIC file
  FIELD #1, 48 AS btfil1$                        'define btrieve record
  FIELD #1, 30 AS rn$, 10 AS rp$, 8 AS rr$       'define BASIC record

  btop%=0                                        'op code - OPEN
  btstat%=0                                      'init stat to 0
  btdlen%=185                                    'set data buffer length
  btkeyb$="CUSTOMER.MAS"+SPACE$(42)              'key buffer
  btpos$=maspos$
                 'call btrieve
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)

  GOSUB btcs                                     'perform error routine
  maspos$=btpos$                                 'save position
  LSET rn$=nam$                                  'move data to recrds
  LSET rp$=fon$                                  '   same
  RSET rr$=refn$                                 '   ditto
  btop%=2                                        'set to insert
  btkeyb$=SPACE$(30)                             'define key area
  btstat%=0                                      'reset status
  btdlen%=48                                     'set data buffer length
  btkeyn%=0                                      'set key number
  btpos$=maspos$                                 'move position indicator
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)
  GOSUB btcs                                     'perform error routine
     '  You may want to put in error checking for
     '  low status message...ie. duplicate keys, ect.

  maspos$=btpos$                                 'save position
  btop%=1                                        'set to close
  btpos$=maspos$                                 'move position
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)
  GOSUB btcs                                     'check status
  CLOSE #1                                       'close BASIC file
	RETURN                                         'we done!

              '***** Report Area *****
rept:
  GOSUB title
	LOCATE 5, 27: PRINT "Report Options Menu"      'draw menu
	PRINT : PRINT TAB(22); "Press         Description"
	PRINT : PRINT TAB(24); "1           Display Date as Julian"
  PRINT : PRINT TAB(24); "2           Print the test file"
	PRINT : PRINT TAB(24); "0           Return to Main Menu"

here:
	LOCATE 15, 28: lc% = 0: hc% = 2                'setup your choice
	CALL urchc
  IF yc% = 0 THEN RETURN                         'return?
	ON yc% GOSUB juld, prtfil, juld                'do choice
	LOCATE , , 0                                   'turn off cursor
	IF yc% = 1 THEN                                'need to clear?
    LOCATE 15,48:PRINT " "                         'no-Clear choice
    GOTO here                                      'get next choice
    ELSE
      GOTO rept                                      'yes-redisplay
  END IF

juld:
  lx%=7:ly%=30:vwid%=4:hwid%=25:m%=1             'set up window
  CALL drpop                                     'draw window
  LOCATE 8,32:PRINT "Regular:  ";DATE$           'display date
  dte&=VAL(RIGHT$(DATE$,4)+LEFT$(DATE$,2)+MID$(DATE$,4,2))
  LOCATE 9,32:PRINT "Julian:  ";FNjulan&(dte&)   'display julian
  ak$=FNanykey$(" ")                             'wait for key
  CALL clpop                                     'close window
  RETURN                                         'go back

prtfil:
  LOCATE 20,20:prnt$="LPT1:"                     'set print device
  spf$=FNoutpt$(" ")                             'select output
  OPEN "I",#1,"KEYDEMO.BAS"                      'get file to print
  ON ERROR GOTO perr                             'enable error trap
  WHILE NOT EOF(1)                               'loop through file
    LINE INPUT#1, a$                               'read a line
    PRINT #8, a$                                   'output a line
  WEND
  PRINT "File has been printed!"
  CLOSE #1                                       'close input file
  CLOSE #8                                       'close output file
  DELAY .5
  RETURN                                         'go back

fini:
		LOCATE 23, 35: PRINT "EXIT?";
		yn$ = FNgetyn$(" ")
		IF yn$ = "N" THEN LOCATE 23, 35: PRINT "               "; : RETURN
		CLS : LOCATE 11, 25
		PRINT "Another fine product from...."
		LOCATE 14, 31
		COLOR 10, 0
		PRINT "KEY SYSTEMS"
		COLOR 2, 0
		PRINT
		END

$INCLUDE "SUBdes.INC"                            'date entry screen
$INCLUDE "inpt.INC"                              'input routine
$INCLUDE "SUBdrpop.INC"                          'draw window
$INCLUDE "SUBclpop.INC"                          'clear window
$INCLUDE "SUBpuldn.INC"                          'pull down routine
$INCLUDE "FNanykey.INC"                          'get any key press
$INCLUDE "FNgetyn.INC"                           'get Yes or No
$INCLUDE "FNoutpt.INC"                           'get output type
$INCLUDE "FNpaswrd.INC"                          'get password
$INCLUDE "FNjulan.INC"                           'Julian Convert.
$INCLUDE "SUBurchc.INC"                          'numbered menu
$INCLUDE "SUBbtrv.INC"                           'BTRIEVE call
$INCLUDE "btcs.INC"                              'BTRIEVE status check
$INCLUDE "SUBvaldt.INC"                          'date validation
$INCLUDE "SUBvalti.INC"                          'time validation
$INCLUDE "SUBperr.INC"                           'printer error
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2861

     Volume in drive A has no label
     Directory of A:\

    PB-FMT   EXE     85616   8-21-91  10:52a
    ASSEMBLY ZIP      8704   5-15-91   7:30a
    KEYINCL2 ZIP    147456  11-05-90   4:32a
    QB2TB    ZIP      3456   7-26-91   4:32p
    TBC2PB   ZIP      4297   8-14-91   7:41a
    FILE2861 TXT      1481  10-23-91   3:12p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       860  10-23-91   3:09p
            8 file(s)     251908 bytes
                           66560 bytes free
