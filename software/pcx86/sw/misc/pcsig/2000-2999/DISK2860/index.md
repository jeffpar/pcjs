---
layout: page
title: "PC-SIG Diskette Library (Disk #2860)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2860/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2860"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COMDLINE.DOC

{% raw %}
```
You must use this in the same directory as the READTEMP.EXE files. This
program spawns (sort of like shell in basic) READTEMP.EXE.

There unfortunately are two differnet programs named READTEMP.BAS. See
doc files in sub directory for explanation. One will create perm font
files and one creates temp font files. 

```
{% endraw %}

## READTEMP.BAS

{% raw %}
```bas
' This is routine for generating *.444 permanent font files.............
' This is routine for generating *.444 permanent font files.............
' This is routine for generating *.444 permanent font files.............
' This is routine for generating *.444 permanent font files.............
' This is routine for generating *.444 permanent font files.............
' This is routine for generating *.444 permanent font files.............
' This routine compresses a sequence of numbers like---
' -33
' 0 0
' 0 0
' 0 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 0 0
' 0 0
' 0 0
' 0 0
' 0 0
' 8192 0
' 0 0
' 0 0
' 0 0
' which represents the pixel bit map of ! to the following equiv. set --
'-33
' 18003
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
' 18005
'8192 0
' 18003
' while the saving in this case was not particularly dramatic, other
' cases can be.
a$ = "fntrcord.fil"     ' a$ is the font file record saved from comdline.
open a$ for input as #1
input #1, b$   ' horizontal font filename.
input #1, c$   ' vertical font filename.
close
cls
locate 12,20
print b$, c$
locate 20,15:? "processing horizontal font file."
locate 1,1
aa%=instr(b$,".")
bb%=instr(c$,".")
bn$=left$(b$,aa%-1)   ' b$ filename without extension, horiz.
cn$=left$(c$,bb%-1)   ' c$ filename without extension, vert .
bt$=bn$+".tmp"        ' b$ filename with .tmp extension, horz.
bf$=bn$+".fin"        ' b$ filename with .fin extension, horz.
ct$=cn$+".tmp"        ' c$ filename with .tmp extension, vert.
cf$=cn$+".fin"        ' c$ filename with .fin extension, vert.
'goto billtemp
on error goto clsit

open b$ for input as #1      'Uncompresses C font map.
open bt$ for output as #2    'Zero's replaced.
while not EOF(1)
bbb:
input #1, tb$
db$=left$(tb$,3)                 'If there is a 0 0 then it will be stored as
if instr(db$,"0 0") > 0  then    '1800x. This because there are clusters of
   nn%=nn%+1                     'xero's which can be replaced by one word.
   goto bbb                     'nn% gives the number in a cluster. Then
end if                        'result - 180xx gives number of lines containing
if nn% > 0 then               'zero's.
   hh$=tb$
   tb%=18000+nn%
   tb$=str$(tb%)
   ? tb$; " ";
   print #2, tb$
   tb$=""
   nn%=0
   print #2, hh$
   hh$=""
end if
if instr(db$,"0 0") = 0 and tb$ <> "" then print #2, tb$
wend
goto poiu
clsit:
resume iii
iii:
poiu:
close

on error goto 0
on error goto klsit

cls
locate 12,20
print b$, c$
locate 20,15:? "processing vertical font file."
locate 1,1
'  now process vertical file.
nn%=0
tb%=0
hh$=""
open c$ for input as #1      'Uncompresses C font map.
open ct$ for output as #2    'Zero's replaced.
while not EOF(1)
www:
input #1, tb$
db$=left$(tb$,3)                 'If there is a 0 0 then it will be stored as
if instr(db$,"0 0") > 0  then    '1800x. This because there are clusters of
   nn%=nn%+1                     'xero's which can be replaced by one word.
   goto www                     'nn% gives the number in a cluster. Then
end if                        'result - 180xx gives number of lines containing
if nn% > 0 then               'zero's.
   hh$=tb$
   tb%=18000+nn%
   tb$=str$(tb%)
   ? tb$;" ";
   print #2, tb$
   tb$=""
   nn%=0
   print #2, hh$
   hh$=""
end if
if instr(db$,"0 0") = 0 and tb$ <> "" then print #2, tb$
wend
goto iuyt
klsit:
resume jjj
jjj:
iuyt:
close
billtemp:

rem ////////////////////
open bt$ for input as #1
open bn$+".333" for output as #2
WHILE (NOT EOF(1))
eynd:
input #1, n%
if n% < 0 then
print #2, tot$       ' because it's the ascii code of the font*(-1)!
print tot$
tot$=""
goto eynd
end if
if n% > 134 then
m% = n%\135
rm%=n%-m%*135
mm$=chr$(m%+50)
rm$=chr$(rm%+50)
pm$=mm$+rm$
tot$ = tot$ + pm$ + " "
pm$="":mm$="":rm$=""
else
pm$ = chr$(n%+50)
tot$ = tot$ + pm$ + " "
pm$=""
end if
wend
close
rem ////////////////////
pm$="":mm$="":rm$=""
n%=0:m%=0:rn%=0:tot$=""
open ct$ for input as #1
open cn$+".333" for output as #2
WHILE (NOT EOF(1))
fynd:
input #1, n%
if n% < 0 then
print #2, tot$       ' because it's the ascii code of the font*(-1)!
print tot$
tot$=""
goto fynd
end if
if n% > 134 then
m% = n%\135
rm%=n%-m%*135
mm$=chr$(m%+50)
rm$=chr$(rm%+50)
pm$=mm$+rm$
tot$ = tot$ + pm$ + " "
pm$="":mm$="":rm$=""
else
pm$ = chr$(n%+50)
tot$ = tot$ + pm$ + " "
pm$=""
end if
wend
close

cls
nn%=0:a$="":b$="":c$=""
OPEN "I",#3, bn$+".333"
OPEN "O",#1, bn$+".444"
WHILE (NOT EOF(3))
input #3, a$
if len(a$) > 3 then
nn%=nn%+1
b$=str$(nn%)
c$ = "font$("+b$+")"+" = "+chr$(34)+a$+chr$(34)
? c$
print #1, c$
a$=""
end if
wend
CLOSE
cls
nn%=0:a$="":b$="":c$=""
OPEN "I",#3, cn$+".333"
OPEN "O",#1, cn$+".444"
WHILE (NOT EOF(3))
input #3, a$
if len(a$) > 3 then
nn%=nn%+1
b$=str$(nn%)
c$ = "font$("+b$+")"+" = "+chr$(34)+a$+chr$(34)
? c$
print #1, c$
a$=""
end if
wend
CLOSE

end
```
{% endraw %}

## READTEMP.BAS

{% raw %}
```bas
' This routine compresses a sequence of numbers like---
' -33
' 0 0
' 0 0
' 0 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 8192 0
' 0 0
' 0 0
' 0 0
' 0 0
' 0 0
' 8192 0
' 0 0
' 0 0
' 0 0
' which represents the pixel bit map of ! to the following equiv. set --
'-33
' 18003
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
'8192 0
' 18005
'8192 0
' 18003
' while the saving in this case was not particularly dramatic, other
' cases can be.
a$ = "fntrcord.fil"     ' a$ is the font file record saved from comdline.
open a$ for input as #1
input #1, b$   ' horizontal font filename.
input #1, c$   ' vertical font filename.
close
cls
locate 12,20
print b$, c$
locate 20,15:? "processing horizontal font file."
locate 1,1
aa%=instr(b$,".")
bb%=instr(c$,".")
bn$=left$(b$,aa%-1)   ' b$ filename without extension, horiz.
cn$=left$(c$,bb%-1)   ' c$ filename without extension, vert .
bt$=bn$+".tmp"        ' b$ filename with .tmp extension, horz.
bf$=bn$+".fin"        ' b$ filename with .fin extension, horz.
ct$=cn$+".tmp"        ' c$ filename with .tmp extension, vert.
cf$=cn$+".fin"        ' c$ filename with .fin extension, vert.
on error goto clsit

open b$ for input as #1      'Uncompresses C font map.
open bt$ for output as #2    'Zero's replaced.
while not EOF(1)
bbb:
input #1, tb$
db$=left$(tb$,3)                 'If there is a 0 0 then it will be stored as
if instr(db$,"0 0") > 0  then    '1800x. This because there are clusters of
   nn%=nn%+1                     'xero's which can be replaced by one word.
   goto bbb                     'nn% gives the number in a cluster. Then
end if                        'result - 180xx gives number of lines containing
if nn% > 0 then               'zero's.
   hh$=tb$
   tb%=18000+nn%
   tb$=str$(tb%)
   ? tb$; " ";
   print #2, tb$
   tb$=""
   nn%=0
   print #2, hh$
   hh$=""
end if
if instr(db$,"0 0") = 0 and tb$ <> "" then print #2, tb$
wend
goto poiu
clsit:
resume iii
iii:
poiu:
close

on error goto 0
on error goto klsit

cls
locate 12,20
print b$, c$
locate 20,15:? "processing vertical font file."
locate 1,1
'  now process vertical file.
nn%=0
tb%=0
hh$=""
open c$ for input as #1      'Uncompresses C font map.
open ct$ for output as #2    'Zero's replaced.
while not EOF(1)
www:
input #1, tb$
db$=left$(tb$,3)                 'If there is a 0 0 then it will be stored as
if instr(db$,"0 0") > 0  then    '1800x. This because there are clusters of
   nn%=nn%+1                     'xero's which can be replaced by one word.
   goto www                     'nn% gives the number in a cluster. Then
end if                        'result - 180xx gives number of lines containing
if nn% > 0 then               'zero's.
   hh$=tb$
   tb%=18000+nn%
   tb$=str$(tb%)
   ? tb$;" ";
   print #2, tb$
   tb$=""
   nn%=0
   print #2, hh$
   hh$=""
end if
if instr(db$,"0 0") = 0 and tb$ <> "" then print #2, tb$
wend
goto iuyt
klsit:
resume jjj
jjj:
iuyt:
close


' The previously compressed file containing the font bit patterns and
' the ascii code multiplied by -1 (-33 to represent chr$(33) or !, is
' seperated into a tot% array containing only power of 2 font bit patterns
' and an ask% array containing the position of the ascii char represented
' by tot%. These to arrays are the saved in a binary mode (BSAVED) to
' disk. This way a binary file can be converted into the arrays used
' in the font re-construction in a very fast binary load operation
' BLOAD.

on error goto 0
on error goto lclsit
' ╔══════════════════════════════════════════════════════════════════════╗
' ║   Note: When tb% < 0 then -tb% is ascii code number of character info║
' ║ which follows.                                                       ║
' ╚══════════════════════════════════════════════════════════════════════╝
bb%=29000
aa%=250
dim ask%(aa%)
dim tot%(bb%)
open bt$ for input as #1
?:?:?:?:? "Processing compressed file: ";bt$; " into binary file to BSAVE."
while not EOF(1)
count% = count% +1
input #1, tb%
tot%(count%) = tb%
if tb% < 0 then
hh% = hh% +1
ask%(hh%) = count%
end if
wend
goto ytre
lclsit:
resume xyt
xyt:
ytre:
close
on error goto 0
DEF SEG = VARSEG(tot%(0))
BSAVE (bn$+".DAT"), VARPTR(tot%(0)), 8000   'Big enough for this font style.
DEF SEG = VARSEG(ask%(0))
BSAVE (bn$+".IND"), VARPTR(ask%(0)), 250

hh%=0
count%=0
erase ask%
erase tot%
on error goto 0
on error goto mclsit
' ╔══════════════════════════════════════════════════════════════════════╗
' ║   Note: When tb% < 0 then -tb% is ascii code number of character info║
' ║ which follows.                                                       ║
' ╚══════════════════════════════════════════════════════════════════════╝
bb%=29000
aa%=250
dim ask%(aa%)
dim tot%(bb%)

open ct$ for input as #1
?:?:?:?:? "Processing compressed file: ";ct$; " into binary file to BSAVE."
while not EOF(1)
count% = count% +1
input #1, tb%
tot%(count%) = tb%
if tb% < 0 then
hh% = hh% +1
ask%(hh%) = count%
end if
wend
goto rewq
mclsit:
resume xyz
xyz:
rewq:
close
on error goto 0
DEF SEG = VARSEG(tot%(0))
BSAVE (cn$+".DAT"), VARPTR(tot%(0)), 8000   'Big enough for this font style.
DEF SEG = VARSEG(ask%(0))
BSAVE (cn$+".IND"), VARPTR(ask%(0)), 250

'  Font styles available in this demonstration are ---
'	"Pbvsmall.DAT"
'	"Pbvsmall.IND"
'	"Pbhsmall.DAT"
'	"Pbhsmall.IND"
'	"Pbvsanf.DAT"
'	"Pbvsanf.IND"
'	"Pbhsanf.DAT"
'	"Pbhsanf.IND"
'	"Pbvgoth.DAT"
'	"Pbvgoth.IND"
'	"Pbhgoth.DAT"
'	"Pbhgoth.IND"
Kill "*.res"
kill "*.tmp"

end


```
{% endraw %}

## TEMPFDMO.BAS

{% raw %}
```bas
on error goto nexopen
'******************************************************************
'  Set error trap and try to set graphics screen 9. If that fails
'  then try screen 2. save information for later use.
'******************************************************************

scrn%=9
screen scrn%
screen 0

goto didopen

nexopen:
scrn%=2
resume didopen
didopen:
on error goto 0

if scrn%=2 then
  screen 2
  color 15,0
  cls
end if

if scrn% > 2 then
  screen scrn%
  color 14,1
  cls
end if


DECLARE SUB Pbfonts(integer, integer, string, string, integer)
public xpos%, ypos%, font$, chrr$, colr%, scrn%, zz%, gg%
'                      Usage
'  CALL Pbfonts(xpos%, ypos%, font$, chrr$, colr%)

'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT
	font$ = "Pbhgoth1"
	h$ = "   This is a demonstration of the":ypos%=30:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "Font program which requires access":ypos%=60:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "of font files during execution.    ":ypos%=90:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbhsans3"
	h$ = "It is faster than the Perm-Font  ":ypos%=120:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbvsans3"
	h$ = "program ..":ypos%=340:xpos%=30
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "Pbvgoth3"
	h$ = "The drawback":ypos%=340:xpos%=70:jj%=0
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "Pbhsmal7"
	h$ = "is, it is not independent":ypos%=170:o%=0:jj%=jj%-4
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "of run time disk access.":ypos%=200:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "All Font types are always":ypos%=230:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "available. Press key...":ypos%=300:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	while not instat:wend:ll$=inkey$

	jj%=0
	cls
	font$ = "Pbhsans1"
	h$ = "   I would like to know if there ":ypos%=30:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbhsmal4"
	h$ = "is interest in marketing this disk":ypos%=60:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbhsans3"
	h$ = "and the perm-font disk. Loydd is  ":ypos%=90:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbhgoth1"
	h$ = "familiar with this work and if you":ypos%=120:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "Pbvsans3"
	h$ = "have need to":ypos%=340:xpos%=30
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "Pbvgoth3"
	h$ = "contact  me, ":ypos%=340:xpos%=70:jj%=0
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "Pbhsmal7"
	h$ = "then (415) 969-5533 ext. 373":ypos%=170:o%=0:jj%=jj%-4
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "durring week or (408)  ":ypos%=200:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "946-2519 at home after 5pm.":ypos%=230:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "Bill Sandall. <E> ends.":ypos%=300:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	while not instat:wend

	end
	lpps:
	do
	o% = o%+1
	ki$=mid$(h$,o%,1)

	CALL Pbfonts((o%+jj%)*17, ypos%, font$ , ki$, int(12*rnd + 2))
	if o%=eos% then exit loop
	loop
	return
	lppt:
	do
	jj% = jj%+1
	ki$=mid$(h$,jj%,1)
	CALL Pbfonts(xpos%, ypos%-14*jj%, font$ , ki$, int(12*rnd + 2))
	if jj%=eos% then exit loop
	loop
	return

' ╔═════════════════════════════════════╗
' ║    Ok, Here is the missing $LINK!   ║
' ╚═════════════════════════════════════╝

$link "TEMPFPBU.PBU"

END

```
{% endraw %}

## TEMPFPBU.BAS

