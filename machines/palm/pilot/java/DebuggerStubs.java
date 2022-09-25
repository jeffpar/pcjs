/*  DebuggerStubs.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This defines the methods that all Debugger classes must implement.
 */


class DebuggerStubs implements DebuggerInterface
{
    public void Init(Device dev)
    {
    }
    
    public void Destroy()
    {
    }
    
    public void AddMemoryBlock(String sModule, String sSymbolFile, int iType, int addr, int length)
    {
    }
    
    public void RemoveMemoryBlocks()
    {
    }

    public String ParseCommand(String sCommand)
    {
        return null;
    }
    
    public void Arm()
    {
    }
    
    public void Disarm()
    {
    }
    
    public void ArmBPs()
    {
    }
    
    public boolean DisarmBPs()
    {
        return false;
    }
    
    public boolean Break(int addr, boolean fArmed)
    {
        return false;
    }
    
    public void Fault(int addrFault, String sFault)
    {
    }
    
    public void MarkCodeAccess(int addr)
    {
    }
    
    public void MarkDataAccess(int addr, int length, int iAccess)
    {
    }
    
    public void MarkHardwareAccess(int addr, int length, int data, int iAccess)
    {
    }
    
    public void MarkCodeBounds(int addr, int length)
    {
    }
    
    public void MarkDataBounds(int addr, int length)
    {
    }
    
    public void Reset(FileStream file)
    {
    }
    
    public void Status()
    {
    }
    
    public String DumpHex(int r)
    {
        return null;
    }
    
    public String DumpHex(int r, int cch)
    {
        return null;
    }
    
}
