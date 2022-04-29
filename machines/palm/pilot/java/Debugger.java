/*  Debugger.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This contains a debugger that allows a caller (eg, through Emulator.SendDebuggerCommand)
 *  to interact with the Device (CPUFlags, CPURegs, DeviceMem, etc).
 *
 *  It is also an OPTIONAL component, and is not intended to be shipped with the
 *  final release.  It is dynamically loaded by the Device class.  It can also be
 *  replaced by any other class that implements the DebuggerInterface interface.
 */


import java.util.*;                     // for Vector class (among others probably)


class Debugger extends CPURegs implements DebuggerInterface
{
    private Device dev;
    private Emulator emul;
    private CPUMem mem;
    private CPUThread cpu;
    
    private EAMode aEAModes[];
    private EAMode eaModeSrc, eaModeDst;
    
    private String sFileName;           // set by Reset(), when a new file is loaded
    private boolean fFault;             // set by Fault(), cleared by Arm() and Reset()
    private boolean fQuiet;             // set by TraceCommand(), cleared by Reset()
    private boolean fGoTrace;           // set by GoCommand() if "t" required instead
    private boolean fTraceGo;           // set by TraceCommand() if "go" required instead
    private boolean fStop;              // set by HaltCommand() to halt on next STOP
    private String sFault;              // last fault string, recorded by Fault()
    private int addrFault;              // last fault address, recorded by Fault()
    private int addrCodeDump = 0;       // last code address dumped
    private int addrTraceInfo = 0;      // last code address dumped by DumpTraceInfo()
    private int addrDataDump = 0;       // last data address dumped
    private int typeDataDump = 1;       // last data type dumped (1=byte, 2=word, 4=long)
    private boolean fError;             // global used as a second return code from Disassemble()
    private String sTraceMacro;
    
    private static final String sError = "Memory error";

    private static final int MAX_BPS = 20;      // BUGBUG: Don't exceed what can fit in BPFLAG_RELATED -JP

    private int aBPAddrs[];             // array of breakpoint addresses
    private int aBPFlags[];             // array of breakpoint flags (see BPFLAG_*)
    private short aBPWords[];           // array of words saved before arming breakpoints
    private boolean fBPAPI = false;     // set by "BP API" (or "W API"), cleared by "BC API", to trap ALL apis
    private boolean fWatchAPI = false;  // set expressly by "W API"
    private int addrWatch;              // set to a non-zero address if CPU_WATCHHW is set for a specific address
    
    private static final int BPFLAG_NONE        = 0x00000000;
    private static final int BPFLAG_RELATED     = 0x000000ff;   // # of related breakpoint, if any
    private static final int BPFLAG_SET         = 0x00000100;   // breakpoint set
    private static final int BPFLAG_ARMED       = 0x00000200;   // breakpoint "live"
    private static final int BPFLAG_DISABLED    = 0x00000400;   // breakpoint disabled
    private static final int BPFLAG_TEMP        = 0x00000800;   // breakpoint temporarily set (eg, by ptrace)
    private static final int BPFLAG_API         = 0x00001000;   // breakpoint on API #
    private static final int BPFLAG_WATCH       = 0x00002000;   // watchpoint on function
    private static final int BPFLAG_UNWATCH     = 0x00004000;   // watchpoint on function return
    private static final int BPFLAG_READ        = 0x00008000;   // watchpoint on function return
    private static final int BPFLAG_WRITE       = 0x00010000;   // watchpoint on function return
    
    private static final int DUMPFLAGS_NONE     = 0;
    private static final int DUMPFLAGS_MOD      = 1;
    private static final int DUMPFLAGS_ALL      = 2;
    
    
    //  Symbol support
    private Vector vecSymbols;
    
    
    //  Code history tracking
    private static final int CODEHIST_MAX       = 0x200000;     // 2048Kb (must be a power of two)
    private static final int CODEHIST_ADDR_MASK = CODEHIST_MAX-1;
    private static final int CODEHIST_COUNT_INC = CODEHIST_MAX;
    private static final int CODEHIST_COUNT_MASK= ~CODEHIST_ADDR_MASK & 0x7fffffff;
    private static final int CODEHIST_UNINIT_DATA = 0x80000000;
    
    private int addrCodeBase, addrCodeLimit;
    private int[] aiCodeHistory;
    

    //  Data history tracking
    private static final int DATAHIST_MAX       = 0x80000;      // 512Kb (must be a power of two)
    private static final int DATAHIST_ADDR_MASK = DATAHIST_MAX-1;
    private static final int DATAHIST_COUNT_INC = DATAHIST_MAX;
    private static final int DATAHIST_COUNT_MASK= ~DATAHIST_ADDR_MASK & 0x7fffffff;
    private static final int DATAHIST_INIT_DATA = 0x80000000;
    
    private int addrDataBase, addrDataLimit, addrHWBase, addrHWLimit;
    private int[] aiDataHistory;
    

    FileStream fileCompare;
    FileStream fileWatchLog;

    
    static final String[] asCommands = {
        "?    [value]",         "help [or print value]",
        "!cmd [...]",           "script commands (see !help)",
        "b?   (#|*|API)",       "manage breakpoints",
        "d?   [addr] [l#]",     "dump memory (also: dm)",
        "e    (addr) (values)", "edit memory",
        "g    [addr]",          "go [at addr]",
        "gt   [addr]",          "go [until addr]",
        "h[s]",                 "halt [on stop]",
        "k[v]",                 "dump call stack [verbose]",
        "l?",                   "load/label commands",
        "m?",                   "manage debugger macros",
        "r?   [reg]  [value]",  "dump/edit registers (also: reg)",
        "p?",                   "step over instructions (also: t)",
        "q",                    "quit",
        "sm   (file)",          "save memory (RAM) to file",
        "s?",                   "single-step instructions",
        "u    [addr] [l#]",     "unassemble instructions (also: il)",
        "v?   [#]",             "set message verbosity [0-3]",
        "w?",                   "watch commands",
    };

    static final String[] asBreakCommands = {
        "a",                    "break on APIs (toggle)",
        "c   (#|*|API)",        "clear breakpoint(s) (also: brc)",
        "d   (#|*)",            "disable breakpoint(s)",
        "e   (#|*)",            "enable breakpoint(s)",
        "l",                    "list breakpoints (also: brd)",
        "p   ([#]addr)",        "set breakpoint on address or API (also: br)",
        "f   (addr)",           "set data fetch breakpoint",
        "w   (addr)",           "set data write breakpoint",
    };

    static final String[] asDumpCommands = {
        "b   [addr] [l#]",      "dump bytes (also: dm)",
        "d   [addr] [l#]",      "dump dwords",          // in other words, 68K longs (32 bits), not Java longs (64 bits)
        "h   [addr]",           "dump memory history",
        "i",                    "dump interrupt status",
        "t   [addr]",           "dump trace history",
        "s",                    "dump status",
        "w   [addr] [l#]",      "dump words",           // aka shorts (16 bits)
        "bm  (addr) (c) (r)",   "dump bitmap with (c) columns, (r) rows",
    };

    static final String[] asLoadCommands = {
        "f   [url]",            "load file",
        "m   (file)",           "load memory (RAM) from file",
        "n   (addr)",           "list nearest symbol",
        "p   [profile]",        "load profile",
        "r",                    "load complete ROM and symbols",
    };
    
    static final String[] asMacroCommands = {
        "t",                    "display/set trace prompt",
        "eg, \"mt ra1;rq\" displays 1 register and next instruction after a trace"
    };

    static final String[] asRegisterCommands = {
        "i",                    "display next instruction only",
    };

    static final String[] asTraceCommands = {
        "[i] [#]",              "trace [# instructions]",
    };

    static final String[] asVerbosityCommands = {
        "0",                    "critical messages",
        "1",                    "error messages",
        "2",                    "warning messages (displays access warnings)",
        "3",                    "verbose messages (halts on invalid accesses)",
    };

    /*  Many of the watch commands are like breakpoint commands.  For example, "wf" is like "bp"
     *  in that it specifies an address that triggers an action, but the action is to watch execution
     *  flow inside the specified function; it is automatically untriggered when the function returns.
     *  In fact, we use some of the same functions that the breakpoint commands use.
     */
    static final String[] asWatchCommands = {
        "a",                    "watch APIs (toggle)",
        "c   [file]",           "compare to log file (toggle)",
        "f   (addr)",           "watch function",
        "h   [addr]",           "watch hardware accesses (toggle)",
        "i",                    "watch instructions (toggle)",
        "l   [file]",           "write output to log file (toggle)",
    };


    /*  Init(dev)
     *
     *  Called by the CPUThread constructor explicitly, because most of the debugger's
     *  initialization must be deferred until it can have access to the CPU and memory subsystems.
     *  Also, because we're lazily loaded, we can't use a standard constructor anyway.
     */
    public void Init(Device dev)
    {
        this.dev = dev;
        this.emul = dev.emul;
        
        // NOTE: Because CPUThread subclasses CPUMem, I could just use "cpu" everywhere
        // instead of "mem", but I don't want to hard-code that aspect of the object hierarchy
        // into the debugger, and there's no real cost to having separate variables anyway. -JP
        this.cpu = dev.cpu;
	    mem = (CPUMem)cpu;
        
        // Debugger default is to view warning and error messages
        if (Emulator.fMsgLevel == Emulator.MSGLEVEL_NONE)
            Emulator.fMsgLevel = Emulator.MSGLEVEL_ERROR;
        
        aEAModes = new EAMode[ssMAX*mmmMAX+1];          // +1 for EAMODEINDEX_IMMEDIATE_ILLEGAL
        
        int i = 0;
        aEAModes[i++] = new EAModeDRegByte();           // must match EAMODEINDEX_DREG_BYTE
        aEAModes[i++] = new EAModeDRegWord();           // must match EAMODEINDEX_DREG_WORD
        aEAModes[i++] = new EAModeDRegLong();           // must match EAMODEINDEX_DREG_LONG

        aEAModes[i++] = new EAModeIllegal();            // must match EAMODEINDEX_ILLEGAL
        aEAModes[i++] = new EAModeARegWord();           // must match EAMODEINDEX_AREG_WORD
        aEAModes[i++] = new EAModeARegLong();           // must match EAMODEINDEX_AREG_LONG
        
        aEAModes[i++] = new EAModeAValByte();
        aEAModes[i++] = new EAModeAValWord();
        aEAModes[i++] = new EAModeAValLong();
        
        aEAModes[i++] = new EAModeAValIncByte();        // must match EAMODEINDEX_AREG_INCBYTE
        aEAModes[i++] = new EAModeAValIncWord();        // must match EAMODEINDEX_AREG_INCWORD
        aEAModes[i++] = new EAModeAValIncLong();        // must match EAMODEINDEX_AREG_INCLONG
        
        aEAModes[i++] = new EAModeAValDecByte();        // must match EAMODEINDEX_AREG_DECBYTE
        aEAModes[i++] = new EAModeAValDecWord();        // must match EAMODEINDEX_AREG_DECWORD
        aEAModes[i++] = new EAModeAValDecLong();        // must match EAMODEINDEX_AREG_DECLONG
        
        aEAModes[i++] = new EAModeAValDispByte();
        aEAModes[i++] = new EAModeAValDispWord();
        aEAModes[i++] = new EAModeAValDispLong();
        
        aEAModes[i++] = new EAModeAValIndexByte();
        aEAModes[i++] = new EAModeAValIndexWord();
        aEAModes[i++] = new EAModeAValIndexLong();
        
        aEAModes[i++] = new EAModeAbs16Byte();
        aEAModes[i++] = new EAModeAbs16Word();
        aEAModes[i++] = new EAModeAbs16Long();
        
        aEAModes[i++] = new EAModeAbs32Byte();
        aEAModes[i++] = new EAModeAbs32Word();
        aEAModes[i++] = new EAModeAbs32Long();
        
        aEAModes[i++] = new EAModePCValDispByte();
        aEAModes[i++] = new EAModePCValDispWord();
        aEAModes[i++] = new EAModePCValDispLong();
        
        aEAModes[i++] = new EAModePCValIndexByte();
        aEAModes[i++] = new EAModePCValIndexWord();
        aEAModes[i++] = new EAModePCValIndexLong();
        
        aEAModes[i++] = new EAModeImmediateByte();      // must match EAMODEINDEX_IMMEDIATE_BYTE
        aEAModes[i++] = new EAModeImmediateWord();      // must match EAMODEINDEX_IMMEDIATE_WORD
        aEAModes[i++] = new EAModeImmediateLong();      // must match EAMODEINDEX_IMMEDIATE_LONG
        aEAModes[i++] = new EAModeIllegal();            // must match EAMODEINDEX_IMMEDIATE_ILLEGAL
	
	    InitEAModeIndexes();
        
        aBPAddrs = new int[MAX_BPS];
        aBPFlags = new int[MAX_BPS];
        aBPWords = new short[MAX_BPS];
        
        vecSymbols = new Vector(4);                     // specify an initial and arbitrary capacity of 4
    }


    /*  Destroy()
     *
     *  Called by Device.Destroy(), after CPUThread.Destroy() has been called.
     *
     *  Our RemoveMemoryBlocks() method will have already been called, because CPUThread.Destroy()
     *  calls CPUMem.DestroyMem(), which is the appropriate time to call RemoveMemoryBlocks().
     */
    public void Destroy()
    {
        aEAModes = null;
	    DestroyEAModeIndexes();
        WatchCompareCommand(null);
        WatchLogCommand(null);
    }


    /*  AddMemoryBlock(sModule, sSymbolFile, iType, addr, length)
     *
     *  We support tracking info for a single block of code CODEHIST_MAX or less in size.
     *  This service identifies the block of code to track.  For every word (instruction)
     *  in the block, we maintain a 32-bit integer that tells us 1) approximately how many
     *  times that word has been accessed, and 2) where it was accessed from.
     *
     *  We also support tracking info for a block of data DATAHIST_MAX or less in size.
     *  This service identifies the block of data to track.  For every byte in the block,
     *  we maintain a 32-bit integer that tells us 1) approximately how many times that
     *  byte has been accessed (reads+writes), 2) whether or not it has ever been written,
     *  and 3) where it was written from.
     *
     *  We also support a second discontiguous block of RAM, but only insofar as validating
     *  legitimate address accesses.
     */
    public void AddMemoryBlock(String sModule, String sSymbolFile, int iType, int addr, int length)
    {
        if (length <= 0)
            return;
        
        if (iType == MEMTYPE_DEVICE) {
            
            // Mask the address to avoid compare errors due to sign overflow
            int addrTemp = addr & 0x7fffffff;
            
            // Make sure the limit doesn't cause a wrap (BUGBUG: even though it means we'll miss some addresses -JP)
            int lengthTemp = addrTemp + length >= 0? length : 0x7fffffff - addrTemp;
        
            if (addrTemp < addrHWBase || addrHWLimit == 0) {
                addrHWBase = addrTemp;
                if (addrHWLimit < addrTemp + lengthTemp)
                    addrHWLimit = addrTemp + lengthTemp;
            }
            else if (addrTemp >= addrHWLimit) {
                addrHWLimit = addrTemp + lengthTemp;
            }
        }
        else {
            Emulator.Assert_Debug(addr >= 0 && addr + length >= 0, "AddMemoryBlock: unsupported memory range");
            
            if (iType == MEMTYPE_ROM || iType == MEMTYPE_CODE) {
                if (addrCodeLimit == 0) {   // BUGBUG: can only track 1 code block -JP
                    addrCodeBase = addr;
                    addrCodeLimit = addr + length;
                    if (length <= CODEHIST_MAX)
                        aiCodeHistory = new int[(length+1)/2];
                }
            }
            else if (iType == MEMTYPE_DATA) {
                if (addrDataLimit == 0) {   // BUGBUG: can only track 1 data block -JP
                    addrDataBase = addr;
                    addrDataLimit = addr + length;
                    if (length <= DATAHIST_MAX)
                        aiDataHistory = new int[length];
                }
            }
            else
                Emulator.Assert_Debug(false, "AddMemoryBlock: invalid memory type: " + iType);
        }

        DebuggerSymbols ds = new DebuggerSymbols(sModule, sSymbolFile, mem, iType, addr, length);
        vecSymbols.addElement(ds);
    }
    
    
    /*  RemoveMemoryBlocks()
     *
     *  Called by CPUMem.DestroyMem()
     */
    public void RemoveMemoryBlocks()
    {
        vecSymbols.removeAllElements();
    }


