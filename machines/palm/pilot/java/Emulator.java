/*  Emulator.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This contains all the main applet notification methods and JavaScript interfaces.
 *
 *  The following applet notification methods are provided:
 *      public void init()
 *      public void start()
 *      public void stop()
 *      public void destroy()
 *
 *  A word of warning about these notification methods: despite what your Java documentation may
 *  say about them, different browsers have very different rules for calling them, alas.  For example,
 *  when jumping forward and back between web pages, IE will call the applet's init() and destroy()
 *  methods, as well as the start() and stop() methods, whereas NS correctly calls only start() and
 *  stop().  The same is true in the case of a web page reload, except that IE can do even weirder stuff,
 *  like first calling stop() and destroy(), but before destroy() finishes, invoking init() and start(),
 *  presumably on a different thread.
 *
 *  One of the upshots here is that the NS browser will allow the applet to retain its state for a time.
 *  We're polite about pausing the applet while you're switched away, and when you come back to the page,
 *  the applet will automatically pick up where you left off left.  But IE doesn't allow that.  I haven't
 *  checked out the behavior in older versions of IE, but it's probably different.
 *
 *  The following Component methods are provided:
 *      public void paint(Graphics g)
 *      public void update(Graphics g)
 *
 *  The following methods are provided primarily for JavaScript:
 *      public String LoadProfile(String sName, String sDir)
 *      public String LoadFile(String sTitle, String sFile)
 *      public boolean PressButton(int idButton)
 *      public boolean ReleaseButton(int idButton)
 *      public String GetTextMessage()
 *      public void EnableDebugger(boolean f)
 *      public String SendDebuggerCommand(String sCommand)
 *      public String BeginScriptCommand()
 *      public String SendScriptCommand(String sCommand)
 *      public String EndScriptCommand()
 *
 *  The following classes attempt to load files from the file system hosting the applet:
 *      Emulator (LoadImage() can load GIFs or JPGs for display in the applet's window)
 *      DeviceSilkScreen (to load a "silk.gif" image from the specified profile directory)
 *      FileStream (to load any other kind of data file)
 *
 *  All of the above methods currently invoke the "com.ms.security.PolicyEngine" class in order to assert
 *  that they have permission to access the specified file.  However, unless the file is being accessed via
 *  the SAME web server that the applet was loaded from, the request will fail unless the applet is part of
 *  a signed CAB.  Note that Sun's permission scheme is different and not currently supported, but I think
 *  the same basic principles apply (ie, the applet must be part of a signed JAR).
 *
 *  To summarize: unless you're running the applet under the VJ++ debugger (which relaxes some of these
 *  restrictions in order to facilitate use of the local file system for debugging), file and net I/O
 *  permissions will generally be DENIED unless you're running on a web server.  Furthermore, unless all the
 *  files you want to access are on the SAME web server, permissions will still be DENIED unless you've also
 *  packaged the applet in a signed CAB.  If you never intend to run the applet on a web server OR you never
 *  intend to package the applet in a CAB, then you might as well REMOVE those PolicyEngine calls, because
 *  they'll never do you any good.  Such is my limited understanding of how Microsoft left things standing
 *  before abandoning VJ++ anyway.  And there might be good reasons to remove them anyway, even if they don't
 *  seem to be hurting anything; for example, other Java implementations may waste measurable time looking
 *  for those Microsoft-specific classes.
 */


import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.applet.*;


//  For LoadImage()
import java.net.*;

#if LATER
import com.ms.security.*;
#endif


//  For Debug.assert
import com.ms.wfc.util.*;


public class Emulator extends Applet implements Runnable
{
    // Beginning of INSTANCE variables
    protected int id;                                           // this is primarily for debugging purposes (set based on idEmulator)
    protected int iState;                                       // this debugging aid also helps us avoid races while destroying instances of the applet
    protected DeviceInterface dev;
    protected DeviceSilkScreen silk;
    protected boolean fBacklight, fAutoStart;
    protected int cxEmul, cyEmul, cxSilk, cySilk;
    protected String sProfile, sProfileDir, sProfileFile, sFileTitle, sFileName;
    
    private int cFileLoading;
    private EmulatorDialog emuldlg;
    private String sEmulMessage = sWelcome;
    private String sInit, sDebugCommand, sScriptCommand;
    private MemoryImageSource srcScreen;
    private Image imgScreen, imgBitmap;
    private Color clrBackground, clrBacklight, clrCurrent;
    private boolean fActivated, fIgnorePowerUp, fClearScreen, fDirtyEmul;
    private int xDirty, yDirty, cxDirty, cyDirty;

    // Beginning of STATIC variables
    private static int idEmulator;                              // used to generate unique IDs for each instance of the Emulator (see instance variable "id")
    private static EmulatorConsole emulcon;                     // we only want one console (for now), even if there happen to be multiple instances of the applet
    public static boolean fDebugger;                            // true if JavaScript debugger enabled
    
