TITLE   COMMAND Language midifiable Code Transient


.xlist
.xcref
        INCLUDE DOSSYM.ASM
        INCLUDE DEVSYM.ASM
        INCLUDE COMSEG.ASM
        INCLUDE COMSW.ASM
.list
.cref

        INCLUDE COMEQU.ASM

DATARES SEGMENT PUBLIC
        EXTRN   ECHOFLAG:BYTE
DATARES ENDS

TRANDATA        SEGMENT PUBLIC
        EXTRN   SUREMES:BYTE,NOTFND:BYTE,ECHOMES:BYTE,CTRLCMES:BYTE
        EXTRN   ONMES:BYTE,OFFMES:BYTE,VERIMES:BYTE,BAD_ON_OFF:BYTE
        EXTRN   VOLMES:BYTE,GOTVOL:BYTE,NOVOL:BYTE,WeekTab:BYTE
        EXTRN   CurDat_Mid:BYTE
TRANDATA        ENDS

TRANSPACE       SEGMENT PUBLIC
        EXTRN   RESSEG:WORD,CURDRV:BYTE,DIRBUF:BYTE,CHARBUF:BYTE
TRANSPACE       ENDS

TRANCODE        SEGMENT PUBLIC BYTE

        EXTRN   PRINT:NEAR,SCANOFF:NEAR,CRLF2:NEAR,RESTUDIR:NEAR,CERROR:NEAR
        EXTRN   CRPRINT:NEAR,OUT:NEAR,ZPRINT:NEAR
        EXTRN   ERROR_PRINT:NEAR,MesTran:NEAR,P_Date:NEAR

        IF      KANJI
        EXTRN   TESTKANJ:NEAR
        ENDIF
        PUBLIC  NOTEST2,ECHO,CNTRLC,VERIFY,PRINTVOL,GetDate,PRINT_DATE

ASSUME  CS:TRANGROUP,DS:TRANGROUP,ES:TRANGROUP,SS:NOTHING

;***************************************
; ARE YOU SURE prompt when deleting *.*

NOTEST2:
        MOV     CX,11
        MOV     SI,FCB+1
AMBSPEC:
        LODSB
        CMP     AL,"?"
        JNZ     ALLFIL
        LOOP    AMBSPEC
ALLFIL:
        CMP     CX,0
        JNZ     NOPRMPT
ASKAGN:
        MOV     DX,OFFSET TRANGROUP:SUREMES ; "Are you sure (Y/N)?"
        CALL    PRINT
        MOV     SI,80H
        MOV     DX,SI
        MOV     WORD PTR [SI],120       ; zero length
        MOV     AX,(STD_CON_INPUT_FLUSH SHL 8) OR STD_CON_STRING_INPUT
        INT     int_command
        LODSW
        OR      AH,AH
        JZ      ASKAGN
        CALL    SCANOFF
        OR      AL,20H                  ; Convert to lower case
        CMP     AL,'n'
        JZ      RETERA
        CMP     AL,'y'
        PUSHF
        CALL    CRLF2
        POPF
        JNZ     ASKAGN
NOPRMPT:
        MOV     AH,FCB_DELETE
        MOV     DX,FCB
        INT     int_command
        PUSH    AX
        CALL    RESTUDIR
        POP     AX
        MOV     DX,OFFSET TRANGROUP:NOTFND
        INC     AL
        JZ      CERRORJ
RETERA:
        RET


;************************************************
; ECHO, BREAK, and VERIFY commands. Check for "ON" and "OFF"

ECHO:
ASSUME  DS:TRANGROUP,ES:TRANGROUP
        CALL    ON_OFF
        JC      DOEMES
        MOV     DS,[RESSEG]
ASSUME  DS:RESGROUP
        JNZ     ECH_OFF
        MOV     [ECHOFLAG],1
        RET
ECH_OFF:
        MOV     [ECHOFLAG],0
        RET

ASSUME  DS:TRANGROUP
DOEMES:
        MOV     AL,BYTE PTR DS:[80H]
        CMP     AL,2
        JB      PECHO                   ; Gota have at least 2 characters
        MOV     DX,82H                  ; Skip one char after "ECHO"
        CALL    CRPRINT
        JMP     CRLF2

PECHO:
        MOV     DS,[RESSEG]
ASSUME  DS:RESGROUP
        MOV     BL,[ECHOFLAG]
        PUSH    CS
        POP     DS
ASSUME  DS:TRANGROUP
        MOV     DX,OFFSET TRANGROUP:ECHOMES
        JMP     SHORT PYN


CERRORJ:
        JMP     CERROR

; is rest of line blank?
IsBlank:
        MOV     SI,81h                  ; point at text spot
        CALL    SCANOFF                 ; skip separators
        SUB     SI,81h                  ; number of characters advanced
        MOV     CX,SI                   ; put count in byte addressable spot
        CMP     CL,DS:[80h]             ; compare with count
        return                          ; bye!