    /*  Called from Emulator's SendDeviceCommand(), via the Emulator's JavaScript interface
     *  SendDebuggerCommand(), and synchronized via Device's Debug() service.
     */
    public String ParseCommand(String sCommand)
    {
        String sResult = "";
        
        int iBegin = 0, iEnd;
        
        // BUGBUG: Since I don't currently provide a way to "quote" commands, to prevent a single
        // command from being misinterpreted as multiple commands, I just have to special-case the "mt"
        // command, which is currently the only command that needs to see semi-colons anyway. -JP
        
        if (!sCommand.startsWith("mt")) {
            while ((iEnd = sCommand.indexOf(';', iBegin)) != -1) {
                if (sResult.length() > 0)
                    sResult = sResult + "\r\n";
                sResult = sResult + ParseSingleCommand(sCommand.substring(iBegin, iEnd));
                iBegin = iEnd + 1;
            }
        }
        
        if (sResult.length() > 0)
            sResult = sResult + "\r\n";
        sResult = sResult + ParseSingleCommand(sCommand.substring(iBegin));
        
        return sResult;
    }
    
                               
    public String ParseSingleCommand(String sCommand)
    {
        String sError = "unknown command: '" + sCommand + "'";
        
        if (sCommand.charAt(0) == '?')
            return HelpCommand(new StringTokenizer(sCommand.substring(1)), "", asCommands);

        if (sCommand.charAt(0) == 'b')
            return BreakCommand(sCommand.substring(1), sError);

        if (sCommand.charAt(0) == '!')
            return sCommand + ": " + dev.Script(sCommand);

        if (sCommand.charAt(0) == 'd')
            return DumpCommand(sCommand);
        
	    if (sCommand.charAt(0) == 'e')
            return EditCommand(new StringTokenizer(sCommand.substring(1)));

        if (sCommand.startsWith("gt"))
            return GoCommand(new StringTokenizer(sCommand.substring(2)), true);

        if (sCommand.charAt(0) == 'g')
            return GoCommand(new StringTokenizer(sCommand.substring(1)), false);

        if (sCommand.charAt(0) == 'h')
            return HaltCommand(sCommand.substring(1));

	    if (sCommand.charAt(0) == 'k')
            return StackCommand(new StringTokenizer(sCommand.substring(1)));

	    if (sCommand.charAt(0) == 'l')
            return LoadCommand(new StringTokenizer(sCommand.substring(1)), sError);

	    if (sCommand.charAt(0) == 'm')
            return MacroCommand(sCommand.substring(1), sError);

	    if (sCommand.equals("reg"))
            return RegisterCommand(null);

	    if (sCommand.charAt(0) == 'r')
            return RegisterCommand(new StringTokenizer(sCommand.substring(1), " =\t\r\n"));

	    if (sCommand.startsWith("sm"))
            return SaveDataCommand(new StringTokenizer(sCommand.substring(2)));

        if (sCommand.charAt(0) == 's' || sCommand.charAt(0) == 't' || sCommand.charAt(0) == 'p')
		    return TraceCommand(new StringTokenizer(sCommand.substring(1)), sCommand.charAt(0));

        if (sCommand.charAt(0) == 'u')
            return UnassembleCommand(new StringTokenizer(sCommand.substring(1)));

        if (sCommand.startsWith("il"))
            return UnassembleCommand(new StringTokenizer(sCommand.substring(2)));

	    if (sCommand.charAt(0) == 'v')
            return VerbosityCommand(new StringTokenizer(sCommand.substring(1)));

	    if (sCommand.charAt(0) == 'w')
            return WatchCommand(new StringTokenizer(sCommand.substring(1)), sError);

        return sCommand + ": " + dev.Script(sCommand);
    }

    
    /*  Arm()
     *
     *  Called by CPUThread.run() prior to calling ExecuteOpcodes, giving us a chance to set
     *  up all our breakpoints and anything else we want to do before letting the CPU rip.
     */
    public void Arm()
    {
        fFault = false;
        
        if ((cpu.fCPU & CPU_WATCHALL) != 0) {
            
            // Don't call GetTraceMessage(true), because it assumes we're a message consumer, not a producer,
            // and as such, it prepends GetDebuggerMessage(), if any, to the string it returns.
            
            String s = DumpInstruction(cpu.pc, DUMPFLAGS_MOD);
            if (fileWatchLog == null)
                Emulator.DisplayMessage(s);
            else
                fileWatchLog.WriteString(s + "\r\n");
        }
        
        // Now arm all breakpoints, as long as we're not stepping a single instruction -- basically because
        // there's no point, but also because the user needs a simple way of stepping OVER a breakpoint.
        // GoCommand() automatically performs a single-step (and sets fGoTrace) on behalf of the user whenever
        // it sees the current instruction is at a breakpoint.
        
        if ((cpu.fCPU & CPU_STEPPING) == 0 || cpu.cStep != 1)
            ArmBPs();
    }
    
    
    /*  Disarm()
     *
     *  Called by CPUThread.run() after returning from ExecuteOpcodes, giving us a chance to remove
     *  all our breakpoints, and examine what happened.  Interesting CPU flags include CPU_BREAKPOINT
     *  and CPU_EXCEPTION.  This also gives us an opportunity to modify the CPU's state as needed,
     *  as well as request an LCD update if we're halting the CPU (always nice to see up-to-date screen
     *  information).
     */
    public void Disarm()
    {
        boolean fTracing = ((cpu.fCPU & CPU_TRACING) != 0);
        boolean fStepped = ((cpu.fCPU & CPU_STEPPING) != 0 && cpu.cStep == 0);
        boolean fStopped = ((cpu.fCPU & CPU_STOPPED) != 0 && fStop);
        
        addrTraceInfo = cpu.pc;
        
        // Now disarm all breakpoints.  Note that if we stopped at a breakpoint,
        // CPUOps will have already moved cpu.pc back to the beginning of the breakpoint
        // instruction, so checking for breakpoint addresses matching cpu.pc is correct
        // (since it is now the same as pc0).
        
        for (int i=0; i<aBPFlags.length; i++) {
            
            if (DisarmBP(i) && aBPAddrs[i] == cpu.pc) {
                
                // NOTE: Normally, the whole reason CPUThread has stopped executing and is calling
                // Disarm() is because some code has *already* set CPU_BREAKPOINT, but there are other
                // reasons why execution could have been temporarily halted too, and if we happen to
                // *also* be sitting at an armed breakpoint too, then we need to point that out, and make
                // sure the CPU stays stopped now.

                cpu.fCPU |= CPU_BREAKPOINT;
                
                if ((aBPFlags[i] & BPFLAG_TEMP) != 0) {
                    
                    ClearBP(i);
                    fStepped = true;            // NOTE: we also expect fTraceGo to be set at this point...
                    cpu.fCPU |= CPU_TRACING;
                    cpu.fCPU &= ~(CPU_STEPPING | CPU_BREAKPOINT);
                }
                else if ((aBPFlags[i] & BPFLAG_WATCH) != 0) {
                    
                    DisableBP(i);
                    int addrReturn = mem.GetLongEx(cpu.a[7]);
                    
                    // BUGBUG: Hack to detect an RTE (exception) frame as opposed to an RTS (stack) frame -JP
                    if ((addrReturn & 0xf800ff00) == 0x20001000)
                        addrReturn = mem.GetLongEx(cpu.a[7]+2);
                    
                    // BUGBUG: We should try to confirm this WATCH breakpoint was really set at the beginning of a function -JP
                    SetBP(addrReturn, BPFLAG_UNWATCH | (i & BPFLAG_RELATED));
                    
                    // We clear CPU_BREAKPOINT because a BPFLAG_WATCH breakpoint means we just want to watch, not stop...
                    cpu.fCPU &= ~CPU_BREAKPOINT;
                    cpu.fCPU |= (CPU_WATCHHW | CPU_WATCHALL);
                    
                    String s = "Watchpoint hit @" + DumpHex(cpu.pc) + " (" + GetAddressSymbol(cpu.pc, -1) + ")";
                    Emulator.DisplayMessage(s);
                    if (fileWatchLog != null)
                        fileWatchLog.WriteString(s + "\r\n");
                    
                }
                else if ((aBPFlags[i] & BPFLAG_UNWATCH) != 0) {
                    
                    // A BPFLAG_UNWATCH breakpoint catches the return from some call, and its job is to re-enable the
                    // original BPFLAG_WATCH breakpoint and then clear the BPFLAG_UNWATCH breakpoint.

                    EnableBP(aBPFlags[i] & BPFLAG_RELATED);
                    
                    ClearBP(i);
                    
                    // Again, we clear CPU_BREAKPOINT because these watch-related breakpoints aren't supposed to stop execution
                    cpu.fCPU &= ~(CPU_BREAKPOINT | CPU_WATCHHW | CPU_WATCHALL);
                    
                    String s = "Watching stops @" + DumpHex(cpu.pc0);
                    Emulator.DisplayMessage(s);
                    if (fileWatchLog != null)
                        fileWatchLog.WriteString(s + "\r\n");
                }
            }
        }

        // If we're tracing, then TraceCommand() will have provided status, so only display
        // status now if we're NOT tracing -- or we ARE tracing but TraceCommand() couldn't wait to
        // display status (ie, fTraceGo), or fGoTrace is set, meaning that GoCommand() would have likely
        // missed any interesting status (such as a fault).

        if (!fTracing || fTraceGo || fStopped || fFault && fGoTrace) {
            
            // Note that if we're supposed to dump trace info, then we'll want to use
            // cpu.pc0 instead of cpu.pc, since RegisterCommand() will already tell us what
            // instruction is at cpu.pc.
            
            if ((cpu.fCPU & (CPU_BREAKPOINT | CPU_EXCEPTION)) != 0 || fStopped) {
                Emulator.DisplayMessage((fStopped? "(stopped)\r\n" : "") + RegisterCommand(null));
                fTraceGo = false;
            }
            else if (fStepped) {
                Emulator.DisplayMessage(GetTraceMessage(fQuiet));
                fTraceGo = false;
            }
        }
        
        // Take us out of tracing mode automatically if fGoTrace is set, because that means
        // the debugger really wanted to "go", but was forced to "trace" instead, usually because
        // the current instruction was at a break condition that we needed to skip over.

        if (fGoTrace) {
            cpu.fCPU &= ~CPU_TRACING;
            fGoTrace = false;
        }
        
        // If the following conditions are still true, then make sure the CPU is blocked and no longer stepping
        
        if ((cpu.fCPU & (CPU_BREAKPOINT | CPU_EXCEPTION)) != 0 || fStopped) {
            cpu.fCPU |= CPU_TRACING;
            cpu.fCPU &= ~CPU_STEPPING;
            fStop = false;
        }
        
        // Last but not least, always request an LCD update, so that we can see what's been going on with the screen, if anything
        cpu.fCPU |= CPU_CHECKLCD;
    }


    public void ArmBPs()
    {
        for (int i=0; i<aBPFlags.length; i++) {
            ArmBP(i);
        }
    }
    
    
    public boolean DisarmBPs()
    {
        boolean fExists = false;
        
        for (int i=0; i<aBPFlags.length; i++) {
            if (DisarmBP(i))
                fExists = true;
        }
        return fExists;
    }
    
    
    /*  Break(addr, fArmed)
     *
     *  Called from within ExecuteOpcodes (fArmed == true) to determine if the specified address
     *  has an associated live/armed "break condition" (eg, an armed breakpoint or some other break
     *  condition established by the debugger).
     *
     *  Returns true if a break condition exists at the specified address (eg, armed breakpoint), or
     *  in the case of fArmed == false, if an enabled break condition exists.  The latter type of query
     *  is used internally by the debugger to simply check for the existence of breakpoints.  Note that
     *  while we're inside the debugger (and outside of ExecuteOpcodes), Disarm will have already
     *  disarmed all the breakpoints.
     */
    public boolean Break(int addr, boolean fArmed)
    {
        int i = FindCodeBP(addr);
        if (i >= 0 && (!fArmed && (aBPFlags[i] & BPFLAG_DISABLED) == 0 || fArmed && (aBPFlags[i] & BPFLAG_ARMED) != 0))
            return true;
        
        if (!fArmed || (cpu.fCPU & CPU_STEPPING) == 0 || cpu.cStep != 1) {
            
            try {
                int iTrap = cpu.GetLongEx(addr);
                if (((iTrap >> 16) & OP_TRAP_0xF_MASK) == OP_TRAP_0xF) {
                    
                    i = FindAPIBP(iTrap & 0xffff);
                    if (i == -2 || i >= 0 && (aBPFlags[i] & BPFLAG_DISABLED) == 0) {
                        
                        // If we're being called by ourselves, just return true
                        if (!fArmed)
                            return true;
                        
                        // If this is an API *breakpoint*, then return true to break into the debugger
                        if (i >= 0 && (aBPFlags[i] & BPFLAG_WATCH) == 0)
                            return true;
                        
                        if (i == -2 && !fWatchAPI)
                            return true;
                        
                        // Since this is an API *watchpoint*, all we do is display the current instruction
                        String s = DumpInstruction(addr, DUMPFLAGS_MOD);
                        Emulator.DisplayMessage(s);
                        if (fileWatchLog != null)
                            fileWatchLog.WriteString(s + "\r\n");
                    }
                }
            } catch (Throwable e) {}
        }
        return false;
    }


    /*  Fault(addrFault, sFault)
     *
     *  Allows the debugger to record the details of a fault.
     */
    public void Fault(int addrFault, String sFault)
    {
        fFault = true;
        this.addrFault = addrFault;
        this.sFault = sFault;
    }


    /*  MarkCodeAccess(addr)
     *
     *  Mark the word at address 'addr' as accessed.
     *
     *  The low bits (CODEHIST_ADDR_MASK) of the corresponding integer in aiCodeHistory contain
     *  the offset of the previous pc (cpu.pc1), and the high bits (CODEHIST_COUNT_MASK) contain
     *  an access count, which stops counting once it has overflowed.  The highest bit
     *  (CODEHIST_UNINIT_DATA) is a flag that's set if this address has ever caused an uninitialized
     *  data access (see MarkCodeBadData).
     *
     *  BUGBUG: We should generate an exception the first time any access count overflows. -JP
     */
    public void MarkCodeAccess(int pc)
    {
        if (pc >= addrCodeBase && pc < addrCodeLimit) {
            if (aiCodeHistory != null) {
                int addr = pc - addrCodeBase;
                int pc1 = cpu.pc1;
                if (pc1 < addrCodeBase || pc1 >= addrCodeLimit)
                    pc1 = addr;
                else
                    pc1 -= addrCodeBase;
                int iHist = addr/2;
                int iCode = aiCodeHistory[iHist];
                if (pc1 == addr && (iCode & CODEHIST_ADDR_MASK) != 0)
                    pc1 = iCode & CODEHIST_ADDR_MASK;   // don't overwrite good info
                iCode = pc1 | ((iCode + CODEHIST_COUNT_INC) & CODEHIST_COUNT_MASK) | (iCode & CODEHIST_UNINIT_DATA);
                if ((iCode & CODEHIST_COUNT_MASK) == 0)
                    iCode |= CODEHIST_COUNT_MASK;       // don't let the count bits overflow
                aiCodeHistory[iHist] = iCode;
            }
            return;
        }
        
        // Allow code to be executed out of the "RAM alias" region (aka storage memory)
        if (pc >= 0x10000000 && pc < 0x10000000+mem.cbRAM)
            return;

        // I also allow code to be executed on the stack, within a small range (0x10)...
        if (addrCodeLimit != 0 && (cpu.pc0 - cpu.a[7]) > 0x10)
            mem.GenerateException(EXCEPTION_INVALID_CODE, "invalid code access from " + DumpHex(cpu.pc0) + " (" + GetAddressSymbol(cpu.pc0, -2) + ")");
    }
    
    
    /*  MarkCodeBadData(addr)
     *
     *  Marks the specified code address for bad data access, and returns true if that
     *  address had already been marked.
     */
    boolean MarkCodeBadData(int pc)
    {
        if (aiCodeHistory != null && pc >= addrCodeBase && pc < addrCodeLimit) {
            int iHist = (pc-addrCodeBase)/2;
            int iCode = aiCodeHistory[iHist];
            if (iCode < 0)
                return true;
            aiCodeHistory[iHist] |= CODEHIST_UNINIT_DATA;
        }
        return false;
    }
    
    
    /*  MarkDataAccess(addr, length, iAccess)
     *
     *  Mark the byte(s) at address 'addr' as read, write, or uninit.
     *
     *  ENTRY
     *      addr == address
     *      length == number of bytes
     *      iAccess == read, write, or uninit (see DATAACCESS_* in DebuggerInterface.java)
     *
     *  EXIT
     *      None
     *
     *  The low bits (DATAHIST_ADDR_MASK) of the corresponding integer in aiDataHistory contain the
     *  offset of the current pc (cpu.pc0), and the high bits (DATAHIST_COUNT_MASK) contain an access count,
     *  which stops counting once it has overflowed.  The highest bit (DATAHIST_INIT_DATA) is a flag
     *  that's set once the byte has been initialized (ie, written at least once).
     *
     *  BUGBUG: We should generate an exception the first time any access count overflows. -JP
     */
    public void MarkDataAccess(int addr, int length, int iAccess)
    {
        // Give read/write breakpoints first crack...
        
        if (FindDataBP(addr, length, iAccess == DATAACCESS_READ? BPFLAG_READ : BPFLAG_WRITE) >= 0) {
            cpu.fCPU |= CPU_BREAKPOINT;
        }
        
        // When code is being accessed like data, it's usually during effective address
        // calculation or immediate data fetches, which are covered by GetPCWord() and
        // GetPCLong() requests, which use MarkCodeAccess() instead of MarkDataAccess().
        // However, the GetPCxxxx() functions also auto-increment the program counter, which
        // is not always appropriate (see the GetData() functions in the EAModeImmediatexxxx
        // classes, or GenerateException() when it's trying to decode the type of exception).
        
        // So, since MarkDataAccess is called in those cases, we must actually implement
        // it as if it was "MarkData_Or_Code_Access"....

        if (addr >= addrCodeBase && addr < addrCodeLimit) {
			if (iAccess == DATAACCESS_READ)
				MarkCodeAccess(addr);
			// BUGBUG: We're dropping *writes* to ROM on the floor, but with the introduction
			// of demand-paging of ROM, they happen legitimately, so we'd need more information
			// about the *type* of write operation here, before we could complain about it. -JP
            return;
        }

        if (addr >= addrDataBase + RAM_MIRROR && addr < addrDataLimit + RAM_MIRROR)
            addr -= RAM_MIRROR;

        if (addr >= addrDataBase && addr < addrDataLimit) {
            
            if (aiDataHistory != null) {

                boolean fUninitialized = false;
            
                int pc0 = cpu.pc0;
                if (pc0 >= addrCodeBase && pc0 < addrCodeLimit)
                    pc0 -= addrCodeBase;
                int iByte = (addr - addrDataBase);
            
                while (length-- > 0) {
                
                    int iData = aiDataHistory[iByte];
                
                    // If this is a read of uninitialized data (bit 31 is not set,
                    // hence the integer is not negative), then generate an exception
                
                    if (iAccess == DATAACCESS_READ && iData >= 0) {
                        iData |= DATAHIST_INIT_DATA;            // prevent further uninitialized data exceptions for the same data
                        if (!MarkCodeBadData(cpu.pc0))
                            fUninitialized = true;
                    }
                
                    // If this memory is being "uninit'ed", then reset iData.  Might as well continue
                    // storing pc0 though, as it might come in handy for tracking down who released this memory.
                
                    if (iAccess == DATAACCESS_UNINIT)
                        iData = pc0;
                    else {
                        iData = pc0 | ((iData + DATAHIST_COUNT_INC) & DATAHIST_COUNT_MASK) | (iAccess == DATAACCESS_WRITE? DATAHIST_INIT_DATA : (iData & DATAHIST_INIT_DATA));
                        if ((iData & DATAHIST_COUNT_MASK) == 0)
                            iData |= DATAHIST_COUNT_MASK;       // don't let the count in bits 16-30 overflow
                    }
                    aiDataHistory[iByte++] = iData;
                }
            
                if (fUninitialized) {
                
                    // BUGBUG: Make the following exceptions, due to weirdo code generated by compiler
                    // used to build PocketChess v1.x -JP
                
                    int op1 = mem.GetWordEx(cpu.pc0);
                    if ((op1 & 0xf0ff) == 0x806e)           // "OR.w -0xxx(A6),Dn"
                        return;
                    if ((op1 & 0xf000) == 0x3000 && (op1 & 0x1ff) == 0x02e)
                        return;                             // "MOVE.w -0xxx(A6),Dn"
                
                    mem.GenerateException(EXCEPTION_UNINITIALIZED_DATA, "uninitialized data access from " + DumpHex(cpu.pc0) + " (" + GetAddressSymbol(cpu.pc0, -2) + "): " + DumpHex(addr));
                }
            }
            return;
        }
        
        // As long as some data bounds have been set AND the address is outside the normal
        // R/W range, then generate an "invalid data" exception.  We also assume that anyone
        // writing to exception vectors 0 or 1 (below EXCEPTION_ACCESS_FAULT) is probably doing so
        // erroneously.  BUGBUG: This code doesn't understand the concept of a write-protected
        // section of RAM yet (ie, HEAP_STORAGE_BASE). -JP
        
        if (addrDataLimit != 0 && (addr < EXCEPTION_ACCESS_FAULT*4 || addr >= mem.cbRAM /*HEAP_STORAGE_BASE*/)) {
            
            //  Mask the address into an unsigned value, since the addrHW* values have been masked to unsigned values as well
            int addrTemp = addr & 0x7fffffff;
            
            if (addrTemp < addrHWBase || addrTemp >= addrHWLimit)
                mem.GenerateException(EXCEPTION_INVALID_DATA, "invalid data access from " + DumpHex(cpu.pc0) + " (" + GetAddressSymbol(cpu.pc0, -2) + "): " + DumpHex(addr));
        }
    }
    
    
    /*  MarkHardwareAccess(addr, length, data, iAccess)
     *
     *  Mark the byte(s) at address 'addr' as read or write.
     *
     *  ENTRY
     *      addr == address
     *      length == number of bytes
     *      data == data writing (if DATAACCESS_WRITE)
     *      iAccess == read or write (see DATAACCESS_* in DebuggerInterface.java)
     *
     *  EXIT
     *      None
     */
    public void MarkHardwareAccess(int addr, int length, int data, int iAccess)
    {
        // BUGBUG: The TSTAT1 register produces too much output over extended runs, so re-enable this
        // statement if you want to reduce the amount of output. -JP
        //
        if (addr == HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TSTAT1)
            return;
        
        if (addrWatch != 0 && addr != addrWatch)
            return;

        String s = DumpHex(cpu.pc0) + " (" + GetAddressSymbol(cpu.pc0, -2) + "): ";
        
        s = s + length + " bytes to ";
        
        if (iAccess == DATAACCESS_READ)
            s = s + "read  (";
        else if (iAccess == DATAACCESS_WRITE)
            s = s + "write (";
        
        s = s + DumpHex(data & (length == 1? 0xff : (length == 2? 0xffff : 0xffffffff))) + ") at ";
        
        s = s + DumpHex(addr) + " (" + GetAddressSymbol(addr, -2) + ")";
        
        // Don't call GetTraceMessage(true), because it assumes we're a message consumer, not a producer,
        // and as such, it prepends GetDebuggerMessage(), if any, to the string it returns.
        //
        // Furthermore, it uses cpu.pc, not cpu.pc0, and we want the latter so we can see the offending instruction.
        //
        // Further furthermore, we don't actually want any opcode display at all right now, so it's completely disabled.
        //
        // s = s + "\r\n" + DumpInstruction(cpu.pc0, DUMPFLAGS_MOD);
        
        if (fileWatchLog == null)
            Emulator.DisplayMessage(s);
        else
            fileWatchLog.WriteString(s + "\r\n");
    }
    
    
    /*  Reset(file)
     *
     *  Called by Device.Launch() *before* CPUMem.InitMem, so that we can reset the debugger.
     */
    public void Reset(FileStream file)
    {
        sFileName = file.GetFullName();
        
        cpu.fCPU &= ~CPU_STEPPING;
        fFault = fQuiet = fGoTrace = fTraceGo = fStop = false;
        WatchLogCommand(null);

        addrCodeBase = addrCodeLimit = addrDataBase = addrDataLimit = addrHWBase = addrHWLimit = 0;
        aiCodeHistory = aiDataHistory = null;
        
        if (!Emulator.fDebugger)
            cpu.fCPU &= ~CPU_TRACING;
        else if (file.GetType() == FileStream.FILETYPE_ROM)
            cpu.fCPU |= CPU_TRACING;
    }