    public static final int MSGLEVEL_NONE       = 0;            // this MSGLEVEL still includes critical messages
    public static final int MSGLEVEL_ERROR      = 1;
    public static final int MSGLEVEL_WARNING    = 2;
    public static final int MSGLEVEL_VERBOSE    = 3;
    
    public static int fMsgLevel = MSGLEVEL_NONE;
    
    public static final int EMULSTATE_INIT      = 0x00000001;
    public static final int EMULSTATE_START     = 0x00000100;
    public static final int EMULSTATE_STOP      = 0x00010000;
    public static final int EMULSTATE_DESTROY   = 0x01000000;

    public static final String sTrue = "true";
    public static final String sFalse = "false";

    // The "Profile" setting determines where to look for the silk-screen image, ROM image, etc.
    public static final String sProfileParam = "Profile";       // determines initial value of sProfile and sFileName
    public static final String sProfileDefault = "Pilot";
    
    public static final String sProfileDirParam = "ProfileDir"; // determines initial value of sProfileDir
  //public static final String sProfileDirDefault = "pilot/";   // sProfileDirDefault is just sProfile + trailing slash
    
    public static final String sProfileFileParam="ProfileFile"; // determines initial value of sProfileFile
    public static final String sProfileFileDefault="profile.zip";
    
    public static final String sBackgroundParam = "Background"; // determines initial value of clrBackground
    public static final String sBackgroundDefault = "00CC99";   // (hopefully safe non-dithered color in 256-color mode)
    
    public static final String sBacklightParam = "Backlight";   // determines initial value of clrBacklight
    public static final String sBacklightDefault = "66FFCC";    // (hopefully safe non-dithered color in 256-color mode)

    public static final String sAutoStartParam = "AutoStart";   // determines whether device should auto-start
    public static final String sAutoStartDefault = sFalse;

    public static final String sMsgLevelParam = "MsgLevel";     // determines initial value of fMsgLevel
  //public static final String sMsgLevelDefault = "0";          // default is MSGLEVEL_NONE (see above)

    public static final String sWelcome = "Welcome to the PIMUlator";
    public static final String sPleaseWait = "One moment please...";
    public static final String sNoFileName = "No filename";
    public static final String sBusyLoading = "Try again in a moment...";
    
    public static final String sCopyright1 = "This Palm Emulator applet is an original work by DoubleBit Software. Copyright (c) 1999-2002. All rights reserved.";
    public static final String sCopyright2 = "No portion of this applet may be copied or redistributed without written permission from DoubleBit Software.";
    

    public void init()
    {
      //DisplayDebugMessage_Debug("Emulator.init(): enter");
        
        // BUGBUG: we don't necessarily need a console in non-debugging environments, but
        // it doesn't cost much, and it's simpler to always to allocate, so we'll leave it as-is

        if (emulcon == null)
            emulcon = new EmulatorConsole();
        
        id = ++idEmulator;
        iState += EMULSTATE_INIT;
        
        cxEmul = getSize().width;
        cyEmul = getSize().height;
        
        // NOTE: this call may update the Emulator's window size parms (eg, cyEmul)
        GetPageParams(sCopyright1, sCopyright2);
        
        clrCurrent = clrBackground;
		setBackground(clrCurrent);
        setLayout(null);
        
        if (sProfile != null) {
            silk = new DeviceSilkScreen(this, sProfileDir + "silk.gif", 0, cyEmul, cxSilk, cySilk);
            add(silk);
            silk.setSize(cxSilk, cySilk);
            silk.setLocation(0, cyEmul);
        }
        
      //DisplayDebugMessage_Debug("Emulator.init(): exit");
    }

    
    public void start()
    {
      //DisplayDebugMessage_Debug("Emulator.start(): enter");
        
        iState += EMULSTATE_START;
        
        if (fAutoStart)
            LoadDevice();
        else
            Activate(true);
        
      //DisplayDebugMessage_Debug("Emulator.start(): exit");
    }
    

    public void stop()
    {
      //DisplayDebugMessage_Debug("Emulator.stop(): enter");
        
        iState += EMULSTATE_STOP;
        
        // Calling Activate(false) will put the device's screen in a happy state
        // and halt the CPU if it's currently running, and then calling Device.Stop()
        // will destroy the CPU thread entirely (if there is one).
        
        Activate(false);
        
        if (dev != null)
            dev.Stop();
        
      //DisplayDebugMessage_Debug("Emulator.stop(): exit");
    }
    

    synchronized public void destroy()
    {
      //DisplayDebugMessage_Debug("Emulator.destroy(): enter");
        
        iState += EMULSTATE_DESTROY;
        
        if (dev != null) {
            dev.Destroy();
            dev = null;
        }
        
        if (silk != null) {
            remove(silk);
            silk.Destroy();
            silk = null;
        }
        
      //DisplayDebugMessage_Debug("Emulator.destroy(): exit");
    }


