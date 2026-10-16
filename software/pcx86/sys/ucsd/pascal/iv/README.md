---
layout: page
title: UCSD p-System IV.0 with Pascal
permalink: /software/pcx86/sys/ucsd/pascal/iv/
machines:
  - id: ucsd-pascal-iv
    type: pcx86
    config: /machines/pcx86/ibm/5150/mda/256kb/machine.xml
    autoMount:
      A:
        name: UCSD Pascal Disk 1 (STARTUP)
      B:
        name: UCSD Pascal Disk 6 (PASCAL)
---

The UCSD p-System was one of three operating systems IBM offered for the original IBM PC, alongside
[PC DOS](/software/pcx86/sys/dos/ibm/1.00/) and [CP/M-86](/software/pcx86/sys/cpm/1.00/).  Developed at the
University of California, San Diego, and licensed by SofTech Microsystems, the p-System was a portable
operating system built around a pseudo-machine (p-machine) interpreter, so that programs compiled to p-code
could run unchanged on any machine with a p-System interpreter.

IBM released UCSD p-System Version IV.0 in 1982 as part of its "Personal Computer Computer Language Series",
in two packages: one with the UCSD Pascal compiler, and one with a [FORTRAN-77 compiler](../../fortran/iv/).
Both packages shared the same five system diskettes (STARTUP, SYSTEM 2, UTILITY, SYSTEM 4, and EXTRAS), and
differed only in the sixth diskette containing the compiler.

Two complete operating systems are included: one on the SYSTEM 2 diskette, and one on the SYSTEM 4 diskette.
The numbers refer to the size of the floating-point format each system uses (2-word or 4-word reals), and the
Pascal diskette contains a compiler for each (SYSTEM.COMPILER and PASCAL4.COMPILE).

