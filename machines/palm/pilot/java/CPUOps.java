/*  CPUOps.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates all the opcode execution logic for the CPU.
 */


class CPUOps extends CPUModes
{
    /*  ExecuteOpcodes()
     *
     *  Returns the number of unexecuted instructions (0 if it executed all the requested instructions).
     */
    protected int ExecuteOpcodes(int cExecute)
    {
        int op1, op2, ss, rrr, nnn, iModeSrc, iModeDst, cbits;
        
        while (cExecute-- > 0) {
            
#if DEBUG
            int cCyclesCur = cCyclesDebug;      // make sure the next opcode generates a non-zero cycle count
#endif
            pc1 = pc0;                          // save previously current opcode address
            pc0 = pc;                           // and update currently current opcode address
            op1 = GetPCWord();                  // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)
            
            ss = 0;                             // (ssBYTE << 6)
            nnn = op1 & 0x7;
            rrr = (op1 >> 9) & 0x7;

stage1:     switch ((op1 >> 12) & 0xf) {
                
            case 0x0:
                //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn, p.258]
                //  case 0x003c:   ori      [0000000000111100, format none,             p.260]
                //  case 0x007c:   ori      [0000000001111100, format none,             p.482]
                //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn, p.166]
                //  case 0x0108:   movep    [0000rrr100001nnn, format none,             p.236]
                //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0148:   movep    [0000rrr101001nnn, format none,             p.236]
                //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x0188:   movep    [0000rrr110001nnn, format none,             p.236]
                //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x01c8:   movep    [0000rrr111001nnn, format none,             p.236]
                //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn, p.123]
                //  case 0x023c:   andi     [0000001000111100, format none,             p.125]
                //  case 0x027c:   andi     [0000001001111100, format none,             p.457]
                //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn, p.284]
                //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn, p.114]
                //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn, p.166]
                //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn, p.207]
                //  case 0x0a3c:   eori     [0000101000111100, format none,             p.209]
                //  case 0x0a7c:   eori     [0000101001111100, format none,             p.465]
                //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn, p.184]
                
                iModeSrc = EAMODEINDEX_DREG_LONG;
                
                switch ((op1 >> 8) & 0xf) {
                    
                case 0x0:
                    //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn, p.258]
                    //  case 0x003c:   ori      [....000000111100, format none,             p.260]
                    //  case 0x007c:   ori      [....000001111100, format none,             p.482]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        if (op1 == 0 && dataSrc == 0) {
                            // BUGBUG: This isn't really an illegal instruction, but it probably
                            // wouldn't be found under normal circumstances, so let's help ourselves
                            // out by flagging it as an illegal instruction for now.... -JP
                            GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                        }
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV(dataDst | dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        SetORFlags((byte)dataSrc);
                        AddCycles_Debug(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        SetORFlags(dataSrc);
                        AddCycles_Debug(20);
                    }
                    else
                        GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;
                    
                case 0x2:
                    //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn, p.123]
                    //  case 0x023c:   andi     [....001000111100, format none,             p.125]
                    //  case 0x027c:   andi     [....001001111100, format none,             p.457]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV(dataDst & dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2Dl);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        SetANDFlags((byte)dataSrc);
                        AddCycles_Debug(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        SetANDFlags(dataSrc);
                        AddCycles_Debug(20);
                    }
                    else
                        GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;
                    
                case 0x4:
                    //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn, p.284]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlags(dataDst - dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;
                    
                case 0x6:
                    //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn, p.114]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlagsForAdd(dataDst + dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;
                    
                case 0x8:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                    iModeSrc = EAMODEINDEX_IMMEDIATE_WORD;
                    rrr = 0;
                    break;
                    
                case 0xa:
                    //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn, p.207]
                    //  case 0x0a3c:   eori     [....101000111100, format none,             p.209]
                    //  case 0x0a7c:   eori     [....101001111100, format none,             p.465]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV(dataDst ^ dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        SetEORFlags((byte)dataSrc);
                        AddCycles_Debug(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        SetEORFlags(dataSrc);
                        AddCycles_Debug(20);
                    }
                    else
                        GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;
                    
                case 0xc:
                    //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn, p.184]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_IMMEDIATE];
                    dataSrc = eaModeSrc.GetEAData(0);
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.UpdateFlagsExceptX(dataDst - dataSrc);
                    AddCycles_Debug(4 + eaModeDst.cycle2Dl);
                    break stage1;
                    
                case 0xe:
                    GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;
                    
                case 0x1:
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0108:   movep    [....rrr100001nnn, format none,             p.236]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none,             p.236]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none,             p.236]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none,             p.236]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }
                
