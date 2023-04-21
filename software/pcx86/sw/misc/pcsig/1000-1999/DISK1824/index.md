---
layout: page
title: "PC-SIG Diskette Library (Disk #1824)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1824/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1824"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBOFLOW"

    TURBOFLOW is a flowchart drawing program that generates ANSI X3.5-1970
    and ISO 1028 flowchart symbols.  It is a member of the EZCAD family of
    CAD packages.  Similar in user interface and sharing basic device and
    graphics drivers, it produces professional quality drawings for
    electrical, architectural, and mechanical engineers, as well as
    dataflow, program flow, and structural charts for programmers, systems
    analysts, and database managers.
    
    TURBOFLOW is menu-driven.  The spooling capability redirects output to
    a file enabling you to print or plot output at a more convenient time,
    or from a PC that is connected to the proper printer or plotter.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1824.TXT

{% raw %}
```
Disk No: 1824                                                           
Disk Title: TurboFlow                                                   
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: TurboFlow                                                
Author Version: 3.0                                                     
Author Registration: $69.00                                             
Special Requirements: Printer or plotter, and a mouse is recommended.   
                                                                        
TURBOFLOW is a flowchart drawing program that generates ANSI X3.5-1970  
and ISO 1028 flowchart symbols.  It is a member of the EZCAD family of  
CAD packages.  Similar in user interface and sharing basic device and   
graphics drivers, it produces professional quality drawings for         
electrical, architectural, and mechanical engineers, as well as         
dataflow, program flow, and structural charts for programmers, systems  
analysts, and database managers.                                        
                                                                        
TURBOFLOW is menu-driven.  The spooling capability redirects output to  
a file enabling you to print or plot output at a more convenient time,  
or from a PC that is connected to the proper printer or plotter.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLOW0.ASM

{% raw %}
```
	PAGE	60,132
	TITLE	FLOW0 - TURBOFLOW DEFAULT LIBRARY
;********************************************************
;*							*
;*	FLOW0 - Default symbol library for TBFLOW	*
;*							*
;********************************************************
	.XCREF
	CSEG	SEGMENT
	ASSUME	CS:CSEG,DS:CSEG,SS:CSEG,ES:CSEG
;****************
;* Equates	*
;****************
X1	EQU	0
Y1	EQU	1
X2	EQU	2
Y2	EQU	3
X3	EQU	4
Y3	EQU	5
X4	EQU	6
Y4	EQU	7
X5	EQU	8
Y5	EQU	9
X6	EQU	10
Y6	EQU	11
X7	EQU	12
Y7	EQU	13
X8	EQU	14
Y8	EQU	15
CON	EQU	16
;
; drawing commands
;
RETURN	EQU	0
LINE	EQU	1
OVAL	EQU	2
CURVE3	EQU	3
CURVE4	EQU	4
ERASE	EQU	5
DOT	EQU	6
CIRCLE	EQU	7
ARROW	EQU	8
BITMAP	EQU	9
PRINTS	EQU	10
POINT	EQU	11
HCIRC	EQU	12
GLINE	EQU	13
ARC	EQU	14
FILL	EQU	15
SARROW	EQU	16
RBOXON	EQU	21
RBOXOFF	EQU	22
RBNDON	EQU	23
RBNDOFF	EQU	24
PNT1	EQU	25
PNT2	EQU	26
PNT3	EQU	27
PNT4	EQU	28
PNT5	EQU	29
PNT6	EQU	30
PNT7	EQU	31
PNT8	EQU	32
MOV	EQU	33
SWAP	EQU	34
ADD	EQU	35
SUB	EQU	36
MUL	EQU	37
DIV	EQU	38
AND	EQU	39
OR	EQU	40
NOT	EQU	41
NEG	EQU	42
SHFR	EQU	43
SHFL	EQU	44
CONST	EQU	45
MSG	EQU	46
TEXT	EQU	47
ATTR	EQU	48
D2I	EQU	49
I2D	EQU	50
SETPNT	EQU	51
TLINE	EQU	52
DEFIL	EQU	53
MLINE	EQU	54
MTLINE	EQU	55
CCIRC	EQU	56
WAVE	EQU	57
FILLET	EQU	58
SPLINE	EQU	59
DESC	EQU	60
EXIT	EQU	61
ADIM	EQU	62
TANLIN	EQU	63
FCIRCLE EQU	64
HCIRCLE EQU	65
QCIRCLE EQU	66
OCIRCLE EQU	67
MTLINE2 EQU	68
DOTCIR	EQU	69
;
; This is the main symbol table
;
	ORG	0
