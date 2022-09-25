/*  CPUThread.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This manages the CPUThread's resources (flags and registers) and operations
 *  (instruction execution).
 */


import java.util.*;                     // for Date class


class CPUThread extends CPUOps implements Runnable
{
    private Emulator emul;
    private DeviceScreen screen;
    private Thread threadCPU;
    private VarFuncInterface varFuncInject;
    private VarFuncInterface varFuncReturn;

    protected int cmsBlocked;           // total time CPU has been blocked from running, if any (in ms)
    protected long msLastPageReq;       // # of ms since last paging request completed (used for throttling background paging)
    protected static final int OPCODES_PER_ITERATION = 10000;
    
    private static final int[][] aaiURLApproved = {
        // "http://www.doublebit.com/"
        {0x33e6c39, 0x112d9a4, 0x3f0f075, 0x391b30d, 0x3186fe9, 0x8b12da, 0xc},
        // "http://www.doublebit.com:"
        {0x33e6c39, 0x112d9a4, 0x3f0f075, 0x391b30d, 0x3186fe9, 0x8b12da, 0x17},
        // "http://doublebit.com/"
        {0x33e6c39, 0x112d991, 0x391b30d, 0x3186fe9, 0x8b12da, 0xc},
        // "http://doublebit.com:"
        {0x33e6c39, 0x112d991, 0x391b30d, 0x3186fe9, 0x8b12da, 0x17},
        // "http://www.pimcity.com/"
        {0x33e6c39, 0x112d9a4, 0x3f0f081, 0x3496066, 0x3cd8d54, 0x9eb64},
        // "http://pimcity.com/"
        {0x33e6c39, 0x112d99d, 0x3496066, 0x3cd8d54, 0x9eb64},
    };

    private static final int[] aiURLViolation = {
        // "http://www.doublebit.com/appletviolation/"
        0x33e6c39, 0x112d9a4, 0x3f0f075, 0x391b30d, 0x3186fe9, 0x8b12da, 0x96b2d9, 0x36c034f, 0x349a5ba, 0x3cb93bb, 0xc,
    };


    /*  CPUThread(emul, s, screen)
     *
     *  After creating a DeviceScreen object and loading the debugger (if any),
     *  the Device class uses this constructor to create the CPUThread object.
     */
    CPUThread(Emulator emul, String s, DeviceScreen screen)
    {
        this.emul = emul;
        this.screen = screen;
        ValidateURL(s);
    }


    /*  Destroy()
     *
     *  Called by Device.Destroy() to stop (ie, destroy) the CPU thread, as well as
     *  release any memory allocated by Device.Launch().
     */
    public void Destroy()
    {
        Stop();
	    DestroyMem();
    }


    /*  ValidateURL()
     */
    public void ValidateURL(String sURL)
    {
        if (sURL.startsWith("file:")) {
            fCPU |= CPU_VALID;
            return;
        }
        
        int iChar;
        int iChunk = 0;
        int cChars = sURL.length();
        int[] aiChunks = new int[aiURLViolation.length];
        
        for (iChar=0; iChar < cChars; iChar++) {
            
            aiChunks[iChunk] = aiChunks[iChunk] * 0x5c + (sURL.charAt(iChar) - 0x23);
            
            // After processing each character, we need to see if we match any of the arrays in aaiURLApproved
            
            for (int iArray=0; iArray < aaiURLApproved.length; iArray++) {
                int i;
                for (i=1; i <= iChunk && i < aaiURLApproved[iArray].length; i++) {
                    if (aaiURLApproved[iArray][i] != aiChunks[i])
                        break;
                }
                if (i == aaiURLApproved[iArray].length) {
                    fCPU |= CPU_VALID;
                    return;
                }
            }
                
            if ((iChar % 4) == 3 || iChar == cChars-1) {
                if (++iChunk >= aiChunks.length)
                    break;
            }
        }

        // If we're still here, the URL doesn't appear to be valid, so let's construct a URL to our
        // own web site, to which we append a modified version of their URL, in the hopes that we can trap
        // the offending URL in our web site's log file.

        iChar = 0;
        byte[] abChars = new byte[aiURLViolation.length*4];

        for (iChunk=0; iChunk < aiURLViolation.length; iChunk++) {
            int iByte;
            int iValue = aiURLViolation[iChunk];
            for (iByte=3; iByte >= 0 && iValue != 0; iByte--) {
                abChars[iChar+iByte] = (byte)((iValue % 0x5c) + 0x23);
                iValue /= 0x5c;
            }
            if (iByte++ >= 0) {
                // iByte, after the post-increment will be 3, 2 or 1, and so 4-iByte will be 1, 2, or 3
                for (int i=4-iByte; i>0; i--) {
                    abChars[iChar] = abChars[iChar+iByte];
                    iChar++;
                }
                break;
            }
            iChar += 4;
        }

        String sMyURL = new String(abChars, 0, iChar);
        sMyURL = sMyURL + sURL;

        FileStream f = new FileStream(sMyURL, FileStream.FILETYPE_NONE, FileStream.FILEOPEN_READ);
        f.Close();
    }


