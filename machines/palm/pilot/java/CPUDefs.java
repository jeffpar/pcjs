/*  CPUDefs.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This includes miscellaneous CPU constants (some related only to this
 *  particular emulation implementation, as opposed to the actual hardware),
 *  as well as exception vector definitions and some of the exception handling.
 *
 *  Supported Effective Address modes (p.46 and p.61) (ie, the 14 modes supported by 68000/68328)
 *
 *      Description                             Opcode bits                     Internal encoding
 *      Data Register Direct:                   mmm == 000                      0x800
 *      Address Register Direct:                mmm == 001                      0x400
 *      Address Register Indirect:              mmm == 010                      0x200
 *      Address Register Indirect PostInc:      mmm == 011                      0x100
 *      Address Register Indirect PreDec:       mmm == 100                      0x080
 *      Address Register Indirect w/Disp:       mmm == 101                      0x040
 *      Address Register Indirect w/Index:      mmm == 110                      0x020
 *      Absolute Short Addressing:              mmm == 111 && nnn == 000        0x010
 *      Absolute Long Addressing:               mmm == 111 && nnn == 001        0x008
 *      Program Counter Indirect w/Disp:        mmm == 111 && nnn == 010        0x004
 *      Program Counter Indirect w/Index:       mmm == 111 && nnn == 011        0x002
 *      Immediate Data:                         mmm == 111 && nnn == 100        0x001
 *
 *  Since not all instructions support all addressing modes and/or use the same bit assignments
 *  for mmm and nnn in their opcodes, I create "EA mode index arrays" that map a set of opcode
 *  bits to the correct EAMode object reference.  Each internal index array has a name based on
 *  the modes that that array DISALLOWS, since it is the disallowed modes that stand out more than
 *  the allowed modes for most instruction groups.
 *
 *  For every EA mode that an index array wants to disallow, it incorporates the corresponding "internal
 *  encoding" values (listed above) into its name.  For example, the index array for instructions that
 *  disallow the last three modes (the PC indirect and immediate data modes) is named "abModes007",
 *  because 0x007 is the sum of the internal encoding values 0x004, 0x002 and 0x001.  Just as the bits
 *  set in an IMR (Interrupt Mask Register) determine which interrupts are masked, so too do these arrays
 *  determine which EA modes are "masked" for a given group of instructions.
 *
 *  A unique set of opcode bit mnemonics is also associated with each index array/instruction format,
 *  which you'll see scattered throughout the CPUOps module.  This is done because letters are easier
 *  to remember/read than numbers, and because it provides a visual way of displaying and confirming
 *  exactly where the bits that determine the EA mode for a given instruction lie within its opcode.
 *  For example, in the case of ADDQ, I describe its instruction format in CPUOps as "0101qqq0ssvvvnnn",
 *  where vvvnnn are the principal EA mode bits -- and as you can see below, that implies the instruction
 *  use EA mode index array "abModes007", which in turn means that ADDQ supports all but the last 3
 *  addressing modes.
 */


class CPUDefs
{
    /*  Exception vector assignments (see p.631)
     */
    public static final int EXCEPTION_NONE                  = 0x00;     // vector 0 contains reset SSP, vector 1 contains reset PC
    public static final int EXCEPTION_ACCESS_FAULT          = 0x02;     // aka "Bus Error"
    public static final int EXCEPTION_ADDRESS_ERROR         = 0x03;
    public static final int EXCEPTION_ILLEGAL_INSTRUCTION   = 0x04;
    public static final int EXCEPTION_INT_DIVIDE_BY_ZERO    = 0x05;
    public static final int EXCEPTION_CHK_INSTRUCTION       = 0x06;
    public static final int EXCEPTION_TRAPV_OVERFLOW        = 0x07;
    public static final int EXCEPTION_PRIVILEGE_VIOLATION   = 0x08;
    public static final int EXCEPTION_TRACE                 = 0x09;
    public static final int EXCEPTION_UNINITIALIZED_IVR     = 0x0f;     // where interrupts go when the IVR hasn't been initialized yet
    
    public static final int EXCEPTION_TRAP_0xF              = 0x2f;     // TRAP 0xf uses vector 0x2f (ie, TRAP n uses vector 0x2n)
    
