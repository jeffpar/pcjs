/*  DeviceScreen.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  External interfaces that DeviceScreen provides:
 *
 *      Init():
 *      Called by CPUMem.InitMem() and CPUMem.DestroyMem() to init/uninit DeviceScreen.
 *
 *      Destroy():
 *      Called by Device.Destroy() to release all resources.
 *
 *      Enable():
 *      Called by Device.Power().  Updates fEnabled, which must be true in *addition* to
 *      PFDATA_LCDENABLE in order for the screen to display anything.
 *
 *      Reset():
 *      Called by Device.ResetScreen(), which in turn is called whenever the Device's state
 *      has changed (see the HWLCD classes) or after the applet's visual state has changed,
 *      by Emulator.SetBacklight().  Reset() is a synchronized method that, among other things,
 *      turns around and calls Emulator.ResetScreen().
 *
 *      Draw():
 *      Called by Device.DrawScreen(), which in turn is called by Emulator.Draw().
 *      Draw() is a synchronized method that does NOTHING but turn around and call Emulator.DrawScreen().
 *
 *      CheckBuffer():
 *      Called by CPUThread.run().
 */


import java.awt.*;
import java.awt.event.*;
import java.awt.image.IndexColorModel;


class DeviceScreen implements MouseListener, MouseMotionListener
{
    private Emulator emul;
    private CPUMem mem;
    private HWLCDRegs lcdregs;
    protected int cxScreen, cyScreen;           // width and height of screen, in pixels
    private byte abPixels[];                    // the array of pixels we pass to the Emulator
    private Rectangle rectDirty;                // keeps track of one current dirty rectangle
    private int aiCurrentBits[];                // array of screen bits used to find differences
    private int aiPreviousBits[];               // array of screen bits used to find differences
    private IndexColorModel icmScreen;          // the current palette
    private boolean fEnabled;                   // records whether or not the emulator has enabled us

    // BUGBUG: JDK 1.2.2 seems to have trouble with 4-bit color models (with cColors == 16),
    // so that's the reason that I'm currently using an 8-bit color model (with cColors == 256),
    // not because I actually support that many colors.  I think DragonBall devices only support
    // up to 2-bit grayscale and DragonBall-EZ devices only support up to 4-bit grayscale, so
    // this is clearly overkill, but I don't think it'll hurt anything either (my main concern will
    // be performance). -JP
    
    // NOTE: JDK 1.2.2 also had trouble with pixel indexes outside the color model range.  I used
    // to use 0xff to indicate a pixel at maximum intensity, but to get anything to display with the
    // JDK, I had to change that to "cColors-1" (a reasonable change, but an annoying difference). -JP

    private int cColors = 256;                  // request this many colors for our internal palette
    private int cBPP = 1;                       // default color depth...
    private int cPixelsInt = 32;                // ...which implies this number of pixels per 32-bit integer
    
    
#if DEBUG    
    int[] aiDebugHistory;
    int iNextDebugHistory;
#endif
    

    class Rectangle
    {
        int x, y, cx, cy;
    

        /*  Rectangle()
         *
         *  ENTRY
         *      None
         *
         *  EXIT
         *      Construct an empty rectangle
         */
        Rectangle()
        {
        }
    }
    
    
    /*  DeviceScreen(emul, cx, cy)
     *
     *  Used by Device() to create a new screen context.
     */
    DeviceScreen(Emulator emul, int cx, int cy)
    {
        this.emul = emul;
        cxScreen = cx;
        cyScreen = cy;
        rectDirty = new Rectangle();
    	emul.addMouseListener(this);
    	emul.addMouseMotionListener(this);
        InitHistory_Debug();
    }


    /*  Init(mem)
     *
     *  Called by CPUMem to give us access to its memory, and to give us the opportunity
     *  to allocate our own memory.
     */
    public void Init(CPUMem mem)
    {
        this.mem = mem;
    }
    

