;
; Time and date functions for MSDOS
;

INCLUDE DOSSEG.ASM

CODE        SEGMENT BYTE PUBLIC  'CODE'
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

.xlist
.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list

TITLE   TIME - time and date functions
NAME    TIME


    i_need  DAY,BYTE
    i_need  MONTH,BYTE
    i_need  YEAR,WORD
    i_need  WEEKDAY,BYTE
    i_need  TIMEBUF,6
    i_need  BCLOCK,DWORD
    i_need  DAYCNT,WORD
    i_need  YRTAB,8
    i_need  MONTAB,12

    FOURYEARS = 3*365 + 366

SUBTTL DATE16, READTIME, DODATE -- GUTS OF TIME AND DATE
PAGE
;
; Date16 returns the current date in AX, current time in DX
;   AX - YYYYYYYMMMMDDDDD  years months days
;   DX - HHHHHMMMMMMSSSSS  hours minutes seconds/2
;
        procedure   DATE16,NEAR
ASSUME  DS:DOSGROUP,ES:NOTHING
        PUSH    CX
        PUSH    ES
        CALL    READTIME
        POP     ES
        SHL     CL,1            ;Minutes to left part of byte
        SHL     CL,1
        SHL     CX,1            ;Push hours and minutes to left end
        SHL     CX,1
        SHL     CX,1
        SHR     DH,1            ;Count every two seconds
        OR      CL,DH           ;Combine seconds with hours and minutes
        MOV     DX,CX
        MOV     AX,WORD PTR [MONTH]     ;Fetch month and year
        MOV     CL,4
        SHL     AL,CL                   ;Push month to left to make room for day
        SHL     AX,1
        POP     CX
        OR      AL,[DAY]
        RET
DATE16  ENDP

        procedure   READTIME,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING
;Gets time in CX:DX. Figures new date if it has changed.
;Uses AX, CX, DX.

        PUSH    SI
        PUSH    BX
        MOV     BX,OFFSET DOSGROUP:TIMEBUF
        MOV     CX,6
        XOR     DX,DX
        MOV     AX,DX
        invoke  SETREAD
        PUSH    DS
        LDS     SI,[BCLOCK]
ASSUME  DS:NOTHING
        invoke  DEVIOCALL2      ;Get correct date and time
        POP     DS
ASSUME  DS:DOSGROUP
        POP     BX
        POP     SI
        MOV     AX,WORD PTR [TIMEBUF]
        MOV     CX,WORD PTR [TIMEBUF+2]
        MOV     DX,WORD PTR [TIMEBUF+4]
        CMP     AX,[DAYCNT]     ;See if day count is the same
        JZ      RET22
        CMP     AX,FOURYEARS*30 ;Number of days in 120 years
        JAE     RET22           ;Ignore if too large
        MOV     [DAYCNT],AX
        PUSH    SI
        PUSH    CX
        PUSH    DX              ;Save time
        XOR     DX,DX
        MOV     CX,FOURYEARS    ;Number of days in 4 years
        DIV     CX              ;Compute number of 4-year units
        SHL     AX,1
        SHL     AX,1
        SHL     AX,1            ;Multiply by 8 (no. of half-years)
        MOV     CX,AX           ;<240 implies AH=0
        MOV     SI,OFFSET DOSGROUP:YRTAB        ;Table of days in each year
        CALL    DSLIDE          ;Find out which of four years we're in
        SHR     CX,1            ;Convert half-years to whole years
        JNC     SK              ;Extra half-year?
        ADD     DX,200
SK:
        CALL    SETYEAR
        MOV     CL,1            ;At least at first month in year
        MOV     SI,OFFSET DOSGROUP:MONTAB       ;Table of days in each month
        CALL    DSLIDE          ;Find out which month we're in
        MOV     [MONTH],CL
        INC     DX              ;Remainder is day of month (start with one)
        MOV     [DAY],DL
        CALL    WKDAY           ;Set day of week
        POP     DX
        POP     CX
        POP     SI