    /*  Start()
     *
     *  Called by Device.Start() to start the CPU thread.  NOTE: Device does not use this
     *  entry point directly;  it uses only Thaw(), along with Freeze(), and it is currrently
     *  Thaw() that is responsible for calling Start() as needed.  So even though this function
     *  is public, it's only current use is internal.
     */
    public synchronized boolean Start()
    {
        if ((fCPU & (CPU_STARTED | CPU_MEMINIT | CPU_VALID)) == (CPU_MEMINIT | CPU_VALID)) {
            threadCPU = new Thread(this, "CPUThread");
            threadCPU.start();
            fCPU |= CPU_STARTED;
        }
        return ((fCPU & CPU_STARTED) != 0);
    }


    /*  Stop()
     *
     *  Called by Device.Stop() to stop/destroy the CPU thread, if one has been started.
     */
    public synchronized void Stop()
    {
        if ((fCPU & CPU_STARTED) != 0) {
            
            // Die, CPU thread, die!
            fCPU |= CPU_KILLED;
            
            // If the thread *is* blocked, then it should be blocked in either OSEventMgr or our
            // own WaitResume function;  if the latter, this should wake it up.
            notify();
            
            // We now depend on CPU thread killing itself and clearing both CPU_STARTED and CPU_KILLED
            threadCPU = null;
        }
    }


    /*  Reset()
     *
     *  Called by Device.Launch() to properly reset the CPU's internal state.
     */
    public void Reset()
    {
        Freeze(false);
        cmsBlocked = 0;
        varFuncInject = null;
        varFuncReturn = null;
        fCPU &= ~CPU_INJECTING;         // BUGBUG: If this is actually useful, then are the other bits we should reset? (eg, CPU_RESETFLAGS) -JP
    }
    

    /*  Freeze(fOnStop)
     *
     *  Called by Device.Power(false) and Device.Freeze() to insure the CPU isn't executing
     *  anything.  Also called by ScriptManager.ParseCommand() in response to a script "begin"
     *  to freeze on the next STOP, to try to insure that any CPU requests made by the script
     *  occur at a "safe" point.
     *
     *  Returns true if the CPU was successfully frozen before returning control to the caller.
     */
    public synchronized boolean Freeze(boolean fOnStop)
    {
        if ((fCPU & CPU_STARTED) == 0) {
            fCPU |= CPU_FROZEN;
            return true;
        }
        
        if (fOnStop) {
            
            // If we're already BOTH frozen and stopped, there's nothing to do
            if ((fCPU & (CPU_FROZEN | CPU_STOPPED)) == (CPU_FROZEN | CPU_STOPPED))
                return true;
            
            // If the debugger's in charge, there's nothing we can do here
            if ((fCPU & CPU_TRACING) != 0)
                return false;

            // If we're stopped but not frozen, then we need to set CPU_FREEZEONSTOP, and wait
            // If we're frozen but not stopped, then we need to set CPU_FREEZEONSTOP, thaw, and wait
            fCPU |= CPU_FREEZEONSTOP;
            if ((fCPU & CPU_FROZEN) != 0) {
                fCPU &= ~CPU_FROZEN;// can't use Thaw() actually, because it would undo CPU_FREEZEONSTOP too...
                notify();
            }
            
            if ((fCPU & (CPU_FROZEN | CPU_STOPPED)) != (CPU_FROZEN | CPU_STOPPED)) {
                try {
                    wait(500);      // BUGBUG: What if a spurious notify() woke us up?  We'd like to wait the remainder of the specified duration.... -JP
                } catch (InterruptedException e) {};
            }
            
            return (fCPU & (CPU_FROZEN | CPU_STOPPED)) == (CPU_FROZEN | CPU_STOPPED);
        }
        
        // If we're already frozen, there's nothing to do
        if ((fCPU & CPU_FROZEN) != 0)
            return true;
        
        // If the debugger's in charge, there's nothing we can do here
        if ((fCPU & CPU_TRACING) != 0)
            return false;

        fCPU |= CPU_FROZEN;
        
        while ((fCPU & CPU_WAITING) == 0) {
            try {
                wait();
            } catch (InterruptedException e) {return false;};
        }
        
        return true;
    }
    