    /*  Status()
     *
     *  Called by Device.Launch(), *after* CPUMem.InitMem(), so we have a chance to display status.
     */
    public void Status()
    {
        // Note that even if we did NOT just call cpu.Trace(true), the TRACING flag may
        // still be set from a previous app load that was never executed, or from an explicit
        // "t on" debugger command (in case the user wants to debug the app's startup code).
        
        // In any case, if the TRACING flag is set, then perform an automatic register dump,
        // so that the user has a visual indicator as to why the app is not immediately starting.
        
        if ((cpu.fCPU & CPU_TRACING) != 0)
            Emulator.DisplayMessage(RegisterCommand(null));
    }


    public String DumpHex(int r)
    {
        return DumpHex(r, 8);
    }
    

    public String DumpHex(int r, int cch)
    {
        char[] ach = new char[cch];
        for (int i=cch-1; i>=0; i--) {
	        int d = r & 0xf;
		    ach[i] = (char)((d > 9)? (d + 'a' - 10) : (d + '0'));
            r >>>= 4;
        }
        return new String(ach);
    }
    

    /*  GetAddressSymbol
     *
     *  ENTRY
     *      addr == address
     *      delta == 0 for exact address-to-symbol match, -1 for closest preceding symbol
     *
     *  EXIT
     *      symbolic name for address, or hex string if no name exists;  however, if you request an EXACT symbol
     *      match, then it will return NULL if no exact match exists.
     */
    String GetAddressSymbol(int addr, int delta)
    {
        for (int i=0; i<vecSymbols.size(); i++) {
            DebuggerSymbols ds = (DebuggerSymbols)(vecSymbols.elementAt(i));
            int iSymbol = ds.GetSymbolIndex(addr);
            if (iSymbol >= 0) {
                int addrSymbol = ds.GetSymbolAddress(iSymbol);
                String sSymbol = ds.GetSymbolName(iSymbol);
                if (addr == addrSymbol)
                    return sSymbol;
                return delta == 0? null : (sSymbol + "+" + Integer.toHexString(addr - addrSymbol));
            }
        }
        if (delta == -2)
            return "";
        return delta == 0? null : Integer.toHexString(addr);
    }


    /*  GetAddressValue
     *
     *  ENTRY
     *      s == number or symbol
     *
     *  EXIT
     *      value of number of symbol, or null if not found
     */
    Integer GetAddressValue(String s)
    {
        Integer intVal = null;
        
        if (Character.isJavaIdentifierStart(s.charAt(0))) {
            for (int i=0; i<vecSymbols.size(); i++) {
                DebuggerSymbols ds = (DebuggerSymbols)(vecSymbols.elementAt(i));
                intVal = ds.FindSymbolAddress(s);
                if (intVal != null)
                    break;
            }
        }
        
        return intVal;
    }


    String InvalidExpression(String s)
    {
        return "invalid expression: " + s;
    }


    String HelpCommand(StringTokenizer st, String sPrefix, String[] asHelp)
    {
        int i;
        String s;
        
        if (st != null && st.hasMoreTokens()) {
            s = st.nextToken();
            Integer intVal = GetIntegerValue(s);
            if (intVal == null)
                return InvalidExpression(s);
            i = intVal.intValue();
            return DumpHex(i) + " (" + Integer.toString(i) + ".)";
        }

        s = "";
        for (i=0; i<asHelp.length-1; i+=2)
            s = s + PadString(sPrefix + asHelp[i], 24) + asHelp[i+1] + (i == asHelp.length-2? "" : "\r\n");
        
        if (i < asHelp.length)
            s = s + asHelp[i];
        
        return s;
    }


    String BreakCommand(String sCommand, String sError)
    {
        if (sCommand.length() == 0 || sCommand.charAt(0) == '?')
            return HelpCommand(null, "b", asBreakCommands);
        
        if (sCommand.length() >= 2) {

	        if (sCommand.startsWith("rc"))
                return BPClearCommand(new StringTokenizer(sCommand.substring(2)));
            
	        if (sCommand.startsWith("rd"))
                return BPListCommand(new StringTokenizer(sCommand.substring(2)));
        }

        StringTokenizer st = new StringTokenizer(sCommand.substring(1));
        
        if (sCommand.charAt(0) == 'a') {
            fBPAPI = (fBPAPI? false : true);
            return "API breakpoint " + (fBPAPI? "on" : "off");
        }
	    if (sCommand.charAt(0) == 'c')
            return BPClearCommand(st);

	    if (sCommand.charAt(0) == 'd')
            return BPDisableCommand(st);

	    if (sCommand.charAt(0) == 'e')
            return BPEnableCommand(st);

        if (sCommand.charAt(0) == 'l')
            return BPListCommand(st);

        if (sCommand.charAt(0) == 'p' || sCommand.charAt(0) == 'r')
            return BPSetCommand(st, BPFLAG_NONE);
        
        if (sCommand.charAt(0) == 'f' || sCommand.charAt(0) == 'w')
            return BPReadWriteCommand(st, sCommand.charAt(0) == 'f'? BPFLAG_READ : BPFLAG_WRITE);
        
        return sError;
    }


    String BPClearCommand(StringTokenizer st)
    {
        int i;
        if (!st.hasMoreTokens())
            return "missing breakpoint #";
        
        String sNum = st.nextToken();
        if (sNum.equals("api")) {
            fBPAPI = fWatchAPI = false;
            return "API breakpoint cleared";
        }
        
        if (sNum.equals("*")) {
            fBPAPI = fWatchAPI = false;
            for (i=0; i<aBPFlags.length; i++)
                ClearBP(i);
            return "all breakpoints cleared";
        }
        
        i = GetDecimalValue(sNum);

        if (i < 0 || i >= MAX_BPS) {
            Integer intVal = GetIntegerValue(sNum);
            if (intVal == null)
                return InvalidExpression(sNum);
            i = FindCodeBP(intVal.intValue());
            if (i < 0)
                return "unknown breakpoint: " + sNum;
        }

        if (!ClearBP(i))
            return InvalidExpression(sNum);
        
        return "breakpoint #" + i + " clear";
    }


    String BPDisableCommand(StringTokenizer st)
    {
        int i;
        if (!st.hasMoreTokens())
            return "missing breakpoint #";
        
        String sNum = st.nextToken();
        if (sNum.equals("*")) {
            for (i=0; i<aBPFlags.length; i++)
                DisableBP(i);
            return "all breakpoints disabled";
        }
        
        i = GetDecimalValue(sNum);
        
        if (!DisableBP(i))
            return InvalidExpression(sNum);
        
        return "breakpoint #" + i + " disabled";
    }


    String BPEnableCommand(StringTokenizer st)
    {
        int i;
        if (!st.hasMoreTokens())
            return "missing breakpoint #";
        
        String sNum = st.nextToken();
        if (sNum.equals("*")) {
            for (i=0; i<aBPFlags.length; i++)
                EnableBP(i);
            return "all breakpoints enabled";
        }
        
        i = GetDecimalValue(sNum);
        
        if (!EnableBP(i))
            return InvalidExpression(sNum);
        
        return "breakpoint #" + i + " enabled";
    }


    String BPListCommand(StringTokenizer st)
    {
        if (st.hasMoreTokens())
            return InvalidExpression(st.nextToken());
        
        return ListBPs();
    }


    String BPSetCommand(StringTokenizer st, int flags)
    {
        if (!st.hasMoreTokens())
            return "missing address";
        
        String sAddr = st.nextToken();
        if (sAddr.equals("api")) {
            fBPAPI = true;
            return "API breakpoint set";
        }
        
        boolean fAPI = false;
        if (sAddr.charAt(0) == '#') {
            sAddr = sAddr.substring(1);
            fAPI = true;
        }
        
        int addr;
        Integer intAddr;
        if (fAPI || (intAddr = GetIntegerValue(sAddr)) == null || ((addr = intAddr.intValue()) & 0x1) != 0) {
            if ((addr = PalmOSTypes.FindAPIName(sAddr)) >= 0)
                flags |= BPFLAG_API;
            else
                return InvalidExpression(sAddr);
        }
        
        int i = SetBP(addr, flags);
        
        if (i == -1)
            return "too many breakpoints";
        else if (i < 0)
            return "breakpoint already set";
        
        // GoCommand() checks the returned string for success by looking for a '#', so beware!
        return ((flags & BPFLAG_WATCH) == 0? "breakpoint" : "watchpoint") + " #" + i + " @" + GetBPName(i);
    }


    String BPReadWriteCommand(StringTokenizer st, int flags)
    {
        if (!st.hasMoreTokens())
            return "missing address";
        
        String sAddr = st.nextToken();
        
        Integer intAddr = GetIntegerValue(sAddr);
        if (intAddr == null)
            return InvalidExpression(sAddr);
        
        int i = SetBP(intAddr.intValue(), flags);
        
        if (i == -1)
            return "too many breakpoints";
        else if (i < 0)
            return "breakpoint already set";
        
        return "breakpoint #" + i + " @" + GetBPName(i);
    }


    String DumpCommand(String sCommand)
    {
        int iLines = -1;
        char cCommand = 0;
        int addr = addrDataDump;
        int cBytes = 128, cLines = 10;
        Integer intAddr = null;
        
        int iSub = 1;
        int type = typeDataDump;
        
        if (sCommand.startsWith("db") || sCommand.startsWith("dm")) {
            iSub = 2;
            type = 1;
        }
        else if (sCommand.startsWith("dw")) {
            iSub = 2;
            type = 2;
        }
        else if (sCommand.startsWith("dd")) {
            iSub = 2;
            type = 4;
        }
        StringTokenizer st = new StringTokenizer(sCommand.substring(iSub));

        if (!st.hasMoreTokens())
            return DumpMemoryBlock(addr, type, 128);
        
        String s = st.nextToken();
        if (s.length() == 1)
            cCommand = s.charAt(0);
        
        if (cCommand == '?')                                    // "d?"
            return HelpCommand(null, "d", asDumpCommands);
        
        if (iSub == 2 && type == 1 && cCommand == 'm') {        // "dbm"
            int[] ai = new int[5];
            s = GetIntegerValues(st, ai);
            if (s != null)
                return InvalidExpression(s);
            return DumpMemoryBitmap(ai[0], ai[1], ai[2], ai[3], ai[4]);
        }
        
        if (cCommand == 'i' || cCommand == 'h' || cCommand == 's' || cCommand == 't')
            s = st.hasMoreTokens()? st.nextToken() : null;
            
        if (s != null) {
            if (s.charAt(0) != 'l' || !Character.isDigit(s.charAt(1))) {
                iLines = 0;
                intAddr = GetIntegerValue(s);
                if (intAddr == null)
                    return InvalidExpression(s);
                addr = intAddr.intValue();
                s = st.hasMoreTokens()? st.nextToken() : null;
            }
        }

        if (s != null) {
            if (s.charAt(0) == 'l' && Character.isDigit(s.charAt(1)))
                iLines = 1;
            if (iLines >= 0) {
                Integer intLines = GetIntegerValue(s.substring(iLines));
                if (intLines == null)
                    return InvalidExpression(s);
                cLines = intLines.intValue();
                cBytes = cLines * type;
            }
        }

        if (cCommand == 'h')                                    // "dh"
            return DumpMemoryHistory(addr);
        
        if (cCommand == 'i')                                    // "di"
            return "unmasked interrupts" + DumpInterruptBits(HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IMR, false) + "\r\n" +
                   "pending  interrupts" + DumpInterruptBits(HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IPR, true)  + "\r\n" +
                   "asserted interrupts" + DumpInterruptBits(HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_ISR, true);

        if (cCommand == 's')                                    // "ds"
            return DumpStatusInfo();
        
        if (cCommand == 't') {                                  // "dt"
            if (intAddr == null)
                addr = (addrTraceInfo == 0 || addrTraceInfo == cpu.pc? (cpu.pc0 < RAM_MIRROR? (cpu.pc1 == 0? cpu.pc : cpu.pc1) : cpu.pc0) : addrTraceInfo);
            return DumpTraceHistory(addr, cLines);
        }
        
        return DumpMemoryBlock(addr, type, cBytes);             // "db", "dw", "dd", or simply "d"
    }
    
   
    String EditCommand(StringTokenizer st)
    {
        if (!st.hasMoreTokens())
		    return "Missing address";
            
        String sResult = "";
        String sAddr = st.nextToken();
        Integer intAddr = GetIntegerValue(sAddr);
        if (intAddr == null)
            return InvalidExpression(sAddr);
        
        int addr = intAddr.intValue(), val;
        sResult = sResult + DumpHex(addr) + ":";
        
	    try {
            while (st.hasMoreTokens()) {
                String sVal = st.nextToken();
                Integer intVal = GetRegValue(sVal);
                if (intVal != null) {
                    val = intVal.intValue();
                    sResult = sResult + " " + DumpHex(val) + "(" + DumpHex(mem.GetLongEx(addr)) + ")";
                    mem.SetLong(addr, val);
                    addr += 4;
                }
                else {
                    intVal = GetIntegerValue(sVal);
                    if (intVal == null)
                        return InvalidExpression(sVal);
                    val = intVal.intValue();
                    sResult = sResult + " " + DumpHex(val, 2) + "(" + DumpHex(mem.GetByteEx(addr), 2) + ")";
                    mem.SetByte(addr, val);
                    addr++;
                }
            }
		} catch (Throwable e) {sResult = sResult + sError;}
		
        return sResult;
    }
    
   
    String GoCommand(StringTokenizer st, boolean fAddrBreak)
    {
        String sResult = "(continuing)";
        
        if (st.hasMoreTokens()) {
            if (fAddrBreak) {
                String s = BPSetCommand(st, BPFLAG_TEMP);
                int i = s.indexOf('#');
                if (i < 0)
                    return s;
                int j = ++i + 1;
                if (Character.isDigit(s.charAt(j)))
                    ++j;
                i = GetDecimalValue(s.substring(i, j));
                sResult = "(continuing until " + GetBPName(i) + ")";
            }
            else {
                // The argument is actually a new PC
                String sVal = st.nextToken();
                Integer intVal = GetIntegerValue(sVal);
                if (intVal == null)
                    return InvalidExpression(sVal);
                cpu.pc = intVal.intValue();
                sResult = "(starting at " + DumpHex(cpu.pc) + ")";
            }
        }
        else if (!cpu.IsHalted())
            return "(already running)";
        
        // If PC is pointing at a breakpoint, then we can't simply "go".  We have
        // to trace instead, and then when the trace completes, it will be up to Disarm()
        // to make the CPU go again.
        
        if (!Break(cpu.pc, false)) {
            if (!cpu.Go())
                return "(nothing to run)";
        }
        else {
            fGoTrace = true;
            cpu.Step(1);
        }
        
        return GetDebuggerMessage() + (fFault? "" : sResult);
    }


    String HaltCommand(String sCommand)
    {
        if (sCommand.equals("s")) {
            
            if (cpu.IsHalted())
                return "(already stopped)";
            
            if ((cpu.fCPU & CPU_STOPPED) == 0) {
                fStop = true;
                return "(continuing until stopped)";
            }
        }
        
        fTraceGo = fStop = false;
        cpu.Halt();
        return GetDebuggerMessage() + (cpu.IsHalted()? "(halted)\r\n" : "(still running)\r\n") + RegisterCommand(null);
    }
    
    
    String LabelCommand(String sLabel)
    {
        int addr = cpu.pc;
        
        if (sLabel != null) {
            Integer intVal = GetIntegerValue(sLabel);
            if (intVal != null)
                addr = intVal.intValue();
        }
        return DumpHex(addr) + ": " + GetAddressSymbol(addr, -2);
    }


