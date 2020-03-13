TITLE   COMMAND Transient Uninitialized DATA

        INCLUDE COMSW.ASM
.xlist
.xcref
        INCLUDE DOSSYM.ASM
        INCLUDE COMEQU.ASM
        INCLUDE COMSEG.ASM
.list
.cref

; Uninitialized transient data
TRANSPACE       SEGMENT PUBLIC BYTE

        PUBLIC  UCOMBUF,COMBUF,USERDIR1,EXECPATH,HEADCALL,RESSEG,TPA,SWITCHAR
        PUBLIC  DIRCHAR,EXEC_ADDR,RCH_ADDR,CHKDRV,RDEOF,IFNOTFLAG,FILTYP
        PUBLIC  CURDRV,CONCAT,PARM1,ARGC,PARM2,COMSW,ARG1S,DESTSWITCH
        PUBLIC  ARG2S,ALLSWITCH,ARGTS,CFLAG,DESTCLOSED,SPECDRV,BYTCNT
        PUBLIC  NXTADD,FRSTSRCH,LINCNT,LINLEN,FILECNT,CHARBUF,DESTFCB2,IDLEN
        PUBLIC  ID,COM,DEST,DESTNAME,DESTFCB,DESTDIR,GOTOLEN,PWDBUF,EXEFCB
        PUBLIC  DIRBUF,SDIRBUF,BITS,PATHCNT,PATHPOS,PATHSW,FULLSCR
        PUBLIC  DESTVARS,DESTISDIR,DESTSIZ,DESTTAIL,DESTINFO,DESTBUF
        PUBLIC  DESTHAND,DESTISDEV,FIRSTDEST,MELCOPY,MELSTART,SRCVARS
        PUBLIC  SRCISDIR,SRCSIZ,SRCTAIL,SRCINFO,SRCBUF,SRCHAND,SRCISDEV
        PUBLIC  SCANBUF,SRCPT,INEXACT,APPEND,NOWRITE,BINARY,WRITTEN,TERMREAD
        PUBLIC  ASCII,PLUS,CPDATE,CPTIME,BATHAND,STARTEL,ELCNT,ELPOS,SKPDEL
        PUBLIC  SOURCE,STACK
        PUBLIC  TRANSPACEEND
        PUBLIC  INTERNATVARS

        IF  IBM
        PUBLIC  ROM_CALL,ROM_IP,ROM_CS
        ENDIF

        IF      KANJI
        PUBLIC  KPARSE
        ENDIF

        ORG     0
ZERO    =       $
UCOMBUF DB      COMBUFLEN+3 DUP(?)      ; Raw console buffer
COMBUF  DB      COMBUFLEN+3 DUP(?)      ; Cooked console buffer
USERDIR1 DB     DIRSTRLEN+3 DUP(?)      ; Storage for users current directory
EXECPATH DB     DIRSTRLEN+15 DUP(?)     ; Path for external command

; Variables passed up from resident
HEADCALL LABEL  DWORD
        DW      ?
RESSEG  DW      ?
TPA     DW      ?
SWITCHAR DB     ?
DIRCHAR DB      ?
EXEC_ADDR DD    ?
RCH_ADDR DD     ?

CHKDRV  DB      ?
RDEOF   LABEL   BYTE                    ; Misc flags
IFNOTFLAG LABEL BYTE
FILTYP  DB      ?
CURDRV  DB      ?
CONCAT  LABEL   BYTE
PARM1   DB      ?
ARGC    LABEL   BYTE
PARM2   DB      ?
COMSW   DW      ?               ; Switches between command and 1st arg
ARG1S   DW      ?               ; Switches between 1st and 2nd arg
DESTSWITCH LABEL WORD
ARG2S   DW      ?               ; Switches after 2nd arg
ALLSWITCH LABEL WORD
ARGTS   DW      ?               ; ALL switches except for COMSW
CFLAG   DB      ?
DESTCLOSED LABEL BYTE
SPECDRV DB      ?
BYTCNT  DW      ?               ; Size of buffer between RES and TRANS
NXTADD  DW      ?
FRSTSRCH DB     ?
LINCNT  DB      ?
LINLEN  DB      ?
FILECNT DW      ?
CHARBUF DB      80 DUP (?)      ;line byte character buffer for xenix write
DESTFCB2 LABEL  BYTE
IDLEN   DB      ?
ID      DB      8 DUP(?)
COM     DB      3 DUP(?)
DEST    DB      37 DUP(?)
DESTNAME DB     11 DUP(?)
DESTFCB LABEL   BYTE
DESTDIR DB      DIRSTRLEN DUP(?)        ; Directory for PATH searches
GOTOLEN LABEL   WORD
PWDBUF  LABEL   BYTE
EXEFCB  LABEL   WORD
DIRBUF  DB      DIRSTRLEN+3 DUP(?)
SDIRBUF DB      12 DUP(?)
BITS    DW      ?
PATHCNT DW      ?
PATHPOS DW      ?
PATHSW  DW      ?
FULLSCR DW      ?

IF  IBM
ROM_CALL    DB  ?                       ; flag for rom function
ROM_IP  DW  ?
ROM_CS  DW  ?
ENDIF

DESTVARS LABEL  BYTE
DESTISDIR DB    ?
DESTSIZ DB      ?
DESTTAIL DW     ?
DESTINFO DB     ?
DESTBUF DB      DIRSTRLEN + 20 DUP (?)

DESTHAND DW     ?
DESTISDEV DB    ?
FIRSTDEST DB    ?
MELCOPY DB      ?
MELSTART DW     ?

SRCVARS  LABEL  BYTE
SRCISDIR DB     ?
SRCSIZ DB       ?
SRCTAIL DW      ?
SRCINFO DB      ?
SRCBUF  DB      DIRSTRLEN + 20 DUP (?)

SRCHAND DW      ?
SRCISDEV DB     ?

SCANBUF DB      DIRSTRLEN + 20 DUP (?)

SRCPT   DW      ?
INEXACT DB      ?
APPEND  DB      ?
NOWRITE DB      ?
BINARY  DB      ?
WRITTEN DB      ?
TERMREAD DB     ?
ASCII   DB      ?
PLUS    DB      ?
CPDATE  DW      ?
CPTIME  DW      ?
BATHAND DW      ?               ; Batch handle
STARTEL DW      ?
ELCNT   DB      ?
ELPOS   DB      ?
SKPDEL  DB      ?
SOURCE  DB      11 DUP(?)

        IF      KANJI
KPARSE  DB      ?
        ENDIF

INTERNATVARS    internat_block <>
                DB      (internat_block_max - ($ - INTERNATVARS)) DUP (?)


        DB      80H DUP(0)      ; Init to 0 to make sure the linker is not fooled
STACK   LABEL   WORD

TRANSPACEEND    LABEL   BYTE

TRANSPACE       ENDS
        END
