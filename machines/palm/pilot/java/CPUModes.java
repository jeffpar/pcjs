/*  CPUModes.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates all the Effective Address (EA) modes for the CPU.
 */


class CPUModes extends CPUMem
{
    protected EA aEAModes[];
    protected EA eaModeDRegLong;
    protected EA eaModeSrc, eaModeDst;
    

    protected void InitModes()
    {
        aEAModes = new EA[ssMAX*mmmMAX+1];      // +1 for EAMODEINDEX_IMMEDIATE_ILLEGAL
        
        int i = 0;
        aEAModes[i++] = new EB();   // EAModeDRegByte();            // must match EAMODEINDEX_DREG_BYTE
        aEAModes[i++] = new EC();   // EAModeDRegWord();            // must match EAMODEINDEX_DREG_WORD
        eaModeDRegLong = 
        aEAModes[i++] = new ED();   // EAModeDRegLong();

        aEAModes[i++] = new EE();   // EAModeIllegal();             // must match EAMODEINDEX_ILLEGAL
        aEAModes[i++] = new EF();   // EAModeARegWord();            // must match EAMODEINDEX_AREG_WORD
        aEAModes[i++] = new EG();   // EAModeARegLong();            // must match EAMODEINDEX_AREG_LONG
        
        aEAModes[i++] = new EH();   // EAModeAValByte();
        aEAModes[i++] = new EI();   // EAModeAValWord();
        aEAModes[i++] = new EJ();   // EAModeAValLong();
        
        aEAModes[i++] = new EK();   // EAModeAValIncByte();         // must match EAMODEINDEX_AREG_INCBYTE
        aEAModes[i++] = new EL();   // EAModeAValIncWord();         // must match EAMODEINDEX_AREG_INCWORD
        aEAModes[i++] = new EM();   // EAModeAValIncLong();         // must match EAMODEINDEX_AREG_INCLONG
        
        aEAModes[i++] = new EN();   // EAModeAValDecByte();         // must match EAMODEINDEX_AREG_DECBYTE
        aEAModes[i++] = new EO();   // EAModeAValDecWord();         // must match EAMODEINDEX_AREG_DECWORD
        aEAModes[i++] = new EP();   // EAModeAValDecLong();         // must match EAMODEINDEX_AREG_DECLONG
        
        aEAModes[i++] = new EQ();   // EAModeAValDispByte();
        aEAModes[i++] = new ER();   // EAModeAValDispWord();
        aEAModes[i++] = new ES();   // EAModeAValDispLong();
        
        aEAModes[i++] = new ET();   // EAModeAValIndexByte();
        aEAModes[i++] = new EU();   // EAModeAValIndexWord();
        aEAModes[i++] = new EV();   // EAModeAValIndexLong();
        
        aEAModes[i++] = new EW();   // EAModeAbs16Byte();
        aEAModes[i++] = new EX();   // EAModeAbs16Word();
        aEAModes[i++] = new EY();   // EAModeAbs16Long();
        
        aEAModes[i++] = new E1();   // EAModeAbs32Byte();
        aEAModes[i++] = new E2();   // EAModeAbs32Word();
        aEAModes[i++] = new E3();   // EAModeAbs32Long();
        
        aEAModes[i++] = new E4();   // EAModePCValDispByte();
        aEAModes[i++] = new E5();   // EAModePCValDispWord();
        aEAModes[i++] = new E6();   // EAModePCValDispLong();
        
        aEAModes[i++] = new E7();   // EAModePCValIndexByte();
        aEAModes[i++] = new E8();   // EAModePCValIndexWord();
        aEAModes[i++] = new E9();   // EAModePCValIndexLong();
        
        aEAModes[i++] = new E10();  // EAModeImmediateByte();       // must match EAMODEINDEX_IMMEDIATE_BYTE
        aEAModes[i++] = new E11();  // EAModeImmediateWord();       // must match EAMODEINDEX_IMMEDIATE_WORD
        aEAModes[i++] = new E12();  // EAModeImmediateLong();       // must match EAMODEINDEX_IMMEDIATE_LONG
        aEAModes[i++] = new EE();   // EAModeIllegal();             // must match EAMODEINDEX_IMMEDIATE_ILLEGAL
	
	    InitEAModeIndexes();
    }
    
    
    protected void DestroyModes()
    {
        aEAModes = null;
	    DestroyEAModeIndexes();
    }
    
    
    /*  All EAMode subclasses must implement the following abstract methods:
     *
     *  GetEA: calculate and set an effective address (ea)
     *  GetData: get data from the effective address (ea)
     *  SetData: set data at the effective address (ea)
     *  UpdateFlagZ: update Z flag
     *  UpdateFlagV: update V flag (WARNING: UpdateFlagZ must be called first)
     *
     *  The EAMode class already provides wrappers for combining the above methods
     *  into frequently-used operations (eg, GetEAData() instead of GetEA() + GetData()).
     */

