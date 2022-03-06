/*  HWLCDRegs.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the hardware interface that virtual LCD devices must expose to HWDragonBall.
 */


abstract class HWLCDRegs extends HWRegs
{
    public abstract boolean GetLCDStatus();
    public abstract int GetBufferWidth();
    public abstract int GetBufferAddress();
    public abstract byte[] GetPaletteReds();
    public abstract byte[] GetPaletteGreens();
    public abstract byte[] GetPaletteBlues();
}