    /*  paint(g)
     *
     *  Overrides the applet's java.awt.Component.paint() method
     */
    public void paint(Graphics g)
    {
        Draw(g);
    }
    
    
    /*  update(g)
     *
     *  Overrides the applet's java.awt.Component.update() method.  Usually called in
     *  response to repaint().  Normally, update() will clear the background first and then
     *  invoke paint(); however, this may cause flickering, which is one reason to override
     *  the update() method, as we are doing here.
     */
    public void update(Graphics g)
    {
        Draw(g);
        fClearScreen = false;
    }


    /*  Draw(g)
     *
     *  Worker function for paint() and update()
     */
    public void Draw(Graphics g)
    {
        // This must be first: fClearScreen is generally set by Activate(true),
        // when power is transitioning on, and it's possible that other stuff is
        // splattered on the applet window.  It's a one-shot squeegee operation.
        
        if (fClearScreen) {
            g.setColor(clrCurrent);
            g.fillRect(0, 0, cxEmul, cyEmul);
        }
        
        // This should be second, for performance: if the device is "on" and
        // an image has been created for its frame buffer, that's what we paint
        // (and *all* we want to paint).
        //
        // Note that Device.DrawScreen() simply calls DeviceScreen.Draw(), which is
        // a synchronized call back to Emulator.DrawScreen().
        
        if (fActivated && imgScreen != null) {
            sEmulMessage = null;
            dev.DrawScreen(g);
        }
        
        // If we're still here, then if power is on, that just means no image for
        // the frame buffer has been created yet.  Alternatively, if power is off and
        // there's no static image to display, then once again, just display an
        // empty screen.
        
        else if (fActivated || imgBitmap == null) {
            g.setColor(clrCurrent);
            g.fillRect(0, 0, cxEmul, cyEmul);
            if (sEmulMessage != null /* && !fDebugger */) {
                g.setColor(Color.black);
                g.drawString(sEmulMessage, 5, 10);
            }
        }
        
        // If we're still here, power is definitely off, and there is definitely a
        // static image to display, so display that now.  BUGBUG: if the image happens
        // to be smaller than the applet window, perhaps we should once again clear
        // everything first...? -JP

        else {
            g.drawImage(imgBitmap, 0, 0, this);
        }
    }
    
    
    /*  DrawScreen()
     *
     *  Called by DeviceScreen.Draw()
     *
     *  This function exists so that DeviceScreen can safely render the screen
     *  (ie, while no one is inside the synchronized DeviceScreen.Draw() method).
     */
    public void DrawScreen(Graphics g)
    {
        if (fDirtyEmul) {
            g.clipRect(xDirty, yDirty, cxDirty, cyDirty);
            fDirtyEmul = false;
        }
        g.drawImage(imgScreen, 0, 0, this);
    }
    
    
    /*  ResetScreen()
     *
     *  Called by DeviceScreen.Reset()
     *
     *  This function exists so that DeviceScreen can safely zap the Image the Emulator uses to
     *  render its screen (eg, while no one else is inside the synchronized DeviceScreen.Reset() method).
     */
    public void ResetScreen()
    {
        imgScreen = null;
    }
    