BEGIN:	DW	MENU			;pointer to menu bit image
SYMBTBL	DW	SYM00
	DW	SYM01
	DW	SYM02
	DW	SYM03
	DW	SYM04
	DW	SYM05
	DW	SYM06
	DW	SYM07
;
; organization chart
;
SYM00	DB	RBOXON,PNT3
	DB	MOV,X4,X3
	DB	MOV,Y4,Y3
	DB	D2I,X4
	DB	CONST,120,0
	DB	ADD,X4,CON
	DB	CONST,80,0
	DB	ADD,Y4,CON
	DB	I2D,X4,SETPNT,X4
	DB	PNT4,RBOXOFF
;
	DB	MOV,Y6,Y4
	DB	SUB,Y6,Y3
	DB	CONST,4,0
	DB	DIV,Y6,CON
;
	DB	MOV,X1,X3		;set PNT1
	DB	MOV,Y1,Y3
	DB	MOV,X2,X4		;set PNT2
	DB	MOV,Y2,Y3
	DB	LINE			;draw top line (PNT1 <-> PNT2)
	DB	MOV,X2,X3
	DB	MOV,Y2,Y4
	DB	LINE			;draw left line
	DB	MOV,X1,X4
	DB	MOV,Y1,Y4
	DB	LINE			;draw bottom line
	DB	MOV,X2,X4
	DB	MOV,Y2,Y3
	DB	LINE			;draw right line
;
	DB	MOV,X1,X3
	DB	MOV,Y1,Y3
	DB	ADD,Y1,Y6
	DB	MOV,X2,X4
	DB	MOV,Y2,Y1
	DB	LINE
	DB	RETURN
;
; floppy diskette .8" X .8"
;
SYM01	DB	PNT3
	DB	MOV,X4,X3
	DB	MOV,Y4,Y3
	DB	D2I,X4
	DB	CONST,80,0
	DB	ADD,X4,CON
	DB	CONST,80,0
	DB	ADD,Y4,CON
	DB	I2D,X4
; left line
	DB	MOV,X1,X3
	DB	MOV,Y1,Y3
	DB	MOV,X2,X3
	DB	MOV,Y2,Y4
	DB	LINE
; bottom line
	DB	MOV,X1,X4
	DB	MOV,Y1,Y4
	DB	LINE
; right line
	DB	MOV,X2,X4
	DB	MOV,Y2,Y3
	DB	LINE
; top line
	DB	MOV,X1,X3
	DB	MOV,Y1,Y3
	DB	LINE
; hub
	DB	D2I,X1
	DB	CONST,30,0
	DB	ADD,X1,CON
	DB	ADD,Y1,CON
	DB	CONST,20,0
	DB	MOV,X2,X1
	DB	MOV,Y2,Y1
	DB	ADD,X2,CON
	DB	ADD,Y2,CON
	DB	I2D,X1
	DB	I2D,X2
	DB	OVAL
; slot
	DB	MOV,X5,X3
	DB	MOV,Y5,Y3
	DB	D2I,X5
	DB	CONST,38,0
	DB	ADD,X5,CON
	DB	CONST,55,0
	DB	ADD,Y5,CON
;
	DB	MOV,X6,X5
	DB	MOV,Y6,Y5
	DB	CONST,4,0
	DB	ADD,X6,CON
	DB	CONST,20,0
	DB	ADD,Y6,CON
