---
layout: page
title: "PC-SIG Diskette Library (Disk #859)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0859/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0859"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC/370 CROSS ASSEMBLER 2 OF 3 (402,1352)"

    PC/370 is a cross assembler that lets you compile and run IBM 370
    Assembly language programs on a PC, XT or AT.
    
    These programs are well-documented with a good demonstration program.
    This is one of the most complete emulations of the VM370 assembler
    around.  A generous debugging and erase facility is also included to
    help you complete development cycles without the big blue box.
    
    Features included:
    
    ~ PC/370 assembler subroutines can be called from Micro Focus COBAL/2
    programs running either in extended memory-protected mode or normal MS-
    DOS real mode.  Standard linkage conventions are supported.
    
    ~ PC/370 run-time emulator can be made resident to eliminate loading it
    for each program or subroutine execution.  As part of making the
    emulator reusable, debug supports restoring traces
    
    ~ Hardware assist is available for the CVB and CVD 370 instructions
    using the math co-processor to speed up the instructions by a factor of
    four
    
    ~ Two new supervisor calls are included: SVC 36 will load into a
    predefined area of memory (useful for overlays); SVC 37 defines user
    SVC exits for modifying native SVC support without requiring an
    emulated interrupt driven shell
    
    ~ The cross assembler supports the copy statement to include source
    code files
    
    ~ The linkage editor supports option U to allow external unresolved
    references.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## Z86SUB.ASM

{% raw %}
```
         TITLE   'Z86SUB - 8086 USER EXIT'
;
; PGMID. Z86SUB.ASM LINKED TO Z86SUB.EXE
; AUTHOR. DON HIGGINS
; DATE.   04/12/87 CONVERTED TO MASM V4 STD. EXE CONVENTIONS WITH FAR EXIT
;
CODE     SEGMENT PUBLIC
         ASSUME  CS:CODE
PRTMSG   PROC    FAR
         PUSH  DS    ;SAVE DS
         PUSH  CS
         POP   DS    ;MOVE CS TO DS
         MOV   DX,OFFSET MSG
         MOV   AH,9
         INT   21H
         POP   DS    ;RESTORE DS
         RET
PRTMSG   ENDP
MSG      DB    'HELLO FROM Z86 SUB',0DH,0AH,'$'
CODE     ENDS
         END
```
{% endraw %}

## HELP.DOC

{% raw %}
```
 
PC/370 help documentation

So you've successfully installed PC/370 using the BAT\INSTALL.BAT
command, have run the demo programs, and have read the documentation
files, but you still have some questions.  Well, here are some of the
most frequently asked questions and some answers which may help:

  1.  Where can I get more help?

      Send letter and/or diskette with problem to me at the address
      listed below and I will reply.  Subscribe to Compu-Serve
      electronic mail survice adn send me EASY mail message
      using ID# 73047,1113.

  2.  The A370.EXE cross assembler gets I/O error reading my source
      ALC program file?

      The file must be in ASCII text form with line feed (X'0A')
      character ending each line of text.  This is standard PC format
      used by most text editors including EDLIN and SEE.  If the ALC
      file was downloaded from an IBM mainframe, it may need to be
      translated from EBCDIC to ASCII.  Most mainframe to PC link
      facilities have this translation option as a default.

  3.  The A370.EXE cross assembler did not recognize some statements?

      See USER.DOC for OS/VS assembler features not supported by
      A370.EXE such as macros, and see the reference section for
      additional texts on OS/VS assembler and ASSIST.  If the program
      has macros, you must use the M370.COM macro preprocessor to
      expand macros into basic assembler first.  If the program has
      floating point E, D, or L type DC constants, an 80x87 math co-
      processor must be installed for the assembler to correctly
      assemble the floating point constants.

  4.  The L370.EXE linkage editor keeps getting unresolved external
      references even though I've checked that all subroutines have
      been added to system or program LIB file with correct /B option
      of MS-DOS copy command as shown in BAT\BLDLIB.BAT?

      The linkage editor scans the program LIB file first and then the
      system LIB file in sequential order attempting to resolve all
      external references in one pass.  If any module selected for
      inclusion calls a module previously scanned and not selected,
      then the link will fail as a result of the backward reference.
      You must sequence the libraries to eliminate backward references
      or force loading of required modules with explicit external
      address constants.  To allow unresolved references use option U.

  5.  My first program will not run.  How do I debug it?

      Specify an upper case T as only parameter when executing program
      to start in debug mode or link it with option D specified.  At
      the interactive debug prompt, type T to trace instructions up to
      point of failure.  You can stop trace at any point by hitting
      any key and then typing T again to restart.  If no entry point
      name was specified on END statement, the program will start at
      first byte of code.  If there are too many instructions before
      failure to trace, enter Q for quiet mode execution up to point
      of failure and then enter N for list of last 20 instructions
      executed.  See debug chapter of USER.DOC for more information.

  6.  My write to operator message printed garbage after message?.

      Add $ character to tell MS-DOS where end of text is.

  7.  My first file I/O operation caused an I/O error?

      Make sure that file is in current directory or that complete
      MS-DOS file path was specified in DCBDSN field of DCB with a
      trailing null character (X'00').  Make sure that record length
      (LRECL) includes room for carriage return and line feed
      characters in each text record.  Text record processing on the
      PC is quite different from the normal fixed length text record
      processing on an IBM mainframe.  Text records on the PC created
      by the SEE.COM full screen editor or most other PC editors such
      as EDLIN store text records in variable length ASCII form with a
      carriage return (X'0D') and line feed (X'0A') character
      indicating the end of each record and an end of file (X'1F')
      character after the last line feed.  If the file being read or
      written has 80 data characters, then the record length needs to
      be 82 bytes for text type files.  See SYSTEM.DOC for more
      information on file DCB options including translation between
      EBCDIC and ASCII.  The ASSIST extended instructions XREAD and
      XPRNT make the translation between ASCII text file format and
      EBCDIC fixed length record format automatically.  See the ASSIST
      demo programs DEMOAST1.ALC through DEMOAST4.ALC and the ASSIST
      section of USER.DOC for more information.

  8.  The records read from my input file appear to be in ASCII
      instead of EBCDIC as expected by the 370 program?

      The default for DCB text file processing is not to translate
      between ASCII and EBCDIC.  There is an option bit in the DCBFLG
      byte named DBTRAN which can be set prior to open to request that
      each record be translated such that file is in ASCII and record
      processed by program is in EBCDIC.  The ASSIST extended
      instructions XREAD and XPRNT automatically make this
      translation.

  9.  Why don't you have an option to let all character strings
      default to ASCII instead of EBCDIC code in an assembler program?

      Release 1 did have option E to specify either ASCII or EBCDIC
      for DC character strings and self defining character strings
      such as immediate data in CLI instruction.   This created non-
      standard 370 code by default when the ASCII mode was selected
      and was very confusing when mixing subprograms with different
      options.  Release 2 removed the E option and added option to
      define ASCII character strings using double quotes.   This
      solution also allows both types of character strings to be
      easily used in a single program.

 10.  Can I download and use the MVS, VM, or VSE macro's?

      No.  First they are copyright by IBM and licensed only on the
      mainframe they reside on.  Second, they would not work without
      changing them to use PC/370 supervisor calls and the limited
      syntax of the macro pre-processor.  The common MVS macros
      included such as DCB, OPEN, CLOSE, GET, and PUT have been coded
      from scratch for the PC environment.  Several different users
      are developing additional macros to provide compatible unit test
      environments for each of the above operating systems.

 11.  Can I download load modules from an IBM mainframe and run
      them using PC/370?

      Yes, but only if you also complete a PC/370 shell such as the
      MVS demo shell to intercept all SVC's and supervisor state
      instructions used.  The demo shell will support a native 370
      mainframe MVS load module that only uses problem state
      instructions and the WTO and WTOR svc's.  The actual load module
      file would have to be processed to remove all the extraneous
      fetch control records leaving just the 370 object code in a MOD
      type file which could be loaded and executed by the shell
      program.  The object code would have to be self relocating (i.e.
      no relocation records in the load module file).

 12.  Can I download fixed blocked files and read them directly with a
      PC/370 program?

      Yes, one of the DCB file processing options is fixed blocked.
      This mode assumes that the file contains fixed length binary
      and/or EBCDIC data records with no carriage returns or line
      feeds.  Text files are not normally stored in this format on
      PC's because it wastes so much space compared to the variable
      length ASCII text format.

 13.  Can I upload source, object, or load modules to the mainframe
      and execute them?

      Yes, with the following restrictions:

        a. Source code must be translated back to EBCDIC and any SVC's
           or macros used must be compatible with the mainframe
           operating system and macro assembler.

        b. Object code can be uploaded after it is converted from
           compressed bit stream format (OBJ) to OS/VS linkage editor
           80 byte fixed blocked format (370) using the utility
           T370.COM which is included in both object and source form.
           This is being used by some software developers who unit
           test code on a PC and then upload tested object code to
           mainframe.

        c. Load module code can be uploaded but with the following
           restrictions.  Only MOD format code would make sense to
           upload since the loader code in COM format files is unique
           to PC MS-DOS environments.  An application interface on
           the mainframe would have to be written to read the MOD
           file code into memory and link to it.  Of course, the
           supervisor instructions would have to be compatible with
           the mainframe operating environment.

Please send additional questions and answers you think would be
helpful to other users.  I will add them with appropriate credits.
This file was first added in release 4.2 at the suggestion of BIll
Earle.

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
 
HISTORY.DOC Summary PC/370 Release History

     MMS/370 R1.0 12/28/81 first beta test demo for Z80 CP/M-80

         Successful demo program assembly, link, and execute
         completed on the following systems:

           1.  Radio Shack Model II with Lifeboat CP/M  v2.2.
           2.  Cromemco system with Tarbell CP/M  v1.4.

     MMS/370 R1.1 01/04/82 first Distributor evaluation version
                           sent to Lifeboat Assoc. for evaluation

     MMS/370 R1.2 12/20/82 second beta test

     MMS/370 R1.3 02/12/83 first user release

     A370
        1.  Add XREAD, XPRNT, XDECI, XDECO, XFILI, XFILO, XDUMP
        2.  Fix location 0 overlay processing missing END.
        3.  Force E22 length error for 0 length program.
     L370
        1.  Force E08 memory error for 0 length segment.
        2.  Fix incorrect SEARCH return code due to DEQ.
        3.  Fix ORG error at end if no literals.
        4.  Fix bad stack address at program entry with option G.
        5.  Fix object code error when control Z is first byte of
            physical block in concatenated object file.
        6.  Allow alternate disk drive A for L370.LIB if not found
            on specified drive for object file.
     E370
        1.  Add ASSIST support plus interactive debug log option.
        2.  Add 370 instruction trace and instruction address stop.
        3.  Add 370 address protection for CP/M and E370 areas.

     MMS/370 R2.2 05/04/83 second user release with new XA extensions

     A370
       1.  27 new instructions added including BAS, BASR, MVCIN,
           BSM, and BASSM.
       2.  Fix made to handle explicit 256 byte SS instructions
           correctly.
       3.  Fix DC logic to surpress duplicate references to *.
       4.  FIX SVC interface to save IX and IY for NEC PC MSDOS.
     L370
       1.  Fix stack pointer for execution for option G to prevent
           initial call from storing address in program area.  Also
           changed call in prefix to simple jump to emulator entry.
     E370
       1.  5 new non-privileged instructions supported along with
           PSW address mode bit 17.
       2.  The existing instructions LA, BAL, BALR, EDMK, and TRT
           all have been modified to function correctly in both
           24 and 31 bit addressing modes.
       3.  Fix incorrect instruction length code in BAL 24 bit
           mode .
       4.  Fix incorrect EDMK address for single byte PD fields.
       5.  Fix incorrect SS instruction processing when length is
           over 128.
       6.  Fix fixed point multiply and divided overflow when
           result is negative.
       7.  Fix sign of remainder for fixed and packed divide.
       8.  Fix packed decimal compare for negative zero.
       9.  Fix condition codes for multiply and divide exceptions.
      10.  Fix Assist XREAD to correctly support 1 byte area.
      11.  Fix arithmetic shift left overflow logic.
      12.  Fix packed decimal divide to correctly detect overflow.

    MMS/370 R2.3 06/30/83 third user release with updated XA
    extensions

     A370
       1.  Add IPM and other new XA supervisor instructions
     L370
     E370
       1.  Add IPM instruction
       2.  Change XA mode PSW bit to 32 and display extended mode PSW
           when in XA mode.
       3.  Correct BSM logic to skip save when first register is 0.
       4.  Add option to update 370 registers to MMDBUG command Y.
       5.  Reduce size of E370 by 500 bytes by changing logic macros
           to common subroutines for logical RR and RX instructions.

    MMS/370 R3.1 03/08/84 maintenance release with corrections

    A370
      1.  Fix error created by V type address constant referencing
          CSECT defined later in same assembly.
      2.  Fix length attribute of CSECT/DSECT to always be 1.
    L370
    E370
      1.  Fix error in XR and X exclusive OR logic introduced in R2.3
          when logic was combined in 1 routine to save memory.
      2.  Fix DP overflow logic to cause divide exception 0CB instead
          of divide overflow.  Note divide exception cannot be masked
          like overflow but SPIE can be used to handle it.
      3.  Check for interrupt every 256 instructions even in kill
          mode.
      4.  Only trace IFL entries in 370 mode for N command.
      5.  Fix NODBUG minimum storage replacement module for MMDBUG to
          correctly NOP 370 TRACE calls.

    PC/370 R1.0 06/08/85 first freeware release for 8086 MSDOS systems

    A370
    L370
      1.  Force option F to always dynamically load E370.EXE. The
          emulator can no longer be linked with 370 code since L370
          does not process native 8086 assembler object code format.
    E370
      1.  Add SVC's 17-22 to handle extended MSDOS functions such as
          time.

    PC/370 R1.1 11/11/85 maintenance release

    A370
      1.  Allow lower case command line.
      2.  Fix error for zero length data in DC for alignment.
    L370
      1.  Allow lower case command line.
    E370
      1.  Allow lower case debug command entry.
      2.  Initialize register 13 to standard save area.
      3.  Support 370 instruction address reset via J command.
      4.  Only stop at IFL trace in 370 address stop mode.
      5.  Attempt to close all files when exiting via <esc> command.
    DOC
      1.  Add documentation files describing trace id points.

    PC/370 R1.2 07/18/86 maintenance release plus SEE editor utility

    A370
      1.  Drop form feed on first page heading.
      2.  Translate lower case ASCII comments to upper case.
      3.  Align column headings for cross reference and repeat
          headings.
      4.  Fix error when DC F coded without data - now issues error.
      5.  Rearrange opening of files in pass 2 to insure that no more
          memory is required in pass 2 than in pass 1.  This allows
          number of symbols to directly determine maximum assembly
          possible (SEE is within 30 symbols of maximum now).  Note
          debug was removed from A370 (8k) to provide more symbol
          space.  Also note in pass 2, ALC file buffer will be smaller
          to provide room for object and print file buffers if
          necessary to not exceed pass 1 memory usage.
      6.  Tighten TITLE syntax to require correct leading quote.
    L370
      1.  Drop form feed on first page heading.
      2.  Align column headings with data lines.
      3.  Correct bug causing CSECT reference labels to be truncated.
    E370
      1.  Correct bug in XDECI ASSIST instruction to correctly input
          negative numbers.
      2.  Translate DDNAME to ASCII for SEARCH and DELETE SVC's.
      3.  Reverse DMAS, DMAE, BLKE addresses during OPEN/CLOSE along
          with EODAD and SYNAD addresses to support user defined
          buffer.
      4.  Change debug trace to only trace first ID after IFL in 370
          mode.
      5.  Support trace ID's IOF and ION to turn interrupts off and
          on.
      6.  Fix bug in IOS get text record routine which caused
          premature end of file when DCB was within 128 bytes of
          buffer area due to uninitialized register picking up DCB
          address instead of DMA address during pending EOF
          processing.
      7.  Fix bug in IOS random write routine to increment block
          pointer when writing blocks larger than 128 bytes.
      8.  Change debug to not kill SVC 9 trace entries from 370 code.
      9.  Add SVC 23 to perform RENAME using DCB with EBCDIC names.
          (See SEE.ALC for example use and IHADCB extensions.)
     10.  Add SVC 24 to microcode printing line of ASCII text on
          screen with attribute colors. (used to more than double SEE
          speed).
     11.  Fix memory management to not allocate from last FQE unless
          there is room for a remaining smaller FQE pointer.  Force
          end of memory at x'FF00' to leave room for stack.
     12.  Support S save/unsave debug command to protect current trace
          ID while running in kill mode.  (very useful to obtain high
          speed execution up to selected point in program).
     13.  Save 8086 flags in high R0 for BIOS SVC's such as KEYBOARD.
     14.  Add explicit EBCDIC/ASCII translation and line control
          options to SVC's 0-24 via high bits of R2:
            bit 0 - explicit control if on, else use option E
            bit 1 - force EBCDIC translation if on, else use ASCII
            bit 2 - force addition of line control, else none

            (For example ICM R2,8,=X'80' would force no translation
             and no line control regardless of option E setting.)
     15.  Fix debug N trace listing to translate SVC 9 EBCDIC Id's.

     DOC
      1.  Add SEE.ALC source code utility to edit or browse an ASCII
          text file in full screen color mode.  Keystrokes are
          compatible with Turbo Pascal and PFS:WRITE.  The editor
          supports files up to 512k.  SEE includes character graphics
          to support line drawings and organizational chart drawings.
          SEE also supports creation of session keystroke file (.KSF)
          which can be reused to recreate SEE session with full screen
          colors and with keyboard pause and wait control.
      2.  Add PRINT.ALC source code utility to print source programs
          and PC370.DOC documentation file with page control.
      3.  Add information on electronic bulletin board and PC-SIG
          distribution via disk #402.
      4.  Add DW3NUM.ALC source code utility to insert line numbers on
          all non-blank lines in a Displaywrite III text document.
          Numbers are placed in left margin and reset at beginning of
          each page.  This program serves as a model for other
          utilities that could be written to process Displaywrite III
          document files directly.  This utility squeezes file and
          lists file on console in the process of inserting line
          numbers.
      5.  Drop form feed on first page heading for PRINTDOC.ALC.

    PC/370 R2.0 05/16/87 major update with 512 address space support

    A370
      1.  Converted to EXE format with 64k data segment and buffer
          segment.
      2.  Now supports 3 times as many labels and literals.
      3.  File handle I/O with pathing much more efficient.
      4.  Fix error if DSECT's contain anything but DS instructions.
      5.  Allow references to ENTRY symbols within same module.
    L370
      1.  Converted to EXE format with 64k data segment and buffers
          segment.
      2.  Now supports code modules up to 50k.
      3.  File handle I/O with pathing much more efficient.
      4.  New option M creates 370 MOD file without COM prefix.
    E370
      1.  Converted to EXE format running in high 64k segment.
      2.  The standard instruction set plus ASSIST now supports
          direct addressing up to the maximum available memory
          under MS-DOS 2.0+ (512k+).
      3.  Error in one byte overlapped pack instruction corrected.
      4.  Error in BXH and BXLE with negative updated index values
          fixed.
      5.  Memory management now supports the full address space
          using 8 byte free queue elements (4 byte address and
          4 byte length).  ASCASF FQE chain pointer is located at
          X'118'in new address space control block.  The same
          registers for SVC 10 and 11 are used.
      6.  File management support has been rewritten using MS-DOS
          file handle I/O to support pathing and random or
          sequential access to multiple files.  Each file can
          have up to 64K buffer.  Maximum files open is
          controlled by CONFIG.SYS FILES= parameter.  See
          DOC\SYSTEM.DOC and CPY\IHADCB.CPY for more information.
      7.  The interactive debug facility has been expanded to
          provide additional support for virtual address space
          separate from emulator address space.  The Z command
          determines which address space functions refer to.  The
          debug facility is included in A370 and L370 as well as
          E370.  A new "I" command added, dumps full word counter
          which is source record count in A370, logical object record
          in L370, and 370 instruction counter in E370.  Address stop
          on this word can be used to stop execution at any desired
          point.  However, note that in kill mode, the counter may be
          incremented more than once between trace ids preventing
          address stop on equal from triggering.
      8.  The interface between linked COM modules and the E370.EXE
          emulator has been redesigned to use the MS-DOS standard EXEC
          function instead of somewhat non-standard overlay load.  Now
          the first 16 bytes of each linked COM module contains the
          EXEC mainline which links to E370.EXE in the high 64k of
          available memory.  E370.EXE initializes the virtual address
          space origin 16 bytes past the beginning of the COM module
          with executable code starting at X'210' into module or
          relative X'200'.  COM mainline will abort if there is not
          room for COM module plus 64k for E370.EXE.
      9.  E370.EXE now supports SVC 25 to load any kind of file
          including linked COM files into free memory.  See
          DOC\SYSTEM.DOC and CPY\IHASCB.CPY.
     10.  E370.EXE now supports SVC 26 an 27 for attach and detach of
          COM 370 programs which run in their own relative address
          spaces.  See DEMO\DEMOPSW series of demo programs for
          example.
     11.  Fix trace and PSW address of EX target instructions.

    PC/370 R2.0A 05/24/87 fixes to 2.0

    A370
      1.  EQU's preceeding first CSECT caused 0 length blank CSECT
          error.
    L370
    E370
      1.  Error in Freemain svc 11 when releasing block between two
          existing free blocks chained to third free block.
      2.  I/O supervisor now takes SYNAD exit if bad RBA causes random
          read or write to fail due to pointing beyond disk capacity.

    PC/370 R3.0  08/30/87 new macro preprocessor, floating point,
          scientific subroutines, generic interrupt SVC, ASCII string
          constants, MVS shell demo with SIO channel simulator
    A370
      1.  Support for E, D, and L floating point constants added.
      2.  ASCII string constants in double quotes added and self
          defining string constants fixed to handle C'''' etc.
      3.  Error in DS or DC destroyed location counter causing
          additional erroneous base errors in following instructions.
      4.  Treat blank lines like comments instead of syntax errors.
    L370
      1.  Error in concatenating object files when previous file ends
          exactly on 128 block boundary.
      2.  Add option I to surpress all interrupts during execution.
      3.  Add option P to surpress floating point even if 80x87 avail.
    E370
      1.  Floating point instructions added using 80x87.
      2.  SVC's 28-35 added to assist use of ASCII strings, generic
          interrupt to issue any MS-DOS or BIOS interrupt with user
          defined PC registers, plus scientific subroutine assist
          using 80x87 routines for square root, 2**X, tangent,
          arctangent, logs.
      3.  Fixed ASCII file output translation option (was translating
          after write) in PUT svc.
      4.  Correct ASCII/EBCDIC translation of left bracket and GE
          symbols.
      5.  Correct debug jump command to handle addresses over 64k in
          370 mode.
      6.  Correct MP to return specification error if L'A LE L'B, L'B
          GT 8, or high bytes of A for length L'B not zero.

    PC/370 R3.1  09/02/87 maintenance to R3.0 based on user feedback

    A370
      1.  Fix error in object code ORG when DS is used in multiple
          CSECT module causing L370 link error due to ORG exceeding
          length of CSECT (offset to start of non-zero CSECT was not
          being subtracted to calculate relative CSECT ORG address).
          Explicit ORG's worked fine, only a DS generated ORG caused
          error.
    L370
    E370

    PC/370 R3.2  09/07/87 maintenance to R3.1 based on user feedback

    A370
      1.  Allow maximum 80 character ALC source with seq. #.
      2.  Fix label equated to CSECT/DSECT which caused L370 errors.
      3.  Flag DC error for RLD's for DSECT labels which caused L370
          errors.
    L370
    E370
      1.  Fix ZAP to correct regression bug with R2.0 where any number
          with zero in low nibble gives positive sign and zero
          condition.

    PC/370 R4.0  11/08/87 maintenance to R3.1 based on user feedback

    A370
      1.  Add support for COPY statement to include source code from
          any MS-DOS path\filename.  The default suffix is CPY.
    L370
      1.  Add option B to create file identical to COM file but with
          suffix BIN for use with Micro Focus COBOL.
    E370
      1.  Support resident option invoked by directly executing the
          emulator EXE module.
      2.  Support calls from Micro Focus COBOL in resident mode using
          standard linkage conventions and V=R addressing mode.
      3.  Modify OPEN logic to allow use of SYNAD exit even though
          file may not be open due to error such as file not found.
          Add error and function codes in R0 and R1 for use by SYNAD
          exit in determining error (see LIB\SYNERROR.ALC).

    PC/370 R4.1  11/20/87 maintenance to R4.0 based on user feedback

    A370
      1.  Correct ORG to correctly handle CSECT or DSECT name as well
          as any relative expression (The code was only allowing
          relative expression operand rather than special label type).
    L370

    E370
      1.  Correct serious bug in release 4.0 which stores 8 byte free
          queue element directly after the end of each BIN module.
          (This code to build free area behind COM modules can cause
          COBOL run time system to crash after exiting from
          subroutine depending on use of area overlayed).
      2.  Add optional parameter to define size of system queue area
          (SQA) memory in the resident emulator address space for use
          by COBOL subroutines.  Size is in hex paragraphs and default
          is 10 or 256 bytes.  Through use of SQA, COBOL subroutines
          can now perform standard file I/O with dynamic buffer
          allocation (See BAT\RUNCBL.BAT demo for example SQA and
          I/O use).
      3.  Enhance interactive debug to support resident reusability by
          restoring all traces at beginning of each COM execution and
          at beginning of all COBOL subroutines called with option D
          specified at link edit.  Also toggle command K can be used
          to restore traces at any point in program execution (This
          allows quickly reaching a selected point in program and then
          restoring traces for complete instruction tracing).
      3.  Support user defined standard COBOL return code using value
          in register 15 (low 16 bits) at exit.

    PC/370 R4.2  01/05/88 Micro Focus XM protected mode support

    A370
    L370
      1.  Add option U to allow undefined external references.
    E370
      1.  Support Micro Focus XM COBOL protected mode call to PC/370
          assembler subroutine in BIN file (See USER.DOC for more).
          The resident interrupt was moved from hex DC to hex 60.
          (See PTF.DOC for fix to change interrupt # if it conflicts.)
      2.  Fix 0C9 on CVB with negative zero packed decimal input.
      3.  Correct EBCDIC to ASCII translate tables to handle
          > { and [ conversion in both directions (half fixed in 3.0).
      4.  Flag error for text file with LRECL<2.
      5.  Fix SRP to use only low 6 bits in second operand for shift.
          (If the 6 bit number was positive, 8 bits were used.)
      6.  MVS standard parm list with address, half word count, and
          EBCDIC parm field is now pointed to by R1 at entry.
      7.  If floating point option is on and 80X87 is installed,
          hardware assist is used for CVB and CVD to speed up
          instruction by up to 4 times for large numbers.
      8.  Add MVS program interruption element (PIE) control block
          pointed to by R2 at entry to SPIE trap.  This allows full
          recovery from trap without losing content of registers.
          (See CPY\IHAPIE.CPY for more information.)
      9.  Fix incorrect PSW on exception of executed instruction.
     10.  Add SVC 36 to load overlay file at specified virtual
          address.
     11.  Add SVC 37 to define SVC user exit table.
          See DEMO\DEMOTRAP.ALC for examples.
     12.  Add production version of emulator E370P42.EXE without
          interactive debug or ASSIST facility to save 10k.
 
```
{% endraw %}

## INTRO.DOC

{% raw %}
```
 
INTRO.DOC Introduction to PC/370

Copyright 1988 Donald S. Higgins

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710

E-MAIL via CompuServe 73047,1113

The PC/370 package is a PC shareware package which supports the
assembly, link edit, and execution of IBM 370 assembler programs
on a PC with 256k and MS-DOS release 2.0+.  See READ.ME file in
root directory for registration information.

The PC/370 package consists of four main programs:

  1.  M370.COM macro preprocessor which reads macro assembler file
      and produces expanded basic assembler source code.

  2.  A370.EXE is an IBM 370 cross assembler which reads 370 source
      code file and produces object code file plus optional listing
      file.

  3.  L370.EXE is an IBM 370 cross linkage editor which reads object
      code and produces a directly executable 370 native machine code
      file plus optional CSECT listing file.

  4.  E370R42.EXE is an IBM 370 machine code emulator which is
      dynamically invoked at execution time to support execution of
      370 native machine code including the standard problem state
      instruction set plus packed decimal and floating point
      instructions.  Direct execution of E370 makes it resident to
      eliminate the time required to dynamically load it at each 370
      program execution time, and to also support calls to 370
      subroutines from Micro Focus COBOL/2 programs running under
      the default real MS-DOS mode on any 80x86 machine or the
      extendedmemory XM protected mode on 80286 or 80386 machines.

The package also comes with several 370 assembler language utilities
including:

  1.  SEE.COM      -  full screen text editor with PFS:Write and
                      Wordstar keystroke compatibility.
  2.  PRINTDOC.COM -  format utility to print documentation with
                      page numbers.
  3.  T370.COM     -  object code translator to allow uploading 370
                      object code files for direct OS/VS linkage
                      editing on 370 mainframe without reassembly.

The PC/370 package consists of the following component directories:

  1.  R42  - root directory containing all PC/370 executable code.
  2.  DOC  - documentation ASCII text files.
  3.  BAT  - demo command procedures plus install procedure.
  4.  LIB  - 370 source code for L370.LIB system subroutine library.
  5.  CPY  - 370 source code for copy members.
  6.  MAC  - 370 source code for macros.
  7.  CBL  - 370 source code for COBOL 370 subroutine demo.
  8.  DEMO - 370 source code for demo programs.
  9.  UTIL - 370 source code for utilities SEE, PRINTDOC, and T370.

On 3.5" diskette, all of the above directories are on single disk.
On 5.25" diskettes, 3 volumes are required starting with the
R42 volume which contains BAT\INSTALL.BAT command file.

The PC/370 documentation consists for the following machine readable
files which can be printed via the utility PRINTDOC.COM:

  1.  INTRO.DOC    - overview of product.
  2.  HELP.DOC     - common questions and answers
  3.  USER.DOC     - program options required to use all of the PC/370
                     facilities at the application programmer level.
  4.  SYSTEM.DOC   - program options available for use by system
                     programmers.
  5.  MACRO.DOC    - macro preprocessor options plus included macros.
  6.  UTILITY.DOC  - utility program options.
  7.  HISTORY.DOC  - history of PC/370 releases and features
  8.  PTF.DOC      - private temporary fixes for previous releases.

The PC/370 command procedures in the \BAT directory are as follows:

  1.  INSTALL - copy all PC/370 directories to hard disk with R42
                as root and all others as sub-directories.
  2.  RUNDEMO - run all the demo programs in the \DEMO directory.
                This will verify installation and illustrate the
                PC/370 facilities.  Note last section of demo
                requires 80x87 math co-processor for floating point
                demo.  This section can be skipped if no co-processor
                is installed.
  3.  RUNUTIL - run demo of the SEE text editor, PRINTDOC print
                utility, and T370 object code format utility.
  4.  RUNMAC  - run demo of macro pre-processor facility.
  5.  RUNCBL  - run demo of Micro Focus VS COBOL 370 subroutine.
  6.  BLDLIB  - rebuild L370.LIB system relocatable subroutine
                library from source code in \LIB.
  7.  BLDUTIL - rebuild utilities from source code in \UTIL.


All of the above commands are designed assuming that the current
directory is R42 and that all of the other 8 directories are defined
in the R42 directory.  No parameters are required.

To code and execute a simple sample program, type the following after
running the installation procedure file INSTALL.BAT and setting the
current directory to \R42:

  STEP     COMMAND                  COMMENTS

    1      SEE DEMO                 invoke full screen editor to
                                    create DEMO.ALC 370 assembler
                                    source file.
    2      DEMO CSECT               first line - define section
    3           USING *,15          second     - define base register
    4           LA    2,=C'HELLO$'  third      - address of msg. text
    5           SVC   209           fourth     - request console msg.
    6           BR    14            fifth      - exit to MS-DOS
    7           END                 sixth      - end of program

    8      <esc>                    enter escape key to save DEMO.ALC
                                    and exit to MS-DOS
    9      A370 DEMO/LX             assemble DEMO.ALC and create
                                    DEMO.OBJ object code file and
                                    DEMO.PRN listing with symbol
                                    cross reference.
   10      L370 DEMO/LX             link DEMO.OBJ object file and
                                    create DEMO.COM executable file
                                    and DEMO.LST CSECT listing file.
   11      DEMO.COM                 execute DEMO.COM which will load
                                    E370R42.EXE to execute 370 machine
                                    code in DEMO.COM and print "HELLO"
                                    on the console.
   12      DEMO.COM T               execute DEMO.COM again with test
                                    parameter which invokes debug
                                    facility.
   13.     T                        At debug prompt, enter T to trace
                                    each instruction while executing
                                    the demo program.

   14.     TYPE DEMO.PRN            print assembly listing.

   15.     TYPE DEMO.LST            print link edit listing.

I hope you find the PC/370 package useful.  Please send feedback on
your usage of the product and suggestions you may have.  Please
register if you want assistance with the current product and want
to support future development and enhancements.

If you are not familiar with IBM 370 assembler language, I recommend
you obtain the text, "IBM 370 Assembler Language with ASSIST,
Structured Concepts, and Advanced Topics", by Charles J. Kacmar at
Texas A&M University, and published by Prentice Hall in September
1987, ISBN 0-13-455742-5.

____________

IBM      - trademark of International Business Machines
MS-DOS   - trademark of Microsoft
VS COBOL - trademark of Micro Focus Inc.
```
{% endraw %}