    /*  Thaw()
     *
     *  Called by Device.Power(true).  This service, along with Freeze(), is primarily how the CPU is
     *  controlled externally.
     *
     *  Returns true if the CPU was successfully started.
     */
    public synchronized boolean Thaw()
    {
        if (!Start())
            return false;
        fCPU &= ~(CPU_FROZEN | CPU_FREEZEONSTOP);
        notify();
        return true;
    }


#if SUSPEND_RESUME
    /*  Suspend()
     *
     *  Called by functions like UpdateInterrupts() when they detect a change in the suspended state.
     */
    public synchronized void Suspend()
    {
        fCPU |= CPU_SUSPENDED;
        
        while ((fCPU & CPU_WAITING) == 0) {
            try {
                wait();
            } catch (InterruptedException e) {return false;};
        }
    }


    /*  Resume()
     *
     *  Called by functions like UpdateInterrupts() when they detect a change in the suspended state.
     */
    public synchronized void Resume()
    {
        fCPU &= ~CPU_SUSPENDED;
        notify();
    }
#endif
    

    /*  BeginPaging(addr, addrBank, fFgnd)
     *
     *  Called by CPUMem to inform us that paging activity is beginning.
     */
    public void BeginPaging(int addr, int addrBank, boolean fFgnd)
    {
        Emulator.DisplayWarningMessage_Debug("PageBank(0x" + Integer.toHexString(addr) + "): " + (fFgnd? "CPU" : "background") + " thread paging bank 0x" + Integer.toHexString(addrBank));
        
        fCPU |= CPU_PAGING;
    }


    /*  EndPaging(fFgnd)
     *
     *  Called by CPUMem to inform us that paging activity is complete.
     */
    public void EndPaging(boolean fFgnd)
    {
        // We add a little something extra to the time, to prevent background paging from
        // kicking in until normal paging activity has been quiescent for a bit.
        
        // BUGBUG: We might also want to tune ourselves to the amount of time it takes the CPU
        // to do a paging operation (ie, elapsed time from BeginPaging() to EndPaging()) -JP
        msLastPageReq = System.currentTimeMillis() + 200;
        
        fCPU &= ~CPU_PAGING;
    }
    
    
    /*  Go() - Debugger service
     *
     *  Called by Debugger.GoCommand().  This is like Thaw(), except that Freeze() and Thaw() are not
     *  for use by the debugger.
     */
    public synchronized boolean Go()
    {
        if (!Start())
            return false;
        fCPU &= ~(CPU_TRACING | CPU_TRACEONSTOP);
        notify();
        return true;
    }


    /*  Halt() - Debugger service
     *
     *  Called by Debugger.HaltCommand().  This is like Freeze(), except that Freeze() and Thaw() are not
     *  for use by the debugger.
     *
     *  CPU_TRACING can also be set by Step(), via Debugger.TraceCommand(), and it can also be set directly
     *  by the debugger, as in the case of Debugger.Reset(), Debugger.Disarm(), etc.
     */
    public synchronized boolean Halt()
    {
        fCPU |= CPU_TRACING;
        fCPU &= ~CPU_STEPPING;

        while ((fCPU & (CPU_STARTED | CPU_WAITING)) == CPU_STARTED) {
            try {
                wait();
            } catch (InterruptedException e) {return false;};
        }
        return true;
    }


    /*  IsHalted() - Debugger service (used internally as well)
     *
     *  Returns true if the CPU is not running, and is frozen and/or suspended and/or traced-but-not-stepped.
     *  It will return true even if the CPU is not yet in the CPU_WAITING state, on the assumption that if all
     *  the halting criteria are in place, then we'll be in the CPU_WAITING state soon enough.
     */
    public boolean IsHalted()
    {
        return ((fCPU & CPU_RUNNING) == 0 && ((fCPU & (CPU_FROZEN | CPU_SUSPENDED)) != 0 || (fCPU & (CPU_TRACING | CPU_STEPPING)) == CPU_TRACING));
    }