;
	DB	I2D,X5
	DB	I2D,X6
	DB	MOV,X1,X5
	DB	MOV,Y1,Y5
	DB	MOV,X2,X1
	DB	MOV,Y2,Y6
	DB	LINE				;left line
	DB	MOV,X1,X6
	DB	MOV,Y1,Y6
	DB	LINE				;bottom line
	DB	MOV,X2,X6
	DB	MOV,Y2,Y5
	DB	LINE				;right line
	DB	MOV,X1,X5
	DB	MOV,Y1,Y5
	DB	LINE				;left line
	DB	RETURN
;
; fifo .8" X 1.2"
;
SYM02	DB	RBOXON,PNT3
	DB	MOV,X4,X3
	DB	MOV,Y4,Y3
	DB	D2I,X4
	DB	CONST,80,0
	DB	ADD,X4,CON
	DB	CONST,120,0
	DB	ADD,Y4,CON
	DB	I2D,X4,SETPNT,X4
	DB	PNT4,RBOXOFF
;
	DB	MOV,X5,X4
	DB	SUB,X5,X3
	DB	SHFR,X5				;X5=width/2
	DB	ADD,X5,X3
	DB	MOV,Y5,Y4
	DB	SUB,Y5,Y3
	DB	CONST,5,0
	DB	DIV,Y5,CON			;Y5=height/5
; box
	DB	MOV,X1,X3,MOV,Y1,Y3,ADD,Y1,Y5
	DB	MOV,X2,X1,MOV,Y2,Y4,SUB,Y2,Y5
	DB	LINE				;left line
	DB	MOV,X1,X4,MOV,Y1,Y2,LINE	;bottom line
	DB	MOV,X2,X1,MOV,Y2,Y3,ADD,Y2,Y5
	DB	LINE				;left line
	DB	MOV,X1,X3,MOV,Y1,Y2,LINE	;top line
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE
; top arrow
	DB	MOV,X2,X3,MOV,Y2,Y3
	DB	MOV,X1,X5,MOV,Y1,Y2
	DB	LINE
	DB	MOV,X2,X1,ADD,Y2,Y5
	DB	LINE,ARROW
; bottom arrow
	DB	MOV,X1,X5,MOV,Y1,Y4
	DB	MOV,X2,X1,MOV,Y2,Y4,SUB,Y2,Y5
	DB	LINE
	DB	MOV,X2,X4,MOV,Y2,Y4
	DB	LINE,ARROW
	DB	RETURN
;
; lifo .8" X 1.2"
;
SYM03	DB	RBOXON,PNT3
	DB	MOV,X4,X3
	DB	MOV,Y4,Y3
	DB	D2I,X4
	DB	CONST,80,0
	DB	ADD,X4,CON
	DB	CONST,120,0
	DB	ADD,Y4,CON
	DB	I2D,X4,SETPNT,X4
	DB	PNT4,RBOXOFF
;
	DB	MOV,X5,X4
	DB	SUB,X5,X3
	DB	CONST,3,0
	DB	DIV,X5,CON			;X5=width/3
	DB	MOV,Y5,Y4
	DB	SUB,Y5,Y3
	DB	CONST,6,0
	DB	DIV,Y5,CON			;Y5=height/6
; box
	DB	MOV,X1,X3,MOV,Y1,Y3,ADD,Y1,Y5
	DB	MOV,X2,X1,MOV,Y2,Y4
	DB	LINE				;left line
	DB	MOV,X1,X4,MOV,Y1,Y2,LINE	;bottom line
	DB	MOV,X2,X1,MOV,Y2,Y3,ADD,Y2,Y5
	DB	LINE				;left line
	DB	MOV,X1,X3,MOV,Y1,Y2	
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE	;top line
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE
	DB	ADD,Y1,Y5,ADD,Y2,Y5,LINE
