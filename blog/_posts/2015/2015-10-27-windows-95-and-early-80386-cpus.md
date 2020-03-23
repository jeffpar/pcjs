---
layout: post
title: Windows 95 and Early 80386 CPUs
date: 2015-10-27 11:00:00
categories: ['Windows 95', '80386']
permalink: /blog/2015/10/27/
---

Every time Windows 95 starts up, its real-mode loader performs the following CPU identification test.

	&0654:121E 9C              PUSHF   
	&0654:121F 33C0            XOR      AX,AX           ; try to clear bit 15 of flags
	&0654:1221 50              PUSH     AX
	&0654:1222 9D              POPF    
	&0654:1223 9C              PUSHF   
	&0654:1224 58              POP      AX
	&0654:1225 A90080          TEST     AX,8000         ; bit 15 of flags set anyway?
	&0654:1228 7543            JNZ      126D            ; yes (must be an 8086/8086)
	&0654:122A B80070          MOV      AX,7000         ; try to set bits 12-14 of flags
	&0654:122D 50              PUSH     AX
	&0654:122E 9D              POPF    
	&0654:122F FB              STI     
	&0654:1230 9C              PUSHF   
	&0654:1231 58              POP      AX
	&0654:1232 9D              POPF    
	&0654:1233 A90070          TEST     AX,7000         ; any of bits 12-14 of flags set?
	&0654:1236 7436            JZ       126E            ; no (must be an 80286)
	&0654:1238 51              PUSH     CX
	&0654:1239 33C9            XOR      CX,CX
	&0654:123B 8BC4            MOV      AX,SP
	&0654:123D 83E003          AND      AX,0003
	&0654:1240 7404            JZ       1246
	&0654:1242 8BC8            MOV      CX,AX
	&0654:1244 2BE0            SUB      SP,AX
	&0654:1246 669C            PUSHFD  
	&0654:1248 666800000400    PUSH     00040000        ; try to set the AC bit of flags
	&0654:124E 669D            POPFD   
	&0654:1250 669C            PUSHFD  
	&0654:1252 6658            POP      EAX
	&0654:1254 669D            POPFD   
	&0654:1256 66A900000400    TEST     EAX,00040000    ; AC bit set?
	&0654:125C 7508            JNZ      1266            ; yes (must be an 80486, or newer)
	&0654:125E 40              INC      AX
	&0654:125F 03E1            ADD      SP,CX
	&0654:1261 59              POP      CX
	&0654:1262 0BC0            OR       AX,AX
	&0654:1264 F9              STC                      ; return ZF clear and CF set to indicate 80386 
	&0654:1265 C3              RET
	&0654:1266 03E1            ADD      SP,CX
	&0654:1268 59              POP      CX
	&0654:1269 660BC0          OR       EAX,EAX         ; return ZF clear and CF clear to indicate 80486
	&0654:126C C3              RET     
	&0654:126D 9D              POPF    
	&0654:126E 33C0            XOR      AX,AX           ; return ZF set to indicate 80286 or older
	&0654:1270 C3              RET
	     
If the above function returns ZF set, then the processor is an 80286 or older, so Windows 95 displays the
following message and exits:

	You need an 80386 processor to run Windows.

If the above function returns CF set, then the processor is an 80386, and if CF is clear, the processor is an
80486 or newer.

