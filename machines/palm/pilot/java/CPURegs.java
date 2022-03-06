/*  CPURegs.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the registers for the CPU.
 */


class CPURegs extends CPUFlags
{
    protected int pc;                   // program counter
    protected int pc0, pc1;             // program counters for the current and previous instructions
    protected int pcTrap;               // program counter for the last TRAP executed
    protected int ssp;                  // supervisor stack pointer                                
    protected int usp;                  // user stack pointer (to save/restore a[7] on user/supervisor transitions)
    protected int[] d={0,0,0,0,0,0,0,0};// data registers
    protected int[] a={0,0,0,0,0,0,0,0};// address registers
    
    protected int cStep;                // instruction step counter
    protected int iPendingException;    // set to pending exception #, 0 if none
    protected int addrPendingException; // set to exception-specific address, if any (eg, EA from EXCEPTION_ADDRESS_ERROR)
    
    // Internal registers for effective address calculations, etc.
    protected int dataSrc, dataDst, dataNew, dataTmp, dataSign, dataWidth;
    
    // Internal registers for performance monitoring
    protected int cCycles;              // cycle counter
    protected int cCyclesDebug;         // cycle counter maintained in DEBUG only
    protected int cOpcodes;             // opcode (instruction) counter
    protected int cOpcodesUncycled;     // count of opcodes that have not been attributed to cCycles
    protected int cInterrupts;          // count of interrupts
    
    protected static final int SAVEREGS_SIG     = 0x52454753;
    

    public void InitRegs(CPUMem mem)
    {
        int i;
        InitFlags(mem);
        for (i=0; i<d.length; i++)
            d[i] = 0;
        for (i=0; i<a.length; i++)
            a[i] = 0;
        cStep = 0;
        iPendingException = EXCEPTION_NONE;
        ResetCounters();
        cOpcodesUncycled = 0;           // no need to reset this in ResetCounters() because it's not allowed to become arbitrarily large
    }
    

    public void ResetCounters()
    {
        cCycles = 0;
        cCyclesDebug = 0;
        cOpcodes = 0;
        cInterrupts = 0;
    }


    public void CopyRegs(CPURegs snap)
    {
	    pc = snap.pc;
	    ssp = snap.ssp;
	  //isp = snap.isp;
	    usp = snap.usp;
        System.arraycopy(snap.a, 0, a, 0, a.length);
        System.arraycopy(snap.d, 0, d, 0, d.length);
    }
    
    
    /*  SaveRegs(file)
     *
     *  Write the current set of registers to the specified file.
     */
    public void SaveRegs(FileStream file)
    {
        int i;
        
        file.WriteInt(SAVEREGS_SIG);
        file.WriteInt(21*4);
        file.WriteInt(0);
        
        for (i=0; i<d.length; i++)
            file.WriteInt(d[i]);
        for (i=0; i<a.length; i++)
            file.WriteInt(a[i]);
        
        file.WriteInt(GetFlags());
        file.WriteInt(pc);
        file.WriteInt(ssp);
        file.WriteInt(usp);
        file.WriteInt(iPendingException);
    }
    
    
    /*  RestoreRegs(file)
     *
     *  Read the current set of registers from the specified file.
     */
    public boolean RestoreRegs(FileStream file)
    {
        int i;
        int sig = file.ReadInt();
        int length = file.ReadInt();
        int addr = file.ReadInt();
            
        if (sig != SAVEREGS_SIG || length != 21*4 || addr != 0)
            return false;
        
        for (i=0; i<d.length; i++)
            d[i] = file.ReadInt();
        for (i=0; i<a.length; i++)
            a[i] = file.ReadInt();
        
        ResetFlags(file.ReadInt());
        pc = file.ReadInt();
        ssp = file.ReadInt();
        usp = file.ReadInt();
        iPendingException = file.ReadInt();
        return true;
    }
    
    
    /** @conditional (DEBUG) */
    public final void AddCycles_Debug(int cCyclesAdd)
    {
        cCyclesDebug += cCyclesAdd;
        
        if (cCyclesDebug < 0)           // if the cycle count underflows, reset all the counters
            ResetCounters();
    }

}
