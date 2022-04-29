/*  BgndThread.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This contains all the processing for potentially lengthy user-initiated I/O requests.
 *  The main goal for this module's existence is to avoid hanging (or giving the appearance
 *  of hanging) the user's browser. 
 */


class BgndThread implements Runnable
{
    static final int BGNDTHREAD_KILL            = -1;
    static final int BGNDTHREAD_NONE            =  0;
    static final int BGNDTHREAD_LOADFILE        =  1;
    static final int BGNDTHREAD_PAGEFILE        =  2;

    
    Emulator emul;
    Device dev;
    Thread threadUser;
    int iEvent = BGNDTHREAD_NONE;

    private String sFileLoad;
    private String sFileRequest;
    

    BgndThread(Emulator emul, Device dev)
    {
        this.emul = emul;
        this.dev = dev;
        threadUser = new Thread(this, "BgndThread");
        threadUser.start();
    }
    

    public synchronized void Destroy()
    {
        iEvent = BGNDTHREAD_KILL;
        notify();
    }
    

    synchronized boolean QueueLoadRequest(String sFile)
    {
        if (IsAvailable() && sFile != null && sFile.length() != 0) {
            sFileLoad = sFile;
            iEvent = BGNDTHREAD_LOADFILE;
            threadUser.setPriority(Thread.NORM_PRIORITY);
            notify();
            return true;
        }
        return false;
    }

    
    synchronized boolean QueuePageRequest()
    {
        if (IsAvailable()) {
            iEvent = BGNDTHREAD_PAGEFILE;
            threadUser.setPriority(Thread.MIN_PRIORITY);
            notify();
            return true;
        }
        return false;
    }
    
    
    synchronized int GetBgndRequest()
    {
        int i;
        
        while (iEvent == BGNDTHREAD_NONE) {
            try {
                wait();
            } catch (InterruptedException e) {return BGNDTHREAD_KILL;};
        }
        
      //System.out.println("BgndThread.GetBgndRequest(): " + iEvent);
        
        i = iEvent;
        sFileRequest = sFileLoad;
        if (iEvent != BGNDTHREAD_KILL)
            iEvent = BGNDTHREAD_NONE;
        return i;
    }

    
    public void run()
    {
      //System.out.println("BgndThread.run(): thread started");
        
        while (true) {

            switch(GetBgndRequest()) {
                
            case BGNDTHREAD_KILL:
                return;
                
            case BGNDTHREAD_LOADFILE:
                dev.NotifyLoad(sFileRequest);
                break;
                
            case BGNDTHREAD_PAGEFILE:
                dev.cpu.PageUnpagedBank();
                break;
            }
        }
    }
    
    
    /*  IsAvailable()
     *
     *  Returns 'true' if BgndThread is available, 'false' if busy
     */
    public boolean IsAvailable()
    {
        return iEvent == BGNDTHREAD_NONE;
    }

    
    /*  MessageBeep()
     */
    void MessageBeep()
    {
        emul.getToolkit().beep();
    }


    /*  LoadFile(sFile)
     *
     *  Called by Device to initiate the loading of a file
     */
    public boolean LoadFile(String sFile)
    {
        if (IsAvailable()) {
            if (QueueLoadRequest(sFile))
                return true;
        }
        MessageBeep();
        return false;
    }

    
    /*  PageFile()
     *
     *  Called by CPUThread to initiate a demand-page request
     */
    public boolean PageFile()
    {
        if (IsAvailable()) {
            QueuePageRequest();
            return true;
        }
        return false;
    }
    
}
