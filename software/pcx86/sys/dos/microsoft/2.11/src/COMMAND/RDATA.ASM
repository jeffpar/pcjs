TITLE   COMMAND Resident DATA

        INCLUDE COMSW.ASM
.xlist
.xcref
        INCLUDE COMSEG.ASM
.list
.cref

        INCLUDE IFEQU.ASM

CODERES SEGMENT PUBLIC
        EXTRN   THEADFIX:NEAR,EXT_EXEC:NEAR,TREMCHECK:NEAR
CODERES ENDS

TRANCODE        SEGMENT PUBLIC
        EXTRN   COMMAND:NEAR
TRANCODE        ENDS

ZEXEC_CODE      SEGMENT PUBLIC
        IF      IBMVER
        EXTRN   $EXEC:NEAR
        ENDIF
ZEXEC_CODE      ENDS


; Data for resident portion

DATARES SEGMENT PUBLIC BYTE

        PUBLIC  MESBAS,MESADD,MREAD,MWRITE,ERRMES,IOTYP,DRVNUM,DRVLET,NEWLIN
        PUBLIC  DEVEMES,DEVENAM,REQUEST,CDEVAT,BADFAT,COMBAD,NEEDCOM,DRVMSG
        PUBLIC  COMLET,DEFMSG,PROMPT,ENDBATMES,EXECEMES,EXEBAD,TOOBIG,NOCOM
        PUBLIC  NOHANDMES,BMEMMES,HALTMES,FRETMES,RBADNAM,INT_2E_RET,SAVE_PDB
        PUBLIC  PARENT,ERRCD_24,HANDLE01,LOADING,BATCH,BATLOC,COMSPEC,TRANS
        PUBLIC  TRNSEG,COMDRV,BATBYT,MEMSIZ,SUM,EXTCOM,RETCODE,ECHOFLAG
        PUBLIC  IO_SAVE,RESTDIR,PERMCOM,SINGLECOM,VERVAL,FORFLAG,UFORDRV
        PUBLIC  FORSET,FORCOM,FORVAR,FORPTR,FORUFCB,FORFCB,RE_INSTR,RE_OUT_APP
        PUBLIC  RE_OUTSTR,PIPEFLAG,PIPEFILES,PIPEPTR,PIPESTR,PIPE1,PIPE2
        PUBLIC  INPIPEPTR,OUTPIPEPTR,EXEC_BLOCK,ENVIRSEG,COM_PTR,COM_FCB1
        PUBLIC  COM_FCB2,PARMBUF,TRANVARS,MYSEG,LTPA,RSWITCHAR,RDIRCHAR
        PUBLIC  MYSEG1,MYSEG2
        PUBLIC  DATARESEND

        IF      IBMVER
        PUBLIC  SYS_CALL,ZEXEC,EXESEG,USER_SP,USER_SS,EXESUM
        ENDIF

        ORG     0
ZERO    =       $
MESBAS  DW      OFFSET RESGROUP:ERR0
        DW      OFFSET RESGROUP:ERR1
        DW      OFFSET RESGROUP:ERR2
        DW      OFFSET RESGROUP:ERR3
        DW      OFFSET RESGROUP:ERR4
        DW      OFFSET RESGROUP:ERR5
        DW      OFFSET RESGROUP:ERR6
        DW      OFFSET RESGROUP:ERR7
        DW      OFFSET RESGROUP:ERR8
        DW      OFFSET RESGROUP:ERR9
        DW      OFFSET RESGROUP:ERR10
        DW      OFFSET RESGROUP:ERR11
        DW      OFFSET RESGROUP:ERR12

MESADD  DW      OFFSET RESGROUP:NEWLIN          ;"0"
        DW      OFFSET RESGROUP:COM$1           ;"1"
        DW      OFFSET RESGROUP:ERR3            ;"2"
        DW      OFFSET RESGROUP:ALLOC$3         ;"3"
        DW      OFFSET RESGROUP:FILE$4          ;"4"
        DW      OFFSET RESGROUP:RROR$5          ;"5"
        DW      OFFSET RESGROUP:CAN$6           ;"6"
        DW      OFFSET RESGROUP:EMORY$7         ;"7"
        DW      OFFSET RESGROUP:BAT$8           ;"8"
        DW      OFFSET RESGROUP:INS$9           ;"9"

ERR0    DB      "Write protec","t"+80h
ERR1    DB      "Bad uni","t"+80h
ERR2    DB      "Not read","y"+80h
ERR3    DB      "Bad command"," "+80h
ERR4    DB      "Dat","a"+80h
ERR5    DB      "Bad call forma","t"+80h
ERR6    DB      "See","k"+80h
ERR7    DB      "Non-DOS dis","k"+80h
ERR8    DB      "Sector not foun","d"+80h
ERR9    DB      "No pape","r"+80h
ERR10   DB      "Write faul","t"+80h
ERR11   DB      "Read faul","t"+80h
ERR12   DB      "Dis","k"+80h
MREAD   DB      "read"
MWRITE  DB      "writ"
ERRMES  DB      " e5"
IOTYP   DB      "writin","g"+80h
DRVNUM  DB      " drive "
DRVLET  DB      "A"
NEWLIN  DB      13,10+80h
DEVEMES DB      " device "
DEVENAM DB      8 DUP (?)
        DB      13,10,"$"                       ;Must be $ terminated