    String LoadCommand(StringTokenizer st, String sError)
    {
        if (!st.hasMoreTokens())
            return sError;
        
        String sCommand = st.nextToken();
        String sParameter = null;
        
        if (st.hasMoreTokens())
            sParameter = st.nextToken();
        
        if (sCommand.length() == 0 || sCommand.charAt(0) == '?')
            return HelpCommand(null, "l", asLoadCommands);
        
	    if (sCommand.charAt(0) == 'f' || sCommand.charAt(0) == 'p')
            return LoadCodeCommand(sParameter, sCommand.charAt(0) == 'p');

	    if (sCommand.charAt(0) == 'm')
            return LoadDataCommand(sParameter);

	    if (sCommand.charAt(0) == 'n')
            return LabelCommand(sParameter);

	    if (sCommand.charAt(0) == 'r')
            return LoadROMCommand();

        return sError;
    }
    
    
    String LoadCodeCommand(String sFile, boolean fProfile)
    {
        if (sFile != null) {
            if (fProfile)
                return emul.LoadProfile(sFile, null, null);
            else
                return emul.LoadFile(null, sFile);
        }
        return emul.LoadFile(emul.sFileTitle, sFileName != null? sFileName : emul.sFileName);
    }


    String LoadDataCommand(String sFile)
    {
        String s = Emulator.sNoFileName;
        
        if (sFile != null) {
            
            FileStream file = new FileStream(sFile, FileStream.FILETYPE_RAM, FileStream.FILEOPEN_LOCAL | FileStream.FILEOPEN_READ);
            int iStatus = file.GetStatus();
            
            if (iStatus != FileStream.FILESTAT_OK)
                return "error opening " + file.GetFullName() + " (" + iStatus + ")";
            
            if (!cpu.RestoreRegs(file))
                return "error restoring registers";
            
            if (!cpu.RestoreMem(file))
                return "error restoring memory";
            
            if (cpu.hwregs != null) {
                if (!cpu.hwregs.Restore(file))
                    return "error restoring device registers";
            }

            s = "bytes read: " + file.GetOffset();
            file.Close();
        }
        
        return s;
    }


    String LoadROMCommand()
    {
        String sResult;
        
        if (mem.fPagedROM) {
            
            // Touch every bank in the ROM, and then force symbols to be rescanned
        
            int cPagedBanks = 0;
            int addr = mem.addrCode;
            int limit = mem.addrCode + mem.cbCode;
            
            int fMsgLevelPrev = Emulator.fMsgLevel;
            Emulator.fMsgLevel = Emulator.MSGLEVEL_ERROR;
            
            while (addr < limit) {
                int cUnpagedBanks = mem.cUnpagedROMBanks;
                mem.GetByte(addr);
                if (cUnpagedBanks != mem.cUnpagedROMBanks)
                    cPagedBanks++;
                addr += mem.BANK_SIZE;
            }
            Emulator.fMsgLevel = fMsgLevelPrev;
            
            sResult = "paged " + cPagedBanks + " ROM banks out of " + mem.cPagedROMBanks;
        }
        else
            sResult = "ROM not paged";
        
        int i;
        DebuggerSymbols dsNew = null;
        for (i=0; i<vecSymbols.size(); i++) {
            DebuggerSymbols ds = (DebuggerSymbols)(vecSymbols.elementAt(i));
            if (ds.addrStart == mem.addrCode && ds.length == mem.cbCode) {
                dsNew = new DebuggerSymbols(ds.sModule, ds.sSymbolFile, mem, DebuggerInterface.MEMTYPE_ROM, ds.addrStart, ds.length);
                vecSymbols.setElementAt(dsNew, i);
                break;
            }
        }
        if (i == vecSymbols.size()) {
            dsNew = new DebuggerSymbols(null, null, mem, DebuggerInterface.MEMTYPE_ROM, mem.addrCode, mem.cbCode);
            vecSymbols.addElement(dsNew);
        }

        return sResult + "\r\n" + "loaded " + (dsNew != null? dsNew.cSymbols : 0) + " ROM symbols";
    }


    String MacroCommand(String sCommand, String sError)
    {
        if (sCommand.length() == 0 || sCommand.charAt(0) == '?')
            return HelpCommand(null, "m", asMacroCommands);
        
        String sMacro = sCommand.substring(1).trim();
        
        if (sCommand.charAt(0) == 't') {
            
            if (sMacro.length() == 0) {
                if (sCommand.length() > 1)
                    sTraceMacro = null;         // reset TraceMacro to default, if whitespace was specified in command
            }
            else {
                int iBegin = 0, iEnd;
                do {
                    iEnd = sMacro.indexOf(';', iBegin);
                    String s = (iEnd == -1? sMacro.substring(iBegin) : sMacro.substring(iBegin, iEnd));
                    if (s.charAt(0) == 't')
                        return "invalid trace macro command: " + s;
                    iBegin = iEnd + 1;
                } while (iEnd != -1);
                sTraceMacro = sMacro;
            }
            return "prompt: " + (sTraceMacro == null? "(default)" : sTraceMacro);
        }
        
        return sError;
    }


    String SaveDataCommand(StringTokenizer st)
    {
        String s = Emulator.sNoFileName;
        
        if (st != null && st.hasMoreTokens()) {
            
            FileStream file = new FileStream(st.nextToken(), FileStream.FILETYPE_RAM, FileStream.FILEOPEN_LOCAL | FileStream.FILEOPEN_WRITE);
            int iStatus = file.GetStatus();
            
            if (iStatus != FileStream.FILESTAT_OK)
                return "error opening " + file.GetFullName() + " (" + iStatus + ")";
            
            cpu.SaveRegs(file);
            cpu.SaveMem(file);
            if (cpu.hwregs != null)
                cpu.hwregs.Save(file);

            s = "bytes written: " + file.GetOffset();
            file.Close();
        }
        
        return s;
    }


    String RegisterCommand(StringTokenizer st)
    {
        String sReg = null;
        boolean fQuiet = false;         // override global fQuiet
        
        if (st != null && st.hasMoreTokens()) {
            sReg = st.nextToken();
            
            if (sReg.equals("?"))
                return HelpCommand(null, "r", asRegisterCommands);
            
            if (sReg.equals("i")) {
                sReg = null;
                fQuiet = true;
            }
        }
        
        if (sReg == null) {
            // Similar to output from the Trace command (see GetTraceMessage), but the Register command displays ALL flags,
            // not just modified ones; trace output may become even more terse in the future, if we add the option to display
            // only modified regs.
            addrTraceInfo = cpu.pc;
            return (fQuiet? "" : (st != null && !cpu.IsHalted()? "(running)\r\n" : "") + DumpRegs(true)) + DumpInstruction(cpu.pc, DUMPFLAGS_ALL);
        }
        
        if (!IsValidReg(sReg) || sReg.length() != 2)
            return InvalidExpression(sReg);
        
        sReg = sReg.toUpperCase();
        
        if (!st.hasMoreTokens())
            return sReg + "=" + DumpHex(GetRegValue(sReg).intValue());
        
        String sVal = st.nextToken();
        Integer intVal = GetIntegerValue(sVal);
        if (intVal == null)
            return InvalidExpression(sVal);
        
        int i = intVal.intValue();
        SetRegValue(sReg, i);
        return DumpReg(sReg, i);
    }
    
   
    String StackCommand(StringTokenizer st)
    {
        // Basic dump assumes the CPU's frame pointer (A6) points to a previous
        // frame pointer at offset 0 and a return address at offset +4.  We stop
        // dumping whenever we see a nonsensical address or we've dumped 16 lines.
        
        int addrStack = cpu.a[7];
        int addrFrame = cpu.a[6];
        int addrCode = cpu.pc;
        
        int cLines = 0;
        String sResult = "call stack:";
        
        boolean fVerbose = false;
        if (st.hasMoreTokens()) {
            String s = st.nextToken();
            if (s.charAt(0) == 'v')
                fVerbose = true;
            else
                return InvalidExpression(s);
        }
        
        try {
            while (cLines++ < 16) {
                
                String sCode;
                
                sCode = GetAddressSymbol(addrCode, -2);
                if (sCode.length() > 0)
                    sCode = sCode + " ";
                sResult = sResult + "\r\n" + DumpHex(addrCode) + ": " + sCode + "(" + Integer.toHexString(addrFrame+8) + ":";
                for (int i=0; i<16; i+=2)
                    sResult = sResult + " " + DumpHex(mem.GetWordEx(addrFrame+8+i), 4);
                sResult = sResult + ")";
                
                if (fVerbose) {
                    sCode = Disassemble(addrCode, true);
                  //sCode = Disassemble(addrCode, false).substring(0, 66).trim();
                    sResult = sResult + "\r\n" + sCode;
                }
                
                int addrPrevFrame;
                int addrPrevCode;
                boolean fException = false;
                
                if ((mem.GetWordEx(addrCode) & OP_LINK_MASK) == OP_LINK) {
                    addrPrevFrame = addrFrame;
                    addrPrevCode = mem.GetLongEx(addrStack);
                    
                    // BUGBUG: Hack to detect an RTE (exception) frame as opposed to an RTS (call) frame.
                    // Similar hack exists in Disarm(), to determine what kind of frame a BPFLAG_WATCH breakpoint has encountered -JP
                    if ((addrPrevCode & 0xf800ff00) == 0x20001000) {
                        fException = true;
                        addrPrevCode = mem.GetLongEx(addrStack+2);
                    }
                }
                else {
                    addrPrevFrame = mem.GetLongEx(addrFrame);
                    addrPrevCode = mem.GetLongEx(addrFrame+4);
                    
                    // BUGBUG: Hack to detect an RTE (exception) frame as opposed to an RTS (call) frame.
                    // Similar hack exists in Disarm(), to determine what kind of frame a BPFLAG_WATCH breakpoint has encountered -JP
                    if ((addrPrevCode & 0xf800ff00) == 0x20001000) {
                        fException = true;
                        addrPrevCode = mem.GetLongEx(addrFrame+6);
                    }
                }

                if (addrCodeLimit != 0) {
                    if (addrPrevCode < addrCodeBase || addrPrevCode >= addrCodeLimit) {
                        // Here's where we would scan the stack backwards for a
                        // value that looked like it might be a valid return address.....
                        break;                  // for now, we give up
                    }
                }
                
                // Start looking backwards from addrPrevCode for the address of the last call
                // (the jsr, the bsr, the trap, or whatever).
                
                if (fVerbose) {
                    int cWords = 3;
                    while (cWords > 0 && addrPrevCode != 0) {
                        addrPrevCode -= 2;
                        int opCall = mem.GetWordEx(addrPrevCode);

                        if (fVerbose && opCall == OP_JSR_PC_REL) {
                            int addrFunction = addrPrevCode + mem.GetWordEx(addrPrevCode+2) + 2;
                            sResult = sResult + DumpFunctionTraps(addrFunction, addrCode);
                            break;
                        }

                        if ((opCall == OP_STOP) ||
                            (opCall & OP_JSR_MASK) == OP_JSR ||
                            (opCall & OP_BSR_MASK) == OP_BSR ||
                            (opCall & OP_TRAP_0xF_MASK) == OP_TRAP_0xF) {
                            break;
                        }
                        cWords--;
                    }
                    if (cWords == 0 && !fException) // failed to find a previous call
                        break;
                }
                
                if (addrFrame >= addrPrevFrame || addrFrame == addrPrevCode || addrCode == addrPrevCode)
                    break;                      // BUGBUG: exit on any other easily detected nonsensical conditions -JP

                addrStack = addrFrame+8;
                addrFrame = addrPrevFrame;
                addrCode = addrPrevCode;
            }
        }
        catch (Throwable e) {
            sResult = sResult + "\r\nerror in frame: " + DumpHex(addrFrame);
        };
                                                           
        return sResult;
    }


    String TraceCommand(StringTokenizer st, char chPrefix)
    {
        if (!cpu.IsHalted())
            return "(already running)";
        
        int i = -1;
        int cStep = 1;
        char[] achPrefix = new char[1];
        achPrefix[0] = chPrefix;
        String sPrefix = new String(achPrefix);
        boolean fPTrace = (chPrefix == 't' || chPrefix == 'p');
        
        fQuiet = false;
	
	    if (st.hasMoreTokens()) {
            String sVal = st.nextToken();
            
            if (sVal.equals("?"))
                return HelpCommand(null, sPrefix, asTraceCommands);
            
            if (sVal.charAt(0) == 'i') {
                fQuiet = true;
                if (sVal.length() > 1)
                    sVal = sVal.substring(1);
                else
                    sVal = st.hasMoreTokens()? st.nextToken() : null;
            }
            
            if (sVal != null) {
                cStep = GetDecimalValue(sVal);
                if (cStep <= 0)
                    return InvalidExpression(sVal);
            }
	    }
        
        if (fPTrace) {
            int opCall = mem.GetWordEx(cpu.pc);
            if ((opCall & OP_JSR_MASK) == OP_JSR ||
                (opCall & OP_BSR_MASK) == OP_BSR ||
                (opCall & OP_TRAP_MASK) == OP_TRAP /* && opCall != OP_TRAP_0xF */) {
                Disassemble(cpu.pc, false);     // call Disassemble() to compute the 'pc' of the next instruction
                i = SetBP(pc, BPFLAG_TEMP);     // then create a temporary breakpoint at that 'pc'
            }
        }

        CopyFlags(cpu);
        
        String s = null;
        
        if (i >= 0 || i == -2) {                // if SetBP was used to set a temp breakpoint (or it found one already set)...
            s = "(stepping)";
            if (!Break(cpu.pc, false)) {
                fTraceGo = true;
                cpu.Go();                       // we'll just let the cpu "go" and get control back via the temp breakpoint
                return s;                       // BUGBUG: should we append emul.GetTextMessage() output here too? (use emul.GetTextMessage() instead of GetDebuggerMessage(), since no CR/LF is needed afterward)
            }
            fGoTrace = true;                    // this notes that we wanted to "go" (for ptrace), but were forced to trace instead
        }
        
        if (fileCompare != null) {
            int cSuccess = 0;
            while (cStep > 0) {
                cpu.Step(1);
                if (fileCompare != null) {
                    String sError = CompareRegs();
                    if (sError != null) {
                        s = "miscompare after " + cSuccess + " instructions: " + sError + "\r\n" + GetTraceMessage(false);
                        break;
                    }
                }
                cSuccess++;
                cStep--;
            }
            if (cStep == 0)
                s = GetTraceMessage(fQuiet);
        }        
        else {
            if (cpu.Step(cStep)) {
                
                // We check the output string for null instead of !fGoTrace, because fGoTrace gets cleared by Step() anyway;
                // we just want to avoid displaying a trace message here, because we'll display one when we hit the temp breakpoint.
                
                if (s == null)
                    s = GetTraceMessage(fQuiet);
            }
            else {
                fTraceGo = true;
                s = "(tracing)";
            }
        }
        
        return s;
    }
    
    
    String UnassembleCommand(StringTokenizer st)
    {
        int addr = addrCodeDump;
        int cLines = 8;

        if (st.hasMoreTokens()) {
            Integer intVal;
            int iLines = -1;
            String s = st.nextToken();
            if (s.charAt(0) != 'l' || !Character.isDigit(s.charAt(1))) {
                iLines = 0;
                intVal = GetIntegerValue(s);
                if (intVal == null)
                    return InvalidExpression(s);
                addr = intVal.intValue();
                s = st.hasMoreTokens()? st.nextToken() : null;
            }
            if (s != null) {
                if (s.charAt(0) == 'l' && Character.isDigit(s.charAt(1)))
                    iLines = 1;
                if (iLines >= 0) {
                    intVal = GetIntegerValue(s.substring(iLines));
                    if (intVal == null)
                        return InvalidExpression(s);
                    cLines = intVal.intValue();
                }
            }
        }
        
        String sResult = "";
        if (addr != addrCodeDump)       // put a visual break between discontiguous dumps
            sResult = "...\r\n";
        
        for (int i=0; i<cLines; i++) {
            sResult = sResult + DumpInstruction(addr, DUMPFLAGS_NONE) + (i < cLines-1 && !fError? "\r\n" : "");
            if (fError)
                break;
            addr = addrCodeDump;
        }
        return sResult;
    }
    
   
    String VerbosityCommand(StringTokenizer st)
    {
        if (st.hasMoreTokens()) {
            String s = st.nextToken();
            if (s.equals("?"))
                return HelpCommand(null, "v", asVerbosityCommands);
            int i;
            Integer intLevel = GetIntegerValue(s);
            if (intLevel == null || (i = intLevel.intValue()) < 0 || i > Emulator.MSGLEVEL_VERBOSE)
                return InvalidExpression(s);
        
            Emulator.fMsgLevel = i;
        }
        return "verbosity level: " + Emulator.fMsgLevel;
    }


    String WatchCommand(StringTokenizer st, String sError)
    {
        if (!st.hasMoreTokens())
            return sError;
        
        String sCommand = st.nextToken();
        
        if (sCommand.length() == 0 || sCommand.charAt(0) == '?')
            return HelpCommand(null, "w", asWatchCommands);
        
        if (sCommand.charAt(0) == 'a') {
            fBPAPI = fWatchAPI = (fWatchAPI? false : true);
            return "API watchpoint " + (fWatchAPI? "on" : "off");
        }
        
	    if (sCommand.charAt(0) == 'c')
            return WatchCompareCommand(st);

        if (sCommand.charAt(0) == 'f')
            return BPSetCommand(st, BPFLAG_WATCH);
        
        if (sCommand.charAt(0) == 'h') {
            addrWatch = 0;
            cpu.fCPU ^= CPU_WATCHHW;
            if (st.hasMoreTokens()) {
                Integer iAddr = GetAddressValue(st.nextToken());
                if (iAddr != null)
                    addrWatch = iAddr.intValue();
            }
            if (addrWatch != 0)
                return "watching hardware address: " + GetAddressSymbol(addrWatch, -1);
            else
                return "watching hardware " + ((cpu.fCPU & CPU_WATCHHW) != 0? "on" : "off");
        }
        
        if (sCommand.charAt(0) == 'i') {
            cpu.fCPU ^= CPU_WATCHALL;
            return "watching instructions " + ((cpu.fCPU & CPU_WATCHALL) != 0? "on" : "off");
        }
        
        if (sCommand.charAt(0) == 'l')
            return WatchLogCommand(st);

        return sError;
    }
    
    
    String WatchCompareCommand(StringTokenizer st)
    {
        if (fileCompare != null) {
            fileCompare.Close();
            fileCompare = null;
        }
        
        if (st != null && st.hasMoreTokens()) {
            
            fileCompare = new FileStream(st.nextToken(), FileStream.FILETYPE_NONE, FileStream.FILEOPEN_LOCAL | FileStream.FILEOPEN_READ);
            int iStatus = fileCompare.GetStatus();
            
            if (iStatus != FileStream.FILESTAT_OK)
                return "error opening " + fileCompare.GetFullName() + " (" + iStatus + ")";
            
            fileCompare.ReadString();   // BUGBUG: throw away the first line -JP
            
            String sError = CompareRegs();
            if (sError != null) {
                fileCompare.Close();
                fileCompare = null;
                return "compare disabled: " + sError;
            }
            
            return "compare enabled";
        }
        
        fileCompare = null;
        
        return "compare disabled";
    }