{% raw %}
```bas
EXTERNAL scrn%, zz%, gg%
SUB Pbfonts(xpos%, ypos%, font$, chrr$, colr%) PUBLIC
  shared scrn%, zz%, gg%
  static ji%, ij%
  static vgoth1ind%(), vgoth1pix%(), hgoth1ind%(), hgoth1pix%()
  static vgoth3ind%(), vgoth3pix%(), hgoth3ind%(), hgoth3pix%()
  static vsans1ind%(), vsans1pix%(), hsans1ind%(), hsans1pix%()
  static vsans3ind%(), vsans3pix%(), hsans3ind%(), hsans3pix%()
  static vsmal4ind%(), vsmal4pix%(), hsmal4ind%(), hsmal4pix%()
  static vsmal7ind%(), vsmal7pix%(), hsmal7ind%(), hsmal7pix%()
  static Pbhgoth1loaded%, Pbvgoth1loaded%,Pbhgoth3loaded%, Pbvgoth3loaded%
  static Pbhsans1loaded%,Pbvsans1loaded%,Pbhsans3loaded%,Pbvsans3loaded%
  static Pbhsmal4loaded%, Pbvsmal4loaded%,Pbhsmal7loaded%, Pbvsmal7loaded%
      ji%=10000
      ij%=250
  if scrn% = 2 then colr%=15
  v%=1
  select case font$
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT

    case "Pbvsmal4"
     if Pbvsmal4loaded% = 0 then
  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     if Pbvsans1loaded% = 1 then
       erase vsans1pix%, vsans1ind%
       Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
       erase vsans3pix%, vsans3ind%
       Pbvsans3loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
       erase hsans1pix%, hsans1ind%
       Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
       erase hsans3pix%, hsans3ind%
       Pbhsans3loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
'/////////////////////////////////////////////
       dim vsmal4pix%(ji%), vsmal4ind%(ij%)
       DEF SEG = VARSEG(vsmal4pix%(0))
       BLOAD "Pbvsmal4.DAT", VARPTR(vsmal4pix%(0))
       DEF SEG = VARSEG(vsmal4ind%(0))
       BLOAD "Pbvsmal4.IND", VARPTR(vsmal4ind%(0))
	Pbvsmal4loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vsmal4ind%(j%)+1 to vsmal4ind%(j%+1)-1
	 tb%=vsmal4pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv4aaa
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv4aaa:
       next

    case "Pbhsmal4"
     if Pbhsmal4loaded% = 0  then
  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     if Pbvsans1loaded% = 1 then
       erase vsans1pix%, vsans1ind%
       Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
       erase vsans3pix%, vsans3ind%
       Pbvsans3loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
       erase hsans1pix%, hsans1ind%
       Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
       erase hsans3pix%, hsans3ind%
       Pbhsans3loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
'/////////////////////////////////////////////
      dim hsmal4pix%(ji%), hsmal4ind%(ij%)
       DEF SEG = VARSEG(hsmal4pix%(0))
       BLOAD "Pbhsmal4.DAT", VARPTR(hsmal4pix%(0))
       DEF SEG = VARSEG(hsmal4ind%(0))
       BLOAD "Pbhsmal4.IND", VARPTR(hsmal4ind%(0))
       Pbhsmal4loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hsmal4ind%(j%)+1 to hsmal4ind%(j%+1)-1
	 tb%=hsmal4pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh4aaa
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh4aaa:
       next
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT

    case "Pbvsmal7"
      if Pbvsmal7loaded% = 0 then
  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     if Pbvsans1loaded% = 1 then
       erase vsans1pix%, vsans1ind%
       Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
       erase vsans3pix%, vsans3ind%
       Pbvsans3loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
       erase hsans1pix%, hsans1ind%
       Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
       erase hsans3pix%, hsans3ind%
       Pbhsans3loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
'/////////////////////////////////////////////
       dim vsmal7pix%(ji%), vsmal7ind%(ij%)
       DEF SEG = VARSEG(vsmal7pix%(0))
       BLOAD "Pbvsmal7.DAT", VARPTR(vsmal7pix%(0))
       DEF SEG = VARSEG(vsmal7ind%(0))
       BLOAD "Pbvsmal7.IND", VARPTR(vsmal7ind%(0))
	Pbvsmal7loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vsmal7ind%(j%)+1 to vsmal7ind%(j%+1)-1
	 tb%=vsmal7pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv7aaa
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv7aaa:
       next

    case "Pbhsmal7"
     if Pbhsmal7loaded% = 0  then
  '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     if Pbvsans1loaded% = 1 then
       erase vsans1pix%, vsans1ind%
       Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
       erase vsans3pix%, vsans3ind%
       Pbvsans3loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
       erase hsans1pix%, hsans1ind%
       Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
       erase hsans3pix%, hsans3ind%
       Pbhsans3loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
'/////////////////////////////////////////////
      dim hsmal7pix%(ji%), hsmal7ind%(ij%)
       DEF SEG = VARSEG(hsmal7pix%(0))
       BLOAD "Pbhsmal7.DAT", VARPTR(hsmal7pix%(0))
       DEF SEG = VARSEG(hsmal7ind%(0))
       BLOAD "Pbhsmal7.IND", VARPTR(hsmal7ind%(0))
       Pbhsmal7loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hsmal7ind%(j%)+1 to hsmal7ind%(j%+1)-1
	 tb%=hsmal7pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh7aaa
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh7aaa:
       next
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT

    case "Pbvsans1"
      if Pbvsans1loaded% = 0 then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
' -------------------------------------------
       dim vsans1pix%(ji%), vsans1ind%(ij%)
       DEF SEG = VARSEG(vsans1pix%(0))
       BLOAD "Pbvsans1.DAT", VARPTR(vsans1pix%(0))
       DEF SEG = VARSEG(vsans1ind%(0))
       BLOAD "Pbvsans1.IND", VARPTR(vsans1ind%(0))
	Pbvsans1loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vsans1ind%(j%)+1 to vsans1ind%(j%+1)-1
	 tb%=vsans1pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv4bbb
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv4bbb:
       next

    case "Pbhsans1"
     if Pbhsans1loaded% = 0  then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
' -------------------------------------------
      dim hsans1pix%(ji%), hsans1ind%(ij%)
       DEF SEG = VARSEG(hsans1pix%(0))
       BLOAD "Pbhsans1.DAT", VARPTR(hsans1pix%(0))
       DEF SEG = VARSEG(hsans1ind%(0))
       BLOAD "Pbhsans1.IND", VARPTR(hsans1ind%(0))
       Pbhsans1loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hsans1ind%(j%)+1 to hsans1ind%(j%+1)-1
	 tb%=hsans1pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh4bbb
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh4bbb:
       next
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT

    case "Pbvsans3"
    if Pbvsans3loaded% = 0 then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
' -------------------------------------------
       dim vsans3pix%(ji%), vsans3ind%(ij%)
       DEF SEG = VARSEG(vsans3pix%(0))
       BLOAD "Pbvsans3.DAT", VARPTR(vsans3pix%(0))
       DEF SEG = VARSEG(vsans3ind%(0))
       BLOAD "Pbvsans3.IND", VARPTR(vsans3ind%(0))
	Pbvsans3loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vsans3ind%(j%)+1 to vsans3ind%(j%+1)-1
	 tb%=vsans3pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv7bbb
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv7bbb:
       next

    case "Pbhsans3"
     if Pbhsans3loaded% = 0  then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvgoth1loaded% = 1 then
	erase vgoth1pix%, vgoth1ind%
	Pbvgoth1loaded% = 0
     end if
     if Pbvgoth3loaded% = 1 then
	erase vgoth3pix%, vgoth3ind%
	Pbvgoth3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhgoth1loaded% = 1 then
	erase hgoth1pix%, hgoth1ind%
	Pbhgoth1loaded% = 0
     end if
     if Pbhgoth3loaded% = 1 then
	erase hgoth3pix%, hgoth3ind%
	Pbhgoth3loaded% = 0
     end if
' -------------------------------------------
       dim hsans3pix%(ji%), hsans3ind%(ij%)
       DEF SEG = VARSEG(hsans3pix%(0))
       BLOAD "Pbhsans3.DAT", VARPTR(hsans3pix%(0))
       DEF SEG = VARSEG(hsans3ind%(0))
       BLOAD "Pbhsans3.IND", VARPTR(hsans3ind%(0))
       Pbhsans3loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hsans3ind%(j%)+1 to hsans3ind%(j%+1)-1
	 tb%=hsans3pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh7bbb
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh7bbb:
       next
    case "Pbvgoth1"
      if Pbvgoth1loaded% = 0 then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvsans1loaded% = 1 then
	erase vsans1pix%, vsans1ind%
	Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
	erase vsans3pix%, vsans3ind%
	Pbvsans3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
	erase hsans1pix%, hsans1ind%
	Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
	erase hsans3pix%, hsans3ind%
	Pbhsans3loaded% = 0
     end if
' -------------------------------------------
       dim vgoth1pix%(ji%), vgoth1ind%(ij%)
       DEF SEG = VARSEG(vgoth1pix%(0))
       BLOAD "Pbvgoth1.DAT", VARPTR(vgoth1pix%(0))
       DEF SEG = VARSEG(vgoth1ind%(0))
       BLOAD "Pbvgoth1.IND", VARPTR(vgoth1ind%(0))
	Pbvgoth1loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vgoth1ind%(j%)+1 to vgoth1ind%(j%+1)-1
	 tb%=vgoth1pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv4ccc
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv4ccc:
       next

    case "Pbhgoth3"
     if Pbhgoth3loaded% = 0  then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvsans1loaded% = 1 then
	erase vsans1pix%, vsans1ind%
	Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
	erase vsans3pix%, vsans3ind%
	Pbvsans3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
	erase hsans1pix%, hsans1ind%
	Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
	erase hsans3pix%, hsans3ind%
	Pbhsans3loaded% = 0
     end if
' -------------------------------------------
      dim hgoth3pix%(ji%), hgoth3ind%(ij%)
       DEF SEG = VARSEG(hgoth3pix%(0))
       BLOAD "Pbhgoth3.DAT", VARPTR(hgoth3pix%(0))
       DEF SEG = VARSEG(hgoth3ind%(0))
       BLOAD "Pbhgoth3.IND", VARPTR(hgoth3ind%(0))
       Pbhgoth3loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hgoth3ind%(j%)+1 to hgoth3ind%(j%+1)-1
	 tb%=hgoth3pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh4ccc
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh4ccc:
       next
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT
    case "Pbhgoth1"
      if Pbhgoth1loaded% = 0 then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvsans1loaded% = 1 then
	erase vsans1pix%, vsans1ind%
	Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
	erase vsans3pix%, vsans3ind%
	Pbvsans3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
	erase hsans1pix%, hsans1ind%
	Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
	erase hsans3pix%, hsans3ind%
	Pbhsans3loaded% = 0
     end if
' -------------------------------------------
       dim hgoth1pix%(ji%), hgoth1ind%(ij%)
       DEF SEG = VARSEG(hgoth1pix%(0))
       BLOAD "Pbhgoth1.DAT", VARPTR(hgoth1pix%(0))
       DEF SEG = VARSEG(hgoth1ind%(0))
       BLOAD "Pbhgoth1.IND", VARPTR(hgoth1ind%(0))
	Pbhgoth1loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = hgoth1ind%(j%)+1 to hgoth1ind%(j%+1)-1
	 tb%=hgoth1pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbv4eee
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbv4eee:
       next

    case "Pbvgoth3"
     if Pbvgoth3loaded% = 0  then
'++++++++++++++++++++++++++++++++++++++++++++
     if Pbvsmal4loaded% = 1 then
       erase vsmal4pix%, vsmal4ind%
       Pbvsmal4loaded% = 0
     end if
     if Pbvsmal7loaded% = 1 then
       erase vsmal7pix%, vsmal7ind%
       Pbvsmal7loaded% = 0
     end if
     if Pbvsans1loaded% = 1 then
	erase vsans1pix%, vsans1ind%
	Pbvsans1loaded% = 0
     end if
     if Pbvsans3loaded% = 1 then
	erase vsans3pix%, vsans3ind%
	Pbvsans3loaded% = 0
     end if
     if Pbhsmal4loaded% = 1 then
       erase hsmal4pix%, hsmal4ind%
       Pbhsmal4loaded% = 0
     end if
     if Pbhsmal7loaded% = 1 then
       erase hsmal7pix%, hsmal7ind%
       Pbhsmal7loaded% = 0
     end if
     if Pbhsans1loaded% = 1 then
	erase hsans1pix%, hsans1ind%
	Pbhsans1loaded% = 0
     end if
     if Pbhsans3loaded% = 1 then
	erase hsans3pix%, hsans3ind%
	Pbhsans3loaded% = 0
     end if
' -------------------------------------------
      dim vgoth3pix%(ji%), vgoth3ind%(ij%)
       DEF SEG = VARSEG(vgoth3pix%(0))
       BLOAD "Pbvgoth3.DAT", VARPTR(vgoth3pix%(0))
       DEF SEG = VARSEG(vgoth3ind%(0))
       BLOAD "Pbvgoth3.IND", VARPTR(vgoth3ind%(0))
       Pbvgoth3loaded% = 1
     end if
       y=0
       j% = asc(chrr$)-32
      for n% = vgoth3ind%(j%)+1 to vgoth3ind%(j%+1)-1
	 tb%=vgoth3pix%(n%)
	 if tb% > 18000 then    ' Then we have cluster of zero's
	   y=y+(tb%-18000)
	   yi% = int(y)
	   tb%=0
	   goto Pbh4eee
	 end if
	 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
	   if tb% > 0 then      ' If it's not zero then draw it.
	     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tb%:v%=0
	   else
	     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
	   end if
	 else
	  if tb% > 0 then
	   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tb%:v%=1
	  else
	   v% = 1
	  end if
	 end if
	 y=y+1/2
	 yi% = int(y)
	 Pbh4eee:
       next
'PBHGOTH1 DAT
'PBHGOTH3 DAT
'PBHSANS1 DAT
'PBHSANS3 DAT
'PBHSMAL4 DAT
'PBHSMAL7 DAT
'PBVGOTH1 DAT
'PBVGOTH3 DAT
'PBVSANS1 DAT
'PBVSANS3 DAT
'PBVSMAL4 DAT
'PBVSMAL7 DAT
     case else
     end select
  END SUB

' ╔═══════════════════════════[Concluded]════════════════════════════════╗
' ║//////////////////////////////////////////////////////////////////////║
' ╚══════════════════════════════════════════════════════════════════════╝
' ╔══════════════════════════════════════════════════════════════════════╗
' ║      Written By Bill Sandall, 1124 North Abbott Ave., Milpitas, Ca.  ║
' ║    95035. (408) 946-2519  1200/2400 Baud Modem at same number by     ║
' ║    pre-scheduling.  2/27/91.   FONTS transported from Borlands Turbo ║
' ║    C. They assured me it is OK as long as FONTS are used as part of  ║
' ║      A power basic program.                                          ║
' ╚══════════════════════════════════════════════════════════════════════╝
'Remember: Loydd Smith
'1350 Birchcrest Blvd.
'Port Charlotte, Fla. 33952
'(813) 625 1172
```
{% endraw %}

## PERMEXM2.BAS

{% raw %}
```bas


on error goto nexopen
'******************************************************************
'  Set error trap and try to set graphics screen 9. If that fails
'  then try screen 2. save information for later use.
'******************************************************************

scrn%=9
screen scrn%
screen 0

goto didopen

nexopen:
scrn%=2
resume didopen
didopen:
on error goto 0

if scrn%=2 then
  screen 2
  color 15,0
  cls
end if

if scrn% > 2 then
  screen scrn%
  color 14,1
  cls
end if

DECLARE SUB Pbfonts(integer, integer, string, string, integer)
public xpos%, ypos%, font$, chrr$, colr%, scrn%, zz%, gg%, hgoth1$(),vgoth1$()
public hsans1$(), vsans1$(), hsans2$(), vsans2$(), hsmall3$(), vsmall3$()
public hsmall5$(), vsmall5$(), hsmall7$(), vsmall7$(), htrip1$(), vtrip1$()
public htrip3$(), vtrip3$(), hgoth3$(), vgoth3$()

'******************************************************************
'                      Usage
'  CALL Pbfonts(xpos%, ypos%, font$, chrr$, colr%)
'******************************************************************

cls
rr% = 100

'******************************************************************
' These string arrays will hold the Fonts contained in TEMPEXM2.INC.
' To minimize string memory use, you could rem out the ones which
' are not used in your application.
'******************************************************************

dim hgoth1$(rr%), vgoth1$(rr%), hsans1$(rr%), vsans1$(rr%), hsans2$(rr%)
dim hsmall3$(rr%), vsmall3$(rr%), hsmall5$(rr%), vsmall5$(rr%), hsmall7$(rr%)
dim vsmall7$(rr%), htrip1$(rr%), vtrip1$(rr%), htrip3$(rr%), vtrip3$(rr%)
dim  hgoth3$(rr%), vgoth3$(rr%),  vsans2$(rr%)

'******************************************************************
' Include file TEMPFONT.INC created by PERMFONT.EXE. This file was
' then renamed to TEMPEXM2.INC for this example program.
' Includes font chars to be used here.
'******************************************************************

$INCLUDE "TEMPEXM2.INC"

'******************************************************************
'Listing of the font files used by PERMFONT.EXE to create TEMPFONT.INC
'******************************************************************
'HGOTH1   444    VGOTH1   444    HGOTH3   444    VGOTH3   444    HSANS1   444"
'VSANS1   444    HSANS2   444    VSANS2   444    HSMALL3  444    HSMALL5  444"
'HSMALL7  444    VSMALL3  444    VSMALL5  444    VSMALL7  444    HTRIP1   444"
'HTRIP3   444    VTRIP1   444    VTRIP3   444"

'******************************************************************
' See TEMPEXMP.BAS program for usage of explicite Pbfont calls. This
' example uses gosub to access the pbfonts procedural call.
'******************************************************************
	jj%=0
	cls
	font$ = "hsmall7"
	h$ = "   This is a demonstration of the":ypos%=30:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "hgoth3"
	h$ = "Font types which can be perm anently":ypos%=60:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "hsmall7"
	h$ = "included in the .EXE file. Source  ":ypos%=90:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "hgoth3"
	h$ = "code has been included for all the":ypos%=120:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "vgoth3"
	h$ = "files. The":ypos%=340:xpos%=30
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "vgoth3"
	h$ = "Source code":ypos%=340:xpos%=70:jj%=0
	eos% = len(h$)   rem get the string length.
	gosub lppt
	font$ = "hsmall3"
	h$ = "should encourage other ":ypos%=170:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "approaches and growth in":ypos%=200:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	h$ = "Font applications. This":ypos%=230:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$="htrip3"
	h$ = "can add new dim insions ":ypos%=300:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "hgoth3"
	h$ = "to Basic Programm ing..":ypos%=265:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	clear
	while not instat:wend

	end
	lpps:
	do
	o% = o%+1
	ki$=mid$(h$,o%,1)

	CALL Pbfonts((o%+jj%)*17, ypos%, font$ , ki$, int(12*rnd + 2))
	if o%=eos% then exit loop
	loop
	return
	lppt:
	do
	jj% = jj%+1
	ki$=mid$(h$,jj%,1)
	CALL Pbfonts(xpos%, ypos%-14*jj%, font$ , ki$, int(12*rnd + 2))
	if jj%=eos% then exit loop
	loop
	return

'******************************************************************
' The PERMFPBU.PBU file contains the procedural code for producing
' the graphics chars on screen as a response to the Pbfont call.
'******************************************************************

$LINK "PERMFPBU.PBU"


```
{% endraw %}

## PERMEXMP.BAS

