/*  CPUFlags.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the flags for the CPU.  The various bit definitions
 *  are public, but the flags variable and other related state variables are protected
 *  (ie, not intended to be accessed directly, except by very knowledgable code,
 *  such as the code in CPUModes).
 */


class CPUFlags extends CPUDefs
{
    private CPUMem mem;
    
    // These are the actual CPU flags, with the exception of the CCR bits, which are
    // are recorded "lazily" in the various other arithmetic state variables, below.
    // As a result, the CCR bits cannot be obtained by merely examining "flags";  you must
    // always call GetFlags() or one of its siblings to get the CCR bit(s) as well.

    protected int flags;
    
    protected int flagNNew, flagZNew, flagZTmp;
    protected int flagCSrc, flagCDst;
    protected int flagXSrc, flagXDst;
    protected int flagVSrc, flagVDst, flagVNew;

    public static final int FLAGS_CARRY        = 0x0001;
    public static final int FLAGS_OVERFLOW     = 0x0002;
    public static final int FLAGS_ZERO         = 0x0004;
    public static final int FLAGS_NEGATIVE     = 0x0008;
    public static final int FLAGS_EXTEND       = 0x0010;
    public static final int FLAGS_CCR          = 0x001f;
    public static final int FLAGS_RESERVED1    = 0x00e0;
    public static final int FLAGS_IPM          = 0x0700;        // Interrupt Priority Mask
    public static final int FLAGS_IPM_SHIFT    = 8;
    public static final int FLAGS_RESERVED2    = 0x0800;
    public static final int FLAGS_MI           = 0x1000;        // (always 0 on 68000)
    public static final int FLAGS_SU           = 0x2000;        // 1 == supervisor mode
    public static final int FLAGS_T0           = 0x4000;        // (always 0 on 68000)
    public static final int FLAGS_T1           = 0x8000;        // 1 == trace on any instruction


    void InitFlags(CPUMem mem)
    {
        this.mem = mem;
        ResetFlags(FLAGS_SU);
    }


    void ResetFlags(int flagsNew)
    {
        SetFlags(flagsNew);
        fCPU &= ~CPU_RESETFLAGS;
    }

    
    int GetFlags()
    {
        int flagsNew = flags & ~(FLAGS_EXTEND | FLAGS_NEGATIVE | FLAGS_ZERO | FLAGS_OVERFLOW | FLAGS_CARRY);
        
        // The following code is deliberate in-lining of the individual GetFlag* functions, for performance
        
        if (flagZNew == 0)
            flagsNew |= FLAGS_ZERO;
        
        if (flagNNew < 0)
            flagsNew |= FLAGS_NEGATIVE;
        
        if (((long)flagCSrc & 0xffffffffL) > ((long)flagCDst & 0xffffffffL))
            flagsNew |= FLAGS_CARRY;
        
        if (((long)flagXSrc & 0xffffffffL) > ((long)flagXDst & 0xffffffffL))
            flagsNew |= FLAGS_EXTEND;
        
        if ((flagVNew < 0) != (flagVDst < 0) && (flagVSrc < 0) != (flagVDst < 0))
            flagsNew |= FLAGS_OVERFLOW;
        
        // BUGBUG: No one should be depending on GetFlags() propagating the arithmetic states to the CCR bits.
        // The main motivation for NOT propagating is that the debugger calls GetFlags(), and we don't want the
        // debugger to have any side-effects (even supposedly innocuous ones). -JP
        //
        // return flags = flagsNew;
        
        return flagsNew;
    }
    
    
    int GetFlagX()
    {
        // This needs to be an unsigned comparison, but unfortunately, Java doesn't
        // have unsigned data types.  The easiest thing to do is promote our variables to
        // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
        // positive values.
        //
        // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
        // the masks would be treated as signed integers, and automatic promotion to longs
        // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
        
        return (((long)flagXSrc & 0xffffffffL) > ((long)flagXDst & 0xffffffffL))? -1 : 0;
    }
    
    
    int GetFlagN()
    {
        return (flagNNew < 0)? -1 : 0;
    }
    
    
    int GetFlagZ()
    {
        return (flagZNew == 0)? -1 : 0;
    }
    
    
    int GetFlagV()
    {
        return ((flagVNew < 0) != (flagVDst < 0) && (flagVSrc < 0) != (flagVDst < 0))? -1 : 0;
    }
    
    
    int GetFlagC()
    {
        // This needs to be an unsigned comparison, but unfortunately, Java doesn't
        // have unsigned data types.  The easiest thing to do is promote our variables to
        // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
        // positive values.
        //
        // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
        // the masks would be treated as signed integers, and automatic promotion to longs
        // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
        
        return (((long)flagCSrc & 0xffffffffL) > ((long)flagCDst & 0xffffffffL))? -1 : 0;
    }
    
    
    int GetFlagHI()
    {
        return (/*GetFlagC() == 0*/ ((long)flagCSrc & 0xffffffffL) <= ((long)flagCDst & 0xffffffffL) && /*GetFlagZ() == 0*/ flagZNew != 0)? -1 : 0;
    }
    
    
    int GetFlagGE()
    {
        boolean N = GetFlagN() != 0;
        boolean V = GetFlagV() != 0;
        return (N && V || !N && !V)? -1 : 0;
    }
    
    
    int GetFlagLT()
    {
        boolean N = GetFlagN() != 0;
        boolean V = GetFlagV() != 0;
        return (N && !V || !N && V)? -1 : 0;
    }
    
    
    int GetFlagGT()
    {
        boolean Z = GetFlagZ() != 0;
        boolean N = GetFlagN() != 0;
        boolean V = GetFlagV() != 0;
        return (N && V && !Z || !N && !V && !Z)? -1 : 0;
    }
    
    
    int GetFlagLE()
    {
        boolean Z = GetFlagZ() != 0;
        boolean N = GetFlagN() != 0;
        boolean V = GetFlagV() != 0;
        return (Z || N && !V || !N && V)? -1 : 0;
    }
    
    
    int GetFlagIPM()
    {
        return (flags & FLAGS_IPM) >> FLAGS_IPM_SHIFT;
    }