    /*  Step(cStep) - Debugger service
     *
     *  Called by Debugger.TraceCommand().  This is like Go(), but with the appropriate tracing flags
     *  and stepping count set, so that the CPU executes only a specific number of instructions.  Furthermore,
     *  it doesn't return until they have all been executed (else it returns false).
     */
    public boolean Step(int cStep)
    {
        fCPU |= (CPU_TRACING | CPU_STEPPING);
        
        this.cStep = cStep;
        
        // BUGBUG: I'm changing WaitStep() to wait ONLY if the step count is 1.  The problem with large counts
        // is that if we're running in the context of a JavaScript thread, then we're blocking the user interface
        // from seeing any debugger output until the step count is exhausted. -JP
            
        return WaitStep(cStep == 1);
    }


    /*  WaitStep(fWait) - Debugger service
     *
     *  Called internally by Step().  This blocks the caller of Step() -- typically a debugger --
     *  until the CPU has finished the requested stepping operation.  Whether or not the CPU also
     *  blocks upon the completion of the stepping operation, via WaitResume(), is dependent on the
     *  appropriate blocking condition being set beforehand.  In the case of Step(), that is dictated
     *  by the setting of the tracing flag, which is not explicitly cleared EXCEPT by Go() and
     *  Halt().
     */
    synchronized boolean WaitStep(boolean fWait)
    {
        notify();
        
        if (!fWait)
            return false;
        
	    while ((fCPU & CPU_STEPPING) != 0) {
            try {
                wait();
            } catch (InterruptedException e) {return false;};
        }
        return true;
    }
    

    /*  QueueInjection(varFunc)
     *
     *  ENTRY
     *      varFunc == function variable describing call to inject
     *
     *  EXIT
     *      true if call was successfully injected or queued, false if queue was full/busy
     */
    public synchronized boolean QueueInjection(VarFuncInterface varFunc)
    {
        // If a call isn't already queued up and the Debugger hasn't stopped the CPU with CPU_TRACING
        // (or it has, but at least it did so on a STOP)...
        if (varFuncInject == null && ((fCPU & CPU_TRACING) == 0 || (fCPU & CPU_STOPPED) != 0)) {
            
            // We can inject the call immediately if we're not still waiting for another call to complete
            // and the CPU is already frozen.
            if (varFuncReturn == null) {
                if ((fCPU & (CPU_FROZEN | CPU_TRACING)) != 0) {
                    varFunc.Call(this, (fCPU & CPU_FROZEN) != 0? OP_STOP_FREEZE : OP_STOP_TRACE);
                    varFuncReturn = varFunc;
                    fCPU |= CPU_INJECTING;
                    if ((fCPU & CPU_FROZEN) != 0) Thaw(); else Go();
                    return true;
                }
            }
            
            // We'll have to queue it up
            varFuncInject = varFunc;
            return true;
        }
        
        // We'll have to abandon it
        return false;
    }
    

