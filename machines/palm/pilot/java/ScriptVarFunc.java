/*  ScriptVarFunc.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This class describes a "function variable".  It is created using a call description string
 *  (eg, one of the APIDescs in PalmOSTypes), and can then be used to invoke a instances of the
 *  function.
 */


class ScriptVarFunc extends ScriptVarValue implements VarFuncInterface
{
    // The fields inherited from ScriptVarValue:
    //
    //  sName - name of function variable, null if unnamed
    //  sType - call description, null if unknown
    //  bType - not used
    //  iValue - used for FUNCTION_* flags
    //  oValue - not used
    //  addrExtern - external address (or TRAP #) of function, 0 if none

    ScriptVarStruct   varParms;         // set of parameters, if any
    ScriptVarValue    varReturn;        // return value, if any
    
    public static final byte FUNCTION_VALID       = 0x01;       // function is valid
    public static final byte FUNCTION_TRAP        = 0x02;       // addrExtern is a TRAP #
    public static final byte FUNCTION_CALLED      = 0x04;       // function has been called
    public static final byte FUNCTION_RETURNED    = 0x08;       // function has returned
    public static final byte FUNCTION_ASYNCRETURN = 0x10;       // function return is async
    
    
    /*  ScriptVarFunc(sDesc, sReturn)
     *
     *  ENTRY
     *      sDesc == call description (eg, from PalmOSTypes.GetAPIDesc())
     *      sReturn == name of return variable, if any
     *
     *  EXIT
     *      FUNCTION_VALID set if successful
     */
    ScriptVarFunc(String sDesc, String sReturn)
    {
        // BUGBUG: Since we are subclassing ScriptVarValue, we are currently (by default)
        // invoking ScriptVarValue's default constructor.  We should get rid of that constructor
        // and explicitly call a more appropriate super() constructor. -JP
        
        // We need to create a "structure variable" for the call's parameters, which requires that
        // we first know how many parameters there are.  The easiest way to do that is count the number
        // of commas in the call description, and add 1 to the result.
        
        // Also note that since call descriptions are generated internally, not by users, we can assume
        // there are no weird formatting problems (eg, excessive whitespace).
        
        sName = sDesc;

        int iParms = sDesc.indexOf('(');
        int iParmsEnd = sDesc.lastIndexOf(')');
        
        if (iParms > 0 && iParmsEnd > 0) {
            
            sName = sDesc.substring(0, iParms);
            sType = sDesc;
            
            if (iParmsEnd - iParms > 1) {
                int i = iParms++;
                int cParms = 0;
                do {
                    cParms++;
                    i = sDesc.indexOf(',', i+1);
                } while (i >= 0);
                varParms = new ScriptVarStruct(null, sDesc.substring(iParms, iParmsEnd), cParms);
            }
            
            // Is a return type specified?
            int iReturn = sDesc.indexOf(':', iParmsEnd+1);
            if (iReturn > 0) {
                // Yes, but perhaps it's actually a return name, FOLLOWED by a return type?
                int iReturnEnd = sDesc.indexOf(':', iReturn+1);
                if (iReturnEnd >= 0) {
                    // Yes! So if no name was supplied for return value, use the return name
                    if (sReturn == null)
                        sReturn = sDesc.substring(iReturn+1, iReturnEnd);
                    // And in any case, make sure we're really pointing to the return type now
                    iReturn = iReturnEnd;
                }
                else {
                    if (sReturn == null)
                        sReturn = sName;
                }
                varReturn = new ScriptVarValue(sReturn, sDesc.substring(iReturn+1), 0);
            }
            
            iValue |= FUNCTION_VALID;
        }
    }
    
    
    /*  IsValid()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      true if function is valid, false if not (eg, missing function description)
     */
    boolean IsValid()
    {
        return ((iValue & FUNCTION_VALID) != 0);
    }
    
    
    /*  GetParm(iParm)
     *
     *  ENTRY
     *      iParm == parameter #
     *
     *  EXIT
     *      varValue
     */
    ScriptVarValue GetParm(int iParm)
    {
        return varParms.GetField(iParm);
    }
    
    
    /*  IsSupportedParm(iParm)
     *
     *  ENTRY
     *      iParm == parameter #
     *
     *  EXIT
     *      true if supported, false if not
     */
    boolean IsSupportedParm(int iParm)
    {
        switch(GetParm(iParm).GetBasicType()) {
            
        case BASICTYPE_BYTE:
        case BASICTYPE_UBYTE:
        case BASICTYPE_CHAR:
        case BASICTYPE_UCHAR:
        case BASICTYPE_WORD:
        case BASICTYPE_UWORD:
        case BASICTYPE_INT:
        case BASICTYPE_UINT:
        case BASICTYPE_POINTER:
            break;
            
        default:
            return false;
        }
        return true;
    }
    
    
    /*  SetParm(iParm, varValue)
     *
     *  ENTRY
     *      iParm == parameter #
     *      varValue == parameter value
     *
     *  EXIT
     *      None
     */
    void SetParm(int iParm, ScriptVarValue varValue)
    {
        if (IsSupportedParm(iParm) && GetParm(iParm).Accepts(varValue)) {
            varParms.SetFieldValue(iParm, varValue.GetValue());
            return;
        }
        throw new RuntimeException(GetParm(iParm).sName + ": cannot set to " + varValue.GetValueString());
    }
    
    
    /*  SetTrap(iTrap)
     *
     *  ENTRY
     *      iTrap == TRAP #
     *
     *  EXIT
     *      None
     */
    void SetTrap(int iTrap)
    {
        addrExtern = iTrap;
        iValue |= FUNCTION_TRAP;
    }
    
    
    /*  Invoke(cpu)
     *
     *  ENTRY
     *      cpu == CPUThread
     *
     *  EXIT
     *      true if call was successfully injected or queued, false if call was invalid or queue was full/busy
     */
    synchronized boolean Invoke(CPUThread cpu)
    {
        // Make sure the call's return value is fully supported first
        
        switch(varReturn.GetBasicType()) {      // keep this list of supported types in sync with Return()
            
        case BASICTYPE_BYTE:
        case BASICTYPE_UBYTE:
        case BASICTYPE_CHAR:
        case BASICTYPE_UCHAR:
        case BASICTYPE_WORD:
        case BASICTYPE_UWORD:
        case BASICTYPE_INT:
        case BASICTYPE_UINT:
        case BASICTYPE_POINTER:
            break;
            
        default:
            return false;
        }

        if ((iValue & FUNCTION_VALID) != 0) {
            
            iValue &= ~(FUNCTION_CALLED | FUNCTION_RETURNED | FUNCTION_ASYNCRETURN);
        
            if (cpu.QueueInjection(this)) {
                
                try {
                    //
                    //  BUGBUG: Some injected calls, like DmCreateDatabaseFromImage, can take a significant amount of time,
                    //  as in more than the 1000ms I used to allow here. -JP
                    //
                    wait(30000);
                } catch (InterruptedException e) {};
                                                   
                return true;
            }
        }
        return false;
    }
    
    
    /*  Call(cpu, opStop) - Called from CPUThread.CheckStopEvents() to inject a call
     *
     *  ENTRY
     *      cpu == CPUThread
     *      opStop == opcode uses to stop call
     *
     *  EXIT
     *      None
     *
     *  NOTE: This function could also be called immediately, from CPUThread.QueueInjection(),
     *  if the CPU is in a state where the call can be issued without being queued (ie, already stopped).
     */
    public synchronized void Call(CPUThread cpu, int opStop)
    {
        int pcNew = addrExtern;
        int cFields = varParms.GetLength();
        
        if ((iValue & FUNCTION_TRAP) != 0) {
            cpu.PushLong(cpu.pc);
            cpu.PushLong(opStop);
            cpu.PushLong((CPUDefs.OP_TRAP_0xF << 16) | addrExtern);
            pcNew = cpu.a[7];
        }

        for (int i=cFields-1; i>=0; i--) {
            switch(varParms.GetFieldSize(i)) {
                
            case 1:
            case 2:
                cpu.PushWord(varParms.GetFieldValue(i));
                break;
                
            case 4:
                cpu.PushLong(varParms.GetFieldValue(i));
                break;
                
            default:
                throw new RuntimeException(sName + ": unsupported parameter: " + varParms.GetField(i).sName);
            }
        }
        
        if ((iValue & FUNCTION_TRAP) == 0)
            cpu.PushLong(cpu.pc);
        
        cpu.pc = pcNew;
        
        iValue |= FUNCTION_CALLED;
    }
    
    
    /*  Return(cpu) - Called from CPUThread.CheckStopEvents() to return from a call
     *
     *  ENTRY
     *      cpu == CPUThread
     *
     *  EXIT
     *      None
     */
    public synchronized void Return(CPUThread cpu)
    {
        if (varReturn != null) {
            switch(varReturn.GetBasicType()) {  // keep this list of supported types in sync with Invoke()
                
            case BASICTYPE_BYTE:
            case BASICTYPE_UBYTE:
            case BASICTYPE_CHAR:
            case BASICTYPE_UCHAR:
            case BASICTYPE_WORD:
            case BASICTYPE_UWORD:
            case BASICTYPE_INT:
            case BASICTYPE_UINT:
                varReturn.SetValue(cpu.d[0]);
                break;
                
            case BASICTYPE_POINTER:
                varReturn.SetValue(cpu.a[0]);
                break;
                
            default:
                throw new RuntimeException(sName + ": unsupported return type: " + varReturn.sType);
            }
        }
        
        iValue |= FUNCTION_RETURNED;
        
        if ((iValue & FUNCTION_ASYNCRETURN) == 0)
            notify();
        else
            Emulator.DisplayMessage(GetResultMessage());
    }


    /*  IsComplete()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      true if call has returned, false if not
     */
    synchronized boolean IsComplete()
    {
        if ((iValue & FUNCTION_RETURNED) != 0)
            return true;
        
        iValue |= FUNCTION_ASYNCRETURN;
        return false;
    }
    
    
    /*  GetResultMessage()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      Result message, if any
     */
    String GetResultMessage()
    {
        if ((iValue & FUNCTION_VALID) == 0)
            return "unsupported function";
                    
        if (!IsComplete())
            return "still queued or in progress";
                    
        if (varReturn == null)
            return "no return value";
        
        return "0x" + Integer.toHexString(varReturn.GetValue());
    }
    
}