    /*  RefreshScreen(cx, cy, cm, pixels, xDirty, yDirty, cxDirty, cyDirty)
     *
     *  Called by DeviceScreen.Refresh().  If no pixels are supplied, then it translates to a repaint();
     *  all other parameters are ignored.
     *
     *  The first time it's called, it creates an Image object (imgScreen) for the device's screen,
     *  using the supplied 'pixels' array.  In all cases, the image is forced to paint.  Again, note that
     *  the DeviceScreen.Refresh() method is synchronized.
     */
    public void RefreshScreen(int cx, int cy, ColorModel cm, byte[] pixels, int xDirty, int yDirty, int cxDirty, int cyDirty)
    {
        if (imgScreen == null) {
            if (pixels != null) {
                srcScreen = new MemoryImageSource(cx, cy, cm, pixels, 0, cxDirty);
                srcScreen.setAnimated(true);
                srcScreen.setFullBufferUpdates(false);
                imgScreen = createImage(srcScreen);
            }
            repaint();
        }
        else {
            fDirtyEmul = true;
            this.xDirty = xDirty;
            this.yDirty = yDirty;
            this.cxDirty = cxDirty;
            this.cyDirty = cyDirty;
            srcScreen.newPixels(xDirty, yDirty, cxDirty, cyDirty);
        }
    }
    
    
    /*  Activate(fOn)
     *
     *  All callers used to just be JavaScript callers, so we didn't bother making this
     *  function synchronized (although maybe we should have, if any browsers ever
     *  used multiple threads to call JavaScript functions).  But, that's neither here
     *  nor there now, because we also call Activate() from Emulator.stop() now, which is an
     *  applet notification method, not a JavaScript interface.
     */
    public synchronized void Activate(boolean fOn)
    {
        boolean fChanged = false;

        if (dev != null) {
            if (!fActivated && fOn) {
                fClearScreen = true;
                if (dev.Power(true)) {
                    fActivated = true;
                    fChanged = true;
                }
            }
            else if (fActivated && !fOn) {
                dev.Power(false);   
                fActivated = false;
                fChanged = true;
                SetBacklight(false);
            }
        }
        if (!fActivated) {
            if (imgBitmap != null || sEmulMessage != null)
                fChanged = true;
            imgBitmap = null;
            sEmulMessage = null;
        }
        if (fChanged)
            repaint();
    }
    
    
    /*  SetBacklight(fOn)
     *
     *  All callers used to just be JavaScript callers, so we didn't bother making this
     *  function synchronized (although maybe we should have, if any browsers ever
     *  used multiple threads to call JavaScript functions).  But, that's neither here
     *  nor there now, because we also call Activate() from Emulator.stop() now, which is an
     *  applet notification method, not a JavaScript interface -- and Activate() in turn calls
     *  this function.
     */
    public synchronized void SetBacklight(boolean fOn)
    {
        if (fBacklight != fOn) {
            fBacklight = fOn;
            if (fBacklight)
                clrCurrent = clrBacklight;
            else
                clrCurrent = clrBackground;
            setBackground(clrCurrent);
            if (dev != null)
                dev.ResetScreen(null);
        }
    }
    
    
    /*  LoadImage(sFile)
     *
     *  Worker function used by LoadFile() to load the specified image (usually a GIF or JPG).
     */
    Image LoadImage(String sFile)
    {
#if LATER
        try {
            if (Class.forName("com.ms.security.PolicyEngine") != null)
                PolicyEngine.assertPermission(sFile.startsWith("file:")? PermissionID.FILEIO : PermissionID.NETIO);
        }
        catch (Throwable e) {}          // eg, ClassNotFoundException, FileNotFoundException
#endif        
        try {
            URL urlImg = new URL(sFile);
            if (urlImg != null)
                return getImage(urlImg);
        }
        catch (Throwable e) {}          // this is to catch any security exceptions
        return null;
    }
    
    
    /*  SetProfile(sName, sDir, sFile)
     *
     *  Worker function records the name (and optional directory, and optional file) of the desired profile
     *  and sets the default fully-qualified filename we're to load (eventually) for that profile.
     *
     *  The fully-qualified filename appended to the profile path used to be "rom.zip", which in turn was
     *  expected to contain some sort of raw binary image (eg, "pilot.rom"), and could optionally contain a
     *  RAM initialization image as well (eg, "pilot.ram").
     *
     *  However, with the introduction of paged ROMs, we've adopted a new convention: the profile directory
     *  may contain -- but is not required to contain -- "profile.zip".  If there is no "profile.rom" inside
     *  the ZIP, or there is no ZIP, then we'll look for "profile.rom" outside.  Next, we'll also look for
     *  a "profile.ram", but we'll only look inside the ZIP, if any.  This is because RAM files are quite
     *  large, are easily compressed, and we do not support "paged RAM" at this time, so it doesn't make much
     *  sense to support the use of RAM files outside of ZIPs.
     */
    void SetProfile(String sName, String sDir, String sFile)
    {
        if (sName == null)
            sName = sProfileDefault;
        
        sProfile = sName;
        sProfileDir = sDir;
        sProfileFile = sFile;
        
        if (sProfileDir == null)
            sProfileDir = sName.toLowerCase();
        
        if (!sProfileDir.endsWith("/"))
            sProfileDir = sProfileDir + "/";
        
        if (sProfileFile == null)
            sProfileFile = sProfileFileDefault;

        // Now set up the title and filename, based on the specified profile
        
        SetFileName(sProfile + " profile", sProfileDir + sProfileFile);
    }


    /*  SetFileName(sTitle, sFile)
     *
     *  Worker function records the fully-qualified filename we're to load (eventually) and associated title.
     *  The base filename to load will come either from the applet tag or from a JavaScript caller (eg, LoadFile).
     */
    void SetFileName(String sTitle, String sFile)
    {
        sFileTitle = (sTitle == null? sFile : sTitle);
        
		// Does the name look like it starts with "http:", "file:", etc?
		
		if (sFile.length() > 4 && sFile.charAt(4) == ':')
            sFileName = sFile;          // yes
		else if (sFile.startsWith("\\") || sFile.length() > 1 && sFile.charAt(1) == ':')
			sFileName = "file:" + sFile;
        else {                          // no
            sFileName = getDocumentBase().toString();
            int i = sFileName.lastIndexOf('/');
            if (i == -1)
                sFileName = sFile;
            else
                sFileName = sFileName.substring(0, i+1) + sFile;
        }
    }
    

