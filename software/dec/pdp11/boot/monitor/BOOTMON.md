; BOOT MONITOR
;
; REBASE HIGHER LINK/BOT:140000
; WANT PERFORMANCE COUNTER - CLOCK TICKS TO DO SOMETHING?

KW11LKS         =       177546
KW11VEC         =       100

DL11RCSR        =       177560
DL11RBUF        =       177562
DL11XCSR        =       177564
DL11XBUF        =       177566
DL11VEC         =       64

PSW             =       177776

        .ASECT
        .=140000
START:  RESET
        CLR     @#PSW
        MOV     #START,SP
        CLR     @#DL11XCSR              ; CLEAR THE XCSR
        MOV     #BANNER,R0
        JSR     PC,PRINT
        MOV     #CLKAST,@#KW11VEC
        MOV     #340,@#KW11VEC+2
        BIS     #100,@#KW11LKS          ; SET CLOCK TICKING

        MOV     #PROMPT,R0
        JSR     PC,PRINT
        SUB     #256,SP
        MOV     SP,R0
        JSR     PC,INPUT
        CLR     R0
1$:     WAIT
        INC     R0
        TST     LGHTON
        BEQ     1$
        MOV     #054000,-(SP)           ; SUPER PRIORITY 0 ALT REG
        MOV     LGHTON,-(SP)            ; CALL SUPER LOOP START
        RTI

LGHTON: .WORD 0
CLKTIC: .WORD 0

CLKAST:
        INC     CLKTIC
        RTI

ONECHR:
        TSTB    @#DL11XCSR
        BPL     ONECHR
        MOVB    R0,@#DL11XBUF
        RTS     PC

PRTPTR: .WORD 0

PRINT:
        BITB    #100,@#DL11XCSR
        BNE     PRINT
        MOV     R0,PRTPTR
        MOV     #PRTAST,@#DL11VEC
        MOV     #200,@#DL11VEC+2
        BISB    #100,@#DL11XCSR
        RTS     PC

PRTAST:
        TSTB    @PRTPTR
        BEQ     2$
        MOVB    @PRTPTR,@#DL11XBUF
        INC     PRTPTR
        RTI
2$:     CLRB    @#DL11XCSR
        RTI

BUFFER: .WORD   0                       ; INPUT BUFFER POINTER
LENGTH: .WORD   0                       ; INPUT BUFFER LENGTH

INPUT:
        MOV     R0,BUFFER
        CLR     LENGTH
        MOV     #INPAST,@#60
        MOV     #200,@#62
        BISB    #100,@#DL11RCSR
        RTS     PC

INPAST:
        MOV     R0,-(SP)
        MOVB    @#DL11RBUF,R0
        BIC     #340,@#PSW              ; HACK TO PERMIT XBUF INTERRUPTS WHILE RBUF INTERRUPT HANDLER STILL RUNNING
        CMPB    R0,#15
        BEQ     7$                      ; CARRIAGE RETURN
        CMPB    R0,#127.
        BEQ     2$                      ; <DEL>
        CMPB    R0,#10
        BNE     4$                      ; BACK SPACE
2$:     TST     LENGTH                  ; DATA IN BUFFER?
        BEQ     3$
        DEC     LENGTH                  ; LENGTH
        MOV     #DEL,R0
        JSR     PC,PRINT
3$:     BR      9$
4$:     CMPB    R0,#40
        BLT     9$                      ; BELOW SPACE
        CMPB    R0,#177
        BGE     9$                      ; SKIP STUFF TOO BIG
        JSR     PC,ONECHR               ; ECHO CHAR
        CMPB    R0,#172
        BGT     5$                      ; ABOVE Z
        CMPB    R0,#141
        BLT     5$                      ; BELOW A
        BICB    #40,R0                  ; CONVERT TO UPPER CASE
5$:     CMP     LENGTH,#254
        BGE     9$
        MOVB    R0,-(SP)
        MOV     BUFFER,R0
        ADD     LENGTH,R0
        MOVB    (SP)+,(R0)
        INC     LENGTH
        BR      9$