                if ((op1 & 0x0038) == 0x0008) {
                    //  case 0x0108:   movep    [....rrr100001nnn, format none, p.236]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none, p.236]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none, p.236]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none, p.236]
                    GenerateException(EXCEPTION_UNSUPP_INSTRUCTION);
                    AddCycles_Debug(16 + eaModeDRegLong.cycle4l*2);
                }
                else {
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    eaModeSrc = aEAModes[iModeSrc];
                    dataSrc = eaModeSrc.GetEAData(rrr);
                    if ((op1 & 0x0038) == 0x0000) {
                        dataSrc = (1 << (dataSrc & 31));
                        eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                        dataDst = eaModeDst.GetEAData(nnn);
                    }
                    else {
                        dataSrc = (1 << (dataSrc & 7));
                        if ((op1 & 0x00c0) == 0)
                            eaModeDst = aEAModes[abModes401[op1 & 0x3f]];       // +(ssBYTE << 6)
                        else
                            eaModeDst = aEAModes[abModes407[op1 & 0x3f]];       // +(ssBYTE << 6)
                        dataDst = eaModeDst.GetEAData(nnn);
                    }
                    switch ((op1 >> 6) & 0x3) {
                    case 0:
                        //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                        eaModeDst.UpdateFlagZ(dataDst & dataSrc);
                        AddCycles_Debug(4 + (iModeSrc == EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;
                    case 1:
                        //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                        eaModeDst.SetData(dataDst ^ dataSrc);
                        eaModeDst.UpdateFlagZ(dataDst & dataSrc);
                        AddCycles_Debug(8 + (iModeSrc == EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;

                    case 2:
                        //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                        eaModeDst.SetData(dataDst & ~dataSrc);
                        eaModeDst.UpdateFlagZ(dataDst & dataSrc);
                        AddCycles_Debug(8 + (iModeSrc == EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;
                        
                    case 3:
                        //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                        eaModeDst.SetData(dataDst | dataSrc);
                        eaModeDst.UpdateFlagZ(dataDst & dataSrc);
                        AddCycles_Debug(8 + (iModeSrc == EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;
                    }
                }
                break stage1;
                
            case 0x2:
                ss += 0x40;     // fall through...
                
            case 0x3:
                ss += 0x40;     // fall through...
                
            case 0x1:
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                eaModeSrc = aEAModes[abModes000[ss + (op1 & 0x3f)]];
                dataSrc = eaModeSrc.GetEAData(nnn);
                if ((op1 & 0x01c0) != 0x0040) {
                    //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                    eaModeDst = aEAModes[abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                    eaModeDst.SetEADataFlagsZNClearCV(rrr, dataSrc);
                    AddCycles_Debug(4);
                }
                else {
                    //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                    a[rrr] = dataSrc;
                    AddCycles_Debug(4);
                }
                break stage1;

            case 0x4:
                //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn, p.250]
                //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn, p.230]
                //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
                //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn, p.178]
                //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn, p.226]
                //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn, p.248]
                //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn, p.228]
                //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn, p.253]
                //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn, p.474]
                //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn, p.246]
                //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn, p.264]
                //  case 0x4840:   swap     [0100100001000nnn, format none,             p.290]
                //  case 0x4880:   ext      [0100100010000nnn, format none,             p.211]
                //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [0100100011000nnn, format none,             p.211]
                //  case 0x49c0:   ext      [0100100111000nnn, format none,             p.211]
                //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn, p.297]
                //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn, p.291]
                //  case 0x4afc:   illegal  [0100101011111100, format none,             p.212]
                //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
                //  case 0x4e40:   trap     [010011100100vvvv, format none,             p.293]
                //  case 0x4e50:   link     [0100111001010nnn, format none,             p.216]
                //  case 0x4e58:   unlk     [0100111001011nnn, format none,             p.299]
                //  case 0x4e60:   move     [0100111001100nnn, format none,             p.476]
                //  case 0x4e68:   move     [0100111001101nnn, format none,             p.476]
                //  case 0x4e70:   reset    [0100111001110000, format none,             p.538]
                //  case 0x4e71:   nop      [0100111001110001, format none,             p.253]
                //  case 0x4e72:   stop     [0100111001110010, format none,             p.540]
                //  case 0x4e73:   rte      [0100111001110011, format none,             p.539]
                //  case 0x4e75:   rts      [0100111001110101, format none,             p.274]
                //  case 0x4e76:   trapv    [0100111001110110, format none,             p.296]
                //  case 0x4e77:   rtr      [0100111001110111, format none,             p.273]
                //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn, p.214]
                //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn, p.213]
                
                switch ((op1 >> 8) & 0xf) {
                    
                case 0x0:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn, p.250]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        dataDst = 0;
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataSrc = eaModeDst.GetEAData(nnn) - GetFlagX();
                        flagZTmp = flagZNew;
                        eaModeDst.SetDataFlags(-dataSrc);
                        if (flagZNew == 0)
                            flagZNew = flagZTmp;
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE SR,%s
                        //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn, p.230]
                        eaModeDst = aEAModes[abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.SetEAData(nnn, GetFlags());
                        AddCycles_Debug(8 - eaModeDst.cycle2ADI);
                    }
                    break stage1;
                    
                case 0x2:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn, p.178]
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                      //dataDst = eaModeDst.GetEAData(nnn);         // technically, we're supposed to read the data from EA first,
                        eaModeDst.SetEADataFlagsZNClearCV(nnn, 0);  // even though all we're going to do is immediately overwrite it -JP
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE CCR,%s
                        //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn, p.226]
                        eaModeDst = aEAModes[abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.SetEAData(nnn, GetFlags() & FLAGS_CCR);
                        AddCycles_Debug(8 - eaModeDst.cycle2ADI);   // BUGBUG: Need to confirm this is the same as "MOVE SR,%s" -JP
                    }
                    break stage1;
                    
                case 0x4:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn, p.248]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        dataDst = 0;
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataSrc = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlags(-dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,CCR
                        //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn, p.228]
                        eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        SetFlags((byte)eaModeSrc.GetEAData(nnn));
                        AddCycles_Debug(12);
                    }
                    break stage1;
                    
                case 0x6:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn, p.253]
                        eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV(~dataDst);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,SR
                        //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn, p.474]
                        eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        SetFlags(eaModeSrc.GetEAData(nnn));
                        AddCycles_Debug(12);
                    }
                    break stage1;
                    
                case 0x8:
                    //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn, p.246]
                    //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn, p.264]
                    //  case 0x4840:   swap     [....100001000nnn, format none,             p.290]
                    //  case 0x4880:   ext      [....100010000nnn, format none,             p.211]
                    //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                    //  case 0x48c0:   ext      [....100011000nnn, format none,             p.211]
                    switch ((op1 >> 6) & 0x3) {
                    case 0x0:
                        //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn, p.246]
                        GenerateException(EXCEPTION_UNSUPP_INSTRUCTION);
                        AddCycles_Debug(8 - eaModeDst.cycle2ADI);
                        break stage1;
                        
                    case 0x1:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4840:   swap     [........01000nnn, format none, p.290]
                            eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                            dataDst = eaModeDst.GetEAData(nnn);
                            eaModeDst.SetDataFlagsZNClearCV((dataDst >>> 16) | ((dataDst & 0xffff) << 16));
                            AddCycles_Debug(4);
                        }
                        else {
                            //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                            eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];// +(ssLONG << 6)
                            dataSrc = eaModeSrc.GetEA(nnn);
                            PushLong(dataSrc);          // aEAModes[EAMODEINDEX_AREG_PUSHLONG].SetEAData(7, dataSrc);
                            AddCycles_Debug(4);         // BUGBUG: approximate -JP
                        }
                        break stage1;
                        
                    case 0x2:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = aEAModes[EAMODEINDEX_DREG_WORD];
                            dataDst = eaModeDst.GetEAData(nnn);
                            eaModeDst.SetDataFlagsZNClearCV((byte)dataDst);
                            AddCycles_Debug(4);
                            break stage1;
                        }
                        
                    case 0x3:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                            dataDst = eaModeDst.GetEAData(nnn);
                            eaModeDst.SetDataFlagsZNClearCV((short)dataDst);
                            AddCycles_Debug(4);
                            break stage1;
                        }
                    }
                    //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                    //  NOTES: 1) This is a register-to-memory operation
                    //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                    //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         4) Any register used in pre-decrement mode is stored before being decremented
                    iModeSrc = GetPCWord();
                    eaModeDst = aEAModes[abModesD07[(op1 - 0x40) & 0xff]];
                    int cregs = 0;
                    int reg = a[nnn];
                    eaModeDst.GetEA(nnn);
                    int iMask = 0x1;
                    if ((op1 & 0x38) == 0x20) {
                        // Pre-decrement (NOTE: If the address register used in pre-decrement mode is also
                        // one of the source operands, the 68000 writes the register's initial value, not its
                        // decremented value, hence it's important that we call SetEAData(a[i]) instead of
                        // GetEA() followed by SetData(a[i]) -JP)
                        for (int i=7; i>=0; i--,iMask<<=1)
                            if ((iModeSrc & iMask) != 0) {
                                if (cregs++ != 0) {
                                    reg = a[nnn];
                                    eaModeDst.AdvanceEA(nnn);
                                }
                                if (i != nnn)
                                    reg = a[i];
                                eaModeDst.SetData(reg);
                            }
                        for (int i=7; i>=0; i--,iMask<<=1)
                            if ((iModeSrc & iMask) != 0) {
                                if (cregs++ != 0)
                                    eaModeDst.AdvanceEA(nnn);
                                eaModeDst.SetData(d[i]);
                            }
                        if (cregs == 0)
                            a[nnn] = reg;
                    }
                    else {
                        // All other modes
                        for (int i=0; i<=7; i++,iMask<<=1)
                            if ((iModeSrc & iMask) != 0) {
                                if (cregs++ != 0)
                                    eaModeDst.AdvanceEA(nnn);
                                eaModeDst.SetData(d[i]);
                            }
                        for (int i=0; i<=7; i++,iMask<<=1)
                            if ((iModeSrc & iMask) != 0) {
                                if (cregs++ != 0)
                                    eaModeDst.AdvanceEA(nnn);
                                eaModeDst.SetData(a[i]);
                            }
                    }
                    AddCycles_Debug((4+eaModeDst.cycle4l)*cregs);
                    break stage1;
                    
                case 0xa:
                    if ((op1 & 0xc0) != 0xc0) {
                        //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn, p.297]
                        eaModeDst = aEAModes[abModes000[op1 & 0xff]];
                        eaModeDst.UpdateFlagsZNClearCV(eaModeDst.GetEAData(nnn));
                        AddCycles_Debug(4);
                    }
                    else if ((op1 & 0x3f) != 0x3c) {
                        //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn, p.291]
                        eaModeDst = aEAModes[abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.UpdateFlagsZNClearCV(dataSrc);
                        eaModeDst.SetData(dataSrc | 0x80);
                        AddCycles_Debug(14 - eaModeDst.cycle2ADI*5);
                    }
                    else {
                        //  case 0x4afc:   illegal  [........11111100, format none, p.212]
                        GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;
                    
                case 0xc:
                    //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                    //  NOTES: 1) This is a memory-to-register operation
                    //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                    iModeDst = GetPCWord();
                    iModeSrc = op1 & 0x38;
                    eaModeSrc = aEAModes[abModesC81[(op1 - 0x40) & 0xff]];
                    cregs = 0;
                    reg = a[nnn];
                    eaModeSrc.GetEA(nnn);
                    iMask = 0x1;
                    for (int i=0; i<=7; i++,iMask<<=1)
                        if ((iModeDst & iMask) != 0) {
                            if (cregs++ != 0)
                                eaModeSrc.AdvanceEA(nnn);
                            d[i] = eaModeSrc.GetData();
                        }
                    for (int i=0; i<=7; i++,iMask<<=1)
                        if ((iModeDst & iMask) != 0) {
                            if (cregs++ != 0)
                                eaModeSrc.AdvanceEA(nnn);
                            op2  = eaModeSrc.GetData();
                            if (iModeSrc != 0x18 || i != nnn)   // if mode is "A[i]+" and i == nnn, then we must not set A[i]
                                a[i] = op2;
                        }
                    if (cregs == 0)
                        a[nnn] = reg;
                    AddCycles_Debug(4 + (4+eaModeDst.cycle4l)*cregs);
                    break stage1;

                case 0xe:
                    switch ((op1 >> 4) & 0xf) {
                    case 0x4:
                        //  case 0x4e40:   trap     [........0100vvvv, format none, p.293]
                        if (debugger != null) {
                            if (debugger.Break(pc0, true)) {    // see if the debugger wants us to break
                                pc = pc0;
                                fCPU |= CPU_BREAKPOINT;
                                return cExecute + 1;
                            }
                        }
                        pcTrap = pc0;                   // keep track the last trap encountered
                        CallException((op1 & 0xf) + 0x20);
                        AddCycles_Debug(34);
                        break stage1;
                        
                    case 0x5:
                        if ((op1 & 0x8) == 0) {
                            //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                            PushLong(a[nnn]);           // aEAModes[EAMODEINDEX_AREG_PUSHLONG].SetEAData(7, a[nnn]);
                            a[nnn] = a[7];
                            a[7] += GetPCWord();        // aEAModes[EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0);
                            AddCycles_Debug(16);
                        }
                        else {
                            //  case 0x4e58:   unlk     [........01011nnn, format none, p.299]
                            op2 = a[7]; // this is strictly for MarkDataAccess's benefit (see below)
                            a[7] = a[nnn];
                            a[nnn] = PopLong();
                            AddCycles_Debug(12);
                            if (debugger != null) {
                                // Mark the entire frame just removed as "uninitialized", to
                                // help catch more errors.  There are other places where it might
                                // be nice to do this as well, like after we've returned to the
                                // caller and he's removed his args from the stack with an "ADD #xxx,A7",
                                // but we don't want to slow things down *too* much.... -JP
                                debugger.MarkDataAccess(op2, a[7]-op2, DebuggerInterface.DATAACCESS_UNINIT);
                            }
                        }
                        break stage1;
                        
                    case 0x6:
                        //  case 0x4e60:   move     [........01100nnn, format none, p.476]
                        //  case 0x4e68:   move     [........01101nnn, format none, p.476]
                        if ((flags & FLAGS_SU) == 0) {
                            GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
                            break stage1;
                        }
                        if ((op1 & 0x8) == 0)
                            usp = a[nnn];
                        else
                            a[nnn] = usp;
                        AddCycles_Debug(4);
                        break stage1;
                        
                    case 0x7:
                        switch (op1 & 0xf) {
                        case 0x0:
                            //  case 0x4e70:   reset    [........01110000, format none, p.538]
                            GenerateException(EXCEPTION_UNSUPP_INSTRUCTION);
                            AddCycles_Debug(132);
                            break stage1;
                        
                        case 0x1:
                            //  case 0x4e71:   nop      [........01110001, format none, p.253]
                            AddCycles_Debug(4);
                            break stage1;
                        
                        case 0x2:
                            //  case 0x4e72:   stop     [........01110010, format none, p.540]
                            if ((flags & FLAGS_SU) == 0) {
                                GenerateException(EXCEPTION_PRIVILEGE_VIOLATION);
                                break stage1;
                            }
                            op2 = GetPCWord() & 0xffff;
                            // Check for OP_STOP_TRACE, OP_STOP_FREEZE, OP_STOP_INJECT
                            if (op2 < (OP_STOP_TRACE & 0xffff)) {
                                SetFlags(op2);
                            }
                            else {
                                // The definition of both OP_STOP_FREEZE and OP_STOP_INJECT is to reset
                                // the stack to PC, and then pop the next 'long' into PC.  This effectively
                                // "returns" us from a call injected by ScriptVarFunc.Call().
                                a[7] = pc;
                                pc = PopLong();
                                
                                // OP_STOP_FREEZE also means that since the CPU was frozen at the time of
                                // the injection, that we should re-freeze the CPU now.  We're not really allowed
                                // to set CPU_FREEZE ourselves (that bit is "owned" by CPUThread), but setting
                                // CPU_FREEZEONSTOP should be good enough, since we're also setting CPU_STOPPED....
                                if (op2 == (OP_STOP_TRACE & 0xffff))
                                    fCPU |= CPU_TRACEONSTOP;
                                else if (op2 == (OP_STOP_FREEZE & 0xffff))
                                    fCPU |= CPU_FREEZEONSTOP;
                            }
                            fCPU |= CPU_STOPPED;
                            AddCycles_Debug(4);
                            break stage1;
                        
                        case 0x3:
                            //  case 0x4e73:   rte      [........01110011, format none, p.539]
                            ReturnFromException();
                            AddCycles_Debug(20);
                            break stage1;
                    
                        case 0x5:
                            //  case 0x4e75:   rts      [........01110101, format none, p.274]
                            pc = PopLong();     // aEAModes[EAMODEINDEX_AREG_POPLONG].GetEAData(7);
                            AddCycles_Debug(16);
                            break stage1;
                        
                        case 0x6:
                            //  case 0x4e76:   trapv    [........01110110, format none, p.296]
                            if (GetFlagV() != 0) {
                                GenerateException(EXCEPTION_TRAPV_OVERFLOW);
                                AddCycles_Debug(34);
                                break stage1;
                            }
                            AddCycles_Debug(4);
                            break stage1;
                        
                        case 0x7:
                            //  case 0x4e77:   rtr      [........01110111, format none, p.273]
                            SetFlags((byte)aEAModes[EAMODEINDEX_AREG_INCWORD].GetEAData(7));
                            pc = PopLong();     // aEAModes[EAMODEINDEX_AREG_POPLONG].GetEAData(7);
                            AddCycles_Debug(20);
                            break stage1;
                            
                        case 0x8:
                        case 0x9:
                        case 0xa:
                        case 0xb:
                        case 0xc:
                        case 0xd:
                        case 0xe:
                        case 0xf:
                            break;              // end up at GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION)
                        }
                        
                    case 0x8:
                    case 0x9:
                    case 0xa:
                    case 0xb:
                        //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
                        eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        dataSrc = eaModeSrc.GetEA(nnn);
                        PushLong(pc);       // aEAModes[EAMODEINDEX_AREG_PUSHLONG].SetEAData(7, pc);
                        pc = dataSrc;
                        AddCycles_Debug(6); // BUGBUG: approximate -JP
                        break stage1;
                        
                    case 0xc:
                    case 0xd:
                    case 0xe:
                    case 0xf:
                        //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
                        eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        pc = eaModeSrc.GetEA(nnn);
                        break stage1;
                    }
                    GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;

                case 0x1:
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    if ((op1 & 0x00f8) == 0x00c0) {
                        //  case 0x49c0:   ext      [....100111000nnn, format none, p.211]
                        eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV((byte)dataDst);
                        AddCycles_Debug(4);
                        break stage1;
                    }
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }
                
                if ((op1 & 0x00c0) == 0x0080) {
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    dataDst = (short)d[rrr];
                    if (dataDst < 0) {
                        SetFlagN(-1);
                        GenerateException(EXCEPTION_CHK_INSTRUCTION);
                        AddCycles_Debug(40);
                    }
                    else if (dataDst > dataSrc) {
                        SetFlagN(0);
                        GenerateException(EXCEPTION_CHK_INSTRUCTION);
                        AddCycles_Debug(40);
                    }
                    else
                        AddCycles_Debug(10);
                }
                else {
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    eaModeSrc = aEAModes[abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                    a[rrr] = eaModeSrc.GetEA(nnn);
                }
                break stage1;
                
            case 0x5:
                //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn, p.286]
                if ((op1 & 0x00c0) != 0x00c0) {
                    dataSrc = aByteQuick[rrr];
                    iModeDst = op1 & 0xf8;
                    if (iModeDst == 0x48 || iModeDst == 0x88) {     // EAMODEINDEX_AREG_WORD or EAMODEINDEX_AREG_LONG
                        if ((op1 & 0x0100) == 0x0000) {             // affects entire A register and does not affect flags
                            a[nnn] += dataSrc;
                            AddCycles_Debug(8);                     // BUGBUG: For word accesses, table 8.5 says this is only 4 cycles (but only for ADDQ, not SUBQ) -JP
                        }
                        else {
                            a[nnn] -= dataSrc;
                            AddCycles_Debug(8);
                        }
                        break stage1;
                    }
                    eaModeDst = aEAModes[abModes007[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    if ((op1 & 0x0100) == 0x0000) {
                        //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                        eaModeDst.SetDataFlagsForAdd(dataDst + dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else {
                        //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn. p.286]
                        eaModeDst.SetDataFlags(dataDst - dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD + eaModeDst.cycle4Aw);
                    }
                }
                else {
                    if ((op1 & 0x0038) != 0x0008) {
                        //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                        eaModeDst = aEAModes[abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        eaModeDst.GetEA(nnn);
                        op2 = 0;                // prevent "used before initialization" warning
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // ST
                            op2 = -1;
                            break;
                        case 0x1:               // SF
                            op2 = 0;
                            break;
                        case 0x2:               // SHI
                            op2 = GetFlagHI();
                            break;
                        case 0x3:               // SLS
                            op2 = ~GetFlagHI();
                            break;
                        case 0x4:               // SCC
                            op2 = ~GetFlagC();
                            break;
                        case 0x5:               // SCS
                            op2 = GetFlagC();
                            break;
                        case 0x6:               // SNE
                            op2 = ~GetFlagZ();
                            break;
                        case 0x7:               // SEQ
                            op2 = GetFlagZ();
                            break;
                        case 0x8:               // SVC
                            op2 = ~GetFlagV();
                            break;
                        case 0x9:               // SVS
                            op2 = GetFlagV();
                            break;
                        case 0xa:               // SPL
                            op2 = ~GetFlagN();
                            break;
                        case 0xb:               // SMI
                            op2 = GetFlagN();
                            break;
                        case 0xc:               // SGE
                            op2 = GetFlagGE();
                            break;
                        case 0xd:               // SLT
                            op2 = GetFlagLT();
                            break;
                        case 0xe:               // SGT
                            op2 = GetFlagGT();
                            break;
                        case 0xf:               // SLE
                            op2 = GetFlagLE();
                            break;
                        }
                        eaModeDst.SetData(op2);
                        AddCycles_Debug(8 - eaModeDst.cycle2ADI - (op2 == 0? eaModeDst.cycle2ADI : 0));
                        break stage1;
                    }
                    else {
                        //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                        int fCond = -1;
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // BUGBUG: Valid? -JP
                          //fCond = -1;
                            break;
                        case 0x1:               // DBRA
                            fCond = 0;
                            break;
                        case 0x2:               // DBHI
                            fCond = GetFlagHI();
                            break;
                        case 0x3:               // DBLS
                            fCond = GetFlagHI()+1;
                            break;
                        case 0x4:               // DBCC
                            fCond = GetFlagC()+1;
                            break;
                        case 0x5:               // DBCS
                            fCond = GetFlagC();
                            break;
                        case 0x6:               // DBNE
                            fCond = GetFlagZ()+1;
                            break;
                        case 0x7:               // DBEQ
                            fCond = GetFlagZ();
                            break;
                        case 0x8:               // DBVC
                            fCond = GetFlagV()+1;
                            break;
                        case 0x9:               // DBVS
                            fCond = GetFlagV();
                            break;
                        case 0xa:               // DBPL
                            fCond = GetFlagN()+1;
                            break;
                        case 0xb:               // DBMI
                            fCond = GetFlagN();
                            break;
                        case 0xc:               // DBGE
                            fCond = GetFlagGE();
                            break;
                        case 0xd:               // DBLT
                            fCond = GetFlagLT();
                            break;
                        case 0xe:               // DBGT
                            fCond = GetFlagGT();
                            break;
                        case 0xf:               // DBLE
                            fCond = GetFlagLE();
                            break;
                        }
                        dataSrc = GetPCWord() - 2;      // aEAModes[EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                        if (fCond == 0) {
                            
                            /* The DBcc instructions are hard-coded to decrement ONLY the low-order
                             * 16 bits of the data register, so we need both of the following lines, not
                             * simply "dataDst = --d[nnn]"...
                             */
                            dataDst = (short)d[nnn] - 1;
                            d[nnn] = (d[nnn] & ~0xffff) | (dataDst & 0xffff);
                                
                            if (dataDst != -1) {
                                pc += dataSrc;
                                AddCycles_Debug(10);
                            }
                            else
                                AddCycles_Debug(14);
                        }
                        else
                            AddCycles_Debug(12);
                        break stage1;
                    }
                }
                break;
                
            case 0x6:
                //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd, p.130]
                //  case 0x6100:   bsr      [01100001dddddddd, format none,             p.164]
                int fCond = -1;
                dataSrc = (byte)op1;
                op2 = 0;
                if (dataSrc == 0) {
                    dataSrc = GetPCWord() - 2;          // aEAModes[EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                    op2 = 4;
                }
                
                switch ((op1 >> 8) & 0xf) {
                case 0x0:               // BRA
                  //fCond = -1;
                    break;
                case 0x1:               // BSR
                    PushLong(pc);       // aEAModes[EAMODEINDEX_AREG_PUSHLONG].SetEAData(7, pc);
                    pc += dataSrc;
                    AddCycles_Debug(18);
                    break stage1;
                case 0x2:               // BHI
                    fCond = GetFlagHI();
                    break;
                case 0x3:               // BLS
                    fCond = GetFlagHI()+1;
                    break;
                case 0x4:               // BCC
                    fCond = GetFlagC()+1;
                    break;
                case 0x5:               // BCS
                    fCond = GetFlagC();
                    break;
                case 0x6:               // BNE
                    fCond = GetFlagZ()+1;
                    break;
                case 0x7:               // BEQ
                    fCond = GetFlagZ();
                    break;
                case 0x8:               // BVC
                    fCond = GetFlagV()+1;
                    break;
                case 0x9:               // BVS
                    fCond = GetFlagV();
                    break;
                case 0xa:               // BPL
                    fCond = GetFlagN()+1;
                    break;
                case 0xb:               // BMI
                    fCond = GetFlagN();
                    break;
                case 0xc:               // BGE
                    fCond = GetFlagGE();
                    break;
                case 0xd:               // BLT
                    fCond = GetFlagLT();
                    break;
                case 0xe:               // BGT
                    fCond = GetFlagGT();
                    break;
                case 0xf:               // BLE
                    fCond = GetFlagLE();
                    break;
                }
                if (fCond != 0) {
                    pc += dataSrc;
                    AddCycles_Debug(10);
                }
                else
                    AddCycles_Debug(8 + op2);
                break stage1;
                
            case 0x7:
                //  case 0x7000:   moveq    [0111rrr0dddddddd, format none, p.239]
                eaModeDRegLong.SetEADataFlagsZNClearCV(rrr, (byte)op1);
                AddCycles_Debug(4);
                break stage1;
            
            case 0x8:
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                if ((op1 & 0x01f0) == 0x0100) {
                    //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                    GenerateException(EXCEPTION_UNSUPP_INSTRUCTION);
                    if ((op1 & 0x8) == 0)
                        AddCycles_Debug(6);
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x00c0) {
                    //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    dataSrc = eaModeSrc.GetEAData(nnn) & 0xffff;
                    if (dataSrc == 0) {
                        GenerateException(EXCEPTION_INT_DIVIDE_BY_ZERO);
                        AddCycles_Debug(38);
                    }
                    else {
                        eaModeDst = eaModeDRegLong;     // aEAModes[EAMODEINDEX_DREG_LONG];
                        dataDst = eaModeDst.GetEAData(rrr);
                        long longDst = dataDst & 0x00000000ffffffffL;
                        dataNew = (int)(longDst / dataSrc);
                        dataTmp = (int)(longDst % dataSrc);
                        if ((dataNew & 0xffff0000) != 0)
                            SetFlagV(-1);
                        else {
                            eaModeDst.SetData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.UpdateFlagsZNClearCV(dataNew);    // flags are based on quotient (dataNew), not the quotient+remainder combo
                        }
                        AddCycles_Debug(140);
                    }
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x01c0) {
                    //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    if (dataSrc == 0) {
                        GenerateException(EXCEPTION_INT_DIVIDE_BY_ZERO);
                        AddCycles_Debug(38);
                    }
                    else {
                        eaModeDst = eaModeDRegLong;     // aEAModes[EAMODEINDEX_DREG_LONG];
                        dataDst = eaModeDst.GetEAData(rrr);
                        dataNew = (dataDst / dataSrc);
                        dataTmp = (dataDst % dataSrc);
                        if ((dataNew & 0xffff0000) != 0 && (dataNew & 0xffff0000) != 0xffff0000)
                            SetFlagV(-1);
                        else {
                            eaModeDst.SetData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.UpdateFlagsZNClearCV(dataNew);    // flags are based on quotient (dataNew), not the quotient+remainder combo
                        }
                        AddCycles_Debug(158);
                    }
                    break stage1;
                }
                if ((op1 & 0x0100) == 0x0000) { // EA is src
                    //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                    eaModeSrc = aEAModes[abModes400[op1 & 0xff]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.SetDataFlagsZNClearCV(dataDst | dataSrc);
                    AddCycles_Debug(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                }
                else {                          // EA is dst
                    //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataSrc = eaModeSrc.GetEAData(rrr);
                    eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlagsZNClearCV(dataDst | dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l);
                }
                break stage1;
            
            case 0x9:
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                    eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    a[rrr] -= dataSrc;
                    AddCycles_Debug(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                    eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.SetDataFlags(dataDst - dataSrc);
                    AddCycles_Debug(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataSrc = eaModeSrc.GetEAData(rrr);
                    eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlags(dataDst - dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                    eaModeSrc = aEAModes[abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    dataSrc = eaModeSrc.GetEAData(nnn) - GetFlagX();
                    eaModeDst = eaModeSrc;
                    dataDst = eaModeDst.GetEAData(rrr);
                    flagZTmp = flagZNew;
                    eaModeDst.SetDataFlags(dataDst - dataSrc);
                    if (flagZNew == 0)
                        flagZNew = flagZTmp;
                    if ((op1 & 0x8) == 0)
                        AddCycles_Debug(4 + eaModeDst.cycle4l);
                }
                break stage1;
            
            case 0xa:
                GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                break;
            
            case 0xb:
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                    eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[EAMODEINDEX_AREG_LONG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.UpdateFlagsExceptX(dataDst - dataSrc);
                    AddCycles_Debug(6);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                    eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.UpdateFlagsExceptX(dataDst - dataSrc);
                    AddCycles_Debug(4 + eaModeSrc.cycle2l);
                    break stage1;
                }
                if ((op1 & 0x0038) != 0x08) {
                    //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataSrc = eaModeSrc.GetEAData(rrr);
                    eaModeDst = aEAModes[abModes407[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlagsZNClearCV(dataDst ^ dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                }
                else {
                    //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_AREG_INCBYTE];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = eaModeSrc;
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.UpdateFlagsExceptX(dataDst - dataSrc);
                    // Cycles needs no adjustment -- CMPM should be covered by EA cycles
                }
                break stage1;
            
            case 0xc:
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                op2 = (op1 >> 6) & 0x7;
                
                switch(op2) {
                case 0x0:
                case 0x1:
                case 0x2:                       // EA is src
                    //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                    eaModeSrc = aEAModes[abModes400[op1 & 0xff]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.SetDataFlagsZNClearCV(dataDst & dataSrc);
                    AddCycles_Debug(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                    
                case 0x3:
                    //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    dataSrc = eaModeSrc.GetEAData(nnn) & 0xffff;
                    eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                    dataDst = eaModeDst.GetEAData(rrr) & 0xffff;
                    eaModeDst.SetDataFlagsZNClearCV(dataDst * dataSrc);
                    AddCycles_Debug(70);        // BUGBUG: worst-case timing -JP
                    break stage1;
                    
                case 0x4:
                case 0x5:
                case 0x6:                       // EA is dst
                    //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                    if ((op1 & 0x0030) != 0) {
                        eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                        dataSrc = eaModeSrc.GetEAData(rrr);
                        eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                        dataDst = eaModeDst.GetEAData(nnn);
                        eaModeDst.SetDataFlagsZNClearCV(dataDst & dataSrc);
                        AddCycles_Debug(8 + eaModeDst.cycle4l);
                        break stage1;
                    }
                    
                    switch(op2) {
                    case 0x4:
                        //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                        eaModeSrc = aEAModes[abModesAddSubX[(op1 >> 3) & 0x1]]; // 0 or 1 (both ssBYTE)
                        dataSrc = eaModeSrc.GetEAData(nnn);
                        eaModeDst = eaModeSrc;
                        dataDst = eaModeDst.GetEAData(rrr);
                        dataNew = (dataSrc & 0x0f) + (dataDst & 0x0f) - GetFlagX();
                        dataNew += (dataNew > 9)? 6 : 0;
                        dataNew += (dataSrc & 0xf0) + (dataDst & 0xf0);
                        if (dataNew <= 0x90) {
                            eaModeDst.SetData(dataNew);
                            SetFlagCX(0);
                        }
                        else {
                            dataNew += 0x60;
                            eaModeDst.SetData(dataNew);
                            SetFlagCX(-1);
                        }
                        if ((dataNew & 0xff) != 0)  // conditionally clear Z
                            flagZNew = (byte)dataNew;
                        flagNNew = (byte)dataNew;
                        flagVSrc = (byte)dataSrc;
                        flagVDst = (byte)dataDst;
                        flagVNew = (byte)dataNew;
                        if ((op1 & 0x8) == 0)
                            AddCycles_Debug(6);
                        break stage1;
                        
                    case 0x5:
                        if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                            //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                            op2 = d[rrr];
                            d[rrr] = d[nnn];
                            d[nnn] = op2;
                        }
                        else {                  // EXG Arrr,Annn
                            //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                            op2 = a[rrr];
                            a[rrr] = a[nnn];
                            a[nnn] = op2;
                        }
                        AddCycles_Debug(6);
                        break stage1;
                        
                    case 0x6:
                        if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                            //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                            op2 = d[rrr];
                            d[rrr] = a[nnn];
                            a[nnn] = op2;
                            AddCycles_Debug(6);
                            break stage1;
                        }
                    }
                    break;      // If we're still here, must be an invalid opcode
                    
                case 0x7:
                    //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                    eaModeSrc = aEAModes[abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = eaModeDRegLong; // aEAModes[EAMODEINDEX_DREG_LONG];
                    dataDst = (short)eaModeDst.GetEAData(rrr);
                    eaModeDst.SetDataFlagsZNClearCV(dataDst * dataSrc);
                    AddCycles_Debug(70);        // BUGBUG: worst-case timing -JP
                    break stage1;
                }
                
                GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                break;
            
            case 0xd:
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                    eaModeSrc = aEAModes[abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    a[rrr] += dataSrc;                  // entire destination updated regardless of operand size
                    AddCycles_Debug(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                    eaModeSrc = aEAModes[abModes000[op1 & 0xff]];
                    dataSrc = eaModeSrc.GetEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataDst = eaModeDst.GetEAData(rrr);
                    eaModeDst.SetDataFlagsForAdd(dataDst + dataSrc);
                    AddCycles_Debug(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + EAMODEINDEX_DREG];
                    dataSrc = eaModeSrc.GetEAData(rrr);
                    eaModeDst = aEAModes[abModesC07[op1 & 0xff]];
                    dataDst = eaModeDst.GetEAData(nnn);
                    eaModeDst.SetDataFlagsForAdd(dataDst + dataSrc);
                    AddCycles_Debug(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                    eaModeSrc = aEAModes[abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    dataSrc = eaModeSrc.GetEAData(nnn) - GetFlagX();
                    eaModeDst = eaModeSrc;
                    dataDst = eaModeDst.GetEAData(rrr);
                    flagZTmp = flagZNew;
                    eaModeDst.SetDataFlagsForAdd(dataSrc + dataDst);
                    if (flagZNew == 0)
                        flagZNew = flagZTmp;
                    if ((op1 & 0x8) == 0)
                        AddCycles_Debug(4 + eaModeDst.cycle4l);
                }
                break stage1;
            
            case 0xe:
                //  case 0xe000:   asr      [1110000011uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe000:   asr      [1110rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe008:   lsr      [1110rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe010:   roxr     [1110rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe018:   ror      [1110rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe100:   asl      [1110rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe100:   asl      [1110000111uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe108:   lsl      [1110rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe110:   roxl     [1110rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe118:   rol      [1110rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe200:   lsr      [1110001011uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe300:   lsl      [1110001111uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe400:   roxr     [1110010011uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe500:   roxl     [1110010111uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe600:   ror      [1110011011uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe700:   rol      [1110011111uuunnn, format ??????????uuunnn, p.265]
                if ((op1 & 0x00c0) != 0x00c0) {
                    cbits = ((op1 & 0x20) == 0)? aByteQuick[rrr] : (d[rrr] & 0x3f);
                    op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                    eaModeDst = aEAModes[EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
                }
                else {
                    cbits = 1;
                    op2 = op1 >> 8;
                    eaModeDst = aEAModes[abModesC07[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                }
                dataDst = eaModeDst.GetEAData(nnn);
                AddCycles_Debug(8 + eaModeDst.cycle2ADl + (eaModeDst.cycle2ADI-1)*cbits);
                
                switch (op2 & 0x7) {
                case 0x0:
                    //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    if (cbits >= (dataWidth = eaModeDst.width)) {
                        dataDst >>= 1;
                        cbits = dataWidth-1;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst >> cbits);
                    if (cbits != 0)
                        SetFlagCX((dataDst >> (cbits-1)) & 0x1);
                    break stage1;
                    
                case 0x1:
                    //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    dataTmp = 0;                // assume no overflow
                    dataSign = eaModeDst.sign;
                    dataWidth = eaModeDst.width;
                    if (cbits >= dataWidth) {
                        if ((dataDst & dataSign) != (dataDst & (dataSign >>> 1)))
                            dataTmp = 1;        // we've already "overflowed"
                        dataDst <<= 1;
                        cbits = dataWidth-1;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst << cbits);
                    if (cbits != 0) {
                        SetFlagCX((dataDst << (cbits-1)) & dataSign);
                        if (dataTmp == 0) {
                            // All cbits from dataSign on down must either be all set or all clear
                            dataTmp = eaModeDst.mask;
                            dataTmp = (dataTmp << (dataWidth-cbits-1)) & dataTmp;
                            dataTmp = ((dataDst & dataTmp) != dataTmp && (dataDst & dataTmp) != 0)? 1 : 0;
                        }
                        if (dataTmp != 0)
                            SetFlagV(-1);
                    }
                    break stage1;
                    
                case 0x2:
                    //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    dataDst &= eaModeDst.mask;
                    if (cbits >= (dataWidth = eaModeDst.width)) {
                        dataDst >>>= 1;
                        cbits = dataWidth-1;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst >>> cbits);
                    if (cbits != 0)
                        SetFlagCX((dataDst >>> (cbits-1)) & 0x1);
                    break stage1;
                    
                case 0x3:
                    //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    if (cbits >= (dataWidth = eaModeDst.width)) {
                        dataDst <<= 1;
                        cbits = dataWidth-1;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst << cbits);
                    if (cbits != 0)
                        SetFlagCX((dataDst << (cbits-1)) & eaModeDst.sign);
                    break stage1;
                    
                case 0x4:
                    //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    dataDst &= eaModeDst.mask;
                    dataSign = eaModeDst.sign;
                    while (cbits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (dataDst >>> 1) | (GetFlagX() & dataSign);
                        SetFlagX(dataDst & 0x1);
                        dataDst = dataNew;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst);
                    SetFlagC(GetFlagX());
                    break stage1;
                    
                case 0x5:
                    //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    dataSign = eaModeDst.sign;
                    while (cbits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (dataDst << 1) | (GetFlagX() & 0x1);
                        SetFlagX(dataDst & dataSign);
                        dataDst = dataNew;
                    }
                    eaModeDst.SetDataFlagsZNClearCV(dataDst);
                    SetFlagC(GetFlagX());
                    break stage1;
                    
                case 0x6:
                    //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cbits == 0) {
                        eaModeDst.SetDataFlagsZNClearCV(dataDst);
                        break stage1;
                    }
                    dataDst &= eaModeDst.mask;
                    dataWidth = eaModeDst.width-1;
                    while (cbits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (dataDst >>> 1) | ((dataDst & 0x1) << dataWidth);
                        SetFlagC(dataDst & 0x1);
                        dataDst = dataNew;
                    }
                    eaModeDst.SetDataFlagsZNClearV(dataDst);
                    break stage1;
                    
                case 0x7:
                    //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cbits == 0) {
                        eaModeDst.SetDataFlagsZNClearCV(dataDst);
                        break stage1;
                    }
                    dataSign = eaModeDst.sign;
                    dataWidth = eaModeDst.width-1;
                    while (cbits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (dataDst << 1) | ((dataDst & dataSign) >>> dataWidth);
                        SetFlagC(dataDst & dataSign);
                        dataDst = dataNew;
                    }
                    eaModeDst.SetDataFlagsZNClearV(dataDst);
                    break stage1;
                }
                break;
                
            case 0xf:
                if (debugger != null && (op1 & OP_MYBREAKPOINT_MASK) == OP_MYBREAKPOINT) {
                    if (debugger.Break(pc0, true)) {    // see if the debugger wants us to break
                        pc = pc0;
                        fCPU |= CPU_BREAKPOINT;
                        return cExecute + 1;
                    }
                }
                GenerateException(EXCEPTION_ILLEGAL_INSTRUCTION);
                break;
                
            }   // End stage1

#if DEBUG
            // Catch any executable instructions that still don't provide a cycle count
            if (cCyclesCur == cCyclesDebug)
                GenerateException(EXCEPTION_UNSUPP_INSTRUCTION);
#endif
            ++cOpcodesUncycled;
            ++cOpcodes;
            
            if ((fCPU & CPU_BREAKFLAGS) != 0) {
                // If CPU_TRACING was the sole breaking condition, make sure that CPU_STEPPING was not also set;
                // otherwise, we should continue executing, because CPU_STEPPING means that cExecute is a step count.
                if ((fCPU & (CPU_BREAKFLAGS | CPU_STEPPING)) != (CPU_TRACING | CPU_STEPPING)) {
                    cExecute--; // over-decrement cExecute, since we won't be revisiting the post-decrementing while-loop again...
                    break;
                }
            }
        }
        
        if (cOpcodes < 0)       // if the opcode count underflows, reset all the counters
            ResetCounters();

        // Note that we've added CPU_BREAKPOINT to the list of flags that can kick us out of the execution loop.
        // That's because the breakpoint and TRAP instructions, which still return immediately because the desired
        // instruction has not actually been executed yet, are no longer the only reasons CPU_BREAKPOINT can be set.
        // 
        // Data read/write breakpoints can now trigger CPU_BREAKPOINT condition as well (see MarkDataAccess() in
        // the Debugger).  We can't stop the instruction from executing, because not all emulated instruction are
        // "restartable" (eg, instructions that do pre-decrement or post-increment), so we have to let it finish and
        // then wind out of ExecuteOpcodes() normally, here at the bottom....
        
        return cExecute + 1;
    }
    
}
