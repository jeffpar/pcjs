/*  Device.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This manages the Device as a whole for Emulator.  Specifically, it manages
 *  the device's screen, silk-screen (optional), memory, and CPU.  The CPU in turn
 *  manages its own resources (ie, flags, registers, etc).
 */


import java.awt.*;


class Device implements DeviceInterface
{
    Emulator emul;
    CPUThread cpu;
    DeviceScreen screen;
    DeviceSilkScreen silk;
    BgndThread bgndThread;
    DebuggerInterface debugger;
    ScriptInterface scriptManager;
    
    boolean fPower;
    
    
    /*  Init(emul, s, silk, cxScreen, cyScreen)
     *
     *  Called by Emulator.InitDevice(), after lazily loading this class.  A consequence
     *  of lazy loading is that we can't have custom constructors, which is why this function
     *  exists.
     */
    public void Init(Emulator emul, String s, DeviceSilkScreen silk, int cxScreen, int cyScreen)
    {
        this.emul = emul;
        
        // I used to create the DeviceSilkScreen as part of creating the Device, but
        // since the device object is lazily created now, whereas the silk-screen object
        // is created immediately, I have to pass in a previously created DeviceSilkScreen.
        
        this.silk = silk;
        
        screen = new DeviceScreen(emul, cxScreen, cyScreen);
        
        // At this point, the debugger, if any, is not really ready for use yet, because it
        // needs access to the CPU and memory subsystems, as well as some top-level Emulator services.
        // So, when CPUThread initializes, it'll call Debugger.Init(emul, cpu), and *then* we're ready.

        cpu = new CPUThread(emul, s, screen);
        
        LoadDebugger();
    }
    
    
    /*  Destroy()
     *
     *  Called by Emulator.destroy()
     */
    public synchronized void Destroy()
    {
        if (bgndThread != null) {
            bgndThread.Destroy();
            bgndThread = null;
        }
        
        if (scriptManager != null) {
            scriptManager.Destroy();
            scriptManager = null;
        }

        if (debugger != null) {
            debugger.Destroy();
            debugger = null;
        }
        
        cpu.Destroy();
        
        screen.Destroy();
    }
    
    
    /*  Start()
     *
     *  Start the device (ie, create thread(s), begin execution)
     */
    public synchronized void Start()
    {
        cpu.Start();
    }


    /*  Stop()
     *
     *  Like Power(false), but this also destroy any threads running on behalf of the Device.
     *  Stop/Start calls are therefore more expensive than Power calls.  All context (registers,
     *  memory, etc) are still saved (BUGBUG: although maybe they shouldn't be, if they're consuming
     *  very much memory -JP).
     */
    public synchronized void Stop()
    {
        cpu.Stop();
    }


    /*  Power(fOn)
     *
     *  Turn power on or off.
     */
    public synchronized boolean Power(boolean fOn)
    {
        if (!fOn) {
            screen.Enable(false);
            cpu.Freeze(false);
            fPower = false;
        }
        else if (cpu.Thaw()) {
            fPower = true;
            screen.Enable(true);
        }
        
        return fPower;
    }


    /*  Button(id, fDown)
     */
    public synchronized void Button(int id, boolean fDown)
    {
        if (cpu.hwregs != null)
            cpu.hwregs.UpdateButton(id, fDown);
    }


    /*  Freeze(fOnStop)
     */
    public synchronized boolean Freeze(boolean fOnStop)
    {
        return cpu.Freeze(fOnStop);
    }


    /*  Thaw()
     */
    public synchronized boolean Thaw()
    {
        return cpu.Thaw();
    }


    /*  LoadFile(sFile)
     *
     *  Called by Emulator.LoadFile()
     */
    public synchronized boolean LoadFile(String sFile)
    {
        // Lazily create the background thread inside this synchronized function
        if (bgndThread == null)
            bgndThread = new BgndThread(emul, this);
        
        if (!bgndThread.IsAvailable()) {
            bgndThread.MessageBeep();
            return false;
        }
        
        if (!bgndThread.LoadFile(sFile))
            return false;
        
        // If we don't deactivate the emulator window, then the status message that SendDeviceCmd
        // wants to display won't show up.

        emul.Activate(false);
        return true;
    }