    String WatchLogCommand(StringTokenizer st)
    {
        if (fileWatchLog != null) {
            fileWatchLog.Close();
            fileWatchLog = null;
            cpu.fCPU &= ~(CPU_WATCHHW | CPU_WATCHALL);
        }
        
        if (st != null && st.hasMoreTokens()) {
            
            fileWatchLog = new FileStream(st.nextToken(), FileStream.FILETYPE_NONE, FileStream.FILEOPEN_LOCAL | FileStream.FILEOPEN_WRITE);
            int iStatus = fileWatchLog.GetStatus();
            
            if (iStatus != FileStream.FILESTAT_OK)
                return "error opening " + fileWatchLog.GetFullName() + " (" + iStatus + ")";
            
            return "watch log enabled";
        }
        fileWatchLog = null;
        return "watch log disabled";
    }


    String GetDebuggerMessage()
    {
        String s = emul.GetTextMessage();
        if (s.length() > 0)
            s = s + "\r\n";
        return s;
    }


    String GetTraceMessage(boolean fQuiet)
    {
        if (sTraceMacro != null && !sTraceMacro.equalsIgnoreCase("r"))
            return ParseCommand(sTraceMacro);
            
        // BUGBUG: Consider a mode where we also display just the modified regs -- similar to how we handle the flags -JP
        return GetDebuggerMessage() + DumpRegs(!fQuiet) + DumpInstruction(cpu.pc, DUMPFLAGS_MOD);
    }


    void ArmBP(int i)
    {
        if ((aBPFlags[i] & (BPFLAG_SET | BPFLAG_ARMED | BPFLAG_DISABLED)) == BPFLAG_SET) {
            if ((aBPFlags[i] & (BPFLAG_API | BPFLAG_READ | BPFLAG_WRITE)) == 0) {
                aBPWords[i] = (short)mem.GetWordEx(aBPAddrs[i]);
                mem.SetWordEx(aBPAddrs[i], OP_MYBREAKPOINT);
            }
            aBPFlags[i] |= BPFLAG_ARMED;
        }
    }


    boolean DisarmBP(int i)
    {
        if ((aBPFlags[i] & BPFLAG_ARMED) != 0) {
            if ((aBPFlags[i] & (BPFLAG_API | BPFLAG_READ | BPFLAG_WRITE)) == 0)
                mem.SetWordEx(aBPAddrs[i], aBPWords[i]);
            aBPFlags[i] &= ~BPFLAG_ARMED;
            return true;
        }
        return false;
    }


    boolean ClearBP(int i)
    {
        if (i >= 0 && i < aBPFlags.length) {
            if (aBPFlags[i] != 0) {
                DisarmBP(i);
                aBPFlags[i] = 0;
                return true;
            }
        }
        return false;
    }


    boolean DisableBP(int i)
    {
        if (i >= 0 && i < aBPFlags.length) {
            if ((aBPFlags[i] & BPFLAG_SET) != 0) {
                aBPFlags[i] |= BPFLAG_DISABLED;
                return true;
            }
        }
        return false;
    }


    boolean EnableBP(int i)
    {
        if (i >= 0 && i < aBPFlags.length) {
            if ((aBPFlags[i] & BPFLAG_DISABLED) != 0) {
                aBPFlags[i] &= ~BPFLAG_DISABLED;
                return true;
            }
        }
        return false;
    }


    String ListBPs()
    {
        int cBPs = 0;
        String sResult = "";
        
        if (fBPAPI) {
            sResult = sResult + "API breakpoint set";
            cBPs++;
        }
        for (int i=0; i<aBPFlags.length; i++) {
            if ((aBPFlags[i] & BPFLAG_SET) != 0) {
                if (cBPs++ > 0)
                    sResult = sResult + "\r\n";
                if ((aBPFlags[i] & BPFLAG_READ) != 0)
                    sResult = sResult + "br";
                else
                if ((aBPFlags[i] & BPFLAG_WRITE) != 0)
                    sResult = sResult + "bw";
                else
                if ((aBPFlags[i] & BPFLAG_WATCH) != 0)
                    sResult = sResult + "wp";
                else
                    sResult = sResult + "bp";
                sResult = sResult + i + ": " + ((aBPFlags[i] & BPFLAG_DISABLED) == 0? "*" : " ") + GetBPName(i);
                if ((aBPFlags[i] & (BPFLAG_TEMP | BPFLAG_UNWATCH)) != 0)
                    sResult = sResult + " (temp)";
            }
        }
        if (cBPs == 0)
            sResult = "no breakpoints set";
        return sResult;
    }


    String GetBPName(int i)
    {
        if (i < 0 || i >= aBPFlags.length || (aBPFlags[i] & BPFLAG_SET) == 0)
            return "unknown breakpoint";
        
        if ((aBPFlags[i] & BPFLAG_API) == 0) {
            String sSymbol = GetAddressSymbol(aBPAddrs[i], -2);
            return DumpHex(aBPAddrs[i]) + (sSymbol.length() > 0? ": " + sSymbol : "");
        }

        return PalmOSTypes.GetAPIName(aBPAddrs[i]);
    }


    int SetBP(int addr, int flags)
    {
        int i;
        
        if ((flags & BPFLAG_API) != 0)
            i = FindAPIBP(addr);
        else if ((flags & (BPFLAG_READ | BPFLAG_WRITE)) != 0)
            i = FindDataBP(addr, 1, (flags & (BPFLAG_READ | BPFLAG_WRITE)) | BPFLAG_SET);
        else
            i = FindCodeBP(addr);
        
        if (i >= 0)
            return -2;  // "breakpoint " + i + " already set";
        
        i = FindUnusedBP();
        if (i >= 0) {
            aBPAddrs[i] = addr;
            aBPFlags[i] = (BPFLAG_SET | flags);
        }
        return i;
    }


    int FindUnusedBP()
    {
        for (int i=0; i<aBPFlags.length; i++) {
            if (aBPFlags[i] == 0)
                return i;
        }
        return -1;
    }


    int FindCodeBP(int addr)
    {
        for (int i=0; i<aBPFlags.length; i++) {
            if ((aBPFlags[i] & (BPFLAG_SET | BPFLAG_API)) == BPFLAG_SET && aBPAddrs[i] == addr)
                return i;
        }
        return -1;
    }


    int FindDataBP(int addr, int length, int flags)
    {
        int flagsMask = flags;
        
        // If BPFLAG_SET is passed, then we're just looking to see if a matching breakpoint is already set.
        //
        // If BPFLAG_SET is not passed, then we need to set it along with BPFLAG_DISABLED, because we're looking
        // to see if a matching breakpoint is both set *and* enabled.
        
        if ((flags & BPFLAG_SET) == 0) {
            flags |= BPFLAG_SET;
            flagsMask |= (BPFLAG_SET | BPFLAG_DISABLED);
        }
        
        for (int i=0; i<aBPFlags.length; i++) {
            if ((aBPFlags[i] & flagsMask) == flags) {
                if (aBPAddrs[i] >= addr && aBPAddrs[i] < addr+length)
                    return i;
            }
        }
        return -1;
    }


    int FindAPIBP(int iTrap)
    {
        for (int i=0; i<aBPFlags.length; i++) {
            if ((aBPFlags[i] & (BPFLAG_SET | BPFLAG_API)) == (BPFLAG_SET | BPFLAG_API) && aBPAddrs[i] == iTrap)
                return i;
        }
        return fBPAPI? -2 : -1;
    }


    String CompareRegs()
    {
        String sError;
        String[] sLines = new String[4];
        
        // Pre-read all the fileCompare lines, to avoid getting
        // out of sync if/when we return an error due to a miscompare

        for (int i=0; i<sLines.length; i++) {
            sLines[i] = fileCompare.ReadString();
            if (sLines[i] == null)
                return "end of compare file";
        }
        fileCompare.ReadString();       // skip the blank line too

        sError = CompareRegSet(sLines[0], 'D', cpu.d, 0, 4);
        if (sError != null)
            return sError;
        
        sError = CompareRegSet(sLines[1], 'D', cpu.d, 4, 4);
        if (sError != null)
            return sError;
        
        sError = CompareRegSet(sLines[2], 'A', cpu.a, 0, 4);
        if (sError != null)
            return sError;
        
        sError = CompareRegSet(sLines[3], 'A', cpu.a, 4, 4);
        if (sError != null)
            return sError;
        
        sError = CompareReg(sLines[3], 48, 'P', 'C', cpu.pc);
        if (sError != null)
            return sError;
        
        String sFlags = sLines[3].substring(60, 65);
        if (!sFlags.equals(DumpFlags()))
            return "flags expected: " + sFlags;
        
        return null;                    // no error string means success
    }
    

    String CompareRegSet(String sLine, char chRegs, int[] aRegs, int iRegs, int cRegs)
    {
        int iChar = 0;
        if (sLine.charAt(0) == '>')     // hack to avoid parsing the old debugger's prompt
            iChar++;
        for (; cRegs > 0; cRegs--) {
            String sError = CompareReg(sLine, iChar, chRegs, (char)('0' + iRegs), aRegs[iRegs++]);
            if (sError != null)
                return sError;
            iChar += 12;
        }
        return null;
    }
    

    String CompareReg(String sLine, int iChar, char chReg1, char chReg2, int vReg)
    {
        if (sLine.charAt(iChar++) != chReg1 || sLine.charAt(iChar++) != chReg2 || sLine.charAt(iChar++) != '=')
            return "malformed data: " + sLine;
        
        int value = 0;
        String sHiWord = sLine.substring(iChar, iChar+4);
        String sLoWord = sLine.substring(iChar+4, iChar+8);
        
        try {
            // Convert the value a word at a time, to avoid integer overflow in parseInt()
            value = (Integer.parseInt(sHiWord, 16) << 16) | (Integer.parseInt(sLoWord, 16));
        } catch (Throwable e) {         // catch NumberFormatException, if any
            return "malformed data: " + sHiWord + sLoWord;
        };
         
        if (value != vReg) {
            char[] ach = new char[2];
            ach[0] = chReg1;
            ach[1] = chReg2;
            String s = new String(ach);
            return s + " expected: " + sLine.substring(iChar, iChar+8);
        }
        
        return null;
    }
    

    int CountExecuted()
    {
        int cOps = 0;
        if (aiCodeHistory != null) {
            int cWords = (addrCodeLimit - addrCodeBase)/2;
            for (int i=0; i<cWords; i++)
                if ((aiCodeHistory[i] & CODEHIST_COUNT_MASK) != 0)
                    cOps++;
        }
        return cOps;
    }

    
#if DEBUG
    static final String aCPUBits[] = {
      //"STARTED",      // 0x00000001
        "RUNNING",      // 0x00000002
        "WAITING",      // 0x00000004
        "KILLED",       // 0x00000008
        "FROZEN",       // 0x00000010
        "SUSPENDED",    // 0x00000020
        "TRACING",      // 0x00000040
        "STEPPING",     // 0x00000080
        "STOPPED",      // 0x00000100
        "WATCHHW",      // 0x00000200
        "WATCHALL",     // 0x00000400
        "BREAKPOINT",   // 0x00000800
        "EXCEPTION",    // 0x00001000
        "CHECKINTS",    // 0x00002000
        "CHECKLCD",     // 0x00004000
        "TRACEONSTOP",  // 0x00008000
        "FREEZEONSTOP", // 0x00010000
        "INJECTING",    // 0x00020000
        "PAGING",       // 0x00040000
    };
#endif
    

    String DumpStatusInfo()
    {
        String sResult = "";
        
#if DEBUG        
        int mask = 0x2;
        int bits = cpu.fCPU;
        sResult = sResult + "CPU flags:";
        
        for (int i=0; i<aCPUBits.length; i++) {
            if ((bits & mask) != 0)
                sResult = sResult + " " + aCPUBits[i];
            mask <<= 1;
        }
        sResult = sResult + "\r\n";
#endif
        
        sResult = sResult + "open files: " + FileStream.cFileTotal + "  interrupts: " + cpu.cInterrupts + "\r\n";
		sResult = sResult + "paging: " + cpu.cUnpagedROMBanks + " unpaged banks out of " + cpu.cPagedROMBanks + " pageable\r\n";
        
        int cExecuted = CountExecuted();
        int cCycles = (cpu.cCycles == 0? 0 : cpu.cCycles + cpu.cOpcodes/2 - 1);
        int cCyclesDebug = (cpu.cCyclesDebug == 0? 0 : cpu.cCyclesDebug + cpu.cOpcodes/2 - 1);
        int cWords = (addrCodeLimit - addrCodeBase)/2;
        
        sResult = sResult + "coverage: " + Integer.toString(((cExecuted+cWords/200)*100)/(cWords == 0? 1 : cWords)) + "% (" + cExecuted + " code words, " + cWords + " total: " + DumpHex(addrCodeBase) + "-" + DumpHex(addrCodeLimit) + ")\r\n";
        sResult = sResult + "executed: " + cpu.cOpcodes + " (" + cpu.cCycles + " cycles, " + (cCycles/(cpu.cOpcodes == 0? 1 : cpu.cOpcodes)) + "/inst, "  + cpu.cCyclesDebug + " cyclesDebug, " + (cCyclesDebug/(cpu.cOpcodes == 0? 1 : cpu.cOpcodes)) + "/inst)";
        
        if (cpu.pcTrap != 0)
            sResult = sResult + "\r\nlast trap:\r\n" + DumpInstruction(cpu.pcTrap, DUMPFLAGS_NONE);

        return sResult;
    }
    
    
    String DumpFaultInfo()
    {
        String sResult = "";
        
        if (fFault)
            sResult = sResult + "Fault @" + DumpHex(addrFault) + (sFault != null? (" (" + sFault + ")") : "") + "\r\n";
        
        if ((cpu.fCPU & CPU_BREAKPOINT) != 0)
            sResult = sResult + "Breakpoint hit @" + DumpHex(cpu.pc) + "\r\n";
        
        return sResult;
    }
    

    String DumpFlags()
    {
        char[] ach = new char[5];
        ach[0] = (cpu.GetFlagX() != 0)? 'X' : 'x';
        ach[1] = (cpu.GetFlagN() != 0)? 'N' : 'n';
        ach[2] = (cpu.GetFlagZ() != 0)? 'Z' : 'z';
        ach[3] = (cpu.GetFlagV() != 0)? 'V' : 'v';
        ach[4] = (cpu.GetFlagC() != 0)? 'C' : 'c';
        return new String(ach);
    }


    String DumpFlagsModified()
    {
        int f;
        char[] ach = {'-', '-', '-', '-', '-'};
        if ((f = cpu.GetFlagX()) != GetFlagX())
            ach[0] = (f != 0)? 'X' : 'x';
        if ((f = cpu.GetFlagN()) != GetFlagN())
            ach[1] = (f != 0)? 'N' : 'n';
        if ((f = cpu.GetFlagZ()) != GetFlagZ())
            ach[2] = (f != 0)? 'Z' : 'z';
        if ((f = cpu.GetFlagV()) != GetFlagV())
            ach[3] = (f != 0)? 'V' : 'v';
        if ((f = cpu.GetFlagC()) != GetFlagC())
            ach[4] = (f != 0)? 'C' : 'c';
        return new String(ach);
    }


    /*  DumpFunctionTraps(addr)
     *
     *  ENTRY
     *      addr == address of function
     *      addrLimitMin == lower limit of end of function (upper limit not known)
     *
     *  EXIT
     *      String containing all the trap instructions inside the function
     */
    String DumpFunctionTraps(int addr, int addrLimitMin)
    {
        int cLines = 0;
        int cMax = 256;
        String sResult = "";
        
        while (addr <= addrLimitMin || cMax-- > 0) {
            String sIns = Disassemble(addr, false);
            String sOp = sIns.substring(26, 66).trim();
            if (cLines == 0 || sOp.startsWith("TRAP") || sOp.startsWith("RTS")) {
              //if (cLines == 0)
              //    sResult = sResult + " and contained within:";
                sResult = sResult + "\r\n" + "        " + sIns.substring(0,10) + sOp;
                cLines++;
            }
            // addrCodeDump should never be less than or equal to the current address,
            // but let's just check anyway, to make sure we're never going backwards....
            if (sOp.startsWith("RTS") || addrCodeDump <= addr)
                break;
            addr = addrCodeDump;
        }
        return sResult;
    }


    String DumpInstruction(int addr, int iFlags)
    {
        String sResult = "";
        String sSymbol = GetAddressSymbol(addr, 0);
        
        if (sSymbol != null)
            sResult = sSymbol + ":\r\n";
        
        // Dump the instruction at the specified address, including EA if addr == PC
        
        sResult = sResult + Disassemble(addr, addr == cpu.pc);
        if (iFlags > DUMPFLAGS_NONE)
            sResult = sResult + (iFlags == DUMPFLAGS_ALL? DumpFlags() : DumpFlagsModified());
        
        return sResult;
    }


    static final String aInterruptBits[] = {
        "SPIM",         // 0x00000001
        "TMR2",         // 0x00000002
        "UART",         // 0x00000004
        "WDT ",         // 0x00000008
        "RTC ",         // 0x00000010
        "RSVD",         // 0x00000020
        "KB  ",         // 0x00000040
        "PWM ",         // 0x00000080
        "INT0",         // 0x00000100
        "INT1",         // 0x00000200
        "INT2",         // 0x00000400
        "INT3",         // 0x00000800
        "INT4",         // 0x00001000
        "INT5",         // 0x00002000
        "INT6",         // 0x00004000
        "INT7",         // 0x00008000
        "IRQ1",         // 0x00010000
        "IRQ2",         // 0x00020000
        "IRQ3",         // 0x00040000
        "IRQ6",         // 0x00080000
        "PEN ",         // 0x00100000
        "SPIS",         // 0x00200000
        "TMR1",         // 0x00400000
        "IRQ7",         // 0x00800000
    };

    
    String DumpInterruptBits(int addr, boolean fOn)
    {
        int mask = 1;
        int bits = mem.GetLongEx(addr);
        String sResult = " (" + DumpHex(addr) + "=" + DumpHex(bits) + "):";
        
        for (int i=0; i<aInterruptBits.length; i++) {
            if (!fOn && (bits & mask) == 0 || fOn && (bits & mask) != 0)
                sResult = sResult + "\r\n" + aInterruptBits[i] + " " + DumpHex(mask);
            mask <<= 1;
        }
        return sResult;
    }