{% raw %}
```bas
$STACK 3072
on error goto nexopen
scrn%=9
screen scrn%
screen 0
goto didopen
nexopen:
scrn%=2
resume didopen
didopen:
on error goto 0

if scrn%=2 then
  screen 2
  color 15,0
  cls
end if

if scrn% > 2 then
  screen scrn%
  color 14,1
  cls
end if
cls
DECLARE SUB Pbfonts(integer, integer, string, string, integer)
public xpos%, ypos%, font$, chrr$, colr%, scrn%, zz%, gg%, hgoth1$(),vgoth1$()
public hsans1$(), vsans1$(), hsans2$(), vsans2$(), hsmall3$(), vsmall3$()
public hsmall5$(), vsmall5$(), hsmall7$(), vsmall7$(), htrip1$(), vtrip1$()
public htrip3$(), vtrip3$(), hgoth3$(), vgoth3$()
'                      Usage
'  CALL Pbfonts(xpos%, ypos%, font$, chrr$, colr%)
cls
rr% = 100
dim hgoth1$(rr%), vgoth1$(rr%), hsans1$(rr%), vsans1$(rr%), hsans2$(rr%)
dim hsmall3$(rr%), vsmall3$(rr%), hsmall5$(rr%), vsmall5$(rr%), hsmall7$(rr%)
dim vsmall7$(rr%), htrip1$(rr%), vtrip1$(rr%), htrip3$(rr%), vtrip3$(rr%)
dim  hgoth3$(rr%), vgoth3$(rr%),  vsans2$(rr%)

$include "TEMPEXMP.INC"  ' Please note. TEMPFONT.INC was copied to new name
			 ' TEMPEXMP.INC for this demonstration.
'HGOTH1   444    VGOTH1   444    HGOTH3   444    VGOTH3   444    HSANS1   444"
'VSANS1   444    HSANS2   444    VSANS2   444    HSMALL3  444    HSMALL5  444"
'HSMALL7  444    VSMALL3  444    VSMALL5  444    VSMALL7  444    HTRIP1   444"
'HTRIP3   444    VTRIP1   444    VTRIP3   444"

'******************************************************************
' Please note: You can Call the Font power basic unit file procedure
' with individual call statements as rem'd out below. This might be
' an easier way to start. For example, the First call in this example
' would look like the following-- In fact, let's do it...
  CALL Pbfonts(267, 100, "hsmall7", "A", 12) '<-- although color may
					    ' may be different since
					    ' I used the random number
					    ' generater with gosub routine's.
  CALL Pbfonts(285, 100, "hsmall7", "c", 12)
  CALL Pbfonts(300, 100, "hsmall7", "r", 12)
  CALL Pbfonts(315, 100, "hsmall7", "o", 12)
  CALL Pbfonts(330, 100, "hsmall7", "s", 12)
  CALL Pbfonts(345, 100, "hsmall7", "s", 12)
  CALL Pbfonts(360, 100, "hsmall7", "-", 12)
  CALL Pbfonts(375, 100, "hsmall7", "-", 12)
  CALL Pbfonts(390, 100, "hsmall7", ">", 12)

  CALL Pbfonts(167, 200, "hsmall7", "A", 12) '<-- although color may
					    ' may be different since
					    ' I used the random number
					    ' generater with gosub routine's.
  CALL Pbfonts(185, 200, "hsmall7", "c", 12)
  CALL Pbfonts(200, 200, "hsmall7", "r", 12)
  CALL Pbfonts(215, 200, "hsmall7", "o", 12)
  CALL Pbfonts(230, 200, "hsmall7", "s", 12)
  CALL Pbfonts(245, 200, "hsmall7", "s", 12)
  CALL Pbfonts(260, 200, "hsmall7", "-", 12)
  CALL Pbfonts(275, 200, "hsmall7", "-", 12)
  CALL Pbfonts(290, 200, "hsmall7", ">", 12)
  CALL Pbfonts(200, 300, "vsmall7", "U", 12)
  CALL Pbfonts(200, 285, "vsmall7", "p", 12)
  CALL Pbfonts(200, 260, "vsmall7", "-", 12)
  CALL Pbfonts(200, 245, "vsmall7", "-", 12)
  CALL Pbfonts(200, 220, "vsmall7", ">", 12)
  CALL Pbfonts(500, 200, "vsmall7", "U", 12)
  CALL Pbfonts(500, 185, "vsmall7", "p", 12)
  CALL Pbfonts(500, 160, "vsmall7", "-", 12)
  CALL Pbfonts(500, 145, "vsmall7", "-", 12)
  CALL Pbfonts(500, 120, "vsmall7", ">", 12)
  delay 2

'******************************************************************
'          Now the following technique reduces size of code
'          for projects where many graphics characters are used.
' The following code reads string one character at a time and gosub's
' to a routine which calculates position and does Pbfonts call.
'******************************************************************

	jj%=0
	font$ = "hsmall7"
	h$ = "Across -->":ypos%=100:o%=0
	eos% = len(h$)   rem get the string length.
	gosub lpps
	font$ = "vsmall7"
	h$ = "      Up -->":ypos%=340:xpos%=30
	eos% = len(h$)   rem get the string length.
	gosub lppt
	clear
	? "Press any key to end.."
	while not instat:wend

	end
	lpps:
	do
	o% = o%+1
	ki$=mid$(h$,o%,1)

	CALL Pbfonts((o%+jj%)*17, ypos%, font$ , ki$, int(12*rnd + 2))
	if o%=eos% then exit loop
	loop
	return
	lppt:
	do
	jj% = jj%+1
	ki$=mid$(h$,jj%,1)
	CALL Pbfonts(xpos%, ypos%-14*jj%, font$ , ki$, int(12*rnd + 2))
	if jj%=eos% then exit loop
	loop
	return
'******************************************************************
' Source code for the PBU'nits is also included.
'******************************************************************

$LINK "PERMFPBU.PBU"
```
{% endraw %}

## PERMFONT.BAS

{% raw %}
```bas
cls
'╔═════════════════════════════════════════════════════════════════════════╗
'║  Attention structured programmers. If my non-disciplined style upsets   ║
'║you, well, give the Devil his due's. At least I had the courage to expose║
'║myself and provide you with source code to clean up and build upon.      ║
'╚═════════════════════════════════════════════════════════════════════════╝
on error goto xresets
	screen 9
	tag = 9
	goto xitscolor
xresets:
	resume xmono
xmono:
	tag = 2
xitscolor:
on error goto 0
if tag = 9 then
'╔═════════════════════════════════════════════════════════════════════════╗
'║  If tag is 9 then it is a color system else it is herc., else it bombs! ║
'╚═════════════════════════════════════════════════════════════════════════╝
  CK%=14:CJ%=1
else
  CK%=15:CJ%=0
end if

locate 24,1
? "              -----------  [ PERMFONT PROGRAM ]  -------------"
?
? "   ╔═════════════════════════[ Preliminaries]════════════════════════════════╗"
? "   ║   This program will create TEMPFONT.INC file. This file will contain    ║"
? "   ║Font characters of the Style, Size and direction (vertical or horizontal)║"
? "   ║that you choose to use in your application. This program will copy, if it║"
? "   ║exists, TEMPFONT.INC to TEMPFONT.BAK. and erase TEMPFONT.INC. To use this║"
? "   ║program, you should know what exactly the type, size and orientation     ║"
? "   ║of the font characters you wish to include in TEMPFONT.INC. You can then ║"
? "   ║simply use $INCLUDE ''TEMPFONT.INC'' in your application prior to Font   ║"
? "   ║Calls.                       ";:color CJ%,CK%:? "Important!";:color CK%,CJ%:?"                                  ║"
? "   ║   You must organize your Font characters ahead of time. You must not    ║"
? "   ║try to call the same Font type twice in this program. Therefore, if you  ║"
? "   ║plan to use vgoth3 type characters, then prepare all text characters of  ║"
? "   ║this type to be used and when this Font is selected, enter all of them at║"
? "   ║one time prior to choosing the next Font style...                        ║"
? "   ╚═════════════════════════════════════════════════════════════════════════╝"
?:?:?:?
? "                         Press any Key to continue..."
while not instat:wend:oiu$=inkey$
?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?
? "   ╔═════════════════════════[ Preliminaries]════════════════════════════════╗"
? "   ║   This program will not allow ASCII character (keyboard letter/number)  ║"
? "   ║ duplication while in one specific Font Style/type. For example, assume  ║"
? "   ║ Font type HSMALL5 has been chosen. As you are typing in characters from ║"
? "   ║ the keyboard, you will start hearing beeps and a sign   [duplication!]  ║"
? "   ║ will flash. This simply is an indication that the character just pressed║"
? "   ║ has already been struck, hence a duplication. You may ignore the beeps  ║"
? "   ║ and simply keep typing at a normal rate. The program will only add new  ║"
? "   ║ characters and beep if a duplication happens. If, however, you were to  ║"
? "   ║ choose HSMALL5 again, the program will treat HSMALL5 as a new file and  ║"
? "   ║ duplication will occur. This will result in a compile error and a mes-  ║"
? "   ║ sage that a duplicate symbol was used. It is up to the programmer to    ║"
? "   ║ prevent this mistake. You may only access a Font file once to properly  ║"
? "   ║ guard against duplicate symbols. Just know ahead of time which chars    ║"
? "   ║ of a particular Font style/size/orientation you will be using.          ║"
? "   ╚═════════════════════════════════════════════════════════════════════════╝"
?:?:?:?
? "         Press <Esc> to terminate now else any other Key to continue..."
while not instat:wend
ll$=inkey$
if ll$ = chr$(27) then color CK%,CJ%:CLS:end
'╔═════════════════════════════════════════════════════════════════════════╗
'║  Here is a challange, Clean up this mess. I have been using and abusing ║
'║  on error traps for some time. I suspect their is elegent approaches but║
'║  without using assembly code, I dont know another way.......            ║
'╚═════════════════════════════════════════════════════════════════════════╝
on error goto itnotthere
KILL "TEMPFONT.BAK"
goto nameit
itnotthere:
resume nameit
nameit:
on error goto 0
on error goto cannotname
name "TEMPFONT.INC" AS "TEMPFONT.BAK"
goto oknames
cannotname:
OPEN "O", #1, "TEMPFONT.INC":CLOSE
resume oknames
oknames:
kill "TEMPFONT.INC"
strtts:
on error goto 0
'  ╔═════════════════════════════════════════════════════════════════════════╗
'  ║   Find out type of graphics system (color or herc.) and set colors to   ║
'  ║   15,0 if Herc. else 14,1 if color.                                     ║
'  ║ Humm?? Wonder why I did this all again. I don't know. Well, see if any  ║
'  ║ Well, lets see if anyone cares. Hopefuly someone will get good and mad. ║
'  ║ and clean this whole mess up............................................║
'  ╚═════════════════════════════════════════════════════════════════════════╝
on error goto resets
	screen 9
	tag = 9
	goto itscolor
resets:
	resume mono
mono:
	tag = 2
itscolor:
on error goto 0
if tag = 9 then
  CK%=14:CJ%=1
else
  CK%=15:CJ%=0
end if


'  ╔═════════════════════════════════════════════════════════════════════════╗
'  ║   These are the Font styles available at present time. Set these equal  ║
'  ║   to string variables for later use.                                    ║
'  ╚═════════════════════════════════════════════════════════════════════════╝

aa$="HGOTH1   444    VGOTH1   444    HGOTH3   444    VGOTH3   444    HSANS1   444"
bb$="VSANS1   444    HSANS2   444    VSANS2   444    HSMALL3  444    HSMALL5  444"
cc$="HSMALL7  444    VSMALL3  444    VSMALL5  444    VSMALL7  444    HTRIP1   444"
dd$="HTRIP3   444    VTRIP1   444    VTRIP3   444"
REM COLOR 0,15 --> COLOR CJ%,CK%     if its herc, else COLOR 1,14 OR COLOR 14,1
REM COLOR 15,0 --> COLOR CK%,CJ%
screen 0
color CK%, CJ%
cls
locate 24,1
? "   ╔═════════════════════════[ Instructions ]════════════════════════════════╗"
? "   ║  1. Use cursor (arrow) keys to locate Font style and Font direction.    ║"
? "   ║  2. Press <Enter>. Type in characters of this style and direction which ║"
? "   ║     will be used in your application.                                   ║"
? "   ║  3. Press <Esc> to store these Fonts and to return to original window.  ║"
? "   ║  4. Repeat process until all Fonts needed have been stored.             ║"
? "   ║  5. Press <Ctrl-C> to create TEMPFONT.INC file which you will include   ║"
? "   ║     as an $INCLUDE ''TEMPFONT.INC'' in your application prior to Font   ║"
? "   ║     Calls.                                                              ║"
? "   ╚═════════════════════════════════════════════════════════════════════════╝"
LOCATE 1,1

'*****************************************************
' OK Lets get serious with some disciplined programing
'*****************************************************

'This is a routine which allows user to choose the Font
'type by displaying it in reverse video color and then
'pressing enter to select.

'******************************************************
'Procedures and functions used herein
'******************************************************

   'sub GetScreen(b$,row%,col%,k%)
   'sub Normal(row%,col%,k%)
   'sub Reverse(row%,col%,k%)
   'sub goleft
   'sub goright
   'sub goup
   'sub godown
   'def fngetkey$

'******************************************************
'Now we define some characters, character strings
'and true and false
'******************************************************

  ctrlc$=chr$(3)               rem  ^C
  cr$=chr$(13)                 rem 'Enter key'
  esc$=chr$(27)                rem 'Esc key'
  leftarrow$=chr$(0)+"K"
  downarrow$=chr$(0)+"P"
  rightarrow$=chr$(0)+"M"
  uparrow$=chr$(0)+"H"
  false=0
  true=not false

'********************************************************
'Now, set up a while wend loop to acess the functions.
'********************************************************

  color CK%,CJ%
  locate 1,1
  ?
'********************************************************
' Display the Fonts file choices on the screen.
'********************************************************
  ? aa$:? bb$:? cc$:? dd$;"      Use  ";chr$(27);chr$(18);chr$(26);"  To Position."

  crow%=2			'the current cursor row
  ccol%=1         		'the current cursor col
  call Reverse(crow%,ccol%,12)  'put first font name in reverse vidio

 while true                     'infinite while loop
  c$=fngetkey$                  'get a key
	if c$ = chr$(13) then   ' If it's the Enter key then ..
	  call GetScreen(b$,crow%,ccol%,12)
	  g$=b$
	  Entertag = 1
	  true = 0
	else
	  Entertag = 0
	end if
  if Entertag = 1 then goto chooseit
'  ╔═════════════════════════════════════════════════════════════════════════╗
'  ║   This is the way I choose to 'bail out'. Sends program to routine for  ║
'  ║   choosing ascii char's of this particular Font style, to be written    ║
'  ║   into a file. This file will be used for forming ''TEMPFONT.INC''      ║
'  ╚═════════════════════════════════════════════════════════════════════════╝

  select case c$                'and test it and take action
    case rightarrow$
       call goright
    case leftarrow$
       call goleft
    case uparrow$
       call goup
    case downarrow$
       call godown
    case cr$
		 call GetScreen(b$,crow%,ccol%,12)
    case ctrlc$              'one way out of the infinte loop
       color CK%,CJ%:cls:end
    case esc$		     'another way
      color CK%,CJ%:cls:end
    case else
      beep
  end select
 wend


sub goleft
shared CJ%,CK%
shared crow%,ccol%
'*******************************************************
'Moves the cursor to the left where cursor is 12 char's
'wide and in reverse video.  crow% and ccol% are current
'location of where the current reverse video file name is.
'*******************************************************
  call Normal(crow%,ccol%,12)
  ccol%=ccol%-16
  if ccol%<1 then ccol%=4*16+1
  call Reverse(crow%,ccol%,12)
end sub

sub goright
shared CJ%,CK%
shared crow%,ccol%
'*******************************************************
'Moves the cursor to the right where cursor is 12 char's
'wide and in reverse video.  crow% and ccol% are current
'location of where the current reverse video name is.
'*******************************************************
  call Normal(crow%,ccol%,12)
  ccol%=ccol%+16
  if ccol%>70 then ccol%=1
  call Reverse(crow%,ccol%,12)
end sub

sub godown
shared CJ%,CK%
shared crow%,ccol%
'*******************************************************
'Moves the cursor down where cursor is 12 char's
'wide and in reverse video.  crow% and ccol% are current
'location of where the current reverse video name is.
'*******************************************************
  call Normal(crow%,ccol%,12)
  crow%=crow%+1
  call Reverse(crow%,ccol%,12)
end sub

sub goup
  shared CJ%,CK%
  shared crow%,ccol%
'*******************************************************
'Moves the cursor up where cursor is 12 char's
'wide and in reverse video.  crow% and ccol% are current
'location of where the current reverse video file name is.
'*******************************************************
  call Normal(crow%,ccol%,12)
  crow%=crow%-1
  if crow%<1 then crow%=1
  call Reverse(crow%,ccol%,12)
end sub

def fngetkey$
'*******************************************************
'Waits for key to be hit, returns key hit.  Note: special
'keys such as function keys, arrow keys, etc. return a
'2 character string.  The first character is a null and the
'second is the scancode (not the ascii code) of the key
'hit.
'*******************************************************
shared Entertag
   while not instat
   wend
   fngetkey$=inkey$
end def

sub GetScreen(b$,row%,col%,k%)
  shared CJ%,CK%, Entertag
  local y,n%,a$
  '**************************************************
  'Returns b$, as string read from the screen made up
  'of k% characters starting at row and column specified.
  '**************************************************
  if row%<2 then row%=2
  escape2it:
  for n%=col% to col%+k%-1
    y=screen(row%,n%)
    a$=chr$(y)
    b$=b$+a$
  next n%
   if instr(b$,"Bytes fr")>0 then  ' When I use this for files, this needed.
    row%=row%-1
	a$=""
	b$=""
   goto escape2it
   elseif instr(b$,"         ")>0 or row% > 5 then
    row%=row%-1
	a$=""
	b$=""
   goto escape2it
   end if
	endofsubs:
	locate 12,30:? b$
	DELAY .1
	color CJ%,CK%:locate 12,30:? b$:color CK%,CJ%
end sub

sub Reverse(row%,col%,k%)
  shared CJ%,CK%
'*******************************************************
'Reads k% characters from screen starting at row%, col%
'and reprints them to screen in reverse video
'*******************************************************
   call GetScreen(b$,row%,col%,k%)
   color CJ%,CK%
   locate row%,col%
   print b$;
end sub

sub Normal(row%,col%,k%)
'*******************************************************
'Reads k% characters from screen starting at row%, col%
'and reprints them to screen in normal (color CK%,CJ%) video
'*******************************************************
   shared CJ%,CK%
   color CK%,CJ%
   call GetScreen(b$,row%,col%,k%)
   locate row%,col%
   print b$;
end sub

chooseit:
color CK%,CJ%
cls
locate 24,1
? "   ╔═════════════════════════[ Instructions ]════════════════════════════════╗"
? "   ║  1. Use cursor (arrow) keys to locate Font style and Font direction.    ║"
? "   ║  2. Press <Enter>. Type in characters of this style and direction which ║"
? "   ║     will be used in your application.                                   ║"
? "   ║  3. Press <Esc> to store these Fonts and to return to original window.  ║"
? "   ║  4. Repeat process until all Fonts needed have been stored.             ║"
? "   ║  5. Press <Ctrl-C> to create TEMPFONT.INC file which you will include   ║"
? "   ║     as an $INCLUDE ''TEMPFONT.INC'' in your application prior to Font   ║"
? "   ║     Calls.                                                              ║"
? "   ╚═════════════════════════════════════════════════════════════════════════╝"
locate 10,1
?">"
locate 1,1
? " You have choosen Font style   <";
color CJ%,CK%
? b$;
color CK%,CJ%
? ">.  Now type in characters of
? " this style which you wish stored in TEMPFONT.INC for inclusion in your"
? " application. Please note: the string displayed only shows NEW characters"
? " added to list. It will not be a copy of the KEYBOARD!"
'  ╔═════════════════════════════════════════════════════════════════════════╗
'  ║   The following code examines b$ and shapes it into a DOS acceptable    ║
'  ║   file name.  Also the q$ will be used later. This is the file name     ║
'  ║   without the extension. Font array name is q$+"("+code+")...           ║
'  ╚═════════════════════════════════════════════════════════════════════════╝
t = instr(b$, " ")
q$=left$(b$,t)
r$ = right$(b$,3)
b$=q$+"."+r$
u$ = lcase$(q$)
mm%=100
dim zf$(mm%)
mm%=0
true=1
'  ╔═════════════════════════════════════════════════════════════════════════╗
'  ║   So much for structured programing. back too spaghetti code.  This     ║
'  ║   always happens to me when I get tired or bored and really gets bad if ║
'  ║1. I get tired and bored at the same time ........              ║
'  ║2. OK, Question for the programing GURU's ....BABBABBAB....              ║
'  ║   Why can you put line two in reverse vidio with block command but not  ║
'  ║   line 1? Why does BABABBAB in line 1. refuse to reverse color???????   ║
'  ║ Humm! since I use a Herc. Mono system this may be very strange in color ║
'  ║ or may not even act the same as what I see. Well Loydd? what does it    ║
'  ║ look like when you block this block for moving or copying???            ║
'  ║ Hint: Look at the hex representation of the code in disk file.          ║
'  ╚═════════════════════════════════════════════════════════════════════════╝
while true
	count%=count%+2
	while not instat:wend
	j$=inkey$
	if j$ = chr$(27) then
		true = 0
		goto leaveit
	end if
	if instr(lp$,j$) > 0 then
	 beep
	locate 8, 30
	color CJ%,CK%
	DELAY .1
	? "duplication!"
	locate 8, 30
	color CK%,CJ%
	DELAY .1
	? "duplication!"
	locate 8, 30
	color CK%,CJ%
	? "            "
	count%=count%-2
	j$="":l$="":l$=f$
	end if
	lp$ = lp$ + j$
	if ascii(j$) > 32 then
	mm%=mm%+1
	 zf$(mm%) = u$ + "$("+str$(ascii(j$)-32)+")"
	 i = instr(zf$(mm%)," ")
	 replace mid$(zf$(mm%),i,1) with "" in zf$(mm%)
	 locate 8,30
	 ? zf$(mm%)
	 f$=f$+STR$(ASCII(j$))
	end if
	if count% > 80 then count%=1:xx%=xx%+1
	locate 10+xx%,count%
	? j$
	leaveit:
 wend
? b$
OPEN "APPEND", #1, "TEMPFONT.INC"
OPEN "I", #2, b$
while (not eof(2))
 input #2, i$
 for ji%=1 to mm%
 if instr(i$,zf$(ji%)) > 0 then
 print #1,i$
 i$=""
 ji%=1
 exit for
 end if
 next
wend
close #2
close #1
clear
beforif:
cls
locate 12,10
? " Press <Ctrl-C> to finish or <Esc> for adding additional Font's.
jjj$ = inkey$
while not instat
wend
dumm$=inkey$
if dumm$=chr$(3) then
color CK%,CJ%:cls:end
else
if dumm$ <> chr$(27) then
beep
goto beforif
end if
end if
goto strtts


' ╔═════════════════════════════════════════════════════════════════════════╗"
' ║                      Power Fonts for Power Basic                        ║"
' ║        Bill Sandall 05/01/91 (408) 946-2519 Milpits California          ║"
' ╚═════════════════════════════════════════════════════════════════════════╝"


```
{% endraw %}

