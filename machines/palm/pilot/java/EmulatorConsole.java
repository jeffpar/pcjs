/*  EmulatorConsole.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


class EmulatorConsole
{
    private String sTextMessage = "";
    

    EmulatorConsole()
    {
    }


    /*  GetTextMessage()
     *
     *  JavaScript interface allowing web pages to pull any text messages we may have queued
     *  up for it.  This is primarily how we communicate with web pages, since it's far
     *  easier for web pages to call INTO our code (via JavaScript) than it is for us to call
    *  INTO the them (another miserable fact in an applet's life ;-)).
     */
    public synchronized String GetTextMessage()
    {
        String s = sTextMessage;
        sTextMessage = "";
        notify();
        return s;
    }
    

    /*  DisplayConsoleMessage(s)
     *
     *  Queue up a message (usually one that has been generated asynchronously with respect to any
     *  JavaScript running outside the applet) for future retrieval.
     */
    public synchronized void DisplayConsoleMessage(String s)
    {
        if (s == null || s.length() == 0)
            return;
        
        if (Emulator.fDebugger && s != Emulator.sPleaseWait) {
            
            int cTries = 0;
            while (sTextMessage.length() > 4096 && ++cTries <= 4) {
                try {
                    wait(500);      // note that the JavaScript debugger's GetTextMessage handler 'fires' every 500ms too...
                }
                catch (InterruptedException e) {
                    sTextMessage = "";
                    break;
                };
            }
            if (cTries > 4)         // if the JavaScript debugger isn't waking up (or can't), then we have to throw away old messages
                sTextMessage = "";
            
            if (sTextMessage.length() == 0)
                sTextMessage = s;
            else
                sTextMessage = sTextMessage + "\n" + s;
        }
#if DEBUG
        // Echo everything to 'stdout' too, since the JavaScript debugger's output window is inaccessible
        // when the applet's being debugged.  BUGBUG: I used to call this even when fDebugger was false, but
        // I'm not sure that's wise in production builds. -JP
        System.out.println(s);
#endif
    }
        
}
