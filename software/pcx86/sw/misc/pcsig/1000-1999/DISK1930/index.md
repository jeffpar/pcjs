---
layout: page
title: "PC-SIG Diskette Library (Disk #1930)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1930/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1930"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "D-ACCESS"

    D-ACCESS provides access to all the functions available in the IBM DOS
    and BIOS, access to the I/O ports including the mouse and direct memory
    operations, all from FORTRAN.  No longer are you restricted to the
    functions provided by the FORTRAN compiler.  Use as high level or as low
    level a function as you need.
    
    D-ACCESS is a set of interface modules which you can call from within
    FORTRAN with the appropriate parameters.  In most cases these parameters
    are 8086/80286 register values.  The modules in turn call DOS, BIOS or
    the mouse driver, or perform direct I/O or memory operations.
    Applications where D-ACCESS will be extremely valuable include graphics
    programs, database programs, sound programs, mouse based user interface
    programs, communication programs, and printer oriented utilities.
    
    Since effective use of DOS, BIOS, I/O, mouse or direct memory requires
    some knowledge of the 8086 family of CPUs, the IBM PC microcomputer
    family architectures, PC-DOS (or MS-DOS), BIOS and the mouse driver
    MOUSE.SYS, this program includes a recommended reading list for the
    serious programmer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DACCESS.TXT