    protected abstract class EA
    {
        int ea, mask, sign, width;
        byte cycle2l, cycle4l;
        byte cycle2ADI, cycle2Dl, cycle4Aw, cycle4AD, cycle2ADl, cycle4ADl;
        
        EA(int mask, int sign, int width, int type)
        {
            this.mask = mask;
            this.sign = sign;
            this.width = width;
            cycle2l = (byte)(type * 2);
            cycle4l = (byte)(type * 4);
            cycle2ADI = cycle2Dl = cycle4Aw = cycle4AD = cycle2ADl = cycle4ADl = 0;
        }

        abstract int GetEA(int nnn);
        abstract int GetData();
        abstract void SetData(int data);
        abstract void UpdateFlagZ(int data);
        abstract void UpdateFlagV();
        
        void AdvanceEA(int nnn) {
            int cSave = cCyclesDebug;
            GetEA(nnn);
            cCyclesDebug = cSave;
        }
        
        int GetEAData(int nnn) {
            GetEA(nnn);
            return GetData();
        }
        
        void SetEAData(int nnn, int data) {
            GetEA(nnn);
            SetData(data);
        }
        
        void UpdateFlagsZNClearCV(int data)
        {
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
        }
        
        void SetDataFlagsZNClearV(int data)
        {
            SetData(data);
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            flagVDst = 0;
            flagVNew = 0;
        }
        
        void SetDataFlagsZNClearCV(int data)
        {
            SetData(data);
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
        }
        
        void SetDataFlagsExceptXClearCV(int data)
        {
            SetData(data);
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
        }

        void SetEADataFlagsZNClearCV(int nnn, int data)
        {
            GetEA(nnn);
            SetData(data);
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
        }
        
        // The rest of the Flags functions require that both dataSrc and dataDst be set first

        void UpdateFlags(int data)
        {
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            UpdateFlagV();
            flagCSrc = flagXSrc = flagVSrc;
            flagCDst = flagXDst = flagVDst;
        }
        
        void UpdateFlagsExceptX(int data)
        {
            UpdateFlagZ(data);
            flagNNew = flagZNew;
            UpdateFlagV();
            flagCSrc = flagVSrc;
            flagCDst = flagVDst;
        }
        
        void SetDataFlags(int data)
        {
            SetData(data);
            UpdateFlags(data);
        }