## MACRO.DOC

{% raw %}
```
 
MACRO.DOC PC/370 macro pre-processor documentation

Resolution of macros in a PC370 Assembler source program is achieved
by means of a preprocessor.  To invoke the preprocessor, just type the
following:

M370 filespec

"filespec" is in the standard DOS format for file specification.  The
file extension is optional: if one is specified, it can be just
anything; if none is specified, MLC is the default. To indicate a file
with no extension, you must terminate the name by a period with
nothing behind.

The source program will be examined, with all references to macro
instructions causing the appropriate expansion to be performed.  A new
file with the same file name and ALC as the extension will be created
on the same drive as the input, ready to be passed to A370.  For
instance, typing M370 MYPROG will cause MYPROG.MLC to be read from the
default drive and MYPROG.ALC to be written on the same drive.

Macros themselves must each constitute one separate file with the
filename equal to the macro name and the extension equal to MAC, for
instance OPEN.MAC.  Macros will always be read from the default drive
(if this drive is a RAM disk, access is extremely fast).

Macros can have both positional and keyword parameters.  In a macro,
references to parameters is via the & character:

   - &n ("n" being replaced by one digit from 1 to 9) refers to the
     nth positional parameter;

   - &xxxxxxxx ("xxxxxxxx" being replaced by a name from one to eight
     letters and/or digits) refers to keyword parameter xxxxxxxx.

There are two predefined and system-maintained keyword parameters:

   - &LABEL$$ refers to the label; it always returns an eight-
     character label padded with blanks if necessary;

   - &N$ references an internal three-digit counter incremented by one
     at every occurrence of a macro instruction in the source program:
     it can be appended to labels generated in the macro expansion to
     make them unique.

References to parameters may be inserted anywhere:  between commas,
parentheses or quotes, and even in comments.  If a parameter is to be
immediately followed by letters or digits, a separating period must be
used, for instance &PARM.DATA (the period will be dropped at expansion
time).  In other cases, the period is optional:  for instance, one may
code &PARM(R1) or &PARM.(R1) indifferently.  If a parameter is to be
followed by a period, two consecutive periods must be coded, for
instance &NAME..COM.

The length of a parameter can be tested in a AIF instruction by coding
K'&xxxxxxxx as the subject; the complement must then be a numeric
value.

Macros may contain five special opcodes:

  MACRO  which, if present, must be in the very first line of the
  macro.  It is used to supply the default values of the parameters.
  The MACRO statement may extend on multiple lines.

  SETC  which is used to set a new value in an existing parameter or
  in a macro work-parameter. The first execution of a SETC instruction
  for a new parameter name creates that parameter: no prior definition
  is needed.  The format of the SETC instruction is as follows:

         xxxxxxxx SETC  value

  "xxxxxxxx" is the name of the parameter, without the leading &
  character.  "value" is any value; if it is enclosed in quotes, these
  quotes will not be returned when the parameter is referenced.

  AIF  in which only one condition can be tested.  The relation signs
  supported are = # > <.  If, after resolution of all &parameters, the
  two sides of the equation are composed of digits only, regardless of
  the respective numbers of digits, the comparison is numeric
  (negative values are not supported).  If K'&parameter is coded as
  the first member and the second member is composed of digits only,
  the comparison is also numeric.  Otherwise, the comparison is
  alphanumeric and the length of the complement determines the number
  of characters compared from the subject.  Both the subject and the
  complement may be coded as is, quotes being optional.  The
  complement may contain any character except the period because the
  period indicates the end of the complement.  At the same time, the
  period is the first character of the label where to go if the
  condition is true.

  AGO  in which you code a label where to proceed unconditionally.
  This label should begin with a period.

  ANOP  which is a no-op.

Labels start with a period and can be 2 to 8 characters long.  They
can be attached to a AIF, AGO or ANOP instruction or to any regular
Assembler statement in which case the label is erased during the
expansion process.  All AIF and AGO statements referencing a label
must come before this label; in other words, branching backward is not
permitted.

Lines of comments may be inserted in a macro simply by coding .* in
the first two positions. These lines will be ignored during the
expansion of the macro.

         *****************************

In the input source program, references to macros can freely be coded.
Parameters may extend on multiple lines.  Each of these input lines is
changed into a comment line on the output.

If continuation lines are used, the continued line must stop on a
comma as the last character or followed by at least one blank and
optional comments; the continuation line may restart in any position.
No continuation indicator in column 72 is needed.

Positional and keyword parameters may be intermixed.  If the value of
a parameter is a literal in quotes, these quotes are passed as an
integral part of the value: if necessary, you can get rid of them by
issuing a SETC statement moving the parameter into itself.
Consecutive commas can be coded to skip a positional parameter and
keep its default value.

         *****************************

Here are two examples of macros:

DCB  MACRO DSORG=S,RECFM=F,MACRF=G,LRECL=80,BLKSIZE=0,
        EODAD=0,SYNAD=&EODAD,RECORD=0
&LABEL$$ DS    0F,0CL86
  DC    C'ADCB'
  AIF   &DDNAME=(.DDX  format DDNAME=(FIELD) ?
  DC    A(DCBDD&N$)    no, use generated ddname field
  AGO   .DDZ
.DDX  DC    A(&DDNAME)
.DDZ  AIF   &MACRF>P.BDAM  is MACRF equal to R or W ?
  DC    X'FFFF',X'00'
  DC    CL1'&DSORG',CL1'&MACRF',CL1'&RECFM'
  DC    X'0A1A'
  DC    H'&LRECL',H'&BLKSIZE'
  DC    A(&EODAD,&SYNAD,&RECORD)
  DC    54X'00'
  AGO   .DDN
.BDAM  AIF   '&RECORD'='0'.NOREC  has RECORD parameter been omitted ?
  DC    X'FFFF',X'40'
  AGO   .DSORG
.NOREC  DC    X'FFFF',X'00'
.DSORG  DC    CL1'&DSORG',CL1'&MACRF',CL1'&RECFM'
  DC    X'0A1A'
  AIF   '&BLKSIZE'='0'.NOBLK   has BLKSIZE been omitted ?
  DC    H'&BLKSIZE',H'&BLKSIZE'
  AGO   .ADRS
.NOBLK  DC    H'&LRECL',H'&LRECL'
.ADRS  DC    A(&EODAD,&SYNAD,0,&RECORD)
  DC    50X'00'
.DDN  AIF   &DDNAME=(.END  is DDNAME a field name ?
DDNAME  SETC  &DDNAME  to remove quotes if any
DCBDD&N$ DC    C'&DDNAME',X'00'
.END  ANOP

Note in the above example that the default value for SYNAD is that
specified or assumed for EODAD.



OPEN  MACRO
  AIF   '&LABEL$$'='        '.GO  is label field blank?
&LABEL$$ EQU   *
.GO  AIF   &1=(.REG  is it OPEN  (register) ?
  LA    2,&1
  AGO   .SVC
.REG  AIF   &1=(2).SVC  is it OPEN (2) ?
  LR    2,&1
.SVC  SVC   1



Here is an example of a program using the BEGIN, WTO, OPEN, GET, PUT,
CLOSE, RETURN and DCB macros:


TEST  BEGIN
  WTO   'DEMONSTRATING THE USE OF MACROS'
  OPEN  FILE1
  OPEN  FILE2
LOOP  GET   FILE1,RECORD
  PUT   FILE2,RECORD
  B     LOOP
EOJ  CLOSE FILE1
  CLOSE FILE2
  RETURN
FILE1  DCB   LRECL=256,RECFM=T,MACRF=G,EODAD=EOJ,
        DDNAME='MYFILE.IN'
FILE2  DCB   LRECL=256,RECFM=T,MACRF=P,
        DDNAME='MYFILE.OUT'
RECORD  DS    CL256
  END

Run BAT\RUNMAC.BAT for macro demo programs.

********************************************************************

      If you find the macro preprocessor useful and want to support
      future enhancements, please send $20.00 to:

      Jacques Roy
      XL SOFTWARE INC.
      1000 St-Jean-Baptiste #120
      Quebec City CANADA G2E 5G5

********************************************************************

The following macros are included in the MAC directory for use with
the M370.COM preprocessor.  For more information on M370, see
DOC\USER.DOC and BAT\RUNMAC.BAT.

BEGIN  SAVE={YES|NO},BASES={1|2}

  Generate CSECT and standard program beginning.
  Parameters are optional. Defaults are SAVE=YES,BASES=1.
  Unless SAVE=NO is specified, a save area is defined and register 13
  is established as the first base register. Register 12 will be
  established as the second base register if BASES=2 is specified.
  If SAVE=NO is specified, register 12 is established as the only base
  register: in this case, the program should not modify the contents
  of register 13.

CALL   pgm

  Load address of external subroutine pgm into register 15 and
  branch and link via register 14 to address in register 15.

CLOSE  dcb

  Close a file.  The parameter is mandatory and must be either the
  name of a DCB, or a register in brackets pointing to a DCB.


DCB  DDNAME=ddname
  DSORG=org
  RECFM=format
  MACRF=macro
  LRECL=reclength
  BLKSIZE=blklength
  EODAD=eof
  SYNAD=err
  RECORD=fieldname

  Generate a DCB for PC/370 file access.  See DOC\SYSTEM.DOC for more
  information.  Only DDNAME is required; all other parameters have
  default values.  Parameters can be specified in any order.

  "ddname" can be: - a filename of one to eight characters only (no
       device specification, no extension);
     - a literal in quotes of 1 to 64 characters that represents a
       valid DOS file specification;
     - the name in brackets of a 1 to 64-character field
       containing a valid DOS file specification, in EBCDIC.
  "org"       can be S or R; the default is S.
  "format"    can be F, V or T; the default is F.
  "macro"     can be G, P, R or W; the default is G.
  "reclength" is a number representing the record length; the default
       is 80.
  "blklength" is a number representing the block size; the default is
       0.
  "eof"       is the address where to go at end of file; default is 0;
       must be
       supplied for an input file.
  "eof"       is the address where to go in case of an error while
       attempting to handle the file; default is the same as for
       EODAD.
  "record"    is the address of a field where data will be read into
       or written from; default is no such field: record area will be
       specified in GET, PUT, READ or WRITE macros.

DISPLAY  fieldname

  Display text contained in fieldname on console.  Text must be in
  ASCII with ending line feed X'0A'.


FREEMAIN R,LV=length,A=address
  E,LV=length,A=address
  V,A=values

  Release dynamically allocated memory.
  Use only one of the three possible formats.

  If R or E (register or elementary format) is coded as the first
  parameter, both LV and A are mandatory. "length" is either the
  number of bytes to be released or a register in brackets containing
  the number of bytes to be released.  "address" is either the name of
  a full word or a register in brackets containing the address of the
  memory area to be released.

  If V (variable format) is coded as the first parameter, only A is
  mandatory. "values" must be the name of two consecutive full words
  that must respectively contain the address and the size of the
  memory area to be released.


GET  dcb,record

  Read next sequential fixed, variable, or text record from buffered
  file.  The first parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.
  The second parameter is optional and may be either the name of a
  field or a register in brackets pointing to a field into which the
  record will be read.  If the second parameter is omitted, the area
  pointed to by the RECORD parameter in the DCB will be used and its
  address will be passed in register 1.


GETMAIN  RU,LV=length
  EU,LV=length,A=fieldname
  VU,LA=sizes,A=values

  Dynamically allocate memory.
  Use only one of the three possible formats.

  If RU (unconditional register request) is coded as the first
  parameter, LV is mandatory and "length" is either the number of
  bytes requested or a register in brackets containing the number of
  bytes requested.  The address of the allocated memory will be
  returned in register 1.

  If EU (unconditional elementary request) is coded as the first
  parameter, both LV and A are mandatory. "length" is either the
  number of bytes requested or a register in brackets containing the
  number of bytes requested.   "fieldname" must be the name of a full
  word into which the address of the allocated memory will be
  returned.

  If VU (unconditional variable request) is coded as the first
  parameter, both LA and A are mandatory. "sizes" must be the name of
  two consecutive full words that must respectively contain the
  minimum and the maximum number of bytes requested.   "values" must
  be the name of two consecutive full words that will respectively be
  used to receive the address and the size of the allocated memory.


LINK  EP=filename
  EP='literal'
  EPLOC=fieldname
  EPLOC=(register)

  Dynamically load a module, branch and link to it, and then release
  memory.  Module's entry point is assumed to be at X'210'.
  Use only one of the four forms for parameters.  "filename" is one to
  eight characters only: the default drive and the extension of COM
  are assumed.  "literal', or "fieldname", or field pointed to by
  "register", must contain an EBCDIC character string representing a
  valid DOS file specification.


LOAD  EP=filename
  EP='literal'
  EPLOC=fieldname
  EPLOC=(register)

  Dynamically load a module (can be any file type). Register 15 will
  contain the address where the module was loaded and register 1 will
  contain the module's length.  Register 0 will contain the module's
  entry point assumed to be at X'210' from the beginning (only
  applicable if loading a COM module generated by PC370).
  Use only one of the four forms for parameters.  "filename" is one to
  eight characters only: the default drive and the extension of COM
  are assumed.  "literal', or "fieldname", or field pointed to by
  "register", must contain an EBCDIC character string representing a
  valid DOS file specification.


OPEN  dcb

  Open a file.  The parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.


PUT  dcb,record

  Write next sequential fixed, variable, or text record to buffered
  file.  The first parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.
  The second parameter is optional and may be either the name of a
  field or a register in brackets pointing to a field from which the
  record will be written.  If the second parameter is omitted, the
  area pointed to by the RECORD parameter in the DCB will be used.


READ  dcb,record,{rbn | RBN=rbn | RBA=rba}

  Read a block from a file.  The first parameter is mandatory and must
  be either the name of a DCB, or a register in brackets pointing to a
  DCB.  The second parameter is optional and may be either the name of
  a field or a register in brackets pointing to a field into which the
  record will be read.  If the second parameter is skipped (by coding
  two consecutive commas), the area pointed to by the RECORD parameter
  in the DCB will be used and its address will be passed in register
  1.  The third parameter is mandatory and may be either positional or
  the keyword RBN or RBA.  The value may be either a number, or the
  name of a full-word containing the number, or a register in brackets
  containing the number.  "rbn" is the relative block number of the
  record (first block is 0).  "rba" is the relative byte address of
  the record (first byte is 0).


REGS

  Generate R0 through R15 register equates.

RETURN  RC=nnnn,SAVE={YES|NO}

  Exit using standard linkage conventions. Parameters are optional;
  default is SAVE=YES.  If RC is specified, return code nnnn is placed
  in register 15; otherwise, register 15 is restored like all other
  registers.  Specify SAVE=NO if SAVE=NO was specified in the BEGIN
  macro.


WRITE  dcb,record,{rbn | RBN=rbn | RBA=rba}

  Write a block to a file.  The first parameter is mandatory and must
  be either the name of a DCB, or a register in brackets pointing to a
  DCB.  The second parameter is optional and may be either the name of
  a field or a register in brackets pointing to a field from which the
  record will be written.  If the second parameter is skipped (by
  coding two consecutive commas), the area pointed to by the RECORD
  parameter in the DCB will be used.  The third parameter is mandatory
  and may be either positional or the keyword RBN or RBA.  The value
  may be either a number, or the name of a full-word containing the
  number, or a register in brackets containing the number.  "rbn" is
  the relative block number of the record (first block is 0).  "rba"
  is the relative byte address of the record (first byte is 0).


WTO  message,length

  Display a message to the console.  The first parameter is mandatory
  and must be either a literal in quotes or   the name of a field
  containing the message to be displayed, in EBCDIC.  The second
  parameter is optional and applies only if the first parameter is a
  field name. It is used to indicate the number of characters to be
  displayed if this number is other than the field's length.


WTOR  message,reply

  Display a message to the console and wait for reply.  The first
  parameter is optional and may be either a literal in quotes or
  the name of a field containing the message to be displayed, in
  EBCDIC.  The first parameter may be skipped (by coding WTOR  ,reply)
  if no message need be displayed and only a reply is to be
  solicited.  The second parameter is mandatory and must be the name
  of a field into which the reply will be placed, in EBCDIC and padded
  with blanks if necessary.  Operator needs not issue a carriage
  return when reply field is full.


WTORPC  message,reply

  Display a message to the console and wait for reply.  Exactly the
  same coding as for WTOR above, except that it is achieved using
  typical PC features and that the reply's maximum length is 16
  characters.  When entering the reply, the backspace and left-arrow
  can be used to correct typing errors.  Moreover, if the same WTORPC
  is executed again, the right-arrow as well as the F1-F3 keys can be
  used to repeat characters from the previous reply.  The carriage
  return must always be issued to transmit the reply.


      ***********************************

Feel free to develop your own macros in addition to those supplied
with the system.  If you would like to make other users benefit from
general-purpose macros you have written, please send your macro
definitions, documentation and example of use to:

   Jacques Roy
   XL SOFTWARE INC.
   1000 St-Jean-Baptiste #120
   Quebec City  CANADA  G2E 5G5
```
{% endraw %}

## PTF.DOC

{% raw %}
```
PTF.DOC private temporary fixes for PC/370

It is a violation of copyright to duplicate and distribute modified
versions of PC/370.  However, users are free to apply PTF's for their
own use on their own systems.  The following PTF's may be useful:

  1.  Change R1.2 A370.COM lines per page from 50 to some other value.

      a.  Backup A370.COM to separate disk.
      b.  Rename A370.COM TO A370.TMP
      c.  VER 0A39 C606F80332  MOV BYTE PTR [03F8],32H
      d.  VER 0A3D 32
      e.  REP 0A3D xx
      f.  Save modified file and rename.

  2.  Change R2.0A A370.EXE lines per page from 50 to some other
      value.

      a.  Backup A370.EXE to separate disk.
      b.  Rename A370.EXE TO A370.TMP
      c.  VER 0920 C6064E0532  MOV BYTE PTR [054E],32H
      d.  VER 0924 32
      e.  REP 0924 xx
      f.  Save modified file and rename.

  3.  Change R3.0 path and/or filename of E370R20.EXE generated in
      each 370 COM module by L370.EXE.  For example changing name to
      C:\E370R20.EXE allows one copy of emulator to be stored in
      root directory of hard drive.

      a.  Backup L370.EXE to separate disk.
      b.  Rename L370.EXE to L370.TMP to make debug process it as data
          file.
      c.  Start DEBUG L370.TMP
      d.  Use ENTER debug command to change 64 byte path/filename at
          offset X'342'.  Name must be followed with zero byte.
      e.  Enter W command to output modified file.
      f.  Rename L370.TMP to L370.EXE.

      Note name can also be changed in individual 370 COM module at
      X'140' if for wish to have only selected COM programs use a
      different emulator.

  4.  Note ASCII translation table has been expanded to 256 bytes in
      release 3.0 to allow special characters to be added for ASCII to
      EBCDIC and EBCDIC to ASCII translation.   This facility has been
      requested by both French and German users who have extended
      character sets.

      MODULE  TABLE   ADDRESS  EXAMPLES

      A370    EBCDIC   85D0    +X'40'=X'20' FOR EBCDIC SPACE TO ASCII
                               SPACE
      A370    ASCII    86F0    +X'20'=X'40' FOR ASCII SPACE TO EBCDIC
                               SPACE
      E370R30 EBCDIC   7AB0
      E370R30 ASCII    7C50

  5.  PTF for release 2.0A to fix blank errors in L370 due to module
      in concatenated library ending on 128 block boundary.  Low
      frequency bug in PC/370 since 1985 identified thanks to Jim Gray
      of CONVAL Software. Erroneous call was added in 1983 CP/M
      version to skip CTL-Z added to each concatenated module.

      RENAME L370.EXE L370.TMP
      DEBUG  L370.TMP
      -S 0000 FFFF 4C 54 46 E8 B9 00   (VER 2CD1 'LTF', CALL GBYTE)
      -E 2CD4 90 90 90                 (REP 2CD4 NOP,NOP,NOP - NOP
      CALL)
      -W
      RENAME L370.TMP L370.EXE

  6.  PTF for release 4.0 to prevent erroneous FQE from overlaying 8
      bytes beyond end of BIN subroutine module.  Result is
      unpredictable errors after exiting PC/370 BIN subroutine back to
      COBOL run time system.

      RENAME E370R40.EXE E370R40.TMP
      DEBUG  E370R40.TMP
      -E 55D 26.EB 89.05
      -E 56B 26.EB 88.0E
      -W
      -Q
      RENAME E370R40.TMP E370R40.EXE

  7.  PTF for release 4.2 to change resident emulator interrupt # in
      case it conflicts with interrupts installed.  Note Micro Focus
      extended memory facility XM requires that PC/370 interrupt be
      within the range hex 60-6F.  The installation default in rel.
      4.2 is hex 60 (in rel. 4.1 without XM support is was hex DC).
      To change the interrupt to 61 for example:

      a.  RENAME E370R42.EXE E370R42.TXT   change emulator
          DEBUG  E370R42.TXT
          -E 46F 60.61
          -W
          -Q
          RENAME E370R42.TXT E370R42.EXE

      b.  RENAME L370.EXE L370.TXT         change linker for COM
          DEBUG  L370.TXT                  output
          -E 307 60.61
          -W
          -Q
          RENAME L370.TXT L370.EXE

      c.  RENAME SEE.COM                   change existing COM module
          -E 107 60.61                     (after fixing L370, you can
          -W                                run BAT\BLDUTIL to fix all
          -Q                                utilities)
```
{% endraw %}

## SYSTEM.DOC

