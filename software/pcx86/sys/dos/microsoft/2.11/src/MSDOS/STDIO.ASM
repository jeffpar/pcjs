;
; Standard device IO for MSDOS (first 12 function calls)
;

.xlist
.xcref
INCLUDE STDSW.ASM
.cref
.list

TITLE   STDIO - device IO for MSDOS
NAME    STDIO

include	DOSSEG.ASM
CODE    SEGMENT BYTE PUBLIC  'CODE'

INCLUDE IO.ASM
INCLUDE STRIN.ASM
INCLUDE IO2.ASM

CODE	ENDS
	END