The machine below boots the STARTUP diskette, with the PASCAL diskette in drive B.  The STARTUP diskette
automatically runs two short demo programs: a maze generator, followed by a "ROW ROW YOUR BOAT" data entry demo.
Press **Q** to quit each demo.  The main p-System command line then appears at the top of the screen:

    Command: E(dit, R(un, F(ile, C(omp, L(ink, X(ecute, A(ssem,? [IV.03 B3n]

Type **?** to see the rest of the available commands.

The p-System uses its own disk format, not the FAT format used by PC DOS, so these diskettes cannot be read by
DOS, and the usual PCjs directory listings cannot be generated for them.  The listings below were produced by
decoding the p-System directory stored on each diskette, in the style of the p-System Filer's L(ist command.

{% include machine.html id="ucsd-pascal-iv" %}

### Directory of UCSD p-System IV.0 STARTUP (6936529)

    STARTUP:
    SYSTEM.PASCAL    121   9-Jan-82
    SYSTEM.INTERP     27   9-Mar-82
    SYSTEM.MISCINFO    1  27-Jul-81
    SYSTEM.FILER      32  19-Jul-81
    SYSTEM.EDITOR     49  19-Jul-81
    SYSTEM.STARTUP    12  19-Jul-81
    SYSTEM.SYNTAX     14  22-May-81
    NAMEFILE           3   9-Jun-81
    SCDEMO.CODE        3  19-Jul-81
    COPYSCUNIT.CODE    4  19-Jul-81
    UPDATE.CODE        4   9-Jan-82
    COMPDEMO.TEXT      6   9-Jan-82
    EDITDEMO.TEXT      4   5-Jun-81
    UPDATE.TEXT        8   9-Jan-82
    14/14 files<listed/in-dir>, 288 blocks used, 22 unused, 22 in largest

### Directory of UCSD p-System IV.0 SYSTEM 2 (6936534)

Note that this copy of the SYSTEM 2 diskette is slightly newer than the copy included with the
[FORTRAN package](../../fortran/iv/): the SYSTEM.PASCAL, SYSTEM.INTERP, and SYSTEM.LIBRARY files
are dated July 1982, matching the dates on the PASCAL diskette.

    SYSTEM2:
    SYSTEM.PASCAL    121  15-Jul-82
    SYSTEM.MISCINFO    1   9-Jan-82
    SYSTEM.INTERP     27  19-Jul-82
    SYSTEM.FILER      32  19-Jul-81
    SYSTEM.EDITOR     49   9-Jan-82
    SYSTEM.STARTUP     2  29-Oct-81
    SYSTEM.LOGO        4  29-Oct-81
    SYSTEM.SYNTAX     14  22-May-81
    SYSTEM.LIBRARY    35  15-Jul-82
    SPOOLER.CODE       2  27-Jul-81
    10/10 files<listed/in-dir>, 287 blocks used, 23 unused, 23 in largest

### Directory of UCSD p-System IV.0 UTILITY (6936544)

    UTILITY:
    XREF.CODE         29  27-Jul-81
    TAPE.CODE          5  27-Jul-81
    CODEGEN.CODE      74  14-Jan-82
    LIBRARY.CODE      13  27-Jul-81
    PATCH.CODE        34   9-Jan-82
    DECODE.CODE       28  27-Jul-81
    SETUP.CODE        27  27-Jul-81
    COPYDUPDIR.CODE    3   9-Jan-82
    MARKDUPDIR.CODE    4   9-Jan-82
    RECOVER.CODE       8  27-Jul-81
    PRNCONFIG.CODE     4  27-Jul-81
    TVADJUST.CODE      3  27-Jul-81
    SETBAUD.CODE       2  19-Jul-81
    DISKFORMAT.CODE    4   1-Mar-82
    DISKSIZE.CODE      3  19-Jul-81
    15/15 files<listed/in-dir>, 241 blocks used, 69 unused, 69 in largest

### Directory of UCSD p-System IV.0 SYSTEM 4 (6936539)

    SYSTEM4:
    SYSTEM.PASCAL    123   9-Jan-82
    SYSTEM.MISCINFO    1   9-Jan-82
    SYSTEM.INTERP     28   9-Mar-82
    SYSTEM.FILER      32  19-Jul-81
    SYSTEM.EDITOR     49  19-Jul-81
    SYSTEM.STARTUP     2  29-Oct-81
    SYSTEM.LOGO        4  29-Oct-81
    SYSTEM.SYNTAX     14  22-May-81
    SYSTEM.LIBRARY    34   9-Jan-82
    SPOOLER.CODE       2  27-Jul-81
    10/10 files<listed/in-dir>, 289 blocks used, 21 unused, 21 in largest

### Directory of UCSD p-System IV.0 EXTRAS (6936549)

    EXTRAS:
    SYSTEM.LINKER     26  19-Jul-81
    SYSTEM.ASSMBLER   60   9-Jan-82
    8086.OPCODES       5  22-May-81
    8086.ERRORS       11  22-May-81
    COMPRESS.CODE     10   9-Jan-82
    GOTOXY.CODE        3  19-Jul-81
    GOTOXY.TEXT        4  20-May-81
    SPOOLOPS.CODE      7  19-Jul-81
    COMMANDIO.CODE    10  19-Jul-81
    KERNEL.CODE       65   7-Jan-82
    SCREENOPS.CODE    13  19-Jul-81
    8087.FOPS          3  22-May-81
    INTERPX.2.CODE    23  21-Dec-82
    INTERPX.4.CODE    24  21-Dec-82
    RSP.CODE           6  29-Sep-81
    BIOS.CODE         10   9-Mar-82
    BIOS.S.CODE       10   9-Mar-82
    TERTBOOT.CODE      7  29-Sep-81
    RS232SET.CODE      7  20-Jan-82
    19/19 files<listed/in-dir>, 304 blocks used, 6 unused, 6 in largest

### Directory of UCSD p-System IV.0 PASCAL

    PASCAL:
    SYSTEM.COMPILER  102  13-Jul-82
    PASCAL4.COMPILE  102  13-Jul-82
    2/2 files<listed/in-dir>, 204 blocks used, 106 unused, 106 in largest