7$:     MOV     BUFFER,R0
        ADD     LENGTH,R0
        CLRB    (R0)
        MOV     #CMD,@#240              ; CALL CMD AT PRIORITY 2
        MOV     #100,@#242
        MOV     #2000,@#177772
9$:     MOV     (SP)+,R0
        RTI

CMD:
        CLR     @#177772                ; NO MORE PIR CALLS
        MOV     R0,-(SP)
        MOV     R1,-(SP)
        MOV     R2,-(SP)
        MOV     R3,-(SP)
        MOV     R4,-(SP)
        MOV     #EOL,R0
        JSR     PC,PRINT
1$:     BITB    #100,@#DL11XCSR
        BNE     1$
        CLR     R4
        MOV     #CMDLST,R3              ; CMD LIST
3$:     MOVB    (R3)+,R0
        BEQ     13$
        MOV     BUFFER,R2               ; USER CMD
4$:     MOVB    (R2)+,R1
        BEQ     15$                     ; NULL COMMAND?
        CMPB    R1,#40
        BEQ     4$                      ; SKIP SPACE
5$:     CMPB    R0,R1
        BNE     7$
        MOVB    (R3)+,R0
        BEQ     9$
        MOVB    (R2)+,R1
        BEQ     9$
        CMPB    R1,#40
        BNE     5$
        BR      9$
7$:     MOVB    (R3)+,R0
        BNE     7$
        INC     R4
        BR      3$
9$:     ASL     R4
        JSR     PC,@CMDTBL(R4)          ; EXECUTE
        BR      15$

13$:    MOV     #UNKMSG,R0
        JSR     PC,PRINT

15$:    CLR     LENGTH
        MOV     #PROMPT,R0
        JSR     PC,PRINT
        MOV     (SP)+,R4
        MOV     (SP)+,R3
        MOV     (SP)+,R2
        MOV     (SP)+,R1
        MOV     (SP)+,R0
        RTI


CMDTBL: .WORD   BOOT,HALT,TEST,DIAG,LIGHTS,HELP
HLPMSG: .ASCIZ  'COMMANDS ARE BOOT, HALT, TEST, DIAG, LIGHTS AND HELP'<15><12>'BOOT DEVICES ARE RK? RL? OR RP?'<15><12>
EOL:    .BYTE   15,12,0
DEL:    .BYTE   10,40,10,0
CMDLST: .ASCIZ  'BOOT'
        .ASCIZ  'HALT'
        .ASCIZ  'TEST'
        .ASCIZ  'DIAG'
        .ASCIZ  'LIGHTS'
        .ASCIZ  'HELP'
        .BYTE   0
UNKMSG: .ASCIZ  'UNKNOWN COMMAND'<12><15>
BANNER: .ASCIZ  'PDP-11 MONITOR V1.0'<12><15><12><15>
;               'ADAPTED FROM CODE BY PAUL NANKERVIS <PAULNANK@HOTMAIL.COM>'<12><15><12><15>
PROMPT: .ASCIZ  'BOOT> '
BADBOO: .ASCIZ  'UNKNOWN BOOT DEVICE'<12><15>
PERMSG: .ASCIZ  '      CLOCK TICKS'<12><15>
LOOMSG: .ASCIZ  '      ITERATIONS'<12><15>

        .EVEN

HELP:
        MOV     #HLPMSG,R0
        JSR     PC,PRINT
        RTS     PC

HALT:
        HALT
        MOV     #EOL,R0
        JSR     PC,PRINT
        RTS     PC

TEST:
        CLR     CLKTIC

        MOV     #15000,R5
10$:    MOV     R5,@#177570             ; DISPLAY
        MOV     R5,R4
        ASR     R4
15$:    CLR     R0
        MOV     R5,R1
        DIV     R4,R0
        MOV     R0,R2
        MUL     R4,R2
        ADD     R3,R1
        CMP     R1,R5
        BEQ     20$
        HALT
20$:    SOB     R4,15$
        SOB     R5,10$

        MOV     #PERMSG+5,R0
        MOV     CLKTIC,R3

25$:    CLR     R2
        DIV     #10,R2
        ADD     #'0,R3
        MOVB    R3,-(R0)
        MOV     R2,R3
        BNE     25$

        JSR     PC,PRINT
        RTS     PC