    public static final int TRAP_0xF_PALMOS_API             = 0xa000;   // PalmOS encodes API numbers in the word following the OP_TRAP_0xF instruction, starting with this value
    
    
    /*  Exception vector numbers < 0 are used for internal "warning exceptions" and can be ignored
     */
    public static final int EXCEPTION_INVALID_CODE          = -1;
    public static final int EXCEPTION_INVALID_DATA          = -2;
    public static final int EXCEPTION_UNIMPLEMENTED_CODE    = -3;
    public static final int EXCEPTION_UNINITIALIZED_DATA    = -4;
    
    
    /*  Exception vector numbers >= 256 are used for internal "error exceptions" (eg, assertion failures) and cannot be ignored
     */
    public static final int EXCEPTION_UNSUPP_INSTRUCTION    = 0x100;    // unsupported instruction
    public static final int EXCEPTION_INVALID_HANDLER       = 0x101;    // exception handler is invalid (eg, corrupt vector contents)
    

    /*  Opcodes that we have special checks for in various places...
     */
    public static final int OP_TRAP                         = 0x4e40;
    public static final int OP_TRAP_MASK                    = 0xfff0;
    public static final int OP_TRAP_0xF                     = 0x4e4f;   // vectors via EXCEPTION_TRAP_0xF
    public static final int OP_TRAP_0xF_MASK                = 0xffff;
    public static final int OP_LINK                         = 0x4e50;
    public static final int OP_LINK_MASK                    = 0xfff8;
    public static final int OP_STOP                         = 0x4e72;
    public static final int OP_STOP_TRACE                   = 0x4e72fffd;
    public static final int OP_STOP_FREEZE                  = 0x4e72fffe;
    public static final int OP_STOP_INJECT                  = 0x4e72ffff;
    public static final int OP_RTE                          = 0x4e73;
    public static final int OP_RTS                          = 0x4e75;
    public static final int OP_JSR                          = 0x4e80;
    public static final int OP_JSR_MASK                     = 0xffc0;
    public static final int OP_JSR_PC_REL                   = 0x4eba;
    public static final int OP_JSR_PC_REL_INDEX             = 0x4ebb;
    public static final int OP_JMP_PC_REL                   = 0x4efa;
    public static final int OP_JMP_PC_REL_INDEX             = 0x4efb;
    public static final int OP_BSR                          = 0x6100;
    public static final int OP_BSR_MASK                     = 0xff00;
    public static final int OP_MYBREAKPOINT                 = 0xf003;   // my "unofficial" breakpoint instruction
    public static final int OP_MYBREAKPOINT_MASK            = 0xffff;   // mask needed only because opcode happens to be a signed value
                                            
    
    /*  Descriptions of known memory locations/limits.  See CPUMem for a description of the entire
     *  memory map.  Suffice to say here that we only provide for (at most) 32Mb unique addresses, because
     *  CPUMem masks the top 7 bits from all effective addresses.  In other words, all unique memory
     *  locations must be unique in the low 25 bits.  Also note that those locations are effectively
     *  replicated 128 times throughout the entire 4Gb (32-bit) address space.  RAM_LIMIT is set to the
     *  largest power-of-two RAM size (0x800000 or 8Mb) that fits within that unique address space (32Mb)
     *  AND still leaves enough room for a ROM (typically starting around 0x10c00000, equivalent to 0xc00000
     *  after masking, or 12Mb).
     *
     *  RAM must also be mirrored at offset 0x10000000.  The exact extent and behavior (eg, write-protection)
     *  of the mirrored region is TBD, until we have a better understanding of the hardware.  The fact that
     *  we're masking the top two hex digits from all effective addresses provides sufficiently compatible
     *  mirroring for now.
     */
    public static final int EVT_BASE                = 0x00000000;
    public static final int EVT_SIZE                = 4*256;
    public static final int RAM_BASE                = 0x00000000;
    public static final int RAM_LIMIT               = 0x00800000;       // 8Mb
    public static final int RAM_MIRROR              = 0x10000000;
    

    protected int fCPU = CPU_NONE;
    