RET22:  RET
READTIME    ENDP

        procedure   DSLIDE,NEAR
        MOV     AH,0
DSLIDE1:
        LODSB           ;Get count of days
        CMP     DX,AX           ;See if it will fit
        JB      RET23           ;If not, done
        SUB     DX,AX
        INC     CX              ;Count one more month/year
        JMP     SHORT DSLIDE1
DSLIDE  ENDP

        procedure   SETYEAR,NEAR
;Set year with value in CX. Adjust length of February for this year.
        MOV     BYTE PTR [YEAR],CL

CHKYR:
        TEST    CL,3            ;Check for leap year
        MOV     AL,28
        JNZ     SAVFEB          ;28 days if no leap year
        INC     AL              ;Add leap day
SAVFEB:
        MOV     [MONTAB+1],AL   ;Store for February
RET23:  RET
SETYEAR ENDP

        procedure   DODATE,NEAR
ASSUME  DS:DOSGROUP,ES:NOTHING
        CALL    CHKYR           ;Set Feb. up for new year
        MOV     AL,DH
        MOV     BX,OFFSET DOSGROUP:MONTAB-1
        XLAT                    ;Look up days in month
        CMP     AL,DL
        MOV     AL,-1           ;Restore error flag, just in case
        JB      RET25           ;Error if too many days
        CALL    SETYEAR
        MOV     WORD PTR [DAY],DX       ;Set both day and month
        SHR     CX,1
        SHR     CX,1
        MOV     AX,FOURYEARS
        MOV     BX,DX
        MUL     CX
        MOV     CL,BYTE PTR [YEAR]
        AND     CL,3
        MOV     SI,OFFSET DOSGROUP:YRTAB
        MOV     DX,AX
        SHL     CX,1            ;Two entries per year, so double count
        CALL    DSUM            ;Add up the days in each year
        MOV     CL,BH           ;Month of year
        MOV     SI,OFFSET DOSGROUP:MONTAB
        DEC     CX              ;Account for months starting with one
        CALL    DSUM            ;Add up days in each month
        MOV     CL,BL           ;Day of month
        DEC     CX              ;Account for days starting with one
        ADD     DX,CX           ;Add in to day total
        XCHG    AX,DX           ;Get day count in AX
        MOV     [DAYCNT],AX
        PUSH    SI
        PUSH    BX
        PUSH    AX
        MOV     BX,OFFSET DOSGROUP:TIMEBUF
        MOV     CX,6
        XOR     DX,DX
        MOV     AX,DX
        PUSH    BX
        invoke  SETREAD
ASSUME  ES:DOSGROUP
        PUSH    DS
        LDS     SI,[BCLOCK]
ASSUME  DS:NOTHING
        invoke  DEVIOCALL2      ;Get correct date and time
        POP     DS
        POP     BX
ASSUME  DS:DOSGROUP
        invoke  SETWRITE
        POP     WORD PTR [TIMEBUF]
        PUSH    DS
        LDS     SI,[BCLOCK]
ASSUME  DS:NOTHING
        invoke  DEVIOCALL2      ;Set the date
        POP     DS
ASSUME  DS:DOSGROUP
        POP     BX
        POP     SI
WKDAY:
        MOV     AX,[DAYCNT]
        XOR     DX,DX
        MOV     CX,7
        INC     AX
        INC     AX              ;First day was Tuesday
        DIV     CX              ;Compute day of week
        MOV     [WEEKDAY],DL
        XOR     AL,AL           ;Flag OK
RET25:  RET
DODATE  ENDP

        procedure   DSUM,NEAR
        MOV     AH,0
        JCXZ    RET25
DSUM1:
        LODSB
        ADD     DX,AX
        LOOP    DSUM1
        RET
DSUM    ENDP

do_ext

CODE         ENDS
    END
