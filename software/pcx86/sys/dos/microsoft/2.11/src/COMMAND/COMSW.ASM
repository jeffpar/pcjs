; Use the following booleans to set assembly flags
FALSE   EQU     0
TRUE    EQU     NOT FALSE

IFNDEF IBM
IFDEF OEMIBM
IBM     EQU     TRUE
ELSE
IBM     EQU     FALSE
ENDIF
ENDIF

IBMVER  EQU     IBM  	; Switch to build IBM version of Command
MSVER   EQU     NOT IBM ; Switch to build MS-DOS version of Command

HIGHMEM EQU     FALSE   ; Run resident part above transient (high memory)
KANJI   EQU     FALSE   ; Support for dual byte Microsoft KANJI standard
IBMJAPAN        EQU     FALSE   ;MUST BE TRUE (along with IBM and KANJI)