## PERMFPBU.BAS

{% raw %}
```bas
EXTERNAL scrn%, zz%, gg%, hgoth1$(), vgoth1$(), hgoth3$(), vgoth3$()
EXTERNAL hsans1$(), vsans1$(), hsans2$(), vsans2$(), hsmall3$(), vsmall3$()
EXTERNAL hsmall5$(), vsmall5$(), hsmall7$(), vsmall7$(), htrip1$(), vtrip1$()
EXTERNAL htrip3$(), vtrip3$()
SUB Pbfonts(xpos%, ypos%, font$, chrr$, colr%) PUBLIC
  shared scrn%
x%=ascii(chrr$)-32
v%=1
  if scrn% = 2 then colr%=15

'end if
'  case else
'end select
' ╔══════════════════════════════════════════════════════════════════════╗
' ║    4/8/91 Load set of fonts as explicite hex numbers contained in    ║
' ║ strings named Font$(). Find length of strings and location of spaces.║
' ╚══════════════════════════════════════════════════════════════════════╝
'cls
kj% = 300
' ╔══════════════════════════════════════════════════════════════════════╗
' ║ spaceloc%() is location of spaces in string. decimal%() is dec. equiv║
' ║ of hex number is string. x% = val(ascii) - 32 of char.               ║
' ╚══════════════════════════════════════════════════════════════════════╝
dim  spaceloc%(kj%),decimal%(kj%),arr$(kj%),n%(kj%)
' ╔══════════════════════════════════════════════════════════════════════╗
' ║   Could use Select Case here instead. I wonder if that is faster than║
' ║ using these If Then statements?                                      ║
' ╚══════════════════════════════════════════════════════════════════════╝
if font$="hgoth1" then Fonz$= hgoth1$(x%)
if font$="vgoth1" then Fonz$= vgoth1$(x%)
if font$="hgoth3" then Fonz$= hgoth3$(x%)
if font$="vgoth3" then Fonz$= vgoth3$(x%)
if font$="hsans1" then Fonz$= hsans1$(x%)
if font$="vsans1" then Fonz$= vsans1$(x%)
if font$="hsans2" then Fonz$= hsans2$(x%)
if font$="vsans2" then Fonz$= vsans2$(x%)
if font$="hsmall3" then Fonz$= hsmall3$(x%)
if font$="vsmall3" then Fonz$= vsmall3$(x%)
if font$="hsmall5" then Fonz$= hsmall5$(x%)
if font$="vsmall5" then Fonz$= vsmall5$(x%)
if font$="hsmall7" then Fonz$= hsmall7$(x%)
if font$="vsmall7" then Fonz$= vsmall7$(x%)
if font$="htrip1" then Fonz$= htrip1$(x%)
if font$="vtrip1" then Fonz$= vtrip1$(x%)
if font$="htrip3" then Fonz$= htrip3$(x%)
if font$="vtrip3" then Fonz$= vtrip3$(x%)

 j%=1
spaceloc%(0) = 0
stringlength% = len(Fonz$)                 '* length of string
for y%=1 to stringlength%
  spaceloc%(j%) = instr(y%,Fonz$," ")
  if spaceloc%(j%) > ax then
    ax = spaceloc%(j%)
    j%=j%+1
  end if
next
pm$=""
' ╔══════════════════════════════════════════════════════════════════════╗
' ║ Decimal% is expression to calculate decimal equiv. of hex string.    ║
' ╚══════════════════════════════════════════════════════════════════════╝
' ╔══════════════════════════════════════════════════════════════════════╗
' ║ OK this reproduces string in reverse order.                          ║
' ╚══════════════════════════════════════════════════════════════════════╝
for lj%=1 to j%-1
for m%=1 to spaceloc%(lj%) - (spaceloc%(lj%-1)+1)
arr$(m%)= mid$(Fonz$, spaceloc%(lj%)-m%, 1)
lm$=arr$(2)
rm$=arr$(1)
next m%
if lm$ <> "" then
lnum%=ascii(lm$)-50
rnum%=ascii(rm$)-50
else
lnum%=0
rnum%=ascii(rm$)-50
end if
arr$(1)="":arr$(2)="":
' ╔══════════════════════════════════════════════════════════════════════╗
' ║ Because I represent the value with string ascii chars to base 135!!! ║
' ╚══════════════════════════════════════════════════════════════════════╝
totnu% = 135*lnum% + rnum%
 lnum%=0:rnum%=0
 decimal%(lj%) =totnu%
totnu%=0
 tdecimalb%=decimal%(lj%)
 if tdecimalb% > 18000 then    ' Then we have cluster of zero's
   y=y+(tdecimalb%-18000)
   yi% = int(y)
   tdecimalb%=0
   goto aaa
 end if
 if v%=1 then           ' This is a toggle to alternately map
				' the two line segments.
   if tdecimalb% > 0 then      ' If it's not zero then draw it.
     line (xpos%,ypos%+yi%)-(xpos%+14,ypos%+yi%),colr%,BF,tdecimalb%:v%=0
   else
     v%=0    ' Toggle but don't draw a line if bit pattern is zero.
   end if
 else
  if tdecimalb% > 0 then
   line (xpos%+13,ypos%+yi%)-(xpos%+27,ypos%+yi%),colr%,BF,tdecimalb%:v%=1
  else
   v% = 1
  end if
 end if
 y=y+1/2
 yi% = int(y)
 aaa:
next lj%

end sub

```
{% endraw %}

## HPII.BAS

{% raw %}
```bas
.po0
'Program Name    : HPII.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 12-23-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : Prog reads PB screen 9 Graphics Image & Prints to 'HPIIP'
'Reminder        : Turn OFF PB Interpertive print
'Note            : Can be easily modified to work on VGA screens.

screen 9  'Set screen to 640 x 350 resolution
dim a(80), Arry1(2000)

'set width of print command long enough to accept lprint graphics strings
width "lpt1:",255

'A prepared picture is loaded into the background
f2$="ega"
DEF SEG = &HA000
OUT &H3C4, 2: OUT &H3C5, 1: BLOAD Path$ + F2$ + ".BLU", &H8000 'load bit plane 0
OUT &H3C4, 2: OUT &H3C5, 2: BLOAD Path$ + F2$ + ".GRN", &H8000 'load bit plane 1
OUT &H3C4, 2: OUT &H3C5, 4: BLOAD Path$ + F2$ + ".RED", &H8000 'load bit plane 2
OUT &H3C4, 2: OUT &H3C5, 8: BLOAD Path$ + F2$ + ".INT", &H8000 'load bit plane 3
OUT &H3C4, 2: OUT &H3C5, &HF: DEF SEG

'picture is copied from background to foreground
PBCopy:
FOR n = 0 TO 349
SCREEN 9, , 1, 0
GET (0, n)-(639, n), Arry1
SCREEN 9, , 0, 0
PUT (0, n), Arry1,pset
NEXT n

'printer setup
lprint chr$(27);"&10C";
lprint chr$(27)"*t75R";   'resolution dpi =75
lprint chr$(27);"*p:str$(0);"Y";    'y-pos set to 0
lprint chr$(27);"*p:str$(0);"X";    'x-pos set to 0
lprint chr$(27);"*r1A"

'point to the screen to read it
def seg =&ha000
y=0
for j=0 to 349
for i=0 to 79
k$=inkey$:if k$=chr$(27) then end
a(i)=peek(i+y)
next i
lprint chr$(27);"*b";str$(75);"W";:for i=0 to 74: lprint chr$(a(i));:next i
y=y+80
next j
def seg

'reset the laser printer
lprint chr$(27);"*rB";
lprint chr$(27);"&16D"

'Formfeed cause printer to print graphics image
lprint chr$(12)
end

```
{% endraw %}

## NISTSYNC.BAS

