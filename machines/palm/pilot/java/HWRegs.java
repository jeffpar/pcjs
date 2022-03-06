/*  HWRegs.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the hardware interface that virtual devices must expose to HWDragonBall.
 */


abstract class HWRegs
{
    int addrBase, addrLimit;
    
    public abstract void Init(CPUMem mem);
    public abstract void Save(FileStream file);
    public abstract boolean Restore(FileStream file);
    public abstract byte GetByte(int addr);
    public abstract int GetWord(int addr);
    public abstract int GetLong(int addr);
    public abstract void SetByte(int addr, int data);
    public abstract void SetWord(int addr, int data);
    public abstract void SetLong(int addr, int data);
}