LOOCNT: .WORD   0

DIAG:
        CLR     LOOCNT
        CLR     CLKTIC
DIAGLP:
        CLR     R5
        BMI     L1
        BVS     L1
        BHI     L1
        BLT     L1
        BLOS    L2
L1:     HALT

L2:     DEC     R5
        BPL     L3
        BEQ     L3
        BGE     L3
        BLE     L4
L3:     HALT

L4:     ROR     R5
        BVC     L5
        BCC     L5
        BNE     L6
L5:     HALT

L6:     MOVB    #17,@#177776
        BPL     L7
        BVC     L7
        BLT     L7
        BHI     L7
        BMI     L8
L7:     HALT

L8:     MOV     #77777,R3
        ADD     #77777,R3
        CMPB    @#177776,#5
        BNE     L9
        HALT

L9:     MOVB    #1700,R4
        BPL     L10
        CMP     R4,#177700
        BEQ     L11
L10:    HALT

L11:    CLRB    R4
        CMP     R4,#177400
        BEQ     L12
        HALT

L12:    MOV     #125252,R5
        MOV     R5,R0
        MOV     R0,R1
        MOV     R1,R2
        MOV     R2,R3
        MOV     R3,R4
        MOV     R4,R5
        SUB     R5,R1
        BLT     NODIAG
        BEQ     L13
NODIAG: HALT

L13:    ROL     R2
        BCC     L14
        BLT     L15
L14:    HALT

L15:    ADD     R2,R3
        INC     R3
        COM     R3
        ADD     R3,R1
        BCS     L16
        BLE     L17
L16:    HALT

L17:    ROR     R4
        BIS     R4,R3
        ADD     R5,R3
        INC     R3
        BCS     L18
        DEC     R1
        BLT     L19
L18:    HALT

L19:    COM     R0
        BLOS    L20
        HALT

L20:    BIC     R0,R1
        ADD     R1,R1
        BGT     L21
        BLE     L22
L21:    HALT

L22:    SWAB    R1
        CMP     R1,#052125
        BNE     L23
        BIT     R4,R5
        BGT     L23
        COM     R5
        BNE     L24
L23:    HALT

L24:    MOVB    #177401,R0
        BPL     L26
L25:    HALT

L26:    SOB     R0,L25
        CLR     R1
L27:    INC     R1
        SOB     R0,L27
        TST     R0
        BNE     L28
        TST     R1
        BEQ     L29
L28:    HALT

L29:    MOV     #N1,PC
        HALT

N1:     TST     (PC)+
        HALT

N2:     MOV     #N3,-(SP)
        RTS     PC
        HALT

N3:     CLR     -(SP)
        MOV     #N4,-(SP)
        RTI
        HALT

N4:     JMP     @#N5
        HALT

N5:     MOV     #3,R5
        CLR     @#6
        MOV     #N6,@#4
        TST     -(R5)
        HALT
N6:     ADD     #4,SP

        CLR     R0
        MOV     #7777,R1
N7:     MOV     R0,R2
        ADD     #5,R2
        CMP     (R0)+,-5(R2)
        BEQ     N8
        HALT
D1:     .WORD   0

N8:     SOB     R1,N7

        INC     LOOCNT
        BCC     10$
        HALT
10$:    CMP     CLKTIC,#2200
        BHI     20$
        JMP     DIAGLP
20$:    MOV     #LOOMSG+5,R0
        MOV     LOOCNT,R3

25$:    CLR     R2
        DIV     #10,R2
        ADD     #'0,R3
        MOVB    R3,-(R0)
        MOV     R2,R3
        BNE     25$

        JSR     PC,PRINT
        RTS     PC

MMR0=177572
MMR1=177574
MMR2=177576
MMR3=172516

LIGHTS:
        MOV     #77406,R3               ; DEFAULT PDR
        CLR     R2
        CLR     R1
        MOV     #8.,R0