{% raw %}
```bas
'                      ────────────────                      NISTSYNC.BAS
'                       NIST-SYNC v1.0                       Eric J. Pearson
'                       for PowerBASIC                       CIS 71641,717
'                      ────────────────                      (C) 1991 EJP
'                         August 1991
'
' This program may be used without fees for non-commercial purposes.  You
' must obtain permission from the author if you want to include it in
' another program for commercial purposes.  An executable version,
' NISTSYNC.EXE, is included in the file NISTSYNC.ZIP, if you do not have
' access to PowerBASIC.
'
' A few definitions...
'
' NIST - National Institute of Standards and Technology (formerly the National
'	 Bureau of Standards), located in Colorado.
' ACTS - Automated Computer Time Service: a modem-based time-sync service
'	 provided free by the U.S. government.  (However the call is NOT
'	 toll-free.)
'
' This PowerBASIC program can call the NIST modem, access the system,
' synchronize the DOS clock to within less than 1/10 of one second, and sync
' the DOS calendar to match the NIST.
'
' To run the NISTSYNC.EXE program from a DOS prompt, type...
'
' NISTSYNC  [@t]  [=tz]  [COMx:]  [/P]
'
' ... where [=tz] is your local Time Zone, as...
'
'     EST  Eastern Standard Time       EDST Eastern Daylight Savings Time
'     CST  Central Standard Time       CDST Central Daylight Savings Time
'     MST  Mountain Standard Time      MDST Mountain Daylight Savings Time
'     PST  Pacific Standard Time       PDST Pacific Daylight Savings Time
'     GMT  Greenwich Mean Time
'
'     The program will display an error message if no [=tz] is specified, or
'     if an invalid code is specified.
'
'     Example: NISTSYNC =EST sets the clock to Eastern Standard Time.
'
' ... and where [@t] is the time that the program should sync the clock.  Use
'     a value from @0 (midnight) to @23 (11pm).  If no @t value is used, or if
'     an illegal value is specified, the program will run immediately.
'
'     Example: NISTSYNC =EDST @2 will sync to Daylight Savings Time at 2AM.
'
' ... and where [COMx:] is the com port to which the modem is connected.  The
'     default value (if no port is specified in the command line) is COM1:.
'
' ... and where [/P] specifies Pulse Dialing.  Tone (DTMF) dialing is the
'     default.
'
'-----------------------------------------------------------------------------
'
' For additional (free) information about the NIST and ACTS, contact the NIST
' in Boulder, CO.
'
' -----------------------------------------------------------------------------
'
' PROGRAMMERS NOTE: This program does not take advantage of all of the features
' that the NIST ACTS provides.  If you'd like to tackle them, a couple of VERY
' nice additions would be...
'
' * Access the Julian Date that the NIST provides, correct it for Time Zone
'   (and date rollover), and save it as a variable, or save it to a file.
' * The time sync string that the NIST sends over the modem ends with an
'   asterisk (*).  If you echo the * back to NIST, the system will calculate
'   the transmission delay (i.e. the time it's taking the signal to travel
'   through the phone lines) and automatically advance the next time sync
'   string to compensate.  Theoretically, the program can be made to be
'   accurate to within 1/1000 of a second (1ms), but most computer clocks
'   can only be set to within 20ms.  Without this feature, the program is only
'   accurate to approximately 1/10 of one second (100ms) but this should be
'   more than sufficient for most applications.
' * The program could be modified to run at 300 baud, but at that speed the
'   NIST only sends a time sync string every two seconds.
' * Time Zones outside the continental United States could easily be supported.
'
'------------------------------------------------------------------------------
'
' POWERBASIC SOURCE CODE:
'
'
	$COMPILE EXE
	$CPU 8086
	$DEBUG MAP OFF
	$EVENT OFF
	$ERROR ALL ON
	$FLOAT EMULATE
	$LIB COM ON
	$LIB LPT OFF
	$LIB GRAPH OFF
	$LIB IPRINT OFF
	$OPTION AUTODIM OFF
	$OPTION CNTLBREAK ON
	$COM 256
	$STACK 1536
	$STRING 32

	'required ToolBoX files...
	$INCLUDE "CONSTANT.TBX"  'contains integer constants
	$INCLUDE "COMMUNIC.TBX"  'commumications toolbox
	$INCLUDE "DATETIME.TBX"  'date/time toolbox
	$INCLUDE "KEYBOARD.TBX"  'keyboard toolbox

	'************************* RUN TIME START **************************

	ON ERROR GOTO ErrorHandler

	KEY OFF
	CLS
	COLOR %Yellow,%Black
	PRINT "NIST-SYNC  Version 1.0  (C) 1991 Eric J. Pearson, CIS 71641,717"
	PRINT "---------------------------------------------------------------"
	COLOR %HighWhite
	PRINT

	CommandLine$ = UCASE$(COMMAND$)

	'check for [=tz]
	OptionSpecified% = INSTR(CommandLine$,"=")

	IF OptionSpecified% THEN
		Dummy1$ = RTRIM$(MID$(CommandLine$,OptionSpecified%+1,4))
		SELECT CASE Dummy1$
			CASE "PST"  : TimeZone% = -8
			CASE "PDST" : TimeZone% = -7
			CASE "MST"  : TimeZone% = -7
			CASE "MDST" : TimeZone% = -6
			CASE "CST"  : TimeZone% = -6
			CASE "CDST" : TimeZone% = -5
			CASE "EST"  : TimeZone% = -5
			CASE "EDST" : TimeZone% = -4
			CASE "GMT"  : TimeZone% =  0
			CASE ELSE   : OptionSpecified% = 0
				      '(to trip syntax description below.)
		END SELECT
	END IF

	IF OptionSpecified% = 0 THEN
		PRINT "Usage:    NISTSYNC  [=tz]  [@t]  [COMx:]  [/P]"
		PRINT
		PRINT "Examples: NISTSYNC =EST           (syncs to Eastern Standard Time)"
		PRINT "          NISTSYNC =EDST @2 COM2: (syncs to EDST at 2AM using COM2)"

		PRINT
		PRINT "[=tz]...is your local Time Zone, as..."
		PRINT "        EST  Eastern Standard Time    EDST Eastern Daylight Savings Time"
		PRINT "        CST  Central Standard Time    CDST Central Daylight Savings Time"
		PRINT "        MST  Mountain Standard Time   MDST Mountain Daylight Savings Time"
		PRINT "        PST  Pacific Standard Time    PDST Pacific Daylight Savings Time"
		PRINT "        GMT  Greenwich Mean Time (same as Coordinated Universal Time)"
		PRINT "        The program will display an error message if no [=tz] is specified."
		PRINT "[@t]....is the time that the program should sync the clock/calendar."
		PRINT "        Example: using NISTSYNC @2 would cause the program to wait until"
		PRINT "        2AM to sync the clock.  Use a value from @0 (midnight) to @23 (11pm)."
		PRINT "        If no [@t] value is used, or if an illegal value is specified, the"
		PRINT "        program will run immediately."
		PRINT "[COMx:] is the com port to which the modem is connected.  The default value"
		PRINT "        of COM1: will be used if no port is specified in the command line."
		PRINT "[/P]....specifies Pulse Dialing.  Tone (DTMF) Dialing is the dafault."
		END
	END IF

	'check for [COMx:]
	OptionSpecified% = INSTR(CommandLine$,":")

	IF OptionSpecified% THEN
		ComPort$ = UCASE$(MID$(CommandLine$,OptionSpecified%-4,5))
		IF INSTR("COM1:~COM2:~COM3:~COM4:",ComPort$) = 0 THEN
			PRINT
			PRINT "INVALID COM PORT SPECIFICATION ("+ComPort$+").  PROGRAM STOPPED."
			END
		END IF
	ELSE
		ComPort$ = "COM1:"
	END IF

	'check for [@t]
	OptionSpecified% = INSTR(CommandLine$,"@")

	IF OptionSpecified% THEN
		StartTime% = VAL(MID$(CommandLine$,OptionSpecified%+1))
		IF StartTime% => 0 AND StartTime% <= 23 THEN
			PRINT "TIME NOW... "
			PRINT "WAITING FOR             TO BEGIN TIME-SYNC..."
			PRINT "(Press Escape to interrupt.)"
			LOCATE 5,13
			PRINT fnPeopleTime$(RIGHT$(STR$(StartTime%),2)+":00:00")
			WHILE VAL(LEFT$(TIME$,2)) <> StartTime%
				LOCATE 4,13
				PRINT fnPeopleTime$(TIME$);
				CALL QuitRoutine
			WEND
			LOCATE 4,13
			PRINT fnPeopleTime$(TIME$);
			LOCATE 5,1
			PRINT SPACE$(50)
		END IF
	END IF

	'check for [/P]
	OptionSpecified% = INSTR(CommandLine$,"/P")

	IF OptionSpecified% THEN
		DialType$ = "P"
	ELSE
		DialType$ = "T"
	END IF

	BaudRate$ = "1200"   'Don't use 300! (See programmers note above.)

	PhoneNumber$ = "1 303 494 4774"

	ModemSetUp$ = ",N,8,1,DS,CS,RS"  'note leading comma (required)

	ComPortTimeOut%  = 3

	ComGlitchTolerance% = 10

	CALL NISTSync

	END

    ErrorHandler:

	ErrorCode%    = ERR
	ErrorAddress& = ERADR
	ErrorSource%  = ErrorProne%

	ErrorProne% = %None       'clear flag

	RESUME ErrorRecover       ' ───┐  All error recovery is done with
				  '    │  GOTO, to allow multiple errors at
    ErrorRecover:                 ' <──┘  the same time.

	SELECT CASE ErrorCode%

		CASE %DeviceIOError,%ComBufferOFlow

			SELECT CASE ErrorSource%
				CASE %GettingCom
					GOTO GetComRetry
				CASE %SendingCom
					GOTO SendComReTry
				CASE %OpeningCom
					GOTO OpenComReTry
			END SELECT

		CASE %DeviceTimeOut

			SELECT CASE ErrorSource%
				CASE %GettingCom
					GOTO GetComAbort
				CASE %SendingCom
					GOTO SendComAbort
				CASE %OpeningCom
					GOTO OpenComAbort
			END SELECT

		CASE %DeviceUnavail

			PRINT "COM PORT "+ComPort$+" NOT AVAILABLE.  PROGRAM STOPPED."
			END

	END SELECT

	IF HardCrash% THEN END
	HardCrash% = %True

	PRINT "UNRECOVERABLE INTERNAL ERROR #";ErrorCode%;ErrorAddress&
	CALL CloseComPort
	END


SUB NISTSync

	SHARED Connected%,LossOfData%,ComChar$,ComString$,TimeZone%
	SHARED ComGlitchAbort%

	LOCAL NISTTime$,NISTDate$,FirstTime$,OldTime$,Hours%,Minutes%,Seconds%
	LOCAL ReTries%,Days%,Date%,Month%,Year%,AllDone%

    StartNISTSync:

	CALL ConnectWithModem  'sets Connected% to %True or %False

	IF Connected% THEN

		LOCATE CSRLIN-1,1
		PRINT "CONNECTED: Synchronizing DOS Clock to match NIST..."

		DELAY 1 'there is a short delay before the ACTS data starts

		LossOfData% = %False

		WHILE NOT LossOfData% AND NOT ComGlitchAbort% AND NOT AllDone%

			'GET A STRING

			ComString$ = ""
			ComChar$   = ""

			WHILE ComChar$ <> CHR$(%LF) _
			      AND NOT LossOfData% _
			      AND NOT ComGlitchAbort%
				CALL GetComChar   'get one character
				ComString$ = ComString$ + ComChar$
				IF ComChar$ > "z" OR ComChar$ < CHR$(%LF) THEN
					CALL ComGlitch(1)
				END IF
			WEND

			IF INSTR(ComString$,":") = 0 THEN
				'IT'S NOT A TIME-SYNC STRING. (It's a header.)
				'Ignore it and keep reading.
			ELSE
				'IT'S A TIME-SYNC STRING.
				'Check it for problems...

				IF INSTR("09",MID$(ComString$,7,1)) AND _           '\
				   INSTR("0123456789",MID$(ComString$,8,1)) AND _   '  \
				   MID$(ComString$,9,1) = "-" AND _                 '    \
				   INSTR("01",MID$(ComString$,10,1)) AND _          '      \ DATE
				   INSTR("0123456789",MID$(ComString$,11,1)) AND _  '      / STRING
				   MID$(ComString$,12,1) = "-" AND _                '    /
				   INSTR("0123",MID$(ComString$,13,1)) AND _        '  /
				   INSTR("0123456789",MID$(ComString$,14,1)) AND _  '/
				   MID$(ComString$,15,1) = " " AND _                '
				   INSTR("012",MID$(ComString$,16,1)) AND _         '\
				   INSTR("0123456789",MID$(ComString$,17,1)) AND _  '  \
				   MID$(ComString$,18,1) = ":" AND _                '    \
				   INSTR("012345",MID$(ComString$,19,1)) AND _      '      \ TIME
				   INSTR("0123456789",MID$(ComString$,20,1)) AND _  '      / STRING
				   MID$(ComString$,21,1) = ":" AND _                '    /
				   INSTR("012345",MID$(ComString$,22,1)) AND _      '  /
				   INSTR("0123456789",MID$(ComString$,23,1)) THEN   '/
					'IT'S A VALID TIME-SYNC STRING.
					IF FirstTime$ = "" THEN
						'IT'S THE FIRST GOOD STRING...
						IF MID$(ComString$,22,2) <> "59" THEN
							FirstTime$ = ComString$
						'ELSE
							'DON'T ACCEPT 59 SECS
							'OR "+1" MATCH BELOW
							'WILL CAUSE GLITCH.
						END IF
					ELSE
						'2ND GOOD STRING IN A ROW
						IF LEFT$(ComString$,21) = LEFT$(FirstTime$,21) AND_
						   RIGHT$(ComString$,27)= RIGHT$(FirstTime$,27) AND_
						   VAL(MID$(ComString$,22,2)) = VAL(MID$(FirstTime$,22,2))+1 THEN
							'GOOD MATCH (ONE SECOND DIFFERENCE BETWEEN STRINGS)
							NISTTime$ = MID$(ComString$,16,8)

							'CORRECT FOR ZULU TIME
							Hours% = VAL(LEFT$(NISTTime$,2)) + TimeZone%
							IF Hours% > 23 THEN
								Days% = +1
								DECR Hours%,24
							ELSEIF Hours% < 0 THEN
								Days% = -1
								INCR Hours%,24
							END IF
							MID$(NISTTime$,1,2) = RIGHT$(STR$(Hours%),2)
							IF Hours% < 10 THEN MID$(NISTTime$,1) = "0"

							OldTime$ = TIME$

							TIME$ = NISTTime$  'actual sync

							LOCATE CSRLIN-1,1
							PRINT "NIST TIME: "+fnPeopleTime$(NISTTime$);
							IF TimeZone% <> 0 THEN
								PRINT " (GMT corrected for local Time Zone)"
							ELSE
								PRINT TAB(79)
							END IF
							PRINT "DOS  TIME: "+fnPeopleTime$(OldTime$)
							PRINT "DOS CLOCK HAS NOW BEEN SYNCHRONIZED TO MATCH NIST."

							CALL TimeDifference(NISTTime$,OldTime$,Hours%,Minutes%,Seconds%)
							PRINT "DIFFERENCE WAS "+STR$(Hours%)+" HOUR(S), "+STR$(Minutes%)+" MINUTE(S), "+STR$(Seconds%)+" SECOND(S)"

							'CHECK DATE

							NISTDate$ = MID$(ComString$,10,5)+"-19"+MID$(ComString$,7,2)
							'date as mm-dd-yyyy, to match DATE$ format

							IF Days% THEN
								'CORRECT THE DATE FOR DAY DIFFERENCE
								Year% = VAL(RIGHT$(NISTDate$,4))
								Month%= VAL(LEFT$(NISTDate$,2))
								Date% = VAL(MID$(NISTDate$,4,2))
								CALL JumpDay(Year%,Month%,Date%,0,Days%)
								NISTDate$ = "mm-dd-yyyy"
								MID$(NISTDate$,1,2) = RIGHT$(STR$(Month%),2)
								MID$(NISTDate$,4,3) = RIGHT$(STR$(Date%),2)
								MID$(NISTDate$,6,5) = STR$(-Year%) '(- inserts hyphen)
								REPLACE " " WITH "0" IN NISTDate$
							END IF

							PRINT
							PRINT "NIST DATE: "+NISTDate$;

							IF Days% THEN
								PRINT " (corrected for midnight crossover)"
							ELSE
								PRINT
							END IF

							PRINT "DOS  DATE: "+DATE$;

							IF NISTDate$ = DATE$ THEN
								PRINT " IS CORRECT."
							ELSE
								DATE$ = NISTDate$
								PRINT " HAS NOW BEEN CORRECTED TO MATCH NIST."
							END IF

							AllDone% = %True  'to force exit

						ELSE

							CALL ComGlitch(2)
							FirstTime$ = ""

						END IF

					END IF

				ELSE

					CALL ComGlitch(1200)
					'This glitch can be caused by running
					'NIST at the wrong baud rate.  Use 1200.

				END IF

			END IF

			IF INSTAT THEN CALL QuitRoutine

		WEND

	ELSE

		INCR ReTries%
		IF ReTries% > 2 THEN
			PRINT "** UNABLE TO CONNECT WITH NIST (3 TRIES) **"
		ELSE
			PRINT "TRYING AGAIN..."
			GOTO StartNISTSync
		END IF

	END IF

	CALL CloseComPort

	IF ComGlitchAbort% OR LossOfData% THEN
		INCR ReTries%
		IF ReTries% > 2 THEN
			PRINT "** PHONE LINE PROBLEMS PREVENTED COMPLETION OF CLOCK-SYNC **"
		ELSE
			PRINT "Trying again..."
			GOTO StartNISTSync
		END IF
	END IF

END SUB


SUB QuitRoutine

	SHARED Keyboard%

	IF NOT INSTAT THEN EXIT SUB

	CALL Kybd

	IF Keyboard% = %Escape THEN
		PRINT
		CLS
		PRINT "NIST-SYNC PROGRAM INTERRUPTED BY OPERATOR."
		CALL CloseComPort
		END
	END IF

END SUB

'---------------------------------------------------------- end of NISTSYNC.BAS
```
{% endraw %}

## EDIT.BAS

{% raw %}
```bas
'EDIT.BAS - for PB-Tools and PowerBASIC
'CopyRight 1991 by Dave Navarro, Jr.
'All Rights Reserved

' Permission is granted to use these routines in your programs with the
' following restrictions:
'  - You may NOT distribute this source in part or whole as part of
'    any library for PowerBASIC or Turbo BASIC
'  - If you use these routines in any commercial program (commercial meaning
'    anything you get paid for, including shareware), you must give the
'    original author, Dave Navarro credit in either the program or in the
'    documentation.
'  - In no way shape or form may you remove the copyright notice from this
'    this, or any part of the source.
' These routines were tested on a generic XT clone and a 486 machine and
' found to work without fail, however, should you encounter any problems,
' the author cannot be held responsible for any problems/damage you may
' encounter, you use these at your own risk.

'Edit$ - Get ASCII input from user
' the default string is displayed, if the user starts inputing something
' without backing up, the line is cleared for the new input.

FUNCTION Edit$(Default$, MaxLen%, FilChar$) PUBLIC
   Text$=Default$
   CALL InsertOff
   FilChar%=ASCII(FilChar$)
   IF FilChar%<0 THEN FilChar%=32
   Col%=POS(0)
   Row%=CSRLIN
   IF LEN(Text$)>MaxLen% THEN EXIT FUNCTION
   Tmp$=""
   TopScan%=CurTop%
   BotScan%=CurBot%
   LOCATE Row%, Col%,0
   PRINT STRING$(Maxlen%,FilChar%);
   LOCATE Row%, Col%,1,TopScan%,BotScan%
   PRINT Text$;
   CPos%=LEN(Text$)
   Ins%=InsStat%
   StartOut:
      I$=GetKey$
      IF I$=CHR$(8) THEN Tmp$=Text$:GOTO BackSpace
      IF I$=CHR$(0,75) AND Text$>"" THEN          'Left Arrow
        Tmp$=Text$
        DECR CPos%
        GOTO GetText
      END IF
      IF I$=CHR$(0,71) THEN                       'Home Key
        Tmp$=Text$
        CPos%=0
        GOTO GetText
	  END IF
	  IF I$=CHR$(13) THEN SayBye                  'Return
	  IF I$=CHR$(27) THEN SayBye                  'Esc
      IF I$=CHR$(0,72) THEN SayBye                'Down Arrow
      IF I$=CHR$(0,80) THEN SayBye                'Up Arrow
      IF IsASCII%(I$)=0 THEN StartOut
      LOCATE Row%, Col%
      PRINT STRING$(MaxLen%,FilChar%);
      Tmp$=I$
      CPos%=1
   GetText:
      LOCATE Row%, Col%, 0
      PRINT Tmp$;
      LOCATE Row%, Col%+CPos%, 1, TopScan%, BotScan%
      I$=GetKey$
      IF I$=CHR$(8) THEN BackSpace                         'back space
      IF I$=CHR$(0,82) AND Ins%=0 THEN                     'insert key
        Ins%=-1
        DECR TopScan%,2
        GOTO GetText
      END IF
      IF I$=CHR$(0,82) AND Ins%=-1 THEN                    'insert key
        Ins%=0
        INCR TopScan%,2
        GOTO GetText
      END IF
      IF I$=CHR$(0,79) THEN CPos%=LEN(Tmp$)                'end key
      IF I$=CHR$(0,71) THEN CPos%=0                        'home key
      IF I$=CHR$(0,83) AND CPos%<LEN(Tmp$) THEN DelKy      'delete
      IF I$=CHR$(0,75) AND CPos%>0 THEN DECR CPos%         'left arrow
      IF I$=CHR$(0,77) AND CPos%<LEN(Tmp$) THEN INCR CPos% 'right arrow
      IF I$=CHR$(27) THEN Text$=Default$:GOTO SayBye       'esc key
      IF I$=CHR$(0,80) THEN Text$=Tmp$:GOTO SayBye         'down arrow
      IF I$=CHR$(0,72) THEN Text$=Tmp$:GOTO SayBye         'up arrow
      IF I$=CHR$(13) THEN Text$=Tmp$:GOTO SayBye           'return
      IF IsASCII%(I$)=0 THEN GetText
      IF LEN(Tmp$)=MaxLen% THEN GetText
      IF LEN(Tmp$)=Cpos% THEN
        Tmp$=Tmp$+I$
       ELSEIF Ins%=-1 THEN
        Tmp$=InsChar$(Tmp$,I$,CPos%)
       ELSE
        MID$(Tmp$,CPos%+1,1)=I$
      END IF
      INCR CPos%
      GOTO GetText
  BackSpace:
      IF Tmp$="" OR CPos%=0 THEN GetText
      IF CPos%=LEN(Tmp$) THEN
        Tmp$=LEFT$(Tmp$, LEN(Tmp$)-1)
       ELSE
        Tmp$=DelChar$(Tmp$,CPos%)
      END IF
      LOCATE Row%, Col%, 0
      PRINT Tmp$;CHR$(FilChar%);
      DECR CPos%
      GOTO GetText
  DelKy:
      IF LEN(Tmp$)=1 THEN
        Tmp$=""
       ELSE
        Tmp$=DelChar$(Tmp$,CPos%+1)
      END IF
      LOCATE Row%, Col%, 0
      PRINT Tmp$;CHR$(FilChar%);
      GOTO GetText
  SayBye:
      IF Ins%=-1 THEN INCR TopScan%,2
      CALL InsertOff
      LOCATE Row%, Col%, 0, TopScan%, BotScan%
      PRINT Text$;STRING$(MaxLen%-LEN(Text$),FilChar%);
      FilChar$=I$   'return the terminator in FilChar$
      Edit$=Text$   'give them the altered text without changing the original
END FUNCTION

'GetKey - Loop until a key is pressed and return the key to your program

FUNCTION Getkey$ PUBLIC
   WHILE I$=""
      I$=INKEY$
   WEND
   Getkey$=I$
END FUNCTION

'IsASCII% - Tests if a charactor is a printable ASCII charactor

FUNCTION IsASCII%(I$) PUBLIC
   IF ASCII(I$)>31 AND ASCII(I$)<127 THEN IsASCII%=-1 ELSE IsASCII%=0
END FUNCTION

'DelChar - Delete a charactor from a string

FUNCTION DelChar$(Tmp$,Xpos%) PUBLIC
   DelChar$=LEFT$(Tmp$,Xpos%-1)+MID$(Tmp$,Xpos%+1)
END FUNCTION

'InsChar - Insert a charactor into a string

FUNCTION InsChar$(Tmp$,Tmp2$,Xpos%) PUBLIC
   InsChar$=LEFT$(Tmp$,Xpos%)+Tmp2$+MID$(Tmp$,Xpos%+1)
END FUNCTION

'CurTop - Returns the top scan line of cursor

FUNCTION CurTop% PUBLIC
   DEF SEG=&H0040
   CurTop%=PEEK(&H0061) AND &HF
   DEF SEG
END FUNCTION

'CurBot - Returns the bottom scan line of cursor

FUNCTION CurBot% PUBLIC
   DEF SEG=&H0040
   CurBot%=PEEK(&H0060)
   DEF SEG
END FUNCTION

'InsertOn - toggle insert key status

SUB InsertOn STATIC PUBLIC
   DEF SEG = 0
   POKE &H417,PEEK(&H417) OR 128
   DEF SEG
END SUB

'InsertOff - toggle insert mode off

SUB InsertOff STATIC PUBLIC
   DEF SEG = 0
   POKE &H417,PEEK(&H417) AND 127
   DEF SEG
END SUB
```
{% endraw %}