    /*  LoadProfile(sName)
     *
     *  JavaScript interface to indicate a specific profile to load.  Even if this call is
     *  never made, we still set a default profile, according to the profile specified in
     *  the applet tag.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String LoadProfile(String sName, String sDir, String sFile)
    {
        // BUGBUG: Apparently, JavaScript makes life simpler for scripts by treating null
        // strings as empty strings, but apparently it does not do that for calls into Java.
        // It seems we can, however, return null on our way *out* of Java, and rely on that
        // being converted back into an empty string. -JP
        
        if (sName == null || sName.length() == 0)
            return null;
        
        if (sDir != null && sDir.length() == 0)
            sDir = null;
        
        if (sFile != null && sFile.length() == 0)
            sFile = null;
        
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return sBusyLoading;
        
        // I used to deactivate first, but if LoadDevice declined to start because another load was
        // already underway, turning deactivating ourselves here could leave us in the wrong state.
        // Device.LoadFile() already deactivates anyway, it's just that that may not be good enough for
        // all error paths.  We'll see.... -JP
        //
        // Activate(false);
        
        SetProfile(sName, sDir, sFile);
        
        return LoadDevice();
    }
    

    /*  LoadFile(sTitle, sFile)
     *
     *  JavaScript interface to indicate a specific file to load.  Even if this call is
     *  never made, we still set a default filename, according the to profile specified in
     *  the applet tag.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String LoadFile(String sTitle, String sFile)
    {
        // BUGBUG: Apparently, JavaScript makes life simpler for scripts by treating null
        // strings as empty strings, but apparently it does not do that for calls into Java.
        // It seems we can, however, return null on our way *out* of Java, and rely on that
        // being converted back into an empty string. -JP
        
        if (sFile == null || sFile.length() == 0)
            return sNoFileName;         // return a friendly string in case the debugger is calling us
        
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return sBusyLoading;
        
        // I used to deactivate first, but if LoadDevice declined to start because another load was
        // already underway, turning deactivating ourselves here could leave us in the wrong state.
        // Device.LoadFile() already deactivates anyway, it's just that that may not be good enough for
        // all error paths.  We'll see....  We do still deactivate ourselves below, in the case where
        // we want to display a static image. -JP
        //
        // Activate(false);
        
        // BUGBUG: case-sensitive compares -JP
        if (sFile.endsWith(".gif") || sFile.endsWith(".jpg")) {
            
            Activate(false);
            
            imgBitmap = LoadImage(sFile);
            if (imgBitmap != null) {
                repaint();
                return null;
            }
            else
                return DisplayEmulatorMessage("Unable to load " + sFile, true);
        }

        SetFileName(sTitle, sFile);
        
        return LoadDevice();
    }
    

    /*  PressButton(idButton)
     *
     *  JavaScript interface to notify us when a button has been pressed.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public boolean PressButton(int idButton)
    {
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return false;
        
        if (idButton == DeviceInterface.BUTTON_POWER) {
            fIgnorePowerUp = false;
            if (!fActivated) {
                if (dev == null)
                    LoadDevice();
                else
                    Activate(true);
                fIgnorePowerUp = true;
            }
            return true;
        }
        
        if (idButton == DeviceInterface.BUTTON_BACKLIGHT) {
            SetBacklight(!fBacklight);
            fIgnorePowerUp = true;      // the next ReleaseButton(BUTTON_POWER) is now meaningless
            return true;
        }
        
        if (idButton > DeviceInterface.BUTTON_POWER && idButton <= DeviceInterface.BUTTON_MEMOPAD) {
            if (dev != null) {
              //DisplayConsoleMessage("Button down: " + idButton);
                dev.Button(idButton, true);
                return true;
            }
            // BUGBUG: Even if LoadDevice() hasn't been called yet, buttons 3-6 should still activate the device
            // and launch their respective applications. -JP
        }
            
        return false;
    }
    

    /*  ReleaseButton(idButton)
     *
     *  JavaScript interface to notify us when a button has been released.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public boolean ReleaseButton(int idButton)
    {
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return false;
        
        if (idButton == DeviceInterface.BUTTON_POWER) {
            if (!fIgnorePowerUp) {
                if (fActivated)
                    Activate(false);
            }
            fIgnorePowerUp = false;
            return true;
        }
        
        if (idButton > DeviceInterface.BUTTON_POWER && idButton <= DeviceInterface.BUTTON_MEMOPAD) {
            if (dev != null) {
              //DisplayConsoleMessage("Button up:   " + idButton);
                dev.Button(idButton, false);
                return true;
            }
        }
        
        return false;
    }
    

    /*  GetTextMessage()
     *
     *  JavaScript interface allowing web pages to pull any text messages we may have queued
     *  up for it.  This is primarily how we communicate with web pages, since it's far
     *  easier for web pages to call INTO our code (via JavaScript) than it is for us to call
     *  INTO the them (another miserable fact in an applet's life).
     */
    public String GetTextMessage()
    {
        return emulcon.GetTextMessage();
    }
    