    /*  Free()
     */
    public void Free()
    {
        abPixels = null;
        aiCurrentBits = null;
        aiPreviousBits = null;
        rectDirty.cx = 0;
    }
    
    
    /*  Destroy()
     *
     *  Used by Device.Destroy() to explicitly free screen context.
     */
    public void Destroy()
    {
        emul.removeMouseMotionListener(this);
        emul.removeMouseListener(this);
        lcdregs = null;
        Free();
        mem = null;
    }


    /*  Enable(fOn)
     *
     *  Turn screen on or off.  This typically occurs in response to an external event (eg, loss of power).
     *  Internal events, like the LCD being programmatically enabled/disabled, are handled by Reset() directly.
     */
    public synchronized void Enable(boolean fOn)
    {
        if (fEnabled != fOn) {
            fEnabled = fOn;
            Reset(null);
        }
    }


    /*  Reset(regs)
     *
     *  Recompute screen characteristics, and then enable or disable the screen, and refresh as appropriate.
     *  It should only be called on major state changes, and preferably only when the caller knows the screen
     *  state has changed.
     *
     *  For example, both Enable() and HWDragonBall.SetByte() call us only when they know the state has
     *  changed.  Other calls, like those from Init() and Device.ResetScreen(), already occur infrequently;
     *  the latter is called only from Device's HWLCD register handlers and from Emulator.SetBacklight().
     *
     *  Also note that, for the screen to be enabled, the LCD hardware (PFDATA_LCDENABLE) must be enabled AND
     *  the Device must have called Enable(true), indicating that power has been applied.  BOTH are required, or
     *  the screen will not display anything.
     */
    public synchronized void Reset(HWLCDRegs regs)
    {
        if (regs != null)
            lcdregs = regs;
        
        emul.ResetScreen();             // force the Emulator to invalidate its cached state
        
        if (!fEnabled || lcdregs == null || !lcdregs.GetLCDStatus()) {
            Free();
            Refresh();                  // Refresh() calls emul.RefreshScreen(abPixels == null)
            return;
        }
        
        // If we assume the physical screen width is a constant (cxScreen), then the LBAR register (which
        // describes the number of WORDS required for each scanline) can simply be multiplied by 16 (to yield
        // the number of BITS required for each scanline) and then divided by 160 (to yield bits-per-pixel).
        //
        // For 2BPP modes, most programs set VPW equal to LBAR, unless they're making the screen a window onto
        // a larger frame buffer.  They also set FRCM to 0xB9 (typical value for grayscale pixel oscillations),
        // and they also wait 20ms between the time they clear bit 7 of CKCON and the time they set it again.
        // It's also possible that LBAR could be set 1 or 2 higher, if the program is using it to do horizontal
        // panning.  Other important settings: bit 0 of the PICF is normally 0 for 1BPP, or 1 for 2BPP.
        //
        // Last but not least is the 16-bit GPMR register, where bits 8-11, 12-15, 0-3, and 4-7 describe the
        // intensity of pixels 00, 01, 10, and 11.
        
        int width = lcdregs.GetBufferWidth();
        cBPP = (width * 16) / cxScreen;
        if (cBPP <= 0)
            cBPP = 1;                   // insurance against insanity...
        cPixelsInt = 32/cBPP;
        if (cPixelsInt <= 0)
            cPixelsInt = 32;            // more insurance against insanity...
        
        abPixels = new byte[cxScreen * cyScreen];
        CreatePalette(lcdregs.GetPaletteReds(), lcdregs.GetPaletteGreens(), lcdregs.GetPaletteBlues());
        
        rectDirty.x = 0;
        rectDirty.y = 0;
        rectDirty.cx = cxScreen;
        rectDirty.cy = cyScreen;
        CheckBuffer(true);              // CheckBuffer() calls a combination of UpdateDirtyRect() and Refresh()
    }


    /*  Draw()
     *
     *  Called by Device.DrawScreen()
     */
    public synchronized void Draw(Graphics g)
    {
        emul.DrawScreen(g);
    }


