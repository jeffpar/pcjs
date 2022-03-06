/*  CPUMem.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the memory subsystem for the CPU.  Currently, I limit the effective
 *  address space to 32Mb, and then divide that into a series of 4Kb banks, for a maximum of
 *  8192 banks.  By simply chopping the top 7 bits off every 32-bit address, that 32Mb
 *  is replicated throughout the entire 4Gb address space.  Doing that also frees up the top
 *  7 bits in every aBankOffsets entry, allowing us to use those bits as flags (see BANKFLAG_*)
 *  and avoid having to index into a separate byte array for flags -- but at the expense
 *  of having to mask the values in aBankOffsets before using them.
 *
 *  The base address of the DragonBall h/w registers is normally 0xfffff000 (the last 4Kb of
 *  the entire address space), which means that'll be the last 4kb of the last bank of every
 *  32Mb increment.
 */


class CPUMem extends CPURegs
{
    // If you want to change physical bank size and/or total system memory, change
    // BANK_SIZE (and BANK_SHIFT) and/or MAX_MEMORY_SIZE as appropriate.  All other BANK-related
    // constants should derive from those values.
    
#if BANK_4KB
    public static final int BANK_SIZE           = 0x00001000;   // 4Kb banks
    public static final int BANK_SHIFT          = 12;           // (1 << BANK_SHIFT) must be equal to BANK_SIZE
#else
    public static final int BANK_SIZE           = 0x00004000;   // 16Kb banks
    public static final int BANK_SHIFT          = 14;           // (1 << BANK_SHIFT) must be equal to BANK_SIZE
#endif
	
    public static final int MAX_MEMORY_SIZE     = 0x02000000;   // 32Mb max
    public static final int ADDRESS_MASK        = MAX_MEMORY_SIZE-1;
    
    public static final int DEF_RAM_SIZE        = BANK_SIZE*2;  // 32Kb, only used for non-ROM binaries
    
    public static final int MAX_BANKS           = (MAX_MEMORY_SIZE/BANK_SIZE);
    public static final int BANK_SHIFTMASK      = (MAX_BANKS-1);
    public static final int BANK_OFFSETMASK     = (BANK_SIZE-1);
    
    public static final int BANKFLAG_MASK       = 0xfe000000;   // BUGBUG: assert this equals ~ADDRESS_MASK
    public static final int BANKFLAG_NONE       = 0x00000000;
    public static final int BANKFLAG_RAM        = 0x02000000;
    public static final int BANKFLAG_ROM        = 0x04000000;
    public static final int BANKFLAG_DEVICE     = 0x08000000;
    public static final int BANKFLAG_TEMP       = 0x10000000;
  //public static final int BANKFLAG_DIRTY      = 0x80000000;
    
    int cbRAM;                          // warning: when you pick a RAM size, make it a BANK_SIZE multiple (particularly for InitTempBanks() sake)
    byte[][] aBanks = null;
    int[] aBankOffsets = null;
    
    int cbCode;                         // if ROM, this is the size of the entire ROM
    int addrCode;                       // if ROM, this is from ROMHDR_RESETADDR (after masking off the low 15 bits)
    int wROMHdrVer;                     // if ROM, this is from ROMHDR_HDRVER
    
    boolean fPagedROM;                  // if paged ROM, this is true
    String sPagedROMPath;               // if paged ROM, this is the URL to all the individual page files
    StringBuffer sPagedROMFile;         // if paged ROM, this string is used to construct page file names (which we also synchronize on)
    int iFirstPagedROMBank;             // if paged ROM, this is the first bank # of the ROM (within the entire 32-bit address space)
    int cUnpagedROMBanks;               // if paged ROM, this is the number of banks we still haven't paged in yet
    int cPagedROMBanks;                 // if paged ROM, this is the total number of banks in the ROM (including even partial banks, if any)
    int iNextPagedROMSeq;               // if paged ROM, this is the index of the next entry in abPagedROMSeq containing a bank to page in
    byte[] abPagedROMSeq;               // if paged ROM, this is the array of banks of ROM to page in, and in the order in which to page them
    private boolean fFgndPaging;        // if paged ROM, this is set whenever foreground paging is in progress
    
    HWDragonBall hwregs;
    
    protected Emulator emul;
    protected CPUThread cpu;
    protected DeviceScreen screen;
    protected DebuggerInterface debugger;
    
    protected static final int SAVERAM_SIG      = 0x52414D00;
    

    // Here's where we define what the header of a PalmOS ROM memory image looks like.  We could
    // encapsulate it in a separate module, but I'm not that interested in supporting PalmOS long-term.
    // This is just a bootstrapping issue.
    
    private static final int ROMHDR_INITSTACK   = 0x00000000;   // eg, 0x00003000
    private static final int ROMHDR_RESETADDR   = 0x00000004;   // eg, 0x10c00226
    private static final int ROMHDR_SIG         = 0x00000008;   // eg, 0xfeedbeef (see ROMSIG_*)
    private static final int ROMHDR_HDRVER      =     0x000c;   // eg, 0x0002
    private static final int ROMHDR_CARDFLAGS   =     0x000e;   // eg, 0x0000
    private static final int ROMHDR_CARDNAME    =       0x10;   // eg, "PalmCard" 0x0 0x0 ...
    private static final int ROMHDR_OEMNAME     =       0x30;   // eg, "Palm Computing" 0x0 0x0 ...
    private static final int ROMHDR_CARDVER     =     0x0050;   // eg, 0x0001
    private static final int ROMHDR_CREATION    = 0x00000052;   // eg, 0xb124377e
    private static final int ROMHDR_RAMBLKS     =     0x0056;   // eg, 0x0001
    private static final int ROMHDR_RAMBLKLIST  = 0x00000058;   // eg, 0x00c00200
    // The rest is v2 or greater
    private static final int ROMHDR_PARMOFF     = 0x0000005c;   // eg, 0x00000000
    private static final int ROMHDR_PARMSIZE    = 0x00000060;   // eg, 0x00000000
    private static final int ROMHDR_ROPARMOFF   = 0x00000064;   // eg, 0x00c06000
    private static final int ROMHDR_2NDROMOFF   = 0x00000068;   // eg, 0x00c08000 (where 1st ROM expects to find 2nd ROM)
    private static final int ROMHDR_CSBYTES     = 0x0000006c;   // eg, 0x00004000 (# of bytes to checksum, aka size of card)
    private static final int ROMHDR_CSVALUE     =     0x0070;   // eg, 0x27e5 (checksum)
    // The rest is v3 or greater
    private static final int ROMHDR_WORKOFF     = 0x00000072;   // eg, 0x00000000
    private static final int ROMHDR_WORKSIZE    = 0x00000076;   // eg, 0x00000000
    // The rest is v4 or greater
    private static final int ROMHDR_HALOFF      = 0x0000007a;   // eg, 0x00000000
    private static final int ROMHDR_RESERVED82  = 0x0000007e;   // the next 0x82 bytes are reserved, bringing the total to 0x100
    private static final int ROMHDR_SIZE        = 0x00000100;
    
