---
layout: page
title: "PC-SIG Diskette Library (Disk #1337)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1337/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1337"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCC PERSONAL C COMPILER"

    The PERSONAL C COMPILER (PCC) is a fast and compact C compiler package
    with a lot of power.
    
    PCC builds ``small model'' only: 64K of code, 64K data (which can be
    bypassed), and 64K stack executables from Kernigan and Ritchie standard
    C language source.  It comes with compiler, Assembler, linker, library
    utility, standard library, debugger, editor, and includes sample files.
    PCC is not a bare bones system; it supports overlays, has an 8087
    library, a library of supplemental screen I/O routines, and a special
    data type to break the 64K limit.  The documentation is indexed, very
    complete and is a good learning tool for the beginning C programmer.
    
    Most importantly, PCC produces small and efficient code very quickly,
    and even though it is not a fancy ``optimizing'' compiler with lots of
    bells and whistles, it's all a true programmer really needs.
    
    NOTE:  The librarian and the Xarray memory capability are
    not included with shareware version.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1337.TXT

{% raw %}
```
Disk No: 1337
Program Title:  PERSONAL C COMPILER version 1.2B
PC-SIG version: 1

The PERSONAL C COMPILER (PCC) is a fast and compact C compiler package
with a lot of power.

PCC builds "small model" only: 64K of code, 64K data (which can be
bypassed), and 64K stack executables from Kernigan and Ritchie standard
C language source.  It comes with compiler, Assembler, linker, library
utility, standard library, debugger, editor, and includes sample files.
PCC is not a bare bones system; it supports overlays, has an 8087
library, a library of supplemental screen I/O routines, and a special
data type to break the 64K limit.  The documentation is indexed, very
complete and is a good learning tool for the beginning C programmer.

Most importantly, PCC produces small and efficient code very quickly,
and even though it is not a fancy "optimizing" compiler with lots of
bells and whistles, it's all a true programmer really needs.

Program Limitations:  The librarian and the Xarray memory capability are
not included with shareware version.

Usage:  Programming.

Special Requirements:  The C programming language.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00 ($15.00 for students).

File Descriptions:

PKXARC   COM  Unarchiving program.
PCC12B   ARC  Archived file containing files listed below
-------  ---  Programs
BUF128   A    Source code for 128 byte type-ahead TSR.
BUGS!    EXE  Arcade game (use 'BUGS!   c' for color displays).
DUMP     C    Source code for hex file display utility.
EXEC     O    The Exec() and Chain() functions.
LATER    C    Source code for a file modification date checking program.
LIFE     C    Source code for the game of Life.
MATH     H    Include file for the Standard Math package.
PC2      EXE  The second pass of the C compiler.
PCC      DOC  PCC Documentation.
PCC      EXE  The first pass of the C compiler.
PCC7     S    The standard C function library with 8087 support.
PCCA     EXE  The assembler and third pass of the C compiler.
PCCL     EXE  The object file linker.
PCCL     EXE  The object file linker.
PCCS     S    The standard C function library with software
              floating-point support.
PCIO     A    Source code for the PC screen functions.
RAM      COM  RAM Disk driver for DOS 2.0 and later operating systems.
SETJMP   H    Include file for the setjmp()/longjmp() functions.
STDIO    H    Include file for the Standard I/O package.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PCC.DOC

{% raw %}
```



                               Personal C Compiler

                                    PCC 1.2b 


                         A Product of C WARE CORPORATION

                      Copyright (c) 1988 C WARE CORPORATION
                               All Rights Reserved

        PCC is a fully operational and tested C Compiler.  This is NOT 
        cripple-ware.  As a reward for registration, you will receive a 
        disk with several utilities to enhance the compiler:

        1. Clist -     reads C source files and produces a listing file 
                       with a symbol cross-reference.

        2. Lib88 -     object code librarian.  Reads object files and 
                       other library files and produces library files.

        3. Profile -   C program execution profiler.  Monitors program 
                       execution and shows where time is spent in the 
                       program.

        4. Xarray -    A library of memory access functions to use the 
                       entire 640K RAM space.  With source.

        Registered users are also eligible to purchase several useful 
        utilities to further enhance the capabilities of the compiler.  


        1. The Legal Stuff

        This version of the documentation, software and copyright 
        supersede all previous versions of PCC.

        PCC software copyright (C) 1988 by Mark DeSmet and C WARE
        CORPORATION. All rights reserved.

        This document copyright (C) 1988 C WARE CORPORATION.  All rights 
        reserved.

        Specifications subject to change without notice.

        Most of the hardware names in this manual are trademarks or trade 
        names of specific manufactures.

        Legal Stuff                                         Page 2


        1.1. License

        This PCC is NOT public domain or free software, but is being 
        distributed as "shareware".

        PCC is copyright (C) 1988 by Mark DeSmet and C WARE CORPORATION.

        Non-registered users of this software are granted a limited 
        license to make an evaluation copy for trial use on a private, 
        non-commercial basis, for the express purpose of determining 
        whether PCC is suitable for their needs.  At the end of this trial 
        period of THIRTY DAYS you MUST either register your copy or 
        discontinue using PCC.

        A PCC registration entitles you to use the program on any and all 
        computers available to you, as long as you use the program on 
        only one computer at a time with the following restriction:

        All users are granted a limited license to copy PCC only for the 
        trial use of others.  This license does NOT include distribution 
        or copying of this software package:

             1. In connection with any other product or service except as 
                noted below.
             2. For general use within a company or institution.
             3. Distribution in modified form. This license information 
                MUST be included, along with the full PCC documentation 
                and all PCC files as released by C WARE CORPORATION.

        Operators of electronic bulletin board systems (SYSOPS) are 
        encouraged to post PCC for downloading by users.

        If you are the distributor of a public domain or user-supported 
        software library, you may be distribute copies of PCC. A fee,
        not to exceed $10.00 per disk, may be charged for copy service, 
        handling and materials.  The files MUST be distributed in 
        "archived" form so users may be able to adequately verify the 
        integrity of the files.

        The additional utilities available to registered users shall NOT 
        be distributed by any individual or organization other than C 
        WARE CORPORATION.

        1.2. Support Policy

        The nature of this product and the pricing makes it necessary for 
        us to NOT provide telephone support for users except as noted 
        in the pricing schedule below.  We will have to refuse to answer 
        questions unless you have registered the product AND paid for 
        phone support.  Every attempt will be made to address questions 
        left on our support BBS in an appropriate and timely manner. 
        However, this support will be on a when-time-is-available basis 
        and C WARE CORPORATION is NOT responsible to provide support in 
        any form for non-registered or registered users.  Information 
        will be posted on our support BBS when it becomes available as 

        Legal Stuff                                         Page 3


        well as bug fixes or patches.  Upgrades to PCC will be made when 
        appropriate to improve, enhance or correct the product.

        1.3. DISCLAIMER


        The author has taken due care in preparing this manual and the 
        programs and data on the electronic media accompanying this book 
        including research, development, and testing to ascertain their 
        effectiveness.  The author and the publisher make no expressed or 
        implied warranty of any kind with regard to these programs nor 
        the supplemental documentation in this book.  In no event shall 
        the author or C Ware Corporation be liable for incidental or 
        consequential damages in connection with or arising out of the 
        furnishing, performance or use of any of these programs.


        1.4. FOREIGN RESHIPMENT LIABILITY

        THIS LICENSE AGREEMENT IS EXPRESSLY MADE SUBJECT TO ANY LAWS, 
        REGULATIONS, ORDERS OR OTHER RESTRICTIONS ON THE EXPORT FROM THE 
        UNITED STATES OF AMERICA OF SOFTWARE, OR OF INFORMATION ABOUT 
        SUCH SOFTWARE, WHICH MAY BE IMPOSED FROM TIME TO TIME BY THE 
        GOVERNMENT OF THE UNITED STATES OF AMERICA.  NOTWITHSTANDING 
        ANYTHING CONTAINED IN THIS AGREEMENT TO THE CONTRARY, YOU MAY NOT 
        EXPORT, DIRECTLY OR INDIRECTLY, ANY SUCH SOFTWARE OR INFORMATION 
        PERTAINING THERETO TO ANY COUNTRY FOR WHICH SUCH GOVERNMENT OR 
        AGENCY THEREOF REQUIRES AN EXPORT LICENSE OR OTHER SUCH 
        GOVERNMENT APPROVAL AT THE TIME OF EXPORT WITHOUT FIRST OBTAINING 
        SUCH LICENSE OR APPROVAL.

        1.5. LIMITED WARRANTY                                                           

        PCC IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER 
        EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
        WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR 
        PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF 
        PCC IS WITH YOU.

        SOME STATES DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO 
        THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.  THIS WARRANTY GIVES 
        YOU SPECIFIC LEGAL RIGHTS AND YOU MAY ALSO HAVE OTHER RIGHTS 
        WHICH VARY FROM STATE TO STATE.

        C Ware does not warrant that operation of PCC will be 
        uninterrupted or error free.

        1.6. LIMITATIONS OF REMEDIES

        If C Ware is unable to deliver a copy of PCC that is 
        satisfactory, then you may obtain a full refund by returning all 
        PCC materials and documantation within thirty days of delivery to 
        you as evidenced by a copy of your receipt.

        Legal Stuff                                         Page 4


        This refund is the entire extent of C Ware's liability and your 
        exclusive remedy.

        IN NO EVENT WILL C WARE BE LIABLE TO YOU FOR ANY DAMAGES, 
        INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR 
        CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE 
        PCC EVEN IF C WARE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH 
        DAMAGES, OR FOR ANY CLAIM BY ANY OTHER PARTY.

        SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY 
        FOR INCIDENTAL OR CONSEQUENTAIL DAMAGES SO THE ABOVE LIMITATION 
        OR EXCLUSION MAY NOT APPLY TO YOU.

        1.7. General

        This Agreement will be governed by the laws of the State of 
        California.

        Should you have any questions concerning this Agreement, you may 
        write to C Ware Corporation, PO Box 428, Paso Robles, CA 93447.

        YOUR CONTINUED USE OF PCC BEYOND THE THIRTY DAY TRIAL PERIOD, 
        WITH OR WITHOUT REGISTRATION, ACKNOWLEDGES THAT YOU HAVE READ 
        THIS AGREEMENT, UNDERSTAND IT AND AGREE TO BE BOUND BY ITS TERMS 
        AND CONDITIONS.  YOU FURTHER AGREE THAT IT IS THE COMPLETE AND 
        EXCLUSIVE AGREEMENT BETWEEN US WHICH SUPERSEDES ANY PROPOSAL OR 
        PRIOR AGREEMENT, ORAL OR WRITTEN, ANY ANY OTHER COMMUNICATIONS 
        BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.

        1.8. TRADEMARKS

        MS-DOS is a registered trademark of Microsoft Corporation.
        PC-DOS is a registered trademark of IBM Corporation.
        Compaq is a registered trademark of Compaq Inc.
        Tandy 1000 is a registered trademark of Tandy Corporation.


        1.9. ORDERING INFORMATION

        A PCC registration licenses you to use the product on a regular 
        basis.  Users need register only one version of PCC. Registration 
        includes licensed use of all upgrades.  Registered users can 
        always get the most current version of the program at a nominal 
        fee ($8.00 as of this writing) by calling or writing C WARE 
        CORPORATION.  The latest version will also be available on our 
        support BBS at (805)-239-4834 and the below listed "official 
        distribution BBSs":

        1. PYSMATIC BBS, Sunnyvale, CA  (408)-992-0372 



        If you purchased PCC through a distributor of public domain or 
        user-supported software, you did NOT pay for the license.  The 
        fee ($10.00 max per disk) was to cover the costs of copying the 

        Legal Stuff                                         Page 5


        disk(s), the media and handling overhead.  You paid for the 
        vendors service.

        Registration for PCC costs $30 and assumes you have already 
        received a copy of the program from whatever source.  We will 
        also send you the next major upgrade of PCC when it is released OR 
        if you ask when you register, we will send you a certified copy of
        the current version of the program, and you must download or send us 
        $8.00 to get the next major upgrade. 

        1.10. Use by Educational Institutions

        Educational institutions wishing to use PCC for courses involving 
        C MUST obtain a site license.  State or city operated 
        institutions shall pay $10.00 per student using the program.  
        Private or commercial institutions shall pay $15.00 per student 
        using the program.  All reproduction of documentation and media 
        shall be done by the licensed site institution.  The additional 
        utilities offered to registered users may be purchased at 66% off 
        for state or city operated institutions and 50% off for private 
        or commercial institutions.    
              
        Students using the program via this method are NOT registered 
        users and must register their copy as per the licensing agreement 
        for an indivdual if they use the program after completion or 
        termination of the course.

        1.11. Corporate, Business, Government and Commercial Use

        Corporate, business, government or other commercial uses of PCC are
        PROHIBITED.  We offer an excellent C Development Package for such 
        commercial users.  Please contact C WARE CORPORATION directly for 
        information and pricing. The intent of PCC is to provide a low 
        cost tool for persons interested in learning C or using C 
        for non-commercial personal use.  If you find you wish to sell a
        program developed with PCC, you must do the following:

             1. The program and documentaion must prominently indicate 
                the code was compiled with PCC, copyright 1988 by 
                Mark DeSmet and C Ware Corporation.

             2. Get written permission ( which is no big problem ) by 
                sending us a copy of the program as it is to be sold or 
                distributed.  A letter granting permission will be sent 
                promptly, if your package meets the requirements of 
                paragraph 1 above.


                ALL PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE.

        Legal Stuff                                         Page 6


        You can also register/order your copy of PCC by phone, using your 
        MasterCard or VISA.  Phone (805)-239-4620, 9:00 - 4:00 p.m. PST 
        or PDT only.  Minimum credit card order is $10.

        Sorry, C.O.D. orders will NOT be accepted.

        ORDERS OUTSIDE THE US: Please use your Mastercard or VISA when 
        ordering,  or send checks drawn on US banks in US dollars.  All 
        checks must have US bank magnetic routing symbols.  Please 
        include an additional $5 to cover postage on orders to be sent 
        outside of the US.

        Full-time students can apply a 10% discount on all prices. You 
        MUST include your a photo-copy of your most recent registration 
        slip and student ID card.

        PRICE SCHEDULE AND INFORMATION ( November 1988 )

             1. Individual Registration              -        $30.00
                - Copy of program sent if requested
                - Utility package sent automatically

           *** Below items only available to registered users. ***

             2. Editor                               -        $15.00
                - With object code

             3. Debugger                             -        $15.00

             4. MS DOS Linker compatability utility  -        $ 8.00

             5. Special utilities package            -        $ 8.00

             6. Five phone support calls (5-min).    -        $15.00
                - Total 25 minutes of help time

         

        NOTES:
          
             1. The above prices include CA sales tax.

             2. Sorry, we do not have a printed manual available.

             3. For fastest service please send Money Order or use Visa 
                or MasterCharge.  We must wait 10 days for personal 
                checks to clear.

             4. Please allow 30 days for delivery.  Money order, Visa and 
                MasterCharge should ship in two(2) working days but 
                things do get hectic at times.  Drop us a line if you 
                haven't received your order in 15 days.

             5. Please use the form in appendix C to order.

        Preface                                             Page 7


        2. Preface


        The PCC package would not exist but for the tireless work of 
        L. B. Neal.  He has called us, badgered us, sent us manuals and 
        materials, jumped up and down about the virtues of Shareware, and 
        in general demanded that we create the personal C compiler, PCC.

        The PCC package owes everything else to the incredible work of 
        Mark DeSmet.  At a time when most programmers couldn't spell C, 
        Mark wrote a compiler, assembler, linker and library for not one 
        operating system, but two.  The fact that it is still the fastest 
        C compiler in the current benchmarks further attests to Mark's 
        skills.

        This manual describes the C Ware Personal C Compiler for the IBM-
        PC personal computer and the other MS-DOS based personal 
        computers.  It is based on the DeSmet C Development Package.  If 
        you are unfamiliar with the C language or UNIX, the book The C 
        Programming Language  by Brian Kernighan and Dennis Ritchie is 
        available.  If you plan on coding in assembly language, it is 
        advisable to get a manual on the Intel 8086 microprocessor.   
        Books such as Intel's ASM86 Language Reference Manual or The 8086 
        Family User's Guide are good choices.  These manuals fully 
        describe the architecture and the instruction set of the 
        8086/8088 family of microprocessors.

        An Introduction to PCC                              Page 8


        3. An Introduction To PCC
            
        Now that we made it through all of the formalities lets take a 
        look at what PCC contains.

             PCC is a fast powerful C compiler.  It is fully compatable 
             with code written for DeSmet Ver: 2.51. Code for earlier 
             versions of DeSmet should work with minimal adjustment.

             This compiler is NOT full of bells and whistles it just 
             makes fast tight compact programs.

             Some of the terms and conventions of PCC are a bit different 
             from those in books on the C language, so we will quickly run
             through the terms used in PCC.DOC.

             TEXT OR BOOK NAME        PCC NAME         COMMENT
             -----------------        --------         -------
             LINK                     PCCL             Builds .EXE file

             filename.obj             filename.o       Basis for .EXE file

             filename.asm             filename.a       Assembly source file

             MASM or ASM              PCCA             8088/8086 Assembler

             CC or CPP                PCC              Main Compiler 
                                                       (First Pass)
             CC1                      PC2              Compiler Second Pass

        3.1. Using Text, Book, Magazine or Download source code

        There are many C compilers.  There are also many variations of
        interpretation of what C syntax should be.  And then there are
        the extensions to support I/O, machine specific functions, etc.
        Source NOT written for PCC or DeSmet Ver: 2.51 may need minor
        adjustments to be accepted by the PCC compiler and run properly.

        In fact, finding, compiling and modifying source code is an 
        excellent way to learn any language or compiler.  Just be careful 
        not to adopt bad habits from exposure to poorly written code.


        *****************************************************************

        CAUTION: PCC will accept any valid code you supply to it, as will 
        any compiler.  The code may well be valid, but the result of the 
        code could be dangerous to the health and safety of your 
        computer, monitor or contents of your Hard Drive or floppies
        ( and it WILL be at one time or another ).  Guard and maintain 
        up-to-date copies of all files on your system.  If your program or 
        the compiler starts to act erraticly: i.e. screen goes blank, funny 

        An Introduction to PCC                              Page 9


        video display, noises from hardware, or any strange unexpected 
        actions., IMMEDIATELY TURN OFF THE POWER to the computer and 
        investigate carefully after you have the system rebooted.

        ******************************************************************                   

        THE REST IS UP TO YOU

        C is a powerful and useful language, we hope you find PCC a help 
        to your learning and use of the C language.

        Your comments and suggestions on how to improve our product are 
        welcome.

        Enjoy your adventure into the land of C and we hope PCC helps you
        in your computing.

        3.2. Getting Started

        First things first.  Copy all of the files from the distribution 
        disk onto a set of working floppy diskettes or hard disk.  The 
        package is not copy-protected so the MS-DOS copy command can be 
        used to copy the files.  The package is distributed on a single 
        double-sided (360KB) diskette.  The distribution diskette should 
        never be used, it should be kept as the backup copy of PCC.

        Lets make sure the compiler files are intact.  A source program 
        called DUMP.C has been provided in this package.  Place the files 
        from PCC12B.ARC in a directory of your choice or on floppy disks 
        per the later documentation.  To compile DUMP.C enter

             >PCC DUMP

        This will compile DUMP.C into an object module DUMP.O.  To link 
        DUMP.O with the required library functions in PCCS.S enter

             >PCCL DUMP

        This will produce a file DUMP.EXE.  To run DUMP.EXE enter

             >DUMP DUMP.C

        This will produce a hex and ascii dump of DUMP.C on your screen.  
        If DUMP runs correctly, then the compiler should be in good 
        working order.

        3.3. PCC Files

        The package is distributed as a compressed file -- PCC.ARC -- so 
        that integrity checks may be run.  PCC.ARC contains the following 
        files:

        BUF128.A       Source code for 128 byte type-ahead TSR.
        BUGS!.EXE      Arcade game (use 'BUGS!   c' for color displays).
        DUMP.C         Source code for hex file display utility.

        An Introduction to PCC                              Page 10


        EXEC.O         The Exec() and Chain() functions.
        LATER.C        Source code for a file modification date checking 
                       program.
        LIFE.C         Source code for the game of Life.
        MATH.H         Include file for the Standard Math package.
        PC2.EXE        The second pass of the C compiler.
        PCC.DOC        This file
        PCC.EXE        The first pass of the C compiler.
        PCC7.S         The standard C function library with 8087 support.  
                       To use this library, rename it to PCCS.S.
        PCCA.EXE       The assembler and third pass of the C compiler.
        PCCL.EXE       The object file linker.
        PCCS.S         The standard C function library with software 
                       floating-point support.
        PCIO.A         Source code for the PC screen functions.
        RAM.COM        RAM Disk driver for DOS 2.0 and later operating 
                       systems.
        SETJMP.H       Include file for the setjmp()/longjmp() functions.
        STDIO.H        Include file for the Standard I/O package.

        3.4. Basic System

        The minimum files you need from PCC.ARC are PCC.EXE, PC2.EXE, 
        PCCA.EXE, PCCL.EXE and PCCS.S.  The files STDIO.H and MATH.H 
        contain useful declarations.

        If you are developing in a directory other than the one that 
        contains the PCC files, be sure to set the PATH environment 
        variable to include the PCC directory.

        3.5. Setting Up DOS 2.xx, 3.xx, ...

        For systems utilizing DOS 2.x or later versions of the operating 
        systems, make sure that the ASCII text file CONFIG.SYS exists on 
        your boot disk.
          
        The file must contain the line:

                FILES=20

        since PCC supports 20 open files Q stdin, stdout, stderr, and 17 
        other files.  The default number of eight is insufficient for the 
        PCCL program.

        If there is enough memory available, add the line:

                BUFFERS=20

        to improve file performance in the operating system.  512 bytes 
        are allocated for each buffer specified.

        An Introduction to PCC                              Page 11


        3.6. RAM DISK

        If you have a system with more than 256 kilobytes of memory, then 
        the Ram Disk driver RAM.COM can be used to create an  extremely 
        fast disk.  To add a Ram Disk, copy the RAM.COM file from the 
        distribution diskette to the system disk and add the line:

                DEVICE=RAM.COM   n

        to the CONFIG.SYS file.  The parameter, n, is a decimal number 
        from 32 to 650 indicating the size of the Ram Disk.  The value is 
        specified in units of one kilobyte (1024).  

        Re-boot the system to install the Ram Disk.  The drive letter 
        used for this 'disk drive' is dependent on the configuration of 
        the system.  DOS will install the Ram Disk at the first free 
        device "slot".  For an IBM PC with two floppies, this will 
        probably be drive C:.  For an XT, it will probably be drive D:.  
        Sanyo 550/5 reserves the first four slots for its floppies, so 
        the Ram Disk is drive E:.  To find where DOS has installed the 
        Ram Disk, use

                chkdsk x:

        where x takes on the values c, d, ....  You will get either a 
        disk error, or a return showing the size of the Ram Disk.  Once 
        you find it, the Ram Disk will always be the same until you add 
        other device drivers before it in the CONFIG.SYS file.

        3.7. Completion Codes

        The PCC, PCCA, and PCCL programs set the completion code to:

                 zero  if no warnings or errors occurred,
                 one  if warnings were issued, and
                 two if errors occurred.

        Batch files can take advantage of these values to stop execution 
        or otherwise handle these exceptional cases.

        The following batch file will stop on a PCC or PCCL error:

             PCC %1
             if errorlevel 1 goto stop
             PCCL %1
             if errorlevel 1 goto stop
             %1
             :stop
        More complicated development situations can be handled with the 
        program LATER which is supplied in source form in the file 
        LATER.C.  LATER takes a list of filenames as arguments.  It sets 
        the errorlevel to one if the last file does not exist or if the 
        last file has an earlier modification date than any other file in 
        the list.  It can only be used on systems with a battery backup 
        clock or where users are careful about setting the date and time 

        An Introduction to PCC                              Page 12


        when the system is brought up.  Assume a program is composed of 
        the files moda.c, modb.c, modc.c and the include file mod.h.  The 
        following .BAT file can be used to regenerate the program 
        whenever a module changes:

             later moda.c mod.h moda.o
                  if errorlevel 1 PCC moda
                       if errorlevel 1 goto stop
             later modb.c mod.h modb.o
                  if errorlevel 1 PCC modb
                       if errorlevel 1 goto stop
             later modc.c mod.h modc.o
                  if errorlevel 1 PCC modc
                       if errorlevel 1 goto stop
             later moda.o modb.o modc.o mod.exe
                  if errorlevel 1 PCCL moda modb modc -omod
             :stop

        This provides a service similar to the UNIX MAKE program.  Only 
        those files that need to be compiled will be compiled.

        PCC -- The Personal C Compiler                      Page 13


        4. PCC -- The Personal C Compiler

        4.1. Introduction

        PCC is the C compiler for the 8088/8086 family of 
        microprocessors.  It accepts C source programs as input and 
        produces object files. The model employed by the compiler 
        efficiently utilizes the 8088/8086 architecture but limits a 
        program to 64KB code and 64KB of data.


        Invocation

           PCC <filename> [options]

        <filename> is the name of the file containing the C source. If it 
                   does not include an extension, the extension '.C' is 
                   assumed.

        Options: The case of the option is not significant. Each option 
        should be separated from other options by blanks.  Options may be 
        preceded with the dash (-) character.

        A          - assembly output.  This option indicates that the 
                   compiler should produce an assembly language source 
                   file instead of an object file.  The name of the 
                   assembly language file will be the same as the name of 
                   the source file but will have the extension '.A'.

        D<name>    - compiler drive specification.  The compiler assumes 
                   that the files PC2.EXE and PCCA.EXE are in the 
                   default directory on the current drive.  This option 
                   is used to inform the compiler that the files are on a 
                   different drive.  For example, if the compiler is on 
                   drive 'M', then the option 'DM' is needed.

                   Under MS-DOS 2.0 and later versions of the operating 
                   system, this option is rarely  needed as the system 
                   PATH variable is also used to find the other passes of 
                   the compiler.

        I<name>    - include path name.  This option overrides the 
                   default drive/directory for files included with the 
                   #include control. The directory name must end with a 
                   trailing backslash (\) character  (e.g. -
                   ic:\src\include\).  See section 4.4.1 for #include 
                   details.

        N<defname>=<defvalue> - specify #define  name and value.  Used to 
                   set debugging switches or constant values without 
                   editing the file.  This option is equivalent to

                        #define defname defvalue

                   at the begining of the program.

        PCC -- The Personal C Compiler                      Page 14


                   To set <defname> to one, enter n<defname>, which is 
                   equivalent to

                        #define defname 1

                   Spaces are not allowed.

        O<filename> - output filename.  The compiler will produce an 
                   object file with the specified name.  If the name 
                   lacks an extension, the extension '.O' will be added.  
                   The default object name is the same as the source name 
                   with the extension of '.O'.

        T<drive>   - specifies the drive that the compiler should use for 
                   its temporary files.  If not specified, the compiler 
                   will build its temporary files on the default drive.  
                   If this drive is close to being full, the 'T' option 
                   should be used to change the drive for the 
                   temporaries.  Also, if the RAM Disk has been 
                   installed, placing the temporary files there will 
                   drastically cut the amount of time needed to compile a 
                   program.


        4.2. Examples

        PCC blip
                   compiles the file named blip.c.  The object file will 
                   be named blip.o.

        m:PCC b:blip.ccc tm dm

                   runs the compiler from drive M on the file b:blip.ccc.  
                   Temporary files are also written on drive M.  Note the 
                   use of the D option to indicate the location of the 
                   other passes of the compiler.  The object file will 
                   also be named blip.o.

        PCC blip -ic:\inc\ -a -nNewVersion -nNYear=1985

                   compiles the file named blip.c.  Include files are 
                   taken from the directory c:\inc\.  An assembly 
                   language file is generated named blip.a.  The 'N' 
                   options are equivalent to adding

                        #define NewVersion 1
                        #define NYear       1985

                   to the start of blip.c

        PCC -- The Personal C Compiler                      Page 15


        4.3. The C Language

        PCC compiles C programs that conform to the standard definition 
        of the C language as described in the book The C Programming 
        Language  by Brian W. Kernighan and Dennis M. Ritchie.  The 
        following documentation describes the implementation.

        4.3.1. Preprocessor directives

        #define    defines a macro with or without parameters. 

        #undef, #ifdef and #ifndef - tests the status of the #defined 
                   macros 

        #include   includes other files into the program. #include's 
                   can be nested to a maximum depth of 3.

                   #include "filename" will search the default directory 
                   for the file filename.  #include <filename> will first 
                   search the default directory for filename.  If the 
                   file was not found, the environment (see DOS 2.X/3.X 
                   SET command) is searched for the variable INCLUDE .  
                   If the variable is found, it is assumed to contain a 
                   set of directory prefixes separated by semi-colons.  
                   For example, if INCLUDE is set as follows
                
                        C>set include=c:\;c:\usr\include\

                   then the line

                        #include <world.h>

                   would cause PCC to search for

                        world.h
                        c:\world.h
                        c:\usr\include\world.h

        #if, #else, #endif - conditionally includes or excludes source 
                   statements.

        4.3.2. Data Types

        char       Unsigned byte with a range of 0 to 255.

        int
        short      Signed Integer with a range of -32768 to 32767.

        unsigned   Unsigned integer with a range of 0 to 65535.

        long       Signed integer with a range of -2147483648 to 
                   2147483647.

        float      Four byte floating point value.  A float number has 
                   about 7 digits of precision and has a range of about 

        PCC -- The Personal C Compiler                      Page 16


                   1.E-36 to 1.E+36. The floating point formats are 
                   defined by the IEEE floating-point standard.

        double     Eight byte floating point value.  A double number has 
                   about 13 digits of precision and a range of about 1.E-
                   303 to 1.E+303.

        (pointer)  pointers are two bytes, limiting total data space to 
                   64KB.

        To take advantage of the 8088/8086 instruction set, expressions 
        involving only char  types are not coerced to int before 
        evaluation.  The sum of a char equal to 255 and a char equal to 1 
        is 0 rather than 256.  Constants are considered to be int values 
        so that constant plus char is a two byte integer operation.

        4.4. Extensions

        The UNIX Version 7 extensions -- enumerated types, extended 
        member name-space, and structure assignment are fully supported.

        Enumerated types provide a convenient method of declaring an 
        ordered set of named constants.  Values start with zero, and may 
        be reassigned with a name = value expression.  The same value may 
        be assigned to several names.  For example

                enum color {red, blue=4, green} ca, *cp;
                enum color cb;
                if(ca == red)
                        cb = green;
        is equivalent to

                #define red   0
                #define blue  4
                #define green 5
                int ca, *cp;
                int cb;
                if(ca == red)
                        cb = green;


        Extended member name-space relaxes the K&R requirement that if a 
        member name appeared in more than one structure or union, then it 
        had to have the same data type and offset in every appearance.  
        Now, the only restriction is that the member name must be unique 
        within the structure or union.  If a member name is used that is 
        not in the referenced structure, the warning

                member not in structure

        is issued.  As a loophole, a pointer to char may be used as an 

        PCC -- The Personal C Compiler                      Page 17


        anonymous pointer to any structure.
                struct {int i, j, k;} zip;
                struct {int j; char i;} zap, *zp;
                char *cp;

                zip.i = 1;      /* OK */
                zap.i = 1;      /* OK */
                zap.k = 1;      /* WARNING */
                zp->i = 1;      /* OK */
                zp->k = 1;      /* WARNING */
                cp->k = 1;      /* OK, ANONYMOUS */

        Structures can be assigned, used as parameters, or returned from 
        a function.  CAUTION: this may create problems with existing 
        programs because previous versions of PCC converted the name of a 
        structure in a parameter list to a pointer to that structure, 
        while the current release pushes the entire structure.  To 
        highlight this potential problem, PCC will issue the following 
        warning

                structure assignment

        when structures are passed by value, and the warning

                returns structure

        when a function returns a structure.  These warnings will be 
        removed in a future release.
                
                struct z {int i, j;} zip, zap, zxax();
                main(){
                        zip = zap;  /* structure assignment */
                        zap = zmax(zip, zap);
                        }
                struct z zmax(a,b) /* func returns struct */
                        struct z a, b; {
                        if(a.i > b.i)
                                return a;
                        return b;
                        }

        Variable names are significant to 31 characters instead of 8.

        A #asm directive has been included to allow in-line assembly 
        language code for time critical applications.  All lines 
        following a line starting with #asm are  passed through to the 
        assembler.  The next line beginning with the "#' character, ends 
        the in-line assembly code.

        PCC -- The Personal C Compiler                      Page 18


        For example:

                _move(count, src, tar)
                int count; char *src, *tar; {
                #asm
                        MOV             CX,[BP+4] ;count
                        MOV             SI,[BP+6] ;src
                        MOV             DI,[BP+8] ;dst
                        MOV             AX,DS
                        MOV             ES,AX
                        CLD
                        REP MOVSB
                #
                        }

        4.4.1. Forward References

        PCC is effectively a one pass compiler so forward references will 
        not work.  The following program:

              main() {
                  i=99;
                  }
             extern int i;

        will produce a warning that 'i' is undefined and is assumed to be  
        a local variable named 'i'.  The global variable 'i' will not be 
        changed.

        Structure tags must be defined before being referenced.  The only 
        exception is pointers, so that legal structure declarations 
        include structures of the form:


            struct a {
                struct b *x;
                }

            struct b {
                struct a *y;
                }


        4.4.2. Externs

        The rules for 'extern' declarations are:

        1.   Statements that are global to the source file, like 'int 
             blip;' may be in several different files that are linked 
             together.  PCCL will allocate 2 bytes for the global 
             integer variable blip.  This is an extension to the standard 
             rule that restrict global declarations to a single file and 
             require all the other declarations to be extern.

        PCC -- The Personal C Compiler                      Page 19


        2.   A declaration that includes the keyword 'extern' may not 
             include initializers and does not allocate any memory.  Thus 
             a variable so declared must be declared somewhere else 
             without the 'extern' keyword in order to reserve memory for 
             the variable.  For example, if a file contains the 
             declaration extern int blip   then some other file must 
             contain the declaration   int blip to actually allocate 
             storage.  If this is not done, the binder will complain 
             about a reference to the unresolved symbol blip.  It is 
             permissible to have both an 'extern' and non-'extern' 
             declaration in a single file.  For example,


                extern int blip;
                int blip;

             is valid.

        To create include files containing data declarations -- if the 
        variable is not initialized (which means it will be initialized 
        with zeros) either include the declaration:

                int blip;

        in every file or include the declaration:

                extern int blip;

        in every file and add the declaration:

                int blip;

        to one of the files to actually allocate the storage.

        If the variable needs initialization, the second approach must be 
        used.  Include the declaration:

                extern int blip;

        in the include file.  Initialize the value in only one file:

                int blip = 1985;

        These rules are about the same as Version 7 UNIX.  Extern rules 
        are an area of C that are currently controversial.  System V UNIX 
        tried to tighten up the rules but enough people complained that 
        5.2 is back to normal.

        PCC -- The Personal C Compiler                      Page 20


        4.4.3. Macros

        Macro arguments are not replaced within a quoted string.   For 
        example, in The C Puzzle Book by Alan Feuer the macros in 
        <defs.h> use the following construct to customize printf() calls.

                #define PR(fmt,v)printf("value=%fmt%t",v);

        This does not work with the PCC compiler.  Instead add the 
        following defines to <defs.h>:

                #define D "value = %d%t"
                #define F "value = %f%t"
                #define C "value = %c%t"
                #define G "value = %g%t"

        and change the PR define to

                #define PR(fmt,v)printf(fmt,(v));

        Statements of the type

            PRINT1(d,x);

        must be changed to

            PRINT1(D,x);

        in the programs.  Lower case D, F, C, and G's would allow the 
        programs to remain unchanged but variables c and g are used in 
        structure one and variable g is used in structures two and three.


        4.4.4. Strings

        Literal character strings delimited by quotes ('\"') cannot 
        contain the NUL character ('\0').  The compiler terminates the 
        string at the NUL character, even though it checks that the 
        string has a terminating quote character.  If you want NUL 
        characters in the string for initialization purposes, use an 
        array assignment.

                char init1[]="abcdef@xyz@012", *ip=init1;
                
                while(ip = index(ip, '@'))
                        *ip = '\0';

        The PCCA 8088 Assembler                            Page 21


        5. The PCCA 8088 Assembler

        5.1. Introduction

        PCCA is the 8088/8086 assembler.  It reads assembly language 
        source files and produces linkable object files.

        5.2. Invocation

            PCCA <filename> [ options ]

        <filename> is the name of the assembly language source file.  If 
                   it does not include an extension Q the extension '.A' 
                   is assumed.

        Options: The case of the option is not significant. Each option 
        should be separated from other options by blanks.  Options may be 
        preceded with the dash (-) character.

        L[ <filename> ] -- The assembler will produce a listing from the 
                   assembly language input.  This listing includes the 
                   hex-values generated by the assembler as well as line 
                   numbers and pagination.  If no name is specified, then 
                   the name of the source file with the extension '.L' is 
                   used.  If the specified file does not have an 
                   extension, '.L' will be used.  Otherwise the listing 
                   is written to the specified file.  To generate a 
                   listing on the printer, use '-LPRN:'.

        O<filename> The assembler will produce an object file with the 
                   specified name.  If the name lacks an extension, then 
                   the extension '.O' will be appended to the name.  The 
                   default object file name is the name of the source 
                   file with the extension changed to '.O'.

        T<drive>   The 'T' option specifies the drive where the assembler 
                   temporary files will be created.  If a RAM Disk is 
                   available, redirecting temporary files to that drive 
                   will greatly speed development.  The assembler 
                   normally creates its temporary files on the default 
                   drive/directory.

        Pnn        Specifies page length, in lines.  The default is 66.

        Wnn        Specifies page width, in characters, for the list 
                   file. The value nn must be a number from 60 to 132.  
                   The default is 80.

        5.3. Example


        PCCA blip
                   assembles the file named blip.a and produces an object 
                   file named blip.o.

        The PCCA 8088 Assembler                            Page 22


        M:PCCA blip.asm -Ob:blip Lblip.lst

                   runs the assembler from drive M: on the file named 
                   blip.asm.  The output is an object file named blip.o 
                   on drive B: and a listing file named blip.lst on the 
                   default drive.

        PCCA blip.a TM -oa:blip.o -lb:blip.lst

                   assembles the file named blip.a.  Temporary files are 
                   created on drive M:.  The output of the assembler is 
                   placed on drive A: in the file blip.o.  A listing file 
                   is generated and written to drive B: in the file 
                   blip.lst

        The PCCL Object File Linker                        Page 23


        6. The PCCL Object File Linker

        6.1. Introduction

        PCCL is the program that links together object and library  
        modules and forms an executable program.  For very long command 
        lines, see the -f option.


        6.2. Invocation

                PCCL <filename> <filename> ...  [options]

        <filename> A sequence of filenames separated by blanks. The 
                   filenames should be the names of object (.O) or 
                   library (.S) files.  If a filename does not have an 
                   extension, '.O' is assumed.  PCCL automatically looks 
                   for the supplied library PCCS.S so its name should 
                   not be included in the list of filenames.

        Options: All options may be in upper or lower case.  Options must 
        be separated by  blanks and preceded by a hyphen to differentiate 
        them from <filename>s.  Note that this is different from other 
        commands where the hyphen is optional.

        -A         The assembler option keeps PCCL from generating the C 
                   initialization code.  Instead, execution begins at the 
                   beginning of the code rather than starting at the 
                   main_ public label.  ARGC and ARGV are not calculated 
                   and the stack is not set up.  Uninitialized variables 
                   are not filled with zero.  Library functions such as 
                   creat() and open() cannot be used as they depend on 
                   the zero initialization.  The 'A' and 'S' options are 
                   useful for a few cases but caution should be exercised 
                   in their use.

        -F<filename> identifies a file containing <filename>s and options 
                   to be used by PCCL.  This is used for very long lists 
                   of filenames and options.

        -L<name>   specifies the drive/directory containing the PCCS.S 
                   standard library.  If this option is not specified, 
                   the PCCS.S file must be on the default drive.  With 
                   MS-DOS 2.0 and later versions of the operating system,  
                   the PATH system parameter is used to locate the 
                   library.

        -Mn        Indicates that the object files following this control 
                   should be collected in the memory-based overlay 
                   indicated by the value n ( 1 to 39 ).  See the 
                   description on overlays below for details on the 
                   overlay mechanism.

        -O<filename> changes the name of the output file to 
                   <filename>.EXE.  If this option is not specified, the 

        The PCCL Object File Linker                        Page 24


                   name of the first object file in the list with the 
                   .EXE extension will be used.

        -P[<filename>] Generates a sorted list of publics and offsets.  C 
                   procedures and data declared outside of procedures are  
                   automatically public (or extern)  unless explicitly 
                   declared static.  Publics with names starting with an 
                   underline '_' are not listed unless the -_ option is 
                   also specified. The optional name is the destination 
                   for the publics list.  If omitted, the publics and 
                   offsets are listed on the console.  The size of 
                   overlays, if any, will also be displayed.

        -Shhhh     specifies the stack size.  hhhh is in hex.   Normally, 
                   PCCL will set the stack size as large as possible.  
                   The '-S' option can be used to limit this size for use 
                   with exec().
         
        -Vn        This option is used to create disk-based overlays.  
                   All object files following this option, until the end 
                   of the list or another overlay option, are collected 
                   into the overlay indicated by the value n (1 to 39).  
                   See the overlay section below for details.

        -_ (underscore) PCCL normally suppresses names that start with an 
                   underscore (usually internal names) from the publics 
                   list. The underscore option restores these publics to 
                   the listing.  This option is useful when you need to 
                   see all the modules bound to your program.


        6.3. Examples



        PCCL blip
                   binds the file blip.o with PCCS.S and produces the 
                   executable file blip.exe.

        PCCL proga progb progc lib.s -p

                   binds the files proga.o, progb.o, and progc.o with the 
                   user library lib.s  and the standard I/O library, 
                   PCCS.S, into the application file proga.exe.  The 
                   map is printed on the screen.

        PCCL proga progb -V1 progc -V2 progd -Pmap -_ -Omyprog

                   binds the files proga.o, progb.o with PCCS.S and 
                   creates the executable file myprog.exe and the overlay 
                   file myprog.ov which contains two overlays consisting 
                   of the object files progc.o and prod.o.  The publics 
                   map is sent to the file named map and will also list 
                   the internal names that begin with the underline ('_') 
                   character.

        The PCCL Object File Linker                        Page 25


        6.4. Space Considerations

        A program is restricted to a maximum of 64KB of code and 64KB of 
        data plus the stack.  PCCL calculates the size of code and data 
        and will report the size of each segment (in hex) when the -P 
        option is specified.  PCCL cannot calculate the actual stack 
        requirements.  If the 'stack' and 'locals' size reported by PCCL 
        seems small, the actual stack requirements should be calculated 
        by hand to make sure there is enough space.  The actual 
        requirements are the worst case of four bytes per call plus the 
        size of locals (including parameters) for all active procedures 
        plus about 500 bytes for the Operating System calls.  In 
        practice, 2KB plus the size of the local arrays simultaneously 
        active should be sufficient.

        If PCCL reports that the code limit is exceeded, look in the 
        publics map for the scanf() and printf() routines.  These are 
        relatively large routines (around 2KB each) and also link in the 
        floating-point routines.  Eliminating the use of these routines 
        can result in a large savings.  If scanf() and/or printf() are 
        necessary but no floating-point values will be used, try using 
        the PCC7.S instead of the standard PCCS.S library (Rename 
        the PCCS.S library to something else and rename the PCC7.S 
        library to PCCS.S).  This will assume the availability of the 
        8087 math chip and will not bring in the software floating-point 
        routines.


        6.5. Overlays

        Another way to solve the space problem is the use of overlays.  
        The overlay system provided by this package is very simple.  An 
        application is divided into a root portion that is always 
        resident and two or more overlays.  Only one overlay is resident 
        (executable) at any given time.  The following diagram outlines 
        the relationship between the root and the overlays:


        There are two types of overlays, disk-based overlays and memory-
        based overlays.  The difference between the two types is the 
        location of the overlays.  Disk-based overlays, created with the 
        -V option, are stored in a separate file.  Memory-based overlays, 
        created with the -M option, are loaded into memory along with the 
        root code.  Memory-based overlays should only be used when there 
        is sufficient memory for the root and all of the overlays.  The 
        advantage of memory-based overlays over disk-based overlays is in 
        the amount of time needed to make an overlay resident, memory-
        based overlays being much faster to load.

        The application program is responsible for initializing the 
        overlay subsystem and ensuring that the correct overlay is 
        resident before calling any of the functions in the overlay.

        For disk-based overlays, the routine overlay_init() must be 
        called from the root with the name of the overlay file to 

        The PCCL Object File Linker                        Page 26


        initialize the overlay system.  Overlays are loaded by calling 
        the routine overlay(n) where n is the number of the overlay to be 
        made resident.

        For memory-based overlays instead of disk-based overlays, do not 
        call the overlay_init() routine and call the routine moverlay() 
        in place of the routine overlay().

        In the following example the root is composed of the file X.C.  
        The first overlay is the file Y.C and the second overlay is in 
        the file Z.C.


        File X.C:
                main() {
                        overlay_init("X.OV"); /* initialize */
                        puts("this is the root program\n");
                        overlay(1); /* make 1st overlay resident */
                        zip();    /* call into 1st overlay */
                        overlay(2); /* make the second resident */
                        zap();    /* call into second overlay */
                        puts("bye\n");
                        }

        File Y.C:
                zip() {
                        puts("  this is ZIP  ");
                        }

        File Z.C:
                zap() {
                        puts("  this is ZAP  ");
                        }


        The files are compiled in the usual fashion:

                PCC x
                PCC y
                PCC z

        Ordinarily, the files would be linked together using the command:

                PCCL x y z

        Instead, to create the two overlays, the command:

                PCCL x -V1 y -V2 z
         
        is used.  The -V option is followed by the overlay number.  This 
        number starts at 1 and runs in ascending order up to 39.  All 
        files following the -V or the -M option are included in the 
        overlay.  All library modules (from .S files) are included in the 
        root.  The result from the execution of the PCCL program with the 
        -V option is the executable root (.EXE) file and the overlay 

        The PCCL Object File Linker                        Page 27


        (.OV) file which contains the overlays.  The result with the -M 
        option is an .EXE file containing both the root and the overlays.

        The -P option of PCCL will also display the size of each overlay 
        as well as the overlay for each symbol.


        6.6. Libraries

        Libraries are just concatenated .O files. The .S extension tells 
        PCCL to only include modules that are referenced. If all of the 
        routines in a library are required, rename the .S file to a .O 
        file to force all of the modules in the library to be included.

        PCCL includes the entire .O module  from a library if any of its 
        public names have been selected by other object modules processed 
        by PCCL.  Thus, if a .O file contains several functions, all of 
        them will be bound into a program if any of them are called.

        PCCL searches a library once.  Thus if you have two modules, A 
        and B, and A calls B , the B must follow A in the library.  LIB88 
        attempts to order the library so that these inter-library 
        references are ordered so that PCCL will find them.  One way 
        around any circular dependencies (e.g., B  also calls A ) is to 
        include the library twice on the command line.

        The PCCS.S Standard Library                       Page 28


        7. The PCCS.S Standard Library

        7.1. Introduction

        This section describes the standard library, PCCS.S, for the 
        PCC C compiler and PCCA assembler.  This library includes 
        routines similar to routines available in UNIX with some 
        inevitable differences due to the MS-DOS Operating System.  

        All of the routines are in the PCCS.S library file provided on 
        the distribution disk.  This file must be on the default 
        drive/directory, in a directory listed in the PATH system 
        parameter,  or on the drive/directory referred to by the '-L' 
        option for PCCL to execute correctly.

        There is a PCC7.S library that has the same functions as the 
        PCCS.S libarary but assumes the availability of the 8087 math 
        chip to perform the floating-point operations.  To use the 8087, 
        rename PCC7.S to PCCS.S.

        7.2. Names

        Public names starting with the underline character ('_') are  
        reserved for PCC internal routines and should be avoided.  Names 
        of this form are also employed for user callable routines such as 
        _move() whose names might conflict with user names.

        PCC automatically appends the underline character ('_') to the 
        end of public names to avoid conflicts with assembly language 
        reserved words.  PCCA does not do this so the underline must be 
        manually appended to publics used to link with code generated by 
        PCC.  For example, the C puts() routine should be referred to as 
        puts_ from assembler.   PCCL ignores the case of publics, unlike 
        UNIX, so  puts_ matches the name PutS_.

        7.3. Program Initialization

        PCCL inserts a jmp _csetup as the first executable instruction in 
        the program.  _CSETUP performs the following initialization 
        functions:

        1. sets the data/stack segment size to the lower of: available 
           memory, 64K, or the size of the static data area plus the PCCL 
           -S option,
        2. Formats argc and argv[] from the Program Segment Prefix,
        3. Zeros the Uninitialized Data Area, and
        4. Calls main(argc, argv)

        Assembly language main programs that require normal 
        initialization should contain the following

                PUBLIC MAIN_
                MAIN_:

        The PCCS.S Standard Library                       Page 29


        The initialization code will set the SS, DS and SP registers so 
        that there is the largest possible stack unless the PCCL '-S' 
        option is used to restrict the stack size.  The stack grows 
        towards the unitialized data area.  The figure below shows the 
        memory layout after the initialization code has run:

             +-------------------+
             |     Stack         |
             +-------------------+<- SP,BP
             |                   |
             /     Heap          /
             +-------------------+<- _memory()
             |    Un-Init Data   |
             +-------------------+
             |    Init Data      |
             +-------------------+<- DS,SS
             |    Code           |
             +-------------------+<- CS
             |    PSP            |
             +-------------------+

        Fig. 7-1: Initial Memory Layout

        The memory between the end of the uninitialized area and the 
        stack is not normally used by PCC or the program (unless the 
        program needs an inordinate amount of stack).  This area is 
        considered to be free memory.  This memory area can be accessed 
        directly by using the _memory() and _showsp() routines to 
        calculate its extent.  Another way to access this memory is to 
        use the malloc() routine.  Do not use both methods.  Remember to 
        leave enough space for the stack to grow.

        The -A option of PCCL inhibits the call to _csetup.  Execution 
        commences with the first instruction of the first filename 
        specified to PCCL.  On entry, the registers have the following 
        values:

        CS      Address of Code Segment.  Execution starts at CS:0.
        SS      Address of Data Segment.
        ES,DS   Address of Program Segment Prefix
        SP      Stack size set by PCCL

        The source code for _csetup is in the file ISETUP.A. 

        7.4. Calling Conventions

        Arguments to a function are pushed on the stack, rightmost 
        argument first.  It is the responsibility of the calling function 
        to clean up the stack.  For example

                int i;

                zip(i, 6);

        The PCCS.S Standard Library                       Page 30


        would generate the following code

                mov     ax,6
                push    ax
                push    word i_
                public zip_
                call    zip_
                add     sp,4

        The word modifier is required because PCC allocates two bytes for 
        ints.  The add sp,4 removes the two words that were pushed as 
        parameters to zip_.  Note the PCC appended '_' on names.  If 
        there had been no local variables defined in the function, the 
        clean-up code would have been

                mov     sp,bp

        which is faster.

        Data is pushed on the stack as follows:

                
        char       pushed as a word, with high-order byte set to zero

                        mov  AL,data_
                        mov  AH,0
                        push AX

        int        pushed as a word
        unsigned
                        push WORD data_

        long       pushed with least-significant word pushed last

                        push WORD data_[2]
                        push WORD data_[0]

        float      Changed  to  double and pushed with  least-significant 
                   word pushed last

                        mov  si,offset data_
                        PUBLIC _FLOADE  ; load float
                        call _FLOADE
                        PUBLIC _FPUSH   ; push double
                        call _FPUSH

        double     pushed with least-significant word pushed last

                        push WORD data_[6]
                        push WORD data_[4]
                        push WORD data_[2]
                        push WORD data_[0]

        The PCCS.S Standard Library                       Page 31


        struct     push  (sizeof(struct)  + 1) >> 1  words,  with  least-
                   significant word pushed last.

                        mov  cx,nn    ; size in words
                        sub  sp,cx    ; make room on stack
                        mov  di,sp    ; target
                        mov  si,offset data_  ; source
                        mov  ax,ds    ; setup
                        mov  es,ax    ;    es
                        cld           ; set direction up
                rep     movsw         ; copy to stack


        7.5. LIBRARY CONVENTIONS

        Called functions are responsible for preserving CS, DS, SS, SP, 
        and BP across the function call.  All other registers need not be 
        maintained.  The usual preamble for a called function is

                        PUBLIC fname_
                fname_:
                        push bp      ; save old frame pointer
                        mov  bp,sp   ; establish local frame

        For functions that don't return structures, parameters begin in 
        the local frame at [bp+4], and continue upward based on the size 
        of each parameter.  Thus  for the fragment

                blip(x, y, z)
                int x;
                long y;
                double z;

        the parameters would be referenced in Assembler as

                mov  cx,WORD [bp+4]  ; x_
                mov     ax,WORD [bp+6]  ; lsw of y_
                mov  dx,WORD [bp+8]  ; msw of y_
                lea  si,[bp+10]      ; addr of z_

        For functions that do return structures, [bp+4] contains a 
        pointer to where the structure should be returned.  So if the 
        above fragment was

                struct foo blip(x, y, z)

        the parameters would be

                mov  cx,WORD [bp+06]  ; x_
                mov     ax,WORD [bp+08]  ; lsw of y_
                mov  dx,WORD [bp+10]  ; msw of y_
                lea  si,[bp+12]       ; addr of z_

        The PCCS.S Standard Library                       Page 32


        Local variables are allocated below the current frame pointer, 
        regardless of what the function returns, so that the fragment

                {
                int aa[2];
                long b;

        would be referenced as

                sub  sp,8       ; allocate space for locals
                mov  ax,[bp-4]  ; aa_[1]
                mov     dx,[bp-8]  ; msw b_

        The standard exit sequence is

                mov     sp,bp   ; reclaim any local space
                pop     bp      ; old frame pointer
                ret          ; caller will clean up stack

        Values  are  returned from functions as followings:

             char      returned  in AX.   char values are returned in  AL 
                       with AH
             int       set to zero
             unsigned

             long      returned in DX:AX.  (AX contains lsw)

             double    returned on floating point stack (s/w or 8087). 
             float

             struct    returned to address in [bp+4]

        7.6. Disk Input/Output Routines

        In this implementation of C I/O, procedures like getc() are 
        functions rather than macros and a file identifier FILE is simply  
        an integer containing the file number rather than a pointer to a 
        structure.  This change means that read() and getc() calls may be 
        intermingled and there is little difference between open() and 
        fopen() on a file.

        In UNIX there is a distinction between file and stream I/O.  
        Crudely stated, the functions that have 'f' as their first letter  
        (fopen(), fread() etc.) deal with streams, and other primitives 
        (open(),  read() etc.) access files.  These two forms of I/O are 
        compatible -- fopen() may be used to open a file a file and then 
        read() used to read it -- but it is best to use either the stream 
        or file primitives only for a particular file for portability.  
        The FILE type is defined in the stdio.h include file and is 
        simply an int type.  This int contains the file number, the same 
        number returned by open() and creat().  To use the stream 
        routines with a file opened with the open(), merely pass the file 
        number. 

        The PCCS.S Standard Library                       Page 33


        The stream style of I/O primitives are: fopen() to open a file, 
        fread(), fgets() or fgetc() [getc()] to read,  fwrite(), fputs() 
        or fputc() [putc()] to write, fseek() to seek, fflush() to write 
        out internal buffers, and fclose() to close.

        The file type I/O primitives are: open(), creat(), read(),  
        write(), lseek(), and close().

        The maximum number of files that can be open at one time is 
        either 20, or the number specified in CONFIG.SYS, whichever is 
        less. See section 2.3 for details about CONFIG.SYS.  New files 
        are creat()'d and old files are open()'d.

        A closed file may be rename()'d or unlink()'d (deleted).

        Three predefined file numbers may be used to read from or write 
        to the console.  To use them, include the following defines in 
        the program:

          #define stdin   0
          #define stdout  1
          #define stderr  2


        7.7. Math Routines

        If any of the transcendental or sqrt() functions are used, 
        include the file math.h or the equivalent declarations to specify 
        them as returning double's.

        math.h includes the statement 

                extern int errno;

        errno is set to a non-zero value: on floating point stack errors,  
        if an argument to a math routine is out of range, or if the 
        result of a math routine would under/overflow.  Error codes and 
        names (defined in math.h) are:

        30 ESTK   F/P stack overflow.  The most probable cause is calling 
                  a function that returns a double without declaring it 
                  as such to the compiler.  After eight calls, the f/p 
                  stack will be full.

        33 EDOM   invalid argument, i.e., sqrt(-1.0).

        34 ERANGE invalid arg size, i.e., asin(2.0).

        The function  rerrno() is called by the floating point routines 
        whenever an error is detected.  rerrno() prints out an 
        appropriate error message and calls exit().  In order to bypass 
        this effect, install the following function in your program

                rerrno() {;}  /* null function to suppress printing */

        The PCCS.S Standard Library                       Page 34


        7.8. IBM-PC Screen and Keyboard Interface

        A number of functions have been written to simplify the interface 
        between C programs and the IBM-PC and its clones.  These routines 
        are not in the standard PCCS.S library but are distributed in 
        source form in the file PCIO.A.  To use these routines, they must 
        be assembled and bound in.  For example:

                A>PCCA b:pcio
                A>PCCL b:blip b:pcio

        See the comments in the IBM Technical Reference Manual for 
        details on the BIOS interface used by PCIO.

        See the LIB88 chapter for details on installing PCIO.O in 
        PCCS.S.

        7.9. Standard Library Functions


        7.9.1. abs()

                  unsigned uval;
                  int y;

                  uval = abs(y);

        abs returns |y| (absolute value).


        7.9.2. atoi()

                  char *cp;
                  int ival;

                  ival = atoi(cp);
                
        atoi converts the char array at cp to its corresponding int 
        value.  The first unrecognized character terminates the 
        conversion.

        WS is either a tab or a space.  A digit is an ASCII character '0' 
        through '9'.  [] delimit sequences that can occur zero or one 
        time.  {} delimit sequences that can occur zero or many times.

                Valid character Sequences

                {WS} [-] {DIGIT}
         

        SEE ALSO:scanf()

        The PCCS.S Standard Library                       Page 35


        NOTES: To guard against int overflow, or large unsigned values 
        being stored as negative integers, use atol and check that the 
        high-order word is the same as the high-order bit of the low-
        order word.

                atoi(str)
                char *str; {
                        long val, atol();
                        int sign, extn;

                        extn = (val = atol(str)) >> 16;
                        sign = val & 0x8000;
                        if((!sign && extn != 0) || (sign && extn != -1))
                                overflowErr();
                        return val;
                        }


        7.9.3. atof()

                  char *cp;
                  double dval;

                  dval = atof(cp);
                
        atof converts the char array at cp to its corresponding double 
        value.  The first unrecognized character terminates the 
        conversion.

        WS is either a tab or a space.  A digit is an ASCII character '0' 
        through '9'.  E is either an ASCII 'E' or 'e'.  [] delimit 
        sequences that can occur zero or one time.  {} delimit sequences 
        that can occur zero or many times.

                Valid character Sequences

                {WS} [-] {digit} ['.'] [{digit} [E [-] {digit}]]
         
        SEE ALSO:scanf()


        7.9.4. atol()

                  char *cp;
                  long lval, atol();

                  lval = atol(cp);
                
        atol converts the char array at cp to its corresponding long 
        value.  The first unrecognized character terminates the 
        conversion.

        The PCCS.S Standard Library                       Page 36


        WS is either a tab or a space.  A digit is an ASCII character '0' 
        through '9'.  [] delimit sequences that can occur zero or one 
        time.  {} delimit sequences that can occur zero or many times.

                Valid character Sequences

                {WS} [-] {DIGIT}
         

        SEE ALSO:scanf()

                        }


        7.9.5. ceil()

                  #include <math.h>

                  double dval, x;

                  dval = ceil(x);

        ceil returns the smallest integer value not less than x.


        7.9.6. chain()

                  char *filename, *commandTail;

                  chain(filename, commandTail)

        chain will load and execute an arbitrary program Q filename is 
        the complete pathname of the program (including the .EXE or .COM 
        suffix).  commandTail  contains the arguments to the program.  

        chain functions like exec  except that control is not returned to 
        the calling program.  chain is in the file EXEC.O, in the 
        distribution. It should be bound in first to save memory since it 
        loads the called program immediately behind itself.  For example:

                A>PCCL EXEC BLIP -OBLIP

        NOTE: To invoke a Batch file, or a DOS built-in command, use 
        COMMAND.COM with the '/c' switch as follows.

                chain("\\command.com", "/cxxx");

        Where xxx is one of the DOS built-in commands ( 'dir', 'copy', 
        Remember that two backslashes are required to insert a single 
        backslash in a string.  Invoking COMMAND.COM with no parameters 
        will start another DOS shell.  To return type

                exit

        The PCCS.S Standard Library                       Page 37


        7.9.7. close()

                  int handle, stat;

                  stat = close(handle);

        close writes any buffered data for the file fp to that file, and 
        closes the file. Returns -1 if fp is not open, or if an error 
        occurred writing the buffered data to that file.
                

        7.9.8. creat()

                  int handle;
                  char *name;

                  handle = creat(name)

        creat creates the file name  and return an int that is used to 
        reference it in future file operations, or -1 if the file can't 
        be opened.  If the file name already exists, it is deleted before 
        it is opened. 

        NOTES: creat  opens a file in update mode so that after a file is 
        written,  a program can seek to the begining of the file and read 
        it without closing the file and reopening it.

        Any  of  the  functions can open the console ("CON")  or  printer 
        ("PRN").


        7.9.9. dates()

                  char *buf;
                
                  dates(buf);

        dates formats the string buf with the current date as "mm/dd/yy".


        7.9.10. doint()

                  char inum;
                
                  extern unsigned _rax, _rbx, _rcx, _rdx, _rsi, _rdi,
                                  _res, _rds;
                  extern char _carryf, _zerof;

                  _doint(inum);

        _rax - _rds contain the values of the corresponding 8088 internal 
        registers that are loaded and saved by _doint .  _carryf is the 
        carry flag; _zerof is the zero flag

        The PCCS.S Standard Library                       Page 38


        _doint will cause a software interrupt and may be used to call 
        whatever routines are available in the particular machine.  If 
        _rds is set to -1, the current value of the DS register is used.

        NOTE:  The following example, on an IBM-PC, would use interrupt 
        10H to print the string.

                extern unsigned _rax, _rbx, _rds;
                extern char _carryf;
                char str[] = "Hello There!!";
                int i;

                for (i = 0; i < sizeof(str); i++) {
                        _rax = (14 << 8) + str[i];
                        _rbx = 0;
                        _rds = -1;
                        _doint(0x10);
                        }


        7.9.11. exec()

                  char *filename, *commandTail, Code;

                  Code = exec(filename, commandTail)

        exec will load and execute an arbitrary program.  Filename is the 
        complete pathname of the program (including the .EXE or .COM 
        suffix).  commandTail  contains the arguments to the program.  
        exec will return the completion code from the program or -1 if an 
        error occurred loading the program.  exec is in the EXEC.O file 
        provided in the distribution.

        NOTE: Completion codes are set for programs running under MS-DOS 
        2.0 or later versions of the operating system.  If a program 
        exits with

                exit(n);

        the system ERRORLEVEL will be set to n.  A program that returns 
        from the main function other than by exit()sets ERRORLEVEL to 
        zero.  ERRORLEVEL can be tested with the DOS batch file IF 
        command.  See the section under 'BATCH' in the IBM 2.xx DOS 
        manual for details on the IF command.

        To invoke a Batch file, or a DOS built-in command, use 
        COMMAND.COM with the '/c' switch as follows.

                exec("\\command.com", "/cxxx");

        Where xxx is one of the DOS built-in commands ( 'dir', 'copy', 
        Remember that two backslashes are required to insert a single 
        backslash in a string.  Invoking COMMAND.COM with no parameters 
        will start another DOS shell.  To return type

                exit

        The PCCS.S Standard Library                       Page 39



        PCC normally allocates a stack as large as possible.  This is not 
        desirable when using exec , as little memory may be left for the 
        second program.  The -Shhhh option of the PCCL program should be 
        used to reduce the size of the stack and consequently the size of 
        the program.  Remember that the hhhh value of the option is in 
        hex and that it must be large enough for all parameters and 
        locals active at one time.  An extra 0x100 (256) bytes should 
        also be added for any system calls.


        7.9.12. exit()

                  char Code;

                  exit(Code)

        exit terminates the program with completion code Code.  A main() 
        procedure can also exit  with a completion code of zero by 
        returning or by "falling" through the end of the procedure.

        NOTE: Completion codes are set for programs running under MS-DOS 
        2.0 or later versions of the operating system.  If a program 
        exits with

                exit(n);

        the system ERRORLEVEL will be set to n.  A program that returns 
        from the main function other than by exit()sets ERRORLEVEL to 
        zero.  ERRORLEVEL can be tested with the DOS batch file IF 
        command.  See the section under 'BATCH' in the IBM 2.xx DOS 
        manual for details on the IF command.


        7.9.13. exp()

                  #include <math.h>

                  double x, dval, exp(), exp10();

                  dval = exp(x);
                  dval = exp10(x);

        exp returns the exponential function of x; exp10 returns the 
        base 10 exponent.

        NOTE: exp returns a very large value when the result would 
        overflow; errno is set to ERANGE.  ERANGE is defined in math.h.

        The PCCS.S Standard Library                       Page 40


        7.9.14. fabs()

                  #include <math.h>

                  double dval, x;

                  dval = fabs(x);

        fabs returns |x| (absolute value).


        7.9.15. fclose()

                  #include <stdio.h>
                  FILE *fp;
                  int stat;

                  stat = fclose(fp);

        fclose writes any buffered data for the file fp to that file, and 
        closes the file. Returns -1 if fp is not open, or if an error 
        occurred writing the buffered data to that file.
                

        7.9.16. fgetc()

                  #include <stdio.h>
                  FILE *fp;
                  int data;

                  data = fgetc(fp)

        fgetc returns the next character from the file fp, or -1 if an 
        error, or end of file was sensed.

        SEE ALSO: scanf(), fread()


        7.9.17. fgets()

                  #include <stdio.h>
                  FILE *fp;
                  char *cp, buf[], *fgets();
                  int len;

                  cp  = fgets(buf, len, fp);

        fgets reads the next line, but not more than len - 1 characters 
        from the file fp into buf.  The last character read into buf is 
        followed by a zero.  fgets returns buf, or 0 on end of file or an 
        error.

        SEE ALSO: fscanf(), fread()

        NOTE:  fgets returns the CR character.

        The PCCS.S Standard Library                       Page 41


        7.9.18. floor()

                  #include <math.h>

                  double dval, x;

                  dval = floor(x);

        floor returns the largest integer value not greater than x.


        7.9.19. fopen()

                  #include <stdio.h>
                  FILE *fp;
                  char *name, *method;

                  fp = fopen(name, method)

        fopen opens the file name and returns an FILE pointer that 
        identifies the file in future file operations.  Returns NULL 
        if the file can't be opened.

        method is a char string having one of the following values: "r" = 
        open for reading,"w" = open for writing, "a" = open for append -- 
        open for writing at end of file, or create for writing.

        NOTES: fopen for read access is the same as open for update; 
        write access is the same as creat for the file; append causes a 
        seek to the end of an existing file, or the creation of a new 
        file as required. 

        Any  of  the  functions can open the console ("CON")  or  printer 
        ("PRN").


        7.9.20. fputc()

                  #include <stdio.h>
                  FILE *fp;
                  char ch;
                  int data;

                  data = fputc(ch, fp);

        fputc writes ch to the file fp.  fp must have been opened 
        prior to the call.  The functions return ch, or -1 on error.

        SEE ALSO: printf(), fwrite()

        The PCCS.S Standard Library                       Page 42


        7.9.21. fputs()

                  #include <stdio.h>
                  FILE *fp;
                  char buf[];
                  int err;

                  err = fputs(buf, fp);

        fputs copies the null terminated string buf to the file fp.  
        fputs returns a -1 on error.

        SEE ALSO: fprintf()

        NOTE: On output, linefeed ('\n') is converted to carriage return 
        - linefeed ('\r\n').


        7.9.22. frand()

                  double dval;

                  dval = frand();

        frand returns the next pseudo-random number in the range from 
        0.0 to 1.0.


        7.9.23. fscanf()

                  #include <stdio.h>
                  FILE *fp;
                  char fcs[];
                  int num;

                  num = fscanf(fp, fcs [, ptr ] ... );

        fscanf reads from the file fp.

        Returns the number of items successfully scanned or -1 on end of 
        input or error.

        See scanf() for a how it works.


        7.9.24. getc()

                  #include <stdio.h>
                  FILE *fp;
                  int data;

                  data = getc(fp)

        getc  return the next character from the file fp, or -1 if an 
        error, or end of file was sensed.

        The PCCS.S Standard Library                       Page 43



        NOTE: getc is a function rather than the usual macro.

        getchar() will hangup reading redirected input under DOS 2.X and 
        higher.  Use getc(stdin) if the input could be redirected.

        SEE ALSO: scanf(), fread()


        7.9.25. getchar()


                  int data;

                  data = getchar();

        getchar  returns the next character from stdin, or -1 if an 
        error, end of file, or a CTRL-Z was found.

        NOTE: getchar is a function rather than the usual macro.

        getchar() will hangup reading redirected input under DOS 2.X and 
        higher.  Use getc(stdin) if the input could be redirected.

        SEE ALSO: scanf(), fread()


        7.9.26. gets()

                  char *cp, buf[], *gets();
                  int len, size;

                  cp  =  gets(buf);
                  len = _gets(buf, size);

        gets obtains a line-edited string from the console (stdin) into 
        buf.  During input, <ESC> means backup and start over, 
        <BACKSPACE> means delete the previous character and <RETURN> 
        means end of string.  <RETURN> is replaced in buf by a zero.  
        gets returns its argument, or 0 on end of file or an error.

        _gets obtains not more than size - 1 characters from the console 
        into buf.  Editing proceeds as with gets.  _gets returns the 
        number of characters obtained, or 0 on end of file or an error.

        SEE ALSO: fscanf(), fread()

        NOTE: gets and _gets don't return the CR character

        The PCCS.S Standard Library                       Page 44


        7.9.27. getw()

                  #include <stdio.h>
                  FILE *fp;
                  int data;

                  data = getw(fp)

        getw returns the next int from the file fp, or -1 if an error, or 
        end of file was sensed.

        SEE ALSO: scanf(), fread()


        7.9.28. in()

                  char ch;
                  unsigned port, wd;

                  ch = _inb(port);
                  wd = _inw(port);

        _inb  and _inw  read the byte ch  and word wd, respectively, from 
        the indicated port.


        7.9.29. index()

                  char *cp, *src, ch;

                  cp = index(src, ch);

        index works on null-terminated strings.  There is no test for 
        overflow.

        index returns a pointer to the first occurance of ch in src, 
        or 0 if ch doesn't occur.


        7.9.30. log()

                  #include <math.h>

                  double x, dval, log(), log10();

                  dval = log(x);
                  dval = log10(x);

        log  returns the natural logarithm of x;  log10 returns the base 
        10 logarithm.

        NOTE: log and log10 return zero when x is zero or negative; 
        errno is set to EDOM.  EDOM is defined in math.h.

        The PCCS.S Standard Library                       Page 45


        7.9.31. lmove()

                  char *sp, *tp;
                  unsigned  num, sseg, tseg;

                _lmove(number, sp, sseg, tp, tseg);

        _lmove  moves num  bytes from the 8088 physical address at 
        sseg:sp  to tseg:tp .  For example, to move the color display 
        frame buffer at address 0xB800:0 to a local buffer ( _showds  
        provides the C program data segment  Q DS)

                _lmove(4000, 0, 0xB800, buffer, _showds());

        NOTE:  _lmove  takes advantage of the 8088 instructions for a 
        fast data move.  It handles overlapping moves correctly so that

                _lmove(3920, 0, 0xB800, 80, 0xB800);

        will move 0xB800:3919 to 0xB800:3999,  0xB800:3918 to 0xB800:3998 
        etc. rather than propagating 0xB800:0.


        7.9.32. longjmp()

                  #include <setjmp.h>

                  int val;
                  jmp_buf env;

                  longjmp(env, val);

        jmp_buf is defined in <setjmp.h> .  It creates an environment 
        used by setjmp for future use by longjmp .  jmp_buf is defined 
        as
                typedef char jmp_buf[6];

        longjmp restores SP, BP, and return address from env and returns 
        val.  val cannot be zero.

        NOTE:   env  can be specified as zero,  for  compatibility  with 
        previous releases.  There can be only one "zero" env  active at 
        any time.

        If the environment stored in env  points into an overlay area, 
        then the overlay that called setjmp  must be resident when 
        longjmp  is called Q if another overlay is resident, then strange 
        things will happen.  It is best to call setjmp  from the root.

        The PCCS.S Standard Library                       Page 46


        7.9.33. open()

                  int handle;
                  char *name, mode;

                  handle = open(name, mode)

        open opens the file name and returns an int that identifies the 
        file in  future  file operations.  Returns -1 if the file can't 
        be opened.

        mode is a char having one of the following values: 0 = open for 
        reading, 1 = open for writing, 2 = open for update, and 3 = open 
        for reading (CTRLZ indicates EOF).

        NOTES: Any of the functions can open the console ("CON") or 
        printer ("PRN").


        7.9.34. os()

                  char inum, ival;
                  unsigned arg;
                
                  ival = _os(inum, arg);
                _doint(inum);
                dates(buf);
                times(buf);

        _os provides an elementary interrupt interface.  Under DOS, inum  
        goes into AH and arg into DX, and an int 21H, is executed.  The 
        value in AL is returned.


        7.9.35. out()

                  char ch;
                  unsigned port, wd;

                _outb(ch, port);
                _outw(wd, port);

        _outb and _outw write the byte ch  and word wd, respectively, of 
        data out to the indicated port.

        7.9.36. peek()

                  char ch, *sp;
                  unsigned  sseg;


                  ch = _peek(sp, sseg);

        _peek  is used to retrieve a byte ch  from the 8088 physical 
        address at sseg:sp .

        The PCCS.S Standard Library                       Page 47


        7.9.37. poke()

                  char ch, *tp;
                  unsigned  tseg;

                  _poke(ch, tp, tseg);

        _poke  is used to store the byte ch  of data to the 8088 physical 
        address at tseg:tp .


        7.9.38. pow()

                  #include <math.h>

                  double x, y, dval, pow();

                  dval = pow(x, y);

        pow  returns x ** y.

        NOTE: pow returns a very large value when the result would 
        overflow; errno is set to ERANGE.  pow returns zero and sets 
        errno to EDOM when the second argument is negative and not 
        integral, or when both arguments are zero.  EDOM and ERANGE are 
        defined in math.h.



        7.9.39. putc()

                  #include <stdio.h>
                  FILE *fp;
                  char ch;
                  int data;

                  data = putc(ch, fp);

        putc writes ch to the file fp .  fp must have been opened prior 
        to the call.  The functions return ch, or -1 on error.

        SEE ALSO: printf(), fwrite()


        7.9.40. putchar()

                  #include <stdio.h>
                  FILE *fp;
                  char ch;
                  int data;

                  data = putchar(ch);

        putchar writes ch  to stdout .  Linefeed ('\n') is converted to 
        carriage return - linefeed ('\r\n').  Output will stop if CTRL-S 

        The PCCS.S Standard Library                       Page 48


        is entered, and resume when any other key is pressed.  Each 
        output will check for a CTRL-C entry, and terminate  the program 
        if it was pressed.  putchar returns ch , or -1 on error.

        SEE ALSO: printf(), fwrite()

        NOTE:  putchar is a function rather than the usual macro.


        7.9.41. puts()

                  char buf[];
                  int err;

                  err = puts(buf);

        puts copies the null terminated string buf to the console 
        (stdout).  puts returns a -1 on error.

        SEE ALSO: printf()

        NOTE:  puts  doesn't append a newline.

        On output, linefeed ('\n') is converted to carriage return - 
        linefeed ('\r\n').  Output will stop if CTRL-S is entered, and 
        resume when any other key is pressed.  Each output will check for 
        a CTRL-C entry, and terminate  the program if it was pressed.


        7.9.42. putw()

                  #include <stdio.h>
                  FILE *fp;
                  int data, w;

                  data = putw(w, fp);

        putw writes the int w to the file fp .  fp must have been 
        opened prior to the call.  putw  returns w, or -1 on error.

        SEE ALSO: printf(), fwrite()

        There is no way to distinguish the return from putw(-1, fp) from 
        an error.


        7.9.43. qsort()
                  char array[];
                  int num, width, (*compare)();

                  qsort(array, num, width, compare);

        qsort is an implementation of C. A. R. Hoare's quicker-sort  
        algorithm.  It sorts an array of num elements, each width  bytes 
        wide.  compare is called with two arguments -- pointers to the 

        The PCCS.S Standard Library                       Page 49


        two elements being compared, and returns an integer less than, 
        equal to, or greater than zero accordingly as the first argument 
        is less than, equal to, or greater than the second argument.

        NOTE:  The usual function for compare is strcmp().  If you are 
        sorting anything other than strings, the following may serve as a 
        model:

                int compare(left, right)
                int *left, *right; {
                        return *left - *right;
                        }

                #define TCARD    1024
                #define ISIZE    sizeof(int)

                int itab[TCARD];

                        qsort(itab, TCARD, ISIZE, compare);

        Remember that int, long, float, and double values are stored with 
        their low-order bytes first.  Thus string comparisons may not 
        produce the expected results.


        7.9.44. rand()

                  int ival;

                  ival = rand();

        rand returns the next pseudo-random number in the range from 0 
        to 2**15 - 1.


        7.9.45. rename()

                  char *oldFile, *newFile;
                  int stat;

                  stat = rename(oldFile, newFile);

        rename changes the file name oldFile to newFile.  Under DOS 2.X 
        and higher, oldFile may contain a path specification.  Returns -1 
        if oldFile is open, or if an error is detected.


        7.9.46. rindex()

                  char *cp, *src, ch;

                  cp = index(src, ch);

        rindex works on null-terminated strings.  There is no test for 
        overflow.

        The PCCS.S Standard Library                       Page 50



        rindex returns a pointer to the last occurance of ch in src or 0 
        if ch doesn't occur.


        7.9.47. scanf()

                  char fcs[];
                  int num;

                  num = scanf(fcs [, ptr ] ... );


        scanf reads from stdin.

        Returns the number of items successfully scanned.

        The format control string, fcs, contains: blanks or tabs, which 
        match optional whitespace (blanks, tabs, newlines, formfeeds, and 
        vertical tabs) in the input; a non-'%'  character which must 
        match the next character in the input, and conversion control 
        strings which describe the type and format of each *ptr.  
        Conversion control strings have the following format ([] enclose 
        optional entries):

                %[*][width][parms]code

        where:  *  indicates  that  the field should be skipped  and  not 
        assigned  to a *ptr ,  width specifies the maximum field size  in 
        bytes.   Both parms and code are described below.   The  examples 
        have the following form:

                | input string |  . function call . result 

        Character:  %[*][width]c
           String:  %[*][width]s

        width  specifies the number of characters to be read into the 
        array at *ptr .  The default is 1.  'c' whitespace is not 
        skipped, 's' whitespace is.

                |  abc| . scanf("%3c", buf) . |  a|
                |  abc| . scanf("%3s", buf) . |abc|

        Integer:  %[*][width][size]code

        size  equal to 'l' (lowercase 'L') specifies that *ptr  point to 
        a long, a 'h' specifies a short int .

        The PCCS.S Standard Library                       Page 51


        code  is one of: 'd' Q signed decimal format, 'u' Q unsigned 
        decimal format, 'o' Q unsigned octal, and 'x' Q unsigned 
        hexadecimal.

                |  FF | . scanf("%x", &hex)  .  255
                | 377 | . scanf("%o", &oct)  .  255
                | 255 | . scanf("%u", &uns)  .  255
                |-255 | . scanf("%ld", &lng) . -255L

        Floating Point:  %[*][width][size]code

        size  equal to 'l' (lowercase 'L') specifies that *ptr  points to 
        a double rather than a float.

        code  can be either 'e', 'f', or 'g' Q they all indicate floating 
        point.

                | 123.45 | . scanf("%f", %flt)       . 123.45
                | 123.45 | . scanf("%4lf%d", &d, &i) . 123.0  45


        Scanset:  %[*][width]scanset

        scanset  is specified by a sequence of characters enclosed by 
        brackets '[' ']'.  It reads a string, including the terminating 
        null character.  Leading whitespace is not skipped.

                |123 ABC| . scanf("%[123 ]", str) . |123 |

        A range of contiguous characters can be specified by the first 
        and last element of the range, separated by a '-'.

                |123 ABC| . scanf("%[1-3 ]", str) . |123 |

        If the first element of scanset  is a '^', then all characters 
        except  those specified will be read.

                |123 ABC| . scanf("%[^A-C]", str) . |123 |

        To specify '-' or ']' in a scanset , specify it as the first 
        element.  Thus to read an integer, skip any interviening garbage, 
        and read another integer

                scanf("%d%*[^-+0-9]%d", &dig1, &dig2);

        The PCCS.S Standard Library                       Page 52


        7.9.48. scr_aputs()

                  char *str, attr;

                  scr_aputs(str, attr);

        scr_aputs writes string str to the display with attribute attr.  
        '\r' moves to the begining of the line, and '\n' moves to the 
        next line.  Moving off the bottom line causes scrolling.

        NOTE:  scr_aputs is in the file PCIO.A.


        7.9.49. scr_ci()

                  char ch;

                  ch = scr_ci();

        scr_ci is like ci() but uses its own translation table for 
        command characters.  It returns the next character from the input 
        queue.

        NOTE:  scr_ci is in the file PCIO.A.


        7.9.50. scr_co()

                  char ch;

                  scr_co(ch);
        scr_co is the same as co() -- it writes a single character out to 
        the screen.

        NOTE:  scr_co is in the file PCIO.A.


        7.9.51. scr_clr()

                  scr_clr();

        scr_clr erases the entire screen and sets the cursor to the home, 
        (0,0) location.

        NOTE:  scr_clr is in the file PCIO.A.


        7.9.52. scr_clrl()

                  scr_clrl();

        scr_clrl erases everything from the cursor location to the end of 
        the line.

        NOTE:  scr_clrl is in the file PCIO.A.

        The PCCS.S Standard Library                       Page 53


        7.9.53. scr_cls()

                  scr_cls();

        scr_cls erases everything from the cursor location to the end  of 
        the screen.

        NOTE:  scr_cls is in the file PCIO.A.


        7.9.54. scr_csts()

                  char ch;

                  ch = scr_csts();

        scr_csts returns the next character from the queue, or 0 if no 
        character is available.  If a character is present, it is 
        equivalent to a csts() followed by a ci().

        NOTE:  scr_csts is in the file PCIO.A.

        Function keys return a zero.


        7.9.55. scr_cursoff()

                  scr_cursoff();

        scr_cursoff turns the cursor off.

        NOTE:  scr_cursoff is in the file PCIO.A.


        7.9.56. scr_curson()

                  scr_curson();

        scr_curson turns the cursor on.

        NOTE:  scr_curson is in the file PCIO.A.


        7.9.57. scr_rowcol()

                  int trow, tcol;

                  scr_rowcol(trow, tcol);

        scr_rowcol moves the cursor to row trow and column tcol.

        NOTE:  scr_rowcol is in the file PCIO.A.

        The PCCS.S Standard Library                       Page 54


        7.9.58. scr_scdn()

                  scr_scdn();

        scr_scdn scrolls the screen down one line, but leaves the top two 
        lines alone.

        NOTE:  scr_scdn is in the file PCIO.A.


        7.9.59. scr_scrdn()

                  int lines, frow, fcol, trow, tcol;

                  scr_scrdn(lines, frow, fcol, trow, tcol);

        scr_scrdn scrolls the given area down lines.  The area is defined 
        by the character locations (frow, fcol), (trow, tcol).

        NOTE:  scr_scrdn is in the file PCIO.A.


        7.9.60. scr_scrup()

                  int lines, frow, fcol, trow, tcol;

                  scr_scrup(lines, frow, fcol, trow, tcol);

        scr_scrup scrolls the area up lines.  The area is defined by the 
        character locations (frow, fcol), (trow, tcol).

        NOTE:  scr_scup is in the file PCIO.A.


        7.9.61. scr_scup()

                  scr_scup();

        scr_scup scrolls the screen up one line, but leaves the top two 
        lines alone.

        NOTE:  scr_scup is in the file PCIO.A.


        7.9.62. scr_setmode()

                  char newMode;

                  scr_setmode(newMode);

        scr_setmode  sets the mode of the color card.  newMode  must be 
        between 0 and 6.

        NOTE:  scr_setmode is in the file PCIO.A.

        The PCCS.S Standard Library                       Page 55


        scr_setmode manages the following global data.

                char scr_cols;  /* number of character positions */
                char scr_rows;  /* number of lines */
                char scr_mode;  /* current screen mode:
                                0 = 40 col. BW
                                1 = 40 col. color
                                2 = 80 col. BW
                                3 = 80 col. color
                                4 = 320 x 200 color graphics
                                5 = 320 x 200 BW graphics
                                6 = 640 x 200 BW graphics
                                7 = 80 col. BW    */
                char scr_page;  /* current active display page */
                char scr_attr;  /* current character attribute.
                                Normally 7 for white on black but
                                can be set for any attributes
                                see Technical Reference Manual */


        7.9.63. scr_setup()

                  scr_setup();

        scr_setup   must be called prior to any of the screen routines if 
        the screen is currently in 80 column mode or if scr_curson with a 
        monochrome display is used.

        NOTE:  scr_setup is in the file PCIO.A.

        scr_setup manages the same data as scr_setmode.


        7.9.64. scr_sinp()

                  char ch;

                  ch = scr_sinp();

        scr_sinp returns the character under the cursor on the screen.

        NOTE:  scr_sinp is in the file PCIO.A.

        The PCCS.S Standard Library                       Page 56


        7.9.65. setjmp()

                  #include <setjmp.h>

                  int val;
                  jmp_buf env;

                  val = setjmp(env);

        jmp_buf is defined in <setjmp.h> .  It creates an environment 
        used by setjmp  for future use by longjmp .  jmp_buf is defined 
        as
                typedef char jmp_buf[6];

        setjmp  saves the current SP, BP, and return address in env.  It 
        returns a zero.

        NOTE:  env can be specified as zero, for compatibility with 
        previous releases.  There can be only one "zero" env  active at 
        any time.

        If the environment stored in env  points into an overlay area, 
        then the overlay that called setjmp  must be resident when 
        longjmp  is called -- if another overlay is resident, then 
        strange things will happen.  It is best to call setjmp  from the 
        root.

        setjmp's caller can tell by the returned value if control was 
        returned from setjmp(0), or from longjmp(!=0).


        7.9.66. sqrt()

                  #include <math.h>

                  double x, dval, sqrt();

                  dval = sqrt(x);

        sqrt returns the square root of x.

        NOTE: sqrt returns zero when x is negative; errno is set to EDOM.
        EDOM is defined in math.h.



        7.9.67. srand()

                  int seed;

                  srand(seed);

        srand sets the seed for the multiplicative congruential random 
        number generator to seed .

        The PCCS.S Standard Library                       Page 57


        NOTE:  The initial seed for the generator is a long.  srand  only 
        sets the low order word, so the initial generator cannot be 
        restarted.  Solution: seed the generator with your own integer 
        before any calls to rand or frand .


        7.9.68. sscanf()

                  char fcs[], buf[];

                  num = sscanf(buf, fcs [, ptr ] ... );

        sscanf reads from the string buf.

        Returns the number of items successfully scanned.

        See scanf() for a how it works.


        7.9.69. strcat()

                  char *cp, *src, *dst;

                  cp = strcat(dst, src);

        strcat works on null-terminated strings.  There is no test for 
        overflow.

        strcat appends a copy of src to the end of dst.

        Returns dst .


        7.9.70. strcmp()

                  char *s1, *s2;
                  int cmp;

                  cmp = strcmp(s1, s2);

        strcmp works on null-terminated strings.  There is no test for 
        overflow.

        strcmp  compares the two strings and returns +1, 0, or -1 
        accordingly as s1 is lexically greater than, equal to, or less 
        than s2.

        7.9.71. strcpy()

                  char *cp, *src, *dst;

                  cp = strcpy(dst, src);

        strcpy works on null-terminated strings.  There is no test for 
        overflow.

        The PCCS.S Standard Library                       Page 58


        strcpy copies src to dst , stopping after the null byte has been 
        transfered.
          
        Returns dst .


        7.9.72. strlen()

                  char *src;
                  unsigned len;

                  len = strlen(src);

        strlen works on null-terminated strings.  There is no test for 
        overflow.

        strlen returns the number of non-null characters in src.


        7.9.73. strncat()

                  char *cp, *src, *dst;
                  unsigned max;

                  cp = strncat(dst, src, max);

        strncat works on null-terminated strings.  There is no test for 
        overflow.

        strncat appends, at most, max  bytes of src  to the end of dst.
          
        Returns dst .


        7.9.74. strncmp()

                  char *s1, *s2;
                  int cmp;
                  unsigned max;

                  cmp = strncmp(s1, s2, max);

        strncmp works on null-terminated strings.  There is no test for 
        overflow.

        strncmp compares, at most, max  bytes of the two strings and 
        returns +1, 0, or -1 accordingly as s1 is lexically greater than, 
        equal to, or less than s2.

        The PCCS.S Standard Library                       Page 59


        7.9.75. strncpy()

                  char *cp, *src, *dst;
                  unsigned len;

                  cp = strncpy(dst, src, len);

        strncpy works on null-terminated strings.  There is no test for 
        overflow.

        strncpy copies exactly len bytes, from src to dst truncating or 
        null-padding as required; dst may not be null-terminated if the 
        strlen(src) >= len.

        Returns dst .


        7.9.76. times()

                  char *buf;

                times(buf);

        times formats the string buf with the current time as "hh-mm-ss"


        7.9.77. ungetc()

                  #include <stdio.h>
                  FILE *fp;
                  char ch;
                  int data;

                  data = ungetc(ch, fp)

        ungetc pushes the character ch  back onto the file fp.  The next 
        call to getc or fgetc will return ch.  ungetc returns ch, or -1 
        if it can't push the character back.  fseek  clears all pushed 
        characters.  EOF (-1) can't be pushed.


        7.9.78. unlink()

                  char *oldFile;
                  int stat;

                  stat = unlink(oldFile);

        unlink deletes the file oldFile.  Under DOS 2.X and higher, 
        oldFile may contain a path specification.  Returns -1 if oldFile  
        doesn't exist, is open, or if an error is detected.

        Messages                                            Page 60


        A. Messages

        A.1. PCC Compiler Messages

        A.1.1. Banner and Termination Messages

        >PCC V1.2b  Copyright by Mark DeSmet 1988
        end of PCC    001A code    0012 data     1% utilization

        OR

        >PCC V1.2b  Copyright by Mark DeSmet 1988
             (various error messages)

            Number of Warnings = 2     Number of Errors = 5

        The first form of termination means the compile was successful.  
        The 'code' number is in hex and tells how many bytes of code were 
        produced.  The 'data' number is similar and tells how many bytes 
        of data were produced.  The utilization percentage is the worst 
        case of a number of compiler limits.  If it nears 100% it usually 
        means that the largest procedure should be broken into smaller 
        procedures.

        The second form means the compile failed.  Error messages are 
        explained in the following section.  If any errors were detected, 
        the compiler will stop trying to generate code and will stop as 
        soon as all the source has been read.  This 'syntax check' mode 
        is fast and allows the programmer to correct the program with a 
        minimum of delay.  If only warnings were detected, but no errors, 
        compilation will end normally and produce a .O file.


        A.1.2. Messages

        PCC produces four categories of messages: fatal errors, errors, 
        warnings and errors detected by the assembler.  Fatal errors are 
        usually caused by I/O errors but compiler errors are also in this 
        category.  When a fatal error is detected, the compiler will 
        print a message and quit.  Errors are caused by syntax errors.  
        PCC reports all such errors and then quits.  Warnings are 
        produced by correctable errors and the compiler continues.  Since 
        the compiler uses PCCA as pass 3, assembler detected errors are 
        possible but rare.  When they occur, the object module will not 
        be usable.

        It is easy to tell the category of an error.  After a fatal 
        error, the compiler stops without printing a termination message. 
        Errors and warnings have a distinctive format which includes the  
        word 'error' or 'warning'.  Assembler errors print the assembler 
        line that was found offensive.


        A.1.2.1. PCC Fatal Errors

        Messages                                            Page 61


        The pass 2 fatal errors like 'bad expression' are compiler  
        errors, but the error is usually in not detecting the problem in 
        pass 1 and printing a reasonable message.  If you get one of 
        these errors, please send your program to C Ware, but you can  
        probably find and eliminate the statement that caused the 
        problem.  Don't be frightened by seeing these errors listed; you 
        will probably never see any of them.

        bad  expression - this indicates a compiler error.   Printed by 
                        pass 2.


        bad GOTO target - attempt to goto something other than a label.

        break/case/continue/default not in switch - a case or default 
                        statement must be within a switch. A break 
                        statement must be in a while or do..while or for 
                        or switch. A continue statement must be in a 
                        while or do..while or for statement.

        cannot address  - illegal use of '&' operator.  Printed in pass 
                        2.

        cannot close <file> - the file could not be closed.   An I/O 
                        error occurred.

        cannot create <file> - the named file could not be created.  The 
                        name is a temporary name or the name of the 
                        object or assembler file.  This message usually 
                        means the drive is full (see 'T' option).

        cannot open <file> - the named source or include file could not 
                        be found.

        cannot read <file> - the named file could not be read.  Usually 
                        means an I/O error was detected.

        cannot unlink <file> - the temporary could not be deleted.  An 
                        I/O error occurred.

        cannot write <file> - the named file could not be written. An I/O 
                        error was detected.  Usually means the disk drive 
                        is out of space.

        error in register allocation - compiler error in pass 2. 

        divide by zero  - a constant expression evaluated to a divide by 
                        zero.  Should never happen.

        function too big - a function is too big for the compiler.  The 
                        'Utilization' number reflects this limit so there 
                        is normally plenty of warning.  The solution is 
                        to break large procedures into smaller ones.

        illegal initialization for <name> - only constant expressions and 

        Messages                                            Page 62


                        addresses plus or minus constant expressions can 
                        be used in initialization and the initialization 
                        must make sense.   For example

                        int a=b+2;

                        this error is fatal because it is not discovered 
                        until pass 2.

        no cases        - a switch must have at least one case.

        no input file   - PCC must be followed by the name of the source 
                        file when invoked.

        out of memory   - the compiler ran out of symbol space.  The 
                        'utilization' numbers warn when a program is 
                        about to exceed this or any other compiler limit.  
                        The compiler can use up to 100K, so adding memory 
                        may be a solution.  If not, the only remedy is 
                        the painful surgery required to reduce the total 
                        number of externals and locals defined at one 
                        time.
                        
        pushed          - compiler error in pass 2 code generation. It 
                        can be eliminated by simplifying the expression.

        too many cases  - currently, a switch statement can only contain 
                        128 case statements.


        too many fors/too many whiles - whiles, do-whiles, switches and 
                        for statements can only be nested 10 deep.

        stuck <register> - same as 'pushed'.

        too many externals - the compiler currently has a limit of 500 
                        static's or extern's.


        A.1.2.2. PCC Errors

        Errors are printed with the following format:

            23 if (i < 99 $$ {
               error:Need ()

        Or, if the error was detected in an include file:

            23 if (i < 99 $$ {
               file:<include file> error:Need ()

        The number preceding the source line is the line number.  To find 
        the line , edit the file and issue the command 'nnnJ' where nnn 
        is the number of the reported line.

        Messages                                            Page 63


        The '$$' shows how far into the line the compiler was before the 
        error was detected.  For example, the '$$' will print immediately 
        BEFORE an undefined variable.

        If you get a lot of errors on a compile, don't panic. A trivial 
        error probably caused the compiler to become confused.  Correct 
        the first few errors and re-compile.

        bad control     - the # control is illegal.

        bad declaration - the declaration of a variable was illegal.

        bad include     - the #include must be followed by "name" or 
                        <name>.


        bad label       - a colon is not preceded by a label name.

        bad member declare - the declaration of a member is illegal.

        bad member storage - an attempt was made to declare a member 
                        static or external.   Members have the storage 
                        type of their struct or union.

        bad parameter declare - an illegal declaration of an argument or 
                        the name of the argument was spelled differently 
                        in the procedure heading  and in the declaration.

        bad statement   - illegal statement.

        defines too deep - #define may reference another, but there is a 
                        limit. When #defines are expanded, the number of 
                        active #defines plus the number of #define 
                        arguments referenced by each cannot exceed 30.

        duplicate argument - an attempt was made to declare an argument 
                        twice.

        duplicate label - two labels have the same name.

        EOF within comment - end of file was found inside a comment. A 
                        '*/' is missing.

        field needs constant - the size of a bit field must be a constant 
                        expression with a value of 1 to 16.

        illegal address - attempt to use the '&' (take address of) 
                        operator on something that is not a lvalue.  
                        '&44' will generate this error.  An address can 
                        only be taken of a variable, procedure, string or 
                        label.


        illegal define  - a #define has unmatched parenthesis or the 
                        #define parameters are illegally specified.

        Messages                                            Page 64



        illegal external declaration - caused both by an illegal data or 
                        procedure declaration and improperly nested 
                        braces.  If the line is supposed to be part of a 
                        procedure (e.g. i=0;), the latter is the case.  
                        Check that every '{' outside of a comment or 
                        quoted string has a matching '}'.  Note: a prior 
                        error may have caused the compiler to lose track 
                        of a '{'.

        illegal indirection - caused by trying to use a char, int, 
                        unsigned, float or double as a pointer.  longs 
                        can be used as pointers but the other types 
                        cannot.

        include nesting too deep - includes can only be nested three deep

        illegal use of float - floating point numbers cannot be used as 
                        pointers.

        line must be constant - a #line control must be followed by a 
                        decimal constant.

        line too long   - the maximum line length is 128.

        missing ";", "(", ")", "[", "]", "{", "}", ":", "|" - the 
                        indicated "" character is needed at this point. A 
                        multitude of errors can cause these messages.  
                        The error might be fixed by sticking in the 
                        indicated character where the '$$' prints, but 
                        the item following the '$$' could be illegal.

        missing '       - a character constant (e.g. 'A','TEXT') can only 
                        contain one to four characters.

        missing argument - the argument list of a call had two adjacent 
                        commas.

        missing arguments - a #define was defined with arguments but used 
                        without arguments.

        missing dimension - an array dimension was missing in an 
                        expression or statement.  Either int x[][]; or 
                        x[]=1;.

        missing end of #asm - an #asm block was not ended with a #.

        missing expression - an expression is needed here. An example of 
                        a missing expression is i=;.

        missing operand - an operator without an operand was found.  An 
                        example of a missing operand is ++;

        missing while   - a 'do ... while' is missing the ending 'while'.

        Messages                                            Page 65


        must return float - a float or double function must end with a 
                        return statement that returns a value.

                        Note:  The compiler is too stupid to accept.
                
                        double x(){if (1) return 1.;}.

        need ()         - the expression following an 'if' or 'switch' or 
                        'while' was not surrounded by parenthesis.

        need '{' for STRUCT initialization - the initial values used to 
                        initialize a structure must be surrounded by 
                        braces.

        need constant   - a 'case' prefix must be followed by an integer 
                        constant expression.

        need constant after #if - a #if control must be followed by a 
                        constant expression.

        need label      - a goto must reference a label.

        need lval       - a lvalue is needed here. An lvalue is, roughly, 
                        something that can be changed with an assignment.  
                        The statement: 2=4; will produce this error.

        need member     - the '.' or '->' operators were followed by 
                        something other than a member name.

        need structure  - the name prior to a '.' operator is not the 
                        name of a struct or union.

        not an identifier - #ifdef, #ifndef and #undef controls must 
                        reference a #define value;.

        not defined     - #undef controls must reference a #define 
                        value;.

        only STATIC and EXTERN allowed at this level - an attempt was 
                        made to declare an 'auto' outside of a procedure.

        parameters cannot span lines - the arguments to a #define must 
                        all be on the same line.

        return lacks argument - if a function is declared as returning a 
                        value then "return;" is illegal.  Use "return 0;" 
                        if the value is unimportant.

        sorry, must have dimension for locals - the compiler does not 
                        accept char a[]={1,2,3}; and similar  for auto 
                        variables.  Declare the variable static or 
                        include an explicit dimension.

        sorry, no string initialization of AUTO - the compiler cannot 
                        accept char a[]="abc"; and similar for auto 

        Messages                                            Page 66


                        variables.  Declare the variable static if 
                        possible, otherwise use _move.

        string too long - a string cannot exceed 200 characters.  Usually 
                        means that a '"' is missing.

        undefined structure - a  pointer to an undefined structure cannot 
                        be added to.

        unknown control - the word following a '#' is not a control word.  
                        '#while' would cause this error.

        unmatched "     - either the end of line or end of file was found 
                        in a string.  Usually means that a " is missing. 
                        if your string is too long for one line, continue 
                        with a \ (backslash) at the end of a line and 
                        continue in column one of the next.  If you want 
                        a new line in a string, use \n.

        wrong number of arguments - a #define was used with the wrong 
                        number of arguments.


        A.1.2.3. PCC Warnings

        There are currently only two warnings. Warnings indicate 
        suspicious code that is probably OK.

        conflicting types - an external or static was declared twice with 
                        different types.  Usually caused by an include 
                        file declaring a variable incorrectly or by a 
                        program such as:

                        main() {
                                char ch;
         
                                ch=zipit();
                                }
         
                        char zipit(ch)
                        char ch; {

                                return ch;
                                }

                        the call of zipit implicitly declares it to be a 
                        function  returning an integer.  The line 'char 
                        zipit(ch)' would be flagged as an error.  The fix 
                        is to include:

                        char zipit();

                        above the call so the function is declared 
                        correctly before use.

        Messages                                            Page 67


        undefined variable - the variable has not been defined.  It is 
                        assumed to be an auto int.



        A.1.2.4. PCCA Errors ( from PCC Execution )

        In theory, any PCCA error message can be produced by a PCC 
        compile gone bonkers but I have only seen the 'cannot write 
        <name>' errors caused by lack of disk space.




        A.2. PCCA Assembler Messages

        A.2.1. Banner and Termination Messages

        >PCCA PCC Assembler V1.2b Copyright by Mark DeSmet 1988

            (various error messages)

        end of PCCA  0016 code  0000 data  1% utilization

        The 'code' number is in hex and tells how many bytes of code were 
        produced.  The 'data' number is similar and tells how many bytes 
        of data were produced.  The utilization percentage shows how full 
        the symbol table was.

        Sample of list output:

        PCCA Assembler    BLIP.A
                         1      ;TOUPPER.A convert a charcter to upper case
                         2
                         3      CSEG
                         4      PUBLIC TOUPPER
                         5
                         6      ;  character = toupper(character)
                         7
        0000 5A          8      TOUPPER:POP     DX      ;RETURN ADDRESS
        0001 58          9            POP       AX      ;CHARACTER
        0002 3C61       10            CMP       AL,'a'  ;IF LOWER THAN 'a'
                        11            JC        TO_DONE ;DO NOTHING
        0004 3C7B       12            CMP       AL,'z'  ;OR IF ABOVE 'z'
                        13            JNC       TO_DONE ;DO NOTHING
        0006 2C20       14            SUB       AL,'a'-'A' ;ELSE ADJUST
        0008 B400       15      TO_DONE:MOV     AH,0    ;RETURN AN INT
        000A FFE2       16            JMP       DX      ;RETURN



        A.2.2. Messages Produced by PCCA

        PCCA prints two categories of messages: fatal errors and errors.  
        As with PCC, the fatal errors are caused by I/O errors or 

        Messages                                            Page 68


        similar.  Errors are simply syntax errors in using the language.   
        When a fatal error is detected, PCCA prints a message and stops.  
        An error does not stop the assembler, but it stops writing the 
        object module to run faster.  If errors are detected, the object 
        module is never good.


        A.2.2.1. Fatal Errors From PCCA

        cannot close <file> - the file could not be closed. An I/O error 
                        occurred.

        cannot create <file> - the named file could not be created. The 
                        name is a temporary name or the name of the 
                        object or list file.  This message usually means 
                        the drive is full (see 'T' option).

        cannot open <file> - the named source or include file could not 
                        be found.

        cannot read <file> - the named file could not be read. Usually 
                        means an I/O error was detected.

        cannot unlink <file> - the temporary file could not be deleted. 
                        An I/O error occurred.

        cannot write <file> - the named file could not be written. An I/O 
                        error was detected.  Usually means the disk drive 
                        is out of space.

        internal error in jump optimization - the assembler became 
                        confused optimizing branches.

        no input file   - no filename followed the PCCA when invoked.

        too  many labels - only 1000 names and labels are allowed.

        too many symbols - the assembler ran out of symbol space.  The 
                        source program should be broken into smaller 
                        modules.



        A.2.2.2. Errors from PCCA

        Error messages have the form:

            44  mov  #44,a3
            error: illegal mnemonic

        or, if the error was found in an include file:

            44  mov  #44,a3
            file:2:SCREEN.A  error: illegal mnemonic

        Messages                                            Page 69


        The messages are:


        address must be in DSEG - address constants  can only be in DSEG, 
                        because constants in CSEG are not fixed up at run 
                        time.

        bad DS value    - a constant expression must follow the DS.

        bad include     - the correct form for an include statement is:

                        include "filename"

        bad LINE value  - the line statement should be followed by a 
                        constant.

        cannot label PUBLIC - a 'public' statement cannot have a label.

        data offset must be an unsigned - an attempt was made to use an 
                        offset in a byte or long constant.  

        DS must have label - storage cannot be reserved without a name.

        DS must be in DSEG - storage can only be reserved in DSEG.

        duplicate label - the label on the line was defined previously.

        equate too deep - an 'equ' may reference a prior one, but only to 
                        a depth of four.

        illegal expression - the expression had an illegal operator or is 
                        somehow invalid.

        illegal operand - an operand had a type that was not legal in 
                        that context.

        illegal reserved word - a reserved word was found in the wrong 
                        context.

        illegal ST value - the index to a floating point stack element 
                        must be in the range 0 to 7.

        incorrect type  - only 'byte', 'word', 'dword', and 'tbyte', are 
                        allowed following the colon to type a public.

        impossible arithmetic - an arithmetic operation has operands 
                        incompatible with the 8086 architecture.

                        example:

                        add word [bx], word[si]

        in wrong segment - a variable or label is being defined in a 
                        segment different than the segment of the 
                        'public' statement.  Remember that 'public' 



        Messages                                            Page 70


                        statements must be in the correct segment, 
                        following 'dseg' or 'cseg' as appropriate.

        invalid BYTE constant - a byte constant was needed, but something 
                        else was found.

        invalid constant - the instruction needed a constant and 
                        something else was found.

        invalid DD constant - the value of a 'DD' must be a constant 
                        expression.

        invalid DW constant - the value of a 'DW' must be a constant 
                        expression or a variable name.  In the latter 
                        case, offset is assumed.  The statement:

                        dw   offset  zip

                        is illegal since offset is already implied.  Just 
                        use:

                        dw   zip

        invalid offset  - an offset of the expression cannot be taken.

        line too long   - the maximum input line to PCCA is 110 
                        characters.

        mismatched types - the types of the two operands must agree.

                        example:

                        db      chr
                        add     ax,bl           ;illegal
                        add     chr,ax          ;illegal
                        add     word chr,ax     ;legal


        misplaced reserved word - a reserved word was found in an 
                        expression.

        missing :       - the '?' operator was missing the colon part.

        missing )       - mismatched parenthesis.

        missing ]       - mismatched braces in an address expression.

        missing ':'     - labels to instructions must be followed by a 
                        colon.  This message also prints when a mnemonic 
                        is misspelled.  The assembler thinks that the bad 
                        mnemonic is a label without a colon.

        missing EQU name - an equate statement lacks a name.

        missing type    - the memory reference needs a type.  In the case 

        Messages                                            Page 71


                        of 'public's defined elsewhere, the type can be 
                        supplied by ':byte' or ':word' on the public 
                        statement.  In the case of anonymous references, 
                        the 'byte' or 'word' keyword must be used.

                        example:

                        public  a:byte
                        inc     a               ; illegal
                        inc     byte a          ; legal
                        inc     es:[bx]         ; illegal
                        inc     es:word[bx]     ; legal

        need constant   - something other than a constant expression 
                        followed a 'ret'.

        need label      - a jump relative was made to something other 
                        than a label.  'jmp's may be indirect but 'jz's 
                        etc. can only jump to a label.

        nested include  - an included file may not include another.

        not a label     - only names can be public.

        RB must have label - a 'RB' statement must have a label.

        RB must be in DS - 'RB's must follow a DSEG directive as they can 
                        only be in the data segment.  'DB's can be in the 
                        code segment.

        RW must be in DS - as above.

        too many arguments - the instruction had more operands than 
                        allowed or the last operand contains an illegal 
                        op-code.

        undefined variable <name> - the name is referred to but not 
                        defined or listed as public.

        unknown mnemonic - the mnemonic is illegal.

        A.3. PCCL Messages


        A.3.1. Banner and Termination Messages

        PCCL  Linker for PCC and PCCA V1.2b Copyright by Mark DeSmet 1988
        end of PCCL        9% utilization


        A.3.2. Warnings from PCCL

        undefined PUBLIC - <name> - the name is referenced, but not 

        Messages                                            Page 72


                        defined in any module.  PCCL will complete and 
                        the resulting .EXE module may execute as long as 
                        the undefined PUBLICs are not referenced.  If 
                        they are referenced, then the result is 
                        undefined.


        A.3.3. Fatal Errors from PCCL 

        PCCL prints the message, prints 'PCCL abandoned' and quits.

        bad argument    - an argument is illegal.

        bad object file<name> - the object or library file contains an 
                        illegal record.

        bad stack option - the 'S' option should be followed by one to 
                        four hex digits.

        cannot close <file> - I/O error occurred.

        cannot create <file> - I/O error or disk out of room.  On MS-DOS 
                        2.0 and later, make sure that the CONFIG.SYS file 
                        contains a FILES=20 command.

        cannot open <file> - the object file could not be found.  On MS-
                        DOS 2.0 and later, make sure that the CONFIG.SYS 
                        file contains a FILES=20 command.

        cannot read <file> - I/O error occurred.

        cannot seek <file> - I/O error occurred.

        cannot write <file> - I/O error or disk out of room.

        different segments for - <name> - the public is declared in 
                        different segments in different modules.  
                        Probably both as a function and as a variable.

        illegal overlay number - in the overlay options -Vnn and -Mnn, 
                        the value nn must be between 1 and 39 in 
                        ascending, consecutive order.

        multiply defined <name> - the same public appears in two modules.

        over 100 arguments - PCCL only allows 100 arguments, including 
                        arguments in -F files. 

        over 64K code   - a segment has over 64K of code. See the 
                        description of PCCL overlay support.

        over 64K data   - the resultant program has over 64K of data. 
                        This is not supported.  You will have to move 
                        some data to locals or use overlays.


        Messages                                            Page 73


        over 300 modules - only 300 modules can be linked together.  The 
                        supplied library only contains about 60 modules.

        too many filenames - there are only 2000 bytes reserved for all 
                        filenames.

        too many labels in <name> - a module in the named file had over 
                        1000 labels.

        too many total PUBLICS in <name> - symbol table has overflowed.  
                        The named file was being read when the overflow 
                        occurred.

        Order Form                                          Page 74


        B. Order Form

        Remit to: C Ware Corporation
                  P.O. Box 428
                  Paso Robles, CA 94447

        PCC version 1.2b

        You can also order by phone using your P.O.#, Mastercard or VISA.  
        (805) 239-4620, 9:00 a.m. - 4:00 p.m., PST ONLY.

        ____ PCC Registration .................... @ $ 30.00 ea  $ ______
             (includes registration software -OR- 
              latest version of PCC)

        ____ UPGRADE to the newest version .......  @ $ 8.00 ea  $ ______
             (includes latest version of the program diskette,
              with documentation on the disk.)

        Orders are normally shipped by USPS at no additional charge.

        For UPS shipment, please add $3.00            $  3.00 ea  $ _____

                                                       Subtotal    ______

                                                  Less Discount    ______

                                                           Total $ ______



        Payment by:  [ ] Check  [ ] MC  [ ] Visa  [ ] PO # ______________

        Name: ___________________________________________________________

        Company: ________________________________________________________

        Address: ________________________________________________________

               : ________________________________________________________

               : ________________________________________________________

        Day Phone: _______________________ Eve: _________________________

         Card #: _______________________________ Exp. Date: _____________

        Signature of cardholder: ________________________________________

        User Comments                                       Page 75


        C. User Comments

        I acquired PCC from
                [ ] - Friend                    [ ] - Software product
                [ ] - Computer Club             [ ] - Computer Store
                [ ] - Data Base Service         [ ] - Electronic BBS
                [ ] - Other - Please Specify ____________________________

        We would also appreciate any input you would care to give 
        concerning PCC.  If you have any ideas or comments that would 
        make PCC a better program, then please let us know.

        We value your comments!

        Comments and/or suggestions:
        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

                               TABLE OF CONTENTS


                       T A B L E   O F   C O N T E N T S 

          1. The Legal Stuff............................................1
             1.1. License...............................................2
             1.2. Support Policy........................................2
             1.3. DISCLAIMER............................................3
             1.4. FOREIGN RESHIPMENT LIABILITY..........................3
             1.5. LIMITED WARRANTY                                                              ......................................3
             1.6. LIMITATIONS OF REMEDIES...............................3
             1.7. General...............................................4
             1.8. TRADEMARKS............................................4
             1.9. ORDERING INFORMATION..................................4
             1.10. Use by Educational Institutions......................5
             1.11. Corporate, Business, Government and Commercial Use...5

          2. Preface....................................................7

          3. An Introduction To PCC.....................................8
             3.1. Using Text, Book, Magazine or Download source code....8
             3.2. Getting Started.......................................9
             3.3. PCC Files.............................................9
             3.4. Basic System.........................................10
             3.5. Setting Up DOS 2.xx, 3.xx, ..........................10
             3.6. RAM DISK.............................................11
             3.7. Completion Codes.....................................11

          4. PCC -- The Personal C Compiler............................13
             4.1. Introduction.........................................13
             4.2. Examples.............................................14
             4.3. The C Language.......................................15
                  4.3.1. Preprocessor directives.......................15
                  4.3.2. Data Types....................................15
             4.4. Extensions...........................................16
                  4.4.1. Forward References............................18
                  4.4.2. Externs.......................................18
                  4.4.3. Macros........................................20
                  4.4.4. Strings.......................................20

          5. The PCCA 8088 Assembler...................................21
             5.1. Introduction.........................................21
             5.2. Invocation...........................................21
             5.3. Example..............................................21

          6. The PCCL Object File Linker...............................23
             6.1. Introduction.........................................23
             6.2. Invocation...........................................23
             6.3. Examples.............................................24
             6.4. Space Considerations.................................25
             6.5. Overlays.............................................25
             6.6. Libraries............................................27

                               TABLE OF CONTENTS


          7. The PCCS.S Standard Library...............................28
             7.1. Introduction.........................................28
             7.2. Names................................................28
             7.3. Program Initialization...............................28
             7.4. Calling Conventions..................................29
             7.5. LIBRARY CONVENTIONS..................................31
             7.6. Disk Input/Output Routines...........................32
             7.7. Math Routines........................................33
             7.8. IBM-PC Screen and Keyboard Interface.................34
             7.9. Standard Library Functions...........................34
                  7.9.1. abs().........................................34
                  7.9.2. atoi()........................................34
                  7.9.3. atof()........................................35
                  7.9.4. atol()........................................35
                  7.9.5. ceil()........................................36
                  7.9.6. chain().......................................36
                  7.9.7. close().......................................37
                  7.9.8. creat().......................................37
                  7.9.9. dates().......................................37
                  7.9.10. doint()......................................37
                  7.9.11. exec().......................................38
                  7.9.12. exit().......................................39
                  7.9.13. exp()........................................39
                  7.9.14. fabs().......................................40
                  7.9.15. fclose().....................................40
                  7.9.16. fgetc()......................................40
                  7.9.17. fgets()......................................40
                  7.9.18. floor()......................................41
                  7.9.19. fopen()......................................41
                  7.9.20. fputc()......................................41
                  7.9.21. fputs()......................................42
                  7.9.22. frand()......................................42
                  7.9.23. fscanf().....................................42
                  7.9.24. getc().......................................42
                  7.9.25. getchar()....................................43
                  7.9.26. gets().......................................43
                  7.9.27. getw().......................................44
                  7.9.28. in().........................................44
                  7.9.29. index()......................................44
                  7.9.30. log()........................................44
                  7.9.31. lmove()......................................45
                  7.9.32. longjmp()....................................45
                  7.9.33. open().......................................46
                  7.9.34. os().........................................46
                  7.9.35. out()........................................46
                  7.9.36. peek().......................................46
                  7.9.37. poke().......................................47
                  7.9.38. pow()........................................47
                  7.9.39. putc().......................................47
                  7.9.40. putchar()....................................47
                  7.9.41. puts().......................................48
                  7.9.42. putw().......................................48
                  7.9.43. qsort()......................................48
                  7.9.44. rand().......................................49
                  7.9.45. rename().....................................49

                               TABLE OF CONTENTS


                  7.9.46. rindex().....................................49
                  7.9.47. scanf()......................................50
                  7.9.48. scr_aputs()..................................52
                  7.9.49. scr_ci().....................................52
                  7.9.50. scr_co().....................................52
                  7.9.51. scr_clr()....................................52
                  7.9.52. scr_clrl()...................................52
                  7.9.53. scr_cls()....................................53
                  7.9.54. scr_csts()...................................53
                  7.9.55. scr_cursoff()................................53
                  7.9.56. scr_curson().................................53
                  7.9.57. scr_rowcol().................................53
                  7.9.58. scr_scdn()...................................54
                  7.9.59. scr_scrdn()..................................54
                  7.9.60. scr_scrup()..................................54
                  7.9.61. scr_scup()...................................54
                  7.9.62. scr_setmode()................................54
                  7.9.63. scr_setup()..................................55
                  7.9.64. scr_sinp()...................................55
                  7.9.65. setjmp().....................................56
                  7.9.66. sqrt().......................................56
                  7.9.67. srand()......................................56
                  7.9.68. sscanf().....................................57
                  7.9.69. strcat().....................................57
                  7.9.70. strcmp().....................................57
                  7.9.71. strcpy().....................................57
                  7.9.72. strlen().....................................58
                  7.9.73. strncat()....................................58
                  7.9.74. strncmp()....................................58
                  7.9.75. strncpy()....................................59
                  7.9.76. times()......................................59
                  7.9.77. ungetc().....................................59
                  7.9.78. unlink().....................................59


        
        Appendices

          A. Messages..................................................60
             A.1. PCC Compiler Messages................................60
                  A.1.1. Banner and Termination Messages...............60
                  A.1.2. Messages......................................60
                         A.1.2.1. PCC Fatal Errors.....................60
                         A.1.2.2. PCC Errors...........................62
                         A.1.2.3. PCC Warnings.........................66
                         A.1.2.4. PCCA Errors ( from PCC Execution )...67
             A.2. PCCA Assembler Messages..............................67
                  A.2.1. Banner and Termination Messages...............67
                  A.2.2. Messages Produced by PCCA.....................67
                         A.2.2.1. Fatal Errors From PCCA...............68
                         A.2.2.2. Errors from PCCA.....................68
             A.3. PCCL Messages........................................71
                  A.3.1. Banner and Termination Messages...............71
                  A.3.2. Warnings from PCCL............................71
                  A.3.3. Fatal Errors from PCCL .......................72

                               TABLE OF CONTENTS


          B. Order Form................................................74

          C. User Comments.............................................75

             index.....................................................76

                               TABLE OF CONTENTS


                         L I S T   O F   F I G U R E S

         7-1: Initial Memory Layout....................................29




         index

        A
        abs(), 34
        An Introduction To PCC, 8
        atof(), 35
        atoi(), 34
        atol(), 35

        B
        Banner and Termination Messages, 60, 67, 71
        Banner and Termination Messages:, 73
        Basic System, 10

        C
        Calling Conventions, 29
        ceil(), 36
        chain(), 36
        close(), 37
        Completion Codes, 11
        Corporate
           Business, Government and Commercial Use, 5
        creat(), 37

        D
        Data Types, 15
        dates(), 37
        DISCLAIMER, 3
        Disk Input/Output Routines, 32
        doint(), 37

        E
        Errors from PCCA, 68
        Example, 21
        Examples, 14, 24
        exec(), 38
        exit(), 39
        exp(), 39
        Extensions, 16
        Externs, 18

        F
        fabs(), 40
        Fatal Errors From PCCA, 68
        Fatal Errors from PCCL, 72
        fclose(), 40
        fgetc(), 40
        fgets(), 40
        floor(), 41
        fopen(), 41
        FOREIGN RESHIPMENT LIABILITY, 3




        Forward References, 18
        fputc(), 41
        fputs(), 42
        frand(), 42
        fscanf(), 42

        G
        General, 4
        getc(), 42
        getchar(), 43
        gets(), 43
        Getting Started, 9
        getw(), 44

        I
        IBM-PC Screen and Keyboard Interface, 34
        in(), 44
        index(), 44
        Introduction, 13, 21, 23, 28
        Invocation, 21, 23

        L
        Libraries, 27
        LIBRARY CONVENTIONS, 31
        License, 2
        LIMITATIONS OF REMEDIES, 3
        LIMITED WARRANTY                                                                , 3
        lmove(), 45
        log(), 44
        longjmp(), 45

        M
        Macros, 20
        Math Routines, 33
        Messages, 60
        Messages Produced by PCCA, 67

        N
        Names, 28

        O
        open(), 46
        Order Form, 75
        ORDERING INFORMATION, 4
        os(), 46
        out(), 46
        Overlays, 25

        P
        PCC -- The Personal C Compiler, 13
        PCC Compiler Messages, 60
        PCC Errors, 62
        PCC Fatal Errors, 60
        PCC Files, 9




        PCC Warnings, 66
        PCCA Assembler Messages, 67
        PCCA Errors ( from PCC Execution ), 67
        PCCL Messages, 71
        peek(), 46
        poke(), 47
        pow(), 47
        Preface, 7
        Preprocessor directives, 15
        Program Initialization, 28
        putc(), 47
        putchar(), 47
        puts(), 48
        putw(), 48

        Q
        qsort(), 48

        R
        RAM DISK, 11
        rand(), 49
        rename(), 49
        rindex(), 49

        S
        scanf(), 50
        scr_aputs(), 52
        scr_ci(), 52
        scr_clr(), 52
        scr_clrl(), 52
        scr_cls(), 53
        scr_co(), 52
        scr_csts(), 53
        scr_cursoff(), 53
        scr_curson(), 53
        scr_rowcol(), 53
        scr_scdn(), 54
        scr_scrdn(), 54
        scr_scrup(), 54
        scr_scup(), 54
        scr_setmode(), 54
        scr_setup(), 55
        scr_sinp(), 55
        setjmp(), 56
        Setting Up DOS 2.xx
           3.xx, ..., 10
        Space Considerations, 25
        sqrt(), 56
        srand(), 56
        sscanf(), 57
        Standard Library Functions, 34
        strcat(), 57
        strcmp(), 57
        strcpy(), 57
        Strings, 20
        strlen(), 58
        strncat(), 58
        strncmp(), 58




        strncpy(), 59
        Support Policy, 2

        T
        The PCCA 8088 Assembler, 21
        The PCCL Object File Linker, 23
        The C Language, 15
        The PCCS.S Standard Library, 28
        The Legal Stuff, 1
        times(), 59
        TRADEMARKS, 4

        U
        ungetc(), 59
        unlink(), 59
        Use by Educational Institutions, 5
        User Comments, 76

        W
        Warnings from PCCL, 71

        U
        Using Text
           Book, Magazine or Download source code, 8


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1337

     Volume in drive A has no label
     Directory of A:\

    FILE1337 TXT      2594   3-13-89  10:32a
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       694   3-07-89   1:59p
    INSTALLH BAT       364   3-07-89  11:32a
    PCC12B   ARC    236536  12-01-88   7:09p
    PKXARC   COM     12242   3-01-87   1:25a
            6 file(s)     252468 bytes
                           67584 bytes free