; left arrow
	DB	MOV,X2,X3,MOV,Y2,Y3
	DB	MOV,X1,X3,ADD,X1,X5,MOV,Y1,Y2
	DB	LINE
	DB	MOV,X2,X1,ADD,Y2,Y5,ADD,Y2,Y5
	DB	LINE,ARROW
; right arrow
	DB	MOV,X1,X4,SUB,X1,X5,MOV,Y1,Y3
	DB	MOV,X2,X1,MOV,Y2,Y3,ADD,Y2,Y5,ADD,Y2,Y5
	DB	LINE
	DB	MOV,X2,X4,MOV,Y2,Y1
	DB	LINE,ARROW
	DB	RETURN
;
; Paper Stack .8" X 1.2"
;
SYM04	DB	RBOXON,PNT4
	DB	MOV,X5,X4
	DB	MOV,Y5,Y4
	DB	D2I,X5
	DB	CONST,80,0
	DB	ADD,X5,CON
	DB	CONST,120,0
	DB	ADD,Y5,CON
	DB	I2D,X5,SETPNT,X5
	DB	PNT5,RBOXOFF
; draw left line
	DB	MOV,X1,X4
	DB	MOV,Y1,Y4
	DB	MOV,X2,X4
	DB	MOV,Y2,Y5
	DB	LINE
; draw lower line
	DB	MOV,X1,X5
	DB	MOV,Y1,Y5
	DB	LINE
; draw right line
	DB	MOV,X2,X5
	DB	MOV,Y2,Y4
	DB	LINE
; draw top line
	DB	MOV,X1,X4
	DB	MOV,Y1,Y4
	DB	LINE
; draw upper shadow line 1
	DB	CONST,2,0
	DB	ADD,X1,CON
	DB	ADD,X2,CON
	DB	SUB,Y1,CON
	DB	MOV,Y2,Y1
	DB	LINE
; draw upper shadow line 2
	DB	CONST,2,0
	DB	ADD,X1,CON
	DB	ADD,X2,CON
	DB	SUB,Y1,CON
	DB	MOV,Y2,Y1
	DB	LINE
; draw right shadow line 2
	DB	MOV,X1,X2
	DB	MOV,Y1,Y5
	DB	SUB,Y1,CON
	DB	SUB,Y1,CON
	DB	LINE
; draw right shadow line 1
	DB	SUB,X1,CON
	DB	MOV,X2,X1
	DB	ADD,Y1,CON
	DB	ADD,Y2,CON
	DB	LINE
	DB	RETURN
;
; Rectangle with rounded corner
;
SYM05	DB	RBOXON,PNT5,PNT6,RBOXOFF
	DB	MOV,X7,X6,SUB,X7,X5,SHFR,X7,SHFR,X7	;X7=(X6-X5)/4
	DB	MOV,Y7,Y6,SUB,Y7,Y5,SHFR,Y7,SHFR,Y7	;Y7=(Y6-Y5)/4
	DB	MOV,X1,X5,MOV,Y1,Y5,MOV,X2,X5,MOV,Y2,Y6
	DB	ADD,Y1,Y7,SUB,Y2,Y7,LINE		;left line
;
	DB	MOV,X2,X5,MOV,Y2,Y5,MOV,X3,X2,MOV,Y3,Y2
	DB	MOV,X4,X5,ADD,X4,X7,MOV,Y4,Y5,CURVE4	;upper left corner
;
	DB	ADD,Y1,Y7,ADD,Y1,Y7
	DB	MOV,Y2,Y6,MOV,Y3,Y6,MOV,Y4,Y6,CURVE4	;lower left corner
;
	DB	MOV,X1,X4,MOV,Y1,Y4
	DB	MOV,X2,X6,SUB,X2,X7,LINE		;lower line
;
	DB	MOV,X1,X2,MOV,Y1,Y2,MOV,X2,X6
	DB	MOV,X3,X6,MOV,Y3,Y6
	DB	MOV,X4,X6,MOV,Y4,Y6,SUB,Y4,Y7,CURVE4	;lower right corner