;The BREAK command
CNTRLC:
        CALL    ON_OFF
        MOV     AX,(SET_CTRL_C_TRAPPING SHL 8) OR 1
        JC      PCNTRLC
        JNZ     CNTRLC_OFF
        MOV     DL,1
        INT     int_command             ; Set ^C
        RET
CNTRLC_OFF:
        XOR     DL,DL
        INT     int_command             ; Turn off ^C check
        RET

PCNTRLC:
        CALL    IsBlank                 ; rest of line blank?
        JNZ     CERRORJ                 ; no, oops!
        XOR     AL,AL
        INT     int_command
        MOV     BL,DL
        MOV     DX,OFFSET TRANGROUP:CTRLCMES
PYN:
        CALL    PRINT
        MOV     DX,OFFSET TRANGROUP:ONMES
        OR      BL,BL
        JNZ     PRINTVAL
        MOV     DX,OFFSET TRANGROUP:OFFMES
PRINTVAL:
        JMP     PRINT

VERIFY:
        CALL    ON_OFF
        MOV     AX,(SET_VERIFY_ON_WRITE SHL 8) OR 1
        JC      PVERIFY
        JNZ     VER_OFF
        INT     int_command             ; Set verify
        RET
VER_OFF:
        DEC     AL
        INT     int_command             ; Turn off verify after write
        RET

PVERIFY:
        CALL    IsBlank                 ; is rest of line blank?
        JNZ     CERRORJ                 ; nope...
        MOV     AH,GET_VERIFY_ON_WRITE
        INT     int_command
        MOV     BL,AL
        MOV     DX,OFFSET TRANGROUP:VERIMES
        JMP     PYN

ON_OFF:
        MOV     SI,FCB+1
        LODSB
        OR      AL,20H
        CMP     AL,'o'
        JNZ     BADONF
        LODSW
        OR      AX,2020H                ; Convert to lower case
        CMP     AL,'n'
        JNZ     OFFCHK
        CMP     AH,' '                  ; ' ' ORed with 20H is still ' '
        JNZ     BADONF
        RET                             ; Carry clear from CMP
OFFCHK:
        CMP     AX,6666H                ; 'ff'
        JNZ     BADONF
        LODSB
        CMP     AL,' '
        JNZ     BADONF
        INC     AL                      ; Reset zero Carry clear from CMP
        RET
BADONF:
        MOV     DX,OFFSET TRANGROUP:BAD_ON_OFF
        STC
        RET

;********************************
; Print volume ID info

ASSUME  DS:TRANGROUP,ES:TRANGROUP

PRINTVOL:
        PUSH    AX                      ; AX return from SEARCH_FIRST for VOL ID
        MOV     DX,OFFSET TRANGROUP:VOLMES
        CALL    PRINT
        MOV     AL,DS:[FCB]
        ADD     AL,'@'
        CMP     AL,'@'
        JNZ     DRVOK
        MOV     AL,[CURDRV]
        ADD     AL,'A'
DRVOK:
        CALL    OUT
        POP     AX
        OR      AL,AL
        JZ      GOODVOL
        MOV     DX,OFFSET TRANGROUP:NOVOL
        CALL    PRINT
        JMP     CRLF2
GOODVOL:
        MOV     DX,OFFSET TRANGROUP:GOTVOL
        CALL    PRINT
        MOV     SI,OFFSET TRANGROUP:DIRBUF + 8
        MOV     CX,11
        MOV     DI,OFFSET TRANGROUP:CHARBUF
        MOV     DX,DI
        REP     MOVSB
        MOV     AX,0A0DH
        STOSW
        XOR     AX,AX
        STOSB
        JMP     ZPRINT

;*************************************************************************
; print date
PRINT_DATE:
        PUSH    ES
        PUSH    DI
        PUSH    CS
        POP     ES
        MOV     DI,OFFSET TRANGROUP:CHARBUF
        MOV     AH,GET_DATE
        INT     int_command             ; Get date in CX:DX
        CBW
        CALL    GetDate                 ; get date and put into DI
        MOV     AL," "
        STOSB
        MOV     SI,OFFSET TRANGROUP:CURDAT_MID
        CALL    MESTRAN
        CALL    P_DATE
        XOR     AX,AX
        STOSB
        MOV     DX,OFFSET TRANGROUP:CHARBUF
        CALL    ZPRINT
        POP     ES
        POP     DI
        return

GetDate:
        MOV     SI,AX
        SHL     SI,1
        ADD     SI,AX           ; SI=AX*3
        ADD     SI,OFFSET TRANGROUP:WEEKTAB
        MOV     BX,CX
        MOV     CX,3
        REP     MOVSB
        return

TRANCODE        ENDS
        END