    /*  EnableDebugger(fSet)
     *
     *  JavaScript interface to enable the debugger and record the fact that a JavaScript
     *  debugger exists; this fact is important for knowing whether or how to display diagnostic
     *  messages.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public void EnableDebugger(boolean f)
    {
        //  If the JavaScript debugger UI was not previously enabled and now it will be, and
        //  the device has already been created, then we need to make the call to LoadDebugger
        //  that Device.Init() would have done originally.
        
        if (iState >= EMULSTATE_DESTROY)
            return;
        
        if (!fDebugger && f && dev != null) {
            fDebugger = true;
            dev.LoadDebugger();
            return;
        }
        
        fDebugger = f;
    }
    

    /*  SendDebuggerCommand(sCommand)
     *
     *  JavaScript interface to pass a command to the Debugger.  Since a prerequisite for passing
     *  a command to the Debugger is having it loaded, and since a prerequisite for that is
     *  having the Device class loaded as well, we call LoadDevice().  Don't worry, LoadDevice will
     *  only load stuff that hasn't been loaded yet.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String SendDebuggerCommand(String sCommand)
    {
        // BUGBUG: Apparently, JavaScript makes life simpler for scripts by treating null
        // strings as empty strings, but apparently it does not do that for calls into Java.
        // It seems we can, however, return null on our way *out* of Java, and rely on that
        // being converted back into an empty string. -JP
        
        if (sCommand == null || sCommand.length() == 0)
            return null;
        
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return sBusyLoading;
        
        EnableDebugger(true);
        
        if (dev == null) {
            sDebugCommand = sCommand;
            return LoadDevice();
        }
        
        return dev.Debug(sCommand);
    }
    

    /*  BeginScriptCommand()
     *
     *  JavaScript interface to prepare the Script Manager for commands.  Since a prerequisite for
     *  passing a command to the Script Manager is having it loaded, and since a prerequisite for
     *  that is having the Device class loaded as well, we call LoadDevice.  Don't worry, LoadDevice
     *  will only load stuff that hasn't been loaded yet.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String BeginScriptCommand()
    {
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return sBusyLoading;
        
        if (dev == null)
            return LoadDevice();
    
        return dev.Script("begin");
    }
    

    /*  SendScriptCommand(sCommand)
     *
     *  JavaScript interface to pass a command to the Script Manager.  Callers should always
     *  call BeginScriptCommand() first.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String SendScriptCommand(String sCommand)
    {
        // BUGBUG: Apparently, JavaScript makes life simpler for scripts by treating null
        // strings as empty strings, but apparently it does not do that for calls into Java.
        // It seems we can, however, return null on our way *out* of Java, and rely on that
        // being converted back into an empty string. -JP
        
        if (sCommand == null || sCommand.length() == 0)
            return null;
        
        if (cFileLoading > 0 || iState >= EMULSTATE_DESTROY)
            return sBusyLoading;
        
        if (dev == null) {
            sScriptCommand = sCommand;
            return LoadDevice();
        }
        
        String s = dev.Script(sCommand);
        emulcon.DisplayConsoleMessage("!" + sCommand + ": " + s);
        return s;
    }
    

    /*  EndScriptCommand()
     *
     *  JavaScript interface to end a sequence of commands to the Script Manager.
     *
     *  BUGBUG: Should we make all JavaScript interfaces synchronized, now that Activate() and
     *  SetBacklight() have to be synchronized as well?  I haven't done an analysis to see if
     *  there's any risk of deadlocking if we did, but we might be risking other problems.... -JP
     */
    public String EndScriptCommand()
    {
        if (dev == null || iState >= EMULSTATE_DESTROY)
            return null;
        
        return dev.Script("end");
    }


	/*  LoadDevice()
     *
     *  Loads the Device class and creates a device object.
     *
     *  Called by LoadFile(sTitle, sFile) and SendDebuggerCommand(sCommand), both JavaScript
     *  interfaces.  Can also be called by PressButton(BUTTON_POWER), another JavaScript interface,
     *  if the device has never been powered up before.
     *
     *  This function needs to do as little work as possible on the caller's thread (typically
     *  the web browser's main thread), because the loading process can take some time, especially
     *  over a slow connection while additional classes and data files are accessed, during which
     *  time the web browser may appear hung.  It's a shame that applets have to work so hard
     *  just to meet reasonable expectations for responsiveness.  You'd think the programming model
     *  would/could be simpler somehow.... -JP
	 */
    String LoadDevice()
    {
        if (dev != null)
            return SendDeviceCommand(false);
        
        if (sDebugCommand == null)
            DisplayEmulatorMessage(sPleaseWait, true);
        
        Thread threadLoad = new Thread(this, "LoaderThread");
        threadLoad.setPriority(Thread.MIN_PRIORITY);
        threadLoad.start();
        
        return sPleaseWait;
    }


    public void run()
    {
        if (InitDevice() == null && dev != null)
            SendDeviceCommand(true);
    }