    private static final int ROMSIG_CARD        = 0xfeedbeef;
    private static final int ROMSIG_STORE       = 0xfeedface;
    
    /*
    //
    // C structure copied from the ChopROM utility, for reference only.  Search for MYROMSIG_ROMINFO
    // below to find the code that assumes this structure.  It's pretty trivial and we only read it at
    // that one point, so I didn't bother defining a bunch of MYROMINFO_* equates for Java's sake.
    //
    typedef struct _MYROMINFO {
        DWORD   dwSig;                  // ie, MYROMSIG_ROMINFO
        DWORD   cbPage;                 // page size (eg, BANK_DEFAULT)
        DWORD   cbROM;                  // ie, size of actual ROM
        DWORD   cROMHdrs;               // ie, number of headers in the actual ROM
        BYTE    abPageLoadSeq[256];     // preferred page loading sequence (each byte is a bank index, relative to the start of the ROM)
        ROMHDR  rh1;                    // the first ROM header from the actual ROM
    } MYROMINFO;
    */
    private static final int MYROMSIG_ROMINFO   = 0xdeadcafe;
    

    /*  InitMem(dev, file)
     *
     *  Called by Device.Launch(file).  The DeviceScreen and CPUThread objects are created by
     *  Device.Init(), but it's not until Device.Launch() is called with some code to run that we
     *  actually allocate any significant resources.  Even CPUThread does not actually start a
     *  thread until the Device.Power() is finally called by Emulator.Activate() in response to a
     *  successful Device.Launch().
     *
     *  We compute an appropriate RAM budget for the specified image (file), and then we allocate
     *  the necessary number of pseudo-physical memory banks, as well as initialize other special banks
     *  (eg, h/w registers).  I also allocate separate banks for other chunks of memory (eg, the
     *  screen buffer, and maybe eventually the stack), just to keep things tidy and help catch bugs.
     */
    public int InitMem(Device dev, FileStream file) throws RuntimeException
    {
        // Let's make sure any old stuff is cleaned up first
        DestroyMem();
        
        emul = dev.emul;
        cpu = dev.cpu;
        screen = dev.screen;
        
        // Allocate bank arrays
        aBanks = new byte[MAX_BANKS][];
        aBankOffsets = new int[MAX_BANKS];
        
        // Allocate and initialize hardware regs
        hwregs = new HWDragonBall(dev);
        hwregs.Init(this);
        
        screen.Init(this);
        if (emul.silk != null)
            emul.silk.Init(this);
        
        cbCode = file.GetLength();
        addrCode = RAM_BASE;
        
        fPagedROM = false;
        sPagedROMPath = null;
        sPagedROMFile = null;
        iFirstPagedROMBank = 0;
        cUnpagedROMBanks = 0;
        cPagedROMBanks = 0;
        iNextPagedROMSeq = 0;
        abPagedROMSeq = null;
        
        int addrExec = RAM_BASE;
        
        // Allocate RAM/ROM banks
        if (file.GetType() == FileStream.FILETYPE_ROM) {
            
            byte[] ab1stROMHdr = new byte[ROMHDR_SIZE];
            byte[] ab1stROM = null;
            byte[] ab2ndROMHdr = null;
            
            int cbPage;
            int cROMHeaders = 0;                // number of headers in actual ROM
            int data = file.ReadInt();
            int offROMHdr = 0;
            int cb1stROMHdr, cb1stROM = 0, cb2ndROMHdr = 0, cbFakeROM = 0;
            
            // If the first DWORD is MYROMSIG_ROMINFO, then this is just a ROMINFO file, where
            // the next DWORD contains the size of the banks to use with this ROM, the next DWORD
            // contains the size of the actual ROM, the next DWORD contains the number of ROM
            // headers in the actual ROM, followed by the *first* ROM header only (see the MYROMINFO
            // C structure above, and in ChopROM.c)
            
            if (data == MYROMSIG_ROMINFO) {
                fPagedROM = true;
                sPagedROMPath = file.GetFullPath();
                sPagedROMFile = new StringBuffer("0000.zip");
				cbPage = file.ReadInt();
				Emulator.Assert_Debug(cbPage == BANK_SIZE, "CPUMem.InitMem(): unsupported page size");
                cbCode = file.ReadInt();
                cUnpagedROMBanks = cPagedROMBanks = (cbCode + BANK_SIZE-1) / BANK_SIZE;
                cROMHeaders = file.ReadInt();
                abPagedROMSeq = new byte[256];
                file.ReadBytes(256, abPagedROMSeq, 0);
            }
            else {
                // Whoops, we were wrong, the first DWORD isn't MYROMSIG_ROMINFO, so we need to stuff
                // that DWORD into ab1stROMHdr and then read the rest of the standard ROM header.
                SetLong(offROMHdr, ab1stROMHdr, data);
                offROMHdr = 4;
            }

            // Read (or finish reading) the first ROM hdr (a total of 0x100 bytes)
            cb1stROMHdr = file.ReadBytes(ab1stROMHdr.length-offROMHdr, ab1stROMHdr, offROMHdr) + offROMHdr;
            if (cb1stROMHdr == ab1stROMHdr.length && GetLong(ROMHDR_SIG, ab1stROMHdr) == ROMSIG_CARD) {

                // Note that our caller, Device.Launch(), calls InitRegs() before InitMem(), so we're
                // able to selectively alter some of the initial regs (like A7) before execution begins.
                
                a[7] = GetLong(ROMHDR_INITSTACK, ab1stROMHdr);
                addrExec = GetLong(ROMHDR_RESETADDR, ab1stROMHdr);
                addrCode = addrExec & 0xffff8000;       // BUGBUG: hack to determine ROM's base address -JP

                iFirstPagedROMBank = (addrCode >>> BANK_SHIFT) & BANK_SHIFTMASK;
                wROMHdrVer = GetWord(ROMHDR_HDRVER, ab1stROMHdr);
                
                int off2ndROMSrc;
                if (wROMHdrVer == 1)
                    off2ndROMSrc = 0x3000;      // have to assume a fixed 2nd ROM offset for v1 ROMs
                else
                    off2ndROMSrc = GetLong(ROMHDR_2NDROMOFF, ab1stROMHdr) & 0x000fffff;

                // Now that we think we know where the 2nd ROM hdr is located,
                // create an array to hold all the bytes of the 1st ROM between the headers
                ab1stROM = new byte[off2ndROMSrc - ROMHDR_SIZE];
                
                if (cROMHeaders == 0) {
                    
                    cROMHeaders = 1;            // default to 1 actual ROM header
                    cb1stROM = file.ReadBytes(ab1stROM.length, ab1stROM, 0);
                    
                    if (cb1stROM == ab1stROM.length) {

                        ab2ndROMHdr = new byte[ROMHDR_SIZE];
                        cb2ndROMHdr = file.ReadBytes(ab2ndROMHdr.length, ab2ndROMHdr, 0);
                        
                        if (cb2ndROMHdr == ab2ndROMHdr.length && GetLong(ROMHDR_SIG, ab2ndROMHdr) == ROMSIG_CARD)
                            cROMHeaders = 2;    // there are actually 2 ROM headers
                    }
                }
                
                if (cROMHeaders == 1) {

                    // A 2nd ROM header does NOT exist, so we assume that the 1st ROM header we read is
                    // actually the 2nd ROM header in memory, and that we have to construct a fake 1st ROM
                    // in memory as well.

                    cb1stROM = ab1stROM.length;
                    cbFakeROM = ab1stROMHdr.length + cb1stROM;
                    
                    for (int i=0; i<cb1stROM; i++)
                        ab1stROM[i] = -1;       // set a bunch of bogus values in the fake 1st ROM

                    ab2ndROMHdr = ab1stROMHdr;
                    cb2ndROMHdr = cb1stROMHdr;

                    if (!fPagedROM)
                        file.SetOffset(ROMHDR_SIZE);

                    cbCode += cbFakeROM;
                    addrCode -= cbFakeROM;
                }
            }

            // For now, I have hard-coded heuristics that allocate RAM based on the amount of code...
            if (cbCode <= 512*1024) {
                // All small ROMs get exactly 512Kb
                cbRAM = 512*1024;
            }
            else {
                // If I try to force newer ROMs to live with 512K too, they tend to balk (they expect more),
                // so I've hard-coded the upper limit at 2Mb for now.
                cbRAM = 2048*1024;
            }
            
            // BUGBUG: If RAM_BASE was ever set to something other than zero, we would still need
            // to initialize some memory for the exception vector table (see EVT_BASE).  As long as
            // RAM_BASE and EVT_BASE are the same thing, there's no need. -JP

            InitBanks(RAM_BASE, cbRAM, BANKFLAG_RAM);
            
            // Originally, I'd just initialize the ROM banks with BANKFLAG_ROM, but now if I've been given
            // a non-compressed ROM image, then I also set BANKFLAG_DEVICE, so that I don't have to read
            // the entire ROM into memory right now; instead, I let the hwregs handlers page it in as needed.
            
            if (cbFakeROM > 0)
                InitBanks(addrCode, cbFakeROM, BANKFLAG_ROM);
            
            InitBanks(addrCode+cbFakeROM, cbCode-cbFakeROM, BANKFLAG_ROM | (fPagedROM? BANKFLAG_DEVICE : 0));
            
            // Create a "guard bank" of dummy device regs (actually, only 1 whole word) at the end of RAM, as
            // a cheaper/simpler way of handling not-present memory (and code that scans for it), without the
            // overhead of try/except handlers (possibly in terms of performance, but also in terms of instruction
            // interruption/restartability, unless I were to insert many exception handlers at very low levels).
            
            InitBanks(RAM_BASE + cbRAM, 2, BANKFLAG_DEVICE);
            
            // Create another "dummy bank" at the ROM address (addrCode) + 2Mb (0x00200000) if the ROM is less than 2Mb
            // in size, to resolve an issue with the 3.5 ROM; it's mapping itself from our default location (0x10c00000)
            // to a higher location (0x10e00000), and since I don't support address bank remapping (yet?), I have to
            // make the ROM think the remapping failed.  It seems OK with that, so I'm hoping that was "by design".  ;-)
            //
            // Note: the 3.5 ROM is looking for 0xfeedbeef at 0x10e00000+8, so I'm only specifying 12 bytes....
            
            if (addrCode == 0x10c00000 && cbCode <= 0x00200000)
                InitBanks(addrCode + 0x00200000, 12, BANKFLAG_DEVICE);
            
            SetBytes(addrCode, ab1stROMHdr, 0, cb1stROMHdr);
            if (cb1stROM > 0)
                SetBytes(addrCode + cb1stROMHdr, ab1stROM, 0, cb1stROM);
            if (cb2ndROMHdr > 0)
                SetBytes(addrCode + cb1stROMHdr + cb1stROM, ab2ndROMHdr, 0, cb2ndROMHdr);
            // BUGBUG: SetBytes(file) returns the number of bytes actually transferred from the file, do we care? -JP
            if (!fPagedROM)
                SetBytes(addrCode + cb1stROMHdr + cb1stROM + cb2ndROMHdr, file);
            
            Emulator.DisplayMessage("ROM base: 0x" + Integer.toHexString(addrCode) + "  ROM init: 0x" + Integer.toHexString(addrExec));
            
            if (debugger != null) {
                debugger.AddMemoryBlock(null, null, DebuggerInterface.MEMTYPE_DATA, RAM_BASE, cbRAM);
                // Warning: the debugger won't be able to find any symbols if fPagedROM, so you'll have to use the "lr" command later -JP
                debugger.AddMemoryBlock(file.GetShortName(), null, DebuggerInterface.MEMTYPE_ROM, addrCode, cbCode);
            }
        }
        else {
            cbRAM = DEF_RAM_SIZE;
            InitBanks(RAM_BASE, cbRAM, BANKFLAG_RAM);
            
            // BUGBUG: SetBytes(file) returns the number of bytes actually transferred from the file, do we care? -JP
            SetBytes(addrCode, file);
            
            Emulator.DisplayMessage("Code block at 0x" + Integer.toHexString(addrCode) + " (limit=0x" + Integer.toHexString(addrCode+cbCode) + ")");
            
            if (debugger != null) {
                debugger.AddMemoryBlock(null, null, DebuggerInterface.MEMTYPE_DATA, RAM_BASE, cbRAM);
                debugger.AddMemoryBlock(file.GetShortName(), null, DebuggerInterface.MEMTYPE_CODE, addrCode, cbCode);
            }
        }
        
        // This lets our subclasses (like CPUThread) know that if they're asked to run, it's OK now
        
        fCPU |= CPU_MEMINIT;
        
        return addrExec;
    }

    
    /*  DestroyMem()
     *
     *  Called by CPUThread.Destroy(), which is called by Device.Destroy().
     *
     *  Also now called by InitMem(), to insure that things like symbols are cleaned up from the
     *  previous run, if any.  After all, we made it perfectly safe to call even if InitMem() had
     *  never been called before (see comment below ;-)).
     *
     *  WARNING: It's possible the Device.Launch() never called InitMem(), so be careful.  You could
     *  argue that since Device.Launch() calls InitMem(), Device.Destroy() should call DestroyMem(),
     *  not CPUThread.  But the Device class can't really be any more sure as to whether or not InitMem()
     *  was ever called, so we might as well just make DestroyMem() safe to call in any case.
     */
    public void DestroyMem()
    {
        fCPU &= ~CPU_MEMINIT;
        
        if (debugger != null)
            debugger.RemoveMemoryBlocks();
        
        hwregs = null;

        if (screen != null)
            screen.Init(null);
        
        if (emul != null && emul.silk != null)
            emul.silk.Init(null);

	    if (aBanks != null) {
            for (int i=0; i<MAX_BANKS; i++)
                aBanks[i] = null;
	        aBanks = null;
	    }
        aBankOffsets = null;
        
        screen = null;
        cpu = null;
    }
    
    
    /*  InitBanks(addrBase, cb, bFlags)
     *
     *  ENTRY
     *      addrBase == base address of desired memory bank(s)
     *      cb == size of memory bank(s), in bytes
     *      bFlags == flags associated with corresponding bank(s)
     *
     *  EXIT
     *      true if successful, false if error (eg, out of contiguous banks)
     *
     *  BUGBUG: Callers need to actually *check* the return code -JP
     */
    public boolean InitBanks(int addrBase, int cb, int bFlags)
    {
        // Increase size to account for non-bank boundary and/or odd number of bytes
        cb = (cb+(addrBase & BANK_OFFSETMASK)+1) & ~1;
        
        int offset = 0;
        byte[] abBank = new byte[cb];
        int iBank = (addrBase >>> BANK_SHIFT) & BANK_SHIFTMASK;
        
        while (cb > 0) {
            int cbBank = cb;
            if (cbBank > BANK_SIZE)
                cbBank = BANK_SIZE;
            if (aBanks[iBank] != null && (aBankOffsets[iBank] & bFlags) == 0)
                return false;
            Emulator.Assert_Debug((offset & BANKFLAG_MASK) == 0, "CPUMem.InitBanks(): offset overflow");
            aBanks[iBank] = abBank;
            aBankOffsets[iBank] = offset | bFlags;
            iBank++;
            cb -= BANK_SIZE;
            offset += BANK_SIZE;        // divide BANK_SIZE by sizeof(abBank[0])
        }
        return true;
    }