{% raw %}
```








                                      D-ACCESS
                                   (Version 1.0)


                  Library of Interface Modules Between FORTRAN 77
                          And DOS, BIOS, I/O and Hardware
                      For the IBM PC/XT/AT/PS2 and Compatibles

                           Developed for Microsoft MSFOR

                                         by

                                  OLYMPIC SOFTWARE
                 P.O. BOX 769, Bryn Mawr, PA   19010, 215-353-6971




























                                (C)  Copyright 1990
                                  OLYMPIC SOFTWARE
                                ALL RIGHTS RESERVED


















                                    REGISTRATION

          If you are not a registered user of D-ACCESS, please register now by
     sending $25.00 to our address.  Registration brings the following
     benefits:

          1.  Most importantly, you will help continue the further development
     of this product.
          2.  You will be notified of all changes, updates, tips, etc.


                                    TRADEMARKS:

          International Business Machines:   IBM PC, XT, AT, PS/2,
                                             Proprinter
          Microsoft Corporation:             Windows
          Epson America, Inc:                Epson FX
          C.Itoh Digital Products, Inc:      C.Itoh
          Okidata Corporation:               Okidata

             D-ACCESS Version 1.0, (C) Copyright 1990, Olympic Software
                 P.O. Box 769, Bryn Mawr, PA   19010, 215-353-6971











































                                  I.  INTRODUCTION

          D-ACCESS, provides access to all the functions available in the IBM
     DOS and BIOS, access to the I/O ports including the mouse and direct
     memory operations, all from FORTRAN.  The possibilities presented to the
     IBM PC FORTRAN programmer by D-ACCESS are limitless.  He is no longer
     restricted to the functions provided by the FORTRAN compiler.  He has the
     freedom to use as high level or as low level a function as he sees
     appropriate.  It is good programming practice, however, to use the highest
     level function available.  First choice is the FORTRAN compiler, second is
     DOS, third is BIOS and then come direct I/O and memory operations.  For
     portability, it makes sense to avoid direct access of I/O and memory.
     BIOS can help you do that in most cases, by providing a nice set of
     functions.

          D-ACCESS is a set of interface modules which you can call from within
     FORTRAN with the appropriate parameters.  In most cases these parameters
     are 8086/80286 register values.  The modules in turn call DOS, BIOS or the
     mouse driver, or perform direct I/O or memory operations.  Applications
     where D-Access will be extremely valuable include Graphics Programs
     (typically using BIOS), Data Base Programs (typically using DOS), Sound
     Programs (typically using I/O operations), Mouse Based User Interface
     Programs (typically using the mouse module), Communication Programs
     (typically using BIOS), Printer oriented utilities (typically using BIOS),
     etc.  The possibilities are endless.  Our Olympic Software DPLOT, for
     example, makes an extensive use of BIOS.

          Effective use of DOS, BIOS, I/O, mouse or direct memory in a FORTRAN
     program (or any type of program) requires, however, some knowledge of the
     8086 family of CPUs, the IBM PC microcomputer family architectures, PC-DOS
     (or MS-DOS), BIOS and the mouse driver MOUSE.SYS.  The books referenced in
     section III have been found to be excellent for the library of the serious
     programmer.  They are available in most general bookstores, computer
     specialty stores, or University bookstores.

          D-ACCESS consists of 24 interface modules in 6 groups:
               1.  FORTRAN-DOS Interface Modules
               2.  FORTRAN-BIOS Interface Modules
               3.  FORTRAN-I/O Interface Modules
               4.  FORTRAN-MOUSE Interface Module
               5.  FORTRAN-Memory Interface Modules
               6.  Miscellaneous Modules

     This document is organized in four parts.  Part I is the introduction,
     Part II is a description of the contents on this disk, Part III is a
     detailed description of the interface modules, and Part IV is the
     reference section.

          If you have a copy of D-ACCESS library and you are not registered,
     please register now, by sending $25.00 to our address, with your name and
     address.  Being registered brings benefits:  a) You become notified of
     changes, updates, tips, etc.  b) You can participate with your ideas for
     exciting future upgrades, applications, etc.













          Finally, we would like to note that your opinions count; we urge you
     to write to us with any concerns, problems, suggestions for the next
     update, etc.

                                 II.  DISK CONTENTS

          The files included on the D-ACCESS disk are as follows:

          1.  DACCESS.LIB:  A library containing the 24 interface modules used
     by Microsoft MSFOR (up to version 5.0) FORTRAN programs.
          2.  DACCESS.TXT:  This document
          3.  Source code for a number of FORTRAN programs, provided as
     examples referenced by section III:  TGDOS.FOR, TUDOS.FOR, TIMDAT.FOR,
     TVBIOS.FOR, LINES.FOR, RDKEY.FOR, PRMESS.FOR, SDMESS.FOR, STIMER.FOR,
     RFAT.FOR, TMBIOS.FOR, SOUND.FOR, TMOUSE.FOR, RMOUSE.FOR, PEKPOK.FOR,
     VPP.FOR, TSLOG.FOR, TRAN.FOR, TRANDU.FOR.

          Assuming that your FORTRAN subdirectory name is MSFOR and D-ACCESS
     programs are at subdirectory DACCESS, here is an example Link command for
     your program MYPROG:

          LINK MYPROG,,NUL,\MSFOR\+\DACCESS\DACCESS.LIB

                              III.  MODULE DESCRIPTION

          The information provided in this Part for each module consists of a)
     module name, b) module function, c) interrupt number which is used
     internally by each module (if applicable), d) calling statement from
     FORTRAN, e) description of parameters, and f) reference to an example
     program.  In most cases, the parameters are register values which are
     discussed in detail in the books referenced in section IV.

     1.  FORTRAN-DOS INTERFACE MODULES

          A.   GDOSIF

               Module function:  General access to all DOS functions

               Interrupt numbers:  32 (Program Terminate), 33 (DOS Universal
     Functions), 34 (Terminate Address), 35 (Break Address), 36 (Critical-Error
     Handler Address), 37 (Absolute Disk Read), 38 (Absolute Disk Write), 39
     (Terminate-But-Stay-Resident), 47 (Print Spool Control).

               Calling statement:  CALL GDOSIF(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     15, type INTEGER*2 and defined as:  IRQ, IAH, IAL, IBH, IBL, ICH, ICL,
     IDH, IDL, IDS, IES, ISI, IDI, IZF, ICF.  IRQ is the desired interrupt
     number.  IAH, IAL, IBH, IBL, ICH, ICL, IDH, IDL, IDS, IES, ISI, IDI
     contain the contents of the 8086/80286 registers AH, AL, BH, BL, CH, CL,
     DH, DL, DS, ES, SI and DI.  IZF, ICF contain contents of the Zero and
     Carry flags.  Note that IARRAY is defined as INTEGER*2, and so it covers
     the individual registers which are equal to or less than 16 bits wide.

               Example programs:  TGDOS.FOR












          B.   UDOSIF

               Module function:  Access to the Universal DOS functions.

               Interrupt number:  33

               Calling statement:  CALL UDOSIF(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     14, type INTEGER*2 and defined as:  IAH, IAL, IBH, IBL, ICH, ICL, IDH,
     IDL, IDS, IES, ISI, IDI, IZF, ICF.  IAH, IAL, IBH, IBL, ICH, ICL, IDH,
     IDL, IDS, IES, ISI, IDI contain the contents of the 8086/80286 registers
     AH, AL, BH, BL, CH, CL, DH, DL, DS, ES, SI and DI.  IZF, ICF contain
     contents of the Zero and Carry flags.  Note that IARRAY is defined as
     INTEGER*2, and so it covers the individual registers which are equal to or
     less than 16 bits wide.

               Example program:  TUDOS.FOR


          C.   LDOSIF

               Module function:  Limited access to the Universal DOS Functions

               Interrupt number:  33

               Calling statement:  CALL LDOSIF(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     8, type INTEGER*2 and defined as:  IAH, IAL, IBH, IBL, ICH, ICL, IDH, IDL.
     These parameters contain the contents of the 8086/80286 registers AH, AL,
     BH, BL, CH, CL, DH and DL.  Note that IARRAY is defined as INTEGER*2, and
     so it covers the individual registers which are equal to 8 bits wide.

               Example program:  TIMDAT.FOR


     2.  FORTRAN-BIOS INTERFACE MODULES

          A.   VBIOS

               Module function:  General access to BIOS Video Services

               Interrupt number:  16

               Calling statement:  CALL VBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     10, type INTEGER*2 and defined as:  IAH, IAL, IBH, IBL, ICH, ICL, IDH,
     IDL, IES, IBP.  These parameters contain the contents of the 8086/80286
     registers AH, AL, BH, BL, CH, CL, DH, DL, ES and BP.  Note that IARRAY is
     defined as INTEGER*2, and so it covers the individual registers which are
     equal to or less than 16 bits wide.

               Example program:  TVBIOS.FOR











          B.   GBIOS

               Module function:  Limited access to BIOS Video Services,
     optimized for fast writing/reading pixels

               Interrupt number:  16

               Calling statement:  CALL GBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     4, type INTEGER*2 and defined as:  IAH, IAL, ICX, IDX.  These parameters
     contain the contents of the 8086/80286 registers AH, AL, CX and DX.  Note
     that IARRAY is defined as INTEGER*2, and so it covers the individual
     registers which are equal to or less than 16 bits wide.

               Example program:  LINES.FOR


          C.   KBIOS

               Module function:  General Access to BIOS Keyboard Services

               Interrupt number:  22

               Calling statement:  CALL KBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     3, type INTEGER*2 and defined as:  IAH, IAL, IZF.  IAH, IAL contain the
     contents of the 8086/80286 registers AH, AL, and IZF contains the contents
     of the Zero flag.  Note that IARRAY is defined as INTEGER*2, and so it
     covers the individual registers which are equal to or less than 8 bits
     wide.

               Example program: RDKEY.FOR


          D.   PBIOS

               Module function:  General Access to BIOS Printer Services

               Interrupt number:  23

               Calling statement:  CALL PBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     3, type INTEGER*2 and defined as:  IAH, IAL, IDX.  These parameters
     contain the contents of the 8086/80286 registers AH, AL and DX.  Note that
     IARRAY is defined as INTEGER*2, and so it covers the individual registers
     which are equal to or less than 16 bits wide.

               Example program:  PRMESS














          E.   SBIOS

               Module function:  General Access to BIOS Serial Port Services

               Interrupt number:  20

               Calling statement:  CALL SBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     3, type INTEGER*2 and defined as:  IAH, IAL, IDX.  These parameters
     contain the contents of the 8086/80286 registers AH, AL and DX.  Note that
     IARRAY is defined as INTEGER*2, and so it covers the individual registers
     which are equal to or less than 16 bits.

               Example program:  SDMESS


          F.   TBIOS

               Module function:  General Access to BIOS Time Services

               Interrupt number:  26

               Calling statement:  CALL TBIOS(IARRAY)

               Description of parameters: IARRAY is an integer array of size 6,
     type INTEGER*2 and defined as:  IAH, IAL, ICH, ICL, IDH, IDL.  These
     parameters contain the contents of the 8086/80286 registers AH, AL, CH,
     CL, DH and DL.  Note that IARRAY is defined as INTEGER*2, and so it covers
     the individual registers which are equal to 8 bits wide.

               Example program:  STIMER.FOR


          G.   DBIOS

               Module function:  General Access to BIOS Diskette Services

               Interrupt number:  19

               Calling statement:  CALL DBIOS(IARRAY,IES,IBX)

               Description of parameters:  IARRAY is an integer array of size
     7, type INTEGER*2 and defined as:  IAH, IAL, ICH, ICL, IDH, IDL, ICF.
     IAH, IAL, ICH, ICL, IDH, IDL contain the contents of the 8086/80286
     registers AH, AL, CH, CL, DH and DL.  ICF contains the contents of the
     Carry flag.  Note that IARRAY is defined as INTEGER*2, and so it covers
     the individual registers which are equal to or less than 8 bits wide.
     IES, IBX are INTEGER*2 and their values are loaded to registers ES, BX in
     the interface module.

               Example program:  RFAT.FOR














          H.   MBIOS

               Module function:  Access to BIOS Print Screen, Equipment List,
     Memory Service, Cassette Tape/Joystick, Switch to BASIC and Reboot
     Services.   WARNING:  Although the module does what it is supposed to do,
     some things may not be possible to do from within FORTRAN (ie. return to
     BASIC).

               Interrupt numbers:  5, 17, 18, 21, 24, 25

               Calling statement:  CALL MBIOS(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     15, type INTEGER*2 and defined as:  IRQ, IAH,  IAL, IBH, IBL, ICH, ICL,
     IDH, IDL, IDS, IES, ISI, IDI, IZF, ICF.  IRQ is the interrupt number.
     IAH, IAL, IBH, IBL, ICH, ICL, IDH, IDL, IDS, IES, ISI, IDI contain the
     contents of the 8086/80286 registers AH, AL, BH, BL, CH, CL, DH, DL, DS,
     ES, SI and DI.  IZF, ICF contain the contents of the Zero and Carry flags.
     Note that IARRAY is defined as INTEGER*2, and so it covers the individual
     registers which are equal to or less than 16 bits wide.

               Example program:  TMBIOS.FOR


     3.  FORTRAN-I/O INTERFACE MODULES

          A.   INPUT

               Module function:  Input from I/O Ports

               Calling statement:  CALL INPUT(IAL,IDX)

               Description of parameters:  IAL and IDX are type INTEGER*2 and
     contain the values in registers AL and DX.  IAL returns the byte value
     input from the port whose number is in IDX.

               Example program:  SOUND.FOR


          B.   OUTPUT

               Module function:  Output to I/O Ports

               Calling statement:  CALL OUTPUT(IAL,IDX)

               Description of parameters:  IAL and IDX are type INTEGER*2 and
     contain the values in registers AL and DX.  IAL contains the byte value to
     be output to the port whose number is in IDX.

               Example program:  SOUND.FOR
















     4.  FORTRAN-MOUSE INTERFACE MODULE

               MOUSDR

               Module function:  Access the Mouse Driver MOUSE.COM

               Interrupt number:  51

               Calling statement:  CALL MOUSDR(IARRAY)

               Description of parameters:  IARRAY is an integer array of size
     4, type INTEGER*2 and defined as:  IAX, IBX, ICX, IDX.  These parameters
     contain the contents of the 8086/80286 registers AX, BX, CX and DX.  Note
     that IARRAY is defined as INTEGER*2, and so it covers the individual
     registers which are equal to 16 bits wide.

               Example program:  TMOUSE.FOR, RMOUSE.FOR


     5.  FORTRAN-HARDWARE INTERFACE MODULES

          A.   MXFER

               Module function:  Inter-Memory Data Transfer

               Calling statement:  CALL MXFER(ISEG1,IOFF1,ISEG2,IOFF2,NBYT)

               Description of parameters:  Data in memory at Segment:Offset
     ISEG1:IOFF1, NBYT bytes long (NBYT should be even), is copied to memory at
     Segment:Offset ISEG2:IOFF2.  ISEG1 and ISEG2 are INTEGER*4, all others are
     INTEGER*2.

               Example program:  PEKPOK.FOR, VPP.FOR


          B.   MXFER1

               Module function:  Inter-Memory Data Transfer

               Calling statement:  CALL MXFER1(IOP,IARRAY,ISEG,IOFF,NBYT)

               Description of parameters:  NBYT bytes of data in array IARRAY
     is copied to (IOP=0) or copied from (IOP=1) memory at Segment:Offset
     ISEG:IOFF.  ISEG is INTEGER*4, all others INTEGER*2. NBYT should be even.

               Example program:  PEKPOK.FOR, VPP.FOR


          C.   MCLR

               Module function:  Memory Clear

               Calling statement:  CALL MCLR(ISEG,IOFF,NBYT)













               Description of parameters:  NBYT bytes of memory at
     Segment:Offset ISEG:IOFF is cleared (set to 0).  ISEG should be INTEGER*4,
     others INTEGER*2.  NBYT should be even.

               Example program:  PEKPOK.FOR, VPP.FOR


     6.  MISCELLANEOUS MODULES

          A.   GETADR

               Module function:  Get Variable Address

               Calling statement:  CALL GETADR(VAR,ISEG,IOFF)

               Description of parameters:  Upon return ISEG, IOFF contain the
     address (Segment:Offset) of variable VAR.  ISEG should be INTEGER*4,
     others INTEGER*2.

               Example program:  PEKPOK.FOR, VPP.FOR


          B.   GETCAD

               Module function:  Get Character Variable Address

               Calling statement:  CALL GETCAD(CVAR,ISEG,IOFF)

               Description of parameters:  Upon return ISEG, IOFF contain the
     address (Segment:Offset) of character variable CVAR.  ISEG should be
     INTEGER*4, others INTEGER*2.

               Example program:  RFAT.FOR


          C.   SLOGIC

               Module function:  Logical Operations, AND, OR, XOR, NOT

               Calling statement:  CALL SLOGIC(IOP,IARG1,IARG2,IARG3)

               Description of parameters:  IARG1 equals IARG2.AND.IARG3
     (IOP=1), or IARG2.OR.IARG3 (IOP=2), or IARG2.XOR.IARG3 (IOP=3), or
     NOT(IARG2).  All parameters are INTEGER*2.

               Example program:  TSLOG.FOR, STIMER.FOR


          D.   RAN

               Module function:  Random Number Generator, functionally
     equivalent to that found in VAX/VMS minicomputers.

               Calling statement:  X=RAN(ISEED)












               Description of parameters:  X is a real number (0.0 to 1.0).
     ISEED is the seed, INTEGER*4.

               Example program:  TRAN.FOR


          E.   SDRAN

               Module function:  Used internally by RAN to update the seed

               Calling statement:  CALL SDRAN(ISEED)

               Description of parameters:  ISEED is the seed, INTEGER*4


          F.   RANDU

               Module function:  Random number generator (yes, it is
     functionally equivalent to the classic RANDU).

               Calling statement:  CALL RANDU(X,ISEED)

               Description of parameters:  X is a real number (0.0 to 1.0).
     ISEED is the seed, INTEGER*4.

               Example program:  TRANDU.FOR


          G.   SDRDU

               Module function:  Used internally by RANDU to update the seed

               Calling statement:  CALL SDRDU(ISEED)

               Description of parameters:  ISEED is the seed, INTEGER*4


     IV.  REFERENCE BOOKS

     1. Peter Norton, 'PROGRAMMER'S GUIDE TO THE IBM PC AND PS/2', Microsoft
     Press, 1985, 1988.
     2. Ray Duncan, 'ADVANCED MSDOS PROGRAMMING', Microsoft Press, 1986.
     3. Terry R. Dettmann, 'DOS PROGRAMMER'S REFERENCE',QUE,1988.
     4. Richard Wilton, 'PROGRAMMER'S GUIDE TO PC & PS/2 VIDEO SYSTEMS',
     Microsoft Press, 1987.


















```
{% endraw %}

