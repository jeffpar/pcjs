/*  DebuggerInterface.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This defines the methods that all Debugger classes must implement.
 */


public interface DebuggerInterface
{
    public static final int MEMTYPE_ROM         = 0;
    public static final int MEMTYPE_DEVICE      = 1;
    public static final int MEMTYPE_CODE        = 2;
    public static final int MEMTYPE_DATA        = 3;
    
    public static final int DATAACCESS_NONE     = 0;
    public static final int DATAACCESS_READ     = 1;
    public static final int DATAACCESS_WRITE    = 2;
    public static final int DATAACCESS_UNINIT   = 3;
    
    
    public void Init(Device dev);
    public void Destroy();
    public void AddMemoryBlock(String sModule, String sSymbolFile, int iType, int addr, int length);
    public void RemoveMemoryBlocks();
    public String ParseCommand(String sCommand);
    public void Arm();
    public void Disarm();
    public void ArmBPs();
    public boolean DisarmBPs();
    public boolean Break(int addr, boolean fArmed);
    public void Fault(int addrFault, String sFault);
    public void MarkCodeAccess(int addr);
    public void MarkDataAccess(int addr, int length, int iAccess);
    public void MarkHardwareAccess(int addr, int length, int data, int iAccess);
    public void Reset(FileStream file);
    public void Status();
    public String DumpHex(int r);
    public String DumpHex(int r, int cch);
}