    String DumpMemoryBitmap(int addr, int cCols, int cRows, int offCols, int offRows)
    {
        String sResult = "";
        int iColStart = 0, cbRow = ((cCols+7) >> 3);
        
        if (offRows > 0) {
            addr += cbRow * offRows;
            cRows -= offRows;
        }
        
        if (offCols > 0) {
            addr += offCols >> 3;
            cCols -= offCols;
            iColStart = offCols & 0x7;
        }
        
        try {
        while (cRows-- > 0) {
            int iByte = 0;
            int iCol = iColStart;
            int bMask = 0x80 >> iColStart;
            sResult = sResult + DumpHex(addr) + ": ";
            while (iCol < cCols) {
                int b = mem.GetByteEx(addr + iByte++);
                for (; iCol<cCols && bMask!=0; bMask>>>=1,iCol++) {
                    if (iCol < 64)
                        sResult = sResult + ((b & bMask) != 0? "*" : ".");
                }
                bMask = 0x80;
            }
            if (cRows > 0)
                sResult = sResult + "\r\n";
            addr += cbRow;
        }
        } catch (Throwable e) {sResult = sResult + sError;}
        
        return sResult;
    }
    
    
    String DumpMemoryBlock(int addr, int type, int cb)
    {
        if (cb == 0)
            return "no data";
                
        String sResult = "";
	
        if (addr != addrDataDump && cb > 16)    // put a visual break between discontiguous dumps
            sResult = "...\r\n";
        
        int i = 0;
        int cch = 16;
        char[] ach = new char[cch+2];
        
        ach[cch] = '\r';
        ach[cch+1] = '\n';
        
        typeDataDump = type;

        try {
        while (cb > 0) {
            if (i == 0)
                sResult = sResult + DumpHex(addr) + ": ";
            switch (type) {
            case 1:
                sResult = sResult + DumpHex(mem.GetByteEx(addr+i), 2) + " ";
                break;
            case 2:
                sResult = sResult + DumpHex(mem.GetWordEx(addr+i), 4) + " ";
                break;
            case 4:
                sResult = sResult + DumpHex(mem.GetLongEx(addr+i), 8) + " ";
                break;
            }
            cb -= type;
            i += type;
            if (i == cch) {
                for (i=0; i<cch; i++) {
                    ach[i] = (char)(mem.GetByteEx(addr+i) & 0xff);
                    if ((byte)ach[i] < 0x20)
                        ach[i] = '.';
                }
                sResult = sResult + " " + new String(ach, 0, cb > 0? cch+1 : cch);
                addrDataDump = (addr += cch);
                i = 0;
            }
        }
        } catch (Throwable e) {sResult = sResult + sError;}
        
        return sResult;
    }
    
    
    String DumpMemoryHistory(int addr)
    {
        // Look at aiDataHistory....
        
        // The low 16 bits of the corresponding integer in aiDataHistory contain the 16-bit
        // offset of the last pc to access, and the high 15 bits contain an access count,
        // which stops counting once it has overflowed.  The highest bit, bit 31, is a flag
        // that's set once the byte has been initialized (ie, written once).
        
        String sResult = "";
        
        if (aiDataHistory != null && addr >= addrDataBase && addr < addrDataLimit) {
            int iHist = (addr-addrDataBase)/2;
            int iData = aiDataHistory[iHist];
            if ((iData & 0xffff0000) != 0) {
                sResult = Integer.toString((iData >> 16) & 0x7fff) + " accesses " + (iData < 0? "(written)" : "(never written)");
                int addrCode = (iData & 0xffff) + addrCodeBase;
                sResult = sResult + "\r\n" + Disassemble(addrCode, false);
            }
        }
        else
            return "no memory history";
        
        return sResult;
    }
    

    String DumpRegs(boolean fVerbose)
    {
        String s = DumpFaultInfo();

        if (!fVerbose)
            return s;
        
        return s + DumpRegSet('D', cpu.d) + "\r\n" + DumpRegSet('A', cpu.a) + "SR=" + DumpHex(cpu.GetFlags(),4) + " IC=" + cpu.cOpcodes + "\r\n";
    }


    String DumpRegSet(char ch, int[] ar)
    {    
        String sResult = "";
        for (int i=0; i<ar.length; i++) {
            sResult = sResult + DumpReg(ch, i, ar[i]) + ((i != 3)? " " : "\r\n");
        }
        return sResult;
    }
    
    
    String DumpReg(String sReg, int r)
    {
        return DumpReg(sReg.charAt(0), sReg.charAt(1), r);
    }
    

    String DumpReg(char ch, int i, int r)
    {
        char[] ach = new char[3];
        ach[0] = ch;
        ach[1] = (char)(i < 10? (i + '0') : i);
        ach[2] = '=';
        String s = new String(ach);
        return s + DumpHex(r);
    }
    

    String DumpTraceHistory(int addr, int length)
    {
        // Go back through the aiCodeHistory, dumping the addresses that got us there
        
        int i = 0;
        int[] aAddr = new int[length+1];
        
        if (aiCodeHistory != null) {
            while (i < aAddr.length) {
                aAddr[i++] = addr;
                if ((addr & 0x1) == 0 && addr >= addrCodeBase && addr < addrCodeLimit) {
                    int iHist = (addr-addrCodeBase)/2;
                    int iCode = aiCodeHistory[iHist];
                    if ((iCode & CODEHIST_COUNT_MASK) == 0)
                        break;
                    int addrPrev = (iCode & CODEHIST_ADDR_MASK) + addrCodeBase;
                    if (addrPrev != addr) {
                        addr = addrPrev;
                        continue;
                    }
                }
                break;
            }
        }
        if (aiCodeHistory == null || i < 2)
            return "no trace history";
        
        String sResult = "";
        if (i >= 2 && aAddr[i-2] != addrCodeDump)       // put a visual break between discontiguous dumps
            sResult = "...\r\n";
        
        if (i >= 1)
            addr = aAddr[--i];
        
        while (--i >= 0)
            sResult = sResult + Disassemble(aAddr[i], false) + (i > 0? "\r\n" : "");
        
        addrTraceInfo = addr;
        
        return sResult;
    }


    String PadString(String s, int cch)
    {
        if (s == null)
            s = "";
        cch -= s.length();
        while (cch > 0) {
            s = s + "        ".substring(cch >= 8? 0 : 8-cch);
            cch -= (cch >= 8)? 8 : cch;
        }
        if (cch < 0)
            s = s.substring(0, s.length()+cch);
        return s;                                              
    }


    boolean IsValidReg(String sReg)
    {
        return GetRegValue(sReg) != null;
    }


    Integer GetRegValue(String sReg)
    {
        int length = sReg.length();
        
        char ch1 = length > 0? sReg.charAt(0) : 0;
        char ch2 = length > 1? sReg.charAt(1) : 0;
        char ch3 = length > 2? sReg.charAt(2) : 0;
        if (ch1 == '%') {
            ch1 = ch2;
            ch2 = ch3;
            ch3 = length > 3? sReg.charAt(3) : 0;
        }
        if (ch2 >= '0' && ch2 <= '7' && !Character.isLetterOrDigit(ch3)) {
            if (ch1 == 'A' || ch1 == 'a')
                return new Integer(cpu.a[ch2-'0']);
            if (ch1 == 'D' || ch1 == 'd')
                return new Integer(cpu.d[ch2-'0']);
        }
        if ((ch1 == 'P' || ch1 == 'p') && (ch2 == 'C' || ch2 == 'c'))
            return new Integer(cpu.pc);
        if ((ch1 == 'S' || ch1 == 's') && (ch2 == 'P' || ch2 == 'p'))
            return new Integer(cpu.a[7]);
                          
        return null;
    }


    int GetDecimalValue(String sVal)
    {
        int i;
        
        try {
            i = Integer.parseInt(sVal);
        }
        catch (NumberFormatException e) {i = -1;}
        
        return i;
    }
    
        
    Integer GetIntegerValue(String sVal)
    {
        // Some limited expression evaluation (simple right-to-left precedence)
        int iSub, iOp = 0;
        
        iSub = sVal.indexOf('+');
        if (iSub > 0)
            iOp = 1;
        else {
            iSub = sVal.indexOf('-');
            if (iSub > 0)
                iOp = 2;
            else {
                iSub = sVal.indexOf('*');
                if (iSub > 0)
                    iOp = 3;
                else {
                    iSub = sVal.indexOf('/');
                    if (iSub > 0)
                        iOp = 4;
                }
            }
        }
        
        if (iOp != 0) {
            Integer intVal1 = GetIntegerValue(sVal.substring(0, iSub));
            Integer intVal2 = GetIntegerValue(sVal.substring(iSub+1));
            if (intVal1 != null && intVal2 != null) {
                int i1 = intVal1.intValue();
                int i2 = intVal2.intValue();
                switch(iOp) {
                case 1:
                    i1 += i2;
                    break;
                case 2:
                    i1 -= i2;
                    break;
                case 3:
                    i1 *= i2;
                    break;
                case 4:
                    if (i2 == 0)
                        return null;
                    i1 /= i2;
                    break;
                }
                return new Integer(i1);
            }
        }
        // End of limited expression evaluation
        
        Integer intVal = GetRegValue(sVal);
        
        if (intVal == null) {
            boolean fNegate = false;
            boolean fOverflow = false;
        
            if (!sVal.startsWith("0x")) {
                if (sVal.startsWith("-0x")) {
                    fNegate = true;
                    sVal = sVal.substring(1);
                }
                else if (!sVal.endsWith(".")) {
                    // Here's the right place to call GetAddressValue, in case the string is an address symbol;
                    // prior to this, we were explicitly calling GetAddressValue in selected places where symbol support
                    // seemed to make sense, and having GetAddressValue simply call GetIntegerValue if it couldn't find a
                    // symbol.  But we've since decided that symbol support makes sense in so many places that we should
                    // invert that logic, and make GetAddressValue a worker function for GetIntegerValue's use only.
                    intVal = GetAddressValue(sVal);
                    if (intVal != null)
                        return intVal;
                    sVal = "0x" + sVal;
                }
                else
                    sVal = sVal.substring(0, sVal.length()-1);
            }
        
            if (sVal.startsWith("0x") && sVal.length() == 10) {
                StringBuffer sbVal = new StringBuffer(sVal);
                char ch = sbVal.charAt(2);
                if (ch >= '8' && ch <= '9') {
                    sbVal.setCharAt(2, (char)(ch - 8));
                    fOverflow = true;
                }
                else if (ch >= 'a' && ch <= 'f') {
                    sbVal.setCharAt(2, (char)(ch - 'a' + '2'));
                    fOverflow = true;
                }
                else if (ch >= 'A' && ch <= 'F') {
                    sbVal.setCharAt(2, (char)(ch - 'A' + '2'));
                    fOverflow = true;
                }
                sVal = sbVal.toString();
            }
            
            try {
                intVal = Integer.decode(sVal);
            }
            catch (NumberFormatException e) {return null;}

            if (fOverflow)
                intVal = new Integer(intVal.intValue() | 0x80000000);

            if (fNegate)
                intVal = new Integer(-intVal.intValue());
        }
        return intVal;
    }


    String GetIntegerValues(StringTokenizer st, int[] ai)
    {
        for (int i=0; i < ai.length; i++) {
            if (!st.hasMoreTokens())
                break;
            String sVal = st.nextToken();
            Integer intVal = GetIntegerValue(sVal);
            if (intVal == null)
                return sVal;    // error
            ai[i] = intVal.intValue();
        }
        return null;            // success
    }


    int SetRegValue(String sReg, int i)
    {
        char ch1 = sReg.charAt(0);
        char ch2 = sReg.charAt(1);
        if (ch2 >= '0' && ch2 <= '7') {
            if (ch1 == 'A' || ch1 == 'a')
                return cpu.a[ch2-'0'] = i;
            if (ch1 == 'D' || ch1 == 'd')
                return cpu.d[ch2-'0'] = i;
        }
        if ((ch1 == 'P' || ch1 == 'p') && (ch2 == 'C' || ch2 == 'c')) {
            fFault = false;
            return cpu.pc = i;
        }
        if ((ch1 == 'S' || ch1 == 's') && (ch2 == 'P' || ch2 == 'p'))
            return cpu.a[7] = i;
        return 0;
    }


    /*  All EAMode subclasses must implement the following abstract methods:
     *
     *  GetEAString: get effective address (ea) string
     */

    protected abstract class EAMode
    {
        int ea;
        String sPrefix;
        
        EAMode(String sPrefix) {
            if (sPrefix == null)
                this.sPrefix = "";
            else
                this.sPrefix = sPrefix;
        }
            
        abstract String GetEAString(int nnn);
        abstract int GetData();
    }
    
    
    protected class EAModeIllegal extends EAMode {
        EAModeIllegal() {
            super(null);
        }
        String GetEAString(int nnn) {
            return "???";
        }
        int GetData() {
            return 0;
        }
    }


    protected class EAModeDRegByte extends EAMode {
        EAModeDRegByte() {
            super("D");
        }
        String GetEAString(int nnn) {
            ea = nnn;
            return sPrefix + nnn + ".b";
        }
        int GetData() {
            return d[ea] & 0xff;
        }
    }
    protected class EAModeDRegWord extends EAMode {
        EAModeDRegWord() {
            super("D");
        }
        String GetEAString(int nnn) {
            ea = nnn;
            return sPrefix + nnn + ".w";
        }
        int GetData() {
            return d[ea] & 0xffff;
        }
    }
    protected class EAModeDRegLong extends EAMode {
        EAModeDRegLong() {
            super("D");
        }
        String GetEAString(int nnn) {
            ea = nnn;
            return sPrefix + nnn + ".l";
        }
        int GetData() {
            return d[ea];
        }
    }


    protected class EAModeARegWord extends EAMode {
        EAModeARegWord() {
            super("A");
        }
        String GetEAString(int nnn) {
            ea = nnn;
            return sPrefix + nnn + ".w";
        }
        int GetData() {
            return a[ea] & 0xffff;
        }
    }
    protected class EAModeARegLong extends EAMode {
        EAModeARegLong() {
            super("A");
        }
        String GetEAString(int nnn) {
            ea = nnn;
            sPrefix = "A";
            return sPrefix + nnn + ".l";
        }
        int GetData() {
            return a[ea];
        }
    }