    /*  CheckStopEvents()
     *
     *  Called internally by run().  This is where the CPU thread checks for auto-freeze and
     *  call injection requests.
     *
     *  Notice that this function fiddles with CPU_WAITING, which is supposed to only be set/cleared
     *  by WaitResume(), but another criteria we must abide by is that all synchronized methods that set
     *  CPU_FREEZE on exit ALSO insure that CPU_WAITING has been set prior to exit as well.
     */
    synchronized boolean CheckStopEvents()
    {
        if ((fCPU & CPU_TRACEONSTOP) != 0) {
            fCPU &= ~(CPU_TRACEONSTOP | CPU_STEPPING);
            fCPU |= (CPU_TRACING | CPU_WAITING);
        }
        else if ((fCPU & CPU_FREEZEONSTOP) != 0) {
            fCPU &= ~CPU_FREEZEONSTOP;
            fCPU |= (CPU_FROZEN | CPU_WAITING);
        }
        
        if (varFuncReturn != null) {
            fCPU &= ~CPU_INJECTING;
            varFuncReturn.Return(this);
            varFuncReturn = null;
        }
        
        if (varFuncInject != null) {
            pc -= 4;                    // back up to the STOP instruction
            Emulator.Assert_Debug(GetWordEx(pc) == OP_STOP, "CPUThread.CheckStopEvents(): bad injection point");
            varFuncInject.Call(this, (fCPU & CPU_FROZEN) != 0? OP_STOP_FREEZE : OP_STOP_INJECT);
            varFuncReturn = varFuncInject;
            fCPU |= CPU_INJECTING;
            varFuncInject = null;
            fCPU &= ~(CPU_FROZEN | CPU_WAITING);
            return true;                // don't bother sleeping since there's work to do
        }
        
        return false;                   // the injection is done (or there was no injection), so it's OK to sleep now
    }
    
    
    /*  WaitResume()
     *
     *  Called internally by run().  This is how the CPU thread blocks itself when necessary
     *  (via wait).  It also notifies any other thread waiting for the CPU thread to block itself
     *  (via notify), such as a thread sitting in WaitStep() -- as called by Step() -- or a thread
     *  sitting in Freeze() -- as called by Launch().
     */
    synchronized boolean WaitResume()
    {
        // We don't pay attention to the passage of time if the caller arrived with the CPU_FROZEN or CPU_TRACING bits set
        
        long msWait = ((fCPU & (CPU_FROZEN | CPU_TRACING)) != 0? 0 : System.currentTimeMillis());
        
        fCPU |= CPU_WAITING;
        
        notify();
        
		while (IsHalted()) {
			if ((fCPU & CPU_KILLED) != 0)
				break;
            try {
                wait();
            } catch (InterruptedException e) {return false;};
	    }
        
        fCPU &= ~CPU_WAITING;
        
        if (msWait != 0)
            cmsBlocked += (int)(System.currentTimeMillis() - msWait);
        
        return (fCPU & CPU_KILLED) == 0;
    }
    

    /*  WaitYield()
     *
     *  Called internally by run().  This is where the CPU thread yields when necessary.
     */
    void WaitYield()
    {
        long msYield = System.currentTimeMillis();
        
        // If the ROM is paged and we're not already paging something in...
        if (fPagedROM && (fCPU & CPU_PAGING) == 0) {
            
            // Throttle the speed of background paging to no more than one request per 200ms...
            if (msYield - msLastPageReq >= 200) {
                Device dev = (Device)(emul.dev);
                if (!dev.bgndThread.PageFile())
                    msLastPageReq = msYield + 200;
            }
        }
        
        if ((fCPU & CPU_STOPPED) == 0)
            Thread.yield();
        else {
            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {}
        }
        
        cmsBlocked += (int)(System.currentTimeMillis() - msYield);
    }    


    /*  NotifyStepped()
     *
     *  Called internally by run().  This notifies the caller of Step() -- typically the Debugger --
     *  that the requested stepping operation has completed.  It also clears the stepping flag, since
     *  WaitResume() will block on the tracing flag only if the stepping flag is CLEAR.
     */
    synchronized void NotifyStepped()
    {
	    if ((fCPU & CPU_STEPPING) != 0) {
	        fCPU &= ~CPU_STEPPING;
            notify();
	    }
    }
    