## PMPBWIND.BAS

{% raw %}
```bas
		 ' POOR MAN'S WINDOWS ROUTINE VERSION 3.00b
		 '  WORKS WITH ALL VERSIONS OF POWERBASIC

			 '   SHADETREE SOFTWARE
			 '  Bruce Nopper, Author
			 '  Copyright 1990, 1991
			 '    CIS #:73300,2444

' THESE ROUTINES ARE FREE TO BE DISTRIBUTED ONLY WITHIN THESE GUIDELINES;

'  1.) NO MODIFICATION TO THE SOURCE CODE OR EXCLUSION OF POORMANS.DOC FILE.
'  2.) NO FEES CHARGED OTHER THAN THE COST OF DUPLICATION AND/OR POSTAGE.
'  3.) THIS SOURCE CODE IN PART OR IN WHOLE MAY NOT BE INCLUDED WITH ANY
'      OTHER SOURCE CODE, PBU, OR LIBRARY THAT IS NOT PART OF COMPILED
'      EXE PROGRAM CREATED BY THE POWERBASIC COMPILER WITHOUT THE WRITTEN
'      CONSENT OF THE AUTHOR.

' THOUGHT TO PONDER :  A THOUGHTFUL ACT WILL USUALLY BE RETURNED IN KIND

' THE FOLLOWING PUBLIC AND EXTERNAL STATEMENTS ARE FOR ALL SHARED VARIABLES
' AND ARE NECCESARY TO CREATE A PBU FILE WITH THESE ROUTINES.

' PUBLIC LIN2%,COL2%,CHAR%,ATTR% '(REATTRSCRN)
' PUBLIC LIN$,LIN3%,COL3%,CHAR%  '(READSCRN)
' PUBLIC SSCR$(),OPT,LWOP,LIN1%,COL1%,NLIN1%,NCOL1%,WLMT,ERRC '(PWINDOP)
' PUBLIC VID$,VID%,SCRSEG% '(GETVIDTYPE)
' PUBLIC LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR% '(EXPLODE)
' PUBLIC LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR%,BOX%,BRDATR% '(BOXIT)
' PUBLIC LIN4%,COL4%,NLIN4%,NCOL4%,ASPECT%,SHADOW%,SATTR% '(SHADOWIT)
' PUBLIC LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,FILLCHAR%,SCRLDIR% '(SCROLLSIDE)
' PUBLIC LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,FILLCHAR%,SCRLDIR% '(SCROLLIT)
' PUBLIC CUR$,CURP$ ' (SAVECURSOR & RESTORECURSOR)

' EXTERNAL LIN2%,COL2%,CHAR%,ATTR% '(REATTRSCRN)
' EXTERNAL LIN$,LIN3%,COL3%,CHAR%  '(READSCRN)
' EXTERNAL SSCR$(),OPT,LWOP,LIN1%,COL1%,NLIN1%,NCOL1%,WLMT,ERRC '(PWINDOP)
' EXTERNAL VID$,VID%,SCRSEG% '(GETVIDTYPE)
' EXTERNAL LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR% '(EXPLODE)
' EXTERNAL LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR%,BOX%,BRDATR% '(BOXIT)
' EXTERNAL LIN4%,COL4%,NLIN4%,NCOL4%,ASPECT%,SHADOW%,SATTR% '(SHADOWIT)
' EXTERNAL LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,FILLCHAR%,SCRLDIR% '(SCROLLSIDE)
' EXTERNAL LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,FILLCHAR%,SCRLDIR% '(SCROLLIT)
' EXTERNAL CUR$,CURP$ ' (SAVECURSOR & RESTORECURSOR)

 DEFINT A - Z
 WLMT = 10          ' NO. OF WINDOWS NEEDED (FROM 1 TO MEMORY LIMITATIONS)
 CALL PWINDOWINIT   ' INITIALIZE SPACE TO SAVE THE WINDOWS AND SETS
		    ' SCRSEG% = &Hb800 FOR COLOR OR &hb000 FOR MONOCHROME

  COLOR 8,7,0 :CLS
  FOR S%= 1 TO 23
    PRINT STRING$(79,65)    'FILL IN 23 LINES OF A'S TO THE SCREEN
  NEXT

  OPT = 3         ' SAVE ENTIRE SCREEEN
  CALL PWINDOP    ' DO IT

  OPT = 1         ' SAVE A SMALL BLOCK OF SCREEN
  LIN1%=9         ' START SAVE AT LINE #    ( 1 - 25 )
  COL1%=5         ' START SAVE AT COLUMN #  ( 1 - 80 )
  NLIN1%=5        ' SAVE HOW MANY LINES     ( 1 - 25 )
  NCOL1%=25       ' SAVE HOW MANY CHARACTERS FROM EACH LINE ( 1 - 80 )

  CALL PWINDOP

  DELAY 1
  COLOR 7,0,0
  CLS

  FOR S%= 1 TO 23          'FILL IN 23 LINES OF B'S TO THE SCREEN
    PRINT STRING$(79,66)
  NEXT
  DELAY 2

 ' OPT=2            ' RETURN LAST SAVE
 ' CALL PWINDOP    ' DO IT
 ' DELAY 2

  OPT=4            ' RETURN LAST SAVE NEW POSITION
  lin1%=5
  col1%=50
  CALL PWINDOP    ' DO IT
  DELAY 2

  OPT=2            ' RETURN NEXT SAVE
  CALL PWINDOP    ' DO IT
  DELAY 2

    '  ROUTINES TO READ SCREEN & CHANGE SCREEN COLORS FOR POWERBASIC

  COLOR 8,7,0:CLS

  PRINT "THIS IS A TEST TO READ TEXT FROM THE SCREEN INTO TO A STRING"

  LIN3%=1   ' START AT WHAT LINE    ( 1 - 25 )
  COL3%=1   ' START AT WHAT COLUMN  ( 1 - 80 )
  CHAR%=14  ' HOW MANY CHARACTERS TO BE READ

  DELAY 2
  CALL READSCRN            ' DO IT
  PRINT "LIN$="LIN$        ' LIN$= PURE ASCII STRING READ FROM SCREEN MEMORY
  DELAY 2

  LIN2%=2   ' START AT WHAT LINE    ( 1 - 25 )
  COL2%=6   ' START AT WHAT COLUMN  ( 1 - 80 )
  CHAR%=14  ' HOW MANY CHARACTERS TO BE CHANGED
  ATTR%=9   ' THE NEW COLOR ATTRIBUTE VALUE

  CALL REATTRSCRN   'DO IT
  DELAY 2

'  DRAW A BOX ON SCREEN

 COLOR 8,7,0: CLS
 FOR S%= 1 TO 23
  LOCATE S%,1:PRINT STRING$(79,"$")  ' BACKGROUND
 NEXT

 LIN4% = 2          ' START LINE FOR BOX (1 - 23)
 COL4% = 5          ' START COLUMN FOR BOX (1 -78)
 NLIN4% = 10        ' NO. OF LINES DOWN
 NCOL4% = 23        ' NO. OF COLUMNS ACROSS
 BOXATR% = 6        ' FILL ATTRIBUTE FOR BOX (for both explode & boxit)
 BRDATR% = 6        ' ATTRIBUTE FOR BORDER (for boxit)
 BOX% = 1           ' TYPE OF BOX AND BORDER
 ASPECT% = 1        ' LEFT HAND SHADOW (2 = RIGHT HAND SHADOW)
 SHADOW% = 1        ' TYPE OF SHADOW (TRANSPARENT)
 SATTR% = 8         ' ATTRIBUTE FOR SHADOW (NO EFFECT ON SHADOW = 1)
 CALL EXPLODE       ' MAKE BOX GROW ONTO THE SCREEN
 CALL BOXIT         ' MAKE BOX WITH BORDER
 CALL SHADOWIT      ' MAKE THE 3D SHADOW EFFECT
 DELAY 2

	 'DISPLAY ALL THE DIFFERENT BOX TYPES ROUTINE

 FOR T% = 1 TO 4
 LIN4% = T%*2          ' START LINE FOR BOX (1 - 23)
 COL4% = T%*2+(13*T%)  ' START COLUMN FOR BOX (1 -78)
 NLIN4% = T%*3         ' NO. OF LINES DOWN
 NCOL4% = T%*4         ' NO. OF COLUMNS ACROSS
 BOXATR% = T%*20       ' FILL ATTRIBUTE FOR BOX (for both explode & boxit)
 BRDATR% = T%*24       ' ATTRIBUTE FOR BORDER (for boxit)
 BOX% = T%+1           ' TYPE OF BOX AND BORDER
 IF T% <3 THEN
  ASPECT% = 1          ' LEFT HAND SHADOW
 ELSE
  ASPECT% = 2          ' RIGHT HAND SHADOW)
 END IF
 SHADOW% = T%+1        ' TYPE OF SHADOW
 SATTR% = T%*25        ' ATTRIBUTE FOR SHADOW (NO EFFECT ON SHADOW = 1)
 CALL EXPLODE          ' MAKE BOX GROW ONTO THE SCREEN
 CALL BOXIT            ' MAKE BOX WITH BORDER
 CALL SHADOWIT         ' MAKE THE SHADOW
 NEXT
 DELAY 3

	'  SCROLL THE SCREEN SIDEWAYS

 COLOR 8,7,0: CLS
 TEST$="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQ"
 TEST$=TEST$+"RSTUVWXYZ"
 DIM SHIP$(5)
		 ship$(1)=" /\_________________"
		 ship$(2)=" \           \______\_______"
		 ship$(3)=">>│ «════»           ╙═»    >═»"
		 ship$(4)=" / _________________________>═»"
		 ship$(5)=" \/"

 FOR S%= 1 TO 23
  LOCATE S%,1:PRINT TEST$  ' BACKGROUND
 NEXT

 LIN5% = 9           ' START LINE FOR SCROLL (1 - 25)
 COL5% = 5           ' START COLUMN FOR SCROLL (1 -79)
 NLIN5% = 6          ' NO. OF LINES DOWN
 NCOL5% = 25         ' NO. OF COLUMNS ACROSS
 SCRLDIR% = 2        ' DIRECTION OF SCROLL (1 = LEFT  2 = RIGHT)
 FILLCHAR% = 26      ' CHARACTER TO FILL SCROLLED SPACE
 FILLATR% = 9        ' FILL CHARACTER ATTRIBUTE FOR SCROLL

 FOR S%=1 TO 15
  CALL SCROLLSIDE     ' DO THE SCROLL
 NEXT

 LIN5% = 9            ' START LINE FOR SCROLL (1 - 25)
 COL5% = 49           ' START COLUMN FOR SCROLL (1 -79)
 NLIN5% = 6           ' NO. OF LINES DOWN
 NCOL5% = 25          ' NO. OF COLUMNS ACROSS
 SCRLDIR% = 1         ' DIRECTION OF SCROLL (1 = LEFT  2 = RIGHT)
 FILLCHAR% = 27       ' CHARACTER TO FILL SCROLLED SPACE
 FILLATR% = 9         ' FILL CHARACTER ATTRIBUTE FOR SCROLL

 FOR S%=1 TO 15
  CALL SCROLLSIDE     ' DO THE SCROLL
 NEXT
 DELAY 2
 CLS

		 ' SCREEN ANIMATION ROUTINE

 FOR S%= 1 TO 5:LOCATE S%+4,5,0:PRINT SHIP$(S%):NEXT

 LIN5% = 5            ' START LINE FOR SCROLL (1 - 25)
 COL5% = 4            ' START COLUMN FOR SCROLL (1 -79)
 NLIN5% = 5           ' NO. OF LINES DOWN
 NCOL5% = 33          ' NO. OF COLUMNS ACROSS
 SCRLDIR% = 2         ' DIRECTION OF SCROLL (1 = LEFT  2 = RIGHT)
 FILLCHAR% = 32       ' CHARACTER TO FILL SCROLLED SPACE
 FILLATR% = 112       ' FILL CHARACTER ATTRIBUTE FOR SCROLL

 FOR S%=1 TO 45
  CALL SCROLLSIDE     ' DO THE SCROLL
  INCR COL5%
 NEXT
 DELAY 3

	'  SCROLL THE SCREEN UP AND DOWN

 COLOR 8,7,0: CLS
 FOR S%= 1 TO 23
  LOCATE S%,1:PRINT STRING$(79,CHR$(64+S%))  ' BACKGROUND
 NEXT

 LIN5% = 3           ' START LINE FOR SCROLL (1 - 25)
 COL5% = 31          ' START COLUMN FOR SCROLL (1 -79)
 NLIN5% = 8          ' NO. OF LINES DOWN
 NCOL5% = 15         ' NO. OF COLUMNS ACROSS
 SCRLDIR% = 1        ' DIRECTION OF SCROLL (1 = UP  2 = DOWN)
 FILLCHAR% = 24      ' CHARACTER TO FILL SCROLLED SPACE
		     ' THE FILL CHARACTER IS OPTIONAL
		     ' SET FILLCHAR% = 0 OR 32 TO GET A BLANK SPACE
 FILLATTR% = 9       ' FILL CHARACTER ATTRIBUTE FOR SCROLL

 FOR S%=1 TO 7
  CALL SCROLLIT     ' DO THE SCROLL
 NEXT

 LIN5% = 15           ' START LINE FOR SCROLL (1 - 25)
 COL5% = 31           ' START COLUMN FOR SCROLL (1 -79)
 NLIN5% =8            ' NO. OF LINES DOWN
 NCOL5% = 15          ' NO. OF COLUMNS ACROSS
 SCRLDIR% = 2         ' DIRECTION OF SCROLL (1 = UP  2 = DOWN)
 FILLCHAR% = 25       ' CHARACTER TO FILL SCROLLED SPACE
		      ' THE FILL CHARACTER IS OPTIONAL
		      ' SET FILLCHAR% = 0 OR 32 TO GET A BLANK SPACE
 FILLATTR% = 9        ' FILL CHARACTER ATTRIBUTE FOR SCROLL

 FOR S%=1 TO 7
  CALL SCROLLIT       ' DO THE SCROLL
 NEXT

 LOCATE 23,10,0
 PRINT " THIS ENDS OUR DEMO PROGRAM!  PRESS ANY KEY TO CLEAR THE SCREEN. "
 ASK$= INPUT$(1)
 CLS:END

SUB REATTRSCRN
 SHARED LIN2%,COL2%,CHAR%,SCRSEG%,ATTR%
  LOCAL X%,Y%,Z%,TLIN$,WCHAR$,SAME%(),LOOK%

   IF ATTR% >256 THEN ATTR%=ATTR% MOD 256
    DEF SEG = SCRSEG%                ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
     X%=((LIN2%-1)*160)+(COL2%-1)*2  ' CALCULATE MEMORY LOCATION & OFFSET
      TLIN$=PEEK$ (X%,CHAR%*2)       ' GET THE SCREEN STRING & ATTRIBUTES
       WCHAR$=MID$(TLIN$,2,1)        ' GET ORIGINAL ATTRIBUTE VALUE
	Y%=TALLY(TLIN$,WCHAR$)       ' COUNT NO OF MATCHES FOR ATTTRIBUTE
	 IF Y%=LEN(TLIN$)\2 THEN        ' ANY CHARACTER MATCHES IN THIS STRING?
	  REPLACE WCHAR$ WITH CHR$(ATTR%) IN TLIN$ ' NO,CHANGE TO NEW ATTRIBUTE
	   ELSE
	    Z% = Y% - LEN(TLIN$)\2    ' YES, FIND HOW MANY MATCHES
	     DIM DYNAMIC SAME%(1) 'CREATE SPACE TO PUT MATCHED STRING POINTERS
	      REDIM SAME%(Z%)
	       LOOK%=-1
		FOR Y%=1 TO Z%           ' FIND ALL MATCH STRINGS LOCATIONS
		 LOOK%=INSTR(LOOK%+2,TLIN$,WCHAR$+WCHAR$)
		IF LOOK% MOD 2 THEN
	       SAME%(Y%) = LOOK%
	      ELSE
	     SAME%(Y%) = LOOK%+1
	    END IF
	   NEXT
	  REPLACE WCHAR$ WITH CHR$(ATTR%) IN TLIN$  ' CHANGE TO NEW ATTRIBUTE
	 FOR Y%= 1 TO Z%   ' PUT BACK THE STRINGS THAT MATCHED THE ATTRIBUTES
	TPL%=SAME%(Y%)     ' PLACE IN THE STRING TO INSERT REMOVED CHARACTERS
       TLIN$=LEFT$(TLIN$,TPL%-1)+WCHAR$+MID$(TLIN$,TPL%+1,LEN(TLIN$)-TPL%)
      NEXT
     ERASE SAME%        ' GET BACK MEMORY USED FOR TEMPORARY STRING POINTERS
    END IF
   POKE$ X%,TLIN$       ' WRITE STRING WITH NEW ATTRIBUTE TO VIDEO MEMORY
  DEF SEG             ' RESET SEGMENT POINTER TO DEFAULT LOCATION (a must do)
 END SUB

SUB READSCRN
 SHARED LIN$,LIN3%,COL3%,CHAR%,SCRSEG%
  LOCAL X%,Y%,Z%,TLIN$,WCHAR$,SAME%(),TPL%,LOOK%

   DEF SEG = SCRSEG%                   ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
    X%=((LIN3%-1)*160)+(COL3%-1)*2     ' CALCULATE MEMORY LOCATION OFFSET
     TLIN$ = PEEK$(X%,CHAR%*2)         ' GET THE STRING FROM SCREEN MEMORY
      DEF SEG           ' RESET SEGMENT POINTER TO DEFAULT LOCATION (a must do)
       WCHAR$ = MID$(TLIN$,2,1)      ' GET SCREEN ATTRIBUTE VALUE OF THE STRING
	Y% = TALLY (TLIN$,WCHAR$)      ' COUNT NO OF MATCHES FOR ATTTRIBUTE
	 IF Y% = LEN (TLIN$) \ 2 THEN    ' ANY CHARACTERS MATCH THE ATTRIBUTE ?
	  LIN$ = REMOVE$(TLIN$,WCHAR$)  ' NO, REMOVE ATTRIBUTES FROM STRING
	   ELSE
	    Z% = Y% - LEN(TLIN$) \ 2       ' YES, FIND HOW MANY MATCHES
	     DIM DYNAMIC SAME%(1)  'CREATE PLACE TO PUT MATCHED STRING POINTERS
	      REDIM SAME%(Z%)
	       LOOK%=-1
		FOR Y%=1 TO Z%      ' FIND ALL MATCHING STRING LOCATIONS
		LOOK%=INSTR(LOOK%+2,TLIN$,WCHAR$+WCHAR$)
	       IF LOOK% MOD 2  THEN
	      SAME%(Y%) = LOOK%+1
	     ELSE
	    SAME%(Y%) = LOOK%
	   END IF
	  NEXT
	 TLIN$ = REMOVE$(TLIN$,WCHAR$)   ' REMOVE ATTRIBUTES FROM THE STRING
	FOR Y% = 1 TO Z%      ' PUT BACK THE STRINGS THAT MATCHED THE ATTRIBUTES
       TPL%=(SAME%(Y%)\2)+1  ' PLACE IN THE STRING TO INSERT REMOVED CHARACTER
      TLIN$ = LEFT$(TLIN$,TPL%-1)+WCHAR$+MID$(TLIN$,TPL%,LEN(TLIN$)-(TPL%-1))
     NEXT
    ERASE SAME%      ' GET BACK MEMORY USED FOR TEMPORARY STRING POINTER
   LIN$=TLIN$        ' SET LIN$ TO EQUAL MODIFIED TEMPORARY WORK STRING
  END IF
 END SUB

SUB PWINDOP  ' NEW VERSION TO WORK WITH 43/50 LINES MODES IN EGA/VGA
 SHARED SSCR$(),SCRSEG%,OPT,LWOP,LIN1%,COL1%,NLIN1%,NCOL1%,WLMT,ERRC
 SHARED CURST%,CURSB%,CURSR%,CURSC%,NOOFROWS%
  LOCAL WOFST%,WW%,PX%,LN1%,NL1%,CL1%,NC1%,CRT%,CRB%,CRR%,CRC%

   ERRC=0       ' ERRC is an error code
		' -1 = no window space left, erase & redim more window space
		' -2 = no windows left to restore
		' -3 = invalid option no.

       ' The OPT variable is to select choice of save & return save
       ' 1 = save window from coordinates set by LIN1%,COL1%,NLIN1%,NCOL1%
       ' 2 = return last window saved (no coordinates neeed be set)
       ' 3 = save entire screen (no coordinates neeed be set)
       ' 4 = return save to different location coordinates set by LIN1%,COL1%

   ' The cursor size and location are automaticly saved and restored for each
   ' window created. If a window is restored to a new location using option 4
   ' the cursor is repositioned to the same relative location.

  SELECT CASE OPT
   CASE 1,3                                'save window area
    IF LWOP>=WLMT THEN ERRC=-1:EXIT SUB
    CALL VIDNEWSUPDATE
    DEF SEG = SCRSEG%
    INCR LWOP
    IF OPT=3 THEN
     SSCR$(LWOP)="0101"+RIGHT$(STR$(NOOFROWS%),2)+"80"+RIGHT$(STR$(CURST%),2)+_
      RIGHT$(STR$(CURSB%),2)+RIGHT$(STR$(CURSR%),2)+RIGHT$(STR$(CURSC%),2)
       SSCR$(LWOP)=SSCR$(LWOP)+PEEK$(0,(NOOFROWS%*80)*2)
      ELSE
       WOFST%=((LIN1%-1)*160)+((COL1%-1)*2)
	WW%=NCOL1%*2
	 SSCR$(LWOP)=RIGHT$(STR$(LIN1%),2)+RIGHT$(STR$(COL1%),2)+_
	 RIGHT$(STR$(NLIN1%),2)+RIGHT$(STR$(NCOL1%),2)+RIGHT$(STR$(CURST%),2)+_
	 RIGHT$(STR$(CURSB%),2)+RIGHT$(STR$(CURSR%),2)+RIGHT$(STR$(CURSC%),2)
	FOR PX%=0 TO NLIN1%
       SSCR$(LWOP)=SSCR$(LWOP)+PEEK$(WOFST%+(PX%*160),WW%)
      NEXT
     END IF
    DEF SEG
  CASE 2,4                               ' return saved window
   IF LWOP=0 THEN ERRC=-2:EXIT SUB
    DEF SEG = SCRSEG%
     LN1%=VAL(LEFT$(SSCR$(LWOP),2))
      CL1%=VAL(MID$(SSCR$(LWOP),3,2))
       NL1%=VAL(MID$(SSCR$(LWOP),5,2))
	NC1%=VAL(MID$(SSCR$(LWOP),7,2))
	 CRT%=VAL(MID$(SSCR$(LWOP),9,2))
	  CRB%=VAL(MID$(SSCR$(LWOP),11,2))
	   CRR%=VAL(MID$(SSCR$(LWOP),13,2))-1
	    CRC%=VAL(MID$(SSCR$(LWOP),15,2))-1
	     IF OPT = 4 THEN
	       SELECT CASE LIN1%
		 CASE >LN1%
			   INCR CRR%,LIN1%-LN1%
			   LN1%=LIN1%
		 CASE <LN1%
			   DECR CRR%,LN1%-LIN1%
			   LN1%=LIN1%
	       END SELECT
	       SELECT CASE COL1%
		 CASE >CL1%
			   INCR CRC%,COL1%-CL1%
			   CL1%=COL1%
		 CASE <CL1%
			   DECR CRC%,CL1%-COL1%
			   CL1%=COL1%
	       END SELECT
	      END IF
	     WOFST%=((LN1%-1)*160)+((CL1%-1)*2)
	    WW%=NC1%*2
	   FOR PX%=0 TO NL1%
	  POKE$ WOFST%+(PX%*160),MID$(SSCR$(LWOP),17+(PX%*WW%),WW%)
	 NEXT
	DEF SEG
       REG 1,&H0+(&H01*256):REG 3,CRB%+(CRT%*256):CALL INTERRUPT &H10
      REG 1,&H0+(&H02*256):REG 2,&H00:REG 4,CRC%+(CRR%*256):CALL INTERRUPT &H10
     SSCR$(LWOP)=""
    DECR LWOP
   CASE ELSE
     ERRC = -3:EXIT SUB
  END SELECT
 END SUB

SUB VIDNEWSUPDATE   'NEW ADDITION TO PMPBWIND.BAS  ROUTINES
 SHARED CURVIDMODE%,NOOFCOLMS%,NOOFROWS%,CURST%,CURSB%,CURSR%,CURSC%
  REG 1,&h00 + (&h0F*256)
   CALL INTERRUPT &H10
    CURVIDMODE% = REG(1) AND 255            ' GET PRESENT VIDEO DISPLAY MODE
     NOOFCOLMS% = (REG(1) AND &HFF00)\256    ' GET NO OF COLUMNS IN USE
      DEF SEG = &H40                          ' GET NO OF ROWS IN USE
       NOOFROWS% = PEEK(&H84)+1
	DEF SEG
	 IF NOOFROWS% = 1 THEN NOOFROWS% = 25
	 REG 1,&H0300                           ' GET CURSOR INFO
	REG 2,&H00
       CALL INTERRUPT &H10
      CURST%=(REG(3) AND &HFF00)\256           ' CURSOR START VALUE
     CURSB%=REG(3) AND 255                    ' CURSOR END VALUE
    CURSR%=((REG(4) AND &HFF00)\256)+1       ' CURSUR ROW
   CURSC%=(REG(4) AND 255)+1                ' CURSUR COLUMN
 END SUB

SUB GETVIDTYPE
 SHARED VID$,VID%,SCRSEG%
  LOCAL VGA,EGA,ACTV,MONO
 SCRSEG% = &hb800
  REG 1,&H00 + (256 * &h1A)
   CALL INTERRUPT &h10: VGA = REG(1) AND 255
    REG 1,&h00 + (&h0F * 256)
     CALL INTERRUPT &h10: MONO = REG (1) AND 255
      IF VGA AND MONO <> 7 THEN VID$="VGA":VID%=1:EXIT SUB
       IF VGA AND MONO = 7 THEN VID$="VGAMONO":VID%=2:SCRSEG%=&hb000:EXIT SUB
	REG 1,&H1200 :REG 2,&H0032
	 CALL INTERRUPT &H10
	  IF REG(1) AND &H00FF = &H0012 THEN VID$ = "MCGA":VID% = 3:EXIT SUB
	   REG 1,&h00 + (256 * &h12)
	    REG 2,&h10 + (256 * &h00)
	     CALL INTERRUPT &h10
	    EGA = REG(2) AND 255
	   IF EGA = 16 THEN CGAORMONO
	  DEF SEG = &h40 :ACTV = PEEK (&h87): DEF SEG: ACTV = (ACTV AND &h04)
	 IF ACTV = 0 AND MONO <>7 THEN VID% = 4: VID$ = "EGA": EXIT SUB
	IF ACTV=0 AND MONO=7 THEN SCRSEG%=&hb000:VID%=5:VID$="EGAMONO":EXIT SUB
      CGAORMONO:
       DEF SEG = &h40 :ACTV = PEEK (&h10) :DEF SEG
      IF (ACTV AND &h30) <> &h30 THEN
     VID% = 6:VID$ = "CGA"
    ELSE
   VID% = 7:VID$ = "MONO":SCRSEG% = &hb000
  END IF
 END SUB

SUB PWINDOWINIT
 SHARED WLMT,SSCR$(),LWOP
  DIM SSCR$(WLMT)
   LWOP=0
  CALL GETVIDTYPE
 END SUB

SUB EXPLODE  ' CREATE AN EXPLODING BOX
 SHARED LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR%,SCRSEG%
  LOCAL V%,W%,Y%,X%,Z%,THRU%,MIDC%,MIDL%

   IF BOXATR% >256 THEN BOXATR%=BOXATR% MOD 256
    DEF SEG = SCRSEG%                ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
     MIDL%=(NLIN4%\2)+LIN4%-1:MIDC%=(NCOL4%\2)+COL4%-1
      X%=((MIDL%-1)*160)+(MIDC%-1)*2  ' CALCULATE MEMORY LOCATION & OFFSET
       TLIN$=CHR$(32)+CHR$(BOXATR%)
	POKE$ X%,TLIN$
	 Y%=MIDL%:Z%=MIDC%:W%=2:THRU%=0
	  DO UNTIL THRU% = NLIN4%*2
	   DECR Y%:DECR Z%:INCR THRU%:GOSUB EXPLODEIT
	    FOR V% = 1 TO W%:INCR Z%:GOSUB EXPLODEIT:NEXT
	   FOR V% = 1 TO W%:INCR Y%:GOSUB EXPLODEIT:NEXT
	  FOR V% = 1 TO W%:DECR Z%:GOSUB EXPLODEIT:NEXT
	 FOR V% = 1 TO W%:DECR Y%:GOSUB EXPLODEIT:NEXT
	INCR W%,2
       LOOP
      EXIT SUB
     EXPLODEIT:
    IF Y%<LIN4% OR Y%>LIN4%+(NLIN4%-1) OR Z%<COL4% OR Z%>COL4%+(NCOL4%-1) THEN
       RETURN
     ELSE
       X%=((Y%-1)*160)+(Z%-1)*2  ' CALCULATE MEMORY LOCATION & OFFSET
       POKE$ X%,TLIN$
       RETURN
     END IF
    DEF SEG
  END SUB

SUB BOXIT  ' CREATE A BOX
 SHARED LIN4%,COL4%,NLIN4%,NCOL4%,BOXATR%,BOX%,SCRSEG%,BRDATR%
  LOCAL Y%,X%,TLIN$,BOX1$,BOX2$,BOX3$

   IF BOXATR% >256 THEN BOXATR%=BOXATR% MOD 256
    SELECT CASE BOX%
     CASE   1  :BOX1$="┌─┐":BOX2$="│":BOX3$="└─┘"
     CASE   2  :BOX1$="╔═╗":BOX2$="║":BOX3$="╚═╝"
     CASE   3  :BOX1$="╒═╕":BOX2$="│":BOX3$="╘═╛"
     CASE   4  :BOX1$="╓─╖":BOX2$="║":BOX3$="╙─╜"
     CASE ELSE :BOX1$="   ":BOX2$=" ":BOX3$="   "
    END SELECT
    DEF SEG = SCRSEG%                ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
     X%=((LIN4%-1)*160)+(COL4%-1)*2  ' CALCULATE MEMORY LOCATION & OFFSET
      TLIN$=LEFT$(BOX1$,1)+CHR$(BRDATR%)+REPEAT$(NCOL4%-2,MID$(BOX1$,2,1)_
       +CHR$(BRDATR%))+RIGHT$(BOX1$,1)+CHR$(BRDATR%)
	POKE$ X%,TLIN$       ' WRITE STRING WITH ATTRIBUTE TO VIDEO MEMORY
	 FOR Y%=1 TO NLIN4%-2
	  X%=((LIN4%+Y%-1)*160)+(COL4%-1)*2
	   TLIN$=BOX2$+CHR$(BRDATR%)+REPEAT$(NCOL4%-2," "+CHR$(BOXATR%))+BOX2$_
	  +CHR$(BRDATR%)
	 POKE$ X%,TLIN$       ' WRITE STRING WITH ATTRIBUTE TO VIDEO MEMORY
	NEXT
       X%=((LIN4%+NLIN4%-2)*160)+(COL4%-1)*2
      TLIN$=LEFT$(BOX3$,1)+CHR$(BRDATR%)+REPEAT$(NCOL4%-2,MID$(BOX3$,2,1)_
     +CHR$(BRDATR%))+RIGHT$(BOX3$,1)+CHR$(BRDATR%)
    POKE$ X%,TLIN$       ' WRITE STRING WITH NEW ATTRIBUTE TO VIDEO MEMORY
   DEF SEG
 END SUB

SUB SHADOWIT   ' ADD A 3D SHADOW EFFECT TO THE LAST BOX CREATED
 SHARED LIN4%,COL4%,NLIN4%,NCOL4%,SCRSEG%,ASPECT%,SHADOW%,SATTR%
  LOCAL Y%,X%,ATTR$,MOFS%,ACROSS%

   IF SATTR% >256 THEN SATTR%=SATTR% MOD 256

  SELECT CASE SHADOW%
   CASE    1 :ATTR$ = CHR$(8): MOFS% = 1                 ' TRANSPARENT
   CASE    2 :ATTR$ = CHR$(176)+CHR$(SATTR%): MOFS% = 0  ' HEAVY ░
   CASE    3 :ATTR$ = CHR$(177)+CHR$(SATTR%): MOFS% = 0  ' MEDIUM ▒
   CASE    4 :ATTR$ = CHR$(178)+CHR$(SATTR%): MOFS% = 0  ' LIGHT   ▓
   CASE    5 :ATTR$ = CHR$(219)+CHR$(SATTR%): MOFS% = 0  ' SOLID    █
   CASE ELSE :EXIT SUB
  END SELECT

   DEF SEG = SCRSEG%                ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
  SELECT CASE ASPECT%
   CASE 1 'left side
	FOR Y%= LIN4%+1 TO (LIN4%+NLIN4%)-1
	 IF NLIN4%>8 THEN X%=((Y%-1)*160)+((COL4%-3)*2)+MOFS%:POKE$ X%,ATTR$
	  X%=((Y%-1)*160)+((COL4%-2)*2)+MOFS%  ' MEMORY LOCATION & OFFSET
	   POKE$ X%,ATTR$       ' WRITE ATTRIBUTE TO VIDEO MEMORY
	    NEXT
	     X%=(((LIN4%-1)+NLIN4%)*160)+((COL4%-3)*2)+MOFS% 'MEMORY LOCATION
	    IF NLIN4%<9 THEN INCR X%,2:ACROSS%=NCOL4%-1 ELSE ACROSS%=NCOL4%
	   FOR Y%=1 TO ACROSS%
	  POKE$ X%,ATTR$
	 INCR X%,2
	NEXT
   CASE 2 'right side
	FOR Y%= LIN4%+1 TO (LIN4%+NLIN4%)-1
	 X%=((Y%-1)*160)+((COL4%+NCOL4%-1)*2)+MOFS%  ' MEMORY LOCATION & OFFSET
	  POKE$ X%,ATTR$       ' WRITE ATTRIBUTE TO VIDEO MEMORY
	   IF NLIN4%>8 THEN X%=((Y%-1)*160)+((COL4%+NCOL4%)*2)+MOFS%:POKE$ X%,ATTR$
	    NEXT
	     X%=(((LIN4%-1)+NLIN4%)*160)+((COL4%+1)*2)+MOFS% 'MEMORY LOCATION
	     IF NLIN4%<9 THEN ACROSS%=NCOL4%-1 ELSE ACROSS%=NCOL4%
	    FOR Y%=1 TO ACROSS%
	   POKE$ X%,ATTR$       ' WRITE ATTRIBUTE TO VIDEO MEMORY
	  INCR X%,2
	 NEXT
   END SELECT
  DEF SEG             ' RESET SEGMENT POINTER TO DEFAULT LOCATION (a must do)
 END SUB

SUB SCROLLSIDE  ' SCROLL TEXT LEFT OR RIGHT
 SHARED LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,SCRSEG%,FILLCHAR%,SCRLDIR%
  LOCAL Y%,X%,Z%,SCRL%,TLIN$

  IF FILLATTR% >256 THEN FILLATTR%=FILLATTR% MOD 256
   DEF SEG = SCRSEG%		 ' SET TO VIDEO MEMORY LOCATION, OFFSET 0
  SELECT CASE SCRLDIR%
   CASE 1  ' LEFT
	Z%=(NCOL5%)*2
	 FOR Y%= 0 TO NLIN5%-1
	  SCRL%=(((LIN5%+Y%)-1)*160)+((COL5%)*2)
	   TLIN$ = PEEK$(SCRL%,Z%)+CHR$(FILLCHAR%)+CHR$(FILLATTR%)
	  X%=(((LIN5%+Y%)-1)*160)+((COL5%-1)*2)
	 POKE$ X%,TLIN$
	NEXT
   CASE 2  ' RIGHT
	Z%=(NCOL5%-1)*2
	 FOR Y%= 0 TO NLIN5%-1
	  SCRL%=(((LIN5%+Y%)-1)*160)+((COL5%-1)*2)
	   TLIN$ = CHR$(FILLCHAR%)+CHR$(FILLATTR%)+PEEK$(SCRL%,Z%)
	  X%=(((LIN5%+Y%)-1)*160)+((COL5%-1)*2)
	 POKE$ X%,TLIN$
	NEXT
   CASE ELSE
	EXIT SELECT
   END SELECT
  DEF SEG
 END SUB

SUB SCROLLIT  ' SCROLL TEXT UP OR DOWN w/OPTIONAL FILL CHARACTER & ATTRIBUTE
 SHARED LIN5%,COL5%,NLIN5%,NCOL5%,FILLATTR%,SCRSEG%,FILLCHAR%,SCRLDIR%
  LOCAL X%,TLIN$

   IF FILLATTR% >256 THEN FILLATTR%=FILLATTR% MOD 256
  SELECT CASE SCRLDIR%
   CASE 1  ' UP
		REG 1, (&h06 * 256) + &h01
   CASE 2  ' DOWN
		REG 1, (&h07 * 256) +  &h01
   CASE ELSE
		EXIT SUB
  END SELECT
 IF FILLCHAR%<>0 THEN
  TLIN$=REPEAT$(NCOL5%,CHR$(FILLCHAR%)+CHR$(FILLATTR%))
   SELECT CASE SCRLDIR%
    CASE 1
	  X%=(((LIN5%+NLIN5%)-2)*160)+((COL5%-1)*2)
    CASE 2
	  X%=((LIN5%-1)*160)+((COL5%-1)*2)
   END SELECT
    ELSE
     TLIN$=""
      END IF
       REG 2, (FILLATTR% * 256) + &h00
     REG 3, ((LIN5% - 1) * 256) + (COL5% - 1)
    REG 4, (((LIN5%+NLIN5%)-2)*256)+(COL5%+NCOL5%)-2
   CALL INTERRUPT &H10
  IF LEN(TLIN$) <> 0 THEN DEF SEG = SCRSEG%: POKE$ X%,TLIN$: DEF SEG
 END SUB

SUB SAVECURSOR
 SHARED CUR$,CURP$
  REG 1,&H0300:REG 2,&H00:CALL INTERRUPT &H10
  CUR$=HEX$(REG(3)):CURP$=HEX$(REG(4))
 END SUB

SUB RESTORECURSOR
 SHARED CUR$,CURP$
  REG 1,&H0+(&H01*256):REG 3,VAL("&H"+CUR$):CALL INTERRUPT &H10
  REG 1,&H0+(&H02*256):REG 2,&H00:REG 4,VAL("&H"+CURP$):CALL INTERRUPT &H10
 END SUB

```
{% endraw %}