    protected class EAModeAValByte extends EAMode {
        EAModeAValByte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ").b";
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAValWord extends EAMode {
        EAModeAValWord() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ").w";
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAValLong extends EAMode {
        EAModeAValLong() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ").l";
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAValIncByte extends EAMode {
        EAModeAValIncByte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ")+.b";
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAValIncWord extends EAMode {
        EAModeAValIncWord() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ")+.w";
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAValIncLong extends EAMode {
        EAModeAValIncLong() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn];
            return "(A" + nnn + ")+.l";
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAValDecByte extends EAMode {
        EAModeAValDecByte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn] - aByteInc[nnn];
            return "-(A" + nnn + ").b";
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAValDecWord extends EAMode {
        EAModeAValDecWord() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn] - 2;
            return "-(A" + nnn + ").w";
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAValDecLong extends EAMode {
        EAModeAValDecLong() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = a[nnn] - 4;
            return "-(A" + nnn + ").l";
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAValDispByte extends EAMode {
        EAModeAValDispByte() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = a[nnn] + i;
		    String s = (i != 0? GetSignedHexString(i) : "") + "(A" + nnn + ").b";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAValDispWord extends EAMode {
        EAModeAValDispWord() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = a[nnn] + i;
            String s = (i != 0? GetSignedHexString(i) : "") + "(A" + nnn + ").w";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAValDispLong extends EAMode {
        EAModeAValDispLong() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = a[nnn] + i;
            String s = (i != 0? GetSignedHexString(i) : "") + "(A" + nnn + ").l";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAValIndexByte extends EAMode {
        EAModeAValIndexByte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(a[nnn]);
            return GetIndexAddrString(nnn) + ".b";
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAValIndexWord extends EAMode {
        EAModeAValIndexWord() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(a[nnn]);
            return GetIndexAddrString(nnn) + ".w";
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAValIndexLong extends EAMode {
        EAModeAValIndexLong() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(a[nnn]);
            return GetIndexAddrString(nnn) + ".l";
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAbs16Byte extends EAMode {
        EAModeAbs16Byte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetWordEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").b";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAbs16Word extends EAMode {
        EAModeAbs16Word() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetWordEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").w";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAbs16Long extends EAMode {
        EAModeAbs16Long() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetWordEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").l";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeAbs32Byte extends EAMode {
        EAModeAbs32Byte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetLongEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").b";
            pc += 4;
            return s;
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeAbs32Word extends EAMode {
        EAModeAbs32Word() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetLongEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").w";
            pc += 4;
            return s;
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeAbs32Long extends EAMode {
        EAModeAbs32Long() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = mem.GetLongEx(pc);
            String s = "(" + Integer.toHexString(ea) + ").l";
            pc += 4;
            return s;
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModePCValDispByte extends EAMode {
        EAModePCValDispByte() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = pc + i;
            String s = (i != 0? GetSignedHexString(i) : "") + "(PC).b";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModePCValDispWord extends EAMode {
        EAModePCValDispWord() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = pc + i;
            String s = (i != 0? GetSignedHexString(i) : "") + "(PC).w";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModePCValDispLong extends EAMode {
        EAModePCValDispLong() {
            super(null);
        }
        String GetEAString(int nnn) {
		    int i = mem.GetWordEx(pc);
            ea = pc + i;
            String s = (i != 0? GetSignedHexString(i) : "") + "(PC).l";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModePCValIndexByte extends EAMode {
        EAModePCValIndexByte() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(pc);
            return GetIndexAddrString(-1) + ".b";
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModePCValIndexWord extends EAMode {
        EAModePCValIndexWord() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(pc);
            return GetIndexAddrString(-1) + ".w";
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModePCValIndexLong extends EAMode {
        EAModePCValIndexLong() {
            super(null);
        }
        String GetEAString(int nnn) {
            ea = GetIndexAddr(pc);
            return GetIndexAddrString(-1) + ".l";
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    protected class EAModeImmediateByte extends EAMode {
        EAModeImmediateByte() {
            super("#");
        }
        String GetEAString(int nnn) {
            ea = pc + 1;
            String s = GetImmediateHexString(mem.GetByteEx(ea));    // + ".b";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetByteEx(ea) & 0xff;
        }
    }
    protected class EAModeImmediateWord extends EAMode {
        EAModeImmediateWord() {
            super("#");
        }
        String GetEAString(int nnn) {
            ea = pc;
            String s = GetImmediateHexString(mem.GetWordEx(ea));    // + ".w";
            pc += 2;
            return s;
        }
        int GetData() {
            return mem.GetWordEx(ea) & 0xffff;
        }
    }
    protected class EAModeImmediateLong extends EAMode {
        EAModeImmediateLong() {
            super("#");
        }
        String GetEAString(int nnn) {
            ea = pc;
            String s = GetImmediateHexString(mem.GetLongEx(ea));    // + ".l";
            pc += 4;
            return s;
        }
        int GetData() {
            return mem.GetLongEx(ea);
        }
    }


    /*  GetSignedHexString(i)
     *
     *  Used to convert signed values to hex strings.
     *
     *  NOTE: It appears that Integer.toHexString(i) does *unsigned* conversion, whereas
     *  Integer.toString(i,16) does *signed* conversion.  Since we can already see the unsigned
     *  values in the disassembly output, I'm opting for signed output here. -JP
     */
    private String GetSignedHexString(int i)
    {
        String s = Integer.toString(i,16);      // performed *signed* conversion
        if (s.charAt(0) != '-')
            return "0x" + s;
        else
            return "-0x" + s.substring(1);
    }
    
    
    /*  GetImmediateHexString(i)
     *
     *  Used to convert immediate values to hex strings.
     *
     *  NOTE: It appears that Integer.toHexString(i) does *unsigned* conversion, whereas
     *  Integer.toString(i,16) does *signed* conversion.  Since we can already see the unsigned
     *  values in the disassembly output, I'm opting for signed output here. -JP
     */
    private String GetImmediateHexString(int i)
    {
        String s = Integer.toString(i,16);      // performed *signed* conversion
        if (s.charAt(0) != '-')
            return "#0x" + s;
        else
            return "#-0x" + s.substring(1);
    }
    
    
    private int GetIndexAddr(int base)
    {
        int addr = mem.GetWordEx(pc);
        int i = (addr & 0x7000) >> 12;
        
        if ((addr & 0x0800) != 0)
            if ((addr & 0x8000) != 0)
                return base + a[i] + (byte)addr;
            else
                return base + d[i] + (byte)addr;
        else
            if ((addr & 0x8000) != 0)
                return base + (short)a[i] + (byte)addr;
            else
                return base + (short)d[i] + (byte)addr;
    }
    

    private String GetIndexAddrString(int nnn)
    {
        int addr = mem.GetWordEx(pc);
        pc += 2;
        int i = (addr >> 12) & 0x7;
        
        return "(" + ((byte)addr != 0? GetSignedHexString((byte)addr) + "," : "") + 
                ((nnn < 0)? "PC" : ("A" + nnn)) +
                ((addr & 0x8000) != 0? ",A":",D") + i + ((addr & 0x0800) != 0? ".l":".w") + ")";
    }


    String Disassemble(int addr, boolean fDispEA)
    {
        int op1 = 0, op2, ss, rrr, nnn, iModeSrc, iModeDst;
        String sBytes = null, sOp = null, sSrc = null, sDst = null;
	
        fError = false;

	    try {
        
        eaModeSrc = eaModeDst = null;

        // Snapshot the cpu's registers
		CopyRegs(cpu);
        pc = addr;                          // use specified addr instead of cpu.pc
        
        op1 = mem.GetWordEx(pc);            // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)
        pc += 2;
        
        ss = ssBYTE;
        nnn = op1 & 0x7;
        rrr = (op1 >> 9) & 0x7;

stage1: switch ((op1 >> 12) & 0xf) {
            
        case 0x0:
            //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn]
            //  case 0x003c:   ori      [0000000000111100, format none]
            //  case 0x007c:   ori      [0000000001111100, format none]
            //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn]
            //  case 0x0108:   movep    [0000rrr100001nnn, format none]
            //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn]
            //  case 0x0148:   movep    [0000rrr101001nnn, format none]
            //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn]
            //  case 0x0188:   movep    [0000rrr110001nnn, format none]
            //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn]
            //  case 0x01c8:   movep    [0000rrr111001nnn, format none]
            //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn]
            //  case 0x023c:   andi     [0000001000111100, format none]
            //  case 0x027c:   andi     [0000001001111100, format none]
            //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn]
            //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn]
            //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn]
            //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn]
            //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn]
            //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn]
            //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn]
            //  case 0x0a3c:   eori     [0000101000111100, format none]
            //  case 0x0a7c:   eori     [0000101001111100, format none]
            //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn]
            
            iModeSrc = EAMODEINDEX_DREG_LONG;
            
            switch ((op1 >> 8) & 0xf) {
                
            case 0x0:
                //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn]
                //  case 0x003c:   ori      [....000000111100, format none]
                //  case 0x007c:   ori      [....000001111100, format none]
                sOp = "ORI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                if ((op1 & 0x3f) != 0x3c) {
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else if ((op1 & 0x00c0) == 0x0000)
                    sDst = "CCR";
                else if ((op1 & 0x00c0) == 0x0040)
                    sDst = "SR";
                break stage1;
                
            case 0x2:
                //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn]
                //  case 0x023c:   andi     [....001000111100, format none]
                //  case 0x027c:   andi     [....001001111100, format none]
                sOp = "ANDI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                if ((op1 & 0x3f) != 0x3c) {
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else if ((op1 & 0x00c0) == 0x0000)
                    sDst = "CCR";
                else if ((op1 & 0x00c0) == 0x0040)
                    sDst = "SR";
                break stage1;
                
            case 0x4:
                //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn]
                sOp = "SUBI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
                break stage1;
                
            case 0x6:
                //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn]
                sOp = "ADDI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
                break stage1;
                
            case 0x8:
                //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                iModeSrc = EAMODEINDEX_IMMEDIATE_WORD;
                rrr = 0;
                break;
                
            case 0xa:
                //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn]
                //  case 0x0a3c:   eori     [....101000111100, format none]
                //  case 0x0a7c:   eori     [....101001111100, format none]
                sOp = "EORI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                if ((op1 & 0x3f) != 0x3c) {
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else if ((op1 & 0x00c0) == 0x0000)
                    sDst = "CCR";
                else if ((op1 & 0x00c0) == 0x0040)
                    sDst = "SR";
                break stage1;
                
            case 0xc:
                //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn]
                sOp = "CMPI";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                sSrc = eaModeSrc.GetEAString(0);
                eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
                break stage1;
                
            case 0xe:                   // undefined
                break stage1;
                
            case 0x1:
                //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                //  case 0x0108:   movep    [....rrr100001nnn, format none]
                //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                //  case 0x0148:   movep    [....rrr101001nnn, format none]
                //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                //  case 0x0188:   movep    [....rrr110001nnn, format none]
                //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]
                //  case 0x01c8:   movep    [....rrr111001nnn, format none]
                rrr = 0;
                break;
            case 0x3:
                rrr = 1;
                break;
            case 0x5:
                rrr = 2;
                break;
            case 0x7:
                rrr = 3;
                break;
            case 0x9:
                rrr = 4;
                break;
            case 0xb:
                rrr = 5;
                break;
            case 0xd:
                rrr = 6;
                break;
            case 0xf:
                rrr = 7;
                break;
            }
            
            if ((op1 & 0x0038) == 0x0008) {
                //  case 0x0108:   movep    [....rrr100001nnn, format none]
                //  case 0x0148:   movep    [....rrr101001nnn, format none]
                //  case 0x0188:   movep    [....rrr110001nnn, format none]
                //  case 0x01c8:   movep    [....rrr111001nnn, format none]
                sOp = "MOVEP";  sSrc = "???";
            }
            else {
                //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]
                
                eaModeSrc = aEAModes[iModeSrc];
                sSrc = eaModeSrc.GetEAString(rrr);
                if ((op1 & 0x0038) == 0x0000) {
                  //dataSrc = (1 << (dataSrc & 31));
                    eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else {
                  //dataSrc = (1 << (dataSrc & 7));
                    if ((op1 & 0x00c0) == 0)
                        eaModeDst = aEAModes[abModes401[op1 & 0x3f]];
                    else
                        eaModeDst = aEAModes[abModes407[op1 & 0x3f]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                switch ((op1 >> 6) & 0x3) {
                case 0:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                    sOp = "BTST";
                    break;
                case 1:
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                    sOp = "BCHG";
                    break;

                case 2:
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                    sOp = "BCLR";
                    break;
                    
                case 3:
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                    sOp = "BSET";
                    break;
                }
            }
            break stage1;
            
        case 0x2:
            ss++;   // fall through...
            
        case 0x3:
            ss++;   // fall through...
            
        case 0x1:
            //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
            //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
            ss <<= 6;
            if ((op1 & 0x01c0) != 0x0040) {
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
                sOp = "MOVE";
                eaModeSrc = aEAModes[abModes000[ss + (op1 & 0x3f)]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                sDst = eaModeDst.GetEAString(rrr);
            }
            else {
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
                sOp = "MOVEA";
                eaModeSrc = aEAModes[abModes000[ss + (op1 & 0x3f)]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[EAMODEINDEX_AREG_LONG];
                sDst = eaModeDst.GetEAString(rrr);
            }
            break stage1;

        case 0x4:
            //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn]
            //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn]
            //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
            //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
            //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn]
            //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn]
            //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn]
            //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn]
            //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn]
            //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn]
            //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn]
            //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn]
            //  case 0x4840:   swap     [0100100001000nnn, format none]
            //  case 0x4880:   ext      [0100100010000nnn, format none]
            //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
            //  case 0x48c0:   ext      [0100100011000nnn, format none]
            //  case 0x49c0:   ext      [0100100111000nnn, format none]
            //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn]
            //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn]
            //  case 0x4afc:   illegal  [0100101011111100, format none]
            //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
            //  case 0x4e40:   trap     [010011100100vvvv, format none]
            //  case 0x4e50:   link     [0100111001010nnn, format none]
            //  case 0x4e58:   unlk     [0100111001011nnn, format none]
            //  case 0x4e60:   move     [0100111001100nnn, format none]
            //  case 0x4e68:   move     [0100111001101nnn, format none]
            //  case 0x4e70:   reset    [0100111001110000, format none]
            //  case 0x4e71:   nop      [0100111001110001, format none]
            //  case 0x4e72:   stop     [0100111001110010, format none]
            //  case 0x4e73:   rte      [0100111001110011, format none]
            //  case 0x4e75:   rts      [0100111001110101, format none]
            //  case 0x4e76:   trapv    [0100111001110110, format none]
            //  case 0x4e77:   rtr      [0100111001110111, format none]
            //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn]
            //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn]
            
            switch ((op1 >> 8) & 0xf) {
                
            case 0x0:
                if ((op1 & 0x00c0) != 0x00c0) {
                    //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn]
                    // I have to code this up to make it look like we're modifying a
                    // source rather than a destination, because even though the effective
                    // address should be considered the "destination", we are subtracting from zero,
                    // not from the destination.
                    sOp = "NEGX";
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sSrc = eaModeDst.GetEAString(nnn); // - GetFlagX();
                }
                else {                  // MOVE SR,%s
                    //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn]
                    sOp = "MOVE";  sSrc = "SR";
                    eaModeDst = aEAModes[abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    sDst = eaModeDst.GetEAString(nnn);
                }
                break stage1;
                
            case 0x2:
                if ((op1 & 0x00c0) != 0x00c0) {
                    //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn]
                    sOp = "CLR";
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else {                  // MOVE CCR,%s
                    //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn]
                    sOp = "MOVE";  sSrc = "CCR";
                    eaModeDst = aEAModes[abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    sDst = eaModeDst.GetEAString(nnn);
                }
                break stage1;
                
            case 0x4:
                if ((op1 & 0x00c0) != 0x00c0) {
                    //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn]
                    // I have to code this up to make it look like we're modifying a
                    // source rather than a destination, because even though the effective
                    // address should be considered the "destination", we are subtracting from zero,
                    // not from the destination.
                    sOp = "NEG";
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sSrc = eaModeDst.GetEAString(nnn);
                }
                else {                  // MOVE %s,CCR
                    //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn]
                    sOp = "MOVE";  sDst = "CCR";
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    sSrc = eaModeSrc.GetEAString(nnn);
                }
                break stage1;
                
            case 0x6:
                if ((op1 & 0x00c0) != 0x00c0) {
                    //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn]
                    sOp = "NOT";
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else {                  // MOVE %s,SR
                    //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn]
                    sOp = "MOVE";  sDst = "SR";
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    sSrc = eaModeSrc.GetEAString(nnn);
                }
                break stage1;
                
            case 0x8:
                //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn]
                //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn]
                //  case 0x4840:   swap     [....100001000nnn, format none]
                //  case 0x4880:   ext      [....100010000nnn, format none]
                //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [....100011000nnn, format none]
                switch ((op1 >> 6) & 0x3) {
                case 0x0:
                    //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn]
                    sOp = "NBCD";  sSrc = "???";
                    break stage1;
                    
                case 0x1:
                    if ((op1 & 0x0038) == 0) {
                        //  case 0x4840:   swap     [........01000nnn, format none]
                        sOp = "SWAP";
                        eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.GetEAString(nnn);
                    }
                    else {
                        //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                        sOp = "PEA";
                        eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        sSrc = eaModeSrc.GetEAString(nnn);
                        if (sSrc.endsWith(".l"))
                            sSrc = sSrc.substring(0, sSrc.length()-2);
                    }
                    break stage1;
                    
                case 0x2:
                    if ((op1 & 0x0038) == 0) {
                        //  case 0x4880:   ext      [........10000nnn, format none]
                        sOp = "EXT";
                        eaModeDst = aEAModes[EAMODEINDEX_DREG_WORD];
                        sDst = eaModeDst.GetEAString(nnn);
                        break stage1;
                    }
                    
                case 0x3:
                    if ((op1 & 0x0038) == 0) {
                        //  case 0x4880:   ext      [........10000nnn, format none]
                        sOp = "EXT";
                        eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.GetEAString(nnn);
                        break stage1;
                    }
                }
                //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                //  NOTES: 1) This is a register-to-memory operation
                //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                //         4) Any register used in pre-decrement mode is stored before being decremented
                sOp = "MOVEM";
                iModeSrc = mem.GetWordEx(pc);
                pc += 2;
                sSrc = "{";
                if ((op1 & 0x38) == 0x20) {
                    // Pre-decrement
                    int iMask = 0x1;
                    for (int i=7; i>=0; i--,iMask<<=1) {
                        if ((iModeSrc & iMask) != 0) {
                            if (sSrc.length() > 1)
                                sSrc = sSrc + ",";
                            sSrc = sSrc + "A" + i;
                        }
                    }
                    for (int i=7; i>=0; i--,iMask<<=1) {
                        if ((iModeSrc & iMask) != 0) {
                            if (sSrc.length() > 1)
                                sSrc = sSrc + ",";
                            sSrc = sSrc + "D" + i;
                        }
                    }
                }
                else {
                    // All other modes
                    int iMask = 0x1;
                    for (int i=0; i<=7; i++,iMask<<=1) {
                        if ((iModeSrc & iMask) != 0) {
                            if (sSrc.length() > 1)
                                sSrc = sSrc + ",";
                            sSrc = sSrc + "D" + i;
                        }
                    }
                    for (int i=0; i<=7; i++,iMask<<=1) {
                        if ((iModeSrc & iMask) != 0) {
                            if (sSrc.length() > 1)
                                sSrc = sSrc + ",";
                            sSrc = sSrc + "A" + i;
                        }
                    }
                }
                sSrc = sSrc + "}";
                sDst = aEAModes[abModesD07[(op1 - 0x40) & 0xff]].GetEAString(nnn);
                break stage1;
                
            case 0xa:
                if ((op1 & 0xc0) != 0xc0) {
                    //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn]
                    sOp = "TST";
                    eaModeDst = aEAModes[abModes000[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else if ((op1 & 0x3f) != 0x3c) {
                    //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn]
                    sOp = "TAS";
                    eaModeDst = aEAModes[abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                    sDst = eaModeDst.GetEAString(nnn);
                }
                else {
                    //  case 0x4afc:   illegal  [........11111100, format none]
                    sOp = "ILLEGAL";
                }
                break stage1;
                
            case 0xc:
                //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                //  NOTES: 1) This is a memory-to-register operation
                //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                sOp = "MOVEM";
                iModeDst = mem.GetWordEx(pc);
                pc += 2;
                sSrc = aEAModes[abModesC81[(op1 - 0x40) & 0xff]].GetEAString(nnn);
                sDst = "{";
                int iMask = 0x1;
                for (int i=0; i<=7; i++,iMask<<=1) {
                    if ((iModeDst & iMask) != 0) {
                        if (sDst.length() > 1)
                            sDst = sDst + ",";
                        sDst = sDst + "D" + i;
                    }
                }
                for (int i=0; i<=7; i++,iMask<<=1) {
                    if ((iModeDst & iMask) != 0) {
                        if (sDst.length() > 1)
                            sDst = sDst + ",";
                        sDst = sDst + "A" + i;
                    }
                }
                sDst = sDst + "}";
                break stage1;

            case 0xe:
                switch ((op1 >> 4) & 0xf) {
                case 0x4:
                    //  case 0x4e40:   trap     [........0100vvvv, format none]
                    sOp = "TRAP";
                    op2 = (op1 & 0xf);
                    if (op2 != 0xf)
                        sSrc = Integer.toHexString(op2);
                    else {
                        op2 = mem.GetWordEx(pc);
                        pc += 2;
                        sSrc = PalmOSTypes.GetAPIName(op2);
                    }
                    break stage1;
                    
                case 0x5:
                    if ((op1 & 0x8) == 0) {
                        //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                        sOp = "LINK";
                        sSrc = "A" + nnn;
                        sDst = aEAModes[EAMODEINDEX_IMMEDIATE_WORD].GetEAString(0);
                    }
                    else {
                        //  case 0x4e58:   unlk     [........01011nnn, format none]
                        sOp = "UNLK";
                        sSrc = "A" + nnn;
                    }
                    break stage1;
                    
                case 0x6:
                    //  case 0x4e60:   move     [........01100nnn, format none]
                    //  case 0x4e68:   move     [........01101nnn, format none]
                    sOp = "MOVE";
                    if ((op1 & 0x8) == 0) {
                        sSrc = "A" + nnn;
                        sDst = "USP";
                    }
                    else {
                        sSrc = "USP";
                        sDst = "A" + nnn;
                    }
                    break stage1;
                    
                case 0x7:
                    switch (op1 & 0xf) {
                    case 0x0:
                        //  case 0x4e70:   reset    [........01110000, format none]
                        sOp = "RESET";
                        break stage1;
                    
                    case 0x1:
                        //  case 0x4e71:   nop      [........01110001, format none]
                        sOp = "NOP";
                        break stage1;
                    
                    case 0x2:
                        //  case 0x4e72:   stop     [........01110010, format none]
                        sOp = "STOP";
                        sSrc = GetImmediateHexString(mem.GetWordEx(pc) & 0xffff);
                        pc += 2;
                        break stage1;
                    
                    case 0x3:
                        //  case 0x4e73:   rte      [........01110011, format none]
                        sOp = "RTE";
                        break stage1;
                
                    case 0x5:
                        //  case 0x4e75:   rts      [........01110101, format none]
                        sOp = "RTS";
                        break stage1;
                    
                    case 0x6:
                        //  case 0x4e76:   trapv    [........01110110, format none]
                        sOp = "TRAPV";
                        break stage1;
                    
                    case 0x7:
                        //  case 0x4e77:   rtr      [........01110111, format none]
                        sOp = "RTR";
                        break stage1;
                    }
                    
                case 0x8:
                case 0x9:
                case 0xa:
                case 0xb:
                    //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
		            sOp = "JSR";
                    eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                    sSrc = eaModeSrc.GetEAString(nnn);
                    if (sSrc.endsWith(".l"))
                        sSrc = sSrc.substring(0, sSrc.length()-2);
                    break stage1;
                    
                case 0xc:
                case 0xd:
                case 0xe:
                case 0xf:
                    //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
		            sOp = "JMP";
                    eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                    sSrc = eaModeSrc.GetEAString(nnn);
                    if (sSrc.endsWith(".l"))
                        sSrc = sSrc.substring(0, sSrc.length()-2);
                    break stage1;
                }
                break stage1;

            case 0x1:
                //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                rrr = 0;
                break;
            case 0x3:
                rrr = 1;
                break;
            case 0x5:
                rrr = 2;
                break;
            case 0x7:
                rrr = 3;
                break;
            case 0x9:
                if ((op1 & 0x00f8) == 0x00c0) {
                    //  case 0x49c0:   ext      [....100111000nnn, format none]
                    sOp = "EXT";
                    eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.GetEAString(nnn);
                    break stage1;
                }
                rrr = 4;
                break;
            case 0xb:
                rrr = 5;
                break;
            case 0xd:
                rrr = 6;
                break;
            case 0xf:
                rrr = 7;
                break;
            }
            
            if ((op1 & 0x00c0) == 0x0080) {
                //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                sOp = "CHK";
                eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                sSrc = eaModeSrc.GetEAString(nnn);
                if (sSrc.endsWith(".w"))
                    sSrc = sSrc.substring(0, sSrc.length()-2);
                sDst = "D" + rrr;
            }
            else {
                //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                sOp = "LEA";
                eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];            // +(ssLONG << 6)
                sSrc = eaModeSrc.GetEAString(nnn);
                if (sSrc.endsWith(".l"))
                    sSrc = sSrc.substring(0, sSrc.length()-2);
                sDst = "A" + rrr;
            }
            break stage1;
            
        case 0x5:
            //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
            //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
            //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
            //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
            if ((op1 & 0x00c0) != 0x00c0) {
                sSrc = "#" + (aByteQuick[rrr]);
                eaModeDst = aEAModes[abModes007[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
                if ((op1 & 0x0100) == 0x0000) {
                    //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
                    sOp = "ADDQ";
                }
                else {
                    //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
                    sOp = "SUBQ";
                }
                break stage1;
            }
            else {
                if ((op1 & 0x0038) != 0x0008) {
                    //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
                    eaModeDst = aEAModes[abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                    sDst = eaModeDst.GetEAString(nnn);
                    switch ((op1 >> 8) & 0xf) {
                    case 0x0:               // ST
                        sOp = "ST";
                        break stage1;
                    case 0x1:               // SF
                        sOp = "SF";
                        break stage1;
                    case 0x2:               // SHI
                        sOp = "SHI";
                        break stage1;
                    case 0x3:               // SLS
                        sOp = "SLS";
                        break stage1;
                    case 0x4:               // SCC
                        sOp = "SCC";
                        break stage1;
                    case 0x5:               // SCS
                        sOp = "SCS";
                        break stage1;
                    case 0x6:               // SNE
                        sOp = "SNE";
                        break stage1;
                    case 0x7:               // SEQ
                        sOp = "SEQ";
                        break stage1;
                    case 0x8:               // SVC
                        sOp = "SVC";
                        break stage1;
                    case 0x9:               // SVS
                        sOp = "SVS";
                        break stage1;
                    case 0xa:               // SPL
                        sOp = "SPL";
                        break stage1;
                    case 0xb:               // SMI
                        sOp = "SMI";
                        break stage1;
                    case 0xc:               // SGE
                        sOp = "SGE";
                        break stage1;
                    case 0xd:               // SLT
                        sOp = "SLT";
                        break stage1;
                    case 0xe:               // SGT
                        sOp = "SGT";
                        break stage1;
                    case 0xf:               // SLE
                        sOp = "SLE";
                        break stage1;
                    }
                }
                else {
                    //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
                    switch ((op1 >> 8) & 0xf) {
                    case 0x0:               // DBT
                        sOp = "DBT";
                        break;
                    case 0x1:               // DBRA/DBF
                        sOp = "DBRA";
                        break;
                    case 0x2:               // DBHI
                        sOp = "DBHI";
                        break;
                    case 0x3:               // DBLS
                        sOp = "DBLS";
                        break;
                    case 0x4:               // DBCC
                        sOp = "DBCC";
                        break;
                    case 0x5:               // DBCS
                        sOp = "DBCS";
                        break;
                    case 0x6:               // DBNE
                        sOp = "DBNE";
                        break;
                    case 0x7:               // DBEQ
                        sOp = "DBEQ";
                        break;
                    case 0x8:               // DBVC
                        sOp = "DBVC";
                        break;
                    case 0x9:               // DBVS
                        sOp = "DBVS";
                        break;
                    case 0xa:               // DBPL
                        sOp = "DBPL";
                        break;
                    case 0xb:               // DBMI
                        sOp = "DBMI";
                        break;
                    case 0xc:               // DBGE
                        sOp = "DBGE";
                        break;
                    case 0xd:               // DBLT
                        sOp = "DBLT";
                        break;
                    case 0xe:               // DBGT
                        sOp = "DBGT";
                        break;
                    case 0xf:               // DBLE
                        sOp = "DBLE";
                        break;
                    }
                    sSrc = "D" + (nnn);
                    sDst = Integer.toHexString(pc + mem.GetWordEx(pc));
		            pc += 2;
                    break stage1;
                }
            }
            break;
            
        case 0x6:
            //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd]
            //  case 0x6100:   bsr      [01100001dddddddd, format none]
            switch ((op1 >> 8) & 0xf) {
            case 0x0:               // BRA
                sOp = "BRA";
                break;
            case 0x1:               // BSR
                sOp = "BSR";
                break;
            case 0x2:               // BHI
                sOp = "BHI";
                break;
            case 0x3:               // BLS
                sOp = "BLS";
                break;
            case 0x4:               // BCC
                sOp = "BCC";
                break;
            case 0x5:               // BCS
                sOp = "BCS";
                break;
            case 0x6:               // BNE
                sOp = "BNE";
                break;
            case 0x7:               // BEQ
                sOp = "BEQ";
                break;
            case 0x8:               // BVC
                sOp = "BVC";
                break;
            case 0x9:               // BVS
                sOp = "BVS";
                break;
            case 0xa:               // BPL
                sOp = "BPL";
                break;
            case 0xb:               // BMI
                sOp = "BMI";
                break;
            case 0xc:               // BGE
                sOp = "BGE";
                break;
            case 0xd:               // BLT
                sOp = "BLT";
                break;
            case 0xe:               // BGT
                sOp = "BGT";
                break;
            case 0xf:               // BLE
                sOp = "BLE";
                break;
            }
	        if ((byte)op1 != 0)
                sSrc = Integer.toHexString(pc + (byte)op1);
			else {
                sSrc = Integer.toHexString(pc + mem.GetWordEx(pc));
			    pc += 2;
	        }
            break stage1;
            
        case 0x7:
            //  case 0x7000:   moveq    [0111rrr0dddddddd, format none]
            sOp = "MOVEQ";
            sSrc = "#" + (byte)op1;
            sDst = aEAModes[EAMODEINDEX_DREG_LONG].GetEAString(rrr);
            break stage1;
        
        case 0x8:
            //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
            //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
            //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
            //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
            //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
            if ((op1 & 0x01f0) == 0x0100) {
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                sOp = "SBCD";  sSrc = "???";
                break stage1;
            }
            if ((op1 & 0x01c0) == 0x00c0) {
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                sOp = "DIVU";
                eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                sSrc = eaModeSrc.GetEAString(nnn); // & 0xffff;
                eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x01c0) == 0x01c0) {
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                sOp = "DIVS";
                eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0100) == 0x0000) { // EA is src
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                sOp = "OR";
                eaModeSrc = aEAModes[abModes400[op1 & 0xff]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sDst = eaModeDst.GetEAString(rrr);
            }
            else {                          // EA is dst
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                sOp = "OR";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sSrc = eaModeSrc.GetEAString(rrr);
                eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
            }
            break stage1;
        
        case 0x9:
            //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
            //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
            //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
            //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
            if ((op1 & 0x00c0) == 0x00c0) {
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                sOp = "SUBA";
                eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 8) & 0x1) + EAMODEINDEX_AREG_WORD];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0100) == 0) {      // EA is src
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                sOp = "SUB";
                eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0030) != 0) {      // EA is dst
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                sOp = "SUB";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sSrc = eaModeSrc.GetEAString(rrr);
                eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
            }
            else {
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                sOp = "SUBX";
                eaModeSrc = aEAModes[abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                sSrc = eaModeSrc.GetEAString(nnn); // - GetFlagX();
                eaModeDst = eaModeSrc;
                sDst = eaModeDst.GetEAString(rrr);
            }
            break stage1;
        
        case 0xa:                       // undefined
            break;
        
        case 0xb:
            //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
            //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
            //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
            //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
            if ((op1 & 0x00c0) == 0x00c0) {
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                sOp = "CMPA";
                eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 8) & 0x1) + EAMODEINDEX_AREG_WORD];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0100) == 0) {      // EA is src
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                sOp = "CMP";
                eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0038) != 0x08) {
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                sOp = "EOR";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sSrc = eaModeSrc.GetEAString(rrr);
                eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
            }
            else {
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                sOp = "CMPM";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_AREG_INCBYTE];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = eaModeSrc;
                sDst = eaModeDst.GetEAString(rrr);
            }
            break stage1;
        
        case 0xc:
            //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn]
            //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn]
            //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn]
            //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn]
            //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn]
            op2 = (op1 >> 6) & 0x7;
            
            switch(op2) {
            case 0x0:
            case 0x1:
            case 0x2:                       // EA is src
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                sOp = "AND";
                eaModeSrc = aEAModes[abModes400[op1 & 0xff]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
                
            case 0x3:
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                sOp = "MULU";
                eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
                
            case 0x4:
            case 0x5:
            case 0x6:                       // EA is dst
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                if ((op1 & 0x0030) != 0) {
                    sOp = "AND";
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.GetEAString(rrr);
                    eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.GetEAString(nnn);
                    break stage1;
                }
                
                switch(op2) {
                case 0x4:
                    //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                    sOp = "ABCD";
                    eaModeSrc = aEAModes[abModesAddSubX[(op1 >> 3) & 0x1]];     // 0 or 1 (both ssBYTE)
                    sSrc = eaModeSrc.GetEAString(nnn);
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.GetEAString(rrr);
                    break stage1;
                    
                case 0x5:
                    if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                        //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                        sOp = "EXG";
                        sSrc = "D" + rrr;
                        sDst = "D" + nnn;
                    }
                    else {                  // EXG Arrr,Annn
                        //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                        sOp = "EXG";
                        sSrc = "A" + rrr;
                        sDst = "A" + nnn;
                    }
                    break stage1;
                    
                case 0x6:
                    if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                        //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                        sOp = "EXG";
                        sSrc = "D" + rrr;
                        sDst = "A" + nnn;
                        break stage1;
                    }
                }
                break;      // If we're still here, must be an invalid opcode
                
            case 0x7:
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                sOp = "MULS";
                eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[EAMODEINDEX_DREG_LONG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            break;
        
        case 0xd:
            //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
            //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
            //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
            //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
            if ((op1 & 0x00c0) == 0x00c0) {
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                sOp = "ADDA";
                eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 8) & 0x1) + EAMODEINDEX_AREG_WORD];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0100) == 0) {      // EA is src
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                sOp = "ADD";
                eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                sSrc = eaModeSrc.GetEAString(nnn);
                eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sDst = eaModeDst.GetEAString(rrr);
                break stage1;
            }
            if ((op1 & 0x0030) != 0) {      // EA is dst
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                sOp = "ADD";
                eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                sSrc = eaModeSrc.GetEAString(rrr);
                eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                sDst = eaModeDst.GetEAString(nnn);
            }
            else {
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                sOp = "ADDX";
                eaModeSrc = aEAModes[abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                sSrc = eaModeSrc.GetEAString(nnn); // - GetFlagX();
                eaModeDst = eaModeSrc;
                sDst = eaModeDst.GetEAString(rrr);
            }
            break stage1;
        
        case 0xe:
            //  case 0xe000:   asr      [1110000011uuunnn, format ??????????uuunnn, p.126]
            //  case 0xe000:   asr      [1110rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
            //  case 0xe008:   lsr      [1110rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
            //  case 0xe010:   roxr     [1110rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
            //  case 0xe018:   ror      [1110rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
            //  case 0xe100:   asl      [1110rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
            //  case 0xe100:   asl      [1110000111uuunnn, format ??????????uuunnn, p.126]
            //  case 0xe108:   lsl      [1110rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
            //  case 0xe110:   roxl     [1110rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
            //  case 0xe118:   rol      [1110rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
            //  case 0xe200:   lsr      [1110001011uuunnn, format ??????????uuunnn, p.218]
            //  case 0xe300:   lsl      [1110001111uuunnn, format ??????????uuunnn, p.218]
            //  case 0xe400:   roxr     [1110010011uuunnn, format ??????????uuunnn, p.268]
            //  case 0xe500:   roxl     [1110010111uuunnn, format ??????????uuunnn, p.268]
            //  case 0xe600:   ror      [1110011011uuunnn, format ??????????uuunnn, p.265]
            //  case 0xe700:   rol      [1110011111uuunnn, format ??????????uuunnn, p.265]
            if ((op1 & 0x00c0) != 0x00c0) {
                sSrc = ((op1 & 0x20) == 0)? ("#" + aByteQuick[rrr]) : ("D" + rrr);
                op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                eaModeDst = aEAModes[EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
            }
            else {
                sSrc = "1";
                op2 = op1 >> 8;
                eaModeDst = aEAModes[abModesC07[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
            }
            sDst = eaModeDst.GetEAString(nnn);
            switch (op2 & 0x7) {
            case 0x0:
                //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                sOp = "ASR";
                break stage1;
                
            case 0x1:
                //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                sOp = "ASL";
                break stage1;
                
            case 0x2:
                //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                sOp = "LSR";
                break stage1;
                
            case 0x3:
                //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                sOp = "LSL";
                break stage1;
                
            case 0x4:
                //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                sOp = "ROXR";
                break stage1;
                
            case 0x5:
                //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                sOp = "ROXL";
                break stage1;
                
            case 0x6:
                //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                sOp = "ROR";
                break stage1;
                
            case 0x7:
                //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                sOp = "ROL";
                break stage1;
            }
            break;
            
        case 0xf:                       // undefined
            break;
            
        }   // End stage1
        

        if (sOp == null)
            sOp = "???";
        
        if (sSrc != null && sDst != null) {
            // If there are both src and dst operands, collapse any common ".b", ".w" or ".l" suffixes
            // into a single suffix on the opcode instead.  Also do the collapse if the src operand is an
            // immediate value (ie, prefixed with '#') or register list (ie, prefixed with '{').  And then
            // finally collapse both operands into a a single src operand, separated by commas, to further
            // simplify the code that follows.
            int iSrc = sSrc.length();
            int iDst = sDst.length();
            if (iSrc >= 2 && iDst >= 2) {
                if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(iDst-2) == '.' && sSrc.charAt(iSrc-1) == sDst.charAt(iDst-1)) {
                    iSrc -= 2;
                    iDst -= 2;
                    sOp = sOp + sSrc.substring(iSrc);
                    sSrc = sSrc.substring(0,iSrc);
                    sDst = sDst.substring(0,iDst);
                }
                else if ((sSrc.charAt(0) == '#' || sSrc.charAt(0) == '{') && sDst.charAt(iDst-2) == '.') {
                    iDst -= 2;
                    sOp = sOp + sDst.substring(iDst);
                    sDst = sDst.substring(0,iDst);
                }
                else if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(0) == '{') {
                    iSrc -= 2;
                    sOp = sOp + sSrc.substring(iSrc);
                    sSrc = sSrc.substring(0,iSrc);
                }
            }
            sSrc = sSrc + "," + sDst;
        }
	    else {
		    if (sSrc == null)
                sSrc = sDst;
		    if (sSrc != null) {
                int iSrc = sSrc.length();
                if (iSrc >= 2 && sSrc.charAt(iSrc-2) == '.') {
                    iSrc -= 2;
                    sOp = sOp + sSrc.substring(iSrc);
                    sSrc = sSrc.substring(0,iSrc);
                }
		    }
	    }

        // Prefix the opcode mnemonic with the code words (up to 3 of them)
	
        sBytes = "";
        for (int i=0; i<6; i+=2) {
            if (((addr + i) >>> 1) >= (pc >>> 1))
                break;
            sBytes = sBytes + DumpHex(mem.GetWordEx(addr+i) & 0xffff, 4) + " ";
        }
        
	    }
	    catch (Throwable e) {sBytes = sError; fError = true;}

        if (fError) {
            try {
                // See if we're currently *inside* an API call...
                if (addr == mem.GetLong(cpu.EXCEPTION_TRAP_0xF * 4)) {
                    sBytes = null;
                    sOp = "INSIDE";
                    try {
                        int addrPC = mem.GetLong(a[7]+2)-4;
                        // Could check "mem.GetWord(addrPC) == 0x4e4f" too,
                        // to make sure it's really a TRAP 0x0F instruction....
                        sSrc = PalmOSTypes.GetAPIName(mem.GetWord(addrPC+2));
                    }
                    catch (Throwable e) {sSrc = "???";};
                }
            }
            catch (Throwable e) {};
        }

        addrCodeDump = pc;
        
        if (sSrc != null && (fDispEA || op1 == OP_JMP_PC_REL || op1 == OP_JSR_PC_REL)) {
            
            // BUGBUG: This breaks down when both src and dst modes are the same,
            // because we might be using the same "eaMode" object for both operands, hence
            // its "ea" value for the src might have been overwritten by the value for the dst
            // (since normally the dst is decoded after the src).
            
            // Hopefully, this is not a problem anywhere in the emulator, as the normal operation
            // of the CPU is to extract the src data from the src ea before processing the dst,
            // but it can definitely affect the debugger, and it's something to be on the lookout
            // for in the emulator as well.  -JP
            
            EAMode eaMode = eaModeSrc;
            if (eaMode == null || eaMode.sPrefix.startsWith("#"))
                eaMode = eaModeDst;
            if (eaMode != null && !eaMode.sPrefix.startsWith("#")) {
                
                // Check "eaMode.ea" for belonging to a debugger symbol group
                sSrc = sSrc + "  [" + eaMode.sPrefix + GetAddressSymbol(eaMode.ea, -1);
                
                if (!sOp.equals("LEA") && !sOp.equals("PEA") && !sOp.equals("JMP") && !sOp.equals("JSR")) {
                    try {
                        sSrc = sSrc + "=" + Integer.toHexString(eaMode.GetData());
                    }
                    catch (Throwable e) {sSrc = sSrc + "=???";};
                }
                sSrc = sSrc + "]";
            }
        }

        return DumpHex(addr) + ": " + PadString(sBytes,15) + (Break(addr, false)? "*":" ") + PadString(sOp,8) + PadString(sSrc,40) + ";";
    }

}
