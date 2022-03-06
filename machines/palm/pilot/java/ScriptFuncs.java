/*  ScriptFuncs.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


class ScriptFuncs extends ScriptUtils
{
    
    /*  OpenFile(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      [filevar = ] OpenFile(stringvar)
     */
    String OpenFile(String sFunction, String sParms, String sReturn)
    {
        // BUGBUG: Need a way of specifying what kind of file we're looking for.  Currently, we're always
        // using this function to open PRCs, so we've hard-coded that specification -JP
        FileStream file = new FileStream(GetVariable(GetParameter(sParms, 0)).GetValueString(), FileStream.FILETYPE_PRC, FileStream.FILEOPEN_READ | FileStream.FILEOPEN_SEARCHZIP);
        ScriptVarValue varReturn = CreateReturnVariable(sFunction, sReturn, file);
        return Integer.toString(file.GetStatus());
    }
        

    /*  GetFileSize(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      [intvar = ] GetFileSize(filevar)
     */
    String GetFileSize(String sFunction, String sParms, String sReturn)
    {
        String sParm = GetParameter(sParms, 0);
        Object o = GetVariable(sParm).GetObject();
        if (!(o instanceof FileStream))
            return "wrong type: " + sParm;
        
        int cbSize = ((FileStream)o).GetLength();
        
        ScriptVarValue varReturn = CreateReturnVariable(sFunction, sReturn, BASICTYPE_INT, cbSize);
        return varReturn.GetValueString();
    }
        

    /*  ReadFile(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      [booleanvar = ] ReadFile(filevar, pointervar)
     */
    String ReadFile(String sFunction, String sParms, String sReturn)
    {
        int fSuccess = 0;
        
        String sParm = GetParameter(sParms, 0);
        Object o = GetVariable(sParm).GetObject();
        if (!(o instanceof FileStream))
            return "wrong type: " + sParm;
        FileStream file = (FileStream)o;
        
        sParm = GetParameter(sParms, 1);
        int addr = GetVariable(sParm).GetValue();
        
        if (dev.cpu.SetBytes(addr, file) == file.GetLength())
            fSuccess = 1;
        
        ScriptVarValue varReturn = CreateReturnVariable(sFunction, sReturn, BASICTYPE_INT, fSuccess);
        return varReturn.GetValueString();
    }
        
        
    /*  CloseFile(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      CloseFile(filevar)
     */
    String CloseFile(String sFunction, String sParms, String sReturn)
    {
        if (sReturn != null)
            return "no return value";
        String sParm = GetParameter(sParms, 0);
        ScriptVarValue varParm = GetVariable(sParm);
        Object o = varParm.GetObject();
        if (!(o instanceof FileStream))
            return "wrong type: " + sParm;
        ((FileStream)o).Close();
        DeleteVariable(varParm);
        return "closed";
    }
        
        
    /*  AllocTempPtr(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      [pointervar = ] AllocTempPtr(intvar)
     */
    String AllocTempPtr(String sFunction, String sParms, String sReturn)
    {
        int addrTemp;
        
        String sParm = GetParameter(sParms, 0);
        ScriptVarValue varParm = GetVariable(sParm);
        if (varParm.GetBasicType() != BASICTYPE_INT)
            return "wrong type: " + sParm;
        
        // Create a dummy ("temp") memory block now, and store its address in addrTemp
        addrTemp = dev.cpu.InitTempBanks(varParm.GetValue());

        ScriptVarValue varReturn = CreateReturnVariable(sFunction, sReturn, BASICTYPE_POINTER, addrTemp);
        return varReturn.GetValueString();
    }
        
        
    /*  FreeTempPtr(sFunction, sParms, sReturn)
     *
     *  ENTRY
     *      sFunction == function name
     *      sParms == parameter list
     *      sReturn == return variable, if any
     *
     *  EXIT
     *      Result message
     *
     *  SCRIPT SYNTAX
     *      FreeTempPtr(pointerVar)
     */
    String FreeTempPtr(String sFunction, String sParms, String sReturn)
    {
        String sParm = GetParameter(sParms, 0);
        ScriptVarValue varParm = GetVariable(sParm);
        if (varParm.GetBasicType() != BASICTYPE_POINTER)
            return "wrong type: " + sParm;
        
        // Free the dummy ("temp") memory block now
        dev.cpu.FreeBanks(varParm.GetValue());

        DeleteVariable(varParm);
        return "ok";            // BUGBUG: Can we use a shared "ok" string somewhere? -JP
    }
    
}