	/*  InitDevice()
     *
     *  Loads the Device class and creates a device object.
     *
     *  Since this function is always called out-of-context (by the "LoaderThread" created by LoadDevice)
     *  in order to keep the browser responsive, it must be synchronized with the applet's destroy() handler,
     *  otherwise the applet could enter destroy() while InitDevice() is still in progress, and the applet
     *  would think that it had successfully destroyed the "BgndThread", "CPUThread", etc.  But then InitDevice()
     *  would finish creating them, and there would be no getting rid of them until all instances of the applet
     *  were closed and the VM was terminated.
	 */
    synchronized String InitDevice()
    {
        String s = null;
        
        if (dev == null && iState < EMULSTATE_DESTROY) {
            try {
                Class classDevice = Class.forName("Device");
                DeviceInterface dev = (DeviceInterface)classDevice.newInstance();
                dev.Init(this, sInit, silk, cxEmul, cyEmul);
                this.dev = dev;         // Device fully initialized, ready to be exposed
            }
            catch (Throwable e) {       // eg, ClassNotFoundException, InstantiationException, IllegalAccessException
                e.printStackTrace();
                s = DisplayEmulatorMessage("Unable to start device: " + e.getMessage(), true);
            }      
        }
        return s;
    }


    /*  SendDeviceCommand(fAsync)
     *
     *  BUGBUG: This function not being synchronized bothers me, especially with the cFileLoading increment.
     *  I'm not sure if I deliberately left it this way for other reasons when I originally wrote it (to avoid
     *  some deadlock), or if the omission was an oversight.  Investigate.  -JP
     */
    String SendDeviceCommand(boolean fAsync)
    {
        if (sDebugCommand != null) {
            String s = sDebugCommand;   // we have to nullify sDebugCommand before calling dev.Debug(),
            sDebugCommand = null;       // because the command may call back into LoadFile, and we'd blow our stack
            s = SendDebuggerCommand(s);
            if (fAsync)
                emulcon.DisplayConsoleMessage(s);
            return s;
        }
        
        if (sScriptCommand != null) {
            String s = sScriptCommand;
            sScriptCommand = null;
            return SendScriptCommand(s);
        }
            
        // If Device.LoadFile() returns false, then it failed to spin up the BgndThread that does our
        // file loading for us, so we need to make the final Emulator.NotifyDeviceLoad() call that it's not going to make

        cFileLoading++;
        if (!dev.LoadFile(sFileName))
            return NotifyDeviceLoad(sBusyLoading, true);
            
        return DisplayEmulatorMessage("Loading " + sFileTitle, fAsync);
    }


    /*  DisplayEmulatorMessage(s, fAsync)
     *
     *  Similar to DisplayConsoleMessage, but displays messages inside the emulator window.
     *  Generally, these messages also get passed back synchronously to JavaScript callers, but if
     *  the message was generated asynchronously, then we have to queue it up via DisplayConsoleMessage
     *  if we want it to ALSO show up there.
     */
    private String DisplayEmulatorMessage(String s, boolean fAsync)
    {
        sEmulMessage = s;
        
        repaint();
        
        if (fAsync)
            emulcon.DisplayConsoleMessage(s);
        
        return s;
    }
    

    /*  NotifyDeviceLoad(s, fComplete)
     *
     *  Called by Device.NotifyLoad() when it's been notified that the requested file was loaded
     *  (or that it failed to load, whichever).  It can be called multiple times by the Device class,
     *  but the FINAL time, and only the final time, must be when fComplete is true, so that we know
     *  when it's OK for the Device to be reloaded.
     */
    public synchronized String NotifyDeviceLoad(String s, boolean fComplete)
    {
        if (fComplete)
            cFileLoading--;
        
        if (s == null)
            return null;
        
        return DisplayEmulatorMessage(s, true);
    }
    

    /*  CreateDialog()
     */
    public synchronized void CreateDialog(int iValue)
    {
        if (emuldlg == null)
            emuldlg = new EmulatorDialog(this, iValue);
        else
            emuldlg.SetForeground();
    }
    

    /*  NotifyDialogDispose()
     *
     *  Called by EmulatorDialog when the dialog has been disposed.
     */
    public synchronized void NotifyDialogDispose()
    {
        emuldlg = null;
    }
    

	/*  External interface, used by design tools to show properties of an applet
	 */
    public String[][] getParameterInfo()
    {
        String[][] info =
        {
            { sProfileParam,            "String",       "Name of profile" },
            { sProfileDirParam,         "String",       "Name of profile dir" },
            { sProfileFileParam,        "String",       "Name of profile file" },
            { sBackgroundParam,         "String",       "Background color" },
            { sBacklightParam,          "String",       "Backlight color" },
            { sAutoStartParam,          "String",       "Auto-start setting" },
            { sMsgLevelParam,           "0-3",          "Debug message level" },
        };
        return info;
    }
    
    
	/*  StringToColor(sValue)
     *
     *  Converts a string formatted as "rrggbb" to an awt.Color object
	 */
	Color StringToColor(String sValue)
	{
        int i = 0;
        if (sValue.charAt(0) == '0' && sValue.charAt(1) == 'x')
            i = 2;
		int r = Integer.parseInt(sValue.substring(i+0,i+2), 16);
		int g = Integer.parseInt(sValue.substring(i+2,i+4), 16);
		int b = Integer.parseInt(sValue.substring(i+4,i+6), 16);
		return new Color(r, g, b);
	}


