/*  HWLCDDragonBall.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


class HWLCDDragonBall extends HWLCDRegs
{
    private Device dev;
    private CPUMem mem;
    

    /*  List of supported DragonBall LCD Controller registers
     */
    public static final int LCDREGS_BASE        = 0xfffffa00;
    public static final int LCDREGS_SIZE        = 0x00000034;
    public static final int LCDREGS_LIMIT       = LCDREGS_BASE + LCDREGS_SIZE;
    
    public static final int LCDREG_SSA          = 0X00;         // LCD Screen Starting Address Register (LSSA, 32-bit)
    public static final int LCDREG_VPW          = 0X05;         // LCD Virtual Page Width Register (LVPW, 8-bit, normally set to 10, units are words)
    public static final int LCDREG_XMAX         = 0X08;         // LCD Screen Width Register (LXMAX, 16-bit)
    public static final int LCDREG_YMAX         = 0X0A;         // LCD Screen Height Register (LYMAX, 16-bit)
    public static final int LCDREG_CXP          = 0X18;         // LCD Cursor X Position Register (LCXP, 16-bit)
    public static final int LCDREG_CYP          = 0X1A;         // LCD Cursor Y Position Register (LCYP, 16-bit)
    public static final int LCDREG_CWCH         = 0X1C;         // LCD Cursor Width & Height Register (LCWCH, 16-bit)
    public static final int LCDREG_BLKC         = 0X1F;         // LCD Blink Control Register (LBLKC, 8-bit)
    public static final int LCDREG_PICF         = 0X20;         // LCD Panel Interface Configuration Register (LPICF, 8-bit)
                                                                //  (bit 0 normally clear for 1-bit mode, set for 2-bit mode)
    public static final int LCDREG_POLCF        = 0X21;         // LCD Polarity Configuration Register (LPOLCF, 8-bit)
    public static final int LCDREG_ACDRC        = 0X23;         // ACD (M) Rate Control Register (LACDRC, 8-bit)
    public static final int LCDREG_PXCD         = 0X25;         // LCD Pixel Clock Divider Register (LPXCD, 8-bit)
    public static final int LCDREG_CKCON        = 0X27;         // LCD Clocking Control Register (LCKCON, 8-bit)
    public static final int CKCON_LCDON               = 0x80;   // bit 7 enables LCD controller if set, disables if clear
    public static final int LCDREG_LBAR         = 0X29;         // LCD Last Buffer Address Register (LLBAR, 8-bit, normally same as VPW)
    public static final int LCDREG_OTCR         = 0X2B;         // LCD Octet Terminal Count Register (LOTCR, 8-bit)
    public static final int LCDREG_POSR         = 0X2D;         // LCD Panning Offset Register (LPOSR, 8-bit)
    public static final int LCDREG_FRCM         = 0X31;         // LCD Frame-Rate Modulation Control Register (LFRCM, 8-bit)
    public static final int LCDREG_GPMR         = 0X32;         // LCD Gray Palette Mapping Register (LGPMR, 16-bit)

    
    public static final int DEF_SCREEN_WIDTH    = 160;
    public static final int DEF_SCREEN_HEIGHT   = 160;

    static final short[] abLCDRegsInit = {
        LCDREG_VPW,     (DEF_SCREEN_WIDTH/8)/2,
        LCDREG_BLKC,    0x7F,
        LCDREG_CKCON,   0x40,                                   // LCD controller initially disabled
        LCDREG_LBAR,    (DEF_SCREEN_WIDTH/8)/2,                 // we initialize this to 10, they seem to prefer 9, hmmm
        LCDREG_OTCR,    0x3F,
        LCDREG_FRCM,    0xB9,
    };

    static final int[] awLCDRegsInit = {
        LCDREG_XMAX,    0x03FF,
        LCDREG_YMAX,    0x01FF,
        LCDREG_CWCH,    0x0101,
        LCDREG_GPMR,    0x1073
    };
    
    
    /*  HWLCDDragonBall()
     *
     *  Used by HWDragonBall() to create the set of LCD DragonBall registers.
     */
    HWLCDDragonBall(Device dev)
    {
        this.dev = dev;
        addrBase = LCDREGS_BASE;
        addrLimit = LCDREGS_LIMIT;
    }


    /*  Init(mem)
     *
     *  Initialize all the LCD-specific hardware registers that are defined to have non-zero starting values,
     *  and define the special bank(s) of video RAM, if any.
     */
    public void Init(CPUMem mem)
    {
        int i;
        this.mem = mem;
        
        // Note: We don't need to call InitDeviceBanks(LCDREGS_BASE, LCDREGS_SIZE), because this guy's registers are
        // part of the standard DragonBall register set.

        for (i=0; i<abLCDRegsInit.length; i+=2)
            mem.SetByteEx(LCDREGS_BASE + abLCDRegsInit[i], abLCDRegsInit[i+1]);

        for (i=0; i<awLCDRegsInit.length; i+=2)
            mem.SetWordEx(LCDREGS_BASE + awLCDRegsInit[i], awLCDRegsInit[i+1]);
    }


    /*  Save(file)
     *
     *  Write the current set of device registers to the specified file.
     */
    public void Save(FileStream file)
    {
        // Nothing to do, since the DragonBall LCD register set is part of the main DragonBall register set
    }
    
    
    /*  Restore(file)
     *
     *  Read the current set of device registers from the specified file.
     */
    public boolean Restore(FileStream file)
    {
        // Nothing to do, since the DragonBall LCD register set is part of the main DragonBall register set
        
        // However, since the DragonBall register Restore() handler doesn't generate Set* calls for every
        // register, normal Device.ResetScreen() notification won't automatically occur, so we have to do it here.
        
        if (GetLCDStatus())
            dev.ResetScreen(this);
        
        return true;
    }
    
    
    /*  GetLCDStatus()
     *
     *  Return true if the LCD controller is enabled and the LCD is on.
     */
    public boolean GetLCDStatus()
    {
        if ((mem.GetByteEx(HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PFDATA) & HWDragonBall.PFDATA_LCDENABLE) == 0)
            return false;

        if ((mem.GetByteEx(LCDREGS_BASE + LCDREG_CKCON) & CKCON_LCDON) == 0)
            return false;
        
        return true;
    }


    /*  GetBufferWidth()
     *
     *  Return width of screen buffer (in terms of words)
     */
    public int GetBufferWidth()
    {
        int cWords = mem.GetByteEx(LCDREGS_BASE + LCDREG_LBAR);
        if ((cWords & 0x1) != 0)
            cWords++;           // BUGBUG: Why is this sometimes 9 instead of 10 for standard 1BPP operation? -JP
        return cWords;
    }


    /*  GetBufferAddress()
     *
     *  Return address of screen buffer
     */
    public int GetBufferAddress()
    {
        return mem.GetLongEx(LCDREGS_BASE + LCDREG_SSA);
    }


    /*  GetPaletteReds()
     *
     *  Return array of palette red components, if any
     */
    public byte[] GetPaletteReds()
    {
        return null;
    }
    
    
    /*  GetPaletteGreens()
     *
     *  Return array of palette green components, if any
     */
    public byte[] GetPaletteGreens()
    {
        return null;
    }
    
    
    /*  GetPaletteBlues()
     *
     *  Return array of palette blue components, if any
     */
    public byte[] GetPaletteBlues()
    {
        return null;
    }
    
    
    /*  GetByte(addr)
     *
     *  Get one byte from the register set.
     */
    public final byte GetByte(int addr)
    {
        byte data = mem.GetByteEx(addr);
        
        int reg = addr - LCDREGS_BASE;
        
        switch (reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.GetByte(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        return data;
    }
    

    /*  GetWord(addr)
     *
     *  Get one word from the register set.
     */
    public final int GetWord(int addr)
    {
        int data = mem.GetWordEx(addr);
        
        int reg = addr - LCDREGS_BASE;
        
        switch (reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.GetWord(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        return data;
    }
    

    /*  GetLong(addr)
     *
     *  Get one long from the register set.
     */
    public final int GetLong(int addr)
    {
        int data = mem.GetLongEx(addr);

        int reg = addr - LCDREGS_BASE;
        
        switch (reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.GetLong(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        return data;
    }
    

    /*  SetByte(addr, data)
     *
     *  Set one byte in the register set.
     */
    public final void SetByte(int addr, int data)
    {
        byte bPrev = 0;
        int reg = addr - LCDREGS_BASE;
        
        switch (reg) {
        case LCDREG_VPW:
            // Catch anyone switching out of 1BPP mode:
            // Emulator.Assert_Debug(data == 10, "HWLCDDragonBall.SetByte(VPW): data != 10");
            break;
            
        case LCDREG_CKCON:
            bPrev = mem.GetByteEx(addr);
            break;
            
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.SetByte(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        
        mem.SetByteEx(addr, data);
        
        switch (reg) {
        case LCDREG_CKCON:
            if ((bPrev & CKCON_LCDON) != (data & CKCON_LCDON))
                dev.ResetScreen(this);
            break;
        }    
    }
    

    /*  SetWord(addr, data)
     *
     *  Set one word in the register set.
     */
    public final void SetWord(int addr, int data)
    {
        int reg = addr - LCDREGS_BASE;
        
        switch(reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.SetWord(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        
        mem.SetWordEx(addr, data);
    }
    

    /*  SetLong(addr, data)
     *
     *  Set one long in the register set.
     */
    public final void SetLong(int addr, int data)
    {
        int reg = addr - LCDREGS_BASE;
        
        switch(reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDDragonBall.SetLong(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        
        mem.SetLongEx(addr, data);
    }
    
}