    /*  Launch(file)
     *
     *  Called by NotifyLoad(), which will then Activate() the Device as soon as we return.
     *
     *  Since Launch() is called in the context of BgndThread's background thread (unlike
     *  most of our other services, which are called in the context of the main browser thread),
     *  we synchronize all our public services, primarily to prevent the user attempting to start
     *  the CPU before we've finished initializing it.
     */
    public synchronized boolean Launch(FileStream file)
    {
        boolean fSuccess = true;

        // Although we don't call Launch() without first powering off the device,
        // CPUThread has other internal state that needs to be reset as well.
        cpu.Reset();

        // Now reset all the registers and flags.  CPUFlags needs a reference to the CPUMem
        // object so that it has a way to generate certain exceptions if the flags get abused.
        cpu.InitRegs((CPUMem)cpu);

        if (debugger != null)
            debugger.Reset(file);

        if (scriptManager != null)
            scriptManager.Init(this);

        // This is where we finally initialize memory with the contents of the requested file....
        try {
	        cpu.pc = cpu.InitMem(this, file);
        }
        catch (RuntimeException e) {
            Emulator.DisplayMessage(e.toString());
            fSuccess = false;
        }

        if (fSuccess) {
            
            FileStream fileRAM = file;
            
            // If the file we're launching was part of an archive (eg, ZIP file), let's re-open it
            // and specify that we want the RAM file, if any, that might also be present inside the archive.
                
            if (fileRAM.IsArchive())
                fileRAM.Open(file.GetFullName(), FileStream.FILETYPE_RAM, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_SEARCHZIP);
            else
                fileRAM = new FileStream(file.GetFullName(), FileStream.FILETYPE_RAM, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_FORCEZIP);
                
            if (fileRAM.GetStatus() == FileStream.FILESTAT_OK) {
                if (!cpu.RestoreRegs(fileRAM) || !cpu.RestoreMem(fileRAM))
                    fSuccess = false;
                else if (cpu.hwregs != null && !cpu.hwregs.Restore(fileRAM))
                    fSuccess = false;
            }
            fileRAM.Close();
        }

        // Finally, give the debugger a chance to display status if it wants....
        if (debugger != null)
            debugger.Status();
        
        return fSuccess;
    }


    /*  NotifyLoad(sFile)
     *
     *  This serves as a callback for BgndThread.LoadFile().
     *
     *  WARNING: This function has to be called by BgndThread, regardless of success or failure,
     *  and we in turn have to make a final call to Emulator.NotifyDeviceLoad(), so that additional file processing
     *  can occur when we're done.
     */
    public synchronized void NotifyLoad(String sFile)
    {
        // We deactivate sooner now, in LoadFile().  See explanation above.
        //
        // emul.Activate(false);
        
        FileStream file = new FileStream(sFile, FileStream.FILETYPE_BINARY, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_SEARCHZIP);
        
        if (file.GetStatus() != FileStream.FILESTAT_OK) {
            
            // If we just looked inside a ZIP, look outside, otherwise look inside

            if (file.GetType() == FileStream.FILETYPE_ZIP)
                file.Open(sFile, FileStream.FILETYPE_ROM, FileStream.FILEOPEN_READ);
            else
                file.Open(sFile, FileStream.FILETYPE_ROM, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_FORCEZIP);
        }
        
        if (file.GetStatus() != FileStream.FILESTAT_OK) {
            
            emul.NotifyDeviceLoad(file.GetStatusString(), true);
        }
        else {        
            // BUGBUG: All this does is blow away the "friendly" msg that the Emulator displayed after
            // calling Device.LoadFile, with a status message that we probably don't need.  Can it for now. -JP
            //
            // emul.NotifyDeviceLoad(file.GetStatus(), false);
        
            if (!Launch(file)) {
                emul.NotifyDeviceLoad("Error launching file", true);  // BUGBUG: A little more feedback? -JP
                cpu.Destroy();
            }
            else {
                // There's no message we want to display right now, because everything (theoretically) worked,
                // and the emulator will start display "stuff" as soon as we turn its power on anyway, but we still
                // need to make that final "complete" call to Emulator.NotifyDeviceLoad.
                emul.NotifyDeviceLoad(null, true);
                emul.Activate(true);
            }
        }
        file.Close();
    }
    
    
    /*  ResetScreen(lcdregs)
     *
     *  Called by the Emulator class for user-initiated screen changes (eg, SetBacklight()), and by the
     *  HWLCD classes for code-initiated screen changes (eg, SetByte() commands that enable or disable the
     *  screen hardware).  The latter calls also pass a reference to themselves (lcdregs), so that the
     *  DeviceScreen class knows which HWLCD object to talk to get further information about the current
     *  state of the screen.
     */
    public void ResetScreen(HWLCDRegs lcdregs)
    {
        // Don't bother calling screen.Reset() if the device isn't powered, because when power is applied
        // later, we will cause the screen to be reset at that time.  However, if we're being called by one
        // of the HWLCD classes, then lcdregs always needs to be passed through.
        
        if (fPower || lcdregs != null)
            screen.Reset(lcdregs);
    }


