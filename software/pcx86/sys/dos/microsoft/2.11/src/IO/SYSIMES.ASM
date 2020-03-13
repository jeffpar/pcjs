SYSINITSEG      SEGMENT PUBLIC BYTE 'SYSTEM_INIT'

        PUBLIC  BADOPM,CRLFM,BADSIZ,BADLD,BADCOM,SYSSIZE

BADOPM  DB      13,10,"Unrecognized command in CONFIG.SYS"
CRLFM   DB      13,10,'$'

BADSIZ  DB      13,10,"Sector size too large in file $"

BADLD   DB      13,10,"Bad or missing $"

BADCOM  DB      "Command Interpreter",0

SYSSIZE LABEL   BYTE

SYSINITSEG      ENDS
        END
