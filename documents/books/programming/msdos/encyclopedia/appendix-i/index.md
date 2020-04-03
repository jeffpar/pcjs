---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix I: 8086/8088/80286/80386 Instruction Sets"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-i/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-i/
---

### Appendix I: 8086/8088/80286/80386 Instruction Sets

{% raw %}

```none
The 8086/8088 Instruction Set

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
    Mnemonic         Description
    ──────────────────────────────────────────────────────────────────
    AAA              ASCII adjust after addition
    AAD              ASCII adjust before division
    AAM              ASCII adjust after multiplication
    AAS              ASCII adjust after subtraction
    ADC              Add with carry
    ADD              Add
    AND              Logical AND
    CALL             Call procedure
    CBW              Convert byte to word
    CLC              Clear carry flag
    CLD              Clear direction flag
    CLI              Clear interrupt flag
    CMC              Complement carry flag
    CMP              Compare
    CMPS             Compare string
    CMPSB            Compare byte string
    CMPSW            Compare word string
    CWD              Convert word to doubleword
    DAA              Decimal adjust for addition
    DAS              Decimal adjust for subtraction
    DEC              Decrement by 1
    DIV              Unsigned divide
    ESC              Escape
    HLT              Halt
    IDIV             Integer divide
    IMUL             Integer multiply
    IN               Input from port
    INC              Increment by 1
    INT              Call to interrupt procedure
    INTO             Interrupt on overflow
    IRET             Interrupt on return
    JA               Jump on above
    JAE              Jump on above or equal
    JB               Jump on below
    JBE              Jump on below or equal
    JC               Jump on carry
    JCXZ             Jump on CX zero
    JE               Jump on equal
    JG               Jump on greater
    JGE              Jump on greater or equal
    JL               Jump on less than
    JLE              Jump on less than or equal
    JMP              Jump unconditionally
    JNA              Jump on not above
    JNAE             Jump on not above or equal
    JNB              Jump on not below
    JNBE             Jump on not below or equal
    JNC              Jump on no carry
    JNE              Jump on not equal
    JNG              Jump on not greater
    JNGE             Jump on not greater or equal
    JNL              Jump on not less than
    JNLE             Jump on not less than or equal
    JNO              Jump on not overflow
    JNP              Jump on not parity
    JNS              Jump on not sign
    JNZ              Jump on not zero
    JO               Jump on overflow
    JP               Jump on parity
    JPE              Jump on parity even
    JPO              Jump on parity odd
    JS               Jump on sign
    JZ               Jump on zero
    LAHF             Load AH with flags
    LDS              Load pointer into DS
    LEA              Load effective address
    LES              Load pointer into ES
    LOCK             Lock the bus
    LODS             Load string
    LODSB            Load byte (string)
    LODSW            Load word (string)
    LOOP             Loop
    LOOPE            Loop while equal
    LOOPNE           Loop while not equal
    LOOPNZ           Loop while not zero
    LOOPZ            Loop while zero
    MOV              Move data
    MOVS             Move data from string to string
    MOVSB            Move byte (string)
    MOVSW            Move word (string)
    MUL              Multiply
    NEG              Negate
    NOP              No operation
    NOT              Logical NOT
    OR               Logical OR
    OUT              Output to port
    POP              Pop top of stack
    POPF             Pop stack into flags
    PUSH             Push onto stack
    PUSHF            Push flags onto stack
    RCL              Rotate through carry left
    RCR              Rotate through carry right
    REP              Repeat
    REPE             Repeat while equal
    REPNE            Repeat while not equal
    REPNZ            Repeat while not zero
    REPZ             Repeat while zero
    RET              Return
    ROL              Rotate left
    ROR              Rotate right
    SAHF             Store AH into flags
    SAL              Shift arithmetic left
    SAR              Shift arithmetic right
    SBB              Subtract with borrow
    SCAS             Scan string
    SCASB            Scan byte (string)
    SCASW            Scan word (string)
    SHL              Shift logical left
    SHR              Shift logical right
    STC              Set carry flag
    STD              Set direction flag
    STI              Set interrupt flag
    STOS             Store string
    STOSB            Store byte (string)
    STOSW            Store word (string)
    SUB              Subtract
    TEST             Logical compare
    WAIT             Enter wait state
    XCHG             Exchange
    XLAT             Translate
    XOR              Exclusive OR


The 80286 Instruction Set

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
    Mnemonic         Description
    ──────────────────────────────────────────────────────────────────
    AAA              ASCII adjust after addition
    AAD              ASCII adjust before division
    AAM              ASCII adjust after multiplication
    AAS              ASCII adjust after subtraction
    ADC              Add with carry
    ADD              Add
    AND              Logical AND
    ARPL             Adjust RPL field of selector
    BOUND            Check array index against bounds
    CALL             Call procedure
    CBW              Convert byte to word
    CLC              Clear carry flag
    CLD              Clear direction flag
    CLI              Clear interrupt flag
    CLTS             Clear task switched flag
    CMC              Complement carry flag
    CMP              Compare
    CMPS             Compare string
    CMPSB            Compare byte string
    CMPSW            Compare word string
    CWD              Convert word to doubleword
    DAA              Decimal adjust for addition
    DAS              Decimal adjust for subtraction
    DEC              Decrement by 1
    DIV              Unsigned divide
    ENTER            Make stack frame (for procedure parameters)
    ESC              Escape
    HLT              Halt
    IDIV             Integer divide
    IMUL             Integer multiply
    IN               Input from port
    INC              Increment by 1
    INS              Input string from port
    INT              Call to interrupt procedure
    INTO             Interrupt on overflow
    IRET             Interrupt on return
    JA               Jump on above
    JAE              Jump on above or equal
    JB               Jump on below
    JBE              Jump on below or equal
    JC               Jump on carry
    JCXZ             Jump on CX zero
    JE               Jump on equal
    JG               Jump on greater
    JGE              Jump on greater or equal
    JL               Jump on less than
    JLE              Jump on less than or equal
    JMP              Jump unconditionally
    JNA              Jump on not above
    JNAE             Jump on not above or equal
    JNB              Jump on not below
    JNBE             Jump on not below or equal
    JNC              Jump on no carry
    JNE              Jump on not equal
    JNG              Jump on not greater
    JNGE             Jump on not greater or equal
    JNL              Jump on not less than
    JNLE             Jump on not less than or equal
    JNO              Jump on not overflow
    JNP              Jump on not parity
    JNS              Jump on not sign
    JNZ              Jump on not zero
    JO               Jump on overflow
    JP               Jump on parity
    JPE              Jump on parity even
    JPO              Jump on parity odd
    JS               Jump on sign
    JZ               Jump on zero
    LAHF             Load AH with flags
    LAR              Load access-rights byte
    LDS              Load pointer into DS
    LEA              Load effective address
    LEAVE            High-level procedure exit
    LES              Load pointer into ES
    LGDT             Load global descriptor table
    LIDT             Load interrupt descriptor table
    LLDT             Load local descriptor table
    LMSW             Load machine status word
    LOCK             Lock the bus
    LODS             Load string
    LODSB            Load byte (string)
    LODSW            Load word (string)
    LOOP             Loop
    LOOPE            Loop while equal
    LOOPNE           Loop while not equal
    LOOPNZ           Loop while not zero
    LOOPZ            Loop while zero
    LSL              Load segment limit
    LTR              Load task register
    MOV              Move data
    MOVS             Move data from string to string
    MOVSB            Move byte (string)
    MOVSW            Move word (string)
    MUL              Multiply
    NEG              Negate
    NOP              No operation
    NOT              Logical NOT
    OR               Logical OR
    OUT              Output to port
    OUTS             Output string to port
    POP              Pop top of stack
    POPA             Pop eight 16-bit registers
    POPF             Pop stack into flags
    PUSH             Push onto stack
    PUSHA            Push eight 16-bit registers
    PUSHF            Push flags onto stack
    RCL              Rotate through carry left
    RCR              Rotate through carry right
    REP              Repeat
    REPE             Repeat while equal
    REPNE            Repeat while not equal
    REPNZ            Repeat while not zero
    REPZ             Repeat while zero
    RET              Return
    ROL              Rotate left
    ROR              Rotate right
    SAHF             Store AH into flags
    SAL              Shift arithmetic left
    SAR              Shift arithmetic right
    SBB              Subtract with borrow
    SCAS             Scan string
    SCASB            Scan byte (string)
    SCASW            Scan word (string)
    SGDT             Store global descriptor table
    SHL              Shift logical left
    SHR              Shift logical right
    SIDT             Store interrupt descriptor table
    SLDT             Store local descriptor table
    SMSW             Store machine status word
    STC              Set carry flag
    STD              Set direction flag
    STI              Set interrupt flag
    STOS             Store string
    STOSB            Store byte (string)
    STOSW            Store word (string)
    STR              Store task register
    SUB              Subtract
    TEST             Logical compare
    VERR             Verify a segment for reading
    VERW             Verify a segment for writing
    WAIT             Enter wait state
    XCHG             Exchange
    XLAT             Translate
    XOR              Exclusive OR


The 80386 Instruction Set

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
    Mnemonic         Description
    ──────────────────────────────────────────────────────────────────
    AAA              ASCII adjust after addition
    AAD              ASCII adjust before division
    AAM              ASCII adjust after multiplication
    AAS              ASCII adjust after subtraction
    ADC              Add with carry
    ADD              Add
    AND              Logical AND
    ARPL             Adjust RPL field of selector
    BOUND            Check array index against bounds
    BSF              Bit scan forward
    BSR              Bit scan reverse
    BT               Bit test
    BTC              Bit test and complement
    BTR              Bit test and reset
    BTS              Bit test and set
    CALL             Call procedure
    CBW              Convert byte to word
    CDQ              Convert doubleword to quad word
    CLC              Clear carry flag
    CLD              Clear direction flag
    CLI              Clear interrupt flag
    CLTS             Clear task switched flag
    CMC              Complement carry flag
    CMP              Compare
    CMPS             Compare string
    CMPSB            Compare byte string
    CMPSD            Compare doubleword string
    CMPSW            Compare word string
    CWD              Convert word to doubleword
    DAA              Decimal adjust for addition
    DAS              Decimal adjust for subtraction
    DEC              Decrement by 1
    DIV              Unsigned divide
    ENTER            Make stack frame (for procedure parameters)
    ESC              Escape
    HLT              Halt
    IDIV             Integer divide
    IMUL             Integer multiply
    IN               Input from port
    INC              Increment by 1
    INS              Input string from port
    INSD             Input doubleword from port
    INT              Call to interrupt procedure
    INTO             Interrupt on overflow
    IRET             Interrupt on return
    IRETD            Interrupt return to virtual 8086 mode
    JA               Jump on above
    JAE              Jump on above or equal
    JB               Jump on below
    JBE              Jump on below or equal
    JC               Jump on carry
    JCXZ             Jump on CX zero
    JE               Jump on equal
    JECXZ            Jump on ECX zero
    JG               Jump on greater
    JGE              Jump on greater or equal
    JL               Jump on less than
    JLE              Jump on less than or equal
    JMP              Jump unconditionally
    JNA              Jump on not above
    JNAE             Jump on not above or equal
    JNB              Jump on not below
    JNBE             Jump on not below or equal
    JNC              Jump on no carry
    JNE              Jump on not equal
    JNG              Jump on not greater
    JNGE             Jump on not greater or equal
    JNL              Jump on not less than
    JNLE             Jump on not less than or equal
    JNO              Jump on not overflow
    JNP              Jump on not parity
    JNS              Jump on not sign
    JNZ              Jump on not zero
    JO               Jump on overflow
    JP               Jump on parity
    JPE              Jump on parity even
    JPO              Jump on parity odd
    JS               Jump on sign
    JZ               Jump on zero
    LAHF             Load AH with flags
    LAR              Load access-rights byte
    LDS              Load pointer into DS
    LEA              Load effective address
    LEAVE            High-level procedure exit
    LES              Load pointer into ES
    LFS              Load pointer into FS
    LGDT             Load global descriptor table
    LGS              Load pointer into GS
    LIDT             Load interrupt descriptor table
    LLDT             Load local descriptor table
    LMSW             Load machine status word
    LOCK             Lock the bus
    LODS             Load string
    LODSB            Load byte (string)
    LODSD            Load doubleword (string)
    LODSW            Load word (string)
    LOOP             Loop
    LOOPE            Loop while equal
    LOOPNE           Loop while not equal
    LOOPNZ           Loop while not zero
    LOOPZ            Loop while zero
    LSL              Load segment limit
    LSS              Load pointer into SS
    LTR              Load task register
    MOV              Move data
    MOVS             Move data from string to string
    MOVSB            Move byte (string)
    MOVSD            Move doubleword (string)
    MOVSW            Move word (string)
    MOVSX            Move with sign extend
    MOVZX            Move with zero extend
    MUL              Multiply
    NEG              Negate
    NOP              No operation
    NOT              Logical NOT
    OR               Logical OR
    OUT              Output to port
    OUTS             Output string to port
    POP              Pop top of stack
    POPA             Pop eight 16-bit registers
    POPAD            Pop eight 32-bit registers
    POPF             Pop stack into flags
    POPFD            Loads doubleword into EFLAGS
    PUSH             Push onto stack
    PUSHA            Push eight 16-bit registers
    PUSHAD           Push eight 32-bit registers
    PUSHED           Push EFLAGS
    PUSHF            Push flags onto stack
    RCL              Rotate through carry left
    RCR              Rotate through carry right
    REP              Repeat
    REPE             Repeat while equal
    REPNE            Repeat while not equal
    REPNZ            Repeat while not zero
    REPZ             Repeat while zero
    RET              Return
    ROL              Rotate left
    ROR              Rotate right
    SAHF             Store AH into flags
    SAL              Shift arithmetic left
    SAR              Shift arithmetic right
    SBB              Subtract with borrow
    SCAS             Scan string
    SCASB            Scan byte (string)
    SCASD            Scan doubleword (string)
    SCASW            Scan word (string)
    SET              Byte set on condition
    SGDT             Store global descriptor table
    SHL              Shift logical left
    SHLD             Double precision shift left
    SHR              Shift logical right
    SHRD             Double precision shift right
    SIDT             Store interrupt descriptor table
    SLDT             Store local descriptor table
    SMSW             Store machine status word
    STC              Set carry flag
    STD              Set direction flag
    STI              Set interrupt flag
    STOS             Store string
    STOSB            Store byte (string)
    STOSD            Store doubleword (string)
    STOSW            Store word (string)
    STR              Store task register
    SUB              Subtract
    TEST             Logical compare
    VERR             Verify a segment for reading
    VERW             Verify a segment for writing
    WAIT             Enter wait state
    XCHG             Exchange
    XLAT             Translate
    XOR              Exclusive OR
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