    /*  CPU states
     *
     *  CPU_STARTED is set by CPUThread.Start(), and cleared by the CPU thread itself (inside CPUThread.run())
     *  in response to seeing CPU_KILLED (at which time the CPU thread clears CPU_KILLED as well).  CPUThread.Stop()
     *  only has work to do if CPU_STARTED is set.  CPUThread.Thaw() automatically calls CPUThread.Start() to
     *  insure the CPU has been started.  Start() and Thaw(), as well as Resume(), along with Stop() and Freeze(),
     *  are all synchronized.
     *
     *  CPU_RUNNING is set by the CPU thread immediately before executing any opcodes (before ExecuteOpcodes()).
     *  After it has finished executing some number of opcodes, it calls WaitResume(), which then clears
     *  CPU_RUNNING.  WaitResume() then wakes up anyone who's blocked in Freeze(), Halt() or WaitStep(), as
     *  they wait for their blocking request to be honored.  Freeze(), Halt(), WaitStep() and WaitResume() are
     *  all synchronized.  WaitResume() returns and allows the CPU to continue running once it has been unblocked
     *  or killed.
     *
     *  NOTE: CPU_RUNNING is an internal state, used to detect when the CPU has acknowledged a pending freeze or
     *  suspend or halt.  For example, if the CPU encounters a "STOP", CPU_RUNNING will be cleared, but only temporarily,
     *  so use IsHalted() to accurately determine the CPU's "run state".
     *
     *  CPU_FROZEN, CPU_SUSPENDED, CPU_STOPPED, and CPU_TRACING have similar effects (ie, to block CPU execution) but
     *  are necessarily independent.  The CPU_SUSPENDED state may change as the needs of the device change (eg, it may
     *  be set when a "STOP" instruction is encountered, and it may be cleared when a simulated hardware interrupt
     *  fires), and the debugger is not allowed to modify that state.  On the other hand, CPU_TRACING is specifically
     *  for the debugger alone to modify.  Unlike other debuggers that must use the hardware's trace flag, our
     *  debugger prefers to not interfere with the hardware, making it possible even to debug software trace handlers.
     *  As for CPU_FROZEN, that happens when the CPU needs to be stopped externally, such as when the device is being
     *  powered down, memory is being reinitialized, calls are being injected, or possibly if/when we decide to replace
     *  selected OS functions with native functions that must block the CPU until the native function is done.
     *
     *  NOTE: CPU_SUSPENDED is not currently used with "STOP" instructions, largely because we aren't using an
     *  external event (eg, separate thread) to drive our virtual timer hardware.  Instead, we are depending on
     *  the CPU to execute instructions regularly, and then we're using the instruction count to simulate a
     *  virtual cycle count that in turn drives the virtual timer(s).  That means the CPU thread can only yield/sleep
     *  briefly on "STOP" instructions, otherwise the timer(s) would never advance.
     *
     *  Also, it's easy to be confused about why we need CPU_TRACING *and* CPU_STEPPING *and* a stepping count.
     *  Here's why: the debugger can't use CPU_SUSPENDED to stop the CPU because that would interfere with the
     *  device's simulated suspend state (well, IF we were using CPU_SUSPENDED on "STOP" instructions that is),
     *  so CPU_TRACING serves the same purpose, exclusively for the debugger.  Second, yes, a stepping count is the
     *  only other thing the debugger would need to implement single-stepping, but that would require any code
     *  monitoring changes in the CPU's state to check TWO variables;  by changing one more bit (CPU_STEPPING)
     *  whenever the debugger also changes the stepping count, the state change can be detected more simply.
     *
     *  Finally, why is CPU_WATCHALL also separate?  Because instruction watching is yet another state completely
     *  independent of whether or not the device is suspended (eg, powered down, dozing, or whatever) and also
     *  independent of whether or not the debugger is currently single-stepping, running free until a breakpoint, etc.
     */
    protected static final int CPU_NONE             = 0x00000000;
    protected static final int CPU_STARTED          = 0x00000001;   // CPU thread created
    protected static final int CPU_RUNNING          = 0x00000002;   // CPU thread executing opcodes
    protected static final int CPU_WAITING          = 0x00000004;   // CPU thread waiting (to be unfrozen, unsuspended or untraced)
    protected static final int CPU_KILLED           = 0x00000008;   // CPU thread needs to be shut down
    protected static final int CPU_FROZEN           = 0x00000010;   // block execution until unfrozen (asynchronous)
	protected static final int CPU_SUSPENDED        = 0x00000020;   // block execution until resumed (synchronous)
    protected static final int CPU_TRACING          = 0x00000040;   // used by debugger to block execution (independent of CPU_FROZEN and CPU_SUSPENDED)
    protected static final int CPU_STEPPING         = 0x00000080;   // used by debugger to single-step instruction(s) until step count goes to zero
    protected static final int CPU_STOPPED          = 0x00000100;   // this is how we currently implement STOP (instead of CPU_SUSPENDED)
    protected static final int CPU_WATCHHW          = 0x00000200;   // used by debugger to watch hardware accesses
    protected static final int CPU_WATCHALL         = 0x00000400;   // used by debugger to single-step and display every instruction
    protected static final int CPU_BREAKPOINT       = 0x00000800;   // ExecuteOpcodes detected one of the debugger's breakpoints
    protected static final int CPU_EXCEPTION        = 0x00001000;   // CPUThread.run() caught an exception
    protected static final int CPU_CHECKINTS        = 0x00002000;   // some condition has changed warranting interrupt check
    protected static final int CPU_CHECKLCD         = 0x00004000;   // some condition has changed warranting LCD screen check
    protected static final int CPU_TRACEONSTOP      = 0x00008000;   // auto-trace the CPU on STOP
    protected static final int CPU_FREEZEONSTOP     = 0x00010000;   // auto-freeze the CPU on STOP
    protected static final int CPU_INJECTING        = 0x00020000;   // in the process of injecting a call
    protected static final int CPU_PAGING           = 0x00040000;   // in the process of demand-paging some memory
    protected static final int CPU_MEMINIT          = 0x10000000;   // memory subsystem initialized (CPUMem.InitMem has been called)
    protected static final int CPU_VALID            = 0x20000000;   // CPU loaded from valid server
    