1$:     MOV     R3,172300(R1)           ; KERNEL I PDR
        MOV     R2,172340(R1)           ; KERNEL I PAR
        MOV     R3,172320(R1)           ; KERNEL D PDR
        MOV     R2,172360(R1)           ; KERNEL D PAR
        MOV     R3,172200(R1)           ; SUPER I PDR
        MOV     R2,172240(R1)           ; SUPER I PAR
        MOV     R3,172220(R1)           ; SUPER D PDR
        MOV     R2,172260(R1)           ; SUPER D PAR
        MOV     R3,177600(R1)           ; USER I PDR
        MOV     R2,177640(R1)           ; USER I PAR
        MOV     R3,177620(R1)           ; USER D PDR
        MOV     R3,177660(R1)           ; USER D PAR
        ADD     #200,R2
        ADD     #2,R1
        SOB     R0,1$
        BIS     #176000,@#172376        ; KERNEL D POINTS TO I/O SPACE
        BIS     #176000,@#172276        ; SUPER D POINTS TO I/O SPACE
        BIS     #176000,@#177676        ; USER D POINTS TO I/O SPACE
        MOV     #77,@#MMR3              ; 77 FOR 22 BIT
        MOV     #1,@#MMR0

        MOV     #1700,@#172244          ; BASE SUPER I (PAR 2) #40000 AT #170000
        MOV     #1700,@#172264          ; BASE SUPER D (PAR 2) #40000 AT #170000
        MOV     #010000,@#177776        ; SET PM TO SUPER

        MOV     #40200,R3               ; SUPER CODE ADDRESS
        MOV     #SUPERS,R2              ; ADDRESS SUPER CODE
10$:    MOV     (R2)+,-(SP)
        MTPI    (R3)+
        CMP     R2,#SUPERE
        BLO     10$

        MOV     #40200,LGHTON           ; CHANGE IDLE TASK
        RTS     PC

;
; TO BE COPIED TO SUPER #40200 AT PHYSICAL #170000
; #40000 TO #40200 FOR WAIT & JMP INSTRUCTIONS
;
SUPERS:
        MOV     #37,R0                  ; LOAD PATTERN
        MOV     #174000,R1
        BIT     #1,@#177570
        BEQ     10$
        MOV     #7417,R0
        MOV     R0,R1
        COM     R1
        BIT     #2,@#177570
        BEQ     10$
        MOV     #36163,R0
        MOV     #37000,R1
10$:    MOV     R1,R2
        SUB     #2,R2
        BIC     #1,R2                   ; WAIT ADDRESS
        MOV     R2,R3
        BIC     #177701,R3              ; ADDRESS OFFSET
        MOV     #0000001,40000(R3)      ; WRITE WAIT
        ADD     #2,R3
        MOV     #0000113,40000(R3)      ; WRITE JMP (R3)

        MOV     R2,R4
        ASH     #-6,R4
        BIC     #177600,R4
        MOV     #1700,R5
        SUB     R4,R5                   ; PAR ADDRESS BASE FOR WAIT
        MOV     R2,R4
        ASH     #-12.,R4
        BIC     #177761,R4              ; PAR SELECT OFFSET
        MOV     R5,172240(R4)           ; SUPER I SPACE

        MOV     R1,R3
        ASH     #-12.,R3
        BIC     #177761,R3              ; PAR SELECT OFFSET
        CMP     R3,R4                   ; SAME PAR
        BEQ     30$
        MOV     R1,R4
        ASH     #-6,R4
        BIC     #177600,R4
        MOV     #1700,R5
        SUB     R4,R5                   ; PAR ADDRESS BASE FOR JMP
        MOV     R5,172240(R3)           ; SUPER I SPACE
30$:
        MOV     #3,R4
        ADD     @#177570,R4
        MOV     #2,R3
        ADD     PC,R3
40$:    JMP     (R2)
        SOB     R4,40$
        MOV     R0,R2
        ROR     R2                      ; ROTATE PATTERN
        ROL     R1
        ROR     R0
        BR      10$
SUPERE:

BOOT:
        CLR     R3                      ; UNIT
1$:     MOVB    (R2)+,R1
        BEQ     BOOTRK                  ; DEFAULT DEVICE IS RK0
        CMPB    R1,#40
        BEQ     1$
        CMPB    R1,#'R
        BEQ     5$

        MOV     #BADBOO,R0
        JSR     PC,PRINT
        RTS     PC

