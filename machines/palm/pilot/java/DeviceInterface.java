/*  DeviceInterface.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This defines the methods that the Device class must implement.
 */


import java.awt.*;


public interface DeviceInterface
{
    // NOTE: BUTTON_BACKLIGHT is a pseudo-button ID that's used to logically separate
    // the backlight function of the power button from its on/off function.  The rest of
    // the button IDs represent real buttons, and their values represent a bit # in the
    // Port D Data register (see HWDragonBall for details).
    
    public static final int BUTTON_BACKLIGHT    =-1;
    
    public static final int BUTTON_POWER        = 0;
    public static final int BUTTON_UP           = 1;
    public static final int BUTTON_DOWN         = 2;
    public static final int BUTTON_DATEBOOK     = 3;
    public static final int BUTTON_ADDRESS      = 4;
    public static final int BUTTON_TODOLIST     = 5;
    public static final int BUTTON_MEMOPAD      = 6;
    
    
    public void Init(Emulator emul, String s, DeviceSilkScreen silk, int cxScreen, int cyScreen);
    public void Destroy();
    public void Start();
    public void Stop();
    public boolean Power(boolean fOn);
    public void Button(int id, boolean fDown);
    public boolean Freeze(boolean fOnStop);
    public boolean Thaw();
    public boolean LoadFile(String sFile);
    public boolean Launch(FileStream file);
    public void NotifyLoad(String sFile);
    public void ResetScreen(HWLCDRegs lcdregs);
    public void DrawScreen(Graphics g);
    public void LoadDebugger();
    public String Debug(String sCommand);
    public void LoadScriptManager();
    public String Script(String sCommand);
}
