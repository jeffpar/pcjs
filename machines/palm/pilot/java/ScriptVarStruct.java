/*  ScriptVarStruct.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  Class used to describe a "structure variable" (as opposed to, say, a "value variable").
 */


class ScriptVarStruct extends ScriptVarValue
{
    // The fields inherited from ScriptVarValue:
    //
    //  sName - name of structure variable, if any
    //  sType - not used
    //  bType - not used
    //  iValue - number of fields in the structure
    //  oValue - not used
    //  addrExtern - external address of structure, 0 if none

    ScriptVarValue[] aValues;           // number of elements, equal to number of fields stored in iValue
    

    ScriptVarStruct(String sName, String sType, int cFields)
    {
        super(sName, BASICTYPE_STRUCT, cFields);
        
        aValues = new ScriptVarValue[cFields];
            
        // Now we need to create "value variables" for each of the fields
        int iField = 0;
        for (int i=0; i<cFields; i++) {
            int iNameEnd = sType.indexOf(':', iField);
            int iFieldEnd = sType.indexOf(',', iField);
            if (iFieldEnd < 0)
                iFieldEnd = sType.length();
            aValues[i] = new ScriptVarValue(sType.substring(iField, iNameEnd), sType.substring(iNameEnd+1, iFieldEnd), 0);
            iField = iFieldEnd+1;
        }
    }
    
    
    /*  GetLength()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      number of fields
     */
    int GetLength()
    {
        return iValue;
    }
    
    
    /*  GetField(iField)
     *
     *  ENTRY
     *      iField == field #
     *
     *  EXIT
     *      varValue
     */
    ScriptVarValue GetField(int iField)
    {
        return aValues[iField];
    }
    
    
    /*  GetFieldSize(iField)
     *
     *  ENTRY
     *      iField == field #
     *
     *  EXIT
     *      field size
     */
    int GetFieldSize(int iField)
    {
        return aValues[iField].GetSize();
    }
    
    
    /*  GetFieldValue(iField)
     *
     *  ENTRY
     *      iField == field #
     *
     *  EXIT
     *      field value
     */
    int GetFieldValue(int iField)
    {
        return aValues[iField].GetValue();
    }
    
    
    /*  SetFieldValue(iField, iValue)
     *
     *  ENTRY
     *      iField == field #
     *      iValue == field value
     *
     *  EXIT
     *      None
     */
    void SetFieldValue(int iField, int iValue)
    {
        aValues[iField].SetValue(iValue);
    }
    
}