    protected static final int CPU_RESETFLAGS       = (CPU_STOPPED | CPU_WATCHHW | CPU_WATCHALL | CPU_BREAKPOINT | CPU_EXCEPTION | CPU_CHECKINTS | CPU_CHECKLCD | CPU_TRACEONSTOP | CPU_FREEZEONSTOP | CPU_INJECTING);
    protected static final int CPU_BREAKFLAGS       = (CPU_KILLED | CPU_FROZEN | CPU_SUSPENDED | CPU_STOPPED | CPU_TRACING | CPU_BREAKPOINT | CPU_CHECKINTS | CPU_CHECKLCD);

    
    protected static final int aByteInc[]       = {1, 1, 1, 1, 1, 1, 1, 2};
    protected static final int aByteQuick[]     = {8, 1, 2, 3, 4, 5, 6, 7};
    
    
    protected static final int ssBYTE           = 0;
    protected static final int ssWORD           = 1;
    protected static final int ssLONG           = 2;
    protected static final int ssMAX            = 3;

    protected static final int mmmDREG          = 0;
    protected static final int mmmAREG          = 1;
    protected static final int mmmAVAL          = 2;
    protected static final int mmmAVALINC       = 3;
    protected static final int mmmAVALDEC       = 4;
    protected static final int mmmAVALDISP      = 5;
    protected static final int mmmAVALINDEX     = 6;
    protected static final int mmmABS16         = 7;
    protected static final int mmmABS32         = 8;
    protected static final int mmmPCVALDISP     = 9;
    protected static final int mmmPCVALINDEX    = 10;
    protected static final int mmmIMMEDIATE     = 11;
    protected static final int mmmMAX           = 12;