        void SetDataFlagsForAdd(int data)
        {
            SetData(data);
            UpdateFlags(data);
            flagVSrc = ~flagVSrc;
            flagCDst = flagXDst = ~flagCDst;
        }

    }
    
    
    protected class EE /*EAModeIllegal*/ extends EA {
        EE() {
            super(0, 0, 0, 0);
        }
        int GetEA(int nnn) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
            return 0;
        }
        int GetData() {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
            return 0;
        }
        void SetData(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagZ(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagV() {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
    }


    protected class EB /*EAModeDRegByte*/ extends EA {
        EB() {
            super(0xff, 0x80, 8, 0);
            cycle2ADI = 2;
            cycle4AD = 4;
        }
        int GetEA(int nnn) {
            return ea = nnn;
        }
        int GetData() {
            return (byte)d[ea];
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            return (byte)d[ea = nnn];
        }
        void SetData(int data) {
            d[ea] = (d[ea] & ~0xff) | (data & 0xff);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
	    final void SetEADataFlagsZNClearCV(int nnn, int data) { // overrides default method, for speed
		    ea = nnn;
		    d[ea] = (d[ea] & ~0xff) | (data & 0xff);
            flagZNew = (byte)data;
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
	    }
    }
    protected class EC /*EAModeDRegWord*/ extends EA {
        EC() {
            super(0xffff, 0x8000, 16, 0);
            cycle2ADI = 2;
            cycle4AD = 4;
        }
        int GetEA(int nnn) {
            return ea = nnn;
        }
        int GetData() {
            return (short)d[ea];
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            return (short)d[ea = nnn];
        }
        void SetData(int data) {
            d[ea] = (d[ea] & ~0xffff) | (data & 0xffff);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
	    final void SetEADataFlagsZNClearCV(int nnn, int data) { // overrides default method, for speed
		    ea = nnn;
            d[ea] = (d[ea] & ~0xffff) | (data & 0xffff);
            flagZNew = (short)data;
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
	    }
    }
    protected class ED /*EAModeDRegLong*/ extends EA {
        ED() {
            super(0xffffffff, 0x80000000, 32, 1);
            cycle2Dl = cycle2ADI = cycle2ADl = 2;
            cycle4AD = cycle4ADl = 4;
        }
        int GetEA(int nnn) {
            return ea = nnn;
        }
        int GetData() {
            return d[ea];
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            return d[ea = nnn];
        }
        void SetData(int data) {
            d[ea] = data;
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
	    final void SetEADataFlagsZNClearCV(int nnn, int data) { // overrides default method, for speed
		    ea = nnn;
            d[ea] = data;
            flagZNew = data;
            flagNNew = flagZNew;
            flagVNew = flagVDst = 0;
            flagCSrc = flagCDst = 0;
	    }
    }


    protected class EF /*EAModeARegWord*/ extends EA {
        EF() {
            super(0xffff, 0x8000, 16, 0);
            cycle2ADI = 2;
            cycle4Aw = cycle4AD = 4;
        }
        int GetEA(int nnn) {
            return ea = nnn;
        }
        int GetData() {
            return (short)a[ea];        // do sign-extension, not masking (just like the CPUMem subsystem)
        }
        void SetData(int data) {
            a[ea] = data;               // NOTE: the entire A register is always updated, and byte operations are illegal
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EG /*EAModeARegLong*/ extends EA {
        EG() {
            super(0xffffffff, 0x80000000, 32, 1);
            cycle2ADI = cycle2ADl = 2;
            cycle4AD = cycle4ADl = 4;
        }
        int GetEA(int nnn) {
            return ea = nnn;
        }
        int GetData() {
            return a[ea];
        }
        void SetData(int data) {
            a[ea] = data;
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
        final void SetEAData(int nnn, int data) {               // overrides default method, for speed
            a[ea = nnn] = data;
        }
    }


    protected class EH /*EAModeAValByte*/ extends EA {
        EH() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            return ea = a[nnn];
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class EI /*EAModeAValWord*/ extends EA {
        EI() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            return ea = a[nnn];
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EJ /*EAModeAValLong*/ extends EA {
        EJ() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = a[nnn];
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class EK /*EAModeAValIncByte*/ extends EA {
        EK() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            ea = a[nnn];
            a[nnn] += aByteInc[nnn];
            return ea;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class EL /*EAModeAValIncWord*/ extends EA {
        EL() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            ea = a[nnn];
            a[nnn] += 2;
            return ea;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EM /*EAModeAValIncLong*/ extends EA {
        EM() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            ea = a[nnn];
            a[nnn] += 4;
            return ea;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class EN /*EAModeAValDecByte*/ extends EA {
        EN() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4); // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
            a[nnn] -= aByteInc[nnn];
            return ea = a[nnn];
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class EO /*EAModeAValDecWord*/ extends EA {
        EO() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4); // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
            a[nnn] -= 2;
            return ea = a[nnn];
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EP /*EAModeAValDecLong*/ extends EA {
        EP() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8); // BUGBUG: 10 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
            a[nnn] -= 4;
            return ea = a[nnn];
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class EQ /*EAModeAValDispByte*/ extends EA {
        EQ() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = a[nnn] + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class ER /*EAModeAValDispWord*/ extends EA {
        ER() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = a[nnn] + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class ES /*EAModeAValDispLong*/ extends EA {
        ES() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(12);
            return ea = a[nnn] + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class ET /*EAModeAValIndexByte*/ extends EA {
        ET() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(10);
            return ea = GetIndexAddr(a[nnn]);
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class EU /*EAModeAValIndexWord*/ extends EA {
        EU() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(10);
            return ea = GetIndexAddr(a[nnn]);
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EV /*EAModeAValIndexLong*/ extends EA {
        EV() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(14);
            return ea = GetIndexAddr(a[nnn]);
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class EW /*EAModeAbs16Byte*/ extends EA {
        EW() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class EX /*EAModeAbs16Word*/ extends EA {
        EX() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class EY /*EAModeAbs16Long*/ extends EA {
        EY() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(12);
            return ea = GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class E1 /*EAModeAbs32Byte*/ extends EA {
        E1() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(12);
            return ea = GetPCLong();
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class E2 /*EAModeAbs32Word*/ extends EA {
        E2() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(12);
            return ea = GetPCLong();
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class E3 /*EAModeAbs32Long*/ extends EA {
        E3() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(16);
            return ea = GetPCLong();
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class E4 /*EAModePCValDispByte*/ extends EA {
        E4() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = pc + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class E5 /*EAModePCValDispWord*/ extends EA {
        E5() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            return ea = pc + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class E6 /*EAModePCValDispLong*/ extends EA {
        E6() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(12);
            return ea = pc + GetPCWord();
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class E7 /*EAModePCValIndexByte*/ extends EA {
        E7() {
            super(0xff, 0x80, 8, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(10);
            return ea = GetIndexAddr(pc);
        }
        void AdvanceEA(int nnn) {
            ea += 1;
        }
        int GetData() {
            return GetByte(ea);
        }
        void SetData(int data) {
            SetByte(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (byte)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (byte)dataDst;
            flagVSrc = (byte)dataSrc;
        }
    }
    protected class E8 /*EAModePCValIndexWord*/ extends EA {
        E8() {
            super(0xffff, 0x8000, 16, 0);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(10);
            return ea = GetIndexAddr(pc);
        }
        void AdvanceEA(int nnn) {
            ea += 2;
        }
        int GetData() {
            return GetWord(ea);
        }
        void SetData(int data) {
            SetWord(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = (short)data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = (short)dataDst;
            flagVSrc = (short)dataSrc;
        }
    }
    protected class E9 /*EAModePCValIndexLong*/ extends EA {
        E9() {
            super(0xffffffff, 0x80000000, 32, 1);
        }
        int GetEA(int nnn) {
            AddCycles_Debug(14);
            return ea = GetIndexAddr(pc);
        }
        void AdvanceEA(int nnn) {
            ea += 4;
        }
        int GetData() {
            return GetLong(ea);
        }
        void SetData(int data) {
            SetLong(ea, data);
        }
        void UpdateFlagZ(int data) {
            flagZNew = data;
        }
        void UpdateFlagV() {
            flagVNew = flagZNew;
            flagVDst = dataDst;
            flagVSrc = dataSrc;
        }
    }


    protected class E10 /*EAModeImmediateByte*/ extends EA {
        E10() {
            super(0xff, 0x80, 8, 0);
            cycle2ADI = 2;
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            ea = pc+1;
            pc += 2;
            return ea;
        }
        int GetData() {
            return GetByte(ea);
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            AddCycles_Debug(4);
            ea = pc+1;
            return (byte)GetPCWord();
        }
        void SetData(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagZ(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagV() {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
    }
    protected class E11 /*EAModeImmediateWord*/ extends EA {
        E11() {
            super(0xffff, 0x8000, 16, 0);
            cycle2ADI = 2;
        }
        int GetEA(int nnn) {
            AddCycles_Debug(4);
            ea = pc;
            pc += 2;
            return ea;
        }
        int GetData() {
            return GetWord(ea);
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            AddCycles_Debug(4);
            ea = pc;
            return GetPCWord();
        }
        void SetData(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagZ(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagV() {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
    }
    protected class E12 /*EAModeImmediateLong*/ extends EA {
        E12() {
            super(0xffffffff, 0x80000000, 32, 1);
            cycle2ADI = 2;
        }
        int GetEA(int nnn) {
            AddCycles_Debug(8);
            ea = pc;
            pc += 4;
            return ea;
        }
        int GetData() {
            return GetLong(ea);
        }
        final int GetEAData(int nnn) {                          // overrides default method, for speed
            AddCycles_Debug(8);
            ea = pc;
            return GetPCLong();
        }
        void SetData(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagZ(int data) {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
        void UpdateFlagV() {
            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
        }
    }


    private int GetIndexAddr(int base)
    {
        int addr = GetPCWord();
        int i = (addr & 0x7000) >> 12;
        
        if ((addr & 0x0800) != 0)
            if ((addr & 0x8000) != 0)
                return base + a[i] + (byte)addr;
            else
                return base + d[i] + (byte)addr;
        else
            if ((addr & 0x8000) != 0)
                return base + (short)a[i] + (byte)addr;
            else
                return base + (short)d[i] + (byte)addr;
    }

}