    /*  InitDeviceBanks(addrBase, cb)
     *
     *  Allocate memory for a device and then let the debugger (if any) know where the memory is.
     */
    public boolean InitDeviceBanks(int addrBase, int cb)
    {
        if (!InitBanks(addrBase, cb, BANKFLAG_DEVICE))
            return false;
        
        MarkDataAccess_Debug(addrBase, -cb, DebuggerInterface.DATAACCESS_WRITE);
        
        if (debugger != null)
            debugger.AddMemoryBlock(null, null, DebuggerInterface.MEMTYPE_DEVICE, addrBase, cb);
        
        return true;
    }


    /*  InitTempBanks(cb)
     *
     *  ENTRY
     *      cb == size of memory bank(s), in bytes
     *
     *  EXIT
     *      base address of first bank if successful, 0 if error (eg, out of contiguous banks)
     */
    public int InitTempBanks(int cb)
    {
        // BUGBUG: Valid test?  ROM header version don't mean the same thing as PalmOS version -JP
        int cbHeader = (wROMHdrVer == 1? 6 : 8);
            
        // Currently, we're always placing temp banks at RAM_BASE + cbRAM + BANK_SIZE.  We
        // can't put them immediately past RAM (ie, we have to add BANK_SIZE) because usually
        // we've already put a special "invalid" BANKFLAG_DEVICE bank immediately after the RAM.
        
        int addrTemp = RAM_BASE + cbRAM + BANK_SIZE;
        int flags = GetBankFlags(addrTemp);
        
        if (flags == BANKFLAG_NONE) {   // if the address space is available
            
            // Since temp blocks are currently allocated for use with PalmOS API calls, we put a fake
            // PalmOS chunk header at the beginning, whose size must be computed and added to the actual
            // size.  In addition, we must insure the size is rounded up to an even number.
            
            int cbActual = (cbHeader + cb + 1) & ~0x1;
            
          //if (cbActual >= 64*1024)    // BUGBUG: what is the real limitation on chunk size? ("slightly less than 64K?") -JP
          //    return 0;

            if (!InitBanks(addrTemp, cbActual, BANKFLAG_RAM | BANKFLAG_TEMP))
                return 0;
            
            byte[] abFakeHeader = new byte[cbHeader];
            
            if (wROMHdrVer == 1) {
                abFakeHeader[0] = (byte)(cbActual >> 8);
                abFakeHeader[1] = (byte)(cbActual);
                abFakeHeader[2] = (byte)(0xf2);         // BUGBUG: high nibble is lock count (0xf=max)? low nibble is...? -JP
                abFakeHeader[3] = (byte)(cbActual - cbHeader - cb);
                // BUGBUG: Bytes 4 and 5 are not used for non-movable chunks I assume.... -JP
            }
            else {
                // FYI, the high nibble of [0] supposedly contains flags, only 1 of which is defined, and for free chunks only
                abFakeHeader[0] = (byte)(cbActual - cbHeader - cb);
                abFakeHeader[1] = (byte)(cbActual >> 16);
                abFakeHeader[2] = (byte)(cbActual >> 8);
                abFakeHeader[3] = (byte)(cbActual);
                abFakeHeader[4] = (byte)(0xf2);         // BUGBUG: high nibble is lock count (0xf=max)? low nibble is owner ID? -JP
                // Bytes 5-7 contain the offset from the master pointer for the chunk to the chunk's header, divided by 2.
                // Note that this offset could be negative if the master pointer table is at a higher address than the chunk itself.
                // For non-movable chunks, this offset is zero.
            }
            SetBytes(addrTemp, abFakeHeader);
        }
        return addrTemp + cbHeader;
    }