{% raw %}
```
SYSTEM.DOC PC/370 release 4.1 system services documentation

Chapter table of contents:

  1.  Introduction
  2.  File input and output services
  3.  Program load and execution services
  4.  SVC documentation in SVC # order
  4.  Floating point system documentation

*********

Chapter 1.  Introduction

*********

The PC/370 system supports a number of supervisor services through
the standard 370 SVC interface.  In supervisor state, each SVC invokes
pseudo microcode which performs the function requested at native
processor speed.  In problem state each SVC causes a standard SVC
interrupt storing the current PSW at location X'20' and loading the
new PSW from location X'60'.  Supervisor call routines can be user
written to map any SVC into any desired function in problem state.

In supervisor state, svc's 1-7 provide a set of input and output
facilities using MS-DOS file handle I/O and an extended data control
block defined by the user which allows access to sequential and random
files.  Svc's 10-11 provide virtual memory dynamic management.  In
addition to the other misc. functions provided, svc 34 provides a
general purpose interrupt interface which can be used to map PC/370
area into PC registers and issue any MS-DOS function call or BIOS
interrupt.  Svc's 128-191 map into BIOS interrupts using simple
register to register mapping.  Svc's 200-241 map into MS-DOS function
calls 0-41 using simple register to register mapping.  Note function
calls above 41 can be issued using svc 34 interface which is the
preferred method for future releases.

*********

Chapter 2.  File input and output services

*********

The PC/370 supervisor calls to the I/O supervisor all require register
2 to point to the DCB.  The SVC's are as follows:

 SVC  FUNCTION  OPTIONS

   1  OPEN
   2  CLOSE
   3  READ      register 1 must be address of block or zero
   4  WRITE     register 1 must be address of block or zero
   5  GET       register 1 must be address of area or zero
   6  PUT       register 1 must be address of area or zero
   7  DELETE
   8  SEARCH
  23  RENAME

The PC/370 system supports sequential and random access to
files using MS-DOS file handle I/O with directory pathing.
To access a file, a data control block (DCB) must be defined
in the program with fields defined as shown in the dummy
section (DSECT) called IHADCB found in CPY\IHADCB.CPY and
demonstrated in UTIL\PRINTDOC.ALC.   All fields must be defined
prior to open and cannot be changed while the file is open
with the exception of RCD, BUF, and RBA as described below.

An explanation of each field in the DCB follows:

  1.  DCBDCB - DCB identifier consisting of the four EBCDIC
               characters ADCB.  These characters are
               verified each time an I/O routine is called
               with the address of the DCB in register 2.
               An attempt is made to exit to the synchronous
               error exit address if there is no match.

  2.  DCBDSN - address of up to 64 character EBCDIC path and
               file name followed by a zero byte.  This field
               is automatically translated to ASCII as
               required.

  3.  DCBFID - MS-DOS assigned file handle at open time.
               This field must be initialized to high values
               or open routine will assume file is already
               open and take SYNAD exit.

  4.  DCBFLG - file condition flags used by I/O routines.
               This field must be initialized to zero except
               user defined buffer bit DFUBUF and user
               requested ASCII file conversion bit DFTRAN may
               be turned on.  No other bits may be modified
               by user.  If the DFTRAN (X'08') bit is set, input
               records are translated to EBCDIC in the record area.
               Output records are translated to ASCII in the record
               area, written, and then translated back to EBCDIC.
               The entire LRECL area is translated.  For text mode,
               each record must end with EBCDIC line feed.

  5.  DSORG  - data set organization EBCDIC code:

                 S for sequential
                 R for random file access.

  6.  MACRF  - data set access EBCDIC code:

                 R for read block with length of BLKSZ
                 W for write block with length of BLKSZ
                 (note PRECL can override BLKSZ on write)
                 G for get logical record into RCD area
                 P for put logical record form RCD area

  7.  RECFM  - data set record format EBCDIC code:

                 F - fixed length records with length LRECL
                     for get/put sequential access or length
                     BLKSZ for read/write random or
                     sequential access.
                 V - variable length records with length
                     stored in first 2 bytes (valid lengths
                     range from 3 to 64k).  Maximum length
                     allowed for a file is LRECL and only
                     sequential get/put modes supported.
                 T - text records ending with end of record
                     code (EOR usually X'0A' line feed).
                     Maximum length allowed for a file is
                     LRECL and only sequential get/put modes
                     supported.

  8.  EOR    - end of record code for text (default NL X'0A')

  9.  EOF    - end of file code for text (default X'1A')

 10.  LRECL  - length of logical record. Maximum is 64K less 17 bytes.
               Minimum is 3 for RECFM=V, 2 for RECFM=T or 1 for
               RECFM=F.

 11.  BLKSZ  - length of block.  Maximum is 64K less 17 bytes
               and minimum is 3.  If zero is specified, a
               default block of 8k will be dynamically
               allocated and deallocated at open and close
               respectively.  BLKSZ should be specified for
               read/write access.  For sequential access,
               larger block size reduces contention between
               multiple files by reading or writing entire
               blocks at one time rather than for each
               record.  If insufficient memory is available,
               the maximum available will be allocated.

 12.  EODAD  - end of file exit address. This cannot be changed
               while file is open.

 13.  SYNAD  - synchronous error exit.  This cannot be changed while
               file is open.  If register 2 does not point to a valid
               DCBDCB ID field not exit is taken and interactive debug
               is invoked.  If exit is taken, register 0 contains
               error code and register 1 contains function code which
               can be used by to produce error message by calling
               subroutine LIB\SYNERROR.ALC which is in the default
               system relocatable library L370.LIB.

 14.  RCD    - record area address for get/put only.  This
               address may be changed on each get or put by
               placing new address in register 1.  If register 1
               contains zero, then current DCB area will be used.

 15.  BLK    - block area address used for direct I/O via MS-
               DOS.  If DFUBUF is not set at open, this area
               is dynamically allocated and deallocated using
               BLKSZ or default for length.  If DFUBUF is set, then
               new block address can be set for each read or write
               by placing new address in register 1.  If register 1
               contains zero, then current DCB block will be used.

 16.  RBA   -  relative byte address for random access
               read/write.  First byte of file is zero.  This field
               must be reset for each random read or write.

 17.  REN   -  address of file rename followed by zero.
               Only used by RENAME SVC.  Both DCBDSN and REN must be
               initialized in a closed DCB prior to RENAME SVC 23.

 18.  IOCNT -  physical I/O count since open.  Larger
               BLKSZ will reduce physical I/O count for
               sequential file access.

 19.  PRECL -  physical record length on last read or
               write.  This field is initialized to zero
               at open.  On write, BLKSZ will be calculated
               if this field is zero, else this field will
               override length allowing short blocks to be
               written.  This is useful in processing files
               of unknown length with fixed block logic.
               The last block read may be short, and the
               corresponding last block written may be short.

Do not modify the reserved areas which are only used by
PC/370 IOS while file is open.  See UTIL\PRINTDOC.ALC for
example of file access method.

*********

Chapter 3.  Program load and execution services

*********

    SVC  FUNCTION  OPTIONS

     15  USEREXIT  Transfer control to native code user exit at
                   relative address in reg 15 via far call

     25  LOAD      Reg 1 points to ASCIIZ path/filename
                   on return, reg 0 has file address, reg 1 has length

     26  ATTACH    Reg 0 must have file address of COM file and
                   reg 1 must have desired length of attached addr.
                   space

     27  DETACH    If in attached address space, exit to next
                   instruction after attach in mother address space
                   else exit to MS-DOS

     36  RELOAD    Reload file int memory at location in reg 0.
                   Reg 1 must have file address and reg 15 must have
                   maximum length of file allowed to be loaded into
                   preallocated area.

The PC/370 system includes support for dynamic loading and execution
of 370 modules assembled and linked by A370.EXE and L370.EXE.
Any file including COM and MOD type files can be loaded into free
memory by use of the LOAD SVC 25.  The only argument required is
the address of the path and file name in register 1.  The file name
must end with a suffix of the form .XXX or a zero byte.  The largest
free memory area will be allocated and the file loaded into it.
Register 0 will be set to the address of the area, and register 1 will
be set to the length of the file.  The unused portion of the allocated
area will be freed.  If the load operation was successful, register 15
will be set to zero, else it will be set to 1.  Demo test program
DEMOSVC.ALC illustrates the use of the load function to load an 8086
assembly language subroutine and execute it via user exit SVC 15.

Any 370 COM file created by L370.EXE and loaded via the load SVC 25
above, can be executed it its own address space via the attach SVC 26.
Register 0 must be set to point to the COM file (set by load SVC 25)
and register 1 must be set to address space size (minimum set by load
SVC 25),  If additional space is to be included in the attached
address space for dynamic use via GETMAIN/FREEMAIN SVC's 10/11, then
the area to be added must be allocated in the mother address space
prior to issuing attach SVC 26 and the total length of the COM file
plus the allocated free space placed in register 1.  A COM file can be
executed multiple times via attach by reloading registers 0 and 1 and
reissuing SVC 26.  On second and following calls, the same address
space control block built on the first call in the COM prefix area
is reused (See CPY\IHASCB.CPY for layout) since it overlays original
COM prefix data.

Execution of the attached address space can be terminated via a detach
SVC 27 which restores the mother address space and continues execution
at the next instruction following the attach SVC 26.  The only other
way to terminate the attached address space normally is to issue an
exit SVC 0 which exits directly to MS-DOS.  A detach SVC 27 in an
address space which has no mother, will cause exit to MS-DOS.

An alternative to using attach/detach to execute dynamically loaded
370 code is to use simple branch and link.  For 370 code linked into
COM file, the 370 code starts X'210' from the beginning of the COM
file.  For code linked into MOD type file by L370.EXE using option M,
the 370 code starts immediately at the beginning of the file (i.e. the
file load address returned in register 0 by load SVC 25).

For example of each type program loading and execution, see
DEMO\MVS.ALC and DEMO\DEMOPSW.ALC demo programs.

The virtual address space established for the execution of COM files
created by L370.EXE has the following memory layout.  For a sample
DSECT of the address space control block, see CPY\IHASCB.CPY.

 000 INITIAL PROGRAM LOAD PSW
 008 INITIAL PROGRAM LOAD CCW1
 010 INITIAL PROGRAM LOAD CCW2
 018 EXTERNAL OLD PSW
 020 SUPERVISOR CALL OLD PSW
 028 PROGRAM OLD PSW
 030 MACHINE CHECK OLD PSW
 038 INPUT/OUTPUT OLD PSW
 040 CHANNEL STATUS WORD
 048 CHANNEL ADDRESS WORD
 050 INTERVAL TIMER
 058 EXTERNAL NEW PSW
 060 SUPERVISOR CALL NEW PSW
 068 PROGRAM NEW PSW
 070 MACHINE CHECK NEW PSW
 078 INPUT/OUTPUT NEW PSW
 080 MVS PARM AREA POINTED TO BY REGISTER 1 AT ENTRY (A,H,EBCDIC TEXT)
 100 SVC ATTACH INSTRUCTION
 102 SVC DETACH INSTRUCTION POINTED TO BY REG 14 AT ENTRY
 104 ADDRESS SPACE CONTROL BLOCK ASCB FOR CURRENT COM PROGRAM
 124 RESERVED
 138 SAVE AREA POINTED TO BY REG 13 AT ENTRY
 180 PC/370 PACKAGE IDENTIFICATION RECORD
 200 BEGINNING OF 370 CODE AND DEFAULT ENTRY POINTED TO BY REG 15
     AT ENTRY IF NO OTHER ENTRY POINT SPECIFIED ON ALC END STATEMENT.

*********

Chapter 4.  All PC/370 supervisor services in SVC order

*********

    SVC  FUNCTION        REGISTERS input/output

      0  exit to MS-DOS  none
      1  open file       reg 2 = DCB address (see I/O section
                         documentation)
      2  close file      reg 2 = DCB address
      3  read block      reg 2 = DCB, reg 1 must be address of block
                         or zero
      4  write block     reg 2 = DCB, reg 1 must be address of block
                         or zero
      5  get record      reg 2 = DCB, reg 1 must be address of area or
                         zero
      6  put record      reg 2 = DCB, reg 1 must be address of area or
                         zero
      7  delete file     reg 2 = DCB address
      8  search file     reg 2 = DCB address
                         /reg 0 = return code 0 if found
      9  program trace   3 character trace ID follows SVC
     10  get memory      reg 1 = length
                         /reg 2 = address, reg 0 = 0 if ok
                         if reg 0 > 0, then reg 1 = maximum memory
                         available
     11  free memory     reg 1 = length and reg 2 = address
                         /reg 0 = 0 if ok
     12  ASCII to EBCDIC reg 1 = address and reg 2 = length
     13  EBCDIC to ASCII reg 1 = address and reg 2 = length
     14  set SPIE        if reg 1 = 0, remove SPIE else set SPIE exit
                         to reg 1
                         at SPIE entry, reg 0 contains instruction
                         length in high 16 bits, interruption code in
                         low 16 bits, reg 1 contains interruption
                         address, and reg 2 contains program
                         interruption element block (see
                         CPY\IHAPIE.CPY).
     15  user exit       reg 15 = entry point to COM 80x86 code via
                         far call
     16  instr. count    /reg 1 = current 370 instruction count
     17  load user exit  reg 1 = ASCIIZ path/file name
                         /reg 0=addr.reg 1=len.
     18  time of date    /reg 0 = hour, minute, second, 100th second,
                         reg 1 = year, reg 2 = day, month, day of week
     19  allocate memory reg 1 = address of MS-DOS real block, reg 2 =
                         length
                         /if reg 0 not zero, then reg 2 = max.
                         available
     20  deallocate mem. reg 1 = address of MS-DOS real block
     21  input byte      reg 1 = device address, reg 0 = byte
     22  output byte     reg 1 = device, reg 0 = byte
     23  rename file     reg 2 = DCB address
     24  display line    reg 1 = attributes, reg 2 = address, reg 15 =
                         row/col
     25  load file       reg 1 = path/filename
                         /reg 0 = address, reg 1 = length
     26  attach program  reg 0 = COM file address, reg 1 = address
                         space length
     27  detach program  none (return to instruction after attach)
     28  svc 209 EBCDIC  set EBCDIC to ASCII trans. for WTO svc 209
                         (default)
     29  svc 209 ASCII   turn off EBCDIC to ASCII translation
     30  svc 209 CR      turn on carriage return and line feed
                         (default)
     31  svc 209 no CR   turn off carriage return and line feed
     32  VA to SEG:OFF   convert virtual address in R1 to
                         segment:offset in R0
     33  SEG:OFF to VA   convert segment:offset in R0 to virtual
                         address in R1
     34  interrupt       general purpose interrupt facility which
                         supports all MS-DOS and BIOS interrupts using
                         PC register vector table pointed to by R1
                         must be defined as follows (see
                         CPY\IHAPCB.CPY):

                            0  PCVT DC C'PCVT'  ID REQUIRED BY SVC 34
                            4  PCIN DS H        INTERRUPT # (0-255)
                            6  PCPF DS H        PF FLAGS REGISTER
                            8  PCAX DS H        AX
                           10  PCBX DS H        BX
                           12  PCCX DS H        CX
                           14  PCDX DS H        DX
                           16  PCDS DS H        DS
                           18  PCSI DS H        SI
                           20  PCES DS H        ES
                           22  PCDI DS H        DI

                         PC registers are loaded from PCVT for
                         interrupt. PC register results are also
                         stored in PCVT area immediately after
                         interrupt.  Note segment:offset addresses
                         such as DS:DX, DS:SI, or ES:DI required
                         by interrupts can be calculated via SVC 32.
                         Likewise returned segment:offset results can
                         be translated back to PC/370 virtual
                         addresses via SVC 33.  This is a very
                         powerful and therefore dangerous instruction.
                         SVC's 128-191 and SVC's 200-241 should be
                         used in place of this more general SVC when
                         possible since they are a little faster (they
                         don't load and store all PC registers and
                         don't require PCVT setup).  They are also
                         much safer since an error in PCVT setup could
                         invoke wrong interrupt or pass bad registers
                         to any function including reboot interrupt,
                         write to disk, etc SVC 34 does verify PCVT
                         identifier and range of PCIN within 0-255.
                         If verify fails, program interruption
                         19 occurs.  If carry bit is set by interrupt,
                         condition code 3 is set, else condition code
                         0 is set.

     35  80x87 assist    Scientific subroutine function assist via
                         80x87. Register 1 contains function # and
                         values are passed via floating point
                         registers.  See chapter on floating
                         point for more information.

     36  RELOAD          Load file into memory at address in reg 0.
                         Reg 1 must have file address and reg 15 must
                         have maximum file length allowed to be loaded
                         in preallocated area.

     37  SVCTRAP         Define svc trap table via register 1 which
                         contains address of user exit routine to be
                         used with each svc.  If register 1 is zero
                         current svc trap table is cancelled.  After
                         table is defined, each svc call functions as
                         follows:

                           1.  If table+4*(svc #) contains zero,
                               execute real PC/370 svc normally.
                           2.  If svc trap active mode is set,
                               execute real PC/370 svc normally.
                           3.  If table+4*(svc #) is not zero,
                               store current psw at old svc psw x'20',
                               set trap active mode, and branch to
                               trap exit address in table entry.

                         LPSW instruction will always reset trap
                         active mode, and normal exit from trap
                         is via LPSW OLDSVC.  All svc calls within
                         trap routine including the svc which
                         invoked trap will process as real svcs
                         normally without storing psw.  See DEMO\
                         DEMOTRAP.ALC program for examples.

    128 - 191 issue BIOS interrupt number = svc # - X'80' with PC
              registers mapped as follows before and after interrupt:

        AX - low bytes of register 0
        BX - low bytes of register 1
        CX - low bytes of register 14
        DX - low bytes of register 15

        If carry set by call, then CC =3 else CC = 0.
        8086 flags returned in high bytes of R0.

    200 - 241 issue interrupt 21H with PC registers mapped as follows:

        For all svc's 200-241:

          AH - MS-DOS function call number = svc number -200
          AL - low byte  of register 0
          BX - low bytes of register 1

        for svc # 201-208, 211, 213, 214, and 225:

          DL - low byte register 2

        for svc 209, 210, 212, and 215-241:

          DS:DS - segment:offset from virtual address in register 2
          CX    - returned in register 14
          DX    - returned in register 15

          One of the most frequently used SVC's is 209 (write to
          operator).  For example, to print message on standard output
          device via MS-DOS function call 9, the following 2 PC/370
          instructions can be used:

           LA  R2,=C'THIS IS A DEMO WTO MESSAGE$'
           SVC 209

          The above example will print message on console and issue
          carriage return and line feed following message ending with
          $.  To turn off automatic carriage return and line feed,
          issue SVC 31 prior to SVC 209.  To eliminate overhead of
          converting from default EBCDIC strings to ASCII for 209,
          issue SVC 29 prior to SVC 209 and use PC/370 assembler
          extension for ASCII strings in double quotes.  For
          example, this is the most efficient method of issuing
          messages:

            SVC 29  TURN OFF EBCDIC TO ASCII CONVERSION FOR 209
             .
             .
            LA  R2,=C"THIS IS A DEMO WTO MESSAGE$"
            SVC 209

*********

Chapter 5.  Floating Point System Documentation

*********

 A.  Introduction

     PC/370 release 4.0 contains support for the entire 370 floating
     point instruction set using the Intel 80x87 co-processor.  If the
     co-processor is not installed, all floating point instructions
     cause operation exceptions as they would on a 370 without the
     floating point option.  There is a new option in the L370 linkage
     editor (option P) which can be used to force turning off floating
     point option even when co-processor is installed.  Default is to
     support floating point if it is installed and 370 module has been
     linked using release 3.0+ linkage editor.  In addition to the
     standard floating point instructions, two additional levels of
     support have been added.  Section F describes a set of SVC's
     which invoke extended microcode functions on the 80x87 chip such
     as square root, logs, etc.  These SVC's are fast but most require
     special scaling of arguments.  DOC\USER.DOC describes a set of
     scientific subroutines written in ALC which can be called to
     efficiently calculate functions over extended range of real
     numbers.

 B.  Data formats

     The Intel 80x87 actually only supports one IEEE floating point
     format which has 64 bit mantissa and exponent range of 10**4932
     which exceeds both the 370 short and long (double precision)
     formats of 24 and 56 bit mantissa's.  Therefore, both the short
     and long operations are done with extra precision.  The 370
     extended format instructions are all supported but the precision
     actually available is only 64 bits versus the 112 on a 370.  When
     short and long numbers are loaded into the 80x87, they are padded
     with zeros to the 64 bit length required.  When an extended
     number is loaded into the 80x87, the last 8 bits are obtained
     from the second register in the specified extended register pair.
     The PC/370 cross assembler now supports E, D, and L data formats
     when the 80x87 is installed.

 C.  Data exceptions

     The standard 370 exponent overflow, exponent underflow, and
     floating point divide exceptions are all supported.  The program
     mask can be set to control whether program exception is allowed.
     One deviation from standard 370 convention, is to return the
     maximum floating point number with correct sign when overflow
     occurs instead of an invalid number.  This is consistent with
     IEEE standard.

 D.  Floating point instructions

     1.  Note that all operations are normalized using 80x87 and that
         the 370 unnormalized function identical to normalized
         instructions.

     2.  Compare short and long include all 64 bits in comparison.  To
         round number to specific number of bits in short or long
         format, use the LRER or LRDR instruction prior to compare.

 E.  Interactive debug facilities for floating point

     1.  When floating point support is active (i.e. option P is on
         and the 80x87 co-processor is installed), the R command will
         display third line with floating point register contents in
         hex.  Note that the actual floating point register areas in
         memory are stored in 80x87 temporary real format to allow
         register to register instructions to execute faster since no
         conversion from or to 370 format is required.

 F.  Extended 80x87 microcoded arithmetic functions

     The following extended arithmetic floating point functions are
     supported via SVC 35 with the function number in register 1.
     Arguments and results are in the floating point registers F0 and
     F2.

     #   Formula:                Notes:

     1.  F0 = LOG10(2)           constant
     2.  F0 = LOGE(2)            constant
     3.  F0 = LOG2(E)            constant
     4.  F0 = LOG2(10)           constant
     5.  F0 = PI                 constant 3.14159....
     6.  F0 = ARCTAN(F2/F0)      0 <= F2 <= F0 < IFI (infinity)
     7.  F2/F0 = TAN(F0)         0 <= F0 <= PI/4 (sets F0 and F2)
     8.  F0 = SQRT(F0)           0 <= F0 < IFI
     9.  F0 = F2 * LOG2(F0)      0 < F0 < IFI, -IFI < F2 < IFI
    10.  F0 = F2 * LOG2(F0+1)    0 <= F0 < (1-(SQRT(2)/2)), _IFI < F2
                                 < IFI
    11.  F0 = 2**F0              -IFI < F0 < IFI (note 1)
    12.  F0 = R0                 convert to real
    13.  R0 = F0                 convert to integer
    14.  F0 = MOD(F0/F2)         return fraction of F0 mod F2 in F0
                                 (note 2)
    15.  F0 = SIN(F0)            argument may be any real radian value
                                 (note 3)
    16.  F0 = COS(F0)            argument may be any real radian value
                                 (note 3)
    17.  F0 = TAN(F0)            argument may be any real radian value
                                 (note 3)

   Notes:

     1.  This function uses equivalence expression to derive 2**F0 for
         all values of F0 rather than just the 0.0-0.5 range supported
         via the F2XM1 80x87 instruction.

     2.  Note this uses FPREM 80x87 instruction repeatedly to
         calculate exact remainder via successive subtraction.

     3.  Note 15-17 perform scaling of argument via FPREM 80x87
         instruction and use FPTAN 80x87 instruction to derive
         tangent, sine and cosine.

   Register 15 is set to one of the following values at exit from svc:

    hex

     00 - no errors detected
     80 - 80x87 not operational
     40 - invalid function number in register 1
     20 - 80x87 precision error (inexact result such as 1/3 etc.)
     10 - 80x87 underflow error (zero returned)
     08 - 80x87 overflow  error (max 370 value returned)
     04 - 80x87 zero divide     (max 370 value returned)
     02 - 80x87 denormalized operand error (should not occur)
     01 - 80x87 invalid operation error    (should not occur)
```
{% endraw %}

## USER.DOC

{% raw %}
```
 
USER.DOC PC/370 User Documentation

Copyright 1987 Donald S. Higgins

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710

E-mail CompuServe 73047,1113

PC/370 users:

This is the user documentation for the PC/370 cross assembler,
linkage editor, and emulator for 370 assembly language users.
The PC/370 package provides the capability to assemble, link,
and execute IBM 370 assembler programs on any 80x86 MSDOS 2.0+ micro
computer such as the IBM PC, XT, AT, PS/2, Compaq, etc.

Chapter table of contents:

 1. M370.COM macro preprocessor

 2. A370.EXE cross 370 assembler

 3. L370.EXE cross 370 linkage editor

 4. E370R42.EXE run time 370 emulator

 5. Technical hardware and software specifications

 6. ASSIST extended instructions for student use

 7. DEBUG interactive debugging facility

 8. Floating point instructions and scientific subroutines

 9. XA extended architecture instructions

10. System subroutine library

11. COBOL call interface

12. Reference publications

*********

Chapter 1.  M370.COM macro preprocessor

*********

The M370 macro preprocessor has the following command format:

A>M370 file

where file is the name of a source macro program file which has the
suffix (.MLC).  The source file must be in ASCII text format with
each line terminated by a line feed character.  The only output from
this program is a source basic assembler file with expanded macro
statements.  The suffix of the output file is (.ALC).

Any number of macros can be used by M370 input files and must be
defined in individual source macro files with the file name equal to
the macro name and a suffix of (.MAC).  These macros must be placed on
the default drive for access by M370.  For more speed, these files may
be moved to RAM disk.

*********

Chapter 2.  A370.EXE cross 370 assembler

*********

The A370 assembler has the following command format:

A>A370 file/options

where file is the name of a source program file which has the
suffix (.ALC).  The source file must be in ASCII text
format with each line terminated by a line feed character.
Any number of editors including SEE can be used to create ALC files.
An optional drive and path may be specified such as B:\dir\file.
The options which can be specified are as follows:

  A - alignment option. Default is on.
  C - object code option. Default is on.
  L - produce listing file (.PRN). Default is none.
  T - trace assembler execution. Default is off.
  X - produce symbol and literal cross reference. Default is none.

If an option is on by default, specifying it will turn it off.
For example:

A>A370 B:DEMOPNUM/LX

will read the source file B:DEMOPNUM.ALC and produce the object
code file B:DEMOPNUM.OBJ and the listing file B:DEMOPNUM.PRN.

The A370 assembler conforms to the OS/VS IBM 370 Assembly
Language as defined in the IBM manual GC33-4010 with the
following limitations:

  1.  No continuation lines.
  2.  Maximum control sections and dummy sections is 255.
  3.  Macros and system variable symbols are not supported (see M370).
  4.  OPSYN statement not supported.
  5.  EQU third operand (type attribute) not supported.
  6.  Scale, exponent, and bit length data modifiers not supported.

Extended features include the following:

  1.  Data constant types F and H may use arithmetic expressions.

  2.  Extended ASSIST instruction set including XREAD, XPRNT,
      XDECI, XDECO, AND XDUMP as defined in the book Assembler
      Language with ASSIST by Ross A. Overbeek.  Also 2 more
      instructions XFILI and XFILO are added to allow changing
      default ASSIST input and output files at execution time.

  3.  ASCII character strings may be defining by using double
      quotes instead of single quotes in DC and self defining
      character constants.

*********

Chapter 3.  L370.EXE cross 370 linage editor

*********

The L370 linkage editor has the following command format:

A>L370 file/options

where file is the name of an A370 object code file (.OBJ) and
may specify a specific drive.  The options supported by the
linkage editor are as follows:

  B - create VS COBOL callable subroutine file (type .BIN).
  D - set debug mode for emulator. Default is off.  When option D
      is on, interactive debug is entered at beginning of each
      COM or BIN file execution.
  G - load and execute with no file output. Default is off.
  I - turn off all interrupts from keyboard.
  L - list CSECT addresses and lengths. Default is off.
  M - create 370 code module without COM prefix code.
  O - dump input object code records in hex. Default is off.
  P - force floating point option off even if 80x87 installed.
  X - cross reference of external symbols. Default is off.
  U - allow unresolved external references

For example:

A>L370 B:DEMOPNUM/LX

will read the object code file B:DEMOPNUM.OBJ and produce the binary
command file B:DEMOPNUM.COM, and the listing and cross-reference file
B:DEMOPNUM.LST.  Note that since DEMOPNUM calls the external
subroutine PET, the subroutine library L370.LIB must be available.
The binary command file B:DEMOPNUM.COM may be directly executed by the
MSDOS command:

A>B:DEMOPNUM

When the above command is executed, the program will load at X'0200'
and the fetch routine linked with the program will load the
emulator E370.EXE in high memory and transfer control to it.

The linkage editor uses two concatenated subroutine library
files.  The first file is named file.LIB and may contain
any number of A370 subroutine object modules which are called by the
modules in file.obj.  This file is optional and only called modules
are included.  The second file is named L370.LIB and may contain any
number of A370 subroutine object modules which are commonly used by
multiple programs.  An L370.OBJ file is included with the PC/370
package and contains sample time and date routines.  The MS-DOS COPY
command with option /B may be used to concatenate A370 object modules
in either library file.  Note module references must be resolved in
one sequential pass of library so backward module references may cause
unresolved entry.

The linkage editor listing file (.LST) shows relative entry point
and segment lengths and optional cross reference by segment.  The
last line of the listing contains ENT/LNG which is the 370 relative
entry point of the module and the length of the entire module.

*********

Chapter 4.  E370R42.EXE run time 370 native machine code emulator

*********

The emulator is transparent to the user when using A370 and L370 to
create MSDOS command files.  The emulator is dynamically executed by
the 80x86 COM file prefix generated by L370.  The 370 machine code
starts at X'210' from the beginning of the COM file.  The origin of
the 370 virtual address space for a COM program starts at X'10' from
the beginning of the COM file.  The execution of the 370 machine code
will start at the specified relative start address plus hex 200 with
that absolute address in register 15.  Register 1 will point to
standard MVS parameter list address at location X'80' with EBCDIC text
passed from MS-DOS command line.  Register 13 will point to standard
save area in ASCB and register 14 points to return to detach
instruction in ASCB to exit to MS-DOS.  If a program check occurs, the
interactive debug facility will be invoked and will initially display
the general registers and the program status word at the time of the
interruption.  See DOC\SYSTEM.DOC SPIE supervisor call for facility to
handle program checks.  Also see MAC\MVS.MLC for example of how to run
programs in problem state with your own supervisor shell.

A new facility with PC/370 release 4 is the ability to make the
emulator resident by simply executing it directly.  The resident
emulator reserves about 50k for code and uses an 80x86 hardware
interrupt to transfer control when needed at execution time.  To
remove the current resident emulator, simply execute it directly
again.  Release 4.0 and 4.1 used interrupt hex DC.  Release 4.2 uses
hex 60 within the Micro Focus Extended Memory (XM) real interrupt
handler range of hex 60-6F.  See DOC\PTF.DOC for pathc to change
interrupt in case it conflicts with another user installed software
package.

With release 4.1 a new system queue area (SQA) memory option has been
added to define a memory which can be shared by all COBOL subroutines
and which is allocated in the resident emulator address space.  The
size of the SQA is specified by a single hex parm when making the
emulator resident.  The size is in hex paragraphs and the default is
10 or 256 bytes.  For example, the following command would make the
emulator resident with an 8k byte SQA:

  C>E370R42 200

With the SQA facility, COBOL assembler subroutines can issue standard
file I/O with dynamic buffers allocate from SQA. See BAT\RUNCBL.BAT
for demo.

With release 4.2, PC/370 supports Micro Focus COBOL/2 assembler
subroutine calles in normal MS-DOS mode or in extended memory XM mode.
In both cases the emulator must be resident before starting the COBOL
program via workbench or run time executive with or without XM.  In
XM mode, the emulator still runs in real mode after requesting XM to
mode the called subroutine code (BIN file) and the argument data
segments to base memory area for access in V=R real mode.  This
creates the XM restriction that there must be sufficient base memory
for called BIN file and data segment at the time of the call.  Also,
the emulator must not attempt to access memory beyond end of BIN or
data segments in real memory.  The emulator can use SQA in XM mode.
See BAT\RUNCBL.BAT for demo of XM mode subroutines (requires XM.EXE
and RUN.EXE from Micro Focus).

There are five distinctly different ways to execute the E370 emulator:

  1.  Direct execution to make it resident if not currently resident.

  2.  Direct execution again to remove current resident copy.  If
      another software package is using interrupt, an error message
      will display.  See DOC\PTF.DOC to change interrupt number.

  3.  Execution of a 370 COM module without E370 resident causes
      dynamic loading of E370 in high 64k of MS-DOS memory to support
      execution of 370 code in the COM module.

  4.  Execution of a 370 COM module with E370 module resident causes
      execution of resident copy via cross memory interrupt facility.

  5.  Execution of a 370 BIN module from within Micro Focus COBOL run
      time environment causes execution of resident copy via cross
      memory interrupt facility.  In XM mode, a protected interface
      routine in the emulator is called directly by the BIN module
      which in turn issues interrupt to execute emulator in real mode.


*********

Chapter 5. Technical specifications

*********

   1.  A370.EXE requires 256k memory to execute and can handle source
       programs with over 1000 labels.

   2.  L370.EXE requires 256k memory and can handle load modules up to
       50k bytes long.

   3.  E370R42.EXE requires 50k plus SQA which includes the emulator,
       and the extended SVC support functions, and interactive debug.
       A production only copy of the emulator named E370P42.EXE is
       included which only requires 40k but does not include
       interactive debug facility or the ASSIST extended instructions.
       This version saves resident base memory, but should only be
       used for fully tested programs or programs with their own
       program check handlers for error recovery.

   4.  E370R42 supports all the non-supervisor state IBM 370
       instructions as defined in the IBM/370 XA Principals
       of Operation manual SA22-7085 except the conditional
       swapping feature instructions.  Short, long, and extended
       floating point instructions are supported provided 80x87
       is installed.

   5.  The minimum configuration for PC/370 is as follows:
       a.  80x86 processor.  XM only supported on 80286/80386.
       b.  256k RAM memory which allows execution of 370 program in
           128k virtual address space.  Maximum virtual address space
           is about 512k on 640k machine.
       c.  1 floppy disk drive.
       d.  80x87 only required for floating point instructions.

   6.  A benchmark program consisting of calculating the first
       100 prime numbers was run in interpretive BASIC using
       16 bit integer arithmetic.  It took 67 seconds on a
       4.77 MHZ 8086 system.  The same program was rewritten in
       370 assembler using 32 bit fixed point arithmetic.  It
       took 25 seconds to execute on the same system.  This
       benchmark program is included as a demo called DEMOPNUM.ALC.

       The demo may be run with the following commands:

         A>A370 DEMO\DEMOPNUM/LX  (create DEMOPNUM.OBJ)
         A>L370 DEMO\DEMOPNUM/LX  (create DEMOPNUM.COM)
         A>DEMO\DEMOPNUM

   7.  The following error messages are supported:

       A370/L370

        E01 - DUPLICATE LABEL
        E02 - INVALID LABEL
        E03 - SYMBOL TABLE FULL
        E04 - INVALID OPERATION CODE
        E05 - UNDEFINED OPERATION CODE
        E06 - UNDEFINED LABEL
        E07 - INVALID OPERAND
        E08 - MEMORY FULL
        E09 - EXPRESSION INVALID
        E10 - SELF DEFINING TERM INVALID
        E11 - ARITHMETIC OVERFLOW IN EXPRESSION
        E12 - TOO MANY EXTERNAL SYMBOLS
        E13 - NO BASE REGISTER AVAILABLE
        E14 - LENGTH ERROR
        E15 - OPERAND ERROR
        E16 - DATA CONSTANT DUPLICATION FACTOR ERROR
        E17 - DATA CONSTANT TYPE ERROR
        E18 - DATA CONSTANT LENGTH ERROR
        E19 - DATA CONSTANT DATA ERROR
        E20 - START SEQUENCE ERROR
        E21 - LTORG SEQUENCE ERROR
        E22 - LOCATION COUNTER ERROR BETWEEN PASS 1 AND 2

   8.  IOS LOGICAL ACCESS METHOD USED BY A370, L370, AND E370

      IOS001 - NO DISK SPACE
      IOS001 - FILE NOT FOUND
      IOS001 - NO BUFFER SPACE
      IOS001 - OPEN FAILED
      IOS002 - CLOSE FAILED
      IOS003 - READING UNWRITTEN DATA
      IOS003 - INVALID REQUEST
      IOS004 - ERROR IN EXTENDING FILE
      IOS004 - END OF DISK DATA AREA
      IOS004 - NO MORE DIRECTORY SPACE
      IOS004 - INVALID REQUEST
      IOS005 - INVALID RECORD TYPE
      IOS005 - INVALID RECORD LENGTH
      IOS006 - INVALID RECORD TYPE
      IOS006 - INVALID RECORD LENGTH
      IOS007 - DELETE FAILED

*********

Chapter 6. ASSIST extended instructions for student use

*********

  A.  Overview

      The book, "Assembler Language With ASSIST", by Ross A. Overbeek
      and W. E. Singletary published by Science Research Associates,
      Inc.  in 1976 describes a set of 370 extended instructions to
      greatly simplify input and output for students learning to write
      370 assembler programs.  A new book with also covers ASSIST is,
      "IBM 370 Assembly Language with ASSIST, Structured Concepts, and
      Advanced Topics", Charles J. Kacmar, Prentice Hall, September
      1987, ISBN 0-13-455742-5.

      PC/370 implements these instructions to allow students to
      code, assemble, and execute ASSIST 370 programs on any 80x86 MS-
      DOS based micro-computer rather than having to use an IBM 370
      mainframe.  This was the original objective for which PC/370 was
      developed back in 1981.  The first students to use PC/370 with
      ASSIST were volunteers at the University of South Florida,
      College of Engineering.  The students used a CP/M based Z80
      micro-computer with the original version of PC/370 instead of
      the IBM 3033 mainframe ASSIST system accessed via RJE using
      keypunched card decks.

  B.  ASSIST extended instructions

      1.  XFILI =C'filename'

          This extended instruction redirects input source for XREAD.
          If open, the current input source file is closed.  The new
          filename can be any standard MS-DOS path/filename ending
          with suffix .xxx or a zero byte.  If the filename is CON:
          then the input source is the console with a ? prompt.  To
          set the ASSIST end of file condition code for XREAD from the
          console, use the escape (ESC) key.  See DEMOAST3.ALC for
          demo of redirection.

      2.  XFILO =C'filename'

          This extended instruction redirects the output from XPRNT.
          If open, the current output file is closed.  The new file
          name can be any standard MS-DOS path/filename ending with
          suffix .xxx or a zero byte.  If the filename is CON: then
          the output from XPRNT is directed to the console.  The first
          byte which is printer control code is also printed on
          console.

      3.  XREAD area [,length]

          Read record into area with default length of 80 padded with
          blanks.  If the input is coming from console, the first
          carriage return defines end of record, and single ESC
          character defines end of file.  Note ASCII characters from
          console or file are automatically translated to EBCDIC in
          record area.  Condition code set as follows:

            0 - read successful
            1 - end of file

          Default input source is file named ASSIST.DAT.  If the file
          is not found, the input and output source is switched to
          console.

      4.  XPRNT area [,length]

          Print record from area with default length of 132.  Trailing
          blanks are stripped off.  The first character is used as
          standard ASCII print control character:

           ' ' - space means skip one line
           '/' - slash means skip two lines
           '1' - one means skip a page
           '+' - means skip no lines
           '-' - dash means skip three lines

          Output to console includes print control character.  Default
          output is to file named ASSIST.PRN which is also used by
          interactive debug X logging command and XDUMP.

      5.  XDECI reg,area

          Read ASCII integer number from area and store into register.
          Leading plus or minus signs may be present.  Condition code
          is set as follows:

           0 - number is zero
           1 - number less than zero
           2 - number is greater than zero
           3 - no number found in area

          Register 1 is set to address of first character after number
          read.

      6.  XDECO reg,area

          Convert binary integer number in register to 12 character
          display field with numeric value including sign.

      7.  XDUMP [area start, area end]

          Dump general purpose registers (default with no args) or
          dump area of memory to output file.

*********

Chapter 7.  Interactive Debug Facility

*********

     A.  Overview

     The PC/370 interactive debug facility is designed to provide a
     tool to help debug program errors in either 80x86 code or 370
     code.  The facility provides the basic tools namely tracing
     program flow via breakpoints defined by calls, and displaying
     register and memory contents upon request.  In addition, the
     facility provides a data and address stop option which is very
     useful for locating errors.

     B.  Program Interface

     The PC/370 interactive debug facility is implemented via a single
     module named MMDBUG which is linked into A370, L370 and E370
     programs and is called with a single 3 byte ASCII argument
     located immediately after the near call instruction.   In the
     E370 emulator environment, the interactive debugger can be called
     directly from 370 programs through SVC 9 which must be followed
     by 3 byte EBCDIC argument and a 1 byte filler to keep
     instructions on half word boundary.

     There are several special calling arguments as follows:

     1.   'OFF' - turn off (kill) trace facility for speed
                  (a trace is killed by replacing call with jump over
                  the trace ID to the next instruction)
     2.   'ON ' - turn trace facility back on (stop killing traces)
     3.   'BUG' - force interactive debug mode
     4.   'IOF' - interrupts off (unsolicited keys queued for input)
     5.   'ION' - interrupts on  (any key stroke invokes user
                  interface)
     6.   'IFL' - instruction fetch loop (special trace used in E370
                  to identify next trace id as 370 operation trace to
                  be stored in trace table)

     The first call to MMDBUG in A370, L370, and E370 is with 'OFF'
     unless the trace option was requested via COM file parm or if the
     debug option D was specified on link edit of COM or BIN file.

     C.  User Interface

     When MMDBUG is called without the 'OFF' argument, or when a key
     is hit without the 'IOF' argument being issued previously, the
     user interface mode is invoked and the following commands may
     be entered in upper or lower case from the console:

          A - ADDRESS STOP (PROMPTS FOR ADDRESS, LENGTH, TYPE)
          C - CONTINUE TO NEXT TRACE ENTRY
          D - DUMP MEMORY (PROMPTS FOR ADDRESS)
          F - FIND TRACE ENTRY (PROMPTS FOR TRACE ID)
          H - HELP LIST MMDBUG COMMANDS (THIS LIST)
          I - INSTRUCTION COUNTER WORD
          J - RESET NEXT 370 OR 8086 INSTRUCTION ADDRESS
          K - KILL MODE SET/RESET (kills or restores traces)
          L - SET/RESET TRACE LIMIT FOR Q/T MODE
          M - MODIFY MEMORY (PROMPTS FOR ADDRESS AND DATA)
          N - LIST LAST 20 TRACE ENTRIES (NOTE K,Z  AFFECT THIS LIST)
          P - SET/RESET PRINT COPY OF ALL MMDBUG I/O
          Q - SET QUIET MODE (USED WITH F, L, AND 'BUG' OPTIONS)
          R - DISPLAY REGISTERS (SEE Z OPTION)
          S - SAVE/UNSAVE CURRENT TRACE ID FROM KILL MODE
          T - SET TRACE MODE (USED WITH OPTIONS F AND L)
          W - LIST FREE MEMORY QUEUE
          X - SET/RESET ASSIST LOGGING OF INTERACTIVE DEBUG OUTPUT
          Y - MODIFY 8086/370 REGISTER (PROMPTS FOR REGISTER/DATA)
          Z - SET/RESET 8086/370 MODE
                IN 8086 MODE, R DUMPS 8086 REGISTERS AND D PRINTS
                PRINTABLE ASCII CHARACTERS IN DUMP.
                IN PC/370 MODE, R DUMPS 370 REGISTERS AND PSW
                AND D DUMPS PRINTABLE EBCDIC CHARACTERS IN DUMP.
         <cr> - dump same address again as defined in D command
         <sp> - dump forward until any key hit
         <bs> - dump backwards until any key hit
         <esc>- exit to MSDOS after attempting to close files

     Memory addresses may be entered in xxxx:xxxx or xxxxxx hex format
     without leading zeros required.  In 370 mode, the xxxxxx format
     always refers to the relative address within the current address
     space.  In 80x86 mode, the xxxxxx format refers to the offset
     using the current segment.  The segment:offset is initialized to
     the emulator data segment area containing the 370 registers.

     D.  User Guide

     The PC/370 interactive debug facility can assist you in locating
     errors within your 370 assembler programs.  But first there are
     some more basic things to check:

     1. Are you sure that you are executing the latest version of
        the source program.  To be absolutely sure, code the date
        and time in a print statement at the beginning of the program
        and then reassemble (A370) and relink (L370) and execute the
        program again.

     2. Does the program run to normal termination?  If so then you
        can run the program again specifying a T as the only parameter
        on the execute command to initiate the interactive debug
        facility.  Another way to invoke the interactive debug option
        is to specify option D in the linkage editor.   This method
        should be used if the program requires a parameter other than
        T.

    3.  If the program terminated abnormally, the interactive debug
        facility is automatically initiated along with a display of
        the PSW and the failing instruction.  To calculate the
        relative address of the failing instruction in the program,
        subtract the program load address of X'0200' (Note you will
        have to look at the link edit listing to get the starting
        address if the failing instruction is in a subroutine.

    4.  To trace execution of the program, enter K once or twice to
        restore all traces and then enter T.  To stop the trace at any
        point hit any key.

    5.  To continue execution of the program normally, enter Q.
        For fast execution, use K command to set kill trace mode
        first.

    6.  To dump the current contents of the registers, enter R.

    7.  To dump any 32 byte area in memory, enter A followed by
        the starting address in hex xxxx.

    8.  To continue to dump memory from the current location forward,
        hit the space key.  To dump backwards, hit the backspace key.
        To stop the dump, hit any key.

    9.  To stop the program at a specific address, enter A followed
        by the address in hex xxxx followed by the option code A.
        Then use Q or T to continue execution until the address is
        found.

   10.  To stop the program when a specific data field in memory is
        changed, enter A followed by the address in xxxx followed by
        the option code E for equal data or N for not-equal data.
        Next entry the length of the data compare in hex when
        prompted.  If option E is selected, enter the hex value of the
        data you want to search for when prompted.  Next press Q or T
        to continue  execution until the data compare specified
        triggers debug user interface again.  To stop at a specific
        instruction count in a 370 program, use the I command to
        display the instruction counter word and then use data equal
        address stop on the word.  To obtain detail instruction trace
        up to point of failure, either use Q or T from beginning of
        the program or set address stop at previous multiple of 256
        on instruction count field and then restore traces with K
        command and then use Q or T proceed to point of failure.  At
        point of failure, use N command to list last 20 instruction
        trace points.

   11.  To turn off any address stop option, enter A.

   12.  To list the last 20 instruction trace table entries, enter N.
        If running in 370 mode (option Z toggles mode), only the 370
        instruction traces will be stored and listed via option N.
        In 80x86 mode, all traces will be stored and listed.
        Note that this list may be incomplete if the program
        was running with K option active to kill traces for speed.
        Option K kills each trace entry to debug the first time debug
        is entered for that trace point.  Option K makes the program
        run much faster at the expense of losing repeated trace
        points until K reset is issued.  However, you can use Find to
        locate selected trace id's and use Save to protect id from
        kill mode.  This option allows much faster execution while
        still being able to trace selected id's.  A very useful id to
        save is IFL which will then trace each 370 instruction during
        kill mode while killing all of the lower level ID's for
        reasonable speed yet full visibility of 370 instructions.
        Faster still is to save only one 370 instruction id such as
        TRT.  This is very useful in conjunction with address stop,
        since the address stop overhead is only incurred for the
        selected saved id's.  Note that the trace table only contains
        addresses of instructions, and as a result if instruction
        modification or overlays are used, the data listed for a
        previous instruction may be different from what it was at the
        time it was executed.  In this case it may be helpful to rerun
        program with address stop to see what was in memory at the
        time an instruction was executed.

   13.  To set a fixed limit on the number of trace entries before
        entering debug command mode again, enter L and count in hex
        xxxx.  Next enter Q or T to continue until count reached zero.
        If zero count is entered, the limit is not checked.

   14.  To modify memory, enter M followed by address in hex xxxx.
        Next enter hex data bytes followed by return key.

   15.  To display the 8086 registers, type Z to switch to 8086 mode.
        Now type R.  In 8086 mode, storage dumps translate data to
        ASCII instead of EBCDIC for character display.  In 8086 mode,
        N lists all trace entries instead of just IFL 370 instruction
        traces.  In 8086 mode, Y changes 8086 registers instead of 370
        registers.  To return to 370 mode, type Z again.

   16.  The W command displays free memory in the 8086 data segment
        for 8086 mode and the free memory in the current address
        space in 370 mode.  Note these are two totally separate free
        areas.  The 8086 free area is limited to <= 64k addressable by
        the DS register and uses 4 byte free queue elements
        (next,length).  The 370 free area extends from the end of 370
        code in COM module to the end of free memory and uses 8 byte
        370 format free queue elements (next,length) on 8 byte
        boundaries.  For BIN file execution, the free area is the SQA
        area allocated in the emulator address space.  The first free
        queue element in a 370 address space is pointed to by ASCASF
        field in address space control block located at X'104' in low
        memory (may be zero if no free memory currently available).
        The ASCB for BIN modules can be located by subtracting
        (X'200'-X'104') from the entry point address in register 15 at
        entry (trace ID 370).

   17.  The J jump command may be used to modify either the emulator
        or the 370 current instruction address depending on the
        current Z mode.  In 370 mode, the address entered is a virtual
        address.  In 80x86 mode, the address entered is a code segment
        offset (This is a very dangerous function and not
        recommended).

*********

Chapter 8.  Floating Point Support

*********

  A.  Register formats

    1.  General purpose registers

        The general purpose 370 registers are located at the beginning
        of the data segment of the E370 emulator (DS:0).  They are
        stored in 80x86/80x87 long integer format with least
        significant byte first starting with register 0.  For example,
        the high byte of register 0 is at DS:3 and the low byte of
        register 1 is at DS:4.  This area can be used with address
        stop to detect a specific register value or change in register
        value (although remembering reverse format is always a
        challenge).  This format is used to allow native loads and
        stores without reversing bytes which speeds up register to
        register operations and allows addition of registers directly
        from memory without conversion.

    2.  Floating point registers

        If the 80x87 co-processor is installed, the R command displays
        the four 8 byte floating point register values numbered 0, 2,
        4, and 6.  This is one way (other than 123 /WS screen) to tell
        if 80x87 is installed.   The floating point registers are
        stored in 80x87 temporary real format which is 10 bytes long.
        The first 8 bytes contain the normalized 64 bit unsigned
        mantissa with the high bit always on stored in reverse order
        (like a double long integer with the least significant byte at
        low address.  The last 2 bytes contain the base two exponent
        and the sign stored as an integer.  The 15 bit exponent is
        stored in excess 3FFFH format.  True zero is represented by
        plus or minus sign and all other bits zero.  This format
        exceeds 370 double precision 8 byte format for both mantissa
        and exponent range.  This format is used to significantly
        speed up floating point register to register operations since
        numbers can be directly transferred to/from 80x87 in this
        format.  A conversion routine must be used to convert floating
        point numbers when moved to/from memory to the floating point
        registers.  The conversion routine is quite efficient but does
        involve shifting entire number up to 3 bits left or right to
        convert from normalized base 2 to base 16.  The floating point
        register memory area can be dumped to see the real format and
        can be used with address stop to detect specific value or
        change in value.

  B.  Floating Point Scientific Subroutine Package

    Using floating point 370 instructions plus extended 80x87 function
    SVC's described in SYSTEM.DOC, a set of efficient scientific
    subroutines have been coded in SSP.ALC and are stored in the
    L370.LIB subroutine library.  The argument and result is in F0 or
    R0 unless noted otherwise.  The SSP functions are similar to the
    FORTRAN IV intrinsic functions.

    FUNCTION   DESCRIPTION   RANGE LIMITATIONS           NOTES

    ATAN       ARCTAN
    ALOG       LOG BASE E    0 < F0
    ALOG10     LOG BASE 10   0 < F0
    COS        COSINE
    EXP        E ** X
    REAL       CVT TO REAL   -2**32 <= R0 < 2**32        ARG. IN R0
    INT        CVT TO INT    -2**32 <= F0 < 2**32        RESULT IN R0
    MOD        MOD(F0,F2)                                REMAINDER R0
    PI         PI            3.14159.............
    SIN        SINE
    SQRT       SQUARE ROOT   0 <= F0
    TAN        TANGENT

  C.  Floating point co-processor assisted standard 370 instructions.

      1.  If the floating point option is on and an 80x87 co-processor
          is installed, then it is used to assist the CVB and CVD
          instructions for speed.  In the case of large numbers, the
          speed improvement can be up to 4 times.  For numbers close
          to zero, there is no improvement in speed.  Depending on
          user demand, this type assist may be added for other packed
          decimal instructions in the future.

*********

Chapter 9.  XA Extended Architecture Support

*********

  1.  A370 supports the XA instructions as defined in the
      IBM System/370 XA Principles of Operation manual version
      SA22-7085.

  2.  E370 supports the 6 XA non-privileged instructions
      BAS, BASR, MVCIN, BASSM, IPM, and BSM.  When the emulator is in
      31 bit mode, the PSW format displayed by MMDBUG is extended mode
      with the high address bit on.  The emulator defaults to 24 bit
      mode and the 370 basic PSW format.

  3.  The standard instructions LA, BAL, BALR, EDMK, and TRT
      now support both the 24 bit and 31 bit addressing modes
      as set by BASSM or BSM using the PSW address mode bit.
      Note that in 31 bit addressing mode the LA instruction
      adds all 31 bits of the index and base register plus
      displacement and clears only the high bit of the result.  This
      means the high byte of the index and base must be cleared when
      using 24 bit addresses in 31 bit mode.

**********

Chapter 10.  System subroutine library

**********

The following subroutines are included in the default system
subroutine relocatable library L370.LIB in the root directory:

 #  SUBROUTINE ENTRY   FUNCTION                    ARGUMENTS

 1  DAT                print date and time         none

 2  TIMER              return current time         none
                       of day in R0 in 100th
                       of a second units

 3  PET                print elapsed time since    none
                       last call plus date and
                       time and 370 instruction
                       count interval statistics

 4  DTIME              print time in upper left    none
                       corner of screen in format
                       HH:MM:SS

 5  SYNERROR           print PC/370 input/output   R0 = error code
                       error message based on      R1 = function code
                       return codes passed in
                       registers R0-R1 at entry
                       to SYNAD DCB exit routine

 6  SSP                scientific subroutines
                       (see chapter 8 for entry
                       points to this module)

 7  API                support application using
                       application program interface
                       (API) with IBM PC 3270
                       emulation via interrupt 7A

The 370 source code for all of the above modules is in the LIB
directory, and the BAT\BLDLIB.BAT command file will rebuild library
from the source.  Remember when adding subroutines to a relocatable
library that there cannot be any backward references to prior modules
in the library since L370.EXE uses serial one pass search for external
references in the library.

**********

Chapter 11.  COBOL call interface support

**********

To call a PC/370 assembler subroutine from a Micro Focus COBOL program
requires that the PC/370 emulator E370R42.EXE be made resident by
executing it directly (see BAT\RUNCBL.BAT for demo).  Each subroutine
to be called must be assembled and linked using option B to create a
BIN type file which will be dynamically loaded on the first call.

The interface performs the following functions prior to transferring
control to the assembler subroutine:

  1.  The address space control block at X'104' in the BIN file is
      initialized to a virtual equals real (V=R) region in order to
      address the arguments passed.   The ASCASF free memory pointer
      is initialized to point to the current first free queue element
      in the common system queue area (SQA) memory allocated along
      with the resident emulator.   The SQA is used to dynamically
      allocate buffers for subroutine file I/O and any other dynamic
      memory requests via GETMAIN/FREEMAIN svc's.  Note that SQA is
      shared by all subroutines and each subroutine must release any
      memory it uses prior to exit or SQA will eventually be depleted
      (just like MVS).

  2.  The segment and offset argument addresses on the stack are
      converted into a standard 370 calling list of 32 bit absolute
      addresses located at X'80' in the BIN file (normally the command
      line area).  Up to 32 arguments can be passed.

  3.  The 370 registers are set as follows:

        R1 = absolute address of argument list at X'80' in BIN file

        R14 = absolute return address to exit subroutine at X'102' in
        BIN file via detach SVC.

        R15 = absolute address of entry point (normally X'210' in BIN
        file.   At exit from called BIN module, the low 16 bits of
        register 15 are used to set special Micro Focus COBOL return
        code value called RETURN-CODE.  If emulator is not resident
        when a BIN module is called, a return code of 16 is passed.

  4.  If option D was specified in the L370 link of the BIN module
      being called, the emulator interactive debug facility will be
      invoked at entry with all traces restored.  If option D was
      not specified, execution will proceed without interruption and
      no traces will be restored to provide fast execution of one or
      more BIN modules.

  5.  Note that BIN modules are dynamically loaded by COBOL run time
      system at unknown addresses.  Since BIN subroutines run in
      V=R address mode in order to address COBOL data areas, all 370
      subroutine code must be self relocating.  See CBL\TESTCIO.ALC
      for example of how to relocate any address constants required
      such as subroutine entry points and DCB addresses.  The A370
      assembler lists all relocation addresses in PRN listing created
      with the /L option.

**********

Chapter 12.  Technical References:

**********

   1.  For information on 370 machine instructions see
       IBM System 370 XA Principles of Operation manual SA22-7085.
   2.  For information on 370 assembler language see:
       a.  IBM OS/VS Assembler Language manual GC33-4010.
       b.  Assembler Language Programming by G. W. Struble.
   3.  For information on how the assembler, linkage editor, and
       operating system software works see:
       a.  Systems Programming by John J. Donovan.
       b.  Operating Systems by S. E. Madnick and J. J. Donovan.
   4.  For information on the 80x86 processors see:
       a.  The 8086 Book by George Alexy.
       b.  Intel iAPX 286 Programmer's Reference Manual 210498-003.
       c.  Intel 80386 Programmer's Reference Manual 230985-001.
   5.  For information on the MSDOS operating system and utilities
       see:
       a.  Disk Operating System Version 3.2 Reference 68X2405.
       b.  Disk Operating System Technical Reference 6139658.
       c.  Advanced MS-DOS by Microsoft Press ISBN 0-914845-77-2
   6.  For information on usage of ASSIST extensions see:
       a.  Assembler Language with Assist by Ross A. Overbeek and W.
           E. Singletary.  Published by Science Research Associates,
           Inc., Chicago, Copyright 1976, ISBN 0-574-21085-7.
       b.  IBM 370 Assembly Language with ASSIST, Structured Concepts,
           and Advanced Topics by Charles J. Kacmar.  Published by
           Prentice Hall, September 1987, ISBN 0-13-455742-5.
   7.  For summary article on how PC/370 was developed see ACM
       Sigsmall Newsletter Volume 8 Number 3, August 1982.
   8.  For article on conversion of PC/370 from CP/M to MS-DOS see
       ACM SIGSMALL/PC Newsletter Volume 11 Number 3, August 1985.
   9.  For information on 80x87 see Intel iAPX 286 Programmer's
       Reference Manual #210498-003.  Also book by designer titled,
       "The 8087 Primer" by John F. Palmer and Stephen P. Morse,
       published by John Wiley & Sons, inc. Copyright 1984, ISBN 0-
       471-87569-4.
```
{% endraw %}