## SCANP2.BAS

{% raw %}
```bas
'Program Name    : ScanP2.bas scans screen - builds pixel image for printer
'Author          : Lloyd Smith for Spectra Tech Support
'Date            : 10-31-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : Program scans a 640 x 350 ega screen and prints to Citizen
'                : or Epson compatible printer

DIM  static Parray(1125,1)
width "lpt1:",255
gosub ParrayInit
gosub PrintInit
screen 9,,0,0

color 12,0
for i=1 to 25
locate i,1:print "This is a test of the system  ABCDEFGHIJKLOMNOPRSTUVWXYZ, line #";i;
next i


ycnt=0
for y1=0 to 350 step 8
for x1=0 to 639
if point(x1,y1)>0   then a=128 else a=0
if point(x1,y1+1)>0 then b=64  else b=0
if point(x1,y1+2)>0 then c=32  else c=0
if point(x1,y1+3)>0 then d=16  else d=0
if point(x1,y1+4)>0 then e=8   else e=0
if point(x1,y1+5)>0 then f=4   else f=0
if point(x1,y1+6)>0 then g=2   else g=0
if point(x1,y1+7)>0 then h=1   else h=0
Parray(x1,1)=a+b+c+d+e+f+g+h
k$=inkey$:if k$=chr$(27) then system 'exit scan routine
next x1
gosub PrintScnArray
gosub ParrayInit
next y1
end

ParrayInit:
for xx=0 to 1045
Parray(xx,1)=0
next xx
return

PrintScnArray:
' Print the screen buffer to the printer
dts= (80*13+2)  '960  'num or dots
n1 = dts mod 256
n2 = int(dts/256)

k$=inkey$:if k$=chr$(27) then system
LPRINT CHR$(27)"L"CHR$(n1)CHR$(n2);   '120 dots/in or 960 dots/line
FOR x = 0 TO dts-1
LPRINT CHR$(int(Parray(x,1)));
NEXT x
LPRINT
return

PrintInit:
 LPRINT CHR$(27)"~0"CHR$(16): REM CITIZEN MEMORY LINE FEED INCREMENT
' LPRINT CHR$(27)CHR$(51)CHR$(20): REM EPSON MEMORY LINE FEED INCREMENT
return

```
{% endraw %}

