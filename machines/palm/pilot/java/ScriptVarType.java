/*  ScriptVarType.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  Class used to describe basic types.
 */


class ScriptVarType
{
    public static final byte BASICTYPE_UNDEFINED= 0;
    public static final byte BASICTYPE_BYTE     = 1;
    public static final byte BASICTYPE_UBYTE    = 2;
    public static final byte BASICTYPE_CHAR     = 3;
    public static final byte BASICTYPE_UCHAR    = 4;
    public static final byte BASICTYPE_WORD     = 5;
    public static final byte BASICTYPE_UWORD    = 6;
    public static final byte BASICTYPE_INT      = 7;
    public static final byte BASICTYPE_UINT     = 8;
    public static final byte BASICTYPE_POINTER  = 9;
    public static final byte BASICTYPE_ARRAY    = 10;
    public static final byte BASICTYPE_ARRAYSZ  = 11;
    public static final byte BASICTYPE_ARRAYUZ  = 12;
    public static final byte BASICTYPE_STRUCT   = 13;
    public static final byte BASICTYPE_OBJECT   = 14;
    
    
    public static final String[] aBasicTypes = {
        null,
        "b",    // eg, Int8
        "ub",   // eg, UInt8
        "c",    // eg, Char8
        "uc",   // eg, Char16
        "w",    // eg, Int16
        "uw",   // eg, UInt16
        "i",    // eg, Int32
        "ui",   // eg, UInt32
        "p",    // pointer (needs to be followed by <type>, else untyped)
        "a",    // array (must be followed by another <type>)
        "sz",   // zero-terminated array of Char8 (optionally followed by fixed length (eg, "sz32")
        "uz",   // zero-terminated array of Char16 (optionally followed by fixed length (eg, "uz32")
        "t",    // structure
        "o",    // internal object
    };

}