;
	DB	MOV,X1,X4,MOV,Y1,Y4
	DB	MOV,Y2,Y5,ADD,Y2,Y7,LINE		;right line
;
	DB	MOV,X1,X6,SUB,X1,X7,MOV,Y1,Y5
	DB	MOV,Y2,Y5,MOV,Y3,Y5
	DB	MOV,Y4,Y5,ADD,Y4,Y7,CURVE4		;upper right corner
;
	DB	MOV,X2,X5,ADD,X2,X7,MOV,Y2,Y5,LINE	;upper line
	DB	RETURN
;
; Curve (3 points taken, but actually A 4-point curve)
;
SYM06	DB	RBNDON,PNT3,PNT1,PNT2,RBNDOFF
	DB	ARROW
	DB	SWAP,X3,X1,SWAP,Y3,Y1
	DB	SWAP,X3,X2,SWAP,Y3,Y2
	DB	FILLET				;draw curv
	DB	RETURN
;
; SPLINE
;
SYM07	DB	RBNDON,SPLINE,RBNDOFF
	DB	RETURN
	PAGE
;****************
;* ICON MENU	*
;****************
MENU	DW	32,24		;each cell is 32(h) X 24(v) dots
	DW	2,4		;2 cells per row, 4 rows displayed
;
	.XLIST				;no listing generated
	.RADIX	16
;
	DB	0FF,0FF,0FF,0FF		;ORGANIZATION CHART SYMBOL
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	87,0FF,0FF,0E1H
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	87,0FF,0FF,0E1H
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	87,0FF,0FF,0E1H
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF		;FLOPPY DISK
	DB	80,0,0,1
	DB	80,0,0,1
	DB	9F,0FF,0FF,0F9
	DB	98,0,0,19
	DB	98,0,0,19
	DB	98,0,0,39
	DB	98,0,0,39
	DB	98,0,0,19
	DB	98,7,0E0,19
	DB	98,0F,0F0,19
	DB	98,0F,0F0,19
	DB	98,0F,0F0,19
	DB	98,0F,0F0,19
	DB	98,7,0E6,19
	DB	98,0,0,19
	DB	98,1,0C0,19
	DB	98,1,0C0,19
	DB	98,1,0C0,19
	DB	98,0,0,19
	DB	9F,0FF,0FF,0F9
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF		;FIFO/BUFFER/QUEUE
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,80,0,1
	DB	80,0DF,0FC,1
	DB	9F,0F8,0C,1
	DB	80,0D8,0C,1
	DB	80,98,0C,1
	DB	80,1F,0FC,1
	DB	80,18,0C,1
	DB	80,18,0C,1
	DB	80,18,0C,1
	DB	80,1F,0FC,1
	DB	80,18,0C,1
	DB	80,18,0C,1
	DB	80,18,0C,1
	DB	80,1F,0FC,21
	DB	80,18,0C,31
	DB	80,18,0C,0F9
	DB	80,18,0C,31
	DB	80,1F,0FC,21
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF		;LIFO/BUFFER POOL/STACK
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,21
	DB	9F,0FC,0,31
	DB	80,0C,1F,0F9
	DB	80,0C,18,31
	DB	80,3E,18,21
	DB	80,0DCH,1BH,1
	DB	80,0C8,1BH,1
	DB	80,0C0,3,1
	DB	80,0FF,0FF,1
	DB	80,0C0,3,1
	DB	80,0C0,3,1
	DB	80,0FF,0FF,1
	DB	80,0C0,3,1
	DB	80,0C0,3,1
	DB	80,0FF,0FF,1
	DB	80,0C0,3,1
	DB	80,0C0,3,1
	DB	80,0FF,0FF,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF		;Paper Stack
	DB	80,0,0,1
	DB	80,0,0,1
	DB	83,0FF,0FC,1
	DB	83,0,0C,1
	DB	83,0,0F,81
	DB	83,0,0DH,81
	DB	83,0,0DH,0E1
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0,0DH,61
	DB	83,0FF,0FDH,61
	DB	80,0C0,1,61
	DB	80,0FF,0FF,61
	DB	80,30,0,61
	DB	80,3F,0FF,0E1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF 	;RECTANGLE with rounded corners
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,07F,0FE,1
	DB	81,80,1,81
	DB	83,0,0,0C1
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	86,0,0,61
	DB	83,0,0,0C1
	DB	81,80,1,81
	DB	80,07F,0FE,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF 	;curved line
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0F,0F0,1
	DB	80,70,0E,1
	DB	81,80,1,91
	DB	82,0,0,51
	DB	84,0,0,31
	DB	88,0,0,0F1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	0FF,0FF,0FF,0FF 	;SPLINE
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	83,80,0,1
	DB	8C,60,0,1
	DB	0B0,18,0,1
	DB	0C0,4,0,1
	DB	80,2,0,3
	DB	80,1,0,5
	DB	80,0,80,9
	DB	80,0,60,31
	DB	80,0,18,0C1
	DB	80,0,7,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	80,0,0,1
	DB	0FF,0FF,0FF,0FF
