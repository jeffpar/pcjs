/*  ScriptCmds.java
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


class ScriptCmds extends ScriptFuncs
{
    
    final static String asCommands[] = {
        "begin",                                "begin script",
        "clear",                                "clear variable(s)",
        "end",                                  "end script",
        "help",                                 "list script commands",
        "if (<var>) <cmd>",                     "if <var>, do <cmd>",
        "print",                                "print variable(s)",
        "[<var>=]<func>([parms])",              "call PalmOS function",
        "[file=]OpenFile(string)",              "open external file",
        "[int=]GetFileSize(file)",              "get external file size",
        "[bool=]ReadFile(file, pointer)",       "read external file",
        "CloseFile(file)",                      "close external file",
    };


    /*  CallCommand(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     */
    String CallCommand(String sFunction, String sParms, String sReturn)
    {
        int iTrap = PalmOSTypes.FindAPIName(sFunction);
        
        if (iTrap >= 0) {
        
            String sDesc = PalmOSTypes.GetAPIDesc(iTrap);
            if (sDesc != null) {
            
                ScriptVarFunc varFunc = new ScriptVarFunc(sDesc, sReturn);
                
                if (!varFunc.IsValid())
                    return "unsupported function";
                
                ParseFunctionParms(varFunc, sParms);
            
                // OK, we're ready to invoke the specified function.  Note that the function variable
                // does not need to be explicitly retained by us, because when we call Invoke(), the variable
                // will hand itself over to the CPU for injection, meaning the CPU will retain a reference
                // to the function variable for the lifetime of the injected call.
            
                // The only thing we want to explicitly retain a reference to is the return variable, IF it
                // has been named.  Again, our reference is not required for successful injection, because
                // the function variable also has a reference to the return variable.
            
                if (sReturn != null)
                    AddVariable(varFunc.varReturn);
            
                varFunc.SetTrap(iTrap);
            
                if (!varFunc.Invoke(dev.cpu))
                    return "unable to invoke";
            
                return varFunc.GetResultMessage();
            }
        }
        
        if (sFunction.equalsIgnoreCase("OpenFile"))
            return OpenFile(sFunction, sParms, sReturn);
        
        if (sFunction.equalsIgnoreCase("GetFileSize"))
            return GetFileSize(sFunction, sParms, sReturn);
        
        if (sFunction.equalsIgnoreCase("ReadFile"))
            return ReadFile(sFunction, sParms, sReturn);
        
        if (sFunction.equalsIgnoreCase("CloseFile"))
            return CloseFile(sFunction, sParms, sReturn);
        
        if (sFunction.equalsIgnoreCase("AllocTempPtr"))
            return AllocTempPtr(sFunction, sParms, sReturn);
        
        if (sFunction.equalsIgnoreCase("FreeTempPtr"))
            return FreeTempPtr(sFunction, sParms, sReturn);
        
        return "unknown function";
    }
                
                
    /*  ClearCommand(sParms)
     *
     *  ENTRY
     *      sParms
     *
     *  EXIT
     *      Result message
     */
    String ClearCommand(String sParms)
    {
        int cVars = 0;
        
        if (sParms.length() == 0) {
            cVars = DeleteAllVariables();
        }
        else {
            String[] asParms = new String[1];
            asParms[0] = sParms;
            do {
                String s = GetNextToken(asParms);
                if (s == null)
                    break;
                ScriptVarValue var = GetVariable(s);
                DeleteVariable(var);
                cVars++;
            } while (true);
        }
        return cVars + " variables cleared";
    }
    
    
    /*  HelpCommand(sParms)
     *
     *  ENTRY
     *      sParms
     *
     *  EXIT
     *      Result message
     */
    String HelpCommand(String sParms)
    {
        int i;
        int cchMax = 0;
        String sResult = "";
        String sMatch = null;
        
        if (sParms != null && sParms.length() > 0)
            sMatch = sParms;
        
        for (i=0; i<asCommands.length; i+=2) {
            if (cchMax < asCommands[i].length())
                cchMax = asCommands[i].length();
        }
        
        cchMax += 3;
        
        for (i=0; i<asCommands.length; i+=2) {
            if (sMatch != null)
                if (!asCommands[i].startsWith(sMatch))
                    continue;
            if (sResult.length() > 0)
                sResult = sResult + "\r\n";
            sResult = sResult + asCommands[i] + AddWhitespace(cchMax-asCommands[i].length()) + asCommands[i+1];
        }
        return sResult;
    }
    
    
    /*  IfCommand(sParms)
     *
     *  ENTRY
     *      sParms
     *
     *  EXIT
     *      true if evaluates non-zero, false if evaluates zero
     */
    boolean IfCommand(String sParms)
    {
        boolean fTrue = true;
        
        if (sParms.length() > 0) {
            
            if (sParms.charAt(0) == '!') {
                fTrue = false;
                sParms = sParms.substring(1);
            }
            
            // Ordinarily, we'd just let GetVariable throw an exception on a bad/non-existent
            // variable, but in this case, we need the "if" command to evaluate them as "false"
            try {
                ScriptVarValue var = GetVariable(sParms);
                return (var.GetValue() != 0? fTrue : !fTrue);
            }
            catch (Throwable e) {};
        }
        return false;
    }
    
    
    /*  PrintCommand(sParms)
     *
     *  ENTRY
     *      sParms
     *
     *  EXIT
     *      Result message
     */
    String PrintCommand(String sParms)
    {
        String sResult = "";
        
        if (sParms.length() == 0) {
            for (int i=0; i<vecVars.size(); i++) {
                ScriptVarValue var = (ScriptVarValue)(vecVars.elementAt(i));
                if (sResult.length() > 0)
                    sResult = sResult + "\r\n";
                sResult = sResult + var.sName + " = " + var.GetValueString();
            }
            if (sResult.length() == 0)
                sResult = "no variables";
        }
        else {
            String[] asParms = new String[1];
            asParms[0] = sParms;
            do {
                String s = GetNextToken(asParms);
                if (s == null)
                    break;
                ScriptVarValue var = GetVariable(s);
                if (sResult.length() > 0)
                    sResult = sResult + "\r\n";
                sResult = sResult + (var.sName == null? "" : (var.sName + " = ")) + var.GetValueString();
            } while (true);
        }
        return sResult;
    }
    
}