    protected static final int EAMODEINDEX_DREG                 = 0;
    protected static final int EAMODEINDEX_DREG_BYTE            = 0;
    protected static final int EAMODEINDEX_DREG_WORD            = 1;
    protected static final int EAMODEINDEX_DREG_LONG            = 2;
    protected static final int EAMODEINDEX_ILLEGAL              = 3;
    protected static final int EAMODEINDEX_AREG_WORD            = 4;
    protected static final int EAMODEINDEX_AREG_LONG            = 5;
    protected static final int EAMODEINDEX_AREG_INCBYTE         = 9;
    protected static final int EAMODEINDEX_AREG_INCWORD         = 10;
    protected static final int EAMODEINDEX_AREG_INCLONG         = 11;
    protected static final int EAMODEINDEX_AREG_DECBYTE         = 12;
    protected static final int EAMODEINDEX_AREG_DECWORD         = 13;
    protected static final int EAMODEINDEX_AREG_DECLONG         = 14;
    protected static final int EAMODEINDEX_IMMEDIATE            = 33;
    protected static final int EAMODEINDEX_IMMEDIATE_BYTE       = 33;
    protected static final int EAMODEINDEX_IMMEDIATE_WORD       = 34;
    protected static final int EAMODEINDEX_IMMEDIATE_LONG       = 35;
    protected static final int EAMODEINDEX_IMMEDIATE_ILLEGAL    = 36;
    
    
    protected byte abModes000[];        // mmmnnn
    protected byte abModes007[];        // vvvnnn
    protected byte abModes400[];        // xxxnnn
    protected byte abModes401[];        // yyynnn
    protected byte abModes407[];        // wwwnnn
    protected byte abModesC07[];        // uuunnn
    protected byte abModesC81[];        // for MOVEM mem,reglist (ktttnnn)
    protected byte abModesD07[];        // for MOVEM reglist,mem (kuuunnn)
    protected byte abModesD81[];        // pppnnn
    protected byte abModesMove[];       // rrrwww
    protected byte abModesAddSubX[];    // kkknnn
    
    
    /*  InitEAModeIndexes()
     *
     *  The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
     *  into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array
     *  that CPUModes.InitModes() creates.  In fact, it is that function which calls US.
     */
    protected void InitEAModeIndexes()
    {
        abModes000 = new byte[256];
        InitEAModeIndexArray(abModes000, 0x000);
        
        abModes007 = new byte[256];
        InitEAModeIndexArray(abModes007, 0x007);
        
        abModes400 = new byte[256];
        InitEAModeIndexArray(abModes400, 0x400);
        
        abModes401 = new byte[256];
        InitEAModeIndexArray(abModes401, 0x401);
        
        abModes407 = new byte[256];
        InitEAModeIndexArray(abModes407, 0x407);
        
        abModesC07 = new byte[256];
        InitEAModeIndexArray(abModesC07, 0xC07);
        
        abModesC81 = new byte[256];
        InitEAModeIndexArray(abModesC81, 0xC81);
        
        abModesD07 = new byte[256];
        InitEAModeIndexArray(abModesD07, 0xD07);
        
        abModesD81 = new byte[256];
        InitEAModeIndexArray(abModesD81, 0xD81);
        
        abModesMove = new byte[256];
        InitEAModeIndexArrayInverted(abModesMove, 0x400);
        
        abModesAddSubX = new byte[6];
        abModesAddSubX[0] = EAMODEINDEX_DREG_BYTE;
        abModesAddSubX[1] = EAMODEINDEX_AREG_DECBYTE;
        abModesAddSubX[2] = EAMODEINDEX_DREG_WORD;
        abModesAddSubX[3] = EAMODEINDEX_AREG_DECWORD;
        abModesAddSubX[4] = EAMODEINDEX_DREG_LONG;
        abModesAddSubX[5] = EAMODEINDEX_AREG_DECLONG;
    }
    
    
    protected void DestroyEAModeIndexes()
    {
        abModes000 = null;
        abModes007 = null;
        abModes400 = null;
        abModes401 = null;
        abModes407 = null;
        abModesC07 = null;
        abModesC81 = null;
        abModesD07 = null;
        abModesD81 = null;
        abModesMove = null;
        abModesAddSubX = null;
    }
    
    
    protected void InitEAModeIndexArray(byte[] abModes, int maskIllegal)
    {
        int i = 0, ss, mmm, nnn;
        
        for (ss=0; ss<ssMAX && i<abModes.length; ss++) {
            for (mmm=0; mmm<7; mmm++) {
                for (nnn=0; nnn<8; nnn++) {
                    if ((maskIllegal & (0x800 >> mmm)) != 0) {
                        abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = (byte)(mmm*ssMAX+ss);
                        Emulator.Assert_Debug(mmm*ssMAX+ss <= 127, "InitEAModeIndexArray: bad cast");
                    }
                }
            }
            for (nnn=0; nnn<5; nnn++) {
                if ((maskIllegal & (0x10 >> nnn)) != 0) {
                    abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (byte)((mmm+nnn)*ssMAX+ss);
                    Emulator.Assert_Debug((mmm+nnn)*ssMAX+ss <= 127, "InitEAModeIndexArray: bad cast");
                }
            }
            for (; nnn<8; nnn++) {
                abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
            }
        }
    }

    
    protected void InitEAModeIndexArrayInverted(byte[] abModes, int maskIllegal)
    {
        int i = 0, ss, rrr, www;
        
        for (ss=0; ss<ssMAX && i<abModes.length; ss++) {
            for (rrr=0; rrr<8; rrr++) {
                for (www=0; www<7; www++) {
                    if ((maskIllegal & (0x800 >> www)) != 0) {
                        abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = (byte)(www*ssMAX+ss);
                        Emulator.Assert_Debug(www*ssMAX+ss <= 127, "InitEAModeIndexArrayInverted: bad cast");
                    }
                }
                if (rrr >= 5) {
                    abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
                }
                else if ((maskIllegal & (0x10 >> rrr)) != 0) {
                    abModes[i++] = (byte)EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (byte)((www+rrr)*ssMAX+ss);
                    Emulator.Assert_Debug((www+rrr)*ssMAX+ss <= 127, "InitEAModeIndexArrayInverted: bad cast");
                }
            }
        }
    }
    
}