## FILE1930.TXT

{% raw %}
```
Disk No: 1930                                                           
Disk Title: D-Access                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: D-Access                                                 
Author Version: 1.0A                                                    
Author Registration: $25.00                                             
Special Requirements: FORTRAN compiler.                                 
                                                                        
D-ACCESS provides access to all the functions available in the IBM DOS  
and BIOS, access to the I/O ports including the mouse and direct memory 
operations, all from FORTRAN.  No longer are you restricted to the      
functions provided by the FORTRAN compiler.  Use as high level or as low
level a function as you need.                                           
                                                                        
D-ACCESS is a set of interface modules which you can call from within   
FORTRAN with the appropriate parameters.  In most cases these parameters
are 8086/80286 register values.  The modules in turn call DOS, BIOS or  
the mouse driver, or perform direct I/O or memory operations.           
Applications where D-ACCESS will be extremely valuable include graphics 
programs, database programs, sound programs, mouse based user interface 
programs, communication programs, and printer oriented utilities.       
                                                                        
Since effective use of DOS, BIOS, I/O, mouse or direct memory requires  
some knowledge of the 8086 family of CPUs, the IBM PC microcomputer     
family architectures, PC-DOS (or MS-DOS), BIOS and the mouse driver     
MOUSE.SYS, this program includes a recommended reading list for the     
serious programmer.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1930

     Volume in drive A has no label
     Directory of A:\

    DACCESS  LIB      6301  11-25-89   9:44p
    DACCESS  TXT     20689   5-16-90   8:23p
    LINES    FOR       576   9-22-88   8:55p
    PEKPOK   FOR      1382  10-31-88  10:16p
    PRMESS   FOR       670   9-26-88   6:54p
    RAN      FOR       425  11-25-89   7:51p
    RANDU    FOR       647  11-25-89   9:17p
    RDKEY    FOR       584  10-30-88  10:45a
    READ     ME         56   5-16-90   8:11p
    RFAT     FOR      2467  11-03-88   8:14p
    RMOUSE   FOR       874  10-22-88   8:27a
    SDMESS   FOR       669   9-26-88   6:57p
    SOUND    FOR      1838  10-30-88   2:32p
    STIMER   FOR       714  10-30-88   2:34p
    TGBIOS1  FOR       341   9-22-88   8:51p
    TGDOS    FOR       403   9-22-88   7:47p
    TIMDAT   FOR      1370   9-22-88   7:43p
    TMBIOS   FOR       403   9-26-88   7:43p
    TMOUSE   FOR       410  10-22-88   8:25a
    TRAN     FOR       241  11-25-89   9:14p
    TRANDU   FOR       247  11-25-89   9:16p
    TSLOG    FOR       370  10-30-88   2:35p
    TUDOS    FOR       405   9-22-88   7:46p
    TVBIOS   FOR       449   9-26-88   7:40p
    TVBIOS1  FOR       427   9-22-88   8:48p
    TVBIOS2  FOR       872  12-24-86   7:15p
    VPP      FOR      2145  10-22-88   8:35a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       574   1-01-80   1:58a
    FILE1930 TXT      2517   7-13-90  11:38a
           30 file(s)      49104 bytes
                          103936 bytes free