    /*  CheckBuffer(fInvalid)
     *
     *  Check the screen buffer for changes, and then refresh the Emulator.
     *
     *  ENTRY
     *      fInvalid == true to force a full buffer transfer (ie, force a complete sync and redraw)
     *
     *  EXIT
     *      true if any differences were found, false if not (and automatically updates the screen if any were found)
     */
    public synchronized boolean CheckBuffer(boolean fInvalid)
    {
        if (abPixels == null || lcdregs == null)
            return false;
        
        boolean fDirty = false;
        
        int xLow = cxScreen, yLow = cyScreen, xHigh = 0, yHigh = 0;
        
        // Get the current address of the frame buffer
        int addrBuffer = lcdregs.GetBufferAddress();
        int ciRow = lcdregs.GetBufferWidth() / 2;       // divide # of 16-bit words by 2 to get number of 32-bit ints
        int ciBuffer = ciRow * cyScreen;

        if (aiCurrentBits != null && aiCurrentBits.length != ciBuffer ||
            aiPreviousBits != null && aiPreviousBits.length != ciBuffer) {
            aiCurrentBits = null;
            aiPreviousBits = null;
            xLow = 0;  yLow = 0;  xHigh = cxScreen;  yHigh = cyScreen;
        }
        
        if (aiPreviousBits == null) {
            fInvalid = true;
            aiPreviousBits = new int[ciBuffer];
        }
        
        if (aiCurrentBits == null) {
            aiCurrentBits = new int[ciBuffer];
        }
        
        mem.GetLongs(addrBuffer, aiCurrentBits, 0, ciBuffer);
        
        // Compare current buffer to previous buffer.  The comparison process will
        // also involve propagating every modified pixel to abPixels (which always uses
        // 1 byte per pixel) and updating the current dirty rectangle in the process.
        
        for (int offBuffer=0,offScreen=0,x=0,y=0; offBuffer<ciBuffer; offBuffer++) {
            
            int iDiff = aiCurrentBits[offBuffer];
            if (fInvalid || iDiff != aiPreviousBits[offBuffer]) {
                
                int iColorInc = 0;
                if (cBPP == 1)
                    iColorInc = cColors-1;
                else if (cBPP == 2)
                    iColorInc = 0x55;
                else if (cBPP == 8)
                    iColorInc = 1;
                else
                    Emulator.Assert_Debug(false, "DeviceScreen.CheckBuffer(): cBPP unsupported (" + cBPP + ")");
                
                // Update abPixels[offScreen] through abPixels[offScreen+cPixelsInt-1]
                
                for (int iPixel=0,cShift=32-cBPP,iMask=(1<<cBPP)-1; iPixel<cPixelsInt; iPixel++,cShift-=cBPP)
                    abPixels[offScreen++] = (byte)(((iDiff >> cShift) & iMask) * iColorInc);
                
                // Update the variables that we'll use to update the current dirty rectangle,
                // assuming they've not already been set to the maximum invalid region.
                
                if (!fInvalid) {
                    if (xLow > x)
                        xLow = x;
                    if (yLow > y)
                        yLow = y;
                    if (xHigh < x+cPixelsInt)
                        xHigh = x+cPixelsInt;
                    if (yHigh < y+1)
                        yHigh = y+1;
                }
                fDirty = true;
            }
            else
                offScreen += cPixelsInt;
            
            // Advance x and y now
            x += cPixelsInt;
            if (x == cxScreen) {
                x = 0;
                y++;
            }
        }
        
        if (fDirty) {
            UpdateDirtyRect(xLow, yLow, xHigh-xLow, yHigh-yLow);
            Refresh();
        }

        // Current buffer becomes previous buffer, and previous buffer will be used as current next time around
        int aiTempBits[] = aiPreviousBits;
        aiPreviousBits = aiCurrentBits;
        aiCurrentBits = aiTempBits;
        
        return fDirty;
    }
    

