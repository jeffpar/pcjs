/*  HWLCDEpson1375.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


class HWLCDEpson1375 extends HWLCDRegs
{
    private Device dev;
    private CPUMem mem;
    
    public static final int MAX_COLORS          = 256;
    byte[] abPaletteReds, abPaletteGreens, abPaletteBlues;
    
    // SEDREG_LUTADDR selects a CLUT position, but this value (0-2) indicates which color component
    // (0=Red, 1=Green, 2=Blue) at that position is supposed to be acccessed next.  BUGBUG: Add this to
    // the chunk of register data that we save/restore on Save() and Restore() calls. -JP
    int iCLUTColor;


    /*  List of supported Epson SED-1375 Graphics Controller registers
     *  (see http://www.erd.epson.com/vdc/pdf/1375/contents.html)
     *
     *  On a Palm IIIc, the base address is 0x1f000000, where 80K (81920 or 0x14000) of VRAM and CLUT memory lies.
     *  At offset 0x1ffe0, the registers begin.
     */
    public static final int SEDVRAM_BASE        = 0x1f000000;   // base of VRAM and CLUT
    public static final int SEDVRAM_SIZE        = 0x00014000;   // size of VRAM and CLUT
    
    public static final int SEDREGS_BASE        = 0x1f01ffe0;
    public static final int SEDREGS_SIZE        = 0x00000020;
    public static final int SEDREGS_LIMIT       = SEDREGS_BASE + SEDREGS_SIZE;
    
    public static final int SEDREG_REVCODE      = 0x00;
    public static final int SEDREG_MODE0        = 0x01;         // 3.5 init: 0x81
    public static final int MODE0_TFTMODE           = 0x80;
    public static final int MODE0_DUALPANEL         = 0x40;
    public static final int MODE0_COLORPANEL        = 0x20;
    public static final int MODE0_FPLINEHI          = 0x10;
    public static final int MODE0_FPFRAMEHI         = 0x08;
    public static final int MODE0_FPSHIFTMASK       = 0x04;
    public static final int MODE0_12BITPANEL        = 0x01;
    public static final int SEDREG_MODE1        = 0x02;         // 3.5 init: 0xa0, then 0xe0
    public static final int SEDREG_MODE2        = 0x03;         // 3.5 init: 0x03
    public static final int MODE2_PWRSAVEBITS       = 0x03;     
    public static final int SEDREG_HPS          = 0x04;         // 3.5 init: 0x13 (HorzPanelSize = (HorzPanelRes/8)-1)
    public static final int SEDREG_VPSLO        = 0x05;         // 3.5 init: 0x9f (VertPanelSize = VertPanelRes-1)
    public static final int SEDREG_VPSHI        = 0x06;         // 3.5 init: 0x00
    public static final int SEDREG_FPLSP        = 0x07;         // 3.5 init: 0x00 (FPLineStartPosition)
    public static final int SEDREG_HNDP         = 0x08;         // 3.5 init: 0x00 (HorizNonDisplayPeriod)
    public static final int SEDREG_FPFSP        = 0x09;         // 3.5 init: 0x01 (FPFrameStartPosition)
    public static final int SEDREG_VNDP         = 0x0a;         // 3.5 init: 0x2a (VertNonDisplayPeriod (lines))
    public static final int VNDP_STATUS              = 0x80;    // routines like PrvUpdateCLUT want to see this status bit set
    public static final int SEDREG_MODRATE      = 0x0b;         // 3.5 init: 0x00 (MODRate, for passive LCD panels only)
    public static final int SEDREG_S1ADDRLO     = 0x0c;         // 3.5 init: 0x00 (Screen1StartAddressLSB)
    public static final int SEDREG_S1ADDRHI     = 0x0d;         // 3.5 init: 0x00 (Screen1StartAddressMSB)
    public static final int SEDREG_S2ADDRLO     = 0x0e;         // 3.5 init: 0x00 (Screen2StartAddressLSB)
    public static final int SEDREG_S2ADDRHI     = 0x0f;         // 3.5 init: 0x00 (Screen2StartAddressMSB)
    public static final int SEDREG_S1ADDRBIT    = 0x10;         // 3.5 init: 0x00 (Screen1StartAddressMSBit)
    public static final int SEDREG_MAOFF        = 0x11;         // 3.5 init: 0x00 (MemoryAddressOffset)
    public static final int SEDREG_S1VSLO       = 0x12;         // 3.5 init: 0x9f (Screen1VerticalSizeLSB)
    public static final int SEDREG_S1VSHI       = 0x13;         // 3.5 init: 0x00 (Screen1VerticalSizeMSB)
    public static final int SEDREG_UNUSED1      = 0x14;
    public static final int SEDREG_LUTADDR      = 0x15;         // lookUpTableAddress
    public static final int SEDREG_UNUSED2      = 0x16;
    public static final int SEDREG_LUTDATA      = 0x17;         // lookUpTableData
    public static final int SEDREG_GPIOCONF     = 0x18;         // 3.5 init: 0x01 (GPIOConfigurationControl)
    public static final int SEDREG_GPIOSTAT     = 0x19;         // 3.5 init: 0x00 (GPIOStatusControl)
    public static final int SEDREG_SCRATCHPAD   = 0x1a;         // scratchPad
    public static final int SEDREG_SWIVELMODE   = 0x1b;         // 3.5 init: 0x00 ("landscape mode")
    public static final int SWIVELMODE_SWIVELVIEW   = 0x80;     // selects "swivelview mode" instead of "landscape mode"
    public static final int SEDREG_LBCR         = 0x1c;         // 3.5 init: 0x00 ("line byte count register", for "swivelview mode" only)
    public static final int SEDREG_UNUSED3      = 0x1d;
    public static final int SEDREG_UNUSED4      = 0x1e;
    public static final int SEDREG_UNUSED5      = 0x1f;
    
    protected static final int SAVESEDVRAM_SIG  = 0x53454431;
    protected static final int SAVESEDREGS_SIG  = 0x53454432;
    
    
    /*  HWLCDEpson1375()
     *
     *  Used by HWDragonBall() to create the set of LCD DragonBall registers.
     */
    HWLCDEpson1375(Device dev)
    {
        this.dev = dev;
        addrBase = SEDREGS_BASE;
        addrLimit = SEDREGS_LIMIT;
        
        abPaletteReds = new byte[MAX_COLORS];
        abPaletteGreens = new byte[MAX_COLORS];
        abPaletteBlues = new byte[MAX_COLORS];
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
        
        // BUGBUG: We need to supply SED banks of memory/registers *only* if we're running a 3.5 ROM that
        // expects to find an Epson SED-1375 Graphics Controller.  But, since we're trying to be infinitely
        // adaptable, we'll just always allocate the banks and watch what happens. -JP

        mem.InitBanks(SEDVRAM_BASE, SEDVRAM_SIZE, mem.BANKFLAG_RAM);
        mem.InitDeviceBanks(SEDREGS_BASE, SEDREGS_SIZE);
    }


    /*  Save(file)
     *
     *  Write the current set of device registers to the specified file.
     */
    public void Save(FileStream file)
    {
        if (GetLCDStatus()) {
            
            // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
            file.WriteInt(SAVESEDVRAM_SIG);
            file.WriteInt(SEDVRAM_SIZE);
            file.WriteInt(SEDVRAM_BASE);
            
            mem.GetBytes(SEDVRAM_BASE, SEDVRAM_SIZE, file);
        
            // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
            file.WriteInt(SAVESEDREGS_SIG);
            file.WriteInt(SEDREGS_SIZE);
            file.WriteInt(SEDREGS_BASE);
            
            mem.GetBytes(SEDREGS_BASE, SEDREGS_SIZE, file);
        }
    }
    
    
    /*  Restore(file)
     *
     *  Read the current set of device registers from the specified file.
     */
    public boolean Restore(FileStream file)
    {
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        int sig = file.ReadInt();
        int length = file.ReadInt();
        int addr = file.ReadInt();
            
        if (sig != SAVESEDVRAM_SIG || length != SEDVRAM_SIZE || addr != SEDVRAM_BASE)
            return false;
        
        mem.SetBytes(addr, length, file);
        
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        sig = file.ReadInt();
        length = file.ReadInt();
        addr = file.ReadInt();
            
        if (sig != SAVESEDREGS_SIG || length != SEDREGS_SIZE || addr != SEDREGS_BASE)
            return false;
        
        mem.SetBytes(addr, length, file);
        
        return true;
    }


    /*  GetLCDStatus()
     *
     *  Return true if the LCD controller is enabled and the LCD is on.
     */
    public boolean GetLCDStatus()
    {
        return true;            // BUGBUG: fix (currently, the only "enable" trigger is in the palette code, which isn't right) -JP
    }


    /*  GetBufferWidth()
     *
     *  Return width of screen buffer (in terms of words)
     */
    public int GetBufferWidth()
    {
        return 160/2;           // BUGBUG: fix -JP
    }


    /*  GetBufferAddress()
     *
     *  Return address of screen buffer
     */
    public int GetBufferAddress()
    {
        return SEDVRAM_BASE;    // BUGBUG: fix -JP
    }


    /*  GetPaletteReds()
     *
     *  Return array of palette red components, if any
     */
    public byte[] GetPaletteReds()
    {
        return abPaletteReds;
    }
    
    
    /*  GetPaletteGreens()
     *
     *  Return array of palette green components, if any
     */
    public byte[] GetPaletteGreens()
    {
        return abPaletteGreens;
    }
    
    
    /*  GetPaletteBlues()
     *
     *  Return array of palette blue components, if any
     */
    public byte[] GetPaletteBlues()
    {
        return abPaletteBlues;
    }
    
    
    /*  GetByte(addr)
     *
     *  Get one byte from the register set.
     */
    public final byte GetByte(int addr)
    {
        byte data = mem.GetByteEx(addr);
        
        int reg = addr - SEDREGS_BASE;
        
        switch (reg) {
        case SEDREG_VNDP:
            data |= VNDP_STATUS;                // routines like PrvUpdateCLUT want to see this status bit set, so we oblige
            mem.SetByteEx(addr, data);          // and mirror the bit as well
            break;
            
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.GetByte(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
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
        
        int reg = addr - SEDREGS_BASE;
        
        switch (reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.GetWord(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
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

        int reg = addr - SEDREGS_BASE;
        
        switch (reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.GetLong(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
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
        int reg = addr - SEDREGS_BASE;
        
        switch (reg) {
        case SEDREG_LUTDATA:
            int iCLUTIndex = mem.GetByteEx(SEDREGS_BASE + SEDREG_LUTADDR) & 0xff;
            
            // This controller only supports up to 12-bit color panels, meaning each of the 3 RGB color values
            // are only 4 bits, and those bits must be written to the top nibble (bits 7-4) of the LUTDATA register.
            // PalmOS 3.5 appears to replicate the top nibble in the bottom nibble for some useless reason, but
            // who cares -- we have to map these 4-bit color values to 8-bit color values, and zeroing the low 4 bits
            // of each LUTDATA write is not only an easy way to do that, but possibly even the *correct* way.  ;-) -JP
            data &= 0xf0;
            
            switch (iCLUTColor) {
            case 0:
                abPaletteReds[iCLUTIndex] = (byte)data;
                break;
            case 1:
                abPaletteGreens[iCLUTIndex] = (byte)data;
                break;
            case 2:
                // BUGBUG: Technically, the Red and Green entries aren't supposed to be updated until the Blue
                // entry is updated, but I doubt we'll be running any code that actually depends on that subtlety -JP
                abPaletteBlues[iCLUTIndex] = (byte)data;
                break;
            }
            iCLUTColor++;
            if (iCLUTColor > 2) {
                iCLUTColor = 0;
                iCLUTIndex++;
                if (iCLUTIndex >= MAX_COLORS)
                    iCLUTIndex = 0;
                mem.SetByteEx(SEDREGS_BASE + SEDREG_LUTADDR, iCLUTIndex);
                if (iCLUTIndex == 0)
                    dev.ResetScreen(this);      // BUGBUG: I don't know what other trigger to use to "enable" this LCD controller -JP
            }
            break;
            
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.SetByte(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        mem.SetByteEx(addr, data);
    }
    

    /*  SetWord(addr, data)
     *
     *  Set one word in the register set.
     */
    public final void SetWord(int addr, int data)
    {
        int reg = addr - SEDREGS_BASE;
        
        switch(reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.SetWord(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
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
        int reg = addr - SEDREGS_BASE;
        
        switch(reg) {
        default:
          //Emulator.Assert_Debug(false, "HWLCDEpson1375.SetLong(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
        }
        mem.SetLongEx(addr, data);
    }
    
}
