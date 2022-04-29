/*  DeviceSilkScreen.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the silk-screen portion of the Device.
 */


import java.awt.*;
import java.awt.event.*;
import java.applet.*;
import java.net.*;

#if DEBUG
import com.ms.security.*;
#endif


class DeviceSilkScreen extends Canvas implements MouseListener, MouseMotionListener
{
    private Emulator emul;
    private CPUMem mem;
    private int xOffset, yOffset, cx, cy;
    protected Image imgSilk;
    
    
    /*  DeviceSilkScreen(emul, sImage, x, y, cx, cy)
     *
     *  Emulator.init() always calls this, because we need a silk-screen object for
     *  the life of the emulator, to display an appropriate image if nothing else.
     *
     *  CPUMem.Init() calls us later, to give us access to its memory, and to give
     *  us the opportunity to allocate our own memory (if we needed any).  BUGBUG: We're
     *  not currently using (cx, cy). -JP
     */
    DeviceSilkScreen(Emulator emul, String sImage, int x, int y, int cx, int cy)
    {
        this.emul = emul;
        this.xOffset = x;       // x offset of the silk-screen within the applet window
        this.yOffset = y;       // y offset of the silk-screen within the applet window
        
#if DEBUG
        // BUGBUG: Apparently, if all the files we need (like images) are not
        // somewhere *within* the directories containing the applet, AND we are
        // trying to access them from the local file system, then the
        // Microsoft security manager will not permit it -- EVEN if we loaded
        // the applet from the local file system in the first place!  That's
        // what I'm guessing anyway, since this was not a problem until I moved
        // all images into an 'images' directory outside the 'java' directory.
        //
        // Since this appears to be a problem ONLY when running from the local
        // file system, I've hard-coded the requested permission to FILEIO.  Both
        // IE and Navigator already appear to handle the NETIO case just fine. -JP
        
        try {
            if (Class.forName("com.ms.security.PolicyEngine") != null)
                PolicyEngine.assertPermission(PermissionID.FILEIO);
        }
        catch (Throwable e) {}          // eg, ClassNotFoundException, FileNotFoundException
#endif
        try {
            imgSilk = emul.getImage(emul.getDocumentBase(), sImage);
        }
        catch (Throwable e) {           // this is to catch any security exceptions
        }
        
        addMouseListener(this);
        addMouseMotionListener(this);
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
    
    
    public void Destroy()
    {
        removeMouseMotionListener(this);
        removeMouseListener(this);
        mem = null;
    }
    
    
    public void paint(Graphics g)
    {
        if (imgSilk != null)
            g.drawImage(imgSilk, 0, 0, this);
    }
    
    
    public void mouseClicked(MouseEvent e)
    {
    }
    

    public void mousePressed(MouseEvent e)
    {
        int x = e.getX() + xOffset;
        int y = e.getY() + yOffset;
        
        if (mem != null && mem.hwregs != null) {
            mem.hwregs.UpdatePen(x, y, true);
            return;
        }
        
        // If the user clicks anywhere on the silk-screen image before an image is running, load the current profile
        emul.LoadProfile(emul.sProfile, emul.sProfileDir, emul.sProfileFile);
    }
    
    
    public void mouseReleased(MouseEvent e)
    {
        int x = e.getX() + xOffset;
        int y = e.getY() + yOffset;
        
        if (mem != null && mem.hwregs != null) {
            mem.hwregs.UpdatePen(x, y, false);
            return;
        }
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
        // Treat it the same as mouse pressed...
        mousePressed(e);
    }
    
    
    public void mouseMoved(MouseEvent e)
    {
        // Since we're emulating a stylus and not a mouse, we don't care whether or not
        // the stylus is merely "hovering" over this part of the device...
    }
    
}