    /*  UpdateDirtyRect(x, y, cx, cy)
     *
     *  ENTRY
     *      x,y,cx,cy == dirty region on screen
     *
     *  EXIT
     *      Dirty rectangle(s) updated.  Currently, only one dirty rectangle is maintained,
     *      but more could be added if it helped performance.
     */
    private synchronized void UpdateDirtyRect(int x, int y, int cx, int cy)
    {
        AppendHistory_Debug(0x1000);
        AppendHistory_Debug(x);
        AppendHistory_Debug(y);
        AppendHistory_Debug(cx);
        AppendHistory_Debug(cy);

        if (cx == 0 || cy == 0)
            return;
        
        // "Normalize" the rectangle
        if (cx < 0) {
            x += cx;
            cx = -cx;
        }
        if (cy < 0) {
            y += cy;
            cy = -cy;
        }

        // If the current dirty rectangle is empty, then
        // this one simply becomes the current
        if (rectDirty.cx == 0) {
            rectDirty.x = x;
            rectDirty.y = y;
            rectDirty.cx = cx;
            rectDirty.cy = cy;
        }
        else {
            // "Add" this rectangle to the current dirty rectangle
            if (x < rectDirty.x) {
                rectDirty.cx += (rectDirty.x - x);
                rectDirty.x = x;
            }
            if (y < rectDirty.y) {
                rectDirty.cy += (rectDirty.y - y);
                rectDirty.y = y;
            }
        
            int delta;
            delta = (x + cx) - (rectDirty.x + rectDirty.cx);
            if (delta > 0)
                rectDirty.cx += delta;
            
            delta = (y + cy) - (rectDirty.y + rectDirty.cy);
            if (delta > 0)
                rectDirty.cy += delta;
        }

        AppendHistory_Debug(0x1001);
        AppendHistory_Debug(rectDirty.x);
        AppendHistory_Debug(rectDirty.y);
        AppendHistory_Debug(rectDirty.cx);
        AppendHistory_Debug(rectDirty.cy);
    }


    /*  Refresh()
     *
     *  Update the Emulator containing our screen.
     */
    private synchronized void Refresh()
    {
        AppendHistory_Debug(0x1002);
        AppendHistory_Debug(rectDirty.x);
        AppendHistory_Debug(rectDirty.y);
        AppendHistory_Debug(rectDirty.cx);
        AppendHistory_Debug(rectDirty.cy);

        // If abPixels is null, then emul.RefreshScreen() won't actually do anything

        if (abPixels == null || rectDirty.cx > 0 && rectDirty.cy > 0) {
            
            emul.RefreshScreen(cxScreen, cyScreen, /*emul.getColorModel()*/ icmScreen, abPixels, rectDirty.x, rectDirty.y, rectDirty.cx, rectDirty.cy);
        
            rectDirty.x = rectDirty.y = rectDirty.cx = rectDirty.cy = 0;
            
            Thread.yield();     // BUGBUG: Do something smarter -JP
        }
    }
    
    
    /*  CreatePalette(r[], g[], b[])
     *
     *  Internal function used by Reset()
     */
    private void CreatePalette(byte[] r, byte[] g, byte[] b)
    {
        byte cBits;
        
        // Count the number bits in cColors (which better be a power of 2!)
        // BUGBUG: Isn't there a base2 log function in Java?  Why should I have to
        // call the natural log function twice to accomplish the same thing??? -JP
        
        for (cBits=1; (1<<cBits) < cColors; cBits++)
            ;
        
        // BUGBUG: For now, any HWLCD implementation that supplies RGB data must supply exactly the same
        // amount as the number of colors in the palette we create (which consists of cColors).  In the future,
        // if we want to support 2-bit and 4-bit color palettes, the HWLCD modules will either have to expand
        // their palettes, or (better yet) we'll want to add code here that automatically expands them. -JP

        if (r == null || g == null || b == null || r.length != cColors || g.length != cColors || b.length != cColors) {
            
            // Figure out the DeviceScreen's range of colors, starting with
            // the background color (device color index 0), up to the "brightest"
            // color (device color index cColors-1, which we assume to be black).
            
            Color clrBackground = emul.getBackground();
            
            r = new byte[cColors];
            g = new byte[cColors];
            b = new byte[cColors];
            
            r[0] = (byte)clrBackground.getRed();
            g[0] = (byte)clrBackground.getGreen();
            b[0] = (byte)clrBackground.getBlue();
        
            for (int i=1; i<cColors-1; i++) {
                r[i] = (byte)(((r[0] & 0xff) * (cColors-i)) / cColors);
                g[i] = (byte)(((g[0] & 0xff) * (cColors-i)) / cColors);
                b[i] = (byte)(((b[0] & 0xff) * (cColors-i)) / cColors);
            }
        
            // Well, it's great that we've got our colors now, except that we've no
            // guarantee they won't dither on a 256-color device (the lowest res display
            // device we assume people are still using).
        
            // So now we have to go through the colors, rounding each r/g/b component to
            // the nearest multiple of 0x33.  0x33 comes from the fact that what browsers
            // call "the safety palette" consists entirely of colors whose r/g/b components
            // are multiples of 0x33.  BUGBUG: This is not optimal; we really need the
            // equivalent of GetNearestColor(). -JP
        
            for (int i=1; i<cColors-1; i++) {
                int iDelta = 0;
                r[i] = (byte)((((r[i] & 0xff) + 0x19) / 0x33) * 0x33);
                g[i] = (byte)((((g[i] & 0xff) + 0x19) / 0x33) * 0x33);
                b[i] = (byte)((((b[i] & 0xff) + 0x19) / 0x33) * 0x33);
            }
        }
        
        // Create the DeviceScreen's "palette" now
        icmScreen = new IndexColorModel(cBits, cColors, r, g, b);
    }
    
    
    public void mouseClicked(MouseEvent e)
    {
    }
    