When CF is set, Windows 95 proceeds to the following 80386 stepping check, which attempts to execute an
XBTS (Extract Bit String) instruction -- an instruction that existed only on B0 and earlier 80386 steppings.

	&0654:1299 53              PUSH     BX
	&0654:129A 51              PUSH     CX
	&0654:129B 52              PUSH     DX
	&0654:129C B80635          MOV      AX,3506         ; save the current "invalid opcode" handler (IVT entry #6)
	&0654:129F CD21            INT      21
	&0654:12A1 8CC0            MOV      AX,ES
	&0654:12A3 66C1E010        SHL      EAX,10
	&0654:12A7 8BC3            MOV      AX,BX
	&0654:12A9 6650            PUSH     EAX
	&0654:12AB 1E              PUSH     DS
	&0654:12AC BAE012          MOV      DX,12E0
	&0654:12AF 8CCB            MOV      BX,CS
	&0654:12B1 8EDB            MOV      DS,BX
	&0654:12B3 B80625          MOV      AX,2506         ; temporarily install a new "invalid opcode" exception handler
	&0654:12B6 CD21            INT      21
	&0654:12B8 1F              POP      DS
	&0654:12B9 33C0            XOR      AX,AX
	&0654:12BB 8BD0            MOV      DX,AX
	&0654:12BD B900FF          MOV      CX,FF00
	&0654:12C0 0FA6CA          XBTS     CX,DX,AX,CL     ; attempt to execute an XBTS instruction 
	&0654:12C3 6658            POP      EAX
	&0654:12C5 8BD0            MOV      DX,AX
	&0654:12C7 66C1E810        SHR      EAX,10
	&0654:12CB 1E              PUSH     DS
	&0654:12CC 8ED8            MOV      DS,AX
	&0654:12CE B80625          MOV      AX,2506         ; restore the original "invalid opcode" exception handler
	&0654:12D1 CD21            INT      21
	&0654:12D3 1F              POP      DS
	&0654:12D4 B8B000          MOV      AX,00B0
	&0654:12D7 0BC9            OR       CX,CX           ; did XBTS work (ie, did CX change)?
	&0654:12D9 7401            JZ       12DC            ; yes, so we must have a B0 stepping or earlier
	&0654:12DB 40              INC      AX              ; no, so bump the stepping to B1
	&0654:12DC 5A              POP      DX
	&0654:12DD 59              POP      CX
	&0654:12DE 5B              POP      BX
	&0654:12DF C3              RET                      ; returns AX == 0xB0 if B0 stepping or earlier, 0xB1 if B1 stepping or later 
	     
	&0654:12E0 55              PUSH     BP              ; temporary "invalid opcode" handler
	&0654:12E1 8BEC            MOV      BP,SP
	&0654:12E3 83460203        ADD      [BP+02],0003    ; advance IP past the 3-byte XBTS instruction
	&0654:12E7 5D              POP      BP
	&0654:12E8 CF              IRET    

If the above function returns 0xB0, then the 80386 is a B0 or earlier stepping, so Windows 95 displays the
following message and aborts:

	Windows may not run correctly with the 80386 processor that is installed in this computer.
	Upgrade your 80386 processor.

Otherwise, the 80386 is a B1 or later stepping, so Windows 95 next performs a multiplication test (a simplified
version of the multiplication tests discussed in "[Early 80386 CPUs](/blog/2015/02/23/)"):

	&0654:12E9 33C9            XOR      CX,CX
	&0654:12EB 66BB81000000    MOV      EBX,00000081
	&0654:12F1 66B800A01704    MOV      EAX,0417A000
	&0654:12F7 66F7E3          MUL      EBX
	&0654:12FA 6683FA02        CMP      EDX,00000002
	&0654:12FE 750B            JNZ      130B
	&0654:1300 663D00A0E70F    CMP      EAX,0FE7A000
	&0654:1306 7503            JNZ      130B
	&0654:1308 E2E1            LOOP     12EB
	&0654:130A C3              RET     

If any of the 65,536 identical multiplications return an incorrect result, Windows 95 displays the following
message:

	WARNING: The 80386 processor in this computer may not reliably execute 32-bit
	multiplication.	Windows may occasionally fail on this computer.
	
	You may want to replace your 80386 processor.
    Press any key to continue...Press a key to continue

A multiplication failure implies that the 80386 stepping is B1, because later steppings resolved the problem.

You may have heard that Windows 95 [pulled support for the 80386 B1 stepping](http://blogs.msdn.com/b/oldnewthing/archive/2011/01/12/10114521.aspx),
and that's true, but only insofar as Windows 95 SETUP is concerned.  The following code is executed by WINSETUP.BIN,
a 16-bit Windows component that manages the Windows 95 installation process:

	#05C7:69E8 1E              PUSH     DS
	#05C7:69E9 07              POP      ES
	#05C7:69EA 6657            PUSH     EDI
	#05C7:69EC FD              STD     
	#05C7:69ED 66BF00000000    MOV      EDI,00000000
	#05C7:69F3 678A07          MOV      AL,[EDI]
	#05C7:69F6 67AA            STOSB   
	#05C7:69F8 33C0            XOR      AX,AX
	#05C7:69FA 6681FFFFFF0000  CMP      EDI,0000FFFF
	#05C7:6A01 7501            JNZ      6A04
	#05C7:6A03 40              INC      AX
	#05C7:6A04 FC              CLD     
	#05C7:6A05 665F            POP      EDI
	#05C7:6A07 C3              RET

Ths above code checks for B1 stepping [Errata #7](/pubs/pc/reference/intel/80386/#b1-errata): "Wrong Register Size for
String Instructions in Mixed 16/32-bit Addressing Systems."  It returns AX == 0 if the STOSB instruction updated EDI
correctly (0xFFFFFFFF) or AX == 1 if EDI is incorrect (0x0000FFFF).

If Errata #7 is detected, then Windows 95 SETUP displays the following message and aborts:

	Setup Error B1:  Setup has detected an 80386 processor that is not compatible with this version of Windows.
	Before you can run this version of Windows, you need to upgrade your processor.
	Contact your computer manufacturer for more information.

However, if you can get through SETUP, Windows 95 will still run on a B1 stepping.  For example, if you installed
Windows 95 using a newer 80386, and then later "downgraded" the CPU to a B1, Windows 95 would still run.  If your B1
suffered from the multiplication flaw, you would see the 32-bit multiplication warning on start-up, but you could
still continue to run, and if there was no multiplication problem, you would not see any message at all.

---

PCjs v1.20.0 now supports a "stepping" attribute on the &lt;cpu&gt; element, which you can use to simulate specific
stepping behavior.  For example, a *machine.xml* file with the following CPU definition: 

```xml
<cpu id="cpu386" model="80386" stepping="b0"/>
```

will cause Windows 95 to abort exactly as described as above.  Similarly, selecting a 80386 B1 stepping:

```xml
<cpu id="cpu386" model="80386" stepping="b1"/>
```

will cause Windows 95 to display the 32-bit multiplication warning shown above (PCjs deliberately fails the exact
multiplication test that Windows 95 performs).

If you want to simulate a B1 stepping that does *not* have the 32-bit multiplication flaw, set the stepping to B2:

```xml
<cpu id="cpu386" model="80386" stepping="b2"/>
```

B2 was not an actual 80386 stepping; it is a *pseudo-stepping* that provides a simple way of specifying a B1 80386 that
passes all 32-bit multiplication tests.

As previously discussed, Windows 95 SETUP will refuse to install on any "A" or "B" stepping, but if it's already been
installed, it *will* start up on a B1 stepping.

PCjs stepping support is extremely limited at this point.  Here's a summary:

1. 80386 steppings A0-B0 provide *limited* support for the short-lived XBTS and IBTS instructions
2. 80386 steppings A0-B1 enable [Errata #7](/pubs/pc/reference/intel/80386/#b1-errata) for STOSB (as tested by Windows 95; see above)
3. 80386 stepping B1 enables 32-bit multiplication errors (as tested by Windows 95; see above)
4. 80386 stepping B2 includes all supported B1 errata, but without 32-bit multiplication errors

In addition, on 80386 reset, we set the CPU revision number in DX to the appropriate value for the specified stepping.

Support for additional 80286 and 80386 errata may be added over time, as interesting scenarios or test cases are discovered.
