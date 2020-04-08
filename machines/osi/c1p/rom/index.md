---
layout: page
title: OSI Challenger 1P ROMs
permalink: /machines/osi/c1p/rom/
redirect_from: /devices/c1p/rom/
---

The following ROMs are available:

- [BASIC (8Kb)](basic.json) ([HEX](basic.hex))
- [BASIC (8Kb) with GC Patch](basic-gcpatch.json) ([HEX](basic-gcpatch.hex))
- [SYSTEM (2Kb)](system.json) ([HEX](system.hex))

### BASIC Garbage Collection (GC) Patch

The following information comes from BAS3FIX.TXT in the ["Fixed BASIC3 ROM"](http://osiweb.org/roms/basfix02.zip) ZIP
archive at [osiweb.org](http://osiweb.org/software.html#BASIC_ROMS).  The patch was created in 2001 and is attributed to
"[Ed](http://dxforth.netbay.com.au/)" (formerly at http://www.netbay.com.au/~dxforth/).

	New OSI/UK101 ROM BASIC garbage collection bug patch
	----------------------------------------------------
	
	The 8K ROM BASIC supplied with the OSI Superboard II and
	UK101 computers contains a bug in the garbage collector
	routine (see Listing 1).  A patch was subsequently made
	available in the form of an updated BASIC 3 ROM (for the
	UK101 at least).  The code is shown in Listing 3.
	
	Unfortunately the patch was not a complete solution and
	corrupted strings could still occur - see Listing 2.
	
	Listing 4 shows a new garbage collector patch that fixes
	all the problems.  It is a combination of the original
	patch with changes found in later versions of Microsoft
	6502 BASIC.
	
	Implementing the patch requires replacing of the BASIC 3
	ROM.  Binary and hex dumps for the new ROM are enclosed.
	
	The patch and rom images suit either the OSI or UK101 ROM
	BASIC.
	
	
	4-Oct-2001
	
	-----------------------------------------------------------
	
	[Listing 1]
	
	Demonstrates garbage collection bug in OSI/UK101 ROM BASIC.
	
	 10 DIM A$(3)
	 RUN
	 PRINT FRE(0)  (machine hangs)
	
	
	[Listing 2]
	
	String corruption occurs with an unmodified ROM BASIC or
	the original garbage collection patch.  Before entering
	the program, perform a Cold start and enter 1000 for the
	memory size.
	
	  5 A$="+"
	 10 A$="-"+A$+"-"
	 20 A$="+"+A$+"+"
	 30 PRINT A$
	 40 GOTO 10
	
	
	[Listing 3]
	
	Original garbage collection patch
	
	 B147   LDX     $85
	        LDA     $86
	 B14B   STX     $81
	        STA     $82
	        LDY     #0
	        STY     $9D
	        LDA     $7F
	        LDX     $80
	        STA     $AA
	        STX     $AB
	        LDA     #$68
	        STA     $71
	        STY     $72
	 B161   CMP     $65
	        BEQ     $B16A
	        JSR     $B1D7
	        BEQ     $B161
	 B16A   LDA     #6
	        STA     $A0
	        LDA     $7B
	        LDX     $7C
	        STA     $71
	        STX     $72
	 B176   CPX     $7E
	        BNE     $B17E
	        CMP     $7D
	        BEQ     $B183
	 B17E   JSR     $B1D1
	        BEQ     $B176
	 B183   STA     $A4
	        STX     $A5
	        LDA     #4
	        STA     $A0
	 B18B   LDA     $A4
	        LDX     $A5
	 B18F   CPX     $80
	        BNE     $B19A
	        CMP     $7F
	        BNE     $B19A
	        JMP     $B216
	
	 B19A   STA     $71
	        STX     $72
	        LDY     #1
	        LDA     ($71),Y
	        PHP
	        INY
	        LDA     ($71),Y
	        ADC     $A4
	        STA     $A4
	        INY
	        LDA     ($71),Y
	        ADC     $A5
	        STA     $A5
	        PLP
	        BPL     $B18B
	        INY
	        LDA     ($71),Y
	        ASL     A
	        ADC     #5
	        ADC     $71
	        STA     $71
	        BCC     $B1C2
	        INC     $72
	 B1C2   LDX     $72
	 B1C4   CPX     $A5
	        BNE     $B1CC
	        CMP     $A4
	        BEQ     $B18F
	 B1CC   JSR     $B1D7
	        BEQ     $B1C4
	 B1D1   INY
	        LDA     ($71),Y
	        BPL     $B206
	        INY
	 B1D7   LDA     ($71),Y
	        BEQ     $B206
	        INY
	        LDA     ($71),Y
	        TAX
	        INY
	        LDA     ($71),Y
	        CMP     $82
	        BCC     $B1EC
	        BNE     $B206
	        CPX     $81
	        BCS     $B206
	 B1EC   CMP     $AB
	        BCC     $B206
	        BNE     $B1F6
	        CPX     $AA
	        BCC     $B206
	 B1F6   STX     $AA
	        STA     $AB
	        LDA     $71
	        LDX     $72
	        STA     $9C
	        STX     $9D
	        DEY
	        DEY
	        STY     $A2
	 B206   LDA     $A0
	        CLC
	        ADC     $71
	        STA     $71
	        BCC     $B211
	        INC     $72
	 B211   LDX     $72
	        LDY     #0
	        RTS
	
	 B216   DEC     $A0
	        LDX     $9D
	        BEQ     $B211
	        LDY     $A2
	        CLC
	        LDA     ($9C),Y
	        ADC     $AA
	        STA     $A6
	        LDA     $AB
	        ADC     #0
	        STA     $A7
	        LDA     $81
	        LDX     $82
	        STA     $A4
	        STX     $A5
	        JSR     LA1D6
	        LDY     $A2
	        INY
	        LDA     $A4
	        STA     ($9C),Y
	        TAX
	        INC     $A5
	        LDA     $A5
	        INY
	        STA     ($9C),Y
	        JMP     $B14B
	
	        .BYTE   $53,$54,$49,$42,$4F ; RUBBISH
	
	
	[Listing 4]
	
	New garbage collection patch
	
	    1                  ; NEW GARBAGE COLLECTION FIX FOR
	    2                  ; OSI/UK101 ROM BASIC  4-Oct-2001
	    3
	    4  B147                    *=      $B147
	    5
	    6  B147  A6 85             LDX     $85
	    7  B149  A5 86             LDA     $86
	    8  B14B  86 81     L1      STX     $81
	    9  B14D  85 82             STA     $82
	   10  B14F  A0 00             LDY     #0
	   11  B151  84 9D             STY     $9D
	   12  B153  84 9C             STY     $9C
	   13  B155  A5 7F             LDA     $7F
	   14  B157  A6 80             LDX     $80
	   15  B159  85 AA             STA     $AA
	   16  B15B  86 AB             STX     $AB
	   17  B15D  A9 68             LDA     #$68
	   18  B15F  85 71             STA     $71
	   19  B161  84 72             STY     $72
	   20  B163  C5 65     L2      CMP     $65
	   21  B165  F0 05             BEQ     L3
	   22  B167  20 D8 B1          JSR     L14
	   23  B16A  F0 F7             BEQ     L2
	   24  B16C  A9 06     L3      LDA     #6
	   25  B16E  85 A0             STA     $A0
	   26  B170  A5 7B             LDA     $7B
	   27  B172  A6 7C             LDX     $7C
	   28  B174  85 71             STA     $71
	   29  B176  86 72             STX     $72
	   30  B178  E4 7E     L4      CPX     $7E
	   31  B17A  D0 04             BNE     L5
	   32  B17C  C5 7D             CMP     $7D
	   33  B17E  F0 05             BEQ     L6
	   34  B180  20 D2 B1  L5      JSR     L13
	   35  B183  F0 F3             BEQ     L4
	   36  B185  85 A4     L6      STA     $A4
	   37  B187  86 A5             STX     $A5
	   38  B189  A9 04             LDA     #4
	   39  B18B  85 A0             STA     $A0
	   40  B18D  A5 A4     L7      LDA     $A4
	   41  B18F  A6 A5             LDX     $A5
	   42  B191  E4 80     L8      CPX     $80
	   43  B193  D0 04             BNE     L9
	   44  B195  C5 7F             CMP     $7F
	   45  B197  F0 7E             BEQ     L19
	   46
	   47  B199  85 71     L9      STA     $71
	   48  B19B  86 72             STX     $72
	   49  B19D  A0 01             LDY     #1
	   50  B19F  B1 71             LDA     ($71),Y
	   51  B1A1  08                PHP
	   52  B1A2  C8                INY
	   53  B1A3  B1 71             LDA     ($71),Y
	   54  B1A5  65 A4             ADC     $A4
	   55  B1A7  85 A4             STA     $A4
	   56  B1A9  C8                INY
	   57  B1AA  B1 71             LDA     ($71),Y
	   58  B1AC  65 A5             ADC     $A5
	   59  B1AE  85 A5             STA     $A5
	   60  B1B0  28                PLP
	   61  B1B1  10 DA             BPL     L7
	   62  B1B3  C8                INY
	   63  B1B4  B1 71             LDA     ($71),Y
	   64  B1B6  A0 00             LDY     #0
	   65  B1B8  0A                ASL     A
	   66  B1B9  69 05             ADC     #5
	   67  B1BB  65 71             ADC     $71
	   68  B1BD  85 71             STA     $71
	   69  B1BF  90 02             BCC     L10
	   70  B1C1  E6 72             INC     $72
	   71  B1C3  A6 72     L10     LDX     $72
	   72  B1C5  E4 A5     L11     CPX     $A5
	   73  B1C7  D0 04             BNE     L12
	   74  B1C9  C5 A4             CMP     $A4
	   75  B1CB  F0 C4             BEQ     L8
	   76  B1CD  20 D8 B1  L12     JSR     L14
	   77  B1D0  F0 F3             BEQ     L11
	   78
	   79  B1D2  C8        L13     INY
	   80  B1D3  B1 71             LDA     ($71),Y
	   81  B1D5  10 30             BPL     L17
	   82  B1D7  C8                INY
	   83  B1D8  B1 71     L14     LDA     ($71),Y
	   84  B1DA  F0 2B             BEQ     L17
	   85  B1DC  C8                INY
	   86  B1DD  B1 71             LDA     ($71),Y
	   87  B1DF  AA                TAX
	   88  B1E0  C8                INY
	   89  B1E1  B1 71             LDA     ($71),Y
	   90  B1E3  C5 82             CMP     $82
	   91  B1E5  90 06             BCC     L15
	   92  B1E7  D0 1E             BNE     L17
	   93  B1E9  E4 81             CPX     $81
	   94  B1EB  B0 1A             BCS     L17
	   95  B1ED  C5 AB     L15     CMP     $AB
	   96  B1EF  90 16             BCC     L17
	   97  B1F1  D0 04             BNE     L16
	   98  B1F3  E4 AA             CPX     $AA
	   99  B1F5  90 10             BCC     L17
	  100  B1F7  86 AA     L16     STX     $AA
	  101  B1F9  85 AB             STA     $AB
	  102  B1FB  A5 71             LDA     $71
	  103  B1FD  A6 72             LDX     $72
	  104  B1FF  85 9C             STA     $9C
	  105  B201  86 9D             STX     $9D
	  106  B203  88                DEY
	  107  B204  88                DEY
	  108  B205  84 A2             STY     $A2
	  109  B207  A5 A0     L17     LDA     $A0
	  110  B209  18                CLC
	  111  B20A  65 71             ADC     $71
	  112  B20C  85 71             STA     $71
	  113  B20E  90 02             BCC     L18
	  114  B210  E6 72             INC     $72
	  115  B212  A6 72     L18     LDX     $72
	  116  B214  A0 00             LDY     #0
	  117  B216  60                RTS
	  118
	  119  B217  C6 A0     L19     DEC     $A0
	  120  B219  A5 9D             LDA     $9D
	  121  B21B  05 9C             ORA     $9C
	  122  B21D  F0 F3             BEQ     L18
	  123  B21F  A4 A2             LDY     $A2
	  124  B221  18                CLC
	  125  B222  B1 9C             LDA     ($9C),Y
	  126  B224  65 AA             ADC     $AA
	  127  B226  85 A6             STA     $A6
	  128  B228  A5 AB             LDA     $AB
	  129  B22A  69 00             ADC     #0
	  130  B22C  85 A7             STA     $A7
	  131  B22E  A5 81             LDA     $81
	  132  B230  A6 82             LDX     $82
	  133  B232  85 A4             STA     $A4
	  134  B234  86 A5             STX     $A5
	  135  B236  20 D6 A1          JSR     $A1D6
	  136  B239  A4 A2             LDY     $A2
	  137  B23B  C8                INY
	  138  B23C  A5 A4             LDA     $A4
	  139  B23E  91 9C             STA     ($9C),Y
	  140  B240  AA                TAX
	  141  B241  E6 A5             INC     $A5
	  142  B243  A5 A5             LDA     $A5
	  143  B245  C8                INY
	  144  B246  91 9C             STA     ($9C),Y
	  145  B248  4C 4B B1          JMP     L1
	  146
	  147  B24B  FF FF             .BYTE   $FF,$FF
	  148
	  149  B24D                    .END