## UTILITY.DOC

{% raw %}
```
 
UTILITY.DOC PC/370 utility documentation

A.  Summary

    1.  SEE.ALC - this utility will support full screen editing of an
        ASCII text file.  The size of the file is only limited by the
        amount of MS-DOS memory available (up to 640K less MS-DOS and
        PC/370).  The program is modeled after the TURBO PASCAL full
        screen editor with compatible commands.  In addition to the
        expanded memory support,  SEE supports full color selection,
        character graphics, and session emulation.

    2.  PRINTDOC.ALC - this utility will read an ASCII text file and
        print it on the standard printer device with headings and page
        numbers set by standard ALC TITLE, EJECT, and SPACE commands.

    3.  T370.ALC - this utility reads A370 relocatable object files
        which are in compressed bit stream format and creates standard
        IBM 370 linkage editor input in standard 80 byte fixed record
        format with ESD, TXT, RLD, and END type records.  This utility
        also has option to generate ascii hex listing file if desired.
        The 370 object files have a suffix of .370 and the listing
        file has a suffix for .HEX.

To run demo of utility programs, execute BAT\RUNUTIL.BAT.  To rebuild
executable utility modules from source run BAT\BLDUTIL.BAT.

B. SEE - Screen Editor and Emulator Documentation

SEE.ALC is a full screen ASCII text editor for PC's with MS-DOS 2.0+
and at least 256k.  SEE is designed to be keystroke compatible with
both PFS:WRITE and the TURBO PASCAL (ie WORDSTAR like) editors.  SEE
supports text files up to 512k on a 640k system.  Note SEE.ALC itself
is about 90k which some editors can't handle.  To conserve space SEE
strips trailing blanks from each line of text, and replaces 9 leading
blanks with a single tab character. Each line is terminated with a
carriage return and line feed.

SEE also supports session emulation by optionally creating a file
(.KSF) with all of the session's keystrokes which can be replayed to
emulate the session with full color control.  SEE also supports line
and block drawing with graphic characters in full color.

The distribution diskettes or ARC file contains SEE.COM which can be
used to edit the source code UTIL\SEE.ALC.  TO edit an existing ASCII
text file:

  A>SEE file1

E370R42.EXE is dynamically loaded by SEE.COM to execute the 370 code
so it must be accessible on the current path as SEE.COM.  If you wish
to run SEE using the emulator on a separate directory, you can use
DEBUG to insert path in front of emulator name at X'140' in SEE.COM,
or you can make the emulator resident by directly executing it.
The default file type is ALC.  (Note with PC/370 you can change the
default in SEE.ALC and reassemble and link it in about 90 seconds on a
standard PC.)  If the file doesn't exist, it will create an empty file
ready for editing.  If the file does exist, it will be renamed
file1.BAK before saving the new file if it is changed.  Be sure there
is room on the same disk for both the new file and the backup file
before spending a lot of time editing a file.  Note SEE.ALC itself
requires at least 110k free space before you can save it.

To capture all the keystrokes in a session for replay later, type:

  A>SEE file1 file2

The default file type for file2 is KSF.  If file2 does not exist, it
will be created with all the keystrokes entered during the session
which edits file1.  If file2 already exists, SEE will use it as the
keyboard input to emulate the original session.  Note two special keys
act different in live editing versus emulation.  ALT-F1 key causes
emulation to stop until a real key is entered.  ALT-F2 key causes a 1
second wait in emulation mode to slow it down for visual effects.
Additional controls could be easily added to SEE.

SEE is designed to be fast and easy to use.  To change a drive
specification in an autoexec.bat file a sequence of less than 25
characters including the filename may be required.  For example,
assuming autoexec.bat contains:

RECORD/COLUMN  1...5...10...15...20
  1            ver
  2            astclock
  3            c:
  4            123

The following keystrokes would change drive c to drive a:

keystrokes  ascii characters            comments

  1-19      see autoexec.bat[enter]   start up SEE and display text
 20-21      [arrow down][arrow down]    move down to third line
  22        a                           replace c with a
  23        [esc]                       rename old file and save new
  file

To learn the keystrokes available with SEE, use F1 and F2 to display
help screens.  After reading help screens type any character to return
to text display.

To see the capability of SEE and to verify that the version you have
is working correctly on your system, run the batch file RUNUTIL.BAT.
This file executes the following emulation sessions:

  1.  DEMOSEE1.KSF - test both native and alternate keys as defined on
                     F2.
  2.  DEMOSEE2.KSF - test full color character graphics by drawing
                     colored organizational chart boxes and a full
                     color U.S.  flag with blinking stars. Press enter
                     to end session.

One of the unique features of SEE is that the entire 370 assembler
source code is being distributed along with the object code.  Because
of this, the SEE editor can be customized as required.  The SEE.ALC
source program is about 3000 lines and requires no external
subroutines.  On a RAM disk, it assembles in about 60 seconds via the
command A370 SEE.  The link edit takes another 10 seconds via the
command L370 SEE.  A listing of the source can be generated via the
command A370 SEE/L if you have a hard disk.  The listing is too big to
fit on a 360k floppy disk.

SEE has several special keys which may need additional explanation.
The ALT-F3 key enters PC/370 debug mode where you can display the 370
registers via the R command, dump memory via the D command, trace
instructions, etc.  To return to the SEE editor, type Q.  Since the
default is to kill all trace ids and disable the PC/370 interactive
debug interrupt, you must either link SEE with the debug option D, or
press a key during loading of the SEE program to get into PC/370 debug
at the beginning of SEE where you can select ids to save and trace.

The ALT-F4 key toggles an internal audit mode which was very useful
during debugging and may be useful to others making changes to SEE.
In audit mode the critical pointers and control blocks are verified
for consistency after each operation that modifies them.  For large
text files, these audits may take several seconds so be patient.  Via
the audit mode, data corruption can be detected immediately after it
occurs rather than later such as when a save is attempted.  The
following block diagram shows the critical blocks and their
relationships:

 ******************************************************************
 * MS-DOS   64k segment                                           *
 ******************************************************************
 * SEE.COM  512k segment (code and data in 370 address space)     *
 *                                                                *
 *       SCB screen control block                                 *
 *      ************************* <<<<< ASCB pointer to screen    *
 *   X>>*SCBADDR DS A addr LB   *       control block with 25     *
 *   ^  *SCBPREV DS A prev LB   *       lines of text             *
 *   ^  *SCBNEXT DS A next LB   *                                 *
 *   ^  *SCBLINE DS CL80 text   *                                 *
 *   ^  ************************* <<<<< R5 relative index to      *
 *   ^  *SCBADDR DS A addr LB   *       current row in ASCB       *
 *   ^  *SCBPREV DS A prev LB   *       times X'100'              *
 *   ^  *SCBNEXT DS A next LB   *       (X'0000' to X'1700')      *
 *   ^  *SCBLINE DS CL80 text   *                                 *
 *   ^  *************************       R6 relative column (0-79) *
 *   ^                                  R7 address of SCB for row *
 *   ^                                                            *
 *   ^                         GLBLAST  DS A last    LB >>>>>>>X  *
 *   X<<<<<<<<<<<<<<<<<<<<<<<< GLBCUR   DS A current LB >>>>>X v  *
 *    (matches SCBADDR for     GLBFIRST DS A first   LB >>>> v v  *
 *     row 0 at all times)                                 v v v  *
 *                                                         v v v  *
 *                                                         v v v  *
 *  (Dynamic memory allocated via SVC 10)                  v v v  *
 *                                                         v v v  *
 *    LB line control block                                v v v  *
 *    ***************************                          v v v  *
 * 0  * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<X v v  *
 * X<<* LBNEXT DS A next LB     *                            v v  *
 * v  * LBLINE DS CL80 text     *                            v v  *
 * v  ***************************                            v v  *
 * v      ^                                                  v v  *
 * v      ^                                                  v v  *
 * X>>***************************                            v v  *
 *    * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<<<X v  *
 * X<X* LBNEXT DS A next LB     *                              v  *
 * v  * LBLINE DS CL80 text     *                              v  *
 * v  ***************************                              v  *
 * v      ^                                                    v  *
 * v      ^                                                    v  *
 * X>>***************************                              v  *
 *    * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<X  *
 * 0  * LBNEXT DS A next LB     *                                 *
 *    * LBLINE DS CL80 text     *                                 *
 *    ***************************                                 *
 *                                                                *
 *    (note lower right number on status line is ratio of         *
 *     active LB's to maximum LB's which will fit in extended     *
 *     memory. AFREELB pointer maintains queue of unused LB's.)   *
 *                                                                *
 ******************************************************************
 * E370R40.EXE PC/370 emulator loaded in high 64k segment         *
 ******************************************************************

The key things that are verified by the audit mode routines are as
follows:

  1.  The row (R5) and column (R6) relative pointers are within valid
      range.
  2.  The SCB address (R7) corresponds to current relative row (R5).
  3.  The SCBADDR in row zero matches GLBCUR.
  4.  The SCBPREV in each SCB matches SCBNEXT in previous SCB etc.
  5.  Starting with LB at GLBFIRST, verify forward and backward chains
      for all LB's in extended memory.  The total LB count is also
      verified.

Do not leave audit mode on for normal editing since it significantly
slows down the editor.

The label (F5), duplicate (F6), and delete key (del) all work
together.  When ever a block is active, the BLK indicator is on.  Be
sure to turn the block indicator off via F5, F6, or delete key.  If
the block indicator is not off and  the (del) key is hit to delete a
character, it will delete the block instead.  Note since the box
graphics mode indicator shares the same space on the status line,
turning on graphics will turn off the block indicator.

The search (F7) key will search for up to a 15 character key.  Use F8
to repeat search.  If a replacement key is specified, it will only be
replaced if it fits on current line.  Search can be interrupted by any
key.  The current line number is updated every 100 lines during
search.

The color selection key (F9) is tricky but powerful.  The attribute
byte shown on the message line consists of four fields; the blink bit,
the background color bits (RGB), the intensity bit, and the foreground
color bits (RGB).  The default attribute is set to B'00010111' or
X'17' which can be interpreted as no blink, no red background, no
green background, blue background, no intensity, and red, green, and
blue foreground (ie white foreground).  This is the PFS:WRITE default.
The TURBO PASCAL editor default is yellow on black B'00001110' or
X'0E'.  The attribute can be entered as a two digit hex number or the
arrows can be used to step through all the possible color and blink
combinations (all 256 of them).  Once the desired attribute is
selected, press enter to return to the screen with the new attribute.
Note that unfortunately the attributes of each character are not
stored in the file and when the screen is erased and updated again,
individual character attributes used on the screen are lost.  However,
the emulator option allows recreation of any screen with all the
colors used during the original session.  This capability can be used
to generate full color screen dialogs.

In addition to color, the box graphics or line graphics capability
allows creation of screens with organization charts and line diagrams
such as the one above.  I did not use color and I selected printable
characters via SHFT-F10 in order for this file to be printable on any
ASCII printer.  The default box graphic characters when F10 is turned
on is double line graphic characters which look neat on the screen but
can't be printed on many printers.  When F10 is pressed, the BOX
indicator comes on and the insert mode is turned off.  In BOX mode,
the arrows allow drawing of boxes and lines with correct corners based
on the current and next direction of arrows.  With a little practice,
it is easy to draw things and to add color to highlight different
parts.  However, the color is lost unless the keystroke file is being
created during the session.  Note in BOX mode, keystrokes are not
queued up as they are in normal text mode.  This is to prevent
overshooting the end of a line when holding down one of the arrow
keys.

The status line contains the following fields:

  1.  STATMSG  - 20 character message field used to display the
                 current function and to echo requested input.
  2.  STATFILE - name of the file being edited with path (15 char.
                 shown).
  3.  STATREC  - current line number.
  4.  STATCOL  - current cursor column
  5.  STATCAP  - caps key indicator
  6.  STATINS  - insert mode indicator (SEE always starts with INS
                 off)
  7.  STATNUM  - numeric mode indicator
  8.  STATBLK  - labeled block mode indicator / box graphics mode
                 indicator
  9.  STATPCT  - percent utilization of available memory

As a starting point for anyone who wishes to add a new key function,
the following minimum steps are required:

  1.  Overlay byte in KEYTAB which corresponds to the value of the new
      key with an index to the corresponding address in KRTAB.
      (All ASCII keys are in the range 0-127, and all extended keys
      are mapped into 128-255 by forcing the high order bit on.)
      Since the index values are multiples of 4, up to 63 keys can be
      handled with this scheme.

  2.  Insert address constant in KRTAB which points to the actual key
      routine.

  3.  Code the key routine with the following assumptions:

      a.  R14 has return address (You can use KRSV14 to save it.)
      b.  R5  has relative row times X'100'.
      c.  R6  has relative column.
      d.  R7  has address of SCB corresponding to current row.
      e.  GLBCUR    has extended memory address of LB for row 0 on
          screen.
      f.  GLBLAST   has extended memory address of last LB.
      g.  Useful routines include:
          1.)  SETCUR - reset cursor based on (R5,R6) and update
               status
               line if position has changed since last call.
          2.)  PUTMSG - display 20 character message passed via R1.
      h.  If the function you add, modifies any data in the SCB's, be
          sure to turn on the SCBMOD and SCRMOD flags to insure that
          the update and save routines recognize a file change
          occurred.
      i.  Assume nothing works and keep a backup copy of the editor
          and any test files you are using.

  4.  Add key definition to F2 screen without exceeding 24 lines.

  5.  Test all changes very carefully since this program should be
      considered complex.  The interaction between key routines and
      the maintenance of the screen and memory control blocks during
      scrolling, block operations, etc. is tricky to say the least.
      Use the audit mode to verify that the new routine does not
      destroy currency of the screen and extended memory data bases.

For release 2.0 of PC/370, the SEE editor was modified to use dynamic
memory in the 370 address space instead of MS-DOS allocated extended
memory accessed via the cross memory MVCS and MVCP moves.  The only
other change was to start up editor in insert mode for new files.

C.  PRINTDOC print utility

The PRINTDOC.COM program requires path\filename as single parm and
proceeds to print the specified file either on console or the standard
print device with page control and optional headings controlled with
embedded TITLE and EJECT commands.  For more information see the
source code UTIL\PRINTDOC.ALC.

D.  T370 translate object code utility

The T370.COM program requires path\filename as single parm with
optional trailing slash and one or more of the following parms:

  L - create listing file of the generated 370 OS/VS object file
      (suffix is HEX).  Default is none.

  P - punch 370 object code file (suffix 370).  Default is on.

The input file specified must be an object file created by A370.EXE.
For more information see the source UTIL\T370.ALC.




 
```
{% endraw %}

## FILES859.TXT

{% raw %}
```
Disk No:  859
Program Title: CROSS ASSEMBLER for the IBM 370 version 4.2 (Disk 2 of 3)
PC-SIG version: 3.3

PC/370 VIRTUAL MACHINE is a cross assembler that runs on the IBM-PC, AT,
or XT and lets you compile and run IBM 370 assembly language programs.
Please note that this is the second disk of a three disk set.  The other
two disks are #402 and 1352.

Usage:  For beginning through advanced S/370 assembly language
programmers.

Special Requirements:  None.

How to Start:  Type GO and press (press enter).

Suggested Registration:  $45.00

File Descriptions:

DEMO    <DIR> Contains demo program ALC source code.
DOC     <DIR> Contains machine readable PC/370 documentation.  Read
              DOC\INTRO.DOC for PC/370 overview and more information on
              the other component of the package.
MAC     <DIR> Contains MAC and MLC source code for macro pre-processor.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #859 CROSS ASSEMBLER 370  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For instructions on how to use this program, insert disk #402 & type:   ║
║                  MANUAL (press enter)                                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```
 
PC/370 help documentation