    /*  FreeBanks(addrBase)
     *
     *  ENTRY
     *      addrBase == base address of memory bank(s) to free
     *
     *  EXIT
     *      true if successful, false if error (eg, invalid bank(s))
     */
    public boolean FreeBanks(int addrBase)
    {
        // BUGBUG: Valid test?  ROM header version don't mean the same thing as PalmOS version -JP
        int cbHeader = (wROMHdrVer == 1? 6 : 8);
        
        addrBase = (addrBase - cbHeader) & ~BANK_OFFSETMASK;
        int iBank = (addrBase >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & ADDRESS_MASK) != 0)
            return false;               // the starting bank's offset isn't 0, so this can't be the first bank of anything

        if ((offset & BANKFLAG_MASK) == BANKFLAG_NONE)
            return false;               // the starting bank's flags are empty, so again this can't be the first bank of anything
        
        offset &= ADDRESS_MASK;

        while (true) {
            Emulator.Assert_Debug(aBanks[iBank] != null, "CPUMem.FreeBanks(): empty bank");
            aBanks[iBank] = null;
            aBankOffsets[iBank] = 0;
            iBank++;
            if (iBank == MAX_BANKS)
                break;
            int offsetPrev = offset;
            offset = aBankOffsets[iBank] & ADDRESS_MASK;
            if (offset <= offsetPrev)
                break;
            Emulator.Assert_Debug((aBankOffsets[iBank] & BANKFLAG_MASK) != BANKFLAG_NONE, "CPUMem.FreeBanks(): inconsistent bank");
        }
        return true;
    }


    /*  SaveMem(file)
     *
     *  Write the current set of memory blocks to the specified file.
     */
    public void SaveMem(FileStream file)
    {
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        int length = cpu.cbRAM;
        int addr = 0;
            
        file.WriteInt(SAVERAM_SIG);
        file.WriteInt(length);
        file.WriteInt(addr);
            
        cpu.GetBytes(addr, length, file);
    }
    
    
    /*  RestoreMem(file)
     *
     *  Read the current set of memory blocks from the specified file.
     */
    public boolean RestoreMem(FileStream file)
    {
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        int sig = file.ReadInt();
        int length = file.ReadInt();
        int addr = file.ReadInt();
        int offset = file.GetOffset();
            
        if (sig != SAVERAM_SIG || length != cpu.cbRAM || addr != 0)
            return false;
        
        // BUGBUG: SetBytes(file) returns the number of bytes actually transferred from the file, do we care? -JP
        cpu.SetBytes(addr, length, offset, file);
        return true;
    }
    
    
    /*  GetBank(addr)
     *
     *  Get the bank containing the specified address.
     */
    public final byte[] GetBank(int addr)
    {
        return aBanks[(addr >>> BANK_SHIFT) & BANK_SHIFTMASK];
    }
    

    /*  GetBankIndex(addr)
     *
     *  Get the bank index containing the specified address.
     */
    public final int GetBankIndex(int addr)
    {
        return (aBankOffsets[(addr >>> BANK_SHIFT) & BANK_SHIFTMASK] & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
    }


    /*  GetBankFlags(addr)
     *
     *  Get the bank flags for the bank containing the specified address.
     */
    public final int GetBankFlags(int addr)
    {
        return aBankOffsets[(addr >>> BANK_SHIFT) & BANK_SHIFTMASK] & BANKFLAG_MASK;
    }


    /*  PageBank(addr, fFgnd)
     *
     *  Returns true if the bank was not present and had to be paged in.  Note that our
     *  level of demand-paging support is strictly limited to code (eg, BANKFLAG_ROM banks);
     *  we don't have the hooks in place to page from a RAM file when someone *writes* to an
     *  uninitialized bank (only *reads*).  Besides, RAM images generally compress extremely
     *  well, so it's just as easy (easier) to read an entire RAM image into memory and be
     *  done with it.
     *
     *  Note that even if the we fail to page the bank in, we still have to return true,
     *  otherwise the caller would attempt to access the memory as "device memory", which
     *  would be incorrect.  Furthermore, we always insure that the bank's BANKFLAG_DEVICE
     *  bit gets cleared before returning, so that when the caller attempts to access the
     *  memory again, we won't get *another* PageBank() call and recurse endlessly.
     *
     *  BUGBUG: This does mean that any failure to page a bank in will not be reflected to the
     *  code being executed;  it will simply fetch from uninitialized memory.  We will probably
     *  want to change that behavior and generate an exception at some point. -JP
     */
    public final boolean PageBank(int addr, boolean fFgnd)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        // If we had an unpaged bank that was paged in by someone else before this call,
        // then BANKFLAG_DEVICE will already be clear.  We need to detect that and return true
        // just as if we had paged the bank ourselves.
        if ((offset & BANKFLAG_DEVICE) == 0)
            return true;

        // Since BANKFLAG_DEVICE is still set, then if BANKFLAG_ROM is NOT set, this must really
        // be a device page, so return false and let the caller handle it as such.
        if ((offset & BANKFLAG_ROM) == 0)
            return false;
        
        // Since our paging granularity is banks, round the address down to the nearest bank boundary.
        int addrBank = addr & ~BANK_OFFSETMASK;
            
        if (iBank >= iFirstPagedROMBank && iBank < iFirstPagedROMBank + cPagedROMBanks) {
            
            int iBankRelative = iBank - iFirstPagedROMBank;
            
            synchronized(sPagedROMFile) {

                fFgndPaging = fFgnd;
                cpu.BeginPaging(addr, addrBank, fFgnd);
            
                sPagedROMFile.setCharAt(3, (char)('0' + (iBankRelative % 10)));
                iBankRelative /= 10;
                sPagedROMFile.setCharAt(2, (char)('0' + (iBankRelative % 10)));
                iBankRelative /= 10;
                sPagedROMFile.setCharAt(1, (char)('0' + (iBankRelative % 10)));
                iBankRelative /= 10;
                sPagedROMFile.setCharAt(0, (char)('0' + (iBankRelative % 10)));
                
                FileStream file = new FileStream(sPagedROMPath + sPagedROMFile, FileStream.FILETYPE_ROM, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_SEARCHZIP);
            
                if (file.GetStatus() == FileStream.FILESTAT_OK) {
				
				    int cbBank = (addrCode + cbCode) - addrBank;
				    if (cbBank > BANK_SIZE)
    					cbBank = BANK_SIZE;
                
                    // If the memory we're about to initialize contains any breakpoints, then we need to
                    // disarm them, initialize the memory, and re-arm them.  Otherwise, breakpoints could
                    // mysteriously vanish.  Note that DisarmBPs() says if there were any armed breakpoints,
                    // so that we needn't call ArmBPs() if there weren't.  That's not just an optimization;
                    // we need to try to avoid arming any "arm-able" breakpoints that the debugger didn't
                    // actually want to arm yet.

                    boolean fBreakpoints = (debugger != null? debugger.DisarmBPs() : false);
        
                    // BUGBUG: SetBytes(file) returns the number of bytes actually transferred from the file, do we care? -JP
                    SetBytes(addrBank, cbBank, file);
                
                    if (fBreakpoints)
                        debugger.ArmBPs();
                
                    file.Close();

                    if (--cUnpagedROMBanks == 0)
                        fPagedROM = false;
                }
                
                cpu.EndPaging(fFgnd);
                fFgndPaging = false;
            }
        }
        else
            Emulator.Assert_Debug(false, "PageBank(0x" + Integer.toHexString(addr) + "): non-pageable bank");
        
        // It's important to NOT clear BANKFLAG_DEVICE until *after* we've read the page, so that
		// another thread trying to access the bank won't see partial data.

        aBankOffsets[iBank] &= ~BANKFLAG_DEVICE;
        
        return true;
    }


    /*  PageUnpagedBank()
     *
     *  Finds an unpaged bank of ROM and pages it in.  Typically called in the context
     *  of a non-CPU thread (eg, BgndThread) to take advantage of idle time to page more and
     *  more of the ROM into memory until it's all there and the file can be closed.
     *
     *  Note there is race between this and DestroyMem, but we don't want to synchronize
     *  this method with any other methods, because that would just mean those methods could be
     *  blocked by *us*, creating an undesirable priority inversion.  So instead we wrap this
     *  function with a try/catch.
     */
    public void PageUnpagedBank()
    {
        if (fPagedROM) {
            try {
                while (iNextPagedROMSeq < abPagedROMSeq.length) {
                    int cUnpaged = cUnpagedROMBanks;
                    int addrBank = addrCode + abPagedROMSeq[iNextPagedROMSeq++] * BANK_SIZE;
                    PageBank(addrBank, false);
                    if (cUnpaged != cUnpagedROMBanks)
                        break;
                }
            } catch (Throwable e) {}
        }
    }


    /*  IsPaging()
     */
    public boolean IsPaging()
    {
        return fFgndPaging;
    }


    /*  GetPagedPercentage()
     */
    public int GetPagedPercentage()
    {
        return cPagedROMBanks > 0? ((cPagedROMBanks - cUnpagedROMBanks) * 100) / cPagedROMBanks : 0;
    }


    /*  GetByte(addr)
     *
     *  Get one byte from the memory subsystem.
     */
    public final byte GetByte(int addr)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & BANKFLAG_DEVICE) != 0)
            return hwregs.GetByte(addr);
            
        MarkDataAccess_Debug(addr, 1, DebuggerInterface.DATAACCESS_READ);
        
        return aBanks[iBank][(offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK)];
    }
    

    /*  GetByteEx(addr)
     *
     *  Get one byte from the memory subsystem, but don't do any access tracking, and don't check for
     *  BANKFLAG_DEVICE, because this is intended for HWRegs to call, so we'd blow our stack calling each other.
     */
    public final byte GetByteEx(int addr)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        MarkDataAccess_Debug(addr, 1, DebuggerInterface.DATAACCESS_NONE);
        
        return aBanks[iBank][(offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK)];
    }
    

    /*  GetWord(addr)
     *
     *  Get one word from the memory subsystem.
     */
    public final int GetWord(int addr)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
                    
        if ((offset & BANKFLAG_DEVICE) != 0)
            return hwregs.GetWord(addr);
            
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 2, DebuggerInterface.DATAACCESS_READ);
        
        return (abBank[iByte] << 8) | (abBank[iByte+1] & 0xff);
    }
    

    /*  GetWordEx(addr)
     *
     *  Get one word from the memory subsystem, but don't do any access tracking, and don't check for
     *  BANKFLAG_DEVICE, because this is intended for HWRegs to call, so we'd blow our stack calling each other.
     */
    public final int GetWordEx(int addr)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 2, DebuggerInterface.DATAACCESS_NONE);
            
        return (abBank[iByte] << 8) | (abBank[iByte+1] & 0xff);
    }
    

    /*  GetWord(off, ab)
     *
     *  Get one word from the specified offset in an array of bytes.
     */
    public final int GetWord(int off, byte[] ab)
    {
        return ((ab[off] & 0xff) << 8) | (ab[off+1] & 0xff);
    }
    

    /*  GetLong(addr)
     *
     *  Get one long from the memory subsystem.
     */
    public final int GetLong(int addr)
    {
        int iBank1 = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset1 = aBankOffsets[iBank1];
        int iBank2 = ((addr + 2) >>> BANK_SHIFT) & BANK_SHIFTMASK;
                    
        // If this long straddles a bank boundary...
        if (iBank1 != iBank2) {
            // then we need to fetch it as two words, so that any paging occurs as needed
            return (GetWord(addr) << 16) | (GetWord(addr+2) & 0xffff);
        }

        if ((offset1 & BANKFLAG_DEVICE) != 0)
            return hwregs.GetLong(addr);
            
        byte[] abBank = aBanks[iBank1];
        int iByte = (offset1 & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 4, DebuggerInterface.DATAACCESS_READ);
        
        return (abBank[iByte] << 24) | ((abBank[iByte+1] & 0xff) << 16) | ((abBank[iByte+2] & 0xff) << 8) | (abBank[iByte+3] & 0xff);
    }
    

    /*  GetLongEx(addr)
     *
     *  Get one long from the memory subsystem, but don't do any access tracking, and don't check for
     *  BANKFLAG_DEVICE, because this is intended for HWRegs to call, so we'd blow our stack calling each other.
     */
    public final int GetLongEx(int addr)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 4, DebuggerInterface.DATAACCESS_NONE);
        
        return (abBank[iByte] << 24) | ((abBank[iByte+1] & 0xff) << 16) | ((abBank[iByte+2] & 0xff) << 8) | (abBank[iByte+3] & 0xff);
    }
    

    /*  GetLong(off, ab)
     *
     *  Get one long from the specified offset in an array of bytes.
     */
    public final int GetLong(int off, byte[] ab)
    {
        return (ab[off] << 24) | ((ab[off+1] & 0xff) << 16) | ((ab[off+2] & 0xff) << 8) | (ab[off+3] & 0xff);
    }
    

    /*  GetBytes(addr, ab)
     */
    public final void GetBytes(int addr, byte[] ab)
    {
        GetBytes(addr, ab, 0, ab.length);
    }


    /*  GetBytes(addr, ab, offset, length)
     */
    public final void GetBytes(int addr, byte[] ab, int offset, int length)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, -length, DebuggerInterface.DATAACCESS_READ);
        
        while (length-- > 0)
            ab[offset++] = abBank[iByte++];
    }


    /*  GetBytes(addr, length, file)
     *
     *  Copy an area in CPU memory to the specified FileStream.
     */
    public final void GetBytes(int addr, int length, FileStream file)
    {
        byte[] ab = GetBank(addr);
        int iBank = GetBankIndex(addr);
        
        file.WriteBytes(length, ab, iBank);
    }

    
    /*  GetLongs(addr, ai, offset, length)
     *
     *  Called by DeviceScreen.CheckBuffer() to get a copy of the frame buffer.
     */
    public final void GetLongs(int addr, int[] ai, int offset, int length)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        // Because that's currently the only caller, we're NOT going to call MarkDataAccess_Debug
        // on the source memory range.  In fact, if we DID call it, we'd need to move the call to
        // DeviceScreen.CheckBuffer() inside CPUThread.run()'s try/catch handler, in order for any
        // exception thrown by GenerateException() to be caught and handled properly.
        
      //MarkDataAccess_Debug(addr, length*4, DebuggerInterface.DATAACCESS_READ);
        
        while (length-- > 0) {
            ai[offset++] = (abBank[iByte] << 24) | ((abBank[iByte+1] & 0xff) << 16) | ((abBank[iByte+2] & 0xff) << 8) | (abBank[iByte+3] & 0xff);
            iByte += 4;
        }
    }


    /*  GetPCWord()
     *
     *  Called by the CPU to obtain words from the memory subsystem -- more
     *  efficient than GetWord(pc), because it assumes that the PC is always even
     *  (ie, can't generate an exception), and because it automatically advances
     *  the program counter to the next word for us.
     */
    public final int GetPCWord()
    {
        int iBank = (pc >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & BANKFLAG_DEVICE) != 0) {
            int addr = pc;
            pc += 2;
            return hwregs.GetWord(addr);
        }
            
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (pc & BANK_OFFSETMASK);
        
        MarkCodeAccess_Debug(pc);
        pc += 2;
        
        return (abBank[iByte] << 8) | (abBank[iByte+1] & 0xff);
    }
    

    /*  GetPCLong()
     *
     *  Called by the CPU to obtain longs from the memory subsystem -- more
     *  efficient than GetLong(pc), because it assumes that the PC is always even
     *  (ie, can't generate an exception), and because it automatically advances
     *  the program counter to the next long for us.
     */
    public final int GetPCLong()
    {
        int iBank1 = (pc >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset1 = aBankOffsets[iBank1];
        int iBank2 = ((pc + 2) >>> BANK_SHIFT) & BANK_SHIFTMASK;
        
        // If this long straddles a bank boundary...
        if (iBank1 != iBank2) {
            // then we need to fetch it as two words, so that any paging occurs as needed
            return (GetPCWord() << 16) | (GetPCWord() & 0xffff);
        }

        if ((offset1 & BANKFLAG_DEVICE) != 0) {
            int addr = pc;
            pc += 4;
            return hwregs.GetLong(addr);
        }
            
        byte[] abBank = aBanks[iBank1];
        int iByte = (offset1 & ADDRESS_MASK) + (pc & BANK_OFFSETMASK);
        
        MarkCodeAccess_Debug(pc);
        MarkCodeAccess_Debug(pc+2);
        pc += 4;
        
        return (abBank[iByte] << 24) | ((abBank[iByte+1] & 0xff) << 16) | ((abBank[iByte+2] & 0xff) << 8) | (abBank[iByte+3] & 0xff);
    }
    

    /*  PushWord()
     *
     *  Push one word onto the default stack.
     */
    public final void PushWord(int data)
    {
	    int sp = a[7] - 2;
	    
        int iBank = (sp >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (sp & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(sp, 2, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] |= BANKFLAG_DIRTY;
#endif        
        a[7] = sp;
        
        abBank[iByte] = (byte)(data >> 8);
        abBank[iByte+1] = (byte)(data);
    }
    

    /*  PopLong()
     *
     *  Pop one long from the default stack.
     */
    public final int PopLong()
    {
        int sp = a[7];
        
        int iBank = (sp >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (sp & BANK_OFFSETMASK);
	
        MarkDataAccess_Debug(sp, 4, DebuggerInterface.DATAACCESS_READ);
	    a[7] += 4;
        
        return (abBank[iByte] << 24) | ((abBank[iByte+1] & 0xff) << 16) | ((abBank[iByte+2] & 0xff) << 8) | (abBank[iByte+3] & 0xff);
    }
    

    /*  PushLong()
     *
     *  Push one long onto the default stack.
     */
    public final void PushLong(int data)
    {
	    int sp = a[7] - 4;
	    
        int iBank = (sp >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (sp & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(sp, 4, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] |= BANKFLAG_DIRTY;  // BUGBUG: this doesn't handle longs on bank boundaries -JP
#endif        
        a[7] = sp;
        
        abBank[iByte] = (byte)(data >> 24);
        abBank[iByte+1] = (byte)(data >> 16);
        abBank[iByte+2] = (byte)(data >> 8);
        abBank[iByte+3] = (byte)(data);
    }
    

    /*  SetByte(addr, data)
     *
     *  Set one byte in the memory subsystem.
     */
    public final void SetByte(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & BANKFLAG_DEVICE) != 0) {
            hwregs.SetByte(addr, data);
            return;
        }
        
        MarkDataAccess_Debug(addr, 1, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] = offset | BANKFLAG_DIRTY;
#endif
        aBanks[iBank][(offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK)] = (byte)data;
    }
    

    /*  SetByteEx(addr, data)
     *
     *  Set one byte in the memory subsystem, but don't do any access tracking.
     */
    public final void SetByteEx(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        MarkDataAccess_Debug(addr, 1, DebuggerInterface.DATAACCESS_NONE);
        
        aBanks[iBank][(offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK)] = (byte)data;
    }
    

    /*  SetWord(addr, data)
     *
     *  Set one word in the memory subsystem.
     */
    public final void SetWord(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & BANKFLAG_DEVICE) != 0) {
            hwregs.SetWord(addr, data);
            return;
        }
        
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 2, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] = offset | BANKFLAG_DIRTY;
#endif
        abBank[iByte] = (byte)(data >> 8);
        abBank[iByte+1] = (byte)(data);
    }
    

    /*  SetWordEx(addr, data)
     *
     *  Set one word in the memory subsystem, but don't do any access tracking.
     */
    public final void SetWordEx(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 2, DebuggerInterface.DATAACCESS_NONE);
        
        abBank[iByte] = (byte)(data >> 8);
        abBank[iByte+1] = (byte)(data);
    }
    

    /*  SetLong(addr, data)
     *
     *  Set one long in the memory subsystem.
     */
    public final void SetLong(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        
        if ((offset & BANKFLAG_DEVICE) != 0) {
            hwregs.SetLong(addr, data);
            return;
        }
        
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 4, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] = offset | BANKFLAG_DIRTY;
#endif
        abBank[iByte] = (byte)(data >> 24);
        abBank[iByte+1] = (byte)(data >> 16);
        abBank[iByte+2] = (byte)(data >> 8);
        abBank[iByte+3] = (byte)(data);
    }
    

    /*  SetLongEx(addr, data)
     *
     *  Set one long in the memory subsystem, but don't do any access tracking.
     */
    public final void SetLongEx(int addr, int data)
    {
        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        int offset = aBankOffsets[iBank];
        byte[] abBank = aBanks[iBank];
        int iByte = (offset & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, 4, DebuggerInterface.DATAACCESS_NONE);
        
        abBank[iByte] = (byte)(data >> 24);
        abBank[iByte+1] = (byte)(data >> 16);
        abBank[iByte+2] = (byte)(data >> 8);
        abBank[iByte+3] = (byte)(data);
    }
    

    /*  SetLong(off, ab, data)
     *
     *  Set one long at the specified offset in an array of bytes.
     */
    public final void SetLong(int off, byte[] ab, int data)
    {
        ab[off+0] = (byte)(data >> 24);
        ab[off+1] = (byte)(data >> 16);
        ab[off+2] = (byte)(data >> 8);
        ab[off+3] = (byte)(data);
    }
    

    /*  SetBytes(addr, ab)
     *
     *  Initialize a location in CPU memory with the specified byte array.
     */
    public final void SetBytes(int addr, byte[] ab)
    {
        SetBytes(addr, ab, 0, ab.length); 
    }
    

    /*  SetBytes(addr, ab, offset, length)
     *
     *  Initialize a location in CPU memory with the specified portion of the specified byte array.
     */
    public final void SetBytes(int addr, byte[] ab, int offset, int length)
    {
        Emulator.Assert_Debug(length > 0, "CPUMem.SetBytes(): length <= 0");
        
        if (length <= 0)
            return;

        int iBank = (addr >>> BANK_SHIFT) & BANK_SHIFTMASK;
        byte[] abBank = aBanks[iBank];
        int iByte = (aBankOffsets[iBank] & ADDRESS_MASK) + (addr & BANK_OFFSETMASK);
        
        MarkDataAccess_Debug(addr, -length, DebuggerInterface.DATAACCESS_WRITE);
#if BANKFLAG_DIRTY
        aBankOffsets[iBank] |= BANKFLAG_DIRTY;  // BUGBUG: this doesn't handle bank boundaries -JP
#endif
        while (length-- > 0)
            abBank[iByte++] = ab[offset++];
    }
    

    /*  SetBytes(addr, file)
     *
     *  Initialize an area in CPU memory with the specified FileStream.
     *
     *  Returns the actual number of bytes transferred.
     */
    public final int SetBytes(int addr, FileStream file)
    {
        int offset = file.GetOffset();
        return SetBytes(addr, file.GetLength() - offset, offset, file);
    }
    

    /*  SetBytes(addr, length, file)
     *
     *  Initialize an area in CPU memory with the specified FileStream.
     *
     *  Returns the actual number of bytes transferred.
     */
    public final int SetBytes(int addr, int length, FileStream file)
    {
        return SetBytes(addr, length, file.GetOffset(), file);
    }
    

    /*  SetBytes(addr, length, offset, file)
     *
     *  Initialize an area in CPU memory with the specified FileStream.
     *
     *  Returns the actual number of bytes transferred.
     */
    public final int SetBytes(int addr, int length, int offset, FileStream file)
    {
        byte[] ab = GetBank(addr);
        int iBank = GetBankIndex(addr);
        
        MarkDataAccess_Debug(addr, -length, DebuggerInterface.DATAACCESS_WRITE);
        
        return file.ReadBytes(offset, length, ab, iBank);
    }

    
    /*  GenerateException(iVector, sMessage)
     *
     *  Record the emulated exception in the emulator's CPURegs, and then throw a Java-style RuntimeException
     *  to force control to immediately return to the main loop in CPUThread.  If/when it allows the CPU to start
     *  running again, it will call the appropriate exception handler at that time.
     */
    public void GenerateException(int iVector, String sMessage) throws RuntimeException
    {
        if (sMessage == null)
            sMessage = "exception " + Integer.toString(iVector, 16);
            
        // Internal "informational" exceptions use negative vector numbers.  They don't have
        // to interrupt the CPU, and don't even have to print a message;  it all depends on the
        // emulator's current message level....

        if (iVector < 0 && Emulator.fMsgLevel <= Emulator.MSGLEVEL_WARNING) {
            Emulator.DisplayWarningMessage(sMessage);
            return;
        }
            
        if (iVector > 0 && iVector < 0x100)
            iPendingException = iVector;
            
        throw new RuntimeException(sMessage);
    }
    

    /*  GenerateException(iVector, addr)
     *
     *  A simplified form of GenerateException (when no additional message is to be provided)
     */
    public void GenerateException(int iVector, int addr) throws RuntimeException
    {
        addrPendingException = addr;
        GenerateException(iVector, null);
    }
    
    
    /*  GenerateException(iVector)
     *
     *  A simplified form of GenerateException (when no additional message is to be provided)
     */
    public void GenerateException(int iVector) throws RuntimeException
    {
        GenerateException(iVector, null);
    }
    
    
    /*  CallException(iVector)
     *
     *  Now that we have access to all essential CPU components (flags, registers and memory),
     *  we can implement CPU exception handling.  See CPUDefs for a complete list of supported
     *  exceptions.
     */
    public void CallException(int iVector)
    {
        // use GetLongEX() to avoid triggering "null (or almost null) pointer detection"
        int handler = GetLongEx(EVT_BASE + iVector*4);

        if (handler == 0)                       // we're outta here
            GenerateException(EXCEPTION_INVALID_HANDLER);

        if ((flags & FLAGS_SU) == 0) {
            usp = a[7];
            a[7] = ssp;
        }
        PushLong(pc);
        a[7] -= 2;
        SetWord(a[7], GetFlags());
        flags |= FLAGS_SU;                      // indicates we're in supervisor mode now
        flags &= ~FLAGS_T1;                     // the trace bit is also supposed to be cleared
        pc = handler;
        
        //
        //  BUGBUG: EXCEPTION_ACCESS_FAULT isn't being generated anywhere (I assume it should occur when an address
        //  outside valid ranges is encountered), and even EXCEPTION_ADDRESS_ERROR is only being generated in DEBUG builds,
        //  by MarkDataAccess_Debug().  Don't forget to call the "GenerateException(iVector, addr)" form whenever these
        //  particular exceptions are being generated. -JP
        //
        if (iVector == EXCEPTION_ACCESS_FAULT || iVector == EXCEPTION_ADDRESS_ERROR) {
            //
            //  BUGBUG: This is documented as "instruction register", but I'm not sure what that means; perhaps the
            //  16-bit instruction that triggered the exception?  Documentation is weak, but I didn't look too hard yet. -JP
            //
            PushWord(0);
            PushLong(addrPendingException);
            //
            //  BUGBUG: This is documented as "R/W" (bit 4), where Write=0 and Read=1, "I/N" (bit 3),
            //  where Instruction=0 and Not=1, and "Function Code" (bits 2-0), but the 68K Programmer's Reference Manual doesn't
            //  document. -JP
            //
            PushWord(0);
        }
    }

    
    /*  ReturnFromException()
     *
     *  Now that we have access to all essential CPU components (flags, registers and memory),
     *  we can implement CPU exception generation.  See CPUDefs for a complete list of supported
     *  exceptions.
     */
    public void ReturnFromException()
    {
        if ((flags & FLAGS_SU) == 0) {
            GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        SetFlags(GetWord(a[7]));
        a[7] += 2;
        pc = PopLong();
        if ((flags & FLAGS_SU) == 0) {
            ssp = a[7];
            a[7] = usp;
        }
    }
    
    
    /** @conditional (DEBUG) */
    void MarkCodeAccess_Debug(int addr)
    {
        if (debugger != null)
            debugger.MarkCodeAccess(addr);
    }
    
    
    /** @conditional (DEBUG) */
    void MarkDataAccess_Debug(int addr, int length, int iAccess)
    {
        if (length > 1 && (addr & 0x1) != 0)
            GenerateException(EXCEPTION_ADDRESS_ERROR, addr);
            
        if (iAccess != DebuggerInterface.DATAACCESS_NONE && debugger != null) {
            if (length < 0)
                length = -length;
            debugger.MarkDataAccess(addr, length, iAccess);
        }
    }

}