	/*  GetPageParams()
     *
     *  Reads parameters from the applet's HTML host and sets applet properties
	 */
    void GetPageParams(String s1, String s2)
    {
        String sValue;
        
        sInit = getCodeBase().toString();
        
	    // Read the <PARAM NAME="Profile" VALUE="Pilot"> tag from the applet's HTML host
	    // Read the <PARAM NAME="ProfileDir" VALUE="pilot"> tag from the applet's HTML host

        SetProfile(getParameter(sProfileParam), getParameter(sProfileDirParam), getParameter(sProfileFileParam));
        
        // BUGBUG: All our profiles use an externally supplied silk screen image, which in turn
        // requires that the size of the applet window be reduced by the height of that image.  I
        // require that the silk screen image be the same width as cxEmul, but I assume that its
        // height is 64.  This should either be specified as another applet parameter, or ascertained
        // from the profile or the image itself. -JP
            
        cxSilk = cxEmul;
        cySilk = 64;
        cyEmul -= cySilk;
            
        sValue = getParameter(sBackgroundParam);
        if (sValue == null)
            sValue = sBackgroundDefault;
        
        clrBackground = StringToColor(sValue);
        
        sValue = getParameter(sBacklightParam);
        if (sValue == null)
            sValue = sBacklightDefault;
        
        clrBacklight = StringToColor(sValue);
        
        fAutoStart = GetBooleanParam(sAutoStartParam, sAutoStartDefault);
        
        String sMsgLevel = getParameter(sMsgLevelParam);
        if (sMsgLevel != null)
            fMsgLevel = Integer.parseInt(sMsgLevel, 10);
    }
    
    
    boolean GetBooleanParam(String sParam, String sParamDefault)
    {
        String sBoolean = getParameter(sParam);
        if (sBoolean == null)
            sBoolean = sParamDefault;
        return sBoolean.equalsIgnoreCase(sTrue);
    }
    
    
    static void DisplayMessage(String s)
    {
        if (emulcon == null)
            System.out.println(s);
        else
            emulcon.DisplayConsoleMessage(s);
    }
    

    static void DisplayErrorMessage(String s)
    {
        if (fMsgLevel >= MSGLEVEL_ERROR)
            DisplayMessage(s);
    }
    

    static void DisplayWarningMessage(String s)
    {
        if (fMsgLevel >= MSGLEVEL_WARNING)
            DisplayMessage(s);
    }
    

    static void DisplayVerboseMessage(String s)
    {
        if (fMsgLevel >= MSGLEVEL_VERBOSE)
            DisplayMessage(s);
    }
    

    /** @conditional (DEBUG) */
    static void DisplayDebugMessage_Debug(String s)
    {
        System.out.println(s);
    }
    

    /** @conditional (DEBUG) */
    static void DisplayMessage_Debug(String s)
    {
        DisplayMessage(s);
    }
    

    /** @conditional (DEBUG) */
    static void DisplayErrorMessage_Debug(String s)
    {
        if (fMsgLevel >= MSGLEVEL_ERROR)
            DisplayMessage(s);
    }
    

    /** @conditional (DEBUG) */
    static void DisplayWarningMessage_Debug(String s)
    {
        if (fMsgLevel >= MSGLEVEL_WARNING)
            DisplayMessage(s);
    }
    

    /** @conditional (DEBUG) */
    static void DisplayVerboseMessage_Debug(String s)
    {
        if (fMsgLevel >= MSGLEVEL_VERBOSE)
            DisplayMessage(s);
    }
    

    /** @conditional (DEBUG) */
    static void Assert_Debug(boolean f, String s)
    {
        // BUGBUG: If the DEBUG version of the emulator is run off a web server in unpackaged
        // (and therefore unsigned) form, the following exception may be thrown by Debug.assert:
        //
        //  "com/ms/wfc/util/Debug has been marked as nonpublic to untrusted code."
        //
        // Uh, ok, whatever.  Not sure why that would be expected, or what I would be expected
        // to do about it.  It was first occurring inside CPUDefs.InitEAModeIndexArray(), just
        // because that's where the first asserts were encountered.  I'm dynamically calling the
        // Debug class now, so maybe that's good enough. -JP
        
        if (!f) {
            DisplayMessage(s);
            Debug.assert(f, s);
        }
    }


    /** This is an attempt to pacify VMs that look for a "[applet]$COMClassObject" class.
     *  I don't know which VMs do this (probably just Microsoft's), because mine don't do it,
     *  but according to my server logs, lots of other people's VMs do.
     * 
     *  Ditto for the "EmulatorBeanInfo" class.  However, the lack of a $ in that class name
     *  means it needs to be implemented as an "outer" class, not an "inner" class.
     * 
     *  I don't know what the COMClassObject class is supposed to look like, so hopefully this
     *  won't blow anything up.  :-)  -JP
     */
    public abstract class COMClassObject
    {
    }
        
}