    public void mousePressed(MouseEvent e)
    {
        if (mem != null) {
            // Creation of a dialog can result in other mouse events downstream
            // getting consumed (like the mouseReleased() companion to this call).
            // Which is why we'll only do one or the other.
            if (mem.IsPaging())
                emul.CreateDialog(mem.GetPagedPercentage());
            else if (mem.hwregs != null)
                mem.hwregs.UpdatePen(e.getX(), e.getY(), true);
        }
    }
    
    
    public void mouseReleased(MouseEvent e)
    {
        if (mem != null && mem.hwregs != null)
            mem.hwregs.UpdatePen(e.getX(), e.getY(), false);
    }
    
    
    public void mouseEntered(MouseEvent e)
    {
        // Since we're emulating a stylus and not a mouse, we don't care whether or not
        // the stylus is merely "hovering" over this part of the device...
    }
    
    
    public void mouseExited(MouseEvent e)
    {
        // Since we're emulating a stylus and not a mouse, we don't care whether or not
        // the stylus is merely "hovering" over this part of the device...
    }
    
    
    public void mouseDragged(MouseEvent e)
    {
        // Treat it the same as mouse pressed.  BUGBUG: This seems to be getting called
        // on almost every mouse click, not merely on drags (or else it has a very sensitive
        // notion of what constitutes a drag).  Is this a bug in the VM or by design? -JP
        mousePressed(e);
    }
    
    
    public void mouseMoved(MouseEvent e)
    {
        // Since we're emulating a stylus and not a mouse, we don't care whether or not
        // the stylus is merely "hovering" over this part of the device...
    }
    

    /** @conditional (DEBUG) */
    void InitHistory_Debug()
    {
        aiDebugHistory = new int[256];
        iNextDebugHistory = 0;
    }
    
    
    /** @conditional (DEBUG) */
    void AppendHistory_Debug(int i)
    {
        aiDebugHistory[iNextDebugHistory++] = i;
        if (iNextDebugHistory == aiDebugHistory.length)
            iNextDebugHistory = 0;
    }
    
}