5$:     MOVB    (R2)+,R1                ; HOPEFULLY K, L OR P
7$:     MOVB    (R2)+,R0                ; DIGIT
        BEQ     9$
        CMPB    R0,#40
        BEQ     9$
        CMPB    R0,#'7
        BGT     11$
        SUB     #'0,R0
        BLT     11$
        ASL     R3
        ASL     R3
        ASL     R3
        BIS     R0,R3                   ; PUT DIGIT INTO UNIT
        BR      7$
9$:     CLR     R2
        MOV     #137,(R2)+              ; STORE "JMP @#140000" INSTRUCTION AT ADDRESS 0
        MOV     #START,(R2)+
        MOV     #START,(R2)+            ; STORE #140000 IN VECTOR 4, IN CASE OF TRAP TO 4
        CLR     (R2)+
        CMPB    R1,#'K
        BEQ     BOOTRK
        CMPB    R1,#'L
        BEQ     BOOTRL
        CMPB    R1,#'P
        BEQ     BOOTRP

11$:    MOV     #UNKMSG,R0
        JSR     PC,PRINT
        RTS     PC

RLCS=174400
BOOTRL:
        RESET
        SWAB    R3                      ; UNIT NUMBER
        MOV     #RLCS,R1                ; CSR
        MOV     #13,4(R1)               ; CLR ERR
        BIS     #4,R3                   ; UNIT+GSTAT
        MOV     R3,(R1)                 ; ISSUE CMD
        TSTB    (R1)                    ; WAIT
        BPL     .-2
        CLRB    R3
        BIS     #10,R3                  ; UNIT+RDHDR
        MOV     R3,(R1)                 ; ISSUE CMD
        TSTB    (R1)                    ; WAIT
        BPL     .-2
        MOV     6(R1),R2                ; GET HDR
        BIC     #77,R2                  ; CLR SECTOR
        INC     R2                      ; MAGIC BIT
        MOV     R2,4(R1)                ; SEEK TO 0
        CLRB    R3
        BIS     #6,R3                   ; UNIT+SEEK
        MOV     R3,(R1)                 ; ISSUE CMD
        TSTB    (R1)                    ; WAIT
        BPL     .-2
        CLR     2(R1)                   ; CLR BA
        CLR     4(R1)                   ; CLR DA
        MOV     #-512.,6(R1)            ; SET WC
        CLRB    R3
        BIS     #14,R3                  ; UNIT+READ
        MOV     R3,(R1)                 ; ISSUE CMD
        TSTB    (R1)                    ; WAIT
        BPL     .-2
        BIC     #377,(R1)
        CLR     R2
        CLR     R3
        CLR     R4
        CLR     R5
        CLR     PC

RKDA=177412
READGO=5
BOOTRK:
        RESET
        SWAB    R3                      ; UNIT NUMBER
        ASL     R3
        ASL     R3
        ASL     R3
        ASL     R3
        ASL     R3
        MOV     #RKDA,R1                ; CSR
        MOV     R3,(R1)                 ; LOAD DA
        CLR     -(R1)                   ; CLEAR BA
        MOV     #-256.*2,-(R1)          ; LOAD WC
        MOV     #READGO,-(R1)           ; READ & GO
        CLR     R2
        CLR     R3
        CLR     R4
        CLR     R5
        TSTB    (R1)
        BPL     .-2
        CLRB    (R1)
        CLR     PC

RPCSR=0176700
BOOTRP:
        RESET
        MOV     #RPCSR, R1
        MOV     #0000040, 10(R1)        ; RESET
        MOV     R3, 10(R1)              ; SET UNIT
        MOV     #0000021, (R1)          ; PACK ACK
        MOV     #0010000, 32(R1)        ; 16B MODE
        MOV     #-512., 2(R1)           ; SET WC
        CLR     4(R1)                   ; CLR BA
        CLR     6(R1)                   ; CLR DA
        CLR     34(R1)                  ; CLR CYL
        MOV     #0000071, (R1)          ; READ
        TSTB    (R1)                    ; WAIT
        BPL     .-2
        CLRB    (R1)
        MOV     R3,R0
        CLR     PC

        .END    START