    void SetFlags(byte flagsNew)
    {
        flagZNew = 0;
        flagNNew = 0;
        flagVNew = flagVDst = 0;
        flagCSrc = flagCDst = 0;
        flagXSrc = flagXDst = 0;
        
        if ((flagsNew & FLAGS_ZERO) == 0)
            flagZNew = -1;
        
        if ((flagsNew & FLAGS_NEGATIVE) != 0)
            flagNNew = -1;
        
        if ((flagsNew & FLAGS_CARRY) != 0)
            flagCSrc = -1;
            
        if ((flagsNew & FLAGS_EXTEND) != 0)
            flagXSrc = -1;
            
        if ((flagsNew & FLAGS_OVERFLOW) != 0) {
            flagVNew = flagVSrc = -1;
        }
    }

    
    void SetFlags(int flagsNew)
    {
        // Before we blow away the original flag bits, let's see if the interrupt level
        // is dropping;  if so, we'll want to set CPU_CHECKINTS....
        if ((flagsNew & FLAGS_IPM) < (flags & FLAGS_IPM))
            fCPU |= CPU_CHECKINTS;
        
        // Clear everything outside the CCR bits
        flags &= FLAGS_CCR;
        
        // We probably don't need to carefully exclude the caller's CCR bits at this step,
        // since the CCR bits are always computed dynamically, but let's avoid any confusion
        flags |= (flagsNew & ~FLAGS_CCR);
        
        SetFlags((byte)flagsNew);
    }
    
    
    void SetFlagX(int x)
    {
        flagXSrc = flagXDst = 0;
        if (x != 0)
            flagXSrc = -1;
    }
    
    
    void SetFlagN(int n)
    {
        flagNNew = (n != 0)? -1 : 0;
    }
    
    
    void SetFlagZ(int z)
    {
        flagZNew = (z == 0)? -1 : 0;
    }
    
    
    void SetFlagV(int v)
    {
        flagVNew = flagVDst = 0;
        if (v != 0)
            flagVNew = flagVSrc = -1;
    }
    
    
    void SetFlagC(int c)
    {
        flagCSrc = flagCDst = 0;
        if (c != 0)
            flagCSrc = -1;
    }
    
    
    void SetFlagCX(int c)
    {
        flagCSrc = flagCDst = 0;
        flagXSrc = flagXDst = 0;
        if (c != 0)
            flagCSrc = flagXSrc = -1;
    }


    void SetORFlags(byte b)             // used to OR flags into CCR
    {
        SetFlags((byte)(GetFlags() | b));
    }


    void SetORFlags(int s)              // used to OR flags into SR (PRIVILEGED)
    {
        if ((flags & FLAGS_SU) == 0) {
            mem.GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        SetFlags(GetFlags() | s);
    }


    void SetANDFlags(byte b)            // used to AND flags out of CCR
    {
        SetFlags((byte)(GetFlags() & b));
    }


    void SetANDFlags(int s)             // used to AND flags out of SR (PRIVILEGED)
    {
        if ((flags & FLAGS_SU) == 0) {
            mem.GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        SetFlags(GetFlags() & s);
    }


    void SetEORFlags(byte b)            // used to EOR flags in CCR
    {
        SetFlags((byte)(GetFlags() ^ b));
    }


    void SetEORFlags(int s)             // used to EOR flags in SR (PRIVILEGED)
    {
        if ((flags & FLAGS_SU) == 0) {
            mem.GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        SetFlags(GetFlags() ^ s);
    }

    
    void SetFlagIPM(int iLvl)
    {
        flags &= ~FLAGS_IPM;
        flags |= (iLvl << FLAGS_IPM_SHIFT);
    }


    public void CopyFlags(CPUFlags snap)
    {
        flags    = snap.flags;
        flagNNew = snap.flagNNew;
		flagZNew = snap.flagZNew;
	    flagCSrc = snap.flagCSrc;
        flagCDst = snap.flagCDst;
		flagXSrc = snap.flagXSrc;
        flagXDst = snap.flagXDst;
        flagVSrc = snap.flagVSrc;
		flagVDst = snap.flagVDst;
		flagVNew = snap.flagVNew;
    }
    
}
