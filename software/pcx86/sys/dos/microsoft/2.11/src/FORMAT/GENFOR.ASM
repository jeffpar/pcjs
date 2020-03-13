; Generic FORMAT module for any ms-dos disk erases the directory,
; zeros FAT, and marks bad sectors

        INCLUDE DOSSYM.ASM

CODE    SEGMENT PUBLIC 'CODE'

        ASSUME  CS:CODE,DS:CODE,ES:CODE

        PUBLIC  FATID,STARTSECTOR,SWITCHLIST,FREESPACE,FATSPACE
        PUBLIC  INIT,DISKFORMAT,BADSECTOR,DONE,WRTFAT,HARDFLAG
        EXTRN   SWITCHMAP:WORD,DRIVE:BYTE

WRTFAT:
        MOV     AH,GET_DPB
        MOV     DL,[DRIVE]
        INC     DL              ;A = 1
        INT     21H             ;FORCE A FATREAD
        PUSH    CS
        POP     DS
        MOV     AL,[FATCNT]
        MOV     [CURCNT],AL     ;SET UP FAT COUNT
        MOV     AX,[FATSTART]
        MOV     [COUNT],AX
FATLOOP:
        MOV     AL,BYTE PTR DRIVE
        CBW
        MOV     CX,[FATSIZE]
        MOV     DX,[COUNT]
        MOV     BX,[FATSPACE]
        INT     26H
        POP     AX
        JC      GORET
        MOV     CX,[FATSIZE]
        ADD     [COUNT],CX
        DEC     BYTE PTR [CURCNT]
        JNZ     FATLOOP
        CLC                                     ;Good return
GORET:
        RET

FATSIZE     DW  ?
FATSTART    DW  ?
COUNT       DW  ?
STARTSECTOR DW  ?
SPC         DB  ?            ;SECTORS PER CLUSTER
FATCNT      DB  ?            ;NUMBER OF FATS ON THIS DRIVE
CURCNT      DB  ?
DSKSIZE     DW  ?            ;NUMBER OF SECTORS ON THE DRIVE
START       DW  0            ;CURRENT TEST SECTOR

INIT:
        MOV     AH,GET_DPB
        MOV     DL,[DRIVE]
        INC     DL              ;A = 1
        INT     21H             ;FORCE A FATREAD
        MOV     AL,[BX+4]       ;SECTORS PER CLUSTER - 1
        INC     AL
        MOV     CH,AL           ;CH = SECTORS PER CLUSTER
        CBW
        MOV     BP,[BX+0DH]     ;MAXCLUS + 1
        DEC     BP
        MUL     BP
        MOV     BP,AX
        ADD     BP,[BX+0BH]     ;BP = NUMBER OF SECTORS ON THE DISK
        MOV     AL,[BX+0FH]     ;GET SIZE OF FAT IN SECTORS
        MOV     AH,[BX+8]       ;GET NUMBER OF FATS
        MOV     DX,[BX+6]       ;FIRST SECTOR OF FAT
        MOV     CL,[BX+16H]     ;FATID BYTE
        MOV     SI,[BX+2]       ;SECTOR SIZE
        MOV     BX,[BX+0BH]     ;FIRST SECTOR OF DATA
        PUSH    CS
        POP     DS
        MOV     [FATCNT],AH
        MOV     [DSKSIZE],BP
        MOV     [SPC],CH
        MOV     [FATSTART],DX
        MOV     [ENDLOC],CL
        MOV     [FATID],CL
        MOV     [STARTSECTOR],BX
        XOR     AH,AH
        MOV     [FATSIZE],AX
        MUL     SI              ;AX = SIZE OF FAT
        ADD     [FREESPACE],AX
        ADD     [BUFFER],AX
        MOV     AX,BX
        MUL     SI
        ADD     [FREESPACE],AX  ;AX = SIZE OF TEMP BUFFER
DISKFORMAT:
DONE:
        XOR     AX,AX
        CLC
        RET

BADSECTOR:
        MOV     DX,[START]
        CMP     DX,[DSKSIZE]
        JAE     DONE

        MOV     AL,[DRIVE]
        MOV     CL,[SPC]                 ;READ ONE ALLOCATIONS WORTH
        XOR     CH,CH
        CMP     BYTE PTR [FIRSTFLAG],0
        JZ      SETBX
        MOV     CX,[STARTSECTOR]         ;FIRST TIME THROUGH READ SYSTEM AREA
        MOV     BYTE PTR [FIRSTFLAG],0
        MOV     DX,[START]
SETBX:  MOV     BX,[BUFFER]
        PUSH    CX
        INT     25H                     ;TRY TO READ
        POP     AX                      ;CLEAN UP STACK
        POP     CX
        JC      GOTBAD                  ;KEEP LOOKING FOR BADSECTORS
        ADD     [START],CX
        JMP     BADSECTOR

GOTBAD:
        MOV     AX,CX
        MOV     BX,[START]
        ADD     [START],AX              ;SET UP FOR NEXT CALL
        CLC
        RET

FIRSTFLAG   DB  1               ;1 = FIRST CALL TO BADSECTOR
HARDFLAG    DB  1
FATID       DB  0FEH
SWITCHLIST  DB  3,"OVS"
BUFFER      DW  ENDLOC
FREESPACE   DW  ENDLOC
FATSPACE    DW  ENDLOC
ENDLOC      LABEL   BYTE
            DB      0FEH,0FFH,0FFH

CODE    ENDS
        END