## TSSVCOPY.DOC

{% raw %}
```



                           








                              TSSVCOPY v3.0/1

                         Tiara Software Systems /\/\/\
                         Copyright (C) 1991 Timothy S. Hurita
                         All Rights Reserved



                                                        7/14/91

LICENSE

This version of TSSVCOPY is NOT public domain or free software but is
being distributed as SHAREWARE.

Non registered users of this software are granted a limited license to
use this package for a period of 30-days for the sole purpose of determining
suitabilty.  At the end of this trial period you are required to either pay
the registration fee, or discontinue using the software.  You are
authorized to make copies of TSSVCOPY for the purpose of backing up your
investment.  This software may not be disassembled or altered in any way
and you may not resell or collect any fee for the distribution of
TSSVCOPY without the permission of Tiara Software Systems, this does not
include the normal fees for using bulletin boards.  Free distribution is
encouraged.

WARRANTY

THIS SOFTWARE WILL PERFORM AS DESCRIBED HEREIN ONLY IF PROPERLY APPLIED.

THIS PROGRAM IS SUPPLIED AS IS.  NEITHER TIARA SOFTWARE SYSTEMS, THE
AUTHOR OF THIS PROGRAM, NOR ANY DEALER OR DISTRIBUTOR OF THIS SOFTWARE
MAKES ANY WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING, WITHOUT
LIMITATION, THE WARRANTIES OF MERCHANTIBILITY AND OF FITNESS OF THIS
PROGRAM FOR ANY PURPOSE.  YOU AGREE TO THE TERMS OF THIS LICENSE BY YOUR
DECISION TO USE THE SOFTWARE.

TRADEMARKS

PowerBasic-  is a registered trademark of Spectra Publishing
A86-  is a registered trademark of Eric Isaacson Software
MS-DOS, GWBASIC and QuickBasic-  are registered trademarks of
                                 Microsoft Corporation
PC-DOS and BASICA-  are registered trademarks of IBM Corporation





REGISTRATION

Registration is very inexpensive and does not justify the time involved
in writing the program, manual and demonstration programs.  I have,
however, found a great need for such a routine and have successfully
implemented it in several programs that are soon to be released from Tiara
Software Systems.  This includes a 3-dimensional CAD program that allows
for realtime animation of 3-d entities. I cannot however, just give it
away.  Registration for TSSVCOPY is only $ 5.00 US.  I do not accept
VISA or MasterCard as these institutions charge an astronomical fee for
the "Privilage".  Registered users will use their current and any
updated versions of TSSVCOPY and state in any programs sold and/or distributed
containing this program that it does in fact, contain TSSVCOPY so that I may
quickly verify registration.  Once registered you can use this and all
future versions executed as VCOPY  (is that a deal or what !).
You will receive a registration verification notice.  This method saves you
the cost of shipping and handling only just to receive the same copy embedded
with a serial number.  PowerBasic users will find this program a powerful
addition to the best Basic programming language on the market today.

To register, please fill out REGISTER.ME



WHAT IT IS

You are probably wondering, "So what in the heck does it do ?".
TSSVCOPY is a high speed video page copy routine for PowerBasic (tm)
and other high level Languages designed for easy implementation
into their programs.

Now your probably thinking, "So What is it good for ?".  TSSVCOPY emulates
the PCOPY routine found in GWBASIC, BASICA and QuickBasic.  Users of
PowerBasic do not have this wonderful feature.  Copying the four 28k bit
planes say in EGA mode 9 using standard methods of memory block copying
takes an unacceptable amount of time that is less than suitable for page
flipping animation, saving and restoring screens.  Page flipping animation
involves drawing an image on a hidden memory page, copying this image to
the visible page and drawing a similar image just slightly different on the
hidden page of memory, this image is then copied to the visible image of
video memory again replacing the old image, hence  creating  the illusion
of movement.  This process is repeated as many times as necessary to achieve
the desired results.  There are many methods of creating animation but this
is the simplest and most common method used by novice and intermediate
programmers.





GENERAL NOTES.

This program has been tested with PowerBasic.  This is the language of
choice by the author.  However by following the examples and studying the
demonstration programs provided in this package you should be able to
implement this software in almost any high level language including C.
If you have any questions or problems please contact me through the
phone number or address provided.  If you already have a good working
knowledge of the PCs video cards and can already write such a program
then more power to you.  But if you're looking for a tried and tested
'pull outta the box' ready to 'interface' program than this is for you.

TSSVCOPY supports the following video modes:

VIDEO MODE      RESOLUTION      COLORS          MAXIMUM PAGES  NUMBERED
-----------------------------------------------------------------------
    0           80x25 text        16                 4           0-3
    1           CGA 320x200       4                  2           0-1
    2           CGA 640x200       2                  2           0-1
    7           EGA 320x200       16                 8           0-7
    8           EGA 640x200       16                 4           0-3
    9           EGA 640x350       16                 2           0-1

You need at least 256k of video memory to take advantage of the maximum
number of pages listed above.  The program will automatically detect the
selected screen mode and adjust it perimeters accordingly.  If you select
a page of video memory that is above the set maximum for that mode, it
will just simply exit to the calling routine, the same will happen if you
use a negative number.  If you try to copy video modes 1,2 & 9 with less
than 256k of memory the results can be unpredictable and your system may crash.
Very little error checking was implemented to provide the highest speed
possible. if you follow the general rules involved, there should be no problem.
By the way, TSSVCOPY does NOT use any system memory when copying pages and also
supports CGA although you normally can not draw on hidden pages in this mode.
If CGA proves to be popular with this program then I will write a patch for
that, but I doubt it will be necessary.

If you have studied the list of files included in this package, you may
have noticed TSSVCOPY.OBJ.  This is the program.  It is not an executable
program by itself but an object file, a program that contains no runtime code
neither you nor your computer can understand it.  It must be LINKED into your
programs by your main compiler.  Examples are provided in this documentation
and on the demo files on how to implement TSSVCOPY.

If your thinking that I will never know that this routine has
been incorporated into a program, you are wrong.  I have taken several
steps to insure a means of proof that it has been used and can therefore
prove any violation of the Registration Agreement in a court of law.
TSSVCOPY was written in assembly language using the A86 Macro Assembler
by Eric Isaacson.





INTERFACING TSSVCOPY

To use this program with a high level language such as PowerBasic
you must first declare it as a 'procedure'. You do so as follows.

DECLARE SUB VCOPY(QUAD,QUAD)

Vcopy is the name of the routine.  Nothing else may share this name
including the end compiled program.  The second step is to link it into
your program.

$LINK "TSSVCOPY.OBJ"

TSSVCOPY.OBJ is the filename and the copyrighted name of the program.
If this file is not located in the same directory as your Basic source
file then you must specify a drive and path.

Whenever you want to perform a video page copy operation you simply
call the routine as follows.

CALL VCOPY(source page, destination page)

As an example, CALL VCOPY(0,1) will copy page 0 of video memory to
page 1, provided you are using a supported screen mode.
CALL VCOPY(5,3) will copy page 5 to page 3 and so on.  This will happen
faster than you can blink you eyes and you will not even see it happen.
You can prove it by changing the active visual screen with the SCREEN
statement. SCREEN ,,0,1.  The image that was on page 0 is now on page 1
in video memory.  If this is unclear to you then please refer to the
demo file.  You must have PowerBasic to execute this demonstration
simply load it and press f9.  Thats all there is to interfacing with
PowerBasic.  Please refer to GENERAL NOTES for the supported screen modes
and pages.  Please note that all video pages start with a 0 and not
number 1, in other words, the first page will always be 0.




INTERFACING WITH OTHER LANGUAGES AND TECHNICAL NOTES

VCOPY is a far procedure, that is, it will be located in a different
segment of memory than the calling program.  To call up this program you
must first (assuming it has already been linked) have the calling program
push 4-bytes of return address onto the STACK in the following order;
low byte of return address offset, high byte of return address
offset, low byte of return address segment, high byte of return address
segment.  The calling program must then place a 4-byte address (in the
same order) that will contain the memory location of the source page
to copy.  You must then place a 4-byte address of the memory address containing
the destination page.  Source and destination memory locations are not actual
video memory locations,  but page numbers.  VCOPY will determine which
memory location it should use.  To sum it up, your compiler should first
push a return (far) address on the stack, a source page, a destination
page all in the same logical order and then finally call VCOPY into action.
VCOPY is byte aligned.

Since my two main programming tools are PowerBasic and assembly
language I cannot say this program will work with any other language.
If you find that it does work with another language, please let me know.

You will alway find the latest version on :

Spectra Tech Support BBS  813-625-1721

You may also direct any questions or comments to me on this board as I
call it often.

enjoy,

Tim Hurita
Tiara Software Systems
P.O. Box 68721
Oak Grove, OR  97268
(503) 775-7335
```
{% endraw %}

## VDEMO.BAS

{% raw %}
```bas
'VDEMO.BAS
'Tiara Software Systems /\/\/\
'Copyright (C) 1991 T.S. Hurita
'All Rights Reserved
'Demonstration program for TSSVCOPY using screen 7

declare sub vcopy(quad,quad)		'*** Declare VCOPY as a procedure
$link "tssvcopy.obj"			'*** Link it in to routine
'
'-----------------------Demo Routine for Vcopy7----------------------------
'
cls:screen 7,,3,0			'Use screen 7 for demo using
					' page 3 as active. Page-0 visual.
for z=1 to 1900 step 50:cls

   window screen (-1900+z,-100+z)-(3000-z,1100-z) 'redefine screen coords
   line (100,450)-(1050,500),z+6,bf	'T
   line (250,500)-(300,800),z+6,bf
'
   line (400,600)-(450,800),z+2,bf	'I
'
   line (500,600)-(650,800),z+1,bf      'A
   line (550,650)-(600,750),0,bf
   line (500,600)-(620,601),0,bf
   line (500,799)-(620,800),0,bf
'
   line (700,600)-(750,800),z+9,bf	'R
   line (750,600)-(800,650),z+9,bf
   line (800,600)-(840,700),z+9,bf
'
   line (900,600)-(1050,800),z+7,bf	'A
   line (950,650)-(1000,750),0,bf
   line (900,600)-(1020,601),0,bf
   line (900,799)-(1020,800),0,bf
'
   call vcopy(3,0)			'***Copy page-3 to page-0
next z
'
screen ,,0,0				'set active/visual page-0
color 1:locate 17,40:delay .6:print "Software ";
delay 1:print "Systems /\/\/\":sound 200, 2:sound 250, 2
'
'---Now lets copy logo to all 8 available pages---
'
   call vcopy(0,1)
   call vcopy(0,2)
   call vcopy(0,3)
   call vcopy(0,4)
   call vcopy(0,5)
   call vcopy(0,6)
   call vcopy(0,7)
'
'---view the 8 available pages---
'

for z=0 to 7
   screen ,,z,z:locate 1,1:print "Checking Page ";z:delay .7
next z
   locate 22, 15:color 12:print "End of demo"
while not instat:wend
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2860

     Volume in drive A has no label
     Directory of A:\

    FONTB    ZIP    117769   8-09-91   9:50a
    FONTC    ZIP    145789   8-09-91   9:51a
    HPII     ZIP      1251  10-15-91   4:01p
    MCINFO   ZIP      2446  10-17-91  12:16p
    NEWLOC   EXE      3280   4-13-91  10:05p
    NISTYS   ZIP     41728   8-05-91   5:25p
    PB-EDIT  ZIP      2718   6-15-91   3:12p
    PMWIND   ZIP      7040   7-13-91  10:22a
    PRINTE   ZIP      2816   8-05-91   5:26p
    SCANP2   ZIP      1199  10-31-90   6:23p
    TSSVCOPY ZIP      6980   7-17-91   1:12p
    VAL      ZIP      2176   8-05-91   5:26p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       860  10-23-91   3:05p
           14 file(s)     336090 bytes
                           18432 bytes free
