/*  ScriptVarValue.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  Class used to describe a "value variable" (as opposed to, say, a "structure variable").
 */


class ScriptVarValue extends ScriptVarType
{
    // NOTE: If addrExtern is used, then iValue is not, since the value exists at the specified address
    
    String  sName;      // name of variable, null if unnamed (eg, a return value)
    String  sType;      // type of variable (ie, a type description string)
    byte    bType;      // basic type, if any
    int     iValue;     // value of variable
    Object  oValue;     // must be used instead of iValue if bType == BASICTYPE_OBJECT
    int     addrExtern; // external address of variable, 0 if none
    

    /*  ScriptVarValue() - Default constructor
     */
    ScriptVarValue()
    {
        // BUGBUG: The only reason this exists is because subclass ScriptVarFunc hasn't decided
        // what kind of super() constructor it would like to use.  Decide and then eliminate this. -JP
    }
    
    
    /*  ScriptVarValue() - Value-based constructor, using the supplied BASICTYPE
     */
    ScriptVarValue(String sName, byte bType, int iValue)
    {
        this.sName = sName;
        this.sType = aBasicTypes[bType];
        this.bType = bType;
        
        SetValue(iValue);
    }
    
    
    /*  ScriptVarValue() - Value-based constructor, using the supplied string type
     */
    ScriptVarValue(String sName, String sType, int iValue)
    {
        this(sName, BASICTYPE_UNDEFINED, iValue);
        
        for (int i=1; i<aBasicTypes.length; i++) {
            if (sType.startsWith(aBasicTypes[i])) {
                if (sType.equals(aBasicTypes[i]))
                    this.sType = aBasicTypes[i];
                bType = (byte)i;
                break;
            }
        }
        
        if (bType == 0)
            throw new RuntimeException(sName + ": invalid type");
    }
    
    
    /*  ScriptVarValue() - Object-based constructor
     */
    ScriptVarValue(String sName, Object o)
    {
        this.sName = sName;
        this.sType = aBasicTypes[this.bType = BASICTYPE_OBJECT];
        this.oValue = o;
    }
    
    
    /*  GetSize()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      size in bytes
     */
    int GetSize()
    {
        int cbSize;

        switch(bType) {
        case BASICTYPE_BYTE:
        case BASICTYPE_UBYTE:
        case BASICTYPE_CHAR:
            cbSize = 1;
            break;
        case BASICTYPE_WORD:
        case BASICTYPE_UWORD:
        case BASICTYPE_UCHAR:
            cbSize = 2;
            break;
        case BASICTYPE_INT:
        case BASICTYPE_UINT:
        case BASICTYPE_POINTER:
            cbSize = 4;
            break;
        default:
            cbSize = 0;
            break;
        }
        return cbSize;
    }
    
    
    /*  GetMask()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      value mask
     */
    int GetMask()
    {
        int iMask;

        switch(bType) {
        case BASICTYPE_BYTE:
        case BASICTYPE_UBYTE:
        case BASICTYPE_CHAR:
            iMask = 0xff;
            break;
        case BASICTYPE_WORD:
        case BASICTYPE_UWORD:
        case BASICTYPE_UCHAR:
            iMask = 0xffff;
            break;
        case BASICTYPE_INT:
        case BASICTYPE_UINT:
        case BASICTYPE_POINTER:
            // Note: setting the mask to 0 in the default case might seem like a good idea,
            // but certain variables we create, like the "structure variables" that describe all the
            // parameters for "function variables", use iValue for special purposes (eg, the parameter
            // count), and so masking their special values with 0 wouldn't be very useful.
        default:
            iMask = 0xffffffff;
            break;
        }
        return iMask;
    }
    
    
    /*  GetBasicType()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      One of the BASICTYPE constants, or 0 if not a basic type
     */
    byte GetBasicType()
    {
        return bType;
    }
    
    
    /*  Accepts(var)
     *
     *  ENTRY
     *      var == variable to accept
     *
     *  EXIT
     *      true if compatible, false if not
     */
    boolean Accepts(ScriptVarValue var)
    {
        if (bType == BASICTYPE_POINTER && var.bType == BASICTYPE_POINTER)
            return true;
        
     // BUGBUG: We have to allow this for now, since we have no way of explicitly casting non-pointer
     // values to pointers. -JP
     //
     // if (bType == BASICTYPE_POINTER || var.bType == BASICTYPE_POINTER)
     //     return false;
        
        if (GetSize() >= var.GetSize())
            return true;
        
        // The specified value is LARGER, so Only accept it if no significant bits are going to get dropped
        // BUGBUG: Compatibility of signed types needs work -JP
        if ((var.GetValue() & ~GetMask()) == 0)
            return true;
        
        return false;
    }
    
    
    /*  GetValue()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      iValue
     */
    int GetValue()
    {
        if (bType == BASICTYPE_OBJECT) {
            if (oValue instanceof FileStream)
                return ((FileStream)oValue).GetStatus() == FileStream.FILESTAT_OK? 1 : 0;
            return 1;
        }
        return iValue;
    }
    
    
    /*  SetValue(iValue)
     *
     *  ENTRY
     *      iValue == value
     *
     *  EXIT
     *      None
     */
    void SetValue(int iValue)
    {
        // BUGBUG: Proper sign propagation of signed types needs work -JP
        this.iValue = iValue & GetMask();
    }
    
    
    /*  GetObject()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      oValue
     */
    Object GetObject()
    {
        return oValue;
    }
    
    
    /*  SetObject(o)
     *
     *  ENTRY
     *      o == object
     *
     *  EXIT
     *      None
     */
    void SetObject(Object o)
    {
        if (bType != BASICTYPE_OBJECT)
            throw new RuntimeException(sName + ": not an object");
        
        oValue = o;
    }
    

    /*  GetValueString()
     *
     *  ENTRY
     *      None
     *
     *  EXIT
     *      value in string form
     */
    String GetValueString()
    {
        if (bType == BASICTYPE_OBJECT) {
            if (oValue != null) {
                if (oValue instanceof FileStream)
                    return ((FileStream)oValue).GetFullName();
                return oValue.toString();
            }
            return "no object";
        }
        
        if (bType != BASICTYPE_POINTER)
            return Integer.toString(iValue);

        return "0x" + Integer.toHexString(iValue);
    }
    
}
