/*  ScriptManager.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  Manages collections of variables and performs various operations on them.
 *
 *  Examples:
 *
 *  When the debugger sees an unrecognized command like "!foo=MemPtrNew(0x100)", it passes
 *  that command to our ParseCommand() method, which will then create a ScriptVarFunc named "MemPtrNew",
 *  along with a ScriptVarValue named "foo" for ScriptVarFunc's return value, and do an Invoke() on ScriptVarFunc.
 */


import java.util.*;                     // for Vector class (among others probably)


class ScriptManager extends ScriptCmds implements ScriptInterface
{
    
    boolean fScriptRun = false, fScriptIgnore = false;
    

    /*  Init(dev) - TriggerMethod
     *
     *  ENTRY
     *      dev == Device
     *
     *  EXIT
     *      None
     */
    public void Init(Device dev)
    {
        this.dev = dev;
        vecVars = new Vector(4);        // specify an initial and arbitrary capacity of 4
    }
    
    
    /*  Destroy() - TriggerMethod
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      None
     */
    public void Destroy()
    {
        dev = null;
        DeleteAllVariables();
        vecVars = null;
    }
    
    
    /*  ParseCommand(sCommand) - TriggerMethod
     *
     *  ENTRY
     *      sCommand == command string
     *
     *  EXIT
     *      Result message
     */
    public String ParseCommand(String sCommand)
    {
        if (sCommand == null || sCommand.length() == 0 || sCommand.equals("!"))
            return "\r\n" + HelpCommand(null);
        
        boolean fImmediate = (sCommand.charAt(0) == '!');
        if (fImmediate)
            sCommand = sCommand.substring(1);

        String[] asCommand = new String[1];
        asCommand[0] = sCommand;
        
        while (true) {
        try {

            String sToken = GetNextToken(asCommand);
            if (sToken == null)
                break;
                
            if (sToken.equalsIgnoreCase("begin")) {
                if (fScriptRun || dev.Freeze(true)) {
                    fScriptRun = true;
                    fScriptIgnore = false;
                    return "ok";
                }
                return "device is busy, wait a moment and try again";
            }
            
            if (sToken.equalsIgnoreCase("end")) {
                if (fScriptRun) {
                    DeleteAllVariables();
                    fScriptRun = false;
                    dev.Thaw();
                    return "";
                }
                return "no active script";
            }
            
            // We don't impose script begin/end/break requirements on the debugger (ie, on immediate commands)

            if (!fImmediate) {
                if (!fScriptRun)
                    return "no active script (use 'begin')";
                if (fScriptIgnore)
                    return "ignored";
            }

            if (sToken.equalsIgnoreCase("break")) {
                fScriptIgnore = true;
                return "ok";
            }
                
            if (sToken.equalsIgnoreCase("clear"))
                return "\r\n" + ClearCommand(asCommand[0]);
            
            if (sToken.equalsIgnoreCase("help"))
                return "\r\n" + HelpCommand(asCommand[0]);
            
            if (sToken.equalsIgnoreCase("print"))
                return "\r\n" + PrintCommand(asCommand[0]);
            
            if (sToken.equalsIgnoreCase("if")) {
                sToken = GetNextToken(asCommand);
                if (sToken == null)
                    break;
                if (sToken.charAt(0) == '(') {
                    if (!IfCommand(sToken.substring(1, sToken.length()-1)))
                        return "false";
                    continue;
                }
            }

            String sReturn = sToken;
            String sFunction, sParms;
            sToken = GetNextToken(asCommand);
            
            if (sToken != null && sToken.equals("=")) {
                sFunction = GetNextToken(asCommand);
                sParms = GetNextToken(asCommand);
            }
            else {
                sFunction = sReturn;
                sReturn = null;
                sParms = sToken;
            }
            
            if (sParms != null && sParms.charAt(0) == '(') {
                int cchParms = sParms.length();
                return CallCommand(sFunction, sParms.substring(1, cchParms-1), sReturn);
            }
            
            break;      // Hmmm....
            
        }
        catch (Throwable e) {return e.getMessage();}
        }
        
        return "unrecognized command";
    }
    
}