    public void run()
    {
        InitModes();
        boolean fYielded = true;
        
        while ((fCPU & CPU_KILLED) == 0) {
            
            // We want to check stop events before checking CPU_FROZEN, because 1) it allows us to honor
            // CPU_FREEZEONSTOP immediately, and 2) if we're returning from a call injection issued during a
            // freeze, it allows us to process varFuncReturn before we freeze again.

            if ((fCPU & CPU_STOPPED) != 0) {
                if (CheckStopEvents())
                    fYielded = true;
            }

            if (IsHalted()) {
                if (!WaitResume())
                    break;
                fYielded = true;
            }
            
            // If we haven't yielded above (in WaitResume or CheckInjection) or below (in CheckBuffer),
            // then see if we should either yield or sleep now.  Furthermore, when we're done yielding, see
            // if any significant conditions have changed, warranting a return to the top of the loop again.
            
            if (!fYielded) {
                WaitYield();
                if ((fCPU & (CPU_KILLED | CPU_FROZEN | CPU_SUSPENDED | CPU_TRACING)) != 0) {
                    fYielded = true;
                    continue;
                }
            }
            
            fYielded = false;
            fCPU &= ~(CPU_STOPPED | CPU_BREAKPOINT | CPU_EXCEPTION);

            if (cmsBlocked != 0 || cOpcodesUncycled != 0 && hwregs != null) {
                hwregs.UpdateTimers(cmsBlocked);
                cmsBlocked = 0;
            }

            if (debugger != null)
                debugger.Arm();
            
            fCPU |= CPU_RUNNING;
            
	        try {
                // If CPU_STEPPING has been set, then cStep has been set to a positive number
                // (Debugger.TraceCommand() insures this), and so we will pass that number on to
                // ExecuteOpcodes(), and it will execute that number of instructions (or less,
                // if some event occurs to stop it).  It will then return the number of instructions
                // remaining, becoming the new cStep.
                //
                // If CPU_STEPPING has NOT been set, we will pass OPCODES_PER_ITERATION to
                // ExecuteOpcodes(), and it will execute that many instructions, or until some event
                // occurs that needs servicing (eg, CPU_CHECKINTS becomes set) or until a breakpoint
                // or exception condition is hit.
                //
                // Finally, if an exception is pending, call its handler.  We deferred calling the
                // exception handler until now so that the debugger (if any) could see the CPU's state
                // first.  CallException() is treated like the execution of a single implicit instruction.
                // The fact that it's performed in lieu of ExecuteOpcodes() is OK, because if the
                // debugger isn't loaded or doesn't care, we'll simply loop back around and continue
                // executing (inside the exception handler).

                if (iPendingException != EXCEPTION_NONE) {
                    
                    CallException(iPendingException);
                    iPendingException = EXCEPTION_NONE;
                    
                    // BUGBUG: Do we want to count the exception generation cycle as an "instruction"?
                    // It might confuse someone who's looking carefully at the CPU instruction counter. -JP
                    cStep--;    
                }
                else if ((fCPU & CPU_CHECKINTS) != 0 && hwregs != null && hwregs.CheckInterrupts(true)) {
                    fYielded = true;
                    
                    // BUGBUG: Do we want to count the interrupt acknowledge cycle as an "instruction"?
                    // It might confuse someone who's looking carefully at the CPU instruction counter. -JP
                    cStep--;
                }
                else {
                    cStep = ExecuteOpcodes((fCPU & CPU_STEPPING) != 0? cStep : OPCODES_PER_ITERATION);
                }
		    }
		    catch (Throwable e) {
                
                fCPU |= CPU_EXCEPTION;
                if (debugger != null)
                    debugger.Fault(pc0, e.toString());
                else {
                    Emulator.DisplayMessage(Integer.toHexString(pc0) + ": " + e.toString());
                    e.printStackTrace();
                }
                
                // Reset the PC back to the beginning of the faulting instruction.
                //
                // BUGBUG: is this always the right thing to do?  Also, this used to be getting done
                // inside GenerateException() as well, but I think that was because GenerateException()
                // didn't always throw a Java exception in response to an emulated exception.  Since
                // it always throws a Java exception now, I've removed this line from that function. -JP
                pc = pc0;
            };
             
            fCPU &= ~CPU_RUNNING;

            if (debugger != null)
                debugger.Disarm();
            
            // If CPU_CHECKINTS correctly indicates that a new interrupt is pending, or we're watching
            // unobtrusively, then we should avoid sleeping; setting fYielded does the trick.
            
            if ((fCPU & CPU_CHECKINTS) != 0 && hwregs != null && hwregs.CheckInterrupts(false) || (fCPU & CPU_WATCHALL) != 0)
                fYielded = true;
            
            // I used to check the LCD only when someone specifically set CPU_CHECKLCD, but since we've
            // already interrupted the normal flow of instruction emulation, we might as well ALWAYS check,
            // provided the CPU hasn't already set fYielded.  CPU_CHECKLCD is still a supported flag,
            // as it doesn't cost us anything, and the LCD emulation code may eventually set it for various
            // reasons (eg, whenever LCDREG_SSA changes).  The debugger tends to always set it whenever it
            // gets control....
            
            if ((fCPU & CPU_CHECKLCD) != 0 || !fYielded) {
                if (screen.CheckBuffer(false))
                    fYielded = true;
                fCPU &= ~CPU_CHECKLCD;
            }
            
    	    if ((fCPU & CPU_STEPPING) != 0 && cStep == 0)
                NotifyStepped();
        }
        
        fCPU &= ~(CPU_STARTED | CPU_KILLED);
        DestroyModes();
    }
    
}