COM$1   DB      " COMMAN","D"+80h
ALLOC$3 DB      " allocation"," "+80h
FILE$4  DB      " file"," "+80h
RROR$5  DB      "rror"," "+80h
CAN$6   DB      "Cannot"," "+80h
EMORY$7 DB      "emor","y"+80h
BAT$8   DB      " batc","h"+80h
INS$9   DB      "Inser","t"+80h
REQUEST DB      "Abort, Retry, Ignore?"," "+80h
CDEVAT  DB      ?
BADFAT  DB      "0File3table bad",","+80h
COMBAD  DB      "0Invalid1.COM"
NEEDCOM DB      "091.COM disk in"," "+80h
DRVMSG  DB      "drive "
COMLET  DB      "A"," "+80h
DEFMSG  DB      "default driv","e"+80h
PROMPT  DB      "0and strike any key when ready","0"+80h
ENDBATMES DB    "0Terminate8 job (Y/N)?"," "+80h
EXECEMES DB     "EXEC failure","0"+80h
EXEBAD  DB      "E5in EXE4","0"+80h
TOOBIG  DB      "Program too big to fit in m7","0"+80h
NOCOM   DB      "0Bad or missing Command Interprete","r"+80H
NOHANDMES DB    "0No free4handle","s"+80h
BMEMMES DB      "0M73e","5"+80h
HALTMES DB      "06load1, system halte","d"+80h
FRETMES DB      "06start1, exiting","0"+80h
RBADNAM DB      "2or4name","0"+80h

INT_2E_RET DD   ?               ; Magic command executer return address
SAVE_PDB DW     ?
PARENT   DW     ?
ERRCD_24 DW     ?
HANDLE01 DW     ?
LOADING DB      0
BATCH   DW      0               ; Assume no batch mode initially
BATLOC  DD      0               ; Position in batch file
COMSPEC DB      40 DUP(0)
TRANS   DW      OFFSET TRANGROUP:COMMAND
TRNSEG  DW      ?
COMDRV  DB      ?               ; DRIVE SPEC TO LOAD AUTOEXEC AND COMMAND
BATBYT  DB      ?
MEMSIZ  DW      ?
SUM     DW      ?
EXTCOM  DB      1               ; For init, pretend just did an external
RETCODE DW      ?
ECHOFLAG DB     1
IO_SAVE DW      ?
RESTDIR DB      0
PERMCOM DB      0
SINGLECOM DW    0
VERVAL  DW      -1

FORFLAG DB      ?
UFORDRV DB      0
FORSET  DB      40 DUP (?)
FORCOM  DB      90 DUP (?)
FORVAR  DB      ?
FORPTR  DW      ?
FORUFCB DB      -1
FORFCB  DB      0
        DB      34 DUP(?)
        DW      0
        DW      0               ; Initialize RR field to zero

RE_INSTR DB     40 DUP(0)
RE_OUT_APP DB   0
RE_OUTSTR DB    40 DUP(0)

;These two bytes refed as a word
PIPEFLAG  DB    0
PIPEFILES DB    0

PIPEPTR DW      ?
PIPESTR DB      129 DUP(?)
PIPE1   DB      "_:/%PIPE1.$$$",0
PIPE2   DB      "_:/%PIPE2.$$$",0
INPIPEPTR DW    OFFSET RESGROUP:PIPE1
OUTPIPEPTR DW   OFFSET RESGROUP:PIPE2

EXEC_BLOCK LABEL BYTE           ; The data block for EXEC calls
ENVIRSEG DW     ?
COM_PTR LABEL   DWORD
        DW      80H             ; Point at unformatted parameters
        DW      ?
COM_FCB1 LABEL  DWORD
        DW      5CH
        DW      ?
COM_FCB2 LABEL  DWORD
        DW      6CH
        DW      ?

PARMBUF DB      129 DUP (?)

IF IBMVER
SYS_CALL    DD  ?
ZEXEC       DW  OFFSET ZEXEC_CODE:$EXEC
EXESEG      DW  ?
USER_SP     DW  ?
USER_SS     DW  ?
EXESUM      DW  ?
ENDIF

TRANVARS LABEL  BYTE            ; Variables passed to transient
        DW      OFFSET RESGROUP:THEADFIX
MYSEG   DW      0               ; Put our own segment here
LTPA    DW      0               ; WILL STORE TPA SEGMENT HERE
RSWITCHAR DB    "-"
RDIRCHAR DB     "/"
        DW      OFFSET RESGROUP:EXT_EXEC
MYSEG1  DW      ?
        DW      OFFSET RESGROUP:TREMCHECK
MYSEG2  DW      0

DATARESEND      LABEL   BYTE

DATARES ENDS
        END