    /*  DrawScreen()
     *
     *  Called by Emulator.Paint()
     */
    public void DrawScreen(Graphics g)
    {
        screen.Draw(g);
    }


    /*  LoadDebugger()
     *
     *  Called by Device.Init(), and by Emulator.EnableDebugger() when the debugger is enabled late
     *
     *  BUGBUG: Synchronize? -JP
     */
    public void LoadDebugger()
    {
        if (debugger != null)
            return;
        
        // Only load the debugger if a JavaScript debugger is present and enabled;  otherwise
        // it makes all users of the applet pay for the overhead of loading the debugger, even if
        // they don't care about it, or even have access to it.

        if (Emulator.fDebugger) {
            try {
                Class classDebugger = Class.forName("Debugger");
                debugger = (DebuggerInterface)classDebugger.newInstance();
            }
            catch (Throwable e) {}      // eg, ClassNotFoundException, InstantiationException, IllegalAccessException
        }
        
        // BUGBUG: If the normal debugger is not present, 'debugger' is null, and the
        // applet is still supposed to run fine, because all calls to the debugger must be
        // preceded by a check for 'debugger == null'.  HOWEVER, for some reason (perhaps
        // specific to the Microsoft VM -- I haven't investigated this issue on other VMs),
        // when this fails to initialize 'debugger' with a valid DebuggerInterface object,
        // the entire applet starts running in "molasses mode" (my guess: JIT disabled itself?)
        
        // So I have hacked around this problem by always including a dummy debugger class
        // named 'DebuggerStubs', which we load whenever the normal debugger is not available,
        // and then IMMEDIATELY set 'debugger' back to null.  Yes, sounds crazy, but it WORKS! -JP

        if (debugger == null) {
            try {
                Class classDebugger = Class.forName("DebuggerStubs");
                debugger = (DebuggerInterface)classDebugger.newInstance();
            }
            catch (Throwable e) {}      // eg, ClassNotFoundException, InstantiationException, IllegalAccessException
            debugger = null;
        }
        
        if (debugger != null && cpu != null) {
            
            // Do what the CPUThread constructor would have done, had the debugger been
            // loaded earlier.
            //
            // NOTE: to be safe, we don't record the Debugger object inside the CPUThread
            // object until the Debugger object has been fully initialized.
            
            debugger.Init(this);
            cpu.debugger = debugger;
        }
    }
    

    /*  Debug(sCommand)
     *
     *  Called by Emulator.SendDebugCommand(), via Emulator.SendDeviceCommand(), for commands intended for
     *  the debugger.
     */
    public synchronized String Debug(String sCommand)
    {
        if (debugger != null)
            return debugger.ParseCommand(sCommand);
        
        return null;
    }


    /*  LoadScriptManager()
     *
     *  Called by Device.Script() if the ScriptManager hasn't been loaded yet.
     *
     *  BUGBUG: Synchronize? -JP
     */
    public void LoadScriptManager()
    {
        if (scriptManager != null)
            return;
        
        try {
            Class classScriptManager = Class.forName("ScriptManager");
            scriptManager = (ScriptInterface)classScriptManager.newInstance();
        }
        catch (Throwable e) {}      // eg, ClassNotFoundException, InstantiationException, IllegalAccessException
        
        if (scriptManager != null) {
            scriptManager.Init(this);
        }
    }
    

    /*  Script(sCommand)
     *
     *  Called by Emulator.SendScriptCommand(), and also by the debugger for commands it doesn't recognize.
     */
    public synchronized String Script(String sCommand)
    {
        if (scriptManager == null)
            LoadScriptManager();
        
        if (scriptManager != null)
            return scriptManager.ParseCommand(sCommand);
        
        return "no script manager";
    }

}