So you've successfully installed PC/370 using the BAT\INSTALL.BAT
command, have run the demo programs, and have read the documentation
files, but you still have some questions.  Well, here are some of the
most frequently asked questions and some answers which may help:

  1.  Where can I get more help?

      Send letter and/or diskette with problem to me at the address
      listed below and I will reply.  Subscribe to Compu-Serve
      electronic mail survice adn send me EASY mail message
      using ID# 73047,1113.

  2.  The A370.EXE cross assembler gets I/O error reading my source
      ALC program file?

      The file must be in ASCII text form with line feed (X'0A')
      character ending each line of text.  This is standard PC format
      used by most text editors including EDLIN and SEE.  If the ALC
      file was downloaded from an IBM mainframe, it may need to be
      translated from EBCDIC to ASCII.  Most mainframe to PC link
      facilities have this translation option as a default.

  3.  The A370.EXE cross assembler did not recognize some statements?

      See USER.DOC for OS/VS assembler features not supported by
      A370.EXE such as macros, and see the reference section for
      additional texts on OS/VS assembler and ASSIST.  If the program
      has macros, you must use the M370.COM macro preprocessor to
      expand macros into basic assembler first.  If the program has
      floating point E, D, or L type DC constants, an 80x87 math co-
      processor must be installed for the assembler to correctly
      assemble the floating point constants.

  4.  The L370.EXE linkage editor keeps getting unresolved external
      references even though I've checked that all subroutines have
      been added to system or program LIB file with correct /B option
      of MS-DOS copy command as shown in BAT\BLDLIB.BAT?

      The linkage editor scans the program LIB file first and then the
      system LIB file in sequential order attempting to resolve all
      external references in one pass.  If any module selected for
      inclusion calls a module previously scanned and not selected,
      then the link will fail as a result of the backward reference.
      You must sequence the libraries to eliminate backward references
      or force loading of required modules with explicit external
      address constants.  To allow unresolved references use option U.

  5.  My first program will not run.  How do I debug it?

      Specify an upper case T as only parameter when executing program
      to start in debug mode or link it with option D specified.  At
      the interactive debug prompt, type T to trace instructions up to
      point of failure.  You can stop trace at any point by hitting
      any key and then typing T again to restart.  If no entry point
      name was specified on END statement, the program will start at
      first byte of code.  If there are too many instructions before
      failure to trace, enter Q for quiet mode execution up to point
      of failure and then enter N for list of last 20 instructions
      executed.  See debug chapter of USER.DOC for more information.

  6.  My write to operator message printed garbage after message?.

      Add $ character to tell MS-DOS where end of text is.

  7.  My first file I/O operation caused an I/O error?

      Make sure that file is in current directory or that complete
      MS-DOS file path was specified in DCBDSN field of DCB with a
      trailing null character (X'00').  Make sure that record length
      (LRECL) includes room for carriage return and line feed
      characters in each text record.  Text record processing on the
      PC is quite different from the normal fixed length text record
      processing on an IBM mainframe.  Text records on the PC created
      by the SEE.COM full screen editor or most other PC editors such
      as EDLIN store text records in variable length ASCII form with a
      carriage return (X'0D') and line feed (X'0A') character
      indicating the end of each record and an end of file (X'1F')
      character after the last line feed.  If the file being read or
      written has 80 data characters, then the record length needs to
      be 82 bytes for text type files.  See SYSTEM.DOC for more
      information on file DCB options including translation between
      EBCDIC and ASCII.  The ASSIST extended instructions XREAD and
      XPRNT make the translation between ASCII text file format and
      EBCDIC fixed length record format automatically.  See the ASSIST
      demo programs DEMOAST1.ALC through DEMOAST4.ALC and the ASSIST
      section of USER.DOC for more information.

  8.  The records read from my input file appear to be in ASCII
      instead of EBCDIC as expected by the 370 program?

      The default for DCB text file processing is not to translate
      between ASCII and EBCDIC.  There is an option bit in the DCBFLG
      byte named DBTRAN which can be set prior to open to request that
      each record be translated such that file is in ASCII and record
      processed by program is in EBCDIC.  The ASSIST extended
      instructions XREAD and XPRNT automatically make this
      translation.

  9.  Why don't you have an option to let all character strings
      default to ASCII instead of EBCDIC code in an assembler program?

      Release 1 did have option E to specify either ASCII or EBCDIC
      for DC character strings and self defining character strings
      such as immediate data in CLI instruction.   This created non-
      standard 370 code by default when the ASCII mode was selected
      and was very confusing when mixing subprograms with different
      options.  Release 2 removed the E option and added option to
      define ASCII character strings using double quotes.   This
      solution also allows both types of character strings to be
      easily used in a single program.

 10.  Can I download and use the MVS, VM, or VSE macro's?

      No.  First they are copyright by IBM and licensed only on the
      mainframe they reside on.  Second, they would not work without
      changing them to use PC/370 supervisor calls and the limited
      syntax of the macro pre-processor.  The common MVS macros
      included such as DCB, OPEN, CLOSE, GET, and PUT have been coded
      from scratch for the PC environment.  Several different users
      are developing additional macros to provide compatible unit test
      environments for each of the above operating systems.

 11.  Can I download load modules from an IBM mainframe and run
      them using PC/370?

      Yes, but only if you also complete a PC/370 shell such as the
      MVS demo shell to intercept all SVC's and supervisor state
      instructions used.  The demo shell will support a native 370
      mainframe MVS load module that only uses problem state
      instructions and the WTO and WTOR svc's.  The actual load module
      file would have to be processed to remove all the extraneous
      fetch control records leaving just the 370 object code in a MOD
      type file which could be loaded and executed by the shell
      program.  The object code would have to be self relocating (i.e.
      no relocation records in the load module file).

 12.  Can I download fixed blocked files and read them directly with a
      PC/370 program?

      Yes, one of the DCB file processing options is fixed blocked.
      This mode assumes that the file contains fixed length binary
      and/or EBCDIC data records with no carriage returns or line
      feeds.  Text files are not normally stored in this format on
      PC's because it wastes so much space compared to the variable
      length ASCII text format.

 13.  Can I upload source, object, or load modules to the mainframe
      and execute them?

      Yes, with the following restrictions:

        a. Source code must be translated back to EBCDIC and any SVC's
           or macros used must be compatible with the mainframe
           operating system and macro assembler.

        b. Object code can be uploaded after it is converted from
           compressed bit stream format (OBJ) to OS/VS linkage editor
           80 byte fixed blocked format (370) using the utility
           T370.COM which is included in both object and source form.
           This is being used by some software developers who unit
           test code on a PC and then upload tested object code to
           mainframe.

        c. Load module code can be uploaded but with the following
           restrictions.  Only MOD format code would make sense to
           upload since the loader code in COM format files is unique
           to PC MS-DOS environments.  An application interface on
           the mainframe would have to be written to read the MOD
           file code into memory and link to it.  Of course, the
           supervisor instructions would have to be compatible with
           the mainframe operating environment.

Please send additional questions and answers you think would be
helpful to other users.  I will add them with appropriate credits.
This file was first added in release 4.2 at the suggestion of BIll
Earle.

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
 
