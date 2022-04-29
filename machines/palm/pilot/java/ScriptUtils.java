/*  ScriptUtils.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  Manages collections of variables and performs various operations on them.
 */


import java.util.*;                     // for Vector class (among others probably)


class ScriptUtils extends ScriptVarType
{
    Device dev;
    Vector vecVars;
    

    /*  AddVariable(varAdd)
     *
     *  ENTRY
     *      varAdd == ScriptVarValue to add
     *
     *  EXIT
     *      None
     */
    void AddVariable(ScriptVarValue varAdd)
    {
        // First, make sure this variable's name is unique
        for (int i=0; i<vecVars.size(); i++) {
            ScriptVarValue var = (ScriptVarValue)(vecVars.elementAt(i));
            if (var.sName.equalsIgnoreCase(varAdd.sName)) {
                // It's not unique, so overwrite the conflicting variable
                vecVars.setElementAt(varAdd, i);
                return;
            }
        }
        vecVars.addElement(varAdd);
    }
    
    
    /*  DeleteVariable(varDel)
     *
     *  ENTRY
     *      varDel == ScriptVarValue to delete
     *
     *  EXIT
     *      None
     */
    void DeleteVariable(ScriptVarValue varDel)
    {
        Object o = varDel.GetObject();
        if (o instanceof FileStream)
            ((FileStream)o).Close();
        vecVars.removeElement(varDel);
    }
    
    
    /*  DeleteAllVariables()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      Number of variables deleted
     */
    int DeleteAllVariables()
    {
        int cVars = vecVars.size();
        CloseAllFiles();
        vecVars.removeAllElements();
        return cVars;
    }
    
    
    /*  CloseAllFiles()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      None
     */
    void CloseAllFiles()
    {
        for (int i=0; i<vecVars.size(); i++) {
            ScriptVarValue var = (ScriptVarValue)(vecVars.elementAt(i));
            Object o = var.GetObject();
            if (o instanceof FileStream) {
                FileStream file = (FileStream)o;
                file.Close();
            }
        }
    }
    
        
    /*  GetVariable(sVar)
     *
     *  Finds the specified variable, or creates one if it's actually a value instead
     *
     *  ENTRY
     *      sVar == name of variable
     *
     *  EXIT
     *      ScriptVarValue
     */
    ScriptVarValue GetVariable(String sVar)
    {
        int cch = sVar.length();
        
        if (sVar.charAt(0) == '"' && sVar.charAt(cch-1) == '"')
            return new ScriptVarValue(null, (Object)new String(sVar.substring(1, cch-1)));
        
        if (Character.isDigit(sVar.charAt(0)))
            return new ScriptVarValue(null, BASICTYPE_INT, Integer.decode(sVar).intValue());

        for (int i=0; i<vecVars.size(); i++) {
            ScriptVarValue var = (ScriptVarValue)(vecVars.elementAt(i));
            if (var.sName.equalsIgnoreCase(sVar))
                return var;
        }
        
        throw new RuntimeException("bad variable: " + sVar);
    }
    
    
    /*  CreateReturnVariable(sFunction, sReturn, i)
     *
     *  ENTRY
     *      sFunction == function name
     *      sReturn == name of return variable, if any
     *      i == initial value, if any
     *
     *  EXIT
     *      ScriptVarValue
     */
    ScriptVarValue CreateReturnVariable(String sFunction, String sReturn, int i)
    {
        ScriptVarValue varReturn = new ScriptVarValue(sReturn != null? sReturn : sFunction, BASICTYPE_INT, i);
        if (sReturn != null)
            AddVariable(varReturn);
        return varReturn;
    }
    
    
    /*  CreateReturnVariable(sFunction, sReturn, bType, i)
     *
     *  ENTRY
     *      sFunction == function name
     *      sReturn == name of return variable, if any
     *      i == initial value, if any
     *
     *  EXIT
     *      ScriptVarValue
     */
    ScriptVarValue CreateReturnVariable(String sFunction, String sReturn, byte bType, int i)
    {
        ScriptVarValue varReturn = new ScriptVarValue(sReturn != null? sReturn : sFunction, bType, i);
        if (sReturn != null)
            AddVariable(varReturn);
        return varReturn;
    }
    
    
    /*  CreateReturnVariable(sFunction, sReturn, o)
     *
     *  ENTRY
     *      sFunction == function name
     *      sReturn == name of return variable, if any
     *      o == initial object, if any
     *
     *  EXIT
     *      ScriptVarValue
     */
    ScriptVarValue CreateReturnVariable(String sFunction, String sReturn, Object o)
    {
        ScriptVarValue varReturn = new ScriptVarValue(sReturn != null? sReturn : sFunction, o);
        if (sReturn != null)
            AddVariable(varReturn);
        return varReturn;
    }
    
    
    /*  GetParameter(sParms, iParm)
     *
     *  ENTRY
     *      sParms == list of parameters
     *      iParm == 0-based index of parameter
     *
     *  EXIT
     *      specified parameter string if successful, null if not
     */
    String GetParameter(String sParms, int iParm)
    {
        int ich = 0;
        int ichMax = sParms.length();
        while (ich < ichMax) {
            
            int ichEnd = sParms.indexOf(',', ich);
            if (ichEnd < 0)
                ichEnd = ichMax;
            
            if (iParm-- == 0) {
                String sParm = sParms.substring(ich, ichEnd).trim();
                return sParm;
            }
            
            ich = ichEnd+1;
        }
        
        throw new RuntimeException("bad parameter " + ++iParm);
    }
    
    
    /*  ParseFunctionParms(varFunc, sParms)
     *
     *  ENTRY
     *      varFunc == function variable to initialize
     *      sParms == list of parameters used to initialize
     *
     *  EXIT
     *      None
     */
    void ParseFunctionParms(ScriptVarFunc varFunc, String sParms)
    {
        for (int iParm=0; iParm<varFunc.varParms.GetLength(); iParm++)
            varFunc.SetParm(iParm, GetVariable(GetParameter(sParms, iParm)));
    }

    
    /*  GetNextToken(asCommand)
     *
     *  ENTRY
     *      asCommand
     *
     *  EXIT
     *      Next token is removed from the string at asCommand[0] and returned
     */
    String GetNextToken(String[] asCommand)
    {
        String sCommand = asCommand[0];
        
        int iMax = sCommand.length();
        int iToken = CountWhitespace(sCommand, 0), iTokenEnd = iToken;
        
        while (iTokenEnd < iMax) {
            
            char ch = sCommand.charAt(iTokenEnd);
            
            if (Character.isLetter(ch)) {
                while (++iTokenEnd < iMax && Character.isLetterOrDigit(sCommand.charAt(iTokenEnd)))
                    ;
                break;
            }
            else if (Character.isDigit(ch)) {
                if (ch == '0') {
                    iTokenEnd++;
                    if (iTokenEnd < iMax && sCommand.charAt(iTokenEnd) == 'x')
                        iTokenEnd++;
                }
                while (++iTokenEnd < iMax && Character.isDigit(sCommand.charAt(iTokenEnd)))
                    ;
                break;
            }
            else if (ch == '(' || ch == '"') {
                int cOpenParens = (ch == '('? 1 : 0);
                int cOpenQuotes = (ch == '"'? 1 : 0);
                while (++iTokenEnd < iMax && (cOpenParens > 0 || cOpenQuotes > 0)) {
                    ch = sCommand.charAt(iTokenEnd);
                    if (cOpenQuotes == 0) {
                        if (ch == '(')
                            cOpenParens++;
                        else if (ch == ')')
                            cOpenParens--;
                        else if (ch == '"')
                            cOpenQuotes++;
                    }
                    else {
                        if (ch == '"')
                            cOpenQuotes--;
                    }
                }
                break;
            }
            ++iTokenEnd;
            break;
        }
        
        String sToken = sCommand.substring(iToken, iTokenEnd);
        asCommand[0] = sCommand.substring(iTokenEnd + CountWhitespace(sCommand, iTokenEnd));
        
        return sToken.length() == 0? null : sToken;
    }
    
    
    /*  AddWhitespace(cch)
     *
     *  ENTRY
     *      cch == # of spaces
     *
     *  EXIT
     *      Whitespace string with # of requested spaces
     */
    String AddWhitespace(int cch)
    {
        String s = "";
        while (cch > 0) {
            s = s + "        ".substring(cch >= 8? 0 : 8-cch);
            cch -= (cch >= 8)? 8 : cch;
        }
        return s;
    }
    
    
    /*  CountWhitespace(s, i)
     *
     *  ENTRY
     *      s, i
     *
     *  EXIT
     *      Whitespace count
     */
    int CountWhitespace(String s, int i)
    {
        int cch = 0;
        while (i < s.length() && Character.isWhitespace(s.charAt(i))) {
            i++;
            cch++;
        }
        return cch;
    }
    
}
