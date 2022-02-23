---
layout: page
title: Enhanced DEBUG for PC DOS and MS-DOS
permalink: /software/pcx86/util/other/enhdebug/1.32b/
redirect_from: /disks/pcx86/tools/other/enhdebug/
machines:
  - id: ibm5160-pcdos200
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/cga/256kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Enhanced DEBUG 1.32b
    autoType: $date\r$time\rB:DEBUGX /F\r?\r$20\r$10v\r$10\r
---

[Enhanced DEBUG](https://pcdosretro.github.io/enhdebug.htm) is a debugger for DOS that is maintained by [PC DOS Retro](https://pcdosretro.github.io).

A [Directory Listing](#directory-of-enhanced-debug-132b), along with copies of [README.TXT](#readmetxt) and [HISTORY.TXT](#historytxt) for v1.32b, are provided below.

{% include machine.html id="ibm5160-pcdos200" %}

This machine is also available with the [PCjs Debugger](?debugger=true).  Because you can never have too many debuggers.

### Directory of Enhanced DEBUG 1.32b

     Volume in drive A is ENHDEBUG
     Directory of A:\

    DEBUG    ASM    230208   5-14-16  10:32a
    DEBUG    COM     20788   5-14-16  10:32a
    DEBUG    TXT     27998   4-12-16  11:44a
    DEBUGTBL INC     46060   5-10-16  10:44a
    DEBUGX   COM     26164   5-14-16  10:32a
    FPTOSTR  INC      7908  11-28-14   3:28p
            6 file(s)     359126 bytes
                            1024 bytes free

### README.TXT

     1. About
    
        This is an enhanced clone of the MS-DOS/PC DOS DEBUG command which has
        many features not available in the original DEBUG.
    
    
     2. Files Overview
    
        The files in this distribution are:
    
        debug.com     the base executable.
        debugx.com    an extended version which is also DPMI aware.
        debug.txt     a reference guide.
        history.txt   list of changes.
        readme.txt    this file.
        dpmicl32.*    32-bit DPMI client sample program.
    
        The following files are also part of the distribution, but
        they're only needed if debug.com or debugx.com is to be rebuilt:
    
        debug.asm     Assembler source code for both debug.com and debugx.com.
                      Assemble with JWasm or MASM (see make.bat).
        debugtbl.inc  include file for debug.asm, contains tables for the
                      assemble and unassemble commands.
        fptostr.inc   include file for debug.asm, contains the routine to
                      convert a floating-point number to ASCII.
        instr.*       input data for mktables.
        mktables.c    C program to compile the internal instruction set
                      tables into source file debugtbl.inc.
        make.bat      batch file to build debug.com and debugx.com.
        makec.bat     batch file to build mktables.exe.
    
    
     3. Added/Missing Features
    
      a. This debugger extends MS-DOS DEBUG in the following ways:
    
       - The assembler and disassembler support all instructions including FPU
         instructions for Intel chips through the Pentium Pro (P6), except for the
         MMX instructions (as for DEBUGX, MMX is partially supported since v1.18).
         The assembler and disassembler inform you if any instruction is
         inappropriate for the current processor.
    
       - The current processor (for the purposes of assembler and disassembler
         warnings) can be declared to be something else via the following commands:
    
            m [x] set CPU/FPU mode.
                  0 = 8086/8088, 1 = 80186/80188, 2 = 80286, 3 = 80386,
                  4 = 80486, 5 = Pentium, 6 = Pentium Pro (or later).
                  T = math coprocessor is a 80287 (only valid if current
                      processor is a 80386).
                  N = math coprocessor is absent.
                  no argument = print current CPU/FPU types.
    
       - 'd', 'p', 't' and 'u' are automatically repeated if a blank line is
         entered.
    
       - 'db', 'dw' and 'dd' displays bytes, words or dwords. The last display
         type selected is used for subsequent 'd' commands.
    
       - 'dm' displays the DOS memory control block (MCB) chain and the
         current PSP.
    
       - register names can be used anywhere where a number is expected as
         input. For example: "u cs:ip" or "d ds:si".
    
       - 'r cx 1234' may be used instead of having to put the '1234' on a
         separate line.
    
       - 'r register [value]' accepts 32-bit register names (for 80386+ CPU).
    
       - 'rn' displays FPU registers.
    
       - 'rx' switches between 16-bit and 32-bit register display (for 80386+ CPU).
    
       - 'h' can handle dword values.
    
       - 'iw', 'id', 'ow' and 'od' read/write a WORD or DWORD value from/to a port
         DWORD values require a 80386+ CPU.
    
       - 'pr' skips out of the current subroutine by proceeding past the next
         RET, RETF or IRET which is not nested without stopping.
    
       - 'tm 0|1' sets trace command mode, 0 = process INTs (default),
         1 = single-step INTs (the MS-DOS DEBUG compatible mode).
    
       - 'xr' allows reallocation of an EMS handle and 'xa' allows allocation of an
         "empty" EMS handle (with zero pages) - but only if an EMM v4.0 is present.
    
       - if DOS has set its InDOS flag, DEBUG will avoid using Int 21h
         internally, which allows single-stepping through DOS code.
    
       - When doing 'debug < file', debug will not hang if it reaches an end of
         file before encountering a 'q' command.
    
       - This debugger saves and restores the program's Control-C and critical
         error interrupts, providing for better isolation between the debugger
         and the program being debugged.
    
       - When a debugged program terminates, DEBUG will display the exit code
         obtained from Int 21h function 4Dh. The high byte is the exit type
         (0=normal, 1=Ctrl-C, 2=critical error, 3=TSR) and the low byte is the
         return code.
    
       - Video page flipping is supported. When the /F switch is used in text mode
         then the debugger will use page 1 while program output generally uses
         page 0. The 'v' command will show the program output on page 0.
    
      b. A DPMI aware version of the debugger, DEBUGX, is available, with the
         following additional features:
    
       - besides real-mode applications it can debug both 16-bit and 32-bit
         DPMI clients. To debug DPMI clients a DPMI host has to be installed.
         Tested with cwsdpmi, hdpmi, WinXP NTVDM, 32rtm. In DosEmu and
         Windows 95/98/ME DOS boxes it is required to single-step through
         the initial switch to protected-mode, else DEBUGX will lose control
         of the debuggee.
    
       - 'di': display interrupt vector(s)
    
       - 'dl': display LDT descriptor(s) (in protected-mode only)
    
       - 'dx': display extended memory (read via Int 15h, ah=87h). Requires a
         80286+ CPU. 'dx' is automatically repeated if a blank line is entered.
    
       - 'rm' displays MMX registers.
    
       - 'rn' displays FPU registers in "readable" format.
    
       - 'rnr' displays FPU registers in raw format.
    
      c. Optionally, one may build special-purpose versions of DEBUG.
         Run "make extra" to build them. The additional versions are:
    
       - DEBUGXD.COM: a version which doesn't hook Int 01 and Int 03. This
         allows to debug this version with a "normal" version of DEBUG.
    
       - DEBUGXE.COM: a version which hooks interrupts 06, 0Ch and 0Dh in
         real-mode. This is for rare cases when such exceptions may occur
         in real-mode applications.
    
       - DEBUGXF.COM: a version which hooks interrupt 31h in protected-mode
         and then rejects any attempt to modify exception vectors 01, 03,
         0Dh and 0Eh. This allows the debugging of DOS-extended applications
         that modify these vectors.
    
       - DEBUG.SYS: a version that is in DOS device driver format. This
         variant can be used to debug other device drivers. There are a few
         peculiarities: commands N and Q are rejected, commands L and W can't be
         used to load or write files and interrupt 06 (invalid opcode exception)
         is hooked.
    
      d. The following features of MS-DOS DEBUG are not implemented:
    
       - Loading of .HEX files.
    
    
     4. How to rebuild the DEBUG.COM/DEBUGX.COM binaries
    
        MAKE.BAT is intended for rebuilding the debugger binaries. The
        recommended tool for this is the JWasm assembler. Alternatively,
        MASM can be used, but then a 16-bit OMF linker will be needed.
    
    
     5. Copyright
    
        This program is copyrighted, but feel free to use it as you wish.
        For full copyright conditions, see the file debug.asm.
    
        Paul Vojta (1995-2003)
        Andreas Grech (2006-2011)
        Vernon Brooks (2013-2016)

### HISTORY.TXT

    History
    
    0.95e [11 January 2003]  Fixed a bug in the assembler.
    0.95f [10 September 2003]  Fixed some syntax incompatibilities.
    0.98 [27 October 2003]  Added EMS commands and copyright conditions.
    
    ----- changes below done by japheth
    
    0.99 [27 September 2006]
       - bugfix: IF was not displayed correctly.
       - FS and GS registers displayed if CPU is 386+.
       - RX displays the standard 32-bit registers.
       - R register [value] understands the standard 32-bit registers.
    0.99a [28 September 2006]
       - bugfix: JECXZ had wrong prefix (66h, should be 67h).
       - A and U understand the 32-bit opcodes LOOP(Z|NZ|E|NE)D.
    0.99b [29 September 2006]
       - L and W now work with FAT32 drives.
    0.99c [29 September 2006]
       - RX changed. Now it toggles 16/32 bit register dump.
       - RN displays floating point register status.
    0.99d [02 October 2006]
       - bugfix: RN displayed error-pointer registers wrong.
    0.99e [12 October 2006]
       - XR command added to reallocate EMS handle.
       - XA command allows to allocate zero pages on EMS 4.0.
       - TM [0|1] added to be able to switch T to the MS-DOS DEBUG
         compatible behaviour (that is, T jumps into 'INT xx').
    0.99f [17 October 2006]
       - debug's EMS functions may work even with a "hidden" EMM.
       - bugfix: display of mappable pages didn't account for amount of
         these pages == 0.
    0.99g [25 October 2006]
       - bugfix: U was unable to recognise [ESP] related memory operands
         (i.e. mov eax,[esp]).
    0.99h [07 November 2006]
       - bugfix: R trying to display content of effective address has
         caused a GPF in v86-mode if this address was FFFFh of FFFDh.
       - IW, ID, OW and OD implemented.
    0.99i [14 November 2006]
       - bugfix: a child PSP was created but not terminated, causing files
         not to be closed. It became obvious if stdin and/or stdout were
         redirected to files ("C:\>DEBUG >yyy")
    0.99j [16 November 2006]
       - bugfix: using T if current instruction is an INT xx (and trace
         mode == 0) stopped debuggee one instruction *after* the INT (due
         to a x86 design weakness).
       - bugfix: the 0.99i bugfix had some problems on buggy FreeDOS.
    1.00 [25 November 2006]
       - bugfix: debuggee's PSP was saved after program load only, but
         this has to be done every time the debugger regains control.
       - there is now a DPMI aware version of DEBUG, DEBUGX, createable
         from the source.
       - bugfix in disassembler: RETF did not have a corresponding RETFD
         entry (to switch with prefix 66h)
    1.01 [26 November 2006]
       - bugfix: MC2 didn't work.
       - register names can be used anywhere where a number is expected
         as input.
    1.02 [29 November 2006]
       - bugfix: 'I d' and 'O d' didn't work because the parser assumed
         ID and OD commands.
       - DEBUGX bugfix: T= and G= didn't work in protected-mode.
       - bugfix: loading a file at another location than CS:100h was not
         supported in versions 0.99 - 1.01.
       - debugger can be loaded high.
    1.03 [01 February 2007]
       - DEBUG bugfix: previous version of DEBUG.COM did not reliably reset
         "auto-reset" breakpoints (used for processing INTs).
       - DEBUGX: DI now works in real-mode as well.
       - DM command added.
    1.04 [02 March 2007]
       - making single-step through the DOS kernel possible.
    1.05 [01 April 2007]
       - program exit code displayed.
       - DM displays the PSP "name".
       - autorepeat for D, DX, T and U added.
       - DEBUGX: DX added.
    1.06 [21 May 2007]
       - bugfix: SMSW/LMSW in assembler didn't accept a 32-bit operand.
       - bugfix: OW/OD didn't accept the value parameter.
       - key '-' supported in E command to step backward.
    1.07 [03 November 2007]
       - bugfix: entering ranges with upper bound was refused.
       - DEBUGX bugfix: if help cmd waited for a keypress, it displayed
         garbage if CPU was in protected-mode and CWSDPMI was used.
       - tracing into an INT (TM 1) now works if interrupt vector points
         to ROM code.
    1.08 [23 November 2007]
       - bugfix: segment prefix was lost for mnemonics without arguments
         (patch by Oleg O. Chukaev).
    1.09 [30 December 2007]
       - DEBUGX: several bugfixes for A and U handling 32-bit code segments.
       - bugfix: U split lines if instruction size exceeded 6.
       - bugfix: M didn't work with "upper bound" ranges.
       - DEBUGX change: in 32-bit code segments, U displayed ECX as first
         operand for LOOPx to indicate that ECX is used instead of CX.
         Now a 'D' is attached to the opcode (LOOPxD, x=Z|NZ|E|NE) instead.
       - bugfix: A didn't choose the short (=signed) form of arithmetic
         instructions (adc, add, ...) if E/AX was first operand.
    1.10 [25 January 2008]
       - DEBUGX: to intercept DPMI initial switches to protected-mode,
         INT 2Fh is now hooked later. This allows to debug applications
         which install their own DPMI host during initialization.
       - DEBUGX: DL understands an optional "count" argument.
    1.11 [06 February 2008]
       - bugfix: debugger lost debuggee's HiWord(EFL) in real-mode.
       - bugfix: if debuggee set CR0 AM bit and EFL AC flag, an
         exception 11h occured in the debugger.
       - DEBUGX bugfix: G command was unable to set/restore breakpoints if
         HiWord(EIP) wasn't clear.
       - DEBUGX bugfix: U ignored HiWord of argument's offset part.
       - DEBUGX bugfix: E ignored HiWord of argument's offset part.
       - DEBUGX bugfix: M didn't accept first argument's offset > FFFF.
       - DEBUGX bugfix: running in NTVDM and pressing Ctrl-C while debuggee
         is in protected-mode no longer drops to real-mode.
       - DEBUGX: RN now renders floating point register content properly
         (DEBUG still just displays raw hex format for size reasons).
       - DEBUGX: DI got an optional 'count' parameter.
       - DEBUGX: D default segment part is checked if it is valid in pmode
         and changed to value of client's DS if no.
    1.12 [14 February 2008]
       - bugfix: length 0 in range wasn't interpreted as 64 kB.
       - DEBUGX bugfix: E in prompt mode didn't work with 32-bit offsets.
       - DEBUGX bugfix: L and W didn't work with buffer offset >= 10000h.
       - DEBUGX bugfix: Q while debuggee was in pmode caused a GPF if
         HiWord(EIP) or HiWord(ESP) wasn't zero.
       - DEBUGX: DI additionally displays DPMI exception vectors.
       - DEBUGX: when running in NTVDM, DEBXXVDD.DLL will be loaded, which
         will make L and W work with sectors on this platform.
       - DEBUGX: DM now works in protected-mode as well.
       - now all commands are described in DEBUG.TXT.
    1.13 [27 February 2008]
       - DEBUG bugfix: L and W with sectors worked for DEBUGX only in v1.12.
    1.14 [12 January 2009]
       - DEBUGX bugfix: 'D ip' caused a syntax error.
       - DEBUGX bugfix: if debugger stepped into an INT in protected-mode,
         the carry flag was cleared.
       - H improved.
       - source converted to Masm syntax.
       - samples in Masm syntax added.
    1.15 [12 April 2009]
       - bugfix: in v1.04-v1.14, restoring debuggee's interrupt vectors
         23+24 caused a memory corruption (8 bytes) due to a wrong segment
         register value.
    1.16 [20 April 2009]
       - bugfix: 'mnc' command was rejected. Syntax changed to 'mc n'.
       - bugfix: in v1.14-1.15, 'g' didn't reliably detect whether a bp was
         external.
       - bugfix: 'g' command could get confused by opcode CD 03.
       - DEBUGX bugfix: 'a' command ignored hiword of current offset in
         32-bit segments.
       - DEBUGX bugfix: when debuggee was in protected-mode and then
         terminated during execution of 'p' or 't' command, the try to
         restore an internal bp may have caused memory corruption.
    1.17 [28 April 2009]
       - bugfix: R <32-bit register> <new value> didn't work in v1.16.
       - bugfix: DPMICL16.ASM wasn't a sample for a 16-bit DPMI client.
       - bugfix: under some conditions 'm' was silently rejected.
    1.18 [18 May 2009]
       - DEBUGX bugfix: RN required a 386+ CPU.
       - DEBUGX bugfix: RN always assumed that current mode is real-mode.
         However, the layout of FSAVE/FRSTOR differs for protected-mode.
       - bugfix: 'A' command didn't accept a semi-colon right after the
         mnemonic (example: clc;)
       - if CPU is 386+, the 32-bit version of FSAVE/FRSTOR is used now,
         which improves display of the FPU status.
       - 'r' command: EFL added to 386 register display.
       - for FLDENV, FSTENV, FSAVE and FRSTOR, 16/32 bit variants with
         suffixes W/D were added: FLDENVW/FLDENVD, FSTENVW/FSTENVD, ...
       - DEBUGX: 'rm' command added to display MMX registers.
       - DEBUGX: instructions MOVD, MOVQ, EMMS added to assembler and
         disassembler.
       - layout of tables in debugtbl.inc modified to make them use
         symbolic constants and addresses. This allows to modify this
         file directly.
    1.19 [18 October 2010]
       - DEBUGX bugfix: breakpoints set with G couldn't be reset if the
         debuggee's current mode (real-mode / protected-mode) did change
         inside G.
    1.20 [20 October 2010]
       - DEBUGX: bugfix of v1.19 modified to navigate around a couple of
         CWSDPMI bugs.
    1.21 [29 October 2010]
       - DEBUGX bugfix: internal breakpoints set by T or P still had
         problems if a mode switch occured.
    1.22 [11 November 2010]
       - DEBUGX bugfix: wrong value of PSP displayed with DM if debuggee
         was halted in real-mode after initial switch to protected-mode.
       - DEBUGX bugfix: line assembler didn't handle PC-relative addresses
         correctly if source or destination was > 0xFFFF.
    1.23 [15 April 2011]
       - bugfix 'a' command: entering a segment register name may have
         "terminated" debug unexpectedly.
       - bugfix: XS always assumed 255 EMS handles. Now it tries to get
         the number of EMS handles by using EMS 4 function 5402h.
       - 'a' command: the segment prefix syntax as it is implemented by
         MS-DOS DEBUG is accepted now (which is a segment register followed
         by a colon).
       - file makex.bat added.
    1.24 [04 July 2011]
       - bugfix: line assembler didn't encode 32-bit addressing with SIB
         byte correctly in v1.23.
       - debug script DPMICL16.SCR added.
    1.25 [08 August 2011]
       - 2 variants (F & G) added to makex.bat
    
    ----- new development started March 2013 by VCB
    
    1.26 [01 June 2013]
       - added DB, DW and DD commands.
       - cleanup parsing of R command so spaces aren't needed.
       - added RDTSC and RDPMC instructions.
       - disassemble opcode 82h like opcode 80h.
       - fixed typos in MKTABLES.C
       - DEBUGX: removed extra dashes in MMX register dump.
       - disassemble PUSH imm without [D]WORD as the size is apparent.
       - if InDOS flag is set use BIOS instead of DOS for E command input.
       - always use BIOS input for help syntax pause.
       - DEBUGX: suppress characters > 7Eh in DX command to be consistent
         with D command.
       - merged lockdrive and unlockdrive routines to reduce size.
       - fixed bug in U command which sometimes caused only one line to be
         output for autorepeat.
       - autorepeat for P command added.
       - allow readable floating-point registers to be included in
         DEBUG.COM using new FPTOSTR define.
       - disassemble SAL and TEST duplicate opcodes.
       - fixed EMS help syntax message in source code.
       - removed EMS commands from default build.
       - added syntax D[type] L length to display length bytes starting from
         the last address displayed.
       - added PR (proceed return) command which proceeds past the next
         RET, RETF or IRET which is not nested without stopping.
       - removed obsolete switch character processing.
       - USESDA: verify PSP is at SDA+10h before using.
       - allow MOV seg,r/m and MOV r/m,seg to be assembled without requiring
         WORD PTR.
       - disassemble MOV seg,r/m and MOV r/m,seg without WORD PTR.
       - disallow invalid operand combinations in assembler.
       - updated XS command to work with EMS 3.2.
       - fixed bug in XS command report of total number of handles.
       - change line_out buffer size to 256 bytes.
       - added missing value to exponent table in FPTOSTR.INC.
       - minor size optimizations.
       - count lines for pausing in help syntax text display.
    1.27 [26 June 2013]
       - don't display MCB name if < DOS 4.
       - removed set mode commands (M x and MC x) from default build.
       - minor size optimizations.
       - merged EMS help into main help and removed X? command.
       - don't display specified handle in XD command.
       - fixed bug in XS command report of handles.
       - added EMS Invalid function error message.
    1.28 [03 August 2013]
       - removed obsolete instruction check.
       - added undocumented SALC and INT1 instructions.
       - added SYSENTER and SYSEXIT instructions.
       - removed unofficial FCMOVcc aliases.
       - fixed MKTABLES.C to build properly using old DOS MS C compiler.
       - fixed MKTABLES.C to properly handle machine specification with
         disassembly-only instruction variants.
       - include set mode commands (M x and MC x) in DEBUGX.
       - include show machine code only when MODESETCMD is defined.
    1.28a [08 August 2013]
       - added REPZ and REPNZ aliases.
       - removed incorrect FNLDCW and FNSETPM aliases.
    1.28b [11 August 2013]
       - added FFREEP and undocumented floating-point aliases.
    1.28c [22 August 2013]
       - allow DX command to be included in DEBUG.COM.
    1.28d [29 August 2013]
       - fixed typo in INSTR.ORD.
       - disallow MOV to/from CR1.
       - indicate FSTSW AX is a 287+ instruction.
       - minor source code cleanup.
    1.28e [15 September 2013]
       - cleanup MKTABLES.C to remove warnings and be ANSI C compliant.
       - minor source code cleanup.
       - disassemble 32-bit sign-extended PUSH imm.
    1.28f [30 September 2013]
       - display MMX registers in standard register format.
       - change _ITEXT segment class name so that LINK /TINY works.
    1.28g [28 October 2013]
       - ignore mod bits when disassembling MOV CRx/DRx/TRx instructions.
    1.29 [30 January 2014]
       - FPTOSTR: added RNR command to display raw floating-point registers.
       - DEBUGX: trap INT 6 in real mode and protected mode.
       - ensure that help syntax pause works properly on MDA/CGA systems.
       - minor size optimizations.
       - removed unnecessary FWAITs before floating-point instructions.
       - removed last opcode from floating-point status display.
       - indicate INT1 is a 386+ instruction.
       - display FS and GS memory references.
       - don't display memory reference if LEA.
       - properly display LDS/LES/LFS/LGS/LSS memory references.
       - display CALL/JMP FAR memory reference.
       - fixed operand keys for SLDT and SMSW.
       - minor source code cleanup.
    1.29a [04 February 2014]
       - device driver version: build DEBUG.SYS instead of EXE.
       - allow INT 6, C or D to be trapped in DEBUG.COM.
       - always trap INT 6 and C in protected mode.
       - removed MAKEX.BAT; merged into MAKE.BAT.
       - fixed bug in L and W commands error message display routine.
       - properly initialize saved INT 23h and 24h values for interrupt
         display hack routines.
    1.29b [11 February 2014]
       - fix case bug in D[type] L length syntax parsing.
       - remove MCB define so DM command is always present.
       - ensure DM command does not display an extraneous entry.
       - check for multitasking MS-DOS 4.
       - always exit using INT 21h function 4Ch.
       - minor size optimizations.
    1.29c [16 February 2014]
       - don't use LEAVE in FloatToStr to work on 8086/8088.
       - removed non-standard SEG pseudo-op.
       - minor size optimizations.
       - cleanup device driver build.
    1.29d [28 February 2014]
       - display same error for L and W commands if no filename given.
       - minor source code cleanup.
    1.29e [10 March 2014]
       - minor size optimizations.
       - EMMS, MOVD and MOVQ now manually added to DEBUGTBL.INC for
         DEBUGX.COM (MMXSUPP) removing overhead from DEBUG.COM.
    1.30 [08 April 2014]
       - minor size optimizations.
       - added page frame display to XS command.
       - change line_in buffer size to 130 bytes.
       - reduce resident size of device driver build.
       - use DOSKEY for input if loaded and InDOS not set.
       - drop VDD support.
    1.30a [18 November 2014]
       - don't use DOSKEY if < DOS 5.
       - DEBUGX: don't issue INT 2Fh if < DOS 3.
       - added undocumented 286 LOADALL instruction.
       - minor source code cleanup.
    1.30b [01 December 2014]
       - don't allow set mode command (M) to set a value higher than the
         actual CPU.
       - don't allow set mode command (MC) to set a FPU if there isn't one.
       - minor source code cleanup.
    1.31 [14 March 2016]
       - fixed bug in 287/387 detection.
       - added 186 detection.
       - added undocumented 386 LOADALL instruction.
       - properly display help text when InDOS is set.
       - minor source code cleanup.
    1.32 [08 April 2016]
       - added page flipping support (/F).
       - make RN and XS commands use standard output routine.
       - fixed minor bug in XS command report of mappable pages.
       - DEBUGX: restored obsolete instruction check.
       - minor size optimizations.
       - minor source code cleanup.
    1.32a [21 April 2016]
       - cleanup parsing of DM, I, O and RM commands.
       - exit if DOS 1.
       - merged MC command into M command.
       - allow DX command to work on a 286.
       - remove PAGEFLIP define so page flipping (/F) is always present.
       - change mode command to use its own variables.
       - disallow 32-bit registers, FS and GS on 16-bit processors.
       - minor size optimizations.
    1.32b [14 May 2016]
       - ensure initial flags are always the same as MS-DOS DEBUG.
       - move execblk to unused portion of PSP saving 22 bytes.
       - minor source code cleanup.
       - minor size optimizations.