HISTORY.DOC Summary PC/370 Release History

     MMS/370 R1.0 12/28/81 first beta test demo for Z80 CP/M-80

         Successful demo program assembly, link, and execute
         completed on the following systems:

           1.  Radio Shack Model II with Lifeboat CP/M  v2.2.
           2.  Cromemco system with Tarbell CP/M  v1.4.

     MMS/370 R1.1 01/04/82 first Distributor evaluation version
                           sent to Lifeboat Assoc. for evaluation

     MMS/370 R1.2 12/20/82 second beta test

     MMS/370 R1.3 02/12/83 first user release

     A370
        1.  Add XREAD, XPRNT, XDECI, XDECO, XFILI, XFILO, XDUMP
        2.  Fix location 0 overlay processing missing END.
        3.  Force E22 length error for 0 length program.
     L370
        1.  Force E08 memory error for 0 length segment.
        2.  Fix incorrect SEARCH return code due to DEQ.
        3.  Fix ORG error at end if no literals.
        4.  Fix bad stack address at program entry with option G.
        5.  Fix object code error when control Z is first byte of
            physical block in concatenated object file.
        6.  Allow alternate disk drive A for L370.LIB if not found
            on specified drive for object file.
     E370
        1.  Add ASSIST support plus interactive debug log option.
        2.  Add 370 instruction trace and instruction address stop.
        3.  Add 370 address protection for CP/M and E370 areas.

     MMS/370 R2.2 05/04/83 second user release with new XA extensions

     A370
       1.  27 new instructions added including BAS, BASR, MVCIN,
           BSM, and BASSM.
       2.  Fix made to handle explicit 256 byte SS instructions
           correctly.
       3.  Fix DC logic to surpress duplicate references to *.
       4.  FIX SVC interface to save IX and IY for NEC PC MSDOS.
     L370
       1.  Fix stack pointer for execution for option G to prevent
           initial call from storing address in program area.  Also
           changed call in prefix to simple jump to emulator entry.
     E370
       1.  5 new non-privileged instructions supported along with
           PSW address mode bit 17.
       2.  The existing instructions LA, BAL, BALR, EDMK, and TRT
           all have been modified to function correctly in both
           24 and 31 bit addressing modes.
       3.  Fix incorrect instruction length code in BAL 24 bit
           mode .
       4.  Fix incorrect EDMK address for single byte PD fields.
       5.  Fix incorrect SS instruction processing when length is
           over 128.
       6.  Fix fixed point multiply and divided overflow when
           result is negative.
       7.  Fix sign of remainder for fixed and packed divide.
       8.  Fix packed decimal compare for negative zero.
       9.  Fix condition codes for multiply and divide exceptions.
      10.  Fix Assist XREAD to correctly support 1 byte area.
      11.  Fix arithmetic shift left overflow logic.
      12.  Fix packed decimal divide to correctly detect overflow.

    MMS/370 R2.3 06/30/83 third user release with updated XA
    extensions

     A370
       1.  Add IPM and other new XA supervisor instructions
     L370
     E370
       1.  Add IPM instruction
       2.  Change XA mode PSW bit to 32 and display extended mode PSW
           when in XA mode.
       3.  Correct BSM logic to skip save when first register is 0.
       4.  Add option to update 370 registers to MMDBUG command Y.
       5.  Reduce size of E370 by 500 bytes by changing logic macros
           to common subroutines for logical RR and RX instructions.

    MMS/370 R3.1 03/08/84 maintenance release with corrections

    A370
      1.  Fix error created by V type address constant referencing
          CSECT defined later in same assembly.
      2.  Fix length attribute of CSECT/DSECT to always be 1.
    L370
    E370
      1.  Fix error in XR and X exclusive OR logic introduced in R2.3
          when logic was combined in 1 routine to save memory.
      2.  Fix DP overflow logic to cause divide exception 0CB instead
          of divide overflow.  Note divide exception cannot be masked
          like overflow but SPIE can be used to handle it.
      3.  Check for interrupt every 256 instructions even in kill
          mode.
      4.  Only trace IFL entries in 370 mode for N command.
      5.  Fix NODBUG minimum storage replacement module for MMDBUG to
          correctly NOP 370 TRACE calls.

    PC/370 R1.0 06/08/85 first freeware release for 8086 MSDOS systems

    A370
    L370
      1.  Force option F to always dynamically load E370.EXE. The
          emulator can no longer be linked with 370 code since L370
          does not process native 8086 assembler object code format.
    E370
      1.  Add SVC's 17-22 to handle extended MSDOS functions such as
          time.

    PC/370 R1.1 11/11/85 maintenance release

    A370
      1.  Allow lower case command line.
      2.  Fix error for zero length data in DC for alignment.
    L370
      1.  Allow lower case command line.
    E370
      1.  Allow lower case debug command entry.
      2.  Initialize register 13 to standard save area.
      3.  Support 370 instruction address reset via J command.
      4.  Only stop at IFL trace in 370 address stop mode.
      5.  Attempt to close all files when exiting via <esc> command.
    DOC
      1.  Add documentation files describing trace id points.

    PC/370 R1.2 07/18/86 maintenance release plus SEE editor utility

    A370
      1.  Drop form feed on first page heading.
      2.  Translate lower case ASCII comments to upper case.
      3.  Align column headings for cross reference and repeat
          headings.
      4.  Fix error when DC F coded without data - now issues error.
      5.  Rearrange opening of files in pass 2 to insure that no more
          memory is required in pass 2 than in pass 1.  This allows
          number of symbols to directly determine maximum assembly
          possible (SEE is within 30 symbols of maximum now).  Note
          debug was removed from A370 (8k) to provide more symbol
          space.  Also note in pass 2, ALC file buffer will be smaller
          to provide room for object and print file buffers if
          necessary to not exceed pass 1 memory usage.
      6.  Tighten TITLE syntax to require correct leading quote.
    L370
      1.  Drop form feed on first page heading.
      2.  Align column headings with data lines.
      3.  Correct bug causing CSECT reference labels to be truncated.
    E370
      1.  Correct bug in XDECI ASSIST instruction to correctly input
          negative numbers.
      2.  Translate DDNAME to ASCII for SEARCH and DELETE SVC's.
      3.  Reverse DMAS, DMAE, BLKE addresses during OPEN/CLOSE along
          with EODAD and SYNAD addresses to support user defined
          buffer.
      4.  Change debug trace to only trace first ID after IFL in 370
          mode.
      5.  Support trace ID's IOF and ION to turn interrupts off and
          on.
      6.  Fix bug in IOS get text record routine which caused
          premature end of file when DCB was within 128 bytes of
          buffer area due to uninitialized register picking up DCB
          address instead of DMA address during pending EOF
          processing.
      7.  Fix bug in IOS random write routine to increment block
          pointer when writing blocks larger than 128 bytes.
      8.  Change debug to not kill SVC 9 trace entries from 370 code.
      9.  Add SVC 23 to perform RENAME using DCB with EBCDIC names.
          (See SEE.ALC for example use and IHADCB extensions.)
     10.  Add SVC 24 to microcode printing line of ASCII text on
          screen with attribute colors. (used to more than double SEE
          speed).
     11.  Fix memory management to not allocate from last FQE unless
          there is room for a remaining smaller FQE pointer.  Force
          end of memory at x'FF00' to leave room for stack.
     12.  Support S save/unsave debug command to protect current trace
          ID while running in kill mode.  (very useful to obtain high
          speed execution up to selected point in program).
     13.  Save 8086 flags in high R0 for BIOS SVC's such as KEYBOARD.
     14.  Add explicit EBCDIC/ASCII translation and line control
          options to SVC's 0-24 via high bits of R2:
            bit 0 - explicit control if on, else use option E
            bit 1 - force EBCDIC translation if on, else use ASCII
            bit 2 - force addition of line control, else none

            (For example ICM R2,8,=X'80' would force no translation
             and no line control regardless of option E setting.)
     15.  Fix debug N trace listing to translate SVC 9 EBCDIC Id's.

     DOC
      1.  Add SEE.ALC source code utility to edit or browse an ASCII
          text file in full screen color mode.  Keystrokes are
          compatible with Turbo Pascal and PFS:WRITE.  The editor
          supports files up to 512k.  SEE includes character graphics
          to support line drawings and organizational chart drawings.
          SEE also supports creation of session keystroke file (.KSF)
          which can be reused to recreate SEE session with full screen
          colors and with keyboard pause and wait control.
      2.  Add PRINT.ALC source code utility to print source programs
          and PC370.DOC documentation file with page control.
      3.  Add information on electronic bulletin board and PC-SIG
          distribution via disk #402.
      4.  Add DW3NUM.ALC source code utility to insert line numbers on
          all non-blank lines in a Displaywrite III text document.
          Numbers are placed in left margin and reset at beginning of
          each page.  This program serves as a model for other
          utilities that could be written to process Displaywrite III
          document files directly.  This utility squeezes file and
          lists file on console in the process of inserting line
          numbers.
      5.  Drop form feed on first page heading for PRINTDOC.ALC.

    PC/370 R2.0 05/16/87 major update with 512 address space support

    A370
      1.  Converted to EXE format with 64k data segment and buffer
          segment.
      2.  Now supports 3 times as many labels and literals.
      3.  File handle I/O with pathing much more efficient.
      4.  Fix error if DSECT's contain anything but DS instructions.
      5.  Allow references to ENTRY symbols within same module.
    L370
      1.  Converted to EXE format with 64k data segment and buffers
          segment.
      2.  Now supports code modules up to 50k.
      3.  File handle I/O with pathing much more efficient.
      4.  New option M creates 370 MOD file without COM prefix.
    E370
      1.  Converted to EXE format running in high 64k segment.
      2.  The standard instruction set plus ASSIST now supports
          direct addressing up to the maximum available memory
          under MS-DOS 2.0+ (512k+).
      3.  Error in one byte overlapped pack instruction corrected.
      4.  Error in BXH and BXLE with negative updated index values
          fixed.
      5.  Memory management now supports the full address space
          using 8 byte free queue elements (4 byte address and
          4 byte length).  ASCASF FQE chain pointer is located at
          X'118'in new address space control block.  The same
          registers for SVC 10 and 11 are used.
      6.  File management support has been rewritten using MS-DOS
          file handle I/O to support pathing and random or
          sequential access to multiple files.  Each file can
          have up to 64K buffer.  Maximum files open is
          controlled by CONFIG.SYS FILES= parameter.  See
          DOC\SYSTEM.DOC and CPY\IHADCB.CPY for more information.
      7.  The interactive debug facility has been expanded to
          provide additional support for virtual address space
          separate from emulator address space.  The Z command
          determines which address space functions refer to.  The
          debug facility is included in A370 and L370 as well as
          E370.  A new "I" command added, dumps full word counter
          which is source record count in A370, logical object record
          in L370, and 370 instruction counter in E370.  Address stop
          on this word can be used to stop execution at any desired
          point.  However, note that in kill mode, the counter may be
          incremented more than once between trace ids preventing
          address stop on equal from triggering.
      8.  The interface between linked COM modules and the E370.EXE
          emulator has been redesigned to use the MS-DOS standard EXEC
          function instead of somewhat non-standard overlay load.  Now
          the first 16 bytes of each linked COM module contains the
          EXEC mainline which links to E370.EXE in the high 64k of
          available memory.  E370.EXE initializes the virtual address
          space origin 16 bytes past the beginning of the COM module
          with executable code starting at X'210' into module or
          relative X'200'.  COM mainline will abort if there is not
          room for COM module plus 64k for E370.EXE.
      9.  E370.EXE now supports SVC 25 to load any kind of file
          including linked COM files into free memory.  See
          DOC\SYSTEM.DOC and CPY\IHASCB.CPY.
     10.  E370.EXE now supports SVC 26 an 27 for attach and detach of
          COM 370 programs which run in their own relative address
          spaces.  See DEMO\DEMOPSW series of demo programs for
          example.
     11.  Fix trace and PSW address of EX target instructions.

    PC/370 R2.0A 05/24/87 fixes to 2.0

    A370
      1.  EQU's preceeding first CSECT caused 0 length blank CSECT
          error.
    L370
    E370
      1.  Error in Freemain svc 11 when releasing block between two
          existing free blocks chained to third free block.
      2.  I/O supervisor now takes SYNAD exit if bad RBA causes random
          read or write to fail due to pointing beyond disk capacity.

    PC/370 R3.0  08/30/87 new macro preprocessor, floating point,
          scientific subroutines, generic interrupt SVC, ASCII string
          constants, MVS shell demo with SIO channel simulator
    A370
      1.  Support for E, D, and L floating point constants added.
      2.  ASCII string constants in double quotes added and self
          defining string constants fixed to handle C'''' etc.
      3.  Error in DS or DC destroyed location counter causing
          additional erroneous base errors in following instructions.
      4.  Treat blank lines like comments instead of syntax errors.
    L370
      1.  Error in concatenating object files when previous file ends
          exactly on 128 block boundary.
      2.  Add option I to surpress all interrupts during execution.
      3.  Add option P to surpress floating point even if 80x87 avail.
    E370
      1.  Floating point instructions added using 80x87.
      2.  SVC's 28-35 added to assist use of ASCII strings, generic
          interrupt to issue any MS-DOS or BIOS interrupt with user
          defined PC registers, plus scientific subroutine assist
          using 80x87 routines for square root, 2**X, tangent,
          arctangent, logs.
      3.  Fixed ASCII file output translation option (was translating
          after write) in PUT svc.
      4.  Correct ASCII/EBCDIC translation of left bracket and GE
          symbols.
      5.  Correct debug jump command to handle addresses over 64k in
          370 mode.
      6.  Correct MP to return specification error if L'A LE L'B, L'B
          GT 8, or high bytes of A for length L'B not zero.

    PC/370 R3.1  09/02/87 maintenance to R3.0 based on user feedback

    A370
      1.  Fix error in object code ORG when DS is used in multiple
          CSECT module causing L370 link error due to ORG exceeding
          length of CSECT (offset to start of non-zero CSECT was not
          being subtracted to calculate relative CSECT ORG address).
          Explicit ORG's worked fine, only a DS generated ORG caused
          error.
    L370
    E370

    PC/370 R3.2  09/07/87 maintenance to R3.1 based on user feedback

    A370
      1.  Allow maximum 80 character ALC source with seq. #.
      2.  Fix label equated to CSECT/DSECT which caused L370 errors.
      3.  Flag DC error for RLD's for DSECT labels which caused L370
          errors.
    L370
    E370
      1.  Fix ZAP to correct regression bug with R2.0 where any number
          with zero in low nibble gives positive sign and zero
          condition.

    PC/370 R4.0  11/08/87 maintenance to R3.1 based on user feedback

    A370
      1.  Add support for COPY statement to include source code from
          any MS-DOS path\filename.  The default suffix is CPY.
    L370
      1.  Add option B to create file identical to COM file but with
          suffix BIN for use with Micro Focus COBOL.
    E370
      1.  Support resident option invoked by directly executing the
          emulator EXE module.
      2.  Support calls from Micro Focus COBOL in resident mode using
          standard linkage conventions and V=R addressing mode.
      3.  Modify OPEN logic to allow use of SYNAD exit even though
          file may not be open due to error such as file not found.
          Add error and function codes in R0 and R1 for use by SYNAD
          exit in determining error (see LIB\SYNERROR.ALC).

    PC/370 R4.1  11/20/87 maintenance to R4.0 based on user feedback

    A370
      1.  Correct ORG to correctly handle CSECT or DSECT name as well
          as any relative expression (The code was only allowing
          relative expression operand rather than special label type).
    L370

    E370
      1.  Correct serious bug in release 4.0 which stores 8 byte free
          queue element directly after the end of each BIN module.
          (This code to build free area behind COM modules can cause
          COBOL run time system to crash after exiting from
          subroutine depending on use of area overlayed).
      2.  Add optional parameter to define size of system queue area
          (SQA) memory in the resident emulator address space for use
          by COBOL subroutines.  Size is in hex paragraphs and default
          is 10 or 256 bytes.  Through use of SQA, COBOL subroutines
          can now perform standard file I/O with dynamic buffer
          allocation (See BAT\RUNCBL.BAT demo for example SQA and
          I/O use).
      3.  Enhance interactive debug to support resident reusability by
          restoring all traces at beginning of each COM execution and
          at beginning of all COBOL subroutines called with option D
          specified at link edit.  Also toggle command K can be used
          to restore traces at any point in program execution (This
          allows quickly reaching a selected point in program and then
          restoring traces for complete instruction tracing).
      3.  Support user defined standard COBOL return code using value
          in register 15 (low 16 bits) at exit.

    PC/370 R4.2  01/05/88 Micro Focus XM protected mode support

    A370
    L370
      1.  Add option U to allow undefined external references.
    E370
      1.  Support Micro Focus XM COBOL protected mode call to PC/370
          assembler subroutine in BIN file (See USER.DOC for more).
          The resident interrupt was moved from hex DC to hex 60.
          (See PTF.DOC for fix to change interrupt # if it conflicts.)
      2.  Fix 0C9 on CVB with negative zero packed decimal input.
      3.  Correct EBCDIC to ASCII translate tables to handle
          > { and [ conversion in both directions (half fixed in 3.0).
      4.  Flag error for text file with LRECL<2.
      5.  Fix SRP to use only low 6 bits in second operand for shift.
          (If the 6 bit number was positive, 8 bits were used.)
      6.  MVS standard parm list with address, half word count, and
          EBCDIC parm field is now pointed to by R1 at entry.
      7.  If floating point option is on and 80X87 is installed,
          hardware assist is used for CVB and CVD to speed up
          instruction by up to 4 times for large numbers.
      8.  Add MVS program interruption element (PIE) control block
          pointed to by R2 at entry to SPIE trap.  This allows full
          recovery from trap without losing content of registers.
          (See CPY\IHAPIE.CPY for more information.)
      9.  Fix incorrect PSW on exception of executed instruction.
     10.  Add SVC 36 to load overlay file at specified virtual
          address.
     11.  Add SVC 37 to define SVC user exit table.
          See DEMO\DEMOTRAP.ALC for examples.
     12.  Add production version of emulator E370P42.EXE without
          interactive debug or ASSIST facility to save 10k.
 
```
{% endraw %}

## INTRO.DOC

{% raw %}
```
 
INTRO.DOC Introduction to PC/370

Copyright 1988 Donald S. Higgins

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710

E-MAIL via CompuServe 73047,1113

The PC/370 package is a PC shareware package which supports the
assembly, link edit, and execution of IBM 370 assembler programs
on a PC with 256k and MS-DOS release 2.0+.  See READ.ME file in
root directory for registration information.

The PC/370 package consists of four main programs:

  1.  M370.COM macro preprocessor which reads macro assembler file
      and produces expanded basic assembler source code.

  2.  A370.EXE is an IBM 370 cross assembler which reads 370 source
      code file and produces object code file plus optional listing
      file.

  3.  L370.EXE is an IBM 370 cross linkage editor which reads object
      code and produces a directly executable 370 native machine code
      file plus optional CSECT listing file.

  4.  E370R42.EXE is an IBM 370 machine code emulator which is
      dynamically invoked at execution time to support execution of
      370 native machine code including the standard problem state
      instruction set plus packed decimal and floating point
      instructions.  Direct execution of E370 makes it resident to
      eliminate the time required to dynamically load it at each 370
      program execution time, and to also support calls to 370
      subroutines from Micro Focus COBOL/2 programs running under
      the default real MS-DOS mode on any 80x86 machine or the
      extendedmemory XM protected mode on 80286 or 80386 machines.

The package also comes with several 370 assembler language utilities
including:

  1.  SEE.COM      -  full screen text editor with PFS:Write and
                      Wordstar keystroke compatibility.
  2.  PRINTDOC.COM -  format utility to print documentation with
                      page numbers.
  3.  T370.COM     -  object code translator to allow uploading 370
                      object code files for direct OS/VS linkage
                      editing on 370 mainframe without reassembly.

The PC/370 package consists of the following component directories:

  1.  R42  - root directory containing all PC/370 executable code.
  2.  DOC  - documentation ASCII text files.
  3.  BAT  - demo command procedures plus install procedure.
  4.  LIB  - 370 source code for L370.LIB system subroutine library.
  5.  CPY  - 370 source code for copy members.
  6.  MAC  - 370 source code for macros.
  7.  CBL  - 370 source code for COBOL 370 subroutine demo.
  8.  DEMO - 370 source code for demo programs.
  9.  UTIL - 370 source code for utilities SEE, PRINTDOC, and T370.

On 3.5" diskette, all of the above directories are on single disk.
On 5.25" diskettes, 3 volumes are required starting with the
R42 volume which contains BAT\INSTALL.BAT command file.

The PC/370 documentation consists for the following machine readable
files which can be printed via the utility PRINTDOC.COM:

  1.  INTRO.DOC    - overview of product.
  2.  HELP.DOC     - common questions and answers
  3.  USER.DOC     - program options required to use all of the PC/370
                     facilities at the application programmer level.
  4.  SYSTEM.DOC   - program options available for use by system
                     programmers.
  5.  MACRO.DOC    - macro preprocessor options plus included macros.
  6.  UTILITY.DOC  - utility program options.
  7.  HISTORY.DOC  - history of PC/370 releases and features
  8.  PTF.DOC      - private temporary fixes for previous releases.

The PC/370 command procedures in the \BAT directory are as follows:

  1.  INSTALL - copy all PC/370 directories to hard disk with R42
                as root and all others as sub-directories.
  2.  RUNDEMO - run all the demo programs in the \DEMO directory.
                This will verify installation and illustrate the
                PC/370 facilities.  Note last section of demo
                requires 80x87 math co-processor for floating point
                demo.  This section can be skipped if no co-processor
                is installed.
  3.  RUNUTIL - run demo of the SEE text editor, PRINTDOC print
                utility, and T370 object code format utility.
  4.  RUNMAC  - run demo of macro pre-processor facility.
  5.  RUNCBL  - run demo of Micro Focus VS COBOL 370 subroutine.
  6.  BLDLIB  - rebuild L370.LIB system relocatable subroutine
                library from source code in \LIB.
  7.  BLDUTIL - rebuild utilities from source code in \UTIL.


All of the above commands are designed assuming that the current
directory is R42 and that all of the other 8 directories are defined
in the R42 directory.  No parameters are required.

To code and execute a simple sample program, type the following after
running the installation procedure file INSTALL.BAT and setting the
current directory to \R42:

  STEP     COMMAND                  COMMENTS

    1      SEE DEMO                 invoke full screen editor to
                                    create DEMO.ALC 370 assembler
                                    source file.
    2      DEMO CSECT               first line - define section
    3           USING *,15          second     - define base register
    4           LA    2,=C'HELLO$'  third      - address of msg. text
    5           SVC   209           fourth     - request console msg.
    6           BR    14            fifth      - exit to MS-DOS
    7           END                 sixth      - end of program

    8      <esc>                    enter escape key to save DEMO.ALC
                                    and exit to MS-DOS
    9      A370 DEMO/LX             assemble DEMO.ALC and create
                                    DEMO.OBJ object code file and
                                    DEMO.PRN listing with symbol
                                    cross reference.
   10      L370 DEMO/LX             link DEMO.OBJ object file and
                                    create DEMO.COM executable file
                                    and DEMO.LST CSECT listing file.
   11      DEMO.COM                 execute DEMO.COM which will load
                                    E370R42.EXE to execute 370 machine
                                    code in DEMO.COM and print "HELLO"
                                    on the console.
   12      DEMO.COM T               execute DEMO.COM again with test
                                    parameter which invokes debug
                                    facility.
   13.     T                        At debug prompt, enter T to trace
                                    each instruction while executing
                                    the demo program.

   14.     TYPE DEMO.PRN            print assembly listing.

   15.     TYPE DEMO.LST            print link edit listing.

I hope you find the PC/370 package useful.  Please send feedback on
your usage of the product and suggestions you may have.  Please
register if you want assistance with the current product and want
to support future development and enhancements.

If you are not familiar with IBM 370 assembler language, I recommend
you obtain the text, "IBM 370 Assembler Language with ASSIST,
Structured Concepts, and Advanced Topics", by Charles J. Kacmar at
Texas A&M University, and published by Prentice Hall in September
1987, ISBN 0-13-455742-5.

____________

IBM      - trademark of International Business Machines
MS-DOS   - trademark of Microsoft
VS COBOL - trademark of Micro Focus Inc.
```
{% endraw %}

## MACRO.DOC

{% raw %}
```
 
MACRO.DOC PC/370 macro pre-processor documentation

Resolution of macros in a PC370 Assembler source program is achieved
by means of a preprocessor.  To invoke the preprocessor, just type the
following:

M370 filespec

"filespec" is in the standard DOS format for file specification.  The
file extension is optional: if one is specified, it can be just
anything; if none is specified, MLC is the default. To indicate a file
with no extension, you must terminate the name by a period with
nothing behind.

The source program will be examined, with all references to macro
instructions causing the appropriate expansion to be performed.  A new
file with the same file name and ALC as the extension will be created
on the same drive as the input, ready to be passed to A370.  For
instance, typing M370 MYPROG will cause MYPROG.MLC to be read from the
default drive and MYPROG.ALC to be written on the same drive.

Macros themselves must each constitute one separate file with the
filename equal to the macro name and the extension equal to MAC, for
instance OPEN.MAC.  Macros will always be read from the default drive
(if this drive is a RAM disk, access is extremely fast).

Macros can have both positional and keyword parameters.  In a macro,
references to parameters is via the & character:

   - &n ("n" being replaced by one digit from 1 to 9) refers to the
     nth positional parameter;

   - &xxxxxxxx ("xxxxxxxx" being replaced by a name from one to eight
     letters and/or digits) refers to keyword parameter xxxxxxxx.

There are two predefined and system-maintained keyword parameters:

   - &LABEL$$ refers to the label; it always returns an eight-
     character label padded with blanks if necessary;

   - &N$ references an internal three-digit counter incremented by one
     at every occurrence of a macro instruction in the source program:
     it can be appended to labels generated in the macro expansion to
     make them unique.

References to parameters may be inserted anywhere:  between commas,
parentheses or quotes, and even in comments.  If a parameter is to be
immediately followed by letters or digits, a separating period must be
used, for instance &PARM.DATA (the period will be dropped at expansion
time).  In other cases, the period is optional:  for instance, one may
code &PARM(R1) or &PARM.(R1) indifferently.  If a parameter is to be
followed by a period, two consecutive periods must be coded, for
instance &NAME..COM.

The length of a parameter can be tested in a AIF instruction by coding
K'&xxxxxxxx as the subject; the complement must then be a numeric
value.

Macros may contain five special opcodes:

  MACRO  which, if present, must be in the very first line of the
  macro.  It is used to supply the default values of the parameters.
  The MACRO statement may extend on multiple lines.

  SETC  which is used to set a new value in an existing parameter or
  in a macro work-parameter. The first execution of a SETC instruction
  for a new parameter name creates that parameter: no prior definition
  is needed.  The format of the SETC instruction is as follows:

         xxxxxxxx SETC  value

  "xxxxxxxx" is the name of the parameter, without the leading &
  character.  "value" is any value; if it is enclosed in quotes, these
  quotes will not be returned when the parameter is referenced.

  AIF  in which only one condition can be tested.  The relation signs
  supported are = # > <.  If, after resolution of all &parameters, the
  two sides of the equation are composed of digits only, regardless of
  the respective numbers of digits, the comparison is numeric
  (negative values are not supported).  If K'&parameter is coded as
  the first member and the second member is composed of digits only,
  the comparison is also numeric.  Otherwise, the comparison is
  alphanumeric and the length of the complement determines the number
  of characters compared from the subject.  Both the subject and the
  complement may be coded as is, quotes being optional.  The
  complement may contain any character except the period because the
  period indicates the end of the complement.  At the same time, the
  period is the first character of the label where to go if the
  condition is true.

  AGO  in which you code a label where to proceed unconditionally.
  This label should begin with a period.

  ANOP  which is a no-op.

Labels start with a period and can be 2 to 8 characters long.  They
can be attached to a AIF, AGO or ANOP instruction or to any regular
Assembler statement in which case the label is erased during the
expansion process.  All AIF and AGO statements referencing a label
must come before this label; in other words, branching backward is not
permitted.

Lines of comments may be inserted in a macro simply by coding .* in
the first two positions. These lines will be ignored during the
expansion of the macro.

         *****************************

In the input source program, references to macros can freely be coded.
Parameters may extend on multiple lines.  Each of these input lines is
changed into a comment line on the output.

If continuation lines are used, the continued line must stop on a
comma as the last character or followed by at least one blank and
optional comments; the continuation line may restart in any position.
No continuation indicator in column 72 is needed.

Positional and keyword parameters may be intermixed.  If the value of
a parameter is a literal in quotes, these quotes are passed as an
integral part of the value: if necessary, you can get rid of them by
issuing a SETC statement moving the parameter into itself.
Consecutive commas can be coded to skip a positional parameter and
keep its default value.

         *****************************

Here are two examples of macros:

DCB  MACRO DSORG=S,RECFM=F,MACRF=G,LRECL=80,BLKSIZE=0,
        EODAD=0,SYNAD=&EODAD,RECORD=0
&LABEL$$ DS    0F,0CL86
  DC    C'ADCB'
  AIF   &DDNAME=(.DDX  format DDNAME=(FIELD) ?
  DC    A(DCBDD&N$)    no, use generated ddname field
  AGO   .DDZ
.DDX  DC    A(&DDNAME)
.DDZ  AIF   &MACRF>P.BDAM  is MACRF equal to R or W ?
  DC    X'FFFF',X'00'
  DC    CL1'&DSORG',CL1'&MACRF',CL1'&RECFM'
  DC    X'0A1A'
  DC    H'&LRECL',H'&BLKSIZE'
  DC    A(&EODAD,&SYNAD,&RECORD)
  DC    54X'00'
  AGO   .DDN
.BDAM  AIF   '&RECORD'='0'.NOREC  has RECORD parameter been omitted ?
  DC    X'FFFF',X'40'
  AGO   .DSORG
.NOREC  DC    X'FFFF',X'00'
.DSORG  DC    CL1'&DSORG',CL1'&MACRF',CL1'&RECFM'
  DC    X'0A1A'
  AIF   '&BLKSIZE'='0'.NOBLK   has BLKSIZE been omitted ?
  DC    H'&BLKSIZE',H'&BLKSIZE'
  AGO   .ADRS
.NOBLK  DC    H'&LRECL',H'&LRECL'
.ADRS  DC    A(&EODAD,&SYNAD,0,&RECORD)
  DC    50X'00'
.DDN  AIF   &DDNAME=(.END  is DDNAME a field name ?
DDNAME  SETC  &DDNAME  to remove quotes if any
DCBDD&N$ DC    C'&DDNAME',X'00'
.END  ANOP

Note in the above example that the default value for SYNAD is that
specified or assumed for EODAD.



OPEN  MACRO
  AIF   '&LABEL$$'='        '.GO  is label field blank?
&LABEL$$ EQU   *
.GO  AIF   &1=(.REG  is it OPEN  (register) ?
  LA    2,&1
  AGO   .SVC
.REG  AIF   &1=(2).SVC  is it OPEN (2) ?
  LR    2,&1
.SVC  SVC   1



Here is an example of a program using the BEGIN, WTO, OPEN, GET, PUT,
CLOSE, RETURN and DCB macros:


TEST  BEGIN
  WTO   'DEMONSTRATING THE USE OF MACROS'
  OPEN  FILE1
  OPEN  FILE2
LOOP  GET   FILE1,RECORD
  PUT   FILE2,RECORD
  B     LOOP
EOJ  CLOSE FILE1
  CLOSE FILE2
  RETURN
FILE1  DCB   LRECL=256,RECFM=T,MACRF=G,EODAD=EOJ,
        DDNAME='MYFILE.IN'
FILE2  DCB   LRECL=256,RECFM=T,MACRF=P,
        DDNAME='MYFILE.OUT'
RECORD  DS    CL256
  END

Run BAT\RUNMAC.BAT for macro demo programs.

********************************************************************

      If you find the macro preprocessor useful and want to support
      future enhancements, please send $20.00 to:

      Jacques Roy
      XL SOFTWARE INC.
      1000 St-Jean-Baptiste #120
      Quebec City CANADA G2E 5G5

********************************************************************

The following macros are included in the MAC directory for use with
the M370.COM preprocessor.  For more information on M370, see
DOC\USER.DOC and BAT\RUNMAC.BAT.

BEGIN  SAVE={YES|NO},BASES={1|2}

  Generate CSECT and standard program beginning.
  Parameters are optional. Defaults are SAVE=YES,BASES=1.
  Unless SAVE=NO is specified, a save area is defined and register 13
  is established as the first base register. Register 12 will be
  established as the second base register if BASES=2 is specified.
  If SAVE=NO is specified, register 12 is established as the only base
  register: in this case, the program should not modify the contents
  of register 13.

CALL   pgm

  Load address of external subroutine pgm into register 15 and
  branch and link via register 14 to address in register 15.

CLOSE  dcb

  Close a file.  The parameter is mandatory and must be either the
  name of a DCB, or a register in brackets pointing to a DCB.


DCB  DDNAME=ddname
  DSORG=org
  RECFM=format
  MACRF=macro
  LRECL=reclength
  BLKSIZE=blklength
  EODAD=eof
  SYNAD=err
  RECORD=fieldname

  Generate a DCB for PC/370 file access.  See DOC\SYSTEM.DOC for more
  information.  Only DDNAME is required; all other parameters have
  default values.  Parameters can be specified in any order.

  "ddname" can be: - a filename of one to eight characters only (no
       device specification, no extension);
     - a literal in quotes of 1 to 64 characters that represents a
       valid DOS file specification;
     - the name in brackets of a 1 to 64-character field
       containing a valid DOS file specification, in EBCDIC.
  "org"       can be S or R; the default is S.
  "format"    can be F, V or T; the default is F.
  "macro"     can be G, P, R or W; the default is G.
  "reclength" is a number representing the record length; the default
       is 80.
  "blklength" is a number representing the block size; the default is
       0.
  "eof"       is the address where to go at end of file; default is 0;
       must be
       supplied for an input file.
  "eof"       is the address where to go in case of an error while
       attempting to handle the file; default is the same as for
       EODAD.
  "record"    is the address of a field where data will be read into
       or written from; default is no such field: record area will be
       specified in GET, PUT, READ or WRITE macros.

DISPLAY  fieldname

  Display text contained in fieldname on console.  Text must be in
  ASCII with ending line feed X'0A'.


FREEMAIN R,LV=length,A=address
  E,LV=length,A=address
  V,A=values

  Release dynamically allocated memory.
  Use only one of the three possible formats.

  If R or E (register or elementary format) is coded as the first
  parameter, both LV and A are mandatory. "length" is either the
  number of bytes to be released or a register in brackets containing
  the number of bytes to be released.  "address" is either the name of
  a full word or a register in brackets containing the address of the
  memory area to be released.

  If V (variable format) is coded as the first parameter, only A is
  mandatory. "values" must be the name of two consecutive full words
  that must respectively contain the address and the size of the
  memory area to be released.


GET  dcb,record

  Read next sequential fixed, variable, or text record from buffered
  file.  The first parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.
  The second parameter is optional and may be either the name of a
  field or a register in brackets pointing to a field into which the
  record will be read.  If the second parameter is omitted, the area
  pointed to by the RECORD parameter in the DCB will be used and its
  address will be passed in register 1.


GETMAIN  RU,LV=length
  EU,LV=length,A=fieldname
  VU,LA=sizes,A=values

  Dynamically allocate memory.
  Use only one of the three possible formats.

  If RU (unconditional register request) is coded as the first
  parameter, LV is mandatory and "length" is either the number of
  bytes requested or a register in brackets containing the number of
  bytes requested.  The address of the allocated memory will be
  returned in register 1.

  If EU (unconditional elementary request) is coded as the first
  parameter, both LV and A are mandatory. "length" is either the
  number of bytes requested or a register in brackets containing the
  number of bytes requested.   "fieldname" must be the name of a full
  word into which the address of the allocated memory will be
  returned.

  If VU (unconditional variable request) is coded as the first
  parameter, both LA and A are mandatory. "sizes" must be the name of
  two consecutive full words that must respectively contain the
  minimum and the maximum number of bytes requested.   "values" must
  be the name of two consecutive full words that will respectively be
  used to receive the address and the size of the allocated memory.


LINK  EP=filename
  EP='literal'
  EPLOC=fieldname
  EPLOC=(register)

  Dynamically load a module, branch and link to it, and then release
  memory.  Module's entry point is assumed to be at X'210'.
  Use only one of the four forms for parameters.  "filename" is one to
  eight characters only: the default drive and the extension of COM
  are assumed.  "literal', or "fieldname", or field pointed to by
  "register", must contain an EBCDIC character string representing a
  valid DOS file specification.


LOAD  EP=filename
  EP='literal'
  EPLOC=fieldname
  EPLOC=(register)

  Dynamically load a module (can be any file type). Register 15 will
  contain the address where the module was loaded and register 1 will
  contain the module's length.  Register 0 will contain the module's
  entry point assumed to be at X'210' from the beginning (only
  applicable if loading a COM module generated by PC370).
  Use only one of the four forms for parameters.  "filename" is one to
  eight characters only: the default drive and the extension of COM
  are assumed.  "literal', or "fieldname", or field pointed to by
  "register", must contain an EBCDIC character string representing a
  valid DOS file specification.


OPEN  dcb

  Open a file.  The parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.


PUT  dcb,record

  Write next sequential fixed, variable, or text record to buffered
  file.  The first parameter is mandatory and must be either the name
  of a DCB, or a register in brackets pointing to a DCB.
  The second parameter is optional and may be either the name of a
  field or a register in brackets pointing to a field from which the
  record will be written.  If the second parameter is omitted, the
  area pointed to by the RECORD parameter in the DCB will be used.


READ  dcb,record,{rbn | RBN=rbn | RBA=rba}

  Read a block from a file.  The first parameter is mandatory and must
  be either the name of a DCB, or a register in brackets pointing to a
  DCB.  The second parameter is optional and may be either the name of
  a field or a register in brackets pointing to a field into which the
  record will be read.  If the second parameter is skipped (by coding
  two consecutive commas), the area pointed to by the RECORD parameter
  in the DCB will be used and its address will be passed in register
  1.  The third parameter is mandatory and may be either positional or
  the keyword RBN or RBA.  The value may be either a number, or the
  name of a full-word containing the number, or a register in brackets
  containing the number.  "rbn" is the relative block number of the
  record (first block is 0).  "rba" is the relative byte address of
  the record (first byte is 0).


REGS

  Generate R0 through R15 register equates.

RETURN  RC=nnnn,SAVE={YES|NO}

  Exit using standard linkage conventions. Parameters are optional;
  default is SAVE=YES.  If RC is specified, return code nnnn is placed
  in register 15; otherwise, register 15 is restored like all other
  registers.  Specify SAVE=NO if SAVE=NO was specified in the BEGIN
  macro.


WRITE  dcb,record,{rbn | RBN=rbn | RBA=rba}

  Write a block to a file.  The first parameter is mandatory and must
  be either the name of a DCB, or a register in brackets pointing to a
  DCB.  The second parameter is optional and may be either the name of
  a field or a register in brackets pointing to a field from which the
  record will be written.  If the second parameter is skipped (by
  coding two consecutive commas), the area pointed to by the RECORD
  parameter in the DCB will be used.  The third parameter is mandatory
  and may be either positional or the keyword RBN or RBA.  The value
  may be either a number, or the name of a full-word containing the
  number, or a register in brackets containing the number.  "rbn" is
  the relative block number of the record (first block is 0).  "rba"
  is the relative byte address of the record (first byte is 0).


WTO  message,length

  Display a message to the console.  The first parameter is mandatory
  and must be either a literal in quotes or   the name of a field
  containing the message to be displayed, in EBCDIC.  The second
  parameter is optional and applies only if the first parameter is a
  field name. It is used to indicate the number of characters to be
  displayed if this number is other than the field's length.


WTOR  message,reply

  Display a message to the console and wait for reply.  The first
  parameter is optional and may be either a literal in quotes or
  the name of a field containing the message to be displayed, in
  EBCDIC.  The first parameter may be skipped (by coding WTOR  ,reply)
  if no message need be displayed and only a reply is to be
  solicited.  The second parameter is mandatory and must be the name
  of a field into which the reply will be placed, in EBCDIC and padded
  with blanks if necessary.  Operator needs not issue a carriage
  return when reply field is full.


WTORPC  message,reply

  Display a message to the console and wait for reply.  Exactly the
  same coding as for WTOR above, except that it is achieved using
  typical PC features and that the reply's maximum length is 16
  characters.  When entering the reply, the backspace and left-arrow
  can be used to correct typing errors.  Moreover, if the same WTORPC
  is executed again, the right-arrow as well as the F1-F3 keys can be
  used to repeat characters from the previous reply.  The carriage
  return must always be issued to transmit the reply.


      ***********************************

Feel free to develop your own macros in addition to those supplied
with the system.  If you would like to make other users benefit from
general-purpose macros you have written, please send your macro
definitions, documentation and example of use to:

   Jacques Roy
   XL SOFTWARE INC.
   1000 St-Jean-Baptiste #120
   Quebec City  CANADA  G2E 5G5
```
{% endraw %}

## PTF.DOC

{% raw %}
```
PTF.DOC private temporary fixes for PC/370

It is a violation of copyright to duplicate and distribute modified
versions of PC/370.  However, users are free to apply PTF's for their
own use on their own systems.  The following PTF's may be useful:

  1.  Change R1.2 A370.COM lines per page from 50 to some other value.

      a.  Backup A370.COM to separate disk.
      b.  Rename A370.COM TO A370.TMP
      c.  VER 0A39 C606F80332  MOV BYTE PTR [03F8],32H
      d.  VER 0A3D 32
      e.  REP 0A3D xx
      f.  Save modified file and rename.

  2.  Change R2.0A A370.EXE lines per page from 50 to some other
      value.

      a.  Backup A370.EXE to separate disk.
      b.  Rename A370.EXE TO A370.TMP
      c.  VER 0920 C6064E0532  MOV BYTE PTR [054E],32H
      d.  VER 0924 32
      e.  REP 0924 xx
      f.  Save modified file and rename.

  3.  Change R3.0 path and/or filename of E370R20.EXE generated in
      each 370 COM module by L370.EXE.  For example changing name to
      C:\E370R20.EXE allows one copy of emulator to be stored in
      root directory of hard drive.

      a.  Backup L370.EXE to separate disk.
      b.  Rename L370.EXE to L370.TMP to make debug process it as data
          file.
      c.  Start DEBUG L370.TMP
      d.  Use ENTER debug command to change 64 byte path/filename at
          offset X'342'.  Name must be followed with zero byte.
      e.  Enter W command to output modified file.
      f.  Rename L370.TMP to L370.EXE.

      Note name can also be changed in individual 370 COM module at
      X'140' if for wish to have only selected COM programs use a
      different emulator.

  4.  Note ASCII translation table has been expanded to 256 bytes in
      release 3.0 to allow special characters to be added for ASCII to
      EBCDIC and EBCDIC to ASCII translation.   This facility has been
      requested by both French and German users who have extended
      character sets.

      MODULE  TABLE   ADDRESS  EXAMPLES

      A370    EBCDIC   85D0    +X'40'=X'20' FOR EBCDIC SPACE TO ASCII
                               SPACE
      A370    ASCII    86F0    +X'20'=X'40' FOR ASCII SPACE TO EBCDIC
                               SPACE
      E370R30 EBCDIC   7AB0
      E370R30 ASCII    7C50

  5.  PTF for release 2.0A to fix blank errors in L370 due to module
      in concatenated library ending on 128 block boundary.  Low
      frequency bug in PC/370 since 1985 identified thanks to Jim Gray
      of CONVAL Software. Erroneous call was added in 1983 CP/M
      version to skip CTL-Z added to each concatenated module.

      RENAME L370.EXE L370.TMP
      DEBUG  L370.TMP
      -S 0000 FFFF 4C 54 46 E8 B9 00   (VER 2CD1 'LTF', CALL GBYTE)
      -E 2CD4 90 90 90                 (REP 2CD4 NOP,NOP,NOP - NOP
      CALL)
      -W
      RENAME L370.TMP L370.EXE

  6.  PTF for release 4.0 to prevent erroneous FQE from overlaying 8
      bytes beyond end of BIN subroutine module.  Result is
      unpredictable errors after exiting PC/370 BIN subroutine back to
      COBOL run time system.

      RENAME E370R40.EXE E370R40.TMP
      DEBUG  E370R40.TMP
      -E 55D 26.EB 89.05
      -E 56B 26.EB 88.0E
      -W
      -Q
      RENAME E370R40.TMP E370R40.EXE

  7.  PTF for release 4.2 to change resident emulator interrupt # in
      case it conflicts with interrupts installed.  Note Micro Focus
      extended memory facility XM requires that PC/370 interrupt be
      within the range hex 60-6F.  The installation default in rel.
      4.2 is hex 60 (in rel. 4.1 without XM support is was hex DC).
      To change the interrupt to 61 for example:

      a.  RENAME E370R42.EXE E370R42.TXT   change emulator
          DEBUG  E370R42.TXT
          -E 46F 60.61
          -W
          -Q
          RENAME E370R42.TXT E370R42.EXE

      b.  RENAME L370.EXE L370.TXT         change linker for COM
          DEBUG  L370.TXT                  output
          -E 307 60.61
          -W
          -Q
          RENAME L370.TXT L370.EXE

      c.  RENAME SEE.COM                   change existing COM module
          -E 107 60.61                     (after fixing L370, you can
          -W                                run BAT\BLDUTIL to fix all
          -Q                                utilities)
```
{% endraw %}

## SYSTEM.DOC

{% raw %}
```
SYSTEM.DOC PC/370 release 4.1 system services documentation

Chapter table of contents:

  1.  Introduction
  2.  File input and output services
  3.  Program load and execution services
  4.  SVC documentation in SVC # order
  4.  Floating point system documentation

*********

Chapter 1.  Introduction

*********

The PC/370 system supports a number of supervisor services through
the standard 370 SVC interface.  In supervisor state, each SVC invokes
pseudo microcode which performs the function requested at native
processor speed.  In problem state each SVC causes a standard SVC
interrupt storing the current PSW at location X'20' and loading the
new PSW from location X'60'.  Supervisor call routines can be user
written to map any SVC into any desired function in problem state.

In supervisor state, svc's 1-7 provide a set of input and output
facilities using MS-DOS file handle I/O and an extended data control
block defined by the user which allows access to sequential and random
files.  Svc's 10-11 provide virtual memory dynamic management.  In
addition to the other misc. functions provided, svc 34 provides a
general purpose interrupt interface which can be used to map PC/370
area into PC registers and issue any MS-DOS function call or BIOS
interrupt.  Svc's 128-191 map into BIOS interrupts using simple
register to register mapping.  Svc's 200-241 map into MS-DOS function
calls 0-41 using simple register to register mapping.  Note function
calls above 41 can be issued using svc 34 interface which is the
preferred method for future releases.

*********

Chapter 2.  File input and output services

*********

The PC/370 supervisor calls to the I/O supervisor all require register
2 to point to the DCB.  The SVC's are as follows:

 SVC  FUNCTION  OPTIONS

   1  OPEN
   2  CLOSE
   3  READ      register 1 must be address of block or zero
   4  WRITE     register 1 must be address of block or zero
   5  GET       register 1 must be address of area or zero
   6  PUT       register 1 must be address of area or zero
   7  DELETE
   8  SEARCH
  23  RENAME

The PC/370 system supports sequential and random access to
files using MS-DOS file handle I/O with directory pathing.
To access a file, a data control block (DCB) must be defined
in the program with fields defined as shown in the dummy
section (DSECT) called IHADCB found in CPY\IHADCB.CPY and
demonstrated in UTIL\PRINTDOC.ALC.   All fields must be defined
prior to open and cannot be changed while the file is open
with the exception of RCD, BUF, and RBA as described below.

An explanation of each field in the DCB follows:

  1.  DCBDCB - DCB identifier consisting of the four EBCDIC
               characters ADCB.  These characters are
               verified each time an I/O routine is called
               with the address of the DCB in register 2.
               An attempt is made to exit to the synchronous
               error exit address if there is no match.

  2.  DCBDSN - address of up to 64 character EBCDIC path and
               file name followed by a zero byte.  This field
               is automatically translated to ASCII as
               required.

  3.  DCBFID - MS-DOS assigned file handle at open time.
               This field must be initialized to high values
               or open routine will assume file is already
               open and take SYNAD exit.

  4.  DCBFLG - file condition flags used by I/O routines.
               This field must be initialized to zero except
               user defined buffer bit DFUBUF and user
               requested ASCII file conversion bit DFTRAN may
               be turned on.  No other bits may be modified
               by user.  If the DFTRAN (X'08') bit is set, input
               records are translated to EBCDIC in the record area.
               Output records are translated to ASCII in the record
               area, written, and then translated back to EBCDIC.
               The entire LRECL area is translated.  For text mode,
               each record must end with EBCDIC line feed.

  5.  DSORG  - data set organization EBCDIC code:

                 S for sequential
                 R for random file access.

  6.  MACRF  - data set access EBCDIC code:

                 R for read block with length of BLKSZ
                 W for write block with length of BLKSZ
                 (note PRECL can override BLKSZ on write)
                 G for get logical record into RCD area
                 P for put logical record form RCD area

  7.  RECFM  - data set record format EBCDIC code:

                 F - fixed length records with length LRECL
                     for get/put sequential access or length
                     BLKSZ for read/write random or
                     sequential access.
                 V - variable length records with length
                     stored in first 2 bytes (valid lengths
                     range from 3 to 64k).  Maximum length
                     allowed for a file is LRECL and only
                     sequential get/put modes supported.
                 T - text records ending with end of record
                     code (EOR usually X'0A' line feed).
                     Maximum length allowed for a file is
                     LRECL and only sequential get/put modes
                     supported.

  8.  EOR    - end of record code for text (default NL X'0A')

  9.  EOF    - end of file code for text (default X'1A')

 10.  LRECL  - length of logical record. Maximum is 64K less 17 bytes.
               Minimum is 3 for RECFM=V, 2 for RECFM=T or 1 for
               RECFM=F.

 11.  BLKSZ  - length of block.  Maximum is 64K less 17 bytes
               and minimum is 3.  If zero is specified, a
               default block of 8k will be dynamically
               allocated and deallocated at open and close
               respectively.  BLKSZ should be specified for
               read/write access.  For sequential access,
               larger block size reduces contention between
               multiple files by reading or writing entire
               blocks at one time rather than for each
               record.  If insufficient memory is available,
               the maximum available will be allocated.

 12.  EODAD  - end of file exit address. This cannot be changed
               while file is open.

 13.  SYNAD  - synchronous error exit.  This cannot be changed while
               file is open.  If register 2 does not point to a valid
               DCBDCB ID field not exit is taken and interactive debug
               is invoked.  If exit is taken, register 0 contains
               error code and register 1 contains function code which
               can be used by to produce error message by calling
               subroutine LIB\SYNERROR.ALC which is in the default
               system relocatable library L370.LIB.

 14.  RCD    - record area address for get/put only.  This
               address may be changed on each get or put by
               placing new address in register 1.  If register 1
               contains zero, then current DCB area will be used.

 15.  BLK    - block area address used for direct I/O via MS-
               DOS.  If DFUBUF is not set at open, this area
               is dynamically allocated and deallocated using
               BLKSZ or default for length.  If DFUBUF is set, then
               new block address can be set for each read or write
               by placing new address in register 1.  If register 1
               contains zero, then current DCB block will be used.

 16.  RBA   -  relative byte address for random access
               read/write.  First byte of file is zero.  This field
               must be reset for each random read or write.

 17.  REN   -  address of file rename followed by zero.
               Only used by RENAME SVC.  Both DCBDSN and REN must be
               initialized in a closed DCB prior to RENAME SVC 23.

 18.  IOCNT -  physical I/O count since open.  Larger
               BLKSZ will reduce physical I/O count for
               sequential file access.

 19.  PRECL -  physical record length on last read or
               write.  This field is initialized to zero
               at open.  On write, BLKSZ will be calculated
               if this field is zero, else this field will
               override length allowing short blocks to be
               written.  This is useful in processing files
               of unknown length with fixed block logic.
               The last block read may be short, and the
               corresponding last block written may be short.

Do not modify the reserved areas which are only used by
PC/370 IOS while file is open.  See UTIL\PRINTDOC.ALC for
example of file access method.

*********

Chapter 3.  Program load and execution services

*********

    SVC  FUNCTION  OPTIONS

     15  USEREXIT  Transfer control to native code user exit at
                   relative address in reg 15 via far call

     25  LOAD      Reg 1 points to ASCIIZ path/filename
                   on return, reg 0 has file address, reg 1 has length

     26  ATTACH    Reg 0 must have file address of COM file and
                   reg 1 must have desired length of attached addr.
                   space

     27  DETACH    If in attached address space, exit to next
                   instruction after attach in mother address space
                   else exit to MS-DOS

     36  RELOAD    Reload file int memory at location in reg 0.
                   Reg 1 must have file address and reg 15 must have
                   maximum length of file allowed to be loaded into
                   preallocated area.

The PC/370 system includes support for dynamic loading and execution
of 370 modules assembled and linked by A370.EXE and L370.EXE.
Any file including COM and MOD type files can be loaded into free
memory by use of the LOAD SVC 25.  The only argument required is
the address of the path and file name in register 1.  The file name
must end with a suffix of the form .XXX or a zero byte.  The largest
free memory area will be allocated and the file loaded into it.
Register 0 will be set to the address of the area, and register 1 will
be set to the length of the file.  The unused portion of the allocated
area will be freed.  If the load operation was successful, register 15
will be set to zero, else it will be set to 1.  Demo test program
DEMOSVC.ALC illustrates the use of the load function to load an 8086
assembly language subroutine and execute it via user exit SVC 15.

Any 370 COM file created by L370.EXE and loaded via the load SVC 25
above, can be executed it its own address space via the attach SVC 26.
Register 0 must be set to point to the COM file (set by load SVC 25)
and register 1 must be set to address space size (minimum set by load
SVC 25),  If additional space is to be included in the attached
address space for dynamic use via GETMAIN/FREEMAIN SVC's 10/11, then
the area to be added must be allocated in the mother address space
prior to issuing attach SVC 26 and the total length of the COM file
plus the allocated free space placed in register 1.  A COM file can be
executed multiple times via attach by reloading registers 0 and 1 and
reissuing SVC 26.  On second and following calls, the same address
space control block built on the first call in the COM prefix area
is reused (See CPY\IHASCB.CPY for layout) since it overlays original
COM prefix data.

Execution of the attached address space can be terminated via a detach
SVC 27 which restores the mother address space and continues execution
at the next instruction following the attach SVC 26.  The only other
way to terminate the attached address space normally is to issue an
exit SVC 0 which exits directly to MS-DOS.  A detach SVC 27 in an
address space which has no mother, will cause exit to MS-DOS.

An alternative to using attach/detach to execute dynamically loaded
370 code is to use simple branch and link.  For 370 code linked into
COM file, the 370 code starts X'210' from the beginning of the COM
file.  For code linked into MOD type file by L370.EXE using option M,
the 370 code starts immediately at the beginning of the file (i.e. the
file load address returned in register 0 by load SVC 25).

For example of each type program loading and execution, see
DEMO\MVS.ALC and DEMO\DEMOPSW.ALC demo programs.

The virtual address space established for the execution of COM files
created by L370.EXE has the following memory layout.  For a sample
DSECT of the address space control block, see CPY\IHASCB.CPY.

 000 INITIAL PROGRAM LOAD PSW
 008 INITIAL PROGRAM LOAD CCW1
 010 INITIAL PROGRAM LOAD CCW2
 018 EXTERNAL OLD PSW
 020 SUPERVISOR CALL OLD PSW
 028 PROGRAM OLD PSW
 030 MACHINE CHECK OLD PSW
 038 INPUT/OUTPUT OLD PSW
 040 CHANNEL STATUS WORD
 048 CHANNEL ADDRESS WORD
 050 INTERVAL TIMER
 058 EXTERNAL NEW PSW
 060 SUPERVISOR CALL NEW PSW
 068 PROGRAM NEW PSW
 070 MACHINE CHECK NEW PSW
 078 INPUT/OUTPUT NEW PSW
 080 MVS PARM AREA POINTED TO BY REGISTER 1 AT ENTRY (A,H,EBCDIC TEXT)
 100 SVC ATTACH INSTRUCTION
 102 SVC DETACH INSTRUCTION POINTED TO BY REG 14 AT ENTRY
 104 ADDRESS SPACE CONTROL BLOCK ASCB FOR CURRENT COM PROGRAM
 124 RESERVED
 138 SAVE AREA POINTED TO BY REG 13 AT ENTRY
 180 PC/370 PACKAGE IDENTIFICATION RECORD
 200 BEGINNING OF 370 CODE AND DEFAULT ENTRY POINTED TO BY REG 15
     AT ENTRY IF NO OTHER ENTRY POINT SPECIFIED ON ALC END STATEMENT.

*********

Chapter 4.  All PC/370 supervisor services in SVC order

*********

    SVC  FUNCTION        REGISTERS input/output

      0  exit to MS-DOS  none
      1  open file       reg 2 = DCB address (see I/O section
                         documentation)
      2  close file      reg 2 = DCB address
      3  read block      reg 2 = DCB, reg 1 must be address of block
                         or zero
      4  write block     reg 2 = DCB, reg 1 must be address of block
                         or zero
      5  get record      reg 2 = DCB, reg 1 must be address of area or
                         zero
      6  put record      reg 2 = DCB, reg 1 must be address of area or
                         zero
      7  delete file     reg 2 = DCB address
      8  search file     reg 2 = DCB address
                         /reg 0 = return code 0 if found
      9  program trace   3 character trace ID follows SVC
     10  get memory      reg 1 = length
                         /reg 2 = address, reg 0 = 0 if ok
                         if reg 0 > 0, then reg 1 = maximum memory
                         available
     11  free memory     reg 1 = length and reg 2 = address
                         /reg 0 = 0 if ok
     12  ASCII to EBCDIC reg 1 = address and reg 2 = length
     13  EBCDIC to ASCII reg 1 = address and reg 2 = length
     14  set SPIE        if reg 1 = 0, remove SPIE else set SPIE exit
                         to reg 1
                         at SPIE entry, reg 0 contains instruction
                         length in high 16 bits, interruption code in
                         low 16 bits, reg 1 contains interruption
                         address, and reg 2 contains program
                         interruption element block (see
                         CPY\IHAPIE.CPY).
     15  user exit       reg 15 = entry point to COM 80x86 code via
                         far call
     16  instr. count    /reg 1 = current 370 instruction count
     17  load user exit  reg 1 = ASCIIZ path/file name
                         /reg 0=addr.reg 1=len.
     18  time of date    /reg 0 = hour, minute, second, 100th second,
                         reg 1 = year, reg 2 = day, month, day of week
     19  allocate memory reg 1 = address of MS-DOS real block, reg 2 =
                         length
                         /if reg 0 not zero, then reg 2 = max.
                         available
     20  deallocate mem. reg 1 = address of MS-DOS real block
     21  input byte      reg 1 = device address, reg 0 = byte
     22  output byte     reg 1 = device, reg 0 = byte
     23  rename file     reg 2 = DCB address
     24  display line    reg 1 = attributes, reg 2 = address, reg 15 =
                         row/col
     25  load file       reg 1 = path/filename
                         /reg 0 = address, reg 1 = length
     26  attach program  reg 0 = COM file address, reg 1 = address
                         space length
     27  detach program  none (return to instruction after attach)
     28  svc 209 EBCDIC  set EBCDIC to ASCII trans. for WTO svc 209
                         (default)
     29  svc 209 ASCII   turn off EBCDIC to ASCII translation
     30  svc 209 CR      turn on carriage return and line feed
                         (default)
     31  svc 209 no CR   turn off carriage return and line feed
     32  VA to SEG:OFF   convert virtual address in R1 to
                         segment:offset in R0
     33  SEG:OFF to VA   convert segment:offset in R0 to virtual
                         address in R1
     34  interrupt       general purpose interrupt facility which
                         supports all MS-DOS and BIOS interrupts using
                         PC register vector table pointed to by R1
                         must be defined as follows (see
                         CPY\IHAPCB.CPY):

                            0  PCVT DC C'PCVT'  ID REQUIRED BY SVC 34
                            4  PCIN DS H        INTERRUPT # (0-255)
                            6  PCPF DS H        PF FLAGS REGISTER
                            8  PCAX DS H        AX
                           10  PCBX DS H        BX
                           12  PCCX DS H        CX
                           14  PCDX DS H        DX
                           16  PCDS DS H        DS
                           18  PCSI DS H        SI
                           20  PCES DS H        ES
                           22  PCDI DS H        DI

                         PC registers are loaded from PCVT for
                         interrupt. PC register results are also
                         stored in PCVT area immediately after
                         interrupt.  Note segment:offset addresses
                         such as DS:DX, DS:SI, or ES:DI required
                         by interrupts can be calculated via SVC 32.
                         Likewise returned segment:offset results can
                         be translated back to PC/370 virtual
                         addresses via SVC 33.  This is a very
                         powerful and therefore dangerous instruction.
                         SVC's 128-191 and SVC's 200-241 should be
                         used in place of this more general SVC when
                         possible since they are a little faster (they
                         don't load and store all PC registers and
                         don't require PCVT setup).  They are also
                         much safer since an error in PCVT setup could
                         invoke wrong interrupt or pass bad registers
                         to any function including reboot interrupt,
                         write to disk, etc SVC 34 does verify PCVT
                         identifier and range of PCIN within 0-255.
                         If verify fails, program interruption
                         19 occurs.  If carry bit is set by interrupt,
                         condition code 3 is set, else condition code
                         0 is set.

     35  80x87 assist    Scientific subroutine function assist via
                         80x87. Register 1 contains function # and
                         values are passed via floating point
                         registers.  See chapter on floating
                         point for more information.

     36  RELOAD          Load file into memory at address in reg 0.
                         Reg 1 must have file address and reg 15 must
                         have maximum file length allowed to be loaded
                         in preallocated area.

     37  SVCTRAP         Define svc trap table via register 1 which
                         contains address of user exit routine to be
                         used with each svc.  If register 1 is zero
                         current svc trap table is cancelled.  After
                         table is defined, each svc call functions as
                         follows:

                           1.  If table+4*(svc #) contains zero,
                               execute real PC/370 svc normally.
                           2.  If svc trap active mode is set,
                               execute real PC/370 svc normally.
                           3.  If table+4*(svc #) is not zero,
                               store current psw at old svc psw x'20',
                               set trap active mode, and branch to
                               trap exit address in table entry.

                         LPSW instruction will always reset trap
                         active mode, and normal exit from trap
                         is via LPSW OLDSVC.  All svc calls within
                         trap routine including the svc which
                         invoked trap will process as real svcs
                         normally without storing psw.  See DEMO\
                         DEMOTRAP.ALC program for examples.

    128 - 191 issue BIOS interrupt number = svc # - X'80' with PC
              registers mapped as follows before and after interrupt:

        AX - low bytes of register 0
        BX - low bytes of register 1
        CX - low bytes of register 14
        DX - low bytes of register 15

        If carry set by call, then CC =3 else CC = 0.
        8086 flags returned in high bytes of R0.

    200 - 241 issue interrupt 21H with PC registers mapped as follows:

        For all svc's 200-241:

          AH - MS-DOS function call number = svc number -200
          AL - low byte  of register 0
          BX - low bytes of register 1

        for svc # 201-208, 211, 213, 214, and 225:

          DL - low byte register 2

        for svc 209, 210, 212, and 215-241:

          DS:DS - segment:offset from virtual address in register 2
          CX    - returned in register 14
          DX    - returned in register 15

          One of the most frequently used SVC's is 209 (write to
          operator).  For example, to print message on standard output
          device via MS-DOS function call 9, the following 2 PC/370
          instructions can be used:

           LA  R2,=C'THIS IS A DEMO WTO MESSAGE$'
           SVC 209

          The above example will print message on console and issue
          carriage return and line feed following message ending with
          $.  To turn off automatic carriage return and line feed,
          issue SVC 31 prior to SVC 209.  To eliminate overhead of
          converting from default EBCDIC strings to ASCII for 209,
          issue SVC 29 prior to SVC 209 and use PC/370 assembler
          extension for ASCII strings in double quotes.  For
          example, this is the most efficient method of issuing
          messages:

            SVC 29  TURN OFF EBCDIC TO ASCII CONVERSION FOR 209
             .
             .
            LA  R2,=C"THIS IS A DEMO WTO MESSAGE$"
            SVC 209

*********

Chapter 5.  Floating Point System Documentation

*********

 A.  Introduction

     PC/370 release 4.0 contains support for the entire 370 floating
     point instruction set using the Intel 80x87 co-processor.  If the
     co-processor is not installed, all floating point instructions
     cause operation exceptions as they would on a 370 without the
     floating point option.  There is a new option in the L370 linkage
     editor (option P) which can be used to force turning off floating
     point option even when co-processor is installed.  Default is to
     support floating point if it is installed and 370 module has been
     linked using release 3.0+ linkage editor.  In addition to the
     standard floating point instructions, two additional levels of
     support have been added.  Section F describes a set of SVC's
     which invoke extended microcode functions on the 80x87 chip such
     as square root, logs, etc.  These SVC's are fast but most require
     special scaling of arguments.  DOC\USER.DOC describes a set of
     scientific subroutines written in ALC which can be called to
     efficiently calculate functions over extended range of real
     numbers.

 B.  Data formats

     The Intel 80x87 actually only supports one IEEE floating point
     format which has 64 bit mantissa and exponent range of 10**4932
     which exceeds both the 370 short and long (double precision)
     formats of 24 and 56 bit mantissa's.  Therefore, both the short
     and long operations are done with extra precision.  The 370
     extended format instructions are all supported but the precision
     actually available is only 64 bits versus the 112 on a 370.  When
     short and long numbers are loaded into the 80x87, they are padded
     with zeros to the 64 bit length required.  When an extended
     number is loaded into the 80x87, the last 8 bits are obtained
     from the second register in the specified extended register pair.
     The PC/370 cross assembler now supports E, D, and L data formats
     when the 80x87 is installed.

 C.  Data exceptions

     The standard 370 exponent overflow, exponent underflow, and
     floating point divide exceptions are all supported.  The program
     mask can be set to control whether program exception is allowed.
     One deviation from standard 370 convention, is to return the
     maximum floating point number with correct sign when overflow
     occurs instead of an invalid number.  This is consistent with
     IEEE standard.

 D.  Floating point instructions

     1.  Note that all operations are normalized using 80x87 and that
         the 370 unnormalized function identical to normalized
         instructions.

     2.  Compare short and long include all 64 bits in comparison.  To
         round number to specific number of bits in short or long
         format, use the LRER or LRDR instruction prior to compare.

 E.  Interactive debug facilities for floating point

     1.  When floating point support is active (i.e. option P is on
         and the 80x87 co-processor is installed), the R command will
         display third line with floating point register contents in
         hex.  Note that the actual floating point register areas in
         memory are stored in 80x87 temporary real format to allow
         register to register instructions to execute faster since no
         conversion from or to 370 format is required.

 F.  Extended 80x87 microcoded arithmetic functions

     The following extended arithmetic floating point functions are
     supported via SVC 35 with the function number in register 1.
     Arguments and results are in the floating point registers F0 and
     F2.

     #   Formula:                Notes:

     1.  F0 = LOG10(2)           constant
     2.  F0 = LOGE(2)            constant
     3.  F0 = LOG2(E)            constant
     4.  F0 = LOG2(10)           constant
     5.  F0 = PI                 constant 3.14159....
     6.  F0 = ARCTAN(F2/F0)      0 <= F2 <= F0 < IFI (infinity)
     7.  F2/F0 = TAN(F0)         0 <= F0 <= PI/4 (sets F0 and F2)
     8.  F0 = SQRT(F0)           0 <= F0 < IFI
     9.  F0 = F2 * LOG2(F0)      0 < F0 < IFI, -IFI < F2 < IFI
    10.  F0 = F2 * LOG2(F0+1)    0 <= F0 < (1-(SQRT(2)/2)), _IFI < F2
                                 < IFI
    11.  F0 = 2**F0              -IFI < F0 < IFI (note 1)
    12.  F0 = R0                 convert to real
    13.  R0 = F0                 convert to integer
    14.  F0 = MOD(F0/F2)         return fraction of F0 mod F2 in F0
                                 (note 2)
    15.  F0 = SIN(F0)            argument may be any real radian value
                                 (note 3)
    16.  F0 = COS(F0)            argument may be any real radian value
                                 (note 3)
    17.  F0 = TAN(F0)            argument may be any real radian value
                                 (note 3)

   Notes:

     1.  This function uses equivalence expression to derive 2**F0 for
         all values of F0 rather than just the 0.0-0.5 range supported
         via the F2XM1 80x87 instruction.

     2.  Note this uses FPREM 80x87 instruction repeatedly to
         calculate exact remainder via successive subtraction.

     3.  Note 15-17 perform scaling of argument via FPREM 80x87
         instruction and use FPTAN 80x87 instruction to derive
         tangent, sine and cosine.

   Register 15 is set to one of the following values at exit from svc:

    hex

     00 - no errors detected
     80 - 80x87 not operational
     40 - invalid function number in register 1
     20 - 80x87 precision error (inexact result such as 1/3 etc.)
     10 - 80x87 underflow error (zero returned)
     08 - 80x87 overflow  error (max 370 value returned)
     04 - 80x87 zero divide     (max 370 value returned)
     02 - 80x87 denormalized operand error (should not occur)
     01 - 80x87 invalid operation error    (should not occur)
```
{% endraw %}

## USER.DOC

{% raw %}
```
 
USER.DOC PC/370 User Documentation

Copyright 1987 Donald S. Higgins

Don Higgins
6365 - 32 Avenue North
St. Petersburg, Florida 33710

E-mail CompuServe 73047,1113

PC/370 users:

This is the user documentation for the PC/370 cross assembler,
linkage editor, and emulator for 370 assembly language users.
The PC/370 package provides the capability to assemble, link,
and execute IBM 370 assembler programs on any 80x86 MSDOS 2.0+ micro
computer such as the IBM PC, XT, AT, PS/2, Compaq, etc.

Chapter table of contents:

 1. M370.COM macro preprocessor

 2. A370.EXE cross 370 assembler

 3. L370.EXE cross 370 linkage editor

 4. E370R42.EXE run time 370 emulator

 5. Technical hardware and software specifications

 6. ASSIST extended instructions for student use

 7. DEBUG interactive debugging facility

 8. Floating point instructions and scientific subroutines

 9. XA extended architecture instructions

10. System subroutine library

11. COBOL call interface

12. Reference publications

*********

Chapter 1.  M370.COM macro preprocessor

*********

The M370 macro preprocessor has the following command format:

A>M370 file

where file is the name of a source macro program file which has the
suffix (.MLC).  The source file must be in ASCII text format with
each line terminated by a line feed character.  The only output from
this program is a source basic assembler file with expanded macro
statements.  The suffix of the output file is (.ALC).

Any number of macros can be used by M370 input files and must be
defined in individual source macro files with the file name equal to
the macro name and a suffix of (.MAC).  These macros must be placed on
the default drive for access by M370.  For more speed, these files may
be moved to RAM disk.

*********

Chapter 2.  A370.EXE cross 370 assembler

*********

The A370 assembler has the following command format:

A>A370 file/options

where file is the name of a source program file which has the
suffix (.ALC).  The source file must be in ASCII text
format with each line terminated by a line feed character.
Any number of editors including SEE can be used to create ALC files.
An optional drive and path may be specified such as B:\dir\file.
The options which can be specified are as follows:

  A - alignment option. Default is on.
  C - object code option. Default is on.
  L - produce listing file (.PRN). Default is none.
  T - trace assembler execution. Default is off.
  X - produce symbol and literal cross reference. Default is none.

If an option is on by default, specifying it will turn it off.
For example:

A>A370 B:DEMOPNUM/LX

will read the source file B:DEMOPNUM.ALC and produce the object
code file B:DEMOPNUM.OBJ and the listing file B:DEMOPNUM.PRN.

The A370 assembler conforms to the OS/VS IBM 370 Assembly
Language as defined in the IBM manual GC33-4010 with the
following limitations:

  1.  No continuation lines.
  2.  Maximum control sections and dummy sections is 255.
  3.  Macros and system variable symbols are not supported (see M370).
  4.  OPSYN statement not supported.
  5.  EQU third operand (type attribute) not supported.
  6.  Scale, exponent, and bit length data modifiers not supported.

Extended features include the following:

  1.  Data constant types F and H may use arithmetic expressions.

  2.  Extended ASSIST instruction set including XREAD, XPRNT,
      XDECI, XDECO, AND XDUMP as defined in the book Assembler
      Language with ASSIST by Ross A. Overbeek.  Also 2 more
      instructions XFILI and XFILO are added to allow changing
      default ASSIST input and output files at execution time.

  3.  ASCII character strings may be defining by using double
      quotes instead of single quotes in DC and self defining
      character constants.

*********

Chapter 3.  L370.EXE cross 370 linage editor

*********

The L370 linkage editor has the following command format:

A>L370 file/options

where file is the name of an A370 object code file (.OBJ) and
may specify a specific drive.  The options supported by the
linkage editor are as follows:

  B - create VS COBOL callable subroutine file (type .BIN).
  D - set debug mode for emulator. Default is off.  When option D
      is on, interactive debug is entered at beginning of each
      COM or BIN file execution.
  G - load and execute with no file output. Default is off.
  I - turn off all interrupts from keyboard.
  L - list CSECT addresses and lengths. Default is off.
  M - create 370 code module without COM prefix code.
  O - dump input object code records in hex. Default is off.
  P - force floating point option off even if 80x87 installed.
  X - cross reference of external symbols. Default is off.
  U - allow unresolved external references

For example:

A>L370 B:DEMOPNUM/LX

will read the object code file B:DEMOPNUM.OBJ and produce the binary
command file B:DEMOPNUM.COM, and the listing and cross-reference file
B:DEMOPNUM.LST.  Note that since DEMOPNUM calls the external
subroutine PET, the subroutine library L370.LIB must be available.
The binary command file B:DEMOPNUM.COM may be directly executed by the
MSDOS command:

A>B:DEMOPNUM

When the above command is executed, the program will load at X'0200'
and the fetch routine linked with the program will load the
emulator E370.EXE in high memory and transfer control to it.

The linkage editor uses two concatenated subroutine library
files.  The first file is named file.LIB and may contain
any number of A370 subroutine object modules which are called by the
modules in file.obj.  This file is optional and only called modules
are included.  The second file is named L370.LIB and may contain any
number of A370 subroutine object modules which are commonly used by
multiple programs.  An L370.OBJ file is included with the PC/370
package and contains sample time and date routines.  The MS-DOS COPY
command with option /B may be used to concatenate A370 object modules
in either library file.  Note module references must be resolved in
one sequential pass of library so backward module references may cause
unresolved entry.

The linkage editor listing file (.LST) shows relative entry point
and segment lengths and optional cross reference by segment.  The
last line of the listing contains ENT/LNG which is the 370 relative
entry point of the module and the length of the entire module.

*********

Chapter 4.  E370R42.EXE run time 370 native machine code emulator

*********

The emulator is transparent to the user when using A370 and L370 to
create MSDOS command files.  The emulator is dynamically executed by
the 80x86 COM file prefix generated by L370.  The 370 machine code
starts at X'210' from the beginning of the COM file.  The origin of
the 370 virtual address space for a COM program starts at X'10' from
the beginning of the COM file.  The execution of the 370 machine code
will start at the specified relative start address plus hex 200 with
that absolute address in register 15.  Register 1 will point to
standard MVS parameter list address at location X'80' with EBCDIC text
passed from MS-DOS command line.  Register 13 will point to standard
save area in ASCB and register 14 points to return to detach
instruction in ASCB to exit to MS-DOS.  If a program check occurs, the
interactive debug facility will be invoked and will initially display
the general registers and the program status word at the time of the
interruption.  See DOC\SYSTEM.DOC SPIE supervisor call for facility to
handle program checks.  Also see MAC\MVS.MLC for example of how to run
programs in problem state with your own supervisor shell.

A new facility with PC/370 release 4 is the ability to make the
emulator resident by simply executing it directly.  The resident
emulator reserves about 50k for code and uses an 80x86 hardware
interrupt to transfer control when needed at execution time.  To
remove the current resident emulator, simply execute it directly
again.  Release 4.0 and 4.1 used interrupt hex DC.  Release 4.2 uses
hex 60 within the Micro Focus Extended Memory (XM) real interrupt
handler range of hex 60-6F.  See DOC\PTF.DOC for pathc to change
interrupt in case it conflicts with another user installed software
package.

With release 4.1 a new system queue area (SQA) memory option has been
added to define a memory which can be shared by all COBOL subroutines
and which is allocated in the resident emulator address space.  The
size of the SQA is specified by a single hex parm when making the
emulator resident.  The size is in hex paragraphs and the default is
10 or 256 bytes.  For example, the following command would make the
emulator resident with an 8k byte SQA:

  C>E370R42 200

With the SQA facility, COBOL assembler subroutines can issue standard
file I/O with dynamic buffers allocate from SQA. See BAT\RUNCBL.BAT
for demo.

With release 4.2, PC/370 supports Micro Focus COBOL/2 assembler
subroutine calles in normal MS-DOS mode or in extended memory XM mode.
In both cases the emulator must be resident before starting the COBOL
program via workbench or run time executive with or without XM.  In
XM mode, the emulator still runs in real mode after requesting XM to
mode the called subroutine code (BIN file) and the argument data
segments to base memory area for access in V=R real mode.  This
creates the XM restriction that there must be sufficient base memory
for called BIN file and data segment at the time of the call.  Also,
the emulator must not attempt to access memory beyond end of BIN or
data segments in real memory.  The emulator can use SQA in XM mode.
See BAT\RUNCBL.BAT for demo of XM mode subroutines (requires XM.EXE
and RUN.EXE from Micro Focus).

There are five distinctly different ways to execute the E370 emulator:

  1.  Direct execution to make it resident if not currently resident.

  2.  Direct execution again to remove current resident copy.  If
      another software package is using interrupt, an error message
      will display.  See DOC\PTF.DOC to change interrupt number.

  3.  Execution of a 370 COM module without E370 resident causes
      dynamic loading of E370 in high 64k of MS-DOS memory to support
      execution of 370 code in the COM module.

  4.  Execution of a 370 COM module with E370 module resident causes
      execution of resident copy via cross memory interrupt facility.

  5.  Execution of a 370 BIN module from within Micro Focus COBOL run
      time environment causes execution of resident copy via cross
      memory interrupt facility.  In XM mode, a protected interface
      routine in the emulator is called directly by the BIN module
      which in turn issues interrupt to execute emulator in real mode.


*********

Chapter 5. Technical specifications

*********

   1.  A370.EXE requires 256k memory to execute and can handle source
       programs with over 1000 labels.

   2.  L370.EXE requires 256k memory and can handle load modules up to
       50k bytes long.

   3.  E370R42.EXE requires 50k plus SQA which includes the emulator,
       and the extended SVC support functions, and interactive debug.
       A production only copy of the emulator named E370P42.EXE is
       included which only requires 40k but does not include
       interactive debug facility or the ASSIST extended instructions.
       This version saves resident base memory, but should only be
       used for fully tested programs or programs with their own
       program check handlers for error recovery.

   4.  E370R42 supports all the non-supervisor state IBM 370
       instructions as defined in the IBM/370 XA Principals
       of Operation manual SA22-7085 except the conditional
       swapping feature instructions.  Short, long, and extended
       floating point instructions are supported provided 80x87
       is installed.

   5.  The minimum configuration for PC/370 is as follows:
       a.  80x86 processor.  XM only supported on 80286/80386.
       b.  256k RAM memory which allows execution of 370 program in
           128k virtual address space.  Maximum virtual address space
           is about 512k on 640k machine.
       c.  1 floppy disk drive.
       d.  80x87 only required for floating point instructions.

   6.  A benchmark program consisting of calculating the first
       100 prime numbers was run in interpretive BASIC using
       16 bit integer arithmetic.  It took 67 seconds on a
       4.77 MHZ 8086 system.  The same program was rewritten in
       370 assembler using 32 bit fixed point arithmetic.  It
       took 25 seconds to execute on the same system.  This
       benchmark program is included as a demo called DEMOPNUM.ALC.

       The demo may be run with the following commands:

         A>A370 DEMO\DEMOPNUM/LX  (create DEMOPNUM.OBJ)
         A>L370 DEMO\DEMOPNUM/LX  (create DEMOPNUM.COM)
         A>DEMO\DEMOPNUM

   7.  The following error messages are supported:

       A370/L370

        E01 - DUPLICATE LABEL
        E02 - INVALID LABEL
        E03 - SYMBOL TABLE FULL
        E04 - INVALID OPERATION CODE
        E05 - UNDEFINED OPERATION CODE
        E06 - UNDEFINED LABEL
        E07 - INVALID OPERAND
        E08 - MEMORY FULL
        E09 - EXPRESSION INVALID
        E10 - SELF DEFINING TERM INVALID
        E11 - ARITHMETIC OVERFLOW IN EXPRESSION
        E12 - TOO MANY EXTERNAL SYMBOLS
        E13 - NO BASE REGISTER AVAILABLE
        E14 - LENGTH ERROR
        E15 - OPERAND ERROR
        E16 - DATA CONSTANT DUPLICATION FACTOR ERROR
        E17 - DATA CONSTANT TYPE ERROR
        E18 - DATA CONSTANT LENGTH ERROR
        E19 - DATA CONSTANT DATA ERROR
        E20 - START SEQUENCE ERROR
        E21 - LTORG SEQUENCE ERROR
        E22 - LOCATION COUNTER ERROR BETWEEN PASS 1 AND 2

   8.  IOS LOGICAL ACCESS METHOD USED BY A370, L370, AND E370

      IOS001 - NO DISK SPACE
      IOS001 - FILE NOT FOUND
      IOS001 - NO BUFFER SPACE
      IOS001 - OPEN FAILED
      IOS002 - CLOSE FAILED
      IOS003 - READING UNWRITTEN DATA
      IOS003 - INVALID REQUEST
      IOS004 - ERROR IN EXTENDING FILE
      IOS004 - END OF DISK DATA AREA
      IOS004 - NO MORE DIRECTORY SPACE
      IOS004 - INVALID REQUEST
      IOS005 - INVALID RECORD TYPE
      IOS005 - INVALID RECORD LENGTH
      IOS006 - INVALID RECORD TYPE
      IOS006 - INVALID RECORD LENGTH
      IOS007 - DELETE FAILED

*********

Chapter 6. ASSIST extended instructions for student use

*********

  A.  Overview

      The book, "Assembler Language With ASSIST", by Ross A. Overbeek
      and W. E. Singletary published by Science Research Associates,
      Inc.  in 1976 describes a set of 370 extended instructions to
      greatly simplify input and output for students learning to write
      370 assembler programs.  A new book with also covers ASSIST is,
      "IBM 370 Assembly Language with ASSIST, Structured Concepts, and
      Advanced Topics", Charles J. Kacmar, Prentice Hall, September
      1987, ISBN 0-13-455742-5.

      PC/370 implements these instructions to allow students to
      code, assemble, and execute ASSIST 370 programs on any 80x86 MS-
      DOS based micro-computer rather than having to use an IBM 370
      mainframe.  This was the original objective for which PC/370 was
      developed back in 1981.  The first students to use PC/370 with
      ASSIST were volunteers at the University of South Florida,
      College of Engineering.  The students used a CP/M based Z80
      micro-computer with the original version of PC/370 instead of
      the IBM 3033 mainframe ASSIST system accessed via RJE using
      keypunched card decks.

  B.  ASSIST extended instructions

      1.  XFILI =C'filename'

          This extended instruction redirects input source for XREAD.
          If open, the current input source file is closed.  The new
          filename can be any standard MS-DOS path/filename ending
          with suffix .xxx or a zero byte.  If the filename is CON:
          then the input source is the console with a ? prompt.  To
          set the ASSIST end of file condition code for XREAD from the
          console, use the escape (ESC) key.  See DEMOAST3.ALC for
          demo of redirection.

      2.  XFILO =C'filename'

          This extended instruction redirects the output from XPRNT.
          If open, the current output file is closed.  The new file
          name can be any standard MS-DOS path/filename ending with
          suffix .xxx or a zero byte.  If the filename is CON: then
          the output from XPRNT is directed to the console.  The first
          byte which is printer control code is also printed on
          console.

      3.  XREAD area [,length]

          Read record into area with default length of 80 padded with
          blanks.  If the input is coming from console, the first
          carriage return defines end of record, and single ESC
          character defines end of file.  Note ASCII characters from
          console or file are automatically translated to EBCDIC in
          record area.  Condition code set as follows:

            0 - read successful
            1 - end of file

          Default input source is file named ASSIST.DAT.  If the file
          is not found, the input and output source is switched to
          console.

      4.  XPRNT area [,length]

          Print record from area with default length of 132.  Trailing
          blanks are stripped off.  The first character is used as
          standard ASCII print control character:

           ' ' - space means skip one line
           '/' - slash means skip two lines
           '1' - one means skip a page
           '+' - means skip no lines
           '-' - dash means skip three lines

          Output to console includes print control character.  Default
          output is to file named ASSIST.PRN which is also used by
          interactive debug X logging command and XDUMP.

      5.  XDECI reg,area

          Read ASCII integer number from area and store into register.
          Leading plus or minus signs may be present.  Condition code
          is set as follows:

           0 - number is zero
           1 - number less than zero
           2 - number is greater than zero
           3 - no number found in area

          Register 1 is set to address of first character after number
          read.

      6.  XDECO reg,area

          Convert binary integer number in register to 12 character
          display field with numeric value including sign.

      7.  XDUMP [area start, area end]

          Dump general purpose registers (default with no args) or
          dump area of memory to output file.

*********

Chapter 7.  Interactive Debug Facility

*********

     A.  Overview

     The PC/370 interactive debug facility is designed to provide a
     tool to help debug program errors in either 80x86 code or 370
     code.  The facility provides the basic tools namely tracing
     program flow via breakpoints defined by calls, and displaying
     register and memory contents upon request.  In addition, the
     facility provides a data and address stop option which is very
     useful for locating errors.

     B.  Program Interface

     The PC/370 interactive debug facility is implemented via a single
     module named MMDBUG which is linked into A370, L370 and E370
     programs and is called with a single 3 byte ASCII argument
     located immediately after the near call instruction.   In the
     E370 emulator environment, the interactive debugger can be called
     directly from 370 programs through SVC 9 which must be followed
     by 3 byte EBCDIC argument and a 1 byte filler to keep
     instructions on half word boundary.

     There are several special calling arguments as follows:

     1.   'OFF' - turn off (kill) trace facility for speed
                  (a trace is killed by replacing call with jump over
                  the trace ID to the next instruction)
     2.   'ON ' - turn trace facility back on (stop killing traces)
     3.   'BUG' - force interactive debug mode
     4.   'IOF' - interrupts off (unsolicited keys queued for input)
     5.   'ION' - interrupts on  (any key stroke invokes user
                  interface)
     6.   'IFL' - instruction fetch loop (special trace used in E370
                  to identify next trace id as 370 operation trace to
                  be stored in trace table)

     The first call to MMDBUG in A370, L370, and E370 is with 'OFF'
     unless the trace option was requested via COM file parm or if the
     debug option D was specified on link edit of COM or BIN file.

     C.  User Interface

     When MMDBUG is called without the 'OFF' argument, or when a key
     is hit without the 'IOF' argument being issued previously, the
     user interface mode is invoked and the following commands may
     be entered in upper or lower case from the console:

          A - ADDRESS STOP (PROMPTS FOR ADDRESS, LENGTH, TYPE)
          C - CONTINUE TO NEXT TRACE ENTRY
          D - DUMP MEMORY (PROMPTS FOR ADDRESS)
          F - FIND TRACE ENTRY (PROMPTS FOR TRACE ID)
          H - HELP LIST MMDBUG COMMANDS (THIS LIST)
          I - INSTRUCTION COUNTER WORD
          J - RESET NEXT 370 OR 8086 INSTRUCTION ADDRESS
          K - KILL MODE SET/RESET (kills or restores traces)
          L - SET/RESET TRACE LIMIT FOR Q/T MODE
          M - MODIFY MEMORY (PROMPTS FOR ADDRESS AND DATA)
          N - LIST LAST 20 TRACE ENTRIES (NOTE K,Z  AFFECT THIS LIST)
          P - SET/RESET PRINT COPY OF ALL MMDBUG I/O
          Q - SET QUIET MODE (USED WITH F, L, AND 'BUG' OPTIONS)
          R - DISPLAY REGISTERS (SEE Z OPTION)
          S - SAVE/UNSAVE CURRENT TRACE ID FROM KILL MODE
          T - SET TRACE MODE (USED WITH OPTIONS F AND L)
          W - LIST FREE MEMORY QUEUE
          X - SET/RESET ASSIST LOGGING OF INTERACTIVE DEBUG OUTPUT
          Y - MODIFY 8086/370 REGISTER (PROMPTS FOR REGISTER/DATA)
          Z - SET/RESET 8086/370 MODE
                IN 8086 MODE, R DUMPS 8086 REGISTERS AND D PRINTS
                PRINTABLE ASCII CHARACTERS IN DUMP.
                IN PC/370 MODE, R DUMPS 370 REGISTERS AND PSW
                AND D DUMPS PRINTABLE EBCDIC CHARACTERS IN DUMP.
         <cr> - dump same address again as defined in D command
         <sp> - dump forward until any key hit
         <bs> - dump backwards until any key hit
         <esc>- exit to MSDOS after attempting to close files

     Memory addresses may be entered in xxxx:xxxx or xxxxxx hex format
     without leading zeros required.  In 370 mode, the xxxxxx format
     always refers to the relative address within the current address
     space.  In 80x86 mode, the xxxxxx format refers to the offset
     using the current segment.  The segment:offset is initialized to
     the emulator data segment area containing the 370 registers.

     D.  User Guide

     The PC/370 interactive debug facility can assist you in locating
     errors within your 370 assembler programs.  But first there are
     some more basic things to check:

     1. Are you sure that you are executing the latest version of
        the source program.  To be absolutely sure, code the date
        and time in a print statement at the beginning of the program
        and then reassemble (A370) and relink (L370) and execute the
        program again.

     2. Does the program run to normal termination?  If so then you
        can run the program again specifying a T as the only parameter
        on the execute command to initiate the interactive debug
        facility.  Another way to invoke the interactive debug option
        is to specify option D in the linkage editor.   This method
        should be used if the program requires a parameter other than
        T.

    3.  If the program terminated abnormally, the interactive debug
        facility is automatically initiated along with a display of
        the PSW and the failing instruction.  To calculate the
        relative address of the failing instruction in the program,
        subtract the program load address of X'0200' (Note you will
        have to look at the link edit listing to get the starting
        address if the failing instruction is in a subroutine.

    4.  To trace execution of the program, enter K once or twice to
        restore all traces and then enter T.  To stop the trace at any
        point hit any key.

    5.  To continue execution of the program normally, enter Q.
        For fast execution, use K command to set kill trace mode
        first.

    6.  To dump the current contents of the registers, enter R.

    7.  To dump any 32 byte area in memory, enter A followed by
        the starting address in hex xxxx.

    8.  To continue to dump memory from the current location forward,
        hit the space key.  To dump backwards, hit the backspace key.
        To stop the dump, hit any key.

    9.  To stop the program at a specific address, enter A followed
        by the address in hex xxxx followed by the option code A.
        Then use Q or T to continue execution until the address is
        found.

   10.  To stop the program when a specific data field in memory is
        changed, enter A followed by the address in xxxx followed by
        the option code E for equal data or N for not-equal data.
        Next entry the length of the data compare in hex when
        prompted.  If option E is selected, enter the hex value of the
        data you want to search for when prompted.  Next press Q or T
        to continue  execution until the data compare specified
        triggers debug user interface again.  To stop at a specific
        instruction count in a 370 program, use the I command to
        display the instruction counter word and then use data equal
        address stop on the word.  To obtain detail instruction trace
        up to point of failure, either use Q or T from beginning of
        the program or set address stop at previous multiple of 256
        on instruction count field and then restore traces with K
        command and then use Q or T proceed to point of failure.  At
        point of failure, use N command to list last 20 instruction
        trace points.

   11.  To turn off any address stop option, enter A.

   12.  To list the last 20 instruction trace table entries, enter N.
        If running in 370 mode (option Z toggles mode), only the 370
        instruction traces will be stored and listed via option N.
        In 80x86 mode, all traces will be stored and listed.
        Note that this list may be incomplete if the program
        was running with K option active to kill traces for speed.
        Option K kills each trace entry to debug the first time debug
        is entered for that trace point.  Option K makes the program
        run much faster at the expense of losing repeated trace
        points until K reset is issued.  However, you can use Find to
        locate selected trace id's and use Save to protect id from
        kill mode.  This option allows much faster execution while
        still being able to trace selected id's.  A very useful id to
        save is IFL which will then trace each 370 instruction during
        kill mode while killing all of the lower level ID's for
        reasonable speed yet full visibility of 370 instructions.
        Faster still is to save only one 370 instruction id such as
        TRT.  This is very useful in conjunction with address stop,
        since the address stop overhead is only incurred for the
        selected saved id's.  Note that the trace table only contains
        addresses of instructions, and as a result if instruction
        modification or overlays are used, the data listed for a
        previous instruction may be different from what it was at the
        time it was executed.  In this case it may be helpful to rerun
        program with address stop to see what was in memory at the
        time an instruction was executed.

   13.  To set a fixed limit on the number of trace entries before
        entering debug command mode again, enter L and count in hex
        xxxx.  Next enter Q or T to continue until count reached zero.
        If zero count is entered, the limit is not checked.

   14.  To modify memory, enter M followed by address in hex xxxx.
        Next enter hex data bytes followed by return key.

   15.  To display the 8086 registers, type Z to switch to 8086 mode.
        Now type R.  In 8086 mode, storage dumps translate data to
        ASCII instead of EBCDIC for character display.  In 8086 mode,
        N lists all trace entries instead of just IFL 370 instruction
        traces.  In 8086 mode, Y changes 8086 registers instead of 370
        registers.  To return to 370 mode, type Z again.

   16.  The W command displays free memory in the 8086 data segment
        for 8086 mode and the free memory in the current address
        space in 370 mode.  Note these are two totally separate free
        areas.  The 8086 free area is limited to <= 64k addressable by
        the DS register and uses 4 byte free queue elements
        (next,length).  The 370 free area extends from the end of 370
        code in COM module to the end of free memory and uses 8 byte
        370 format free queue elements (next,length) on 8 byte
        boundaries.  For BIN file execution, the free area is the SQA
        area allocated in the emulator address space.  The first free
        queue element in a 370 address space is pointed to by ASCASF
        field in address space control block located at X'104' in low
        memory (may be zero if no free memory currently available).
        The ASCB for BIN modules can be located by subtracting
        (X'200'-X'104') from the entry point address in register 15 at
        entry (trace ID 370).

   17.  The J jump command may be used to modify either the emulator
        or the 370 current instruction address depending on the
        current Z mode.  In 370 mode, the address entered is a virtual
        address.  In 80x86 mode, the address entered is a code segment
        offset (This is a very dangerous function and not
        recommended).

*********

Chapter 8.  Floating Point Support

*********

  A.  Register formats

    1.  General purpose registers

        The general purpose 370 registers are located at the beginning
        of the data segment of the E370 emulator (DS:0).  They are
        stored in 80x86/80x87 long integer format with least
        significant byte first starting with register 0.  For example,
        the high byte of register 0 is at DS:3 and the low byte of
        register 1 is at DS:4.  This area can be used with address
        stop to detect a specific register value or change in register
        value (although remembering reverse format is always a
        challenge).  This format is used to allow native loads and
        stores without reversing bytes which speeds up register to
        register operations and allows addition of registers directly
        from memory without conversion.

    2.  Floating point registers

        If the 80x87 co-processor is installed, the R command displays
        the four 8 byte floating point register values numbered 0, 2,
        4, and 6.  This is one way (other than 123 /WS screen) to tell
        if 80x87 is installed.   The floating point registers are
        stored in 80x87 temporary real format which is 10 bytes long.
        The first 8 bytes contain the normalized 64 bit unsigned
        mantissa with the high bit always on stored in reverse order
        (like a double long integer with the least significant byte at
        low address.  The last 2 bytes contain the base two exponent
        and the sign stored as an integer.  The 15 bit exponent is
        stored in excess 3FFFH format.  True zero is represented by
        plus or minus sign and all other bits zero.  This format
        exceeds 370 double precision 8 byte format for both mantissa
        and exponent range.  This format is used to significantly
        speed up floating point register to register operations since
        numbers can be directly transferred to/from 80x87 in this
        format.  A conversion routine must be used to convert floating
        point numbers when moved to/from memory to the floating point
        registers.  The conversion routine is quite efficient but does
        involve shifting entire number up to 3 bits left or right to
        convert from normalized base 2 to base 16.  The floating point
        register memory area can be dumped to see the real format and
        can be used with address stop to detect specific value or
        change in value.

  B.  Floating Point Scientific Subroutine Package

    Using floating point 370 instructions plus extended 80x87 function
    SVC's described in SYSTEM.DOC, a set of efficient scientific
    subroutines have been coded in SSP.ALC and are stored in the
    L370.LIB subroutine library.  The argument and result is in F0 or
    R0 unless noted otherwise.  The SSP functions are similar to the
    FORTRAN IV intrinsic functions.

    FUNCTION   DESCRIPTION   RANGE LIMITATIONS           NOTES

    ATAN       ARCTAN
    ALOG       LOG BASE E    0 < F0
    ALOG10     LOG BASE 10   0 < F0
    COS        COSINE
    EXP        E ** X
    REAL       CVT TO REAL   -2**32 <= R0 < 2**32        ARG. IN R0
    INT        CVT TO INT    -2**32 <= F0 < 2**32        RESULT IN R0
    MOD        MOD(F0,F2)                                REMAINDER R0
    PI         PI            3.14159.............
    SIN        SINE
    SQRT       SQUARE ROOT   0 <= F0
    TAN        TANGENT

  C.  Floating point co-processor assisted standard 370 instructions.

      1.  If the floating point option is on and an 80x87 co-processor
          is installed, then it is used to assist the CVB and CVD
          instructions for speed.  In the case of large numbers, the
          speed improvement can be up to 4 times.  For numbers close
          to zero, there is no improvement in speed.  Depending on
          user demand, this type assist may be added for other packed
          decimal instructions in the future.

*********

Chapter 9.  XA Extended Architecture Support

*********

  1.  A370 supports the XA instructions as defined in the
      IBM System/370 XA Principles of Operation manual version
      SA22-7085.

  2.  E370 supports the 6 XA non-privileged instructions
      BAS, BASR, MVCIN, BASSM, IPM, and BSM.  When the emulator is in
      31 bit mode, the PSW format displayed by MMDBUG is extended mode
      with the high address bit on.  The emulator defaults to 24 bit
      mode and the 370 basic PSW format.

  3.  The standard instructions LA, BAL, BALR, EDMK, and TRT
      now support both the 24 bit and 31 bit addressing modes
      as set by BASSM or BSM using the PSW address mode bit.
      Note that in 31 bit addressing mode the LA instruction
      adds all 31 bits of the index and base register plus
      displacement and clears only the high bit of the result.  This
      means the high byte of the index and base must be cleared when
      using 24 bit addresses in 31 bit mode.

**********

Chapter 10.  System subroutine library

**********

The following subroutines are included in the default system
subroutine relocatable library L370.LIB in the root directory:

 #  SUBROUTINE ENTRY   FUNCTION                    ARGUMENTS

 1  DAT                print date and time         none

 2  TIMER              return current time         none
                       of day in R0 in 100th
                       of a second units

 3  PET                print elapsed time since    none
                       last call plus date and
                       time and 370 instruction
                       count interval statistics

 4  DTIME              print time in upper left    none
                       corner of screen in format
                       HH:MM:SS

 5  SYNERROR           print PC/370 input/output   R0 = error code
                       error message based on      R1 = function code
                       return codes passed in
                       registers R0-R1 at entry
                       to SYNAD DCB exit routine

 6  SSP                scientific subroutines
                       (see chapter 8 for entry
                       points to this module)

 7  API                support application using
                       application program interface
                       (API) with IBM PC 3270
                       emulation via interrupt 7A

The 370 source code for all of the above modules is in the LIB
directory, and the BAT\BLDLIB.BAT command file will rebuild library
from the source.  Remember when adding subroutines to a relocatable
library that there cannot be any backward references to prior modules
in the library since L370.EXE uses serial one pass search for external
references in the library.

**********

Chapter 11.  COBOL call interface support

**********

To call a PC/370 assembler subroutine from a Micro Focus COBOL program
requires that the PC/370 emulator E370R42.EXE be made resident by
executing it directly (see BAT\RUNCBL.BAT for demo).  Each subroutine
to be called must be assembled and linked using option B to create a
BIN type file which will be dynamically loaded on the first call.

The interface performs the following functions prior to transferring
control to the assembler subroutine:

  1.  The address space control block at X'104' in the BIN file is
      initialized to a virtual equals real (V=R) region in order to
      address the arguments passed.   The ASCASF free memory pointer
      is initialized to point to the current first free queue element
      in the common system queue area (SQA) memory allocated along
      with the resident emulator.   The SQA is used to dynamically
      allocate buffers for subroutine file I/O and any other dynamic
      memory requests via GETMAIN/FREEMAIN svc's.  Note that SQA is
      shared by all subroutines and each subroutine must release any
      memory it uses prior to exit or SQA will eventually be depleted
      (just like MVS).

  2.  The segment and offset argument addresses on the stack are
      converted into a standard 370 calling list of 32 bit absolute
      addresses located at X'80' in the BIN file (normally the command
      line area).  Up to 32 arguments can be passed.

  3.  The 370 registers are set as follows:

        R1 = absolute address of argument list at X'80' in BIN file

        R14 = absolute return address to exit subroutine at X'102' in
        BIN file via detach SVC.

        R15 = absolute address of entry point (normally X'210' in BIN
        file.   At exit from called BIN module, the low 16 bits of
        register 15 are used to set special Micro Focus COBOL return
        code value called RETURN-CODE.  If emulator is not resident
        when a BIN module is called, a return code of 16 is passed.

  4.  If option D was specified in the L370 link of the BIN module
      being called, the emulator interactive debug facility will be
      invoked at entry with all traces restored.  If option D was
      not specified, execution will proceed without interruption and
      no traces will be restored to provide fast execution of one or
      more BIN modules.

  5.  Note that BIN modules are dynamically loaded by COBOL run time
      system at unknown addresses.  Since BIN subroutines run in
      V=R address mode in order to address COBOL data areas, all 370
      subroutine code must be self relocating.  See CBL\TESTCIO.ALC
      for example of how to relocate any address constants required
      such as subroutine entry points and DCB addresses.  The A370
      assembler lists all relocation addresses in PRN listing created
      with the /L option.

**********

Chapter 12.  Technical References:

**********

   1.  For information on 370 machine instructions see
       IBM System 370 XA Principles of Operation manual SA22-7085.
   2.  For information on 370 assembler language see:
       a.  IBM OS/VS Assembler Language manual GC33-4010.
       b.  Assembler Language Programming by G. W. Struble.
   3.  For information on how the assembler, linkage editor, and
       operating system software works see:
       a.  Systems Programming by John J. Donovan.
       b.  Operating Systems by S. E. Madnick and J. J. Donovan.
   4.  For information on the 80x86 processors see:
       a.  The 8086 Book by George Alexy.
       b.  Intel iAPX 286 Programmer's Reference Manual 210498-003.
       c.  Intel 80386 Programmer's Reference Manual 230985-001.
   5.  For information on the MSDOS operating system and utilities
       see:
       a.  Disk Operating System Version 3.2 Reference 68X2405.
       b.  Disk Operating System Technical Reference 6139658.
       c.  Advanced MS-DOS by Microsoft Press ISBN 0-914845-77-2
   6.  For information on usage of ASSIST extensions see:
       a.  Assembler Language with Assist by Ross A. Overbeek and W.
           E. Singletary.  Published by Science Research Associates,
           Inc., Chicago, Copyright 1976, ISBN 0-574-21085-7.
       b.  IBM 370 Assembly Language with ASSIST, Structured Concepts,
           and Advanced Topics by Charles J. Kacmar.  Published by
           Prentice Hall, September 1987, ISBN 0-13-455742-5.
   7.  For summary article on how PC/370 was developed see ACM
       Sigsmall Newsletter Volume 8 Number 3, August 1982.
   8.  For article on conversion of PC/370 from CP/M to MS-DOS see
       ACM SIGSMALL/PC Newsletter Volume 11 Number 3, August 1985.
   9.  For information on 80x87 see Intel iAPX 286 Programmer's
       Reference Manual #210498-003.  Also book by designer titled,
       "The 8087 Primer" by John F. Palmer and Stephen P. Morse,
       published by John Wiley & Sons, inc. Copyright 1984, ISBN 0-
       471-87569-4.
```
{% endraw %}

## UTILITY.DOC

{% raw %}
```
 
UTILITY.DOC PC/370 utility documentation

A.  Summary

    1.  SEE.ALC - this utility will support full screen editing of an
        ASCII text file.  The size of the file is only limited by the
        amount of MS-DOS memory available (up to 640K less MS-DOS and
        PC/370).  The program is modeled after the TURBO PASCAL full
        screen editor with compatible commands.  In addition to the
        expanded memory support,  SEE supports full color selection,
        character graphics, and session emulation.

    2.  PRINTDOC.ALC - this utility will read an ASCII text file and
        print it on the standard printer device with headings and page
        numbers set by standard ALC TITLE, EJECT, and SPACE commands.

    3.  T370.ALC - this utility reads A370 relocatable object files
        which are in compressed bit stream format and creates standard
        IBM 370 linkage editor input in standard 80 byte fixed record
        format with ESD, TXT, RLD, and END type records.  This utility
        also has option to generate ascii hex listing file if desired.
        The 370 object files have a suffix of .370 and the listing
        file has a suffix for .HEX.

To run demo of utility programs, execute BAT\RUNUTIL.BAT.  To rebuild
executable utility modules from source run BAT\BLDUTIL.BAT.

B. SEE - Screen Editor and Emulator Documentation

SEE.ALC is a full screen ASCII text editor for PC's with MS-DOS 2.0+
and at least 256k.  SEE is designed to be keystroke compatible with
both PFS:WRITE and the TURBO PASCAL (ie WORDSTAR like) editors.  SEE
supports text files up to 512k on a 640k system.  Note SEE.ALC itself
is about 90k which some editors can't handle.  To conserve space SEE
strips trailing blanks from each line of text, and replaces 9 leading
blanks with a single tab character. Each line is terminated with a
carriage return and line feed.

SEE also supports session emulation by optionally creating a file
(.KSF) with all of the session's keystrokes which can be replayed to
emulate the session with full color control.  SEE also supports line
and block drawing with graphic characters in full color.

The distribution diskettes or ARC file contains SEE.COM which can be
used to edit the source code UTIL\SEE.ALC.  TO edit an existing ASCII
text file:

  A>SEE file1

E370R42.EXE is dynamically loaded by SEE.COM to execute the 370 code
so it must be accessible on the current path as SEE.COM.  If you wish
to run SEE using the emulator on a separate directory, you can use
DEBUG to insert path in front of emulator name at X'140' in SEE.COM,
or you can make the emulator resident by directly executing it.
The default file type is ALC.  (Note with PC/370 you can change the
default in SEE.ALC and reassemble and link it in about 90 seconds on a
standard PC.)  If the file doesn't exist, it will create an empty file
ready for editing.  If the file does exist, it will be renamed
file1.BAK before saving the new file if it is changed.  Be sure there
is room on the same disk for both the new file and the backup file
before spending a lot of time editing a file.  Note SEE.ALC itself
requires at least 110k free space before you can save it.

To capture all the keystrokes in a session for replay later, type:

  A>SEE file1 file2

The default file type for file2 is KSF.  If file2 does not exist, it
will be created with all the keystrokes entered during the session
which edits file1.  If file2 already exists, SEE will use it as the
keyboard input to emulate the original session.  Note two special keys
act different in live editing versus emulation.  ALT-F1 key causes
emulation to stop until a real key is entered.  ALT-F2 key causes a 1
second wait in emulation mode to slow it down for visual effects.
Additional controls could be easily added to SEE.

SEE is designed to be fast and easy to use.  To change a drive
specification in an autoexec.bat file a sequence of less than 25
characters including the filename may be required.  For example,
assuming autoexec.bat contains:

RECORD/COLUMN  1...5...10...15...20
  1            ver
  2            astclock
  3            c:
  4            123

The following keystrokes would change drive c to drive a:

keystrokes  ascii characters            comments

  1-19      see autoexec.bat[enter]   start up SEE and display text
 20-21      [arrow down][arrow down]    move down to third line
  22        a                           replace c with a
  23        [esc]                       rename old file and save new
  file

To learn the keystrokes available with SEE, use F1 and F2 to display
help screens.  After reading help screens type any character to return
to text display.

To see the capability of SEE and to verify that the version you have
is working correctly on your system, run the batch file RUNUTIL.BAT.
This file executes the following emulation sessions:

  1.  DEMOSEE1.KSF - test both native and alternate keys as defined on
                     F2.
  2.  DEMOSEE2.KSF - test full color character graphics by drawing
                     colored organizational chart boxes and a full
                     color U.S.  flag with blinking stars. Press enter
                     to end session.

One of the unique features of SEE is that the entire 370 assembler
source code is being distributed along with the object code.  Because
of this, the SEE editor can be customized as required.  The SEE.ALC
source program is about 3000 lines and requires no external
subroutines.  On a RAM disk, it assembles in about 60 seconds via the
command A370 SEE.  The link edit takes another 10 seconds via the
command L370 SEE.  A listing of the source can be generated via the
command A370 SEE/L if you have a hard disk.  The listing is too big to
fit on a 360k floppy disk.

SEE has several special keys which may need additional explanation.
The ALT-F3 key enters PC/370 debug mode where you can display the 370
registers via the R command, dump memory via the D command, trace
instructions, etc.  To return to the SEE editor, type Q.  Since the
default is to kill all trace ids and disable the PC/370 interactive
debug interrupt, you must either link SEE with the debug option D, or
press a key during loading of the SEE program to get into PC/370 debug
at the beginning of SEE where you can select ids to save and trace.

The ALT-F4 key toggles an internal audit mode which was very useful
during debugging and may be useful to others making changes to SEE.
In audit mode the critical pointers and control blocks are verified
for consistency after each operation that modifies them.  For large
text files, these audits may take several seconds so be patient.  Via
the audit mode, data corruption can be detected immediately after it
occurs rather than later such as when a save is attempted.  The
following block diagram shows the critical blocks and their
relationships:

 ******************************************************************
 * MS-DOS   64k segment                                           *
 ******************************************************************
 * SEE.COM  512k segment (code and data in 370 address space)     *
 *                                                                *
 *       SCB screen control block                                 *
 *      ************************* <<<<< ASCB pointer to screen    *
 *   X>>*SCBADDR DS A addr LB   *       control block with 25     *
 *   ^  *SCBPREV DS A prev LB   *       lines of text             *
 *   ^  *SCBNEXT DS A next LB   *                                 *
 *   ^  *SCBLINE DS CL80 text   *                                 *
 *   ^  ************************* <<<<< R5 relative index to      *
 *   ^  *SCBADDR DS A addr LB   *       current row in ASCB       *
 *   ^  *SCBPREV DS A prev LB   *       times X'100'              *
 *   ^  *SCBNEXT DS A next LB   *       (X'0000' to X'1700')      *
 *   ^  *SCBLINE DS CL80 text   *                                 *
 *   ^  *************************       R6 relative column (0-79) *
 *   ^                                  R7 address of SCB for row *
 *   ^                                                            *
 *   ^                         GLBLAST  DS A last    LB >>>>>>>X  *
 *   X<<<<<<<<<<<<<<<<<<<<<<<< GLBCUR   DS A current LB >>>>>X v  *
 *    (matches SCBADDR for     GLBFIRST DS A first   LB >>>> v v  *
 *     row 0 at all times)                                 v v v  *
 *                                                         v v v  *
 *                                                         v v v  *
 *  (Dynamic memory allocated via SVC 10)                  v v v  *
 *                                                         v v v  *
 *    LB line control block                                v v v  *
 *    ***************************                          v v v  *
 * 0  * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<X v v  *
 * X<<* LBNEXT DS A next LB     *                            v v  *
 * v  * LBLINE DS CL80 text     *                            v v  *
 * v  ***************************                            v v  *
 * v      ^                                                  v v  *
 * v      ^                                                  v v  *
 * X>>***************************                            v v  *
 *    * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<<<X v  *
 * X<X* LBNEXT DS A next LB     *                              v  *
 * v  * LBLINE DS CL80 text     *                              v  *
 * v  ***************************                              v  *
 * v      ^                                                    v  *
 * v      ^                                                    v  *
 * X>>***************************                              v  *
 *    * LBPREV DS A prev LB     *<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<X  *
 * 0  * LBNEXT DS A next LB     *                                 *
 *    * LBLINE DS CL80 text     *                                 *
 *    ***************************                                 *
 *                                                                *
 *    (note lower right number on status line is ratio of         *
 *     active LB's to maximum LB's which will fit in extended     *
 *     memory. AFREELB pointer maintains queue of unused LB's.)   *
 *                                                                *
 ******************************************************************
 * E370R40.EXE PC/370 emulator loaded in high 64k segment         *
 ******************************************************************

The key things that are verified by the audit mode routines are as
follows:

  1.  The row (R5) and column (R6) relative pointers are within valid
      range.
  2.  The SCB address (R7) corresponds to current relative row (R5).
  3.  The SCBADDR in row zero matches GLBCUR.
  4.  The SCBPREV in each SCB matches SCBNEXT in previous SCB etc.
  5.  Starting with LB at GLBFIRST, verify forward and backward chains
      for all LB's in extended memory.  The total LB count is also
      verified.

Do not leave audit mode on for normal editing since it significantly
slows down the editor.

The label (F5), duplicate (F6), and delete key (del) all work
together.  When ever a block is active, the BLK indicator is on.  Be
sure to turn the block indicator off via F5, F6, or delete key.  If
the block indicator is not off and  the (del) key is hit to delete a
character, it will delete the block instead.  Note since the box
graphics mode indicator shares the same space on the status line,
turning on graphics will turn off the block indicator.

The search (F7) key will search for up to a 15 character key.  Use F8
to repeat search.  If a replacement key is specified, it will only be
replaced if it fits on current line.  Search can be interrupted by any
key.  The current line number is updated every 100 lines during
search.

The color selection key (F9) is tricky but powerful.  The attribute
byte shown on the message line consists of four fields; the blink bit,
the background color bits (RGB), the intensity bit, and the foreground
color bits (RGB).  The default attribute is set to B'00010111' or
X'17' which can be interpreted as no blink, no red background, no
green background, blue background, no intensity, and red, green, and
blue foreground (ie white foreground).  This is the PFS:WRITE default.
The TURBO PASCAL editor default is yellow on black B'00001110' or
X'0E'.  The attribute can be entered as a two digit hex number or the
arrows can be used to step through all the possible color and blink
combinations (all 256 of them).  Once the desired attribute is
selected, press enter to return to the screen with the new attribute.
Note that unfortunately the attributes of each character are not
stored in the file and when the screen is erased and updated again,
individual character attributes used on the screen are lost.  However,
the emulator option allows recreation of any screen with all the
colors used during the original session.  This capability can be used
to generate full color screen dialogs.

In addition to color, the box graphics or line graphics capability
allows creation of screens with organization charts and line diagrams
such as the one above.  I did not use color and I selected printable
characters via SHFT-F10 in order for this file to be printable on any
ASCII printer.  The default box graphic characters when F10 is turned
on is double line graphic characters which look neat on the screen but
can't be printed on many printers.  When F10 is pressed, the BOX
indicator comes on and the insert mode is turned off.  In BOX mode,
the arrows allow drawing of boxes and lines with correct corners based
on the current and next direction of arrows.  With a little practice,
it is easy to draw things and to add color to highlight different
parts.  However, the color is lost unless the keystroke file is being
created during the session.  Note in BOX mode, keystrokes are not
queued up as they are in normal text mode.  This is to prevent
overshooting the end of a line when holding down one of the arrow
keys.

The status line contains the following fields:

  1.  STATMSG  - 20 character message field used to display the
                 current function and to echo requested input.
  2.  STATFILE - name of the file being edited with path (15 char.
                 shown).
  3.  STATREC  - current line number.
  4.  STATCOL  - current cursor column
  5.  STATCAP  - caps key indicator
  6.  STATINS  - insert mode indicator (SEE always starts with INS
                 off)
  7.  STATNUM  - numeric mode indicator
  8.  STATBLK  - labeled block mode indicator / box graphics mode
                 indicator
  9.  STATPCT  - percent utilization of available memory

As a starting point for anyone who wishes to add a new key function,
the following minimum steps are required:

  1.  Overlay byte in KEYTAB which corresponds to the value of the new
      key with an index to the corresponding address in KRTAB.
      (All ASCII keys are in the range 0-127, and all extended keys
      are mapped into 128-255 by forcing the high order bit on.)
      Since the index values are multiples of 4, up to 63 keys can be
      handled with this scheme.

  2.  Insert address constant in KRTAB which points to the actual key
      routine.

  3.  Code the key routine with the following assumptions:

      a.  R14 has return address (You can use KRSV14 to save it.)
      b.  R5  has relative row times X'100'.
      c.  R6  has relative column.
      d.  R7  has address of SCB corresponding to current row.
      e.  GLBCUR    has extended memory address of LB for row 0 on
          screen.
      f.  GLBLAST   has extended memory address of last LB.
      g.  Useful routines include:
          1.)  SETCUR - reset cursor based on (R5,R6) and update
               status
               line if position has changed since last call.
          2.)  PUTMSG - display 20 character message passed via R1.
      h.  If the function you add, modifies any data in the SCB's, be
          sure to turn on the SCBMOD and SCRMOD flags to insure that
          the update and save routines recognize a file change
          occurred.
      i.  Assume nothing works and keep a backup copy of the editor
          and any test files you are using.

  4.  Add key definition to F2 screen without exceeding 24 lines.

  5.  Test all changes very carefully since this program should be
      considered complex.  The interaction between key routines and
      the maintenance of the screen and memory control blocks during
      scrolling, block operations, etc. is tricky to say the least.
      Use the audit mode to verify that the new routine does not
      destroy currency of the screen and extended memory data bases.

For release 2.0 of PC/370, the SEE editor was modified to use dynamic
memory in the 370 address space instead of MS-DOS allocated extended
memory accessed via the cross memory MVCS and MVCP moves.  The only
other change was to start up editor in insert mode for new files.

C.  PRINTDOC print utility

The PRINTDOC.COM program requires path\filename as single parm and
proceeds to print the specified file either on console or the standard
print device with page control and optional headings controlled with
embedded TITLE and EJECT commands.  For more information see the
source code UTIL\PRINTDOC.ALC.

D.  T370 translate object code utility

The T370.COM program requires path\filename as single parm with
optional trailing slash and one or more of the following parms:

  L - create listing file of the generated 370 OS/VS object file
      (suffix is HEX).  Default is none.

  P - punch 370 object code file (suffix 370).  Default is on.

The input file specified must be an object file created by A370.EXE.
For more information see the source UTIL\T370.ALC.




 
```
{% endraw %}

## Z86SUB.ASM

{% raw %}
```
         TITLE   'Z86SUB - 8086 USER EXIT'
;
; PGMID. Z86SUB.ASM LINKED TO Z86SUB.EXE
; AUTHOR. DON HIGGINS
; DATE.   04/12/87 CONVERTED TO MASM V4 STD. EXE CONVENTIONS WITH FAR EXIT
;
CODE     SEGMENT PUBLIC
         ASSUME  CS:CODE
PRTMSG   PROC    FAR
         PUSH  DS    ;SAVE DS
         PUSH  CS
         POP   DS    ;MOVE CS TO DS
         MOV   DX,OFFSET MSG
         MOV   AH,9
         INT   21H
         POP   DS    ;RESTORE DS
         RET
PRTMSG   ENDP
MSG      DB    'HELLO FROM Z86 SUB',0DH,0AH,'$'
CODE     ENDS
         END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0859

     Volume in drive A has no label
     Directory of A:\

    FILES859 TXT      1016   2-28-89   9:40a
    GO       BAT        38  11-04-87   1:33p
    GO       TXT       463   2-24-89   1:20p
    DEMO         <DIR>    
    DOC          <DIR>    
    MAC          <DIR>    
            6 file(s)       1517 bytes

     Directory of A:\DEMO

    .            <DIR>    
    ..           <DIR>    
    CLOCK    ALC      3477   7-20-87   5:59a
    DEMO8Q   ALC      2874   4-28-85   7:41a
    DEMOAST1 ALC       677   5-18-87   5:49a
    DEMOAST1 DAT        68   5-20-87   6:56a
    DEMOAST2 ALC      1039   5-18-87   5:51a
    DEMOAST2 DAT       128   7-19-86   8:03a
    DEMOAST3 ALC       105   5-19-87   5:12a
    DEMOAST4 ALC       764   5-18-87   6:00a
    DEMOHATS ALC      6656   7-21-86   5:49a
    DEMOINT  ALC      1503   7-21-87   6:46a
    DEMOMVS  ALC      7244   6-06-87   9:12p
    DEMOPD2  ALC       896   7-21-86   5:56a
    DEMOPNUM ALC      2895   5-02-85   3:13p
    DEMOPSW  ALC      1280   4-27-87   8:25p
    DEMOSRC  ALC      9252   5-24-87   4:34p
    DEMOSSP  ALC     10457   8-09-87   4:33p
    DEMOSVC  ALC      6707   1-07-88   5:24a
    DEMOTRAP ALC      2734   1-05-88  12:48p
    IGC0011  ALC      2397   6-06-87   6:45a
    IGC1013  ALC      1457   6-01-87   5:26a
    INS0156  ALC      2591   6-06-87   9:02p
    MVS      ALC     18232   6-06-87   8:52p
    PLOTXY   ALC      3576   8-20-87   6:35a
    SIEVE    ALC      4438   5-21-87   4:29a
    Z86SUB   ASM       640   4-12-87   6:38a
    Z86SUB   COM        33   4-12-87   6:38a
           28 file(s)      92120 bytes

     Directory of A:\DOC

    .            <DIR>    
    ..           <DIR>    
    HELP     DOC      9503   1-06-88   5:24a
    HISTORY  DOC     21395   1-06-88   5:07a
    INTRO    DOC      7685   1-06-88   5:16a
    MACRO    DOC     19470   1-07-88   9:49p
    PTF      DOC      4362   1-03-88   9:59p
    SYSTEM   DOC     30038   1-05-88   9:44p
    USER     DOC     42931   1-04-88   6:15a
    UTILITY  DOC     18306   1-06-88   5:10a
           10 file(s)     153690 bytes

     Directory of A:\MAC

    .            <DIR>    
    ..           <DIR>    
    API      MLC     15608   1-01-88   5:34p
    BEGIN    MAC       528   8-12-87  10:12p
    CALL     MAC       124  11-03-87   5:36a
    CLOSE    MAC       165   8-12-87  10:50a
    DCB      MAC       921   8-10-87   4:00p
    DEMOMAC1 MLC       104   7-20-87   7:46p
    DEMOMAC2 DAT       462  12-22-87   5:58a
    DEMOMAC2 MLC       466   1-03-88  10:14a
    DISPLAY  MAC       134   8-10-87   3:51p
    FREEMAIN MAC       484   8-12-87  10:53a
    GET      MAC       311   8-12-87  10:51a
    GETMAIN  MAC       663   8-12-87  10:53a
    LINK     MAC       513   8-17-87   3:12p
    LOAD     MAC       420   8-12-87  10:52a
    OPEN     MAC       164   8-12-87  10:50a
    PUT      MAC       258   8-12-87  10:51a
    READ     MAC       710   8-12-87  10:51a
    REGS     MAC       234   1-28-87   8:36p
    RETURN   MAC       203   8-12-87  12:00p
    SI500API MLC      5327  12-30-87   5:00p
    TEST     MAC       459   8-13-87   9:08a
    WRITE    MAC       658   8-12-87  10:51a
    WTO      MAC       222   8-11-87   8:59a
    WTOR     MAC       827   8-11-87  10:26a
    WTORPC   MAC       568  11-03-87   8:37p
           27 file(s)      30533 bytes

    Total files listed:
           71 file(s)     277860 bytes
                            5120 bytes free