;
	DB	'(C)Copyright 1988 Daytron Electronics Inc.',0DH,0AH
	DB	'All Rights Reserved','$'
	CSEG	ENDS
	END	BEGIN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1824

     Volume in drive A has no label
     Directory of A:\

    INSTALL  COM      7212   8-08-90   8:24p
    EZMODE   COM      1148   3-31-88  10:59a
    EZPRINT  COM       765   2-16-89   4:53p
    EZMOUSE  COM      4743   8-19-90   3:07p
    EZCAD    COM     42843   9-25-90   8:39p
    FLOW0    LBR      1755   1-16-89  11:34a
    FLOW0    ASM     10978   1-16-89  11:28a
    FLOW1    LBR      5570  11-08-89  10:20a
    EZMENU   COM       106  12-26-89  10:14a
    DRAW0    LBR     13266   3-22-90   9:27a
    EGA      FNT     29300   3-22-89   2:03p
    CGA      FNT     29300   3-21-89  10:18p
    EPSON    FNT     29300   4-26-89  11:46a
    EPSON    COM      1617   4-12-90   8:21a
    EPSON24  COM      1427   4-12-90  12:02p
    IBM      COM      1491   4-12-90   8:42a
    OKIDATA  COM      1501   4-20-90   8:19a
    NEC      COM      1462   4-12-90  12:11p
    PCL      COM      1359   3-05-90  12:00p
    PCL300   COM      1214   3-05-90   2:47p
    QUIETW   COM      1433   4-10-90   3:24p
    GENER24  COM      1401   4-12-90  12:15p
    TOSHIBA  COM      1527   4-12-90   1:15p
    TALLY    COM      1381   4-12-90  12:36p
    HPGL     COM      2677   3-15-90   4:26p
    DMPL     COM      2412   3-15-90   4:26p
    SWEETP   COM      1464   3-15-90   4:26p
    MGC      COM      6204   2-22-90   4:43p
    CGA      COM      3217   2-22-90   4:42p
    DCGA     COM      2189   8-08-90   8:29p
    EGA      COM      2453   8-12-90   3:01p
    MEGA     COM      2408   8-12-90   3:01p
    TBFLOW   COM      8463   4-20-90   2:46p
    TBSYMB   COM      4076   3-30-90   2:32p
    FLOW     BAT      1035   9-25-90  10:58p
    DEMO     DRW      1712   3-22-90  11:41a
    FNTTXT   COM       879   3-16-89   9:04a
    TXTFNT   COM      1296   7-03-89   5:13p
    READ     ME       6528   9-25-90   8:27p
    DEMOFLOW CFG     12692   3-02-90   2:12p
    TBFLOW   DOC     59776   9-25-90  10:53p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-21-89  12:55p
    FILE1824 TXT      1925  11-14-90   9:44a
           44 file(s)     314083 bytes
                           23552 bytes free
